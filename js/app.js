/* App shell: sidebar menu, hash router, pages (home / level / module / lesson), lesson player. */
(function () {
  'use strict';
  const ENG = window.ENG;
  const h = ENG.h;
  const store = ENG.store;

  const SECTIONS = {
    reading: { name: 'Reading', ua: 'Читання', emoji: '📖' },
    vocabulary: { name: 'Vocabulary', ua: 'Лексика', emoji: '🗂️' },
    grammar: { name: 'Grammar', ua: 'Граматика', emoji: '🧩' },
    listening: { name: 'Listening', ua: 'Аудіювання', emoji: '🎧' },
    writing: { name: 'Writing', ua: 'Письмо', emoji: '✍️' },
    speaking: { name: 'Speaking', ua: 'Говоріння', emoji: '🗣️' }
  };
  ENG.SECTIONS = SECTIONS;

  const $ = (id) => document.getElementById(id);
  const levels = () => ENG.registry || [];

  /* ---------------- Registry helpers ---------------- */
  function find(levelId, modId, lessonSlug) {
    const level = levels().find((l) => l.id === levelId);
    const mod = level && modId ? level.modules.find((m) => m.id === modId) : null;
    const entry = mod && lessonSlug ? mod.lessons.find((l) => l.slug === lessonSlug) : null;
    return { level, mod, entry };
  }
  const lessonHref = (level, mod, entry) => '#/' + level.id + '/' + mod.id + '/' + entry.slug;
  function allLessons() {
    const out = [];
    levels().forEach((level) => level.modules.forEach((mod) => mod.lessons.forEach((entry) => out.push({ level, mod, entry }))));
    return out;
  }
  const summary = (lessonId) => store.get(lessonId, '_summary', null);
  function pct(lessonId) {
    const s = summary(lessonId);
    return s && s.total ? Math.round((s.done / s.total) * 100) : 0;
  }
  function levelStats(level) {
    let lessons = 0;
    let p = 0;
    level.modules.forEach((m) =>
      m.lessons.forEach((e) => {
        lessons++;
        p += pct(e.id);
      })
    );
    return { lessons, pct: lessons ? Math.round(p / lessons) : 0 };
  }

  const loading = {};
  ENG.loadLesson = function (entry) {
    if (ENG.lessons[entry.id]) return Promise.resolve(ENG.lessons[entry.id]);
    if (loading[entry.id]) return loading[entry.id];
    loading[entry.id] = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = entry.file + '?v=' + encodeURIComponent(ENG.version);
      s.onload = () => (ENG.lessons[entry.id] ? resolve(ENG.lessons[entry.id]) : reject(new Error('Файл не зареєстрував урок ' + entry.id)));
      s.onerror = () => reject(new Error('Не вдалося завантажити ' + entry.file));
      document.head.appendChild(s);
    }).finally(() => delete loading[entry.id]);
    return loading[entry.id];
  };

  /* ---------------- Sidebar menu ---------------- */
  const hoverMQ = window.matchMedia('(hover: hover) and (min-width: 960px)');

  function ring(p) {
    return h('span', { class: 'ring' + (p >= 100 ? ' full' : ''), style: { '--p': p }, title: p + '%' });
  }

  function buildMenu() {
    const nav = $('levelNav');
    const route = parse();
    nav.replaceChildren(
      ...levels().map((level) => {
        const stats = levelStats(level);
        const isCur = route[0] === level.id;
        const li = h('li', { class: 'lvl lvl-' + level.id + (level.advanced ? ' advanced' : '') + (isCur ? ' current open' : '') });
        const head = h(
          'button',
          { class: 'lvl-head', type: 'button', 'aria-expanded': String(isCur) },
          h('span', { class: 'lvl-badge' }, level.name),
          h('span', { class: 'lvl-text' }, h('span', { class: 'lvl-title' }, level.title), h('span', { class: 'lvl-ua' }, level.ua)),
          stats.lessons ? ring(stats.pct) : null,
          ENG.icon('down', 'chev')
        );
        const mods = h(
          'ul',
          { class: 'mods' },
          h('li', { class: 'mods-title' }, h('a', { href: '#/' + level.id }, level.name + ' — ' + level.title)),
          level.modules.length
            ? level.modules.map((mod) => {
                const modCur = isCur && route[1] === mod.id;
                return h(
                  'li',
                  { class: 'mod' + (modCur ? ' current' : '') },
                  h('a', { class: 'mod-link', href: '#/' + level.id + '/' + mod.id }, h('span', { class: 'mod-num' }, mod.num || ''), h('span', null, mod.title)),
                  h(
                    'ul',
                    { class: 'lessons' },
                    mod.lessons.length
                      ? mod.lessons.map((entry) => {
                          const p = pct(entry.id);
                          return h(
                            'li',
                            null,
                            h(
                              'a',
                              { class: 'les-link' + (modCur && route[2] === entry.slug ? ' active' : ''), href: lessonHref(level, mod, entry) },
                              h('span', { class: 'les-title' }, entry.title),
                              p ? h('span', { class: 'les-pct' + (p >= 100 ? ' full' : '') }, p >= 100 ? '✓' : p + '%') : null
                            )
                          );
                        })
                      : h('li', { class: 'soon' }, 'Уроки скоро')
                  )
                );
              })
            : h('li', { class: 'soon' }, level.advanced ? 'Просунутий трек — модулі скоро' : 'Модулі скоро')
        );
        head.addEventListener('click', () => {
          const open = !li.classList.contains('open');
          li.classList.toggle('open', open);
          li.classList.remove('fly');
          head.setAttribute('aria-expanded', String(open));
        });
        li.addEventListener('mouseenter', () => {
          if (!hoverMQ.matches || li.classList.contains('open')) return;
          const r = li.getBoundingClientRect();
          const sb = $('sidebar').getBoundingClientRect();
          li.classList.add('fly');
          mods.style.left = sb.right - 6 + 'px';
          mods.style.top = Math.max(8, Math.min(r.top, window.innerHeight - mods.offsetHeight - 8)) + 'px';
        });
        li.addEventListener('mouseleave', () => {
          li.classList.remove('fly');
          mods.style.left = mods.style.top = '';
        });
        li.append(head, mods);
        return li;
      })
    );
  }

  function setCrumbs(items) {
    $('crumbs').replaceChildren(
      ...items.flatMap((it, i) => [i ? h('span', { class: 'crumb-sep' }, '›') : null, it.href ? h('a', { href: it.href }, it.text) : h('span', { class: 'crumb-cur' }, it.text)]).filter(Boolean)
    );
  }

  /* ---------------- Pages ---------------- */
  function pageHome() {
    setCrumbs([{ text: 'Головна' }]);
    const last = store.app('last', null);
    const lastHit = last && find(last.level, last.mod, last.slug);
    return h(
      'div',
      { class: 'page home' },
      h(
        'section',
        { class: 'hero' },
        h('div', { class: 'hero-kicker' }, 'English Studio'),
        h('h1', null, 'Вчимо англійську спокійно й системно'),
        h('p', { class: 'hero-sub' }, 'Обери рівень у меню ліворуч. Кожен урок — Reading, Vocabulary, Grammar, Listening, Writing і Speaking з інтерактивними вправами. Прогрес зберігається у вашому браузері.'),
        lastHit && lastHit.entry
          ? h('a', { class: 'btn btn-primary lg', href: lessonHref(lastHit.level, lastHit.mod, lastHit.entry) }, ENG.icon('play'), 'Продовжити: ' + lastHit.entry.title)
          : null
      ),
      h(
        'section',
        { class: 'level-grid' },
        levels().map((level) => {
          const st = levelStats(level);
          return h(
            'a',
            { class: 'level-card lvl-' + level.id + (level.advanced ? ' advanced' : ''), href: '#/' + level.id },
            h('div', { class: 'lc-top' }, h('span', { class: 'lvl-badge big' }, level.name), st.lessons ? ring(st.pct) : null),
            h('div', { class: 'lc-title' }, level.title),
            h('div', { class: 'lc-ua' }, level.ua),
            h('div', { class: 'lc-meta' }, level.advanced ? 'Просунутий трек' : st.lessons ? 'Уроків: ' + st.lessons : 'Скоро')
          );
        })
      )
    );
  }

  function lessonCard(level, mod, entry) {
    const p = pct(entry.id);
    return h(
      'a',
      { class: 'lesson-card', href: lessonHref(level, mod, entry) },
      h('div', { class: 'lcard-main' }, h('div', { class: 'lcard-title' }, entry.title), entry.ua ? h('div', { class: 'lcard-ua' }, entry.ua) : null),
      h('div', { class: 'lcard-side' }, ring(p), h('span', { class: 'lcard-pct' }, p ? p + '%' : 'Почати'))
    );
  }

  function pageLevel(level) {
    setCrumbs([{ text: 'Головна', href: '#/' }, { text: level.name + ' ' + level.title }]);
    return h(
      'div',
      { class: 'page level-page lvl-' + level.id + (level.advanced ? ' advanced' : '') },
      h('header', { class: 'page-head' }, h('span', { class: 'lvl-badge big' }, level.name), h('div', null, h('h1', null, level.title), h('p', { class: 'muted' }, level.desc || level.ua))),
      level.modules.length
        ? level.modules.map((mod) =>
            h(
              'section',
              { class: 'module-block' },
              h('h2', null, h('a', { href: '#/' + level.id + '/' + mod.id }, (mod.num ? 'Module ' + mod.num + ' · ' : '') + mod.title)),
              mod.ua ? h('p', { class: 'muted' }, mod.ua) : null,
              h('div', { class: 'lesson-list' }, mod.lessons.length ? mod.lessons.map((e) => lessonCard(level, mod, e)) : h('p', { class: 'muted' }, 'Уроки скоро з’являться'))
            )
          )
        : h('div', { class: 'empty-state' }, h('div', { class: 'big-emoji' }, level.advanced ? '🎓' : '🌱'), h('p', null, level.advanced ? 'Просунутий трек для власниці сайту. Модулі додаються поступово.' : 'Модулі цього рівня скоро з’являться.'))
    );
  }

  function pageModule(level, mod) {
    setCrumbs([{ text: 'Головна', href: '#/' }, { text: level.name, href: '#/' + level.id }, { text: mod.title }]);
    return h(
      'div',
      { class: 'page module-page lvl-' + level.id + (level.advanced ? ' advanced' : '') },
      h('header', { class: 'page-head' }, h('span', { class: 'lvl-badge big' }, level.name), h('div', null, h('div', { class: 'kicker' }, mod.num ? 'Module ' + mod.num : 'Module'), h('h1', null, mod.title), mod.ua ? h('p', { class: 'muted' }, mod.ua) : null)),
      h('div', { class: 'lesson-list' }, mod.lessons.length ? mod.lessons.map((e) => lessonCard(level, mod, e)) : h('p', { class: 'muted' }, 'Уроки скоро з’являться'))
    );
  }

  function pageNotFound() {
    setCrumbs([{ text: 'Головна', href: '#/' }, { text: 'Не знайдено' }]);
    return h('div', { class: 'page' }, h('div', { class: 'empty-state' }, h('div', { class: 'big-emoji' }, '🧭'), h('p', null, 'Такої сторінки немає.'), h('a', { class: 'btn btn-primary', href: '#/' }, 'На головну')));
  }

  /* ---------------- Lesson player ---------------- */
  function LessonView(level, mod, entry, lesson) {
    const lid = lesson.id;
    const flat = [];
    const seen = {};
    (lesson.sections || []).forEach((sec) =>
      (sec.exercises || []).forEach((ex) => {
        if (!ex.id || ex.id[0] === '_') console.error('[eng] exercise without valid id in', lid, ex);
        if (seen[ex.id]) console.error('[eng] duplicate exercise id', ex.id, 'in', lid);
        seen[ex.id] = 1;
        flat.push({ ex, sec });
      })
    );
    const total = flat.length;
    const loadState = (exId) => store.get(lid, exId, {});
    const isDone = (exId) => !!loadState(exId).done;

    function saveSummary() {
      const done = flat.filter((f) => isDone(f.ex.id)).length;
      store.set(lid, '_summary', { done, total, t: Date.now() });
    }
    saveSummary();
    store.setApp('last', { level: level.id, mod: mod.id, slug: entry.slug });

    const posId = store.get(lid, '_pos', null);
    let pos = posId === '_summary' ? total : Math.max(0, flat.findIndex((f) => f.ex.id === posId));

    const tools = h('div', { class: 'lesson-tools' });
    const timerSlot = h('div', { class: 'timer-slot' });
    tools.appendChild(timerSlot);

    const head = h(
      'header',
      { class: 'lesson-head' },
      h(
        'div',
        { class: 'lesson-title' },
        h('div', { class: 'kicker' }, h('span', { class: 'lvl-badge' }, level.name), (mod.num ? ' Module ' + mod.num : '') + ' · ' + mod.title),
        h('h1', null, lesson.title),
        lesson.subtitle ? h('p', { class: 'muted' }, lesson.subtitle) : null
      ),
      tools
    );

    const steps = h('nav', { class: 'steps', 'aria-label': 'Вправи уроку' });
    const circles = [];
    let group = null;
    let lastSec = null;
    flat.forEach((f, i) => {
      if (f.sec !== lastSec) {
        const meta = SECTIONS[f.sec.id] || { name: f.sec.title || f.sec.id };
        group = h('div', { class: 'step-group sec-' + f.sec.id }, h('div', { class: 'step-label' }, f.sec.title || meta.name), h('div', { class: 'step-dots' }));
        steps.appendChild(group);
        lastSec = f.sec;
      }
      const c = h('button', { class: 'dot', type: 'button', title: f.ex.title || 'Вправа ' + (i + 1), 'aria-label': 'Вправа ' + (i + 1) + ': ' + (f.ex.title || ''), onclick: () => go(i) }, String(i + 1));
      circles.push(c);
      group.lastChild.appendChild(c);
    });
    const finishDot = h('button', { class: 'dot dot-finish', type: 'button', title: 'Підсумок', 'aria-label': 'Підсумок уроку', onclick: () => go(total) }, ENG.icon('flag'));
    steps.appendChild(h('div', { class: 'step-group sec-finish' }, h('div', { class: 'step-label' }, 'Finish'), h('div', { class: 'step-dots' }, finishDot)));

    const stage = h('div', { class: 'stage' });
    const prevBtn = h('button', { class: 'btn btn-ghost nav-btn', type: 'button', onclick: () => go(pos - 1) }, ENG.icon('left'), 'Назад');
    const nextBtn = h('button', { class: 'btn btn-primary nav-btn', type: 'button', onclick: () => onNext() });
    const posLabel = h('span', { class: 'nav-pos' });
    const nav = h('div', { class: 'lesson-nav' }, prevBtn, posLabel, nextBtn);

    const root = h('div', { class: 'lesson lvl-' + level.id + (level.advanced ? ' advanced' : '') }, head, steps, stage, nav);

    const allIdx = allLessons();
    const myIdx = allIdx.findIndex((x) => x.entry.id === entry.id);
    const nextLesson = allIdx[myIdx + 1] || null;

    function onNext() {
      if (pos < total) go(pos + 1);
      else if (nextLesson) location.hash = lessonHref(nextLesson.level, nextLesson.mod, nextLesson.entry).slice(1);
      else location.hash = '/' + level.id + '/' + mod.id;
    }

    function paintSteps() {
      circles.forEach((c, i) => {
        const st = loadState(flat[i].ex.id);
        c.classList.toggle('done', !!st.done);
        c.classList.toggle('partial', !!st.done && st.total > 0 && st.score < st.total);
        c.classList.toggle('current', i === pos);
        c.setAttribute('aria-current', i === pos ? 'step' : 'false');
      });
      finishDot.classList.toggle('current', pos === total);
      finishDot.classList.toggle('done', flat.every((f) => isDone(f.ex.id)));
      prevBtn.disabled = pos === 0;
      posLabel.textContent = pos < total ? pos + 1 + ' / ' + total : 'Підсумок';
      nextBtn.replaceChildren(
        ...(pos < total - 1 ? ['Далі', ENG.icon('right')] : pos === total - 1 ? ['Завершити', ENG.icon('flag')] : nextLesson ? ['Наступний урок', ENG.icon('right')] : ['До модуля', ENG.icon('right')])
      );
      const cur = pos < total ? circles[pos] : finishDot;
      if (cur && steps.scrollWidth > steps.clientWidth) {
        const left = cur.offsetLeft - steps.clientWidth / 2;
        steps.scrollTo({ left, behavior: 'smooth' });
      }
    }

    function go(i, noScroll) {
      ENG.speech.stop();
      pos = Math.max(0, Math.min(total, i));
      store.set(lid, '_pos', pos < total ? flat[pos].ex.id : '_summary');
      stage.replaceChildren(pos < total ? renderExercise(pos) : renderSummary());
      paintSteps();
      if (!noScroll) {
        const y = steps.getBoundingClientRect().top + window.scrollY - 70;
        if (window.scrollY > y) window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    function renderExercise(i) {
      const { ex, sec } = flat[i];
      const meta = SECTIONS[sec.id] || { name: sec.title || sec.id, emoji: '•' };
      const state = loadState(ex.id);
      const result = h('div', { class: 'ex-result' });
      const actions = h('div', { class: 'ex-actions' });
      const api = {
        lesson,
        ex,
        state,
        save: () => store.set(lid, ex.id, state),
        finish(score, tot) {
          state.done = true;
          state.checked = true;
          state.score = score;
          state.total = tot;
          state.best = Math.max(state.best || 0, score);
          if (!state.completedAt) state.completedAt = Date.now();
          api.save();
          saveSummary();
          paintSteps();
          showResult();
          buildMenu();
        }
      };
      const type = ENG.types[ex.type];
      if (!type) return h('article', { class: 'ex-card' }, h('p', { class: 'warn-note' }, 'Невідомий тип вправи: ' + ex.type));
      const r = type.render(ex, api);

      function showResult() {
        actions.replaceChildren();
        result.replaceChildren();
        if (!state.checked) {
          if (r.check) actions.appendChild(checkBtn);
          return;
        }
        const perfect = !state.total || state.score >= state.total;
        result.appendChild(
          h(
            'div',
            { class: 'result-badge ' + (perfect ? 'ok' : 'part') },
            h('span', { class: 'rb-emoji' }, perfect ? '🎉' : '💪'),
            h('span', null, perfect ? (state.total > 1 ? 'Чудово! ' + state.score + ' / ' + state.total : 'Виконано!') : 'Результат: ' + state.score + ' / ' + state.total + ' — можна спробувати ще')
          )
        );
        if (!r.noRetry) actions.appendChild(h('button', { class: 'btn btn-ghost', type: 'button', onclick: retry }, ENG.icon('reset'), 'Спробувати ще'));
        if (i < total) actions.appendChild(h('button', { class: 'btn btn-primary', type: 'button', onclick: () => go(i + 1) }, i < total - 1 ? 'Наступна вправа' : 'До підсумку', ENG.icon('right')));
        card.querySelectorAll('.transcript').forEach((t) => t.classList.add('show'));
      }
      function retry() {
        const keep = { done: state.done, score: state.score, total: state.total, best: state.best, completedAt: state.completedAt };
        store.set(lid, ex.id, keep);
        stage.replaceChildren(renderExercise(i));
      }
      const checkBtn = h(
        'button',
        {
          class: 'btn btn-primary',
          type: 'button',
          onclick: () => {
            if (r.ready && !r.ready()) return ENG.toast('Спершу дай відповідь на всі пункти 🙂');
            state.checked = true;
            const res = r.check();
            api.finish(res.score, res.total);
          }
        },
        ENG.icon('check'),
        'Перевірити'
      );

      const secIdx = sec.exercises.indexOf(ex) + 1;
      const card = h(
        'article',
        { class: 'ex-card sec-' + sec.id },
        h(
          'header',
          { class: 'ex-head' },
          h('div', { class: 'sec-chip' }, h('span', null, meta.emoji), h('span', null, (sec.title || meta.name) + ' · ' + secIdx + '/' + sec.exercises.length)),
          h('h2', { class: 'ex-title' }, ex.title || ''),
          ex.instructions ? h('p', { class: 'ex-instr' }, ex.instructions) : null
        ),
        ex.passage ? renderPassage(ex.passage) : null,
        ex.audio ? renderAudio(ex.audio, !!state.checked) : null,
        h('div', { class: 'ex-body' }, r.el),
        h('footer', { class: 'ex-foot' }, result, actions)
      );
      if (state.checked && r.check) r.check();
      showResult();
      return card;
    }

    function renderSummary() {
      const bySec = (lesson.sections || []).map((sec) => {
        let done = 0;
        let score = 0;
        let tot = 0;
        sec.exercises.forEach((ex) => {
          const st = loadState(ex.id);
          if (st.done) done++;
          if (st.total) {
            score += st.score || 0;
            tot += st.total;
          }
        });
        return { sec, done, n: sec.exercises.length, score, tot };
      });
      const doneAll = bySec.reduce((a, b) => a + b.done, 0);
      const p = total ? Math.round((doneAll / total) * 100) : 0;
      return h(
        'article',
        { class: 'ex-card summary' },
        h('div', { class: 'summary-top' }, h('div', { class: 'big-ring', style: { '--p': p } }, h('span', null, p + '%')), h('div', null, h('h2', null, p >= 100 ? 'Урок завершено! 🎉' : 'Підсумок уроку'), h('p', { class: 'muted' }, 'Виконано вправ: ' + doneAll + ' з ' + total))),
        h(
          'div',
          { class: 'summary-grid' },
          bySec.map((s) => {
            const meta = SECTIONS[s.sec.id] || { name: s.sec.id, emoji: '•' };
            return h(
              'div',
              { class: 'sum-item sec-' + s.sec.id },
              h('div', { class: 'sum-name' }, meta.emoji + ' ' + (s.sec.title || meta.name)),
              h('div', { class: 'sum-val' }, s.done + ' / ' + s.n + ' вправ'),
              s.tot ? h('div', { class: 'muted small' }, 'Бали: ' + s.score + ' / ' + s.tot) : null,
              h('div', { class: 'progress' }, h('span', { style: { width: (s.n ? (s.done / s.n) * 100 : 0) + '%' } }))
            );
          })
        ),
        flat.some((f) => !isDone(f.ex.id))
          ? h(
              'div',
              { class: 'summary-todo' },
              h('div', { class: 'mini-label' }, 'Ще не виконано:'),
              h(
                'div',
                { class: 'todo-list' },
                flat.map((f, i) => (isDone(f.ex.id) ? null : h('button', { class: 'chip', type: 'button', onclick: () => go(i) }, i + 1 + '. ' + (f.ex.title || ''))))
              )
            )
          : null
      );
    }

    function renderPassage(p) {
      return h(
        'details',
        { class: 'passage', open: true },
        h('summary', null, ENG.icon('eye'), p.title || 'Text'),
        h('div', { class: 'passage-text' }, String(p.text).split(/\n\s*\n/).map((para) => h('p', null, para.trim())))
      );
    }

    function renderAudio(a, revealed) {
      const sp = ENG.speech;
      const lines = a.lines || [{ text: a.text }];
      const speakers = [];
      lines.forEach((l) => l.who && speakers.indexOf(l.who) < 0 && speakers.push(l.who));
      // voice gender per speaker: guess from the name, otherwise make them differ
      const genders = {};
      speakers.forEach((w) => (genders[w] = ENG.speakerGender(w)));
      speakers.forEach((w, i) => {
        if (genders[w]) return;
        const other = speakers.find((o) => o !== w && genders[o]);
        genders[w] = other ? (genders[other] === 'f' ? 'm' : 'f') : i % 2 ? 'm' : 'f';
      });
      const genderOfLine = (l) => (l.who ? genders[l.who] : 'f');

      let idx = 0;
      let playing = false;
      let single = -1;
      let rate = Number(store.app('audioRate', 1)) || 1;
      let token = 0;

      /* chat bubbles */
      const bubbles = lines.map((l, i) => {
        const si = Math.max(0, speakers.indexOf(l.who));
        const right = speakers.length > 1 && si % 2 === 1;
        const b = h(
          'button',
          { class: 'bubble' + (right ? ' right' : '') + ' spk-' + (si % 4), type: 'button', title: 'Прослухати цю репліку' },
          l.who ? h('span', { class: 'avatar', 'aria-hidden': 'true' }, l.who.trim()[0].toUpperCase()) : h('span', { class: 'avatar', 'aria-hidden': 'true' }, ENG.icon('volume')),
          h('span', { class: 'bubble-body' }, l.who ? h('span', { class: 'bubble-name' }, l.who) : null, h('span', { class: 'bubble-text' }, l.text))
        );
        b.addEventListener('click', () => playSingle(i));
        return b;
      });
      const chat = h('div', { class: 'chat transcript' + (revealed ? ' show' : '') }, bubbles);

      /* controls */
      const playBtn = h('button', { class: 'play-btn', type: 'button' });
      const restartBtn = h('button', { class: 'icon-btn', type: 'button', title: 'З початку', 'aria-label': 'З початку' }, ENG.icon('reset'));
      const speeds = [0.75, 1, 1.25];
      const speedBtns = speeds.map((r) =>
        h('button', { class: 'seg', type: 'button', 'aria-pressed': String(r === rate), onclick: () => setRate(r) }, r + '×')
      );
      const trBtn = h('button', { class: 'btn btn-ghost sm', type: 'button', onclick: () => chat.classList.toggle('show') }, ENG.icon('eye'), 'Текст');
      const voiceBtn = h('button', { class: 'icon-btn', type: 'button', title: 'Голоси', 'aria-label': 'Налаштувати голоси' }, ENG.icon('mic'));
      const counter = h('span', { class: 'audio-count' });
      const barFill = h('span');
      const bar = h('div', { class: 'audio-bar' }, barFill);

      function setRate(r) {
        rate = r;
        store.setApp('audioRate', r);
        speedBtns.forEach((b, i) => b.setAttribute('aria-pressed', String(speeds[i] === r)));
        if (playing) play(idx);
      }
      function paint() {
        playBtn.replaceChildren(ENG.icon(playing ? 'pause' : 'play'));
        playBtn.setAttribute('aria-label', playing ? 'Пауза' : 'Слухати');
        playBtn.classList.toggle('on', playing);
        const cur = single >= 0 ? single : idx;
        bubbles.forEach((b, i) => {
          b.classList.toggle('speaking', (playing || single >= 0) && i === cur);
          b.classList.toggle('done', single < 0 && i < idx);
        });
        counter.textContent = Math.min(idx + (playing ? 1 : 0), lines.length) + ' / ' + lines.length;
        barFill.style.width = (Math.min(idx, lines.length) / lines.length) * 100 + '%';
      }
      function scrollTo(i) {
        const b = bubbles[i];
        if (!b) return;
        const r = b.getBoundingClientRect();
        if (r.top < 120 || r.bottom > window.innerHeight - 20) b.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
      function play(from) {
        if (!sp.supported) return ENG.toast('Браузер не підтримує озвучення — відкрий текст');
        single = -1;
        idx = from;
        token = sp.newToken();
        playing = true;
        const t = token;
        const step = () => {
          if (!sp.isCurrent(t)) return;
          if (idx >= lines.length) {
            playing = false;
            idx = lines.length;
            paint();
            return;
          }
          paint();
          scrollTo(idx);
          sp.say(lines[idx].text, {
            gender: genderOfLine(lines[idx]),
            rate,
            onend: () => {
              if (!sp.isCurrent(t)) return;
              idx++;
              setTimeout(step, 350);
            }
          });
        };
        step();
      }
      function pause() {
        sp.stop();
        playing = false;
        paint();
      }
      function playSingle(i) {
        if (!sp.supported) return ENG.toast('Браузер не підтримує озвучення');
        token = sp.newToken();
        const t = token;
        playing = false;
        single = i;
        paint();
        sp.say(lines[i].text, {
          gender: genderOfLine(lines[i]),
          rate,
          onend: () => {
            if (!sp.isCurrent(t)) return;
            single = -1;
            paint();
          }
        });
      }
      playBtn.addEventListener('click', () => (playing ? pause() : play(idx >= lines.length ? 0 : idx)));
      restartBtn.addEventListener('click', () => play(0));

      /* voice settings */
      const panel = h('div', { class: 'voice-panel', hidden: true });
      function buildPanel() {
        const list = sp.voices();
        const saved = store.app('voices', {});
        const natural = list.some((v) => sp.isNatural(v));
        const row = (g, label) => {
          const sel = h(
            'select',
            { class: 'voice-select', 'aria-label': label },
            h('option', { value: '' }, 'Авто — найкращий'),
            list.map((v) => h('option', { value: v.name, selected: saved[g] === v.name }, (sp.isNatural(v) ? '★ ' : '') + v.name.replace(/^(Microsoft|Google)\s/, '$1 ') + ' · ' + v.lang))
          );
          sel.addEventListener('change', () => {
            const cur = store.app('voices', {});
            if (sel.value) cur[g] = sel.value;
            else delete cur[g];
            store.setApp('voices', cur);
            test(g);
          });
          const test = (gg) => {
            sp.stop();
            sp.say(gg === 'm' ? 'Hello! This is the second voice.' : 'Hi there! This is how I sound.', { gender: gg, rate });
          };
          return h('div', { class: 'voice-row' }, h('span', { class: 'voice-label' }, label), sel, h('button', { class: 'icon-btn sm', type: 'button', title: 'Прослухати', onclick: () => test(g) }, ENG.icon('play')));
        };
        panel.replaceChildren(
          row('f', 'Голос 1 (жіночий)'),
          row('m', 'Голос 2 (чоловічий)'),
          h(
            'p',
            { class: 'muted small voice-note' },
            !list.length
              ? 'Голоси ще завантажуються або недоступні в цьому браузері.'
              : natural
              ? '★ — природні (нейронні) голоси. Вибір запам’ятовується для всіх уроків.'
              : 'На цьому пристрої немає природних голосів. Найкраще звучить у Chrome або Edge — там є голоси «Google» і «Natural».'
          )
        );
      }
      voiceBtn.addEventListener('click', () => {
        buildPanel();
        panel.hidden = !panel.hidden;
        voiceBtn.classList.toggle('active', !panel.hidden);
      });
      document.addEventListener('eng:voices', () => !panel.hidden && buildPanel());

      paint();
      const subtitle = !sp.supported ? 'Озвучення недоступне в цьому браузері' : speakers.length > 1 ? speakers.length + ' голоси · натисни на репліку, щоб почути її ще раз' : 'Натисни на текст, щоб почути його ще раз';
      return h(
        'div',
        { class: 'audio-box player' },
        h(
          'div',
          { class: 'player-head' },
          h('span', { class: 'audio-ico' }, ENG.icon('volume')),
          h('div', { class: 'audio-title' }, a.title || 'Audio', h('span', { class: 'muted small' }, subtitle)),
          voiceBtn
        ),
        h(
          'div',
          { class: 'player-ctrl' },
          playBtn,
          restartBtn,
          h('div', { class: 'audio-progress' }, bar, counter),
          h('div', { class: 'segs', role: 'group', 'aria-label': 'Швидкість' }, speedBtns),
          trBtn
        ),
        panel,
        chat,
        h('div', { class: 'muted small transcript-note' }, 'Текст розмитий: спробуй спершу зрозуміти на слух. Він відкриється після перевірки або кнопкою «Текст».')
      );
    }

    // toolbar & timer
    ENG.Timer.mount(timerSlot, lid);
    ENG.Toolbar.mount(tools, { lesson, level, onReset: () => route() });

    go(pos, true);
    return root;
  }

  /* ---------------- Router ---------------- */
  function parse() {
    return location.hash
      .replace(/^#\/?/, '')
      .split(/[/?]/)
      .filter(Boolean)
      .map(decodeURIComponent);
  }

  let routeToken = 0;
  async function route() {
    const token = ++routeToken;
    ENG.Timer.unmount();
    ENG.Toolbar.unmount();
    ENG.speech.stop();
    closeSidebar();
    const view = $('view');
    const [lv, md, ls] = parse();
    const { level, mod, entry } = find(lv, md, ls);
    buildMenu();
    let page;
    if (!lv) page = pageHome();
    else if (!level) page = pageNotFound();
    else if (!md) page = pageLevel(level);
    else if (!mod) page = pageNotFound();
    else if (!ls) page = pageModule(level, mod);
    else if (!entry) page = pageNotFound();
    else {
      setCrumbs([{ text: level.name, href: '#/' + level.id }, { text: mod.title, href: '#/' + level.id + '/' + mod.id }, { text: entry.title }]);
      view.replaceChildren(h('div', { class: 'loading' }, h('span', { class: 'spinner' }), 'Завантажуємо урок…'));
      try {
        const lesson = await ENG.loadLesson(entry);
        if (token !== routeToken) return;
        page = LessonView(level, mod, entry, lesson);
      } catch (err) {
        if (token !== routeToken) return;
        console.error(err);
        page = h('div', { class: 'page' }, h('div', { class: 'empty-state' }, h('div', { class: 'big-emoji' }, '⚠️'), h('p', null, String(err.message || err))));
      }
    }
    document.body.dataset.level = level ? level.id : '';
    view.replaceChildren(page);
    window.scrollTo(0, 0);
  }

  /* ---------------- Shell: theme, mobile sidebar ---------------- */
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    const b = $('themeBtn');
    b.replaceChildren(ENG.icon(t === 'dark' ? 'sun' : 'moon'));
    b.title = t === 'dark' ? 'Світла тема' : 'Темна тема';
    b.setAttribute('aria-label', b.title);
  }
  function currentTheme() {
    const p = store.app('prefs', {});
    if (p.theme) return p.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function openSidebar() {
    document.body.classList.add('nav-open');
  }
  function closeSidebar() {
    document.body.classList.remove('nav-open');
  }

  function init() {
    applyTheme(currentTheme());
    $('themeBtn').addEventListener('click', () => {
      const t = currentTheme() === 'dark' ? 'light' : 'dark';
      const p = store.app('prefs', {});
      p.theme = t;
      store.setApp('prefs', p);
      applyTheme(t);
    });
    $('menuBtn').replaceChildren(ENG.icon('menu'));
    $('menuBtn').addEventListener('click', openSidebar);
    $('scrim').addEventListener('click', closeSidebar);
    $('brandHome').prepend(ENG.icon('sparkle', 'brand-ico'));
    if (!store.persistent) ENG.toast('Браузер не дозволяє зберігати прогрес (приватний режим?)');
    ENG.Toolbar.init();
    window.addEventListener('hashchange', route);
    route();
  }

  ENG.route = route;
  document.addEventListener('DOMContentLoaded', init);
})();
