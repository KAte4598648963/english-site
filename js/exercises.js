/*
 * Exercise types. Each type: render(ex, api) -> { el, check?, ready?, noRetry? }
 *   api.state   — persistent object for this exercise (saved under eng:<lessonId>:<ex.id>)
 *   api.save()  — persist api.state
 *   api.finish(score, total) — mark exercise as completed (used by self-completing types)
 * Types with check(): the lesson frame shows a «Перевірити» button, sets state.checked
 * and calls check() which paints right/wrong marks and returns { score, total }.
 * Elements with class "t-hint" / "t-correct" are revealed in Teacher mode.
 */
(function () {
  'use strict';
  const ENG = window.ENG;
  const h = ENG.h;
  const T = ENG.types;

  const keyOf = (item, i) => (item && item.id) || String(i);
  const LETTERS = 'ABCDEFGH';

  function parseGaps(text) {
    const parts = [];
    const re = /\{\{(.+?)\}\}/g;
    let last = 0;
    let m;
    while ((m = re.exec(text))) {
      if (m.index > last) parts.push({ t: text.slice(last, m.index) });
      parts.push({ gap: m[1].split('|').map((s) => s.trim()) });
      last = re.lastIndex;
    }
    if (last < text.length) parts.push({ t: text.slice(last) });
    return parts;
  }

  function speakBtn(text, label) {
    return h(
      'button',
      {
        class: 'icon-btn sm',
        type: 'button',
        title: label || 'Прослухати',
        'aria-label': label || 'Прослухати',
        onclick: (e) => {
          e.stopPropagation();
          if (!ENG.speech.speak(text)) ENG.toast('Браузер не підтримує озвучення');
        }
      },
      ENG.icon('volume')
    );
  }

  /* ---------------- Rule (grammar theory card) ---------------- */
  T.rule = {
    render(ex, api) {
      const st = api.state;
      const btn = h(
        'button',
        {
          class: 'btn btn-primary',
          type: 'button',
          onclick: (e) => {
            e.currentTarget.parentNode.remove();
            api.finish(1, 1);
          }
        },
        ENG.icon('check'),
        'Зрозуміло'
      );
      const el = h('div', { class: 'ex-rule' }, h('div', { class: 'rule-body', html: ex.html || '' }), st.done ? null : h('div', { class: 'rule-actions' }, btn));
      return { el, noRetry: true };
    }
  };

  /* ---------------- Multiple choice ---------------- */
  T.choice = {
    render(ex, api) {
      const st = api.state;
      st.answers = st.answers || {};
      const blocks = ex.items.map((item, i) => {
        const k = keyOf(item, i);
        const opts = item.options.map((o, oi) =>
          h(
            'button',
            {
              class: 'opt' + (oi === item.answer ? ' t-correct' : ''),
              type: 'button',
              onclick: () => {
                if (st.checked) return;
                st.answers[k] = oi;
                api.save();
                paint();
              }
            },
            h('span', { class: 'opt-letter' }, LETTERS[oi]),
            h('span', { class: 'opt-text' }, o)
          )
        );
        const explain = item.explain ? h('div', { class: 'explain' }, ENG.icon('sparkle'), h('span', null, item.explain)) : null;
        const el = h(
          'div',
          { class: 'q-block' },
          h('div', { class: 'q-text' }, h('span', { class: 'q-num' }, i + 1), h('span', null, item.q)),
          h('div', { class: 'opts' + (item.options.length <= 3 && item.options.every((o) => o.length < 26) ? ' opts-row' : '') }, opts),
          explain
        );
        return { item, k, opts, el, explain };
      });
      function paint() {
        blocks.forEach((b) => {
          b.opts.forEach((o, oi) => {
            const chosen = st.answers[b.k] === oi;
            o.classList.toggle('selected', chosen);
            o.classList.toggle('right', !!st.checked && oi === b.item.answer);
            o.classList.toggle('wrong', !!st.checked && chosen && oi !== b.item.answer);
            o.disabled = !!st.checked;
          });
          if (b.explain) b.explain.classList.toggle('shown', !!st.checked);
        });
      }
      paint();
      return {
        el: h('div', { class: 'ex-choice' }, blocks.map((b) => b.el)),
        ready: () => blocks.every((b) => st.answers[b.k] != null),
        check() {
          paint();
          return { score: blocks.filter((b) => st.answers[b.k] === b.item.answer).length, total: blocks.length };
        }
      };
    }
  };

  /* ---------------- True / False ---------------- */
  T.truefalse = {
    render(ex, api) {
      const items = ex.items.map((it) => ({ id: it.id, q: it.s, options: ['True', 'False'], answer: it.answer ? 0 : 1, explain: it.explain }));
      const r = T.choice.render(Object.assign({}, ex, { items }), api);
      r.el.classList.add('ex-tf');
      return r;
    }
  };

  /* ---------------- Gap fill (typing) ---------------- */
  T.gap = {
    render(ex, api) {
      const st = api.state;
      st.answers = st.answers || {};
      const gaps = [];
      const rows = ex.items.map((item, i) => {
        const k = keyOf(item, i);
        let gi = 0;
        const line = h('div', { class: 'gap-line' }, h('span', { class: 'q-num' }, i + 1));
        const sentence = h('div', { class: 'gap-sentence' });
        parseGaps(item.text).forEach((p) => {
          if (p.t != null) {
            sentence.appendChild(document.createTextNode(p.t));
            return;
          }
          const gk = k + ':' + gi++;
          const width = Math.max(4, ...p.gap.map((a) => a.length)) + 1;
          const input = h('input', {
            class: 'gap-input',
            type: 'text',
            autocomplete: 'off',
            autocapitalize: 'off',
            spellcheck: 'false',
            'aria-label': 'Пропуск',
            style: { width: width + 'ch' },
            value: st.answers[gk] || ''
          });
          input.addEventListener('input', () => {
            st.answers[gk] = input.value;
            api.save();
          });
          input.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;
            e.preventDefault();
            const idx = gaps.findIndex((g) => g.input === input);
            if (gaps[idx + 1]) gaps[idx + 1].input.focus();
          });
          const fix = h('span', { class: 'gap-fix' });
          const wrap = h('span', { class: 'gap-wrap' }, input, h('span', { class: 't-hint' }, p.gap[0]), fix);
          gaps.push({ gk, alts: p.gap, input, fix, wrap });
          sentence.appendChild(wrap);
        });
        line.appendChild(sentence);
        if (item.hint) line.appendChild(h('span', { class: 'gap-hint' }, item.hint));
        return line;
      });
      function paint() {
        gaps.forEach((g) => {
          const ok = ENG.matches(st.answers[g.gk], g.alts);
          g.wrap.classList.toggle('right', !!st.checked && ok);
          g.wrap.classList.toggle('wrong', !!st.checked && !ok);
          g.input.readOnly = !!st.checked;
          g.fix.textContent = st.checked && !ok ? g.alts[0] : '';
        });
      }
      paint();
      return {
        el: h('div', { class: 'ex-gap' }, rows),
        ready: () => gaps.every((g) => (st.answers[g.gk] || '').trim()),
        check() {
          paint();
          return { score: gaps.filter((g) => ENG.matches(st.answers[g.gk], g.alts)).length, total: gaps.length };
        }
      };
    }
  };

  /* ---------------- Drag & drop into gaps (tap also works on phones) ---------------- */
  T.dragdrop = {
    render(ex, api) {
      const st = api.state;
      st.answers = st.answers || {}; // gapKey -> word index
      const gaps = [];
      const sentences = ex.items.map((item, i) => {
        const k = keyOf(item, i);
        let gi = 0;
        const sentence = h('div', { class: 'gap-sentence' });
        parseGaps(item.text).forEach((p) => {
          if (p.t != null) return sentence.appendChild(document.createTextNode(p.t));
          const gk = k + ':' + gi++;
          const drop = h('button', { class: 'drop', type: 'button', 'aria-label': 'Пропуск' });
          const g = { gk, alts: p.gap, drop };
          drop.addEventListener('click', () => onGap(g));
          drop.addEventListener('dragover', (e) => {
            if (st.checked) return;
            e.preventDefault();
            drop.classList.add('over');
          });
          drop.addEventListener('dragleave', () => drop.classList.remove('over'));
          drop.addEventListener('drop', (e) => {
            e.preventDefault();
            drop.classList.remove('over');
            const wi = parseInt(e.dataTransfer.getData('text/plain'), 10);
            if (!isNaN(wi)) place(g, wi);
          });
          gaps.push(g);
          sentence.appendChild(h('span', { class: 'gap-wrap' }, drop, h('span', { class: 't-hint' }, p.gap[0])));
        });
        return h('div', { class: 'gap-line' }, h('span', { class: 'q-num' }, i + 1), sentence);
      });

      const words = ex.bank || gaps.map((g) => g.alts[0]).concat(ex.distractors || []);
      let selected = null;
      const chips = words.map((w, wi) => {
        const c = h('button', { class: 'chip', type: 'button', draggable: 'true' }, w);
        c.addEventListener('click', () => {
          if (st.checked || isUsed(wi)) return;
          selected = selected === wi ? null : wi;
          paint();
        });
        c.addEventListener('dragstart', (e) => {
          if (st.checked || isUsed(wi)) return e.preventDefault();
          e.dataTransfer.setData('text/plain', String(wi));
          e.dataTransfer.effectAllowed = 'move';
        });
        return c;
      });
      const order = ENG.shuffle(
        words.map((_, i) => i),
        ex.id
      );
      const bank = h('div', { class: 'bank' }, order.map((i) => chips[i]));

      function isUsed(wi) {
        return Object.keys(st.answers).some((gk) => st.answers[gk] === wi);
      }
      function onGap(g) {
        if (st.checked) return;
        if (selected != null) place(g, selected);
        else if (st.answers[g.gk] != null) {
          delete st.answers[g.gk];
          api.save();
          paint();
        }
      }
      function place(g, wi) {
        if (st.checked) return;
        Object.keys(st.answers).forEach((gk) => st.answers[gk] === wi && delete st.answers[gk]);
        st.answers[g.gk] = wi;
        selected = null;
        api.save();
        paint();
      }
      function paint() {
        chips.forEach((c, wi) => {
          c.classList.toggle('used', isUsed(wi));
          c.classList.toggle('selected', selected === wi);
          c.disabled = !!st.checked;
        });
        bank.classList.toggle('picking', selected != null);
        gaps.forEach((g) => {
          const wi = st.answers[g.gk];
          const filled = wi != null;
          g.drop.textContent = filled ? words[wi] : '';
          g.drop.classList.toggle('filled', filled);
          g.drop.classList.toggle('target', selected != null);
          const ok = filled && ENG.matches(words[wi], g.alts);
          g.drop.classList.toggle('right', !!st.checked && ok);
          g.drop.classList.toggle('wrong', !!st.checked && !ok);
          if (st.checked && !ok) g.drop.title = 'Правильно: ' + g.alts[0];
        });
      }
      paint();
      return {
        el: h('div', { class: 'ex-dragdrop' }, h('div', { class: 'bank-label' }, 'Перетягни слово або натисни на нього, а потім на пропуск'), bank, h('div', { class: 'ex-gap' }, sentences)),
        ready: () => gaps.every((g) => st.answers[g.gk] != null),
        check() {
          paint();
          return { score: gaps.filter((g) => st.answers[g.gk] != null && ENG.matches(words[st.answers[g.gk]], g.alts)).length, total: gaps.length };
        }
      };
    }
  };

  /* ---------------- Match pairs (Quizlet-style, instant feedback) ---------------- */
  T.match = {
    render(ex, api) {
      const st = api.state;
      st.matched = st.matched || [];
      st.mistakes = st.mistakes || 0;
      const n = ex.pairs.length;
      let selL = null;
      let selR = null;
      let busy = false;
      const left = ex.pairs.map((p, i) => h('button', { class: 'm-card', type: 'button', onclick: () => pick('L', i) }, p[0]));
      const right = ex.pairs.map((p, i) => h('button', { class: 'm-card', type: 'button', onclick: () => pick('R', i) }, p[1]));
      const rOrder = ENG.shuffle(
        ex.pairs.map((_, i) => i),
        ex.id + ':r'
      );
      const counter = h('div', { class: 'm-counter' });

      function pick(side, i) {
        if (busy || st.matched.indexOf(i) >= 0) return;
        if (side === 'L') selL = selL === i ? null : i;
        else selR = selR === i ? null : i;
        if (selL != null && selR != null) {
          if (selL === selR) {
            st.matched.push(selL);
            [left[selL], right[selR]].forEach((c) => c.classList.add('pop'));
            selL = selR = null;
            api.save();
            paint();
            if (st.matched.length === n) setTimeout(() => api.finish(Math.max(0, n - st.mistakes), n), 350);
            return;
          }
          st.mistakes++;
          api.save();
          const a = left[selL];
          const b = right[selR];
          a.classList.add('shake');
          b.classList.add('shake');
          busy = true;
          setTimeout(() => {
            a.classList.remove('shake');
            b.classList.remove('shake');
            selL = selR = null;
            busy = false;
            paint();
          }, 550);
        }
        paint();
      }
      function paint() {
        left.forEach((c, i) => {
          c.classList.toggle('matched', st.matched.indexOf(i) >= 0);
          c.classList.toggle('selected', selL === i);
        });
        right.forEach((c, i) => {
          c.classList.toggle('matched', st.matched.indexOf(i) >= 0);
          c.classList.toggle('selected', selR === i);
        });
        counter.textContent = 'Знайдено пар: ' + st.matched.length + ' / ' + n + (st.mistakes ? ' · помилок: ' + st.mistakes : '');
      }
      paint();
      const hint = h('div', { class: 't-hint block' }, ex.pairs.map((p) => p[0] + ' — ' + p[1]).join(' · '));
      return {
        el: h('div', { class: 'ex-match' }, counter, h('div', { class: 'm-grid' }, h('div', { class: 'm-col' }, left), h('div', { class: 'm-col' }, rOrder.map((i) => right[i]))), hint)
      };
    }
  };

  /* ---------------- Sentence builder (Duolingo-style word tiles) ---------------- */
  T.order = {
    render(ex, api) {
      const st = api.state;
      st.answers = st.answers || {};
      const rows = ex.items.map((item, i) => {
        const k = keyOf(item, i);
        const tokens = item.answer.split(/\s+/).concat(item.extra || []);
        const order = ENG.shuffle(
          tokens.map((_, ti) => ti),
          ex.id + ':' + k
        );
        if (!Array.isArray(st.answers[k])) st.answers[k] = [];
        const built = h('div', { class: 'build' });
        const pool = h('div', { class: 'pool' });
        const row = h(
          'div',
          { class: 'order-row' },
          h('div', { class: 'order-prompt' }, h('span', { class: 'q-num' }, i + 1), h('span', null, item.prompt || 'Склади речення')),
          built,
          pool,
          h('div', { class: 't-hint block' }, item.answer),
          h('div', { class: 'order-fix' })
        );
        const r = { k, item, tokens, order, built, pool, row };
        return r;
      });
      function paint() {
        rows.forEach((r) => {
          const placed = st.answers[r.k];
          r.built.replaceChildren(
            ...placed.map((ti, pi) =>
              h(
                'button',
                {
                  class: 'tile',
                  type: 'button',
                  disabled: !!st.checked,
                  onclick: () => {
                    placed.splice(pi, 1);
                    api.save();
                    paint();
                  }
                },
                r.tokens[ti]
              )
            )
          );
          if (!placed.length) r.built.appendChild(h('span', { class: 'build-ph' }, 'Натискай на слова нижче'));
          r.pool.replaceChildren(
            ...r.order.map((ti) =>
              placed.indexOf(ti) >= 0
                ? h('span', { class: 'tile ghost' }, r.tokens[ti])
                : h(
                    'button',
                    {
                      class: 'tile',
                      type: 'button',
                      disabled: !!st.checked,
                      onclick: () => {
                        placed.push(ti);
                        api.save();
                        paint();
                      }
                    },
                    r.tokens[ti]
                  )
            )
          );
          const ok = isRight(r);
          r.row.classList.toggle('right', !!st.checked && ok);
          r.row.classList.toggle('wrong', !!st.checked && !ok);
          r.row.querySelector('.order-fix').textContent = st.checked && !ok ? 'Правильно: ' + r.item.answer : '';
        });
      }
      const isRight = (r) => ENG.norm(st.answers[r.k].map((ti) => r.tokens[ti]).join(' ')) === ENG.norm(r.item.answer);
      paint();
      return {
        el: h('div', { class: 'ex-order' }, rows.map((r) => r.row)),
        ready: () => rows.every((r) => st.answers[r.k].length),
        check() {
          paint();
          return { score: rows.filter(isRight).length, total: rows.length };
        }
      };
    }
  };

  /* ---------------- Flashcards ---------------- */
  T.flashcards = {
    render(ex, api) {
      const st = api.state;
      st.known = st.known || [];
      st.idx = st.idx || 0;
      const n = ex.cards.length;
      const wrap = h('div', { class: 'ex-flash' });
      let flipped = false;

      function paint() {
        const queue = ex.cards.map((_, i) => i).filter((i) => st.known.indexOf(i) < 0);
        const bar = h('div', { class: 'progress' }, h('span', { style: { width: (st.known.length / n) * 100 + '%' } }));
        const meta = h('div', { class: 'flash-meta' }, h('span', null, 'Вивчено: ' + st.known.length + ' / ' + n), bar);
        if (!queue.length) {
          wrap.replaceChildren(
            meta,
            h(
              'div',
              { class: 'flash-done' },
              h('div', { class: 'big-emoji' }, '🎉'),
              h('p', null, 'Усі картки вивчено!'),
              h(
                'button',
                {
                  class: 'btn btn-ghost',
                  type: 'button',
                  onclick: () => {
                    st.known = [];
                    st.idx = 0;
                    api.save();
                    paint();
                  }
                },
                ENG.icon('reset'),
                'Пройти ще раз'
              )
            )
          );
          return;
        }
        const ci = queue[st.idx % queue.length];
        const c = ex.cards[ci];
        flipped = false;
        const card = h(
          'div',
          { class: 'flash', tabindex: '0', role: 'button', 'aria-label': 'Перевернути картку' },
          h(
            'div',
            { class: 'flash-inner' },
            h('div', { class: 'flash-face front' }, h('div', { class: 'flash-word' }, c.front), c.ipa ? h('div', { class: 'flash-ipa' }, c.ipa) : null, h('div', { class: 'flash-tap' }, 'натисни, щоб перевернути')),
            h('div', { class: 'flash-face back' }, h('div', { class: 'flash-word' }, c.back), c.example ? h('div', { class: 'flash-ex' }, c.example) : null)
          ),
          h('div', { class: 'flash-speak' }, speakBtn(c.front))
        );
        const flip = () => {
          flipped = !flipped;
          card.classList.toggle('flipped', flipped);
        };
        card.addEventListener('click', flip);
        card.addEventListener('keydown', (e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            flip();
          }
        });
        wrap.replaceChildren(
          meta,
          card,
          h(
            'div',
            { class: 'flash-actions' },
            h(
              'button',
              {
                class: 'btn btn-soft-warn',
                type: 'button',
                onclick: () => {
                  st.idx++;
                  api.save();
                  paint();
                }
              },
              'Ще вчу'
            ),
            h(
              'button',
              {
                class: 'btn btn-soft-ok',
                type: 'button',
                onclick: () => {
                  st.known.push(ci);
                  api.save();
                  if (st.known.length === n) api.finish(n, n);
                  else paint();
                }
              },
              ENG.icon('check'),
              'Знаю'
            )
          )
        );
      }
      paint();
      return { el: wrap, noRetry: true };
    }
  };

  /* ---------------- Dictation (listen & type) ---------------- */
  T.dictation = {
    render(ex, api) {
      const st = api.state;
      st.answers = st.answers || {};
      const rows = ex.items.map((item, i) => {
        const k = keyOf(item, i);
        const input = h('input', { class: 'dict-input', type: 'text', autocomplete: 'off', spellcheck: 'false', placeholder: 'Напиши, що почув(ла)…', value: st.answers[k] || '' });
        input.addEventListener('input', () => {
          st.answers[k] = input.value;
          api.save();
        });
        const fix = h('div', { class: 'gap-fix block' });
        const row = h(
          'div',
          { class: 'dict-row' },
          h(
            'div',
            { class: 'dict-controls' },
            h('span', { class: 'q-num' }, i + 1),
            h('button', { class: 'btn btn-soft sm', type: 'button', onclick: () => ENG.speech.speak(item.text, { rate: 0.9 }) || ENG.toast('Браузер не підтримує озвучення') }, ENG.icon('play'), 'Слухати'),
            h('button', { class: 'btn btn-ghost sm', type: 'button', title: 'Повільно', onclick: () => ENG.speech.speak(item.text, { rate: 0.6 }) }, ENG.icon('turtle'), 'Повільно')
          ),
          input,
          h('div', { class: 't-hint block' }, item.text),
          fix
        );
        return { k, item, input, row, fix };
      });
      function paint() {
        rows.forEach((r) => {
          const ok = ENG.matches(st.answers[r.k], [r.item.text]);
          r.row.classList.toggle('right', !!st.checked && ok);
          r.row.classList.toggle('wrong', !!st.checked && !ok);
          r.input.readOnly = !!st.checked;
          r.fix.textContent = st.checked && !ok ? r.item.text : '';
        });
      }
      paint();
      return {
        el: h('div', { class: 'ex-dict' }, ENG.speech.supported ? null : h('p', { class: 'warn-note' }, 'Ваш браузер не підтримує озвучення. Увімкніть Teacher mode, щоб побачити речення.'), rows.map((r) => r.row)),
        ready: () => rows.every((r) => (st.answers[r.k] || '').trim()),
        check() {
          paint();
          return { score: rows.filter((r) => ENG.matches(st.answers[r.k], [r.item.text])).length, total: rows.length };
        }
      };
    }
  };

  /* ---------------- Writing ---------------- */
  T.writing = {
    render(ex, api) {
      const st = api.state;
      st.text = st.text || '';
      st.checks = st.checks || {};
      const min = ex.minWords || 0;
      const max = ex.maxWords || 0;
      const ta = h('textarea', { class: 'write-area', rows: '10', placeholder: 'Пиши англійською тут…', spellcheck: 'true', lang: 'en', value: st.text });
      const counter = h('span', { class: 'word-count' });
      const submit = h('button', { class: 'btn btn-primary', type: 'button' }, ENG.icon('check'), st.done ? 'Зберегти зміни' : 'Здати роботу');
      const phrases = (ex.phrases || []).map((p) => h('span', { class: 'phrase' }, p));
      const model = ex.model ? h('details', { class: 'model' + (st.done ? '' : ' t-reveal') }, h('summary', null, 'Зразок відповіді'), h('div', { class: 'model-text' }, ex.model)) : null;

      function update() {
        const wc = ENG.wordCount(ta.value);
        counter.textContent = 'Слів: ' + wc + (min ? ' (потрібно ' + min + (max ? '–' + max : '+') + ')' : '');
        counter.classList.toggle('ok', wc >= min && (!max || wc <= max));
        submit.disabled = wc < min;
        const low = ta.value.toLowerCase();
        phrases.forEach((el, i) => el.classList.toggle('used', low.indexOf(ex.phrases[i].toLowerCase().replace(/[.…]+$/, '')) >= 0));
      }
      ta.addEventListener('input', () => {
        st.text = ta.value;
        api.save();
        update();
      });
      submit.addEventListener('click', () => {
        st.text = ta.value;
        api.finish(1, 1);
        ENG.toast('Роботу збережено ✓', 'ok');
      });
      update();

      const checklist = (ex.checklist || []).map((c, i) => {
        const cb = h('input', { type: 'checkbox' });
        cb.checked = !!st.checks[i];
        cb.addEventListener('change', () => {
          st.checks[i] = cb.checked;
          api.save();
        });
        return h('label', { class: 'check-line' }, cb, h('span', null, c));
      });

      const el = h(
        'div',
        { class: 'ex-writing' },
        h('div', { class: 'task-box' }, h('div', { class: 'task-title' }, 'Завдання'), h('div', { class: 'task-text' }, ex.prompt)),
        phrases.length ? h('div', { class: 'phrases' }, h('div', { class: 'mini-label' }, 'Корисні фрази (підсвітяться, коли використаєш)'), h('div', { class: 'phrase-list' }, phrases)) : null,
        ta,
        h('div', { class: 'write-foot' }, counter, submit),
        checklist.length ? h('div', { class: 'checklist' }, h('div', { class: 'mini-label' }, 'Самоперевірка'), checklist) : null,
        model
      );
      return { el, noRetry: true };
    }
  };

  /* ---------------- Speaking ---------------- */
  T.speaking = {
    render(ex, api) {
      const st = api.state;
      st.tasks = st.tasks || {};
      const SR = ENG.SpeechRecognition;
      const phrases = ex.phrases || [];
      let active = null;

      const cards = ex.tasks.map((task, i) => {
        const k = keyOf(task, i);
        const ts = (st.tasks[k] = st.tasks[k] || { text: '', done: false });
        const ta = h('textarea', { class: 'speak-notes', rows: '3', placeholder: SR ? 'Тут з’явиться розпізнаний текст (або запиши тези)' : 'Запиши тези своєї відповіді', value: ts.text });
        ta.addEventListener('input', () => {
          ts.text = ta.value;
          api.save();
        });
        const micBtn = SR ? h('button', { class: 'btn btn-soft sm', type: 'button' }, ENG.icon('mic'), 'Говорити') : null;
        if (micBtn) micBtn.addEventListener('click', () => toggleRec(micBtn, ta, ts));
        const doneCb = h('input', { type: 'checkbox' });
        doneCb.checked = ts.done;
        doneCb.addEventListener('change', () => {
          ts.done = doneCb.checked;
          card.classList.toggle('done', ts.done);
          api.save();
          if (ex.tasks.every((t, j) => st.tasks[keyOf(t, j)].done)) api.finish(ex.tasks.length, ex.tasks.length);
        });
        const card = h(
          'div',
          { class: 'speak-card' + (ts.done ? ' done' : '') },
          h('div', { class: 'speak-q' }, h('span', { class: 'q-num' }, i + 1), h('span', null, task.q), speakBtn(task.q, 'Прослухати питання')),
          task.tips ? h('div', { class: 'speak-tips' }, task.tips) : null,
          h('div', { class: 'speak-tools' }, micBtn, h('label', { class: 'check-line inline' }, doneCb, h('span', null, 'Я відповів(ла) вголос'))),
          ta,
          task.model ? h('div', { class: 't-hint block' }, 'Приклад: ' + task.model) : null
        );
        return card;
      });

      function toggleRec(btn, ta, ts) {
        if (active) {
          active.stop();
          return;
        }
        const rec = new SR();
        rec.lang = 'en-US';
        rec.interimResults = false;
        rec.continuous = true;
        rec.onresult = (e) => {
          for (let r = e.resultIndex; r < e.results.length; r++) {
            if (e.results[r].isFinal) ta.value = (ta.value ? ta.value.trim() + ' ' : '') + e.results[r][0].transcript.trim();
          }
          ts.text = ta.value;
          api.save();
        };
        rec.onend = () => {
          active = null;
          btn.classList.remove('rec');
          btn.lastChild.textContent = 'Говорити';
        };
        rec.onerror = (e) => ENG.toast('Мікрофон: ' + e.error);
        try {
          rec.start();
          active = rec;
          btn.classList.add('rec');
          btn.lastChild.textContent = 'Стоп';
        } catch (err) {
          ENG.toast('Не вдалося увімкнути мікрофон');
        }
      }

      const el = h(
        'div',
        { class: 'ex-speaking' },
        phrases.length ? h('div', { class: 'phrases' }, h('div', { class: 'mini-label' }, 'Фрази, які варто використати'), h('div', { class: 'phrase-list' }, phrases.map((p) => h('span', { class: 'phrase' }, p)))) : null,
        cards,
        SR ? null : h('p', { class: 'muted small' }, 'Розпізнавання мовлення недоступне в цьому браузері — відповідай уголос і познач завдання виконаним.')
      );
      return { el, noRetry: true };
    }
  };
})();
