var e = h;
(function(e2, t2) {
  for (var n2 = h, r2 = e2(); ; ) try {
    if (-parseInt(n2(435)) / 1 + -parseInt(n2(447)) / 2 + parseInt(n2(420)) / 3 * (-parseInt(n2(429)) / 4) + -parseInt(n2(416)) / 5 + parseInt(n2(427)) / 6 * (-parseInt(n2(443)) / 7) + parseInt(n2(437)) / 8 * (-parseInt(n2(439)) / 9) + parseInt(n2(434)) / 10 * (parseInt(n2(422)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(g, 415242);
function t(e2) {
  return Math[h(448)](e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString(`en`).replace(/,/g, ``) : e2.toString(10);
}
function n(e2, t2) {
  var n2 = h;
  if (!isFinite(e2) || e2 === 0) return null;
  var r2 = (e2 = t2 ? e2[n2(449)](t2 - 1) : e2.toExponential()).indexOf(`e`), i2 = e2.slice(0, r2);
  return [i2.length > 1 ? i2[0] + i2.slice(2) : i2, +e2[n2(433)](r2 + 1)];
}
function r(e2) {
  return e2 = n(Math.abs(e2)), e2 ? e2[1] : NaN;
}
function i(e2, t2) {
  return function(n2, r2) {
    for (var i2 = h, a2 = n2.length, o2 = [], s2 = 0, c2 = e2[0], l2 = 0; a2 > 0 && c2 > 0 && (l2 + c2 + 1 > r2 && (c2 = Math.max(1, r2 - l2)), o2.push(n2.substring(a2 -= c2, a2 + c2)), !((l2 += c2 + 1) > r2)); ) c2 = e2[s2 = (s2 + 1) % e2.length];
    return o2.reverse()[i2(431)](t2);
  };
}
function a(e2) {
  return function(t2) {
    return t2.replace(/[0-9]/g, function(t3) {
      return e2[+t3];
    });
  };
}
var o = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function s(e2) {
  var t2 = h;
  if (!(n2 = o.exec(e2))) throw Error(`invalid format: ` + e2);
  var n2;
  return new c({ fill: n2[1], align: n2[2], sign: n2[3], symbol: n2[4], zero: n2[5], width: n2[6], comma: n2[7], precision: n2[8] && n2[8][t2(433)](1), trim: n2[9], type: n2[10] });
}
s.prototype = c.prototype;
function c(e2) {
  var t2 = h;
  this.fill = e2[t2(423)] === void 0 ? ` ` : e2[t2(423)] + ``, this.align = e2.align === void 0 ? `>` : e2.align + ``, this[t2(442)] = e2.sign === void 0 ? `-` : e2.sign + ``, this.symbol = e2.symbol === void 0 ? `` : e2[t2(446)] + ``, this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2[t2(441)], this.precision = e2[t2(445)] === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? `` : e2.type + ``;
}
c.prototype.toString = function() {
  var e2 = h;
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? `0` : ``) + (this[e2(425)] === void 0 ? `` : Math.max(1, this.width | 0)) + (this.comma ? `,` : ``) + (this.precision === void 0 ? `` : `.` + Math[e2(428)](0, this.precision | 0)) + (this.trim ? `~` : ``) + this.type;
};
function l(e2) {
  B: for (var t2 = e2.length, n2 = 1, r2 = -1, i2; n2 < t2; ++n2) switch (e2[n2]) {
    case `.`:
      r2 = i2 = n2;
      break;
    case `0`:
      r2 === 0 && (r2 = n2), i2 = n2;
      break;
    default:
      if (!+e2[n2]) break B;
      r2 > 0 && (r2 = 0);
      break;
  }
  return r2 > 0 ? e2.slice(0, r2) + e2.slice(i2 + 1) : e2;
}
var u;
function d(e2, t2) {
  var r2 = h, i2 = n(e2, t2);
  if (!i2) return u = void 0, e2.toPrecision(t2);
  var a2 = i2[0], o2 = i2[1], s2 = o2 - (u = Math[r2(428)](-8, Math[r2(440)](8, Math.floor(o2 / 3))) * 3) + 1, c2 = a2.length;
  return s2 === c2 ? a2 : s2 > c2 ? a2 + Array(s2 - c2 + 1).join(`0`) : s2 > 0 ? a2[r2(433)](0, s2) + `.` + a2.slice(s2) : `0.` + Array(1 - s2).join(`0`) + n(e2, Math.max(0, t2 + s2 - 1))[0];
}
function f(e2, t2) {
  var r2 = h, i2 = n(e2, t2);
  if (!i2) return e2 + ``;
  var a2 = i2[0], o2 = i2[1];
  return o2 < 0 ? `0.` + Array(-o2).join(`0`) + a2 : a2.length > o2 + 1 ? a2.slice(0, o2 + 1) + `.` + a2.slice(o2 + 1) : a2 + Array(o2 - a2[r2(421)] + 2).join(`0`);
}
var p = { "%": (e2, t2) => (e2 * 100).toFixed(t2), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + ``, d: t, e: (t2, n2) => t2[e(449)](n2), f: (e2, t2) => e2.toFixed(t2), g: (e2, t2) => e2.toPrecision(t2), o: (t2) => Math.round(t2)[e(418)](8), p: (e2, t2) => f(e2 * 100, t2), r: f, s: d, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
function m(e2) {
  return e2;
}
function h(e2, t2) {
  return e2 -= 415, g()[e2];
}
function g() {
  var e2 = `symbol.1612114uZoIHN.abs.toExponential.prefix.3755870ifsUGD.thousands.toString.formatPrefix.122205AHDLQk.length.11SZgzFk.fill.test.width.percent.12498BBmAdz.max.20gMzixw.zero.join.grouping.slice.33956590QLLFSR.534078lBrhKU.decimal.1008424dSQTVu.nan.36cWVZnA.min.comma.sign.609maHCOL.align.precision`.split(`.`);
  return g = function() {
    return e2;
  }, g();
}
var _ = Array.prototype.map, v = [`y`, `z`, `a`, `f`, `p`, `n`, `\xB5`, `m`, ``, `k`, `M`, `G`, `T`, `P`, `E`, `Z`, `Y`];
function y(t2) {
  var n2 = e, o2 = t2[n2(432)] === void 0 || t2[n2(417)] === void 0 ? m : i(_.call(t2.grouping, Number), t2.thousands + ``), c2 = t2.currency === void 0 ? `` : t2.currency[0] + ``, d2 = t2.currency === void 0 ? `` : t2.currency[1] + ``, f2 = t2[n2(436)] === void 0 ? `.` : t2.decimal + ``, h2 = t2.numerals === void 0 ? m : a(_.call(t2.numerals, String)), g2 = t2[n2(426)] === void 0 ? `%` : t2[n2(426)] + ``, y2 = t2.minus === void 0 ? `\u2212` : t2.minus + ``, b2 = t2[n2(438)] === void 0 ? `NaN` : t2.nan + ``;
  function x2(e2, t3) {
    var r2 = n2;
    e2 = s(e2);
    var i2 = e2.fill, a2 = e2[r2(444)], m2 = e2.sign, _2 = e2[r2(446)], x3 = e2[r2(430)], S3 = e2.width, C2 = e2[r2(441)], w = e2.precision, T = e2.trim, E = e2.type;
    E === `n` ? (C2 = true, E = `g`) : p[E] || (w === void 0 && (w = 12), T = true, E = `g`), (x3 || i2 === `0` && a2 === `=`) && (x3 = true, i2 = `0`, a2 = `=`);
    var D = (t3 && t3.prefix !== void 0 ? t3[r2(415)] : ``) + (_2 === `$` ? c2 : _2 === `#` && /[boxX]/.test(E) ? `0` + E.toLowerCase() : ``), O = (_2 === `$` ? d2 : /[%p]/[r2(424)](E) ? g2 : ``) + (t3 && t3.suffix !== void 0 ? t3.suffix : ``), k = p[E], A = /[defgprs%]/[r2(424)](E);
    w = w === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function j(e3) {
      var t4 = r2, n3 = D, s2 = O, c3, d3, p2;
      if (E === `c`) s2 = k(e3) + s2, e3 = ``;
      else {
        e3 = +e3;
        var g3 = e3 < 0 || 1 / e3 < 0;
        if (e3 = isNaN(e3) ? b2 : k(Math[t4(448)](e3), w), T && (e3 = l(e3)), g3 && +e3 == 0 && m2 !== `+` && (g3 = false), n3 = (g3 ? m2 === `(` ? m2 : y2 : m2 === `-` || m2 === `(` ? `` : m2) + n3, s2 = (E === `s` && !isNaN(e3) && u !== void 0 ? v[8 + u / 3] : ``) + s2 + (g3 && m2 === `(` ? `)` : ``), A) {
          for (c3 = -1, d3 = e3.length; ++c3 < d3; ) if (p2 = e3.charCodeAt(c3), 48 > p2 || p2 > 57) {
            s2 = (p2 === 46 ? f2 + e3.slice(c3 + 1) : e3.slice(c3)) + s2, e3 = e3.slice(0, c3);
            break;
          }
        }
      }
      C2 && !x3 && (e3 = o2(e3, 1 / 0));
      var _3 = n3.length + e3.length + s2[t4(421)], j2 = _3 < S3 ? Array(S3 - _3 + 1).join(i2) : ``;
      switch (C2 && x3 && (e3 = o2(j2 + e3, j2[t4(421)] ? S3 - s2.length : 1 / 0), j2 = ``), a2) {
        case `<`:
          e3 = n3 + e3 + s2 + j2;
          break;
        case `=`:
          e3 = n3 + j2 + e3 + s2;
          break;
        case `^`:
          e3 = j2.slice(0, _3 = j2.length >> 1) + n3 + e3 + s2 + j2.slice(_3);
          break;
        default:
          e3 = j2 + n3 + e3 + s2;
          break;
      }
      return h2(e3);
    }
    return j.toString = function() {
      return e2 + ``;
    }, j;
  }
  function S2(e2, t3) {
    var n3 = Math.max(-8, Math.min(8, Math.floor(r(t3) / 3))) * 3, i2 = 10 ** -n3, a2 = x2((e2 = s(e2), e2.type = `f`, e2), { suffix: v[8 + n3 / 3] });
    return function(e3) {
      return a2(i2 * e3);
    };
  }
  return { format: x2, formatPrefix: S2 };
}
var b, x, S;
C({ thousands: `,`, grouping: [3], currency: [`$`, ``] });
function C(t2) {
  var n2 = e;
  return b = y(t2), x = b.format, S = b[n2(419)], b;
}
export {
  S as i,
  s as n,
  x as r,
  r as t
};
