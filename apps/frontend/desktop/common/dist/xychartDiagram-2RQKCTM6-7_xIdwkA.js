import { g as e } from "./src-B18GHWxx.js";
import { t } from "./init-FHLUNZLx.js";
import { c as n } from "./linear-JqIC9lyT.js";
import { t as r } from "./ordinal-Dn-wPUXi.js";
import { n as i, t as a } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as o, E as s, W as c, X as l, Z as u, c as d, j as f, k as p, p as m, q as h, s as g, z as _ } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h as v } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as y } from "./chunk-WU5MYG2G-BnIisATw.js";
import { n as b } from "./chunk-O5CBEL6O-CERCp6yT.js";
var x = J;
(function(e2, t2) {
  let n2 = J, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(428)) / 1 * (parseInt(n2(300)) / 2) + -parseInt(n2(446)) / 3 + parseInt(n2(415)) / 4 * (parseInt(n2(331)) / 5) + -parseInt(n2(434)) / 6 * (parseInt(n2(292)) / 7) + -parseInt(n2(327)) / 8 + -parseInt(n2(316)) / 9 + parseInt(n2(444)) / 10 * (parseInt(n2(377)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Y, 928146);
function S(e2, t2, n2) {
  e2 = +e2, t2 = +t2, n2 = (i2 = arguments.length) < 2 ? (t2 = e2, e2 = 0, 1) : i2 < 3 ? 1 : +n2;
  for (var r2 = -1, i2 = Math.max(0, Math.ceil((t2 - e2) / n2)) | 0, a2 = Array(i2); ++r2 < i2; ) a2[r2] = e2 + r2 * n2;
  return a2;
}
function C() {
  let e2 = J;
  var n2 = r().unknown(void 0), i2 = n2[e2(389)], a2 = n2.range, o2 = 0, s2 = 1, c2, l2, u2 = false, d2 = 0, f2 = 0, p2 = 0.5;
  delete n2[e2(323)];
  function m2() {
    var e3 = i2().length, t2 = s2 < o2, n3 = t2 ? s2 : o2, r2 = t2 ? o2 : s2;
    c2 = (r2 - n3) / Math.max(1, e3 - d2 + f2 * 2), u2 && (c2 = Math.floor(c2)), n3 += (r2 - n3 - c2 * (e3 - d2)) * p2, l2 = c2 * (1 - d2), u2 && (n3 = Math.round(n3), l2 = Math.round(l2));
    var m3 = S(e3).map(function(e4) {
      return n3 + c2 * e4;
    });
    return a2(t2 ? m3.reverse() : m3);
  }
  return n2[e2(389)] = function(t2) {
    let n3 = e2;
    return arguments[n3(382)] ? (i2(t2), m2()) : i2();
  }, n2.range = function(t2) {
    let n3 = e2;
    return arguments[n3(382)] ? ([o2, s2] = t2, o2 = +o2, s2 = +s2, m2()) : [o2, s2];
  }, n2.rangeRound = function(e3) {
    return [o2, s2] = e3, o2 = +o2, s2 = +s2, u2 = true, m2();
  }, n2.bandwidth = function() {
    return l2;
  }, n2.step = function() {
    return c2;
  }, n2[e2(311)] = function(e3) {
    return arguments.length ? (u2 = !!e3, m2()) : u2;
  }, n2.padding = function(e3) {
    return arguments.length ? (d2 = Math.min(1, f2 = +e3), m2()) : d2;
  }, n2.paddingInner = function(e3) {
    return arguments.length ? (d2 = Math.min(1, e3), m2()) : d2;
  }, n2.paddingOuter = function(e3) {
    return arguments.length ? (f2 = +e3, m2()) : f2;
  }, n2[e2(422)] = function(t2) {
    let n3 = e2;
    return arguments.length ? (p2 = Math[n3(470)](0, Math.min(1, t2)), m2()) : p2;
  }, n2.copy = function() {
    let t2 = e2;
    return C(i2(), [o2, s2])[t2(311)](u2).paddingInner(d2).paddingOuter(f2)[t2(422)](p2);
  }, t.apply(m2(), arguments);
}
var w, T, E, D, O, k, A, j, M, N, P = (function() {
  let e2 = J;
  var t2 = a(function(e3, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e3.length; r3--; n3[e3[r3]] = t3) ;
    return n3;
  }, `o`), n2 = [1, 10, 12, 14, 16, 18, 19, 21, 23], r2 = [2, 6], i2 = [1, 3], o2 = [1, 5], s2 = [1, 6], c2 = [1, 7], l2 = [1, 5, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], u2 = [1, 25], d2 = [1, 26], f2 = [1, 28], p2 = [1, 29], m2 = [1, 30], h2 = [1, 31], g2 = [1, 32], _2 = [1, 33], v2 = [1, 34], y2 = [1, 35], b2 = [1, 36], x2 = [1, 37], S2 = [1, 43], C2 = [1, 42], w2 = [1, 47], T2 = [1, 50], E2 = [1, 10, 12, 14, 16, 18, 19, 21, 23, 34, 35, 36], D2 = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36], O2 = [1, 10, 12, 14, 16, 18, 19, 21, 23, 24, 26, 27, 28, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], k2 = [1, 64], A2 = { trace: a(function() {
  }, e2(468)), yy: {}, symbols_: { error: 2, start: 3, eol: 4, XYCHART: 5, chartConfig: 6, document: 7, CHART_ORIENTATION: 8, statement: 9, title: 10, text: 11, X_AXIS: 12, parseXAxis: 13, Y_AXIS: 14, parseYAxis: 15, LINE: 16, plotData: 17, BAR: 18, acc_title: 19, acc_title_value: 20, acc_descr: 21, acc_descr_value: 22, acc_descr_multiline_value: 23, SQUARE_BRACES_START: 24, commaSeparatedNumbers: 25, SQUARE_BRACES_END: 26, NUMBER_WITH_DECIMAL: 27, COMMA: 28, xAxisData: 29, bandData: 30, ARROW_DELIMITER: 31, commaSeparatedTexts: 32, yAxisData: 33, NEWLINE: 34, SEMI: 35, EOF: 36, alphaNum: 37, STR: 38, MD_STR: 39, alphaNumToken: 40, AMP: 41, NUM: 42, ALPHA: 43, PLUS: 44, EQUALS: 45, MULT: 46, DOT: 47, BRKT: 48, MINUS: 49, UNDERSCORE: 50, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 5: `XYCHART`, 8: `CHART_ORIENTATION`, 10: `title`, 12: `X_AXIS`, 14: `Y_AXIS`, 16: `LINE`, 18: `BAR`, 19: `acc_title`, 20: `acc_title_value`, 21: `acc_descr`, 22: `acc_descr_value`, 23: e2(373), 24: e2(408), 26: `SQUARE_BRACES_END`, 27: e2(345), 28: `COMMA`, 31: e2(417), 34: `NEWLINE`, 35: `SEMI`, 36: `EOF`, 38: `STR`, 39: `MD_STR`, 41: `AMP`, 42: e2(306), 43: `ALPHA`, 44: e2(375), 45: `EQUALS`, 46: `MULT`, 47: `DOT`, 48: `BRKT`, 49: `MINUS`, 50: `UNDERSCORE` }, productions_: [0, [3, 2], [3, 3], [3, 2], [3, 1], [6, 1], [7, 0], [7, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 2], [9, 3], [9, 2], [9, 3], [9, 2], [9, 2], [9, 1], [17, 3], [25, 3], [25, 1], [13, 1], [13, 2], [13, 1], [29, 1], [29, 3], [30, 3], [32, 3], [32, 1], [15, 1], [15, 2], [15, 1], [33, 3], [4, 1], [4, 1], [4, 1], [11, 1], [11, 1], [11, 1], [37, 1], [37, 2], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1]], performAction: a(function(t3, n3, r3, i3, a2, o3, s3) {
    let c3 = e2;
    var l3 = o3.length - 1;
    switch (a2) {
      case 5:
        i3.setOrientation(o3[l3]);
        break;
      case 9:
        i3.setDiagramTitle(o3[l3].text[c3(322)]());
        break;
      case 12:
        i3.setLineData({ text: ``, type: c3(419) }, o3[l3]);
        break;
      case 13:
        i3.setLineData(o3[l3 - 1], o3[l3]);
        break;
      case 14:
        i3.setBarData({ text: ``, type: `text` }, o3[l3]);
        break;
      case 15:
        i3[c3(298)](o3[l3 - 1], o3[l3]);
        break;
      case 16:
        this.$ = o3[l3].trim(), i3.setAccTitle(this.$);
        break;
      case 17:
      case 18:
        this.$ = o3[l3].trim(), i3.setAccDescription(this.$);
        break;
      case 19:
        this.$ = o3[l3 - 1];
        break;
      case 20:
        this.$ = [Number(o3[l3 - 2]), ...o3[l3]];
        break;
      case 21:
        this.$ = [Number(o3[l3])];
        break;
      case 22:
        i3[c3(448)](o3[l3]);
        break;
      case 23:
        i3.setXAxisTitle(o3[l3 - 1]);
        break;
      case 24:
        i3.setXAxisTitle({ type: `text`, text: `` });
        break;
      case 25:
        i3.setXAxisBand(o3[l3]);
        break;
      case 26:
        i3.setXAxisRangeData(Number(o3[l3 - 2]), Number(o3[l3]));
        break;
      case 27:
        this.$ = o3[l3 - 1];
        break;
      case 28:
        this.$ = [o3[l3 - 2], ...o3[l3]];
        break;
      case 29:
        this.$ = [o3[l3]];
        break;
      case 30:
        i3.setYAxisTitle(o3[l3]);
        break;
      case 31:
        i3.setYAxisTitle(o3[l3 - 1]);
        break;
      case 32:
        i3.setYAxisTitle({ type: c3(419), text: `` });
        break;
      case 33:
        i3.setYAxisRangeData(Number(o3[l3 - 2]), Number(o3[l3]));
        break;
      case 37:
        this.$ = { text: o3[l3], type: c3(419) };
        break;
      case 38:
        this.$ = { text: o3[l3], type: c3(419) };
        break;
      case 39:
        this.$ = { text: o3[l3], type: `markdown` };
        break;
      case 40:
        this.$ = o3[l3];
        break;
      case 41:
        this.$ = o3[l3 - 1] + `` + o3[l3];
        break;
    }
  }, `anonymous`), table: [t2(n2, r2, { 3: 1, 4: 2, 7: 4, 5: i2, 34: o2, 35: s2, 36: c2 }), { 1: [3] }, t2(n2, r2, { 4: 2, 7: 4, 3: 8, 5: i2, 34: o2, 35: s2, 36: c2 }), t2(n2, r2, { 4: 2, 7: 4, 6: 9, 3: 10, 5: i2, 8: [1, 11], 34: o2, 35: s2, 36: c2 }), { 1: [2, 4], 9: 12, 10: [1, 13], 12: [1, 14], 14: [1, 15], 16: [1, 16], 18: [1, 17], 19: [1, 18], 21: [1, 19], 23: [1, 20] }, t2(l2, [2, 34]), t2(l2, [2, 35]), t2(l2, [2, 36]), { 1: [2, 1] }, t2(n2, r2, { 4: 2, 7: 4, 3: 21, 5: i2, 34: o2, 35: s2, 36: c2 }), { 1: [2, 3] }, t2(l2, [2, 5]), t2(n2, [2, 7], { 4: 22, 34: o2, 35: s2, 36: c2 }), { 11: 23, 37: 24, 38: u2, 39: d2, 40: 27, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }, { 11: 39, 13: 38, 24: S2, 27: C2, 29: 40, 30: 41, 37: 24, 38: u2, 39: d2, 40: 27, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }, { 11: 45, 15: 44, 27: w2, 33: 46, 37: 24, 38: u2, 39: d2, 40: 27, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }, { 11: 49, 17: 48, 24: T2, 37: 24, 38: u2, 39: d2, 40: 27, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }, { 11: 52, 17: 51, 24: T2, 37: 24, 38: u2, 39: d2, 40: 27, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }, { 20: [1, 53] }, { 22: [1, 54] }, t2(E2, [2, 18]), { 1: [2, 2] }, t2(E2, [2, 8]), t2(E2, [2, 9]), t2(D2, [2, 37], { 40: 55, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }), t2(D2, [2, 38]), t2(D2, [2, 39]), t2(O2, [2, 40]), t2(O2, [2, 42]), t2(O2, [2, 43]), t2(O2, [2, 44]), t2(O2, [2, 45]), t2(O2, [2, 46]), t2(O2, [2, 47]), t2(O2, [2, 48]), t2(O2, [2, 49]), t2(O2, [2, 50]), t2(O2, [2, 51]), t2(E2, [2, 10]), t2(E2, [2, 22], { 30: 41, 29: 56, 24: S2, 27: C2 }), t2(E2, [2, 24]), t2(E2, [2, 25]), { 31: [1, 57] }, { 11: 59, 32: 58, 37: 24, 38: u2, 39: d2, 40: 27, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }, t2(E2, [2, 11]), t2(E2, [2, 30], { 33: 60, 27: w2 }), t2(E2, [2, 32]), { 31: [1, 61] }, t2(E2, [2, 12]), { 17: 62, 24: T2 }, { 25: 63, 27: k2 }, t2(E2, [2, 14]), { 17: 65, 24: T2 }, t2(E2, [2, 16]), t2(E2, [2, 17]), t2(O2, [2, 41]), t2(E2, [2, 23]), { 27: [1, 66] }, { 26: [1, 67] }, { 26: [2, 29], 28: [1, 68] }, t2(E2, [2, 31]), { 27: [1, 69] }, t2(E2, [2, 13]), { 26: [1, 70] }, { 26: [2, 21], 28: [1, 71] }, t2(E2, [2, 15]), t2(E2, [2, 26]), t2(E2, [2, 27]), { 11: 59, 32: 72, 37: 24, 38: u2, 39: d2, 40: 27, 41: f2, 42: p2, 43: m2, 44: h2, 45: g2, 46: _2, 47: v2, 48: y2, 49: b2, 50: x2 }, t2(E2, [2, 33]), t2(E2, [2, 19]), { 25: 73, 27: k2 }, { 26: [2, 28] }, { 26: [2, 20] }], defaultActions: { 8: [2, 1], 10: [2, 3], 21: [2, 2], 72: [2, 28], 73: [2, 20] }, parseError: a(function(t3, n3) {
    let r3 = e2;
    if (n3.recoverable) this.trace(t3);
    else {
      var i3 = Error(t3);
      throw i3[r3(367)] = n3, i3;
    }
  }, `parseError`), parse: a(function(t3) {
    let n3 = e2;
    var r3 = this, i3 = [0], o3 = [], s3 = [null], c3 = [], l3 = this.table, u3 = ``, d3 = 0, f3 = 0, p3 = 0, m3 = 2, h3 = 1, g3 = c3.slice.call(arguments, 1), _3 = Object[n3(315)](this.lexer), v3 = { yy: {} };
    for (var y3 in this.yy) Object[n3(469)].hasOwnProperty[n3(414)](this.yy, y3) && (v3.yy[y3] = this.yy[y3]);
    _3.setInput(t3, v3.yy), v3.yy.lexer = _3, v3.yy[n3(410)] = this, _3[n3(416)] === void 0 && (_3[n3(416)] = {});
    var b3 = _3[n3(416)];
    c3.push(b3);
    var x3 = _3.options && _3.options.ranges;
    typeof v3.yy.parseError == `function` ? this.parseError = v3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function S3(e3) {
      let t4 = n3;
      i3.length -= 2 * e3, s3.length -= e3, c3[t4(382)] -= e3;
    }
    a(S3, `popStack`);
    function C3() {
      let e3 = n3;
      var t4 = o3.pop() || _3[e3(381)]() || h3;
      return typeof t4 != `number` && (t4 instanceof Array && (o3 = t4, t4 = o3[e3(353)]()), t4 = r3[e3(293)][t4] || t4), t4;
    }
    a(C3, `lex`);
    for (var w3, T3, E3, D3, O3, k3 = {}, A3, j3, M2, N2; ; ) {
      if (E3 = i3[i3.length - 1], this.defaultActions[E3] ? D3 = this.defaultActions[E3] : (w3 ?? (w3 = C3()), D3 = l3[E3] && l3[E3][w3]), D3 === void 0 || !D3.length || !D3[0]) {
        var P2 = ``;
        for (A3 in N2 = [], l3[E3]) this.terminals_[A3] && A3 > m3 && N2.push(`'` + this[n3(387)][A3] + `'`);
        P2 = _3.showPosition ? n3(346) + (d3 + 1) + `:
` + _3.showPosition() + n3(405) + N2.join(`, `) + `, got '` + (this.terminals_[w3] || w3) + `'` : `Parse error on line ` + (d3 + 1) + `: Unexpected ` + (w3 == h3 ? `end of input` : `'` + (this.terminals_[w3] || w3) + `'`), this.parseError(P2, { text: _3.match, token: this.terminals_[w3] || w3, line: _3.yylineno, loc: b3, expected: N2 });
      }
      if (D3[0] instanceof Array && D3.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + E3 + `, token: ` + w3);
      switch (D3[0]) {
        case 1:
          i3.push(w3), s3[n3(436)](_3.yytext), c3.push(_3.yylloc), i3.push(D3[1]), w3 = null, T3 ? (w3 = T3, T3 = null) : (f3 = _3[n3(347)], u3 = _3[n3(425)], d3 = _3.yylineno, b3 = _3.yylloc, p3 > 0 && p3--);
          break;
        case 2:
          if (j3 = this[n3(341)][D3[1]][1], k3.$ = s3[s3.length - j3], k3._$ = { first_line: c3[c3.length - (j3 || 1)].first_line, last_line: c3[c3.length - 1].last_line, first_column: c3[c3[n3(382)] - (j3 || 1)][n3(396)], last_column: c3[c3.length - 1].last_column }, x3 && (k3._$.range = [c3[c3[n3(382)] - (j3 || 1)].range[0], c3[c3.length - 1].range[1]]), O3 = this.performAction.apply(k3, [u3, f3, d3, v3.yy, D3[1], s3, c3].concat(g3)), O3 !== void 0) return O3;
          j3 && (i3 = i3.slice(0, -1 * j3 * 2), s3 = s3.slice(0, -1 * j3), c3 = c3[n3(459)](0, -1 * j3)), i3.push(this.productions_[D3[1]][0]), s3.push(k3.$), c3.push(k3._$), M2 = l3[i3[i3.length - 2]][i3[i3.length - 1]], i3.push(M2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  A2.lexer = (function() {
    let t3 = e2;
    return { EOF: 1, parseError: a(function(e3, t4) {
      if (this.yy.parser) this.yy.parser.parseError(e3, t4);
      else throw Error(e3);
    }, t3(369)), setInput: a(function(e3, n3) {
      let r3 = t3;
      return this.yy = n3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this[r3(386)] = this.match = ``, this[r3(433)] = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc[r3(458)] = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: a(function() {
      let e3 = t3;
      var n3 = this._input[0];
      return this[e3(425)] += n3, this.yyleng++, this.offset++, this[e3(309)] += n3, this.matched += n3, n3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), n3;
    }, t3(457)), unput: a(function(e3) {
      let n3 = t3;
      var r3 = e3.length, i3 = e3.split(/(?:\r\n?|\n)/g);
      this[n3(324)] = e3 + this[n3(324)], this.yytext = this.yytext.substr(0, this.yytext.length - r3), this.offset -= r3;
      var a2 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this[n3(309)].length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i3[n3(382)] - 1 && (this.yylineno -= i3.length - 1);
      var o3 = this.yylloc.range;
      return this[n3(416)] = { first_line: this.yylloc[n3(338)], last_line: this[n3(394)] + 1, first_column: this.yylloc.first_column, last_column: i3 ? (i3.length === a2[n3(382)] ? this[n3(416)].first_column : 0) + a2[a2.length - i3.length][n3(382)] - i3[0][n3(382)] : this.yylloc[n3(396)] - r3 }, this.options.ranges && (this.yylloc.range = [o3[0], o3[0] + this[n3(347)] - r3]), this[n3(347)] = this[n3(425)].length, this;
    }, `unput`), more: a(function() {
      return this._more = true, this;
    }, `more`), reject: a(function() {
      let e3 = t3;
      if (this.options.backtrack_lexer) this[e3(426)] = true;
      else return this[e3(369)](`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: a(function(e3) {
      this.unput(this.match.slice(e3));
    }, `less`), pastInput: a(function() {
      let e3 = t3;
      var n3 = this[e3(386)][e3(328)](0, this.matched.length - this.match.length);
      return (n3.length > 20 ? `...` : ``) + n3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: a(function() {
      let e3 = t3;
      var n3 = this.match;
      return n3.length < 20 && (n3 += this._input.substr(0, 20 - n3.length)), (n3[e3(328)](0, 20) + (n3.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: a(function() {
      var e3 = this.pastInput(), t4 = Array(e3.length + 1).join(`-`);
      return e3 + this.upcomingInput() + `
` + t4 + `^`;
    }, `showPosition`), test_match: a(function(e3, n3) {
      let r3 = t3;
      var i3, a2, o3;
      if (this[r3(411)].backtrack_lexer && (o3 = { yylineno: this[r3(394)], yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc.last_column }, yytext: this[r3(425)], match: this.match, matches: this.matches, matched: this.matched, yyleng: this[r3(347)], offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this[r3(433)][r3(459)](0), done: this.done }, this.options.ranges && (o3.yylloc.range = this.yylloc.range[r3(459)](0))), a2 = e3[0][r3(309)](/(?:\r\n?|\n).*/g), a2 && (this.yylineno += a2.length), this[r3(416)] = { first_line: this.yylloc.last_line, last_line: this[r3(394)] + 1, first_column: this.yylloc.last_column, last_column: a2 ? a2[a2.length - 1].length - a2[a2.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + e3[0].length }, this.yytext += e3[0], this[r3(309)] += e3[0], this.matches = e3, this.yyleng = this.yytext.length, this.options[r3(358)] && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this[r3(325)] = false, this[r3(426)] = false, this._input = this._input[r3(459)](e3[0].length), this.matched += e3[0], i3 = this.performAction.call(this, this.yy, this, n3, this.conditionStack[this.conditionStack.length - 1]), this[r3(297)] && this._input && (this[r3(297)] = false), i3) return i3;
      if (this._backtrack) {
        for (var s3 in o3) this[s3] = o3[s3];
        return false;
      }
      return false;
    }, `test_match`), next: a(function() {
      let e3 = t3;
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var n3, r3, i3, a2;
      this._more || (this.yytext = ``, this.match = ``);
      for (var o3 = this[e3(380)](), s3 = 0; s3 < o3[e3(382)]; s3++) if (i3 = this._input.match(this.rules[o3[s3]]), i3 && (!r3 || i3[0].length > r3[0].length)) {
        if (r3 = i3, a2 = s3, this[e3(411)][e3(445)]) {
          if (n3 = this[e3(403)](i3, o3[s3]), n3 !== false) return n3;
          if (this._backtrack) {
            r3 = false;
            continue;
          } else return false;
        } else if (!this.options[e3(397)]) break;
      }
      return r3 ? (n3 = this.test_match(r3, o3[a2]), n3 === false ? false : n3) : this[e3(324)] === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: a(function() {
      return this.next() || this.lex();
    }, `lex`), begin: a(function(e3) {
      this.conditionStack.push(e3);
    }, t3(438)), popState: a(function() {
      let e3 = t3;
      return this[e3(433)].length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, t3(319)), _currentRules: a(function() {
      let e3 = t3;
      return this.conditionStack.length && this.conditionStack[this.conditionStack[e3(382)] - 1] ? this[e3(402)][this[e3(433)][this[e3(433)].length - 1]][e3(420)] : this.conditions[e3(385)].rules;
    }, `_currentRules`), topState: a(function(e3) {
      let n3 = t3;
      return e3 = this[n3(433)].length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this[n3(433)][e3] : `INITIAL`;
    }, `topState`), pushState: a(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: a(function() {
      let e3 = t3;
      return this[e3(433)].length;
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: a(function(e3, n3, r3, i3) {
      let a2 = t3;
      switch (r3) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          return this.popState(), 34;
        case 3:
          return this[a2(319)](), 34;
        case 4:
          return 34;
        case 5:
          break;
        case 6:
          return 10;
        case 7:
          return this.pushState(`acc_title`), 19;
        case 8:
          return this[a2(319)](), `acc_title_value`;
        case 9:
          return this.pushState(`acc_descr`), 21;
        case 10:
          return this.popState(), `acc_descr_value`;
        case 11:
          this.pushState(a2(455));
          break;
        case 12:
          this.popState();
          break;
        case 13:
          return a2(373);
        case 14:
          return 5;
        case 15:
          return 5;
        case 16:
          return 8;
        case 17:
          return this.pushState(`axis_data`), `X_AXIS`;
        case 18:
          return this.pushState(`axis_data`), `Y_AXIS`;
        case 19:
          return this.pushState(`axis_band_data`), 24;
        case 20:
          return 31;
        case 21:
          return this.pushState(`data`), 16;
        case 22:
          return this.pushState(`data`), 18;
        case 23:
          return this.pushState(a2(427)), 24;
        case 24:
          return 27;
        case 25:
          return this.popState(), 26;
        case 26:
          this.popState();
          break;
        case 27:
          this.pushState(a2(348));
          break;
        case 28:
          this.popState();
          break;
        case 29:
          return `STR`;
        case 30:
          return 24;
        case 31:
          return 26;
        case 32:
          return 43;
        case 33:
          return `COLON`;
        case 34:
          return 44;
        case 35:
          return 28;
        case 36:
          return 45;
        case 37:
          return 46;
        case 38:
          return 48;
        case 39:
          return 50;
        case 40:
          return 47;
        case 41:
          return 41;
        case 42:
          return 49;
        case 43:
          return 42;
        case 44:
          break;
        case 45:
          return 35;
        case 46:
          return 36;
      }
    }, `anonymous`), rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:(\r?\n))/i, /^(?:(\r?\n))/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:title\b)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:\})/i, /^(?:[^\}]*)/i, /^(?:xychart-beta\b)/i, /^(?:xychart\b)/i, /^(?:(?:vertical|horizontal))/i, /^(?:x-axis\b)/i, /^(?:y-axis\b)/i, /^(?:\[)/i, /^(?:-->)/i, /^(?:line\b)/i, /^(?:bar\b)/i, /^(?:\[)/i, /^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i, /^(?:\])/i, /^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i, /^(?:["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:\[)/i, /^(?:\])/i, /^(?:[A-Za-z]+)/i, /^(?::)/i, /^(?:\+)/i, /^(?:,)/i, /^(?:=)/i, /^(?:\*)/i, /^(?:#)/i, /^(?:[\_])/i, /^(?:\.)/i, /^(?:&)/i, /^(?:-)/i, /^(?:[0-9]+)/i, /^(?:\s+)/i, /^(?:;)/i, /^(?:$)/i], conditions: { data_inner: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, data: { rules: [0, 1, 3, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 23, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, axis_band_data: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, axis_data: { rules: [0, 1, 2, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true }, acc_descr_multiline: { rules: [12, 13], inclusive: false }, acc_descr: { rules: [10], inclusive: false }, acc_title: { rules: [8], inclusive: false }, title: { rules: [], inclusive: false }, md_string: { rules: [], inclusive: false }, string: { rules: [28, 29], inclusive: false }, INITIAL: { rules: [0, 1, 4, 5, 6, 7, 9, 11, 14, 15, 16, 17, 18, 21, 22, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46], inclusive: true } } };
  })();
  function j2() {
    this.yy = {};
  }
  return a(j2, `Parser`), j2.prototype = A2, A2[e2(354)] = j2, new j2();
})();
P.parser = P;
var ee = P;
function F(e2) {
  let t2 = J;
  return e2.type === t2(350);
}
a(F, x(304));
function I(e2) {
  let t2 = x;
  return e2.type === t2(355);
}
a(I, `isBandAxisData`);
function L(e2) {
  return e2.type === `linear`;
}
a(L, `isLinearAxisData`);
var te = (w = class {
  constructor(e2) {
    this.parentGroup = e2;
  }
  getMaxDimension(e2, t2) {
    let n2 = x;
    if (!this.parentGroup) return { width: e2.reduce((e3, t3) => Math[n2(470)](t3.length, e3), 0) * t2, height: t2 };
    let r2 = { width: 0, height: 0 }, i2 = this.parentGroup.append(`g`).attr(n2(376), `hidden`).attr(`font-size`, t2);
    for (let a2 of e2) {
      let e3 = b(i2, 1, a2), o2 = e3 ? e3.width : a2.length * t2, s2 = e3 ? e3.height : t2;
      r2.width = Math.max(r2.width, o2), r2.height = Math[n2(470)](r2.height, s2);
    }
    return i2.remove(), r2;
  }
}, a(w, `TextDimensionCalculatorWithFont`), w), ne = 0.7, re = 0.2, ie = (T = class {
  constructor(e2, t2, n2, r2) {
    let i2 = x;
    this[i2(321)] = e2, this.title = t2, this.textDimensionCalculator = n2, this.axisThemeConfig = r2, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this[i2(351)] = `left`, this.showTitle = false, this.showLabel = false, this.showTick = false, this[i2(330)] = false, this.outerPadding = 0, this.titleTextHeight = 0, this[i2(412)] = 0, this.range = [0, 10], this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.axisPosition = `left`;
  }
  setRange(e2) {
    let t2 = x;
    this.range = e2, this.axisPosition === `left` || this.axisPosition === `right` ? this[t2(318)].height = e2[1] - e2[0] : this.boundingRect.width = e2[1] - e2[0], this.recalculateScale();
  }
  getRange() {
    let e2 = x;
    return [this.range[0] + this[e2(409)], this.range[1] - this[e2(409)]];
  }
  setAxisPosition(e2) {
    this.axisPosition = e2, this.setRange(this.range);
  }
  getTickDistance() {
    let e2 = x, t2 = this[e2(460)]();
    return Math.abs(t2[0] - t2[1]) / this[e2(320)]().length;
  }
  getAxisOuterPadding() {
    return this.outerPadding;
  }
  getLabelDimension() {
    let e2 = x;
    return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map((t2) => t2[e2(372)]()), this[e2(321)][e2(395)]);
  }
  recalculateOuterPaddingToDrawBar() {
    let e2 = x;
    ne * this.getTickDistance() > this.outerPadding * 2 && (this.outerPadding = Math.floor(ne * this.getTickDistance() / 2)), this[e2(374)]();
  }
  [x(442)](e2) {
    let t2 = x, n2 = e2.height;
    if (this.axisConfig.showAxisLine && n2 > this.axisConfig.axisLineWidth && (n2 -= this[t2(321)].axisLineWidth, this.showAxisLine = true), this.axisConfig.showLabel) {
      let r2 = this.getLabelDimension(), i2 = re * e2[t2(462)];
      this.outerPadding = Math.min(r2.width / 2, i2);
      let a2 = r2.height + this.axisConfig.labelPadding * 2;
      this.labelTextHeight = r2.height, a2 <= n2 && (n2 -= a2, this[t2(423)] = true);
    }
    if (this.axisConfig.showTick && n2 >= this.axisConfig.tickLength && (this.showTick = true, n2 -= this.axisConfig.tickLength), this[t2(321)].showTitle && this.title) {
      let e3 = this.textDimensionCalculator[t2(391)]([this.title], this.axisConfig.titleFontSize), r2 = e3.height + this[t2(321)].titlePadding * 2;
      this[t2(388)] = e3[t2(413)], r2 <= n2 && (n2 -= r2, this.showTitle = true);
    }
    this.boundingRect.width = e2.width, this.boundingRect.height = e2.height - n2;
  }
  calculateSpaceIfDrawnVertical(e2) {
    let t2 = x, n2 = e2.width;
    if (this.axisConfig.showAxisLine && n2 > this.axisConfig[t2(356)] && (n2 -= this.axisConfig.axisLineWidth, this[t2(330)] = true), this.axisConfig.showLabel) {
      let r2 = this[t2(406)](), i2 = re * e2[t2(413)];
      this.outerPadding = Math.min(r2.height / 2, i2);
      let a2 = r2.width + this[t2(321)][t2(313)] * 2;
      a2 <= n2 && (n2 -= a2, this.showLabel = true);
    }
    if (this.axisConfig.showTick && n2 >= this.axisConfig.tickLength && (this.showTick = true, n2 -= this.axisConfig[t2(329)]), this.axisConfig.showTitle && this.title) {
      let e3 = this.textDimensionCalculator.getMaxDimension([this.title], this.axisConfig.titleFontSize), r2 = e3.height + this.axisConfig.titlePadding * 2;
      this[t2(388)] = e3.height, r2 <= n2 && (n2 -= r2, this[t2(337)] = true);
    }
    this.boundingRect.width = e2.width - n2, this.boundingRect.height = e2.height;
  }
  calculateSpace(e2) {
    return this.axisPosition === `left` || this.axisPosition === `right` ? this.calculateSpaceIfDrawnVertical(e2) : this.calculateSpaceIfDrawnHorizontally(e2), this.recalculateScale(), { width: this.boundingRect.width, height: this.boundingRect.height };
  }
  [x(308)](e2) {
    this.boundingRect.x = e2.x, this.boundingRect.y = e2.y;
  }
  getDrawableElementsForLeftAxis() {
    let e2 = x, t2 = [];
    if (this.showAxisLine) {
      let n2 = this.boundingRect.x + this.boundingRect.width - this.axisConfig.axisLineWidth / 2;
      t2.push({ type: `path`, groupTexts: [`left-axis`, `axisl-line`], data: [{ path: `M ` + n2 + `,` + this.boundingRect.y + ` L ` + n2 + `,` + (this.boundingRect.y + this.boundingRect[e2(413)]) + ` `, strokeFill: this.axisThemeConfig[e2(314)], strokeWidth: this.axisConfig.axisLineWidth }] });
    }
    if (this.showLabel && t2.push({ type: e2(419), groupTexts: [`left-axis`, `label`], data: this.getTickValues().map((t3) => ({ text: t3.toString(), x: this.boundingRect.x + this.boundingRect.width - (this.showLabel ? this.axisConfig.labelPadding : 0) - (this.showTick ? this.axisConfig.tickLength : 0) - (this[e2(330)] ? this.axisConfig.axisLineWidth : 0), y: this.getScaleValue(t3), fill: this[e2(317)].labelColor, fontSize: this.axisConfig[e2(395)], rotation: 0, verticalPos: e2(349), horizontalPos: `right` })) }), this.showTick) {
      let n2 = this.boundingRect.x + this[e2(318)].width - (this.showAxisLine ? this[e2(321)][e2(356)] : 0);
      t2.push({ type: e2(464), groupTexts: [`left-axis`, e2(366)], data: this.getTickValues().map((t3) => ({ path: `M ` + n2 + `,` + this[e2(333)](t3) + ` L ` + (n2 - this.axisConfig.tickLength) + `,` + this.getScaleValue(t3), strokeFill: this.axisThemeConfig.tickColor, strokeWidth: this.axisConfig.tickWidth })) });
    }
    return this[e2(337)] && t2.push({ type: `text`, groupTexts: [`left-axis`, `title`], data: [{ text: this[e2(294)], x: this[e2(318)].x + this.axisConfig[e2(450)], y: this.boundingRect.y + this[e2(318)].height / 2, fill: this[e2(317)].titleColor, fontSize: this.axisConfig[e2(357)], rotation: 270, verticalPos: e2(365), horizontalPos: `center` }] }), t2;
  }
  getDrawableElementsForBottomAxis() {
    let e2 = x, t2 = [];
    if (this.showAxisLine) {
      let n2 = this.boundingRect.y + this.axisConfig.axisLineWidth / 2;
      t2.push({ type: e2(464), groupTexts: [`bottom-axis`, `axis-line`], data: [{ path: `M ` + this.boundingRect.x + `,` + n2 + ` L ` + (this.boundingRect.x + this.boundingRect[e2(462)]) + `,` + n2, strokeFill: this.axisThemeConfig[e2(314)], strokeWidth: this.axisConfig.axisLineWidth }] });
    }
    if (this[e2(423)] && t2.push({ type: `text`, groupTexts: [`bottom-axis`, `label`], data: this.getTickValues().map((t3) => ({ text: t3.toString(), x: this.getScaleValue(t3), y: this[e2(318)].y + this.axisConfig[e2(313)] + (this.showTick ? this.axisConfig.tickLength : 0) + (this[e2(330)] ? this[e2(321)].axisLineWidth : 0), fill: this.axisThemeConfig.labelColor, fontSize: this[e2(321)].labelFontSize, rotation: 0, verticalPos: `top`, horizontalPos: `center` })) }), this.showTick) {
      let n2 = this.boundingRect.y + (this.showAxisLine ? this.axisConfig.axisLineWidth : 0);
      t2.push({ type: `path`, groupTexts: [`bottom-axis`, `ticks`], data: this.getTickValues()[e2(392)]((t3) => ({ path: `M ` + this.getScaleValue(t3) + `,` + n2 + ` L ` + this.getScaleValue(t3) + `,` + (n2 + this.axisConfig.tickLength), strokeFill: this.axisThemeConfig[e2(361)], strokeWidth: this[e2(321)].tickWidth })) });
    }
    return this.showTitle && t2[e2(436)]({ type: `text`, groupTexts: [`bottom-axis`, `title`], data: [{ text: this.title, x: this.range[0] + (this.range[1] - this[e2(458)][0]) / 2, y: this.boundingRect.y + this.boundingRect.height - this.axisConfig.titlePadding - this.titleTextHeight, fill: this.axisThemeConfig.titleColor, fontSize: this.axisConfig[e2(357)], rotation: 0, verticalPos: `top`, horizontalPos: `center` }] }), t2;
  }
  getDrawableElementsForTopAxis() {
    let e2 = x, t2 = [];
    if (this.showAxisLine) {
      let n2 = this[e2(318)].y + this.boundingRect.height - this.axisConfig[e2(356)] / 2;
      t2.push({ type: e2(464), groupTexts: [e2(303), e2(340)], data: [{ path: `M ` + this.boundingRect.x + `,` + n2 + ` L ` + (this[e2(318)].x + this.boundingRect.width) + `,` + n2, strokeFill: this.axisThemeConfig[e2(314)], strokeWidth: this.axisConfig.axisLineWidth }] });
    }
    if (this.showLabel && t2.push({ type: `text`, groupTexts: [`top-axis`, `label`], data: this.getTickValues().map((t3) => ({ text: t3[e2(372)](), x: this.getScaleValue(t3), y: this[e2(318)].y + (this.showTitle ? this.titleTextHeight + this.axisConfig.titlePadding * 2 : 0) + this.axisConfig.labelPadding, fill: this.axisThemeConfig.labelColor, fontSize: this[e2(321)].labelFontSize, rotation: 0, verticalPos: `top`, horizontalPos: `center` })) }), this.showTick) {
      let n2 = this.boundingRect.y;
      t2.push({ type: `path`, groupTexts: [`top-axis`, `ticks`], data: this.getTickValues().map((t3) => ({ path: `M ` + this.getScaleValue(t3) + `,` + (n2 + this.boundingRect.height - (this.showAxisLine ? this[e2(321)].axisLineWidth : 0)) + ` L ` + this.getScaleValue(t3) + `,` + (n2 + this.boundingRect.height - this.axisConfig.tickLength - (this.showAxisLine ? this.axisConfig[e2(356)] : 0)), strokeFill: this.axisThemeConfig.tickColor, strokeWidth: this.axisConfig.tickWidth })) });
    }
    return this.showTitle && t2.push({ type: `text`, groupTexts: [`top-axis`, `title`], data: [{ text: this.title, x: this.boundingRect.x + this.boundingRect[e2(462)] / 2, y: this.boundingRect.y + this[e2(321)].titlePadding, fill: this.axisThemeConfig[e2(432)], fontSize: this.axisConfig[e2(357)], rotation: 0, verticalPos: `top`, horizontalPos: `center` }] }), t2;
  }
  [x(401)]() {
    let e2 = x;
    if (this[e2(351)] === e2(364)) return this.getDrawableElementsForLeftAxis();
    if (this[e2(351)] === e2(441)) throw Error(`Drawing of right axis is not implemented`);
    return this.axisPosition === `bottom` ? this[e2(400)]() : this.axisPosition === `top` ? this.getDrawableElementsForTopAxis() : [];
  }
}, a(T, x(326)), T), ae = (E = class extends ie {
  constructor(e2, t2, n2, r2, i2) {
    super(e2, r2, i2, t2), this.categories = n2, this.scale = C().domain(this.categories).range(this.getRange());
  }
  [x(466)](e2) {
    super.setRange(e2);
  }
  recalculateScale() {
    let e2 = x;
    this.scale = C()[e2(389)](this.categories).range(this[e2(460)]()).paddingInner(1)[e2(384)](0).align(0.5), i.trace(`BandAxis axis final categories, range: `, this.categories, this[e2(460)]());
  }
  getTickValues() {
    let e2 = x;
    return this[e2(379)];
  }
  getScaleValue(e2) {
    let t2 = x;
    return this.scale(e2) ?? this[t2(460)]()[0];
  }
}, a(E, `BandAxis`), E), oe = (D = class extends ie {
  constructor(e2, t2, r2, i2, a2) {
    let o2 = x;
    super(e2, i2, a2, t2), this.domain = r2, this.scale = n().domain(this.domain).range(this[o2(460)]());
  }
  getTickValues() {
    return this.scale.ticks();
  }
  recalculateScale() {
    let e2 = x, t2 = [...this.domain];
    this.axisPosition === `left` && t2[e2(449)](), this.scale = n().domain(t2).range(this.getRange());
  }
  [x(333)](e2) {
    return this.scale(e2);
  }
}, a(D, `LinearAxis`), D);
function R(e2, t2, n2, r2) {
  let i2 = new te(r2);
  return I(e2) ? new ae(t2, n2, e2.categories, e2.title, i2) : new oe(t2, n2, [e2.min, e2.max], e2.title, i2);
}
a(R, `getAxis`);
var se = (O = class {
  constructor(e2, t2, n2, r2) {
    let i2 = x;
    this.textDimensionCalculator = e2, this.chartConfig = t2, this.chartData = n2, this[i2(390)] = r2, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 }, this.showChartTitle = false;
  }
  setBoundingBoxXY(e2) {
    let t2 = x;
    this[t2(318)].x = e2.x, this.boundingRect.y = e2.y;
  }
  calculateSpace(e2) {
    let t2 = x, n2 = this[t2(431)].getMaxDimension([this.chartData.title], this.chartConfig.titleFontSize), r2 = Math[t2(470)](n2.width, e2.width), i2 = n2.height + 2 * this.chartConfig.titlePadding;
    return n2[t2(462)] <= r2 && n2.height <= i2 && this.chartConfig.showTitle && this.chartData.title && (this[t2(318)][t2(462)] = r2, this[t2(318)].height = i2, this.showChartTitle = true), { width: this[t2(318)].width, height: this.boundingRect.height };
  }
  [x(401)]() {
    let e2 = x, t2 = [];
    return this.showChartTitle && t2.push({ groupTexts: [`chart-title`], type: `text`, data: [{ fontSize: this.chartConfig[e2(357)], text: this.chartData.title, verticalPos: `middle`, horizontalPos: `center`, x: this.boundingRect.x + this.boundingRect.width / 2, y: this.boundingRect.y + this.boundingRect[e2(413)] / 2, fill: this.chartThemeConfig.titleColor, rotation: 0 }] }), t2;
  }
}, a(O, `ChartTitle`), O);
function ce(e2, t2, n2, r2) {
  return new se(new te(r2), e2, t2, n2);
}
a(ce, `getChartTitleComponent`);
var le = (k = class {
  constructor(e2, t2, n2, r2, i2) {
    let a2 = x;
    this[a2(378)] = e2, this[a2(421)] = t2, this.yAxis = n2, this[a2(310)] = r2, this.plotIndex = i2;
  }
  getDrawableElement() {
    let t2 = x, n2 = this.plotData.data.map((e2) => [this.xAxis[t2(333)](e2[0]), this[t2(301)].getScaleValue(e2[1])]), r2;
    return r2 = this.orientation === `horizontal` ? e().y((e2) => e2[0]).x((e2) => e2[1])(n2) : e().x((e2) => e2[0]).y((e2) => e2[1])(n2), r2 ? [{ groupTexts: [`plot`, `line-plot-` + this.plotIndex], type: `path`, data: [{ path: r2, strokeFill: this.plotData[t2(299)], strokeWidth: this[t2(378)].strokeWidth }] }] : [];
  }
}, a(k, x(371)), k), ue = (A = class {
  constructor(e2, t2, n2, r2, i2, a2) {
    let o2 = x;
    this[o2(332)] = e2, this[o2(318)] = t2, this.xAxis = n2, this.yAxis = r2, this.orientation = i2, this.plotIndex = a2;
  }
  [x(418)]() {
    let e2 = x, t2 = this.barData.data.map((t3) => [this.xAxis.getScaleValue(t3[0]), this[e2(301)][e2(333)](t3[1])]), n2 = Math.min(this.xAxis.getAxisOuterPadding() * 2, this[e2(421)].getTickDistance()) * 0.95, r2 = n2 / 2;
    return this.orientation === e2(435) ? [{ groupTexts: [`plot`, `bar-plot-` + this[e2(336)]], type: `rect`, data: t2[e2(392)]((e3) => ({ x: this.boundingRect.x, y: e3[0] - r2, height: n2, width: e3[1] - this.boundingRect.x, fill: this.barData.fill, strokeWidth: 0, strokeFill: this.barData.fill })) }] : [{ groupTexts: [`plot`, e2(404) + this.plotIndex], type: `rect`, data: t2.map((t3) => ({ x: t3[0] - r2, y: t3[1], width: n2, height: this.boundingRect.y + this.boundingRect.height - t3[1], fill: this.barData[e2(454)], strokeWidth: 0, strokeFill: this.barData.fill })) }];
  }
}, a(A, `BarPlot`), A), de = (j = class {
  constructor(e2, t2, n2) {
    this.chartConfig = e2, this.chartData = t2, this.chartThemeConfig = n2, this.boundingRect = { x: 0, y: 0, width: 0, height: 0 };
  }
  setAxes(e2, t2) {
    this.xAxis = e2, this.yAxis = t2;
  }
  [x(308)](e2) {
    this.boundingRect.x = e2.x, this.boundingRect.y = e2.y;
  }
  calculateSpace(e2) {
    let t2 = x;
    return this.boundingRect.width = e2.width, this.boundingRect.height = e2[t2(413)], { width: this.boundingRect[t2(462)], height: this[t2(318)].height };
  }
  getDrawableElements() {
    let e2 = x;
    if (!(this[e2(421)] && this.yAxis)) throw Error(`Axes must be passed to render Plots`);
    let t2 = [];
    for (let [n2, r2] of this.chartData[e2(393)].entries()) switch (r2.type) {
      case `line`:
        {
          let i2 = new le(r2, this.xAxis, this.yAxis, this.chartConfig[e2(342)], n2);
          t2.push(...i2.getDrawableElement());
        }
        break;
      case `bar`:
        {
          let i2 = new ue(r2, this[e2(318)], this.xAxis, this.yAxis, this.chartConfig.chartOrientation, n2);
          t2.push(...i2.getDrawableElement());
        }
        break;
    }
    return t2;
  }
}, a(j, `BasePlot`), j);
function fe(e2, t2, n2) {
  return new de(e2, t2, n2);
}
a(fe, `getPlotComponent`);
var pe = (M = class {
  constructor(e2, t2, n2, r2) {
    let i2 = x;
    this.chartConfig = e2, this.chartData = t2, this.componentStore = { title: ce(e2, t2, n2, r2), plot: fe(e2, t2, n2), xAxis: R(t2.xAxis, e2.xAxis, { titleColor: n2[i2(439)], labelColor: n2.xAxisLabelColor, tickColor: n2.xAxisTickColor, axisLineColor: n2.xAxisLineColor }, r2), yAxis: R(t2[i2(301)], e2[i2(301)], { titleColor: n2.yAxisTitleColor, labelColor: n2[i2(443)], tickColor: n2[i2(429)], axisLineColor: n2[i2(359)] }, r2) };
  }
  calculateVerticalSpace() {
    let e2 = x, t2 = this.chartConfig.width, n2 = this.chartConfig.height, r2 = 0, i2 = 0, a2 = Math.floor(t2 * this.chartConfig.plotReservedSpacePercent / 100), o2 = Math.floor(n2 * this.chartConfig.plotReservedSpacePercent / 100), s2 = this.componentStore.plot[e2(363)]({ width: a2, height: o2 });
    t2 -= s2.width, n2 -= s2.height, s2 = this.componentStore.title.calculateSpace({ width: this.chartConfig.width, height: n2 }), i2 = s2.height, n2 -= s2[e2(413)], this[e2(467)].xAxis.setAxisPosition(`bottom`), s2 = this.componentStore.xAxis[e2(363)]({ width: t2, height: n2 }), n2 -= s2.height, this.componentStore.yAxis.setAxisPosition(`left`), s2 = this.componentStore.yAxis.calculateSpace({ width: t2, height: n2 }), r2 = s2[e2(462)], t2 -= s2[e2(462)], t2 > 0 && (a2 += t2, t2 = 0), n2 > 0 && (o2 += n2, n2 = 0), this.componentStore.plot.calculateSpace({ width: a2, height: o2 }), this.componentStore[e2(312)].setBoundingBoxXY({ x: r2, y: i2 }), this.componentStore.xAxis[e2(466)]([r2, r2 + a2]), this.componentStore.xAxis.setBoundingBoxXY({ x: r2, y: i2 + o2 }), this[e2(467)].yAxis.setRange([i2, i2 + o2]), this[e2(467)].yAxis.setBoundingBoxXY({ x: 0, y: i2 }), this.chartData[e2(393)].some((e3) => F(e3)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  calculateHorizontalSpace() {
    let e2 = x, t2 = this[e2(368)][e2(462)], n2 = this.chartConfig.height, r2 = 0, i2 = 0, a2 = 0, o2 = Math[e2(453)](t2 * this.chartConfig.plotReservedSpacePercent / 100), s2 = Math.floor(n2 * this[e2(368)].plotReservedSpacePercent / 100), c2 = this[e2(467)].plot.calculateSpace({ width: o2, height: s2 });
    t2 -= c2.width, n2 -= c2.height, c2 = this[e2(467)].title[e2(363)]({ width: this.chartConfig.width, height: n2 }), r2 = c2.height, n2 -= c2.height, this.componentStore.xAxis.setAxisPosition(`left`), c2 = this.componentStore.xAxis.calculateSpace({ width: t2, height: n2 }), t2 -= c2.width, i2 = c2.width, this.componentStore.yAxis.setAxisPosition(`top`), c2 = this.componentStore.yAxis.calculateSpace({ width: t2, height: n2 }), n2 -= c2.height, a2 = r2 + c2.height, t2 > 0 && (o2 += t2, t2 = 0), n2 > 0 && (s2 += n2, n2 = 0), this.componentStore.plot.calculateSpace({ width: o2, height: s2 }), this[e2(467)][e2(312)].setBoundingBoxXY({ x: i2, y: a2 }), this.componentStore.yAxis.setRange([i2, i2 + o2]), this.componentStore.yAxis.setBoundingBoxXY({ x: i2, y: r2 }), this[e2(467)][e2(421)][e2(466)]([a2, a2 + s2]), this.componentStore.xAxis.setBoundingBoxXY({ x: 0, y: a2 }), this[e2(465)].plots.some((e3) => F(e3)) && this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
  [x(363)]() {
    let e2 = x;
    this.chartConfig.chartOrientation === e2(435) ? this.calculateHorizontalSpace() : this.calculateVerticalSpace();
  }
  getDrawableElement() {
    let e2 = x;
    this.calculateSpace();
    let t2 = [];
    this.componentStore.plot.setAxes(this[e2(467)].xAxis, this.componentStore.yAxis);
    for (let e3 of Object.values(this.componentStore)) t2.push(...e3.getDrawableElements());
    return t2;
  }
}, a(M, `Orchestrator`), M), me = (N = class {
  static build(e2, t2, n2, r2) {
    let i2 = x;
    return new pe(e2, t2, n2, r2)[i2(418)]();
  }
}, a(N, `XYChartBuilder`), N), z = 0, he, B = q(), V = K(), H = X(), U = V.plotColorPalette.split(`,`).map((e2) => e2.trim()), W = false, G = false;
function K() {
  let e2 = x, t2 = d(), n2 = _();
  return v(t2[e2(399)], n2.themeVariables.xyChart);
}
a(K, `getChartDefaultThemeConfig`);
function q() {
  let e2 = _();
  return v(g.xyChart, e2.xyChart);
}
function J(e2, t2) {
  return e2 -= 292, Y()[e2];
}
function Y() {
  let e2 = `ranges.yAxisLineColor.strokeWidth.tickColor.stroke-width.calculateSpace.left.top.ticks.hash.chartConfig.parseError.filter.LinePlot.toString.acc_descr_multiline_value.recalculateScale.PLUS.visibility.11GPvcnj.plotData.categories._currentRules.lex.length.text-anchor.paddingOuter.INITIAL.matched.terminals_.titleTextHeight.domain.chartThemeConfig.getMaxDimension.map.plots.yylineno.labelFontSize.first_column.flex.getChartConfig.xyChart.getDrawableElementsForBottomAxis.getDrawableElements.conditions.test_match.bar-plot-.
Expecting .getLabelDimension.attr.SQUARE_BRACES_START.outerPadding.parser.options.labelTextHeight.height.call.5205812zkCoUC.yylloc.ARROW_DELIMITER.getDrawableElement.text.rules.xAxis.align.showLabel.getChartDefaultData.yytext._backtrack.data_inner.4766nESKeK.yAxisTickColor.start.textDimensionCalculator.titleColor.conditionStack.8706ErBwgg.horizontal.push.showDataLabelOutsideBar.begin.xAxisTitleColor.fontSize.right.calculateSpaceIfDrawnHorizontally.yAxisLabelColor.35270010jNgyjU.backtrack_lexer.3253227GPjacl.draw.setXAxisTitle.reverse.titlePadding.data.line.floor.fill.acc_descr_multiline.fitsInBar.input.range.slice.getRange.enter.width.getXYChartData.path.chartData.setRange.componentStore.trace.prototype.max.3563iZhYPq.symbols_.title.append.fitsHorizontally.done.setBarData.strokeFill.68Ghemii.yAxis.label.top-axis.isBarPlot.getDrawableElem.NUM.getChartThemeConfig.setBoundingBoxXY.match.orientation.round.plot.labelPadding.axisLineColor.create.14148963XLZUnz.axisThemeConfig.boundingRect.popState.getTickValues.axisConfig.trim.unknown._input._more.BaseAxis.2745512eBCsOK.substr.tickLength.showAxisLine.5oLNcCm.barData.getScaleValue.textSanitizer.setXAxisRangeData.plotIndex.showTitle.first_line.stroke.axis-line.productions_.chartOrientation.font-size.linear.NUMBER_WITH_DECIMAL.Parse error on line .yyleng.string.middle.bar.axisPosition.selectAll.pop.Parser.band.axisLineWidth.titleFontSize`.split(`.`);
  return Y = function() {
    return e2;
  }, Y();
}
a(q, `getChartDefaultConfig`);
function X() {
  return { yAxis: { type: x(344), title: ``, min: 1 / 0, max: -1 / 0 }, xAxis: { type: `band`, title: ``, categories: [] }, title: ``, plots: [] };
}
a(X, x(424));
function Z(e2) {
  let t2 = _();
  return m(e2.trim(), t2);
}
a(Z, x(334));
function ge(e2) {
  he = e2;
}
a(ge, `setTmpSVGG`);
function _e(e2) {
  e2 === `horizontal` ? B.chartOrientation = `horizontal` : B.chartOrientation = `vertical`;
}
a(_e, `setOrientation`);
function ve(e2) {
  let t2 = x;
  H[t2(421)].title = Z(e2.text);
}
a(ve, `setXAxisTitle`);
function Q(e2, t2) {
  let n2 = x;
  H.xAxis = { type: `linear`, title: H.xAxis[n2(294)], min: e2, max: t2 }, W = true;
}
a(Q, x(335));
function ye(e2) {
  H.xAxis = { type: `band`, title: H.xAxis.title, categories: e2.map((e3) => Z(e3.text)) }, W = true;
}
a(ye, `setXAxisBand`);
function be(e2) {
  H.yAxis.title = Z(e2.text);
}
a(be, `setYAxisTitle`);
function xe(e2, t2) {
  H.yAxis = { type: `linear`, title: H.yAxis.title, min: e2, max: t2 }, G = true;
}
a(xe, `setYAxisRangeData`);
function Se(e2) {
  let t2 = x, n2 = Math.min(...e2), r2 = Math[t2(470)](...e2), i2 = L(H.yAxis) ? H.yAxis.min : 1 / 0, a2 = L(H.yAxis) ? H.yAxis.max : -1 / 0;
  H.yAxis = { type: `linear`, title: H[t2(301)].title, min: Math.min(i2, n2), max: Math.max(a2, r2) };
}
a(Se, `setYAxisRangeFromPlotData`);
function $(e2) {
  let t2 = x, n2 = [];
  if (e2.length === 0) return n2;
  if (!W) {
    let n3 = L(H.xAxis) ? H.xAxis.min : 1 / 0, r2 = L(H.xAxis) ? H.xAxis[t2(470)] : -1 / 0;
    Q(Math.min(n3, 1), Math[t2(470)](r2, e2.length));
  }
  if (G || Se(e2), I(H[t2(421)]) && (n2 = H.xAxis.categories.map((t3, n3) => [t3, e2[n3]])), L(H.xAxis)) {
    let r2 = H.xAxis.min, i2 = H.xAxis.max, a2 = (i2 - r2) / (e2[t2(382)] - 1), o2 = [];
    for (let e3 = r2; e3 <= i2; e3 += a2) o2.push(`` + e3);
    n2 = o2.map((t3, n3) => [t3, e2[n3]]);
  }
  return n2;
}
a($, `transformDataWithoutCategory`);
function Ce(e2) {
  return U[e2 === 0 ? 0 : e2 % U.length];
}
a(Ce, `getPlotColorFromPalette`);
function we(e2, t2) {
  let n2 = x, r2 = $(t2);
  H[n2(393)][n2(436)]({ type: n2(452), strokeFill: Ce(z), strokeWidth: 2, data: r2 }), z++;
}
a(we, `setLineData`);
function Te(e2, t2) {
  let n2 = $(t2);
  H.plots.push({ type: `bar`, fill: Ce(z), data: n2 }), z++;
}
a(Te, `setBarData`);
function Ee() {
  let e2 = x;
  if (H.plots.length === 0) throw Error(`No Plot to render, please provide a plot with some data`);
  return H[e2(294)] = f(), me.build(B, H, V, he);
}
a(Ee, x(305));
function De() {
  return V;
}
a(De, `getChartThemeConfig`);
function Oe() {
  return B;
}
a(Oe, x(398));
function ke() {
  return H;
}
a(ke, `getXYChartData`);
var Ae = { parser: ee, db: { getDrawableElem: Ee, clear: a(function() {
  let e2 = x;
  s(), z = 0, B = q(), H = X(), V = K(), U = V.plotColorPalette.split(`,`)[e2(392)]((e3) => e3.trim()), W = false, G = false;
}, `clear`), setAccTitle: c, getAccTitle: l, setDiagramTitle: u, getDiagramTitle: f, getAccDescription: o, setAccDescription: p, setOrientation: _e, setXAxisTitle: ve, setXAxisRangeData: Q, setXAxisBand: ye, setYAxisTitle: be, setYAxisRangeData: xe, setLineData: we, setBarData: Te, setTmpSVGG: ge, getChartThemeConfig: De, getChartConfig: Oe, getXYChartData: ke }, renderer: { draw: a((e2, t2, n2, r2) => {
  let o2 = x, s2 = r2.db, c2 = s2[o2(307)](), l2 = s2[o2(398)](), u2 = s2[o2(463)]().plots[0].data.map((e3) => e3[1]);
  function d2(e3) {
    return e3 === `top` ? `text-before-edge` : o2(349);
  }
  a(d2, `getDominantBaseLine`);
  function f2(e3) {
    return e3 === `left` ? `start` : e3 === `right` ? `end` : o2(349);
  }
  a(f2, `getTextAnchor`);
  function p2(e3) {
    return `translate(` + e3.x + `, ` + e3.y + `) rotate(` + (e3.rotation || 0) + `)`;
  }
  a(p2, `getTextTransformation`), i.debug(`Rendering xychart chart
` + e2);
  let m2 = y(t2), g2 = m2[o2(295)](`g`).attr(`class`, `main`), _2 = g2.append(`rect`).attr(o2(462), l2.width)[o2(407)](`height`, l2.height)[o2(407)](`class`, `background`);
  h(m2, l2[o2(413)], l2.width, true), m2.attr(`viewBox`, `0 0 ` + l2.width + ` ` + l2.height), _2.attr(`fill`, c2.backgroundColor), s2.setTmpSVGG(m2.append(`g`).attr(`class`, `mermaid-tmp-group`));
  let v2 = s2.getDrawableElem(), b2 = {};
  function S2(e3) {
    let t3 = g2, n3 = ``;
    for (let [r3] of e3.entries()) {
      let i2 = g2;
      r3 > 0 && b2[n3] && (i2 = b2[n3]), n3 += e3[r3], t3 = b2[n3], t3 || (t3 = b2[n3] = i2.append(`g`).attr(`class`, e3[r3]));
    }
    return t3;
  }
  a(S2, `getGroup`);
  for (let e3 of v2) {
    if (e3.data.length === 0) continue;
    let t3 = S2(e3.groupTexts);
    switch (e3.type) {
      case `rect`:
        if (t3.selectAll(`rect`).data(e3.data).enter()[o2(295)](`rect`).attr(`x`, (e4) => e4.x).attr(`y`, (e4) => e4.y).attr(`width`, (e4) => e4.width).attr(o2(413), (e4) => e4.height).attr(`fill`, (e4) => e4.fill)[o2(407)](o2(339), (e4) => e4[o2(299)]).attr(o2(362), (e4) => e4[o2(360)]), l2.showDataLabel) {
          let n3 = l2[o2(437)];
          if (l2.chartOrientation === `horizontal`) {
            let r3 = function(e4, t4) {
              let n4 = o2, { data: r4, label: a2 } = e4;
              return t4 * a2[n4(382)] * i2 <= r4.width - s3;
            };
            a(r3, o2(296));
            let i2 = 0.7, s3 = 10, l3 = e3.data.map((e4, t4) => ({ data: e4, label: u2[t4][o2(372)]() })).filter((e4) => e4.data.width > 0 && e4[o2(451)].height > 0), d3 = l3.map((e4) => {
              let { data: t4 } = e4, n4 = t4.height * 0.7;
              for (; !r3(e4, n4) && n4 > 0; ) --n4;
              return n4;
            }), f3 = Math.floor(Math.min(...d3)), p3 = a((e4) => n3 ? e4.data.x + e4.data.width + 10 : e4.data.x + e4.data[o2(462)] - 10, `determineLabelXPosition`);
            t3.selectAll(`text`)[o2(451)](l3)[o2(461)]().append(o2(419))[o2(407)](`x`, p3).attr(`y`, (e4) => e4.data.y + e4[o2(451)].height / 2).attr(o2(383), n3 ? o2(430) : `end`).attr(`dominant-baseline`, o2(349)).attr(o2(454), c2.dataLabelColor)[o2(407)](o2(343), f3 + `px`).text((e4) => e4[o2(302)]);
          } else {
            let r3 = function(e4, t4, n4) {
              let r4 = o2, { data: i3, label: a2 } = e4, s4 = t4 * a2[r4(382)] * 0.7, c3 = i3.x + i3.width / 2, l4 = c3 - s4 / 2, u3 = c3 + s4 / 2, d4 = l4 >= i3.x && u3 <= i3.x + i3.width, f3 = i3.y + n4 + t4 <= i3.y + i3.height;
              return d4 && f3;
            };
            a(r3, o2(456));
            let i2 = e3.data.map((e4, t4) => ({ data: e4, label: u2[t4].toString() }))[o2(370)]((e4) => e4.data.width > 0 && e4.data[o2(413)] > 0), s3 = i2.map((e4) => {
              let { data: t4, label: n4 } = e4, i3 = t4.width / (n4.length * 0.7);
              for (; !r3(e4, i3, 10) && i3 > 0; ) --i3;
              return i3;
            }), l3 = Math.floor(Math.min(...s3)), d3 = a((e4) => n3 ? e4.data.y - 10 : e4[o2(451)].y + 10, `determineLabelYPosition`);
            t3.selectAll(`text`).data(i2).enter().append(`text`).attr(`x`, (e4) => e4.data.x + e4.data.width / 2)[o2(407)](`y`, d3).attr(`text-anchor`, `middle`)[o2(407)](`dominant-baseline`, n3 ? `auto` : `hanging`).attr(`fill`, c2.dataLabelColor).attr(o2(343), l3 + `px`).text((e4) => e4.label);
          }
        }
        break;
      case `text`:
        t3.selectAll(`text`)[o2(451)](e3.data)[o2(461)]().append(`text`)[o2(407)](`x`, 0).attr(`y`, 0).attr(`fill`, (e4) => e4[o2(454)]).attr(`font-size`, (e4) => e4[o2(440)]).attr(`dominant-baseline`, (e4) => d2(e4.verticalPos)).attr(`text-anchor`, (e4) => f2(e4.horizontalPos)).attr(`transform`, (e4) => p2(e4)).text((e4) => e4.text);
        break;
      case `path`:
        t3[o2(352)](`path`).data(e3.data)[o2(461)]().append(`path`).attr(`d`, (e4) => e4.path).attr(`fill`, (e4) => e4[o2(454)] ? e4.fill : `none`).attr(`stroke`, (e4) => e4[o2(299)])[o2(407)](o2(362), (e4) => e4.strokeWidth);
        break;
    }
  }
}, x(447)) } };
export {
  Ae as diagram
};
