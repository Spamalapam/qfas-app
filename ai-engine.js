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
- Assign realistic time ranges (format: "12:45-1:20 PM")
- Include the genome rationale in each block's detail field
- Always respond with VALID JSON only, no markdown, no explanation outside the JSON`;

// ===== CONNECTION CHAIN: local proxy first, then CORS fallbacks =====
const LOCAL_PROXY = 'http://localhost:3141';
const CORS_PROXIES = [
    (url) => 'https://corsproxy.io/?' + encodeURIComponent(url),
    (url) => 'https://corsproxy.org/?' + encodeURIComponent(url),
    (url) => 'https://thingproxy.freeboard.io/fetch/' + url
];

async function fetchWithTimeout(url, options, timeoutMs) {
    timeoutMs = timeoutMs || 60000;
    const controller = new AbortController();
    const timer = setTimeout(function () { controller.abort(); }, timeoutMs);
    try {
        const resp = await fetch(url, Object.assign({}, options, { signal: controller.signal }));
        return resp;
    } finally {
        clearTimeout(timer);
    }
}

// ===== CORE API CALL =====
async function callQwen(systemPrompt, userMessage, onChunk) {
    if (!canCallAI()) {
        throw new Error('Rate limit reached (40/min). Please wait a moment.');
    }
    recordAICall();

    var payload = {
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

    var reqHeaders = {
        'Authorization': 'Bearer ' + AI_CONFIG.key,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    var bodyStr = JSON.stringify(payload);

    // Try local proxy first (fastest, most reliable), then direct, then CORS proxies
    var attempts = [
        { url: LOCAL_PROXY, label: 'local-proxy' },
        { url: AI_CONFIG.url, label: 'direct' }
    ];
    for (var p = 0; p < CORS_PROXIES.length; p++) {
        attempts.push({ url: CORS_PROXIES[p](AI_CONFIG.url), label: 'proxy-' + (p + 1) });
    }

    var lastError = null;
    for (var i = 0; i < attempts.length; i++) {
        var attempt = attempts[i];
        try {
            console.log('[AI] Trying ' + attempt.label + '...');
            if (onChunk) onChunk('[Connecting via ' + attempt.label + '...]', '');

            var response = await fetchWithTimeout(attempt.url, {
                method: 'POST',
                headers: reqHeaders,
                body: bodyStr
            }, 60000);

            if (!response.ok) {
                var errText = await response.text();
                throw new Error('HTTP ' + response.status + ': ' + errText.slice(0, 200));
            }

            var data = await response.json();
            var content = '';
            if (data.choices && data.choices[0] && data.choices[0].message) {
                content = data.choices[0].message.content || '';
            }
            if (!content) throw new Error('Empty response from AI');

            console.log('[AI] Success via ' + attempt.label + ' (' + content.length + ' chars)');
            if (onChunk) onChunk(content, content);
            return content;
        } catch (err) {
            var msg = err.name === 'AbortError' ? 'Timeout (60s)' : err.message;
            console.warn('[AI] ' + attempt.label + ' failed: ' + msg);
            lastError = err;
        }
    }

    throw new Error('All API connections failed. Last error: ' + (lastError ? lastError.message : 'unknown'));
}

// ===== AI SCHEDULE OPTIMIZER =====
async function aiReschedule(date, onStatus) {
    var schedule = getScheduleData();
    var day = schedule[date];
    if (!day || !day.blocks) throw new Error('No schedule data for ' + date);

    var now = new Date();
    var currentTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

    var lockedBlocks = JSON.parse(localStorage.getItem('qfas_locked_' + date) || '{}');
    var completions = JSON.parse(localStorage.getItem('qfas_completions') || '{}');
    var dayComps = completions[date] || {};

    var blockList = '';
    day.blocks.forEach(function (block, idx) {
        var locked = lockedBlocks[idx] ? ' [LOCKED - DO NOT MOVE]' : '';
        var done = dayComps[idx] ? ' [COMPLETED]' : '';
        blockList += idx + '. ' + block.time + ' | ' + block.label + ' | type:' + block.type + locked + done + '\n';
    });

    var userMsg = 'Current time: ' + currentTime + '\n' +
        'Date: ' + date + '\n' +
        'Day: ' + day.dayLabel + '\n' +
        'Run type: ' + day.runType + '\n' +
        'Lift slot: ' + day.liftSlot + '\n\n' +
        'CURRENT BLOCKS:\n' + blockList + '\n' +
        'INSTRUCTIONS:\n' +
        '1. Keep all [COMPLETED] blocks with their original times\n' +
        '2. NEVER change times on [LOCKED] blocks\n' +
        '3. Remove blocks whose time has passed and were not completed\n' +
        '4. Reschedule remaining blocks starting from ' + currentTime + '\n' +
        '5. Include genome rationale in detail field\n\n' +
        'Respond with ONLY JSON:\n' +
        '{"tagline":"RESCHEDULED: ...","runType":"' + day.runType + '","liftSlot":"' + day.liftSlot + '",' +
        '"blocks":[{"time":"HH:MM AM","label":"...","icon":"emoji","type":"blocktype","detail":"...","locked":false}]}';

    if (onStatus) onStatus('thinking');
    var result = await callQwen(GENOME_SYSTEM_PROMPT, userMsg);

    var jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI did not return valid JSON');

    return JSON.parse(jsonMatch[0]);
}

// ===== AI FOOD ANALYZER =====
async function aiAnalyzeFood(description, onStatus) {
    if (onStatus) onStatus('analyzing');

    var userMsg = 'Analyze this meal/food and estimate macros:\n\n' +
        '"' + description + '"\n\n' +
        'Respond with ONLY this JSON:\n' +
        '{"name":"Short meal name","calories":000,"protein":00,"carbs":00,"fat":00,"fiber":00,' +
        '"notes":"Brief genome-relevant note (e.g. FTO AA calorie impact, MTNR1B timing)"}';

    var result = await callQwen(GENOME_SYSTEM_PROMPT, userMsg);
    var jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('AI did not return valid JSON');
    return JSON.parse(jsonMatch[0]);
}

// ===== FOOD LOG STORAGE =====
function saveFoodEntry(entry) {
    var date = new Date().toISOString().slice(0, 10);
    var key = 'qfas_food_' + date;
    var log = JSON.parse(localStorage.getItem(key) || '[]');
    entry.timestamp = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    entry.id = Date.now();
    log.push(entry);
    localStorage.setItem(key, JSON.stringify(log));

    // Also update the food diary index
    var diaryIndex = JSON.parse(localStorage.getItem('qfas_food_diary_index') || '[]');
    if (diaryIndex.indexOf(date) === -1) {
        diaryIndex.push(date);
        diaryIndex.sort().reverse();
        localStorage.setItem('qfas_food_diary_index', JSON.stringify(diaryIndex));
    }

    return log;
}

function getFoodLog(date) {
    date = date || new Date().toISOString().slice(0, 10);
    return JSON.parse(localStorage.getItem('qfas_food_' + date) || '[]');
}

function getDailyMacros(date) {
    var log = getFoodLog(date);
    return log.reduce(function (acc, entry) {
        acc.calories += entry.calories || 0;
        acc.protein += entry.protein || 0;
        acc.carbs += entry.carbs || 0;
        acc.fat += entry.fat || 0;
        return acc;
    }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
}

function getFoodDiaryHistory() {
    var index = JSON.parse(localStorage.getItem('qfas_food_diary_index') || '[]');
    return index.map(function (date) {
        return { date: date, log: getFoodLog(date), macros: getDailyMacros(date) };
    });
}

// ===== GRADE JOURNAL =====
function saveGradeEntry(grade, feedback, date) {
    date = date || new Date().toISOString().slice(0, 10);
    var key = 'qfas_grades';
    var journal = JSON.parse(localStorage.getItem(key) || '[]');
    journal.unshift({
        date: date,
        grade: grade,
        feedback: feedback,
        timestamp: new Date().toISOString()
    });
    // Keep last 90 days
    if (journal.length > 90) journal = journal.slice(0, 90);
    localStorage.setItem(key, JSON.stringify(journal));
    return journal;
}

function getGradeJournal() {
    return JSON.parse(localStorage.getItem('qfas_grades') || '[]');
}
