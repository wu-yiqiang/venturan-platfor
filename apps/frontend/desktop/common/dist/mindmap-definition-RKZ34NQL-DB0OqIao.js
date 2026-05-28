import { m as e, p as t } from "./index-D-g3WoLo.js";
import { n, t as r } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { S as i, V as a, f as o, i as s, p as c, r as l, s as u, z as d } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import "./chunk-5ZQYHXKU-BklVe06k.js";
import "./chunk-O5CBEL6O-CERCp6yT.js";
import "./chunk-BSJP7CBP-DNSq_z0Y.js";
import "./chunk-L5ZTLDWV-CfFez56L.js";
import "./chunk-NZK2D7GU-Bb3JacnP.js";
import "./chunk-3OPIFGDE-tadvN-H3.js";
import "./chunk-KSCS5N6A-yNMqidgz.js";
import { r as f, t as p } from "./chunk-LZXEDZCA-BdFEls6v.js";
import { t as m } from "./chunk-55IACEB6-C7qtBjmn.js";
import { t as h } from "./chunk-2J33WTMH-DU_MCT0n.js";
var g = v;
function _() {
  let e2 = [`children`, `matched`, `1683IGrxBF`, `matches`, `, token: `, `cScale`, `split`, `backtrack_lexer`, `;
      stroke-width: `, ` polygon, .section-`, `rect`, `popStack`, `unput`, `DEFAULT`, `flex`, `12890Oguvbq`, `addNode`, `252104poCGIO`, `2NCmKzg`, `last_column`, `hash`, `cScaleInv`, `upcomingInput`, `level`, `url(#drop-shadow)`, `yytext`, `Parser`, `1623605hZBhER`, `7LXinLk`, `CIRCLE`, `shape`, `Stop EOF `, `108PKTXll`, `baseLevel`, `...`, `push`, `securityLevel`, `5957748WOwrtT`, `info`, `lineColor`, `parseError`, `terminals_`, `THEME_COLOR_LIMIT`, `NODE_DEND`, `hasOwnProperty`, `3lMZVHG`, `MINDMAP`, `getLogger`, `parser`, `type`, `options`, `topState`, `SPACELIST`, `CLASS`, `NO_BORDER`, `yylineno`, `NODE`, `yyleng`, `substr`, `match`, `ROUNDED_RECT`, `range`, `first_column`, `cScaleLabel`, `performAction`, `number`, `section--1`, `mindmap`, `edge`, `pastInput`, `neo`, `Node: `, `padding`, `decorateNode`, `hexgon`, `nodeType`, `last_line`, `getRandomValues`, `getMindmap`, `trace`, `productions_`, `{
      stroke: `, `Stop NL2 `, `pushState`, `yylloc`, ` rect, [data-look="neo"].mindmap-node.section-`, `begin`, `getParent`, `_backtrack`, `HEXAGON`, `731467pkoImz`, `slice`, `edge_`, `node end ((`, `3118093iAcfeD`, `INITIAL`, `getType`, `popState`, `;
    }
    `, `redux-dark`, `dropShadow`, `test_match`, `nodes`, ` is out of buffer bounds`, `forEach`, `debug`, `attr`, `point`, `strokeWidth`, `no-border`, `svgId`, `count`, `rules`, `1643464unPVvt`, `abs`, `length`, `bind`, `section`, `hexagon`, `conditionStack`, `lexer`, `Parse Error: multiple actions possible at state: `, `;
      stroke: `, `ranges`];
  return _ = function() {
    return e2;
  }, _();
}
(function(e2, t2) {
  let n2 = v, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(579)) / 1 * (parseInt(n2(507)) / 2) + parseInt(n2(534)) / 3 * (parseInt(n2(478)) / 4) + -parseInt(n2(516)) / 5 + -parseInt(n2(526)) / 6 + -parseInt(n2(517)) / 7 * (parseInt(n2(506)) / 8) + parseInt(n2(491)) / 9 * (-parseInt(n2(504)) / 10) + parseInt(n2(583)) / 11 * (parseInt(n2(521)) / 12) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(_, 640331);
function v(e2, t2) {
  return e2 -= 476, _()[e2];
}
var y = [];
for (let e2 = 0; e2 < 256; ++e2) y[g(524)]((e2 + 256).toString(16).slice(1));
function b(e2, t2 = 0) {
  return (y[e2[t2 + 0]] + y[e2[t2 + 1]] + y[e2[t2 + 2]] + y[e2[t2 + 3]] + `-` + y[e2[t2 + 4]] + y[e2[t2 + 5]] + `-` + y[e2[t2 + 6]] + y[e2[t2 + 7]] + `-` + y[e2[t2 + 8]] + y[e2[t2 + 9]] + `-` + y[e2[t2 + 10]] + y[e2[t2 + 11]] + y[e2[t2 + 12]] + y[e2[t2 + 13]] + y[e2[t2 + 14]] + y[e2[t2 + 15]]).toLowerCase();
}
var x = new Uint8Array(16);
function S() {
  let e2 = g;
  return crypto[e2(566)](x);
}
function C(e2, t2, n2) {
  return !t2 && !e2 && crypto.randomUUID ? crypto.randomUUID() : w(e2, t2, n2);
}
function w(e2, t2, n2) {
  var _a;
  let r2 = g;
  e2 || (e2 = {});
  let i2 = e2.random ?? ((_a = e2.rng) == null ? void 0 : _a.call(e2)) ?? S();
  if (i2.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (i2[6] = i2[6] & 15 | 64, i2[8] = i2[8] & 63 | 128, t2) {
    if (n2 || (n2 = 0), n2 < 0 || n2 + 16 > t2.length) throw RangeError(`UUID byte range ` + n2 + `:` + (n2 + 15) + r2(592));
    for (let e3 = 0; e3 < 16; ++e3) t2[n2 + e3] = i2[e3];
    return t2;
  }
  return b(i2);
}
e();
var T, E = (function() {
  let e2 = g;
  var t2 = r(function(e3, t3, n3, r2) {
    for (n3 || (n3 = {}), r2 = e3.length; r2--; n3[e3[r2]] = t3) ;
    return n3;
  }, `o`), n2 = [1, 4], i2 = [1, 13], a2 = [1, 12], o2 = [1, 15], s2 = [1, 16], c2 = [1, 20], l2 = [1, 19], u2 = [6, 7, 8], d2 = [1, 26], f2 = [1, 24], p2 = [1, 25], m2 = [6, 7, 11], h2 = [1, 6, 13, 15, 16, 19, 22], _2 = [1, 33], y2 = [1, 34], b2 = [1, 6, 7, 11, 13, 15, 16, 19, 22], x2 = { trace: r(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, mindMap: 4, spaceLines: 5, SPACELINE: 6, NL: 7, MINDMAP: 8, document: 9, stop: 10, EOF: 11, statement: 12, SPACELIST: 13, node: 14, ICON: 15, CLASS: 16, nodeWithId: 17, nodeWithoutId: 18, NODE_DSTART: 19, NODE_DESCR: 20, NODE_DEND: 21, NODE_ID: 22, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 6: `SPACELINE`, 7: `NL`, 8: e2(535), 11: `EOF`, 13: `SPACELIST`, 15: `ICON`, 16: e2(542), 19: `NODE_DSTART`, 20: `NODE_DESCR`, 21: e2(532), 22: `NODE_ID` }, productions_: [0, [3, 1], [3, 2], [5, 1], [5, 2], [5, 2], [4, 2], [4, 3], [10, 1], [10, 1], [10, 1], [10, 2], [10, 2], [9, 3], [9, 2], [12, 2], [12, 2], [12, 2], [12, 1], [12, 1], [12, 1], [12, 1], [12, 1], [14, 1], [14, 1], [18, 3], [17, 1], [17, 4]], performAction: r(function(t3, n3, r2, i3, a3, o3, s3) {
    let c3 = e2;
    var l3 = o3.length - 1;
    switch (a3) {
      case 6:
      case 7:
        return i3;
      case 8:
        i3.getLogger().trace(`Stop NL `);
        break;
      case 9:
        i3.getLogger().trace(c3(520));
        break;
      case 11:
        i3.getLogger()[c3(568)](c3(571));
        break;
      case 12:
        i3.getLogger().trace(`Stop EOF2 `);
        break;
      case 15:
        i3.getLogger()[c3(527)](`Node: `, o3[l3].id), i3.addNode(o3[l3 - 1].length, o3[l3].id, o3[l3].descr, o3[l3][c3(538)]);
        break;
      case 16:
        i3.getLogger().trace(`Icon: `, o3[l3]), i3.decorateNode({ icon: o3[l3] });
        break;
      case 17:
      case 21:
        i3[c3(562)]({ class: o3[l3] });
        break;
      case 18:
        i3.getLogger().trace(c3(541));
        break;
      case 19:
        i3[c3(536)]().trace(c3(560), o3[l3].id), i3[c3(505)](0, o3[l3].id, o3[l3].descr, o3[l3].type);
        break;
      case 20:
        i3.decorateNode({ icon: o3[l3] });
        break;
      case 25:
        i3.getLogger().trace(`node found ..`, o3[l3 - 2]), this.$ = { id: o3[l3 - 1], descr: o3[l3 - 1], type: i3.getType(o3[l3 - 2], o3[l3]) };
        break;
      case 26:
        this.$ = { id: o3[l3], descr: o3[l3], type: i3.nodeType.DEFAULT };
        break;
      case 27:
        i3.getLogger().trace(`node found ..`, o3[l3 - 3]), this.$ = { id: o3[l3 - 3], descr: o3[l3 - 1], type: i3.getType(o3[l3 - 2], o3[l3]) };
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: 2, 5: 3, 6: [1, 5], 8: n2 }, { 1: [3] }, { 1: [2, 1] }, { 4: 6, 6: [1, 7], 7: [1, 8], 8: n2 }, { 6: i2, 7: [1, 10], 9: 9, 12: 11, 13: a2, 14: 14, 15: o2, 16: s2, 17: 17, 18: 18, 19: c2, 22: l2 }, t2(u2, [2, 3]), { 1: [2, 2] }, t2(u2, [2, 4]), t2(u2, [2, 5]), { 1: [2, 6], 6: i2, 12: 21, 13: a2, 14: 14, 15: o2, 16: s2, 17: 17, 18: 18, 19: c2, 22: l2 }, { 6: i2, 9: 22, 12: 11, 13: a2, 14: 14, 15: o2, 16: s2, 17: 17, 18: 18, 19: c2, 22: l2 }, { 6: d2, 7: f2, 10: 23, 11: p2 }, t2(m2, [2, 22], { 17: 17, 18: 18, 14: 27, 15: [1, 28], 16: [1, 29], 19: c2, 22: l2 }), t2(m2, [2, 18]), t2(m2, [2, 19]), t2(m2, [2, 20]), t2(m2, [2, 21]), t2(m2, [2, 23]), t2(m2, [2, 24]), t2(m2, [2, 26], { 19: [1, 30] }), { 20: [1, 31] }, { 6: d2, 7: f2, 10: 32, 11: p2 }, { 1: [2, 7], 6: i2, 12: 21, 13: a2, 14: 14, 15: o2, 16: s2, 17: 17, 18: 18, 19: c2, 22: l2 }, t2(h2, [2, 14], { 7: _2, 11: y2 }), t2(b2, [2, 8]), t2(b2, [2, 9]), t2(b2, [2, 10]), t2(m2, [2, 15]), t2(m2, [2, 16]), t2(m2, [2, 17]), { 20: [1, 35] }, { 21: [1, 36] }, t2(h2, [2, 13], { 7: _2, 11: y2 }), t2(b2, [2, 11]), t2(b2, [2, 12]), { 21: [1, 37] }, t2(m2, [2, 25]), t2(m2, [2, 27])], defaultActions: { 2: [2, 1], 6: [2, 2] }, parseError: r(function(t3, n3) {
    let r2 = e2;
    if (n3.recoverable) this.trace(t3);
    else {
      var i3 = Error(t3);
      throw i3[r2(509)] = n3, i3;
    }
  }, e2(529)), parse: r(function(t3) {
    let n3 = e2;
    var i3 = this, a3 = [0], o3 = [], s3 = [null], c3 = [], l3 = this.table, u3 = ``, d3 = 0, f3 = 0, p3 = 0, m3 = 2, h3 = 1, g2 = c3.slice.call(arguments, 1), _3 = Object.create(this[n3(485)]), v2 = { yy: {} };
    for (var y3 in this.yy) Object.prototype[n3(533)].call(this.yy, y3) && (v2.yy[y3] = this.yy[y3]);
    _3.setInput(t3, v2.yy), v2.yy.lexer = _3, v2.yy.parser = this, _3.yylloc === void 0 && (_3.yylloc = {});
    var b3 = _3.yylloc;
    c3[n3(524)](b3);
    var x3 = _3.options && _3[n3(539)].ranges;
    typeof v2.yy[n3(529)] == `function` ? this.parseError = v2.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function S3(e3) {
      let t4 = n3;
      a3[t4(480)] -= 2 * e3, s3.length -= e3, c3.length -= e3;
    }
    r(S3, n3(500));
    function C2() {
      let e3 = n3;
      var t4 = o3.pop() || _3.lex() || h3;
      return typeof t4 != e3(554) && (t4 instanceof Array && (o3 = t4, t4 = o3.pop()), t4 = i3.symbols_[t4] || t4), t4;
    }
    r(C2, `lex`);
    for (var w2, T2, E2, D2, O2, k2 = {}, A2, j2, M2, N2; ; ) {
      if (E2 = a3[a3.length - 1], this.defaultActions[E2] ? D2 = this.defaultActions[E2] : (w2 ?? (w2 = C2()), D2 = l3[E2] && l3[E2][w2]), D2 === void 0 || !D2.length || !D2[0]) {
        var P2 = ``;
        for (A2 in N2 = [], l3[E2]) this.terminals_[A2] && A2 > m3 && N2.push(`'` + this.terminals_[A2] + `'`);
        P2 = _3.showPosition ? `Parse error on line ` + (d3 + 1) + `:
` + _3.showPosition() + `
Expecting ` + N2.join(`, `) + `, got '` + (this[n3(530)][w2] || w2) + `'` : `Parse error on line ` + (d3 + 1) + `: Unexpected ` + (w2 == h3 ? `end of input` : `'` + (this.terminals_[w2] || w2) + `'`), this.parseError(P2, { text: _3.match, token: this.terminals_[w2] || w2, line: _3.yylineno, loc: b3, expected: N2 });
      }
      if (D2[0] instanceof Array && D2[n3(480)] > 1) throw Error(n3(486) + E2 + n3(493) + w2);
      switch (D2[0]) {
        case 1:
          a3.push(w2), s3.push(_3[n3(514)]), c3.push(_3.yylloc), a3.push(D2[1]), w2 = null, T2 ? (w2 = T2, T2 = null) : (f3 = _3.yyleng, u3 = _3.yytext, d3 = _3.yylineno, b3 = _3.yylloc, p3 > 0 && p3--);
          break;
        case 2:
          if (j2 = this.productions_[D2[1]][1], k2.$ = s3[s3.length - j2], k2._$ = { first_line: c3[c3.length - (j2 || 1)].first_line, last_line: c3[c3[n3(480)] - 1][n3(565)], first_column: c3[c3.length - (j2 || 1)].first_column, last_column: c3[c3.length - 1].last_column }, x3 && (k2._$.range = [c3[c3.length - (j2 || 1)].range[0], c3[c3.length - 1].range[1]]), O2 = this.performAction.apply(k2, [u3, f3, d3, v2.yy, D2[1], s3, c3].concat(g2)), O2 !== void 0) return O2;
          j2 && (a3 = a3.slice(0, -1 * j2 * 2), s3 = s3[n3(580)](0, -1 * j2), c3 = c3.slice(0, -1 * j2)), a3.push(this[n3(569)][D2[1]][0]), s3.push(k2.$), c3.push(k2._$), M2 = l3[a3[a3[n3(480)] - 2]][a3[a3.length - 1]], a3.push(M2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  x2.lexer = (function() {
    let t3 = e2;
    return { EOF: 1, parseError: r(function(e3, t4) {
      let n3 = v;
      if (this.yy[n3(537)]) this.yy.parser.parseError(e3, t4);
      else throw Error(e3);
    }, `parseError`), setInput: r(function(e3, t4) {
      let n3 = v;
      return this.yy = t4 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this[n3(514)] = this[n3(490)] = this.match = ``, this.conditionStack = [n3(584)], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc[n3(550)] = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: r(function() {
      let e3 = v;
      var t4 = this._input[0];
      return this.yytext += t4, this.yyleng++, this.offset++, this.match += t4, this[e3(490)] += t4, t4.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this[e3(573)].last_line++) : this.yylloc.last_column++, this.options.ranges && this[e3(573)].range[1]++, this._input = this._input.slice(1), t4;
    }, `input`), unput: r(function(e3) {
      let t4 = v;
      var n3 = e3[t4(480)], r2 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this[t4(514)] = this.yytext.substr(0, this[t4(514)].length - n3), this.offset -= n3;
      var i3 = this[t4(548)][t4(495)](/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match[t4(480)] - 1), this.matched = this.matched.substr(0, this.matched.length - 1), r2.length - 1 && (this.yylineno -= r2.length - 1);
      var a3 = this.yylloc[t4(550)];
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: r2 ? (r2.length === i3.length ? this.yylloc[t4(551)] : 0) + i3[i3[t4(480)] - r2.length][t4(480)] - r2[0].length : this.yylloc.first_column - n3 }, this.options[t4(488)] && (this.yylloc[t4(550)] = [a3[0], a3[0] + this.yyleng - n3]), this.yyleng = this[t4(514)].length, this;
    }, `unput`), more: r(function() {
      return this._more = true, this;
    }, `more`), reject: r(function() {
      let e3 = v;
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this[e3(529)](`Lexical error on line ` + (this[e3(544)] + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: r(function(e3) {
      let t4 = v;
      this[t4(501)](this.match[t4(580)](e3));
    }, `less`), pastInput: r(function() {
      let e3 = v;
      var t4 = this[e3(490)][e3(547)](0, this.matched.length - this.match[e3(480)]);
      return (t4[e3(480)] > 20 ? e3(523) : ``) + t4.substr(-20).replace(/\n/g, ``);
    }, t3(558)), upcomingInput: r(function() {
      var e3 = this.match;
      return e3.length < 20 && (e3 += this._input.substr(0, 20 - e3.length)), (e3.substr(0, 20) + (e3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, t3(511)), showPosition: r(function() {
      let e3 = t3;
      var n3 = this.pastInput(), r2 = Array(n3.length + 1).join(`-`);
      return n3 + this[e3(511)]() + `
` + r2 + `^`;
    }, `showPosition`), test_match: r(function(e3, n3) {
      let r2 = t3;
      var i3, a3, o3;
      if (this.options[r2(496)] && (o3 = { yylineno: this[r2(544)], yylloc: { first_line: this.yylloc.first_line, last_line: this[r2(565)], first_column: this.yylloc.first_column, last_column: this.yylloc[r2(508)] }, yytext: this[r2(514)], match: this.match, matches: this.matches, matched: this.matched, yyleng: this[r2(546)], offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this[r2(539)].ranges && (o3[r2(573)].range = this.yylloc[r2(550)].slice(0))), a3 = e3[0][r2(548)](/(?:\r\n?|\n).*/g), a3 && (this.yylineno += a3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: a3 ? a3[a3.length - 1][r2(480)] - a3[a3.length - 1].match(/\r?\n?/)[0].length : this[r2(573)].last_column + e3[0].length }, this.yytext += e3[0], this.match += e3[0], this[r2(492)] = e3, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this[r2(577)] = false, this._input = this._input.slice(e3[0][r2(480)]), this[r2(490)] += e3[0], i3 = this[r2(553)].call(this, this.yy, this, n3, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), i3) return i3;
      if (this[r2(577)]) {
        for (var s3 in o3) this[s3] = o3[s3];
        return false;
      }
      return false;
    }, `test_match`), next: r(function() {
      let e3 = t3;
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var n3, r2, i3, a3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var o3 = this._currentRules(), s3 = 0; s3 < o3.length; s3++) if (i3 = this._input.match(this.rules[o3[s3]]), i3 && (!r2 || i3[0].length > r2[0].length)) {
        if (r2 = i3, a3 = s3, this[e3(539)].backtrack_lexer) {
          if (n3 = this.test_match(i3, o3[s3]), n3 !== false) return n3;
          if (this._backtrack) {
            r2 = false;
            continue;
          } else return false;
        } else if (!this.options[e3(503)]) break;
      }
      return r2 ? (n3 = this[e3(590)](r2, o3[a3]), n3 === false ? false : n3) : this._input === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this[e3(544)] });
    }, `next`), lex: r(function() {
      return this.next() || this.lex();
    }, `lex`), begin: r(function(e3) {
      let n3 = t3;
      this.conditionStack[n3(524)](e3);
    }, `begin`), popState: r(function() {
      let e3 = t3;
      return this.conditionStack.length - 1 > 0 ? this[e3(484)].pop() : this.conditionStack[0];
    }, t3(586)), _currentRules: r(function() {
      let e3 = t3;
      return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions[e3(584)][e3(477)];
    }, `_currentRules`), topState: r(function(e3) {
      let n3 = t3;
      return e3 = this.conditionStack.length - 1 - Math[n3(479)](e3 || 0), e3 >= 0 ? this.conditionStack[e3] : n3(584);
    }, t3(540)), pushState: r(function(e3) {
      this.begin(e3);
    }, t3(572)), stateStackSize: r(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: r(function(e3, n3, r2, i3) {
      let a3 = t3;
      switch (r2) {
        case 0:
          return e3.getLogger()[a3(568)](`Found comment`, n3.yytext), 6;
        case 1:
          return 8;
        case 2:
          this.begin(`CLASS`);
          break;
        case 3:
          return this[a3(586)](), 16;
        case 4:
          this.popState();
          break;
        case 5:
          e3[a3(536)]().trace(`Begin icon`), this.begin(`ICON`);
          break;
        case 6:
          return e3.getLogger().trace(`SPACELINE`), 6;
        case 7:
          return 7;
        case 8:
          return 15;
        case 9:
          e3[a3(536)]().trace(`end icon`), this.popState();
          break;
        case 10:
          return e3.getLogger().trace(`Exploding node`), this.begin(`NODE`), 19;
        case 11:
          return e3.getLogger().trace(`Cloud`), this.begin(`NODE`), 19;
        case 12:
          return e3[a3(536)]().trace(`Explosion Bang`), this.begin(`NODE`), 19;
        case 13:
          return e3.getLogger().trace(`Cloud Bang`), this[a3(575)](a3(545)), 19;
        case 14:
          return this.begin(`NODE`), 19;
        case 15:
          return this.begin(`NODE`), 19;
        case 16:
          return this[a3(575)](`NODE`), 19;
        case 17:
          return this.begin(`NODE`), 19;
        case 18:
          return 13;
        case 19:
          return 22;
        case 20:
          return 11;
        case 21:
          this.begin(`NSTR2`);
          break;
        case 22:
          return `NODE_DESCR`;
        case 23:
          this.popState();
          break;
        case 24:
          e3[a3(536)]().trace(`Starting NSTR`), this[a3(575)](`NSTR`);
          break;
        case 25:
          return e3.getLogger().trace(`description:`, n3.yytext), `NODE_DESCR`;
        case 26:
          this.popState();
          break;
        case 27:
          return this[a3(586)](), e3.getLogger().trace(`node end ))`), `NODE_DEND`;
        case 28:
          return this.popState(), e3.getLogger().trace(`node end )`), a3(532);
        case 29:
          return this.popState(), e3.getLogger().trace(`node end ...`, n3.yytext), `NODE_DEND`;
        case 30:
          return this.popState(), e3.getLogger()[a3(568)](`node end ((`), `NODE_DEND`;
        case 31:
          return this.popState(), e3.getLogger().trace(`node end (-`), `NODE_DEND`;
        case 32:
          return this.popState(), e3.getLogger().trace(`node end (-`), `NODE_DEND`;
        case 33:
          return this.popState(), e3.getLogger().trace(`node end ((`), `NODE_DEND`;
        case 34:
          return this.popState(), e3.getLogger().trace(a3(582)), `NODE_DEND`;
        case 35:
          return e3.getLogger().trace(`Long description:`, n3.yytext), 20;
        case 36:
          return e3[a3(536)]().trace(`Long description:`, n3.yytext), 20;
      }
    }, `anonymous`), rules: [/^(?:\s*%%.*)/i, /^(?:mindmap\b)/i, /^(?::::)/i, /^(?:.+)/i, /^(?:\n)/i, /^(?:::icon\()/i, /^(?:[\s]+[\n])/i, /^(?:[\n]+)/i, /^(?:[^\)]+)/i, /^(?:\))/i, /^(?:-\))/i, /^(?:\(-)/i, /^(?:\)\))/i, /^(?:\))/i, /^(?:\(\()/i, /^(?:\{\{)/i, /^(?:\()/i, /^(?:\[)/i, /^(?:[\s]+)/i, /^(?:[^\(\[\n\)\{\}]+)/i, /^(?:$)/i, /^(?:["][`])/i, /^(?:[^`"]+)/i, /^(?:[`]["])/i, /^(?:["])/i, /^(?:[^"]+)/i, /^(?:["])/i, /^(?:[\)]\))/i, /^(?:[\)])/i, /^(?:[\]])/i, /^(?:\}\})/i, /^(?:\(-)/i, /^(?:-\))/i, /^(?:\(\()/i, /^(?:\()/i, /^(?:[^\)\]\(\}]+)/i, /^(?:.+(?!\(\())/i], conditions: { CLASS: { rules: [3, 4], inclusive: false }, ICON: { rules: [8, 9], inclusive: false }, NSTR2: { rules: [22, 23], inclusive: false }, NSTR: { rules: [25, 26], inclusive: false }, NODE: { rules: [21, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], inclusive: false }, INITIAL: { rules: [0, 1, 2, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], inclusive: true } } };
  })();
  function S2() {
    this.yy = {};
  }
  return r(S2, `Parser`), S2.prototype = x2, x2[e2(515)] = S2, new S2();
})();
E.parser = E;
var D = E, O = 12, k = { DEFAULT: 0, NO_BORDER: 0, ROUNDED_RECT: 1, RECT: 2, CIRCLE: 3, CLOUD: 4, BANG: 5, HEXAGON: 6 }, A = (T = class {
  constructor() {
    let e2 = g;
    this[e2(591)] = [], this[e2(476)] = 0, this.elements = {}, this[e2(536)] = this[e2(536)].bind(this), this.nodeType = k, this.clear(), this.getType = this[e2(585)].bind(this), this.getElementById = this.getElementById.bind(this), this.getParent = this.getParent.bind(this), this.getMindmap = this.getMindmap[e2(481)](this), this[e2(505)] = this.addNode.bind(this), this[e2(562)] = this.decorateNode.bind(this);
  }
  clear() {
    let e2 = g;
    this.nodes = [], this.count = 0, this.elements = {}, this[e2(522)] = void 0;
  }
  getParent(e2) {
    let t2 = g;
    for (let n2 = this.nodes.length - 1; n2 >= 0; n2--) if (this.nodes[n2].level < e2) return this[t2(591)][n2];
    return null;
  }
  [g(567)]() {
    let e2 = g;
    return this.nodes[e2(480)] > 0 ? this.nodes[0] : null;
  }
  addNode(e2, t2, r2, i2) {
    var _a, _b;
    let o2 = g;
    n.info(o2(505), e2, t2, r2, i2);
    let s2 = false;
    this[o2(591)][o2(480)] === 0 ? (this.baseLevel = e2, e2 = 0, s2 = true) : this.baseLevel !== void 0 && (e2 -= this[o2(522)], s2 = false);
    let l2 = a(), d2 = ((_a = l2.mindmap) == null ? void 0 : _a[o2(561)]) ?? u.mindmap[o2(561)];
    switch (i2) {
      case this.nodeType[o2(549)]:
      case this.nodeType.RECT:
      case this.nodeType[o2(578)]:
        d2 *= 2;
        break;
    }
    let f2 = { id: this.count++, nodeId: c(t2, l2), level: e2, descr: c(r2, l2), type: i2, children: [], width: ((_b = l2[o2(556)]) == null ? void 0 : _b.maxNodeWidth) ?? u[o2(556)].maxNodeWidth, padding: d2, isRoot: s2 }, p2 = this[o2(576)](e2);
    if (p2) p2.children.push(f2), this[o2(591)].push(f2);
    else if (s2) this[o2(591)].push(f2);
    else throw Error(`There can be only one root. No parent could be found for ("` + f2.descr + `")`);
  }
  getType(e2, t2) {
    let r2 = g;
    switch (n.debug(`In get type`, e2, t2), e2) {
      case `[`:
        return this.nodeType.RECT;
      case `(`:
        return t2 === `)` ? this[r2(564)].ROUNDED_RECT : this.nodeType.CLOUD;
      case `((`:
        return this.nodeType.CIRCLE;
      case `)`:
        return this.nodeType.CLOUD;
      case `))`:
        return this.nodeType.BANG;
      case `{{`:
        return this[r2(564)].HEXAGON;
      default:
        return this.nodeType[r2(502)];
    }
  }
  setElementForId(e2, t2) {
    this.elements[e2] = t2;
  }
  getElementById(e2) {
    return this.elements[e2];
  }
  decorateNode(e2) {
    let t2 = g;
    if (!e2) return;
    let n2 = a(), r2 = this[t2(591)][this.nodes.length - 1];
    e2.icon && (r2.icon = c(e2.icon, n2)), e2.class && (r2.class = c(e2.class, n2));
  }
  type2Str(e2) {
    let t2 = g;
    switch (e2) {
      case this.nodeType.DEFAULT:
        return t2(598);
      case this.nodeType.RECT:
        return t2(499);
      case this.nodeType.ROUNDED_RECT:
        return `rounded-rect`;
      case this.nodeType[t2(518)]:
        return `circle`;
      case this.nodeType.CLOUD:
        return `cloud`;
      case this.nodeType.BANG:
        return `bang`;
      case this.nodeType.HEXAGON:
        return t2(563);
      default:
        return `no-border`;
    }
  }
  assignSections(e2, t2) {
    let n2 = g;
    if (e2[n2(512)] === 0 ? e2[n2(482)] = void 0 : e2.section = t2, e2.children) for (let [n3, r2] of e2.children.entries()) {
      let i2 = e2.level === 0 ? n3 % (O - 1) : t2;
      this.assignSections(r2, i2);
    }
  }
  flattenNodes(e2, t2) {
    let n2 = g, i2 = a(), o2 = [`mindmap-node`];
    e2.isRoot === true ? o2.push(`section-root`, n2(555)) : e2[n2(482)] !== void 0 && o2[n2(524)](`section-` + e2.section), e2.class && o2.push(e2.class);
    let s2 = o2.join(` `), c2 = r((e3) => {
      var _a;
      let t3 = n2, r2 = (((_a = i2.theme) == null ? void 0 : _a.toLowerCase()) ?? ``).includes(`redux`);
      switch (e3) {
        case k.CIRCLE:
          return `mindmapCircle`;
        case k.RECT:
          return `rect`;
        case k[t3(549)]:
          return `rounded`;
        case k.CLOUD:
          return `cloud`;
        case k.BANG:
          return `bang`;
        case k[t3(578)]:
          return `hexagon`;
        case k.DEFAULT:
          return r2 ? `rounded` : `defaultMindmapNode`;
        case k[t3(543)]:
        default:
          return t3(499);
      }
    }, `getShapeFromType`), l2 = { id: e2.id.toString(), domId: `node_` + e2.id.toString(), label: e2.descr, labelType: `markdown`, isGroup: false, shape: c2(e2.type), width: e2.width, height: e2.height ?? 0, padding: e2.padding, cssClasses: s2, cssStyles: [], look: i2.look, icon: e2.icon, x: e2.x, y: e2.y, level: e2.level, nodeId: e2.nodeId, type: e2.type, section: e2.section };
    if (t2[n2(524)](l2), e2.children) for (let n3 of e2.children) this.flattenNodes(n3, t2);
  }
  generateEdges(e2, t2) {
    let n2 = g;
    if (!e2.children) return;
    let r2 = a();
    for (let i2 of e2[n2(489)]) {
      let a2 = n2(557);
      i2.section !== void 0 && (a2 += ` section-edge-` + i2.section);
      let o2 = e2.level + 1;
      a2 += ` edge-depth-` + o2;
      let s2 = { id: n2(581) + e2.id + `_` + i2.id, start: e2.id.toString(), end: i2.id.toString(), type: `normal`, curve: `basis`, thickness: `normal`, look: r2.look, classes: a2, depth: e2[n2(512)], section: i2.section };
      t2.push(s2), this.generateEdges(i2, t2);
    }
  }
  getData() {
    let e2 = g, t2 = this.getMindmap(), r2 = a(), o2 = i().layout !== void 0, s2 = r2;
    if (o2 || (s2.layout = `cose-bilkent`), !t2) return { nodes: [], edges: [], config: s2 };
    n[e2(594)](`getData: mindmapRoot`, t2, r2), this.assignSections(t2);
    let c2 = [], l2 = [];
    this.flattenNodes(t2, c2), this.generateEdges(t2, l2), n.debug(`getData: processed ` + c2.length + ` nodes and ` + l2[e2(480)] + ` edges`);
    let u2 = /* @__PURE__ */ new Map();
    for (let e3 of c2) u2.set(e3.id, { shape: e3.shape, width: e3.width, height: e3.height, padding: e3.padding });
    return { nodes: c2, edges: l2, config: s2, rootNode: t2, markers: [e2(596)], direction: `TB`, nodeSpacing: 50, rankSpacing: 50, shapes: Object.fromEntries(u2), type: e2(556), diagramId: `mindmap-` + C() };
  }
  [g(536)]() {
    return n;
  }
}, r(T, `MindmapDB`), T), j = { draw: r((function() {
  var e2 = t(function* (e3, t2, r2, i2) {
    var _a, _b;
    let a2 = v;
    n.debug(`Rendering mindmap diagram
` + e3);
    let o2 = i2.db, s2 = o2.getData(), c2 = m(t2, s2.config[a2(525)]);
    if (s2.type = i2.type, s2.layoutAlgorithm = f(s2.config.layout, { fallback: `cose-bilkent` }), s2.diagramId = t2, !o2.getMindmap()) return;
    s2.nodes[a2(593)]((e4) => {
      let t3 = a2;
      e4.shape === `rounded` ? (e4.radius = 15, e4.taper = 15, e4.stroke = `none`, e4.width = 0, e4.padding = 15) : e4[t3(519)] === `circle` ? e4.padding = 10 : e4.shape === `rect` ? (e4.width = 0, e4.padding = 10) : e4[t3(519)] === t3(483) && (e4.width = 0, e4.height = 0);
    }), yield p(s2, c2);
    let { themeVariables: l2 } = d(), { useGradient: g2, gradientStart: _2, gradientStop: y2 } = l2;
    if (g2 && _2 && y2) {
      let e4 = c2.attr(`id`), t3 = c2.append(`defs`).append(`linearGradient`).attr(`id`, e4 + `-gradient`).attr(`gradientUnits`, `objectBoundingBox`)[a2(595)](`x1`, `0%`).attr(`y1`, `0%`).attr(`x2`, `100%`).attr(`y2`, `0%`);
      t3.append(`stop`).attr(`offset`, `0%`).attr(`stop-color`, _2).attr(`stop-opacity`, 1), t3.append(`stop`).attr(`offset`, `100%`).attr(`stop-color`, y2).attr(`stop-opacity`, 1);
    }
    h(c2, ((_a = s2.config.mindmap) == null ? void 0 : _a.padding) ?? u.mindmap.padding, `mindmapDiagram`, ((_b = s2.config[a2(556)]) == null ? void 0 : _b.useMaxWidth) ?? u.mindmap.useMaxWidth);
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), `draw`) }, M = r((e2) => {
  let t2 = g, { theme: n2, look: r2 } = e2, i2 = ``;
  for (let n3 = 0; n3 < e2.THEME_COLOR_LIMIT; n3++) e2[`lineColor` + n3] = e2[`lineColor` + n3] || e2[t2(510) + n3], l(e2[`lineColor` + n3]) ? e2[`lineColor` + n3] = o(e2[`lineColor` + n3], 20) : e2[`lineColor` + n3] = s(e2[t2(528) + n3], 20);
  for (let a2 = 0; a2 < e2[t2(531)]; a2++) {
    let o2 = `` + (r2 === t2(559) ? Math.max(10 - (a2 - 1) * 2, 2) : 17 - 3 * a2);
    i2 += `
    .section-` + (a2 - 1) + ` rect, .section-` + (a2 - 1) + ` path, .section-` + (a2 - 1) + ` circle, .section-` + (a2 - 1) + t2(498) + (a2 - 1) + ` path  {
      fill: ` + e2[t2(494) + a2] + `;
    }
    .section-` + (a2 - 1) + ` text {
     fill: ` + e2[t2(552) + a2] + `;
    }
     .section-` + (a2 - 1) + ` span {
     color: ` + e2[t2(552) + a2] + `;
    }
    .node-icon-` + (a2 - 1) + ` {
      font-size: 40px;
      color: ` + e2[`cScaleLabel` + a2] + `;
    }
    .section-edge-` + (a2 - 1) + `{
      stroke: ` + e2[t2(494) + a2] + `;
    }
    .edge-depth-` + (a2 - 1) + `{
      stroke-width: ` + o2 + `;
    }
    .section-` + (a2 - 1) + ` line {
      stroke: ` + e2[`cScaleInv` + a2] + ` ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    [data-look="neo"].mindmap-node.section-` + (a2 - 1) + ` rect, [data-look="neo"].mindmap-node.section-` + (a2 - 1) + ` path, [data-look="neo"].mindmap-node.section-` + (a2 - 1) + ` circle, [data-look="neo"].mindmap-node.section-` + (a2 - 1) + ` polygon {
      fill: ` + (n2 === `redux` || n2 === `redux-dark` || n2 === `neutral` ? e2.mainBkg : e2[`cScale` + a2]) + t2(487) + (n2 === `redux` || n2 === `redux-dark` ? e2.nodeBorder : e2[`cScale` + a2]) + t2(497) + (e2[t2(597)] ?? 2) + `px;
    }
    [data-look="neo"].section-edge-` + (a2 - 1) + t2(570) + (n2 != null && n2.includes(`redux`) || n2 === `neo-dark` ? e2.nodeBorder : e2[`cScale` + a2]) + `;
    }
    [data-look="neo"].mindmap-node.section-` + (a2 - 1) + ` text {
     fill: ` + (n2 === `redux` || n2 === t2(588) ? e2.nodeBorder : e2[`cScaleLabel` + (n2 === `neutral` ? 1 : a2)]) + t2(587);
  }
  return i2;
}, `genSections`), N = r((e2, t2, n2) => {
  let r2 = g, i2 = ``;
  for (let a2 = 0; a2 < e2; a2++) i2 += `
    [data-look="neo"].mindmap-node.section-` + (a2 - 1) + r2(574) + (a2 - 1) + ` path, [data-look="neo"].mindmap-node.section-` + (a2 - 1) + ` circle, [data-look="neo"].mindmap-node.section-` + (a2 - 1) + ` polygon {
      stroke: url(` + t2 + `-gradient);
      fill: ` + n2 + `;
    }
    .section-` + (a2 - 1) + ` line {
      stroke-width: 0;
    }`;
  return i2;
}, `genGradient`), P = { get db() {
  return new A();
}, renderer: j, parser: D, styles: r((e2) => {
  let t2 = g, { theme: n2 } = e2, r2 = e2[t2(599)], i2 = e2.dropShadow ? e2[t2(589)].replace(t2(513), `url(` + r2 + `-drop-shadow)`) : `none`;
  return `
  .edge {
    stroke-width: 3;
  }
  ` + M(e2) + `
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ` + e2.git0 + `;
  }
  .section-root text {
    fill: ` + e2.gitBranchLabel0 + `;
  }
  .section-root span {
    color: ` + (n2 != null && n2.includes(`redux`) ? e2.nodeBorder : e2.gitBranchLabel0) + `;
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
  [data-look="neo"].mindmap-node  {
    filter: ` + i2 + `;
  }
  [data-look="neo"].mindmap-node.section-root rect, [data-look="neo"].mindmap-node.section-root path, [data-look="neo"].mindmap-node.section-root circle, [data-look="neo"].mindmap-node.section-root polygon  {
    fill: ` + (n2 != null && n2.includes(`redux`) ? e2.mainBkg : e2.git0) + `;
  }
  [data-look="neo"].mindmap-node.section-root .text-inner-tspan {
    fill:  ` + (n2 != null && n2.includes(`redux`) ? e2.nodeBorder : e2[`cScaleLabel` + +(n2 === `neutral`)]) + `;
  }
  ` + (e2.useGradient && r2 && e2.mainBkg ? N(e2.THEME_COLOR_LIMIT, r2, e2.mainBkg) : ``) + `
`;
}, `getStyles`) };
export {
  P as diagram
};
