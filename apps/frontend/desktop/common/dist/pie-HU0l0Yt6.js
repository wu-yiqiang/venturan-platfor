import { R as e, b as t, w as n } from "./src-B18GHWxx.js";
(function(e2, t2) {
  for (var n2 = a, r2 = e2(); ; ) try {
    if (parseInt(n2(272)) / 1 * (-parseInt(n2(270)) / 2) + -parseInt(n2(273)) / 3 * (-parseInt(n2(278)) / 4) + parseInt(n2(279)) / 5 + -parseInt(n2(264)) / 6 + parseInt(n2(265)) / 7 * (-parseInt(n2(276)) / 8) + parseInt(n2(266)) / 9 * (parseInt(n2(275)) / 10) + parseInt(n2(274)) / 11 * (parseInt(n2(269)) / 12) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(i, 124634);
function r(e2, t2) {
  return t2 < e2 ? -1 : t2 > e2 ? 1 : t2 >= e2 ? 0 : NaN;
}
function i() {
  var e2 = [`369LiJJbm`, `length`, `sortValues`, `384BukhIi`, `4GlvuLR`, `sort`, `18177OlNdtI`, `2559OqCyzv`, `7172lrOaOe`, `28750LGlIot`, `7624lmKvja`, `min`, `1060nvRsja`, `427750ISjhrX`, `1061352rzYXeS`, `826abSRhR`];
  return i = function() {
    return e2;
  }, i();
}
function a(e2, t2) {
  return e2 -= 264, i()[e2];
}
function o(e2) {
  return e2;
}
function s() {
  var i2 = a, s2 = o, c = r, l = null, u = n(0), d = n(t), f = n(0);
  function p(n2) {
    var r2 = a, i3, o2 = (n2 = e(n2)).length, p2, m, h = 0, g = Array(o2), _ = Array(o2), v = +u.apply(this, arguments), y = Math.min(t, Math.max(-t, d.apply(this, arguments) - v)), b, x = Math[r2(277)](Math.abs(y) / o2, f.apply(this, arguments)), S = x * (y < 0 ? -1 : 1), C;
    for (i3 = 0; i3 < o2; ++i3) (C = _[g[i3] = i3] = +s2(n2[i3], i3, n2)) > 0 && (h += C);
    for (c == null ? l != null && g[r2(271)](function(e2, t2) {
      return l(n2[e2], n2[t2]);
    }) : g.sort(function(e2, t2) {
      return c(_[e2], _[t2]);
    }), i3 = 0, m = h ? (y - o2 * S) / h : 0; i3 < o2; ++i3, v = b) p2 = g[i3], C = _[p2], b = v + (C > 0 ? C * m : 0) + S, _[p2] = { data: n2[p2], index: i3, value: C, startAngle: v, endAngle: b, padAngle: x };
    return _;
  }
  return p.value = function(e2) {
    return arguments.length ? (s2 = typeof e2 == `function` ? e2 : n(+e2), p) : s2;
  }, p[i2(268)] = function(e2) {
    return arguments.length ? (c = e2, l = null, p) : c;
  }, p.sort = function(e2) {
    var t2 = i2;
    return arguments[t2(267)] ? (l = e2, c = null, p) : l;
  }, p.startAngle = function(e2) {
    return arguments.length ? (u = typeof e2 == `function` ? e2 : n(+e2), p) : u;
  }, p.endAngle = function(e2) {
    return arguments.length ? (d = typeof e2 == `function` ? e2 : n(+e2), p) : d;
  }, p.padAngle = function(e2) {
    var t2 = i2;
    return arguments[t2(267)] ? (f = typeof e2 == `function` ? e2 : n(+e2), p) : f;
  }, p;
}
export {
  s as t
};
