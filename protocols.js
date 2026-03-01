// ===== SCHEDULE DATA: Full Week Mon Mar 2 – Sun Mar 8, 2026 =====
const SCHEDULE = {
    '2026-03-02': {
        dayLabel: 'Monday, Mar 2',
        tagline: 'THE SPITE SPRINTS',
        runType: 'Speed/Intervals — 1 min hard / 1 min jog × 6-8',
        liftSlot: 'Workout 3: Density & Detail',
        blocks: [
            { time: '6:00 AM', label: 'Wake', icon: '🔔', type: 'wake', detail: 'Target 8 hrs. Sprint day — CNS needs full charge.' },
            { time: '6:00–6:10', label: 'Red Light Therapy', icon: '🔴', type: 'biohack', detail: '10 min face + chest. Collagen stimulation, mitochondrial boost. Do before sun exposure.' },
            { time: '6:10–6:25', label: 'Wim Hof Breathing', icon: '🌬️', type: 'biohack', detail: '3 rounds: 30 power breaths → exhale hold (1-2 min) → recovery breath (15 sec). Primes nervous system for sprints.' },
            { time: '6:25–6:40', label: 'AM Skincare', icon: '🧴', type: 'skincare', detail: 'Gentle cleanser → Vitamin C serum (antioxidant, GSTP1 AG support) → Moisturizer + SPF 30+ (VDR CT = protect from UV damage).' },
            { time: '6:40–7:00', label: 'Pre-Run Fuel', icon: '☕', type: 'nutrition', detail: 'Coffee + banana + nut butter. 35% of daily carbs. Sprint fuel.' },
            { time: '7:00–7:35', label: 'THE SPITE SPRINTS', icon: '⚡', type: 'running', detail: '5 min warm-up → 1 min hard / 1 min jog × 6-8 reps → 5 min cooldown. Max effort intervals. BDNF spike.' },
            { time: '7:40–8:10', label: 'Post-Run Meal', icon: '🍳', type: 'nutrition', detail: '40g+ protein, carb replenish. Eggs, Greek yogurt, fruit. Omega-3 source. Tart cherry juice.' },
            { time: '8:15–8:30', label: 'Cold Shower', icon: '🧊', type: 'biohack', detail: 'Last 2-3 min COLD. Vasoconstriction → recovery boost.' },
            { time: '8:30–9:00', label: 'Meditation + Marco Walk', icon: '🧘', type: 'recovery', detail: '10-15 min sit. Then Marco morning walk.' },
            { time: '9:00–11:30', label: 'Free Block', icon: '🎯', type: 'free', detail: 'Meal prep, journaling, personal projects.' },
            { time: '11:45 AM', label: 'Work Starts', icon: '🏥', type: 'work', detail: 'Fat oxidation mode.' },
            { time: '2:30 PM', label: 'Mid-Shift Meal', icon: '🍱', type: 'nutrition', detail: 'High protein, low carb.' },
            { time: '5:15 PM', label: 'Work Ends', icon: '🔚', type: 'work', detail: '' },
            { time: '5:30–6:20', label: 'Workout 3: Density & Detail', icon: '🏋️', type: 'lifting', detail: 'A1: Flat DB Bench ↔ A2: Seated Cable Rows\nB1: Low-to-High Cable Cross ↔ B2: Single-Arm DB Rows\nC1: Push-Ups (failure-1) ↔ C2: DB Shrugs\nRest: 120-150 sec. RPE 8.' },
            { time: '6:20–6:40', label: 'Wet Sauna', icon: '🧖', type: 'biohack', detail: '15-20 min post-lift. 150-180°F. Heat shock proteins, GH release. Hydrate aggressively.' },
            { time: '6:45–7:15', label: 'Post-Lift/Sauna Meal', icon: '🍗', type: 'nutrition', detail: '40-50g protein + carbs. Rehydrate with electrolytes.' },
            { time: '7:15–8:30', label: 'Marco Walk + Kris Time', icon: '🐕', type: 'free', detail: 'Active recovery. Relationship time.' },
            { time: '8:30–8:45', label: 'PM Skincare', icon: '🧴', type: 'skincare', detail: 'Oil cleanser → Gentle cleanser → Niacinamide serum → Heavy moisturizer.' },
            { time: '9:00 PM', label: 'Screens OFF', icon: '📵', type: 'recovery', detail: '' },
            { time: '9:45 PM', label: 'Magnesium Glycinate', icon: '💊', type: 'recovery', detail: '200-400mg.' },
            { time: '10:30 PM', label: 'Lights Out', icon: '😴', type: 'sleep', detail: '65°F, pitch black. Target 8 hrs.' }
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
