import { $ as e, A as t, B as n, C as r, D as i, E as a, F as o, G as s, H as c, I as l, J as u, K as d, L as f, M as p, N as m, O as h, P as g, Q as _, R as ee, S as te, T as ne, U as re, V as v, W as ie, X as ae, Y as oe, Z as se, _ as ce, a as le, b as ue, c as de, d as fe, et as y, f as pe, g as me, h as he, i as ge, it as _e, j as b, k as x, l as S, m as ve, n as ye, nt as C, o as w, p as be, q as xe, r as Se, rt as T, s as Ce, t as we, tt as E, u as Te, v as Ee, w as De, x as Oe, y as ke, z as Ae } from "./graphlib-DTFeuqXt.js";
var D = F;
(function(e2, t2) {
  for (var n2 = F, r2 = e2(); ; ) try {
    if (-parseInt(n2(480)) / 1 * (-parseInt(n2(428)) / 2) + -parseInt(n2(467)) / 3 + parseInt(n2(413)) / 4 + parseInt(n2(437)) / 5 + -parseInt(n2(484)) / 6 + parseInt(n2(417)) / 7 + parseInt(n2(435)) / 8 * (parseInt(n2(421)) / 9) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Y, 375794);
var je = /\s/;
function Me(e2) {
  for (var t2 = e2.length; t2-- && je.test(e2.charAt(t2)); ) ;
  return t2;
}
var Ne = /^\s+/;
function Pe(e2) {
  return e2 && e2.slice(0, Me(e2) + 1).replace(Ne, ``);
}
var Fe = NaN, Ie = /^[-+]0x[0-9a-f]+$/i, Le = /^0b[01]+$/i, Re = /^0o[0-7]+$/i, ze = parseInt;
function Be(e2) {
  var t2 = F;
  if (typeof e2 == `number`) return e2;
  if (o(e2)) return Fe;
  if (f(e2)) {
    var n2 = typeof e2.valueOf == `function` ? e2.valueOf() : e2;
    e2 = f(n2) ? n2 + `` : n2;
  }
  if (typeof e2 != t2(408)) return e2 === 0 ? e2 : +e2;
  e2 = Pe(e2);
  var r2 = Le[t2(450)](e2);
  return r2 || Re.test(e2) ? ze(e2.slice(2), r2 ? 2 : 8) : Ie.test(e2) ? Fe : +e2;
}
var Ve = 1 / 0, He = 17976931348623157e292;
function O(e2) {
  return e2 ? (e2 = Be(e2), e2 === Ve || e2 === -Ve ? (e2 < 0 ? -1 : 1) * He : e2 === e2 ? e2 : 0) : e2 === 0 ? e2 : 0;
}
function Ue(e2) {
  var t2 = O(e2), n2 = t2 % 1;
  return t2 === t2 ? n2 ? t2 - n2 : t2 : 0;
}
var We = Object.create, Ge = /* @__PURE__ */ (function() {
  function e2() {
  }
  return function(t2) {
    if (!f(t2)) return {};
    if (We) return We(t2);
    e2.prototype = t2;
    var n2 = new e2();
    return e2.prototype = void 0, n2;
  };
})();
function Ke(e2, t2) {
  var n2 = -1, r2 = e2.length;
  for (t2 || (t2 = Array(r2)); ++n2 < r2; ) t2[n2] = e2[n2];
  return t2;
}
function k(e2, t2, n2) {
  t2 == `__proto__` && he ? he(e2, t2, { configurable: true, enumerable: true, value: n2, writable: true }) : e2[t2] = n2;
}
var qe = Object.prototype.hasOwnProperty;
function A(e2, t2, n2) {
  var r2 = e2[t2];
  (!(qe.call(e2, t2) && T(r2, n2)) || n2 === void 0 && !(t2 in e2)) && k(e2, t2, n2);
}
function j(e2, t2, n2, r2) {
  var i2 = F, a2 = !n2;
  n2 || (n2 = {});
  for (var o2 = -1, s2 = t2[i2(479)]; ++o2 < s2; ) {
    var c2 = t2[o2], l2 = r2 ? r2(n2[c2], e2[c2], c2, n2, e2) : void 0;
    l2 === void 0 && (l2 = e2[c2]), a2 ? k(n2, c2, l2) : A(n2, c2, l2);
  }
  return n2;
}
function M(e2, t2, n2) {
  var r2 = F;
  if (!f(n2)) return false;
  var i2 = typeof t2;
  return (i2 == `number` ? w(n2) && ke(t2, n2.length) : i2 == r2(408) && t2 in n2) ? T(n2[t2], e2) : false;
}
function Je(e2) {
  return de(function(t2, n2) {
    var r2 = F, i2 = -1, a2 = n2[r2(479)], o2 = a2 > 1 ? n2[a2 - 1] : void 0, s2 = a2 > 2 ? n2[2] : void 0;
    for (o2 = e2.length > 3 && typeof o2 == `function` ? (a2--, o2) : void 0, s2 && M(n2[0], n2[1], s2) && (o2 = a2 < 3 ? void 0 : o2, a2 = 1), t2 = Object(t2); ++i2 < a2; ) {
      var c2 = n2[i2];
      c2 && e2(t2, c2, i2, o2);
    }
    return t2;
  });
}
function Ye(e2) {
  var t2 = [];
  if (e2 != null) for (var n2 in Object(e2)) t2.push(n2);
  return t2;
}
var Xe = Object[D(439)].hasOwnProperty;
function Ze(e2) {
  var t2 = D;
  if (!f(e2)) return Ye(e2);
  var n2 = fe(e2), r2 = [];
  for (var i2 in e2) i2 == `constructor` && (n2 || !Xe.call(e2, i2)) || r2[t2(438)](i2);
  return r2;
}
function N(e2) {
  return w(e2) ? Ee(e2, true) : Ze(e2);
}
function P(e2) {
  return e2 != null && e2[D(479)] ? ne(e2, 1) : [];
}
function Qe(e2) {
  return d(h(e2, void 0, P), e2 + ``);
}
var $e = Ce(Object.getPrototypeOf, Object), et = `[object Object]`, tt = Function.prototype, nt = Object.prototype, rt = tt.toString, it = nt.hasOwnProperty, at = rt.call(Object);
function ot(e2) {
  if (!v(e2) || xe(e2) != et) return false;
  var t2 = $e(e2);
  if (t2 === null) return true;
  var n2 = it.call(t2, `constructor`) && t2.constructor;
  return typeof n2 == `function` && n2 instanceof n2 && rt.call(n2) == at;
}
var st = RegExp(`[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]`);
function ct(e2) {
  return st.test(e2);
}
function lt(e2, t2) {
  return e2 && j(t2, be(t2), e2);
}
function F(e2, t2) {
  return e2 -= 396, Y()[e2];
}
function ut(e2, t2) {
  return e2 && j(t2, N(t2), e2);
}
var dt = typeof exports == `object` && exports && !exports.nodeType && exports, ft = dt && typeof module == `object` && module && !module.nodeType && module, pt = ft && ft.exports === dt ? u.Buffer : void 0, mt = pt ? pt.allocUnsafe : void 0;
function ht(e2, t2) {
  if (t2) return e2.slice();
  var n2 = e2.length, r2 = mt ? mt(n2) : new e2.constructor(n2);
  return e2.copy(r2), r2;
}
function gt(e2, t2) {
  return j(e2, pe(e2), t2);
}
var _t = Object.getOwnPropertySymbols ? function(e2) {
  for (var t2 = []; e2; ) r(t2, pe(e2)), e2 = $e(e2);
  return t2;
} : ce;
function vt(e2, t2) {
  return j(e2, _t(e2), t2);
}
function yt(e2) {
  return ue(e2, N, _t);
}
var bt = Object[D(439)].hasOwnProperty;
function xt(e2) {
  var t2 = D, n2 = e2.length, r2 = new e2.constructor(n2);
  return n2 && typeof e2[0] == `string` && bt[t2(452)](e2, `index`) && (r2.index = e2.index, r2.input = e2.input), r2;
}
function St(e2) {
  var t2 = new e2.constructor(e2.byteLength);
  return new we(t2).set(new we(e2)), t2;
}
function Ct(e2, t2) {
  var n2 = D, r2 = t2 ? St(e2.buffer) : e2.buffer;
  return new e2.constructor(r2, e2.byteOffset, e2[n2(441)]);
}
var wt = /\w*$/;
function Tt(e2) {
  var t2 = D, n2 = new e2.constructor(e2[t2(444)], wt[t2(418)](e2));
  return n2[t2(491)] = e2.lastIndex, n2;
}
var Et = se ? se.prototype : void 0, Dt = Et ? Et.valueOf : void 0;
function Ot(e2) {
  return Dt ? Object(Dt.call(e2)) : {};
}
function kt(e2, t2) {
  var n2 = t2 ? St(e2.buffer) : e2.buffer;
  return new e2.constructor(n2, e2.byteOffset, e2.length);
}
var At = `[object Boolean]`, jt = `[object Date]`, Mt = `[object Map]`, Nt = `[object Number]`, Pt = `[object RegExp]`, Ft = `[object Set]`, It = `[object String]`, Lt = `[object Symbol]`, Rt = `[object ArrayBuffer]`, zt = `[object DataView]`, Bt = D(424), Vt = D(427), Ht = `[object Int8Array]`, Ut = D(425), Wt = `[object Int32Array]`, Gt = D(440), Kt = D(436), qt = `[object Uint16Array]`, Jt = `[object Uint32Array]`;
function Yt(e2, t2, n2) {
  var r2 = e2.constructor;
  switch (t2) {
    case Rt:
      return St(e2);
    case At:
    case jt:
      return new r2(+e2);
    case zt:
      return Ct(e2, n2);
    case Bt:
    case Vt:
    case Ht:
    case Ut:
    case Wt:
    case Gt:
    case Kt:
    case qt:
    case Jt:
      return kt(e2, n2);
    case Mt:
      return new r2();
    case Nt:
    case It:
      return new r2(e2);
    case Pt:
      return Tt(e2);
    case Ft:
      return new r2();
    case Lt:
      return Ot(e2);
  }
}
function Xt(e2) {
  return typeof e2.constructor == `function` && !fe(e2) ? Ge($e(e2)) : {};
}
var Zt = `[object Map]`;
function Qt(e2) {
  return v(e2) && x(e2) == Zt;
}
var $t = s && s.isMap, en = $t ? me($t) : Qt, tn = `[object Set]`;
function nn(e2) {
  return v(e2) && x(e2) == tn;
}
var rn = s && s.isSet, an = rn ? me(rn) : nn, on = 1, sn = 2, cn = 4, ln = `[object Arguments]`, un = `[object Array]`, dn = `[object Boolean]`, fn = `[object Date]`, pn = `[object Error]`, mn = `[object Function]`, hn = `[object GeneratorFunction]`, gn = D(460), _n = `[object Number]`, vn = D(461), yn = `[object RegExp]`, bn = `[object Set]`, xn = D(405), Sn = `[object Symbol]`, Cn = D(457), wn = `[object ArrayBuffer]`, Tn = `[object DataView]`, En = `[object Float32Array]`, Dn = D(427), On = `[object Int8Array]`, kn = D(425), An = `[object Int32Array]`, jn = `[object Uint8Array]`, Mn = D(436), Nn = `[object Uint16Array]`, Pn = D(474), I = {};
I[ln] = I[un] = I[wn] = I[Tn] = I[dn] = I[fn] = I[En] = I[Dn] = I[On] = I[kn] = I[An] = I[gn] = I[_n] = I[vn] = I[yn] = I[bn] = I[xn] = I[Sn] = I[jn] = I[Mn] = I[Nn] = I[Pn] = true, I[pn] = I[mn] = I[Cn] = false;
function L(e2, t2, n2, r2, a2, o2) {
  var s2, c2 = t2 & on, l2 = t2 & sn, u2 = t2 & cn;
  if (n2 && (s2 = a2 ? n2(e2, r2, a2, o2) : n2(e2)), s2 !== void 0) return s2;
  if (!f(e2)) return e2;
  var d2 = E(e2);
  if (d2) {
    if (s2 = xt(e2), !c2) return Ke(e2, s2);
  } else {
    var p2 = x(e2), m2 = p2 == mn || p2 == hn;
    if (ve(e2)) return ht(e2, c2);
    if (p2 == vn || p2 == ln || m2 && !a2) {
      if (s2 = l2 || m2 ? {} : Xt(e2), !c2) return l2 ? vt(e2, ut(s2, e2)) : gt(e2, lt(s2, e2));
    } else {
      if (!I[p2]) return a2 ? e2 : {};
      s2 = Yt(e2, p2, c2);
    }
  }
  o2 || (o2 = new i());
  var h2 = o2.get(e2);
  if (h2) return h2;
  o2.set(e2, s2), an(e2) ? e2.forEach(function(r3) {
    s2[F(470)](L(r3, t2, n2, r3, e2, o2));
  }) : en(e2) && e2.forEach(function(r3, i2) {
    s2.set(i2, L(r3, t2, n2, i2, e2, o2));
  });
  var g2 = d2 ? void 0 : (u2 ? l2 ? yt : _e : l2 ? N : be)(e2);
  return Se(g2 || e2, function(r3, i2) {
    g2 && (i2 = r3, r3 = e2[i2]), A(s2, i2, L(r3, t2, n2, i2, e2, o2));
  }), s2;
}
var Fn = 1, In = 4;
function Ln(e2) {
  return L(e2, Fn | In);
}
var Rn = function() {
  return u.Date.now();
}, zn = Object.prototype, Bn = zn.hasOwnProperty, Vn = de(function(e2, t2) {
  e2 = Object(e2);
  var n2 = -1, r2 = t2.length, i2 = r2 > 2 ? t2[2] : void 0;
  for (i2 && M(t2[0], t2[1], i2) && (r2 = 1); ++n2 < r2; ) for (var a2 = t2[n2], o2 = N(a2), s2 = -1, c2 = o2.length; ++s2 < c2; ) {
    var l2 = o2[s2], u2 = e2[l2];
    (u2 === void 0 || T(u2, zn[l2]) && !Bn.call(e2, l2)) && (e2[l2] = a2[l2]);
  }
  return e2;
});
function Hn(e2, t2, n2) {
  (n2 !== void 0 && !T(e2[t2], n2) || n2 === void 0 && !(t2 in e2)) && k(e2, t2, n2);
}
function Un(e2, t2) {
  if (!(t2 === D(447) && typeof e2[t2] == `function`) && t2 != `__proto__`) return e2[t2];
}
function Wn(e2) {
  return j(e2, N(e2));
}
function Gn(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = Un(e2, n2), c2 = Un(t2, n2), l2 = o2.get(c2);
  if (l2) {
    Hn(e2, n2, l2);
    return;
  }
  var u2 = a2 ? a2(s2, c2, n2 + ``, e2, t2, o2) : void 0, d2 = u2 === void 0;
  if (d2) {
    var p2 = E(c2), m2 = !p2 && ve(c2), h2 = !p2 && !m2 && re(c2);
    u2 = c2, p2 || m2 || h2 ? E(s2) ? u2 = s2 : oe(s2) ? u2 = Ke(s2) : m2 ? (d2 = false, u2 = ht(c2, true)) : h2 ? (d2 = false, u2 = kt(c2, true)) : u2 = [] : ot(c2) || le(c2) ? (u2 = s2, le(s2) ? u2 = Wn(s2) : (!f(s2) || te(s2)) && (u2 = Xt(c2))) : d2 = false;
  }
  d2 && (o2.set(c2, u2), i2(u2, c2, r2, a2, o2), o2.delete(c2)), Hn(e2, n2, u2);
}
function Kn(e2, t2, n2, r2, a2) {
  e2 !== t2 && ye(t2, function(o2, s2) {
    if (a2 || (a2 = new i()), f(o2)) Gn(e2, t2, s2, n2, Kn, r2, a2);
    else {
      var c2 = r2 ? r2(Un(e2, s2), o2, s2 + ``, e2, t2, a2) : void 0;
      c2 === void 0 && (c2 = o2), Hn(e2, s2, c2);
    }
  }, N);
}
function R(e2) {
  var t2 = e2 == null ? 0 : e2.length;
  return t2 ? e2[t2 - 1] : void 0;
}
function qn(e2) {
  return function(t2, n2, r2) {
    var i2 = Object(t2);
    if (!w(t2)) {
      var a2 = g(n2, 3);
      t2 = be(t2), n2 = function(e3) {
        return a2(i2[e3], e3, i2);
      };
    }
    var o2 = e2(t2, n2, r2);
    return o2 > -1 ? i2[a2 ? t2[o2] : o2] : void 0;
  };
}
var Jn = Math.max;
function Yn(e2, t2, n2) {
  var r2 = e2 == null ? 0 : e2[D(479)];
  if (!r2) return -1;
  var i2 = n2 == null ? 0 : Ue(n2);
  return i2 < 0 && (i2 = Jn(r2 + i2, 0)), ie(e2, g(t2, 3), i2);
}
var Xn = qn(Yn);
function Zn(e2, t2) {
  var n2 = -1, r2 = w(e2) ? Array(e2.length) : [];
  return ae(e2, function(e3, i2, a2) {
    r2[++n2] = t2(e3, i2, a2);
  }), r2;
}
function z(e2, t2) {
  return (E(e2) ? _ : Zn)(e2, g(t2, 3));
}
function Qn(e2, t2) {
  return e2 == null ? e2 : ye(e2, c(t2), N);
}
function $n(e2, t2) {
  return e2 && Ae(e2, c(t2));
}
function er(e2, t2) {
  return e2 > t2;
}
var tr = Object.prototype.hasOwnProperty;
function nr(e2, t2) {
  return e2 != null && tr.call(e2, t2);
}
function rr(e2, t2) {
  return e2 != null && a(e2, t2, nr);
}
var ir = D(405);
function ar(e2) {
  return typeof e2 == `string` || !E(e2) && v(e2) && xe(e2) == ir;
}
function or(e2, t2) {
  return e2 < t2;
}
function B(e2, t2) {
  var n2 = {};
  return t2 = g(t2, 3), Ae(e2, function(e3, r2, i2) {
    k(n2, r2, t2(e3, r2, i2));
  }), n2;
}
function sr(e2, t2, n2) {
  for (var r2 = -1, i2 = e2.length; ++r2 < i2; ) {
    var a2 = e2[r2], s2 = t2(a2);
    if (s2 != null && (c2 === void 0 ? s2 === s2 && !o(s2) : n2(s2, c2))) var c2 = s2, l2 = a2;
  }
  return l2;
}
function V(e2) {
  return e2 && e2.length ? sr(e2, y, er) : void 0;
}
var cr = Je(function(e2, t2, n2) {
  Kn(e2, t2, n2);
});
function H(e2) {
  return e2 && e2.length ? sr(e2, y, or) : void 0;
}
function U(e2, t2) {
  return e2 && e2.length ? sr(e2, g(t2, 2), or) : void 0;
}
function lr(t2, n2, r2, i2) {
  if (!f(t2)) return t2;
  n2 = e(n2, t2);
  for (var a2 = -1, o2 = n2.length, s2 = o2 - 1, c2 = t2; c2 != null && ++a2 < o2; ) {
    var l2 = ge(n2[a2]), u2 = r2;
    if (l2 === `__proto__` || l2 === `constructor` || l2 === `prototype`) return t2;
    if (a2 != s2) {
      var d2 = c2[l2];
      u2 = i2 ? i2(d2, l2, c2) : void 0, u2 === void 0 && (u2 = f(d2) ? d2 : ke(n2[a2 + 1]) ? [] : {});
    }
    A(c2, l2, u2), c2 = c2[l2];
  }
  return t2;
}
function ur(t2, n2, r2) {
  for (var i2 = D, a2 = -1, o2 = n2[i2(479)], s2 = {}; ++a2 < o2; ) {
    var c2 = n2[a2], l2 = ee(t2, c2);
    r2(l2, c2) && lr(s2, e(c2, t2), l2);
  }
  return s2;
}
function dr(e2, t2) {
  var n2 = e2.length;
  for (e2.sort(t2); n2--; ) e2[n2] = e2[n2].value;
  return e2;
}
function fr(e2, t2) {
  if (e2 !== t2) {
    var n2 = e2 !== void 0, r2 = e2 === null, i2 = e2 === e2, a2 = o(e2), s2 = t2 !== void 0, c2 = t2 === null, l2 = t2 === t2, u2 = o(t2);
    if (!c2 && !u2 && !a2 && e2 > t2 || a2 && s2 && l2 && !c2 && !u2 || r2 && s2 && l2 || !n2 && l2 || !i2) return 1;
    if (!r2 && !a2 && !u2 && e2 < t2 || u2 && n2 && i2 && !r2 && !a2 || c2 && n2 && i2 || !s2 && i2 || !l2) return -1;
  }
  return 0;
}
function pr(e2, t2, n2) {
  for (var r2 = D, i2 = -1, a2 = e2.criteria, o2 = t2.criteria, s2 = a2.length, c2 = n2.length; ++i2 < s2; ) {
    var l2 = fr(a2[i2], o2[i2]);
    if (l2) return i2 >= c2 ? l2 : l2 * (n2[i2] == `desc` ? -1 : 1);
  }
  return e2[r2(451)] - t2.index;
}
function mr(e2, t2, n2) {
  t2 = t2.length ? _(t2, function(e3) {
    return E(e3) ? function(t3) {
      return ee(t3, e3[F(479)] === 1 ? e3[0] : e3);
    } : e3;
  }) : [y];
  var r2 = -1;
  return t2 = _(t2, me(g)), dr(Zn(e2, function(e3, n3, i2) {
    return { criteria: _(t2, function(t3) {
      return t3(e3);
    }), index: ++r2, value: e3 };
  }), function(e3, t3) {
    return pr(e3, t3, n2);
  });
}
var hr = Te(D(479)), gr = `\\ud800-\\udfff`, _r = `\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`, vr = `\\ufe0e\\ufe0f`, yr = `[` + gr + `]`, W = `[` + _r + `]`, br = `\\ud83c[\\udffb-\\udfff]`, xr = `(?:` + W + `|` + br + `)`, Sr = `[^` + gr + `]`, Cr = D(406), wr = `[\\ud800-\\udbff][\\udc00-\\udfff]`, Tr = D(496), Er = xr + `?`, Dr = `[` + vr + `]?`, Or = `(?:` + Tr + `(?:` + [Sr, Cr, wr].join(`|`) + `)` + Dr + Er + `)*`, kr = Dr + Er + Or, Ar = `(?:` + [Sr + W + `?`, W, Cr, wr, yr].join(`|`) + `)`, jr = RegExp(br + D(433) + br + `)|` + Ar + kr, `g`);
function Mr(e2) {
  for (var t2 = jr.lastIndex = 0; jr.test(e2); ) ++t2;
  return t2;
}
function Nr(e2) {
  return ct(e2) ? Mr(e2) : hr(e2);
}
function Pr(e2, n2) {
  return ur(e2, n2, function(n3, r2) {
    return t(e2, r2);
  });
}
var G = Qe(function(e2, t2) {
  return e2 == null ? {} : Pr(e2, t2);
}), Fr = Math[D(420)], Ir = Math.max;
function Lr(e2, t2, n2, r2) {
  for (var i2 = -1, a2 = Ir(Fr((t2 - e2) / (n2 || 1)), 0), o2 = Array(a2); a2--; ) o2[r2 ? a2 : ++i2] = e2, e2 += n2;
  return o2;
}
function Rr(e2) {
  return function(t2, n2, r2) {
    return r2 && typeof r2 != F(462) && M(t2, n2, r2) && (n2 = r2 = void 0), t2 = O(t2), n2 === void 0 ? (n2 = t2, t2 = 0) : n2 = O(n2), r2 = r2 === void 0 ? t2 < n2 ? 1 : -1 : O(r2), Lr(t2, n2, r2, e2);
  };
}
var K = Rr(), zr = `[object Map]`, Br = `[object Set]`;
function Vr(e2) {
  if (e2 == null) return 0;
  if (w(e2)) return ar(e2) ? Nr(e2) : e2.length;
  var t2 = x(e2);
  return t2 == zr || t2 == Br ? e2.size : Oe(e2).length;
}
var q = de(function(e2, t2) {
  if (e2 == null) return [];
  var n2 = t2.length;
  return n2 > 1 && M(e2, t2[0], t2[1]) ? t2 = [] : n2 > 2 && M(t2[0], t2[1], t2[2]) && (t2 = [t2[0]]), mr(e2, ne(t2, 1), []);
}), Hr = 0;
function Ur(e2) {
  var t2 = ++Hr;
  return l(e2) + t2;
}
function Wr(e2, t2, n2) {
  for (var r2 = -1, i2 = e2.length, a2 = t2.length, o2 = {}; ++r2 < i2; ) {
    var s2 = r2 < a2 ? t2[r2] : void 0;
    n2(o2, e2[r2], s2);
  }
  return o2;
}
function Gr(e2, t2) {
  return Wr(e2 || [], t2 || [], A);
}
var Kr = class {
  constructor() {
    var e2 = {};
    e2._next = e2._prev = e2, this._sentinel = e2;
  }
  dequeue() {
    var e2 = this._sentinel, t2 = e2._prev;
    if (t2 !== e2) return qr(t2), t2;
  }
  [D(397)](e2) {
    var t2 = D, n2 = this._sentinel;
    e2[t2(443)] && e2._next && qr(e2), e2._next = n2._next, n2._next._prev = e2, n2._next = e2, e2._prev = n2;
  }
  toString() {
    for (var e2 = [], t2 = this._sentinel, n2 = t2._prev; n2 !== t2; ) e2.push(JSON.stringify(n2, Jr)), n2 = n2._prev;
    return `[` + e2.join(`, `) + `]`;
  }
};
function qr(e2) {
  var t2 = D;
  e2._prev._next = e2._next, e2[t2(463)]._prev = e2[t2(443)], delete e2[t2(463)], delete e2._prev;
}
function Jr(e2, t2) {
  if (e2 !== `_next` && e2 !== D(443)) return t2;
}
var Yr = De(1);
function Xr(e2, t2) {
  var n2 = D;
  if (e2.nodeCount() <= 1) return [];
  var r2 = $r(e2, t2 || Yr);
  return P(z(Zr(r2.graph, r2.buckets, r2[n2(426)]), function(t3) {
    return e2.outEdges(t3.v, t3.w);
  }));
}
function Zr(e2, t2, n2) {
  for (var r2 = [], i2 = t2[t2.length - 1], a2 = t2[0], o2; e2.nodeCount(); ) {
    for (; o2 = a2.dequeue(); ) Qr(e2, t2, n2, o2);
    for (; o2 = i2.dequeue(); ) Qr(e2, t2, n2, o2);
    if (e2.nodeCount()) {
      for (var s2 = t2.length - 2; s2 > 0; --s2) if (o2 = t2[s2].dequeue(), o2) {
        r2 = r2.concat(Qr(e2, t2, n2, o2, true));
        break;
      }
    }
  }
  return r2;
}
function Qr(e2, t2, n2, r2, i2) {
  var a2 = D, o2 = i2 ? [] : void 0;
  return S(e2.inEdges(r2.v), function(r3) {
    var a3 = e2[F(486)](r3), s2 = e2.node(r3.v);
    i2 && o2.push({ v: r3.v, w: r3.w }), s2.out -= a3, ei(t2, n2, s2);
  }), S(e2.outEdges(r2.v), function(r3) {
    var i3 = e2.edge(r3), a3 = r3.w, o3 = e2.node(a3);
    o3.in -= i3, ei(t2, n2, o3);
  }), e2[a2(456)](r2.v), o2;
}
function $r(e2, t2) {
  var n2 = new C(), r2 = 0, i2 = 0;
  S(e2.nodes(), function(e3) {
    n2[F(409)](e3, { v: e3, in: 0, out: 0 });
  }), S(e2.edges(), function(e3) {
    var a3 = n2[F(486)](e3.v, e3.w) || 0, o3 = t2(e3), s2 = a3 + o3;
    n2.setEdge(e3.v, e3.w, s2), i2 = Math.max(i2, n2.node(e3.v).out += o3), r2 = Math.max(r2, n2.node(e3.w).in += o3);
  });
  var a2 = K(i2 + r2 + 3).map(function() {
    return new Kr();
  }), o2 = r2 + 1;
  return S(n2.nodes(), function(e3) {
    ei(a2, o2, n2.node(e3));
  }), { graph: n2, buckets: a2, zeroIdx: o2 };
}
function ei(e2, t2, n2) {
  var r2 = D;
  n2.out ? n2.in ? e2[n2.out - n2.in + t2].enqueue(n2) : e2[e2.length - 1][r2(397)](n2) : e2[0].enqueue(n2);
}
function ti(e2) {
  S(e2.graph().acyclicer === `greedy` ? Xr(e2, t2(e2)) : ni(e2), function(t3) {
    var n2 = F, r2 = e2.edge(t3);
    e2.removeEdge(t3), r2.forwardName = t3[n2(415)], r2.reversed = true, e2.setEdge(t3.w, t3.v, r2, Ur(`rev`));
  });
  function t2(e3) {
    return function(t3) {
      return e3.edge(t3).weight;
    };
  }
}
function ni(e2) {
  var t2 = [], n2 = {}, r2 = {};
  function i2(a2) {
    Object.prototype.hasOwnProperty.call(r2, a2) || (r2[a2] = true, n2[a2] = true, S(e2.outEdges(a2), function(e3) {
      Object.prototype.hasOwnProperty[F(452)](n2, e3.w) ? t2.push(e3) : i2(e3.w);
    }), delete n2[a2]);
  }
  return S(e2.nodes(), i2), t2;
}
function ri(e2) {
  var t2 = D;
  S(e2[t2(403)](), function(n2) {
    var r2 = t2, i2 = e2.edge(n2);
    if (i2.reversed) {
      e2.removeEdge(n2);
      var a2 = i2.forwardName;
      delete i2.reversed, delete i2.forwardName, e2[r2(481)](n2.w, n2.v, i2, a2);
    }
  });
}
function J(e2, t2, n2, r2) {
  var i2 = D, a2;
  do
    a2 = Ur(r2);
  while (e2[i2(478)](a2));
  return n2.dummy = t2, e2.setNode(a2, n2), a2;
}
function Y() {
  var e2 = `ranksep,node,hasNode,length,4258YNsBzO,setEdge,selfEdges,barycenter,4417560ivBkka,borderTop,edge,order, time: ,minRank,hasOwnProperty,lastIndex,_ep,tight-tree,children,isMultigraph,\\u200d,border,enqueue,abs,    fixupEdgeLabelCoords,height,selfedge,weight,edges,marginy,[object String],(?:\\ud83c[\\udde6-\\uddff]){2},indegree,string,setNode,successors,leaveEdge,parent,2350364BuYRMd,graph,name,    acyclic.undo,1336160zvRHIz,exec,  buildLayoutGraph,ceil,9hZfJdJ,    positionSelfEdges,nodeRankFactor,[object Float32Array],[object Int16Array],zeroIdx,[object Float64Array],254bhJnLp,pos,edgeObj,toLowerCase,bind,(?=,nodes,417264VKeEvU,[object Uint8ClampedArray],727560nkSuKM,push,prototype,[object Uint8Array],byteLength,rhs,_prev,source,labelpos,edge-label,constructor,maxRank,removeEdge,test,index,call,points,rank,root,removeNode,[object WeakMap],setParent,    assignRankMinMax,[object Map],[object Object],number,_next,    reversePoints,min,dummy,1214559EczTYA,    removeEmptyRanks,    order,add,width,rankdir,    removeEdgeLabelProxies,[object Uint32Array],nestingRoot`.split(`,`);
  return Y = function() {
    return e2;
  }, Y();
}
function ii(e2) {
  var t2 = D, n2 = new C().setGraph(e2[t2(414)]());
  return S(e2.nodes(), function(t3) {
    n2.setNode(t3, e2.node(t3));
  }), S(e2.edges(), function(t3) {
    var r2 = n2.edge(t3.v, t3.w) || { weight: 0, minlen: 1 }, i2 = e2.edge(t3);
    n2.setEdge(t3.v, t3.w, { weight: r2.weight + i2.weight, minlen: Math.max(r2.minlen, i2.minlen) });
  }), n2;
}
function ai(e2) {
  var t2 = D, n2 = new C({ multigraph: e2[t2(495)]() }).setGraph(e2.graph());
  return S(e2.nodes(), function(r2) {
    var i2 = t2;
    e2.children(r2)[i2(479)] || n2.setNode(r2, e2.node(r2));
  }), S(e2.edges(), function(t3) {
    n2.setEdge(t3, e2.edge(t3));
  }), n2;
}
function oi(e2, t2) {
  var n2 = e2.x, r2 = e2.y, i2 = t2.x - n2, a2 = t2.y - r2, o2 = e2.width / 2, s2 = e2.height / 2;
  if (!i2 && !a2) throw Error(`Not possible to find intersection inside of the rectangle`);
  var c2, l2;
  return Math.abs(a2) * o2 > Math.abs(i2) * s2 ? (a2 < 0 && (s2 = -s2), c2 = s2 * i2 / a2, l2 = s2) : (i2 < 0 && (o2 = -o2), c2 = o2, l2 = o2 * a2 / i2), { x: n2 + c2, y: r2 + l2 };
}
function X(e2) {
  var t2 = z(K(ui(e2) + 1), function() {
    return [];
  });
  return S(e2.nodes(), function(n2) {
    var r2 = e2.node(n2), i2 = r2.rank;
    m(i2) || (t2[i2][r2.order] = n2);
  }), t2;
}
function si(e2) {
  var t2 = H(z(e2.nodes(), function(t3) {
    var n2 = F;
    return e2.node(t3)[n2(454)];
  }));
  S(e2.nodes(), function(n2) {
    var r2 = e2.node(n2);
    rr(r2, `rank`) && (r2.rank -= t2);
  });
}
function ci(e2) {
  var t2 = H(z(e2.nodes(), function(t3) {
    return e2.node(t3).rank;
  })), n2 = [];
  S(e2.nodes(), function(r3) {
    var i3 = F, a2 = e2.node(r3)[i3(454)] - t2;
    n2[a2] || (n2[a2] = []), n2[a2].push(r3);
  });
  var r2 = 0, i2 = e2.graph().nodeRankFactor;
  S(n2, function(t3, n3) {
    m(t3) && n3 % i2 !== 0 ? --r2 : r2 && S(t3, function(t4) {
      var n4 = F;
      e2.node(t4)[n4(454)] += r2;
    });
  });
}
function li(e2, t2, n2, r2) {
  var i2 = D, a2 = { width: 0, height: 0 };
  return arguments[i2(479)] >= 4 && (a2.rank = n2, a2.order = r2), J(e2, `border`, a2, t2);
}
function ui(e2) {
  var t2 = D;
  return V(z(e2[t2(434)](), function(n2) {
    var r2 = e2[t2(477)](n2).rank;
    if (!m(r2)) return r2;
  }));
}
function di(e2, t2) {
  var n2 = { lhs: [], rhs: [] };
  return S(e2, function(e3) {
    var r2 = F;
    t2(e3) ? n2.lhs.push(e3) : n2.rhs[r2(438)](e3);
  }), n2;
}
function fi(e2, t2) {
  var n2 = D, r2 = Rn();
  try {
    return t2();
  } finally {
    console.log(e2 + n2(488) + (Rn() - r2) + `ms`);
  }
}
function pi(e2, t2) {
  return t2();
}
function mi(e2) {
  var t2 = D;
  function n2(t3) {
    var r2 = F, i2 = e2.children(t3), a2 = e2[r2(477)](t3);
    if (i2.length && S(i2, n2), Object.prototype.hasOwnProperty.call(a2, r2(489))) {
      a2.borderLeft = [], a2.borderRight = [];
      for (var o2 = a2[r2(489)], s2 = a2[r2(448)] + 1; o2 < s2; ++o2) hi(e2, `borderLeft`, `_bl`, t3, a2, o2), hi(e2, `borderRight`, `_br`, t3, a2, o2);
    }
  }
  S(e2[t2(494)](), n2);
}
function hi(e2, t2, n2, r2, i2, a2) {
  var o2 = { width: 0, height: 0, rank: a2, borderType: t2 }, s2 = i2[t2][a2 - 1], c2 = J(e2, `border`, o2, n2);
  i2[t2][a2] = c2, e2.setParent(c2, r2), s2 && e2.setEdge(s2, c2, { weight: 1 });
}
function gi(e2) {
  var t2 = D, n2 = e2.graph()[t2(472)].toLowerCase();
  (n2 === `lr` || n2 === `rl`) && vi(e2);
}
function _i(e2) {
  var t2 = e2.graph().rankdir.toLowerCase();
  (t2 === `bt` || t2 === `rl`) && bi(e2), (t2 === `lr` || t2 === `rl`) && (Si(e2), vi(e2));
}
function vi(e2) {
  var t2 = D;
  S(e2.nodes(), function(t3) {
    yi(e2.node(t3));
  }), S(e2[t2(403)](), function(t3) {
    yi(e2.edge(t3));
  });
}
function yi(e2) {
  var t2 = e2[D(471)];
  e2.width = e2.height, e2.height = t2;
}
function bi(e2) {
  S(e2.nodes(), function(t2) {
    xi(e2[F(477)](t2));
  }), S(e2.edges(), function(t2) {
    var n2 = F, r2 = e2.edge(t2);
    S(r2.points, xi), Object.prototype.hasOwnProperty[n2(452)](r2, `y`) && xi(r2);
  });
}
function xi(e2) {
  e2.y = -e2.y;
}
function Si(e2) {
  S(e2.nodes(), function(t2) {
    Ci(e2.node(t2));
  }), S(e2.edges(), function(t2) {
    var n2 = F, r2 = e2[n2(486)](t2);
    S(r2.points, Ci), Object[n2(439)].hasOwnProperty.call(r2, `x`) && Ci(r2);
  });
}
function Ci(e2) {
  var t2 = e2.x;
  e2.x = e2.y, e2.y = t2;
}
function wi(e2) {
  e2.graph().dummyChains = [], S(e2.edges(), function(t2) {
    Ti(e2, t2);
  });
}
function Ti(e2, t2) {
  var n2 = D, r2 = t2.v, i2 = e2.node(r2).rank, a2 = t2.w, o2 = e2.node(a2).rank, s2 = t2.name, c2 = e2.edge(t2), l2 = c2.labelRank;
  if (o2 !== i2 + 1) {
    e2.removeEdge(t2);
    var u2 = void 0, d2, f2;
    for (f2 = 0, ++i2; i2 < o2; ++f2, ++i2) c2.points = [], u2 = { width: 0, height: 0, edgeLabel: c2, edgeObj: t2, rank: i2 }, d2 = J(e2, `edge`, u2, `_d`), i2 === l2 && (u2.width = c2.width, u2[n2(400)] = c2[n2(400)], u2.dummy = n2(446), u2.labelpos = c2.labelpos), e2.setEdge(r2, d2, { weight: c2.weight }, s2), f2 === 0 && e2.graph().dummyChains.push(d2), r2 = d2;
    e2[n2(481)](r2, a2, { weight: c2.weight }, s2);
  }
}
function Ei(e2) {
  var t2 = D;
  S(e2[t2(414)]().dummyChains, function(n2) {
    var r2 = t2, i2 = e2[r2(477)](n2), a2 = i2.edgeLabel, o2;
    for (e2.setEdge(i2[r2(430)], a2); i2.dummy; ) o2 = e2[r2(410)](n2)[0], e2.removeNode(n2), a2[r2(453)].push({ x: i2.x, y: i2.y }), i2[r2(466)] === `edge-label` && (a2.x = i2.x, a2.y = i2.y, a2.width = i2.width, a2.height = i2.height), n2 = o2, i2 = e2.node(n2);
  });
}
function Di(e2) {
  var t2 = {};
  function n2(r2) {
    var i2 = F, a2 = e2.node(r2);
    if (Object.prototype.hasOwnProperty[i2(452)](t2, r2)) return a2[i2(454)];
    t2[r2] = true;
    var o2 = H(z(e2.outEdges(r2), function(t3) {
      return n2(t3.w) - e2.edge(t3).minlen;
    }));
    return (o2 === 1 / 0 || o2 == null) && (o2 = 0), a2[i2(454)] = o2;
  }
  S(e2.sources(), n2);
}
function Z(e2, t2) {
  return e2.node(t2.w).rank - e2.node(t2.v).rank - e2.edge(t2).minlen;
}
function Oi(e2) {
  var t2 = D, n2 = new C({ directed: false }), r2 = e2[t2(434)]()[0], i2 = e2.nodeCount();
  n2[t2(409)](r2, {});
  for (var a2, o2; ki(n2, e2) < i2; ) a2 = Ai(n2, e2), o2 = n2.hasNode(a2.v) ? Z(e2, a2) : -Z(e2, a2), ji(n2, e2, o2);
  return n2;
}
function ki(e2, t2) {
  function n2(r2) {
    S(t2.nodeEdges(r2), function(i2) {
      var a2 = i2.v, o2 = r2 === a2 ? i2.w : a2;
      !e2.hasNode(o2) && !Z(t2, i2) && (e2.setNode(o2, {}), e2.setEdge(r2, o2, {}), n2(o2));
    });
  }
  return S(e2.nodes(), n2), e2.nodeCount();
}
function Ai(e2, t2) {
  return U(t2.edges(), function(n2) {
    if (e2[F(478)](n2.v) !== e2.hasNode(n2.w)) return Z(t2, n2);
  });
}
function ji(e2, t2, n2) {
  S(e2.nodes(), function(e3) {
    var r2 = F;
    t2.node(e3)[r2(454)] += n2;
  });
}
De(1), De(1), Mi.CycleException = Q;
function Mi(e2) {
  var t2 = {}, n2 = {}, r2 = [];
  function i2(a2) {
    var o2 = F;
    if (Object.prototype.hasOwnProperty[o2(452)](n2, a2)) throw new Q();
    Object[o2(439)].hasOwnProperty[o2(452)](t2, a2) || (n2[a2] = true, t2[a2] = true, S(e2.predecessors(a2), i2), delete n2[a2], r2.push(a2));
  }
  if (S(e2.sinks(), i2), Vr(t2) !== e2.nodeCount()) throw new Q();
  return r2;
}
function Q() {
}
Q[D(439)] = Error();
function Ni(e2, t2, n2) {
  var r2 = D;
  E(t2) || (t2 = [t2]);
  var i2 = (e2.isDirected() ? e2.successors : e2.neighbors)[r2(432)](e2), a2 = [], o2 = {};
  return S(t2, function(t3) {
    if (!e2.hasNode(t3)) throw Error(`Graph does not have node: ` + t3);
    Pi(e2, t3, n2 === `post`, o2, i2, a2);
  }), a2;
}
function Pi(e2, t2, n2, r2, i2, a2) {
  Object.prototype.hasOwnProperty.call(r2, t2) || (r2[t2] = true, n2 || a2.push(t2), S(i2(t2), function(t3) {
    Pi(e2, t3, n2, r2, i2, a2);
  }), n2 && a2.push(t2));
}
function Fi(e2, t2) {
  return Ni(e2, t2, `post`);
}
function Ii(e2, t2) {
  return Ni(e2, t2, `pre`);
}
$.initLowLimValues = Bi, $.initCutValues = Li, $.calcCutValue = zi, $[D(411)] = Hi, $.enterEdge = Ui, $.exchangeEdges = Wi;
function $(e2) {
  e2 = ii(e2), Di(e2);
  var t2 = Oi(e2);
  Bi(t2), Li(t2, e2);
  for (var n2, r2; n2 = Hi(t2); ) r2 = Ui(t2, e2, n2), Wi(t2, e2, n2, r2);
}
function Li(e2, t2) {
  var n2 = Fi(e2, e2.nodes());
  n2 = n2.slice(0, n2.length - 1), S(n2, function(n3) {
    Ri(e2, t2, n3);
  });
}
function Ri(e2, t2, n2) {
  var r2 = D, i2 = e2[r2(477)](n2).parent;
  e2[r2(486)](n2, i2).cutvalue = zi(e2, t2, n2);
}
function zi(e2, t2, n2) {
  var r2 = e2.node(n2).parent, i2 = true, a2 = t2.edge(n2, r2), o2 = 0;
  return a2 || (a2 = (i2 = false, t2.edge(r2, n2))), o2 = a2.weight, S(t2.nodeEdges(n2), function(a3) {
    var s2 = a3.v === n2, c2 = s2 ? a3.w : a3.v;
    if (c2 !== r2) {
      var l2 = s2 === i2, u2 = t2.edge(a3).weight;
      if (o2 += l2 ? u2 : -u2, Ki(e2, n2, c2)) {
        var d2 = e2.edge(n2, c2).cutvalue;
        o2 += l2 ? -d2 : d2;
      }
    }
  }), o2;
}
function Bi(e2, t2) {
  arguments.length < 2 && (t2 = e2.nodes()[0]), Vi(e2, {}, 1, t2);
}
function Vi(e2, t2, n2, r2, i2) {
  var a2 = n2, o2 = e2.node(r2);
  return t2[r2] = true, S(e2.neighbors(r2), function(i3) {
    Object.prototype[F(490)].call(t2, i3) || (n2 = Vi(e2, t2, n2, i3, r2));
  }), o2.low = a2, o2.lim = n2++, i2 ? o2.parent = i2 : delete o2.parent, n2;
}
function Hi(e2) {
  return Xn(e2.edges(), function(t2) {
    return e2.edge(t2).cutvalue < 0;
  });
}
function Ui(e2, t2, n2) {
  var r2 = D, i2 = n2.v, a2 = n2.w;
  t2.hasEdge(i2, a2) || (i2 = n2.w, a2 = n2.v);
  var o2 = e2[r2(477)](i2), s2 = e2.node(a2), c2 = o2, l2 = false;
  return o2.lim > s2.lim && (c2 = s2, l2 = true), U(p(t2.edges(), function(t3) {
    return l2 === qi(e2, e2.node(t3.v), c2) && l2 !== qi(e2, e2.node(t3.w), c2);
  }), function(e3) {
    return Z(t2, e3);
  });
}
function Wi(e2, t2, n2, r2) {
  var i2 = n2.v, a2 = n2.w;
  e2.removeEdge(i2, a2), e2.setEdge(r2.v, r2.w, {}), Bi(e2), Li(e2, t2), Gi(e2, t2);
}
function Gi(e2, t2) {
  var n2 = Ii(e2, Xn(e2.nodes(), function(e3) {
    var n3 = F;
    return !t2.node(e3)[n3(412)];
  }));
  n2 = n2.slice(1), S(n2, function(n3) {
    var r2 = F, i2 = e2.node(n3).parent, a2 = t2.edge(n3, i2), o2 = false;
    a2 || (a2 = t2.edge(i2, n3), o2 = true), t2.node(n3).rank = t2[r2(477)](i2).rank + (o2 ? a2.minlen : -a2.minlen);
  });
}
function Ki(e2, t2, n2) {
  return e2.hasEdge(t2, n2);
}
function qi(e2, t2, n2) {
  return n2.low <= t2.lim && t2.lim <= n2.lim;
}
function Ji(e2) {
  var t2 = D;
  switch (e2.graph().ranker) {
    case `network-simplex`:
      Zi(e2);
      break;
    case t2(493):
      Xi(e2);
      break;
    case `longest-path`:
      Yi(e2);
      break;
    default:
      Zi(e2);
  }
}
var Yi = Di;
function Xi(e2) {
  Di(e2), Oi(e2);
}
function Zi(e2) {
  $(e2);
}
function Qi(e2) {
  var t2 = D, n2 = J(e2, `root`, {}, `_root`), r2 = ea(e2), i2 = V(b(r2)) - 1, a2 = 2 * i2 + 1;
  e2[t2(414)]().nestingRoot = n2, S(e2.edges(), function(t3) {
    e2.edge(t3).minlen *= a2;
  });
  var o2 = ta(e2) + 1;
  S(e2.children(), function(t3) {
    $i(e2, n2, a2, o2, i2, r2, t3);
  }), e2.graph()[t2(423)] = a2;
}
function $i(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = e2.children(o2);
  if (!s2.length) {
    o2 !== t2 && e2.setEdge(t2, o2, { weight: 0, minlen: n2 });
    return;
  }
  var c2 = li(e2, `_bt`), l2 = li(e2, `_bb`), u2 = e2.node(o2);
  e2.setParent(c2, o2), u2.borderTop = c2, e2.setParent(l2, o2), u2.borderBottom = l2, S(s2, function(s3) {
    var u3 = F;
    $i(e2, t2, n2, r2, i2, a2, s3);
    var d2 = e2.node(s3), f2 = d2.borderTop ? d2.borderTop : s3, p2 = d2.borderBottom ? d2.borderBottom : s3, m2 = d2.borderTop ? r2 : 2 * r2, h2 = f2 === p2 ? i2 - a2[o2] + 1 : 1;
    e2.setEdge(c2, f2, { weight: m2, minlen: h2, nestingEdge: true }), e2[u3(481)](p2, l2, { weight: m2, minlen: h2, nestingEdge: true });
  }), e2.parent(o2) || e2.setEdge(t2, c2, { weight: 0, minlen: i2 + a2[o2] });
}
function ea(e2) {
  var t2 = {};
  function n2(r2, i2) {
    var a2 = e2.children(r2);
    a2 && a2.length && S(a2, function(e3) {
      n2(e3, i2 + 1);
    }), t2[r2] = i2;
  }
  return S(e2.children(), function(e3) {
    n2(e3, 1);
  }), t2;
}
function ta(e2) {
  return n(e2.edges(), function(t2, n2) {
    return t2 + e2.edge(n2).weight;
  }, 0);
}
function na(e2) {
  var t2 = D, n2 = e2.graph();
  e2.removeNode(n2[t2(475)]), delete n2.nestingRoot, S(e2.edges(), function(n3) {
    var r2 = t2;
    e2.edge(n3).nestingEdge && e2[r2(449)](n3);
  });
}
function ra(e2, t2, n2) {
  var r2 = {}, i2;
  S(n2, function(n3) {
    for (var a2 = e2.parent(n3), o2, s2; a2; ) {
      if (o2 = e2.parent(a2), o2 ? (s2 = r2[o2], r2[o2] = a2) : (s2 = i2, i2 = a2), s2 && s2 !== a2) {
        t2.setEdge(s2, a2);
        return;
      }
      a2 = o2;
    }
  });
}
function ia(e2, t2, n2) {
  var r2 = D, i2 = aa(e2), a2 = new C({ compound: true }).setGraph({ root: i2 }).setDefaultNodeLabel(function(t3) {
    return e2.node(t3);
  });
  return S(e2[r2(434)](), function(o2) {
    var s2 = r2, c2 = e2.node(o2), l2 = e2.parent(o2);
    (c2.rank === t2 || c2.minRank <= t2 && t2 <= c2.maxRank) && (a2[s2(409)](o2), a2.setParent(o2, l2 || i2), S(e2[n2](o2), function(t3) {
      var n3 = s2, r3 = t3.v === o2 ? t3.w : t3.v, i3 = a2.edge(r3, o2), c3 = m(i3) ? 0 : i3.weight;
      a2[n3(481)](r3, o2, { weight: e2.edge(t3)[n3(402)] + c3 });
    }), Object.prototype.hasOwnProperty.call(c2, s2(489)) && a2[s2(409)](o2, { borderLeft: c2.borderLeft[t2], borderRight: c2.borderRight[t2] }));
  }), a2;
}
function aa(e2) {
  for (var t2; e2.hasNode(t2 = Ur(`_root`)); ) ;
  return t2;
}
function oa(e2, t2) {
  for (var n2 = 0, r2 = 1; r2 < t2.length; ++r2) n2 += sa(e2, t2[r2 - 1], t2[r2]);
  return n2;
}
function sa(e2, t2, n2) {
  for (var r2 = D, i2 = Gr(n2, z(n2, function(e3, t3) {
    return t3;
  })), a2 = P(z(t2, function(t3) {
    return q(z(e2.outEdges(t3), function(t4) {
      return { pos: i2[t4.w], weight: e2.edge(t4).weight };
    }), `pos`);
  })), o2 = 1; o2 < n2[r2(479)]; ) o2 <<= 1;
  var s2 = 2 * o2 - 1;
  --o2;
  var c2 = z(Array(s2), function() {
    return 0;
  }), l2 = 0;
  return S(a2.forEach(function(e3) {
    var t3 = e3[r2(429)] + o2;
    c2[t3] += e3.weight;
    for (var n3 = 0; t3 > 0; ) t3 % 2 && (n3 += c2[t3 + 1]), t3 = t3 - 1 >> 1, c2[t3] += e3.weight;
    l2 += e3.weight * n3;
  })), l2;
}
function ca(e2) {
  var t2 = {}, n2 = p(e2.nodes(), function(t3) {
    return !e2.children(t3).length;
  }), r2 = z(K(V(z(n2, function(t3) {
    var n3 = F;
    return e2.node(t3)[n3(454)];
  })) + 1), function() {
    return [];
  });
  function i2(n3) {
    var a2 = F;
    rr(t2, n3) || (t2[n3] = true, r2[e2.node(n3).rank].push(n3), S(e2[a2(410)](n3), i2));
  }
  return S(q(n2, function(t3) {
    return e2.node(t3).rank;
  }), i2), r2;
}
function la(e2, t2) {
  return z(t2, function(t3) {
    var r2 = F, i2 = e2.inEdges(t3);
    if (i2.length) {
      var a2 = n(i2, function(t4, n2) {
        var r3 = F, i3 = e2.edge(n2), a3 = e2[r3(477)](n2.v);
        return { sum: t4.sum + i3.weight * a3.order, weight: t4.weight + i3.weight };
      }, { sum: 0, weight: 0 });
      return { v: t3, barycenter: a2.sum / a2[r2(402)], weight: a2.weight };
    } else return { v: t3 };
  });
}
function ua(e2, t2) {
  var n2 = {};
  return S(e2, function(e3, t3) {
    var r2 = F, i2 = n2[e3.v] = { indegree: 0, in: [], out: [], vs: [e3.v], i: t3 };
    m(e3.barycenter) || (i2[r2(483)] = e3.barycenter, i2.weight = e3.weight);
  }), S(t2.edges(), function(e3) {
    var t3 = n2[e3.v], r2 = n2[e3.w];
    !m(t3) && !m(r2) && (r2.indegree++, t3.out.push(n2[e3.w]));
  }), da(p(n2, function(e3) {
    return !e3.indegree;
  }));
}
function da(e2) {
  var t2 = [];
  function n2(e3) {
    return function(t3) {
      var n3 = F;
      t3.merged || (m(t3[n3(483)]) || m(e3.barycenter) || t3.barycenter >= e3.barycenter) && fa(e3, t3);
    };
  }
  function r2(t3) {
    return function(n3) {
      var r3 = F;
      n3.in.push(t3), --n3[r3(407)] === 0 && e2.push(n3);
    };
  }
  for (; e2.length; ) {
    var i2 = e2.pop();
    t2.push(i2), S(i2.in.reverse(), n2(i2)), S(i2.out, r2(i2));
  }
  return z(p(t2, function(e3) {
    return !e3.merged;
  }), function(e3) {
    return G(e3, [`vs`, `i`, F(483), `weight`]);
  });
}
function fa(e2, t2) {
  var n2 = D, r2 = 0, i2 = 0;
  e2.weight && (r2 += e2.barycenter * e2[n2(402)], i2 += e2[n2(402)]), t2.weight && (r2 += t2[n2(483)] * t2.weight, i2 += t2.weight), e2.vs = t2.vs.concat(e2.vs), e2.barycenter = r2 / i2, e2.weight = i2, e2.i = Math.min(t2.i, e2.i), t2.merged = true;
}
function pa(e2, t2) {
  var n2 = D, r2 = di(e2, function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, `barycenter`);
  }), i2 = r2.lhs, a2 = q(r2[n2(442)], function(e3) {
    return -e3.i;
  }), o2 = [], s2 = 0, c2 = 0, l2 = 0;
  i2.sort(ha(!!t2)), l2 = ma(o2, a2, l2), S(i2, function(e3) {
    l2 += e3.vs.length, o2.push(e3.vs), s2 += e3.barycenter * e3.weight, c2 += e3.weight, l2 = ma(o2, a2, l2);
  });
  var u2 = { vs: P(o2) };
  return c2 && (u2.barycenter = s2 / c2, u2.weight = c2), u2;
}
function ma(e2, t2, n2) {
  for (var r2; t2.length && (r2 = R(t2)).i <= n2; ) t2.pop(), e2.push(r2.vs), n2++;
  return n2;
}
function ha(e2) {
  return function(t2, n2) {
    var r2 = F;
    return t2.barycenter < n2.barycenter ? -1 : t2[r2(483)] > n2.barycenter ? 1 : e2 ? n2.i - t2.i : t2.i - n2.i;
  };
}
function ga(e2, t2, n2, r2) {
  var i2 = D, a2 = e2.children(t2), o2 = e2.node(t2), s2 = o2 ? o2.borderLeft : void 0, c2 = o2 ? o2.borderRight : void 0, l2 = {};
  s2 && (a2 = p(a2, function(e3) {
    return e3 !== s2 && e3 !== c2;
  }));
  var u2 = la(e2, a2);
  S(u2, function(t3) {
    if (e2.children(t3.v).length) {
      var i3 = ga(e2, t3.v, n2, r2);
      l2[t3.v] = i3, Object.prototype.hasOwnProperty.call(i3, `barycenter`) && va(t3, i3);
    }
  });
  var d2 = ua(u2, n2);
  _a(d2, l2);
  var f2 = pa(d2, r2);
  if (s2 && (f2.vs = P([s2, f2.vs, c2]), e2.predecessors(s2)[i2(479)])) {
    var m2 = e2.node(e2.predecessors(s2)[0]), h2 = e2.node(e2.predecessors(c2)[0]);
    Object.prototype.hasOwnProperty[i2(452)](f2, `barycenter`) || (f2.barycenter = 0, f2.weight = 0), f2.barycenter = (f2.barycenter * f2.weight + m2[i2(487)] + h2.order) / (f2.weight + 2), f2.weight += 2;
  }
  return f2;
}
function _a(e2, t2) {
  S(e2, function(e3) {
    e3.vs = P(e3.vs.map(function(e4) {
      return t2[e4] ? t2[e4].vs : e4;
    }));
  });
}
function va(e2, t2) {
  m(e2.barycenter) ? (e2.barycenter = t2.barycenter, e2.weight = t2.weight) : (e2.barycenter = (e2.barycenter * e2.weight + t2.barycenter * t2.weight) / (e2.weight + t2.weight), e2.weight += t2.weight);
}
function ya(e2) {
  var t2 = ui(e2), n2 = ba(e2, K(1, t2 + 1), `inEdges`), r2 = ba(e2, K(t2 - 1, -1, -1), `outEdges`), i2 = ca(e2);
  Sa(e2, i2);
  for (var a2 = 1 / 0, o2, s2 = 0, c2 = 0; c2 < 4; ++s2, ++c2) {
    xa(s2 % 2 ? n2 : r2, s2 % 4 >= 2), i2 = X(e2);
    var l2 = oa(e2, i2);
    l2 < a2 && (c2 = 0, o2 = Ln(i2), a2 = l2);
  }
  Sa(e2, o2);
}
function ba(e2, t2, n2) {
  return z(t2, function(t3) {
    return ia(e2, t3, n2);
  });
}
function xa(e2, t2) {
  var n2 = new C();
  S(e2, function(e3) {
    var r2 = e3.graph().root, i2 = ga(e3, r2, n2, t2);
    S(i2.vs, function(t3, n3) {
      var r3 = F;
      e3[r3(477)](t3)[r3(487)] = n3;
    }), ra(e3, n2, i2.vs);
  });
}
function Sa(e2, t2) {
  S(t2, function(t3) {
    S(t3, function(t4, n2) {
      var r2 = F;
      e2.node(t4)[r2(487)] = n2;
    });
  });
}
function Ca(e2) {
  var t2 = Ta(e2);
  S(e2.graph().dummyChains, function(n2) {
    for (var r2 = F, i2 = e2.node(n2), a2 = i2.edgeObj, o2 = wa(e2, t2, a2.v, a2.w), s2 = o2.path, c2 = o2.lca, l2 = 0, u2 = s2[l2], d2 = true; n2 !== a2.w; ) {
      if (i2 = e2.node(n2), d2) {
        for (; (u2 = s2[l2]) !== c2 && e2.node(u2).maxRank < i2.rank; ) l2++;
        u2 === c2 && (d2 = false);
      }
      if (!d2) {
        for (; l2 < s2[r2(479)] - 1 && e2.node(u2 = s2[l2 + 1]).minRank <= i2.rank; ) l2++;
        u2 = s2[l2];
      }
      e2[r2(458)](n2, u2), n2 = e2.successors(n2)[0];
    }
  });
}
function wa(e2, t2, n2, r2) {
  var i2 = [], a2 = [], o2 = Math.min(t2[n2].low, t2[r2].low), s2 = Math.max(t2[n2].lim, t2[r2].lim), c2 = n2, l2;
  do
    c2 = e2.parent(c2), i2.push(c2);
  while (c2 && (t2[c2].low > o2 || s2 > t2[c2].lim));
  for (l2 = c2, c2 = r2; (c2 = e2.parent(c2)) !== l2; ) a2.push(c2);
  return { path: i2.concat(a2.reverse()), lca: l2 };
}
function Ta(e2) {
  var t2 = {}, n2 = 0;
  function r2(i2) {
    var a2 = n2;
    S(e2.children(i2), r2), t2[i2] = { low: a2, lim: n2++ };
  }
  return S(e2.children(), r2), t2;
}
function Ea(e2, t2) {
  var r2 = {};
  function i2(t3, n2) {
    var i3 = F, a2 = 0, o2 = 0, s2 = t3[i3(479)], c2 = R(n2);
    return S(n2, function(t4, l2) {
      var u2 = i3, d2 = Oa(e2, t4), f2 = d2 ? e2[u2(477)](d2).order : s2;
      (d2 || t4 === c2) && (S(n2.slice(o2, l2 + 1), function(t5) {
        S(e2.predecessors(t5), function(n3) {
          var i4 = F, o3 = e2[i4(477)](n3), s3 = o3[i4(487)];
          (s3 < a2 || f2 < s3) && !(o3.dummy && e2.node(t5).dummy) && ka(r2, n3, t5);
        });
      }), o2 = l2 + 1, a2 = f2);
    }), n2;
  }
  return n(t2, i2), r2;
}
function Da(e2, t2) {
  var r2 = {};
  function i2(t3, n2, i3, a3, o2) {
    var s2;
    S(K(n2, i3), function(n3) {
      s2 = t3[n3], e2.node(s2).dummy && S(e2.predecessors(s2), function(t4) {
        var n4 = F, i4 = e2[n4(477)](t4);
        i4.dummy && (i4[n4(487)] < a3 || i4.order > o2) && ka(r2, t4, s2);
      });
    });
  }
  function a2(t3, n2) {
    var r3 = -1, a3, o2 = 0;
    return S(n2, function(s2, c2) {
      var l2 = F;
      if (e2[l2(477)](s2).dummy === `border`) {
        var u2 = e2.predecessors(s2);
        u2[l2(479)] && (a3 = e2[l2(477)](u2[0]).order, i2(n2, o2, c2, r3, a3), o2 = c2, r3 = a3);
      }
      i2(n2, o2, n2.length, a3, t3.length);
    }), n2;
  }
  return n(t2, a2), r2;
}
function Oa(e2, t2) {
  if (e2.node(t2).dummy) return Xn(e2.predecessors(t2), function(t3) {
    return e2.node(t3).dummy;
  });
}
function ka(e2, t2, n2) {
  if (t2 > n2) {
    var r2 = t2;
    t2 = n2, n2 = r2;
  }
  Object.prototype.hasOwnProperty.call(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, configurable: true, value: {}, writable: true });
  var i2 = e2[t2];
  Object.defineProperty(i2, n2, { enumerable: true, configurable: true, value: true, writable: true });
}
function Aa(e2, t2, n2) {
  if (t2 > n2) {
    var r2 = t2;
    t2 = n2, n2 = r2;
  }
  return !!e2[t2] && Object.prototype.hasOwnProperty.call(e2[t2], n2);
}
function ja(e2, t2, n2, r2) {
  var i2 = {}, a2 = {}, o2 = {};
  return S(t2, function(e3) {
    S(e3, function(e4, t3) {
      i2[e4] = e4, a2[e4] = e4, o2[e4] = t3;
    });
  }), S(t2, function(e3) {
    var t3 = -1;
    S(e3, function(e4) {
      var s2 = r2(e4);
      if (s2.length) {
        s2 = q(s2, function(e5) {
          return o2[e5];
        });
        for (var c2 = (s2.length - 1) / 2, l2 = Math.floor(c2), u2 = Math.ceil(c2); l2 <= u2; ++l2) {
          var d2 = s2[l2];
          a2[e4] === e4 && t3 < o2[d2] && !Aa(n2, e4, d2) && (a2[d2] = e4, a2[e4] = i2[e4] = i2[d2], t3 = o2[d2]);
        }
      }
    });
  }), { root: i2, align: a2 };
}
function Ma(e2, t2, n2, r2, i2) {
  var a2 = D, o2 = {}, s2 = Na(e2, t2, n2, i2), c2 = i2 ? `borderLeft` : `borderRight`;
  function l2(e3, t3) {
    for (var n3 = s2.nodes(), r3 = n3.pop(), i3 = {}; r3; ) i3[r3] ? e3(r3) : (i3[r3] = true, n3.push(r3), n3 = n3.concat(t3(r3))), r3 = n3.pop();
  }
  function u2(e3) {
    o2[e3] = s2.inEdges(e3).reduce(function(e4, t3) {
      return Math.max(e4, o2[t3.v] + s2.edge(t3));
    }, 0);
  }
  function d2(t3) {
    var n3 = s2.outEdges(t3).reduce(function(e3, t4) {
      return Math.min(e3, o2[t4.w] - s2.edge(t4));
    }, 1 / 0), r3 = e2.node(t3);
    n3 !== 1 / 0 && r3.borderType !== c2 && (o2[t3] = Math.max(o2[t3], n3));
  }
  return l2(u2, s2.predecessors[a2(432)](s2)), l2(d2, s2.successors.bind(s2)), S(r2, function(e3) {
    o2[e3] = o2[n2[e3]];
  }), o2;
}
function Na(e2, t2, n2, r2) {
  var i2 = new C(), a2 = e2.graph(), o2 = Ra(a2.nodesep, a2.edgesep, r2);
  return S(t2, function(t3) {
    var r3;
    S(t3, function(t4) {
      var a3 = F, s2 = n2[t4];
      if (i2.setNode(s2), r3) {
        var c2 = n2[r3], l2 = i2[a3(486)](c2, s2);
        i2[a3(481)](c2, s2, Math.max(o2(e2, t4, r3), l2 || 0));
      }
      r3 = t4;
    });
  }), i2;
}
function Pa(e2, t2) {
  return U(b(t2), function(t3) {
    var n2 = -1 / 0, r2 = 1 / 0;
    return Qn(t3, function(t4, i2) {
      var a2 = F, o2 = za(e2, i2) / 2;
      n2 = Math.max(t4 + o2, n2), r2 = Math[a2(465)](t4 - o2, r2);
    }), n2 - r2;
  });
}
function Fa(e2, t2) {
  var n2 = b(t2), r2 = H(n2), i2 = V(n2);
  S([`u`, `d`], function(n3) {
    S([`l`, `r`], function(a2) {
      var o2 = n3 + a2, s2 = e2[o2], c2;
      if (s2 !== t2) {
        var l2 = b(s2);
        c2 = a2 === `l` ? r2 - H(l2) : i2 - V(l2), c2 && (e2[o2] = B(s2, function(e3) {
          return e3 + c2;
        }));
      }
    });
  });
}
function Ia(e2, t2) {
  return B(e2.ul, function(n2, r2) {
    var i2 = F;
    if (t2) return e2[t2[i2(431)]()][r2];
    var a2 = q(z(e2, r2));
    return (a2[1] + a2[2]) / 2;
  });
}
function La(e2) {
  var t2 = X(e2), n2 = cr(Ea(e2, t2), Da(e2, t2)), r2 = {}, i2;
  return S([`u`, `d`], function(a2) {
    i2 = a2 === `u` ? t2 : b(t2).reverse(), S([`l`, `r`], function(t3) {
      var o2 = F;
      t3 === `r` && (i2 = z(i2, function(e3) {
        return b(e3).reverse();
      }));
      var s2 = (a2 === `u` ? e2.predecessors : e2.successors).bind(e2), c2 = ja(e2, i2, n2, s2), l2 = Ma(e2, i2, c2[o2(455)], c2.align, t3 === `r`);
      t3 === `r` && (l2 = B(l2, function(e3) {
        return -e3;
      })), r2[a2 + t3] = l2;
    });
  }), Fa(r2, Pa(e2, r2)), Ia(r2, e2.graph().align);
}
function Ra(e2, t2, n2) {
  return function(r2, i2, a2) {
    var o2 = F, s2 = r2.node(i2), c2 = r2.node(a2), l2 = 0, u2;
    if (l2 += s2[o2(471)] / 2, Object.prototype.hasOwnProperty[o2(452)](s2, `labelpos`)) switch (s2.labelpos.toLowerCase()) {
      case `l`:
        u2 = -s2[o2(471)] / 2;
        break;
      case `r`:
        u2 = s2[o2(471)] / 2;
        break;
    }
    if (u2 && (l2 += n2 ? u2 : -u2), u2 = 0, l2 += (s2.dummy ? t2 : e2) / 2, l2 += (c2.dummy ? t2 : e2) / 2, l2 += c2.width / 2, Object.prototype.hasOwnProperty.call(c2, o2(445))) switch (c2[o2(445)].toLowerCase()) {
      case `l`:
        u2 = c2.width / 2;
        break;
      case `r`:
        u2 = -c2.width / 2;
        break;
    }
    return u2 && (l2 += n2 ? u2 : -u2), u2 = 0, l2;
  };
}
function za(e2, t2) {
  return e2.node(t2).width;
}
function Ba(e2) {
  e2 = ai(e2), Va(e2), $n(La(e2), function(t2, n2) {
    e2.node(n2).x = t2;
  });
}
function Va(e2) {
  var t2 = X(e2), n2 = e2.graph().ranksep, r2 = 0;
  S(t2, function(t3) {
    var i2 = V(z(t3, function(t4) {
      var n3 = F;
      return e2.node(t4)[n3(400)];
    }));
    S(t3, function(t4) {
      e2.node(t4).y = r2 + i2 / 2;
    }), r2 += i2 + n2;
  });
}
function Ha(e2, t2) {
  var n2 = t2 && t2.debugTiming ? fi : pi;
  n2(`layout`, () => {
    var t3 = n2(F(419), () => $a(e2));
    n2(`  runLayout`, () => Ua(t3, n2)), n2(`  updateInputGraph`, () => Wa(e2, t3));
  });
}
function Ua(e2, t2) {
  var n2 = D;
  t2(`    makeSpaceForEdgeLabels`, () => eo(e2)), t2(`    removeSelfEdges`, () => lo(e2)), t2(`    acyclic`, () => ti(e2)), t2(`    nestingGraph.run`, () => Qi(e2)), t2(`    rank`, () => Ji(ai(e2))), t2(`    injectEdgeLabelProxies`, () => to(e2)), t2(n2(468), () => ci(e2)), t2(`    nestingGraph.cleanup`, () => na(e2)), t2(`    normalizeRanks`, () => si(e2)), t2(n2(459), () => no(e2)), t2(n2(473), () => ro(e2)), t2(`    normalize.run`, () => wi(e2)), t2(`    parentDummyChains`, () => Ca(e2)), t2(`    addBorderSegments`, () => mi(e2)), t2(n2(469), () => ya(e2)), t2(`    insertSelfEdges`, () => uo(e2)), t2(`    adjustCoordinateSystem`, () => gi(e2)), t2(`    position`, () => Ba(e2)), t2(n2(422), () => fo(e2)), t2(`    removeBorderNodes`, () => co(e2)), t2(`    normalize.undo`, () => Ei(e2)), t2(n2(399), () => oo(e2)), t2(`    undoCoordinateSystem`, () => _i(e2)), t2(`    translateGraph`, () => io(e2)), t2(`    assignNodeIntersects`, () => ao(e2)), t2(n2(464), () => so(e2)), t2(n2(416), () => ri(e2));
}
function Wa(e2, t2) {
  var n2 = D;
  S(e2.nodes(), function(n3) {
    var r2 = e2[F(477)](n3), i2 = t2.node(n3);
    r2 && (r2.x = i2.x, r2.y = i2.y, t2.children(n3).length && (r2.width = i2.width, r2.height = i2.height));
  }), S(e2.edges(), function(n3) {
    var r2 = e2[F(486)](n3), i2 = t2.edge(n3);
    r2.points = i2.points, Object.prototype.hasOwnProperty.call(i2, `x`) && (r2.x = i2.x, r2.y = i2.y);
  }), e2.graph().width = t2[n2(414)]().width, e2[n2(414)]()[n2(400)] = t2.graph().height;
}
var Ga = [`nodesep`, `edgesep`, D(476), `marginx`, D(404)], Ka = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: `tb` }, qa = [`acyclicer`, `ranker`, `rankdir`, `align`], Ja = [`width`, `height`], Ya = { width: 0, height: 0 }, Xa = [`minlen`, D(402), `width`, `height`, `labeloffset`], Za = { minlen: 1, weight: 1, width: 0, height: 0, labeloffset: 10, labelpos: `r` }, Qa = [`labelpos`];
function $a(e2) {
  var t2 = new C({ multigraph: true, compound: true }), n2 = mo(e2.graph());
  return t2.setGraph(cr({}, Ka, po(n2, Ga), G(n2, qa))), S(e2.nodes(), function(n3) {
    var r2 = F, i2 = mo(e2.node(n3));
    t2[r2(409)](n3, Vn(po(i2, Ja), Ya)), t2.setParent(n3, e2.parent(n3));
  }), S(e2.edges(), function(n3) {
    var r2 = mo(e2[F(486)](n3));
    t2.setEdge(n3, cr({}, Za, po(r2, Xa), G(r2, Qa)));
  }), t2;
}
function eo(e2) {
  var t2 = e2.graph();
  t2.ranksep /= 2, S(e2.edges(), function(n2) {
    var r2 = F, i2 = e2.edge(n2);
    i2.minlen *= 2, i2.labelpos.toLowerCase() !== `c` && (t2.rankdir === `TB` || t2.rankdir === `BT` ? i2.width += i2.labeloffset : i2[r2(400)] += i2.labeloffset);
  });
}
function to(e2) {
  S(e2.edges(), function(t2) {
    var n2 = F, r2 = e2.edge(t2);
    if (r2.width && r2.height) {
      var i2 = e2.node(t2.v);
      J(e2, `edge-proxy`, { rank: (e2.node(t2.w).rank - i2.rank) / 2 + i2.rank, e: t2 }, n2(492));
    }
  });
}
function no(e2) {
  var t2 = 0;
  S(e2.nodes(), function(n2) {
    var r2 = e2[F(477)](n2);
    r2.borderTop && (r2.minRank = e2.node(r2.borderTop).rank, r2.maxRank = e2.node(r2.borderBottom).rank, t2 = V(t2, r2.maxRank));
  }), e2.graph().maxRank = t2;
}
function ro(e2) {
  S(e2.nodes(), function(t2) {
    var n2 = e2[F(477)](t2);
    n2.dummy === `edge-proxy` && (e2.edge(n2.e).labelRank = n2.rank, e2.removeNode(t2));
  });
}
function io(e2) {
  var t2 = D, n2 = 1 / 0, r2 = 0, i2 = 1 / 0, a2 = 0, o2 = e2.graph(), s2 = o2.marginx || 0, c2 = o2.marginy || 0;
  function l2(e3) {
    var t3 = F, o3 = e3.x, s3 = e3.y, c3 = e3.width, l3 = e3.height;
    n2 = Math[t3(465)](n2, o3 - c3 / 2), r2 = Math.max(r2, o3 + c3 / 2), i2 = Math.min(i2, s3 - l3 / 2), a2 = Math.max(a2, s3 + l3 / 2);
  }
  S(e2[t2(434)](), function(t3) {
    l2(e2.node(t3));
  }), S(e2.edges(), function(t3) {
    var n3 = e2.edge(t3);
    Object.prototype.hasOwnProperty.call(n3, `x`) && l2(n3);
  }), n2 -= s2, i2 -= c2, S(e2.nodes(), function(t3) {
    var r3 = e2.node(t3);
    r3.x -= n2, r3.y -= i2;
  }), S(e2.edges(), function(r3) {
    var a3 = t2, o3 = e2[a3(486)](r3);
    S(o3.points, function(e3) {
      e3.x -= n2, e3.y -= i2;
    }), Object.prototype.hasOwnProperty[a3(452)](o3, `x`) && (o3.x -= n2), Object.prototype.hasOwnProperty.call(o3, `y`) && (o3.y -= i2);
  }), o2.width = r2 - n2 + s2, o2.height = a2 - i2 + c2;
}
function ao(e2) {
  S(e2.edges(), function(t2) {
    var n2 = F, r2 = e2.edge(t2), i2 = e2[n2(477)](t2.v), a2 = e2.node(t2.w), o2, s2;
    r2.points ? (o2 = r2.points[0], s2 = r2.points[r2.points.length - 1]) : (r2.points = [], o2 = a2, s2 = i2), r2.points.unshift(oi(i2, o2)), r2[n2(453)].push(oi(a2, s2));
  });
}
function oo(e2) {
  var t2 = D;
  S(e2[t2(403)](), function(n2) {
    var r2 = t2, i2 = e2[r2(486)](n2);
    if (Object.prototype.hasOwnProperty[r2(452)](i2, `x`)) switch ((i2.labelpos === `l` || i2.labelpos === `r`) && (i2.width -= i2.labeloffset), i2.labelpos) {
      case `l`:
        i2.x -= i2.width / 2 + i2.labeloffset;
        break;
      case `r`:
        i2.x += i2.width / 2 + i2.labeloffset;
        break;
    }
  });
}
function so(e2) {
  S(e2.edges(), function(t2) {
    var n2 = e2.edge(t2);
    n2.reversed && n2.points.reverse();
  });
}
function co(e2) {
  S(e2.nodes(), function(t2) {
    var n2 = F;
    if (e2.children(t2)[n2(479)]) {
      var r2 = e2.node(t2), i2 = e2[n2(477)](r2[n2(485)]), a2 = e2.node(r2.borderBottom), o2 = e2[n2(477)](R(r2.borderLeft)), s2 = e2[n2(477)](R(r2.borderRight));
      r2.width = Math.abs(s2.x - o2.x), r2.height = Math[n2(398)](a2.y - i2.y), r2.x = o2.x + r2.width / 2, r2.y = i2.y + r2.height / 2;
    }
  }), S(e2.nodes(), function(t2) {
    var n2 = F;
    e2[n2(477)](t2).dummy === n2(396) && e2[n2(456)](t2);
  });
}
function lo(e2) {
  S(e2.edges(), function(t2) {
    var n2 = F;
    if (t2.v === t2.w) {
      var r2 = e2.node(t2.v);
      r2.selfEdges || (r2.selfEdges = []), r2[n2(482)][n2(438)]({ e: t2, label: e2.edge(t2) }), e2.removeEdge(t2);
    }
  });
}
function uo(e2) {
  S(X(e2), function(t2) {
    var n2 = 0;
    S(t2, function(t3, r2) {
      var i2 = F, a2 = e2.node(t3);
      a2[i2(487)] = r2 + n2, S(a2.selfEdges, function(t4) {
        var o2 = i2;
        J(e2, `selfedge`, { width: t4.label[o2(471)], height: t4.label[o2(400)], rank: a2.rank, order: r2 + ++n2, e: t4.e, label: t4.label }, `_se`);
      }), delete a2[i2(482)];
    });
  });
}
function fo(e2) {
  S(e2.nodes(), function(t2) {
    var n2 = F, r2 = e2.node(t2);
    if (r2.dummy === n2(401)) {
      var i2 = e2.node(r2.e.v), a2 = i2.x + i2.width / 2, o2 = i2.y, s2 = r2.x - a2, c2 = i2.height / 2;
      e2.setEdge(r2.e, r2.label), e2.removeNode(t2), r2.label.points = [{ x: a2 + 2 * s2 / 3, y: o2 - c2 }, { x: a2 + 5 * s2 / 6, y: o2 - c2 }, { x: a2 + s2, y: o2 }, { x: a2 + 5 * s2 / 6, y: o2 + c2 }, { x: a2 + 2 * s2 / 3, y: o2 + c2 }], r2.label.x = r2.x, r2.label.y = r2.y;
    }
  });
}
function po(e2, t2) {
  return B(G(e2, t2), Number);
}
function mo(e2) {
  var t2 = {};
  return S(e2, function(e3, n2) {
    var r2 = F;
    t2[n2[r2(431)]()] = e3;
  }), t2;
}
export {
  L as n,
  Ha as r,
  z as t
};
