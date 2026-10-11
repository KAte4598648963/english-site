/*
 * Storage: everything lives in localStorage under keys
 *   eng:<lessonId>:<exerciseId>   — state of one exercise (permanent exercise ID)
 *   eng:<lessonId>:_notes|_vocab|_pos|_timer|_summary — lesson-level data
 *   eng:_app:<key>               — app-wide prefs
 * Every value is wrapped as { v: <schemaVersion>, d: <data> } so the format can be migrated later.
 * Exercise IDs must never start with "_" (reserved for lesson-level keys).
 */
(function () {
  'use strict';

  const PREFIX = 'eng:';
  const SCHEMA_VERSION = 1;
  // migrations[n] upgrades data from schema n to n+1: (data, key) => data
  const migrations = {};

  const mem = {};
  const hasLS = (function () {
    try {
      const k = PREFIX + '__probe';
      localStorage.setItem(k, '1');
      localStorage.removeItem(k);
      return true;
    } catch (e) {
      return false;
    }
  })();

  function rawGet(k) {
    try {
      return hasLS ? localStorage.getItem(k) : k in mem ? mem[k] : null;
    } catch (e) {
      return null;
    }
  }
  function rawSet(k, v) {
    try {
      if (hasLS) localStorage.setItem(k, v);
      else mem[k] = v;
    } catch (e) {
      mem[k] = v;
      console.warn('[eng] cannot write to localStorage', e);
    }
  }
  function rawDel(k) {
    try {
      if (hasLS) localStorage.removeItem(k);
    } catch (e) {
      /* ignore */
    }
    delete mem[k];
  }
  function rawKeys() {
    const out = [];
    try {
      if (hasLS) for (let i = 0; i < localStorage.length; i++) out.push(localStorage.key(i));
    } catch (e) {
      /* ignore */
    }
    Object.keys(mem).forEach((k) => out.indexOf(k) < 0 && out.push(k));
    return out;
  }

  const key = (scope, name) => PREFIX + scope + ':' + name;

  function unwrap(raw, k) {
    if (raw == null) return undefined;
    let o;
    try {
      o = JSON.parse(raw);
    } catch (e) {
      return undefined;
    }
    if (!o || typeof o !== 'object' || !('v' in o)) return undefined;
    let v = o.v;
    let d = o.d;
    while (v < SCHEMA_VERSION) {
      if (migrations[v]) d = migrations[v](d, k);
      v++;
    }
    if (o.v !== v) rawSet(k, JSON.stringify({ v, d }));
    return d;
  }

  const Store = {
    SCHEMA_VERSION,
    persistent: hasLS,
    get(scope, name, fallback) {
      const k = key(scope, name);
      const d = unwrap(rawGet(k), k);
      return d === undefined ? fallback : d;
    },
    set(scope, name, value) {
      rawSet(key(scope, name), JSON.stringify({ v: SCHEMA_VERSION, d: value }));
    },
    del(scope, name) {
      rawDel(key(scope, name));
    },
    /** All names stored for a scope (lesson), e.g. ['read-1', '_notes'] */
    names(scope) {
      const p = PREFIX + scope + ':';
      return rawKeys()
        .filter((k) => k && k.indexOf(p) === 0)
        .map((k) => k.slice(p.length));
    },
    app(name, fallback) {
      return Store.get('_app', name, fallback);
    },
    setApp(name, value) {
      Store.set('_app', name, value);
    }
  };

  Store.setApp('schema', SCHEMA_VERSION);
  window.ENG.store = Store;
})();
