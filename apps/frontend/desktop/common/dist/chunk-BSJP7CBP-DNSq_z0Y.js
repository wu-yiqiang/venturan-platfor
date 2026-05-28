import { t as e } from "./chunk-AGHRB4JF-CBHSUHQe.js";
var t = l;
(function(e2, t2) {
  let n2 = l, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(377)) / 1 * (parseInt(n2(369)) / 2) + parseInt(n2(375)) / 3 * (-parseInt(n2(374)) / 4) + -parseInt(n2(376)) / 5 * (parseInt(n2(373)) / 6) + -parseInt(n2(370)) / 7 + parseInt(n2(372)) / 8 + parseInt(n2(385)) / 9 + parseInt(n2(383)) / 10 * (parseInt(n2(380)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(n, 468824);
function n() {
  let e2 = [`computeLabelTransform`, `height`, `10prroWW`, `sin`, `951426LjcJKC`, `length`, `arrowTypeEnd`, `calculateDeltaAndAngle`, `getLineFunctionsWithOffset`, `219502LAiOBQ`, `6405777rVmJeR`, `arrowTypeStart`, `5349536FMcfwh`, `6nPnvNe`, `11420oEhsjG`, `201lEauDK`, `1577165gKpRiX`, `6ptdvWW`, `abs`, `hasOwn`, `19522283DiTIrW`];
  return n = function() {
    return e2;
  }, n();
}
var r = e((e2, t2) => {
  let n2 = l;
  if (t2) return `translate(` + -e2.width / 2 + `, ` + -e2.height / 2 + `)`;
  let r2 = e2.x ?? 0, i2 = e2.y ?? 0;
  return `translate(` + -(r2 + e2.width / 2) + `, ` + -(i2 + e2[n2(382)] / 2) + `)`;
}, t(381)), i = { aggregation: 17.25, extension: 17.25, composition: 17.25, dependency: 6, lollipop: 13.5, arrow_point: 4, arrow_barb: 0, arrow_barb_neo: 5.5 }, a = { arrow_point: 4, arrow_cross: 12.5, arrow_circle: 12.5 };
function o(e2, t2) {
  if (e2 === void 0 || t2 === void 0) return { angle: 0, deltaX: 0, deltaY: 0 };
  e2 = s(e2), t2 = s(t2);
  let [n2, r2] = [e2.x, e2.y], [i2, a2] = [t2.x, t2.y], o2 = i2 - n2, c2 = a2 - r2;
  return { angle: Math.atan(c2 / o2), deltaX: o2, deltaY: c2 };
}
e(o, t(388));
var s = e((e2) => Array.isArray(e2) ? { x: e2[0], y: e2[1] } : e2, `pointTransformer`), c = e((n2) => ({ x: e(function(e2, r2, a2) {
  let c2 = t, l2 = 0, u = s(a2[0]).x < s(a2[a2[c2(386)] - 1]).x ? `left` : `right`;
  if (r2 === 0 && Object.hasOwn(i, n2.arrowTypeStart)) {
    let { angle: e3, deltaX: t2 } = o(a2[0], a2[1]);
    l2 = i[n2.arrowTypeStart] * Math.cos(e3) * (t2 >= 0 ? 1 : -1);
  } else if (r2 === a2.length - 1 && Object.hasOwn(i, n2.arrowTypeEnd)) {
    let { angle: e3, deltaX: t2 } = o(a2[a2.length - 1], a2[a2.length - 2]);
    l2 = i[n2[c2(387)]] * Math.cos(e3) * (t2 >= 0 ? 1 : -1);
  }
  let d = Math.abs(s(e2).x - s(a2[a2.length - 1]).x), f = Math.abs(s(e2).y - s(a2[a2.length - 1]).y), p = Math.abs(s(e2).x - s(a2[0]).x), m = Math.abs(s(e2).y - s(a2[0]).y), h = i[n2.arrowTypeStart], g = i[n2.arrowTypeEnd];
  if (d < g && d > 0 && f < g) {
    let e3 = g + 1 - d;
    e3 *= u === `right` ? -1 : 1, l2 -= e3;
  }
  if (p < h && p > 0 && m < h) {
    let e3 = h + 1 - p;
    e3 *= u === `right` ? -1 : 1, l2 += e3;
  }
  return s(e2).x + l2;
}, `x`), y: e(function(e2, r2, a2) {
  let c2 = t, l2 = 0, u = s(a2[0]).y < s(a2[a2.length - 1]).y ? `down` : `up`;
  if (r2 === 0 && Object.hasOwn(i, n2[c2(371)])) {
    let { angle: e3, deltaY: t2 } = o(a2[0], a2[1]);
    l2 = i[n2.arrowTypeStart] * Math.abs(Math[c2(384)](e3)) * (t2 >= 0 ? 1 : -1);
  } else if (r2 === a2.length - 1 && Object[c2(379)](i, n2.arrowTypeEnd)) {
    let { angle: e3, deltaY: t2 } = o(a2[a2.length - 1], a2[a2.length - 2]);
    l2 = i[n2.arrowTypeEnd] * Math.abs(Math[c2(384)](e3)) * (t2 >= 0 ? 1 : -1);
  }
  let d = Math[c2(378)](s(e2).y - s(a2[a2.length - 1]).y), f = Math.abs(s(e2).x - s(a2[a2[c2(386)] - 1]).x), p = Math.abs(s(e2).y - s(a2[0]).y), m = Math.abs(s(e2).x - s(a2[0]).x), h = i[n2.arrowTypeStart], g = i[n2.arrowTypeEnd];
  if (d < g && d > 0 && f < g) {
    let e3 = g + 1 - d;
    e3 *= u === `up` ? -1 : 1, l2 -= e3;
  }
  if (p < h && p > 0 && m < h) {
    let e3 = h + 1 - p;
    e3 *= u === `up` ? -1 : 1, l2 += e3;
  }
  return s(e2).y + l2;
}, `y`) }), t(389));
function l(e2, t2) {
  return e2 -= 369, n()[e2];
}
export {
  r as i,
  c as n,
  a as r,
  i as t
};
