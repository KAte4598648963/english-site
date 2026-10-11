/*
 * Lesson toolbar (A1–B2): Translator, Reset lesson, Teacher mode, Notebook, Vocabulary, Export.
 * C1–C2 get the same toolbar without the translator.
 * Notes:  eng:<lessonId>:_notes  (string)
 * Vocab:  eng:<lessonId>:_vocab  ([{ en, ua, t }])
 */
(function () {
  'use strict';
  const ENG = window.ENG;
  const h = ENG.h;

  let ctx = null; // { lesson, level, onReset }
  let buttons = {};
  let openPanel = null;

  const prefs = () => ENG.store.app('prefs', {});
  const setPref = (k, v) => {
    const p = prefs();
    p[k] = v;
    ENG.store.setApp('prefs', p);
  };

  /* ---------------- Translator (hover → Ukrainian) ---------------- */
  const Translator = {
    on: false,
    glossary: {},
    tip: null,
    raf: 0,
    hideT: 0,
    setGlossary(g) {
      this.glossary = {};
      Object.keys(g || {}).forEach((k) => (this.glossary[k.toLowerCase()] = g[k]));
    },
    lookup(word, next) {
      const g = this.glossary;
      const w = word.toLowerCase().replace(/’/g, "'").replace(/^'+|'+$/g, '');
      if (next) {
        const pair = w + ' ' + next.toLowerCase();
        if (g[pair]) return { en: pair, ua: g[pair] };
      }
      const cands = [w, w.replace(/'s$/, '')];
      if (/ies$/.test(w)) cands.push(w.slice(0, -3) + 'y');
      if (/es$/.test(w)) cands.push(w.slice(0, -2));
      if (/s$/.test(w)) cands.push(w.slice(0, -1));
      if (/ied$/.test(w)) cands.push(w.slice(0, -3) + 'y');
      if (/ed$/.test(w)) cands.push(w.slice(0, -2), w.slice(0, -1), w.slice(0, -3));
      if (/ing$/.test(w)) cands.push(w.slice(0, -3), w.slice(0, -3) + 'e', w.slice(0, -4));
      if (/er$/.test(w)) cands.push(w.slice(0, -2), w.slice(0, -1));
      if (/ly$/.test(w)) cands.push(w.slice(0, -2));
      for (const c of cands) if (c && g[c]) return { en: c, ua: g[c] };
      return null;
    },
    wordAt(x, y) {
      let node;
      let offset;
      if (document.caretPositionFromPoint) {
        const p = document.caretPositionFromPoint(x, y);
        if (!p) return null;
        node = p.offsetNode;
        offset = p.offset;
      } else if (document.caretRangeFromPoint) {
        const r = document.caretRangeFromPoint(x, y);
        if (!r) return null;
        node = r.startContainer;
        offset = r.startOffset;
      }
      if (!node || node.nodeType !== 3) return null;
      const text = node.textContent;
      const re = /[A-Za-z'’-]/;
      let s = offset;
      let e = offset;
      while (s > 0 && re.test(text[s - 1])) s--;
      while (e < text.length && re.test(text[e])) e++;
      if (s === e) return null;
      const range = document.createRange();
      range.setStart(node, s);
      range.setEnd(node, e);
      const rect = range.getBoundingClientRect();
      if (x < rect.left - 1 || x > rect.right + 1 || y < rect.top - 1 || y > rect.bottom + 1) return null;
      const nm = text.slice(e).match(/^\s+([A-Za-z'’-]+)/);
      return { word: text.slice(s, e).replace(/^-+|-+$/g, ''), next: nm ? nm[1] : null, rect, node };
    },
    show(hit, res) {
      const tip = this.tip;
      tip.replaceChildren(h('b', null, res.en), h('span', null, res.ua));
      tip.classList.add('show');
      const r = hit.rect;
      const tw = tip.offsetWidth;
      const left = Math.min(window.innerWidth - tw - 8, Math.max(8, r.left + r.width / 2 - tw / 2));
      let top = r.top - tip.offsetHeight - 8;
      if (top < 8) top = r.bottom + 8;
      tip.style.left = left + 'px';
      tip.style.top = top + 'px';
    },
    hide() {
      if (this.tip) this.tip.classList.remove('show');
    },
    probe(x, y, target) {
      if (!this.on) return;
      if (!target || !target.closest || !target.closest('.lesson') || target.closest('input, textarea, .no-tr, .drawer')) return this.hide();
      const hit = this.wordAt(x, y);
      const res = hit && this.lookup(hit.word, hit.next);
      if (!res) return this.hide();
      this.show(hit, res);
    },
    init() {
      this.tip = document.getElementById('trTip');
      document.addEventListener('mousemove', (e) => {
        if (!this.on) return;
        cancelAnimationFrame(this.raf);
        const { clientX, clientY, target } = e;
        this.raf = requestAnimationFrame(() => this.probe(clientX, clientY, target));
      });
      document.addEventListener('pointerdown', (e) => {
        if (!this.on || e.pointerType === 'mouse') return;
        this.probe(e.clientX, e.clientY, e.target);
        clearTimeout(this.hideT);
        this.hideT = setTimeout(() => this.hide(), 2500);
      });
      window.addEventListener('scroll', () => this.hide(), { passive: true });
    },
    set(on) {
      this.on = on;
      document.body.classList.toggle('translator', on);
      if (!on) this.hide();
    }
  };
  ENG.Translator = Translator;

  /* ---------------- Teacher mode ---------------- */
  function setTeacher(on) {
    document.body.classList.toggle('teacher', on);
    setPref('teacher', on);
    if (buttons.teacher) buttons.teacher.setAttribute('aria-pressed', String(on));
  }

  /* ---------------- Drawer panels ---------------- */
  const drawer = () => document.getElementById('drawer');

  function openDrawer(name) {
    const d = drawer();
    if (openPanel === name) return closeDrawer();
    openPanel = name;
    Object.keys(buttons).forEach((k) => ['notebook', 'vocab', 'export'].indexOf(k) >= 0 && buttons[k].classList.toggle('active', k === name));
    const panel = PANELS[name]();
    const tabs = h(
      'div',
      { class: 'drawer-tabs', role: 'tablist' },
      [['notebook', 'Notebook'], ['vocab', 'Vocabulary'], ['export', 'Export']].map(([k, label]) =>
        h('button', { class: 'drawer-tab' + (k === name ? ' active' : ''), type: 'button', role: 'tab', 'aria-selected': String(k === name), onclick: () => k !== name && openDrawer(k) }, label)
      )
    );
    d.replaceChildren(
      h('div', { class: 'drawer-head' }, h('h3', null, panel.title), h('button', { class: 'icon-btn', type: 'button', 'aria-label': 'Закрити', onclick: closeDrawer }, ENG.icon('x'))),
      tabs,
      h('div', { class: 'drawer-body' }, panel.body)
    );
    d.classList.add('open');
    d.setAttribute('aria-hidden', 'false');
    if (panel.focus) setTimeout(() => panel.focus.focus(), 50);
  }
  function closeDrawer() {
    const d = drawer();
    openPanel = null;
    d.classList.remove('open');
    d.setAttribute('aria-hidden', 'true');
    ['notebook', 'vocab', 'export'].forEach((k) => buttons[k] && buttons[k].classList.remove('active'));
  }

  const getNotes = () => ENG.store.get(ctx.lesson.id, '_notes', '');
  const getVocab = () => ENG.store.get(ctx.lesson.id, '_vocab', []);

  const PANELS = {
    notebook() {
      const ta = h('textarea', { class: 'notes-area', rows: '14', placeholder: 'Нотатки до цього уроку: правила, приклади, питання до вчителя…', value: getNotes() });
      const status = h('span', { class: 'muted small' }, 'Зберігається автоматично');
      let t = 0;
      ta.addEventListener('input', () => {
        ENG.store.set(ctx.lesson.id, '_notes', ta.value);
        status.textContent = 'Збережено ✓';
        clearTimeout(t);
        t = setTimeout(() => (status.textContent = 'Зберігається автоматично'), 1200);
      });
      return { title: 'Notebook', body: h('div', { class: 'panel' }, ta, status), focus: ta };
    },
    vocab() {
      const en = h('input', { type: 'text', placeholder: 'English', lang: 'en', autocomplete: 'off', 'aria-label': 'Слово англійською' });
      const ua = h('input', { type: 'text', placeholder: 'Українською', autocomplete: 'off', 'aria-label': 'Переклад' });
      const list = h('ul', { class: 'vocab-list' });
      const count = h('span', { class: 'muted small' });
      function paint() {
        const v = getVocab();
        count.textContent = v.length ? 'Слів: ' + v.length : '';
        list.replaceChildren(
          ...(v.length
            ? v.map((item, i) =>
                h(
                  'li',
                  null,
                  h('span', { class: 'v-en' }, item.en),
                  h('span', { class: 'v-sep' }, '—'),
                  h('span', { class: 'v-ua' }, item.ua),
                  h(
                    'button',
                    {
                      class: 'icon-btn sm',
                      type: 'button',
                      'aria-label': 'Видалити',
                      onclick: () => {
                        const all = getVocab();
                        all.splice(i, 1);
                        ENG.store.set(ctx.lesson.id, '_vocab', all);
                        paint();
                      }
                    },
                    ENG.icon('trash')
                  )
                )
              )
            : [h('li', { class: 'empty' }, 'Поки що порожньо. Додай перше слово ↑')])
        );
      }
      const form = h(
        'form',
        {
          class: 'vocab-form',
          onsubmit: (e) => {
            e.preventDefault();
            const a = en.value.trim();
            const b = ua.value.trim();
            if (!a || !b) return ENG.toast('Заповни обидва поля');
            const all = getVocab();
            all.unshift({ en: a, ua: b, t: Date.now() });
            ENG.store.set(ctx.lesson.id, '_vocab', all);
            en.value = '';
            ua.value = '';
            en.focus();
            paint();
          }
        },
        en,
        ua,
        h('button', { class: 'btn btn-primary', type: 'submit' }, 'Зберегти')
      );
      paint();
      return { title: 'Vocabulary', body: h('div', { class: 'panel' }, form, count, list), focus: en };
    },
    export() {
      const vocabText = () =>
        getVocab()
          .slice()
          .reverse()
          .map((v) => v.en + ' - ' + v.ua)
          .join('\n');
      const fullText = () => {
        const parts = [ctx.level.name + ' · ' + ctx.lesson.title];
        const v = vocabText();
        const n = getNotes().trim();
        parts.push('Vocabulary:\n' + (v || '—'));
        parts.push('Notes:\n' + (n || '—'));
        return parts.join('\n\n');
      };
      const preview = h('textarea', { class: 'export-preview', rows: '12', readonly: true, value: fullText() });
      const doCopy = async (text, msg) => ENG.toast((await ENG.copy(text)) ? msg : 'Не вдалося скопіювати', 'ok');
      const actions = h(
        'div',
        { class: 'export-actions' },
        h('button', { class: 'btn btn-primary', type: 'button', onclick: () => doCopy(vocabText(), 'Словник скопійовано ✓') }, ENG.icon('copy'), 'Копіювати словник'),
        h('button', { class: 'btn btn-soft', type: 'button', onclick: () => doCopy(fullText(), 'Словник і нотатки скопійовано ✓') }, ENG.icon('copy'), 'Копіювати все'),
        navigator.share
          ? h(
              'button',
              {
                class: 'btn btn-soft',
                type: 'button',
                onclick: () => navigator.share({ title: ctx.lesson.title, text: fullText() }).catch(() => {})
              },
              ENG.icon('share'),
              'Поділитися'
            )
          : null
      );
      return { title: 'Export vocabulary & notes', body: h('div', { class: 'panel' }, h('p', { class: 'muted small' }, 'Формат словника: «dog - собака», кожне слово з нового рядка.'), preview, actions) };
    }
  };

  /* ---------------- Reset lesson ---------------- */
  async function resetLesson() {
    const r = await ENG.confirm({
      title: 'Скинути прогрес уроку?',
      text: 'Усі відповіді та позначки виконаних вправ цього уроку буде видалено. Інші уроки не зміняться.',
      checkbox: 'Також видалити нотатки і словник цього уроку',
      okText: 'Скинути',
      danger: true
    });
    if (!r.ok) return;
    const keep = r.checked ? [] : ['_notes', '_vocab'];
    ENG.store.names(ctx.lesson.id).forEach((n) => keep.indexOf(n) < 0 && ENG.store.del(ctx.lesson.id, n));
    closeDrawer();
    ENG.toast('Прогрес уроку скинуто');
    ctx.onReset && ctx.onReset();
  }

  /* ---------------- Mount ---------------- */
  function tbtn(key, icon, label, onclick, toggle) {
    const b = h('button', { class: 'tool-btn', type: 'button', title: label, 'aria-label': label, onclick }, ENG.icon(icon), h('span', { class: 'tool-label' }, label));
    if (toggle) b.setAttribute('aria-pressed', 'false');
    buttons[key] = b;
    return b;
  }

  ENG.Toolbar = {
    init() {
      Translator.init();
      document.body.classList.toggle('teacher', !!prefs().teacher);
      document.addEventListener('keydown', (e) => e.key === 'Escape' && openPanel && closeDrawer());
    },
    mount(container, opts) {
      ctx = opts;
      buttons = {};
      const advanced = !!opts.level.advanced;
      Translator.setGlossary(opts.lesson.glossary);
      const trOn = !advanced && !!prefs().translator;
      Translator.set(trOn);
      const bar = h(
        'div',
        { class: 'toolbar', role: 'toolbar', 'aria-label': 'Інструменти уроку' },
        advanced
          ? null
          : tbtn(
              'translator',
              'translate',
              'Перекладач',
              () => {
                const on = !Translator.on;
                Translator.set(on);
                setPref('translator', on);
                buttons.translator.setAttribute('aria-pressed', String(on));
                ENG.toast(on ? 'Перекладач увімкнено: наведи на англійське слово' : 'Перекладач вимкнено');
              },
              true
            ),
        tbtn('reset', 'reset', 'Reset Lesson', resetLesson),
        tbtn('teacher', 'teacher', 'Teacher mode', () => setTeacher(!document.body.classList.contains('teacher')), true),
        tbtn('notebook', 'notebook', 'Notebook', () => openDrawer('notebook')),
        tbtn('vocab', 'vocab', 'Vocabulary', () => openDrawer('vocab')),
        tbtn('export', 'share', 'Export', () => openDrawer('export'))
      );
      if (buttons.translator) buttons.translator.setAttribute('aria-pressed', String(trOn));
      buttons.teacher.setAttribute('aria-pressed', String(document.body.classList.contains('teacher')));
      container.appendChild(bar);
    },
    unmount() {
      closeDrawer();
      Translator.set(false);
      ctx = null;
    }
  };
})();
