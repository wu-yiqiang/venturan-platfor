import { m as e } from "./src-B18GHWxx.js";
import { t } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { at as n } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { t as r } from "./dist2-CVEWu2Ar.js";
function i(e2, t2) {
  return e2 -= 363, o()[e2];
}
var a = i;
(function(e2, t2) {
  let n2 = i, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(369)) / 1 + -parseInt(n2(375)) / 2 + -parseInt(n2(382)) / 3 * (-parseInt(n2(389)) / 4) + parseInt(n2(394)) / 5 * (parseInt(n2(363)) / 6) + -parseInt(n2(384)) / 7 * (-parseInt(n2(379)) / 8) + -parseInt(n2(374)) / 9 * (parseInt(n2(372)) / 10) + -parseInt(n2(364)) / 11 * (-parseInt(n2(387)) / 12) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(o, 900798);
function o() {
  let e2 = `1086417LOFDeE.attrs.1px solid #333.10bgyaLG.drawText.12309849gzqSMq.1123204UNvPUg.100.center.position.1065752lsRgdW.text.style.513801Pisdem.2px.91xnvytR.name.legend.125748uAgetT.#666.4QjMacx.sanitizeUrl.tspan.stopy.attr.241765pWtdwo.createTooltip.z-index.starty.60pHSYVZ.1606MkOgjA.text-align.stroke.replace.200px`.split(`.`);
  return o = function() {
    return e2;
  }, o();
}
var s = r(), c = t((e2, t2) => {
  let n2 = i, r2 = e2.append(`rect`);
  if (r2[n2(393)](`x`, t2.x), r2.attr(`y`, t2.y), r2.attr(`fill`, t2.fill), r2.attr(`stroke`, t2.stroke), r2[n2(393)](`width`, t2.width), r2.attr(`height`, t2.height), t2.name && r2.attr(`name`, t2[n2(385)]), t2.rx && r2[n2(393)](`rx`, t2.rx), t2.ry && r2.attr(`ry`, t2.ry), t2[n2(370)] !== void 0) for (let e3 in t2.attrs) r2.attr(e3, t2.attrs[e3]);
  return t2.class && r2.attr(`class`, t2.class), r2;
}, `drawRect`), l = t((e2, t2) => {
  let n2 = i;
  c(e2, { x: t2.startx, y: t2[n2(397)], width: t2.stopx - t2.startx, height: t2[n2(392)] - t2.starty, fill: t2.fill, stroke: t2[n2(366)], class: `rect` }).lower();
}, `drawBackgroundRect`), u = t((e2, t2) => {
  let r2 = i, a2 = t2.text[r2(367)](n, ` `), o2 = e2.append(r2(380));
  o2.attr(`x`, t2.x), o2.attr(`y`, t2.y), o2.attr(`class`, r2(386)), o2[r2(381)](`text-anchor`, t2.anchor), t2.class && o2.attr(`class`, t2.class);
  let s2 = o2.append(r2(391));
  return s2[r2(393)](`x`, t2.x + t2.textMargin * 2), s2.text(a2), o2;
}, a(373)), d = t((e2, t2, n2, r2) => {
  let i2 = a, o2 = e2.append(`image`);
  o2.attr(`x`, t2), o2[i2(393)](`y`, n2);
  let c2 = (0, s[i2(390)])(r2);
  o2.attr(`xlink:href`, c2);
}, `drawImage`), f = t((e2, t2, n2, r2) => {
  let i2 = a, o2 = e2.append(`use`);
  o2.attr(`x`, t2), o2.attr(`y`, n2);
  let c2 = (0, s.sanitizeUrl)(r2);
  o2[i2(393)](`xlink:href`, `#` + c2);
}, `drawEmbeddedImage`), p = t(() => ({ x: 0, y: 0, width: 100, height: 100, fill: `#EDF2AE`, stroke: `#666`, anchor: `start`, rx: 0, ry: 0 }), `getNoteRect`), m = t(() => ({ x: 0, y: 0, width: 100, height: 100, "text-anchor": `start`, style: a(388), textMargin: 0, rx: 0, ry: 0, tspan: true }), `getTextObj`), h = t(() => {
  let t2 = a, n2 = e(`.mermaidTooltip`);
  return n2.empty() && (n2 = e(`body`).append(`div`).attr(`class`, `mermaidTooltip`)[t2(381)](`opacity`, 0).style(t2(378), `absolute`)[t2(381)](t2(365), t2(377)).style(`max-width`, t2(368))[t2(381)](`padding`, t2(383)).style(`font-size`, `12px`)[t2(381)](`background`, `#ffffde`).style(`border`, t2(371)).style(`border-radius`, `2px`).style(`pointer-events`, `none`).style(t2(396), t2(376))), n2;
}, a(395));
export {
  f as a,
  p as c,
  h as i,
  d as n,
  l as o,
  m as r,
  u as s,
  c as t
};
