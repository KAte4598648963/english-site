/* Lesson timer (60 min). State per lesson: eng:<lessonId>:_timer, based on timestamps so it survives reloads. */
(function () {
  'use strict';
  const ENG = window.ENG;
  const h = ENG.h;
  const DURATION = 60 * 60 * 1000;

  let el = null;
  let lid = null;
  let loop = null;
  let lastStatus = null;

  const get = () => ENG.store.get(lid, '_timer', { status: 'idle' });
  const set = (s) => ENG.store.set(lid, '_timer', s);

  function remaining(s) {
    if (s.status === 'running') return Math.max(0, s.endAt - Date.now());
    if (s.status === 'paused') return s.remaining;
    if (s.status === 'finished') return 0;
    return DURATION;
  }
  function fmt(ms) {
    const t = Math.ceil(ms / 1000);
    return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
  }

  function chime() {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      const ctx = new AC();
      [660, 880, 990].forEach((f, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.frequency.value = f;
        o.type = 'sine';
        g.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.25);
        g.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + i * 0.25 + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.25 + 0.6);
        o.connect(g).connect(ctx.destination);
        o.start(ctx.currentTime + i * 0.25);
        o.stop(ctx.currentTime + i * 0.25 + 0.65);
      });
    } catch (e) {
      /* no audio */
    }
  }

  const btn = (icon, label, fn) => h('button', { class: 'icon-btn sm', type: 'button', title: label, 'aria-label': label, onclick: fn }, ENG.icon(icon));

  function render() {
    if (!el) return;
    const s = get();
    lastStatus = s.status;
    if (s.status === 'idle') {
      el.replaceChildren(
        h(
          'button',
          {
            class: 'btn btn-primary timer-start',
            type: 'button',
            onclick: () => {
              set({ status: 'running', endAt: Date.now() + DURATION });
              render();
            }
          },
          ENG.icon('clock'),
          h('span', { class: 'lg-only' }, 'Запустити час уроку — 60 хв'),
          h('span', { class: 'sm-only' }, '60 хв')
        )
      );
      return;
    }
    const ms = remaining(s);
    const controls = [];
    if (s.status === 'running')
      controls.push(
        btn('pause', 'Пауза', () => {
          set({ status: 'paused', remaining: remaining(get()) });
          render();
        })
      );
    if (s.status === 'paused')
      controls.push(
        btn('play', 'Продовжити', () => {
          set({ status: 'running', endAt: Date.now() + get().remaining });
          render();
        })
      );
    controls.push(
      btn('reset', 'Скинути таймер', () => {
        set({ status: 'idle' });
        render();
      })
    );
    el.replaceChildren(
      h(
        'div',
        { class: 'timer-pill ' + s.status, role: 'timer', 'aria-live': 'off' },
        ENG.icon('clock'),
        h('span', { class: 'timer-time' }, s.status === 'finished' ? 'Час вийшов' : fmt(ms)),
        controls,
        h('span', { class: 'timer-bar' }, h('span', { style: { width: (ms / DURATION) * 100 + '%' } }))
      )
    );
  }

  function tick() {
    if (!el) return;
    const s = get();
    if (s.status !== lastStatus) return render();
    if (s.status !== 'running') return;
    const ms = remaining(s);
    if (ms <= 0) {
      set({ status: 'finished' });
      render();
      chime();
      ENG.toast('⏰ 60 хвилин минуло — час уроку завершено!', 'ok');
      return;
    }
    const t = el.querySelector('.timer-time');
    const b = el.querySelector('.timer-bar > span');
    if (t) t.textContent = fmt(ms);
    if (b) b.style.width = (ms / DURATION) * 100 + '%';
  }

  ENG.Timer = {
    DURATION,
    mount(container, lessonId) {
      ENG.Timer.unmount();
      el = h('div', { class: 'timer' });
      lid = lessonId;
      container.appendChild(el);
      render();
      loop = setInterval(tick, 500);
    },
    unmount() {
      clearInterval(loop);
      loop = null;
      el = null;
    },
    reset(lessonId) {
      ENG.store.del(lessonId, '_timer');
      if (lessonId === lid) render();
    }
  };
})();
