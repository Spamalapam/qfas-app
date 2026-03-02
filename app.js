// ===== Q.F.A.S. PROTOCOL ENGINE — UI LOGIC =====

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
  loadSyncData();
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
    delete custom[date];
    localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
  } catch { }
}

let currentScheduleDate = null;
function initSchedule() {
  const schedule = getScheduleData();
  const selector = document.getElementById('daySelector');
  selector.innerHTML = '';
  const dates = Object.keys(schedule).sort();

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

  let html = '';
  html += `<div class="schedule-header">
    <div>
      <div class="sh-title">${day.dayLabel}</div>
      <div class="sh-tagline">${day.tagline}</div>
    </div>
    <div style="display:flex;gap:6px">
      <button class="schedule-edit-btn" onclick="openCalendarModal('${date}')">✏️ Edit</button>
      <button class="schedule-delete-btn" onclick="deleteDay('${date}')">🗑️</button>
    </div>
  </div>`;

  html += `<div class="schedule-meta">
    <span class="meta-badge run">🏃 ${day.runType}</span>
    <span class="meta-badge lift">🏋️ ${day.liftSlot}</span>
  </div>`;

  const completions = JSON.parse(localStorage.getItem('qfas_completions') || '{}');
  const dayComps = completions[date] || {};
  (day.blocks || []).forEach((block, idx) => {
    const checked = dayComps[idx] ? 'checked' : '';
    const doneClass = dayComps[idx] ? ' completed' : '';
    html += `<div class="schedule-block type-${block.type}${doneClass}">
      <input type="checkbox" class="block-check" ${checked} onchange="toggleBlockCompletion('${date}', ${idx}, this.checked)">
      <div class="sb-time">${block.time}</div>
      <div class="sb-icon">${block.icon || '📌'}</div>
      <div class="sb-content">
        <div class="sb-label">${block.label}</div>
        ${block.detail ? `<div class="sb-detail">${escHtml(block.detail)}</div>` : ''}
      </div>
    </div>`;
  });

  grid.innerHTML = html;
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
          <div class="wc-exercise-name">${ex.name} <span class="wc-reps">${ex.sets}×${ex.repRange}</span></div>
          <div class="wc-pair">↔ ${ex.pair}: ${ex.pairName} (${ex.pairSets}×${ex.pairReps})</div>
        </div>
      </div>`;
    });
    html += `<button class="start-workout-btn" onclick="WorkoutPlayer.startLifting(${idx})">▶ START WORKOUT</button>`;
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
        <div class="rc-detail">${r.type} · ${r.detail}</div>
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
  html += `<button class="start-workout-btn start-core-btn" onclick="WorkoutPlayer.startCore()">🔥 START CORE CIRCUIT</button>`;
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
    <div class="nutri-detail">per pound of bodyweight. Elevated from baseline 1.0g due to triple inflammatory stack (IL-6 CG, TNF-α AG, IL-1β AG) and FTO AA satiety support.</div>
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
          <div><div class="hc-stat-val">${h.volume > 0 ? Math.round(h.volume).toLocaleString() : '—'}</div><div class="hc-stat-label">LBS VOL</div></div>
          <div><div class="hc-stat-val">${h.avgRPE}</div><div class="hc-stat-label">AVG RPE</div></div>
        </div>
      </div>`;
    });
    el.innerHTML = html;
  } catch { el.innerHTML = '<div class="empty-state">Error loading history.</div>'; }
}

// ===== UTILITY =====
function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ===== BLOCK COMPLETIONS =====
function toggleBlockCompletion(date, idx, checked) {
  const completions = JSON.parse(localStorage.getItem('qfas_completions') || '{}');
  if (!completions[date]) completions[date] = {};
  completions[date][idx] = checked;
  localStorage.setItem('qfas_completions', JSON.stringify(completions));
  renderScheduleDay(date);
}

// ===== PROTOCOLS TAB =====
function initProtocols() {
  if (typeof SKINCARE === 'undefined') return;
  document.getElementById('skinGenomeBasis').textContent = '🧬 ' + SKINCARE.genomeBasis;
  let skinHtml = '';
  skinHtml += `<div class="protocol-card"><div class="protocol-card-header">${SKINCARE.am.title}</div>`;
  SKINCARE.am.steps.forEach(s => {
    skinHtml += `<div class="protocol-step"><span class="step-num">${s.step}</span><div><div class="step-name">${s.name}</div><div class="step-detail">${s.detail}</div></div></div>`;
  });
  skinHtml += `</div>`;
  skinHtml += `<div class="protocol-card"><div class="protocol-card-header">${SKINCARE.pm.title}</div>`;
  SKINCARE.pm.steps.forEach(s => {
    skinHtml += `<div class="protocol-step"><span class="step-num">${s.step}</span><div><div class="step-name">${s.name}</div><div class="step-detail">${s.detail}</div></div></div>`;
  });
  skinHtml += `</div>`;
  skinHtml += `<div class="protocol-card" style="grid-column:1/-1;"><div class="protocol-card-header">Weekly Treatments</div>`;
  SKINCARE.weekly.forEach(w => {
    skinHtml += `<div class="protocol-step"><span class="step-num">${w.day.slice(0, 3)}</span><div><div class="step-name">${w.treatment}</div><div class="step-detail">${w.detail}</div></div></div>`;
  });
  skinHtml += `</div>`;
  document.getElementById('skincareGrid').innerHTML = skinHtml;

  document.getElementById('hairGenomeBasis').textContent = '🧬 ' + HAIRCARE.genomeBasis;
  let hairHtml = `<div class="protocol-card"><div class="protocol-card-header">Wash Routine (${HAIRCARE.washDays.join(', ')})</div>`;
  HAIRCARE.routine.forEach(s => {
    hairHtml += `<div class="protocol-step"><span class="step-num">${s.step}</span><div><div class="step-name">${s.name}</div><div class="step-detail">${s.detail}</div></div></div>`;
  });
  hairHtml += `<div class="protocol-step"><span class="step-num">+</span><div><div class="step-name">Scalp Treatment</div><div class="step-detail">${HAIRCARE.scalpTreatment}</div></div></div>`;
  hairHtml += `</div>`;
  document.getElementById('haircareGrid').innerHTML = hairHtml;

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

// ===== OMNI-TRACKER / AI SYNC =====
function saveSyncData() {
  const date = new Date().toISOString().slice(0, 10);
  const data = {
    sleepStart: document.getElementById('sleepStart')?.value || '',
    sleepEnd: document.getElementById('sleepEnd')?.value || '',
    sleepQuality: document.getElementById('sleepQuality')?.value || '',
    energyScore: document.getElementById('energyScore')?.value || '',
    runType: document.getElementById('runTypeSelect')?.value || '',
    runDistance: document.getElementById('runDistance')?.value || '',
    runDuration: document.getElementById('runDuration')?.value || '',
    runPace: document.getElementById('runPace')?.value || '',
    runNotes: document.getElementById('runNotes')?.value || '',
    weight: document.getElementById('currentWeight')?.value || '',
    goalWeight: document.getElementById('goalWeight')?.value || '',
    avgHR: document.getElementById('avgHR')?.value || '',
    antioxidant: document.getElementById('antioxidant')?.value || '',
    stressScore: document.getElementById('stressScore')?.value || '',
    spo2: document.getElementById('spo2')?.value || '',
    steps: document.getElementById('stepsToday')?.value || '',
    meditation: document.getElementById('meditation')?.checked || false
  };
  localStorage.setItem('qfas_sync_' + date, JSON.stringify(data));
  const btn = document.getElementById('saveMetricsBtn');
  if (btn) {
    const oldText = btn.textContent;
    btn.textContent = '✅ SAVED!';
    btn.style.background = '#00c853';
    setTimeout(() => { btn.textContent = oldText; btn.style.background = ''; }, 2500);
  }
}

function loadSyncData() {
  const date = new Date().toISOString().slice(0, 10);
  const raw = localStorage.getItem('qfas_sync_' + date);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    const fields = ['sleepStart', 'sleepEnd', 'sleepQuality', 'energyScore', 'runDistance', 'runDuration', 'runPace', 'runNotes', 'currentWeight', 'goalWeight', 'avgHR', 'antioxidant', 'stressScore', 'spo2', 'stepsToday'];
    fields.forEach(id => { const el = document.getElementById(id); if (el && data[id.replace('current', '').replace('Today', '').toLowerCase()] !== undefined) { /* best effort */ } });
    if (data.sleepStart) { const el = document.getElementById('sleepStart'); if (el) el.value = data.sleepStart; }
    if (data.sleepEnd) { const el = document.getElementById('sleepEnd'); if (el) el.value = data.sleepEnd; }
    if (data.sleepQuality) { const el = document.getElementById('sleepQuality'); if (el) el.value = data.sleepQuality; }
    if (data.energyScore) { const el = document.getElementById('energyScore'); if (el) el.value = data.energyScore; }
    if (data.runType) { const el = document.getElementById('runTypeSelect'); if (el) el.value = data.runType; }
    if (data.runDistance) { const el = document.getElementById('runDistance'); if (el) el.value = data.runDistance; }
    if (data.runDuration) { const el = document.getElementById('runDuration'); if (el) el.value = data.runDuration; }
    if (data.runPace) { const el = document.getElementById('runPace'); if (el) el.value = data.runPace; }
    if (data.runNotes) { const el = document.getElementById('runNotes'); if (el) el.value = data.runNotes; }
    if (data.weight) { const el = document.getElementById('currentWeight'); if (el) el.value = data.weight; }
    if (data.goalWeight) { const el = document.getElementById('goalWeight'); if (el) el.value = data.goalWeight; }
    if (data.avgHR) { const el = document.getElementById('avgHR'); if (el) el.value = data.avgHR; }
    if (data.antioxidant) { const el = document.getElementById('antioxidant'); if (el) el.value = data.antioxidant; }
    if (data.stressScore) { const el = document.getElementById('stressScore'); if (el) el.value = data.stressScore; }
    if (data.spo2) { const el = document.getElementById('spo2'); if (el) el.value = data.spo2; }
    if (data.steps) { const el = document.getElementById('stepsToday'); if (el) el.value = data.steps; }
    if (data.meditation) { const el = document.getElementById('meditation'); if (el) el.checked = data.meditation; }
  } catch (e) { console.error('Failed to load sync data', e); }
}

function generateAIPrompt() {
  const date = new Date().toISOString().slice(0, 10);
  const raw = localStorage.getItem('qfas_sync_' + date);
  const metrics = raw ? JSON.parse(raw) : {};
  const schedule = getScheduleData();
  const completions = JSON.parse(localStorage.getItem('qfas_completions') || '{}');

  let scheduleContext = '[RECENT SCHEDULE COMPLETION (Last 3 days)]';
  const today = new Date();
  for (let i = 0; i < 3; i++) {
    const d = new Date(today); d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    if (!schedule[dateStr]) continue;
    scheduleContext += `\n--- ${schedule[dateStr].dayLabel} ---\n`;
    const dayComps = completions[dateStr] || {};
    (schedule[dateStr].blocks || []).forEach((block, idx) => {
      const status = dayComps[idx] ? '[X]' : '[ ]';
      scheduleContext += `${status} ${block.time} | ${block.label} | ${block.type}\n`;
    });
  }

  const prompt = `You are the Q.F.A.S. Protocol Engine (Quit F*cking Around out of Spite) for Adam.
Your goal is to enforce the genome-integrated protocol, optimize the daily schedule based on completion rates, and provide uncompromising accountability.

Here is Adam's daily data:

[DAILY METRICS]
Sleep: ${metrics.sleepStart || 'N/A'} to ${metrics.sleepEnd || 'N/A'} (Quality: ${metrics.sleepQuality || 'N/A'}/10)
Samsung Energy Score: ${metrics.energyScore || 'N/A'}/100
Run: ${metrics.runType || 'None'} | ${metrics.runDistance || '?'} mi | ${metrics.runDuration || '?'} min | Pace: ${metrics.runPace || '?'} min/mi
Run Notes: ${metrics.runNotes || 'None'}
Current Weight: ${metrics.weight || 'N/A'} lbs (Goal: ${metrics.goalWeight || 'N/A'} lbs)
Avg HR: ${metrics.avgHR || 'N/A'} | Antioxidant Index: ${metrics.antioxidant || 'N/A'}
Stress Score: ${metrics.stressScore || 'N/A'}/100 | SpO2: ${metrics.spo2 || 'N/A'}%
Steps Today: ${metrics.steps || 'N/A'}
Meditation Completed: ${metrics.meditation ? 'Yes' : 'No'}

[GENOME RULES OVERVIEW (DO NOT VIOLATE)]
1. FTO AA = High appetite. Strict calorie tracking. 1.2g/lb protein.
2. COMT AA / BDNF CT = High anxiety/low dopamine under stress. RUNNING IS MEDICINE.
3. IL-6 CG / TNF-a AG = Slow recoverer. 8 hrs sleep minimum. Post-run omegas.
4. ACTN3 TT = Endurance dominant. 120-150s rest between lifts.
5. MTNR1B CG = No carbs within 2 hrs of sleep.

${scheduleContext}

INSTRUCTIONS:
1. Analyze the completion rates and daily metrics.
2. Provide harsh but analytical feedback on what was missed and why. Grade the performance (A to F).
3. Generate the schedule for the next 2 days formatted exactly as the JSON below.

Output your response STRICTLY as JSON:
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
        {"time": "7:00 AM", "label": "Wake", "icon": "🔔", "type": "wake", "detail": "..."}
      ]
    }
  }
}
`;

  // Try clipboard, fall back to textarea
  navigator.clipboard.writeText(prompt).then(() => {
    const btn = document.getElementById('generatePromptBtn');
    if (btn) {
      const oldText = btn.textContent;
      btn.textContent = '✅ COPIED TO CLIPBOARD!';
      setTimeout(() => btn.textContent = oldText, 2500);
    }
  }).catch(() => {
    let ta = document.getElementById('promptFallback');
    if (!ta) {
      ta = document.createElement('textarea');
      ta.id = 'promptFallback';
      ta.style.cssText = 'width:100%;height:300px;margin-top:10px;background:#1a1a2e;color:#e0e0e0;border:1px solid #333;padding:10px;font-size:0.8rem;border-radius:8px;';
      document.getElementById('generatePromptBtn').parentElement.appendChild(ta);
    }
    ta.value = prompt;
    ta.style.display = 'block';
    ta.select();
  });
}

function importAIResponse() {
  const textarea = document.getElementById('aiImportPayload');
  const payloadStr = textarea.value.trim();
  if (!payloadStr) return;

  try {
    let jsonStr = payloadStr;
    const match = payloadStr.match(/\{[\s\S]*\}/);
    if (match) jsonStr = match[0];

    const parsed = JSON.parse(jsonStr);

    if (parsed.newDays) {
      const custom = JSON.parse(localStorage.getItem(SCHED_STORAGE) || '{}');
      Object.assign(custom, parsed.newDays);
      localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
      initSchedule();
    }

    if (parsed.grade || parsed.feedback) {
      const insights = document.getElementById('aiInsightsPanel');
      if (insights) {
        insights.style.display = 'block';
        document.getElementById('aiGrade').textContent = 'GRADE: ' + (parsed.grade || 'N/A');
        document.getElementById('aiFeedback').textContent = parsed.feedback || '';
      }
    }

    const btn = document.getElementById('importResponseBtn');
    if (btn) {
      const oldText = btn.textContent;
      btn.textContent = '✅ IMPORTED!';
      setTimeout(() => btn.textContent = oldText, 2500);
    }
    textarea.value = '';
  } catch (err) {
    alert('Failed to parse AI response. Make sure it is valid JSON.');
    console.error(err);
  }
}

// ===== RESCHEDULE MY DAY (AI-powered) =====
function rescheduleMyDay() {
  const date = currentScheduleDate || new Date().toISOString().slice(0, 10);
  const schedule = getScheduleData();
  const day = schedule[date];
  const now = new Date();
  const currentTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const completions = JSON.parse(localStorage.getItem('qfas_completions') || '{}');
  const dayComps = completions[date] || {};

  let blockStatus = '';
  if (day && day.blocks) {
    day.blocks.forEach((block, idx) => {
      const status = dayComps[idx] ? '[DONE]' : '[MISSED]';
      blockStatus += `${status} ${block.time} | ${block.label} | ${block.type}\n`;
    });
  }

  const prompt = `You are the Q.F.A.S. Protocol Engine. Adam needs his schedule REBUILT for today (${date}).

SITUATION:
- Current time: ${currentTime}
- He woke up LATER than planned
- Some blocks may need to be dropped, merged, or shifted
${day ? `- Original schedule was: "${day.tagline}" — ${day.runType}, Lift: ${day.liftSlot}\n` : ''}
BLOCKS STATUS:
${blockStatus || 'No blocks yet for this day.'}

GENOME RULES (DO NOT VIOLATE):
1. FTO AA = Must eat before intense exercise (no fasted HIIT)
2. ACTN3 TT = 120-150 sec rest between lift supersets
3. IL-6/TNF-a = Post-exercise nutrition within 30 min
4. MTNR1B CG = No carbs within 2 hrs of sleep
5. COMT AA = Meditation + runs are non-negotiable for mental health

INCLUDE THESE in the rebuilt day (if not already completed):
- Red Light Therapy (10 min, any time before SPF)
- AM + PM Skincare routines
- Cold Shower (2-3 min at end of shower)
- Wim Hof Breathing (if before workout)
- Sauna (if post-lift day)
- The scheduled run and workout if applicable
- All nutrition blocks

OUTPUT STRICTLY as JSON:
{
  "newDays": {
    "${date}": {
      "dayLabel": "${day ? day.dayLabel : 'Today'}",
      "tagline": "REBUILT: [your tagline]",
      "runType": "[run type or REST]",
      "liftSlot": "[workout or None]",
      "blocks": [
        {"time": "HH:MM AM/PM", "label": "Block Name", "icon": "emoji", "type": "type", "detail": "Research-backed detail with genome rationale"}
      ]
    }
  }
}
`;

  navigator.clipboard.writeText(prompt).then(() => {
    const btn = document.querySelector('.rescue-btn');
    if (btn) {
      const old = btn.textContent;
      btn.textContent = '✅ COPIED! Paste into Gemini';
      setTimeout(() => btn.textContent = old, 3000);
    }
  }).catch(() => {
    let ta = document.getElementById('promptFallback');
    if (!ta) {
      ta = document.createElement('textarea');
      ta.id = 'promptFallback';
      ta.style.cssText = 'width:100%;height:300px;margin-top:10px;background:#1a1a2e;color:#e0e0e0;border:1px solid #333;padding:10px;font-size:0.8rem;border-radius:8px;';
      document.querySelector('.schedule-toolbar').parentElement.appendChild(ta);
    }
    ta.value = prompt;
    ta.style.display = 'block';
    ta.select();
  });
}

// ===== TOGGLE WORK TODAY =====
function toggleWorkToday() {
  const date = currentScheduleDate || new Date().toISOString().slice(0, 10);
  const schedule = getScheduleData();
  const day = schedule[date];
  if (!day || !day.blocks) return;

  const custom = JSON.parse(localStorage.getItem(SCHED_STORAGE) || '{}');
  const hasWork = day.blocks.some(b => b.type === 'work');

  if (hasWork) {
    // Remove work blocks
    const filtered = day.blocks.filter(b => b.type !== 'work');
    if (!custom[date]) custom[date] = { ...day };
    custom[date].blocks = filtered;
    custom[date].tagline = (day.tagline || '') + ' (OFF DAY)';
    localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
    document.getElementById('toggleWorkBtn').textContent = '🏥 Add Work Back';
  } else {
    // Restore work blocks from original SCHEDULE
    if (typeof SCHEDULE !== 'undefined' && SCHEDULE[date]) {
      const origWork = SCHEDULE[date].blocks.filter(b => b.type === 'work');
      if (!custom[date]) custom[date] = { ...day };
      custom[date].blocks = [...day.blocks, ...origWork].sort((a, b) => {
        const ta = a.time.replace(/–.*/, '').trim();
        const tb = b.time.replace(/–.*/, '').trim();
        return ta.localeCompare(tb);
      });
      custom[date].tagline = (day.tagline || '').replace(' (OFF DAY)', '');
      localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
      document.getElementById('toggleWorkBtn').textContent = '🏖️ No Work Today';
    }
  }
  renderScheduleDay(date);
}

// ===== QUICK ADD BLOCKS =====
const QUICK_BLOCKS = {
  redlight: { time: 'NOW', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: 'WHY: Red/near-infrared (630-850nm) boosts mitochondrial ATP by 15-20% (Hamblin, BBA 2018). Your VDR CT = reduced vitamin D receptor, so red light compensates by stimulating collagen without UV. 10-15 min face + chest. Do BEFORE applying SPF.' },
  wimhof: { time: 'NOW', label: 'Wim Hof Breathing', icon: '🌬️', type: 'biohack', detail: 'WHY: Your COMT AA = slow catechol breakdown = elevated baseline cortisol. Wim Hof alkalizes blood pH and paradoxically lowers cortisol over time (Kox et al., PNAS 2014). 3 rounds: 30 power breaths → exhale hold (1-2 min) → 15 sec recovery breath × 3. Best done before exercise for max BDNF CT stacking.' },
  coldshower: { time: 'NOW', label: 'Cold Shower', icon: '🧊', type: 'biohack', detail: 'WHY: Cold (50-60°F, 2-3 min) triggers 200-300% norepinephrine spike (Shevchuk, Med Hypotheses 2008). For your COMT AA, this compensates slow catechol metabolism = better focus + mood. Your IL-6 CG = post-exercise inflammation; cold limits inflammatory cascade. Start warm, finish cold.' },
  sauna: { time: 'NOW', label: 'Wet Sauna', icon: '🧖', type: 'biohack', detail: 'WHY POST-LIFT: 150-180°F triggers heat shock proteins (HSP70/90) + GH spike 200-300% (Leppäluoto et al., 1986). Men 30-35: GH declines ~14%/decade after 30 — sauna combats this. Your IL-6/TNF-a stack: regular sauna cuts CRP by 30% in 4 weeks (Laukkanen et al., JAMA 2015). 15-20 min. HYDRATE: 16oz water before, electrolytes after.' },
  hottub: { time: 'NOW', label: 'Hot Tub Recovery', icon: '♨️', type: 'biohack', detail: 'WHY: ~100-104°F full-body soak. Parasympathetic activation (vagus nerve stimulation), joint relief, muscle relaxation. Best on rest or Sunday. Your COMT AA benefits from parasympathetic dominance. Do NOT combine with cold shower same session — opposing signals cancel benefits. 15-20 min max.' },
  skinam: { time: 'NOW', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'GENOME-DRIVEN: Gentle cleanser → Vitamin C 15-20% (compensates GSTP1 AG moderate glutathione detox) → Ceramide moisturizer (repairs IL-6/TNF-a inflammatory barrier damage) → SPF 30+ (VDR CT = protect remaining D receptor function). Men 30-35 lose ~1% collagen/year; this routine halves that rate.' },
  skinpm: { time: 'NOW', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'PM PROTOCOL: Oil cleanser (removes SPF/sebum) → Gentle cleanser (double cleanse) → Active: Retinol 0.3% Tue/Thu nights (collagen + cell turnover), Niacinamide 5% other nights (barrier repair + anti-inflammatory for IL-6/TNF-a markers). Heavy moisturizer — your VDR CT = dry skin tendency. Slug with Aquaphor if needed.' },
  hairwash: { time: 'NOW', label: 'Hair Wash Day', icon: '💇', type: 'haircare', detail: 'GENOME: IL-6 CG + TNF-a AG = scalp inflammation risk. SULFATE-FREE only — sulfates strip protective oils and worsen inflammatory scalp. Gentle shampoo → Conditioner 2-3 min (5 min deep on Fri/Sun) → 1-2 min scalp massage (increases blood flow). Pat dry only, no heat. Scheduled: Tue/Fri/Sun wash days.' }
};

function quickAddBlock(type) {
  const date = currentScheduleDate || new Date().toISOString().slice(0, 10);
  const schedule = getScheduleData();
  const custom = JSON.parse(localStorage.getItem(SCHED_STORAGE) || '{}');
  const day = schedule[date] || { dayLabel: date, tagline: 'CUSTOM DAY', runType: 'TBD', liftSlot: 'TBD', blocks: [] };

  const preset = QUICK_BLOCKS[type];
  if (!preset) return;

  // Set time to current time
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const block = { ...preset, time: timeStr };

  if (!custom[date]) custom[date] = { ...day, blocks: [...(day.blocks || [])] };
  custom[date].blocks.push(block);
  localStorage.setItem(SCHED_STORAGE, JSON.stringify(custom));
  renderScheduleDay(date);

  // Flash the button
  const btns = document.querySelectorAll('.quick-add-btn');
  btns.forEach(btn => {
    if (btn.textContent.includes(preset.label.split(' ')[0]) || btn.textContent.includes(preset.icon)) {
      btn.style.background = 'rgba(0, 240, 255, 0.3)';
      btn.style.borderColor = 'var(--cyan)';
      setTimeout(() => { btn.style.background = ''; btn.style.borderColor = ''; }, 1000);
    }
  });
}
