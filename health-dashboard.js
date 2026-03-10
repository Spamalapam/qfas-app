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

// ===== LAB RESULTS + GENOME CROSS-REFERENCE =====
const LAB_DATA = {
  patient: { name: 'Adam Sims', dob: 'May 6, 1992', provider: 'University of Utah Health', doctor: 'Jay D Kerr' },

  lipid_panel: {
    date: 'Mar 8, 2023',
    stale: true,
    values: [
      { test: 'Total Cholesterol', value: 160, unit: 'mg/dL', range: '', status: 'good', genome: 'APOE e3/e4 — needs monitoring. 160 is solid but APOE risk means recheck annually.' },
      { test: 'HDL Cholesterol', value: 54, unit: 'mg/dL', range: '40-59', status: 'ok', genome: 'APOE e3/e4 — HDL of 54 is acceptable but ideally >60. Running + Omega-3 will raise it.' },
      { test: 'LDL Cholesterol', value: 94, unit: 'mg/dL', range: '0-129', status: 'good', genome: 'APOE e3/e4 — LDL under 100 is protective. Maintain with diet. DO NOT let this creep up.' },
      { test: 'Triglycerides', value: 58, unit: 'mg/dL', range: '30-149', status: 'excellent', genome: 'Excellent. Low triglycerides + MTNR1B CG compliance = great glucose metabolism.' },
      { test: 'VLDL', value: 12, unit: 'mg/dL', range: '0-30', status: 'good', genome: 'Well within range. Low VLDL correlates with low triglycerides.' },
      { test: 'Vitamin D 25-OH', value: 68, unit: 'ng/mL', range: '30-80', status: 'good', genome: 'VDR CT — 68 is GREAT for your genotype. Keep supplementing D3 3,000-5,000 IU to maintain.' }
    ]
  },

  cbc_trend: {
    dates: ['Jun 2023', 'Oct 2024', 'May 2025', 'Jun 2025', 'Mar 2026'],
    values: [
      { test: 'WBC', vals: [4.82, 4.87, 4.68, 9.31, 5.11], unit: 'k/uL', range: '4.3-11.3' },
      { test: 'RBC', vals: [5.11, 5.43, 5.29, 5.28, 5.38], unit: 'M/uL', range: '4.7-6.14' },
      { test: 'Hemoglobin', vals: [15.9, 16.0, 16.1, 16.1, 16.6], unit: 'g/dL', range: '14.8-17.8' },
      { test: 'Hematocrit', vals: [47.6, 49.0, 48.2, 47.6, 48.5], unit: '%', range: '44.2-53' },
      { test: 'Platelets', vals: [225, 236, 203, 243, 246], unit: 'k/uL', range: '159-439' }
    ]
  },

  cmp_trend: {
    dates: ['Mar 2023', 'Jun 2024', 'Oct 2024', 'Jan 2025', 'May 2025', 'Dec 2025', 'Mar 2026'],
    values: [
      { test: 'Glucose', vals: [90, 91, 86, 100, 83, 89, 92], unit: 'mg/dL', range: '64-128', genome: 'MTNR1B CG — glucose well-controlled. The 100 spike (Jan 2025) was likely a non-fasting draw.' },
      { test: 'Creatinine', vals: [1.06, 0.97, 0.82, 0.89, 0.97, 1.1, 1.14], unit: 'mg/dL', range: '0.72-1.25', genome: 'Trending up slightly (1.06→1.14). Watch this with kidney stone history.' },
      { test: 'BUN', vals: [17, 16, null, 25, 16, 13, 15], unit: 'mg/dL', range: '8-24', genome: 'BUN spiked to 25 (Jan 2025) during kidney stone episode. Now normal.' },
      { test: 'eGFR', vals: [96, 106, 119, 116, 105, 90, 87], unit: 'mL/min', range: '>60', genome: 'Trending DOWN (119→87). Still normal but the decline with kidney stone history needs monitoring.' }
    ]
  },

  ecg: { date: 'Apr 22, 2021', result: 'Normal sinus rhythm', hr: 83, pr: 124, qrs: 98, qtc: 444, note: 'Normal ECG. Confirmed by Dr. Kerr.' },

  conditions: [
    {
      name: 'OSA (Obstructive Sleep Apnea)', status: 'Active', severity: 'Routine',
      genome: 'APOE e3/e4 + snoring detected on Samsung Health. At 143 lbs you didn\'t snore. Weight loss is the treatment.',
      action: 'Lose weight → 155 lbs target. Samsung Health shows snoring correlates with weight >155.'
    },
    {
      name: 'Excessive Daytime Sleepiness', status: 'Active', severity: 'Routine',
      genome: 'COMT AA + ADORA2A CC — your brain is wired for sleep sensitivity. Modafinil prescribed. OSA makes this worse.',
      action: 'Currently on modafinil 200mg. Treat the root cause (OSA/weight) to reduce medication dependence.'
    },
    {
      name: 'Mild Intermittent Asthma', status: 'Active', severity: 'Routine',
      genome: 'IL-6 CG inflammatory tendency may worsen airway reactivity. Exercise-induced likely.',
      action: 'Albuterol PRN. Omega-3 + anti-inflammatory diet may reduce frequency.'
    },
    {
      name: 'Kidney Stones (History)', status: 'Recurring',
      genome: 'Not directly gene-linked but BUN spike to 25 + blood in urine (Jan 2025) = active episode.',
      action: 'HYDRATE. 3L+ water daily. Reduce oxalate foods. Creatinine trending up (0.82→1.14) — protect kidneys.'
    },
    {
      name: 'Androgenic Alopecia', status: 'Active',
      genome: 'Genetic predisposition. Currently on finasteride 1mg.',
      action: 'Finasteride 1mg daily. Monitor: finasteride can affect mood (COMT AA already anxiety-prone).'
    },
    {
      name: 'Tree Nut Allergy', status: 'Active', severity: 'High',
      genome: 'IL-6 CG + TNF-α AG = elevated inflammatory response. Carries EpiPen.',
      action: 'Strict avoidance. EpiPen on person at all times. All meal plan recipes are tree-nut-free.'
    }
  ],

  medications: [
    {
      name: 'Finasteride 1mg', purpose: 'Androgenic alopecia', status: 'Active',
      interaction: '⚠️ Can affect mood/libido. COMT AA already anxiety-prone — monitor mental health closely.',
      supplement_note: 'Zinc 15-30mg supports hair + counteracts potential testosterone effects.'
    },
    {
      name: 'Modafinil 200mg', purpose: 'Excessive daytime sleepiness / OSA', status: 'Active',
      interaction: '⚠️ CYP1A2 CC = fast metabolizer. May need timing adjustment. Take morning only.',
      supplement_note: 'L-Theanine 200mg with morning dose smooths stimulation. Do NOT combine with cordyceps timing.'
    },
    {
      name: 'Emtricitabine-Tenofovir 200-300mg (PrEP)', purpose: 'HIV pre-exposure prophylaxis', status: 'Active',
      interaction: '⚠️ Tenofovir can affect kidney function. eGFR trending down (119→87). MONITOR CLOSELY.',
      supplement_note: 'Vitamin D 3,000+ IU critical — tenofovir can reduce bone density. Already supplementing.'
    },
    {
      name: 'Albuterol Inhaler', purpose: 'Asthma PRN', status: 'Active',
      interaction: 'Use before running if needed. Omega-3 may reduce need over time.',
      supplement_note: 'Cordyceps may improve oxygen utilization and reduce exercise-induced asthma.'
    },
    {
      name: 'EpiPen (Epinephrine 0.3mg)', purpose: 'Tree nut allergy emergency', status: 'Active',
      interaction: 'Carry at all times. All meal plan recipes verified tree-nut-free.',
      supplement_note: 'No conflicts with supplement stack.'
    }
  ],

  action_items: [
    { priority: 'critical', text: 'GET UPDATED LIPID PANEL — Last one was March 2023 (3+ years ago). With APOE e3/e4, this needs annual monitoring.' },
    { priority: 'critical', text: 'MONITOR eGFR — Trending down (119→87). Tenofovir (PrEP) + kidney stone history = kidney function needs quarterly checks.' },
    { priority: 'warning', text: 'REQUEST: Testosterone panel, Thyroid (TSH/T3/T4), HbA1c, Ferritin/Iron. These were never ordered but are critical for your genome profile.' },
    { priority: 'warning', text: 'Creatinine trending up (0.82→1.14). Still in range but the trajectory + kidney stones + PrEP = needs attention.' },
    { priority: 'info', text: 'Vitamin D at 68 ng/mL is excellent for VDR CT. D3 supplementation is working. Maintain current dose.' },
    { priority: 'info', text: 'Carbon dioxide slightly elevated on 3 draws (27 vs max 26). Minor — likely compensatory for activity level. Not actionable.' }
  ]
};

function renderLabResults() {
  const el = document.getElementById('labResults');
  if (!el) return;

  const d = LAB_DATA;
  let html = '';

  // Action Items (top priority)
  html += `<div class="lab-actions">
    <h4 class="lab-section-title">🚨 Action Items from Lab Review</h4>`;
  d.action_items.forEach(a => {
    const cls = a.priority === 'critical' ? 'la-critical' : a.priority === 'warning' ? 'la-warning' : 'la-info';
    const icon = a.priority === 'critical' ? '🔴' : a.priority === 'warning' ? '🟡' : 'ℹ️';
    html += `<div class="lab-action ${cls}">${icon} ${a.text}</div>`;
  });
  html += `</div>`;

  // Lipid Panel
  html += `<div class="lab-panel">
    <h4 class="lab-section-title">🫀 Lipid Panel <span class="lab-date">${d.lipid_panel.date}</span>
    ${d.lipid_panel.stale ? '<span class="lab-stale">⚠️ STALE — 3+ YEARS OLD</span>' : ''}</h4>
    <div class="lab-grid">`;
  d.lipid_panel.values.forEach(v => {
    const cls = v.status === 'excellent' ? 'lv-excellent' : v.status === 'good' ? 'lv-good' : v.status === 'ok' ? 'lv-ok' : 'lv-bad';
    html += `<div class="lab-value-card ${cls}">
      <div class="lv-value">${v.value} <span class="lv-unit">${v.unit}</span></div>
      <div class="lv-name">${v.test}</div>
      ${v.range ? `<div class="lv-range">Ref: ${v.range}</div>` : ''}
      <div class="lv-genome">🧬 ${v.genome}</div>
    </div>`;
  });
  html += `</div></div>`;

  // CMP Trends
  html += `<div class="lab-panel">
    <h4 class="lab-section-title">📊 Metabolic Panel Trends (2023–2026)</h4>
    <div class="lab-trend-table"><table>
      <tr><th>Test</th>${d.cmp_trend.dates.map(dt => `<th>${dt}</th>`).join('')}<th>Range</th></tr>`;
  d.cmp_trend.values.forEach(row => {
    html += `<tr><td class="lt-name">${row.test}</td>`;
    row.vals.forEach(v => {
      let cls = '';
      if (v === null) { html += `<td>—</td>`; return; }
      if (row.test === 'eGFR' && v < 90) cls = 'lt-warn';
      else if (row.test === 'BUN' && v > 24) cls = 'lt-bad';
      else if (row.test === 'Creatinine' && v > 1.1) cls = 'lt-warn';
      html += `<td class="${cls}">${v}</td>`;
    });
    html += `<td class="lt-range">${row.range} ${row.unit}</td></tr>`;
    if (row.genome) html += `<tr><td colspan="${d.cmp_trend.dates.length + 2}" class="lt-genome">🧬 ${row.genome}</td></tr>`;
  });
  html += `</table></div></div>`;

  // CBC Trends
  html += `<div class="lab-panel">
    <h4 class="lab-section-title">🩸 CBC Trends (2023–2026)</h4>
    <div class="lab-trend-table"><table>
      <tr><th>Test</th>${d.cbc_trend.dates.map(dt => `<th>${dt}</th>`).join('')}<th>Range</th></tr>`;
  d.cbc_trend.values.forEach(row => {
    html += `<tr><td class="lt-name">${row.test}</td>`;
    row.vals.forEach(v => { html += `<td>${v}</td>`; });
    html += `<td class="lt-range">${row.range} ${row.unit}</td></tr>`;
  });
  html += `</table></div>
    <div class="lab-note">✅ All CBC values consistently within normal range across all draws. No anemia, no infection markers, no platelet issues.</div>
  </div>`;

  // Conditions
  html += `<div class="lab-panel">
    <h4 class="lab-section-title">🏥 Active Conditions + Genome Cross-Reference</h4>
    <div class="lab-conditions">`;
  d.conditions.forEach(c => {
    html += `<div class="lab-condition-card">
      <div class="lc-header">
        <div class="lc-name">${c.name}</div>
        <div class="lc-status">${c.status}</div>
      </div>
      <div class="lc-genome">🧬 ${c.genome}</div>
      <div class="lc-action">💊 ${c.action}</div>
    </div>`;
  });
  html += `</div></div>`;

  // Medications
  html += `<div class="lab-panel">
    <h4 class="lab-section-title">💊 Current Medications + Supplement Interactions</h4>
    <div class="lab-meds">`;
  d.medications.forEach(m => {
    html += `<div class="lab-med-card">
      <div class="lm-header">
        <div class="lm-name">${m.name}</div>
        <div class="lm-status">${m.status}</div>
      </div>
      <div class="lm-purpose">${m.purpose}</div>
      <div class="lm-interaction">${m.interaction}</div>
      <div class="lm-supplement">${m.supplement_note}</div>
    </div>`;
  });
  html += `</div></div>`;

  // ECG
  html += `<div class="lab-panel">
    <h4 class="lab-section-title">❤️ ECG <span class="lab-date">${d.ecg.date}</span></h4>
    <div class="lab-ecg">
      <div class="ecg-result">${d.ecg.result}</div>
      <div class="ecg-details">HR: ${d.ecg.hr} BPM · PR: ${d.ecg.pr}ms · QRS: ${d.ecg.qrs}ms · QTc: ${d.ecg.qtc}ms</div>
      <div class="ecg-note">${d.ecg.note}</div>
    </div>
  </div>`;

  el.innerHTML = html;
}

// Init on page load
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(renderHealthDashboard, 600);
  setTimeout(renderLabResults, 700);
});
