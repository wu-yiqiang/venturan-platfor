import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { _ as i } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as a, t as o } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as s, E as c, W as l, X as u, Z as d, c as f, j as p, k as m, q as h, s as g, z as _ } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h as v } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as y } from "./chunk-WU5MYG2G-BnIisATw.js";
import { t as b } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
var x = S;
(function(e2, t2) {
  let n2 = S, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(318)) / 1 + -parseInt(n2(340)) / 2 + -parseInt(n2(358)) / 3 + parseInt(n2(343)) / 4 * (parseInt(n2(350)) / 5) + -parseInt(n2(336)) / 6 + parseInt(n2(349)) / 7 + -parseInt(n2(353)) / 8 * (-parseInt(n2(351)) / 9) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(V, 861874);
function S(e2, t2) {
  return e2 -= 314, V()[e2];
}
t(), n();
var C = { showLegend: true, ticks: 5, max: null, min: 0, graticule: `circle` }, w = { axes: [], curves: [], options: C }, T = structuredClone(w), E = g.radar, D = o(() => v(e(e({}, E), _().radar)), x(328)), O = o(() => T[x(347)], `getAxes`), k = o(() => T.curves, `getCurves`), A = o(() => T[x(354)], `getOptions`), j = o((e2) => {
  T.axes = e2.map((e3) => {
    let t2 = S;
    return { name: e3[t2(345)], label: e3[t2(320)] ?? e3.name };
  });
}, `setAxes`), M = o((e2) => {
  T.curves = e2[x(322)]((e3) => ({ name: e3.name, label: e3.label ?? e3.name, entries: N(e3.entries) }));
}, `setCurves`), N = o((e2) => {
  if (e2[0].axis == null) return e2.map((e3) => e3.value);
  let t2 = O();
  if (t2.length === 0) throw Error(`Axes must be populated before curves for reference entries`);
  return t2.map((t3) => {
    let n2 = e2.find((e3) => {
      var _a;
      return ((_a = e3[S(357)]) == null ? void 0 : _a.$refText) === t3.name;
    });
    if (n2 === void 0) throw Error(`Missing entry for axis ` + t3.label);
    return n2.value;
  });
}, `computeCurveEntries`), P = { getAxes: O, getCurves: k, getOptions: A, setAxes: j, setCurves: M, setOptions: o((e2) => {
  var _a, _b, _c, _d, _e;
  let t2 = x, n2 = e2.reduce((e3, t3) => (e3[t3.name] = t3, e3), {});
  T.options = { showLegend: ((_a = n2.showLegend) == null ? void 0 : _a.value) ?? C.showLegend, ticks: ((_b = n2.ticks) == null ? void 0 : _b.value) ?? C[t2(341)], max: ((_c = n2[t2(342)]) == null ? void 0 : _c[t2(321)]) ?? C[t2(342)], min: ((_d = n2.min) == null ? void 0 : _d.value) ?? C[t2(338)], graticule: ((_e = n2.graticule) == null ? void 0 : _e.value) ?? C[t2(325)] };
}, `setOptions`), getConfig: D, clear: o(() => {
  c(), T = structuredClone(w);
}, `clear`), setAccTitle: l, getAccTitle: u, setDiagramTitle: d, getDiagramTitle: p, getAccDescription: s, setAccDescription: m }, F = o((e2) => {
  let t2 = x;
  b(e2, P);
  let { axes: n2, curves: r2, options: i2 } = e2;
  P.setAxes(n2), P.setCurves(r2), P[t2(331)](i2);
}, `populate`), I = { parse: o((function() {
  var e2 = r(function* (e3) {
    let t2 = yield i(`radar`, e3);
    a.debug(t2), F(t2);
  });
  return function(t2) {
    return e2[S(346)](this, arguments);
  };
})(), `parse`) }, L = o((e2, t2, n2, r2) => {
  let i2 = x, a2 = r2.db, o2 = a2.getAxes(), s2 = a2.getCurves(), c2 = a2[i2(319)](), l2 = a2.getConfig(), u2 = a2.getDiagramTitle(), d2 = R(y(t2), l2), f2 = c2.max ?? Math[i2(342)](...s2.map((e3) => Math.max(...e3.entries))), p2 = c2.min, m2 = Math[i2(338)](l2.width, l2.height) / 2;
  z(d2, o2, m2, c2.ticks, c2.graticule), B(d2, o2, m2, l2), H(d2, o2, s2, p2, f2, c2.graticule, l2), G(d2, s2, c2.showLegend, l2), d2[i2(317)](`text`).attr(`class`, `radarTitle`).text(u2).attr(`x`, 0).attr(`y`, -l2[i2(365)] / 2 - l2.marginTop);
}, `draw`), R = o((e2, t2) => {
  let n2 = x, r2 = t2.width + t2[n2(315)] + t2.marginRight, i2 = t2[n2(365)] + t2.marginTop + t2.marginBottom, a2 = { x: t2.marginLeft + t2.width / 2, y: t2[n2(363)] + t2.height / 2 };
  return h(e2, i2, r2, t2.useMaxWidth ?? true), e2[n2(355)](n2(329), `0 0 ` + r2 + ` ` + i2), e2.append(`g`).attr(`transform`, `translate(` + a2.x + `, ` + a2.y + `)`);
}, `drawFrame`), z = o((e2, t2, n2, r2, i2) => {
  let a2 = x;
  if (i2 === `circle`) for (let t3 = 0; t3 < r2; t3++) {
    let i3 = n2 * (t3 + 1) / r2;
    e2.append(`circle`).attr(`r`, i3).attr(`class`, `radarGraticule`);
  }
  else if (i2 === `polygon`) {
    let i3 = t2.length;
    for (let o2 = 0; o2 < r2; o2++) {
      let s2 = n2 * (o2 + 1) / r2, c2 = t2.map((e3, t3) => {
        let n3 = 2 * t3 * Math.PI / i3 - Math.PI / 2;
        return s2 * Math.cos(n3) + `,` + s2 * Math.sin(n3);
      })[a2(339)](` `);
      e2.append(`polygon`).attr(`points`, c2).attr(`class`, `radarGraticule`);
    }
  }
}, `drawGraticule`), B = o((e2, t2, n2, r2) => {
  let i2 = x, a2 = t2.length;
  for (let o2 = 0; o2 < a2; o2++) {
    let s2 = t2[o2][i2(320)], c2 = 2 * o2 * Math.PI / a2 - Math.PI / 2;
    e2.append(`line`).attr(`x1`, 0).attr(`y1`, 0).attr(`x2`, n2 * r2.axisScaleFactor * Math.cos(c2))[i2(355)](`y2`, n2 * r2.axisScaleFactor * Math.sin(c2)).attr(`class`, i2(362)), e2.append(`text`)[i2(327)](s2).attr(`x`, n2 * r2.axisLabelFactor * Math.cos(c2)).attr(`y`, n2 * r2[i2(316)] * Math.sin(c2))[i2(355)](`class`, i2(334));
  }
}, `drawAxes`);
function V() {
  let e2 = `733704wSzfWQ,getOptions,label,value,map,class,axisColor,graticule,curveStrokeWidth,text,getConfig,viewBox,closedRoundCurve,setOptions,;
	}
	.radarGraticule {
		fill: ,buildRadarStyleOptions,radarAxisLabel,width,130308YcaAIW,;
		fill-opacity: ,min,join,2544712TdMGcT,ticks,max,688HBCLJC,radarLegendText,name,apply,axes,legendFontSize,10898090veelhJ,5555zXktGK,15381mBrFVZ,polygon,5752qQWWFv,options,attr,radarCurve-,axis,4663467hBKCcT,curveOpacity,;
			stroke-width: ,;
		stroke-width: ,radarAxisLine,marginTop,;
			fill-opacity: ,height,;
			stroke: ,marginLeft,axisLabelFactor,append`.split(`,`);
  return V = function() {
    return e2;
  }, V();
}
function H(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = t2.length, c2 = Math.min(o2.width, o2.height) / 2;
  n2.forEach((t3, n3) => {
    let l2 = S;
    if (t3.entries.length !== s2) return;
    let u2 = t3.entries[l2(322)]((e3, t4) => {
      let n4 = 2 * Math.PI * t4 / s2 - Math.PI / 2, a3 = U(e3, r2, i2, c2);
      return { x: a3 * Math.cos(n4), y: a3 * Math.sin(n4) };
    });
    a2 === `circle` ? e2.append(`path`).attr(`d`, W(u2, o2.curveTension)).attr(`class`, l2(356) + n3) : a2 === l2(352) && e2[l2(317)](`polygon`).attr(`points`, u2.map((e3) => e3.x + `,` + e3.y).join(` `)).attr(`class`, `radarCurve-` + n3);
  });
}
o(H, `drawCurves`);
function U(e2, t2, n2, r2) {
  return r2 * (Math.min(Math.max(e2, t2), n2) - t2) / (n2 - t2);
}
o(U, `relativeRadius`);
function W(e2, t2) {
  let n2 = e2.length, r2 = `M` + e2[0].x + `,` + e2[0].y;
  for (let i2 = 0; i2 < n2; i2++) {
    let a2 = e2[(i2 - 1 + n2) % n2], o2 = e2[i2], s2 = e2[(i2 + 1) % n2], c2 = e2[(i2 + 2) % n2], l2 = { x: o2.x + (s2.x - a2.x) * t2, y: o2.y + (s2.y - a2.y) * t2 }, u2 = { x: s2.x - (c2.x - o2.x) * t2, y: s2.y - (c2.y - o2.y) * t2 };
    r2 += ` C` + l2.x + `,` + l2.y + ` ` + u2.x + `,` + u2.y + ` ` + s2.x + `,` + s2.y;
  }
  return r2 + ` Z`;
}
o(W, x(330));
function G(e2, t2, n2, r2) {
  let i2 = x;
  if (!n2) return;
  let a2 = (r2[i2(335)] / 2 + r2.marginRight) * 3 / 4, o2 = -(r2[i2(365)] / 2 + r2.marginTop) * 3 / 4;
  t2.forEach((t3, n3) => {
    let r3 = i2, s2 = e2.append(`g`).attr(`transform`, `translate(` + a2 + `, ` + (o2 + n3 * 20) + `)`);
    s2.append(`rect`).attr(`width`, 12).attr(`height`, 12).attr(`class`, `radarLegendBox-` + n3), s2[r3(317)](`text`)[r3(355)](`x`, 16).attr(`y`, 0).attr(r3(323), r3(344))[r3(327)](t3.label);
  });
}
o(G, `drawLegend`);
var K = { draw: L }, q = o((e2, t2) => {
  let n2 = x, r2 = ``;
  for (let i2 = 0; i2 < e2.THEME_COLOR_LIMIT; i2++) {
    let a2 = e2[`cScale` + i2];
    r2 += `
		.radarCurve-` + i2 + ` {
			color: ` + a2 + `;
			fill: ` + a2 + n2(364) + t2[n2(359)] + `;
			stroke: ` + a2 + n2(360) + t2[n2(326)] + `;
		}
		.radarLegendBox-` + i2 + ` {
			fill: ` + a2 + `;
			fill-opacity: ` + t2[n2(359)] + n2(314) + a2 + `;
		}
		`;
  }
  return r2;
}, `genIndexStyles`), J = o((e2) => {
  let t2 = v(f(), _().themeVariables);
  return { themeVariables: t2, radarOptions: v(t2.radar, e2) };
}, x(333)), Y = { parser: I, db: P, renderer: K, styles: o(({ radar: e2 } = {}) => {
  let t2 = x, { themeVariables: n2, radarOptions: r2 } = J(e2);
  return `
	.radarTitle {
		font-size: ` + n2.fontSize + `;
		color: ` + n2.titleColor + `;
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ` + r2[t2(324)] + t2(361) + r2.axisStrokeWidth + `;
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ` + r2.axisLabelFontSize + `px;
		color: ` + r2.axisColor + t2(332) + r2.graticuleColor + t2(337) + r2.graticuleOpacity + `;
		stroke: ` + r2.graticuleColor + `;
		stroke-width: ` + r2.graticuleStrokeWidth + `;
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ` + r2[t2(348)] + `px;
		dominant-baseline: hanging;
	}
	` + q(n2, r2) + `
	`;
}, `styles`) };
export {
  Y as diagram
};
