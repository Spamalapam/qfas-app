// ===== Q.F.A.S. DEEP HEALTH ANALYSIS INSIGHTS =====
// Cross-referenced: Genome × Lab Results × Samsung Health × Conditions × Medications × Behavioral Patterns
// Updated context: Narcolepsy (coded as EDS), high-functioning DID, inconsistent PrEP, dehydration during runs

const DEEP_INSIGHTS = {

    // ========== BEHAVIORAL PATTERN ANALYSIS ==========
    behavioral_patterns: [
        {
            title: 'The Running Volume ↔ Everything Correlation',
            severity: 'critical',
            icon: '🏃',
            pattern: 'Your entire health trajectory tracks perfectly with running frequency. This isn\'t coincidence — it\'s genetic determinism.',
            evidence: [
                'Jan 2019: 145 lbs, 10.6% BF, running 5-6x/week → Peak fitness, no snoring, best mental health',
                'Mar 2022: 143 lbs, 11.6% BF, running 5-6x/week → ALL-TIME BEST weight',
                'May 2022: 157 lbs, 14.7% BF → Running dropped, rapid 14 lb gain in 2 months',
                'Mar 2026: 163.8 lbs, ~16-17% BF → Running inconsistent, highest weight since 2016',
                'Recent Samsung Health: Steps swing wildly (2,746→15,965) indicating NO routine'
            ],
            genome: 'BDNF CT = exercise-dependent neuroplasticity. ACTN3 TT = endurance genetic advantage. FTO AA = appetite only regulated with consistent exercise. COMT AA = running is literally your anti-anxiety medication.',
            insight: 'For YOUR genome, running isn\'t exercise — it\'s MEDICATION. Every gene that matters (BDNF, FTO, COMT, ACTN3) requires consistent aerobic activity to function properly. When you stop running, everything cascades: weight goes up, sleep gets worse, OSA worsens, daytime sleepiness increases, modafinil dependency grows, mood drops, appetite dysregulates.',
            action: 'Non-negotiable: 5 runs per week, 30-45 min each. Build to this over 3 weeks (3→4→5). This single behavior change will improve EVERY metric.'
        },
        {
            title: 'Dehydration → Kidney Stones → eGFR Decline (NOT PrEP)',
            severity: 'critical',
            icon: '💧',
            pattern: 'You don\'t drink water DURING runs, and you\'ve been running less. But when you DO run, you dehydrate. This explains the kidney stone + creatinine pattern better than tenofovir.',
            evidence: [
                'Jan 2025: BUN spiked to 25 (OUT OF RANGE) + blood in urine = active kidney stone episode',
                'Jan 2025: eGFR was 116. By Mar 2026: eGFR dropped to 87',
                'You admit: "I don\'t usually drink water while I run, just before or after"',
                'You admit: "I haven\'t been taking PrEP often" → inconsistent TDF exposure',
                'Creatinine trending: 0.82 → 0.89 → 0.97 → 1.1 → 1.14 — steady climb matches dehydration pattern'
            ],
            genome: 'No specific kidney stone gene identified in your panel, but IL-6 CG inflammatory tendency may worsen kidney tubular stress during dehydration.',
            insight: 'REVISED ANALYSIS: Since you take PrEP inconsistently, tenofovir is less likely the primary cause of eGFR decline. The more probable cause is chronic exercise-related dehydration → subclinical kidney stress → kidney stones → cumulative damage. Running without adequate hydration concentrates urine and crystallizes minerals. The Jan 2025 kidney stone was the tip of the iceberg.',
            action: '1) Carry a hydration pack or belt bottle on EVERY run. 2) Drink 500ml water 30 min before running. 3) Sip 150-200ml every 15 min during runs. 4) Drink 500ml+ within 30 min after. 5) Total daily intake: 3L minimum. 6) Still discuss eGFR trend with Dr. Kerr — may need renal ultrasound to check for stone remnants. 7) Tell Dr. Kerr about inconsistent PrEP use — this matters for dosing decisions.'
        },
        {
            title: 'The Weight ↔ Snoring ↔ Sleep ↔ Narcolepsy Cascade',
            severity: 'critical',
            icon: '😴',
            pattern: 'Your "excessive daytime sleepiness" isn\'t just narcolepsy and it isn\'t just OSA — it\'s a feedback loop where both conditions amplify each other.',
            evidence: [
                'Samsung Health: At 143 lbs → NO snoring detected. At 163.8 lbs → snoring multiple nights',
                'Sleep scores: 65-76 (poor-to-moderate). Efficiency: 80-93% (wide variance = inconsistent sleep quality)',
                'Physical recovery: 82-86% (should be 90%+)',
                'Diagnosed conditions: OSA + narcolepsy (coded as EDS)',
                'Current medication: Modafinil 200mg for daytime sleepiness'
            ],
            genome: 'ADORA2A CC = genetically sensitive to sleep disruption (adenosine sensitivity). COMT AA = slow dopamine clearance means stimulant medication has prolonged effects. FTO AA = weight-driven OSA independent of BMI. APOE e3/e4 = sleep is neuroprotective priority.',
            insight: 'Your narcolepsy creates a baseline of excessive daytime sleepiness. OSA (worsened by weight gain) fragments your sleep, making the narcolepsy worse. Fragmented sleep → worse BDNF production → less motivation to run → more weight gain → worse OSA. Modafinil treats the symptom but doesn\'t address either root cause. Your ADORA2A CC genotype means even small sleep disruptions hit you harder than most people.\n\nThe fact that Dr. Kerr codes this as "EDS" rather than narcolepsy for insurance purposes means your treatment may be under-optimized. Narcolepsy-specific interventions (scheduled naps, orexin pathway support) differ from generic EDS treatment.',
            action: '1) Target weight: 150-155 lbs to eliminate OSA component. 2) Sleep hygiene is CRITICAL for ADORA2A CC: no screens 1.5 hr before bed, cool room (65-68°F), blackout curtains. 3) Discuss with Dr. Kerr: is modafinil the right drug for narcolepsy specifically? Might benefit from different approach. 4) Consider scheduled 20-min naps (narcolepsy management technique). 5) Track sleep scores alongside weight — you\'ll see the correlation.'
        },
        {
            title: 'DID × Cortisol × COMT AA = The Stress Axis Multiplier',
            severity: 'warning',
            icon: '🧠',
            pattern: 'High-functioning DID creates persistent autonomic stress that compounds with your COMT AA slow dopamine clearance. This affects EVERY other system.',
            evidence: [
                'COMT AA (Met/Met) = slow catecholamine breakdown → dopamine, norepinephrine, epinephrine linger longer',
                'DID involves chronic autonomic arousal and dissociative states that spike cortisol',
                'Elevated cortisol → insulin resistance → belly fat accumulation → FTO AA weight gain',
                'Weight gain pattern: You\'ve never maintained low weight for more than ~6 months before rebounding',
                'Cortisol also disrupts sleep (ADORA2A CC sensitivity compounds this)'
            ],
            genome: 'COMT AA is the KEY gene here. Normal COMT clears stress chemicals in minutes. Your COMT AA leaves them circulating 3-4x longer. Combined with DID-related autonomic stress, your brain is chronically marinating in stress hormones.',
            insight: 'Your weight rebound pattern (drop to 143→rebound to 157 in 2 months) isn\'t just "falling off the wagon." It\'s likely dissociative stress → cortisol spike → COMT AA can\'t clear it → insulin resistance → appetite dysregulation (FTO AA) → weight gain → worse sleep → more stress. The cycle happens FAST because your genetics amplify every node.\n\nFinasteride makes this worse by removing allopregnanolone (GABA calming neurosteroid), leaving you with fewer stress buffers.',
            action: '1) Running is your #1 COMT AA intervention — it literally clears accumulated catecholamines. 2) Ashwagandha 600mg (KSM-66) is cortisol-reducing — take daily. 3) Magnesium Glycinate 400mg before bed (GABA support to replace what finasteride removes). 4) L-Theanine 200mg AM + PM (alpha wave promotion, calming without drowsiness). 5) Discuss with therapist: exercise as DID management tool — some research shows aerobic exercise reduces dissociative episode frequency. 6) Meditation 10 min daily — COMT AA responds measurably to mindfulness practice.'
        }
    ],

    // ========== WHAT YOUR DOCTOR HASN'T FOUND ==========
    doctor_gaps: [
        {
            title: 'Never Ordered Testosterone Despite Finasteride',
            severity: 'critical',
            detail: 'Finasteride blocks DHT (a testosterone metabolite). You should have had baseline testosterone BEFORE starting, and monitoring AFTER. No testosterone value exists in your entire medical record.',
            why_it_matters: 'COMT AA + finasteride = mood vulnerability. Low testosterone would compound this. Plus: testosterone directly affects body composition (your weight struggle), energy, motivation, sleep quality.',
            action: 'Request: Total Testosterone, Free Testosterone, SHBG, DHT at next appointment.'
        },
        {
            title: 'No Thyroid Panel Despite Fatigue + Weight Gain + Narcolepsy',
            severity: 'critical',
            detail: 'You have THREE symptoms of hypothyroidism (fatigue, weight gain, excessive sleepiness) and ZERO thyroid labs. Ever.',
            why_it_matters: 'Subclinical hypothyroidism could be contributing to weight resistance even when you DO exercise. It would also worsen narcolepsy symptoms.',
            action: 'Request: TSH, Free T3, Free T4, thyroid antibodies (TPO + TG).'
        },
        {
            title: 'No HbA1c Despite MTNR1B CG Genotype',
            severity: 'warning',
            detail: 'Your genome shows MTNR1B CG = impaired melatonin-glucose pathway. Your glucose readings (74-100) look normal but individual readings are snapshots. HbA1c shows 3-month average.',
            why_it_matters: 'MTNR1B CG people can have normal fasting glucose but elevated post-meal spikes that don\'t show on standard panels. HbA1c would reveal hidden insulin resistance.',
            action: 'Request: HbA1c at next appointment.'
        },
        {
            title: 'No Iron/Ferritin Panel for an Endurance Runner',
            severity: 'warning',
            detail: 'Runners lose iron through foot-strike hemolysis (each foot impact destroys red blood cells). You had blood in urine (Jan 2025) — iron loss. Yet iron/ferritin were never checked.',
            why_it_matters: 'Low ferritin causes fatigue BEFORE anemia shows on CBC. Your CBC looks normal (Hgb 16.6), but ferritin could be depleted. This would explain energy issues independent of narcolepsy.',
            action: 'Request: Serum Ferritin, Serum Iron, TIBC, Transferrin Saturation.'
        },
        {
            title: 'Lipid Panel Is 3+ Years Stale with APOE e3/e4',
            severity: 'warning',
            detail: 'Last lipid panel: March 8, 2023. You carry APOE e3/e4 (elevated Alzheimer\'s + cardiovascular risk). Weight has gone UP 20+ lbs since. Guidelines recommend annual monitoring for APOE e4 carriers.',
            why_it_matters: 'LDL was 94 at 143 lbs. At 163.8 lbs with higher body fat, LDL has almost certainly increased. APOE e4 carriers have worse LDL response to weight gain.',
            action: 'Request: Full lipid panel including LDL-P (particle number) and Lp(a) — more informative than just LDL-C for APOE e4.'
        },
        {
            title: 'Alkaline Phosphatase Dropped Below Range (Most Recent Lab)',
            severity: 'info',
            detail: 'Mar 2026: Alk Phos = 35 U/L (range: 38-126). This is OUT OF RANGE low. Your doctor didn\'t flag it.',
            why_it_matters: 'Low alkaline phosphatase can indicate: zinc deficiency, magnesium deficiency, hypothyroidism, or rarely, a genetic condition. The zinc and magnesium connection is interesting given your supplement stack.',
            action: 'May resolve with zinc supplementation (already recommended). Mention to Dr. Kerr for documentation.'
        }
    ],

    // ========== SLEEP DEEP ANALYSIS ==========
    sleep_analysis: {
        title: 'Sleep Pattern Breakdown',
        icon: '🌙',
        metrics: [
            { name: 'Sleep Score', value: '65-76', status: 'poor', note: 'Should be 85+ given your age. Dragged down by OSA.' },
            { name: 'Efficiency', value: '80-93%', status: 'variable', note: 'Wide variance = inconsistent sleep environment. ADORA2A CC needs consistency.' },
            { name: 'REM Sleep', value: '101-103 min', status: 'good', note: 'Actually good! Narcolepsy often means excess REM but this is in normal range.' },
            { name: 'Light Sleep', value: '241-278 min', status: 'high', note: 'Too much light sleep, not enough deep. OSA fragments deep sleep cycles.' },
            { name: 'Sleep Cycles', value: '3-5', status: 'variable', note: 'Should be consistently 4-5. OSA interrupts cycles → you get fewer complete ones.' },
            { name: 'Mental Recovery', value: '90-91%', status: 'good', note: 'Surprisingly good — your BDNF CT brain is resilient when it gets ANY decent sleep.' },
            { name: 'Physical Recovery', value: '82-86%', status: 'low', note: 'Under 90% = incomplete recovery. Body isn\'t fully repairing from training.' },
            { name: 'Snoring', value: 'Detected', status: 'bad', note: 'Direct OSA marker. Correlates perfectly with weight >155 lbs based on your history.' }
        ],
        intervention: 'Fix sleep by fixing weight. Fix weight by fixing running. Fix running by hydrating properly and building consistency. The dominoes chain is clear.'
    },

    // ========== PERFORMANCE ANALYSIS ==========
    performance: {
        title: 'Activity & Performance Trends',
        icon: '⚡',
        current: [
            { metric: 'Avg Steps (60-day)', value: '8,651', target: '10,000+', status: 'low' },
            { metric: 'Avg Active Cal', value: '441', target: '600+', status: 'low' },
            { metric: 'Avg Active Minutes', value: '91 min', target: '120+', status: 'ok' },
            { metric: 'Step Variance', value: '2,746 – 15,965', target: 'Min 7,000 daily', status: 'bad' }
        ],
        patterns: [
            'Steps swing by 5x day-to-day = NO consistent routine',
            'Low days (<5,000 steps) likely trigger worse sleep that night → next day fatigue → less activity',
            'High days (>12,000) often include running — these are the days your body works as designed',
            'Active calories of 441 avg are LOW for someone who should be running 5x/week'
        ]
    },

    // ========== MEDICATION OPTIMIZATION ==========
    medication_insights: [
        {
            med: 'Modafinil 200mg',
            status: 'Treating symptom of symptom',
            icon: '💊',
            analysis: 'Modafinil treats daytime sleepiness. But your sleepiness comes from: (1) narcolepsy (2) OSA from weight gain (3) poor sleep quality. Modafinil doesn\'t fix any root cause.',
            genome: 'CYP1A2 CC = fast caffeine metabolizer. Modafinil is primarily CYP3A4 metabolized (not CYP1A2), so your fast metabolizer status doesn\'t significantly impact modafinil dosing.',
            optimization: 'If you get running to 5x/week and weight to 155: OSA likely resolves → sleep quality improves → narcolepsy-related sleepiness becomes manageable → may be able to reduce or eliminate modafinil. Discuss with Dr. Kerr after 3 months of consistent running.'
        },
        {
            med: 'Finasteride 1mg',
            status: 'Monitoring needed',
            icon: '💊',
            analysis: 'Blocks 5-alpha reductase → reduces DHT → helps hair loss. BUT also blocks allopregnanolone synthesis → reduces GABA-A receptor modulation → removes a key calming mechanism.',
            genome: 'COMT AA = slow catecholamine clearance → already anxiety-prone baseline. Finasteride removes the GABA backup system. Double vulnerability.',
            optimization: 'Track daily mood score (1-10). If consistent decline over 2+ weeks, discuss with Dr. Kerr. Running provides strong countermeasure. Zinc 30mg + Magnesium 400mg provide partial GABA support.'
        },
        {
            med: 'PrEP (Emtricitabine-Tenofovir)',
            status: 'Honest discussion needed',
            icon: '💊',
            analysis: 'You aren\'t taking it consistently. Inconsistent PrEP is both medically suboptimal AND still causes some kidney stress on the days you do take it.',
            genome: 'APOE e4 is kidney-protective, but dehydration during runs + kidney stone history means kidneys are already stressed.',
            optimization: 'Have honest conversation with Dr. Kerr: (1) If continuing, daily adherence is critical for efficacy (2) Ask about TAF formulation — lower kidney impact (3) Ask about on-demand dosing (2-1-1 protocol) if daily isn\'t working. Your eGFR decline may be dehydration + stones more than TDF.'
        }
    ],

    // ========== MASTER PROTOCOL ==========
    protocol: {
        title: 'Integrated Protocol — Addressing Root Causes',
        tiers: [
            {
                name: 'TIER 1: FIX RUNNING (Week 1-3)',
                priority: 'critical',
                items: [
                    'Run 3x week 1 → 4x week 2 → 5x week 3+',
                    '30-45 min per run, easy pace (can hold conversation)',
                    'HYDRATE: 500ml before, sip every 15 min during, 500ml after',
                    'Post-run protein shake within 30 min (IL-6 CG mandate)',
                    'Running IS your COMT AA anxiety medication, BDNF CT neuroplasticity driver, FTO AA appetite regulator'
                ]
            },
            {
                name: 'TIER 2: FIX SLEEP (Ongoing)',
                priority: 'high',
                items: [
                    'No screens 1.5 hr before bed (ADORA2A CC)',
                    'No carbs within 2 hr of bed (MTNR1B CG)',
                    'Magnesium 400mg + L-Theanine 200mg before bed',
                    'Room: 65-68°F, blackout curtains, minimal noise',
                    'Consider scheduled 20-min nap at 1-2 PM (narcolepsy management)',
                    'Samsung Health sleep tracking every night — watch scores improve as weight drops'
                ]
            },
            {
                name: 'TIER 3: FIX NUTRITION (Daily)',
                priority: 'high',
                items: [
                    'Follow genome meal plan: 1,900 cal / 197g protein / 170g carbs / 55g fat',
                    'All recipes verified tree-nut-free (oat milk, not almond)',
                    'Front-load carbs around workouts (MTNR1B CG)',
                    'Take full supplement stack (see Health tab)',
                    'Glucomannan before lunch + dinner (FTO AA appetite control)',
                    '3L+ water daily minimum — protect kidneys'
                ]
            },
            {
                name: 'TIER 4: DOCTOR ACTIONS (Next Appointment)',
                priority: 'action',
                items: [
                    'Request: Testosterone (Total + Free), SHBG, DHT',
                    'Request: Thyroid panel (TSH, Free T3, Free T4, TPO antibodies)',
                    'Request: HbA1c (MTNR1B CG glucose screening)',
                    'Request: Ferritin, Iron, TIBC (runner\'s iron status)',
                    'Request: Updated Lipid Panel + Lp(a) (APOE e3/e4 annual)',
                    'Request: Renal ultrasound (kidney stone remnants)',
                    'Discuss: PrEP adherence and TAF vs TDF',
                    'Discuss: Low Alkaline Phosphatase (35 — below range)',
                    'Note: DID diagnosis should be in chart for medication interaction awareness'
                ]
            }
        ]
    }
};

function renderDeepAnalysis() {
    const el = document.getElementById('deepAnalysisContent');
    if (!el) return;

    const d = DEEP_INSIGHTS;
    let html = '';

    // Behavioral Patterns
    html += `<div class="da-section">
    <h3 class="da-section-title">🔍 Behavioral Pattern Analysis</h3>
    <p class="da-section-desc">Patterns discovered by cross-referencing genome, labs, Samsung Health biometrics, conditions, and medications.</p>`;
    d.behavioral_patterns.forEach(p => {
        const cls = p.severity === 'critical' ? 'da-critical' : p.severity === 'warning' ? 'da-warning' : 'da-info';
        html += `<div class="da-card ${cls}">
      <div class="da-card-header">
        <span class="da-icon">${p.icon}</span>
        <h4 class="da-card-title">${p.title}</h4>
      </div>
      <div class="da-pattern"><strong>Pattern:</strong> ${p.pattern}</div>
      <div class="da-evidence">
        <div class="da-label">📊 Evidence</div>
        <ul>${p.evidence.map(e => `<li>${e}</li>`).join('')}</ul>
      </div>
      <div class="da-genome">🧬 ${p.genome}</div>
      <div class="da-insight"><strong>💡 Insight:</strong><br>${p.insight.replace(/\n/g, '<br>')}</div>
      <div class="da-action"><strong>✅ Actions:</strong><br>${p.action.replace(/(\d+\))/g, '<br>$1')}</div>
    </div>`;
    });
    html += `</div>`;

    // Doctor Gaps
    html += `<div class="da-section">
    <h3 class="da-section-title">🩺 What Your Doctor Hasn't Found</h3>
    <p class="da-section-desc">Missing labs, overlooked connections, and under-investigated symptoms based on your genome profile.</p>
    <div class="da-gaps-grid">`;
    d.doctor_gaps.forEach(g => {
        const cls = g.severity === 'critical' ? 'dg-critical' : g.severity === 'warning' ? 'dg-warning' : 'dg-info';
        html += `<div class="da-gap-card ${cls}">
      <h5 class="dg-title">${g.title}</h5>
      <div class="dg-detail">${g.detail}</div>
      <div class="dg-why"><strong>Why it matters:</strong> ${g.why_it_matters}</div>
      <div class="dg-action">📋 ${g.action}</div>
    </div>`;
    });
    html += `</div></div>`;

    // Sleep Analysis
    const sa = d.sleep_analysis;
    html += `<div class="da-section">
    <h3 class="da-section-title">${sa.icon} ${sa.title}</h3>
    <div class="da-sleep-grid">`;
    sa.metrics.forEach(m => {
        const cls = m.status === 'good' ? 'ds-good' : m.status === 'bad' || m.status === 'poor' ? 'ds-bad' : m.status === 'high' || m.status === 'low' ? 'ds-warn' : 'ds-variable';
        html += `<div class="da-sleep-card ${cls}">
      <div class="ds-value">${m.value}</div>
      <div class="ds-name">${m.name}</div>
      <div class="ds-note">${m.note}</div>
    </div>`;
    });
    html += `</div>
    <div class="da-sleep-conclusion">${sa.intervention}</div>
  </div>`;

    // Performance
    const perf = d.performance;
    html += `<div class="da-section">
    <h3 class="da-section-title">${perf.icon} ${perf.title}</h3>
    <div class="da-perf-grid">`;
    perf.current.forEach(p => {
        const cls = p.status === 'bad' ? 'dp-bad' : p.status === 'low' ? 'dp-warn' : 'dp-ok';
        html += `<div class="da-perf-card ${cls}">
      <div class="dp-value">${p.value}</div>
      <div class="dp-metric">${p.metric}</div>
      <div class="dp-target">Target: ${p.target}</div>
    </div>`;
    });
    html += `</div>
    <div class="da-perf-patterns">`;
    perf.patterns.forEach(p => {
        html += `<div class="dp-pattern">• ${p}</div>`;
    });
    html += `</div></div>`;

    // Medication Insights
    html += `<div class="da-section">
    <h3 class="da-section-title">💊 Medication Deep Analysis</h3>`;
    d.medication_insights.forEach(m => {
        html += `<div class="da-med-card">
      <div class="dm-header">
        <span class="dm-icon">${m.icon}</span>
        <div class="dm-name">${m.med}</div>
        <div class="dm-status">${m.status}</div>
      </div>
      <div class="dm-analysis">${m.analysis}</div>
      <div class="dm-genome">🧬 ${m.genome}</div>
      <div class="dm-optimize"><strong>Optimization:</strong> ${m.optimization}</div>
    </div>`;
    });
    html += `</div>`;

    // Master Protocol
    const proto = d.protocol;
    html += `<div class="da-section">
    <h3 class="da-section-title">📋 ${proto.title}</h3>
    <div class="da-protocol-tiers">`;
    proto.tiers.forEach(tier => {
        const cls = tier.priority === 'critical' ? 'dt-critical' : tier.priority === 'high' ? 'dt-high' : 'dt-action';
        html += `<div class="da-tier ${cls}">
      <h4 class="dt-name">${tier.name}</h4>
      <ul>${tier.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`;
    });
    html += `</div></div>`;

    el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(renderDeepAnalysis, 800);
});
