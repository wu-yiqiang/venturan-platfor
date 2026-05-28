import { d as e, g as t, m as n } from "./src-B18GHWxx.js";
import { n as r, t as i } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { L as a, V as o, g as s, q as c } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { V as l } from "./chunk-5ZQYHXKU-BklVe06k.js";
import "./chunk-O5CBEL6O-CERCp6yT.js";
import "./chunk-BSJP7CBP-DNSq_z0Y.js";
import "./chunk-L5ZTLDWV-CfFez56L.js";
import { nt as u } from "./graphlib-DTFeuqXt.js";
import "./chunk-NZK2D7GU-Bb3JacnP.js";
import "./chunk-3OPIFGDE-tadvN-H3.js";
import "./chunk-KSCS5N6A-yNMqidgz.js";
import "./chunk-LZXEDZCA-BdFEls6v.js";
import "./chunk-55IACEB6-C7qtBjmn.js";
import "./chunk-2J33WTMH-DU_MCT0n.js";
import { r as d } from "./dagre-CDN7GhC3.js";
import { i as f, n as p, t as m } from "./chunk-AQP2D5EJ-BQSEUPQP.js";
var h = _;
(function(e2, t2) {
  let n2 = _, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(271)) / 1 + -parseInt(n2(253)) / 2 * (-parseInt(n2(273)) / 3) + parseInt(n2(277)) / 4 * (parseInt(n2(246)) / 5) + parseInt(n2(238)) / 6 + -parseInt(n2(237)) / 7 + parseInt(n2(224)) / 8 + -parseInt(n2(279)) / 9 * (parseInt(n2(223)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(g, 637378);
function g() {
  let e2 = `getRows.rect.state.note.marker.insertMarkers.textHeight.end.refY.length.root.text-anchor.<br/>.drawDescrState.start.forEach.152302VzcQcI.Title height.21uhuyno.transition.type.state-title.4gdlaZJ.font-size.3195OoujgP.title.descriptions.class.getBBox.lineBreakRegex.line.Edge .node.padding.44610LRnjUG.9987616Zybhsx.text.insert.relationType.width.tight-tree.setParent.fontSize.height.setConf.min.drawEdge.edgeLengthFactor.6448309JnmSMT.2951730FzYHxn.contentDocument.attr. -> .compositTitleSize.edge.debug.append.6220325eYqULz.COMPOSITION.-note.noteMargin.stroke.circle.forkHeight.1556lNLGeB.addTitleAndBox`.split(`.`);
  return g = function() {
    return e2;
  }, g();
}
function _(e2, t2) {
  return e2 -= 214, g()[e2];
}
var v = i((e2) => e2.append(`circle`)[h(240)](`class`, `start-state`)[h(240)](`r`, o().state.sizeUnit).attr(`cx`, o().state.padding + o()[h(257)].sizeUnit).attr(`cy`, o().state.padding + o()[h(257)].sizeUnit), `drawStartState`), y = i((e2) => e2.append(`line`).style(`stroke`, `grey`).style(`stroke-dasharray`, `3`)[h(240)](`x1`, o().state[h(261)]).attr(`class`, `divider`).attr(`x2`, o().state.textHeight * 2).attr(`y1`, 0).attr(`y2`, 0), `drawDivider`), b = i((e2, t2) => {
  let n2 = h, r2 = e2.append(`text`).attr(`x`, 2 * o().state.padding).attr(`y`, o()[n2(257)].textHeight + 2 * o().state.padding).attr(`font-size`, o().state.fontSize).attr(`class`, n2(276)).text(t2.id), i2 = r2.node().getBBox();
  return e2[n2(226)](`rect`, `:first-child`).attr(`x`, o().state[n2(222)]).attr(`y`, o().state[n2(222)])[n2(240)](`width`, i2[n2(228)] + 2 * o().state.padding).attr(`height`, i2.height + 2 * o().state.padding)[n2(240)](`rx`, o().state.radius), r2;
}, `drawSimpleState`), x = i((e2, t2) => {
  let n2 = h, r2 = i(function(e3, t3, n3) {
    let r3 = _, i2 = e3.append(`tspan`).attr(`x`, 2 * o().state.padding).text(t3);
    n3 || i2.attr(`dy`, o()[r3(257)][r3(261)]);
  }, `addTspan`), a2 = e2.append(`text`)[n2(240)](`x`, 2 * o().state.padding)[n2(240)](`y`, o().state.textHeight + 1.3 * o().state.padding).attr(n2(278), o()[n2(257)][n2(231)]).attr(`class`, `state-title`).text(t2.descriptions[0]).node()[n2(217)](), s2 = a2.height, c2 = e2[n2(245)](`text`)[n2(240)](`x`, o().state.padding)[n2(240)](`y`, s2 + o()[n2(257)][n2(222)] * 0.4 + o()[n2(257)].dividerMargin + o().state.textHeight)[n2(240)](`class`, `state-description`), l2 = true, u2 = true;
  t2.descriptions.forEach(function(e3) {
    l2 || (r2(c2, e3, u2), u2 = false), l2 = false;
  });
  let d2 = e2.append(n2(219)).attr(`x1`, o().state.padding).attr(`y1`, o().state.padding + s2 + o().state.dividerMargin / 2).attr(`y2`, o().state.padding + s2 + o().state.dividerMargin / 2).attr(n2(216), `descr-divider`), f2 = c2.node().getBBox(), p2 = Math.max(f2.width, a2.width);
  return d2.attr(`x2`, p2 + 3 * o().state.padding), e2.insert(`rect`, `:first-child`).attr(`x`, o().state.padding).attr(`y`, o().state[n2(222)]).attr(n2(228), p2 + 2 * o().state.padding).attr(`height`, f2.height + s2 + 2 * o().state[n2(222)])[n2(240)](`rx`, o().state.radius), e2;
}, h(268)), S = i((e2, t2, n2) => {
  let r2 = h, i2 = o().state.padding, a2 = 2 * o()[r2(257)].padding, s2 = e2[r2(221)]().getBBox(), c2 = s2.width, l2 = s2.x, u2 = e2.append(`text`).attr(`x`, 0).attr(`y`, o().state.titleShift).attr(`font-size`, o().state.fontSize)[r2(240)](`class`, `state-title`).text(t2.id), d2 = u2[r2(221)]().getBBox()[r2(228)] + a2, f2 = Math.max(d2, c2);
  f2 === c2 && (f2 += a2);
  let p2, m2 = e2.node().getBBox();
  t2.doc, p2 = l2 - i2, d2 > c2 && (p2 = (c2 - f2) / 2 + i2), Math.abs(l2 - m2.x) < i2 && d2 > c2 && (p2 = l2 - (d2 - c2) / 2);
  let g2 = 1 - o()[r2(257)].textHeight;
  return e2[r2(226)](r2(256), `:first-child`).attr(`x`, p2).attr(`y`, g2)[r2(240)](r2(216), n2 ? `alt-composit` : `composit`).attr(r2(228), f2).attr(`height`, m2.height + o().state.textHeight + o().state.titleShift + 1).attr(`rx`, `0`), u2[r2(240)](`x`, p2 + i2), d2 <= c2 && u2.attr(`x`, l2 + (f2 - a2) / 2 - d2 / 2 + i2), e2.insert(`rect`, `:first-child`).attr(`x`, p2)[r2(240)](`y`, o().state.titleShift - o().state.textHeight - o().state.padding)[r2(240)](`width`, f2)[r2(240)](`height`, o().state.textHeight * 3).attr(`rx`, o().state.radius), e2[r2(226)](r2(256), `:first-child`).attr(`x`, p2).attr(`y`, o()[r2(257)].titleShift - o().state.textHeight - o().state.padding).attr(`width`, f2).attr(`height`, m2.height + 3 + 2 * o().state[r2(261)]).attr(`rx`, o().state.radius), e2;
}, h(254)), C = i((e2) => (e2.append(h(251)).attr(h(216), `end-state-outer`)[h(240)](`r`, o().state.sizeUnit + o().state.miniPadding).attr(`cx`, o().state.padding + o().state.sizeUnit + o().state.miniPadding).attr(`cy`, o().state.padding + o().state.sizeUnit + o().state.miniPadding), e2[h(245)](`circle`).attr(`class`, `end-state-inner`).attr(`r`, o().state.sizeUnit).attr(`cx`, o().state[h(222)] + o().state.sizeUnit + 2).attr(`cy`, o().state[h(222)] + o().state.sizeUnit + 2)), `drawEndState`), w = i((e2, t2) => {
  let n2 = h, r2 = o().state.forkWidth, i2 = o().state[n2(252)];
  if (t2.parentId) {
    let e3 = r2;
    r2 = i2, i2 = e3;
  }
  return e2.append(`rect`).style(n2(250), `black`).style(`fill`, `black`).attr(`width`, r2).attr(`height`, i2).attr(`x`, o().state.padding).attr(`y`, o().state.padding);
}, `drawForkJoinState`), T = i((e2, t2, n2, r2) => {
  let i2 = h, a2 = 0, c2 = r2.append(`text`);
  c2.style(i2(266), i2(269)), c2[i2(240)](`class`, `noteText`);
  let l2 = e2.replace(/\r\n/g, i2(267));
  l2 = l2.replace(/\n/g, `<br/>`);
  let u2 = l2.split(s[i2(218)]), d2 = 1.25 * o().state.noteMargin;
  for (let e3 of u2) {
    let r3 = e3.trim();
    if (r3.length > 0) {
      let e4 = c2[i2(245)](`tspan`);
      if (e4[i2(225)](r3), d2 === 0) {
        let t3 = e4.node().getBBox();
        d2 += t3[i2(232)];
      }
      a2 += d2, e4.attr(`x`, t2 + o().state.noteMargin), e4.attr(`y`, n2 + a2 + 1.25 * o().state[i2(249)]);
    }
  }
  return { textWidth: c2.node().getBBox().width, textHeight: a2 };
}, `_drawLongText`), E = i((e2, t2) => {
  let n2 = h;
  t2.attr(`class`, `state-note`);
  let r2 = t2.append(n2(256)).attr(`x`, 0).attr(`y`, o().state[n2(222)]), { textWidth: i2, textHeight: a2 } = T(e2, 0, 0, t2[n2(245)](`g`));
  return r2[n2(240)](n2(232), a2 + 2 * o().state.noteMargin), r2[n2(240)](n2(228), i2 + o().state.noteMargin * 2), r2;
}, `drawNote`), D = i(function(e2, t2) {
  let n2 = h, r2 = t2.id, i2 = { id: r2, label: t2.id, width: 0, height: 0 }, a2 = e2.append(`g`).attr(`id`, r2).attr(`class`, `stateGroup`);
  t2[n2(275)] === n2(269) && v(a2), t2[n2(275)] === n2(262) && C(a2), (t2[n2(275)] === `fork` || t2.type === `join`) && w(a2, t2), t2.type === `note` && E(t2.note.text, a2), t2.type === `divider` && y(a2), t2.type === `default` && t2.descriptions.length === 0 && b(a2, t2), t2[n2(275)] === `default` && t2[n2(215)].length > 0 && x(a2, t2);
  let s2 = a2.node()[n2(217)]();
  return i2.width = s2[n2(228)] + 2 * o()[n2(257)][n2(222)], i2.height = s2.height + 2 * o()[n2(257)].padding, i2;
}, `drawState`), O = 0, k = i(function(n2, c2, u2) {
  let d2 = h, p2 = i(function(e2) {
    let t2 = _;
    switch (e2) {
      case f.relationType.AGGREGATION:
        return `aggregation`;
      case f.relationType.EXTENSION:
        return `extension`;
      case f[t2(227)][t2(247)]:
        return `composition`;
      case f.relationType.DEPENDENCY:
        return `dependency`;
    }
  }, `getRelationType`);
  c2.points = c2.points.filter((e2) => !Number.isNaN(e2.y));
  let m2 = c2.points, g2 = t().x(function(e2) {
    return e2.x;
  }).y(function(e2) {
    return e2.y;
  }).curve(e), v2 = n2[d2(245)](`path`).attr(`d`, g2(m2)).attr(`id`, `edge` + O).attr(`class`, d2(274)), y2 = ``;
  if (o().state.arrowMarkerAbsolute && (y2 = a(true)), v2[d2(240)](`marker-end`, `url(` + y2 + `#` + p2(f.relationType.DEPENDENCY) + `End)`), u2.title !== void 0) {
    let e2 = n2.append(`g`).attr(`class`, `stateLabel`), { x: t2, y: i2 } = l.calcLabelPosition(c2.points), a2 = s.getRows(u2.title), f2 = 0, p3 = [], m3 = 0, h2 = 0;
    for (let n3 = 0; n3 <= a2.length; n3++) {
      let o2 = e2.append(`text`).attr(`text-anchor`, `middle`).text(a2[n3]).attr(`x`, t2).attr(`y`, i2 + f2), s2 = o2.node().getBBox();
      m3 = Math.max(m3, s2.width), h2 = Math[d2(234)](h2, s2.x), r.info(s2.x, t2, i2 + f2), f2 === 0 && (f2 = o2.node().getBBox().height, r.info(d2(272), f2, i2)), p3.push(o2);
    }
    let g3 = f2 * a2.length;
    if (a2.length > 1) {
      let e3 = (a2[d2(264)] - 1) * f2 * 0.5;
      p3.forEach((t3, n3) => t3.attr(`y`, i2 + n3 * f2 - e3)), g3 = f2 * a2[d2(264)];
    }
    let _2 = e2[d2(221)]().getBBox();
    e2.insert(`rect`, `:first-child`).attr(d2(216), `box`).attr(`x`, t2 - m3 / 2 - o().state.padding / 2)[d2(240)](`y`, i2 - g3 / 2 - o().state.padding / 2 - 3.5)[d2(240)](d2(228), m3 + o().state[d2(222)]).attr(`height`, g3 + o()[d2(257)][d2(222)]), r.info(_2);
  }
  O++;
}, h(235)), A, j = {}, M = i(function() {
}, h(233)), N = i(function(e2) {
  let t2 = h;
  e2.append(`defs`).append(t2(259)).attr(`id`, `dependencyEnd`)[t2(240)](`refX`, 19)[t2(240)](t2(263), 7).attr(`markerWidth`, 20)[t2(240)](`markerHeight`, 28).attr(`orient`, `auto`).append(`path`)[t2(240)](`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, h(260)), P = i(function(e2, t2, i2, a2) {
  let s2 = h;
  A = o().state;
  let l2 = o().securityLevel, u2;
  l2 === `sandbox` && (u2 = n(`#i` + t2));
  let d2 = n(l2 === `sandbox` ? u2.nodes()[0][s2(239)].body : `body`), f2 = l2 === `sandbox` ? u2.nodes()[0].contentDocument : document;
  r[s2(244)](`Rendering diagram ` + e2);
  let p2 = d2.select(`[id='` + t2 + `']`);
  N(p2), I(a2.db.getRootDoc(), p2.append(`g`)[s2(240)](`id`, t2 + `-root`), void 0, false, d2, f2, a2);
  let m2 = A.padding, g2 = p2[s2(221)]().getBBox(), _2 = g2.width + m2 * 2, v2 = g2.height + m2 * 2;
  c(p2, v2, _2 * 1.75, A.useMaxWidth), p2.attr(`viewBox`, g2.x - A.padding + `  ` + (g2.y - A.padding) + ` ` + _2 + ` ` + v2);
}, `draw`), F = i((e2) => e2 ? e2.length * A.fontSizeFactor : 1, `getLabelWidth`), I = i((e2, t2, n2, i2, a2, o2, c2) => {
  let l2 = h, f2 = new u({ compound: true, multigraph: true }), p2, m2 = true;
  for (p2 = 0; p2 < e2[l2(264)]; p2++) if (e2[p2].stmt === `relation`) {
    m2 = false;
    break;
  }
  n2 ? f2.setGraph({ rankdir: `LR`, multigraph: true, compound: true, ranker: `tight-tree`, ranksep: m2 ? 1 : A[l2(236)], nodeSep: m2 ? 1 : 50, isMultiGraph: true }) : f2.setGraph({ rankdir: `TB`, multigraph: true, compound: true, ranksep: m2 ? 1 : A.edgeLengthFactor, nodeSep: m2 ? 1 : 50, ranker: l2(229), isMultiGraph: true }), f2.setDefaultEdgeLabel(function() {
    return {};
  });
  let g2 = c2.db.getStates(), _2 = c2.db.getRelations(), v2 = Object.keys(g2);
  for (let e3 of v2) {
    let r2 = g2[e3];
    n2 && (r2.parentId = n2);
    let s2;
    if (r2.doc) {
      let e4 = t2.append(`g`)[l2(240)](`id`, r2.id)[l2(240)](l2(216), `stateGroup`);
      s2 = I(r2.doc, e4, r2.id, !i2, a2, o2, c2);
      {
        e4 = S(e4, r2, i2);
        let t3 = e4.node().getBBox();
        s2.width = t3.width, s2[l2(232)] = t3.height + A.padding / 2, j[r2.id] = { y: A[l2(242)] };
      }
    } else s2 = D(t2, r2, f2);
    if (r2.note) {
      let e4 = D(t2, { descriptions: [], id: r2.id + `-note`, note: r2.note, type: l2(258) }, f2);
      r2.note.position === `left of` ? (f2.setNode(s2.id + l2(248), e4), f2.setNode(s2.id, s2)) : (f2.setNode(s2.id, s2), f2.setNode(s2.id + `-note`, e4)), f2[l2(230)](s2.id, s2.id + `-group`), f2.setParent(s2.id + `-note`, s2.id + `-group`);
    } else f2.setNode(s2.id, s2);
  }
  r[l2(244)](`Count=`, f2.nodeCount(), f2);
  let y2 = 0;
  _2[l2(270)](function(e3) {
    let t3 = l2;
    y2++, r[t3(244)](`Setting edge`, e3), f2.setEdge(e3.id1, e3.id2, { relation: e3, width: F(e3.title), height: A.labelHeight * s[t3(255)](e3[t3(214)]).length, labelpos: `c` }, `id` + y2);
  }), d(f2), r.debug(`Graph after layout`, f2.nodes());
  let b2 = t2.node();
  f2.nodes().forEach(function(e3) {
    let t3 = l2;
    e3 !== void 0 && f2[t3(221)](e3) !== void 0 ? (r.warn(`Node ` + e3 + `: ` + JSON.stringify(f2.node(e3))), a2.select(`#` + b2.id + ` #` + e3).attr(`transform`, `translate(` + (f2.node(e3).x - f2.node(e3).width / 2) + `,` + (f2.node(e3).y + (j[e3] ? j[e3].y : 0) - f2.node(e3).height / 2) + ` )`), a2.select(`#` + b2.id + ` #` + e3)[t3(240)](`data-x-shift`, f2.node(e3).x - f2.node(e3).width / 2), o2.querySelectorAll(`#` + b2.id + ` #` + e3 + ` .divider`).forEach((e4) => {
      let t4 = e4.parentElement, n3 = 0, r2 = 0;
      t4 && (t4.parentElement && (n3 = t4.parentElement.getBBox().width), r2 = parseInt(t4.getAttribute(`data-x-shift`), 10), Number.isNaN(r2) && (r2 = 0)), e4.setAttribute(`x1`, 0 - r2 + 8), e4.setAttribute(`x2`, n3 - r2 - 8);
    })) : r[t3(244)](`No Node ` + e3 + `: ` + JSON.stringify(f2.node(e3)));
  });
  let x2 = b2.getBBox();
  f2.edges()[l2(270)](function(e3) {
    let n3 = l2;
    e3 !== void 0 && f2[n3(243)](e3) !== void 0 && (r.debug(n3(220) + e3.v + n3(241) + e3.w + `: ` + JSON.stringify(f2.edge(e3))), k(t2, f2.edge(e3), f2.edge(e3).relation));
  }), x2 = b2.getBBox();
  let C2 = { id: n2 || l2(265), label: n2 || `root`, width: 0, height: 0 };
  return C2.width = x2.width + 2 * A.padding, C2.height = x2.height + 2 * A.padding, r[l2(244)](`Doc rendered`, C2, f2), C2;
}, `renderDoc`), L = { parser: p, get db() {
  return new f(1);
}, renderer: { setConf: M, draw: P }, styles: m, init: i((e2) => {
  e2[h(257)] || (e2.state = {}), e2.state.arrowMarkerAbsolute = e2.arrowMarkerAbsolute;
}, `init`) };
export {
  L as diagram
};
