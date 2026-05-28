import { m as e, p as t } from "./index-D-g3WoLo.js";
import "./src-B18GHWxx.js";
import { t as n } from "./ordinal-Dn-wPUXi.js";
import { t as r } from "./arc-hTPkWzTM.js";
import { t as i } from "./pie-HU0l0Yt6.js";
import { _ as a } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as o, t as s } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as c, E as l, V as u, W as d, X as f, Z as p, j as m, k as h, q as g, s as _ } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { S as v, h as y } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as b } from "./chunk-WU5MYG2G-BnIisATw.js";
import { t as x } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
var S = w;
(function(e2, t2) {
  let n2 = w, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(314)) / 1 + -parseInt(n2(322)) / 2 + parseInt(n2(316)) / 3 * (-parseInt(n2(339)) / 4) + -parseInt(n2(312)) / 5 + parseInt(n2(313)) / 6 * (parseInt(n2(337)) / 7) + parseInt(n2(338)) / 8 + parseInt(n2(342)) / 9 * (-parseInt(n2(325)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(C, 636860);
function C() {
  let e2 = `rendering pie chart
.selectAll.sort.max.813740HLCFAa.pie9.entries.10920VUjGym.;
    font-family: .min.append.pie12., with value: .getDiagramTitle.data.style.stroke.width.translate(225,225).21cFYgok.1734384ZBfZgs.1236tAHLpP.parse.attr.459RlqDfi." has invalid value: .text.pieStrokeWidth.height.pie.populateDb.2711240FxmcvC.1999590WsTpOo.1209319TNoNpX.map.7614nPhBtd.pie4`.split(`.`);
  return C = function() {
    return e2;
  }, C();
}
function w(e2, t2) {
  return e2 -= 306, C()[e2];
}
e();
var T = _.pie, E = { sections: /* @__PURE__ */ new Map(), showData: false, config: T }, D = E.sections, O = E.showData, k = structuredClone(T), A = { getConfig: s(() => structuredClone(k), `getConfig`), clear: s(() => {
  D = /* @__PURE__ */ new Map(), O = E.showData, l();
}, `clear`), setDiagramTitle: p, getDiagramTitle: m, setAccTitle: d, getAccTitle: f, setAccDescription: h, getAccDescription: c, addSection: s(({ label: e2, value: t2 }) => {
  let n2 = w;
  if (t2 < 0) throw Error(`"` + e2 + n2(306) + t2 + `. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
  D.has(e2) || (D.set(e2, t2), o.debug(`added new section: ` + e2 + n2(330) + t2));
}, `addSection`), getSections: s(() => D, `getSections`), setShowData: s((e2) => {
  O = e2;
}, `setShowData`), getShowData: s(() => O, `getShowData`) }, j = s((e2, t2) => {
  x(e2, t2), t2.setShowData(e2.showData), e2.sections.map(t2.addSection);
}, S(311)), M = { parse: s((function() {
  var e2 = t(function* (e3) {
    let t2 = yield a(`pie`, e3);
    o.debug(t2), j(t2, A);
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), S(340)) }, N = s((e2) => `
  .pieCircle{
    stroke: ` + e2.pieStrokeColor + `;
    stroke-width : ` + e2[S(308)] + `;
    opacity : ` + e2.pieOpacity + `;
  }
  .pieOuterCircle{
    stroke: ` + e2.pieOuterStrokeColor + `;
    stroke-width: ` + e2.pieOuterStrokeWidth + `;
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ` + e2.pieTitleTextSize + `;
    fill: ` + e2.pieTitleTextColor + S(326) + e2.fontFamily + `;
  }
  .slice {
    font-family: ` + e2.fontFamily + `;
    fill: ` + e2.pieSectionTextColor + `;
    font-size:` + e2.pieSectionTextSize + `;
    // fill: white;
  }
  .legend text {
    fill: ` + e2.pieLegendTextColor + `;
    font-family: ` + e2.fontFamily + `;
    font-size: ` + e2.pieLegendTextSize + `;
  }
`, `getStyles`), P = s((e2) => {
  let t2 = S, n2 = [...e2.values()].reduce((e3, t3) => e3 + t3, 0), r2 = [...e2[t2(324)]()][t2(315)](([e3, t3]) => ({ label: e3, value: t3 })).filter((e3) => e3.value / n2 * 100 >= 1);
  return i().value((e3) => e3.value)[t2(320)](null)(r2);
}, `createPieArcs`), F = { parser: M, db: A, renderer: { draw: s((e2, t2, i2, a2) => {
  var _a;
  let s2 = S;
  o.debug(s2(318) + e2);
  let c2 = a2.db, l2 = u(), d2 = y(c2.getConfig(), l2[s2(310)]), f2 = b(t2), p2 = f2.append(`g`);
  p2.attr(`transform`, s2(336));
  let { themeVariables: m2 } = l2, [h2] = v(m2.pieOuterStrokeWidth);
  h2 ?? (h2 = 2);
  let _2 = d2.textPosition, x2 = r().innerRadius(0).outerRadius(185), C2 = r().innerRadius(185 * _2).outerRadius(185 * _2);
  p2.append(`circle`).attr(`cx`, 0).attr(`cy`, 0).attr(`r`, 185 + h2 / 2)[s2(341)](`class`, `pieOuterCircle`);
  let w2 = c2.getSections(), T2 = P(w2), E2 = [m2.pie1, m2.pie2, m2.pie3, m2[s2(317)], m2.pie5, m2.pie6, m2.pie7, m2.pie8, m2[s2(323)], m2.pie10, m2.pie11, m2[s2(329)]], D2 = 0;
  w2.forEach((e3) => {
    D2 += e3;
  });
  let O2 = T2.filter((e3) => (e3.data.value / D2 * 100).toFixed(0) !== `0`), k2 = n(E2).domain([...w2.keys()]);
  p2[s2(319)](`mySlices`)[s2(332)](O2).enter().append(`path`).attr(`d`, x2).attr(`fill`, (e3) => k2(e3.data.label)).attr(`class`, `pieCircle`), p2.selectAll(`mySlices`).data(O2).enter().append(s2(307)).text((e3) => (e3.data.value / D2 * 100).toFixed(0) + `%`)[s2(341)](`transform`, (e3) => `translate(` + C2.centroid(e3) + `)`).style(`text-anchor`, `middle`).attr(`class`, `slice`);
  let A2 = p2[s2(328)](`text`).text(c2[s2(331)]()).attr(`x`, 0).attr(`y`, -400 / 2)[s2(341)](`class`, `pieTitleText`), j2 = [...w2.entries()].map(([e3, t3]) => ({ label: e3, value: t3 })), M2 = p2.selectAll(`.legend`).data(j2).enter()[s2(328)](`g`).attr(`class`, `legend`).attr(`transform`, (e3, t3) => {
    let n2 = 22 * j2.length / 2;
    return `translate(216,` + (t3 * 22 - n2) + `)`;
  });
  M2[s2(328)](`rect`).attr(`width`, 18)[s2(341)](s2(309), 18).style(`fill`, (e3) => k2(e3.label))[s2(333)](s2(334), (e3) => k2(e3.label)), M2[s2(328)](`text`).attr(`x`, 22).attr(`y`, 14).text((e3) => c2.getShowData() ? e3.label + ` [` + e3.value + `]` : e3.label);
  let N2 = 512 + Math[s2(321)](...M2.selectAll(`text`).nodes()[s2(315)]((e3) => {
    let t3 = s2;
    return (e3 == null ? void 0 : e3.getBoundingClientRect()[t3(335)]) ?? 0;
  })), F2 = ((_a = A2.node()) == null ? void 0 : _a.getBoundingClientRect().width) ?? 0, I = 450 / 2 - F2 / 2, L = 450 / 2 + F2 / 2, R = Math[s2(327)](0, I), z = Math.max(N2, L) - R;
  f2.attr(`viewBox`, R + ` 0 ` + z + ` 450`), g(f2, 450, z, d2.useMaxWidth);
}, `draw`) }, styles: N };
export {
  F as diagram
};
