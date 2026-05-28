var e = hr;
(function(e3, t5) {
  for (var n3 = hr, r2 = e3(); ; ) try {
    if (-parseInt(n3(987)) / 1 * (-parseInt(n3(650)) / 2) + parseInt(n3(729)) / 3 + -parseInt(n3(590)) / 4 * (-parseInt(n3(545)) / 5) + -parseInt(n3(980)) / 6 + parseInt(n3(455)) / 7 + parseInt(n3(830)) / 8 + -parseInt(n3(864)) / 9 === t5) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(kn, 767385);
var t = class e2 extends Error {
  constructor(t5, n3) {
    var r2 = hr, i2 = `KaTeX parse error: ` + t5, a2, o2, s2 = n3 && n3.loc;
    if (s2 && s2.start <= s2.end) {
      var c2 = s2.lexer.input;
      a2 = s2.start, o2 = s2.end, a2 === c2.length ? i2 += ` at end of input: ` : i2 += ` at position ` + (a2 + 1) + `: `;
      var l2 = c2.slice(a2, o2).replace(/[^]/g, r2(555)), u2 = a2 > 15 ? `\u2026` + c2.slice(a2 - 15, a2) : c2.slice(0, a2), d2 = o2 + 15 < c2.length ? c2.slice(o2, o2 + 15) + `\u2026` : c2.slice(o2);
      i2 += u2 + l2 + d2;
    }
    super(i2), this.name = `ParseError`, this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, e2[r2(682)]), this.position = a2, a2 != null && o2 != null && (this.length = o2 - a2), this.rawMessage = t5;
  }
}, n = /([A-Z])/g, r = (t5) => t5.replace(n, `-$1`)[e(373)](), i = { "&": `&amp;`, ">": `&gt;`, "<": `&lt;`, '"': e(747), "'": e(537) }, a = /[&><"']/g, o = (e3) => String(e3).replace(a, (e4) => i[e4]), s = (t5) => t5.type === `ordgroup` || t5.type === `color` ? t5.body.length === 1 ? s(t5[e(713)][0]) : t5 : t5.type === e(339) ? s(t5.body) : t5, c = /* @__PURE__ */ new Set([`mathord`, `textord`, e(898)]), l = (e3) => c.has(s(e3).type), u = (t5) => {
  var n3 = e, r2 = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t5);
  return r2 ? r2[2] !== `:` || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(r2[1]) ? null : r2[1].toLowerCase() : n3(390);
}, d = { displayMode: { type: `boolean`, description: `Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.`, cli: e(755) }, output: { type: { enum: [`htmlAndMathml`, `html`, `mathml`] }, description: `Determines the markup language of the output.`, cli: `-F, --format <type>` }, leqno: { type: `boolean`, description: `Render display math in leqno style (left-justified tags).` }, fleqn: { type: `boolean`, description: e(872) }, throwOnError: { type: e(662), default: true, cli: `-t, --no-throw-on-error`, cliDescription: `Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error.` }, errorColor: { type: e(357), default: `#cc0000`, cli: `-c, --error-color <color>`, cliDescription: e(512), cliProcessor: (e3) => `#` + e3 }, macros: { type: `object`, cli: `-m, --macro <def>`, cliDescription: e(701), cliDefault: [], cliProcessor: (e3, t5) => (t5.push(e3), t5) }, minRuleThickness: { type: `number`, description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.", processor: (e3) => Math.max(0, e3), cli: `--min-rule-thickness <size>`, cliProcessor: parseFloat }, colorIsTextColor: { type: `boolean`, description: `Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.`, cli: e(483) }, strict: { type: [{ enum: [`warn`, `ignore`, `error`] }, `boolean`, `function`], description: `Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.`, cli: e(777), cliDefault: false }, trust: { type: [`boolean`, `function`], description: `Trust the input, enabling all HTML features such as \\url.`, cli: `-T, --trust` }, maxSize: { type: `number`, default: 1 / 0, description: e(394), processor: (t5) => Math[e(477)](0, t5), cli: `-s, --max-size <n>`, cliProcessor: parseInt }, maxExpand: { type: `number`, default: 1e3, description: `Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.`, processor: (e3) => Math.max(0, e3), cli: `-e, --max-expand <n>`, cliProcessor: (t5) => t5 === e(1052) ? 1 / 0 : parseInt(t5) }, globalGroup: { type: `boolean`, cli: false } };
function f(e3) {
  if (typeof e3 != `string`) return e3.enum[0];
  switch (e3) {
    case `boolean`:
      return false;
    case `string`:
      return ``;
    case `number`:
      return 0;
    case `object`:
      return {};
    default:
      throw Error(`Unexpected schema type; settings must declare an explicit default.`);
  }
}
function p(e3) {
  return e3.default === void 0 ? f(Array.isArray(e3.type) ? e3.type[0] : e3.type) : e3.default;
}
function m(t5, n3, r2, i2) {
  var a2 = e, o2 = r2[n3];
  t5[n3] = o2 === void 0 ? p(i2) : i2.processor ? i2[a2(295)](o2) : o2;
}
var h = class {
  constructor(t5) {
    var n3 = e;
    t5 === void 0 && (t5 = {}), this.displayMode = void 0, this[n3(560)] = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this[n3(1038)] = void 0, this.maxSize = void 0, this[n3(703)] = void 0, this.globalGroup = void 0, t5 || (t5 = {});
    for (var r2 of Object.keys(d)) {
      var i2 = d[r2];
      i2 && m(this, r2, t5, i2);
    }
  }
  reportNonstrict(n3, r2, i2) {
    var a2 = e, o2 = this.strict;
    if (typeof o2 == `function` && (o2 = o2(n3, r2, i2)), !(!o2 || o2 === `ignore`)) {
      if (o2 === true || o2 === `error`) throw new t(a2(857) + (r2 + ` [` + n3 + `]`), i2);
      o2 === `warn` ? typeof console < `u` && console.warn(a2(714) + (r2 + ` [` + n3 + `]`)) : typeof console < `u` && console.warn(a2(877) + (a2(358) + o2 + `': ` + r2 + ` [` + n3 + `]`));
    }
  }
  [e(1028)](t5, n3, r2) {
    var i2 = e, a2 = this.strict;
    if (typeof a2 == `function`) try {
      a2 = a2(t5, n3, r2);
    } catch {
      a2 = `error`;
    }
    return !a2 || a2 === `ignore` ? false : a2 === true || a2 === `error` ? true : a2 === `warn` ? (typeof console < `u` && console.warn(`LaTeX-incompatible input and strict mode is set to 'warn': ` + (n3 + ` [` + t5 + `]`)), false) : (typeof console < `u` && console[i2(822)](`LaTeX-incompatible input and strict mode is set to ` + (`unrecognized '` + a2 + i2(946) + n3 + ` [` + t5 + `]`)), false);
  }
  [e(890)](e3) {
    if (`url` in e3 && e3.url && !e3.protocol) {
      var t5 = u(e3.url);
      if (t5 == null) return false;
      e3.protocol = t5;
    }
    return !!(typeof this.trust == `function` ? this.trust(e3) : this.trust);
  }
}, g = class {
  constructor(e3, t5, n3) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e3, this.size = t5, this.cramped = n3;
  }
  [e(522)]() {
    return T[ee[this.id]];
  }
  sub() {
    return T[te[this.id]];
  }
  fracNum() {
    return T[E[this.id]];
  }
  fracDen() {
    return T[ne[this.id]];
  }
  [e(342)]() {
    return T[re[this.id]];
  }
  text() {
    return T[ie[this.id]];
  }
  isTight() {
    return this.size >= 2;
  }
}, _ = 0, v = 1, y = 2, b = 3, x = 4, S = 5, C = 6, w = 7, T = [new g(_, 0, false), new g(v, 0, true), new g(y, 1, false), new g(b, 1, true), new g(x, 2, false), new g(S, 2, true), new g(C, 3, false), new g(w, 3, true)], ee = [x, S, x, S, C, w, C, w], te = [S, S, S, S, w, w, w, w], E = [y, b, x, S, C, w, C, w], ne = [b, b, S, S, w, w, w, w], re = [v, v, b, b, S, S, w, w], ie = [_, v, y, b, y, b, y, b], D = { DISPLAY: T[_], TEXT: T[y], SCRIPT: T[x], SCRIPTSCRIPT: T[C] }, ae = [{ name: `latin`, blocks: [[256, 591], [768, 879]] }, { name: `cyrillic`, blocks: [[1024, 1279]] }, { name: `armenian`, blocks: [[1328, 1423]] }, { name: `brahmic`, blocks: [[2304, 4255]] }, { name: `georgian`, blocks: [[4256, 4351]] }, { name: `cjk`, blocks: [[12288, 12543], [19968, 40879], [65280, 65376]] }, { name: `hangul`, blocks: [[44032, 55215]] }];
function oe(t5) {
  for (var n3 = e, r2 = 0; r2 < ae.length; r2++) for (var i2 = ae[r2], a2 = 0; a2 < i2.blocks.length; a2++) {
    var o2 = i2[n3(1036)][a2];
    if (t5 >= o2[0] && t5 <= o2[1]) return i2.name;
  }
  return null;
}
var se = [];
ae.forEach((e3) => e3.blocks.forEach((e4) => se.push(...e4)));
function ce(e3) {
  for (var t5 = 0; t5 < se.length; t5 += 2) if (e3 >= se[t5] && e3 <= se[t5 + 1]) return true;
  return false;
}
var O = (e3) => e3 + ` ` + e3, le = 80, ue = function(t5, n3) {
  var r2 = e;
  return r2(737) + (622 + t5 + n3) + r2(786) + t5 / 2.075 + ` -` + t5 + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + t5) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + t5) + ` ` + n3 + r2(1040) + (40 + t5) + `h-400000z`;
}, de = function(t5, n3) {
  var r2 = e;
  return `M263,` + (601 + t5 + n3) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + t5 / 2.084 + ` -` + t5 + r2(639) + (40 + t5) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + t5) + ` ` + n3 + `h400000v` + (40 + t5) + `h-400000z`;
}, fe = function(t5, n3) {
  var r2 = e;
  return `M983 ` + (10 + t5 + n3) + `
l` + t5 / 3.13 + ` -` + t5 + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + t5) + r2(559) + (1001 + t5) + ` ` + n3 + `h400000v` + (40 + t5) + `h-400000z`;
}, pe = function(t5, n3) {
  return e(299) + (2398 + t5 + n3) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + t5 / 4.223 + ` -` + t5 + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + t5) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + t5) + ` ` + n3 + `
h400000v` + (40 + t5) + `h-400000z`;
}, me = function(t5, n3) {
  var r2 = e;
  return `M473,` + (2713 + t5 + n3) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + t5 / 5.298 + ` -` + t5 + r2(523) + (40 + t5) + r2(1001) + (1001 + t5) + ` ` + n3 + `h400000v` + (40 + t5) + `H1017.7z`;
}, he = function(e3) {
  var t5 = e3 / 2;
  return `M400000 ` + e3 + ` H0 L` + t5 + ` 0 l65 45 L145 ` + (e3 - 80) + ` H400000z`;
}, ge = function(t5, n3, r2) {
  var i2 = e, a2 = r2 - 54 - n3 - t5;
  return `M702 ` + (t5 + n3) + `H400000` + (40 + t5) + `
H742v` + a2 + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + n3 + `H400000v` + (40 + t5) + i2(1009);
}, _e = function(e3, t5, n3) {
  t5 = 1e3 * t5;
  var r2 = ``;
  switch (e3) {
    case `sqrtMain`:
      r2 = ue(t5, le);
      break;
    case `sqrtSize1`:
      r2 = de(t5, le);
      break;
    case `sqrtSize2`:
      r2 = fe(t5, le);
      break;
    case `sqrtSize3`:
      r2 = pe(t5, le);
      break;
    case `sqrtSize4`:
      r2 = me(t5, le);
      break;
    case `sqrtTall`:
      r2 = ge(t5, le, n3);
  }
  return r2;
}, ve = function(t5, n3) {
  var r2 = e;
  switch (t5) {
    case `\u239C`:
      return O(`M291 0 H417 V` + n3 + ` H291z`);
    case `\u2223`:
      return O(`M145 0 H188 V` + n3 + ` H145z`);
    case `\u2225`:
      return O(`M145 0 H188 V` + n3 + ` H145z`) + O(r2(637) + n3 + ` H367z`);
    case `\u239F`:
      return O(`M457 0 H583 V` + n3 + ` H457z`);
    case `\u23A2`:
      return O(`M319 0 H403 V` + n3 + ` H319z`);
    case `\u23A5`:
      return O(`M263 0 H347 V` + n3 + ` H263z`);
    case `\u23AA`:
      return O(`M384 0 H504 V` + n3 + r2(768));
    case `\u23D0`:
      return O(`M312 0 H355 V` + n3 + ` H312z`);
    case `\u2016`:
      return O(`M257 0 H300 V` + n3 + ` H257z`) + O(`M478 0 H521 V` + n3 + ` H478z`);
    default:
      return ``;
  }
}, ye = { doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`, doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`, leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`, leftbrace: e(549), leftbraceunder: e(773), leftgroup: e(419), leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`, leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`, leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`, leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`, leftharpoondownplus: e(486), lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`, leftlinesegment: O(e(544)), leftbracketunder: O(`M0 0 h120 V290 H399995 v120 H0z`), leftbracketover: O(`M0 440 h120 V150 H399995 v-120 H0z`), leftmapsto: O(`M40 281 V448H0V74H40V241H400000v40z`), leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`, longequal: O(`M0 50 h400000 v40H0z m0 194h40000v40H0z`), midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`, midbraceunder: e(405), oiintSize1: e(1064), oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`, oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`, oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`, rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`, rightbrace: e(808), rightbraceunder: e(694), rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`, rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`, rightharpoon: e(297), rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`, rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`, rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`, righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`, rightlinesegment: O(`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`), rightbracketunder: O(e(848)), rightbracketover: O(`M399995 440 h-120 V150 H0 v-120 H399995z`), rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`, twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`, twoheadrightarrow: e(623), tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`, tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`, tilde3: e(321), tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`, vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`, widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`, widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`, widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`, widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`, baraboveleftarrow: e(591), rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`, baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`, rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`, shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`, shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z` }, be = function(t5, n3) {
  var r2 = e;
  switch (t5) {
    case `lbrack`:
      return `M403 1759 V84 H666 V0 H319 V1759 v` + n3 + ` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + n3 + ` v1759 v84 h84z`;
    case `rbrack`:
      return r2(553) + n3 + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + n3 + r2(605);
    case `vert`:
      return `M145 15 v585 v` + n3 + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -n3 + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + n3 + ` v585 h43z`;
    case `doublevert`:
      return r2(612) + n3 + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -n3 + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + n3 + ` v585 h43z
M367 15 v585 v` + n3 + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -n3 + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + n3 + ` v585 h43z`;
    case `lfloor`:
      return r2(360) + n3 + r2(993) + n3 + ` v1715 H319z`;
    case `rfloor`:
      return r2(360) + n3 + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + n3 + ` v1715 H319z`;
    case `lceil`:
      return `M403 1759 V84 H666 V0 H319 V1759 v` + n3 + ` v602 h84z
M403 1759 V0 H319 V1759 v` + n3 + ` v602 h84z`;
    case `rceil`:
      return r2(553) + n3 + r2(451) + n3 + ` v602 h84z`;
    case `lparen`:
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (n3 + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (n3 + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case r2(1076):
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (n3 + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (n3 + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw Error(r2(887));
  }
};
function xe(e3) {
  return `toText` in e3;
}
var Se = class {
  constructor(t5) {
    var n3 = e;
    this[n3(406)] = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this[n3(956)] = void 0, this.children = t5, this[n3(906)] = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  [e(634)](t5) {
    var n3 = e;
    return this.classes[n3(493)](t5);
  }
  toNode() {
    for (var e3 = document.createDocumentFragment(), t5 = 0; t5 < this.children.length; t5++) e3.appendChild(this.children[t5].toNode());
    return e3;
  }
  toMarkup() {
    for (var e3 = ``, t5 = 0; t5 < this.children.length; t5++) e3 += this.children[t5].toMarkup();
    return e3;
  }
  toText() {
    return this.children.map((e3) => {
      if (xe(e3)) return e3.toText();
      throw Error(`Expected MathDomNode with toText, got ` + e3.constructor.name);
    }).join(``);
  }
}, Ce = { pt: 1, mm: 7227 / 2540, cm: 7227 / 254, in: 72.27, bp: 803 / 800, pc: 12, dd: 1238 / 1157, cc: 14856 / 1157, nd: 685 / 642, nc: 1370 / 107, sp: 1 / 65536, px: 803 / 800 }, we = { ex: true, em: true, mu: true }, Te = function(e3) {
  return typeof e3 != `string` && (e3 = e3.unit), e3 in Ce || e3 in we || e3 === `ex`;
}, k = function(n3, r2) {
  var i2 = e, a2;
  if (n3[i2(652)] in Ce) a2 = Ce[n3[i2(652)]] / r2[i2(1057)]().ptPerEm / r2.sizeMultiplier;
  else if (n3.unit === `mu`) a2 = r2.fontMetrics().cssEmPerMu;
  else {
    var o2 = r2.style.isTight() ? r2.havingStyle(r2.style.text()) : r2;
    if (n3.unit === `ex`) a2 = o2[i2(1057)]().xHeight;
    else if (n3.unit === `em`) a2 = o2[i2(1057)]()[i2(963)];
    else throw new t(`Invalid unit: '` + n3.unit + `'`);
    o2 !== r2 && (a2 *= o2.sizeMultiplier / r2.sizeMultiplier);
  }
  return Math.min(n3.number * a2, r2.maxSize);
}, A = function(e3) {
  return +e3.toFixed(4) + `em`;
}, Ee = function(e3) {
  return e3.filter((e4) => e4).join(` `);
}, De = function(e3) {
  var t5 = ``;
  for (var n3 of Object.keys(e3)) {
    var i2 = e3[n3];
    i2 !== void 0 && (t5 += r(n3) + `:` + i2 + `;`);
  }
  return t5;
}, Oe = function(t5, n3, r2) {
  var i2 = e;
  if (this.classes = t5 || [], this.attributes = {}, this[i2(769)] = 0, this[i2(882)] = 0, this.maxFontSize = 0, this.style = r2 || {}, n3) {
    n3.style.isTight() && this.classes.push(`mtight`);
    var a2 = n3.getColor();
    a2 && (this.style.color = a2);
  }
}, ke = function(t5) {
  var n3 = e, r2 = document.createElement(t5);
  r2.className = Ee(this[n3(906)]), Object.assign(r2[n3(956)], this.style);
  for (var i2 of Object[n3(892)](this.attributes)) r2.setAttribute(i2, this.attributes[i2]);
  for (var a2 = 0; a2 < this.children.length; a2++) r2.appendChild(this[n3(406)][a2].toNode());
  return r2;
}, Ae = /[\s"'>/=\x00-\x1f]/, je = function(n3) {
  var r2 = e, i2 = `<` + n3;
  this.classes.length && (i2 += r2(535) + o(Ee(this.classes)) + `"`);
  var a2 = De(this.style);
  a2 && (i2 += ` style="` + o(a2) + `"`);
  for (var s2 of Object[r2(892)](this.attributes)) {
    if (Ae.test(s2)) throw new t(r2(318) + s2 + `'`);
    i2 += ` ` + s2 + `="` + o(this[r2(853)][s2]) + `"`;
  }
  i2 += `>`;
  for (var c2 = 0; c2 < this.children.length; c2++) i2 += this.children[c2][r2(1077)]();
  return i2 += `</` + n3 + `>`, i2;
}, Me = class {
  constructor(t5, n3, r2, i2) {
    var a2 = e;
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this[a2(956)] = void 0, this.italic = void 0, Oe.call(this, t5, r2, i2), this.children = n3 || [];
  }
  setAttribute(e3, t5) {
    this.attributes[e3] = t5;
  }
  hasClass(t5) {
    var n3 = e;
    return this[n3(906)][n3(493)](t5);
  }
  toNode() {
    return ke[e(721)](this, `span`);
  }
  [e(1077)]() {
    return je.call(this, `span`);
  }
}, Ne = class {
  constructor(t5, n3, r2, i2) {
    var a2 = e;
    this.children = void 0, this[a2(853)] = void 0, this.classes = void 0, this[a2(769)] = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Oe.call(this, n3, i2), this.children = r2 || [], this[a2(362)](a2(774), t5);
  }
  setAttribute(t5, n3) {
    var r2 = e;
    this[r2(853)][t5] = n3;
  }
  hasClass(e3) {
    return this.classes.includes(e3);
  }
  toNode() {
    return ke.call(this, `a`);
  }
  toMarkup() {
    return je.call(this, `a`);
  }
}, Pe = class {
  constructor(t5, n3, r2) {
    var i2 = e;
    this.src = void 0, this.alt = void 0, this.classes = void 0, this[i2(769)] = void 0, this.depth = void 0, this[i2(600)] = void 0, this.style = void 0, this.alt = n3, this[i2(837)] = t5, this.classes = [`mord`], this.height = 0, this.depth = 0, this[i2(600)] = 0, this.style = r2;
  }
  hasClass(e3) {
    return this.classes.includes(e3);
  }
  toNode() {
    var t5 = e, n3 = document.createElement(`img`);
    return n3.src = this[t5(837)], n3.alt = this.alt, n3.className = `mord`, Object.assign(n3.style, this.style), n3;
  }
  toMarkup() {
    var t5 = e, n3 = `<img src="` + o(this.src) + `"` + (t5(312) + o(this.alt) + `"`), r2 = De(this.style);
    return r2 && (n3 += t5(924) + o(r2) + `"`), n3 += `'/>`, n3;
  }
}, Fe = { \u00EE: `\u0131\u0302`, \u00EF: `\u0131\u0308`, \u00ED: `\u0131\u0301`, \u00EC: `\u0131\u0300` }, Ie = class {
  constructor(t5, n3, r2, i2, a2, o2, s2, c2) {
    var l2 = e;
    this[l2(1033)] = void 0, this[l2(769)] = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this[l2(956)] = void 0, this.text = t5, this.height = n3 || 0, this.depth = r2 || 0, this.italic = i2 || 0, this.skew = a2 || 0, this.width = o2 || 0, this.classes = s2 || [], this.style = c2 || {}, this.maxFontSize = 0;
    var u2 = oe(this.text.charCodeAt(0));
    u2 && this.classes[l2(610)](u2 + `_fallback`), /[îïíì]/.test(this.text) && (this.text = Fe[this.text]);
  }
  hasClass(e3) {
    return this.classes.includes(e3);
  }
  toNode() {
    var t5 = e, n3 = document.createTextNode(this[t5(1033)]), r2 = null;
    return this[t5(448)] > 0 && (r2 = document.createElement(`span`), r2.style.marginRight = A(this.italic)), this.classes.length > 0 && (r2 || (r2 = document[t5(997)](`span`)), r2.className = Ee(this.classes)), Object.keys(this.style)[t5(739)] > 0 && (r2 || (r2 = document.createElement(`span`)), Object.assign(r2.style, this.style)), r2 ? (r2.appendChild(n3), r2) : n3;
  }
  toMarkup() {
    var e3 = false, t5 = `<span`;
    this.classes.length && (e3 = true, t5 += ` class="`, t5 += o(Ee(this.classes)), t5 += `"`);
    var n3 = ``;
    this.italic > 0 && (n3 += `margin-right:` + A(this.italic) + `;`), n3 += De(this.style), n3 && (e3 = true, t5 += ` style="` + o(n3) + `"`);
    var r2 = o(this.text);
    return e3 ? (t5 += `>`, t5 += r2, t5 += `</span>`, t5) : r2;
  }
}, Le = class {
  constructor(t5, n3) {
    var r2 = e;
    this.children = void 0, this.attributes = void 0, this[r2(406)] = t5 || [], this[r2(853)] = n3 || {};
  }
  toNode() {
    var t5 = e, n3 = document.createElementNS(`http://www.w3.org/2000/svg`, `svg`);
    for (var r2 of Object.keys(this[t5(853)])) n3.setAttribute(r2, this.attributes[r2]);
    for (var i2 = 0; i2 < this.children[t5(739)]; i2++) n3[t5(428)](this.children[i2].toNode());
    return n3;
  }
  toMarkup() {
    var t5 = e, n3 = `<svg xmlns="http://www.w3.org/2000/svg"`;
    for (var r2 of Object[t5(892)](this.attributes)) n3 += ` ` + r2 + `="` + o(this[t5(853)][r2]) + `"`;
    n3 += `>`;
    for (var i2 = 0; i2 < this.children.length; i2++) n3 += this.children[i2].toMarkup();
    return n3 += `</svg>`, n3;
  }
}, Re = class {
  constructor(e3, t5) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e3, this.alternate = t5;
  }
  toNode() {
    var e3 = document.createElementNS(`http://www.w3.org/2000/svg`, `path`);
    return this.alternate ? e3.setAttribute(`d`, this.alternate) : e3.setAttribute(`d`, ye[this.pathName]), e3;
  }
  toMarkup() {
    return this.alternate ? `<path d="` + o(this.alternate) + `"/>` : `<path d="` + o(ye[this.pathName]) + `"/>`;
  }
}, ze = class {
  constructor(t5) {
    var n3 = e;
    this[n3(853)] = void 0, this.attributes = t5 || {};
  }
  toNode() {
    var t5 = e, n3 = document.createElementNS(`http://www.w3.org/2000/svg`, t5(925));
    for (var r2 of Object[t5(892)](this.attributes)) n3.setAttribute(r2, this[t5(853)][r2]);
    return n3;
  }
  toMarkup() {
    var e3 = `<line`;
    for (var t5 of Object.keys(this.attributes)) e3 += ` ` + t5 + `="` + o(this.attributes[t5]) + `"`;
    return e3 += `/>`, e3;
  }
};
function Be(e3) {
  if (e3 instanceof Ie) return e3;
  throw Error(`Expected symbolNode but got ` + String(e3) + `.`);
}
function Ve(e3) {
  if (e3 instanceof Me) return e3;
  throw Error(`Expected span<HtmlDomNode> but got ` + String(e3) + `.`);
}
var He = (e3) => e3 instanceof Me || e3 instanceof Ne || e3 instanceof Se, Ue = { "AMS-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68889, 0, 0, 0.72222], 66: [0, 0.68889, 0, 0, 0.66667], 67: [0, 0.68889, 0, 0, 0.72222], 68: [0, 0.68889, 0, 0, 0.72222], 69: [0, 0.68889, 0, 0, 0.66667], 70: [0, 0.68889, 0, 0, 0.61111], 71: [0, 0.68889, 0, 0, 0.77778], 72: [0, 0.68889, 0, 0, 0.77778], 73: [0, 0.68889, 0, 0, 0.38889], 74: [0.16667, 0.68889, 0, 0, 0.5], 75: [0, 0.68889, 0, 0, 0.77778], 76: [0, 0.68889, 0, 0, 0.66667], 77: [0, 0.68889, 0, 0, 0.94445], 78: [0, 0.68889, 0, 0, 0.72222], 79: [0.16667, 0.68889, 0, 0, 0.77778], 80: [0, 0.68889, 0, 0, 0.61111], 81: [0.16667, 0.68889, 0, 0, 0.77778], 82: [0, 0.68889, 0, 0, 0.72222], 83: [0, 0.68889, 0, 0, 0.55556], 84: [0, 0.68889, 0, 0, 0.66667], 85: [0, 0.68889, 0, 0, 0.72222], 86: [0, 0.68889, 0, 0, 0.72222], 87: [0, 0.68889, 0, 0, 1], 88: [0, 0.68889, 0, 0, 0.72222], 89: [0, 0.68889, 0, 0, 0.72222], 90: [0, 0.68889, 0, 0, 0.66667], 107: [0, 0.68889, 0, 0, 0.55556], 160: [0, 0, 0, 0, 0.25], 165: [0, 0.675, 0.025, 0, 0.75], 174: [0.15559, 0.69224, 0, 0, 0.94666], 240: [0, 0.68889, 0, 0, 0.55556], 295: [0, 0.68889, 0, 0, 0.54028], 710: [0, 0.825, 0, 0, 2.33334], 732: [0, 0.9, 0, 0, 2.33334], 770: [0, 0.825, 0, 0, 2.33334], 771: [0, 0.9, 0, 0, 2.33334], 989: [0.08167, 0.58167, 0, 0, 0.77778], 1008: [0, 0.43056, 0.04028, 0, 0.66667], 8245: [0, 0.54986, 0, 0, 0.275], 8463: [0, 0.68889, 0, 0, 0.54028], 8487: [0, 0.68889, 0, 0, 0.72222], 8498: [0, 0.68889, 0, 0, 0.55556], 8502: [0, 0.68889, 0, 0, 0.66667], 8503: [0, 0.68889, 0, 0, 0.44445], 8504: [0, 0.68889, 0, 0, 0.66667], 8513: [0, 0.68889, 0, 0, 0.63889], 8592: [-0.03598, 0.46402, 0, 0, 0.5], 8594: [-0.03598, 0.46402, 0, 0, 0.5], 8602: [-0.13313, 0.36687, 0, 0, 1], 8603: [-0.13313, 0.36687, 0, 0, 1], 8606: [0.01354, 0.52239, 0, 0, 1], 8608: [0.01354, 0.52239, 0, 0, 1], 8610: [0.01354, 0.52239, 0, 0, 1.11111], 8611: [0.01354, 0.52239, 0, 0, 1.11111], 8619: [0, 0.54986, 0, 0, 1], 8620: [0, 0.54986, 0, 0, 1], 8621: [-0.13313, 0.37788, 0, 0, 1.38889], 8622: [-0.13313, 0.36687, 0, 0, 1], 8624: [0, 0.69224, 0, 0, 0.5], 8625: [0, 0.69224, 0, 0, 0.5], 8630: [0, 0.43056, 0, 0, 1], 8631: [0, 0.43056, 0, 0, 1], 8634: [0.08198, 0.58198, 0, 0, 0.77778], 8635: [0.08198, 0.58198, 0, 0, 0.77778], 8638: [0.19444, 0.69224, 0, 0, 0.41667], 8639: [0.19444, 0.69224, 0, 0, 0.41667], 8642: [0.19444, 0.69224, 0, 0, 0.41667], 8643: [0.19444, 0.69224, 0, 0, 0.41667], 8644: [0.1808, 0.675, 0, 0, 1], 8646: [0.1808, 0.675, 0, 0, 1], 8647: [0.1808, 0.675, 0, 0, 1], 8648: [0.19444, 0.69224, 0, 0, 0.83334], 8649: [0.1808, 0.675, 0, 0, 1], 8650: [0.19444, 0.69224, 0, 0, 0.83334], 8651: [0.01354, 0.52239, 0, 0, 1], 8652: [0.01354, 0.52239, 0, 0, 1], 8653: [-0.13313, 0.36687, 0, 0, 1], 8654: [-0.13313, 0.36687, 0, 0, 1], 8655: [-0.13313, 0.36687, 0, 0, 1], 8666: [0.13667, 0.63667, 0, 0, 1], 8667: [0.13667, 0.63667, 0, 0, 1], 8669: [-0.13313, 0.37788, 0, 0, 1], 8672: [-0.064, 0.437, 0, 0, 1.334], 8674: [-0.064, 0.437, 0, 0, 1.334], 8705: [0, 0.825, 0, 0, 0.5], 8708: [0, 0.68889, 0, 0, 0.55556], 8709: [0.08167, 0.58167, 0, 0, 0.77778], 8717: [0, 0.43056, 0, 0, 0.42917], 8722: [-0.03598, 0.46402, 0, 0, 0.5], 8724: [0.08198, 0.69224, 0, 0, 0.77778], 8726: [0.08167, 0.58167, 0, 0, 0.77778], 8733: [0, 0.69224, 0, 0, 0.77778], 8736: [0, 0.69224, 0, 0, 0.72222], 8737: [0, 0.69224, 0, 0, 0.72222], 8738: [0.03517, 0.52239, 0, 0, 0.72222], 8739: [0.08167, 0.58167, 0, 0, 0.22222], 8740: [0.25142, 0.74111, 0, 0, 0.27778], 8741: [0.08167, 0.58167, 0, 0, 0.38889], 8742: [0.25142, 0.74111, 0, 0, 0.5], 8756: [0, 0.69224, 0, 0, 0.66667], 8757: [0, 0.69224, 0, 0, 0.66667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8765: [-0.13313, 0.37788, 0, 0, 0.77778], 8769: [-0.13313, 0.36687, 0, 0, 0.77778], 8770: [-0.03625, 0.46375, 0, 0, 0.77778], 8774: [0.30274, 0.79383, 0, 0, 0.77778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8778: [0.08167, 0.58167, 0, 0, 0.77778], 8782: [0.06062, 0.54986, 0, 0, 0.77778], 8783: [0.06062, 0.54986, 0, 0, 0.77778], 8785: [0.08198, 0.58198, 0, 0, 0.77778], 8786: [0.08198, 0.58198, 0, 0, 0.77778], 8787: [0.08198, 0.58198, 0, 0, 0.77778], 8790: [0, 0.69224, 0, 0, 0.77778], 8791: [0.22958, 0.72958, 0, 0, 0.77778], 8796: [0.08198, 0.91667, 0, 0, 0.77778], 8806: [0.25583, 0.75583, 0, 0, 0.77778], 8807: [0.25583, 0.75583, 0, 0, 0.77778], 8808: [0.25142, 0.75726, 0, 0, 0.77778], 8809: [0.25142, 0.75726, 0, 0, 0.77778], 8812: [0.25583, 0.75583, 0, 0, 0.5], 8814: [0.20576, 0.70576, 0, 0, 0.77778], 8815: [0.20576, 0.70576, 0, 0, 0.77778], 8816: [0.30274, 0.79383, 0, 0, 0.77778], 8817: [0.30274, 0.79383, 0, 0, 0.77778], 8818: [0.22958, 0.72958, 0, 0, 0.77778], 8819: [0.22958, 0.72958, 0, 0, 0.77778], 8822: [0.1808, 0.675, 0, 0, 0.77778], 8823: [0.1808, 0.675, 0, 0, 0.77778], 8828: [0.13667, 0.63667, 0, 0, 0.77778], 8829: [0.13667, 0.63667, 0, 0, 0.77778], 8830: [0.22958, 0.72958, 0, 0, 0.77778], 8831: [0.22958, 0.72958, 0, 0, 0.77778], 8832: [0.20576, 0.70576, 0, 0, 0.77778], 8833: [0.20576, 0.70576, 0, 0, 0.77778], 8840: [0.30274, 0.79383, 0, 0, 0.77778], 8841: [0.30274, 0.79383, 0, 0, 0.77778], 8842: [0.13597, 0.63597, 0, 0, 0.77778], 8843: [0.13597, 0.63597, 0, 0, 0.77778], 8847: [0.03517, 0.54986, 0, 0, 0.77778], 8848: [0.03517, 0.54986, 0, 0, 0.77778], 8858: [0.08198, 0.58198, 0, 0, 0.77778], 8859: [0.08198, 0.58198, 0, 0, 0.77778], 8861: [0.08198, 0.58198, 0, 0, 0.77778], 8862: [0, 0.675, 0, 0, 0.77778], 8863: [0, 0.675, 0, 0, 0.77778], 8864: [0, 0.675, 0, 0, 0.77778], 8865: [0, 0.675, 0, 0, 0.77778], 8872: [0, 0.69224, 0, 0, 0.61111], 8873: [0, 0.69224, 0, 0, 0.72222], 8874: [0, 0.69224, 0, 0, 0.88889], 8876: [0, 0.68889, 0, 0, 0.61111], 8877: [0, 0.68889, 0, 0, 0.61111], 8878: [0, 0.68889, 0, 0, 0.72222], 8879: [0, 0.68889, 0, 0, 0.72222], 8882: [0.03517, 0.54986, 0, 0, 0.77778], 8883: [0.03517, 0.54986, 0, 0, 0.77778], 8884: [0.13667, 0.63667, 0, 0, 0.77778], 8885: [0.13667, 0.63667, 0, 0, 0.77778], 8888: [0, 0.54986, 0, 0, 1.11111], 8890: [0.19444, 0.43056, 0, 0, 0.55556], 8891: [0.19444, 0.69224, 0, 0, 0.61111], 8892: [0.19444, 0.69224, 0, 0, 0.61111], 8901: [0, 0.54986, 0, 0, 0.27778], 8903: [0.08167, 0.58167, 0, 0, 0.77778], 8905: [0.08167, 0.58167, 0, 0, 0.77778], 8906: [0.08167, 0.58167, 0, 0, 0.77778], 8907: [0, 0.69224, 0, 0, 0.77778], 8908: [0, 0.69224, 0, 0, 0.77778], 8909: [-0.03598, 0.46402, 0, 0, 0.77778], 8910: [0, 0.54986, 0, 0, 0.76042], 8911: [0, 0.54986, 0, 0, 0.76042], 8912: [0.03517, 0.54986, 0, 0, 0.77778], 8913: [0.03517, 0.54986, 0, 0, 0.77778], 8914: [0, 0.54986, 0, 0, 0.66667], 8915: [0, 0.54986, 0, 0, 0.66667], 8916: [0, 0.69224, 0, 0, 0.66667], 8918: [0.0391, 0.5391, 0, 0, 0.77778], 8919: [0.0391, 0.5391, 0, 0, 0.77778], 8920: [0.03517, 0.54986, 0, 0, 1.33334], 8921: [0.03517, 0.54986, 0, 0, 1.33334], 8922: [0.38569, 0.88569, 0, 0, 0.77778], 8923: [0.38569, 0.88569, 0, 0, 0.77778], 8926: [0.13667, 0.63667, 0, 0, 0.77778], 8927: [0.13667, 0.63667, 0, 0, 0.77778], 8928: [0.30274, 0.79383, 0, 0, 0.77778], 8929: [0.30274, 0.79383, 0, 0, 0.77778], 8934: [0.23222, 0.74111, 0, 0, 0.77778], 8935: [0.23222, 0.74111, 0, 0, 0.77778], 8936: [0.23222, 0.74111, 0, 0, 0.77778], 8937: [0.23222, 0.74111, 0, 0, 0.77778], 8938: [0.20576, 0.70576, 0, 0, 0.77778], 8939: [0.20576, 0.70576, 0, 0, 0.77778], 8940: [0.30274, 0.79383, 0, 0, 0.77778], 8941: [0.30274, 0.79383, 0, 0, 0.77778], 8994: [0.19444, 0.69224, 0, 0, 0.77778], 8995: [0.19444, 0.69224, 0, 0, 0.77778], 9416: [0.15559, 0.69224, 0, 0, 0.90222], 9484: [0, 0.69224, 0, 0, 0.5], 9488: [0, 0.69224, 0, 0, 0.5], 9492: [0, 0.37788, 0, 0, 0.5], 9496: [0, 0.37788, 0, 0, 0.5], 9585: [0.19444, 0.68889, 0, 0, 0.88889], 9586: [0.19444, 0.74111, 0, 0, 0.88889], 9632: [0, 0.675, 0, 0, 0.77778], 9633: [0, 0.675, 0, 0, 0.77778], 9650: [0, 0.54986, 0, 0, 0.72222], 9651: [0, 0.54986, 0, 0, 0.72222], 9654: [0.03517, 0.54986, 0, 0, 0.77778], 9660: [0, 0.54986, 0, 0, 0.72222], 9661: [0, 0.54986, 0, 0, 0.72222], 9664: [0.03517, 0.54986, 0, 0, 0.77778], 9674: [0.11111, 0.69224, 0, 0, 0.66667], 9733: [0.19444, 0.69224, 0, 0, 0.94445], 10003: [0, 0.69224, 0, 0, 0.83334], 10016: [0, 0.69224, 0, 0, 0.83334], 10731: [0.11111, 0.69224, 0, 0, 0.66667], 10846: [0.19444, 0.75583, 0, 0, 0.61111], 10877: [0.13667, 0.63667, 0, 0, 0.77778], 10878: [0.13667, 0.63667, 0, 0, 0.77778], 10885: [0.25583, 0.75583, 0, 0, 0.77778], 10886: [0.25583, 0.75583, 0, 0, 0.77778], 10887: [0.13597, 0.63597, 0, 0, 0.77778], 10888: [0.13597, 0.63597, 0, 0, 0.77778], 10889: [0.26167, 0.75726, 0, 0, 0.77778], 10890: [0.26167, 0.75726, 0, 0, 0.77778], 10891: [0.48256, 0.98256, 0, 0, 0.77778], 10892: [0.48256, 0.98256, 0, 0, 0.77778], 10901: [0.13667, 0.63667, 0, 0, 0.77778], 10902: [0.13667, 0.63667, 0, 0, 0.77778], 10933: [0.25142, 0.75726, 0, 0, 0.77778], 10934: [0.25142, 0.75726, 0, 0, 0.77778], 10935: [0.26167, 0.75726, 0, 0, 0.77778], 10936: [0.26167, 0.75726, 0, 0, 0.77778], 10937: [0.26167, 0.75726, 0, 0, 0.77778], 10938: [0.26167, 0.75726, 0, 0, 0.77778], 10949: [0.25583, 0.75583, 0, 0, 0.77778], 10950: [0.25583, 0.75583, 0, 0, 0.77778], 10955: [0.28481, 0.79383, 0, 0, 0.77778], 10956: [0.28481, 0.79383, 0, 0, 0.77778], 57350: [0.08167, 0.58167, 0, 0, 0.22222], 57351: [0.08167, 0.58167, 0, 0, 0.38889], 57352: [0.08167, 0.58167, 0, 0, 0.77778], 57353: [0, 0.43056, 0.04028, 0, 0.66667], 57356: [0.25142, 0.75726, 0, 0, 0.77778], 57357: [0.25142, 0.75726, 0, 0, 0.77778], 57358: [0.41951, 0.91951, 0, 0, 0.77778], 57359: [0.30274, 0.79383, 0, 0, 0.77778], 57360: [0.30274, 0.79383, 0, 0, 0.77778], 57361: [0.41951, 0.91951, 0, 0, 0.77778], 57366: [0.25142, 0.75726, 0, 0, 0.77778], 57367: [0.25142, 0.75726, 0, 0, 0.77778], 57368: [0.25142, 0.75726, 0, 0, 0.77778], 57369: [0.25142, 0.75726, 0, 0, 0.77778], 57370: [0.13597, 0.63597, 0, 0, 0.77778], 57371: [0.13597, 0.63597, 0, 0, 0.77778] }, "Caligraphic-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.68333, 0, 0.19445, 0.79847], 66: [0, 0.68333, 0.03041, 0.13889, 0.65681], 67: [0, 0.68333, 0.05834, 0.13889, 0.52653], 68: [0, 0.68333, 0.02778, 0.08334, 0.77139], 69: [0, 0.68333, 0.08944, 0.11111, 0.52778], 70: [0, 0.68333, 0.09931, 0.11111, 0.71875], 71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487], 72: [0, 0.68333, 965e-5, 0.11111, 0.84452], 73: [0, 0.68333, 0.07382, 0, 0.54452], 74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778], 75: [0, 0.68333, 0.01445, 0.05556, 0.76195], 76: [0, 0.68333, 0, 0.13889, 0.68972], 77: [0, 0.68333, 0, 0.13889, 1.2009], 78: [0, 0.68333, 0.14736, 0.08334, 0.82049], 79: [0, 0.68333, 0.02778, 0.11111, 0.79611], 80: [0, 0.68333, 0.08222, 0.08334, 0.69556], 81: [0.09722, 0.68333, 0, 0.11111, 0.81667], 82: [0, 0.68333, 0, 0.08334, 0.8475], 83: [0, 0.68333, 0.075, 0.13889, 0.60556], 84: [0, 0.68333, 0.25417, 0, 0.54464], 85: [0, 0.68333, 0.09931, 0.08334, 0.62583], 86: [0, 0.68333, 0.08222, 0, 0.61278], 87: [0, 0.68333, 0.08222, 0.08334, 0.98778], 88: [0, 0.68333, 0.14643, 0.13889, 0.7133], 89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834], 90: [0, 0.68333, 0.07944, 0.13889, 0.72473], 160: [0, 0, 0, 0, 0.25] }, "Fraktur-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69141, 0, 0, 0.29574], 34: [0, 0.69141, 0, 0, 0.21471], 38: [0, 0.69141, 0, 0, 0.73786], 39: [0, 0.69141, 0, 0, 0.21201], 40: [0.24982, 0.74947, 0, 0, 0.38865], 41: [0.24982, 0.74947, 0, 0, 0.38865], 42: [0, 0.62119, 0, 0, 0.27764], 43: [0.08319, 0.58283, 0, 0, 0.75623], 44: [0, 0.10803, 0, 0, 0.27764], 45: [0.08319, 0.58283, 0, 0, 0.75623], 46: [0, 0.10803, 0, 0, 0.27764], 47: [0.24982, 0.74947, 0, 0, 0.50181], 48: [0, 0.47534, 0, 0, 0.50181], 49: [0, 0.47534, 0, 0, 0.50181], 50: [0, 0.47534, 0, 0, 0.50181], 51: [0.18906, 0.47534, 0, 0, 0.50181], 52: [0.18906, 0.47534, 0, 0, 0.50181], 53: [0.18906, 0.47534, 0, 0, 0.50181], 54: [0, 0.69141, 0, 0, 0.50181], 55: [0.18906, 0.47534, 0, 0, 0.50181], 56: [0, 0.69141, 0, 0, 0.50181], 57: [0.18906, 0.47534, 0, 0, 0.50181], 58: [0, 0.47534, 0, 0, 0.21606], 59: [0.12604, 0.47534, 0, 0, 0.21606], 61: [-0.13099, 0.36866, 0, 0, 0.75623], 63: [0, 0.69141, 0, 0, 0.36245], 65: [0, 0.69141, 0, 0, 0.7176], 66: [0, 0.69141, 0, 0, 0.88397], 67: [0, 0.69141, 0, 0, 0.61254], 68: [0, 0.69141, 0, 0, 0.83158], 69: [0, 0.69141, 0, 0, 0.66278], 70: [0.12604, 0.69141, 0, 0, 0.61119], 71: [0, 0.69141, 0, 0, 0.78539], 72: [0.06302, 0.69141, 0, 0, 0.7203], 73: [0, 0.69141, 0, 0, 0.55448], 74: [0.12604, 0.69141, 0, 0, 0.55231], 75: [0, 0.69141, 0, 0, 0.66845], 76: [0, 0.69141, 0, 0, 0.66602], 77: [0, 0.69141, 0, 0, 1.04953], 78: [0, 0.69141, 0, 0, 0.83212], 79: [0, 0.69141, 0, 0, 0.82699], 80: [0.18906, 0.69141, 0, 0, 0.82753], 81: [0.03781, 0.69141, 0, 0, 0.82699], 82: [0, 0.69141, 0, 0, 0.82807], 83: [0, 0.69141, 0, 0, 0.82861], 84: [0, 0.69141, 0, 0, 0.66899], 85: [0, 0.69141, 0, 0, 0.64576], 86: [0, 0.69141, 0, 0, 0.83131], 87: [0, 0.69141, 0, 0, 1.04602], 88: [0, 0.69141, 0, 0, 0.71922], 89: [0.18906, 0.69141, 0, 0, 0.83293], 90: [0.12604, 0.69141, 0, 0, 0.60201], 91: [0.24982, 0.74947, 0, 0, 0.27764], 93: [0.24982, 0.74947, 0, 0, 0.27764], 94: [0, 0.69141, 0, 0, 0.49965], 97: [0, 0.47534, 0, 0, 0.50046], 98: [0, 0.69141, 0, 0, 0.51315], 99: [0, 0.47534, 0, 0, 0.38946], 100: [0, 0.62119, 0, 0, 0.49857], 101: [0, 0.47534, 0, 0, 0.40053], 102: [0.18906, 0.69141, 0, 0, 0.32626], 103: [0.18906, 0.47534, 0, 0, 0.5037], 104: [0.18906, 0.69141, 0, 0, 0.52126], 105: [0, 0.69141, 0, 0, 0.27899], 106: [0, 0.69141, 0, 0, 0.28088], 107: [0, 0.69141, 0, 0, 0.38946], 108: [0, 0.69141, 0, 0, 0.27953], 109: [0, 0.47534, 0, 0, 0.76676], 110: [0, 0.47534, 0, 0, 0.52666], 111: [0, 0.47534, 0, 0, 0.48885], 112: [0.18906, 0.52396, 0, 0, 0.50046], 113: [0.18906, 0.47534, 0, 0, 0.48912], 114: [0, 0.47534, 0, 0, 0.38919], 115: [0, 0.47534, 0, 0, 0.44266], 116: [0, 0.62119, 0, 0, 0.33301], 117: [0, 0.47534, 0, 0, 0.5172], 118: [0, 0.52396, 0, 0, 0.5118], 119: [0, 0.52396, 0, 0, 0.77351], 120: [0.18906, 0.47534, 0, 0, 0.38865], 121: [0.18906, 0.47534, 0, 0, 0.49884], 122: [0.18906, 0.47534, 0, 0, 0.39054], 160: [0, 0, 0, 0, 0.25], 8216: [0, 0.69141, 0, 0, 0.21471], 8217: [0, 0.69141, 0, 0, 0.21471], 58112: [0, 0.62119, 0, 0, 0.49749], 58113: [0, 0.62119, 0, 0, 0.4983], 58114: [0.18906, 0.69141, 0, 0, 0.33328], 58115: [0.18906, 0.69141, 0, 0, 0.32923], 58116: [0.18906, 0.47534, 0, 0, 0.50343], 58117: [0, 0.69141, 0, 0, 0.33301], 58118: [0, 0.62119, 0, 0, 0.33409], 58119: [0, 0.47534, 0, 0, 0.50073] }, "Main-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.35], 34: [0, 0.69444, 0, 0, 0.60278], 35: [0.19444, 0.69444, 0, 0, 0.95833], 36: [0.05556, 0.75, 0, 0, 0.575], 37: [0.05556, 0.75, 0, 0, 0.95833], 38: [0, 0.69444, 0, 0, 0.89444], 39: [0, 0.69444, 0, 0, 0.31944], 40: [0.25, 0.75, 0, 0, 0.44722], 41: [0.25, 0.75, 0, 0, 0.44722], 42: [0, 0.75, 0, 0, 0.575], 43: [0.13333, 0.63333, 0, 0, 0.89444], 44: [0.19444, 0.15556, 0, 0, 0.31944], 45: [0, 0.44444, 0, 0, 0.38333], 46: [0, 0.15556, 0, 0, 0.31944], 47: [0.25, 0.75, 0, 0, 0.575], 48: [0, 0.64444, 0, 0, 0.575], 49: [0, 0.64444, 0, 0, 0.575], 50: [0, 0.64444, 0, 0, 0.575], 51: [0, 0.64444, 0, 0, 0.575], 52: [0, 0.64444, 0, 0, 0.575], 53: [0, 0.64444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0, 0.64444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0, 0.64444, 0, 0, 0.575], 58: [0, 0.44444, 0, 0, 0.31944], 59: [0.19444, 0.44444, 0, 0, 0.31944], 60: [0.08556, 0.58556, 0, 0, 0.89444], 61: [-0.10889, 0.39111, 0, 0, 0.89444], 62: [0.08556, 0.58556, 0, 0, 0.89444], 63: [0, 0.69444, 0, 0, 0.54305], 64: [0, 0.69444, 0, 0, 0.89444], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0, 0, 0.81805], 67: [0, 0.68611, 0, 0, 0.83055], 68: [0, 0.68611, 0, 0, 0.88194], 69: [0, 0.68611, 0, 0, 0.75555], 70: [0, 0.68611, 0, 0, 0.72361], 71: [0, 0.68611, 0, 0, 0.90416], 72: [0, 0.68611, 0, 0, 0.9], 73: [0, 0.68611, 0, 0, 0.43611], 74: [0, 0.68611, 0, 0, 0.59444], 75: [0, 0.68611, 0, 0, 0.90138], 76: [0, 0.68611, 0, 0, 0.69166], 77: [0, 0.68611, 0, 0, 1.09166], 78: [0, 0.68611, 0, 0, 0.9], 79: [0, 0.68611, 0, 0, 0.86388], 80: [0, 0.68611, 0, 0, 0.78611], 81: [0.19444, 0.68611, 0, 0, 0.86388], 82: [0, 0.68611, 0, 0, 0.8625], 83: [0, 0.68611, 0, 0, 0.63889], 84: [0, 0.68611, 0, 0, 0.8], 85: [0, 0.68611, 0, 0, 0.88472], 86: [0, 0.68611, 0.01597, 0, 0.86944], 87: [0, 0.68611, 0.01597, 0, 1.18888], 88: [0, 0.68611, 0, 0, 0.86944], 89: [0, 0.68611, 0.02875, 0, 0.86944], 90: [0, 0.68611, 0, 0, 0.70277], 91: [0.25, 0.75, 0, 0, 0.31944], 92: [0.25, 0.75, 0, 0, 0.575], 93: [0.25, 0.75, 0, 0, 0.31944], 94: [0, 0.69444, 0, 0, 0.575], 95: [0.31, 0.13444, 0.03194, 0, 0.575], 97: [0, 0.44444, 0, 0, 0.55902], 98: [0, 0.69444, 0, 0, 0.63889], 99: [0, 0.44444, 0, 0, 0.51111], 100: [0, 0.69444, 0, 0, 0.63889], 101: [0, 0.44444, 0, 0, 0.52708], 102: [0, 0.69444, 0.10903, 0, 0.35139], 103: [0.19444, 0.44444, 0.01597, 0, 0.575], 104: [0, 0.69444, 0, 0, 0.63889], 105: [0, 0.69444, 0, 0, 0.31944], 106: [0.19444, 0.69444, 0, 0, 0.35139], 107: [0, 0.69444, 0, 0, 0.60694], 108: [0, 0.69444, 0, 0, 0.31944], 109: [0, 0.44444, 0, 0, 0.95833], 110: [0, 0.44444, 0, 0, 0.63889], 111: [0, 0.44444, 0, 0, 0.575], 112: [0.19444, 0.44444, 0, 0, 0.63889], 113: [0.19444, 0.44444, 0, 0, 0.60694], 114: [0, 0.44444, 0, 0, 0.47361], 115: [0, 0.44444, 0, 0, 0.45361], 116: [0, 0.63492, 0, 0, 0.44722], 117: [0, 0.44444, 0, 0, 0.63889], 118: [0, 0.44444, 0.01597, 0, 0.60694], 119: [0, 0.44444, 0.01597, 0, 0.83055], 120: [0, 0.44444, 0, 0, 0.60694], 121: [0.19444, 0.44444, 0.01597, 0, 0.60694], 122: [0, 0.44444, 0, 0, 0.51111], 123: [0.25, 0.75, 0, 0, 0.575], 124: [0.25, 0.75, 0, 0, 0.31944], 125: [0.25, 0.75, 0, 0, 0.575], 126: [0.35, 0.34444, 0, 0, 0.575], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.86853], 168: [0, 0.69444, 0, 0, 0.575], 172: [0, 0.44444, 0, 0, 0.76666], 176: [0, 0.69444, 0, 0, 0.86944], 177: [0.13333, 0.63333, 0, 0, 0.89444], 184: [0.17014, 0, 0, 0, 0.51111], 198: [0, 0.68611, 0, 0, 1.04166], 215: [0.13333, 0.63333, 0, 0, 0.89444], 216: [0.04861, 0.73472, 0, 0, 0.89444], 223: [0, 0.69444, 0, 0, 0.59722], 230: [0, 0.44444, 0, 0, 0.83055], 247: [0.13333, 0.63333, 0, 0, 0.89444], 248: [0.09722, 0.54167, 0, 0, 0.575], 305: [0, 0.44444, 0, 0, 0.31944], 338: [0, 0.68611, 0, 0, 1.16944], 339: [0, 0.44444, 0, 0, 0.89444], 567: [0.19444, 0.44444, 0, 0, 0.35139], 710: [0, 0.69444, 0, 0, 0.575], 711: [0, 0.63194, 0, 0, 0.575], 713: [0, 0.59611, 0, 0, 0.575], 714: [0, 0.69444, 0, 0, 0.575], 715: [0, 0.69444, 0, 0, 0.575], 728: [0, 0.69444, 0, 0, 0.575], 729: [0, 0.69444, 0, 0, 0.31944], 730: [0, 0.69444, 0, 0, 0.86944], 732: [0, 0.69444, 0, 0, 0.575], 733: [0, 0.69444, 0, 0, 0.575], 915: [0, 0.68611, 0, 0, 0.69166], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0, 0, 0.89444], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0, 0, 0.76666], 928: [0, 0.68611, 0, 0, 0.9], 931: [0, 0.68611, 0, 0, 0.83055], 933: [0, 0.68611, 0, 0, 0.89444], 934: [0, 0.68611, 0, 0, 0.83055], 936: [0, 0.68611, 0, 0, 0.89444], 937: [0, 0.68611, 0, 0, 0.83055], 8211: [0, 0.44444, 0.03194, 0, 0.575], 8212: [0, 0.44444, 0.03194, 0, 1.14999], 8216: [0, 0.69444, 0, 0, 0.31944], 8217: [0, 0.69444, 0, 0, 0.31944], 8220: [0, 0.69444, 0, 0, 0.60278], 8221: [0, 0.69444, 0, 0, 0.60278], 8224: [0.19444, 0.69444, 0, 0, 0.51111], 8225: [0.19444, 0.69444, 0, 0, 0.51111], 8242: [0, 0.55556, 0, 0, 0.34444], 8407: [0, 0.72444, 0.15486, 0, 0.575], 8463: [0, 0.69444, 0, 0, 0.66759], 8465: [0, 0.69444, 0, 0, 0.83055], 8467: [0, 0.69444, 0, 0, 0.47361], 8472: [0.19444, 0.44444, 0, 0, 0.74027], 8476: [0, 0.69444, 0, 0, 0.83055], 8501: [0, 0.69444, 0, 0, 0.70277], 8592: [-0.10889, 0.39111, 0, 0, 1.14999], 8593: [0.19444, 0.69444, 0, 0, 0.575], 8594: [-0.10889, 0.39111, 0, 0, 1.14999], 8595: [0.19444, 0.69444, 0, 0, 0.575], 8596: [-0.10889, 0.39111, 0, 0, 1.14999], 8597: [0.25, 0.75, 0, 0, 0.575], 8598: [0.19444, 0.69444, 0, 0, 1.14999], 8599: [0.19444, 0.69444, 0, 0, 1.14999], 8600: [0.19444, 0.69444, 0, 0, 1.14999], 8601: [0.19444, 0.69444, 0, 0, 1.14999], 8636: [-0.10889, 0.39111, 0, 0, 1.14999], 8637: [-0.10889, 0.39111, 0, 0, 1.14999], 8640: [-0.10889, 0.39111, 0, 0, 1.14999], 8641: [-0.10889, 0.39111, 0, 0, 1.14999], 8656: [-0.10889, 0.39111, 0, 0, 1.14999], 8657: [0.19444, 0.69444, 0, 0, 0.70277], 8658: [-0.10889, 0.39111, 0, 0, 1.14999], 8659: [0.19444, 0.69444, 0, 0, 0.70277], 8660: [-0.10889, 0.39111, 0, 0, 1.14999], 8661: [0.25, 0.75, 0, 0, 0.70277], 8704: [0, 0.69444, 0, 0, 0.63889], 8706: [0, 0.69444, 0.06389, 0, 0.62847], 8707: [0, 0.69444, 0, 0, 0.63889], 8709: [0.05556, 0.75, 0, 0, 0.575], 8711: [0, 0.68611, 0, 0, 0.95833], 8712: [0.08556, 0.58556, 0, 0, 0.76666], 8715: [0.08556, 0.58556, 0, 0, 0.76666], 8722: [0.13333, 0.63333, 0, 0, 0.89444], 8723: [0.13333, 0.63333, 0, 0, 0.89444], 8725: [0.25, 0.75, 0, 0, 0.575], 8726: [0.25, 0.75, 0, 0, 0.575], 8727: [-0.02778, 0.47222, 0, 0, 0.575], 8728: [-0.02639, 0.47361, 0, 0, 0.575], 8729: [-0.02639, 0.47361, 0, 0, 0.575], 8730: [0.18, 0.82, 0, 0, 0.95833], 8733: [0, 0.44444, 0, 0, 0.89444], 8734: [0, 0.44444, 0, 0, 1.14999], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.31944], 8741: [0.25, 0.75, 0, 0, 0.575], 8743: [0, 0.55556, 0, 0, 0.76666], 8744: [0, 0.55556, 0, 0, 0.76666], 8745: [0, 0.55556, 0, 0, 0.76666], 8746: [0, 0.55556, 0, 0, 0.76666], 8747: [0.19444, 0.69444, 0.12778, 0, 0.56875], 8764: [-0.10889, 0.39111, 0, 0, 0.89444], 8768: [0.19444, 0.69444, 0, 0, 0.31944], 8771: [222e-5, 0.50222, 0, 0, 0.89444], 8773: [0.027, 0.638, 0, 0, 0.894], 8776: [0.02444, 0.52444, 0, 0, 0.89444], 8781: [222e-5, 0.50222, 0, 0, 0.89444], 8801: [222e-5, 0.50222, 0, 0, 0.89444], 8804: [0.19667, 0.69667, 0, 0, 0.89444], 8805: [0.19667, 0.69667, 0, 0, 0.89444], 8810: [0.08556, 0.58556, 0, 0, 1.14999], 8811: [0.08556, 0.58556, 0, 0, 1.14999], 8826: [0.08556, 0.58556, 0, 0, 0.89444], 8827: [0.08556, 0.58556, 0, 0, 0.89444], 8834: [0.08556, 0.58556, 0, 0, 0.89444], 8835: [0.08556, 0.58556, 0, 0, 0.89444], 8838: [0.19667, 0.69667, 0, 0, 0.89444], 8839: [0.19667, 0.69667, 0, 0, 0.89444], 8846: [0, 0.55556, 0, 0, 0.76666], 8849: [0.19667, 0.69667, 0, 0, 0.89444], 8850: [0.19667, 0.69667, 0, 0, 0.89444], 8851: [0, 0.55556, 0, 0, 0.76666], 8852: [0, 0.55556, 0, 0, 0.76666], 8853: [0.13333, 0.63333, 0, 0, 0.89444], 8854: [0.13333, 0.63333, 0, 0, 0.89444], 8855: [0.13333, 0.63333, 0, 0, 0.89444], 8856: [0.13333, 0.63333, 0, 0, 0.89444], 8857: [0.13333, 0.63333, 0, 0, 0.89444], 8866: [0, 0.69444, 0, 0, 0.70277], 8867: [0, 0.69444, 0, 0, 0.70277], 8868: [0, 0.69444, 0, 0, 0.89444], 8869: [0, 0.69444, 0, 0, 0.89444], 8900: [-0.02639, 0.47361, 0, 0, 0.575], 8901: [-0.02639, 0.47361, 0, 0, 0.31944], 8902: [-0.02778, 0.47222, 0, 0, 0.575], 8968: [0.25, 0.75, 0, 0, 0.51111], 8969: [0.25, 0.75, 0, 0, 0.51111], 8970: [0.25, 0.75, 0, 0, 0.51111], 8971: [0.25, 0.75, 0, 0, 0.51111], 8994: [-0.13889, 0.36111, 0, 0, 1.14999], 8995: [-0.13889, 0.36111, 0, 0, 1.14999], 9651: [0.19444, 0.69444, 0, 0, 1.02222], 9657: [-0.02778, 0.47222, 0, 0, 0.575], 9661: [0.19444, 0.69444, 0, 0, 1.02222], 9667: [-0.02778, 0.47222, 0, 0, 0.575], 9711: [0.19444, 0.69444, 0, 0, 1.14999], 9824: [0.12963, 0.69444, 0, 0, 0.89444], 9825: [0.12963, 0.69444, 0, 0, 0.89444], 9826: [0.12963, 0.69444, 0, 0, 0.89444], 9827: [0.12963, 0.69444, 0, 0, 0.89444], 9837: [0, 0.75, 0, 0, 0.44722], 9838: [0.19444, 0.69444, 0, 0, 0.44722], 9839: [0.19444, 0.69444, 0, 0, 0.44722], 10216: [0.25, 0.75, 0, 0, 0.44722], 10217: [0.25, 0.75, 0, 0, 0.44722], 10815: [0, 0.68611, 0, 0, 0.9], 10927: [0.19667, 0.69667, 0, 0, 0.89444], 10928: [0.19667, 0.69667, 0, 0, 0.89444], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Main-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.11417, 0, 0.38611], 34: [0, 0.69444, 0.07939, 0, 0.62055], 35: [0.19444, 0.69444, 0.06833, 0, 0.94444], 37: [0.05556, 0.75, 0.12861, 0, 0.94444], 38: [0, 0.69444, 0.08528, 0, 0.88555], 39: [0, 0.69444, 0.12945, 0, 0.35555], 40: [0.25, 0.75, 0.15806, 0, 0.47333], 41: [0.25, 0.75, 0.03306, 0, 0.47333], 42: [0, 0.75, 0.14333, 0, 0.59111], 43: [0.10333, 0.60333, 0.03306, 0, 0.88555], 44: [0.19444, 0.14722, 0, 0, 0.35555], 45: [0, 0.44444, 0.02611, 0, 0.41444], 46: [0, 0.14722, 0, 0, 0.35555], 47: [0.25, 0.75, 0.15806, 0, 0.59111], 48: [0, 0.64444, 0.13167, 0, 0.59111], 49: [0, 0.64444, 0.13167, 0, 0.59111], 50: [0, 0.64444, 0.13167, 0, 0.59111], 51: [0, 0.64444, 0.13167, 0, 0.59111], 52: [0.19444, 0.64444, 0.13167, 0, 0.59111], 53: [0, 0.64444, 0.13167, 0, 0.59111], 54: [0, 0.64444, 0.13167, 0, 0.59111], 55: [0.19444, 0.64444, 0.13167, 0, 0.59111], 56: [0, 0.64444, 0.13167, 0, 0.59111], 57: [0, 0.64444, 0.13167, 0, 0.59111], 58: [0, 0.44444, 0.06695, 0, 0.35555], 59: [0.19444, 0.44444, 0.06695, 0, 0.35555], 61: [-0.10889, 0.39111, 0.06833, 0, 0.88555], 63: [0, 0.69444, 0.11472, 0, 0.59111], 64: [0, 0.69444, 0.09208, 0, 0.88555], 65: [0, 0.68611, 0, 0, 0.86555], 66: [0, 0.68611, 0.0992, 0, 0.81666], 67: [0, 0.68611, 0.14208, 0, 0.82666], 68: [0, 0.68611, 0.09062, 0, 0.87555], 69: [0, 0.68611, 0.11431, 0, 0.75666], 70: [0, 0.68611, 0.12903, 0, 0.72722], 71: [0, 0.68611, 0.07347, 0, 0.89527], 72: [0, 0.68611, 0.17208, 0, 0.8961], 73: [0, 0.68611, 0.15681, 0, 0.47166], 74: [0, 0.68611, 0.145, 0, 0.61055], 75: [0, 0.68611, 0.14208, 0, 0.89499], 76: [0, 0.68611, 0, 0, 0.69777], 77: [0, 0.68611, 0.17208, 0, 1.07277], 78: [0, 0.68611, 0.17208, 0, 0.8961], 79: [0, 0.68611, 0.09062, 0, 0.85499], 80: [0, 0.68611, 0.0992, 0, 0.78721], 81: [0.19444, 0.68611, 0.09062, 0, 0.85499], 82: [0, 0.68611, 0.02559, 0, 0.85944], 83: [0, 0.68611, 0.11264, 0, 0.64999], 84: [0, 0.68611, 0.12903, 0, 0.7961], 85: [0, 0.68611, 0.17208, 0, 0.88083], 86: [0, 0.68611, 0.18625, 0, 0.86555], 87: [0, 0.68611, 0.18625, 0, 1.15999], 88: [0, 0.68611, 0.15681, 0, 0.86555], 89: [0, 0.68611, 0.19803, 0, 0.86555], 90: [0, 0.68611, 0.14208, 0, 0.70888], 91: [0.25, 0.75, 0.1875, 0, 0.35611], 93: [0.25, 0.75, 0.09972, 0, 0.35611], 94: [0, 0.69444, 0.06709, 0, 0.59111], 95: [0.31, 0.13444, 0.09811, 0, 0.59111], 97: [0, 0.44444, 0.09426, 0, 0.59111], 98: [0, 0.69444, 0.07861, 0, 0.53222], 99: [0, 0.44444, 0.05222, 0, 0.53222], 100: [0, 0.69444, 0.10861, 0, 0.59111], 101: [0, 0.44444, 0.085, 0, 0.53222], 102: [0.19444, 0.69444, 0.21778, 0, 0.4], 103: [0.19444, 0.44444, 0.105, 0, 0.53222], 104: [0, 0.69444, 0.09426, 0, 0.59111], 105: [0, 0.69326, 0.11387, 0, 0.35555], 106: [0.19444, 0.69326, 0.1672, 0, 0.35555], 107: [0, 0.69444, 0.11111, 0, 0.53222], 108: [0, 0.69444, 0.10861, 0, 0.29666], 109: [0, 0.44444, 0.09426, 0, 0.94444], 110: [0, 0.44444, 0.09426, 0, 0.64999], 111: [0, 0.44444, 0.07861, 0, 0.59111], 112: [0.19444, 0.44444, 0.07861, 0, 0.59111], 113: [0.19444, 0.44444, 0.105, 0, 0.53222], 114: [0, 0.44444, 0.11111, 0, 0.50167], 115: [0, 0.44444, 0.08167, 0, 0.48694], 116: [0, 0.63492, 0.09639, 0, 0.385], 117: [0, 0.44444, 0.09426, 0, 0.62055], 118: [0, 0.44444, 0.11111, 0, 0.53222], 119: [0, 0.44444, 0.11111, 0, 0.76777], 120: [0, 0.44444, 0.12583, 0, 0.56055], 121: [0.19444, 0.44444, 0.105, 0, 0.56166], 122: [0, 0.44444, 0.13889, 0, 0.49055], 126: [0.35, 0.34444, 0.11472, 0, 0.59111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0.11473, 0, 0.59111], 176: [0, 0.69444, 0, 0, 0.94888], 184: [0.17014, 0, 0, 0, 0.53222], 198: [0, 0.68611, 0.11431, 0, 1.02277], 216: [0.04861, 0.73472, 0.09062, 0, 0.88555], 223: [0.19444, 0.69444, 0.09736, 0, 0.665], 230: [0, 0.44444, 0.085, 0, 0.82666], 248: [0.09722, 0.54167, 0.09458, 0, 0.59111], 305: [0, 0.44444, 0.09426, 0, 0.35555], 338: [0, 0.68611, 0.11431, 0, 1.14054], 339: [0, 0.44444, 0.085, 0, 0.82666], 567: [0.19444, 0.44444, 0.04611, 0, 0.385], 710: [0, 0.69444, 0.06709, 0, 0.59111], 711: [0, 0.63194, 0.08271, 0, 0.59111], 713: [0, 0.59444, 0.10444, 0, 0.59111], 714: [0, 0.69444, 0.08528, 0, 0.59111], 715: [0, 0.69444, 0, 0, 0.59111], 728: [0, 0.69444, 0.10333, 0, 0.59111], 729: [0, 0.69444, 0.12945, 0, 0.35555], 730: [0, 0.69444, 0, 0, 0.94888], 732: [0, 0.69444, 0.11472, 0, 0.59111], 733: [0, 0.69444, 0.11472, 0, 0.59111], 915: [0, 0.68611, 0.12903, 0, 0.69777], 916: [0, 0.68611, 0, 0, 0.94444], 920: [0, 0.68611, 0.09062, 0, 0.88555], 923: [0, 0.68611, 0, 0, 0.80666], 926: [0, 0.68611, 0.15092, 0, 0.76777], 928: [0, 0.68611, 0.17208, 0, 0.8961], 931: [0, 0.68611, 0.11431, 0, 0.82666], 933: [0, 0.68611, 0.10778, 0, 0.88555], 934: [0, 0.68611, 0.05632, 0, 0.82666], 936: [0, 0.68611, 0.10778, 0, 0.88555], 937: [0, 0.68611, 0.0992, 0, 0.82666], 8211: [0, 0.44444, 0.09811, 0, 0.59111], 8212: [0, 0.44444, 0.09811, 0, 1.18221], 8216: [0, 0.69444, 0.12945, 0, 0.35555], 8217: [0, 0.69444, 0.12945, 0, 0.35555], 8220: [0, 0.69444, 0.16772, 0, 0.62055], 8221: [0, 0.69444, 0.07939, 0, 0.62055] }, "Main-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.12417, 0, 0.30667], 34: [0, 0.69444, 0.06961, 0, 0.51444], 35: [0.19444, 0.69444, 0.06616, 0, 0.81777], 37: [0.05556, 0.75, 0.13639, 0, 0.81777], 38: [0, 0.69444, 0.09694, 0, 0.76666], 39: [0, 0.69444, 0.12417, 0, 0.30667], 40: [0.25, 0.75, 0.16194, 0, 0.40889], 41: [0.25, 0.75, 0.03694, 0, 0.40889], 42: [0, 0.75, 0.14917, 0, 0.51111], 43: [0.05667, 0.56167, 0.03694, 0, 0.76666], 44: [0.19444, 0.10556, 0, 0, 0.30667], 45: [0, 0.43056, 0.02826, 0, 0.35778], 46: [0, 0.10556, 0, 0, 0.30667], 47: [0.25, 0.75, 0.16194, 0, 0.51111], 48: [0, 0.64444, 0.13556, 0, 0.51111], 49: [0, 0.64444, 0.13556, 0, 0.51111], 50: [0, 0.64444, 0.13556, 0, 0.51111], 51: [0, 0.64444, 0.13556, 0, 0.51111], 52: [0.19444, 0.64444, 0.13556, 0, 0.51111], 53: [0, 0.64444, 0.13556, 0, 0.51111], 54: [0, 0.64444, 0.13556, 0, 0.51111], 55: [0.19444, 0.64444, 0.13556, 0, 0.51111], 56: [0, 0.64444, 0.13556, 0, 0.51111], 57: [0, 0.64444, 0.13556, 0, 0.51111], 58: [0, 0.43056, 0.0582, 0, 0.30667], 59: [0.19444, 0.43056, 0.0582, 0, 0.30667], 61: [-0.13313, 0.36687, 0.06616, 0, 0.76666], 63: [0, 0.69444, 0.1225, 0, 0.51111], 64: [0, 0.69444, 0.09597, 0, 0.76666], 65: [0, 0.68333, 0, 0, 0.74333], 66: [0, 0.68333, 0.10257, 0, 0.70389], 67: [0, 0.68333, 0.14528, 0, 0.71555], 68: [0, 0.68333, 0.09403, 0, 0.755], 69: [0, 0.68333, 0.12028, 0, 0.67833], 70: [0, 0.68333, 0.13305, 0, 0.65277], 71: [0, 0.68333, 0.08722, 0, 0.77361], 72: [0, 0.68333, 0.16389, 0, 0.74333], 73: [0, 0.68333, 0.15806, 0, 0.38555], 74: [0, 0.68333, 0.14028, 0, 0.525], 75: [0, 0.68333, 0.14528, 0, 0.76888], 76: [0, 0.68333, 0, 0, 0.62722], 77: [0, 0.68333, 0.16389, 0, 0.89666], 78: [0, 0.68333, 0.16389, 0, 0.74333], 79: [0, 0.68333, 0.09403, 0, 0.76666], 80: [0, 0.68333, 0.10257, 0, 0.67833], 81: [0.19444, 0.68333, 0.09403, 0, 0.76666], 82: [0, 0.68333, 0.03868, 0, 0.72944], 83: [0, 0.68333, 0.11972, 0, 0.56222], 84: [0, 0.68333, 0.13305, 0, 0.71555], 85: [0, 0.68333, 0.16389, 0, 0.74333], 86: [0, 0.68333, 0.18361, 0, 0.74333], 87: [0, 0.68333, 0.18361, 0, 0.99888], 88: [0, 0.68333, 0.15806, 0, 0.74333], 89: [0, 0.68333, 0.19383, 0, 0.74333], 90: [0, 0.68333, 0.14528, 0, 0.61333], 91: [0.25, 0.75, 0.1875, 0, 0.30667], 93: [0.25, 0.75, 0.10528, 0, 0.30667], 94: [0, 0.69444, 0.06646, 0, 0.51111], 95: [0.31, 0.12056, 0.09208, 0, 0.51111], 97: [0, 0.43056, 0.07671, 0, 0.51111], 98: [0, 0.69444, 0.06312, 0, 0.46], 99: [0, 0.43056, 0.05653, 0, 0.46], 100: [0, 0.69444, 0.10333, 0, 0.51111], 101: [0, 0.43056, 0.07514, 0, 0.46], 102: [0.19444, 0.69444, 0.21194, 0, 0.30667], 103: [0.19444, 0.43056, 0.08847, 0, 0.46], 104: [0, 0.69444, 0.07671, 0, 0.51111], 105: [0, 0.65536, 0.1019, 0, 0.30667], 106: [0.19444, 0.65536, 0.14467, 0, 0.30667], 107: [0, 0.69444, 0.10764, 0, 0.46], 108: [0, 0.69444, 0.10333, 0, 0.25555], 109: [0, 0.43056, 0.07671, 0, 0.81777], 110: [0, 0.43056, 0.07671, 0, 0.56222], 111: [0, 0.43056, 0.06312, 0, 0.51111], 112: [0.19444, 0.43056, 0.06312, 0, 0.51111], 113: [0.19444, 0.43056, 0.08847, 0, 0.46], 114: [0, 0.43056, 0.10764, 0, 0.42166], 115: [0, 0.43056, 0.08208, 0, 0.40889], 116: [0, 0.61508, 0.09486, 0, 0.33222], 117: [0, 0.43056, 0.07671, 0, 0.53666], 118: [0, 0.43056, 0.10764, 0, 0.46], 119: [0, 0.43056, 0.10764, 0, 0.66444], 120: [0, 0.43056, 0.12042, 0, 0.46389], 121: [0.19444, 0.43056, 0.08847, 0, 0.48555], 122: [0, 0.43056, 0.12292, 0, 0.40889], 126: [0.35, 0.31786, 0.11585, 0, 0.51111], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.66786, 0.10474, 0, 0.51111], 176: [0, 0.69444, 0, 0, 0.83129], 184: [0.17014, 0, 0, 0, 0.46], 198: [0, 0.68333, 0.12028, 0, 0.88277], 216: [0.04861, 0.73194, 0.09403, 0, 0.76666], 223: [0.19444, 0.69444, 0.10514, 0, 0.53666], 230: [0, 0.43056, 0.07514, 0, 0.71555], 248: [0.09722, 0.52778, 0.09194, 0, 0.51111], 338: [0, 0.68333, 0.12028, 0, 0.98499], 339: [0, 0.43056, 0.07514, 0, 0.71555], 710: [0, 0.69444, 0.06646, 0, 0.51111], 711: [0, 0.62847, 0.08295, 0, 0.51111], 713: [0, 0.56167, 0.10333, 0, 0.51111], 714: [0, 0.69444, 0.09694, 0, 0.51111], 715: [0, 0.69444, 0, 0, 0.51111], 728: [0, 0.69444, 0.10806, 0, 0.51111], 729: [0, 0.66786, 0.11752, 0, 0.30667], 730: [0, 0.69444, 0, 0, 0.83129], 732: [0, 0.66786, 0.11585, 0, 0.51111], 733: [0, 0.69444, 0.1225, 0, 0.51111], 915: [0, 0.68333, 0.13305, 0, 0.62722], 916: [0, 0.68333, 0, 0, 0.81777], 920: [0, 0.68333, 0.09403, 0, 0.76666], 923: [0, 0.68333, 0, 0, 0.69222], 926: [0, 0.68333, 0.15294, 0, 0.66444], 928: [0, 0.68333, 0.16389, 0, 0.74333], 931: [0, 0.68333, 0.12028, 0, 0.71555], 933: [0, 0.68333, 0.11111, 0, 0.76666], 934: [0, 0.68333, 0.05986, 0, 0.71555], 936: [0, 0.68333, 0.11111, 0, 0.76666], 937: [0, 0.68333, 0.10257, 0, 0.71555], 8211: [0, 0.43056, 0.09208, 0, 0.51111], 8212: [0, 0.43056, 0.09208, 0, 1.02222], 8216: [0, 0.69444, 0.12417, 0, 0.30667], 8217: [0, 0.69444, 0.12417, 0, 0.30667], 8220: [0, 0.69444, 0.1685, 0, 0.51444], 8221: [0, 0.69444, 0.06961, 0, 0.51444], 8463: [0, 0.68889, 0, 0, 0.54028] }, "Main-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.27778], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.77778], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.19444, 0.10556, 0, 0, 0.27778], 45: [0, 0.43056, 0, 0, 0.33333], 46: [0, 0.10556, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.64444, 0, 0, 0.5], 49: [0, 0.64444, 0, 0, 0.5], 50: [0, 0.64444, 0, 0, 0.5], 51: [0, 0.64444, 0, 0, 0.5], 52: [0, 0.64444, 0, 0, 0.5], 53: [0, 0.64444, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0, 0.64444, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0, 0.64444, 0, 0, 0.5], 58: [0, 0.43056, 0, 0, 0.27778], 59: [0.19444, 0.43056, 0, 0, 0.27778], 60: [0.0391, 0.5391, 0, 0, 0.77778], 61: [-0.13313, 0.36687, 0, 0, 0.77778], 62: [0.0391, 0.5391, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.77778], 65: [0, 0.68333, 0, 0, 0.75], 66: [0, 0.68333, 0, 0, 0.70834], 67: [0, 0.68333, 0, 0, 0.72222], 68: [0, 0.68333, 0, 0, 0.76389], 69: [0, 0.68333, 0, 0, 0.68056], 70: [0, 0.68333, 0, 0, 0.65278], 71: [0, 0.68333, 0, 0, 0.78472], 72: [0, 0.68333, 0, 0, 0.75], 73: [0, 0.68333, 0, 0, 0.36111], 74: [0, 0.68333, 0, 0, 0.51389], 75: [0, 0.68333, 0, 0, 0.77778], 76: [0, 0.68333, 0, 0, 0.625], 77: [0, 0.68333, 0, 0, 0.91667], 78: [0, 0.68333, 0, 0, 0.75], 79: [0, 0.68333, 0, 0, 0.77778], 80: [0, 0.68333, 0, 0, 0.68056], 81: [0.19444, 0.68333, 0, 0, 0.77778], 82: [0, 0.68333, 0, 0, 0.73611], 83: [0, 0.68333, 0, 0, 0.55556], 84: [0, 0.68333, 0, 0, 0.72222], 85: [0, 0.68333, 0, 0, 0.75], 86: [0, 0.68333, 0.01389, 0, 0.75], 87: [0, 0.68333, 0.01389, 0, 1.02778], 88: [0, 0.68333, 0, 0, 0.75], 89: [0, 0.68333, 0.025, 0, 0.75], 90: [0, 0.68333, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.27778], 92: [0.25, 0.75, 0, 0, 0.5], 93: [0.25, 0.75, 0, 0, 0.27778], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.31, 0.12056, 0.02778, 0, 0.5], 97: [0, 0.43056, 0, 0, 0.5], 98: [0, 0.69444, 0, 0, 0.55556], 99: [0, 0.43056, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.55556], 101: [0, 0.43056, 0, 0, 0.44445], 102: [0, 0.69444, 0.07778, 0, 0.30556], 103: [0.19444, 0.43056, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.55556], 105: [0, 0.66786, 0, 0, 0.27778], 106: [0.19444, 0.66786, 0, 0, 0.30556], 107: [0, 0.69444, 0, 0, 0.52778], 108: [0, 0.69444, 0, 0, 0.27778], 109: [0, 0.43056, 0, 0, 0.83334], 110: [0, 0.43056, 0, 0, 0.55556], 111: [0, 0.43056, 0, 0, 0.5], 112: [0.19444, 0.43056, 0, 0, 0.55556], 113: [0.19444, 0.43056, 0, 0, 0.52778], 114: [0, 0.43056, 0, 0, 0.39167], 115: [0, 0.43056, 0, 0, 0.39445], 116: [0, 0.61508, 0, 0, 0.38889], 117: [0, 0.43056, 0, 0, 0.55556], 118: [0, 0.43056, 0.01389, 0, 0.52778], 119: [0, 0.43056, 0.01389, 0, 0.72222], 120: [0, 0.43056, 0, 0, 0.52778], 121: [0.19444, 0.43056, 0.01389, 0, 0.52778], 122: [0, 0.43056, 0, 0, 0.44445], 123: [0.25, 0.75, 0, 0, 0.5], 124: [0.25, 0.75, 0, 0, 0.27778], 125: [0.25, 0.75, 0, 0, 0.5], 126: [0.35, 0.31786, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 163: [0, 0.69444, 0, 0, 0.76909], 167: [0.19444, 0.69444, 0, 0, 0.44445], 168: [0, 0.66786, 0, 0, 0.5], 172: [0, 0.43056, 0, 0, 0.66667], 176: [0, 0.69444, 0, 0, 0.75], 177: [0.08333, 0.58333, 0, 0, 0.77778], 182: [0.19444, 0.69444, 0, 0, 0.61111], 184: [0.17014, 0, 0, 0, 0.44445], 198: [0, 0.68333, 0, 0, 0.90278], 215: [0.08333, 0.58333, 0, 0, 0.77778], 216: [0.04861, 0.73194, 0, 0, 0.77778], 223: [0, 0.69444, 0, 0, 0.5], 230: [0, 0.43056, 0, 0, 0.72222], 247: [0.08333, 0.58333, 0, 0, 0.77778], 248: [0.09722, 0.52778, 0, 0, 0.5], 305: [0, 0.43056, 0, 0, 0.27778], 338: [0, 0.68333, 0, 0, 1.01389], 339: [0, 0.43056, 0, 0, 0.77778], 567: [0.19444, 0.43056, 0, 0, 0.30556], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.62847, 0, 0, 0.5], 713: [0, 0.56778, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.66786, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.75], 732: [0, 0.66786, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.68333, 0, 0, 0.625], 916: [0, 0.68333, 0, 0, 0.83334], 920: [0, 0.68333, 0, 0, 0.77778], 923: [0, 0.68333, 0, 0, 0.69445], 926: [0, 0.68333, 0, 0, 0.66667], 928: [0, 0.68333, 0, 0, 0.75], 931: [0, 0.68333, 0, 0, 0.72222], 933: [0, 0.68333, 0, 0, 0.77778], 934: [0, 0.68333, 0, 0, 0.72222], 936: [0, 0.68333, 0, 0, 0.77778], 937: [0, 0.68333, 0, 0, 0.72222], 8211: [0, 0.43056, 0.02778, 0, 0.5], 8212: [0, 0.43056, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5], 8224: [0.19444, 0.69444, 0, 0, 0.44445], 8225: [0.19444, 0.69444, 0, 0, 0.44445], 8230: [0, 0.123, 0, 0, 1.172], 8242: [0, 0.55556, 0, 0, 0.275], 8407: [0, 0.71444, 0.15382, 0, 0.5], 8463: [0, 0.68889, 0, 0, 0.54028], 8465: [0, 0.69444, 0, 0, 0.72222], 8467: [0, 0.69444, 0, 0.11111, 0.41667], 8472: [0.19444, 0.43056, 0, 0.11111, 0.63646], 8476: [0, 0.69444, 0, 0, 0.72222], 8501: [0, 0.69444, 0, 0, 0.61111], 8592: [-0.13313, 0.36687, 0, 0, 1], 8593: [0.19444, 0.69444, 0, 0, 0.5], 8594: [-0.13313, 0.36687, 0, 0, 1], 8595: [0.19444, 0.69444, 0, 0, 0.5], 8596: [-0.13313, 0.36687, 0, 0, 1], 8597: [0.25, 0.75, 0, 0, 0.5], 8598: [0.19444, 0.69444, 0, 0, 1], 8599: [0.19444, 0.69444, 0, 0, 1], 8600: [0.19444, 0.69444, 0, 0, 1], 8601: [0.19444, 0.69444, 0, 0, 1], 8614: [0.011, 0.511, 0, 0, 1], 8617: [0.011, 0.511, 0, 0, 1.126], 8618: [0.011, 0.511, 0, 0, 1.126], 8636: [-0.13313, 0.36687, 0, 0, 1], 8637: [-0.13313, 0.36687, 0, 0, 1], 8640: [-0.13313, 0.36687, 0, 0, 1], 8641: [-0.13313, 0.36687, 0, 0, 1], 8652: [0.011, 0.671, 0, 0, 1], 8656: [-0.13313, 0.36687, 0, 0, 1], 8657: [0.19444, 0.69444, 0, 0, 0.61111], 8658: [-0.13313, 0.36687, 0, 0, 1], 8659: [0.19444, 0.69444, 0, 0, 0.61111], 8660: [-0.13313, 0.36687, 0, 0, 1], 8661: [0.25, 0.75, 0, 0, 0.61111], 8704: [0, 0.69444, 0, 0, 0.55556], 8706: [0, 0.69444, 0.05556, 0.08334, 0.5309], 8707: [0, 0.69444, 0, 0, 0.55556], 8709: [0.05556, 0.75, 0, 0, 0.5], 8711: [0, 0.68333, 0, 0, 0.83334], 8712: [0.0391, 0.5391, 0, 0, 0.66667], 8715: [0.0391, 0.5391, 0, 0, 0.66667], 8722: [0.08333, 0.58333, 0, 0, 0.77778], 8723: [0.08333, 0.58333, 0, 0, 0.77778], 8725: [0.25, 0.75, 0, 0, 0.5], 8726: [0.25, 0.75, 0, 0, 0.5], 8727: [-0.03472, 0.46528, 0, 0, 0.5], 8728: [-0.05555, 0.44445, 0, 0, 0.5], 8729: [-0.05555, 0.44445, 0, 0, 0.5], 8730: [0.2, 0.8, 0, 0, 0.83334], 8733: [0, 0.43056, 0, 0, 0.77778], 8734: [0, 0.43056, 0, 0, 1], 8736: [0, 0.69224, 0, 0, 0.72222], 8739: [0.25, 0.75, 0, 0, 0.27778], 8741: [0.25, 0.75, 0, 0, 0.5], 8743: [0, 0.55556, 0, 0, 0.66667], 8744: [0, 0.55556, 0, 0, 0.66667], 8745: [0, 0.55556, 0, 0, 0.66667], 8746: [0, 0.55556, 0, 0, 0.66667], 8747: [0.19444, 0.69444, 0.11111, 0, 0.41667], 8764: [-0.13313, 0.36687, 0, 0, 0.77778], 8768: [0.19444, 0.69444, 0, 0, 0.27778], 8771: [-0.03625, 0.46375, 0, 0, 0.77778], 8773: [-0.022, 0.589, 0, 0, 0.778], 8776: [-0.01688, 0.48312, 0, 0, 0.77778], 8781: [-0.03625, 0.46375, 0, 0, 0.77778], 8784: [-0.133, 0.673, 0, 0, 0.778], 8801: [-0.03625, 0.46375, 0, 0, 0.77778], 8804: [0.13597, 0.63597, 0, 0, 0.77778], 8805: [0.13597, 0.63597, 0, 0, 0.77778], 8810: [0.0391, 0.5391, 0, 0, 1], 8811: [0.0391, 0.5391, 0, 0, 1], 8826: [0.0391, 0.5391, 0, 0, 0.77778], 8827: [0.0391, 0.5391, 0, 0, 0.77778], 8834: [0.0391, 0.5391, 0, 0, 0.77778], 8835: [0.0391, 0.5391, 0, 0, 0.77778], 8838: [0.13597, 0.63597, 0, 0, 0.77778], 8839: [0.13597, 0.63597, 0, 0, 0.77778], 8846: [0, 0.55556, 0, 0, 0.66667], 8849: [0.13597, 0.63597, 0, 0, 0.77778], 8850: [0.13597, 0.63597, 0, 0, 0.77778], 8851: [0, 0.55556, 0, 0, 0.66667], 8852: [0, 0.55556, 0, 0, 0.66667], 8853: [0.08333, 0.58333, 0, 0, 0.77778], 8854: [0.08333, 0.58333, 0, 0, 0.77778], 8855: [0.08333, 0.58333, 0, 0, 0.77778], 8856: [0.08333, 0.58333, 0, 0, 0.77778], 8857: [0.08333, 0.58333, 0, 0, 0.77778], 8866: [0, 0.69444, 0, 0, 0.61111], 8867: [0, 0.69444, 0, 0, 0.61111], 8868: [0, 0.69444, 0, 0, 0.77778], 8869: [0, 0.69444, 0, 0, 0.77778], 8872: [0.249, 0.75, 0, 0, 0.867], 8900: [-0.05555, 0.44445, 0, 0, 0.5], 8901: [-0.05555, 0.44445, 0, 0, 0.27778], 8902: [-0.03472, 0.46528, 0, 0, 0.5], 8904: [5e-3, 0.505, 0, 0, 0.9], 8942: [0.03, 0.903, 0, 0, 0.278], 8943: [-0.19, 0.313, 0, 0, 1.172], 8945: [-0.1, 0.823, 0, 0, 1.282], 8968: [0.25, 0.75, 0, 0, 0.44445], 8969: [0.25, 0.75, 0, 0, 0.44445], 8970: [0.25, 0.75, 0, 0, 0.44445], 8971: [0.25, 0.75, 0, 0, 0.44445], 8994: [-0.14236, 0.35764, 0, 0, 1], 8995: [-0.14236, 0.35764, 0, 0, 1], 9136: [0.244, 0.744, 0, 0, 0.412], 9137: [0.244, 0.745, 0, 0, 0.412], 9651: [0.19444, 0.69444, 0, 0, 0.88889], 9657: [-0.03472, 0.46528, 0, 0, 0.5], 9661: [0.19444, 0.69444, 0, 0, 0.88889], 9667: [-0.03472, 0.46528, 0, 0, 0.5], 9711: [0.19444, 0.69444, 0, 0, 1], 9824: [0.12963, 0.69444, 0, 0, 0.77778], 9825: [0.12963, 0.69444, 0, 0, 0.77778], 9826: [0.12963, 0.69444, 0, 0, 0.77778], 9827: [0.12963, 0.69444, 0, 0, 0.77778], 9837: [0, 0.75, 0, 0, 0.38889], 9838: [0.19444, 0.69444, 0, 0, 0.38889], 9839: [0.19444, 0.69444, 0, 0, 0.38889], 10216: [0.25, 0.75, 0, 0, 0.38889], 10217: [0.25, 0.75, 0, 0, 0.38889], 10222: [0.244, 0.744, 0, 0, 0.412], 10223: [0.244, 0.745, 0, 0, 0.412], 10229: [0.011, 0.511, 0, 0, 1.609], 10230: [0.011, 0.511, 0, 0, 1.638], 10231: [0.011, 0.511, 0, 0, 1.859], 10232: [0.024, 0.525, 0, 0, 1.609], 10233: [0.024, 0.525, 0, 0, 1.638], 10234: [0.024, 0.525, 0, 0, 1.858], 10236: [0.011, 0.511, 0, 0, 1.638], 10815: [0, 0.68333, 0, 0, 0.75], 10927: [0.13597, 0.63597, 0, 0, 0.77778], 10928: [0.13597, 0.63597, 0, 0, 0.77778], 57376: [0.19444, 0.69444, 0, 0, 0] }, "Math-BoldItalic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.44444, 0, 0, 0.575], 49: [0, 0.44444, 0, 0, 0.575], 50: [0, 0.44444, 0, 0, 0.575], 51: [0.19444, 0.44444, 0, 0, 0.575], 52: [0.19444, 0.44444, 0, 0, 0.575], 53: [0.19444, 0.44444, 0, 0, 0.575], 54: [0, 0.64444, 0, 0, 0.575], 55: [0.19444, 0.44444, 0, 0, 0.575], 56: [0, 0.64444, 0, 0, 0.575], 57: [0.19444, 0.44444, 0, 0, 0.575], 65: [0, 0.68611, 0, 0, 0.86944], 66: [0, 0.68611, 0.04835, 0, 0.8664], 67: [0, 0.68611, 0.06979, 0, 0.81694], 68: [0, 0.68611, 0.03194, 0, 0.93812], 69: [0, 0.68611, 0.05451, 0, 0.81007], 70: [0, 0.68611, 0.15972, 0, 0.68889], 71: [0, 0.68611, 0, 0, 0.88673], 72: [0, 0.68611, 0.08229, 0, 0.98229], 73: [0, 0.68611, 0.07778, 0, 0.51111], 74: [0, 0.68611, 0.10069, 0, 0.63125], 75: [0, 0.68611, 0.06979, 0, 0.97118], 76: [0, 0.68611, 0, 0, 0.75555], 77: [0, 0.68611, 0.11424, 0, 1.14201], 78: [0, 0.68611, 0.11424, 0, 0.95034], 79: [0, 0.68611, 0.03194, 0, 0.83666], 80: [0, 0.68611, 0.15972, 0, 0.72309], 81: [0.19444, 0.68611, 0, 0, 0.86861], 82: [0, 0.68611, 421e-5, 0, 0.87235], 83: [0, 0.68611, 0.05382, 0, 0.69271], 84: [0, 0.68611, 0.15972, 0, 0.63663], 85: [0, 0.68611, 0.11424, 0, 0.80027], 86: [0, 0.68611, 0.25555, 0, 0.67778], 87: [0, 0.68611, 0.15972, 0, 1.09305], 88: [0, 0.68611, 0.07778, 0, 0.94722], 89: [0, 0.68611, 0.25555, 0, 0.67458], 90: [0, 0.68611, 0.06979, 0, 0.77257], 97: [0, 0.44444, 0, 0, 0.63287], 98: [0, 0.69444, 0, 0, 0.52083], 99: [0, 0.44444, 0, 0, 0.51342], 100: [0, 0.69444, 0, 0, 0.60972], 101: [0, 0.44444, 0, 0, 0.55361], 102: [0.19444, 0.69444, 0.11042, 0, 0.56806], 103: [0.19444, 0.44444, 0.03704, 0, 0.5449], 104: [0, 0.69444, 0, 0, 0.66759], 105: [0, 0.69326, 0, 0, 0.4048], 106: [0.19444, 0.69326, 0.0622, 0, 0.47083], 107: [0, 0.69444, 0.01852, 0, 0.6037], 108: [0, 0.69444, 88e-4, 0, 0.34815], 109: [0, 0.44444, 0, 0, 1.0324], 110: [0, 0.44444, 0, 0, 0.71296], 111: [0, 0.44444, 0, 0, 0.58472], 112: [0.19444, 0.44444, 0, 0, 0.60092], 113: [0.19444, 0.44444, 0.03704, 0, 0.54213], 114: [0, 0.44444, 0.03194, 0, 0.5287], 115: [0, 0.44444, 0, 0, 0.53125], 116: [0, 0.63492, 0, 0, 0.41528], 117: [0, 0.44444, 0, 0, 0.68102], 118: [0, 0.44444, 0.03704, 0, 0.56666], 119: [0, 0.44444, 0.02778, 0, 0.83148], 120: [0, 0.44444, 0, 0, 0.65903], 121: [0.19444, 0.44444, 0.03704, 0, 0.59028], 122: [0, 0.44444, 0.04213, 0, 0.55509], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68611, 0.15972, 0, 0.65694], 916: [0, 0.68611, 0, 0, 0.95833], 920: [0, 0.68611, 0.03194, 0, 0.86722], 923: [0, 0.68611, 0, 0, 0.80555], 926: [0, 0.68611, 0.07458, 0, 0.84125], 928: [0, 0.68611, 0.08229, 0, 0.98229], 931: [0, 0.68611, 0.05451, 0, 0.88507], 933: [0, 0.68611, 0.15972, 0, 0.67083], 934: [0, 0.68611, 0, 0, 0.76666], 936: [0, 0.68611, 0.11653, 0, 0.71402], 937: [0, 0.68611, 0.04835, 0, 0.8789], 945: [0, 0.44444, 0, 0, 0.76064], 946: [0.19444, 0.69444, 0.03403, 0, 0.65972], 947: [0.19444, 0.44444, 0.06389, 0, 0.59003], 948: [0, 0.69444, 0.03819, 0, 0.52222], 949: [0, 0.44444, 0, 0, 0.52882], 950: [0.19444, 0.69444, 0.06215, 0, 0.50833], 951: [0.19444, 0.44444, 0.03704, 0, 0.6], 952: [0, 0.69444, 0.03194, 0, 0.5618], 953: [0, 0.44444, 0, 0, 0.41204], 954: [0, 0.44444, 0, 0, 0.66759], 955: [0, 0.69444, 0, 0, 0.67083], 956: [0.19444, 0.44444, 0, 0, 0.70787], 957: [0, 0.44444, 0.06898, 0, 0.57685], 958: [0.19444, 0.69444, 0.03021, 0, 0.50833], 959: [0, 0.44444, 0, 0, 0.58472], 960: [0, 0.44444, 0.03704, 0, 0.68241], 961: [0.19444, 0.44444, 0, 0, 0.6118], 962: [0.09722, 0.44444, 0.07917, 0, 0.42361], 963: [0, 0.44444, 0.03704, 0, 0.68588], 964: [0, 0.44444, 0.13472, 0, 0.52083], 965: [0, 0.44444, 0.03704, 0, 0.63055], 966: [0.19444, 0.44444, 0, 0, 0.74722], 967: [0.19444, 0.44444, 0, 0, 0.71805], 968: [0.19444, 0.69444, 0.03704, 0, 0.75833], 969: [0, 0.44444, 0.03704, 0, 0.71782], 977: [0, 0.69444, 0, 0, 0.69155], 981: [0.19444, 0.69444, 0, 0, 0.7125], 982: [0, 0.44444, 0.03194, 0, 0.975], 1009: [0.19444, 0.44444, 0, 0, 0.6118], 1013: [0, 0.44444, 0, 0, 0.48333], 57649: [0, 0.44444, 0, 0, 0.39352], 57911: [0.19444, 0.44444, 0, 0, 0.43889] }, "Math-Italic": { 32: [0, 0, 0, 0, 0.25], 48: [0, 0.43056, 0, 0, 0.5], 49: [0, 0.43056, 0, 0, 0.5], 50: [0, 0.43056, 0, 0, 0.5], 51: [0.19444, 0.43056, 0, 0, 0.5], 52: [0.19444, 0.43056, 0, 0, 0.5], 53: [0.19444, 0.43056, 0, 0, 0.5], 54: [0, 0.64444, 0, 0, 0.5], 55: [0.19444, 0.43056, 0, 0, 0.5], 56: [0, 0.64444, 0, 0, 0.5], 57: [0.19444, 0.43056, 0, 0, 0.5], 65: [0, 0.68333, 0, 0.13889, 0.75], 66: [0, 0.68333, 0.05017, 0.08334, 0.75851], 67: [0, 0.68333, 0.07153, 0.08334, 0.71472], 68: [0, 0.68333, 0.02778, 0.05556, 0.82792], 69: [0, 0.68333, 0.05764, 0.08334, 0.7382], 70: [0, 0.68333, 0.13889, 0.08334, 0.64306], 71: [0, 0.68333, 0, 0.08334, 0.78625], 72: [0, 0.68333, 0.08125, 0.05556, 0.83125], 73: [0, 0.68333, 0.07847, 0.11111, 0.43958], 74: [0, 0.68333, 0.09618, 0.16667, 0.55451], 75: [0, 0.68333, 0.07153, 0.05556, 0.84931], 76: [0, 0.68333, 0, 0.02778, 0.68056], 77: [0, 0.68333, 0.10903, 0.08334, 0.97014], 78: [0, 0.68333, 0.10903, 0.08334, 0.80347], 79: [0, 0.68333, 0.02778, 0.08334, 0.76278], 80: [0, 0.68333, 0.13889, 0.08334, 0.64201], 81: [0.19444, 0.68333, 0, 0.08334, 0.79056], 82: [0, 0.68333, 773e-5, 0.08334, 0.75929], 83: [0, 0.68333, 0.05764, 0.08334, 0.6132], 84: [0, 0.68333, 0.13889, 0.08334, 0.58438], 85: [0, 0.68333, 0.10903, 0.02778, 0.68278], 86: [0, 0.68333, 0.22222, 0, 0.58333], 87: [0, 0.68333, 0.13889, 0, 0.94445], 88: [0, 0.68333, 0.07847, 0.08334, 0.82847], 89: [0, 0.68333, 0.22222, 0, 0.58056], 90: [0, 0.68333, 0.07153, 0.08334, 0.68264], 97: [0, 0.43056, 0, 0, 0.52859], 98: [0, 0.69444, 0, 0, 0.42917], 99: [0, 0.43056, 0, 0.05556, 0.43276], 100: [0, 0.69444, 0, 0.16667, 0.52049], 101: [0, 0.43056, 0, 0.05556, 0.46563], 102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959], 103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697], 104: [0, 0.69444, 0, 0, 0.57616], 105: [0, 0.65952, 0, 0, 0.34451], 106: [0.19444, 0.65952, 0.05724, 0, 0.41181], 107: [0, 0.69444, 0.03148, 0, 0.5206], 108: [0, 0.69444, 0.01968, 0.08334, 0.29838], 109: [0, 0.43056, 0, 0, 0.87801], 110: [0, 0.43056, 0, 0, 0.60023], 111: [0, 0.43056, 0, 0.05556, 0.48472], 112: [0.19444, 0.43056, 0, 0.08334, 0.50313], 113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641], 114: [0, 0.43056, 0.02778, 0.05556, 0.45116], 115: [0, 0.43056, 0, 0.05556, 0.46875], 116: [0, 0.61508, 0, 0.08334, 0.36111], 117: [0, 0.43056, 0, 0.02778, 0.57246], 118: [0, 0.43056, 0.03588, 0.02778, 0.48472], 119: [0, 0.43056, 0.02691, 0.08334, 0.71592], 120: [0, 0.43056, 0, 0.02778, 0.57153], 121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028], 122: [0, 0.43056, 0.04398, 0.05556, 0.46505], 160: [0, 0, 0, 0, 0.25], 915: [0, 0.68333, 0.13889, 0.08334, 0.61528], 916: [0, 0.68333, 0, 0.16667, 0.83334], 920: [0, 0.68333, 0.02778, 0.08334, 0.76278], 923: [0, 0.68333, 0, 0.16667, 0.69445], 926: [0, 0.68333, 0.07569, 0.08334, 0.74236], 928: [0, 0.68333, 0.08125, 0.05556, 0.83125], 931: [0, 0.68333, 0.05764, 0.08334, 0.77986], 933: [0, 0.68333, 0.13889, 0.05556, 0.58333], 934: [0, 0.68333, 0, 0.08334, 0.66667], 936: [0, 0.68333, 0.11, 0.05556, 0.61222], 937: [0, 0.68333, 0.05017, 0.08334, 0.7724], 945: [0, 0.43056, 37e-4, 0.02778, 0.6397], 946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563], 947: [0.19444, 0.43056, 0.05556, 0, 0.51773], 948: [0, 0.69444, 0.03785, 0.05556, 0.44444], 949: [0, 0.43056, 0, 0.08334, 0.46632], 950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375], 951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653], 952: [0, 0.69444, 0.02778, 0.08334, 0.46944], 953: [0, 0.43056, 0, 0.05556, 0.35394], 954: [0, 0.43056, 0, 0, 0.57616], 955: [0, 0.69444, 0, 0, 0.58334], 956: [0.19444, 0.43056, 0, 0.02778, 0.60255], 957: [0, 0.43056, 0.06366, 0.02778, 0.49398], 958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375], 959: [0, 0.43056, 0, 0.05556, 0.48472], 960: [0, 0.43056, 0.03588, 0, 0.57003], 961: [0.19444, 0.43056, 0, 0.08334, 0.51702], 962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285], 963: [0, 0.43056, 0.03588, 0, 0.57141], 964: [0, 0.43056, 0.1132, 0.02778, 0.43715], 965: [0, 0.43056, 0.03588, 0.02778, 0.54028], 966: [0.19444, 0.43056, 0, 0.08334, 0.65417], 967: [0.19444, 0.43056, 0, 0.05556, 0.62569], 968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139], 969: [0, 0.43056, 0.03588, 0, 0.62245], 977: [0, 0.69444, 0, 0.08334, 0.59144], 981: [0.19444, 0.69444, 0, 0.08334, 0.59583], 982: [0, 0.43056, 0.02778, 0, 0.82813], 1009: [0.19444, 0.43056, 0, 0.08334, 0.51702], 1013: [0, 0.43056, 0, 0.05556, 0.4059], 57649: [0, 0.43056, 0, 0.02778, 0.32246], 57911: [0.19444, 0.43056, 0, 0.08334, 0.38403] }, "SansSerif-Bold": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.36667], 34: [0, 0.69444, 0, 0, 0.55834], 35: [0.19444, 0.69444, 0, 0, 0.91667], 36: [0.05556, 0.75, 0, 0, 0.55], 37: [0.05556, 0.75, 0, 0, 1.02912], 38: [0, 0.69444, 0, 0, 0.83056], 39: [0, 0.69444, 0, 0, 0.30556], 40: [0.25, 0.75, 0, 0, 0.42778], 41: [0.25, 0.75, 0, 0, 0.42778], 42: [0, 0.75, 0, 0, 0.55], 43: [0.11667, 0.61667, 0, 0, 0.85556], 44: [0.10556, 0.13056, 0, 0, 0.30556], 45: [0, 0.45833, 0, 0, 0.36667], 46: [0, 0.13056, 0, 0, 0.30556], 47: [0.25, 0.75, 0, 0, 0.55], 48: [0, 0.69444, 0, 0, 0.55], 49: [0, 0.69444, 0, 0, 0.55], 50: [0, 0.69444, 0, 0, 0.55], 51: [0, 0.69444, 0, 0, 0.55], 52: [0, 0.69444, 0, 0, 0.55], 53: [0, 0.69444, 0, 0, 0.55], 54: [0, 0.69444, 0, 0, 0.55], 55: [0, 0.69444, 0, 0, 0.55], 56: [0, 0.69444, 0, 0, 0.55], 57: [0, 0.69444, 0, 0, 0.55], 58: [0, 0.45833, 0, 0, 0.30556], 59: [0.10556, 0.45833, 0, 0, 0.30556], 61: [-0.09375, 0.40625, 0, 0, 0.85556], 63: [0, 0.69444, 0, 0, 0.51945], 64: [0, 0.69444, 0, 0, 0.73334], 65: [0, 0.69444, 0, 0, 0.73334], 66: [0, 0.69444, 0, 0, 0.73334], 67: [0, 0.69444, 0, 0, 0.70278], 68: [0, 0.69444, 0, 0, 0.79445], 69: [0, 0.69444, 0, 0, 0.64167], 70: [0, 0.69444, 0, 0, 0.61111], 71: [0, 0.69444, 0, 0, 0.73334], 72: [0, 0.69444, 0, 0, 0.79445], 73: [0, 0.69444, 0, 0, 0.33056], 74: [0, 0.69444, 0, 0, 0.51945], 75: [0, 0.69444, 0, 0, 0.76389], 76: [0, 0.69444, 0, 0, 0.58056], 77: [0, 0.69444, 0, 0, 0.97778], 78: [0, 0.69444, 0, 0, 0.79445], 79: [0, 0.69444, 0, 0, 0.79445], 80: [0, 0.69444, 0, 0, 0.70278], 81: [0.10556, 0.69444, 0, 0, 0.79445], 82: [0, 0.69444, 0, 0, 0.70278], 83: [0, 0.69444, 0, 0, 0.61111], 84: [0, 0.69444, 0, 0, 0.73334], 85: [0, 0.69444, 0, 0, 0.76389], 86: [0, 0.69444, 0.01528, 0, 0.73334], 87: [0, 0.69444, 0.01528, 0, 1.03889], 88: [0, 0.69444, 0, 0, 0.73334], 89: [0, 0.69444, 0.0275, 0, 0.73334], 90: [0, 0.69444, 0, 0, 0.67223], 91: [0.25, 0.75, 0, 0, 0.34306], 93: [0.25, 0.75, 0, 0, 0.34306], 94: [0, 0.69444, 0, 0, 0.55], 95: [0.35, 0.10833, 0.03056, 0, 0.55], 97: [0, 0.45833, 0, 0, 0.525], 98: [0, 0.69444, 0, 0, 0.56111], 99: [0, 0.45833, 0, 0, 0.48889], 100: [0, 0.69444, 0, 0, 0.56111], 101: [0, 0.45833, 0, 0, 0.51111], 102: [0, 0.69444, 0.07639, 0, 0.33611], 103: [0.19444, 0.45833, 0.01528, 0, 0.55], 104: [0, 0.69444, 0, 0, 0.56111], 105: [0, 0.69444, 0, 0, 0.25556], 106: [0.19444, 0.69444, 0, 0, 0.28611], 107: [0, 0.69444, 0, 0, 0.53056], 108: [0, 0.69444, 0, 0, 0.25556], 109: [0, 0.45833, 0, 0, 0.86667], 110: [0, 0.45833, 0, 0, 0.56111], 111: [0, 0.45833, 0, 0, 0.55], 112: [0.19444, 0.45833, 0, 0, 0.56111], 113: [0.19444, 0.45833, 0, 0, 0.56111], 114: [0, 0.45833, 0.01528, 0, 0.37222], 115: [0, 0.45833, 0, 0, 0.42167], 116: [0, 0.58929, 0, 0, 0.40417], 117: [0, 0.45833, 0, 0, 0.56111], 118: [0, 0.45833, 0.01528, 0, 0.5], 119: [0, 0.45833, 0.01528, 0, 0.74445], 120: [0, 0.45833, 0, 0, 0.5], 121: [0.19444, 0.45833, 0.01528, 0, 0.5], 122: [0, 0.45833, 0, 0, 0.47639], 126: [0.35, 0.34444, 0, 0, 0.55], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.69444, 0, 0, 0.55], 176: [0, 0.69444, 0, 0, 0.73334], 180: [0, 0.69444, 0, 0, 0.55], 184: [0.17014, 0, 0, 0, 0.48889], 305: [0, 0.45833, 0, 0, 0.25556], 567: [0.19444, 0.45833, 0, 0, 0.28611], 710: [0, 0.69444, 0, 0, 0.55], 711: [0, 0.63542, 0, 0, 0.55], 713: [0, 0.63778, 0, 0, 0.55], 728: [0, 0.69444, 0, 0, 0.55], 729: [0, 0.69444, 0, 0, 0.30556], 730: [0, 0.69444, 0, 0, 0.73334], 732: [0, 0.69444, 0, 0, 0.55], 733: [0, 0.69444, 0, 0, 0.55], 915: [0, 0.69444, 0, 0, 0.58056], 916: [0, 0.69444, 0, 0, 0.91667], 920: [0, 0.69444, 0, 0, 0.85556], 923: [0, 0.69444, 0, 0, 0.67223], 926: [0, 0.69444, 0, 0, 0.73334], 928: [0, 0.69444, 0, 0, 0.79445], 931: [0, 0.69444, 0, 0, 0.79445], 933: [0, 0.69444, 0, 0, 0.85556], 934: [0, 0.69444, 0, 0, 0.79445], 936: [0, 0.69444, 0, 0, 0.85556], 937: [0, 0.69444, 0, 0, 0.79445], 8211: [0, 0.45833, 0.03056, 0, 0.55], 8212: [0, 0.45833, 0.03056, 0, 1.10001], 8216: [0, 0.69444, 0, 0, 0.30556], 8217: [0, 0.69444, 0, 0, 0.30556], 8220: [0, 0.69444, 0, 0, 0.55834], 8221: [0, 0.69444, 0, 0, 0.55834] }, "SansSerif-Italic": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0.05733, 0, 0.31945], 34: [0, 0.69444, 316e-5, 0, 0.5], 35: [0.19444, 0.69444, 0.05087, 0, 0.83334], 36: [0.05556, 0.75, 0.11156, 0, 0.5], 37: [0.05556, 0.75, 0.03126, 0, 0.83334], 38: [0, 0.69444, 0.03058, 0, 0.75834], 39: [0, 0.69444, 0.07816, 0, 0.27778], 40: [0.25, 0.75, 0.13164, 0, 0.38889], 41: [0.25, 0.75, 0.02536, 0, 0.38889], 42: [0, 0.75, 0.11775, 0, 0.5], 43: [0.08333, 0.58333, 0.02536, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0.01946, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0.13164, 0, 0.5], 48: [0, 0.65556, 0.11156, 0, 0.5], 49: [0, 0.65556, 0.11156, 0, 0.5], 50: [0, 0.65556, 0.11156, 0, 0.5], 51: [0, 0.65556, 0.11156, 0, 0.5], 52: [0, 0.65556, 0.11156, 0, 0.5], 53: [0, 0.65556, 0.11156, 0, 0.5], 54: [0, 0.65556, 0.11156, 0, 0.5], 55: [0, 0.65556, 0.11156, 0, 0.5], 56: [0, 0.65556, 0.11156, 0, 0.5], 57: [0, 0.65556, 0.11156, 0, 0.5], 58: [0, 0.44444, 0.02502, 0, 0.27778], 59: [0.125, 0.44444, 0.02502, 0, 0.27778], 61: [-0.13, 0.37, 0.05087, 0, 0.77778], 63: [0, 0.69444, 0.11809, 0, 0.47222], 64: [0, 0.69444, 0.07555, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0.08293, 0, 0.66667], 67: [0, 0.69444, 0.11983, 0, 0.63889], 68: [0, 0.69444, 0.07555, 0, 0.72223], 69: [0, 0.69444, 0.11983, 0, 0.59722], 70: [0, 0.69444, 0.13372, 0, 0.56945], 71: [0, 0.69444, 0.11983, 0, 0.66667], 72: [0, 0.69444, 0.08094, 0, 0.70834], 73: [0, 0.69444, 0.13372, 0, 0.27778], 74: [0, 0.69444, 0.08094, 0, 0.47222], 75: [0, 0.69444, 0.11983, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0.08094, 0, 0.875], 78: [0, 0.69444, 0.08094, 0, 0.70834], 79: [0, 0.69444, 0.07555, 0, 0.73611], 80: [0, 0.69444, 0.08293, 0, 0.63889], 81: [0.125, 0.69444, 0.07555, 0, 0.73611], 82: [0, 0.69444, 0.08293, 0, 0.64584], 83: [0, 0.69444, 0.09205, 0, 0.55556], 84: [0, 0.69444, 0.13372, 0, 0.68056], 85: [0, 0.69444, 0.08094, 0, 0.6875], 86: [0, 0.69444, 0.1615, 0, 0.66667], 87: [0, 0.69444, 0.1615, 0, 0.94445], 88: [0, 0.69444, 0.13372, 0, 0.66667], 89: [0, 0.69444, 0.17261, 0, 0.66667], 90: [0, 0.69444, 0.11983, 0, 0.61111], 91: [0.25, 0.75, 0.15942, 0, 0.28889], 93: [0.25, 0.75, 0.08719, 0, 0.28889], 94: [0, 0.69444, 0.0799, 0, 0.5], 95: [0.35, 0.09444, 0.08616, 0, 0.5], 97: [0, 0.44444, 981e-5, 0, 0.48056], 98: [0, 0.69444, 0.03057, 0, 0.51667], 99: [0, 0.44444, 0.08336, 0, 0.44445], 100: [0, 0.69444, 0.09483, 0, 0.51667], 101: [0, 0.44444, 0.06778, 0, 0.44445], 102: [0, 0.69444, 0.21705, 0, 0.30556], 103: [0.19444, 0.44444, 0.10836, 0, 0.5], 104: [0, 0.69444, 0.01778, 0, 0.51667], 105: [0, 0.67937, 0.09718, 0, 0.23889], 106: [0.19444, 0.67937, 0.09162, 0, 0.26667], 107: [0, 0.69444, 0.08336, 0, 0.48889], 108: [0, 0.69444, 0.09483, 0, 0.23889], 109: [0, 0.44444, 0.01778, 0, 0.79445], 110: [0, 0.44444, 0.01778, 0, 0.51667], 111: [0, 0.44444, 0.06613, 0, 0.5], 112: [0.19444, 0.44444, 0.0389, 0, 0.51667], 113: [0.19444, 0.44444, 0.04169, 0, 0.51667], 114: [0, 0.44444, 0.10836, 0, 0.34167], 115: [0, 0.44444, 0.0778, 0, 0.38333], 116: [0, 0.57143, 0.07225, 0, 0.36111], 117: [0, 0.44444, 0.04169, 0, 0.51667], 118: [0, 0.44444, 0.10836, 0, 0.46111], 119: [0, 0.44444, 0.10836, 0, 0.68334], 120: [0, 0.44444, 0.09169, 0, 0.46111], 121: [0.19444, 0.44444, 0.10836, 0, 0.46111], 122: [0, 0.44444, 0.08752, 0, 0.43472], 126: [0.35, 0.32659, 0.08826, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0.06385, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.73752], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0.04169, 0, 0.23889], 567: [0.19444, 0.44444, 0.04169, 0, 0.26667], 710: [0, 0.69444, 0.0799, 0, 0.5], 711: [0, 0.63194, 0.08432, 0, 0.5], 713: [0, 0.60889, 0.08776, 0, 0.5], 714: [0, 0.69444, 0.09205, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0.09483, 0, 0.5], 729: [0, 0.67937, 0.07774, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.73752], 732: [0, 0.67659, 0.08826, 0, 0.5], 733: [0, 0.69444, 0.09205, 0, 0.5], 915: [0, 0.69444, 0.13372, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0.07555, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0.12816, 0, 0.66667], 928: [0, 0.69444, 0.08094, 0, 0.70834], 931: [0, 0.69444, 0.11983, 0, 0.72222], 933: [0, 0.69444, 0.09031, 0, 0.77778], 934: [0, 0.69444, 0.04603, 0, 0.72222], 936: [0, 0.69444, 0.09031, 0, 0.77778], 937: [0, 0.69444, 0.08293, 0, 0.72222], 8211: [0, 0.44444, 0.08616, 0, 0.5], 8212: [0, 0.44444, 0.08616, 0, 1], 8216: [0, 0.69444, 0.07816, 0, 0.27778], 8217: [0, 0.69444, 0.07816, 0, 0.27778], 8220: [0, 0.69444, 0.14205, 0, 0.5], 8221: [0, 0.69444, 316e-5, 0, 0.5] }, "SansSerif-Regular": { 32: [0, 0, 0, 0, 0.25], 33: [0, 0.69444, 0, 0, 0.31945], 34: [0, 0.69444, 0, 0, 0.5], 35: [0.19444, 0.69444, 0, 0, 0.83334], 36: [0.05556, 0.75, 0, 0, 0.5], 37: [0.05556, 0.75, 0, 0, 0.83334], 38: [0, 0.69444, 0, 0, 0.75834], 39: [0, 0.69444, 0, 0, 0.27778], 40: [0.25, 0.75, 0, 0, 0.38889], 41: [0.25, 0.75, 0, 0, 0.38889], 42: [0, 0.75, 0, 0, 0.5], 43: [0.08333, 0.58333, 0, 0, 0.77778], 44: [0.125, 0.08333, 0, 0, 0.27778], 45: [0, 0.44444, 0, 0, 0.33333], 46: [0, 0.08333, 0, 0, 0.27778], 47: [0.25, 0.75, 0, 0, 0.5], 48: [0, 0.65556, 0, 0, 0.5], 49: [0, 0.65556, 0, 0, 0.5], 50: [0, 0.65556, 0, 0, 0.5], 51: [0, 0.65556, 0, 0, 0.5], 52: [0, 0.65556, 0, 0, 0.5], 53: [0, 0.65556, 0, 0, 0.5], 54: [0, 0.65556, 0, 0, 0.5], 55: [0, 0.65556, 0, 0, 0.5], 56: [0, 0.65556, 0, 0, 0.5], 57: [0, 0.65556, 0, 0, 0.5], 58: [0, 0.44444, 0, 0, 0.27778], 59: [0.125, 0.44444, 0, 0, 0.27778], 61: [-0.13, 0.37, 0, 0, 0.77778], 63: [0, 0.69444, 0, 0, 0.47222], 64: [0, 0.69444, 0, 0, 0.66667], 65: [0, 0.69444, 0, 0, 0.66667], 66: [0, 0.69444, 0, 0, 0.66667], 67: [0, 0.69444, 0, 0, 0.63889], 68: [0, 0.69444, 0, 0, 0.72223], 69: [0, 0.69444, 0, 0, 0.59722], 70: [0, 0.69444, 0, 0, 0.56945], 71: [0, 0.69444, 0, 0, 0.66667], 72: [0, 0.69444, 0, 0, 0.70834], 73: [0, 0.69444, 0, 0, 0.27778], 74: [0, 0.69444, 0, 0, 0.47222], 75: [0, 0.69444, 0, 0, 0.69445], 76: [0, 0.69444, 0, 0, 0.54167], 77: [0, 0.69444, 0, 0, 0.875], 78: [0, 0.69444, 0, 0, 0.70834], 79: [0, 0.69444, 0, 0, 0.73611], 80: [0, 0.69444, 0, 0, 0.63889], 81: [0.125, 0.69444, 0, 0, 0.73611], 82: [0, 0.69444, 0, 0, 0.64584], 83: [0, 0.69444, 0, 0, 0.55556], 84: [0, 0.69444, 0, 0, 0.68056], 85: [0, 0.69444, 0, 0, 0.6875], 86: [0, 0.69444, 0.01389, 0, 0.66667], 87: [0, 0.69444, 0.01389, 0, 0.94445], 88: [0, 0.69444, 0, 0, 0.66667], 89: [0, 0.69444, 0.025, 0, 0.66667], 90: [0, 0.69444, 0, 0, 0.61111], 91: [0.25, 0.75, 0, 0, 0.28889], 93: [0.25, 0.75, 0, 0, 0.28889], 94: [0, 0.69444, 0, 0, 0.5], 95: [0.35, 0.09444, 0.02778, 0, 0.5], 97: [0, 0.44444, 0, 0, 0.48056], 98: [0, 0.69444, 0, 0, 0.51667], 99: [0, 0.44444, 0, 0, 0.44445], 100: [0, 0.69444, 0, 0, 0.51667], 101: [0, 0.44444, 0, 0, 0.44445], 102: [0, 0.69444, 0.06944, 0, 0.30556], 103: [0.19444, 0.44444, 0.01389, 0, 0.5], 104: [0, 0.69444, 0, 0, 0.51667], 105: [0, 0.67937, 0, 0, 0.23889], 106: [0.19444, 0.67937, 0, 0, 0.26667], 107: [0, 0.69444, 0, 0, 0.48889], 108: [0, 0.69444, 0, 0, 0.23889], 109: [0, 0.44444, 0, 0, 0.79445], 110: [0, 0.44444, 0, 0, 0.51667], 111: [0, 0.44444, 0, 0, 0.5], 112: [0.19444, 0.44444, 0, 0, 0.51667], 113: [0.19444, 0.44444, 0, 0, 0.51667], 114: [0, 0.44444, 0.01389, 0, 0.34167], 115: [0, 0.44444, 0, 0, 0.38333], 116: [0, 0.57143, 0, 0, 0.36111], 117: [0, 0.44444, 0, 0, 0.51667], 118: [0, 0.44444, 0.01389, 0, 0.46111], 119: [0, 0.44444, 0.01389, 0, 0.68334], 120: [0, 0.44444, 0, 0, 0.46111], 121: [0.19444, 0.44444, 0.01389, 0, 0.46111], 122: [0, 0.44444, 0, 0, 0.43472], 126: [0.35, 0.32659, 0, 0, 0.5], 160: [0, 0, 0, 0, 0.25], 168: [0, 0.67937, 0, 0, 0.5], 176: [0, 0.69444, 0, 0, 0.66667], 184: [0.17014, 0, 0, 0, 0.44445], 305: [0, 0.44444, 0, 0, 0.23889], 567: [0.19444, 0.44444, 0, 0, 0.26667], 710: [0, 0.69444, 0, 0, 0.5], 711: [0, 0.63194, 0, 0, 0.5], 713: [0, 0.60889, 0, 0, 0.5], 714: [0, 0.69444, 0, 0, 0.5], 715: [0, 0.69444, 0, 0, 0.5], 728: [0, 0.69444, 0, 0, 0.5], 729: [0, 0.67937, 0, 0, 0.27778], 730: [0, 0.69444, 0, 0, 0.66667], 732: [0, 0.67659, 0, 0, 0.5], 733: [0, 0.69444, 0, 0, 0.5], 915: [0, 0.69444, 0, 0, 0.54167], 916: [0, 0.69444, 0, 0, 0.83334], 920: [0, 0.69444, 0, 0, 0.77778], 923: [0, 0.69444, 0, 0, 0.61111], 926: [0, 0.69444, 0, 0, 0.66667], 928: [0, 0.69444, 0, 0, 0.70834], 931: [0, 0.69444, 0, 0, 0.72222], 933: [0, 0.69444, 0, 0, 0.77778], 934: [0, 0.69444, 0, 0, 0.72222], 936: [0, 0.69444, 0, 0, 0.77778], 937: [0, 0.69444, 0, 0, 0.72222], 8211: [0, 0.44444, 0.02778, 0, 0.5], 8212: [0, 0.44444, 0.02778, 0, 1], 8216: [0, 0.69444, 0, 0, 0.27778], 8217: [0, 0.69444, 0, 0, 0.27778], 8220: [0, 0.69444, 0, 0, 0.5], 8221: [0, 0.69444, 0, 0, 0.5] }, "Script-Regular": { 32: [0, 0, 0, 0, 0.25], 65: [0, 0.7, 0.22925, 0, 0.80253], 66: [0, 0.7, 0.04087, 0, 0.90757], 67: [0, 0.7, 0.1689, 0, 0.66619], 68: [0, 0.7, 0.09371, 0, 0.77443], 69: [0, 0.7, 0.18583, 0, 0.56162], 70: [0, 0.7, 0.13634, 0, 0.89544], 71: [0, 0.7, 0.17322, 0, 0.60961], 72: [0, 0.7, 0.29694, 0, 0.96919], 73: [0, 0.7, 0.19189, 0, 0.80907], 74: [0.27778, 0.7, 0.19189, 0, 1.05159], 75: [0, 0.7, 0.31259, 0, 0.91364], 76: [0, 0.7, 0.19189, 0, 0.87373], 77: [0, 0.7, 0.15981, 0, 1.08031], 78: [0, 0.7, 0.3525, 0, 0.9015], 79: [0, 0.7, 0.08078, 0, 0.73787], 80: [0, 0.7, 0.08078, 0, 1.01262], 81: [0, 0.7, 0.03305, 0, 0.88282], 82: [0, 0.7, 0.06259, 0, 0.85], 83: [0, 0.7, 0.19189, 0, 0.86767], 84: [0, 0.7, 0.29087, 0, 0.74697], 85: [0, 0.7, 0.25815, 0, 0.79996], 86: [0, 0.7, 0.27523, 0, 0.62204], 87: [0, 0.7, 0.27523, 0, 0.80532], 88: [0, 0.7, 0.26006, 0, 0.94445], 89: [0, 0.7, 0.2939, 0, 0.70961], 90: [0, 0.7, 0.24037, 0, 0.8212], 160: [0, 0, 0, 0, 0.25] }, "Size1-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.35001, 0.85, 0, 0, 0.45834], 41: [0.35001, 0.85, 0, 0, 0.45834], 47: [0.35001, 0.85, 0, 0, 0.57778], 91: [0.35001, 0.85, 0, 0, 0.41667], 92: [0.35001, 0.85, 0, 0, 0.57778], 93: [0.35001, 0.85, 0, 0, 0.41667], 123: [0.35001, 0.85, 0, 0, 0.58334], 125: [0.35001, 0.85, 0, 0, 0.58334], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.72222, 0, 0, 0.55556], 732: [0, 0.72222, 0, 0, 0.55556], 770: [0, 0.72222, 0, 0, 0.55556], 771: [0, 0.72222, 0, 0, 0.55556], 8214: [-99e-5, 0.601, 0, 0, 0.77778], 8593: [1e-5, 0.6, 0, 0, 0.66667], 8595: [1e-5, 0.6, 0, 0, 0.66667], 8657: [1e-5, 0.6, 0, 0, 0.77778], 8659: [1e-5, 0.6, 0, 0, 0.77778], 8719: [0.25001, 0.75, 0, 0, 0.94445], 8720: [0.25001, 0.75, 0, 0, 0.94445], 8721: [0.25001, 0.75, 0, 0, 1.05556], 8730: [0.35001, 0.85, 0, 0, 1], 8739: [-599e-5, 0.606, 0, 0, 0.33333], 8741: [-599e-5, 0.606, 0, 0, 0.55556], 8747: [0.30612, 0.805, 0.19445, 0, 0.47222], 8748: [0.306, 0.805, 0.19445, 0, 0.47222], 8749: [0.306, 0.805, 0.19445, 0, 0.47222], 8750: [0.30612, 0.805, 0.19445, 0, 0.47222], 8896: [0.25001, 0.75, 0, 0, 0.83334], 8897: [0.25001, 0.75, 0, 0, 0.83334], 8898: [0.25001, 0.75, 0, 0, 0.83334], 8899: [0.25001, 0.75, 0, 0, 0.83334], 8968: [0.35001, 0.85, 0, 0, 0.47222], 8969: [0.35001, 0.85, 0, 0, 0.47222], 8970: [0.35001, 0.85, 0, 0, 0.47222], 8971: [0.35001, 0.85, 0, 0, 0.47222], 9168: [-99e-5, 0.601, 0, 0, 0.66667], 10216: [0.35001, 0.85, 0, 0, 0.47222], 10217: [0.35001, 0.85, 0, 0, 0.47222], 10752: [0.25001, 0.75, 0, 0, 1.11111], 10753: [0.25001, 0.75, 0, 0, 1.11111], 10754: [0.25001, 0.75, 0, 0, 1.11111], 10756: [0.25001, 0.75, 0, 0, 0.83334], 10758: [0.25001, 0.75, 0, 0, 0.83334] }, "Size2-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.65002, 1.15, 0, 0, 0.59722], 41: [0.65002, 1.15, 0, 0, 0.59722], 47: [0.65002, 1.15, 0, 0, 0.81111], 91: [0.65002, 1.15, 0, 0, 0.47222], 92: [0.65002, 1.15, 0, 0, 0.81111], 93: [0.65002, 1.15, 0, 0, 0.47222], 123: [0.65002, 1.15, 0, 0, 0.66667], 125: [0.65002, 1.15, 0, 0, 0.66667], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1], 732: [0, 0.75, 0, 0, 1], 770: [0, 0.75, 0, 0, 1], 771: [0, 0.75, 0, 0, 1], 8719: [0.55001, 1.05, 0, 0, 1.27778], 8720: [0.55001, 1.05, 0, 0, 1.27778], 8721: [0.55001, 1.05, 0, 0, 1.44445], 8730: [0.65002, 1.15, 0, 0, 1], 8747: [0.86225, 1.36, 0.44445, 0, 0.55556], 8748: [0.862, 1.36, 0.44445, 0, 0.55556], 8749: [0.862, 1.36, 0.44445, 0, 0.55556], 8750: [0.86225, 1.36, 0.44445, 0, 0.55556], 8896: [0.55001, 1.05, 0, 0, 1.11111], 8897: [0.55001, 1.05, 0, 0, 1.11111], 8898: [0.55001, 1.05, 0, 0, 1.11111], 8899: [0.55001, 1.05, 0, 0, 1.11111], 8968: [0.65002, 1.15, 0, 0, 0.52778], 8969: [0.65002, 1.15, 0, 0, 0.52778], 8970: [0.65002, 1.15, 0, 0, 0.52778], 8971: [0.65002, 1.15, 0, 0, 0.52778], 10216: [0.65002, 1.15, 0, 0, 0.61111], 10217: [0.65002, 1.15, 0, 0, 0.61111], 10752: [0.55001, 1.05, 0, 0, 1.51112], 10753: [0.55001, 1.05, 0, 0, 1.51112], 10754: [0.55001, 1.05, 0, 0, 1.51112], 10756: [0.55001, 1.05, 0, 0, 1.11111], 10758: [0.55001, 1.05, 0, 0, 1.11111] }, "Size3-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [0.95003, 1.45, 0, 0, 0.73611], 41: [0.95003, 1.45, 0, 0, 0.73611], 47: [0.95003, 1.45, 0, 0, 1.04445], 91: [0.95003, 1.45, 0, 0, 0.52778], 92: [0.95003, 1.45, 0, 0, 1.04445], 93: [0.95003, 1.45, 0, 0, 0.52778], 123: [0.95003, 1.45, 0, 0, 0.75], 125: [0.95003, 1.45, 0, 0, 0.75], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.75, 0, 0, 1.44445], 732: [0, 0.75, 0, 0, 1.44445], 770: [0, 0.75, 0, 0, 1.44445], 771: [0, 0.75, 0, 0, 1.44445], 8730: [0.95003, 1.45, 0, 0, 1], 8968: [0.95003, 1.45, 0, 0, 0.58334], 8969: [0.95003, 1.45, 0, 0, 0.58334], 8970: [0.95003, 1.45, 0, 0, 0.58334], 8971: [0.95003, 1.45, 0, 0, 0.58334], 10216: [0.95003, 1.45, 0, 0, 0.75], 10217: [0.95003, 1.45, 0, 0, 0.75] }, "Size4-Regular": { 32: [0, 0, 0, 0, 0.25], 40: [1.25003, 1.75, 0, 0, 0.79167], 41: [1.25003, 1.75, 0, 0, 0.79167], 47: [1.25003, 1.75, 0, 0, 1.27778], 91: [1.25003, 1.75, 0, 0, 0.58334], 92: [1.25003, 1.75, 0, 0, 1.27778], 93: [1.25003, 1.75, 0, 0, 0.58334], 123: [1.25003, 1.75, 0, 0, 0.80556], 125: [1.25003, 1.75, 0, 0, 0.80556], 160: [0, 0, 0, 0, 0.25], 710: [0, 0.825, 0, 0, 1.8889], 732: [0, 0.825, 0, 0, 1.8889], 770: [0, 0.825, 0, 0, 1.8889], 771: [0, 0.825, 0, 0, 1.8889], 8730: [1.25003, 1.75, 0, 0, 1], 8968: [1.25003, 1.75, 0, 0, 0.63889], 8969: [1.25003, 1.75, 0, 0, 0.63889], 8970: [1.25003, 1.75, 0, 0, 0.63889], 8971: [1.25003, 1.75, 0, 0, 0.63889], 9115: [0.64502, 1.155, 0, 0, 0.875], 9116: [1e-5, 0.6, 0, 0, 0.875], 9117: [0.64502, 1.155, 0, 0, 0.875], 9118: [0.64502, 1.155, 0, 0, 0.875], 9119: [1e-5, 0.6, 0, 0, 0.875], 9120: [0.64502, 1.155, 0, 0, 0.875], 9121: [0.64502, 1.155, 0, 0, 0.66667], 9122: [-99e-5, 0.601, 0, 0, 0.66667], 9123: [0.64502, 1.155, 0, 0, 0.66667], 9124: [0.64502, 1.155, 0, 0, 0.66667], 9125: [-99e-5, 0.601, 0, 0, 0.66667], 9126: [0.64502, 1.155, 0, 0, 0.66667], 9127: [1e-5, 0.9, 0, 0, 0.88889], 9128: [0.65002, 1.15, 0, 0, 0.88889], 9129: [0.90001, 0, 0, 0, 0.88889], 9130: [0, 0.3, 0, 0, 0.88889], 9131: [1e-5, 0.9, 0, 0, 0.88889], 9132: [0.65002, 1.15, 0, 0, 0.88889], 9133: [0.90001, 0, 0, 0, 0.88889], 9143: [0.88502, 0.915, 0, 0, 1.05556], 10216: [1.25003, 1.75, 0, 0, 0.80556], 10217: [1.25003, 1.75, 0, 0, 0.80556], 57344: [-499e-5, 0.605, 0, 0, 1.05556], 57345: [-499e-5, 0.605, 0, 0, 1.05556], 57680: [0, 0.12, 0, 0, 0.45], 57681: [0, 0.12, 0, 0, 0.45], 57682: [0, 0.12, 0, 0, 0.45], 57683: [0, 0.12, 0, 0, 0.45] }, "Typewriter-Regular": { 32: [0, 0, 0, 0, 0.525], 33: [0, 0.61111, 0, 0, 0.525], 34: [0, 0.61111, 0, 0, 0.525], 35: [0, 0.61111, 0, 0, 0.525], 36: [0.08333, 0.69444, 0, 0, 0.525], 37: [0.08333, 0.69444, 0, 0, 0.525], 38: [0, 0.61111, 0, 0, 0.525], 39: [0, 0.61111, 0, 0, 0.525], 40: [0.08333, 0.69444, 0, 0, 0.525], 41: [0.08333, 0.69444, 0, 0, 0.525], 42: [0, 0.52083, 0, 0, 0.525], 43: [-0.08056, 0.53055, 0, 0, 0.525], 44: [0.13889, 0.125, 0, 0, 0.525], 45: [-0.08056, 0.53055, 0, 0, 0.525], 46: [0, 0.125, 0, 0, 0.525], 47: [0.08333, 0.69444, 0, 0, 0.525], 48: [0, 0.61111, 0, 0, 0.525], 49: [0, 0.61111, 0, 0, 0.525], 50: [0, 0.61111, 0, 0, 0.525], 51: [0, 0.61111, 0, 0, 0.525], 52: [0, 0.61111, 0, 0, 0.525], 53: [0, 0.61111, 0, 0, 0.525], 54: [0, 0.61111, 0, 0, 0.525], 55: [0, 0.61111, 0, 0, 0.525], 56: [0, 0.61111, 0, 0, 0.525], 57: [0, 0.61111, 0, 0, 0.525], 58: [0, 0.43056, 0, 0, 0.525], 59: [0.13889, 0.43056, 0, 0, 0.525], 60: [-0.05556, 0.55556, 0, 0, 0.525], 61: [-0.19549, 0.41562, 0, 0, 0.525], 62: [-0.05556, 0.55556, 0, 0, 0.525], 63: [0, 0.61111, 0, 0, 0.525], 64: [0, 0.61111, 0, 0, 0.525], 65: [0, 0.61111, 0, 0, 0.525], 66: [0, 0.61111, 0, 0, 0.525], 67: [0, 0.61111, 0, 0, 0.525], 68: [0, 0.61111, 0, 0, 0.525], 69: [0, 0.61111, 0, 0, 0.525], 70: [0, 0.61111, 0, 0, 0.525], 71: [0, 0.61111, 0, 0, 0.525], 72: [0, 0.61111, 0, 0, 0.525], 73: [0, 0.61111, 0, 0, 0.525], 74: [0, 0.61111, 0, 0, 0.525], 75: [0, 0.61111, 0, 0, 0.525], 76: [0, 0.61111, 0, 0, 0.525], 77: [0, 0.61111, 0, 0, 0.525], 78: [0, 0.61111, 0, 0, 0.525], 79: [0, 0.61111, 0, 0, 0.525], 80: [0, 0.61111, 0, 0, 0.525], 81: [0.13889, 0.61111, 0, 0, 0.525], 82: [0, 0.61111, 0, 0, 0.525], 83: [0, 0.61111, 0, 0, 0.525], 84: [0, 0.61111, 0, 0, 0.525], 85: [0, 0.61111, 0, 0, 0.525], 86: [0, 0.61111, 0, 0, 0.525], 87: [0, 0.61111, 0, 0, 0.525], 88: [0, 0.61111, 0, 0, 0.525], 89: [0, 0.61111, 0, 0, 0.525], 90: [0, 0.61111, 0, 0, 0.525], 91: [0.08333, 0.69444, 0, 0, 0.525], 92: [0.08333, 0.69444, 0, 0, 0.525], 93: [0.08333, 0.69444, 0, 0, 0.525], 94: [0, 0.61111, 0, 0, 0.525], 95: [0.09514, 0, 0, 0, 0.525], 96: [0, 0.61111, 0, 0, 0.525], 97: [0, 0.43056, 0, 0, 0.525], 98: [0, 0.61111, 0, 0, 0.525], 99: [0, 0.43056, 0, 0, 0.525], 100: [0, 0.61111, 0, 0, 0.525], 101: [0, 0.43056, 0, 0, 0.525], 102: [0, 0.61111, 0, 0, 0.525], 103: [0.22222, 0.43056, 0, 0, 0.525], 104: [0, 0.61111, 0, 0, 0.525], 105: [0, 0.61111, 0, 0, 0.525], 106: [0.22222, 0.61111, 0, 0, 0.525], 107: [0, 0.61111, 0, 0, 0.525], 108: [0, 0.61111, 0, 0, 0.525], 109: [0, 0.43056, 0, 0, 0.525], 110: [0, 0.43056, 0, 0, 0.525], 111: [0, 0.43056, 0, 0, 0.525], 112: [0.22222, 0.43056, 0, 0, 0.525], 113: [0.22222, 0.43056, 0, 0, 0.525], 114: [0, 0.43056, 0, 0, 0.525], 115: [0, 0.43056, 0, 0, 0.525], 116: [0, 0.55358, 0, 0, 0.525], 117: [0, 0.43056, 0, 0, 0.525], 118: [0, 0.43056, 0, 0, 0.525], 119: [0, 0.43056, 0, 0, 0.525], 120: [0, 0.43056, 0, 0, 0.525], 121: [0.22222, 0.43056, 0, 0, 0.525], 122: [0, 0.43056, 0, 0, 0.525], 123: [0.08333, 0.69444, 0, 0, 0.525], 124: [0.08333, 0.69444, 0, 0, 0.525], 125: [0.08333, 0.69444, 0, 0, 0.525], 126: [0, 0.61111, 0, 0, 0.525], 127: [0, 0.61111, 0, 0, 0.525], 160: [0, 0, 0, 0, 0.525], 176: [0, 0.61111, 0, 0, 0.525], 184: [0.19445, 0, 0, 0, 0.525], 305: [0, 0.43056, 0, 0, 0.525], 567: [0.22222, 0.43056, 0, 0, 0.525], 711: [0, 0.56597, 0, 0, 0.525], 713: [0, 0.56555, 0, 0, 0.525], 714: [0, 0.61111, 0, 0, 0.525], 715: [0, 0.61111, 0, 0, 0.525], 728: [0, 0.61111, 0, 0, 0.525], 730: [0, 0.61111, 0, 0, 0.525], 770: [0, 0.61111, 0, 0, 0.525], 771: [0, 0.61111, 0, 0, 0.525], 776: [0, 0.61111, 0, 0, 0.525], 915: [0, 0.61111, 0, 0, 0.525], 916: [0, 0.61111, 0, 0, 0.525], 920: [0, 0.61111, 0, 0, 0.525], 923: [0, 0.61111, 0, 0, 0.525], 926: [0, 0.61111, 0, 0, 0.525], 928: [0, 0.61111, 0, 0, 0.525], 931: [0, 0.61111, 0, 0, 0.525], 933: [0, 0.61111, 0, 0, 0.525], 934: [0, 0.61111, 0, 0, 0.525], 936: [0, 0.61111, 0, 0, 0.525], 937: [0, 0.61111, 0, 0, 0.525], 8216: [0, 0.61111, 0, 0, 0.525], 8217: [0, 0.61111, 0, 0, 0.525], 8242: [0, 0.61111, 0, 0, 0.525], 9251: [0.11111, 0.21944, 0, 0, 0.525] } }, We = { slant: [0.25, 0.25, 0.25], space: [0, 0, 0], stretch: [0, 0, 0], shrink: [0, 0, 0], xHeight: [0.431, 0.431, 0.431], quad: [1, 1.171, 1.472], extraSpace: [0, 0, 0], num1: [0.677, 0.732, 0.925], num2: [0.394, 0.384, 0.387], num3: [0.444, 0.471, 0.504], denom1: [0.686, 0.752, 1.025], denom2: [0.345, 0.344, 0.532], sup1: [0.413, 0.503, 0.504], sup2: [0.363, 0.431, 0.404], sup3: [0.289, 0.286, 0.294], sub1: [0.15, 0.143, 0.2], sub2: [0.247, 0.286, 0.4], supDrop: [0.386, 0.353, 0.494], subDrop: [0.05, 0.071, 0.1], delim1: [2.39, 1.7, 1.98], delim2: [1.01, 1.157, 1.42], axisHeight: [0.25, 0.25, 0.25], defaultRuleThickness: [0.04, 0.049, 0.049], bigOpSpacing1: [0.111, 0.111, 0.111], bigOpSpacing2: [0.166, 0.166, 0.166], bigOpSpacing3: [0.2, 0.2, 0.2], bigOpSpacing4: [0.6, 0.611, 0.611], bigOpSpacing5: [0.1, 0.143, 0.143], sqrtRuleThickness: [0.04, 0.04, 0.04], ptPerEm: [10, 10, 10], doubleRuleSep: [0.2, 0.2, 0.2], arrayRuleWidth: [0.04, 0.04, 0.04], fboxsep: [0.3, 0.3, 0.3], fboxrule: [0.04, 0.04, 0.04] }, Ge = { \u00C5: `A`, \u00D0: `D`, \u00DE: `o`, \u00E5: `a`, \u00F0: `d`, \u00FE: `o`, \u0410: `A`, \u0411: `B`, \u0412: `B`, \u0413: `F`, \u0414: `A`, \u0415: `E`, \u0416: `K`, \u0417: `3`, \u0418: `N`, \u0419: `N`, \u041A: `K`, \u041B: `N`, \u041C: `M`, \u041D: `H`, \u041E: `O`, \u041F: `N`, \u0420: `P`, \u0421: `C`, \u0422: `T`, \u0423: `y`, \u0424: `O`, \u0425: `X`, \u0426: `U`, \u0427: `h`, \u0428: `W`, \u0429: `W`, \u042A: `B`, \u042B: `X`, \u042C: `B`, \u042D: `3`, \u042E: `X`, \u042F: `R`, \u0430: `a`, \u0431: `b`, \u0432: `a`, \u0433: `r`, \u0434: `y`, \u0435: `e`, \u0436: `m`, \u0437: `e`, \u0438: `n`, \u0439: `n`, \u043A: `n`, \u043B: `n`, \u043C: `m`, \u043D: `n`, \u043E: `o`, \u043F: `n`, \u0440: `p`, \u0441: `c`, \u0442: `o`, \u0443: `y`, \u0444: `b`, \u0445: `x`, \u0446: `n`, \u0447: `n`, \u0448: `w`, \u0449: `w`, \u044A: `a`, \u044B: `m`, \u044C: `a`, \u044D: `e`, \u044E: `m`, \u044F: `r` };
function Ke(e3, t5) {
  Ue[e3] = t5;
}
function qe(t5, n3, r2) {
  var i2 = e;
  if (!Ue[n3]) throw Error(`Font metrics not found for font: ` + n3 + `.`);
  var a2 = t5[i2(971)](0), o2 = Ue[n3][a2];
  if (!o2 && t5[0] in Ge && (a2 = Ge[t5[0]].charCodeAt(0), o2 = Ue[n3][a2]), !o2 && r2 === `text` && ce(a2) && (o2 = Ue[n3][77]), o2) return { depth: o2[0], height: o2[1], italic: o2[2], skew: o2[3], width: o2[4] };
}
var Je = {};
function Ye(e3) {
  var t5 = e3 >= 5 ? 0 : e3 >= 3 ? 1 : 2;
  if (!Je[t5]) {
    var n3 = Je[t5] = { cssEmPerMu: We.quad[t5] / 18 };
    for (var r2 in We) We.hasOwnProperty(r2) && (n3[r2] = We[r2][t5]);
  }
  return Je[t5];
}
var j = { math: {}, text: {} };
function M(e3, t5, n3, r2, i2, a2) {
  j[e3][i2] = { font: t5, group: n3, replace: r2 }, a2 && r2 && (j[e3][r2] = j[e3][i2]);
}
var N = e(988), P = `text`, F = `main`, I = `ams`, L = `accent-token`, R = `bin`, Xe = e(554), Ze = `inner`, z = `mathord`, Qe = `op-token`, $e = `open`, et = `punct`, B = `rel`, tt = `spacing`, V = e(369);
M(N, F, B, `\u2261`, `\\equiv`, true), M(N, F, B, `\u227A`, `\\prec`, true), M(N, F, B, `\u227B`, `\\succ`, true), M(N, F, B, `\u223C`, `\\sim`, true), M(N, F, B, `\u22A5`, `\\perp`), M(N, F, B, `\u2AAF`, `\\preceq`, true), M(N, F, B, `\u2AB0`, `\\succeq`, true), M(N, F, B, `\u2243`, `\\simeq`, true), M(N, F, B, `\u2223`, `\\mid`, true), M(N, F, B, `\u226A`, e(558), true), M(N, F, B, `\u226B`, `\\gg`, true), M(N, F, B, `\u224D`, `\\asymp`, true), M(N, F, B, `\u2225`, e(1084)), M(N, F, B, `\u22C8`, `\\bowtie`, true), M(N, F, B, `\u2323`, `\\smile`, true), M(N, F, B, `\u2291`, `\\sqsubseteq`, true), M(N, F, B, `\u2292`, `\\sqsupseteq`, true), M(N, F, B, `\u2250`, `\\doteq`, true), M(N, F, B, `\u2322`, `\\frown`, true), M(N, F, B, `\u220B`, `\\ni`, true), M(N, F, B, `\u221D`, `\\propto`, true), M(N, F, B, `\u22A2`, `\\vdash`, true), M(N, F, B, `\u22A3`, `\\dashv`, true), M(N, F, B, `\u220B`, `\\owns`), M(N, F, et, `.`, `\\ldotp`), M(N, F, et, `\u22C5`, `\\cdotp`), M(N, F, et, `\u22C5`, `\xB7`), M(P, F, V, `\u22C5`, `\xB7`), M(N, F, V, `#`, `\\#`), M(P, F, V, `#`, `\\#`), M(N, F, V, `&`, `\\&`), M(P, F, V, `&`, `\\&`), M(N, F, V, `\u2135`, e(443), true), M(N, F, V, `\u2200`, `\\forall`, true), M(N, F, V, `\u210F`, `\\hbar`, true), M(N, F, V, `\u2203`, `\\exists`, true), M(N, F, V, `\u2207`, e(490), true), M(N, F, V, `\u266D`, `\\flat`, true), M(N, F, V, `\u2113`, `\\ell`, true), M(N, F, V, `\u266E`, `\\natural`, true), M(N, F, V, `\u2663`, `\\clubsuit`, true), M(N, F, V, `\u2118`, e(1067), true), M(N, F, V, `\u266F`, `\\sharp`, true), M(N, F, V, `\u2662`, `\\diamondsuit`, true), M(N, F, V, `\u211C`, `\\Re`, true), M(N, F, V, `\u2661`, e(684), true), M(N, F, V, `\u2111`, `\\Im`, true), M(N, F, V, `\u2660`, `\\spadesuit`, true), M(N, F, V, `\xA7`, `\\S`, true), M(P, F, V, `\xA7`, `\\S`), M(N, F, V, `\xB6`, `\\P`, true), M(P, F, V, `\xB6`, `\\P`), M(N, F, V, `\u2020`, `\\dag`), M(P, F, V, `\u2020`, `\\dag`), M(P, F, V, `\u2020`, `\\textdagger`), M(N, F, V, `\u2021`, e(954)), M(P, F, V, `\u2021`, e(954)), M(P, F, V, `\u2021`, `\\textdaggerdbl`), M(N, F, Xe, `\u23B1`, `\\rmoustache`, true), M(N, F, $e, `\u23B0`, `\\lmoustache`, true), M(N, F, Xe, `\u27EF`, `\\rgroup`, true), M(N, F, $e, `\u27EE`, `\\lgroup`, true), M(N, F, R, `\u2213`, `\\mp`, true), M(N, F, R, `\u2296`, `\\ominus`, true), M(N, F, R, `\u228E`, `\\uplus`, true), M(N, F, R, `\u2293`, e(435), true), M(N, F, R, `\u2217`, `\\ast`), M(N, F, R, `\u2294`, `\\sqcup`, true), M(N, F, R, `\u25EF`, e(673), true), M(N, F, R, `\u2219`, e(846), true), M(N, F, R, `\u2021`, `\\ddagger`), M(N, F, R, `\u2240`, `\\wr`, true), M(N, F, R, `\u2A3F`, `\\amalg`), M(N, F, R, `&`, `\\And`), M(N, F, B, `\u27F5`, `\\longleftarrow`, true), M(N, F, B, `\u21D0`, `\\Leftarrow`, true), M(N, F, B, `\u27F8`, `\\Longleftarrow`, true), M(N, F, B, `\u27F6`, e(921), true), M(N, F, B, `\u21D2`, `\\Rightarrow`, true), M(N, F, B, `\u27F9`, `\\Longrightarrow`, true), M(N, F, B, `\u2194`, e(692), true), M(N, F, B, `\u27F7`, `\\longleftrightarrow`, true), M(N, F, B, `\u21D4`, `\\Leftrightarrow`, true), M(N, F, B, `\u27FA`, `\\Longleftrightarrow`, true), M(N, F, B, `\u21A6`, `\\mapsto`, true), M(N, F, B, `\u27FC`, `\\longmapsto`, true), M(N, F, B, `\u2197`, `\\nearrow`, true), M(N, F, B, `\u21A9`, `\\hookleftarrow`, true), M(N, F, B, `\u21AA`, e(353), true), M(N, F, B, `\u2198`, `\\searrow`, true), M(N, F, B, `\u21BC`, `\\leftharpoonup`, true), M(N, F, B, `\u21C0`, `\\rightharpoonup`, true), M(N, F, B, `\u2199`, `\\swarrow`, true), M(N, F, B, `\u21BD`, e(814), true), M(N, F, B, `\u21C1`, `\\rightharpoondown`, true), M(N, F, B, `\u2196`, `\\nwarrow`, true), M(N, F, B, `\u21CC`, `\\rightleftharpoons`, true), M(N, I, B, `\u226E`, `\\nless`, true), M(N, I, B, `\uE010`, e(592)), M(N, I, B, `\uE011`, `\\@nleqq`), M(N, I, B, `\u2A87`, `\\lneq`, true), M(N, I, B, `\u2268`, `\\lneqq`, true), M(N, I, B, `\uE00C`, `\\@lvertneqq`), M(N, I, B, `\u22E6`, `\\lnsim`, true), M(N, I, B, `\u2A89`, `\\lnapprox`, true), M(N, I, B, `\u2280`, `\\nprec`, true), M(N, I, B, `\u22E0`, `\\npreceq`, true), M(N, I, B, `\u22E8`, `\\precnsim`, true), M(N, I, B, `\u2AB9`, e(446), true), M(N, I, B, `\u2241`, e(839), true), M(N, I, B, `\uE006`, `\\@nshortmid`), M(N, I, B, `\u2224`, `\\nmid`, true), M(N, I, B, `\u22AC`, `\\nvdash`, true), M(N, I, B, `\u22AD`, `\\nvDash`, true), M(N, I, B, `\u22EA`, `\\ntriangleleft`), M(N, I, B, `\u22EC`, `\\ntrianglelefteq`, true), M(N, I, B, `\u228A`, `\\subsetneq`, true), M(N, I, B, `\uE01A`, `\\@varsubsetneq`), M(N, I, B, `\u2ACB`, e(387), true), M(N, I, B, `\uE017`, `\\@varsubsetneqq`), M(N, I, B, `\u226F`, e(336), true), M(N, I, B, `\uE00F`, `\\@ngeqslant`), M(N, I, B, `\uE00E`, `\\@ngeqq`), M(N, I, B, `\u2A88`, `\\gneq`, true), M(N, I, B, `\u2269`, `\\gneqq`, true), M(N, I, B, `\uE00D`, e(1059)), M(N, I, B, `\u22E7`, `\\gnsim`, true), M(N, I, B, `\u2A8A`, `\\gnapprox`, true), M(N, I, B, `\u2281`, `\\nsucc`, true), M(N, I, B, `\u22E1`, `\\nsucceq`, true), M(N, I, B, `\u22E9`, e(709), true), M(N, I, B, `\u2ABA`, `\\succnapprox`, true), M(N, I, B, `\u2246`, `\\ncong`, true), M(N, I, B, `\uE007`, `\\@nshortparallel`), M(N, I, B, `\u2226`, `\\nparallel`, true), M(N, I, B, `\u22AF`, `\\nVDash`, true), M(N, I, B, `\u22EB`, `\\ntriangleright`), M(N, I, B, `\u22ED`, e(1078), true), M(N, I, B, `\uE018`, e(418)), M(N, I, B, `\u228B`, `\\supsetneq`, true), M(N, I, B, `\uE01B`, `\\@varsupsetneq`), M(N, I, B, `\u2ACC`, e(620), true), M(N, I, B, `\uE019`, e(927)), M(N, I, B, `\u22AE`, `\\nVdash`, true), M(N, I, B, `\u2AB5`, e(355), true), M(N, I, B, `\u2AB6`, `\\succneqq`, true), M(N, I, B, `\uE016`, `\\@nsubseteqq`), M(N, I, R, `\u22B4`, `\\unlhd`), M(N, I, R, `\u22B5`, `\\unrhd`), M(N, I, B, `\u219A`, e(895), true), M(N, I, B, `\u219B`, `\\nrightarrow`, true), M(N, I, B, `\u21CD`, e(298), true), M(N, I, B, `\u21CF`, e(621), true), M(N, I, B, `\u21AE`, `\\nleftrightarrow`, true), M(N, I, B, `\u21CE`, `\\nLeftrightarrow`, true), M(N, I, B, `\u25B3`, e(675)), M(N, I, V, `\u210F`, `\\hslash`), M(N, I, V, `\u25BD`, `\\triangledown`), M(N, I, V, `\u25CA`, `\\lozenge`), M(N, I, V, `\u24C8`, e(720)), M(N, I, V, `\xAE`, `\\circledR`), M(P, I, V, `\xAE`, `\\circledR`), M(N, I, V, `\u2221`, `\\measuredangle`, true), M(N, I, V, `\u2204`, `\\nexists`), M(N, I, V, `\u2127`, e(741)), M(N, I, V, `\u2132`, e(412), true), M(N, I, V, `\u2141`, `\\Game`, true), M(N, I, V, `\u2035`, `\\backprime`), M(N, I, V, `\u25B2`, `\\blacktriangle`), M(N, I, V, `\u25BC`, `\\blacktriangledown`), M(N, I, V, `\u25A0`, `\\blacksquare`), M(N, I, V, `\u29EB`, `\\blacklozenge`), M(N, I, V, `\u2605`, `\\bigstar`), M(N, I, V, `\u2222`, e(571), true), M(N, I, V, `\u2201`, `\\complement`, true), M(N, I, V, `\xF0`, `\\eth`, true), M(P, F, V, `\xF0`, `\xF0`), M(N, I, V, `\u2571`, `\\diagup`), M(N, I, V, `\u2572`, `\\diagdown`), M(N, I, V, `\u25A1`, e(557)), M(N, I, V, `\u25A1`, e(876)), M(N, I, V, `\u25CA`, `\\Diamond`), M(N, I, V, `\xA5`, `\\yen`, true), M(P, I, V, `\xA5`, e(640), true), M(N, I, V, `\u2713`, `\\checkmark`, true), M(P, I, V, `\u2713`, e(1047)), M(N, I, V, `\u2136`, `\\beth`, true), M(N, I, V, `\u2138`, `\\daleth`, true), M(N, I, V, `\u2137`, `\\gimel`, true), M(N, I, V, `\u03DD`, `\\digamma`, true), M(N, I, V, `\u03F0`, `\\varkappa`), M(N, I, $e, `\u250C`, `\\@ulcorner`, true), M(N, I, Xe, `\u2510`, `\\@urcorner`, true), M(N, I, $e, `\u2514`, `\\@llcorner`, true), M(N, I, Xe, `\u2518`, `\\@lrcorner`, true), M(N, I, B, `\u2266`, `\\leqq`, true), M(N, I, B, `\u2A7D`, `\\leqslant`, true), M(N, I, B, `\u2A95`, `\\eqslantless`, true), M(N, I, B, `\u2272`, `\\lesssim`, true), M(N, I, B, `\u2A85`, `\\lessapprox`, true), M(N, I, B, `\u224A`, `\\approxeq`, true), M(N, I, R, `\u22D6`, `\\lessdot`), M(N, I, B, `\u22D8`, `\\lll`, true), M(N, I, B, `\u2276`, `\\lessgtr`, true), M(N, I, B, `\u22DA`, `\\lesseqgtr`, true), M(N, I, B, `\u2A8B`, `\\lesseqqgtr`, true), M(N, I, B, `\u2251`, `\\doteqdot`), M(N, I, B, `\u2253`, `\\risingdotseq`, true), M(N, I, B, `\u2252`, `\\fallingdotseq`, true), M(N, I, B, `\u223D`, `\\backsim`, true), M(N, I, B, `\u22CD`, `\\backsimeq`, true), M(N, I, B, `\u2AC5`, `\\subseteqq`, true), M(N, I, B, `\u22D0`, `\\Subset`, true), M(N, I, B, `\u228F`, e(937), true), M(N, I, B, `\u227C`, `\\preccurlyeq`, true), M(N, I, B, `\u22DE`, `\\curlyeqprec`, true), M(N, I, B, `\u227E`, `\\precsim`, true), M(N, I, B, `\u2AB7`, `\\precapprox`, true), M(N, I, B, `\u22B2`, `\\vartriangleleft`), M(N, I, B, `\u22B4`, `\\trianglelefteq`), M(N, I, B, `\u22A8`, `\\vDash`, true), M(N, I, B, `\u22AA`, `\\Vvdash`, true), M(N, I, B, `\u2323`, `\\smallsmile`), M(N, I, B, `\u2322`, `\\smallfrown`), M(N, I, B, `\u224F`, `\\bumpeq`, true), M(N, I, B, `\u224E`, `\\Bumpeq`, true), M(N, I, B, `\u2267`, `\\geqq`, true), M(N, I, B, `\u2A7E`, `\\geqslant`, true), M(N, I, B, `\u2A96`, `\\eqslantgtr`, true), M(N, I, B, `\u2273`, `\\gtrsim`, true), M(N, I, B, `\u2A86`, `\\gtrapprox`, true), M(N, I, R, `\u22D7`, e(803)), M(N, I, B, `\u22D9`, `\\ggg`, true), M(N, I, B, `\u2277`, `\\gtrless`, true), M(N, I, B, `\u22DB`, `\\gtreqless`, true), M(N, I, B, `\u2A8C`, `\\gtreqqless`, true), M(N, I, B, `\u2256`, `\\eqcirc`, true), M(N, I, B, `\u2257`, `\\circeq`, true), M(N, I, B, `\u225C`, `\\triangleq`, true), M(N, I, B, `\u223C`, e(913)), M(N, I, B, `\u2248`, `\\thickapprox`), M(N, I, B, `\u2AC6`, `\\supseteqq`, true), M(N, I, B, `\u22D1`, `\\Supset`, true), M(N, I, B, `\u2290`, e(487), true), M(N, I, B, `\u227D`, `\\succcurlyeq`, true), M(N, I, B, `\u22DF`, `\\curlyeqsucc`, true), M(N, I, B, `\u227F`, `\\succsim`, true), M(N, I, B, `\u2AB8`, `\\succapprox`, true), M(N, I, B, `\u22B3`, `\\vartriangleright`), M(N, I, B, `\u22B5`, `\\trianglerighteq`), M(N, I, B, `\u22A9`, e(748), true), M(N, I, B, `\u2223`, `\\shortmid`), M(N, I, B, `\u2225`, e(503)), M(N, I, B, `\u226C`, `\\between`, true), M(N, I, B, `\u22D4`, `\\pitchfork`, true), M(N, I, B, `\u221D`, `\\varpropto`), M(N, I, B, `\u25C0`, `\\blacktriangleleft`), M(N, I, B, `\u2234`, `\\therefore`, true), M(N, I, B, `\u220D`, `\\backepsilon`), M(N, I, B, `\u25B6`, `\\blacktriangleright`), M(N, I, B, `\u2235`, `\\because`, true), M(N, I, B, `\u22D8`, `\\llless`), M(N, I, B, `\u22D9`, e(484)), M(N, I, R, `\u22B2`, `\\lhd`), M(N, I, R, `\u22B3`, `\\rhd`), M(N, I, B, `\u2242`, `\\eqsim`, true), M(N, F, B, `\u22C8`, `\\Join`), M(N, I, B, `\u2251`, `\\Doteq`, true), M(N, I, R, `\u2214`, `\\dotplus`, true), M(N, I, R, `\u2216`, `\\smallsetminus`), M(N, I, R, `\u22D2`, `\\Cap`, true), M(N, I, R, `\u22D3`, `\\Cup`, true), M(N, I, R, `\u2A5E`, `\\doublebarwedge`, true), M(N, I, R, `\u229F`, `\\boxminus`, true), M(N, I, R, `\u229E`, `\\boxplus`, true), M(N, I, R, `\u22C7`, `\\divideontimes`, true), M(N, I, R, `\u22C9`, `\\ltimes`, true), M(N, I, R, `\u22CA`, `\\rtimes`, true), M(N, I, R, `\u22CB`, `\\leftthreetimes`, true), M(N, I, R, `\u22CC`, `\\rightthreetimes`, true), M(N, I, R, `\u22CF`, `\\curlywedge`, true), M(N, I, R, `\u22CE`, `\\curlyvee`, true), M(N, I, R, `\u229D`, `\\circleddash`, true), M(N, I, R, `\u229B`, `\\circledast`, true), M(N, I, R, `\u22C5`, `\\centerdot`), M(N, I, R, `\u22BA`, `\\intercal`, true), M(N, I, R, `\u22D2`, e(329)), M(N, I, R, `\u22D3`, `\\doublecup`), M(N, I, R, `\u22A0`, `\\boxtimes`, true), M(N, I, B, `\u21E2`, `\\dashrightarrow`, true), M(N, I, B, `\u21E0`, e(1012), true), M(N, I, B, `\u21C7`, `\\leftleftarrows`, true), M(N, I, B, `\u21C6`, `\\leftrightarrows`, true), M(N, I, B, `\u21DA`, `\\Lleftarrow`, true), M(N, I, B, `\u219E`, `\\twoheadleftarrow`, true), M(N, I, B, `\u21A2`, `\\leftarrowtail`, true), M(N, I, B, `\u21AB`, `\\looparrowleft`, true), M(N, I, B, `\u21CB`, `\\leftrightharpoons`, true), M(N, I, B, `\u21B6`, `\\curvearrowleft`, true), M(N, I, B, `\u21BA`, `\\circlearrowleft`, true), M(N, I, B, `\u21B0`, e(651), true), M(N, I, B, `\u21C8`, `\\upuparrows`, true), M(N, I, B, `\u21BF`, e(575), true), M(N, I, B, `\u21C3`, `\\downharpoonleft`, true), M(N, F, B, `\u22B6`, `\\origof`, true), M(N, F, B, `\u22B7`, `\\imageof`, true), M(N, I, B, `\u22B8`, `\\multimap`, true), M(N, I, B, `\u21AD`, `\\leftrightsquigarrow`, true), M(N, I, B, `\u21C9`, `\\rightrightarrows`, true), M(N, I, B, `\u21C4`, `\\rightleftarrows`, true), M(N, I, B, `\u21A0`, `\\twoheadrightarrow`, true), M(N, I, B, `\u21A3`, `\\rightarrowtail`, true), M(N, I, B, `\u21AC`, `\\looparrowright`, true), M(N, I, B, `\u21B7`, `\\curvearrowright`, true), M(N, I, B, `\u21BB`, `\\circlearrowright`, true), M(N, I, B, `\u21B1`, `\\Rsh`, true), M(N, I, B, `\u21CA`, `\\downdownarrows`, true), M(N, I, B, `\u21BE`, e(510), true), M(N, I, B, `\u21C2`, e(633), true), M(N, I, B, `\u21DD`, `\\rightsquigarrow`, true), M(N, I, B, `\u21DD`, `\\leadsto`), M(N, I, B, `\u21DB`, `\\Rrightarrow`, true), M(N, I, B, `\u21BE`, `\\restriction`), M(N, F, V, `\u2018`, "`"), M(N, F, V, `$`, `\\$`), M(P, F, V, `$`, `\\$`), M(P, F, V, `$`, `\\textdollar`), M(N, F, V, `%`, `\\%`), M(P, F, V, `%`, `\\%`), M(N, F, V, `_`, `\\_`), M(P, F, V, `_`, `\\_`), M(P, F, V, `_`, `\\textunderscore`), M(N, F, V, `\u2220`, `\\angle`, true), M(N, F, V, `\u221E`, `\\infty`, true), M(N, F, V, `\u2032`, `\\prime`), M(N, F, V, `\u25B3`, `\\triangle`), M(N, F, V, `\u0393`, e(656), true), M(N, F, V, `\u0394`, e(781), true), M(N, F, V, `\u0398`, `\\Theta`, true), M(N, F, V, `\u039B`, e(670), true), M(N, F, V, `\u039E`, `\\Xi`, true), M(N, F, V, `\u03A0`, `\\Pi`, true), M(N, F, V, `\u03A3`, e(343), true), M(N, F, V, `\u03A5`, `\\Upsilon`, true), M(N, F, V, `\u03A6`, e(462), true), M(N, F, V, `\u03A8`, `\\Psi`, true), M(N, F, V, `\u03A9`, `\\Omega`, true), M(N, F, V, `A`, `\u0391`), M(N, F, V, `B`, `\u0392`), M(N, F, V, `E`, `\u0395`), M(N, F, V, `Z`, `\u0396`), M(N, F, V, `H`, `\u0397`), M(N, F, V, `I`, `\u0399`), M(N, F, V, `K`, `\u039A`), M(N, F, V, `M`, `\u039C`), M(N, F, V, `N`, `\u039D`), M(N, F, V, `O`, `\u039F`), M(N, F, V, `P`, `\u03A1`), M(N, F, V, `T`, `\u03A4`), M(N, F, V, `X`, `\u03A7`), M(N, F, V, `\xAC`, `\\neg`, true), M(N, F, V, `\xAC`, `\\lnot`), M(N, F, V, `\u22A4`, `\\top`), M(N, F, V, `\u22A5`, `\\bot`), M(N, F, V, `\u2205`, `\\emptyset`), M(N, I, V, `\u2205`, `\\varnothing`), M(N, F, z, `\u03B1`, `\\alpha`, true), M(N, F, z, `\u03B2`, `\\beta`, true), M(N, F, z, `\u03B3`, `\\gamma`, true), M(N, F, z, `\u03B4`, `\\delta`, true), M(N, F, z, `\u03F5`, `\\epsilon`, true), M(N, F, z, `\u03B6`, `\\zeta`, true), M(N, F, z, `\u03B7`, e(776), true), M(N, F, z, `\u03B8`, `\\theta`, true), M(N, F, z, `\u03B9`, `\\iota`, true), M(N, F, z, `\u03BA`, `\\kappa`, true), M(N, F, z, `\u03BB`, `\\lambda`, true), M(N, F, z, `\u03BC`, `\\mu`, true), M(N, F, z, `\u03BD`, e(404), true), M(N, F, z, `\u03BE`, `\\xi`, true), M(N, F, z, `\u03BF`, `\\omicron`, true), M(N, F, z, `\u03C0`, `\\pi`, true), M(N, F, z, `\u03C1`, `\\rho`, true), M(N, F, z, `\u03C3`, `\\sigma`, true), M(N, F, z, `\u03C4`, `\\tau`, true), M(N, F, z, `\u03C5`, e(445), true), M(N, F, z, `\u03D5`, `\\phi`, true), M(N, F, z, `\u03C7`, `\\chi`, true), M(N, F, z, `\u03C8`, `\\psi`, true), M(N, F, z, `\u03C9`, `\\omega`, true), M(N, F, z, `\u03B5`, e(460), true), M(N, F, z, `\u03D1`, e(764), true), M(N, F, z, `\u03D6`, `\\varpi`, true), M(N, F, z, `\u03F1`, `\\varrho`, true), M(N, F, z, `\u03C2`, `\\varsigma`, true), M(N, F, z, `\u03C6`, `\\varphi`, true), M(N, F, R, `\u2217`, `*`, true), M(N, F, R, `+`, `+`), M(N, F, R, `\u2212`, `-`, true), M(N, F, R, `\u22C5`, e(480), true), M(N, F, R, `\u2218`, `\\circ`, true), M(N, F, R, `\xF7`, `\\div`, true), M(N, F, R, `\xB1`, `\\pm`, true), M(N, F, R, `\xD7`, `\\times`, true), M(N, F, R, `\u2229`, `\\cap`, true), M(N, F, R, `\u222A`, `\\cup`, true), M(N, F, R, `\u2216`, `\\setminus`, true), M(N, F, R, `\u2227`, `\\land`), M(N, F, R, `\u2228`, `\\lor`), M(N, F, R, `\u2227`, `\\wedge`, true), M(N, F, R, `\u2228`, `\\vee`, true), M(N, F, V, `\u221A`, `\\surd`), M(N, F, $e, `\u27E8`, `\\langle`, true), M(N, F, $e, `\u2223`, `\\lvert`), M(N, F, $e, `\u2225`, `\\lVert`), M(N, F, Xe, `?`, `?`), M(N, F, Xe, `!`, `!`), M(N, F, Xe, `\u27E9`, e(719), true), M(N, F, Xe, `\u2223`, `\\rvert`), M(N, F, Xe, `\u2225`, e(674)), M(N, F, B, `=`, `=`), M(N, F, B, `:`, `:`), M(N, F, B, `\u2248`, `\\approx`, true), M(N, F, B, `\u2245`, `\\cong`, true), M(N, F, B, `\u2265`, `\\ge`), M(N, F, B, `\u2265`, `\\geq`, true), M(N, F, B, `\u2190`, `\\gets`), M(N, F, B, `>`, `\\gt`, true), M(N, F, B, `\u2208`, `\\in`, true), M(N, F, B, `\uE020`, `\\@not`), M(N, F, B, `\u2282`, `\\subset`, true), M(N, F, B, `\u2283`, `\\supset`, true), M(N, F, B, `\u2286`, `\\subseteq`, true), M(N, F, B, `\u2287`, `\\supseteq`, true), M(N, I, B, `\u2288`, `\\nsubseteq`, true), M(N, I, B, `\u2289`, `\\nsupseteq`, true), M(N, F, B, `\u22A8`, `\\models`), M(N, F, B, `\u2190`, `\\leftarrow`, true), M(N, F, B, `\u2264`, `\\le`), M(N, F, B, `\u2264`, `\\leq`, true), M(N, F, B, `<`, e(693), true), M(N, F, B, `\u2192`, `\\rightarrow`, true), M(N, F, B, `\u2192`, e(658)), M(N, I, B, `\u2271`, `\\ngeq`, true), M(N, I, B, `\u2270`, `\\nleq`, true), M(N, F, tt, `\xA0`, `\\ `), M(N, F, tt, `\xA0`, `\\space`), M(N, F, tt, `\xA0`, e(391)), M(P, F, tt, `\xA0`, `\\ `), M(P, F, tt, `\xA0`, ` `), M(P, F, tt, `\xA0`, `\\space`), M(P, F, tt, `\xA0`, `\\nobreakspace`), M(N, F, tt, ``, `\\nobreak`), M(N, F, tt, ``, `\\allowbreak`), M(N, F, et, `,`, `,`), M(N, F, et, `;`, `;`), M(N, I, R, `\u22BC`, e(1007), true), M(N, I, R, `\u22BB`, `\\veebar`, true), M(N, F, R, `\u2299`, `\\odot`, true), M(N, F, R, `\u2295`, `\\oplus`, true), M(N, F, R, `\u2297`, e(566), true), M(N, F, V, `\u2202`, `\\partial`, true), M(N, F, R, `\u2298`, `\\oslash`, true), M(N, I, R, `\u229A`, `\\circledcirc`, true), M(N, I, R, `\u22A1`, `\\boxdot`, true), M(N, F, R, `\u25B3`, `\\bigtriangleup`), M(N, F, R, `\u25BD`, `\\bigtriangledown`), M(N, F, R, `\u2020`, e(869)), M(N, F, R, `\u22C4`, `\\diamond`), M(N, F, R, `\u22C6`, `\\star`), M(N, F, R, `\u25C3`, `\\triangleleft`), M(N, F, R, `\u25B9`, `\\triangleright`), M(N, F, $e, `{`, `\\{`), M(P, F, V, `{`, `\\{`), M(P, F, V, `{`, e(931)), M(N, F, Xe, `}`, `\\}`), M(P, F, V, `}`, `\\}`), M(P, F, V, `}`, `\\textbraceright`), M(N, F, $e, `{`, `\\lbrace`), M(N, F, Xe, `}`, e(1005)), M(N, F, $e, `[`, `\\lbrack`, true), M(P, F, V, `[`, `\\lbrack`, true), M(N, F, Xe, `]`, `\\rbrack`, true), M(P, F, V, `]`, `\\rbrack`, true), M(N, F, $e, `(`, `\\lparen`, true), M(N, F, Xe, `)`, `\\rparen`, true), M(P, F, V, `<`, `\\textless`, true), M(P, F, V, `>`, `\\textgreater`, true), M(N, F, $e, `\u230A`, `\\lfloor`, true), M(N, F, Xe, `\u230B`, `\\rfloor`, true), M(N, F, $e, `\u2308`, `\\lceil`, true), M(N, F, Xe, `\u2309`, `\\rceil`, true), M(N, F, V, `\\`, e(531)), M(N, F, V, `\u2223`, `|`), M(N, F, V, `\u2223`, `\\vert`), M(P, F, V, `|`, `\\textbar`, true), M(N, F, V, `\u2225`, `\\|`), M(N, F, V, `\u2225`, `\\Vert`), M(P, F, V, `\u2225`, `\\textbardbl`), M(P, F, V, `~`, `\\textasciitilde`), M(P, F, V, `\\`, `\\textbackslash`), M(P, F, V, `^`, `\\textasciicircum`), M(N, F, B, `\u2191`, e(379), true), M(N, F, B, `\u21D1`, `\\Uparrow`, true), M(N, F, B, `\u2193`, `\\downarrow`, true), M(N, F, B, `\u21D3`, `\\Downarrow`, true), M(N, F, B, `\u2195`, `\\updownarrow`, true), M(N, F, B, `\u21D5`, `\\Updownarrow`, true), M(N, F, Qe, `\u2210`, `\\coprod`), M(N, F, Qe, `\u22C1`, e(377)), M(N, F, Qe, `\u22C0`, e(584)), M(N, F, Qe, `\u2A04`, `\\biguplus`), M(N, F, Qe, `\u22C2`, e(563)), M(N, F, Qe, `\u22C3`, e(444)), M(N, F, Qe, `\u222B`, `\\int`), M(N, F, Qe, `\u222B`, e(540)), M(N, F, Qe, `\u222C`, `\\iint`), M(N, F, Qe, `\u222D`, `\\iiint`), M(N, F, Qe, `\u220F`, `\\prod`), M(N, F, Qe, `\u2211`, `\\sum`), M(N, F, Qe, `\u2A02`, `\\bigotimes`), M(N, F, Qe, `\u2A01`, `\\bigoplus`), M(N, F, Qe, `\u2A00`, `\\bigodot`), M(N, F, Qe, `\u222E`, `\\oint`), M(N, F, Qe, `\u222F`, `\\oiint`), M(N, F, Qe, `\u2230`, `\\oiiint`), M(N, F, Qe, `\u2A06`, `\\bigsqcup`), M(N, F, Qe, `\u222B`, `\\smallint`), M(P, F, Ze, `\u2026`, `\\textellipsis`), M(N, F, Ze, `\u2026`, `\\mathellipsis`), M(P, F, Ze, `\u2026`, `\\ldots`, true), M(N, F, Ze, `\u2026`, `\\ldots`, true), M(N, F, Ze, `\u22EF`, `\\@cdots`, true), M(N, F, Ze, `\u22F1`, e(705), true), M(N, F, V, `\u22EE`, `\\varvdots`), M(P, F, V, `\u22EE`, `\\varvdots`), M(N, F, L, `\u02CA`, `\\acute`), M(N, F, L, `\u02CB`, e(335)), M(N, F, L, `\xA8`, e(524)), M(N, F, L, `~`, `\\tilde`), M(N, F, L, `\u02C9`, `\\bar`), M(N, F, L, `\u02D8`, `\\breve`), M(N, F, L, `\u02C7`, `\\check`), M(N, F, L, `^`, `\\hat`), M(N, F, L, `\u20D7`, `\\vec`), M(N, F, L, `\u02D9`, e(881)), M(N, F, L, `\u02DA`, e(951)), M(N, F, z, `\uE131`, `\\@imath`), M(N, F, z, `\uE237`, `\\@jmath`), M(N, F, V, `\u0131`, `\u0131`), M(N, F, V, `\u0237`, `\u0237`), M(P, F, V, `\u0131`, `\\i`, true), M(P, F, V, `\u0237`, `\\j`, true), M(P, F, V, `\xDF`, `\\ss`, true), M(P, F, V, `\xE6`, e(918), true), M(P, F, V, `\u0153`, `\\oe`, true), M(P, F, V, `\xF8`, `\\o`, true), M(P, F, V, `\xC6`, `\\AE`, true), M(P, F, V, `\u0152`, `\\OE`, true), M(P, F, V, `\xD8`, `\\O`, true), M(P, F, L, `\u02CA`, `\\'`), M(P, F, L, `\u02CB`, "\\`"), M(P, F, L, `\u02C6`, `\\^`), M(P, F, L, `\u02DC`, `\\~`), M(P, F, L, `\u02C9`, `\\=`), M(P, F, L, `\u02D8`, `\\u`), M(P, F, L, `\u02D9`, `\\.`), M(P, F, L, `\xB8`, `\\c`), M(P, F, L, `\u02DA`, `\\r`), M(P, F, L, `\u02C7`, `\\v`), M(P, F, L, `\xA8`, `\\"`), M(P, F, L, `\u02DD`, `\\H`), M(P, F, L, `\u25EF`, e(740));
var nt = { "--": true, "---": true, "``": true, "''": true };
M(P, F, V, `\u2013`, `--`, true), M(P, F, V, `\u2013`, `\\textendash`), M(P, F, V, `\u2014`, e(902), true), M(P, F, V, `\u2014`, `\\textemdash`), M(P, F, V, `\u2018`, "`", true), M(P, F, V, `\u2018`, `\\textquoteleft`), M(P, F, V, `\u2019`, `'`, true), M(P, F, V, `\u2019`, e(485)), M(P, F, V, `\u201C`, "``", true), M(P, F, V, `\u201C`, `\\textquotedblleft`), M(P, F, V, `\u201D`, `''`, true), M(P, F, V, `\u201D`, `\\textquotedblright`), M(N, F, V, `\xB0`, `\\degree`, true), M(P, F, V, `\xB0`, `\\degree`), M(P, F, V, `\xB0`, e(982), true), M(N, F, V, `\xA3`, `\\pounds`), M(N, F, V, `\xA3`, `\\mathsterling`, true), M(P, F, V, `\xA3`, `\\pounds`), M(P, F, V, `\xA3`, `\\textsterling`, true), M(N, I, V, `\u2720`, e(461)), M(P, I, V, `\u2720`, `\\maltese`);
for (var rt = `0123456789/@."`, it = 0; it < rt.length; it++) {
  var at = rt.charAt(it);
  M(N, F, V, at, at);
}
for (var ot = e(427), st = 0; st < ot.length; st++) {
  var ct = ot.charAt(st);
  M(P, F, V, ct, ct);
}
for (var lt = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`, ut = 0; ut < lt.length; ut++) {
  var dt = lt.charAt(ut);
  M(N, F, z, dt, dt), M(P, F, V, dt, dt);
}
M(N, I, V, `C`, `\u2102`), M(P, I, V, `C`, `\u2102`), M(N, I, V, `H`, `\u210D`), M(P, I, V, `H`, `\u210D`), M(N, I, V, `N`, `\u2115`), M(P, I, V, `N`, `\u2115`), M(N, I, V, `P`, `\u2119`), M(P, I, V, `P`, `\u2119`), M(N, I, V, `Q`, `\u211A`), M(P, I, V, `Q`, `\u211A`), M(N, I, V, `R`, `\u211D`), M(P, I, V, `R`, `\u211D`), M(N, I, V, `Z`, `\u2124`), M(P, I, V, `Z`, `\u2124`), M(N, F, z, `h`, `\u210E`), M(P, F, z, `h`, `\u210E`);
for (var H, ft = 0; ft < lt.length; ft++) {
  var U = lt.charAt(ft);
  H = String.fromCharCode(55349, 56320 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56372 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56424 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56580 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String[e(468)](55349, 56684 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56736 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56788 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56840 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56944 + ft), M(N, F, z, U, H), M(P, F, V, U, H), ft < 26 && (H = String[e(468)](55349, 56632 + ft), M(N, F, z, U, H), M(P, F, V, U, H), H = String.fromCharCode(55349, 56476 + ft), M(N, F, z, U, H), M(P, F, V, U, H));
}
H = String.fromCharCode(55349, 56668), M(N, F, z, `k`, H), M(P, F, V, `k`, H);
for (var pt = 0; pt < 10; pt++) {
  var mt = pt[e(604)]();
  H = String.fromCharCode(55349, 57294 + pt), M(N, F, z, mt, H), M(P, F, V, mt, H), H = String.fromCharCode(55349, 57314 + pt), M(N, F, z, mt, H), M(P, F, V, mt, H), H = String.fromCharCode(55349, 57324 + pt), M(N, F, z, mt, H), M(P, F, V, mt, H), H = String.fromCharCode(55349, 57334 + pt), M(N, F, z, mt, H), M(P, F, V, mt, H);
}
for (var ht = e(603), gt = 0; gt < ht.length; gt++) {
  var _t = ht.charAt(gt);
  M(N, F, z, _t, _t), M(P, F, V, _t, _t);
}
var vt = { mathClass: `mathbf`, textClass: `textbf`, font: `Main-Bold` }, yt = { mathClass: `mathnormal`, textClass: `textit`, font: `Math-Italic` }, bt = { mathClass: `boldsymbol`, textClass: `boldsymbol`, font: `Main-BoldItalic` }, xt = { mathClass: `mathscr`, textClass: `textscr`, font: `Script-Regular` }, St = { mathClass: ``, textClass: ``, font: `` }, Ct = { mathClass: `mathfrak`, textClass: `textfrak`, font: `Fraktur-Regular` }, wt = { mathClass: `mathbb`, textClass: `textbb`, font: `AMS-Regular` }, Tt = { mathClass: `mathboldfrak`, textClass: e(732), font: `Fraktur-Regular` }, Et = { mathClass: e(333), textClass: `textsf`, font: `SansSerif-Regular` }, Dt = { mathClass: `mathboldsf`, textClass: e(933), font: e(778) }, Ot = { mathClass: `mathitsf`, textClass: `textitsf`, font: `SansSerif-Italic` }, kt = { mathClass: e(945), textClass: e(750), font: `Typewriter-Regular` }, At = [vt, vt, yt, yt, bt, bt, xt, St, St, St, Ct, Ct, wt, wt, Tt, Tt, Et, Et, Dt, Dt, Ot, Ot, St, St, kt, kt], jt = [vt, St, Et, Dt, kt], Mt = (n3) => {
  var r2 = n3[e(971)](0), i2 = n3.charCodeAt(1), a2 = (r2 - 55296) * 1024 + (i2 - 56320) + 65536;
  if (119808 <= a2 && a2 < 120484) return At[Math.floor((a2 - 119808) / 26)];
  if (120782 <= a2 && a2 <= 120831) return jt[Math.floor((a2 - 120782) / 10)];
  if (a2 === 120485 || a2 === 120486) return At[0];
  if (120486 < a2 && a2 < 120782) return St;
  throw new t(`Unsupported character: ` + n3);
}, Nt = function(e3, t5, n3) {
  if (j[n3][e3]) {
    var r2 = j[n3][e3].replace;
    r2 && (e3 = r2);
  }
  return { value: e3, metrics: qe(e3, t5, n3) };
}, Pt = function(t5, n3, r2, i2, a2) {
  var o2 = e, s2 = Nt(t5, n3, r2), c2 = s2[o2(374)];
  t5 = s2[o2(723)];
  var l2;
  if (c2) {
    var u2 = c2.italic;
    (r2 === o2(1033) || i2 && i2.font === o2(648)) && (u2 = 0), l2 = new Ie(t5, c2.height, c2.depth, u2, c2.skew, c2.width, a2);
  } else typeof console < `u` && console.warn(`No character metrics ` + (o2(474) + t5 + o2(436) + n3 + `' and mode '` + r2 + `'`)), l2 = new Ie(t5, 0, 0, 0, 0, 0, a2);
  if (i2) {
    l2[o2(600)] = i2.sizeMultiplier, i2.style.isTight() && l2.classes.push(`mtight`);
    var d2 = i2.getColor();
    d2 && (l2[o2(956)].color = d2);
  }
  return l2;
}, Ft = function(t5, n3, r2, i2) {
  var a2 = e;
  return i2 === void 0 && (i2 = []), r2.font === `boldsymbol` && Nt(t5, `Main-Bold`, n3).metrics ? Pt(t5, `Main-Bold`, n3, r2, i2.concat([`mathbf`])) : t5 === `\\` || j[n3][t5].font === a2(905) ? Pt(t5, `Main-Regular`, n3, r2, i2) : Pt(t5, `AMS-Regular`, n3, r2, i2[a2(950)]([`amsrm`]));
}, It = function(e3, t5, n3) {
  return n3 !== `textord` && Nt(e3, `Math-BoldItalic`, t5).metrics ? { fontName: `Math-BoldItalic`, fontClass: `boldsymbol` } : { fontName: `Main-Bold`, fontClass: `mathbf` };
}, Lt = function(t5, n3, r2) {
  var i2 = e, a2 = t5.mode, o2 = t5.text, s2 = [i2(992)], { font: c2, fontFamily: l2, fontWeight: u2, fontShape: d2 } = n3, f2 = a2 === `math` || a2 === `text` && !!c2, p2 = f2 ? c2 : l2, m2 = ``, h2 = ``;
  if (o2.charCodeAt(0) === 55349) {
    var g2 = Mt(o2);
    m2 = g2.font, h2 = g2[a2 + `Class`];
  }
  if (m2) return Pt(o2, m2, a2, n3, s2.concat(h2));
  if (p2) {
    var _2, v2;
    if (p2 === `boldsymbol`) {
      var y2 = It(o2, a2, r2);
      _2 = y2.fontName, v2 = [y2.fontClass];
    } else f2 ? (_2 = Yt[c2][i2(811)], v2 = [c2]) : (_2 = Jt(l2, u2, d2), v2 = [l2, u2, d2]);
    if (Nt(o2, _2, a2).metrics) return Pt(o2, _2, a2, n3, s2.concat(v2));
    if (nt[i2(1029)](o2) && _2.slice(0, 10) === `Typewriter`) {
      for (var b2 = [], x2 = 0; x2 < o2.length; x2++) b2[i2(610)](Pt(o2[x2], _2, a2, n3, s2.concat(v2)));
      return Wt(b2);
    }
  }
  if (r2 === `mathord`) return Pt(o2, `Math-Italic`, a2, n3, s2.concat([`mathnormal`]));
  if (r2 === `textord`) {
    var S2 = j[a2][o2] && j[a2][o2].font;
    if (S2 === `ams`) return Pt(o2, Jt(`amsrm`, u2, d2), a2, n3, s2.concat(`amsrm`, u2, d2));
    if (S2 === `main` || !S2) return Pt(o2, Jt(`textrm`, u2, d2), a2, n3, s2.concat(u2, d2));
    var C2 = Jt(S2, u2, d2);
    return Pt(o2, C2, a2, n3, s2.concat(C2, u2, d2));
  } else throw Error(`unexpected type: ` + r2 + ` in makeOrd`);
}, Rt = (t5, n3) => {
  var r2 = e;
  if (Ee(t5.classes) !== Ee(n3[r2(906)]) || t5.skew !== n3.skew || t5.maxFontSize !== n3[r2(600)] || t5.italic !== 0 && t5.hasClass(r2(570))) return false;
  if (t5.classes[r2(739)] === 1) {
    var i2 = t5.classes[0];
    if (i2 === `mbin` || i2 === `mord`) return false;
  }
  for (var a2 of Object.keys(t5.style)) if (t5.style[a2] !== n3.style[a2]) return false;
  for (var o2 of Object[r2(892)](n3.style)) if (t5.style[o2] !== n3.style[o2]) return false;
  return true;
}, zt = (t5) => {
  for (var n3 = e, r2 = 0; r2 < t5.length - 1; r2++) {
    var i2 = t5[r2], a2 = t5[r2 + 1];
    i2 instanceof Ie && a2 instanceof Ie && Rt(i2, a2) && (i2.text += a2[n3(1033)], i2.height = Math[n3(477)](i2.height, a2[n3(769)]), i2[n3(882)] = Math.max(i2.depth, a2[n3(882)]), i2[n3(448)] = a2.italic, t5[n3(457)](r2 + 1, 1), r2--);
  }
  return t5;
}, Bt = function(t5) {
  for (var n3 = e, r2 = 0, i2 = 0, a2 = 0, o2 = 0; o2 < t5.children.length; o2++) {
    var s2 = t5.children[o2];
    s2[n3(769)] > r2 && (r2 = s2.height), s2.depth > i2 && (i2 = s2.depth), s2.maxFontSize > a2 && (a2 = s2[n3(600)]);
  }
  t5.height = r2, t5.depth = i2, t5[n3(600)] = a2;
}, W = function(e3, t5, n3, r2) {
  var i2 = new Me(e3, t5, n3, r2);
  return Bt(i2), i2;
}, Vt = (e3, t5, n3, r2) => new Me(e3, t5, n3, r2), Ht = function(t5, n3, r2) {
  var i2 = e, a2 = W([t5], [], n3);
  return a2[i2(769)] = Math.max(r2 || n3[i2(1057)]().defaultRuleThickness, n3.minRuleThickness), a2.style.borderBottomWidth = A(a2.height), a2.maxFontSize = 1, a2;
}, Ut = function(e3, t5, n3, r2) {
  var i2 = new Ne(e3, t5, n3, r2);
  return Bt(i2), i2;
}, Wt = function(e3) {
  var t5 = new Se(e3);
  return Bt(t5), t5;
}, Gt = function(e3, t5) {
  return e3 instanceof Se ? W([], [e3], t5) : e3;
}, Kt = function(t5) {
  var n3 = e;
  if (t5.positionType === `individualShift`) {
    for (var r2 = t5[n3(406)], i2 = [r2[0]], a2 = -r2[0].shift - r2[0].elem[n3(882)], o2 = a2, s2 = 1; s2 < r2.length; s2++) {
      var c2 = -r2[s2].shift - o2 - r2[s2].elem.depth, l2 = c2 - (r2[s2 - 1].elem.height + r2[s2 - 1].elem.depth);
      o2 += c2, i2.push({ type: `kern`, size: l2 }), i2.push(r2[s2]);
    }
    return { children: i2, depth: a2 };
  }
  var u2;
  if (t5.positionType === `top`) {
    for (var d2 = t5[n3(532)], f2 = 0; f2 < t5.children.length; f2++) {
      var p2 = t5.children[f2];
      d2 -= p2[n3(953)] === `kern` ? p2.size : p2[n3(818)].height + p2.elem[n3(882)];
    }
    u2 = d2;
  } else if (t5[n3(689)] === `bottom`) u2 = -t5.positionData;
  else {
    var m2 = t5.children[0];
    if (m2.type !== n3(818)) throw Error(`First child must have type "elem".`);
    if (t5[n3(689)] === `shift`) u2 = -m2.elem.depth - t5[n3(532)];
    else if (t5[n3(689)] === `firstBaseline`) u2 = -m2.elem.depth;
    else throw Error(n3(994) + t5.positionType + `.`);
  }
  return { children: t5.children, depth: u2 };
}, G = function(t5, n3) {
  for (var r2 = e, { children: i2, depth: a2 } = Kt(t5), o2 = 0, s2 = 0; s2 < i2.length; s2++) {
    var c2 = i2[s2];
    if (c2.type === `elem`) {
      var l2 = c2.elem;
      o2 = Math.max(o2, l2.maxFontSize, l2.height);
    }
  }
  o2 += 2;
  var u2 = W([`pstrut`], []);
  u2.style.height = A(o2);
  for (var d2 = [], f2 = a2, p2 = a2, m2 = a2, h2 = 0; h2 < i2.length; h2++) {
    var g2 = i2[h2];
    if (g2.type === `kern`) m2 += g2.size;
    else {
      var _2 = g2.elem, v2 = g2.wrapperClasses || [], y2 = g2.wrapperStyle || {}, b2 = W(v2, [u2, _2], void 0, y2);
      b2.style.top = A(-o2 - m2 - _2.depth), g2.marginLeft && (b2.style.marginLeft = g2.marginLeft), g2.marginRight && (b2.style[r2(711)] = g2.marginRight), d2.push(b2), m2 += _2.height + _2.depth;
    }
    f2 = Math.min(f2, m2), p2 = Math.max(p2, m2);
  }
  var x2 = W([`vlist`], d2);
  x2.style.height = A(p2);
  var S2;
  if (f2 < 0) {
    var C2 = W([r2(1070)], [W([], [])]);
    C2.style.height = A(-f2), S2 = [W([r2(479)], [x2, W([`vlist-s`], [new Ie(`\u200B`)])]), W([`vlist-r`], [C2])];
  } else S2 = [W([r2(479)], [x2])];
  var w2 = W([`vlist-t`], S2);
  return S2.length === 2 && w2.classes[r2(610)](`vlist-t2`), w2.height = p2, w2.depth = -f2, w2;
}, qt = (e3, t5) => {
  var n3 = W([`mspace`], [], t5), r2 = k(e3, t5);
  return n3.style.marginRight = A(r2), n3;
}, Jt = (t5, n3, r2) => {
  var i2 = e, a2, o2;
  switch (t5) {
    case `amsrm`:
      a2 = `AMS`;
      break;
    case `textrm`:
      a2 = `Main`;
      break;
    case `textsf`:
      a2 = `SansSerif`;
      break;
    case `texttt`:
      a2 = i2(975);
      break;
    default:
      a2 = t5;
  }
  return o2 = n3 === `textbf` && r2 === `textit` ? `BoldItalic` : n3 === `textbf` ? `Bold` : r2 === i2(509) ? `Italic` : `Regular`, a2 + `-` + o2;
}, Yt = { mathbf: { variant: e(943), fontName: `Main-Bold` }, mathrm: { variant: `normal`, fontName: e(366) }, textit: { variant: e(448), fontName: `Main-Italic` }, mathit: { variant: e(448), fontName: `Main-Italic` }, mathnormal: { variant: `italic`, fontName: `Math-Italic` }, mathsfit: { variant: `sans-serif-italic`, fontName: `SansSerif-Italic` }, mathbb: { variant: e(990), fontName: `AMS-Regular` }, mathcal: { variant: `script`, fontName: e(526) }, mathfrak: { variant: `fraktur`, fontName: `Fraktur-Regular` }, mathscr: { variant: e(1046), fontName: `Script-Regular` }, mathsf: { variant: `sans-serif`, fontName: `SansSerif-Regular` }, mathtt: { variant: `monospace`, fontName: `Typewriter-Regular` } }, Xt = { vec: [e(957), 0.471, 0.714], oiintSize1: [`oiintSize1`, 0.957, 0.499], oiintSize2: [`oiintSize2`, 1.472, 0.659], oiiintSize1: [`oiiintSize1`, 1.304, 0.499], oiiintSize2: [`oiiintSize2`, 1.98, 0.659] }, Zt = function(t5, n3) {
  var r2 = e, [i2, a2, o2] = Xt[t5], s2 = Vt([r2(771)], [new Le([new Re(i2)], { width: A(a2), height: A(o2), style: `width:` + A(a2), viewBox: `0 0 ` + 1e3 * a2 + ` ` + 1e3 * o2, preserveAspectRatio: r2(380) })], n3);
  return s2.height = o2, s2.style[r2(769)] = A(o2), s2[r2(956)].width = A(a2), s2;
}, K = { number: 3, unit: `mu` }, Qt = { number: 4, unit: `mu` }, $t = { number: 5, unit: `mu` }, en = { mord: { mop: K, mbin: Qt, mrel: $t, minner: K }, mop: { mord: K, mop: K, mrel: $t, minner: K }, mbin: { mord: Qt, mop: Qt, mopen: Qt, minner: Qt }, mrel: { mord: $t, mop: $t, mopen: $t, minner: $t }, mopen: {}, mclose: { mop: K, mbin: Qt, mrel: $t, minner: K }, mpunct: { mord: K, mop: K, mrel: $t, mopen: K, mclose: K, mpunct: K, minner: K }, minner: { mord: K, mop: K, mbin: Qt, mrel: $t, mopen: K, mpunct: K, minner: K } }, tn = { mord: { mop: K }, mop: { mord: K, mop: K }, mbin: {}, mrel: {}, mopen: {}, mclose: { mop: K }, mpunct: {}, minner: { mop: K } }, nn = {}, rn = {}, an = {};
function q(t5) {
  for (var n3 = e, { type: r2, names: i2, props: a2, handler: o2, htmlBuilder: s2, mathmlBuilder: c2 } = t5, l2 = { type: r2, numArgs: a2[n3(893)], argTypes: a2[n3(602)], allowedInArgument: !!a2[n3(989)], allowedInText: !!a2.allowedInText, allowedInMath: a2.allowedInMath === void 0 ? true : a2.allowedInMath, numOptionalArgs: a2.numOptionalArgs || 0, infix: !!a2[n3(1011)], primitive: !!a2[n3(657)], handler: o2 }, u2 = 0; u2 < i2.length; ++u2) nn[i2[u2]] = l2;
  r2 && (s2 && (rn[r2] = s2), c2 && (an[r2] = c2));
}
function on(e3) {
  var { type: t5, htmlBuilder: n3, mathmlBuilder: r2 } = e3;
  q({ type: t5, names: [], props: { numArgs: 0 }, handler() {
    throw Error(hr(919));
  }, htmlBuilder: n3, mathmlBuilder: r2 });
}
var sn = function(e3) {
  return e3.type === `ordgroup` && e3.body.length === 1 ? e3.body[0] : e3;
}, J = function(e3) {
  return e3.type === `ordgroup` ? e3.body : [e3];
}, cn = /* @__PURE__ */ new Set([`leftmost`, `mbin`, `mopen`, `mrel`, `mop`, e(736)]), ln = /* @__PURE__ */ new Set([`rightmost`, `mrel`, `mclose`, `mpunct`]), un = { display: D.DISPLAY, text: D.TEXT, script: D.SCRIPT, scriptscript: D.SCRIPTSCRIPT }, dn = { mord: `mord`, mop: `mop`, mbin: `mbin`, mrel: `mrel`, mopen: e(1018), mclose: `mclose`, mpunct: `mpunct`, minner: `minner` }, fn = function(t5, n3, r2, i2) {
  var a2 = e;
  i2 === void 0 && (i2 = [null, null]);
  for (var o2 = [], s2 = 0; s2 < t5[a2(739)]; s2++) {
    var c2 = Y(t5[s2], n3);
    if (c2 instanceof Se) {
      var l2 = c2.children;
      o2.push(...l2);
    } else o2.push(c2);
  }
  if (zt(o2), !r2) return o2;
  var u2 = n3;
  if (t5.length === 1) {
    var d2 = t5[0];
    d2.type === `sizing` ? u2 = n3.havingSize(d2.size) : d2.type === a2(688) && (u2 = n3[a2(420)](un[d2.style]));
  }
  var f2 = W([i2[0] || `leftmost`], [], n3), p2 = W([i2[1] || `rightmost`], [], n3), m2 = r2 === `root`;
  return pn(o2, (e3, t6) => {
    var n4 = a2, r3 = t6.classes[0], i3 = e3.classes[0];
    r3 === `mbin` && ln[n4(1019)](i3) ? t6.classes[0] = n4(992) : i3 === `mbin` && cn.has(r3) && (e3[n4(906)][0] = `mord`);
  }, { node: f2 }, p2, m2), pn(o2, (e3, t6) => {
    var _a2, _b;
    var n4 = gn(t6), r3 = gn(e3), i3 = n4 && r3 ? e3.hasClass(`mtight`) ? (_a2 = tn[n4]) == null ? void 0 : _a2[r3] : (_b = en[n4]) == null ? void 0 : _b[r3] : null;
    if (i3) return qt(i3, u2);
  }, { node: f2 }, p2, m2), o2;
}, pn = function(t5, n3, r2, i2, a2) {
  var o2 = e;
  i2 && t5.push(i2);
  for (var s2 = 0; s2 < t5[o2(739)]; s2++) {
    var c2 = t5[s2], l2 = mn(c2);
    if (l2) {
      pn(l2.children, n3, r2, null, a2);
      continue;
    }
    var u2 = !c2.hasClass(`mspace`);
    if (u2) {
      var d2 = n3(c2, r2[o2(456)]);
      d2 && (r2.insertAfter ? r2.insertAfter(d2) : (t5[o2(647)](d2), s2++));
    }
    u2 ? r2.node = c2 : a2 && c2.hasClass(o2(296)) && (r2.node = W([`leftmost`])), r2.insertAfter = /* @__PURE__ */ ((e3) => (n4) => {
      t5[o2(457)](e3 + 1, 0, n4), s2++;
    })(s2);
  }
  i2 && t5.pop();
}, mn = function(t5) {
  var n3 = e;
  return t5 instanceof Se || t5 instanceof Ne || t5 instanceof Me && t5.hasClass(n3(1023)) ? t5 : null;
}, hn = function(t5, n3) {
  var r2 = e, i2 = mn(t5);
  if (i2) {
    var a2 = i2.children;
    if (a2.length) {
      if (n3 === r2(542)) return hn(a2[a2.length - 1], `right`);
      if (n3 === `left`) return hn(a2[0], `left`);
    }
  }
  return t5;
}, gn = function(e3, t5) {
  return e3 ? (t5 && (e3 = hn(e3, t5)), dn[e3.classes[0]] || null) : null;
}, _n = function(t5, n3) {
  var r2 = e, i2 = [`nulldelimiter`].concat(t5[r2(506)]());
  return W(n3.concat(i2));
}, Y = function(n3, r2, i2) {
  var a2 = e;
  if (!n3) return W();
  if (rn[n3[a2(953)]]) {
    var o2 = rn[n3[a2(953)]](n3, r2);
    if (i2 && r2[a2(1086)] !== i2[a2(1086)]) {
      o2 = W(r2.sizingClasses(i2), [o2], r2);
      var s2 = r2[a2(731)] / i2.sizeMultiplier;
      o2.height *= s2, o2.depth *= s2;
    }
    return o2;
  } else throw new t(a2(973) + n3.type + `'`);
};
function vn(t5, n3) {
  var r2 = e, i2 = W([r2(1002)], t5, n3), a2 = W([`strut`]);
  return a2.style.height = A(i2.height + i2[r2(882)]), i2.depth && (a2[r2(956)].verticalAlign = A(-i2[r2(882)])), i2[r2(406)].unshift(a2), i2;
}
function yn(t5, n3) {
  var r2 = e, i2 = null;
  t5.length === 1 && t5[0][r2(953)] === `tag` && (i2 = t5[0].tag, t5 = t5[0].body);
  var a2 = fn(t5, n3, `root`), o2;
  a2.length === 2 && a2[1].hasClass(`tag`) && (o2 = a2.pop());
  for (var s2 = [], c2 = [], l2 = 0; l2 < a2.length; l2++) if (c2.push(a2[l2]), a2[l2].hasClass(r2(593)) || a2[l2].hasClass(`mrel`) || a2[l2].hasClass(`allowbreak`)) {
    for (var u2 = false; l2 < a2.length - 1 && a2[l2 + 1][r2(634)](`mspace`) && !a2[l2 + 1][r2(634)](r2(296)); ) l2++, c2[r2(610)](a2[l2]), a2[l2].hasClass(`nobreak`) && (u2 = true);
    u2 || (s2.push(vn(c2, n3)), c2 = []);
  } else a2[l2].hasClass(`newline`) && (c2.pop(), c2.length > 0 && (s2[r2(610)](vn(c2, n3)), c2 = []), s2[r2(610)](a2[l2]));
  c2.length > 0 && s2.push(vn(c2, n3));
  var d2;
  i2 ? (d2 = vn(fn(i2, n3, true), n3), d2.classes = [`tag`], s2.push(d2)) : o2 && s2[r2(610)](o2);
  var f2 = W([`katex-html`], s2);
  if (f2.setAttribute(`aria-hidden`, `true`), d2) {
    var p2 = d2.children[0];
    p2.style.height = A(f2.height + f2[r2(882)]), f2.depth && (p2.style.verticalAlign = A(-f2.depth));
  }
  return f2;
}
function bn(e3) {
  return new Se(e3);
}
var X = class {
  constructor(t5, n3, r2) {
    var i2 = e;
    this.type = void 0, this[i2(853)] = void 0, this.children = void 0, this.classes = void 0, this[i2(953)] = t5, this.attributes = {}, this.children = n3 || [], this[i2(906)] = r2 || [];
  }
  setAttribute(e3, t5) {
    this.attributes[e3] = t5;
  }
  getAttribute(t5) {
    var n3 = e;
    return this[n3(853)][t5];
  }
  [e(645)]() {
    var t5 = e, n3 = document.createElementNS(`http://www.w3.org/1998/Math/MathML`, this.type);
    for (var r2 in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r2) && n3.setAttribute(r2, this.attributes[r2]);
    this.classes[t5(739)] > 0 && (n3.className = Ee(this.classes));
    for (var i2 = 0; i2 < this.children.length; i2++) if (this[t5(406)][i2] instanceof xn && this.children[i2 + 1] instanceof xn) {
      for (var a2 = this.children[i2].toText() + this.children[++i2].toText(); this.children[i2 + 1] instanceof xn; ) a2 += this.children[++i2].toText();
      n3.appendChild(new xn(a2).toNode());
    } else n3.appendChild(this.children[i2].toNode());
    return n3;
  }
  [e(1077)]() {
    var t5 = e, n3 = `<` + this[t5(953)];
    for (var r2 in this.attributes) Object.prototype.hasOwnProperty[t5(721)](this.attributes, r2) && (n3 += ` ` + r2 + `="`, n3 += o(this[t5(853)][r2]), n3 += `"`);
    this.classes.length > 0 && (n3 += ` class ="` + o(Ee(this[t5(906)])) + `"`), n3 += `>`;
    for (var i2 = 0; i2 < this.children.length; i2++) n3 += this.children[i2].toMarkup();
    return n3 += `</` + this.type + `>`, n3;
  }
  toText() {
    return this.children.map((e3) => e3.toText()).join(``);
  }
}, xn = class {
  constructor(e3) {
    this.text = void 0, this.text = e3;
  }
  toNode() {
    return document[e(572)](this.text);
  }
  [e(1077)]() {
    return o(this.toText());
  }
  toText() {
    return this.text;
  }
}, Sn = class {
  constructor(t5) {
    var n3 = e;
    this.width = void 0, this.character = void 0, this[n3(348)] = t5, t5 >= 0.05555 && t5 <= 0.05556 ? this[n3(800)] = `\u200A` : t5 >= 0.1666 && t5 <= 0.1667 ? this.character = `\u2009` : t5 >= 0.2222 && t5 <= 0.2223 ? this[n3(800)] = `\u2005` : t5 >= 0.2777 && t5 <= 0.2778 ? this.character = `\u2005\u200A` : t5 >= -0.05556 && t5 <= -0.05555 ? this.character = `\u200A\u2063` : t5 >= -0.1667 && t5 <= -0.1666 ? this.character = `\u2009\u2063` : t5 >= -0.2223 && t5 <= -0.2222 ? this.character = `\u205F\u2063` : t5 >= -0.2778 && t5 <= -0.2777 ? this[n3(800)] = `\u2005\u2063` : this[n3(800)] = null;
  }
  toNode() {
    var t5 = e;
    if (this.character) return document[t5(572)](this.character);
    var n3 = document.createElementNS(`http://www.w3.org/1998/Math/MathML`, `mspace`);
    return n3.setAttribute(`width`, A(this[t5(348)])), n3;
  }
  toMarkup() {
    return this.character ? `<mtext>` + this.character + `</mtext>` : `<mspace width="` + A(this.width) + `"/>`;
  }
  [e(1054)]() {
    return this.character ? this.character : ` `;
  }
}, Cn = /* @__PURE__ */ new Set([`\\imath`, `\\jmath`]), wn = /* @__PURE__ */ new Set([`mrow`, `mtable`]), Tn = function(t5, n3, r2) {
  var i2 = e;
  return j[n3][t5] && j[n3][t5].replace && t5.charCodeAt(0) !== 55349 && !(nt[i2(1029)](t5) && r2 && (r2.fontFamily && r2.fontFamily.slice(4, 6) === `tt` || r2.font && r2.font[i2(901)](4, 6) === `tt`)) && (t5 = j[n3][t5].replace), new xn(t5);
}, En = function(e3) {
  return e3.length === 1 ? e3[0] : new X(`mrow`, e3);
}, Dn = { mathit: e(448), boldsymbol: (e3) => e3.type === `textord` ? `bold` : `bold-italic`, mathbf: `bold`, mathbb: `double-struck`, mathsfit: e(1003), mathfrak: `fraktur`, mathscr: `script`, mathcal: `script`, mathsf: e(968), mathtt: `monospace` }, On = (t5, n3) => {
  var r2 = e;
  if (t5.mode === `text`) {
    if (n3.fontFamily === r2(750)) return `monospace`;
    if (n3.fontFamily === r2(516)) return n3.fontShape === `textit` && n3.fontWeight === `textbf` ? `sans-serif-bold-italic` : n3.fontShape === `textit` ? r2(1003) : n3.fontWeight === `textbf` ? `bold-sans-serif` : `sans-serif`;
    if (n3[r2(449)] === r2(509) && n3.fontWeight === `textbf`) return `bold-italic`;
    if (n3.fontShape === `textit`) return `italic`;
    if (n3.fontWeight === `textbf`) return `bold`;
  }
  var i2 = n3.font;
  if (!i2 || i2 === r2(570)) return null;
  var a2 = t5.mode, o2 = Dn[i2];
  if (o2) return typeof o2 == `function` ? o2(t5) : o2;
  var s2 = t5.text;
  if (Cn.has(s2)) return null;
  if (j[a2][s2]) {
    var c2 = j[a2][s2].replace;
    c2 && (s2 = c2);
  }
  var l2 = Yt[i2].fontName;
  return qe(s2, l2, a2) ? Yt[i2][r2(476)] : null;
};
function kn() {
  var e3 = [`\\notni`, `gullet`, `\\mathscr{E}`, `\\colorbox`, `align`, `Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).`, `\\vert`, `maxExpand`, `\\set`, `\\ddots`, `\\\\cdright`, `\\mathbb{C}`, `tags`, `\\succnsim`, `log`, `marginRight`, `leftDelim`, `body`, `LaTeX-incompatible input and strict mode is set to 'warn': `, `gather*`, `\\cr`, `\\begin`, `\\supe`, `\\rangle`, `\\circledS`, `call`, `\\\\cdleftarrow`, `value`, `\\ldots`, `\\xleftarrow`, `\\\\abovefrac`, `Invalid `, `class`, `3952272WlOTVt`, `rightharpoon`, `sizeMultiplier`, `textboldfrak`, `mover`, `Expected group as `, `expandNextToken`, `mpunct`, `M95,`, `\\textcolor{##edf2df}{#1}`, `length`, `\\textcircled`, `\\mho`, `globalGroup`, `\\stackrel`, `\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}`, `top`, `subDrop`, `&quot;`, `\\Vdash`, `lspace`, `texttt`, `Unknown group type as `, `\\mathrm{T}`, `\\it`, `op-symbol`, `-d, --display-mode`, `pmb`, `\\biggm`, `pos`, `fleqn`, `rightarrow`, `sqrtTall`, `o\u0303\u0301`, `round`, `\\vartheta`, `\\\\globallet`, `\\nsupseteqq`, `ordgroup`, ` H384z`, `height`, `\\dblcolon`, `overlay`, `verticalAlign`, `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`, `href`, `\\@ifstar\\@hspacer\\@hspace`, `\\eta`, `-S, --strict`, `SansSerif-Bold`, `align*`, `htmlmathml`, `\\Delta`, `reset-size`, `maxSize`, `munder`, `true`, `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`, `Expected node of type `, `arraystretch`, `\\end`, `Undefined control sequence: `, `rel`, `\\textcolor{##71B307}{#1}`, `isMiddle`, `\\cnums`, `|[\uFFFD-\uFFFD][\uFFFD-\uFFFD]`, `\\mathit`, `position`, `\\blueA`, `\\textstyle`, `character`, `\\url`, `\\hskip2em\\relax`, `\\gtrdot`, `Mismatched `, `mtr`, `alignat*`, `+0.1111em`, `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`, `mstyle`, `Expected a control sequence`, `fontName`, `undefStack`, `\\cfrac`, `\\leftharpoondown`, `defaultRuleThickness`, `\\edef`, `u\u0303\u0301`, `elem`, `charAt`, `\\smash{\\phantom{#1}}`, `internal`, `warn`, `\\html@mathml{\\@nleqslant}{\u2270}`, `\\imath`, `none`, `extend`, `leftright`, `\\html@mathml{\\@nsubseteqq}{\u2288}`, `fetch`, `5126832hjwPHy`, `textSize`, `\\\\atopfrac`, `\\big`, `settings`, `\\negthinspace`, `encoding`, `src`, `\\sup`, `\\nsim`, `\\Complex`, `right `, `callFunction`, `fboxrule`, `formatUnsupportedCmd`, `\\html@mathml{\\@nsupseteqq}{\u2289}`, `\\bullet`, `sizingClasses`, `M399995 0 h-120 V290 H0 v120 H400000z`, `split`, `0.22em`, `\\rfloor`, `alt`, `attributes`, `current`, `strut`, `isCharacterBox`, `LaTeX-incompatible input and strict mode is set to 'error': `, `sub`, `A\u030A\u0301`, `\\maroonB`, `\\bmod`, `mathVsTextUnits`, `future`, `25054866sYoYcq`, `xMinYMin slice`, `\\colonminus`, `replace`, `lexer`, `\\dagger`, `updiagonalstrike`, `mtable`, `Render display math flush left.`, `U\u0308\u0301`, `array`, `mroot`, `\\Box`, `LaTeX-incompatible input and strict mode is set to `, `hasBarLine`, "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}", `start`, `\\dot`, `depth`, `\\textbf`, `colorbox`, `\\mathclose`, `lefthook`, `Unknown stretchy delimiter.`, `\\Updownarrow`, `\\underrightarrow`, `isTrusted`, `lastIndex`, `keys`, `numArgs`, `100%`, `\\nleftarrow`, `options`, `pushTokens`, `atom`, `\\textcolor{##94fff5}{#1}`, `\\green`, `slice`, `---`, `mclass`, `sqrtMain`, `main`, `classes`, `cols`, `0em `, `solid `, `\\redD`, `Double superscript`, `0em`, `\\thicksim`, `url`, `\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}`, `\\AA`, `equation`, `\\ae`, `Should never be called.`, `\u03C5\u0308\u0301`, `\\longrightarrow`, `rightarrowabovebar`, "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}", ` style="`, `line`, `\\acute`, `\\@varsupsetneqq`, `rightgroup`, `o\u0304\u0300`, `\\html@mathml{\\@imath}{\u0131}`, `\\textbraceleft`, `\\textcolor{##f9685d}{#1}`, `textboldsf`, `havingCrampedStyle`, `\\dotsi`, `expandAfterFuture`, `\\sqsubset`, `test`, `' with no arguments`, `\\Eqcolon`, `nobreak`, `alwaysHandleSupSub`, `bold`, `\\tag@literal{({#1})}`, `mathtt`, `': `, `macros`, `\\df@tag`, `\\eqcolon`, `concat`, `\\mathring`, `\\implies`, `type`, `\\ddag`, `lap`, `style`, `vec`, `alignat`, `large`, `freeze`, `parseExpression`, `\\ulcorner`, `quad`, `\\lfloor`, `mathVsTextAccents`, `\\varPi`, `separator`, `sans-serif`, `O\u0307\u0304`, `small`, `charCodeAt`, `\\htmlData`, `Got group of unknown type: '`, `strict`, `Typewriter`, `kern`, `label`, `\\ldots\\,`, `\\widetilde`, `4392234ZuIdag`, `delimsizinginner`, `\\textdegree`, `subscript`, `\\blueB`, `\\urcorner`, `\\huge`, `61UiYIkP`, `math`, `allowedInArgument`, `double-struck`, `\\mathscr{F}`, `mord`, ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`, `Invalid positionType `, `textShadow`, `_getExpansion`, `createElement`, `middle`, `endGroups`, `scriptlevel`, `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`, `base`, `sans-serif-italic`, `borderColor`, `\\rbrace`, `withFont`, `\\barwedge`, ` solid `, `H742z`, `\\href`, `infix`, `\\dashleftarrow`, `\\dotsc`, `switchMode`, `linethickness`, `withColor`, `U\u0308\u0304`, `mopen`, `has`, `\\html@mathml{\\@varsubsetneqq}{\u2ACB}`, `\\rightarrow`, `\\int`, `enclosing`, `parentIsSupSub`, `\\supseteq`, `\\mathrm{P}`, `backgroundColor`, `useStrictBehavior`, `hasOwnProperty`, `overline`, `sqrtSize`, `\u03B9\u0308\u0301`, `text`, `fence`, `{\\angl n}`, `blocks`, `[ \r
	]`, `trust`, `munderover`, `h400000v`, `\\rBrace`, `\\newcommand's first argument must be a macro name`, `minsize`, `\\coloncolonminus`, `\\textcolor{##e3e5e6}{#1}`, `script`, `\\checkmark`, `\\mintA`, `left`, `cdlabel`, `consume`, `Infinity`, `msub`, `toText`, `stretchy`, `: '`, `fontMetrics`, `beginGroup`, `\\@gvertneqq`, `rightharpoonaboveshortbar`, `treatAsRelax`, `\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}`, `\\textcolor{##11accd}{#1}`, `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`, `tag`, `symbol`, `\\wp`, `\\purpleA`, `cd-vert-arrow`, `vlist`, `\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}`, `borderRightWidth`, `\\notin`, `delim`, `\\\\cdlongequal`, `rparen`, `toMarkup`, `\\ntrianglerighteq`, `handleInfixNodes`, `\\tealA`, `\\surd`, `punct`, `\\sube`, `\\parallel`, `longequal`, `size`, `setCatcode`, `colSeparationType`, `inner`, `processor`, `newline`, `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`, `\\nLeftarrow`, `M424,`, `\\htmlStyle`, `includegraphics`, `E\u0304\u0301`, `\\mathrm{O}`, `\\@firstoftwo`, `expansionCount`, `original`, `isDashed`, `limits`, `widehat`, `mspace`, `color`, ` alt="`, `\\mathrm{Z}`, `\\DOTSB\\operatorname*{arg\\,max}`, "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}", `dimension`, `\\plim`, `Invalid attribute name '`, `voffset`, `\\lbrack`, `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`, `\\nleqslant`, `\\gdef`, `3.0em`, `halfarrow-left`, `verb`, `leftharpoon`, `operatorname`, `\\doublecap`, `katex`, `display`, `\\simcolon`, `mathsf`, `mrel`, `\\grave`, `\\ngtr`, `\\Iota`, `\\Bbb`, `font`, `mfrac`, `\\varinjlim`, `cramp`, `\\Sigma`, `rbrack`, `\\fbox`, `vcenter`, `pop`, `width`, `\\rbrack`, `Extra }`, `\\exists`, `\\textcolor{##ff00af}{#1}`, `\\hookrightarrow`, `smallmatrix`, `\\precneqq`, `end`, `string`, `unrecognized '`, `Missing a `, `M319 602 V0 H403 V602 v`, `\\mathrlap`, `setAttribute`, `\\gt`, `\\DOTSB\\;\\Longleftrightarrow\\;`, `\\tfrac`, `Main-Regular`, `TEXT`, `displayMode`, `textord`, `phantom`, `\\DOTSB\\operatorname*{\\underrightarrow{lim}}`, `width:`, `toLowerCase`, `metrics`, `axisHeight`, `formLigatures`, `\\bigvee`, `\\Vert`, `\\uparrow`, `xMinYMin`, `\\rArr`, `\\operatorname`, `sup1`, `\\mathfrak{Z}`, `throwOnError`, `sqrt`, `\\subsetneqq`, `\\widecheck`, `rowspacing`, `_relative`, `\\nobreakspace`, `mop`, `\\Rightarrow`, `If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large`, `\\sdot`, `accentUnder`, `accent`, `havingBaseStyle`, `\\futurelet`, `left `, `\\textcolor{##3b3e40}{#1}`, `\\@char has non-numeric argument `, `\\qquad`, `\\nu`, `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`, `children`, `range`, `\\notag`, `tokens`, `\\html@mathml{\\@gvertneqq}{\u2269}`, `notation`, `\\Finv`, `minRuleThickness`, `\\negmedspace`, `superscript`, `\\greenD`, `\\oiint`, `\\@nsupseteqq`, `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`, `havingStyle`, `expect`, `U\u0308\u030C`, `environment`, `shift`, `\\vcenter`, `cramped`, `0123456789!@*()-=+";:?/.,`, `appendChild`, `catcodes`, `expandMacroAsText`, `\\textcolor{gray}{#1}`, `\\frac`, `Unsupported symbol `, `map`, `\\sqcap`, `' in style '`, `rightgroupunder`, `genfrac`, `exec`, `\\let`, `\\bra`, `arraycolsep`, `\\aleph`, `\\bigcup`, `\\upsilon`, `\\precnapprox`, `\\textasciitilde`, `italic`, `fontShape`, `\\quad`, ` v602 h84z
M347 1759 V0 h-84 V1759 v`, `0px`, `\\varLambda`, `Size4-Regular`, `1548862sthWAT`, `node`, `splice`, `" used in math mode`, `consumeArg`, `\\varepsilon`, `\\maltese`, `\\Phi`, `phase`, `leftlinesegment`, `\\underbar`, `equation*`, `marginTop`, `fromCharCode`, `op-limits`, `EOF`, `name`, `node of type `, `parseColorGroup`, `for '`, `isBlank`, `variant`, `max`, `\\Bbbk`, `vlist-r`, `\\cdot`, `\\Mu`, `color-token`, `-b, --color-is-text-color`, `\\gggtr`, `\\textquoteright`, `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`, `\\sqsupset`, `nextToken`, `trim`, `\\nabla`, `\\xleftequilibrium`, `supsub`, `includes`, `} attempting to redefine `, `\\textcolor{##ffbde0}{#1}`, `\\dotsx`, `mclose`, `funcName`, `popToken`, `horizBrace`, `\\grayB`, `parser`, `\\shortparallel`, `\\mathbb{R}`, `boxpad`, `baseSizingClasses`, `endGroup`, `\\mathscr{H}`, `textit`, `\\upharpoonright`, `\\DOTSB\\operatorname*{\\underline{lim}}`, `A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.`, `parseRegexGroup`, `mode`, `\\xhookrightarrow`, `textsf`, `bin`, `\\htmlClass`, `SCRIPTSCRIPT`, `\\hat`, `\\relax`, `sup`, `
c3.3,-7.3,9.3,-11,18,-11 H400000v`, `\\ddot`, `minner`, `Caligraphic-Regular`, `isOver`, `\\angl`, `\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}`, `\\mathrel`, `\\backslash`, `positionData`, `smashHeight`, `\\binom`, ` class="`, `min`, `&#x27;`, `substring`, `rightColor`, `\\intop`, `borderWidth`, `right`, `tokenRegex`, `M40 281 V428 H0 V94 H40 V241 H400000 v40z`, `2652245iduyql`, `x-arrow`, `\\fcolorbox`, `\\mathfrak{C}`, `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`, `Unknown column alignment: `, `mathvariant`, `join`, `M347 1759 V0 H0 V84 H263 V1759 v`, `close`, `$&\u0332`, `\\mathfrak`, `\\square`, `\\ll`, `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`, `output`, `below`, `\\copyright`, `\\bigcap`, `\\darr`, `\\oiiint`, `\\otimes`, `\\textcolor{##ccfaff}{#1}`, `\\minuscoloncolon`, `Size1-Regular`, `mathnormal`, `\\sphericalangle`, `createTextNode`, `E\u0327\u0306`, `\u03B9\u0308\u0300`, `\\upharpoonleft`, `LaTeX's \\sout works only in text mode`, `ptPerEm`, `root`, `raw`, `thinbox`, `isShifty`, `\\dotsb`, `\\Overrightarrow`, `\\bigwedge`, `s\u030C\u0307`, `\\tmspace`, `getColor`, `\\mathit{\\Delta}`, `lex`, `8QZJysl`, `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`, `\\@nleqslant`, `mbin`, `handler`, `\\begingroup`, `expandTokens`, `xMaxYMin`, `parseStringGroup`, `\\lvertneqq`, `maxFontSize`, "\\char` missing argument", `argTypes`, `\xD0\xDE\xFE`, `toString`, ` v1759 h84z`, `\\llbracket`, `application/x-tex`, `\\xtwoheadrightarrow`, `\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}`, `push`, `mrow`, `M145 15 v585 v`, `stack`, `leftright-right`, `builtins`, `\\normalsize`, ` mode`, `\\varPsi`, `enclose`, `\\supsetneqq`, `\\nRightarrow`, `parseAtom`, `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`, `postgap`, `\\html@mathml{\\@varsupsetneqq}{\u2ACC}`, `textEnv`, `Invalid number of arguments: `, `Can't use function '`, `\\iint`, `family`, `withPhantom`, `getAttribute`, `\\downharpoonright`, `hasClass`, `\\mathit{\\Psi}`, `Size`, `M367 0 H410 V`, `consumeArgs`, `
c4.7,-7.3,11,-11,19,-11
H40000v`, `\\yen`, `Unrecognized infix genfrac command`, `\\textcolor{##21242c}{#1}`, `\\footnotesize`, `\\textcolor{##626569}{#1}`, `toNode`, `\\infin`, `unshift`, `mathit`, `\\breve`, `34192jXDams`, `\\Lsh`, `unit`, `\\textcolor{##9e034e}{#1}`, `0.17em`, `' in \\includegraphics.`, `\\Gamma`, `primitive`, `\\to`, `\\not`, `individualShift`, `\\Leftrightarrow`, `boolean`, `consumeSpaces`, ` and font size `, `dashed `, `hbox`, ` digit `, `noexpand`, `\\underline`, `\\Lambda`, `\\dddot`, `loc`, `\\bigcirc`, `\\rVert`, `\\vartriangle`, `numer`, `rspace`, `anglpad`, `o\u0304\u0301`, `none `, `leftbrace`, `prototype`, `feed`, `\\heartsuit`, `mphantom`, `DISPLAY`, `star`, `styling`, `positionType`, `\\neq`, `\\html@mathml{\\@ngeqq}{\u2271}`, `\\leftrightarrow`, `\\lt`, `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`, `\\nolimits`];
  return kn = function() {
    return e3;
  }, kn();
}
function An(t5) {
  var n3 = e;
  if (!t5) return false;
  if (t5.type === `mi` && t5.children.length === 1) {
    var r2 = t5[n3(406)][0];
    return r2 instanceof xn && r2[n3(1033)] === `.`;
  } else if (t5.type === `mo` && t5.children.length === 1 && t5.getAttribute(`separator`) === `true` && t5.getAttribute(`lspace`) === `0em` && t5.getAttribute(`rspace`) === n3(912)) {
    var i2 = t5[n3(406)][0];
    return i2 instanceof xn && i2.text === `,`;
  } else return false;
}
var jn = function(t5, n3, r2) {
  var i2 = e;
  if (t5.length === 1) {
    var a2 = Z(t5[0], n3);
    return r2 && a2 instanceof X && a2.type === `mo` && (a2.setAttribute(`lspace`, `0em`), a2[i2(362)](`rspace`, `0em`)), [a2];
  }
  for (var o2 = [], s2, c2 = 0; c2 < t5.length; c2++) {
    var l2 = Z(t5[c2], n3);
    if (l2 instanceof X && s2 instanceof X) {
      if (l2.type === `mtext` && s2[i2(953)] === `mtext` && l2.getAttribute(`mathvariant`) === s2[i2(632)](`mathvariant`)) {
        s2.children[i2(610)](...l2[i2(406)]);
        continue;
      } else if (l2.type === `mn` && s2.type === `mn`) {
        s2.children.push(...l2.children);
        continue;
      } else if (An(l2) && s2.type === `mn`) {
        s2.children.push(...l2[i2(406)]);
        continue;
      } else if (l2.type === `mn` && An(s2)) l2.children = [...s2[i2(406)], ...l2.children], o2.pop();
      else if ((l2.type === `msup` || l2.type === i2(1053)) && l2.children.length >= 1 && (s2[i2(953)] === `mn` || An(s2))) {
        var u2 = l2.children[0];
        u2 instanceof X && u2.type === `mn` && (u2[i2(406)] = [...s2[i2(406)], ...u2.children], o2.pop());
      } else if (s2[i2(953)] === `mi` && s2.children.length === 1) {
        var d2 = s2.children[0];
        if (d2 instanceof xn && d2[i2(1033)] === `\u0338` && (l2[i2(953)] === `mo` || l2[i2(953)] === `mi` || l2.type === `mn`)) {
          var f2 = l2.children[0];
          f2 instanceof xn && f2.text.length > 0 && (f2.text = f2.text.slice(0, 1) + `\u0338` + f2.text.slice(1), o2.pop());
        }
      }
    }
    o2.push(l2), s2 = l2;
  }
  return o2;
}, Mn = function(e3, t5, n3) {
  return En(jn(e3, t5, n3));
}, Z = function(e3, n3) {
  if (!e3) return new X(`mrow`);
  if (an[e3.type]) return an[e3.type](e3, n3);
  throw new t(`Got group of unknown type: '` + e3.type + `'`);
};
function Nn(t5, n3, r2, i2, a2) {
  var o2 = e, s2 = jn(t5, r2), c2 = s2.length === 1 && s2[0] instanceof X && wn.has(s2[0].type) ? s2[0] : new X(`mrow`, s2), l2 = new X(`annotation`, [new xn(n3)]);
  l2.setAttribute(o2(836), o2(607));
  var u2 = new X(`math`, [new X(`semantics`, [c2, l2])]);
  return u2.setAttribute(`xmlns`, `http://www.w3.org/1998/Math/MathML`), i2 && u2.setAttribute(`display`, `block`), W([a2 ? `katex` : `katex-mathml`], [u2]);
}
var Pn = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]], Fn = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488], In = function(t5, n3) {
  return n3[e(1086)] < 2 ? t5 : Pn[t5 - 1][n3.size - 1];
}, Ln = class t2 {
  constructor(n3) {
    var r2 = e;
    this.style = void 0, this.color = void 0, this.size = void 0, this[r2(831)] = void 0, this[r2(370)] = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = n3.style, this.color = n3.color, this.size = n3.size || t2.BASESIZE, this.textSize = n3.textSize || this.size, this.phantom = !!n3.phantom, this.font = n3.font || ``, this.fontFamily = n3.fontFamily || ``, this.fontWeight = n3.fontWeight || ``, this[r2(449)] = n3[r2(449)] || ``, this.sizeMultiplier = Fn[this.size - 1], this.maxSize = n3[r2(783)], this[r2(413)] = n3[r2(413)], this._fontMetrics = void 0;
  }
  extend(n3) {
    var r2 = e, i2 = { style: this.style, size: this.size, textSize: this.textSize, color: this.color, phantom: this.phantom, font: this[r2(339)], fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontShape: this.fontShape, maxSize: this.maxSize, minRuleThickness: this.minRuleThickness };
    return Object.assign(i2, n3), new t2(i2);
  }
  [e(420)](e3) {
    return this.style === e3 ? this : this.extend({ style: e3, size: In(this.textSize, e3) });
  }
  [e(934)]() {
    var t5 = e;
    return this[t5(420)](this[t5(956)].cramp());
  }
  havingSize(t5) {
    var n3 = e;
    return this[n3(1086)] === t5 && this.textSize === t5 ? this : this[n3(826)]({ style: this.style.text(), size: t5, textSize: t5, sizeMultiplier: Fn[t5 - 1] });
  }
  havingBaseStyle(e3) {
    e3 || (e3 = this.style.text());
    var n3 = In(t2.BASESIZE, e3);
    return this.size === n3 && this.textSize === t2.BASESIZE && this.style === e3 ? this : this.extend({ style: e3, size: n3 });
  }
  havingBaseSizing() {
    var t5 = e, n3;
    switch (this.style.id) {
      case 4:
      case 5:
        n3 = 3;
        break;
      case 6:
      case 7:
        n3 = 1;
        break;
      default:
        n3 = 6;
    }
    return this[t5(826)]({ style: this.style.text(), size: n3 });
  }
  withColor(e3) {
    return this.extend({ color: e3 });
  }
  withPhantom() {
    return this.extend({ phantom: true });
  }
  withFont(e3) {
    return this.extend({ font: e3 });
  }
  withTextFontFamily(e3) {
    return this.extend({ fontFamily: e3, font: `` });
  }
  withTextFontWeight(e3) {
    return this.extend({ fontWeight: e3, font: `` });
  }
  withTextFontShape(e3) {
    return this.extend({ fontShape: e3, font: `` });
  }
  sizingClasses(e3) {
    return e3.size === this.size ? [] : [`sizing`, `reset-size` + e3.size, `size` + this.size];
  }
  baseSizingClasses() {
    var n3 = e;
    return this.size === t2.BASESIZE ? [] : [`sizing`, n3(782) + this.size, `size` + t2.BASESIZE];
  }
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Ye(this.size)), this._fontMetrics;
  }
  getColor() {
    return this.phantom ? `transparent` : this.color;
  }
};
Ln.BASESIZE = 6;
var Rn = function(e3) {
  return new Ln({ style: e3.displayMode ? D.DISPLAY : D.TEXT, maxSize: e3.maxSize, minRuleThickness: e3.minRuleThickness });
}, zn = function(t5, n3) {
  var r2 = e;
  if (n3.displayMode) {
    var i2 = [`katex-display`];
    n3.leqno && i2.push(`leqno`), n3.fleqn && i2.push(r2(759)), t5 = W(i2, [t5]);
  }
  return t5;
}, Bn = function(e3, t5, n3) {
  var r2 = Rn(n3), i2;
  return n3.output === `mathml` ? Nn(e3, t5, r2, n3.displayMode, true) : (i2 = n3.output === `html` ? W([`katex`], [yn(e3, r2)]) : W([`katex`], [Nn(e3, t5, r2, n3.displayMode, false), yn(e3, r2)]), zn(i2, n3));
}, Vn = function(t5, n3, r2) {
  return zn(W([e(330)], [yn(t5, Rn(r2))]), r2);
}, Hn = { widehat: `^`, widecheck: `\u02C7`, widetilde: `~`, utilde: `~`, overleftarrow: `\u2190`, underleftarrow: `\u2190`, xleftarrow: `\u2190`, overrightarrow: `\u2192`, underrightarrow: `\u2192`, xrightarrow: `\u2192`, underbrace: `\u23DF`, overbrace: `\u23DE`, underbracket: `\u23B5`, overbracket: `\u23B4`, overgroup: `\u23E0`, undergroup: `\u23E1`, overleftrightarrow: `\u2194`, underleftrightarrow: `\u2194`, xleftrightarrow: `\u2194`, Overrightarrow: `\u21D2`, xRightarrow: `\u21D2`, overleftharpoon: `\u21BC`, xleftharpoonup: `\u21BC`, overrightharpoon: `\u21C0`, xrightharpoonup: `\u21C0`, xLeftarrow: `\u21D0`, xLeftrightarrow: `\u21D4`, xhookleftarrow: `\u21A9`, xhookrightarrow: `\u21AA`, xmapsto: `\u21A6`, xrightharpoondown: `\u21C1`, xleftharpoondown: `\u21BD`, xrightleftharpoons: `\u21CC`, xleftrightharpoons: `\u21CB`, xtwoheadleftarrow: `\u219E`, xtwoheadrightarrow: `\u21A0`, xlongequal: `=`, xtofrom: `\u21C4`, xrightleftarrows: `\u21C4`, xrightequilibrium: `\u21CC`, xleftequilibrium: `\u21CB`, "\\cdrightarrow": `\u2192`, "\\cdleftarrow": `\u2190`, "\\cdlongequal": `=` }, Un = function(t5) {
  var n3 = e, r2 = new X(`mo`, [new xn(Hn[t5.replace(/^\\/, ``)])]);
  return r2.setAttribute(n3(1055), `true`), r2;
}, Wn = { overrightarrow: [[e(760)], 0.888, 522, `xMaxYMin`], overleftarrow: [[`leftarrow`], 0.888, 522, e(380)], underrightarrow: [[`rightarrow`], 0.888, 522, `xMaxYMin`], underleftarrow: [[`leftarrow`], 0.888, 522, `xMinYMin`], xrightarrow: [[`rightarrow`], 1.469, 522, `xMaxYMin`], "\\cdrightarrow": [[`rightarrow`], 3, 522, `xMaxYMin`], xleftarrow: [[`leftarrow`], 1.469, 522, `xMinYMin`], "\\cdleftarrow": [[`leftarrow`], 3, 522, `xMinYMin`], Overrightarrow: [[`doublerightarrow`], 0.888, 560, `xMaxYMin`], xRightarrow: [[`doublerightarrow`], 1.526, 560, `xMaxYMin`], xLeftarrow: [[`doubleleftarrow`], 1.526, 560, `xMinYMin`], overleftharpoon: [[e(327)], 0.888, 522, `xMinYMin`], xleftharpoonup: [[`leftharpoon`], 0.888, 522, `xMinYMin`], xleftharpoondown: [[`leftharpoondown`], 0.888, 522, `xMinYMin`], overrightharpoon: [[`rightharpoon`], 0.888, 522, `xMaxYMin`], xrightharpoonup: [[e(730)], 0.888, 522, `xMaxYMin`], xrightharpoondown: [[`rightharpoondown`], 0.888, 522, `xMaxYMin`], xlongequal: [[e(1085)], 0.888, 334, `xMinYMin`], "\\cdlongequal": [[`longequal`], 3, 334, `xMinYMin`], xtwoheadleftarrow: [[`twoheadleftarrow`], 0.888, 334, e(380)], xtwoheadrightarrow: [[`twoheadrightarrow`], 0.888, 334, `xMaxYMin`], overleftrightarrow: [[`leftarrow`, `rightarrow`], 0.888, 522], overbrace: [[e(681), `midbrace`, `rightbrace`], 1.6, 548], underbrace: [[`leftbraceunder`, `midbraceunder`, `rightbraceunder`], 1.6, 548], underleftrightarrow: [[`leftarrow`, `rightarrow`], 0.888, 522], xleftrightarrow: [[`leftarrow`, `rightarrow`], 1.75, 522], xLeftrightarrow: [[`doubleleftarrow`, `doublerightarrow`], 1.75, 560], xrightleftharpoons: [[`leftharpoondownplus`, `rightharpoonplus`], 1.75, 716], xleftrightharpoons: [[`leftharpoonplus`, `rightharpoondownplus`], 1.75, 716], xhookleftarrow: [[`leftarrow`, `righthook`], 1.08, 522], xhookrightarrow: [[e(886), `rightarrow`], 1.08, 522], overlinesegment: [[e(464), `rightlinesegment`], 0.888, 522], underlinesegment: [[`leftlinesegment`, `rightlinesegment`], 0.888, 522], overbracket: [[`leftbracketover`, `rightbracketover`], 1.6, 440], underbracket: [[`leftbracketunder`, `rightbracketunder`], 1.6, 410], overgroup: [[`leftgroup`, e(928)], 0.888, 342], undergroup: [[`leftgroupunder`, e(437)], 0.888, 342], xmapsto: [[`leftmapsto`, `rightarrow`], 1.5, 522], xtofrom: [[`leftToFrom`, `rightToFrom`], 1.75, 528], xrightleftarrows: [[`baraboveleftarrow`, e(922)], 1.75, 901], xrightequilibrium: [[`baraboveshortleftharpoon`, e(1060)], 1.75, 716], xleftequilibrium: [[`shortbaraboveleftharpoon`, `shortrightharpoonabovebar`], 1.75, 716] }, Gn = /* @__PURE__ */ new Set([`widehat`, `widecheck`, `widetilde`, `utilde`]), Kn = function(t5, n3) {
  var r2 = e;
  function i2() {
    var e3 = hr, r3 = 4e5, i3 = t5.label[e3(901)](1);
    if (Gn.has(i3) && `base` in t5) {
      var a3 = t5.base.type === `ordgroup` ? t5.base.body.length : 1, o3, s3, c2;
      if (a3 > 5) i3 === `widehat` || i3 === `widecheck` ? (o3 = 420, r3 = 2364, c2 = 0.42, s3 = i3 + `4`) : (o3 = 312, r3 = 2340, c2 = 0.34, s3 = `tilde4`);
      else {
        var l2 = [1, 1, 2, 2, 3, 3][a3];
        i3 === e3(309) || i3 === `widecheck` ? (r3 = [0, 1062, 2364, 2364, 2364][l2], o3 = [0, 239, 300, 360, 420][l2], c2 = [0, 0.24, 0.3, 0.3, 0.36, 0.42][l2], s3 = i3 + l2) : (r3 = [0, 600, 1033, 2339, 2340][l2], o3 = [0, 260, 286, 306, 312][l2], c2 = [0, 0.26, 0.286, 0.3, 0.306, 0.34][l2], s3 = `tilde` + l2);
      }
      return { span: Vt([], [new Le([new Re(s3)], { width: `100%`, height: A(c2), viewBox: `0 0 ` + r3 + ` ` + o3, preserveAspectRatio: e3(825) })], n3), minWidth: 0, height: c2 };
    } else {
      var u2 = [], d2 = Wn[i3];
      if (!d2) throw Error(`No SVG data for "` + i3 + `".`);
      var [f2, p2, m2] = d2, h2 = m2 / 1e3, g2 = f2.length, _2, v2;
      if (g2 === 1) {
        if (d2[e3(739)] !== 4) throw Error(`Expected 4-tuple for single-path SVG data "` + i3 + `".`);
        _2 = [`hide-tail`], v2 = [d2[3]];
      } else if (g2 === 2) _2 = [e3(325), `halfarrow-right`], v2 = [`xMinYMin`, e3(597)];
      else if (g2 === 3) _2 = [`brace-left`, `brace-center`, `brace-right`], v2 = [`xMinYMin`, `xMidYMin`, `xMaxYMin`];
      else throw Error(`Correct katexImagesData or update code here to support
                    ` + g2 + ` children.`);
      for (var y2 = 0; y2 < g2; y2++) {
        var b2 = new Le([new Re(f2[y2])], { width: `400em`, height: A(h2), viewBox: `0 0 ` + r3 + ` ` + m2, preserveAspectRatio: v2[y2] + ` slice` }), x2 = Vt([_2[y2]], [b2], n3);
        if (g2 === 1) return { span: x2, minWidth: p2, height: h2 };
        x2.style.height = A(h2), u2.push(x2);
      }
      return { span: W([`stretchy`], u2, n3), minWidth: p2, height: h2 };
    }
  }
  var { span: a2, minWidth: o2, height: s2 } = i2();
  return a2[r2(769)] = s2, a2.style.height = A(s2), o2 > 0 && (a2.style.minWidth = A(o2)), a2;
}, qn = function(t5, n3, r2, i2, a2) {
  var o2 = e, s2, c2 = t5.height + t5.depth + r2 + i2;
  if (/fbox|color|angl/[o2(938)](n3)) {
    if (s2 = W([`stretchy`, n3], [], a2), n3 === `fbox`) {
      var l2 = a2.color && a2[o2(587)]();
      l2 && (s2[o2(956)].borderColor = l2);
    }
  } else {
    var u2 = [];
    /^[bx]cancel$/.test(n3) && u2.push(new ze({ x1: `0`, y1: `0`, x2: `100%`, y2: `100%`, "stroke-width": `0.046em` })), /^x?cancel$/.test(n3) && u2.push(new ze({ x1: `0`, y1: o2(894), x2: `100%`, y2: `0`, "stroke-width": `0.046em` })), s2 = Vt([], [new Le(u2, { width: `100%`, height: A(c2) })], a2);
  }
  return s2.height = c2, s2.style[o2(769)] = A(c2), s2;
}, Jn = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 }, Yn = { "accent-token": 1, mathord: 1, "op-token": 1, spacing: 1, textord: 1 };
function Xn(e3) {
  return e3 in Jn;
}
function Q(t5, n3) {
  var r2 = e;
  if (!t5 || t5.type !== n3) throw Error(r2(787) + n3 + `, but got ` + (t5 ? `node of type ` + t5[r2(953)] : String(t5)));
  return t5;
}
function Zn(t5) {
  var n3 = e, r2 = Qn(t5);
  if (!r2) throw Error(`Expected node of symbol group type, but got ` + (t5 ? n3(472) + t5.type : String(t5)));
  return r2;
}
function Qn(t5) {
  var n3 = e;
  return t5 && (t5[n3(953)] === `atom` || Yn[n3(1029)](t5.type)) ? t5 : null;
}
var $n = (t5) => {
  var n3 = e;
  if (t5 instanceof Ie) return t5;
  if (He(t5) && t5.children[n3(739)] === 1) return $n(t5.children[0]);
}, er = (t5, n3) => {
  var _a2;
  var r2 = e, i2, a2, o2;
  t5 && t5.type === r2(492) ? (a2 = Q(t5.base, `accent`), i2 = a2.base, t5[r2(1002)] = i2, o2 = Ve(Y(t5, n3)), t5[r2(1002)] = a2) : (a2 = Q(t5, `accent`), i2 = a2.base);
  var s2 = Y(i2, n3.havingCrampedStyle()), c2 = a2[r2(581)] && l(i2), u2 = 0;
  c2 && (u2 = ((_a2 = $n(s2)) == null ? void 0 : _a2.skew) ?? 0);
  var d2 = a2.label === `\\c`, f2 = d2 ? s2.height + s2.depth : Math.min(s2[r2(769)], n3.fontMetrics().xHeight), p2;
  if (a2.isStretchy) p2 = Kn(a2, n3), p2 = G({ positionType: `firstBaseline`, children: [{ type: r2(818), elem: s2 }, { type: `elem`, elem: p2, wrapperClasses: [`svg-align`], wrapperStyle: u2 > 0 ? { width: `calc(100% - ` + A(2 * u2) + `)`, marginLeft: A(2 * u2) } : void 0 }] });
  else {
    var m2, h2;
    a2[r2(977)] === `\\vec` ? (m2 = Zt(`vec`, n3), h2 = Xt.vec[1]) : (m2 = Lt({ type: `textord`, mode: a2.mode, text: a2.label }, n3, `textord`), m2 = Be(m2), m2.italic = 0, h2 = m2.width, d2 && (f2 += m2.depth)), p2 = W([`accent-body`], [m2]);
    var g2 = a2.label === `\\textcircled`;
    g2 && (p2.classes.push(`accent-full`), f2 = s2[r2(769)]);
    var _2 = u2;
    g2 || (_2 -= h2 / 2), p2.style.left = A(_2), a2[r2(977)] === `\\textcircled` && (p2[r2(956)].top = `.2em`), p2 = G({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: s2 }, { type: r2(976), size: -f2 }, { type: `elem`, elem: p2 }] });
  }
  var v2 = W([r2(992), `accent`], [p2], n3);
  return o2 ? (o2.children[0] = v2, o2.height = Math.max(v2.height, o2.height), o2.classes[0] = r2(992), o2) : v2;
}, tr = (e3, t5) => {
  var n3 = e3.isStretchy ? Un(e3.label) : new X(`mo`, [Tn(e3.label, e3.mode)]), r2 = new X(`mover`, [Z(e3.base, t5), n3]);
  return r2.setAttribute(`accent`, `true`), r2;
}, nr = new RegExp([`\\acute`, `\\grave`, `\\ddot`, `\\tilde`, `\\bar`, `\\breve`, `\\check`, `\\hat`, `\\vec`, `\\dot`, `\\mathring`].map((e3) => `\\` + e3)[e(552)](`|`));
q({ type: e(397), names: [e(926), e(335), `\\ddot`, `\\tilde`, `\\bar`, e(649), `\\check`, `\\hat`, `\\vec`, `\\dot`, `\\mathring`, `\\widecheck`, `\\widehat`, e(979), `\\overrightarrow`, `\\overleftarrow`, e(583), `\\overleftrightarrow`, `\\overgroup`, `\\overlinesegment`, `\\overleftharpoon`, `\\overrightharpoon`], props: { numArgs: 1 }, handler: (t5, n3) => {
  var r2 = e, i2 = sn(n3[0]), a2 = !nr[r2(938)](t5[r2(498)]), o2 = !a2 || t5.funcName === `\\widehat` || t5.funcName === `\\widetilde` || t5.funcName === r2(388);
  return { type: `accent`, mode: t5[r2(502)].mode, label: t5.funcName, isStretchy: a2, isShifty: o2, base: i2 };
}, htmlBuilder: er, mathmlBuilder: tr }), q({ type: `accent`, names: [`\\'`, "\\`", `\\^`, `\\~`, `\\=`, `\\u`, `\\.`, `\\"`, `\\c`, `\\r`, `\\H`, `\\v`, e(740)], props: { numArgs: 1, allowedInText: true, allowedInMath: true, argTypes: [`primitive`] }, handler: (t5, n3) => {
  var r2 = e, i2 = n3[0], a2 = t5[r2(502)].mode;
  return a2 === `math` && (t5.parser[r2(834)].reportNonstrict(r2(965), `LaTeX's accent ` + t5.funcName + ` works only in text mode`), a2 = r2(1033)), { type: `accent`, mode: a2, label: t5[r2(498)], isStretchy: false, isShifty: true, base: i2 };
}, htmlBuilder: er, mathmlBuilder: tr }), q({ type: e(396), names: [`\\underleftarrow`, e(889), `\\underleftrightarrow`, `\\undergroup`, `\\underlinesegment`, `\\utilde`], props: { numArgs: 1 }, handler: (t5, n3) => {
  var r2 = e, { parser: i2, funcName: a2 } = t5, o2 = n3[0];
  return { type: r2(396), mode: i2.mode, label: a2, base: o2 };
}, htmlBuilder: (t5, n3) => {
  var r2 = e, i2 = Y(t5[r2(1002)], n3), a2 = Kn(t5, n3), o2 = t5[r2(977)] === `\\utilde` ? 0.12 : 0;
  return W([`mord`, `accentunder`], [G({ positionType: r2(745), positionData: i2.height, children: [{ type: `elem`, elem: a2, wrapperClasses: [`svg-align`] }, { type: `kern`, size: o2 }, { type: `elem`, elem: i2 }] })], n3);
}, mathmlBuilder: (t5, n3) => {
  var r2 = e, i2 = Un(t5.label), a2 = new X(`munder`, [Z(t5[r2(1002)], n3), i2]);
  return a2[r2(362)](`accentunder`, `true`), a2;
} });
var rr = (t5) => {
  var n3 = e, r2 = new X(`mpadded`, t5 ? [t5] : []);
  return r2.setAttribute(`width`, `+0.6em`), r2.setAttribute(n3(749), `0.3em`), r2;
};
q({ type: `xArrow`, names: [e(725), `\\xrightarrow`, `\\xLeftarrow`, `\\xRightarrow`, `\\xleftrightarrow`, `\\xLeftrightarrow`, `\\xhookleftarrow`, e(515), `\\xmapsto`, `\\xrightharpoondown`, `\\xrightharpoonup`, `\\xleftharpoondown`, `\\xleftharpoonup`, `\\xrightleftharpoons`, `\\xleftrightharpoons`, `\\xlongequal`, e(608), `\\xtwoheadleftarrow`, `\\xtofrom`, `\\xrightleftarrows`, `\\xrightequilibrium`, e(491), `\\\\cdrightarrow`, `\\\\cdleftarrow`, `\\\\cdlongequal`], props: { numArgs: 1, numOptionalArgs: 1 }, handler(e3, t5, n3) {
  var { parser: r2, funcName: i2 } = e3;
  return { type: `xArrow`, mode: r2.mode, label: i2, body: t5[0], below: n3[0] };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = n3.style, a2 = n3.havingStyle(i2.sup()), o2 = Gt(Y(t5.body, a2, n3), n3), s2 = t5[r2(977)][r2(901)](0, 2) === `\\x` ? `x` : `cd`;
  o2.classes[r2(610)](s2 + `-arrow-pad`);
  var c2;
  t5.below && (a2 = n3.havingStyle(i2.sub()), c2 = Gt(Y(t5[r2(561)], a2, n3), n3), c2.classes.push(s2 + `-arrow-pad`));
  var l2 = Kn(t5, n3), u2 = -n3.fontMetrics().axisHeight + 0.5 * l2.height, d2 = -n3.fontMetrics().axisHeight - 0.5 * l2[r2(769)] - 0.111;
  (o2.depth > 0.25 || t5.label === `\\xleftequilibrium`) && (d2 -= o2[r2(882)]);
  var f2;
  if (c2) {
    var p2 = -n3.fontMetrics().axisHeight + c2[r2(769)] + 0.5 * l2[r2(769)] + 0.111;
    f2 = G({ positionType: `individualShift`, children: [{ type: `elem`, elem: o2, shift: d2 }, { type: `elem`, elem: l2, shift: u2, wrapperClasses: [`svg-align`] }, { type: r2(818), elem: c2, shift: p2 }] });
  } else f2 = G({ positionType: `individualShift`, children: [{ type: `elem`, elem: o2, shift: d2 }, { type: `elem`, elem: l2, shift: u2, wrapperClasses: [`svg-align`] }] });
  return W([`mrel`, r2(546)], [f2], n3);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = Un(t5.label);
  i2.setAttribute(`minsize`, t5.label.charAt(0) === `x` ? `1.75em` : r2(324));
  var a2;
  if (t5.body) {
    var o2 = rr(Z(t5.body, n3));
    a2 = t5.below ? new X(`munderover`, [i2, rr(Z(t5.below, n3)), o2]) : new X(r2(733), [i2, o2]);
  } else t5.below ? a2 = new X(r2(784), [i2, rr(Z(t5.below, n3))]) : (a2 = rr(), a2 = new X(`mover`, [i2, a2]));
  return a2;
} });
function ir(t5, n3) {
  var r2 = fn(t5[e(713)], n3, true);
  return W([t5.mclass], r2, n3);
}
function ar(t5, n3) {
  var r2 = e, i2, a2 = jn(t5.body, n3);
  return t5.mclass === `minner` ? i2 = new X(`mpadded`, a2) : t5[r2(903)] === `mord` ? t5[r2(856)] ? (i2 = a2[0], i2.type = `mi`) : i2 = new X(`mi`, a2) : (t5.isCharacterBox ? (i2 = a2[0], i2.type = `mo`) : i2 = new X(`mo`, a2), t5.mclass === `mbin` ? (i2.attributes.lspace = r2(850), i2.attributes[r2(677)] = `0.22em`) : t5.mclass === r2(736) ? (i2.attributes.lspace = `0em`, i2.attributes.rspace = r2(654)) : t5.mclass === `mopen` || t5[r2(903)] === `mclose` ? (i2.attributes.lspace = `0em`, i2.attributes.rspace = `0em`) : t5[r2(903)] === `minner` && (i2.attributes.lspace = `0.0556em`, i2.attributes[r2(348)] = r2(807))), i2;
}
q({ type: `mclass`, names: [`\\mathord`, `\\mathbin`, e(530), `\\mathopen`, e(885), `\\mathpunct`, `\\mathinner`], props: { numArgs: 1, primitive: true }, handler(e3, t5) {
  var { parser: n3, funcName: r2 } = e3, i2 = t5[0];
  return { type: `mclass`, mode: n3.mode, mclass: `m` + r2.slice(5), body: J(i2), isCharacterBox: l(i2) };
}, htmlBuilder: ir, mathmlBuilder: ar });
var or = (t5) => {
  var n3 = e, r2 = t5.type === `ordgroup` && t5.body.length ? t5.body[0] : t5;
  return r2.type === `atom` && (r2.family === `bin` || r2[n3(630)] === `rel`) ? `m` + r2[n3(630)] : `mord`;
};
q({ type: `mclass`, names: [`\\@binrel`], props: { numArgs: 2 }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5;
  return { type: `mclass`, mode: i2[r2(514)], mclass: or(n3[0]), body: J(n3[1]), isCharacterBox: l(n3[1]) };
} }), q({ type: `mclass`, names: [`\\stackrel`, `\\overset`, `\\underset`], props: { numArgs: 2 }, handler(t5, n3) {
  var r2 = e, { parser: i2, funcName: a2 } = t5, o2 = n3[1], s2 = n3[0], c2 = a2 === `\\stackrel` ? `mrel` : or(o2), u2 = { type: `op`, mode: o2.mode, limits: true, alwaysHandleSupSub: true, parentIsSupSub: false, symbol: false, suppressBaseShift: a2 !== r2(743), body: J(o2) }, d2 = { type: `supsub`, mode: s2.mode, base: u2, sup: a2 === `\\underset` ? null : s2, sub: a2 === `\\underset` ? s2 : null };
  return { type: `mclass`, mode: i2.mode, mclass: c2, body: [d2], isCharacterBox: l(d2) };
}, htmlBuilder: ir, mathmlBuilder: ar }), q({ type: `pmb`, names: [`\\pmb`], props: { numArgs: 1, allowedInText: true }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5;
  return { type: r2(756), mode: i2.mode, mclass: or(n3[0]), body: J(n3[0]) };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = fn(t5.body, n3, true), a2 = W([t5.mclass], i2, n3);
  return a2.style[r2(995)] = `0.02em 0.01em 0.04px`, a2;
}, mathmlBuilder(e3, t5) {
  var n3 = new X(`mstyle`, jn(e3.body, t5));
  return n3.setAttribute(`style`, `text-shadow: 0.02em 0.01em 0.04px`), n3;
} });
var sr = { ">": `\\\\cdrightarrow`, "<": e(722), "=": e(1075), A: `\\uparrow`, V: `\\downarrow`, "|": `\\Vert`, ".": `no arrow` }, cr = () => ({ type: e(688), body: [], mode: `math`, style: e(331), resetFont: true }), lr = (t5) => t5.type === `textord` && t5[e(1033)] === `@`, ur = (t5, n3) => (t5[e(953)] === `mathord` || t5.type === e(898)) && t5.text === n3;
function dr(t5, n3, r2) {
  var i2 = e, a2 = sr[t5];
  switch (a2) {
    case `\\\\cdrightarrow`:
    case i2(722):
      return r2.callFunction(a2, [n3[0]], [n3[1]]);
    case i2(379):
    case `\\downarrow`:
      var o2 = r2.callFunction(`\\\\cdleft`, [n3[0]], []), s2 = { type: `atom`, text: a2, mode: i2(988), family: i2(791) }, c2 = { type: `ordgroup`, mode: `math`, body: [o2, r2.callFunction(`\\Big`, [s2], []), r2.callFunction(i2(706), [n3[1]], [])] };
      return r2[i2(842)](`\\\\cdparent`, [c2], []);
    case i2(1075):
      return r2.callFunction(`\\\\cdlongequal`, [], []);
    case `\\Vert`:
      return r2.callFunction(`\\Big`, [{ type: `textord`, text: `\\Vert`, mode: `math` }], []);
    default:
      return { type: `textord`, text: ` `, mode: `math` };
  }
}
function fr(n3) {
  var r2 = e, i2 = [];
  for (n3[r2(697)].beginGroup(), n3.gullet[r2(947)].set(r2(716), `\\\\\\relax`), n3.gullet.beginGroup(); ; ) {
    i2.push(n3.parseExpression(false, `\\\\`)), n3.gullet.endGroup(), n3.gullet.beginGroup();
    var a2 = n3[r2(829)]().text;
    if (a2 === `&` || a2 === `\\\\`) n3[r2(1051)]();
    else if (a2 === r2(789)) {
      i2[i2.length - 1].length === 0 && i2[r2(347)]();
      break;
    } else throw new t(`Expected \\\\ or \\cr or \\end`, n3.nextToken);
  }
  for (var o2 = [], s2 = [o2], c2 = 0; c2 < i2[r2(739)]; c2++) {
    for (var l2 = i2[c2], u2 = cr(), d2 = 0; d2 < l2.length; d2++) if (!lr(l2[d2])) u2.body.push(l2[d2]);
    else {
      o2[r2(610)](u2), d2 += 1;
      var f2 = Zn(l2[d2])[r2(1033)], p2 = [, ,];
      if (p2[0] = { type: `ordgroup`, mode: `math`, body: [] }, p2[1] = { type: r2(767), mode: `math`, body: [] }, !`=|.`.includes(f2)) if (`<>AV`.includes(f2)) for (var m2 = 0; m2 < 2; m2++) {
        for (var h2 = true, g2 = d2 + 1; g2 < l2.length; g2++) {
          if (ur(l2[g2], f2)) {
            h2 = false, d2 = g2;
            break;
          }
          if (lr(l2[g2])) throw new t(`Missing a ` + f2 + ` character to complete a CD arrow.`, l2[g2]);
          p2[m2].body.push(l2[g2]);
        }
        if (h2) throw new t(r2(359) + f2 + ` character to complete a CD arrow.`, l2[d2]);
      }
      else throw new t(`Expected one of "<>AV=|." after @`, l2[d2]);
      var _2 = { type: `styling`, body: [dr(f2, p2, n3)], mode: r2(988), style: `display`, resetFont: true };
      o2[r2(610)](_2), u2 = cr();
    }
    c2 % 2 == 0 ? o2.push(u2) : o2.shift(), o2 = [], s2.push(o2);
  }
  return n3.gullet.endGroup(), n3.gullet.endGroup(), { type: r2(874), mode: `math`, body: s2, arraystretch: 1, addJot: true, rowGaps: [null], cols: Array(s2[0].length).fill({ type: `align`, align: `c`, pregap: 0.25, postgap: 0.25 }), colSeparationType: `CD`, hLinesBeforeRow: Array(s2[r2(739)] + 1).fill([]) };
}
q({ type: e(1050), names: [`\\\\cdleft`, `\\\\cdright`], props: { numArgs: 1 }, handler(t5, n3) {
  var r2 = e, { parser: i2, funcName: a2 } = t5;
  return { type: `cdlabel`, mode: i2[r2(514)], side: a2.slice(4), label: n3[0] };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = n3.havingStyle(n3.style[r2(522)]()), a2 = Gt(Y(t5[r2(977)], i2, n3), n3);
  return a2.classes.push(`cd-label-` + t5.side), a2.style.bottom = A(0.8 - a2.depth), a2.height = 0, a2.depth = 0, a2;
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = new X(`mrow`, [Z(t5.label, n3)]);
  return i2 = new X(`mpadded`, [i2]), i2[r2(362)](r2(348), `0`), t5.side === r2(1049) && i2[r2(362)](`lspace`, `-1width`), i2.setAttribute(`voffset`, `0.7em`), i2 = new X(`mstyle`, [i2]), i2.setAttribute(`displaystyle`, `false`), i2.setAttribute(`scriptlevel`, `1`), i2;
} }), q({ type: `cdlabelparent`, names: [`\\\\cdparent`], props: { numArgs: 1 }, handler(e3, t5) {
  var { parser: n3 } = e3;
  return { type: `cdlabelparent`, mode: n3.mode, fragment: t5[0] };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = Gt(Y(t5.fragment, n3), n3);
  return i2.classes.push(r2(1069)), i2;
}, mathmlBuilder(e3, t5) {
  return new X(`mrow`, [Z(e3.fragment, t5)]);
} }), q({ type: `textord`, names: [`\\@char`], props: { numArgs: 1, allowedInText: true }, handler(n3, r2) {
  for (var i2 = e, { parser: a2 } = n3, o2 = Q(r2[0], i2(767)).body, s2 = ``, c2 = 0; c2 < o2[i2(739)]; c2++) {
    var l2 = Q(o2[c2], i2(369));
    s2 += l2.text;
  }
  var u2 = parseInt(s2), d2;
  if (isNaN(u2)) throw new t(i2(402) + s2);
  if (u2 < 0 || u2 >= 1114111) throw new t(`\\@char with invalid code point ` + s2);
  return u2 <= 65535 ? d2 = String.fromCharCode(u2) : (u2 -= 65536, d2 = String.fromCharCode((u2 >> 10) + 55296, (u2 & 1023) + 56320)), { type: `textord`, mode: a2[i2(514)], text: d2 };
} });
var pr = (t5, n3) => Wt(fn(t5[e(713)], n3.withColor(t5.color), false)), mr = (t5, n3) => {
  var r2 = e, i2 = new X(`mstyle`, jn(t5.body, n3.withColor(t5.color)));
  return i2.setAttribute(`mathcolor`, t5[r2(311)]), i2;
};
q({ type: `color`, names: [`\\textcolor`], props: { numArgs: 2, allowedInText: true, argTypes: [`color`, `original`] }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5, a2 = Q(n3[0], `color-token`).color, o2 = n3[1];
  return { type: `color`, mode: i2[r2(514)], color: a2, body: J(o2) };
}, htmlBuilder: pr, mathmlBuilder: mr }), q({ type: `color`, names: [`\\color`], props: { numArgs: 1, allowedInText: true, argTypes: [`color`] }, handler(e3, t5) {
  var { parser: n3, breakOnTokenText: r2 } = e3, i2 = Q(t5[0], `color-token`).color;
  n3.gullet.macros.set(`\\current@color`, i2);
  var a2 = n3.parseExpression(true, r2);
  return { type: `color`, mode: n3.mode, color: i2, body: a2 };
}, htmlBuilder: pr, mathmlBuilder: mr }), q({ type: `cr`, names: [`\\\\`], props: { numArgs: 0, numOptionalArgs: 0, allowedInText: true }, handler(t5, n3, r2) {
  var i2 = e, { parser: a2 } = t5, o2 = a2.gullet.future().text === `[` ? a2.parseSizeGroup(true) : null, s2 = !a2.settings[i2(368)] || !a2.settings.useStrictBehavior(`newLineInDisplayMode`, `In LaTeX, \\\\ or \\newline does nothing in display mode`);
  return { type: `cr`, mode: a2.mode, newLine: s2, size: o2 && Q(o2, `size`).value };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = W([`mspace`], [], n3);
  return t5.newLine && (i2.classes[r2(610)](`newline`), t5.size && (i2[r2(956)][r2(467)] = A(k(t5.size, n3)))), i2;
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = new X(`mspace`);
  return t5.newLine && (i2.setAttribute(`linebreak`, `newline`), t5[r2(1086)] && i2.setAttribute(`height`, A(k(t5[r2(1086)], n3)))), i2;
} });
function hr(e3, t5) {
  return e3 -= 295, kn()[e3];
}
var gr = { "\\global": `\\global`, "\\long": `\\\\globallong`, "\\\\globallong": `\\\\globallong`, "\\def": `\\gdef`, "\\gdef": `\\gdef`, "\\edef": `\\xdef`, "\\xdef": `\\xdef`, "\\let": `\\\\globallet`, "\\futurelet": `\\\\globalfuture` }, _r = (n3) => {
  var r2 = e, i2 = n3.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(i2)) throw new t(r2(810), n3);
  return i2;
}, vr = (t5) => {
  var n3 = e, r2 = t5[n3(697)][n3(499)]();
  return r2.text === `=` && (r2 = t5.gullet.popToken(), r2.text === ` ` && (r2 = t5.gullet.popToken())), r2;
}, yr = (e3, t5, n3, r2) => {
  var i2 = e3.gullet.macros.get(n3.text);
  i2 ?? (i2 = (n3.noexpand = true, { tokens: [n3], numArgs: 0, unexpandable: !e3.gullet.isExpandable(n3.text) })), e3.gullet.macros.set(t5, i2, r2);
};
q({ type: `internal`, names: [`\\global`, `\\long`, `\\\\globallong`], props: { numArgs: 0, allowedInText: true }, handler(e3) {
  var { parser: n3, funcName: r2 } = e3;
  n3.consumeSpaces();
  var i2 = n3.fetch();
  if (gr[i2.text]) return (r2 === `\\global` || r2 === `\\\\globallong`) && (i2.text = gr[i2.text]), Q(n3.parseFunction(), `internal`);
  throw new t(`Invalid token after macro prefix`, i2);
} }), q({ type: `internal`, names: [`\\def`, e(323), `\\edef`, `\\xdef`], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(n3) {
  var r2 = e, { parser: i2, funcName: a2 } = n3, o2 = i2.gullet.popToken(), s2 = o2.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/[r2(938)](s2)) throw new t(`Expected a control sequence`, o2);
  for (var c2 = 0, l2, u2 = [[]]; i2[r2(697)].future().text !== `{`; ) if (o2 = i2.gullet[r2(499)](), o2.text === `#`) {
    if (i2[r2(697)][r2(863)]()[r2(1033)] === `{`) {
      l2 = i2.gullet.future(), u2[c2].push(`{`);
      break;
    }
    if (o2 = i2.gullet.popToken(), !/^[1-9]$/.test(o2.text)) throw new t(`Invalid argument number "` + o2.text + `"`);
    if (parseInt(o2.text) !== c2 + 1) throw new t(`Argument number "` + o2.text + `" out of order`);
    c2++, u2.push([]);
  } else if (o2[r2(1033)] === r2(470)) throw new t(`Expected a macro definition`);
  else u2[c2].push(o2.text);
  var { tokens: d2 } = i2.gullet.consumeArg();
  return l2 && d2.unshift(l2), (a2 === r2(816) || a2 === `\\xdef`) && (d2 = i2.gullet.expandTokens(d2), d2.reverse()), i2[r2(697)][r2(947)].set(s2, { tokens: d2, numArgs: c2, delimiters: u2 }, a2 === gr[a2]), { type: r2(821), mode: i2[r2(514)] };
} }), q({ type: e(821), names: [e(440), e(765)], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t5) {
  var n3 = e, { parser: r2, funcName: i2 } = t5, a2 = _r(r2.gullet.popToken());
  return r2[n3(697)].consumeSpaces(), yr(r2, a2, vr(r2), i2 === `\\\\globallet`), { type: `internal`, mode: r2[n3(514)] };
} }), q({ type: `internal`, names: [e(399), `\\\\globalfuture`], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t5) {
  var n3 = e, { parser: r2, funcName: i2 } = t5, a2 = _r(r2.gullet.popToken()), o2 = r2.gullet.popToken(), s2 = r2[n3(697)].popToken();
  return yr(r2, a2, s2, i2 === `\\\\globalfuture`), r2.gullet.pushToken(s2), r2.gullet.pushToken(o2), { type: `internal`, mode: r2[n3(514)] };
} });
var br = function(t5, n3, r2) {
  var i2 = e, a2 = qe(j.math[t5] && j.math[t5][i2(867)] || t5, n3, r2);
  if (!a2) throw Error(i2(433) + t5 + i2(664) + n3 + `.`);
  return a2;
}, xr = function(t5, n3, r2, i2) {
  var a2 = e, o2 = r2.havingBaseStyle(n3), s2 = W(i2.concat(o2.sizingClasses(r2)), [t5], r2), c2 = o2.sizeMultiplier / r2.sizeMultiplier;
  return s2.height *= c2, s2[a2(882)] *= c2, s2[a2(600)] = o2[a2(731)], s2;
}, Sr = function(t5, n3, r2) {
  var i2 = e, a2 = n3.havingBaseStyle(r2), o2 = (1 - n3[i2(731)] / a2.sizeMultiplier) * n3.fontMetrics().axisHeight;
  t5.classes.push(`delimcenter`), t5[i2(956)].top = A(o2), t5[i2(769)] -= o2, t5.depth += o2;
}, Cr = function(e3, t5, n3, r2, i2, a2) {
  var o2 = xr(Pt(e3, `Main-Regular`, i2, r2), t5, r2, a2);
  return n3 && Sr(o2, r2, t5), o2;
}, wr = function(t5, n3, r2, i2) {
  return Pt(t5, e(636) + n3 + `-Regular`, r2, i2);
}, Tr = function(t5, n3, r2, i2, a2, o2) {
  var s2 = e, c2 = wr(t5, n3, a2, i2), l2 = xr(W([`delimsizing`, `size` + n3], [c2], i2), D[s2(367)], i2, o2);
  return r2 && Sr(l2, i2, D.TEXT), l2;
}, Er = function(t5, n3, r2) {
  return { type: `elem`, elem: W([e(981), n3 === `Size1-Regular` ? `delim-size1` : `delim-size4`], [W([], [Pt(t5, n3, r2)])]) };
}, Dr = function(t5, n3, r2) {
  var i2 = e, a2 = Ue[`Size4-Regular`][t5.charCodeAt(0)] ? Ue[i2(454)][t5.charCodeAt(0)][4] : Ue[`Size1-Regular`][t5.charCodeAt(0)][4], o2 = Vt([], [new Le([new Re(i2(1089), ve(t5, Math[i2(763)](1e3 * n3)))], { width: A(a2), height: A(n3), style: i2(372) + A(a2), viewBox: `0 0 ` + 1e3 * a2 + ` ` + Math[i2(763)](1e3 * n3), preserveAspectRatio: `xMinYMin` })], r2);
  return o2.height = n3, o2.style.height = A(n3), o2[i2(956)].width = A(a2), { type: `elem`, elem: o2 };
}, Or = 8e-3, kr = { type: e(976), size: -1 * Or }, Ar = /* @__PURE__ */ new Set([`|`, `\\lvert`, `\\rvert`, `\\vert`]), jr = /* @__PURE__ */ new Set([`\\|`, `\\lVert`, `\\rVert`, `\\Vert`]), Mr = function(t5, n3, r2, i2, a2, o2) {
  var s2 = e, c2, l2, u2, d2, f2 = ``, p2 = 0;
  c2 = u2 = d2 = t5, l2 = null;
  var m2 = s2(569);
  t5 === `\\uparrow` ? u2 = d2 = `\u23D0` : t5 === `\\Uparrow` ? u2 = d2 = `\u2016` : t5 === `\\downarrow` ? c2 = u2 = `\u23D0` : t5 === `\\Downarrow` ? c2 = u2 = `\u2016` : t5 === `\\updownarrow` ? (c2 = `\\uparrow`, u2 = `\u23D0`, d2 = `\\downarrow`) : t5 === s2(888) ? (c2 = `\\Uparrow`, u2 = `\u2016`, d2 = `\\Downarrow`) : Ar[s2(1019)](t5) ? (u2 = `\u2223`, f2 = `vert`, p2 = 333) : jr.has(t5) ? (u2 = `\u2225`, f2 = `doublevert`, p2 = 556) : t5 === `[` || t5 === `\\lbrack` ? (c2 = `\u23A1`, u2 = `\u23A2`, d2 = `\u23A3`, m2 = `Size4-Regular`, f2 = `lbrack`, p2 = 667) : t5 === `]` || t5 === `\\rbrack` ? (c2 = `\u23A4`, u2 = `\u23A5`, d2 = `\u23A6`, m2 = `Size4-Regular`, f2 = s2(344), p2 = 667) : t5 === `\\lfloor` || t5 === `\u230A` ? (u2 = c2 = `\u23A2`, d2 = `\u23A3`, m2 = `Size4-Regular`, f2 = `lfloor`, p2 = 667) : t5 === `\\lceil` || t5 === `\u2308` ? (c2 = `\u23A1`, u2 = d2 = `\u23A2`, m2 = `Size4-Regular`, f2 = `lceil`, p2 = 667) : t5 === s2(851) || t5 === `\u230B` ? (u2 = c2 = `\u23A5`, d2 = `\u23A6`, m2 = `Size4-Regular`, f2 = `rfloor`, p2 = 667) : t5 === `\\rceil` || t5 === `\u2309` ? (c2 = `\u23A4`, u2 = d2 = `\u23A5`, m2 = `Size4-Regular`, f2 = `rceil`, p2 = 667) : t5 === `(` || t5 === `\\lparen` ? (c2 = `\u239B`, u2 = `\u239C`, d2 = `\u239D`, m2 = `Size4-Regular`, f2 = `lparen`, p2 = 875) : t5 === `)` || t5 === `\\rparen` ? (c2 = `\u239E`, u2 = `\u239F`, d2 = `\u23A0`, m2 = `Size4-Regular`, f2 = s2(1076), p2 = 875) : t5 === `\\{` || t5 === `\\lbrace` ? (c2 = `\u23A7`, l2 = `\u23A8`, d2 = `\u23A9`, u2 = `\u23AA`, m2 = `Size4-Regular`) : t5 === `\\}` || t5 === `\\rbrace` ? (c2 = `\u23AB`, l2 = `\u23AC`, d2 = `\u23AD`, u2 = `\u23AA`, m2 = `Size4-Regular`) : t5 === `\\lgroup` || t5 === `\u27EE` ? (c2 = `\u23A7`, d2 = `\u23A9`, u2 = `\u23AA`, m2 = `Size4-Regular`) : t5 === `\\rgroup` || t5 === `\u27EF` ? (c2 = `\u23AB`, d2 = `\u23AD`, u2 = `\u23AA`, m2 = `Size4-Regular`) : t5 === `\\lmoustache` || t5 === `\u23B0` ? (c2 = `\u23A7`, d2 = `\u23AD`, u2 = `\u23AA`, m2 = `Size4-Regular`) : (t5 === `\\rmoustache` || t5 === `\u23B1`) && (c2 = `\u23AB`, d2 = `\u23A9`, u2 = `\u23AA`, m2 = `Size4-Regular`);
  var h2 = br(c2, m2, a2), g2 = h2[s2(769)] + h2[s2(882)], _2 = br(u2, m2, a2), v2 = _2.height + _2.depth, y2 = br(d2, m2, a2), b2 = y2.height + y2.depth, x2 = 0, S2 = 1;
  if (l2 !== null) {
    var C2 = br(l2, m2, a2);
    x2 = C2.height + C2[s2(882)], S2 = 2;
  }
  var w2 = g2 + b2 + x2, T2 = w2 + Math.max(0, Math.ceil((n3 - w2) / (S2 * v2))) * S2 * v2, ee2 = i2.fontMetrics().axisHeight;
  r2 && (ee2 *= i2.sizeMultiplier);
  var te2 = T2 / 2 - ee2, E2 = [];
  if (f2.length > 0) {
    var ne2 = T2 - g2 - b2, re2 = Math.round(T2 * 1e3), ie2 = be(f2, Math.round(ne2 * 1e3)), ae2 = new Re(f2, ie2), oe2 = A(p2 / 1e3), se2 = A(re2 / 1e3), ce2 = Vt([], [new Le([ae2], { width: oe2, height: se2, viewBox: `0 0 ` + p2 + ` ` + re2 })], i2);
    ce2.height = re2 / 1e3, ce2.style.width = oe2, ce2.style.height = se2, E2[s2(610)]({ type: s2(818), elem: ce2 });
  } else {
    if (E2.push(Er(d2, m2, a2)), E2[s2(610)](kr), l2 === null) {
      var O2 = T2 - g2 - b2 + 2 * Or;
      E2.push(Dr(u2, O2, i2));
    } else {
      var le2 = (T2 - g2 - b2 - x2) / 2 + 2 * Or;
      E2[s2(610)](Dr(u2, le2, i2)), E2.push(kr), E2[s2(610)](Er(l2, m2, a2)), E2.push(kr), E2.push(Dr(u2, le2, i2));
    }
    E2.push(kr), E2.push(Er(c2, m2, a2));
  }
  var ue2 = i2[s2(398)](D.TEXT);
  return xr(W([`delimsizing`, `mult`], [G({ positionType: `bottom`, positionData: te2, children: E2 })], ue2), D.TEXT, i2, o2);
}, Nr = 80, Pr = 0.08, Fr = function(t5, n3, r2, i2, a2) {
  var o2 = e;
  return Vt([`hide-tail`], [new Le([new Re(t5, _e(t5, i2, r2))], { width: `400em`, height: A(n3), viewBox: `0 0 400000 ` + r2, preserveAspectRatio: o2(865) })], a2);
}, Ir = function(t5, n3) {
  var r2 = e, i2 = n3.havingBaseSizing(), a2 = Kr(`\\surd`, t5 * i2.sizeMultiplier, Wr, i2), o2 = i2.sizeMultiplier, s2 = Math.max(0, n3.minRuleThickness - n3.fontMetrics().sqrtRuleThickness), c2, l2, u2, d2, f2;
  return a2.type === `small` ? (d2 = 1e3 + 1e3 * s2 + Nr, t5 < 1 ? o2 = 1 : t5 < 1.4 && (o2 = 0.7), l2 = (1 + s2 + Pr) / o2, u2 = (1 + s2) / o2, c2 = Fr(r2(904), l2, d2, s2, n3), c2[r2(956)].minWidth = `0.853em`, f2 = 0.833 / o2) : a2[r2(953)] === r2(959) ? (d2 = (1e3 + Nr) * Br[a2.size], u2 = (Br[a2[r2(1086)]] + s2) / o2, l2 = (Br[a2[r2(1086)]] + s2 + Pr) / o2, c2 = Fr(r2(1031) + a2.size, l2, d2, s2, n3), c2.style.minWidth = `1.02em`, f2 = 1 / o2) : (l2 = t5 + s2 + Pr, u2 = t5 + s2, d2 = Math.floor(1e3 * t5 + s2) + Nr, c2 = Fr(r2(761), l2, d2, s2, n3), c2.style.minWidth = `0.742em`, f2 = 1.056), c2.height = u2, c2.style.height = A(l2), { span: c2, advanceWidth: f2, ruleWidth: (n3.fontMetrics().sqrtRuleThickness + s2) * o2 };
}, Lr = /* @__PURE__ */ new Set([`(`, `\\lparen`, `)`, `\\rparen`, `[`, e(320), `]`, e(349), `\\{`, `\\lbrace`, `\\}`, `\\rbrace`, e(964), `\\rfloor`, `\u230A`, `\u230B`, `\\lceil`, `\\rceil`, `\u2308`, `\u2309`, e(1081)]), Rr = /* @__PURE__ */ new Set([`\\uparrow`, `\\downarrow`, `\\updownarrow`, `\\Uparrow`, `\\Downarrow`, `\\Updownarrow`, `|`, `\\|`, `\\vert`, `\\Vert`, `\\lvert`, `\\rvert`, `\\lVert`, `\\rVert`, `\\lgroup`, `\\rgroup`, `\u27EE`, `\u27EF`, `\\lmoustache`, `\\rmoustache`, `\u23B0`, `\u23B1`]), zr = /* @__PURE__ */ new Set([`<`, `>`, `\\langle`, e(719), `/`, `\\backslash`, `\\lt`, `\\gt`]), Br = [0, 1.2, 1.8, 2.4, 3], Vr = function(n3, r2, i2, a2, o2) {
  var s2 = e;
  if (n3 === `<` || n3 === `\\lt` || n3 === `\u27E8` ? n3 = `\\langle` : (n3 === `>` || n3 === s2(363) || n3 === `\u27E9`) && (n3 = `\\rangle`), Lr.has(n3) || zr[s2(1019)](n3)) return Tr(n3, r2, false, i2, a2, o2);
  if (Rr.has(n3)) return Mr(n3, Br[r2], false, i2, a2, o2);
  throw new t(`Illegal delimiter: '` + n3 + `'`);
}, Hr = [{ type: `small`, style: D.SCRIPTSCRIPT }, { type: `small`, style: D.SCRIPT }, { type: `small`, style: D[e(367)] }, { type: `large`, size: 1 }, { type: e(959), size: 2 }, { type: `large`, size: 3 }, { type: `large`, size: 4 }], Ur = [{ type: `small`, style: D.SCRIPTSCRIPT }, { type: `small`, style: D.SCRIPT }, { type: e(970), style: D.TEXT }, { type: e(613) }], Wr = [{ type: `small`, style: D[e(519)] }, { type: `small`, style: D.SCRIPT }, { type: `small`, style: D.TEXT }, { type: `large`, size: 1 }, { type: `large`, size: 2 }, { type: `large`, size: 3 }, { type: e(959), size: 4 }, { type: `stack` }], Gr = function(t5) {
  var n3 = e;
  if (t5.type === `small`) return `Main-Regular`;
  if (t5.type === `large`) return `Size` + t5.size + `-Regular`;
  if (t5.type === `stack`) return n3(454);
  var r2 = t5.type;
  throw Error(`Add support for delim type '` + r2 + `' here.`);
}, Kr = function(t5, n3, r2, i2) {
  for (var a2 = e, o2 = Math[a2(536)](2, 3 - i2.style.size); o2 < r2.length; o2++) {
    var s2 = r2[o2];
    if (s2.type === `stack`) break;
    var c2 = br(t5, Gr(s2), `math`), l2 = c2.height + c2[a2(882)];
    if (s2[a2(953)] === a2(970)) {
      var u2 = i2.havingBaseStyle(s2.style);
      l2 *= u2.sizeMultiplier;
    }
    if (l2 > n3) return s2;
  }
  return r2[r2[a2(739)] - 1];
}, qr = function(t5, n3, r2, i2, a2, o2) {
  var s2 = e;
  t5 === `<` || t5 === `\\lt` || t5 === `\u27E8` ? t5 = `\\langle` : (t5 === `>` || t5 === `\\gt` || t5 === `\u27E9`) && (t5 = `\\rangle`);
  var c2 = zr.has(t5) ? Hr : Lr.has(t5) ? Wr : Ur, l2 = Kr(t5, n3, c2, i2);
  return l2.type === `small` ? Cr(t5, l2.style, r2, i2, a2, o2) : l2.type === s2(959) ? Tr(t5, l2.size, r2, i2, a2, o2) : Mr(t5, n3, r2, i2, a2, o2);
}, Jr = function(t5, n3, r2, i2, a2, o2) {
  var s2 = e, c2 = i2.fontMetrics().axisHeight * i2.sizeMultiplier, l2 = 901, u2 = 5 / i2.fontMetrics().ptPerEm, d2 = Math[s2(477)](n3 - c2, r2 + c2);
  return qr(t5, Math.max(d2 / 500 * l2, 2 * d2 - u2), true, i2, a2, o2);
}, Yr = { "\\bigl": { mclass: e(1018), size: 1 }, "\\Bigl": { mclass: e(1018), size: 2 }, "\\biggl": { mclass: `mopen`, size: 3 }, "\\Biggl": { mclass: `mopen`, size: 4 }, "\\bigr": { mclass: e(497), size: 1 }, "\\Bigr": { mclass: `mclose`, size: 2 }, "\\biggr": { mclass: `mclose`, size: 3 }, "\\Biggr": { mclass: `mclose`, size: 4 }, "\\bigm": { mclass: e(334), size: 1 }, "\\Bigm": { mclass: `mrel`, size: 2 }, "\\biggm": { mclass: `mrel`, size: 3 }, "\\Biggm": { mclass: e(334), size: 4 }, "\\big": { mclass: e(992), size: 1 }, "\\Big": { mclass: `mord`, size: 2 }, "\\bigg": { mclass: `mord`, size: 3 }, "\\Bigg": { mclass: `mord`, size: 4 } }, Xr = new Set(`(,\\lparen,),\\rparen,[,\\lbrack,],\\rbrack,\\{,\\lbrace,\\},\\rbrace,\\lfloor,\\rfloor,\u230A,\u230B,\\lceil,\\rceil,\u2308,\u2309,<,>,\\langle,\u27E8,\\rangle,\u27E9,\\lt,\\gt,\\lvert,\\rvert,\\lVert,\\rVert,\\lgroup,\\rgroup,\u27EE,\u27EF,\\lmoustache,\\rmoustache,\u23B0,\u23B1,/,\\backslash,|,\\vert,\\|,\\Vert,\\uparrow,\\Uparrow,\\downarrow,\\Downarrow,\\updownarrow,\\Updownarrow,.`.split(`,`));
function Zr(t5) {
  return e(793) in t5;
}
function Qr(n3, r2) {
  var i2 = e, a2 = Qn(n3);
  if (a2 && Xr.has(a2[i2(1033)])) return a2;
  throw a2 ? new t(`Invalid delimiter '` + a2[i2(1033)] + `' after '` + r2.funcName + `'`, n3) : new t(`Invalid delimiter type '` + n3.type + `'`, n3);
}
q({ type: `delimsizing`, names: [`\\bigl`, `\\Bigl`, `\\biggl`, `\\Biggl`, `\\bigr`, `\\Bigr`, `\\biggr`, `\\Biggr`, `\\bigm`, `\\Bigm`, e(757), `\\Biggm`, e(833), `\\Big`, `\\bigg`, `\\Bigg`], props: { numArgs: 1, argTypes: [`primitive`] }, handler: (t5, n3) => {
  var r2 = e, i2 = Qr(n3[0], t5);
  return { type: `delimsizing`, mode: t5.parser.mode, size: Yr[t5.funcName].size, mclass: Yr[t5.funcName].mclass, delim: i2[r2(1033)] };
}, htmlBuilder: (e3, t5) => e3.delim === `.` ? W([e3.mclass]) : Vr(e3.delim, e3.size, t5, e3.mode, [e3.mclass]), mathmlBuilder: (t5) => {
  var n3 = e, r2 = [];
  t5[n3(1074)] !== `.` && r2.push(Tn(t5.delim, t5[n3(514)]));
  var i2 = new X(`mo`, r2);
  t5[n3(903)] === `mopen` || t5[n3(903)] === `mclose` ? i2.setAttribute(n3(1034), `true`) : i2.setAttribute(n3(1034), `false`), i2[n3(362)](`stretchy`, `true`);
  var a2 = A(Br[t5.size]);
  return i2.setAttribute(n3(1043), a2), i2[n3(362)](`maxsize`, a2), i2;
} });
function $r(e3) {
  if (!e3.body) throw Error(`Bug: The leftright ParseNode wasn't fully parsed.`);
}
q({ type: e(614), names: [`\\right`], props: { numArgs: 1, primitive: true }, handler: (n3, r2) => {
  var i2 = e, a2 = n3[i2(502)].gullet.macros.get(`\\current@color`);
  if (a2 && typeof a2 != `string`) throw new t(`\\current@color set to non-string in \\right`);
  return { type: i2(614), mode: n3.parser[i2(514)], delim: Qr(r2[0], n3).text, color: a2 };
} }), q({ type: e(827), names: [`\\left`], props: { numArgs: 1, primitive: true }, handler: (t5, n3) => {
  var r2 = e, i2 = Qr(n3[0], t5), a2 = t5.parser;
  ++a2.leftrightDepth;
  var o2 = a2.parseExpression(false);
  --a2.leftrightDepth, a2.expect(`\\right`, false);
  var s2 = Q(a2.parseFunction(), `leftright-right`);
  return { type: `leftright`, mode: a2[r2(514)], body: o2, left: i2.text, right: s2.delim, rightColor: s2[r2(311)] };
}, htmlBuilder: (t5, n3) => {
  var r2 = e;
  $r(t5);
  for (var i2 = fn(t5.body, n3, true, [`mopen`, `mclose`]), a2 = 0, o2 = 0, s2 = false, c2 = 0; c2 < i2.length; c2++) {
    var l2 = i2[c2];
    Zr(l2) ? s2 = true : (a2 = Math[r2(477)](i2[c2].height, a2), o2 = Math.max(i2[c2][r2(882)], o2));
  }
  a2 *= n3.sizeMultiplier, o2 *= n3.sizeMultiplier;
  var u2 = t5.left === `.` ? _n(n3, [`mopen`]) : Jr(t5.left, a2, o2, n3, t5.mode, [`mopen`]);
  if (i2[r2(647)](u2), s2) for (var d2 = 1; d2 < i2.length; d2++) {
    var f2 = i2[d2];
    if (Zr(f2)) {
      var p2 = f2.isMiddle;
      i2[d2] = Jr(p2.delim, a2, o2, p2[r2(896)], t5.mode, []);
    }
  }
  var m2;
  if (t5.right === `.`) m2 = _n(n3, [`mclose`]);
  else {
    var h2 = t5[r2(539)] ? n3[r2(1016)](t5[r2(539)]) : n3;
    m2 = Jr(t5.right, a2, o2, h2, t5.mode, [`mclose`]);
  }
  return i2.push(m2), W([r2(525)], i2, n3);
}, mathmlBuilder: (t5, n3) => {
  var r2 = e;
  $r(t5);
  var i2 = jn(t5[r2(713)], n3);
  if (t5.left !== `.`) {
    var a2 = new X(`mo`, [Tn(t5[r2(1049)], t5.mode)]);
    a2.setAttribute(`fence`, `true`), i2.unshift(a2);
  }
  if (t5.right !== `.`) {
    var o2 = new X(`mo`, [Tn(t5.right, t5.mode)]);
    o2.setAttribute(`fence`, `true`), t5.rightColor && o2[r2(362)](`mathcolor`, t5.rightColor), i2.push(o2);
  }
  return En(i2);
} }), q({ type: e(998), names: [`\\middle`], props: { numArgs: 1, primitive: true }, handler: (n3, r2) => {
  var i2 = e, a2 = Qr(r2[0], n3);
  if (!n3.parser.leftrightDepth) throw new t(`\\middle without preceding \\left`, a2);
  return { type: i2(998), mode: n3.parser[i2(514)], delim: a2.text };
}, htmlBuilder: (t5, n3) => {
  var r2 = e, i2;
  return t5.delim === `.` ? i2 = _n(n3, []) : (i2 = Vr(t5.delim, 1, n3, t5[r2(514)], []), i2.isMiddle = { delim: t5.delim, options: n3 }), i2;
}, mathmlBuilder: (t5, n3) => {
  var r2 = e, i2 = new X(`mo`, [t5.delim === r2(702) || t5.delim === `|` ? Tn(`|`, `text`) : Tn(t5[r2(1074)], t5.mode)]);
  return i2[r2(362)](`fence`, r2(785)), i2.setAttribute(`lspace`, `0.05em`), i2.setAttribute(`rspace`, `0.05em`), i2;
} });
var ei = (t5, n3) => {
  var r2 = e, i2 = Gt(Y(t5.body, n3), n3), a2 = t5.label.slice(1), o2 = n3[r2(731)], s2, c2, u2 = l(t5.body);
  if (a2 === `sout`) s2 = W([`stretchy`, `sout`]), s2[r2(769)] = n3.fontMetrics()[r2(815)] / o2, c2 = -0.5 * n3.fontMetrics().xHeight;
  else if (a2 === `phase`) {
    var d2 = k({ number: 0.6, unit: `pt` }, n3), f2 = k({ number: 0.35, unit: `ex` }, n3), p2 = n3.havingBaseSizing();
    o2 /= p2.sizeMultiplier;
    var m2 = i2.height + i2.depth + d2 + f2;
    i2.style.paddingLeft = A(m2 / 2 + d2);
    var h2 = Math.floor(1e3 * m2 * o2);
    s2 = Vt([`hide-tail`], [new Le([new Re(r2(463), he(h2))], { width: `400em`, height: A(h2 / 1e3), viewBox: `0 0 400000 ` + h2, preserveAspectRatio: `xMinYMin slice` })], n3), s2.style.height = A(m2), c2 = i2[r2(882)] + d2 + f2;
  } else {
    /cancel/.test(a2) ? u2 || i2.classes.push(`cancel-pad`) : a2 === `angl` ? i2.classes.push(r2(678)) : i2.classes.push(r2(505));
    var g2, _2, v2 = 0;
    /box/[r2(938)](a2) ? (v2 = Math.max(n3.fontMetrics()[r2(843)], n3.minRuleThickness), g2 = n3.fontMetrics().fboxsep + (a2 === `colorbox` ? 0 : v2), _2 = g2) : a2 === `angl` ? (v2 = Math[r2(477)](n3.fontMetrics().defaultRuleThickness, n3[r2(413)]), g2 = 4 * v2, _2 = Math.max(0, 0.25 - i2.depth)) : (g2 = u2 ? 0.2 : 0, _2 = g2), s2 = qn(i2, a2, g2, _2, n3), /fbox|boxed|fcolorbox/.test(a2) ? (s2.style.borderStyle = `solid`, s2.style[r2(541)] = A(v2)) : a2 === `angl` && v2 !== 0.049 && (s2.style.borderTopWidth = A(v2), s2.style.borderRightWidth = A(v2)), c2 = i2.depth + _2, t5.backgroundColor && (s2.style.backgroundColor = t5[r2(1027)], t5.borderColor && (s2.style[r2(1004)] = t5.borderColor));
  }
  var y2;
  if (t5.backgroundColor) y2 = G({ positionType: `individualShift`, children: [{ type: `elem`, elem: s2, shift: c2 }, { type: `elem`, elem: i2, shift: 0 }] });
  else {
    var b2 = /cancel|phase/.test(a2) ? [`svg-align`] : [];
    y2 = G({ positionType: `individualShift`, children: [{ type: r2(818), elem: i2, shift: 0 }, { type: `elem`, elem: s2, shift: c2, wrapperClasses: b2 }] });
  }
  return /cancel/[r2(938)](a2) && (y2[r2(769)] = i2[r2(769)], y2.depth = i2.depth), /cancel/.test(a2) && !u2 ? W([r2(992), `cancel-lap`], [y2], n3) : W([`mord`], [y2], n3);
}, ti = (t5, n3) => {
  var r2 = e, i2, a2 = new X(t5.label.includes(r2(884)) ? `mpadded` : `menclose`, [Z(t5.body, n3)]);
  switch (t5.label) {
    case `\\cancel`:
      a2[r2(362)](`notation`, r2(870));
      break;
    case `\\bcancel`:
      a2.setAttribute(`notation`, `downdiagonalstrike`);
      break;
    case `\\phase`:
      a2.setAttribute(`notation`, `phasorangle`);
      break;
    case `\\sout`:
      a2[r2(362)](`notation`, `horizontalstrike`);
      break;
    case r2(345):
      a2.setAttribute(`notation`, `box`);
      break;
    case `\\angl`:
      a2.setAttribute(`notation`, `actuarial`);
      break;
    case r2(547):
    case `\\colorbox`:
      if (i2 = n3.fontMetrics().fboxsep * n3.fontMetrics().ptPerEm, a2.setAttribute(`width`, `+` + 2 * i2 + `pt`), a2.setAttribute(`height`, `+` + 2 * i2 + `pt`), a2.setAttribute(`lspace`, i2 + `pt`), a2.setAttribute(`voffset`, i2 + `pt`), t5.label === `\\fcolorbox`) {
        var o2 = Math.max(n3.fontMetrics().fboxrule, n3.minRuleThickness);
        a2.setAttribute(`style`, `border: ` + A(o2) + r2(1008) + t5.borderColor);
      }
      break;
    case `\\xcancel`:
      a2.setAttribute(`notation`, `updiagonalstrike downdiagonalstrike`);
      break;
  }
  return t5.backgroundColor && a2.setAttribute(`mathbackground`, t5[r2(1027)]), a2;
};
q({ type: e(619), names: [e(699)], props: { numArgs: 2, allowedInText: true, argTypes: [`color`, `hbox`] }, handler(t5, n3, r2) {
  var i2 = e, { parser: a2, funcName: o2 } = t5, s2 = Q(n3[0], i2(482)).color, c2 = n3[1];
  return { type: `enclose`, mode: a2.mode, label: o2, backgroundColor: s2, body: c2 };
}, htmlBuilder: ei, mathmlBuilder: ti }), q({ type: `enclose`, names: [`\\fcolorbox`], props: { numArgs: 3, allowedInText: true, argTypes: [e(311), e(311), `hbox`] }, handler(e3, t5, n3) {
  var { parser: r2, funcName: i2 } = e3, a2 = Q(t5[0], `color-token`).color, o2 = Q(t5[1], `color-token`).color, s2 = t5[2];
  return { type: `enclose`, mode: r2.mode, label: i2, backgroundColor: o2, borderColor: a2, body: s2 };
}, htmlBuilder: ei, mathmlBuilder: ti }), q({ type: e(619), names: [`\\fbox`], props: { numArgs: 1, argTypes: [`hbox`], allowedInText: true }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5;
  return { type: `enclose`, mode: i2.mode, label: r2(345), body: n3[0] };
} }), q({ type: e(619), names: [`\\cancel`, `\\bcancel`, `\\xcancel`, `\\phase`], props: { numArgs: 1 }, handler(t5, n3) {
  var r2 = e, { parser: i2, funcName: a2 } = t5, o2 = n3[0];
  return { type: `enclose`, mode: i2[r2(514)], label: a2, body: o2 };
}, htmlBuilder: ei, mathmlBuilder: ti }), q({ type: e(619), names: [`\\sout`], props: { numArgs: 1, allowedInText: true }, handler(t5, n3) {
  var r2 = e, { parser: i2, funcName: a2 } = t5;
  i2.mode === `math` && i2.settings.reportNonstrict(`mathVsSout`, r2(576));
  var o2 = n3[0];
  return { type: `enclose`, mode: i2.mode, label: a2, body: o2 };
}, htmlBuilder: ei, mathmlBuilder: ti }), q({ type: e(619), names: [e(528)], props: { numArgs: 1, argTypes: [`hbox`], allowedInText: false }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5;
  return { type: `enclose`, mode: i2.mode, label: r2(528), body: n3[0] };
} });
var ni = {};
function ri(t5) {
  for (var n3 = e, { type: r2, names: i2, props: a2, handler: o2, htmlBuilder: s2, mathmlBuilder: c2 } = t5, l2 = { type: r2, numArgs: a2[n3(893)] || 0, allowedInText: false, numOptionalArgs: 0, handler: o2 }, u2 = 0; u2 < i2.length; ++u2) ni[i2[u2]] = l2;
  s2 && (rn[r2] = s2), c2 && (an[r2] = c2);
}
var ii = {};
function $(e3, t5) {
  ii[e3] = t5;
}
var ai = class t3 {
  constructor(t5, n3, r2) {
    var i2 = e;
    this[i2(868)] = void 0, this[i2(880)] = void 0, this[i2(356)] = void 0, this.lexer = t5, this.start = n3, this[i2(356)] = r2;
  }
  static range(e3, n3) {
    return n3 ? !e3 || !e3.loc || !n3.loc || e3.loc.lexer !== n3.loc.lexer ? null : new t3(e3.loc.lexer, e3.loc.start, n3.loc.end) : e3 && e3.loc;
  }
}, oi = class t4 {
  constructor(t5, n3) {
    var r2 = e;
    this[r2(1033)] = void 0, this[r2(672)] = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this[r2(1033)] = t5, this.loc = n3;
  }
  range(e3, n3) {
    return new t4(n3, ai.range(this, e3));
  }
};
function si(t5) {
  var n3 = e, r2 = [];
  t5[n3(663)]();
  var i2 = t5.fetch()[n3(1033)];
  for (i2 === `\\relax` && (t5.consume(), t5.consumeSpaces(), i2 = t5.fetch().text); i2 === `\\hline` || i2 === `\\hdashline`; ) t5.consume(), r2[n3(610)](i2 === `\\hdashline`), t5.consumeSpaces(), i2 = t5.fetch().text;
  return r2;
}
var ci = (n3) => {
  var r2 = e;
  if (!n3.parser[r2(834)][r2(368)]) throw new t(`{` + n3.envName + `} can be used only in display mode.`);
}, li = /* @__PURE__ */ new Set([`gather`, e(715)]);
function ui(t5) {
  var n3 = e;
  if (!t5.includes(`ed`)) return !t5[n3(493)](`*`);
}
function di(n3, r2, i2) {
  var a2 = e, { hskipBeforeAndAfter: o2, addJot: s2, cols: c2, arraystretch: l2, colSeparationType: u2, autoTag: d2, singleRow: f2, emptySingleRow: p2, maxNumCols: m2, leqno: h2 } = r2;
  if (n3[a2(697)].beginGroup(), f2 || n3.gullet.macros.set(a2(716), `\\\\\\relax`), !l2) {
    var g2 = n3.gullet.expandMacroAsText(`\\arraystretch`);
    if (g2 == null) l2 = 1;
    else if (l2 = parseFloat(g2), !l2 || l2 < 0) throw new t(`Invalid \\arraystretch: ` + g2);
  }
  n3.gullet[a2(1058)]();
  var _2 = [], v2 = [_2], y2 = [], b2 = [], x2 = d2 == null ? void 0 : [];
  function S2() {
    d2 && n3.gullet.macros.set(`\\@eqnsw`, `1`, true);
  }
  function C2() {
    var e3 = a2;
    x2 && (n3.gullet.macros.get(e3(948)) ? (x2.push(n3.subparse([new oi(`\\df@tag`)])), n3.gullet[e3(947)].set(`\\df@tag`, void 0, true)) : x2.push(!!d2 && n3.gullet.macros.get(`\\@eqnsw`) === `1`));
  }
  for (S2(), b2.push(si(n3)); ; ) {
    var w2 = n3.parseExpression(false, f2 ? `\\end` : `\\\\`);
    n3.gullet.endGroup(), n3.gullet.beginGroup();
    var T2 = { type: `ordgroup`, mode: n3.mode, body: w2 };
    i2 && (T2 = { type: `styling`, mode: n3.mode, style: i2, resetFont: true, body: [T2] }), _2.push(T2);
    var ee2 = n3[a2(829)]().text;
    if (ee2 === `&`) {
      if (m2 && _2.length === m2) {
        if (f2 || u2) throw new t(`Too many tab characters: &`, n3[a2(488)]);
        n3.settings.reportNonstrict(a2(626), `Too few columns specified in the {array} column argument.`);
      }
      n3.consume();
    } else if (ee2 === `\\end`) {
      C2(), _2.length === 1 && T2.type === `styling` && T2.body.length === 1 && T2.body[0].type === `ordgroup` && T2.body[0].body.length === 0 && (v2.length > 1 || !p2) && v2.pop(), b2.length < v2.length + 1 && b2.push([]);
      break;
    } else if (ee2 === `\\\\`) {
      n3.consume();
      var te2 = void 0;
      n3.gullet.future()[a2(1033)] !== ` ` && (te2 = n3.parseSizeGroup(true)), y2.push(te2 ? te2.value : null), C2(), b2.push(si(n3)), _2 = [], v2.push(_2), S2();
    } else throw new t(`Expected & or \\\\ or \\cr or \\end`, n3[a2(488)]);
  }
  return n3.gullet.endGroup(), n3.gullet.endGroup(), { type: a2(874), mode: n3.mode, addJot: s2, arraystretch: l2, body: v2, cols: c2, rowGaps: y2, hskipBeforeAndAfter: o2, hLinesBeforeRow: b2, colSeparationType: u2, tags: x2, leqno: h2 };
}
function fi(t5) {
  return t5[e(901)](0, 1) === `d` ? `display` : `text`;
}
var pi = function(n3, r2) {
  var _a2;
  var i2 = e, a2, o2, s2 = n3.body.length, c2 = n3.hLinesBeforeRow, l2 = 0, u2 = Array(s2), d2 = [], f2 = Math.max(r2.fontMetrics().arrayRuleWidth, r2.minRuleThickness), p2 = 1 / r2[i2(1057)]().ptPerEm, m2 = 5 * p2;
  n3[i2(1088)] && n3.colSeparationType === i2(970) && (m2 = 0.2778 * (r2.havingStyle(D.SCRIPT).sizeMultiplier / r2.sizeMultiplier));
  var h2 = n3.colSeparationType === `CD` ? k({ number: 3, unit: `ex` }, r2) : 12 * p2, g2 = 3 * p2, _2 = n3.arraystretch * h2, v2 = 0.7 * _2, y2 = 0.3 * _2, b2 = 0;
  function x2(e3) {
    for (var t5 = i2, n4 = 0; n4 < e3.length; ++n4) n4 > 0 && (b2 += 0.25), d2[t5(610)]({ pos: b2, isDashed: e3[n4] });
  }
  for (x2(c2[0]), a2 = 0; a2 < n3.body.length; ++a2) {
    var S2 = n3[i2(713)][a2], C2 = v2, w2 = y2;
    l2 < S2.length && (l2 = S2.length);
    var T2 = { cells: Array(S2.length), height: 0, depth: 0, pos: 0 };
    for (o2 = 0; o2 < S2[i2(739)]; ++o2) {
      var ee2 = Y(S2[o2], r2);
      w2 < ee2.depth && (w2 = ee2.depth), C2 < ee2.height && (C2 = ee2.height), T2.cells[o2] = ee2;
    }
    var te2 = n3.rowGaps[a2], E2 = 0;
    te2 && (E2 = k(te2, r2), E2 > 0 && (E2 += y2, w2 < E2 && (w2 = E2), E2 = 0)), n3.addJot && a2 < n3.body.length - 1 && (w2 += g2), T2.height = C2, T2.depth = w2, b2 += C2, T2.pos = b2, b2 += w2 + E2, u2[a2] = T2, x2(c2[a2 + 1]);
  }
  var ne2 = b2 / 2 + r2.fontMetrics()[i2(375)], re2 = n3.cols || [], ie2 = [], ae2, oe2, se2 = [];
  if (n3.tags && n3[i2(708)].some((e3) => e3)) for (a2 = 0; a2 < s2; ++a2) {
    var ce2 = u2[a2], O2 = ce2[i2(758)] - ne2, le2 = n3[i2(708)][a2], ue2 = void 0;
    ue2 = le2 === true ? W([`eqn-num`], [], r2) : le2 === false ? W([], [], r2) : W([], fn(le2, r2, true), r2), ue2.depth = ce2.depth, ue2.height = ce2.height, se2.push({ type: `elem`, elem: ue2, shift: O2 });
  }
  for (o2 = 0, oe2 = 0; o2 < l2 || oe2 < re2.length; ++o2, ++oe2) {
    for (var de2 = re2[oe2], fe2 = true; ((_a2 = pe2 = de2) == null ? void 0 : _a2[i2(953)]) === i2(967); ) {
      var pe2;
      if (fe2 || (ae2 = W([`arraycolsep`], []), ae2.style.width = A(r2.fontMetrics().doubleRuleSep), ie2[i2(610)](ae2)), de2.separator === `|` || de2.separator === `:`) {
        var me2 = de2.separator === `|` ? `solid` : `dashed`, he2 = W([`vertical-separator`], [], r2);
        he2[i2(956)][i2(769)] = A(b2), he2.style[i2(1072)] = A(f2), he2.style.borderRightStyle = me2, he2.style.margin = `0 ` + A(-f2 / 2);
        var ge2 = b2 - ne2;
        ge2 && (he2.style.verticalAlign = A(-ge2)), ie2[i2(610)](he2);
      } else throw new t(`Invalid separator type: ` + de2.separator);
      oe2++, de2 = re2[oe2], fe2 = false;
    }
    if (!(o2 >= l2)) {
      var _e2 = void 0;
      (o2 > 0 || n3.hskipBeforeAndAfter) && (_e2 = (de2 == null ? void 0 : de2.pregap) ?? m2, _e2 !== 0 && (ae2 = W([`arraycolsep`], []), ae2.style.width = A(_e2), ie2[i2(610)](ae2)));
      var ve2 = [];
      for (a2 = 0; a2 < s2; ++a2) {
        var ye2 = u2[a2], be2 = ye2.cells[o2];
        if (be2) {
          var xe2 = ye2.pos - ne2;
          be2[i2(882)] = ye2.depth, be2.height = ye2.height, ve2.push({ type: i2(818), elem: be2, shift: xe2 });
        }
      }
      var Se2 = G({ positionType: i2(660), children: ve2 }), Ce2 = W([`col-align-` + ((de2 == null ? void 0 : de2.align) || `c`)], [Se2]);
      ie2[i2(610)](Ce2), (o2 < l2 - 1 || n3.hskipBeforeAndAfter) && (_e2 = (de2 == null ? void 0 : de2[i2(624)]) ?? m2, _e2 !== 0 && (ae2 = W([i2(442)], []), ae2.style.width = A(_e2), ie2.push(ae2)));
    }
  }
  var we2 = W([`mtable`], ie2);
  if (d2[i2(739)] > 0) {
    for (var Te2 = Ht(`hline`, r2, f2), Ee2 = Ht(`hdashline`, r2, f2), De2 = [{ type: `elem`, elem: we2, shift: 0 }]; d2.length > 0; ) {
      var Oe2 = d2.pop(), ke2 = Oe2.pos - ne2;
      Oe2[i2(307)] ? De2.push({ type: `elem`, elem: Ee2, shift: ke2 }) : De2[i2(610)]({ type: `elem`, elem: Te2, shift: ke2 });
    }
    we2 = G({ positionType: `individualShift`, children: De2 });
  }
  if (se2.length === 0) return W([`mord`], [we2], r2);
  var Ae2 = W([i2(1065)], [G({ positionType: `individualShift`, children: se2 })], r2);
  return Wt([we2, Ae2]);
}, mi = { c: `center `, l: e(400), r: e(841) }, hi = function(t5, n3) {
  for (var r2 = e, i2 = [], a2 = new X(`mtd`, [], [`mtr-glue`]), o2 = new X(`mtd`, [], [`mml-eqn-num`]), s2 = 0; s2 < t5.body.length; s2++) {
    for (var c2 = t5.body[s2], l2 = [], u2 = 0; u2 < c2.length; u2++) l2.push(new X(`mtd`, [Z(c2[u2], n3)]));
    t5.tags && t5[r2(708)][s2] && (l2.unshift(a2), l2.push(a2), t5.leqno ? l2.unshift(o2) : l2.push(o2)), i2.push(new X(`mtr`, l2));
  }
  var d2 = new X(r2(871), i2), f2 = t5.arraystretch === 0.5 ? 0.1 : 0.16 + t5[r2(788)] - 1 + (t5.addJot ? 0.09 : 0);
  d2.setAttribute(r2(389), A(f2));
  var p2 = ``, m2 = ``;
  if (t5.cols && t5.cols.length > 0) {
    var h2 = t5[r2(907)], g2 = ``, _2 = false, v2 = 0, y2 = h2[r2(739)];
    h2[0][r2(953)] === `separator` && (p2 += `top `, v2 = 1), h2[h2.length - 1][r2(953)] === `separator` && (p2 += `bottom `, --y2);
    for (var b2 = v2; b2 < y2; b2++) {
      var x2 = h2[b2];
      x2[r2(953)] === `align` ? (m2 += mi[x2.align], _2 && (g2 += r2(680)), _2 = true) : x2[r2(953)] === `separator` && _2 && (g2 += x2.separator === `|` ? `solid ` : `dashed `, _2 = false);
    }
    d2.setAttribute(`columnalign`, m2.trim()), /[sd]/.test(g2) && d2.setAttribute(`columnlines`, g2.trim());
  }
  if (t5.colSeparationType === `align`) {
    for (var S2 = t5.cols || [], C2 = ``, w2 = 1; w2 < S2[r2(739)]; w2++) C2 += w2 % 2 ? r2(908) : `1em `;
    d2.setAttribute(`columnspacing`, C2.trim());
  } else t5.colSeparationType === r2(958) || t5.colSeparationType === `gather` ? d2[r2(362)](`columnspacing`, `0em`) : t5[r2(1088)] === `small` ? d2[r2(362)](`columnspacing`, `0.2778em`) : t5.colSeparationType === `CD` ? d2.setAttribute(`columnspacing`, `0.5em`) : d2.setAttribute(`columnspacing`, `1em`);
  var T2 = ``, ee2 = t5.hLinesBeforeRow;
  p2 += ee2[0][r2(739)] > 0 ? `left ` : ``, p2 += ee2[ee2.length - 1].length > 0 ? `right ` : ``;
  for (var te2 = 1; te2 < ee2.length - 1; te2++) T2 += ee2[te2].length === 0 ? `none ` : ee2[te2][0] ? r2(665) : r2(909);
  return /[sd]/.test(T2) && d2.setAttribute(`rowlines`, T2.trim()), p2 !== `` && (d2 = new X(`menclose`, [d2]), d2[r2(362)](r2(411), p2.trim())), t5.arraystretch && t5.arraystretch < 1 && (d2 = new X(`mstyle`, [d2]), d2[r2(362)](`scriptlevel`, `1`)), d2;
}, gi = function(n3, r2) {
  var i2 = e;
  n3.envName.includes(`ed`) || ci(n3);
  var a2 = [], o2 = n3.envName.includes(`at`) ? `alignat` : `align`, s2 = n3.envName === `split`, c2 = di(n3.parser, { cols: a2, addJot: true, autoTag: s2 ? void 0 : ui(n3.envName), emptySingleRow: true, colSeparationType: o2, maxNumCols: s2 ? 2 : void 0, leqno: n3.parser[i2(834)].leqno }, i2(331)), l2 = 0, u2 = 0, d2 = { type: `ordgroup`, mode: n3.mode, body: [] };
  if (r2[0] && r2[0].type === `ordgroup`) {
    for (var f2 = ``, p2 = 0; p2 < r2[0].body[i2(739)]; p2++) {
      var m2 = Q(r2[0].body[p2], `textord`);
      f2 += m2.text;
    }
    l2 = Number(f2), u2 = l2 * 2;
  }
  var h2 = !u2;
  c2.body.forEach(function(e3) {
    for (var n4 = i2, r3 = 1; r3 < e3.length; r3 += 2) Q(Q(e3[r3], n4(688)).body[0], n4(767)).body.unshift(d2);
    if (h2) u2 < e3.length && (u2 = e3.length);
    else {
      var a3 = e3.length / 2;
      if (l2 < a3) throw new t(`Too many math in a row: ` + (`expected ` + l2 + `, but got ` + a3), e3[0]);
    }
  });
  for (var g2 = 0; g2 < u2; ++g2) {
    var _2 = `r`, v2 = 0;
    g2 % 2 == 1 ? _2 = `l` : g2 > 0 && h2 && (v2 = 1), a2[g2] = { type: `align`, align: _2, pregap: v2, postgap: 0 };
  }
  return c2.colSeparationType = h2 ? `align` : `alignat`, c2;
};
ri({ type: `array`, names: [`array`, `darray`], props: { numArgs: 1 }, handler(n3, r2) {
  var i2 = e, a2 = (Qn(r2[0]) ? [r2[0]] : Q(r2[0], `ordgroup`).body).map(function(e3) {
    var n4 = hr, r3 = Zn(e3).text;
    if (`lcr`.includes(r3)) return { type: `align`, align: r3 };
    if (r3 === `|`) return { type: n4(967), separator: `|` };
    if (r3 === `:`) return { type: `separator`, separator: `:` };
    throw new t(`Unknown column alignment: ` + r3, e3);
  }), o2 = { cols: a2, hskipBeforeAndAfter: true, maxNumCols: a2.length };
  return di(n3[i2(502)], o2, fi(n3.envName));
}, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [`matrix`, `pmatrix`, `bmatrix`, `Bmatrix`, `vmatrix`, `Vmatrix`, `matrix*`, `pmatrix*`, `bmatrix*`, `Bmatrix*`, `vmatrix*`, `Vmatrix*`], props: { numArgs: 0 }, handler(n3) {
  var r2 = e, i2 = { matrix: null, pmatrix: [`(`, `)`], bmatrix: [`[`, `]`], Bmatrix: [`\\{`, `\\}`], vmatrix: [`|`, `|`], Vmatrix: [`\\Vert`, r2(378)] }[n3.envName.replace(`*`, ``)], a2 = `c`, o2 = { hskipBeforeAndAfter: false, cols: [{ type: r2(700), align: a2 }] };
  if (n3.envName.charAt(n3.envName[r2(739)] - 1) === `*`) {
    var s2 = n3[r2(502)];
    if (s2.consumeSpaces(), s2[r2(829)]()[r2(1033)] === `[`) {
      if (s2.consume(), s2.consumeSpaces(), a2 = s2.fetch().text, !`lcr`.includes(a2)) throw new t(`Expected l or c or r`, s2[r2(488)]);
      s2.consume(), s2.consumeSpaces(), s2.expect(`]`), s2.consume(), o2.cols = [{ type: `align`, align: a2 }];
    }
  }
  var c2 = di(n3.parser, o2, fi(n3.envName)), l2 = Math.max(0, ...c2[r2(713)][r2(434)]((e3) => e3.length));
  return c2.cols = Array(l2).fill({ type: `align`, align: a2 }), i2 ? { type: `leftright`, mode: n3.mode, body: [c2], left: i2[0], right: i2[1], rightColor: void 0 } : c2;
}, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [e(354)], props: { numArgs: 0 }, handler(t5) {
  var n3 = e, r2 = di(t5.parser, { arraystretch: 0.5 }, n3(1046));
  return r2.colSeparationType = `small`, r2;
}, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [`subarray`], props: { numArgs: 1 }, handler(e3, n3) {
  var r2 = (Qn(n3[0]) ? [n3[0]] : Q(n3[0], `ordgroup`).body).map(function(e4) {
    var n4 = hr, r3 = Zn(e4).text;
    if (`lc`[n4(493)](r3)) return { type: `align`, align: r3 };
    throw new t(n4(550) + r3, e4);
  });
  if (r2.length > 1) throw new t(`{subarray} can contain only one column`);
  var i2 = { cols: r2, hskipBeforeAndAfter: false, arraystretch: 0.5 }, a2 = di(e3.parser, i2, `script`);
  if (a2.body.length > 0 && a2.body[0].length > 1) throw new t(`{subarray} can contain only one column`);
  return a2;
}, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: e(874), names: [`cases`, `dcases`, `rcases`, `drcases`], props: { numArgs: 0 }, handler(t5) {
  var n3 = e, r2 = di(t5.parser, { arraystretch: 1.2, cols: [{ type: n3(700), align: `l`, pregap: 0, postgap: 1 }, { type: `align`, align: `l`, pregap: 0, postgap: 0 }] }, fi(t5.envName));
  return { type: n3(827), mode: t5.mode, body: [r2], left: t5.envName.includes(`r`) ? `.` : `\\{`, right: t5.envName.includes(`r`) ? `\\}` : `.`, rightColor: void 0 };
}, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [`align`, e(779), `aligned`, `split`], props: { numArgs: 0 }, handler: gi, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [`gathered`, `gather`, `gather*`], props: { numArgs: 0 }, handler(t5) {
  var n3 = e;
  li.has(t5.envName) && ci(t5);
  var r2 = { cols: [{ type: n3(700), align: `c` }], addJot: true, colSeparationType: `gather`, autoTag: ui(t5.envName), emptySingleRow: true, leqno: t5.parser.settings.leqno };
  return di(t5[n3(502)], r2, n3(331));
}, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [`alignat`, e(806), `alignedat`], props: { numArgs: 1 }, handler: gi, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [e(917), e(466)], props: { numArgs: 0 }, handler(e3) {
  ci(e3);
  var t5 = { autoTag: ui(e3.envName), emptySingleRow: true, singleRow: true, maxNumCols: 1, leqno: e3.parser.settings.leqno };
  return di(e3.parser, t5, `display`);
}, htmlBuilder: pi, mathmlBuilder: hi }), ri({ type: `array`, names: [`CD`], props: { numArgs: 0 }, handler(e3) {
  return ci(e3), fr(e3.parser);
}, htmlBuilder: pi, mathmlBuilder: hi }), $(`\\nonumber`, `\\gdef\\@eqnsw{0}`), $(e(408), `\\nonumber`), q({ type: `text`, names: [`\\hline`, `\\hdashline`], props: { numArgs: 0, allowedInText: true, allowedInMath: true }, handler(e3, n3) {
  throw new t(e3.funcName + ` valid only within array environment`);
} });
var _i = ni;
q({ type: `environment`, names: [e(717), e(789)], props: { numArgs: 1, argTypes: [`text`] }, handler(n3, r2) {
  var i2 = e, { parser: a2, funcName: o2 } = n3, s2 = r2[0];
  if (s2.type !== `ordgroup`) throw new t(`Invalid environment name`, s2);
  for (var c2 = ``, l2 = 0; l2 < s2.body[i2(739)]; ++l2) c2 += Q(s2.body[l2], `textord`)[i2(1033)];
  if (o2 === i2(717)) {
    if (!_i.hasOwnProperty(c2)) throw new t(`No such environment: ` + c2, s2);
    var u2 = _i[c2], { args: d2, optArgs: f2 } = a2.parseArguments(`\\begin{` + c2 + `}`, u2), p2 = { mode: a2.mode, envName: c2, parser: a2 }, m2 = u2[i2(594)](p2, d2, f2);
    a2.expect(`\\end`, false);
    var h2 = a2[i2(488)], g2 = Q(a2.parseFunction(), i2(423));
    if (g2.name !== c2) throw new t(`Mismatch: \\begin{` + c2 + `} matched by \\end{` + g2.name + `}`, h2);
    return m2;
  }
  return { type: i2(423), mode: a2.mode, name: c2, nameGroup: s2 };
} });
var vi = (t5, n3) => {
  var r2 = e, i2 = t5.font, a2 = n3[r2(1006)](i2);
  return Y(t5.body, a2);
}, yi = (e3, t5) => {
  var n3 = e3.font, r2 = t5.withFont(n3);
  return Z(e3.body, r2);
}, bi = { "\\Bbb": `\\mathbb`, "\\bold": `\\mathbf`, "\\frak": e(556) };
q({ type: e(339), names: [`\\mathrm`, e(796), `\\mathbf`, `\\mathnormal`, `\\mathsfit`, `\\mathbb`, `\\mathcal`, `\\mathfrak`, `\\mathscr`, `\\mathsf`, `\\mathtt`, e(338), `\\bold`, `\\frak`], props: { numArgs: 1, allowedInArgument: true }, handler: (t5, n3) => {
  var r2 = e, { parser: i2, funcName: a2 } = t5, o2 = sn(n3[0]), s2 = a2;
  return s2 in bi && (s2 = bi[s2]), { type: r2(339), mode: i2.mode, font: s2[r2(901)](1), body: o2 };
}, htmlBuilder: vi, mathmlBuilder: yi }), q({ type: `mclass`, names: [`\\boldsymbol`, `\\bm`], props: { numArgs: 1 }, handler: (t5, n3) => {
  var r2 = e, { parser: i2 } = t5, a2 = n3[0];
  return { type: r2(903), mode: i2.mode, mclass: or(a2), body: [{ type: `font`, mode: i2.mode, font: `boldsymbol`, body: a2 }], isCharacterBox: l(a2) };
} }), q({ type: `font`, names: [`\\rm`, `\\sf`, `\\tt`, `\\bf`, e(753), `\\cal`], props: { numArgs: 0, allowedInText: true }, handler: (t5, n3) => {
  var r2 = e, { parser: i2, funcName: a2, breakOnTokenText: o2 } = t5, { mode: s2 } = i2, c2 = i2.parseExpression(true, o2);
  return { type: `font`, mode: s2, font: `math` + a2.slice(1), body: { type: `ordgroup`, mode: i2[r2(514)], body: c2 } };
}, htmlBuilder: vi, mathmlBuilder: yi });
var xi = (t5, n3) => {
  var r2 = e, i2 = n3.style, a2 = i2.fracNum(), o2 = i2.fracDen(), s2 = n3.havingStyle(a2), c2 = Y(t5.numer, s2, n3);
  if (t5.continued) {
    var l2 = 8.5 / n3.fontMetrics().ptPerEm, u2 = 3.5 / n3.fontMetrics()[r2(577)];
    c2.height = c2.height < l2 ? l2 : c2[r2(769)], c2[r2(882)] = c2.depth < u2 ? u2 : c2.depth;
  }
  s2 = n3.havingStyle(o2);
  var d2 = Y(t5.denom, s2, n3), f2, p2, m2;
  t5.hasBarLine ? (t5.barSize ? (p2 = k(t5.barSize, n3), f2 = Ht(`frac-line`, n3, p2)) : f2 = Ht(`frac-line`, n3), p2 = f2.height, m2 = f2.height) : (f2 = null, p2 = 0, m2 = n3.fontMetrics().defaultRuleThickness);
  var h2, g2, _2;
  i2[r2(1086)] === D.DISPLAY.size ? (h2 = n3.fontMetrics().num1, g2 = p2 > 0 ? 3 * m2 : 7 * m2, _2 = n3.fontMetrics().denom1) : (p2 > 0 ? (h2 = n3.fontMetrics().num2, g2 = m2) : (h2 = n3.fontMetrics().num3, g2 = 3 * m2), _2 = n3.fontMetrics().denom2);
  var v2;
  if (f2) {
    var y2 = n3[r2(1057)]().axisHeight;
    h2 - c2.depth - (y2 + 0.5 * p2) < g2 && (h2 += g2 - (h2 - c2[r2(882)] - (y2 + 0.5 * p2))), y2 - 0.5 * p2 - (d2.height - _2) < g2 && (_2 += g2 - (y2 - 0.5 * p2 - (d2[r2(769)] - _2)));
    var b2 = -(y2 - 0.5 * p2);
    v2 = G({ positionType: `individualShift`, children: [{ type: `elem`, elem: d2, shift: _2 }, { type: `elem`, elem: f2, shift: b2 }, { type: `elem`, elem: c2, shift: -h2 }] });
  } else {
    var x2 = h2 - c2[r2(882)] - (d2[r2(769)] - _2);
    x2 < g2 && (h2 += 0.5 * (g2 - x2), _2 += 0.5 * (g2 - x2)), v2 = G({ positionType: `individualShift`, children: [{ type: `elem`, elem: d2, shift: _2 }, { type: `elem`, elem: c2, shift: -h2 }] });
  }
  s2 = n3.havingStyle(i2), v2.height *= s2[r2(731)] / n3.sizeMultiplier, v2.depth *= s2.sizeMultiplier / n3.sizeMultiplier;
  var S2 = i2[r2(1086)] === D.DISPLAY.size ? n3.fontMetrics().delim1 : i2[r2(1086)] === D.SCRIPTSCRIPT.size ? n3.havingStyle(D.SCRIPT)[r2(1057)]().delim2 : n3[r2(1057)]().delim2, C2 = t5.leftDelim == null ? _n(n3, [`mopen`]) : qr(t5.leftDelim, S2, true, n3.havingStyle(i2), t5[r2(514)], [r2(1018)]), w2 = t5.continued ? W([]) : t5.rightDelim == null ? _n(n3, [`mclose`]) : qr(t5.rightDelim, S2, true, n3[r2(420)](i2), t5.mode, [r2(497)]);
  return W([`mord`].concat(s2.sizingClasses(n3)), [C2, W([r2(340)], [v2]), w2], n3);
}, Si = (t5, n3) => {
  var r2 = e, i2 = new X(`mfrac`, [Z(t5[r2(676)], n3), Z(t5.denom, n3)]);
  if (!t5[r2(878)]) i2[r2(362)](`linethickness`, `0px`);
  else if (t5.barSize) {
    var a2 = k(t5.barSize, n3);
    i2.setAttribute(r2(1015), A(a2));
  }
  if (t5[r2(712)] != null || t5.rightDelim != null) {
    var o2 = [];
    if (t5.leftDelim != null) {
      var s2 = new X(`mo`, [new xn(t5.leftDelim[r2(867)](`\\`, ``))]);
      s2.setAttribute(`fence`, r2(785)), o2[r2(610)](s2);
    }
    if (o2[r2(610)](i2), t5.rightDelim != null) {
      var c2 = new X(`mo`, [new xn(t5.rightDelim.replace(`\\`, ``))]);
      c2.setAttribute(`fence`, r2(785)), o2.push(c2);
    }
    return En(o2);
  }
  return i2;
}, Ci = (t5, n3) => n3 ? { type: e(688), mode: t5.mode, style: n3, body: [t5] } : t5;
q({ type: `genfrac`, names: [`\\cfrac`, `\\dfrac`, `\\frac`, e(365), `\\dbinom`, e(534), `\\tbinom`, e(832), `\\\\bracefrac`, `\\\\brackfrac`], props: { numArgs: 2, allowedInArgument: true }, handler: (t5, n3) => {
  var r2 = e, { parser: i2, funcName: a2 } = t5, o2 = n3[0], s2 = n3[1], c2, l2 = null, u2 = null;
  switch (a2) {
    case `\\cfrac`:
    case `\\dfrac`:
    case r2(432):
    case `\\tfrac`:
      c2 = true;
      break;
    case `\\\\atopfrac`:
      c2 = false;
      break;
    case `\\dbinom`:
    case `\\binom`:
    case `\\tbinom`:
      c2 = false, l2 = `(`, u2 = `)`;
      break;
    case `\\\\bracefrac`:
      c2 = false, l2 = `\\{`, u2 = `\\}`;
      break;
    case `\\\\brackfrac`:
      c2 = false, l2 = `[`, u2 = `]`;
      break;
    default:
      throw Error(`Unrecognized genfrac command`);
  }
  var d2 = a2 === r2(813), f2 = null;
  return d2 || a2.startsWith(`\\d`) ? f2 = `display` : a2.startsWith(`\\t`) && (f2 = r2(1033)), Ci({ type: `genfrac`, mode: i2.mode, numer: o2, denom: s2, continued: d2, hasBarLine: c2, leftDelim: l2, rightDelim: u2, barSize: null }, f2);
}, htmlBuilder: xi, mathmlBuilder: Si }), q({ type: `infix`, names: [`\\over`, `\\choose`, `\\atop`, `\\brace`, `\\brack`], props: { numArgs: 0, infix: true }, handler(t5) {
  var n3 = e, { parser: r2, funcName: i2, token: a2 } = t5, o2;
  switch (i2) {
    case `\\over`:
      o2 = `\\frac`;
      break;
    case `\\choose`:
      o2 = `\\binom`;
      break;
    case `\\atop`:
      o2 = `\\\\atopfrac`;
      break;
    case `\\brace`:
      o2 = `\\\\bracefrac`;
      break;
    case `\\brack`:
      o2 = `\\\\brackfrac`;
      break;
    default:
      throw Error(n3(641));
  }
  return { type: `infix`, mode: r2.mode, replaceWith: o2, token: a2 };
} });
var wi = [`display`, `text`, `script`, `scriptscript`], Ti = function(e3) {
  var t5 = null;
  return e3.length > 0 && (t5 = e3, t5 = t5 === `.` ? null : t5), t5;
};
q({ type: `genfrac`, names: [`\\genfrac`], props: { numArgs: 6, allowedInArgument: true, argTypes: [e(988), `math`, `size`, e(1033), `math`, `math`] }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5, a2 = n3[4], o2 = n3[5], s2 = sn(n3[0]), c2 = s2.type === `atom` && s2.family === `open` ? Ti(s2.text) : null, l2 = sn(n3[1]), u2 = l2.type === `atom` && l2.family === `close` ? Ti(l2.text) : null, d2 = Q(n3[2], `size`), f2, p2 = null;
  d2[r2(475)] ? f2 = true : (p2 = d2[r2(723)], f2 = p2.number > 0);
  var m2 = null, h2 = n3[3];
  if (h2.type === `ordgroup`) {
    if (h2.body.length > 0) {
      var g2 = Q(h2.body[0], `textord`);
      m2 = wi[Number(g2.text)];
    }
  } else h2 = Q(h2, `textord`), m2 = wi[Number(h2.text)];
  return Ci({ type: `genfrac`, mode: i2[r2(514)], numer: a2, denom: o2, continued: false, hasBarLine: f2, barSize: p2, leftDelim: c2, rightDelim: u2 }, m2);
} }), q({ type: `infix`, names: [`\\above`], props: { numArgs: 1, argTypes: [e(1086)], infix: true }, handler(t5, n3) {
  var r2 = e, { parser: i2, funcName: a2, token: o2 } = t5;
  return { type: `infix`, mode: i2.mode, replaceWith: r2(726), size: Q(n3[0], `size`).value, token: o2 };
} }), q({ type: `genfrac`, names: [`\\\\abovefrac`], props: { numArgs: 3, argTypes: [e(988), `size`, `math`] }, handler: (t5, n3) => {
  var r2 = e, { parser: i2, funcName: a2 } = t5, o2 = n3[0], s2 = Q(n3[1], `infix`).size;
  if (!s2) throw Error(`\\\\abovefrac expected size, but got ` + String(s2));
  var c2 = n3[2], l2 = s2.number > 0;
  return { type: r2(438), mode: i2.mode, numer: o2, denom: c2, continued: false, hasBarLine: l2, barSize: s2, leftDelim: null, rightDelim: null };
} });
var Ei = (t5, n3) => {
  var r2 = e, i2 = n3.style, a2, o2;
  t5.type === r2(492) ? (a2 = t5[r2(522)] ? Y(t5.sup, n3.havingStyle(i2.sup()), n3) : Y(t5.sub, n3.havingStyle(i2.sub()), n3), o2 = Q(t5.base, `horizBrace`)) : o2 = Q(t5, `horizBrace`);
  var s2 = Y(o2.base, n3.havingBaseStyle(D.DISPLAY)), c2 = Kn(o2, n3), l2 = o2[r2(527)] ? G({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: s2 }, { type: `kern`, size: 0.1 }, { type: `elem`, elem: c2, wrapperClasses: [`svg-align`] }] }) : G({ positionType: `bottom`, positionData: s2.depth + 0.1 + c2.height, children: [{ type: `elem`, elem: c2, wrapperClasses: [`svg-align`] }, { type: r2(976), size: 0.1 }, { type: r2(818), elem: s2 }] });
  if (a2) {
    var u2 = W([r2(525), o2.isOver ? `mover` : r2(784)], [l2], n3);
    l2 = o2.isOver ? G({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: u2 }, { type: `kern`, size: 0.2 }, { type: `elem`, elem: a2 }] }) : G({ positionType: `bottom`, positionData: u2.depth + 0.2 + a2.height + a2.depth, children: [{ type: `elem`, elem: a2 }, { type: r2(976), size: 0.2 }, { type: `elem`, elem: u2 }] });
  }
  return W([`minner`, o2.isOver ? r2(733) : `munder`], [l2], n3);
};
q({ type: `horizBrace`, names: [`\\overbrace`, `\\underbrace`, `\\overbracket`, `\\underbracket`], props: { numArgs: 1 }, handler(t5, n3) {
  var r2 = e, { parser: i2, funcName: a2 } = t5;
  return { type: `horizBrace`, mode: i2[r2(514)], label: a2, isOver: a2.includes(`\\over`), base: n3[0] };
}, htmlBuilder: Ei, mathmlBuilder: (t5, n3) => {
  var r2 = e, i2 = Un(t5[r2(977)]);
  return new X(t5.isOver ? `mover` : `munder`, [Z(t5[r2(1002)], n3), i2]);
} }), q({ type: `href`, names: [`\\href`], props: { numArgs: 2, argTypes: [e(914), e(306)], allowedInText: true }, handler: (t5, n3) => {
  var r2 = e, { parser: i2 } = t5, a2 = n3[1], o2 = Q(n3[0], `url`).url;
  return i2[r2(834)].isTrusted({ command: `\\href`, url: o2 }) ? { type: `href`, mode: i2[r2(514)], href: o2, body: J(a2) } : i2.formatUnsupportedCmd(r2(1010));
}, htmlBuilder: (e3, t5) => {
  var n3 = fn(e3.body, t5, false);
  return Ut(e3.href, [], n3, t5);
}, mathmlBuilder: (t5, n3) => {
  var r2 = e, i2 = Mn(t5.body, n3);
  return i2 instanceof X || (i2 = new X(`mrow`, [i2])), i2.setAttribute(r2(774), t5.href), i2;
} }), q({ type: `href`, names: [`\\url`], props: { numArgs: 1, argTypes: [`url`], allowedInText: true }, handler: (t5, n3) => {
  var r2 = e, { parser: i2 } = t5, a2 = Q(n3[0], `url`).url;
  if (!i2.settings[r2(890)]({ command: r2(801), url: a2 })) return i2[r2(844)](`\\url`);
  for (var o2 = [], s2 = 0; s2 < a2[r2(739)]; s2++) {
    var c2 = a2[s2];
    c2 === `~` && (c2 = r2(447)), o2.push({ type: `textord`, mode: r2(1033), text: c2 });
  }
  var l2 = { type: `text`, mode: i2.mode, font: `\\texttt`, body: o2 };
  return { type: r2(774), mode: i2[r2(514)], href: a2, body: J(l2) };
} }), q({ type: e(666), names: [`\\hbox`], props: { numArgs: 1, argTypes: [e(1033)], allowedInText: true, primitive: true }, handler(e3, t5) {
  var { parser: n3 } = e3;
  return { type: `hbox`, mode: n3.mode, body: J(t5[0]) };
}, htmlBuilder(t5, n3) {
  var r2 = e;
  return Wt(fn(t5[r2(713)], n3[r2(1006)](``), false));
}, mathmlBuilder(e3, t5) {
  return new X(`mrow`, jn(e3.body, t5.withFont(``)));
} }), q({ type: `html`, names: [`\\htmlClass`, `\\htmlId`, `\\htmlStyle`, e(972)], props: { numArgs: 2, argTypes: [e(579), `original`], allowedInText: true }, handler: (n3, r2) => {
  var i2 = e, { parser: a2, funcName: o2, token: s2 } = n3, c2 = Q(r2[0], `raw`).string, l2 = r2[1];
  a2.settings.strict && a2.settings.reportNonstrict(`htmlExtension`, `HTML extension is disabled on strict mode`);
  var u2, d2 = {};
  switch (o2) {
    case `\\htmlClass`:
      d2.class = c2, u2 = { command: i2(518), class: c2 };
      break;
    case `\\htmlId`:
      d2.id = c2, u2 = { command: `\\htmlId`, id: c2 };
      break;
    case i2(300):
      d2.style = c2, u2 = { command: `\\htmlStyle`, style: c2 };
      break;
    case `\\htmlData`:
      for (var f2 = c2.split(`,`), p2 = 0; p2 < f2.length; p2++) {
        var m2 = f2[p2], h2 = m2.indexOf(`=`);
        if (h2 < 0) throw new t(`\\htmlData key/value '` + m2 + `' missing equals sign`);
        var g2 = m2.slice(0, h2), _2 = m2.slice(h2 + 1);
        d2[`data-` + g2[i2(489)]()] = _2;
      }
      u2 = { command: `\\htmlData`, attributes: d2 };
      break;
    default:
      throw Error(`Unrecognized html command`);
  }
  return a2.settings.isTrusted(u2) ? { type: `html`, mode: a2.mode, attributes: d2, body: J(l2) } : a2.formatUnsupportedCmd(o2);
}, htmlBuilder: (t5, n3) => {
  var r2 = e, i2 = fn(t5.body, n3, false), a2 = [r2(1023)];
  t5.attributes.class && a2.push(...t5.attributes[r2(728)].trim().split(/\s+/));
  var o2 = W(a2, i2, n3);
  for (var s2 in t5.attributes) s2 !== `class` && t5.attributes.hasOwnProperty(s2) && o2.setAttribute(s2, t5.attributes[s2]);
  return o2;
}, mathmlBuilder: (e3, t5) => Mn(e3.body, t5) }), q({ type: `htmlmathml`, names: [`\\html@mathml`], props: { numArgs: 2, allowedInArgument: true, allowedInText: true }, handler: (t5, n3) => {
  var r2 = e, { parser: i2 } = t5;
  return { type: r2(780), mode: i2.mode, html: J(n3[0]), mathml: J(n3[1]) };
}, htmlBuilder: (e3, t5) => Wt(fn(e3.html, t5, false)), mathmlBuilder: (e3, t5) => Mn(e3.mathml, t5) });
var Di = function(n3) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/[e(938)](n3)) return { number: +n3, unit: `bp` };
  var r2 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n3);
  if (!r2) throw new t(`Invalid size: '` + n3 + `' in \\includegraphics`);
  var i2 = { number: +(r2[1] + r2[2]), unit: r2[3] };
  if (!Te(i2)) throw new t(`Invalid unit: '` + i2.unit + `' in \\includegraphics.`);
  return i2;
};
q({ type: `includegraphics`, names: [`\\includegraphics`], props: { numArgs: 1, numOptionalArgs: 1, argTypes: [`raw`, `url`], allowedInText: false }, handler: (n3, r2, i2) => {
  var a2 = e, { parser: o2 } = n3, s2 = { number: 0, unit: `em` }, c2 = { number: 0.9, unit: `em` }, l2 = { number: 0, unit: `em` }, u2 = ``;
  if (i2[0]) for (var d2 = Q(i2[0], a2(579)).string.split(`,`), f2 = 0; f2 < d2.length; f2++) {
    var p2 = d2[f2].split(`=`);
    if (p2.length === 2) {
      var m2 = p2[1].trim();
      switch (p2[0].trim()) {
        case a2(852):
          u2 = m2;
          break;
        case `width`:
          s2 = Di(m2);
          break;
        case `height`:
          c2 = Di(m2);
          break;
        case `totalheight`:
          l2 = Di(m2);
          break;
        default:
          throw new t(`Invalid key: '` + p2[0] + a2(655));
      }
    }
  }
  var h2 = Q(r2[0], `url`).url;
  return u2 === `` && (u2 = h2, u2 = u2[a2(867)](/^.*[\\/]/, ``), u2 = u2.substring(0, u2.lastIndexOf(`.`))), o2.settings.isTrusted({ command: `\\includegraphics`, url: h2 }) ? { type: a2(301), mode: o2.mode, alt: u2, width: s2, height: c2, totalheight: l2, src: h2 } : o2.formatUnsupportedCmd(`\\includegraphics`);
}, htmlBuilder: (e3, t5) => {
  var n3 = k(e3.height, t5), r2 = 0;
  e3.totalheight.number > 0 && (r2 = k(e3.totalheight, t5) - n3);
  var i2 = 0;
  e3.width.number > 0 && (i2 = k(e3.width, t5));
  var a2 = { height: A(n3 + r2) };
  i2 > 0 && (a2.width = A(i2)), r2 > 0 && (a2.verticalAlign = A(-r2));
  var o2 = new Pe(e3.src, e3.alt, a2);
  return o2.height = n3, o2.depth = r2, o2;
}, mathmlBuilder: (t5, n3) => {
  var r2 = e, i2 = new X(`mglyph`, []);
  i2.setAttribute(`alt`, t5[r2(852)]);
  var a2 = k(t5.height, n3), o2 = 0;
  if (t5.totalheight.number > 0 && (o2 = k(t5.totalheight, n3) - a2, i2[r2(362)](`valign`, A(-o2))), i2[r2(362)](`height`, A(a2 + o2)), t5[r2(348)].number > 0) {
    var s2 = k(t5[r2(348)], n3);
    i2[r2(362)](r2(348), A(s2));
  }
  return i2.setAttribute(r2(837), t5[r2(837)]), i2;
} }), q({ type: `kern`, names: [`\\kern`, `\\mkern`, `\\hskip`, `\\mskip`], props: { numArgs: 1, argTypes: [e(1086)], primitive: true, allowedInText: true }, handler(t5, n3) {
  var r2 = e, { parser: i2, funcName: a2 } = t5, o2 = Q(n3[0], `size`);
  if (i2.settings[r2(974)]) {
    var s2 = a2[1] === `m`, c2 = o2.value[r2(652)] === `mu`;
    s2 ? (c2 || i2.settings.reportNonstrict(r2(862), `LaTeX's ` + a2 + ` supports only mu units, ` + (`not ` + o2.value.unit + ` units`)), i2.mode !== `math` && i2.settings.reportNonstrict(`mathVsTextUnits`, `LaTeX's ` + a2 + ` works only in math mode`)) : c2 && i2[r2(834)].reportNonstrict(`mathVsTextUnits`, `LaTeX's ` + a2 + ` doesn't support mu units`);
  }
  return { type: `kern`, mode: i2.mode, dimension: o2.value };
}, htmlBuilder(t5, n3) {
  return qt(t5[e(316)], n3);
}, mathmlBuilder(e3, t5) {
  return new Sn(k(e3.dimension, t5));
} }), q({ type: e(955), names: [`\\mathllap`, e(361), `\\mathclap`], props: { numArgs: 1, allowedInText: true }, handler: (e3, t5) => {
  var { parser: n3, funcName: r2 } = e3, i2 = t5[0];
  return { type: `lap`, mode: n3.mode, alignment: r2.slice(5), body: i2 };
}, htmlBuilder: (t5, n3) => {
  var r2 = e, i2;
  t5.alignment === `clap` ? (i2 = W([], [Y(t5.body, n3)]), i2 = W([`inner`], [i2], n3)) : i2 = W([`inner`], [Y(t5.body, n3)]);
  var a2 = W([`fix`], []), o2 = W([t5.alignment], [i2, a2], n3), s2 = W([r2(855)]);
  return s2.style.height = A(o2[r2(769)] + o2.depth), o2.depth && (s2.style[r2(772)] = A(-o2.depth)), o2.children.unshift(s2), o2 = W([r2(580)], [o2], n3), W([`mord`, `vbox`], [o2], n3);
}, mathmlBuilder: (t5, n3) => {
  var r2 = e, i2 = new X(`mpadded`, [Z(t5.body, n3)]);
  if (t5.alignment !== `rlap`) {
    var a2 = t5.alignment === `llap` ? `-1` : `-0.5`;
    i2.setAttribute(`lspace`, a2 + r2(348));
  }
  return i2.setAttribute(`width`, r2(452)), i2;
} }), q({ type: e(688), names: [`\\(`, `$`], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(t5, n3) {
  var r2 = e, { funcName: i2, parser: a2 } = t5, o2 = a2.mode;
  a2.switchMode(`math`);
  var s2 = i2 === `\\(` ? `\\)` : `$`, c2 = a2[r2(961)](false, s2);
  return a2.expect(s2), a2.switchMode(o2), { type: `styling`, mode: a2.mode, style: `text`, resetFont: true, body: c2 };
} }), q({ type: e(1033), names: [`\\)`, `\\]`], props: { numArgs: 0, allowedInText: true, allowedInMath: false }, handler(n3, r2) {
  throw new t(e(804) + n3.funcName);
} });
var Oi = (t5, n3) => {
  var r2 = e;
  switch (n3.style[r2(1086)]) {
    case D[r2(686)][r2(1086)]:
      return t5[r2(331)];
    case D[r2(367)].size:
      return t5[r2(1033)];
    case D.SCRIPT.size:
      return t5.script;
    case D.SCRIPTSCRIPT.size:
      return t5.scriptscript;
    default:
      return t5.text;
  }
};
q({ type: `mathchoice`, names: [`\\mathchoice`], props: { numArgs: 4, primitive: true }, handler: (e3, t5) => {
  var { parser: n3 } = e3;
  return { type: `mathchoice`, mode: n3.mode, display: J(t5[0]), text: J(t5[1]), script: J(t5[2]), scriptscript: J(t5[3]) };
}, htmlBuilder: (e3, t5) => Wt(fn(Oi(e3, t5), t5, false)), mathmlBuilder: (e3, t5) => Mn(Oi(e3, t5), t5) });
var ki = (t5, n3, r2, i2, a2, o2, s2) => {
  var c2 = e;
  t5 = W([], [t5]);
  var u2 = r2 && l(r2), d2, f2;
  if (n3) {
    var p2 = Y(n3, i2.havingStyle(a2.sup()), i2);
    f2 = { elem: p2, kern: Math.max(i2.fontMetrics().bigOpSpacing1, i2[c2(1057)]().bigOpSpacing3 - p2.depth) };
  }
  if (r2) {
    var m2 = Y(r2, i2.havingStyle(a2.sub()), i2);
    d2 = { elem: m2, kern: Math.max(i2.fontMetrics().bigOpSpacing2, i2.fontMetrics().bigOpSpacing4 - m2.height) };
  }
  var h2;
  if (f2 && d2) h2 = G({ positionType: `bottom`, positionData: i2.fontMetrics().bigOpSpacing5 + d2.elem.height + d2.elem[c2(882)] + d2.kern + t5.depth + s2, children: [{ type: `kern`, size: i2.fontMetrics().bigOpSpacing5 }, { type: c2(818), elem: d2.elem, marginLeft: A(-o2) }, { type: `kern`, size: d2.kern }, { type: c2(818), elem: t5 }, { type: `kern`, size: f2[c2(976)] }, { type: `elem`, elem: f2.elem, marginLeft: A(o2) }, { type: `kern`, size: i2.fontMetrics().bigOpSpacing5 }] });
  else if (d2) h2 = G({ positionType: `top`, positionData: t5.height - s2, children: [{ type: `kern`, size: i2.fontMetrics().bigOpSpacing5 }, { type: `elem`, elem: d2.elem, marginLeft: A(-o2) }, { type: `kern`, size: d2.kern }, { type: `elem`, elem: t5 }] });
  else if (f2) h2 = G({ positionType: `bottom`, positionData: t5[c2(882)] + s2, children: [{ type: `elem`, elem: t5 }, { type: `kern`, size: f2[c2(976)] }, { type: `elem`, elem: f2.elem, marginLeft: A(o2) }, { type: c2(976), size: i2.fontMetrics().bigOpSpacing5 }] });
  else return t5;
  var g2 = [h2];
  if (d2 && o2 !== 0 && !u2) {
    var _2 = W([c2(310)], [], i2);
    _2[c2(956)].marginRight = A(o2), g2.unshift(_2);
  }
  return W([`mop`, c2(469)], g2, i2);
}, Ai = /* @__PURE__ */ new Set([`\\smallint`]), ji = (t5, n3) => {
  var r2 = e, i2, a2, o2 = false, s2;
  t5.type === `supsub` ? (i2 = t5.sup, a2 = t5.sub, s2 = Q(t5.base, `op`), o2 = true) : s2 = Q(t5, `op`);
  var c2 = n3.style, l2 = false;
  c2.size === D.DISPLAY.size && s2[r2(1066)] && !Ai.has(s2.name) && (l2 = true);
  var u2, d2;
  if (s2.symbol) {
    var f2 = l2 ? `Size2-Regular` : `Size1-Regular`, p2 = ``;
    if ((s2.name === `\\oiint` || s2.name === r2(565)) && (p2 = s2.name.slice(1), s2[r2(471)] = p2 === `oiint` ? r2(629) : `\\iiint`), u2 = Pt(s2.name, f2, `math`, n3, [`mop`, r2(754), l2 ? `large-op` : `small-op`]), d2 = u2.italic, p2.length > 0) {
      var m2 = Zt(p2 + `Size` + (l2 ? `2` : `1`), n3);
      u2 = G({ positionType: `individualShift`, children: [{ type: `elem`, elem: u2, shift: 0 }, { type: `elem`, elem: m2, shift: l2 ? 0.08 : 0 }] }), s2.name = `\\` + p2, u2.classes.unshift(r2(392)), u2.italic = d2;
    }
  } else if (s2.body) {
    var h2 = fn(s2.body, n3, true);
    h2.length === 1 && h2[0] instanceof Ie ? (u2 = h2[0], u2.classes[0] = `mop`) : u2 = W([`mop`], h2, n3);
  } else {
    for (var g2 = [], _2 = 1; _2 < s2[r2(471)][r2(739)]; _2++) g2.push(Ft(s2.name[_2], s2[r2(514)], n3));
    u2 = W([r2(392)], g2, n3);
  }
  var v2 = 0, y2 = 0;
  return (u2 instanceof Ie || s2.name === `\\oiint` || s2.name === `\\oiiint`) && !s2.suppressBaseShift && (v2 = (u2.height - u2.depth) / 2 - n3.fontMetrics().axisHeight, y2 = u2.italic ?? 0), o2 ? ki(u2, i2, a2, n3, c2, y2, v2) : (v2 && (u2[r2(956)][r2(797)] = `relative`, u2[r2(956)][r2(745)] = A(v2)), u2);
}, Mi = (t5, n3) => {
  var r2 = e, i2;
  if (t5.symbol) i2 = new X(`mo`, [Tn(t5.name, t5.mode)]), Ai.has(t5[r2(471)]) && i2.setAttribute(`largeop`, `false`);
  else if (t5.body) i2 = new X(`mo`, jn(t5.body, n3));
  else {
    i2 = new X(`mi`, [new xn(t5.name.slice(1))]);
    var a2 = new X(`mo`, [Tn(`\u2061`, `text`)]);
    i2 = t5.parentIsSupSub ? new X(`mrow`, [i2, a2]) : bn([i2, a2]);
  }
  return i2;
}, Ni = { "\u220F": `\\prod`, "\u2210": `\\coprod`, "\u2211": `\\sum`, "\u22C0": e(584), "\u22C1": `\\bigvee`, "\u22C2": `\\bigcap`, "\u22C3": e(444), "\u2A00": `\\bigodot`, "\u2A01": `\\bigoplus`, "\u2A02": `\\bigotimes`, "\u2A04": `\\biguplus`, "\u2A06": `\\bigsqcup` };
q({ type: `op`, names: `\\coprod.\\bigvee.\\bigwedge.\\biguplus.\\bigcap.\\bigcup.\\intop.\\prod.\\sum.\\bigotimes.\\bigoplus.\\bigodot.\\bigsqcup.\\smallint.\u220F.\u2210.\u2211.\u22C0.\u22C1.\u22C2.\u22C3.\u2A00.\u2A01.\u2A02.\u2A04.\u2A06`[e(849)](`.`), props: { numArgs: 0 }, handler: (e3, t5) => {
  var { parser: n3, funcName: r2 } = e3, i2 = r2;
  return i2.length === 1 && (i2 = Ni[i2]), { type: `op`, mode: n3.mode, limits: true, parentIsSupSub: false, symbol: true, name: i2 };
}, htmlBuilder: ji, mathmlBuilder: Mi }), q({ type: `op`, names: [`\\mathop`], props: { numArgs: 1, primitive: true }, handler: (e3, t5) => {
  var { parser: n3 } = e3, r2 = t5[0];
  return { type: `op`, mode: n3.mode, limits: false, parentIsSupSub: false, symbol: false, body: J(r2) };
}, htmlBuilder: ji, mathmlBuilder: Mi });
var Pi = { "\u222B": `\\int`, "\u222C": `\\iint`, "\u222D": `\\iiint`, "\u222E": `\\oint`, "\u222F": e(417), "\u2230": `\\oiiint` };
q({ type: `op`, names: `\\arcsin.\\arccos.\\arctan.\\arctg.\\arcctg.\\arg.\\ch.\\cos.\\cosec.\\cosh.\\cot.\\cotg.\\coth.\\csc.\\ctg.\\cth.\\deg.\\dim.\\exp.\\hom.\\ker.\\lg.\\ln.\\log.\\sec.\\sin.\\sinh.\\sh.\\tan.\\tanh.\\tg.\\th`.split(`.`), props: { numArgs: 0 }, handler(e3) {
  var { parser: t5, funcName: n3 } = e3;
  return { type: `op`, mode: t5.mode, limits: false, parentIsSupSub: false, symbol: false, name: n3 };
}, htmlBuilder: ji, mathmlBuilder: Mi }), q({ type: `op`, names: [`\\det`, `\\gcd`, `\\inf`, `\\lim`, `\\max`, `\\min`, `\\Pr`, e(838)], props: { numArgs: 0 }, handler(e3) {
  var { parser: t5, funcName: n3 } = e3;
  return { type: `op`, mode: t5.mode, limits: true, parentIsSupSub: false, symbol: false, name: n3 };
}, htmlBuilder: ji, mathmlBuilder: Mi }), q({ type: `op`, names: [e(1022), `\\iint`, `\\iiint`, `\\oint`, `\\oiint`, `\\oiiint`, `\u222B`, `\u222C`, `\u222D`, `\u222E`, `\u222F`, `\u2230`], props: { numArgs: 0, allowedInArgument: true }, handler(t5) {
  var n3 = e, { parser: r2, funcName: i2 } = t5, a2 = i2;
  return a2[n3(739)] === 1 && (a2 = Pi[a2]), { type: `op`, mode: r2.mode, limits: false, parentIsSupSub: false, symbol: true, name: a2 };
}, htmlBuilder: ji, mathmlBuilder: Mi });
var Fi = (t5, n3) => {
  var r2 = e, i2, a2, o2 = false, s2;
  t5.type === `supsub` ? (i2 = t5.sup, a2 = t5.sub, s2 = Q(t5.base, `operatorname`), o2 = true) : s2 = Q(t5, `operatorname`);
  var c2;
  if (s2[r2(713)][r2(739)] > 0) {
    for (var l2 = fn(s2.body.map((e3) => {
      var t6 = `text` in e3 ? e3.text : void 0;
      return typeof t6 == `string` ? { type: `textord`, mode: e3.mode, text: t6 } : e3;
    }), n3.withFont(`mathrm`), true), u2 = 0; u2 < l2[r2(739)]; u2++) {
      var d2 = l2[u2];
      d2 instanceof Ie && (d2.text = d2[r2(1033)].replace(/\u2212/, `-`).replace(/\u2217/, `*`));
    }
    c2 = W([`mop`], l2, n3);
  } else c2 = W([`mop`], [], n3);
  return o2 ? ki(c2, i2, a2, n3, n3.style, 0, 0) : c2;
};
q({ type: `operatorname`, names: [`\\operatorname@`, `\\operatornamewithlimits`], props: { numArgs: 1 }, handler: (e3, t5) => {
  var { parser: n3, funcName: r2 } = e3, i2 = t5[0];
  return { type: `operatorname`, mode: n3.mode, body: J(i2), alwaysHandleSupSub: r2 === `\\operatornamewithlimits`, limits: false, parentIsSupSub: false };
}, htmlBuilder: Fi, mathmlBuilder: (t5, n3) => {
  for (var r2 = e, i2 = jn(t5.body, n3[r2(1006)](`mathrm`)), a2 = true, o2 = 0; o2 < i2.length; o2++) {
    var s2 = i2[o2];
    if (!(s2 instanceof Sn)) if (s2 instanceof X) switch (s2.type) {
      case `mi`:
      case `mn`:
      case `mspace`:
      case `mtext`:
        break;
      case `mo`:
        var c2 = s2.children[0];
        s2[r2(406)].length === 1 && c2 instanceof xn ? c2.text = c2.text.replace(/\u2212/, `-`).replace(/\u2217/, `*`) : a2 = false;
        break;
      default:
        a2 = false;
    }
    else a2 = false;
  }
  a2 && (i2 = [new xn(i2.map((e3) => e3.toText()).join(``))]);
  var l2 = new X(`mi`, i2);
  l2.setAttribute(`mathvariant`, `normal`);
  var u2 = new X(`mo`, [Tn(`\u2061`, r2(1033))]);
  return t5.parentIsSupSub ? new X(`mrow`, [l2, u2]) : bn([l2, u2]);
} }), $(e(382), `\\@ifstar\\operatornamewithlimits\\operatorname@`), on({ type: `ordgroup`, htmlBuilder(e3, t5) {
  return e3.semisimple ? Wt(fn(e3.body, t5, false)) : W([`mord`], fn(e3.body, t5, true), t5);
}, mathmlBuilder(e3, t5) {
  return Mn(e3.body, t5, true);
} }), q({ type: e(1030), names: [`\\overline`], props: { numArgs: 1 }, handler(e3, t5) {
  var { parser: n3 } = e3, r2 = t5[0];
  return { type: `overline`, mode: n3.mode, body: r2 };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = Y(t5.body, n3.havingCrampedStyle()), a2 = Ht(`overline-line`, n3), o2 = n3[r2(1057)]().defaultRuleThickness;
  return W([`mord`, `overline`], [G({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: i2 }, { type: `kern`, size: 3 * o2 }, { type: `elem`, elem: a2 }, { type: `kern`, size: o2 }] })], n3);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = new X(`mo`, [new xn(`\u203E`)]);
  i2.setAttribute(`stretchy`, `true`);
  var a2 = new X(`mover`, [Z(t5[r2(713)], n3), i2]);
  return a2.setAttribute(r2(397), r2(785)), a2;
} }), q({ type: e(370), names: [`\\phantom`], props: { numArgs: 1, allowedInText: true }, handler: (e3, t5) => {
  var { parser: n3 } = e3, r2 = t5[0];
  return { type: `phantom`, mode: n3.mode, body: J(r2) };
}, htmlBuilder: (t5, n3) => Wt(fn(t5[e(713)], n3[e(631)](), false)), mathmlBuilder: (t5, n3) => new X(e(685), jn(t5[e(713)], n3)) }), $(`\\hphantom`, e(820)), q({ type: `vphantom`, names: [`\\vphantom`], props: { numArgs: 1, allowedInText: true }, handler: (e3, t5) => {
  var { parser: n3 } = e3, r2 = t5[0];
  return { type: `vphantom`, mode: n3.mode, body: r2 };
}, htmlBuilder: (e3, t5) => W([`mord`, `rlap`], [W([`inner`], [Y(e3.body, t5.withPhantom())]), W([`fix`], [])], t5), mathmlBuilder: (t5, n3) => {
  var r2 = e, i2 = new X(`mpadded`, [new X(`mphantom`, jn(J(t5[r2(713)]), n3))]);
  return i2[r2(362)](r2(348), `0px`), i2;
} }), q({ type: `raisebox`, names: [`\\raisebox`], props: { numArgs: 2, argTypes: [e(1086), `hbox`], allowedInText: true }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5, a2 = Q(n3[0], `size`).value, o2 = n3[1];
  return { type: `raisebox`, mode: i2[r2(514)], dy: a2, body: o2 };
}, htmlBuilder(e3, t5) {
  var n3 = Y(e3.body, t5);
  return G({ positionType: `shift`, positionData: -k(e3.dy, t5), children: [{ type: `elem`, elem: n3 }] });
}, mathmlBuilder(e3, t5) {
  var n3 = new X(`mpadded`, [Z(e3.body, t5)]), r2 = e3.dy.number + e3.dy.unit;
  return n3.setAttribute(`voffset`, r2), n3;
} }), q({ type: `internal`, names: [`\\relax`], props: { numArgs: 0, allowedInText: true, allowedInArgument: true }, handler(e3) {
  var { parser: t5 } = e3;
  return { type: `internal`, mode: t5.mode };
} }), q({ type: `rule`, names: [`\\rule`], props: { numArgs: 2, numOptionalArgs: 1, allowedInText: true, allowedInMath: true, argTypes: [`size`, `size`, `size`] }, handler(e3, t5, n3) {
  var { parser: r2 } = e3, i2 = n3[0], a2 = Q(t5[0], `size`), o2 = Q(t5[1], `size`);
  return { type: `rule`, mode: r2.mode, shift: i2 && Q(i2, `size`).value, width: a2.value, height: o2.value };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = W([`mord`, `rule`], [], n3), a2 = k(t5.width, n3), o2 = k(t5.height, n3), s2 = t5[r2(424)] ? k(t5.shift, n3) : 0;
  return i2.style.borderRightWidth = A(a2), i2.style.borderTopWidth = A(o2), i2.style.bottom = A(s2), i2.width = a2, i2.height = o2 + s2, i2[r2(882)] = -s2, i2[r2(600)] = o2 * 1.125 * n3.sizeMultiplier, i2;
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = k(t5.width, n3), a2 = k(t5.height, n3), o2 = t5.shift ? k(t5.shift, n3) : 0, s2 = n3.color && n3.getColor() || `black`, c2 = new X(`mspace`);
  c2[r2(362)](`mathbackground`, s2), c2.setAttribute(`width`, A(i2)), c2.setAttribute(`height`, A(a2));
  var l2 = new X(`mpadded`, [c2]);
  return o2 >= 0 ? l2.setAttribute(`height`, A(o2)) : (l2[r2(362)](r2(769), A(o2)), l2.setAttribute(`depth`, A(-o2))), l2[r2(362)](r2(319), A(o2)), l2;
} });
function Ii(t5, n3, r2) {
  for (var i2 = e, a2 = fn(t5, n3, false), o2 = n3.sizeMultiplier / r2.sizeMultiplier, s2 = 0; s2 < a2.length; s2++) {
    var c2 = a2[s2].classes.indexOf(`sizing`);
    c2 < 0 ? Array.prototype.push.apply(a2[s2].classes, n3[i2(847)](r2)) : a2[s2].classes[c2 + 1] === `reset-size` + n3.size && (a2[s2].classes[c2 + 1] = `reset-size` + r2.size), a2[s2].height *= o2, a2[s2].depth *= o2;
  }
  return Wt(a2);
}
var Li = [`\\tiny`, `\\sixptsize`, `\\scriptsize`, e(643), `\\small`, e(616), `\\large`, `\\Large`, `\\LARGE`, e(986), `\\Huge`];
q({ type: `sizing`, names: Li, props: { numArgs: 0, allowedInText: true }, handler: (t5, n3) => {
  var r2 = e, { breakOnTokenText: i2, funcName: a2, parser: o2 } = t5, s2 = o2.parseExpression(false, i2);
  return { type: `sizing`, mode: o2[r2(514)], size: Li.indexOf(a2) + 1, body: s2 };
}, htmlBuilder: (e3, t5) => {
  var n3 = t5.havingSize(e3.size);
  return Ii(e3.body, n3, t5);
}, mathmlBuilder: (e3, t5) => {
  var n3 = t5.havingSize(e3.size), r2 = new X(`mstyle`, jn(e3.body, n3));
  return r2.setAttribute(`mathsize`, A(n3.sizeMultiplier)), r2;
} }), q({ type: `smash`, names: [`\\smash`], props: { numArgs: 1, numOptionalArgs: 1, allowedInText: true }, handler: (t5, n3, r2) => {
  var i2 = e, { parser: a2 } = t5, o2 = false, s2 = false, c2 = r2[0] && Q(r2[0], i2(767));
  if (c2) for (var l2, u2 = 0; u2 < c2.body.length; ++u2) {
    var d2 = c2.body[u2];
    if (l2 = Zn(d2).text, l2 === `t`) o2 = true;
    else if (l2 === `b`) s2 = true;
    else {
      o2 = false, s2 = false;
      break;
    }
  }
  else o2 = true, s2 = true;
  var f2 = n3[0];
  return { type: `smash`, mode: a2.mode, body: f2, smashHeight: o2, smashDepth: s2 };
}, htmlBuilder: (t5, n3) => {
  var r2 = e, i2 = W([], [Y(t5.body, n3)]);
  if (!t5[r2(533)] && !t5.smashDepth) return i2;
  if (t5.smashHeight && (i2.height = 0), t5.smashDepth && (i2.depth = 0), t5.smashHeight && t5.smashDepth) return W([`mord`, `smash`], [i2], n3);
  if (i2.children) for (var a2 = 0; a2 < i2[r2(406)].length; a2++) t5.smashHeight && (i2[r2(406)][a2][r2(769)] = 0), t5.smashDepth && (i2.children[a2].depth = 0);
  return W([`mord`], [G({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: i2 }] })], n3);
}, mathmlBuilder: (e3, t5) => {
  var n3 = new X(`mpadded`, [Z(e3.body, t5)]);
  return e3.smashHeight && n3.setAttribute(`height`, `0px`), e3.smashDepth && n3.setAttribute(`depth`, `0px`), n3;
} }), q({ type: `sqrt`, names: [`\\sqrt`], props: { numArgs: 1, numOptionalArgs: 1 }, handler(e3, t5, n3) {
  var { parser: r2 } = e3, i2 = n3[0], a2 = t5[0];
  return { type: `sqrt`, mode: r2.mode, body: a2, index: i2 };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = Y(t5.body, n3[r2(934)]());
  i2[r2(769)] === 0 && (i2.height = n3.fontMetrics().xHeight), i2 = Gt(i2, n3);
  var a2 = n3[r2(1057)]().defaultRuleThickness, o2 = a2;
  n3.style.id < D[r2(367)].id && (o2 = n3.fontMetrics().xHeight);
  var s2 = a2 + o2 / 4, { span: c2, ruleWidth: l2, advanceWidth: u2 } = Ir(i2.height + i2[r2(882)] + s2 + a2, n3), d2 = c2.height - l2;
  d2 > i2.height + i2.depth + s2 && (s2 = (s2 + d2 - i2.height - i2.depth) / 2);
  var f2 = c2.height - i2.height - s2 - l2;
  i2.style.paddingLeft = A(u2);
  var p2 = G({ positionType: `firstBaseline`, children: [{ type: `elem`, elem: i2, wrapperClasses: [`svg-align`] }, { type: `kern`, size: -(i2.height + f2) }, { type: `elem`, elem: c2 }, { type: r2(976), size: l2 }] });
  if (t5.index) {
    var m2 = n3.havingStyle(D.SCRIPTSCRIPT), h2 = Y(t5.index, m2, n3);
    return W([`mord`, `sqrt`], [W([r2(578)], [G({ positionType: `shift`, positionData: -(0.6 * (p2.height - p2.depth)), children: [{ type: `elem`, elem: h2 }] })]), p2], n3);
  } else return W([r2(992), `sqrt`], [p2], n3);
}, mathmlBuilder(t5, n3) {
  var r2 = e, { body: i2, index: a2 } = t5;
  return a2 ? new X(r2(875), [Z(i2, n3), Z(a2, n3)]) : new X(`msqrt`, [Z(i2, n3)]);
} });
var Ri = { display: D.DISPLAY, text: D.TEXT, script: D.SCRIPT, scriptscript: D.SCRIPTSCRIPT };
function zi(e3) {
  return e3 in Ri;
}
q({ type: `styling`, names: [`\\displaystyle`, e(799), `\\scriptstyle`, `\\scriptscriptstyle`], props: { numArgs: 0, allowedInText: true, primitive: true }, handler(t5, n3) {
  var r2 = e, { breakOnTokenText: i2, funcName: a2, parser: o2 } = t5, s2 = o2.parseExpression(true, i2), c2 = a2.slice(1, a2.length - 5);
  if (!zi(c2)) throw Error(`Unknown style: ` + c2);
  return { type: r2(688), mode: o2.mode, style: c2, body: s2 };
}, htmlBuilder(e3, t5) {
  var n3 = Ri[e3.style], r2 = t5.havingStyle(n3);
  return e3.resetFont && (r2 = r2.withFont(``)), Ii(e3.body, r2, t5);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = Ri[t5.style], a2 = n3.havingStyle(i2);
  t5.resetFont && (a2 = a2.withFont(``));
  var o2 = new X(r2(809), jn(t5.body, a2)), s2 = { display: [`0`, `true`], text: [`0`, `false`], script: [`1`, `false`], scriptscript: [`2`, `false`] }[t5[r2(956)]];
  return o2.setAttribute(r2(1e3), s2[0]), o2.setAttribute(`displaystyle`, s2[1]), o2;
} });
var Bi = function(t5, n3) {
  var r2 = e, i2 = t5.base;
  return i2 ? i2.type === `op` ? i2.limits && (n3.style.size === D.DISPLAY.size || i2.alwaysHandleSupSub) ? ji : null : i2.type === r2(328) ? i2[r2(942)] && (n3.style.size === D.DISPLAY.size || i2.limits) ? Fi : null : i2.type === `accent` ? l(i2.base) ? er : null : i2.type === `horizBrace` && !t5.sub === i2.isOver ? Ei : null : null;
};
on({ type: e(492), htmlBuilder(t5, n3) {
  var r2 = e, i2 = Bi(t5, n3);
  if (i2) return i2(t5, n3);
  var { base: a2, sup: o2, sub: s2 } = t5, c2 = Y(a2, n3), u2, d2, f2 = n3[r2(1057)](), p2 = 0, m2 = 0, h2 = a2 && l(a2);
  if (o2) {
    var g2 = n3.havingStyle(n3.style.sup());
    u2 = Y(o2, g2, n3), h2 || (p2 = c2.height - g2.fontMetrics().supDrop * g2.sizeMultiplier / n3.sizeMultiplier);
  }
  if (s2) {
    var _2 = n3[r2(420)](n3.style.sub());
    d2 = Y(s2, _2, n3), h2 || (m2 = c2[r2(882)] + _2.fontMetrics()[r2(746)] * _2.sizeMultiplier / n3.sizeMultiplier);
  }
  var v2 = n3.style === D.DISPLAY ? f2[r2(383)] : n3.style[r2(426)] ? f2.sup3 : f2.sup2, y2 = n3.sizeMultiplier, b2 = A(0.5 / f2.ptPerEm / y2), x2 = null;
  if (d2) {
    var S2 = t5.base && t5[r2(1002)][r2(953)] === `op` && t5.base.name && (t5.base.name === `\\oiint` || t5.base.name === `\\oiiint`);
    (c2 instanceof Ie || S2) && (x2 = A(-(c2.italic ?? 0)));
  }
  var C2;
  if (u2 && d2) {
    p2 = Math.max(p2, v2, u2[r2(882)] + 0.25 * f2.xHeight), m2 = Math.max(m2, f2.sub2);
    var w2 = 4 * f2[r2(815)];
    if (p2 - u2[r2(882)] - (d2.height - m2) < w2) {
      m2 = w2 - (p2 - u2.depth) + d2.height;
      var T2 = 0.8 * f2.xHeight - (p2 - u2.depth);
      T2 > 0 && (p2 += T2, m2 -= T2);
    }
    C2 = G({ positionType: `individualShift`, children: [{ type: r2(818), elem: d2, shift: m2, marginRight: b2, marginLeft: x2 }, { type: `elem`, elem: u2, shift: -p2, marginRight: b2 }] });
  } else if (d2) m2 = Math[r2(477)](m2, f2.sub1, d2.height - 0.8 * f2.xHeight), C2 = G({ positionType: `shift`, positionData: m2, children: [{ type: `elem`, elem: d2, marginLeft: x2, marginRight: b2 }] });
  else if (u2) p2 = Math.max(p2, v2, u2[r2(882)] + 0.25 * f2.xHeight), C2 = G({ positionType: r2(424), positionData: -p2, children: [{ type: `elem`, elem: u2, marginRight: b2 }] });
  else throw Error(`supsub must have either sup or sub.`);
  return W([gn(c2, `right`) || `mord`], [c2, W([`msupsub`], [C2])], n3);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = false, a2, o2;
  t5.base && t5.base.type === r2(500) && (o2 = !!t5[r2(522)], o2 === t5.base.isOver && (i2 = true, a2 = t5.base.isOver)), t5.base && (t5[r2(1002)].type === `op` || t5.base.type === `operatorname`) && (t5.base[r2(1024)] = true);
  var s2 = [Z(t5.base, n3)];
  t5.sub && s2.push(Z(t5.sub, n3)), t5.sup && s2.push(Z(t5.sup, n3));
  var c2;
  if (i2) c2 = a2 ? r2(733) : `munder`;
  else if (!t5[r2(858)]) {
    var l2 = t5.base;
    c2 = l2 && l2.type === `op` && l2.limits && (n3.style === D.DISPLAY || l2.alwaysHandleSupSub) || l2 && l2.type === r2(328) && l2.alwaysHandleSupSub && (l2.limits || n3.style === D.DISPLAY) ? `mover` : `msup`;
  } else if (t5.sup) {
    var u2 = t5.base;
    c2 = u2 && u2.type === `op` && u2.limits && n3.style === D.DISPLAY || u2 && u2.type === r2(328) && u2.alwaysHandleSupSub && (n3.style === D.DISPLAY || u2[r2(308)]) ? r2(1039) : `msubsup`;
  } else {
    var d2 = t5.base;
    c2 = d2 && d2.type === `op` && d2.limits && (n3.style === D.DISPLAY || d2.alwaysHandleSupSub) || d2 && d2.type === `operatorname` && d2[r2(942)] && (d2.limits || n3.style === D[r2(686)]) ? `munder` : `msub`;
  }
  return new X(c2, s2);
} }), on({ type: `atom`, htmlBuilder(e3, t5) {
  return Ft(e3.text, e3.mode, t5, [`m` + e3.family]);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = new X(`mo`, [Tn(t5.text, t5.mode)]);
  if (t5.family === `bin`) {
    var a2 = On(t5, n3);
    a2 === `bold-italic` && i2.setAttribute(`mathvariant`, a2);
  } else t5.family === r2(1082) ? i2.setAttribute(`separator`, `true`) : (t5.family === `open` || t5.family === `close`) && i2[r2(362)](`stretchy`, `false`);
  return i2;
} });
var Vi = { mi: `italic`, mn: `normal`, mtext: `normal` };
on({ type: `mathord`, htmlBuilder(e3, t5) {
  return Lt(e3, t5, `mathord`);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = new X(`mi`, [Tn(t5.text, t5.mode, n3)]), a2 = On(t5, n3) || `italic`;
  return a2 !== Vi[i2.type] && i2.setAttribute(r2(551), a2), i2;
} }), on({ type: `textord`, htmlBuilder(e3, t5) {
  return Lt(e3, t5, `textord`);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = Tn(t5[r2(1033)], t5.mode, n3), a2 = On(t5, n3) || `normal`, o2 = t5.mode === r2(1033) ? new X(`mtext`, [i2]) : /[0-9]/.test(t5.text) ? new X(`mn`, [i2]) : t5.text === `\\prime` ? new X(`mo`, [i2]) : new X(`mi`, [i2]);
  return a2 !== Vi[o2.type] && o2.setAttribute(`mathvariant`, a2), o2;
} });
var Hi = { "\\nobreak": `nobreak`, "\\allowbreak": `allowbreak` }, Ui = { " ": {}, "\\ ": {}, "~": { className: e(941) }, "\\space": {}, "\\nobreakspace": { className: `nobreak` } };
on({ type: `spacing`, htmlBuilder(n3, r2) {
  var i2 = e;
  if (Ui.hasOwnProperty(n3.text)) {
    var a2 = Ui[n3[i2(1033)]].className || ``;
    if (n3.mode === i2(1033)) {
      var o2 = Lt(n3, r2, `textord`);
      return o2.classes.push(a2), o2;
    } else return W([i2(310), a2], [Ft(n3.text, n3.mode, r2)], r2);
  } else if (Hi.hasOwnProperty(n3[i2(1033)])) return W([`mspace`, Hi[n3[i2(1033)]]], [], r2);
  else throw new t(`Unknown type of space "` + n3.text + `"`);
}, mathmlBuilder(n3, r2) {
  var i2 = e, a2;
  if (Ui.hasOwnProperty(n3[i2(1033)])) a2 = new X(`mtext`, [new xn(`\xA0`)]);
  else if (Hi.hasOwnProperty(n3.text)) return new X(`mspace`);
  else throw new t(`Unknown type of space "` + n3.text + `"`);
  return a2;
} });
var Wi = () => {
  var t5 = e, n3 = new X(`mtd`, []);
  return n3[t5(362)](`width`, `50%`), n3;
};
on({ type: `tag`, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = new X(r2(871), [new X(r2(805), [Wi(), new X(`mtd`, [Mn(t5.body, n3)]), Wi(), new X(`mtd`, [Mn(t5[r2(1065)], n3)])])]);
  return i2.setAttribute(`width`, `100%`), i2;
} });
var Gi = { "\\text": void 0, "\\textrm": `textrm`, "\\textsf": `textsf`, "\\texttt": `texttt`, "\\textnormal": `textrm` }, Ki = { "\\textbf": `textbf`, "\\textmd": `textmd` }, qi = { "\\textit": `textit`, "\\textup": `textup` }, Ji = (t5, n3) => {
  var r2 = e, i2 = t5[r2(339)];
  return i2 ? Gi[i2] ? n3.withTextFontFamily(Gi[i2]) : Ki[i2] ? n3.withTextFontWeight(Ki[i2]) : i2 === `\\emph` ? n3[r2(449)] === `textit` ? n3.withTextFontShape(`textup`) : n3.withTextFontShape(`textit`) : n3.withTextFontShape(qi[i2]) : n3;
};
q({ type: `text`, names: [`\\text`, `\\textrm`, `\\textsf`, `\\texttt`, `\\textnormal`, e(883), `\\textmd`, `\\textit`, `\\textup`, `\\emph`], props: { numArgs: 1, argTypes: [`text`], allowedInArgument: true, allowedInText: true }, handler(e3, t5) {
  var { parser: n3, funcName: r2 } = e3, i2 = t5[0];
  return { type: `text`, mode: n3.mode, body: J(i2), font: r2 };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = Ji(t5, n3);
  return W([`mord`, r2(1033)], fn(t5.body, i2, true), i2);
}, mathmlBuilder(e3, t5) {
  var n3 = Ji(e3, t5);
  return Mn(e3.body, n3);
} }), q({ type: `underline`, names: [e(669)], props: { numArgs: 1, allowedInText: true }, handler(t5, n3) {
  var r2 = e, { parser: i2 } = t5;
  return { type: `underline`, mode: i2[r2(514)], body: n3[0] };
}, htmlBuilder(t5, n3) {
  var r2 = Y(t5[e(713)], n3), i2 = Ht(`underline-line`, n3), a2 = n3.fontMetrics().defaultRuleThickness;
  return W([`mord`, `underline`], [G({ positionType: `top`, positionData: r2.height, children: [{ type: `kern`, size: a2 }, { type: `elem`, elem: i2 }, { type: `kern`, size: 3 * a2 }, { type: `elem`, elem: r2 }] })], n3);
}, mathmlBuilder(e3, t5) {
  var n3 = new X(`mo`, [new xn(`\u203E`)]);
  n3.setAttribute(`stretchy`, `true`);
  var r2 = new X(`munder`, [Z(e3.body, t5), n3]);
  return r2.setAttribute(`accentunder`, `true`), r2;
} }), q({ type: e(346), names: [e(425)], props: { numArgs: 1, argTypes: [`original`], allowedInText: false }, handler(e3, t5) {
  var { parser: n3 } = e3;
  return { type: `vcenter`, mode: n3.mode, body: t5[0] };
}, htmlBuilder(t5, n3) {
  var r2 = e, i2 = Y(t5[r2(713)], n3), a2 = n3.fontMetrics()[r2(375)];
  return G({ positionType: r2(424), positionData: 0.5 * (i2[r2(769)] - a2 - (i2.depth + a2)), children: [{ type: `elem`, elem: i2 }] });
}, mathmlBuilder(t5, n3) {
  var r2 = e;
  return new X(r2(611), [new X(`mpadded`, [Z(t5[r2(713)], n3)], [r2(346)])]);
} }), q({ type: e(326), names: [`\\verb`], props: { numArgs: 0, allowedInText: true }, handler(e3, n3, r2) {
  throw new t(`\\verb ended by end of line instead of matching delimiter`);
}, htmlBuilder(t5, n3) {
  for (var r2 = e, i2 = Yi(t5), a2 = [], o2 = n3[r2(420)](n3.style.text()), s2 = 0; s2 < i2[r2(739)]; s2++) {
    var c2 = i2[s2];
    c2 === `~` && (c2 = `\\textasciitilde`), a2.push(Pt(c2, `Typewriter-Regular`, t5.mode, o2, [`mord`, `texttt`]));
  }
  return W([`mord`, `text`].concat(o2.sizingClasses(n3)), zt(a2), o2);
}, mathmlBuilder(t5, n3) {
  var r2 = e, i2 = new X(`mtext`, [new xn(Yi(t5))]);
  return i2[r2(362)](r2(551), `monospace`), i2;
} });
var Yi = (t5) => t5[e(713)].replace(/ /g, t5[e(687)] ? `\u2423` : `\xA0`), Xi = nn, Zi = e(1037), Qi = `\\\\[a-zA-Z@]+`, $i = `\\\\[^\uFFFD-\uFFFD]`, ea = `(` + Qi + `)` + Zi + `*`, ta = `\\\\(
|[ \r	]+
?)[ \r	]*`, na = `[\u0300-\u036F]`, ra = RegExp(na + `+$`), ia = `(` + Zi + `+)|` + (ta + `|`) + `([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]` + (na + `*`) + e(795) + (na + `*`) + `|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5` + (`|` + ea) + (`|` + $i + `)`), aa = class {
  constructor(t5, n3) {
    var r2 = e;
    this.input = void 0, this[r2(834)] = void 0, this.tokenRegex = void 0, this[r2(429)] = void 0, this.input = t5, this.settings = n3, this.tokenRegex = new RegExp(ia, `g`), this.catcodes = { "%": 14, "~": 13 };
  }
  setCatcode(e3, t5) {
    this.catcodes[e3] = t5;
  }
  [e(589)]() {
    var n3 = e, r2 = this.input, i2 = this.tokenRegex.lastIndex;
    if (i2 === r2[n3(739)]) return new oi(`EOF`, new ai(this, i2, i2));
    var a2 = this.tokenRegex.exec(r2);
    if (a2 === null || a2.index !== i2) throw new t(`Unexpected character: '` + r2[i2] + `'`, new oi(r2[i2], new ai(this, i2, i2 + 1)));
    var o2 = a2[6] || a2[3] || (a2[2] ? `\\ ` : ` `);
    if (this.catcodes[o2] === 14) {
      var s2 = r2.indexOf(`
`, this[n3(543)].lastIndex);
      return s2 === -1 ? (this.tokenRegex[n3(891)] = r2.length, this[n3(834)].reportNonstrict(`commentAtEnd`, `% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)`)) : this[n3(543)].lastIndex = s2 + 1, this.lex();
    }
    return new oi(o2, new ai(this, i2, this.tokenRegex.lastIndex));
  }
}, oa = class {
  constructor(e3, t5) {
    e3 === void 0 && (e3 = {}), t5 === void 0 && (t5 = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t5, this.builtins = e3, this.undefStack = [];
  }
  beginGroup() {
    var t5 = e;
    this.undefStack[t5(610)]({});
  }
  [e(507)]() {
    var n3 = e;
    if (this[n3(812)][n3(739)] === 0) throw new t(`Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug`);
    var r2 = this[n3(812)].pop();
    for (var i2 in r2) r2[n3(1029)](i2) && (r2[i2] == null ? delete this.current[i2] : this.current[i2] = r2[i2]);
  }
  endGroups() {
    for (; this.undefStack.length > 0; ) this.endGroup();
  }
  [e(1019)](t5) {
    var n3 = e;
    return this.current[n3(1029)](t5) || this.builtins.hasOwnProperty(t5);
  }
  get(t5) {
    var n3 = e;
    return this.current.hasOwnProperty(t5) ? this[n3(854)][t5] : this[n3(615)][t5];
  }
  set(t5, n3, r2) {
    var i2 = e;
    if (r2 === void 0 && (r2 = false), r2) {
      for (var a2 = 0; a2 < this[i2(812)][i2(739)]; a2++) delete this.undefStack[a2][t5];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][t5] = n3);
    } else {
      var o2 = this.undefStack[this.undefStack[i2(739)] - 1];
      o2 && !o2[i2(1029)](t5) && (o2[t5] = this.current[t5]);
    }
    n3 == null ? delete this.current[t5] : this.current[t5] = n3;
  }
}, sa = ii;
$(`\\noexpand`, function(t5) {
  var n3 = e, r2 = t5[n3(499)]();
  return t5.isExpandable(r2[n3(1033)]) && (r2[n3(668)] = true, r2[n3(1061)] = true), { tokens: [r2], numArgs: 0 };
}), $(`\\expandafter`, function(e3) {
  var t5 = e3.popToken();
  return e3.expandOnce(true), { tokens: [t5], numArgs: 0 };
}), $(e(304), function(e3) {
  return { tokens: e3.consumeArgs(2)[0], numArgs: 0 };
}), $(`\\@secondoftwo`, function(t5) {
  return { tokens: t5[e(638)](2)[1], numArgs: 0 };
}), $(`\\@ifnextchar`, function(e3) {
  var t5 = e3.consumeArgs(3);
  e3.consumeSpaces();
  var n3 = e3.future();
  return t5[0].length === 1 && t5[0][0].text === n3.text ? { tokens: t5[1], numArgs: 0 } : { tokens: t5[2], numArgs: 0 };
}), $(`\\@ifstar`, `\\@ifnextchar *{\\@firstoftwo{#1}}`), $(`\\TextOrMath`, function(e3) {
  var t5 = e3.consumeArgs(2);
  return e3.mode === `text` ? { tokens: t5[0], numArgs: 0 } : { tokens: t5[1], numArgs: 0 };
});
var ca = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
$(`\\char`, function(n3) {
  var r2 = e, i2 = n3[r2(499)](), a2, o2 = 0;
  if (i2[r2(1033)] === `'`) a2 = 8, i2 = n3.popToken();
  else if (i2.text === `"`) a2 = 16, i2 = n3[r2(499)]();
  else if (i2.text === "`") if (i2 = n3[r2(499)](), i2[r2(1033)][0] === `\\`) o2 = i2.text.charCodeAt(1);
  else if (i2.text === `EOF`) throw new t(r2(601));
  else o2 = i2.text.charCodeAt(0);
  else a2 = 10;
  if (a2) {
    if (o2 = ca[i2.text], o2 == null || o2 >= a2) throw new t(`Invalid base-` + a2 + r2(667) + i2.text);
    for (var s2; (s2 = ca[n3.future().text]) != null && s2 < a2; ) o2 *= a2, o2 += s2, n3.popToken();
  }
  return `\\@char{` + o2 + `}`;
});
var la = (n3, r2, i2, a2) => {
  var o2 = e, s2 = n3[o2(459)]().tokens;
  if (s2.length !== 1) throw new t(o2(1042));
  var c2 = s2[0].text, l2 = n3.isDefined(c2);
  if (l2 && !r2) throw new t(`\\newcommand{` + c2 + o2(494) + (c2 + `; use \\renewcommand`));
  if (!l2 && !i2) throw new t(`\\renewcommand{` + c2 + `} when command ` + c2 + ` does not yet exist; use \\newcommand`);
  var u2 = 0;
  if (s2 = n3.consumeArg().tokens, s2.length === 1 && s2[0].text === `[`) {
    for (var d2 = ``, f2 = n3.expandNextToken(); f2.text !== `]` && f2.text !== `EOF`; ) d2 += f2.text, f2 = n3[o2(735)]();
    if (!d2.match(/^\s*[0-9]+\s*$/)) throw new t(o2(627) + d2);
    u2 = parseInt(d2), s2 = n3.consumeArg()[o2(409)];
  }
  return l2 && a2 || n3.macros.set(c2, { tokens: s2, numArgs: u2 }), ``;
};
$(`\\newcommand`, (e3) => la(e3, false, true, false)), $(`\\renewcommand`, (e3) => la(e3, true, false, false)), $(`\\providecommand`, (e3) => la(e3, true, true, true)), $(`\\message`, (t5) => {
  var n3 = e, r2 = t5.consumeArgs(1)[0];
  return console[n3(710)](r2.reverse()[n3(434)]((e3) => e3.text)[n3(552)](``)), ``;
}), $(`\\errmessage`, (e3) => {
  var t5 = e3.consumeArgs(1)[0];
  return console.error(t5.reverse().map((e4) => e4.text).join(``)), ``;
}), $(`\\show`, (t5) => {
  var n3 = e, r2 = t5.popToken(), i2 = r2.text;
  return console.log(r2, t5.macros.get(i2), Xi[i2], j[n3(988)][i2], j[n3(1033)][i2]), ``;
}), $(`\\bgroup`, `{`), $(`\\egroup`, `}`), $(`~`, e(391)), $(`\\lq`, "`"), $(`\\rq`, `'`), $(`\\aa`, `\\r a`), $(e(916), `\\r A`), $(`\\textcopyright`, "\\html@mathml{\\textcircled{c}}{\\char`\xA9}"), $(`\\copyright`, `\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}`), $(`\\textregistered`, e(315)), $(`\u212C`, `\\mathscr{B}`), $(`\u2130`, e(698)), $(`\u2131`, e(991)), $(`\u210B`, e(508)), $(`\u2110`, `\\mathscr{I}`), $(`\u2112`, `\\mathscr{L}`), $(`\u2133`, `\\mathscr{M}`), $(`\u211B`, `\\mathscr{R}`), $(`\u212D`, e(548)), $(`\u210C`, `\\mathfrak{H}`), $(`\u2128`, e(384)), $(e(478), `\\Bbb{k}`), $(`\\llap`, `\\mathllap{\\textrm{#1}}`), $(`\\rlap`, `\\mathrlap{\\textrm{#1}}`), $(`\\clap`, `\\mathclap{\\textrm{#1}}`), $(`\\mathstrut`, `\\vphantom{(}`), $(e(465), `\\underline{\\text{#1}}`), $(`\\not`, `\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}`), $(`\\neq`, "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), $(`\\ne`, `\\neq`), $(`\u2260`, e(690)), $(`\\notin`, "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), $(`\u2209`, e(1073)), $(`\u2258`, "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), $(`\u2259`, "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), $(`\u225A`, "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}"), $(`\u225B`, "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}"), $(`\u225D`, e(923)), $(`\u225E`, "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}"), $(`\u225F`, "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}"), $(`\u27C2`, `\\perp`), $(`\u203C`, `\\mathclose{!\\mkern-0.8mu!}`), $(`\u220C`, `\\notni`), $(`\u231C`, `\\ulcorner`), $(`\u231D`, e(985)), $(`\u231E`, `\\llcorner`), $(`\u231F`, `\\lrcorner`), $(`\xA9`, e(562)), $(`\xAE`, `\\textregistered`), $(e(962), `\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}`), $(`\\urcorner`, `\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}`), $(`\\llcorner`, `\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}`), $(`\\lrcorner`, e(1071)), $(`\\vdots`, `{\\varvdots\\rule{0pt}{15pt}}`), $(`\u22EE`, `\\vdots`), $(`\\varGamma`, `\\mathit{\\Gamma}`), $(`\\varDelta`, e(588)), $(`\\varTheta`, `\\mathit{\\Theta}`), $(e(453), `\\mathit{\\Lambda}`), $(`\\varXi`, `\\mathit{\\Xi}`), $(e(966), `\\mathit{\\Pi}`), $(`\\varSigma`, `\\mathit{\\Sigma}`), $(`\\varUpsilon`, `\\mathit{\\Upsilon}`), $(`\\varPhi`, `\\mathit{\\Phi}`), $(e(618), e(635)), $(`\\varOmega`, `\\mathit{\\Omega}`), $(`\\substack`, `\\begin{subarray}{c}#1\\end{subarray}`), $(`\\colon`, `\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax`), $(`\\boxed`, `\\fbox{$\\displaystyle{#1}$}`), $(`\\iff`, e(364)), $(e(952), `\\DOTSB\\;\\Longrightarrow\\;`), $(`\\impliedby`, `\\DOTSB\\;\\Longleftarrow\\;`), $(e(671), `{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}`), $(`\\ddddot`, `{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}`);
var ua = { ",": e(1013), "\\not": e(582), "+": `\\dotsb`, "=": `\\dotsb`, "<": `\\dotsb`, ">": e(582), "-": `\\dotsb`, "*": `\\dotsb`, ":": e(582), "\\DOTSB": `\\dotsb`, "\\coprod": `\\dotsb`, "\\bigvee": e(582), "\\bigwedge": `\\dotsb`, "\\biguplus": `\\dotsb`, "\\bigcap": e(582), "\\bigcup": `\\dotsb`, "\\prod": `\\dotsb`, "\\sum": `\\dotsb`, "\\bigotimes": `\\dotsb`, "\\bigoplus": `\\dotsb`, "\\bigodot": `\\dotsb`, "\\bigsqcup": e(582), "\\And": `\\dotsb`, "\\longrightarrow": `\\dotsb`, "\\Longrightarrow": `\\dotsb`, "\\longleftarrow": `\\dotsb`, "\\Longleftarrow": `\\dotsb`, "\\longleftrightarrow": `\\dotsb`, "\\Longleftrightarrow": `\\dotsb`, "\\mapsto": `\\dotsb`, "\\longmapsto": `\\dotsb`, "\\hookrightarrow": `\\dotsb`, "\\doteq": `\\dotsb`, "\\mathbin": `\\dotsb`, "\\mathrel": `\\dotsb`, "\\relbar": `\\dotsb`, "\\Relbar": e(582), "\\xrightarrow": `\\dotsb`, "\\xleftarrow": `\\dotsb`, "\\DOTSI": `\\dotsi`, "\\int": `\\dotsi`, "\\oint": `\\dotsi`, "\\iint": e(935), "\\iiint": e(935), "\\iiiint": `\\dotsi`, "\\idotsint": e(935), "\\DOTSX": `\\dotsx` }, da = /* @__PURE__ */ new Set([e(517), `rel`]);
$(`\\dots`, function(t5) {
  var n3 = e, r2 = `\\dotso`, i2 = t5[n3(936)]().text;
  return i2 in ua ? r2 = ua[i2] : (i2.slice(0, 4) === n3(659) || i2 in j.math && da[n3(1019)](j.math[i2].group)) && (r2 = `\\dotsb`), r2;
});
var fa = { ")": true, "]": true, "\\rbrack": true, "\\}": true, "\\rbrace": true, "\\rangle": true, "\\rceil": true, "\\rfloor": true, "\\rgroup": true, "\\rmoustache": true, "\\right": true, "\\bigr": true, "\\biggr": true, "\\Bigr": true, "\\Biggr": true, $: true, ";": true, ".": true, ",": true };
$(`\\dotso`, function(t5) {
  var n3 = e;
  return t5.future().text in fa ? `\\ldots\\,` : n3(724);
}), $(e(1013), function(e3) {
  var t5 = e3.future().text;
  return t5 in fa && t5 !== `,` ? `\\ldots\\,` : `\\ldots`;
}), $(`\\cdots`, function(e3) {
  return e3.future().text in fa ? `\\@cdots\\,` : `\\@cdots`;
}), $(`\\dotsb`, `\\cdots`), $(`\\dotsm`, `\\cdots`), $(e(935), `\\!\\cdots`), $(e(496), e(978)), $(`\\DOTSI`, e(521)), $(`\\DOTSB`, e(521)), $(`\\DOTSX`, `\\relax`), $(e(586), `\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax`), $(`\\,`, `\\tmspace+{3mu}{.1667em}`), $(`\\thinspace`, `\\,`), $(`\\>`, `\\mskip{4mu}`), $(`\\:`, `\\tmspace+{4mu}{.2222em}`), $(`\\medspace`, `\\:`), $(`\\;`, `\\tmspace+{5mu}{.2777em}`), $(`\\thickspace`, `\\;`), $(`\\!`, `\\tmspace-{3mu}{.1667em}`), $(e(835), `\\!`), $(e(414), `\\tmspace-{4mu}{.2222em}`), $(`\\negthickspace`, `\\tmspace-{5mu}{.277em}`), $(`\\enspace`, `\\kern.5em `), $(`\\enskip`, `\\hskip.5em\\relax`), $(e(450), `\\hskip1em\\relax`), $(e(403), e(802)), $(`\\tag`, `\\@ifstar\\tag@literal\\tag@paren`), $(`\\tag@paren`, e(944)), $(`\\tag@literal`, (n3) => {
  if (n3[e(947)].get(`\\df@tag`)) throw new t(`Multiple \\tag`);
  return `\\gdef\\df@tag{\\text{#1}}`;
}), $(e(861), `\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}`), $(`\\pod`, `\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)`), $(`\\pmod`, `\\pod{{\\rm mod}\\mkern6mu#1}`), $(`\\mod`, `\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1`), $(`\\newline`, `\\\\\\relax`), $(`\\TeX`, `\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}`);
var pa = A(Ue[`Main-Regular`][84][1] - 0.7 * Ue[e(366)][65][1]);
$(`\\LaTeX`, `\\textrm{\\html@mathml{` + (`L\\kern-.36em\\raisebox{` + pa + `}{\\scriptstyle A}`) + `\\kern-.15em\\TeX}{LaTeX}}`), $(`\\KaTeX`, `\\textrm{\\html@mathml{` + (`K\\kern-.17em\\raisebox{` + pa + `}{\\scriptstyle A}`) + `\\kern-.15em\\TeX}{KaTeX}}`), $(`\\hspace`, e(775)), $(`\\@hspace`, `\\hskip #1\\relax`), $(`\\@hspacer`, `\\rule{0pt}{0pt}\\hskip #1\\relax`), $(`\\ordinarycolon`, `:`), $(`\\vcentcolon`, `\\mathrel{\\mathop\\ordinarycolon}`), $(`\\dblcolon`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}`), $(`\\coloneqq`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}`), $(`\\Coloneqq`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}`), $(`\\coloneq`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}`), $(`\\Coloneq`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}`), $(`\\eqqcolon`, `\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}`), $(`\\Eqqcolon`, e(744)), $(`\\eqcolon`, `\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}`), $(`\\Eqcolon`, e(1062)), $(`\\colonapprox`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}`), $(`\\Colonapprox`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}`), $(`\\colonsim`, `\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}`), $(`\\Colonsim`, `\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}`), $(`\u2237`, `\\dblcolon`), $(`\u2239`, e(949)), $(`\u2254`, `\\coloneqq`), $(`\u2255`, `\\eqqcolon`), $(`\u2A74`, `\\Coloneqq`), $(`\\ratio`, `\\vcentcolon`), $(`\\coloncolon`, e(770)), $(`\\colonequals`, `\\coloneqq`), $(`\\coloncolonequals`, `\\Coloneqq`), $(`\\equalscolon`, `\\eqqcolon`), $(`\\equalscoloncolon`, `\\Eqqcolon`), $(e(866), `\\coloneq`), $(e(1044), `\\Coloneq`), $(`\\minuscolon`, `\\eqcolon`), $(e(568), e(940)), $(`\\coloncolonapprox`, `\\Colonapprox`), $(`\\coloncolonsim`, `\\Colonsim`), $(e(332), `\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}`), $(`\\simcoloncolon`, `\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}`), $(`\\approxcolon`, `\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}`), $(`\\approxcoloncolon`, `\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}`), $(e(696), "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}"), $(`\\limsup`, `\\DOTSB\\operatorname*{lim\\,sup}`), $(`\\liminf`, `\\DOTSB\\operatorname*{lim\\,inf}`), $(`\\injlim`, `\\DOTSB\\operatorname*{inj\\,lim}`), $(`\\projlim`, `\\DOTSB\\operatorname*{proj\\,lim}`), $(`\\varlimsup`, `\\DOTSB\\operatorname*{\\overline{lim}}`), $(`\\varliminf`, e(511)), $(e(341), e(371)), $(`\\varprojlim`, `\\DOTSB\\operatorname*{\\underleftarrow{lim}}`), $(`\\gvertneqq`, e(410)), $(e(599), `\\html@mathml{\\@lvertneqq}{\u2268}`), $(`\\ngeqq`, e(691)), $(`\\ngeqslant`, `\\html@mathml{\\@ngeqslant}{\u2271}`), $(`\\nleqq`, `\\html@mathml{\\@nleqq}{\u2270}`), $(e(322), e(823)), $(`\\nshortmid`, `\\html@mathml{\\@nshortmid}{\u2224}`), $(`\\nshortparallel`, `\\html@mathml{\\@nshortparallel}{\u2226}`), $(`\\nsubseteqq`, e(828)), $(e(766), e(845)), $(`\\varsubsetneq`, `\\html@mathml{\\@varsubsetneq}{\u228A}`), $(`\\varsubsetneqq`, e(1020)), $(`\\varsupsetneq`, `\\html@mathml{\\@varsupsetneq}{\u228B}`), $(`\\varsupsetneqq`, e(625)), $(e(824), e(930)), $(`\\jmath`, `\\html@mathml{\\@jmath}{\u0237}`), $(e(606), "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}"), $(`\\rrbracket`, "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}"), $(`\u27E6`, `\\llbracket`), $(`\u27E7`, `\\rrbracket`), $(`\\lBrace`, "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), $(e(1041), "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), $(`\u2983`, `\\lBrace`), $(`\u2984`, `\\rBrace`), $(`\\minuso`, e(879)), $(`\u29B5`, `\\minuso`), $(e(564), `\\downarrow`), $(`\\dArr`, `\\Downarrow`), $(`\\Darr`, `\\Downarrow`), $(`\\lang`, `\\langle`), $(`\\rang`, `\\rangle`), $(`\\uarr`, `\\uparrow`), $(`\\uArr`, `\\Uparrow`), $(`\\Uarr`, `\\Uparrow`), $(`\\N`, `\\mathbb{N}`), $(`\\R`, `\\mathbb{R}`), $(`\\Z`, `\\mathbb{Z}`), $(`\\alef`, `\\aleph`), $(`\\alefsym`, e(443)), $(`\\Alpha`, `\\mathrm{A}`), $(`\\Beta`, `\\mathrm{B}`), $(`\\bull`, e(846)), $(`\\Chi`, `\\mathrm{X}`), $(`\\clubs`, `\\clubsuit`), $(e(794), e(707)), $(e(840), `\\mathbb{C}`), $(`\\Dagger`, `\\ddagger`), $(`\\diamonds`, `\\diamondsuit`), $(`\\empty`, `\\emptyset`), $(`\\Epsilon`, `\\mathrm{E}`), $(`\\Eta`, `\\mathrm{H}`), $(`\\exist`, e(351)), $(`\\harr`, `\\leftrightarrow`), $(`\\hArr`, `\\Leftrightarrow`), $(`\\Harr`, `\\Leftrightarrow`), $(`\\hearts`, `\\heartsuit`), $(`\\image`, `\\Im`), $(e(646), `\\infty`), $(e(337), `\\mathrm{I}`), $(`\\isin`, `\\in`), $(`\\Kappa`, `\\mathrm{K}`), $(`\\larr`, `\\leftarrow`), $(`\\lArr`, `\\Leftarrow`), $(`\\Larr`, `\\Leftarrow`), $(`\\lrarr`, `\\leftrightarrow`), $(`\\lrArr`, e(661)), $(`\\Lrarr`, `\\Leftrightarrow`), $(e(481), `\\mathrm{M}`), $(`\\natnums`, `\\mathbb{N}`), $(`\\Nu`, `\\mathrm{N}`), $(`\\Omicron`, e(303)), $(`\\plusmn`, `\\pm`), $(`\\rarr`, e(1021)), $(e(381), e(393)), $(`\\Rarr`, `\\Rightarrow`), $(`\\real`, `\\Re`), $(`\\reals`, `\\mathbb{R}`), $(`\\Reals`, e(504)), $(`\\Rho`, e(1026)), $(e(395), `\\cdot`), $(`\\sect`, `\\S`), $(`\\spades`, `\\spadesuit`), $(`\\sub`, `\\subset`), $(e(1083), `\\subseteq`), $(e(718), e(1025)), $(`\\Tau`, e(752)), $(`\\thetasym`, e(764)), $(`\\weierp`, `\\wp`), $(`\\Zeta`, e(313)), $(`\\argmin`, `\\DOTSB\\operatorname*{arg\\,min}`), $(`\\argmax`, e(314)), $(e(317), `\\DOTSB\\mathop{\\operatorname{plim}}\\limits`), $(e(441), `\\mathinner{\\langle{#1}|}`), $(`\\ket`, `\\mathinner{|{#1}\\rangle}`), $(`\\braket`, `\\mathinner{\\langle{#1}\\rangle}`), $(`\\Bra`, `\\left\\langle#1\\right|`), $(`\\Ket`, `\\left|#1\\right\\rangle`);
var ma = (t5) => (n3) => {
  var r2 = e, i2 = n3.consumeArg()[r2(409)], a2 = n3.consumeArg()[r2(409)], o2 = n3.consumeArg().tokens, s2 = n3.consumeArg().tokens, c2 = n3[r2(947)].get(`|`), l2 = n3[r2(947)].get(`\\|`);
  n3.macros.beginGroup();
  var u2 = (e3) => (n4) => {
    var i3 = r2;
    t5 && (n4[i3(947)].set(`|`, c2), o2[i3(739)] && n4.macros.set(`\\|`, l2));
    var s3 = e3;
    return !e3 && o2.length && n4.future().text === `|` && (n4.popToken(), s3 = true), { tokens: s3 ? o2 : a2, numArgs: 0 };
  };
  n3.macros.set(`|`, u2(false)), o2.length && n3.macros.set(`\\|`, u2(true));
  var d2 = n3.consumeArg().tokens, f2 = n3.expandTokens([...s2, ...d2, ...i2]);
  return n3.macros.endGroup(), { tokens: f2.reverse(), numArgs: 0 };
};
$(`\\bra@ket`, ma(false)), $(`\\bra@set`, ma(true)), $(`\\Braket`, e(915)), $(`\\Set`, e(609)), $(e(704), e(529)), $(`\\angln`, e(1035)), $(`\\blue`, `\\textcolor{##6495ed}{#1}`), $(`\\orange`, `\\textcolor{##ffa500}{#1}`), $(`\\pink`, e(352)), $(`\\red`, `\\textcolor{##df0030}{#1}`), $(e(900), `\\textcolor{##28ae7b}{#1}`), $(`\\gray`, e(431)), $(`\\purple`, `\\textcolor{##9d38bd}{#1}`), $(e(798), e(567)), $(e(984), `\\textcolor{##80f6ff}{#1}`), $(`\\blueC`, `\\textcolor{##63d9ea}{#1}`), $(`\\blueD`, e(1063)), $(`\\blueE`, `\\textcolor{##0c7f99}{#1}`), $(e(1080), e(899)), $(`\\tealB`, `\\textcolor{##26edd5}{#1}`), $(`\\tealC`, `\\textcolor{##01d1c1}{#1}`), $(`\\tealD`, `\\textcolor{##01a995}{#1}`), $(`\\tealE`, `\\textcolor{##208170}{#1}`), $(`\\greenA`, `\\textcolor{##b6ffb0}{#1}`), $(`\\greenB`, `\\textcolor{##8af281}{#1}`), $(`\\greenC`, `\\textcolor{##74cf70}{#1}`), $(e(416), `\\textcolor{##1fab54}{#1}`), $(`\\greenE`, `\\textcolor{##0d923f}{#1}`), $(`\\goldA`, `\\textcolor{##ffd0a9}{#1}`), $(`\\goldB`, `\\textcolor{##ffbb71}{#1}`), $(`\\goldC`, `\\textcolor{##ff9c39}{#1}`), $(`\\goldD`, `\\textcolor{##e07d10}{#1}`), $(`\\goldE`, `\\textcolor{##a75a05}{#1}`), $(`\\redA`, `\\textcolor{##fca9a9}{#1}`), $(`\\redB`, `\\textcolor{##ff8482}{#1}`), $(`\\redC`, e(932)), $(e(910), `\\textcolor{##e84d39}{#1}`), $(`\\redE`, `\\textcolor{##bc2612}{#1}`), $(`\\maroonA`, e(495)), $(e(860), `\\textcolor{##ff92c6}{#1}`), $(`\\maroonC`, `\\textcolor{##ed5fa6}{#1}`), $(`\\maroonD`, `\\textcolor{##ca337c}{#1}`), $(`\\maroonE`, e(653)), $(e(1068), `\\textcolor{##ddd7ff}{#1}`), $(`\\purpleB`, `\\textcolor{##c6b9fc}{#1}`), $(`\\purpleC`, `\\textcolor{##aa87ff}{#1}`), $(`\\purpleD`, `\\textcolor{##7854ab}{#1}`), $(`\\purpleE`, `\\textcolor{##543b78}{#1}`), $(e(1048), `\\textcolor{##f5f9e8}{#1}`), $(`\\mintB`, e(738)), $(`\\mintC`, `\\textcolor{##e0e5cc}{#1}`), $(`\\grayA`, `\\textcolor{##f6f7f7}{#1}`), $(e(501), `\\textcolor{##f0f1f2}{#1}`), $(`\\grayC`, e(1045)), $(`\\grayD`, `\\textcolor{##d6d8da}{#1}`), $(`\\grayE`, `\\textcolor{##babec2}{#1}`), $(`\\grayF`, `\\textcolor{##888d93}{#1}`), $(`\\grayG`, e(644)), $(`\\grayH`, e(401)), $(`\\grayI`, e(642)), $(`\\kaBlue`, `\\textcolor{##314453}{#1}`), $(`\\kaGreen`, e(792));
var ha = { "^": true, _: true, "\\limits": true, "\\nolimits": true }, ga = class {
  constructor(t5, n3, r2) {
    var i2 = e;
    this.settings = void 0, this[i2(305)] = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = n3, this.expansionCount = 0, this.feed(t5), this.macros = new oa(sa, n3.macros), this.mode = r2, this.stack = [];
  }
  [e(683)](e3) {
    this.lexer = new aa(e3, this.settings);
  }
  switchMode(e3) {
    this.mode = e3;
  }
  beginGroup() {
    this.macros.beginGroup();
  }
  [e(507)]() {
    this.macros.endGroup();
  }
  endGroups() {
    var t5 = e;
    this[t5(947)][t5(999)]();
  }
  future() {
    var t5 = e;
    return this[t5(613)].length === 0 && this.pushToken(this.lexer.lex()), this.stack[this[t5(613)].length - 1];
  }
  popToken() {
    return this.future(), this.stack.pop();
  }
  pushToken(t5) {
    var n3 = e;
    this.stack[n3(610)](t5);
  }
  pushTokens(e3) {
    this.stack.push(...e3);
  }
  scanArgument(e3) {
    var t5, n3, r2;
    if (e3) {
      if (this.consumeSpaces(), this.future().text !== `[`) return null;
      t5 = this.popToken(), { tokens: r2, end: n3 } = this.consumeArg([`]`]);
    } else ({ tokens: r2, start: t5, end: n3 } = this.consumeArg());
    return this.pushToken(new oi(`EOF`, n3.loc)), this.pushTokens(r2), new oi(``, ai.range(t5, n3));
  }
  consumeSpaces() {
    for (; this.future().text === ` `; ) this.stack.pop();
  }
  consumeArg(n3) {
    var r2 = e, i2 = [], a2 = n3 && n3[r2(739)] > 0;
    a2 || this[r2(663)]();
    var o2 = this[r2(863)](), s2, c2 = 0, l2 = 0;
    do {
      if (s2 = this.popToken(), i2.push(s2), s2.text === `{`) ++c2;
      else if (s2.text === `}`) {
        if (--c2, c2 === -1) throw new t(r2(350), s2);
      } else if (s2.text === r2(470)) throw new t(`Unexpected end of input in a macro argument, expected '` + (n3 && a2 ? n3[l2] : `}`) + `'`, s2);
      if (n3 && a2) if ((c2 === 0 || c2 === 1 && n3[l2] === `{`) && s2.text === n3[l2]) {
        if (++l2, l2 === n3[r2(739)]) {
          i2.splice(-l2, l2);
          break;
        }
      } else l2 = 0;
    } while (c2 !== 0 || a2);
    return o2.text === `{` && i2[i2.length - 1].text === `}` && (i2.pop(), i2.shift()), i2.reverse(), { tokens: i2, start: o2, end: s2 };
  }
  [e(638)](e3, n3) {
    if (n3) {
      if (n3.length !== e3 + 1) throw new t(`The length of delimiters doesn't match the number of args!`);
      for (var r2 = n3[0], i2 = 0; i2 < r2.length; i2++) {
        var a2 = this.popToken();
        if (r2[i2] !== a2.text) throw new t(`Use of the macro doesn't match its definition`, a2);
      }
    }
    for (var o2 = [], s2 = 0; s2 < e3; s2++) o2.push(this.consumeArg(n3 && n3[s2 + 1]).tokens);
    return o2;
  }
  countExpansion(n3) {
    var r2 = e;
    if (this.expansionCount += n3, this.expansionCount > this.settings[r2(703)]) throw new t(`Too many expansions: infinite loop or need to increase maxExpand setting`);
  }
  expandOnce(n3) {
    var r2 = e, i2 = this.popToken(), a2 = i2.text, o2 = i2.noexpand ? null : this._getExpansion(a2);
    if (o2 == null || n3 && o2.unexpandable) {
      if (n3 && o2 == null && a2[0] === `\\` && !this.isDefined(a2)) throw new t(r2(790) + a2);
      return this.pushToken(i2), false;
    }
    this.countExpansion(1);
    var s2 = o2.tokens, c2 = this.consumeArgs(o2.numArgs, o2.delimiters);
    if (o2.numArgs) {
      s2 = s2.slice();
      for (var l2 = s2.length - 1; l2 >= 0; --l2) {
        var u2 = s2[l2];
        if (u2[r2(1033)] === `#`) {
          if (l2 === 0) throw new t(`Incomplete placeholder at end of macro body`, u2);
          if (u2 = s2[--l2], u2.text === `#`) s2.splice(l2 + 1, 1);
          else if (/^[1-9]$/.test(u2.text)) s2.splice(l2, 2, ...c2[u2.text - 1]);
          else throw new t(`Not a valid argument number`, u2);
        }
      }
    }
    return this[r2(897)](s2), s2.length;
  }
  expandAfterFuture() {
    var t5 = e;
    return this.expandOnce(), this[t5(863)]();
  }
  expandNextToken() {
    for (var t5 = e; ; ) if (this.expandOnce() === false) {
      var n3 = this[t5(613)].pop();
      return n3.treatAsRelax && (n3[t5(1033)] = t5(521)), n3;
    }
  }
  expandMacro(t5) {
    var n3 = e;
    return this.macros.has(t5) ? this[n3(596)]([new oi(t5)]) : void 0;
  }
  [e(596)](t5) {
    var n3 = e, r2 = [], i2 = this.stack.length;
    for (this.pushTokens(t5); this.stack.length > i2; ) if (this.expandOnce(true) === false) {
      var a2 = this.stack[n3(347)]();
      a2.treatAsRelax && (a2.treatAsRelax = (a2[n3(668)] = false, false)), r2.push(a2);
    }
    return this.countExpansion(r2.length), r2;
  }
  [e(430)](t5) {
    var n3 = e, r2 = this.expandMacro(t5);
    return r2 && r2.map((e3) => e3.text)[n3(552)](``);
  }
  [e(996)](t5) {
    var n3 = e, r2 = this[n3(947)].get(t5);
    if (r2 == null) return r2;
    if (t5.length === 1) {
      var i2 = this.lexer.catcodes[t5];
      if (i2 != null && i2 !== 13) return;
    }
    var a2 = typeof r2 == `function` ? r2(this) : r2;
    if (typeof a2 == n3(357)) {
      var o2 = 0;
      if (a2.includes(`#`)) for (var s2 = a2.replace(/##/g, ``); s2.includes(`#` + (o2 + 1)); ) ++o2;
      for (var c2 = new aa(a2, this.settings), l2 = [], u2 = c2.lex(); u2.text !== `EOF`; ) l2.push(u2), u2 = c2.lex();
      return l2.reverse(), { tokens: l2, numArgs: o2 };
    }
    return a2;
  }
  isDefined(e3) {
    return this.macros.has(e3) || Xi.hasOwnProperty(e3) || j.math.hasOwnProperty(e3) || j.text.hasOwnProperty(e3) || ha.hasOwnProperty(e3);
  }
  isExpandable(t5) {
    var n3 = e, r2 = this[n3(947)].get(t5);
    return r2 == null ? Xi.hasOwnProperty(t5) && !Xi[t5].primitive : typeof r2 == `string` || typeof r2 == `function` || !r2.unexpandable;
  }
}, _a = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, va = Object[e(960)]({ "\u208A": `+`, "\u208B": `-`, "\u208C": `=`, "\u208D": `(`, "\u208E": `)`, "\u2080": `0`, "\u2081": `1`, "\u2082": `2`, "\u2083": `3`, "\u2084": `4`, "\u2085": `5`, "\u2086": `6`, "\u2087": `7`, "\u2088": `8`, "\u2089": `9`, "\u2090": `a`, "\u2091": `e`, "\u2095": `h`, "\u1D62": `i`, "\u2C7C": `j`, "\u2096": `k`, "\u2097": `l`, "\u2098": `m`, "\u2099": `n`, "\u2092": `o`, "\u209A": `p`, "\u1D63": `r`, "\u209B": `s`, "\u209C": `t`, "\u1D64": `u`, "\u1D65": `v`, "\u2093": `x`, "\u1D66": `\u03B2`, "\u1D67": `\u03B3`, "\u1D68": `\u03C1`, "\u1D69": `\u03D5`, "\u1D6A": `\u03C7`, "\u207A": `+`, "\u207B": `-`, "\u207C": `=`, "\u207D": `(`, "\u207E": `)`, "\u2070": `0`, "\xB9": `1`, "\xB2": `2`, "\xB3": `3`, "\u2074": `4`, "\u2075": `5`, "\u2076": `6`, "\u2077": `7`, "\u2078": `8`, "\u2079": `9`, "\u1D2C": `A`, "\u1D2E": `B`, "\u1D30": `D`, "\u1D31": `E`, "\u1D33": `G`, "\u1D34": `H`, "\u1D35": `I`, "\u1D36": `J`, "\u1D37": `K`, "\u1D38": `L`, "\u1D39": `M`, "\u1D3A": `N`, "\u1D3C": `O`, "\u1D3E": `P`, "\u1D3F": `R`, "\u1D40": `T`, "\u1D41": `U`, "\u2C7D": `V`, "\u1D42": `W`, "\u1D43": `a`, "\u1D47": `b`, "\u1D9C": `c`, "\u1D48": `d`, "\u1D49": `e`, "\u1DA0": `f`, "\u1D4D": `g`, \u02B0: `h`, "\u2071": `i`, \u02B2: `j`, "\u1D4F": `k`, \u02E1: `l`, "\u1D50": `m`, \u207F: `n`, "\u1D52": `o`, "\u1D56": `p`, \u02B3: `r`, \u02E2: `s`, "\u1D57": `t`, "\u1D58": `u`, "\u1D5B": `v`, \u02B7: `w`, \u02E3: `x`, \u02B8: `y`, "\u1DBB": `z`, "\u1D5D": `\u03B2`, "\u1D5E": `\u03B3`, "\u1D5F": `\u03B4`, "\u1D60": `\u03D5`, "\u1D61": `\u03C7`, "\u1DBF": `\u03B8` }), ya = { "\u0301": { text: `\\'`, math: `\\acute` }, "\u0300": { text: "\\`", math: `\\grave` }, "\u0308": { text: `\\"`, math: `\\ddot` }, "\u0303": { text: `\\~`, math: `\\tilde` }, "\u0304": { text: `\\=`, math: `\\bar` }, "\u0306": { text: `\\u`, math: `\\breve` }, "\u030C": { text: `\\v`, math: `\\check` }, "\u0302": { text: `\\^`, math: e(520) }, "\u0307": { text: `\\.`, math: `\\dot` }, "\u030A": { text: `\\r`, math: `\\mathring` }, "\u030B": { text: `\\H` }, "\u0327": { text: `\\c` } }, ba = { \u00E1: `a\u0301`, \u00E0: `a\u0300`, \u00E4: `a\u0308`, \u01DF: `a\u0308\u0304`, \u00E3: `a\u0303`, \u0101: `a\u0304`, \u0103: `a\u0306`, \u1EAF: `a\u0306\u0301`, \u1EB1: `a\u0306\u0300`, \u1EB5: `a\u0306\u0303`, \u01CE: `a\u030C`, \u00E2: `a\u0302`, \u1EA5: `a\u0302\u0301`, \u1EA7: `a\u0302\u0300`, \u1EAB: `a\u0302\u0303`, \u0227: `a\u0307`, \u01E1: `a\u0307\u0304`, \u00E5: `a\u030A`, \u01FB: `a\u030A\u0301`, \u1E03: `b\u0307`, \u0107: `c\u0301`, \u1E09: `c\u0327\u0301`, \u010D: `c\u030C`, \u0109: `c\u0302`, \u010B: `c\u0307`, \u00E7: `c\u0327`, \u010F: `d\u030C`, \u1E0B: `d\u0307`, \u1E11: `d\u0327`, \u00E9: `e\u0301`, \u00E8: `e\u0300`, \u00EB: `e\u0308`, \u1EBD: `e\u0303`, \u0113: `e\u0304`, \u1E17: `e\u0304\u0301`, \u1E15: `e\u0304\u0300`, \u0115: `e\u0306`, \u1E1D: `e\u0327\u0306`, \u011B: `e\u030C`, \u00EA: `e\u0302`, \u1EBF: `e\u0302\u0301`, \u1EC1: `e\u0302\u0300`, \u1EC5: `e\u0302\u0303`, \u0117: `e\u0307`, \u0229: `e\u0327`, \u1E1F: `f\u0307`, \u01F5: `g\u0301`, \u1E21: `g\u0304`, \u011F: `g\u0306`, \u01E7: `g\u030C`, \u011D: `g\u0302`, \u0121: `g\u0307`, \u0123: `g\u0327`, \u1E27: `h\u0308`, \u021F: `h\u030C`, \u0125: `h\u0302`, \u1E23: `h\u0307`, \u1E29: `h\u0327`, \u00ED: `i\u0301`, \u00EC: `i\u0300`, \u00EF: `i\u0308`, \u1E2F: `i\u0308\u0301`, \u0129: `i\u0303`, \u012B: `i\u0304`, \u012D: `i\u0306`, \u01D0: `i\u030C`, \u00EE: `i\u0302`, \u01F0: `j\u030C`, \u0135: `j\u0302`, \u1E31: `k\u0301`, \u01E9: `k\u030C`, \u0137: `k\u0327`, \u013A: `l\u0301`, \u013E: `l\u030C`, \u013C: `l\u0327`, \u1E3F: `m\u0301`, \u1E41: `m\u0307`, \u0144: `n\u0301`, \u01F9: `n\u0300`, \u00F1: `n\u0303`, \u0148: `n\u030C`, \u1E45: `n\u0307`, \u0146: `n\u0327`, \u00F3: `o\u0301`, \u00F2: `o\u0300`, \u00F6: `o\u0308`, \u022B: `o\u0308\u0304`, \u00F5: `o\u0303`, \u1E4D: e(762), \u1E4F: `o\u0303\u0308`, \u022D: `o\u0303\u0304`, \u014D: `o\u0304`, \u1E53: e(679), \u1E51: e(929), \u014F: `o\u0306`, \u01D2: `o\u030C`, \u00F4: `o\u0302`, \u1ED1: `o\u0302\u0301`, \u1ED3: `o\u0302\u0300`, \u1ED7: `o\u0302\u0303`, \u022F: `o\u0307`, \u0231: `o\u0307\u0304`, \u0151: `o\u030B`, \u1E55: `p\u0301`, \u1E57: `p\u0307`, \u0155: `r\u0301`, \u0159: `r\u030C`, \u1E59: `r\u0307`, \u0157: `r\u0327`, \u015B: `s\u0301`, \u1E65: `s\u0301\u0307`, \u0161: `s\u030C`, \u1E67: e(585), \u015D: `s\u0302`, \u1E61: `s\u0307`, \u015F: `s\u0327`, \u1E97: `t\u0308`, \u0165: `t\u030C`, \u1E6B: `t\u0307`, \u0163: `t\u0327`, \u00FA: `u\u0301`, \u00F9: `u\u0300`, \u00FC: `u\u0308`, \u01D8: `u\u0308\u0301`, \u01DC: `u\u0308\u0300`, \u01D6: `u\u0308\u0304`, \u01DA: `u\u0308\u030C`, \u0169: `u\u0303`, \u1E79: e(817), \u016B: `u\u0304`, \u1E7B: `u\u0304\u0308`, \u016D: `u\u0306`, \u01D4: `u\u030C`, \u00FB: `u\u0302`, \u016F: `u\u030A`, \u0171: `u\u030B`, \u1E7D: `v\u0303`, \u1E83: `w\u0301`, \u1E81: `w\u0300`, \u1E85: `w\u0308`, \u0175: `w\u0302`, \u1E87: `w\u0307`, \u1E98: `w\u030A`, \u1E8D: `x\u0308`, \u1E8B: `x\u0307`, \u00FD: `y\u0301`, \u1EF3: `y\u0300`, \u00FF: `y\u0308`, \u1EF9: `y\u0303`, \u0233: `y\u0304`, \u0177: `y\u0302`, \u1E8F: `y\u0307`, \u1E99: `y\u030A`, \u017A: `z\u0301`, \u017E: `z\u030C`, \u1E91: `z\u0302`, \u017C: `z\u0307`, \u00C1: `A\u0301`, \u00C0: `A\u0300`, \u00C4: `A\u0308`, \u01DE: `A\u0308\u0304`, \u00C3: `A\u0303`, \u0100: `A\u0304`, \u0102: `A\u0306`, \u1EAE: `A\u0306\u0301`, \u1EB0: `A\u0306\u0300`, \u1EB4: `A\u0306\u0303`, \u01CD: `A\u030C`, \u00C2: `A\u0302`, \u1EA4: `A\u0302\u0301`, \u1EA6: `A\u0302\u0300`, \u1EAA: `A\u0302\u0303`, \u0226: `A\u0307`, \u01E0: `A\u0307\u0304`, \u00C5: `A\u030A`, \u01FA: e(859), \u1E02: `B\u0307`, \u0106: `C\u0301`, \u1E08: `C\u0327\u0301`, \u010C: `C\u030C`, \u0108: `C\u0302`, \u010A: `C\u0307`, \u00C7: `C\u0327`, \u010E: `D\u030C`, \u1E0A: `D\u0307`, \u1E10: `D\u0327`, \u00C9: `E\u0301`, \u00C8: `E\u0300`, \u00CB: `E\u0308`, \u1EBC: `E\u0303`, \u0112: `E\u0304`, \u1E16: e(302), \u1E14: `E\u0304\u0300`, \u0114: `E\u0306`, \u1E1C: e(573), \u011A: `E\u030C`, \u00CA: `E\u0302`, \u1EBE: `E\u0302\u0301`, \u1EC0: `E\u0302\u0300`, \u1EC4: `E\u0302\u0303`, \u0116: `E\u0307`, \u0228: `E\u0327`, \u1E1E: `F\u0307`, \u01F4: `G\u0301`, \u1E20: `G\u0304`, \u011E: `G\u0306`, \u01E6: `G\u030C`, \u011C: `G\u0302`, \u0120: `G\u0307`, \u0122: `G\u0327`, \u1E26: `H\u0308`, \u021E: `H\u030C`, \u0124: `H\u0302`, \u1E22: `H\u0307`, \u1E28: `H\u0327`, \u00CD: `I\u0301`, \u00CC: `I\u0300`, \u00CF: `I\u0308`, \u1E2E: `I\u0308\u0301`, \u0128: `I\u0303`, \u012A: `I\u0304`, \u012C: `I\u0306`, \u01CF: `I\u030C`, \u00CE: `I\u0302`, \u0130: `I\u0307`, \u0134: `J\u0302`, \u1E30: `K\u0301`, \u01E8: `K\u030C`, \u0136: `K\u0327`, \u0139: `L\u0301`, \u013D: `L\u030C`, \u013B: `L\u0327`, \u1E3E: `M\u0301`, \u1E40: `M\u0307`, \u0143: `N\u0301`, \u01F8: `N\u0300`, \u00D1: `N\u0303`, \u0147: `N\u030C`, \u1E44: `N\u0307`, \u0145: `N\u0327`, \u00D3: `O\u0301`, \u00D2: `O\u0300`, \u00D6: `O\u0308`, \u022A: `O\u0308\u0304`, \u00D5: `O\u0303`, \u1E4C: `O\u0303\u0301`, \u1E4E: `O\u0303\u0308`, \u022C: `O\u0303\u0304`, \u014C: `O\u0304`, \u1E52: `O\u0304\u0301`, \u1E50: `O\u0304\u0300`, \u014E: `O\u0306`, \u01D1: `O\u030C`, \u00D4: `O\u0302`, \u1ED0: `O\u0302\u0301`, \u1ED2: `O\u0302\u0300`, \u1ED6: `O\u0302\u0303`, \u022E: `O\u0307`, \u0230: e(969), \u0150: `O\u030B`, \u1E54: `P\u0301`, \u1E56: `P\u0307`, \u0154: `R\u0301`, \u0158: `R\u030C`, \u1E58: `R\u0307`, \u0156: `R\u0327`, \u015A: `S\u0301`, \u1E64: `S\u0301\u0307`, \u0160: `S\u030C`, \u1E66: `S\u030C\u0307`, \u015C: `S\u0302`, \u1E60: `S\u0307`, \u015E: `S\u0327`, \u0164: `T\u030C`, \u1E6A: `T\u0307`, \u0162: `T\u0327`, \u00DA: `U\u0301`, \u00D9: `U\u0300`, \u00DC: `U\u0308`, \u01D7: e(873), \u01DB: `U\u0308\u0300`, \u01D5: e(1017), \u01D9: e(422), \u0168: `U\u0303`, \u1E78: `U\u0303\u0301`, \u016A: `U\u0304`, \u1E7A: `U\u0304\u0308`, \u016C: `U\u0306`, \u01D3: `U\u030C`, \u00DB: `U\u0302`, \u016E: `U\u030A`, \u0170: `U\u030B`, \u1E7C: `V\u0303`, \u1E82: `W\u0301`, \u1E80: `W\u0300`, \u1E84: `W\u0308`, \u0174: `W\u0302`, \u1E86: `W\u0307`, \u1E8C: `X\u0308`, \u1E8A: `X\u0307`, \u00DD: `Y\u0301`, \u1EF2: `Y\u0300`, \u0178: `Y\u0308`, \u1EF8: `Y\u0303`, \u0232: `Y\u0304`, \u0176: `Y\u0302`, \u1E8E: `Y\u0307`, \u0179: `Z\u0301`, \u017D: `Z\u030C`, \u1E90: `Z\u0302`, \u017B: `Z\u0307`, \u03AC: `\u03B1\u0301`, \u1F70: `\u03B1\u0300`, \u1FB1: `\u03B1\u0304`, \u1FB0: `\u03B1\u0306`, \u03AD: `\u03B5\u0301`, \u1F72: `\u03B5\u0300`, \u03AE: `\u03B7\u0301`, \u1F74: `\u03B7\u0300`, \u03AF: `\u03B9\u0301`, \u1F76: `\u03B9\u0300`, \u03CA: `\u03B9\u0308`, \u0390: e(1032), \u1FD2: e(574), \u1FD1: `\u03B9\u0304`, \u1FD0: `\u03B9\u0306`, \u03CC: `\u03BF\u0301`, \u1F78: `\u03BF\u0300`, \u03CD: `\u03C5\u0301`, \u1F7A: `\u03C5\u0300`, \u03CB: `\u03C5\u0308`, \u03B0: e(920), \u1FE2: `\u03C5\u0308\u0300`, \u1FE1: `\u03C5\u0304`, \u1FE0: `\u03C5\u0306`, \u03CE: `\u03C9\u0301`, \u1F7C: `\u03C9\u0300`, \u038E: `\u03A5\u0301`, \u1FEA: `\u03A5\u0300`, \u03AB: `\u03A5\u0308`, \u1FE9: `\u03A5\u0304`, \u1FE8: `\u03A5\u0306`, \u038F: `\u03A9\u0301`, \u1FFA: `\u03A9\u0300` }, xa = class n2 {
  constructor(t5, n3) {
    var r2 = e;
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this[r2(488)] = void 0, this.mode = `math`, this.gullet = new ga(t5, n3, this.mode), this.settings = n3, this.leftrightDepth = 0, this[r2(488)] = null;
  }
  [e(421)](e3, n3) {
    if (n3 === void 0 && (n3 = true), this.fetch().text !== e3) throw new t(`Expected '` + e3 + `', got '` + this.fetch().text + `'`, this.fetch());
    n3 && this.consume();
  }
  consume() {
    var t5 = e;
    this[t5(488)] = null;
  }
  fetch() {
    var t5 = e;
    return this.nextToken ?? (this.nextToken = this[t5(697)].expandNextToken()), this.nextToken;
  }
  switchMode(t5) {
    var n3 = e;
    this[n3(514)] = t5, this.gullet.switchMode(t5);
  }
  parse() {
    var t5 = e;
    this.settings.globalGroup || this[t5(697)].beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set(`\\color`, `\\textcolor`);
    try {
      var n3 = this[t5(961)](false);
      return this.expect(`EOF`), this.settings[t5(742)] || this[t5(697)].endGroup(), n3;
    } finally {
      this.gullet.endGroups();
    }
  }
  subparse(t5) {
    var n3 = e, r2 = this[n3(488)];
    this[n3(1051)](), this[n3(697)].pushToken(new oi(`}`)), this.gullet.pushTokens(t5);
    var i2 = this.parseExpression(false);
    return this.expect(`}`), this.nextToken = r2, i2;
  }
  parseExpression(t5, r2) {
    for (var i2 = e, a2 = []; ; ) {
      this.mode === `math` && this.consumeSpaces();
      var o2 = this.fetch();
      if (n2.endOfExpression.has(o2.text) || r2 && o2[i2(1033)] === r2 || t5 && Xi[o2.text] && Xi[o2[i2(1033)]].infix) break;
      var s2 = this.parseAtom(r2);
      if (!s2) break;
      s2[i2(953)] !== `internal` && a2.push(s2);
    }
    return this.mode === `text` && this[i2(376)](a2), this[i2(1079)](a2);
  }
  handleInfixNodes(n3) {
    for (var r2 = e, i2 = -1, a2, o2 = 0; o2 < n3.length; o2++) {
      var s2 = n3[o2];
      if (s2.type === `infix`) {
        if (i2 !== -1) throw new t(`only one infix operator per group`, s2.token);
        i2 = o2, a2 = s2.replaceWith;
      }
    }
    if (i2 !== -1 && a2) {
      var c2, l2, u2 = n3.slice(0, i2), d2 = n3.slice(i2 + 1);
      return c2 = u2.length === 1 && u2[0].type === r2(767) ? u2[0] : { type: `ordgroup`, mode: this.mode, body: u2 }, l2 = d2[r2(739)] === 1 && d2[0].type === `ordgroup` ? d2[0] : { type: `ordgroup`, mode: this[r2(514)], body: d2 }, [a2 === `\\\\abovefrac` ? this.callFunction(a2, [c2, n3[i2], l2], []) : this[r2(842)](a2, [c2, l2], [])];
    } else return n3;
  }
  handleSupSubscript(n3) {
    var r2 = e, i2 = this[r2(829)](), a2 = i2.text;
    this.consume(), this.consumeSpaces();
    var o2;
    do
      o2 = this.parseGroup(n3);
    while ((o2 == null ? void 0 : o2.type) === r2(821));
    if (!o2) throw new t(`Expected group after '` + a2 + `'`, i2);
    return o2;
  }
  formatUnsupportedCmd(e3) {
    for (var t5 = [], n3 = 0; n3 < e3.length; n3++) t5.push({ type: `textord`, mode: `text`, text: e3[n3] });
    var r2 = { type: `text`, mode: this.mode, body: t5 };
    return { type: `color`, mode: this.mode, color: this.settings.errorColor, body: [r2] };
  }
  [e(622)](n3) {
    var r2 = e, i2 = this.parseGroup(`atom`, n3);
    if ((i2 == null ? void 0 : i2.type) === `internal` || this.mode === `text`) return i2;
    for (var a2, o2; ; ) {
      this.consumeSpaces();
      var s2 = this[r2(829)]();
      if (s2[r2(1033)] === `\\limits` || s2.text === r2(695)) {
        if (i2 && i2.type === `op`) i2.limits = s2.text === `\\limits`, i2[r2(942)] = true;
        else if (i2 && i2.type === `operatorname`) i2.alwaysHandleSupSub && (i2.limits = s2[r2(1033)] === `\\limits`);
        else throw new t(`Limit controls must follow a math operator`, s2);
        this.consume();
      } else if (s2.text === `^`) {
        if (a2) throw new t(`Double superscript`, s2);
        a2 = this.handleSupSubscript(r2(415));
      } else if (s2[r2(1033)] === `_`) {
        if (o2) throw new t(`Double subscript`, s2);
        o2 = this.handleSupSubscript(r2(983));
      } else if (s2.text === `'`) {
        if (a2) throw new t(r2(911), s2);
        var c2 = { type: r2(369), mode: this.mode, text: `\\prime` }, l2 = [c2];
        for (this.consume(); this.fetch().text === `'`; ) l2.push(c2), this.consume();
        this.fetch().text === `^` && l2[r2(610)](this.handleSupSubscript(`superscript`)), a2 = { type: `ordgroup`, mode: this.mode, body: l2 };
      } else if (va[s2[r2(1033)]]) {
        var u2 = _a.test(s2.text), d2 = [];
        for (d2.push(new oi(va[s2.text])), this[r2(1051)](); ; ) {
          var f2 = this.fetch().text;
          if (!va[f2] || _a[r2(938)](f2) !== u2) break;
          d2.unshift(new oi(va[f2])), this[r2(1051)]();
        }
        var p2 = this.subparse(d2);
        u2 ? o2 = { type: r2(767), mode: `math`, body: p2 } : a2 = { type: r2(767), mode: `math`, body: p2 };
      } else break;
    }
    return a2 || o2 ? { type: `supsub`, mode: this.mode, base: i2, sup: a2, sub: o2 } : i2;
  }
  parseFunction(n3, r2) {
    var i2 = e, a2 = this.fetch(), o2 = a2.text, s2 = Xi[o2];
    if (!s2) return null;
    if (this.consume(), r2 && r2 !== `atom` && !s2.allowedInArgument) throw new t(`Got function '` + o2 + i2(939) + (r2 ? ` as ` + r2 : ``), a2);
    if (this.mode === `text` && !s2.allowedInText) throw new t(`Can't use function '` + o2 + `' in text mode`, a2);
    if (this.mode === `math` && s2.allowedInMath === false) throw new t(i2(628) + o2 + `' in math mode`, a2);
    var { args: c2, optArgs: l2 } = this.parseArguments(o2, s2);
    return this.callFunction(o2, c2, l2, a2, n3);
  }
  callFunction(e3, n3, r2, i2, a2) {
    var o2 = { funcName: e3, parser: this, token: i2, breakOnTokenText: a2 }, s2 = Xi[e3];
    if (s2 && s2.handler) return s2.handler(o2, n3, r2);
    throw new t(`No function handler for ` + e3);
  }
  parseArguments(n3, r2) {
    var i2 = e, a2 = r2.numArgs + r2.numOptionalArgs;
    if (a2 === 0) return { args: [], optArgs: [] };
    for (var o2 = [], s2 = [], c2 = 0; c2 < a2; c2++) {
      var l2 = r2[i2(602)] && r2.argTypes[c2], u2 = c2 < r2.numOptionalArgs;
      (`primitive` in r2 && r2[i2(657)] && l2 == null || r2.type === i2(386) && c2 === 1 && s2[0] == null) && (l2 = i2(657));
      var d2 = this.parseGroupOfType(`argument to '` + n3 + `'`, l2, u2);
      if (u2) s2.push(d2);
      else if (d2 != null) o2.push(d2);
      else throw new t(`Null argument, please report this as a bug`);
    }
    return { args: o2, optArgs: s2 };
  }
  parseGroupOfType(n3, r2, i2) {
    var a2 = e;
    switch (r2) {
      case `color`:
        return this.parseColorGroup(i2);
      case `size`:
        return this.parseSizeGroup(i2);
      case `url`:
        return this.parseUrlGroup(i2);
      case `math`:
      case `text`:
        return this.parseArgumentGroup(i2, r2);
      case `hbox`:
        var o2 = this.parseArgumentGroup(i2, `text`);
        return o2 == null ? null : { type: `styling`, mode: o2.mode, body: [o2], style: `text`, resetFont: true };
      case `raw`:
        var s2 = this[a2(598)](`raw`, i2);
        return s2 == null ? null : { type: `raw`, mode: `text`, string: s2[a2(1033)] };
      case `primitive`:
        if (i2) throw new t(`A primitive argument cannot be optional`);
        var c2 = this.parseGroup(n3);
        if (c2 == null) throw new t(a2(734) + n3, this.fetch());
        return c2;
      case `original`:
      case null:
      case void 0:
        return this.parseArgumentGroup(i2);
      default:
        throw new t(a2(751) + n3, this[a2(829)]());
    }
  }
  consumeSpaces() {
    for (; this.fetch().text === ` `; ) this.consume();
  }
  parseStringGroup(e3, t5) {
    var n3 = this.gullet.scanArgument(t5);
    if (n3 == null) return null;
    for (var r2 = ``, i2; (i2 = this.fetch()).text !== `EOF`; ) r2 += i2.text, this.consume();
    return this.consume(), n3.text = r2, n3;
  }
  [e(513)](n3, r2) {
    for (var i2 = e, a2 = this.fetch(), o2 = a2, s2 = ``, c2; (c2 = this.fetch())[i2(1033)] !== `EOF` && n3.test(s2 + c2[i2(1033)]); ) o2 = c2, s2 += o2.text, this[i2(1051)]();
    if (s2 === ``) throw new t(i2(727) + r2 + i2(1056) + a2.text + `'`, a2);
    return a2.range(o2, s2);
  }
  [e(473)](n3) {
    var r2 = e, i2 = this.parseStringGroup(`color`, n3);
    if (i2 == null) return null;
    var a2 = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(i2.text);
    if (!a2) throw new t(`Invalid color: '` + i2.text + `'`, i2);
    var o2 = a2[0];
    return /^[0-9a-f]{6}$/i.test(o2) && (o2 = `#` + o2), { type: `color-token`, mode: this[r2(514)], color: o2 };
  }
  parseSizeGroup(n3) {
    var r2 = e, i2, a2 = false;
    if (this.gullet.consumeSpaces(), i2 = !n3 && this[r2(697)].future().text !== `{` ? this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, `size`) : this.parseStringGroup(`size`, n3), !i2) return null;
    !n3 && i2.text.length === 0 && (i2[r2(1033)] = `0pt`, a2 = true);
    var o2 = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/[r2(439)](i2.text);
    if (!o2) throw new t(`Invalid size: '` + i2.text + `'`, i2);
    var s2 = { number: +(o2[1] + o2[2]), unit: o2[3] };
    if (!Te(s2)) throw new t(`Invalid unit: '` + s2.unit + `'`, i2);
    return { type: r2(1086), mode: this.mode, value: s2, isBlank: a2 };
  }
  parseUrlGroup(t5) {
    var n3 = e;
    this[n3(697)][n3(868)].setCatcode(`%`, 13), this.gullet.lexer[n3(1087)](`~`, 12);
    var r2 = this.parseStringGroup(`url`, t5);
    if (this.gullet.lexer.setCatcode(`%`, 14), this.gullet[n3(868)].setCatcode(`~`, 13), r2 == null) return null;
    var i2 = r2.text.replace(/\\([#$%&~_^{}])/g, `$1`);
    return { type: `url`, mode: this[n3(514)], url: i2 };
  }
  parseArgumentGroup(t5, n3) {
    var r2 = e, i2 = this.gullet.scanArgument(t5);
    if (i2 == null) return null;
    var a2 = this.mode;
    n3 && this.switchMode(n3), this[r2(697)].beginGroup();
    var o2 = this[r2(961)](false, r2(470));
    this.expect(`EOF`), this.gullet.endGroup();
    var s2 = { type: r2(767), mode: this.mode, loc: i2.loc, body: o2 };
    return n3 && this[r2(1014)](a2), s2;
  }
  parseGroup(n3, r2) {
    var i2 = e, a2 = this.fetch(), o2 = a2[i2(1033)], s2;
    if (o2 === `{` || o2 === `\\begingroup`) {
      this.consume();
      var c2 = o2 === `{` ? `}` : `\\endgroup`;
      this.gullet[i2(1058)]();
      var l2 = this.parseExpression(false, c2), u2 = this.fetch();
      this.expect(c2), this.gullet.endGroup(), s2 = { type: `ordgroup`, mode: this[i2(514)], loc: ai[i2(407)](a2, u2), body: l2, semisimple: o2 === i2(595) || void 0 };
    } else if (s2 = this.parseFunction(r2, n3) || this.parseSymbol(), s2 == null && o2[0] === `\\` && !ha.hasOwnProperty(o2)) {
      if (this.settings[i2(385)]) throw new t(`Undefined control sequence: ` + o2, a2);
      s2 = this.formatUnsupportedCmd(o2), this.consume();
    }
    return s2;
  }
  formLigatures(t5) {
    for (var n3 = e, r2 = t5.length - 1, i2 = 0; i2 < r2; ++i2) {
      var a2 = t5[i2];
      if (a2[n3(953)] === n3(369)) {
        var o2 = a2.text, s2 = t5[i2 + 1];
        if (!(!s2 || s2.type !== `textord`)) {
          if (o2 === `-` && s2.text === `-`) {
            var c2 = t5[i2 + 2];
            i2 + 1 < r2 && c2 && c2.type === `textord` && c2[n3(1033)] === `-` ? (t5.splice(i2, 3, { type: n3(369), mode: `text`, loc: ai.range(a2, c2), text: `---` }), r2 -= 2) : (t5.splice(i2, 2, { type: `textord`, mode: `text`, loc: ai.range(a2, s2), text: `--` }), --r2);
          }
          (o2 === `'` || o2 === "`") && s2.text === o2 && (t5.splice(i2, 2, { type: `textord`, mode: `text`, loc: ai.range(a2, s2), text: o2 + o2 }), --r2);
        }
      }
    }
  }
  parseSymbol() {
    var n3 = e, r2 = this[n3(829)](), i2 = r2[n3(1033)];
    if (/^\\verb[^a-zA-Z]/.test(i2)) {
      this.consume();
      var a2 = i2.slice(5), o2 = a2.charAt(0) === `*`;
      if (o2 && (a2 = a2[n3(901)](1)), a2.length < 2 || a2[n3(819)](0) !== a2.slice(-1)) throw new t(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a2 = a2.slice(1, -1), { type: `verb`, mode: `text`, body: a2, star: o2 };
    }
    ba.hasOwnProperty(i2[0]) && !j[this.mode][i2[0]] && (this.settings.strict && this.mode === `math` && this.settings.reportNonstrict(`unicodeTextInMathMode`, `Accented Unicode text character "` + i2[0] + `" used in math mode`, r2), i2 = ba[i2[0]] + i2[n3(901)](1));
    var s2 = ra.exec(i2);
    s2 && (i2 = i2[n3(538)](0, s2.index), i2 === `i` ? i2 = `\u0131` : i2 === `j` && (i2 = `\u0237`));
    var c2;
    if (j[this.mode][i2]) {
      this.settings.strict && this.mode === `math` && ht.includes(i2) && this[n3(834)].reportNonstrict(`unicodeTextInMathMode`, `Latin-1/Unicode text character "` + i2[0] + n3(458), r2);
      var l2 = j[this[n3(514)]][i2].group, u2 = ai.range(r2);
      c2 = Xn(l2) ? { type: `atom`, mode: this[n3(514)], family: l2, loc: u2, text: i2 } : { type: l2, mode: this.mode, loc: u2, text: i2 };
    } else if (i2.charCodeAt(0) >= 128) this.settings.strict && (ce(i2.charCodeAt(0)) ? this[n3(514)] === `math` && this.settings.reportNonstrict(`unicodeTextInMathMode`, `Unicode text character "` + i2[0] + n3(458), r2) : this.settings.reportNonstrict(`unknownSymbol`, `Unrecognized Unicode character "` + i2[0] + `"` + (` (` + i2[n3(971)](0) + `)`), r2)), c2 = { type: `textord`, mode: `text`, loc: ai[n3(407)](r2), text: i2 };
    else return null;
    if (this.consume(), s2) for (var d2 = 0; d2 < s2[0].length; d2++) {
      var f2 = s2[0][d2];
      if (!ya[f2]) throw new t(`Unknown accent ' ` + f2 + `'`, r2);
      var p2 = ya[f2][this.mode] || ya[f2][n3(1033)];
      if (!p2) throw new t(`Accent ` + f2 + ` unsupported in ` + this.mode + n3(617), r2);
      c2 = { type: `accent`, mode: this.mode, loc: ai.range(r2), label: p2, isStretchy: false, isShifty: true, base: c2 };
    }
    return c2;
  }
};
xa.endOfExpression = /* @__PURE__ */ new Set([`}`, `\\endgroup`, `\\end`, `\\right`, `&`]);
var Sa = function(n3, r2) {
  var i2 = e;
  if (!(typeof n3 == `string` || n3 instanceof String)) throw TypeError(`KaTeX can only parse string typed expression`);
  var a2 = new xa(n3, r2);
  delete a2.gullet[i2(947)].current[`\\df@tag`];
  var o2 = a2.parse();
  if (delete a2.gullet.macros.current[`\\current@color`], delete a2.gullet.macros.current[`\\color`], a2.gullet[i2(947)].get(i2(948))) {
    if (!r2[i2(368)]) throw new t(`\\tag works only in display equations`);
    o2 = [{ type: i2(1065), mode: `text`, body: o2, tag: a2.subparse([new oi(`\\df@tag`)]) }];
  }
  return o2;
}, Ca = function(e3, t5, n3) {
  t5.textContent = ``;
  var r2 = Da(e3, n3).toNode();
  t5.appendChild(r2);
};
typeof document < `u` && document.compatMode !== `CSS1Compat` && (typeof console < `u` && console[e(822)](`Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.`), Ca = function() {
  throw new t(`KaTeX doesn't work in quirks mode.`);
});
var wa = function(t5, n3) {
  var r2 = e;
  return Da(t5, n3)[r2(1077)]();
}, Ta = function(e3, t5) {
  return Sa(e3, new h(t5));
}, Ea = function(e3, n3, r2) {
  if (r2.throwOnError || !(e3 instanceof t)) throw e3;
  var i2 = W([`katex-error`], [new Ie(n3)]);
  return i2.setAttribute(`title`, e3.toString()), i2.setAttribute(`style`, `color:` + r2.errorColor), i2;
}, Da = function(e3, t5) {
  var n3 = new h(t5);
  try {
    return Bn(Sa(e3, n3), e3, n3);
  } catch (t6) {
    return Ea(t6, e3, n3);
  }
}, Oa = function(e3, t5) {
  var n3 = new h(t5);
  try {
    return Vn(Sa(e3, n3), e3, n3);
  } catch (t6) {
    return Ea(t6, e3, n3);
  }
}, ka = `0.16.47`, Aa = { Span: Me, Anchor: Ne, SymbolNode: Ie, SvgNode: Le, PathNode: Re, LineNode: ze }, ja = { version: ka, render: Ca, renderToString: wa, ParseError: t, SETTINGS_SCHEMA: d, __parse: Ta, __renderToDomTree: Da, __renderToHTMLTree: Oa, __setFontMetrics: Ke, __defineSymbol: M, __defineFunction: q, __defineMacro: $, __domTree: Aa };
export {
  t as ParseError,
  d as SETTINGS_SCHEMA,
  q as __defineFunction,
  $ as __defineMacro,
  M as __defineSymbol,
  Aa as __domTree,
  Ta as __parse,
  Da as __renderToDomTree,
  Oa as __renderToHTMLTree,
  Ke as __setFontMetrics,
  ja as default,
  Ca as render,
  wa as renderToString,
  ka as version
};
