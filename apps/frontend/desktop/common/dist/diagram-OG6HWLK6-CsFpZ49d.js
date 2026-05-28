import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { m as i } from "./src-B18GHWxx.js";
import { r as a } from "./defaultLocale-BPnJm4Jq.js";
import { t as o } from "./ordinal-Dn-wPUXi.js";
import { _ as s } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as c, t as l } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as u, E as d, W as f, X as p, Z as m, c as h, j as g, k as _, q as v, s as y, z as b } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h as x } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as S } from "./chunk-WU5MYG2G-BnIisATw.js";
import { t as C } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
import { r as w, t as T } from "./chunk-NZK2D7GU-Bb3JacnP.js";
import { t as E } from "./chunk-2J33WTMH-DU_MCT0n.js";
var D = z;
(function(e3, t2) {
  let n2 = z, r2 = e3();
  for (; ; ) try {
    if (parseInt(n2(541)) / 1 + -parseInt(n2(557)) / 2 + -parseInt(n2(586)) / 3 + parseInt(n2(500)) / 4 * (-parseInt(n2(546)) / 5) + -parseInt(n2(528)) / 6 * (parseInt(n2(558)) / 7) + parseInt(n2(583)) / 8 + -parseInt(n2(560)) / 9 * (-parseInt(n2(539)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(M, 857009);
function O(e3) {
  let t2 = z;
  var n2 = 0, r2 = e3.children, i2 = r2 && r2.length;
  if (!i2) n2 = 1;
  else for (; --i2 >= 0; ) n2 += r2[i2][t2(559)];
  e3.value = n2;
}
function k() {
  let e3 = z;
  return this[e3(568)](O);
}
function A(e3, t2) {
  let n2 = -1;
  for (let r2 of this) e3.call(t2, r2, ++n2, this);
  return this;
}
function j(e3, t2) {
  for (var n2 = this, r2 = [n2], i2, a2, o2 = -1; n2 = r2.pop(); ) if (e3.call(t2, n2, ++o2, this), i2 = n2.children) for (a2 = i2.length - 1; a2 >= 0; --a2) r2.push(i2[a2]);
  return this;
}
function M() {
  let e3 = `level,15204xQlZVl,fill:,titleColor,data,function,eachBefore,parent,dominant-baseline,;
    stroke-width: ,ancestors,stroke-width,cScalePeer4,each,styleText,valueFormat,treemap,getAccDescription,;
    font-size: ,valueFontSize,cScaleLabel8,font-weight,clipPath,sort,showValues,children,replace,styles,length,6TaKCRG,pop,min,classes,getDiagramTitle,get,startsWith,splice,;
  }
  ,iterator,display,13290mgdpDp,leafStrokeWidth,1175683jBlzcE,substring,leafFillColor,black,push,1145bMDwRs,class,depth,...,clip-path,call,10px,useMaxWidth,paddingRight,font-size,Leaf,2820596CmgrjT,1030687HvorPc,value,6507YgMLhy,cScalePeer9,cScalePeer0,dominant-baseline: middle; font-size: 12px; fill:,append,className,text,valueColor,eachAfter,node,nodes,url(#clip-,name,select,max,attr,getConfig,type,font-style,textStyles,paddingTop,width,clear,12401456meSvhv,descendants,Treemap AST:,1205265JQHFhD,root,selectAll,round,addClass,Error parsing treemap:,labelFontSize,style,clip-section-,rect,ClassDefStatement,populate`.split(`,`);
  return M = function() {
    return e3;
  }, M();
}
function N(e3, t2) {
  let n2 = z;
  for (var r2 = this, i2 = [r2], a2 = [], o2, s2, c2, l2 = -1; r2 = i2[n2(529)](); ) if (a2.push(r2), o2 = r2.children) for (s2 = 0, c2 = o2.length; s2 < c2; ++s2) i2.push(o2[s2]);
  for (; r2 = a2.pop(); ) e3[n2(551)](t2, r2, ++l2, this);
  return this;
}
function P(e3, t2) {
  let n2 = -1;
  for (let r2 of this) if (e3.call(t2, r2, ++n2, this)) return r2;
}
function F(e3) {
  return this.eachAfter(function(t2) {
    for (var n2 = +e3(t2.data) || 0, r2 = t2.children, i2 = r2 && r2.length; --i2 >= 0; ) n2 += r2[i2].value;
    t2.value = n2;
  });
}
function I(e3) {
  let t2 = z;
  return this[t2(505)](function(n2) {
    let r2 = t2;
    n2.children && n2.children[r2(522)](e3);
  });
}
function L(e3) {
  let t2 = z;
  for (var n2 = this, r2 = R(n2, e3), i2 = [n2]; n2 !== r2; ) n2 = n2.parent, i2.push(n2);
  for (var a2 = i2.length; e3 !== r2; ) i2[t2(535)](a2, 0, e3), e3 = e3.parent;
  return i2;
}
function R(e3, t2) {
  let n2 = z;
  if (e3 === t2) return e3;
  var r2 = e3.ancestors(), i2 = t2[n2(509)](), a2 = null;
  for (e3 = r2.pop(), t2 = i2.pop(); e3 === t2; ) a2 = e3, e3 = r2.pop(), t2 = i2.pop();
  return a2;
}
function ee() {
  for (var e3 = this, t2 = [e3]; e3 = e3.parent; ) t2.push(e3);
  return t2;
}
function te() {
  return Array.from(this);
}
function ne() {
  var e3 = [];
  return this.eachBefore(function(t2) {
    t2.children || e3.push(t2);
  }), e3;
}
function re() {
  var e3 = this, t2 = [];
  return e3.each(function(n2) {
    let r2 = z;
    n2 !== e3 && t2.push({ source: n2[r2(506)], target: n2 });
  }), t2;
}
function z(e3, t2) {
  return e3 -= 494, M()[e3];
}
function* B() {
  let e3 = z;
  var t2 = this, n2, r2 = [t2], i2, a2, o2;
  do
    for (n2 = r2.reverse(), r2 = []; t2 = n2.pop(); ) if (yield t2, i2 = t2[e3(524)]) for (a2 = 0, o2 = i2.length; a2 < o2; ++a2) r2.push(i2[a2]);
  while (r2.length);
}
function V(e3, t2) {
  e3 instanceof Map ? (e3 = [void 0, e3], t2 === void 0 && (t2 = W)) : t2 === void 0 && (t2 = U);
  for (var n2 = new G(e3), r2, i2 = [n2], a2, o2, s2, c2; r2 = i2.pop(); ) if ((o2 = t2(r2.data)) && (c2 = (o2 = Array.from(o2)).length)) for (r2.children = o2, s2 = c2 - 1; s2 >= 0; --s2) i2.push(a2 = o2[s2] = new G(o2[s2])), a2.parent = r2, a2.depth = r2.depth + 1;
  return n2.eachBefore(ae);
}
function H() {
  return V(this).eachBefore(ie);
}
function U(e3) {
  return e3.children;
}
function W(e3) {
  return Array.isArray(e3) ? e3[1] : null;
}
function ie(e3) {
  e3.data.value !== void 0 && (e3.value = e3.data.value), e3.data = e3.data.data;
}
function ae(e3) {
  var t2 = 0;
  do
    e3.height = t2;
  while ((e3 = e3.parent) && e3.height < ++t2);
}
function G(e3) {
  this.data = e3, this.depth = this.height = 0, this.parent = null;
}
G.prototype = V.prototype = { constructor: G, count: k, each: A, eachAfter: N, eachBefore: j, find: P, sum: F, sort: I, path: L, ancestors: ee, descendants: te, leaves: ne, links: re, copy: H, [Symbol[D(537)]]: B };
function oe(e3) {
  if (typeof e3 != `function`) throw Error();
  return e3;
}
function K() {
  return 0;
}
function q(e3) {
  return function() {
    return e3;
  };
}
function se(e3) {
  e3.x0 = Math.round(e3.x0), e3.y0 = Math.round(e3.y0), e3.x1 = Math.round(e3.x1), e3.y1 = Math.round(e3.y1);
}
function ce(e3, t2, n2, r2, i2) {
  for (var a2 = e3.children, o2, s2 = -1, c2 = a2.length, l2 = e3.value && (r2 - t2) / e3.value; ++s2 < c2; ) o2 = a2[s2], o2.y0 = n2, o2.y1 = i2, o2.x0 = t2, o2.x1 = t2 += o2.value * l2;
}
function le(e3, t2, n2, r2, i2) {
  let a2 = D;
  for (var o2 = e3.children, s2, c2 = -1, l2 = o2[a2(527)], u2 = e3.value && (i2 - n2) / e3.value; ++c2 < l2; ) s2 = o2[c2], s2.x0 = t2, s2.x1 = r2, s2.y0 = n2, s2.y1 = n2 += s2.value * u2;
}
var ue = (1 + Math.sqrt(5)) / 2;
function de(e3, t2, n2, r2, i2, a2) {
  let o2 = D;
  for (var s2 = [], c2 = t2.children, l2, u2, d2 = 0, f2 = 0, p2 = c2[o2(527)], m2, h2, g2 = t2.value, _2, v2, y2, b2, x2, S2, C2; d2 < p2; ) {
    m2 = i2 - n2, h2 = a2 - r2;
    do
      _2 = c2[f2++].value;
    while (!_2 && f2 < p2);
    for (v2 = y2 = _2, S2 = Math.max(h2 / m2, m2 / h2) / (g2 * e3), C2 = _2 * _2 * S2, x2 = Math.max(y2 / C2, C2 / v2); f2 < p2; ++f2) {
      if (_2 += u2 = c2[f2].value, u2 < v2 && (v2 = u2), u2 > y2 && (y2 = u2), C2 = _2 * _2 * S2, b2 = Math[o2(574)](y2 / C2, C2 / v2), b2 > x2) {
        _2 -= u2;
        break;
      }
      x2 = b2;
    }
    s2[o2(545)](l2 = { value: _2, dice: m2 < h2, children: c2.slice(d2, f2) }), l2.dice ? ce(l2, n2, r2, i2, g2 ? r2 += h2 * _2 / g2 : a2) : le(l2, n2, r2, g2 ? n2 += m2 * _2 / g2 : i2, a2), g2 -= _2, d2 = f2;
  }
  return s2;
}
var fe = (function e2(t2) {
  function n2(e3, n3, r2, i2, a2) {
    de(t2, e3, n3, r2, i2, a2);
  }
  return n2.ratio = function(t3) {
    return e2((t3 = +t3) > 1 ? t3 : 1);
  }, n2;
})(ue);
function pe() {
  let e3 = D;
  var t2 = fe, n2 = false, r2 = 1, i2 = 1, a2 = [0], o2 = K, s2 = K, c2 = K, l2 = K, u2 = K;
  function d2(e4) {
    return e4.x0 = e4.y0 = 0, e4.x1 = r2, e4.y1 = i2, e4.eachBefore(f2), a2 = [0], n2 && e4.eachBefore(se), e4;
  }
  function f2(e4) {
    var n3 = a2[e4[z(548)]], r3 = e4.x0 + n3, i3 = e4.y0 + n3, d3 = e4.x1 - n3, f3 = e4.y1 - n3;
    d3 < r3 && (r3 = d3 = (r3 + d3) / 2), f3 < i3 && (i3 = f3 = (i3 + f3) / 2), e4.x0 = r3, e4.y0 = i3, e4.x1 = d3, e4.y1 = f3, e4.children && (n3 = a2[e4.depth + 1] = o2(e4) / 2, r3 += u2(e4) - n3, i3 += s2(e4) - n3, d3 -= c2(e4) - n3, f3 -= l2(e4) - n3, d3 < r3 && (r3 = d3 = (r3 + d3) / 2), f3 < i3 && (i3 = f3 = (i3 + f3) / 2), t2(e4, r3, i3, d3, f3));
  }
  return d2.round = function(e4) {
    return arguments.length ? (n2 = !!e4, d2) : n2;
  }, d2.size = function(e4) {
    return arguments.length ? (r2 = +e4[0], i2 = +e4[1], d2) : [r2, i2];
  }, d2.tile = function(e4) {
    return arguments.length ? (t2 = oe(e4), d2) : t2;
  }, d2.padding = function(e4) {
    return arguments.length ? d2.paddingInner(e4).paddingOuter(e4) : d2.paddingInner();
  }, d2.paddingInner = function(e4) {
    let t3 = z;
    return arguments[t3(527)] ? (o2 = typeof e4 == t3(504) ? e4 : q(+e4), d2) : o2;
  }, d2.paddingOuter = function(e4) {
    let t3 = z;
    return arguments.length ? d2.paddingTop(e4)[t3(554)](e4).paddingBottom(e4).paddingLeft(e4) : d2.paddingTop();
  }, d2.paddingTop = function(e4) {
    let t3 = z;
    return arguments[t3(527)] ? (s2 = typeof e4 == `function` ? e4 : q(+e4), d2) : s2;
  }, d2[e3(554)] = function(e4) {
    return arguments.length ? (c2 = typeof e4 == `function` ? e4 : q(+e4), d2) : c2;
  }, d2.paddingBottom = function(e4) {
    return arguments.length ? (l2 = typeof e4 == `function` ? e4 : q(+e4), d2) : l2;
  }, d2.paddingLeft = function(t3) {
    let n3 = e3;
    return arguments[n3(527)] ? (u2 = typeof t3 == `function` ? t3 : q(+t3), d2) : u2;
  }, d2;
}
t(), n();
var J, Y = (J = class {
  constructor() {
    let e3 = D;
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this[e3(531)] = /* @__PURE__ */ new Map(), this.setAccTitle = f, this.getAccTitle = p, this.setDiagramTitle = m, this.getDiagramTitle = g, this[e3(516)] = u, this.setAccDescription = _;
  }
  getNodes() {
    return this.nodes;
  }
  [D(576)]() {
    let t2 = y, n2 = b();
    return x(e(e({}, t2.treemap), n2.treemap ?? {}));
  }
  addNode(e3, t2) {
    let n2 = D;
    this.nodes.push(e3), this.levels.set(e3, t2), t2 === 0 && (this.outerNodes.push(e3), this.root ?? (this[n2(587)] = e3));
  }
  getRoot() {
    return { name: ``, children: this.outerNodes };
  }
  [D(590)](e3, t2) {
    let n2 = D, r2 = this.classes[n2(533)](e3) ?? { id: e3, styles: [], textStyles: [] }, i2 = t2.replace(/\\,/g, `\xA7\xA7\xA7`).replace(/,/g, `;`).replace(/§§§/g, `,`).split(`;`);
    i2 && i2.forEach((e4) => {
      let t3 = n2;
      T(e4) && (r2 != null && r2.textStyles ? r2.textStyles.push(e4) : r2[t3(579)] = [e4]), r2 != null && r2[t3(526)] ? r2.styles.push(e4) : r2.styles = [e4];
    }), this.classes.set(e3, r2);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(e3) {
    var _a;
    let t2 = D;
    return ((_a = this.classes[t2(533)](e3)) == null ? void 0 : _a.styles) ?? [];
  }
  [D(582)]() {
    let e3 = D;
    d(), this[e3(570)] = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, l(J, `TreeMapDB`), J);
function X(e3) {
  if (!e3.length) return [];
  let t2 = [], n2 = [];
  return e3.forEach((e4) => {
    let r2 = z, i2 = { name: e4.name, children: e4.type === r2(556) ? void 0 : [] };
    for (i2.classSelector = e4 == null ? void 0 : e4.classSelector, e4 != null && e4.cssCompiledStyles && (i2.cssCompiledStyles = e4.cssCompiledStyles), e4[r2(577)] === `Leaf` && e4.value !== void 0 && (i2.value = e4.value); n2.length > 0 && n2[n2[r2(527)] - 1].level >= e4[r2(499)]; ) n2[r2(529)]();
    if (n2[r2(527)] === 0) t2.push(i2);
    else {
      let e5 = n2[n2[r2(527)] - 1].node;
      e5.children ? e5.children[r2(545)](i2) : e5.children = [i2];
    }
    e4.type !== r2(556) && n2.push({ node: i2, level: e4.level });
  }), t2;
}
l(X, `buildHierarchy`);
var me = l((e3, t2) => {
  let n2 = D;
  C(e3, t2);
  let r2 = [];
  for (let r3 of e3.TreemapRows ?? []) r3.$type === n2(497) && t2.addClass(r3[n2(565)] ?? ``, r3[n2(513)] ?? ``);
  for (let n3 of e3.TreemapRows ?? []) {
    let e4 = n3.item;
    if (!e4) continue;
    let i3 = n3.indent ? parseInt(n3.indent) : 0, a3 = he(e4), o2 = e4.classSelector ? t2.getStylesForClass(e4.classSelector) : [], s2 = o2.length > 0 ? o2 : void 0, c2 = { level: i3, name: a3, type: e4.$type, value: e4.value, classSelector: e4.classSelector, cssCompiledStyles: s2 };
    r2.push(c2);
  }
  let i2 = X(r2), a2 = l((e4, r3) => {
    let i3 = n2;
    for (let n3 of e4) t2.addNode(n3, r3), n3.children && n3.children[i3(527)] > 0 && a2(n3[i3(524)], r3 + 1);
  }, `addNodesRecursively`);
  a2(i2, 0);
}, D(498)), he = l((e3) => e3.name ? String(e3.name) : ``, `getItemName`), Z = { parser: { yy: void 0 }, parse: l((function() {
  var e3 = r(function* (e4) {
    var _a;
    let t2 = z;
    try {
      let n2 = yield s(t2(515), e4);
      c.debug(t2(585), n2);
      let r2 = (_a = Z.parser) == null ? void 0 : _a.yy;
      if (!(r2 instanceof Y)) throw Error(`parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
      me(n2, r2);
    } catch (e5) {
      throw c.error(t2(591), e5), e5;
    }
  });
  return function(t2) {
    return e3.apply(this, arguments);
  };
})(), `parse`) }, ge = 10, Q = 10, $ = 25, _e = { draw: l((e3, t2, n2, r2) => {
  let s2 = D, u2 = r2.db, d2 = u2.getConfig(), f2 = d2.padding ?? ge, p2 = u2[s2(532)](), m2 = u2.getRoot(), { themeVariables: h2 } = b();
  if (!m2) return;
  let g2 = p2 ? 30 : 0, _2 = S(t2), y2 = d2.nodeWidth ? d2.nodeWidth * Q : 960, x2 = d2.nodeHeight ? d2.nodeHeight * Q : 500, C2 = y2, T2 = x2 + g2;
  _2[s2(575)](`viewBox`, `0 0 ` + C2 + ` ` + T2), v(_2, T2, C2, d2.useMaxWidth);
  let O2;
  try {
    let e4 = d2.valueFormat || `,`;
    if (e4 === `$0,0`) O2 = l((e5) => `$` + a(`,`)(e5), `valueFormat`);
    else if (e4.startsWith(`$`) && e4.includes(`,`)) {
      let t3 = /\.\d+/.exec(e4), n3 = t3 ? t3[0] : ``;
      O2 = l((e5) => `$` + a(`,` + n3)(e5), `valueFormat`);
    } else if (e4[s2(534)](`$`)) {
      let t3 = e4[s2(542)](1);
      O2 = l((e5) => `$` + a(t3 || ``)(e5), s2(514));
    } else O2 = a(e4);
  } catch (e4) {
    c.error(`Error creating format function:`, e4), O2 = a(`,`);
  }
  let k2 = o().range([`transparent`, h2.cScale0, h2.cScale1, h2.cScale2, h2.cScale3, h2.cScale4, h2.cScale5, h2.cScale6, h2.cScale7, h2.cScale8, h2.cScale9, h2.cScale10, h2.cScale11]), A2 = o().range([`transparent`, h2[s2(562)], h2.cScalePeer1, h2.cScalePeer2, h2.cScalePeer3, h2[s2(511)], h2.cScalePeer5, h2.cScalePeer6, h2.cScalePeer7, h2.cScalePeer8, h2[s2(561)], h2.cScalePeer10, h2.cScalePeer11]), j2 = o().range([h2.cScaleLabel0, h2.cScaleLabel1, h2.cScaleLabel2, h2.cScaleLabel3, h2.cScaleLabel4, h2.cScaleLabel5, h2.cScaleLabel6, h2.cScaleLabel7, h2[s2(519)], h2.cScaleLabel9, h2.cScaleLabel10, h2.cScaleLabel11]);
  p2 && _2.append(s2(566))[s2(575)](`x`, C2 / 2).attr(`y`, g2 / 2).attr(`class`, `treemapTitle`).attr(`text-anchor`, `middle`).attr(s2(507), `middle`).text(p2);
  let M2 = _2.append(`g`).attr(`transform`, `translate(0, ` + g2 + `)`).attr(`class`, `treemapContainer`), N2 = V(m2).sum((e4) => e4.value ?? 0)[s2(522)]((e4, t3) => (t3.value ?? 0) - (e4.value ?? 0)), P2 = pe().size([y2, x2])[s2(580)]((e4) => e4.children && e4.children[s2(527)] > 0 ? $ + Q : 0).paddingInner(f2).paddingLeft((e4) => e4.children && e4.children.length > 0 ? Q : 0).paddingRight((e4) => e4.children && e4.children.length > 0 ? Q : 0).paddingBottom((e4) => e4.children && e4[s2(524)].length > 0 ? Q : 0).round(true)(N2), F2 = P2[s2(584)]().filter((e4) => e4.children && e4.children[s2(527)] > 0), I2 = M2[s2(588)](`.treemapSection`).data(F2).enter().append(`g`)[s2(575)](`class`, `treemapSection`).attr(`transform`, (e4) => `translate(` + e4.x0 + `,` + e4.y0 + `)`);
  I2.append(s2(496)).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, $).attr(`class`, `treemapSectionHeader`)[s2(575)](`fill`, `none`).attr(`fill-opacity`, 0.6).attr(s2(510), 0.6).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : ``), I2[s2(564)](s2(521)).attr(`id`, (e4, n3) => s2(495) + t2 + `-` + n3).append(s2(496)).attr(s2(581), (e4) => Math.max(0, e4.x1 - e4.x0 - 12)).attr(`height`, $), I2.append(`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, (e4) => e4.y1 - e4.y0)[s2(575)](`class`, (e4, t3) => `treemapSection section` + t3).attr(`fill`, (e4) => k2(e4.data.name)).attr(`fill-opacity`, 0.6).attr(`stroke`, (e4) => A2(e4.data.name)).attr(s2(510), 2).attr(`stroke-opacity`, 0.4).attr(`style`, (e4) => {
    if (e4[s2(548)] === 0) return `display: none;`;
    let t3 = w({ cssCompiledStyles: e4.data.cssCompiledStyles });
    return t3.nodeStyles + `;` + t3.borderStyles.join(`;`);
  }), I2.append(s2(566)).attr(s2(547), `treemapSectionLabel`)[s2(575)](`x`, 6).attr(`y`, $ / 2).attr(`dominant-baseline`, `middle`).text((e4) => e4.depth === 0 ? `` : e4.data.name).attr(s2(520), `bold`).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : s2(563) + j2(e4.data[s2(572)]) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + w({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).each(function(e4) {
    let t3 = s2;
    if (e4[t3(548)] === 0) return;
    let n3 = i(this), r3 = e4.data.name;
    n3.text(r3);
    let a2 = e4.x1 - e4.x0, o2;
    o2 = d2.showValues !== false && e4.value ? a2 - 10 - 30 - 10 - 6 : a2 - 6 - 6;
    let c2 = Math.max(15, o2), l2 = n3[t3(569)]();
    if (l2.getComputedTextLength() > c2) {
      let e5 = r3;
      for (; e5.length > 0; ) {
        if (e5 = r3.substring(0, e5[t3(527)] - 1), e5.length === 0) {
          n3.text(t3(549)), l2.getComputedTextLength() > c2 && n3.text(``);
          break;
        }
        if (n3.text(e5 + `...`), l2.getComputedTextLength() <= c2) break;
      }
    }
  }), d2.showValues !== false && I2.append(`text`).attr(`class`, `treemapSectionValue`)[s2(575)](`x`, (e4) => e4.x1 - e4.x0 - 10).attr(`y`, $ / 2).attr(`text-anchor`, `end`)[s2(575)](`dominant-baseline`, `middle`).text((e4) => e4.value ? O2(e4.value) : ``).attr(s2(578), `italic`)[s2(575)](s2(494), (e4) => e4.depth === 0 ? `display: none;` : `text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:` + j2(e4.data.name) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + w({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, s2(501)));
  let L2 = P2.leaves(), R2 = M2[s2(588)](`.treemapLeafGroup`).data(L2).enter().append(`g`).attr(s2(547), (e4, t3) => `treemapNode treemapLeafGroup leaf` + t3 + (e4.data.classSelector ? ` ` + e4[s2(503)].classSelector : ``) + `x`).attr(`transform`, (e4) => `translate(` + e4.x0 + `,` + e4.y0 + `)`);
  R2[s2(564)](`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, (e4) => e4.y1 - e4.y0).attr(`class`, `treemapLeaf`).attr(`fill`, (e4) => e4.parent ? k2(e4.parent.data[s2(572)]) : k2(e4.data.name)).attr(s2(494), (e4) => w({ cssCompiledStyles: e4.data.cssCompiledStyles }).nodeStyles).attr(`fill-opacity`, 0.3).attr(`stroke`, (e4) => e4.parent ? k2(e4.parent.data[s2(572)]) : k2(e4.data.name)).attr(`stroke-width`, 3), R2.append(`clipPath`)[s2(575)](`id`, (e4, n3) => `clip-` + t2 + `-` + n3).append(s2(496))[s2(575)](s2(581), (e4) => Math.max(0, e4.x1 - e4.x0 - 4)).attr(`height`, (e4) => Math.max(0, e4.y1 - e4.y0 - 4)), R2.append(`text`).attr(`class`, `treemapLabel`).attr(`x`, (e4) => (e4.x1 - e4.x0) / 2).attr(`y`, (e4) => (e4.y1 - e4.y0) / 2).attr(`style`, (e4) => `text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:` + j2(e4.data.name) + `;` + w({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles[s2(525)](`color:`, `fill:`)).attr(`clip-path`, (e4, n3) => `url(#clip-` + t2 + `-` + n3 + `)`).text((e4) => e4.data[s2(572)])[s2(512)](function(e4) {
    let t3 = s2, n3 = i(this), r3 = e4.x1 - e4.x0, a2 = e4.y1 - e4.y0, o2 = n3.node(), c2 = r3 - 8, l2 = a2 - 8;
    if (c2 < 10 || l2 < 10) {
      n3.style(`display`, `none`);
      return;
    }
    let u3 = parseInt(n3.style(`font-size`), 10), d3 = 0.6;
    for (; o2.getComputedTextLength() > c2 && u3 > 8; ) u3--, n3.style(`font-size`, u3 + `px`);
    let f3 = Math.max(6, Math.min(28, Math[t3(589)](u3 * d3))), p3 = u3 + 2 + f3;
    for (; p3 > l2 && u3 > 8 && (u3--, f3 = Math.max(6, Math[t3(530)](28, Math.round(u3 * d3))), !(f3 < 6 && u3 === 8)); ) n3[t3(494)](`font-size`, u3 + `px`), p3 = u3 + 2 + f3;
    n3.style(t3(555), u3 + `px`), (o2.getComputedTextLength() > c2 || u3 < 8 || l2 < u3) && n3.style(t3(538), `none`);
  }), d2[s2(523)] !== false && R2[s2(564)](`text`)[s2(575)](`class`, `treemapValue`).attr(`x`, (e4) => (e4.x1 - e4.x0) / 2).attr(`y`, function(e4) {
    return (e4.y1 - e4.y0) / 2;
  }).attr(`style`, (e4) => `text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:` + j2(e4.data.name) + `;` + w({ cssCompiledStyles: e4[s2(503)].cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`))[s2(575)](s2(550), (e4, n3) => s2(571) + t2 + `-` + n3 + `)`).text((e4) => e4.value ? O2(e4.value) : ``).each(function(e4) {
    let t3 = s2, n3 = i(this), r3 = this.parentNode;
    if (!r3) {
      n3[t3(494)](`display`, `none`);
      return;
    }
    let a2 = i(r3)[t3(573)](`.treemapLabel`);
    if (a2.empty() || a2[t3(494)](t3(538)) === `none`) {
      n3.style(t3(538), `none`);
      return;
    }
    let o2 = parseFloat(a2.style(`font-size`)), c2 = Math.max(6, Math.min(28, Math.round(o2 * 0.6)));
    n3[t3(494)](`font-size`, c2 + `px`);
    let l2 = (e4.y1 - e4.y0) / 2 + o2 / 2 + 2;
    n3.attr(`y`, l2);
    let u3 = e4.x1 - e4.x0, d3 = e4.y1 - e4.y0 - 4, f3 = u3 - 8;
    n3.node().getComputedTextLength() > f3 || l2 + c2 > d3 || c2 < 6 ? n3.style(`display`, `none`) : n3.style(`display`, null);
  }), E(_2, d2.diagramPadding ?? 8, `flowchart`, (d2 == null ? void 0 : d2[s2(553)]) || false);
}, `draw`), getClasses: l(function(e3, t2) {
  return t2.db.getClasses();
}, `getClasses`) }, ve = { sectionStrokeColor: D(544), sectionStrokeWidth: `1`, sectionFillColor: `#efefef`, leafStrokeColor: `black`, leafStrokeWidth: `1`, leafFillColor: `#efefef`, labelFontSize: `12px`, valueFontSize: D(552), titleFontSize: `14px` }, ye = { parser: Z, get db() {
  return new Y();
}, renderer: _e, styles: l(({ treemap: e3 } = {}) => {
  let t2 = D, n2 = x(h(), b().themeVariables), r2 = x(ve, e3), i2 = r2.titleColor ?? n2[t2(502)], a2 = r2.labelColor ?? n2.textColor, o2 = r2[t2(567)] ?? n2.textColor;
  return `
  .treemapNode.section {
    stroke: ` + r2.sectionStrokeColor + `;
    stroke-width: ` + r2.sectionStrokeWidth + `;
    fill: ` + r2.sectionFillColor + `;
  }
  .treemapNode.leaf {
    stroke: ` + r2.leafStrokeColor + t2(508) + r2[t2(540)] + `;
    fill: ` + r2[t2(543)] + `;
  }
  .treemapLabel {
    fill: ` + a2 + `;
    font-size: ` + r2[t2(592)] + `;
  }
  .treemapValue {
    fill: ` + o2 + t2(517) + r2[t2(518)] + `;
  }
  .treemapTitle {
    fill: ` + i2 + `;
    font-size: ` + r2.titleFontSize + t2(536);
}, `getStyles`) };
export {
  ye as diagram
};
