import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { m as i } from "./src-B18GHWxx.js";
import { n as a, t as o } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { $ as s, C as c, V as l, l as u, n as d, p as f, u as p, z as m } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { A as h, I as g, d as _ } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { i as v, t as y } from "./chunk-O5CBEL6O-CERCp6yT.js";
import { n as b, t as x } from "./chunk-L5ZTLDWV-CfFez56L.js";
import { a as S, i as C, n as w, r as T } from "./chunk-NZK2D7GU-Bb3JacnP.js";
import { n as E } from "./rough.esm-Ct7jHvNv.js";
var D = I;
(function(e2, t2) {
  let n2 = I, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(446)) / 1 + -parseInt(n2(319)) / 2 + parseInt(n2(287)) / 3 + -parseInt(n2(390)) / 4 * (parseInt(n2(324)) / 5) + parseInt(n2(498)) / 6 * (-parseInt(n2(337)) / 7) + -parseInt(n2(284)) / 8 * (-parseInt(n2(326)) / 9) + -parseInt(n2(280)) / 10 * (-parseInt(n2(357)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(ve, 523205), n(), t();
var O = o((function() {
  var e2 = r(function* (e3, t2, n2) {
    var _a, _b;
    let r2 = I, a2, o2 = t2.useHtmlLabels || p((_a = l()) == null ? void 0 : _a.htmlLabels);
    a2 = n2 || `node default`;
    let s2 = e3.insert(`g`).attr(`class`, a2).attr(`id`, t2.domId || t2.id), c2 = s2.insert(`g`).attr(r2(522), r2(312)).attr(`style`, g(t2.labelStyle)), u2;
    u2 = t2.label === void 0 ? `` : typeof t2.label == `string` ? t2.label : t2.label[0];
    let d2 = !!t2.icon || !!t2.img, m2 = t2.labelType === `markdown`, _2 = yield y(c2, f(h(u2), l()), { useHtmlLabels: o2, width: t2.width || ((_b = l().flowchart) == null ? void 0 : _b.wrappingWidth), classes: m2 ? r2(521) : ``, style: t2.labelStyle, addSvgBackground: d2, markdown: m2 }, l()), v2 = _2.getBBox(), x2 = ((t2 == null ? void 0 : t2.padding) ?? 0) / 2;
    if (o2) {
      let e4 = _2.children[0], t3 = i(_2);
      yield b(e4, u2), v2 = e4.getBoundingClientRect(), t3.attr(r2(481), v2.width), t3.attr(`height`, v2.height);
    }
    return o2 ? c2.attr(`transform`, r2(409) + -v2.width / 2 + `, ` + -v2[r2(353)] / 2 + `)`) : c2.attr(`transform`, `translate(0, ` + -v2.height / 2 + `)`), t2[r2(379)] && c2.attr(`transform`, `translate(` + -v2[r2(481)] / 2 + `, ` + -v2.height / 2 + `)`), c2.insert(r2(384), r2(520)), { shapeSvg: s2, bbox: v2, halfPadding: x2, label: c2 };
  });
  return function(t2, n2, r2) {
    return e2.apply(this, arguments);
  };
})(), `labelHelper`), k = o((function() {
  var e2 = r(function* (e3, t2, n2) {
    let r2 = I;
    var a2;
    let o2 = n2.useHtmlLabels ?? s(l()), c2 = e3[r2(295)](`g`).attr(`class`, `label`).attr(r2(396), n2[r2(277)] || ``), u2 = yield y(c2, f(h(t2), l()), { useHtmlLabels: o2, width: n2.width || ((a2 = l()) == null || (a2 = a2.flowchart) == null ? void 0 : a2.wrappingWidth), style: n2.labelStyle, addSvgBackground: !!n2[r2(435)] || !!n2.img }), d2 = u2.getBBox(), p2 = n2.padding / 2;
    if (s(l())) {
      let e4 = u2.children[0], t3 = i(u2);
      d2 = e4[r2(296)](), t3.attr(r2(481), d2[r2(481)]), t3.attr(`height`, d2.height);
    }
    return o2 ? c2[r2(452)](`transform`, `translate(` + -d2.width / 2 + `, ` + -d2.height / 2 + `)`) : c2[r2(452)](`transform`, r2(376) + -d2[r2(353)] / 2 + `)`), n2[r2(379)] && c2.attr(`transform`, r2(409) + -d2.width / 2 + `, ` + -d2.height / 2 + `)`), c2[r2(295)](`rect`, `:first-child`), { shapeSvg: e3, bbox: d2, halfPadding: p2, label: c2 };
  });
  return function(t2, n2, r2) {
    return e2[I(416)](this, arguments);
  };
})(), `insertLabel`), A = o((e2, t2) => {
  let n2 = I, r2 = t2[n2(513)]().getBBox();
  e2.width = r2[n2(481)], e2.height = r2[n2(353)];
}, `updateNodeBounds`), j = o((e2, t2) => (e2.look === `handDrawn` ? D(367) : D(513)) + ` ` + e2.cssClasses + ` ` + (t2 || ``), D(526));
function M(e2) {
  let t2 = D, n2 = e2.map((e3, t3) => (t3 === 0 ? `M` : `L`) + e3.x + `,` + e3.y);
  return n2[t2(368)](`Z`), n2.join(` `);
}
o(M, `createPathFromPoints`);
function N(e2, t2, n2, r2, i2, a2) {
  let o2 = D, s2 = [], c2 = n2 - e2, l2 = r2 - t2, u2 = c2 / a2, d2 = 2 * Math.PI / u2, f2 = t2 + l2 / 2;
  for (let t3 = 0; t3 <= 50; t3++) {
    let n3 = e2 + t3 / 50 * c2, r3 = f2 + i2 * Math.sin(d2 * (n3 - e2));
    s2[o2(368)]({ x: n3, y: r3 });
  }
  return s2;
}
o(N, `generateFullSineWavePoints`);
function P(e2, t2, n2, r2, i2, a2) {
  let o2 = D, s2 = [], c2 = i2 * Math.PI / 180, l2 = (a2 * Math.PI / 180 - c2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = c2 + i3 * l2, a3 = e2 + n2 * Math.cos(r3), u2 = t2 + n2 * Math[o2(340)](r3);
    s2.push({ x: -a3, y: -u2 });
  }
  return s2;
}
o(P, `generateCirclePoints`);
function F(e2) {
  let t2 = D, n2 = Array[t2(403)](e2.childNodes).filter((e3) => e3.tagName === `path`), r2 = document.createElementNS(`http://www.w3.org/2000/svg`, `path`), i2 = n2.map((e3) => e3[t2(472)](`d`)).filter((e3) => e3 !== null).join(` `);
  r2.setAttribute(`d`, i2);
  let a2 = n2.find((e3) => e3[t2(472)](t2(454)) !== `none`), s2 = n2.find((e3) => e3.getAttribute(`stroke`) !== `none`), c2 = o((e3, t3) => (e3 == null ? void 0 : e3.getAttribute(t3)) ?? void 0, `getAttr`);
  if (a2) {
    let e3 = { fill: c2(a2, `fill`), "fill-opacity": c2(a2, `fill-opacity`) ?? `1` };
    Object.entries(e3).forEach(([e4, t3]) => {
      t3 && r2.setAttribute(e4, t3);
    });
  }
  if (s2) {
    let e3 = { stroke: c2(s2, `stroke`), "stroke-width": c2(s2, `stroke-width`) ?? `1`, "stroke-opacity": c2(s2, `stroke-opacity`) ?? `1` };
    Object[t2(410)](e3)[t2(348)](([e4, t3]) => {
      t3 && r2.setAttribute(e4, t3);
    });
  }
  let l2 = document[t2(344)](t2(270), `g`);
  return l2.appendChild(r2), l2;
}
function I(e2, t2) {
  return e2 -= 261, ve()[e2];
}
o(F, `mergePaths`);
var L = o((e2, t2) => {
  var n2 = e2.x, r2 = e2.y, i2 = t2.x - n2, a2 = t2.y - r2, o2 = e2.width / 2, s2 = e2.height / 2, c2, l2;
  return Math.abs(a2) * o2 > Math.abs(i2) * s2 ? (a2 < 0 && (s2 = -s2), c2 = a2 === 0 ? 0 : s2 * i2 / a2, l2 = s2) : (i2 < 0 && (o2 = -o2), c2 = o2, l2 = i2 === 0 ? 0 : o2 * a2 / i2), { x: n2 + c2, y: r2 + l2 };
}, `intersectRect`), R = o((function() {
  var e2 = r(function* (e3, t2, n2, r2 = false, i2 = false) {
    let a2 = t2 || ``;
    typeof a2 == `object` && (a2 = a2[0]);
    let o2 = l(), c2 = s(o2);
    return yield y(e3, a2, { style: n2, isTitle: r2, useHtmlLabels: c2, markdown: false, isNode: i2, width: 1 / 0 }, o2);
  });
  return function(t2, n2, r2) {
    return e2[I(416)](this, arguments);
  };
})(), `createLabel`), z = o((e2, t2, n2, r2, i2) => [`M`, e2 + i2, t2, `H`, e2 + n2 - i2, `A`, i2, i2, 0, 0, 1, e2 + n2, t2 + i2, `V`, t2 + r2 - i2, `A`, i2, i2, 0, 0, 1, e2 + n2 - i2, t2 + r2, `H`, e2 + i2, `A`, i2, i2, 0, 0, 1, e2, t2 + r2 - i2, `V`, t2 + i2, `A`, i2, i2, 0, 0, 1, e2 + i2, t2, `Z`][D(439)](` `), `createRoundedRectPathD`), ee = o((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = I;
    a.info(`Creating subgraph rect for `, t2.id, t2);
    let r2 = l(), { themeVariables: o2, handDrawnSeed: c2 } = r2, { clusterBkg: u2, clusterBorder: d2 } = o2, { labelStyles: f2, nodeStyles: p2, borderStyles: m2, backgroundStyles: h2 } = T(t2), g2 = e3[n2(295)](`g`).attr(`class`, `cluster ` + t2.cssClasses)[n2(452)](`id`, t2[n2(356)]).attr(n2(430), t2.look), _2 = s(r2), v2 = g2.insert(`g`).attr(`class`, `cluster-label `), b2;
    b2 = t2.labelType === `markdown` ? yield y(v2, t2[n2(312)], { style: t2.labelStyle, useHtmlLabels: _2, isNode: true, width: t2.width }) : yield R(v2, t2.label, t2.labelStyle || ``, false, true);
    let C2 = b2[n2(510)]();
    if (s(r2)) {
      let e4 = b2.children[0], t3 = i(b2);
      C2 = e4.getBoundingClientRect(), t3.attr(n2(481), C2.width), t3[n2(452)](`height`, C2.height);
    }
    let w2 = t2.width <= C2.width + t2.padding ? C2.width + t2.padding : t2.width;
    t2[n2(481)] <= C2[n2(481)] + t2[n2(505)] ? t2.diff = (w2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
    let D2 = t2.height, O2 = t2.x - w2 / 2, k2 = t2.y - D2 / 2;
    a[n2(332)](`Data `, t2, JSON.stringify(t2));
    let A2;
    if (t2[n2(349)] === `handDrawn`) {
      let e4 = E.svg(g2), r3 = S(t2, { roughness: 0.7, fill: u2, stroke: d2, fillWeight: 3, seed: c2 }), i2 = e4[n2(512)](z(O2, k2, w2, D2, 0), r3);
      A2 = g2.insert(() => (a.debug(n2(511), i2), i2), `:first-child`), A2[n2(474)](n2(266)).attr(`style`, m2.join(`;`)), A2.select(`path`).attr(n2(396), h2[n2(439)](`;`).replace(`fill`, `stroke`));
    } else A2 = g2.insert(`rect`, `:first-child`), A2.attr(`style`, p2).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, O2).attr(`y`, k2).attr(`width`, w2).attr(`height`, D2);
    let { subGraphTitleTopMargin: j2 } = x(r2);
    if (v2.attr(n2(273), `translate(` + (t2.x - C2[n2(481)] / 2) + `, ` + (t2.y - t2.height / 2 + j2) + `)`), f2) {
      let e4 = v2.select(`span`);
      e4 && e4.attr(n2(396), f2);
    }
    let M2 = A2.node().getBBox();
    return t2.offsetX = 0, t2.width = M2[n2(481)], t2[n2(353)] = M2[n2(353)], t2.offsetY = C2.height - t2.padding / 2, t2.intersect = function(e4) {
      return L(t2, e4);
    }, { cluster: g2, labelBBox: C2 };
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `rect`), te = o((e2, t2) => {
  let n2 = D, r2 = e2.insert(`g`).attr(`class`, `note-cluster`)[n2(452)](`id`, t2.domId), i2 = r2.insert(`rect`, `:first-child`), a2 = 0 * t2.padding, o2 = a2 / 2;
  i2.attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, t2.x - t2.width / 2 - o2).attr(`y`, t2.y - t2.height / 2 - o2).attr(`width`, t2.width + a2).attr(`height`, t2[n2(353)] + a2).attr(n2(454), `none`);
  let s2 = i2.node().getBBox();
  return t2.width = s2.width, t2.height = s2.height, t2.intersect = function(e3) {
    return L(t2, e3);
  }, { cluster: r2, labelBBox: { width: 0, height: 0 } };
}, `noteGroup`), B = o((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = I, r2 = l(), { themeVariables: a2, handDrawnSeed: o2 } = r2, { altBackground: c2, compositeBackground: u2, compositeTitleBackground: d2, nodeBorder: f2 } = a2, p2 = e3.insert(`g`).attr(`class`, t2[n2(281)])[n2(452)](`id`, t2.domId)[n2(452)](`data-id`, t2.id).attr(`data-look`, t2.look), m2 = p2.insert(`g`, `:first-child`), h2 = p2.insert(`g`).attr(n2(522), `cluster-label`), g2 = p2.append(`rect`), _2 = yield R(h2, t2.label, t2.labelStyle, void 0, true), v2 = _2.getBBox();
    if (s(r2)) {
      let e4 = _2.children[0], t3 = i(_2);
      v2 = e4.getBoundingClientRect(), t3.attr(`width`, v2[n2(481)]), t3.attr(`height`, v2.height);
    }
    let y2 = 0 * t2.padding, b2 = y2 / 2, x2 = (t2[n2(481)] <= v2.width + t2[n2(505)] ? v2.width + t2[n2(505)] : t2.width) + y2;
    t2.width <= v2.width + t2.padding ? t2.diff = (x2 - t2.width) / 2 - t2.padding : t2.diff = -t2[n2(505)];
    let S2 = t2[n2(353)] + y2, C2 = t2.height + y2 - v2.height - 6, w2 = t2.x - x2 / 2, T2 = t2.y - S2 / 2;
    t2.width = x2;
    let D2 = t2.y - t2.height / 2 - b2 + v2.height + 2, O2;
    if (t2.look === `handDrawn`) {
      let e4 = t2.cssClasses[n2(382)](`statediagram-cluster-alt`), r3 = E.svg(p2), i2 = t2.rx || t2.ry ? r3[n2(512)](z(w2, T2, x2, S2, 10), { roughness: 0.7, fill: d2, fillStyle: `solid`, stroke: f2, seed: o2 }) : r3.rectangle(w2, T2, x2, S2, { seed: o2 });
      O2 = p2.insert(() => i2, `:first-child`);
      let a3 = r3.rectangle(w2, D2, x2, C2, { fill: e4 ? c2 : u2, fillStyle: e4 ? `hachure` : `solid`, stroke: f2, seed: o2 });
      O2 = p2.insert(() => i2, n2(520)), g2 = p2.insert(() => a3);
    } else O2 = m2.insert(`rect`, `:first-child`), O2.attr(`class`, `outer`).attr(`x`, w2).attr(`y`, T2).attr(`width`, x2).attr(`height`, S2).attr(n2(430), t2[n2(349)]), g2.attr(`class`, `inner`).attr(`x`, w2).attr(`y`, D2).attr(`width`, x2)[n2(452)](`height`, C2);
    return h2.attr(`transform`, `translate(` + (t2.x - v2.width / 2) + `, ` + (T2 + 1 - (s(r2) ? 0 : 3)) + `)`), t2.height = O2.node()[n2(510)]().height, t2.offsetX = 0, t2.offsetY = v2[n2(353)] - t2.padding / 2, t2.labelBBox = v2, t2[n2(351)] = function(e4) {
      return L(t2, e4);
    }, { cluster: p2, labelBBox: v2 };
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), `roundedWithTitle`), V = o((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = I;
    a[n2(383)](`Creating subgraph rect for `, t2.id, t2);
    let r2 = l(), { themeVariables: o2, handDrawnSeed: c2 } = r2, { clusterBkg: u2, clusterBorder: d2 } = o2, { labelStyles: f2, nodeStyles: p2, borderStyles: m2, backgroundStyles: h2 } = T(t2), g2 = e3.insert(`g`).attr(`class`, n2(450) + t2[n2(281)]).attr(`id`, t2.domId).attr(`data-look`, t2.look), _2 = s(r2), v2 = g2.insert(`g`).attr(`class`, `cluster-label `), b2 = yield y(v2, t2.label, { style: t2.labelStyle, useHtmlLabels: _2, isNode: true, width: t2.width }), C2 = b2.getBBox();
    if (s(r2)) {
      let e4 = b2.children[0], t3 = i(b2);
      C2 = e4[n2(296)](), t3.attr(`width`, C2.width), t3.attr(`height`, C2.height);
    }
    let w2 = t2.width <= C2[n2(481)] + t2.padding ? C2.width + t2[n2(505)] : t2.width;
    t2.width <= C2.width + t2.padding ? t2.diff = (w2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
    let D2 = t2.height, O2 = t2.x - w2 / 2, k2 = t2.y - D2 / 2;
    a.trace(`Data `, t2, JSON.stringify(t2));
    let A2;
    if (t2[n2(349)] === `handDrawn`) {
      let e4 = E[n2(428)](g2), r3 = S(t2, { roughness: 0.7, fill: u2, stroke: d2, fillWeight: 4, seed: c2 }), i2 = e4[n2(512)](z(O2, k2, w2, D2, t2.rx), r3);
      A2 = g2[n2(295)](() => (a.debug(`Rough node insert CXC`, i2), i2), `:first-child`), A2.select(`path:nth-child(2)`).attr(`style`, m2[n2(439)](`;`)), A2.select(`path`).attr(`style`, h2.join(`;`).replace(`fill`, `stroke`));
    } else A2 = g2.insert(`rect`, `:first-child`), A2.attr(n2(396), p2)[n2(452)](`rx`, t2.rx).attr(`ry`, t2.ry)[n2(452)](`x`, O2)[n2(452)](`y`, k2).attr(n2(481), w2).attr(`height`, D2);
    let { subGraphTitleTopMargin: j2 } = x(r2);
    if (v2.attr(n2(273), `translate(` + (t2.x - C2.width / 2) + `, ` + (t2.y - t2[n2(353)] / 2 + j2) + `)`), f2) {
      let e4 = v2.select(`span`);
      e4 && e4.attr(`style`, f2);
    }
    let M2 = A2.node().getBBox();
    return t2[n2(371)] = 0, t2[n2(481)] = M2.width, t2.height = M2.height, t2.offsetY = C2.height - t2.padding / 2, t2.intersect = function(e4) {
      return L(t2, e4);
    }, { cluster: g2, labelBBox: C2 };
  });
  return function(t2, n2) {
    return e2[I(416)](this, arguments);
  };
})(), D(269)), ne = { rect: ee, squareRect: ee, roundedWithTitle: B, noteGroup: te, divider: o((e2, t2) => {
  let n2 = D, { themeVariables: r2, handDrawnSeed: i2 } = l(), { nodeBorder: a2 } = r2, o2 = e2[n2(295)](`g`)[n2(452)](`class`, t2.cssClasses).attr(`id`, t2.domId).attr(`data-look`, t2.look), s2 = o2.insert(`g`, n2(520)), c2 = 0 * t2.padding, u2 = t2.width + c2;
  t2.diff = -t2[n2(505)];
  let d2 = t2.height + c2, f2 = t2.x - u2 / 2, p2 = t2.y - d2 / 2;
  t2.width = u2;
  let m2;
  if (t2.look === `handDrawn`) {
    let e3 = E.svg(o2).rectangle(f2, p2, u2, d2, { fill: `lightgrey`, roughness: 0.5, strokeLineDash: [5], stroke: a2, seed: i2 });
    m2 = o2.insert(() => e3, `:first-child`);
  } else {
    m2 = s2.insert(`rect`, `:first-child`);
    let e3 = `outer`;
    e3 = (t2.look, n2(519)), m2.attr(`class`, e3).attr(`x`, f2).attr(`y`, p2).attr(`width`, u2).attr(`height`, d2).attr(`data-look`, t2[n2(349)]);
  }
  return t2.height = m2[n2(513)]().getBBox().height, t2.offsetX = 0, t2.offsetY = 0, t2[n2(351)] = function(e3) {
    return L(t2, e3);
  }, { cluster: o2, labelBBox: {} };
}, D(519)), kanbanSection: V }, H = /* @__PURE__ */ new Map(), re = o((function() {
  var e2 = r(function* (e3, t2) {
    let n2 = yield ne[t2.shape || `rect`](e3, t2);
    return H.set(t2.id, n2), n2;
  });
  return function(t2, n2) {
    return e2.apply(this, arguments);
  };
})(), D(462)), U = o(() => {
  H = /* @__PURE__ */ new Map();
}, `clear`);
function W(e2, t2) {
  return e2.intersect(t2);
}
o(W, `intersectNode`);
var ie = W;
function ae(e2, t2, n2, r2) {
  var i2 = e2.x, a2 = e2.y, o2 = i2 - r2.x, s2 = a2 - r2.y, c2 = Math.sqrt(t2 * t2 * s2 * s2 + n2 * n2 * o2 * o2), l2 = Math.abs(t2 * n2 * o2 / c2);
  r2.x < i2 && (l2 = -l2);
  var u2 = Math.abs(t2 * n2 * s2 / c2);
  return r2.y < a2 && (u2 = -u2), { x: i2 + l2, y: a2 + u2 };
}
o(ae, D(477));
var oe = ae;
function G(e2, t2, n2) {
  return oe(e2, t2, t2, n2);
}
o(G, `intersectCircle`);
var K = G;
function se(e2, t2, n2, r2) {
  let i2 = D;
  {
    let a2 = t2.y - e2.y, o2 = e2.x - t2.x, s2 = t2.x * e2.y - e2.x * t2.y, c2 = a2 * n2.x + o2 * n2.y + s2, l2 = a2 * r2.x + o2 * r2.y + s2, u2 = 1e-6;
    if (c2 !== 0 && l2 !== 0 && ce(c2, l2)) return;
    let d2 = r2.y - n2.y, f2 = n2.x - r2.x, p2 = r2.x * n2.y - n2.x * r2.y, m2 = d2 * e2.x + f2 * e2.y + p2, h2 = d2 * t2.x + f2 * t2.y + p2;
    if (Math.abs(m2) < u2 && Math.abs(h2) < u2 && ce(m2, h2)) return;
    let g2 = a2 * f2 - d2 * o2;
    if (g2 === 0) return;
    let _2 = Math[i2(274)](g2 / 2), v2 = o2 * p2 - f2 * s2, y2 = v2 < 0 ? (v2 - _2) / g2 : (v2 + _2) / g2;
    return v2 = d2 * s2 - a2 * p2, { x: y2, y: v2 < 0 ? (v2 - _2) / g2 : (v2 + _2) / g2 };
  }
}
o(se, `intersectLine`);
function ce(e2, t2) {
  return e2 * t2 > 0;
}
o(ce, `sameSign`);
var le = se;
function ue(e2, t2, n2) {
  let r2 = D, i2 = e2.x, a2 = e2.y, o2 = [], s2 = 1 / 0, c2 = 1 / 0;
  typeof t2.forEach == `function` ? t2.forEach(function(e3) {
    s2 = Math.min(s2, e3.x), c2 = Math.min(c2, e3.y);
  }) : (s2 = Math[r2(487)](s2, t2.x), c2 = Math.min(c2, t2.y));
  let l2 = i2 - e2[r2(481)] / 2 - s2, u2 = a2 - e2[r2(353)] / 2 - c2;
  for (let i3 = 0; i3 < t2.length; i3++) {
    let a3 = t2[i3], s3 = t2[i3 < t2.length - 1 ? i3 + 1 : 0], c3 = le(e2, n2, { x: l2 + a3.x, y: u2 + a3.y }, { x: l2 + s3.x, y: u2 + s3.y });
    c3 && o2[r2(368)](c3);
  }
  return o2.length ? (o2.length > 1 && o2[r2(343)](function(e3, t3) {
    let r3 = e3.x - n2.x, i3 = e3.y - n2.y, a3 = Math.sqrt(r3 * r3 + i3 * i3), o3 = t3.x - n2.x, s3 = t3.y - n2.y, c3 = Math.sqrt(o3 * o3 + s3 * s3);
    return a3 < c3 ? -1 : a3 === c3 ? 0 : 1;
  }), o2[0]) : e2;
}
o(ue, D(514));
var q = { node: ie, circle: K, ellipse: oe, polygon: ue, rect: L };
function de(e2, t2) {
  let n2 = D, { labelStyles: r2 } = T(t2);
  t2.labelStyle = r2;
  let i2 = j(t2), o2 = i2;
  i2 || (o2 = `anchor`);
  let s2 = e2.insert(`g`).attr(`class`, o2).attr(`id`, t2.domId || t2.id), { cssStyles: c2 } = t2, l2 = E.svg(s2), u2 = S(t2, { fill: `black`, stroke: n2(455), fillStyle: n2(317) });
  t2.look !== `handDrawn` && (u2.roughness = 0);
  let d2 = l2[n2(486)](0, 0, 2, u2), f2 = s2.insert(() => d2, n2(520));
  return f2.attr(`class`, n2(480)).attr(`style`, g(c2)), A(t2, f2), t2.intersect = function(e3) {
    let r3 = n2;
    return a.info(r3(263), t2, 1, e3), q.circle(t2, 1, e3);
  }, s2;
}
o(de, D(480));
function fe(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = D, c2 = (e2 + n2) / 2, l2 = (t2 + r2) / 2, u2 = Math.atan2(r2 - t2, n2 - e2), d2 = (n2 - e2) / 2, f2 = (r2 - t2) / 2, p2 = d2 / i2, m2 = f2 / a2, h2 = Math[s2(467)](Math[s2(278)](p2, 2) + m2 ** 2);
  if (h2 > 1) throw Error(`The given radii are too small to create an arc between the points.`);
  let g2 = Math.sqrt(1 - h2 ** 2), _2 = c2 + g2 * a2 * Math[s2(340)](u2) * (o2 ? -1 : 1), v2 = l2 - g2 * i2 * Math.cos(u2) * (o2 ? -1 : 1), y2 = Math.atan2((t2 - v2) / a2, (e2 - _2) / i2), b2 = Math.atan2((r2 - v2) / a2, (n2 - _2) / i2) - y2;
  o2 && b2 < 0 && (b2 += 2 * Math.PI), !o2 && b2 > 0 && (b2 -= 2 * Math.PI);
  let x2 = [];
  for (let e3 = 0; e3 < 20; e3++) {
    let t3 = y2 + e3 / 19 * b2, n3 = _2 + i2 * Math.cos(t3), r3 = v2 + a2 * Math.sin(t3);
    x2[s2(368)]({ x: n3, y: r3 });
  }
  return x2;
}
o(fe, `generateArcPoints`);
function pe(e2, t2, n2) {
  let r2 = D, [i2, a2] = [t2, n2].sort((e3, t3) => t3 - e3);
  return a2 * (1 - Math[r2(467)](1 - (e2 / i2 / 2) ** 2));
}
o(pe, `calculateArcSagitta`);
function me(e2, t2) {
  return he[D(416)](this, arguments);
}
function he() {
  return he = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2[n2(505)] ?? 0, s2 = t2.look === `neo` ? 16 : a2, c2 = t2.look === `neo` ? 12 : a2, l2 = o((e3) => e3 + c2, `calcTotalHeight`), u2 = o((e3) => {
      let t3 = e3 / 2;
      return [t3 / (2.5 + e3 / 50), t3];
    }, `calcEllipseRadius`), { shapeSvg: d2, bbox: f2 } = yield O(e2, t2, j(t2)), p2 = l2(t2 != null && t2.height ? t2 == null ? void 0 : t2[n2(353)] : f2[n2(353)]), [m2, h2] = u2(p2), g2 = pe(p2, m2, h2), _2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2[n2(481)] : f2.width) + s2 * 2 + g2 - g2, v2 = p2, { cssStyles: y2 } = t2, b2 = [{ x: _2 / 2, y: -v2 / 2 }, { x: -_2 / 2, y: -v2 / 2 }, ...fe(-_2 / 2, -v2 / 2, -_2 / 2, v2 / 2, m2, h2, false), { x: _2 / 2, y: v2 / 2 }, ...fe(_2 / 2, v2 / 2, _2 / 2, -v2 / 2, m2, h2, true)], x2 = E[n2(428)](d2), C2 = S(t2, {});
    t2.look !== `handDrawn` && (C2.roughness = 0, C2.fillStyle = `solid`);
    let w2 = M(b2), D2 = x2.path(w2, C2), k2 = d2.insert(() => D2, `:first-child`);
    return k2.attr(`class`, `basic label-container outer-path`), y2 && t2.look !== n2(401) && k2.selectAll(n2(512)).attr(n2(396), y2), i2 && t2[n2(349)] !== `handDrawn` && k2.selectAll(n2(512)).attr(`style`, i2), k2.attr(`transform`, `translate(` + m2 / 2 + `, 0)`), A(t2, k2), t2[n2(351)] = function(e3) {
      return q.polygon(t2, b2, e3);
    }, d2;
  }), he.apply(this, arguments);
}
o(me, `bowTieRect`);
function J(e2, t2, n2, r2) {
  return e2.insert(`polygon`, `:first-child`).attr(`points`, r2.map(function(e3) {
    return e3.x + `,` + e3.y;
  }).join(` `)).attr(`class`, `label-container`).attr(`transform`, `translate(` + -t2 / 2 + `,` + n2 / 2 + `)`);
}
o(J, D(321));
var ge = 12;
function _e(e2, t2) {
  return ye.apply(this, arguments);
}
function ve() {
  let e2 = [`Doc Ref: `, `verifyMethod`, `children`, `kanbanItem`, `state-start`, `each`, `collate`, `title`, `rough-node`, `push`, `filter:url(#`, `<br>`, `offsetX`, `line`, `-drop-shadow-small`, `
    a`, `members`, `translate(0, `, `lined-document`, `lightning-bolt`, `centerLabel`, `iconSquare intersect`, `data-color-id`, `includes`, `info`, `rect`, `max`, `selectChildren`, `text`, `Direct Access Storage`, `outer-path`, `92CAvodJ`, `subproc`, `&lt;`, `windowPane`, `Multiple processes`, `Multi-Process`, `style`, `lin-rect`, `label-offset-x`, `Represents a manual task`, `forkJoin`, `handDrawn`, `Divided Process`, `from`, `Text 2`, `Filled Circle`, `Tagged Document`, `Framed Rectangle`, `ID: `, `translate(`, `entries`, `Circle`, `fill: `, `in-out`, `transparent`, `.label-group`, `apply`, `lean-left`, `Represents a stop point`, `erBox`, `Internal Storage`, `attribute-name`, `
    l`, `colorIndex`, `Collate`, `setupImage`, `flowchart`, `Text Block`, `svg`, `diagramPadding`, `data-look`, `useHtmlLabels`, `assetWidth`, `exec`, `name`, `icon`, `replace`, `orange`, `Bang`, `join`, `com-link`, `Rectangle`, `replaceAll`, `
    M`, `createCylinderPathD`, `,0)`, `994079ahUBtV`, `stacked-document`, `img`, `taggedWaveEdgedRectangle`, `cluster `, `attributes`, `attr`, `drop-shadow-small`, `fill`, `none`, `rowHeight`, `</g>`, `hex`, `set`, `squareRect`, `addEventListener`, `insertCluster`, `kanban`, `diamond`, `state`, `translate(-`, `sqrt`, `100%`, `minEntityWidth`, `htmlLabels`, `linedWaveEdgedRect`, `getAttribute`, `Database storage`, `select`, `l0,`, `h-cyl`, `intersectEllipse`, `getElementsByTagName`, `
    q0,5 -5,5
    h`, `anchor`, `width`, `-background`, `labelPaddingY`, `card`, `Notched Rectangle`, `circle`, `min`, `methods`, `map`, `.basic.label-container`, `basic label-container outer-path`, `left`, `fillStyle`, `calcIntersect`, ` 0,0,0 0,`, `Tagged Rectangle`, `getComputedStyle`, `187254iCHkzh`, ` 1 0,1 `, `
    q0,-5 5,-5
    h`, `doc`, `,0
    a`, `Diamond`, `Preparation or condition step`, `padding`, `Odd`, `attribute-keys`, `maxWidth`, `cloud`, `getBBox`, `Rough node insert CXC`, `path`, `node`, `intersectPolygon`, `entityPadding`, ` 1 0,0 `, `selectAll`, `Decision-making step`, `divider`, `:first-child`, `markdown-node-label`, `class`, `curlyBraceLeft`, `hourglass`, `.text`, `getNodeClasses`, `
                M`, `hideEmptyMembersBox`, `Triangle`, `Circle intersect`, `annotations`, `Lined document`, `path:nth-child(2)`, `Tagged document`, `circ`, `kanbanSection`, `http://www.w3.org/2000/svg`, `Loop Limit`, `&lt;&lt;`, `transform`, `abs`, `neo`, `translate(0,`, `labelStyle`, `pow`, `polygon`, `200470QVBhxA`, `cssClasses`, `notched-pentagon`, `stroke`, `142616FYSNiZ`, `roughness`, `rect_left_inv_arrow`, `1720812azBSRC`, `Divided process shape`, `textContent`, `textAlign`, `Paper tape`, `fontSize`, `.annotation-group`, `Start`, `insert`, `getBoundingClientRect`, `Stored data`, `length`, `xlink:href`, `shadedProcess`, `assetHeight`, `priority`, `get`, `Adds a comment`, `append`, `crossedCircle intersect`, `cyl`, `&gt;`, `textAnchor`, `attribute-comment`, `basic label-container  outer-path`, `label`, `Lean Right`, ` 0,0,0 `, `multiWaveEdgedRectangle`, `radius`, `solid`, `lin-proc`, `1815514INucSA`, `ownerSVGElement`, `insertPolygonShape`, `Manual file operation`, `createOuterCylinderPathD`, `193910FSDvAS`, `Lean Left`, `225FjYsJU`, `<g>`, `filled-circle`, `top`, `icon-shape default`, `Stacked Document`, `trace`, `manual-file`, `Tagged Process`, `lined-rectangle`, `rectangle`, `7HufDoE`, `Database`, `Display`, `sin`, `isArray`, ` 0,0,1 0,`, `sort`, `createElementNS`, `Data Store`, `Manual Input`, `basic label-container`, `forEach`, `look`, `debug`, `intersect`, `junction`, `height`, `flexDirection`, `shape`, `domId`, `187YQMZkO`, `lean-right`];
  return ve = function() {
    return e2;
  }, ve();
}
function ye() {
  return ye = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = t2[n2(349)] === `neo` ? 28 : a2, s2 = t2.look === `neo` ? 24 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e2, t2, j(t2)), u2 = ((t2 == null ? void 0 : t2.width) ?? l2.width) + (t2.look === `neo` ? o2 * 2 : o2 + ge), d2 = ((t2 == null ? void 0 : t2.height) ?? l2.height) + (t2.look === `neo` ? s2 * 2 : s2), f2 = u2, p2 = -d2, m2 = [{ x: 0 + ge, y: p2 }, { x: f2, y: p2 }, { x: f2, y: 0 }, { x: 0, y: 0 }, { x: 0, y: p2 + ge }, { x: 0 + ge, y: p2 }], h2, { cssStyles: g2 } = t2;
    if (t2[n2(349)] === `handDrawn`) {
      let e3 = E[n2(428)](c2), r3 = S(t2, {}), i3 = M(m2), a3 = e3.path(i3, r3);
      h2 = c2[n2(295)](() => a3, n2(520)).attr(`transform`, `translate(` + -u2 / 2 + `, ` + d2 / 2 + `)`), g2 && h2.attr(`style`, g2);
    } else h2 = J(c2, u2, d2, m2);
    return i2 && h2[n2(452)](`style`, i2), A(t2, h2), t2.intersect = function(e3) {
      return q.polygon(t2, m2, e3);
    }, c2;
  }), ye.apply(this, arguments);
}
o(_e, `card`);
function be(e2, t2) {
  let n2 = D, { nodeStyles: r2 } = T(t2);
  t2.label = ``;
  let i2 = e2.insert(`g`)[n2(452)](`class`, j(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: a2 } = t2, o2 = Math.max(28, t2[n2(481)] ?? 0), s2 = [{ x: 0, y: o2 / 2 }, { x: o2 / 2, y: 0 }, { x: 0, y: -o2 / 2 }, { x: -o2 / 2, y: 0 }], c2 = E.svg(i2), l2 = S(t2, {});
  t2.look !== `handDrawn` && (l2.roughness = 0, l2[n2(493)] = n2(317));
  let u2 = M(s2), d2 = c2.path(u2, l2), f2 = i2.insert(() => d2, `:first-child`);
  return a2 && t2.look !== `handDrawn` && f2.selectAll(`path`).attr(`style`, a2), r2 && t2.look !== `handDrawn` && f2.selectAll(`path`).attr(`style`, r2), t2.width = 28, t2.height = 28, t2.intersect = function(e3) {
    return q.polygon(t2, s2, e3);
  }, i2;
}
o(be, `choice`);
function xe(e2, t2, n2) {
  return Se.apply(this, arguments);
}
function Se() {
  return Se = r(function* (e2, t2, n2) {
    let r2 = I, { labelStyles: i2, nodeStyles: o2 } = T(t2);
    t2.labelStyle = i2;
    let { shapeSvg: s2, bbox: c2, halfPadding: l2 } = yield O(e2, t2, j(t2)), u2 = (n2 == null ? void 0 : n2.padding) ?? l2, d2 = t2[r2(349)] === `neo` ? c2[r2(481)] / 2 + 32 : c2.width / 2 + u2, f2, { cssStyles: p2 } = t2;
    if (t2.look === r2(401)) {
      let e3 = E[r2(428)](s2), n3 = S(t2, {}), i3 = e3.circle(0, 0, d2 * 2, n3);
      f2 = s2.insert(() => i3, `:first-child`), f2.attr(`class`, `basic label-container`).attr(`style`, g(p2));
    } else f2 = s2[r2(295)](`circle`, `:first-child`)[r2(452)](r2(522), `basic label-container`).attr(`style`, o2).attr(`r`, d2).attr(`cx`, 0).attr(`cy`, 0);
    return A(t2, f2), t2.calcIntersect = function(e3, t3) {
      let n3 = e3.width / 2;
      return q.circle(e3, n3, t3);
    }, t2.intersect = function(e3) {
      let n3 = r2;
      return a.info(n3(263), t2, d2, e3), q[n3(486)](t2, d2, e3);
    }, s2;
  }), Se.apply(this, arguments);
}
o(xe, `circle`);
function Ce(e2) {
  let t2 = D, n2 = Math.cos(Math.PI / 4), r2 = Math[t2(340)](Math.PI / 4), i2 = e2 * 2, a2 = { x: i2 / 2 * n2, y: i2 / 2 * r2 }, o2 = { x: -(i2 / 2) * n2, y: i2 / 2 * r2 }, s2 = { x: -(i2 / 2) * n2, y: -(i2 / 2) * r2 }, c2 = { x: i2 / 2 * n2, y: -(i2 / 2) * r2 };
  return `M ` + o2.x + `,` + o2.y + ` L ` + c2.x + `,` + c2.y + `
                   M ` + a2.x + `,` + a2.y + ` L ` + s2.x + `,` + s2.y;
}
o(Ce, `createLine`);
function we(e2, t2) {
  let n2 = D, { labelStyles: r2, nodeStyles: i2 } = T(t2);
  t2.labelStyle = r2, t2[n2(312)] = ``;
  let o2 = e2.insert(`g`).attr(`class`, j(t2)).attr(`id`, t2.domId ?? t2.id), s2 = Math.max(30, (t2 == null ? void 0 : t2.width) ?? 0), { cssStyles: c2 } = t2, l2 = E.svg(o2), u2 = S(t2, {});
  t2.look !== `handDrawn` && (u2.roughness = 0, u2.fillStyle = `solid`);
  let d2 = l2[n2(486)](0, 0, s2 * 2, u2), f2 = Ce(s2), p2 = l2.path(f2, u2), m2 = o2.insert(() => d2, `:first-child`);
  return m2.insert(() => p2), m2.attr(`class`, `outer-path`), c2 && t2.look !== `handDrawn` && m2.selectAll(`path`).attr(`style`, c2), i2 && t2.look !== `handDrawn` && m2.selectAll(`path`).attr(`style`, i2), A(t2, m2), t2.intersect = function(e3) {
    let r3 = n2;
    return a.info(r3(306), t2, { radius: s2, point: e3 }), q.circle(t2, s2, e3);
  }, o2;
}
o(we, `crossedCircle`);
function Y(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
o(Y, `generateCirclePoints`);
function Te(e2, t2) {
  return Ee.apply(this, arguments);
}
function Ee() {
  return Ee = r(function* (t2, n2) {
    let r2 = I, { labelStyles: i2, nodeStyles: a2 } = T(n2);
    n2.labelStyle = i2;
    let { shapeSvg: o2, bbox: s2, label: c2 } = yield O(t2, n2, j(n2)), l2 = n2[r2(349)] === `neo` ? 18 : n2.padding ?? 0, u2 = n2.look === `neo` ? 12 : n2.padding ?? 0, d2 = s2[r2(481)] + l2, f2 = s2.height + u2, p2 = Math.max(5, f2 * 0.1), { cssStyles: m2 } = n2, h2 = [...Y(d2 / 2, -f2 / 2, p2, 30, -90, 0), { x: -d2 / 2 - p2, y: p2 }, ...Y(d2 / 2 + p2 * 2, -p2, p2, 20, -180, -270), ...Y(d2 / 2 + p2 * 2, p2, p2, 20, -90, -180), { x: -d2 / 2 - p2, y: -f2 / 2 }, ...Y(d2 / 2, f2 / 2, p2, 20, 0, 90)], g2 = [{ x: d2 / 2, y: -f2 / 2 - p2 }, { x: -d2 / 2, y: -f2 / 2 - p2 }, ...Y(d2 / 2, -f2 / 2, p2, 20, -90, 0), { x: -d2 / 2 - p2, y: -p2 }, ...Y(d2 / 2 + d2 * 0.1, -p2, p2, 20, -180, -270), ...Y(d2 / 2 + d2 * 0.1, p2, p2, 20, -90, -180), { x: -d2 / 2 - p2, y: f2 / 2 }, ...Y(d2 / 2, f2 / 2, p2, 20, 0, 90), { x: -d2 / 2, y: f2 / 2 + p2 }, { x: d2 / 2, y: f2 / 2 + p2 }], _2 = E.svg(o2), v2 = S(n2, { fill: `none` });
    n2.look !== r2(401) && (v2[r2(285)] = 0, v2[r2(493)] = `solid`);
    let y2 = M(h2)[r2(436)](`Z`, ``), b2 = _2.path(y2, v2), x2 = M(g2), C2 = _2.path(x2, e({}, v2)), w2 = o2.insert(`g`, r2(520));
    return w2.insert(() => C2, `:first-child`).attr(`stroke-opacity`, 0), w2[r2(295)](() => b2, r2(520)), w2.attr(`class`, `text`), m2 && n2[r2(349)] !== `handDrawn` && w2.selectAll(`path`).attr(`style`, m2), a2 && n2.look !== `handDrawn` && w2.selectAll(`path`).attr(`style`, a2), w2.attr(`transform`, `translate(` + p2 + `, 0)`), c2[r2(452)](`transform`, `translate(` + (-d2 / 2 + p2 - (s2.x - (s2.left ?? 0))) + `,` + (-f2 / 2 + (n2[r2(505)] ?? 0) / 2 - (s2.y - (s2.top ?? 0))) + `)`), A(n2, w2), n2.intersect = function(e2) {
      return q.polygon(n2, g2, e2);
    }, o2;
  }), Ee.apply(this, arguments);
}
o(Te, D(523));
function X(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = D, s2 = [], c2 = i2 * Math.PI / 180, l2 = (a2 * Math.PI / 180 - c2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = c2 + i3 * l2, a3 = e2 + n2 * Math.cos(r3), u2 = t2 + n2 * Math.sin(r3);
    s2[o2(368)]({ x: a3, y: u2 });
  }
  return s2;
}
o(X, `generateCirclePoints`);
function De(e2, t2) {
  return Oe[D(416)](this, arguments);
}
function Oe() {
  return Oe = r(function* (t2, n2) {
    let r2 = I, { labelStyles: i2, nodeStyles: a2 } = T(n2);
    n2[r2(277)] = i2;
    let { shapeSvg: o2, bbox: s2, label: c2 } = yield O(t2, n2, j(n2)), l2 = n2.look === `neo` ? 18 : n2.padding ?? 0, u2 = n2.look === `neo` ? 12 : n2.padding ?? 0, d2 = s2[r2(481)] + (n2.look === `neo` ? l2 * 2 : l2), f2 = s2.height + (n2[r2(349)] === r2(275) ? u2 * 2 : u2), p2 = Math.max(5, f2 * 0.1), { cssStyles: m2 } = n2, h2 = [...X(d2 / 2, -f2 / 2, p2, 20, -90, 0), { x: d2 / 2 + p2, y: -p2 }, ...X(d2 / 2 + p2 * 2, -p2, p2, 20, -180, -270), ...X(d2 / 2 + p2 * 2, p2, p2, 20, -90, -180), { x: d2 / 2 + p2, y: f2 / 2 }, ...X(d2 / 2, f2 / 2, p2, 20, 0, 90)], g2 = [{ x: -d2 / 2, y: -f2 / 2 - p2 }, { x: d2 / 2, y: -f2 / 2 - p2 }, ...X(d2 / 2, -f2 / 2, p2, 20, -90, 0), { x: d2 / 2 + p2, y: -p2 }, ...X(d2 / 2 + p2 * 2, -p2, p2, 20, -180, -270), ...X(d2 / 2 + p2 * 2, p2, p2, 20, -90, -180), { x: d2 / 2 + p2, y: f2 / 2 }, ...X(d2 / 2, f2 / 2, p2, 20, 0, 90), { x: d2 / 2, y: f2 / 2 + p2 }, { x: -d2 / 2, y: f2 / 2 + p2 }], _2 = E[r2(428)](o2), v2 = S(n2, { fill: `none` });
    n2.look !== r2(401) && (v2.roughness = 0, v2[r2(493)] = `solid`);
    let y2 = M(h2)[r2(436)](`Z`, ``), b2 = _2[r2(512)](y2, v2), x2 = M(g2), C2 = _2.path(x2, e({}, v2)), w2 = o2.insert(`g`, `:first-child`);
    return w2.insert(() => C2, `:first-child`).attr(`stroke-opacity`, 0), w2.insert(() => b2, `:first-child`), w2.attr(r2(522), `text`), m2 && n2.look !== r2(401) && w2[r2(517)](`path`)[r2(452)](`style`, m2), a2 && n2.look !== `handDrawn` && w2.selectAll(r2(512)).attr(`style`, a2), w2.attr(`transform`, `translate(` + -p2 + `, 0)`), c2.attr(`transform`, `translate(` + (-d2 / 2 + (n2[r2(505)] ?? 0) / 2 - (s2.x - (s2.left ?? 0))) + `,` + (-f2 / 2 + (n2.padding ?? 0) / 2 - (s2.y - (s2[r2(329)] ?? 0))) + `)`), A(n2, w2), n2.intersect = function(e2) {
      return q.polygon(n2, g2, e2);
    }, o2;
  }), Oe.apply(this, arguments);
}
o(De, `curlyBraceRight`);
function Z(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
o(Z, `generateCirclePoints`);
function ke(e2, t2) {
  return Ae.apply(this, arguments);
}
function Ae() {
  return Ae = r(function* (t2, n2) {
    let r2 = I, { labelStyles: i2, nodeStyles: a2 } = T(n2);
    n2.labelStyle = i2;
    let { shapeSvg: o2, bbox: s2, label: c2 } = yield O(t2, n2, j(n2)), l2 = n2[r2(349)] === `neo` ? 18 : n2.padding ?? 0, u2 = n2.look === r2(275) ? 12 : n2[r2(505)] ?? 0, d2 = s2.width + (n2.look === `neo` ? l2 * 2 : l2), f2 = s2.height + (n2.look === r2(275) ? u2 * 2 : u2), p2 = Math.max(5, f2 * 0.1), { cssStyles: m2 } = n2, h2 = [...Z(d2 / 2, -f2 / 2, p2, 30, -90, 0), { x: -d2 / 2 - p2, y: p2 }, ...Z(d2 / 2 + p2 * 2, -p2, p2, 20, -180, -270), ...Z(d2 / 2 + p2 * 2, p2, p2, 20, -90, -180), { x: -d2 / 2 - p2, y: -f2 / 2 }, ...Z(d2 / 2, f2 / 2, p2, 20, 0, 90)], g2 = [...Z(-d2 / 2 + p2 + p2 / 2, -f2 / 2, p2, 20, -90, -180), { x: d2 / 2 - p2 / 2, y: p2 }, ...Z(-d2 / 2 - p2 / 2, -p2, p2, 20, 0, 90), ...Z(-d2 / 2 - p2 / 2, p2, p2, 20, -90, 0), { x: d2 / 2 - p2 / 2, y: -p2 }, ...Z(-d2 / 2 + p2 + p2 / 2, f2 / 2, p2, 30, -180, -270)], _2 = [{ x: d2 / 2, y: -f2 / 2 - p2 }, { x: -d2 / 2, y: -f2 / 2 - p2 }, ...Z(d2 / 2, -f2 / 2, p2, 20, -90, 0), { x: -d2 / 2 - p2, y: -p2 }, ...Z(d2 / 2 + p2 * 2, -p2, p2, 20, -180, -270), ...Z(d2 / 2 + p2 * 2, p2, p2, 20, -90, -180), { x: -d2 / 2 - p2, y: f2 / 2 }, ...Z(d2 / 2, f2 / 2, p2, 20, 0, 90), { x: -d2 / 2, y: f2 / 2 + p2 }, { x: d2 / 2 - p2 - p2 / 2, y: f2 / 2 + p2 }, ...Z(-d2 / 2 + p2 + p2 / 2, -f2 / 2, p2, 20, -90, -180), { x: d2 / 2 - p2 / 2, y: p2 }, ...Z(-d2 / 2 - p2 / 2, -p2, p2, 20, 0, 90), ...Z(-d2 / 2 - p2 / 2, p2, p2, 20, -90, 0), { x: d2 / 2 - p2 / 2, y: -p2 }, ...Z(-d2 / 2 + p2 + p2 / 2, f2 / 2, p2, 30, -180, -270)], v2 = E.svg(o2), y2 = S(n2, { fill: `none` });
    n2[r2(349)] !== `handDrawn` && (y2.roughness = 0, y2.fillStyle = `solid`);
    let b2 = M(h2).replace(`Z`, ``), x2 = v2.path(b2, y2), C2 = M(g2).replace(`Z`, ``), w2 = v2[r2(512)](C2, y2), D2 = M(_2), k2 = v2[r2(512)](D2, e({}, y2)), N2 = o2[r2(295)](`g`, `:first-child`);
    return N2.insert(() => k2, `:first-child`).attr(`stroke-opacity`, 0), N2.insert(() => x2, r2(520)), N2.insert(() => w2, `:first-child`), N2.attr(r2(522), `text`), m2 && n2[r2(349)] !== `handDrawn` && N2.selectAll(`path`).attr(`style`, m2), a2 && n2.look !== `handDrawn` && N2.selectAll(r2(512)).attr(`style`, a2), N2.attr(`transform`, r2(409) + (p2 - p2 / 4) + `, 0)`), c2.attr(`transform`, `translate(` + (-d2 / 2 + (n2.padding ?? 0) / 2 - (s2.x - (s2[r2(492)] ?? 0))) + `,` + (-f2 / 2 + (n2.padding ?? 0) / 2 - (s2.y - (s2.top ?? 0))) + `)`), A(n2, N2), n2.intersect = function(e2) {
      return q.polygon(n2, _2, e2);
    }, o2;
  }), Ae.apply(this, arguments);
}
o(ke, `curlyBraces`);
function je(e2, t2) {
  return Me.apply(this, arguments);
}
function Me() {
  return Me = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = t2.look === `neo` ? 16 : a2, s2 = t2[n2(349)] === `neo` ? 12 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e2, t2, j(t2)), u2 = Math[n2(385)](20, (l2[n2(481)] + o2 * 2) * 1.25, (t2 == null ? void 0 : t2.width) ?? 0), d2 = Math.max(5, l2.height + s2 * 2, (t2 == null ? void 0 : t2.height) ?? 0), f2 = d2 / 2, { cssStyles: p2 } = t2, m2 = E.svg(c2), h2 = S(t2, {});
    t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = n2(317));
    let g2 = u2, _2 = d2, v2 = g2 - f2, y2 = _2 / 4, b2 = [{ x: v2, y: 0 }, { x: y2, y: 0 }, { x: 0, y: _2 / 2 }, { x: y2, y: _2 }, { x: v2, y: _2 }, ...P(-v2, -_2 / 2, f2, 50, 270, 90)], x2 = M(b2), C2 = m2.path(x2, h2), w2 = c2.insert(() => C2, `:first-child`);
    return w2[n2(452)](`class`, `basic label-container outer-path`), p2 && t2.look !== n2(401) && w2.selectChildren(`path`)[n2(452)](`style`, p2), i2 && t2[n2(349)] !== `handDrawn` && w2.selectChildren(`path`)[n2(452)](`style`, i2), w2[n2(452)](n2(273), `translate(` + -u2 / 2 + `, ` + -d2 / 2 + `)`), A(t2, w2), t2[n2(351)] = function(e3) {
      return q.polygon(t2, b2, e3);
    }, c2;
  }), Me.apply(this, arguments);
}
o(je, `curvedTrapezoid`);
var Ne = o((e2, t2, n2, r2, i2, a2) => [`M` + e2 + `,` + (t2 + a2), `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`, `a` + i2 + `,` + a2 + ` 0,0,0 ` + -n2 + `,0`, `l0,` + r2, `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`, D(475) + -r2][D(439)](` `), `createCylinderPathD`), Pe = o((e2, t2, n2, r2, i2, a2) => [`M` + e2 + `,` + (t2 + a2), `M` + (e2 + n2) + `,` + (t2 + a2), `a` + i2 + `,` + a2 + D(314) + -n2 + `,0`, `l0,` + r2, `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`, D(475) + -r2].join(` `), D(323)), Fe = o((e2, t2, n2, r2, i2, a2) => [`M` + (e2 - n2 / 2) + `,` + -r2 / 2, `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`].join(` `), `createInnerCylinderPathD`), Ie = 8, Le = 8;
function Re(e2, t2) {
  return ze.apply(this, arguments);
}
function ze() {
  return ze = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2.padding ?? 0, o2 = t2.look === `neo` ? 24 : a2, s2 = t2.look === `neo` ? 24 : a2;
    if (t2[n2(481)] || t2.height) {
      let e3 = t2[n2(481)] ?? 0;
      t2[n2(481)] = (t2[n2(481)] ?? 0) - s2, t2.width < Le && (t2.width = Le);
      let r3 = e3 / 2 / (2.5 + e3 / 50);
      t2[n2(353)] = (t2.height ?? 0) - o2 - r3 * 3, t2.height < Ie && (t2.height = Ie);
    }
    let { shapeSvg: c2, bbox: l2, label: u2 } = yield O(e2, t2, j(t2)), d2 = (t2.width ? t2.width : l2.width) + s2, f2 = d2 / 2, p2 = f2 / (2.5 + d2 / 50), m2 = (t2.height ? t2[n2(353)] : l2.height) + o2 + p2, h2, { cssStyles: _2 } = t2;
    if (t2.look === `handDrawn`) {
      let e3 = E.svg(c2), r3 = Pe(0, 0, d2, m2, f2, p2), i3 = Fe(0, p2, d2, m2, f2, p2), a3 = S(t2, {}), o3 = e3.path(r3, a3), s3 = e3.path(i3, S(t2, { fill: `none` }));
      h2 = c2.insert(() => s3, `:first-child`), h2 = c2[n2(295)](() => o3, `:first-child`), h2.attr(`class`, `basic label-container`), _2 && h2.attr(n2(396), _2);
    } else {
      let e3 = Ne(0, 0, d2, m2, f2, p2);
      h2 = c2.insert(`path`, `:first-child`)[n2(452)](`d`, e3).attr(`class`, n2(491)).attr(`style`, g(_2))[n2(452)](`style`, i2);
    }
    return h2.attr(`label-offset-y`, p2), h2[n2(452)](`transform`, n2(409) + -d2 / 2 + `, ` + -(m2 / 2 + p2) + `)`), A(t2, h2), u2[n2(452)](`transform`, n2(409) + (-(l2[n2(481)] / 2) - (l2.x - (l2.left ?? 0))) + `, ` + (-(l2.height / 2) + (t2.padding ?? 0) / 1.5 - (l2.y - (l2.top ?? 0))) + `)`), t2.intersect = function(e3) {
      let r3 = n2, i3 = q.rect(t2, e3), a3 = i3.x - (t2.x ?? 0);
      if (f2 != 0 && (Math.abs(a3) < (t2.width ?? 0) / 2 || Math.abs(a3) == (t2.width ?? 0) / 2 && Math[r3(274)](i3.y - (t2.y ?? 0)) > (t2.height ?? 0) / 2 - p2)) {
        let n3 = p2 * p2 * (1 - a3 * a3 / (f2 * f2));
        n3 > 0 && (n3 = Math.sqrt(n3)), n3 = p2 - n3, e3.y - (t2.y ?? 0) > 0 && (n3 = -n3), i3.y += n3;
      }
      return i3;
    }, c2;
  }), ze.apply(this, arguments);
}
o(Re, `cylinder`);
function Be(e2, t2, n2) {
  return Ve.apply(this, arguments);
}
function Ve() {
  return Ve = r(function* (e2, t2, n2) {
    let r2 = I, { labelStyles: i2, nodeStyles: a2 } = T(t2);
    t2.labelStyle = i2;
    let { shapeSvg: o2, bbox: s2 } = yield O(e2, t2, j(t2)), c2 = Math.max(s2.width + n2.labelPaddingX * 2, (t2 == null ? void 0 : t2.width) || 0), l2 = Math[r2(385)](s2.height + n2[r2(483)] * 2, (t2 == null ? void 0 : t2.height) || 0), u2 = -c2 / 2, d2 = -l2 / 2, f2, { rx: p2, ry: m2 } = t2, { cssStyles: h2 } = t2;
    if (n2 != null && n2.rx && n2.ry && (p2 = n2.rx, m2 = n2.ry), t2[r2(349)] === `handDrawn`) {
      let e3 = E.svg(o2), n3 = S(t2, {}), r3 = p2 || m2 ? e3.path(z(u2, d2, c2, l2, p2 || 0), n3) : e3.rectangle(u2, d2, c2, l2, n3);
      f2 = o2.insert(() => r3, `:first-child`), f2.attr(`class`, `basic label-container`).attr(`style`, g(h2));
    } else f2 = o2.insert(r2(384), `:first-child`), f2.attr(r2(522), `basic label-container`).attr(`style`, a2).attr(`rx`, g(p2)).attr(`ry`, g(m2)).attr(`x`, u2).attr(`y`, d2)[r2(452)](`width`, c2)[r2(452)](`height`, l2);
    return A(t2, f2), t2.calcIntersect = function(e3, t3) {
      return q[r2(384)](e3, t3);
    }, t2[r2(351)] = function(e3) {
      return q[r2(384)](t2, e3);
    }, o2;
  }), Ve.apply(this, arguments);
}
o(Be, `drawRect`);
function He(e2, t2) {
  return Ue.apply(this, arguments);
}
function Ue() {
  let e2 = D;
  return Ue = r(function* (e3, t2) {
    let n2 = I, { cssClasses: r2, labelPaddingX: i2, labelPaddingY: a2, padding: o2, width: s2, height: c2 } = t2, l2 = yield Be(e3, t2, { rx: 0, ry: 0, classes: r2 ?? ``, labelPaddingX: i2 ?? (o2 ?? 0) * 2, labelPaddingY: a2 ?? o2 ?? 0 });
    if (t2.look === `handDrawn`) {
      let e4 = E.svg(l2), r3 = S(t2, {}), i3 = l2.select(`.basic.label-container > path:nth-child(2)`), a3 = i3.node();
      if (!a3) return l2;
      let o3 = null;
      if (a3 instanceof SVGGraphicsElement) o3 = a3.getBBox();
      else return l2;
      return l2.insert(() => e4.line(o3.x, o3.y, o3.x + o3.width, o3.y, r3), `.basic.label-container g.label`), l2.insert(() => e4.line(o3.x, o3.y + o3.height, o3.x + o3[n2(481)], o3.y + o3.height, r3), `.basic.label-container g.label`), i3.remove(), l2;
    }
    let u2 = l2[n2(474)](n2(490)), d2 = (Number(u2.attr(`width`)) || s2) ?? 0, f2 = (Number(u2.attr(n2(353))) || c2) ?? 0;
    return d2 > 0 && f2 > 0 && u2.attr(`stroke-dasharray`, d2 + ` ` + f2), l2;
  }), Ue[e2(416)](this, arguments);
}
o(He, `datastore`);
function We(e2, t2) {
  return Ge[D(416)](this, arguments);
}
function Ge() {
  let e2 = D;
  return Ge = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2.look === `neo` ? 16 : t2.padding ?? 0, o2 = t2.look === `neo` ? 16 : t2.padding ?? 0, { shapeSvg: s2, bbox: c2, label: l2 } = yield O(e3, t2, j(t2)), u2 = c2.width + a2, d2 = c2.height + o2, f2 = d2 * 0.2, p2 = -u2 / 2, m2 = -d2 / 2 - f2 / 2, { cssStyles: h2 } = t2, g2 = E.svg(s2), _2 = S(t2, {});
    t2[n2(349)] !== `handDrawn` && (_2.roughness = 0, _2.fillStyle = `solid`);
    let v2 = [{ x: p2, y: m2 + f2 }, { x: -p2, y: m2 + f2 }, { x: -p2, y: -m2 }, { x: p2, y: -m2 }, { x: p2, y: m2 }, { x: -p2, y: m2 }, { x: -p2, y: m2 + f2 }], y2 = g2.polygon(v2[n2(489)]((e4) => [e4.x, e4.y]), _2), b2 = s2.insert(() => y2, n2(520));
    return b2.attr(`class`, `basic label-container outer-path`), h2 && t2.look !== `handDrawn` && b2.selectAll(n2(512))[n2(452)](`style`, h2), i2 && t2.look !== `handDrawn` && b2.selectAll(`path`)[n2(452)](`style`, i2), l2.attr(`transform`, n2(409) + (p2 + (t2.padding ?? 0) / 2 - (c2.x - (c2.left ?? 0))) + `, ` + (m2 + f2 + (t2.padding ?? 0) / 2 - (c2.y - (c2.top ?? 0))) + `)`), A(t2, b2), t2.intersect = function(e4) {
      return q.rect(t2, e4);
    }, s2;
  }), Ge[e2(416)](this, arguments);
}
o(We, `dividedRectangle`);
function Ke(e2, t2) {
  return qe.apply(this, arguments);
}
function qe() {
  return qe = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2), o2 = t2.look === n2(275) ? 12 : 5;
    t2.labelStyle = r2;
    let s2 = t2.padding ?? 0, c2 = t2[n2(349)] === `neo` ? 16 : s2, { shapeSvg: l2, bbox: u2 } = yield O(e2, t2, j(t2)), d2 = (t2 != null && t2.width ? (t2 == null ? void 0 : t2.width) / 2 : u2[n2(481)] / 2) + (c2 ?? 0), f2 = d2 - o2, p2, { cssStyles: m2 } = t2;
    if (t2.look === `handDrawn`) {
      var h2, _2;
      let e3 = E.svg(l2), n3 = S(t2, { roughness: 0.2, strokeWidth: 2.5 }), r3 = S(t2, { roughness: 0.2, strokeWidth: 1.5 }), i3 = e3.circle(0, 0, d2 * 2, n3), a2 = e3.circle(0, 0, f2 * 2, r3);
      p2 = l2.insert(`g`, `:first-child`), p2.attr(`class`, g(t2.cssClasses)).attr(`style`, g(m2)), (h2 = p2.node()) == null || h2.appendChild(i3), (_2 = p2.node()) == null || _2.appendChild(a2);
    } else {
      p2 = l2.insert(`g`, `:first-child`);
      let e3 = p2.insert(`circle`, `:first-child`), t3 = p2.insert(`circle`);
      p2.attr(`class`, `basic label-container`)[n2(452)](`style`, i2), e3.attr(n2(522), `outer-circle`)[n2(452)](n2(396), i2).attr(`r`, d2).attr(`cx`, 0).attr(`cy`, 0), t3.attr(`class`, `inner-circle`).attr(`style`, i2).attr(`r`, f2).attr(`cx`, 0)[n2(452)](`cy`, 0);
    }
    return A(t2, p2), t2.intersect = function(e3) {
      return a.info(`DoubleCircle intersect`, t2, d2, e3), q.circle(t2, d2, e3);
    }, l2;
  }), qe.apply(this, arguments);
}
o(Ke, `doublecircle`);
function Je(e2, t2, { config: { themeVariables: n2 } }) {
  let r2 = D, { labelStyles: i2, nodeStyles: o2 } = T(t2);
  t2.label = ``, t2.labelStyle = i2;
  let s2 = e2.insert(`g`)[r2(452)](`class`, j(t2)).attr(`id`, t2[r2(356)] ?? t2.id), { cssStyles: c2 } = t2, l2 = E.svg(s2), { nodeBorder: u2 } = n2, d2 = S(t2, { fillStyle: `solid` });
  t2.look !== `handDrawn` && (d2.roughness = 0);
  let f2 = l2.circle(0, 0, 14, d2), p2 = s2.insert(() => f2, `:first-child`);
  return p2.selectAll(`path`).attr(`style`, `fill: ` + u2 + ` !important;`), c2 && c2.length > 0 && t2.look !== r2(401) && p2[r2(517)](r2(512)).attr(`style`, c2), o2 && t2.look !== `handDrawn` && p2.selectAll(`path`)[r2(452)](r2(396), o2), A(t2, p2), t2.intersect = function(e3) {
    return a[r2(383)](`filledCircle intersect`, t2, { radius: 7, point: e3 }), q.circle(t2, 7, e3);
  }, s2;
}
o(Je, `filledCircle`);
var Ye = 10, Xe = 10;
function Ze(e2, t2) {
  return Qe.apply(this, arguments);
}
function Qe() {
  let e2 = D;
  return Qe = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let o2 = t2.padding ?? 0, s2 = t2.look === `neo` ? o2 * 2 : o2;
    (t2[n2(481)] || t2.height) && (t2.height = (t2 == null ? void 0 : t2.height) ?? 0, t2[n2(353)] < Ye && (t2.height = Ye), t2.width = ((t2 == null ? void 0 : t2[n2(481)]) ?? 0) - s2 - s2 / 2, t2.width < Xe && (t2.width = Xe));
    let { shapeSvg: c2, bbox: l2, label: u2 } = yield O(e3, t2, j(t2)), d2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : l2[n2(481)]) + (s2 ?? 0), f2 = t2 != null && t2.height ? t2 == null ? void 0 : t2.height : d2 + l2.height, p2 = f2, m2 = [{ x: 0, y: -f2 }, { x: p2, y: -f2 }, { x: p2 / 2, y: 0 }], { cssStyles: h2 } = t2, g2 = E.svg(c2), _2 = S(t2, {});
    t2.look !== n2(401) && (_2.roughness = 0, _2[n2(493)] = `solid`);
    let v2 = M(m2), y2 = g2[n2(512)](v2, _2), b2 = c2.insert(() => y2, `:first-child`).attr(`transform`, `translate(` + -f2 / 2 + `, ` + f2 / 2 + `)`).attr(`class`, `outer-path`);
    return h2 && t2.look !== `handDrawn` && b2.selectChildren(`path`).attr(n2(396), h2), i2 && t2.look !== `handDrawn` && b2.selectChildren(`path`)[n2(452)](`style`, i2), t2[n2(481)] = d2, t2[n2(353)] = f2, A(t2, b2), u2.attr(`transform`, `translate(` + (-l2.width / 2 - (l2.x - (l2.left ?? 0))) + `, ` + (-f2 / 2 + (t2[n2(505)] ?? 0) / 2 + (l2.y - (l2.top ?? 0))) + `)`), t2.intersect = function(e4) {
      return a.info(`Triangle intersect`, t2, m2, e4), q.polygon(t2, m2, e4);
    }, c2;
  }), Qe[e2(416)](this, arguments);
}
o(Ze, `flippedTriangle`);
function $e(e2, t2, { dir: n2, config: { state: r2, themeVariables: i2 } }) {
  let a2 = D, { nodeStyles: o2 } = T(t2);
  t2.label = ``;
  let s2 = e2[a2(295)](`g`).attr(`class`, j(t2))[a2(452)](`id`, t2.domId ?? t2.id), { cssStyles: c2 } = t2, l2 = Math.max(70, (t2 == null ? void 0 : t2.width) ?? 0), u2 = Math.max(10, (t2 == null ? void 0 : t2[a2(353)]) ?? 0);
  n2 === `LR` && (l2 = Math[a2(385)](10, (t2 == null ? void 0 : t2.width) ?? 0), u2 = Math[a2(385)](70, (t2 == null ? void 0 : t2[a2(353)]) ?? 0));
  let d2 = -1 * l2 / 2, f2 = -1 * u2 / 2, p2 = E.svg(s2), m2 = S(t2, { stroke: i2.lineColor, fill: i2.lineColor });
  t2.look !== a2(401) && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = p2.rectangle(d2, f2, l2, u2, m2), g2 = s2.insert(() => h2, `:first-child`);
  c2 && t2.look !== `handDrawn` && g2.selectAll(`path`).attr(a2(396), c2), o2 && t2.look !== `handDrawn` && g2.selectAll(`path`).attr(`style`, o2), A(t2, g2);
  let _2 = (r2 == null ? void 0 : r2.padding) ?? 0;
  return t2.width && t2[a2(353)] && (t2.width += _2 / 2 || 0, t2.height += _2 / 2 || 0), t2.intersect = function(e3) {
    return q.rect(t2, e3);
  }, s2;
}
o($e, D(400));
function et(e2, t2) {
  return tt.apply(this, arguments);
}
function tt() {
  let e2 = D;
  return tt = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let o2 = t2.look === `neo` ? 16 : t2.padding ?? 0, s2 = t2.look === `neo` ? 12 : t2.padding ?? 0;
    (t2.width || t2.height) && (t2.height = ((t2 == null ? void 0 : t2.height) ?? 0) - s2 * 2, t2.height < 10 && (t2.height = 10), t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - o2 * 2, t2.width < 15 && (t2[n2(481)] = 15));
    let { shapeSvg: c2, bbox: l2 } = yield O(e3, t2, j(t2)), u2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : Math.max(15, l2.width)) + o2 * 2, d2 = (t2 != null && t2.height ? t2 == null ? void 0 : t2[n2(353)] : Math[n2(385)](10, l2.height)) + s2 * 2, f2 = d2 / 2, { cssStyles: p2 } = t2, m2 = E.svg(c2), h2 = S(t2, {});
    t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
    let g2 = [{ x: -u2 / 2, y: -d2 / 2 }, { x: u2 / 2 - f2, y: -d2 / 2 }, ...P(-u2 / 2 + f2, 0, f2, 50, 90, 270), { x: u2 / 2 - f2, y: d2 / 2 }, { x: -u2 / 2, y: d2 / 2 }], _2 = M(g2), v2 = m2.path(_2, h2), y2 = c2.insert(() => v2, `:first-child`);
    return y2.attr(n2(522), `basic label-container outer-path`), p2 && t2.look !== `handDrawn` && y2[n2(386)](`path`)[n2(452)](n2(396), p2), i2 && t2.look !== `handDrawn` && y2.selectChildren(`path`).attr(n2(396), i2), A(t2, y2), t2.intersect = function(e4) {
      return a.info(`Pill intersect`, t2, { radius: f2, point: e4 }), q.polygon(t2, g2, e4);
    }, c2;
  }), tt[e2(416)](this, arguments);
}
o(et, `halfRoundedRectangle`);
var nt = o((e2, t2, n2, r2, i2) => [`M` + (e2 + i2) + `,` + t2, `L` + (e2 + n2 - i2) + `,` + t2, `L` + (e2 + n2) + `,` + (t2 - r2 / 2), `L` + (e2 + n2 - i2) + `,` + (t2 - r2), `L` + (e2 + i2) + `,` + (t2 - r2), `L` + e2 + `,` + (t2 - r2 / 2), `Z`].join(` `), `createHexagonPathD`);
function rt(e2, t2) {
  return it[D(416)](this, arguments);
}
function it() {
  let e2 = D;
  return it = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2), a2 = t2.look === `neo` ? 3.5 : 4;
    t2.labelStyle = r2;
    let o2 = t2.padding ?? 0, s2 = t2[n2(349)] === `neo` ? 70 : o2, c2 = t2.look === n2(275) ? 32 : o2;
    if (t2.width || t2.height) {
      let e4 = (t2.height ?? 0) / a2;
      t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - 2 * e4 - c2, t2.height = (t2[n2(353)] ?? 0) - s2;
    }
    let { shapeSvg: l2, bbox: u2 } = yield O(e3, t2, j(t2)), d2 = (t2 != null && t2.height ? t2 == null ? void 0 : t2.height : u2.height) + s2, f2 = d2 / a2, p2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : u2.width) + 2 * f2 + c2, m2 = [{ x: f2, y: 0 }, { x: p2 - f2, y: 0 }, { x: p2, y: -d2 / 2 }, { x: p2 - f2, y: -d2 }, { x: f2, y: -d2 }, { x: 0, y: -d2 / 2 }], h2, { cssStyles: g2 } = t2;
    if (t2.look === `handDrawn`) {
      let e4 = E.svg(l2), r3 = S(t2, {}), i3 = nt(0, 0, p2, d2, f2), a3 = e4.path(i3, r3);
      h2 = l2.insert(() => a3, `:first-child`)[n2(452)](`transform`, `translate(` + -p2 / 2 + `, ` + d2 / 2 + `)`), g2 && h2.attr(`style`, g2);
    } else h2 = J(l2, p2, d2, m2);
    return i2 && h2[n2(452)](`style`, i2), t2.width = p2, t2[n2(353)] = d2, A(t2, h2), t2[n2(351)] = function(e4) {
      return q.polygon(t2, m2, e4);
    }, l2;
  }), it[e2(416)](this, arguments);
}
o(rt, `hexagon`);
function at(e2, t2) {
  return ot[D(416)](this, arguments);
}
function ot() {
  return ot = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.label = ``, t2.labelStyle = r2;
    let { shapeSvg: o2 } = yield O(e2, t2, j(t2)), s2 = Math.max(30, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(30, (t2 == null ? void 0 : t2.height) ?? 0), { cssStyles: l2 } = t2, u2 = E.svg(o2), d2 = S(t2, {});
    t2.look !== `handDrawn` && (d2[n2(285)] = 0, d2.fillStyle = `solid`);
    let f2 = [{ x: 0, y: 0 }, { x: s2, y: 0 }, { x: 0, y: c2 }, { x: s2, y: c2 }], p2 = M(f2), m2 = u2.path(p2, d2), h2 = o2.insert(() => m2, `:first-child`);
    return h2.attr(`class`, `basic label-container outer-path`), l2 && t2.look !== `handDrawn` && h2.selectChildren(`path`)[n2(452)](`style`, l2), i2 && t2[n2(349)] !== `handDrawn` && h2.selectChildren(`path`)[n2(452)](`style`, i2), h2.attr(`transform`, `translate(` + -s2 / 2 + `, ` + -c2 / 2 + `)`), A(t2, h2), t2[n2(351)] = function(e3) {
      return a.info(`Pill intersect`, t2, { points: f2 }), q.polygon(t2, f2, e3);
    }, o2;
  }), ot.apply(this, arguments);
}
o(at, `hourglass`);
function st(e2, t2, n2) {
  return ct.apply(this, arguments);
}
function ct() {
  return ct = r(function* (t2, n2, { config: { themeVariables: r2, flowchart: i2 } }) {
    let o2 = I, { labelStyles: s2 } = T(n2);
    n2[o2(277)] = s2;
    let c2 = n2.assetHeight ?? 48, l2 = n2.assetWidth ?? 48, u2 = Math.max(c2, l2), d2 = i2 == null ? void 0 : i2.wrappingWidth;
    n2.width = Math.max(u2, d2 ?? 0);
    let { shapeSvg: f2, bbox: p2, label: m2 } = yield O(t2, n2, `icon-shape default`), h2 = n2.pos === `t`, g2 = u2, _2 = u2, { nodeBorder: y2 } = r2, { stylesMap: b2 } = C(n2), x2 = -_2 / 2, w2 = -g2 / 2, D2 = n2.label ? 8 : 0, k2 = E[o2(428)](f2), j2 = S(n2, { stroke: o2(455), fill: `none` });
    n2.look !== `handDrawn` && (j2.roughness = 0, j2.fillStyle = `solid`);
    let M2 = k2.rectangle(x2, w2, _2, g2, j2), N2 = Math.max(_2, p2.width), P2 = g2 + p2.height + D2, F2 = k2.rectangle(-N2 / 2, -P2 / 2, N2, P2, e(e({}, j2), {}, { fill: o2(414), stroke: `none` })), L2 = f2.insert(() => M2, `:first-child`), R2 = f2.insert(() => F2);
    if (n2.icon) {
      let e2 = f2.append(`g`);
      e2.html(`<g>` + (yield v(n2.icon, { height: u2, width: u2, fallbackPrefix: `` })) + o2(457));
      let t3 = e2.node().getBBox(), r3 = t3.width, i3 = t3.height, a2 = t3.x, s3 = t3.y;
      e2.attr(`transform`, `translate(` + (-r3 / 2 - a2) + `,` + (h2 ? p2[o2(353)] / 2 + D2 / 2 - i3 / 2 - s3 : -p2.height / 2 - D2 / 2 - i3 / 2 - s3) + `)`), e2.attr(o2(396), `color: ` + (b2.get(`stroke`) ?? y2) + `;`);
    }
    return m2[o2(452)](o2(273), `translate(` + (-p2.width / 2 - (p2.x - (p2.left ?? 0))) + `,` + (h2 ? -P2 / 2 : P2 / 2 - p2[o2(353)]) + `)`), L2.attr(`transform`, o2(276) + (h2 ? p2.height / 2 + D2 / 2 : -p2.height / 2 - D2 / 2) + `)`), A(n2, R2), n2[o2(351)] = function(e2) {
      if (a.info(`iconSquare intersect`, n2, e2), !n2.label) return q.rect(n2, e2);
      let t3 = n2.x ?? 0, r3 = n2.y ?? 0, i3 = n2.height ?? 0, o3 = [];
      return o3 = h2 ? [{ x: t3 - p2.width / 2, y: r3 - i3 / 2 }, { x: t3 + p2.width / 2, y: r3 - i3 / 2 }, { x: t3 + p2.width / 2, y: r3 - i3 / 2 + p2.height + D2 }, { x: t3 + _2 / 2, y: r3 - i3 / 2 + p2.height + D2 }, { x: t3 + _2 / 2, y: r3 + i3 / 2 }, { x: t3 - _2 / 2, y: r3 + i3 / 2 }, { x: t3 - _2 / 2, y: r3 - i3 / 2 + p2.height + D2 }, { x: t3 - p2.width / 2, y: r3 - i3 / 2 + p2.height + D2 }] : [{ x: t3 - _2 / 2, y: r3 - i3 / 2 }, { x: t3 + _2 / 2, y: r3 - i3 / 2 }, { x: t3 + _2 / 2, y: r3 - i3 / 2 + g2 }, { x: t3 + p2.width / 2, y: r3 - i3 / 2 + g2 }, { x: t3 + p2.width / 2 / 2, y: r3 + i3 / 2 }, { x: t3 - p2.width / 2, y: r3 + i3 / 2 }, { x: t3 - p2.width / 2, y: r3 - i3 / 2 + g2 }, { x: t3 - _2 / 2, y: r3 - i3 / 2 + g2 }], q.polygon(n2, o3, e2);
    }, f2;
  }), ct.apply(this, arguments);
}
o(st, `icon`);
function lt(e2, t2, n2) {
  return ut[D(416)](this, arguments);
}
function ut() {
  return ut = r(function* (t2, n2, { config: { themeVariables: r2, flowchart: i2 } }) {
    let o2 = I, { labelStyles: s2 } = T(n2);
    n2.labelStyle = s2;
    let c2 = n2.assetHeight ?? 48, l2 = n2[o2(432)] ?? 48, u2 = Math[o2(385)](c2, l2), d2 = i2 == null ? void 0 : i2.wrappingWidth;
    n2[o2(481)] = Math[o2(385)](u2, d2 ?? 0);
    let { shapeSvg: f2, bbox: p2, label: m2 } = yield O(t2, n2, o2(330)), h2 = n2[o2(312)] ? 8 : 0, g2 = n2.pos === `t`, { nodeBorder: _2, mainBkg: y2 } = r2, { stylesMap: b2 } = C(n2), x2 = E.svg(f2), w2 = S(n2, {});
    n2.look !== `handDrawn` && (w2.roughness = 0, w2.fillStyle = o2(317)), w2.stroke = b2.get(o2(454)) ?? y2;
    let D2 = f2.append(`g`);
    n2.icon && D2.html(`<g>` + (yield v(n2.icon, { height: u2, width: u2, fallbackPrefix: `` })) + o2(457));
    let k2 = D2.node()[o2(510)](), j2 = k2.width, M2 = k2.height, N2 = k2.x, P2 = k2.y, F2 = Math[o2(385)](j2, M2) * Math.SQRT2 + 40, L2 = x2.circle(0, 0, F2, w2), R2 = Math.max(F2, p2.width), z2 = F2 + p2.height + h2, ee2 = x2.rectangle(-R2 / 2, -z2 / 2, R2, z2, e(e({}, w2), {}, { fill: `transparent`, stroke: `none` })), te2 = f2.insert(() => L2, o2(520)), B2 = f2.insert(() => ee2);
    return D2.attr(`transform`, o2(409) + (-j2 / 2 - N2) + `,` + (g2 ? p2.height / 2 + h2 / 2 - M2 / 2 - P2 : -p2.height / 2 - h2 / 2 - M2 / 2 - P2) + `)`), D2.attr(`style`, `color: ` + (b2.get(`stroke`) ?? _2) + `;`), m2.attr(`transform`, `translate(` + (-p2.width / 2 - (p2.x - (p2.left ?? 0))) + `,` + (g2 ? -z2 / 2 : z2 / 2 - p2[o2(353)]) + `)`), te2.attr(o2(273), o2(276) + (g2 ? p2.height / 2 + h2 / 2 : -p2.height / 2 - h2 / 2) + `)`), A(n2, B2), n2.intersect = function(e2) {
      return a[o2(383)](`iconSquare intersect`, n2, e2), q.rect(n2, e2);
    }, f2;
  }), ut.apply(this, arguments);
}
o(lt, `iconCircle`);
function dt(e2, t2, n2) {
  return ft.apply(this, arguments);
}
function ft() {
  return ft = r(function* (t2, n2, { config: { themeVariables: r2, flowchart: i2 } }) {
    let o2 = I, { labelStyles: s2 } = T(n2);
    n2.labelStyle = s2;
    let c2 = n2[o2(301)] ?? 48, l2 = n2[o2(432)] ?? 48, u2 = Math.max(c2, l2), d2 = i2 == null ? void 0 : i2.wrappingWidth;
    n2.width = Math.max(u2, d2 ?? 0);
    let { shapeSvg: f2, bbox: p2, halfPadding: m2, label: h2 } = yield O(t2, n2, `icon-shape default`), g2 = n2.pos === `t`, _2 = u2 + m2 * 2, y2 = u2 + m2 * 2, { nodeBorder: b2, mainBkg: x2 } = r2, { stylesMap: w2 } = C(n2), D2 = -y2 / 2, k2 = -_2 / 2, j2 = n2[o2(312)] ? 8 : 0, M2 = E.svg(f2), N2 = S(n2, {});
    n2.look !== `handDrawn` && (N2.roughness = 0, N2[o2(493)] = `solid`), N2.stroke = w2.get(`fill`) ?? x2;
    let P2 = M2.path(z(D2, k2, y2, _2, 5), N2), F2 = Math.max(y2, p2.width), L2 = _2 + p2.height + j2, R2 = M2.rectangle(-F2 / 2, -L2 / 2, F2, L2, e(e({}, N2), {}, { fill: `transparent`, stroke: `none` })), ee2 = f2.insert(() => P2, `:first-child`).attr(`class`, `icon-shape2`), te2 = f2[o2(295)](() => R2);
    if (n2.icon) {
      let e2 = f2.append(`g`);
      e2.html(`<g>` + (yield v(n2.icon, { height: u2, width: u2, fallbackPrefix: `` })) + o2(457));
      let t3 = e2[o2(513)]().getBBox(), r3 = t3[o2(481)], i3 = t3.height, a2 = t3.x, s3 = t3.y;
      e2[o2(452)](`transform`, `translate(` + (-r3 / 2 - a2) + `,` + (g2 ? p2.height / 2 + j2 / 2 - i3 / 2 - s3 : -p2.height / 2 - j2 / 2 - i3 / 2 - s3) + `)`), e2.attr(`style`, `color: ` + (w2.get(`stroke`) ?? b2) + `;`);
    }
    return h2.attr(`transform`, `translate(` + (-p2.width / 2 - (p2.x - (p2[o2(492)] ?? 0))) + `,` + (g2 ? -L2 / 2 : L2 / 2 - p2.height) + `)`), ee2.attr(`transform`, `translate(0,` + (g2 ? p2[o2(353)] / 2 + j2 / 2 : -p2.height / 2 - j2 / 2) + `)`), A(n2, te2), n2.intersect = function(e2) {
      let t3 = o2;
      if (a.info(t3(380), n2, e2), !n2.label) return q[t3(384)](n2, e2);
      let r3 = n2.x ?? 0, i3 = n2.y ?? 0, s3 = n2.height ?? 0, c3 = [];
      return c3 = g2 ? [{ x: r3 - p2.width / 2, y: i3 - s3 / 2 }, { x: r3 + p2.width / 2, y: i3 - s3 / 2 }, { x: r3 + p2.width / 2, y: i3 - s3 / 2 + p2[t3(353)] + j2 }, { x: r3 + y2 / 2, y: i3 - s3 / 2 + p2.height + j2 }, { x: r3 + y2 / 2, y: i3 + s3 / 2 }, { x: r3 - y2 / 2, y: i3 + s3 / 2 }, { x: r3 - y2 / 2, y: i3 - s3 / 2 + p2.height + j2 }, { x: r3 - p2.width / 2, y: i3 - s3 / 2 + p2.height + j2 }] : [{ x: r3 - y2 / 2, y: i3 - s3 / 2 }, { x: r3 + y2 / 2, y: i3 - s3 / 2 }, { x: r3 + y2 / 2, y: i3 - s3 / 2 + _2 }, { x: r3 + p2.width / 2, y: i3 - s3 / 2 + _2 }, { x: r3 + p2.width / 2 / 2, y: i3 + s3 / 2 }, { x: r3 - p2.width / 2, y: i3 + s3 / 2 }, { x: r3 - p2[t3(481)] / 2, y: i3 - s3 / 2 + _2 }, { x: r3 - y2 / 2, y: i3 - s3 / 2 + _2 }], q.polygon(n2, c3, e2);
    }, f2;
  }), ft.apply(this, arguments);
}
o(dt, `iconRounded`);
function pt(e2, t2, n2) {
  return mt[D(416)](this, arguments);
}
function mt() {
  let t2 = D;
  return mt = r(function* (t3, n2, { config: { themeVariables: r2, flowchart: i2 } }) {
    let o2 = I, { labelStyles: s2 } = T(n2);
    n2.labelStyle = s2;
    let c2 = n2.assetHeight ?? 48, l2 = n2.assetWidth ?? 48, u2 = Math.max(c2, l2), d2 = i2 == null ? void 0 : i2.wrappingWidth;
    n2.width = Math.max(u2, d2 ?? 0);
    let { shapeSvg: f2, bbox: p2, halfPadding: m2, label: h2 } = yield O(t3, n2, o2(330)), g2 = n2.pos === `t`, _2 = u2 + m2 * 2, y2 = u2 + m2 * 2, { nodeBorder: b2, mainBkg: x2 } = r2, { stylesMap: w2 } = C(n2), D2 = -y2 / 2, k2 = -_2 / 2, j2 = n2.label ? 8 : 0, M2 = E.svg(f2), N2 = S(n2, {});
    n2.look !== `handDrawn` && (N2[o2(285)] = 0, N2[o2(493)] = `solid`), N2.stroke = w2[o2(303)](`fill`) ?? x2;
    let P2 = M2.path(z(D2, k2, y2, _2, 0.1), N2), F2 = Math.max(y2, p2.width), L2 = _2 + p2.height + j2, R2 = M2[o2(336)](-F2 / 2, -L2 / 2, F2, L2, e(e({}, N2), {}, { fill: `transparent`, stroke: o2(455) })), ee2 = f2[o2(295)](() => P2, `:first-child`), te2 = f2.insert(() => R2);
    if (n2.icon) {
      let e2 = f2.append(`g`);
      e2.html(o2(327) + (yield v(n2[o2(435)], { height: u2, width: u2, fallbackPrefix: `` })) + `</g>`);
      let t4 = e2.node().getBBox(), r3 = t4.width, i3 = t4[o2(353)], a2 = t4.x, s3 = t4.y;
      e2.attr(o2(273), `translate(` + (-r3 / 2 - a2) + `,` + (g2 ? p2.height / 2 + j2 / 2 - i3 / 2 - s3 : -p2.height / 2 - j2 / 2 - i3 / 2 - s3) + `)`), e2.attr(`style`, `color: ` + (w2[o2(303)](`stroke`) ?? b2) + `;`);
    }
    return h2.attr(`transform`, `translate(` + (-p2.width / 2 - (p2.x - (p2.left ?? 0))) + `,` + (g2 ? -L2 / 2 : L2 / 2 - p2.height) + `)`), ee2.attr(`transform`, `translate(0,` + (g2 ? p2[o2(353)] / 2 + j2 / 2 : -p2.height / 2 - j2 / 2) + `)`), A(n2, te2), n2.intersect = function(e2) {
      let t4 = o2;
      if (a.info(t4(380), n2, e2), !n2.label) return q.rect(n2, e2);
      let r3 = n2.x ?? 0, i3 = n2.y ?? 0, s3 = n2[t4(353)] ?? 0, c3 = [];
      return c3 = g2 ? [{ x: r3 - p2.width / 2, y: i3 - s3 / 2 }, { x: r3 + p2.width / 2, y: i3 - s3 / 2 }, { x: r3 + p2.width / 2, y: i3 - s3 / 2 + p2.height + j2 }, { x: r3 + y2 / 2, y: i3 - s3 / 2 + p2.height + j2 }, { x: r3 + y2 / 2, y: i3 + s3 / 2 }, { x: r3 - y2 / 2, y: i3 + s3 / 2 }, { x: r3 - y2 / 2, y: i3 - s3 / 2 + p2.height + j2 }, { x: r3 - p2.width / 2, y: i3 - s3 / 2 + p2.height + j2 }] : [{ x: r3 - y2 / 2, y: i3 - s3 / 2 }, { x: r3 + y2 / 2, y: i3 - s3 / 2 }, { x: r3 + y2 / 2, y: i3 - s3 / 2 + _2 }, { x: r3 + p2.width / 2, y: i3 - s3 / 2 + _2 }, { x: r3 + p2.width / 2 / 2, y: i3 + s3 / 2 }, { x: r3 - p2.width / 2, y: i3 + s3 / 2 }, { x: r3 - p2.width / 2, y: i3 - s3 / 2 + _2 }, { x: r3 - y2 / 2, y: i3 - s3 / 2 + _2 }], q.polygon(n2, c3, e2);
    }, f2;
  }), mt[t2(416)](this, arguments);
}
o(pt, `iconSquare`);
function ht(e2, t2, n2) {
  return gt.apply(this, arguments);
}
function gt() {
  return gt = r(function* (t2, n2, { config: { flowchart: r2 } }) {
    let i2 = I, o2 = new Image();
    o2.src = (n2 == null ? void 0 : n2[i2(448)]) ?? ``, yield o2.decode();
    let s2 = Number(o2.naturalWidth.toString().replace(`px`, ``)), c2 = Number(o2.naturalHeight.toString()[i2(436)](`px`, ``));
    n2.imageAspectRatio = s2 / c2;
    let { labelStyles: l2 } = T(n2);
    n2.labelStyle = l2;
    let u2 = r2 == null ? void 0 : r2.wrappingWidth;
    n2.defaultWidth = r2 == null ? void 0 : r2.wrappingWidth;
    let d2 = Math[i2(385)](n2[i2(312)] ? u2 ?? 0 : 0, (n2 == null ? void 0 : n2.assetWidth) ?? s2), f2 = n2.constraint === `on` && n2 != null && n2[i2(301)] ? n2.assetHeight * n2.imageAspectRatio : d2, p2 = n2.constraint === `on` ? f2 / n2.imageAspectRatio : (n2 == null ? void 0 : n2.assetHeight) ?? c2;
    n2.width = Math.max(f2, u2 ?? 0);
    let { shapeSvg: m2, bbox: h2, label: g2 } = yield O(t2, n2, `image-shape default`), _2 = n2.pos === `t`, v2 = -f2 / 2, y2 = -p2 / 2, b2 = n2.label ? 8 : 0, x2 = E.svg(m2), C2 = S(n2, {});
    n2[i2(349)] !== i2(401) && (C2.roughness = 0, C2.fillStyle = i2(317));
    let w2 = x2.rectangle(v2, y2, f2, p2, C2), D2 = Math.max(f2, h2.width), k2 = p2 + h2.height + b2, j2 = x2.rectangle(-D2 / 2, -k2 / 2, D2, k2, e(e({}, C2), {}, { fill: `none`, stroke: `none` })), M2 = m2.insert(() => w2, `:first-child`), N2 = m2.insert(() => j2);
    if (n2.img) {
      let e2 = m2[i2(305)](`image`);
      e2.attr(`href`, n2[i2(448)]), e2.attr(`width`, f2), e2.attr(`height`, p2), e2.attr(`preserveAspectRatio`, `none`), e2[i2(452)](`transform`, `translate(` + -f2 / 2 + `,` + (_2 ? k2 / 2 - p2 : -k2 / 2) + `)`);
    }
    return g2.attr(i2(273), `translate(` + (-h2.width / 2 - (h2.x - (h2[i2(492)] ?? 0))) + `,` + (_2 ? -p2 / 2 - h2.height / 2 - b2 / 2 : p2 / 2 - h2[i2(353)] / 2 + b2 / 2) + `)`), M2[i2(452)](i2(273), i2(276) + (_2 ? h2.height / 2 + b2 / 2 : -h2.height / 2 - b2 / 2) + `)`), A(n2, N2), n2.intersect = function(e2) {
      let t3 = i2;
      if (a[t3(383)](`iconSquare intersect`, n2, e2), !n2.label) return q.rect(n2, e2);
      let r3 = n2.x ?? 0, o3 = n2.y ?? 0, s3 = n2.height ?? 0, c3 = [];
      return c3 = _2 ? [{ x: r3 - h2[t3(481)] / 2, y: o3 - s3 / 2 }, { x: r3 + h2.width / 2, y: o3 - s3 / 2 }, { x: r3 + h2[t3(481)] / 2, y: o3 - s3 / 2 + h2.height + b2 }, { x: r3 + f2 / 2, y: o3 - s3 / 2 + h2.height + b2 }, { x: r3 + f2 / 2, y: o3 + s3 / 2 }, { x: r3 - f2 / 2, y: o3 + s3 / 2 }, { x: r3 - f2 / 2, y: o3 - s3 / 2 + h2.height + b2 }, { x: r3 - h2.width / 2, y: o3 - s3 / 2 + h2[t3(353)] + b2 }] : [{ x: r3 - f2 / 2, y: o3 - s3 / 2 }, { x: r3 + f2 / 2, y: o3 - s3 / 2 }, { x: r3 + f2 / 2, y: o3 - s3 / 2 + p2 }, { x: r3 + h2.width / 2, y: o3 - s3 / 2 + p2 }, { x: r3 + h2.width / 2 / 2, y: o3 + s3 / 2 }, { x: r3 - h2.width / 2, y: o3 + s3 / 2 }, { x: r3 - h2.width / 2, y: o3 - s3 / 2 + p2 }, { x: r3 - f2 / 2, y: o3 - s3 / 2 + p2 }], q.polygon(n2, c3, e2);
    }, m2;
  }), gt.apply(this, arguments);
}
o(ht, `imageSquare`);
function _t(e2, t2) {
  return vt.apply(this, arguments);
}
function vt() {
  return vt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2.padding ?? 0, o2 = a2, s2 = t2.look === `neo` ? a2 * 2 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e2, t2, j(t2)), u2 = Math.max(l2.width + (s2 ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), d2 = Math.max(l2[n2(353)] + (o2 ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), f2 = [{ x: 0, y: 0 }, { x: u2, y: 0 }, { x: u2 + 3 * d2 / 6, y: -d2 }, { x: -3 * d2 / 6, y: -d2 }], p2, { cssStyles: m2 } = t2;
    if (t2.look === n2(401)) {
      let e3 = E.svg(c2), r3 = S(t2, {}), i3 = M(f2), a3 = e3.path(i3, r3);
      p2 = c2.insert(() => a3, n2(520)).attr(`transform`, `translate(` + -u2 / 2 + `, ` + d2 / 2 + `)`), m2 && p2.attr(`style`, m2);
    } else p2 = J(c2, u2, d2, f2);
    return i2 && p2[n2(452)](`style`, i2), t2.width = u2, t2.height = d2, A(t2, p2), t2.intersect = function(e3) {
      return q.polygon(t2, f2, e3);
    }, c2;
  }), vt.apply(this, arguments);
}
o(_t, `inv_trapezoid`);
function yt(e2, t2) {
  return bt.apply(this, arguments);
}
function bt() {
  return bt = r(function* (e2, t2) {
    let n2 = I, { shapeSvg: r2, bbox: i2, label: a2 } = yield O(e2, t2, `label`), o2 = r2.insert(`rect`, `:first-child`);
    return o2.attr(`width`, 0.1)[n2(452)](n2(353), 0.1), r2.attr(`class`, `label edgeLabel`), a2[n2(452)](`transform`, n2(409) + (-(i2.width / 2) - (i2.x - (i2.left ?? 0))) + `, ` + (-(i2.height / 2) - (i2.y - (i2.top ?? 0))) + `)`), A(t2, o2), t2.intersect = function(e3) {
      return q[n2(384)](t2, e3);
    }, r2;
  }), bt.apply(this, arguments);
}
o(yt, `labelRect`);
function xt(e2, t2) {
  return St.apply(this, arguments);
}
function St() {
  let e2 = D;
  return St = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = a2, s2 = t2.look === `neo` ? a2 * 2 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e3, t2, j(t2)), u2 = ((t2 == null ? void 0 : t2.height) ?? l2[n2(353)]) + o2, d2 = ((t2 == null ? void 0 : t2.width) ?? l2.width) + s2, f2 = [{ x: 0, y: 0 }, { x: d2 + 3 * u2 / 6, y: 0 }, { x: d2, y: -u2 }, { x: -(3 * u2) / 6, y: -u2 }], p2, { cssStyles: m2 } = t2;
    if (t2.look === `handDrawn`) {
      let e4 = E[n2(428)](c2), r3 = S(t2, {}), i3 = M(f2), a3 = e4.path(i3, r3);
      p2 = c2.insert(() => a3, `:first-child`).attr(n2(273), `translate(` + -d2 / 2 + `, ` + u2 / 2 + `)`), m2 && p2.attr(`style`, m2);
    } else p2 = J(c2, d2, u2, f2);
    return i2 && p2.attr(`style`, i2), t2.width = d2, t2.height = u2, A(t2, p2), t2[n2(351)] = function(e4) {
      return q.polygon(t2, f2, e4);
    }, c2;
  }), St[e2(416)](this, arguments);
}
o(xt, `lean_left`);
function Ct(e2, t2) {
  return wt[D(416)](this, arguments);
}
function wt() {
  return wt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = a2, s2 = t2.look === `neo` ? a2 * 2 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e2, t2, j(t2)), u2 = ((t2 == null ? void 0 : t2.height) ?? l2.height) + o2, d2 = ((t2 == null ? void 0 : t2.width) ?? l2.width) + s2, f2 = [{ x: -3 * u2 / 6, y: 0 }, { x: d2, y: 0 }, { x: d2 + 3 * u2 / 6, y: -u2 }, { x: 0, y: -u2 }], p2, { cssStyles: m2 } = t2;
    if (t2.look === `handDrawn`) {
      let e3 = E.svg(c2), r3 = S(t2, {}), i3 = M(f2), a3 = e3.path(i3, r3);
      p2 = c2[n2(295)](() => a3, `:first-child`).attr(`transform`, n2(409) + -d2 / 2 + `, ` + u2 / 2 + `)`), m2 && p2.attr(n2(396), m2);
    } else p2 = J(c2, d2, u2, f2);
    return i2 && p2.attr(`style`, i2), t2.width = d2, t2.height = u2, A(t2, p2), t2[n2(351)] = function(e3) {
      return q.polygon(t2, f2, e3);
    }, c2;
  }), wt.apply(this, arguments);
}
o(Ct, `lean_right`);
function Tt(e2, t2) {
  let n2 = D, { labelStyles: r2, nodeStyles: i2 } = T(t2);
  t2.label = ``, t2.labelStyle = r2;
  let o2 = e2[n2(295)](`g`).attr(`class`, j(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: s2 } = t2, c2 = Math.max(35, (t2 == null ? void 0 : t2.width) ?? 0), l2 = Math.max(35, (t2 == null ? void 0 : t2.height) ?? 0), u2 = [{ x: c2, y: 0 }, { x: 0, y: l2 + 7 / 2 }, { x: c2 - 14, y: l2 + 7 / 2 }, { x: 0, y: 2 * l2 }, { x: c2, y: l2 - 7 / 2 }, { x: 14, y: l2 - 7 / 2 }], d2 = E.svg(o2), f2 = S(t2, {});
  t2.look !== `handDrawn` && (f2.roughness = 0, f2.fillStyle = n2(317));
  let p2 = M(u2), m2 = d2[n2(512)](p2, f2), h2 = o2.insert(() => m2, `:first-child`);
  return h2[n2(452)](n2(522), n2(389)), s2 && t2.look !== `handDrawn` && h2.selectAll(`path`).attr(`style`, s2), i2 && t2.look !== n2(401) && h2[n2(517)](`path`).attr(`style`, i2), h2[n2(452)](`transform`, n2(466) + c2 / 2 + `,` + -l2 + `)`), A(t2, h2), t2[n2(351)] = function(e3) {
    let r3 = n2;
    return a.info(`lightningBolt intersect`, t2, e3), q[r3(279)](t2, u2, e3);
  }, o2;
}
o(Tt, `lightningBolt`);
var Et = o((e2, t2, n2, r2, i2, a2, o2) => [`M` + e2 + `,` + (t2 + a2), `a` + i2 + `,` + a2 + D(314) + n2 + `,0`, `a` + i2 + `,` + a2 + ` 0,0,0 ` + -n2 + `,0`, `l0,` + r2, `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`, `l0,` + -r2, `M` + e2 + `,` + (t2 + a2 + o2), `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`].join(` `), `createCylinderPathD`), Dt = o((e2, t2, n2, r2, i2, a2, o2) => [`M` + e2 + `,` + (t2 + a2), `M` + (e2 + n2) + `,` + (t2 + a2), `a` + i2 + `,` + a2 + ` 0,0,0 ` + -n2 + `,0`, `l0,` + r2, `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`, `l0,` + -r2, `M` + e2 + `,` + (t2 + a2 + o2), `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`].join(` `), D(323)), Ot = o((e2, t2, n2, r2, i2, a2) => [`M` + (e2 - n2 / 2) + `,` + -r2 / 2, `a` + i2 + `,` + a2 + ` 0,0,0 ` + n2 + `,0`].join(` `), `createInnerCylinderPathD`), kt = 10, At = 10;
function jt(e2, t2) {
  return Mt.apply(this, arguments);
}
function Mt() {
  return Mt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = t2.look === `neo` ? 16 : a2, s2 = t2.look === n2(275) ? 24 : a2;
    if (t2[n2(481)] || t2[n2(353)]) {
      let e3 = t2.width ?? 0;
      t2.width = (t2.width ?? 0) - o2, t2.width < At && (t2.width = At);
      let n3 = e3 / 2 / (2.5 + e3 / 50);
      t2.height = (t2.height ?? 0) - s2 - n3 * 3, t2.height < kt && (t2.height = kt);
    }
    let { shapeSvg: c2, bbox: l2, label: u2 } = yield O(e2, t2, j(t2)), d2 = (t2 != null && t2[n2(481)] ? t2 == null ? void 0 : t2.width : l2.width) + o2 * 2, f2 = d2 / 2, p2 = f2 / (2.5 + d2 / 50), m2 = (t2 != null && t2.height ? t2 == null ? void 0 : t2.height : l2.height) + p2 + s2 * 2, h2 = m2 * 0.1, _2, { cssStyles: v2 } = t2;
    if (t2.look === `handDrawn`) {
      let e3 = E.svg(c2), r3 = Dt(0, 0, d2, m2, f2, p2, h2), i3 = Ot(0, p2, d2, m2, f2, p2), a3 = S(t2, {}), o3 = e3.path(r3, a3), s3 = e3.path(i3, a3);
      c2.insert(() => s3, `:first-child`)[n2(452)](n2(522), `line`), _2 = c2.insert(() => o3, `:first-child`), _2.attr(`class`, `basic label-container`), v2 && _2[n2(452)](`style`, v2);
    } else {
      let e3 = Et(0, 0, d2, m2, f2, p2, h2);
      _2 = c2.insert(`path`, `:first-child`).attr(`d`, e3).attr(`class`, n2(491)).attr(`style`, g(v2)).attr(`style`, i2);
    }
    return _2.attr(`label-offset-y`, p2), _2.attr(`transform`, `translate(` + -d2 / 2 + `, ` + -(m2 / 2 + p2) + `)`), A(t2, _2), u2.attr(n2(273), n2(409) + (-(l2.width / 2) - (l2.x - (l2.left ?? 0))) + `, ` + (-(l2[n2(353)] / 2) + p2 - (l2.y - (l2[n2(329)] ?? 0))) + `)`), t2.intersect = function(e3) {
      let r3 = n2, i3 = q.rect(t2, e3), a3 = i3.x - (t2.x ?? 0);
      if (f2 != 0 && (Math.abs(a3) < (t2.width ?? 0) / 2 || Math.abs(a3) == (t2.width ?? 0) / 2 && Math[r3(274)](i3.y - (t2.y ?? 0)) > (t2[r3(353)] ?? 0) / 2 - p2)) {
        let n3 = p2 * p2 * (1 - a3 * a3 / (f2 * f2));
        n3 > 0 && (n3 = Math.sqrt(n3)), n3 = p2 - n3, e3.y - (t2.y ?? 0) > 0 && (n3 = -n3), i3.y += n3;
      }
      return i3;
    }, c2;
  }), Mt.apply(this, arguments);
}
o(jt, `linedCylinder`);
function Nt(e2, t2) {
  return Pt.apply(this, arguments);
}
function Pt() {
  return Pt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2[n2(505)] ?? 0, o2 = t2.look === n2(275) ? 16 : a2, s2 = t2.look === `neo` ? 12 : a2;
    (t2.width || t2.height) && (t2.width = (t2.width ?? 0) * 10 / 11 - o2 * 2, t2.width < 10 && (t2.width = 10), t2[n2(353)] = ((t2 == null ? void 0 : t2.height) ?? 0) - s2 * 2, t2.height < 10 && (t2[n2(353)] = 10));
    let { shapeSvg: c2, bbox: l2, label: u2 } = yield O(e2, t2, j(t2)), d2 = (t2 != null && t2[n2(481)] ? t2 == null ? void 0 : t2[n2(481)] : l2.width) + (o2 ?? 0) * 2, f2 = (t2 != null && t2.height ? t2 == null ? void 0 : t2.height : l2.height) + (s2 ?? 0) * 2, p2 = t2.look === `neo` ? f2 / 4 : f2 / 8, m2 = f2 + p2, { cssStyles: h2 } = t2, g2 = E.svg(c2), _2 = S(t2, {});
    t2.look !== `handDrawn` && (_2.roughness = 0, _2[n2(493)] = `solid`);
    let v2 = [{ x: -d2 / 2 - d2 / 2 * 0.1, y: -m2 / 2 }, { x: -d2 / 2 - d2 / 2 * 0.1, y: m2 / 2 }, ...N(-d2 / 2 - d2 / 2 * 0.1, m2 / 2, d2 / 2 + d2 / 2 * 0.1, m2 / 2, p2, 0.8), { x: d2 / 2 + d2 / 2 * 0.1, y: -m2 / 2 }, { x: -d2 / 2 - d2 / 2 * 0.1, y: -m2 / 2 }, { x: -d2 / 2, y: -m2 / 2 }, { x: -d2 / 2, y: m2 / 2 * 1.1 }, { x: -d2 / 2, y: -m2 / 2 }], y2 = g2[n2(279)](v2.map((e3) => [e3.x, e3.y]), _2), b2 = c2.insert(() => y2, n2(520));
    return b2.attr(`class`, `basic label-container outer-path`), h2 && t2.look !== `handDrawn` && b2.selectAll(`path`)[n2(452)](n2(396), h2), i2 && t2.look !== `handDrawn` && b2[n2(517)](`path`).attr(`style`, i2), b2.attr(n2(273), n2(276) + -p2 / 2 + `)`), u2.attr(`transform`, `translate(` + (-d2 / 2 + (t2[n2(505)] ?? 0) + d2 / 2 * 0.1 / 2 - (l2.x - (l2.left ?? 0))) + `,` + (-f2 / 2 + (t2.padding ?? 0) - p2 / 2 - (l2.y - (l2[n2(329)] ?? 0))) + `)`), A(t2, b2), t2.intersect = function(e3) {
      return q[n2(279)](t2, v2, e3);
    }, c2;
  }), Pt.apply(this, arguments);
}
o(Nt, D(471));
function Ft(e2, t2) {
  return It.apply(this, arguments);
}
function It() {
  return It = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2[n2(505)] ?? 0, o2 = t2.look === `neo` ? 16 : a2, s2 = t2.look === `neo` ? 12 : a2, c2 = t2.look === `neo` ? 10 : 5;
    (t2[n2(481)] || t2.height) && (t2.width = Math[n2(385)](((t2 == null ? void 0 : t2.width) ?? 0) - o2 * 2 - 2 * c2, 10), t2.height = Math[n2(385)](((t2 == null ? void 0 : t2[n2(353)]) ?? 0) - s2 * 2 - 2 * c2, 10));
    let { shapeSvg: l2, bbox: u2, label: d2 } = yield O(e2, t2, j(t2)), f2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : u2.width) + o2 * 2 + 2 * c2, p2 = (t2 != null && t2[n2(353)] ? t2 == null ? void 0 : t2.height : u2[n2(353)]) + s2 * 2 + 2 * c2, m2 = f2 - 2 * c2, h2 = p2 - 2 * c2, g2 = -m2 / 2, _2 = -h2 / 2, { cssStyles: v2 } = t2, y2 = E.svg(l2), b2 = S(t2, {}), x2 = [{ x: g2 - c2, y: _2 + c2 }, { x: g2 - c2, y: _2 + h2 + c2 }, { x: g2 + m2 - c2, y: _2 + h2 + c2 }, { x: g2 + m2 - c2, y: _2 + h2 }, { x: g2 + m2, y: _2 + h2 }, { x: g2 + m2, y: _2 + h2 - c2 }, { x: g2 + m2 + c2, y: _2 + h2 - c2 }, { x: g2 + m2 + c2, y: _2 - c2 }, { x: g2 + c2, y: _2 - c2 }, { x: g2 + c2, y: _2 }, { x: g2, y: _2 }, { x: g2, y: _2 + c2 }], C2 = [{ x: g2, y: _2 + c2 }, { x: g2 + m2 - c2, y: _2 + c2 }, { x: g2 + m2 - c2, y: _2 + h2 }, { x: g2 + m2, y: _2 + h2 }, { x: g2 + m2, y: _2 }, { x: g2, y: _2 }];
    t2.look !== n2(401) && (b2.roughness = 0, b2.fillStyle = `solid`);
    let w2 = M(x2), D2 = y2[n2(512)](w2, b2), k2 = M(C2), N2 = y2[n2(512)](k2, b2);
    t2.look !== n2(401) && (D2 = F(D2), N2 = F(N2));
    let P2 = l2.insert(`g`, n2(520));
    return P2[n2(295)](() => D2), P2.insert(() => N2), P2.attr(`class`, `basic label-container outer-path`), v2 && t2.look !== `handDrawn` && P2[n2(517)](`path`).attr(n2(396), v2), i2 && t2.look !== `handDrawn` && P2.selectAll(`path`).attr(`style`, i2), d2.attr(`transform`, n2(409) + (-(u2[n2(481)] / 2) - c2 - (u2.x - (u2.left ?? 0))) + `, ` + (-(u2.height / 2) + c2 - (u2.y - (u2[n2(329)] ?? 0))) + `)`), A(t2, P2), t2[n2(351)] = function(e3) {
      return q[n2(279)](t2, x2, e3);
    }, l2;
  }), It.apply(this, arguments);
}
o(Ft, `multiRect`);
function Lt(e2, t2) {
  return Rt.apply(this, arguments);
}
function Rt() {
  return Rt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let { shapeSvg: a2, bbox: o2, label: s2 } = yield O(e2, t2, j(t2)), c2 = t2.padding ?? 0, l2 = t2.look === `neo` ? 16 : c2, u2 = t2.look === `neo` ? 12 : c2, d2 = true;
    (t2.width || t2[n2(353)]) && (d2 = false, t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - l2 * 2, t2.height = ((t2 == null ? void 0 : t2[n2(353)]) ?? 0) - u2 * 3);
    let f2 = Math.max(o2.width, (t2 == null ? void 0 : t2[n2(481)]) ?? 0) + l2 * 2, p2 = Math.max(o2.height, (t2 == null ? void 0 : t2[n2(353)]) ?? 0) + u2 * 3, m2 = t2[n2(349)] === `neo` ? p2 / 4 : p2 / 8, h2 = p2 + (d2 ? m2 / 2 : -m2 / 2), g2 = -f2 / 2, _2 = -h2 / 2, { cssStyles: v2 } = t2, y2 = N(g2 - 10, _2 + h2 + 10, g2 + f2 - 10, _2 + h2 + 10, m2, 0.8), b2 = y2 == null ? void 0 : y2[y2.length - 1], x2 = [{ x: g2 - 10, y: _2 + 10 }, { x: g2 - 10, y: _2 + h2 + 10 }, ...y2, { x: g2 + f2 - 10, y: b2.y - 10 }, { x: g2 + f2, y: b2.y - 10 }, { x: g2 + f2, y: b2.y - 20 }, { x: g2 + f2 + 10, y: b2.y - 20 }, { x: g2 + f2 + 10, y: _2 - 10 }, { x: g2 + 10, y: _2 - 10 }, { x: g2 + 10, y: _2 }, { x: g2, y: _2 }, { x: g2, y: _2 + 10 }], C2 = [{ x: g2, y: _2 + 10 }, { x: g2 + f2 - 10, y: _2 + 10 }, { x: g2 + f2 - 10, y: b2.y - 10 }, { x: g2 + f2, y: b2.y - 10 }, { x: g2 + f2, y: _2 }, { x: g2, y: _2 }], w2 = E.svg(a2), D2 = S(t2, {});
    t2.look !== `handDrawn` && (D2.roughness = 0, D2.fillStyle = `solid`);
    let k2 = M(x2), P2 = w2.path(k2, D2), F2 = M(C2), L2 = w2.path(F2, D2), R2 = a2.insert(() => P2, `:first-child`);
    return R2.insert(() => L2), R2.attr(`class`, `basic label-container outer-path`), v2 && t2.look !== `handDrawn` && R2.selectAll(`path`).attr(`style`, v2), i2 && t2.look !== `handDrawn` && R2.selectAll(`path`)[n2(452)](n2(396), i2), R2[n2(452)](`transform`, `translate(0,` + -m2 / 2 + `)`), s2.attr(`transform`, `translate(` + (-(o2.width / 2) - 10 - (o2.x - (o2.left ?? 0))) + `, ` + (-(o2.height / 2) + 10 - m2 / 2 - (o2.y - (o2.top ?? 0))) + `)`), A(t2, R2), t2.intersect = function(e3) {
      return q[n2(279)](t2, x2, e3);
    }, a2;
  }), Rt.apply(this, arguments);
}
o(Lt, D(315));
function zt(e2, t2, n2) {
  return Bt.apply(this, arguments);
}
function Bt() {
  let e2 = D;
  return Bt = r(function* (e3, t2, { config: { themeVariables: n2 } }) {
    let r2 = I, { labelStyles: i2, nodeStyles: a2 } = T(t2);
    t2.labelStyle = i2, t2.useHtmlLabels || s(m()) || (t2.centerLabel = true);
    let { shapeSvg: o2, bbox: c2, label: l2 } = yield O(e3, t2, j(t2)), u2 = Math.max(c2.width + (t2[r2(505)] ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), d2 = Math.max(c2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2[r2(353)]) ?? 0), f2 = -u2 / 2, p2 = -d2 / 2, { cssStyles: h2 } = t2, g2 = E.svg(o2), _2 = S(t2, { fill: n2.noteBkgColor, stroke: n2.noteBorderColor });
    t2[r2(349)] !== r2(401) && (_2.roughness = 0, _2.fillStyle = r2(317));
    let v2 = g2[r2(336)](f2, p2, u2, d2, _2), y2 = o2.insert(() => v2, `:first-child`);
    return y2[r2(452)](`class`, `basic label-container outer-path`), l2.attr(`class`, `label noteLabel`), h2 && t2.look !== r2(401) && y2.selectAll(`path`).attr(r2(396), h2), a2 && t2[r2(349)] !== r2(401) && y2.selectAll(`path`).attr(`style`, a2), l2.attr(`transform`, `translate(` + (-c2.width / 2 - (c2.x - (c2[r2(492)] ?? 0))) + `, ` + (-(c2.height / 2) - (c2.y - (c2.top ?? 0))) + `)`), A(t2, y2), t2.intersect = function(e4) {
      return q.rect(t2, e4);
    }, o2;
  }), Bt[e2(416)](this, arguments);
}
o(zt, `note`);
var Vt = o((e2, t2, n2) => [`M` + (e2 + n2 / 2) + `,` + t2, `L` + (e2 + n2) + `,` + (t2 - n2 / 2), `L` + (e2 + n2 / 2) + `,` + (t2 - n2), `L` + e2 + `,` + (t2 - n2 / 2), `Z`].join(` `), `createDecisionBoxPathD`);
function Ht(e2, t2) {
  return Ut.apply(this, arguments);
}
function Ut() {
  return Ut = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let { shapeSvg: a2, bbox: o2 } = yield O(e2, t2, j(t2)), s2 = o2[n2(481)] + (t2[n2(505)] ?? 0) + (o2.height + (t2.padding ?? 0)), c2 = 0.5, l2 = [{ x: s2 / 2, y: 0 }, { x: s2, y: -s2 / 2 }, { x: s2 / 2, y: -s2 }, { x: 0, y: -s2 / 2 }], u2, { cssStyles: d2 } = t2;
    if (t2.look === `handDrawn`) {
      let e3 = E.svg(a2), r3 = S(t2, {}), i3 = Vt(0, 0, s2), o3 = e3.path(i3, r3);
      u2 = a2[n2(295)](() => o3, `:first-child`).attr(n2(273), n2(409) + (-s2 / 2 + c2) + `, ` + s2 / 2 + `)`), d2 && u2[n2(452)](`style`, d2);
    } else u2 = J(a2, s2, s2, l2), u2.attr(`transform`, `translate(` + (-s2 / 2 + c2) + `, ` + s2 / 2 + `)`);
    return i2 && u2.attr(`style`, i2), A(t2, u2), t2[n2(494)] = function(e3, t3) {
      let n3 = e3.width, r3 = [{ x: n3 / 2, y: 0 }, { x: n3, y: -n3 / 2 }, { x: n3 / 2, y: -n3 }, { x: 0, y: -n3 / 2 }], i3 = q.polygon(e3, r3, t3);
      return { x: i3.x - 0.5, y: i3.y - 0.5 };
    }, t2.intersect = function(e3) {
      return this.calcIntersect(t2, e3);
    }, a2;
  }), Ut.apply(this, arguments);
}
o(Ht, `question`);
function Wt(e2, t2) {
  return Gt[D(416)](this, arguments);
}
function Gt() {
  return Gt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = t2.look === n2(275) ? 21 : a2 ?? 0, s2 = t2.look === `neo` ? 12 : a2 ?? 0, { shapeSvg: c2, bbox: l2, label: u2 } = yield O(e2, t2, j(t2)), d2 = ((t2 == null ? void 0 : t2.width) ?? l2.width) + (t2.look === `neo` ? o2 * 2 : o2), f2 = ((t2 == null ? void 0 : t2.height) ?? l2[n2(353)]) + (t2.look === `neo` ? s2 * 2 : s2), p2 = -d2 / 2, m2 = -f2 / 2, h2 = m2 / 2, g2 = [{ x: p2 + h2, y: m2 }, { x: p2, y: 0 }, { x: p2 + h2, y: -m2 }, { x: -p2, y: -m2 }, { x: -p2, y: m2 }], { cssStyles: _2 } = t2, v2 = E.svg(c2), y2 = S(t2, {});
    t2.look !== `handDrawn` && (y2.roughness = 0, y2.fillStyle = `solid`);
    let b2 = M(g2), x2 = v2[n2(512)](b2, y2), C2 = c2.insert(() => x2, `:first-child`);
    return C2.attr(n2(522), `basic label-container outer-path`), _2 && t2.look !== `handDrawn` && C2.selectAll(n2(512))[n2(452)](n2(396), _2), i2 && t2.look !== `handDrawn` && C2.selectAll(`path`)[n2(452)](`style`, i2), C2.attr(`transform`, n2(409) + -h2 / 2 + n2(445)), u2[n2(452)](`transform`, `translate(` + (-h2 / 2 - l2.width / 2 - (l2.x - (l2.left ?? 0))) + `, ` + (-(l2.height / 2) - (l2.y - (l2.top ?? 0))) + `)`), A(t2, C2), t2.intersect = function(e3) {
      return q.polygon(t2, g2, e3);
    }, c2;
  }), Gt.apply(this, arguments);
}
o(Wt, `rect_left_inv_arrow`);
function Kt(e2, t2) {
  return qt[D(416)](this, arguments);
}
function qt() {
  return qt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: o2 } = T(t2);
    t2.labelStyle = r2;
    let c2;
    c2 = t2[n2(281)] ? `node ` + t2.cssClasses : `node default`;
    let u2 = e2.insert(`g`)[n2(452)](`class`, c2).attr(`id`, t2[n2(356)] || t2.id), d2 = u2[n2(295)](`g`), f2 = u2.insert(`g`).attr(`class`, `label`)[n2(452)](`style`, o2), p2 = t2.description, m2 = t2.label, h2 = yield R(f2, m2, t2[n2(277)], true, true), g2 = { width: 0, height: 0 };
    if (s(l())) {
      let e3 = h2.children[0], t3 = i(h2);
      g2 = e3.getBoundingClientRect(), t3.attr(`width`, g2.width), t3.attr(`height`, g2.height);
    }
    a.info(n2(404), p2);
    let _2 = p2 || [], v2 = h2[n2(510)](), y2 = yield R(f2, Array[n2(341)](_2) ? _2.join(`<br/>`) : _2, t2.labelStyle, true, true), b2 = y2.children[0], x2 = i(y2);
    g2 = b2.getBoundingClientRect(), x2.attr(`width`, g2[n2(481)]), x2.attr(`height`, g2.height);
    let C2 = (t2.padding || 0) / 2;
    i(y2)[n2(452)](`transform`, `translate( ` + (g2.width > v2.width ? 0 : (v2.width - g2.width) / 2) + `, ` + (v2.height + C2 + 5) + `)`), i(h2).attr(`transform`, `translate( ` + (g2.width < v2.width ? 0 : -(v2.width - g2.width) / 2) + `, 0)`), g2 = f2.node().getBBox(), f2.attr(`transform`, `translate(` + -g2.width / 2 + `, ` + (-g2[n2(353)] / 2 - C2 + 3) + `)`);
    let w2 = g2.width + (t2.padding || 0), D2 = g2[n2(353)] + (t2.padding || 0), O2 = -g2.width / 2 - C2, k2 = -g2.height / 2 - C2, j2, M2;
    if (t2.look === `handDrawn`) {
      let e3 = E.svg(u2), r3 = S(t2, {}), i2 = e3.path(z(O2, k2, w2, D2, t2.rx || 0), r3), o3 = e3.line(-g2.width / 2 - C2, -g2.height / 2 - C2 + v2[n2(353)] + C2, g2.width / 2 + C2, -g2.height / 2 - C2 + v2.height + C2, r3);
      M2 = u2.insert(() => (a[n2(350)](n2(511), i2), o3), `:first-child`), j2 = u2.insert(() => (a.debug(`Rough node insert CXC`, i2), i2), n2(520));
    } else j2 = d2.insert(n2(384), n2(520)), M2 = d2.insert(`line`), j2.attr(`class`, `outer title-state`)[n2(452)](`style`, o2)[n2(452)](`x`, -g2.width / 2 - C2).attr(`y`, -g2.height / 2 - C2).attr(`width`, g2.width + (t2.padding || 0)).attr(n2(353), g2.height + (t2.padding || 0)), M2[n2(452)](`class`, n2(519)).attr(`x1`, -g2.width / 2 - C2).attr(`x2`, g2.width / 2 + C2).attr(`y1`, -g2.height / 2 - C2 + v2.height + C2).attr(`y2`, -g2.height / 2 - C2 + v2.height + C2);
    return A(t2, j2), t2.intersect = function(e3) {
      return q.rect(t2, e3);
    }, u2;
  }), qt.apply(this, arguments);
}
o(Kt, `rectWithTitle`);
function Jt(e2, t2, n2) {
  return Yt.apply(this, arguments);
}
function Yt() {
  return Yt = r(function* (e2, t2, { config: { themeVariables: n2 } }) {
    let r2 = I, i2 = (n2 == null ? void 0 : n2[r2(316)]) ?? 5;
    return Be(e2, t2, { rx: i2, ry: i2, classes: ``, labelPaddingX: ((t2 == null ? void 0 : t2.padding) ?? 0) * 1, labelPaddingY: ((t2 == null ? void 0 : t2[r2(505)]) ?? 0) * 1 });
  }), Yt.apply(this, arguments);
}
o(Jt, `roundedRect`);
var Xt = 8;
function Zt(e2, t2) {
  return Qt[D(416)](this, arguments);
}
function Qt() {
  return Qt = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2[n2(349)] === `neo` ? 16 : t2.padding ?? 0, o2 = t2.look === `neo` ? 12 : t2[n2(505)] ?? 0, { shapeSvg: s2, bbox: c2, label: l2 } = yield O(e2, t2, j(t2)), u2 = ((t2 == null ? void 0 : t2.width) ?? c2[n2(481)]) + a2 * 2 + (t2.look === `neo` ? Xt : Xt * 2), d2 = ((t2 == null ? void 0 : t2.height) ?? c2.height) + o2 * 2, f2 = u2 - Xt, p2 = d2, m2 = Xt - u2 / 2, h2 = -d2 / 2, { cssStyles: _2 } = t2, v2 = E.svg(s2), y2 = S(t2, {});
    t2.look !== n2(401) && (y2.roughness = 0, y2.fillStyle = `solid`);
    let b2 = [{ x: m2, y: h2 }, { x: m2 + f2, y: h2 }, { x: m2 + f2, y: h2 + p2 }, { x: m2 - Xt, y: h2 + p2 }, { x: m2 - Xt, y: h2 }, { x: m2, y: h2 }, { x: m2, y: h2 + p2 }], x2 = v2.polygon(b2.map((e3) => [e3.x, e3.y]), y2), C2 = s2[n2(295)](() => x2, `:first-child`);
    return C2.attr(`class`, `basic label-container outer-path`).attr(`style`, g(_2)), i2 && t2.look !== `handDrawn` && C2.selectAll(`path`).attr(`style`, i2), _2 && t2.look !== n2(401) && C2.selectAll(`path`)[n2(452)](n2(396), i2), l2.attr(`transform`, n2(409) + (Xt / 2 - c2.width / 2 - (c2.x - (c2.left ?? 0))) + `, ` + (-(c2.height / 2) - (c2.y - (c2.top ?? 0))) + `)`), A(t2, C2), t2.intersect = function(e3) {
      return q.rect(t2, e3);
    }, s2;
  }), Qt.apply(this, arguments);
}
o(Zt, D(300));
function $t(e2, t2) {
  return en.apply(this, arguments);
}
function en() {
  let e2 = D;
  return en = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2.padding ?? 0, o2 = t2[n2(349)] === `neo` ? 16 : a2, s2 = t2.look === `neo` ? 12 : a2;
    (t2.width || t2[n2(353)]) && (t2[n2(481)] = Math.max(((t2 == null ? void 0 : t2.width) ?? 0) - o2 * 2, 10), t2.height = Math.max(((t2 == null ? void 0 : t2.height) ?? 0) / 1.5 - s2 * 2, 10));
    let { shapeSvg: c2, bbox: l2, label: u2 } = yield O(e3, t2, j(t2)), d2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : l2.width) + o2 * 2, f2 = ((t2 != null && t2[n2(353)] ? t2 == null ? void 0 : t2.height : l2[n2(353)]) + s2 * 2) * 1.5, p2 = d2, m2 = f2 / 1.5, h2 = -p2 / 2, g2 = -m2 / 2, { cssStyles: _2 } = t2, v2 = E.svg(c2), y2 = S(t2, {});
    t2.look !== `handDrawn` && (y2.roughness = 0, y2.fillStyle = n2(317));
    let b2 = [{ x: h2, y: g2 }, { x: h2, y: g2 + m2 }, { x: h2 + p2, y: g2 + m2 }, { x: h2 + p2, y: g2 - m2 / 2 }], x2 = M(b2), C2 = v2.path(x2, y2), w2 = c2.insert(() => C2, `:first-child`);
    return w2.attr(`class`, n2(311)), _2 && t2.look !== `handDrawn` && w2.selectChildren(`path`).attr(`style`, _2), i2 && t2.look !== `handDrawn` && w2.selectChildren(`path`).attr(`style`, i2), w2.attr(`transform`, `translate(0, ` + m2 / 4 + `)`), u2.attr(`transform`, `translate(` + (-p2 / 2 + (t2[n2(505)] ?? 0) - (l2.x - (l2.left ?? 0))) + `, ` + (-m2 / 4 + (t2.padding ?? 0) - (l2.y - (l2.top ?? 0))) + `)`), A(t2, w2), t2.intersect = function(e4) {
      return q.polygon(t2, b2, e4);
    }, c2;
  }), en[e2(416)](this, arguments);
}
o($t, `slopedRect`);
function tn(e2, t2) {
  return nn.apply(this, arguments);
}
function nn() {
  let e2 = D;
  return nn = r(function* (e3, t2) {
    let n2 = I, r2 = t2[n2(505)] ?? 0, i2 = t2[n2(349)] === `neo` ? 16 : r2 * 2, a2 = t2[n2(349)] === `neo` ? 12 : r2;
    return Be(e3, t2, { rx: 0, ry: 0, classes: ``, labelPaddingX: t2.labelPaddingX ?? i2, labelPaddingY: a2 });
  }), nn[e2(416)](this, arguments);
}
o(tn, `squareRect`);
function rn(e2, t2) {
  return an.apply(this, arguments);
}
function an() {
  return an = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2[n2(505)] ?? 0, o2 = t2[n2(349)] === `neo` ? 20 : a2, s2 = t2[n2(349)] === `neo` ? 12 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e2, t2, j(t2)), u2 = l2.height + (t2.look === n2(275) ? s2 * 2 : s2), d2 = l2[n2(481)] + u2 / 4 + (t2.look === `neo` ? o2 * 2 : o2), f2 = u2 / 2, { cssStyles: p2 } = t2, m2 = E.svg(c2), h2 = S(t2, {});
    t2.look !== `handDrawn` && (h2[n2(285)] = 0, h2.fillStyle = `solid`);
    let g2 = [{ x: -d2 / 2 + f2, y: -u2 / 2 }, { x: d2 / 2 - f2, y: -u2 / 2 }, ...P(-d2 / 2 + f2, 0, f2, 50, 90, 270), { x: d2 / 2 - f2, y: u2 / 2 }, ...P(d2 / 2 - f2, 0, f2, 50, 270, 450)], _2 = M(g2), v2 = m2.path(_2, h2), y2 = c2[n2(295)](() => v2, n2(520));
    return y2[n2(452)](`class`, `basic label-container outer-path`), p2 && t2.look !== n2(401) && y2.selectChildren(`path`).attr(n2(396), p2), i2 && t2.look !== `handDrawn` && y2[n2(386)](n2(512)).attr(n2(396), i2), A(t2, y2), t2[n2(351)] = function(e3) {
      return q.polygon(t2, g2, e3);
    }, c2;
  }), an.apply(this, arguments);
}
o(rn, `stadium`);
function on(e2, t2) {
  return sn[D(416)](this, arguments);
}
function sn() {
  return sn = r(function* (e2, t2) {
    return Be(e2, t2, { rx: t2.look === `neo` ? 3 : 5, ry: t2.look === `neo` ? 3 : 5, classes: `flowchart-node` });
  }), sn.apply(this, arguments);
}
o(on, D(465));
function cn(t2, n2, { config: { themeVariables: r2 } }) {
  let i2 = D, { labelStyles: a2, nodeStyles: o2 } = T(n2);
  n2[i2(277)] = a2;
  let { cssStyles: s2 } = n2, { lineColor: c2, stateBorder: l2, nodeBorder: u2, nodeShadow: d2 } = r2;
  (n2[i2(481)] || n2.height) && ((n2.width ?? 0) < 14 && (n2.width = 14), (n2.height ?? 0) < 14 && (n2.height = 14)), n2.width || (n2.width = 14), n2[i2(353)] || (n2.height = 14);
  let f2 = t2[i2(295)](`g`).attr(`class`, `node default`).attr(`id`, n2[i2(356)] ?? n2.id), p2 = E.svg(f2), m2 = S(n2, {});
  n2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = i2(317));
  let h2 = p2.circle(0, 0, n2.width, e(e({}, m2), {}, { stroke: c2, strokeWidth: 2 })), g2 = l2 ?? u2, _2 = (n2.width ?? 0) * 5 / 14, v2 = p2.circle(0, 0, _2, e(e({}, m2), {}, { fill: g2, stroke: g2, strokeWidth: 2, fillStyle: `solid` })), y2 = f2[i2(295)](() => h2, i2(520));
  if (y2.insert(() => v2), n2.look !== `handDrawn` && y2[i2(452)](`class`, `outer-path`), s2 && y2.selectAll(`path`).attr(`style`, s2), o2 && y2.selectAll(`path`).attr(`style`, o2), n2.width < 25 && d2 && n2.look !== `handDrawn`) {
    var b2;
    let e2 = ((b2 = t2.node()) == null || (b2 = b2.ownerSVGElement) == null ? void 0 : b2.id) ?? ``, n3 = e2 ? e2 + `-drop-shadow-small` : `drop-shadow-small`;
    y2.attr(`style`, i2(369) + n3 + `)`);
  }
  return A(n2, y2), n2[i2(351)] = function(e2) {
    return q.circle(n2, (n2.width ?? 0) / 2, e2);
  }, f2;
}
o(cn, `stateEnd`);
function ln(e2, t2, { config: { themeVariables: n2 } }) {
  let r2 = D, { lineColor: i2, nodeShadow: a2 } = n2;
  (t2.width || t2[r2(353)]) && ((t2.width ?? 0) < 14 && (t2.width = 14), (t2.height ?? 0) < 14 && (t2.height = 14)), t2.width || (t2.width = 14), t2.height || (t2[r2(353)] = 14);
  let o2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), s2;
  if (t2[r2(349)] === `handDrawn`) {
    let e3 = E.svg(o2).circle(0, 0, t2.width, w(i2));
    s2 = o2.insert(() => e3), s2.attr(`class`, `state-start`).attr(`r`, (t2.width ?? 7) / 2).attr(`width`, t2[r2(481)] ?? 14).attr(r2(353), t2.height ?? 14);
  } else s2 = o2.insert(`circle`, `:first-child`), s2.attr(`class`, r2(363)).attr(`r`, (t2.width ?? 7) / 2).attr(r2(481), t2.width ?? 14)[r2(452)](`height`, t2[r2(353)] ?? 14);
  if (t2.width < 25 && a2 && t2.look !== `handDrawn`) {
    var c2;
    let t3 = ((c2 = e2.node()) == null || (c2 = c2[r2(320)]) == null ? void 0 : c2.id) ?? ``, n3 = t3 ? t3 + r2(373) : r2(453);
    s2.attr(`style`, `filter:url(#` + n3 + `)`);
  }
  return A(t2, s2), t2[r2(351)] = function(e3) {
    return q.circle(t2, (t2.width ?? 7) / 2, e3);
  }, o2;
}
o(ln, `stateStart`);
var un = 8;
function dn(e2, t2) {
  return fn.apply(this, arguments);
}
function fn() {
  let e2 = D;
  return fn = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = (t2 == null ? void 0 : t2[n2(505)]) ?? 8, o2 = t2.look === `neo` ? 28 : a2, s2 = t2.look === n2(275) ? 12 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e3, t2, j(t2)), u2 = ((t2 == null ? void 0 : t2.width) ?? l2.width) + 2 * un + o2, d2 = ((t2 == null ? void 0 : t2.height) ?? l2.height) + s2, f2 = u2 - 2 * un, p2 = d2, m2 = -u2 / 2, h2 = -d2 / 2, _2 = [{ x: 0, y: 0 }, { x: f2, y: 0 }, { x: f2, y: -p2 }, { x: 0, y: -p2 }, { x: 0, y: 0 }, { x: -8, y: 0 }, { x: f2 + 8, y: 0 }, { x: f2 + 8, y: -p2 }, { x: -8, y: -p2 }, { x: -8, y: 0 }];
    if (t2.look === `handDrawn`) {
      let e4 = E.svg(c2), r3 = S(t2, {}), i3 = e4.rectangle(m2, h2, f2 + 16, p2, r3), a3 = e4.line(m2 + un, h2, m2 + un, h2 + p2, r3), o3 = e4.line(m2 + un + f2, h2, m2 + un + f2, h2 + p2, r3);
      c2.insert(() => a3, `:first-child`), c2.insert(() => o3, `:first-child`);
      let s3 = c2.insert(() => i3, `:first-child`), { cssStyles: l3 } = t2;
      s3[n2(452)](`class`, n2(347)).attr(`style`, g(l3)), A(t2, s3);
    } else {
      let e4 = J(c2, f2, p2, _2);
      i2 && e4.attr(n2(396), i2), A(t2, e4);
    }
    return t2.intersect = function(e4) {
      return q.polygon(t2, _2, e4);
    }, c2;
  }), fn[e2(416)](this, arguments);
}
o(dn, `subroutine`);
var pn = 0.2;
function mn(e2, t2) {
  return hn.apply(this, arguments);
}
function hn() {
  return hn = r(function* (t2, n2) {
    let r2 = I, { labelStyles: i2, nodeStyles: a2 } = T(n2);
    n2.labelStyle = i2;
    let o2 = n2.padding ?? 0, s2 = n2[r2(349)] === r2(275) ? 16 : o2, c2 = n2.look === `neo` ? 12 : o2;
    (n2.width || n2.height) && (n2.height = Math.max(((n2 == null ? void 0 : n2.height) ?? 0) - c2 * 2, 10), n2.width = Math[r2(385)](((n2 == null ? void 0 : n2.width) ?? 0) - s2 * 2 - pn * (n2.height + c2 * 2), 10));
    let { shapeSvg: l2, bbox: u2 } = yield O(t2, n2, j(n2)), d2 = (n2 != null && n2[r2(353)] ? n2 == null ? void 0 : n2.height : u2.height) + c2 * 2, f2 = pn * d2, p2 = pn * d2, m2 = (n2 != null && n2.width ? n2 == null ? void 0 : n2.width : u2[r2(481)]) + s2 * 2 + f2 - f2, h2 = d2, g2 = -m2 / 2, _2 = -h2 / 2, { cssStyles: v2 } = n2, y2 = E.svg(l2), b2 = S(n2, {}), x2 = [{ x: g2 - f2 / 2, y: _2 }, { x: g2 + m2 + f2 / 2, y: _2 }, { x: g2 + m2 + f2 / 2, y: _2 + h2 }, { x: g2 - f2 / 2, y: _2 + h2 }], C2 = [{ x: g2 + m2 - f2 / 2, y: _2 + h2 }, { x: g2 + m2 + f2 / 2, y: _2 + h2 }, { x: g2 + m2 + f2 / 2, y: _2 + h2 - p2 }];
    n2.look !== `handDrawn` && (b2[r2(285)] = 0, b2.fillStyle = `solid`);
    let w2 = M(x2), D2 = y2.path(w2, b2), k2 = M(C2), N2 = y2.path(k2, e(e({}, b2), {}, { fillStyle: `solid` })), P2 = l2.insert(() => N2, `:first-child`);
    return P2.insert(() => D2, `:first-child`), P2.attr(`class`, `basic label-container outer-path`), v2 && n2.look !== `handDrawn` && P2.selectAll(r2(512)).attr(`style`, v2), a2 && n2.look !== `handDrawn` && P2.selectAll(`path`).attr(`style`, a2), A(n2, P2), n2[r2(351)] = function(e2) {
      return q.polygon(n2, x2, e2);
    }, l2;
  }), hn.apply(this, arguments);
}
o(mn, `taggedRect`);
function gn(e2, t2) {
  return _n[D(416)](this, arguments);
}
function _n() {
  return _n = r(function* (t2, n2) {
    let r2 = I, { labelStyles: i2, nodeStyles: a2 } = T(n2);
    n2.labelStyle = i2;
    let { shapeSvg: o2, bbox: s2, label: c2 } = yield O(t2, n2, j(n2)), l2 = Math[r2(385)](s2.width + (n2.padding ?? 0) * 2, (n2 == null ? void 0 : n2.width) ?? 0), u2 = Math.max(s2.height + (n2.padding ?? 0) * 2, (n2 == null ? void 0 : n2.height) ?? 0), d2 = u2 / 8, f2 = 0.2 * l2, p2 = 0.2 * u2, m2 = u2 + d2, { cssStyles: h2 } = n2, g2 = E.svg(o2), _2 = S(n2, {});
    n2.look !== `handDrawn` && (_2[r2(285)] = 0, _2.fillStyle = `solid`);
    let v2 = [{ x: -l2 / 2 - l2 / 2 * 0.1, y: m2 / 2 }, ...N(-l2 / 2 - l2 / 2 * 0.1, m2 / 2, l2 / 2 + l2 / 2 * 0.1, m2 / 2, d2, 0.8), { x: l2 / 2 + l2 / 2 * 0.1, y: -m2 / 2 }, { x: -l2 / 2 - l2 / 2 * 0.1, y: -m2 / 2 }], y2 = -l2 / 2 + l2 / 2 * 0.1, b2 = -m2 / 2 - p2 * 0.4, x2 = [{ x: y2 + l2 - f2, y: (b2 + u2) * 1.3 }, { x: y2 + l2, y: b2 + u2 - p2 }, { x: y2 + l2, y: (b2 + u2) * 0.9 }, ...N(y2 + l2, (b2 + u2) * 1.25, y2 + l2 - f2, (b2 + u2) * 1.3, -u2 * 0.02, 0.5)], C2 = M(v2), w2 = g2.path(C2, _2), D2 = M(x2), k2 = g2[r2(512)](D2, e(e({}, _2), {}, { fillStyle: `solid` })), P2 = o2[r2(295)](() => k2, `:first-child`);
    return P2[r2(295)](() => w2, `:first-child`), P2.attr(`class`, `basic label-container outer-path`), h2 && n2.look !== `handDrawn` && P2.selectAll(`path`).attr(`style`, h2), a2 && n2.look !== `handDrawn` && P2.selectAll(`path`).attr(`style`, a2), P2.attr(r2(273), r2(276) + -d2 / 2 + `)`), c2.attr(r2(273), `translate(` + (-l2 / 2 + (n2.padding ?? 0) - (s2.x - (s2.left ?? 0))) + `,` + (-u2 / 2 + (n2.padding ?? 0) - d2 / 2 - (s2.y - (s2.top ?? 0))) + `)`), A(n2, P2), n2.intersect = function(e2) {
      return q.polygon(n2, v2, e2);
    }, o2;
  }), _n.apply(this, arguments);
}
o(gn, D(449));
function vn(e2, t2) {
  return yn.apply(this, arguments);
}
function yn() {
  return yn = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let { shapeSvg: a2, bbox: o2 } = yield O(e2, t2, j(t2)), s2 = Math.max(o2.width + (t2.padding ?? 0), (t2 == null ? void 0 : t2.width) || 0), c2 = Math.max(o2.height + (t2.padding ?? 0), (t2 == null ? void 0 : t2[n2(353)]) || 0), l2 = -s2 / 2, u2 = -c2 / 2, d2 = a2[n2(295)](`rect`, `:first-child`);
    return d2.attr(n2(522), `text`).attr(n2(396), i2).attr(`rx`, 0).attr(`ry`, 0).attr(`x`, l2).attr(`y`, u2).attr(`width`, s2).attr(`height`, c2), A(t2, d2), t2.intersect = function(e3) {
      return q.rect(t2, e3);
    }, a2;
  }), yn.apply(this, arguments);
}
o(vn, `text`);
var bn = o((e2, t2, n2, r2, i2, a2) => `M` + e2 + `,` + t2 + D(374) + i2 + `,` + a2 + D(342) + -r2 + D(422) + n2 + `,0
    a` + i2 + `,` + a2 + ` 0,0,1 0,` + r2 + `
    M` + n2 + `,` + -r2 + `
    a` + i2 + `,` + a2 + D(495) + r2 + `
    l` + -n2 + `,0`, D(444)), xn = o((e2, t2, n2, r2, i2, a2) => [`M` + e2 + `,` + t2, `M` + (e2 + n2) + `,` + t2, `a` + i2 + `,` + a2 + ` 0,0,0 0,` + -r2, `l` + -n2 + `,0`, `a` + i2 + `,` + a2 + ` 0,0,0 0,` + r2, `l` + n2 + `,0`].join(` `), `createOuterCylinderPathD`), Sn = o((e2, t2, n2, r2, i2, a2) => [`M` + (e2 + n2 / 2) + `,` + -r2 / 2, `a` + i2 + `,` + a2 + ` 0,0,0 0,` + r2].join(` `), `createInnerCylinderPathD`), Cn = 5, wn = 10;
function Tn(e2, t2) {
  return En.apply(this, arguments);
}
function En() {
  return En = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = t2[n2(349)] === `neo` ? 12 : a2 / 2;
    if (t2.width || t2.height) {
      let e3 = t2.height ?? 0;
      t2.height = (t2.height ?? 0) - o2, t2.height < Cn && (t2.height = Cn);
      let n3 = e3 / 2 / (2.5 + e3 / 50);
      t2.width = (t2.width ?? 0) - o2 - n3 * 3, t2.width < wn && (t2.width = wn);
    }
    let { shapeSvg: s2, bbox: c2, label: l2 } = yield O(e2, t2, j(t2)), u2 = (t2.height ? t2.height : c2.height) + o2, d2 = u2 / 2, f2 = d2 / (2.5 + u2 / 50), p2 = (t2.width ? t2.width : c2.width) + f2 + o2, { cssStyles: m2 } = t2, h2;
    if (t2.look === `handDrawn`) {
      let e3 = E.svg(s2), r3 = xn(0, 0, p2, u2, f2, d2), i3 = Sn(0, 0, p2, u2, f2, d2), a3 = e3[n2(512)](r3, S(t2, {})), o3 = e3.path(i3, S(t2, { fill: `none` }));
      h2 = s2.insert(() => o3, `:first-child`), h2 = s2.insert(() => a3, n2(520)), h2.attr(n2(522), `basic label-container`), m2 && h2.attr(`style`, m2);
    } else {
      let e3 = bn(0, 0, p2, u2, f2, d2);
      h2 = s2.insert(`path`, n2(520))[n2(452)](`d`, e3).attr(`class`, `basic label-container`).attr(`style`, g(m2)).attr(n2(396), i2), h2.attr(`class`, n2(491)), m2 && h2.selectAll(n2(512)).attr(`style`, m2), i2 && h2.selectAll(`path`).attr(`style`, i2);
    }
    return h2[n2(452)](n2(398), f2), h2.attr(`transform`, n2(409) + -p2 / 2 + `, ` + u2 / 2 + ` )`), l2.attr(`transform`, `translate(` + (-(c2[n2(481)] / 2) - f2 - (c2.x - (c2.left ?? 0))) + `, ` + (-(c2[n2(353)] / 2) - (c2.y - (c2.top ?? 0))) + `)`), A(t2, h2), t2.intersect = function(e3) {
      let r3 = n2, i3 = q.rect(t2, e3), a3 = i3.y - (t2.y ?? 0);
      if (d2 != 0 && (Math.abs(a3) < (t2[r3(353)] ?? 0) / 2 || Math[r3(274)](a3) == (t2.height ?? 0) / 2 && Math.abs(i3.x - (t2.x ?? 0)) > (t2.width ?? 0) / 2 - f2)) {
        let n3 = f2 * f2 * (1 - a3 * a3 / (d2 * d2));
        n3 != 0 && (n3 = Math.sqrt(Math.abs(n3))), n3 = f2 - n3, e3.x - (t2.x ?? 0) > 0 && (n3 = -n3), i3.x += n3;
      }
      return i3;
    }, s2;
  }), En.apply(this, arguments);
}
o(Tn, `tiltedCylinder`);
function Dn(e2, t2) {
  return On.apply(this, arguments);
}
function On() {
  return On = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2.padding ?? 0, o2 = (t2[n2(349)], a2), s2 = t2[n2(349)] === `neo` ? a2 * 2 : a2, { shapeSvg: c2, bbox: l2 } = yield O(e2, t2, j(t2)), u2 = ((t2 == null ? void 0 : t2[n2(353)]) ?? l2.height) + o2, d2 = ((t2 == null ? void 0 : t2.width) ?? l2.width) + s2, f2 = [{ x: -3 * u2 / 6, y: 0 }, { x: d2 + 3 * u2 / 6, y: 0 }, { x: d2, y: -u2 }, { x: 0, y: -u2 }], p2, { cssStyles: m2 } = t2;
    if (t2.look === n2(401)) {
      let e3 = E.svg(c2), n3 = S(t2, {}), r3 = M(f2), i3 = e3.path(r3, n3);
      p2 = c2.insert(() => i3, `:first-child`).attr(`transform`, `translate(` + -d2 / 2 + `, ` + u2 / 2 + `)`), m2 && p2.attr(`style`, m2);
    } else p2 = J(c2, d2, u2, f2);
    return i2 && p2.attr(`style`, i2), t2.width = d2, t2.height = u2, A(t2, p2), t2.intersect = function(e3) {
      return q.polygon(t2, f2, e3);
    }, c2;
  }), On.apply(this, arguments);
}
o(Dn, `trapezoid`);
function kn(e2, t2) {
  return An.apply(this, arguments);
}
function An() {
  let e2 = D;
  return An = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = t2.look === `neo` ? 16 : a2, s2 = t2.look === `neo` ? 12 : a2;
    (t2.width || t2.height) && (t2.height = (t2.height ?? 0) - s2 * 2, t2[n2(353)] < 5 && (t2.height = 5), t2.width = (t2.width ?? 0) - o2 * 2, t2.width < 15 && (t2.width = 15));
    let { shapeSvg: c2, bbox: l2 } = yield O(e3, t2, j(t2)), u2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : l2.width) + o2 * 2, d2 = (t2 != null && t2[n2(353)] ? t2 == null ? void 0 : t2.height : l2.height) + s2 * 2, { cssStyles: f2 } = t2, p2 = E.svg(c2), m2 = S(t2, {});
    t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = n2(317));
    let h2 = [{ x: -u2 / 2 * 0.8, y: -d2 / 2 }, { x: u2 / 2 * 0.8, y: -d2 / 2 }, { x: u2 / 2, y: -d2 / 2 * 0.6 }, { x: u2 / 2, y: d2 / 2 }, { x: -u2 / 2, y: d2 / 2 }, { x: -u2 / 2, y: -d2 / 2 * 0.6 }], g2 = M(h2), _2 = p2.path(g2, m2), v2 = c2.insert(() => _2, `:first-child`);
    return v2.attr(`class`, `basic label-container outer-path`), f2 && t2.look !== n2(401) && v2[n2(386)](n2(512))[n2(452)](`style`, f2), i2 && t2.look !== `handDrawn` && v2.selectChildren(`path`).attr(`style`, i2), A(t2, v2), t2.intersect = function(e4) {
      return q.polygon(t2, h2, e4);
    }, c2;
  }), An[e2(416)](this, arguments);
}
o(kn, `trapezoidalPentagon`);
var jn = 10, Mn = 10;
function Nn(e2, t2) {
  return Pn.apply(this, arguments);
}
function Pn() {
  return Pn = r(function* (e2, t2) {
    var _a;
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let o2 = t2.padding ?? 0, s2 = t2[n2(349)] === `neo` ? o2 * 2 : o2;
    (t2[n2(481)] || t2[n2(353)]) && (t2.width = (((t2 == null ? void 0 : t2.width) ?? 0) - s2) / 2, t2.width < Mn && (t2.width = Mn), t2.height = (t2 == null ? void 0 : t2.height) ?? 0, t2.height < jn && (t2.height = jn));
    let { shapeSvg: c2, bbox: u2, label: d2 } = yield O(e2, t2, j(t2)), f2 = p((_a = l()[n2(426)]) == null ? void 0 : _a.htmlLabels), m2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : u2.width) + s2, h2 = t2 != null && t2.height ? t2 == null ? void 0 : t2[n2(353)] : m2 + u2[n2(353)], g2 = h2, _2 = [{ x: 0, y: 0 }, { x: g2, y: 0 }, { x: g2 / 2, y: -h2 }], { cssStyles: v2 } = t2, y2 = E.svg(c2), b2 = S(t2, {});
    t2[n2(349)] !== `handDrawn` && (b2.roughness = 0, b2.fillStyle = `solid`);
    let x2 = M(_2), C2 = y2.path(x2, b2), w2 = c2.insert(() => C2, `:first-child`).attr(n2(273), `translate(` + -h2 / 2 + `, ` + h2 / 2 + `)`).attr(`class`, `outer-path`);
    return v2 && t2.look !== n2(401) && w2.selectChildren(`path`).attr(n2(396), v2), i2 && t2.look !== `handDrawn` && w2.selectChildren(n2(512)).attr(`style`, i2), t2.width = m2, t2.height = h2, A(t2, w2), d2.attr(`transform`, `translate(` + (-u2.width / 2 - (u2.x - (u2.left ?? 0))) + `, ` + (h2 / 2 - (u2.height + (t2[n2(505)] ?? 0) / (f2 ? 2 : 1) - (u2.y - (u2.top ?? 0)))) + `)`), t2.intersect = function(e3) {
      let r3 = n2;
      return a.info(`Triangle intersect`, t2, _2, e3), q[r3(279)](t2, _2, e3);
    }, c2;
  }), Pn.apply(this, arguments);
}
o(Nn, `triangle`);
function Fn(e2, t2) {
  return In.apply(this, arguments);
}
function In() {
  return In = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2[n2(505)] ?? 0, o2 = t2.look === `neo` ? 16 : a2, s2 = t2.look === `neo` ? 12 : a2, c2 = true;
    (t2.width || t2.height) && (c2 = false, t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - o2 * 2, t2.width < 10 && (t2.width = 10), t2.height = ((t2 == null ? void 0 : t2.height) ?? 0) - s2 * 2, t2.height < 10 && (t2[n2(353)] = 10));
    let { shapeSvg: l2, bbox: u2, label: d2 } = yield O(e2, t2, j(t2)), f2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : u2.width) + (o2 ?? 0) * 2, p2 = (t2 != null && t2.height ? t2 == null ? void 0 : t2[n2(353)] : u2.height) + (s2 ?? 0) * 2, m2 = t2.look === n2(275) ? p2 / 4 : p2 / 8, h2 = p2 + (c2 ? m2 : -m2), { cssStyles: g2 } = t2, _2 = 14 - f2, v2 = _2 > 0 ? _2 / 2 : 0, y2 = E[n2(428)](l2), b2 = S(t2, {});
    t2.look !== `handDrawn` && (b2.roughness = 0, b2.fillStyle = `solid`);
    let x2 = [{ x: -f2 / 2 - v2, y: h2 / 2 }, ...N(-f2 / 2 - v2, h2 / 2, f2 / 2 + v2, h2 / 2, m2, 0.8), { x: f2 / 2 + v2, y: -h2 / 2 }, { x: -f2 / 2 - v2, y: -h2 / 2 }], C2 = M(x2), w2 = y2.path(C2, b2), D2 = l2.insert(() => w2, n2(520));
    return D2.attr(`class`, n2(491)), g2 && t2[n2(349)] !== `handDrawn` && D2.selectAll(`path`).attr(`style`, g2), i2 && t2.look !== n2(401) && D2.selectAll(`path`).attr(`style`, i2), D2.attr(`transform`, `translate(0,` + -m2 / 2 + `)`), d2.attr(`transform`, `translate(` + (-f2 / 2 + (t2.padding ?? 0) - (u2.x - (u2[n2(492)] ?? 0))) + `,` + (-p2 / 2 + (t2[n2(505)] ?? 0) - m2 - (u2.y - (u2.top ?? 0))) + `)`), A(t2, D2), t2.intersect = function(e3) {
      return q.polygon(t2, x2, e3);
    }, l2;
  }), In.apply(this, arguments);
}
o(Fn, `waveEdgedRectangle`);
function Ln(e2, t2) {
  return Rn.apply(this, arguments);
}
function Rn() {
  return Rn = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let a2 = t2.padding ?? 0, o2 = t2.look === `neo` ? 16 : a2, s2 = t2.look === `neo` ? 20 : a2;
    if (t2.width || t2.height) {
      t2.width = (t2 == null ? void 0 : t2.width) ?? 0, t2[n2(481)] < 20 && (t2[n2(481)] = 20), t2.height = (t2 == null ? void 0 : t2.height) ?? 0, t2.height < 10 && (t2.height = 10);
      let e3 = Math.min(t2.height * 0.2, t2.height / 4);
      t2.height = Math.ceil(t2.height - s2 - 20 / 9 * e3), t2.width -= o2 * 2;
    }
    let { shapeSvg: c2, bbox: l2 } = yield O(e2, t2, j(t2)), u2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : l2.width) + o2 * 2, d2 = (t2 != null && t2.height ? t2 == null ? void 0 : t2.height : l2.height) + s2, f2 = d2 / 8, p2 = d2 + f2 * 2, { cssStyles: m2 } = t2, h2 = E.svg(c2), g2 = S(t2, {});
    t2.look !== n2(401) && (g2.roughness = 0, g2.fillStyle = `solid`);
    let _2 = [{ x: -u2 / 2, y: p2 / 2 }, ...N(-u2 / 2, p2 / 2, u2 / 2, p2 / 2, f2, 1), { x: u2 / 2, y: -p2 / 2 }, ...N(u2 / 2, -p2 / 2, -u2 / 2, -p2 / 2, f2, -1)], v2 = M(_2), y2 = h2.path(v2, g2), b2 = c2.insert(() => y2, `:first-child`);
    return b2.attr(`class`, `basic label-container`), m2 && t2.look !== `handDrawn` && b2[n2(517)](`path`).attr(`style`, m2), i2 && t2.look !== `handDrawn` && b2.selectAll(`path`).attr(`style`, i2), A(t2, b2), t2.intersect = function(e3) {
      return q.polygon(t2, _2, e3);
    }, c2;
  }), Rn.apply(this, arguments);
}
o(Ln, `waveRectangle`);
var Q = 10;
function zn(e2, t2) {
  return Bn[D(416)](this, arguments);
}
function Bn() {
  let e2 = D;
  return Bn = r(function* (e3, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let a2 = t2.look === `neo` ? 16 : t2.padding ?? 0, o2 = t2.look === n2(275) ? 12 : t2.padding ?? 0;
    (t2[n2(481)] || t2.height) && (t2.width = Math.max(((t2 == null ? void 0 : t2.width) ?? 0) - a2 * 2 - Q, 10), t2[n2(353)] = Math.max(((t2 == null ? void 0 : t2.height) ?? 0) - o2 * 2 - Q, 10));
    let { shapeSvg: s2, bbox: c2, label: l2 } = yield O(e3, t2, j(t2)), u2 = (t2 != null && t2.width ? t2 == null ? void 0 : t2.width : c2.width) + a2 * 2 + Q, d2 = (t2 != null && t2.height ? t2 == null ? void 0 : t2.height : c2.height) + o2 * 2 + Q, f2 = u2 - Q, p2 = d2 - Q, m2 = -f2 / 2, h2 = -p2 / 2, { cssStyles: g2 } = t2, _2 = E.svg(s2), v2 = S(t2, {}), y2 = [{ x: m2 - Q, y: h2 - Q }, { x: m2 - Q, y: h2 + p2 }, { x: m2 + f2, y: h2 + p2 }, { x: m2 + f2, y: h2 - Q }], b2 = `M` + (m2 - Q) + `,` + (h2 - Q) + ` L` + (m2 + f2) + `,` + (h2 - Q) + ` L` + (m2 + f2) + `,` + (h2 + p2) + ` L` + (m2 - Q) + `,` + (h2 + p2) + ` L` + (m2 - Q) + `,` + (h2 - Q) + n2(527) + (m2 - Q) + `,` + h2 + ` L` + (m2 + f2) + `,` + h2 + `
                M` + m2 + `,` + (h2 - Q) + ` L` + m2 + `,` + (h2 + p2);
    t2.look !== n2(401) && (v2[n2(285)] = 0, v2.fillStyle = `solid`);
    let x2 = _2.path(b2, v2), C2 = s2.insert(() => x2, `:first-child`);
    return C2.attr(`transform`, n2(409) + Q / 2 + `, ` + Q / 2 + `)`), C2.attr(n2(522), n2(491)), g2 && t2.look !== n2(401) && C2.selectAll(`path`).attr(`style`, g2), i2 && t2.look !== `handDrawn` && C2.selectAll(n2(512)).attr(`style`, i2), l2.attr(`transform`, `translate(` + (-(c2[n2(481)] / 2) + Q / 2 - (c2.x - (c2[n2(492)] ?? 0))) + `, ` + (-(c2.height / 2) + Q / 2 - (c2.y - (c2.top ?? 0))) + `)`), A(t2, C2), t2.intersect = function(e4) {
      return q.polygon(t2, y2, e4);
    }, s2;
  }), Bn[e2(416)](this, arguments);
}
o(zn, D(393));
var Vn = /* @__PURE__ */ new Set([`redux-color`, `redux-dark-color`]), Hn = /* @__PURE__ */ new Set([`redux`, `redux-dark`, `redux-color`, `redux-dark-color`]);
function Un(e2, t2) {
  return Wn[D(416)](this, arguments);
}
function Wn() {
  return Wn = r(function* (t2, n2) {
    var _a, _b, _c;
    let r2 = I, a2 = n2;
    a2.alias && (n2.label = a2.alias);
    let { theme: o2, themeVariables: s2 } = m(), { rowEven: c2, rowOdd: l2, nodeBorder: u2, borderColorArray: d2 } = s2;
    if (n2[r2(349)] === `handDrawn`) {
      let { themeVariables: i2 } = m(), { background: a3 } = i2;
      yield Un(t2, e(e({}, n2), {}, { id: n2.id + r2(482), domId: (n2.domId || n2.id) + `-background`, look: `default`, cssStyles: [`stroke: none`, r2(412) + a3] }));
    }
    let f2 = m();
    n2[r2(431)] = f2[r2(470)];
    let h2 = ((_a = f2.er) == null ? void 0 : _a[r2(429)]) ?? 10, g2 = ((_b = f2.er) == null ? void 0 : _b[r2(515)]) ?? 6, { cssStyles: v2 } = n2, { labelStyles: y2, nodeStyles: b2 } = T(n2);
    if (a2.attributes.length === 0 && n2.label) {
      let e2 = { rx: 0, ry: 0, labelPaddingX: h2, labelPaddingY: h2 * 1.5, classes: `` };
      _(n2.label, f2) + e2.labelPaddingX * 2 < f2.er.minEntityWidth && (n2[r2(481)] = f2.er[r2(469)]);
      let i2 = yield Be(t2, n2, e2);
      if (o2 != null && Vn.has(o2)) {
        let e3 = a2.colorIndex ?? 0;
        i2.attr(`data-color-id`, `color-` + e3 % d2.length);
      }
      if (!p(f2[r2(470)])) {
        let e3 = i2.select(`text`), t3 = (_c = e3.node()) == null ? void 0 : _c.getBBox();
        e3.attr(r2(273), `translate(` + -t3.width / 2 + `, 0)`);
      }
      return i2;
    }
    f2.htmlLabels || (h2 *= 1.25, g2 *= 1.25);
    let x2 = j(n2);
    x2 || (x2 = `node default`);
    let C2 = t2.insert(`g`).attr(r2(522), x2).attr(`id`, n2.domId || n2.id), w2 = yield Gn(C2, n2[r2(312)] ?? ``, f2, 0, 0, [r2(434)], y2);
    w2.height += g2;
    let D2 = 0, O2 = [], k2 = [], M2 = 0, N2 = 0, P2 = 0, F2 = 0, L2 = true, R2 = true;
    for (let e2 of a2[r2(451)]) {
      let t3 = yield Gn(C2, e2.type, f2, 0, D2, [`attribute-type`], y2);
      M2 = Math[r2(385)](M2, t3[r2(481)] + h2);
      let n3 = yield Gn(C2, e2.name, f2, 0, D2, [r2(421)], y2);
      N2 = Math[r2(385)](N2, n3.width + h2);
      let i2 = yield Gn(C2, e2.keys.join(), f2, 0, D2, [`attribute-keys`], y2);
      P2 = Math.max(P2, i2.width + h2);
      let a3 = yield Gn(C2, e2.comment, f2, 0, D2, [`attribute-comment`], y2);
      F2 = Math[r2(385)](F2, a3.width + h2);
      let o3 = Math[r2(385)](t3.height, n3.height, i2.height, a3.height) + g2;
      k2.push({ yOffset: D2, rowHeight: o3 }), D2 += o3;
    }
    let z2 = 4;
    P2 <= h2 && (L2 = false, P2 = 0, z2--), F2 <= h2 && (R2 = false, F2 = 0, z2--);
    let ee2 = C2.node()[r2(510)]();
    if (w2.width + h2 * 2 - (M2 + N2 + P2 + F2) > 0) {
      let e2 = w2.width + h2 * 2 - (M2 + N2 + P2 + F2);
      M2 += e2 / z2, N2 += e2 / z2, P2 > 0 && (P2 += e2 / z2), F2 > 0 && (F2 += e2 / z2);
    }
    let te2 = M2 + N2 + P2 + F2, B2 = E.svg(C2), V2 = S(n2, {});
    n2[r2(349)] !== `handDrawn` && (V2.roughness = 0, V2.fillStyle = `solid`);
    let ne2 = 0;
    k2.length > 0 && (ne2 = k2.reduce((e2, t3) => e2 + ((t3 == null ? void 0 : t3.rowHeight) ?? 0), 0));
    let H2 = Math.max(ee2.width + h2 * 2, (n2 == null ? void 0 : n2[r2(481)]) || 0, te2), re2 = Math.max((ne2 ?? 0) + w2.height, (n2 == null ? void 0 : n2.height) || 0), U2 = -H2 / 2, W2 = -re2 / 2;
    if (C2.selectAll(`g:not(:first-child)`)[r2(364)]((e2, t3, n3) => {
      let a3 = r2, o3 = i(n3[t3]), s3 = o3.attr(`transform`), c3 = 0, l3 = 0;
      if (s3) {
        let e3 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(s3);
        e3 && (c3 = parseFloat(e3[1]), l3 = parseFloat(e3[2]), o3.attr(`class`).includes(`attribute-name`) ? c3 += M2 : o3[a3(452)](`class`).includes(a3(507)) ? c3 += M2 + N2 : o3.attr(`class`).includes(a3(310)) && (c3 += M2 + N2 + P2));
      }
      o3.attr(`transform`, `translate(` + (U2 + h2 / 2 + c3) + `, ` + (l3 + W2 + w2.height + g2 / 2) + `)`);
    }), C2.select(`.name`).attr(`transform`, `translate(` + -w2.width / 2 + `, ` + (W2 + g2 / 2) + `)`), o2 != null && Vn.has(o2)) {
      let e2 = a2[r2(423)] ?? 0;
      C2.attr(`data-color-id`, `color-` + e2 % d2.length);
    }
    let ie2 = B2.rectangle(U2, W2, H2, re2, V2), ae2 = C2.insert(() => ie2, `:first-child`).attr(r2(522), `outer-path`).attr(`style`, v2.join(``));
    O2.push(0);
    for (let [t3, n3] of k2.entries()) {
      let i2 = (t3 + 1) % 2 == 0 && n3.yOffset !== 0, a3 = B2.rectangle(U2, w2.height + W2 + (n3 == null ? void 0 : n3.yOffset), H2, n3 == null ? void 0 : n3[r2(456)], e(e({}, V2), {}, { fill: i2 ? c2 : l2, stroke: u2 }));
      C2.insert(() => a3, `g.label`)[r2(452)](`style`, v2.join(``)).attr(`class`, `row-rect-` + (i2 ? `even` : `odd`));
    }
    let oe2 = 1e-4, G2 = qn(U2, w2.height + W2, H2 + U2, w2[r2(353)] + W2, oe2), K2 = B2.polygon(G2[r2(489)]((e2) => [e2.x, e2.y]), V2);
    if (C2[r2(295)](() => K2).attr(`class`, r2(519)), G2 = qn(M2 + U2, w2.height + W2, M2 + U2, re2 + W2, oe2), K2 = B2.polygon(G2.map((e2) => [e2.x, e2.y]), V2), C2.insert(() => K2).attr(`class`, `divider`), L2) {
      let e2 = M2 + N2 + U2;
      G2 = qn(e2, w2.height + W2, e2, re2 + W2, oe2), K2 = B2.polygon(G2[r2(489)]((e3) => [e3.x, e3.y]), V2), C2.insert(() => K2).attr(`class`, `divider`);
    }
    if (R2) {
      let e2 = M2 + N2 + P2 + U2;
      G2 = qn(e2, w2.height + W2, e2, re2 + W2, oe2), K2 = B2.polygon(G2.map((e3) => [e3.x, e3.y]), V2), C2.insert(() => K2)[r2(452)](`class`, `divider`);
    }
    for (let e2 of O2) {
      let t3 = w2.height + W2 + e2;
      G2 = qn(U2, t3, H2 + U2, t3, oe2), K2 = B2[r2(279)](G2.map((e3) => [e3.x, e3.y]), V2), C2.insert(() => K2).attr(`class`, `divider`);
    }
    if (A(n2, ae2), b2 && n2.look !== `handDrawn`) if (o2 != null && Hn.has(o2)) C2.selectAll(r2(512)).attr(r2(396), b2);
    else {
      var se2;
      let e2 = b2.split(`;`), t3 = e2 == null || (se2 = e2.filter((e3) => e3.includes(r2(283)))) == null ? void 0 : se2.map((e3) => `` + e3).join(`; `);
      C2.selectAll(r2(512)).attr(`style`, t3 ?? ``), C2[r2(517)](`.row-rect-even path`).attr(r2(396), b2);
    }
    return n2.intersect = function(e2) {
      return q.rect(n2, e2);
    }, C2;
  }), Wn.apply(this, arguments);
}
o(Un, D(419));
function Gn(e2, t2, n2) {
  return Kn[D(416)](this, arguments);
}
function Kn() {
  return Kn = r(function* (e2, t2, n2, r2 = 0, a2 = 0, o2 = [], s2 = ``) {
    let c2 = I, l2 = e2.insert(`g`).attr(c2(522), `label ` + o2.join(` `)).attr(`transform`, c2(409) + r2 + `, ` + a2 + `)`)[c2(452)](`style`, s2);
    t2 !== u(t2) && (t2 = u(t2), t2 = t2.replaceAll(`<`, c2(392)).replaceAll(`>`, `&gt;`));
    let d2 = l2.node().appendChild(yield y(l2, t2, { width: _(t2, n2) + 100, style: s2, useHtmlLabels: n2.htmlLabels }, n2));
    if (t2.includes(c2(392)) || t2[c2(382)](`&gt;`)) {
      let e3 = d2.children[0];
      for (e3.textContent = e3.textContent[c2(442)](`&lt;`, `<`)[c2(442)](`&gt;`, `>`); e3.childNodes[0]; ) e3 = e3.childNodes[0], e3[c2(289)] = e3.textContent[c2(442)](c2(392), `<`).replaceAll(`&gt;`, `>`);
    }
    let f2 = d2.getBBox();
    if (p(n2.htmlLabels)) {
      let e3 = d2.children[0];
      e3.style[c2(290)] = `start`;
      let t3 = i(d2);
      f2 = e3.getBoundingClientRect(), t3.attr(`width`, f2.width), t3.attr(`height`, f2.height);
    }
    return f2;
  }), Kn.apply(this, arguments);
}
o(Gn, `addText`);
function qn(e2, t2, n2, r2, i2) {
  return e2 === n2 ? [{ x: e2 - i2 / 2, y: t2 }, { x: e2 + i2 / 2, y: t2 }, { x: n2 + i2 / 2, y: r2 }, { x: n2 - i2 / 2, y: r2 }] : [{ x: e2, y: t2 - i2 / 2 }, { x: e2, y: t2 + i2 / 2 }, { x: n2, y: r2 + i2 / 2 }, { x: n2, y: r2 - i2 / 2 }];
}
o(qn, `lineToPolygon`);
function Jn(e2, t2, n2, r2) {
  return Yn[D(416)](this, arguments);
}
function Yn() {
  let e2 = D;
  return Yn = r(function* (e3, t2, n2, r2, i2 = ((e4) => (e4 = n2.class.padding) ?? 12)()) {
    let a2 = I, o2 = r2 ? 0 : 3, s2 = e3.insert(`g`).attr(a2(522), j(t2)).attr(`id`, t2.domId || t2.id), c2 = null, l2 = null, u2 = null, d2 = null, f2 = 0, p2 = 0, m2 = 0;
    if (c2 = s2.insert(`g`).attr(`class`, `annotation-group text`), t2.annotations.length > 0) {
      let e4 = t2[a2(264)][0];
      yield Xn(c2, { text: `\xAB` + e4 + `\xBB` }, 0), f2 = c2.node().getBBox().height;
    }
    l2 = s2.insert(`g`).attr(`class`, `label-group text`), yield Xn(l2, t2, 0, [`font-weight: bolder`]);
    let h2 = l2.node().getBBox();
    p2 = h2.height, u2 = s2[a2(295)](`g`).attr(`class`, `members-group text`);
    let g2 = 0;
    for (let e4 of t2.members) {
      let t3 = yield Xn(u2, e4, g2, [e4.parseClassifier()]);
      g2 += t3 + o2;
    }
    m2 = u2.node().getBBox().height, m2 <= 0 && (m2 = i2 / 2), d2 = s2.insert(`g`).attr(`class`, `methods-group text`);
    let _2 = 0;
    for (let e4 of t2.methods) {
      let t3 = yield Xn(d2, e4, _2, [e4.parseClassifier()]);
      _2 += t3 + o2;
    }
    let v2 = s2.node().getBBox();
    if (c2 !== null) {
      let e4 = c2.node()[a2(510)]();
      c2.attr(`transform`, `translate(` + -e4[a2(481)] / 2 + `)`);
    }
    return l2.attr(`transform`, `translate(` + -h2.width / 2 + `, ` + f2 + `)`), v2 = s2.node()[a2(510)](), u2.attr(a2(273), a2(376) + (f2 + p2 + i2 * 2) + `)`), v2 = s2.node().getBBox(), d2.attr(`transform`, `translate(0, ` + (f2 + p2 + (m2 ? m2 + i2 * 4 : i2 * 2)) + `)`), v2 = s2.node().getBBox(), { shapeSvg: s2, bbox: v2 };
  }), Yn[e2(416)](this, arguments);
}
o(Jn, `textHelper`);
function Xn(e2, t2, n2) {
  return Zn[D(416)](this, arguments);
}
function Zn() {
  return Zn = r(function* (e2, t2, n2, r2 = []) {
    let a2 = I, s2 = e2.insert(`g`).attr(`class`, a2(312)).attr(`style`, r2.join(`; `)), l2 = m(), u2 = a2(431) in t2 ? t2.useHtmlLabels : p(l2.htmlLabels) ?? true, f2 = ``;
    f2 = a2(387) in t2 ? t2.text : t2.label, !u2 && f2.startsWith(`\\`) && (f2 = f2.substring(1)), d(f2) && (u2 = true);
    let g2 = yield y(s2, c(h(f2)), { width: _(f2, l2) + 50, classes: `markdown-node-label`, useHtmlLabels: u2 }, l2), v2, b2 = 1;
    if (u2) {
      let e3 = g2.children[0], t3 = i(g2);
      b2 = e3.innerHTML.split(a2(370)).length, e3.innerHTML.includes(`</math>`) && (b2 += e3.innerHTML.split(`<mrow>`).length - 1);
      let n3 = e3[a2(478)](`img`);
      if (n3) {
        let e4 = f2.replace(/<img[^>]*>/g, ``).trim() === ``;
        yield Promise.all([...n3][a2(489)]((t4) => new Promise((n4) => {
          let r3 = a2;
          function i2() {
            var _a;
            let r4 = I;
            if (t4[r4(396)].display = `flex`, t4.style[r4(354)] = `column`, e4) {
              let e5 = ((_a = l2[r4(292)]) == null ? void 0 : _a.toString()) ?? window[r4(497)](document.body).fontSize, n5 = parseInt(e5, 10) * 5 + `px`;
              t4.style.minWidth = n5, t4[r4(396)][r4(508)] = n5;
            } else t4.style.width = r4(468);
            n4(t4);
          }
          o(i2, r3(425)), setTimeout(() => {
            t4.complete && i2();
          }), t4[r3(461)](`error`, i2), t4.addEventListener(`load`, i2);
        })));
      }
      v2 = e3.getBoundingClientRect(), t3.attr(a2(481), v2.width), t3.attr(`height`, v2.height);
    } else {
      r2.includes(`font-weight: bolder`) && i(g2).selectAll(`tspan`)[a2(452)](`font-weight`, ``), b2 = g2.children.length;
      let e3 = g2.children[0];
      (g2.textContent === `` || g2.textContent.includes(`&gt`)) && (e3.textContent = f2[0] + f2.substring(1)[a2(442)](a2(308), `>`)[a2(442)](a2(392), `<`).trim(), f2[1] === ` ` && (e3.textContent = e3.textContent[0] + ` ` + e3.textContent.substring(1))), e3.textContent === `undefined` && (e3.textContent = ``), v2 = g2.getBBox();
    }
    return s2.attr(`transform`, `translate(0,` + (-v2.height / (2 * b2) + n2) + `)`), v2.height;
  }), Zn.apply(this, arguments);
}
o(Xn, `addText`);
function Qn(e2, t2) {
  return $n.apply(this, arguments);
}
function $n() {
  return $n = r(function* (e2, t2) {
    var _a;
    let n2 = I;
    var r2;
    let a2 = l(), { themeVariables: o2 } = a2, { useGradient: s2 } = o2, c2 = a2.class.padding ?? 12, u2 = c2, d2 = t2[n2(431)] ?? p(a2.htmlLabels) ?? true, f2 = t2;
    f2.annotations = f2.annotations ?? [], f2.members = f2.members ?? [], f2.methods = f2.methods ?? [];
    let { shapeSvg: m2, bbox: h2 } = yield Jn(e2, t2, a2, d2, u2), { labelStyles: g2, nodeStyles: _2 } = T(t2);
    t2.labelStyle = g2, t2.cssStyles = f2.styles || ``;
    let v2 = ((_a = f2.styles) == null ? void 0 : _a.join(`;`)) || _2 || ``;
    t2.cssStyles || (t2.cssStyles = v2.replaceAll(`!important`, ``).split(`;`));
    let y2 = f2.members.length === 0 && f2.methods.length === 0 && !((r2 = a2.class) != null && r2.hideEmptyMembersBox), b2 = E.svg(m2), x2 = S(t2, {});
    t2.look !== `handDrawn` && (x2[n2(285)] = 0, x2.fillStyle = `solid`);
    let C2 = Math.max(t2.width ?? 0, h2[n2(481)]), w2 = Math.max(t2.height ?? 0, h2[n2(353)]), D2 = (t2.height ?? 0) > h2.height;
    f2[n2(375)].length === 0 && f2.methods.length === 0 ? w2 += u2 : f2.members[n2(298)] > 0 && f2[n2(488)].length === 0 && (w2 += u2 * 2);
    let O2 = -C2 / 2, k2 = -w2 / 2, j2 = y2 ? c2 * 2 : f2.members.length === 0 && f2.methods.length === 0 ? -c2 : 0;
    D2 && (j2 = c2 * 2);
    let M2 = b2.rectangle(O2 - c2, k2 - c2 - (y2 ? c2 : f2.members.length === 0 && f2.methods.length === 0 ? -c2 / 2 : 0), C2 + 2 * c2, w2 + 2 * c2 + j2, x2), N2 = m2.insert(() => M2, n2(520));
    N2.attr(`class`, `basic label-container outer-path`);
    let P2 = N2.node().getBBox(), F2 = m2.select(n2(293)).node().getBBox().height - (y2 ? c2 / 2 : 0) || 0, L2 = m2.select(n2(415)).node()[n2(510)]()[n2(353)] - (y2 ? c2 / 2 : 0) || 0, R2 = m2.select(`.members-group`).node().getBBox()[n2(353)] - (y2 ? c2 / 2 : 0) || 0, z2 = (F2 + L2 + k2 + c2 - (k2 - c2 - (y2 ? c2 : f2.members.length === 0 && f2.methods.length === 0 ? -c2 / 2 : 0))) / 2;
    if (m2[n2(517)](n2(525)).each((e3, t3, r3) => {
      var _a2;
      let o3 = n2;
      var s3;
      let l2 = i(r3[t3]), p2 = l2.attr(`transform`), h3 = 0;
      if (p2) {
        let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(p2);
        e4 && (h3 = parseFloat(e4[2]));
      }
      let g3 = h3 + k2 + c2 - (y2 ? c2 : f2.members.length === 0 && f2.methods.length === 0 ? -c2 / 2 : 0);
      if (l2.attr(`class`).includes(`methods-group`)) {
        let e4 = Math.max(R2, u2 / 2);
        g3 = D2 ? Math.max(z2, F2 + L2 + e4 + k2 + u2 * 2 + c2) + u2 * 2 : F2 + L2 + e4 + k2 + u2 * 4 + c2;
      }
      f2.members[o3(298)] === 0 && f2[o3(488)].length === 0 && (s3 = a2.class) != null && s3[o3(261)] && (g3 = f2.annotations.length > 0 ? h3 - u2 : h3), d2 || (g3 -= 4);
      let _3 = O2;
      (l2[o3(452)](`class`).includes(`label-group`) || l2.attr(`class`).includes(`annotation-group`)) && (_3 = -((_a2 = l2.node()) == null ? void 0 : _a2.getBBox().width) / 2 || 0, m2[o3(517)](`text`).each(function(e4, t4, n3) {
        let r4 = o3;
        window.getComputedStyle(n3[t4])[r4(309)] === `middle` && (_3 = 0);
      })), l2.attr(`transform`, `translate(` + _3 + `, ` + g3 + `)`);
    }), f2[n2(375)].length > 0 || f2.methods.length > 0 || y2) {
      let e3 = F2 + L2 + k2 + c2, r3 = b2.line(P2.x, e3, P2.x + P2.width, e3 + 1e-3, x2);
      m2.insert(() => r3)[n2(452)](`class`, `divider` + (t2.look === `neo` && !s2 ? ` neo-line` : ``)).attr(`style`, v2);
    }
    if (y2 || f2.members.length > 0 || f2.methods.length > 0) {
      let e3 = F2 + L2 + R2 + k2 + u2 * 2 + c2, r3 = b2[n2(372)](P2.x, D2 ? Math.max(z2, e3) : e3, P2.x + P2.width, (D2 ? Math.max(z2, e3) : e3) + 1e-3, x2);
      m2.insert(() => r3).attr(`class`, n2(519) + (t2[n2(349)] === `neo` && !s2 ? ` neo-line` : ``)).attr(`style`, v2);
    }
    if (f2.look !== `handDrawn` && m2[n2(517)](`path`)[n2(452)](`style`, v2), N2.select(`:nth-child(2)`).attr(`style`, v2), m2.selectAll(`.divider`).select(`path`).attr(n2(396), v2), t2.labelStyle ? m2.selectAll(`span`).attr(`style`, t2.labelStyle) : m2[n2(517)](`span`).attr(`style`, v2), !d2) {
      let e3 = RegExp(/color\s*:\s*([^;]*)/), t3 = e3[n2(433)](v2);
      if (t3) {
        let e4 = t3[0].replace(`color`, `fill`);
        m2.selectAll(`tspan`).attr(`style`, e4);
      } else if (g2) {
        let t4 = e3.exec(g2);
        if (t4) {
          let e4 = t4[0].replace(`color`, `fill`);
          m2.selectAll(`tspan`).attr(`style`, e4);
        }
      }
    }
    return A(t2, N2), t2[n2(351)] = function(e3) {
      return q.rect(t2, e3);
    }, m2;
  }), $n.apply(this, arguments);
}
o(Qn, `classBox`);
function er(e2, t2) {
  return tr[D(416)](this, arguments);
}
function tr() {
  return tr = r(function* (e2, t2) {
    var _a, _b;
    let n2 = I, { labelStyles: r2, nodeStyles: a2 } = T(t2);
    t2.labelStyle = r2;
    let o2 = t2, s2 = t2, c2 = `verifyMethod` in t2, u2 = j(t2), { themeVariables: d2 } = l(), { borderColorArray: f2, requirementEdgeLabelBackground: p2 } = d2, m2 = e2[n2(295)](`g`).attr(`class`, u2)[n2(452)](`id`, t2.domId ?? t2.id), h2;
    h2 = c2 ? yield $(m2, n2(272) + o2.type + `&gt;&gt;`, 0, t2.labelStyle) : yield $(m2, `&lt;&lt;Element&gt;&gt;`, 0, t2.labelStyle);
    let g2 = h2, _2 = yield $(m2, o2.name, g2, t2[n2(277)] + `; font-weight: bold;`);
    if (g2 += _2 + 20, c2) {
      let e3 = yield $(m2, `` + (o2.requirementId ? n2(408) + o2.requirementId : ``), g2, t2.labelStyle);
      g2 += e3;
      let r3 = yield $(m2, o2.text ? `Text: ` + o2.text : ``, g2, t2.labelStyle);
      g2 += r3;
      let i2 = yield $(m2, o2.risk ? `Risk: ` + o2.risk : ``, g2, t2.labelStyle);
      g2 += i2, yield $(m2, o2[n2(360)] ? `Verification: ` + o2.verifyMethod : ``, g2, t2.labelStyle);
    } else {
      let e3 = yield $(m2, s2.type ? `Type: ` + s2.type : ``, g2, t2.labelStyle);
      g2 += e3, yield $(m2, `` + (s2.docRef ? n2(359) + s2.docRef : ``), g2, t2[n2(277)]);
    }
    let v2 = (((_a = m2.node()) == null ? void 0 : _a.getBBox().width) ?? 200) + 20, y2 = (((_b = m2.node()) == null ? void 0 : _b.getBBox().height) ?? 200) + 20, b2 = -v2 / 2, x2 = -y2 / 2, C2 = E.svg(m2), w2 = S(t2, {});
    t2.look !== `handDrawn` && (w2[n2(285)] = 0, w2[n2(493)] = `solid`);
    let D2 = C2.rectangle(b2, x2, v2, y2, w2), O2 = m2.insert(() => D2, `:first-child`);
    if (O2.attr(`class`, `basic label-container outer-path`).attr(`style`, a2), f2 != null && f2.length) {
      let e3 = t2[n2(423)] ?? 0;
      m2.attr(n2(381), `color-` + e3 % f2.length);
    }
    if (m2.selectAll(`.label`).each((e3, t3, r3) => {
      let a3 = n2, o3 = i(r3[t3]), s3 = o3.attr(`transform`), c3 = 0, l2 = 0;
      if (s3) {
        let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/)[a3(433)](s3);
        e4 && (c3 = parseFloat(e4[1]), l2 = parseFloat(e4[2]));
      }
      let u3 = l2 - y2 / 2, d3 = b2 + 20 / 2;
      (t3 === 0 || t3 === 1) && (d3 = c3), o3.attr(a3(273), `translate(` + d3 + `, ` + (u3 + 20) + `)`);
    }), g2 > h2 + _2 + 20) {
      let e3 = x2 + h2 + _2 + 20, r3;
      if (t2.look === `neo`) {
        let t3 = 1e-3, i2 = [[b2, e3], [b2 + v2, e3], [b2 + v2, e3 + t3], [b2, e3 + t3]];
        r3 = C2[n2(279)](i2, w2);
      } else r3 = C2.line(b2, e3, b2 + v2, e3, w2);
      m2[n2(295)](() => r3).attr(n2(522), `divider`);
    }
    return A(t2, O2), t2.intersect = function(e3) {
      return q.rect(t2, e3);
    }, a2 && t2.look !== n2(401) && (p2 || f2 != null && f2.length) && m2.selectAll(`path`).attr(`style`, a2), m2;
  }), tr.apply(this, arguments);
}
o(er, `requirementBox`);
function $(e2, t2, n2) {
  return nr.apply(this, arguments);
}
function nr() {
  return nr = r(function* (e2, t2, n2, r2 = ``) {
    let a2 = I;
    if (t2 === ``) return 0;
    let o2 = e2.insert(`g`).attr(a2(522), `label`)[a2(452)](`style`, r2), s2 = l(), u2 = s2.htmlLabels ?? true, d2 = yield y(o2, c(h(t2)), { width: _(t2, s2) + 50, classes: a2(521), useHtmlLabels: u2, style: r2 }, s2), f2;
    if (u2) {
      let e3 = d2.children[0], t3 = i(d2);
      f2 = e3.getBoundingClientRect(), t3.attr(`width`, f2.width), t3.attr(a2(353), f2[a2(353)]);
    } else {
      let e3 = d2.children[0];
      for (let t3 of e3[a2(361)]) r2 && t3.setAttribute(`style`, r2);
      f2 = d2.getBBox(), f2.height += 6;
    }
    return o2.attr(`transform`, `translate(` + -f2.width / 2 + `,` + (-f2.height / 2 + n2) + `)`), f2.height;
  }), nr.apply(this, arguments);
}
o($, `addText`);
var rr = o((e2) => {
  let t2 = D;
  switch (e2) {
    case `Very High`:
      return `red`;
    case `High`:
      return t2(437);
    case `Medium`:
      return null;
    case `Low`:
      return `blue`;
    case `Very Low`:
      return `lightblue`;
  }
}, `colorFromPriority`);
function ir(e2, t2, n2) {
  return ar.apply(this, arguments);
}
function ar() {
  let e2 = D;
  return ar = r(function* (e3, t2, { config: n2 }) {
    let r2 = I;
    var i2;
    let { labelStyles: a2, nodeStyles: o2 } = T(t2);
    t2.labelStyle = a2 || ``;
    let s2 = t2.width;
    t2.width = (t2.width ?? 200) - 10;
    let { shapeSvg: c2, bbox: l2, label: u2 } = yield O(e3, t2, j(t2)), d2 = t2.padding || 10, f2 = ``, p2;
    if (`ticket` in t2 && t2.ticket && !(n2 == null || (i2 = n2[r2(463)]) == null) && i2.ticketBaseUrl) {
      var m2;
      f2 = n2 == null || (m2 = n2[r2(463)]) == null ? void 0 : m2.ticketBaseUrl.replace(`#TICKET#`, t2.ticket), p2 = c2.insert(`svg:a`, `:first-child`)[r2(452)](`class`, `kanban-ticket-link`).attr(r2(299), f2).attr(`target`, `_blank`);
    }
    let h2 = { useHtmlLabels: t2[r2(431)], labelStyle: t2.labelStyle || ``, width: t2.width, img: t2.img, padding: t2.padding || 8, centerLabel: false }, g2, _2;
    p2 ? { label: g2, bbox: _2 } = yield k(p2, `ticket` in t2 && t2.ticket || ``, h2) : { label: g2, bbox: _2 } = yield k(c2, `ticket` in t2 && t2.ticket || ``, h2);
    let { label: v2, bbox: y2 } = yield k(c2, `assigned` in t2 && t2.assigned || ``, h2);
    t2.width = s2;
    let b2 = (t2 == null ? void 0 : t2.width) || 0, x2 = Math.max(_2.height, y2.height) / 2, C2 = Math.max(l2.height + 20, (t2 == null ? void 0 : t2.height) || 0) + x2, w2 = -b2 / 2, D2 = -C2 / 2;
    u2[r2(452)](r2(273), `translate(` + (d2 - b2 / 2) + `, ` + (-x2 - l2.height / 2) + `)`), g2[r2(452)](r2(273), r2(409) + (d2 - b2 / 2) + `, ` + (-x2 + l2.height / 2) + `)`), v2.attr(r2(273), `translate(` + (d2 + b2 / 2 - y2.width - 20) + `, ` + (-x2 + l2.height / 2) + `)`);
    let M2, { rx: N2, ry: P2 } = t2, { cssStyles: F2 } = t2;
    if (t2.look === `handDrawn`) {
      let e4 = E[r2(428)](c2), n3 = S(t2, {}), i3 = N2 || P2 ? e4.path(z(w2, D2, b2, C2, N2 || 0), n3) : e4.rectangle(w2, D2, b2, C2, n3);
      M2 = c2[r2(295)](() => i3, `:first-child`), M2.attr(`class`, `basic label-container`).attr(`style`, F2 || null);
    } else {
      M2 = c2.insert(`rect`, `:first-child`), M2.attr(r2(522), `basic label-container __APA__`).attr(`style`, o2)[r2(452)](`rx`, N2 ?? 5).attr(`ry`, P2 ?? 5).attr(`x`, w2).attr(`y`, D2).attr(`width`, b2).attr(r2(353), C2);
      let e4 = `priority` in t2 && t2[r2(302)];
      if (e4) {
        let t3 = c2.append(`line`), n3 = w2 + 2, r3 = D2 + Math.floor((N2 ?? 0) / 2), i3 = D2 + C2 - Math.floor((N2 ?? 0) / 2);
        t3.attr(`x1`, n3).attr(`y1`, r3).attr(`x2`, n3).attr(`y2`, i3).attr(`stroke-width`, `4`).attr(`stroke`, rr(e4));
      }
    }
    return A(t2, M2), t2.height = C2, t2.intersect = function(e4) {
      return q.rect(t2, e4);
    }, c2;
  }), ar[e2(416)](this, arguments);
}
o(ir, D(362));
function or(e2, t2) {
  return sr.apply(this, arguments);
}
function sr() {
  return sr = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let { shapeSvg: o2, bbox: s2, halfPadding: c2, label: l2 } = yield O(e2, t2, j(t2)), u2 = s2.width + 10 * c2, d2 = s2[n2(353)] + 8 * c2, f2 = 0.15 * u2, { cssStyles: p2 } = t2, m2 = s2.width + 20, h2 = s2.height + 20, _2 = Math.max(u2, m2), v2 = Math.max(d2, h2);
    l2.attr(`transform`, n2(409) + -s2.width / 2 + `, ` + -s2.height / 2 + `)`);
    let y2, b2 = `M0 0 
    a` + f2 + `,` + f2 + ` 1 0,0 ` + _2 * 0.25 + `,` + -1 * v2 * 0.1 + `
    a` + f2 + `,` + f2 + ` 1 0,0 ` + _2 * 0.25 + n2(502) + f2 + `,` + f2 + ` 1 0,0 ` + _2 * 0.25 + n2(502) + f2 + `,` + f2 + ` 1 0,0 ` + _2 * 0.25 + `,` + v2 * 0.1 + `

    a` + f2 + `,` + f2 + ` 1 0,0 ` + _2 * 0.15 + `,` + v2 * 0.33 + `
    a` + f2 * 0.8 + `,` + f2 * 0.8 + ` 1 0,0 0,` + v2 * 0.34 + `
    a` + f2 + `,` + f2 + ` 1 0,0 ` + -1 * _2 * 0.15 + `,` + v2 * 0.33 + `

    a` + f2 + `,` + f2 + ` 1 0,0 ` + -1 * _2 * 0.25 + `,` + v2 * 0.15 + n2(374) + f2 + `,` + f2 + n2(516) + -1 * _2 * 0.25 + n2(502) + f2 + `,` + f2 + ` 1 0,0 ` + -1 * _2 * 0.25 + `,0
    a` + f2 + `,` + f2 + ` 1 0,0 ` + -1 * _2 * 0.25 + `,` + -1 * v2 * 0.15 + `

    a` + f2 + `,` + f2 + ` 1 0,0 ` + -1 * _2 * 0.1 + `,` + -1 * v2 * 0.33 + `
    a` + f2 * 0.8 + `,` + f2 * 0.8 + ` 1 0,0 0,` + -1 * v2 * 0.34 + `
    a` + f2 + `,` + f2 + n2(516) + _2 * 0.1 + `,` + -1 * v2 * 0.33 + `
  H0 V0 Z`;
    if (t2.look === `handDrawn`) {
      let e3 = E[n2(428)](o2), r3 = S(t2, {}), i3 = e3.path(b2, r3);
      y2 = o2.insert(() => i3, `:first-child`), y2[n2(452)](`class`, `basic label-container`).attr(`style`, g(p2));
    } else y2 = o2.insert(`path`, `:first-child`).attr(`class`, n2(347)).attr(`style`, i2).attr(`d`, b2);
    return y2[n2(452)](`transform`, `translate(` + -_2 / 2 + `, ` + -v2 / 2 + `)`), A(t2, y2), t2[n2(494)] = function(e3, t3) {
      return q[n2(384)](e3, t3);
    }, t2.intersect = function(e3) {
      let r3 = n2;
      return a.info(`Bang intersect`, t2, e3), q[r3(384)](t2, e3);
    }, o2;
  }), sr.apply(this, arguments);
}
o(or, `bang`);
function cr(e2, t2) {
  return lr.apply(this, arguments);
}
function lr() {
  return lr = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2[n2(277)] = r2;
    let { shapeSvg: o2, bbox: s2, halfPadding: c2, label: l2 } = yield O(e2, t2, j(t2)), u2 = s2.width + 2 * c2, d2 = s2.height + 2 * c2, f2 = 0.15 * u2, p2 = 0.25 * u2, m2 = 0.35 * u2, h2 = 0.2 * u2, { cssStyles: _2 } = t2, v2, y2 = `M0 0 
    a` + f2 + `,` + f2 + ` 0 0,1 ` + u2 * 0.25 + `,` + -1 * u2 * 0.1 + `
    a` + m2 + `,` + m2 + ` 1 0,1 ` + u2 * 0.4 + `,` + -1 * u2 * 0.1 + n2(374) + p2 + `,` + p2 + ` 1 0,1 ` + u2 * 0.35 + `,` + u2 * 0.2 + `

    a` + f2 + `,` + f2 + ` 1 0,1 ` + u2 * 0.15 + `,` + d2 * 0.35 + `
    a` + h2 + `,` + h2 + ` 1 0,1 ` + -1 * u2 * 0.15 + `,` + d2 * 0.65 + `

    a` + p2 + `,` + f2 + ` 1 0,1 ` + -1 * u2 * 0.25 + `,` + u2 * 0.15 + `
    a` + m2 + `,` + m2 + ` 1 0,1 ` + -1 * u2 * 0.5 + n2(502) + f2 + `,` + f2 + n2(499) + -1 * u2 * 0.25 + `,` + -1 * u2 * 0.15 + `

    a` + f2 + `,` + f2 + n2(499) + -1 * u2 * 0.1 + `,` + -1 * d2 * 0.35 + `
    a` + h2 + `,` + h2 + ` 1 0,1 ` + u2 * 0.1 + `,` + -1 * d2 * 0.65 + `
  H0 V0 Z`;
    if (t2[n2(349)] === n2(401)) {
      let e3 = E[n2(428)](o2), r3 = S(t2, {}), i3 = e3.path(y2, r3);
      v2 = o2[n2(295)](() => i3, `:first-child`), v2[n2(452)](`class`, `basic label-container`).attr(`style`, g(_2));
    } else v2 = o2.insert(`path`, `:first-child`)[n2(452)](`class`, n2(347)).attr(`style`, i2).attr(`d`, y2);
    return l2[n2(452)](`transform`, `translate(` + -s2.width / 2 + `, ` + -s2.height / 2 + `)`), v2.attr(`transform`, `translate(` + -u2 / 2 + `, ` + -d2 / 2 + `)`), A(t2, v2), t2.calcIntersect = function(e3, t3) {
      return q.rect(e3, t3);
    }, t2.intersect = function(e3) {
      return a.info(`Cloud intersect`, t2, e3), q.rect(t2, e3);
    }, o2;
  }), lr.apply(this, arguments);
}
o(cr, `cloud`);
function ur(e2, t2) {
  return dr.apply(this, arguments);
}
function dr() {
  return dr = r(function* (e2, t2) {
    let n2 = I, { labelStyles: r2, nodeStyles: i2 } = T(t2);
    t2.labelStyle = r2;
    let { shapeSvg: a2, bbox: o2, halfPadding: s2, label: c2 } = yield O(e2, t2, j(t2)), l2 = o2[n2(481)] + 8 * s2, u2 = o2.height + 2 * s2, d2 = t2.look === `neo` ? `
    M` + -l2 / 2 + ` ` + (u2 / 2 - 5) + `
    v` + (-u2 + 10) + n2(500) + (l2 - 10) + `
    q5,0 5,5
    v` + (u2 - 5) + `
    H` + -l2 / 2 + `
    Z
  ` : n2(443) + -l2 / 2 + ` ` + (u2 / 2 - 5) + `
    v` + (-u2 + 10) + `
    q0,-5 5,-5
    h` + (l2 - 10) + `
    q5,0 5,5
    v` + (u2 - 10) + n2(479) + -(l2 - 10) + `
    q-5,0 -5,-5
    Z
  `;
    if (!t2.domId) throw Error(`defaultMindmapNode: node "` + t2.id + `" is missing a domId \u2014 was render.ts domId prefixing skipped?`);
    let f2 = a2.append(`path`).attr(`id`, t2.domId).attr(`class`, `node-bkg node-` + t2.type).attr(`style`, i2).attr(`d`, d2);
    return a2.append(`line`).attr(`class`, `node-line-`).attr(`x1`, -l2 / 2)[n2(452)](`y1`, u2 / 2).attr(`x2`, l2 / 2)[n2(452)](`y2`, u2 / 2), c2[n2(452)](`transform`, n2(409) + -o2.width / 2 + `, ` + -o2.height / 2 + `)`), a2.append(() => c2.node()), A(t2, f2), t2[n2(494)] = function(e3, t3) {
      return q[n2(384)](e3, t3);
    }, t2.intersect = function(e3) {
      return q.rect(t2, e3);
    }, a2;
  }), dr.apply(this, arguments);
}
o(ur, `defaultMindmapNode`);
function fr(e2, t2) {
  return pr.apply(this, arguments);
}
function pr() {
  return pr = r(function* (e2, t2) {
    return xe(e2, t2, { padding: t2[I(505)] ?? 0 });
  }), pr.apply(this, arguments);
}
o(fr, `mindmapCircle`);
var mr = [{ semanticName: `Process`, name: D(441), shortName: `rect`, description: `Standard process shape`, aliases: [`proc`, `process`, D(336)], internalAliases: [D(460)], handler: tn }, { semanticName: `Event`, name: `Rounded Rectangle`, shortName: `rounded`, description: `Represents an event`, aliases: [`event`], internalAliases: [`roundedRect`], handler: Jt }, { semanticName: `Terminal Point`, name: `Stadium`, shortName: `stadium`, description: `Terminal point`, aliases: [`terminal`, `pill`], handler: rn }, { semanticName: `Subprocess`, name: D(407), shortName: `fr-rect`, description: `Subprocess`, aliases: [`subprocess`, D(391), `framed-rectangle`, `subroutine`], handler: dn }, { semanticName: D(338), name: `Cylinder`, shortName: D(307), description: D(473), aliases: [`db`, `database`, `cylinder`], handler: Re }, { semanticName: `Data Store`, name: D(345), shortName: `datastore`, description: `Data flow diagram data store`, aliases: [`data-store`], handler: He }, { semanticName: `Start`, name: D(411), shortName: `circle`, description: `Starting point`, aliases: [D(268)], handler: xe }, { semanticName: `Bang`, name: D(438), shortName: `bang`, description: `Bang`, aliases: [`bang`], handler: or }, { semanticName: `Cloud`, name: `Cloud`, shortName: `cloud`, description: `cloud`, aliases: [D(509)], handler: cr }, { semanticName: `Decision`, name: D(503), shortName: `diam`, description: D(518), aliases: [`decision`, D(464), `question`], handler: Ht }, { semanticName: `Prepare Conditional`, name: `Hexagon`, shortName: D(458), description: D(504), aliases: [`hexagon`, `prepare`], handler: rt }, { semanticName: `Data Input/Output`, name: D(313), shortName: `lean-r`, description: `Represents input or output`, aliases: [D(358), D(413)], internalAliases: [`lean_right`], handler: Ct }, { semanticName: `Data Input/Output`, name: D(325), shortName: `lean-l`, description: `Represents output or input`, aliases: [D(417), `out-in`], internalAliases: [`lean_left`], handler: xt }, { semanticName: `Priority Action`, name: `Trapezoid Base Bottom`, shortName: `trap-b`, description: `Priority action`, aliases: [D(302), `trapezoid-bottom`, `trapezoid`], handler: Dn }, { semanticName: `Manual Operation`, name: `Trapezoid Base Top`, shortName: `trap-t`, description: D(399), aliases: [`manual`, `trapezoid-top`, `inv-trapezoid`], internalAliases: [`inv_trapezoid`], handler: _t }, { semanticName: `Stop`, name: `Double Circle`, shortName: `dbl-circ`, description: D(418), aliases: [`double-circle`], internalAliases: [`doublecircle`], handler: Ke }, { semanticName: D(427), name: `Text Block`, shortName: `text`, description: `Text block`, handler: vn }, { semanticName: `Card`, name: D(485), shortName: `notch-rect`, description: `Represents a card`, aliases: [D(484), `notched-rectangle`], handler: _e }, { semanticName: `Lined/Shaded Process`, name: `Lined Rectangle`, shortName: D(397), description: `Lined process shape`, aliases: [D(335), `lined-process`, D(318), `shaded-process`], handler: Zt }, { semanticName: D(294), name: `Small Circle`, shortName: `sm-circ`, description: `Small starting point`, aliases: [`start`, `small-circle`], internalAliases: [`stateStart`], handler: ln }, { semanticName: `Stop`, name: `Framed Circle`, shortName: `fr-circ`, description: `Stop point`, aliases: [`stop`, `framed-circle`], internalAliases: [`stateEnd`], handler: cn }, { semanticName: `Fork/Join`, name: `Filled Rectangle`, shortName: `fork`, description: `Fork or join in process flow`, aliases: [`join`], internalAliases: [`forkJoin`], handler: $e }, { semanticName: D(424), name: `Hourglass`, shortName: D(524), description: `Represents a collate operation`, aliases: [D(524), D(365)], handler: at }, { semanticName: `Comment`, name: `Curly Brace`, shortName: `brace`, description: `Adds a comment`, aliases: [`comment`, `brace-l`], handler: Te }, { semanticName: `Comment Right`, name: `Curly Brace`, shortName: `brace-r`, description: D(304), handler: De }, { semanticName: `Comment with braces on both sides`, name: `Curly Braces`, shortName: `braces`, description: `Adds a comment`, handler: ke }, { semanticName: `Com Link`, name: `Lightning Bolt`, shortName: `bolt`, description: `Communication link`, aliases: [D(440), D(378)], handler: Tt }, { semanticName: `Document`, name: `Document`, shortName: D(501), description: `Represents a document`, aliases: [`doc`, `document`], handler: Fn }, { semanticName: `Delay`, name: `Half-Rounded Rectangle`, shortName: `delay`, description: `Represents a delay`, aliases: [`half-rounded-rectangle`], handler: et }, { semanticName: D(388), name: `Horizontal Cylinder`, shortName: D(476), description: `Direct access storage`, aliases: [`das`, `horizontal-cylinder`], handler: Tn }, { semanticName: `Disk Storage`, name: `Lined Cylinder`, shortName: `lin-cyl`, description: `Disk storage`, aliases: [`disk`, `lined-cylinder`], handler: jt }, { semanticName: D(339), name: `Curved Trapezoid`, shortName: `curv-trap`, description: `Represents a display`, aliases: [`curved-trapezoid`, `display`], handler: je }, { semanticName: D(402), name: `Divided Rectangle`, shortName: `div-rect`, description: D(288), aliases: [`div-proc`, `divided-rectangle`, `divided-process`], handler: We }, { semanticName: `Extract`, name: D(262), shortName: `tri`, description: `Extraction process`, aliases: [`extract`, `triangle`], handler: Nn }, { semanticName: D(420), name: `Window Pane`, shortName: `win-pane`, description: `Internal storage`, aliases: [`internal-storage`, `window-pane`], handler: zn }, { semanticName: `Junction`, name: D(405), shortName: `f-circ`, description: `Junction point`, aliases: [D(352), D(328)], handler: Je }, { semanticName: D(271), name: `Trapezoidal Pentagon`, shortName: `notch-pent`, description: `Loop limit step`, aliases: [`loop-limit`, D(282)], handler: kn }, { semanticName: `Manual File`, name: `Flipped Triangle`, shortName: `flip-tri`, description: D(322), aliases: [D(333), `flipped-triangle`], handler: Ze }, { semanticName: D(346), name: `Sloped Rectangle`, shortName: `sl-rect`, description: `Manual input step`, aliases: [`manual-input`, `sloped-rectangle`], handler: $t }, { semanticName: `Multi-Document`, name: D(331), shortName: `docs`, description: `Multiple documents`, aliases: [`documents`, `st-doc`, D(447)], handler: Lt }, { semanticName: D(395), name: `Stacked Rectangle`, shortName: `st-rect`, description: D(394), aliases: [`procs`, `processes`, `stacked-rectangle`], handler: Ft }, { semanticName: `Stored Data`, name: `Bow Tie Rectangle`, shortName: `bow-rect`, description: D(297), aliases: [`stored-data`, `bow-tie-rectangle`], handler: me }, { semanticName: `Summary`, name: `Crossed Circle`, shortName: `cross-circ`, description: `Summary`, aliases: [`summary`, `crossed-circle`], handler: we }, { semanticName: `Tagged Document`, name: D(406), shortName: `tag-doc`, description: D(267), aliases: [`tag-doc`, `tagged-document`], handler: gn }, { semanticName: D(334), name: D(496), shortName: `tag-rect`, description: `Tagged process`, aliases: [`tagged-rectangle`, `tag-proc`, `tagged-process`], handler: mn }, { semanticName: `Paper Tape`, name: `Flag`, shortName: `flag`, description: D(291), aliases: [`paper-tape`], handler: Ln }, { semanticName: D(506), name: `Odd`, shortName: `odd`, description: `Odd shape`, internalAliases: [D(286)], handler: Wt }, { semanticName: `Lined Document`, name: `Lined Document`, shortName: `lin-doc`, description: D(265), aliases: [D(377)], handler: Nt }], hr = o(() => {
  let e2 = [...Object[D(410)]({ state: on, choice: be, note: zt, rectWithTitle: Kt, labelRect: yt, iconSquare: pt, iconCircle: lt, icon: st, iconRounded: dt, imageSquare: ht, anchor: de, kanbanItem: ir, mindmapCircle: fr, defaultMindmapNode: ur, classBox: Qn, erBox: Un, requirementBox: er }), ...mr.flatMap((e3) => [e3.shortName, ...`aliases` in e3 ? e3.aliases : [], ...`internalAliases` in e3 ? e3.internalAliases : []].map((t2) => [t2, e3.handler]))];
  return Object.fromEntries(e2);
}, `generateShapeMap`)();
function gr(e2) {
  return e2 in hr;
}
o(gr, `isValidShape`);
var _r = /* @__PURE__ */ new Map();
function vr(e2, t2, n2) {
  return yr[D(416)](this, arguments);
}
function yr() {
  return yr = r(function* (e2, t2, n2) {
    let r2 = I, i2, a2;
    t2.shape === `rect` && (t2.rx && t2.ry ? t2.shape = `roundedRect` : t2[r2(355)] = `squareRect`);
    let o2 = t2.shape ? hr[t2.shape] : void 0;
    if (!o2) throw Error(`No such shape: ` + t2.shape + `. Please check your syntax.`);
    if (t2.link) {
      let s2;
      n2.config.securityLevel === `sandbox` ? s2 = `_top` : t2.linkTarget && (s2 = t2.linkTarget || `_blank`), i2 = e2.insert(`svg:a`).attr(r2(299), t2.link).attr(`target`, s2 ?? null), a2 = yield o2(i2, t2, n2);
    } else a2 = yield o2(e2, t2, n2), i2 = a2;
    return i2[r2(452)](`data-look`, g(t2.look)), t2.tooltip && a2.attr(r2(366), t2.tooltip), _r[r2(459)](t2.id, i2), t2.haveCallback && i2.attr(`class`, i2.attr(`class`) + ` clickable`), i2;
  }), yr.apply(this, arguments);
}
o(vr, `insertNode`);
var br = o((e2, t2) => {
  _r.set(t2.id, e2);
}, `setNodeElem`), xr = o(() => {
  _r.clear();
}, `clear`), Sr = o((e2) => {
  let t2 = D, n2 = _r.get(e2.id);
  a.trace(`Transforming node`, e2.diff, e2, `translate(` + (e2.x - e2.width / 2 - 5) + `, ` + e2[t2(481)] / 2 + `)`);
  let r2 = e2.diff || 0;
  return e2.clusterNode ? n2[t2(452)](`transform`, `translate(` + (e2.x + r2 - e2[t2(481)] / 2) + `, ` + (e2.y - e2.height / 2 - 8) + `)`) : n2.attr(t2(273), `translate(` + e2.x + `, ` + e2.y + `)`), r2;
}, `positionNode`);
export {
  br as a,
  gr as c,
  re as i,
  xr as l,
  U as n,
  vr as o,
  R as r,
  A as s,
  O as t,
  Sr as u
};
