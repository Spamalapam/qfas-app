// ===== Q.F.A.S. PROTOCOL ENGINE â€” UI LOGIC =====

const SCHED_STORAGE = 'qfas_custom_schedule';

document.addEventListener('DOMContentLoaded', () => {
  initDate();
  initTabs();
  initSchedule();
  initGenome();
  initWorkouts();
  initNutrition();
  initRecovery();
  initHistory();
  initProtocols();
  initCalendarModal();
});

// ===== DATE DISPLAY =====
function initDate() {
  const d = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('currentDate').textContent = d.toLocaleDateString('en-US', opts);
}

// ===== TAB NAVIGATION =====
function initTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      if (btn.dataset.tab === 'history') initHistory();
    });
  });
}

// ===== SCHEDULE (with localStorage overlay) =====
function getScheduleData() {
  const base = JSON.parse(JSON.stringify(SCHEDULE));
  try {
    const custom = JSON.parse(localStorage.getItem(SCHED_STORAGE)) || {};
    Object.assign(base, custom);
    return base;
  } catch { return base; }
}
function saveCustomDay(date, dayData) {
  try {
    const custom = JSON.parse(localStorage.getItem(SCHED_STORAGE)) || {};
    custom[date] = dayData;
    localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
  } catch { }
}
function deleteCustomDay(date) {
  try {
    const custom = JSON.parse(localStorage.getItem(SCHED_STORAGE)) || {};
    custom[date] = { _deleted: true }; // Mark as deleted instead of removing key
    localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
  } catch { }
}

let currentScheduleDate = null;
function initSchedule() {
  const schedule = getScheduleData();
  const selector = document.getElementById('daySelector');
  selector.innerHTML = '';
  const dates = Object.keys(schedule).filter(d => !schedule[d]._deleted).sort();

  dates.forEach((date, i) => {
    const btn = document.createElement('button');
    const isActive = currentScheduleDate ? date === currentScheduleDate : i === 0;
    btn.className = 'day-btn' + (isActive ? ' active' : '');
    btn.dataset.date = date;
    const shortDay = new Date(date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    btn.textContent = shortDay;
    btn.addEventListener('click', () => {
      selector.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentScheduleDate = date;
      renderScheduleDay(date);
    });
    selector.appendChild(btn);
  });

  const active = currentScheduleDate || dates[0];
  currentScheduleDate = active;
  renderScheduleDay(active);

  document.getElementById('addDayBtn').onclick = () => openCalendarModal(null);
}

function renderScheduleDay(date) {
  const grid = document.getElementById('scheduleGrid');
  const schedule = getScheduleData();
  const day = schedule[date];
  if (!day) { grid.innerHTML = '<p style="color:var(--text-dim)">No schedule data for this date.</p>'; return; }

  const completions = JSON.parse(localStorage.getItem('qfas_completions')) || {};
  const dayCompletions = completions[date] || {};

  let html = '';
  html += `<div class="schedule-header">
    <div>
      <div class="sh-title">${day.dayLabel}</div>
      <div class="sh-tagline">${day.tagline}</div>
    </div>
    <div style="display:flex;gap:6px">
      <button class="schedule-edit-btn" onclick="openCalendarModal('${date}')">âœï¸ Edit</button>
      <button class="schedule-delete-btn" onclick="deleteDay('${date}')">ðŸ—‘ï¸</button>
    </div>
  </div>`;

  html += `<div class="schedule-meta">
    <span class="meta-badge run">ðŸƒ ${day.runType}</span>
    <span class="meta-badge lift">ðŸ‹ï¸ ${day.liftSlot}</span>
  </div>`;

  (day.blocks || []).forEach((block, idx) => {
    const isCompleted = dayCompletions[idx];
    html += `<div class="schedule-block type-${block.type} ${isCompleted ? 'completed' : ''}" data-idx="${idx}">
      <input type="checkbox" class="block-checkbox" ${isCompleted ? 'checked' : ''} onchange="toggleBlockCompletion('${date}', ${idx})">
      <div class="sb-time">${block.time}</div>
      <div class="sb-icon">${block.icon || 'ðŸ“Œ'}</div>
      <div class="sb-content">
        <div class="sb-label">${block.label}</div>
        ${block.detail ? `<div class="sb-detail">${escHtml(block.detail)}</div>` : ''}
      </div>
    </div>`;
  });

  grid.innerHTML = html;
}

function toggleBlockCompletion(date, idx) {
  const completions = JSON.parse(localStorage.getItem('qfas_completions')) || {};
  if (!completions[date]) completions[date] = {};

  completions[date][idx] = !completions[date][idx];
  localStorage.setItem('qfas_completions', JSON.stringify(completions));

  renderScheduleDay(date);
}

function deleteDay(date) {
  if (!confirm('Delete this day?')) return;
  deleteCustomDay(date);
  currentScheduleDate = null;
  initSchedule();
}

// ===== CALENDAR MODAL =====
function initCalendarModal() {
  document.getElementById('modalCloseBtn').onclick = () => {
    document.getElementById('calendarModal').classList.remove('active');
  };
}

function openCalendarModal(editDate) {
  const modal = document.getElementById('calendarModal');
  const title = document.getElementById('modalTitle');
  const dateInput = document.getElementById('modalDate');
  const tagline = document.getElementById('modalTagline');
  const runType = document.getElementById('modalRunType');
  const liftSlot = document.getElementById('modalLiftSlot');
  const blocksInput = document.getElementById('modalBlocks');
  const deleteBtn = document.getElementById('modalDeleteBtn');
  const saveBtn = document.getElementById('modalSaveBtn');

  if (editDate) {
    title.textContent = 'Edit Day';
    const schedule = getScheduleData();
    const day = schedule[editDate];
    dateInput.value = editDate;
    tagline.value = day?.tagline || '';
    runType.value = day?.runType || '';
    liftSlot.value = day?.liftSlot || 'None';
    blocksInput.value = (day?.blocks || []).map(b => `${b.time} | ${b.label} | ${b.type} | ${b.detail || ''}`).join('\n');
    deleteBtn.style.display = 'block';
    deleteBtn.onclick = () => { deleteDay(editDate); modal.classList.remove('active'); };
  } else {
    title.textContent = 'Add New Day';
    dateInput.value = '';
    tagline.value = '';
    runType.selectedIndex = 0;
    liftSlot.selectedIndex = 0;
    blocksInput.value = '';
    deleteBtn.style.display = 'none';
  }

  saveBtn.onclick = () => {
    const d = dateInput.value;
    if (!d) { alert('Pick a date'); return; }
    const shortLabel = new Date(d + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    const blocks = blocksInput.value.trim().split('\n').filter(l => l.trim()).map(line => {
      const parts = line.split('|').map(p => p.trim());
      return { time: parts[0] || '', label: parts[1] || '', type: parts[2] || 'free', detail: parts[3] || '', icon: iconFor(parts[2] || 'free') };
    });
    saveCustomDay(d, {
      dayLabel: shortLabel,
      tagline: tagline.value || 'Custom Day',
      runType: runType.value,
      liftSlot: liftSlot.value,
      blocks
    });
    currentScheduleDate = d;
    modal.classList.remove('active');
    initSchedule();
  };

  modal.classList.add('active');
}

function iconFor(type) {
  const map = { wake: '☀️', nutrition: '🍗', running: '🏃', lifting: '🏋️', core: '🔥', work: '💼', recovery: '💤', sleep: '🌙', free: '🎯', skincare: '🧴', haircare: '💇', biohack: '🧊' };
  return map[type] || '📌';
}

// ===== PROTOCOLS TAB =====
function initProtocols() {
  // Skincare
  document.getElementById('skinGenomeBasis').textContent = '🧬 ' + SKINCARE.genomeBasis;
  let skinHtml = '';
  // AM Routine card
  skinHtml += `<div class="protocol-card"><div class="protocol-card-header">${SKINCARE.am.title}</div>`;
  SKINCARE.am.steps.forEach(s => {
    skinHtml += `<div class="protocol-step"><span class="step-num">${s.step}</span><div><div class="step-name">${s.name}</div><div class="step-detail">${s.detail}</div></div></div>`;
  });
  skinHtml += `</div>`;
  // PM Routine card
  skinHtml += `<div class="protocol-card"><div class="protocol-card-header">${SKINCARE.pm.title}</div>`;
  SKINCARE.pm.steps.forEach(s => {
    skinHtml += `<div class="protocol-step"><span class="step-num">${s.step}</span><div><div class="step-name">${s.name}</div><div class="step-detail">${s.detail}</div></div></div>`;
  });
  skinHtml += `</div>`;
  // Weekly treatments card
  skinHtml += `<div class="protocol-card" style="grid-column:1/-1;"><div class="protocol-card-header">Weekly Treatments</div>`;
  SKINCARE.weekly.forEach(w => {
    skinHtml += `<div class="protocol-step"><span class="step-num">${w.day.slice(0, 3)}</span><div><div class="step-name">${w.treatment}</div><div class="step-detail">${w.detail}</div></div></div>`;
  });
  skinHtml += `</div>`;
  document.getElementById('skincareGrid').innerHTML = skinHtml;

  // Haircare
  document.getElementById('hairGenomeBasis').textContent = '🧬 ' + HAIRCARE.genomeBasis;
  let hairHtml = `<div class="protocol-card"><div class="protocol-card-header">Wash Routine (${HAIRCARE.washDays.join(', ')})</div>`;
  HAIRCARE.routine.forEach(s => {
    hairHtml += `<div class="protocol-step"><span class="step-num">${s.step}</span><div><div class="step-name">${s.name}</div><div class="step-detail">${s.detail}</div></div></div>`;
  });
  hairHtml += `<div class="protocol-step"><span class="step-num">+</span><div><div class="step-name">Scalp Treatment</div><div class="step-detail">${HAIRCARE.scalpTreatment}</div></div></div>`;
  hairHtml += `</div>`;
  document.getElementById('haircareGrid').innerHTML = hairHtml;

  // Biohacking matrix
  let bioHtml = '';
  BIOHACKING.protocols.forEach(p => {
    bioHtml += `<div class="biohack-card">
      <div class="biohack-icon">${p.icon}</div>
      <div class="biohack-name">${p.name}</div>
      <div class="biohack-freq">${p.frequency}</div>
      <div class="biohack-meta"><span>⏱ ${p.duration}</span><span>🕐 ${p.timing}</span></div>
      <div class="biohack-days">${p.days.map(d => `<span class="day-chip">${d}</span>`).join('')}</div>
      <div class="biohack-detail">${p.detail}</div>
    </div>`;
  });
  document.getElementById('biohackGrid').innerHTML = bioHtml;
}

// ===== GENOME =====
function initGenome() {
  renderOverrides();
  renderSNPGrid('primaryGrid', GENOME.primary);
  renderSNPGrid('bonusGrid', GENOME.bonus);
}

function renderOverrides() {
  const el = document.getElementById('overrideAlerts');
  let html = '';
  OVERRIDES.forEach(ov => {
    html += `<div class="override-card sev-${ov.severity}">
      <div class="override-title">${ov.title}</div>
      <div class="override-detail">${ov.detail}</div>
    </div>`;
  });
  el.innerHTML = html;
}

function renderSNPGrid(containerId, snpObj) {
  const el = document.getElementById(containerId);
  let html = '';
  for (const [rsid, snp] of Object.entries(snpObj)) {
    const impactClass = snp.impact || 'low';
    html += `<div class="snp-card">
      <div class="snp-header">
        <div>
          <div class="snp-gene">${snp.gene}</div>
          <div class="snp-rsid">${rsid}</div>
        </div>
        <div>
          <span class="snp-genotype">${snp.genotype}</span>
          <span class="impact-badge impact-${impactClass}">${impactClass}</span>
        </div>
      </div>
      <div class="snp-label">${snp.label}</div>
      <div class="snp-interp">${snp.interpretation}</div>
      ${snp.override ? `<div class="snp-override">${snp.override}</div>` : ''}
    </div>`;
  }
  el.innerHTML = html;
}

// ===== WORKOUTS =====
function initWorkouts() {
  renderLifting();
  renderRunning();
  renderCore();
}

function renderLifting() {
  const el = document.getElementById('liftingGrid');
  let html = '';
  WORKOUTS.lifting.forEach((w, idx) => {
    html += `<div class="workout-card">
      <div class="wc-name">${w.name}</div>
      <div class="wc-focus">${w.focus}</div>`;
    w.exercises.forEach(ex => {
      html += `<div class="wc-exercise">
        <span class="wc-set">${ex.set}</span>
        <div>
          <div class="wc-exercise-name">${ex.name} <span class="wc-reps">${ex.sets}Ã—${ex.repRange}</span></div>
          <div class="wc-pair">â†” ${ex.pair}: ${ex.pairName} (${ex.pairSets}Ã—${ex.pairReps})</div>
        </div>
      </div>`;
    });
    html += `<button class="start-workout-btn" onclick="WorkoutPlayer.startLifting(${idx})">â–¶ START WORKOUT</button>`;
    html += `</div>`;
  });
  el.innerHTML = html;
}

function renderRunning() {
  const el = document.getElementById('runningGrid');
  let html = '';
  WORKOUTS.running.forEach(r => {
    const restClass = r.type === 'ABSOLUTE REST' ? ' rest' : '';
    html += `<div class="run-card${restClass}">
      <div class="rc-icon">${r.icon}</div>
      <div>
        <div class="rc-day">${r.day}</div>
        <div class="rc-name">${r.name}</div>
        <div class="rc-detail">${r.type} Â· ${r.detail}</div>
      </div>
    </div>`;
  });
  el.innerHTML = html;
}

function renderCore() {
  const el = document.getElementById('coreGrid');
  let html = `<div class="core-card">`;
  WORKOUTS.core.exercises.forEach(ex => {
    html += `<div class="core-exercise">
      <div>
        <div class="ce-name">${ex.name}</div>
        <div class="ce-note">${ex.note}</div>
      </div>
      <div class="ce-reps">${ex.reps}</div>
    </div>`;
  });
  html += `<button class="start-workout-btn start-core-btn" onclick="WorkoutPlayer.startCore()">ðŸ”¥ START CORE CIRCUIT</button>`;
  html += `</div>`;
  el.innerHTML = html;
}

// ===== NUTRITION =====
function initNutrition() {
  const el = document.getElementById('nutritionPanel');
  let html = '';
  html += `<div class="nutri-card">
    <div class="nutri-title">Daily Calorie Deficit</div>
    <div class="nutri-stat">-${NUTRITION.deficit}</div>
    <div class="nutri-detail">Target: Drop exactly 10 lbs. Track daily for 4+ weeks (FTO AA mandate).</div>
  </div>`;
  html += `<div class="nutri-card">
    <div class="nutri-title">Protein Target</div>
    <div class="nutri-stat">${NUTRITION.proteinPerLb}</div>
    <div class="nutri-detail">per pound of bodyweight. Elevated from baseline 1.0g due to triple inflammatory stack (IL-6 CG, TNF-Î± AG, IL-1Î² AG) and FTO AA satiety support.</div>
  </div>`;
  html += `<div class="nutri-card">
    <div class="nutri-title">Carb Timing</div>
    <div class="nutri-stat">70%</div>
    <div class="nutri-detail">${NUTRITION.carbTiming}. Remaining 30% spread across other meals. Zero carbs within 2 hrs of sleep (MTNR1B override).</div>
  </div>`;
  html += `<div class="nutri-card">
    <div class="nutri-title">Clinic Mode / Work Shifts</div>
    <div class="nutri-detail">${NUTRITION.clinicMode}</div>
  </div>`;
  html += `<div class="nutri-card" style="grid-column: 1 / -1;">
    <div class="nutri-title">Genome-Adjusted Nutrition Rules</div>
    <ul class="nutri-list">
      ${NUTRITION.notes.map(n => `<li>${n}</li>`).join('')}
    </ul>
  </div>`;
  el.innerHTML = html;
}

// ===== RECOVERY =====
function initRecovery() {
  const el = document.getElementById('recoveryPanel');
  let html = '';
  html += `<div class="recovery-card">
    <div class="recov-title">Sleep Minimum</div>
    <div class="recov-stat">${RECOVERY.sleepMin.split('(')[0].trim()}</div>
    <div class="nutri-detail">${RECOVERY.sleepMin}</div>
  </div>`;
  html += `<div class="recovery-card">
    <div class="recov-title">Room Environment</div>
    <div class="recov-stat">${RECOVERY.roomTemp}</div>
    <div class="nutri-detail">${RECOVERY.screensOff} before bed.</div>
  </div>`;
  html += `<div class="recovery-card">
    <div class="recov-title">Supplement Stack</div>
    <ul class="recov-list">
      ${RECOVERY.supplements.map(s => `<li>${s}</li>`).join('')}
    </ul>
  </div>`;
  html += `<div class="recovery-card">
    <div class="recov-title">Genome-Driven Recovery Notes</div>
    <ul class="recov-list">
      ${RECOVERY.notes.map(n => `<li>${n}</li>`).join('')}
    </ul>
  </div>`;
  el.innerHTML = html;
}

// ===== HISTORY =====
function initHistory() {
  const el = document.getElementById('historyPanel');
  if (!el) return;
  try {
    const history = JSON.parse(localStorage.getItem('qfas_workout_history')) || [];
    if (history.length === 0) {
      el.innerHTML = '<div class="empty-state">No workouts logged yet. Start a workout from the Workouts tab!</div>';
      return;
    }
    let html = '';
    history.forEach(h => {
      const d = new Date(h.date);
      const dateStr = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
      const mins = Math.floor(h.duration / 60);
      html += `<div class="history-card">
        <div class="hc-header">
          <div class="hc-name">${h.workout}</div>
          <div class="hc-date">${dateStr}</div>
        </div>
        <div class="hc-stats">
          <div><div class="hc-stat-val">${mins} min</div><div class="hc-stat-label">DURATION</div></div>
          <div><div class="hc-stat-val">${h.sets}</div><div class="hc-stat-label">SETS</div></div>
          <div><div class="hc-stat-val">${h.reps}</div><div class="hc-stat-label">REPS</div></div>
          <div><div class="hc-stat-val">${h.volume > 0 ? Math.round(h.volume).toLocaleString() : 'â€”'}</div><div class="hc-stat-label">LBS VOL</div></div>
          <div><div class="hc-stat-val">${h.avgRPE}</div><div class="hc-stat-label">AVG RPE</div></div>
        </div>
      </div>`;
    });
    el.innerHTML = html;
  } catch { el.innerHTML = '<div class="empty-state">Error loading history.</div>'; }
}

// ===== OMNI-TRACKER / AI SYNC =====
function saveSyncData() {
  const data = {
    sleepStart: document.getElementById('syncSleepStart').value,
    sleepEnd: document.getElementById('syncSleepEnd').value,
    sleepQuality: document.getElementById('syncSleepQuality').value,
    energyScore: document.getElementById('syncEnergyScore').value,
    runType: document.getElementById('syncRunType').value,
    runDistance: document.getElementById('syncRunDistance').value,
    runDuration: document.getElementById('syncRunDuration').value,
    runPace: document.getElementById('syncRunPace').value,
    runNotes: document.getElementById('syncRunNotes').value,
    weight: document.getElementById('syncWeight').value,
    goalWeight: document.getElementById('syncGoalWeight').value,
    avgHR: document.getElementById('syncAvgHR').value,
    antioxidant: document.getElementById('syncAntioxidant').value,
    stress: document.getElementById('syncStress').value,
    spO2: document.getElementById('syncSpO2').value,
    steps: document.getElementById('syncSteps').value,
    meditation: document.getElementById('syncMeditation').checked,
    dateLogged: new Date().toISOString()
  };
  localStorage.setItem('qfas_daily_metrics', JSON.stringify(data));

  const btn = document.getElementById('saveMetricsBtn');
  btn.textContent = '\u2705 SAVED!';
  btn.style.background = 'var(--green)';
  setTimeout(() => { btn.textContent = 'SAVE METRICS'; btn.style.background = ''; }, 2000);
}

function loadSyncData() {
  try {
    const data = JSON.parse(localStorage.getItem('qfas_daily_metrics'));
    if (!data) return;
    document.getElementById('syncSleepStart').value = data.sleepStart || '';
    document.getElementById('syncSleepEnd').value = data.sleepEnd || '';
    document.getElementById('syncSleepQuality').value = data.sleepQuality || '';
    document.getElementById('syncEnergyScore').value = data.energyScore || '';
    document.getElementById('syncRunType').value = data.runType || '';
    document.getElementById('syncRunDistance').value = data.runDistance || '';
    document.getElementById('syncRunDuration').value = data.runDuration || '';
    document.getElementById('syncRunPace').value = data.runPace || '';
    document.getElementById('syncRunNotes').value = data.runNotes || '';
    document.getElementById('syncWeight').value = data.weight || '';
    document.getElementById('syncGoalWeight').value = data.goalWeight || '';
    document.getElementById('syncAvgHR').value = data.avgHR || '';
    document.getElementById('syncAntioxidant').value = data.antioxidant || '';
    document.getElementById('syncStress').value = data.stress || '';
    document.getElementById('syncSpO2').value = data.spO2 || '';
    document.getElementById('syncSteps').value = data.steps || '';
    document.getElementById('syncMeditation').checked = !!data.meditation;
  } catch (e) { console.error('Error loading sync data', e); }
}

// Load saved metrics on page load
document.addEventListener('DOMContentLoaded', loadSyncData);

function generateAIPrompt() {
  const metrics = JSON.parse(localStorage.getItem('qfas_daily_metrics')) || {};
  const schedule = getScheduleData();
  const completions = JSON.parse(localStorage.getItem('qfas_completions')) || {};
  const workoutHistory = JSON.parse(localStorage.getItem('qfas_workout_history')) || [];

  // Format recent schedule completion for the last 3 days
  const today = new Date();
  let scheduleContext = "RECENT SCHEDULE COMPLETION:\n";

  for (let i = 2; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];

    if (schedule[dateStr] && !schedule[dateStr]._deleted) {
      scheduleContext += `\n--- ${schedule[dateStr].dayLabel} ---\n`;
      const dayComps = completions[dateStr] || {};
      (schedule[dateStr].blocks || []).forEach((block, idx) => {
        const status = dayComps[idx] ? '[X]' : '[ ]';
        scheduleContext += `${status} ${block.time} | ${block.label} | ${block.type}\n`;
      });
    }
  }

  // Format recent workout history (last 5)
  let historyContext = "RECENT WORKOUT HISTORY:\n";
  const recentWorkouts = workoutHistory.slice(-5);
  if (recentWorkouts.length > 0) {
    recentWorkouts.forEach(h => {
      const d = new Date(h.date);
      const dateStr = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      historyContext += `${dateStr}: ${h.workout} | ${Math.floor(h.duration / 60)}min | ${h.sets} sets | ${h.reps} reps | Vol: ${h.volume || 'N/A'} | RPE: ${h.avgRPE}\n`;
    });
  } else {
    historyContext += "No logged workouts yet.\n";
  }

  // Build run summary
  let runSummary = "No run logged today.";
  if (metrics.runType) {
    runSummary = `${metrics.runType} | ${metrics.runDistance || '?'} mi | ${metrics.runDuration || '?'} min | Pace: ${metrics.runPace || 'N/A'} | Notes: ${metrics.runNotes || 'none'}`;
  }

  const prompt = `You are the Q.F.A.S. Protocol Engine (Quit F*cking Around out of Spite) for Adam.
Your goal is to enforce the genome-integrated protocol, optimize the daily schedule based on completion rates, and provide uncompromising accountability.

Here is Adam's daily data:

[DAILY METRICS]
Sleep: ${metrics.sleepStart || 'N/A'} to ${metrics.sleepEnd || 'N/A'} (Quality: ${metrics.sleepQuality || 'N/A'}/10)
Samsung Energy Score: ${metrics.energyScore || 'N/A'}/100
Stress Score: ${metrics.stress || 'N/A'}/100
SpO2: ${metrics.spO2 || 'N/A'}%
Steps: ${metrics.steps || 'N/A'}
Current Weight: ${metrics.weight || 'N/A'} lbs (Goal: ${metrics.goalWeight || 'N/A'} lbs)
Avg Resting HR: ${metrics.avgHR || 'N/A'} | Antioxidant Index: ${metrics.antioxidant || 'N/A'}
Meditation Completed: ${metrics.meditation ? 'Yes' : 'No'}

[TODAY'S RUN]
${runSummary}

[GENOME RULES OVERVIEW (DO NOT VIOLATE)]
1. FTO AA = High appetite. Strict calorie tracking. 1.2g/lb protein.
2. COMT AA / BDNF CT = High anxiety/low dopamine under stress. RUNNING IS MEDICINE.
3. IL-6 CG / TNF-a AG / IL-1b AG = Triple inflammatory stack. Slow recoverer. 8 hrs sleep minimum. Post-run omegas + curcumin.
4. ACTN3 TT + ACE II = Endurance dominant. 120-150s rest between lifts. Not a power lifter.
5. MTNR1B CG = No carbs within 2 hrs of sleep.
6. APOE e3/e4 = Elevated CVD/Alzheimer risk. Sleep + exercise + omega-3s are neuroprotective.
7. VDR CT = Supplement 3000-5000 IU D3 + K2-MK7.
8. COL5A1 CT = 5-10 min dynamic mobility before hard runs. 50 mi/week ceiling.
9. ADORA2A CC = Caffeine cutoff 2 PM.

${scheduleContext}

${historyContext}

INSTRUCTIONS:
1. Analyze the completion rates and daily metrics.
2. Provide harsh but analytical feedback on what was missed and why. Grade the performance (A to F).
3. Generate the schedule for the next 2 days (use today as a reference) formatted exactly as the JSON below. Ensure any critical uncompleted tasks roll over if necessary.

Output your response STRICTLY as JSON with the following structure, and nothing else outside the JSON block:
{
  "grade": "B-",
  "feedback": "Your analysis here...",
  "newDays": {
    "YYYY-MM-DD": {
      "dayLabel": "Friday, Feb 27",
      "tagline": "EASY RUN DAY",
      "runType": "Easy Run",
      "liftSlot": "None",
      "blocks": [
        {"time": "7:00 AM", "label": "Wake", "icon": "\ud83d\udd14", "type": "wake", "detail": "..."}
      ]
    }
  }
}
`;

  // Show the prompt in the output textarea
  const outputArea = document.getElementById('aiPromptOutput');
  outputArea.value = prompt;
  outputArea.style.display = 'block';

  // Try clipboard, but don't rely on it
  const btn = document.getElementById('generatePromptBtn');
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(prompt).then(() => {
      btn.textContent = '\u2705 COPIED TO CLIPBOARD!';
      setTimeout(() => { btn.textContent = '\ud83d\udccb GENERATE & COPY PROMPT'; }, 2500);
    }).catch(() => {
      btn.textContent = '\u2705 PROMPT GENERATED! SELECT & COPY BELOW';
      outputArea.select();
      setTimeout(() => { btn.textContent = '\ud83d\udccb GENERATE & COPY PROMPT'; }, 3000);
    });
  } else {
    btn.textContent = '\u2705 PROMPT GENERATED! SELECT & COPY BELOW';
    outputArea.select();
    setTimeout(() => { btn.textContent = '\ud83d\udccb GENERATE & COPY PROMPT'; }, 3000);
  }
}

function importAIResponse() {
  const textarea = document.getElementById('aiImportPayload');
  const payloadStr = textarea.value.trim();
  if (!payloadStr) { alert('Paste the AI response JSON first.'); return; }

  try {
    // Attempt to extract JSON if the AI wrapped it in markdown
    let jsonStr = payloadStr;
    const match = payloadStr.match(/\{[\s\S]*\}/);
    if (match) {
      jsonStr = match[0];
    }

    const parsed = JSON.parse(jsonStr);

    // Save new days to local storage custom schedule
    if (parsed.newDays) {
      const custom = JSON.parse(localStorage.getItem(SCHED_STORAGE)) || {};
      Object.assign(custom, parsed.newDays);
      localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
      initSchedule(); // Re-render schedule UI
    }

    // Show insights
    if (parsed.grade || parsed.feedback) {
      const insights = document.getElementById('aiInsightsPanel');
      insights.style.display = 'block';
      document.getElementById('aiGrade').textContent = `GRADE: ${parsed.grade || 'N/A'}`;
      document.getElementById('aiFeedback').textContent = parsed.feedback || '';
    }

    const btn = document.querySelector('button[onclick="importAIResponse()"]');
    btn.textContent = '\u2705 IMPORTED!';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.textContent = '\ud83d\udce5 IMPORT RESPONSE'; btn.style.background = 'linear-gradient(90deg,#00f0ff,#b400ff)'; }, 2500);
    textarea.value = '';

  } catch (err) {
    alert('Failed to parse AI response. Make sure it is valid JSON.\n\nError: ' + err.message);
    console.error(err);
  }
}

// ===== UTILITY =====
function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

