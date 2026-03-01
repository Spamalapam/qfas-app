// ===== SCHEDULE DATA: Full Week Mon Mar 2 – Sun Mar 8, 2026 =====
const SCHEDULE = {
    '2026-03-02': {
        dayLabel: 'Monday, Mar 2',
        tagline: 'THE SPITE SPRINTS',
        runType: 'Speed/Intervals — 1 min hard / 1 min jog × 6-8',
        liftSlot: 'Workout 3: Density & Detail',
        blocks: [
            { time: '6:00 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: 'TARGET: 8 hrs (GENOME OVERRIDE). Your IL-6 CG + TNF-a AG triple inflammatory stack means you need MORE sleep than average for tissue repair. Research shows men 25-35 with elevated inflammatory markers who sleep <7.5 hrs show 23% higher CRP levels (Patel et al., Sleep 2009). Your ADA CC = normal deep sleep architecture, so 8 hrs should yield ~1.5-2 hrs deep sleep. APOE e3/e4 makes sleep a primary neuroprotective factor — amyloid-beta clearance happens during deep sleep. Sprint day = max CNS demand, so full charge is non-negotiable.' },
            { time: '6:00–6:10', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: 'WHY NOW: Red/near-infrared (630-850nm) activates cytochrome c oxidase in your mitochondria, boosting ATP production by 15-20% (Hamblin, BBA 2018). For your VDR CT variant = reduced vitamin D receptor efficiency, red light helps compensate by stimulating collagen directly without UV. TIMING: Pre-SPF because sunscreen blocks the wavelengths. Face + chest exposure targets highest collagen density areas. Studies show 10 min daily at 660nm improves skin elasticity by 28% over 12 weeks in 30-40 age group (Wunsch & Matuschka, Photomed Laser Surg 2014).' },
            { time: '6:10–6:25', label: 'Wim Hof Breathing', icon: '🌬️', type: 'biohack', detail: 'WHY NOW: Your COMT AA = slow catechol breakdown = higher baseline anxiety and cortisol sensitivity. Wim Hof breathing alkalizes blood pH and triggers controlled adrenaline release, which paradoxically LOWERS cortisol over time (Kox et al., PNAS 2014). 3 rounds before sprints primes your sympathetic nervous system without the anxiety spike. PROTOCOL: 30 power breaths → full exhale hold (target 1-2 min) → 15 sec recovery breath × 3. Your BDNF CT variant means exercise-dependent neuroplasticity — Wim Hof pre-sprint stacks the BDNF amplitude.' },
            { time: '6:25–6:40', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'GENOME-DRIVEN: Your GSTP1 AG = moderate glutathione detox capacity. Vitamin C serum (L-ascorbic acid 15-20%) acts as an exogenous antioxidant to compensate, neutralizing free radicals from UV before they damage collagen. Your IL-6 CG + TNF-a AG = inflammatory skin tendency. Ceramide-based moisturizer repairs barrier function that inflammation degrades. SPF 30+ is NON-NEGOTIABLE with VDR CT — your vitamin D receptor runs at ~60% efficiency, so you need sun protection while supplementing D3 orally (3000-5000 IU/day). Men 30-35 lose ~1% collagen per year; this routine slows that to ~0.5% (Pullar et al., Nutrients 2017).' },
            { time: '6:40–7:00', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'WHY THIS COMBO: Your FTO AA = aggressive appetite signaling. Pre-loading 35% of daily carbs HERE prevents glycogen depletion during sprints AND reduces post-run binge risk. Coffee: CYP1A2 CC = fast caffeine metabolizer, so morning caffeine is safe and peaks in 30-45 min (perfectly timed for sprint start). Banana + nut butter = fast glycemic carbs + fat to blunt insulin spike (critical with your MTNR1B CG — even AM insulin management matters). Research: fasted HIIT in men 25-35 with inflammatory markers actually INCREASES IL-6 post-exercise by 40% vs. fed state (Fischer, J Applied Phys 2004).' },
            { time: '7:00–7:35', label: 'THE SPITE SPRINTS', icon: '⚡', type: 'running', detail: 'PROTOCOL: 5 min warm-up → 1 min hard / 1 min jog × 6-8 reps → 5 min cooldown. WHY INTERVALS: Your ACTN3 TT = complete alpha-actinin-3 deficiency = slow-twitch dominant. You are genetically built for endurance, NOT power. Sprint intervals compensate by recruiting fast-twitch fibers you would otherwise lose (use-it-or-lose-it). BDNF CT = exercise-dependent brain growth factor. HIIT produces 2-3x more BDNF than steady-state (Schmolesky et al., Brain Res 2013). Your COMT AA = running IS your antidepressant. Sprint intervals generate the highest catecholamine surge. Target HR: 85-95% max during work intervals, 60-65% during recovery jog.' },
            { time: '7:40–8:10', label: 'Post-Run Meal', icon: '🍳', type: 'nutrition', detail: 'CRITICAL WINDOW: Your IL-6 CG + TNF-a AG = slow recovery from exercise-induced inflammation. Post-sprint nutrition within 30 min cuts recovery time by 25-40% (Beelen et al., Int J Sport Nutr 2010). MINIMUM 40g protein to trigger muscle protein synthesis at your weight (1.2g/lb/day target, GENOME OVERRIDE from standard 1.0g). Omega-3 source (fish oil or salmon) directly counters your IL-6/TNF-a inflammatory cascade. Tart cherry juice: studies show 50% reduction in IL-6 markers post-exercise in runners (Howatson et al., Scand J Med Sport 2010). Greek yogurt = dairy cleared (LCT AA — lactose tolerant).' },
            { time: '8:15–8:30', label: 'Cold Shower', icon: '🧊', type: 'biohack', detail: 'WHY POST-SPRINT: Cold exposure (50-60°F for 2-3 min) triggers norepinephrine release — 200-300% spike lasting 1-2 hrs (Shevchuk, Med Hypotheses 2008). For your COMT AA genotype, this norepinephrine boost compensates for slow catechol metabolism, improving focus and mood without anxiety. TIMING: Post-sprint specifically because your IL-6 CG means inflammation peaks 1-2 hrs after HIIT. Cold vasoconstriction limits inflammatory cascade at the source. NOTE: Start warm, finish cold. Build tolerance over weeks. The Wim Hof breathing you did earlier pre-adapted your vagus nerve for this.' },
            { time: '8:30–9:00', label: 'Meditation + Marco Walk', icon: '🧘', type: 'recovery', detail: 'GENOME RATIONALE: COMT AA = slow catechol degradation = higher baseline anxiety and stress reactivity. Meditation 10-15 min activates parasympathetic nervous system, reducing cortisol 15-25% (Turakitwanakan et al., J Med Assoc Thai 2013). This is not optional — your genotype makes you neurologically prone to rumination and overthinking. Pairing with Marco walk adds low-intensity movement that further clears cortisol while bonding with your dog (oxytocin release). BDNF CT: meditation enhances neuroplasticity effects of the sprints you just did.' },
            { time: '9:00–11:30', label: 'Free Block', icon: '🎯', type: 'free', detail: 'Meal prep, journaling, personal projects. FTO AA reminder: if hungry during this block, volume-eat — huge salads, raw vegetables, broth. Your appetite signaling is genetically elevated; do NOT fight it with willpower alone. Use volume as the weapon.' },
            { time: '11:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: 'CLINIC MODE: Fat oxidation. Your FTO AA genotype responds best to longer fasting windows between meals during sedentary periods. Keep meals high-protein, fat-moderate during shift. No carbs until post-workout — they will spike insulin and crash your energy with MTNR1B CG.' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: 'HIGH PROTEIN (30-40g), LOW CARB. Your FTO AA = amplified hunger signaling. Protein has highest satiety per calorie. Fat-moderate to sustain energy. ZERO refined carbs — your MTNR1B CG impairs glucose handling progressively through the day (worst at night, but already declining by mid-afternoon). Suggested: chicken breast, avocado, mixed greens, olive oil.' },
            { time: '5:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: 'Transition to lifting. Pre-workout mental shift.' },
            { time: '5:30–6:20', label: 'Workout 3: Density & Detail', icon: '🏋️', type: 'lifting', detail: 'SUPERSETS (Antagonist Pairing):\nA1: Flat DB Bench (3×8-10) ↔ A2: Seated Cable Rows (3×8-12)\nB1: Low-to-High Cable Cross (3×12-15) ↔ B2: Single-Arm DB Rows (3×10-12)\nC1: Push-Ups to failure-1 ↔ C2: DB Shrugs (3×12-15)\n\nGENOME: ACTN3 TT = 120-150 sec rest MANDATORY between supersets. You do NOT have the fast-twitch recovery of RR/RT types. RPE 8 = leave 1-2 reps in tank. Protect CNS for running (your genetic advantage). Studies show antagonist supersets produce equivalent hypertrophy to straight sets with 40% less gym time (Robbins et al., J Strength Cond Res 2010).' },
            { time: '6:20–6:40', label: 'Wet Sauna', icon: '🧖', type: 'biohack', detail: 'WHY POST-LIFT: Sauna at 150-180°F triggers heat shock proteins (HSP70/90) which repair exercise-damaged proteins and boost growth hormone by 200-300% when done post-exercise (Leppäluoto et al., J Clin Endocrinol Metab 1986). For men 30-35, this GH spike is critical — natural GH declines ~14% per decade after 30. Your IL-6/TNF-a inflammatory stack BENEFITS from heat therapy: regular sauna reduces CRP by 30% over 4 weeks (Laukkanen et al., JAMA Internal Med 2015). HYDRATE: 16oz water before, electrolytes after. You sweat 0.5-1L in 20 min.' },
            { time: '6:45–7:15', label: 'Post-Lift/Sauna Meal', icon: '🍗', type: 'nutrition', detail: 'ANABOLIC WINDOW: 40-50g protein within 45 min post-lift triggers peak MPS (muscle protein synthesis). Your ACTN3 TT endurance phenotype actually needs MORE protein than power types for equivalent hypertrophy (Phillips et al., JISSN 2007). Carbs here to replenish glycogen — tomorrow is Tuesday easy run, so moderate carbs OK. HYDRATION: After sauna you are depleted. Electrolytes (sodium, potassium, magnesium) essential. Your nightly Mg Glycinate does NOT cover exercise losses.' },
            { time: '7:15–8:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: 'Active recovery walk. Low-intensity movement clears lactate and inflammatory markers better than sitting. Relationship time is not a luxury — your COMT AA genotype makes social connection a genuine stress-management tool. Oxytocin from quality time directly lowers cortisol (Ditzen et al., Psychoneuroendocrinology 2009).' },
            { time: '8:30–8:45', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'PM PROTOCOL: Oil cleanser (removes sunscreen, sebum, grime from gym/sauna) → Gentle cleanser (double cleanse) → Niacinamide 5% serum (Mon night = niacinamide, NOT retinol). Niacinamide: improves skin barrier by 24% in 4 weeks, reduces redness from your IL-6/TNF-a inflammatory markers (Wohlrab & Kreft, Skin Pharmacol Physiol 2014). Heavy moisturizer to lock in hydration — your VDR CT = dry skin tendency.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: 'GENOME CRITICAL: Your ADORA2A CC = adenosine receptor variant that makes you sensitive to sleep disruption despite fast caffeine metabolism. Blue light from screens suppresses melatonin 50% more effectively than other wavelengths (Cajochen et al., J Appl Physiol 2011). With your APOE e3/e4, sleep is your #1 neuroprotective tool. Non-negotiable.' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: 'WHY GLYCINATE: Magnesium glycinate crosses the blood-brain barrier (vs. citrate or oxide which stay gut-level). 200-400mg binds GABA receptors, promoting deep sleep onset. Your COMT AA = slow catecholamine clearance means your brain is still "running" at night. Mg Glycinate is the brake pedal. Studies: 200mg Mg Glycinate improved sleep quality scores by 37% in adults 30-50 (Abbasi et al., J Res Med Sci 2012). TIMING: 45 min before bed allows absorption and GABA activation.' },
            { time: '10:30 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'ENVIRONMENT: 65°F / 18°C (proven optimal for deep sleep onset), pitch black (melatonin production requires <1 lux). Your APOE e3/e4 variant means sleep is literally cleaning amyloid-beta from your brain. Every hour under 7.5 hrs is a measurable increase in neurodegeneration risk over decades (Shokri-Kojori et al., PNAS 2018). ADA CC = normal adenosine metabolism, so sleep pressure should build naturally if screens were off at 9 PM. Target: asleep by 10:45, wake 6:00 AM = 7.25 hrs minimum. Sprint day recovery demands the full 8.' }
        ]
    },
    '2026-03-03': {
        dayLabel: 'Tuesday, Mar 3',
        tagline: 'THE DECOMPRESSION PROTOCOL',
        runType: 'Easy Run — Conversational, 30-45 min',
        liftSlot: 'None — Active Recovery',
        blocks: [
            { time: '6:30 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: '' },
            { time: '6:30–6:40', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: '10 min face + chest.' },
            { time: '6:40–6:55', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'Gentle cleanser → Vitamin C serum → Moisturizer + SPF.' },
            { time: '6:55–7:10', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'Coffee + light carb. Easy day fuel.' },
            { time: '7:10–7:50', label: 'Decompression Run', icon: '💚', type: 'running', detail: '30-45 min conversational pace. CNS decompression. BDNF maintenance.' },
            { time: '7:55–8:20', label: 'Post-Run Meal', icon: '🍳', type: 'nutrition', detail: '40g+ protein + moderate carbs.' },
            { time: '8:20–8:35', label: 'Cold Shower', icon: '🧊', type: 'biohack', detail: 'Last 2-3 min cold.' },
            { time: '8:35–9:00', label: 'Hair Wash Day', icon: '💇', type: 'haircare', detail: 'Sulfate-free shampoo → Conditioner (2-3 min). Scalp massage. Pat dry, no heat.' },
            { time: '9:00–9:30', label: 'Spite Core Circuit', icon: '🔥', type: 'core', detail: '3-4 rounds. Hanging Knee Raises, Woodchoppers, Decline Crunches, Ab Wheel.' },
            { time: '9:30–11:30', label: 'Free Block + Meditation', icon: '🧘', type: 'free', detail: 'Meditation 10-15 min. Marco care.' },
            { time: '11:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: '' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: 'High protein, low carb.' },
            { time: '6:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '6:30–7:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: '' },
            { time: '7:30–8:00', label: 'Dinner', icon: '🍽️', type: 'nutrition', detail: 'Protein-forward. No carbs after 8 PM (MTNR1B).' },
            { time: '8:15–8:30', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'Oil cleanser → Gentle cleanser → Retinol (Tue/Thu only) → Heavy moisturizer.' },
            { time: '8:30 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '200-400mg.' },
            { time: '10:00 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs.' }
        ]
    },
    '2026-03-04': {
        dayLabel: 'Wednesday, Mar 4',
        tagline: 'THE MID-WEEK ENGINE BUILDER',
        runType: 'Tempo — 15-20 min comfortably hard',
        liftSlot: 'Workout 4: V-Taper Annihilation',
        blocks: [
            { time: '6:00 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: 'Tempo + lifting day. Full fuel.' },
            { time: '6:00–6:10', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: '10 min face + chest.' },
            { time: '6:10–6:25', label: 'Wim Hof Breathing', icon: '🌬️', type: 'biohack', detail: '3 rounds power breathing. Mental clarity for tempo effort.' },
            { time: '6:25–6:40', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'Gentle cleanser → Vitamin C serum → Moisturizer + SPF.' },
            { time: '6:40–7:00', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'Coffee + oatmeal. Tempo day = more carbs upfront.' },
            { time: '7:00–7:30', label: 'Tempo Run', icon: '🔶', type: 'running', detail: '5 min warm-up → 15-20 min comfortably hard → 5 min cooldown.' },
            { time: '7:35–8:00', label: 'Post-Run Meal', icon: '🍳', type: 'nutrition', detail: '40g+ protein + carbs.' },
            { time: '8:00–8:15', label: 'Cold Shower', icon: '🧊', type: 'biohack', detail: 'Last 2-3 min cold.' },
            { time: '8:15–8:45', label: 'Meditation + Marco Walk', icon: '🧘', type: 'recovery', detail: '' },
            { time: '8:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: '' },
            { time: '12:00 PM', label: 'Lunch', icon: '🍱', type: 'nutrition', detail: 'High protein, low carb.' },
            { time: '3:30 PM', label: 'Mid-Shift Snack', icon: '🥜', type: 'nutrition', detail: '' },
            { time: '5:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '5:30–6:20', label: 'Workout 4: V-Taper Annihilation', icon: '🏋️', type: 'lifting', detail: 'A1: Upright Cable Rows ↔ A2: Incline DB Curls\nB1: DB Lateral Raises ↔ B2: Triceps Rope Pushdowns\nC1: EZ Bar Curls ↔ C2: Single-Arm Cable Lat Pulldowns\nRest: 120-150 sec. RPE 8.' },
            { time: '6:20–6:40', label: 'Wet Sauna', icon: '🧖', type: 'biohack', detail: '15-20 min post-lift. Heat shock proteins + GH release.' },
            { time: '6:45–7:15', label: 'Post-Lift/Sauna Meal', icon: '🍗', type: 'nutrition', detail: '40-50g protein + carbs. Rehydrate.' },
            { time: '7:15–8:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: '' },
            { time: '8:30–8:45', label: 'PM Skincare + Weekly Exfoliant', icon: '🧴', type: 'skincare', detail: 'Oil cleanser → Gentle cleanser → Chemical exfoliant (AHA/BHA — 1x/week, Wednesday) → Heavy moisturizer.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '' },
            { time: '10:30 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs.' }
        ]
    },
    '2026-03-05': {
        dayLabel: 'Thursday, Mar 5',
        tagline: 'THE HARD SHUTDOWN',
        runType: 'REST — Zero Running',
        liftSlot: 'Workout 1: Width & The Shelf',
        blocks: [
            { time: '7:00 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: 'REST DAY for running. Lift only.' },
            { time: '7:00–7:10', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: '10 min face + chest.' },
            { time: '7:10–7:25', label: 'Wim Hof Breathing', icon: '🌬️', type: 'biohack', detail: '3 rounds. Deep CNS reset on rest day.' },
            { time: '7:25–7:40', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'Gentle cleanser → Vitamin C serum → Moisturizer + SPF.' },
            { time: '7:40–8:00', label: 'Morning Fuel', icon: '☕', type: 'nutrition', detail: 'High protein breakfast. ZERO carbs — no running to burn them.' },
            { time: '8:00–8:30', label: 'Meditation + Marco Walk', icon: '🧘', type: 'recovery', detail: '' },
            { time: '8:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: '' },
            { time: '12:00 PM', label: 'Lunch', icon: '🍱', type: 'nutrition', detail: 'High protein, fat-moderate, LOW carb.' },
            { time: '3:30 PM', label: 'Mid-Shift Snack', icon: '🥜', type: 'nutrition', detail: '' },
            { time: '5:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '5:30–6:20', label: 'Workout 1: Width & Shelf', icon: '🏋️', type: 'lifting', detail: 'A1: Incline DB Press ↔ A2: Wide-Grip Lat Pulldowns\nB1: Flat Machine Chest Press ↔ B2: Chest-Supported DB Rows\nC1: Cable Lateral Raises ↔ C2: Straight-Arm Cable Pulldowns\nRest: 120-150 sec. RPE 8.' },
            { time: '6:20–6:40', label: 'Wet Sauna', icon: '🧖', type: 'biohack', detail: '15-20 min post-lift.' },
            { time: '6:45–7:00', label: 'Post-Lift/Sauna Meal', icon: '🍗', type: 'nutrition', detail: '40-50g protein + moderate carbs. Rehydrate.' },
            { time: '7:00–8:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: '' },
            { time: '8:30–8:45', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'Oil cleanser → Gentle cleanser → Retinol (Thu night) → Heavy moisturizer.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '' },
            { time: '10:30 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: '65°F, pitch black. Target 8 hrs.' }
        ]
    },
    '2026-03-06': {
        dayLabel: 'Friday, Mar 6',
        tagline: 'EASY RUN + RECOVERY',
        runType: 'Easy Run (20-30 min)',
        liftSlot: 'Workout 2: Caps & Pipes (conditional)',
        blocks: [
            { time: '6:30 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: '' },
            { time: '6:30–6:40', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: '10 min.' },
            { time: '6:40–6:55', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'Gentle cleanser → Vitamin C → Moisturizer + SPF.' },
            { time: '6:55–7:10', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'Coffee + banana. Light fuel.' },
            { time: '7:10–7:40', label: 'Easy Run', icon: '💚', type: 'running', detail: '20-30 min conversational pace. BDNF maintenance.' },
            { time: '7:45–8:10', label: 'Post-Run Meal', icon: '🍳', type: 'nutrition', detail: '40g+ protein + carbs.' },
            { time: '8:10–8:25', label: 'Cold Shower', icon: '🧊', type: 'biohack', detail: 'Last 2-3 min cold.' },
            { time: '8:25–8:50', label: 'Hair Wash + Scalp Treatment', icon: '💇', type: 'haircare', detail: 'Sulfate-free shampoo → Deep conditioner (5 min) → Scalp serum.' },
            { time: '8:50–9:30', label: 'Spite Core Circuit', icon: '🔥', type: 'core', detail: '3-4 rounds. Hanging Knee Raises, Woodchoppers, Decline Crunches, Ab Wheel.' },
            { time: '9:30–11:30', label: 'Free Block + Meditation', icon: '🧘', type: 'free', detail: '' },
            { time: '12:15 PM', label: 'Work Starts', icon: '🏥', type: 'work', detail: 'Late shift.' },
            { time: '3:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: '' },
            { time: '8:45 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '9:00–9:30', label: 'Late Dinner', icon: '🍽️', type: 'nutrition', detail: 'Protein only, ZERO carbs (MTNR1B override).' },
            { time: '9:30–9:45', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'Oil cleanser → Gentle cleanser → Niacinamide → Heavy moisturizer.' },
            { time: '9:45 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '10:15 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '' },
            { time: '11:00 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs.' }
        ]
    },
    '2026-03-07': {
        dayLabel: 'Saturday, Mar 7',
        tagline: 'THE SHAKEOUT + FACE MASK DAY',
        runType: 'Very Easy Jog (20-30 min)',
        liftSlot: 'Workout 2: Caps & Pipes (deferred from Fri)',
        blocks: [
            { time: '7:00 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: '' },
            { time: '7:00–7:10', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: '10 min.' },
            { time: '7:10–7:25', label: 'AM Skincare + Weekly Face Mask', icon: '🧴', type: 'skincare', detail: 'Gentle cleanser → Hydrating face mask (15 min, centella/aloe) → Vitamin C → Moisturizer + SPF.' },
            { time: '7:25–7:40', label: 'Wim Hof Breathing', icon: '🌬️', type: 'biohack', detail: '3 rounds. Weekend deep reset.' },
            { time: '7:40–7:55', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'Coffee + banana.' },
            { time: '7:55–8:25', label: 'The Shakeout', icon: '🟢', type: 'running', detail: '20-30 min very easy jog. If legs = cement, cut to 20 min.' },
            { time: '8:25–8:40', label: 'Post-Run Fuel', icon: '🍳', type: 'nutrition', detail: 'Quick protein + carbs.' },
            { time: '8:40–9:30', label: 'Workout 2: Caps & Pipes', icon: '🏋️', type: 'lifting', detail: 'A1: Seated DB Shoulder Press ↔ A2: Neutral-Grip Pull-Ups\nB1: DB Lateral Raises ↔ B2: DB Hammer Curls\nC1: Overhead Triceps Rope Extensions ↔ C2: Face Pulls\nRest: 120-150 sec. RPE 8.' },
            { time: '9:30–9:45', label: 'Post-Lift Meal', icon: '🍗', type: 'nutrition', detail: '40-50g protein + carbs.' },
            { time: '9:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: '' },
            { time: '12:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: '' },
            { time: '6:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '6:30–7:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: '' },
            { time: '7:30–8:00', label: 'Dinner', icon: '🍽️', type: 'nutrition', detail: 'Protein-forward + moderate carbs (pre-loading for Sunday Empire Builder).' },
            { time: '8:00–8:15', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'Oil cleanser → Gentle cleanser → Niacinamide → Heavy night cream.' },
            { time: '8:30 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: 'Early cutoff — big run tomorrow.' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '' },
            { time: '10:00 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs. Wake ~5:45 AM for Empire Builder.' }
        ]
    },
    '2026-03-08': {
        dayLabel: 'Sunday, Mar 8',
        tagline: 'THE EMPIRE BUILDER + FULL RECOVERY',
        runType: 'Long Run (45-60+ min, conversational)',
        liftSlot: 'None — Core Circuit + Recovery',
        blocks: [
            { time: '5:45 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: 'Early wake for long run.' },
            { time: '5:45–5:55', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: '10 min. Pre-run mitochondrial prime.' },
            { time: '5:55–6:15', label: 'Pre-Run Carb Load', icon: '☕', type: 'nutrition', detail: 'FRONT-LOAD CARBS: oatmeal, banana, nut butter, coffee. 35-40% of daily carbs HERE.' },
            { time: '6:15–6:30', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'Quick routine: cleanser → SPF (will sweat, reapply if outdoors).' },
            { time: '6:30–7:40', label: 'THE EMPIRE BUILDER', icon: '👑', type: 'running', detail: '45-60+ min, conversational pace. This is your church. BDNF peak. Build the engine.' },
            { time: '7:45–8:30', label: 'Spite Core Circuit', icon: '🔥', type: 'core', detail: '3-4 rounds. Full circuit.' },
            { time: '8:30–9:00', label: 'Post-Run/Core Recovery Meal', icon: '🍗', type: 'nutrition', detail: 'BIG meal: 40-50g protein + 35% daily carbs. Tart cherry juice. Omega-3.' },
            { time: '9:00–9:20', label: 'Cold Shower', icon: '🧊', type: 'biohack', detail: '3 min cold. Post-long-run inflammation reset.' },
            { time: '9:20–9:50', label: 'Dynamic Mobility', icon: '🧘', type: 'recovery', detail: '15 min foam roll + stretching (COL5A1 override). Hip openers, IT band.' },
            { time: '9:50–10:05', label: 'Hair Wash + Scalp Care', icon: '💇', type: 'haircare', detail: 'Gentle shampoo + deep conditioner.' },
            { time: '10:05–11:15', label: 'Marco + Kris Time', icon: '🐕', type: 'free', detail: 'Walk Marco. Meal prep.' },
            { time: '11:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: '' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: 'High protein, minimal carbs.' },
            { time: '6:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '6:30–7:15', label: 'Hot Tub Recovery', icon: '♨️', type: 'biohack', detail: '15-20 min soak. Sunday-only. Muscle recovery, joint relief, parasympathetic activation.' },
            { time: '7:15–8:00', label: 'Marco + Kris Evening', icon: '🐕', type: 'free', detail: '' },
            { time: '8:00–8:30', label: 'Dinner', icon: '🍽️', type: 'nutrition', detail: 'Protein-forward. No carbs after 8:30 PM (MTNR1B).' },
            { time: '8:30–8:45', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'Oil cleanser → Gentle cleanser → Niacinamide → Heavy night cream.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '9:15 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '' },
            { time: '10:00 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: 'Target 8 hrs. Prep for Monday Spite Sprints.' }
        ]
    }
};

// ===== GENOME-DRIVEN SKINCARE PROTOCOL =====
const SKINCARE = {
    genomeBasis: 'GSTP1 AG (moderate detox), IL-6 CG + TNF-α AG (inflammatory skin risk), VDR CT (D-deficiency dry skin), COMT AA (stress-reactive skin)',
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
            { step: 3, name: 'Active (Alternate Nights)', detail: 'Tue/Thu: Retinol 0.3-0.5% (collagen production, cell turnover)\nMon/Wed/Fri/Sat/Sun: Niacinamide 5% (barrier repair, anti-inflammatory)\nWed: Chemical exfoliant instead (AHA/BHA)' },
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
    genomeBasis: 'IL-6 CG + TNF-α AG (scalp inflammation risk). Gentle products only. No sulfates.',
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
            name: 'Red Light Therapy', icon: '🔴', frequency: '5x/week (Mon-Fri + Sat-Sun)',
            duration: '10-15 min', timing: 'Morning, before skincare SPF',
            detail: 'Near-infrared + red (630-850nm). Face + chest exposure. Stimulates collagen, mitochondrial function, wound healing. Do BEFORE applying SPF.',
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        {
            name: 'Wet Sauna', icon: '🧖', frequency: '3x/week (post-lift days)',
            duration: '15-20 min at 150-180°F', timing: 'Post-lifting',
            detail: 'Heat shock proteins (HSP70/90), growth hormone spike (up to 300%), cardiovascular conditioning. Hydrate aggressively — 16oz water before, electrolytes after.',
            days: ['Mon', 'Wed', 'Thu']
        },
        {
            name: 'Cold Shower', icon: '🧊', frequency: 'Daily',
            duration: '2-3 min (end of shower)', timing: 'Post-workout or AM',
            detail: 'Vasoconstriction → norepinephrine spike → inflammation reduction. Start warm, finish cold. Build to 3 min. Aligns with Wim Hof progression.',
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        {
            name: 'Wim Hof Breathing', icon: '🌬️', frequency: '3-4x/week',
            duration: '10-15 min (3 rounds)', timing: 'Morning, before run',
            detail: '30 power breaths → full exhale hold (1-2 min) → 15 sec recovery breath. Repeat 3x. Alkalizes blood, primes autonomic nervous system, reduces cortisol (COMT AA support).',
            days: ['Mon', 'Wed', 'Thu', 'Sat']
        },
        {
            name: 'Hot Tub Recovery', icon: '♨️', frequency: '1x/week',
            duration: '15-20 min', timing: 'Sunday evening',
            detail: 'Lower temp than sauna (~100-104°F). Full-body soak. Parasympathetic activation, joint relief, weekly reward. Do NOT combine with cold shower same session.',
            days: ['Sun']
        }
    ]
};
