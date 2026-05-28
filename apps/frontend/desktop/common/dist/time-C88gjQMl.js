import { t as e } from "./init-FHLUNZLx.js";
import { a as t, n, o as r, t as i } from "./linear-JqIC9lyT.js";
var a = Q;
(function(e2, t2) {
  for (var n2 = Q, r2 = e2(); ; ) try {
    if (parseInt(n2(304)) / 1 + -parseInt(n2(277)) / 2 + parseInt(n2(290)) / 3 * (parseInt(n2(299)) / 4) + parseInt(n2(248)) / 5 + -parseInt(n2(295)) / 6 + parseInt(n2(292)) / 7 * (parseInt(n2(269)) / 8) + -parseInt(n2(314)) / 9 * (parseInt(n2(260)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(m, 383374);
function o(e2) {
  return e2;
}
var s = 1, c = 2, l = 3, u = 4, d = 1e-6;
function f(e2) {
  var t2 = Q;
  return `translate(` + e2 + t2(263);
}
function p(e2) {
  return `translate(0,` + e2 + `)`;
}
function m() {
  var e2 = `4270848kQNZUD floor 000 get 5860jxzNvT apply getFullYear transition currentColor 374103dLTLxT setTime getDate join __axis offset ceil every line getMinutes 144GXmaNI insert getUTCDate Friday range .tick periods 3169775KHOLRp May setMonth round getTimezoneOffset getUTCSeconds Sep setUTCFullYear length getUTCDay charAt getUTCHours 200380WnQlsK stroke .domain ,0) setUTCMonth data April copy August 88QVdPrh from charCodeAt max ^(?: toString exec setUTCDate 269024yCJJwI sans-serif toLowerCase attr slice devicePixelRatio domain getUTCFullYear transform setDate tickFormat setHours count 543bstUAs getDay 176323OoJBaZ .%L %-m/%-d/%Y`.split(` `);
  return m = function() {
    return e2;
  }, m();
}
function ee(e2) {
  return (t2) => +e2(t2);
}
function h(e2, t2) {
  var n2 = Q;
  return t2 = Math[n2(272)](0, e2.bandwidth() - t2 * 2) / 2, e2[n2(251)]() && (t2 = Math.round(t2)), (n3) => +e2(n3) + t2;
}
function te() {
  return !this.__axis;
}
function g(e2, t2) {
  var n2 = Q, r2 = [], i2 = null, a2 = null, m2 = 6, g2 = 6, _2 = 3, v2 = typeof window < `u` && window[n2(282)] > 1 ? 0 : 0.5, y2 = e2 === s || e2 === u ? -1 : 1, b2 = e2 === u || e2 === c ? `x` : `y`, x2 = e2 === s || e2 === l ? f : p;
  function S2(f2) {
    var p2 = n2, S3 = i2 ?? (t2.ticks ? t2.ticks.apply(t2, r2) : t2.domain()), C2 = a2 ?? (t2.tickFormat ? t2[p2(287)].apply(t2, r2) : o), w2 = Math.max(m2, 0) + _2, T2 = t2.range(), E2 = +T2[0] + v2, D2 = +T2[T2.length - 1] + v2, O2 = (t2.bandwidth ? h : ee)(t2[p2(267)](), v2), k2 = f2.selection ? f2.selection() : f2, A2 = k2.selectAll(p2(262)).data([null]), j2 = k2.selectAll(`.tick`)[p2(265)](S3, t2).order(), M2 = j2.exit(), N2 = j2.enter().append(`g`).attr(`class`, `tick`), P2 = j2.select(p2(312)), F2 = j2.select(`text`);
    A2 = A2.merge(A2.enter()[p2(315)](`path`, p2(319)).attr(`class`, `domain`).attr(p2(261), p2(303))), j2 = j2.merge(N2), P2 = P2.merge(N2.append(`line`).attr(`stroke`, `currentColor`).attr(b2 + `2`, y2 * m2)), F2 = F2.merge(N2.append(`text`).attr(`fill`, `currentColor`).attr(b2, y2 * w2).attr(`dy`, e2 === s ? `0em` : e2 === l ? `0.71em` : `0.32em`)), f2 !== k2 && (A2 = A2.transition(f2), j2 = j2.transition(f2), P2 = P2[p2(302)](f2), F2 = F2.transition(f2), M2 = M2.transition(f2)[p2(280)](`opacity`, d).attr(p2(285), function(e3) {
      return isFinite(e3 = O2(e3)) ? x2(e3 + v2) : this.getAttribute(`transform`);
    }), N2.attr(`opacity`, d).attr(`transform`, function(e3) {
      var t3 = this.parentNode.__axis;
      return x2((t3 && isFinite(t3 = t3(e3)) ? t3 : O2(e3)) + v2);
    })), M2.remove(), A2.attr(`d`, e2 === u || e2 === c ? g2 ? `M` + y2 * g2 + `,` + E2 + `H` + v2 + `V` + D2 + `H` + y2 * g2 : `M` + v2 + `,` + E2 + `V` + D2 : g2 ? `M` + E2 + `,` + y2 * g2 + `V` + v2 + `H` + D2 + `V` + y2 * g2 : `M` + E2 + `,` + v2 + `H` + D2), j2.attr(`opacity`, 1).attr(`transform`, function(e3) {
      return x2(O2(e3) + v2);
    }), P2[p2(280)](b2 + `2`, y2 * m2), F2.attr(b2, y2 * w2).text(C2), k2.filter(te)[p2(280)](`fill`, `none`).attr(`font-size`, 10).attr(`font-family`, p2(278)).attr(`text-anchor`, e2 === c ? `start` : e2 === u ? `end` : `middle`), k2.each(function() {
      var e3 = p2;
      this[e3(308)] = O2;
    });
  }
  return S2.scale = function(e3) {
    return arguments.length ? (t2 = e3, S2) : t2;
  }, S2.ticks = function() {
    return r2 = Array.from(arguments), S2;
  }, S2.tickArguments = function(e3) {
    return arguments.length ? (r2 = e3 == null ? [] : Array.from(e3), S2) : r2.slice();
  }, S2.tickValues = function(e3) {
    var t3 = n2;
    return arguments.length ? (i2 = e3 == null ? null : Array[t3(270)](e3), S2) : i2 && i2.slice();
  }, S2.tickFormat = function(e3) {
    return arguments.length ? (a2 = e3, S2) : a2;
  }, S2.tickSize = function(e3) {
    var t3 = n2;
    return arguments[t3(256)] ? (m2 = g2 = +e3, S2) : m2;
  }, S2.tickSizeInner = function(e3) {
    var t3 = n2;
    return arguments[t3(256)] ? (m2 = +e3, S2) : m2;
  }, S2.tickSizeOuter = function(e3) {
    return arguments.length ? (g2 = +e3, S2) : g2;
  }, S2.tickPadding = function(e3) {
    return arguments.length ? (_2 = +e3, S2) : _2;
  }, S2.offset = function(e3) {
    var t3 = n2;
    return arguments[t3(256)] ? (v2 = +e3, S2) : v2;
  }, S2;
}
function _(e2) {
  return g(s, e2);
}
function v(e2) {
  return g(c, e2);
}
function y(e2) {
  return g(l, e2);
}
function b(e2) {
  return g(u, e2);
}
function x(e2, t2) {
  var n2 = Q;
  e2 = e2.slice();
  var r2 = 0, i2 = e2.length - 1, a2 = e2[r2], o2 = e2[i2], s2;
  return o2 < a2 && (s2 = r2, r2 = i2, i2 = s2, s2 = a2, a2 = o2, o2 = s2), e2[r2] = t2[n2(296)](a2), e2[i2] = t2.ceil(o2), e2;
}
var S = /* @__PURE__ */ new Date(), C = /* @__PURE__ */ new Date();
function w(e2, t2, n2, r2) {
  function i2(t3) {
    return e2(t3 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+t3)), t3;
  }
  return i2.floor = (t3) => (e2(t3 = /* @__PURE__ */ new Date(+t3)), t3), i2.ceil = (n3) => (e2(n3 = new Date(n3 - 1)), t2(n3, 1), e2(n3), n3), i2.round = (e3) => {
    var t3 = Q;
    let n3 = i2(e3), r3 = i2[t3(310)](e3);
    return e3 - n3 < r3 - e3 ? n3 : r3;
  }, i2.offset = (e3, n3) => (t2(e3 = /* @__PURE__ */ new Date(+e3), n3 == null ? 1 : Math.floor(n3)), e3), i2.range = (n3, r3, a2) => {
    let o2 = [];
    if (n3 = i2.ceil(n3), a2 = a2 == null ? 1 : Math.floor(a2), !(n3 < r3) || !(a2 > 0)) return o2;
    let s2;
    do
      o2.push(s2 = /* @__PURE__ */ new Date(+n3)), t2(n3, a2), e2(n3);
    while (s2 < n3 && n3 < r3);
    return o2;
  }, i2.filter = (n3) => w((t3) => {
    if (t3 >= t3) for (; e2(t3), !n3(t3); ) t3.setTime(t3 - 1);
  }, (e3, r3) => {
    if (e3 >= e3) if (r3 < 0) for (; ++r3 <= 0; ) for (; t2(e3, -1), !n3(e3); ) ;
    else for (; --r3 >= 0; ) for (; t2(e3, 1), !n3(e3); ) ;
  }), n2 && (i2.count = (t3, r3) => (S.setTime(+t3), C.setTime(+r3), e2(S), e2(C), Math.floor(n2(S, C))), i2.every = (e3) => (e3 = Math.floor(e3), !isFinite(e3) || !(e3 > 0) ? null : e3 > 1 ? i2.filter(r2 ? (t3) => r2(t3) % e3 === 0 : (t3) => i2.count(0, t3) % e3 === 0) : i2)), i2;
}
var T = w(() => {
}, (e2, t2) => {
  e2.setTime(+e2 + t2);
}, (e2, t2) => t2 - e2);
T[a(311)] = (e2) => (e2 = Math.floor(e2), !isFinite(e2) || !(e2 > 0) ? null : e2 > 1 ? w((t2) => {
  t2.setTime(Math.floor(t2 / e2) * e2);
}, (t2, n2) => {
  t2.setTime(+t2 + n2 * e2);
}, (t2, n2) => (n2 - t2) / e2) : T), T.range;
var E = 1e3, D = E * 60, O = D * 60, k = O * 24, A = k * 7, j = k * 30, M = k * 365, N = w((e2) => {
  e2.setTime(e2 - e2.getMilliseconds());
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * E);
}, (e2, t2) => (t2 - e2) / E, (e2) => e2[a(253)]());
N.range;
var P = w((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * E);
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * D);
}, (e2, t2) => (t2 - e2) / D, (e2) => e2.getMinutes());
P.range;
var F = w((e2) => {
  e2.setUTCSeconds(0, 0);
}, (e2, t2) => {
  e2[a(305)](+e2 + t2 * D);
}, (e2, t2) => (t2 - e2) / D, (e2) => e2.getUTCMinutes());
F[a(318)];
var I = w((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * E - e2.getMinutes() * D);
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * O);
}, (e2, t2) => (t2 - e2) / O, (e2) => e2.getHours());
I.range;
var ne = w((e2) => {
  e2.setUTCMinutes(0, 0, 0);
}, (e2, t2) => {
  e2.setTime(+e2 + t2 * O);
}, (e2, t2) => (t2 - e2) / O, (e2) => e2.getUTCHours());
ne.range;
var L = w((e2) => e2[a(288)](0, 0, 0, 0), (e2, t2) => e2.setDate(e2[a(306)]() + t2), (e2, t2) => (t2 - e2 - (t2[a(252)]() - e2[a(252)]()) * D) / k, (e2) => e2.getDate() - 1);
L.range;
var R = w((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2[a(276)](e2.getUTCDate() + t2);
}, (e2, t2) => (t2 - e2) / k, (e2) => e2[a(316)]() - 1);
R.range;
var re = w((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  var n2 = a;
  e2.setUTCDate(e2[n2(316)]() + t2);
}, (e2, t2) => (t2 - e2) / k, (e2) => Math.floor(e2 / k));
re.range;
function z(e2) {
  var t2 = a;
  return w((t3) => {
    t3.setDate(t3.getDate() - (t3.getDay() + 7 - e2) % 7), t3.setHours(0, 0, 0, 0);
  }, (e3, t3) => {
    e3[Q(286)](e3.getDate() + t3 * 7);
  }, (e3, n2) => (n2 - e3 - (n2.getTimezoneOffset() - e3[t2(252)]()) * D) / A);
}
var B = z(0), V = z(1), ie = z(2), ae = z(3), H = z(4), oe = z(5), se = z(6);
B.range, V.range, ie.range, ae.range, H.range, oe[a(318)], se.range;
function U(e2) {
  return w((t2) => {
    t2.setUTCDate(t2.getUTCDate() - (t2.getUTCDay() + 7 - e2) % 7), t2.setUTCHours(0, 0, 0, 0);
  }, (e3, t2) => {
    e3[Q(276)](e3.getUTCDate() + t2 * 7);
  }, (e3, t2) => (t2 - e3) / A);
}
var ce = U(0), le = U(1), ue = U(2), de = U(3), W = U(4), fe = U(5), pe = U(6);
ce.range, le.range, ue.range, de.range, W[a(318)], fe.range, pe.range;
var me = w((e2) => {
  var t2 = a;
  e2[t2(286)](1), e2[t2(288)](0, 0, 0, 0);
}, (e2, t2) => {
  e2[a(250)](e2.getMonth() + t2);
}, (e2, t2) => t2.getMonth() - e2.getMonth() + (t2[a(301)]() - e2[a(301)]()) * 12, (e2) => e2.getMonth());
me.range;
var he = w((e2) => {
  e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setUTCMonth(e2.getUTCMonth() + t2);
}, (e2, t2) => t2.getUTCMonth() - e2.getUTCMonth() + (t2.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
he.range;
var G = w((e2) => {
  e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setFullYear(e2.getFullYear() + t2);
}, (e2, t2) => t2.getFullYear() - e2.getFullYear(), (e2) => e2[a(301)]());
G.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : w((t2) => {
  var n2 = a;
  t2.setFullYear(Math[n2(296)](t2.getFullYear() / e2) * e2), t2[n2(250)](0, 1), t2.setHours(0, 0, 0, 0);
}, (t2, n2) => {
  t2.setFullYear(t2.getFullYear() + n2 * e2);
}), G.range;
var K = w((e2) => {
  e2[a(264)](0, 1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t2) => {
  e2.setUTCFullYear(e2.getUTCFullYear() + t2);
}, (e2, t2) => t2.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
K.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : w((t2) => {
  t2.setUTCFullYear(Math.floor(t2.getUTCFullYear() / e2) * e2), t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, (t2, n2) => {
  var r2 = a;
  t2[r2(255)](t2[r2(284)]() + n2 * e2);
}), K.range;
function ge(e2, t2, n2, a2, o2, s2) {
  let c2 = [[N, 1, E], [N, 5, 5 * E], [N, 15, 15 * E], [N, 30, 30 * E], [s2, 1, D], [s2, 5, 5 * D], [s2, 15, 15 * D], [s2, 30, 30 * D], [o2, 1, O], [o2, 3, 3 * O], [o2, 6, 6 * O], [o2, 12, 12 * O], [a2, 1, k], [a2, 2, 2 * k], [n2, 1, A], [t2, 1, j], [t2, 3, 3 * j], [e2, 1, M]];
  function l2(e3, t3, n3) {
    let r2 = t3 < e3;
    r2 && ([e3, t3] = [t3, e3]);
    let i2 = n3 && typeof n3.range == `function` ? n3 : u2(e3, t3, n3), a3 = i2 ? i2.range(e3, +t3 + 1) : [];
    return r2 ? a3.reverse() : a3;
  }
  function u2(t3, n3, a3) {
    var o3 = Q;
    let s3 = Math.abs(n3 - t3) / a3, l3 = r(([, , e3]) => e3).right(c2, s3);
    if (l3 === c2[o3(256)]) return e2.every(i(t3 / M, n3 / M, a3));
    if (l3 === 0) return T[o3(311)](Math.max(i(t3, n3, a3), 1));
    let [u3, d2] = c2[s3 / c2[l3 - 1][2] < c2[l3][2] / s3 ? l3 - 1 : l3];
    return u3[o3(311)](d2);
  }
  return [l2, u2];
}
var [_e, ve] = ge(K, he, ce, re, ne, F), [ye, be] = ge(G, me, B, L, I, P);
function xe(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t2 = new Date(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
    return t2.setFullYear(e2.y), t2;
  }
  return new Date(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
}
function Se(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t2 = new Date(Date.UTC(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
    return t2.setUTCFullYear(e2.y), t2;
  }
  return new Date(Date.UTC(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
}
function q(e2, t2, n2) {
  return { y: e2, m: t2, d: n2, H: 0, M: 0, S: 0, L: 0 };
}
function Ce(e2) {
  var t2 = a, n2 = e2.dateTime, r2 = e2.date, i2 = e2.time, o2 = e2[t2(247)], s2 = e2.days, c2 = e2.shortDays, l2 = e2.months, u2 = e2.shortMonths, d2 = X(o2), f2 = Z(o2), p2 = X(s2), m2 = Z(s2), ee2 = X(c2), h2 = Z(c2), te2 = X(l2), g2 = Z(l2), _2 = X(u2), v2 = Z(u2), y2 = { a: N2, A: P2, b: F2, B: I2, c: null, d: Je, e: Je, f: $e, g: ut, G: ft, H: Ye, I: Xe, j: Ze, L: Qe, m: et, M: tt, p: ne2, q: re2, Q: Ft, s: It, S: nt, u: rt, U: it, V: ot, w: st, W: ct, x: null, X: null, y: lt, Y: dt, Z: pt, "%": Pt }, b2 = { a: z2, A: B2, b: ie2, B: ae2, c: null, d: mt, e: mt, f: yt, g: At, G: Mt, H: ht, I: gt, j: _t, L: vt, m: bt, M: xt, p: H2, q: oe2, Q: Ft, s: It, S: St, u: Ct, U: wt, V: Et, w: Dt, W: Ot, x: null, X: null, y: kt, Y: jt, Z: Nt, "%": Pt }, x2 = { a: E2, A: D2, b: O2, B: k2, c: A2, d: Re, e: Re, f: We, g: Pe, G: Ne, H: Be, I: Be, j: ze, L: Ue, m: Le, M: Ve, p: T2, q: Ie, Q: Ke, s: qe, S: He, u: ke, U: Ae, V: je, w: Oe, W: Me, x: j2, X: M2, y: Pe, Y: Ne, Z: Fe, "%": Ge };
  y2.x = S2(r2, y2), y2.X = S2(i2, y2), y2.c = S2(n2, y2), b2.x = S2(r2, b2), b2.X = S2(i2, b2), b2.c = S2(n2, b2);
  function S2(e3, t3) {
    return function(n3) {
      var r3 = Q, i3 = [], a2 = -1, o3 = 0, s3 = e3.length, c3, l3, u3;
      for (n3 instanceof Date || (n3 = /* @__PURE__ */ new Date(+n3)); ++a2 < s3; ) e3.charCodeAt(a2) === 37 && (i3.push(e3.slice(o3, a2)), (l3 = we[c3 = e3[r3(258)](++a2)]) == null ? l3 = c3 === `e` ? ` ` : `0` : c3 = e3.charAt(++a2), (u3 = t3[c3]) && (c3 = u3(n3, l3)), i3.push(c3), o3 = a2 + 1);
      return i3.push(e3.slice(o3, a2)), i3.join(``);
    };
  }
  function C2(e3, t3) {
    return function(n3) {
      var r3 = Q, i3 = q(1900, void 0, 1), a2 = w2(i3, e3, n3 += ``, 0), o3, s3;
      if (a2 != n3.length) return null;
      if (`Q` in i3) return new Date(i3.Q);
      if (`s` in i3) return new Date(i3.s * 1e3 + (`L` in i3 ? i3.L : 0));
      if (t3 && !(`Z` in i3) && (i3.Z = 0), `p` in i3 && (i3.H = i3.H % 12 + i3.p * 12), i3.m === void 0 && (i3.m = `q` in i3 ? i3.q : 0), `V` in i3) {
        if (i3.V < 1 || i3.V > 53) return null;
        `w` in i3 || (i3.w = 1), `Z` in i3 ? (o3 = Se(q(i3.y, 0, 1)), s3 = o3[r3(257)](), o3 = s3 > 4 || s3 === 0 ? le.ceil(o3) : le(o3), o3 = R[r3(309)](o3, (i3.V - 1) * 7), i3.y = o3.getUTCFullYear(), i3.m = o3.getUTCMonth(), i3.d = o3[r3(316)]() + (i3.w + 6) % 7) : (o3 = xe(q(i3.y, 0, 1)), s3 = o3.getDay(), o3 = s3 > 4 || s3 === 0 ? V.ceil(o3) : V(o3), o3 = L.offset(o3, (i3.V - 1) * 7), i3.y = o3.getFullYear(), i3.m = o3.getMonth(), i3.d = o3.getDate() + (i3.w + 6) % 7);
      } else (`W` in i3 || `U` in i3) && (`w` in i3 || (i3.w = `u` in i3 ? i3.u % 7 : +(`W` in i3)), s3 = `Z` in i3 ? Se(q(i3.y, 0, 1)).getUTCDay() : xe(q(i3.y, 0, 1)).getDay(), i3.m = 0, i3.d = `W` in i3 ? (i3.w + 6) % 7 + i3.W * 7 - (s3 + 5) % 7 : i3.w + i3.U * 7 - (s3 + 6) % 7);
      return `Z` in i3 ? (i3.H += i3.Z / 100 | 0, i3.M += i3.Z % 100, Se(i3)) : xe(i3);
    };
  }
  function w2(e3, n3, r3, i3) {
    for (var a2 = t2, o3 = 0, s3 = n3.length, c3 = r3.length, l3, u3; o3 < s3; ) {
      if (i3 >= c3) return -1;
      if (l3 = n3.charCodeAt(o3++), l3 === 37) {
        if (l3 = n3.charAt(o3++), u3 = x2[l3 in we ? n3.charAt(o3++) : l3], !u3 || (i3 = u3(e3, r3, i3)) < 0) return -1;
      } else if (l3 != r3[a2(271)](i3++)) return -1;
    }
    return i3;
  }
  function T2(e3, n3, r3) {
    var i3 = t2, a2 = d2.exec(n3.slice(r3));
    return a2 ? (e3.p = f2[i3(298)](a2[0][i3(279)]()), r3 + a2[0].length) : -1;
  }
  function E2(e3, n3, r3) {
    var i3 = t2, a2 = ee2.exec(n3[i3(281)](r3));
    return a2 ? (e3.w = h2.get(a2[0].toLowerCase()), r3 + a2[0].length) : -1;
  }
  function D2(e3, t3, n3) {
    var r3 = p2.exec(t3.slice(n3));
    return r3 ? (e3.w = m2.get(r3[0].toLowerCase()), n3 + r3[0].length) : -1;
  }
  function O2(e3, n3, r3) {
    var i3 = _2[t2(275)](n3.slice(r3));
    return i3 ? (e3.m = v2.get(i3[0].toLowerCase()), r3 + i3[0].length) : -1;
  }
  function k2(e3, n3, r3) {
    var i3 = te2[t2(275)](n3.slice(r3));
    return i3 ? (e3.m = g2.get(i3[0].toLowerCase()), r3 + i3[0].length) : -1;
  }
  function A2(e3, t3, r3) {
    return w2(e3, n2, t3, r3);
  }
  function j2(e3, t3, n3) {
    return w2(e3, r2, t3, n3);
  }
  function M2(e3, t3, n3) {
    return w2(e3, i2, t3, n3);
  }
  function N2(e3) {
    return c2[e3.getDay()];
  }
  function P2(e3) {
    return s2[e3[t2(291)]()];
  }
  function F2(e3) {
    return u2[e3.getMonth()];
  }
  function I2(e3) {
    return l2[e3.getMonth()];
  }
  function ne2(e3) {
    return o2[+(e3.getHours() >= 12)];
  }
  function re2(e3) {
    return 1 + ~~(e3.getMonth() / 3);
  }
  function z2(e3) {
    return c2[e3.getUTCDay()];
  }
  function B2(e3) {
    return s2[e3.getUTCDay()];
  }
  function ie2(e3) {
    return u2[e3.getUTCMonth()];
  }
  function ae2(e3) {
    return l2[e3.getUTCMonth()];
  }
  function H2(e3) {
    return o2[+(e3.getUTCHours() >= 12)];
  }
  function oe2(e3) {
    return 1 + ~~(e3.getUTCMonth() / 3);
  }
  return { format: function(e3) {
    var n3 = t2, r3 = S2(e3 += ``, y2);
    return r3[n3(274)] = function() {
      return e3;
    }, r3;
  }, parse: function(e3) {
    var n3 = t2, r3 = C2(e3 += ``, false);
    return r3[n3(274)] = function() {
      return e3;
    }, r3;
  }, utcFormat: function(e3) {
    var t3 = S2(e3 += ``, b2);
    return t3.toString = function() {
      return e3;
    }, t3;
  }, utcParse: function(e3) {
    var n3 = t2, r3 = C2(e3 += ``, true);
    return r3[n3(274)] = function() {
      return e3;
    }, r3;
  } };
}
var we = { "-": ``, _: ` `, 0: `0` }, J = /^\s*\d+/, Te = /^%/, Ee = /[\\^$*+?|[\]().{}]/g;
function Y(e2, t2, n2) {
  var r2 = e2 < 0 ? `-` : ``, i2 = (r2 ? -e2 : e2) + ``, a2 = i2.length;
  return r2 + (a2 < n2 ? Array(n2 - a2 + 1).join(t2) + i2 : i2);
}
function De(e2) {
  return e2.replace(Ee, `\\$&`);
}
function X(e2) {
  var t2 = a;
  return RegExp(t2(273) + e2.map(De)[t2(307)](`|`) + `)`, `i`);
}
function Z(e2) {
  return new Map(e2.map((e3, t2) => [e3.toLowerCase(), t2]));
}
function Oe(e2, t2, n2) {
  var r2 = J[a(275)](t2.slice(n2, n2 + 1));
  return r2 ? (e2.w = +r2[0], n2 + r2[0].length) : -1;
}
function ke(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 1));
  return r2 ? (e2.u = +r2[0], n2 + r2[0].length) : -1;
}
function Ae(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.U = +r2[0], n2 + r2[0].length) : -1;
}
function je(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.V = +r2[0], n2 + r2[0].length) : -1;
}
function Me(e2, t2, n2) {
  var r2 = a, i2 = J.exec(t2.slice(n2, n2 + 2));
  return i2 ? (e2.W = +i2[0], n2 + i2[0][r2(256)]) : -1;
}
function Ne(e2, t2, n2) {
  var r2 = a, i2 = J[r2(275)](t2[r2(281)](n2, n2 + 4));
  return i2 ? (e2.y = +i2[0], n2 + i2[0].length) : -1;
}
function Pe(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.y = +r2[0] + (+r2[0] > 68 ? 1900 : 2e3), n2 + r2[0].length) : -1;
}
function Fe(e2, t2, n2) {
  var r2 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t2.slice(n2, n2 + 6));
  return r2 ? (e2.Z = r2[1] ? 0 : -(r2[2] + (r2[3] || `00`)), n2 + r2[0].length) : -1;
}
function Ie(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 1));
  return r2 ? (e2.q = r2[0] * 3 - 3, n2 + r2[0].length) : -1;
}
function Le(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.m = r2[0] - 1, n2 + r2[0].length) : -1;
}
function Re(e2, t2, n2) {
  var r2 = a, i2 = J.exec(t2.slice(n2, n2 + 2));
  return i2 ? (e2.d = +i2[0], n2 + i2[0][r2(256)]) : -1;
}
function ze(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 3));
  return r2 ? (e2.m = 0, e2.d = +r2[0], n2 + r2[0].length) : -1;
}
function Be(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.H = +r2[0], n2 + r2[0].length) : -1;
}
function Ve(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2, n2 + 2));
  return r2 ? (e2.M = +r2[0], n2 + r2[0].length) : -1;
}
function He(e2, t2, n2) {
  var r2 = a, i2 = J.exec(t2[r2(281)](n2, n2 + 2));
  return i2 ? (e2.S = +i2[0], n2 + i2[0].length) : -1;
}
function Ue(e2, t2, n2) {
  var r2 = a, i2 = J.exec(t2.slice(n2, n2 + 3));
  return i2 ? (e2.L = +i2[0], n2 + i2[0][r2(256)]) : -1;
}
function We(e2, t2, n2) {
  var r2 = a, i2 = J.exec(t2.slice(n2, n2 + 6));
  return i2 ? (e2.L = Math[r2(296)](i2[0] / 1e3), n2 + i2[0].length) : -1;
}
function Ge(e2, t2, n2) {
  var r2 = Te.exec(t2.slice(n2, n2 + 1));
  return r2 ? n2 + r2[0].length : -1;
}
function Ke(e2, t2, n2) {
  var r2 = a, i2 = J.exec(t2.slice(n2));
  return i2 ? (e2.Q = +i2[0], n2 + i2[0][r2(256)]) : -1;
}
function qe(e2, t2, n2) {
  var r2 = J.exec(t2.slice(n2));
  return r2 ? (e2.s = +r2[0], n2 + r2[0].length) : -1;
}
function Je(e2, t2) {
  return Y(e2.getDate(), t2, 2);
}
function Ye(e2, t2) {
  return Y(e2.getHours(), t2, 2);
}
function Xe(e2, t2) {
  return Y(e2.getHours() % 12 || 12, t2, 2);
}
function Ze(e2, t2) {
  return Y(1 + L[a(289)](G(e2), e2), t2, 3);
}
function Qe(e2, t2) {
  return Y(e2.getMilliseconds(), t2, 3);
}
function $e(e2, t2) {
  var n2 = a;
  return Qe(e2, t2) + n2(297);
}
function et(e2, t2) {
  return Y(e2.getMonth() + 1, t2, 2);
}
function tt(e2, t2) {
  return Y(e2[a(313)](), t2, 2);
}
function nt(e2, t2) {
  return Y(e2.getSeconds(), t2, 2);
}
function rt(e2) {
  var t2 = e2.getDay();
  return t2 === 0 ? 7 : t2;
}
function it(e2, t2) {
  return Y(B[a(289)](G(e2) - 1, e2), t2, 2);
}
function at(e2) {
  var t2 = e2.getDay();
  return t2 >= 4 || t2 === 0 ? H(e2) : H.ceil(e2);
}
function ot(e2, t2) {
  var n2 = a;
  return e2 = at(e2), Y(H[n2(289)](G(e2), e2) + (G(e2).getDay() === 4), t2, 2);
}
function st(e2) {
  return e2.getDay();
}
function ct(e2, t2) {
  return Y(V.count(G(e2) - 1, e2), t2, 2);
}
function Q(e2, t2) {
  return e2 -= 247, m()[e2];
}
function lt(e2, t2) {
  return Y(e2.getFullYear() % 100, t2, 2);
}
function ut(e2, t2) {
  return e2 = at(e2), Y(e2.getFullYear() % 100, t2, 2);
}
function dt(e2, t2) {
  return Y(e2.getFullYear() % 1e4, t2, 4);
}
function ft(e2, t2) {
  var n2 = a, r2 = e2[n2(291)]();
  return e2 = r2 >= 4 || r2 === 0 ? H(e2) : H[n2(310)](e2), Y(e2[n2(301)]() % 1e4, t2, 4);
}
function pt(e2) {
  var t2 = e2[a(252)]();
  return (t2 > 0 ? `-` : (t2 *= -1, `+`)) + Y(t2 / 60 | 0, `0`, 2) + Y(t2 % 60, `0`, 2);
}
function mt(e2, t2) {
  return Y(e2.getUTCDate(), t2, 2);
}
function ht(e2, t2) {
  return Y(e2[a(259)](), t2, 2);
}
function gt(e2, t2) {
  return Y(e2.getUTCHours() % 12 || 12, t2, 2);
}
function _t(e2, t2) {
  return Y(1 + R.count(K(e2), e2), t2, 3);
}
function vt(e2, t2) {
  return Y(e2.getUTCMilliseconds(), t2, 3);
}
function yt(e2, t2) {
  return vt(e2, t2) + `000`;
}
function bt(e2, t2) {
  return Y(e2.getUTCMonth() + 1, t2, 2);
}
function xt(e2, t2) {
  return Y(e2.getUTCMinutes(), t2, 2);
}
function St(e2, t2) {
  return Y(e2.getUTCSeconds(), t2, 2);
}
function Ct(e2) {
  var t2 = e2.getUTCDay();
  return t2 === 0 ? 7 : t2;
}
function wt(e2, t2) {
  return Y(ce.count(K(e2) - 1, e2), t2, 2);
}
function Tt(e2) {
  var t2 = a, n2 = e2.getUTCDay();
  return n2 >= 4 || n2 === 0 ? W(e2) : W[t2(310)](e2);
}
function Et(e2, t2) {
  return e2 = Tt(e2), Y(W.count(K(e2), e2) + (K(e2).getUTCDay() === 4), t2, 2);
}
function Dt(e2) {
  return e2.getUTCDay();
}
function Ot(e2, t2) {
  return Y(le.count(K(e2) - 1, e2), t2, 2);
}
function kt(e2, t2) {
  return Y(e2.getUTCFullYear() % 100, t2, 2);
}
function At(e2, t2) {
  return e2 = Tt(e2), Y(e2.getUTCFullYear() % 100, t2, 2);
}
function jt(e2, t2) {
  return Y(e2.getUTCFullYear() % 1e4, t2, 4);
}
function Mt(e2, t2) {
  var n2 = e2[a(257)]();
  return e2 = n2 >= 4 || n2 === 0 ? W(e2) : W.ceil(e2), Y(e2.getUTCFullYear() % 1e4, t2, 4);
}
function Nt() {
  return `+0000`;
}
function Pt() {
  return `%`;
}
function Ft(e2) {
  return +e2;
}
function It(e2) {
  return Math.floor(e2 / 1e3);
}
var $, Lt, Rt, zt, Bt;
Vt({ dateTime: `%x, %X`, date: a(294), time: `%-I:%M:%S %p`, periods: [`AM`, `PM`], days: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, a(317), `Saturday`], shortDays: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`], months: [`January`, `February`, `March`, a(266), `May`, `June`, `July`, a(268), `September`, `October`, `November`, `December`], shortMonths: [`Jan`, `Feb`, `Mar`, `Apr`, a(249), `Jun`, `Jul`, `Aug`, a(254), `Oct`, `Nov`, `Dec`] });
function Vt(e2) {
  return $ = Ce(e2), Lt = $.format, Rt = $.parse, zt = $.utcFormat, Bt = $.utcParse, $;
}
function Ht(e2) {
  return new Date(e2);
}
function Ut(e2) {
  return e2 instanceof Date ? +e2 : +/* @__PURE__ */ new Date(+e2);
}
function Wt(e2, r2, i2, o2, s2, c2, l2, u2, d2, f2) {
  var p2 = a, m2 = t(), ee2 = m2.invert, h2 = m2[p2(283)], te2 = f2(p2(293)), g2 = f2(`:%S`), _2 = f2(`%I:%M`), v2 = f2(`%I %p`), y2 = f2(`%a %d`), b2 = f2(`%b %d`), S2 = f2(`%B`), C2 = f2(`%Y`);
  function w2(e3) {
    return (d2(e3) < e3 ? te2 : u2(e3) < e3 ? g2 : l2(e3) < e3 ? _2 : c2(e3) < e3 ? v2 : o2(e3) < e3 ? s2(e3) < e3 ? y2 : b2 : i2(e3) < e3 ? S2 : C2)(e3);
  }
  return m2.invert = function(e3) {
    return new Date(ee2(e3));
  }, m2.domain = function(e3) {
    return arguments.length ? h2(Array.from(e3, Ut)) : h2().map(Ht);
  }, m2.ticks = function(t2) {
    var n2 = h2();
    return e2(n2[0], n2[n2.length - 1], t2 ?? 10);
  }, m2[p2(287)] = function(e3, t2) {
    return t2 == null ? w2 : f2(t2);
  }, m2.nice = function(e3) {
    var t2 = h2();
    return (!e3 || typeof e3.range != `function`) && (e3 = r2(t2[0], t2[t2.length - 1], e3 ?? 10)), e3 ? h2(x(t2, e3)) : m2;
  }, m2.copy = function() {
    return n(m2, Wt(e2, r2, i2, o2, s2, c2, l2, u2, d2, f2));
  }, m2;
}
function Gt() {
  return e[a(300)](Wt(ye, be, G, me, B, L, I, P, N, Lt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
export {
  b as A,
  ie as C,
  oe as D,
  ne as E,
  V as M,
  K as O,
  ve as S,
  _e as T,
  y as _,
  me as a,
  v as b,
  R as c,
  P as d,
  F as f,
  Wt as g,
  B as h,
  Rt as i,
  x as j,
  se as k,
  zt as l,
  Lt as m,
  T as n,
  ce as o,
  I as p,
  L as r,
  Gt as s,
  H as t,
  Bt as u,
  ae as v,
  N as w,
  _ as x,
  he as y
};
