import { $ as e, F as t, G as n, W as r, X as i, b as a, d as o, et as s, l as c, m as l, ot as u } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { t as d } from "./index-D-g3WoLo.js";
var f = S;
(function(e2, t2) {
  for (var n2 = S, r2 = e2(); ; ) try {
    if (-parseInt(n2(107)) / 1 * (-parseInt(n2(112)) / 2) + -parseInt(n2(113)) / 3 * (parseInt(n2(120)) / 4) + parseInt(n2(103)) / 5 + parseInt(n2(109)) / 6 + -parseInt(n2(116)) / 7 * (-parseInt(n2(123)) / 8) + parseInt(n2(106)) / 9 * (-parseInt(n2(115)) / 10) + -parseInt(n2(119)) / 11 * (parseInt(n2(122)) / 12) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(p, 424503);
function p() {
  var e2 = [`isFinite`, `456rqbmKl`, `142671llesQt`, `audio/ogg; codecs=opus`, `839530DwpNRU`, `126vcKrYJ`, `audio/mp4`, `value`, `9449506VsnYsO`, `4jcuLvc`, `AudioViewer`, `12JuVCyM`, `77632swLIUu`, `div`, `section`, `2678325XOeqHZ`, `padStart`, `trim`, `36IsQesr`, `3107WzkPjt`, `data`, `1489110irvmmQ`, `audio/*`];
  return p = function() {
    return e2;
  }, p();
}
var m = { class: `audio-viewer` }, h = { class: `audio-card` }, g = { class: `audio-copy` }, _ = { class: `audio-kicker` }, v = { class: `audio-meter` }, y = { class: `audio-progress`, "aria-hidden": `true` }, b = [`src`], x = d(u({ __name: f(121), props: { data: {}, type: {} }, setup(u2) {
  var d2 = f;
  let p2 = u2, x2 = t(null), S2 = t(``), C = t(0), w = t(0), T = t(false), E = { aac: `audio/aac`, flac: `audio/flac`, m4a: d2(117), mp3: `audio/mpeg`, mpeg: `audio/mpeg`, oga: `audio/ogg`, ogg: `audio/ogg`, opus: d2(114), wav: `audio/wav`, weba: `audio/webm` }, D = i(() => p2.type[d2(105)]().toLowerCase()), O = i(() => E[D.value] || d2(110)), k = i(() => D.value.toUpperCase() || `AUDIO`), A = i(() => !Number.isFinite(w.value) || w.value <= 0 ? 0 : Math.min(100, Math.max(0, C[d2(118)] / w.value * 100))), j = (e2) => {
    var t2 = d2;
    if (!Number[t2(111)](e2) || e2 <= 0) return `00:00`;
    let n2 = Math.floor(e2 / 60), r2 = Math.floor(e2 % 60);
    return String(n2)[t2(104)](2, `0`) + `:` + String(r2).padStart(2, `0`);
  }, M = () => {
    var e2 = d2;
    S2[e2(118)] && (URL.revokeObjectURL(S2[e2(118)]), S2.value = ``);
  }, N = () => {
    var e2 = d2;
    M(), C.value = 0, w.value = 0, T[e2(118)] = false, S2[e2(118)] = URL.createObjectURL(new Blob([p2.data], { type: O.value }));
  }, P = () => {
    var _a;
    w.value = ((_a = x2.value) == null ? void 0 : _a.duration) || 0, T.value = true;
  }, F = () => {
    var _a;
    C.value = ((_a = x2.value) == null ? void 0 : _a.currentTime) || 0;
  };
  return o(N), a(() => [p2[d2(108)], p2.type], N), c(M), (t2, i2) => (l(), e(`div`, m, [s(d2(102), h, [i2[2] || (i2[2] = s(`div`, { class: `audio-art` }, [s(`span`), s(`i`)], -1)), s(`div`, g, [s(`span`, _, n(k.value), 1), i2[0] || (i2[0] = s(`strong`, null, `\u97F3\u9891\u9884\u89C8`, -1)), i2[1] || (i2[1] = s(`p`, null, `\u4F7F\u7528\u6D4F\u89C8\u5668\u539F\u751F\u64AD\u653E\u5668\u6253\u5F00\uFF0C\u517C\u5BB9\u6027\u53D6\u51B3\u4E8E\u5F53\u524D\u6D4F\u89C8\u5668\u652F\u6301\u7684\u97F3\u9891\u7F16\u7801\u3002`, -1))]), s(d2(101), v, [s(`span`, null, n(j(C.value)), 1), s(`div`, y, [s(`i`, { style: r({ width: A.value + `%` }) }, null, 4)]), s(`span`, null, n(T.value ? j(w.value) : `--:--`), 1)]), s(`audio`, { ref_key: `audioRef`, ref: x2, class: `audio-control`, src: S2.value, controls: ``, preload: `metadata`, onLoadedmetadata: P, onTimeupdate: F }, ` \u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u97F3\u9891\u64AD\u653E\u3002 `, 40, b)])]));
} }), [[`__scopeId`, `data-v-608bd328`]]);
function S(e2, t2) {
  return e2 -= 101, p()[e2];
}
export {
  x as default
};
