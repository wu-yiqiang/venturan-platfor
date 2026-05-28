import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { _ as i } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as a, t as o } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as s, E as c, V as l, W as u, X as d, Z as f, c as p, j as m, k as h, q as g, z as _ } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h as v } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as y } from "./chunk-WU5MYG2G-BnIisATw.js";
import { t as b } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
var x = L;
(function(e2, t2) {
  let n2 = L, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(626)) / 1 + parseInt(n2(556)) / 2 * (-parseInt(n2(537)) / 3) + parseInt(n2(596)) / 4 * (-parseInt(n2(515)) / 5) + parseInt(n2(575)) / 6 + -parseInt(n2(605)) / 7 + parseInt(n2(590)) / 8 + parseInt(n2(593)) / 9 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(S, 883277);
function S() {
  let e2 = `component,attr,accelerators,gridColor,fill,className,central,;
  }
  .wardley-link--dashed {
    stroke-dasharray: 4 4;
  }
  .wardley-link-label {
    fill: ,trends,addDeaccelerator,wardley-outsource-overlay,negY,path,has,wardley-annotation-line,nodeId,wardley-build-overlay,font-size,3455328GnuZqo,sqrt,notes,values,number,;
  }
  .wardley-node circle {
    fill: ,wardley-title,pipeline-component,middle,map,pipelines,wardley,wardley-background,secondName,push,716808pTHkbo,text,wardley-market-overlay,23534685UgFkfn,evolutionStroke,addAccelerator,36coEwJh,axisTextColor,toCoordinates,labelOffsetX,evolution,axes,stroke-width,links,line,9279473qgtgbq,startsWith,bidirectional,setSize,setAnnotationsBox,primaryTextColor,cos,labelOffsetY,stroke,labelFontSize,isPipelineParent,pos,set,backgroundColor,target,componentIds,targetY,getNode,2 6,selectAll,nodes,265978MQRUwy,name,includes,updateAxes,addAnnotation,wardley-pipeline-links,flow,draw,bold,wardley-market-line,height,source,toPort,length,4 4,arrow,data,sourceStrategy,apply,stages,rect,buy,get,filter,
        L ,marker-end,white,deaccelerators,orient,663150jIqUEX,markerHeight,annotations,font-weight,class,boundary,circle,+<>,Pipeline component ",getWardleyData,componentStroke,wardley-beta,forEach,auto,nodeRadius,#ccc,viewBox,append,none,
  .wardley-background {
    fill: ,transform,label,3lTpqgG,addTrend,annotationsBox,;
    stroke: ,padding,nodeLabelOffset,size,defs,text-anchor,start,addNode,axisFontSize,0 0 10 10,max,sin,annotationTextColor,linkStroke,annotationStroke,anchor,287692oLHEmm`.split(`,`);
  return S = function() {
    return e2;
  }, S();
}
n(), t();
var C, w = o((e2, t2) => {
  let n2 = e2 <= 1 ? e2 * 100 : e2;
  if (n2 < 0 || n2 > 100) throw Error(t2 + ` must be between 0-1 (decimal) or 0-100 (percentage). Received: ` + e2);
  return n2;
}, `toPercent`), T = o((e2, t2, n2) => ({ x: w(t2, n2 + ` evolution`), y: w(e2, n2 + ` visibility`) }), x(598)), E = o((e2) => {
  let t2 = x;
  if (e2) {
    if (e2 === t2(522)) return t2(607);
    if (e2 === `+<`) return `backward`;
    if (e2 === `+>`) return `forward`;
  }
}, `getFlowFromPort`), D = o((e2) => {
  var _a;
  let t2 = x;
  if (!(e2 != null && e2[t2(606)](`+`))) return {};
  let n2 = (_a = /^\+'([^']*)'/.exec(e2)) == null ? void 0 : _a[1];
  return e2.includes(`<>`) ? { flow: `bidirectional`, label: n2 } : e2[t2(628)](`<`) ? { flow: `backward`, label: n2 } : e2.includes(`>`) ? { flow: `forward`, label: n2 } : { label: n2 };
}, `extractFlowFromArrow`), O = o((e2, t2) => {
  let n2 = x;
  if (b(e2, t2), e2.size && t2.setSize(e2.size.width, e2.size[n2(496)]), e2.evolution) {
    let r2 = e2.evolution.stages[n2(584)]((e3) => e3[n2(588)] ? e3.name.trim() + ` / ` + e3.secondName.trim() : e3.name.trim()), i2 = e2[n2(600)][n2(505)].filter((e3) => e3.boundary !== void 0).map((e3) => e3[n2(520)]);
    t2[n2(489)]({ stages: r2, stageBoundaries: i2 });
  }
  if (e2.anchors.forEach((e3) => {
    let r2 = n2, i2 = T(e3.visibility, e3.evolution, `Anchor "` + e3[r2(627)] + `"`);
    t2.addNode(e3.name, e3.name, i2.x, i2.y, `anchor`);
  }), e2.components.forEach((e3) => {
    var _a;
    let r2 = n2, i2 = T(e3.visibility, e3.evolution, `Component "` + e3[r2(627)] + `"`), a2 = e3.label ? (e3.label.negX ? -1 : 1) * e3.label.offsetX : void 0, o2 = e3.label ? (e3.label[r2(568)] ? -1 : 1) * e3.label.offsetY : void 0, s2 = (_a = e3.decorator) == null ? void 0 : _a.strategy;
    t2[r2(547)](e3[r2(627)], e3.name, i2.x, i2.y, `component`, a2, o2, e3.inertia, s2);
  }), e2.notes.forEach((e3) => {
    let r2 = n2, i2 = T(e3.visibility, e3[r2(600)], `Note "` + e3.text + `"`);
    t2.addNote(e3.text, i2.x, i2.y);
  }), e2.pipelines.forEach((e3) => {
    let r2 = n2, i2 = t2[r2(622)](e3.parent);
    if (!i2 || typeof i2.y != `number`) throw Error(`Pipeline "` + e3.parent + `" must reference an existing component with coordinates.`);
    let a2 = i2.y;
    t2.startPipeline(e3.parent), e3.components.forEach((n3) => {
      let i3 = r2, o2 = e3.parent + `_` + n3.name, s2 = n3.label ? (n3.label.negX ? -1 : 1) * n3.label.offsetX : void 0, c2 = n3.label ? (n3.label.negY ? -1 : 1) * n3[i3(536)].offsetY : void 0, l2 = w(n3.evolution, i3(523) + n3.name + `" evolution`);
      t2.addNode(o2, n3.name, l2, a2, i3(582), s2, c2), t2.addPipelineComponent(e3.parent, o2);
    });
  }), e2[n2(603)][n2(527)]((e3) => {
    let r2 = n2, i2 = !!e3[r2(501)] && (e3.arrow.includes(`-.->`) || e3.arrow.includes(`.-.`)), a2 = E(e3.fromPort) ?? E(e3[r2(498)]), { flow: o2, label: s2 } = D(e3.arrow);
    !a2 && o2 && (a2 = o2);
    let c2 = e3.linkLabel, l2 = s2 ?? c2;
    t2.addLink(t2.resolveNodeId(e3.from), t2.resolveNodeId(e3.to), i2, l2, a2);
  }), e2.evolves.forEach((e3) => {
    let r2 = n2, i2 = t2.getNode(e3.component);
    if ((i2 == null ? void 0 : i2.y) !== void 0) {
      let n3 = w(e3.target, `Evolve target for "` + e3[r2(557)] + `"`);
      t2[r2(538)](e3.component, n3, i2.y);
    }
  }), e2.annotations.length > 0) {
    let n3 = e2.annotations[0], r2 = T(n3.x, n3.y, `Annotations box`);
    t2.setAnnotationsBox(r2.x, r2.y);
  }
  e2.annotation[n2(527)]((e3) => {
    let n3 = T(e3.x, e3.y, `Annotation ` + e3.number);
    t2.addAnnotation(e3.number, [{ x: n3.x, y: n3.y }], e3.text);
  }), e2.accelerators.forEach((e3) => {
    let r2 = n2, i2 = T(e3.x, e3.y, `Accelerator "` + e3[r2(627)] + `"`);
    t2.addAccelerator(e3[r2(627)], i2.x, i2.y);
  }), e2[n2(513)].forEach((e3) => {
    let n3 = T(e3.x, e3.y, `Deaccelerator "` + e3.name + `"`);
    t2.addDeaccelerator(e3.name, n3.x, n3.y);
  });
}, `populateDb`), k = { parser: { yy: void 0 }, parse: o((function() {
  var e2 = r(function* (e3) {
    var _a;
    let t2 = yield i(`wardley`, e3);
    a.debug(t2);
    let n2 = (_a = k.parser) == null ? void 0 : _a.yy;
    if (!n2 || typeof n2.addNode != `function`) throw Error(`parser.parser?.yy was not a WardleyDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
    O(t2, n2);
  });
  return function(t2) {
    return e2[L(504)](this, arguments);
  };
})(), `parse`) }, A = new (C = class {
  constructor() {
    let e2 = x;
    this.nodes = /* @__PURE__ */ new Map(), this.links = [], this[e2(565)] = /* @__PURE__ */ new Map(), this.pipelines = /* @__PURE__ */ new Map(), this[e2(517)] = [], this.notes = [], this[e2(559)] = [], this[e2(513)] = [], this.axes = {};
  }
  [x(547)](t2) {
    let n2 = x, r2 = this.nodes.get(t2.id) ?? { id: t2.id, label: t2.label }, i2 = e(e(e({}, r2), t2), {}, { className: t2.className ?? r2.className, labelOffsetX: t2[n2(599)] ?? r2.labelOffsetX, labelOffsetY: t2.labelOffsetY ?? r2.labelOffsetY });
    this.nodes.set(t2.id, i2);
  }
  addLink(e2) {
    let t2 = x;
    this[t2(603)].push(e2);
  }
  addTrend(e2) {
    let t2 = x;
    this.trends[t2(617)](e2[t2(572)], e2);
  }
  startPipeline(e2) {
    let t2 = x;
    this.pipelines[t2(617)](e2, { nodeId: e2, componentIds: [] });
    let n2 = this.nodes.get(e2);
    n2 && (n2.isPipelineParent = true);
  }
  addPipelineComponent(e2, t2) {
    let n2 = x, r2 = this[n2(585)][n2(508)](e2);
    r2 && r2.componentIds.push(t2);
    let i2 = this.nodes.get(t2);
    i2 && (i2.inPipeline = true);
  }
  [x(490)](e2) {
    this.annotations.push(e2);
  }
  addNote(e2) {
    this.notes.push(e2);
  }
  [x(595)](e2) {
    this.accelerators.push(e2);
  }
  [x(566)](e2) {
    this.deaccelerators.push(e2);
  }
  setAnnotationsBox(e2, t2) {
    let n2 = x;
    this[n2(539)] = { x: e2, y: t2 };
  }
  setAxes(t2) {
    this.axes = e(e({}, this.axes), t2);
  }
  setSize(e2, t2) {
    this.size = { width: e2, height: t2 };
  }
  getNode(e2) {
    let t2 = x;
    return this.nodes[t2(508)](e2);
  }
  resolveNodeId(e2) {
    if (this.nodes.has(e2)) return e2;
    for (let [t2, n2] of this.nodes) if (n2.label === e2) return t2;
    return e2;
  }
  build() {
    let t2 = x, n2 = [];
    for (let e2 of this.nodes[t2(578)]()) {
      if (typeof e2.x != `number` || typeof e2.y != t2(579)) throw Error(`Node "` + e2.label + `" is missing coordinates`);
      n2.push(e2);
    }
    return { nodes: n2, links: [...this[t2(603)]], trends: [...this.trends.values()], pipelines: [...this.pipelines.values()], annotations: [...this.annotations], notes: [...this[t2(577)]], accelerators: [...this[t2(559)]], deaccelerators: [...this.deaccelerators], annotationsBox: this[t2(539)], axes: e({}, this[t2(601)]), size: this[t2(543)] };
  }
  clear() {
    this.nodes.clear(), this.links = [], this.trends.clear(), this.pipelines.clear(), this.annotations = [], this.notes = [], this.accelerators = [], this.deaccelerators = [], this.annotationsBox = void 0, this.axes = {}, this.size = void 0;
  }
}, o(C, `WardleyBuilder`), C)();
function j() {
  return l()[`wardley-beta`];
}
o(j, `getConfig`);
function M(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  A.addNode({ id: e2, label: t2, x: n2, y: r2, className: i2, labelOffsetX: a2, labelOffsetY: o2, inertia: s2, sourceStrategy: c2 });
}
o(M, `addNode`);
function N(e2, t2, n2 = false, r2, i2) {
  A.addLink({ source: e2, target: t2, dashed: n2, label: r2, flow: i2 });
}
o(N, `addLink`);
function P(e2, t2, n2) {
  A[x(538)]({ nodeId: e2, targetX: t2, targetY: n2 });
}
o(P, x(538));
function F(e2, t2, n2) {
  A.addAnnotation({ number: e2, coordinates: t2, text: n2 });
}
o(F, x(490));
function I(e2, t2, n2) {
  A.addNote({ text: e2, x: t2, y: n2 });
}
o(I, `addNote`);
function L(e2, t2) {
  return e2 -= 489, S()[e2];
}
function R(e2, t2, n2) {
  A.addAccelerator({ name: e2, x: t2, y: n2 });
}
o(R, x(595));
function z(e2, t2, n2) {
  A.addDeaccelerator({ name: e2, x: t2, y: n2 });
}
o(z, `addDeaccelerator`);
function B(e2, t2) {
  A[x(609)](e2, t2);
}
o(B, `setAnnotationsBox`);
function V(e2, t2) {
  A.setSize(e2, t2);
}
o(V, x(608));
function H(e2) {
  A.startPipeline(e2);
}
o(H, `startPipeline`);
function U(e2, t2) {
  A.addPipelineComponent(e2, t2);
}
o(U, `addPipelineComponent`);
function W(e2) {
  A.setAxes(e2);
}
o(W, `updateAxes`);
function G(e2) {
  return A.getNode(e2);
}
o(G, `getNode`);
function K(e2) {
  return A.resolveNodeId(e2);
}
o(K, `resolveNodeId`);
function q() {
  return A.build();
}
o(q, `getWardleyData`);
function J() {
  A.clear(), c();
}
o(J, `clear`);
var Y = { getConfig: j, addNode: M, addLink: N, addTrend: P, addAnnotation: F, addNote: I, addAccelerator: R, addDeaccelerator: z, setAnnotationsBox: B, setSize: V, startPipeline: H, addPipelineComponent: U, updateAxes: W, getNode: G, resolveNodeId: K, getWardleyData: q, clear: J, setAccTitle: u, getAccTitle: d, setDiagramTitle: f, getDiagramTitle: m, getAccDescription: s, setAccDescription: h }, X = [`Genesis`, `Custom Built`, `Product`, `Commodity`], Z = o(() => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  let e2 = x, { themeVariables: t2 } = l();
  return { backgroundColor: ((_a = t2.wardley) == null ? void 0 : _a.backgroundColor) ?? t2.background ?? `#fff`, axisColor: ((_b = t2[e2(586)]) == null ? void 0 : _b.axisColor) ?? `#000`, axisTextColor: ((_c = t2.wardley) == null ? void 0 : _c.axisTextColor) ?? t2.primaryTextColor ?? `#222`, gridColor: ((_d = t2.wardley) == null ? void 0 : _d.gridColor) ?? `rgba(100, 100, 100, 0.2)`, componentFill: ((_e = t2[e2(586)]) == null ? void 0 : _e.componentFill) ?? `#fff`, componentStroke: ((_f = t2.wardley) == null ? void 0 : _f.componentStroke) ?? `#000`, componentLabelColor: ((_g = t2.wardley) == null ? void 0 : _g.componentLabelColor) ?? t2.primaryTextColor ?? `#222`, linkStroke: ((_h = t2[e2(586)]) == null ? void 0 : _h.linkStroke) ?? `#000`, evolutionStroke: ((_i = t2.wardley) == null ? void 0 : _i[e2(594)]) ?? `#dc3545`, annotationStroke: ((_j = t2.wardley) == null ? void 0 : _j.annotationStroke) ?? `#000`, annotationTextColor: ((_k = t2[e2(586)]) == null ? void 0 : _k[e2(552)]) ?? t2[e2(610)] ?? `#222`, annotationFill: ((_l = t2.wardley) == null ? void 0 : _l.annotationFill) ?? t2.background ?? `#fff` };
}, `getTheme`), Q = o(() => {
  let e2 = x, t2 = l()[e2(526)];
  return { width: (t2 == null ? void 0 : t2.width) ?? 900, height: (t2 == null ? void 0 : t2[e2(496)]) ?? 600, padding: (t2 == null ? void 0 : t2.padding) ?? 48, nodeRadius: (t2 == null ? void 0 : t2.nodeRadius) ?? 6, nodeLabelOffset: (t2 == null ? void 0 : t2.nodeLabelOffset) ?? 8, axisFontSize: (t2 == null ? void 0 : t2[e2(548)]) ?? 12, labelFontSize: (t2 == null ? void 0 : t2.labelFontSize) ?? 10, showGrid: (t2 == null ? void 0 : t2.showGrid) ?? false, useMaxWidth: (t2 == null ? void 0 : t2.useMaxWidth) ?? true };
}, `getConfigValues`), $ = { parser: k, db: Y, renderer: { draw: o((e2, t2, n2, r2) => {
  var _a, _b;
  let i2 = x;
  a.debug(`Rendering Wardley map
` + e2);
  let s2 = Q(), c2 = Z(), l2 = s2.nodeRadius * 1.6, u2 = r2.db, d2 = u2[i2(524)](), f2 = u2.getDiagramTitle(), p2 = ((_a = d2.size) == null ? void 0 : _a.width) ?? s2.width, m2 = ((_b = d2.size) == null ? void 0 : _b.height) ?? s2.height, h2 = y(t2);
  h2.selectAll(`*`).remove(), g(h2, m2, p2, s2.useMaxWidth), h2[i2(558)](`viewBox`, `0 0 ` + p2 + ` ` + m2);
  let _2 = h2.append(`g`).attr(`class`, `wardley-map`), v2 = h2.append(i2(544));
  v2.append(`marker`)[i2(558)](`id`, `arrow-` + t2).attr(i2(531), `0 0 10 10`).attr(`refX`, 9).attr(`refY`, 5).attr(`markerWidth`, 6).attr(i2(516), 6).attr(i2(514), `auto-start-reverse`).append(i2(569)).attr(`d`, `M 0 0 L 10 5 L 0 10 z`).attr(`fill`, c2.evolutionStroke).attr(`stroke`, `none`), v2[i2(532)](`marker`).attr(`id`, `link-arrow-end-` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 9).attr(`refY`, 5).attr(`markerWidth`, 5).attr(`markerHeight`, 5).attr(`orient`, i2(528)).append(`path`)[i2(558)](`d`, `M 0 0 L 10 5 L 0 10 z`)[i2(558)](`fill`, c2.linkStroke).attr(`stroke`, `none`), v2.append(`marker`).attr(`id`, `link-arrow-start-` + t2).attr(i2(531), i2(549))[i2(558)](`refX`, 1).attr(`refY`, 5).attr(`markerWidth`, 5).attr(i2(516), 5).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 10 0 L 0 5 L 10 10 z`).attr(`fill`, c2.linkStroke).attr(`stroke`, i2(533)), _2.append(i2(506)).attr(`class`, i2(587)).attr(`width`, p2).attr(`height`, m2).attr(`fill`, c2.backgroundColor);
  let b2 = p2 - s2.padding * 2, S2 = m2 - s2.padding * 2;
  f2 && _2.append(`text`).attr(`class`, i2(581)).attr(`x`, p2 / 2).attr(`y`, s2.padding / 2)[i2(558)](`fill`, c2.axisTextColor).attr(`font-size`, s2.axisFontSize * 1.05).attr(`font-weight`, i2(494)).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`).text(f2);
  let C2 = o((e3) => s2.padding + e3 / 100 * b2, `projectX`), w2 = o((e3) => m2 - s2.padding - e3 / 100 * S2, `projectY`), T2 = _2.append(`g`).attr(`class`, `wardley-axes`);
  T2.append(`line`).attr(`x1`, s2.padding).attr(`x2`, p2 - s2.padding).attr(`y1`, m2 - s2.padding)[i2(558)](`y2`, m2 - s2.padding).attr(`stroke`, c2.axisColor).attr(`stroke-width`, 1), T2.append(`line`).attr(`x1`, s2.padding).attr(`x2`, s2.padding)[i2(558)](`y1`, s2.padding).attr(`y2`, m2 - s2[i2(541)]).attr(`stroke`, c2.axisColor).attr(i2(602), 1);
  let E2 = d2.axes.xLabel ?? `Evolution`, D2 = d2.axes.yLabel ?? `Visibility`;
  T2.append(`text`).attr(`class`, `wardley-axis-label wardley-axis-label-x`).attr(`x`, s2.padding + b2 / 2).attr(`y`, m2 - s2.padding / 4).attr(`fill`, c2[i2(597)])[i2(558)](i2(574), s2.axisFontSize)[i2(558)](`font-weight`, `bold`).attr(i2(545), `middle`).text(E2), T2.append(`text`).attr(`class`, `wardley-axis-label wardley-axis-label-y`)[i2(558)](`x`, s2.padding / 3).attr(`y`, s2.padding + S2 / 2)[i2(558)](`fill`, c2.axisTextColor).attr(`font-size`, s2.axisFontSize).attr(`font-weight`, `bold`).attr(`text-anchor`, `middle`).attr(i2(535), `rotate(-90 ` + s2.padding / 3 + ` ` + (s2[i2(541)] + S2 / 2) + `)`)[i2(591)](D2);
  let O2 = d2.axes.stages && d2.axes.stages[i2(499)] > 0 ? d2[i2(601)][i2(505)] : X;
  if (O2.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-stages`), t3 = d2.axes.stageBoundaries, n3 = [];
    if (t3 && t3.length === O2.length) {
      let e4 = 0;
      t3.forEach((t4) => {
        n3[i2(589)]({ start: e4, end: t4 }), e4 = t4;
      });
    } else {
      let e4 = 1 / O2.length;
      O2.forEach((t4, r3) => {
        n3.push({ start: r3 * e4, end: (r3 + 1) * e4 });
      });
    }
    O2.forEach((t4, r3) => {
      let a2 = i2, o2 = n3[r3], l3 = s2.padding + o2[a2(546)] * b2, u3 = (l3 + (s2.padding + o2.end * b2)) / 2;
      r3 > 0 && e3.append(`line`).attr(`x1`, l3).attr(`x2`, l3).attr(`y1`, s2.padding).attr(`y2`, m2 - s2[a2(541)]).attr(`stroke`, `#000`).attr(a2(602), 1).attr(`stroke-dasharray`, `5 5`).attr(`opacity`, 0.8), e3[a2(532)](`text`).attr(`class`, `wardley-stage-label`)[a2(558)](`x`, u3)[a2(558)](`y`, m2 - s2.padding / 1.5).attr(`fill`, c2.axisTextColor).attr(`font-size`, s2[a2(548)] - 2).attr(`text-anchor`, `middle`).text(t4);
    });
  }
  if (s2.showGrid) {
    let e3 = _2[i2(532)](`g`).attr(`class`, `wardley-grid`);
    for (let t3 = 1; t3 < 4; t3++) {
      let n3 = t3 / 4, r3 = s2.padding + b2 * n3;
      e3.append(`line`).attr(`x1`, r3).attr(`x2`, r3).attr(`y1`, s2.padding).attr(`y2`, m2 - s2.padding).attr(i2(613), c2.gridColor).attr(`stroke-dasharray`, i2(623)), e3[i2(532)](`line`).attr(`x1`, s2[i2(541)])[i2(558)](`x2`, p2 - s2.padding).attr(`y1`, m2 - s2.padding - S2 * n3).attr(`y2`, m2 - s2[i2(541)] - S2 * n3).attr(`stroke`, c2[i2(560)]).attr(`stroke-dasharray`, `2 6`);
    }
  }
  let k2 = /* @__PURE__ */ new Map();
  if (d2.nodes.forEach((e3) => {
    k2.set(e3.id, { x: C2(e3.x), y: w2(e3.y), node: e3 });
  }), d2.pipelines[i2(499)] > 0) {
    let e3 = _2.append(`g`)[i2(558)](`class`, `wardley-pipelines`), t3 = _2.append(`g`).attr(`class`, i2(491));
    d2.pipelines.forEach((n3) => {
      let r3 = i2;
      if (n3.componentIds[r3(499)] === 0) return;
      let a2 = n3.componentIds.map((e4) => ({ id: e4, pos: k2.get(e4), node: d2.nodes.find((t4) => t4.id === e4) })).filter((e4) => e4.pos && e4.node).sort((e4, t4) => e4.node.x - t4.node.x);
      for (let e4 = 0; e4 < a2.length - 1; e4++) {
        let n4 = a2[e4], i3 = a2[e4 + 1];
        t3.append(`line`).attr(`class`, `wardley-pipeline-evolution-link`).attr(`x1`, n4.pos.x).attr(`y1`, n4[r3(616)].y).attr(`x2`, i3.pos.x).attr(`y2`, i3.pos.y).attr(`stroke`, c2[r3(553)])[r3(558)](`stroke-width`, 1).attr(`stroke-dasharray`, `4 4`);
      }
      let o2 = 1 / 0, u3 = -1 / 0, f3 = 0;
      if (n3[r3(620)].forEach((e4) => {
        let t4 = k2.get(e4);
        t4 && (o2 = Math.min(o2, t4.x), u3 = Math.max(u3, t4.x), f3 = t4.y);
      }), o2 !== 1 / 0 && u3 !== -1 / 0) {
        let t4 = s2.nodeRadius * 4, i3 = f3 - t4 / 2, a3 = k2.get(n3.nodeId);
        a3 && (a3.x = (o2 + u3) / 2, a3.y = i3 - l2 / 6), e3[r3(532)](`rect`).attr(r3(519), `wardley-pipeline-box`).attr(`x`, o2 - 15).attr(`y`, i3).attr(`width`, u3 - o2 + 30).attr(`height`, t4).attr(`fill`, `none`).attr(`stroke`, c2.axisColor).attr(r3(602), 1.5).attr(`rx`, 4).attr(`ry`, 4);
      }
    });
  }
  let A2 = _2.append(`g`)[i2(558)](`class`, `wardley-links`), j2 = /* @__PURE__ */ new Map();
  d2[i2(585)][i2(527)]((e3) => {
    j2.set(e3.nodeId, new Set(e3.componentIds));
  });
  let M2 = d2[i2(603)].filter((e3) => {
    if (!k2[i2(570)](e3.source) || !k2.has(e3.target)) return false;
    let t3 = j2.get(e3.target);
    return !(t3 != null && t3.has(e3.source));
  });
  A2[i2(624)](i2(604)).data(M2).enter().append(`line`)[i2(558)](`class`, (e3) => `wardley-link` + (e3.dashed ? ` wardley-link--dashed` : ``))[i2(558)](`x1`, (e3) => {
    let t3 = i2, n3 = k2[t3(508)](e3.source), r3 = k2.get(e3.target), a2 = d2[t3(625)].find((t4) => t4.id === e3.source).isPipelineParent ? l2 / Math.sqrt(2) : s2.nodeRadius, o2 = r3.x - n3.x, c3 = r3.y - n3.y, u3 = Math.sqrt(o2 * o2 + c3 * c3);
    return n3.x + o2 / u3 * a2;
  }).attr(`y1`, (e3) => {
    let t3 = i2, n3 = k2.get(e3.source), r3 = k2.get(e3.target), a2 = d2.nodes.find((t4) => t4.id === e3.source)[t3(615)] ? l2 / Math.sqrt(2) : s2.nodeRadius, o2 = r3.x - n3.x, c3 = r3.y - n3.y, u3 = Math.sqrt(o2 * o2 + c3 * c3);
    return n3.y + c3 / u3 * a2;
  }).attr(`x2`, (e3) => {
    let t3 = i2, n3 = k2.get(e3.source), r3 = k2.get(e3.target), a2 = d2.nodes.find((t4) => t4.id === e3.target)[t3(615)] ? l2 / Math.sqrt(2) : s2.nodeRadius, o2 = n3.x - r3.x, c3 = n3.y - r3.y, u3 = Math.sqrt(o2 * o2 + c3 * c3);
    return r3.x + o2 / u3 * a2;
  })[i2(558)](`y2`, (e3) => {
    let t3 = i2, n3 = k2[t3(508)](e3.source), r3 = k2.get(e3[t3(619)]), a2 = d2.nodes.find((t4) => t4.id === e3.target)[t3(615)] ? l2 / Math[t3(576)](2) : s2.nodeRadius, o2 = n3.x - r3.x, c3 = n3.y - r3.y, u3 = Math.sqrt(o2 * o2 + c3 * c3);
    return r3.y + c3 / u3 * a2;
  }).attr(`stroke`, c2.linkStroke).attr(`stroke-width`, 1).attr(`stroke-dasharray`, (e3) => e3.dashed ? `6 6` : null).attr(`marker-end`, (e3) => e3[i2(492)] === `forward` || e3.flow === i2(607) ? `url(#link-arrow-end-` + t2 + `)` : null).attr(`marker-start`, (e3) => e3[i2(492)] === `backward` || e3.flow === `bidirectional` ? `url(#link-arrow-start-` + t2 + `)` : null), A2[i2(624)](`text`)[i2(502)](M2.filter((e3) => e3.label)).enter().append(i2(591)).attr(i2(519), `wardley-link-label`).attr(`x`, (e3) => {
    let t3 = i2, n3 = k2[t3(508)](e3[t3(497)]), r3 = k2.get(e3.target), a2 = (n3.x + r3.x) / 2, o2 = r3.y - n3.y, s3 = r3.x - n3.x;
    return a2 + o2 / Math[t3(576)](s3 * s3 + o2 * o2) * 8;
  })[i2(558)](`y`, (e3) => {
    let t3 = k2.get(e3.source), n3 = k2.get(e3.target), r3 = (t3.y + n3.y) / 2, i3 = n3.x - t3.x, a2 = n3.y - t3.y, o2 = Math.sqrt(i3 * i3 + a2 * a2);
    return r3 + -i3 / o2 * 8;
  }).attr(`fill`, c2.axisTextColor).attr(`font-size`, s2[i2(614)]).attr(`text-anchor`, i2(583)).attr(`dominant-baseline`, `middle`)[i2(558)](`transform`, (e3) => {
    let t3 = i2, n3 = k2.get(e3.source), r3 = k2.get(e3[t3(619)]), a2 = (n3.x + r3.x) / 2, o2 = (n3.y + r3.y) / 2, s3 = r3.x - n3.x, c3 = r3.y - n3.y, l3 = Math.sqrt(s3 * s3 + c3 * c3), u3 = c3 / l3, d3 = -s3 / l3, f3 = a2 + u3 * 8, p3 = o2 + d3 * 8, m3 = Math.atan2(c3, s3) * 180 / Math.PI;
    return (m3 > 90 || m3 < -90) && (m3 += 180), `rotate(` + m3 + ` ` + f3 + ` ` + p3 + `)`;
  })[i2(591)]((e3) => e3[i2(536)]);
  let N2 = _2.append(`g`).attr(i2(519), `wardley-trends`), P2 = d2.trends[i2(584)]((e3) => {
    let t3 = i2, n3 = k2.get(e3.nodeId);
    if (!n3) return null;
    let r3 = C2(e3.targetX), a2 = w2(e3[t3(621)]), o2 = r3 - n3.x, c3 = a2 - n3.y, l3 = Math.sqrt(o2 * o2 + c3 * c3), u3 = s2.nodeRadius + 2;
    return { origin: n3, targetX: r3, targetY: a2, adjustedX2: l3 > u3 ? r3 - o2 / l3 * u3 : r3, adjustedY2: l3 > u3 ? a2 - c3 / l3 * u3 : a2 };
  }).filter((e3) => e3 !== null);
  N2.selectAll(i2(604)).data(P2).enter().append(`line`)[i2(558)](`class`, `wardley-trend`).attr(`x1`, (e3) => e3.origin.x).attr(`y1`, (e3) => e3.origin.y).attr(`x2`, (e3) => e3.adjustedX2).attr(`y2`, (e3) => e3.adjustedY2).attr(`stroke`, c2.evolutionStroke).attr(`stroke-width`, 1).attr(`stroke-dasharray`, `4 4`)[i2(558)](i2(511), `url(#arrow-` + t2 + `)`);
  let F2 = _2[i2(532)](`g`).attr(`class`, `wardley-nodes`).selectAll(`g`)[i2(502)](d2[i2(625)]).enter().append(`g`).attr(`class`, (e3) => [`wardley-node`, e3.className ? `wardley-node--` + e3[i2(562)] : ``].filter(Boolean).join(` `));
  F2[i2(509)]((e3) => e3[i2(503)] === `outsource`).append(`circle`)[i2(558)](`class`, i2(567))[i2(558)](`cx`, (e3) => k2.get(e3.id).x)[i2(558)](`cy`, (e3) => k2.get(e3.id).y).attr(`r`, s2[i2(529)] * 2).attr(i2(561), `#666`).attr(`stroke`, c2.componentStroke).attr(`stroke-width`, 1), F2[i2(509)]((e3) => e3.sourceStrategy === i2(507)).append(i2(521))[i2(558)](`class`, `wardley-buy-overlay`).attr(`cx`, (e3) => k2.get(e3.id).x).attr(`cy`, (e3) => k2.get(e3.id).y)[i2(558)](`r`, s2[i2(529)] * 2)[i2(558)](`fill`, i2(530))[i2(558)](`stroke`, c2.componentStroke).attr(`stroke-width`, 1), F2[i2(509)]((e3) => e3[i2(503)] === `build`).append(`circle`).attr(`class`, i2(573)).attr(`cx`, (e3) => k2[i2(508)](e3.id).x).attr(`cy`, (e3) => k2[i2(508)](e3.id).y)[i2(558)](`r`, s2.nodeRadius * 2).attr(`fill`, `#eee`).attr(`stroke`, `#000`).attr(i2(602), 1);
  let I2 = F2.filter((e3) => e3.sourceStrategy === `market`);
  I2.append(`circle`).attr(i2(519), i2(592)).attr(`cx`, (e3) => k2.get(e3.id).x).attr(`cy`, (e3) => k2.get(e3.id).y).attr(`r`, s2[i2(529)] * 2).attr(`fill`, `white`).attr(i2(613), c2.componentStroke).attr(`stroke-width`, 1), F2.filter((e3) => !e3.isPipelineParent && e3[i2(503)] !== `market` && e3.className !== `anchor`).append(`circle`).attr(`cx`, (e3) => k2.get(e3.id).x).attr(`cy`, (e3) => k2.get(e3.id).y).attr(`r`, s2[i2(529)]).attr(`fill`, c2.componentFill).attr(i2(613), c2.componentStroke).attr(`stroke-width`, 1);
  let L2 = s2.nodeRadius * 0.7, R2 = s2.nodeRadius * 1.2;
  if (I2.append(`line`).attr(i2(519), i2(495)).attr(`x1`, (e3) => k2.get(e3.id).x).attr(`y1`, (e3) => k2.get(e3.id).y - R2).attr(`x2`, (e3) => k2.get(e3.id).x - R2 * Math.cos(Math.PI / 6)).attr(`y2`, (e3) => k2.get(e3.id).y + R2 * Math.sin(Math.PI / 6)).attr(`stroke`, c2.componentStroke)[i2(558)](i2(602), 1), I2[i2(532)](`line`).attr(`class`, i2(495)).attr(`x1`, (e3) => k2.get(e3.id).x - R2 * Math.cos(Math.PI / 6)).attr(`y1`, (e3) => k2.get(e3.id).y + R2 * Math[i2(551)](Math.PI / 6)).attr(`x2`, (e3) => k2.get(e3.id).x + R2 * Math.cos(Math.PI / 6)).attr(`y2`, (e3) => k2.get(e3.id).y + R2 * Math.sin(Math.PI / 6)).attr(`stroke`, c2.componentStroke).attr(i2(602), 1), I2.append(`line`).attr(i2(519), `wardley-market-line`).attr(`x1`, (e3) => k2.get(e3.id).x + R2 * Math.cos(Math.PI / 6)).attr(`y1`, (e3) => k2[i2(508)](e3.id).y + R2 * Math.sin(Math.PI / 6))[i2(558)](`x2`, (e3) => k2.get(e3.id).x).attr(`y2`, (e3) => k2.get(e3.id).y - R2).attr(`stroke`, c2[i2(525)])[i2(558)](`stroke-width`, 1), I2.append(`circle`).attr(`class`, `wardley-market-dot`).attr(`cx`, (e3) => k2[i2(508)](e3.id).x).attr(`cy`, (e3) => k2[i2(508)](e3.id).y - R2).attr(`r`, L2).attr(`fill`, i2(512)).attr(`stroke`, c2.componentStroke).attr(`stroke-width`, 2), I2.append(i2(521)).attr(i2(519), `wardley-market-dot`).attr(`cx`, (e3) => k2.get(e3.id).x - R2 * Math[i2(611)](Math.PI / 6)).attr(`cy`, (e3) => k2.get(e3.id).y + R2 * Math.sin(Math.PI / 6)).attr(`r`, L2).attr(`fill`, `white`).attr(`stroke`, c2[i2(525)]).attr(`stroke-width`, 2), I2.append(i2(521)).attr(`class`, `wardley-market-dot`)[i2(558)](`cx`, (e3) => k2.get(e3.id).x + R2 * Math.cos(Math.PI / 6)).attr(`cy`, (e3) => k2.get(e3.id).y + R2 * Math.sin(Math.PI / 6))[i2(558)](`r`, L2)[i2(558)](`fill`, `white`).attr(i2(613), c2[i2(525)]).attr(`stroke-width`, 2), F2[i2(509)]((e3) => e3.isPipelineParent === true)[i2(532)](`rect`).attr(`x`, (e3) => k2.get(e3.id).x - l2 / 2).attr(`y`, (e3) => k2.get(e3.id).y - l2 / 2).attr(`width`, l2).attr(`height`, l2).attr(`fill`, c2.componentFill).attr(i2(613), c2[i2(525)]).attr(`stroke-width`, 1), F2.filter((e3) => e3.inertia === true).append(`line`).attr(i2(519), `wardley-inertia`).attr(`x1`, (e3) => {
    let t3 = i2, n3 = k2.get(e3.id), r3 = e3.isPipelineParent ? l2 / 2 + 15 : s2[t3(529)] + 15;
    return e3[t3(503)] && (r3 += s2.nodeRadius + 10), n3.x + r3;
  }).attr(`y1`, (e3) => {
    let t3 = k2.get(e3.id), n3 = e3.isPipelineParent ? l2 : s2.nodeRadius * 2;
    return t3.y - n3 / 2;
  }).attr(`x2`, (e3) => {
    let t3 = i2, n3 = k2[t3(508)](e3.id), r3 = e3.isPipelineParent ? l2 / 2 + 15 : s2[t3(529)] + 15;
    return e3.sourceStrategy && (r3 += s2.nodeRadius + 10), n3.x + r3;
  }).attr(`y2`, (e3) => {
    let t3 = i2, n3 = k2.get(e3.id), r3 = e3.isPipelineParent ? l2 : s2[t3(529)] * 2;
    return n3.y + r3 / 2;
  }).attr(i2(613), c2.componentStroke).attr(`stroke-width`, 6), F2.append(i2(591)).attr(`x`, (e3) => {
    let t3 = i2, n3 = k2[t3(508)](e3.id);
    if (e3.className === `anchor`) return e3.labelOffsetX === void 0 ? n3.x : n3.x + e3.labelOffsetX;
    let r3 = s2.nodeLabelOffset;
    e3.sourceStrategy && e3[t3(599)] === void 0 && (r3 += 10);
    let a2 = e3.labelOffsetX ?? r3;
    return n3.x + a2;
  })[i2(558)](`y`, (e3) => {
    let t3 = i2, n3 = k2[t3(508)](e3.id);
    if (e3.className === `anchor`) return e3.labelOffsetY === void 0 ? n3.y - 3 : n3.y + e3.labelOffsetY;
    let r3 = -s2[t3(542)];
    e3[t3(503)] && e3.labelOffsetY === void 0 && (r3 -= 10);
    let a2 = e3[t3(612)] ?? r3;
    return n3.y + a2;
  }).attr(`class`, `wardley-node-label`).attr(`fill`, (e3) => e3.className === `evolved` ? c2.evolutionStroke : e3.className === `anchor` ? `#000` : c2.componentLabelColor).attr(`font-size`, s2[i2(614)])[i2(558)](`font-weight`, (e3) => e3[i2(562)] === `anchor` ? `bold` : `normal`).attr(`text-anchor`, (e3) => e3[i2(562)] === `anchor` ? i2(583) : `start`)[i2(558)](`dominant-baseline`, (e3) => e3.className === i2(555) ? `middle` : `auto`)[i2(591)]((e3) => e3.label), d2.annotations[i2(499)] > 0) {
    let e3 = _2[i2(532)](`g`).attr(`class`, `wardley-annotations`);
    if (d2.annotations.forEach((t3) => {
      let n3 = i2, r3 = t3.coordinates.map((e4) => ({ x: C2(e4.x), y: w2(e4.y) }));
      if (r3.length > 1) for (let t4 = 0; t4 < r3[n3(499)] - 1; t4++) e3.append(`line`).attr(`class`, n3(571)).attr(`x1`, r3[t4].x).attr(`y1`, r3[t4].y).attr(`x2`, r3[t4 + 1].x).attr(`y2`, r3[t4 + 1].y).attr(`stroke`, c2.axisColor).attr(`stroke-width`, 1.5).attr(`stroke-dasharray`, n3(500));
      r3.forEach((r4) => {
        let i3 = n3, a2 = e3[i3(532)](`g`).attr(`class`, `wardley-annotation`);
        a2.append(`circle`).attr(`cx`, r4.x).attr(`cy`, r4.y).attr(`r`, 10)[i3(558)](`fill`, `white`).attr(i3(613), c2.axisColor).attr(`stroke-width`, 1.5), a2.append(`text`).attr(`x`, r4.x).attr(`y`, r4.y).attr(i3(545), `middle`).attr(`dominant-baseline`, i3(563)).attr(`font-size`, 10).attr(`fill`, c2.axisTextColor).attr(i3(518), `bold`).text(t3.number);
      });
    }), d2.annotationsBox) {
      let t3 = C2(d2.annotationsBox.x), n3 = w2(d2[i2(539)].y), r3 = e3.append(`g`).attr(`class`, `wardley-annotations-box`), a2 = [...d2.annotations].filter((e4) => e4.text).sort((e4, t4) => e4[i2(579)] - t4.number), o2 = [];
      if (a2.forEach((e4, a3) => {
        let s3 = i2, l3 = r3.append(`text`).attr(`x`, t3 + 10).attr(`y`, n3 + 10 + (a3 + 1) * 16)[s3(558)](s3(574), 11).attr(`fill`, c2.axisTextColor).attr(`text-anchor`, `start`)[s3(558)](`dominant-baseline`, `middle`).text(e4[s3(579)] + `. ` + e4.text);
        o2[s3(589)](l3);
      }), o2.length > 0) {
        let e4 = 0, l3 = 0;
        o2.forEach((t4) => {
          let n4 = i2, r4 = t4.node(), a3 = r4.getComputedTextLength();
          e4 = Math.max(e4, a3);
          let o3 = r4.getBBox();
          l3 = Math.max(l3, o3[n4(496)]);
        });
        let u3 = e4 + 20 + 105, d3 = a2.length * 16 + 20 + l3 / 2, f3 = s2.padding, h3 = p2 - s2[i2(541)] - u3, g2 = s2.padding, _3 = m2 - s2.padding - d3;
        t3 = Math[i2(550)](f3, Math.min(t3, h3)), n3 = Math.max(g2, Math.min(n3, _3)), o2.forEach((e5, r4) => {
          e5.attr(`x`, t3 + 10).attr(`y`, n3 + 10 + (r4 + 1) * 16);
        }), r3.insert(`rect`, `text`).attr(`x`, t3).attr(`y`, n3).attr(`width`, u3).attr(`height`, d3).attr(`fill`, `white`).attr(`stroke`, c2.axisColor).attr(`stroke-width`, 1.5).attr(`rx`, 4).attr(`ry`, 4);
      }
    }
  }
  if (d2.notes.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-notes`);
    d2.notes[i2(527)]((t3) => {
      let n3 = i2, r3 = C2(t3.x), a2 = w2(t3.y);
      e3.append(`text`).attr(`x`, r3).attr(`y`, a2).attr(`text-anchor`, `start`).attr(`font-size`, 11).attr(`fill`, c2[n3(597)]).attr(n3(518), n3(494)).text(t3[n3(591)]);
    });
  }
  if (d2.accelerators.length > 0) {
    let e3 = _2.append(`g`).attr(i2(519), `wardley-accelerators`);
    d2.accelerators.forEach((t3) => {
      let n3 = i2, r3 = C2(t3.x), a2 = w2(t3.y), o2 = `
        M ` + r3 + ` ` + (a2 - 30 / 2) + `
        L ` + (r3 + 60 - 20) + ` ` + (a2 - 30 / 2) + `
        L ` + (r3 + 60 - 20) + ` ` + (a2 - 30 / 2 - 8) + `
        L ` + (r3 + 60) + ` ` + a2 + `
        L ` + (r3 + 60 - 20) + ` ` + (a2 + 30 / 2 + 8) + `
        L ` + (r3 + 60 - 20) + ` ` + (a2 + 30 / 2) + n3(510) + r3 + ` ` + (a2 + 30 / 2) + `
        Z
      `;
      e3.append(`path`).attr(`d`, o2).attr(`fill`, `white`)[n3(558)](n3(613), c2.componentStroke).attr(`stroke-width`, 1), e3.append(`text`).attr(`x`, r3 + 60 / 2).attr(`y`, a2 + 30 / 2 + 15).attr(`text-anchor`, `middle`)[n3(558)](`font-size`, 10).attr(`fill`, c2.axisTextColor)[n3(558)](n3(518), n3(494))[n3(591)](t3[n3(627)]);
    });
  }
  if (d2.deaccelerators.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-deaccelerators`);
    d2.deaccelerators[i2(527)]((t3) => {
      let n3 = i2, r3 = C2(t3.x), a2 = w2(t3.y), o2 = `
        M ` + (r3 + 60) + ` ` + (a2 - 30 / 2) + `
        L ` + (r3 + 20) + ` ` + (a2 - 30 / 2) + `
        L ` + (r3 + 20) + ` ` + (a2 - 30 / 2 - 8) + n3(510) + r3 + ` ` + a2 + `
        L ` + (r3 + 20) + ` ` + (a2 + 30 / 2 + 8) + `
        L ` + (r3 + 20) + ` ` + (a2 + 30 / 2) + `
        L ` + (r3 + 60) + ` ` + (a2 + 30 / 2) + `
        Z
      `;
      e3[n3(532)](`path`).attr(`d`, o2).attr(`fill`, `white`).attr(`stroke`, c2.componentStroke)[n3(558)](`stroke-width`, 1), e3.append(`text`).attr(`x`, r3 + 60 / 2).attr(`y`, a2 + 30 / 2 + 15)[n3(558)](`text-anchor`, `middle`)[n3(558)](`font-size`, 10)[n3(558)](`fill`, c2.axisTextColor).attr(n3(518), `bold`).text(t3.name);
    });
  }
}, x(493)) }, styles: o(({ wardley: e2 } = {}) => {
  let t2 = x, n2 = v(v(p(), _().themeVariables).wardley, e2);
  return t2(534) + n2[t2(618)] + `;
  }
  .wardley-axes line, .wardley-axes path {
    stroke: ` + n2.axisColor + `;
  }
  .wardley-axis-label {
    fill: ` + n2.axisTextColor + `;
  }
  .wardley-stage-label {
    fill: ` + n2.axisTextColor + `;
  }
  .wardley-grid line {
    stroke: ` + n2.gridColor + t2(580) + n2.componentFill + `;
    stroke: ` + n2.componentStroke + `;
  }
  .wardley-node-label {
    fill: ` + n2.componentLabelColor + `;
  }
  .wardley-link {
    stroke: ` + n2.linkStroke + t2(564) + n2[t2(597)] + `;
  }
  .wardley-trend line {
    stroke: ` + n2[t2(594)] + `;
  }
  .wardley-annotation-line {
    stroke: ` + n2.annotationStroke + `;
  }
  .wardley-annotation circle {
    fill: ` + n2.annotationFill + t2(540) + n2.annotationStroke + `;
  }
  .wardley-annotation text {
    fill: ` + n2.annotationTextColor + `;
  }
  .wardley-annotations-box rect {
    fill: ` + n2.annotationFill + `;
    stroke: ` + n2[t2(554)] + `;
  }
  .wardley-annotations-box text {
    fill: ` + n2.annotationTextColor + `;
  }
  .wardley-pipeline-box {
    stroke: ` + n2.componentStroke + `;
  }
  .wardley-notes text {
    fill: ` + n2.axisTextColor + `;
  }
  `;
}, `styles`) };
export {
  $ as diagram
};
