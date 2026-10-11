/* Core: namespace, DOM helpers, icons, utils, speech. Loaded first. */
(function () {
  'use strict';

  const ENG = (window.ENG = window.ENG || {});
  ENG.version = '1.0.0';
  ENG.lessons = {};
  ENG.types = {};

  /** Lesson files call this: ENG.registerLesson({ id, title, sections, glossary }) */
  ENG.registerLesson = function (lesson) {
    ENG.lessons[lesson.id] = lesson;
  };

  /* ---------- DOM builder ---------- */
  function append(el, children) {
    children.forEach((c) => {
      if (c == null || c === false) return;
      if (Array.isArray(c)) append(el, c);
      else if (c instanceof Node) el.appendChild(c);
      else el.appendChild(document.createTextNode(String(c)));
    });
  }

  ENG.h = function h(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        const v = attrs[k];
        if (v == null || v === false) continue;
        if (k === 'class') el.className = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'text') el.textContent = v;
        else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
        else if (k === 'dataset') Object.assign(el.dataset, v);
        else if (k === 'value') el.value = v;
        else el.setAttribute(k, v === true ? '' : v);
      }
    }
    append(el, children);
    return el;
  };

  /* ---------- Icons (inline SVG, stroke = currentColor) ---------- */
  const ICONS = {
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',
    pause: '<path d="M9 5v14M15 5v14"/>',
    stop: '<rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="currentColor" stroke="none"/>',
    reset: '<path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1"/><path d="M3.5 4v4.5H8"/>',
    translate: '<path d="M4 5h8M8 3v2M10.5 5c-.5 4-3 7-6.5 8.5M6 8.5c1 2 3 3.8 5.5 4.8"/><path d="M13 21l4-9 4 9M14.4 18h5.2"/>',
    teacher: '<path d="M2 9.5 12 5l10 4.5-10 4.5z"/><path d="M6 11.5v4.5c0 1.3 2.7 3 6 3s6-1.7 6-3v-4.5M22 9.5V15"/>',
    notebook: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18M12.5 8H16M12.5 12H16"/>',
    vocab: '<path d="M4 19.5V5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14"/><path d="M9 8h6"/>',
    share: '<path d="M12 15V3M8 7l4-4 4 4"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    left: '<path d="M15 5l-7 7 7 7"/>',
    right: '<path d="M9 5l7 7-7 7"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    volume: '<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    home: '<path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    turtle: '<path d="M4 15c0-4 3.5-7 8-7s8 3 8 7z"/><path d="M7 15v3M17 15v3M20 13h2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'
  };

  ENG.icon = function (name, cls) {
    const span = document.createElement('span');
    span.className = 'ico' + (cls ? ' ' + cls : '');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      (ICONS[name] || '') +
      '</svg>';
    return span;
  };

  /* ---------- Text utils ---------- */
  const CONTRACTIONS = [
    [/\bwon't\b/g, 'will not'],
    [/\bcan't\b/g, 'cannot'],
    [/\bcan not\b/g, 'cannot'],
    [/n't\b/g, ' not'],
    [/'ve\b/g, ' have'],
    [/'re\b/g, ' are'],
    [/'m\b/g, ' am'],
    [/'ll\b/g, ' will']
  ];

  /** Lenient normaliser for comparing typed answers. */
  ENG.norm = function (s) {
    let t = String(s == null ? '' : s)
      .toLowerCase()
      .replace(/[’‘`´]/g, "'")
      .replace(/[“”«»"]/g, '')
      .replace(/[.,!?;:()]/g, ' ');
    CONTRACTIONS.forEach(([re, rep]) => (t = t.replace(re, rep)));
    return t.replace(/\s+/g, ' ').trim();
  };

  ENG.matches = function (value, alternatives) {
    const v = ENG.norm(value);
    if (!v) return false;
    return alternatives.some((a) => ENG.norm(a) === v);
  };

  ENG.wordCount = function (s) {
    const m = String(s || '').trim().match(/[A-Za-zА-Яа-яІіЇїЄєҐґ0-9'’-]+/g);
    return m ? m.length : 0;
  };

  /* Deterministic shuffle: same order on every visit (keeps saved answers meaningful). */
  function hashStr(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  ENG.shuffle = function (arr, seed) {
    let a = hashStr(String(seed)) || 1;
    const rnd = () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    // avoid returning the original order for small lists
    if (out.length > 2 && out.every((v, i) => v === arr[i])) out.push(out.shift());
    return out;
  };

  /* ---------- Toast ---------- */
  let toastTimer = null;
  ENG.toast = function (msg, kind) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.className = 'toast show' + (kind ? ' ' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (el.className = 'toast'), 2600);
  };

  /* ---------- Confirm modal ---------- */
  ENG.confirm = function ({ title, text, okText, cancelText, checkbox, danger }) {
    return new Promise((resolve) => {
      const h = ENG.h;
      const root = document.getElementById('modal');
      let cb = null;
      const close = (ok) => {
        root.classList.remove('open');
        root.replaceChildren();
        document.removeEventListener('keydown', onKey);
        resolve(ok ? { ok: true, checked: cb ? cb.checked : false } : { ok: false });
      };
      const onKey = (e) => {
        if (e.key === 'Escape') close(false);
      };
      if (checkbox) cb = h('input', { type: 'checkbox' });
      const okBtn = h('button', { class: 'btn ' + (danger ? 'btn-danger' : 'btn-primary'), onclick: () => close(true) }, okText || 'OK');
      const box = h(
        'div',
        { class: 'modal-box', role: 'dialog', 'aria-modal': 'true', 'aria-label': title },
        h('h3', null, title),
        text ? h('p', null, text) : null,
        cb ? h('label', { class: 'check-line' }, cb, h('span', null, checkbox)) : null,
        h('div', { class: 'modal-actions' }, h('button', { class: 'btn btn-ghost', onclick: () => close(false) }, cancelText || 'Скасувати'), okBtn)
      );
      root.replaceChildren(h('div', { class: 'modal-backdrop', onclick: () => close(false) }), box);
      root.classList.add('open');
      document.addEventListener('keydown', onKey);
      okBtn.focus();
    });
  };

  /* ---------- Clipboard ---------- */
  ENG.copy = async function (text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try {
        ok = document.execCommand('copy');
      } catch (err) {
        ok = false;
      }
      ta.remove();
      return ok;
    }
  };

  /* ---------- Speech synthesis (Listening) ----------
   * Picks the most natural English voices available on the device
   * (Natural / Neural / Google / Enhanced…), gives each dialogue speaker
   * its own voice (female / male where possible) and plays lines one by one,
   * so the player can highlight, pause and replay single lines.
   * Chosen voices are stored in eng:_app:voices = { f: name, m: name }.
   */
  const synth = window.speechSynthesis;
  const FEMALE = /\b(female|woman|samantha|karen|moira|tessa|serena|fiona|victoria|libby|sonia|jenny|aria|emma|ava|zira|hazel|susan|kate|martha|allison|joanna|kendra|kimberly|salli|ivy|amy|olivia|natasha|clara|michelle|ana|maisie|abbie|bella|hollie|elizabeth|nancy|sara|jane|catherine|isla|ruth|libby|mia|molly|aurora)\b/i;
  const MALE = /\b(male|man|daniel|arthur|alex|fred|oliver|ryan|guy|david|mark|george|thomas|christopher|eric|brian|andrew|rishi|james|william|matthew|joey|justin|kevin|liam|noah|ethan|alfie|elliot|harry|jason|tony|roger|steffan|davis|aaron|gordon|rocko|reed|grandpa)\b/i;
  function quality(v) {
    const n = v.name;
    let q = 0;
    if (/natural|neural|online/i.test(n)) q += 60;
    if (/premium|enhanced|siri/i.test(n)) q += 50;
    if (/google/i.test(n)) q += 40;
    if (/microsoft/i.test(n) && !/natural|online/i.test(n)) q -= 10;
    if (/(espeak|robot|bad news|bells|boing|bubbles|cellos|whisper|zarvox|trinoids|jester|organ|superstar|wobble|albert|bahh|junior|ralph)/i.test(n)) q -= 100;
    if (/en[-_](GB|US)/i.test(v.lang)) q += 10;
    else if (/en[-_](AU|IE|CA|NZ)/i.test(v.lang)) q += 5;
    return q;
  }
  const genderOf = (v) => (FEMALE.test(v.name) ? 'f' : MALE.test(v.name) ? 'm' : '');
  // Character names in lessons → voice gender
  const FEMALE_NAMES = /^(kate|sofia|sofiia|anna|olena|ira|iryna|maria|marta|olha|olga|kira|yana|yuliia|yulia|dasha|daryna|lena|liza|nina|lucy|emma|mia|alina|halyna|oksana|natalia|nastia|tetiana|vira|kateryna|larysa|mrs|ms|mum|granny|grandma|girl|woman|lady|mila|sara|ksenia|iryna|nadiia|svitlana|olivia|vika|anya)/i;
  const MALE_NAMES = /^(tom|ben|max|sam|mark|marko|jack|paul|petro|taras|ihor|dmytro|dima|den|oleh|oleksii|oleksandr|ostap|roman|bohdan|nick|dad|grandpa|mr|man|boy|james|diego|serhii|andrii|kostia|maks|danylo|artem|yaroslav|nazar|vlad|ivan|mykola|pavlo)/i;
  ENG.speakerGender = function (who) {
    if (!who) return '';
    if (MALE_NAMES.test(who)) return 'm';
    if (FEMALE_NAMES.test(who)) return 'f';
    return '';
  };

  let playToken = 0;
  ENG.speech = {
    supported: !!synth && typeof window.SpeechSynthesisUtterance === 'function',
    rate: 1,
    /** English voices, best first */
    voices() {
      if (!this.supported) return [];
      return synth
        .getVoices()
        .filter((v) => /^en[-_]/i.test(v.lang))
        .sort((a, b) => quality(b) - quality(a));
    },
    isNatural(v) {
      return quality(v) >= 40;
    },
    genderOf,
    /** Voice for gender 'f' | 'm' — saved choice, else best of that gender, else best overall */
    voiceFor(g) {
      const list = this.voices();
      if (!list.length) return null;
      const saved = (ENG.store && ENG.store.app('voices', {})) || {};
      const byName = (n) => list.find((v) => v.name === n);
      if (saved[g] && byName(saved[g])) return byName(saved[g]);
      const same = list.find((v) => genderOf(v) === g);
      if (same) return same;
      // no gendered voice: use the 1st / 2nd best so speakers still differ
      return g === 'm' ? list[1] || list[0] : list[0];
    },
    /** True when both genders resolve to the same voice → use pitch to differ */
    sameVoice() {
      const f = this.voiceFor('f');
      const m = this.voiceFor('m');
      return !!f && !!m && f.name === m.name;
    },
    /** Speak one line. opts: { gender, rate, onstart, onend } */
    say(text, opts) {
      if (!this.supported) return false;
      opts = opts || {};
      const g = opts.gender || 'f';
      const u = new SpeechSynthesisUtterance(text);
      const v = this.voiceFor(g);
      if (v) {
        u.voice = v;
        u.lang = v.lang;
      } else u.lang = 'en-GB';
      u.rate = (opts.rate || 1) * 0.95;
      u.pitch = this.sameVoice() ? (g === 'm' ? 0.85 : 1.1) : 1;
      u.onstart = opts.onstart || null;
      u.onend = opts.onend || null;
      u.onerror = opts.onend || null;
      this._u = u; // keep a reference (Chrome may drop events otherwise)
      synth.speak(u);
      return true;
    },
    /** Simple API used by flashcards, dictation, speaking: speak a string or [{text}] */
    speak(lines, opts) {
      if (!this.supported) return false;
      opts = opts || {};
      this.stop();
      const list = typeof lines === 'string' ? [{ text: lines }] : lines;
      const token = ++playToken;
      let i = 0;
      const next = () => {
        if (token !== playToken) return;
        if (i >= list.length) return opts.onend && opts.onend();
        const line = list[i++];
        this.say(line.text, { gender: line.gender || (line.voice === 1 ? 'm' : 'f'), rate: opts.rate, onend: next });
      };
      next();
      return true;
    },
    stop() {
      playToken++;
      if (this.supported) synth.cancel();
    },
    newToken() {
      this.stop();
      return playToken;
    },
    isCurrent(t) {
      return t === playToken;
    }
  };
  if (ENG.speech.supported) {
    synth.getVoices();
    synth.addEventListener && synth.addEventListener('voiceschanged', () => document.dispatchEvent(new Event('eng:voices')));
  }

  ENG.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  ENG.esc = function (s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  };
})();
