import { $ as e, X as t, m as n, ot as r } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { _ as i, g as a, h as o, m as s, p as c, t as l, v as u } from "./index-D-g3WoLo.js";
var d = v;
(function(e4, t2) {
  let n2 = v, r2 = e4();
  for (; ; ) try {
    if (parseInt(n2(451)) / 1 + -parseInt(n2(470)) / 2 * (parseInt(n2(426)) / 3) + -parseInt(n2(420)) / 4 + -parseInt(n2(434)) / 5 * (parseInt(n2(487)) / 6) + -parseInt(n2(353)) / 7 * (parseInt(n2(449)) / 8) + parseInt(n2(417)) / 9 + parseInt(n2(488)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})($, 192457), o(), i(), s();
var f;
function p() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var m = p();
function h(e4) {
  m = e4;
}
var g = { exec: () => null };
function _(e4, t2 = ``) {
  let n2 = typeof e4 == `string` ? e4 : e4.source, r2 = { replace: (e5, t3) => {
    let i2 = v, a2 = typeof t3 == `string` ? t3 : t3.source;
    return a2 = a2[i2(480)](y.caret, `$1`), n2 = n2.replace(e5, a2), r2;
  }, getRegex: () => new RegExp(n2, t2) };
  return r2;
}
function v(e4, t2) {
  return e4 -= 341, $()[e4];
}
var ee = ((e4 = ``) => {
  try {
    return !!RegExp(`(?<=1)(?<!1)` + e4);
  } catch {
    return false;
  }
})(), y = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: RegExp(`[\\p{L}\\p{N}]`, `u`), escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e4) => RegExp(`^( {0,3}` + e4 + `)((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e4) => RegExp(d(365) + Math.min(3, e4 - 1) + `}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e4) => RegExp(`^ {0,` + Math[d(442)](3, e4 - 1) + `}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e4) => RegExp(`^ {0,` + Math.min(3, e4 - 1) + d(381)), headingBeginRegex: (e4) => RegExp(d(365) + Math.min(3, e4 - 1) + `}#`), htmlBeginRegex: (e4) => RegExp(`^ {0,` + Math[d(442)](3, e4 - 1) + `}<(?:[a-z].*>|!--)`, `i`), blockquoteBeginRegex: (e4) => RegExp(`^ {0,` + Math[d(442)](3, e4 - 1) + `}>`) }, te = /^(?:[ \t]*(?:\n|$))+/, ne = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, re = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, b = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ie = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, x = / {0,3}(?:[*+-]|\d{1,9}[.)])/, S = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, C = _(S).replace(/bull/g, x)[d(480)](/blockCode/g, /(?: {4}| {0,3}\t)/)[d(480)](/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, ``).getRegex(), ae = _(S).replace(/bull/g, x).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/)[d(480)](/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/)[d(346)](), w = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, oe = /^[^\n]+/, T = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, se = _(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/)[d(480)](d(355), T).replace(`title`, /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ce = _(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, x).getRegex(), E = `address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`, D = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, le = _(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`, `i`).replace(`comment`, D).replace(d(396), E).replace(d(421), / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ue = _(w)[d(480)](`hr`, b).replace(`heading`, d(393)).replace(`|lheading`, ``)[d(480)](`|table`, ``).replace(`blockquote`, ` {0,3}>`)[d(480)](`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(d(376), ` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`, d(404))[d(480)](d(396), E).getRegex(), O = { blockquote: _(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(d(464), ue).getRegex(), code: ne, def: se, fences: re, heading: ie, hr: b, html: le, lheading: C, list: ce, newline: te, paragraph: ue, table: g, text: oe }, de = _(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`, b).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(d(433), ` {0,3}>`).replace(`code`, `(?: {4}| {0,3}	)[^\\n]`)[d(480)](`fences`, " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(d(376), ` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`, d(404)).replace(`tag`, E).getRegex(), fe = a(a({}, O), {}, { lheading: ae, table: de, paragraph: _(w).replace(`hr`, b).replace(`heading`, ` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`, ``)[d(480)](d(363), de).replace(`blockquote`, ` {0,3}>`).replace(d(348), " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`, d(452)).replace(d(443), d(404)).replace(`tag`, E).getRegex() }), pe = a(a({}, O), {}, { html: _(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`, D)[d(480)](/tag/g, `(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: g, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: _(w).replace(`hr`, b).replace(`heading`, ` *#{1,6} *[^
]`).replace(`lheading`, C).replace(`|table`, ``)[d(480)](`blockquote`, ` {0,3}>`).replace(d(444), ``).replace(`|list`, ``).replace(`|html`, ``).replace(d(358), ``).getRegex() }), me = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, he = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ge = /^( {2,}|\\)\n(?!\s*$)/, _e = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, k = RegExp(`[\\p{P}\\p{S}]`, `u`), A = RegExp(d(460), `u`), j = RegExp(`[^\\s\\p{P}\\p{S}]`, `u`), ve = _(/^((?![*_])punctSpace)/, `u`).replace(/punctSpace/g, A).getRegex(), M = RegExp(`(?!~)[\\p{P}\\p{S}]`, `u`), ye = RegExp(d(438), `u`), be = RegExp(`(?:[^\\s\\p{P}\\p{S}]|~)`, `u`), xe = _(/link|precode-code|html/, `g`).replace(`link`, RegExp("\\[(?:[^\\[\\]`]|(?<a>`+)[^`]+\\k<a>(?!`))*?\\]\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)]|\\((?:\\\\[\\s\\S]|[^\\\\\\(\\)])*\\))*\\)", ``))[d(480)](`precode-`, ee ? "(?<!`)()" : "(^^|[^`])").replace(`code`, RegExp("(?<b>`+)[^`]+\\k<b>(?!`)", ``)).replace(`html`, /<(?! )[^<>]*?>/).getRegex(), N = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Se = _(N, `u`).replace(/punct/g, k).getRegex(), Ce = _(N, `u`).replace(/punct/g, M).getRegex(), P = d(448), we = _(P, `gu`).replace(/notPunctSpace/g, j).replace(/punctSpace/g, A)[d(480)](/punct/g, k).getRegex(), Te = _(P, `gu`).replace(/notPunctSpace/g, be).replace(/punctSpace/g, ye).replace(/punct/g, M).getRegex(), Ee = _(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`, `gu`).replace(/notPunctSpace/g, j)[d(480)](/punctSpace/g, A).replace(/punct/g, k).getRegex(), De = _(/^~~?(?:((?!~)punct)|[^\s~])/, `u`).replace(/punct/g, k).getRegex(), Oe = _(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`, `gu`).replace(/notPunctSpace/g, j).replace(/punctSpace/g, A)[d(480)](/punct/g, k).getRegex(), ke = _(/\\(punct)/, `gu`).replace(/punct/g, k).getRegex(), Ae = _(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`, /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`, /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), je = _(D)[d(480)](`(?:-->|$)`, d(453)).getRegex(), Me = _(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(d(370), je).replace(`attribute`, /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), F = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Ne = _(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(d(355), F).replace(`href`, /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`, /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), I = _(/^!?\[(label)\]\[(ref)\]/).replace(`label`, F)[d(480)](`ref`, T).getRegex(), Pe = _(/^!?\[(ref)\](?:\[\])?/).replace(`ref`, T).getRegex(), Fe = _(`reflink|nolink(?!\\()`, `g`)[d(480)](d(477), I)[d(480)](`nolink`, Pe).getRegex(), L = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, R = { _backpedal: g, anyPunctuation: ke, autolink: Ae, blockSkip: xe, br: ge, code: he, del: g, delLDelim: g, delRDelim: g, emStrongLDelim: Se, emStrongRDelimAst: we, emStrongRDelimUnd: Ee, escape: me, link: Ne, nolink: Pe, punctuation: ve, reflink: I, reflinkSearch: Fe, tag: Me, text: _e, url: g }, Ie = a(a({}, R), {}, { link: _(/^!?\[(label)\]\((.*?)\)/).replace(`label`, F).getRegex(), reflink: _(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`, F)[d(346)]() }), z = a(a({}, R), {}, { emStrongRDelimAst: Te, emStrongLDelim: Ce, delLDelim: De, delRDelim: Oe, url: _(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)[d(480)](`protocol`, L)[d(480)](`email`, /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/)[d(346)](), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: _(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/)[d(480)](`protocol`, L).getRegex() }), Le = a(a({}, z), {}, { br: _(ge).replace(d(432), `*`).getRegex(), text: _(z.text)[d(480)](`\\b_`, `\\b_| {2,}\\n`).replace(/\{2,\}/g, `*`).getRegex() }), B = { normal: O, gfm: fe, pedantic: pe }, V = { normal: R, gfm: z, breaks: Le, pedantic: Ie }, Re = { "&": `&amp;`, "<": `&lt;`, ">": `&gt;`, '"': `&quot;`, "'": `&#39;` }, ze = (e4) => Re[e4];
function H(e4, t2) {
  let n2 = d;
  if (t2) {
    if (y.escapeTest.test(e4)) return e4.replace(y[n2(342)], ze);
  } else if (y[n2(471)].test(e4)) return e4.replace(y.escapeReplaceNoEncode, ze);
  return e4;
}
function Be(e4) {
  let t2 = d;
  try {
    e4 = encodeURI(e4)[t2(480)](y.percentDecode, `%`);
  } catch {
    return null;
  }
  return e4;
}
function U(e4, t2) {
  let n2 = d;
  var r2;
  let i2 = e4.replace(y.findPipe, (e5, t3, n3) => {
    let r3 = false, i3 = t3;
    for (; --i3 >= 0 && n3[i3] === `\\`; ) r3 = !r3;
    return r3 ? `|` : ` |`;
  }).split(y.splitPipe), a2 = 0;
  if (i2[0].trim() || i2.shift(), i2.length > 0 && !((r2 = i2.at(-1)) != null && r2[n2(343)]()) && i2.pop(), t2) if (i2.length > t2) i2.splice(t2);
  else for (; i2.length < t2; ) i2.push(``);
  for (; a2 < i2.length; a2++) i2[a2] = i2[a2].trim().replace(y.slashPipe, `|`);
  return i2;
}
function W(e4, t2, n2) {
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
function Ve(e4) {
  let t2 = d, n2 = e4.split(`
`), r2 = n2[t2(374)] - 1;
  for (; r2 >= 0 && y.blankLine.test(n2[r2]); ) r2--;
  return n2[t2(374)] - r2 <= 2 ? e4 : n2.slice(0, r2 + 1).join(`
`);
}
function He(e4, t2) {
  if (e4.indexOf(t2[1]) === -1) return -1;
  let n2 = 0;
  for (let r2 = 0; r2 < e4.length; r2++) if (e4[r2] === `\\`) r2++;
  else if (e4[r2] === t2[0]) n2++;
  else if (e4[r2] === t2[1] && (n2--, n2 < 0)) return r2;
  return n2 > 0 ? -2 : -1;
}
function Ue(e4, t2 = 0) {
  let n2 = t2, r2 = ``;
  for (let t3 of e4) if (t3 === `	`) {
    let e5 = 4 - n2 % 4;
    r2 += ` `.repeat(e5), n2 += e5;
  } else r2 += t3, n2++;
  return r2;
}
function We(e4, t2, n2, r2, i2) {
  let a2 = d, o2 = t2.href, s2 = t2.title || null, c2 = e4[1].replace(i2.other.outputLinkReplace, `$1`);
  r2.state.inLink = true;
  let l2 = { type: e4[0].charAt(0) === `!` ? a2(341) : `link`, raw: n2, href: o2, title: s2, text: c2, tokens: r2.inlineTokens(c2) };
  return r2.state.inLink = false, l2;
}
function Ge(e4, t2, n2) {
  let r2 = d, i2 = e4[r2(458)](n2.other.indentCodeCompensation);
  if (i2 === null) return t2;
  let a2 = i2[1];
  return t2.split(`
`).map((e5) => {
    let t3 = r2, i3 = e5.match(n2.other[t3(402)]);
    if (i3 === null) return e5;
    let [o2] = i3;
    return o2.length >= a2.length ? e5.slice(a2.length) : e5;
  }).join(`
`);
}
var G = class {
  constructor(e4) {
    u(this, `options`, void 0), u(this, `rules`, void 0), u(this, `lexer`, void 0), this.options = e4 || m;
  }
  space(e4) {
    let t2 = d, n2 = this.rules.block[t2(418)][t2(484)](e4);
    if (n2 && n2[0][t2(374)] > 0) return { type: `space`, raw: n2[0] };
  }
  code(e4) {
    let t2 = d, n2 = this.rules.block.code.exec(e4);
    if (n2) {
      let e5 = this[t2(382)].pedantic ? n2[0] : Ve(n2[0]);
      return { type: `code`, raw: e5, codeBlockStyle: `indented`, text: e5.replace(this.rules.other.codeRemoveIndent, ``) };
    }
  }
  fences(e4) {
    let t2 = d, n2 = this[t2(436)].block.fences.exec(e4);
    if (n2) {
      let e5 = n2[0], r2 = Ge(e5, n2[3] || ``, this.rules);
      return { type: `code`, raw: e5, lang: n2[2] ? n2[2].trim().replace(this.rules.inline[t2(378)], `$1`) : n2[2], text: r2 };
    }
  }
  heading(e4) {
    let t2 = d, n2 = this.rules[t2(462)].heading[t2(484)](e4);
    if (n2) {
      let e5 = n2[2].trim();
      if (this.rules[t2(410)].endingHash.test(e5)) {
        let n3 = W(e5, `#`);
        (this.options[t2(344)] || !n3 || this.rules.other.endingSpaceChar.test(n3)) && (e5 = n3.trim());
      }
      return { type: `heading`, raw: W(n2[0], `
`), depth: n2[1].length, text: e5, tokens: this.lexer.inline(e5) };
    }
  }
  hr(e4) {
    let t2 = this.rules.block.hr.exec(e4);
    if (t2) return { type: `hr`, raw: W(t2[0], `
`) };
  }
  blockquote(e4) {
    let t2 = d, n2 = this.rules.block.blockquote.exec(e4);
    if (n2) {
      let e5 = W(n2[0], `
`).split(`
`), r2 = ``, i2 = ``, a2 = [];
      for (; e5.length > 0; ) {
        let n3 = false, o2 = [], s2;
        for (s2 = 0; s2 < e5.length; s2++) if (this.rules.other.blockquoteStart.test(e5[s2])) o2[t2(345)](e5[s2]), n3 = true;
        else if (!n3) o2.push(e5[s2]);
        else break;
        e5 = e5.slice(s2);
        let c2 = o2.join(`
`), l2 = c2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, ``);
        r2 = r2 ? r2 + `
` + c2 : c2, i2 = i2 ? i2 + `
` + l2 : l2;
        let u2 = this.lexer[t2(447)].top;
        if (this.lexer.state[t2(367)] = true, this[t2(399)].blockTokens(l2, a2, true), this[t2(399)][t2(447)].top = u2, e5[t2(374)] === 0) break;
        let d2 = a2.at(-1);
        if ((d2 == null ? void 0 : d2.type) === t2(408)) break;
        if ((d2 == null ? void 0 : d2.type) === t2(433)) {
          let n4 = d2, o3 = n4.raw + `
` + e5.join(`
`), s3 = this.blockquote(o3);
          a2[a2.length - 1] = s3, r2 = r2[t2(347)](0, r2.length - n4.raw.length) + s3.raw, i2 = i2.substring(0, i2.length - n4.text.length) + s3.text;
          break;
        } else if ((d2 == null ? void 0 : d2[t2(373)]) === `list`) {
          let n4 = d2, o3 = n4.raw + `
` + e5[t2(454)](`
`), s3 = this.list(o3);
          a2[a2[t2(374)] - 1] = s3, r2 = r2.substring(0, r2.length - d2[t2(446)].length) + s3.raw, i2 = i2[t2(347)](0, i2.length - n4.raw[t2(374)]) + s3.raw, e5 = o3.substring(a2.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: `blockquote`, raw: r2, tokens: a2, text: i2 };
    }
  }
  list(e4) {
    let t2 = d, n2 = this.rules.block.list.exec(e4);
    if (n2) {
      let r2 = n2[1].trim(), i2 = r2.length > 1, a2 = { type: `list`, raw: ``, ordered: i2, start: i2 ? +r2.slice(0, -1) : ``, loose: false, items: [] };
      r2 = i2 ? `\\d{1,9}\\` + r2.slice(-1) : `\\` + r2, this.options.pedantic && (r2 = i2 ? r2 : `[*+-]`);
      let o2 = this.rules.other.listItemRegex(r2), s2 = false;
      for (; e4; ) {
        let r3 = false, i3 = ``, c3 = ``;
        if (!(n2 = o2.exec(e4)) || this.rules.block.hr.test(e4)) break;
        i3 = n2[0], e4 = e4[t2(347)](i3[t2(374)]);
        let l2 = Ue(n2[2][t2(459)](`
`, 1)[0], n2[1].length), u2 = e4.split(`
`, 1)[0], d2 = !l2[t2(343)](), f2 = 0;
        if (this.options.pedantic ? (f2 = 2, c3 = l2.trimStart()) : d2 ? f2 = n2[1].length + 1 : (f2 = l2.search(this.rules.other.nonSpaceChar), f2 = f2 > 4 ? 1 : f2, c3 = l2.slice(f2), f2 += n2[1].length), d2 && this.rules.other[t2(479)].test(u2) && (i3 += u2 + `
`, e4 = e4[t2(347)](u2[t2(374)] + 1), r3 = true), !r3) {
          let n3 = this.rules.other.nextBulletRegex(f2), r4 = this.rules.other.hrRegex(f2), a3 = this.rules.other[t2(478)](f2), o3 = this[t2(436)].other[t2(428)](f2), s3 = this.rules.other.htmlBeginRegex(f2), p2 = this.rules.other[t2(361)](f2);
          for (; e4; ) {
            let m2 = e4.split(`
`, 1)[0], h2;
            if (u2 = m2, this.options.pedantic ? (u2 = u2.replace(this.rules.other.listReplaceNesting, `  `), h2 = u2) : h2 = u2.replace(this.rules.other[t2(445)], `    `), a3.test(u2) || o3.test(u2) || s3.test(u2) || p2.test(u2) || n3.test(u2) || r4.test(u2)) break;
            if (h2.search(this.rules.other.nonSpaceChar) >= f2 || !u2.trim()) c3 += `
` + h2[t2(416)](f2);
            else {
              if (d2 || l2.replace(this.rules[t2(410)][t2(445)], t2(384)).search(this.rules.other.nonSpaceChar) >= 4 || a3.test(l2) || o3.test(l2) || r4.test(l2)) break;
              c3 += `
` + u2;
            }
            d2 = !u2.trim(), i3 += m2 + `
`, e4 = e4.substring(m2.length + 1), l2 = h2.slice(f2);
          }
        }
        a2.loose || (s2 ? a2.loose = true : this.rules.other[t2(383)].test(i3) && (s2 = true)), a2.items.push({ type: `list_item`, raw: i3, task: !!this.options.gfm && this[t2(436)].other.listIsTask.test(c3), loose: false, text: c3, tokens: [] }), a2.raw += i3;
      }
      let c2 = a2.items.at(-1);
      if (c2) c2[t2(446)] = c2[t2(446)].trimEnd(), c2.text = c2[t2(380)].trimEnd();
      else return;
      a2.raw = a2.raw.trimEnd();
      for (let e5 of a2.items) {
        this[t2(399)][t2(447)][t2(367)] = false, e5.tokens = this.lexer.blockTokens(e5[t2(380)], []);
        let n3 = e5.tokens[0];
        if (e5.task && ((n3 == null ? void 0 : n3.type) === `text` || (n3 == null ? void 0 : n3.type) === t2(464))) {
          e5.text = e5[t2(380)].replace(this[t2(436)].other.listReplaceTask, ``), n3.raw = n3.raw.replace(this.rules.other.listReplaceTask, ``), n3.text = n3.text.replace(this.rules.other.listReplaceTask, ``);
          for (let e6 = this.lexer[t2(398)].length - 1; e6 >= 0; e6--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[e6].src)) {
            this.lexer.inlineQueue[e6].src = this.lexer.inlineQueue[e6].src.replace(this.rules[t2(410)].listReplaceTask, ``);
            break;
          }
          let r3 = this.rules.other.listTaskCheckbox[t2(484)](e5[t2(446)]);
          if (r3) {
            let n4 = { type: `checkbox`, raw: r3[0] + ` `, checked: r3[0] !== `[ ]` };
            e5.checked = n4.checked, a2.loose ? e5[t2(422)][0] && [t2(464), `text`].includes(e5.tokens[0].type) && `tokens` in e5.tokens[0] && e5.tokens[0].tokens ? (e5.tokens[0].raw = n4.raw + e5.tokens[0].raw, e5[t2(422)][0].text = n4[t2(446)] + e5[t2(422)][0].text, e5.tokens[0].tokens.unshift(n4)) : e5.tokens.unshift({ type: `paragraph`, raw: n4.raw, text: n4.raw, tokens: [n4] }) : e5[t2(422)].unshift(n4);
          }
        } else e5.task && (e5.task = false);
        if (!a2.loose) {
          let n4 = e5.tokens[t2(491)]((e6) => e6.type === `space`);
          a2.loose = n4.length > 0 && n4.some((e6) => this.rules.other.anyLine.test(e6.raw));
        }
      }
      if (a2.loose) for (let e5 of a2.items) {
        e5.loose = true;
        for (let t3 of e5.tokens) t3.type === `text` && (t3.type = `paragraph`);
      }
      return a2;
    }
  }
  html(e4) {
    let t2 = d, n2 = this[t2(436)].block.html.exec(e4);
    if (n2) {
      let e5 = Ve(n2[0]);
      return { type: `html`, block: true, raw: e5, pre: n2[1] === t2(472) || n2[1] === `script` || n2[1] === `style`, text: e5 };
    }
  }
  def(e4) {
    let t2 = d, n2 = this.rules.block.def.exec(e4);
    if (n2) {
      let e5 = n2[1].toLowerCase()[t2(480)](this.rules.other[t2(401)], ` `), r2 = n2[2] ? n2[2].replace(this.rules.other.hrefBrackets, `$1`).replace(this.rules.inline.anyPunctuation, `$1`) : ``, i2 = n2[3] ? n2[3].substring(1, n2[3].length - 1).replace(this.rules.inline.anyPunctuation, `$1`) : n2[3];
      return { type: `def`, tag: e5, raw: W(n2[0], `
`), href: r2, title: i2 };
    }
  }
  [d(363)](e4) {
    let t2 = d;
    var n2;
    let r2 = this.rules.block.table.exec(e4);
    if (!r2 || !this.rules.other.tableDelimiter.test(r2[2])) return;
    let i2 = U(r2[1]), a2 = r2[2].replace(this.rules.other[t2(486)], ``).split(`|`), o2 = (n2 = r2[3]) != null && n2.trim() ? r2[3].replace(this.rules.other.tableRowBlankLine, ``).split(`
`) : [], s2 = { type: `table`, raw: W(r2[0], `
`), header: [], align: [], rows: [] };
    if (i2.length === a2.length) {
      for (let e5 of a2) this.rules.other.tableAlignRight.test(e5) ? s2[t2(461)].push(`right`) : this[t2(436)].other.tableAlignCenter.test(e5) ? s2.align.push(`center`) : this[t2(436)].other.tableAlignLeft.test(e5) ? s2.align.push(`left`) : s2.align.push(null);
      for (let e5 = 0; e5 < i2.length; e5++) s2.header.push({ text: i2[e5], tokens: this.lexer.inline(i2[e5]), header: true, align: s2.align[e5] });
      for (let e5 of o2) s2.rows.push(U(e5, s2[t2(388)].length).map((e6, t3) => ({ text: e6, tokens: this.lexer.inline(e6), header: false, align: s2.align[t3] })));
      return s2;
    }
  }
  lheading(e4) {
    let t2 = d, n2 = this.rules.block.lheading[t2(484)](e4);
    if (n2) {
      let e5 = n2[1].trim();
      return { type: t2(431), raw: W(n2[0], `
`), depth: n2[2].charAt(0) === `=` ? 1 : 2, text: e5, tokens: this.lexer.inline(e5) };
    }
  }
  [d(464)](e4) {
    let t2 = d, n2 = this[t2(436)].block.paragraph.exec(e4);
    if (n2) {
      let e5 = n2[1].charAt(n2[1].length - 1) === `
` ? n2[1][t2(416)](0, -1) : n2[1];
      return { type: `paragraph`, raw: n2[0], text: e5, tokens: this.lexer.inline(e5) };
    }
  }
  text(e4) {
    let t2 = this.rules.block.text.exec(e4);
    if (t2) return { type: `text`, raw: t2[0], text: t2[0], tokens: this.lexer.inline(t2[0]) };
  }
  [d(441)](e4) {
    let t2 = d, n2 = this[t2(436)].inline.escape.exec(e4);
    if (n2) return { type: `escape`, raw: n2[0], text: n2[1] };
  }
  tag(e4) {
    let t2 = d, n2 = this.rules[t2(392)][t2(396)][t2(484)](e4);
    if (n2) return !this.lexer.state.inLink && this.rules.other.startATag.test(n2[0]) ? this.lexer[t2(447)][t2(385)] = true : this[t2(399)][t2(447)].inLink && this.rules.other.endATag.test(n2[0]) && (this[t2(399)].state[t2(385)] = false), !this[t2(399)].state[t2(359)] && this.rules.other.startPreScriptTag.test(n2[0]) ? this.lexer.state.inRawBlock = true : this[t2(399)].state.inRawBlock && this.rules.other[t2(474)].test(n2[0]) && (this.lexer[t2(447)].inRawBlock = false), { type: `html`, raw: n2[0], inLink: this[t2(399)].state.inLink, inRawBlock: this[t2(399)][t2(447)].inRawBlock, block: false, text: n2[0] };
  }
  link(e4) {
    let t2 = d, n2 = this[t2(436)].inline.link.exec(e4);
    if (n2) {
      let e5 = n2[2][t2(343)]();
      if (!this.options.pedantic && this.rules[t2(410)].startAngleBracket.test(e5)) {
        if (!this.rules.other.endAngleBracket.test(e5)) return;
        let t3 = W(e5.slice(0, -1), `\\`);
        if ((e5.length - t3.length) % 2 == 0) return;
      } else {
        let e6 = He(n2[2], `()`);
        if (e6 === -2) return;
        if (e6 > -1) {
          let t3 = (n2[0].indexOf(`!`) === 0 ? 5 : 4) + n2[1].length + e6;
          n2[2] = n2[2].substring(0, e6), n2[0] = n2[0].substring(0, t3).trim(), n2[3] = ``;
        }
      }
      let r2 = n2[2], i2 = ``;
      if (this.options.pedantic) {
        let e6 = this.rules[t2(410)].pedanticHrefTitle.exec(r2);
        e6 && (r2 = e6[1], i2 = e6[3]);
      } else i2 = n2[3] ? n2[3][t2(416)](1, -1) : ``;
      return r2 = r2.trim(), this.rules.other.startAngleBracket.test(r2) && (r2 = this.options[t2(344)] && !this.rules.other.endAngleBracket.test(e5) ? r2.slice(1) : r2.slice(1, -1)), We(n2, { href: r2 && r2[t2(480)](this[t2(436)].inline.anyPunctuation, `$1`), title: i2 && i2.replace(this.rules.inline.anyPunctuation, `$1`) }, n2[0], this[t2(399)], this[t2(436)]);
    }
  }
  reflink(e4, t2) {
    let n2 = d, r2;
    if ((r2 = this.rules[n2(392)].reflink[n2(484)](e4)) || (r2 = this[n2(436)].inline.nolink[n2(484)](e4))) {
      let e5 = t2[(r2[2] || r2[1])[n2(480)](this.rules.other.multipleSpaceGlobal, ` `).toLowerCase()];
      if (!e5) {
        let e6 = r2[0].charAt(0);
        return { type: n2(380), raw: e6, text: e6 };
      }
      return We(r2, e5, r2[0], this.lexer, this.rules);
    }
  }
  emStrong(e4, t2, n2 = ``) {
    let r2 = d, i2 = this.rules.inline.emStrongLDelim.exec(e4);
    if (!(!i2 || !i2[1] && !i2[2] && !i2[3] && !i2[4] || i2[4] && n2[r2(458)](this.rules.other.unicodeAlphaNumeric)) && (!(i2[1] || i2[3]) || !n2 || this[r2(436)][r2(392)].punctuation.exec(n2))) {
      let n3 = [...i2[0]][r2(374)] - 1, a2, o2, s2 = n3, c2 = 0, l2 = i2[0][0] === `*` ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (l2.lastIndex = 0, t2 = t2.slice(-1 * e4.length + n3); (i2 = l2.exec(t2)) !== null; ) {
        if (a2 = i2[1] || i2[2] || i2[3] || i2[4] || i2[5] || i2[6], !a2) continue;
        if (o2 = [...a2].length, i2[3] || i2[4]) {
          s2 += o2;
          continue;
        } else if ((i2[5] || i2[6]) && n3 % 3 && !((n3 + o2) % 3)) {
          c2 += o2;
          continue;
        }
        if (s2 -= o2, s2 > 0) continue;
        o2 = Math.min(o2, o2 + s2 + c2);
        let t3 = [...i2[0]][0].length, l3 = e4.slice(0, n3 + i2.index + t3 + o2);
        if (Math.min(n3, o2) % 2) {
          let e5 = l3.slice(1, -1);
          return { type: `em`, raw: l3, text: e5, tokens: this[r2(399)].inlineTokens(e5) };
        }
        let u2 = l3.slice(2, -2);
        return { type: `strong`, raw: l3, text: u2, tokens: this.lexer[r2(372)](u2) };
      }
    }
  }
  codespan(e4) {
    let t2 = d, n2 = this[t2(436)].inline.code[t2(484)](e4);
    if (n2) {
      let e5 = n2[2][t2(480)](this[t2(436)][t2(410)][t2(457)], ` `), r2 = this.rules.other.nonSpaceChar.test(e5), i2 = this.rules.other[t2(405)].test(e5) && this.rules[t2(410)][t2(390)][t2(356)](e5);
      return r2 && i2 && (e5 = e5.substring(1, e5.length - 1)), { type: `codespan`, raw: n2[0], text: e5 };
    }
  }
  br(e4) {
    let t2 = this.rules.inline.br.exec(e4);
    if (t2) return { type: `br`, raw: t2[0] };
  }
  del(e4, t2, n2 = ``) {
    let r2 = d, i2 = this.rules.inline[r2(468)].exec(e4);
    if (i2 && (!i2[1] || !n2 || this.rules.inline.punctuation.exec(n2))) {
      let n3 = [...i2[0]].length - 1, a2, o2, s2 = n3, c2 = this.rules.inline.delRDelim;
      for (c2.lastIndex = 0, t2 = t2.slice(-1 * e4[r2(374)] + n3); (i2 = c2.exec(t2)) !== null; ) {
        if (a2 = i2[1] || i2[2] || i2[3] || i2[4] || i2[5] || i2[6], !a2 || (o2 = [...a2].length, o2 !== n3)) continue;
        if (i2[3] || i2[4]) {
          s2 += o2;
          continue;
        }
        if (s2 -= o2, s2 > 0) continue;
        o2 = Math.min(o2, o2 + s2);
        let t3 = [...i2[0]][0][r2(374)], c3 = e4[r2(416)](0, n3 + i2.index + t3 + o2), l2 = c3.slice(n3, -n3);
        return { type: r2(409), raw: c3, text: l2, tokens: this.lexer.inlineTokens(l2) };
      }
    }
  }
  autolink(e4) {
    let t2 = this.rules.inline.autolink.exec(e4);
    if (t2) {
      let e5, n2;
      return t2[2] === `@` ? (e5 = t2[1], n2 = `mailto:` + e5) : (e5 = t2[1], n2 = e5), { type: `link`, raw: t2[0], text: e5, href: n2, tokens: [{ type: `text`, raw: e5, text: e5 }] };
    }
  }
  url(e4) {
    var _a;
    let t2 = d, n2;
    if (n2 = this.rules.inline.url.exec(e4)) {
      let e5, r2;
      if (n2[2] === `@`) e5 = n2[0], r2 = t2(475) + e5;
      else {
        let i2;
        do
          i2 = n2[0], n2[0] = ((_a = this[t2(436)][t2(392)]._backpedal.exec(n2[0])) == null ? void 0 : _a[0]) ?? ``;
        while (i2 !== n2[0]);
        e5 = n2[0], r2 = n2[1] === `www.` ? `http://` + n2[0] : n2[0];
      }
      return { type: `link`, raw: n2[0], text: e5, href: r2, tokens: [{ type: `text`, raw: e5, text: e5 }] };
    }
  }
  [d(375)](e4) {
    let t2 = d, n2 = this.rules.inline.text.exec(e4);
    if (n2) {
      let e5 = this.lexer.state.inRawBlock;
      return { type: t2(380), raw: n2[0], text: n2[0], escaped: e5 };
    }
  }
}, K = class e2 {
  constructor(e4) {
    let t2 = d;
    u(this, `tokens`, void 0), u(this, `options`, void 0), u(this, `state`, void 0), u(this, `inlineQueue`, void 0), u(this, t2(481), void 0), this[t2(422)] = [], this.tokens[t2(467)] = /* @__PURE__ */ Object.create(null), this.options = e4 || m, this.options.tokenizer = this.options[t2(481)] || new G(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer[t2(399)] = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let n2 = { other: y, block: B.normal, inline: V[t2(456)] };
    this.options.pedantic ? (n2.block = B.pedantic, n2.inline = V.pedantic) : this.options[t2(411)] && (n2.block = B[t2(411)], this.options[t2(490)] ? n2.inline = V.breaks : n2.inline = V.gfm), this.tokenizer[t2(436)] = n2;
  }
  static get rules() {
    return { block: B, inline: V };
  }
  static lex(t2, n2) {
    return new e2(n2).lex(t2);
  }
  static lexInline(t2, n2) {
    return new e2(n2).inlineTokens(t2);
  }
  lex(e4) {
    let t2 = d;
    e4 = e4.replace(y.carriageReturn, `
`), this[t2(394)](e4, this.tokens);
    for (let e5 = 0; e5 < this.inlineQueue.length; e5++) {
      let n2 = this.inlineQueue[e5];
      this.inlineTokens(n2.src, n2[t2(422)]);
    }
    return this.inlineQueue = [], this[t2(422)];
  }
  blockTokens(e4, t2 = [], n2 = false) {
    let r2 = d;
    this.tokenizer[r2(399)] = this, this.options.pedantic && (e4 = e4.replace(y[r2(445)], `    `).replace(y.spaceLine, ``));
    let i2 = 1 / 0;
    for (; e4; ) {
      var a2, o2;
      if (e4.length < i2) i2 = e4[r2(374)];
      else {
        this.infiniteLoopError(e4.charCodeAt(0));
        break;
      }
      let s2;
      if (!((a2 = this.options.extensions) == null || (a2 = a2.block) == null) && a2.some((n3) => (s2 = n3.call({ lexer: this }, e4, t2)) ? (e4 = e4[r2(347)](s2.raw.length), t2.push(s2), true) : false)) continue;
      if (s2 = this.tokenizer.space(e4)) {
        e4 = e4.substring(s2.raw.length);
        let n3 = t2.at(-1);
        s2[r2(446)][r2(374)] === 1 && n3 !== void 0 ? n3.raw += `
` : t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.code(e4)) {
        e4 = e4.substring(s2[r2(446)].length);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === `paragraph` || (n3 == null ? void 0 : n3.type) === r2(380) ? (n3.raw += (n3[r2(446)].endsWith(`
`) ? `` : `
`) + s2.raw, n3.text += `
` + s2.text, this.inlineQueue.at(-1)[r2(473)] = n3.text) : t2[r2(345)](s2);
        continue;
      }
      if (s2 = this[r2(481)][r2(348)](e4)) {
        e4 = e4.substring(s2.raw.length), t2[r2(345)](s2);
        continue;
      }
      if (s2 = this.tokenizer.heading(e4)) {
        e4 = e4[r2(347)](s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.hr(e4)) {
        e4 = e4.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this[r2(481)].blockquote(e4)) {
        e4 = e4.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.list(e4)) {
        e4 = e4.substring(s2[r2(446)].length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.html(e4)) {
        e4 = e4.substring(s2.raw.length), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer[r2(389)](e4)) {
        e4 = e4[r2(347)](s2.raw[r2(374)]);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3.type) === `paragraph` || (n3 == null ? void 0 : n3.type) === r2(380) ? (n3.raw += (n3.raw.endsWith(`
`) ? `` : `
`) + s2.raw, n3.text += `
` + s2.raw, this[r2(398)].at(-1).src = n3.text) : this.tokens.links[s2.tag] || (this.tokens.links[s2[r2(396)]] = { href: s2.href, title: s2.title }, t2.push(s2));
        continue;
      }
      if (s2 = this.tokenizer.table(e4)) {
        e4 = e4[r2(347)](s2.raw[r2(374)]), t2.push(s2);
        continue;
      }
      if (s2 = this.tokenizer.lheading(e4)) {
        e4 = e4[r2(347)](s2.raw.length), t2[r2(345)](s2);
        continue;
      }
      let c2 = e4;
      if ((o2 = this[r2(382)].extensions) != null && o2.startBlock) {
        let t3 = 1 / 0, n3 = e4.slice(1), i3;
        this.options.extensions.startBlock[r2(369)]((e5) => {
          let a3 = r2;
          i3 = e5[a3(476)]({ lexer: this }, n3), typeof i3 == `number` && i3 >= 0 && (t3 = Math[a3(442)](t3, i3));
        }), t3 < 1 / 0 && t3 >= 0 && (c2 = e4.substring(0, t3 + 1));
      }
      if (this.state[r2(367)] && (s2 = this.tokenizer.paragraph(c2))) {
        let i3 = t2.at(-1);
        n2 && (i3 == null ? void 0 : i3.type) === `paragraph` ? (i3.raw += (i3.raw.endsWith(`
`) ? `` : `
`) + s2[r2(446)], i3.text += `
` + s2.text, this.inlineQueue.pop(), this.inlineQueue.at(-1)[r2(473)] = i3.text) : t2.push(s2), n2 = c2.length !== e4[r2(374)], e4 = e4.substring(s2.raw.length);
        continue;
      }
      if (s2 = this.tokenizer.text(e4)) {
        e4 = e4[r2(347)](s2.raw[r2(374)]);
        let n3 = t2.at(-1);
        (n3 == null ? void 0 : n3[r2(373)]) === `text` ? (n3[r2(446)] += (n3[r2(446)].endsWith(`
`) ? `` : `
`) + s2[r2(446)], n3.text += `
` + s2.text, this.inlineQueue.pop(), this[r2(398)].at(-1)[r2(473)] = n3.text) : t2.push(s2);
        continue;
      }
      if (e4) {
        this.infiniteLoopError(e4[r2(400)](0));
        break;
      }
    }
    return this.state.top = true, t2;
  }
  inline(e4, t2 = []) {
    let n2 = d;
    return this.inlineQueue[n2(345)]({ src: e4, tokens: t2 }), t2;
  }
  inlineTokens(e4, t2 = []) {
    let n2 = d;
    var r2;
    this[n2(481)].lexer = this;
    let i2 = e4, a2 = null;
    if (this.tokens.links) {
      let e5 = Object.keys(this.tokens.links);
      if (e5.length > 0) for (; (a2 = this[n2(481)].rules.inline.reflinkSearch.exec(i2)) !== null; ) e5.includes(a2[0].slice(a2[0].lastIndexOf(`[`) + 1, -1)) && (i2 = i2.slice(0, a2[n2(482)]) + `[` + `a`[n2(407)](a2[0].length - 2) + `]` + i2.slice(this[n2(481)][n2(436)].inline.reflinkSearch[n2(424)]));
    }
    for (; (a2 = this[n2(481)][n2(436)].inline.anyPunctuation.exec(i2)) !== null; ) i2 = i2.slice(0, a2.index) + `++` + i2.slice(this.tokenizer[n2(436)].inline.anyPunctuation.lastIndex);
    let o2;
    for (; (a2 = this.tokenizer.rules.inline.blockSkip[n2(484)](i2)) !== null; ) o2 = a2[2] ? a2[2].length : 0, i2 = i2.slice(0, a2.index + o2) + `[` + `a`.repeat(a2[0].length - o2 - 2) + `]` + i2[n2(416)](this.tokenizer.rules.inline.blockSkip.lastIndex);
    i2 = ((r2 = this.options.hooks) == null || (r2 = r2.emStrongMask) == null ? void 0 : r2.call({ lexer: this }, i2)) ?? i2;
    let s2 = false, c2 = ``, l2 = 1 / 0;
    for (; e4; ) {
      var u2, f2;
      if (e4[n2(374)] < l2) l2 = e4.length;
      else {
        this.infiniteLoopError(e4.charCodeAt(0));
        break;
      }
      s2 || (c2 = ``), s2 = false;
      let r3;
      if (!((u2 = this.options.extensions) == null || (u2 = u2.inline) == null) && u2.some((i3) => (r3 = i3[n2(476)]({ lexer: this }, e4, t2)) ? (e4 = e4.substring(r3.raw.length), t2.push(r3), true) : false)) continue;
      if (r3 = this.tokenizer.escape(e4)) {
        e4 = e4.substring(r3[n2(446)][n2(374)]), t2[n2(345)](r3);
        continue;
      }
      if (r3 = this.tokenizer[n2(396)](e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.link(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.reflink(e4, this[n2(422)][n2(467)])) {
        e4 = e4.substring(r3.raw[n2(374)]);
        let i3 = t2.at(-1);
        r3.type === `text` && (i3 == null ? void 0 : i3.type) === `text` ? (i3.raw += r3.raw, i3.text += r3.text) : t2[n2(345)](r3);
        continue;
      }
      if (r3 = this[n2(481)].emStrong(e4, i2, c2)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.codespan(e4)) {
        e4 = e4.substring(r3.raw.length), t2[n2(345)](r3);
        continue;
      }
      if (r3 = this.tokenizer.br(e4)) {
        e4 = e4.substring(r3.raw.length), t2.push(r3);
        continue;
      }
      if (r3 = this[n2(481)].del(e4, i2, c2)) {
        e4 = e4.substring(r3[n2(446)][n2(374)]), t2.push(r3);
        continue;
      }
      if (r3 = this.tokenizer.autolink(e4)) {
        e4 = e4.substring(r3[n2(446)].length), t2.push(r3);
        continue;
      }
      if (!this.state[n2(385)] && (r3 = this.tokenizer.url(e4))) {
        e4 = e4[n2(347)](r3.raw.length), t2[n2(345)](r3);
        continue;
      }
      let a3 = e4;
      if ((f2 = this.options[n2(366)]) != null && f2.startInline) {
        let t3 = 1 / 0, r4 = e4.slice(1), i3;
        this[n2(382)].extensions.startInline[n2(369)]((e5) => {
          i3 = e5.call({ lexer: this }, r4), typeof i3 == `number` && i3 >= 0 && (t3 = Math.min(t3, i3));
        }), t3 < 1 / 0 && t3 >= 0 && (a3 = e4.substring(0, t3 + 1));
      }
      if (r3 = this.tokenizer[n2(375)](a3)) {
        e4 = e4.substring(r3[n2(446)].length), r3.raw.slice(-1) !== `_` && (c2 = r3.raw.slice(-1)), s2 = true;
        let i3 = t2.at(-1);
        (i3 == null ? void 0 : i3.type) === `text` ? (i3.raw += r3.raw, i3.text += r3.text) : t2.push(r3);
        continue;
      }
      if (e4) {
        this.infiniteLoopError(e4.charCodeAt(0));
        break;
      }
    }
    return t2;
  }
  infiniteLoopError(e4) {
    let t2 = d(463) + e4;
    if (this.options.silent) console.error(t2);
    else throw Error(t2);
  }
}, q = class {
  constructor(e4) {
    u(this, `options`, void 0), u(this, `parser`, void 0), this.options = e4 || m;
  }
  space(e4) {
    return ``;
  }
  code({ text: e4, lang: t2, escaped: n2 }) {
    var _a;
    let r2 = d, i2 = (_a = (t2 || ``).match(y.notSpaceStart)) == null ? void 0 : _a[0], a2 = e4[r2(480)](y.endingNewline, ``) + `
`;
    return i2 ? `<pre><code class="language-` + H(i2) + `">` + (n2 ? a2 : H(a2, true)) + `</code></pre>
` : `<pre><code>` + (n2 ? a2 : H(a2, true)) + `</code></pre>
`;
  }
  [d(433)]({ tokens: e4 }) {
    let t2 = d;
    return `<blockquote>
` + this.parser[t2(351)](e4) + `</blockquote>
`;
  }
  html({ text: e4 }) {
    return e4;
  }
  [d(389)](e4) {
    return ``;
  }
  heading({ tokens: e4, depth: t2 }) {
    return `<h` + t2 + `>` + this.parser.parseInline(e4) + `</h` + t2 + `>
`;
  }
  hr(e4) {
    return `<hr>
`;
  }
  list(e4) {
    let t2 = e4.ordered, n2 = e4.start, r2 = ``;
    for (let t3 = 0; t3 < e4.items.length; t3++) {
      let n3 = e4.items[t3];
      r2 += this.listitem(n3);
    }
    let i2 = t2 ? `ol` : `ul`, a2 = t2 && n2 !== 1 ? ` start="` + n2 + `"` : ``;
    return `<` + i2 + a2 + `>
` + r2 + `</` + i2 + `>
`;
  }
  listitem(e4) {
    let t2 = d;
    return `<li>` + this.parser.parse(e4.tokens) + t2(439);
  }
  checkbox({ checked: e4 }) {
    return `<input ` + (e4 ? `checked="" ` : ``) + `disabled="" type="checkbox"> `;
  }
  paragraph({ tokens: e4 }) {
    return `<p>` + this.parser.parseInline(e4) + `</p>
`;
  }
  table(e4) {
    let t2 = d, n2 = ``, r2 = ``;
    for (let n3 = 0; n3 < e4[t2(388)].length; n3++) r2 += this.tablecell(e4.header[n3]);
    n2 += this.tablerow({ text: r2 });
    let i2 = ``;
    for (let n3 = 0; n3 < e4[t2(414)].length; n3++) {
      let t3 = e4.rows[n3];
      r2 = ``;
      for (let e5 = 0; e5 < t3.length; e5++) r2 += this.tablecell(t3[e5]);
      i2 += this.tablerow({ text: r2 });
    }
    return i2 && (i2 = `<tbody>` + i2 + `</tbody>`), t2(469) + n2 + `</thead>
` + i2 + t2(386);
  }
  tablerow({ text: e4 }) {
    return `<tr>
` + e4 + `</tr>
`;
  }
  tablecell(e4) {
    let t2 = d, n2 = this.parser.parseInline(e4.tokens), r2 = e4.header ? `th` : `td`;
    return (e4.align ? `<` + r2 + ` align="` + e4[t2(461)] + `">` : `<` + r2 + `>`) + n2 + (`</` + r2 + `>
`);
  }
  strong({ tokens: e4 }) {
    let t2 = d;
    return `<strong>` + this[t2(419)].parseInline(e4) + `</strong>`;
  }
  em({ tokens: e4 }) {
    let t2 = d;
    return `<em>` + this.parser[t2(391)](e4) + `</em>`;
  }
  codespan({ text: e4 }) {
    return d(387) + H(e4, true) + `</code>`;
  }
  br(e4) {
    return d(357);
  }
  del({ tokens: e4 }) {
    return `<del>` + this.parser.parseInline(e4) + `</del>`;
  }
  [d(406)]({ href: e4, title: t2, tokens: n2 }) {
    let r2 = d, i2 = this[r2(419)][r2(391)](n2), a2 = Be(e4);
    if (a2 === null) return i2;
    e4 = a2;
    let o2 = r2(450) + e4 + `"`;
    return t2 && (o2 += ` title="` + H(t2) + `"`), o2 += `>` + i2 + `</a>`, o2;
  }
  [d(341)]({ href: e4, title: t2, text: n2, tokens: r2 }) {
    r2 && (n2 = this.parser.parseInline(r2, this.parser.textRenderer));
    let i2 = Be(e4);
    if (i2 === null) return H(n2);
    e4 = i2;
    let a2 = `<img src="` + e4 + `" alt="` + H(n2) + `"`;
    return t2 && (a2 += ` title="` + H(t2) + `"`), a2 += `>`, a2;
  }
  text(e4) {
    let t2 = d;
    return `tokens` in e4 && e4.tokens ? this.parser.parseInline(e4[t2(422)]) : `escaped` in e4 && e4.escaped ? e4.text : H(e4.text);
  }
}, J = class {
  [d(352)]({ text: e4 }) {
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
  [d(380)]({ text: e4 }) {
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
  checkbox({ raw: e4 }) {
    return e4;
  }
}, Y = class e3 {
  constructor(e4) {
    let t2 = d;
    u(this, `options`, void 0), u(this, `renderer`, void 0), u(this, `textRenderer`, void 0), this.options = e4 || m, this.options[t2(415)] = this.options.renderer || new q(), this.renderer = this.options[t2(415)], this[t2(415)][t2(382)] = this.options, this.renderer.parser = this, this.textRenderer = new J();
  }
  static parse(t2, n2) {
    return new e3(n2).parse(t2);
  }
  static [d(391)](t2, n2) {
    let r2 = d;
    return new e3(n2)[r2(391)](t2);
  }
  parse(e4) {
    let t2 = d;
    this.renderer[t2(419)] = this;
    let n2 = ``;
    for (let i2 = 0; i2 < e4.length; i2++) {
      var r2;
      let a2 = e4[i2];
      if (!((r2 = this.options[t2(366)]) == null || (r2 = r2.renderers) == null) && r2[a2[t2(373)]]) {
        let e5 = a2, r3 = this.options.extensions[t2(440)][e5[t2(373)]].call({ parser: this }, e5);
        if (r3 !== false || ![`space`, `hr`, `heading`, `code`, t2(363), `blockquote`, `list`, t2(443), `def`, `paragraph`, `text`].includes(e5.type)) {
          n2 += r3 || ``;
          continue;
        }
      }
      let o2 = a2;
      switch (o2.type) {
        case t2(429):
          n2 += this.renderer[t2(429)](o2);
          break;
        case `hr`:
          n2 += this[t2(415)].hr(o2);
          break;
        case t2(431):
          n2 += this.renderer.heading(o2);
          break;
        case `code`:
          n2 += this.renderer.code(o2);
          break;
        case `table`:
          n2 += this[t2(415)].table(o2);
          break;
        case `blockquote`:
          n2 += this.renderer[t2(433)](o2);
          break;
        case t2(376):
          n2 += this[t2(415)].list(o2);
          break;
        case `checkbox`:
          n2 += this.renderer.checkbox(o2);
          break;
        case `html`:
          n2 += this.renderer.html(o2);
          break;
        case `def`:
          n2 += this.renderer.def(o2);
          break;
        case `paragraph`:
          n2 += this.renderer.paragraph(o2);
          break;
        case `text`:
          n2 += this.renderer.text(o2);
          break;
        default: {
          let e5 = `Token with "` + o2.type + `" type was not found.`;
          if (this.options.silent) return console.error(e5), ``;
          throw Error(e5);
        }
      }
    }
    return n2;
  }
  parseInline(e4, t2 = this.renderer) {
    let n2 = d;
    this.renderer.parser = this;
    let r2 = ``;
    for (let a2 = 0; a2 < e4.length; a2++) {
      var i2;
      let o2 = e4[a2];
      if (!((i2 = this.options.extensions) == null || (i2 = i2[n2(440)]) == null) && i2[o2.type]) {
        let e5 = this.options.extensions[n2(440)][o2.type].call({ parser: this }, o2);
        if (e5 !== false || ![`escape`, `html`, n2(406), `image`, `strong`, `em`, `codespan`, `br`, `del`, `text`].includes(o2.type)) {
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
        case n2(406):
          r2 += t2.link(s2);
          break;
        case `image`:
          r2 += t2[n2(341)](s2);
          break;
        case n2(437):
          r2 += t2[n2(437)](s2);
          break;
        case `strong`:
          r2 += t2[n2(352)](s2);
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
        case n2(409):
          r2 += t2[n2(409)](s2);
          break;
        case `text`:
          r2 += t2[n2(380)](s2);
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
}, X = (f = class {
  constructor(e4) {
    u(this, `options`, void 0), u(this, `block`, void 0), this.options = e4 || m;
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
  [d(466)](e4) {
    return e4;
  }
  provideLexer(e4 = this.block) {
    return e4 ? K.lex : K.lexInline;
  }
  provideParser(e4 = this.block) {
    return e4 ? Y[d(351)] : Y.parseInline;
  }
}, u(f, `passThroughHooks`, /* @__PURE__ */ new Set([`preprocess`, `postprocess`, `processAllTokens`, `emStrongMask`])), u(f, d(350), /* @__PURE__ */ new Set([`preprocess`, `postprocess`, d(354)])), f), Z = new class {
  constructor(...e4) {
    let t2 = d;
    u(this, `defaults`, p()), u(this, `options`, this.setOptions), u(this, `parse`, this.parseMarkdown(true)), u(this, `parseInline`, this.parseMarkdown(false)), u(this, `Parser`, Y), u(this, `Renderer`, q), u(this, t2(397), J), u(this, `Lexer`, K), u(this, `Tokenizer`, G), u(this, `Hooks`, X), this.use(...e4);
  }
  walkTokens(e4, t2) {
    let n2 = d, r2 = [];
    for (let a2 of e4) switch (r2 = r2.concat(t2.call(this, a2)), a2.type) {
      case `table`: {
        let e5 = a2;
        for (let i3 of e5.header) r2 = r2[n2(364)](this[n2(425)](i3.tokens, t2));
        for (let i3 of e5.rows) for (let e6 of i3) r2 = r2.concat(this[n2(425)](e6.tokens, t2));
        break;
      }
      case n2(376): {
        let e5 = a2;
        r2 = r2[n2(364)](this.walkTokens(e5.items, t2));
        break;
      }
      default: {
        var i2;
        let e5 = a2;
        !((i2 = this.defaults[n2(366)]) == null || (i2 = i2.childTokens) == null) && i2[e5.type] ? this.defaults.extensions.childTokens[e5.type].forEach((i3) => {
          let a3 = n2, o2 = e5[i3].flat(1 / 0);
          r2 = r2[a3(364)](this.walkTokens(o2, t2));
        }) : e5.tokens && (r2 = r2.concat(this.walkTokens(e5.tokens, t2)));
      }
    }
    return r2;
  }
  use(...e4) {
    let t2 = d, n2 = this[t2(465)].extensions || { renderers: {}, childTokens: {} };
    return e4.forEach((e5) => {
      let r2 = t2, i2 = a({}, e5);
      if (i2.async = this.defaults.async || i2.async || false, e5.extensions && (e5.extensions.forEach((e6) => {
        let t3 = v;
        if (!e6.name) throw Error(`extension name required`);
        if (`renderer` in e6) {
          let r3 = n2[t3(440)][e6.name];
          r3 ? n2.renderers[e6.name] = function(...n3) {
            let i3 = e6[t3(415)].apply(this, n3);
            return i3 === false && (i3 = r3.apply(this, n3)), i3;
          } : n2[t3(440)][e6[t3(413)]] = e6.renderer;
        }
        if (`tokenizer` in e6) {
          if (!e6.level || e6.level !== `block` && e6.level !== `inline`) throw Error(`extension level must be 'block' or 'inline'`);
          let r3 = n2[e6.level];
          r3 ? r3.unshift(e6[t3(481)]) : n2[e6[t3(360)]] = [e6.tokenizer], e6.start && (e6[t3(360)] === `block` ? n2[t3(362)] ? n2.startBlock.push(e6.start) : n2.startBlock = [e6.start] : e6[t3(360)] === t3(392) && (n2.startInline ? n2[t3(371)].push(e6.start) : n2.startInline = [e6.start]));
        }
        t3(395) in e6 && e6[t3(395)] && (n2[t3(395)][e6[t3(413)]] = e6.childTokens);
      }), i2.extensions = n2), e5.renderer) {
        let t3 = this.defaults.renderer || new q(this.defaults);
        for (let n3 in e5.renderer) {
          if (!(n3 in t3)) throw Error(`renderer '` + n3 + `' does not exist`);
          if ([`options`, `parser`][r2(430)](n3)) continue;
          let i3 = n3, a2 = e5.renderer[i3], o2 = t3[i3];
          t3[i3] = (...e6) => {
            let n4 = a2.apply(t3, e6);
            return n4 === false && (n4 = o2.apply(t3, e6)), n4 || ``;
          };
        }
        i2[r2(415)] = t3;
      }
      if (e5[r2(481)]) {
        let t3 = this.defaults.tokenizer || new G(this.defaults);
        for (let n3 in e5.tokenizer) {
          if (!(n3 in t3)) throw Error(`tokenizer '` + n3 + r2(349));
          if ([`options`, `rules`, `lexer`].includes(n3)) continue;
          let i3 = n3, a2 = e5.tokenizer[i3], o2 = t3[i3];
          t3[i3] = (...e6) => {
            let n4 = r2, i4 = a2[n4(423)](t3, e6);
            return i4 === false && (i4 = o2[n4(423)](t3, e6)), i4;
          };
        }
        i2.tokenizer = t3;
      }
      if (e5.hooks) {
        let t3 = this[r2(465)][r2(483)] || new X();
        for (let n3 in e5[r2(483)]) {
          if (!(n3 in t3)) throw Error(`hook '` + n3 + `' does not exist`);
          if ([`options`, `block`].includes(n3)) continue;
          let r3 = n3, i3 = e5.hooks[r3], a2 = t3[r3];
          X.passThroughHooks.has(n3) ? t3[r3] = (e6) => {
            if (this.defaults.async && X.passThroughHooksRespectAsync.has(n3)) return c(function* () {
              let n4 = yield i3.call(t3, e6);
              return a2.call(t3, n4);
            })();
            let r4 = i3.call(t3, e6);
            return a2.call(t3, r4);
          } : t3[r3] = (...e6) => {
            if (this.defaults.async) return c(function* () {
              let n5 = yield i3.apply(t3, e6);
              return n5 === false && (n5 = yield a2.apply(t3, e6)), n5;
            })();
            let n4 = i3.apply(t3, e6);
            return n4 === false && (n4 = a2.apply(t3, e6)), n4;
          };
        }
        i2.hooks = t3;
      }
      if (e5.walkTokens) {
        let t3 = this[r2(465)].walkTokens, n3 = e5[r2(425)];
        i2.walkTokens = function(e6) {
          let i3 = r2, a2 = [];
          return a2[i3(345)](n3.call(this, e6)), t3 && (a2 = a2.concat(t3.call(this, e6))), a2;
        };
      }
      this.defaults = a(a({}, this.defaults), i2);
    }), this;
  }
  setOptions(e4) {
    let t2 = d;
    return this.defaults = a(a({}, this[t2(465)]), e4), this;
  }
  lexer(e4, t2) {
    return K.lex(e4, t2 ?? this.defaults);
  }
  parser(e4, t2) {
    return Y.parse(e4, t2 ?? this.defaults);
  }
  [d(377)](e4) {
    var t2 = this;
    return (n2, r2) => {
      let i2 = v, o2 = a({}, r2), s2 = a(a({}, this.defaults), o2), l2 = this[i2(379)](!!s2.silent, !!s2.async);
      if (this.defaults.async === true && o2.async === false) return l2(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));
      if (typeof n2 > `u` || n2 === null) return l2(Error(`marked(): input parameter is undefined or null`));
      if (typeof n2 != `string`) return l2(Error(`marked(): input parameter is of type ` + Object.prototype.toString.call(n2) + `, string expected`));
      if (s2.hooks && (s2[i2(483)].options = s2, s2.hooks.block = e4), s2.async) return c(function* () {
        let r3 = i2, a2 = s2.hooks ? yield s2.hooks.preprocess(n2) : n2, o3 = yield (s2[r3(483)] ? yield s2.hooks[r3(455)](e4) : e4 ? K.lex : K.lexInline)(a2, s2), c2 = s2.hooks ? yield s2.hooks.processAllTokens(o3) : o3;
        s2[r3(425)] && (yield Promise.all(t2.walkTokens(c2, s2[r3(425)])));
        let l3 = yield (s2.hooks ? yield s2.hooks[r3(489)](e4) : e4 ? Y.parse : Y.parseInline)(c2, s2);
        return s2[r3(483)] ? yield s2.hooks.postprocess(l3) : l3;
      })().catch(l2);
      try {
        s2.hooks && (n2 = s2[i2(483)].preprocess(n2));
        let t3 = (s2.hooks ? s2[i2(483)].provideLexer(e4) : e4 ? K.lex : K.lexInline)(n2, s2);
        s2.hooks && (t3 = s2.hooks.processAllTokens(t3)), s2.walkTokens && this.walkTokens(t3, s2.walkTokens);
        let r3 = (s2[i2(483)] ? s2.hooks.provideParser(e4) : e4 ? Y.parse : Y.parseInline)(t3, s2);
        return s2.hooks && (r3 = s2.hooks[i2(368)](r3)), r3;
      } catch (e5) {
        return l2(e5);
      }
    };
  }
  [d(379)](e4, t2) {
    return (n2) => {
      let r2 = v;
      if (n2.message += `
Please report this to https://github.com/markedjs/marked.`, e4) {
        let e5 = `<p>An error occurred:</p><pre>` + H(n2.message + ``, true) + `</pre>`;
        return t2 ? Promise.resolve(e5) : e5;
      }
      if (t2) return Promise[r2(435)](n2);
      throw n2;
    };
  }
}();
function Q(e4, t2) {
  return Z.parse(e4, t2);
}
function $() {
  let e4 = [`text`, "}(?:```|~~~)", `options`, `doubleBlankLine`, `    `, `inLink`, `</table>
`, `<code>`, `header`, `def`, `endingSpaceChar`, `parseInline`, `inline`, ` {0,3}#{1,6}(?:\\s|$)`, `blockTokens`, `childTokens`, `tag`, `TextRenderer`, `inlineQueue`, `lexer`, `charCodeAt`, `multipleSpaceGlobal`, `beginningSpace`, `use`, `</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`, `startingSpaceChar`, `link`, `repeat`, `code`, `del`, `other`, `gfm`, `lex`, `name`, `rows`, `renderer`, `slice`, `2362392KCffqL`, `newline`, `parser`, `1050220LWdirT`, `attribute`, `tokens`, `apply`, `lastIndex`, `walkTokens`, `3kUHvIS`, `Renderer`, `headingBeginRegex`, `space`, `includes`, `heading`, `{2,}`, `blockquote`, `7180gtiUQx`, `reject`, `rules`, `checkbox`, `(?!~)[\\s\\p{P}\\p{S}]`, `</li>
`, `renderers`, `escape`, `min`, `html`, `|fences`, `tabCharGlobal`, `raw`, `state`, `^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`, `8mdjYCc`, `<a href="`, `144914REQQkJ`, ` {0,3}(?:[*+-]|1[.)])[ \\t]`, `-->`, `join`, `provideLexer`, `normal`, `newLineCharGlobal`, `match`, `split`, `[\\s\\p{P}\\p{S}]`, `align`, `block`, `Infinite loop on byte: `, `paragraph`, `defaults`, `emStrongMask`, `links`, `delLDelim`, `<table>
<thead>
`, `495624FMKkwY`, `escapeTestNoEncode`, `pre`, `src`, `endPreScriptTag`, `mailto:`, `call`, `reflink`, `fencesBeginRegex`, `blankLine`, `replace`, `tokenizer`, `index`, `hooks`, `exec`, `Lexer`, `tableAlignChars`, `414rslmkh`, `4852370BWVINS`, `provideParser`, `breaks`, `filter`, `image`, `escapeReplace`, `trim`, `pedantic`, `push`, `getRegex`, `substring`, `fences`, `' does not exist`, `passThroughHooksRespectAsync`, `parse`, `strong`, `635117EkkIuC`, `processAllTokens`, `label`, `test`, `<br>`, `|tag`, `inRawBlock`, `level`, `blockquoteBeginRegex`, `startBlock`, `table`, `concat`, `^ {0,`, `extensions`, `top`, `postprocess`, `forEach`, `comment`, `startInline`, `inlineTokens`, `type`, `length`, `inlineText`, `list`, `parseMarkdown`, `anyPunctuation`, `onError`];
  return $ = function() {
    return e4;
  }, $();
}
Q[d(382)] = Q.setOptions = function(e4) {
  return Z.setOptions(e4), Q.defaults = Z.defaults, h(Q.defaults), Q;
}, Q.getDefaults = p, Q.defaults = m, Q.use = function(...e4) {
  return Z.use(...e4), Q.defaults = Z.defaults, h(Q.defaults), Q;
}, Q.walkTokens = function(e4, t2) {
  return Z.walkTokens(e4, t2);
}, Q.parseInline = Z.parseInline, Q.Parser = Y, Q.parser = Y[d(351)], Q[d(427)] = q, Q.TextRenderer = J, Q[d(485)] = K, Q.lexer = K[d(412)], Q.Tokenizer = G, Q.Hooks = X, Q.parse = Q, Q.options, Q.setOptions, Q[d(403)], Q.walkTokens, Q.parseInline, Y.parse, K[d(412)];
var Ke = [`innerHTML`], qe = l(r({ __name: `MarkdownViewer`, props: { data: {} }, setup(r2) {
  let i2 = r2, a2 = t(() => Q(i2.data));
  return (t2, r3) => (n(), e(`div`, { class: `markdown-body`, innerHTML: a2.value }, null, 8, Ke));
} }), [[`__scopeId`, `data-v-e0bd8a5a`]]);
export {
  qe as default
};
