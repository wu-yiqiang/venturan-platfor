var e = F;
(function(e2, t2) {
  for (var n2 = F, r2 = e2(); ; ) try {
    if (-parseInt(n2(191)) / 1 * (-parseInt(n2(179)) / 2) + parseInt(n2(187)) / 3 * (-parseInt(n2(181)) / 4) + parseInt(n2(178)) / 5 + -parseInt(n2(182)) / 6 + -parseInt(n2(195)) / 7 + parseInt(n2(197)) / 8 * (-parseInt(n2(193)) / 9) + -parseInt(n2(194)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(d, 687825);
var t = Uint8Array, n = Uint16Array, r = Int32Array, i = new t([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), a = new t([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), o = new t([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), s = function(e2, t2) {
  for (var i2 = new n(31), a2 = 0; a2 < 31; ++a2) i2[a2] = t2 += 1 << e2[a2 - 1];
  for (var o2 = new r(i2[30]), a2 = 1; a2 < 30; ++a2) for (var s2 = i2[a2]; s2 < i2[a2 + 1]; ++s2) o2[s2] = s2 - i2[a2] << 5 | a2;
  return { b: i2, r: o2 };
}, c = s(i, 2), l = c.b, u = c.r;
function d() {
  var e2 = [`6375190pzqlwJ`, `1793218FcBQJD`, ` dictionary`, `80zYcsrX`, `apply`, `5830705aubXxp`, `2KNPVcC`, `invalid distance`, `4ZIAqMH`, `551838hPPgqY`, `code`, `captureStackTrace`, `set`, `subarray`, `1361667FBMSBY`, `length`, `no stream handler`, `fromCharCode`, `1107359Xdagwj`, `dictionary`, `131508WpjqHo`];
  return d = function() {
    return e2;
  }, d();
}
l[28] = 258, u[258] = 28;
var f = s(a, 0), p = f.b;
f.r;
for (var m = new n(32768), h = 0; h < 32768; ++h) {
  var g = (h & 43690) >> 1 | (h & 21845) << 1;
  g = (g & 52428) >> 2 | (g & 13107) << 2, g = (g & 61680) >> 4 | (g & 3855) << 4, m[h] = ((g & 65280) >> 8 | (g & 255) << 8) >> 1;
}
for (var _ = function(e2, t2, r2) {
  for (var i2 = e2.length, a2 = 0, o2 = new n(t2); a2 < i2; ++a2) e2[a2] && ++o2[e2[a2] - 1];
  var s2 = new n(t2);
  for (a2 = 1; a2 < t2; ++a2) s2[a2] = s2[a2 - 1] + o2[a2 - 1] << 1;
  var c2;
  if (r2) {
    c2 = new n(1 << t2);
    var l2 = 15 - t2;
    for (a2 = 0; a2 < i2; ++a2) if (e2[a2]) for (var u2 = a2 << 4 | e2[a2], d2 = t2 - e2[a2], f2 = s2[e2[a2] - 1]++ << d2, p2 = f2 | (1 << d2) - 1; f2 <= p2; ++f2) c2[m[f2] >> l2] = u2;
  } else for (c2 = new n(i2), a2 = 0; a2 < i2; ++a2) e2[a2] && (c2[a2] = m[s2[e2[a2] - 1]++] >> 15 - e2[a2]);
  return c2;
}, v = new t(288), h = 0; h < 144; ++h) v[h] = 8;
for (var h = 144; h < 256; ++h) v[h] = 9;
for (var h = 256; h < 280; ++h) v[h] = 7;
for (var h = 280; h < 288; ++h) v[h] = 8;
for (var y = new t(32), h = 0; h < 32; ++h) y[h] = 5;
var ee = _(v, 9, 1), te = _(y, 5, 1), b = function(e2) {
  for (var t2 = F, n2 = e2[0], r2 = 1; r2 < e2[t2(188)]; ++r2) e2[r2] > n2 && (n2 = e2[r2]);
  return n2;
}, x = function(e2, t2, n2) {
  var r2 = t2 / 8 | 0;
  return (e2[r2] | e2[r2 + 1] << 8) >> (t2 & 7) & n2;
}, S = function(e2, t2) {
  var n2 = t2 / 8 | 0;
  return (e2[n2] | e2[n2 + 1] << 8 | e2[n2 + 2] << 16) >> (t2 & 7);
}, ne = function(e2) {
  return (e2 + 7) / 8 | 0;
}, C = function(e2, n2, r2) {
  var i2 = F;
  return (n2 == null || n2 < 0) && (n2 = 0), (r2 == null || r2 > e2.length) && (r2 = e2[i2(188)]), new t(e2.subarray(n2, r2));
}, w = [`unexpected EOF`, `invalid block type`, `invalid length/literal`, e(180), `stream finished`, e(189), , `no callback`, `invalid UTF-8 data`, `extra field too long`, `date not in range 1980-2099`, `filename too long`, `stream finishing`, `invalid zip data`], T = function(t2, n2, r2) {
  var i2 = e, a2 = Error(n2 || w[t2]);
  if (a2[i2(183)] = t2, Error[i2(184)] && Error.captureStackTrace(a2, T), !r2) throw a2;
  return a2;
}, E = function(n2, r2, s2, c2) {
  var u2 = e, d2 = n2.length, f2 = c2 ? c2.length : 0;
  if (!d2 || r2.f && !r2.l) return s2 || new t(0);
  var m = !s2, h = m || r2.i != 2, g = r2.i;
  m && (s2 = new t(d2 * 3));
  var v = function(e2) {
    var n3 = F, r3 = s2.length;
    if (e2 > r3) {
      var i2 = new t(Math.max(r3 * 2, e2));
      i2[n3(185)](s2), s2 = i2;
    }
  }, y = r2.f || 0, w2 = r2.p || 0, E2 = r2.b || 0, D2 = r2.l, O2 = r2.d, k2 = r2.m, A2 = r2.n, j2 = d2 * 8;
  do {
    if (!D2) {
      y = x(n2, w2, 1);
      var M2 = x(n2, w2 + 1, 3);
      if (w2 += 3, !M2) {
        var N2 = ne(w2) + 4, P2 = n2[N2 - 4] | n2[N2 - 3] << 8, I2 = N2 + P2;
        if (I2 > d2) {
          g && T(0);
          break;
        }
        h && v(E2 + P2), s2.set(n2.subarray(N2, I2), E2), r2.b = E2 += P2, r2.p = w2 = I2 * 8, r2.f = y;
        continue;
      } else if (M2 == 1) D2 = ee, O2 = te, k2 = 9, A2 = 5;
      else if (M2 == 2) {
        var L2 = x(n2, w2, 31) + 257, R2 = x(n2, w2 + 10, 15) + 4, z2 = L2 + x(n2, w2 + 5, 31) + 1;
        w2 += 14;
        for (var B2 = new t(z2), V2 = new t(19), H = 0; H < R2; ++H) V2[o[H]] = x(n2, w2 + H * 3, 7);
        w2 += R2 * 3;
        for (var U = b(V2), re = (1 << U) - 1, ie = _(V2, U, 1), H = 0; H < z2; ) {
          var W = ie[x(n2, w2, re)];
          w2 += W & 15;
          var N2 = W >> 4;
          if (N2 < 16) B2[H++] = N2;
          else {
            var G = 0, K = 0;
            for (N2 == 16 ? (K = 3 + x(n2, w2, 3), w2 += 2, G = B2[H - 1]) : N2 == 17 ? (K = 3 + x(n2, w2, 7), w2 += 3) : N2 == 18 && (K = 11 + x(n2, w2, 127), w2 += 7); K--; ) B2[H++] = G;
          }
        }
        var q = B2[u2(186)](0, L2), J = B2.subarray(L2);
        k2 = b(q), A2 = b(J), D2 = _(q, k2, 1), O2 = _(J, A2, 1);
      } else T(1);
      if (w2 > j2) {
        g && T(0);
        break;
      }
    }
    h && v(E2 + 131072);
    for (var ae = (1 << k2) - 1, oe = (1 << A2) - 1, Y = w2; ; Y = w2) {
      var G = D2[S(n2, w2) & ae], X = G >> 4;
      if (w2 += G & 15, w2 > j2) {
        g && T(0);
        break;
      }
      if (G || T(2), X < 256) s2[E2++] = X;
      else if (X == 256) {
        Y = w2, D2 = null;
        break;
      } else {
        var se = X - 254;
        if (X > 264) {
          var H = X - 257, Z = i[H];
          se = x(n2, w2, (1 << Z) - 1) + l[H], w2 += Z;
        }
        var Q = O2[S(n2, w2) & oe], $ = Q >> 4;
        Q || T(3), w2 += Q & 15;
        var J = p[$];
        if ($ > 3) {
          var Z = a[$];
          J += S(n2, w2) & (1 << Z) - 1, w2 += Z;
        }
        if (w2 > j2) {
          g && T(0);
          break;
        }
        h && v(E2 + 131072);
        var ce = E2 + se;
        if (E2 < J) {
          var le = f2 - J, ue = Math.min(J, ce);
          for (le + E2 < 0 && T(3); E2 < ue; ++E2) s2[E2] = c2[le + E2];
        }
        for (; E2 < ce; ++E2) s2[E2] = s2[E2 - J];
      }
    }
    r2.l = D2, r2.p = Y, r2.b = E2, r2.f = y, D2 && (y = 1, r2.m = k2, r2.d = O2, r2.n = A2);
  } while (!y);
  return E2 != s2.length && m ? C(s2, 0, E2) : s2.subarray(0, E2);
}, D = new t(0), O = function(e2, t2) {
  return e2[t2] | e2[t2 + 1] << 8;
}, k = function(e2, t2) {
  return (e2[t2] | e2[t2 + 1] << 8 | e2[t2 + 2] << 16 | e2[t2 + 3] << 24) >>> 0;
}, A = function(e2, t2) {
  return k(e2, t2) + k(e2, t2 + 4) * 4294967296;
}, j = function(t2, n2) {
  var r2 = e;
  return ((t2[0] & 15) != 8 || t2[0] >> 4 > 7 || (t2[0] << 8 | t2[1]) % 31) && T(6, `invalid zlib data`), (t2[1] >> 5 & 1) == +!n2 && T(6, `invalid zlib data: ` + (t2[1] & 32 ? `need` : `unexpected`) + r2(196)), (t2[1] >> 3 & 4) + 2;
};
function M(e2, t2) {
  return E(e2, { i: 2 }, t2 && t2.out, t2 && t2.dictionary);
}
function N(t2, n2) {
  var r2 = e;
  return E(t2.subarray(j(t2, n2 && n2.dictionary), -4), { i: 2 }, n2 && n2.out, n2 && n2[r2(192)]);
}
var P = typeof TextDecoder < `u` && new TextDecoder();
try {
  P.decode(D, { stream: true });
} catch {
}
function F(e2, t2) {
  return e2 -= 177, d()[e2];
}
var I = function(t2) {
  for (var n2 = e, r2 = ``, i2 = 0; ; ) {
    var a2 = t2[i2++], o2 = (a2 > 127) + (a2 > 223) + (a2 > 239);
    if (i2 + o2 > t2[n2(188)]) return { s: r2, r: C(t2, i2 - 1) };
    o2 ? o2 == 3 ? (a2 = ((a2 & 15) << 18 | (t2[i2++] & 63) << 12 | (t2[i2++] & 63) << 6 | t2[i2++] & 63) - 65536, r2 += String.fromCharCode(55296 | a2 >> 10, 56320 | a2 & 1023)) : o2 & 1 ? r2 += String.fromCharCode((a2 & 31) << 6 | t2[i2++] & 63) : r2 += String[n2(190)]((a2 & 15) << 12 | (t2[i2++] & 63) << 6 | t2[i2++] & 63) : r2 += String.fromCharCode(a2);
  }
};
function L(t2, n2) {
  var r2 = e;
  if (n2) {
    for (var i2 = ``, a2 = 0; a2 < t2.length; a2 += 16384) i2 += String.fromCharCode[r2(177)](null, t2.subarray(a2, a2 + 16384));
    return i2;
  } else if (P) return P.decode(t2);
  else {
    var o2 = I(t2), s2 = o2.s, i2 = o2.r;
    return i2.length && T(8), s2;
  }
}
var R = function(e2, t2) {
  return t2 + 30 + O(e2, t2 + 26) + O(e2, t2 + 28);
}, z = function(e2, t2, n2) {
  var r2 = O(e2, t2 + 28), i2 = L(e2.subarray(t2 + 46, t2 + 46 + r2), !(O(e2, t2 + 8) & 2048)), a2 = t2 + 46 + r2, o2 = k(e2, t2 + 20), s2 = n2 && o2 == 4294967295 ? B(e2, a2) : [o2, k(e2, t2 + 24), k(e2, t2 + 42)], c2 = s2[0], l2 = s2[1], u2 = s2[2];
  return [O(e2, t2 + 10), c2, l2, i2, a2 + O(e2, t2 + 30) + O(e2, t2 + 32), u2];
}, B = function(e2, t2) {
  for (; O(e2, t2) != 1; t2 += 4 + O(e2, t2 + 2)) ;
  return [A(e2, t2 + 12), A(e2, t2 + 4), A(e2, t2 + 20)];
};
function V(e2, n2) {
  for (var r2 = {}, i2 = e2.length - 22; k(e2, i2) != 101010256; --i2) (!i2 || e2.length - i2 > 65558) && T(13);
  var a2 = O(e2, i2 + 8);
  if (!a2) return {};
  var o2 = k(e2, i2 + 16), s2 = o2 == 4294967295 || a2 == 65535;
  if (s2) {
    var c2 = k(e2, i2 - 12);
    s2 = k(e2, c2) == 101075792, s2 && (a2 = k(e2, c2 + 32), o2 = k(e2, c2 + 48));
  }
  for (var l2 = n2 && n2.filter, u2 = 0; u2 < a2; ++u2) {
    var d2 = z(e2, o2, s2), f2 = d2[0], p2 = d2[1], m = d2[2], h = d2[3], g = d2[4], _ = d2[5], v = R(e2, _);
    o2 = g, (!l2 || l2({ name: h, size: p2, originalSize: m, compression: f2 })) && (f2 ? f2 == 8 ? r2[h] = M(e2.subarray(v, v + p2), { out: new t(m) }) : T(14, `unknown compression type ` + f2) : r2[h] = C(e2, v, v + p2));
  }
  return r2;
}
export {
  V as n,
  N as t
};
