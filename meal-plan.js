// ===== Q.F.A.S. GENOME-DRIVEN MEAL PLAN =====
// 7-day rotating plan: 1,900 cal | 197g protein | 170g carbs | 55g fat
// Genome rules: FTO AA (high protein), MTNR1B CG (no carbs 2hr before bed),
// IL-6 CG (post-workout within 30 min), COMT AA (steady blood sugar)
// User preference: allulose as sweetener

const MEAL_PLAN = {
    targets: { cal: 1900, protein: 197, carbs: 170, fat: 55 },

    timing: [
        { meal: 'Breakfast', time: '7:30-8:00 AM', gene: 'CYP1A2 CC — coffee safe. Front-load carbs here (MTNR1B CG).' },
        { meal: 'Post-Workout Shake', time: '~30 min after exercise', gene: 'IL-6 CG — post-exercise protein within 30 min. Non-negotiable.' },
        { meal: 'Lunch', time: '12:00-12:30 PM', gene: 'FTO AA — largest meal midday keeps appetite stable.' },
        { meal: 'Afternoon Snack', time: '3:00-3:30 PM', gene: 'COMT AA — prevents afternoon cortisol spike + blood sugar crash.' },
        { meal: 'Dinner', time: '6:00-6:30 PM', gene: 'MTNR1B CG — low carb, high protein. 2+ hrs before bed.' },
        { meal: 'Evening Protein', time: '8:00-8:30 PM', gene: 'FTO AA — casein-based to prevent overnight muscle catabolism. Zero carbs.' }
    ],

    days: [
        {
            day: 'Monday',
            tagline: 'THE PROTEIN POWERHOUSE',
            meals: [
                {
                    name: 'Spiced Turkey Scramble',
                    type: 'breakfast',
                    cal: 420, protein: 42, carbs: 38, fat: 10,
                    ingredients: [
                        '6 oz ground turkey (99% lean)',
                        '3 egg whites + 1 whole egg',
                        '1/2 cup diced bell peppers + onions',
                        '1 slice Ezekiel bread',
                        '1 tsp olive oil',
                        'Cumin, paprika, garlic powder, salt'
                    ],
                    recipe: 'Heat oil in pan. Brown turkey with spices until cooked through. Push to side, scramble eggs in same pan. Serve over toast with peppers.',
                    tip: '☕ Pair with black coffee + L-Theanine 200mg'
                },
                {
                    name: 'Chocolate PB Recovery Shake',
                    type: 'shake',
                    cal: 280, protein: 45, carbs: 22, fat: 4,
                    ingredients: [
                        '1.5 scoops whey isolate (chocolate)',
                        '1 tbsp PB2 powdered peanut butter',
                        '1 frozen banana (small)',
                        '1 cup unsweetened oat milk',
                        '1 tbsp allulose',
                        'Ice, blend'
                    ],
                    recipe: 'Blend all ingredients until smooth. The allulose + PB2 + banana makes this taste like a Reese\'s milkshake at 280 cal.',
                    tip: '💪 Within 30 min of exercise — IL-6 CG mandate'
                },
                {
                    name: 'Chipotle-Style Chicken Bowl',
                    type: 'lunch',
                    cal: 510, protein: 48, carbs: 52, fat: 12,
                    ingredients: [
                        '6 oz chicken breast, grilled + sliced',
                        '1/2 cup brown rice',
                        '1/2 cup black beans',
                        '1/4 avocado',
                        'Pico de gallo, lime, cilantro',
                        'Hot sauce to taste'
                    ],
                    recipe: 'Cook rice. Grill chicken with chili powder, cumin, garlic. Assemble bowl: rice base, beans, chicken, pico, avocado. Squeeze lime.',
                    tip: '🍽️ Take Glucomannan 30 min before'
                },
                {
                    name: 'Greek Yogurt Parfait',
                    type: 'snack',
                    cal: 200, protein: 28, carbs: 18, fat: 3,
                    ingredients: [
                        '1 cup non-fat Greek yogurt',
                        '1 tbsp allulose',
                        '1/4 cup blueberries',
                        '1 tbsp low-fat granola',
                        'Cinnamon'
                    ],
                    recipe: 'Layer yogurt, berries, granola. Stir in allulose + cinnamon. Tastes like dessert, hits 28g protein.',
                    tip: '🌅 Take 5-HTP + Chromium around this time'
                },
                {
                    name: 'Garlic Butter Salmon + Asparagus',
                    type: 'dinner',
                    cal: 440, protein: 40, carbs: 18, fat: 24,
                    ingredients: [
                        '6 oz Atlantic salmon fillet',
                        '1 bunch asparagus, trimmed',
                        '1 tbsp butter (or ghee)',
                        '3 cloves garlic, minced',
                        'Lemon, dill, salt, pepper',
                        '1 cup mixed greens side salad'
                    ],
                    recipe: 'Preheat oven 400°F. Place salmon + asparagus on sheet pan. Melt butter with garlic, drizzle over everything. Bake 12-15 min. Squeeze lemon. Serve with greens.',
                    tip: '🐟 Omega-3 rich — doubles as IL-6 CG anti-inflammatory dose'
                },
                {
                    name: 'Casein Pudding',
                    type: 'evening',
                    cal: 130, protein: 25, carbs: 4, fat: 2,
                    ingredients: [
                        '1 scoop casein protein (vanilla)',
                        '1/2 cup cold water',
                        '1 tsp allulose',
                        'Dash of cinnamon'
                    ],
                    recipe: 'Mix casein with just 1/2 cup water (thick like pudding). Stir in allulose + cinnamon. Eat with spoon — slow-digesting protein feeds muscles overnight.',
                    tip: '🌙 Take Magnesium 400mg + L-Theanine 200mg with this'
                }
            ]
        },
        {
            day: 'Tuesday',
            tagline: 'THE CLEAN MACHINE',
            meals: [
                {
                    name: 'Protein Pancakes',
                    type: 'breakfast',
                    cal: 400, protein: 40, carbs: 42, fat: 8,
                    ingredients: [
                        '1 scoop vanilla whey isolate',
                        '1/3 cup oats (blended to flour)',
                        '1 whole egg + 2 egg whites',
                        '1/4 cup allulose',
                        '1/2 tsp baking powder, dash vanilla extract',
                        '1/3 cup mixed berries on top',
                        'Sugar-free syrup (allulose-based)'
                    ],
                    recipe: 'Blend oats, protein, eggs, allulose, baking powder, vanilla into batter. Cook on non-stick pan like normal pancakes. Top with berries + sugar-free syrup. These taste INCREDIBLE — like real pancakes at 40g protein.',
                    tip: '☕ Coffee + L-Theanine. Best breakfast of the week.'
                },
                {
                    name: 'Vanilla Berry Recovery Shake',
                    type: 'shake',
                    cal: 260, protein: 42, carbs: 20, fat: 3,
                    ingredients: [
                        '1.5 scoops whey isolate (vanilla)',
                        '1/2 cup frozen strawberries',
                        '1 cup unsweetened oat milk',
                        '1 tbsp allulose',
                        'Ice'
                    ],
                    recipe: 'Blend until smooth. The strawberries + allulose make this taste like a strawberry milkshake.',
                    tip: '💪 Post-exercise — IL-6 CG window'
                },
                {
                    name: 'Asian Beef Lettuce Wraps',
                    type: 'lunch',
                    cal: 480, protein: 46, carbs: 42, fat: 14,
                    ingredients: [
                        '6 oz lean ground beef (93/7)',
                        '8 butter lettuce leaves',
                        '1/2 cup jasmine rice',
                        '2 tbsp low-sodium soy sauce',
                        '1 tbsp sriracha',
                        'Ginger, garlic, green onions, sesame seeds'
                    ],
                    recipe: 'Brown beef with garlic + ginger. Add soy sauce + sriracha. Cook rice. Spoon beef + rice into lettuce cups. Garnish with green onions + sesame seeds.',
                    tip: '🔥 This one is addictive. Tastes like restaurant quality.'
                },
                {
                    name: 'Cottage Cheese + Everything Bagel',
                    type: 'snack',
                    cal: 180, protein: 26, carbs: 12, fat: 4,
                    ingredients: [
                        '1 cup low-fat cottage cheese',
                        '1 rice cake',
                        'Everything Bagel seasoning',
                        'Cherry tomatoes, cucumber slices'
                    ],
                    recipe: 'Spread cottage cheese on rice cake. Top with Everything Bagel seasoning, tomatoes, cucumber.',
                    tip: '🌅 5-HTP + Chromium time'
                },
                {
                    name: 'Lemon Herb Chicken Thighs + Roasted Broccoli',
                    type: 'dinner',
                    cal: 430, protein: 42, carbs: 14, fat: 22,
                    ingredients: [
                        '6 oz chicken thighs (skin-on for flavor, remove before eating for macro compliance)',
                        '2 cups broccoli florets',
                        '1 tbsp olive oil',
                        'Lemon zest, oregano, thyme, garlic, red pepper flakes'
                    ],
                    recipe: 'Marinate chicken in lemon, herbs, garlic 30 min+. Roast at 425°F with broccoli tossed in olive oil, 25 min until crispy. The skin crisps the flavor — eat or skip the skin based on fat budget.',
                    tip: '🥦 Low carb dinner = MTNR1B CG compliant'
                },
                {
                    name: 'Allulose Hot Chocolate Protein',
                    type: 'evening',
                    cal: 140, protein: 25, carbs: 6, fat: 3,
                    ingredients: [
                        '1 scoop casein protein (chocolate)',
                        '1 cup hot water',
                        '1 tbsp allulose',
                        '1 tsp cocoa powder',
                        'Pinch of salt'
                    ],
                    recipe: 'Heat water (not boiling). Whisk in casein, cocoa, allulose, salt. Sip like hot chocolate. Incredibly comforting before bed.',
                    tip: '🌙 Mag + Theanine. This is your bedtime ritual.'
                }
            ]
        },
        {
            day: 'Wednesday',
            tagline: 'THE MEDITERRANEAN',
            meals: [
                {
                    name: 'Veggie & Feta Egg White Omelette',
                    type: 'breakfast',
                    cal: 380, protein: 38, carbs: 36, fat: 9,
                    ingredients: [
                        '6 egg whites + 1 whole egg',
                        '1 oz feta cheese, crumbled',
                        'Spinach, tomatoes, mushrooms',
                        '1 slice Ezekiel bread, toasted',
                        'Fresh basil, oregano'
                    ],
                    recipe: 'Whisk egg whites + whole egg. Pour into non-stick pan. Add spinach, tomatoes, mushrooms, feta. Fold and cook until set. Serve with toast.',
                    tip: '☕ Mediterranean vibes — fresh herbs make this sing'
                },
                {
                    name: 'Mocha Protein Shake',
                    type: 'shake',
                    cal: 250, protein: 42, carbs: 16, fat: 3,
                    ingredients: [
                        '1.5 scoops whey isolate (chocolate)',
                        '1 shot espresso (cooled) or 1 tsp instant coffee',
                        '1 cup unsweetened oat milk',
                        '1 tbsp allulose',
                        'Ice'
                    ],
                    recipe: 'Blend everything. The espresso + chocolate protein + allulose = better than any coffee shop mocha. Zero guilt.',
                    tip: '💪 CYP1A2 CC = you metabolize the caffeine fast. Safe post-workout.'
                },
                {
                    name: 'Greek Chicken Power Bowl',
                    type: 'lunch',
                    cal: 520, protein: 50, carbs: 48, fat: 14,
                    ingredients: [
                        '6 oz chicken breast, grilled + cubed',
                        '1/2 cup quinoa',
                        '1/4 cup hummus',
                        'Cucumber, cherry tomatoes, red onion',
                        'Kalamata olives (5-6)',
                        '1 tbsp lemon-herb dressing'
                    ],
                    recipe: 'Cook quinoa. Grill chicken with Greek seasoning (oregano, lemon, garlic). Build bowl: quinoa, chicken, veggies, hummus dollop, olives. Drizzle dressing.',
                    tip: '🍽️ Glucomannan 30 min before. This bowl is FILLING.'
                },
                {
                    name: 'Turkey Roll-Ups',
                    type: 'snack',
                    cal: 170, protein: 24, carbs: 8, fat: 5,
                    ingredients: [
                        '4 oz deli turkey (low sodium)',
                        '1 oz string cheese',
                        'Mustard',
                        '6 baby carrots'
                    ],
                    recipe: 'Spread mustard on turkey slices, wrap around string cheese pieces. Eat with carrots.',
                    tip: '🌅 Quick, portable, hits protein target'
                },
                {
                    name: 'Balsamic Glazed Cod + Zucchini Noodles',
                    type: 'dinner',
                    cal: 400, protein: 42, carbs: 16, fat: 18,
                    ingredients: [
                        '6 oz cod fillet',
                        '2 medium zucchini, spiralized',
                        '1 tbsp balsamic glaze',
                        '1 tbsp olive oil',
                        'Cherry tomatoes, garlic, basil',
                        'Red pepper flakes'
                    ],
                    recipe: 'Sear cod in olive oil 3-4 min per side. Sauté spiralized zucchini with garlic + tomatoes 2 min. Plate zoodles, top with cod, drizzle balsamic glaze, fresh basil.',
                    tip: '🐟 White fish = lean protein. Balsamic glaze makes it gourmet.'
                },
                {
                    name: 'Vanilla Casein Pudding',
                    type: 'evening',
                    cal: 130, protein: 25, carbs: 4, fat: 2,
                    ingredients: [
                        '1 scoop casein (vanilla)',
                        '1/2 cup cold water',
                        '1 tsp allulose',
                        'Dash of vanilla extract'
                    ],
                    recipe: 'Thick mix with spoon — pudding consistency. Allulose makes it taste like vanilla custard.',
                    tip: '🌙 Mag + Theanine bedtime stack'
                }
            ]
        },
        {
            day: 'Thursday',
            tagline: 'THE COMFORT ZONE',
            meals: [
                {
                    name: 'Breakfast Burrito Bowl',
                    type: 'breakfast',
                    cal: 430, protein: 44, carbs: 40, fat: 9,
                    ingredients: [
                        '5 oz chicken sausage, sliced',
                        '3 egg whites',
                        '1/3 cup black beans',
                        '1/4 cup salsa',
                        '1 small tortilla (low-carb) or 1/3 cup rice',
                        'Hot sauce, cilantro'
                    ],
                    recipe: 'Brown sausage slices. Scramble egg whites next to them. Warm beans. Assemble in bowl with salsa, cilantro, hot sauce. Wrap in tortilla or eat as bowl.',
                    tip: '☕ Spicy breakfast boosts metabolism. Coffee + Theanine.'
                },
                {
                    name: 'Tropical Recovery Shake',
                    type: 'shake',
                    cal: 270, protein: 42, carbs: 22, fat: 3,
                    ingredients: [
                        '1.5 scoops whey isolate (vanilla)',
                        '1/2 cup frozen mango chunks',
                        '1/4 cup frozen pineapple',
                        '1 cup coconut water',
                        '1 tbsp allulose'
                    ],
                    recipe: 'Blend until smooth. Tastes like a tropical vacation. The coconut water adds electrolytes post-workout.',
                    tip: '💪 Post-exercise. Electrolytes from coconut water aid recovery.'
                },
                {
                    name: 'Turkey Taco Salad',
                    type: 'lunch',
                    cal: 490, protein: 48, carbs: 44, fat: 14,
                    ingredients: [
                        '6 oz ground turkey (99% lean)',
                        'Taco seasoning (low sodium)',
                        '2 cups romaine, chopped',
                        '1/3 cup corn',
                        '1/4 cup black beans',
                        '2 tbsp Greek yogurt (sour cream sub)',
                        '1 oz crushed tortilla chips',
                        'Salsa, lime'
                    ],
                    recipe: 'Brown turkey with taco seasoning. Build salad: romaine, corn, beans, turkey, crushed chips. Top with Greek yogurt + salsa + lime squeeze.',
                    tip: '🌮 The crushed chips add crunch without killing carb budget'
                },
                {
                    name: 'Protein Cookie Dough Bites',
                    type: 'snack',
                    cal: 190, protein: 24, carbs: 16, fat: 5,
                    ingredients: [
                        '1 scoop vanilla whey isolate',
                        '2 tbsp oat flour',
                        '2 tbsp allulose',
                        '1 tbsp PB2 powdered peanut butter',
                        '1 tbsp mini dark chocolate chips',
                        '2-3 tbsp water (to bind)'
                    ],
                    recipe: 'Mix all dry ingredients. Add water 1 tbsp at a time until dough forms. Fold in chocolate chips. Roll into 4-5 balls. Eat raw or refrigerate 20 min. These taste like actual cookie dough.',
                    tip: '🍪 Allulose keeps these zero-guilt. Best snack on the plan.'
                },
                {
                    name: 'Honey Garlic Shrimp Stir-Fry',
                    type: 'dinner',
                    cal: 410, protein: 40, carbs: 32, fat: 12,
                    ingredients: [
                        '8 oz shrimp, peeled + deveined',
                        '2 cups stir-fry veggies (snap peas, bell pepper, broccoli)',
                        '1/4 cup jasmine rice',
                        '1 tbsp allulose + 1 tbsp soy sauce + 1 tsp sriracha (sauce)',
                        '2 cloves garlic, ginger',
                        '1 tsp sesame oil'
                    ],
                    recipe: 'Cook rice. Heat sesame oil, sear shrimp 2 min per side. Remove. Stir-fry veggies 3 min. Make sauce: allulose + soy + sriracha + garlic + ginger. Return shrimp, coat in sauce. Serve over rice.',
                    tip: '🍤 Allulose caramelizes like honey in the pan. Game-changer.'
                },
                {
                    name: 'Chocolate Casein Mousse',
                    type: 'evening',
                    cal: 140, protein: 25, carbs: 6, fat: 3,
                    ingredients: [
                        '1 scoop casein (chocolate)',
                        '1/3 cup cold water',
                        '1 tbsp allulose',
                        '1 tsp cocoa powder',
                        'Whip vigorously'
                    ],
                    recipe: 'Use very little water and whip with a fork for 2-3 min. The casein thickens into a mousse texture. Allulose + cocoa = rich chocolate mousse at 140 cal.',
                    tip: '🌙 Feels like dessert. Actually neuroprotective (APOE e3/e4).'
                }
            ]
        },
        {
            day: 'Friday',
            tagline: 'THE FEAST DAY',
            meals: [
                {
                    name: 'Smoked Salmon Toast',
                    type: 'breakfast',
                    cal: 390, protein: 36, carbs: 34, fat: 12,
                    ingredients: [
                        '4 oz smoked salmon',
                        '2 slices Ezekiel bread, toasted',
                        '2 tbsp light cream cheese',
                        'Capers, red onion, dill',
                        'Lemon wedge',
                        '2 egg whites, scrambled on side'
                    ],
                    recipe: 'Toast bread, spread cream cheese, layer salmon. Top with capers, thin red onion, fresh dill, lemon squeeze. Scramble egg whites alongside.',
                    tip: '🐟 Omega-3 at breakfast — IL-6 CG anti-inflammatory first thing'
                },
                {
                    name: 'Peanut Butter Banana Shake',
                    type: 'shake',
                    cal: 290, protein: 44, carbs: 24, fat: 5,
                    ingredients: [
                        '1.5 scoops whey isolate (chocolate)',
                        '1 tbsp PB2 powdered peanut butter',
                        '1/2 frozen banana',
                        '1 cup unsweetened oat milk',
                        '1 tbsp allulose',
                        'Ice'
                    ],
                    recipe: 'Blend everything. The PB2 + banana + chocolate = the best shake of the week.',
                    tip: '💪 Post-workout. This is the one you\'ll crave.'
                },
                {
                    name: 'Grilled Chicken Caesar Wrap',
                    type: 'lunch',
                    cal: 500, protein: 50, carbs: 40, fat: 14,
                    ingredients: [
                        '6 oz chicken breast, grilled + sliced',
                        '1 large low-carb tortilla',
                        '2 cups romaine',
                        '2 tbsp light Caesar dressing',
                        '1 tbsp parmesan, shaved',
                        'Cracked black pepper'
                    ],
                    recipe: 'Grill chicken with Italian seasoning. Lay tortilla flat, spread dressing, add romaine, chicken, parmesan. Roll tight. Cut in half diagonally.',
                    tip: '🥬 Classic. Never boring.'
                },
                {
                    name: 'Beef Jerky + Apple Slices',
                    type: 'snack',
                    cal: 200, protein: 22, carbs: 20, fat: 4,
                    ingredients: [
                        '2 oz beef jerky (low sugar)',
                        '1 medium apple, sliced',
                        'Pinch of cinnamon on apple'
                    ],
                    recipe: 'No cooking needed. Jerky + apple with cinnamon is an elite combo.',
                    tip: '🌅 Clean, portable, satisfying'
                },
                {
                    name: 'Blackened Tilapia Tacos',
                    type: 'dinner',
                    cal: 420, protein: 44, carbs: 30, fat: 14,
                    ingredients: [
                        '7 oz tilapia fillets',
                        '3 small corn tortillas',
                        'Blackening spice (paprika, cayenne, garlic, onion powder)',
                        'Shredded cabbage, lime, cilantro',
                        '2 tbsp Greek yogurt crema (yogurt + lime + garlic)',
                        'Pickled red onions'
                    ],
                    recipe: 'Coat tilapia in blackening spice. Sear in hot pan 3 min per side. Warm tortillas. Assemble: cabbage, fish, crema, pickled onions, cilantro, lime.',
                    tip: '🌮 These rival any taco truck. Lean white fish keeps fat low.'
                },
                {
                    name: 'Cinnamon Roll Casein',
                    type: 'evening',
                    cal: 130, protein: 25, carbs: 4, fat: 2,
                    ingredients: [
                        '1 scoop casein (vanilla)',
                        '1/2 cup cold water',
                        '1 tbsp allulose',
                        '1 tsp cinnamon',
                        'Pinch of nutmeg'
                    ],
                    recipe: 'Mix thick. The cinnamon + allulose + vanilla casein = tastes exactly like cinnamon roll filling. Eat with spoon.',
                    tip: '🌙 You\'ll look forward to this every night.'
                }
            ]
        },
        {
            day: 'Saturday',
            tagline: 'THE GRILL MASTER',
            meals: [
                {
                    name: 'Steak & Eggs',
                    type: 'breakfast',
                    cal: 440, protein: 46, carbs: 28, fat: 16,
                    ingredients: [
                        '4 oz sirloin steak, thinly sliced',
                        '2 whole eggs',
                        '1 slice Ezekiel bread',
                        '1/2 cup sautéed mushrooms',
                        'Salt, pepper, garlic powder'
                    ],
                    recipe: 'Season steak, sear 2-3 min per side in hot pan. Cook eggs to preference. Toast bread. Sauté mushrooms in same steak pan. Weekend king\'s breakfast.',
                    tip: '🥩 Saturday = treat yourself. Still hitting macros.'
                },
                {
                    name: 'Cookies & Cream Shake',
                    type: 'shake',
                    cal: 260, protein: 42, carbs: 18, fat: 3,
                    ingredients: [
                        '1.5 scoops whey isolate (cookies & cream or vanilla)',
                        '2 Oreo thins, crushed',
                        '1 cup unsweetened oat milk',
                        '1 tbsp allulose',
                        'Ice'
                    ],
                    recipe: 'Blend protein, milk, allulose, ice. Pour in glass, stir in crushed Oreo pieces for crunch. 2 thin Oreos = 6g carbs, worth every bite.',
                    tip: '💪 Sometimes you need the fun shake. Still hits macros.'
                },
                {
                    name: 'BBQ Chicken Quesadilla',
                    type: 'lunch',
                    cal: 510, protein: 50, carbs: 46, fat: 13,
                    ingredients: [
                        '6 oz chicken breast, shredded',
                        '1 large low-carb tortilla',
                        '1 oz reduced-fat Mexican cheese',
                        '2 tbsp sugar-free BBQ sauce (allulose-based)',
                        'Red onion, jalapeños, cilantro'
                    ],
                    recipe: 'Toss shredded chicken in BBQ sauce. Lay tortilla in dry pan, add cheese + chicken + onion + jalapeños. Fold, cook 2 min per side until crispy. Cut into wedges.',
                    tip: '🔥 Sugar-free BBQ sauce with allulose tastes identical to regular.'
                },
                {
                    name: 'Protein Ice Cream',
                    type: 'snack',
                    cal: 180, protein: 28, carbs: 14, fat: 2,
                    ingredients: [
                        '1 scoop casein (any flavor)',
                        '1 cup unsweetened oat milk',
                        '2 tbsp allulose',
                        '1/2 tsp xanthan gum',
                        'Ice (lots)'
                    ],
                    recipe: 'Blend casein, oat milk, allulose, xanthan gum with LOTS of ice on high for 2-3 min. The xanthan gum + casein creates ice cream texture. Eat immediately with spoon.',
                    tip: '🍦 This is the cheat code. Actual ice cream consistency at 180 cal.'
                },
                {
                    name: 'Grilled Ribeye (lean portion) + Caesar Salad',
                    type: 'dinner',
                    cal: 440, protein: 42, carbs: 12, fat: 24,
                    ingredients: [
                        '5 oz ribeye steak (trim visible fat)',
                        '3 cups romaine',
                        '1 tbsp light Caesar dressing',
                        '1 tbsp parmesan shaved',
                        'Grilled lemon halves'
                    ],
                    recipe: 'Season ribeye with salt + pepper. Grill 4-5 min per side (medium-rare). Rest 5 min. Slice against grain. Serve over Caesar salad with grilled lemon squeeze.',
                    tip: '🥩 Saturday dinner steak. You earned it with the week\'s training.'
                },
                {
                    name: 'Peanut Butter Casein Pudding',
                    type: 'evening',
                    cal: 150, protein: 27, carbs: 6, fat: 4,
                    ingredients: [
                        '1 scoop casein (chocolate)',
                        '1 tbsp PB2 powdered peanut butter',
                        '1/2 cup cold water',
                        '1 tbsp allulose'
                    ],
                    recipe: 'Mix thick. PB2 + chocolate casein + allulose = Reese\'s pudding. Chef\'s kiss.',
                    tip: '🌙 End the week right. Mag + Theanine.'
                }
            ]
        },
        {
            day: 'Sunday',
            tagline: 'THE RESET',
            meals: [
                {
                    name: 'Banana Protein Waffles',
                    type: 'breakfast',
                    cal: 410, protein: 40, carbs: 44, fat: 8,
                    ingredients: [
                        '1 scoop vanilla whey isolate',
                        '1/3 cup oat flour',
                        '1 mashed banana',
                        '2 egg whites',
                        '1/4 cup allulose',
                        '1/2 tsp baking powder',
                        'Sugar-free maple syrup'
                    ],
                    recipe: 'Mix all into batter (thinner than pancake batter). Pour into waffle maker. Cook until golden. Top with sugar-free syrup. Sunday morning luxury.',
                    tip: '☕ Slow morning. Coffee + Theanine. Prep meals for the week.'
                },
                {
                    name: 'Green Matcha Protein Shake',
                    type: 'shake',
                    cal: 250, protein: 42, carbs: 16, fat: 3,
                    ingredients: [
                        '1.5 scoops whey isolate (vanilla)',
                        '1 tsp matcha powder',
                        '1 cup unsweetened oat milk',
                        '1 tbsp allulose',
                        'Handful of spinach (you won\'t taste it)',
                        'Ice'
                    ],
                    recipe: 'Blend everything. Matcha + vanilla + allulose = smooth, earthy, caffeinated. The spinach adds nutrients invisibly.',
                    tip: '💪 Matcha = sustained energy. L-theanine naturally present.'
                },
                {
                    name: 'Meal Prep Sunday Bowl',
                    type: 'lunch',
                    cal: 520, protein: 48, carbs: 52, fat: 13,
                    ingredients: [
                        '6 oz chicken breast OR lean ground turkey',
                        '1/2 cup sweet potato, cubed + roasted',
                        '1 cup roasted brussels sprouts',
                        '1 tbsp olive oil',
                        'Everything Bagel seasoning',
                        'Sriracha mayo (light mayo + sriracha)'
                    ],
                    recipe: 'Cube sweet potato + brussels, toss in olive oil + seasoning, roast at 425°F 25 min. Cook protein. This is also your meal prep template — make 4-5 of these for the week.',
                    tip: '📦 Make extra containers NOW. Midweek-you will thank Sunday-you.'
                },
                {
                    name: 'Chocolate Protein Mug Cake',
                    type: 'snack',
                    cal: 200, protein: 28, carbs: 16, fat: 4,
                    ingredients: [
                        '1 scoop chocolate whey isolate',
                        '2 tbsp oat flour',
                        '2 tbsp allulose',
                        '1 egg white',
                        '3 tbsp water',
                        '1/2 tsp baking powder',
                        '1 tsp cocoa powder'
                    ],
                    recipe: 'Mix all in a microwave-safe mug. Microwave 60-90 seconds. Let cool 1 min. Eat from mug. It\'s a warm chocolate cake. At 200 cal. With 28g protein. You\'re welcome.',
                    tip: '🍫 The allulose keeps it moist. Do NOT skip the allulose.'
                },
                {
                    name: 'Turkey Meatballs + Marinara + Zoodles',
                    type: 'dinner',
                    cal: 410, protein: 44, carbs: 18, fat: 18,
                    ingredients: [
                        '6 oz ground turkey (93/7)',
                        '1 egg white, Italian seasoning, garlic, onion powder',
                        '1/2 cup marinara (low sugar)',
                        '2 medium zucchini, spiralized',
                        '1 tbsp parmesan',
                        'Fresh basil'
                    ],
                    recipe: 'Mix turkey, egg white, seasonings. Form 8-10 meatballs. Bake at 400°F 18 min. Heat marinara. Sauté zoodles 2 min. Plate: zoodles, meatballs, marinara, parmesan, basil.',
                    tip: '🍝 Italian comfort food. Zero pasta, all the vibes.'
                },
                {
                    name: 'Sleepy Time Protein',
                    type: 'evening',
                    cal: 130, protein: 25, carbs: 4, fat: 2,
                    ingredients: [
                        '1 scoop casein (vanilla)',
                        '1/2 cup warm water',
                        '1 tbsp allulose',
                        '1/4 tsp lavender extract (optional)',
                        'Chamomile tea on the side'
                    ],
                    recipe: 'Warm water (not hot) + casein + allulose. Sip alongside chamomile tea. The ultimate wind-down combo.',
                    tip: '🌙 Sunday reset complete. Mag + Theanine. Full week prepped.'
                }
            ]
        }
    ]
};

function renderMealPlan() {
    const el = document.getElementById('mealPlanContent');
    if (!el) return;

    const m = MEAL_PLAN;
    let html = '';

    // Timing Schedule
    html += `<div class="mp-timing-section">
    <h4 class="mp-section-title">🕐 Daily Meal Timing (Genome-Optimized)</h4>
    <div class="mp-timing-grid">`;
    m.timing.forEach(t => {
        html += `<div class="mp-timing-card">
      <div class="mp-timing-meal">${t.meal}</div>
      <div class="mp-timing-time">${t.time}</div>
      <div class="mp-timing-gene">${t.gene}</div>
    </div>`;
    });
    html += `</div></div>`;

    // Macro Targets Bar
    html += `<div class="mp-macro-bar">
    <div class="mp-macro-item mp-cal"><span class="mp-macro-num">${m.targets.cal}</span> cal</div>
    <div class="mp-macro-item mp-pro"><span class="mp-macro-num">${m.targets.protein}g</span> protein</div>
    <div class="mp-macro-item mp-carb"><span class="mp-macro-num">${m.targets.carbs}g</span> carbs</div>
    <div class="mp-macro-item mp-fat"><span class="mp-macro-num">${m.targets.fat}g</span> fat</div>
  </div>`;

    // Day selector tabs
    html += `<div class="mp-day-tabs" id="mealDayTabs">`;
    m.days.forEach((day, i) => {
        html += `<button class="mp-day-tab ${i === 0 ? 'active' : ''}" onclick="showMealDay(${i})">${day.day.slice(0, 3)}</button>`;
    });
    html += `</div>`;

    // Day content
    m.days.forEach((day, i) => {
        const dayTotal = day.meals.reduce((a, ml) => ({
            cal: a.cal + ml.cal, protein: a.protein + ml.protein,
            carbs: a.carbs + ml.carbs, fat: a.fat + ml.fat
        }), { cal: 0, protein: 0, carbs: 0, fat: 0 });

        html += `<div class="mp-day-content ${i === 0 ? 'active' : ''}" id="mealDay${i}">
      <div class="mp-day-header">
        <h3 class="mp-day-title">${day.day} — <span class="mp-tagline">${day.tagline}</span></h3>
        <div class="mp-day-totals">
          <span class="mdt-cal">${dayTotal.cal} cal</span>
          <span class="mdt-pro">${dayTotal.protein}g P</span>
          <span class="mdt-carb">${dayTotal.carbs}g C</span>
          <span class="mdt-fat">${dayTotal.fat}g F</span>
        </div>
      </div>`;

        day.meals.forEach(ml => {
            const typeIcon = { breakfast: '🌅', shake: '🥤', lunch: '☀️', snack: '🍪', dinner: '🌙', evening: '😴' }[ml.type] || '🍽️';
            html += `<div class="mp-meal-card">
        <div class="mp-meal-header">
          <div class="mp-meal-icon">${typeIcon}</div>
          <div class="mp-meal-info">
            <div class="mp-meal-name">${ml.name}</div>
            <div class="mp-meal-type">${ml.type.toUpperCase()}</div>
          </div>
          <div class="mp-meal-macros">
            <span class="mm-cal">${ml.cal}</span>
            <span class="mm-pro">${ml.protein}g P</span>
            <span class="mm-carb">${ml.carbs}g C</span>
            <span class="mm-fat">${ml.fat}g F</span>
          </div>
        </div>
        <div class="mp-meal-body">
          <div class="mp-ingredients">
            <div class="mp-label">Ingredients</div>
            <ul>${ml.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
          </div>
          <div class="mp-recipe">
            <div class="mp-label">Recipe</div>
            <p>${ml.recipe}</p>
          </div>
          ${ml.tip ? `<div class="mp-tip">${ml.tip}</div>` : ''}
        </div>
      </div>`;
        });

        html += `</div>`;
    });

    el.innerHTML = html;
}

function showMealDay(idx) {
    document.querySelectorAll('.mp-day-content').forEach((el, i) => {
        el.classList.toggle('active', i === idx);
    });
    document.querySelectorAll('.mp-day-tab').forEach((btn, i) => {
        btn.classList.toggle('active', i === idx);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(renderMealPlan, 700);
});
