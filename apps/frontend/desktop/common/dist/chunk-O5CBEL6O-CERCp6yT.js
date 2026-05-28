import { _ as e, g as t, h as n, m as r, p as i, v as a } from "./index-D-g3WoLo.js";
import { m as o } from "./src-B18GHWxx.js";
import { n as s, t as c } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { g as l, m as u, n as d, p as f, z as p } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { A as m } from "./chunk-5ZQYHXKU-BklVe06k.js";
function h(e4, t2) {
  return e4 -= 289, J()[e4];
}
var g = h;
(function(e4, t2) {
  let n2 = h, r2 = e4();
  for (; ; ) try {
    if (-parseInt(n2(428)) / 1 * (-parseInt(n2(340)) / 2) + -parseInt(n2(462)) / 3 * (parseInt(n2(365)) / 4) + parseInt(n2(430)) / 5 + -parseInt(n2(447)) / 6 * (parseInt(n2(316)) / 7) + -parseInt(n2(481)) / 8 + parseInt(n2(474)) / 9 + -parseInt(n2(341)) / 10 * (-parseInt(n2(369)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(J, 392218), n();
var _ = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }), v = Object.freeze({ rotate: 0, vFlip: false, hFlip: false }), ee = Object.freeze(t(t({}, _), v)), te = Object.freeze(t(t({}, ee), {}, { body: ``, hidden: false }));
e(), n();
var ne = Object.freeze({ width: null, height: null }), re = Object.freeze(t(t({}, ne), v)), ie = (e4, t2, n2, r2 = ``) => {
  let i2 = h, a2 = e4.split(`:`);
  if (e4.slice(0, 1) === `@`) {
    if (a2.length < 2 || a2.length > 3) return null;
    r2 = a2.shift().slice(1);
  }
  if (a2.length > 3 || !a2.length) return null;
  if (a2.length > 1) {
    let e5 = a2.pop(), n3 = a2.pop(), o3 = { provider: a2[i2(429)] > 0 ? a2[0] : r2, prefix: n3, name: e5 };
    return t2 && !y(o3) ? null : o3;
  }
  let o2 = a2[0], s2 = o2[i2(459)](`-`);
  if (s2.length > 1) {
    let e5 = { provider: r2, prefix: s2.shift(), name: s2.join(`-`) };
    return t2 && !y(e5) ? null : e5;
  }
  if (n2 && r2 === ``) {
    let e5 = { provider: r2, prefix: ``, name: o2 };
    return t2 && !y(e5, n2) ? null : e5;
  }
  return null;
}, y = (e4, t2) => e4 ? !!((t2 && e4.prefix === `` || e4.prefix) && e4.name) : false;
function ae(e4, t2) {
  let n2 = h, r2 = {};
  !e4.hFlip != !t2[n2(401)] && (r2.hFlip = true), !e4.vFlip != !t2.vFlip && (r2.vFlip = true);
  let i2 = ((e4.rotate || 0) + (t2.rotate || 0)) % 4;
  return i2 && (r2[n2(360)] = i2), r2;
}
function oe(e4, t2) {
  let n2 = ae(e4, t2);
  for (let r2 in te) r2 in v ? r2 in e4 && !(r2 in n2) && (n2[r2] = v[r2]) : r2 in t2 ? n2[r2] = t2[r2] : r2 in e4 && (n2[r2] = e4[r2]);
  return n2;
}
function se(e4, t2) {
  let n2 = h, r2 = e4.icons, i2 = e4[n2(473)] || Object[n2(431)](null), a2 = Object[n2(431)](null);
  function o2(e5) {
    if (r2[e5]) return a2[e5] = [];
    if (!(e5 in a2)) {
      a2[e5] = null;
      let t3 = i2[e5] && i2[e5].parent, n3 = t3 && o2(t3);
      n3 && (a2[e5] = [t3].concat(n3));
    }
    return a2[e5];
  }
  return (t2 || Object.keys(r2)[n2(479)](Object.keys(i2)))[n2(292)](o2), a2;
}
function ce(e4, t2, n2) {
  let r2 = e4.icons, i2 = e4.aliases || /* @__PURE__ */ Object.create(null), a2 = {};
  function o2(e5) {
    a2 = oe(r2[e5] || i2[e5], a2);
  }
  return o2(t2), n2.forEach(o2), oe(e4, a2);
}
function le(e4, t2) {
  if (e4.icons[t2]) return ce(e4, t2, []);
  let n2 = se(e4, [t2])[t2];
  return n2 ? ce(e4, t2, n2) : null;
}
var ue = /(-?[0-9.]*[0-9]+[0-9.]*)/g, de = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function fe(e4, t2, n2) {
  let r2 = h;
  if (t2 === 1) return e4;
  if (n2 || (n2 = 100), typeof e4 == `number`) return Math.ceil(e4 * t2 * n2) / n2;
  if (typeof e4 != `string`) return e4;
  let i2 = e4[r2(459)](ue);
  if (i2 === null || !i2.length) return e4;
  let a2 = [], o2 = i2.shift(), s2 = de[r2(461)](o2);
  for (; ; ) {
    if (s2) {
      let e5 = parseFloat(o2);
      isNaN(e5) ? a2.push(o2) : a2.push(Math[r2(376)](e5 * t2 * n2) / n2);
    } else a2.push(o2);
    if (o2 = i2.shift(), o2 === void 0) return a2.join(``);
    s2 = !s2;
  }
}
function pe(e4, t2 = `defs`) {
  let n2 = h, r2 = ``, i2 = e4.indexOf(`<` + t2);
  for (; i2 >= 0; ) {
    let a2 = e4.indexOf(`>`, i2), o2 = e4[n2(327)](`</` + t2);
    if (a2 === -1 || o2 === -1) break;
    let s2 = e4.indexOf(`>`, o2);
    if (s2 === -1) break;
    r2 += e4.slice(a2 + 1, o2).trim(), e4 = e4.slice(0, i2).trim() + e4.slice(s2 + 1);
  }
  return { defs: r2, content: e4 };
}
function me(e4, t2) {
  return e4 ? `<defs>` + e4 + `</defs>` + t2 : t2;
}
function he(e4, t2, n2) {
  let r2 = pe(e4);
  return me(r2.defs, t2 + r2.content + n2);
}
n();
var ge = (e4) => e4 === `unset` || e4 === `undefined` || e4 === `none`;
function _e(e4, n2) {
  let r2 = h, i2 = t(t({}, ee), e4), a2 = t(t({}, re), n2), o2 = { left: i2.left, top: i2.top, width: i2.width, height: i2.height }, s2 = i2.body;
  [i2, a2].forEach((e5) => {
    let t2 = h, n3 = [], r3 = e5.hFlip, i3 = e5.vFlip, a3 = e5.rotate;
    r3 ? i3 ? a3 += 2 : (n3.push(`translate(` + (o2.width + o2.left).toString() + ` ` + (0 - o2.top).toString() + `)`), n3.push(`scale(-1 1)`), o2.top = o2.left = 0) : i3 && (n3.push(t2(373) + (0 - o2.left).toString() + ` ` + (o2.height + o2.top).toString() + `)`), n3.push(t2(406)), o2.top = o2.left = 0);
    let c3;
    switch (a3 < 0 && (a3 -= Math.floor(a3 / 4) * 4), a3 %= 4, a3) {
      case 1:
        c3 = o2.height / 2 + o2.top, n3.unshift(t2(422) + c3.toString() + ` ` + c3[t2(386)]() + `)`);
        break;
      case 2:
        n3.unshift(`rotate(180 ` + (o2[t2(410)] / 2 + o2.left).toString() + ` ` + (o2[t2(338)] / 2 + o2.top)[t2(386)]() + `)`);
        break;
      case 3:
        c3 = o2[t2(410)] / 2 + o2.left, n3.unshift(t2(449) + c3.toString() + ` ` + c3.toString() + `)`);
        break;
    }
    a3 % 2 == 1 && (o2.left !== o2.top && (c3 = o2[t2(346)], o2.left = o2.top, o2[t2(478)] = c3), o2.width !== o2.height && (c3 = o2.width, o2[t2(410)] = o2.height, o2.height = c3)), n3[t2(429)] && (s2 = he(s2, t2(475) + n3[t2(434)](` `) + `">`, t2(456)));
  });
  let c2 = a2.width, l2 = a2.height, u2 = o2.width, d2 = o2[r2(338)], f2, p2;
  c2 === null ? (p2 = l2 === null ? r2(311) : l2 === `auto` ? d2 : l2, f2 = fe(p2, u2 / d2)) : (f2 = c2 === `auto` ? u2 : c2, p2 = l2 === null ? fe(f2, d2 / u2) : l2 === `auto` ? d2 : l2);
  let m2 = {}, g2 = (e5, t2) => {
    ge(t2) || (m2[e5] = t2.toString());
  };
  g2(`width`, f2), g2(`height`, p2);
  let _2 = [o2.left, o2.top, u2, d2];
  return m2.viewBox = _2.join(` `), { attributes: m2, viewBox: _2, body: s2 };
}
var ve = /\sid="(\S+)"/g, ye = /* @__PURE__ */ new Map();
function be(e4) {
  let t2 = h;
  e4 = e4[t2(342)](/[0-9]+$/, ``) || `a`;
  let n2 = ye[t2(306)](e4) || 0;
  return ye.set(e4, n2 + 1), n2 ? `` + e4 + n2 : e4;
}
function xe(e4) {
  let t2 = h, n2 = [], r2;
  for (; r2 = ve[t2(391)](e4); ) n2[t2(418)](r2[1]);
  if (!n2.length) return e4;
  let i2 = `suffix` + (Math.random() * 16777216 | Date.now()).toString(16);
  return n2[t2(292)]((n3) => {
    let r3 = t2, a2 = be(n3), o2 = n3.replace(/[.*+?^${}()|[\]\\]/g, r3(417));
    e4 = e4.replace(RegExp(`([#;"])(` + o2 + `)([")]|\\.[a-z])`, `g`), `$1` + a2 + i2 + `$3`);
  }), e4 = e4.replace(new RegExp(i2, `g`), ``), e4;
}
function Se(e4, t2) {
  let n2 = h, r2 = e4.indexOf(`xlink:`) === -1 ? `` : ` xmlns:xlink="http://www.w3.org/1999/xlink"`;
  for (let e5 in t2) r2 += ` ` + e5 + `="` + t2[e5] + `"`;
  return `<svg xmlns="http://www.w3.org/2000/svg"` + r2 + `>` + e4 + n2(351);
}
r(), n();
var b;
function x() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var S = x();
function Ce(e4) {
  S = e4;
}
var C = { exec: () => null };
function w(e4, t2 = ``) {
  let n2 = typeof e4 == h(307) ? e4 : e4.source, r2 = { replace: (e5, t3) => {
    let i2 = typeof t3 == `string` ? t3 : t3.source;
    return i2 = i2.replace(T.caret, `$1`), n2 = n2.replace(e5, i2), r2;
  }, getRegex: () => new RegExp(n2, t2) };
  return r2;
}
var T = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: RegExp(`[\\p{L}\\p{N}]`, `u`), escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e4) => RegExp(`^( {0,3}` + e4 + `)((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e4) => RegExp(g(372) + Math.min(3, e4 - 1) + `}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e4) => RegExp(`^ {0,` + Math.min(3, e4 - 1) + `}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e4) => RegExp(g(372) + Math.min(3, e4 - 1) + g(463)), headingBeginRegex: (e4) => RegExp(`^ {0,` + Math.min(3, e4 - 1) + `}#`), htmlBeginRegex: (e4) => RegExp(`^ {0,` + Math.min(3, e4 - 1) + `}<(?:[a-z].*>|!--)`, `i`) }, we = /^(?:[ \t]*(?:\n|$))+/, Te = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Ee = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, E = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, De = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, D = /(?:[*+-]|\d{1,9}[.)])/, Oe = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ke = w(Oe)[g(342)](/bull/g, D).replace(/blockCode/g, /(?: {4}| {0,3}\t)/)[g(342)](/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, ``).getRegex(), Ae = w(Oe)[g(342)](/bull/g, D)[g(342)](/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/)[g(342)](/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), O = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, je = /^[^\n]+/, k = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Me = w(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(g(385), k).replace(`title`, /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ne = w(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, D).getRegex(), A = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`, j = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Pe = w(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`, `i`).replace(`comment`, j).replace(`tag`, A).replace(`attribute`, / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Fe = w(O).replace(`hr`, E)[g(342)](`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(`|table`, ``).replace(`blockquote`, ` {0,3}>`)[g(342)](g(395), " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(g(337), ` {0,3}(?:[*+-]|1[.)]) `).replace(`html`, g(339)).replace(`tag`, A).getRegex(), M = { blockquote: w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`, Fe).getRegex(), code: Te, def: Me, fences: Ee, heading: De, hr: E, html: Pe, lheading: ke, list: Ne, newline: we, paragraph: Fe, table: C, text: je }, Ie = w(g(470))[g(342)](`hr`, E).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`, g(303))[g(342)](`code`, `(?: {4}| {0,3}	)[^\\n]`).replace(`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")[g(342)](`list`, ` {0,3}(?:[*+-]|1[.)]) `).replace(`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(g(393), A).getRegex(), Le = t(t({}, M), {}, { lheading: Ae, table: Ie, paragraph: w(O)[g(342)](`hr`, E).replace(g(404), ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``).replace(g(419), Ie)[g(342)](`blockquote`, g(303)).replace(`fences`, g(457)).replace(`list`, ` {0,3}(?:[*+-]|1[.)]) `)[g(342)](`html`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`)[g(342)](`tag`, A).getRegex() }), Re = t(t({}, M), {}, { html: w(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`, j).replace(/tag/g, `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: C, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: w(O).replace(`hr`, E).replace(`heading`, ` *#{1,6} *[^
]`).replace(`lheading`, ke)[g(342)](g(439), ``).replace(g(413), ` {0,3}>`).replace(`|fences`, ``).replace(`|list`, ``)[g(342)](`|html`, ``)[g(342)](g(416), ``).getRegex() }), ze = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Be = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Ve = /^( {2,}|\\)\n(?!\s*$)/, He = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, N = RegExp(`[\\p{P}\\p{S}]`, `u`), P = RegExp(`[\\s\\p{P}\\p{S}]`, `u`), Ue = RegExp(`[^\\s\\p{P}\\p{S}]`, `u`), We = w(/^((?![*_])punctSpace)/, `u`).replace(/punctSpace/g, P)[g(368)](), Ge = RegExp(`(?!~)[\\p{P}\\p{S}]`, `u`), Ke = RegExp(`(?!~)[\\s\\p{P}\\p{S}]`, `u`), qe = RegExp(`(?:[^\\s\\p{P}\\p{S}]|~)`, `u`), Je = /\[[^\[\]]*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, Ye = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Xe = w(Ye, `u`).replace(/punct/g, N).getRegex(), Ze = w(Ye, `u`).replace(/punct/g, Ge).getRegex(), Qe = `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`, $e = w(Qe, `gu`).replace(/notPunctSpace/g, Ue)[g(342)](/punctSpace/g, P).replace(/punct/g, N).getRegex(), et = w(Qe, `gu`).replace(/notPunctSpace/g, qe)[g(342)](/punctSpace/g, Ke).replace(/punct/g, Ge).getRegex(), tt = w(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`, `gu`).replace(/notPunctSpace/g, Ue).replace(/punctSpace/g, P).replace(/punct/g, N).getRegex(), nt = w(/\\(punct)/, `gu`).replace(/punct/g, N)[g(368)](), rt = w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`, /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), it = w(j).replace(`(?:-->|$)`, `-->`).getRegex(), at = w(g(348)).replace(`comment`, it).replace(`attribute`, /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), F = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`[^`]*`|[^\[\]\\`])*?/, ot = w(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace(`label`, F).replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)[g(342)](`title`, /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), st = w(/^!?\[(label)\]\[(ref)\]/)[g(342)](`label`, F).replace(`ref`, k).getRegex(), ct = w(/^!?\[(ref)\](?:\[\])?/).replace(`ref`, k).getRegex(), I = { _backpedal: C, anyPunctuation: nt, autolink: rt, blockSkip: Je, br: Ve, code: Be, del: C, emStrongLDelim: Xe, emStrongRDelimAst: $e, emStrongRDelimUnd: tt, escape: ze, link: ot, nolink: ct, punctuation: We, reflink: st, reflinkSearch: w(`reflink|nolink(?!\\()`, `g`).replace(`reflink`, st).replace(`nolink`, ct).getRegex(), tag: at, text: He, url: C }, lt = t(t({}, I), {}, { link: w(/^!?\[(label)\]\((.*?)\)/).replace(`label`, F).getRegex(), reflink: w(/^!?\[(label)\]\s*\[([^\]]*)\]/)[g(342)](g(385), F)[g(368)]() }), ut = t(t({}, I), {}, { emStrongRDelimAst: et, emStrongLDelim: Ze, url: w(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, `i`).replace(g(392), /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }), dt = t(t({}, ut), {}, { br: w(Ve)[g(342)](`{2,}`, `*`).getRegex(), text: w(ut[g(408)])[g(342)](`\\b_`, `\\b_| {2,}\\n`).replace(/\{2,\}/g, `*`)[g(368)]() }), L = { normal: M, gfm: Le, pedantic: Re }, R = { normal: I, gfm: ut, breaks: dt, pedantic: lt }, ft = { "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` }, pt = (e4) => ft[e4];
function z(e4, t2) {
  let n2 = g;
  if (t2) {
    if (T[n2(409)].test(e4)) return e4[n2(342)](T[n2(477)], pt);
  } else if (T.escapeTestNoEncode.test(e4)) return e4.replace(T[n2(363)], pt);
  return e4;
}
function mt(e4) {
  try {
    e4 = encodeURI(e4).replace(T.percentDecode, `%`);
  } catch {
    return null;
  }
  return e4;
}
function ht(e4, t2) {
  let n2 = g;
  var r2;
  let i2 = e4[n2(342)](T.findPipe, (e5, t3, n3) => {
    let r3 = false, i3 = t3;
    for (; --i3 >= 0 && n3[i3] === `\\`; ) r3 = !r3;
    return r3 ? `|` : ` |`;
  }).split(T.splitPipe), a2 = 0;
  if (i2[0].trim() || i2.shift(), i2.length > 0 && !((r2 = i2.at(-1)) != null && r2.trim()) && i2.pop(), t2) if (i2.length > t2) i2.splice(t2);
  else for (; i2.length < t2; ) i2.push(``);
  for (; a2 < i2.length; a2++) i2[a2] = i2[a2].trim().replace(T.slashPipe, `|`);
  return i2;
}
function B(e4, t2, n2) {
  let r2 = e4.length;
  if (r2 === 0) return ``;
  let i2 = 0;
  for (; i2 < r2; ) {
    let a2 = e4.charAt(r2 - i2 - 1);
    if (a2 === t2 && !n2) i2++;
    else if (a2 !== t2 && n2) i2++;
    else break;
  }
  return e4.slice(0, r2 - i2);
}
function gt(e4, t2) {
  if (e4.indexOf(t2[1]) === -1) return -1;
  let n2 = 0;
  for (let r2 = 0; r2 < e4.length; r2++) if (e4[r2] === `\\`) r2++;
  else if (e4[r2] === t2[0]) n2++;
  else if (e4[r2] === t2[1] && (n2--, n2 < 0)) return r2;
  return n2 > 0 ? -2 : -1;
}
function _t(e4, t2, n2, r2, i2) {
  let a2 = t2.href, o2 = t2.title || null, s2 = e4[1].replace(i2.other.outputLinkReplace, `$1`);
  r2.state.inLink = true;
  let c2 = { type: e4[0].charAt(0) === `!` ? `image` : `link`, raw: n2, href: a2, title: o2, text: s2, tokens: r2.inlineTokens(s2) };
  return r2.state.inLink = false, c2;
}
function vt(e4, t2, n2) {
  let r2 = e4.match(n2.other.indentCodeCompensation);
  if (r2 === null) return t2;
  let i2 = r2[1];
  return t2.split(`
`).map((e5) => {
    let t3 = h, r3 = e5.match(n2.other.beginningSpace);
    if (r3 === null) return e5;
    let [a2] = r3;
    return a2.length >= i2.length ? e5[t3(344)](i2[t3(429)]) : e5;
  }).join(`
`);
}
var V = class {
  constructor(e4) {
    a(this, `options`, void 0), a(this, `rules`, void 0), a(this, `lexer`, void 0), this.options = e4 || S;
  }
  space(e4) {
    let t2 = g, n2 = this[t2(402)].block.newline.exec(e4);
    if (n2 && n2[0].length > 0) return { type: `space`, raw: n2[0] };
  }
  code(e4) {
    let t2 = g, n2 = this.rules.block.code.exec(e4);
    if (n2) {
      let e5 = n2[0][t2(342)](this.rules.other.codeRemoveIndent, ``);
      return { type: `code`, raw: n2[0], codeBlockStyle: `indented`, text: this.options[t2(414)] ? e5 : B(e5, `
`) };
    }
  }
  fences(e4) {
    let t2 = g, n2 = this[t2(402)].block.fences.exec(e4);
    if (n2) {
      let e5 = n2[0], t3 = vt(e5, n2[3] || ``, this.rules);
      return { type: `code`, raw: e5, lang: n2[2] ? n2[2].trim().replace(this.rules.inline.anyPunctuation, `$1`) : n2[2], text: t3 };
    }
  }
  [g(404)](e4) {
    let t2 = g, n2 = this[t2(402)][t2(299)].heading.exec(e4);
    if (n2) {
      let e5 = n2[2][t2(289)]();
      if (this[t2(402)][t2(468)].endingHash.test(e5)) {
        let n3 = B(e5, `#`);
        (this[t2(403)].pedantic || !n3 || this.rules.other.endingSpaceChar.test(n3)) && (e5 = n3.trim());
      }
      return { type: `heading`, raw: n2[0], depth: n2[1][t2(429)], text: e5, tokens: this.lexer.inline(e5) };
    }
  }
  hr(e4) {
    let t2 = this.rules.block.hr.exec(e4);
    if (t2) return { type: `hr`, raw: B(t2[0], `
`) };
  }
  blockquote(e4) {
    let t2 = g, n2 = this.rules.block.blockquote.exec(e4);
    if (n2) {
      let e5 = B(n2[0], `
`)[t2(459)](`
`), r2 = ``, i2 = ``, a2 = [];
      for (; e5.length > 0; ) {
        let n3 = false, o2 = [], s2;
        for (s2 = 0; s2 < e5.length; s2++) if (this.rules.other.blockquoteStart.test(e5[s2])) o2.push(e5[s2]), n3 = true;
        else if (!n3) o2.push(e5[s2]);
        else break;
        e5 = e5.slice(s2);
        let c2 = o2.join(`
`), l2 = c2.replace(this.rules.other[t2(446)], `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, ``);
        r2 = r2 ? r2 + `
` + c2 : c2, i2 = i2 ? i2 + `
` + l2 : l2;
        let u2 = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(l2, a2, true), this.lexer.state.top = u2, e5.length === 0) break;
        let d2 = a2.at(-1);
        if ((d2 == null ? void 0 : d2.type) === `code`) break;
        if ((d2 == null ? void 0 : d2.type) === `blockquote`) {
          let n4 = d2, o3 = n4.raw + `
` + e5.join(`
`), s3 = this.blockquote(o3);
          a2[a2.length - 1] = s3, r2 = r2.substring(0, r2.length - n4.raw[t2(429)]) + s3.raw, i2 = i2.substring(0, i2.length - n4.text.length) + s3.text;
          break;
        } else if ((d2 == null ? void 0 : d2.type) === `list`) {
          let n4 = d2, o3 = n4.raw + `
` + e5.join(`
`), s3 = this.list(o3);
          a2[a2.length - 1] = s3, r2 = r2.substring(0, r2.length - d2.raw.length) + s3.raw, i2 = i2.substring(0, i2[t2(429)] - n4.raw.length) + s3[t2(298)], e5 = o3.substring(a2.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: `blockquote`, raw: r2, tokens: a2, text: i2 };
    }
  }
  list(e4) {
    let t2 = g, n2 = this[t2(402)].block[t2(337)].exec(e4);
    if (n2) {
      let r2 = n2[1][t2(289)](), i2 = r2.length > 1, a2 = { type: t2(337), raw: ``, ordered: i2, start: i2 ? +r2.slice(0, -1) : ``, loose: false, items: [] };
      r2 = i2 ? `\\d{1,9}\\` + r2.slice(-1) : `\\` + r2, this.options.pedantic && (r2 = i2 ? r2 : t2(432));
      let o2 = this.rules[t2(468)][t2(362)](r2), s2 = false;
      for (; e4; ) {
        let r3 = false, i3 = ``, c3 = ``;
        if (!(n2 = o2.exec(e4)) || this.rules[t2(299)].hr[t2(461)](e4)) break;
        i3 = n2[0], e4 = e4.substring(i3.length);
        let l2 = n2[2].split(`
`, 1)[0][t2(342)](this.rules.other.listReplaceTabs, (e5) => ` `.repeat(3 * e5.length)), u2 = e4.split(`
`, 1)[0], d2 = !l2.trim(), f2 = 0;
        if (this.options.pedantic ? (f2 = 2, c3 = l2.trimStart()) : d2 ? f2 = n2[1].length + 1 : (f2 = n2[2].search(this.rules.other[t2(300)]), f2 = f2 > 4 ? 1 : f2, c3 = l2.slice(f2), f2 += n2[1][t2(429)]), d2 && this.rules.other.blankLine.test(u2) && (i3 += u2 + `
`, e4 = e4.substring(u2.length + 1), r3 = true), !r3) {
          let n3 = this.rules.other.nextBulletRegex(f2), r4 = this[t2(402)].other.hrRegex(f2), a3 = this.rules.other.fencesBeginRegex(f2), o3 = this.rules.other.headingBeginRegex(f2), s3 = this.rules.other.htmlBeginRegex(f2);
          for (; e4; ) {
            let p3 = e4.split(`
`, 1)[0], m3;
            if (u2 = p3, this.options.pedantic ? (u2 = u2.replace(this.rules.other.listReplaceNesting, `  `), m3 = u2) : m3 = u2.replace(this[t2(402)].other.tabCharGlobal, `    `), a3.test(u2) || o3.test(u2) || s3.test(u2) || n3.test(u2) || r4.test(u2)) break;
            if (m3.search(this.rules[t2(468)].nonSpaceChar) >= f2 || !u2.trim()) c3 += `
` + m3.slice(f2);
            else {
              if (d2 || l2[t2(342)](this.rules[t2(468)].tabCharGlobal, `    `).search(this.rules.other.nonSpaceChar) >= 4 || a3.test(l2) || o3.test(l2) || r4.test(l2)) break;
              c3 += `
` + u2;
            }
            !d2 && !u2.trim() && (d2 = true), i3 += p3 + `
`, e4 = e4.substring(p3.length + 1), l2 = m3.slice(f2);
          }
        }
        a2.loose || (s2 ? a2.loose = true : this[t2(402)].other.doubleBlankLine.test(i3) && (s2 = true));
        let p2 = null, m2;
        this.options.gfm && (p2 = this.rules[t2(468)].listIsTask.exec(c3), p2 && (m2 = p2[0] !== `[ ] `, c3 = c3.replace(this.rules.other.listReplaceTask, ``))), a2.items[t2(418)]({ type: `list_item`, raw: i3, task: !!p2, checked: m2, loose: false, text: c3, tokens: [] }), a2.raw += i3;
      }
      let c2 = a2.items.at(-1);
      if (c2) c2[t2(298)] = c2.raw.trimEnd(), c2.text = c2.text.trimEnd();
      else return;
      a2.raw = a2[t2(298)].trimEnd();
      for (let e5 = 0; e5 < a2[t2(352)][t2(429)]; e5++) if (this.lexer[t2(370)][t2(478)] = false, a2[t2(352)][e5].tokens = this[t2(335)].blockTokens(a2.items[e5].text, []), !a2.loose) {
        let n3 = a2.items[e5].tokens.filter((e6) => e6.type === t2(332));
        a2.loose = n3.length > 0 && n3.some((e6) => this[t2(402)][t2(468)].anyLine.test(e6.raw));
      }
      if (a2.loose) for (let e5 = 0; e5 < a2.items.length; e5++) a2[t2(352)][e5].loose = true;
      return a2;
    }
  }
  [g(444)](e4) {
    let t2 = g, n2 = this.rules.block[t2(444)].exec(e4);
    if (n2) return { type: t2(444), block: true, raw: n2[0], pre: n2[1] === `pre` || n2[1] === t2(319) || n2[1] === `style`, text: n2[0] };
  }
  [g(374)](e4) {
    let t2 = g, n2 = this.rules.block.def.exec(e4);
    if (n2) {
      let e5 = n2[1].toLowerCase().replace(this[t2(402)].other.multipleSpaceGlobal, ` `), r2 = n2[2] ? n2[2].replace(this.rules.other[t2(397)], `$1`).replace(this[t2(402)][t2(379)].anyPunctuation, `$1`) : ``, i2 = n2[3] ? n2[3].substring(1, n2[3].length - 1)[t2(342)](this.rules.inline.anyPunctuation, `$1`) : n2[3];
      return { type: `def`, tag: e5, raw: n2[0], href: r2, title: i2 };
    }
  }
  table(e4) {
    let t2 = g;
    var n2;
    let r2 = this[t2(402)].block[t2(419)].exec(e4);
    if (!r2 || !this[t2(402)].other.tableDelimiter[t2(461)](r2[2])) return;
    let i2 = ht(r2[1]), a2 = r2[2].replace(this[t2(402)].other.tableAlignChars, ``).split(`|`), o2 = (n2 = r2[3]) != null && n2.trim() ? r2[3].replace(this.rules.other.tableRowBlankLine, ``)[t2(459)](`
`) : [], s2 = { type: `table`, raw: r2[0], header: [], align: [], rows: [] };
    if (i2.length === a2[t2(429)]) {
      for (let e5 of a2) this.rules.other.tableAlignRight.test(e5) ? s2.align.push(`right`) : this[t2(402)][t2(468)].tableAlignCenter.test(e5) ? s2.align[t2(418)](`center`) : this.rules[t2(468)][t2(310)].test(e5) ? s2.align[t2(418)](`left`) : s2[t2(375)].push(null);
      for (let e5 = 0; e5 < i2.length; e5++) s2.header.push({ text: i2[e5], tokens: this.lexer.inline(i2[e5]), header: true, align: s2.align[e5] });
      for (let e5 of o2) s2.rows.push(ht(e5, s2.header.length)[t2(384)]((e6, n3) => ({ text: e6, tokens: this[t2(335)].inline(e6), header: false, align: s2.align[n3] })));
      return s2;
    }
  }
  lheading(e4) {
    let t2 = g, n2 = this[t2(402)].block.lheading.exec(e4);
    if (n2) return { type: `heading`, raw: n2[0], depth: n2[2].charAt(0) === `=` ? 1 : 2, text: n2[1], tokens: this.lexer[t2(379)](n2[1]) };
  }
  [g(394)](e4) {
    let t2 = this.rules.block.paragraph.exec(e4);
    if (t2) {
      let e5 = t2[1].charAt(t2[1].length - 1) === `
` ? t2[1].slice(0, -1) : t2[1];
      return { type: `paragraph`, raw: t2[0], text: e5, tokens: this.lexer.inline(e5) };
    }
  }
  [g(408)](e4) {
    let t2 = g, n2 = this.rules.block.text[t2(391)](e4);
    if (n2) return { type: `text`, raw: n2[0], text: n2[0], tokens: this.lexer.inline(n2[0]) };
  }
  [g(435)](e4) {
    let t2 = g, n2 = this[t2(402)].inline[t2(435)].exec(e4);
    if (n2) return { type: `escape`, raw: n2[0], text: n2[1] };
  }
  tag(e4) {
    let t2 = g, n2 = this[t2(402)].inline.tag.exec(e4);
    if (n2) return !this[t2(335)].state.inLink && this.rules.other.startATag.test(n2[0]) ? this[t2(335)].state.inLink = true : this.lexer.state.inLink && this.rules[t2(468)].endATag[t2(461)](n2[0]) && (this[t2(335)].state[t2(349)] = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(n2[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other[t2(437)].test(n2[0]) && (this.lexer[t2(370)].inRawBlock = false), { type: `html`, raw: n2[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: n2[0] };
  }
  link(e4) {
    let t2 = g, n2 = this.rules[t2(379)].link.exec(e4);
    if (n2) {
      let e5 = n2[2].trim();
      if (!this.options.pedantic && this.rules.other[t2(426)].test(e5)) {
        if (!this.rules.other.endAngleBracket.test(e5)) return;
        let t3 = B(e5.slice(0, -1), `\\`);
        if ((e5.length - t3.length) % 2 == 0) return;
      } else {
        let e6 = gt(n2[2], `()`);
        if (e6 === -2) return;
        if (e6 > -1) {
          let r3 = (n2[0][t2(327)](`!`) === 0 ? 5 : 4) + n2[1][t2(429)] + e6;
          n2[2] = n2[2].substring(0, e6), n2[0] = n2[0].substring(0, r3).trim(), n2[3] = ``;
        }
      }
      let r2 = n2[2], i2 = ``;
      if (this.options.pedantic) {
        let e6 = this.rules.other.pedanticHrefTitle.exec(r2);
        e6 && (r2 = e6[1], i2 = e6[3]);
      } else i2 = n2[3] ? n2[3].slice(1, -1) : ``;
      return r2 = r2.trim(), this.rules.other.startAngleBracket[t2(461)](r2) && (r2 = this.options[t2(414)] && !this.rules.other.endAngleBracket.test(e5) ? r2.slice(1) : r2.slice(1, -1)), _t(n2, { href: r2 && r2.replace(this.rules[t2(379)].anyPunctuation, `$1`), title: i2 && i2.replace(this[t2(402)][t2(379)].anyPunctuation, `$1`) }, n2[0], this[t2(335)], this.rules);
    }
  }
  reflink(e4, t2) {
    let n2 = g, r2;
    if ((r2 = this.rules.inline.reflink.exec(e4)) || (r2 = this.rules.inline.nolink[n2(391)](e4))) {
      let e5 = t2[(r2[2] || r2[1]).replace(this[n2(402)][n2(468)].multipleSpaceGlobal, ` `).toLowerCase()];
      if (!e5) {
        let e6 = r2[0].charAt(0);
        return { type: `text`, raw: e6, text: e6 };
      }
      return _t(r2, e5, r2[0], this.lexer, this.rules);
    }
  }
  emStrong(e4, t2, n2 = ``) {
    let r2 = g, i2 = this.rules.inline.emStrongLDelim[r2(391)](e4);
    if (!(!i2 || i2[3] && n2.match(this.rules[r2(468)].unicodeAlphaNumeric)) && (!(i2[1] || i2[2]) || !n2 || this.rules.inline.punctuation.exec(n2))) {
      let n3 = [...i2[0]].length - 1, a2, o2, s2 = n3, c2 = 0, l2 = i2[0][0] === `*` ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (l2[r2(415)] = 0, t2 = t2.slice(-1 * e4.length + n3); (i2 = l2.exec(t2)) != null; ) {
        if (a2 = i2[1] || i2[2] || i2[3] || i2[4] || i2[5] || i2[6], !a2) continue;
        if (o2 = [...a2].length, i2[3] || i2[4]) {
          s2 += o2;
          continue;
        } else if ((i2[5] || i2[6]) && n3 % 3 && !((n3 + o2) % 3)) {
          c2 += o2;
          continue;
        }
        if (s2 -= o2, s2 > 0) continue;
        o2 = Math[r2(361)](o2, o2 + s2 + c2);
        let t3 = [...i2[0]][0].length, l3 = e4.slice(0, n3 + i2.index + t3 + o2);
        if (Math[r2(361)](n3, o2) % 2) {
          let e5 = l3.slice(1, -1);
          return { type: `em`, raw: l3, text: e5, tokens: this.lexer.inlineTokens(e5) };
        }
        let u2 = l3.slice(2, -2);
        return { type: `strong`, raw: l3, text: u2, tokens: this.lexer.inlineTokens(u2) };
      }
    }
  }
  codespan(e4) {
    let t2 = g, n2 = this.rules.inline.code.exec(e4);
    if (n2) {
      let e5 = n2[2].replace(this.rules.other.newLineCharGlobal, ` `), r2 = this.rules.other.nonSpaceChar.test(e5), i2 = this[t2(402)].other.startingSpaceChar[t2(461)](e5) && this.rules.other.endingSpaceChar.test(e5);
      return r2 && i2 && (e5 = e5.substring(1, e5.length - 1)), { type: `codespan`, raw: n2[0], text: e5 };
    }
  }
  br(e4) {
    let t2 = g, n2 = this[t2(402)].inline.br.exec(e4);
    if (n2) return { type: `br`, raw: n2[0] };
  }
  del(e4) {
    let t2 = g, n2 = this[t2(402)].inline[t2(450)].exec(e4);
    if (n2) return { type: t2(450), raw: n2[0], text: n2[2], tokens: this.lexer.inlineTokens(n2[2]) };
  }
  [g(336)](e4) {
    let t2 = g, n2 = this.rules.inline.autolink[t2(391)](e4);
    if (n2) {
      let e5, r2;
      return n2[2] === `@` ? (e5 = n2[1], r2 = `mailto:` + e5) : (e5 = n2[1], r2 = e5), { type: `link`, raw: n2[0], text: e5, href: r2, tokens: [{ type: t2(408), raw: e5, text: e5 }] };
    }
  }
  url(e4) {
    var _a;
    let t2 = g, n2;
    if (n2 = this.rules.inline[t2(347)].exec(e4)) {
      let e5, r2;
      if (n2[2] === `@`) e5 = n2[0], r2 = `mailto:` + e5;
      else {
        let i2;
        do
          i2 = n2[0], n2[0] = ((_a = this.rules.inline[t2(309)][t2(391)](n2[0])) == null ? void 0 : _a[0]) ?? ``;
        while (i2 !== n2[0]);
        e5 = n2[0], r2 = n2[1] === `www.` ? `http://` + n2[0] : n2[0];
      }
      return { type: `link`, raw: n2[0], text: e5, href: r2, tokens: [{ type: `text`, raw: e5, text: e5 }] };
    }
  }
  inlineText(e4) {
    let t2 = g, n2 = this.rules[t2(379)].text.exec(e4);
    if (n2) {
      let e5 = this[t2(335)][t2(370)][t2(301)];
      return { type: t2(408), raw: n2[0], text: n2[0], escaped: e5 };
    }
  }
}, H = class e2 {
  constructor(e4) {
    let t2 = g;
    a(this, `tokens`, void 0), a(this, `options`, void 0), a(this, t2(370), void 0), a(this, `tokenizer`, void 0), a(this, `inlineQueue`, void 0), this[t2(443)] = [], this[t2(443)].links = /* @__PURE__ */ Object.create(null), this.options = e4 || S, this.options.tokenizer = this.options.tokenizer || new V(), this.tokenizer = this.options[t2(445)], this.tokenizer.options = this[t2(403)], this[t2(445)].lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let n2 = { other: T, block: L[t2(460)], inline: R.normal };
    this.options.pedantic ? (n2.block = L.pedantic, n2.inline = R.pedantic) : this.options[t2(438)] && (n2.block = L.gfm, this.options[t2(407)] ? n2.inline = R.breaks : n2.inline = R.gfm), this.tokenizer.rules = n2;
  }
  static get rules() {
    return { block: L, inline: R };
  }
  static lex(t2, n2) {
    return new e2(n2).lex(t2);
  }
  static lexInline(t2, n2) {
    return new e2(n2).inlineTokens(t2);
  }
  [g(317)](e4) {
    let t2 = g;
    e4 = e4.replace(T.carriageReturn, `
`), this.blockTokens(e4, this.tokens);
    for (let e5 = 0; e5 < this[t2(359)].length; e5++) {
      let n2 = this.inlineQueue[e5];
      this[t2(451)](n2.src, n2.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e4, t2 = [], n2 = false) {
    let r2 = g;
    for (this.options.pedantic && (e4 = e4[r2(342)](T.tabCharGlobal, `    `).replace(T[r2(328)], ``)); e4; ) {
      var i2, a2;
      let o2;
      if (!((i2 = this.options[r2(387)]) == null || (i2 = i2[r2(299)]) == null) && i2.some((n3) => (o2 = n3.call({ lexer: this }, e4, t2)) ? (e4 = e4.substring(o2.raw.length), t2.push(o2), true) : false)) continue;
      if (o2 = this.tokenizer[r2(332)](e4)) {
        e4 = e4.substring(o2.raw.length);
        let n3 = t2.at(-1);
        o2.raw.length === 1 && n3 !== void 0 ? n3.raw += `
` : t2[r2(418)](o2);
        continue;
      }
      if (o2 = this.tokenizer.code(e4)) {
        e4 = e4.substring(o2[r2(298)].length);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3[r2(441)]) === `paragraph` || (n3 == null ? void 0 : n3.type) === r2(408) ? (n3.raw += (n3.raw.endsWith(`
`) ? `` : `
`) + o2.raw, n3.text += `
` + o2.text, this.inlineQueue.at(-1).src = n3.text) : t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.fences(e4)) {
        e4 = e4.substring(o2.raw[r2(429)]), t2.push(o2);
        continue;
      }
      if (o2 = this[r2(445)].heading(e4)) {
        e4 = e4.substring(o2[r2(298)].length), t2[r2(418)](o2);
        continue;
      }
      if (o2 = this.tokenizer.hr(e4)) {
        e4 = e4.substring(o2[r2(298)].length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer[r2(413)](e4)) {
        e4 = e4.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.list(e4)) {
        e4 = e4.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.html(e4)) {
        e4 = e4.substring(o2.raw[r2(429)]), t2[r2(418)](o2);
        continue;
      }
      if (o2 = this.tokenizer.def(e4)) {
        e4 = e4.substring(o2.raw.length);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === r2(394) || (n3 == null ? void 0 : n3.type) === r2(408) ? (n3.raw += (n3[r2(298)].endsWith(`
`) ? `` : `
`) + o2.raw, n3[r2(408)] += `
` + o2.raw, this.inlineQueue.at(-1)[r2(467)] = n3.text) : this.tokens.links[o2.tag] || (this[r2(443)].links[o2.tag] = { href: o2.href, title: o2[r2(331)] }, t2.push(o2));
        continue;
      }
      if (o2 = this.tokenizer.table(e4)) {
        e4 = e4.substring(o2.raw.length), t2.push(o2);
        continue;
      }
      if (o2 = this.tokenizer.lheading(e4)) {
        e4 = e4.substring(o2[r2(298)].length), t2.push(o2);
        continue;
      }
      let s2 = e4;
      if ((a2 = this.options.extensions) != null && a2.startBlock) {
        let t3 = 1 / 0, n3 = e4.slice(1), r3;
        this.options.extensions.startBlock.forEach((e5) => {
          r3 = e5.call({ lexer: this }, n3), typeof r3 == `number` && r3 >= 0 && (t3 = Math.min(t3, r3));
        }), t3 < 1 / 0 && t3 >= 0 && (s2 = e4.substring(0, t3 + 1));
      }
      if (this.state.top && (o2 = this.tokenizer.paragraph(s2))) {
        let i3 = t2.at(-1);
        n2 && (i3 == null ? void 0 : i3.type) === `paragraph` ? (i3.raw += (i3.raw.endsWith(`
`) ? `` : `
`) + o2.raw, i3.text += `
` + o2.text, this[r2(359)].pop(), this.inlineQueue.at(-1).src = i3.text) : t2.push(o2), n2 = s2.length !== e4.length, e4 = e4.substring(o2[r2(298)].length);
        continue;
      }
      if (o2 = this[r2(445)].text(e4)) {
        e4 = e4.substring(o2.raw.length);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === `text` ? (n3.raw += (n3[r2(298)][r2(293)](`
`) ? `` : `
`) + o2.raw, n3.text += `
` + o2.text, this[r2(359)].pop(), this.inlineQueue.at(-1).src = n3.text) : t2[r2(418)](o2);
        continue;
      }
      if (e4) {
        let t3 = `Infinite loop on byte: ` + e4.charCodeAt(0);
        if (this.options.silent) {
          console.error(t3);
          break;
        } else throw Error(t3);
      }
    }
    return this.state.top = true, t2;
  }
  inline(e4, t2 = []) {
    return this.inlineQueue.push({ src: e4, tokens: t2 }), t2;
  }
  inlineTokens(e4, t2 = []) {
    let n2 = g;
    var r2;
    let i2 = e4, a2 = null;
    if (this.tokens.links) {
      let e5 = Object.keys(this.tokens.links);
      if (e5.length > 0) for (; (a2 = this.tokenizer[n2(402)].inline[n2(380)].exec(i2)) != null; ) e5.includes(a2[0].slice(a2[0].lastIndexOf(`[`) + 1, -1)) && (i2 = i2.slice(0, a2.index) + `[` + `a`.repeat(a2[0].length - 2) + `]` + i2.slice(this[n2(445)].rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a2 = this.tokenizer.rules[n2(379)].anyPunctuation.exec(i2)) != null; ) i2 = i2.slice(0, a2[n2(294)]) + `++` + i2.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (a2 = this.tokenizer[n2(402)].inline.blockSkip.exec(i2)) != null; ) i2 = i2.slice(0, a2[n2(294)]) + `[` + `a`.repeat(a2[0].length - 2) + `]` + i2.slice(this.tokenizer[n2(402)][n2(379)][n2(425)].lastIndex);
    i2 = ((r2 = this.options.hooks) == null || (r2 = r2.emStrongMask) == null ? void 0 : r2.call({ lexer: this }, i2)) ?? i2;
    let o2 = false, s2 = ``;
    for (; e4; ) {
      var c2, l2;
      o2 || (s2 = ``), o2 = false;
      let r3;
      if (!((c2 = this.options.extensions) == null || (c2 = c2.inline) == null) && c2.some((i3) => (r3 = i3.call({ lexer: this }, e4, t2)) ? (e4 = e4.substring(r3.raw.length), t2[n2(418)](r3), true) : false)) continue;
      if (r3 = this.tokenizer.escape(e4)) {
        e4 = e4[n2(405)](r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this[n2(445)].tag(e4)) {
        e4 = e4.substring(r3.raw.length), t2[n2(418)](r3);
        continue;
      }
      if (r3 = this.tokenizer[n2(345)](e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this[n2(445)].reflink(e4, this.tokens.links)) {
        e4 = e4.substring(r3.raw.length);
        let i3 = t2.at(-1);
        r3.type === `text` && (i3 == null ? void 0 : i3.type) === `text` ? (i3.raw += r3[n2(298)], i3.text += r3.text) : t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.emStrong(e4, i2, s2)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.codespan(e4)) {
        e4 = e4.substring(r3.raw[n2(429)]), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.br(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.del(e4)) {
        e4 = e4[n2(405)](r3[n2(298)].length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.autolink(e4)) {
        e4 = e4.substring(r3.raw.length), t2[n2(418)](r3);
        continue;
      }
      if (!this.state.inLink && (r3 = this.tokenizer.url(e4))) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      let a3 = e4;
      if ((l2 = this[n2(403)].extensions) != null && l2.startInline) {
        let t3 = 1 / 0, r4 = e4.slice(1), i3;
        this.options.extensions.startInline.forEach((e5) => {
          i3 = e5[n2(358)]({ lexer: this }, r4), typeof i3 == `number` && i3 >= 0 && (t3 = Math.min(t3, i3));
        }), t3 < 1 / 0 && t3 >= 0 && (a3 = e4.substring(0, t3 + 1));
      }
      if (r3 = this.tokenizer[n2(297)](a3)) {
        e4 = e4.substring(r3.raw.length), r3.raw.slice(-1) !== `_` && (s2 = r3.raw.slice(-1)), o2 = true;
        let i3 = t2.at(-1);
        (i3 == null ? void 0 : i3.type) === n2(408) ? (i3.raw += r3.raw, i3.text += r3.text) : t2.push(r3);
        continue;
      }
      if (e4) {
        let t3 = `Infinite loop on byte: ` + e4.charCodeAt(0);
        if (this.options.silent) {
          console.error(t3);
          break;
        } else throw Error(t3);
      }
    }
    return t2;
  }
}, U = class {
  constructor(e4) {
    let t2 = g;
    a(this, `options`, void 0), a(this, t2(322), void 0), this.options = e4 || S;
  }
  space(e4) {
    return ``;
  }
  code({ text: e4, lang: t2, escaped: n2 }) {
    var _a;
    let r2 = g, i2 = (_a = (t2 || ``).match(T.notSpaceStart)) == null ? void 0 : _a[0], a2 = e4.replace(T[r2(424)], ``) + `
`;
    return i2 ? r2(436) + z(i2) + `">` + (n2 ? a2 : z(a2, true)) + r2(295) : `<pre><code>` + (n2 ? a2 : z(a2, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e4 }) {
    let t2 = g;
    return `<blockquote>
` + this[t2(322)].parse(e4) + `</blockquote>
`;
  }
  html({ text: e4 }) {
    return e4;
  }
  def(e4) {
    return ``;
  }
  [g(404)]({ tokens: e4, depth: t2 }) {
    let n2 = g;
    return `<h` + t2 + `>` + this[n2(322)].parseInline(e4) + `</h` + t2 + `>
`;
  }
  hr(e4) {
    return `<hr>
`;
  }
  [g(337)](e4) {
    let t2 = g, n2 = e4.ordered, r2 = e4.start, i2 = ``;
    for (let n3 = 0; n3 < e4.items[t2(429)]; n3++) {
      let t3 = e4.items[n3];
      i2 += this.listitem(t3);
    }
    let a2 = n2 ? `ol` : `ul`, o2 = n2 && r2 !== 1 ? ` start="` + r2 + `"` : ``;
    return `<` + a2 + o2 + `>
` + i2 + `</` + a2 + `>
`;
  }
  listitem(e4) {
    var _a;
    let t2 = g, n2 = ``;
    if (e4[t2(354)]) {
      let r2 = this.checkbox({ checked: !!e4.checked });
      e4.loose ? ((_a = e4.tokens[0]) == null ? void 0 : _a[t2(441)]) === `paragraph` ? (e4.tokens[0][t2(408)] = r2 + ` ` + e4[t2(443)][0].text, e4.tokens[0].tokens && e4.tokens[0].tokens[t2(429)] > 0 && e4.tokens[0][t2(443)][0].type === `text` && (e4.tokens[0].tokens[0].text = r2 + ` ` + z(e4.tokens[0][t2(443)][0].text), e4[t2(443)][0].tokens[0].escaped = true)) : e4.tokens.unshift({ type: `text`, raw: r2 + ` `, text: r2 + ` `, escaped: true }) : n2 += r2 + ` `;
    }
    return n2 += this.parser.parse(e4.tokens, !!e4.loose), `<li>` + n2 + `</li>
`;
  }
  checkbox({ checked: e4 }) {
    return `<input ` + (e4 ? `checked="" ` : ``) + `disabled="" type="checkbox">`;
  }
  paragraph({ tokens: e4 }) {
    return g(356) + this.parser.parseInline(e4) + `</p>
`;
  }
  table(e4) {
    let t2 = g, n2 = ``, r2 = ``;
    for (let n3 = 0; n3 < e4.header.length; n3++) r2 += this[t2(320)](e4.header[n3]);
    n2 += this.tablerow({ text: r2 });
    let i2 = ``;
    for (let n3 = 0; n3 < e4.rows.length; n3++) {
      let a2 = e4[t2(355)][n3];
      r2 = ``;
      for (let e5 = 0; e5 < a2[t2(429)]; e5++) r2 += this.tablecell(a2[e5]);
      i2 += this.tablerow({ text: r2 });
    }
    return i2 && (i2 = `<tbody>` + i2 + `</tbody>`), `<table>
<thead>
` + n2 + `</thead>
` + i2 + `</table>
`;
  }
  tablerow({ text: e4 }) {
    return `<tr>
` + e4 + `</tr>
`;
  }
  tablecell(e4) {
    let t2 = g, n2 = this.parser.parseInline(e4[t2(443)]), r2 = e4.header ? `th` : `td`;
    return (e4.align ? `<` + r2 + ` align="` + e4.align + `">` : `<` + r2 + `>`) + n2 + (`</` + r2 + `>
`);
  }
  strong({ tokens: e4 }) {
    let t2 = g;
    return `<strong>` + this[t2(322)][t2(400)](e4) + `</strong>`;
  }
  em({ tokens: e4 }) {
    return `<em>` + this.parser.parseInline(e4) + `</em>`;
  }
  [g(378)]({ text: e4 }) {
    return `<code>` + z(e4, true) + `</code>`;
  }
  br(e4) {
    return g(469);
  }
  del({ tokens: e4 }) {
    let t2 = g;
    return `<del>` + this.parser.parseInline(e4) + t2(455);
  }
  link({ href: e4, title: t2, tokens: n2 }) {
    let r2 = this.parser.parseInline(n2), i2 = mt(e4);
    if (i2 === null) return r2;
    e4 = i2;
    let a2 = `<a href="` + e4 + `"`;
    return t2 && (a2 += ` title="` + z(t2) + `"`), a2 += `>` + r2 + `</a>`, a2;
  }
  image({ href: e4, title: t2, text: n2, tokens: r2 }) {
    r2 && (n2 = this.parser.parseInline(r2, this.parser.textRenderer));
    let i2 = mt(e4);
    if (i2 === null) return z(n2);
    e4 = i2;
    let a2 = `<img src="` + e4 + `" alt="` + n2 + `"`;
    return t2 && (a2 += ` title="` + z(t2) + `"`), a2 += `>`, a2;
  }
  [g(408)](e4) {
    let t2 = g;
    return `tokens` in e4 && e4[t2(443)] ? this.parser.parseInline(e4.tokens) : `escaped` in e4 && e4.escaped ? e4.text : z(e4.text);
  }
}, yt = class {
  strong({ text: e4 }) {
    return e4;
  }
  em({ text: e4 }) {
    return e4;
  }
  codespan({ text: e4 }) {
    return e4;
  }
  del({ text: e4 }) {
    return e4;
  }
  html({ text: e4 }) {
    return e4;
  }
  text({ text: e4 }) {
    return e4;
  }
  link({ text: e4 }) {
    return `` + e4;
  }
  image({ text: e4 }) {
    return `` + e4;
  }
  br() {
    return ``;
  }
}, W = class e3 {
  constructor(e4) {
    let t2 = g;
    a(this, `options`, void 0), a(this, `renderer`, void 0), a(this, `textRenderer`, void 0), this[t2(403)] = e4 || S, this.options.renderer = this.options.renderer || new U(), this.renderer = this.options[t2(366)], this.renderer.options = this.options, this.renderer.parser = this, this[t2(420)] = new yt();
  }
  static [g(367)](t2, n2) {
    return new e3(n2).parse(t2);
  }
  static parseInline(t2, n2) {
    return new e3(n2).parseInline(t2);
  }
  parse(e4, t2 = true) {
    let n2 = g, r2 = ``;
    for (let a2 = 0; a2 < e4.length; a2++) {
      var i2;
      let o2 = e4[a2];
      if (!((i2 = this.options.extensions) == null || (i2 = i2.renderers) == null) && i2[o2[n2(441)]]) {
        let e5 = o2, t3 = this.options[n2(387)].renderers[e5.type].call({ parser: this }, e5);
        if (t3 !== false || ![`space`, `hr`, `heading`, `code`, `table`, n2(413), n2(337), `html`, n2(374), n2(394), `text`].includes(e5[n2(441)])) {
          r2 += t3 || ``;
          continue;
        }
      }
      let s2 = o2;
      switch (s2.type) {
        case n2(332):
          r2 += this.renderer.space(s2);
          continue;
        case `hr`:
          r2 += this.renderer.hr(s2);
          continue;
        case n2(404):
          r2 += this.renderer[n2(404)](s2);
          continue;
        case `code`:
          r2 += this.renderer.code(s2);
          continue;
        case `table`:
          r2 += this.renderer.table(s2);
          continue;
        case `blockquote`:
          r2 += this.renderer.blockquote(s2);
          continue;
        case `list`:
          r2 += this.renderer.list(s2);
          continue;
        case `html`:
          r2 += this.renderer[n2(444)](s2);
          continue;
        case `def`:
          r2 += this.renderer.def(s2);
          continue;
        case `paragraph`:
          r2 += this.renderer.paragraph(s2);
          continue;
        case `text`: {
          let i3 = s2, o3 = this[n2(366)].text(i3);
          for (; a2 + 1 < e4.length && e4[a2 + 1].type === `text`; ) i3 = e4[++a2], o3 += `
` + this.renderer.text(i3);
          t2 ? r2 += this.renderer.paragraph({ type: n2(394), raw: o3, text: o3, tokens: [{ type: n2(408), raw: o3, text: o3, escaped: true }] }) : r2 += o3;
          continue;
        }
        default: {
          let e5 = `Token with "` + s2.type + n2(458);
          if (this.options.silent) return console.error(e5), ``;
          throw Error(e5);
        }
      }
    }
    return r2;
  }
  parseInline(e4, t2 = this.renderer) {
    let n2 = g, r2 = ``;
    for (let a2 = 0; a2 < e4.length; a2++) {
      var i2;
      let o2 = e4[a2];
      if (!((i2 = this[n2(403)][n2(387)]) == null || (i2 = i2.renderers) == null) && i2[o2.type]) {
        let e5 = this.options[n2(387)].renderers[o2.type][n2(358)]({ parser: this }, o2);
        if (e5 !== false || ![`escape`, `html`, n2(345), `image`, `strong`, `em`, `codespan`, `br`, `del`, `text`][n2(454)](o2.type)) {
          r2 += e5 || ``;
          continue;
        }
      }
      let s2 = o2;
      switch (s2.type) {
        case `escape`:
          r2 += t2.text(s2);
          break;
        case `html`:
          r2 += t2.html(s2);
          break;
        case `link`:
          r2 += t2.link(s2);
          break;
        case `image`:
          r2 += t2[n2(381)](s2);
          break;
        case `strong`:
          r2 += t2.strong(s2);
          break;
        case `em`:
          r2 += t2.em(s2);
          break;
        case `codespan`:
          r2 += t2.codespan(s2);
          break;
        case `br`:
          r2 += t2.br(s2);
          break;
        case `del`:
          r2 += t2[n2(450)](s2);
          break;
        case `text`:
          r2 += t2.text(s2);
          break;
        default: {
          let e5 = `Token with "` + s2.type + `" type was not found.`;
          if (this.options.silent) return console.error(e5), ``;
          throw Error(e5);
        }
      }
    }
    return r2;
  }
}, G = (b = class {
  constructor(e4) {
    let t2 = g;
    a(this, `options`, void 0), a(this, `block`, void 0), this[t2(403)] = e4 || S;
  }
  preprocess(e4) {
    return e4;
  }
  postprocess(e4) {
    return e4;
  }
  processAllTokens(e4) {
    return e4;
  }
  emStrongMask(e4) {
    return e4;
  }
  provideLexer() {
    let e4 = g;
    return this.block ? H.lex : H[e4(452)];
  }
  [g(390)]() {
    return this.block ? W.parse : W.parseInline;
  }
}, a(b, `passThroughHooks`, /* @__PURE__ */ new Set([g(304), `postprocess`, `processAllTokens`, `emStrongMask`])), a(b, `passThroughHooksRespectAsync`, /* @__PURE__ */ new Set([`preprocess`, `postprocess`, g(326)])), b), K = new class {
  constructor(...e4) {
    let t2 = g;
    a(this, `defaults`, x()), a(this, `options`, this.setOptions), a(this, `parse`, this.parseMarkdown(true)), a(this, t2(400), this.parseMarkdown(false)), a(this, `Parser`, W), a(this, t2(388), U), a(this, `TextRenderer`, yt), a(this, `Lexer`, H), a(this, `Tokenizer`, V), a(this, `Hooks`, G), this[t2(423)](...e4);
  }
  [g(308)](e4, t2) {
    let n2 = g, r2 = [];
    for (let a2 of e4) switch (r2 = r2.concat(t2[n2(358)](this, a2)), a2.type) {
      case `table`: {
        let e5 = a2;
        for (let n3 of e5.header) r2 = r2.concat(this.walkTokens(n3.tokens, t2));
        for (let i3 of e5.rows) for (let e6 of i3) r2 = r2.concat(this[n2(308)](e6[n2(443)], t2));
        break;
      }
      case `list`: {
        let e5 = a2;
        r2 = r2.concat(this.walkTokens(e5[n2(352)], t2));
        break;
      }
      default: {
        var i2;
        let e5 = a2;
        !((i2 = this.defaults.extensions) == null || (i2 = i2.childTokens) == null) && i2[e5.type] ? this[n2(305)].extensions.childTokens[e5.type].forEach((n3) => {
          let i3 = e5[n3].flat(1 / 0);
          r2 = r2.concat(this.walkTokens(i3, t2));
        }) : e5.tokens && (r2 = r2.concat(this.walkTokens(e5[n2(443)], t2)));
      }
    }
    return r2;
  }
  [g(423)](...e4) {
    let n2 = g, r2 = this.defaults[n2(387)] || { renderers: {}, childTokens: {} };
    return e4.forEach((e5) => {
      let i2 = n2, a2 = t({}, e5);
      if (a2[i2(318)] = this[i2(305)][i2(318)] || a2.async || false, e5.extensions && (e5.extensions.forEach((e6) => {
        let t2 = i2;
        if (!e6.name) throw Error(`extension name required`);
        if (`renderer` in e6) {
          let n3 = r2.renderers[e6.name];
          n3 ? r2.renderers[e6.name] = function(...t3) {
            let r3 = e6.renderer.apply(this, t3);
            return r3 === false && (r3 = n3.apply(this, t3)), r3;
          } : r2.renderers[e6[t2(353)]] = e6.renderer;
        }
        if (`tokenizer` in e6) {
          if (!e6.level || e6.level !== `block` && e6.level !== `inline`) throw Error(`extension level must be 'block' or 'inline'`);
          let n3 = r2[e6.level];
          n3 ? n3[t2(343)](e6[t2(445)]) : r2[e6.level] = [e6.tokenizer], e6[t2(464)] && (e6.level === `block` ? r2.startBlock ? r2.startBlock.push(e6.start) : r2.startBlock = [e6.start] : e6.level === `inline` && (r2[t2(466)] ? r2[t2(466)].push(e6.start) : r2.startInline = [e6.start]));
        }
        `childTokens` in e6 && e6[t2(364)] && (r2.childTokens[e6.name] = e6.childTokens);
      }), a2.extensions = r2), e5.renderer) {
        let t2 = this.defaults.renderer || new U(this.defaults);
        for (let n3 in e5.renderer) {
          if (!(n3 in t2)) throw Error(i2(480) + n3 + `' does not exist`);
          if ([`options`, `parser`][i2(454)](n3)) continue;
          let r3 = n3, a3 = e5.renderer[r3], o2 = t2[r3];
          t2[r3] = (...e6) => {
            let n4 = a3.apply(t2, e6);
            return n4 === false && (n4 = o2.apply(t2, e6)), n4 || ``;
          };
        }
        a2.renderer = t2;
      }
      if (e5.tokenizer) {
        let t2 = this.defaults.tokenizer || new V(this.defaults);
        for (let n3 in e5.tokenizer) {
          if (!(n3 in t2)) throw Error(`tokenizer '` + n3 + i2(442));
          if ([i2(403), `rules`, `lexer`].includes(n3)) continue;
          let r3 = n3, a3 = e5.tokenizer[r3], o2 = t2[r3];
          t2[r3] = (...e6) => {
            let n4 = a3.apply(t2, e6);
            return n4 === false && (n4 = o2.apply(t2, e6)), n4;
          };
        }
        a2.tokenizer = t2;
      }
      if (e5.hooks) {
        let t2 = this[i2(305)].hooks || new G();
        for (let n3 in e5.hooks) {
          if (!(n3 in t2)) throw Error(`hook '` + n3 + `' does not exist`);
          if ([i2(403), `block`].includes(n3)) continue;
          let r3 = n3, a3 = e5.hooks[r3], o2 = t2[r3];
          G.passThroughHooks.has(n3) ? t2[r3] = (e6) => {
            let r4 = i2;
            if (this.defaults.async && G.passThroughHooksRespectAsync.has(n3)) return Promise.resolve(a3.call(t2, e6)).then((e7) => o2.call(t2, e7));
            let s2 = a3[r4(358)](t2, e6);
            return o2.call(t2, s2);
          } : t2[r3] = (...e6) => {
            let n4 = a3[i2(312)](t2, e6);
            return n4 === false && (n4 = o2.apply(t2, e6)), n4;
          };
        }
        a2.hooks = t2;
      }
      if (e5.walkTokens) {
        let t2 = this.defaults[i2(308)], n3 = e5.walkTokens;
        a2.walkTokens = function(e6) {
          let r3 = i2, a3 = [];
          return a3[r3(418)](n3[r3(358)](this, e6)), t2 && (a3 = a3[r3(479)](t2.call(this, e6))), a3;
        };
      }
      this.defaults = t(t({}, this.defaults), a2);
    }), this;
  }
  [g(377)](e4) {
    let n2 = g;
    return this.defaults = t(t({}, this[n2(305)]), e4), this;
  }
  [g(335)](e4, t2) {
    return H.lex(e4, t2 ?? this.defaults);
  }
  parser(e4, t2) {
    return W.parse(e4, t2 ?? this.defaults);
  }
  parseMarkdown(e4) {
    return (n2, r2) => {
      let i2 = h, a2 = t({}, r2), o2 = t(t({}, this.defaults), a2), s2 = this.onError(!!o2.silent, !!o2.async);
      if (this[i2(305)].async === true && a2.async === false) return s2(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));
      if (typeof n2 > `u` || n2 === null) return s2(Error(i2(398)));
      if (typeof n2 != `string`) return s2(Error(`marked(): input parameter is of type ` + Object.prototype.toString.call(n2) + `, string expected`));
      o2.hooks && (o2[i2(333)].options = o2, o2.hooks.block = e4);
      let c2 = o2[i2(333)] ? o2.hooks.provideLexer() : e4 ? H[i2(317)] : H.lexInline, l2 = o2.hooks ? o2.hooks.provideParser() : e4 ? W[i2(367)] : W.parseInline;
      if (o2.async) return Promise.resolve(o2[i2(333)] ? o2.hooks.preprocess(n2) : n2).then((e5) => c2(e5, o2)).then((e5) => o2[i2(333)] ? o2.hooks.processAllTokens(e5) : e5)[i2(465)]((e5) => o2.walkTokens ? Promise.all(this.walkTokens(e5, o2[i2(308)])).then(() => e5) : e5).then((e5) => l2(e5, o2))[i2(465)]((e5) => o2.hooks ? o2.hooks.postprocess(e5) : e5).catch(s2);
      try {
        o2.hooks && (n2 = o2[i2(333)].preprocess(n2));
        let e5 = c2(n2, o2);
        o2.hooks && (e5 = o2[i2(333)].processAllTokens(e5)), o2.walkTokens && this.walkTokens(e5, o2.walkTokens);
        let t2 = l2(e5, o2);
        return o2.hooks && (t2 = o2[i2(333)].postprocess(t2)), t2;
      } catch (e5) {
        return s2(e5);
      }
    };
  }
  onError(e4, t2) {
    return (n2) => {
      if (n2.message += `
Please report this to https://github.com/markedjs/marked.`, e4) {
        let e5 = `<p>An error occurred:</p><pre>` + z(n2.message + ``, true) + `</pre>`;
        return t2 ? Promise.resolve(e5) : e5;
      }
      if (t2) return Promise.reject(n2);
      throw n2;
    };
  }
}();
function q(e4, t2) {
  return K.parse(e4, t2);
}
q.options = q.setOptions = function(e4) {
  return K.setOptions(e4), q.defaults = K.defaults, Ce(q.defaults), q;
}, q[g(382)] = x, q.defaults = S, q.use = function(...e4) {
  let t2 = g;
  return K.use(...e4), q[t2(305)] = K.defaults, Ce(q.defaults), q;
}, q.walkTokens = function(e4, t2) {
  return K.walkTokens(e4, t2);
}, q.parseInline = K[g(400)], q.Parser = W, q.parser = W.parse, q.Renderer = U, q.TextRenderer = yt, q.Lexer = H, q.lexer = H.lex, q[g(399)] = V, q.Hooks = G, q[g(367)] = q, q.options, q.setOptions, q.use, q.walkTokens, q[g(400)], W.parse, H.lex;
function bt(e4) {
  let t2 = g;
  var n2 = [...arguments].slice(1), r2 = Array.from(typeof e4 == `string` ? [e4] : e4);
  r2[r2.length - 1] = r2[r2.length - 1][t2(342)](/\r?\n([\t ]*)$/, ``);
  var i2 = r2.reduce(function(e5, t3) {
    var n3 = t3.match(/\n([\t ]+|(?!\s).)/g);
    return n3 ? e5.concat(n3.map(function(e6) {
      var _a;
      return ((_a = e6.match(/[\t ]/g)) == null ? void 0 : _a.length) ?? 0;
    })) : e5;
  }, []);
  if (i2.length) {
    var a2 = RegExp(t2(324) + Math[t2(361)][t2(312)](Math, i2) + `}`, `g`);
    r2 = r2.map(function(e5) {
      return e5[t2(342)](a2, `
`);
    });
  }
  r2[0] = r2[0].replace(/^\r?\n/, ``);
  var o2 = r2[0];
  return n2[t2(292)](function(e5, n3) {
    let i3 = t2;
    var a3 = o2.match(/(?:^|\n)( *)$/), s2 = a3 ? a3[1] : ``, c2 = e5;
    typeof e5 == `string` && e5[i3(454)](`
`) && (c2 = String(e5).split(`
`).map(function(e6, t3) {
      return t3 === 0 ? e6 : `` + s2 + e6;
    }).join(`
`)), o2 += c2 + r2[n3 + 1];
  }), o2;
}
n();
var xt = { body: `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>`, height: 80, width: 80 }, St = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), wt = c((e4) => {
  let t2 = g;
  for (let n2 of e4) {
    if (!n2.name) throw Error(t2(323));
    if (s[t2(371)](`Registering icon pack:`, n2.name), `loader` in n2) Ct.set(n2.name, n2.loader);
    else if (t2(290) in n2) St.set(n2.name, n2.icons);
    else throw s.error(`Invalid icon loader:`, n2), Error(`Invalid icon loader. Must have either "icons" or "loader" property.`);
  }
}, `registerIconPacks`), Tt = c((function() {
  var e4 = i(function* (e5, n2) {
    let r2 = h, i2 = ie(e5, true, n2 !== void 0);
    if (!i2) throw Error(`Invalid icon name: ` + e5);
    let a2 = i2.prefix || n2;
    if (!a2) throw Error(`Icon name must contain a prefix: ` + e5);
    let o2 = St.get(a2);
    if (!o2) {
      let e6 = Ct.get(a2);
      if (!e6) throw Error(`Icon set not found: ` + i2.prefix);
      try {
        o2 = t(t({}, yield e6()), {}, { prefix: a2 }), St[r2(314)](a2, o2);
      } catch (e7) {
        throw s.error(e7), Error(r2(350) + i2.prefix);
      }
    }
    let c2 = le(o2, i2.name);
    if (!c2) throw Error(`Icon not found: ` + e5);
    return c2;
  });
  return function(t2, n2) {
    return e4.apply(this, arguments);
  };
})(), `getRegisteredIconData`), Et = c((function() {
  var e4 = i(function* (e5) {
    try {
      return yield Tt(e5), true;
    } catch {
      return false;
    }
  });
  return function(t2) {
    return e4.apply(this, arguments);
  };
})(), `isIconAvailable`), Dt = c((function() {
  var e4 = i(function* (e5, n2, r2) {
    let i2;
    try {
      i2 = yield Tt(e5, n2 == null ? void 0 : n2.fallbackPrefix);
    } catch (e6) {
      s.error(e6), i2 = xt;
    }
    let a2 = _e(i2, n2);
    return f(Se(xe(a2.body), t(t({}, a2.attributes), r2)), p());
  });
  return function(t2, n2, r2) {
    return e4[h(312)](this, arguments);
  };
})(), `getIconSVG`);
function Ot(e4, { markdownAutoWrap: t2 }) {
  return bt(e4.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`));
}
c(Ot, g(330));
function kt(e4) {
  return e4.split(/\\n|\n|<br\s*\/?>/gi).map((e5) => {
    var _a;
    return ((_a = e5.trim().match(/<[^>]+>|[^\s<>]+/g)) == null ? void 0 : _a.map((e6) => ({ content: e6, type: `normal` }))) ?? [];
  });
}
c(kt, `nonMarkdownToLines`);
function At(e4, t2 = {}) {
  let n2 = g, r2 = Ot(e4, t2), i2 = q.lexer(r2), a2 = [[]], o2 = 0;
  function s2(e5, t3 = n2(460)) {
    let r3 = n2;
    e5.type === `text` ? e5.text.split(`
`)[r3(292)]((e6, n3) => {
      let i3 = r3;
      n3 !== 0 && (o2++, a2[i3(418)]([])), e6[i3(459)](` `).forEach((e7) => {
        let n4 = i3;
        e7 = e7.replace(/&#39;/g, `'`), e7 && a2[o2][n4(418)]({ content: e7, type: t3 });
      });
    }) : e5.type === `strong` || e5.type === `em` ? e5[r3(443)].forEach((t4) => {
      s2(t4, e5.type);
    }) : e5.type === `html` && a2[o2].push({ content: e5.text, type: `normal` });
  }
  return c(s2, n2(448)), i2.forEach((e5) => {
    let t3 = n2;
    if (e5.type === `paragraph`) {
      var r3;
      (r3 = e5[t3(443)]) == null || r3[t3(292)]((e6) => {
        s2(e6);
      });
    } else e5.type === `html` ? a2[o2].push({ content: e5.text, type: t3(460) }) : a2[o2].push({ content: e5.raw, type: `normal` });
  }), a2;
}
c(At, `markdownToLines`);
function J() {
  let e4 = [`</del>`, `</g>`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n", `" type was not found.`, `split`, `normal`, `test`, `183075vAUbXm`, "}(?:```|~~~)", `start`, `then`, `startInline`, `src`, `other`, `<br>`, `^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`, `node`, `text-align`, `aliases`, `293841NGGCXS`, `<g transform="`, `splitWordToFitWidth`, `escapeReplace`, `top`, `concat`, `renderer '`, `4422584oGbTyt`, `trim`, `icons`, `text-anchor`, `forEach`, `endsWith`, `index`, `</code></pre>
`, `</p>`, `inlineText`, `raw`, `block`, `nonSpaceChar`, `inRawBlock`, `getComputedTextLength`, ` {0,3}>`, `preprocess`, `defaults`, `get`, `string`, `walkTokens`, `_backpedal`, `tableAlignLeft`, `1em`, `apply`, `stroke: none`, `set`, `-10.1`, `92631BzfCNb`, `lex`, `async`, `script`, `tablecell`, `display`, `parser`, `Invalid icon loader. Must have a "name" property with non-empty string value.`, `
[	 ]{`, `lineBreakRegex`, `processAllTokens`, `indexOf`, `spaceLine`, `center`, `preprocessMarkdown`, `title`, `space`, `hooks`, `addSvgBackground: `, `lexer`, `autolink`, `list`, `height`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`, `654014tsKqcm`, `50AGHror`, `replace`, `unshift`, `slice`, `link`, `left`, `url`, `^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`, `inLink`, `Failed to load icon set: `, `</svg>`, `items`, `name`, `task`, `rows`, `<p>`, `style`, `call`, `inlineQueue`, `rotate`, `min`, `listItemRegex`, `escapeReplaceNoEncode`, `childTokens`, `24ibUyRY`, `renderer`, `parse`, `getRegex`, `2121295CqBuvr`, `state`, `debug`, `^ {0,`, `translate(`, `def`, `align`, `ceil`, `setOptions`, `codespan`, `inline`, `reflinkSearch`, `image`, `getDefaults`, `amp`, `map`, `label`, `toString`, `extensions`, `Renderer`, `append`, `provideParser`, `exec`, `email`, `tag`, `paragraph`, `fences`, `XYZ createText`, `hrefBrackets`, `marked(): input parameter is undefined or null`, `Tokenizer`, `parseInline`, `hFlip`, `rules`, `options`, `heading`, `substring`, `scale(1 -1)`, `breaks`, `text`, `escapeTest`, `width`, `splitLineToFitWidth`, `content`, `blockquote`, `pedantic`, `lastIndex`, `|tag`, `\\$&`, `push`, `table`, `textRenderer`, `edgeLabel`, `rotate(90 `, `use`, `endingNewline`, `blockSkip`, `startAngleBracket`, `fill:`, `1SdAwTB`, `length`, `201210cpdJKH`, `create`, `[*+-]`, `class`, `join`, `escape`, `<pre><code class="language-`, `endPreScriptTag`, `gfm`, `|table`, `attr`, `type`, `' does not exist`, `tokens`, `html`, `tokenizer`, `blockquoteSetextReplace`, `24zffvWH`, `processNode`, `rotate(-90 `, `del`, `inlineTokens`, `lexInline`, `<br/>`, `includes`];
  return J = function() {
    return e4;
  }, J();
}
function jt(e4) {
  let t2 = g;
  return e4 ? t2(356) + e4[t2(342)](/\\n|\n/g, `<br />`) + t2(296) : ``;
}
c(jt, `nonMarkdownToHTML`);
function Mt(e4, { markdownAutoWrap: t2 } = {}) {
  let n2 = g, r2 = q[n2(335)](e4);
  function i2(e5) {
    var _a, _b, _c;
    let r3 = n2;
    return e5.type === r3(408) ? t2 === false ? e5[r3(408)].replace(/\n */g, `<br/>`)[r3(342)](/ /g, `&nbsp;`) : e5[r3(408)][r3(342)](/\n */g, r3(453)) : e5[r3(441)] === `strong` ? `<strong>` + ((_a = e5.tokens) == null ? void 0 : _a.map(i2)[r3(434)](``)) + `</strong>` : e5.type === `em` ? `<em>` + ((_b = e5.tokens) == null ? void 0 : _b.map(i2).join(``)) + `</em>` : e5.type === `paragraph` ? r3(356) + ((_c = e5.tokens) == null ? void 0 : _c.map(i2).join(``)) + `</p>` : e5.type === `space` ? `` : e5.type === `html` ? `` + e5.text : e5[r3(441)] === `escape` ? e5.text : (s.warn(`Unsupported markdown: ` + e5.type), e5.raw);
  }
  return c(i2, `output`), r2.map(i2).join(``);
}
c(Mt, `markdownToHTML`);
function Nt(e4) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e4)].map((e5) => e5.segment) : [...e4];
}
c(Nt, `splitTextToChars`);
function Pt(e4, t2) {
  return Ft(e4, [], Nt(t2[g(412)]), t2.type);
}
c(Pt, g(476));
function Ft(e4, t2, n2, r2) {
  let i2 = g;
  if (n2.length === 0) return [{ content: t2.join(``), type: r2 }, { content: ``, type: r2 }];
  let [a2, ...o2] = n2, s2 = [...t2, a2];
  return e4([{ content: s2.join(``), type: r2 }]) ? Ft(e4, s2, o2, r2) : (t2.length === 0 && a2 && (t2.push(a2), n2.shift()), [{ content: t2.join(``), type: r2 }, { content: n2[i2(434)](``), type: r2 }]);
}
c(Ft, `splitWordToFitWidthRecursion`);
function It(e4, t2) {
  if (e4.some(({ content: e5 }) => e5.includes(`
`))) throw Error(`splitLineToFitWidth does not support newlines in the line`);
  return Y(e4, t2);
}
c(It, g(411));
function Y(e4, t2, n2 = [], r2 = []) {
  let i2 = g;
  if (e4.length === 0) return r2.length > 0 && n2.push(r2), n2.length > 0 ? n2 : [];
  let a2 = ``;
  e4[0].content === ` ` && (a2 = ` `, e4.shift());
  let o2 = e4.shift() ?? { content: ` `, type: i2(460) }, s2 = [...r2];
  if (a2 !== `` && s2.push({ content: a2, type: `normal` }), s2.push(o2), t2(s2)) return Y(e4, t2, n2, s2);
  if (r2.length > 0) n2[i2(418)](r2), e4.unshift(o2);
  else if (o2.content) {
    let [r3, a3] = Pt(t2, o2);
    n2[i2(418)]([r3]), a3.content && e4.unshift(a3);
  }
  return Y(e4, t2, n2);
}
c(Y, `splitLineToFitWidthRecursion`);
function X(e4, t2) {
  t2 && e4.attr(`style`, t2);
}
c(X, `applyStyle`);
var Lt = 16384;
function Rt(e4, t2, n2, r2) {
  return zt.apply(this, arguments);
}
function zt() {
  return zt = i(function* (e4, t2, n2, r2, i2 = false, a2 = p()) {
    let o2 = h, s2 = e4[o2(389)](`foreignObject`);
    s2.attr(o2(410), Math[o2(361)](10 * n2, Lt) + `px`), s2.attr(`height`, Math.min(10 * n2, Lt) + `px`);
    let c2 = s2.append(`xhtml:div`), m2 = d(t2.label) ? yield u(t2[o2(385)].replace(l[o2(325)], `
`), a2) : f(t2.label, a2), g2 = t2.isNode ? `nodeLabel` : o2(421), _2 = c2[o2(389)](`span`);
    _2.html(m2), X(_2, t2.labelStyle), _2.attr(`class`, g2 + ` ` + r2), X(c2, t2.labelStyle), c2.style(`display`, `table-cell`), c2.style(`white-space`, `nowrap`), c2[o2(357)](`line-height`, `1.5`), n2 !== 1 / 0 && (c2.style(`max-width`, n2 + `px`), c2.style(o2(472), o2(329))), c2.attr(`xmlns`, `http://www.w3.org/1999/xhtml`), i2 && c2.attr(`class`, `labelBkg`);
    let v2 = c2[o2(471)]().getBoundingClientRect();
    return v2[o2(410)] === n2 && (c2[o2(357)](o2(321), o2(419)), c2[o2(357)](`white-space`, `break-spaces`), c2.style(`width`, n2 + `px`), v2 = c2.node().getBoundingClientRect()), s2.node();
  }), zt.apply(this, arguments);
}
c(Rt, `addHtmlSpan`);
function Z(e4, t2, n2, r2 = false) {
  let i2 = g, a2 = e4.append(`tspan`).attr(i2(433), `text-outer-tspan`).attr(`x`, 0).attr(`y`, t2 * n2 - 0.1 + `em`).attr(`dy`, n2 + `em`);
  return r2 && a2[i2(440)](`text-anchor`, `middle`), a2;
}
c(Z, `createTspan`);
function Bt(e4, t2, n2) {
  let r2 = g, i2 = e4.append(`text`), a2 = Z(i2, 1, t2);
  $(a2, n2);
  let o2 = a2.node()[r2(302)]();
  return i2.remove(), o2;
}
c(Bt, `computeWidthOfText`);
function Vt(e4, t2, n2) {
  var _a;
  let r2 = e4.append(`text`), i2 = Z(r2, 1, t2);
  $(i2, [{ content: n2, type: `normal` }]);
  let a2 = (_a = i2.node()) == null ? void 0 : _a.getBoundingClientRect();
  return a2 && r2.remove(), a2;
}
c(Vt, `computeDimensionOfText`);
function Ht(e4, t2, n2, r2 = false, i2 = false) {
  let a2 = g, o2 = 1.1, s2 = t2[a2(389)](`g`), l2 = s2.insert(`rect`).attr(`class`, `background`).attr(`style`, a2(313)), u2 = s2.append(`text`).attr(`y`, a2(315));
  i2 && u2.attr(a2(291), `middle`);
  let d2 = 0;
  for (let t3 of n2) {
    let n3 = c((t4) => Bt(s2, o2, t4) <= e4, `checkWidth`), r3 = n3(t3) ? [t3] : It(t3, n3);
    for (let e5 of r3) $(Z(u2, d2, o2, i2), e5), d2++;
  }
  if (r2) {
    let e5 = u2.node().getBBox();
    return l2[a2(440)](`x`, e5.x - 2)[a2(440)](`y`, e5.y - 2).attr(`width`, e5.width + 4).attr(`height`, e5.height + 4), s2.node();
  } else return u2.node();
}
c(Ht, `createFormattedText`);
function Q(e4) {
  return e4.replace(/&(amp|lt|gt);/g, (e5, t2) => {
    let n2 = h;
    switch (t2) {
      case n2(383):
        return `&`;
      case `lt`:
        return `<`;
      case `gt`:
        return `>`;
      default:
        return e5;
    }
  });
}
c(Q, `decodeHTMLEntities`);
function $(e4, t2) {
  let n2 = g;
  e4.text(``), t2[n2(292)]((t3, r2) => {
    let i2 = n2, a2 = e4[i2(389)](`tspan`)[i2(440)](`font-style`, t3.type === `em` ? `italic` : `normal`).attr(`class`, `text-inner-tspan`).attr(`font-weight`, t3.type === `strong` ? `bold` : `normal`);
    r2 === 0 ? a2.text(Q(t3.content)) : a2.text(` ` + Q(t3[i2(412)]));
  });
}
c($, `updateTextContentAndStyles`);
function Ut(e4) {
  return Wt.apply(this, arguments);
}
function Wt() {
  return Wt = i(function* (e4, t2 = {}) {
    let n2 = [];
    e4.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (e5, r3, a2) => (n2.push(i(function* () {
      let n3 = r3 + `:` + a2;
      return (yield Et(n3)) ? yield Dt(n3, void 0, { class: `label-icon` }) : `<i class='` + f(e5, t2).replace(`:`, ` `) + `'></i>`;
    })()), e5));
    let r2 = yield Promise.all(n2);
    return e4.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => r2.shift() ?? ``);
  }), Wt.apply(this, arguments);
}
c(Ut, `replaceIconSubstring`);
var Gt = c((function() {
  var e4 = i(function* (e5, t2 = ``, { style: n2 = ``, isTitle: r2 = false, classes: i2 = ``, useHtmlLabels: a2 = true, markdown: c2 = true, isNode: l2 = true, width: u2 = 200, addSvgBackground: f2 = false } = {}, p2) {
    let g2 = h;
    if (s.debug(g2(396), t2, n2, r2, i2, a2, l2, g2(334), f2), a2) {
      let r3 = yield Ut(m(c2 ? Mt(t2, p2) : jt(t2)), p2), a3 = t2[g2(342)](/\\\\/g, `\\`);
      return yield Rt(e5, { isNode: l2, label: d(t2) ? a3 : r3, labelStyle: n2[g2(342)](`fill:`, `color:`) }, u2, i2, f2, p2);
    } else {
      let i3 = m(t2[g2(342)](/<br\s*\/?>/g, `<br/>`)), a3 = Ht(u2, e5, c2 ? At(i3.replace(`<br>`, g2(453)), p2) : kt(i3), t2 ? f2 : false, !l2);
      if (l2) {
        /stroke:/[g2(391)](n2) && (n2 = n2.replace(`stroke:`, `lineColor:`));
        let e6 = n2.replace(/stroke:[^;]+;?/g, ``).replace(/stroke-width:[^;]+;?/g, ``).replace(/fill:[^;]+;?/g, ``)[g2(342)](/color:/g, `fill:`);
        o(a3)[g2(440)](g2(357), e6);
      } else {
        let e6 = n2.replace(/stroke:[^;]+;?/g, ``).replace(/stroke-width:[^;]+;?/g, ``).replace(/fill:[^;]+;?/g, ``).replace(/background:/g, `fill:`);
        o(a3).select(`rect`).attr(`style`, e6.replace(/background:/g, g2(427)));
        let t3 = n2.replace(/stroke:[^;]+;?/g, ``).replace(/stroke-width:[^;]+;?/g, ``).replace(/fill:[^;]+;?/g, ``).replace(/color:/g, `fill:`);
        o(a3).select(`text`).attr(`style`, t3);
      }
      return r2 ? o(a3).selectAll(`tspan.text-outer-tspan`).classed(`title-row`, true) : o(a3).selectAll(`tspan.text-outer-tspan`).classed(`row`, true), a3;
    }
  });
  return function(t2) {
    return e4[h(312)](this, arguments);
  };
})(), `createText`);
export {
  xt as a,
  Dt as i,
  Vt as n,
  bt as o,
  wt as r,
  Gt as t
};
