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

  (day.blocks || []).forEach(block => {
    html += `<div class="schedule-block type-${block.type}">
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
  const map = { wake: '☀️', nutrition: '🍗', running: '🏃', lifting: '🏋️', core: '🔥', work: '💼', recovery: '💤', sleep: '🌙', free: '🎯' };
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
