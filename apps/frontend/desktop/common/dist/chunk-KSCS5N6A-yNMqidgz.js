import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { A as i, B as a, D as o, H as s, I as c, Q as l, d as u, et as d, g as f, l as p, m, t as h } from "./src-B18GHWxx.js";
import { n as g, t as _ } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { $ as v, V as y, z as b } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { I as x, U as S, V as C, w as ee } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as w } from "./chunk-O5CBEL6O-CERCp6yT.js";
import { i as T, n as te, r as E, t as D } from "./chunk-BSJP7CBP-DNSq_z0Y.js";
import { t as O } from "./chunk-L5ZTLDWV-CfFez56L.js";
import { r as k, t as ne } from "./chunk-NZK2D7GU-Bb3JacnP.js";
import { n as re } from "./rough.esm-Ct7jHvNv.js";
import { r as A } from "./chunk-3OPIFGDE-tadvN-H3.js";
var j = $;
(function(e2, t2) {
  let n2 = $, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(166)) / 1 * (-parseInt(n2(206)) / 2) + -parseInt(n2(205)) / 3 * (-parseInt(n2(231)) / 4) + -parseInt(n2(251)) / 5 * (parseInt(n2(236)) / 6) + -parseInt(n2(293)) / 7 + -parseInt(n2(262)) / 8 * (parseInt(n2(203)) / 9) + -parseInt(n2(170)) / 10 * (-parseInt(n2(182)) / 11) + parseInt(n2(247)) / 12 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(M, 353679);
function M() {
  let e2 = `refX.arrowMarkerPath.
  node        : x:.M 18,7 L9,13 L1,7 L9,1 Z.fromCluster.children.insert.append.animation.class.circle.M 0 5 L 10 10 L 10 0 z.309172WHCCET.one_or_more.-zeroOrOneEnd.classes.replace.36nqSmNB.cssCompiledStyles.animate.arrowTypeStart.-circleEnd.-zeroOrMoreEnd.marker zeroOrMore .endLeft.flowchart.sin.arrowMarkerAbsolute.5508792xbdREB.extractCornerPoints.translate(.stroke-dasharray.66530DKLNfF.width.markerUnits.basis.zero_or_more_neo.-requirement_arrowEnd.calculateDeltaAndAngle.attr.polygon.push.pathname.153632GkTXOm.marker.node.-lollipopStart.white.marker lollipop .-dependencyEnd.markerHeight.-compositionEnd-margin.composition.orient.startLabelLeft.fill.M 1,1 l 9,9 M 10,1 l -9,9.abs.markerWidth.startLabelRight.viewBox.-margin.stroke-width.reduce.getBoundingClientRect.fixCorners.neo.-barbEnd.location.0 0 20 14.positionEdgeLabel." \u2014 edge IDs require a diagram prefix for uniqueness.length.point.2327129SBoKgk.-onlyOneEnd.stroke:.floor.edgeTerminals.M3,0 L3,18 M9,0 L9,18.-circleStart-margin.M21,0 L21,18.monotoneX.barb.forEach.onlyOne.0 0 25 20.set.-crossStart-margin. edge-pattern-dashed.clear.refY.includes.data-id.marker composition ., r .pattern.userSpaceOnUse.0 0 15 15.M 18,7 L9,13 L14,7 L9,1 Z.164677bXuWWR.label.to cluster abc88.url(.430qIjPFb.points.selectAll.requirement_arrow.M 5,7 L9,13 L1,7 L9,1 Z.dotted.endLabelRight.marker aggregation .-oneOrMoreStart.height.marker oneOrMore .calcTerminalLabelPosition.1749CnHmps.path.stroke.querySelectorAll.findAdjacentPoint.curve.M0,0
      L20,10
      M20,10
      L0,20.-dependencyStart.transparent.solid.arrowTypeEnd.stringify.defs.getBBox.-compositionStart.updatedPath.; stroke-dashoffset: 0;.info.style.0 0 10 10.get.9vfXLqJ.cloneNode.6VbmWtM.2eSHYTC.UIO intersect check.sides calc abc89, Q .marker .1,0.originalPath.generateRoundedPath.warn.returning points.dependency.auto.zero_or_one.endLabelLeft`.split(`.`);
  return M = function() {
    return e2;
  }, M();
}
n(), t();
var ie = _((e2, t2, n2, r2, i2, a2 = false, o2) => {
  t2.arrowTypeStart && F(e2, `start`, t2.arrowTypeStart, n2, r2, i2, a2, o2), t2.arrowTypeEnd && F(e2, `end`, t2.arrowTypeEnd, n2, r2, i2, a2, o2);
}, `addEdgeMarkers`), N = { arrow_cross: { type: `cross`, fill: false }, arrow_point: { type: j(292), fill: true }, arrow_barb: { type: j(302), fill: true }, arrow_barb_neo: { type: `barb`, fill: true }, arrow_circle: { type: `circle`, fill: false }, aggregation: { type: `aggregation`, fill: false }, extension: { type: `extension`, fill: false }, composition: { type: `composition`, fill: true }, dependency: { type: `dependency`, fill: true }, lollipop: { type: `lollipop`, fill: false }, only_one: { type: j(151), fill: false }, zero_or_one: { type: `zeroOrOne`, fill: false }, one_or_more: { type: `oneOrMore`, fill: false }, zero_or_more: { type: `zeroOrMore`, fill: false }, requirement_arrow: { type: `requirement_arrow`, fill: false }, requirement_contains: { type: `requirement_contains`, fill: false } }, P = [`cross`, j(292), `circle`, `lollipop`, `aggregation`, `extension`, j(271), `dependency`, `barb`], F = _((e2, t2, n2, r2, i2, a2, o2 = false, s2) => {
  let c2 = j, l2 = N[n2], u2 = l2 && P[c2(158)](l2.type);
  if (!l2) {
    g.warn(`Unknown arrow type: ` + n2);
    return;
  }
  let d2 = i2 + `_` + a2 + `-` + l2.type + (t2 === `start` ? `Start` : `End`) + (o2 && u2 ? c2(280) : ``);
  if (s2 && s2.trim() !== ``) {
    let n3 = d2 + `_` + s2.replace(/[^\dA-Za-z]/g, `_`);
    if (!document.getElementById(n3)) {
      let e3 = document.getElementById(d2);
      if (e3) {
        var f2;
        let t3 = e3[c2(204)](true);
        t3.id = n3, t3[c2(185)](`path, circle, line`).forEach((e4) => {
          let t4 = c2;
          e4.setAttribute(t4(184), s2), l2.fill && e4.setAttribute(`fill`, s2);
        }), (f2 = e3.parentNode) == null || f2.appendChild(t3);
      }
    }
    e2.attr(`marker-` + t2, c2(169) + r2 + `#` + n3 + `)`);
  } else e2[c2(258)](`marker-` + t2, `url(` + r2 + `#` + d2 + `)`);
}, `addEdgeMarker`), ae = _((e2) => {
  var t2;
  return typeof e2 == `string` ? e2 : (t2 = y()) == null || (t2 = t2.flowchart) == null ? void 0 : t2.curve;
}, `resolveEdgeCurveType`), I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), R = _(() => {
  let e2 = j;
  I.clear(), L[e2(156)]();
}, `clear`), z = _((e2) => e2 ? typeof e2 == `string` ? e2 : e2.reduce((e3, t2) => e3 + `;` + t2, ``) : ``, `getLabelStyles`), B = _((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = $, r2 = y(), i2 = v(r2), { labelStyles: a2 } = k(t2);
    t2.labelStyle = a2;
    let o2 = e3.insert(`g`).attr(`class`, `edgeLabel`), s2 = o2.insert(`g`).attr(`class`, `label`).attr(n2(159), t2.id), c2 = t2.labelType === `markdown`, l2 = yield w(e3, t2[n2(167)], { style: z(t2.labelStyle), useHtmlLabels: i2, addSvgBackground: true, isNode: false, markdown: c2, width: void 0 }, r2);
    s2.node().appendChild(l2), g.info(`abc82`, t2, t2.labelType);
    let u2 = l2.getBBox(), d2 = u2;
    if (i2) {
      let e4 = l2.children[0], t3 = m(l2);
      u2 = e4.getBoundingClientRect(), d2 = u2, t3[n2(258)](`width`, u2[n2(252)]), t3.attr(`height`, u2.height);
    } else {
      let e4 = m(l2).select(`text`).node();
      e4 && typeof e4[n2(195)] == `function` && (d2 = e4.getBBox());
    }
    s2.attr(`transform`, T(d2, i2)), I[n2(153)](t2.id, o2), t2[n2(252)] = u2.width, t2.height = u2.height;
    let f2;
    if (t2[n2(273)]) {
      let r3 = e3[n2(225)](`g`).attr(`class`, `edgeTerminals`), a3 = r3.insert(`g`).attr(n2(228), `inner`), o3 = yield A(a3, t2[n2(273)], z(t2.labelStyle) || ``, false, false);
      f2 = o3;
      let s3 = o3.getBBox();
      if (i2) {
        let e4 = o3[n2(224)][0], t3 = m(o3);
        s3 = e4[n2(283)](), t3.attr(n2(252), s3.width), t3.attr(`height`, s3.height);
      }
      a3.attr(`transform`, T(s3, i2)), L[n2(202)](t2.id) || L.set(t2.id, {}), L.get(t2.id).startLeft = r3, V(f2, t2.startLabelLeft);
    }
    if (t2.startLabelRight) {
      let r3 = e3.insert(`g`).attr(`class`, n2(297)), a3 = r3.insert(`g`)[n2(258)](`class`, `inner`), o3 = yield A(a3, t2.startLabelRight, z(t2.labelStyle) || ``, false, false);
      f2 = o3;
      let s3 = o3.getBBox();
      if (i2) {
        let e4 = o3.children[0], t3 = m(o3);
        s3 = e4.getBoundingClientRect(), t3[n2(258)](n2(252), s3.width), t3[n2(258)](`height`, s3[n2(179)]);
      }
      a3[n2(258)](`transform`, T(s3, i2)), L.get(t2.id) || L[n2(153)](t2.id, {}), L.get(t2.id).startRight = r3, V(f2, t2[n2(278)]);
    }
    if (t2.endLabelLeft) {
      let r3 = e3.insert(`g`).attr(`class`, n2(297)), a3 = r3.insert(`g`).attr(`class`, `inner`), o3 = yield A(r3, t2[n2(218)], z(t2.labelStyle) || ``, false, false);
      f2 = o3;
      let s3 = o3.getBBox();
      if (i2) {
        let e4 = o3.children[0], t3 = m(o3);
        s3 = e4.getBoundingClientRect(), t3[n2(258)](`width`, s3.width), t3.attr(`height`, s3.height);
      }
      a3.attr(`transform`, T(s3, i2)), L[n2(202)](t2.id) || L[n2(153)](t2.id, {}), L.get(t2.id).endLeft = r3, V(f2, t2.endLabelLeft);
    }
    if (t2.endLabelRight) {
      let r3 = e3.insert(`g`).attr(`class`, `edgeTerminals`), a3 = r3[n2(225)](`g`).attr(`class`, `inner`), o3 = yield A(r3, t2[n2(176)], z(t2.labelStyle) || ``, false, false);
      f2 = o3;
      let s3 = o3.getBBox();
      if (i2) {
        let e4 = o3.children[0], t3 = m(o3);
        s3 = e4.getBoundingClientRect(), t3.attr(`width`, s3[n2(252)]), t3.attr(n2(179), s3.height);
      }
      a3.attr(`transform`, T(s3, i2)), L.get(t2.id) || L.set(t2.id, {}), L.get(t2.id).endRight = r3, V(f2, t2.endLabelRight);
    }
    return l2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `insertEdgeLabel`);
function V(e2, t2) {
  v(y()) && e2 && (e2.style.width = t2.length * 9 + `px`, e2.style.height = `12px`);
}
_(V, `setTerminalWidth`);
var H = _((e2, t2) => {
  let n2 = j;
  g.debug(`Moving label abc88 `, e2.id, e2.label, I.get(e2.id), t2);
  let r2 = t2[n2(197)] ? t2.updatedPath : t2[n2(211)], { subGraphTitleTotalMargin: i2 } = O(y());
  if (e2.label) {
    let a2 = I.get(e2.id), o2 = e2.x, s2 = e2.y;
    if (r2) {
      let n3 = C.calcLabelPosition(r2);
      g.debug(`Moving label ` + e2.label + ` from (`, o2, `,`, s2, `) to (`, n3.x, `,`, n3.y, `) abc88`), t2.updatedPath && (o2 = n3.x, s2 = n3.y);
    }
    a2[n2(258)](`transform`, `translate(` + o2 + `, ` + (s2 + i2 / 2) + `)`);
  }
  if (e2.startLabelLeft) {
    let t3 = L.get(e2.id).startLeft, i3 = e2.x, a2 = e2.y;
    if (r2) {
      let t4 = C.calcTerminalLabelPosition(e2.arrowTypeStart ? 10 : 0, `start_left`, r2);
      i3 = t4.x, a2 = t4.y;
    }
    t3[n2(258)](`transform`, n2(249) + i3 + `, ` + a2 + `)`);
  }
  if (e2.startLabelRight) {
    let t3 = L[n2(202)](e2.id).startRight, i3 = e2.x, a2 = e2.y;
    if (r2) {
      let t4 = C.calcTerminalLabelPosition(e2[n2(239)] ? 10 : 0, `start_right`, r2);
      i3 = t4.x, a2 = t4.y;
    }
    t3.attr(`transform`, `translate(` + i3 + `, ` + a2 + `)`);
  }
  if (e2.endLabelLeft) {
    let t3 = L[n2(202)](e2.id)[n2(243)], i3 = e2.x, a2 = e2.y;
    if (r2) {
      let t4 = C[n2(181)](e2.arrowTypeEnd ? 10 : 0, `end_left`, r2);
      i3 = t4.x, a2 = t4.y;
    }
    t3.attr(`transform`, `translate(` + i3 + `, ` + a2 + `)`);
  }
  if (e2[n2(176)]) {
    let t3 = L.get(e2.id).endRight, n3 = e2.x, i3 = e2.y;
    if (r2) {
      let t4 = C.calcTerminalLabelPosition(e2.arrowTypeEnd ? 10 : 0, `end_right`, r2);
      n3 = t4.x, i3 = t4.y;
    }
    t3.attr(`transform`, `translate(` + n3 + `, ` + i3 + `)`);
  }
}, j(289)), U = _((e2, t2) => {
  let n2 = j, r2 = e2.x, i2 = e2.y, a2 = Math.abs(t2.x - r2), o2 = Math.abs(t2.y - i2), s2 = e2[n2(252)] / 2, c2 = e2.height / 2;
  return a2 >= s2 || o2 >= c2;
}, `outsideNode`), W = _((e2, t2, n2) => {
  let r2 = j;
  g.debug(`intersection calc abc89:
  outsidePoint: ` + JSON.stringify(t2) + `
  insidePoint : ` + JSON.stringify(n2) + r2(221) + e2.x + ` y:` + e2.y + ` w:` + e2.width + ` h:` + e2.height);
  let i2 = e2.x, a2 = e2.y, o2 = Math.abs(i2 - n2.x), s2 = e2.width / 2, c2 = n2.x < t2.x ? s2 - o2 : s2 + o2, l2 = e2[r2(179)] / 2, u2 = Math.abs(t2.y - n2.y), d2 = Math.abs(t2.x - n2.x);
  if (Math[r2(276)](a2 - t2.y) * s2 > Math.abs(i2 - t2.x) * l2) {
    let e3 = n2.y < t2.y ? t2.y - l2 - a2 : a2 - l2 - t2.y;
    c2 = d2 * e3 / u2;
    let i3 = { x: n2.x < t2.x ? n2.x + c2 : n2.x - d2 + c2, y: n2.y < t2.y ? n2.y + u2 - e3 : n2.y - u2 + e3 };
    return c2 === 0 && (i3.x = t2.x, i3.y = t2.y), d2 === 0 && (i3.x = t2.x), u2 === 0 && (i3.y = t2.y), g.debug(`abc89 top/bottom calc, Q ` + u2 + `, q ` + e3 + `, R ` + d2 + r2(161) + c2, i3), i3;
  } else {
    c2 = n2.x < t2.x ? t2.x - s2 - i2 : i2 - s2 - t2.x;
    let e3 = u2 * c2 / d2, a3 = n2.x < t2.x ? n2.x + d2 - c2 : n2.x - d2 + c2, o3 = n2.y < t2.y ? n2.y + e3 : n2.y - e3;
    return g.debug(r2(208) + u2 + `, q ` + e3 + `, R ` + d2 + `, r ` + c2, { _x: a3, _y: o3 }), c2 === 0 && (a3 = t2.x, o3 = t2.y), d2 === 0 && (a3 = t2.x), u2 === 0 && (o3 = t2.y), { x: a3, y: o3 };
  }
}, `intersection`), G = _((e2, t2) => {
  let n2 = j;
  g[n2(213)](`abc88 cutPathAtIntersect`, e2, t2);
  let r2 = [], i2 = e2[0], a2 = false;
  return e2.forEach((e3) => {
    let o2 = n2;
    if (g[o2(199)](`abc88 checking point`, e3, t2), !U(t2, e3) && !a2) {
      let n3 = W(t2, i2, e3);
      g.debug(`abc88 inside`, e3, i2, n3), g.debug(`abc88 intersection`, n3, t2);
      let o3 = false;
      r2.forEach((e4) => {
        o3 || (o3 = e4.x === n3.x && e4.y === n3.y);
      }), r2.some((e4) => e4.x === n3.x && e4.y === n3.y) ? g.warn(`abc88 no intersect`, n3, r2) : r2.push(n3), a2 = true;
    } else g.warn(`abc88 outside`, e3, i2), i2 = e3, a2 || r2[o2(260)](e3);
  }), g.debug(n2(214), r2), r2;
}, `cutPathAtIntersect`);
function K(e2) {
  let t2 = j, n2 = [], r2 = [];
  for (let i2 = 1; i2 < e2.length - 1; i2++) {
    let a2 = e2[i2 - 1], o2 = e2[i2], s2 = e2[i2 + 1];
    (a2.x === o2.x && o2.y === s2.y && Math.abs(o2.x - s2.x) > 5 && Math[t2(276)](o2.y - a2.y) > 5 || a2.y === o2.y && o2.x === s2.x && Math.abs(o2.x - a2.x) > 5 && Math.abs(o2.y - s2.y) > 5) && (n2.push(o2), r2.push(i2));
  }
  return { cornerPoints: n2, cornerPointPositions: r2 };
}
_(K, j(248));
var q = _(function(e2, t2, n2) {
  let r2 = t2.x - e2.x, i2 = t2.y - e2.y, a2 = n2 / Math.sqrt(r2 * r2 + i2 * i2);
  return { x: t2.x - a2 * r2, y: t2.y - a2 * i2 };
}, j(186)), oe = _(function(e2) {
  let t2 = j, { cornerPointPositions: n2 } = K(e2), r2 = [];
  for (let i2 = 0; i2 < e2[t2(291)]; i2++) if (n2.includes(i2)) {
    let t3 = e2[i2 - 1], n3 = e2[i2 + 1], a2 = e2[i2], o2 = q(t3, a2, 5), s2 = q(n3, a2, 5), c2 = s2.x - o2.x, l2 = s2.y - o2.y;
    r2.push(o2);
    let u2 = Math.sqrt(2) * 2, d2 = { x: a2.x, y: a2.y };
    Math.abs(n3.x - t3.x) > 10 && Math.abs(n3.y - t3.y) >= 10 ? (g.debug(`Corner point fixing`, Math.abs(n3.x - t3.x), Math.abs(n3.y - t3.y)), d2 = a2.x === o2.x ? { x: c2 < 0 ? o2.x - 5 + u2 : o2.x + 5 - u2, y: l2 < 0 ? o2.y - u2 : o2.y + u2 } : { x: c2 < 0 ? o2.x - u2 : o2.x + u2, y: l2 < 0 ? o2.y - 5 + u2 : o2.y + 5 - u2 }) : g.debug(`Corner point skipping fixing`, Math.abs(n3.x - t3.x), Math.abs(n3.y - t3.y)), r2.push(d2, s2);
  } else r2.push(e2[i2]);
  return r2;
}, j(284)), se = _((e2, t2, n2) => {
  let r2 = j, i2 = e2 - t2 - n2, a2 = Math.floor(i2 / 4);
  return `0 ` + t2 + ` ` + Array(a2)[r2(274)](`2 2`).join(` `) + ` ` + n2;
}, `generateDashArray`), J = _(function(e2, t2, n2, r2, _2, v2, b2, w2 = false) {
  var _a;
  let T2 = j;
  if (!b2) throw Error(`insertEdge: missing diagramId for edge "` + t2.id + T2(290));
  let { handDrawnSeed: D2 } = y(), O2 = t2.points, k2 = false, A2 = _2;
  var M2 = v2;
  let N2 = [];
  for (let e3 in t2[T2(237)]) ne(e3) || N2[T2(260)](t2.cssCompiledStyles[e3]);
  g.debug(T2(207), t2[T2(171)], M2.x, A2.x), M2.intersect && A2.intersect && !w2 && (O2 = O2.slice(1, t2.points[T2(291)] - 1), O2.unshift(A2.intersect(O2[0])), g.debug(`Last point UIO`, t2.start, `-->`, t2.end, O2[O2.length - 1], M2, M2.intersect(O2[O2.length - 1])), O2.push(M2.intersect(O2[O2.length - 1])));
  let P2 = btoa(JSON.stringify(O2));
  t2.toCluster && (g.info(T2(168), n2[T2(202)](t2.toCluster)), O2 = G(t2.points, n2[T2(202)](t2.toCluster).node), k2 = true), t2.fromCluster && (g.debug(`from cluster abc88`, n2.get(t2.fromCluster), JSON[T2(193)](O2, null, 2)), O2 = G(O2.reverse(), n2.get(t2[T2(223)])[T2(264)]).reverse(), k2 = true);
  let F2 = O2.filter((e3) => !Number.isNaN(e3.y)), I2 = ae(t2[T2(187)]);
  I2 !== `rounded` && (F2 = oe(F2));
  let L2 = c;
  switch (I2) {
    case `linear`:
      L2 = c;
      break;
    case T2(254):
      L2 = u;
      break;
    case `cardinal`:
      L2 = p;
      break;
    case `bumpX`:
      L2 = ee;
      break;
    case `bumpY`:
      L2 = S;
      break;
    case `catmullRom`:
      L2 = h;
      break;
    case T2(301):
      L2 = s;
      break;
    case `monotoneY`:
      L2 = a;
      break;
    case `natural`:
      L2 = o;
      break;
    case `step`:
      L2 = d;
      break;
    case `stepAfter`:
      L2 = l;
      break;
    case `stepBefore`:
      L2 = i;
      break;
    case `rounded`:
      L2 = c;
      break;
    default:
      L2 = u;
  }
  let { x: R2, y: z2 } = te(t2), B2 = f().x(R2).y(z2).curve(L2), V2;
  switch (t2.thickness) {
    case `normal`:
      V2 = `edge-thickness-normal`;
      break;
    case `thick`:
      V2 = `edge-thickness-thick`;
      break;
    case `invisible`:
      V2 = `edge-thickness-invisible`;
      break;
    default:
      V2 = `edge-thickness-normal`;
  }
  switch (t2.pattern) {
    case T2(191):
      V2 += ` edge-pattern-solid`;
      break;
    case T2(175):
      V2 += ` edge-pattern-dotted`;
      break;
    case `dashed`:
      V2 += T2(155);
      break;
    default:
      V2 += ` edge-pattern-solid`;
  }
  let H2, U2 = I2 === `rounded` ? Y(Z(F2, t2), 5) : B2(F2), W2 = Array.isArray(t2.style) ? t2.style : [t2.style], K2 = W2.find((e3) => e3 == null ? void 0 : e3.startsWith(T2(295))), q2 = ``;
  t2[T2(238)] && (q2 = `edge-animation-fast`), t2.animation && (q2 = `edge-animation-` + t2.animation);
  let J2 = false;
  if (t2.look === `handDrawn`) {
    let n3 = re.svg(e2);
    Object.assign([], F2);
    let r3 = n3.path(U2, { roughness: 0.3, seed: D2 });
    V2 += ` transition`, H2 = m(r3).select(`path`).attr(`id`, b2 + `-` + t2.id).attr(`class`, ` ` + V2 + (t2.classes ? ` ` + t2.classes : ``) + (q2 ? ` ` + q2 : ``)).attr(`style`, W2 ? W2[T2(282)]((e3, t3) => e3 + `;` + t3, ``) : ``);
    let i2 = H2.attr(`d`);
    H2.attr(`d`, i2), e2.node().appendChild(H2.node());
  } else {
    let n3 = N2.join(`;`), r3 = W2 ? W2[T2(282)]((e3, t3) => e3 + t3 + `;`, ``) : ``, i2 = (n3 ? n3 + `;` + r3 + `;` : r3) + `;` + (W2 ? W2.reduce((e3, t3) => e3 + `;` + t3, ``) : ``);
    H2 = e2.append(`path`).attr(`d`, U2).attr(`id`, b2 + `-` + t2.id).attr(`class`, ` ` + V2 + (t2.classes ? ` ` + t2[T2(234)] : ``) + (q2 ? ` ` + q2 : ``)).attr(`style`, i2), K2 = (_a = i2.match(/stroke:([^;]+)/)) == null ? void 0 : _a[1], J2 = t2.animate === true || !!t2.animation || n3.includes(T2(227));
    let a2 = H2.node(), o2 = typeof a2.getTotalLength == `function` ? a2.getTotalLength() : 0, s2 = E[t2.arrowTypeStart] || 0, c2 = E[t2.arrowTypeEnd] || 0;
    if (t2.look === T2(285) && !J2) {
      let e3 = `stroke-dasharray: ` + (t2[T2(162)] === `dotted` || t2[T2(162)] === `dashed` ? se(o2, s2, c2) : `0 ` + s2 + ` ` + (o2 - s2 - c2) + ` ` + c2) + T2(198);
      H2.attr(`style`, e3 + H2.attr(`style`));
    }
  }
  H2.attr(`data-edge`, true), H2.attr(`data-et`, `edge`), H2.attr(`data-id`, t2.id), H2[T2(258)](`data-points`, P2), H2.attr(`data-look`, x(t2.look)), t2.showPoints && F2[T2(303)]((t3) => {
    let n3 = T2;
    e2.append(`circle`)[n3(200)](`stroke`, `red`).style(`fill`, `red`).attr(`r`, 1).attr(`cx`, t3.x).attr(`cy`, t3.y);
  });
  let X2 = ``;
  (y()[T2(244)].arrowMarkerAbsolute || y().state[T2(246)]) && (X2 = window[T2(287)].protocol + `//` + window.location.host + window.location[T2(261)] + window.location.search, X2 = X2[T2(235)](/\(/g, `\\(`).replace(/\)/g, `\\)`)), g.info(`arrowTypeStart`, t2.arrowTypeStart), g.info(`arrowTypeEnd`, t2.arrowTypeEnd);
  let Q2 = !J2 && (t2 == null ? void 0 : t2.look) === T2(285);
  ie(H2, t2, X2, b2, r2, Q2, K2);
  let ce2 = Math[T2(296)](O2.length / 2), le2 = O2[ce2];
  C.isLabelCoordinateInPath(le2, H2.attr(`d`)) || (k2 = true);
  let $2 = {};
  return k2 && ($2.updatedPath = O2), $2[T2(211)] = t2.points, $2;
}, `insertEdge`);
function Y(e2, t2) {
  if (e2.length < 2) return ``;
  let n2 = ``, r2 = e2.length, i2 = 1e-5;
  for (let a2 = 0; a2 < r2; a2++) {
    let o2 = e2[a2], s2 = e2[a2 - 1], c2 = e2[a2 + 1];
    if (a2 === 0) n2 += `M` + o2.x + `,` + o2.y;
    else if (a2 === r2 - 1) n2 += `L` + o2.x + `,` + o2.y;
    else {
      let e3 = o2.x - s2.x, r3 = o2.y - s2.y, a3 = c2.x - o2.x, l2 = c2.y - o2.y, u2 = Math.hypot(e3, r3), d2 = Math.hypot(a3, l2);
      if (u2 < i2 || d2 < i2) {
        n2 += `L` + o2.x + `,` + o2.y;
        continue;
      }
      let f2 = e3 / u2, p2 = r3 / u2, m2 = a3 / d2, h2 = l2 / d2, g2 = f2 * m2 + p2 * h2, _2 = Math.acos(Math.max(-1, Math.min(1, g2)));
      if (_2 < i2 || Math.abs(Math.PI - _2) < i2) {
        n2 += `L` + o2.x + `,` + o2.y;
        continue;
      }
      let v2 = Math.min(t2 / Math.sin(_2 / 2), u2 / 2, d2 / 2), y2 = o2.x - f2 * v2, b2 = o2.y - p2 * v2, x2 = o2.x + m2 * v2, S2 = o2.y + h2 * v2;
      n2 += `L` + y2 + `,` + b2, n2 += `Q` + o2.x + `,` + o2.y + ` ` + x2 + `,` + S2;
    }
  }
  return n2;
}
_(Y, j(212));
function X(e2, t2) {
  if (!e2 || !t2) return { angle: 0, deltaX: 0, deltaY: 0 };
  let n2 = t2.x - e2.x, r2 = t2.y - e2.y;
  return { angle: Math.atan2(r2, n2), deltaX: n2, deltaY: r2 };
}
_(X, j(257));
function Z(t2, n2) {
  let r2 = j, i2 = t2.map((t3) => e({}, t3));
  if (t2.length >= 2 && D[n2.arrowTypeStart]) {
    let e2 = D[n2.arrowTypeStart], a3 = t2[0], o2 = t2[1], { angle: s2 } = X(a3, o2), c2 = e2 * Math.cos(s2), l2 = e2 * Math[r2(245)](s2);
    i2[0].x = a3.x + c2, i2[0].y = a3.y + l2;
  }
  let a2 = t2.length;
  if (a2 >= 2 && D[n2.arrowTypeEnd]) {
    let e2 = D[n2[r2(192)]], o2 = t2[a2 - 1], s2 = t2[a2 - 2], { angle: c2 } = X(s2, o2), l2 = e2 * Math.cos(c2), u2 = e2 * Math[r2(245)](c2);
    i2[a2 - 1].x = o2.x - l2, i2[a2 - 1].y = o2.y - u2;
  }
  return i2;
}
_(Z, `applyMarkerOffsetsToPoints`);
var Q = _((e2, t2, n2, r2) => {
  t2.forEach((t3) => {
    ce[t3](e2, n2, r2);
  });
}, `insertMarkers`), ce = { extension: _((e2, t2, n2) => {
  let r2 = j;
  g.trace(`Making markers for `, n2), e2.append(r2(194))[r2(226)](`marker`)[r2(258)](`id`, n2 + `_` + t2 + `-extensionStart`).attr(r2(228), `marker extension ` + t2).attr(r2(219), 18).attr(`refY`, 7).attr(r2(277), 20)[r2(258)](`markerHeight`, 28).attr(`orient`, `auto`)[r2(258)](`markerUnits`, `userSpaceOnUse`).append(`path`)[r2(258)](`d`, `M 1,7 L18,13 V 1 Z`), e2.append(`defs`).append(r2(263)).attr(`id`, n2 + `_` + t2 + `-extensionEnd`).attr(r2(228), `marker extension ` + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 V 13 L18,7 Z`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-extensionStart-margin`).attr(`class`, `marker extension ` + t2).attr(`refX`, 18).attr(`refY`, 7).attr(`markerWidth`, 20).attr(r2(269), 28).attr(r2(272), `auto`).attr(`markerUnits`, `userSpaceOnUse`).attr(`viewBox`, `0 0 20 14`).append(`polygon`).attr(`points`, `10,7 18,13 18,1`)[r2(200)](`stroke-width`, 2).style(`stroke-dasharray`, `0`), e2[r2(226)](`defs`).append(`marker`)[r2(258)](`id`, n2 + `_` + t2 + `-extensionEnd-margin`)[r2(258)](`class`, `marker extension ` + t2)[r2(258)](`refX`, 9).attr(`refY`, 7).attr(r2(277), 20).attr(`markerHeight`, 28).attr(r2(272), `auto`).attr(`markerUnits`, `userSpaceOnUse`).attr(`viewBox`, r2(288)).append(`polygon`).attr(`points`, `10,1 10,13 18,7`).style(`stroke-width`, 2).style(`stroke-dasharray`, `0`);
}, `extension`), composition: _((e2, t2, n2) => {
  let r2 = j;
  e2[r2(226)](r2(194)).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(196)).attr(`class`, `marker composition ` + t2)[r2(258)](`refX`, 18).attr(`refY`, 7).attr(r2(277), 190).attr(`markerHeight`, 240).attr(r2(272), `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`)[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-compositionEnd`).attr(`class`, r2(160) + t2)[r2(258)](`refX`, 1).attr(`refY`, 7)[r2(258)](`markerWidth`, 20).attr(r2(269), 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(r2(263)).attr(`id`, n2 + `_` + t2 + `-compositionStart-margin`).attr(`class`, `marker composition ` + t2).attr(`refX`, 15)[r2(258)](`refY`, 7).attr(r2(277), 190).attr(r2(269), 240).attr(`orient`, `auto`)[r2(258)](`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 0)[r2(258)](`viewBox`, r2(164)).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`)[r2(226)](`marker`)[r2(258)](`id`, n2 + `_` + t2 + r2(270)).attr(`class`, `marker composition ` + t2).attr(`refX`, 3.5).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(r2(272), `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 0).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`);
}, j(271)), aggregation: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationStart`).attr(`class`, `marker aggregation ` + t2).attr(`refX`, 18)[r2(258)](`refY`, 7)[r2(258)](`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, r2(216)).append(`path`).attr(`d`, `M 18,7 L9,13 L1,7 L9,1 Z`), e2.append(`defs`).append(r2(263)).attr(`id`, n2 + `_` + t2 + `-aggregationEnd`).attr(r2(228), r2(177) + t2).attr(`refX`, 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28)[r2(258)](r2(272), `auto`)[r2(226)](`path`).attr(`d`, r2(222)), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-aggregationStart-margin`)[r2(258)](r2(228), `marker aggregation ` + t2).attr(`refX`, 15)[r2(258)](`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`)[r2(258)](`markerUnits`, `userSpaceOnUse`)[r2(226)](`path`).style(`stroke-width`, 2).attr(`d`, r2(222)), e2.append(`defs`).append(r2(263))[r2(258)](`id`, n2 + `_` + t2 + `-aggregationEnd-margin`).attr(`class`, `marker aggregation ` + t2).attr(r2(219), 1).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 2).attr(`d`, r2(222));
}, `aggregation`), dependency: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(189)).attr(`class`, `marker dependency ` + t2)[r2(258)](`refX`, 6).attr(r2(157), 7).attr(r2(277), 190).attr(`markerHeight`, 240).attr(r2(272), `auto`).append(`path`).attr(`d`, r2(174)), e2[r2(226)](`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(268)).attr(`class`, `marker dependency ` + t2).attr(`refX`, 13).attr(r2(157), 7).attr(`markerWidth`, 20).attr(r2(269), 28).attr(`orient`, r2(216))[r2(226)](`path`)[r2(258)](`d`, `M 18,7 L9,13 L14,7 L9,1 Z`), e2.append(`defs`)[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyStart-margin`).attr(`class`, `marker dependency ` + t2).attr(r2(219), 4).attr(`refY`, 7).attr(r2(277), 190)[r2(258)](r2(269), 240).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`).style(`stroke-width`, 0).attr(`d`, r2(174)), e2.append(`defs`)[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-dependencyEnd-margin`).attr(`class`, `marker dependency ` + t2).attr(`refX`, 16).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`path`)[r2(200)](`stroke-width`, 0).attr(`d`, r2(165));
}, j(215)), lollipop: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(265)).attr(`class`, `marker lollipop ` + t2).attr(`refX`, 13).attr(`refY`, 7).attr(`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`)[r2(258)](`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6), e2.append(`defs`)[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-lollipopEnd`)[r2(258)](r2(228), r2(267) + t2).attr(`refX`, 1).attr(`refY`, 7)[r2(258)](r2(277), 190).attr(`markerHeight`, 240).attr(`orient`, `auto`).append(`circle`).attr(`fill`, r2(190)).attr(`cx`, 7)[r2(258)](`cy`, 7).attr(`r`, 6), e2[r2(226)](`defs`).append(r2(263))[r2(258)](`id`, n2 + `_` + t2 + `-lollipopStart-margin`).attr(`class`, r2(267) + t2).attr(`refX`, 13).attr(`refY`, 7)[r2(258)](`markerWidth`, 190).attr(`markerHeight`, 240).attr(`orient`, r2(216)).attr(`markerUnits`, `userSpaceOnUse`).append(`circle`).attr(`fill`, `transparent`).attr(`cx`, 7)[r2(258)](`cy`, 7)[r2(258)](`r`, 6)[r2(258)](`stroke-width`, 2), e2.append(`defs`).append(r2(263)).attr(`id`, n2 + `_` + t2 + `-lollipopEnd-margin`).attr(`class`, `marker lollipop ` + t2).attr(r2(219), 1).attr(`refY`, 7)[r2(258)](`markerWidth`, 190).attr(r2(269), 240)[r2(258)](`orient`, `auto`)[r2(258)](`markerUnits`, `userSpaceOnUse`).append(`circle`).attr(`fill`, `transparent`).attr(`cx`, 7).attr(`cy`, 7).attr(`r`, 6).attr(`stroke-width`, 2);
}, `lollipop`), point: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`marker`)[r2(258)](`id`, n2 + `_` + t2 + `-pointEnd`)[r2(258)](`class`, r2(209) + t2).attr(`viewBox`, `0 0 10 10`).attr(r2(219), 5).attr(r2(157), 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 8).attr(r2(269), 8).attr(`orient`, `auto`).append(`path`)[r2(258)](`d`, `M 0 0 L 10 5 L 0 10 z`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(r2(250), r2(210)), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointStart`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 4.5)[r2(258)](`refY`, 5)[r2(258)](`markerUnits`, `userSpaceOnUse`)[r2(258)](`markerWidth`, 8).attr(`markerHeight`, 8).attr(`orient`, `auto`).append(`path`).attr(`d`, r2(230)).attr(r2(228), `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-pointEnd-margin`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 11.5 14`)[r2(258)](`refX`, 11.5)[r2(258)](r2(157), 7)[r2(258)](`markerUnits`, r2(163)).attr(`markerWidth`, 10.5).attr(`markerHeight`, 14).attr(`orient`, r2(216)).append(`path`).attr(`d`, `M 0 0 L 11.5 7 L 0 14 z`).attr(`class`, `arrowMarkerPath`)[r2(200)](`stroke-width`, 0)[r2(200)](r2(250), `1,0`), e2[r2(226)](`marker`)[r2(258)](`id`, n2 + `_` + t2 + `-pointStart-margin`).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 11.5 14`).attr(`refX`, 1).attr(`refY`, 7).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11.5).attr(`markerHeight`, 14).attr(`orient`, `auto`).append(r2(259)).attr(r2(171), `0,7 11.5,14 11.5,0`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 0)[r2(200)](`stroke-dasharray`, `1,0`);
}, `point`), circle: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + r2(240))[r2(258)](`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 11)[r2(258)](r2(157), 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(r2(272), `auto`).append(r2(229)).attr(`cx`, `5`)[r2(258)](`cy`, `5`).attr(`r`, `5`).attr(`class`, r2(220)).style(`stroke-width`, 1).style(`stroke-dasharray`, r2(210)), e2[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-circleStart`).attr(r2(228), `marker ` + t2).attr(`viewBox`, r2(201)).attr(`refX`, -1).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11).attr(`orient`, `auto`)[r2(226)](`circle`).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 1).style(`stroke-dasharray`, `1,0`), e2[r2(226)](r2(263)).attr(`id`, n2 + `_` + t2 + `-circleEnd-margin`)[r2(258)](`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`)[r2(258)](`refY`, 5).attr(`refX`, 12.25).attr(`markerUnits`, r2(163))[r2(258)](r2(277), 14).attr(`markerHeight`, 14).attr(`orient`, `auto`).append(r2(229)).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(r2(228), `arrowMarkerPath`).style(`stroke-width`, 0)[r2(200)](r2(250), `1,0`), e2.append(`marker`)[r2(258)](`id`, n2 + `_` + t2 + r2(299)).attr(`class`, `marker ` + t2).attr(`viewBox`, `0 0 10 10`).attr(`refX`, -2).attr(`refY`, 5).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 14)[r2(258)](r2(269), 14).attr(r2(272), `auto`).append(r2(229)).attr(`cx`, `5`).attr(`cy`, `5`).attr(`r`, `5`).attr(`class`, `arrowMarkerPath`)[r2(200)](r2(281), 0).style(`stroke-dasharray`, `1,0`);
}, j(229)), cross: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossEnd`).attr(`class`, `marker cross ` + t2).attr(r2(279), `0 0 11 11`).attr(`refX`, 12).attr(r2(157), 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(r2(277), 11).attr(`markerHeight`, 11).attr(`orient`, `auto`)[r2(226)](`path`).attr(`d`, r2(275)).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossStart`).attr(`class`, `marker cross ` + t2).attr(r2(279), `0 0 11 11`).attr(`refX`, -1)[r2(258)](`refY`, 5.2).attr(`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 11).attr(`markerHeight`, 11)[r2(258)](`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 l 9,9 M 10,1 l -9,9`).attr(`class`, `arrowMarkerPath`)[r2(200)](`stroke-width`, 2).style(`stroke-dasharray`, `1,0`), e2.append(`marker`).attr(`id`, n2 + `_` + t2 + `-crossEnd-margin`).attr(`class`, `marker cross ` + t2).attr(r2(279), `0 0 15 15`).attr(`refX`, 17.7).attr(`refY`, 7.5)[r2(258)](`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 12).attr(r2(269), 12).attr(r2(272), `auto`).append(r2(183))[r2(258)](`d`, `M 1,1 L 14,14 M 1,14 L 14,1`).attr(`class`, `arrowMarkerPath`).style(`stroke-width`, 2.5), e2.append(r2(263))[r2(258)](`id`, n2 + `_` + t2 + r2(154)).attr(r2(228), `marker cross ` + t2).attr(`viewBox`, `0 0 15 15`).attr(`refX`, -3.5).attr(r2(157), 7.5)[r2(258)](`markerUnits`, `userSpaceOnUse`).attr(`markerWidth`, 12).attr(r2(269), 12).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 1,1 L 14,14 M 1,14 L 14,1`).attr(r2(228), `arrowMarkerPath`).style(r2(281), 2.5).style(`stroke-dasharray`, r2(210));
}, `cross`), barb: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(286)).attr(`refX`, 19).attr(`refY`, 7)[r2(258)](`markerWidth`, 20).attr(`markerHeight`, 14).attr(r2(253), `userSpaceOnUse`).attr(`orient`, `auto`).append(r2(183))[r2(258)](`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, `barb`), barbNeo: _((e2, t2, n2) => {
  let r2 = j, { themeVariables: i2 } = b(), { transitionColor: a2 } = i2;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-barbEnd`)[r2(258)](`refX`, 19).attr(r2(157), 7).attr(`markerWidth`, 20)[r2(258)](`markerHeight`, 14)[r2(258)](r2(253), `strokeWidth`).attr(r2(272), `auto`)[r2(226)](`path`).attr(`d`, `M 19,7 L11,14 L13,7 L11,0 Z`), e2.append(`defs`)[r2(226)](r2(263)).attr(`id`, n2 + `_` + t2 + `-barbEnd-margin`).attr(r2(219), 17)[r2(258)](`refY`, 7)[r2(258)](`markerWidth`, 20)[r2(258)](`markerHeight`, 14)[r2(258)](`markerUnits`, r2(163)).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L11,14 L13,7 L11,0 Z`).attr(`fill`, `` + a2);
}, `barbNeo`), only_one: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-onlyOneStart`).attr(`class`, `marker onlyOne ` + t2)[r2(258)](`refX`, 0).attr(`refY`, 9)[r2(258)](`markerWidth`, 18)[r2(258)](`markerHeight`, 18).attr(`orient`, `auto`).append(`path`).attr(`d`, `M9,0 L9,18 M15,0 L15,18`), e2.append(`defs`)[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-onlyOneEnd`).attr(`class`, `marker onlyOne ` + t2).attr(r2(219), 18)[r2(258)](`refY`, 9).attr(`markerWidth`, 18).attr(`markerHeight`, 18).attr(r2(272), `auto`).append(`path`).attr(`d`, r2(298));
}, `only_one`), zero_or_one: _((e2, t2, n2) => {
  let r2 = j, i2 = e2.append(`defs`).append(`marker`)[r2(258)](`id`, n2 + `_` + t2 + `-zeroOrOneStart`).attr(`class`, `marker zeroOrOne ` + t2)[r2(258)](r2(219), 0).attr(`refY`, 9).attr(`markerWidth`, 30).attr(`markerHeight`, 18).attr(`orient`, `auto`);
  i2[r2(226)](`circle`).attr(`fill`, `white`).attr(`cx`, 21).attr(`cy`, 9)[r2(258)](`r`, 6), i2.append(`path`).attr(`d`, `M9,0 L9,18`);
  let a2 = e2.append(r2(194)).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(233)).attr(`class`, `marker zeroOrOne ` + t2).attr(`refX`, 30).attr(`refY`, 9)[r2(258)](`markerWidth`, 30)[r2(258)](`markerHeight`, 18).attr(`orient`, `auto`);
  a2.append(`circle`).attr(`fill`, r2(266)).attr(`cx`, 9).attr(`cy`, 9)[r2(258)](`r`, 6), a2.append(`path`).attr(`d`, `M21,0 L21,18`);
}, j(217)), one_or_more: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(178))[r2(258)](`class`, `marker oneOrMore ` + t2).attr(`refX`, 18).attr(r2(157), 18).attr(`markerWidth`, 45).attr(`markerHeight`, 36).attr(r2(272), `auto`).append(`path`)[r2(258)](`d`, `M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27`), e2.append(`defs`)[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-oneOrMoreEnd`)[r2(258)](r2(228), r2(180) + t2).attr(`refX`, 27)[r2(258)](`refY`, 18).attr(`markerWidth`, 45).attr(r2(269), 36)[r2(258)](`orient`, `auto`).append(`path`).attr(`d`, `M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18`);
}, j(232)), zero_or_more: _((e2, t2, n2) => {
  let r2 = j, i2 = e2[r2(226)](`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrMoreStart`).attr(`class`, `marker zeroOrMore ` + t2)[r2(258)](`refX`, 18).attr(r2(157), 18).attr(`markerWidth`, 57).attr(`markerHeight`, 36).attr(`orient`, `auto`);
  i2[r2(226)](r2(229))[r2(258)](r2(274), `white`).attr(`cx`, 48).attr(`cy`, 18).attr(`r`, 6), i2.append(`path`).attr(`d`, `M0,18 Q18,0 36,18 Q18,36 0,18`);
  let a2 = e2.append(r2(194))[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + r2(241)).attr(`class`, `marker zeroOrMore ` + t2)[r2(258)](r2(219), 39).attr(`refY`, 18)[r2(258)](`markerWidth`, 57).attr(r2(269), 36).attr(`orient`, `auto`);
  a2[r2(226)](`circle`).attr(r2(274), `white`).attr(`cx`, 9).attr(`cy`, 18).attr(`r`, 6), a2[r2(226)](`path`).attr(`d`, `M21,18 Q39,0 57,18 Q39,36 21,18`);
}, `zero_or_more`), only_one_neo: _((e2, t2, n2) => {
  let r2 = j, { themeVariables: i2 } = b(), { strokeWidth: a2 } = i2;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-onlyOneStart`).attr(`class`, `marker onlyOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 18)[r2(258)](r2(269), 18).attr(`orient`, r2(216)).attr(r2(253), `userSpaceOnUse`).append(`path`).attr(`d`, `M9,0 L9,18 M15,0 L15,18`).attr(r2(281), `` + a2), e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + r2(294)).attr(`class`, `marker onlyOne ` + t2)[r2(258)](`refX`, 18).attr(`refY`, 9).attr(`markerWidth`, 18)[r2(258)](`markerHeight`, 18).attr(`orient`, `auto`)[r2(258)](`markerUnits`, `userSpaceOnUse`).append(r2(183)).attr(`d`, `M3,0 L3,18 M9,0 L9,18`).attr(`stroke-width`, `` + a2);
}, `only_one_neo`), zero_or_one_neo: _((e2, t2, n2) => {
  let r2 = j, { themeVariables: i2 } = b(), { strokeWidth: a2, mainBkg: o2 } = i2, s2 = e2.append(`defs`)[r2(226)](`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrOneStart`).attr(r2(228), `marker zeroOrOne ` + t2).attr(`refX`, 0).attr(`refY`, 9).attr(`markerWidth`, 30)[r2(258)](`markerHeight`, 18).attr(`orient`, `auto`).attr(r2(253), r2(163));
  s2.append(`circle`)[r2(258)](`fill`, o2 ?? `white`)[r2(258)](`cx`, 21)[r2(258)](`cy`, 9)[r2(258)](`stroke-width`, `` + a2).attr(`r`, 6), s2.append(`path`)[r2(258)](`d`, `M9,0 L9,18`).attr(`stroke-width`, `` + a2);
  let c2 = e2.append(`defs`).append(`marker`)[r2(258)](`id`, n2 + `_` + t2 + `-zeroOrOneEnd`).attr(r2(228), `marker zeroOrOne ` + t2).attr(`refX`, 30).attr(`refY`, 9)[r2(258)](`markerWidth`, 30)[r2(258)](`markerHeight`, 18).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`);
  c2.append(`circle`).attr(`fill`, o2 ?? `white`).attr(`cx`, 9).attr(`cy`, 9).attr(`stroke-width`, `` + a2).attr(`r`, 6), c2.append(r2(183)).attr(`d`, r2(300)).attr(`stroke-width`, `` + a2);
}, `zero_or_one_neo`), one_or_more_neo: _((e2, t2, n2) => {
  let r2 = j, { themeVariables: i2 } = b(), { strokeWidth: a2 } = i2;
  e2.append(`defs`).append(`marker`).attr(`id`, n2 + `_` + t2 + `-oneOrMoreStart`).attr(`class`, r2(180) + t2).attr(`refX`, 18)[r2(258)](`refY`, 18).attr(`markerWidth`, 45).attr(r2(269), 36)[r2(258)](`orient`, `auto`)[r2(258)](`markerUnits`, `userSpaceOnUse`).append(`path`).attr(`d`, `M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27`)[r2(258)](`stroke-width`, `` + a2), e2.append(r2(194)).append(`marker`).attr(`id`, n2 + `_` + t2 + `-oneOrMoreEnd`).attr(`class`, `marker oneOrMore ` + t2).attr(`refX`, 27)[r2(258)](`refY`, 18).attr(`markerWidth`, 45)[r2(258)](`markerHeight`, 36)[r2(258)](`markerUnits`, `userSpaceOnUse`).attr(`orient`, `auto`).append(`path`).attr(`d`, `M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18`).attr(`stroke-width`, `` + a2);
}, `one_or_more_neo`), zero_or_more_neo: _((e2, t2, n2) => {
  let r2 = j, { themeVariables: i2 } = b(), { strokeWidth: a2, mainBkg: o2 } = i2, s2 = e2.append(r2(194)).append(`marker`).attr(`id`, n2 + `_` + t2 + `-zeroOrMoreStart`).attr(r2(228), r2(242) + t2).attr(`refX`, 18).attr(r2(157), 18).attr(`markerWidth`, 57)[r2(258)](r2(269), 36).attr(`markerUnits`, `userSpaceOnUse`).attr(`orient`, r2(216));
  s2[r2(226)](`circle`).attr(`fill`, o2 ?? `white`)[r2(258)](`cx`, 45.5).attr(`cy`, 18).attr(`r`, 6).attr(`stroke-width`, `` + a2), s2.append(r2(183)).attr(`d`, `M0,18 Q18,0 36,18 Q18,36 0,18`)[r2(258)](`stroke-width`, `` + a2);
  let c2 = e2[r2(226)](r2(194)).append(`marker`)[r2(258)](`id`, n2 + `_` + t2 + r2(241)).attr(`class`, `marker zeroOrMore ` + t2).attr(`refX`, 39)[r2(258)](r2(157), 18).attr(r2(277), 57).attr(r2(269), 36).attr(`orient`, `auto`)[r2(258)](`markerUnits`, r2(163));
  c2.append(`circle`).attr(`fill`, o2 ?? `white`).attr(`cx`, 11).attr(`cy`, 18).attr(`r`, 6).attr(`stroke-width`, `` + a2), c2.append(r2(183)).attr(`d`, `M21,18 Q39,0 57,18 Q39,36 21,18`)[r2(258)](`stroke-width`, `` + a2);
}, j(255)), requirement_arrow: _((e2, t2, n2) => {
  let r2 = j;
  e2.append(`defs`)[r2(226)](`marker`)[r2(258)](`id`, n2 + `_` + t2 + r2(256))[r2(258)](`refX`, 20).attr(`refY`, 10).attr(`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).append(`path`).attr(`d`, r2(188));
}, j(173)), requirement_contains: _((e2, t2, n2) => {
  let r2 = j, i2 = e2.append(r2(194)).append(`marker`).attr(`id`, n2 + `_` + t2 + `-requirement_containsStart`)[r2(258)](`refX`, 0).attr(`refY`, 10).attr(r2(277), 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).append(`g`);
  i2.append(r2(229)).attr(`cx`, 10).attr(`cy`, 10).attr(`r`, 9).attr(`fill`, `none`), i2.append(`line`).attr(`x1`, 1).attr(`x2`, 19).attr(`y1`, 10)[r2(258)](`y2`, 10), i2.append(`line`).attr(`y1`, 1).attr(`y2`, 19).attr(`x1`, 10).attr(`x2`, 10);
}, `requirement_contains`), requirement_arrow_neo: _((e2, t2, n2) => {
  let r2 = j, { themeVariables: i2 } = b(), { strokeWidth: a2 } = i2;
  e2.append(`defs`).append(r2(263)).attr(`id`, n2 + `_` + t2 + `-requirement_arrowEnd`).attr(`refX`, 20)[r2(258)](r2(157), 10).attr(`markerWidth`, 20).attr(r2(269), 20).attr(`orient`, `auto`).attr(`markerUnits`, r2(163))[r2(258)](`stroke-width`, `` + a2).attr(r2(279), r2(152))[r2(226)](`path`).attr(`d`, `M0,0
      L20,10
      M20,10
      L0,20`)[r2(258)](`stroke-linejoin`, `miter`);
}, `requirement_arrow_neo`), requirement_contains_neo: _((e2, t2, n2) => {
  let r2 = j, { themeVariables: i2 } = b(), { strokeWidth: a2 } = i2, o2 = e2.append(`defs`).append(r2(263)).attr(`id`, n2 + `_` + t2 + `-requirement_containsStart`).attr(`refX`, 0).attr(`refY`, 10)[r2(258)](`markerWidth`, 20).attr(`markerHeight`, 20).attr(`orient`, `auto`).attr(`markerUnits`, `userSpaceOnUse`).append(`g`);
  o2[r2(226)](`circle`).attr(`cx`, 10).attr(`cy`, 10)[r2(258)](`r`, 9).attr(`fill`, `none`), o2.append(`line`).attr(`x1`, 1)[r2(258)](`x2`, 19).attr(`y1`, 10).attr(`y2`, 10), o2[r2(226)](`line`)[r2(258)](`y1`, 1)[r2(258)](`y2`, 19).attr(`x1`, 10).attr(`x2`, 10), o2[r2(172)](`*`).attr(`stroke-width`, `` + a2);
}, `requirement_contains_neo`) }, le = Q;
function $(e2, t2) {
  return e2 -= 151, M()[e2];
}
export {
  B as a,
  le as i,
  R as n,
  J as r,
  H as t
};
