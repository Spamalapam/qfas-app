// ===== Q.F.A.S. GUIDED WORKOUT PLAYER =====
// Full-screen overlay that walks through each exercise step-by-step

const WorkoutPlayer = (() => {
    let state = null; // { workout, steps, stepIndex, setIndex, phase, timerInterval, startTime, log }
    const REST_SECONDS = 135; // 120-150 sec midpoint (ACTN3 override)
    const STORAGE_KEY = 'qfas_workout_history';
    const WEIGHT_KEY = 'qfas_weights';

    // ===== AUDIO =====
    function beep(freq = 880, dur = 200, count = 1) {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            let t = ctx.currentTime;
            for (let i = 0; i < count; i++) {
                const o = ctx.createOscillator(); const g = ctx.createGain();
                o.connect(g); g.connect(ctx.destination);
                o.frequency.value = freq; o.type = 'square';
                g.gain.value = 0.15;
                o.start(t); o.stop(t + dur / 1000);
                t += (dur + 100) / 1000;
            }
        } catch (e) { }
    }

    // ===== LOCAL STORAGE =====
    function getWeights() {
        try { return JSON.parse(localStorage.getItem(WEIGHT_KEY)) || {}; } catch { return {}; }
    }
    function saveWeight(exerciseKey, weight) {
        const w = getWeights(); w[exerciseKey] = weight;
        localStorage.setItem(WEIGHT_KEY, JSON.stringify(w));
    }
    function saveLog(log) {
        try {
            const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            history.unshift(log);
            if (history.length > 50) history.length = 50;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
        } catch { }
    }

    // ===== BUILD STEPS =====
    function buildLiftingSteps(workout) {
        const steps = [];
        workout.exercises.forEach(ex => {
            const maxSets = Math.max(ex.sets, ex.pairSets || ex.sets);
            for (let s = 0; s < maxSets; s++) {
                if (s < ex.sets) {
                    steps.push({
                        type: 'exercise', side: 'primary', set: s + 1, totalSets: ex.sets,
                        name: ex.name, label: ex.set, repRange: ex.repRange,
                        target: ex.target, feel: ex.feel, form: ex.form, mistakes: ex.mistakes, exKey: ex.set + '_' + ex.name
                    });
                }
                if (s < (ex.pairSets || ex.sets)) {
                    steps.push({
                        type: 'exercise', side: 'pair', set: s + 1, totalSets: ex.pairSets || ex.sets,
                        name: ex.pairName, label: ex.pair, repRange: ex.pairReps,
                        target: ex.pairTarget, feel: ex.pairFeel, form: ex.pairForm, mistakes: ex.pairMistakes || [], exKey: ex.pair + '_' + ex.pairName
                    });
                }
                steps.push({ type: 'rest' });
            }
        });
        if (steps.length && steps[steps.length - 1].type === 'rest') steps.pop();
        return steps;
    }

    function buildCoreSteps(core) {
        const steps = [];
        for (let r = 0; r < (core.rounds || 4); r++) {
            core.exercises.forEach((ex, i) => {
                steps.push({
                    type: 'exercise', side: 'core', set: r + 1, totalSets: core.rounds || 4,
                    name: ex.name, label: `R${r + 1}`, repRange: ex.reps.replace(' reps', '').replace(' reps/side', '/side'),
                    target: ex.target, feel: ex.feel, form: ex.form, mistakes: ex.mistakes, exKey: 'core_' + ex.name
                });
                if (i < core.exercises.length - 1) steps.push({ type: 'rest', short: true });
            });
            if (r < (core.rounds || 4) - 1) steps.push({ type: 'rest' });
        }
        return steps;
    }

    // ===== RENDER =====
    function getOverlay() { return document.getElementById('workoutPlayerOverlay'); }

    function render() {
        const ov = getOverlay();
        if (!state) { ov.classList.remove('active'); return; }
        ov.classList.add('active');
        const step = state.steps[state.stepIndex];
        const progress = ((state.stepIndex + 1) / state.steps.length * 100).toFixed(0);
        const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
        const mins = Math.floor(elapsed / 60); const secs = elapsed % 60;

        if (step.type === 'exercise') {
            renderExercise(ov, step, progress, mins, secs);
        } else {
            renderRest(ov, step, progress, mins, secs);
        }
    }

    function renderExercise(ov, step, progress, mins, secs) {
        const weights = getWeights();
        const lastWeight = weights[step.exKey] || '';
        const sideLabel = step.side === 'pair' ? '↔ SUPERSET' : step.side === 'core' ? '🔥 CIRCUIT' : '💪 PRIMARY';
        ov.innerHTML = `
      <div class="wp-container">
        <div class="wp-header">
          <div class="wp-progress-bar"><div class="wp-progress-fill" style="width:${progress}%"></div></div>
          <div class="wp-top-row">
            <span class="wp-elapsed">${mins}:${String(secs).padStart(2, '0')}</span>
            <span class="wp-step-count">${state.stepIndex + 1} / ${state.steps.length}</span>
            <button class="wp-close-btn" onclick="WorkoutPlayer.close()">✕</button>
          </div>
        </div>
        <div class="wp-body">
          <div class="wp-side-label side-${step.side}">${sideLabel}</div>
          <div class="wp-exercise-label">${step.label}</div>
          <h2 class="wp-exercise-name">${step.name}</h2>
          <div class="wp-set-info">Set ${step.set} of ${step.totalSets} · Reps: <strong>${step.repRange}</strong></div>
          <div class="wp-target"><span class="wp-target-label">TARGET:</span> ${step.target}</div>
          <div class="wp-feel"><span class="wp-feel-label">FEEL IT:</span> ${step.feel}</div>
          <div class="wp-form-section">
            <div class="wp-form-title">FORM CHECK</div>
            <ul class="wp-form-list">${(step.form || []).map(f => `<li>${f}</li>`).join('')}</ul>
          </div>
          ${step.mistakes && step.mistakes.length ? `<div class="wp-mistakes"><div class="wp-mistakes-title">⚠️ COMMON MISTAKES</div><ul class="wp-mistakes-list">${step.mistakes.map(m => `<li>${m}</li>`).join('')}</ul></div>` : ''}
          <div class="wp-log-row">
            <div class="wp-log-field">
              <label>Weight (lbs)</label>
              <input type="number" id="wpWeight" value="${lastWeight}" placeholder="—" inputmode="decimal">
            </div>
            <div class="wp-log-field">
              <label>Reps Done</label>
              <input type="number" id="wpReps" value="" placeholder="${step.repRange}" inputmode="numeric">
            </div>
            <div class="wp-log-field">
              <label>RPE</label>
              <input type="number" id="wpRPE" value="" placeholder="8" min="1" max="10" inputmode="numeric">
            </div>
          </div>
        </div>
        <div class="wp-footer">
          <button class="wp-btn wp-btn-skip" onclick="WorkoutPlayer.skip()">SKIP</button>
          <button class="wp-btn wp-btn-next" onclick="WorkoutPlayer.logAndNext()">LOG & NEXT →</button>
        </div>
      </div>`;
    }

    function renderRest(ov, step, progress, mins, secs) {
        const duration = step.short ? 30 : REST_SECONDS;
        if (!state.timerRunning) {
            state.restRemaining = duration;
            state.timerRunning = true;
            state.timerInterval = setInterval(() => {
                state.restRemaining--;
                const el = document.getElementById('wpRestTime');
                if (el) {
                    const m = Math.floor(state.restRemaining / 60);
                    const s = state.restRemaining % 60;
                    el.textContent = `${m}:${String(s).padStart(2, '0')}`;
                    const ring = document.getElementById('wpRing');
                    if (ring) {
                        const pct = state.restRemaining / duration;
                        ring.style.strokeDashoffset = 440 - (440 * pct);
                    }
                }
                if (state.restRemaining <= 3 && state.restRemaining > 0) beep(660, 100, 1);
                if (state.restRemaining <= 0) {
                    clearInterval(state.timerInterval);
                    state.timerRunning = false;
                    beep(880, 200, 3);
                    advance();
                }
            }, 1000);
        }
        const rm = Math.floor(state.restRemaining / 60);
        const rs = state.restRemaining % 60;
        const nextStep = state.steps[state.stepIndex + 1];
        const nextLabel = nextStep ? `Next: ${nextStep.name} (${nextStep.label} Set ${nextStep.set})` : 'Final exercise complete!';
        ov.innerHTML = `
      <div class="wp-container wp-rest">
        <div class="wp-header">
          <div class="wp-progress-bar"><div class="wp-progress-fill" style="width:${progress}%"></div></div>
          <div class="wp-top-row">
            <span class="wp-elapsed">${mins}:${String(secs).padStart(2, '0')}</span>
            <span class="wp-step-count">${state.stepIndex + 1} / ${state.steps.length}</span>
            <button class="wp-close-btn" onclick="WorkoutPlayer.close()">✕</button>
          </div>
        </div>
        <div class="wp-body wp-body-rest">
          <div class="wp-rest-label">${step.short ? '⚡ MINIMAL REST' : '⏱️ REST — RECOVER'}</div>
          <div class="wp-timer-ring">
            <svg viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="70" fill="none" stroke="#1e1e32" stroke-width="6"/>
              <circle id="wpRing" cx="80" cy="80" r="70" fill="none" stroke="url(#timerGrad)" stroke-width="6"
                stroke-dasharray="440" stroke-dashoffset="0" stroke-linecap="round"
                transform="rotate(-90 80 80)"/>
              <defs><linearGradient id="timerGrad" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#00f0ff"/><stop offset="1" stop-color="#b400ff"/></linearGradient></defs>
            </svg>
            <div class="wp-timer-text" id="wpRestTime">${rm}:${String(rs).padStart(2, '0')}</div>
          </div>
          <div class="wp-rest-next">${nextLabel}</div>
          <div class="wp-rest-tip">Breathe. Shake out. Hydrate. You're ACTN3 TT — you need this rest.</div>
        </div>
        <div class="wp-footer">
          <button class="wp-btn wp-btn-skip" onclick="WorkoutPlayer.skipRest()">SKIP REST →</button>
        </div>
      </div>`;
    }

    function renderComplete(ov) {
        const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
        const mins = Math.floor(elapsed / 60);
        const totalSets = state.log.length;
        const totalReps = state.log.reduce((s, l) => s + (l.reps || 0), 0);
        const totalVol = state.log.reduce((s, l) => s + (l.reps || 0) * (l.weight || 0), 0);
        const avgRPE = totalSets > 0 ? (state.log.reduce((s, l) => s + (l.rpe || 0), 0) / totalSets).toFixed(1) : '—';

        saveLog({ workout: state.workoutName, date: new Date().toISOString(), duration: elapsed, sets: totalSets, reps: totalReps, volume: totalVol, avgRPE, entries: state.log });

        ov.innerHTML = `
      <div class="wp-container wp-complete">
        <div class="wp-body wp-body-complete">
          <div class="wp-complete-icon">🏆</div>
          <h2 class="wp-complete-title">WORKOUT COMPLETE</h2>
          <div class="wp-complete-name">${state.workoutName}</div>
          <div class="wp-complete-stats">
            <div class="wp-stat"><div class="wp-stat-val">${mins}</div><div class="wp-stat-label">MIN</div></div>
            <div class="wp-stat"><div class="wp-stat-val">${totalSets}</div><div class="wp-stat-label">SETS</div></div>
            <div class="wp-stat"><div class="wp-stat-val">${totalReps}</div><div class="wp-stat-label">REPS</div></div>
            <div class="wp-stat"><div class="wp-stat-val">${totalVol > 0 ? Math.round(totalVol).toLocaleString() : '—'}</div><div class="wp-stat-label">LBS VOL</div></div>
            <div class="wp-stat"><div class="wp-stat-val">${avgRPE}</div><div class="wp-stat-label">AVG RPE</div></div>
          </div>
          <p class="wp-complete-msg">Logged to history. Now eat within 30 min — 40-50g protein. Your inflammatory stack demands it.</p>
        </div>
        <div class="wp-footer">
          <button class="wp-btn wp-btn-next" onclick="WorkoutPlayer.close()">DONE ✓</button>
        </div>
      </div>`;
    }

    // ===== ACTIONS =====
    function logAndNext() {
        const step = state.steps[state.stepIndex];
        const w = parseFloat(document.getElementById('wpWeight')?.value) || 0;
        const r = parseInt(document.getElementById('wpReps')?.value) || 0;
        const rpe = parseInt(document.getElementById('wpRPE')?.value) || 0;
        if (w > 0) saveWeight(step.exKey, w);
        state.log.push({ name: step.name, set: step.set, weight: w, reps: r, rpe });
        beep(440, 80, 1);
        advance();
    }

    function advance() {
        if (state.timerInterval) { clearInterval(state.timerInterval); state.timerRunning = false; }
        state.stepIndex++;
        if (state.stepIndex >= state.steps.length) {
            renderComplete(getOverlay());
        } else {
            render();
        }
    }

    function skip() { advance(); }
    function skipRest() {
        if (state.timerInterval) { clearInterval(state.timerInterval); state.timerRunning = false; }
        advance();
    }

    // ===== PUBLIC API =====
    function startLifting(workoutIndex) {
        const workout = WORKOUTS.lifting[workoutIndex];
        state = {
            workoutName: workout.name, steps: buildLiftingSteps(workout),
            stepIndex: 0, timerRunning: false, timerInterval: null,
            startTime: Date.now(), log: []
        };
        document.body.style.overflow = 'hidden';
        render();
    }

    function startCore() {
        const core = WORKOUTS.core;
        state = {
            workoutName: core.name, steps: buildCoreSteps(core),
            stepIndex: 0, timerRunning: false, timerInterval: null,
            startTime: Date.now(), log: []
        };
        document.body.style.overflow = 'hidden';
        render();
    }

    function close() {
        if (state?.timerInterval) clearInterval(state.timerInterval);
        state = null;
        document.body.style.overflow = '';
        getOverlay().classList.remove('active');
        getOverlay().innerHTML = '';
    }

    return { startLifting, startCore, close, logAndNext, skip, skipRest };
})();
