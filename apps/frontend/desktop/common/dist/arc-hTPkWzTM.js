import { $ as e, N as t, O as n, P as r, Y as i, Z as a, a as o, b as s, h as c, i as l, j as u, o as d, tt as f, w as p } from "./src-B18GHWxx.js";
(function(e2, t2) {
  for (var n2 = m, r2 = e2(); ; ) try {
    if (parseInt(n2(368)) / 1 + -parseInt(n2(367)) / 2 * (-parseInt(n2(358)) / 3) + -parseInt(n2(375)) / 4 * (-parseInt(n2(369)) / 5) + parseInt(n2(370)) / 6 * (parseInt(n2(377)) / 7) + parseInt(n2(360)) / 8 + -parseInt(n2(372)) / 9 + -parseInt(n2(378)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(C, 219189);
function m(e2, t2) {
  return e2 -= 358, C()[e2];
}
function h(e2) {
  return e2.innerRadius;
}
function g(e2) {
  return e2.outerRadius;
}
function _(e2) {
  return e2[m(361)];
}
function v(e2) {
  return e2.endAngle;
}
function y(e2) {
  return e2 && e2.padAngle;
}
function b(e2, t2, n2, r2, i2, a2, o2, s2) {
  var c2 = n2 - e2, l2 = r2 - t2, u2 = o2 - i2, d2 = s2 - a2, f2 = d2 * c2 - u2 * l2;
  if (!(f2 * f2 < 1e-12)) return f2 = (u2 * (t2 - a2) - d2 * (e2 - i2)) / f2, [e2 + f2 * c2, t2 + f2 * l2];
}
function x(t2, n2, r2, a2, o2, s2, c2) {
  var l2 = t2 - r2, u2 = n2 - a2, d2 = (c2 ? s2 : -s2) / e(l2 * l2 + u2 * u2), f2 = d2 * u2, p2 = -d2 * l2, m2 = t2 + f2, h2 = n2 + p2, g2 = r2 + f2, _2 = a2 + p2, v2 = (m2 + g2) / 2, y2 = (h2 + _2) / 2, b2 = g2 - m2, x2 = _2 - h2, S2 = b2 * b2 + x2 * x2, C2 = o2 - s2, w = m2 * _2 - g2 * h2, T = (x2 < 0 ? -1 : 1) * e(i(0, C2 * C2 * S2 - w * w)), E = (w * x2 - b2 * T) / S2, D = (-w * b2 - x2 * T) / S2, O = (w * x2 + b2 * T) / S2, k = (-w * b2 + x2 * T) / S2, A = E - v2, j = D - y2, M = O - v2, N = k - y2;
  return A * A + j * j > M * M + N * N && (E = O, D = k), { cx: E, cy: D, x01: -f2, y01: -p2, x11: E * (o2 / C2 - 1), y11: D * (o2 / C2 - 1) };
}
function S() {
  var i2 = m, S2 = h, C2 = g, w = p(0), T = null, E = _, D = v, O = y, k = null, A = c(j);
  function j() {
    var i3 = m, c2, p2, h2 = +S2.apply(this, arguments), g2 = +C2.apply(this, arguments), _2 = E.apply(this, arguments) - a, v2 = D.apply(this, arguments) - a, y2 = r(v2 - _2), j2 = v2 > _2;
    if (k || (k = c2 = A()), g2 < h2 && (p2 = g2, g2 = h2, h2 = p2), !(g2 > 1e-12)) k.moveTo(0, 0);
    else if (y2 > s - 1e-12) k.moveTo(g2 * n(_2), g2 * u(_2)), k.arc(0, 0, g2, _2, v2, !j2), h2 > 1e-12 && (k.moveTo(h2 * n(v2), h2 * u(v2)), k.arc(0, 0, h2, v2, _2, j2));
    else {
      var M = _2, N = v2, P = _2, F = v2, I = y2, L = y2, ee = O.apply(this, arguments) / 2, R = ee > 1e-12 && (T ? +T.apply(this, arguments) : e(h2 * h2 + g2 * g2)), z = f(r(g2 - h2) / 2, +w.apply(this, arguments)), B = z, V = z, H, U;
      if (R > 1e-12) {
        var W = o(R / h2 * u(ee)), G = o(R / g2 * u(ee));
        (I -= W * 2) > 1e-12 ? (W *= j2 ? 1 : -1, P += W, F -= W) : (I = 0, P = F = (_2 + v2) / 2), (L -= G * 2) > 1e-12 ? (G *= j2 ? 1 : -1, M += G, N -= G) : (L = 0, M = N = (_2 + v2) / 2);
      }
      var K = g2 * n(M), q = g2 * u(M), J = h2 * n(F), Y = h2 * u(F);
      if (z > 1e-12) {
        var X = g2 * n(N), Z = g2 * u(N), Q = h2 * n(P), te = h2 * u(P), $;
        if (y2 < l) if ($ = b(K, q, Q, te, X, Z, J, Y)) {
          var ne = K - $[0], re = q - $[1], ie = X - $[0], ae = Z - $[1], oe = 1 / u(d((ne * ie + re * ae) / (e(ne * ne + re * re) * e(ie * ie + ae * ae))) / 2), se = e($[0] * $[0] + $[1] * $[1]);
          B = f(z, (h2 - se) / (oe - 1)), V = f(z, (g2 - se) / (oe + 1));
        } else B = V = 0;
      }
      L > 1e-12 ? V > 1e-12 ? (H = x(Q, te, K, q, g2, V, j2), U = x(X, Z, J, Y, g2, V, j2), k.moveTo(H.cx + H[i3(365)], H.cy + H.y01), V < z ? k[i3(371)](H.cx, H.cy, V, t(H.y01, H.x01), t(U.y01, U.x01), !j2) : (k[i3(371)](H.cx, H.cy, V, t(H.y01, H.x01), t(H[i3(373)], H.x11), !j2), k.arc(0, 0, g2, t(H.cy + H.y11, H.cx + H.x11), t(U.cy + U.y11, U.cx + U.x11), !j2), k.arc(U.cx, U.cy, V, t(U.y11, U[i3(362)]), t(U.y01, U.x01), !j2))) : (k.moveTo(K, q), k.arc(0, 0, g2, M, N, !j2)) : k[i3(376)](K, q), !(h2 > 1e-12) || !(I > 1e-12) ? k.lineTo(J, Y) : B > 1e-12 ? (H = x(J, Y, X, Z, h2, -B, j2), U = x(K, q, Q, te, h2, -B, j2), k.lineTo(H.cx + H.x01, H.cy + H.y01), B < z ? k[i3(371)](H.cx, H.cy, B, t(H.y01, H.x01), t(U.y01, U.x01), !j2) : (k.arc(H.cx, H.cy, B, t(H.y01, H.x01), t(H[i3(373)], H.x11), !j2), k.arc(0, 0, h2, t(H.cy + H.y11, H.cx + H.x11), t(U.cy + U.y11, U.cx + U.x11), j2), k.arc(U.cx, U.cy, B, t(U.y11, U.x11), t(U.y01, U.x01), !j2))) : k[i3(371)](0, 0, h2, F, P, j2);
    }
    if (k[i3(364)](), c2) return k = null, c2 + `` || null;
  }
  return j[i2(359)] = function() {
    var e2 = i2, t2 = (+S2.apply(this, arguments) + +C2.apply(this, arguments)) / 2, r2 = (+E[e2(363)](this, arguments) + +D.apply(this, arguments)) / 2 - l / 2;
    return [n(r2) * t2, u(r2) * t2];
  }, j.innerRadius = function(e2) {
    return arguments.length ? (S2 = typeof e2 == `function` ? e2 : p(+e2), j) : S2;
  }, j.outerRadius = function(e2) {
    return arguments.length ? (C2 = typeof e2 == `function` ? e2 : p(+e2), j) : C2;
  }, j.cornerRadius = function(e2) {
    return arguments.length ? (w = typeof e2 == `function` ? e2 : p(+e2), j) : w;
  }, j.padRadius = function(e2) {
    var t2 = i2;
    return arguments.length ? (T = e2 == null ? null : typeof e2 == t2(366) ? e2 : p(+e2), j) : T;
  }, j.startAngle = function(e2) {
    return arguments.length ? (E = typeof e2 == `function` ? e2 : p(+e2), j) : E;
  }, j.endAngle = function(e2) {
    return arguments.length ? (D = typeof e2 == `function` ? e2 : p(+e2), j) : D;
  }, j.padAngle = function(e2) {
    var t2 = i2;
    return arguments.length ? (O = typeof e2 == t2(366) ? e2 : p(+e2), j) : O;
  }, j[i2(374)] = function(e2) {
    return arguments.length ? (k = e2 ?? null, j) : k;
  }, j;
}
function C() {
  var e2 = [`3861963vASRSx`, `y11`, `context`, `8EMqPxF`, `moveTo`, `1954617foOPJa`, `3474100KempHt`, `92223vtDwmS`, `centroid`, `2330632UsXOqv`, `startAngle`, `x11`, `apply`, `closePath`, `x01`, `function`, `2wsIalW`, `75437LMvIiq`, `797420ThmaXS`, `6zkdNLe`, `arc`];
  return C = function() {
    return e2;
  }, C();
}
export {
  S as t
};
