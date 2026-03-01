// ===== ADAM'S GENOME DATA (Extracted from 23andMe v5 Full - 631,455 SNPs) =====
const GENOME = {
    primary: {
        rs1815739: {
            gene: 'ACTN3', genotype: 'TT', chromosome: '11', position: '66328095',
            label: 'Muscle Fiber Type',
            interpretation: 'XX homozygous â€” SLOW-TWITCH DOMINANT. Complete alpha-actinin-3 deficiency. Your muscles are endurance-wired, not power-wired.',
            impact: 'high',
            override: 'OVERRIDE ACTIVE: Increase lifting rest to 120-150 sec between supersets. You will NOT recover as fast as mixed/RR types. Compensate with longer intra-set recovery. Your running engine is genetically advantaged â€” leverage this.'
        },
        rs1107946: {
            gene: 'COL1A1', genotype: 'CC', chromosome: '17', position: '48280990',
            label: 'Collagen / Tendon Integrity',
            interpretation: 'CC genotype â€” REDUCED soft tissue injury risk. Normal collagen production.',
            impact: 'low',
            override: 'No mileage ceiling required. Standard protocol holds. Tendons are structurally sound.'
        },
        rs12722: {
            gene: 'COL5A1', genotype: 'CT', chromosome: '9', position: '137734416',
            label: 'Tendon / Ligament Flexibility',
            interpretation: 'CT heterozygous â€” MODERATE tendon laxity risk. Between stiff and flexible extremes.',
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
            interpretation: 'CT heterozygous â€” Moderately reduced Vitamin D receptor efficiency. May need higher D3 intake for bone density and recovery.',
            impact: 'medium',
            override: 'OVERRIDE ACTIVE: Supplement 3000-5000 IU Vitamin D3 daily (with K2-MK7 for absorption). Utah winter = low sun exposure. Your VDR is working at ~70% efficiency. Test 25(OH)D blood levels â€” target 50-70 ng/mL.'
        },
        rs1800795: {
            gene: 'IL-6', genotype: 'CG', chromosome: '7', position: '22766645',
            label: 'Inflammatory Response',
            interpretation: 'CG heterozygous â€” MODERATE inflammatory response. You produce more IL-6 under stress than GG types, but less than CC.',
            impact: 'medium',
            override: 'OVERRIDE ACTIVE: Increase protein floor from 1.0g to 1.15g/lb bodyweight. Add anti-inflammatory foods (turmeric, omega-3s, tart cherry juice post-long-run). Your recovery window is narrower â€” prioritize post-workout nutrition within 30 min.'
        },
        rs9939609: {
            gene: 'FTO', genotype: 'AA', chromosome: '16', position: '53820527',
            label: 'Fat Mass & Obesity Risk',
            interpretation: 'AA homozygous â€” HIGHEST RISK ALLELE. Associated with increased appetite, reduced satiety signaling, and higher baseline BMI. You carry two copies of the risk allele.',
            impact: 'critical',
            override: 'CRITICAL OVERRIDE: Your 300 cal deficit is CORRECT but must be monitored aggressively. Your brain underreports satiety. Meal prep non-negotiable. High-volume low-cal foods (vegetables, lean protein) at every meal. NEVER eat from containers. Plate everything. Protein to 1.2g/lb to maximize satiety. Track calories for the first 4 weeks minimum.'
        },
        rs1801282: {
            gene: 'PPARG', genotype: 'CC', chromosome: '3', position: '12393125',
            label: 'Fat Storage & Insulin Sensitivity',
            interpretation: 'CC (Pro/Pro) â€” Standard fat metabolism. No protective Ala allele. Normal insulin sensitivity, but no enhanced fat oxidation bonus.',
            impact: 'low',
            override: 'Workday carb restriction confirmed as optimal. Your PPARG offers no metabolic shortcut â€” the low-insulin clinic strategy (high protein/fat, low carb during shifts) is the right play. Carb timing around runs stands at 70%.'
        }
    },
    bonus: {
        rs762551: {
            gene: 'CYP1A2', genotype: 'AA', label: 'Caffeine Metabolism',
            interpretation: 'AA â€” FAST caffeine metabolizer. Coffee is your ally. Pre-workout caffeine will boost performance without disrupting sleep if consumed >6hrs before bed.',
            impact: 'positive'
        },
        rs4680: {
            gene: 'COMT', genotype: 'AA', label: 'Stress / Dopamine (Warrior vs Worrier)',
            interpretation: 'AA (Met/Met) â€” "WORRIER" genotype. Slow dopamine breakdown = higher baseline dopamine but MORE anxiety under stress. Higher pain sensitivity. Better cognitive performance at baseline but degrades under pressure.',
            impact: 'critical'
        },
        rs53576: {
            gene: 'OXTR', genotype: 'AG', label: 'Oxytocin Receptor / Social Bonding',
            interpretation: 'AG heterozygous â€” Moderate empathy and social bonding capacity. Neither hyper-attached nor detached.',
            impact: 'medium'
        },
        rs6265: {
            gene: 'BDNF', genotype: 'CT', label: 'Brain Plasticity / Depression Risk',
            interpretation: 'CT (Val/Met) â€” ONE copy of Met allele. Reduced BDNF secretion. Higher vulnerability to depression and anxiety. Exercise is CRITICAL for BDNF upregulation â€” running is literally your antidepressant.',
            impact: 'critical'
        },
        rs429358: {
            gene: 'APOE', genotype: 'CT', label: 'APOE Îµ4 Status',
            interpretation: 'CT â€” You carry ONE copy of Îµ4 allele (APOE Îµ3/Îµ4). Elevated cardiovascular and Alzheimer\'s risk. Exercise, omega-3s, and sleep are protective factors.',
            impact: 'critical'
        },
        rs7412: {
            gene: 'APOE', genotype: 'CC', label: 'APOE Îµ2 Status',
            interpretation: 'CC â€” No protective Îµ2 allele. Combined with rs429358=CT, your APOE status is Îµ3/Îµ4.',
            impact: 'medium'
        },
        rs1801133: {
            gene: 'MTHFR C677T', genotype: 'GG', label: 'Folate Metabolism',
            interpretation: 'GG (wildtype) â€” Normal MTHFR function. Good methylation. No supplementation override needed.',
            impact: 'low'
        },
        rs1801131: {
            gene: 'MTHFR A1298C', genotype: 'TT', label: 'Folate Metabolism',
            interpretation: 'TT (wildtype) â€” Normal. Both MTHFR variants clear â€” your methylation is solid.',
            impact: 'low'
        },
        rs1800629: {
            gene: 'TNF-alpha', genotype: 'AG', label: 'Inflammation / TNF-Î±',
            interpretation: 'AG heterozygous â€” ONE copy of the high-expression allele. Elevated TNF-Î± under stress/injury. Slower recovery from hard sessions when combined with IL-6=CG.',
            impact: 'high'
        },
        rs1143634: {
            gene: 'IL-1Î²', genotype: 'AG', label: 'Inflammation / IL-1Î²',
            interpretation: 'AG heterozygous â€” Moderately increased IL-1Î² expression. Triple-stacked inflammatory markers (IL-6, TNF-Î±, IL-1Î² all heterozygous carriers).',
            impact: 'high'
        },
        rs4988235: {
            gene: 'LCT', genotype: 'AA', label: 'Lactose Tolerance',
            interpretation: 'AA â€” Lactose TOLERANT (European persistence allele). Dairy is fine as a protein source.',
            impact: 'positive'
        },
        rs1799945: {
            gene: 'HFE', genotype: 'CC', label: 'Iron Overload Risk',
            interpretation: 'CC (wildtype) â€” No hereditary hemochromatosis risk. Normal iron metabolism.',
            impact: 'low'
        },
        rs8192678: {
            gene: 'PPARGC1A', genotype: 'TT', label: 'Aerobic Capacity (PGC-1Î±)',
            interpretation: 'TT â€” Potential for REDUCED mitochondrial biogenesis. Your endurance ceiling may be lower genetically. Running volume and consistency are your hack to overcome this.',
            impact: 'medium'
        },
        rs7799039: {
            gene: 'LEP', genotype: 'AG', label: 'Leptin / Hunger Signaling',
            interpretation: 'AG â€” Moderate leptin levels. Combined with FTO=AA, your appetite regulation is your weakest link. Manual discipline required.',
            impact: 'high'
        },
        rs1042713: {
            gene: 'ADRB2', genotype: 'AG', label: 'Fat Mobilization',
            interpretation: 'AG heterozygous â€” Moderate beta-2 receptor function. Fat mobilization during exercise is average.',
            impact: 'low'
        },
        rs10830963: {
            gene: 'MTNR1B', genotype: 'CG', label: 'Melatonin / Sleep & Glucose',
            interpretation: 'CG heterozygous â€” ONE risk allele. Eating late at night impairs your glucose metabolism more than average. Do not eat carbs within 2 hours of sleep.',
            impact: 'medium'
        },
        rs5751876: {
            gene: 'ADORA2A', genotype: 'CC', label: 'Caffeine Sleep Sensitivity',
            interpretation: 'CC â€” SENSITIVE to caffeine\'s sleep-disruption effects despite fast metabolism. Cut caffeine by 2 PM.',
            impact: 'medium'
        },
        rs73598374: {
            gene: 'ADA', genotype: 'CC', label: 'Deep Sleep Quality',
            interpretation: 'CC (wildtype) â€” Normal deep sleep architecture. No SWS deficit. Magnesium Glycinate + screen blackout protocol is sufficient.',
            impact: 'low'
        },
        rs4994: {
            gene: 'ADRB3', genotype: 'AA', label: 'Metabolic Rate / Thermogenesis',
            interpretation: 'AA (wildtype) â€” Normal metabolic rate. No thermogenesis impairment.',
            impact: 'low'
        },
        rs1800497: {
            gene: 'ANKK1/DRD2', genotype: 'GG', label: 'Dopamine Reward System',
            interpretation: 'GG (wildtype) â€” Normal dopamine receptor density. No increased addiction/reward-seeking risk from this marker.',
            impact: 'low'
        },
        rs4343: {
            gene: 'ACE', genotype: 'AA', label: 'Endurance vs Power',
            interpretation: 'AA â€” Associated with ACE II genotype (insertion). ENDURANCE OPTIMIZED. This confirms ACTN3=TT: you are built for distance, not power.',
            impact: 'positive'
        },
        rs1695: {
            gene: 'GSTP1', genotype: 'AG', label: 'Detoxification',
            interpretation: 'AG heterozygous â€” Moderate phase II detox enzyme activity. Eat cruciferous vegetables (broccoli, cauliflower) regularly.',
            impact: 'low'
        },
        rs1800169: {
            gene: 'BDNF-AS', genotype: 'GG', label: 'BDNF Antisense',
            interpretation: 'GG â€” Normal BDNF antisense regulation.',
            impact: 'low'
        },
        rs2241766: {
            gene: 'ADIPOQ', genotype: 'TT', label: 'Adiponectin / Insulin Sensitivity',
            interpretation: 'TT â€” Normal adiponectin levels. Standard insulin sensitivity support.',
            impact: 'low'
        }
    }
};

// ===== PROTOCOL OVERRIDES BASED ON GENOME =====
const OVERRIDES = [
    {
        severity: 'critical',
        title: 'ðŸš¨ FTO AA + LEP AG: Appetite Regulation is Your Genetic Weak Point',
        detail: 'You carry the highest-risk FTO allele (AA) AND a moderate leptin variant. Your brain literally under-reports satiety. MEAL PREP is non-negotiable. Plate everything. Track calories for 4+ weeks. Protein locked at 1.2g/lb for maximum satiety effect.'
    },
    {
        severity: 'critical',
        title: 'ðŸ§  COMT AA + BDNF CT: Mental Health â€” Running is Your Medicine',
        detail: 'Warrior/Worrier COMT (slow dopamine breakdown = higher anxiety under stress) combined with reduced BDNF. Running directly upregulates BDNF and clears excess dopamine. DO NOT SKIP RUNS. This is not just cardio â€” it is psychiatric medication. Your DID management is genetically supported by your running engine.'
    },
    {
        severity: 'high',
        title: 'ðŸ”´ Triple Inflammatory Stack: IL-6 CG + TNF-Î± AG + IL-1Î² AG',
        detail: 'Three heterozygous inflammatory markers. You are a MODERATE-TO-SLOW RECOVERER. Protein override to 1.15-1.2g/lb. Add omega-3 (2-3g EPA/DHA), curcumin (500mg), and tart cherry juice post-long runs. Sleep minimum UPGRADED to 8 hours.'
    },
    {
        severity: 'high',
        title: 'ðŸ’ª ACTN3 TT + ACE II: You Are an Endurance Machine, Not a Power Lifter',
        detail: 'Complete alpha-actinin-3 deficiency + endurance-optimized ACE. Your lifting rest periods are INCREASED to 120-150 sec between supersets. You will fatigue faster on heavy compound lifts but recover faster between runs. The V-Taper hypertrophy work (higher rep ranges, RPE 8) is the correct approach.'
    },
    {
        severity: 'medium',
        title: 'ðŸ¦´ COL5A1 CT + VDR CT: Tendon Caution + Vitamin D Deficit Risk',
        detail: 'Moderate tendon laxity + reduced Vitamin D receptor efficiency. Supplement 3000-5000 IU D3 + K2-MK7 daily. Add 5-10 min dynamic mobility before hard runs. Hard mileage ceiling: 50 mi/week until 12-week adaptation.'
    },
    {
        severity: 'medium',
        title: 'âš ï¸ APOE Îµ3/Îµ4: Cardiovascular & Cognitive Self-Defense',
        detail: 'One copy of Îµ4. Elevated lifetime risk for CVD and Alzheimer\'s. Exercise, omega-3s, sleep, and stress management are YOUR protective factors. This protocol IS your defense. Do not deviate from sleep protocol.'
    },
    {
        severity: 'info',
        title: 'â˜• CYP1A2 AA + ADORA2A CC: Fast Metabolizer, But Sleep-Sensitive',
        detail: 'You metabolize caffeine fast (performance boost works), but your adenosine receptors are sensitive. Caffeine cutoff: 2 PM sharp. Pre-run coffee is effective if running before noon.'
    },
    {
        severity: 'info',
        title: 'ðŸ¥› LCT AA + MTHFR GG/TT: Dairy Cleared, Methylation Clean',
        detail: 'Lactose tolerant. Both MTHFR variants are wildtype. Greek yogurt, whey protein, cottage cheese all viable. No folate supplementation override needed.'
    },
    {
        severity: 'info',
        title: 'ðŸŒ™ MTNR1B CG: Late-Night Carbs Hit You Harder',
        detail: 'Your melatonin receptor variant impairs glucose handling at night. No carbs within 2 hours of sleep. Evening meals must be protein/fat focused.'
    }
];

// ===== SCHEDULE DATA: Full Week Mon Mar 2 â€“ Sun Mar 8, 2026 =====
const SCHEDULE = {
    '2026-03-02': {
        dayLabel: 'Monday, Mar 2',
        tagline: 'THE SPITE SPRINTS',
        runType: 'Speed/Intervals â€” 1 min hard / 1 min jog Ã— 6-8',
        liftSlot: 'Workout 3: Density & Detail',
        blocks: [
            { time: '6:00 AM', label: 'Wake', icon: 'ðŸ””', type: 'wake', detail: 'Target 8 hrs. Sprint day â€” CNS needs full charge.' },
            { time: '6:00â€“6:10', label: 'Red Light Therapy', icon: 'ðŸ”´', type: 'biohack', detail: '10 min face + chest. Collagen stimulation, mitochondrial boost. Do before sun exposure.' },
            { time: '6:10â€“6:25', label: 'Wim Hof Breathing', icon: 'ðŸŒ¬ï¸', type: 'biohack', detail: '3 rounds: 30 power breaths â†’ exhale hold (1-2 min) â†’ recovery breath (15 sec). Primes nervous system for sprints.' },
            { time: '6:25â€“6:40', label: 'AM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Gentle cleanser â†’ Vitamin C serum (antioxidant, GSTP1 AG support) â†’ Moisturizer + SPF 30+ (VDR CT = protect from UV damage).' },
            { time: '6:40â€“7:00', label: 'Pre-Run Fuel', icon: 'â˜•', type: 'nutrition', detail: 'Coffee + banana + nut butter. 35% of daily carbs. Sprint fuel.' },
            { time: '7:00â€“7:35', label: 'THE SPITE SPRINTS', icon: 'âš¡', type: 'running', detail: '5 min warm-up â†’ 1 min hard / 1 min jog Ã— 6-8 reps â†’ 5 min cooldown. Max effort intervals. BDNF spike.' },
            { time: '7:40â€“8:10', label: 'Post-Run Meal', icon: 'ðŸ³', type: 'nutrition', detail: '40g+ protein, carb replenish. Eggs, Greek yogurt, fruit. Omega-3 source. Tart cherry juice.' },
            { time: '8:15â€“8:30', label: 'Cold Shower', icon: 'ðŸ§Š', type: 'biohack', detail: 'Last 2-3 min COLD. Vasoconstriction â†’ recovery boost. Builds cold tolerance for Wim Hof progression.' },
            { time: '8:30â€“9:00', label: 'Meditation + Marco Walk', icon: 'ðŸ§˜', type: 'recovery', detail: '10-15 min sit. Then Marco morning walk. Non-negotiable CNS recovery.' },
            { time: '9:00â€“11:30', label: 'Free Block', icon: 'ðŸŽ¯', type: 'free', detail: 'Meal prep, journaling, personal projects. Protect this time.' },
            { time: '11:45 AM', label: 'Work Starts', icon: 'ðŸ¥', type: 'work', detail: 'Fat oxidation mode.' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: 'ðŸ±', type: 'nutrition', detail: 'High protein, low carb.' },
            { time: '5:15 PM', label: 'Work Ends', icon: 'ðŸ”š', type: 'work', detail: '' },
            { time: '5:30â€“6:20', label: 'Workout 3: Density & Detail', icon: 'ðŸ‹ï¸', type: 'lifting', detail: 'A1: Flat DB Bench â†” A2: Seated Cable Rows\\nB1: Low-to-High Cable Cross â†” B2: Single-Arm DB Rows\\nC1: Push-Ups (failure-1) â†” C2: DB Shrugs\\nRest: 120-150 sec. RPE 8.' },
            { time: '6:20â€“6:40', label: 'Wet Sauna', icon: 'ðŸ§–', type: 'biohack', detail: '15-20 min post-lift. 150-180Â°F. Promotes heat shock proteins, growth hormone release, deep recovery. Hydrate aggressively.' },
            { time: '6:45â€“7:15', label: 'Post-Lift/Sauna Meal', icon: 'ðŸ—', type: 'nutrition', detail: '40-50g protein + carbs. Recovery window. Rehydrate with electrolytes.' },
            { time: '7:15â€“8:30', label: 'Marco Walk + Kris Time', icon: 'ðŸ•', type: 'free', detail: 'Active recovery. Relationship time.' },
            { time: '8:30â€“8:45', label: 'PM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Oil cleanser â†’ Gentle cleanser â†’ Niacinamide serum (barrier repair, anti-inflammatory for IL-6/TNF-Î± skin) â†’ Heavy moisturizer.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: 'ðŸ“µ', type: 'recovery', detail: '' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: 'ðŸ’Š', type: 'recovery', detail: '200-400mg.' },
            { time: '10:30 PM', label: 'Lights Out', icon: 'ðŸ˜´', type: 'sleep', detail: '65Â°F, pitch black. Target 8 hrs.' }
        ]
    },
    '2026-03-03': {
        dayLabel: 'Tuesday, Mar 3',
        tagline: 'THE DECOMPRESSION PROTOCOL',
        runType: 'Easy Run â€” Conversational, 30-45 min',
        liftSlot: 'None â€” Active Recovery',
        blocks: [
            { time: '6:30 AM', label: 'Wake', icon: 'ðŸ””', type: 'wake', detail: '' },
            { time: '6:30â€“6:40', label: 'Red Light Therapy', icon: 'ðŸ”´', type: 'biohack', detail: '10 min face + chest.' },
            { time: '6:40â€“6:55', label: 'AM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Gentle cleanser â†’ Vitamin C serum â†’ Moisturizer + SPF.' },
            { time: '6:55â€“7:10', label: 'Pre-Run Fuel', icon: 'â˜•', type: 'nutrition', detail: 'Coffee + light carb. Easy day fuel.' },
            { time: '7:10â€“7:50', label: 'Decompression Run', icon: 'ðŸ’š', type: 'running', detail: '30-45 min conversational pace. This is CNS decompression. Slow enough to talk. BDNF maintenance.' },
            { time: '7:55â€“8:20', label: 'Post-Run Meal', icon: 'ðŸ³', type: 'nutrition', detail: '40g+ protein + moderate carbs.' },
            { time: '8:20â€“8:35', label: 'Cold Shower', icon: 'ðŸ§Š', type: 'biohack', detail: 'Last 2-3 min cold. Post-easy-run recovery.' },
            { time: '8:35â€“9:00', label: 'Hair Wash Day', icon: 'ðŸ’‡', type: 'haircare', detail: 'Sulfate-free shampoo â†’ Conditioner (2-3 min). Scalp massage for circulation. Pat dry, no heat. Inflammatory markers (IL-6/TNF-Î±) = gentle products only.' },
            { time: '9:00â€“9:30', label: 'Spite Core Circuit', icon: 'ðŸ”¥', type: 'core', detail: '3-4 rounds, 12 min continuous. Hanging Knee Raises, Woodchoppers, Decline Crunches, Ab Wheel.' },
            { time: '9:30â€“11:30', label: 'Free Block + Meditation', icon: 'ðŸ§˜', type: 'free', detail: 'Meditation 10-15 min. Marco care. Decompress.' },
            { time: '11:45 AM', label: 'Work Starts', icon: 'ðŸ¥', type: 'work', detail: '' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: 'ðŸ±', type: 'nutrition', detail: 'High protein, low carb.' },
            { time: '6:15 PM', label: 'Work Ends', icon: 'ðŸ”š', type: 'work', detail: '' },
            { time: '6:30â€“7:30', label: 'Marco Walk + Kris Time', icon: 'ðŸ•', type: 'free', detail: '' },
            { time: '7:30â€“8:00', label: 'Dinner', icon: 'ðŸ½ï¸', type: 'nutrition', detail: 'Protein-forward. No carbs after 8 PM (MTNR1B).' },
            { time: '8:15â€“8:30', label: 'PM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Oil cleanser â†’ Gentle cleanser â†’ Retinol (Tue/Thu only, alternate with niacinamide) â†’ Heavy moisturizer.' },
            { time: '8:30 PM', label: 'Screens OFF', icon: 'ðŸ“µ', type: 'recovery', detail: '' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: 'ðŸ’Š', type: 'recovery', detail: '200-400mg.' },
            { time: '10:00 PM', label: 'Lights Out', icon: 'ðŸ˜´', type: 'sleep', detail: 'Target 8 hrs.' }
        ]
    },
    '2026-03-04': {
        dayLabel: 'Wednesday, Mar 4',
        tagline: 'THE MID-WEEK ENGINE BUILDER',
        runType: 'Tempo â€” 15-20 min comfortably hard',
        liftSlot: 'Workout 4: V-Taper Annihilation',
        blocks: [
            { time: '6:00 AM', label: 'Wake', icon: 'ðŸ””', type: 'wake', detail: 'Tempo + lifting day. Full fuel.' },
            { time: '6:00â€“6:10', label: 'Red Light Therapy', icon: 'ðŸ”´', type: 'biohack', detail: '10 min face + chest.' },
            { time: '6:10â€“6:25', label: 'Wim Hof Breathing', icon: 'ðŸŒ¬ï¸', type: 'biohack', detail: '3 rounds power breathing. Mental clarity for tempo effort.' },
            { time: '6:25â€“6:40', label: 'AM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Gentle cleanser â†’ Vitamin C serum â†’ Moisturizer + SPF.' },
            { time: '6:40â€“7:00', label: 'Pre-Run Fuel', icon: 'â˜•', type: 'nutrition', detail: 'Coffee + oatmeal. Tempo day = more carbs upfront.' },
            { time: '7:00â€“7:30', label: 'Tempo Run', icon: 'ðŸ”¶', type: 'running', detail: '5 min warm-up â†’ 15-20 min comfortably hard â†’ 5 min cooldown. Should feel like controlled effort â€” not sprinting, not easy.' },
            { time: '7:35â€“8:00', label: 'Post-Run Meal', icon: 'ðŸ³', type: 'nutrition', detail: '40g+ protein + carbs.' },
            { time: '8:00â€“8:15', label: 'Cold Shower', icon: 'ðŸ§Š', type: 'biohack', detail: 'Last 2-3 min cold.' },
            { time: '8:15â€“8:45', label: 'Meditation + Marco Walk', icon: 'ðŸ§˜', type: 'recovery', detail: '' },
            { time: '8:45 AM', label: 'Work Starts', icon: 'ðŸ¥', type: 'work', detail: '' },
            { time: '12:00 PM', label: 'Lunch', icon: 'ðŸ±', type: 'nutrition', detail: 'High protein, low carb.' },
            { time: '3:30 PM', label: 'Mid-Shift Snack', icon: 'ðŸ¥œ', type: 'nutrition', detail: '' },
            { time: '5:15 PM', label: 'Work Ends', icon: 'ðŸ”š', type: 'work', detail: '' },
            { time: '5:30â€“6:20', label: 'Workout 4: V-Taper Annihilation', icon: 'ðŸ‹ï¸', type: 'lifting', detail: 'A1: Upright Cable Rows â†” A2: Incline DB Curls\\nB1: DB Lateral Raises â†” B2: Triceps Rope Pushdowns\\nC1: EZ Bar Curls â†” C2: Single-Arm Cable Lat Pulldowns\\nRest: 120-150 sec. RPE 8.' },
            { time: '6:20â€“6:40', label: 'Wet Sauna', icon: 'ðŸ§–', type: 'biohack', detail: '15-20 min post-lift. Heat shock proteins + GH release.' },
            { time: '6:45â€“7:15', label: 'Post-Lift/Sauna Meal', icon: 'ðŸ—', type: 'nutrition', detail: '40-50g protein + carbs. Rehydrate.' },
            { time: '7:15â€“8:30', label: 'Marco Walk + Kris Time', icon: 'ðŸ•', type: 'free', detail: '' },
            { time: '8:30â€“8:45', label: 'PM Skincare + Weekly Exfoliant', icon: 'ðŸ§´', type: 'skincare', detail: 'Oil cleanser â†’ Gentle cleanser â†’ Chemical exfoliant (AHA/BHA â€” 1x/week, Wednesday) â†’ Heavy moisturizer. Skip retinol tonight.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: 'ðŸ“µ', type: 'recovery', detail: '' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: 'ðŸ’Š', type: 'recovery', detail: '' },
            { time: '10:30 PM', label: 'Lights Out', icon: 'ðŸ˜´', type: 'sleep', detail: 'Target 8 hrs.' }
        ]
    },
    '2026-03-05': {
        dayLabel: 'Thursday, Mar 5',
        tagline: 'THE HARD SHUTDOWN',
        runType: 'REST â€” Zero Running',
        liftSlot: 'Workout 1: Width & The Shelf',
        blocks: [
            { time: '7:00 AM', label: 'Wake', icon: 'ðŸ””', type: 'wake', detail: 'REST DAY for running. Lift only.' },
            { time: '7:00â€“7:10', label: 'Red Light Therapy', icon: 'ðŸ”´', type: 'biohack', detail: '10 min face + chest.' },
            { time: '7:10â€“7:25', label: 'Wim Hof Breathing', icon: 'ðŸŒ¬ï¸', type: 'biohack', detail: '3 rounds. Deep CNS reset on rest day.' },
            { time: '7:25â€“7:40', label: 'AM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Gentle cleanser â†’ Vitamin C serum â†’ Moisturizer + SPF.' },
            { time: '7:40â€“8:00', label: 'Morning Fuel', icon: 'â˜•', type: 'nutrition', detail: 'High protein breakfast. ZERO carbs â€” no running to burn them.' },
            { time: '8:00â€“8:30', label: 'Meditation + Marco Walk', icon: 'ðŸ§˜', type: 'recovery', detail: '10-15 min sit. Marco morning walk.' },
            { time: '8:45 AM', label: 'Work Starts', icon: 'ðŸ¥', type: 'work', detail: '' },
            { time: '12:00 PM', label: 'Lunch', icon: 'ðŸ±', type: 'nutrition', detail: 'High protein, fat-moderate, LOW carb.' },
            { time: '3:30 PM', label: 'Mid-Shift Snack', icon: 'ðŸ¥œ', type: 'nutrition', detail: '' },
            { time: '5:15 PM', label: 'Work Ends', icon: 'ðŸ”š', type: 'work', detail: '' },
            { time: '5:30â€“6:20', label: 'Workout 1: Width & Shelf', icon: 'ðŸ‹ï¸', type: 'lifting', detail: 'A1: Incline DB Press â†” A2: Wide-Grip Lat Pulldowns\\nB1: Flat Machine Chest Press â†” B2: Chest-Supported DB Rows\\nC1: Cable Lateral Raises â†” C2: Straight-Arm Cable Pulldowns\\nRest: 120-150 sec. RPE 8.' },
            { time: '6:20â€“6:40', label: 'Wet Sauna', icon: 'ðŸ§–', type: 'biohack', detail: '15-20 min post-lift. Third sauna session this week.' },
            { time: '6:45â€“7:00', label: 'Post-Lift/Sauna Meal', icon: 'ðŸ—', type: 'nutrition', detail: '40-50g protein + moderate carbs. Rehydrate.' },
            { time: '7:00â€“8:30', label: 'Marco Walk + Kris Time', icon: 'ðŸ•', type: 'free', detail: '' },
            { time: '8:30â€“8:45', label: 'PM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Oil cleanser â†’ Gentle cleanser â†’ Retinol (Thu night) â†’ Heavy moisturizer.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: 'ðŸ“µ', type: 'recovery', detail: '' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: 'ðŸ’Š', type: 'recovery', detail: '' },
            { time: '10:30 PM', label: 'Lights Out', icon: 'ðŸ˜´', type: 'sleep', detail: '65Â°F, pitch black. Target 8 hrs.' }
        ]
    },
    '2026-03-06': {
        dayLabel: 'Friday, Mar 6',
        tagline: 'EASY RUN + RECOVERY',
        runType: 'Easy Run (20-30 min)',
        liftSlot: 'Workout 2: Caps & Pipes (conditional)',
        blocks: [
            { time: '6:30 AM', label: 'Wake', icon: 'ðŸ””', type: 'wake', detail: '' },
            { time: '6:30â€“6:40', label: 'Red Light Therapy', icon: 'ðŸ”´', type: 'biohack', detail: '10 min.' },
            { time: '6:40â€“6:55', label: 'AM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Gentle cleanser â†’ Vitamin C â†’ Moisturizer + SPF.' },
            { time: '6:55â€“7:10', label: 'Pre-Run Fuel', icon: 'â˜•', type: 'nutrition', detail: 'Coffee + banana. Light fuel.' },
            { time: '7:10â€“7:40', label: 'Easy Run', icon: 'ðŸ’š', type: 'running', detail: '20-30 min conversational pace. BDNF maintenance.' },
            { time: '7:45â€“8:10', label: 'Post-Run Meal', icon: 'ðŸ³', type: 'nutrition', detail: '40g+ protein + carbs.' },
            { time: '8:10â€“8:25', label: 'Cold Shower', icon: 'ðŸ§Š', type: 'biohack', detail: 'Last 2-3 min cold.' },
            { time: '8:25â€“8:50', label: 'Hair Wash Day + Scalp Treatment', icon: 'ðŸ’‡', type: 'haircare', detail: 'Sulfate-free shampoo â†’ Deep conditioner (5 min) â†’ Scalp serum. Second wash of the week.' },
            { time: '8:50â€“9:30', label: 'Spite Core Circuit', icon: 'ðŸ”¥', type: 'core', detail: '3-4 rounds. Hanging Knee Raises, Woodchoppers, Decline Crunches, Ab Wheel.' },
            { time: '9:30â€“11:30', label: 'Free Block + Meditation', icon: 'ðŸ§˜', type: 'free', detail: '' },
            { time: '12:15 PM', label: 'Work Starts', icon: 'ðŸ¥', type: 'work', detail: 'Late shift.' },
            { time: '3:30 PM', label: 'Mid-Shift Meal', icon: 'ðŸ±', type: 'nutrition', detail: '' },
            { time: '8:45 PM', label: 'Work Ends', icon: 'ðŸ”š', type: 'work', detail: '' },
            { time: '9:00â€“9:30', label: 'Late Dinner', icon: 'ðŸ½ï¸', type: 'nutrition', detail: 'Protein only, ZERO carbs (MTNR1B override).' },
            { time: '9:30â€“9:45', label: 'PM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Oil cleanser â†’ Gentle cleanser â†’ Niacinamide â†’ Heavy moisturizer.' },
            { time: '9:45 PM', label: 'Screens OFF', icon: 'ðŸ“µ', type: 'recovery', detail: '' },
            { time: '10:15 PM', label: 'Magnesium Glycinate', icon: 'ðŸ’Š', type: 'recovery', detail: '' },
            { time: '11:00 PM', label: 'Lights Out', icon: 'ðŸ˜´', type: 'sleep', detail: 'Target 8 hrs. Workout 2 deferred to Sat AM if late shift (CNS protection).' }
        ]
    },
    '2026-03-07': {
        dayLabel: 'Saturday, Mar 7',
        tagline: 'THE SHAKEOUT + FACE MASK DAY',
        runType: 'Very Easy Jog (20-30 min)',
        liftSlot: 'Workout 2: Caps & Pipes (deferred from Fri)',
        blocks: [
            { time: '7:00 AM', label: 'Wake', icon: 'ðŸ””', type: 'wake', detail: '' },
            { time: '7:00â€“7:10', label: 'Red Light Therapy', icon: 'ðŸ”´', type: 'biohack', detail: '10 min.' },
            { time: '7:10â€“7:25', label: 'AM Skincare + Weekly Face Mask', icon: 'ðŸ§´', type: 'skincare', detail: 'Gentle cleanser â†’ Hydrating/calming face mask (15 min, centella or aloe â€” COMT AA stress-skin support) â†’ Vitamin C â†’ Moisturizer + SPF.' },
            { time: '7:25â€“7:40', label: 'Wim Hof Breathing', icon: 'ðŸŒ¬ï¸', type: 'biohack', detail: '3 rounds. Weekend deep reset.' },
            { time: '7:40â€“7:55', label: 'Pre-Run Fuel', icon: 'â˜•', type: 'nutrition', detail: 'Coffee + banana.' },
            { time: '7:55â€“8:25', label: 'The Shakeout', icon: 'ðŸŸ¢', type: 'running', detail: '20-30 min very easy jog. If legs = cement, cut to 20 min.' },
            { time: '8:25â€“8:40', label: 'Post-Run Fuel', icon: 'ðŸ³', type: 'nutrition', detail: 'Quick protein + carbs. Prep for lifting.' },
            { time: '8:40â€“9:30', label: 'Workout 2: Caps & Pipes', icon: 'ðŸ‹ï¸', type: 'lifting', detail: 'A1: Seated DB Shoulder Press â†” A2: Neutral-Grip Pull-Ups\\nB1: DB Lateral Raises â†” B2: DB Hammer Curls\\nC1: Overhead Triceps Rope Extensions â†” C2: Face Pulls\\nRest: 120-150 sec. RPE 8.' },
            { time: '9:30â€“9:45', label: 'Post-Lift Meal', icon: 'ðŸ—', type: 'nutrition', detail: '40-50g protein + carbs.' },
            { time: '9:45 AM', label: 'Work Starts', icon: 'ðŸ¥', type: 'work', detail: '' },
            { time: '12:30 PM', label: 'Mid-Shift Meal', icon: 'ðŸ±', type: 'nutrition', detail: '' },
            { time: '6:15 PM', label: 'Work Ends', icon: 'ðŸ”š', type: 'work', detail: '' },
            { time: '6:30â€“7:30', label: 'Marco Walk + Kris Time', icon: 'ðŸ•', type: 'free', detail: '' },
            { time: '7:30â€“8:00', label: 'Dinner', icon: 'ðŸ½ï¸', type: 'nutrition', detail: 'Protein-forward + moderate carbs (pre-loading for Sunday Empire Builder).' },
            { time: '8:00â€“8:15', label: 'PM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Oil cleanser â†’ Gentle cleanser â†’ Niacinamide â†’ Heavy night cream.' },
            { time: '8:30 PM', label: 'Screens OFF', icon: 'ðŸ“µ', type: 'recovery', detail: 'Early cutoff â€” big run tomorrow.' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: 'ðŸ’Š', type: 'recovery', detail: '' },
            { time: '10:00 PM', label: 'Lights Out', icon: 'ðŸ˜´', type: 'sleep', detail: 'Target 8 hrs. Wake ~5:45 AM for Empire Builder.' }
        ]
    },
    '2026-03-08': {
        dayLabel: 'Sunday, Mar 8',
        tagline: 'THE EMPIRE BUILDER + FULL RECOVERY',
        runType: 'Long Run (45-60+ min, conversational)',
        liftSlot: 'None â€” Core Circuit + Recovery',
        blocks: [
            { time: '5:45 AM', label: 'Wake', icon: 'ðŸ””', type: 'wake', detail: 'Early wake for long run.' },
            { time: '5:45â€“5:55', label: 'Red Light Therapy', icon: 'ðŸ”´', type: 'biohack', detail: '10 min. Pre-run mitochondrial prime.' },
            { time: '5:55â€“6:15', label: 'Pre-Run Carb Load', icon: 'â˜•', type: 'nutrition', detail: 'FRONT-LOAD CARBS: oatmeal, banana, nut butter, coffee. 35-40% of daily carbs HERE.' },
            { time: '6:15â€“6:30', label: 'AM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Quick routine: cleanser â†’ SPF (will sweat, reapply if outdoors). Vitamin C after run.' },
            { time: '6:30â€“7:40', label: 'THE EMPIRE BUILDER', icon: 'ðŸ‘‘', type: 'running', detail: '45-60+ min, conversational pace. This is your church. BDNF peak. Build the engine.' },
            { time: '7:45â€“8:30', label: 'Spite Core Circuit', icon: 'ðŸ”¥', type: 'core', detail: '3-4 rounds. Full circuit.' },
            { time: '8:30â€“9:00', label: 'Post-Run/Core Recovery Meal', icon: 'ðŸ—', type: 'nutrition', detail: 'BIG meal: 40-50g protein + 35% daily carbs. Tart cherry juice. Omega-3.' },
            { time: '9:00â€“9:20', label: 'Cold Shower', icon: 'ðŸ§Š', type: 'biohack', detail: '3 min cold at the end. Post-long-run inflammation reset.' },
            { time: '9:20â€“9:50', label: 'Dynamic Mobility', icon: 'ðŸ§˜', type: 'recovery', detail: '15 min foam roll + stretching (COL5A1 override). Hip openers, IT band.' },
            { time: '9:50â€“10:05', label: 'Hair Wash + Scalp Care', icon: 'ðŸ’‡', type: 'haircare', detail: 'Third wash of the week. Gentle shampoo + deep conditioner.' },
            { time: '10:05â€“11:15', label: 'Marco + Kris Time', icon: 'ðŸ•', type: 'free', detail: 'Walk Marco. Meal prep.' },
            { time: '11:45 AM', label: 'Work Starts', icon: 'ðŸ¥', type: 'work', detail: '' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: 'ðŸ±', type: 'nutrition', detail: 'High protein, minimal carbs.' },
            { time: '6:15 PM', label: 'Work Ends', icon: 'ðŸ”š', type: 'work', detail: '' },
            { time: '6:30â€“7:15', label: 'Hot Tub Recovery', icon: 'â™¨ï¸', type: 'biohack', detail: '15-20 min soak. Sunday-only treat. Muscle recovery, joint relief, parasympathetic activation. Not a sauna â€” lower temp, longer soak.' },
            { time: '7:15â€“8:00', label: 'Marco + Kris Evening', icon: 'ðŸ•', type: 'free', detail: '' },
            { time: '8:00â€“8:30', label: 'Dinner', icon: 'ðŸ½ï¸', type: 'nutrition', detail: 'Protein-forward. No carbs after 8:30 PM (MTNR1B).' },
            { time: '8:30â€“8:45', label: 'PM Skincare', icon: 'ðŸ§´', type: 'skincare', detail: 'Oil cleanser â†’ Gentle cleanser â†’ Niacinamide â†’ Heavy night cream. Post-hot-tub skin needs extra moisture.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: 'ðŸ“µ', type: 'recovery', detail: '' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: 'ðŸ’Š', type: 'recovery', detail: '' },
            { time: '10:00 PM', label: 'Lights Out', icon: 'ðŸ˜´', type: 'sleep', detail: 'Target 8 hrs. Prep for Monday Spite Sprints.' }
        ]
    }
};

// ===== GENOME-DRIVEN SKINCARE PROTOCOL =====
const SKINCARE = {
    genomeBasis: 'GSTP1 AG (moderate detox), IL-6 CG + TNF-Î± AG (inflammatory skin risk), VDR CT (D-deficiency dry skin), COMT AA (stress-reactive skin)',
    am: {
        title: 'AM Routine (Daily)',
        steps: [
            { step: 1, name: 'Gentle Cleanser', detail: 'Hydrating, non-foaming. CeraVe Hydrating or La Roche-Posay Toleriane.' },
            { step: 2, name: 'Vitamin C Serum (15-20%)', detail: 'Antioxidant defense. Supports GSTP1 AG detox pathway. Apply to damp skin.' },
            { step: 3, name: 'Moisturizer', detail: 'Ceramide-based. Repairs barrier (critical with inflammatory markers).' },
            { step: 4, name: 'SPF 30+ (Non-negotiable)', detail: 'VDR CT = protect remaining D production. UV damage accelerates aging. Reapply if outdoors.' }
        ]
    },
    pm: {
        title: 'PM Routine (Daily)',
        steps: [
            { step: 1, name: 'Oil Cleanser', detail: 'Removes SPF, grime. DHC Deep Cleansing Oil or similar.' },
            { step: 2, name: 'Gentle Cleanser', detail: 'Double cleanse. Same as AM.' },
            { step: 3, name: 'Active (Alternate Nights)', detail: 'Tue/Thu: Retinol 0.3-0.5% (collagen production, cell turnover)\\nMon/Wed/Fri/Sat/Sun: Niacinamide 5% (barrier repair, anti-inflammatory)\\nWed: Chemical exfoliant instead (AHA/BHA)' },
            { step: 4, name: 'Heavy Moisturizer / Night Cream', detail: 'Richer than AM. Slug with Aquaphor on dry nights if needed (VDR CT dryness override).' }
        ]
    },
    weekly: [
        { day: 'Wednesday', treatment: 'Chemical Exfoliant (AHA/BHA)', detail: 'Replace retinol/niacinamide. Mandelic or lactic acid for sensitive/inflammatory skin.' },
        { day: 'Saturday', treatment: 'Face Mask', detail: 'Calming hydrating mask. Centella or aloe-based (COMT AA stress-skin support).' }
    ]
};

// ===== HAIRCARE PROTOCOL =====
const HAIRCARE = {
    genomeBasis: 'IL-6 CG + TNF-Î± AG (scalp inflammation risk). Gentle products only. No sulfates.',
    washDays: ['Tuesday', 'Friday', 'Sunday'],
    routine: [
        { step: 1, name: 'Sulfate-Free Shampoo', detail: 'Gentle formula. Focus on scalp, not lengths.' },
        { step: 2, name: 'Conditioner / Deep Conditioner', detail: 'Apply mid-lengths to ends. 2-3 min standard, 5 min deep (Fri/Sun).' },
        { step: 3, name: 'Scalp Massage', detail: '1-2 min circular motions. Increases blood flow, supports follicle health.' },
        { step: 4, name: 'Pat Dry', detail: 'No heat styling. Air dry or cool setting only.' }
    ],
    scalpTreatment: 'Friday: scalp serum with tea tree or salicylic acid for inflammation control.'
};

// ===== BIOHACKING PROTOCOL =====
const BIOHACKING = {
    protocols: [
        {
            name: 'Red Light Therapy', icon: 'ðŸ”´', frequency: '5x/week (Mon-Fri + Sat-Sun)',
            duration: '10-15 min', timing: 'Morning, before skincare SPF',
            detail: 'Near-infrared + red (630-850nm). Face + chest exposure. Stimulates collagen, mitochondrial function, wound healing. Do BEFORE applying SPF.',
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        {
            name: 'Wet Sauna', icon: 'ðŸ§–', frequency: '3x/week (post-lift days)',
            duration: '15-20 min at 150-180Â°F', timing: 'Post-lifting',
            detail: 'Heat shock proteins (HSP70/90), growth hormone spike (up to 300%), cardiovascular conditioning. Hydrate aggressively â€” 16oz water before, electrolytes after.',
            days: ['Mon', 'Wed', 'Thu']
        },
        {
            name: 'Cold Shower', icon: 'ðŸ§Š', frequency: 'Daily',
            duration: '2-3 min (end of shower)', timing: 'Post-workout or AM',
            detail: 'Vasoconstriction â†’ norepinephrine spike â†’ inflammation reduction. Start warm, finish cold. Build to 3 min. Aligns with Wim Hof progression.',
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        {
            name: 'Wim Hof Breathing', icon: 'ðŸŒ¬ï¸', frequency: '3-4x/week',
            duration: '10-15 min (3 rounds)', timing: 'Morning, before run',
            detail: '30 power breaths â†’ full exhale hold (1-2 min) â†’ 15 sec recovery breath. Repeat 3x. Alkalizes blood, primes autonomic nervous system, reduces cortisol (COMT AA support).',
            days: ['Mon', 'Wed', 'Thu', 'Sat']
        },
        {
            name: 'Hot Tub Recovery', icon: 'â™¨ï¸', frequency: '1x/week',
            duration: '15-20 min', timing: 'Sunday evening',
            detail: 'Lower temp than sauna (~100-104Â°F). Full-body soak. Parasympathetic activation, joint relief, weekly reward. Do NOT combine with cold shower same session.',
            days: ['Sun']
        }
    ]
};

const NUTRITION = {
    deficit: 300,
    proteinPerLb: '1.15-1.2g (GENOME OVERRIDE: elevated from 1.0g due to IL-6/TNF-Î±/FTO stack)',
    carbTiming: '70% immediately before and after runs',
    clinicMode: 'High protein/fat, low carb during work shifts (fat oxidation mode)',
    notes: [
        'FTO AA: Plate everything. Never eat from containers. High-volume low-cal foods at every meal.',
        'MTNR1B CG: No carbs within 2 hours of sleep.',
        'Dairy is cleared (LCT AA â€” lactose tolerant). Greek yogurt, whey, cottage cheese viable.',
        'Add omega-3 (2-3g EPA/DHA daily) for inflammatory override.',
        'Curcumin 500mg daily with food.',
        'Tart cherry juice after long runs and hard sessions.',
        'Caffeine OK pre-workout, cutoff 2 PM (ADORA2A CC â€” sleep sensitive despite fast metabolizer).'
    ]
};

const RECOVERY = {
    sleepMin: '8 hours (GENOME OVERRIDE: elevated from 7.5 hrs due to triple inflammatory stack)',
    magnesium: '200-400mg Magnesium Glycinate, 45 min before bed',
    screensOff: '60 min before bed (non-negotiable)',
    roomTemp: '65Â°F (18Â°C), pitch black',
    supplements: [
        'Magnesium Glycinate: 200-400mg, 45 min pre-bed',
        'Vitamin D3: 3000-5000 IU daily (VDR CT override) + K2-MK7',
        'Omega-3 (EPA/DHA): 2-3g daily (inflammatory override)',
        'Curcumin: 500mg daily with food',
        'Tart cherry juice: post long runs'
    ],
    notes: [
        'APOE Îµ3/Îµ4: Sleep is a primary neuroprotective factor. Do not compromise.',
        'ADA CC: Normal deep sleep architecture â€” Mg Glycinate protocol is sufficient.',
        'COMT AA: Higher anxiety tendency. Evening meditation or breathwork strongly recommended.',
        'BDNF CT: Exercise-dependent BDNF upregulation â€” running IS your antidepressant.'
    ]
};

