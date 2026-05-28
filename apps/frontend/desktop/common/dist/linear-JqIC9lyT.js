import { U as e, X as t, n, u as r, v as i } from "./src-B18GHWxx.js";
import { i as a, n as o, r as s, t as c } from "./defaultLocale-BPnJm4Jq.js";
import { t as l } from "./init-FHLUNZLx.js";
var u = A;
(function(e2, t2) {
  for (var n2 = A, r2 = e2(); ; ) try {
    if (parseInt(n2(180)) / 1 * (parseInt(n2(195)) / 2) + -parseInt(n2(199)) / 3 + -parseInt(n2(178)) / 4 + -parseInt(n2(189)) / 5 * (-parseInt(n2(198)) / 6) + -parseInt(n2(172)) / 7 + parseInt(n2(197)) / 8 * (-parseInt(n2(176)) / 9) + parseInt(n2(179)) / 10 * (parseInt(n2(185)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(K, 720242);
function d(e2, t2) {
  return e2 == null || t2 == null ? NaN : e2 < t2 ? -1 : e2 > t2 ? 1 : e2 >= t2 ? 0 : NaN;
}
function f(e2, t2) {
  return e2 == null || t2 == null ? NaN : t2 < e2 ? -1 : t2 > e2 ? 1 : t2 >= e2 ? 0 : NaN;
}
function p(e2) {
  var t2 = A;
  let n2, r2, i2;
  e2[t2(190)] === 2 ? (n2 = e2 === d || e2 === f ? e2 : m, r2 = e2, i2 = e2) : (n2 = d, r2 = (t3, n3) => d(e2(t3), n3), i2 = (t3, n3) => e2(t3) - n3);
  function a2(e3, t3, i3 = 0, a3 = e3.length) {
    if (i3 < a3) {
      if (n2(t3, t3) !== 0) return a3;
      do {
        let n3 = i3 + a3 >>> 1;
        r2(e3[n3], t3) < 0 ? i3 = n3 + 1 : a3 = n3;
      } while (i3 < a3);
    }
    return i3;
  }
  function o2(e3, t3, i3 = 0, a3 = e3.length) {
    if (i3 < a3) {
      if (n2(t3, t3) !== 0) return a3;
      do {
        let n3 = i3 + a3 >>> 1;
        r2(e3[n3], t3) <= 0 ? i3 = n3 + 1 : a3 = n3;
      } while (i3 < a3);
    }
    return i3;
  }
  function s2(e3, t3, n3 = 0, r3 = e3.length) {
    let o3 = a2(e3, t3, n3, r3 - 1);
    return o3 > n3 && i2(e3[o3 - 1], t3) > -i2(e3[o3], t3) ? o3 - 1 : o3;
  }
  return { left: a2, center: s2, right: o2 };
}
function m() {
  return 0;
}
function h(e2) {
  return e2 === null ? NaN : +e2;
}
var g = p(d), _ = g[u(187)];
g[u(186)], p(h).center;
var v = Math.sqrt(50), y = Math.sqrt(10), b = Math.sqrt(2);
function x(e2, t2, n2) {
  var r2 = u;
  let i2 = (t2 - e2) / Math[r2(182)](0, n2), a2 = Math[r2(181)](Math.log10(i2)), o2 = i2 / 10 ** a2, s2 = o2 >= v ? 10 : o2 >= y ? 5 : o2 >= b ? 2 : 1, c2, l2, d2;
  return a2 < 0 ? (d2 = 10 ** -a2 / s2, c2 = Math.round(e2 * d2), l2 = Math[r2(174)](t2 * d2), c2 / d2 < e2 && ++c2, l2 / d2 > t2 && --l2, d2 = -d2) : (d2 = 10 ** a2 * s2, c2 = Math.round(e2 / d2), l2 = Math[r2(174)](t2 / d2), c2 * d2 < e2 && ++c2, l2 * d2 > t2 && --l2), l2 < c2 && 0.5 <= n2 && n2 < 2 ? x(e2, t2, n2 * 2) : [c2, l2, d2];
}
function S(e2, t2, n2) {
  if (t2 = +t2, e2 = +e2, n2 = +n2, !(n2 > 0)) return [];
  if (e2 === t2) return [e2];
  let r2 = t2 < e2, [i2, a2, o2] = r2 ? x(t2, e2, n2) : x(e2, t2, n2);
  if (!(a2 >= i2)) return [];
  let s2 = a2 - i2 + 1, c2 = Array(s2);
  if (r2) if (o2 < 0) for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (a2 - e3) / -o2;
  else for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (a2 - e3) * o2;
  else if (o2 < 0) for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (i2 + e3) / -o2;
  else for (let e3 = 0; e3 < s2; ++e3) c2[e3] = (i2 + e3) * o2;
  return c2;
}
function C(e2, t2, n2) {
  return t2 = +t2, e2 = +e2, n2 = +n2, x(e2, t2, n2)[2];
}
function w(e2, t2, n2) {
  t2 = +t2, e2 = +e2, n2 = +n2;
  let r2 = t2 < e2, i2 = r2 ? C(t2, e2, n2) : C(e2, t2, n2);
  return (r2 ? -1 : 1) * (i2 < 0 ? 1 / -i2 : i2);
}
function T(e2, t2) {
  var n2 = u;
  t2 || (t2 = []);
  var r2 = e2 ? Math.min(t2[n2(190)], e2.length) : 0, i2 = t2.slice(), a2;
  return function(n3) {
    for (a2 = 0; a2 < r2; ++a2) i2[a2] = e2[a2] * (1 - n3) + t2[a2] * n3;
    return i2;
  };
}
function E(e2) {
  return ArrayBuffer.isView(e2) && !(e2 instanceof DataView);
}
function D(e2, t2) {
  var n2 = t2 ? t2.length : 0, r2 = e2 ? Math.min(n2, e2.length) : 0, i2 = Array(r2), a2 = Array(n2), o2;
  for (o2 = 0; o2 < r2; ++o2) i2[o2] = j(e2[o2], t2[o2]);
  for (; o2 < n2; ++o2) a2[o2] = t2[o2];
  return function(e3) {
    for (o2 = 0; o2 < r2; ++o2) a2[o2] = i2[o2](e3);
    return a2;
  };
}
function O(e2, t2) {
  var n2 = /* @__PURE__ */ new Date();
  return e2 = +e2, t2 = +t2, function(r2) {
    return n2.setTime(e2 * (1 - r2) + t2 * r2), n2;
  };
}
function k(e2, t2) {
  var n2 = {}, r2 = {}, i2;
  for (i2 in (typeof e2 != `object` || !e2) && (e2 = {}), (typeof t2 != `object` || !t2) && (t2 = {}), t2) i2 in e2 ? n2[i2] = j(e2[i2], t2[i2]) : r2[i2] = t2[i2];
  return function(e3) {
    for (i2 in n2) r2[i2] = n2[i2](e3);
    return r2;
  };
}
function A(e2, t2) {
  return e2 -= 172, K()[e2];
}
function j(a2, o2) {
  var s2 = typeof o2, c2;
  return o2 == null || s2 === `boolean` ? r(o2) : (s2 === `number` ? i : s2 === `string` ? (c2 = n(o2)) ? (o2 = c2, e) : t : o2 instanceof n ? e : o2 instanceof Date ? O : E(o2) ? T : Array.isArray(o2) ? D : typeof o2.valueOf != `function` && typeof o2.toString != `function` || isNaN(o2) ? k : i)(a2, o2);
}
function M(e2, t2) {
  return e2 = +e2, t2 = +t2, function(n2) {
    return Math[A(174)](e2 * (1 - n2) + t2 * n2);
  };
}
function N(e2) {
  return Math.max(0, -c(Math.abs(e2)));
}
function P(e2, t2) {
  return Math.max(0, Math[u(182)](-8, Math.min(8, Math.floor(c(t2) / 3))) * 3 - c(Math.abs(e2)));
}
function F(e2, t2) {
  var n2 = u;
  return e2 = Math.abs(e2), t2 = Math.abs(t2) - e2, Math[n2(182)](0, c(t2) - c(e2)) + 1;
}
function I(e2) {
  return function() {
    return e2;
  };
}
function L(e2) {
  return +e2;
}
var R = [0, 1];
function z(e2) {
  return e2;
}
function B(e2, t2) {
  return (t2 -= e2 = +e2) ? function(n2) {
    return (n2 - e2) / t2;
  } : I(isNaN(t2) ? NaN : 0.5);
}
function V(e2, t2) {
  var n2;
  return e2 > t2 && (n2 = e2, e2 = t2, t2 = n2), function(n3) {
    return Math.max(e2, Math[A(192)](t2, n3));
  };
}
function H(e2, t2, n2) {
  var r2 = e2[0], i2 = e2[1], a2 = t2[0], o2 = t2[1];
  return i2 < r2 ? (r2 = B(i2, r2), a2 = n2(o2, a2)) : (r2 = B(r2, i2), a2 = n2(a2, o2)), function(e3) {
    return a2(r2(e3));
  };
}
function U(e2, t2, n2) {
  var r2 = u, i2 = Math[r2(192)](e2.length, t2[r2(190)]) - 1, a2 = Array(i2), o2 = Array(i2), s2 = -1;
  for (e2[i2] < e2[0] && (e2 = e2.slice()[r2(193)](), t2 = t2.slice().reverse()); ++s2 < i2; ) a2[s2] = B(e2[s2], e2[s2 + 1]), o2[s2] = n2(t2[s2], t2[s2 + 1]);
  return function(t3) {
    var n3 = _(e2, t3, 1, i2) - 1;
    return o2[n3](a2[n3](t3));
  };
}
function W(e2, t2) {
  var n2 = u;
  return t2.domain(e2[n2(173)]()).range(e2.range()).interpolate(e2.interpolate()).clamp(e2.clamp()).unknown(e2.unknown());
}
function G() {
  var e2 = u, t2 = R, n2 = R, r2 = j, a2, o2, s2, c2 = z, l2, d2, f2;
  function p2() {
    var e3 = Math.min(t2.length, n2.length);
    return c2 !== z && (c2 = V(t2[0], t2[e3 - 1])), l2 = e3 > 2 ? U : H, d2 = f2 = null, m2;
  }
  function m2(e3) {
    return e3 == null || isNaN(e3 = +e3) ? s2 : (d2 || (d2 = l2(t2.map(a2), n2, r2)))(a2(c2(e3)));
  }
  return m2[e2(175)] = function(e3) {
    return c2(o2((f2 || (f2 = l2(n2, t2.map(a2), i)))(e3)));
  }, m2.domain = function(n3) {
    var r3 = e2;
    return arguments.length ? (t2 = Array.from(n3, L), p2()) : t2[r3(183)]();
  }, m2.range = function(t3) {
    var r3 = e2;
    return arguments[r3(190)] ? (n2 = Array.from(t3), p2()) : n2.slice();
  }, m2[e2(194)] = function(e3) {
    return n2 = Array.from(e3), r2 = M, p2();
  }, m2.clamp = function(t3) {
    var n3 = e2;
    return arguments[n3(190)] ? (c2 = t3 ? true : z, p2()) : c2 !== z;
  }, m2.interpolate = function(t3) {
    var n3 = e2;
    return arguments[n3(190)] ? (r2 = t3, p2()) : r2;
  }, m2[e2(184)] = function(t3) {
    var n3 = e2;
    return arguments[n3(190)] ? (s2 = t3, m2) : s2;
  }, function(e3, t3) {
    return a2 = e3, o2 = t3, p2();
  };
}
function K() {
  var e2 = `floor.max.slice.unknown.16456363qMPLFy.left.right.abs.10odmlBV.length.type.min.reverse.rangeRound.792098AzrryS.nice.24yMLNph.3978618VvuVPr.2829153hhKRdB.2895368vURRuq.domain.round.invert.1646091aHVrlI.ceil.5539088wMsnni.10AdRvnx.3xaLmru`.split(`.`);
  return K = function() {
    return e2;
  }, K();
}
function q() {
  return G()(z, z);
}
function J(e2, t2, n2, r2) {
  var i2 = u, c2 = w(e2, t2, n2), l2;
  switch (r2 = o(r2 ?? `,f`), r2.type) {
    case `s`:
      var d2 = Math.max(Math.abs(e2), Math[i2(188)](t2));
      return r2.precision == null && !isNaN(l2 = P(c2, d2)) && (r2.precision = l2), a(r2, d2);
    case ``:
    case `e`:
    case `g`:
    case `p`:
    case `r`:
      r2.precision == null && !isNaN(l2 = F(c2, Math.max(Math.abs(e2), Math.abs(t2)))) && (r2.precision = l2 - (r2[i2(191)] === `e`));
      break;
    case `f`:
    case `%`:
      r2.precision == null && !isNaN(l2 = N(c2)) && (r2.precision = l2 - (r2.type === `%`) * 2);
      break;
  }
  return s(r2);
}
function Y(e2) {
  var t2 = u, n2 = e2[t2(173)];
  return e2.ticks = function(e3) {
    var t3 = n2();
    return S(t3[0], t3[t3.length - 1], e3 ?? 10);
  }, e2.tickFormat = function(e3, t3) {
    var r2 = n2();
    return J(r2[0], r2[r2.length - 1], e3 ?? 10, t3);
  }, e2[t2(196)] = function(r2) {
    var i2 = t2;
    r2 ?? (r2 = 10);
    var a2 = n2(), o2 = 0, s2 = a2.length - 1, c2 = a2[o2], l2 = a2[s2], u2, d2, f2 = 10;
    for (l2 < c2 && (d2 = c2, c2 = l2, l2 = d2, d2 = o2, o2 = s2, s2 = d2); f2-- > 0; ) {
      if (d2 = C(c2, l2, r2), d2 === u2) return a2[o2] = c2, a2[s2] = l2, n2(a2);
      if (d2 > 0) c2 = Math.floor(c2 / d2) * d2, l2 = Math[i2(177)](l2 / d2) * d2;
      else if (d2 < 0) c2 = Math.ceil(c2 * d2) / d2, l2 = Math.floor(l2 * d2) / d2;
      else break;
      u2 = d2;
    }
    return e2;
  }, e2;
}
function X() {
  var e2 = q();
  return e2.copy = function() {
    return W(e2, X());
  }, l.apply(e2, arguments), Y(e2);
}
export {
  q as a,
  X as c,
  G as i,
  S as l,
  W as n,
  p as o,
  Y as r,
  j as s,
  w as t
};
