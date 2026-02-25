// ===== ADAM'S GENOME DATA (Extracted from 23andMe v5 Full - 631,455 SNPs) =====
const GENOME = {
    primary: {
        rs1815739: {
            gene: 'ACTN3', genotype: 'TT', chromosome: '11', position: '66328095',
            label: 'Muscle Fiber Type',
            interpretation: 'XX homozygous — SLOW-TWITCH DOMINANT. Complete alpha-actinin-3 deficiency. Your muscles are endurance-wired, not power-wired.',
            impact: 'high',
            override: 'OVERRIDE ACTIVE: Increase lifting rest to 120-150 sec between supersets. You will NOT recover as fast as mixed/RR types. Compensate with longer intra-set recovery. Your running engine is genetically advantaged — leverage this.'
        },
        rs1107946: {
            gene: 'COL1A1', genotype: 'CC', chromosome: '17', position: '48280990',
            label: 'Collagen / Tendon Integrity',
            interpretation: 'CC genotype — REDUCED soft tissue injury risk. Normal collagen production.',
            impact: 'low',
            override: 'No mileage ceiling required. Standard protocol holds. Tendons are structurally sound.'
        },
        rs12722: {
            gene: 'COL5A1', genotype: 'CT', chromosome: '9', position: '137734416',
            label: 'Tendon / Ligament Flexibility',
            interpretation: 'CT heterozygous — MODERATE tendon laxity risk. Between stiff and flexible extremes.',
            impact: 'medium',
            override: 'ADVISORY: Add 5-10 min dynamic mobility pre-run (ankle circles, hip openers, leg swings). Do NOT skip warm-up on tempo days or sprints. Hard mileage ceiling: 50 miles/week max until 12-week adaptation.'
        },
        rs2228570: {
            gene: 'VDR (FokI)', genotype: 'NOT FOUND', chromosome: '-', position: '-',
            label: 'Vitamin D Receptor',
            interpretation: 'Not genotyped in 23andMe v5 chip. Using backup VDR marker (rs1544410).',
            impact: 'unknown',
            override: 'Defaulting to rs1544410 findings below.'
        },
        rs1544410: {
            gene: 'VDR (BsmI)', genotype: 'CT', chromosome: '12', position: '48239835',
            label: 'Vitamin D & Calcium Metabolism',
            interpretation: 'CT heterozygous — Moderately reduced Vitamin D receptor efficiency. May need higher D3 intake for bone density and recovery.',
            impact: 'medium',
            override: 'OVERRIDE ACTIVE: Supplement 3000-5000 IU Vitamin D3 daily (with K2-MK7 for absorption). Utah winter = low sun exposure. Your VDR is working at ~70% efficiency. Test 25(OH)D blood levels — target 50-70 ng/mL.'
        },
        rs1800795: {
            gene: 'IL-6', genotype: 'CG', chromosome: '7', position: '22766645',
            label: 'Inflammatory Response',
            interpretation: 'CG heterozygous — MODERATE inflammatory response. You produce more IL-6 under stress than GG types, but less than CC.',
            impact: 'medium',
            override: 'OVERRIDE ACTIVE: Increase protein floor from 1.0g to 1.15g/lb bodyweight. Add anti-inflammatory foods (turmeric, omega-3s, tart cherry juice post-long-run). Your recovery window is narrower — prioritize post-workout nutrition within 30 min.'
        },
        rs9939609: {
            gene: 'FTO', genotype: 'AA', chromosome: '16', position: '53820527',
            label: 'Fat Mass & Obesity Risk',
            interpretation: 'AA homozygous — HIGHEST RISK ALLELE. Associated with increased appetite, reduced satiety signaling, and higher baseline BMI. You carry two copies of the risk allele.',
            impact: 'critical',
            override: 'CRITICAL OVERRIDE: Your 300 cal deficit is CORRECT but must be monitored aggressively. Your brain underreports satiety. Meal prep non-negotiable. High-volume low-cal foods (vegetables, lean protein) at every meal. NEVER eat from containers. Plate everything. Protein to 1.2g/lb to maximize satiety. Track calories for the first 4 weeks minimum.'
        },
        rs1801282: {
            gene: 'PPARG', genotype: 'CC', chromosome: '3', position: '12393125',
            label: 'Fat Storage & Insulin Sensitivity',
            interpretation: 'CC (Pro/Pro) — Standard fat metabolism. No protective Ala allele. Normal insulin sensitivity, but no enhanced fat oxidation bonus.',
            impact: 'low',
            override: 'Workday carb restriction confirmed as optimal. Your PPARG offers no metabolic shortcut — the low-insulin clinic strategy (high protein/fat, low carb during shifts) is the right play. Carb timing around runs stands at 70%.'
        }
    },
    bonus: {
        rs762551: {
            gene: 'CYP1A2', genotype: 'AA', label: 'Caffeine Metabolism',
            interpretation: 'AA — FAST caffeine metabolizer. Coffee is your ally. Pre-workout caffeine will boost performance without disrupting sleep if consumed >6hrs before bed.',
            impact: 'positive'
        },
        rs4680: {
            gene: 'COMT', genotype: 'AA', label: 'Stress / Dopamine (Warrior vs Worrier)',
            interpretation: 'AA (Met/Met) — "WORRIER" genotype. Slow dopamine breakdown = higher baseline dopamine but MORE anxiety under stress. Higher pain sensitivity. Better cognitive performance at baseline but degrades under pressure.',
            impact: 'critical'
        },
        rs53576: {
            gene: 'OXTR', genotype: 'AG', label: 'Oxytocin Receptor / Social Bonding',
            interpretation: 'AG heterozygous — Moderate empathy and social bonding capacity. Neither hyper-attached nor detached.',
            impact: 'medium'
        },
        rs6265: {
            gene: 'BDNF', genotype: 'CT', label: 'Brain Plasticity / Depression Risk',
            interpretation: 'CT (Val/Met) — ONE copy of Met allele. Reduced BDNF secretion. Higher vulnerability to depression and anxiety. Exercise is CRITICAL for BDNF upregulation — running is literally your antidepressant.',
            impact: 'critical'
        },
        rs429358: {
            gene: 'APOE', genotype: 'CT', label: 'APOE ε4 Status',
            interpretation: 'CT — You carry ONE copy of ε4 allele (APOE ε3/ε4). Elevated cardiovascular and Alzheimer\'s risk. Exercise, omega-3s, and sleep are protective factors.',
            impact: 'critical'
        },
        rs7412: {
            gene: 'APOE', genotype: 'CC', label: 'APOE ε2 Status',
            interpretation: 'CC — No protective ε2 allele. Combined with rs429358=CT, your APOE status is ε3/ε4.',
            impact: 'medium'
        },
        rs1801133: {
            gene: 'MTHFR C677T', genotype: 'GG', label: 'Folate Metabolism',
            interpretation: 'GG (wildtype) — Normal MTHFR function. Good methylation. No supplementation override needed.',
            impact: 'low'
        },
        rs1801131: {
            gene: 'MTHFR A1298C', genotype: 'TT', label: 'Folate Metabolism',
            interpretation: 'TT (wildtype) — Normal. Both MTHFR variants clear — your methylation is solid.',
            impact: 'low'
        },
        rs1800629: {
            gene: 'TNF-alpha', genotype: 'AG', label: 'Inflammation / TNF-α',
            interpretation: 'AG heterozygous — ONE copy of the high-expression allele. Elevated TNF-α under stress/injury. Slower recovery from hard sessions when combined with IL-6=CG.',
            impact: 'high'
        },
        rs1143634: {
            gene: 'IL-1β', genotype: 'AG', label: 'Inflammation / IL-1β',
            interpretation: 'AG heterozygous — Moderately increased IL-1β expression. Triple-stacked inflammatory markers (IL-6, TNF-α, IL-1β all heterozygous carriers).',
            impact: 'high'
        },
        rs4988235: {
            gene: 'LCT', genotype: 'AA', label: 'Lactose Tolerance',
            interpretation: 'AA — Lactose TOLERANT (European persistence allele). Dairy is fine as a protein source.',
            impact: 'positive'
        },
        rs1799945: {
            gene: 'HFE', genotype: 'CC', label: 'Iron Overload Risk',
            interpretation: 'CC (wildtype) — No hereditary hemochromatosis risk. Normal iron metabolism.',
            impact: 'low'
        },
        rs8192678: {
            gene: 'PPARGC1A', genotype: 'TT', label: 'Aerobic Capacity (PGC-1α)',
            interpretation: 'TT — Potential for REDUCED mitochondrial biogenesis. Your endurance ceiling may be lower genetically. Running volume and consistency are your hack to overcome this.',
            impact: 'medium'
        },
        rs7799039: {
            gene: 'LEP', genotype: 'AG', label: 'Leptin / Hunger Signaling',
            interpretation: 'AG — Moderate leptin levels. Combined with FTO=AA, your appetite regulation is your weakest link. Manual discipline required.',
            impact: 'high'
        },
        rs1042713: {
            gene: 'ADRB2', genotype: 'AG', label: 'Fat Mobilization',
            interpretation: 'AG heterozygous — Moderate beta-2 receptor function. Fat mobilization during exercise is average.',
            impact: 'low'
        },
        rs10830963: {
            gene: 'MTNR1B', genotype: 'CG', label: 'Melatonin / Sleep & Glucose',
            interpretation: 'CG heterozygous — ONE risk allele. Eating late at night impairs your glucose metabolism more than average. Do not eat carbs within 2 hours of sleep.',
            impact: 'medium'
        },
        rs5751876: {
            gene: 'ADORA2A', genotype: 'CC', label: 'Caffeine Sleep Sensitivity',
            interpretation: 'CC — SENSITIVE to caffeine\'s sleep-disruption effects despite fast metabolism. Cut caffeine by 2 PM.',
            impact: 'medium'
        },
        rs73598374: {
            gene: 'ADA', genotype: 'CC', label: 'Deep Sleep Quality',
            interpretation: 'CC (wildtype) — Normal deep sleep architecture. No SWS deficit. Magnesium Glycinate + screen blackout protocol is sufficient.',
            impact: 'low'
        },
        rs4994: {
            gene: 'ADRB3', genotype: 'AA', label: 'Metabolic Rate / Thermogenesis',
            interpretation: 'AA (wildtype) — Normal metabolic rate. No thermogenesis impairment.',
            impact: 'low'
        },
        rs1800497: {
            gene: 'ANKK1/DRD2', genotype: 'GG', label: 'Dopamine Reward System',
            interpretation: 'GG (wildtype) — Normal dopamine receptor density. No increased addiction/reward-seeking risk from this marker.',
            impact: 'low'
        },
        rs4343: {
            gene: 'ACE', genotype: 'AA', label: 'Endurance vs Power',
            interpretation: 'AA — Associated with ACE II genotype (insertion). ENDURANCE OPTIMIZED. This confirms ACTN3=TT: you are built for distance, not power.',
            impact: 'positive'
        },
        rs1695: {
            gene: 'GSTP1', genotype: 'AG', label: 'Detoxification',
            interpretation: 'AG heterozygous — Moderate phase II detox enzyme activity. Eat cruciferous vegetables (broccoli, cauliflower) regularly.',
            impact: 'low'
        },
        rs1800169: {
            gene: 'BDNF-AS', genotype: 'GG', label: 'BDNF Antisense',
            interpretation: 'GG — Normal BDNF antisense regulation.',
            impact: 'low'
        },
        rs2241766: {
            gene: 'ADIPOQ', genotype: 'TT', label: 'Adiponectin / Insulin Sensitivity',
            interpretation: 'TT — Normal adiponectin levels. Standard insulin sensitivity support.',
            impact: 'low'
        }
    }
};

// ===== PROTOCOL OVERRIDES BASED ON GENOME =====
const OVERRIDES = [
    {
        severity: 'critical',
        title: '🚨 FTO AA + LEP AG: Appetite Regulation is Your Genetic Weak Point',
        detail: 'You carry the highest-risk FTO allele (AA) AND a moderate leptin variant. Your brain literally under-reports satiety. MEAL PREP is non-negotiable. Plate everything. Track calories for 4+ weeks. Protein locked at 1.2g/lb for maximum satiety effect.'
    },
    {
        severity: 'critical',
        title: '🧠 COMT AA + BDNF CT: Mental Health — Running is Your Medicine',
        detail: 'Warrior/Worrier COMT (slow dopamine breakdown = higher anxiety under stress) combined with reduced BDNF. Running directly upregulates BDNF and clears excess dopamine. DO NOT SKIP RUNS. This is not just cardio — it is psychiatric medication. Your DID management is genetically supported by your running engine.'
    },
    {
        severity: 'high',
        title: '🔴 Triple Inflammatory Stack: IL-6 CG + TNF-α AG + IL-1β AG',
        detail: 'Three heterozygous inflammatory markers. You are a MODERATE-TO-SLOW RECOVERER. Protein override to 1.15-1.2g/lb. Add omega-3 (2-3g EPA/DHA), curcumin (500mg), and tart cherry juice post-long runs. Sleep minimum UPGRADED to 8 hours.'
    },
    {
        severity: 'high',
        title: '💪 ACTN3 TT + ACE II: You Are an Endurance Machine, Not a Power Lifter',
        detail: 'Complete alpha-actinin-3 deficiency + endurance-optimized ACE. Your lifting rest periods are INCREASED to 120-150 sec between supersets. You will fatigue faster on heavy compound lifts but recover faster between runs. The V-Taper hypertrophy work (higher rep ranges, RPE 8) is the correct approach.'
    },
    {
        severity: 'medium',
        title: '🦴 COL5A1 CT + VDR CT: Tendon Caution + Vitamin D Deficit Risk',
        detail: 'Moderate tendon laxity + reduced Vitamin D receptor efficiency. Supplement 3000-5000 IU D3 + K2-MK7 daily. Add 5-10 min dynamic mobility before hard runs. Hard mileage ceiling: 50 mi/week until 12-week adaptation.'
    },
    {
        severity: 'medium',
        title: '⚠️ APOE ε3/ε4: Cardiovascular & Cognitive Self-Defense',
        detail: 'One copy of ε4. Elevated lifetime risk for CVD and Alzheimer\'s. Exercise, omega-3s, sleep, and stress management are YOUR protective factors. This protocol IS your defense. Do not deviate from sleep protocol.'
    },
    {
        severity: 'info',
        title: '☕ CYP1A2 AA + ADORA2A CC: Fast Metabolizer, But Sleep-Sensitive',
        detail: 'You metabolize caffeine fast (performance boost works), but your adenosine receptors are sensitive. Caffeine cutoff: 2 PM sharp. Pre-run coffee is effective if running before noon.'
    },
    {
        severity: 'info',
        title: '🥛 LCT AA + MTHFR GG/TT: Dairy Cleared, Methylation Clean',
        detail: 'Lactose tolerant. Both MTHFR variants are wildtype. Greek yogurt, whey protein, cottage cheese all viable. No folate supplementation override needed.'
    },
    {
        severity: 'info',
        title: '🌙 MTNR1B CG: Late-Night Carbs Hit You Harder',
        detail: 'Your melatonin receptor variant impairs glucose handling at night. No carbs within 2 hours of sleep. Evening meals must be protein/fat focused.'
    }
];

// ===== SCHEDULE DATA: Feb 26 - Mar 1 =====
const SCHEDULE = {
    '2026-02-26': {
        dayLabel: 'Thursday, Feb 26',
        tagline: 'THE HARD SHUTDOWN',
        runType: 'REST — Zero Running',
        liftSlot: 'Workout 1: Width & The Shelf',
        blocks: [
            { time: '7:00 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: 'Target 7.5 hrs. If D&D ran late last night, log sleep deficit.' },
            { time: '7:00–7:30', label: 'Morning Activation', icon: '☕', type: 'nutrition', detail: 'Black coffee, high-protein breakfast (eggs, turkey sausage). ZERO carbs — no workout today to burn them.' },
            { time: '7:30–8:30', label: 'Meditation + Marco Walk', icon: '🧘', type: 'recovery', detail: '10-15 min sit (Buddhism practice). Then Marco morning walk. Non-negotiable CNS recovery.' },
            { time: '8:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: 'Optician shift. Fat oxidation mode all day.' },
            { time: '12:00–12:30', label: 'Lunch', icon: '🍱', type: 'nutrition', detail: 'HIGH protein, fat-moderate, LOW carb. Grilled chicken + avocado + leafy greens. No insulin spike.' },
            { time: '3:30 PM', label: 'Mid-Shift Snack', icon: '🥜', type: 'nutrition', detail: 'Protein bar or nuts + jerky. Stay in fat oxidation.' },
            { time: '5:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '5:30–6:20', label: 'Workout 1: Width & Shelf', icon: '🏋️', type: 'lifting', detail: 'A1: Incline DB Press ↔ A2: Wide-Grip Lat Pulldowns\nB1: Flat Machine Chest Press ↔ B2: Chest-Supported DB Rows\nC1: Cable Lateral Raises ↔ C2: Straight-Arm Cable Pulldowns\nRest: 120-150 sec (ACTN3 override). RPE 8.' },
            { time: '6:25–6:50', label: 'Post-Lift Meal', icon: '🍗', type: 'nutrition', detail: '40-50g protein + moderate carbs. Post-workout window. This is where 30% of daily carbs go.' },
            { time: '7:00–8:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: 'Active recovery. Decompress. No screens if possible.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: 'Hard line. 60 min before bed. Read, stretch, talk to Kris.' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '200-400mg. 45 min before lights out.' },
            { time: '10:30 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: '65°F, pitch black. Target 8 hrs (inflammatory override). Wake ~6:30 AM.' }
        ]
    },
    '2026-02-27': {
        dayLabel: 'Friday, Feb 27',
        tagline: 'EASY RUN DAY',
        runType: 'Easy Run (20-30 min)',
        liftSlot: 'Workout 2: Caps & Pipes (conditional)',
        blocks: [
            { time: '6:30 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: '' },
            { time: '6:30–7:00', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'Small carb hit: banana or rice cake + nut butter. Coffee OK (fast metabolizer). 35% of daily carbs here.' },
            { time: '7:00–7:30', label: 'Easy Run', icon: '🏃', type: 'running', detail: '20-30 min conversational pace. HR low. Aerobic maintenance. BDNF upregulation. This is medicine.' },
            { time: '7:35–8:00', label: 'Post-Run Recovery Meal', icon: '🍳', type: 'nutrition', detail: '40g+ protein, carb replenish (35% of daily carbs). Eggs, Greek yogurt, fruit. Omega-3 source.' },
            { time: '8:00–9:00', label: 'Spite Core Circuit', icon: '🔥', type: 'core', detail: '3-4 rounds, 12 min continuous:\n• Hanging Knee Raises x15\n• Cable Woodchoppers x12/side\n• Weighted Decline Crunches x15\n• Ab Wheel Rollouts x10' },
            { time: '9:00–11:30', label: 'Free Block', icon: '🧘', type: 'free', detail: 'Meditation, Marco care, meal prep, journaling. Protect this time.' },
            { time: '11:30 AM', label: 'Commute / Prep', icon: '🚗', type: 'work', detail: '' },
            { time: '12:15 PM', label: 'Work Starts', icon: '🏥', type: 'work', detail: 'Clinic = low insulin mode. No carb spikes during shift.' },
            { time: '3:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: 'Protein-dominant. No carb spike.' },
            { time: '8:45 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: 'Late shift. Energy management critical.' },
            { time: '9:00–9:30', label: 'Late Dinner', icon: '🍽️', type: 'nutrition', detail: 'Protein-forward, ZERO carbs (MTNR1B override — no carbs within 2 hrs of sleep). Light meal.' },
            { time: '9:30 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '10:15 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '200-400mg.' },
            { time: '11:00 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs. Wake ~7:00 AM. NOTE: Workout 2 deferred to Sat AM due to late shift (CNS protection).' }
        ]
    },
    '2026-02-28': {
        dayLabel: 'Saturday, Feb 28',
        tagline: 'THE SHAKEOUT',
        runType: 'Very Easy Jog (20-30 min)',
        liftSlot: 'Workout 2: Caps & Pipes (deferred from Fri)',
        blocks: [
            { time: '7:00 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: '' },
            { time: '7:00–7:15', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'Small carb: banana, coffee. This is a shakeout, not a race.' },
            { time: '7:15–7:45', label: 'The Shakeout', icon: '🏃', type: 'running', detail: '20-30 min very easy jog. CNS reset. If legs feel like cement, cut to 20 min. Honor it.' },
            { time: '7:45–8:00', label: 'Post-Run Fuel', icon: '🍳', type: 'nutrition', detail: 'Quick protein + carbs. Prep for lifting.' },
            { time: '8:00–8:50', label: 'Workout 2: Caps & Pipes', icon: '🏋️', type: 'lifting', detail: 'A1: Seated DB Shoulder Press ↔ A2: Neutral-Grip Pull-Ups\nB1: DB Lateral Raises ↔ B2: DB Hammer Curls\nC1: Overhead Triceps Rope Extensions ↔ C2: Face Pulls\nRest: 120-150 sec (ACTN3 override). RPE 8. 50 min cap.' },
            { time: '8:50–9:15', label: 'Post-Lift Meal', icon: '🍗', type: 'nutrition', detail: '40-50g protein + carbs. Recovery window.' },
            { time: '9:15–9:40', label: 'Marco Care', icon: '🐕', type: 'free', detail: 'Walk, feed.' },
            { time: '9:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: '' },
            { time: '12:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: 'High protein, low carb. Fat oxidation mode.' },
            { time: '6:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '6:30–7:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: 'Active recovery. Relationship time is protocol.' },
            { time: '7:30–8:00', label: 'Dinner', icon: '🍽️', type: 'nutrition', detail: 'Protein-forward. Moderate carbs (pre-loading for Sunday Empire Builder).' },
            { time: '8:30 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: 'Early cutoff — big run tomorrow.' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '200-400mg.' },
            { time: '10:00 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs. Wake ~5:45 AM for Empire Builder.' }
        ]
    },
    '2026-03-01': {
        dayLabel: 'Sunday, Mar 1',
        tagline: 'THE EMPIRE BUILDER',
        runType: 'Long Run (45-60+ min, conversational)',
        liftSlot: 'None — Core Circuit day',
        blocks: [
            { time: '5:45 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: 'Early wake for long run window before work.' },
            { time: '5:45–6:15', label: 'Pre-Run Carb Load', icon: '☕', type: 'nutrition', detail: 'FRONT-LOAD CARBS: oatmeal, banana, nut butter, coffee. 35-40% of daily carbs HERE. This is the ONE meal you fuel hard.' },
            { time: '6:15–7:25', label: 'THE EMPIRE BUILDER', icon: '🏃', type: 'running', detail: '45-60+ min, conversational pace. This is your church. Slow enough to hold a sentence. BDNF peak. Marco stays home. Build the engine.' },
            { time: '7:30–8:15', label: 'Spite Core Circuit', icon: '🔥', type: 'core', detail: '3-4 rounds, 12 min continuous:\n• Hanging Knee Raises x15\n• Cable Woodchoppers x12/side\n• Weighted Decline Crunches x15\n• Ab Wheel Rollouts x10' },
            { time: '8:15–8:45', label: 'Post-Run/Core Recovery', icon: '🍗', type: 'nutrition', detail: 'BIG meal: 40-50g protein + 35% daily carbs. Tart cherry juice (inflammatory override). Omega-3 source.' },
            { time: '8:45–9:30', label: 'Dynamic Mobility', icon: '🧘', type: 'recovery', detail: '15 min foam roll + stretching (COL5A1 override). Hip openers, ankle work, IT band.' },
            { time: '9:30–11:15', label: 'Marco + Kris Time + Prep', icon: '🐕', type: 'free', detail: 'Walk Marco. Shower. Meal prep for the week if possible. Decompress before shift.' },
            { time: '11:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: '' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: 'High protein, minimal carbs. Fat oxidation mode.' },
            { time: '6:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '6:30–8:00', label: 'Marco + Kris Evening', icon: '🐕', type: 'free', detail: 'Recovery and relationship time. Walk Marco. Active recovery.' },
            { time: '8:00–8:30', label: 'Dinner', icon: '🍽️', type: 'nutrition', detail: 'Protein-forward, light carbs. No carbs after 8:30 PM (MTNR1B override).' },
            { time: '8:30 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '200-400mg.' },
            { time: '10:00 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs. Prep for Monday Spite Sprints.' }
        ]
    }
};

// ===== WORKOUT DATA (with coaching for guided player) =====
const WORKOUTS = {
    lifting: [
        {
            id: 'w1', name: 'Workout 1: Width & The Shelf',
            focus: 'Chest width, back thickness, lateral cap foundation',
            exercises: [
                {
                    set: 'A1', name: 'Incline DB Press', sets: 3, repRange: '8-10', pair: 'A2', pairName: 'Wide-Grip Lat Pulldowns', pairSets: 3, pairReps: '8-12',
                    target: 'Upper chest, front delts', feel: 'Deep stretch at bottom across upper pecs. Squeeze at top without locking elbows.',
                    form: ['Bench at 30-45°', 'Feet flat, back arched slightly', 'Lower to upper chest line', 'Drive up and slightly inward', 'Exhale on press, inhale on lower'],
                    mistakes: ['Bench too steep (becomes shoulder press)', 'Flaring elbows past 75°', 'Bouncing off chest'],
                    pairTarget: 'Lats (width), rear delts', pairFeel: 'Stretch at top, squeeze shoulder blades together at bottom.',
                    pairForm: ['Wide overhand grip', 'Lean back 10-15°', 'Pull to upper chest', 'Squeeze lats 1 sec at bottom', 'Control the negative']
                },
                {
                    set: 'B1', name: 'Flat Machine Chest Press', sets: 3, repRange: '10-12', pair: 'B2', pairName: 'Chest-Supported DB Rows', pairSets: 3, pairReps: '10-12',
                    target: 'Mid chest, triceps', feel: 'Even pressure across chest. Full stretch at bottom, hard squeeze at lockout.',
                    form: ['Seat height: handles at nipple line', 'Grip width: just outside shoulders', 'Full ROM — stretch and squeeze', 'Exhale on push'],
                    mistakes: ['Seat too high (shoulder stress)', 'Half reps', 'Shrugging shoulders up'],
                    pairTarget: 'Mid back, rhomboids, rear delts', pairFeel: 'Squeeze between shoulder blades at top. No momentum.',
                    pairForm: ['Chest on pad, feet planted', 'Pull elbows back, not up', 'Squeeze 1 sec at top', 'Slow 2-sec negative', 'Keep neck neutral']
                },
                {
                    set: 'C1', name: 'Cable Lateral Raises', sets: 3, repRange: '15', pair: 'C2', pairName: 'Straight-Arm Cable Pulldowns', pairSets: 3, pairReps: '15',
                    target: 'Lateral delts (the "caps")', feel: 'Burn on the outside of your shoulders. Pinky-up at top.',
                    form: ['Cable at lowest setting', 'Slight lean away from cable', 'Raise to just above shoulder height', 'Lead with elbow, pinky up', 'Control the negative — 2 sec down'],
                    mistakes: ['Using momentum/swinging', 'Raising too high (traps take over)', 'Going too heavy — this is isolation'],
                    pairTarget: 'Lats (length), teres major', pairFeel: 'Stretch at top with arms overhead, hard lat squeeze at bottom by hips.',
                    pairForm: ['Bar or rope attachment at top', 'Arms straight, slight elbow bend', 'Pull down in arc to thighs', 'Squeeze lats 1 sec', 'Slow return overhead']
                }
            ]
        },
        {
            id: 'w2', name: 'Workout 2: The Caps & Pipes',
            focus: 'Shoulder caps, arms, pulling strength',
            exercises: [
                {
                    set: 'A1', name: 'Seated DB Shoulder Press', sets: 3, repRange: '8-10', pair: 'A2', pairName: 'Neutral-Grip Pull-Ups', pairSets: 3, pairReps: '8-10',
                    target: 'Anterior & lateral delts, triceps', feel: 'Pressure on top of shoulders. Full lockout overhead without arching back.',
                    form: ['Bench at 90° or slight incline', 'DBs start at ear height', 'Press up and slightly inward', 'Full lockout but don\'t bang DBs', 'Exhale on press'],
                    mistakes: ['Excessive back arch', 'Starting too low (shoulder impingement)', 'Uneven press — watch mirror'],
                    pairTarget: 'Lats, biceps, forearms', pairFeel: 'Full hang stretch at bottom. Chest to bar at top. Lats doing the work.',
                    pairForm: ['Neutral/parallel grip', 'Dead hang start', 'Pull elbows DOWN to ribs', 'Chin over bar', '2-sec negative — no dropping']
                },
                {
                    set: 'B1', name: 'DB Lateral Raises', sets: 4, repRange: '12-15', pair: 'B2', pairName: 'DB Hammer Curls', pairSets: 3, pairReps: '10-12',
                    target: 'Lateral delts', feel: 'Burning on outer shoulder caps. Light weight, high reps, maximum mind-muscle.',
                    form: ['Slight forward lean', 'Lead with elbows', 'Raise to shoulder height', 'Pinky slightly higher than thumb', '2-sec negative'],
                    mistakes: ['Too heavy — ego kills delts', 'Shrugging traps', 'Swinging body'],
                    pairTarget: 'Brachialis, brachioradialis, biceps', pairFeel: 'Forearm and outer bicep. Thick arm builder.',
                    pairForm: ['Palms facing each other (neutral)', 'Elbows pinned to ribs', 'Curl to shoulder height', 'Squeeze 1 sec top', '3-sec negative']
                },
                {
                    set: 'C1', name: 'Overhead Triceps Rope Extensions', sets: 3, repRange: '12-15', pair: 'C2', pairName: 'Face Pulls', pairSets: 3, pairReps: '15',
                    target: 'Triceps long head', feel: 'Deep stretch behind head. Squeeze at full extension. Elbows stay pointed up.',
                    form: ['Face away from cable', 'Rope behind head, elbows up', 'Extend fully overhead', 'Squeeze triceps 1 sec', 'Slow return to stretch'],
                    mistakes: ['Elbows flaring wide', 'Moving shoulders — isolate triceps', 'Using too much weight'],
                    pairTarget: 'Rear delts, rotator cuff, mid traps', pairFeel: 'Squeeze between shoulder blades. External rotation at top.',
                    pairForm: ['Rope at face height', 'Pull to ears, elbows high', 'Externally rotate at top', 'Squeeze rear delts 2 sec', 'This is posture work — respect it']
                }
            ]
        },
        {
            id: 'w3', name: 'Workout 3: Density & Detail',
            focus: 'Chest density, row variety, finishing volume',
            exercises: [
                {
                    set: 'A1', name: 'Flat DB Bench Press', sets: 3, repRange: '8-10', pair: 'A2', pairName: 'Seated Cable Rows V-Bar', pairSets: 3, pairReps: '10-12',
                    target: 'Mid chest, triceps', feel: 'Full stretch at bottom, hard squeeze at top. Even pressure across pecs.',
                    form: ['Flat bench, feet planted', 'DBs at chest line, elbows ~75°', 'Press up, slight arc inward', 'Touch DBs lightly at top', 'Inhale down, exhale up'],
                    mistakes: ['Elbows flared 90° (shoulder risk)', 'Not going deep enough', 'Uneven arms'],
                    pairTarget: 'Mid back, lats, rhomboids', pairFeel: 'Chest-to-handle pull. Squeeze shoulder blades hard.',
                    pairForm: ['V-bar close grip', 'Sit upright, slight lean back', 'Pull to lower chest', 'Squeeze blades 1 sec', 'Slow 2-sec release']
                },
                {
                    set: 'B1', name: 'Low-to-High Cable Crossovers', sets: 3, repRange: '12-15', pair: 'B2', pairName: 'Single-Arm DB Rows', pairSets: 3, pairReps: '10-12/side',
                    target: 'Upper inner chest', feel: 'Squeeze across the upper chest at top. Hands meet above chin level.',
                    form: ['Cables at lowest setting', 'Step forward, slight lean', 'Sweep up and inward', 'Hands meet at chin height', 'Squeeze pecs 1 sec at top'],
                    mistakes: ['Too much arm — think chest squeeze', 'Cables too high (wrong angle)', 'Rushing reps'],
                    pairTarget: 'Lats, rhomboids, rear delt (unilateral)', pairFeel: 'Full lat stretch at bottom, hard row to hip.',
                    pairForm: ['One knee on bench, one foot planted', 'Let arm hang fully', 'Row to hip, not shoulder', 'Squeeze 1 sec', 'Anti-rotation — don\'t twist trunk']
                },
                {
                    set: 'C1', name: 'Push-Ups', sets: 3, repRange: 'failure-1', pair: 'C2', pairName: 'DB Shrugs', pairSets: 3, pairReps: '15',
                    target: 'Chest, triceps, core (finisher)', feel: 'Full body tension. Chest burning. Stop 1 rep before total failure.',
                    form: ['Hands shoulder width', 'Body straight — plank position', 'Chest to floor', 'Full lockout at top', 'Breathe: inhale down, exhale up'],
                    mistakes: ['Sagging hips', 'Half reps', 'Going to absolute failure (save CNS)'],
                    pairTarget: 'Upper traps', pairFeel: 'Shrug STRAIGHT UP. Ears to shoulders.',
                    pairForm: ['Heavy DBs at sides', 'Shrug straight up (not rolling)', 'Hold 2 sec at top', 'Slow 2-sec lower', 'Keep arms straight']
                }
            ]
        },
        {
            id: 'w4', name: 'Workout 4: V-Taper Annihilation',
            focus: 'Lateral delts, arms, final detail work',
            exercises: [
                {
                    set: 'A1', name: 'Upright Cable Rows', sets: 3, repRange: '10-12', pair: 'A2', pairName: 'Incline DB Bicep Curls', pairSets: 3, pairReps: '10-12',
                    target: 'Lateral delts, upper traps', feel: 'Elbows leading up to chin height. Delts on fire.',
                    form: ['Rope or bar on low cable', 'Pull elbows UP, not hands', 'Stop at chin height', 'Lead with elbows always', '2-sec negative'],
                    mistakes: ['Pulling too high (impingement)', 'Hands higher than elbows', 'Too heavy — this is delt work'],
                    pairTarget: 'Biceps long head (peak builder)', pairFeel: 'Deep stretch at bottom due to incline. Peak squeeze at top.',
                    pairForm: ['Bench at 45° incline', 'Let arms hang behind torso', 'Curl to shoulder, supinate', 'Squeeze bicep 1 sec', 'Slow 3-sec negative — feel the stretch']
                },
                {
                    set: 'B1', name: 'DB Lateral Raises', sets: 4, repRange: '15', pair: 'B2', pairName: 'Triceps Rope Pushdowns', pairSets: 3, pairReps: '12-15',
                    target: 'Lateral delts (volume set)', feel: 'Burning, pumping delts. Light weight. 4 sets of this — embrace the burn.',
                    form: ['Same as Workout 2', 'Slight forward lean', 'Lead with elbows', 'Raise to shoulder height', 'This is V-taper money — earn it'],
                    mistakes: ['Ego weight', 'Trap shrugging', 'Momentum swings'],
                    pairTarget: 'Triceps lateral + medial head', pairFeel: 'Squeeze and spread rope at bottom. Locked elbows.',
                    pairForm: ['Elbows pinned to sides', 'Push down and SPREAD rope apart', 'Full lockout, squeeze 1 sec', 'Slow return to 90°', 'Don\'t lean over the cable']
                },
                {
                    set: 'C1', name: 'EZ Bar Bicep Curls', sets: 3, repRange: '10-12', pair: 'C2', pairName: 'Single-Arm Cable Lat Pulldowns', pairSets: 3, pairReps: '12/side',
                    target: 'Biceps (overall mass)', feel: 'Full bicep contraction. Forearms burn on last reps.',
                    form: ['EZ bar, inner grip angle', 'Elbows pinned to ribs', 'Full curl to shoulders', 'Squeeze 1 sec at top', '3-sec negative'],
                    mistakes: ['Swinging body', 'Elbows drifting forward', 'Cutting ROM short'],
                    pairTarget: 'Lats (unilateral, mind-muscle)', pairFeel: 'Full stretch overhead, squeeze lat to hip.',
                    pairForm: ['One arm at a time', 'Full overhead stretch', 'Pull elbow DOWN to hip', 'Squeeze lat 1-2 sec', 'Feel the V-taper being carved']
                }
            ]
        }
    ],
    running: [
        { day: 'Monday', name: 'The Spite Sprints', type: 'Speed/Intervals', detail: '1 min hard / 1 min jog × 6-8 reps', icon: '⚡' },
        { day: 'Tuesday', name: 'The Decompression Protocol', type: 'Easy Run', detail: 'Conversational pace, 30-45 min', icon: '💚' },
        { day: 'Wednesday', name: 'The Mid-Week Engine Builder', type: 'Tempo', detail: '15-20 min comfortably hard', icon: '🔶' },
        { day: 'Thursday', name: 'The Hard Shutdown', type: 'ABSOLUTE REST', detail: 'Zero running. Mandatory system update.', icon: '🛑' },
        { day: 'Friday', name: 'Easy Run', type: 'Standard Jog', detail: '20-30 min', icon: '💚' },
        { day: 'Saturday', name: 'The Shakeout', type: 'Very Easy Jog', detail: '20-30 min', icon: '🟢' },
        { day: 'Sunday', name: 'The Empire Builder', type: 'Long Run', detail: 'Conversational pace, 45-60+ min', icon: '👑' }
    ],
    core: {
        id: 'core', name: 'Spite Core Circuit',
        rule: '12-min continuous circuit, minimal rest, 3-4 rounds on non-lifting days',
        rounds: 4,
        exercises: [
            {
                name: 'Hanging Knee Raises / Leg Raises', reps: '15 reps', note: 'Tip pelvis UP toward belly button',
                target: 'Lower abs, hip flexors', feel: 'Lower belly BURNING. Pelvis curling UP.',
                form: ['Dead hang, shoulders packed', 'Curl pelvis UP toward chest', 'Don\'t just lift knees — TILT pelvis', 'Slow lower — no swinging', 'Exhale hard at top contraction'],
                mistakes: ['Just lifting knees (hip flexor, not abs)', 'Swinging/kipping', 'Dropping legs fast']
            },
            {
                name: 'Cable Woodchoppers', reps: '12 reps/side', note: 'Weighted, or use Russian Twists',
                target: 'Obliques, transverse abs', feel: 'Side-to-side rotational burn. Deep core twist.',
                form: ['Cable at high position', 'Rotate torso, not arms', 'Pull diagonally across body', 'Hips stay square — torso rotates', 'Control the return'],
                mistakes: ['Arms doing the work', 'Hips rotating (isolate torso)', 'Going too fast — control it']
            },
            {
                name: 'Weighted Decline Crunches', reps: '15 reps', note: '10-25 lb plate on chest',
                target: 'Upper abs, rectus abdominis', feel: 'Crunch from ribcage to pelvis. Upper abs on fire.',
                form: ['Plate on chest or behind head', 'Curl ribcage toward pelvis', 'Don\'t sit all the way up', 'Squeeze abs 1 sec at top', 'Slow 2-sec negative'],
                mistakes: ['Using neck to pull up', 'Full sit-up (hip flexors)', 'Plate too heavy — form first']
            },
            {
                name: 'Ab Wheel Rollouts', reps: '10 reps', note: 'Full extension if possible',
                target: 'Entire anterior core, serratus, lats', feel: 'Full body tension. Abs stretched then crushed on the return.',
                form: ['Knees on pad, wheel at chest', 'Roll out slow and controlled', 'Extend as far as you can hold', 'Pull back with abs, not arms', 'Keep lower back from dipping'],
                mistakes: ['Lower back sagging (injury risk)', 'Arms pulling back (use abs)', 'Going too far too soon — build range']
            }
        ]
    }
};

const NUTRITION = {
    deficit: 300,
    proteinPerLb: '1.15-1.2g (GENOME OVERRIDE: elevated from 1.0g due to IL-6/TNF-α/FTO stack)',
    carbTiming: '70% immediately before and after runs',
    clinicMode: 'High protein/fat, low carb during work shifts (fat oxidation mode)',
    notes: [
        'FTO AA: Plate everything. Never eat from containers. High-volume low-cal foods at every meal.',
        'MTNR1B CG: No carbs within 2 hours of sleep.',
        'Dairy is cleared (LCT AA — lactose tolerant). Greek yogurt, whey, cottage cheese viable.',
        'Add omega-3 (2-3g EPA/DHA daily) for inflammatory override.',
        'Curcumin 500mg daily with food.',
        'Tart cherry juice after long runs and hard sessions.',
        'Caffeine OK pre-workout, cutoff 2 PM (ADORA2A CC — sleep sensitive despite fast metabolizer).'
    ]
};

const RECOVERY = {
    sleepMin: '8 hours (GENOME OVERRIDE: elevated from 7.5 hrs due to triple inflammatory stack)',
    magnesium: '200-400mg Magnesium Glycinate, 45 min before bed',
    screensOff: '60 min before bed (non-negotiable)',
    roomTemp: '65°F (18°C), pitch black',
    supplements: [
        'Magnesium Glycinate: 200-400mg, 45 min pre-bed',
        'Vitamin D3: 3000-5000 IU daily (VDR CT override) + K2-MK7',
        'Omega-3 (EPA/DHA): 2-3g daily (inflammatory override)',
        'Curcumin: 500mg daily with food',
        'Tart cherry juice: post long runs'
    ],
    notes: [
        'APOE ε3/ε4: Sleep is a primary neuroprotective factor. Do not compromise.',
        'ADA CC: Normal deep sleep architecture — Mg Glycinate protocol is sufficient.',
        'COMT AA: Higher anxiety tendency. Evening meditation or breathwork strongly recommended.',
        'BDNF CT: Exercise-dependent BDNF upregulation — running IS your antidepressant.'
    ]
};
