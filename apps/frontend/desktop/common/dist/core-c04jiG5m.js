import { a as e, o as t } from "./chunk-DeXYQlWK.js";
(function(e2, t2) {
  let n2 = r, i2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(267)) / 1 + parseInt(n2(261)) / 2 * (parseInt(n2(301)) / 3) + parseInt(n2(285)) / 4 + -parseInt(n2(221)) / 5 * (-parseInt(n2(202)) / 6) + parseInt(n2(187)) / 7 * (-parseInt(n2(280)) / 8) + parseInt(n2(237)) / 9 + -parseInt(n2(276)) / 10 * (-parseInt(n2(186)) / 11) === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 736820);
var n = t(e((e2, t2) => {
  let n2 = r;
  function i2(e3) {
    let t3 = r;
    return e3 instanceof Map ? e3.clear = e3.delete = e3[t3(199)] = function() {
      throw Error(`map is read-only`);
    } : e3 instanceof Set && (e3.add = e3[t3(223)] = e3.delete = function() {
      throw Error(t3(218));
    }), Object[t3(217)](e3), Object.getOwnPropertyNames(e3).forEach((t4) => {
      let n3 = e3[t4], r2 = typeof n3;
      (r2 === `object` || r2 === `function`) && !Object.isFrozen(n3) && i2(n3);
    }), e3;
  }
  var a = class {
    constructor(e3) {
      e3[r(287)] === void 0 && (e3.data = {}), this.data = e3.data, this.isMatchIgnored = false;
    }
    ignoreMatch() {
      this.isMatchIgnored = true;
    }
  };
  function o(e3) {
    let t3 = r;
    return e3.replace(/&/g, `&amp;`)[t3(241)](/</g, t3(220))[t3(241)](/>/g, `&gt;`).replace(/"/g, `&quot;`).replace(/'/g, t3(243));
  }
  function s(e3, ...t3) {
    let n3 = /* @__PURE__ */ Object.create(null);
    for (let t4 in e3) n3[t4] = e3[t4];
    return t3.forEach(function(e4) {
      for (let t4 in e4) n3[t4] = e4[t4];
    }), n3;
  }
  var c = `</span>`, l = (e3) => !!e3.scope, u = (e3, { prefix: t3 }) => {
    let n3 = r;
    if (e3.startsWith(`language:`)) return e3.replace(n3(279), `language-`);
    if (e3.includes(`.`)) {
      let r2 = e3[n3(234)](`.`);
      return [`` + t3 + r2[n3(219)](), ...r2.map((e4, t4) => `` + e4 + `_`.repeat(t4 + 1))].join(` `);
    }
    return `` + t3 + e3;
  }, d = class {
    constructor(e3, t3) {
      this.buffer = ``, this.classPrefix = t3.classPrefix, e3.walk(this);
    }
    [n2(209)](e3) {
      this.buffer += o(e3);
    }
    openNode(e3) {
      if (!l(e3)) return;
      let t3 = u(e3.scope, { prefix: this.classPrefix });
      this.span(t3);
    }
    closeNode(e3) {
      l(e3) && (this.buffer += c);
    }
    value() {
      return this.buffer;
    }
    span(e3) {
      let t3 = n2;
      this[t3(292)] += `<span class="` + e3 + `">`;
    }
  }, f = (e3 = {}) => {
    let t3 = n2, r2 = { children: [] };
    return Object[t3(228)](r2, e3), r2;
  }, p = class e3 {
    constructor() {
      let e4 = n2;
      this.rootNode = f(), this[e4(256)] = [this.rootNode];
    }
    get [n2(286)]() {
      return this.stack[this.stack.length - 1];
    }
    get [n2(208)]() {
      return this.rootNode;
    }
    add(e4) {
      this.top.children.push(e4);
    }
    [n2(225)](e4) {
      let t3 = f({ scope: e4 });
      this.add(t3), this.stack.push(t3);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON[n2(272)](this.rootNode, null, 4);
    }
    [n2(183)](e4) {
      return this.constructor._walk(e4, this.rootNode);
    }
    static _walk(e4, t3) {
      let r2 = n2;
      return typeof t3 == `string` ? e4.addText(t3) : t3[r2(269)] && (e4[r2(225)](t3), t3.children[r2(201)]((t4) => this._walk(e4, t4)), e4[r2(210)](t3)), e4;
    }
    static _collapse(t3) {
      let r2 = n2;
      typeof t3 != `string` && t3.children && (t3[r2(269)].every((e4) => typeof e4 == `string`) ? t3.children = [t3.children.join(``)] : t3.children.forEach((t4) => {
        e3[r2(268)](t4);
      }));
    }
  }, m = class extends p {
    constructor(e3) {
      super(), this.options = e3;
    }
    addText(e3) {
      e3 !== `` && this.add(e3);
    }
    startScope(e3) {
      let t3 = n2;
      this[t3(225)](e3);
    }
    [n2(293)]() {
      let e3 = n2;
      this[e3(210)]();
    }
    __addSublanguage(e3, t3) {
      let r2 = n2, i3 = e3.root;
      t3 && (i3[r2(271)] = `language:` + t3), this[r2(294)](i3);
    }
    toHTML() {
      let e3 = n2;
      return new d(this, this[e3(288)]).value();
    }
    finalize() {
      let e3 = n2;
      return this[e3(251)](), true;
    }
  };
  function h(e3) {
    return e3 ? typeof e3 == `string` ? e3 : e3.source : null;
  }
  function g(e3) {
    return y(n2(258), e3, `)`);
  }
  function _(e3) {
    return y(`(?:`, e3, `)*`);
  }
  function v(e3) {
    return y(`(?:`, e3, `)?`);
  }
  function y(...e3) {
    return e3.map((e4) => h(e4)).join(``);
  }
  function b(e3) {
    let t3 = n2, r2 = e3[e3.length - 1];
    return typeof r2 == `object` && r2[t3(290)] === Object ? (e3.splice(e3.length - 1, 1), r2) : {};
  }
  function x(...e3) {
    return `(` + (b(e3).capture ? `` : `?:`) + e3.map((e4) => h(e4)).join(`|`) + `)`;
  }
  function S(e3) {
    return RegExp(e3[n2(284)]() + `|`).exec(``).length - 1;
  }
  function ee(e3, t3) {
    let n3 = e3 && e3.exec(t3);
    return n3 && n3.index === 0;
  }
  var C = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function w(e3, { joinWith: t3 }) {
    let r2 = n2, i3 = 0;
    return e3[r2(238)]((e4) => {
      let t4 = r2;
      i3 += 1;
      let n3 = i3, a2 = h(e4), o2 = ``;
      for (; a2.length > 0; ) {
        let e5 = C.exec(a2);
        if (!e5) {
          o2 += a2;
          break;
        }
        o2 += a2[t4(259)](0, e5.index), a2 = a2[t4(259)](e5.index + e5[0].length), e5[0][0] === `\\` && e5[1] ? o2 += `\\` + String(Number(e5[1]) + n3) : (o2 += e5[0], e5[0] === `(` && i3++);
      }
      return o2;
    }).map((e4) => `(` + e4 + `)`).join(t3);
  }
  var T = /\b\B/, E = `[a-zA-Z]\\w*`, D = `[a-zA-Z_]\\w*`, O = n2(273), k = `(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)`, A = n2(191), j = n2(212), M = (e3 = {}) => {
    let t3 = /^#![ ]*\//;
    return e3.binary && (e3.begin = y(t3, /.*\b/, e3.binary, /\b.*/)), s({ scope: `meta`, begin: t3, end: /$/, relevance: 0, "on:begin": (e4, t4) => {
      e4[r(252)] !== 0 && t4.ignoreMatch();
    } }, e3);
  }, N = { begin: `\\\\[\\s\\S]`, relevance: 0 }, P = { scope: `string`, begin: `'`, end: `'`, illegal: `\\n`, contains: [N] }, F = { scope: `string`, begin: `"`, end: `"`, illegal: `\\n`, contains: [N] }, I = { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, L = function(e3, t3, r2 = {}) {
    let i3 = n2, a2 = s({ scope: `comment`, begin: e3, end: t3, contains: [] }, r2);
    a2.contains[i3(270)]({ scope: `doctag`, begin: `[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)`, end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, excludeBegin: true, relevance: 0 });
    let o2 = x(`I`, `a`, `is`, `so`, `us`, `to`, `at`, `if`, `in`, `it`, `on`, /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
    return a2.contains[i3(270)]({ begin: y(/[ ]+/, `(`, o2, /[.]?[:]?([.][ ]|[ ])/, `){3}`) }), a2;
  }, R = L(`//`, `$`), z = L(`/\\*`, `\\*/`), B = L(`#`, `$`), te = { scope: `number`, begin: O, relevance: 0 }, ne = { scope: `number`, begin: k, relevance: 0 }, re = { scope: `number`, begin: A, relevance: 0 }, ie = { scope: `regexp`, begin: /\/(?=[^/\n]*\/)/, end: /\/[gimuy]*/, contains: [N, { begin: /\[/, end: /\]/, relevance: 0, contains: [N] }] }, ae = { scope: `title`, begin: E, relevance: 0 }, oe = { scope: n2(185), begin: D, relevance: 0 }, se = { begin: `\\.\\s*` + D, relevance: 0 }, V = Object.freeze({ "__proto__": null, APOS_STRING_MODE: P, BACKSLASH_ESCAPE: N, BINARY_NUMBER_MODE: re, BINARY_NUMBER_RE: A, COMMENT: L, C_BLOCK_COMMENT_MODE: z, C_LINE_COMMENT_MODE: R, C_NUMBER_MODE: ne, C_NUMBER_RE: k, END_SAME_AS_BEGIN: function(e3) {
    return Object.assign(e3, { "on:begin": (e4, t3) => {
      t3.data._beginMatch = e4[1];
    }, "on:end": (e4, t3) => {
      let n3 = r;
      t3.data._beginMatch !== e4[1] && t3[n3(283)]();
    } });
  }, HASH_COMMENT_MODE: B, IDENT_RE: E, MATCH_NOTHING_RE: T, METHOD_GUARD: se, NUMBER_MODE: te, NUMBER_RE: O, PHRASAL_WORDS_MODE: I, QUOTE_STRING_MODE: F, REGEXP_MODE: ie, RE_STARTERS_RE: j, SHEBANG: M, TITLE_MODE: ae, UNDERSCORE_IDENT_RE: D, UNDERSCORE_TITLE_MODE: oe });
  function ce(e3, t3) {
    e3.input[e3.index - 1] === `.` && t3.ignoreMatch();
  }
  function le(e3, t3) {
    e3.className !== void 0 && (e3.scope = e3.className, delete e3.className);
  }
  function ue(e3, t3) {
    t3 && e3.beginKeywords && (e3.begin = `\\b(` + e3.beginKeywords.split(` `).join(`|`) + `)(?!\\.)(?=\\b|\\s)`, e3.__beforeBegin = ce, e3.keywords = e3.keywords || e3.beginKeywords, delete e3.beginKeywords, e3.relevance === void 0 && (e3.relevance = 0));
  }
  function de(e3, t3) {
    Array.isArray(e3.illegal) && (e3.illegal = x(...e3.illegal));
  }
  function fe(e3, t3) {
    let r2 = n2;
    if (e3.match) {
      if (e3.begin || e3.end) throw Error(`begin & end are not supported with match`);
      e3[r2(255)] = e3.match, delete e3.match;
    }
  }
  function pe(e3, t3) {
    e3.relevance === void 0 && (e3.relevance = 1);
  }
  var me = (e3, t3) => {
    let r2 = n2;
    if (!e3.beforeMatch) return;
    if (e3.starts) throw Error(`beforeMatch cannot be used with starts`);
    let i3 = Object[r2(228)]({}, e3);
    Object.keys(e3)[r2(201)]((t4) => {
      delete e3[t4];
    }), e3.keywords = i3.keywords, e3.begin = y(i3.beforeMatch, g(i3.begin)), e3[r2(302)] = { relevance: 0, contains: [Object.assign(i3, { endsParent: true })] }, e3.relevance = 0, delete i3.beforeMatch;
  }, he = [`of`, `and`, `for`, `in`, `not`, `or`, `if`, `then`, `parent`, n2(205), n2(260)], ge = `keyword`;
  function _e(e3, t3, r2 = ge) {
    let i3 = n2, a2 = Object[i3(264)](null);
    return typeof e3 == `string` ? o2(r2, e3.split(` `)) : Array.isArray(e3) ? o2(r2, e3) : Object.keys(e3).forEach(function(n3) {
      Object[i3(228)](a2, _e(e3[n3], t3, n3));
    }), a2;
    function o2(e4, n3) {
      let r3 = i3;
      t3 && (n3 = n3.map((e5) => e5.toLowerCase())), n3[r3(201)](function(t4) {
        let n4 = t4.split(`|`);
        a2[n4[0]] = [e4, ve(n4[0], n4[1])];
      });
    }
  }
  function ve(e3, t3) {
    return t3 ? Number(t3) : +!ye(e3);
  }
  function ye(e3) {
    let t3 = n2;
    return he.includes(e3[t3(289)]());
  }
  var H = {}, U = (e3) => {
    console.error(e3);
  }, W = (e3, ...t3) => {
    console.log(`WARN: ` + e3, ...t3);
  }, G = (e3, t3) => {
    H[e3 + `/` + t3] || (console.log(`Deprecated as of ` + e3 + `. ` + t3), H[e3 + `/` + t3] = true);
  }, K = Error();
  function q(e3, t3, { key: r2 }) {
    let i3 = n2, a2 = 0, o2 = e3[r2], s2 = {}, c2 = {};
    for (let e4 = 1; e4 <= t3.length; e4++) c2[e4 + a2] = o2[e4], s2[e4 + a2] = true, a2 += S(t3[e4 - 1]);
    e3[r2] = c2, e3[r2][i3(222)] = s2, e3[r2][i3(239)] = true;
  }
  function be(e3) {
    let t3 = n2;
    if (Array.isArray(e3.begin)) {
      if (e3.skip || e3[t3(253)] || e3.returnBegin) throw U(`skip, excludeBegin, returnBegin not compatible with beginScope: {}`), K;
      if (typeof e3.beginScope != `object` || e3.beginScope === null) throw U(`beginScope must be object`), K;
      q(e3, e3.begin, { key: `beginScope` }), e3.begin = w(e3.begin, { joinWith: `` });
    }
  }
  function xe(e3) {
    let t3 = n2;
    if (Array[t3(233)](e3[t3(192)])) {
      if (e3[t3(184)] || e3.excludeEnd || e3.returnEnd) throw U(t3(190)), K;
      if (typeof e3[t3(293)] != t3(277) || e3[t3(293)] === null) throw U(`endScope must be object`), K;
      q(e3, e3.end, { key: t3(293) }), e3[t3(192)] = w(e3[t3(192)], { joinWith: `` });
    }
  }
  function Se(e3) {
    e3.scope && typeof e3.scope == `object` && e3.scope !== null && (e3.beginScope = e3.scope, delete e3.scope);
  }
  function Ce(e3) {
    let t3 = n2;
    Se(e3), typeof e3.beginScope == `string` && (e3.beginScope = { _wrap: e3.beginScope }), typeof e3[t3(293)] == `string` && (e3.endScope = { _wrap: e3.endScope }), be(e3), xe(e3);
  }
  function we(e3) {
    let t3 = n2;
    function i3(t4, n3) {
      let i4 = r;
      return new RegExp(h(t4), `m` + (e3[i4(246)] ? `i` : ``) + (e3.unicodeRegex ? `u` : ``) + (n3 ? `g` : ``));
    }
    class a2 {
      constructor() {
        let e4 = r;
        this.matchIndexes = {}, this.regexes = [], this[e4(274)] = 1, this.position = 0;
      }
      addRule(e4, t4) {
        let n3 = r;
        t4[n3(204)] = this.position++, this.matchIndexes[this.matchAt] = t4, this.regexes.push([t4, e4]), this.matchAt += S(e4) + 1;
      }
      compile() {
        let e4 = r;
        this.regexes.length === 0 && (this.exec = () => null);
        let t4 = this[e4(275)].map((e5) => e5[1]);
        this.matcherRe = i3(w(t4, { joinWith: `|` }), true), this.lastIndex = 0;
      }
      exec(e4) {
        let t4 = r;
        this.matcherRe.lastIndex = this.lastIndex;
        let n3 = this.matcherRe.exec(e4);
        if (!n3) return null;
        let i4 = n3.findIndex((e5, t5) => t5 > 0 && e5 !== void 0), a3 = this.matchIndexes[i4];
        return n3[t4(278)](0, i4), Object.assign(n3, a3);
      }
    }
    class o2 {
      constructor() {
        let e4 = r;
        this[e4(195)] = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      getMatcher(e4) {
        let t4 = r;
        if (this[t4(206)][e4]) return this.multiRegexes[e4];
        let n3 = new a2();
        return this[t4(195)][t4(229)](e4).forEach(([e5, t5]) => n3.addRule(e5, t5)), n3[t4(200)](), this.multiRegexes[e4] = n3, n3;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      addRule(e4, t4) {
        let n3 = r;
        this.rules.push([e4, t4]), t4.type === n3(255) && this.count++;
      }
      exec(e4) {
        let t4 = r, n3 = this.getMatcher(this.regexIndex);
        n3.lastIndex = this.lastIndex;
        let i4 = n3[t4(224)](e4);
        if (this.resumingScanAtSamePosition() && !(i4 && i4.index === this.lastIndex)) {
          let t5 = this.getMatcher(0);
          t5.lastIndex = this.lastIndex + 1, i4 = t5.exec(e4);
        }
        return i4 && (this[t4(215)] += i4.position + 1, this.regexIndex === this.count && this.considerAll()), i4;
      }
    }
    function c2(e4) {
      let t4 = r, n3 = new o2();
      return e4[t4(207)].forEach((e5) => n3.addRule(e5.begin, { rule: e5, type: `begin` })), e4.terminatorEnd && n3.addRule(e4.terminatorEnd, { type: `end` }), e4[t4(254)] && n3.addRule(e4.illegal, { type: `illegal` }), n3;
    }
    function l2(t4, n3) {
      let a3 = r, o3 = t4;
      if (t4.isCompiled) return o3;
      [le, fe, Ce, me].forEach((e4) => e4(t4, n3)), e3[a3(197)].forEach((e4) => e4(t4, n3)), t4.__beforeBegin = null, [ue, de, pe].forEach((e4) => e4(t4, n3)), t4.isCompiled = true;
      let s2 = null;
      return typeof t4[a3(299)] == `object` && t4.keywords.$pattern && (t4[a3(299)] = Object[a3(228)]({}, t4.keywords), s2 = t4.keywords[a3(189)], delete t4.keywords[a3(189)]), s2 || (s2 = /\w+/), t4[a3(299)] && (t4.keywords = _e(t4.keywords, e3[a3(246)])), o3.keywordPatternRe = i3(s2, true), n3 && (t4[a3(255)] || (t4.begin = /\B|\b/), o3[a3(235)] = i3(o3.begin), !t4.end && !t4[a3(194)] && (t4.end = /\B|\b/), t4[a3(192)] && (o3.endRe = i3(o3.end)), o3.terminatorEnd = h(o3.end) || ``, t4.endsWithParent && n3[a3(296)] && (o3.terminatorEnd += (t4.end ? `|` : ``) + n3.terminatorEnd)), t4[a3(254)] && (o3.illegalRe = i3(t4.illegal)), t4.contains || (t4.contains = []), t4.contains = [].concat(...t4[a3(207)].map(function(e4) {
        return Te(e4 === `self` ? t4 : e4);
      })), t4[a3(207)].forEach(function(e4) {
        l2(e4, o3);
      }), t4.starts && l2(t4.starts, n3), o3[a3(230)] = c2(o3), o3;
    }
    if (e3.compilerExtensions || (e3.compilerExtensions = []), e3.contains && e3[t3(207)].includes(`self`)) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e3.classNameAliases = s(e3.classNameAliases || {}), l2(e3);
  }
  function J(e3) {
    return e3 ? e3.endsWithParent || J(e3.starts) : false;
  }
  function Te(e3) {
    let t3 = n2;
    return e3[t3(245)] && !e3.cachedVariants && (e3[t3(247)] = e3[t3(245)][t3(238)](function(t4) {
      return s(e3, { variants: null }, t4);
    })), e3.cachedVariants ? e3.cachedVariants : J(e3) ? s(e3, { starts: e3.starts ? s(e3[t3(302)]) : null }) : Object.isFrozen(e3) ? s(e3) : e3;
  }
  var Ee = `11.11.1`, De = class extends Error {
    constructor(e3, t3) {
      super(e3), this.name = `HTMLInjectionError`, this.html = t3;
    }
  }, Y = o, X = s, Z = Symbol(n2(244)), Oe = 7, Q = function(e3) {
    let t3 = /* @__PURE__ */ Object.create(null), n3 = /* @__PURE__ */ Object.create(null), o2 = [], s2 = true, c2 = `Could not find the language '{}', did you forget to load/include a language module?`, l2 = { disableAutodetect: true, name: `Plain text`, contains: [] }, u2 = { ignoreUnescapedHTML: false, throwUnescapedHTML: false, noHighlightRe: /^(no-?highlight)$/i, languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: `hljs-`, cssSelector: `pre code`, languages: null, __emitter: m };
    function d2(e4) {
      return u2.noHighlightRe.test(e4);
    }
    function f2(e4) {
      let t4 = r, n4 = e4.className + ` `;
      n4 += e4.parentNode ? e4.parentNode.className : ``;
      let i3 = u2.languageDetectRe.exec(n4);
      if (i3) {
        let t5 = N2(i3[1]);
        return t5 || (W(c2.replace(`{}`, i3[1])), W(`Falling back to no-highlight mode for this block.`, e4)), t5 ? i3[1] : `no-highlight`;
      }
      return n4[t4(234)](/\s+/).find((e5) => d2(e5) || N2(e5));
    }
    function p2(e4, t4, n4) {
      let i3 = r, a2 = ``, o3 = ``;
      typeof t4 == `object` ? (a2 = e4, n4 = t4.ignoreIllegals, o3 = t4.language) : (G(`10.7.0`, `highlight(lang, code, ...args) has been deprecated.`), G(`10.7.0`, `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), o3 = e4, a2 = t4), n4 === void 0 && (n4 = true);
      let s3 = { code: a2, language: o3 };
      z2(`before:highlight`, s3);
      let c3 = s3.result ? s3[i3(211)] : h2(s3.language, s3.code, n4);
      return c3.code = s3.code, z2(`after:highlight`, c3), c3;
    }
    function h2(e4, n4, i3, o3) {
      let l3 = r, d3 = Object[l3(264)](null);
      function f3(e5, t4) {
        return e5.keywords[t4];
      }
      function p3() {
        let e5 = l3;
        if (!j3.keywords) {
          P3.addText(F3);
          return;
        }
        let t4 = 0;
        j3.keywordPatternRe.lastIndex = 0;
        let n5 = j3.keywordPatternRe.exec(F3), r2 = ``;
        for (; n5; ) {
          r2 += F3.substring(t4, n5.index);
          let i4 = O3[e5(246)] ? n5[0][e5(289)]() : n5[0], a2 = f3(j3, i4);
          if (a2) {
            let [t5, o4] = a2;
            if (P3[e5(209)](r2), r2 = ``, d3[i4] = (d3[i4] || 0) + 1, d3[i4] <= Oe && (I3 += o4), t5.startsWith(`_`)) r2 += n5[0];
            else {
              let e6 = O3.classNameAliases[t5] || t5;
              _2(n5[0], e6);
            }
          } else r2 += n5[0];
          t4 = j3.keywordPatternRe.lastIndex, n5 = j3.keywordPatternRe.exec(F3);
        }
        r2 += F3.substring(t4), P3.addText(r2);
      }
      function m2() {
        let e5 = l3;
        if (F3 === ``) return;
        let n5 = null;
        if (typeof j3.subLanguage == e5(242)) {
          if (!t3[j3[e5(240)]]) {
            P3.addText(F3);
            return;
          }
          n5 = h2(j3.subLanguage, F3, true, M3[j3[e5(240)]]), M3[j3.subLanguage] = n5[e5(248)];
        } else n5 = S2(F3, j3.subLanguage.length ? j3[e5(240)] : null);
        j3.relevance > 0 && (I3 += n5.relevance), P3.__addSublanguage(n5._emitter, n5[e5(213)]);
      }
      function g2() {
        j3.subLanguage == null ? p3() : m2(), F3 = ``;
      }
      function _2(e5, t4) {
        let n5 = l3;
        e5 !== `` && (P3.startScope(t4), P3[n5(209)](e5), P3.endScope());
      }
      function v2(e5, t4) {
        let n5 = 1, r2 = t4.length - 1;
        for (; n5 <= r2; ) {
          if (!e5._emit[n5]) {
            n5++;
            continue;
          }
          let r3 = O3.classNameAliases[e5[n5]] || e5[n5], i4 = t4[n5];
          r3 ? _2(i4, r3) : (F3 = i4, p3(), F3 = ``), n5++;
        }
      }
      function y2(e5, t4) {
        let n5 = l3;
        return e5[n5(271)] && typeof e5.scope == `string` && P3.openNode(O3.classNameAliases[e5[n5(271)]] || e5.scope), e5[n5(291)] && (e5[n5(291)][n5(266)] ? (_2(F3, O3.classNameAliases[e5.beginScope[n5(266)]] || e5[n5(291)][n5(266)]), F3 = ``) : e5.beginScope._multi && (v2(e5.beginScope, t4), F3 = ``)), j3 = Object[n5(264)](e5, { parent: { value: j3 } }), j3;
      }
      function b3(e5, t4, n5) {
        let r2 = l3, i4 = ee(e5[r2(188)], n5);
        if (i4) {
          if (e5[r2(196)]) {
            let n6 = new a(e5);
            e5[r2(196)](t4, n6), n6.isMatchIgnored && (i4 = false);
          }
          if (i4) {
            for (; e5.endsParent && e5.parent; ) e5 = e5.parent;
            return e5;
          }
        }
        if (e5.endsWithParent) return b3(e5.parent, t4, n5);
      }
      function x2(e5) {
        return j3[l3(230)].regexIndex === 0 ? (F3 += e5[0], 1) : (z3 = true, 0);
      }
      function C3(e5) {
        let t4 = e5[0], n5 = e5.rule, r2 = new a(n5), i4 = [n5.__beforeBegin, n5[`on:begin`]];
        for (let n6 of i4) if (n6 && (n6(e5, r2), r2.isMatchIgnored)) return x2(t4);
        return n5.skip ? F3 += t4 : (n5.excludeBegin && (F3 += t4), g2(), !n5.returnBegin && !n5.excludeBegin && (F3 = t4)), y2(n5, e5), n5.returnBegin ? 0 : t4.length;
      }
      function w3(e5) {
        let t4 = l3, r2 = e5[0], i4 = n4.substring(e5[t4(252)]), a2 = b3(j3, e5, i4);
        if (!a2) return Z;
        let o4 = j3;
        j3.endScope && j3.endScope._wrap ? (g2(), _2(r2, j3.endScope._wrap)) : j3[t4(293)] && j3.endScope._multi ? (g2(), v2(j3[t4(293)], e5)) : o4.skip ? F3 += r2 : (o4[t4(214)] || o4.excludeEnd || (F3 += r2), g2(), o4.excludeEnd && (F3 = r2));
        do
          j3.scope && P3.closeNode(), !j3.skip && !j3.subLanguage && (I3 += j3.relevance), j3 = j3.parent;
        while (j3 !== a2[t4(262)]);
        return a2.starts && y2(a2.starts, e5), o4.returnEnd ? 0 : r2.length;
      }
      function T3() {
        let e5 = l3, t4 = [];
        for (let n5 = j3; n5 !== O3; n5 = n5.parent) n5.scope && t4[e5(231)](n5.scope);
        t4[e5(201)]((t5) => P3[e5(225)](t5));
      }
      let E3 = {};
      function D3(t4, r2) {
        let a2 = l3, o4 = r2 && r2[0];
        if (F3 += t4, o4 == null) return g2(), 0;
        if (E3[a2(193)] === `begin` && r2.type === `end` && E3.index === r2.index && o4 === ``) {
          if (F3 += n4.slice(r2.index, r2[a2(252)] + 1), !s2) {
            let t5 = Error(`0 width match regex (` + e4 + `)`);
            throw t5.languageName = e4, t5.badRule = E3.rule, t5;
          }
          return 1;
        }
        if (E3 = r2, r2.type === `begin`) return C3(r2);
        if (r2.type === `illegal` && !i3) {
          let e5 = Error(`Illegal lexeme "` + o4 + a2(198) + (j3.scope || `<unnamed>`) + `"`);
          throw e5[a2(257)] = j3, e5;
        } else if (r2.type === `end`) {
          let e5 = w3(r2);
          if (e5 !== Z) return e5;
        }
        if (r2[a2(193)] === `illegal` && o4 === ``) return F3 += `
`, 1;
        if (R3 > 1e5 && R3 > r2.index * 3) throw Error(`potential infinite loop, way more iterations than matches`);
        return F3 += o4, o4.length;
      }
      let O3 = N2(e4);
      if (!O3) throw U(c2.replace(`{}`, e4)), Error(`Unknown language: "` + e4 + `"`);
      let k3 = we(O3), A3 = ``, j3 = o3 || k3, M3 = {}, P3 = new u2.__emitter(u2);
      T3();
      let F3 = ``, I3 = 0, L3 = 0, R3 = 0, z3 = false;
      try {
        if (O3.__emitTokens) O3.__emitTokens(n4, P3);
        else {
          for (j3.matcher.considerAll(); ; ) {
            R3++, z3 ? z3 = false : j3.matcher.considerAll(), j3.matcher.lastIndex = L3;
            let e5 = j3.matcher.exec(n4);
            if (!e5) break;
            let t4 = D3(n4.substring(L3, e5.index), e5);
            L3 = e5.index + t4;
          }
          D3(n4.substring(L3));
        }
        return P3.finalize(), A3 = P3[l3(298)](), { language: e4, value: A3, relevance: I3, illegal: false, _emitter: P3, _top: j3 };
      } catch (t4) {
        if (t4[l3(263)] && t4.message.includes(`Illegal`)) return { language: e4, value: Y(n4), illegal: true, relevance: 0, _illegalBy: { message: t4.message, index: L3, context: n4.slice(L3 - 100, L3 + 100), mode: t4.mode, resultSoFar: A3 }, _emitter: P3 };
        if (s2) return { language: e4, value: Y(n4), illegal: false, relevance: 0, errorRaised: t4, _emitter: P3, _top: j3 };
        throw t4;
      }
    }
    function b2(e4) {
      let t4 = { value: Y(e4), illegal: false, relevance: 0, _top: l2, _emitter: new u2.__emitter(u2) };
      return t4._emitter.addText(e4), t4;
    }
    function S2(e4, n4) {
      let i3 = r;
      n4 = n4 || u2.languages || Object.keys(t3);
      let a2 = b2(e4), o3 = n4.filter(N2).filter(F2).map((t4) => h2(t4, e4, false));
      o3[i3(231)](a2);
      let [s3, c3] = o3.sort((e5, t4) => {
        if (e5.relevance !== t4.relevance) return t4.relevance - e5.relevance;
        if (e5.language && t4.language) {
          if (N2(e5.language).supersetOf === t4.language) return 1;
          if (N2(t4.language).supersetOf === e5.language) return -1;
        }
        return 0;
      }), l3 = s3;
      return l3.secondBest = c3, l3;
    }
    function C2(e4, t4, i3) {
      let a2 = r, o3 = t4 && n3[t4] || i3;
      e4.classList[a2(294)](`hljs`), e4.classList.add(`language-` + o3);
    }
    function w2(e4) {
      let t4 = r, n4 = null, i3 = f2(e4);
      if (d2(i3)) return;
      if (z2(`before:highlightElement`, { el: e4, language: i3 }), e4.dataset.highlighted) {
        console.log(t4(203), e4);
        return;
      }
      if (e4[t4(269)].length > 0 && (u2.ignoreUnescapedHTML || (console.warn(`One of your code blocks includes unescaped HTML. This is a potentially serious security risk.`), console.warn(`https://github.com/highlightjs/highlight.js/wiki/security`), console[t4(232)](`The element with unescaped HTML:`), console.warn(e4)), u2.throwUnescapedHTML)) throw new De(t4(295), e4[t4(249)]);
      n4 = e4;
      let a2 = n4.textContent, o3 = i3 ? p2(a2, { language: i3, ignoreIllegals: true }) : S2(a2);
      e4.innerHTML = o3.value, e4.dataset.highlighted = `yes`, C2(e4, i3, o3[t4(213)]), e4.result = { language: o3.language, re: o3[t4(281)], relevance: o3[t4(281)] }, o3.secondBest && (e4.secondBest = { language: o3.secondBest[t4(213)], relevance: o3.secondBest.relevance }), z2(`after:highlightElement`, { el: e4, result: o3, text: a2 });
    }
    function T2(e4) {
      u2 = X(u2, e4);
    }
    let E2 = () => {
      let e4 = r;
      k2(), G(e4(300), e4(265));
    };
    function D2() {
      k2(), G(`10.6.0`, `initHighlightingOnLoad() deprecated.  Use highlightAll() now.`);
    }
    let O2 = false;
    function k2() {
      let e4 = r;
      function t4() {
        k2();
      }
      if (document.readyState === e4(297)) {
        O2 || window.addEventListener(e4(216), t4, false), O2 = true;
        return;
      }
      document[e4(227)](u2[e4(250)])[e4(201)](w2);
    }
    function A2(n4, i3) {
      let a2 = r, o3 = null;
      try {
        o3 = i3(e3);
      } catch (e4) {
        if (U(`Language definition for '{}' could not be registered.`.replace(`{}`, n4)), s2) U(e4);
        else throw e4;
        o3 = l2;
      }
      o3[a2(226)] || (o3.name = n4), t3[n4] = o3, o3.rawDefinition = i3[a2(236)](null, e3), o3.aliases && P2(o3.aliases, { languageName: n4 });
    }
    function j2(e4) {
      delete t3[e4];
      for (let t4 of Object.keys(n3)) n3[t4] === e4 && delete n3[t4];
    }
    function M2() {
      return Object.keys(t3);
    }
    function N2(e4) {
      return e4 = (e4 || ``).toLowerCase(), t3[e4] || t3[n3[e4]];
    }
    function P2(e4, { languageName: t4 }) {
      typeof e4 == r(242) && (e4 = [e4]), e4.forEach((e5) => {
        n3[e5.toLowerCase()] = t4;
      });
    }
    function F2(e4) {
      let t4 = N2(e4);
      return t4 && !t4.disableAutodetect;
    }
    function I2(e4) {
      let t4 = r;
      e4[`before:highlightBlock`] && !e4[`before:highlightElement`] && (e4[`before:highlightElement`] = (t5) => {
        e4[`before:highlightBlock`](Object.assign({ block: t5.el }, t5));
      }), e4[`after:highlightBlock`] && !e4[t4(282)] && (e4[t4(282)] = (t5) => {
        e4[`after:highlightBlock`](Object.assign({ block: t5.el }, t5));
      });
    }
    function L2(e4) {
      I2(e4), o2.push(e4);
    }
    function R2(e4) {
      let t4 = o2.indexOf(e4);
      t4 !== -1 && o2.splice(t4, 1);
    }
    function z2(e4, t4) {
      let n4 = e4;
      o2.forEach(function(e5) {
        e5[n4] && e5[n4](t4);
      });
    }
    function B2(e4) {
      return G(`10.7.0`, `highlightBlock will be removed entirely in v12.0`), G(`10.7.0`, `Please use highlightElement now.`), w2(e4);
    }
    Object.assign(e3, { highlight: p2, highlightAuto: S2, highlightAll: k2, highlightElement: w2, highlightBlock: B2, configure: T2, initHighlighting: E2, initHighlightingOnLoad: D2, registerLanguage: A2, unregisterLanguage: j2, listLanguages: M2, getLanguage: N2, registerAliases: P2, autoDetection: F2, inherit: X, addPlugin: L2, removePlugin: R2 }), e3.debugMode = function() {
      s2 = false;
    }, e3.safeMode = function() {
      s2 = true;
    }, e3.versionString = Ee, e3.regex = { concat: y, lookahead: g, either: x, optional: v, anyNumberOfTimes: _ };
    for (let e4 in V) typeof V[e4] == `object` && i2(V[e4]);
    return Object.assign(e3, V), e3;
  }, $ = Q({});
  $.newInstance = () => Q({}), t2.exports = $, $.HighlightJS = $, $.default = $;
})()).default;
function r(e2, t2) {
  return e2 -= 183, i()[e2];
}
function i() {
  let e2 = [`30GANMWL`, "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", `position`, `list`, `multiRegexes`, `contains`, `root`, `addText`, `closeNode`, `result`, `!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~`, `language`, `returnEnd`, `regexIndex`, `DOMContentLoaded`, `freeze`, `set is read-only`, `shift`, `&lt;`, `102925hmiutJ`, `_emit`, `clear`, `exec`, `openNode`, `name`, `querySelectorAll`, `assign`, `slice`, `matcher`, `unshift`, `warn`, `isArray`, `split`, `beginRe`, `bind`, `1769967ZfAXDu`, `map`, `_multi`, `subLanguage`, `replace`, `string`, `&#x27;`, `nomatch`, `variants`, `case_insensitive`, `cachedVariants`, `_top`, `innerHTML`, `cssSelector`, `closeAllNodes`, `index`, `excludeBegin`, `illegal`, `begin`, `stack`, `mode`, `(?=`, `substring`, `value`, `1394jYUuzw`, `parent`, `message`, `create`, `initHighlighting() deprecated.  Use highlightAll() now.`, `_wrap`, `1052925RuIYty`, `_collapse`, `children`, `push`, `scope`, `stringify`, `\\b\\d+(\\.\\d+)?`, `matchAt`, `regexes`, `19040KPLekp`, `object`, `splice`, `language:`, `184NBHjQG`, `relevance`, `after:highlightElement`, `ignoreMatch`, `toString`, `3177948lKpOuT`, `top`, `data`, `options`, `toLowerCase`, `constructor`, `beginScope`, `buffer`, `endScope`, `add`, `One of your code blocks includes unescaped HTML.`, `terminatorEnd`, `loading`, `toHTML`, `keywords`, `10.6.0`, `1668evMKjx`, `starts`, `walk`, `skip`, `title`, `3223RZRTqY`, `76006emYXKx`, `endRe`, `$pattern`, `skip, excludeEnd, returnEnd not compatible with endScope: {}`, `\\b(0b[01]+)`, `end`, `type`, `endsWithParent`, `rules`, `on:end`, `compilerExtensions`, `" for mode "`, `set`, `compile`, `forEach`];
  return i = function() {
    return e2;
  }, i();
}
export {
  n as default
};
