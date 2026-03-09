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
    ]
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
}

// Init on page load
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(renderHealthDashboard, 600);
});
