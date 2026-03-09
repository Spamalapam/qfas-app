// ===== Q.F.A.S. HEALTH DASHBOARD — Samsung Health Integration =====
// All biometric data from Samsung Health export (2016-2026)

const HEALTH_DATA = {
  current: {
    weight_kg: 74.3,
    weight_lbs: 163.8,
    est_body_fat: '~16-17%',
    target_weight_lbs: 155,
    target_date: 'June 2026',
    avg_steps_60d: 8651,
    avg_active_cal_60d: 441,
    avg_active_min_60d: 91,
    skin_temp_range: '32.4-34.4°C',
    snoring: true
  },

  sleep: {
    avg_hours: '7-8',
    score_range: '65-76',
    efficiency_range: '80-93%',
    rem_min: '101-103',
    light_min: '241-278',
    cycles: '3-5',
    mental_recovery: '90-91%',
    physical_recovery: '82-86%',
    snoring_detected: true
  },

  nutrition_targets: {
    tdee: 2400,
    target_cal: 1900,
    deficit: 500,
    protein_g: 197,
    carbs_g: 170,
    fat_g: 55,
    protein_per_lb: 1.2
  },

  weight_milestones: [
    { date: 'Nov 2016', lbs: 165, bf: null, note: 'Starting point' },
    { date: 'Apr 2018', lbs: 150, bf: '12%', note: 'First cut' },
    { date: 'Jan 2019', lbs: 145, bf: '10.6%', note: 'Peak running fitness' },
    { date: 'Aug 2020', lbs: 155, bf: null, note: 'COVID rebound' },
    { date: 'Sep 2021', lbs: 151, bf: '13.1%', note: 'Watch tracking starts' },
    { date: 'Mar 2022', lbs: 143, bf: '11.6%', note: 'ALL-TIME BEST' },
    { date: 'May 2022', lbs: 157, bf: '14.7%', note: 'Rapid drift up' },
    { date: 'Oct 2025', lbs: 159, bf: null, note: 'Gradual gain' },
    { date: 'Mar 2026', lbs: 163.8, bf: '~16-17%', note: 'CURRENT — Highest since 2016' }
  ],

  recent_activity: [
    { date: 'Feb 28', steps: 15965, cal: 970, dist_m: 14463 },
    { date: 'Mar 1', steps: 10596, cal: 522, dist_m: 8064 },
    { date: 'Mar 2', steps: 10728, cal: 757, dist_m: 9893 },
    { date: 'Mar 3', steps: 10159, cal: 473, dist_m: 7407 },
    { date: 'Mar 4', steps: 12010, cal: 784, dist_m: 11418 },
    { date: 'Mar 5', steps: 9687, cal: 488, dist_m: 7814 },
    { date: 'Mar 6', steps: 7361, cal: 406, dist_m: 5073 },
    { date: 'Mar 7', steps: 8420, cal: 313, dist_m: 6084 },
    { date: 'Mar 8', steps: 14954, cal: 919, dist_m: 10556 },
    { date: 'Mar 9', steps: 2746, cal: 99, dist_m: 2173 }
  ],

  genome_insights: [
    { gene: 'FTO AA', status: 'warning', text: 'Weight 163.8 lbs — highest since 2016. FTO AA = no auto appetite regulation. Every calorie must be tracked.' },
    { gene: 'BDNF CT', status: 'warning', text: 'Running volume dropped from 5-6x/week (at 143 lbs) to inconsistent. Your brain literally needs the runs for neuroplasticity.' },
    { gene: 'ACTN3 TT', status: 'good', text: 'Slow-twitch dominant = endurance advantage. Your 2019/2022 peaks prove your body THRIVES on running volume.' },
    { gene: 'APOE e3/e4', status: 'warning', text: 'Snoring detected on multiple nights. At peak fitness you didn\'t snore. Weight loss → better sleep → neuroprotection.' },
    { gene: 'MTNR1B CG', status: 'info', text: 'No carbs within 2 hrs of bed. With 1,900 cal target, front-load carbs around workouts (AM/midday).' },
    { gene: 'IL-6 CG', status: 'info', text: 'Post-exercise nutrition within 30 min. At 197g protein target, split across 5 meals = ~40g per meal.' },
    { gene: 'COMT AA', status: 'good', text: 'Running IS your anti-anxiety medication. At 5-6x/week you were at your mental best. Get back there.' }
  ],

  supplements: {
    categories: [
      {
        name: '🔴 NON-NEGOTIABLE',
        priority: 'critical',
        items: [
          {
            name: 'Vitamin D3',
            dose: '3,000–5,000 IU/day',
            timing: '☀️ Morning with food',
            form: 'Softgel with K2 (MK-7)',
            genes: ['VDR CT'],
            genome_reason: 'VDR CT = reduced vitamin D receptor efficiency. Standard 400-800 IU multivitamin doses are worthless for you.',
            health_data: 'Skin temp 32-34°C suggests adequate circulation but indoor lifestyle limits sun exposure.'
          },
          {
            name: 'Omega-3 Fish Oil',
            dose: '2–3g EPA/DHA combined',
            timing: '☀️ Morning with food',
            form: 'Triglyceride form (NOT ethyl ester)',
            genes: ['IL-6 CG', 'TNF-α AG'],
            genome_reason: 'Triple inflammatory stack (IL-6 CG + TNF-α AG). Omega-3 is your primary anti-inflammatory defense.',
            health_data: 'With 8,651 avg steps + running volume, inflammation management is critical for recovery.'
          },
          {
            name: 'Magnesium Glycinate',
            dose: '400mg before bed',
            timing: '🌙 Before bed',
            form: 'Glycinate/Bisglycinate (NOT oxide)',
            genes: ['COMT AA', 'APOE e3/e4', 'ADORA2A CC'],
            genome_reason: 'COMT AA = slow catechol metabolism → anxiety baseline. Magnesium calms nervous system. APOE e3/e4 needs quality sleep for neuroprotection.',
            health_data: 'Sleep scores 65-76 with snoring detected. Magnesium improves sleep quality + reduces snoring.'
          },
          {
            name: 'Liposomal Vitamin C',
            dose: '500mg/day',
            timing: '☀️ Morning',
            form: 'Liposomal (90%+ absorption vs 20-50% regular)',
            genes: ['GSTP1 AG'],
            genome_reason: 'GSTP1 AG = moderate glutathione detox. Vitamin C recycles glutathione (master antioxidant). Liposomal form delivers 3x more than regular ascorbic acid.',
            health_data: 'At 163.8 lbs (highest since 2016), oxidative stress increases with excess body fat. Antioxidant support critical.'
          },
          {
            name: 'Creatine Monohydrate',
            dose: '5g/day (every day)',
            timing: '☀️ Morning (any time)',
            form: 'Monohydrate powder (cheapest, most studied)',
            genes: ['ACTN3 TT', 'APOE e3/e4'],
            genome_reason: 'ACTN3 TT = no fast-twitch α-actinin protein. Creatine boosts phosphocreatine stores to compensate. Also neuroprotective for APOE e3/e4 risk.',
            health_data: 'Your 2019/2022 peak fitness periods correlated with high training volume. Creatine supports endurance AND strength output.'
          }
        ]
      },
      {
        name: '🟡 RECOVERY & PERFORMANCE',
        priority: 'high',
        items: [
          {
            name: 'L-Theanine',
            dose: '200mg AM + 200mg PM',
            timing: '☕ With morning coffee + 🌙 Before bed',
            form: 'Capsule or powder (Suntheanine brand)',
            genes: ['COMT AA', 'ADORA2A CC', 'CYP1A2 CC'],
            genome_reason: 'COMT AA = anxiety-prone. ADORA2A CC = sleep-sensitive. Theanine promotes calm focus without drowsiness. CYP1A2 CC = fast caffeine metabolism, so theanine smooths it out.',
            health_data: 'Sleep efficiency dips to 68% on bad nights. PM theanine improves sleep onset without grogginess.'
          },
          {
            name: 'Ashwagandha (KSM-66)',
            dose: '600mg/day',
            timing: '🌅 Afternoon',
            form: 'KSM-66 extract (standardized)',
            genes: ['COMT AA', 'IL-6 CG'],
            genome_reason: 'COMT AA = elevated cortisol baseline. Ashwagandha is a proven cortisol reducer. Also anti-inflammatory for IL-6 CG.',
            health_data: 'Weight gain from 143→163.8 lbs often correlates with elevated cortisol. Ashwagandha breaks the stress→weight cycle.'
          },
          {
            name: 'Zinc',
            dose: '15–30mg/day',
            timing: '☀️ Morning with food',
            form: 'Zinc Picolinate or Bisglycinate',
            genes: ['ACTN3 TT'],
            genome_reason: 'Endurance athletes lose zinc through sweat. At 8,651 avg daily steps + running, zinc depletion is real.',
            health_data: 'Supports testosterone, immune function, and thyroid — all critical for fat loss at your current weight.'
          }
        ]
      },
      {
        name: '⚡ ENERGY',
        priority: 'energy',
        items: [
          {
            name: 'Methylated B-Complex',
            dose: '1 cap/morning',
            timing: '☀️ Morning with food',
            form: 'Must be methylated (methylfolate + methylcobalamin)',
            genes: ['COMT AA'],
            genome_reason: 'COMT AA needs methylated B vitamins to process catecholamines (dopamine, norepinephrine). Non-methylated forms are useless for your genotype.',
            health_data: 'Energy dips correlate with inconsistent activity days (7.3K→14.9K step swings). Stable B-vitamin levels = stable energy.'
          },
          {
            name: 'CoQ10 (Ubiquinol)',
            dose: '200mg/day',
            timing: '☀️ Morning with fat-containing food',
            form: 'Ubiquinol (NOT ubiquinone — 8x better absorbed)',
            genes: ['APOE e3/e4', 'ACTN3 TT'],
            genome_reason: 'Mitochondrial energy production. APOE e3/e4 cardioprotective. ACTN3 TT endurance demands high mitochondrial output.',
            health_data: 'Active cal avg 441/day needs to increase. CoQ10 directly fuels cellular energy production.'
          },
          {
            name: 'Cordyceps Mushroom',
            dose: '1,000mg/day',
            timing: '☀️ Morning',
            form: 'Fruiting body extract (NOT mycelium)',
            genes: ['ACTN3 TT', 'BDNF CT'],
            genome_reason: 'Improves oxygen utilization — perfect for ACTN3 TT endurance genetics. Supports VO2 max and aerobic capacity.',
            health_data: 'Your peak fitness always correlated with high running volume. Cordyceps enhances the aerobic system you genetically excel at.'
          }
        ]
      },
      {
        name: '🍽️ APPETITE CONTROL',
        priority: 'appetite',
        items: [
          {
            name: 'Glucomannan (Konjac Root)',
            dose: '1g with water, 30 min before meals',
            timing: '🍽️ 30 min before lunch + dinner',
            form: 'Capsules (easier than powder)',
            genes: ['FTO AA'],
            genome_reason: 'FTO AA = appetite signals don\'t self-regulate. Glucomannan expands in stomach → mechanical fullness before eating.',
            health_data: 'At 1,900 cal target with 500 cal deficit, hunger WILL hit. Glucomannan takes the edge off without any stimulants.'
          },
          {
            name: '5-HTP',
            dose: '100–200mg, afternoon',
            timing: '🌅 2-3 PM (when cravings peak)',
            form: 'Capsule (enteric coated preferred)',
            genes: ['FTO AA', 'COMT AA'],
            genome_reason: 'Boosts serotonin → reduces carb cravings. FTO AA often manifests as carb-seeking behavior. COMT AA benefits from serotonin support.',
            health_data: 'Weight trend shows rebound patterns whenever training drops. 5-HTP prevents emotional/stress eating during deficit.',
            warning: '⚠️ Do NOT take with L-Theanine at the same time. Space 2+ hours apart.'
          },
          {
            name: 'Chromium Picolinate',
            dose: '200–400mcg/day',
            timing: '🍽️ With lunch',
            form: 'Picolinate (most bioavailable form)',
            genes: ['MTNR1B CG', 'FTO AA'],
            genome_reason: 'Stabilizes blood sugar → reduces appetite spikes. MTNR1B CG = impaired glucose metabolism. Chromium directly improves insulin sensitivity.',
            health_data: 'Blood sugar stability is critical at 1,900 cal target. Prevents the crash-then-binge cycle.'
          },
          {
            name: 'Whey Protein Isolate',
            dose: '2 scoops/day (40g each)',
            timing: '💪 Post-workout + 🌙 Evening',
            form: 'Isolate (low lactose, fast absorbing)',
            genes: ['FTO AA', 'IL-6 CG'],
            genome_reason: 'FTO AA mandates 197g protein/day (1.2g/lb). Nearly impossible from food alone. IL-6 CG needs post-exercise protein within 30 min.',
            health_data: 'At 163.8 lbs, you need 197g protein. Two 40g shakes = 80g, leaving 117g from real food — much more achievable.'
          }
        ]
      }
    ],
    daily_schedule: [
      { time: 'Morning (with food)', items: 'D3, Omega-3, Creatine, Zinc, Liposomal Vit C, Methylated B-Complex, CoQ10, Cordyceps' },
      { time: 'With coffee', items: 'L-Theanine 200mg' },
      { time: '30 min before lunch', items: 'Glucomannan 1g' },
      { time: 'With lunch', items: 'Chromium Picolinate' },
      { time: '2-3 PM', items: '5-HTP 100-200mg' },
      { time: 'Afternoon', items: 'Ashwagandha 600mg' },
      { time: 'Post-workout', items: 'Whey Protein Isolate 40g' },
      { time: '30 min before dinner', items: 'Glucomannan 1g' },
      { time: 'Evening', items: 'Whey Protein Isolate 40g' },
      { time: 'Before bed', items: 'Magnesium Glycinate 400mg, L-Theanine 200mg' }
    ],
    warnings: [
      '⚠️ Do NOT take 5-HTP and L-Theanine at the same time — both affect serotonin. Space 2+ hours apart.',
      '⚠️ Take Zinc and Magnesium at different times — they compete for absorption.',
      '⚠️ CoQ10 requires fat for absorption — always take with food containing fat.',
      '⚠️ Iron (if ferritin < 50): test first. Runners lose iron through foot-strike hemolysis. Only supplement if bloodwork confirms low.'
    ]
  }
};

function renderHealthDashboard() {
  const d = HEALTH_DATA;

  // ---- STAT CARDS ----
  const statsEl = document.getElementById('healthStats');
  if (statsEl) {
    const deficit = d.current.weight_lbs - d.current.target_weight_lbs;
    statsEl.innerHTML = `
      <div class="health-stat-card accent-red">
        <div class="hsc-value">${d.current.weight_lbs}</div>
        <div class="hsc-label">CURRENT (lbs)</div>
        <div class="hsc-sub">${d.current.est_body_fat} body fat</div>
      </div>
      <div class="health-stat-card accent-green">
        <div class="hsc-value">${d.current.target_weight_lbs}</div>
        <div class="hsc-label">TARGET (lbs)</div>
        <div class="hsc-sub">by ${d.current.target_date}</div>
      </div>
      <div class="health-stat-card accent-cyan">
        <div class="hsc-value">${deficit.toFixed(1)}</div>
        <div class="hsc-label">LBS TO LOSE</div>
        <div class="hsc-sub">~1 lb/week</div>
      </div>
      <div class="health-stat-card accent-purple">
        <div class="hsc-value">${d.current.avg_steps_60d.toLocaleString()}</div>
        <div class="hsc-label">AVG STEPS</div>
        <div class="hsc-sub">60-day average</div>
      </div>
      <div class="health-stat-card accent-cyan">
        <div class="hsc-value">${d.current.avg_active_cal_60d}</div>
        <div class="hsc-label">AVG ACTIVE CAL</div>
        <div class="hsc-sub">60-day average</div>
      </div>
      <div class="health-stat-card ${d.current.snoring ? 'accent-red' : 'accent-green'}">
        <div class="hsc-value">${d.current.snoring ? 'YES' : 'NO'}</div>
        <div class="hsc-label">SNORING</div>
        <div class="hsc-sub">${d.current.snoring ? 'Weight-related — needs intervention' : 'Clear'}</div>
      </div>`;
  }

  // ---- WEIGHT TIMELINE ----
  const timelineEl = document.getElementById('weightTimeline');
  if (timelineEl) {
    const minW = 140, maxW = 170;
    timelineEl.innerHTML = d.weight_milestones.map(m => {
      const pct = ((m.lbs - minW) / (maxW - minW)) * 100;
      const barColor = m.lbs <= 148 ? '#00ff64' : m.lbs <= 155 ? '#00f0ff' : m.lbs <= 160 ? '#ffb347' : '#ff5555';
      return `<div class="wt-row">
        <div class="wt-date">${m.date}</div>
        <div class="wt-bar-wrap">
          <div class="wt-bar" style="width:${Math.min(pct, 100)}%;background:${barColor}"></div>
          <span class="wt-val">${m.lbs} lbs${m.bf ? ' / ' + m.bf + ' BF' : ''}</span>
        </div>
        <div class="wt-note">${m.note}</div>
      </div>`;
    }).join('');
  }

  // ---- SLEEP OVERVIEW ----
  const sleepEl = document.getElementById('sleepOverview');
  if (sleepEl) {
    const s = d.sleep;
    sleepEl.innerHTML = `
      <div class="sleep-grid">
        <div class="sleep-card"><div class="sc-val">${s.avg_hours} hrs</div><div class="sc-lbl">Duration</div></div>
        <div class="sleep-card"><div class="sc-val">${s.score_range}</div><div class="sc-lbl">Score /100</div></div>
        <div class="sleep-card"><div class="sc-val">${s.efficiency_range}</div><div class="sc-lbl">Efficiency</div></div>
        <div class="sleep-card"><div class="sc-val">${s.mental_recovery}</div><div class="sc-lbl">Mental Recovery</div></div>
        <div class="sleep-card"><div class="sc-val">${s.physical_recovery}</div><div class="sc-lbl">Physical Recovery</div></div>
        <div class="sleep-card"><div class="sc-val">${s.rem_min} min</div><div class="sc-lbl">REM/Night</div></div>
        <div class="sleep-card"><div class="sc-val">${s.cycles}</div><div class="sc-lbl">Cycles/Night</div></div>
        <div class="sleep-card ${s.snoring_detected ? 'sc-warn' : ''}"><div class="sc-val">${s.snoring_detected ? 'DETECTED' : 'Clear'}</div><div class="sc-lbl">Snoring</div></div>
      </div>`;
  }

  // ---- ACTIVITY GRID ----
  const activityEl = document.getElementById('activityGrid');
  if (activityEl) {
    const maxSteps = Math.max(...d.recent_activity.map(a => a.steps));
    activityEl.innerHTML = `<div class="activity-bars">` +
      d.recent_activity.map(a => {
        const pct = (a.steps / maxSteps) * 100;
        const color = a.steps >= 12000 ? '#00ff64' : a.steps >= 8000 ? '#00f0ff' : a.steps >= 5000 ? '#ffb347' : '#ff5555';
        return `<div class="ab-col">
          <div class="ab-val">${(a.steps / 1000).toFixed(1)}k</div>
          <div class="ab-bar-wrap"><div class="ab-bar" style="height:${pct}%;background:${color}"></div></div>
          <div class="ab-date">${a.date}</div>
        </div>`;
      }).join('') + `</div>`;
  }

  // ---- NUTRITION TARGETS ----
  const nutEl = document.getElementById('nutritionTargets');
  if (nutEl) {
    const n = d.nutrition_targets;
    const proteinPct = (n.protein_g * 4 / n.target_cal * 100).toFixed(0);
    const carbsPct = (n.carbs_g * 4 / n.target_cal * 100).toFixed(0);
    const fatPct = (n.fat_g * 9 / n.target_cal * 100).toFixed(0);
    nutEl.innerHTML = `
      <div class="nut-cards">
        <div class="nut-card nut-cal">
          <div class="nut-val">${n.target_cal}</div>
          <div class="nut-lbl">Daily Cal Target</div>
          <div class="nut-sub">TDEE ${n.tdee} - ${n.deficit} deficit</div>
        </div>
        <div class="nut-card nut-pro">
          <div class="nut-val">${n.protein_g}g</div>
          <div class="nut-lbl">Protein (${proteinPct}%)</div>
          <div class="nut-sub">1.2g/lb — FTO AA mandate</div>
        </div>
        <div class="nut-card nut-carb">
          <div class="nut-val">${n.carbs_g}g</div>
          <div class="nut-lbl">Carbs (${carbsPct}%)</div>
          <div class="nut-sub">Front-load AM — MTNR1B CG</div>
        </div>
        <div class="nut-card nut-fat">
          <div class="nut-val">${n.fat_g}g</div>
          <div class="nut-lbl">Fat (${fatPct}%)</div>
          <div class="nut-sub">Omega-3 priority — IL-6 CG</div>
        </div>
      </div>`;
  }

  // ---- GENOME INSIGHTS ----
  const insightEl = document.getElementById('genomeInsights');
  if (insightEl) {
    insightEl.innerHTML = d.genome_insights.map(gi => {
      const icon = gi.status === 'warning' ? '⚠️' : gi.status === 'good' ? '✅' : 'ℹ️';
      const cls = 'gi-' + gi.status;
      return `<div class="gi-card ${cls}">
        <div class="gi-header">${icon} <span class="gi-gene">${gi.gene}</span></div>
        <div class="gi-text">${gi.text}</div>
      </div>`;
    }).join('');
  }

  // ---- SUPPLEMENTS ----
  renderSupplements();
}

function renderSupplements() {
  const supEl = document.getElementById('supplementProtocol');
  if (!supEl) return;

  const s = HEALTH_DATA.supplements;
  let html = '';

  // Categories
  s.categories.forEach(cat => {
    html += `<div class="sup-category sup-${cat.priority}">
      <h4 class="sup-cat-title">${cat.name}</h4>
      <div class="sup-grid">`;

    cat.items.forEach(item => {
      const geneChips = item.genes.map(g => `<span class="sup-gene-chip">${g}</span>`).join('');
      html += `<div class="sup-card">
        <div class="sup-card-header">
          <div class="sup-name">${item.name}</div>
          <div class="sup-dose">${item.dose}</div>
        </div>
        <div class="sup-timing">${item.timing}</div>
        <div class="sup-form">💊 ${item.form}</div>
        <div class="sup-genes">${geneChips}</div>
        <div class="sup-reason">
          <div class="sup-reason-title">🧬 Genome Rationale</div>
          <div class="sup-reason-text">${item.genome_reason}</div>
        </div>
        <div class="sup-health">
          <div class="sup-reason-title">📊 Samsung Health Data</div>
          <div class="sup-reason-text">${item.health_data}</div>
        </div>
        ${item.warning ? `<div class="sup-warning">${item.warning}</div>` : ''}
      </div>`;
    });

    html += `</div></div>`;
  });

  // Daily Schedule
  html += `<div class="sup-schedule">
    <h4 class="sup-cat-title">🕐 Daily Supplement Schedule</h4>
    <div class="sup-timeline">`;

  s.daily_schedule.forEach(slot => {
    html += `<div class="sup-time-row">
      <div class="sup-time-label">${slot.time}</div>
      <div class="sup-time-items">${slot.items}</div>
    </div>`;
  });

  html += `</div></div>`;

  // Warnings
  html += `<div class="sup-warnings">
    <h4 class="sup-cat-title">⚠️ Interaction Warnings</h4>`;
  s.warnings.forEach(w => {
    html += `<div class="sup-warn-item">${w}</div>`;
  });
  html += `</div>`;

  supEl.innerHTML = html;
}

// Init on page load
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(renderHealthDashboard, 600);
});
