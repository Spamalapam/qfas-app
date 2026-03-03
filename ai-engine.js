// ===== Q.F.A.S. AI ENGINE — NVIDIA Qwen 3.5 Integration =====
// Rate limit: 40 RPM | Model: qwen/qwen3.5-397b-a17b

const AI_CONFIG = {
    url: 'https://integrate.api.nvidia.com/v1/chat/completions',
    key: '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',
    model: 'qwen/qwen3.5-397b-a17b',
    maxTokens: 4096,
    temperature: 0.6,
    rpmLimit: 40
};

// Rate limiter
const aiRateLimit = { timestamps: [], queue: [] };

function canCallAI() {
    const now = Date.now();
    aiRateLimit.timestamps = aiRateLimit.timestamps.filter(t => now - t < 60000);
    return aiRateLimit.timestamps.length < AI_CONFIG.rpmLimit;
}

function recordAICall() {
    aiRateLimit.timestamps.push(Date.now());
}

// ===== GENOME SYSTEM PROMPT =====
const GENOME_SYSTEM_PROMPT = `You are the Q.F.A.S. Protocol Engine (Quit F*cking Around out of Spite) for Adam.
You are an AI scheduler and health optimizer integrated into a genome-driven daily protocol app.

GENOME RULES (NEVER VIOLATE):
1. FTO AA = High appetite/obesity risk. 1.2g protein per lb bodyweight. No skipping meals. Track everything.
2. COMT AA = Slow catechol metabolism. Running and meditation are NON-NEGOTIABLE for mental health. High anxiety baseline.
3. BDNF CT = Exercise-dependent brain growth factor. Must run 5-6x/week for neuroplasticity.
4. IL-6 CG + TNF-a AG = Triple inflammatory stack. Post-exercise nutrition within 30 min. 8 hrs sleep minimum. Omega-3 mandatory.
5. ACTN3 TT = Slow-twitch dominant. 120-150 sec rest between lift supersets. Endurance is genetic advantage.
6. MTNR1B CG = Impaired melatonin/glucose. NO CARBS within 2 hrs of sleep. Carb timing matters.
7. VDR CT = Reduced vitamin D receptor. SPF required, supplement D3 3000-5000 IU/day.
8. GSTP1 AG = Moderate glutathione detox. Vitamin C serum for skin antioxidant support.
9. APOE e3/e4 = Alzheimer risk. Sleep is #1 neuroprotective tool. 8 hrs non-negotiable.
10. CYP1A2 CC = Fast caffeine metabolizer. Morning coffee is safe.
11. ADORA2A CC = Sensitive to sleep disruption. Screens off 1.5 hrs before bed.

PRIORITY TIERS (for scheduling decisions):
P1 NON-NEGOTIABLE: Work (if work day), Running, Sleep
P2 HIGH: Lifting, Core, Nutrition/Meals, Meditation, Magnesium
P3 IMPORTANT: Red Light Therapy, Skincare, Cold Shower, Sauna
P4 FLEXIBLE: Haircare, Free Time, Hot Tub

BLOCK TYPES: wake, running, lifting, core, nutrition, work, recovery, sleep, biohack, skincare, haircare, free

When optimizing a schedule:
- NEVER move blocks marked as "locked": true
- Keep the logical daily flow (fuel before exercise, post-exercise meal after, dinner in evening, sleep last)
- Assign realistic time ranges (format: "12:45–1:20 PM")
- Include the genome rationale in each block's detail field
- Always respond with VALID JSON only, no markdown, no explanation outside the JSON`;

// ===== CORE API CALL (with CORS proxy fallback) =====
const CORS_PROXIES = [
    (url) => 'https://corsproxy.io/?' + encodeURIComponent(url),
    (url) => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url),
    (url) => 'https://thingproxy.freeboard.io/fetch/' + url
];

async function callQwen(systemPrompt, userMessage, onChunk) {
    if (!canCallAI()) {
        throw new Error('Rate limit reached (40/min). Please wait a moment.');
    }
    recordAICall();

    const payload = {
        model: AI_CONFIG.model,
        messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
        ],
        max_tokens: AI_CONFIG.maxTokens,
        temperature: AI_CONFIG.temperature,
        top_p: 0.95,
        stream: false,
        chat_template_kwargs: { enable_thinking: false }
    };

    const headers = {
        'Authorization': 'Bearer ' + AI_CONFIG.key,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    // Try direct first, then each CORS proxy
    const attempts = [
        { url: AI_CONFIG.url, label: 'direct' },
        ...CORS_PROXIES.map((fn, i) => ({ url: fn(AI_CONFIG.url), label: 'proxy ' + (i + 1) }))
    ];

    let lastError = null;
    for (const attempt of attempts) {
        try {
            console.log('[AI] Trying ' + attempt.label + '...');
            if (onChunk) onChunk('[connecting via ' + attempt.label + '...]', '');

            const response = await fetch(attempt.url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errText = await response.text();
                throw new Error('HTTP ' + response.status + ': ' + errText.slice(0, 200));
            }

            const data = await response.json();
            const content = data.choices?.[0]?.message?.content || '';
            if (!content) throw new Error('Empty response from AI');

            console.log('[AI] Success via ' + attempt.label);
            if (onChunk) onChunk(content, content);
            return content;
        } catch (err) {
            console.warn('[AI] ' + attempt.label + ' failed:', err.message);
            lastError = err;
            continue;
        }
    }

    throw new Error('All API connection methods failed. Last error: ' + (lastError?.message || 'unknown'));
}

// ===== AI SCHEDULE OPTIMIZER =====
async function aiReschedule(date, onStatus) {
    const schedule = getScheduleData();
    const day = schedule[date];
    if (!day || !day.blocks) throw new Error('No schedule data for ' + date);

    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    // Get locked blocks
    const lockedBlocks = JSON.parse(localStorage.getItem('qfas_locked_' + date) || '{}');
    const completions = JSON.parse(localStorage.getItem('qfas_completions') || '{}');
    const dayComps = completions[date] || {};

    // Build block list with lock status
    let blockList = '';
    day.blocks.forEach((block, idx) => {
        const locked = lockedBlocks[idx] ? ' [LOCKED - DO NOT MOVE]' : '';
        const done = dayComps[idx] ? ' [COMPLETED]' : '';
        blockList += `${idx}. ${block.time} | ${block.label} | type:${block.type}${locked}${done}\n`;
    });

    const userMsg = `Current time: ${currentTime}
Date: ${date}
Day: ${day.dayLabel}
Original tagline: ${day.tagline}
Run type: ${day.runType}
Lift slot: ${day.liftSlot}

CURRENT BLOCKS:
${blockList}

INSTRUCTIONS:
1. Keep all [COMPLETED] blocks with their original times
2. NEVER change times on [LOCKED] blocks — schedule around them
3. Remove blocks whose time has clearly passed and weren't completed
4. Reschedule remaining blocks starting from ${currentTime}, keeping the logical daily flow
5. Include genome rationale in each block's detail field
6. Keep block durations realistic

Respond with ONLY this JSON (no other text):
{
  "tagline": "RESCHEDULED: ...",
  "runType": "${day.runType}",
  "liftSlot": "${day.liftSlot}",
  "blocks": [
    {"time": "HH:MM AM", "label": "...", "icon": "emoji", "type": "blocktype", "detail": "...", "locked": false}
  ]
}`;

    if (onStatus) onStatus('thinking');
    const result = await callQwen(GENOME_SYSTEM_PROMPT, userMsg);

    // Parse JSON from response
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI did not return valid JSON');

    const parsed = JSON.parse(jsonMatch[0]);
    return parsed;
}

// ===== AI FOOD ANALYZER =====
async function aiAnalyzeFood(description, onStatus) {
    if (onStatus) onStatus('analyzing');

    const userMsg = `Analyze this meal/food and estimate macros:

"${description}"

Respond with ONLY this JSON:
{
  "name": "Short meal name",
  "calories": 000,
  "protein": 00,
  "carbs": 00,
  "fat": 00,
  "fiber": 00,
  "notes": "Brief genome-relevant note (e.g. FTO AA calorie impact, MTNR1B timing, IL-6 anti-inflammatory foods)"
}`;

    const result = await callQwen(GENOME_SYSTEM_PROMPT, userMsg);
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI did not return valid JSON');
    return JSON.parse(jsonMatch[0]);
}

// ===== FOOD LOG STORAGE =====
function saveFoodEntry(entry) {
    const date = new Date().toISOString().slice(0, 10);
    const key = 'qfas_food_' + date;
    const log = JSON.parse(localStorage.getItem(key) || '[]');
    entry.timestamp = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    entry.id = Date.now();
    log.push(entry);
    localStorage.setItem(key, JSON.stringify(log));
    return log;
}

function getFoodLog(date) {
    date = date || new Date().toISOString().slice(0, 10);
    return JSON.parse(localStorage.getItem('qfas_food_' + date) || '[]');
}

function getDailyMacros(date) {
    const log = getFoodLog(date);
    return log.reduce((acc, entry) => {
        acc.calories += entry.calories || 0;
        acc.protein += entry.protein || 0;
        acc.carbs += entry.carbs || 0;
        acc.fat += entry.fat || 0;
        return acc;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}
