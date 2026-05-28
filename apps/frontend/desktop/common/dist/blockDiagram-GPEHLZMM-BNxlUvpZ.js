import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { d as i, g as a, m as o } from "./src-B18GHWxx.js";
import { n as s, t as c } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { $ as l, D as u, E as d, L as f, V as p, g as m, p as h, q as g, z as _ } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { A as v, C as y, F as b, G as x, H as S, K as C, M as w, P as T, R as E, T as D, V as O, W as k, _ as A, a as j, g as ee, i as M, j as te, l as ne, m as re, n as ie, o as ae, p as oe, q as se, r as ce, s as le, t as ue, v as de, y as fe } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as pe } from "./chunk-O5CBEL6O-CERCp6yT.js";
import { t as me } from "./channel-Bo3Ldk-b.js";
import { i as N, n as he } from "./chunk-BSJP7CBP-DNSq_z0Y.js";
import { n as ge, t as _e } from "./chunk-L5ZTLDWV-CfFez56L.js";
import { t as ve } from "./chunk-FMBD7UC4-CCeQ3wOo.js";
import { nt as ye } from "./graphlib-DTFeuqXt.js";
var P = Q;
(function(e2, t2) {
  let n2 = Q, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(487)) / 1 * (parseInt(n2(513)) / 2) + -parseInt(n2(573)) / 3 + parseInt(n2(480)) / 4 * (-parseInt(n2(583)) / 5) + parseInt(n2(654)) / 6 + -parseInt(n2(617)) / 7 + parseInt(n2(502)) / 8 * (-parseInt(n2(566)) / 9) + parseInt(n2(505)) / 10 * (parseInt(n2(434)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(V, 142153);
function be(e2) {
  return Array.isArray(e2);
}
function xe(e2) {
  let t2 = Q;
  if (E(e2)) return e2;
  let n2 = b(e2);
  if (!Se(e2)) return {};
  if (be(e2)) {
    let n3 = Array.from(e2);
    return e2.length > 0 && typeof e2[0] == `string` && Object.hasOwn(e2, t2(367)) && (n3.index = e2.index, n3.input = e2.input), n3;
  }
  if (ee(e2)) {
    let n3 = e2, r3 = n3.constructor;
    return new r3(n3[t2(601)], n3.byteOffset, n3[t2(498)]);
  }
  if (n2 === t2(536)) return new ArrayBuffer(e2.byteLength);
  if (n2 === t2(402)) {
    let n3 = e2, r3 = n3.buffer, i2 = n3[t2(589)], a2 = n3.byteLength, o2 = new ArrayBuffer(a2), s2 = new Uint8Array(r3, i2, a2);
    return new Uint8Array(o2).set(s2), new DataView(o2);
  }
  if (n2 === `[object Boolean]` || n2 === `[object Number]` || n2 === `[object String]`) {
    let t3 = e2.constructor, r3 = new t3(e2.valueOf());
    return n2 === `[object String]` ? Te(r3, e2) : Ce(r3, e2), r3;
  }
  if (n2 === t2(466)) return new Date(Number(e2));
  if (n2 === `[object RegExp]`) {
    let t3 = e2, n3 = new RegExp(t3.source, t3.flags);
    return n3.lastIndex = t3.lastIndex, n3;
  }
  if (n2 === `[object Symbol]`) return Object(Symbol.prototype.valueOf.call(e2));
  if (n2 === t2(639)) {
    let t3 = e2, n3 = /* @__PURE__ */ new Map();
    return t3.forEach((e3, t4) => {
      n3.set(t4, e3);
    }), n3;
  }
  if (n2 === `[object Set]`) {
    let t3 = e2, n3 = /* @__PURE__ */ new Set();
    return t3.forEach((e3) => {
      n3.add(e3);
    }), n3;
  }
  if (n2 === `[object Arguments]`) {
    let n3 = e2, r3 = {};
    return Ce(r3, n3), r3.length = n3.length, r3[Symbol[t2(582)]] = n3[Symbol.iterator], r3;
  }
  let r2 = {};
  return Ee(r2, e2), Ce(r2, e2), we(r2, e2), r2;
}
function Se(e2) {
  switch (b(e2)) {
    case S:
    case A:
    case ie:
    case de:
    case y:
    case D:
    case j:
    case re:
    case ue:
    case fe:
    case le:
    case x:
    case te:
    case k:
    case ce:
    case C:
    case w:
    case se:
    case ae:
    case M:
    case oe:
    case T:
      return true;
    default:
      return false;
  }
}
function Ce(e2, t2) {
  let n2 = Q;
  for (let r2 in t2) Object[n2(472)](t2, r2) && (e2[r2] = t2[r2]);
}
function we(e2, t2) {
  let n2 = Q, r2 = Object.getOwnPropertySymbols(t2);
  for (let i2 = 0; i2 < r2.length; i2++) {
    let a2 = r2[i2];
    Object.prototype[n2(482)][n2(610)](t2, a2) && (e2[a2] = t2[a2]);
  }
}
function Te(e2, t2) {
  let n2 = Q, r2 = t2.valueOf().length;
  for (let i2 in t2) Object[n2(472)](t2, i2) && (Number.isNaN(Number(i2)) || Number(i2) >= r2) && (e2[i2] = t2[i2]);
}
function Ee(e2, t2) {
  let n2 = Q, r2 = Object.getPrototypeOf(t2);
  r2 !== null && typeof t2[n2(620)] == `function` && Object[n2(550)](e2, r2);
}
t(), n();
var F, De = (function() {
  let t2 = Q;
  var n2 = c(function(e2, t3, n3, r3) {
    for (n3 || (n3 = {}), r3 = e2.length; r3--; n3[e2[r3]] = t3) ;
    return n3;
  }, `o`), r2 = [1, 15], i2 = [1, 7], a2 = [1, 13], o2 = [1, 14], s2 = [1, 19], l2 = [1, 16], u2 = [1, 17], d2 = [1, 18], f2 = [8, 30], p2 = [8, 10, 21, 28, 29, 30, 31, 39, 43, 46], m2 = [1, 23], h2 = [1, 24], g2 = [8, 10, 15, 16, 21, 28, 29, 30, 31, 39, 43, 46], _2 = [8, 10, 15, 16, 21, 27, 28, 29, 30, 31, 39, 43, 46], v2 = [1, 49], y2 = { trace: c(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, spaceLines: 3, SPACELINE: 4, NL: 5, separator: 6, SPACE: 7, EOF: 8, start: 9, BLOCK_DIAGRAM_KEY: 10, document: 11, stop: 12, statement: 13, link: 14, LINK: 15, START_LINK: 16, LINK_LABEL: 17, STR: 18, nodeStatement: 19, columnsStatement: 20, SPACE_BLOCK: 21, blockStatement: 22, classDefStatement: 23, cssClassStatement: 24, styleStatement: 25, node: 26, SIZE: 27, COLUMNS: 28, "id-block": 29, end: 30, NODE_ID: 31, nodeShapeNLabel: 32, dirList: 33, DIR: 34, NODE_DSTART: 35, NODE_DEND: 36, BLOCK_ARROW_START: 37, BLOCK_ARROW_END: 38, classDef: 39, CLASSDEF_ID: 40, CLASSDEF_STYLEOPTS: 41, DEFAULT: 42, class: 43, CLASSENTITY_IDS: 44, STYLECLASS: 45, style: 46, STYLE_ENTITY_IDS: 47, STYLE_DEFINITION_DATA: 48, $accept: 0, $end: 1 }, terminals_: { 2: t2(460), 4: `SPACELINE`, 5: `NL`, 7: `SPACE`, 8: `EOF`, 10: `BLOCK_DIAGRAM_KEY`, 15: `LINK`, 16: `START_LINK`, 17: `LINK_LABEL`, 18: `STR`, 21: t2(626), 27: `SIZE`, 28: `COLUMNS`, 29: t2(456), 30: `end`, 31: `NODE_ID`, 34: `DIR`, 35: `NODE_DSTART`, 36: t2(554), 37: `BLOCK_ARROW_START`, 38: `BLOCK_ARROW_END`, 39: `classDef`, 40: t2(574), 41: t2(422), 42: t2(413), 43: `class`, 44: t2(447), 45: `STYLECLASS`, 46: `style`, 47: `STYLE_ENTITY_IDS`, 48: `STYLE_DEFINITION_DATA` }, productions_: [0, [3, 1], [3, 2], [3, 2], [6, 1], [6, 1], [6, 1], [9, 3], [12, 1], [12, 1], [12, 2], [12, 2], [11, 1], [11, 2], [14, 1], [14, 4], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [19, 3], [19, 2], [19, 1], [20, 1], [22, 4], [22, 3], [26, 1], [26, 2], [33, 1], [33, 2], [32, 3], [32, 4], [23, 3], [23, 3], [24, 3], [25, 3]], performAction: c(function(n3, r3, i3, a3, o3, s3, c2) {
    let l3 = t2;
    var u3 = s3.length - 1;
    switch (o3) {
      case 4:
        a3.getLogger()[l3(420)](`Rule: separator (NL) `);
        break;
      case 5:
        a3.getLogger().debug(`Rule: separator (Space) `);
        break;
      case 6:
        a3.getLogger().debug(l3(520));
        break;
      case 7:
        a3[l3(564)]().debug(`Rule: hierarchy: `, s3[u3 - 1]), a3.setHierarchy(s3[u3 - 1]);
        break;
      case 8:
        a3.getLogger().debug(`Stop NL `);
        break;
      case 9:
        a3.getLogger().debug(l3(387));
        break;
      case 10:
        a3[l3(564)]().debug(`Stop NL2 `);
        break;
      case 11:
        a3.getLogger()[l3(420)](`Stop EOF2 `);
        break;
      case 12:
        a3.getLogger().debug(`Rule: statement: `, s3[u3]), typeof s3[u3][l3(498)] == `number` ? this.$ = s3[u3] : this.$ = [s3[u3]];
        break;
      case 13:
        a3[l3(564)]().debug(`Rule: statement #2: `, s3[u3 - 1]), this.$ = [s3[u3 - 1]].concat(s3[u3]);
        break;
      case 14:
        a3.getLogger().debug(`Rule: link: `, s3[u3], n3), this.$ = { edgeTypeStr: s3[u3], label: `` };
        break;
      case 15:
        a3.getLogger().debug(`Rule: LABEL link: `, s3[u3 - 3], s3[u3 - 1], s3[u3]), this.$ = { edgeTypeStr: s3[u3], label: s3[u3 - 1] };
        break;
      case 18:
        let t3 = parseInt(s3[u3]), r4 = a3.generateId();
        this.$ = { id: r4, type: `space`, label: ``, width: t3, children: [] };
        break;
      case 23:
        a3.getLogger().debug(`Rule: (nodeStatement link node) `, s3[u3 - 2], s3[u3 - 1], s3[u3], ` typestr: `, s3[u3 - 1].edgeTypeStr);
        let i4 = a3[l3(421)](s3[u3 - 1].edgeTypeStr), o4 = a3.edgeStrToEdgeStartData(s3[u3 - 1].edgeTypeStr), c3 = a3.edgeStrToThickness(s3[u3 - 1].edgeTypeStr), d3 = a3.edgeStrToPattern(s3[u3 - 1].edgeTypeStr);
        this.$ = [{ id: s3[u3 - 2].id, label: s3[u3 - 2].label, type: s3[u3 - 2].type, directions: s3[u3 - 2].directions }, { id: s3[u3 - 2].id + `-` + s3[u3].id, start: s3[u3 - 2].id, end: s3[u3].id, label: s3[u3 - 1].label, type: l3(529), thickness: c3, pattern: d3, directions: s3[u3].directions, arrowTypeEnd: i4, arrowTypeStart: o4 }, { id: s3[u3].id, label: s3[u3].label, type: a3.typeStr2Type(s3[u3].typeStr), directions: s3[u3].directions }];
        break;
      case 24:
        a3[l3(564)]().debug(`Rule: nodeStatement (abc88 node size) `, s3[u3 - 1], s3[u3]), this.$ = { id: s3[u3 - 1].id, label: s3[u3 - 1].label, type: a3.typeStr2Type(s3[u3 - 1].typeStr), directions: s3[u3 - 1].directions, widthInColumns: parseInt(s3[u3], 10) };
        break;
      case 25:
        a3.getLogger().debug(`Rule: nodeStatement (node) `, s3[u3]), this.$ = { id: s3[u3].id, label: s3[u3].label, type: a3.typeStr2Type(s3[u3][l3(490)]), directions: s3[u3].directions, widthInColumns: 1 };
        break;
      case 26:
        a3[l3(564)]().debug(l3(381), this ? this : `na`), a3[l3(564)]().debug(`COLUMNS: `, s3[u3]), this.$ = { type: `column-setting`, columns: s3[u3] === l3(523) ? -1 : parseInt(s3[u3]) };
        break;
      case 27:
        a3.getLogger().debug(l3(590), s3[u3 - 2], s3[u3 - 1]), a3.generateId(), this.$ = e(e({}, s3[u3 - 2]), {}, { type: `composite`, children: s3[u3 - 1] });
        break;
      case 28:
        a3.getLogger().debug(`Rule: blockStatement : `, s3[u3 - 2], s3[u3 - 1], s3[u3]);
        let f3 = a3.generateId();
        this.$ = { id: f3, type: `composite`, label: ``, children: s3[u3 - 1] };
        break;
      case 29:
        a3.getLogger().debug(`Rule: node (NODE_ID separator): `, s3[u3]), this.$ = { id: s3[u3] };
        break;
      case 30:
        a3.getLogger().debug(`Rule: node (NODE_ID nodeShapeNLabel separator): `, s3[u3 - 1], s3[u3]), this.$ = { id: s3[u3 - 1], label: s3[u3].label, typeStr: s3[u3].typeStr, directions: s3[u3].directions };
        break;
      case 31:
        a3.getLogger().debug(`Rule: dirList: `, s3[u3]), this.$ = [s3[u3]];
        break;
      case 32:
        a3.getLogger().debug(`Rule: dirList: `, s3[u3 - 1], s3[u3]), this.$ = [s3[u3 - 1]].concat(s3[u3]);
        break;
      case 33:
        a3.getLogger().debug(`Rule: nodeShapeNLabel: `, s3[u3 - 2], s3[u3 - 1], s3[u3]), this.$ = { typeStr: s3[u3 - 2] + s3[u3], label: s3[u3 - 1] };
        break;
      case 34:
        a3.getLogger()[l3(420)](`Rule: BLOCK_ARROW nodeShapeNLabel: `, s3[u3 - 3], s3[u3 - 2], ` #3:`, s3[u3 - 1], s3[u3]), this.$ = { typeStr: s3[u3 - 3] + s3[u3], label: s3[u3 - 2], directions: s3[u3 - 1] };
        break;
      case 35:
      case 36:
        this.$ = { type: `classDef`, id: s3[u3 - 1].trim(), css: s3[u3].trim() };
        break;
      case 37:
        this.$ = { type: `applyClass`, id: s3[u3 - 1].trim(), styleClass: s3[u3][l3(568)]() };
        break;
      case 38:
        this.$ = { type: `applyStyles`, id: s3[u3 - 1][l3(568)](), stylesStr: s3[u3].trim() };
        break;
    }
  }, `anonymous`), table: [{ 9: 1, 10: [1, 2] }, { 1: [3] }, { 10: r2, 11: 3, 13: 4, 19: 5, 20: 6, 21: i2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: a2, 29: o2, 31: s2, 39: l2, 43: u2, 46: d2 }, { 8: [1, 20] }, n2(f2, [2, 12], { 13: 4, 19: 5, 20: 6, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 11: 21, 10: r2, 21: i2, 28: a2, 29: o2, 31: s2, 39: l2, 43: u2, 46: d2 }), n2(p2, [2, 16], { 14: 22, 15: m2, 16: h2 }), n2(p2, [2, 17]), n2(p2, [2, 18]), n2(p2, [2, 19]), n2(p2, [2, 20]), n2(p2, [2, 21]), n2(p2, [2, 22]), n2(g2, [2, 25], { 27: [1, 25] }), n2(p2, [2, 26]), { 19: 26, 26: 12, 31: s2 }, { 10: r2, 11: 27, 13: 4, 19: 5, 20: 6, 21: i2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: a2, 29: o2, 31: s2, 39: l2, 43: u2, 46: d2 }, { 40: [1, 28], 42: [1, 29] }, { 44: [1, 30] }, { 47: [1, 31] }, n2(_2, [2, 29], { 32: 32, 35: [1, 33], 37: [1, 34] }), { 1: [2, 7] }, n2(f2, [2, 13]), { 26: 35, 31: s2 }, { 31: [2, 14] }, { 17: [1, 36] }, n2(g2, [2, 24]), { 10: r2, 11: 37, 13: 4, 14: 22, 15: m2, 16: h2, 19: 5, 20: 6, 21: i2, 22: 8, 23: 9, 24: 10, 25: 11, 26: 12, 28: a2, 29: o2, 31: s2, 39: l2, 43: u2, 46: d2 }, { 30: [1, 38] }, { 41: [1, 39] }, { 41: [1, 40] }, { 45: [1, 41] }, { 48: [1, 42] }, n2(_2, [2, 30]), { 18: [1, 43] }, { 18: [1, 44] }, n2(g2, [2, 23]), { 18: [1, 45] }, { 30: [1, 46] }, n2(p2, [2, 28]), n2(p2, [2, 35]), n2(p2, [2, 36]), n2(p2, [2, 37]), n2(p2, [2, 38]), { 36: [1, 47] }, { 33: 48, 34: v2 }, { 15: [1, 50] }, n2(p2, [2, 27]), n2(_2, [2, 33]), { 38: [1, 51] }, { 33: 52, 34: v2, 38: [2, 31] }, { 31: [2, 15] }, n2(_2, [2, 34]), { 38: [2, 32] }], defaultActions: { 20: [2, 7], 23: [2, 14], 50: [2, 15], 52: [2, 32] }, parseError: c(function(e2, n3) {
    if (n3[t2(603)]) this.trace(e2);
    else {
      var r3 = Error(e2);
      throw r3.hash = n3, r3;
    }
  }, `parseError`), parse: c(function(e2) {
    let n3 = t2;
    var r3 = this, i3 = [0], a3 = [], o3 = [null], s3 = [], l3 = this.table, u3 = ``, d3 = 0, f3 = 0, p3 = 0, m3 = 2, h3 = 1, g3 = s3.slice.call(arguments, 1), _3 = Object.create(this.lexer), v3 = { yy: {} };
    for (var y3 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y3) && (v3.yy[y3] = this.yy[y3]);
    _3.setInput(e2, v3.yy), v3.yy.lexer = _3, v3.yy[n3(588)] = this, _3.yylloc === void 0 && (_3[n3(636)] = {});
    var b3 = _3.yylloc;
    s3.push(b3);
    var x2 = _3.options && _3.options.ranges;
    typeof v3.yy.parseError == `function` ? this[n3(642)] = v3.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function S2(e3) {
      let t3 = n3;
      i3[t3(498)] -= 2 * e3, o3.length -= e3, s3.length -= e3;
    }
    c(S2, `popStack`);
    function C2() {
      var e3 = a3.pop() || _3.lex() || h3;
      return typeof e3 != `number` && (e3 instanceof Array && (a3 = e3, e3 = a3.pop()), e3 = r3.symbols_[e3] || e3), e3;
    }
    c(C2, `lex`);
    for (var w2, T2, E2, D2, O2, k2 = {}, A2, j2, ee2, M2; ; ) {
      if (E2 = i3[i3.length - 1], this.defaultActions[E2] ? D2 = this[n3(435)][E2] : (w2 ?? (w2 = C2()), D2 = l3[E2] && l3[E2][w2]), D2 === void 0 || !D2.length || !D2[0]) {
        var te2 = ``;
        for (A2 in M2 = [], l3[E2]) this.terminals_[A2] && A2 > m3 && M2.push(`'` + this.terminals_[A2] + `'`);
        te2 = _3.showPosition ? `Parse error on line ` + (d3 + 1) + `:
` + _3.showPosition() + `
Expecting ` + M2.join(`, `) + `, got '` + (this.terminals_[w2] || w2) + `'` : n3(587) + (d3 + 1) + `: Unexpected ` + (w2 == h3 ? n3(623) : `'` + (this.terminals_[w2] || w2) + `'`), this.parseError(te2, { text: _3.match, token: this.terminals_[w2] || w2, line: _3[n3(509)], loc: b3, expected: M2 });
      }
      if (D2[0] instanceof Array && D2.length > 1) throw Error(n3(433) + E2 + `, token: ` + w2);
      switch (D2[0]) {
        case 1:
          i3[n3(392)](w2), o3.push(_3.yytext), s3.push(_3.yylloc), i3.push(D2[1]), w2 = null, T2 ? (w2 = T2, T2 = null) : (f3 = _3.yyleng, u3 = _3.yytext, d3 = _3.yylineno, b3 = _3.yylloc, p3 > 0 && p3--);
          break;
        case 2:
          if (j2 = this[n3(628)][D2[1]][1], k2.$ = o3[o3.length - j2], k2._$ = { first_line: s3[s3[n3(498)] - (j2 || 1)][n3(370)], last_line: s3[s3[n3(498)] - 1][n3(391)], first_column: s3[s3.length - (j2 || 1)].first_column, last_column: s3[s3.length - 1][n3(455)] }, x2 && (k2._$.range = [s3[s3.length - (j2 || 1)].range[0], s3[s3.length - 1][n3(452)][1]]), O2 = this.performAction.apply(k2, [u3, f3, d3, v3.yy, D2[1], o3, s3].concat(g3)), O2 !== void 0) return O2;
          j2 && (i3 = i3.slice(0, -1 * j2 * 2), o3 = o3.slice(0, -1 * j2), s3 = s3.slice(0, -1 * j2)), i3.push(this.productions_[D2[1]][0]), o3.push(k2.$), s3.push(k2._$), ee2 = l3[i3[i3.length - 2]][i3[i3.length - 1]], i3.push(ee2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, t2(563)) };
  y2.lexer = (function() {
    let e2 = t2;
    return { EOF: 1, parseError: c(function(e3, t3) {
      let n3 = Q;
      if (this.yy.parser) this.yy[n3(588)].parseError(e3, t3);
      else throw Error(e3);
    }, `parseError`), setInput: c(function(e3, t3) {
      let n3 = Q;
      return this.yy = t3 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this[n3(396)].ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: c(function() {
      let e3 = Q;
      var t3 = this._input[0];
      return this.yytext += t3, this.yyleng++, this.offset++, this.match += t3, this.matched += t3, t3.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc[e3(391)]++) : this[e3(636)].last_column++, this.options.ranges && this[e3(636)][e3(452)][1]++, this[e3(424)] = this._input.slice(1), t3;
    }, `input`), unput: c(function(e3) {
      let t3 = Q;
      var n3 = e3.length, r3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this[t3(424)], this[t3(618)] = this[t3(618)][t3(572)](0, this.yytext.length - n3), this.offset -= n3;
      var i3 = this.match[t3(604)](/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this[t3(644)].length - 1), this.matched = this.matched[t3(572)](0, this.matched.length - 1), r3[t3(498)] - 1 && (this.yylineno -= r3.length - 1);
      var a3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this[t3(509)] + 1, first_column: this.yylloc.first_column, last_column: r3 ? (r3.length === i3.length ? this.yylloc.first_column : 0) + i3[i3.length - r3.length].length - r3[0].length : this[t3(636)][t3(595)] - n3 }, this.options.ranges && (this.yylloc.range = [a3[0], a3[0] + this.yyleng - n3]), this.yyleng = this[t3(618)].length, this;
    }, `unput`), more: c(function() {
      return this._more = true, this;
    }, e2(445)), reject: c(function() {
      let t3 = e2;
      if (this.options[t3(648)]) this._backtrack = true;
      else return this.parseError(t3(637) + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: c(function(t3) {
      let n3 = e2;
      this.unput(this.match[n3(459)](t3));
    }, `less`), pastInput: c(function() {
      let t3 = e2;
      var n3 = this.matched.substr(0, this[t3(649)].length - this.match.length);
      return (n3.length > 20 ? `...` : ``) + n3.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: c(function() {
      let t3 = e2;
      var n3 = this.match;
      return n3.length < 20 && (n3 += this._input.substr(0, 20 - n3.length)), (n3[t3(572)](0, 20) + (n3[t3(498)] > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, e2(431)), showPosition: c(function() {
      let t3 = e2;
      var n3 = this[t3(517)](), r3 = Array(n3.length + 1).join(`-`);
      return n3 + this.upcomingInput() + `
` + r3 + `^`;
    }, `showPosition`), test_match: c(function(t3, n3) {
      let r3 = e2;
      var i3, a3, o3;
      if (this.options.backtrack_lexer && (o3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this[r3(391)], first_column: this[r3(636)].first_column, last_column: this[r3(636)].last_column }, yytext: this.yytext, match: this.match, matches: this.matches, matched: this.matched, yyleng: this[r3(425)], offset: this.offset, _more: this._more, _input: this._input, yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this.done }, this[r3(396)].ranges && (o3.yylloc.range = this[r3(636)].range[r3(459)](0))), a3 = t3[0].match(/(?:\r\n?|\n).*/g), a3 && (this[r3(509)] += a3.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: a3 ? a3[a3.length - 1].length - a3[a3.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t3[0][r3(498)] }, this[r3(618)] += t3[0], this[r3(644)] += t3[0], this.matches = t3, this.yyleng = this[r3(618)].length, this[r3(396)].ranges && (this.yylloc[r3(452)] = [this[r3(476)], this.offset += this.yyleng]), this._more = false, this[r3(627)] = false, this._input = this[r3(424)][r3(459)](t3[0].length), this.matched += t3[0], i3 = this[r3(389)].call(this, this.yy, this, n3, this.conditionStack[this[r3(629)].length - 1]), this[r3(512)] && this._input && (this.done = false), i3) return i3;
      if (this._backtrack) {
        for (var s3 in o3) this[s3] = o3[s3];
        return false;
      }
      return false;
    }, e2(493)), next: c(function() {
      let t3 = e2;
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var n3, r3, i3, a3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var o3 = this[t3(596)](), s3 = 0; s3 < o3.length; s3++) if (i3 = this._input[t3(644)](this.rules[o3[s3]]), i3 && (!r3 || i3[0].length > r3[0][t3(498)])) {
        if (r3 = i3, a3 = s3, this.options.backtrack_lexer) {
          if (n3 = this.test_match(i3, o3[s3]), n3 !== false) return n3;
          if (this._backtrack) {
            r3 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return r3 ? (n3 = this.test_match(r3, o3[a3]), n3 === false ? false : n3) : this._input === `` ? this[t3(635)] : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: c(function() {
      return this.next() || this.lex();
    }, `lex`), begin: c(function(e3) {
      this.conditionStack.push(e3);
    }, `begin`), popState: c(function() {
      let t3 = e2;
      return this[t3(629)].length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, `popState`), _currentRules: c(function() {
      let t3 = e2;
      return this.conditionStack[t3(498)] && this[t3(629)][this[t3(629)].length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: c(function(t3) {
      let n3 = e2;
      return t3 = this.conditionStack.length - 1 - Math.abs(t3 || 0), t3 >= 0 ? this[n3(629)][t3] : `INITIAL`;
    }, `topState`), pushState: c(function(e3) {
      this.begin(e3);
    }, `pushState`), stateStackSize: c(function() {
      return this.conditionStack.length;
    }, `stateStackSize`), options: {}, performAction: c(function(t3, n3, r3, i3) {
      let a3 = e2;
      switch (r3) {
        case 0:
          return t3.getLogger().debug(`Found block-beta`), 10;
        case 1:
          return t3.getLogger().debug(`Found id-block`), 29;
        case 2:
          return t3.getLogger()[a3(420)](`Found block`), 10;
        case 3:
          t3.getLogger().debug(`.`, n3.yytext);
          break;
        case 4:
          t3.getLogger().debug(`_`, n3.yytext);
          break;
        case 5:
          return 5;
        case 6:
          return n3.yytext = -1, 28;
        case 7:
          return n3.yytext = n3.yytext.replace(/columns\s+/, ``), t3.getLogger().debug(`COLUMNS (LEX)`, n3[a3(618)]), 28;
        case 8:
          this[a3(585)](`md_string`);
          break;
        case 9:
          return `MD_STR`;
        case 10:
          this.popState();
          break;
        case 11:
          this[a3(585)](`string`);
          break;
        case 12:
          t3.getLogger().debug(`LEX: POPPING STR:`, n3.yytext), this.popState();
          break;
        case 13:
          return t3.getLogger().debug(`LEX: STR end:`, n3.yytext), `STR`;
        case 14:
          return n3[a3(618)] = n3.yytext.replace(/space\:/, ``), t3.getLogger().debug(`SPACE NUM (LEX)`, n3.yytext), 21;
        case 15:
          return n3.yytext = `1`, t3[a3(564)]()[a3(420)](a3(652), n3.yytext), 21;
        case 16:
          return 42;
        case 17:
          return `LINKSTYLE`;
        case 18:
          return `INTERPOLATE`;
        case 19:
          return this[a3(585)](`CLASSDEF`), 39;
        case 20:
          return this[a3(479)](), this.pushState(`CLASSDEFID`), `DEFAULT_CLASSDEF_ID`;
        case 21:
          return this.popState(), this.pushState(`CLASSDEFID`), 40;
        case 22:
          return this.popState(), 41;
        case 23:
          return this.pushState(`CLASS`), 43;
        case 24:
          return this.popState(), this.pushState(`CLASS_STYLE`), 44;
        case 25:
          return this.popState(), 45;
        case 26:
          return this.pushState(`STYLE_STMNT`), 46;
        case 27:
          return this.popState(), this.pushState(`STYLE_DEFINITION`), 47;
        case 28:
          return this.popState(), 48;
        case 29:
          return this.pushState(a3(562)), `acc_title`;
        case 30:
          return this.popState(), `acc_title_value`;
        case 31:
          return this[a3(585)](`acc_descr`), `acc_descr`;
        case 32:
          return this.popState(), `acc_descr_value`;
        case 33:
          this.pushState(`acc_descr_multiline`);
          break;
        case 34:
          this.popState();
          break;
        case 35:
          return a3(500);
        case 36:
          return 30;
        case 37:
          return this.popState(), t3.getLogger().debug(a3(611)), `NODE_DEND`;
        case 38:
          return this.popState(), t3.getLogger().debug(a3(611)), `NODE_DEND`;
        case 39:
          return this.popState(), t3.getLogger().debug(`Lex: ))`), `NODE_DEND`;
        case 40:
          return this.popState(), t3.getLogger().debug(`Lex: ((`), `NODE_DEND`;
        case 41:
          return this.popState(), t3[a3(564)]().debug(`Lex: ((`), `NODE_DEND`;
        case 42:
          return this.popState(), t3.getLogger().debug(`Lex: (-`), `NODE_DEND`;
        case 43:
          return this.popState(), t3.getLogger().debug(`Lex: -)`), `NODE_DEND`;
        case 44:
          return this.popState(), t3.getLogger().debug(a3(611)), `NODE_DEND`;
        case 45:
          return this.popState(), t3[a3(564)]().debug(`Lex: ]]`), `NODE_DEND`;
        case 46:
          return this[a3(479)](), t3.getLogger().debug(`Lex: (`), `NODE_DEND`;
        case 47:
          return this[a3(479)](), t3.getLogger().debug(a3(465)), `NODE_DEND`;
        case 48:
          return this[a3(479)](), t3.getLogger().debug(`Lex: /]`), `NODE_DEND`;
        case 49:
          return this.popState(), t3.getLogger()[a3(420)](`Lex: /]`), `NODE_DEND`;
        case 50:
          return this[a3(479)](), t3.getLogger().debug(a3(584)), `NODE_DEND`;
        case 51:
          return this.popState(), t3[a3(564)]().debug(a3(385)), a3(554);
        case 52:
          return this.popState(), t3[a3(564)]().debug(a3(578)), `NODE_DEND`;
        case 53:
          return this.popState(), t3.getLogger().debug(`Lex: ]`), `NODE_DEND`;
        case 54:
          return t3.getLogger().debug(`Lexa: -)`), this.pushState(`NODE`), 35;
        case 55:
          return t3.getLogger()[a3(420)](`Lexa: (-`), this.pushState(`NODE`), 35;
        case 56:
          return t3.getLogger().debug(a3(475)), this.pushState(`NODE`), 35;
        case 57:
          return t3[a3(564)]().debug(a3(501)), this.pushState(`NODE`), 35;
        case 58:
          return t3.getLogger()[a3(420)](`Lex: (((`), this.pushState(`NODE`), 35;
        case 59:
          return t3.getLogger().debug(`Lexa: )`), this.pushState(a3(497)), 35;
        case 60:
          return t3.getLogger().debug(`Lexa: )`), this[a3(585)](a3(497)), 35;
        case 61:
          return t3[a3(564)]().debug(`Lexa: )`), this.pushState(a3(497)), 35;
        case 62:
          return t3.getLogger().debug(a3(537)), this.pushState(`NODE`), 35;
        case 63:
          return t3[a3(564)]().debug(a3(380)), this[a3(585)](`NODE`), 35;
        case 64:
          return t3.getLogger()[a3(420)](`Lexa: )`), this.pushState(a3(497)), 35;
        case 65:
          return this.pushState(`NODE`), 35;
        case 66:
          return this.pushState(`NODE`), 35;
        case 67:
          return this.pushState(`NODE`), 35;
        case 68:
          return this.pushState(`NODE`), 35;
        case 69:
          return this.pushState(`NODE`), 35;
        case 70:
          return this[a3(585)](`NODE`), 35;
        case 71:
          return this[a3(585)](`NODE`), 35;
        case 72:
          return t3.getLogger().debug(`Lexa: [`), this[a3(585)](`NODE`), 35;
        case 73:
          return this.pushState(`BLOCK_ARROW`), t3[a3(564)]().debug(a3(619)), 37;
        case 74:
          return t3[a3(564)]().debug(`Lex: NODE_ID`, n3.yytext), 31;
        case 75:
          return t3.getLogger().debug(`Lex: EOF`, n3.yytext), 8;
        case 76:
          this[a3(585)](`md_string`);
          break;
        case 77:
          this.pushState(`md_string`);
          break;
        case 78:
          return `NODE_DESCR`;
        case 79:
          this.popState();
          break;
        case 80:
          t3.getLogger().debug(`Lex: Starting string`), this.pushState(`string`);
          break;
        case 81:
          t3.getLogger().debug(a3(376)), this.pushState(a3(451));
          break;
        case 82:
          return t3.getLogger()[a3(420)](`LEX: NODE_DESCR:`, n3.yytext), `NODE_DESCR`;
        case 83:
          t3.getLogger().debug(`LEX POPPING`), this.popState();
          break;
        case 84:
          t3.getLogger().debug(`Lex: =>BAE`), this.pushState(`ARROW_DIR`);
          break;
        case 85:
          return n3.yytext = n3.yytext[a3(406)](/^,\s*/, ``), t3.getLogger().debug(`Lex (right): dir:`, n3.yytext), `DIR`;
        case 86:
          return n3.yytext = n3.yytext.replace(/^,\s*/, ``), t3.getLogger().debug(`Lex (left):`, n3.yytext), `DIR`;
        case 87:
          return n3.yytext = n3.yytext.replace(/^,\s*/, ``), t3[a3(564)]().debug(`Lex (x):`, n3.yytext), `DIR`;
        case 88:
          return n3[a3(618)] = n3[a3(618)].replace(/^,\s*/, ``), t3.getLogger()[a3(420)](`Lex (y):`, n3[a3(618)]), `DIR`;
        case 89:
          return n3.yytext = n3.yytext[a3(406)](/^,\s*/, ``), t3.getLogger().debug(a3(656), n3.yytext), `DIR`;
        case 90:
          return n3.yytext = n3.yytext[a3(406)](/^,\s*/, ``), t3.getLogger().debug(`Lex (down):`, n3.yytext), `DIR`;
        case 91:
          return n3.yytext = `]>`, t3[a3(564)]()[a3(420)](`Lex (ARROW_DIR end):`, n3.yytext), this.popState(), this.popState(), `BLOCK_ARROW_END`;
        case 92:
          return t3.getLogger().debug(`Lex: LINK`, `#` + n3.yytext + `#`), 15;
        case 93:
          return t3.getLogger().debug(`Lex: LINK`, n3.yytext), 15;
        case 94:
          return t3.getLogger().debug(a3(560), n3.yytext), 15;
        case 95:
          return t3.getLogger()[a3(420)](`Lex: LINK`, n3[a3(618)]), 15;
        case 96:
          return t3.getLogger().debug(`Lex: START_LINK`, n3.yytext), this.pushState(`LLABEL`), 16;
        case 97:
          return t3[a3(564)]()[a3(420)](`Lex: START_LINK`, n3[a3(618)]), this.pushState(`LLABEL`), 16;
        case 98:
          return t3.getLogger()[a3(420)](a3(607), n3.yytext), this.pushState(`LLABEL`), 16;
        case 99:
          this.pushState(`md_string`);
          break;
        case 100:
          return t3.getLogger().debug(a3(586)), this.pushState(`string`), `LINK_LABEL`;
        case 101:
          return this.popState(), t3[a3(564)]()[a3(420)](`Lex: LINK`, `#` + n3.yytext + `#`), 15;
        case 102:
          return this[a3(479)](), t3.getLogger()[a3(420)](a3(560), n3.yytext), 15;
        case 103:
          return this[a3(479)](), t3.getLogger().debug(`Lex: LINK`, n3[a3(618)]), 15;
        case 104:
          return t3.getLogger().debug(a3(412), n3.yytext), n3.yytext = n3[a3(618)].slice(1), 27;
      }
    }, `anonymous`), rules: [/^(?:block-beta\b)/, /^(?:block:)/, /^(?:block\b)/, /^(?:[\s]+)/, /^(?:[\n]+)/, /^(?:((\u000D\u000A)|(\u000A)))/, /^(?:columns\s+auto\b)/, /^(?:columns\s+[\d]+)/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:space[:]\d+)/, /^(?:space\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\s+)/, /^(?:DEFAULT\s+)/, /^(?:\w+\s+)/, /^(?:[^\n]*)/, /^(?:class\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:style\s+)/, /^(?:(\w+)+((,\s*\w+)*))/, /^(?:[^\n]*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:end\b\s*)/, /^(?:\(\(\()/, /^(?:\)\)\))/, /^(?:[\)]\))/, /^(?:\}\})/, /^(?:\})/, /^(?:\(-)/, /^(?:-\))/, /^(?:\(\()/, /^(?:\]\])/, /^(?:\()/, /^(?:\]\))/, /^(?:\\\])/, /^(?:\/\])/, /^(?:\)\])/, /^(?:[\)])/, /^(?:\]>)/, /^(?:[\]])/, /^(?:-\))/, /^(?:\(-)/, /^(?:\)\))/, /^(?:\))/, /^(?:\(\(\()/, /^(?:\(\()/, /^(?:\{\{)/, /^(?:\{)/, /^(?:>)/, /^(?:\(\[)/, /^(?:\()/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\[\\)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:\[)/, /^(?:<\[)/, /^(?:[^\(\[\n\-\)\{\}\s\<\>:=]+)/, /^(?:$)/, /^(?:["][`])/, /^(?:["][`])/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["])/, /^(?:["])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:\]>\s*\()/, /^(?:,?\s*right\s*)/, /^(?:,?\s*left\s*)/, /^(?:,?\s*x\s*)/, /^(?:,?\s*y\s*)/, /^(?:,?\s*up\s*)/, /^(?:,?\s*down\s*)/, /^(?:\)\s*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*~~[\~]+\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:["][`])/, /^(?:["])/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?::\d+)/], conditions: { STYLE_DEFINITION: { rules: [28], inclusive: false }, STYLE_STMNT: { rules: [27], inclusive: false }, CLASSDEFID: { rules: [22], inclusive: false }, CLASSDEF: { rules: [20, 21], inclusive: false }, CLASS_STYLE: { rules: [25], inclusive: false }, CLASS: { rules: [24], inclusive: false }, LLABEL: { rules: [99, 100, 101, 102, 103], inclusive: false }, ARROW_DIR: { rules: [85, 86, 87, 88, 89, 90, 91], inclusive: false }, BLOCK_ARROW: { rules: [76, 81, 84], inclusive: false }, NODE: { rules: [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 77, 80], inclusive: false }, md_string: { rules: [9, 10, 78, 79], inclusive: false }, space: { rules: [], inclusive: false }, string: { rules: [12, 13, 82, 83], inclusive: false }, acc_descr_multiline: { rules: [34, 35], inclusive: false }, acc_descr: { rules: [32], inclusive: false }, acc_title: { rules: [30], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 11, 14, 15, 16, 17, 18, 19, 23, 26, 29, 31, 33, 36, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 92, 93, 94, 95, 96, 97, 98, 104], inclusive: true } } };
  })();
  function b2() {
    this.yy = {};
  }
  return c(b2, t2(547)), b2[t2(508)] = y2, y2.Parser = b2, new b2();
})();
De.parser = De;
var Oe = De, I = /* @__PURE__ */ new Map(), ke = [], Ae = /* @__PURE__ */ new Map(), je = P(463), Me = `fill`, Ne = `bgFill`, Pe = `,`, Fe = p(), L = /* @__PURE__ */ new Map(), Ie = ``, Le = c((e2) => m.sanitizeText(e2, Fe), `sanitizeText`), Re = c(function(e2, t2 = ``) {
  let n2 = P, r2 = L.get(e2);
  r2 || (r2 = { id: e2, styles: [], textStyles: [] }, L[n2(549)](e2, r2)), t2 == null ? void 0 : t2.split(Pe).forEach((e3) => {
    let t3 = e3.replace(/([^;]*);/, `$1`).trim();
    if (RegExp(je).exec(e3)) {
      let e4 = t3.replace(Me, Ne).replace(je, Me);
      r2.textStyles.push(e4);
    }
    r2.styles.push(t3);
  });
}, P(565)), ze = c(function(e2, t2 = ``) {
  let n2 = I.get(e2);
  t2 != null && (n2.styles = t2.split(Pe));
}, P(437)), Be = c(function(e2, t2) {
  let n2 = P;
  e2[n2(604)](`,`)[n2(597)](function(e3) {
    let r2 = n2, i2 = I.get(e3);
    if (i2 === void 0) {
      let t3 = e3.trim();
      i2 = { id: t3, type: `na`, children: [] }, I.set(t3, i2);
    }
    i2.classes || (i2.classes = []), i2.classes[r2(392)](t2);
  });
}, `setCssClass`), Ve = c((e2, t2) => {
  var _a;
  let n2 = P, r2 = e2[n2(645)](), i2 = [], a2 = ((_a = r2.find((e3) => (e3 == null ? void 0 : e3.type) === `column-setting`)) == null ? void 0 : _a[n2(519)]) ?? -1;
  for (let e3 of r2) {
    if (typeof a2 == `number` && a2 > 0 && e3[n2(506)] !== n2(483) && typeof e3.widthInColumns == n2(401) && e3.widthInColumns > a2 && s[n2(443)](n2(478) + e3.id + ` width ` + e3.widthInColumns + ` exceeds configured column width ` + a2), e3.label && (e3.label = Le(e3[n2(439)])), e3.type === `classDef`) {
      Re(e3.id, e3.css);
      continue;
    }
    if (e3.type === `applyClass`) {
      Be(e3.id, (e3 == null ? void 0 : e3.styleClass) ?? ``);
      continue;
    }
    if (e3.type === n2(556)) {
      e3 != null && e3[n2(371)] && ze(e3.id, e3 == null ? void 0 : e3.stylesStr);
      continue;
    }
    if (e3.type === `column-setting`) t2.columns = e3.columns ?? -1;
    else if (e3[n2(506)] === `edge`) {
      let t3 = (Ae.get(e3.id) ?? 0) + 1;
      Ae.set(e3.id, t3), e3.id = t3 + `-` + e3.id, ke.push(e3);
    } else {
      e3.label || (e3.type === `composite` ? e3.label = `` : e3.label = e3.id);
      let t3 = I.get(e3.id);
      if (t3 === void 0 ? I.set(e3.id, e3) : (e3.type !== `na` && (t3.type = e3.type), e3.label !== e3.id && (t3[n2(439)] = e3.label)), e3.children && Ve(e3.children, e3), e3.type === `space`) {
        let t4 = e3.width ?? 1;
        for (let n3 = 0; n3 < t4; n3++) {
          let t5 = xe(e3);
          t5.id = t5.id + `-` + n3, I.set(t5.id, t5), i2.push(t5);
        }
      } else t3 === void 0 && i2[n2(392)](e3);
    }
  }
  t2.children = i2;
}, `populateBlockDatabase`), He = [], R = { id: `root`, type: `composite`, children: [], columns: -1 }, Ue = c(() => {
  s[P(420)](`Clear called`), d(), R = { id: `root`, type: `composite`, children: [], columns: -1 }, I = /* @__PURE__ */ new Map([[`root`, R]]), He = [], L = /* @__PURE__ */ new Map(), ke = [], Ae = /* @__PURE__ */ new Map(), Ie = ``;
}, `clear`);
function We(e2) {
  let t2 = P;
  switch (s.debug(`typeStr2Type`, e2), e2) {
    case `[]`:
      return `square`;
    case `()`:
      return s[t2(420)](`we have a round`), t2(522);
    case t2(571):
      return `circle`;
    case `>]`:
      return `rect_left_inv_arrow`;
    case `{}`:
      return `diamond`;
    case `{{}}`:
      return `hexagon`;
    case t2(409):
      return `stadium`;
    case `[[]]`:
      return t2(470);
    case `[()]`:
      return `cylinder`;
    case `((()))`:
      return `doublecircle`;
    case `[//]`:
      return `lean_right`;
    case `[\\\\]`:
      return `lean_left`;
    case t2(503):
      return `trapezoid`;
    case `[\\/]`:
      return t2(432);
    case `<[]>`:
      return t2(368);
    default:
      return `na`;
  }
}
c(We, `typeStr2Type`);
function Ge(e2) {
  let t2 = P;
  switch (s.debug(`typeStr2Type`, e2), e2) {
    case `==`:
      return t2(510);
    default:
      return `normal`;
  }
}
c(Ge, `edgeTypeStr2Type`);
function Ke(e2) {
  let t2 = P;
  switch (e2.trim()[t2(459)](-1)) {
    case `x`:
      return `arrow_cross`;
    case `o`:
      return `arrow_circle`;
    case `>`:
      return `arrow_point`;
    default:
      return ``;
  }
}
c(Ke, P(421));
function qe(e2) {
  let t2 = P;
  switch (e2.trim().charAt(0)) {
    case `x`:
      return `arrow_cross`;
    case `o`:
      return t2(608);
    case `<`:
      return `arrow_point`;
    default:
      return `arrow_open`;
  }
}
c(qe, `edgeStrToEdgeStartData`);
function Je(e2) {
  let t2 = P;
  return e2.includes(`==`) ? `thick` : t2(625);
}
c(Je, `edgeStrToThickness`);
function Ye(e2) {
  let t2 = P;
  return e2.includes(`.-`) ? t2(365) : `solid`;
}
c(Ye, `edgeStrToPattern`);
var Xe = 0, Ze = { getConfig: c(() => _().block, P(641)), typeStr2Type: We, edgeTypeStr2Type: Ge, edgeStrToEdgeData: Ke, edgeStrToEdgeStartData: qe, edgeStrToThickness: Je, edgeStrToPattern: Ye, getLogger: c(() => s, P(564)), getBlocksFlat: c(() => [...I[P(397)]()], `getBlocksFlat`), getBlocks: c(() => He || [], `getBlocks`), getEdges: c(() => ke, `getEdges`), setHierarchy: c((e2) => {
  let t2 = P;
  R.children = e2, Ve(e2, R), He = R[t2(545)];
}, P(403)), getBlock: c((e2) => I.get(e2), `getBlock`), setBlock: c((e2) => {
  I.set(e2.id, e2);
}, `setBlock`), getColumns: c((e2) => {
  let t2 = P, n2 = I.get(e2);
  return n2 ? n2.columns ? n2.columns : n2.children ? n2[t2(545)].length : -1 : -1;
}, `getColumns`), getClasses: c(function() {
  return L;
}, `getClasses`), clear: Ue, generateId: c(() => (Xe++, `id-` + Math.random().toString(36).substr(2, 12) + `-` + Xe), `generateId`), setDiagramId: c((e2) => {
  Ie = e2;
}, `setDiagramId`), getDiagramId: c(() => Ie, P(377)) }, Qe = c((e2, t2) => {
  let n2 = me;
  return u(n2(e2, `r`), n2(e2, `g`), n2(e2, `b`), t2);
}, `fade`), $e = c((e2) => `.label {
    font-family: ` + e2.fontFamily + `;
    color: ` + (e2.nodeTextColor || e2.textColor) + `;
  }
  .cluster-label text {
    fill: ` + e2.titleColor + `;
  }
  .cluster-label span,p {
    color: ` + e2.titleColor + `;
  }



  .label text,span,p {
    fill: ` + (e2.nodeTextColor || e2.textColor) + `;
    color: ` + (e2.nodeTextColor || e2.textColor) + P(372) + e2.mainBkg + `;
    stroke: ` + e2.nodeBorder + `;
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ` + e2.arrowheadColor + P(552) + e2[P(430)] + `;
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ` + e2.lineColor + `;
    fill: none;
  }

  .edgeLabel {
    background-color: ` + e2.edgeLabelBackground + `;
    /*
     * This is for backward compatibility with existing code that didn't
     * add a \`<p>\` around edge labels.
     *
     * TODO: We should probably remove this in a future release.
     */
    p {
      margin: 0;
      padding: 0;
      display: inline;
    }
    rect {
      opacity: 0.5;
      background-color: ` + e2.edgeLabelBackground + `;
      fill: ` + e2.edgeLabelBackground + `;
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ` + e2.edgeLabelBackground + `;
  }

  .node .cluster {
    // fill: ` + Qe(e2.mainBkg, 0.5) + `;
    fill: ` + Qe(e2.clusterBkg, 0.5) + `;
    stroke: ` + Qe(e2[P(426)], 0.2) + `;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ` + e2.titleColor + P(567) + e2.titleColor + P(528) + e2[P(399)] + P(481) + e2[P(384)] + `;
    font-size: 12px;
    background: ` + e2.tertiaryColor + `;
    border: 1px solid ` + e2.border2 + P(634) + e2.textColor + `;
  }
  ` + ve() + `
`, `getStyles`), et = c((e2, t2, n2, r2) => {
  t2.forEach((t3) => {
    tt[t3](e2, n2, r2);
  });
}, P(398)), tt = { extension: c((e2, t2, n2) => {
  let r2 = P;
  s.trace(`Making markers for `, n2), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionStart`)[r2(599)](`class`, `marker extension ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,7 L18,13 V 1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionEnd`).attr(`class`, r2(410) + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(r2(440))[r2(599)](`d`, r2(638));
}, `extension`), composition: c((e2, t2, n2) => {
  let r2 = P;
  e2.append(`defs`).append(r2(428)).attr(`id`, n2 + `_` + t2 + r2(630))[r2(599)](`class`, `marker composition ` + t2).attr(`refX`, 18).attr(r2(469), 7).attr(`markerWidth`, 190).attr(r2(423), 240).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`)[r2(632)](r2(428)).attr(`id`, n2 + `_` + t2 + r2(486)).attr(`class`, `marker composition ` + t2)[r2(599)](r2(615), 1).attr(`refY`, 7)[r2(599)](`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`)[r2(632)](`path`)[r2(599)](`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `composition`), aggregation: c((e2, t2, n2) => {
  let r2 = P;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationStart`).attr(`class`, r2(527) + t2)[r2(599)](`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 190)[r2(599)](r2(423), 240).attr(r2(541), r2(523)).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationEnd`).attr(`class`, `marker aggregation ` + t2)[r2(599)](`refX`, 1).attr(`refY`, 7)[r2(599)](`markerWidth`, 20).attr(`markerHeight`, 28)[r2(599)](r2(541), `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, `aggregation`), dependency: c((e2, t2, n2) => {
  let r2 = P;
  e2[r2(632)](`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyStart`).attr(r2(540), `marker dependency ` + t2).attr(`refX`, 6).attr(`refY`, 7).attr(`markerWidth`, 190)[r2(599)](`markerHeight`, 240).attr(`orient`, `auto`)[r2(632)](`path`).attr(`d`, `M 5,7 L9,13 L1,7 L9,1 Z`), e2[r2(632)](`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyEnd`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`)[r2(632)](`path`)[r2(599)](`d`, `M 18,7 L9,13 L14,7 L9,1 Z`);
}, `dependency`), lollipop: c((e2, t2, n2) => {
  let r2 = P;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopStart`)[r2(599)](`class`, `marker lollipop ` + t2).attr(`refX`, 13).attr(r2(469), 7).attr(r2(651), 190).attr(`markerHeight`, 240).attr(`orient`, r2(523)).append(`circle`)[r2(599)](`stroke`, r2(647)).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopEnd`).attr(`class`, `marker lollipop ` + t2)[r2(599)](`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`stroke`, r2(647)).attr(r2(446), `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6);
}, `lollipop`), point: c((e2, t2, n2) => {
  let r2 = P;
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointEnd`).attr(r2(540), `marker ` + t2)[r2(599)](`viewBox`, `0 0 10 10`).attr(`refX`, 6).attr(`refY`, 5)[r2(599)](`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 12).attr(`markerHeight`, 12).attr(`orient`, `auto`)[r2(632)](`path`).attr(`d`, `M 0 0 L 10 5 L 0 10 z`).attr(r2(540), `arrowMarkerPath`)[r2(471)](r2(535), 1).style(`stroke-dasharray`, r2(605)), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointStart`).attr(r2(540), `marker ` + t2)[r2(599)](`viewBox`, r2(408)).attr(`refX`, 4.5).attr(r2(469), 5).attr(`markerUnits`, `userSpaceOnUse`)[r2(599)](`markerWidth`, 12).attr(`markerHeight`, 12)[r2(599)](`orient`, `auto`)[r2(632)](`path`).attr(`d`, r2(602)).attr(r2(540), r2(532)).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`);
}, `point`), circle: c((e2, t2, n2) => {
  let r2 = P;
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleEnd`).attr(r2(540), `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 11).attr(`refY`, 5)[r2(599)](r2(576), r2(404))[r2(599)](`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`).append(r2(530)).attr(`cx`, `5`)[r2(599)](`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, r2(605)), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-circleStart`).attr(`class`, r2(436) + t2).attr(r2(553), `0 0 10 10`).attr(r2(615), -1).attr(`refY`, 5)[r2(599)](`markerUnits`, `userSpaceOnUse`).attr(r2(651), 11).attr(`markerHeight`, 11).attr(`orient`, `auto`)[r2(632)](`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`)[r2(599)](`class`, r2(532)).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`);
}, P(530)), cross: c((e2, t2, n2) => {
  let r2 = P;
  e2[r2(632)](`marker`).attr(`id`, n2 + `_` + t2 + r2(655)).attr(`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`).attr(`refX`, 12).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(r2(541), r2(523)).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`)[r2(599)](r2(540), `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`), e2.append(`marker`)[r2(599)](`id`, n2 + `_` + t2 + `-crossStart`)[r2(599)](`class`, `marker cross ` + t2).attr(`viewBox`, `0 0 11 11`)[r2(599)](`refX`, -1).attr(`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(r2(651), 11).attr(`markerHeight`, 11).attr(r2(541), `auto`).append(r2(440)).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`)[r2(599)](`class`, `arrowMarkerPath`).style(r2(535), 2).style(`stroke-dasharray`, `1,0`);
}, `cross`), barb: c((e2, t2, n2) => {
  let r2 = P;
  e2.append(`defs`).append(r2(428)).attr(`id`, n2 + `_` + t2 + `-barbEnd`).attr(`refX`, 19).attr(`refY`, 7)[r2(599)](`markerWidth`, 20).attr(`markerHeight`, 14)[r2(599)](`markerUnits`, `strokeWidth`).attr(r2(541), r2(523)).append(`path`).attr(`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, `barb`) }, nt = et, z = ((F = p()) == null || (F = F[P(551)]) == null ? void 0 : F.padding) ?? 8;
function rt(e2, t2) {
  if (e2 === 0 || !Number[P(525)](e2)) throw Error(`Columns must be an integer !== 0.`);
  if (t2 < 0 || !Number.isInteger(t2)) throw Error(`Position must be a non-negative integer.` + t2);
  return e2 < 0 ? { px: t2, py: 0 } : e2 === 1 ? { px: 0, py: t2 } : { px: t2 % e2, py: Math.floor(t2 / e2) };
}
c(rt, `calculateBlockPosition`);
var it = c((e2) => {
  let t2 = P, n2 = 0, r2 = 0;
  for (let i2 of e2.children) {
    let { width: e3, height: a2, x: o2, y: c2 } = i2.size ?? { width: 0, height: 0, x: 0, y: 0 };
    if (s[t2(420)](t2(600), i2.id, t2(458), e3, `height:`, a2, `x:`, o2, `y:`, c2, i2[t2(506)]), i2.type === `space`) continue;
    let l2 = e3 / (i2.widthInColumns ?? 1);
    l2 > n2 && (n2 = l2), a2 > r2 && (r2 = a2);
  }
  return { width: n2, height: r2 };
}, P(429));
function B(e2, t2, n2 = 0, r2 = 0) {
  var _a, _b, _c;
  let i2 = P;
  var a2, o2, c2, l2, u2, d2;
  s[i2(420)](`setBlockSizes abc95 (start)`, e2.id, e2 == null || (a2 = e2[i2(374)]) == null ? void 0 : a2.x, `block width =`, e2 == null ? void 0 : e2.size, `siblingWidth`, n2), !(e2 == null || (o2 = e2.size) == null) && o2.width || (e2.size = { width: n2, height: r2, x: 0, y: 0 });
  let f2 = 0, p2 = 0;
  if (((_a = e2.children) == null ? void 0 : _a.length) > 0) {
    var m2;
    for (let n3 of e2.children) B(n3, t2);
    let a3 = it(e2);
    f2 = a3[i2(643)], p2 = a3.height, s.debug(`setBlockSizes abc95 maxWidth of`, e2.id, `:s children is `, f2, p2);
    for (let t3 of e2.children) t3[i2(374)] && (s.debug(`abc95 Setting size of children of ` + e2.id + ` id=` + t3.id + ` ` + f2 + ` ` + p2 + ` ` + JSON[i2(557)](t3.size)), t3[i2(374)].width = f2 * (t3.widthInColumns ?? 1) + z * ((t3.widthInColumns ?? 1) - 1), t3.size[i2(543)] = p2, t3.size.x = 0, t3.size.y = 0, s.debug(`abc95 updating size of ` + e2.id + ` children child:` + t3.id + ` maxWidth:` + f2 + ` maxHeight:` + p2));
    for (let n3 of e2.children) B(n3, t2, f2, p2);
    let o3 = e2.columns ?? -1, c3 = 0;
    for (let t3 of e2.children) c3 += t3.widthInColumns ?? 1;
    let l3 = e2.children[i2(498)];
    o3 > 0 && o3 < c3 && (l3 = o3);
    let u3 = Math.ceil(c3 / l3), d3 = l3 * (f2 + z) + z, g2 = u3 * (p2 + z) + z;
    if (d3 < n2) {
      s.debug(`Detected to small sibling: abc95 ` + e2.id + ` siblingWidth ` + n2 + ` siblingHeight ` + r2 + ` width ` + d3), d3 = n2, g2 = r2;
      let t3 = (n2 - l3 * z - z) / l3, a4 = (r2 - u3 * z - z) / u3;
      s.debug(i2(650), e2.id, `childWidth`, t3, `maxWidth`, f2), s.debug(`Size indata abc88`, e2.id, `childHeight`, a4, `maxHeight`, p2), s.debug(`Size indata abc88 xSize`, l3, `padding`, z);
      for (let n3 of e2.children) n3[i2(374)] && (n3[i2(374)][i2(643)] = t3, n3[i2(374)][i2(543)] = a4, n3.size.x = 0, n3[i2(374)].y = 0);
    }
    if (s.debug(`abc95 (finale calc) ` + e2.id + ` xSize ` + l3 + i2(598) + u3 + i2(441) + o3 + e2.children.length + ` width=` + Math.max(d3, ((_b = e2.size) == null ? void 0 : _b.width) || 0)), d3 < ((e2 == null || (m2 = e2.size) == null ? void 0 : m2.width) || 0)) {
      var h2;
      d3 = (e2 == null || (h2 = e2.size) == null ? void 0 : h2.width) || 0;
      let t3 = o3 > 0 ? Math.min(e2.children.length, o3) : e2.children[i2(498)];
      if (t3 > 0) {
        let n3 = (d3 - t3 * z - z) / t3;
        s[i2(420)](`abc95 (growing to fit) width`, e2.id, d3, (_c = e2.size) == null ? void 0 : _c.width, n3);
        for (let t4 of e2.children) t4[i2(374)] && (t4.size.width = n3);
      }
    }
    e2.size = { width: d3, height: g2, x: 0, y: 0 };
  }
  s.debug(`setBlockSizes abc94 (done)`, e2.id, e2 == null || (c2 = e2[i2(374)]) == null ? void 0 : c2.x, e2 == null || (l2 = e2.size) == null ? void 0 : l2.width, e2 == null || (u2 = e2.size) == null ? void 0 : u2.y, e2 == null || (d2 = e2[i2(374)]) == null ? void 0 : d2.height);
}
c(B, `setBlockSizes`);
function at(e2, t2) {
  let n2 = P;
  var r2, i2, a2, o2, c2, l2;
  s.debug(`abc85 layout blocks (=>layoutBlocks) ` + e2.id + ` x: ` + (e2 == null || (r2 = e2.size) == null ? void 0 : r2.x) + n2(453) + (e2 == null || (i2 = e2.size) == null ? void 0 : i2.y) + ` width: ` + (e2 == null || (a2 = e2[n2(374)]) == null ? void 0 : a2.width));
  let u2 = e2[n2(519)] ?? -1;
  if (s.debug(`layoutBlocks columns abc95`, e2.id, `=>`, u2, e2), e2.children && e2.children.length > 0) {
    var d2, f2, p2, m2, h2;
    let r3 = (e2 == null || (d2 = e2.children[0]) == null || (d2 = d2.size) == null ? void 0 : d2[n2(643)]) ?? 0, i3 = e2.children.length * r3 + (e2.children.length - 1) * z;
    s.debug(`widthOfChildren 88`, i3, `posX`);
    let a3 = /* @__PURE__ */ new Map();
    {
      let t3 = 0;
      for (let r4 of e2[n2(545)]) {
        if (!r4.size) continue;
        let { py: e3 } = rt(u2, t3), n3 = a3.get(e3) ?? 0;
        r4.size.height > n3 && a3.set(e3, r4.size.height);
        let i4 = (r4 == null ? void 0 : r4.widthInColumns) ?? 1;
        u2 > 0 && (i4 = Math.min(i4, u2 - t3 % u2)), t3 += i4;
      }
    }
    let o3 = /* @__PURE__ */ new Map();
    {
      let e3 = 0, t3 = [...a3[n2(417)]()].sort((e4, t4) => e4 - t4);
      for (let n3 of t3) o3.set(n3, e3), e3 += (a3.get(n3) ?? 0) + z;
    }
    let c3 = 0;
    s.debug(`abc91 block?.size?.x`, e2.id, e2 == null || (f2 = e2[n2(374)]) == null ? void 0 : f2.x);
    let l3 = !(e2 == null || (p2 = e2.size) == null) && p2.x ? (e2 == null || (m2 = e2.size) == null ? void 0 : m2.x) + (-(e2 == null || (h2 = e2.size) == null ? void 0 : h2[n2(643)]) / 2 || 0) : -z, x2 = 0;
    for (let r4 of e2[n2(545)]) {
      var g2, _2;
      let i4 = e2;
      if (!r4.size) continue;
      let { width: d3, height: f3 } = r4[n2(374)], { px: p3, py: m3 } = rt(u2, c3);
      if (m3 != x2) {
        var v2, y2, b2;
        x2 = m3, l3 = !(e2 == null || (v2 = e2.size) == null) && v2.x ? (e2 == null || (y2 = e2.size) == null ? void 0 : y2.x) + (-(e2 == null || (b2 = e2.size) == null ? void 0 : b2.width) / 2 || 0) : -z, s.debug(`New row in layout for block`, e2.id, n2(594), r4.id, x2);
      }
      if (s.debug(`abc89 layout blocks (child) id: ` + r4.id + ` Pos: ` + c3 + n2(609) + p3 + `,` + m3 + ` (` + (i4 == null || (g2 = i4.size) == null ? void 0 : g2.x) + `,` + (i4 == null || (_2 = i4.size) == null ? void 0 : _2.y) + n2(492) + i4.id + ` width: ` + d3 + z), i4.size) {
        let e3 = d3 / 2;
        r4.size.x = l3 + z + e3, s.debug(`abc91 layout blocks (calc) px, pyid:` + r4.id + ` startingPos=X` + l3 + ` new startingPosX` + r4.size.x + ` ` + e3 + n2(375) + z + ` width=` + d3 + ` halfWidth=` + e3 + ` => x:` + r4.size.x + ` y:` + r4.size.y + ` ` + r4.widthInColumns + ` (width * (child?.w || 1)) / 2 ` + d3 * ((r4 == null ? void 0 : r4.widthInColumns) ?? 1) / 2), l3 = r4.size.x + e3;
        let t3 = o3.get(m3) ?? 0, c4 = a3.get(m3) ?? f3;
        r4.size.y = i4.size.y - i4.size.height / 2 + t3 + c4 / 2 + z, s.debug(`abc88 layout blocks (calc) px, pyid:` + r4.id + `startingPosX` + l3 + z + e3 + n2(450) + r4.size.x + `y:` + r4[n2(374)].y + r4.widthInColumns + `(width * (child?.w || 1)) / 2` + d3 * ((r4 == null ? void 0 : r4[n2(544)]) ?? 1) / 2);
      }
      r4.children && at(r4, t2);
      let h3 = (r4 == null ? void 0 : r4.widthInColumns) ?? 1;
      u2 > 0 && (h3 = Math[n2(504)](h3, u2 - c3 % u2)), c3 += h3, s.debug(`abc88 columnsPos`, r4, c3);
    }
  }
  s.debug(`layout blocks (<==layoutBlocks) ` + e2.id + ` x: ` + (e2 == null || (o2 = e2.size) == null ? void 0 : o2.x) + ` y: ` + (e2 == null || (c2 = e2.size) == null ? void 0 : c2.y) + ` width: ` + (e2 == null || (l2 = e2.size) == null ? void 0 : l2[n2(643)]));
}
c(at, `layoutBlocks`);
function ot(e2, { minX: t2, minY: n2, maxX: r2, maxY: i2 } = { minX: 0, minY: 0, maxX: 0, maxY: 0 }) {
  let a2 = P;
  if (e2.size && e2.id !== `root`) {
    let { x: a3, y: o2, width: s2, height: c2 } = e2.size;
    a3 - s2 / 2 < t2 && (t2 = a3 - s2 / 2), o2 - c2 / 2 < n2 && (n2 = o2 - c2 / 2), a3 + s2 / 2 > r2 && (r2 = a3 + s2 / 2), o2 + c2 / 2 > i2 && (i2 = o2 + c2 / 2);
  }
  if (e2.children) for (let o2 of e2[a2(545)]) ({ minX: t2, minY: n2, maxX: r2, maxY: i2 } = ot(o2, { minX: t2, minY: n2, maxX: r2, maxY: i2 }));
  return { minX: t2, minY: n2, maxX: r2, maxY: i2 };
}
c(ot, P(366));
function V() {
  let e2 = [`node `, `updatedPath`, `(())`, `substr`, `605883KWXOmE`, `CLASSDEF_ID`, `start_right`, `markerUnits`, `end`, `Lex: ]>`, `default`, `aggregation`, `borders`, `iterator`, `560yUnAze`, `Lex: )]`, `pushState`, `Lex: Starting string`, `Parse error on line `, `parser`, `byteOffset`, `Rule: id-block statement : `, `polygon`, `right`, `classData`, ` and child `, `first_column`, `_currentRules`, `forEach`, ` ySize `, `attr`, `getMaxChildSize abc95 child:`, `buffer`, `M 0 5 L 10 10 L 10 0 z`, `recoverable`, `split`, `1,0`, `trace`, `Lex: START_LINK`, `arrow_circle`, ` (px, py) `, `call`, `Lex: ((`, `rect`, ` edge-pattern-solid`, `curve`, `refX`, `shape`, `1516452FLVVoq`, `yytext`, `LEX ARR START`, `constructor`, `translate(`, ` flowchart-label`, `end of input`, `centerLabel`, `normal`, `SPACE_BLOCK`, `_backtrack`, `productions_`, `conditionStack`, `-compositionStart`, ` y:`, `append`, `Start`, `;
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: `, `EOF`, `yylloc`, `Lexical error on line `, `M 1,1 V 13 L18,7 Z`, `[object Map]`, `labelStyle`, `getConfig`, `parseError`, `width`, `match`, `flat`, `insertBlocks`, `black`, `backtrack_lexer`, `matched`, `Size indata abc88`, `markerWidth`, `COLUMNS (LEX)`, `startLabelLeft`, `1123392ZpimXz`, `-crossEnd`, `Lex (up):`, `transform`, `markdown-node-label`, `dotted`, `findBounds`, `index`, `block_arrow`, `solid`, `first_line`, `stylesStr`, `;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: `, `sandbox`, `size`, ` padding=`, `LEX ARR: Starting string`, `getDiagramId`, `object`, `addEdgeMarkers`, `Lexa: ([`, `APA123`, `insertPolygonShape`, `displayText`, `fontFamily`, `Lex: )`, `wrappingWidth`, `Stop EOF `, `fromCluster`, `performAction`, `info`, `last_line`, `push`, `abc88 InsertEdge: edge=`, `
  node        : x:`, `graph`, `options`, `values`, `insertMarkers`, `titleColor`, `labelText`, `number`, `[object DataView]`, `setHierarchy`, `userSpaceOnUse`, `Unknown arrow type: `, `replace`, `join`, `0 0 10 10`, `([])`, `marker extension `, `Moving label `, `Lex: COLON`, `DEFAULT`, `arrowTypeStart`, `delete`, `getBoundingClientRect`, `keys`, `apply`, `left`, `debug`, `edgeStrToEdgeData`, `CLASSDEF_STYLEOPTS`, `markerHeight`, `_input`, `yyleng`, `clusterBorder`, `translate( `, `marker`, `getMaxChildSize`, `lineColor`, `upcomingInput`, `inv_trapezoid`, `Parse Error: multiple actions possible at state: `, `6505367LZMjMt`, `defaultActions`, `marker `, `addStyle2Node`, `add bottom border`, `label`, `path`, ` columns `, `props`, `warn`, `point`, `more`, `fill`, `CLASSENTITY_IDS`, ` edge-pattern-dashed`, `endLabelLeft`, `=>x:`, `string`, `range`, ` y: `, `setBlock`, `last_column`, `id-block`, `composite`, `width:`, `slice`, `error`, `down`, `padding`, `color`, `tooltip`, `Lex: ])`, `[object Date]`, `select`, `[id="`, `refY`, `subroutine`, `style`, `hasOwn`, `forkJoin`, `edge-thickness-thick`, `Lexa: ))`, `offset`, `getBBox`, `Block `, `popState`, `4852bcuXtr`, `;
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: `, `propertyIsEnumerable`, `column-setting`, `points`, `Unknown node property `, `-compositionEnd`, `14879FFDJIv`, `intersectEllipse`, `intersect`, `typeStr`, `sort`, `) parent: `, `test_match`, `has`, `insert`, `startLabelRight`, `NODE`, `length`, ` 0 a `, `acc_descr_multiline_value`, `Lexa: )`, `8GExTnZ`, `[/\\]`, `min`, `10rsFUQB`, `type`, `lean_right`, `prototype`, `yylineno`, `thick`, `add`, `done`, `4XtPnZb`, `sqrt`, `line`, `endLabelRight`, `pastInput`, `layout`, `columns`, `Rule: separator (EOF) `, `some`, `round`, `auto`, `:first-child`, `isInteger`, `cssStyle`, `marker aggregation `, `;
  }
  /* .cluster div {
    color: `, `edge`, `circle`, `state-start`, `arrowMarkerPath`, `nodes`, `stroke-dasharray`, `stroke-width`, `[object ArrayBuffer]`, `Lexc: >`, `label-container`, `rect_left_inv_arrow`, `class`, `orient`, `divider`, `height`, `widthInColumns`, `children`, `End`, `Parser`, ` 0,0,0 `, `set`, `setPrototypeOf`, `block`, `;
  }

  .edgePath .path {
    stroke: `, `viewBox`, `NODE_DEND`, `abs`, `applyStyles`, `stringify`, `arrowTypeEnd`, `node`, `Lex: LINK`, `node default`, `acc_title`, `parse`, `getLogger`, `addStyleClass`, `1006029omLtkG`, `;
  }

  .cluster span,p {
    color: `, `trim`];
  return V = function() {
    return e2;
  }, V();
}
function st(e2) {
  let t2 = P, n2 = e2.getBlock(`root`);
  if (!n2) return;
  B(n2, e2, 0, 0), at(n2, e2), s.debug(`getBlocks`, JSON[t2(557)](n2, null, 2));
  let { minX: r2, minY: i2, maxX: a2, maxY: o2 } = ot(n2), c2 = o2 - i2;
  return { x: r2, y: i2, width: a2 - r2, height: c2 };
}
c(st, P(518));
var H = c((function() {
  var e2 = r(function* (e3, t2, n2, r2 = false, i2 = false) {
    let a2 = Q, o2 = t2 || ``;
    typeof o2 == a2(378) && (o2 = o2[0]);
    let s2 = p(), c2 = l(s2);
    return yield pe(e3, o2, { style: n2, isTitle: r2, useHtmlLabels: c2, markdown: false, isNode: i2, width: 1 / 0 }, s2);
  });
  return function(t2, n2, r2) {
    return e2.apply(this, arguments);
  };
})(), `createLabel`), ct = c((e2, t2, n2, r2, i2) => {
  let a2 = P;
  t2[a2(414)] && ut(e2, `start`, t2.arrowTypeStart, n2, r2, i2), t2.arrowTypeEnd && ut(e2, a2(577), t2.arrowTypeEnd, n2, r2, i2);
}, P(379)), lt = { arrow_cross: `cross`, arrow_point: `point`, arrow_barb: `barb`, arrow_circle: P(530), aggregation: P(580), extension: `extension`, composition: `composition`, dependency: `dependency`, lollipop: `lollipop` }, ut = c((e2, t2, n2, r2, i2, a2) => {
  let o2 = P, c2 = lt[n2];
  if (!c2) {
    s.warn(o2(405) + n2);
    return;
  }
  let l2 = o2(t2 === `start` ? 633 : 546);
  e2.attr(`marker-` + t2, `url(` + r2 + `#` + i2 + `_` + a2 + `-` + c2 + l2 + `)`);
}, `addEdgeMarker`), dt = {}, U = {}, ft = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, r2 = p(), i2 = l(r2), a2 = e3.insert(`g`).attr(`class`, `edgeLabel`), s2 = a2.insert(`g`)[n2(599)](`class`, n2(439)), c2 = t2.labelType === `markdown`, u2 = yield pe(e3, t2.label, { style: t2[n2(640)], useHtmlLabels: i2, addSvgBackground: c2, isNode: false, markdown: c2, width: c2 ? void 0 : 1 / 0 }, r2);
    s2.node().appendChild(u2);
    let d2 = u2.getBBox(), f2 = d2;
    if (i2) {
      let e4 = u2.children[0], t3 = o(u2);
      d2 = e4.getBoundingClientRect(), f2 = d2, t3.attr(`width`, d2[n2(643)]), t3.attr(`height`, d2.height);
    } else {
      let e4 = o(u2)[n2(467)](`text`).node();
      e4 && typeof e4.getBBox == `function` && (f2 = e4.getBBox());
    }
    s2.attr(`transform`, N(f2, i2)), dt[t2.id] = a2, t2.width = d2.width, t2.height = d2[n2(543)];
    let m2;
    if (t2.startLabelLeft) {
      let r3 = e3.insert(`g`)[n2(599)](`class`, `edgeTerminals`), a3 = r3[n2(495)](`g`).attr(`class`, `inner`), s3 = yield H(a3, t2[n2(653)], t2.labelStyle);
      m2 = s3;
      let c3 = s3.getBBox();
      if (i2) {
        let e4 = s3.children[0], t3 = o(s3);
        c3 = e4.getBoundingClientRect(), t3.attr(`width`, c3.width), t3[n2(599)](`height`, c3.height);
      }
      a3.attr(`transform`, N(c3, i2)), U[t2.id] || (U[t2.id] = {}), U[t2.id].startLeft = r3, W(m2, t2.startLabelLeft);
    }
    if (t2.startLabelRight) {
      let r3 = e3.insert(`g`).attr(`class`, `edgeTerminals`), a3 = r3[n2(495)](`g`)[n2(599)](`class`, `inner`), s3 = yield H(a3, t2[n2(496)], t2.labelStyle);
      m2 = s3;
      let c3 = s3[n2(477)]();
      if (i2) {
        let e4 = s3[n2(545)][0], t3 = o(s3);
        c3 = e4.getBoundingClientRect(), t3.attr(`width`, c3.width), t3[n2(599)](`height`, c3.height);
      }
      a3.attr(`transform`, N(c3, i2)), U[t2.id] || (U[t2.id] = {}), U[t2.id].startRight = r3, W(m2, t2[n2(496)]);
    }
    if (t2[n2(449)]) {
      let r3 = e3.insert(`g`).attr(`class`, `edgeTerminals`), a3 = r3.insert(`g`).attr(n2(540), `inner`), s3 = yield H(r3, t2.endLabelLeft, t2.labelStyle);
      m2 = s3;
      let c3 = s3.getBBox();
      if (i2) {
        let e4 = s3[n2(545)][0], t3 = o(s3);
        c3 = e4[n2(416)](), t3.attr(`width`, c3[n2(643)]), t3[n2(599)](`height`, c3.height);
      }
      a3.attr(n2(657), N(c3, i2)), U[t2.id] || (U[t2.id] = {}), U[t2.id].endLeft = r3, W(m2, t2[n2(449)]);
    }
    if (t2[n2(516)]) {
      let r3 = e3[n2(495)](`g`).attr(`class`, `edgeTerminals`), a3 = r3[n2(495)](`g`).attr(n2(540), `inner`), s3 = yield H(r3, t2[n2(516)], t2.labelStyle);
      m2 = s3;
      let c3 = s3.getBBox();
      if (i2) {
        let e4 = s3.children[0], t3 = o(s3);
        c3 = e4.getBoundingClientRect(), t3.attr(`width`, c3.width), t3.attr(`height`, c3[n2(543)]);
      }
      a3.attr(`transform`, N(c3, i2)), U[t2.id] || (U[t2.id] = {}), U[t2.id].endRight = r3, W(m2, t2.endLabelRight);
    }
    return u2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `insertEdgeLabel`);
function W(e2, t2) {
  let n2 = P;
  l(p()) && e2 && (e2.style[n2(643)] = t2.length * 9 + `px`, e2.style[n2(543)] = `12px`);
}
c(W, `setTerminalWidth`);
var pt = c((e2, t2) => {
  let n2 = P;
  s.debug(`Moving label abc88 `, e2.id, e2.label, dt[e2.id], t2);
  let r2 = t2[n2(570)] ? t2.updatedPath : t2.originalPath, { subGraphTitleTotalMargin: i2 } = _e(p());
  if (e2.label) {
    let a2 = dt[e2.id], o2 = e2.x, c2 = e2.y;
    if (r2) {
      let i3 = O.calcLabelPosition(r2);
      s[n2(420)](n2(411) + e2.label + ` from (`, o2, `,`, c2, `) to (`, i3.x, `,`, i3.y, `) abc88`), t2.updatedPath && (o2 = i3.x, c2 = i3.y);
    }
    a2.attr(`transform`, `translate(` + o2 + `, ` + (c2 + i2 / 2) + `)`);
  }
  if (e2.startLabelLeft) {
    let t3 = U[e2.id].startLeft, n3 = e2.x, i3 = e2.y;
    if (r2) {
      let t4 = O.calcTerminalLabelPosition(e2.arrowTypeStart ? 10 : 0, `start_left`, r2);
      n3 = t4.x, i3 = t4.y;
    }
    t3.attr(`transform`, `translate(` + n3 + `, ` + i3 + `)`);
  }
  if (e2.startLabelRight) {
    let t3 = U[e2.id].startRight, i3 = e2.x, a2 = e2.y;
    if (r2) {
      let t4 = O.calcTerminalLabelPosition(e2.arrowTypeStart ? 10 : 0, n2(575), r2);
      i3 = t4.x, a2 = t4.y;
    }
    t3.attr(`transform`, n2(621) + i3 + `, ` + a2 + `)`);
  }
  if (e2.endLabelLeft) {
    let t3 = U[e2.id].endLeft, i3 = e2.x, a2 = e2.y;
    if (r2) {
      let t4 = O.calcTerminalLabelPosition(e2.arrowTypeEnd ? 10 : 0, `end_left`, r2);
      i3 = t4.x, a2 = t4.y;
    }
    t3[n2(599)](`transform`, `translate(` + i3 + `, ` + a2 + `)`);
  }
  if (e2.endLabelRight) {
    let t3 = U[e2.id].endRight, i3 = e2.x, a2 = e2.y;
    if (r2) {
      let t4 = O.calcTerminalLabelPosition(e2.arrowTypeEnd ? 10 : 0, `end_right`, r2);
      i3 = t4.x, a2 = t4.y;
    }
    t3[n2(599)](`transform`, `translate(` + i3 + `, ` + a2 + `)`);
  }
}, `positionEdgeLabel`), mt = c((e2, t2) => {
  let n2 = e2.x, r2 = e2.y, i2 = Math.abs(t2.x - n2), a2 = Math.abs(t2.y - r2), o2 = e2.width / 2, s2 = e2.height / 2;
  return i2 >= o2 || a2 >= s2;
}, `outsideNode`), ht = c((e2, t2, n2) => {
  let r2 = P;
  s.debug(`intersection calc abc89:
  outsidePoint: ` + JSON.stringify(t2) + `
  insidePoint : ` + JSON.stringify(n2) + r2(394) + e2.x + r2(631) + e2.y + ` w:` + e2.width + ` h:` + e2.height);
  let i2 = e2.x, a2 = e2.y, o2 = Math.abs(i2 - n2.x), c2 = e2.width / 2, l2 = n2.x < t2.x ? c2 - o2 : c2 + o2, u2 = e2.height / 2, d2 = Math.abs(t2.y - n2.y), f2 = Math[r2(555)](t2.x - n2.x);
  if (Math.abs(a2 - t2.y) * c2 > Math.abs(i2 - t2.x) * u2) {
    let e3 = n2.y < t2.y ? t2.y - u2 - a2 : a2 - u2 - t2.y;
    l2 = f2 * e3 / d2;
    let r3 = { x: n2.x < t2.x ? n2.x + l2 : n2.x - f2 + l2, y: n2.y < t2.y ? n2.y + d2 - e3 : n2.y - d2 + e3 };
    return l2 === 0 && (r3.x = t2.x, r3.y = t2.y), f2 === 0 && (r3.x = t2.x), d2 === 0 && (r3.y = t2.y), s.debug(`abc89 topp/bott calc, Q ` + d2 + `, q ` + e3 + `, R ` + f2 + `, r ` + l2, r3), r3;
  } else {
    l2 = n2.x < t2.x ? t2.x - c2 - i2 : i2 - c2 - t2.x;
    let e3 = d2 * l2 / f2, a3 = n2.x < t2.x ? n2.x + f2 - l2 : n2.x - f2 + l2, o3 = n2.y < t2.y ? n2.y + e3 : n2.y - e3;
    return s[r2(420)](`sides calc abc89, Q ` + d2 + `, q ` + e3 + `, R ` + f2 + `, r ` + l2, { _x: a3, _y: o3 }), l2 === 0 && (a3 = t2.x, o3 = t2.y), f2 === 0 && (a3 = t2.x), d2 === 0 && (o3 = t2.y), { x: a3, y: o3 };
  }
}, `intersection`), gt = c((e2, t2) => {
  s.debug(`abc88 cutPathAtIntersect`, e2, t2);
  let n2 = [], r2 = e2[0], i2 = false;
  return e2.forEach((e3) => {
    let a2 = Q;
    if (!mt(t2, e3) && !i2) {
      let o2 = ht(t2, r2, e3), s2 = false;
      n2.forEach((e4) => {
        s2 || (s2 = e4.x === o2.x && e4.y === o2.y);
      }), n2[a2(521)]((e4) => e4.x === o2.x && e4.y === o2.y) || n2.push(o2), i2 = true;
    } else r2 = e3, i2 || n2.push(e3);
  }), n2;
}, `cutPathAtIntersect`), _t = c(function(e2, t2, n2, r2, o2, c2, l2) {
  let u2 = P, d2 = n2[u2(484)];
  s.debug(u2(393), n2, `e=`, t2);
  let m2 = false, h2 = c2.node(t2.v);
  var g2 = c2.node(t2.w);
  g2 != null && g2.intersect && h2 != null && h2[u2(489)] && (d2 = d2.slice(1, n2.points.length - 1), d2.unshift(h2.intersect(d2[0])), d2[u2(392)](g2.intersect(d2[d2.length - 1]))), n2.toCluster && (s.debug(`to cluster abc88`, r2[n2.toCluster]), d2 = gt(n2.points, r2[n2.toCluster].node), m2 = true), n2.fromCluster && (s.debug(`from cluster abc88`, r2[n2.fromCluster]), d2 = gt(d2.reverse(), r2[n2[u2(388)]].node).reverse(), m2 = true);
  let _2 = d2.filter((e3) => !Number.isNaN(e3.y)), v2 = i;
  n2.curve && (o2 === u2(395) || o2 === `flowchart`) && (v2 = n2.curve);
  let { x: y2, y: b2 } = he(n2), x2 = a().x(y2).y(b2)[u2(614)](v2), S2;
  switch (n2.thickness) {
    case `normal`:
      S2 = `edge-thickness-normal`;
      break;
    case u2(510):
      S2 = `edge-thickness-thick`;
      break;
    case `invisible`:
      S2 = `edge-thickness-thick`;
      break;
    default:
      S2 = ``;
  }
  switch (n2.pattern) {
    case u2(369):
      S2 += u2(613);
      break;
    case `dotted`:
      S2 += ` edge-pattern-dotted`;
      break;
    case `dashed`:
      S2 += u2(448);
      break;
  }
  let C2 = e2[u2(632)](`path`)[u2(599)](`d`, x2(_2)).attr(`id`, n2.id).attr(u2(540), ` ` + S2 + (n2.classes ? ` ` + n2.classes : ``)).attr(`style`, n2.style), w2 = ``;
  (p().flowchart.arrowMarkerAbsolute || p().state.arrowMarkerAbsolute) && (w2 = f(true)), ct(C2, n2, w2, l2, o2);
  let T2 = {};
  return m2 && (T2.updatedPath = d2), T2.originalPath = n2.points, T2;
}, `insertEdge`), vt = c((e2) => {
  let t2 = P, n2 = /* @__PURE__ */ new Set();
  for (let r2 of e2) switch (r2) {
    case `x`:
      n2.add(t2(592)), n2.add(t2(419));
      break;
    case `y`:
      n2.add(`up`), n2.add(`down`);
      break;
    default:
      n2[t2(511)](r2);
      break;
  }
  return n2;
}, `expandAndDeduplicateDirections`), yt = c((e2, t2, n2, r2) => {
  let i2 = P, a2 = vt(e2), o2 = t2[i2(543)] + 2 * n2.padding, s2 = o2 / 2, c2 = r2 ?? t2.width + 2 * s2 + n2.padding, l2 = n2.padding / 2;
  return a2.has(`right`) && a2.has(`left`) && a2.has(`up`) && a2.has(`down`) ? [{ x: 0, y: 0 }, { x: s2, y: 0 }, { x: c2 / 2, y: 2 * l2 }, { x: c2 - s2, y: 0 }, { x: c2, y: 0 }, { x: c2, y: -o2 / 3 }, { x: c2 + 2 * l2, y: -o2 / 2 }, { x: c2, y: -2 * o2 / 3 }, { x: c2, y: -o2 }, { x: c2 - s2, y: -o2 }, { x: c2 / 2, y: -o2 - 2 * l2 }, { x: s2, y: -o2 }, { x: 0, y: -o2 }, { x: 0, y: -2 * o2 / 3 }, { x: -2 * l2, y: -o2 / 2 }, { x: 0, y: -o2 / 3 }] : a2.has(i2(592)) && a2.has(i2(419)) && a2.has(`up`) ? [{ x: s2, y: 0 }, { x: c2 - s2, y: 0 }, { x: c2, y: -o2 / 2 }, { x: c2 - s2, y: -o2 }, { x: s2, y: -o2 }, { x: 0, y: -o2 / 2 }] : a2[i2(494)](`right`) && a2.has(`left`) && a2.has(`down`) ? [{ x: 0, y: 0 }, { x: s2, y: -o2 }, { x: c2 - s2, y: -o2 }, { x: c2, y: 0 }] : a2[i2(494)](`right`) && a2[i2(494)](`up`) && a2[i2(494)](`down`) ? [{ x: 0, y: 0 }, { x: c2, y: -s2 }, { x: c2, y: -o2 + s2 }, { x: 0, y: -o2 }] : a2.has(`left`) && a2.has(`up`) && a2.has(`down`) ? [{ x: c2, y: 0 }, { x: 0, y: -s2 }, { x: 0, y: -o2 + s2 }, { x: c2, y: -o2 }] : a2.has(`right`) && a2.has(`left`) ? [{ x: s2, y: 0 }, { x: s2, y: -l2 }, { x: c2 - s2, y: -l2 }, { x: c2 - s2, y: 0 }, { x: c2, y: -o2 / 2 }, { x: c2 - s2, y: -o2 }, { x: c2 - s2, y: -o2 + l2 }, { x: s2, y: -o2 + l2 }, { x: s2, y: -o2 }, { x: 0, y: -o2 / 2 }] : a2.has(`up`) && a2.has(`down`) ? [{ x: c2 / 2, y: 0 }, { x: 0, y: -l2 }, { x: s2, y: -l2 }, { x: s2, y: -o2 + l2 }, { x: 0, y: -o2 + l2 }, { x: c2 / 2, y: -o2 }, { x: c2, y: -o2 + l2 }, { x: c2 - s2, y: -o2 + l2 }, { x: c2 - s2, y: -l2 }, { x: c2, y: -l2 }] : a2.has(`right`) && a2[i2(494)](`up`) ? [{ x: 0, y: 0 }, { x: c2, y: -s2 }, { x: 0, y: -o2 }] : a2.has(`right`) && a2.has(i2(461)) ? [{ x: 0, y: 0 }, { x: c2, y: 0 }, { x: 0, y: -o2 }] : a2.has(`left`) && a2.has(`up`) ? [{ x: c2, y: 0 }, { x: 0, y: -s2 }, { x: c2, y: -o2 }] : a2.has(`left`) && a2[i2(494)](`down`) ? [{ x: c2, y: 0 }, { x: 0, y: 0 }, { x: c2, y: -o2 }] : a2.has(`right`) ? [{ x: s2, y: -l2 }, { x: s2, y: -l2 }, { x: c2 - s2, y: -l2 }, { x: c2 - s2, y: 0 }, { x: c2, y: -o2 / 2 }, { x: c2 - s2, y: -o2 }, { x: c2 - s2, y: -o2 + l2 }, { x: s2, y: -o2 + l2 }, { x: s2, y: -o2 + l2 }] : a2.has(`left`) ? [{ x: s2, y: 0 }, { x: s2, y: -l2 }, { x: c2 - s2, y: -l2 }, { x: c2 - s2, y: -o2 + l2 }, { x: s2, y: -o2 + l2 }, { x: s2, y: -o2 }, { x: 0, y: -o2 / 2 }] : a2.has(`up`) ? [{ x: s2, y: -l2 }, { x: s2, y: -o2 + l2 }, { x: 0, y: -o2 + l2 }, { x: c2 / 2, y: -o2 }, { x: c2, y: -o2 + l2 }, { x: c2 - s2, y: -o2 + l2 }, { x: c2 - s2, y: -l2 }] : a2.has(`down`) ? [{ x: c2 / 2, y: 0 }, { x: 0, y: -l2 }, { x: s2, y: -l2 }, { x: s2, y: -o2 + l2 }, { x: c2 - s2, y: -o2 + l2 }, { x: c2 - s2, y: -l2 }, { x: c2, y: -l2 }] : [{ x: 0, y: 0 }];
}, `getArrowPoints`);
function bt(e2, t2) {
  return e2.intersect(t2);
}
c(bt, `intersectNode`);
var xt = bt;
function St(e2, t2, n2, r2) {
  let i2 = P;
  var a2 = e2.x, o2 = e2.y, s2 = a2 - r2.x, c2 = o2 - r2.y, l2 = Math.sqrt(t2 * t2 * c2 * c2 + n2 * n2 * s2 * s2), u2 = Math.abs(t2 * n2 * s2 / l2);
  r2.x < a2 && (u2 = -u2);
  var d2 = Math[i2(555)](t2 * n2 * c2 / l2);
  return r2.y < o2 && (d2 = -d2), { x: a2 + u2, y: o2 + d2 };
}
c(St, P(488));
var Ct = St;
function wt(e2, t2, n2) {
  return Ct(e2, t2, t2, n2);
}
c(wt, `intersectCircle`);
var Tt = wt;
function Et(e2, t2, n2, r2) {
  var i2 = t2.y - e2.y, a2, o2 = e2.x - t2.x, s2, c2 = t2.x * e2.y - e2.x * t2.y, l2, u2, d2, f2 = i2 * n2.x + o2 * n2.y + c2, p2 = i2 * r2.x + o2 * r2.y + c2, m2, h2, g2, _2, v2;
  if (!(f2 !== 0 && p2 !== 0 && Dt(f2, p2)) && (a2 = r2.y - n2.y, s2 = n2.x - r2.x, l2 = r2.x * n2.y - n2.x * r2.y, u2 = a2 * e2.x + s2 * e2.y + l2, d2 = a2 * t2.x + s2 * t2.y + l2, !(u2 !== 0 && d2 !== 0 && Dt(u2, d2)) && (m2 = i2 * s2 - a2 * o2, m2 !== 0))) return h2 = Math.abs(m2 / 2), g2 = o2 * l2 - s2 * c2, _2 = g2 < 0 ? (g2 - h2) / m2 : (g2 + h2) / m2, g2 = a2 * c2 - i2 * l2, v2 = g2 < 0 ? (g2 - h2) / m2 : (g2 + h2) / m2, { x: _2, y: v2 };
}
c(Et, `intersectLine`);
function Dt(e2, t2) {
  return e2 * t2 > 0;
}
c(Dt, `sameSign`);
var Ot = Et, kt = At;
function At(e2, t2, n2) {
  let r2 = P;
  var i2 = e2.x, a2 = e2.y, o2 = [], s2 = 1 / 0, c2 = 1 / 0;
  typeof t2.forEach == `function` ? t2.forEach(function(e3) {
    s2 = Math.min(s2, e3.x), c2 = Math.min(c2, e3.y);
  }) : (s2 = Math.min(s2, t2.x), c2 = Math.min(c2, t2.y));
  for (var l2 = i2 - e2.width / 2 - s2, u2 = a2 - e2[r2(543)] / 2 - c2, d2 = 0; d2 < t2.length; d2++) {
    var f2 = t2[d2], p2 = t2[d2 < t2.length - 1 ? d2 + 1 : 0], m2 = Ot(e2, n2, { x: l2 + f2.x, y: u2 + f2.y }, { x: l2 + p2.x, y: u2 + p2.y });
    m2 && o2.push(m2);
  }
  return o2.length ? (o2[r2(498)] > 1 && o2[r2(491)](function(e3, t3) {
    let i3 = r2;
    var a3 = e3.x - n2.x, o3 = e3.y - n2.y, s3 = Math.sqrt(a3 * a3 + o3 * o3), c3 = t3.x - n2.x, l3 = t3.y - n2.y, u3 = Math[i3(514)](c3 * c3 + l3 * l3);
    return s3 < u3 ? -1 : s3 === u3 ? 0 : 1;
  }), o2[0]) : e2;
}
c(At, `intersectPolygon`);
var G = { node: xt, circle: Tt, ellipse: Ct, polygon: kt, rect: c((e2, t2) => {
  let n2 = P;
  var r2 = e2.x, i2 = e2.y, a2 = t2.x - r2, o2 = t2.y - i2, s2 = e2[n2(643)] / 2, c2 = e2.height / 2, l2, u2;
  return Math.abs(o2) * s2 > Math.abs(a2) * c2 ? (o2 < 0 && (c2 = -c2), l2 = o2 === 0 ? 0 : c2 * a2 / o2, u2 = c2) : (a2 < 0 && (s2 = -s2), l2 = s2, u2 = a2 === 0 ? 0 : s2 * o2 / a2), { x: r2 + l2, y: i2 + u2 };
}, `intersectRect`) }, K = c((function() {
  var e2 = r(function* (e3, t2, n2, r2) {
    let i2 = Q, a2 = p(), s2, c2 = t2.useHtmlLabels || l(a2);
    s2 = n2 || `node default`;
    let u2 = e3[i2(495)](`g`)[i2(599)](`class`, s2).attr(`id`, t2.domId || t2.id), d2 = u2.insert(`g`)[i2(599)](`class`, `label`).attr(`style`, t2[i2(640)]), f2;
    f2 = t2.labelText === void 0 ? `` : typeof t2.labelText == `string` ? t2[i2(400)] : t2.labelText[0];
    let m2;
    m2 = t2.labelType === `markdown` ? pe(d2, h(v(f2), a2), { useHtmlLabels: c2, width: t2[i2(643)] || a2.flowchart[i2(386)], classes: i2(658) }, a2) : yield H(d2, h(v(f2), a2), t2.labelStyle, false, r2);
    let g2 = m2.getBBox(), _2 = t2[i2(462)] / 2;
    if (l(a2)) {
      let e4 = m2.children[0], t3 = o(m2);
      yield ge(e4, f2), g2 = e4.getBoundingClientRect(), t3.attr(`width`, g2.width), t3[i2(599)](i2(543), g2.height);
    }
    return c2 ? d2.attr(`transform`, `translate(` + -g2.width / 2 + `, ` + -g2[i2(543)] / 2 + `)`) : d2[i2(599)](`transform`, `translate(0, ` + -g2.height / 2 + `)`), t2[i2(624)] && d2.attr(`transform`, `translate(` + -g2[i2(643)] / 2 + `, ` + -g2[i2(543)] / 2 + `)`), d2[i2(495)](`rect`, `:first-child`), { shapeSvg: u2, bbox: g2, halfPadding: _2, label: d2 };
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), `labelHelper`), q = c((e2, t2) => {
  let n2 = t2.node().getBBox();
  e2.width = n2.width, e2.height = n2.height;
}, `updateNodeBounds`);
function J(e2, t2, n2, r2) {
  let i2 = P;
  return e2.insert(`polygon`, `:first-child`)[i2(599)](`points`, r2.map(function(e3) {
    return e3.x + `,` + e3.y;
  }).join(` `)).attr(`class`, i2(538)).attr(`transform`, `translate(` + -t2 / 2 + `,` + n2 / 2 + `)`);
}
c(J, P(382));
var jt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q;
    t2.useHtmlLabels || l(p()) || (t2.centerLabel = true);
    let { shapeSvg: r2, bbox: i2, halfPadding: a2 } = yield K(e3, t2, `node ` + t2.classes, true);
    s.info(`Classes = `, t2.classes);
    let o2 = r2[n2(495)](`rect`, `:first-child`);
    return o2.attr(`rx`, t2.rx)[n2(599)](`ry`, t2.ry).attr(`x`, -i2.width / 2 - a2).attr(`y`, -i2.height / 2 - a2).attr(`width`, i2.width + t2.padding)[n2(599)](`height`, i2[n2(543)] + t2.padding), q(t2, o2), t2.intersect = function(e4) {
      return G.rect(t2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `note`), Mt = c((e2) => e2 ? ` ` + e2 : ``, `formatClass`), Y = c((e2, t2) => `` + (t2 || `node default`) + Mt(e2.classes) + ` ` + Mt(e2.class), `getClassesFromNode`), Nt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.width + t2.padding + (i2[n2(543)] + t2.padding), o2 = [{ x: a2 / 2, y: 0 }, { x: a2, y: -a2 / 2 }, { x: a2 / 2, y: -a2 }, { x: 0, y: -a2 / 2 }];
    s.info(`Question main (Circle)`);
    let c2 = J(r2, a2, a2, o2);
    return c2.attr(`style`, t2.style), q(t2, c2), t2.intersect = function(e4) {
      let r3 = n2;
      return s.warn(`Intersect called`), G[r3(591)](t2, o2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `question`), Pt = c((e2, t2) => {
  let n2 = P, r2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id);
  return r2.insert(n2(591), n2(524))[n2(599)](`points`, [{ x: 0, y: 28 / 2 }, { x: 28 / 2, y: 0 }, { x: 0, y: -28 / 2 }, { x: -28 / 2, y: 0 }].map(function(e3) {
    return e3.x + `,` + e3.y;
  }).join(` `)).attr(`class`, `state-start`).attr(`r`, 7).attr(`width`, 28).attr(`height`, 28), t2[n2(643)] = 28, t2[n2(543)] = 28, t2.intersect = function(e3) {
    return G.circle(t2, 14, e3);
  }, r2;
}, `choice`), Ft = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = t2.positioned ? t2.height : i2.height + t2.padding, o2 = a2 / 4, s2 = t2.positioned ? t2.width : i2.width + 2 * o2 + t2.padding, c2 = [{ x: o2, y: 0 }, { x: s2 - o2, y: 0 }, { x: s2, y: -a2 / 2 }, { x: s2 - o2, y: -a2 }, { x: o2, y: -a2 }, { x: 0, y: -a2 / 2 }], l2 = J(r2, s2, a2, c2);
    return l2.attr(`style`, t2.style), q(t2, l2), t2[n2(489)] = function(e4) {
      return G.polygon(t2, c2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `hexagon`), It = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, void 0, true), a2 = i2[n2(543)] + 2 * t2.padding, o2 = a2 / 2, s2 = i2.width + 2 * o2 + t2[n2(462)], c2 = t2.positioned && (t2[n2(544)] ?? 1) > 1 && t2.width > s2 ? t2[n2(643)] : s2, l2 = yt(t2.directions, i2, t2, c2), u2 = J(r2, c2, a2, l2);
    return u2[n2(599)](`style`, t2.style), q(t2, u2), t2.intersect = function(e4) {
      return G.polygon(t2, l2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), P(368)), Lt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2[n2(643)] + t2[n2(462)], o2 = i2.height + t2.padding, s2 = [{ x: -o2 / 2, y: 0 }, { x: a2, y: 0 }, { x: a2, y: -o2 }, { x: -o2 / 2, y: -o2 }, { x: 0, y: -o2 / 2 }];
    return J(r2, a2, o2, s2).attr(`style`, t2.style), t2.width = a2 + o2, t2.height = o2, t2.intersect = function(e4) {
      return G.polygon(t2, s2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `rect_left_inv_arrow`), Rt = c((function() {
  var e2 = r(function* (e3, t2) {
    let { shapeSvg: n2, bbox: r2 } = yield K(e3, t2, Y(t2), true), i2 = r2.width + t2.padding, a2 = r2.height + t2.padding, o2 = [{ x: -2 * a2 / 6, y: 0 }, { x: i2 - a2 / 6, y: 0 }, { x: i2 + 2 * a2 / 6, y: -a2 }, { x: a2 / 6, y: -a2 }], s2 = J(n2, i2, a2, o2);
    return s2.attr(`style`, t2.style), q(t2, s2), t2.intersect = function(e4) {
      return G.polygon(t2, o2, e4);
    }, n2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `lean_right`), zt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.width + t2.padding, o2 = i2.height + t2[n2(462)], s2 = [{ x: 2 * o2 / 6, y: 0 }, { x: a2 + o2 / 6, y: 0 }, { x: a2 - 2 * o2 / 6, y: -o2 }, { x: -o2 / 6, y: -o2 }], c2 = J(r2, a2, o2, s2);
    return c2.attr(`style`, t2.style), q(t2, c2), t2.intersect = function(e4) {
      return G.polygon(t2, s2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `lean_left`), Bt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.width + t2.padding, o2 = i2.height + t2.padding, s2 = [{ x: -2 * o2 / 6, y: 0 }, { x: a2 + 2 * o2 / 6, y: 0 }, { x: a2 - o2 / 6, y: -o2 }, { x: o2 / 6, y: -o2 }], c2 = J(r2, a2, o2, s2);
    return c2[n2(599)](`style`, t2[n2(471)]), q(t2, c2), t2.intersect = function(e4) {
      return G[n2(591)](t2, s2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `trapezoid`), Vt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.width + t2[n2(462)], o2 = i2.height + t2.padding, s2 = [{ x: o2 / 6, y: 0 }, { x: a2 - o2 / 6, y: 0 }, { x: a2 + 2 * o2 / 6, y: -o2 }, { x: -2 * o2 / 6, y: -o2 }], c2 = J(r2, a2, o2, s2);
    return c2.attr(`style`, t2.style), q(t2, c2), t2.intersect = function(e4) {
      return G.polygon(t2, s2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `inv_trapezoid`), Ht = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.width + t2.padding, o2 = i2.height + t2[n2(462)], s2 = [{ x: 0, y: 0 }, { x: a2 + o2 / 2, y: 0 }, { x: a2, y: -o2 / 2 }, { x: a2 + o2 / 2, y: -o2 }, { x: 0, y: -o2 }], c2 = J(r2, a2, o2, s2);
    return c2.attr(`style`, t2.style), q(t2, c2), t2[n2(489)] = function(e4) {
      return G.polygon(t2, s2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `rect_right_inv_arrow`), Ut = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.width + t2.padding, o2 = a2 / 2, s2 = o2 / (2.5 + a2 / 50), c2 = i2.height + s2 + t2.padding, l2 = `M 0,` + s2 + ` a ` + o2 + `,` + s2 + ` 0,0,0 ` + a2 + n2(499) + o2 + `,` + s2 + n2(548) + -a2 + ` 0 l 0,` + c2 + ` a ` + o2 + `,` + s2 + n2(548) + a2 + ` 0 l 0,` + -c2;
    return q(t2, r2[n2(599)](`label-offset-y`, s2).insert(n2(440), n2(524))[n2(599)](n2(471), t2[n2(471)])[n2(599)](`d`, l2).attr(`transform`, n2(621) + -a2 / 2 + `,` + -(c2 / 2 + s2) + `)`)), t2.intersect = function(e4) {
      let r3 = n2, i3 = G.rect(t2, e4), a3 = i3.x - t2.x;
      if (o2 != 0 && (Math[r3(555)](a3) < t2.width / 2 || Math[r3(555)](a3) == t2.width / 2 && Math.abs(i3.y - t2.y) > t2.height / 2 - s2)) {
        let n3 = s2 * s2 * (1 - a3 * a3 / (o2 * o2));
        n3 != 0 && (n3 = Math[r3(514)](n3)), n3 = s2 - n3, e4.y - t2.y > 0 && (n3 = -n3), i3.y += n3;
      }
      return i3;
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `cylinder`), Wt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2, halfPadding: a2 } = yield K(e3, t2, `node ` + t2.classes + ` ` + t2.class, true), o2 = r2.insert(`rect`, n2(524)), c2 = t2.positioned ? t2.width : i2.width + t2.padding, l2 = t2.positioned ? t2.height : i2.height + t2[n2(462)], u2 = t2.positioned ? -c2 / 2 : -i2.width / 2 - a2, d2 = t2.positioned ? -l2 / 2 : -i2[n2(543)] / 2 - a2;
    if (o2.attr(`class`, `basic label-container`).attr(`style`, t2.style)[n2(599)](`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, u2).attr(`y`, d2)[n2(599)](`width`, c2).attr(`height`, l2), t2.props) {
      let e4 = new Set(Object.keys(t2.props));
      t2.props.borders && (X(o2, t2.props[n2(581)], c2, l2), e4[n2(415)](`borders`)), e4.forEach((e5) => {
        let t3 = n2;
        s.warn(t3(485) + e5);
      });
    }
    return q(t2, o2), t2.intersect = function(e4) {
      return G[n2(612)](t2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `rect`), Gt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2, halfPadding: a2 } = yield K(e3, t2, n2(569) + t2.classes, true), o2 = r2.insert(`rect`, n2(524)), c2 = t2.positioned ? t2.width : i2.width + t2.padding, l2 = t2.positioned ? t2.height : i2.height + t2[n2(462)], u2 = t2.positioned ? -c2 / 2 : -i2[n2(643)] / 2 - a2, d2 = t2.positioned ? -l2 / 2 : -i2.height / 2 - a2;
    if (o2.attr(`class`, `basic cluster composite label-container`).attr(`style`, t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry)[n2(599)](`x`, u2).attr(`y`, d2).attr(n2(643), c2)[n2(599)](`height`, l2), t2.props) {
      let e4 = new Set(Object.keys(t2.props));
      t2.props.borders && (X(o2, t2.props.borders, c2, l2), e4[n2(415)](`borders`)), e4.forEach((e5) => {
        let t3 = n2;
        s.warn(t3(485) + e5);
      });
    }
    return q(t2, o2), t2.intersect = function(e4) {
      return G[n2(612)](t2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), P(457)), Kt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2 } = yield K(e3, t2, `label`, true);
    s.trace(`Classes = `, t2.class);
    let i2 = r2.insert(`rect`, `:first-child`);
    if (i2.attr(n2(643), 0).attr(n2(543), 0), r2[n2(599)](`class`, `label edgeLabel`), t2.props) {
      let e4 = new Set(Object.keys(t2.props));
      t2[n2(442)].borders && (X(i2, t2[n2(442)].borders, 0, 0), e4.delete(`borders`)), e4.forEach((e5) => {
        s[n2(443)](`Unknown node property ` + e5);
      });
    }
    return q(t2, i2), t2.intersect = function(e4) {
      return G.rect(t2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `labelRect`);
function X(e2, t2, n2, r2) {
  let i2 = P, a2 = [], o2 = c((e3) => {
    a2.push(e3, 0);
  }, `addBorder`), l2 = c((e3) => {
    a2.push(0, e3);
  }, `skipBorder`);
  t2.includes(`t`) ? (s.debug(`add top border`), o2(n2)) : l2(n2), t2.includes(`r`) ? (s.debug(`add right border`), o2(r2)) : l2(r2), t2.includes(`b`) ? (s.debug(i2(438)), o2(n2)) : l2(n2), t2.includes(`l`) ? (s.debug(`add left border`), o2(r2)) : l2(r2), e2[i2(599)](i2(534), a2.join(` `));
}
c(X, `applyNodePropertyBorders`);
var qt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, r2;
    r2 = t2.classes ? `node ` + t2.classes : n2(561);
    let i2 = e3.insert(`g`).attr(`class`, r2)[n2(599)](`id`, t2.domId || t2.id), a2 = i2.insert(n2(612), `:first-child`), c2 = i2.insert(n2(515)), u2 = i2.insert(`g`).attr(`class`, `label`), d2 = t2.labelText.flat ? t2.labelText.flat() : t2.labelText, f2 = ``;
    f2 = typeof d2 == n2(378) ? d2[0] : d2, s.info(`Label text abc79`, f2, d2, typeof d2 == `object`);
    let m2 = yield H(u2, f2, t2[n2(640)], true, true), h2 = { width: 0, height: 0 };
    if (l(p())) {
      let e4 = m2.children[0], t3 = o(m2);
      h2 = e4[n2(416)](), t3[n2(599)](`width`, h2.width), t3.attr(`height`, h2.height);
    }
    s[n2(390)](`Text 2`, d2);
    let g2 = d2.slice(1, d2.length), _2 = m2.getBBox(), v2 = yield H(u2, g2[n2(407)] ? g2.join(`<br/>`) : g2, t2[n2(640)], true, true);
    if (l(p())) {
      let e4 = v2.children[0], t3 = o(v2);
      h2 = e4.getBoundingClientRect(), t3.attr(`width`, h2.width), t3[n2(599)](`height`, h2[n2(543)]);
    }
    let y2 = t2.padding / 2;
    return o(v2)[n2(599)](`transform`, `translate( ` + (h2.width > _2[n2(643)] ? 0 : (_2.width - h2.width) / 2) + `, ` + (_2.height + y2 + 5) + `)`), o(m2).attr(n2(657), `translate( ` + (h2[n2(643)] < _2[n2(643)] ? 0 : -(_2[n2(643)] - h2.width) / 2) + `, 0)`), h2 = u2[n2(559)]().getBBox(), u2[n2(599)](`transform`, n2(621) + -h2.width / 2 + `, ` + (-h2.height / 2 - y2 + 3) + `)`), a2.attr(`class`, `outer title-state`)[n2(599)](`x`, -h2.width / 2 - y2).attr(`y`, -h2.height / 2 - y2).attr(n2(643), h2.width + t2[n2(462)]).attr(`height`, h2.height + t2.padding), c2.attr(`class`, `divider`).attr(`x1`, -h2.width / 2 - y2).attr(`x2`, h2.width / 2 + y2).attr(`y1`, -h2.height / 2 - y2 + _2[n2(543)] + y2).attr(`y2`, -h2.height / 2 - y2 + _2.height + y2), q(t2, a2), t2.intersect = function(e4) {
      return G.rect(t2, e4);
    }, i2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `rectWithTitle`), Jt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.height + t2[n2(462)], o2 = i2.width + a2 / 4 + t2.padding;
    return q(t2, r2.insert(`rect`, n2(524)).attr(`style`, t2.style).attr(`rx`, a2 / 2)[n2(599)](`ry`, a2 / 2)[n2(599)](`x`, -o2 / 2).attr(`y`, -a2 / 2).attr(`width`, o2).attr(`height`, a2)), t2[n2(489)] = function(e4) {
      return G.rect(t2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `stadium`), Yt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2, halfPadding: a2 } = yield K(e3, t2, Y(t2, void 0), true), o2 = r2[n2(495)](`circle`, n2(524));
    return o2[n2(599)](`style`, t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry)[n2(599)](`r`, i2.width / 2 + a2).attr(`width`, i2[n2(643)] + t2.padding).attr(n2(543), i2.height + t2.padding), s.info(`Circle main`), q(t2, o2), t2.intersect = function(e4) {
      return s.info(`Circle intersect`, t2, i2.width / 2 + a2, e4), G.circle(t2, i2.width / 2 + a2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `circle`), Xt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2, halfPadding: a2 } = yield K(e3, t2, Y(t2, void 0), true), o2 = r2.insert(`g`, `:first-child`), c2 = o2.insert(`circle`), l2 = o2.insert(`circle`);
    return o2.attr(`class`, t2.class), c2.attr(`style`, t2.style).attr(`rx`, t2.rx)[n2(599)](`ry`, t2.ry)[n2(599)](`r`, i2.width / 2 + a2 + 5).attr(`width`, i2.width + t2[n2(462)] + 10).attr(`height`, i2[n2(543)] + t2.padding + 10), l2.attr(n2(471), t2.style).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`r`, i2[n2(643)] / 2 + a2).attr(`width`, i2.width + t2.padding).attr(`height`, i2.height + t2.padding), s[n2(390)](`DoubleCircle main`), q(t2, c2), t2.intersect = function(e4) {
      let r3 = n2;
      return s.info(`DoubleCircle intersect`, t2, i2.width / 2 + a2 + 5, e4), G[r3(530)](t2, i2[r3(643)] / 2 + a2 + 5, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `doublecircle`), Zt = c((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = Q, { shapeSvg: r2, bbox: i2 } = yield K(e3, t2, Y(t2, void 0), true), a2 = i2.width + t2.padding, o2 = i2.height + t2.padding, s2 = [{ x: 0, y: 0 }, { x: a2, y: 0 }, { x: a2, y: -o2 }, { x: 0, y: -o2 }, { x: 0, y: 0 }, { x: -8, y: 0 }, { x: a2 + 8, y: 0 }, { x: a2 + 8, y: -o2 }, { x: -8, y: -o2 }, { x: -8, y: 0 }], c2 = J(r2, a2, o2, s2);
    return c2.attr(n2(471), t2[n2(471)]), q(t2, c2), t2.intersect = function(e4) {
      return G.polygon(t2, s2, e4);
    }, r2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `subroutine`), Qt = c((e2, t2) => {
  let n2 = P, r2 = e2.insert(`g`).attr(`class`, n2(561)).attr(`id`, t2.domId || t2.id), i2 = r2.insert(`circle`, `:first-child`);
  return i2.attr(`class`, n2(531))[n2(599)](`r`, 7)[n2(599)](`width`, 14).attr(n2(543), 14), q(t2, i2), t2[n2(489)] = function(e3) {
    return G.circle(t2, 7, e3);
  }, r2;
}, `start`), $t = c((e2, t2, n2) => {
  let r2 = P, i2 = e2.insert(`g`).attr(`class`, r2(561)).attr(`id`, t2.domId || t2.id), a2 = 70, o2 = 10;
  return n2 === `LR` && (a2 = 10, o2 = 70), q(t2, i2.append(`rect`).attr(`x`, -1 * a2 / 2).attr(`y`, -1 * o2 / 2).attr(`width`, a2).attr(`height`, o2).attr(r2(540), `fork-join`)), t2.height += t2.padding / 2, t2.width += t2.padding / 2, t2[r2(489)] = function(e3) {
    return G[r2(612)](t2, e3);
  }, i2;
}, P(473)), en = { rhombus: Nt, composite: Gt, question: Nt, rect: Wt, labelRect: Kt, rectWithTitle: qt, choice: Pt, circle: Yt, doublecircle: Xt, stadium: Jt, hexagon: Ft, block_arrow: It, rect_left_inv_arrow: Lt, lean_right: Rt, lean_left: zt, trapezoid: Bt, inv_trapezoid: Vt, rect_right_inv_arrow: Ht, cylinder: Ut, start: Qt, end: c((e2, t2) => {
  let n2 = P, r2 = e2[n2(495)](`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), i2 = r2.insert(`circle`, n2(524)), a2 = r2.insert(`circle`, `:first-child`);
  return a2[n2(599)](n2(540), `state-start`).attr(`r`, 7).attr(`width`, 14).attr(`height`, 14), i2[n2(599)](`class`, `state-end`).attr(`r`, 5).attr(`width`, 10).attr(n2(543), 10), q(t2, a2), t2[n2(489)] = function(e3) {
    return G[n2(530)](t2, 7, e3);
  }, r2;
}, `end`), note: jt, subroutine: Zt, fork: $t, join: $t, class_box: c((function() {
  var e2 = r(function* (e3, t2) {
    var _a;
    let n2 = Q, i2 = t2.padding / 2, a2;
    a2 = t2.classes ? `node ` + t2.classes : `node default`;
    let s2 = e3[n2(495)](`g`)[n2(599)](`class`, a2).attr(`id`, t2.domId || t2.id), c2 = s2.insert(`rect`, `:first-child`), u2 = s2.insert(`line`), d2 = s2.insert(`line`), f2 = 0, m2 = 4, h2 = s2.insert(`g`).attr(n2(540), n2(439)), g2 = 0, _2 = (_a = t2.classData.annotations) == null ? void 0 : _a[0], v2 = yield H(h2, t2[n2(593)].annotations[0] ? `\xAB` + t2.classData.annotations[0] + `\xBB` : ``, t2.labelStyle, true, true), y2 = v2.getBBox();
    if (l(p())) {
      let e4 = v2.children[0], t3 = o(v2);
      y2 = e4.getBoundingClientRect(), t3[n2(599)](n2(643), y2[n2(643)]), t3.attr(`height`, y2.height);
    }
    t2.classData.annotations[0] && (m2 += y2.height + 4, f2 += y2.width);
    let b2 = t2[n2(593)].label;
    t2.classData.type !== void 0 && t2[n2(593)].type !== `` && (l(p()) ? b2 += `&lt;` + t2.classData[n2(506)] + `&gt;` : b2 += `<` + t2.classData.type + `>`);
    let x2 = yield H(h2, b2, t2.labelStyle, true, true);
    o(x2).attr(`class`, `classTitle`);
    let S2 = x2.getBBox();
    if (l(p())) {
      let e4 = x2.children[0], t3 = o(x2);
      S2 = e4.getBoundingClientRect(), t3.attr(`width`, S2.width), t3.attr(`height`, S2[n2(543)]);
    }
    m2 += S2[n2(543)] + 4, S2.width > f2 && (f2 = S2[n2(643)]);
    let C2 = [];
    t2.classData.members[n2(597)]((function() {
      var e4 = r(function* (e5) {
        let n3 = Q, r2 = e5.getDisplayDetails(), i3 = r2.displayText;
        l(p()) && (i3 = i3.replace(/</g, `&lt;`).replace(/>/g, `&gt;`));
        let a3 = yield H(h2, i3, r2[n3(526)] ? r2.cssStyle : t2.labelStyle, true, true), s3 = a3.getBBox();
        if (l(p())) {
          let e6 = a3.children[0], t3 = o(a3);
          s3 = e6.getBoundingClientRect(), t3.attr(`width`, s3[n3(643)]), t3.attr(`height`, s3.height);
        }
        s3.width > f2 && (f2 = s3.width), m2 += s3.height + 4, C2.push(a3);
      });
      return function(t3) {
        return e4.apply(this, arguments);
      };
    })()), m2 += 8;
    let w2 = [];
    if (t2.classData.methods.forEach((function() {
      var e4 = r(function* (e5) {
        let n3 = Q, r2 = e5.getDisplayDetails(), i3 = r2[n3(383)];
        l(p()) && (i3 = i3.replace(/</g, `&lt;`).replace(/>/g, `&gt;`));
        let a3 = yield H(h2, i3, r2.cssStyle ? r2.cssStyle : t2.labelStyle, true, true), s3 = a3.getBBox();
        if (l(p())) {
          let e6 = a3.children[0], t3 = o(a3);
          s3 = e6.getBoundingClientRect(), t3[n3(599)](`width`, s3.width), t3[n3(599)](`height`, s3.height);
        }
        s3.width > f2 && (f2 = s3.width), m2 += s3.height + 4, w2.push(a3);
      });
      return function(t3) {
        return e4[Q(418)](this, arguments);
      };
    })()), m2 += 8, _2) {
      let e4 = (f2 - y2[n2(643)]) / 2;
      o(v2)[n2(599)](`transform`, n2(427) + (-1 * f2 / 2 + e4) + `, ` + -1 * m2 / 2 + `)`), g2 = y2.height + 4;
    }
    let T2 = (f2 - S2.width) / 2;
    return o(x2).attr(n2(657), `translate( ` + (-1 * f2 / 2 + T2) + `, ` + (-1 * m2 / 2 + g2) + `)`), g2 += S2.height + 4, u2.attr(`class`, `divider`).attr(`x1`, -f2 / 2 - i2)[n2(599)](`x2`, f2 / 2 + i2).attr(`y1`, -m2 / 2 - i2 + 8 + g2).attr(`y2`, -m2 / 2 - i2 + 8 + g2), g2 += 8, C2.forEach((e4) => {
      let t3 = n2;
      o(e4).attr(`transform`, `translate( ` + -f2 / 2 + `, ` + (-1 * m2 / 2 + g2 + 8 / 2) + `)`);
      let r2 = e4 == null ? void 0 : e4.getBBox();
      g2 += ((r2 == null ? void 0 : r2[t3(543)]) ?? 0) + 4;
    }), g2 += 8, d2.attr(n2(540), n2(542)).attr(`x1`, -f2 / 2 - i2)[n2(599)](`x2`, f2 / 2 + i2)[n2(599)](`y1`, -m2 / 2 - i2 + 8 + g2).attr(`y2`, -m2 / 2 - i2 + 8 + g2), g2 += 8, w2.forEach((e4) => {
      let t3 = n2;
      o(e4)[t3(599)](`transform`, `translate( ` + -f2 / 2 + `, ` + (-1 * m2 / 2 + g2) + `)`);
      let r2 = e4 == null ? void 0 : e4.getBBox();
      g2 += ((r2 == null ? void 0 : r2.height) ?? 0) + 4;
    }), c2.attr(`style`, t2[n2(471)]).attr(`class`, `outer title-state`)[n2(599)](`x`, -f2 / 2 - i2).attr(`y`, -(m2 / 2) - i2).attr(`width`, f2 + t2.padding).attr(`height`, m2 + t2.padding), q(t2, c2), t2.intersect = function(e4) {
      return G.rect(t2, e4);
    }, s2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `class_box`) }, Z = {}, tn = c((function() {
  var e2 = r(function* (e3, t2, n2) {
    let r2 = Q, i2, a2;
    if (t2.link) {
      let o2;
      p().securityLevel === r2(373) ? o2 = `_top` : t2.linkTarget && (o2 = t2.linkTarget || `_blank`), i2 = e3.insert(`svg:a`).attr(`xlink:href`, t2.link)[r2(599)](`target`, o2), a2 = yield en[t2[r2(616)]](i2, t2, n2);
    } else a2 = yield en[t2.shape](e3, t2, n2), i2 = a2;
    return t2[r2(464)] && a2.attr(`title`, t2[r2(464)]), t2.class && a2.attr(`class`, `node default ` + t2.class), Z[t2.id] = i2, t2.haveCallback && Z[t2.id][r2(599)](`class`, Z[t2.id][r2(599)](`class`) + ` clickable`), i2;
  });
  return function(t2, n2, r2) {
    return e2.apply(this, arguments);
  };
})(), `insertNode`), nn = c((e2) => {
  let t2 = P, n2 = Z[e2.id];
  s[t2(606)](`Transforming node`, e2.diff, e2, `translate(` + (e2.x - e2.width / 2 - 5) + `, ` + e2.width / 2 + `)`);
  let r2 = e2.diff || 0;
  return e2.clusterNode ? n2.attr(`transform`, `translate(` + (e2.x + r2 - e2.width / 2) + `, ` + (e2.y - e2.height / 2 - 8) + `)`) : n2.attr(`transform`, `translate(` + e2.x + `, ` + e2.y + `)`), r2;
}, `positionNode`);
function Q(e2, t2) {
  return e2 -= 365, V()[e2];
}
function rn(e2, t2, n2 = false) {
  let r2 = P;
  var i2, a2;
  let o2 = e2, s2 = r2(579);
  ((o2 == null || (i2 = o2.classes) == null ? void 0 : i2[r2(498)]) || 0) > 0 && (s2 = ((o2 == null ? void 0 : o2.classes) ?? []).join(` `)), s2 += r2(622);
  let c2 = 0, l2 = ``, u2;
  switch (o2.type) {
    case `round`:
      c2 = 5, l2 = `rect`;
      break;
    case `composite`:
      c2 = 0, l2 = `composite`, u2 = 0;
      break;
    case `square`:
      l2 = `rect`;
      break;
    case `diamond`:
      l2 = `question`;
      break;
    case `hexagon`:
      l2 = `hexagon`;
      break;
    case `block_arrow`:
      l2 = `block_arrow`;
      break;
    case `odd`:
      l2 = `rect_left_inv_arrow`;
      break;
    case r2(507):
      l2 = r2(507);
      break;
    case `lean_left`:
      l2 = `lean_left`;
      break;
    case `trapezoid`:
      l2 = `trapezoid`;
      break;
    case `inv_trapezoid`:
      l2 = `inv_trapezoid`;
      break;
    case r2(539):
      l2 = `rect_left_inv_arrow`;
      break;
    case `circle`:
      l2 = `circle`;
      break;
    case `ellipse`:
      l2 = `ellipse`;
      break;
    case `stadium`:
      l2 = `stadium`;
      break;
    case `subroutine`:
      l2 = r2(470);
      break;
    case `cylinder`:
      l2 = `cylinder`;
      break;
    case `group`:
      l2 = `rect`;
      break;
    case `doublecircle`:
      l2 = `doublecircle`;
      break;
    default:
      l2 = r2(612);
  }
  let d2 = ne((o2 == null ? void 0 : o2.styles) ?? []), f2 = o2.label, p2 = o2.size ?? { width: 0, height: 0, x: 0, y: 0 }, m2 = t2.getDiagramId();
  return { labelStyle: d2[r2(640)], shape: l2, labelText: f2, rx: c2, ry: c2, class: s2, style: d2.style, id: o2.id, domId: m2 ? m2 + `-` + o2.id : o2.id, directions: o2.directions, width: p2[r2(643)], height: p2.height, x: p2.x, y: p2.y, positioned: n2, intersect: void 0, type: o2.type, padding: u2 ?? ((a2 = _()) == null || (a2 = a2.block) == null ? void 0 : a2.padding) ?? 0, widthInColumns: o2.widthInColumns ?? 1 };
}
c(rn, `getNodeFromBlock`);
function an(e2, t2, n2) {
  return on.apply(this, arguments);
}
function on() {
  return on = r(function* (e2, t2, n2) {
    let r2 = Q, i2 = rn(t2, n2, false);
    if (i2.type === `group`) return;
    let a2 = yield tn(e2, i2, { config: _() }), o2 = a2.node().getBBox(), s2 = n2.getBlock(i2.id);
    s2.size = { width: o2[r2(643)], height: o2[r2(543)], x: 0, y: 0, node: a2 }, n2[r2(454)](s2), a2.remove();
  }), on.apply(this, arguments);
}
c(an, `calculateBlockSize`);
function sn(e2, t2, n2) {
  return cn.apply(this, arguments);
}
function cn() {
  return cn = r(function* (e2, t2, n2) {
    let r2 = rn(t2, n2, true);
    n2.getBlock(r2.id).type !== `space` && (yield tn(e2, r2, { config: _() }), t2.intersect = r2 == null ? void 0 : r2.intersect, nn(r2));
  }), cn.apply(this, arguments);
}
c(sn, `insertBlockPositioned`);
function $(e2, t2, n2, r2) {
  return ln.apply(this, arguments);
}
function ln() {
  return ln = r(function* (e2, t2, n2, r2) {
    for (let i2 of t2) yield r2(e2, i2, n2), i2.children && (yield $(e2, i2.children, n2, r2));
  }), ln.apply(this, arguments);
}
c($, `performOperations`);
function un(e2, t2, n2) {
  return dn[P(418)](this, arguments);
}
function dn() {
  let e2 = P;
  return dn = r(function* (e3, t2, n2) {
    yield $(e3, t2, n2, an);
  }), dn[e2(418)](this, arguments);
}
c(un, `calculateBlockSizes`);
function fn(e2, t2, n2) {
  return pn.apply(this, arguments);
}
function pn() {
  let e2 = P;
  return pn = r(function* (e3, t2, n2) {
    yield $(e3, t2, n2, sn);
  }), pn[e2(418)](this, arguments);
}
c(fn, P(646));
function mn(e2, t2, n2, r2, i2) {
  return hn.apply(this, arguments);
}
function hn() {
  return hn = r(function* (t2, n2, r2, i2, a2) {
    let o2 = Q, s2 = new ye({ multigraph: true, compound: true });
    s2.setGraph({ rankdir: `TB`, nodesep: 10, ranksep: 10, marginx: 8, marginy: 8 });
    for (let e2 of r2) e2[o2(374)] && s2.setNode(e2.id, { width: e2.size[o2(643)], height: e2.size.height, intersect: e2.intersect });
    for (let r3 of n2) if (r3.start && r3[o2(577)]) {
      let n3 = i2.getBlock(r3.start), c2 = i2.getBlock(r3.end);
      if (n3 != null && n3.size && c2 != null && c2[o2(374)]) {
        let i3 = n3.size, l2 = c2.size, u2 = [{ x: i3.x, y: i3.y }, { x: i3.x + (l2.x - i3.x) / 2, y: i3.y + (l2.y - i3.y) / 2 }, { x: l2.x, y: l2.y }], d2 = a2 ? a2 + `-` + r3.id : r3.id, f2 = (r3.thickness === `thick` ? o2(474) : `edge-thickness-normal`) + ` ` + (r3.pattern === `dotted` ? `edge-pattern-dotted` : `edge-pattern-solid`) + ` flowchart-link LS-a1 LE-b1`;
        _t(t2, { v: r3.start, w: r3[o2(577)], name: d2 }, e(e({}, r3), {}, { id: d2, arrowTypeEnd: r3.arrowTypeEnd, arrowTypeStart: r3[o2(414)], points: u2, classes: f2 }), void 0, `block`, s2, a2), r3.label && (yield ft(t2, e(e({}, r3), {}, { label: r3.label, labelStyle: `stroke: #333; stroke-width: 1.5px;fill:none;`, arrowTypeEnd: r3[o2(558)], arrowTypeStart: r3[o2(414)], points: u2, classes: f2 })), pt(e(e({}, r3), {}, { x: u2[1].x, y: u2[1].y }), { originalPath: u2 }));
      }
    }
  }), hn.apply(this, arguments);
}
c(mn, `insertEdges`);
var gn = { parser: Oe, db: Ze, renderer: { draw: c((function() {
  var e2 = r(function* (e3, t2, n2, r2) {
    let i2 = Q, { securityLevel: a2, block: c2 } = _(), l2 = r2.db;
    l2.setDiagramId(t2);
    let u2;
    a2 === `sandbox` && (u2 = o(`#i` + t2));
    let d2 = o(a2 === `sandbox` ? u2[i2(533)]()[0].contentDocument.body : `body`), f2 = a2 === `sandbox` ? d2.select(`[id="` + t2 + `"]`) : o(i2(468) + t2 + `"]`);
    nt(f2, [i2(444), `circle`, `cross`], r2.type, t2);
    let p2 = l2.getBlocks(), m2 = l2.getBlocksFlat(), h2 = l2.getEdges(), v2 = f2[i2(495)](`g`).attr(`class`, i2(551));
    yield un(v2, p2, l2);
    let y2 = st(l2);
    if (yield fn(v2, p2, l2), yield mn(v2, h2, m2, l2, t2), y2) {
      let e4 = y2, t3 = Math.max(1, Math.round(0.125 * (e4.width / e4.height))), n3 = e4[i2(543)] + t3 + 10, r3 = e4.width + 10, { useMaxWidth: a3 } = c2;
      g(f2, n3, r3, !!a3), s.debug(`Here Bounds`, y2, e4), f2.attr(`viewBox`, e4.x - 5 + ` ` + (e4.y - 5) + ` ` + (e4.width + 10) + ` ` + (e4[i2(543)] + 10));
    }
  });
  return function(t2, n2, r2, i2) {
    return e2.apply(this, arguments);
  };
})(), `draw`), getClasses: c(function(e2, t2) {
  return t2.db.getClasses();
}, `getClasses`) }, styles: $e };
export {
  gn as diagram
};
