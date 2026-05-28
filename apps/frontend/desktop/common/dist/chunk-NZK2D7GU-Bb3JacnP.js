import { t as e } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { V as t } from "./chunk-CSCIHK7Q-pN0du8p0.js";
var n = i;
function r() {
  let e2 = [`stroke-width`, `cssStyles`, `1095396HqOpcV`, `get`, `624420AALwWB`, `1238485DyXeXD`, `45800ecIBFu`, `color`, `1474280gfoVKU`, `styles2Map`, `text-transform`, `push`, `userNodeOverrides`, `stroke`, `482793MOMDhm`, `16OLlOxy`, `split`, `14gPTrcW`, `2TJknRq`, `forEach`, `4193070btAAwP`];
  return r = function() {
    return e2;
  }, r();
}
function i(e2, t2) {
  return e2 -= 481, r()[e2];
}
(function(e2, t2) {
  let n2 = i, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(498)) / 1 + -parseInt(n2(489)) / 2 * (parseInt(n2(485)) / 3) + -parseInt(n2(500)) / 4 + -parseInt(n2(497)) / 5 + -parseInt(n2(494)) / 6 * (-parseInt(n2(488)) / 7) + parseInt(n2(486)) / 8 * (parseInt(n2(496)) / 9) + parseInt(n2(491)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(r, 191801);
var a = e((e2) => {
  let { handDrawnSeed: n2 } = t();
  return { fill: e2, hachureAngle: 120, hachureGap: 4, fillWeight: 2, roughness: 0.7, stroke: e2, seed: n2 };
}, `solidStateFill`), o = e((e2) => {
  let t2 = i, n2 = s([...e2.cssCompiledStyles || [], ...e2[t2(493)] || [], ...e2.labelStyle || []]);
  return { stylesMap: n2, stylesArray: [...n2] };
}, `compileStyles`), s = e((e2) => {
  let t2 = i, n2 = /* @__PURE__ */ new Map();
  return e2[t2(490)]((e3) => {
    let [r2, i2] = e3[t2(487)](`:`);
    n2.set(r2.trim(), i2 == null ? void 0 : i2.trim());
  }), n2;
}, n(501)), c = e((e2) => e2 === n(499) || e2 === `font-size` || e2 === `font-family` || e2 === `font-weight` || e2 === `font-style` || e2 === `text-decoration` || e2 === `text-align` || e2 === n(481) || e2 === `line-height` || e2 === `letter-spacing` || e2 === `word-spacing` || e2 === `text-shadow` || e2 === `text-overflow` || e2 === `white-space` || e2 === `word-wrap` || e2 === `word-break` || e2 === `overflow-wrap` || e2 === `hyphens`, `isLabelStyle`), l = e((e2) => {
  let { stylesArray: t2 } = o(e2), n2 = [], r2 = [], a2 = [], s2 = [];
  return t2.forEach((e3) => {
    let t3 = i, o2 = e3[0];
    c(o2) ? n2[t3(482)](e3.join(`:`) + ` !important`) : (r2.push(e3.join(`:`) + ` !important`), o2.includes(t3(484)) && a2.push(e3.join(`:`) + ` !important`), o2 === `fill` && s2.push(e3.join(`:`) + ` !important`));
  }), { labelStyles: n2.join(`;`), nodeStyles: r2.join(`;`), stylesArray: t2, borderStyles: a2, backgroundStyles: s2 };
}, `styles2String`), u = e((e2, r2) => {
  var _a;
  let i2 = n, { themeVariables: a2, handDrawnSeed: s2 } = t(), { nodeBorder: c2, mainBkg: l2 } = a2, { stylesMap: u2 } = o(e2);
  return Object.assign({ roughness: 0.7, fill: u2.get(`fill`) || l2, fillStyle: `hachure`, fillWeight: 4, hachureGap: 5.2, stroke: u2.get(i2(484)) || c2, seed: s2, strokeWidth: ((_a = u2.get(i2(492))) == null ? void 0 : _a.replace(`px`, ``)) || 1.3, fillLineDash: [0, 0], strokeLineDash: d(u2[i2(495)](`stroke-dasharray`)) }, r2);
}, n(483)), d = e((e2) => {
  if (!e2) return [0, 0];
  let t2 = e2.trim().split(/\s+/).map(Number);
  if (t2.length === 1) {
    let e3 = isNaN(t2[0]) ? 0 : t2[0];
    return [e3, e3];
  }
  return [isNaN(t2[0]) ? 0 : t2[0], isNaN(t2[1]) ? 0 : t2[1]];
}, `getStrokeDashArray`);
export {
  u as a,
  o as i,
  a as n,
  l as r,
  c as t
};
