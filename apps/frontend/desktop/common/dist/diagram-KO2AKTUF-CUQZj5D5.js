var _a;
import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { m as i } from "./src-B18GHWxx.js";
import { _ as a, r as o } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as s, t as c } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as l, E as u, V as d, W as f, X as p, Z as m, et as h, j as g, k as ee, p as _, s as te, z as v } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { f as y, h as ne, x as re } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as ie } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
var b = U;
(function(e2, t2) {
  let n2 = U, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(492)) / 1 * (-parseInt(n2(489)) / 2) + parseInt(n2(495)) / 3 + parseInt(n2(516)) / 4 + -parseInt(n2(518)) / 5 * (-parseInt(n2(462)) / 6) + -parseInt(n2(458)) / 7 + parseInt(n2(502)) / 8 + parseInt(n2(499)) / 9 * (-parseInt(n2(513)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})($, 995599), t(), n();
var x = `position frame`, S = b(524), C = b(527), w = b(454), ae = c(function(e2) {
  s[b(517)](`options str`, e2);
}, `setOptions`), oe = c(function() {
  return {};
}, `getOptions`), se = c(function() {
  T(), u();
}, b(515));
function T() {
  E = {};
}
c(T, `reset`);
var ce = te.eventmodeling, le = c(() => ne(e(e({}, ce), v().eventmodeling)), `getConfig`), E = {};
function D() {
  let t2 = b, n2 = ue, { ast: r2 } = E, i2 = A();
  if (!r2) throw Error(`No data for EventModel`);
  return r2[t2(500)].forEach((e2, a2) => {
    let o2 = t2, c2 = L(e2, r2.dataEntities, i2);
    n2 = Z(n2, { $kind: x, index: a2, frame: e2, textProps: c2 });
    let l2;
    G(e2) ? (s[o2(517)](`source frame`, e2.sourceFrames), l2 = r2.frames.filter((t3) => e2[o2(488)].some((e3) => e3.$refText === t3.name)), l2.forEach((t3) => {
      n2 = Z(n2, { $kind: C, index: a2, frame: e2, sourceFrame: t3 });
    })) : n2 = Z(n2, { $kind: C, index: a2, frame: e2 });
  }), n2 = e(e({}, n2), {}, { sortedSwimlanesArray: V(n2.swimlanes) }), n2;
}
c(D, `getState`);
function O(e2) {
  E.ast = e2;
}
c(O, `setAst`);
var k = { swimlaneMinHeight: 70, swimlanePadding: 15, swimlaneGap: 10, boxPadding: 10, boxOverlap: 90, boxDefaultY: 0, boxMinWidth: 80, boxMaxWidth: 450, boxMinHeight: 80, boxMaxHeight: 750, contentStartX: 250, textMaxWidth: 430, boxTextFontWeight: b(493), boxTextPadding: 10, swimlaneTextFontWeight: `bold`, labelUiAutomation: b(526), labelUiAutomationPrefix: `UI/A: `, labelCommandReadModel: `Command/Read Model`, labelCommandReadModelPrefix: `C/RM: `, labelEvents: `Events`, labelEventsPrefix: b(521) };
function A() {
  return k;
}
c(A, `getDiagramProps`);
var ue = { boxes: [], swimlanes: {}, relations: [], maxR: 0, sortedSwimlanesArray: [] };
function j(e2) {
  let t2 = e2[b(503)](`.`);
  if (t2.length === 2) return t2[0];
}
c(j, `extractNamespace`);
function M(e2) {
  let t2 = e2[b(503)](`.`);
  return t2.length === 2 ? t2[1] : e2;
}
c(M, `extractName`);
function N(e2, t2) {
  let n2 = b;
  if (!(!t2 || t2.length === 0)) return Object[n2(505)](e2).find((e3) => e3.namespace === t2);
}
c(N, `findSwimlaneByNamespace`);
function P(e2, t2, n2) {
  return Math.max(t2, ...Object.keys(e2)[b(508)]((e3) => {
    let r2 = Number.parseInt(e3);
    return r2 > t2 && r2 < n2;
  }).map((e3) => Number.parseInt(e3))) + 1;
}
c(P, `findNextAvailableIndex`);
function F(e2, t2) {
  let n2 = b, r2 = j(e2.entityIdentifier), i2 = N(t2, r2);
  switch (e2.modelEntityType) {
    case `ui`:
    case `pcr`:
    case `processor`:
      return i2 ? { index: i2.index, label: i2[n2(473)] || k.labelUiAutomation } : r2 ? { index: P(t2, 0, 100), label: k.labelUiAutomationPrefix + r2 } : { index: 0, label: k.labelUiAutomation };
    case `rmo`:
    case `readmodel`:
    case `cmd`:
    case `command`:
      return i2 ? { index: i2.index, label: i2.namespace || k.labelCommandReadModel } : r2 ? { index: P(t2, 100, 200), label: k.labelCommandReadModelPrefix + r2 } : { index: 100, label: k.labelCommandReadModel };
    default:
      return i2 ? { index: i2[n2(482)], label: i2[n2(473)] || k.labelEvents } : r2 ? { index: P(t2, 200, 300), label: k[n2(459)] + r2 } : { index: 200, label: k.labelEvents };
  }
}
c(F, `calculateSwimlaneProps`);
function I(e2) {
  let t2 = b, { themeVariables: n2 } = v();
  switch (e2.modelEntityType) {
    case `ui`:
      return { fill: n2.emUiFill ?? `white`, stroke: n2.emUiStroke ?? `#dbdada` };
    case `pcr`:
    case `processor`:
      return { fill: n2.emProcessorFill ?? `#edb3f6`, stroke: n2.emProcessorStroke ?? `#b88cbf` };
    case t2(480):
    case `readmodel`:
      return { fill: n2.emReadModelFill ?? `#d3f1a2`, stroke: n2.emReadModelStroke ?? t2(457) };
    case `cmd`:
    case `command`:
      return { fill: n2[t2(461)] ?? `#bcd6fe`, stroke: n2.emCommandStroke ?? t2(455) };
    case `evt`:
    case `event`:
      return { fill: n2.emEventFill ?? `#ffb778`, stroke: n2[t2(470)] ?? `#c19a0f` };
    default:
      return { fill: `red`, stroke: `black` };
  }
}
c(I, `calculateEntityVisualProps`);
function L(e2, t2, n2) {
  let r2 = b, i2 = v(), a2 = _(M(e2.entityIdentifier) ?? ``, i2), o2, c2 = { fontSize: 16, fontWeight: 700, fontFamily: `"trebuchet ms", verdana, arial, sans-serif`, joinWith: `<br/>` }, l2 = `<b>` + y(a2, n2.textMaxWidth, c2) + r2(519);
  if (e2.dataInlineValue && (o2 = e2[r2(469)], o2 = o2.substring(o2.indexOf(`{`) + 1), o2 = o2.substring(0, o2.lastIndexOf(`}`) - 1), o2 = _(o2, i2), o2 = y(o2, n2[r2(481)], c2), o2 = o2[r2(460)](` `, `&nbsp;`)), e2.dataReference) {
    let a3 = t2[r2(476)]((t3) => {
      var _a2;
      let n3 = r2;
      return t3.name === ((_a2 = e2[n3(487)]) == null ? void 0 : _a2.$refText);
    });
    a3 && (o2 = a3.dataBlockValue, o2 = o2[r2(483)](o2[r2(523)](`{
`) + 2), o2 = o2.substring(0, o2.lastIndexOf(`}`) - 1), o2 = _(o2, i2), o2 = y(o2, n2[r2(481)], c2), o2 = o2.replaceAll(` `, `&nbsp;`), o2 += `<br/>`);
  }
  let u2 = o2 !== void 0;
  u2 && (l2 += `<br/><br/><code style="text-align: left; display: block;max-width:` + n2.textMaxWidth + `px">` + o2 + r2(486));
  let d2 = { fontSize: c2.fontSize, fontWeight: c2.fontWeight, fontFamily: c2.fontFamily }, f2 = re(l2, d2), p2 = u2 ? f2.width / 3 : f2.width, m2 = { content: l2, width: p2, height: f2.height };
  return s.debug(`[` + e2.name + `] ` + e2.entityIdentifier + ` text`, m2), m2;
}
c(L, `calculateTextProps`);
function R(e2, t2) {
  let n2 = b, r2 = t2, i2 = I(r2[n2(477)]), a2 = { width: r2.textProps[n2(525)] + 2 * k[n2(484)], height: r2.textProps.height + 2 * k.boxTextPadding };
  return [{ $kind: S, frame: r2.frame, index: r2.index, visual: i2, dimension: a2, textProps: r2.textProps }];
}
c(R, b(509));
function z(e2, t2, n2) {
  let r2 = b;
  return t2 === void 0 ? k[r2(501)] : t2[r2(482)] === e2.index && e2.r ? e2.r + k.boxPadding : n2 === void 0 ? k.contentStartX : n2.r - k.boxOverlap + k.boxPadding;
}
c(z, `calculateX`);
function B(e2, t2) {
  let n2 = [...e2.map((e3) => e3.r), t2];
  return Math.max(...n2);
}
c(B, `calculateMaxRight`);
function V(e2) {
  return Object.values(e2).sort((e3, t2) => e3.index - t2.index);
}
c(V, `sortedSwimlanesArray`);
function H(t2, n2) {
  let r2 = b, i2 = n2, a2 = F(i2.frame, t2.swimlanes), o2;
  o2 = a2.index in t2.swimlanes ? t2[r2(472)][a2.index] : { index: a2[r2(482)], label: a2.label, r: 0, y: a2.index * k[r2(471)] + k.swimlaneGap, height: k.swimlaneMinHeight, maxHeight: k.swimlaneMinHeight };
  let s2 = t2.boxes.length > 0 ? t2[r2(479)][t2.boxes[r2(464)] - 1] : void 0, c2 = t2.previousSwimlaneNumber === void 0 ? void 0 : t2.swimlanes[t2.previousSwimlaneNumber], l2 = { width: Math.max(k.boxMinWidth, Math.min(k.boxMaxWidth, i2.dimension.width)) + 2 * k[r2(497)], height: Math.max(k.boxMinHeight, Math.min(k.boxMaxHeight, i2[r2(478)].height)) + 2 * k.boxPadding }, u2 = z(o2, c2, s2), d2 = u2 + l2.width + k[r2(497)], f2 = B(Object.values(t2[r2(472)]), d2);
  o2.r = u2 + l2[r2(525)], o2.maxHeight = Math.max(o2.maxHeight, l2.height), o2.height = Math.max(k.swimlaneMinHeight, o2[r2(485)]) + 2 * k.swimlanePadding;
  let p2 = { x: u2, y: k.swimlanePadding + o2.y, r: d2, dimension: l2, leftSibling: false, swimlane: o2, visual: i2.visual, text: i2.textProps.content, frame: i2[r2(477)], index: i2.index }, m2 = e(e({}, t2), {}, { boxes: [...t2.boxes, p2], swimlanes: e(e({}, t2.swimlanes), {}, { [`` + o2.index]: o2 }), previousSwimlaneNumber: a2.index, previousFrame: i2.frame, maxR: f2 }), h2 = V(m2.swimlanes);
  h2.length > 0 && (h2[0].y = 0);
  for (let e2 = 1; e2 < h2.length; e2++) {
    let t3 = h2[e2], n3 = h2[e2 - 1];
    t3.y = n3.y + n3.height + k.swimlaneGap;
  }
  return m2;
}
c(H, `evolveFramePositioned`);
function U(e2, t2) {
  return e2 -= 450, $()[e2];
}
function W(e2, t2) {
  return e2 === 0 && t2.sourceFrames.length === 0;
}
c(W, `isFirstFrame`);
function G(e2) {
  return e2.sourceFrames !== void 0 && e2.sourceFrames !== null && e2.sourceFrames.length > 0;
}
c(G, b(506));
function K(e2, t2) {
  let n2 = b;
  if (t2 != null) return e2.find((e3) => e3.frame.name === t2[n2(453)]);
}
c(K, `findBoxByFrame`);
function q(e2, t2, n2) {
  if (!(n2 < 0)) for (let r2 = n2; r2 >= 0; r2--) {
    let n3 = e2[r2];
    if (n3.swimlane.index !== t2) return n3;
  }
}
c(q, `findBoxByLineIndex`);
function J(e2, t2) {
  let n2 = b, r2 = t2;
  if (o(r2.frame) || W(r2.index, r2.frame)) return [];
  let i2 = K(e2.boxes, r2.frame);
  if (i2 === void 0) throw Error(`Target box not found for frame ` + r2.frame.name);
  let a2;
  return a2 = r2[n2(494)] ? K(e2[n2(479)], r2.sourceFrame) : q(e2.boxes, i2.swimlane.index, r2.index - 1), a2 === void 0 ? [] : [{ $kind: w, frame: r2.frame, index: r2.index, sourceBox: a2, targetBox: i2 }];
}
c(J, `decidePositionRelation`);
function Y(t2, n2) {
  let r2 = b, i2 = n2, a2 = { visual: { fill: `none`, stroke: `#000` }, source: { x: i2.sourceBox.x, y: i2.sourceBox.y }, target: { x: i2[r2(514)].x, y: i2.targetBox.y }, sourceBox: i2.sourceBox, targetBox: i2.targetBox };
  return e(e({}, t2), {}, { relations: [...t2.relations, a2] });
}
c(Y, b(490));
var de = { [x]: R, [C]: J }, fe = { [S]: H, [w]: Y };
function X(e2, t2) {
  let n2 = de[t2.$kind];
  if (n2 == null) return [];
  let r2 = n2(e2, t2);
  return s.debug(`decided events`, r2), r2;
}
c(X, `decide`);
function pe(e2, t2) {
  let n2 = b, r2 = t2.reduce((e3, t3) => {
    let n3 = fe[t3.$kind];
    return n3 == null ? e3 : n3(e3, t3);
  }, e2);
  return s[n2(517)](n2(467), { state: e2, newState: r2, events: t2 }), r2;
}
c(pe, `evolve`);
function Z(e2, t2) {
  return pe(e2, X(e2, t2));
}
c(Z, `dispatch`);
var Q = { getConfig: le, setOptions: ae, getOptions: oe, clear: se, setAccTitle: f, getAccTitle: p, getAccDescription: l, setAccDescription: ee, setDiagramTitle: m, getDiagramTitle: g, setAst: O, getDiagramProps: A, getState: D }, me = { parse: c((function() {
  var e2 = r(function* (e3) {
    let t2 = U, n2 = yield a(`eventmodeling`, e3);
    s.debug(n2), Q[t2(456)](n2), ie(n2, Q);
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), `parse`) }, he = (_a = d()) == null ? void 0 : _a.eventmodeling;
function ge(e2, t2) {
  return (n2) => {
    let r2 = U, i2 = n2.swimlane.y + t2.swimlanePadding, a2 = e2.append(`g`).attr(`class`, `em-box`);
    a2.append(`rect`).attr(`x`, n2.x).attr(`y`, i2).attr(`rx`, `3`).attr(r2(525), n2.dimension.width).attr(`height`, n2[r2(478)].height).attr(`stroke`, n2.visual.stroke).attr(`fill`, n2.visual.fill), a2[r2(507)](`foreignObject`).attr(`x`, n2.x + t2[r2(497)]).attr(`y`, i2 + 10).attr(`width`, n2[r2(478)].width - 2 * t2.boxPadding).attr(`height`, n2.dimension.height - 2 * t2.boxPadding).append(`xhtml:div`).style(`display`, `table`)[r2(452)](`height`, `100%`).style(`width`, `100%`).append(`span`).style(`display`, `table-cell`)[r2(452)](`text-align`, r2(466))[r2(452)](`vertical-align`, `middle`).html(n2[r2(450)]);
  };
}
c(ge, `renderD3Box`);
function _e(e2, t2) {
  return e2 > t2;
}
c(_e, `dirUpwards`);
function ve(e2, t2, n2, r2) {
  return (i2) => {
    let a2 = U, o2 = i2[a2(491)].swimlane.y + t2.swimlanePadding, c2 = i2.targetBox.swimlane.y + t2.swimlanePadding, l2 = _e(o2, c2), u2 = i2.sourceBox.x + i2.sourceBox.dimension.width * 2 / 3, d2 = i2[a2(514)].x + i2.targetBox.dimension.width / 3, f2, p2;
    s.debug(`rendering relation up=` + l2 + ` for `, { sourceBox: i2.sourceBox, targetBox: i2.targetBox }), l2 ? (f2 = o2, p2 = c2 + i2.targetBox.dimension.height) : (f2 = o2 + i2[a2(491)][a2(478)].height, p2 = c2);
    let m2 = r2.emRelationStroke ?? i2.visual.stroke;
    e2.append(a2(522)).attr(`class`, `em-relation`)[a2(475)](`fill`, i2.visual.fill).attr(`stroke`, m2).attr(`stroke-width`, `1`).attr(`marker-end`, `url(#` + n2 + `)`).attr(`d`, `M` + u2 + ` ` + f2 + ` L` + d2 + ` ` + p2);
  };
}
c(ve, `renderD3Relation`);
function ye(e2, t2, n2, r2) {
  return (i2) => {
    let a2 = U, o2 = e2.append(`g`)[a2(475)](`class`, `em-swimlane`), s2 = r2.emSwimlaneBackgroundOdd ?? a2(451), c2 = r2[a2(496)] ?? `rgb(240,240,240)`;
    o2.append(`rect`).attr(`x`, 0)[a2(475)](`y`, i2.y).attr(`rx`, `3`).attr(`width`, t2 + n2[a2(498)])[a2(475)](`height`, i2.height).attr(`fill`, s2).attr(`stroke`, c2), o2[a2(507)](`text`).attr(a2(510), n2.swimlaneTextFontWeight).attr(`x`, 30)[a2(475)](`y`, i2.y + 30).text(i2.label);
  };
}
c(ye, `renderD3Swimlane`);
var be = { parser: me, db: Q, renderer: { draw: c(function(e2, t2, n2, r2) {
  let a2 = b;
  if (s.debug(`in eventmodeling renderer`, e2 + `
`, `id:`, t2, n2), !he) throw Error(`EventModeling config not found`);
  let o2 = r2.db, { themeVariables: c2, eventmodeling: l2 } = d(), u2 = i(a2(512) + t2 + `"]`), f2 = o2.getDiagramProps(), p2 = o2.getState(), m2 = `em-arrowhead-` + t2, g2 = c2[a2(504)] ?? `#000000`;
  p2.sortedSwimlanesArray.forEach(ye(u2, p2.maxR, f2, c2)), p2.boxes.forEach(ge(u2, f2)), p2.relations.forEach(ve(u2, f2, m2, c2)), u2.append(`defs`).append(a2(468))[a2(475)](`id`, m2).attr(a2(474), `10`)[a2(475)](`markerHeight`, `7`).attr(`refX`, `10`).attr(`refY`, a2(463))[a2(475)](`orient`, a2(465))[a2(507)](a2(520)).attr(`points`, a2(511)).attr(`fill`, g2), h(void 0, u2, (l2 == null ? void 0 : l2.padding) ?? 30, l2 == null ? void 0 : l2.useMaxWidth);
}, `draw`) }, styles: c((e2) => ``, `getStyles`) };
function $() {
  let e2 = [`maxHeight`, `</code>`, `dataReference`, `sourceFrames`, `5196VzacmZ`, `evolveRelationPositioned`, `sourceBox`, `669qVRkaa`, `bold`, `sourceFrame`, `4062588sWtxGo`, `emSwimlaneBackgroundStroke`, `boxPadding`, `swimlanePadding`, `2884617gLrNGz`, `frames`, `contentStartX`, `14763504hFyrfU`, `split`, `emArrowhead`, `values`, `hasSourceFrame`, `append`, `filter`, `decidePositionFrame`, `font-weight`, `0 0, 10 3.5, 0 7`, `[id="`, `30iQhWxc`, `targetBox`, `clear`, `554700mgEnZH`, `debug`, `10GkQnqn`, `</b>`, `polygon`, `Stream: `, `path`, `indexOf`, `frame positioned`, `width`, `UI/Automation`, `position relation`, `text`, `rgb(250,250,250)`, `style`, `name`, `relation positioned`, `#679ac3`, `setAst`, `#a3b732`, `4913685YlQmXY`, `labelEventsPrefix`, `replaceAll`, `emCommandFill`, `3176538HIeuVL`, `3.5`, `length`, `auto`, `center`, `evolve events`, `marker`, `dataInlineValue`, `emEventStroke`, `swimlaneMinHeight`, `swimlanes`, `namespace`, `markerWidth`, `attr`, `find`, `frame`, `dimension`, `boxes`, `rmo`, `textMaxWidth`, `index`, `substring`, `boxTextPadding`];
  return $ = function() {
    return e2;
  }, $();
}
export {
  be as diagram
};
