import { $ as e, F as t, c as n, d as r, l as i, m as a, ot as o } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { g as s, h as c, t as l } from "./index-D-g3WoLo.js";
import { t as u } from "./worker-ref-L9--z9jG.js";
import { A as d, B as f, C as p, D as m, G as h, H as g, I as _, K as v, L as y, Q as b, R as x, S, T as C, V as w, W as T, c as E, d as D, et as O, f as k, g as A, h as ee, k as te, l as ne, m as j, nt as re, p as ie, q as ae, r as oe, t as se, w as ce, x as le, z as ue } from "./src-B18GHWxx.js";
import { n as de, r as fe } from "./defaultLocale-BPnJm4Jq.js";
import { t as pe } from "./init-FHLUNZLx.js";
import { c as me, i as he, l as ge, n as _e, r as ve, s as ye } from "./linear-JqIC9lyT.js";
import { t as be } from "./ordinal-Dn-wPUXi.js";
import { A as xe, E as Se, O as Ce, S as we, T as Te, _ as Ee, b as De, c as Oe, f as ke, g as Ae, i as je, j as Me, l as Ne, m as Pe, o as Fe, s as Ie, u as Le, w as Re, x as ze, y as Be } from "./time-C88gjQMl.js";
import { t as Ve } from "./arc-hTPkWzTM.js";
import { t as He } from "./pie-HU0l0Yt6.js";
var M = Q;
(function(e2, t2) {
  for (var n2 = Q, r2 = e2(); ; ) try {
    if (parseInt(n2(305)) / 1 * (-parseInt(n2(748)) / 2) + -parseInt(n2(905)) / 3 * (-parseInt(n2(871)) / 4) + -parseInt(n2(652)) / 5 + -parseInt(n2(428)) / 6 + parseInt(n2(704)) / 7 * (-parseInt(n2(764)) / 8) + -parseInt(n2(387)) / 9 * (parseInt(n2(853)) / 10) + parseInt(n2(393)) / 11 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Ha, 831939);
function Ue(e2) {
  var t2 = Q;
  let n2;
  for (; n2 = e2[t2(814)]; ) e2 = n2;
  return e2;
}
function We(e2, t2) {
  var n2 = Q;
  if (e2 = Ue(e2), t2 === void 0 && (t2 = e2.currentTarget), t2) {
    var r2 = t2.ownerSVGElement || t2;
    if (r2[n2(1130)]) {
      var i2 = r2.createSVGPoint();
      return i2.x = e2.clientX, i2.y = e2.clientY, i2 = i2.matrixTransform(t2.getScreenCTM()[n2(218)]()), [i2.x, i2.y];
    }
    if (t2.getBoundingClientRect) {
      var a2 = t2.getBoundingClientRect();
      return [e2[n2(457)] - a2.left - t2[n2(346)], e2[n2(763)] - a2[n2(299)] - t2.clientTop];
    }
  }
  return [e2[n2(519)], e2.pageY];
}
function Ge(e2) {
  return typeof e2 == `string` ? new oe([document[Q(358)](e2)], [document.documentElement]) : new oe([ue(e2)], y);
}
var Ke = { passive: false }, qe = { capture: true, passive: false };
function Je(e2) {
  e2.stopImmediatePropagation();
}
function Ye(e2) {
  e2.preventDefault(), e2.stopImmediatePropagation();
}
function Xe(e2) {
  var t2 = e2.document.documentElement, n2 = j(e2).on(`dragstart.drag`, Ye, qe);
  `onselectstart` in t2 ? n2.on(`selectstart.drag`, Ye, qe) : (t2.__noselect = t2.style.MozUserSelect, t2.style.MozUserSelect = `none`);
}
function Ze(e2, t2) {
  var n2 = Q, r2 = e2.document[n2(281)], i2 = j(e2).on(`dragstart.drag`, null);
  t2 && (i2.on(`click.drag`, Ye, qe), setTimeout(function() {
    var e3 = n2;
    i2.on(e3(1199), null);
  }, 0)), `onselectstart` in r2 ? i2.on(`selectstart.drag`, null) : (r2[n2(521)][n2(1251)] = r2.__noselect, delete r2.__noselect);
}
var Qe = (e2) => () => e2;
function $e(e2, { sourceEvent: t2, subject: n2, target: r2, identifier: i2, active: a2, x: o2, y: s2, dx: c2, dy: l2, dispatch: u2 }) {
  Object.defineProperties(this, { type: { value: e2, enumerable: true, configurable: true }, sourceEvent: { value: t2, enumerable: true, configurable: true }, subject: { value: n2, enumerable: true, configurable: true }, target: { value: r2, enumerable: true, configurable: true }, identifier: { value: i2, enumerable: true, configurable: true }, active: { value: a2, enumerable: true, configurable: true }, x: { value: o2, enumerable: true, configurable: true }, y: { value: s2, enumerable: true, configurable: true }, dx: { value: c2, enumerable: true, configurable: true }, dy: { value: l2, enumerable: true, configurable: true }, _: { value: u2 } });
}
$e[M(977)].on = function() {
  var e2 = this._.on.apply(this._, arguments);
  return e2 === this._ ? this : e2;
};
function et(e2) {
  return !e2.ctrlKey && !e2.button;
}
function tt() {
  return this.parentNode;
}
function nt(e2, t2) {
  return t2 ?? { x: e2.x, y: e2.y };
}
function rt() {
  return navigator.maxTouchPoints || `ontouchstart` in this;
}
function it() {
  var e2 = M, t2 = et, n2 = tt, r2 = nt, i2 = rt, a2 = {}, o2 = v(`start`, e2(729), `end`), s2 = 0, c2, l2, u2, d2, f2 = 0;
  function p2(t3) {
    var n3 = e2;
    t3.on(`mousedown.drag`, m2).filter(i2).on(`touchstart.drag`, _2).on(`touchmove.drag`, y2, Ke).on(`touchend.drag touchcancel.drag`, b2)[n3(521)](`touch-action`, `none`).style(`-webkit-tap-highlight-color`, `rgba(0,0,0,0)`);
  }
  function m2(r3, i3) {
    var a3 = e2;
    if (!(d2 || !t2.call(this, r3, i3))) {
      var o3 = x2(this, n2[a3(872)](this, r3, i3), r3, i3, `mouse`);
      o3 && (j(r3.view).on(`mousemove.drag`, h2, qe).on(a3(189), g2, qe), Xe(r3[a3(515)]), Je(r3), u2 = false, c2 = r3.clientX, l2 = r3.clientY, o3(`start`, r3));
    }
  }
  function h2(e3) {
    if (Ye(e3), !u2) {
      var t3 = e3.clientX - c2, n3 = e3.clientY - l2;
      u2 = t3 * t3 + n3 * n3 > f2;
    }
    a2.mouse(`drag`, e3);
  }
  function g2(e3) {
    j(e3.view).on(`mousemove.drag mouseup.drag`, null), Ze(e3.view, u2), Ye(e3), a2.mouse(`end`, e3);
  }
  function _2(r3, i3) {
    var a3 = e2;
    if (t2.call(this, r3, i3)) {
      var o3 = r3.changedTouches, s3 = n2.call(this, r3, i3), c3 = o3.length, l3, u3;
      for (l3 = 0; l3 < c3; ++l3) (u3 = x2(this, s3, r3, i3, o3[l3][a3(1043)], o3[l3])) && (Je(r3), u3(a3(210), r3, o3[l3]));
    }
  }
  function y2(e3) {
    var t3 = e3.changedTouches, n3 = t3.length, r3, i3;
    for (r3 = 0; r3 < n3; ++r3) (i3 = a2[t3[r3].identifier]) && (Ye(e3), i3(`drag`, e3, t3[r3]));
  }
  function b2(t3) {
    var n3 = e2, r3 = t3.changedTouches, i3 = r3.length, o3, s3;
    for (d2 && clearTimeout(d2), d2 = setTimeout(function() {
      d2 = null;
    }, 500), o3 = 0; o3 < i3; ++o3) (s3 = a2[r3[o3].identifier]) && (Je(t3), s3(n3(1234), t3, r3[o3]));
  }
  function x2(t3, n3, i3, c3, l3, u3) {
    var d3 = e2, f3 = o2[d3(1232)](), m3 = We(u3 || i3, n3), h3, g3, _3;
    if ((_3 = r2.call(t3, new $e(`beforestart`, { sourceEvent: i3, target: p2, identifier: l3, active: s2, x: m3[0], y: m3[1], dx: 0, dy: 0, dispatch: f3 }), c3)) != null) return h3 = _3.x - m3[0] || 0, g3 = _3.y - m3[1] || 0, function e3(r3, i4, o3) {
      var u4 = d3, v2 = m3, y3;
      switch (r3) {
        case `start`:
          a2[l3] = e3, y3 = s2++;
          break;
        case u4(1234):
          delete a2[l3], --s2;
        case `drag`:
          m3 = We(o3 || i4, n3), y3 = s2;
          break;
      }
      f3.call(r3, t3, new $e(r3, { sourceEvent: i4, subject: _3, target: p2, identifier: l3, active: y3, x: m3[0] + h3, y: m3[1] + g3, dx: m3[0] - v2[0], dy: m3[1] - v2[1], dispatch: f3 }), c3);
    };
  }
  return p2.filter = function(e3) {
    return arguments.length ? (t2 = typeof e3 == `function` ? e3 : Qe(!!e3), p2) : t2;
  }, p2.container = function(t3) {
    var r3 = e2;
    return arguments.length ? (n2 = typeof t3 == r3(478) ? t3 : Qe(t3), p2) : n2;
  }, p2[e2(771)] = function(t3) {
    var n3 = e2;
    return arguments[n3(626)] ? (r2 = typeof t3 == `function` ? t3 : Qe(t3), p2) : r2;
  }, p2.touchable = function(e3) {
    return arguments.length ? (i2 = typeof e3 == `function` ? e3 : Qe(!!e3), p2) : i2;
  }, p2.on = function() {
    var e3 = o2.on.apply(o2, arguments);
    return e3 === o2 ? p2 : e3;
  }, p2.clickDistance = function(t3) {
    var n3 = e2;
    return arguments[n3(626)] ? (f2 = (t3 = +t3) * t3, p2) : Math[n3(969)](f2);
  }, p2;
}
var at = (e2) => +e2, ot = {}, st = {}, ct = 34, lt = 10, ut = 13;
function dt(e2) {
  var t2 = M;
  return Function(`d`, t2(286) + e2.map(function(e3, n2) {
    var r2 = t2;
    return JSON[r2(971)](e3) + r2(765) + n2 + `] || ""`;
  }).join(`,`) + `}`);
}
function ft(e2, t2) {
  var n2 = dt(e2);
  return function(r2, i2) {
    return t2(n2(r2), i2, e2);
  };
}
function pt(e2) {
  var t2 = M, n2 = /* @__PURE__ */ Object.create(null), r2 = [];
  return e2[t2(743)](function(e3) {
    for (var t3 in e3) t3 in n2 || r2.push(n2[t3] = t3);
  }), r2;
}
function mt(e2, t2) {
  var n2 = e2 + ``, r2 = n2.length;
  return r2 < t2 ? Array(t2 - r2 + 1).join(0) + n2 : n2;
}
function ht(e2) {
  return e2 < 0 ? `-` + mt(-e2, 6) : e2 > 9999 ? `+` + mt(e2, 6) : mt(e2, 4);
}
function gt(e2) {
  var t2 = M, n2 = e2[t2(261)](), r2 = e2.getUTCMinutes(), i2 = e2[t2(877)](), a2 = e2.getUTCMilliseconds();
  return isNaN(e2) ? t2(1019) : ht(e2[t2(1022)](), 4) + `-` + mt(e2.getUTCMonth() + 1, 2) + `-` + mt(e2.getUTCDate(), 2) + (a2 ? `T` + mt(n2, 2) + `:` + mt(r2, 2) + `:` + mt(i2, 2) + `.` + mt(a2, 3) + `Z` : i2 ? `T` + mt(n2, 2) + `:` + mt(r2, 2) + `:` + mt(i2, 2) + `Z` : r2 || n2 ? `T` + mt(n2, 2) + `:` + mt(r2, 2) + `Z` : ``);
}
function _t(e2) {
  var t2 = RegExp(`["` + e2 + `
\r]`), n2 = e2.charCodeAt(0);
  function r2(e3, t3) {
    var n3 = Q, r3, a3, o3 = i2(e3, function(e4, n4) {
      if (r3) return r3(e4, n4 - 1);
      a3 = e4, r3 = t3 ? ft(e4, t3) : dt(e4);
    });
    return o3[n3(954)] = a3 || [], o3;
  }
  function i2(e3, t3) {
    var r3 = Q, i3 = [], a3 = e3[r3(626)], o3 = 0, s3 = 0, c3, l3 = a3 <= 0, u3 = false;
    e3.charCodeAt(a3 - 1) === lt && --a3, e3.charCodeAt(a3 - 1) === ut && --a3;
    function d2() {
      var t4 = r3;
      if (l3) return st;
      if (u3) return u3 = false, ot;
      var i4, s4 = o3, c4;
      if (e3.charCodeAt(s4) === ct) {
        for (; o3++ < a3 && e3[t4(544)](o3) !== ct || e3[t4(544)](++o3) === ct; ) ;
        return (i4 = o3) >= a3 ? l3 = true : (c4 = e3[t4(544)](o3++)) === lt ? u3 = true : c4 === ut && (u3 = true, e3.charCodeAt(o3) === lt && ++o3), e3[t4(1101)](s4 + 1, i4 - 1).replace(/""/g, `"`);
      }
      for (; o3 < a3; ) {
        if ((c4 = e3.charCodeAt(i4 = o3++)) === lt) u3 = true;
        else if (c4 === ut) u3 = true, e3.charCodeAt(o3) === lt && ++o3;
        else if (c4 !== n2) continue;
        return e3.slice(s4, i4);
      }
      return l3 = true, e3.slice(s4, a3);
    }
    for (; (c3 = d2()) !== st; ) {
      for (var f2 = []; c3 !== ot && c3 !== st; ) f2.push(c3), c3 = d2();
      t3 && (f2 = t3(f2, s3++)) == null || i3.push(f2);
    }
    return i3;
  }
  function a2(t3, n3) {
    return t3.map(function(t4) {
      return n3.map(function(e3) {
        return u2(t4[e3]);
      }).join(e2);
    });
  }
  function o2(t3, n3) {
    return n3 ?? (n3 = pt(t3)), [n3.map(u2).join(e2)].concat(a2(t3, n3)).join(`
`);
  }
  function s2(e3, t3) {
    var n3 = Q;
    return t3 ?? (t3 = pt(e3)), a2(e3, t3)[n3(1045)](`
`);
  }
  function c2(e3) {
    return e3.map(l2).join(`
`);
  }
  function l2(t3) {
    return t3.map(u2).join(e2);
  }
  function u2(e3) {
    var n3 = Q;
    return e3 == null ? `` : e3 instanceof Date ? gt(e3) : t2[n3(1021)](e3 += ``) ? `"` + e3.replace(/"/g, `""`) + `"` : e3;
  }
  return { parse: r2, parseRows: i2, format: o2, formatBody: s2, formatRows: c2, formatRow: l2, formatValue: u2 };
}
var vt = _t(`,`), yt = vt.parse, bt = vt[M(988)];
vt.format, vt.formatBody, vt.formatRows, vt.formatRow, vt.formatValue;
var xt = _t(`	`), St = xt[M(484)], Ct = xt[M(988)];
xt.format, xt.formatBody, xt[M(642)], xt.formatRow, xt.formatValue;
function wt(e2) {
  return Math.log(e2);
}
function Tt(e2) {
  return Math[M(890)](e2);
}
function Et(e2) {
  return -Math.log(-e2);
}
function Dt(e2) {
  return -Math[M(890)](-e2);
}
function Ot(e2) {
  return isFinite(e2) ? +(`1e` + e2) : e2 < 0 ? 0 : e2;
}
function kt(e2) {
  return e2 === 10 ? Ot : e2 === Math.E ? Math[M(890)] : (t2) => e2 ** +t2;
}
function At(e2) {
  return e2 === Math.E ? Math[M(1098)] : e2 === 10 && Math.log10 || e2 === 2 && Math.log2 || (e2 = Math.log(e2), (t2) => Math.log(t2) / e2);
}
function jt(e2) {
  return (t2, n2) => -e2(-t2, n2);
}
function N(e2) {
  var t2 = M;
  let n2 = e2(wt, Tt), r2 = n2.domain, i2 = 10, a2, o2;
  function s2() {
    return a2 = At(i2), o2 = kt(i2), r2()[0] < 0 ? (a2 = jt(a2), o2 = jt(o2), e2(Et, Dt)) : e2(wt, Tt), n2;
  }
  return n2.base = function(e3) {
    return arguments.length ? (i2 = +e3, s2()) : i2;
  }, n2.domain = function(e3) {
    return arguments.length ? (r2(e3), s2()) : r2();
  }, n2.ticks = (e3) => {
    var t3 = Q;
    let n3 = r2(), s3 = n3[0], c2 = n3[n3.length - 1], l2 = c2 < s3;
    l2 && ([s3, c2] = [c2, s3]);
    let u2 = a2(s3), d2 = a2(c2), f2, p2, m2 = e3 == null ? 10 : +e3, h2 = [];
    if (!(i2 % 1) && d2 - u2 < m2) {
      if (u2 = Math.floor(u2), d2 = Math.ceil(d2), s3 > 0) {
        for (; u2 <= d2; ++u2) for (f2 = 1; f2 < i2; ++f2) if (p2 = u2 < 0 ? f2 / o2(-u2) : f2 * o2(u2), !(p2 < s3)) {
          if (p2 > c2) break;
          h2[t3(559)](p2);
        }
      } else for (; u2 <= d2; ++u2) for (f2 = i2 - 1; f2 >= 1; --f2) if (p2 = u2 > 0 ? f2 / o2(-u2) : f2 * o2(u2), !(p2 < s3)) {
        if (p2 > c2) break;
        h2.push(p2);
      }
      h2[t3(626)] * 2 < m2 && (h2 = ge(s3, c2, m2));
    } else h2 = ge(u2, d2, Math.min(d2 - u2, m2)).map(o2);
    return l2 ? h2.reverse() : h2;
  }, n2[t2(230)] = (e3, r3) => {
    var s3 = t2;
    if (e3 ?? (e3 = 10), r3 ?? (r3 = i2 === 10 ? `s` : `,`), typeof r3 != s3(478) && (!(i2 % 1) && (r3 = de(r3)).precision == null && (r3[s3(825)] = true), r3 = fe(r3)), e3 === 1 / 0) return r3;
    let c2 = Math.max(1, i2 * e3 / n2[s3(912)]().length);
    return (e4) => {
      let t3 = e4 / o2(Math[s3(448)](a2(e4)));
      return t3 * i2 < i2 - 0.5 && (t3 *= i2), t3 <= c2 ? r3(e4) : ``;
    };
  }, n2.nice = () => r2(Me(r2(), { floor: (e3) => o2(Math[t2(752)](a2(e3))), ceil: (e3) => o2(Math[t2(232)](a2(e3))) })), n2;
}
function Mt() {
  var e2 = M;
  let t2 = N(he()).domain([1, 10]);
  return t2[e2(1232)] = () => _e(t2, Mt()).base(t2.base()), pe[e2(868)](t2, arguments), t2;
}
function Nt(e2) {
  return function(t2) {
    return Math.sign(t2) * Math.log1p(Math[Q(783)](t2 / e2));
  };
}
function Pt(e2) {
  return function(t2) {
    var n2 = Q;
    return Math[n2(195)](t2) * Math[n2(833)](Math[n2(783)](t2)) * e2;
  };
}
function Ft(e2) {
  var t2 = 1, n2 = e2(Nt(t2), Pt(t2));
  return n2.constant = function(n3) {
    return arguments.length ? e2(Nt(t2 = +n3), Pt(t2)) : t2;
  }, ve(n2);
}
function It() {
  var e2 = Ft(he());
  return e2.copy = function() {
    return _e(e2, It()).constant(e2.constant());
  }, pe.apply(e2, arguments);
}
function Lt() {
  return pe.apply(Ae(Te, we, Ce, Be, Fe, Oe, Se, ke, Re, Ne).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Rt(e2, t2, n2) {
  var r2 = M, i2 = null, a2 = ce(true), o2 = null, s2 = _, c2 = null, l2 = ee(u2);
  e2 = typeof e2 == r2(478) ? e2 : e2 === void 0 ? k : ce(+e2), t2 = typeof t2 == `function` ? t2 : ce(t2 === void 0 ? 0 : +t2), n2 = typeof n2 == `function` ? n2 : n2 === void 0 ? ie : ce(+n2);
  function u2(u3) {
    var d3 = r2, f2, p2, m2, h2 = (u3 = x(u3)).length, g2, _2 = false, v2, y2 = Array(h2), b2 = Array(h2);
    for (o2 ?? (c2 = s2(v2 = l2())), f2 = 0; f2 <= h2; ++f2) {
      if (!(f2 < h2 && a2(g2 = u3[f2], f2, u3)) === _2) if (_2 = !_2) p2 = f2, c2.areaStart(), c2[d3(328)]();
      else {
        for (c2.lineEnd(), c2.lineStart(), m2 = f2 - 1; m2 >= p2; --m2) c2.point(y2[m2], b2[m2]);
        c2[d3(402)](), c2.areaEnd();
      }
      _2 && (y2[f2] = +e2(g2, f2, u3), b2[f2] = +t2(g2, f2, u3), c2[d3(1236)](i2 ? +i2(g2, f2, u3) : y2[f2], n2 ? +n2(g2, f2, u3) : b2[f2]));
    }
    if (v2) return c2 = null, v2 + `` || null;
  }
  function d2() {
    var e3 = r2;
    return A()[e3(986)](a2).curve(s2).context(o2);
  }
  return u2.x = function(t3) {
    return arguments.length ? (e2 = typeof t3 == `function` ? t3 : ce(+t3), i2 = null, u2) : e2;
  }, u2.x0 = function(t3) {
    return arguments.length ? (e2 = typeof t3 == `function` ? t3 : ce(+t3), u2) : e2;
  }, u2.x1 = function(e3) {
    return arguments.length ? (i2 = e3 == null ? null : typeof e3 == `function` ? e3 : ce(+e3), u2) : i2;
  }, u2.y = function(e3) {
    return arguments.length ? (t2 = typeof e3 == `function` ? e3 : ce(+e3), n2 = null, u2) : t2;
  }, u2.y0 = function(e3) {
    return arguments.length ? (t2 = typeof e3 == `function` ? e3 : ce(+e3), u2) : t2;
  }, u2.y1 = function(e3) {
    return arguments.length ? (n2 = e3 == null ? null : typeof e3 == `function` ? e3 : ce(+e3), u2) : n2;
  }, u2.lineX0 = u2.lineY0 = function() {
    return d2().x(e2).y(t2);
  }, u2[r2(840)] = function() {
    return d2().x(e2).y(n2);
  }, u2.lineX1 = function() {
    return d2().x(i2).y(t2);
  }, u2.defined = function(e3) {
    return arguments.length ? (a2 = typeof e3 == `function` ? e3 : ce(!!e3), u2) : a2;
  }, u2.curve = function(e3) {
    var t3 = r2;
    return arguments[t3(626)] ? (s2 = e3, o2 != null && (c2 = s2(o2)), u2) : s2;
  }, u2.context = function(e3) {
    return arguments.length ? (e3 == null ? o2 = c2 = null : c2 = s2(o2 = e3), u2) : o2;
  }, u2;
}
function zt(e2, t2) {
  var n2 = M;
  if (e2 === void 0 || !e2.document) throw Error(`jQuery requires a window with a document`);
  var r2 = [], i2 = Object[n2(1252)], a2 = r2.slice, o2 = r2.flat ? function(e3) {
    return r2[n2(1004)].call(e3);
  } : function(e3) {
    return r2.concat.apply([], e3);
  }, s2 = r2.push, c2 = r2.indexOf, l2 = {}, u2 = l2.toString, d2 = l2.hasOwnProperty, f2 = d2.toString, p2 = f2.call(Object), m2 = {};
  function h2(e3) {
    return e3 == null ? e3 + `` : typeof e3 == `object` ? l2[u2.call(e3)] || `object` : typeof e3;
  }
  function g2(e3) {
    return e3 != null && e3 === e3.window;
  }
  function _2(e3) {
    var t3 = !!e3 && e3.length, n3 = h2(e3);
    return typeof e3 == `function` || g2(e3) ? false : n3 === `array` || t3 === 0 || typeof t3 == `number` && t3 > 0 && t3 - 1 in e3;
  }
  var v2 = e2.document, y2 = { type: true, src: true, nonce: true, noModule: true };
  function b2(e3, t3, r3) {
    var i3 = n2;
    r3 || (r3 = v2);
    var a3, o3 = r3.createElement(i3(566));
    for (a3 in o3.text = e3, y2) t3 && t3[a3] && (o3[a3] = t3[a3]);
    r3.head.appendChild(o3).parentNode && o3.parentNode.removeChild(o3);
  }
  var x2 = `4.0.0`, S2 = /HTML$/i, C2 = function(e3, t3) {
    return new C2.fn.init(e3, t3);
  };
  C2.fn = C2.prototype = { jquery: x2, constructor: C2, length: 0, toArray: function() {
    return a2.call(this);
  }, get: function(e3) {
    return e3 == null ? a2.call(this) : e3 < 0 ? this[e3 + this.length] : this[e3];
  }, pushStack: function(e3) {
    var t3 = C2[n2(1078)](this.constructor(), e3);
    return t3.prevObject = this, t3;
  }, each: function(e3) {
    return C2.each(this, e3);
  }, map: function(e3) {
    return this.pushStack(C2.map(this, function(t3, n3) {
      return e3.call(t3, n3, t3);
    }));
  }, slice: function() {
    return this.pushStack(a2.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    var e3 = n2;
    return this[e3(662)](C2.grep(this, function(e4, t3) {
      return (t3 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(C2.grep(this, function(e3, t3) {
      return t3 % 2;
    }));
  }, eq: function(e3) {
    var t3 = this.length, n3 = +e3 + (e3 < 0 ? t3 : 0);
    return this.pushStack(n3 >= 0 && n3 < t3 ? [this[n3]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  } }, C2.extend = C2.fn.extend = function() {
    var e3 = n2, t3, r3, i3, a3, o3, s3, c3 = arguments[0] || {}, l3 = 1, u3 = arguments[e3(626)], d3 = false;
    for (typeof c3 == `boolean` && (d3 = c3, c3 = arguments[l3] || {}, l3++), typeof c3 != `object` && typeof c3 != `function` && (c3 = {}), l3 === u3 && (c3 = this, l3--); l3 < u3; l3++) if ((t3 = arguments[l3]) != null) for (r3 in t3) a3 = t3[r3], !(r3 === `__proto__` || c3 === a3) && (d3 && a3 && (C2.isPlainObject(a3) || (o3 = Array.isArray(a3))) ? (i3 = c3[r3], s3 = o3 && !Array.isArray(i3) ? [] : !o3 && !C2.isPlainObject(i3) ? {} : i3, o3 = false, c3[r3] = C2[e3(294)](d3, s3, a3)) : a3 !== void 0 && (c3[r3] = a3));
    return c3;
  }, C2.extend({ expando: n2(257) + (x2 + Math.random())[n2(1077)](/\D/g, ``), isReady: true, error: function(e3) {
    throw Error(e3);
  }, noop: function() {
  }, isPlainObject: function(e3) {
    var t3 = n2, r3, a3;
    return !e3 || u2.call(e3) !== `[object Object]` ? false : (r3 = i2(e3), r3 ? (a3 = d2.call(r3, `constructor`) && r3.constructor, typeof a3 == `function` && f2[t3(872)](a3) === p2) : true);
  }, isEmptyObject: function(e3) {
    for (var t3 in e3) return false;
    return true;
  }, globalEval: function(e3, t3, r3) {
    b2(e3, { nonce: t3 && t3[n2(1069)] }, r3);
  }, each: function(e3, t3) {
    var n3, r3 = 0;
    if (_2(e3)) for (n3 = e3.length; r3 < n3 && t3.call(e3[r3], r3, e3[r3]) !== false; r3++) ;
    else for (r3 in e3) if (t3.call(e3[r3], r3, e3[r3]) === false) break;
    return e3;
  }, text: function(e3) {
    var t3 = n2, r3, i3 = ``, a3 = 0, o3 = e3[t3(639)];
    if (!o3) for (; r3 = e3[a3++]; ) i3 += C2.text(r3);
    return o3 === 1 || o3 === 11 ? e3.textContent : o3 === 9 ? e3.documentElement.textContent : o3 === 3 || o3 === 4 ? e3.nodeValue : i3;
  }, makeArray: function(e3, t3) {
    var n3 = t3 || [];
    return e3 != null && (_2(Object(e3)) ? C2.merge(n3, typeof e3 == `string` ? [e3] : e3) : s2.call(n3, e3)), n3;
  }, inArray: function(e3, t3, n3) {
    return t3 == null ? -1 : c2.call(t3, e3, n3);
  }, isXMLDoc: function(e3) {
    var t3 = n2, r3 = e3 && e3.namespaceURI, i3 = e3 && (e3.ownerDocument || e3)[t3(281)];
    return !S2.test(r3 || i3 && i3.nodeName || `HTML`);
  }, contains: function(e3, t3) {
    var n3 = t3 && t3.parentNode;
    return e3 === n3 || !!(n3 && n3.nodeType === 1 && (e3.contains ? e3.contains(n3) : e3.compareDocumentPosition && e3.compareDocumentPosition(n3) & 16));
  }, merge: function(e3, t3) {
    for (var r3 = +t3[n2(626)], i3 = 0, a3 = e3.length; i3 < r3; i3++) e3[a3++] = t3[i3];
    return e3.length = a3, e3;
  }, grep: function(e3, t3, n3) {
    for (var r3, i3 = [], a3 = 0, o3 = e3.length, s3 = !n3; a3 < o3; a3++) r3 = !t3(e3[a3], a3), r3 !== s3 && i3.push(e3[a3]);
    return i3;
  }, map: function(e3, t3, n3) {
    var r3, i3, a3 = 0, s3 = [];
    if (_2(e3)) for (r3 = e3.length; a3 < r3; a3++) i3 = t3(e3[a3], a3, n3), i3 != null && s3.push(i3);
    else for (a3 in e3) i3 = t3(e3[a3], a3, n3), i3 != null && s3.push(i3);
    return o2(s3);
  }, guid: 1, support: m2 }), typeof Symbol == `function` && (C2.fn[Symbol[n2(706)]] = r2[Symbol.iterator]), C2.each(`Boolean Number String Function Array Date RegExp Object Error Symbol`.split(` `), function(e3, t3) {
    l2[`[object ` + t3 + `]`] = t3.toLowerCase();
  });
  function w2(e3, t3) {
    return e3.nodeName && e3.nodeName.toLowerCase() === t3.toLowerCase();
  }
  var T2 = r2[n2(204)], E2 = `[\\x20\\t\\r\\n\\f]`, D2 = v2.documentMode, O2 = D2 && RegExp(`:enabled|:disabled|\\[` + E2 + `*name` + E2 + `*=` + E2 + `*(?:''|"")`), k2 = RegExp(`^` + E2 + `+|((?:^|[^\\\\])(?:\\\\.)*)` + E2 + `+$`, `g`), A2 = `(?:\\\\[\\da-fA-F]{1,6}` + E2 + `?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+`, ee2 = RegExp(`^` + E2 + `*([>+~]|` + E2 + `)` + E2 + `*`), te2 = RegExp(E2 + `|>`), ne2 = /[+~]/, j2 = v2.documentElement, re2 = j2.matches || j2.msMatchesSelector;
  function ie2() {
    var e3 = [];
    function t3(n3, r3) {
      return e3.push(n3 + ` `) > C2.expr.cacheLength && delete t3[e3.shift()], t3[n3 + ` `] = r3;
    }
    return t3;
  }
  function ae2(e3) {
    return e3 && e3.getElementsByTagName !== void 0 && e3;
  }
  var oe2 = `\\[` + E2 + `*(` + A2 + `)(?:` + E2 + `*([*^$|!~]?=)` + E2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + A2 + `))|)` + E2 + `*\\]`, se2 = `:(` + A2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + oe2 + n2(414), ce2 = { ID: RegExp(`^#(` + A2 + `)`), CLASS: RegExp(`^\\.(` + A2 + `)`), TAG: RegExp(`^(` + A2 + `|[*])`), ATTR: RegExp(`^` + oe2), PSEUDO: RegExp(`^` + se2), CHILD: RegExp(n2(1230) + E2 + `*(even|odd|(([+-]|)(\\d*)n|)` + E2 + `*(?:([+-]|)` + E2 + `*(\\d+)|))` + E2 + n2(179), `i`) }, le2 = new RegExp(se2), ue2 = RegExp(`\\\\[\\da-fA-F]{1,6}` + E2 + `?|\\\\([^\\r\\n\\f])`, `g`), de2 = function(e3, t3) {
    var r3 = n2, i3 = `0x` + e3.slice(1) - 65536;
    return t3 || (i3 < 0 ? String.fromCharCode(i3 + 65536) : String[r3(746)](i3 >> 10 | 55296, i3 & 1023 | 56320));
  };
  function fe2(e3) {
    return e3.replace(ue2, de2);
  }
  function pe2(e3) {
    C2.error(`Syntax error, unrecognized expression: ` + e3);
  }
  var me2 = RegExp(`^` + E2 + `*,` + E2 + `*`), he2 = ie2();
  function ge2(e3, t3) {
    var r3 = n2, i3, a3, o3, s3, c3, l3, u3, d3 = he2[e3 + ` `];
    if (d3) return t3 ? 0 : d3.slice(0);
    for (c3 = e3, l3 = [], u3 = C2.expr.preFilter; c3; ) {
      for (s3 in (!i3 || (a3 = me2.exec(c3))) && (a3 && (c3 = c3.slice(a3[0].length) || c3), l3[r3(559)](o3 = [])), i3 = false, (a3 = ee2[r3(496)](c3)) && (i3 = a3[r3(1190)](), o3.push({ value: i3, type: a3[0].replace(k2, ` `) }), c3 = c3.slice(i3.length)), ce2) (a3 = C2[r3(979)].match[s3].exec(c3)) && (!u3[s3] || (a3 = u3[s3](a3))) && (i3 = a3[r3(1190)](), o3.push({ value: i3, type: s3, matches: a3 }), c3 = c3.slice(i3[r3(626)]));
      if (!i3) break;
    }
    return t3 ? c3.length : c3 ? pe2(e3) : he2(e3, l3)[r3(1101)](0);
  }
  var _e2 = { ATTR: function(e3) {
    return e3[1] = fe2(e3[1]), e3[3] = fe2(e3[3] || e3[4] || e3[5] || ``), e3[2] === `~=` && (e3[3] = ` ` + e3[3] + ` `), e3.slice(0, 4);
  }, CHILD: function(e3) {
    var t3 = n2;
    return e3[1] = e3[1][t3(856)](), e3[1][t3(1101)](0, 3) === `nth` ? (e3[3] || pe2(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * (e3[3] === `even` || e3[3] === `odd`)), e3[5] = +(e3[7] + e3[8] || e3[3] === `odd`)) : e3[3] && pe2(e3[0]), e3;
  }, PSEUDO: function(e3) {
    var t3 = n2, r3, i3 = !e3[6] && e3[2];
    return ce2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || `` : i3 && le2.test(i3) && (r3 = ge2(i3, true)) && (r3 = i3.indexOf(`)`, i3[t3(626)] - r3) - i3.length) && (e3[0] = e3[0][t3(1101)](0, r3), e3[2] = i3.slice(0, r3)), e3.slice(0, 3));
  } };
  function ve2(e3) {
    for (var t3 = 0, n3 = e3.length, r3 = ``; t3 < n3; t3++) r3 += e3[t3].value;
    return r3;
  }
  function ye2(e3, t3, r3, i3, a3, o3, s3) {
    var c3 = n2, l3 = 0, u3 = e3[c3(626)], d3 = r3 == null;
    if (h2(r3) === c3(227)) for (l3 in a3 = true, r3) ye2(e3, t3, l3, r3[l3], true, o3, s3);
    else if (i3 !== void 0 && (a3 = true, typeof i3 != `function` && (s3 = true), d3 && (s3 ? (t3.call(e3, i3), t3 = null) : (d3 = t3, t3 = function(e4, t4, n3) {
      return d3.call(C2(e4), n3);
    })), t3)) for (; l3 < u3; l3++) t3(e3[l3], r3, s3 ? i3 : i3.call(e3[l3], l3, t3(e3[l3], r3)));
    return a3 ? e3 : d3 ? t3.call(e3) : u3 ? t3(e3[0], r3) : o3;
  }
  var be2 = /[^\x20\t\r\n\f]+/g;
  C2.fn.extend({ attr: function(e3, t3) {
    return ye2(this, C2.attr, e3, t3, arguments.length > 1);
  }, removeAttr: function(e3) {
    return this.each(function() {
      C2.removeAttr(this, e3);
    });
  } }), C2[n2(294)]({ attr: function(e3, t3, r3) {
    var i3 = n2, a3, o3, s3 = e3.nodeType;
    if (!(s3 === 3 || s3 === 8 || s3 === 2)) {
      if (e3.getAttribute === void 0) return C2.prop(e3, t3, r3);
      if ((s3 !== 1 || !C2.isXMLDoc(e3)) && (o3 = C2.attrHooks[t3.toLowerCase()]), r3 !== void 0) {
        if (r3 === null || r3 === false && t3.toLowerCase().indexOf(`aria-`) !== 0) {
          C2[i3(707)](e3, t3);
          return;
        }
        return o3 && `set` in o3 && (a3 = o3.set(e3, r3, t3)) !== void 0 ? a3 : (e3.setAttribute(t3, r3), r3);
      }
      return o3 && i3(483) in o3 && (a3 = o3.get(e3, t3)) !== null ? a3 : (a3 = e3.getAttribute(t3), a3 ?? void 0);
    }
  }, attrHooks: {}, removeAttr: function(e3, t3) {
    var r3 = n2, i3, a3 = 0, o3 = t3 && t3.match(be2);
    if (o3 && e3[r3(639)] === 1) for (; i3 = o3[a3++]; ) e3.removeAttribute(i3);
  } }), D2 && (C2.attrHooks.type = { set: function(e3, t3) {
    if (t3 === n2(1227) && w2(e3, `input`)) {
      var r3 = e3.value;
      return e3.setAttribute(`type`, t3), r3 && (e3.value = r3), t3;
    }
  } });
  var xe2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function Se2(e3, t3) {
    return t3 ? e3 === `\0` ? `\uFFFD` : e3.slice(0, -1) + `\\` + e3.charCodeAt(e3.length - 1).toString(16) + ` ` : `\\` + e3;
  }
  C2.escapeSelector = function(e3) {
    return (e3 + ``).replace(xe2, Se2);
  };
  var Ce2 = r2[n2(418)], we2 = r2.splice, Te2;
  function Ee2(e3, t3) {
    var r3 = n2;
    if (e3 === t3) return Te2 = true, 0;
    var i3 = !e3.compareDocumentPosition - !t3.compareDocumentPosition;
    return i3 || (i3 = (e3.ownerDocument || e3) == (t3.ownerDocument || t3) ? e3[r3(1160)](t3) : 1, i3 & 1 ? e3 == v2 || e3[r3(282)] == v2 && C2.contains(v2, e3) ? -1 : t3 == v2 || t3.ownerDocument == v2 && C2[r3(466)](v2, t3) ? 1 : 0 : i3 & 4 ? -1 : 1);
  }
  C2.uniqueSort = function(e3) {
    var t3 = n2, r3, i3 = [], a3 = 0, o3 = 0;
    if (Te2 = false, Ce2[t3(872)](e3, Ee2), Te2) {
      for (; r3 = e3[o3++]; ) r3 === e3[o3] && (a3 = i3.push(o3));
      for (; a3--; ) we2.call(e3, i3[a3], 1);
    }
    return e3;
  }, C2.fn.uniqueSort = function() {
    return this.pushStack(C2.uniqueSort(a2.apply(this)));
  };
  var De2, Oe2, ke2, Ae2, je2, Me2 = 0, Ne2 = 0, Pe2 = ie2(), Fe2 = ie2(), Ie2 = ie2(), Le2 = RegExp(E2 + `+`, `g`), Re2 = RegExp(`^` + A2 + `$`), ze2 = C2.extend({ needsContext: RegExp(`^` + E2 + `*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(` + E2 + `*((?:-\\d)?\\d*)` + E2 + `*\\)|)(?=[^-]|$)`, `i`) }, ce2), Be2 = /^(?:input|select|textarea|button)$/i, Ve2 = /^h\d$/i, He2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ue2 = function() {
    Ze2();
  }, We2 = $e2(function(e3) {
    var t3 = n2;
    return e3.disabled === true && w2(e3, t3(211));
  }, { dir: `parentNode`, next: `legend` });
  function Ge2(e3, t3, r3, i3) {
    var a3 = n2, o3, c3, l3, u3, d3, f3, p3, m3 = t3 && t3.ownerDocument, h3 = t3 ? t3.nodeType : 9;
    if (r3 || (r3 = []), typeof e3 != `string` || !e3 || h3 !== 1 && h3 !== 9 && h3 !== 11) return r3;
    if (!i3 && (Ze2(t3), t3 || (t3 = ke2), je2)) {
      if (h3 !== 11 && (d3 = He2[a3(496)](e3))) {
        if (o3 = d3[1]) {
          if (h3 === 9) return (l3 = t3.getElementById(o3)) && s2.call(r3, l3), r3;
          if (m3 && (l3 = m3.getElementById(o3)) && C2.contains(t3, l3)) return s2.call(r3, l3), r3;
        } else if (d3[2]) return s2.apply(r3, t3.getElementsByTagName(e3)), r3;
        else if ((o3 = d3[3]) && t3.getElementsByClassName) return s2.apply(r3, t3.getElementsByClassName(o3)), r3;
      }
      if (!Ie2[e3 + ` `] && (!O2 || !O2.test(e3))) {
        if (p3 = e3, m3 = t3, h3 === 1 && (te2.test(e3) || ee2.test(e3))) {
          for (m3 = ne2.test(e3) && ae2(t3.parentNode) || t3, (m3 != t3 || D2) && ((u3 = t3[a3(955)](`id`)) ? u3 = C2.escapeSelector(u3) : t3[a3(985)](`id`, u3 = C2.expando)), f3 = ge2(e3), c3 = f3[a3(626)]; c3--; ) f3[c3] = (u3 ? `#` + u3 : `:scope`) + ` ` + ve2(f3[c3]);
          p3 = f3.join(`,`);
        }
        try {
          return s2.apply(r3, m3.querySelectorAll(p3)), r3;
        } catch {
          Ie2(e3, true);
        } finally {
          u3 === C2.expando && t3.removeAttribute(`id`);
        }
      }
    }
    return st2(e3.replace(k2, `$1`), t3, r3, i3);
  }
  function Ke2(e3) {
    return e3[C2.expando] = true, e3;
  }
  function qe2(e3) {
    return function(t3) {
      return w2(t3, `input`) && t3.type === e3;
    };
  }
  function Je2(e3) {
    return function(t3) {
      return (w2(t3, `input`) || w2(t3, `button`)) && t3.type === e3;
    };
  }
  function Ye2(e3) {
    return function(t3) {
      var n3 = Q;
      return `form` in t3 ? t3.parentNode && t3.disabled === false ? n3(645) in t3 ? `label` in t3.parentNode ? t3.parentNode[n3(350)] === e3 : t3.disabled === e3 : t3.isDisabled === e3 || t3.isDisabled !== !e3 && We2(t3) === e3 : t3.disabled === e3 : `label` in t3 ? t3.disabled === e3 : false;
    };
  }
  function Xe2(e3) {
    return Ke2(function(t3) {
      return t3 = +t3, Ke2(function(n3, r3) {
        for (var i3 = Q, a3, o3 = e3([], n3[i3(626)], t3), s3 = o3.length; s3--; ) n3[a3 = o3[s3]] && (n3[a3] = !(r3[a3] = n3[a3]));
      });
    });
  }
  function Ze2(e3) {
    var t3 = n2, r3, i3 = e3 ? e3.ownerDocument || e3 : v2;
    i3 == ke2 || i3.nodeType !== 9 || (ke2 = i3, Ae2 = ke2[t3(281)], je2 = !C2.isXMLDoc(ke2), D2 && v2 != ke2 && (r3 = ke2[t3(821)]) && r3.top !== r3 && r3.addEventListener(`unload`, Ue2));
  }
  for (De2 in Ge2.matches = function(e3, t3) {
    return Ge2(e3, null, null, t3);
  }, Ge2.matchesSelector = function(e3, t3) {
    var r3 = n2;
    if (Ze2(e3), je2 && !Ie2[t3 + ` `] && (!O2 || !O2.test(t3))) try {
      return re2.call(e3, t3);
    } catch {
      Ie2(t3, true);
    }
    return Ge2(t3, ke2, null, [e3])[r3(626)] > 0;
  }, C2.expr = { cacheLength: 50, createPseudo: Ke2, match: ze2, find: { ID: function(e3, t3) {
    if (t3.getElementById !== void 0 && je2) {
      var n3 = t3.getElementById(e3);
      return n3 ? [n3] : [];
    }
  }, TAG: function(e3, t3) {
    var r3 = n2;
    return t3.getElementsByTagName === void 0 ? t3[r3(358)](e3) : t3.getElementsByTagName(e3);
  }, CLASS: function(e3, t3) {
    if (t3.getElementsByClassName !== void 0 && je2) return t3.getElementsByClassName(e3);
  } }, relative: { ">": { dir: `parentNode`, first: true }, " ": { dir: `parentNode` }, "+": { dir: `previousSibling`, first: true }, "~": { dir: `previousSibling` } }, preFilter: _e2, filter: { ID: function(e3) {
    var t3 = fe2(e3);
    return function(e4) {
      return e4[Q(955)](`id`) === t3;
    };
  }, TAG: function(e3) {
    var t3 = fe2(e3).toLowerCase();
    return e3 === `*` ? function() {
      return true;
    } : function(e4) {
      return w2(e4, t3);
    };
  }, CLASS: function(e3) {
    var t3 = Pe2[e3 + ` `];
    return t3 || (t3 = RegExp(`(^|` + E2 + `)` + e3 + `(` + E2 + `|$)`)) && Pe2(e3, function(e4) {
      return t3.test(typeof e4.className == `string` && e4.className || e4.getAttribute !== void 0 && e4.getAttribute(`class`) || ``);
    });
  }, ATTR: function(e3, t3, n3) {
    return function(r3) {
      var i3 = Q, a3 = C2[i3(919)](r3, e3);
      return a3 == null ? t3 === `!=` : t3 ? (a3 += ``, t3 === `=` ? a3 === n3 : t3 === `!=` ? a3 !== n3 : t3 === `^=` ? n3 && a3.indexOf(n3) === 0 : t3 === `*=` ? n3 && a3[i3(509)](n3) > -1 : t3 === `$=` ? n3 && a3.slice(-n3[i3(626)]) === n3 : t3 === `~=` ? (` ` + a3.replace(Le2, ` `) + ` `).indexOf(n3) > -1 : t3 === `|=` ? a3 === n3 || a3.slice(0, n3.length + 1) === n3 + `-` : false) : true;
    };
  }, CHILD: function(e3, t3, r3, i3, a3) {
    var o3 = n2, s3 = e3.slice(0, 3) !== `nth`, c3 = e3.slice(-4) !== o3(957), l3 = t3 === `of-type`;
    return i3 === 1 && a3 === 0 ? function(e4) {
      return !!e4.parentNode;
    } : function(t4, n3, r4) {
      var u3 = o3, d3, f3, p3, m3, h3, g3 = s3 === c3 ? `previousSibling` : `nextSibling`, _3 = t4[u3(298)], v3 = l3 && t4.nodeName.toLowerCase(), y3 = !r4 && !l3, b3 = false;
      if (_3) {
        if (s3) {
          for (; g3; ) {
            for (p3 = t4; p3 = p3[g3]; ) if (l3 ? w2(p3, v3) : p3[u3(639)] === 1) return false;
            h3 = g3 = e3 === `only` && !h3 && `nextSibling`;
          }
          return true;
        }
        if (h3 = [c3 ? _3[u3(463)] : _3.lastChild], c3 && y3) {
          for (f3 = _3[C2.expando] || (_3[C2.expando] = {}), d3 = f3[e3] || [], m3 = d3[0] === Me2 && d3[1], b3 = m3 && d3[2], p3 = m3 && _3.childNodes[m3]; p3 = ++m3 && p3 && p3[g3] || (b3 = m3 = 0) || h3.pop(); ) if (p3[u3(639)] === 1 && ++b3 && p3 === t4) {
            f3[e3] = [Me2, m3, b3];
            break;
          }
        } else if (y3 && (f3 = t4[C2.expando] || (t4[C2[u3(474)]] = {}), d3 = f3[e3] || [], m3 = d3[0] === Me2 && d3[1], b3 = m3), b3 === false) for (; (p3 = ++m3 && p3 && p3[g3] || (b3 = m3 = 0) || h3[u3(204)]()) && !((l3 ? w2(p3, v3) : p3.nodeType === 1) && ++b3 && (y3 && (f3 = p3[C2.expando] || (p3[C2.expando] = {}), f3[e3] = [Me2, b3]), p3 === t4)); ) ;
        return b3 -= a3, b3 === i3 || b3 % i3 === 0 && b3 / i3 >= 0;
      }
    };
  }, PSEUDO: function(e3, t3) {
    var r3 = n2, i3 = C2.expr.pseudos[e3] || C2[r3(979)].setFilters[e3.toLowerCase()] || pe2(`unsupported pseudo: ` + e3);
    return i3[C2[r3(474)]] ? i3(t3) : i3;
  } }, pseudos: { not: Ke2(function(e3) {
    var t3 = [], n3 = [], r3 = ot2(e3.replace(k2, `$1`));
    return r3[C2.expando] ? Ke2(function(e4, t4, n4, i3) {
      for (var a3, o3 = r3(e4, null, i3, []), s3 = e4.length; s3--; ) (a3 = o3[s3]) && (e4[s3] = !(t4[s3] = a3));
    }) : function(e4, i3, a3) {
      return t3[0] = e4, r3(t3, null, a3, n3), t3[0] = null, !n3.pop();
    };
  }), has: Ke2(function(e3) {
    return function(t3) {
      var n3 = Q;
      return Ge2(e3, t3)[n3(626)] > 0;
    };
  }), contains: Ke2(function(e3) {
    return e3 = fe2(e3), function(t3) {
      var n3 = Q;
      return (t3.textContent || C2.text(t3))[n3(509)](e3) > -1;
    };
  }), lang: Ke2(function(e3) {
    return Re2.test(e3 || ``) || pe2(`unsupported lang: ` + e3), e3 = fe2(e3).toLowerCase(), function(t3) {
      var n3 = Q, r3;
      do
        if (r3 = je2 ? t3.lang : t3.getAttribute(n3(280)) || t3.getAttribute(`lang`)) return r3 = r3[n3(856)](), r3 === e3 || r3.indexOf(e3 + `-`) === 0;
      while ((t3 = t3.parentNode) && t3.nodeType === 1);
      return false;
    };
  }), target: function(t3) {
    var r3 = n2, i3 = e2.location && e2.location[r3(1201)];
    return i3 && i3[r3(1101)](1) === t3.id;
  }, root: function(e3) {
    return e3 === Ae2;
  }, focus: function(e3) {
    return e3 === ke2.activeElement && ke2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
  }, enabled: Ye2(false), disabled: Ye2(true), checked: function(e3) {
    return w2(e3, `input`) && !!e3.checked || w2(e3, `option`) && !!e3.selected;
  }, selected: function(e3) {
    return D2 && e3.parentNode && e3.parentNode.selectedIndex, e3.selected === true;
  }, empty: function(e3) {
    for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
    return true;
  }, parent: function(e3) {
    return !C2.expr.pseudos.empty(e3);
  }, header: function(e3) {
    var t3 = n2;
    return Ve2[t3(1021)](e3[t3(1027)]);
  }, input: function(e3) {
    return Be2.test(e3.nodeName);
  }, button: function(e3) {
    return w2(e3, `input`) && e3.type === `button` || w2(e3, `button`);
  }, text: function(e3) {
    var t3 = n2;
    return w2(e3, `input`) && e3[t3(599)] === `text`;
  }, first: Xe2(function() {
    return [0];
  }), last: Xe2(function(e3, t3) {
    return [t3 - 1];
  }), eq: Xe2(function(e3, t3, n3) {
    return [n3 < 0 ? n3 + t3 : n3];
  }), even: Xe2(function(e3, t3) {
    for (var r3 = n2, i3 = 0; i3 < t3; i3 += 2) e3[r3(559)](i3);
    return e3;
  }), odd: Xe2(function(e3, t3) {
    for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
    return e3;
  }), lt: Xe2(function(e3, t3, r3) {
    for (var i3 = n2, a3 = r3 < 0 ? r3 + t3 : r3 > t3 ? t3 : r3; --a3 >= 0; ) e3[i3(559)](a3);
    return e3;
  }), gt: Xe2(function(e3, t3, n3) {
    for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
    return e3;
  }) } }, C2.expr.pseudos[n2(1193)] = C2.expr.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) C2.expr.pseudos[De2] = qe2(De2);
  for (De2 in { submit: true, reset: true }) C2.expr.pseudos[De2] = Je2(De2);
  function Qe2() {
  }
  Qe2.prototype = C2[n2(979)].pseudos, C2.expr.setFilters = new Qe2();
  function $e2(e3, t3, n3) {
    var r3 = t3.dir, i3 = t3.next, a3 = i3 || r3, o3 = n3 && a3 === `parentNode`, s3 = Ne2++;
    return t3.first ? function(t4, n4, i4) {
      for (; t4 = t4[r3]; ) if (t4.nodeType === 1 || o3) return e3(t4, n4, i4);
      return false;
    } : function(t4, n4, c3) {
      var l3 = Q, u3, d3, f3 = [Me2, s3];
      if (c3) {
        for (; t4 = t4[r3]; ) if ((t4.nodeType === 1 || o3) && e3(t4, n4, c3)) return true;
      } else for (; t4 = t4[r3]; ) if (t4[l3(639)] === 1 || o3) {
        if (d3 = t4[C2.expando] || (t4[C2.expando] = {}), i3 && w2(t4, i3)) t4 = t4[r3] || t4;
        else if ((u3 = d3[a3]) && u3[0] === Me2 && u3[1] === s3) return f3[2] = u3[2];
        else if (d3[a3] = f3, f3[2] = e3(t4, n4, c3)) return true;
      }
      return false;
    };
  }
  function et2(e3) {
    return e3.length > 1 ? function(t3, n3, r3) {
      for (var i3 = e3.length; i3--; ) if (!e3[i3](t3, n3, r3)) return false;
      return true;
    } : e3[0];
  }
  function tt2(e3, t3, n3) {
    for (var r3 = 0, i3 = t3.length; r3 < i3; r3++) Ge2(e3, t3[r3], n3);
    return n3;
  }
  function nt2(e3, t3, r3, i3, a3) {
    for (var o3 = n2, s3, c3 = [], l3 = 0, u3 = e3[o3(626)], d3 = t3 != null; l3 < u3; l3++) (s3 = e3[l3]) && (!r3 || r3(s3, i3, a3)) && (c3.push(s3), d3 && t3.push(l3));
    return c3;
  }
  function rt2(e3, t3, n3, r3, i3, a3) {
    return r3 && !r3[C2.expando] && (r3 = rt2(r3)), i3 && !i3[C2.expando] && (i3 = rt2(i3, a3)), Ke2(function(a4, o3, l3, u3) {
      var d3 = Q, f3, p3, m3, h3, g3 = [], _3 = [], v3 = o3.length, y3 = a4 || tt2(t3 || `*`, l3.nodeType ? [l3] : l3, []), b3 = e3 && (a4 || !t3) ? nt2(y3, g3, e3, l3, u3) : y3;
      if (n3 ? (h3 = i3 || (a4 ? e3 : v3 || r3) ? [] : o3, n3(b3, h3, l3, u3)) : h3 = b3, r3) for (f3 = nt2(h3, _3), r3(f3, [], l3, u3), p3 = f3.length; p3--; ) (m3 = f3[p3]) && (h3[_3[p3]] = !(b3[_3[p3]] = m3));
      if (a4) {
        if (i3 || e3) {
          if (i3) {
            for (f3 = [], p3 = h3.length; p3--; ) (m3 = h3[p3]) && f3.push(b3[p3] = m3);
            i3(null, h3 = [], f3, u3);
          }
          for (p3 = h3.length; p3--; ) (m3 = h3[p3]) && (f3 = i3 ? c2.call(a4, m3) : g3[p3]) > -1 && (a4[f3] = !(o3[f3] = m3));
        }
      } else h3 = nt2(h3 === o3 ? h3.splice(v3, h3[d3(626)]) : h3), i3 ? i3(null, o3, h3, u3) : s2.apply(o3, h3);
    });
  }
  function it2(e3) {
    for (var t3 = n2, r3, i3, a3, o3 = e3[t3(626)], s3 = C2.expr.relative[e3[0].type], l3 = s3 || C2.expr.relative[` `], u3 = +!!s3, d3 = $e2(function(e4) {
      return e4 === r3;
    }, l3, true), f3 = $e2(function(e4) {
      return c2.call(r3, e4) > -1;
    }, l3, true), p3 = [function(e4, t4, n3) {
      var i4 = !s3 && (n3 || t4 != Oe2) || ((r3 = t4).nodeType ? d3(e4, t4, n3) : f3(e4, t4, n3));
      return r3 = null, i4;
    }]; u3 < o3; u3++) if (i3 = C2.expr.relative[e3[u3].type]) p3 = [$e2(et2(p3), i3)];
    else {
      if (i3 = C2.expr[t3(1038)][e3[u3].type].apply(null, e3[u3].matches), i3[C2.expando]) {
        for (a3 = ++u3; a3 < o3 && !C2[t3(979)].relative[e3[a3].type]; a3++) ;
        return rt2(u3 > 1 && et2(p3), u3 > 1 && ve2(e3[t3(1101)](0, u3 - 1).concat({ value: e3[u3 - 2].type === ` ` ? `*` : `` })).replace(k2, `$1`), i3, u3 < a3 && it2(e3.slice(u3, a3)), a3 < o3 && it2(e3 = e3.slice(a3)), a3 < o3 && ve2(e3));
      }
      p3.push(i3);
    }
    return et2(p3);
  }
  function at2(e3, t3) {
    var r3 = n2, i3 = t3[r3(626)] > 0, a3 = e3.length > 0, o3 = function(n3, o4, c3, l3, u3) {
      var d3 = r3, f3, p3, m3, h3 = 0, g3 = `0`, _3 = n3 && [], v3 = [], y3 = Oe2, b3 = n3 || a3 && C2.expr[d3(531)].TAG(`*`, u3), x3 = Me2 += y3 == null ? 1 : Math.random() || 0.1;
      for (u3 && (Oe2 = o4 == ke2 || o4 || u3); (f3 = b3[g3]) != null; g3++) {
        if (a3 && f3) {
          for (p3 = 0, !o4 && f3[d3(282)] != ke2 && (Ze2(f3), c3 = !je2); m3 = e3[p3++]; ) if (m3(f3, o4 || ke2, c3)) {
            s2.call(l3, f3);
            break;
          }
          u3 && (Me2 = x3);
        }
        i3 && ((f3 = !m3 && f3) && h3--, n3 && _3.push(f3));
      }
      if (h3 += g3, i3 && g3 !== h3) {
        for (p3 = 0; m3 = t3[p3++]; ) m3(_3, v3, o4, c3);
        if (n3) {
          if (h3 > 0) for (; g3--; ) _3[g3] || v3[g3] || (v3[g3] = T2.call(l3));
          v3 = nt2(v3);
        }
        s2.apply(l3, v3), u3 && !n3 && v3.length > 0 && h3 + t3[d3(626)] > 1 && C2.uniqueSort(l3);
      }
      return u3 && (Me2 = x3, Oe2 = y3), _3;
    };
    return i3 ? Ke2(o3) : o3;
  }
  function ot2(e3, t3) {
    var r3 = n2, i3, a3 = [], o3 = [], s3 = Fe2[e3 + ` `];
    if (!s3) {
      for (t3 || (t3 = ge2(e3)), i3 = t3.length; i3--; ) s3 = it2(t3[i3]), s3[C2[r3(474)]] ? a3.push(s3) : o3.push(s3);
      s3 = Fe2(e3, at2(o3, a3)), s3[r3(422)] = e3;
    }
    return s3;
  }
  function st2(e3, t3, r3, i3) {
    var a3 = n2, o3, c3, l3, u3, d3, f3 = typeof e3 == a3(478) && e3, p3 = !i3 && ge2(e3 = f3.selector || e3);
    if (r3 || (r3 = []), p3.length === 1) {
      if (c3 = p3[0] = p3[0].slice(0), c3.length > 2 && (l3 = c3[0]).type === `ID` && t3[a3(639)] === 9 && je2 && C2.expr.relative[c3[1].type]) {
        if (t3 = (C2.expr.find.ID(fe2(l3.matches[0]), t3) || [])[0], t3) f3 && (t3 = t3.parentNode);
        else return r3;
        e3 = e3.slice(c3.shift().value[a3(626)]);
      }
      for (o3 = ze2.needsContext.test(e3) ? 0 : c3.length; o3-- && (l3 = c3[o3], !C2[a3(979)][a3(477)][u3 = l3.type]); ) if ((d3 = C2[a3(979)][a3(531)][u3]) && (i3 = d3(fe2(l3.matches[0]), ne2.test(c3[0].type) && ae2(t3.parentNode) || t3))) {
        if (c3.splice(o3, 1), e3 = i3.length && ve2(c3), !e3) return s2[a3(868)](r3, i3), r3;
        break;
      }
    }
    return (f3 || ot2(e3, p3))(i3, t3, !je2, r3, !t3 || ne2.test(e3) && ae2(t3.parentNode) || t3), r3;
  }
  Ze2(), C2.find = Ge2, Ge2.compile = ot2, Ge2.select = st2, Ge2.setDocument = Ze2, Ge2.tokenize = ge2;
  function ct2(e3, t3, n3) {
    for (var r3 = [], i3 = n3 !== void 0; (e3 = e3[t3]) && e3.nodeType !== 9; ) if (e3.nodeType === 1) {
      if (i3 && C2(e3).is(n3)) break;
      r3.push(e3);
    }
    return r3;
  }
  function lt2(e3, t3) {
    for (var n3 = []; e3; e3 = e3.nextSibling) e3.nodeType === 1 && e3 !== t3 && n3.push(e3);
    return n3;
  }
  var ut2 = C2.expr.match[n2(1166)], dt2 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function ft2(e3) {
    var t3 = n2;
    return e3[0] === `<` && e3[e3.length - 1] === `>` && e3[t3(626)] >= 3;
  }
  function pt2(e3, t3, r3) {
    var i3 = n2;
    return typeof t3 == `function` ? C2[i3(761)](e3, function(e4, n3) {
      return !!t3[i3(872)](e4, n3, e4) !== r3;
    }) : t3[i3(639)] ? C2[i3(761)](e3, function(e4) {
      return e4 === t3 !== r3;
    }) : typeof t3 == `string` ? C2.filter(t3, e3, r3) : C2.grep(e3, function(e4) {
      return c2.call(t3, e4) > -1 !== r3;
    });
  }
  C2.filter = function(e3, t3, r3) {
    var i3 = n2, a3 = t3[0];
    return r3 && (e3 = `:not(` + e3 + `)`), t3.length === 1 && a3.nodeType === 1 ? C2.find.matchesSelector(a3, e3) ? [a3] : [] : C2[i3(531)][i3(446)](e3, C2.grep(t3, function(e4) {
      return e4.nodeType === 1;
    }));
  }, C2.fn[n2(294)]({ find: function(e3) {
    var t3 = n2, r3, i3, a3 = this.length, o3 = this;
    if (typeof e3 != `string`) return this.pushStack(C2(e3).filter(function() {
      for (r3 = 0; r3 < a3; r3++) if (C2.contains(o3[r3], this)) return true;
    }));
    for (i3 = this[t3(662)]([]), r3 = 0; r3 < a3; r3++) C2.find(e3, o3[r3], i3);
    return a3 > 1 ? C2.uniqueSort(i3) : i3;
  }, filter: function(e3) {
    return this.pushStack(pt2(this, e3 || [], false));
  }, not: function(e3) {
    var t3 = n2;
    return this[t3(662)](pt2(this, e3 || [], true));
  }, is: function(e3) {
    return !!pt2(this, typeof e3 == `string` && ut2.test(e3) ? C2(e3) : e3 || [], false).length;
  } });
  var mt2, ht2 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, gt2 = C2.fn.init = function(e3, t3) {
    var r3 = n2, i3, a3;
    if (!e3) return this;
    if (e3.nodeType) return this[0] = e3, this.length = 1, this;
    if (typeof e3 == `function`) return mt2.ready === void 0 ? e3(C2) : mt2.ready(e3);
    if (i3 = e3 + ``, ft2(i3)) i3 = [null, e3, null];
    else if (typeof e3 == `string`) i3 = ht2.exec(e3);
    else return C2[r3(1144)](e3, this);
    if (i3 && (i3[1] || !t3)) if (i3[1]) {
      if (t3 = t3 instanceof C2 ? t3[0] : t3, C2.merge(this, C2.parseHTML(i3[1], t3 && t3.nodeType ? t3.ownerDocument || t3 : v2, true)), dt2.test(i3[1]) && C2[r3(320)](t3)) for (i3 in t3) typeof this[i3] == r3(478) ? this[i3](t3[i3]) : this[r3(919)](i3, t3[i3]);
      return this;
    } else return a3 = v2.getElementById(i3[2]), a3 && (this[0] = a3, this[r3(626)] = 1), this;
    else if (!t3 || t3[r3(875)]) return (t3 || mt2).find(e3);
    else return this.constructor(t3).find(e3);
  };
  gt2.prototype = C2.fn, mt2 = C2(v2);
  var _t2 = /^(?:parents|prev(?:Until|All))/, vt2 = { children: true, contents: true, next: true, prev: true };
  C2.fn.extend({ has: function(e3) {
    var t3 = n2, r3 = C2(e3, this), i3 = r3[t3(626)];
    return this.filter(function() {
      for (var e4 = 0; e4 < i3; e4++) if (C2.contains(this, r3[e4])) return true;
    });
  }, closest: function(e3, t3) {
    var r3 = n2, i3, a3 = 0, o3 = this.length, s3 = [], c3 = typeof e3 != r3(583) && C2(e3);
    if (!ut2.test(e3)) {
      for (; a3 < o3; a3++) for (i3 = this[a3]; i3 && i3 !== t3; i3 = i3.parentNode) if (i3.nodeType < 11 && (c3 ? c3.index(i3) > -1 : i3.nodeType === 1 && C2.find.matchesSelector(i3, e3))) {
        s3.push(i3);
        break;
      }
    }
    return this.pushStack(s3.length > 1 ? C2.uniqueSort(s3) : s3);
  }, index: function(e3) {
    var t3 = n2;
    return e3 ? typeof e3 == `string` ? c2[t3(872)](C2(e3), this[0]) : c2.call(this, e3[t3(875)] ? e3[0] : e3) : this[0] && this[0].parentNode ? this.first().prevAll()[t3(626)] : -1;
  }, add: function(e3, t3) {
    var r3 = n2;
    return this[r3(662)](C2.uniqueSort(C2[r3(1078)](this.get(), C2(e3, t3))));
  }, addBack: function(e3) {
    var t3 = n2;
    return this.add(e3 == null ? this[t3(1031)] : this.prevObject.filter(e3));
  } });
  function yt2(e3, t3) {
    for (; (e3 = e3[t3]) && e3.nodeType !== 1; ) ;
    return e3;
  }
  C2.each({ parent: function(e3) {
    var t3 = e3.parentNode;
    return t3 && t3.nodeType !== 11 ? t3 : null;
  }, parents: function(e3) {
    return ct2(e3, n2(298));
  }, parentsUntil: function(e3, t3, n3) {
    return ct2(e3, `parentNode`, n3);
  }, next: function(e3) {
    return yt2(e3, `nextSibling`);
  }, prev: function(e3) {
    return yt2(e3, `previousSibling`);
  }, nextAll: function(e3) {
    return ct2(e3, `nextSibling`);
  }, prevAll: function(e3) {
    return ct2(e3, n2(708));
  }, nextUntil: function(e3, t3, n3) {
    return ct2(e3, `nextSibling`, n3);
  }, prevUntil: function(e3, t3, r3) {
    return ct2(e3, n2(708), r3);
  }, siblings: function(e3) {
    return lt2((e3.parentNode || {}).firstChild, e3);
  }, children: function(e3) {
    return lt2(e3.firstChild);
  }, contents: function(e3) {
    var t3 = n2;
    return e3.contentDocument != null && i2(e3.contentDocument) ? e3[t3(711)] : (w2(e3, `template`) && (e3 = e3.content || e3), C2.merge([], e3.childNodes));
  } }, function(e3, t3) {
    C2.fn[e3] = function(n3, r3) {
      var i3 = Q, a3 = C2[i3(279)](this, t3, n3);
      return e3.slice(-5) !== `Until` && (r3 = n3), r3 && typeof r3 == i3(583) && (a3 = C2.filter(r3, a3)), this[i3(626)] > 1 && (vt2[e3] || C2.uniqueSort(a3), _t2.test(e3) && a3.reverse()), this.pushStack(a3);
    };
  });
  function bt2(e3) {
    var t3 = n2, r3 = {};
    return C2[t3(904)](e3.match(be2) || [], function(e4, t4) {
      r3[t4] = true;
    }), r3;
  }
  C2.Callbacks = function(e3) {
    e3 = typeof e3 == `string` ? bt2(e3) : C2.extend({}, e3);
    var t3, n3, r3, i3, a3 = [], o3 = [], s3 = -1, c3 = function() {
      for (i3 || (i3 = e3.once), r3 = t3 = true; o3.length; s3 = -1) for (n3 = o3.shift(); ++s3 < a3.length; ) a3[s3].apply(n3[0], n3[1]) === false && e3.stopOnFalse && (s3 = a3.length, n3 = false);
      e3.memory || (n3 = false), t3 = false, i3 && (a3 = n3 ? [] : ``);
    }, l3 = { add: function() {
      var r4 = Q;
      return a3 && (n3 && !t3 && (s3 = a3.length - 1, o3[r4(559)](n3)), (function t4(n4) {
        C2.each(n4, function(n5, r5) {
          var i4 = Q;
          typeof r5 == `function` ? (!e3[i4(541)] || !l3.has(r5)) && a3[i4(559)](r5) : r5 && r5.length && h2(r5) !== `string` && t4(r5);
        });
      })(arguments), n3 && !t3 && c3()), this;
    }, remove: function() {
      return C2.each(arguments, function(e4, t4) {
        for (var n4 = Q, r4; (r4 = C2[n4(773)](t4, a3, r4)) > -1; ) a3.splice(r4, 1), r4 <= s3 && s3--;
      }), this;
    }, has: function(e4) {
      return e4 ? C2.inArray(e4, a3) > -1 : a3.length > 0;
    }, empty: function() {
      return a3 && (a3 = []), this;
    }, disable: function() {
      return i3 = o3 = [], a3 = n3 = ``, this;
    }, disabled: function() {
      return !a3;
    }, lock: function() {
      return i3 = o3 = [], !n3 && !t3 && (a3 = n3 = ``), this;
    }, locked: function() {
      return !!i3;
    }, fireWith: function(e4, n4) {
      var r4 = Q;
      return i3 || (n4 || (n4 = []), n4 = [e4, n4.slice ? n4[r4(1101)]() : n4], o3.push(n4), t3 || c3()), this;
    }, fire: function() {
      return l3.fireWith(this, arguments), this;
    }, fired: function() {
      return !!r3;
    } };
    return l3;
  };
  function xt2(e3) {
    return e3;
  }
  function St2(e3) {
    throw e3;
  }
  function Ct2(e3, t3, r3, i3) {
    var a3 = n2, o3;
    try {
      e3 && typeof (o3 = e3.promise) == a3(478) ? o3.call(e3).done(t3).fail(r3) : e3 && typeof (o3 = e3.then) == `function` ? o3.call(e3, t3, r3) : t3[a3(868)](void 0, [e3].slice(i3));
    } catch (e4) {
      r3(e4);
    }
  }
  C2.extend({ Deferred: function(t3) {
    var r3 = n2, i3 = [[`notify`, `progress`, C2.Callbacks(`memory`), C2.Callbacks(`memory`), 2], [`resolve`, `done`, C2.Callbacks(`once memory`), C2[r3(754)](`once memory`), 0, r3(233)], [`reject`, `fail`, C2.Callbacks(r3(710)), C2.Callbacks(`once memory`), 1, `rejected`]], a3 = `pending`, o3 = { state: function() {
      return a3;
    }, always: function() {
      return s3[r3(753)](arguments).fail(arguments), this;
    }, catch: function(e3) {
      return o3.then(null, e3);
    }, pipe: function() {
      var e3 = arguments;
      return C2.Deferred(function(t4) {
        C2.each(i3, function(n3, r4) {
          var i4 = Q, a4 = typeof e3[r4[4]] == i4(478) && e3[r4[4]];
          s3[r4[1]](function() {
            var e4 = i4, n4 = a4 && a4.apply(this, arguments);
            n4 && typeof n4[e4(851)] == `function` ? n4.promise().progress(t4.notify).done(t4.resolve)[e4(180)](t4.reject) : t4[r4[0] + `With`](this, a4 ? [n4] : arguments);
          });
        }), e3 = null;
      }).promise();
    }, then: function(t4, n3, r4) {
      var a4 = 0;
      function o4(t5, n4, r5, i4) {
        return function() {
          var s4 = Q, c3 = this, l3 = arguments, u3 = function() {
            var e3 = Q, s5, u4;
            if (!(t5 < a4)) {
              if (s5 = r5[e3(868)](c3, l3), s5 === n4.promise()) throw TypeError(`Thenable self-resolution`);
              u4 = s5 && (typeof s5 == `object` || typeof s5 == `function`) && s5.then, typeof u4 == `function` ? i4 ? u4.call(s5, o4(a4, n4, xt2, i4), o4(a4, n4, St2, i4)) : (a4++, u4.call(s5, o4(a4, n4, xt2, i4), o4(a4, n4, St2, i4), o4(a4, n4, xt2, n4.notifyWith))) : (r5 !== xt2 && (c3 = void 0, l3 = [s5]), (i4 || n4.resolveWith)(c3, l3));
            }
          }, d3 = i4 ? u3 : function() {
            try {
              u3();
            } catch (e3) {
              C2.Deferred.exceptionHook && C2.Deferred.exceptionHook(e3, d3.error), t5 + 1 >= a4 && (r5 !== St2 && (c3 = void 0, l3 = [e3]), n4.rejectWith(c3, l3));
            }
          };
          t5 ? d3() : (C2.Deferred.getErrorHook && (d3[s4(330)] = C2.Deferred.getErrorHook()), e2.setTimeout(d3));
        };
      }
      return C2.Deferred(function(e3) {
        i3[0][3].add(o4(0, e3, typeof r4 == `function` ? r4 : xt2, e3.notifyWith)), i3[1][3].add(o4(0, e3, typeof t4 == `function` ? t4 : xt2)), i3[2][3].add(o4(0, e3, typeof n3 == `function` ? n3 : St2));
      }).promise();
    }, promise: function(e3) {
      return e3 == null ? o3 : C2[r3(294)](e3, o3);
    } }, s3 = {};
    return C2.each(i3, function(e3, t4) {
      var n3 = t4[2], r4 = t4[5];
      o3[t4[1]] = n3.add, r4 && n3.add(function() {
        a3 = r4;
      }, i3[3 - e3][2].disable, i3[3 - e3][3].disable, i3[0][2].lock, i3[0][3].lock), n3.add(t4[3].fire), s3[t4[0]] = function() {
        return s3[t4[0] + `With`](this === s3 ? void 0 : this, arguments), this;
      }, s3[t4[0] + `With`] = n3.fireWith;
    }), o3.promise(s3), t3 && t3[r3(872)](s3, s3), s3;
  }, when: function(e3) {
    var t3 = n2, r3 = arguments.length, i3 = r3, o3 = Array(i3), s3 = a2[t3(872)](arguments), c3 = C2.Deferred(), l3 = function(e4) {
      return function(t4) {
        o3[e4] = this, s3[e4] = arguments.length > 1 ? a2.call(arguments) : t4, --r3 || c3.resolveWith(o3, s3);
      };
    };
    if (r3 <= 1 && (Ct2(e3, c3.done(l3(i3)).resolve, c3.reject, !r3), c3.state() === `pending` || typeof (s3[i3] && s3[i3][t3(1081)]) == `function`)) return c3.then();
    for (; i3--; ) Ct2(s3[i3], l3(i3), c3.reject);
    return c3.promise();
  } });
  var wt2 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  C2[n2(1074)][n2(292)] = function(t3, r3) {
    var i3 = n2;
    t3 && wt2.test(t3.name) && e2[i3(827)].warn(`jQuery.Deferred exception`, t3, r3);
  }, C2.readyException = function(t3) {
    e2.setTimeout(function() {
      throw t3;
    });
  };
  var Tt2 = C2.Deferred();
  C2.fn[n2(1114)] = function(e3) {
    return Tt2.then(e3).catch(function(e4) {
      C2.readyException(e4);
    }), this;
  }, C2.extend({ isReady: false, readyWait: 1, ready: function(e3) {
    (e3 === true ? --C2.readyWait : C2.isReady) || (C2.isReady = true, !(e3 !== true && --C2.readyWait > 0) && Tt2.resolveWith(v2, [C2]));
  } }), C2.ready[n2(1081)] = Tt2.then;
  function Et2() {
    var t3 = n2;
    v2.removeEventListener(`DOMContentLoaded`, Et2), e2.removeEventListener(`load`, Et2), C2[t3(1114)]();
  }
  v2.readyState === `loading` ? (v2[n2(337)](`DOMContentLoaded`, Et2), e2.addEventListener(`load`, Et2)) : e2.setTimeout(C2[n2(1114)]);
  var Dt2 = /-([a-z])/g;
  function Ot2(e3, t3) {
    return t3.toUpperCase();
  }
  function kt2(e3) {
    return e3.replace(Dt2, Ot2);
  }
  function At2(e3) {
    return e3.nodeType === 1 || e3.nodeType === 9 || !+e3.nodeType;
  }
  function jt2() {
    this.expando = C2.expando + jt2.uid++;
  }
  jt2[n2(1108)] = 1, jt2.prototype = { cache: function(e3) {
    var t3 = e3[this.expando];
    return t3 || (t3 = /* @__PURE__ */ Object.create(null), At2(e3) && (e3.nodeType ? e3[this.expando] = t3 : Object.defineProperty(e3, this.expando, { value: t3, configurable: true }))), t3;
  }, set: function(e3, t3, r3) {
    var i3 = n2, a3, o3 = this.cache(e3);
    if (typeof t3 == i3(583)) o3[kt2(t3)] = r3;
    else for (a3 in t3) o3[kt2(a3)] = t3[a3];
    return r3;
  }, get: function(e3, t3) {
    return t3 === void 0 ? this.cache(e3) : e3[this.expando] && e3[this.expando][kt2(t3)];
  }, access: function(e3, t3, n3) {
    return t3 === void 0 || t3 && typeof t3 == `string` && n3 === void 0 ? this.get(e3, t3) : (this.set(e3, t3, n3), n3 === void 0 ? t3 : n3);
  }, remove: function(e3, t3) {
    var r3 = n2, i3, a3 = e3[this.expando];
    if (a3 !== void 0) {
      if (t3 !== void 0) for (Array.isArray(t3) ? t3 = t3.map(kt2) : (t3 = kt2(t3), t3 = t3 in a3 ? [t3] : t3.match(be2) || []), i3 = t3[r3(626)]; i3--; ) delete a3[t3[i3]];
      (t3 === void 0 || C2.isEmptyObject(a3)) && (e3.nodeType ? e3[this.expando] = void 0 : delete e3[this.expando]);
    }
  }, hasData: function(e3) {
    var t3 = e3[this.expando];
    return t3 !== void 0 && !C2.isEmptyObject(t3);
  } };
  var N2 = new jt2(), Mt2 = new jt2(), Nt2 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pt2 = /[A-Z]/g;
  function Ft2(e3) {
    var t3 = n2;
    return e3 === `true` ? true : e3 === `false` ? false : e3 === `null` ? null : e3 === +e3 + `` ? +e3 : Nt2[t3(1021)](e3) ? JSON.parse(e3) : e3;
  }
  function It2(e3, t3, r3) {
    var i3 = n2, a3;
    if (r3 === void 0 && e3.nodeType === 1) if (a3 = `data-` + t3.replace(Pt2, i3(453))[i3(856)](), r3 = e3.getAttribute(a3), typeof r3 == `string`) {
      try {
        r3 = Ft2(r3);
      } catch {
      }
      Mt2.set(e3, t3, r3);
    } else r3 = void 0;
    return r3;
  }
  C2[n2(294)]({ hasData: function(e3) {
    return Mt2.hasData(e3) || N2.hasData(e3);
  }, data: function(e3, t3, n3) {
    return Mt2.access(e3, t3, n3);
  }, removeData: function(e3, t3) {
    Mt2.remove(e3, t3);
  }, _data: function(e3, t3, n3) {
    return N2.access(e3, t3, n3);
  }, _removeData: function(e3, t3) {
    N2.remove(e3, t3);
  } }), C2.fn.extend({ data: function(e3, t3) {
    var r3 = n2, i3, a3, o3, s3 = this[0], c3 = s3 && s3.attributes;
    if (e3 === void 0) {
      if (this.length && (o3 = Mt2.get(s3), s3.nodeType === 1 && !N2.get(s3, `hasDataAttrs`))) {
        for (i3 = c3.length; i3--; ) c3[i3] && (a3 = c3[i3].name, a3.indexOf(`data-`) === 0 && (a3 = kt2(a3[r3(1101)](5)), It2(s3, a3, o3[a3])));
        N2[r3(1178)](s3, `hasDataAttrs`, true);
      }
      return o3;
    }
    return typeof e3 == `object` ? this.each(function() {
      Mt2[r3(1178)](this, e3);
    }) : ye2(this, function(t4) {
      var n3 = r3, i4;
      if (s3 && t4 === void 0) return i4 = Mt2.get(s3, e3), i4 !== void 0 || (i4 = It2(s3, e3), i4 !== void 0) ? i4 : void 0;
      this[n3(904)](function() {
        Mt2.set(this, e3, t4);
      });
    }, null, t3, arguments.length > 1, null, true);
  }, removeData: function(e3) {
    var t3 = n2;
    return this[t3(904)](function() {
      Mt2[t3(442)](this, e3);
    });
  } }), C2.extend({ queue: function(e3, t3, r3) {
    var i3 = n2, a3;
    if (e3) return t3 = (t3 || `fx`) + `queue`, a3 = N2.get(e3, t3), r3 && (!a3 || Array.isArray(r3) ? a3 = N2.set(e3, t3, C2[i3(1144)](r3)) : a3.push(r3)), a3 || [];
  }, dequeue: function(e3, t3) {
    var r3 = n2;
    t3 || (t3 = `fx`);
    var i3 = C2.queue(e3, t3), a3 = i3.length, o3 = i3.shift(), s3 = C2._queueHooks(e3, t3);
    o3 === `inprogress` && (o3 = i3.shift(), a3--), o3 && (t3 === `fx` && i3[r3(755)](`inprogress`), delete s3[r3(1237)], o3.call(e3, function() {
      C2.dequeue(e3, t3);
    }, s3)), !a3 && s3 && s3.empty.fire();
  }, _queueHooks: function(e3, t3) {
    var r3 = t3 + n2(1235);
    return N2.get(e3, r3) || N2.set(e3, r3, { empty: C2.Callbacks(`once memory`).add(function() {
      N2.remove(e3, [t3 + `queue`, r3]);
    }) });
  } }), C2.fn.extend({ queue: function(e3, t3) {
    var n3 = 2;
    return typeof e3 != `string` && (t3 = e3, e3 = `fx`, n3--), arguments.length < n3 ? C2.queue(this[0], e3) : t3 === void 0 ? this : this.each(function() {
      var n4 = Q, r3 = C2.queue(this, e3, t3);
      C2._queueHooks(this, e3), e3 === `fx` && r3[0] !== `inprogress` && C2[n4(392)](this, e3);
    });
  }, dequeue: function(e3) {
    return this.each(function() {
      C2.dequeue(this, e3);
    });
  }, clearQueue: function(e3) {
    return this.queue(e3 || `fx`, []);
  }, promise: function(e3, t3) {
    var n3, r3 = 1, i3 = C2.Deferred(), a3 = this, o3 = this.length, s3 = function() {
      --r3 || i3.resolveWith(a3, [a3]);
    };
    for (typeof e3 != `string` && (t3 = e3, e3 = void 0), e3 || (e3 = `fx`); o3--; ) n3 = N2.get(a3[o3], e3 + `queueHooks`), n3 && n3.empty && (r3++, n3.empty.add(s3));
    return s3(), i3.promise(t3);
  } });
  var Lt2 = `[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)`, Rt2 = RegExp(n2(701) + Lt2 + `)([a-z%]*)$`, `i`), zt2 = [`Top`, `Right`, `Bottom`, `Left`];
  function Bt2(e3, t3) {
    var r3 = n2;
    return e3 = t3 || e3, e3.style.display === r3(1097) || e3.style.display === `` && C2.css(e3, `display`) === r3(1097);
  }
  var Vt2 = /^[a-z]/, P2 = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
  function F2(e3) {
    var t3 = n2;
    return Vt2.test(e3) && P2[t3(1021)](e3[0][t3(545)]() + e3[t3(1101)](1));
  }
  function I2(e3, t3, r3, i3) {
    var a3 = n2, o3, s3, c3 = 20, l3 = i3 ? function() {
      return i3[Q(936)]();
    } : function() {
      return C2.css(e3, t3, ``);
    }, u3 = l3(), d3 = r3 && r3[3] || (F2(t3) ? `px` : ``), f3 = e3.nodeType && (!F2(t3) || d3 !== `px` && +u3) && Rt2.exec(C2.css(e3, t3));
    if (f3 && f3[3] !== d3) {
      for (u3 /= 2, d3 || (d3 = f3[3]), f3 = +u3 || 1; c3--; ) C2.style(e3, t3, f3 + d3), (1 - s3) * (1 - (s3 = l3() / u3 || 0.5)) <= 0 && (c3 = 0), f3 /= s3;
      f3 *= 2, C2.style(e3, t3, f3 + d3), r3 || (r3 = []);
    }
    return r3 && (f3 = +f3 || +u3 || 0, o3 = r3[1] ? f3 + (r3[1] + 1) * r3[2] : +r3[2], i3 && (i3[a3(208)] = d3, i3.start = f3, i3.end = o3)), o3;
  }
  var L2 = /^-ms-/;
  function Ht2(e3) {
    return kt2(e3[n2(1077)](L2, `ms-`));
  }
  var Ut2 = {};
  function Wt2(e3) {
    var t3 = n2, r3, i3 = e3.ownerDocument, a3 = e3.nodeName, o3 = Ut2[a3];
    return o3 || (r3 = i3.body.appendChild(i3.createElement(a3)), o3 = C2.css(r3, t3(928)), r3.parentNode[t3(383)](r3), o3 === `none` && (o3 = `block`), Ut2[a3] = o3, o3);
  }
  function Gt2(e3, t3) {
    for (var r3 = n2, i3, a3, o3 = [], s3 = 0, c3 = e3.length; s3 < c3; s3++) a3 = e3[s3], a3.style && (i3 = a3[r3(521)].display, t3 ? (i3 === `none` && (o3[s3] = N2[r3(483)](a3, `display`) || null, o3[s3] || (a3[r3(521)][r3(928)] = ``)), a3.style.display === `` && Bt2(a3) && (o3[s3] = Wt2(a3))) : i3 !== `none` && (o3[s3] = `none`, N2.set(a3, `display`, i3)));
    for (s3 = 0; s3 < c3; s3++) o3[s3] != null && (e3[s3].style[r3(928)] = o3[s3]);
    return e3;
  }
  C2.fn.extend({ show: function() {
    return Gt2(this, true);
  }, hide: function() {
    return Gt2(this);
  }, toggle: function(e3) {
    var t3 = n2;
    return typeof e3 == `boolean` ? e3 ? this.show() : this[t3(537)]() : this.each(function() {
      Bt2(this) ? C2(this).show() : C2(this).hide();
    });
  } });
  var Kt2 = function(e3) {
    var t3 = n2;
    return C2.contains(e3.ownerDocument, e3) || e3[t3(661)](qt2) === e3.ownerDocument;
  }, qt2 = { composed: true };
  j2.getRootNode || (Kt2 = function(e3) {
    return C2.contains(e3.ownerDocument, e3);
  });
  var Jt2 = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Yt2 = { thead: [`table`], col: [`colgroup`, `table`], tr: [`tbody`, `table`], td: [`tr`, `tbody`, `table`] };
  Yt2.tbody = Yt2.tfoot = Yt2.colgroup = Yt2.caption = Yt2.thead, Yt2.th = Yt2.td;
  function R2(e3, t3) {
    var n3 = e3.getElementsByTagName === void 0 ? e3.querySelectorAll === void 0 ? [] : e3.querySelectorAll(t3 || `*`) : r2.slice.call(e3.getElementsByTagName(t3 || `*`));
    return t3 === void 0 || t3 && w2(e3, t3) ? C2.merge([e3], n3) : n3;
  }
  var z2 = /^$|^module$|\/(?:java|ecma)script/i;
  function Xt2(e3, t3) {
    for (var r3 = n2, i3 = 0, a3 = e3[r3(626)]; i3 < a3; i3++) N2[r3(1178)](e3[i3], `globalEval`, !t3 || N2.get(t3[i3], `globalEval`));
  }
  var Zt2 = /<|&#?\w+;/;
  function B2(e3, t3, i3, a3, o3) {
    for (var s3 = n2, c3, l3, u3, d3, f3, p3, m3 = t3.createDocumentFragment(), g3 = [], v3 = 0, y3 = e3.length; v3 < y3; v3++) if (c3 = e3[v3], c3 || c3 === 0) if (h2(c3) === s3(227) && (c3[s3(639)] || _2(c3))) C2.merge(g3, c3[s3(639)] ? [c3] : c3);
    else if (!Zt2[s3(1021)](c3)) g3.push(t3.createTextNode(c3));
    else {
      for (l3 || (l3 = m3.appendChild(t3.createElement(`div`))), u3 = (Jt2.exec(c3) || [``, ``])[1].toLowerCase(), d3 = Yt2[u3] || r2, p3 = d3.length; --p3 > -1; ) l3 = l3.appendChild(t3.createElement(d3[p3]));
      l3.innerHTML = C2.htmlPrefilter(c3), C2.merge(g3, l3.childNodes), l3 = m3.firstChild, l3[s3(795)] = ``;
    }
    for (m3[s3(795)] = ``, v3 = 0; c3 = g3[v3++]; ) {
      if (a3 && C2[s3(773)](c3, a3) > -1) {
        o3 && o3.push(c3);
        continue;
      }
      if (f3 = Kt2(c3), l3 = R2(m3.appendChild(c3), `script`), f3 && Xt2(l3), i3) for (p3 = 0; c3 = l3[p3++]; ) z2.test(c3.type || ``) && i3.push(c3);
    }
    return m3;
  }
  function V2(e3) {
    var t3 = n2;
    return e3[t3(599)] = (e3.getAttribute(`type`) !== null) + `/` + e3.type, e3;
  }
  function Qt2(e3) {
    var t3 = n2;
    return (e3.type || ``)[t3(1101)](0, 5) === t3(580) ? e3.type = e3.type.slice(5) : e3.removeAttribute(`type`), e3;
  }
  function $t2(e3, t3, r3, i3) {
    var a3 = n2;
    t3 = o2(t3);
    var s3, c3, l3, u3, d3, f3, p3 = 0, m3 = e3.length, h3 = m3 - 1, g3 = t3[0];
    if (typeof g3 == `function`) return e3.each(function(n3) {
      var a4 = Q, o3 = e3.eq(n3);
      t3[0] = g3.call(this, n3, o3[a4(238)]()), $t2(o3, t3, r3, i3);
    });
    if (m3 && (s3 = B2(t3, e3[0].ownerDocument, false, e3, i3), c3 = s3[a3(463)], s3.childNodes[a3(626)] === 1 && (s3 = c3), c3 || i3)) {
      for (l3 = C2[a3(279)](R2(s3, `script`), V2), u3 = l3.length; p3 < m3; p3++) d3 = s3, p3 !== h3 && (d3 = C2[a3(401)](d3, true, true), u3 && C2.merge(l3, R2(d3, `script`))), r3.call(e3[p3], d3, p3);
      if (u3) for (f3 = l3[l3[a3(626)] - 1].ownerDocument, C2.map(l3, Qt2), p3 = 0; p3 < u3; p3++) d3 = l3[p3], z2.test(d3.type || ``) && !N2[a3(483)](d3, `globalEval`) && C2.contains(f3, d3) && (d3.src && (d3.type || ``).toLowerCase() !== a3(1028) ? C2._evalUrl && !d3[a3(908)] && C2._evalUrl(d3[a3(1068)], { nonce: d3[a3(1069)], crossOrigin: d3.crossOrigin }, f3) : b2(d3.textContent, d3, f3));
    }
    return e3;
  }
  var en2 = /^(?:checkbox|radio)$/i, tn2 = /^([^.]*)(?:\.(.+)|)/;
  function nn2() {
    return true;
  }
  function H2() {
    return false;
  }
  function rn2(e3, t3, r3, i3, a3, o3) {
    var s3 = n2, c3, l3;
    if (typeof t3 == `object`) {
      for (l3 in typeof r3 != `string` && (i3 || (i3 = r3), r3 = void 0), t3) rn2(e3, l3, r3, i3, t3[l3], o3);
      return e3;
    }
    if (i3 == null && a3 == null ? (a3 = r3, i3 = r3 = void 0) : a3 ?? (typeof r3 == `string` ? (a3 = i3, i3 = void 0) : (a3 = i3, i3 = r3, r3 = void 0)), a3 === false) a3 = H2;
    else if (!a3) return e3;
    return o3 === 1 && (c3 = a3, a3 = function(e4) {
      return C2().off(e4), c3.apply(this, arguments);
    }, a3[s3(670)] = c3[s3(670)] || (c3.guid = C2.guid++)), e3.each(function() {
      C2[s3(663)].add(this, t3, a3, i3, r3);
    });
  }
  C2.event = { add: function(e3, t3, r3, i3, a3) {
    var o3 = n2, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3 = N2.get(e3);
    if (At2(e3)) for (r3.handler && (s3 = r3, r3 = s3.handler, a3 = s3.selector), a3 && C2.find.matchesSelector(j2, a3), r3.guid || (r3.guid = C2.guid++), (u3 = v3.events) || (u3 = v3.events = /* @__PURE__ */ Object.create(null)), (c3 = v3.handle) || (c3 = v3.handle = function(t4) {
      return C2 !== void 0 && C2[Q(663)].triggered !== t4.type ? C2.event.dispatch.apply(e3, arguments) : void 0;
    }), t3 = (t3 || ``).match(be2) || [``], d3 = t3.length; d3--; ) l3 = tn2.exec(t3[d3]) || [], h3 = _3 = l3[1], g3 = (l3[2] || ``).split(`.`).sort(), h3 && (p3 = C2.event[o3(889)][h3] || {}, h3 = (a3 ? p3.delegateType : p3.bindType) || h3, p3 = C2.event[o3(889)][h3] || {}, f3 = C2.extend({ type: h3, origType: _3, data: i3, handler: r3, guid: r3[o3(670)], selector: a3, needsContext: a3 && C2.expr[o3(842)].needsContext[o3(1021)](a3), namespace: g3.join(`.`) }, s3), (m3 = u3[h3]) || (m3 = u3[h3] = [], m3.delegateCount = 0, (!p3.setup || p3.setup.call(e3, i3, g3, c3) === false) && e3.addEventListener && e3.addEventListener(h3, c3)), p3.add && (p3.add.call(e3, f3), f3.handler.guid || (f3.handler[o3(670)] = r3.guid)), a3 ? m3.splice(m3.delegateCount++, 0, f3) : m3.push(f3));
  }, remove: function(e3, t3, r3, i3, a3) {
    var o3 = n2, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3 = N2.hasData(e3) && N2[o3(483)](e3);
    if (!(!v3 || !(u3 = v3.events))) {
      for (t3 = (t3 || ``).match(be2) || [``], d3 = t3.length; d3--; ) {
        if (l3 = tn2.exec(t3[d3]) || [], h3 = _3 = l3[1], g3 = (l3[2] || ``).split(`.`).sort(), !h3) {
          for (h3 in u3) C2.event.remove(e3, h3 + t3[d3], r3, i3, true);
          continue;
        }
        for (p3 = C2.event[o3(889)][h3] || {}, h3 = (i3 ? p3.delegateType : p3.bindType) || h3, m3 = u3[h3] || [], l3 = l3[2] && RegExp(`(^|\\.)` + g3.join(`\\.(?:.*\\.|)`) + `(\\.|$)`), c3 = s3 = m3.length; s3--; ) f3 = m3[s3], (a3 || _3 === f3.origType) && (!r3 || r3.guid === f3.guid) && (!l3 || l3.test(f3.namespace)) && (!i3 || i3 === f3.selector || i3 === `**` && f3.selector) && (m3.splice(s3, 1), f3.selector && m3.delegateCount--, p3[o3(442)] && p3.remove.call(e3, f3));
        c3 && !m3.length && ((!p3.teardown || p3.teardown.call(e3, g3, v3[o3(459)]) === false) && C2.removeEvent(e3, h3, v3[o3(459)]), delete u3[h3]);
      }
      C2.isEmptyObject(u3) && N2.remove(e3, o3(329));
    }
  }, dispatch: function(e3) {
    var t3 = n2, r3, i3, a3, o3, s3, c3, l3 = Array(arguments.length), u3 = C2.event.fix(e3), d3 = (N2.get(this, `events`) || /* @__PURE__ */ Object.create(null))[u3.type] || [], f3 = C2.event.special[u3.type] || {};
    for (l3[0] = u3, r3 = 1; r3 < arguments.length; r3++) l3[r3] = arguments[r3];
    if (u3.delegateTarget = this, !(f3.preDispatch && f3.preDispatch.call(this, u3) === false)) {
      for (c3 = C2[t3(663)][t3(921)].call(this, u3, d3), r3 = 0; (o3 = c3[r3++]) && !u3.isPropagationStopped(); ) for (u3.currentTarget = o3.elem, i3 = 0; (s3 = o3[t3(921)][i3++]) && !u3.isImmediatePropagationStopped(); ) (!u3.rnamespace || s3[t3(658)] === false || u3.rnamespace.test(s3[t3(658)])) && (u3.handleObj = s3, u3.data = s3[t3(444)], a3 = ((C2.event.special[s3.origType] || {})[t3(459)] || s3[t3(253)]).apply(o3[t3(356)], l3), a3 !== void 0 && (u3[t3(570)] = a3) === false && (u3.preventDefault(), u3.stopPropagation()));
      return f3.postDispatch && f3.postDispatch[t3(872)](this, u3), u3.result;
    }
  }, handlers: function(e3, t3) {
    var r3 = n2, i3, a3, o3, s3, c3, l3 = [], u3 = t3[r3(982)], d3 = e3[r3(1257)];
    if (u3 && !(e3.type === `click` && e3.button >= 1)) {
      for (; d3 !== this; d3 = d3[r3(298)] || this) if (d3.nodeType === 1 && !(e3.type === `click` && d3.disabled === true)) {
        for (s3 = [], c3 = {}, i3 = 0; i3 < u3; i3++) a3 = t3[i3], o3 = a3.selector + ` `, c3[o3] === void 0 && (c3[o3] = a3.needsContext ? C2(o3, this)[r3(1244)](d3) > -1 : C2.find(o3, this, null, [d3]).length), c3[o3] && s3.push(a3);
        s3.length && l3[r3(559)]({ elem: d3, handlers: s3 });
      }
    }
    return d3 = this, u3 < t3.length && l3.push({ elem: d3, handlers: t3.slice(u3) }), l3;
  }, addProp: function(e3, t3) {
    Object.defineProperty(C2.Event.prototype, e3, { enumerable: true, configurable: true, get: typeof t3 == `function` ? function() {
      var e4 = Q;
      if (this[e4(682)]) return t3(this.originalEvent);
    } : function() {
      var t4 = Q;
      if (this.originalEvent) return this[t4(682)][e3];
    }, set: function(t4) {
      Object[Q(646)](this, e3, { enumerable: true, configurable: true, writable: true, value: t4 });
    } });
  }, fix: function(e3) {
    return e3[C2.expando] ? e3 : new C2.Event(e3);
  }, special: C2.extend(/* @__PURE__ */ Object.create(null), { load: { noBubble: true }, click: { setup: function(e3) {
    var t3 = n2, r3 = this || e3;
    return en2[t3(1021)](r3.type) && r3[t3(567)] && w2(r3, `input`) && an2(r3, `click`, true), false;
  }, trigger: function(e3) {
    var t3 = n2, r3 = this || e3;
    return en2.test(r3[t3(599)]) && r3.click && w2(r3, `input`) && an2(r3, `click`), true;
  }, _default: function(e3) {
    var t3 = n2, r3 = e3.target;
    return en2[t3(1021)](r3.type) && r3[t3(567)] && w2(r3, `input`) && N2[t3(483)](r3, `click`) || w2(r3, `a`);
  } }, beforeunload: { postDispatch: function(e3) {
    e3.result !== void 0 && e3.preventDefault();
  } } }) };
  function an2(e3, t3, r3) {
    var i3 = n2;
    if (!r3) {
      N2.get(e3, t3) === void 0 && C2.event.add(e3, t3, nn2);
      return;
    }
    N2.set(e3, t3, false), C2[i3(663)].add(e3, t3, { namespace: false, handler: function(e4) {
      var n3 = i3, r4, o3 = N2[n3(483)](this, t3);
      if (e4.isTrigger & 1 && this[t3]) {
        if (o3.length) (C2.event[n3(889)][t3] || {}).delegateType && e4[n3(995)]();
        else if (o3 = a2.call(arguments), N2.set(this, t3, o3), this[t3](), r4 = N2.get(this, t3), N2.set(this, t3, false), o3 !== r4) return e4.stopImmediatePropagation(), e4[n3(1250)](), r4 && r4.value;
      } else o3.length && (N2.set(this, t3, { value: C2.event[n3(403)](o3[0], o3.slice(1), this) }), e4.stopPropagation(), e4.isImmediatePropagationStopped = nn2);
    } });
  }
  C2.removeEvent = function(e3, t3, n3) {
    e3.removeEventListener && e3.removeEventListener(t3, n3);
  }, C2.Event = function(e3, t3) {
    var r3 = n2;
    if (!(this instanceof C2.Event)) return new C2.Event(e3, t3);
    e3 && e3.type ? (this[r3(682)] = e3, this.type = e3.type, this.isDefaultPrevented = e3.defaultPrevented ? nn2 : H2, this.target = e3.target, this.currentTarget = e3.currentTarget, this.relatedTarget = e3[r3(458)]) : this.type = e3, t3 && C2[r3(294)](this, t3), this.timeStamp = e3 && e3.timeStamp || Date.now(), this[C2.expando] = true;
  }, C2.Event[n2(977)] = { constructor: C2.Event, isDefaultPrevented: H2, isPropagationStopped: H2, isImmediatePropagationStopped: H2, isSimulated: false, preventDefault: function() {
    var e3 = n2, t3 = this[e3(682)];
    this.isDefaultPrevented = nn2, t3 && !this[e3(1052)] && t3.preventDefault();
  }, stopPropagation: function() {
    var e3 = n2, t3 = this.originalEvent;
    this.isPropagationStopped = nn2, t3 && !this[e3(1052)] && t3.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e3 = n2, t3 = this.originalEvent;
    this.isImmediatePropagationStopped = nn2, t3 && !this.isSimulated && t3.stopImmediatePropagation(), this[e3(995)]();
  } }, C2.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, char: true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, C2.event[n2(1223)]), C2[n2(904)]({ focus: `focusin`, blur: `focusout` }, function(e3, t3) {
    var r3 = n2;
    function i3(e4) {
      var t4 = Q, n3 = C2.event.fix(e4);
      n3[t4(599)] = e4.type === `focusin` ? `focus` : `blur`, n3.isSimulated = true, n3.target === n3[t4(845)] && N2.get(this, `handle`)(n3);
    }
    C2[r3(663)].special[e3] = { setup: function() {
      if (an2(this, e3, true), D2) this.addEventListener(t3, i3);
      else return false;
    }, trigger: function() {
      return an2(this, e3), true;
    }, teardown: function() {
      if (D2) this.removeEventListener(t3, i3);
      else return false;
    }, _default: function(t4) {
      return N2.get(t4.target, e3);
    }, delegateType: t3 };
  }), C2.each({ mouseenter: n2(779), mouseleave: `mouseout`, pointerenter: `pointerover`, pointerleave: `pointerout` }, function(e3, t3) {
    C2.event.special[e3] = { delegateType: t3, bindType: t3, handle: function(e4) {
      var n3 = Q, r3, i3 = this, a3 = e4.relatedTarget, o3 = e4[n3(659)];
      return (!a3 || a3 !== i3 && !C2.contains(i3, a3)) && (e4.type = o3.origType, r3 = o3.handler.apply(this, arguments), e4.type = t3), r3;
    } };
  }), C2.fn.extend({ on: function(e3, t3, n3, r3) {
    return rn2(this, e3, t3, n3, r3);
  }, one: function(e3, t3, n3, r3) {
    return rn2(this, e3, t3, n3, r3, 1);
  }, off: function(e3, t3, r3) {
    var i3 = n2, a3, o3;
    if (e3 && e3.preventDefault && e3[i3(659)]) return a3 = e3.handleObj, C2(e3.delegateTarget).off(a3.namespace ? a3[i3(617)] + `.` + a3.namespace : a3[i3(617)], a3.selector, a3.handler), this;
    if (typeof e3 == `object`) {
      for (o3 in e3) this.off(o3, t3, e3[o3]);
      return this;
    }
    return (t3 === false || typeof t3 == `function`) && (r3 = t3, t3 = void 0), r3 === false && (r3 = H2), this.each(function() {
      C2.event.remove(this, e3, r3, t3);
    });
  } });
  var on2 = /<script|<style|<link/i;
  function sn2(e3, t3) {
    var r3 = n2;
    return w2(e3, `table`) && w2(t3.nodeType === 11 ? t3[r3(463)] : t3, `tr`) && C2(e3).children(`tbody`)[0] || e3;
  }
  function cn2(e3, t3) {
    var r3 = n2, i3, a3, o3, s3 = N2.get(e3, `events`);
    if (t3.nodeType === 1) {
      if (s3) for (i3 in N2.remove(t3, `handle events`), s3) for (a3 = 0, o3 = s3[i3].length; a3 < o3; a3++) C2[r3(663)].add(t3, i3, s3[i3][a3]);
      Mt2[r3(984)](e3) && Mt2.set(t3, C2.extend({}, Mt2.get(e3)));
    }
  }
  function ln2(e3, t3, r3) {
    for (var i3 = n2, a3, o3 = t3 ? C2.filter(t3, e3) : e3, s3 = 0; (a3 = o3[s3]) != null; s3++) !r3 && a3[i3(639)] === 1 && C2.cleanData(R2(a3)), a3.parentNode && (r3 && Kt2(a3) && Xt2(R2(a3, `script`)), a3.parentNode.removeChild(a3));
    return e3;
  }
  C2.extend({ htmlPrefilter: function(e3) {
    return e3;
  }, clone: function(e3, t3, r3) {
    var i3 = n2, a3, o3, s3, c3, l3 = e3.cloneNode(true), u3 = Kt2(e3);
    if (D2 && (e3.nodeType === 1 || e3.nodeType === 11) && !C2.isXMLDoc(e3)) for (c3 = R2(l3), s3 = R2(e3), a3 = 0, o3 = s3.length; a3 < o3; a3++) w2(c3[a3], i3(191)) && (c3[a3].defaultValue = s3[a3].defaultValue);
    if (t3) if (r3) for (s3 || (s3 = R2(e3)), c3 || (c3 = R2(l3)), a3 = 0, o3 = s3.length; a3 < o3; a3++) cn2(s3[a3], c3[a3]);
    else cn2(e3, l3);
    return c3 = R2(l3, `script`), c3.length > 0 && Xt2(c3, !u3 && R2(e3, `script`)), l3;
  }, cleanData: function(e3) {
    for (var t3 = n2, r3, i3, a3, o3 = C2.event.special, s3 = 0; (i3 = e3[s3]) !== void 0; s3++) if (At2(i3)) {
      if (r3 = i3[N2.expando]) {
        if (r3.events) for (a3 in r3.events) o3[a3] ? C2.event[t3(442)](i3, a3) : C2.removeEvent(i3, a3, r3.handle);
        i3[N2.expando] = void 0;
      }
      i3[Mt2.expando] && (i3[Mt2.expando] = void 0);
    }
  } }), C2.fn.extend({ detach: function(e3) {
    return ln2(this, e3, true);
  }, remove: function(e3) {
    return ln2(this, e3);
  }, text: function(e3) {
    return ye2(this, function(e4) {
      return e4 === void 0 ? C2.text(this) : this.empty().each(function() {
        var t3 = Q;
        (this[t3(639)] === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = e4);
      });
    }, null, e3, arguments.length);
  }, append: function() {
    return $t2(this, arguments, function(e3) {
      var t3 = Q;
      (this.nodeType === 1 || this[t3(639)] === 11 || this.nodeType === 9) && sn2(this, e3)[t3(522)](e3);
    });
  }, prepend: function() {
    return $t2(this, arguments, function(e3) {
      var t3 = Q;
      if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
        var n3 = sn2(this, e3);
        n3[t3(874)](e3, n3[t3(463)]);
      }
    });
  }, before: function() {
    return $t2(this, arguments, function(e3) {
      var t3 = Q;
      this.parentNode && this[t3(298)].insertBefore(e3, this);
    });
  }, after: function() {
    return $t2(this, arguments, function(e3) {
      this.parentNode && this.parentNode.insertBefore(e3, this.nextSibling);
    });
  }, empty: function() {
    for (var e3 = n2, t3, r3 = 0; (t3 = this[r3]) != null; r3++) t3.nodeType === 1 && (C2[e3(1032)](R2(t3, false)), t3.textContent = ``);
    return this;
  }, clone: function(e3, t3) {
    var r3 = n2;
    return e3 ?? (e3 = false), t3 ?? (t3 = e3), this[r3(279)](function() {
      return C2.clone(this, e3, t3);
    });
  }, html: function(e3) {
    return ye2(this, function(e4) {
      var t3 = Q, n3 = this[0] || {}, r3 = 0, i3 = this[t3(626)];
      if (e4 === void 0 && n3.nodeType === 1) return n3.innerHTML;
      if (typeof e4 == `string` && !on2[t3(1021)](e4) && !Yt2[(Jt2[t3(496)](e4) || [``, ``])[1][t3(856)]()]) {
        e4 = C2.htmlPrefilter(e4);
        try {
          for (; r3 < i3; r3++) n3 = this[r3] || {}, n3.nodeType === 1 && (C2[t3(1032)](R2(n3, false)), n3.innerHTML = e4);
          n3 = 0;
        } catch {
        }
      }
      n3 && this.empty()[t3(440)](e4);
    }, null, e3, arguments.length);
  }, replaceWith: function() {
    var e3 = [];
    return $t2(this, arguments, function(t3) {
      var n3 = Q, r3 = this[n3(298)];
      C2.inArray(this, e3) < 0 && (C2.cleanData(R2(this)), r3 && r3.replaceChild(t3, this));
    }, e3);
  } }), C2.each({ appendTo: `append`, prependTo: `prepend`, insertBefore: n2(633), insertAfter: `after`, replaceAll: n2(548) }, function(e3, t3) {
    C2.fn[e3] = function(e4) {
      for (var n3 = Q, r3, i3 = [], a3 = C2(e4), o3 = a3[n3(626)] - 1, c3 = 0; c3 <= o3; c3++) r3 = c3 === o3 ? this : this[n3(401)](true), C2(a3[c3])[t3](r3), s2[n3(868)](i3, r3);
      return this.pushStack(i3);
    };
  });
  var un2 = RegExp(`^(` + Lt2 + `)(?!px)[a-z%]+$`, `i`), dn2 = /^--/;
  function fn2(t3) {
    var r3 = n2, i3 = t3[r3(282)][r3(821)];
    return i3 || (i3 = e2), i3.getComputedStyle(t3);
  }
  function pn2(e3, t3, n3) {
    var r3, i3, a3 = {};
    for (i3 in t3) a3[i3] = e3.style[i3], e3.style[i3] = t3[i3];
    for (i3 in r3 = n3.call(e3), t3) e3.style[i3] = a3[i3];
    return r3;
  }
  function mn2(e3, t3, n3) {
    var r3, i3 = dn2.test(t3);
    return n3 || (n3 = fn2(e3)), n3 && (r3 = n3.getPropertyValue(t3) || n3[t3], i3 && r3 && (r3 = r3.replace(k2, `$1`) || void 0), r3 === `` && !Kt2(e3) && (r3 = C2.style(e3, t3))), r3 === void 0 ? r3 : r3 + ``;
  }
  var hn2 = [n2(430), `Moz`, `ms`], U2 = v2.createElement(`div`).style;
  function gn2(e3) {
    for (var t3 = e3[0].toUpperCase() + e3.slice(1), n3 = hn2.length; n3--; ) if (e3 = hn2[n3] + t3, e3 in U2) return e3;
  }
  function _n2(e3) {
    return e3 in U2 ? e3 : gn2(e3) || e3;
  }
  var vn2, yn2, bn2 = v2[n2(251)](`table`);
  function xn2() {
    var t3 = n2;
    if (!(!bn2 || !bn2.style)) {
      var r3, i3 = v2[t3(251)](t3(1051)), a3 = v2.createElement(`tr`), o3 = v2.createElement(`td`);
      if (bn2.style.cssText = `position:absolute;left:-11111px;border-collapse:separate;border-spacing:0`, a3.style.cssText = `box-sizing:content-box;border:1px solid;height:1px`, o3.style.cssText = t3(364), i3.span = 2, j2.appendChild(bn2).appendChild(i3).parentNode.appendChild(a3).appendChild(o3).parentNode.appendChild(o3.cloneNode(true)), bn2.offsetWidth === 0) {
        j2[t3(383)](bn2);
        return;
      }
      r3 = e2.getComputedStyle(a3), yn2 = D2 || Math[t3(448)](parseFloat(e2.getComputedStyle(i3).width)) === 18, vn2 = Math[t3(448)](parseFloat(r3.height) + parseFloat(r3[t3(1018)]) + parseFloat(r3[t3(391)])) === a3.offsetHeight, j2.removeChild(bn2), bn2 = null;
    }
  }
  C2[n2(294)](m2, { reliableTrDimensions: function() {
    return xn2(), vn2;
  }, reliableColDimensions: function() {
    return xn2(), yn2;
  } });
  var Sn2 = { position: `absolute`, visibility: `hidden`, display: `block` }, Cn2 = { letterSpacing: `0`, fontWeight: n2(1129) };
  function wn2(e3, t3, r3) {
    var i3 = Rt2[n2(496)](t3);
    return i3 ? Math.max(0, i3[2] - (r3 || 0)) + (i3[3] || `px`) : t3;
  }
  function Tn2(e3, t3, r3, i3, a3, o3) {
    var s3 = n2, c3 = +(t3 === s3(1183)), l3 = 0, u3 = 0, d3 = 0;
    if (r3 === (i3 ? `border` : `content`)) return 0;
    for (; c3 < 4; c3 += 2) r3 === `margin` && (d3 += C2.css(e3, r3 + zt2[c3], true, a3)), i3 ? (r3 === `content` && (u3 -= C2.css(e3, `padding` + zt2[c3], true, a3)), r3 !== `margin` && (u3 -= C2.css(e3, `border` + zt2[c3] + `Width`, true, a3))) : (u3 += C2.css(e3, `padding` + zt2[c3], true, a3), r3 === `padding` ? l3 += C2.css(e3, `border` + zt2[c3] + `Width`, true, a3) : u3 += C2[s3(870)](e3, `border` + zt2[c3] + `Width`, true, a3));
    return !i3 && o3 >= 0 && (u3 += Math.max(0, Math.ceil(e3[`offset` + t3[0].toUpperCase() + t3.slice(1)] - o3 - u3 - l3 - 0.5)) || 0), u3 + d3;
  }
  function En2(e3, t3, r3) {
    var i3 = n2, a3 = fn2(e3), o3 = (D2 || r3) && C2.css(e3, `boxSizing`, false, a3) === `border-box`, s3 = o3, c3 = mn2(e3, t3, a3), l3 = `offset` + t3[0].toUpperCase() + t3.slice(1);
    if (un2.test(c3)) {
      if (!r3) return c3;
      c3 = i3(798);
    }
    return (c3 === i3(798) || D2 && o3 || !m2.reliableColDimensions() && w2(e3, `col`) || !m2.reliableTrDimensions() && w2(e3, `tr`)) && e3.getClientRects().length && (o3 = C2.css(e3, `boxSizing`, false, a3) === `border-box`, s3 = l3 in e3, s3 && (c3 = e3[l3])), c3 = parseFloat(c3) || 0, c3 + Tn2(e3, t3, r3 || i3(o3 ? 1110 : 1206), s3, a3, c3) + `px`;
  }
  C2.extend({ cssHooks: {}, style: function(e3, t3, r3, i3) {
    var a3 = n2;
    if (!(!e3 || e3.nodeType === 3 || e3[a3(639)] === 8 || !e3.style)) {
      var o3, s3, c3, l3 = Ht2(t3), u3 = dn2.test(t3), d3 = e3.style;
      if (u3 || (t3 = _n2(l3)), c3 = C2.cssHooks[t3] || C2.cssHooks[l3], r3 !== void 0) {
        if (s3 = typeof r3, s3 === a3(583) && (o3 = Rt2[a3(496)](r3)) && o3[1] && (r3 = I2(e3, t3, o3), s3 = `number`), r3 == null || r3 !== r3) return;
        s3 === `number` && (r3 += o3 && o3[3] || (F2(l3) ? `px` : ``)), D2 && r3 === `` && t3.indexOf(`background`) === 0 && (d3[t3] = `inherit`), (!c3 || !(`set` in c3) || (r3 = c3.set(e3, r3, i3)) !== void 0) && (u3 ? d3[a3(1205)](t3, r3) : d3[t3] = r3);
      } else return c3 && `get` in c3 && (o3 = c3.get(e3, false, i3)) !== void 0 ? o3 : d3[t3];
    }
  }, css: function(e3, t3, r3, i3) {
    var a3 = n2, o3, s3, c3, l3 = Ht2(t3);
    return dn2.test(t3) || (t3 = _n2(l3)), c3 = C2.cssHooks[t3] || C2[a3(1196)][l3], c3 && `get` in c3 && (o3 = c3[a3(483)](e3, true, r3)), o3 === void 0 && (o3 = mn2(e3, t3, i3)), o3 === `normal` && t3 in Cn2 && (o3 = Cn2[t3]), r3 === `` || r3 ? (s3 = parseFloat(o3), r3 === true || isFinite(s3) ? s3 || 0 : o3) : o3;
  } }), C2.each([`height`, `width`], function(e3, t3) {
    C2.cssHooks[t3] = { get: function(e4, n3, r3) {
      var i3 = Q;
      if (n3) return C2.css(e4, i3(928)) === `none` ? pn2(e4, Sn2, function() {
        return En2(e4, t3, r3);
      }) : En2(e4, t3, r3);
    }, set: function(e4, n3, r3) {
      var i3, a3 = fn2(e4), o3 = r3 && C2.css(e4, `boxSizing`, false, a3) === `border-box`, s3 = r3 ? Tn2(e4, t3, r3, o3, a3) : 0;
      return s3 && (i3 = Rt2.exec(n3)) && (i3[3] || `px`) !== `px` && (e4.style[t3] = n3, n3 = C2.css(e4, t3)), wn2(e4, n3, s3);
    } };
  }), C2.each({ margin: ``, padding: ``, border: `Width` }, function(e3, t3) {
    C2.cssHooks[e3 + t3] = { expand: function(n3) {
      for (var r3 = 0, i3 = {}, a3 = typeof n3 == `string` ? n3.split(` `) : [n3]; r3 < 4; r3++) i3[e3 + zt2[r3] + t3] = a3[r3] || a3[r3 - 2] || a3[0];
      return i3;
    } }, e3 !== `margin` && (C2.cssHooks[e3 + t3].set = wn2);
  }), C2.fn.extend({ css: function(e3, t3) {
    return ye2(this, function(e4, t4, n3) {
      var r3, i3, a3 = {}, o3 = 0;
      if (Array.isArray(t4)) {
        for (r3 = fn2(e4), i3 = t4.length; o3 < i3; o3++) a3[t4[o3]] = C2.css(e4, t4[o3], false, r3);
        return a3;
      }
      return n3 === void 0 ? C2.css(e4, t4) : C2.style(e4, t4, n3);
    }, e3, t3, arguments.length > 1);
  } });
  function Dn2(e3, t3, n3, r3, i3) {
    return new Dn2.prototype.init(e3, t3, n3, r3, i3);
  }
  C2.Tween = Dn2, Dn2.prototype = { constructor: Dn2, init: function(e3, t3, r3, i3, a3, o3) {
    var s3 = n2;
    this.elem = e3, this.prop = r3, this.easing = a3 || C2.easing[s3(1104)], this[s3(1126)] = t3, this.start = this.now = this[s3(936)](), this.end = i3, this.unit = o3 || (F2(r3) ? `px` : ``);
  }, cur: function() {
    var e3 = Dn2.propHooks[this.prop];
    return e3 && e3.get ? e3.get(this) : Dn2.propHooks._default.get(this);
  }, run: function(e3) {
    var t3 = n2, r3, i3 = Dn2.propHooks[this.prop];
    return this[t3(1126)].duration ? this.pos = r3 = C2.easing[this.easing](e3, this.options.duration * e3, 0, 1, this.options[t3(1168)]) : this.pos = r3 = e3, this.now = (this.end - this.start) * r3 + this.start, this.options[t3(1017)] && this[t3(1126)].step.call(this[t3(356)], this.now, this), i3 && i3[t3(1178)] ? i3.set(this) : Dn2.propHooks._default.set(this), this;
  } }, Dn2.prototype[n2(1246)].prototype = Dn2.prototype, Dn2[n2(335)] = { _default: { get: function(e3) {
    var t3 = n2, r3;
    return e3.elem[t3(639)] !== 1 || e3[t3(356)][e3.prop] != null && e3.elem.style[e3.prop] == null ? e3.elem[e3.prop] : (r3 = C2.css(e3.elem, e3[t3(1106)], ``), !r3 || r3 === `auto` ? 0 : r3);
  }, set: function(e3) {
    var t3 = n2;
    C2.fx[t3(1017)][e3.prop] ? C2.fx.step[e3.prop](e3) : e3.elem.nodeType === 1 && (C2.cssHooks[e3.prop] || e3.elem.style[_n2(e3.prop)] != null) ? C2[t3(521)](e3.elem, e3.prop, e3.now + e3.unit) : e3.elem[e3.prop] = e3[t3(272)];
  } } }, C2.easing = { linear: function(e3) {
    return e3;
  }, swing: function(e3) {
    return 0.5 - Math.cos(e3 * Math.PI) / 2;
  }, _default: n2(937) }, C2.fx = Dn2.prototype.init, C2.fx[n2(1017)] = {};
  var On2, kn2, An2 = /^(?:toggle|show|hide)$/, jn2 = /queueHooks$/;
  function Mn2() {
    kn2 && (v2[n2(429)] === false && e2.requestAnimationFrame ? e2.requestAnimationFrame(Mn2) : e2.setTimeout(Mn2, 13), C2.fx.tick());
  }
  function Nn2() {
    return e2.setTimeout(function() {
      On2 = void 0;
    }), On2 = Date.now();
  }
  function Pn2(e3, t3) {
    var r3 = n2, i3, a3 = 0, o3 = { height: e3 };
    for (t3 = +!!t3; a3 < 4; a3 += 2 - t3) i3 = zt2[a3], o3[r3(1185) + i3] = o3[`padding` + i3] = e3;
    return t3 && (o3.opacity = o3.width = e3), o3;
  }
  function Fn2(e3, t3, r3) {
    for (var i3 = n2, a3, o3 = (Rn2[i3(185)][t3] || []).concat(Rn2.tweeners[`*`]), s3 = 0, c3 = o3.length; s3 < c3; s3++) if (a3 = o3[s3].call(r3, t3, e3)) return a3;
  }
  function In2(e3, t3, r3) {
    var i3 = n2, a3, o3, s3, c3, l3, u3, d3, f3, p3 = i3(1183) in t3 || `height` in t3, m3 = this, h3 = {}, g3 = e3.style, _3 = e3[i3(639)] && Bt2(e3), v3 = N2.get(e3, `fxshow`);
    for (a3 in r3.queue || (c3 = C2[i3(1151)](e3, `fx`), c3.unqueued ?? (c3.unqueued = 0, l3 = c3[i3(1222)].fire, c3[i3(1222)].fire = function() {
      c3[i3(513)] || l3();
    }), c3.unqueued++, m3.always(function() {
      m3.always(function() {
        c3.unqueued--, C2.queue(e3, `fx`).length || c3.empty.fire();
      });
    })), t3) if (o3 = t3[a3], An2.test(o3)) {
      if (delete t3[a3], s3 || (s3 = o3 === `toggle`), o3 === (_3 ? i3(537) : `show`)) if (o3 === i3(304) && v3 && v3[a3] !== void 0) _3 = true;
      else continue;
      h3[a3] = v3 && v3[a3] || C2.style(e3, a3);
    }
    if (u3 = !C2.isEmptyObject(t3), !(!u3 && C2.isEmptyObject(h3))) for (a3 in p3 && e3.nodeType === 1 && (r3.overflow = [g3.overflow, g3.overflowX, g3.overflowY], d3 = v3 && v3.display, d3 ?? (d3 = N2.get(e3, `display`)), f3 = C2.css(e3, `display`), f3 === `none` && (d3 ? f3 = d3 : (Gt2([e3], true), d3 = e3.style.display || d3, f3 = C2.css(e3, `display`), Gt2([e3]))), (f3 === `inline` || f3 === i3(1163) && d3 != null) && C2.css(e3, `float`) === `none` && (u3 || (m3.done(function() {
      g3.display = d3;
    }), d3 ?? (d3 = (f3 = g3.display, f3 === i3(1097) ? `` : f3))), g3.display = i3(1163))), r3.overflow && (g3.overflow = `hidden`, m3[i3(681)](function() {
      var e4 = i3;
      g3[e4(897)] = r3.overflow[0], g3.overflowX = r3[e4(897)][1], g3.overflowY = r3.overflow[2];
    })), u3 = false, h3) u3 || (v3 ? `hidden` in v3 && (_3 = v3.hidden) : v3 = N2.set(e3, `fxshow`, { display: d3 }), s3 && (v3.hidden = !_3), _3 && Gt2([e3], true), m3.done(function() {
      var t4 = i3;
      for (a3 in _3 || Gt2([e3]), N2.remove(e3, t4(267)), h3) C2.style(e3, a3, h3[a3]);
    })), u3 = Fn2(_3 ? v3[a3] : 0, a3, m3), a3 in v3 || (v3[a3] = u3.start, _3 && (u3.end = u3.start, u3.start = 0));
  }
  function Ln2(e3, t3) {
    var r3 = n2, i3, a3, o3, s3, c3;
    for (i3 in e3) if (a3 = Ht2(i3), o3 = t3[a3], s3 = e3[i3], Array.isArray(s3) && (o3 = s3[1], s3 = e3[i3] = s3[0]), i3 !== a3 && (e3[a3] = s3, delete e3[i3]), c3 = C2[r3(1196)][a3], c3 && `expand` in c3) for (i3 in s3 = c3.expand(s3), delete e3[a3], s3) i3 in e3 || (e3[i3] = s3[i3], t3[i3] = o3);
    else t3[a3] = o3;
  }
  function Rn2(e3, t3, r3) {
    var i3 = n2, a3, o3, s3 = 0, c3 = Rn2.prefilters.length, l3 = C2.Deferred().always(function() {
      var e4 = Q;
      delete u3[e4(356)];
    }), u3 = function() {
      var t4 = Q;
      if (o3) return false;
      for (var n3 = On2 || Nn2(), r4 = Math.max(0, d3.startTime + d3.duration - n3), i4 = 1 - (r4 / d3[t4(1168)] || 0), a4 = 0, s4 = d3.tweens[t4(626)]; a4 < s4; a4++) d3.tweens[a4][t4(249)](i4);
      return l3.notifyWith(e3, [d3, i4, r4]), i4 < 1 && s4 ? r4 : (s4 || l3.notifyWith(e3, [d3, 1, 0]), l3.resolveWith(e3, [d3]), false);
    }, d3 = l3.promise({ elem: e3, props: C2.extend({}, t3), opts: C2.extend(true, { specialEasing: {}, easing: C2[i3(475)]._default }, r3), originalProperties: t3, originalOptions: r3, startTime: On2 || Nn2(), duration: r3[i3(1168)], tweens: [], createTween: function(t4, n3) {
      var r4 = i3, a4 = C2.Tween(e3, d3.opts, t4, n3, d3.opts[r4(683)][t4] || d3.opts[r4(475)]);
      return d3.tweens.push(a4), a4;
    }, stop: function(t4) {
      var n3 = i3, r4 = 0, a4 = t4 ? d3[n3(940)][n3(626)] : 0;
      if (o3) return this;
      for (o3 = true; r4 < a4; r4++) d3.tweens[r4].run(1);
      return t4 ? (l3.notifyWith(e3, [d3, 1, 0]), l3.resolveWith(e3, [d3, t4])) : l3.rejectWith(e3, [d3, t4]), this;
    } }), f3 = d3.props;
    for (Ln2(f3, d3.opts[i3(683)]); s3 < c3; s3++) if (a3 = Rn2[i3(1015)][s3].call(d3, e3, f3, d3[i3(316)]), a3) return typeof a3[i3(1237)] == `function` && (C2._queueHooks(d3.elem, d3.opts.queue).stop = a3.stop.bind(a3)), a3;
    return C2[i3(279)](f3, Fn2, d3), typeof d3.opts.start == i3(478) && d3.opts[i3(210)].call(e3, d3), d3.progress(d3[i3(316)].progress)[i3(753)](d3.opts.done, d3.opts[i3(1210)]).fail(d3.opts.fail)[i3(681)](d3.opts.always), C2.fx.timer(C2.extend(u3, { elem: e3, anim: d3, queue: d3.opts.queue })), d3;
  }
  C2.Animation = C2.extend(Rn2, { tweeners: { "*": [function(e3, t3) {
    var n3 = this.createTween(e3, t3);
    return I2(n3.elem, e3, Rt2.exec(t3), n3), n3;
  }] }, tweener: function(e3, t3) {
    var r3 = n2;
    typeof e3 == `function` ? (t3 = e3, e3 = [`*`]) : e3 = e3.match(be2);
    for (var i3, a3 = 0, o3 = e3[r3(626)]; a3 < o3; a3++) i3 = e3[a3], Rn2.tweeners[i3] = Rn2[r3(185)][i3] || [], Rn2.tweeners[i3].unshift(t3);
  }, prefilters: [In2], prefilter: function(e3, t3) {
    var r3 = n2;
    t3 ? Rn2[r3(1015)][r3(755)](e3) : Rn2.prefilters[r3(559)](e3);
  } }), C2[n2(1217)] = function(e3, t3, r3) {
    var i3 = n2, a3 = e3 && typeof e3 == `object` ? C2.extend({}, e3) : { complete: r3 || t3 || typeof e3 == `function` && e3, duration: e3, easing: r3 && t3 || t3 && typeof t3 != `function` && t3 };
    return C2.fx.off ? a3.duration = 0 : typeof a3[i3(1168)] != `number` && (a3.duration in C2.fx.speeds ? a3.duration = C2.fx.speeds[a3.duration] : a3.duration = C2.fx.speeds._default), (a3.queue == null || a3.queue === true) && (a3.queue = `fx`), a3.old = a3.complete, a3.complete = function() {
      var e4 = i3;
      typeof a3.old == e4(478) && a3.old.call(this), a3.queue && C2.dequeue(this, a3.queue);
    }, a3;
  }, C2.fn.extend({ fadeTo: function(e3, t3, r3, i3) {
    var a3 = n2;
    return this.filter(Bt2).css(`opacity`, 0).show().end()[a3(1162)]({ opacity: t3 }, e3, r3, i3);
  }, animate: function(e3, t3, n3, r3) {
    var i3 = C2.isEmptyObject(e3), a3 = C2.speed(t3, n3, r3), o3 = function() {
      var t4 = Q, n4 = Rn2(this, C2.extend({}, e3), a3);
      (i3 || N2.get(this, `finish`)) && n4[t4(1237)](true);
    };
    return o3.finish = o3, i3 || a3.queue === false ? this.each(o3) : this.queue(a3.queue, o3);
  }, stop: function(e3, t3, n3) {
    var r3 = function(e4) {
      var t4 = e4.stop;
      delete e4.stop, t4(n3);
    };
    return typeof e3 != `string` && (n3 = t3, t3 = e3, e3 = void 0), t3 && this.queue(e3 || `fx`, []), this.each(function() {
      var t4 = Q, i3 = true, a3 = e3 != null && e3 + `queueHooks`, o3 = C2[t4(351)], s3 = N2.get(this);
      if (a3) s3[a3] && s3[a3].stop && r3(s3[a3]);
      else for (a3 in s3) s3[a3] && s3[a3][t4(1237)] && jn2.test(a3) && r3(s3[a3]);
      for (a3 = o3.length; a3--; ) o3[a3].elem === this && (e3 == null || o3[a3].queue === e3) && (o3[a3][t4(1189)].stop(n3), i3 = false, o3.splice(a3, 1));
      (i3 || !n3) && C2.dequeue(this, e3);
    });
  }, finish: function(e3) {
    return e3 !== false && (e3 || (e3 = `fx`)), this.each(function() {
      var t3 = Q, n3, r3 = N2.get(this), i3 = r3[e3 + `queue`], a3 = r3[e3 + `queueHooks`], o3 = C2.timers, s3 = i3 ? i3[t3(626)] : 0;
      for (r3.finish = true, C2.queue(this, e3, []), a3 && a3.stop && a3.stop.call(this, true), n3 = o3.length; n3--; ) o3[n3].elem === this && o3[n3].queue === e3 && (o3[n3][t3(1189)].stop(true), o3.splice(n3, 1));
      for (n3 = 0; n3 < s3; n3++) i3[n3] && i3[n3].finish && i3[n3].finish[t3(872)](this);
      delete r3.finish;
    });
  } }), C2.each([n2(361), `show`, `hide`], function(e3, t3) {
    var n3 = C2.fn[t3];
    C2.fn[t3] = function(e4, r3, i3) {
      return e4 == null || typeof e4 == Q(420) ? n3.apply(this, arguments) : this.animate(Pn2(t3, true), e4, r3, i3);
    };
  }), C2.each({ slideDown: Pn2(n2(304)), slideUp: Pn2(`hide`), slideToggle: Pn2(`toggle`), fadeIn: { opacity: `show` }, fadeOut: { opacity: `hide` }, fadeToggle: { opacity: `toggle` } }, function(e3, t3) {
    C2.fn[e3] = function(e4, n3, r3) {
      return this.animate(t3, e4, n3, r3);
    };
  }), C2[n2(351)] = [], C2.fx.tick = function() {
    var e3 = n2, t3, r3 = 0, i3 = C2[e3(351)];
    for (On2 = Date.now(); r3 < i3.length; r3++) t3 = i3[r3], !t3() && i3[r3] === t3 && i3.splice(r3--, 1);
    i3[e3(626)] || C2.fx.stop(), On2 = void 0;
  }, C2.fx[n2(362)] = function(e3) {
    C2[n2(351)].push(e3), C2.fx.start();
  }, C2.fx.start = function() {
    kn2 || (kn2 = true, Mn2());
  }, C2.fx.stop = function() {
    kn2 = null;
  }, C2.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C2.fn[n2(882)] = function(t3, n3) {
    return t3 = C2.fx && C2.fx.speeds[t3] || t3, n3 || (n3 = `fx`), this.queue(n3, function(n4, r3) {
      var i3 = Q, a3 = e2.setTimeout(n4, t3);
      r3[i3(1237)] = function() {
        e2.clearTimeout(a3);
      };
    });
  };
  var zn2 = /^(?:input|select|textarea|button)$/i, Bn2 = /^(?:a|area)$/i;
  C2.fn.extend({ prop: function(e3, t3) {
    return ye2(this, C2.prop, e3, t3, arguments.length > 1);
  }, removeProp: function(e3) {
    return this.each(function() {
      delete this[C2.propFix[e3] || e3];
    });
  } }), C2.extend({ prop: function(e3, t3, r3) {
    var i3 = n2, a3, o3, s3 = e3.nodeType;
    if (!(s3 === 3 || s3 === 8 || s3 === 2)) return (s3 !== 1 || !C2.isXMLDoc(e3)) && (t3 = C2.propFix[t3] || t3, o3 = C2[i3(335)][t3]), r3 === void 0 ? o3 && `get` in o3 && (a3 = o3.get(e3, t3)) !== null ? a3 : e3[t3] : o3 && i3(1178) in o3 && (a3 = o3[i3(1178)](e3, r3, t3)) !== void 0 ? a3 : e3[t3] = r3;
  }, propHooks: { tabIndex: { get: function(e3) {
    var t3 = n2, r3 = e3.getAttribute(`tabindex`);
    return r3 ? parseInt(r3, 10) : zn2.test(e3.nodeName) || Bn2.test(e3[t3(1027)]) && e3[t3(171)] ? 0 : -1;
  } } }, propFix: { for: `htmlFor`, class: `className` } }), D2 && (C2.propHooks.selected = { get: function(e3) {
    var t3 = e3.parentNode;
    return t3 && t3.parentNode && t3.parentNode.selectedIndex, null;
  }, set: function(e3) {
    var t3 = e3.parentNode;
    t3 && (t3.selectedIndex, t3.parentNode && t3.parentNode.selectedIndex);
  } }), C2.each([`tabIndex`, `readOnly`, `maxLength`, `cellSpacing`, `cellPadding`, `rowSpan`, `colSpan`, `useMap`, `frameBorder`, `contentEditable`], function() {
    C2.propFix[this.toLowerCase()] = this;
  });
  function Vn2(e3) {
    return (e3[n2(842)](be2) || []).join(` `);
  }
  function Hn2(e3) {
    return e3.getAttribute && e3.getAttribute(`class`) || ``;
  }
  function W2(e3) {
    var t3 = n2;
    return Array.isArray(e3) ? e3 : typeof e3 == t3(583) && e3.match(be2) || [];
  }
  C2.fn[n2(294)]({ addClass: function(e3) {
    var t3 = n2, r3, i3, a3, o3, s3, c3;
    return typeof e3 == `function` ? this.each(function(t4) {
      var n3 = Q;
      C2(this)[n3(265)](e3.call(this, t4, Hn2(this)));
    }) : (r3 = W2(e3), r3.length ? this[t3(904)](function() {
      var e4 = t3;
      if (a3 = Hn2(this), i3 = this.nodeType === 1 && ` ` + Vn2(a3) + ` `, i3) {
        for (s3 = 0; s3 < r3.length; s3++) o3 = r3[s3], i3.indexOf(` ` + o3 + ` `) < 0 && (i3 += o3 + ` `);
        c3 = Vn2(i3), a3 !== c3 && this.setAttribute(e4(1093), c3);
      }
    }) : this);
  }, removeClass: function(e3) {
    var t3 = n2, r3, i3, a3, o3, s3, c3;
    return typeof e3 == t3(478) ? this[t3(904)](function(t4) {
      C2(this).removeClass(e3.call(this, t4, Hn2(this)));
    }) : arguments.length ? (r3 = W2(e3), r3.length ? this.each(function() {
      var e4 = t3;
      if (a3 = Hn2(this), i3 = this.nodeType === 1 && ` ` + Vn2(a3) + ` `, i3) {
        for (s3 = 0; s3 < r3.length; s3++) for (o3 = r3[s3]; i3.indexOf(` ` + o3 + ` `) > -1; ) i3 = i3[e4(1077)](` ` + o3 + ` `, ` `);
        c3 = Vn2(i3), a3 !== c3 && this[e4(985)](e4(1093), c3);
      }
    }) : this) : this[t3(919)](`class`, ``);
  }, toggleClass: function(e3, t3) {
    var r3 = n2, i3, a3, o3, s3;
    return typeof e3 == `function` ? this.each(function(n3) {
      C2(this).toggleClass(e3.call(this, n3, Hn2(this), t3), t3);
    }) : typeof t3 == `boolean` ? t3 ? this.addClass(e3) : this.removeClass(e3) : (i3 = W2(e3), i3[r3(626)] ? this.each(function() {
      for (s3 = C2(this), o3 = 0; o3 < i3.length; o3++) a3 = i3[o3], s3.hasClass(a3) ? s3.removeClass(a3) : s3.addClass(a3);
    }) : this);
  }, hasClass: function(e3) {
    var t3 = n2, r3, i3, a3 = 0;
    for (r3 = ` ` + e3 + ` `; i3 = this[a3++]; ) if (i3.nodeType === 1 && (` ` + Vn2(Hn2(i3)) + ` `)[t3(509)](r3) > -1) return true;
    return false;
  } }), C2.fn.extend({ val: function(e3) {
    var t3 = n2, r3, i3, a3, o3 = this[0];
    return arguments[t3(626)] ? (a3 = typeof e3 == `function`, this.each(function(n3) {
      var i4 = t3, o4;
      this[i4(639)] === 1 && (o4 = a3 ? e3.call(this, n3, C2(this).val()) : e3, o4 == null ? o4 = `` : typeof o4 == `number` ? o4 += `` : Array.isArray(o4) && (o4 = C2.map(o4, function(e4) {
        return e4 == null ? `` : e4 + ``;
      })), r3 = C2.valHooks[this.type] || C2.valHooks[this.nodeName.toLowerCase()], (!r3 || !(i4(1178) in r3) || r3.set(this, o4, `value`) === void 0) && (this.value = o4));
    })) : o3 ? (r3 = C2.valHooks[o3.type] || C2.valHooks[o3.nodeName.toLowerCase()], r3 && `get` in r3 && (i3 = r3.get(o3, `value`)) !== void 0 ? i3 : (i3 = o3[t3(461)], i3 ?? ``)) : void 0;
  } }), C2[n2(294)]({ valHooks: { select: { get: function(e3) {
    var t3 = n2, r3, i3, a3, o3 = e3.options, s3 = e3[t3(485)], c3 = e3[t3(599)] === t3(656), l3 = c3 ? null : [], u3 = c3 ? s3 + 1 : o3.length;
    for (a3 = s3 < 0 ? u3 : c3 ? s3 : 0; a3 < u3; a3++) if (i3 = o3[a3], i3.selected && !i3.disabled && (!i3[t3(298)][t3(350)] || !w2(i3.parentNode, `optgroup`))) {
      if (r3 = C2(i3).val(), c3) return r3;
      l3.push(r3);
    }
    return l3;
  }, set: function(e3, t3) {
    for (var r3 = n2, i3, a3, o3 = e3.options, s3 = C2.makeArray(t3), c3 = o3[r3(626)]; c3--; ) a3 = o3[c3], (a3.selected = C2[r3(773)](C2(a3).val(), s3) > -1) && (i3 = true);
    return i3 || (e3.selectedIndex = -1), s3;
  } } } }), D2 && (C2.valHooks[n2(866)] = { get: function(e3) {
    var t3 = n2;
    return e3.getAttribute(`value`) ?? Vn2(C2[t3(601)](e3));
  } }), C2.each([`radio`, `checkbox`], function() {
    C2.valHooks[this] = { set: function(e3, t3) {
      if (Array.isArray(t3)) return e3.checked = C2.inArray(C2(e3).val(), t3) > -1;
    } };
  });
  var G2 = /^(?:focusinfocus|focusoutblur)$/, K2 = function(e3) {
    e3.stopPropagation();
  };
  C2[n2(294)](C2.event, { trigger: function(t3, r3, i3, a3) {
    var o3 = n2, s3, c3, l3, u3, f3, p3, m3, h3, _3 = [i3 || v2], y3 = d2[o3(872)](t3, `type`) ? t3[o3(599)] : t3, b3 = d2.call(t3, `namespace`) ? t3.namespace.split(`.`) : [];
    if (c3 = h3 = l3 = i3 || (i3 = v2), !(i3.nodeType === 3 || i3.nodeType === 8) && !G2.test(y3 + C2[o3(663)].triggered) && (y3.indexOf(`.`) > -1 && (b3 = y3[o3(887)](`.`), y3 = b3.shift(), b3.sort()), f3 = y3.indexOf(`:`) < 0 && `on` + y3, t3 = t3[C2.expando] ? t3 : new C2.Event(y3, typeof t3 == `object` && t3), t3.isTrigger = a3 ? 2 : 3, t3.namespace = b3[o3(1045)](`.`), t3[o3(929)] = t3.namespace ? RegExp(`(^|\\.)` + b3.join(`\\.(?:.*\\.|)`) + `(\\.|$)`) : null, t3.result = void 0, t3.target || (t3[o3(1257)] = i3), r3 = r3 == null ? [t3] : C2.makeArray(r3, [t3]), m3 = C2.event.special[y3] || {}, !(!a3 && m3.trigger && m3[o3(403)][o3(868)](i3, r3) === false))) {
      if (!a3 && !m3.noBubble && !g2(i3)) {
        for (u3 = m3.delegateType || y3, G2.test(u3 + y3) || (c3 = c3.parentNode); c3; c3 = c3.parentNode) _3.push(c3), l3 = c3;
        l3 === (i3.ownerDocument || v2) && _3[o3(559)](l3.defaultView || l3.parentWindow || e2);
      }
      for (s3 = 0; (c3 = _3[s3++]) && !t3[o3(569)](); ) h3 = c3, t3.type = s3 > 1 ? u3 : m3.bindType || y3, p3 = (N2.get(c3, `events`) || /* @__PURE__ */ Object.create(null))[t3.type] && N2.get(c3, `handle`), p3 && p3.apply(c3, r3), p3 = f3 && c3[f3], p3 && p3.apply && At2(c3) && (t3.result = p3.apply(c3, r3), t3[o3(570)] === false && t3.preventDefault());
      return t3.type = y3, !a3 && !t3[o3(778)]() && (!m3._default || m3._default[o3(868)](_3.pop(), r3) === false) && At2(i3) && f3 && typeof i3[y3] == o3(478) && !g2(i3) && (l3 = i3[f3], l3 && (i3[f3] = null), C2.event.triggered = y3, t3.isPropagationStopped() && h3.addEventListener(y3, K2), i3[y3](), t3.isPropagationStopped() && h3.removeEventListener(y3, K2), C2.event.triggered = void 0, l3 && (i3[f3] = l3)), t3.result;
    }
  }, simulate: function(e3, t3, r3) {
    var i3 = n2, a3 = C2.extend(new C2[i3(451)](), r3, { type: e3, isSimulated: true });
    C2.event.trigger(a3, null, t3);
  } }), C2.fn.extend({ trigger: function(e3, t3) {
    var r3 = n2;
    return this[r3(904)](function() {
      var n3 = r3;
      C2.event[n3(403)](e3, t3, this);
    });
  }, triggerHandler: function(e3, t3) {
    var n3 = this[0];
    if (n3) return C2.event.trigger(e3, t3, n3, true);
  } });
  var q2 = e2.location, Un2 = { guid: Date.now() }, J2 = /\?/;
  C2.parseXML = function(t3) {
    var r3 = n2, i3, a3;
    if (!t3 || typeof t3 != `string`) return null;
    try {
      i3 = new e2.DOMParser().parseFromString(t3, `text/xml`);
    } catch {
    }
    return a3 = i3 && i3.getElementsByTagName(`parsererror`)[0], (!i3 || a3) && C2.error(`Invalid XML: ` + (a3 ? C2[r3(279)](a3.childNodes, function(e3) {
      return e3.textContent;
    }).join(`
`) : t3)), i3;
  };
  var Wn2 = /\[\]$/, Gn2 = /\r?\n/g, Kn2 = /^(?:submit|button|image|reset|file)$/i, qn2 = /^(?:input|select|textarea|keygen)/i;
  function Jn2(e3, t3, r3, i3) {
    var a3 = n2, o3;
    if (Array.isArray(t3)) C2[a3(904)](t3, function(t4, n3) {
      r3 || Wn2[a3(1021)](e3) ? i3(e3, n3) : Jn2(e3 + `[` + (typeof n3 == `object` && n3 ? t4 : ``) + `]`, n3, r3, i3);
    });
    else if (!r3 && h2(t3) === `object`) for (o3 in t3) Jn2(e3 + `[` + o3 + `]`, t3[o3], r3, i3);
    else i3(e3, t3);
  }
  C2.param = function(e3, t3) {
    var r3 = n2, i3, a3 = [], o3 = function(e4, t4) {
      var n3 = typeof t4 == `function` ? t4() : t4;
      a3[a3.length] = encodeURIComponent(e4) + `=` + encodeURIComponent(n3 ?? ``);
    };
    if (e3 == null) return ``;
    if (Array.isArray(e3) || e3[r3(875)] && !C2.isPlainObject(e3)) C2.each(e3, function() {
      var e4 = r3;
      o3(this.name, this[e4(461)]);
    });
    else for (i3 in e3) Jn2(i3, e3[i3], t3, o3);
    return a3[r3(1045)](`&`);
  }, C2.fn.extend({ serialize: function() {
    var e3 = n2;
    return C2.param(this[e3(879)]());
  }, serializeArray: function() {
    var e3 = n2;
    return this.map(function() {
      var e4 = Q, t3 = C2.prop(this, `elements`);
      return t3 ? C2[e4(1144)](t3) : this;
    }).filter(function() {
      var e4 = Q, t3 = this[e4(599)];
      return this.name && !C2(this).is(`:disabled`) && qn2.test(this[e4(1027)]) && !Kn2.test(t3) && (this.checked || !en2.test(t3));
    }).map(function(e4, t3) {
      var n3 = C2(this).val();
      return n3 == null ? null : Array.isArray(n3) ? C2.map(n3, function(e5) {
        return { name: t3.name, value: e5.replace(Gn2, `\r
`) };
      }) : { name: t3.name, value: n3.replace(Gn2, `\r
`) };
    })[e3(483)]();
  } });
  var Yn2 = /%20/g, Xn2 = /#.*$/, Zn2 = /([?&])_=[^&]*/, Y2 = /^(.*?):[ \t]*([^\r\n]*)$/gm, X2 = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Qn2 = /^(?:GET|HEAD)$/, $n2 = /^\/\//, Z2 = {}, er2 = {}, tr2 = n2(934), nr2 = v2.createElement(`a`);
  nr2.href = q2[n2(171)];
  function rr2(e3) {
    return function(t3, n3) {
      var r3 = Q;
      typeof t3 != `string` && (n3 = t3, t3 = `*`);
      var i3, a3 = 0, o3 = t3.toLowerCase()[r3(842)](be2) || [];
      if (typeof n3 == `function`) for (; i3 = o3[a3++]; ) i3[0] === `+` ? (i3 = i3.slice(1) || `*`, (e3[i3] = e3[i3] || []).unshift(n3)) : (e3[i3] = e3[i3] || []).push(n3);
    };
  }
  function ir2(e3, t3, n3, r3) {
    var i3 = {}, a3 = e3 === er2;
    function o3(s3) {
      var c3 = Q, l3;
      return i3[s3] = true, C2[c3(904)](e3[s3] || [], function(e4, s4) {
        var c4 = s4(t3, n3, r3);
        if (typeof c4 == `string` && !a3 && !i3[c4]) return t3.dataTypes.unshift(c4), o3(c4), false;
        if (a3) return !(l3 = c4);
      }), l3;
    }
    return o3(t3.dataTypes[0]) || !i3[`*`] && o3(`*`);
  }
  function ar2(e3, t3) {
    var n3, r3, i3 = C2.ajaxSettings.flatOptions || {};
    for (n3 in t3) t3[n3] !== void 0 && ((i3[n3] ? e3 : r3 || (r3 = {}))[n3] = t3[n3]);
    return r3 && C2.extend(true, e3, r3), e3;
  }
  function or2(e3, t3, r3) {
    for (var i3 = n2, a3, o3, s3, c3, l3 = e3.contents, u3 = e3.dataTypes; u3[0] === `*`; ) u3[i3(1190)](), a3 === void 0 && (a3 = e3.mimeType || t3.getResponseHeader(`Content-Type`));
    if (a3) {
      for (o3 in l3) if (l3[o3] && l3[o3].test(a3)) {
        u3.unshift(o3);
        break;
      }
    }
    if (u3[0] in r3) s3 = u3[0];
    else {
      for (o3 in r3) {
        if (!u3[0] || e3.converters[o3 + ` ` + u3[0]]) {
          s3 = o3;
          break;
        }
        c3 || (c3 = o3);
      }
      s3 || (s3 = c3);
    }
    if (s3) return s3 !== u3[0] && u3.unshift(s3), r3[s3];
  }
  function sr2(e3, t3, r3, i3) {
    var a3 = n2, o3, s3, c3, l3, u3, d3 = {}, f3 = e3.dataTypes.slice();
    if (f3[1]) for (c3 in e3[a3(228)]) d3[c3[a3(856)]()] = e3.converters[c3];
    for (s3 = f3[a3(1190)](); s3; ) if (e3.responseFields[s3] && (r3[e3.responseFields[s3]] = t3), !u3 && i3 && e3[a3(973)] && (t3 = e3.dataFilter(t3, e3.dataType)), u3 = s3, s3 = f3.shift(), s3) {
      if (s3 === `*`) s3 = u3;
      else if (u3 !== `*` && u3 !== s3) {
        if (c3 = d3[u3 + ` ` + s3] || d3[`* ` + s3], !c3) {
          for (o3 in d3) if (l3 = o3.split(` `), l3[1] === s3 && (c3 = d3[u3 + ` ` + l3[0]] || d3[`* ` + l3[0]], c3)) {
            c3 === true ? c3 = d3[o3] : d3[o3] !== true && (s3 = l3[0], f3.unshift(l3[1]));
            break;
          }
        }
        if (c3 !== true) if (c3 && e3.throws) t3 = c3(t3);
        else try {
          t3 = c3(t3);
        } catch (e4) {
          return { state: `parsererror`, error: c3 ? e4 : `No conversion from ` + u3 + a3(367) + s3 };
        }
      }
    }
    return { state: a3(1026), data: t3 };
  }
  C2.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: q2.href, type: n2(1150), isLocal: X2[n2(1021)](q2.protocol), global: true, processData: true, async: true, contentType: `application/x-www-form-urlencoded; charset=UTF-8`, accepts: { "*": tr2, text: `text/plain`, html: `text/html`, xml: n2(284), json: `application/json, text/javascript` }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: `responseXML`, text: `responseText`, json: `responseJSON` }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": C2.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e3, t3) {
    return t3 ? ar2(ar2(e3, C2[n2(1145)]), t3) : ar2(C2.ajaxSettings, e3);
  }, ajaxPrefilter: rr2(Z2), ajaxTransport: rr2(er2), ajax: function(t3, r3) {
    var i3 = n2;
    typeof t3 == `object` && (r3 = t3, t3 = void 0), r3 || (r3 = {});
    var a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3 = C2.ajaxSetup({}, r3), g3 = h3.context || h3, _3 = h3[i3(1095)] && (g3.nodeType || g3.jquery) ? C2(g3) : C2[i3(663)], y3 = C2.Deferred(), b3 = C2.Callbacks(i3(710)), x3 = h3.statusCode || {}, S3 = {}, w3 = {}, T3 = `canceled`, E3 = { readyState: 0, getResponseHeader: function(e3) {
      var t4 = i3, n3;
      if (d3) {
        if (!c3) for (c3 = {}; n3 = Y2.exec(s3); ) c3[n3[1].toLowerCase() + ` `] = (c3[n3[1][t4(856)]() + ` `] || [])[t4(640)](n3[2]);
        n3 = c3[e3.toLowerCase() + ` `];
      }
      return n3 == null ? null : n3.join(`, `);
    }, getAllResponseHeaders: function() {
      return d3 ? s3 : null;
    }, setRequestHeader: function(e3, t4) {
      return d3 ?? (e3 = w3[e3.toLowerCase()] = w3[e3.toLowerCase()] || e3, S3[e3] = t4), this;
    }, overrideMimeType: function(e3) {
      return d3 ?? (h3.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t4;
      if (e3) if (d3) E3.always(e3[E3.status]);
      else for (t4 in e3) x3[t4] = [x3[t4], e3[t4]];
      return this;
    }, abort: function(e3) {
      var t4 = e3 || T3;
      return a3 && a3.abort(t4), D3(0, t4), this;
    } };
    if (y3[i3(851)](E3), h3[i3(1157)] = ((t3 || h3.url || q2.href) + ``).replace($n2, q2[i3(1175)] + `//`), h3.type = r3.method || r3[i3(599)] || h3.method || h3.type, h3.dataTypes = (h3.dataType || `*`).toLowerCase().match(be2) || [``], h3.crossDomain == null) {
      u3 = v2.createElement(`a`);
      try {
        u3.href = h3.url, u3.href = u3.href, h3.crossDomain = nr2.protocol + `//` + nr2.host != u3.protocol + `//` + u3.host;
      } catch {
        h3.crossDomain = true;
      }
    }
    if (ir2(Z2, h3, r3, E3), h3.data && h3[i3(283)] && typeof h3.data != `string` && (h3.data = C2.param(h3.data, h3.traditional)), d3) return E3;
    for (p3 in f3 = C2[i3(663)] && h3.global, f3 && C2.active++ === 0 && C2.event.trigger(`ajaxStart`), h3.type = h3.type.toUpperCase(), h3.hasContent = !Qn2[i3(1021)](h3.type), o3 = h3.url.replace(Xn2, ``), h3[i3(1215)] ? h3.data && h3.processData && (h3[i3(256)] || ``).indexOf(`application/x-www-form-urlencoded`) === 0 && (h3.data = h3.data.replace(Yn2, `+`)) : (m3 = h3[i3(1157)].slice(o3.length), h3.data && (h3.processData || typeof h3.data == `string`) && (o3 += (J2.test(o3) ? `&` : `?`) + h3.data, delete h3.data), h3[i3(808)] === false && (o3 = o3.replace(Zn2, `$1`), m3 = (J2[i3(1021)](o3) ? `&` : `?`) + `_=` + Un2.guid++ + m3), h3.url = o3 + m3), h3[i3(867)] && (C2.lastModified[o3] && E3.setRequestHeader(`If-Modified-Since`, C2.lastModified[o3]), C2.etag[o3] && E3[i3(432)](`If-None-Match`, C2.etag[o3])), (h3.data && h3.hasContent && h3.contentType !== false || r3[i3(256)]) && E3.setRequestHeader(`Content-Type`, h3[i3(256)]), E3.setRequestHeader(`Accept`, h3[i3(968)][0] && h3.accepts[h3.dataTypes[0]] ? h3.accepts[h3.dataTypes[0]] + (h3.dataTypes[0] === `*` ? `` : `, ` + tr2 + `; q=0.01`) : h3.accepts[`*`]), h3.headers) E3.setRequestHeader(p3, h3[i3(336)][p3]);
    if (h3.beforeSend && (h3.beforeSend.call(g3, E3, h3) === false || d3)) return E3.abort();
    if (T3 = `abort`, b3.add(h3.complete), E3[i3(753)](h3.success), E3.fail(h3.error), a3 = ir2(er2, h3, r3, E3), !a3) D3(-1, i3(1065));
    else {
      if (E3.readyState = 1, f3 && _3.trigger(i3(462), [E3, h3]), d3) return E3;
      h3.async && h3.timeout > 0 && (l3 = e2.setTimeout(function() {
        var e3 = i3;
        E3.abort(e3(452));
      }, h3.timeout));
      try {
        d3 = false, a3[i3(560)](S3, D3);
      } catch (e3) {
        if (d3) throw e3;
        D3(-1, e3);
      }
    }
    function D3(t4, n3, r4, c4) {
      var u4 = i3, p4, m4, v3, S4, w4, T4 = n3;
      d3 || (d3 = true, l3 && e2.clearTimeout(l3), a3 = void 0, s3 = c4 || ``, E3.readyState = t4 > 0 ? 4 : 0, p4 = t4 >= 200 && t4 < 300 || t4 === 304, r4 && (S4 = or2(h3, E3, r4)), !p4 && C2.inArray(`script`, h3.dataTypes) > -1 && C2.inArray(`json`, h3.dataTypes) < 0 && (h3.converters[u4(578)] = function() {
      }), S4 = sr2(h3, S4, E3, p4), p4 ? (h3.ifModified && (w4 = E3.getResponseHeader(`Last-Modified`), w4 && (C2.lastModified[o3] = w4), w4 = E3[u4(355)](u4(508)), w4 && (C2[u4(508)][o3] = w4)), t4 === 204 || h3.type === `HEAD` ? T4 = u4(1059) : t4 === 304 ? T4 = `notmodified` : (T4 = S4.state, m4 = S4.data, v3 = S4.error, p4 = !v3)) : (v3 = T4, (t4 || !T4) && (T4 = `error`, t4 < 0 && (t4 = 0))), E3.status = t4, E3.statusText = (n3 || T4) + ``, p4 ? y3[u4(730)](g3, [m4, T4, E3]) : y3[u4(974)](g3, [E3, T4, v3]), E3.statusCode(x3), x3 = void 0, f3 && _3.trigger(p4 ? `ajaxSuccess` : `ajaxError`, [E3, h3, p4 ? m4 : v3]), b3.fireWith(g3, [E3, T4]), f3 && (_3.trigger(`ajaxComplete`, [E3, h3]), --C2.active || C2[u4(663)].trigger(`ajaxStop`)));
    }
    return E3;
  }, getJSON: function(e3, t3, n3) {
    return C2.get(e3, t3, n3, `json`);
  }, getScript: function(e3, t3) {
    return C2.get(e3, void 0, t3, `script`);
  } }), C2.each([`get`, n2(932)], function(e3, t3) {
    C2[t3] = function(e4, n3, r3, i3) {
      var a3 = Q;
      return (typeof n3 == `function` || n3 === null) && (i3 || (i3 = r3), r3 = n3, n3 = void 0), C2.ajax(C2[a3(294)]({ url: e4, type: t3, dataType: i3, data: n3, success: r3 }, C2.isPlainObject(e4) && e4));
    };
  }), C2.ajaxPrefilter(function(e3) {
    var t3 = n2;
    for (var r3 in e3.headers) r3.toLowerCase() === t3(1219) && (e3.contentType = e3.headers[r3] || ``);
  }), C2._evalUrl = function(e3, t3, r3) {
    var i3 = n2;
    return C2.ajax({ url: e3, type: `GET`, dataType: i3(566), cache: true, async: false, global: false, scriptAttrs: t3[i3(864)] ? { crossOrigin: t3.crossOrigin } : void 0, converters: { "text script": function() {
    } }, dataFilter: function(e4) {
      C2.globalEval(e4, t3, r3);
    } });
  }, C2.fn[n2(294)]({ wrapAll: function(e3) {
    var t3;
    return this[0] && (typeof e3 == `function` && (e3 = e3.call(this[0])), t3 = C2(e3, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t3.insertBefore(this[0]), t3.map(function() {
      for (var e4 = this; e4.firstElementChild; ) e4 = e4.firstElementChild;
      return e4;
    }).append(this)), this;
  }, wrapInner: function(e3) {
    return typeof e3 == `function` ? this.each(function(t3) {
      C2(this).wrapInner(e3.call(this, t3));
    }) : this.each(function() {
      var t3 = C2(this), n3 = t3.contents();
      n3.length ? n3.wrapAll(e3) : t3.append(e3);
    });
  }, wrap: function(e3) {
    var t3 = typeof e3 == n2(478);
    return this.each(function(n3) {
      C2(this).wrapAll(t3 ? e3.call(this, n3) : e3);
    });
  }, unwrap: function(e3) {
    var t3 = n2;
    return this.parent(e3)[t3(609)](`body`)[t3(904)](function() {
      var e4 = t3;
      C2(this)[e4(548)](this.childNodes);
    }), this;
  } }), C2.expr[n2(1176)].hidden = function(e3) {
    var t3 = n2;
    return !C2[t3(979)][t3(1176)].visible(e3);
  }, C2.expr.pseudos.visible = function(e3) {
    return !!(e3.offsetWidth || e3.offsetHeight || e3.getClientRects().length);
  }, C2[n2(1145)][n2(202)] = function() {
    return new e2[n2(1079)]();
  };
  var cr2 = { 0: 200 };
  C2.ajaxTransport(function(e3) {
    var t3;
    return { send: function(n3, r3) {
      var i3 = Q, a3, o3 = e3.xhr();
      if (o3.open(e3.type, e3.url, e3.async, e3.username, e3.password), e3[i3(1167)]) for (a3 in e3[i3(1167)]) o3[a3] = e3.xhrFields[a3];
      for (a3 in e3.mimeType && o3[i3(869)] && o3[i3(869)](e3.mimeType), !e3.crossDomain && !n3[i3(1072)] && (n3[i3(1072)] = `XMLHttpRequest`), n3) o3.setRequestHeader(a3, n3[a3]);
      t3 = function(e4) {
        return function() {
          var n4 = Q;
          t3 && (t3 = o3.onload = o3.onerror = o3.onabort = o3.ontimeout = null, e4 === `abort` ? o3.abort() : e4 === `error` ? r3(o3.status, o3[n4(384)]) : r3(cr2[o3.status] || o3[n4(1256)], o3.statusText, (o3[n4(634)] || n4(601)) === `text` ? { text: o3.responseText } : { binary: o3.response }, o3.getAllResponseHeaders()));
        };
      }, o3[i3(271)] = t3(), o3.onabort = o3.onerror = o3.ontimeout = t3(`error`), t3 = t3(`abort`);
      try {
        o3.send(e3.hasContent && e3.data || null);
      } catch (e4) {
        if (t3) throw e4;
      }
    }, abort: function() {
      t3 && t3();
    } };
  });
  function lr2(e3) {
    var t3 = n2;
    return e3.scriptAttrs || !e3.headers && (e3[t3(385)] || e3[t3(175)] && C2.inArray(`json`, e3.dataTypes) < 0);
  }
  C2.ajaxSetup({ accepts: { script: `text/javascript, application/javascript, application/ecmascript, application/x-ecmascript` }, converters: { "text script": function(e3) {
    return C2.globalEval(e3), e3;
  } } }), C2.ajaxPrefilter(`script`, function(e3) {
    var t3 = n2;
    e3.cache === void 0 && (e3.cache = false), lr2(e3) && (e3.type = t3(1150));
  }), C2.ajaxTransport(n2(566), function(e3) {
    if (lr2(e3)) {
      var t3, n3;
      return { send: function(r3, i3) {
        t3 = C2(Q(212)).attr(e3.scriptAttrs || {}).prop({ charset: e3.scriptCharset, src: e3.url }).on(`load error`, n3 = function(e4) {
          t3.remove(), n3 = null, e4 && i3(e4.type === `error` ? 404 : 200, e4.type);
        }), v2.head.appendChild(t3[0]);
      }, abort: function() {
        n3 && n3();
      } };
    }
  });
  var ur2 = [], dr2 = /(=)\?(?=&|$)|\?\?/;
  C2.ajaxSetup({ jsonp: `callback`, jsonpCallback: function() {
    var e3 = n2, t3 = ur2.pop() || C2.expando + `_` + Un2[e3(670)]++;
    return this[t3] = true, t3;
  } }), C2[n2(1216)](n2(962), function(t3, r3, i3) {
    var a3 = n2, o3, s3, c3, l3 = t3.jsonp !== false && (dr2[a3(1021)](t3.url) ? `url` : typeof t3.data == `string` && (t3.contentType || ``).indexOf(a3(1006)) === 0 && dr2.test(t3[a3(444)]) && a3(444));
    return o3 = t3[a3(784)] = typeof t3.jsonpCallback == `function` ? t3.jsonpCallback() : t3[a3(784)], l3 ? t3[l3] = t3[l3][a3(1077)](dr2, `$1` + o3) : t3.jsonp !== false && (t3[a3(1157)] += (J2.test(t3.url) ? `&` : `?`) + t3.jsonp + `=` + o3), t3.converters[`script json`] = function() {
      var e3 = a3;
      return c3 || C2.error(o3 + e3(1127)), c3[0];
    }, t3.dataTypes[0] = `json`, s3 = e2[o3], e2[o3] = function() {
      c3 = arguments;
    }, i3.always(function() {
      s3 === void 0 ? C2(e2).removeProp(o3) : e2[o3] = s3, t3[o3] && (t3.jsonpCallback = r3.jsonpCallback, ur2.push(o3)), c3 && typeof s3 == `function` && s3(c3[0]), c3 = s3 = void 0;
    }), `script`;
  }), C2.ajaxPrefilter(function(t3, n3) {
    typeof t3.data != `string` && !C2.isPlainObject(t3.data) && !Array.isArray(t3.data) && !(`processData` in n3) && (t3.processData = false), t3.data instanceof e2.FormData && (t3.contentType = false);
  }), C2.parseHTML = function(t3, r3, i3) {
    var a3 = n2;
    if (typeof t3 != `string` && !ft2(t3 + ``)) return [];
    typeof r3 == `boolean` && (i3 = r3, r3 = false);
    var o3, s3;
    return r3 || (r3 = new e2.DOMParser()[a3(539)](``, a3(741))), o3 = dt2.exec(t3), s3 = !i3 && [], o3 ? [r3.createElement(o3[1])] : (o3 = B2([t3], r3, s3), s3 && s3.length && C2(s3).remove(), C2.merge([], o3.childNodes));
  }, C2.fn.load = function(e3, t3, r3) {
    var i3 = n2, a3, o3, s3, c3 = this, l3 = e3.indexOf(` `);
    return l3 > -1 && (a3 = Vn2(e3.slice(l3)), e3 = e3.slice(0, l3)), typeof t3 == `function` ? (r3 = t3, t3 = void 0) : t3 && typeof t3 == `object` && (o3 = `POST`), c3.length > 0 && C2.ajax({ url: e3, type: o3 || `GET`, dataType: `html`, data: t3 }).done(function(e4) {
      s3 = arguments, c3.html(a3 ? C2(`<div>`).append(C2.parseHTML(e4)).find(a3) : e4);
    })[i3(681)](r3 && function(e4, t4) {
      c3.each(function() {
        r3[Q(868)](this, s3 || [e4.responseText, t4, e4]);
      });
    }), this;
  }, C2.expr.pseudos[n2(1062)] = function(e3) {
    return C2.grep(C2.timers, function(t3) {
      return e3 === t3.elem;
    }).length;
  }, C2.offset = { setOffset: function(e3, t3, r3) {
    var i3 = n2, a3, o3, s3, c3, l3, u3, d3, f3 = C2[i3(870)](e3, i3(563)), p3 = C2(e3), m3 = {};
    f3 === `static` && (e3[i3(521)].position = i3(477)), l3 = p3[i3(728)](), s3 = C2.css(e3, `top`), u3 = C2.css(e3, `left`), d3 = (f3 === `absolute` || f3 === `fixed`) && (s3 + u3).indexOf(`auto`) > -1, d3 ? (a3 = p3.position(), c3 = a3.top, o3 = a3.left) : (c3 = parseFloat(s3) || 0, o3 = parseFloat(u3) || 0), typeof t3 == `function` && (t3 = t3.call(e3, r3, C2.extend({}, l3))), t3.top != null && (m3[i3(299)] = t3.top - l3.top + c3), t3.left != null && (m3.left = t3[i3(300)] - l3.left + o3), `using` in t3 ? t3[i3(378)].call(e3, m3) : p3.css(m3);
  } }, C2.fn.extend({ offset: function(e3) {
    var t3 = n2;
    if (arguments.length) return e3 === void 0 ? this : this.each(function(t4) {
      C2.offset.setOffset(this, e3, t4);
    });
    var r3, i3, a3 = this[0];
    if (a3) return a3.getClientRects().length ? (r3 = a3[t3(732)](), i3 = a3.ownerDocument.defaultView, { top: r3[t3(299)] + i3.pageYOffset, left: r3.left + i3.pageXOffset }) : { top: 0, left: 0 };
  }, position: function() {
    var e3 = n2;
    if (this[0]) {
      var t3, r3, i3, a3 = this[0], o3 = { top: 0, left: 0 };
      if (C2.css(a3, `position`) === `fixed`) r3 = a3[e3(732)]();
      else {
        for (r3 = this.offset(), i3 = a3.ownerDocument, t3 = a3[e3(549)] || i3.documentElement; t3 && t3 !== i3.documentElement && C2.css(t3, `position`) === e3(274); ) t3 = t3.offsetParent || i3.documentElement;
        t3 && t3 !== a3 && t3.nodeType === 1 && C2.css(t3, `position`) !== `static` && (o3 = C2(t3).offset(), o3.top += C2.css(t3, `borderTopWidth`, true), o3[e3(300)] += C2.css(t3, `borderLeftWidth`, true));
      }
      return { top: r3.top - o3.top - C2.css(a3, `marginTop`, true), left: r3.left - o3.left - C2.css(a3, `marginLeft`, true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      for (var e3 = this.offsetParent; e3 && C2.css(e3, `position`) === `static`; ) e3 = e3.offsetParent;
      return e3 || j2;
    });
  } }), C2[n2(904)]({ scrollLeft: `pageXOffset`, scrollTop: n2(719) }, function(e3, t3) {
    var n3 = t3 === `pageYOffset`;
    C2.fn[e3] = function(r3) {
      return ye2(this, function(e4, r4, i3) {
        var a3 = Q, o3;
        if (g2(e4) ? o3 = e4 : e4[a3(639)] === 9 && (o3 = e4.defaultView), i3 === void 0) return o3 ? o3[t3] : e4[r4];
        o3 ? o3.scrollTo(n3 ? o3.pageXOffset : i3, n3 ? i3 : o3.pageYOffset) : e4[r4] = i3;
      }, e3, r3, arguments.length);
    };
  }), C2.each({ Height: `height`, Width: `width` }, function(e3, t3) {
    var r3 = n2;
    C2.each({ padding: r3(443) + e3, content: t3, "": `outer` + e3 }, function(n3, r4) {
      C2.fn[r4] = function(i3, a3) {
        var o3 = Q, s3 = arguments.length && (n3 || typeof i3 != o3(420)), c3 = n3 || (i3 === true || a3 === true ? `margin` : `border`);
        return ye2(this, function(t4, n4, i4) {
          var a4 = o3, s4;
          return g2(t4) ? r4.indexOf(`outer`) === 0 ? t4[`inner` + e3] : t4.document.documentElement[`client` + e3] : t4.nodeType === 9 ? (s4 = t4.documentElement, Math.max(t4.body[a4(1200) + e3], s4[a4(1200) + e3], t4.body[a4(728) + e3], s4[a4(728) + e3], s4[a4(953) + e3])) : i4 === void 0 ? C2.css(t4, n4, c3) : C2.style(t4, n4, i4, c3);
        }, t3, s3 ? i3 : void 0, s3);
      };
    });
  }), C2.each([`ajaxStart`, `ajaxStop`, `ajaxComplete`, `ajaxError`, `ajaxSuccess`, n2(462)], function(e3, t3) {
    C2.fn[t3] = function(e4) {
      return this.on(t3, e4);
    };
  }), C2.fn.extend({ bind: function(e3, t3, n3) {
    return this.on(e3, null, t3, n3);
  }, unbind: function(e3, t3) {
    return this.off(e3, null, t3);
  }, delegate: function(e3, t3, n3, r3) {
    return this.on(t3, e3, n3, r3);
  }, undelegate: function(e3, t3, n3) {
    return arguments.length === 1 ? this.off(e3, `**`) : this.off(t3, e3 || `**`, n3);
  }, hover: function(e3, t3) {
    var r3 = n2;
    return this.on(r3(918), e3).on(`mouseleave`, t3 || e3);
  } }), C2[n2(904)](`blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu`.split(` `), function(e3, t3) {
    C2.fn[t3] = function(e4, n3) {
      return arguments.length > 0 ? this.on(t3, null, e4, n3) : this.trigger(t3);
    };
  }), C2.proxy = function(e3, t3) {
    var r3 = n2, i3, o3, s3;
    if (typeof t3 == `string` && (i3 = e3[t3], t3 = e3, e3 = i3), typeof e3 == r3(478)) return o3 = a2.call(arguments, 2), s3 = function() {
      var n3 = r3;
      return e3.apply(t3 || this, o3.concat(a2[n3(872)](arguments)));
    }, s3.guid = e3.guid = e3.guid || C2.guid++, s3;
  }, C2.holdReady = function(e3) {
    e3 ? C2.readyWait++ : C2.ready(true);
  }, C2.expr[`:`] = C2.expr.filters = C2[n2(979)][n2(1176)], typeof define == `function` && define.amd && define(`jquery`, [], function() {
    return C2;
  });
  var fr2 = e2.jQuery, pr2 = e2.$;
  return C2.noConflict = function(t3) {
    var r3 = n2;
    return e2.$ === C2 && (e2.$ = pr2), t3 && e2[r3(257)] === C2 && (e2.jQuery = fr2), C2;
  }, t2 === void 0 && (e2.jQuery = e2.$ = C2), C2;
}
var Bt = zt(window, true), Vt = () => ({ slidesScale: ``, slideMode: false, slideType: `divs2slidesjs`, revealjsPath: ``, keyBoardShortCut: false, mediaProcess: true, jsZipV2: false, themeProcess: true, incSlide: { width: 0, height: 0 }, slideModeConfig: { first: 1, nav: true, navTxtColor: `black`, keyBoardShortCut: true, showSlideNum: true, showTotalSlideNum: true, autoSlide: true, randomAutoSlide: false, loop: false, background: false, transition: `default`, transitionTime: 1 }, revealjsConfig: {} }), P = function() {
  return P = Object.assign || function(e2) {
    for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var i2 in t2 = arguments[n2], t2) Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
    return e2;
  }, P.apply(this, arguments);
};
function F(e2, t2, n2) {
  if (n2 || arguments.length === 2) for (var r2 = 0, i2 = t2.length, a2; r2 < i2; r2++) (a2 || !(r2 in t2)) && (a2 || (a2 = Array.prototype.slice.call(t2, 0, r2)), a2[r2] = t2[r2]);
  return e2.concat(a2 || Array.prototype.slice.call(t2));
}
var I = { button: `bb-button`, chart: `bb-chart`, empty: `bb-empty`, main: `bb-main`, target: `bb-target`, EXPANDED: `_expanded_`, dummy: `_dummy_` }, L = { arc: `bb-arc`, arcLabelLine: `bb-arc-label-line`, arcLabelLineText: M(818), arcRange: `bb-arc-range`, arcs: M(695), chartArc: `bb-chart-arc`, chartArcs: `bb-chart-arcs`, chartArcsBackground: M(1044), chartArcsTitle: `bb-chart-arcs-title`, needle: `bb-needle` }, Ht = { area: `bb-area`, areas: `bb-areas` }, Ut = { axis: `bb-axis`, axisX: `bb-axis-x`, axisXLabel: `bb-axis-x-label`, axisY: `bb-axis-y`, axisY2: `bb-axis-y2`, axisY2Label: `bb-axis-y2-label`, axisYLabel: `bb-axis-y-label`, axisXTooltip: `bb-axis-x-tooltip`, axisYTooltip: M(829), axisY2Tooltip: `bb-axis-y2-tooltip`, axisTooltipX: `bb-axis-tooltip-x`, axisTooltipY: `bb-axis-tooltip-y` }, Wt = { bar: `bb-bar`, bars: `bb-bars`, chartBar: `bb-chart-bar`, chartBars: `bb-chart-bars`, barConnectLine: `bb-bar-connectLine` }, Gt = { candlestick: `bb-candlestick`, candlesticks: `bb-candlesticks`, chartCandlestick: M(344), chartCandlesticks: `bb-chart-candlesticks`, valueDown: `bb-value-down`, valueUp: `bb-value-up` }, Kt = { chartCircles: M(416), circle: `bb-circle`, circles: M(554) }, qt = { colorPattern: `bb-color-pattern`, colorScale: `bb-colorscale` }, Jt = { dragarea: `bb-dragarea`, INCLUDED: `_included_` }, Yt = { funnel: M(285), chartFunnel: `bb-chart-funnel`, chartFunnels: `bb-chart-funnels`, funnelBackground: `bb-funnel-background` }, R = { chartArcsGaugeMax: `bb-chart-arcs-gauge-max`, chartArcsGaugeMin: `bb-chart-arcs-gauge-min`, chartArcsGaugeUnit: `bb-chart-arcs-gauge-unit`, chartArcsGaugeTitle: M(575), gaugeValue: `bb-gauge-value` }, z = { legend: `bb-legend`, legendBackground: `bb-legend-background`, legendItem: `bb-legend-item`, legendItemEvent: `bb-legend-item-event`, legendItemHidden: M(692), legendItemPoint: `bb-legend-item-point`, legendItemTile: `bb-legend-item-tile` }, Xt = { chartLine: M(404), chartLines: M(1094), line: `bb-line`, lines: `bb-lines` }, Zt = { eventRect: `bb-event-rect`, eventRects: M(514), eventRectsMultiple: `bb-event-rects-multiple`, eventRectsSingle: `bb-event-rects-single` }, B = { focused: `bb-focused`, defocused: `bb-defocused`, legendItemFocused: M(494), xgridFocus: `bb-xgrid-focus`, ygridFocus: `bb-ygrid-focus` }, V = { grid: M(805), gridLines: `bb-grid-lines`, xgrid: `bb-xgrid`, xgridLine: `bb-xgrid-line`, xgridLines: M(749), xgrids: `bb-xgrids`, ygrid: `bb-ygrid`, ygridLine: `bb-ygrid-line`, ygridLines: `bb-ygrid-lines`, ygrids: M(989) }, Qt = { chartRadar: `bb-chart-radar`, chartRadars: `bb-chart-radars` }, $t = { region: `bb-region`, regions: `bb-regions` }, en = { selectedCircle: M(894), selectedCircles: M(1054), SELECTED: `_selected_` }, tn = { shape: M(767), shapes: M(577) }, nn = { brush: `bb-brush`, subchart: `bb-subchart` }, H = { chartText: `bb-chart-text`, chartTexts: `bb-chart-texts`, text: `bb-text`, texts: `bb-texts`, title: `bb-title`, textBorderRect: `bb-text-border`, textLabelImage: `bb-text-label-image`, TextOverlapping: `text-overlapping` }, rn = { tooltip: M(1245), tooltipContainer: `bb-tooltip-container`, tooltipName: `bb-tooltip-name` }, an = P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P(P({}, I), L), Ht), Ut), Wt), Gt), Kt), qt), Jt), R), z), Xt), Zt), B), Yt), V), Qt), $t), en), tn), nn), H), rn), { treemap: `bb-treemap`, chartTreemap: `bb-chart-treemap`, chartTreemaps: `bb-chart-treemaps` }), { buttonZoomReset: `bb-zoom-reset`, zoomBrush: M(226) }), on = { boost_useCssRule: false, boost_useWorker: false }, sn = { color_pattern: [], color_tiles: void 0, color_threshold: {}, color_onover: void 0 }, cn = { legend_contents_bindto: void 0, legend_contents_template: `<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>`, legend_equally: false, legend_hide: false, legend_inset_anchor: `top-left`, legend_inset_x: 10, legend_inset_y: 0, legend_inset_step: void 0, legend_item_interaction: true, legend_item_dblclick: false, legend_item_onclick: void 0, legend_item_onover: void 0, legend_item_onout: void 0, legend_item_tile_width: 10, legend_item_tile_height: 10, legend_item_tile_r: 5, legend_item_tile_type: `rectangle`, legend_format: void 0, legend_padding: 0, legend_position: M(717), legend_show: true, legend_tooltip: false, legend_usePoint: false }, ln = { bindto: `#chart`, background: {}, clipPath: true, svg_classname: void 0, size_width: void 0, size_height: void 0, padding: true, padding_mode: void 0, padding_left: void 0, padding_right: void 0, padding_top: void 0, padding_bottom: void 0, resize_auto: true, resize_timer: true, onclick: void 0, onover: void 0, onout: void 0, onresize: void 0, onresized: void 0, onbeforeinit: void 0, oninit: void 0, onafterinit: void 0, onrendered: void 0, transition_duration: 250, plugins: [], render: {}, regions: [] }, un = { title_text: void 0, title_padding: { top: 0, right: 0, bottom: 0, left: 0 }, title_position: M(859) }, dn = { tooltip_show: true, tooltip_doNotHide: false, tooltip_grouped: true, tooltip_format_title: void 0, tooltip_format_name: void 0, tooltip_format_value: void 0, tooltip_position: void 0, tooltip_contents: {}, tooltip_init_show: false, tooltip_init_x: 0, tooltip_init_position: void 0, tooltip_linked: false, tooltip_linked_name: ``, tooltip_onshow: function() {
}, tooltip_onhide: function() {
}, tooltip_onshown: function() {
}, tooltip_onhidden: function() {
}, tooltip_order: null }, fn = { data_x: void 0, data_idConverter: function(e2) {
  return e2;
}, data_names: {}, data_classes: {}, data_type: void 0, data_types: {}, data_order: `desc`, data_groups: [], data_groupsZeroAs: `positive`, data_color: void 0, data_colors: {}, data_labels: {}, data_labels_backgroundColors: void 0, data_labels_colors: void 0, data_labels_position: {}, data_labels_imgUrl: void 0, data_hide: false, data_filter: void 0, data_onclick: function() {
}, data_onover: function() {
}, data_onout: function() {
}, data_onshown: void 0, data_onhidden: void 0, data_onmin: void 0, data_onmax: void 0, data_url: void 0, data_headers: void 0, data_json: void 0, data_rows: void 0, data_columns: void 0, data_mimeType: `csv`, data_keys: void 0, data_empty_label_text: `` }, pn = { interaction_enabled: true, interaction_brighten: true, interaction_inputType_mouse: true, interaction_inputType_touch: {}, interaction_onout: true };
function mn() {
  var e2 = M;
  return typeof globalThis == `object` && globalThis !== null && globalThis.Object === Object && globalThis || typeof global == `object` && global !== null && global.Object === Object && global || typeof self == `object` && self !== null && self.Object === Object && self || Function(e2(196))();
}
function hn(e2) {
  var t2 = M, n2 = typeof (e2 == null ? void 0 : e2[t2(1171)]) == `function` && typeof (e2 == null ? void 0 : e2.cancelAnimationFrame) == `function`, r2 = typeof (e2 == null ? void 0 : e2[t2(782)]) == t2(478) && typeof (e2 == null ? void 0 : e2.cancelIdleCallback) == t2(478), i2 = function(e3) {
    return setTimeout(e3, 1);
  }, a2 = function(e3) {
    return clearTimeout(e3);
  };
  return [n2 ? e2.requestAnimationFrame : i2, n2 ? e2.cancelAnimationFrame : a2, r2 ? e2.requestIdleCallback : i2, r2 ? e2.cancelIdleCallback : a2];
}
var U = mn(), gn = U == null ? void 0 : U[M(258)], _n = hn(U), vn = _n[0], yn = _n[2], bn = new Set(`span.div.p.br.b.i.em.strong.u.s.sub.sup.ul.ol.li.dl.dt.dd.table.thead.tbody.tfoot.tr.th.td.caption.colgroup.col.hr.pre.code.blockquote.a.img.svg.g.path.circle.ellipse.rect.line.polyline.polygon.text.tspan.textPath.use.defs.symbol.clipPath.mask.linearGradient.radialGradient.stop.pattern.marker.title.desc`.split(`.`)), xn = new Set(`class.id.style.title.lang.dir.href.src.alt.width.height.colspan.rowspan.scope.headers.d.points.x.y.x1.x2.y1.y2.cx.cy.r.rx.ry.dx.dy.viewBox.preserveAspectRatio.transform.fill.fill-opacity.fill-rule.stroke.stroke-width.stroke-opacity.stroke-linecap.stroke-linejoin.stroke-dasharray.stroke-dashoffset.opacity.clip-path.clip-rule.mask.font-family.font-size.font-weight.font-style.text-anchor.dominant-baseline.offset.stop-color.stop-opacity.gradientUnits.gradientTransform.spreadMethod.patternUnits.patternTransform.marker-start.marker-mid.marker-end.markerWidth.markerHeight.refX.refY.xlink:href`[M(887)](`.`)), Sn = /* @__PURE__ */ new Set([`http:`, M(1049), `mailto:`]), Cn = /* @__PURE__ */ new Set([`href`, `src`, M(480)]), wn = /^<\/?([a-zA-Z][a-zA-Z0-9]*)/, Tn = /^<\/([a-zA-Z][a-zA-Z0-9]*)\s*>$/, En = /^<([a-zA-Z][a-zA-Z0-9]*)([\s\S]*?)(\/?)>$/, Dn = /([a-zA-Z][\w:-]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g, On = /url\s*\(\s*["']?([^"')]+)["']?\s*\)/gi, kn = [`expression(`, M(956), `binding:`, `@import`, `@charset`, `-moz-binding:`];
function An(e2) {
  var t2 = M;
  return e2[t2(1077)](/&colon;/gi, `:`).replace(/&newline;/gi, `
`)[t2(1077)](/&tab;/gi, `	`).replace(/&nbsp;/gi, ` `).replace(/&lt;/gi, `<`).replace(/&gt;/gi, `>`).replace(/&amp;/gi, `&`).replace(/&quot;/gi, `"`).replace(/&apos;/gi, `'`).replace(/&#(\d+);/gi, function(e3, t3) {
    return String.fromCharCode(parseInt(t3, 10));
  })[t2(1077)](/&#x([0-9a-f]+);/gi, function(e3, t3) {
    return String.fromCharCode(parseInt(t3, 16));
  });
}
function jn(e2) {
  var t2 = M, n2 = An(e2).trim().replace(/[\s\u0000-\u001f]/g, ``)[t2(856)]();
  if (!n2 || n2.startsWith(`#`) || n2.startsWith(`/`) || n2.startsWith(`./`) || n2[t2(176)](t2(931)) || !n2[t2(323)](`:`)) return true;
  var r2 = n2.indexOf(`:`);
  if (r2 > 0) {
    var i2 = n2[t2(964)](0, r2 + 1);
    return Sn[t2(1132)](i2);
  }
  return false;
}
function Mn(e2) {
  var t2 = An(e2).replace(/[\u0000-\u001f]/g, ``);
  On.lastIndex = 0;
  for (var n2; (n2 = On.exec(t2)) !== null; ) if (!jn(n2[1])) return null;
  for (var r2 = t2.toLowerCase().replace(/\s/g, ``), i2 = 0, a2 = kn; i2 < a2.length; i2++) {
    var o2 = a2[i2];
    if (r2.includes(o2)) return null;
  }
  return e2;
}
var Nn = { '"': `&quot;`, "'": M(235), "`": M(631) }, Pn = /["'`]/g;
function Fn(e2) {
  return e2.replace(Pn, function(e3) {
    return Nn[e3];
  });
}
function In(e2, t2, n2) {
  var r2 = M;
  if (n2 === void 0 && (n2 = false), Cn[r2(1132)](e2)) return jn(t2) ? n2 ? Fn(t2) : t2 : null;
  if (e2 === r2(521)) {
    var i2 = Mn(t2);
    return i2 === null ? null : n2 ? Fn(i2) : i2;
  }
  var a2 = An(t2).toLowerCase().replace(/\s/g, ``);
  return /\bon\w+=/.test(a2) ? null : n2 ? Fn(t2) : t2;
}
function Ln(e2) {
  var t2 = e2.match(wn);
  return t2 ? t2[1].toLowerCase() : null;
}
function Rn(e2) {
  var t2 = M, n2 = Ln(e2);
  return n2 !== null && bn[t2(1132)](n2);
}
function zn(e2) {
  var t2 = M, n2 = e2.match(Tn);
  if (n2) return `</` + n2[1].toLowerCase() + `>`;
  var r2 = e2.match(En);
  if (!r2) return ``;
  var i2 = r2[1], a2 = r2[2], o2 = r2[3], s2 = i2.toLowerCase(), c2 = [];
  Dn.lastIndex = 0;
  for (var l2; (l2 = Dn.exec(a2)) !== null; ) {
    var u2 = l2[1][t2(856)](), d2 = l2[2], f2 = l2[3], p2 = l2[4];
    if (!u2.startsWith(`on`)) {
      var m2 = void 0, h2 = void 0;
      if (d2 !== void 0) m2 = d2, h2 = `"`;
      else if (f2 !== void 0) m2 = f2, h2 = `'`;
      else if (p2 !== void 0) m2 = p2, h2 = `"`;
      else {
        xn.has(u2) && c2.push(u2);
        continue;
      }
      if (xn[t2(1132)](u2)) {
        var g2 = In(u2, m2, p2 !== void 0);
        g2 !== null && c2.push(u2 + `=` + h2 + g2 + h2);
      }
    }
  }
  return `<` + s2 + (c2.length > 0 ? ` ` + c2[t2(1045)](` `) : ``) + (o2 ? `/>` : `>`);
}
function Bn(e2) {
  return typeof e2 != `string` || !e2 || e2.indexOf(`<`) === -1 ? e2 : e2.replace(/<\/?[^>]*>|[^<>\s]+>/g, function(e3) {
    var t2 = Q;
    return e3[t2(176)](`<!--`) ? `` : e3[t2(176)](`<`) ? Rn(e3) ? zn(e3) : e3.replace(/</g, `&lt;`) : e3.slice(0, -1) + `&gt;`;
  });
}
function Vn(e2, t2, n2) {
  var r2 = M;
  n2 === void 0 && (n2 = false);
  var i2 = function(t3) {
    return t3[e2 ? `getBoundingClientRect` : Q(831)]();
  };
  return n2 ? i2(t2) : !(`rect` in t2) || `rect` in t2 && t2.hasAttribute(`width`) && t2.rect.width !== +(t2[r2(955)](r2(1183)) || 0) ? t2[r2(1010)] = i2(t2) : t2.rect;
}
function Hn(e2, t2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    r2 && t2(r2, n2);
  }
}
var W = function(e2) {
  return e2 || e2 === 0;
}, G = function(e2) {
  return typeof e2 == `function`;
}, K = function(e2) {
  return typeof e2 == `string`;
}, q = function(e2) {
  return typeof e2 == `number`;
}, Un = function(e2) {
  return e2 === void 0;
}, J = function(e2) {
  return e2 !== void 0;
}, Wn = function(e2) {
  return typeof e2 == `boolean`;
}, Gn = function(e2) {
  return Math[M(232)](e2 / 10) * 10;
}, Kn = function(e2) {
  return Math.ceil(e2) + 0.5;
}, qn = function(e2) {
  return e2[1] - e2[0];
}, Jn = function(e2) {
  return typeof e2 == `object`;
}, Yn = function(e2) {
  for (var t2 in e2) return false;
  return true;
}, Xn = function(e2) {
  return Un(e2) || e2 === null || K(e2) && e2.length === 0 || Jn(e2) && !(e2 instanceof Date) && Yn(e2) || q(e2) && isNaN(e2);
}, Zn = function(e2) {
  return !Xn(e2);
}, Y = function(e2) {
  return Array.isArray(e2);
}, X = function(e2) {
  return e2 && !(e2 != null && e2[M(639)]) && Jn(e2) && !Y(e2);
};
function Qn(e2, t2, n2) {
  return J(e2[t2]) ? e2[t2] : n2;
}
function $n(e2, t2) {
  var n2 = false;
  return Object.keys(e2).forEach(function(r2) {
    return e2[r2] === t2 && (n2 = true);
  }), n2;
}
function Z(e2, t2) {
  var n2 = M, r2 = [...arguments].slice(2), i2 = G(e2);
  return i2 && e2[n2(872)].apply(e2, F([t2], r2, false)), i2;
}
function er(e2, t2) {
  var n2 = M, r2 = 0, i2 = function() {
    var e3 = [...arguments];
    !--r2 && t2.apply.apply(t2, F([this], e3, false));
  };
  n2(1168) in e2 ? e2.each(function() {
    return ++r2;
  }).on(`end`, i2) : (++r2, e2.call(i2));
}
function tr(e2, t2, n2, r2) {
  if (n2 === void 0 && (n2 = [-1, 1]), r2 === void 0 && (r2 = false), !(!e2 || !K(t2))) if (t2.indexOf(`
`) === -1) e2.text(t2);
  else {
    var i2 = [e2.text(), t2].map(function(e3) {
      return e3[Q(1077)](/[\s\n]/g, ``);
    });
    if (i2[0] !== i2[1]) {
      var a2 = t2.split(`
`), o2 = r2 ? a2.length - 1 : 1;
      e2.html(``), a2.forEach(function(t3, r3) {
        e2.append(`tspan`).attr(`x`, 0).attr(`dy`, (r3 === 0 ? n2[0] * o2 : n2[1]) + `em`).text(t3);
      });
    }
  }
}
function nr(e2) {
  var t2 = e2[M(831)](), n2 = t2.x, r2 = t2.y, i2 = t2.width, a2 = t2.height;
  return [{ x: n2, y: r2 + a2 }, { x: n2, y: r2 }, { x: n2 + i2, y: r2 }, { x: n2 + i2, y: r2 + a2 }];
}
function rr(e2) {
  var t2 = M, n2 = or(e2), r2 = n2[t2(1183)], i2 = n2.height, a2 = nr(e2);
  return { x: a2[0].x, y: Math[t2(568)](a2[0].y, a2[1].y), width: r2, height: i2 };
}
function ir(e2, t2) {
  var _a2;
  var n2 = e2 && ((_a2 = e2[M(338)] || e2.sourceEvent && e2.sourceEvent.touches) == null ? void 0 : _a2[0]), r2 = [0, 0];
  try {
    r2 = We(n2 || e2, t2);
  } catch {
  }
  return r2.map(function(e3) {
    return isNaN(e3) ? 0 : e3;
  });
}
function Q(e2, t2) {
  return e2 -= 168, Ha()[e2];
}
function ar(e2) {
  var t2 = M, n2 = e2.event, r2 = e2[t2(476)], i2 = r2.subchart.main || r2.main, a2;
  return n2 && n2[t2(599)] === `brush` ? a2 = n2.selection : i2 && (a2 = i2.select(`.bb-brush`).node()) && (a2 = h(a2)), a2;
}
function or(e2, t2) {
  return t2 === void 0 && (t2 = false), Vn(true, e2, t2);
}
function sr(e2, t2) {
  return t2 === void 0 && (t2 = false), Vn(false, e2, t2);
}
function cr(e2, t2, n2) {
  var r2 = M;
  e2 === void 0 && (e2 = true), t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 1e4);
  var i2 = U.crypto || U.msCrypto, a2 = i2 ? t2 + i2[r2(772)](new Uint32Array(1))[0] % (n2 - t2 + 1) : Math.floor(Math[r2(455)]() * (n2 - t2) + t2);
  return e2 ? String(a2) : a2;
}
function lr(e2, t2, n2, r2, i2) {
  if (n2 > r2) return -1;
  var a2 = Math.floor((n2 + r2) / 2), o2 = e2[a2], s2 = o2.x, c2 = o2.w, l2 = c2 === void 0 ? 0 : c2;
  return i2 && (s2 = e2[a2].y, l2 = e2[a2].h), t2 >= s2 && t2 <= s2 + l2 ? a2 : t2 < s2 ? lr(e2, t2, n2, a2 - 1, i2) : lr(e2, t2, a2 + 1, r2, i2);
}
function ur(e2) {
  var t2 = ar(e2);
  return t2 ? t2[0] === t2[1] : true;
}
function dr() {
  var e2 = [...arguments], t2 = function(e3) {
    if (X(e3) && e3.constructor) {
      var n2 = new e3.constructor();
      for (var r2 in e3) n2[r2] = t2(e3[r2]);
      return n2;
    }
    return e3;
  };
  return e2.map(function(e3) {
    return t2(e3);
  }).reduce(function(e3, t3) {
    return P(P({}, e3), t3);
  });
}
function fr(e2, t2) {
  for (var n2 in e2 === void 0 && (e2 = {}), Y(t2) && t2.forEach(function(t3) {
    return fr(e2, t3);
  }), t2) /^\d+$/.test(n2) || n2 in e2 || (e2[n2] = t2[n2]);
  return e2;
}
var pr = function(e2) {
  return e2.charAt(0).toUpperCase() + e2.slice(1);
};
function mr(e2, t2) {
  return t2 === void 0 && (t2 = `-`), e2.split(t2).map(function(e3, t3) {
    var n2 = Q;
    return t3 ? e3.charAt(0)[n2(545)]() + e3.slice(1).toLowerCase() : e3[n2(856)]();
  }).join(``);
}
var hr = function(e2) {
  var t2 = M;
  return [].slice[t2(872)](e2);
};
function gr(e2, t2, n2) {
  var r2 = M, i2 = e2[r2(685)], a2 = i2 === void 0 ? `` : i2, o2 = e2[r2(705)], s2 = a2 + ` ` + (function(e3) {
    return e3[r2(1077)](/\s?(bb-)/g, `.$1`).replace(/\.+/g, `.`);
  })(t2) + ` {` + n2.join(`;`) + `}`;
  return o2[o2.insertRule ? `insertRule` : `addRule`](s2, o2.cssRules.length);
}
function _r(e2) {
  var t2 = [];
  return e2.forEach(function(e3) {
    var n2;
    try {
      e3.cssRules && e3.cssRules.length && (t2 = t2.concat(hr(e3.cssRules)));
    } catch (t3) {
      (n2 = U.console) == null || n2.warn(`Error while reading rules from ` + e3.href + `: ` + t3.toString());
    }
  }), t2;
}
function vr(e2) {
  var t2 = M;
  return { x: (U.pageXOffset ?? U[t2(1048)] ?? 0) + (e2.scrollLeft ?? 0), y: (U.pageYOffset ?? U[t2(1109)] ?? 0) + (e2.scrollTop ?? 0) };
}
function yr(e2, t2, n2, r2) {
  t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = 0), r2 === void 0 && (r2 = true);
  var i2 = new DOMPoint(t2, n2), a2 = e2.getScreenCTM(), o2 = i2.matrixTransform(r2 ? a2 == null ? void 0 : a2.inverse() : a2);
  if (r2 === false) {
    var s2 = or(e2);
    o2.x -= s2.x, o2.y -= s2.y;
  }
  return o2;
}
function br(e2) {
  var t2 = e2 ? e2.transform : null, n2 = t2 && t2.baseVal;
  return n2 && n2.numberOfItems ? n2.getItem(0).matrix : { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
}
function xr(e2) {
  var t2 = e2[0] instanceof Date, n2 = (t2 ? e2.map(Number) : e2).filter(function(e3, t3, n3) {
    return n3[Q(509)](e3) === t3;
  });
  return t2 ? n2.map(function(e3) {
    return new Date(e3);
  }) : n2;
}
function Sr(e2) {
  return e2 && e2.length ? e2.reduce(function(e3, t2) {
    return e3.concat(t2);
  }) : [];
}
function Cr(e2) {
  var t2 = M, n2 = [...arguments].slice(1);
  if (!n2[t2(626)] || n2[t2(626)] === 1 && !n2[0]) return e2;
  var r2 = n2.shift();
  return X(e2) && X(r2) && Object.keys(r2)[t2(743)](function(n3) {
    if (!/^(__proto__|constructor|prototype)$/i[t2(1021)](n3)) {
      var i2 = r2[n3];
      X(i2) ? (!e2[n3] && (e2[n3] = {}), e2[n3] = Cr(e2[n3], i2)) : e2[n3] = Y(i2) ? i2.concat() : i2;
    }
  }), Cr[t2(868)](void 0, F([e2], n2, false));
}
function wr(e2, t2) {
  t2 === void 0 && (t2 = true);
  var n2;
  return e2[0] instanceof Date ? n2 = t2 ? function(e3, t3) {
    return e3 - t3;
  } : function(e3, t3) {
    return t3 - e3;
  } : t2 && !e2.every(isNaN) ? n2 = function(e3, t3) {
    return e3 - t3;
  } : t2 || (n2 = function(e3, t3) {
    return e3 > t3 && -1 || e3 < t3 && 1 || e3 === t3 && 0;
  }), e2.concat().sort(n2);
}
function Tr(e2, t2) {
  var n2 = M, r2 = t2.filter(function(e3) {
    return Zn(e3);
  });
  return r2.length ? q(r2[0]) ? r2 = Math[e2].apply(Math, r2) : r2[0] instanceof Date && (r2 = wr(r2, e2 === n2(568))[0]) : r2 = void 0, r2;
}
var Er = { mouse: (function() {
  var e2 = function() {
    return { bubbles: false, cancelable: false, screenX: 0, screenY: 0, clientX: 0, clientY: 0 };
  };
  try {
    return new MouseEvent(`t`), function(t2, n2, r2) {
      r2 === void 0 && (r2 = e2()), t2.dispatchEvent(new MouseEvent(n2, r2));
    };
  } catch {
    return function(t2, n2, r2) {
      var i2 = Q;
      r2 === void 0 && (r2 = e2());
      var a2 = gn.createEvent(`MouseEvent`);
      a2.initMouseEvent(n2, r2.bubbles, r2.cancelable, U, 0, r2.screenX, r2.screenY, r2.clientX, r2[i2(763)], false, false, false, false, 0, null), t2.dispatchEvent(a2);
    };
  }
})(), touch: function(e2, t2, n2) {
  var r2 = new Touch(Cr({ identifier: Date.now(), target: e2, radiusX: 2.5, radiusY: 2.5, rotationAngle: 10, force: 0.5 }, n2));
  e2.dispatchEvent(new TouchEvent(t2, { cancelable: true, bubbles: true, shiftKey: true, touches: [r2], targetTouches: [], changedTouches: [r2] }));
} };
function Dr(e2, t2) {
  var n2 = e2;
  for (var r2 in t2) n2 = n2.replace(RegExp(`{=` + r2 + `}`, `g`), t2[r2]);
  return Bn(n2);
}
function Or(e2) {
  var t2 = M, n2;
  if (e2 instanceof Date) n2 = e2;
  else if (K(e2)) {
    var r2 = this, i2 = r2.config;
    n2 = r2[t2(1112)].dataTime(i2.data_xFormat)(e2) ?? new Date(e2);
  } else q(e2) && !isNaN(e2) && (n2 = /* @__PURE__ */ new Date(+e2));
  return (!n2 || isNaN(+n2)) && console && console.error && console.error(`Failed to parse x '` + e2 + `' to Date object`), n2;
}
function kr(e2) {
  var t2 = M, n2 = e2.attr(t2(745));
  return n2 ? /(\d+(\.\d+)?){3}/.test(n2) : false;
}
function Ar(e2, t2, n2) {
  var r2 = M;
  n2 === void 0 && (n2 = false);
  for (var i2 = !!e2[r2(376)], a2 = false, o2 = 0, s2 = Object.entries(t2); o2 < s2.length; o2++) {
    var c2 = s2[o2], l2 = c2[0], u2 = c2[1];
    if (a2 = i2 ? e2.style(l2) === u2 : e2[r2(521)][l2] === u2, n2 === false && a2) break;
  }
  return a2;
}
function jr() {
  var e2 = M;
  return (gn == null ? void 0 : gn.hidden) === false || (gn == null ? void 0 : gn[e2(471)]) === e2(1179);
}
function Mr(e2, t2) {
  var n2 = M, r2 = U.DocumentTouch, i2 = U[n2(592)], a2 = U.navigator, o2 = i2 == null ? void 0 : i2(`(pointer:coarse)`).matches, s2 = false;
  if (t2) if (a2 && `maxTouchPoints` in a2) s2 = a2.maxTouchPoints > 0;
  else if (`ontouchmove` in U || r2 && gn instanceof r2) s2 = true;
  else if (o2) s2 = true;
  else {
    var c2 = a2[n2(542)];
    s2 = /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(c2) || /\b(Android|Windows Phone|iPad|iPod)\b/i.test(c2);
  }
  return e2 && !o2 && (i2 == null ? void 0 : i2(n2(1107)).matches) && `mouse` || s2 && n2(654) || `mouse`;
}
function Nr(e2, t2) {
  t2() === false ? vn(function() {
    return Nr(e2, t2);
  }) : e2();
}
function Pr(e2) {
  var t2 = M;
  if (X(e2) && !K(e2)) {
    var n2 = e2;
    return { top: n2.top || 0, right: n2.right || 0, bottom: n2[t2(717)] || 0, left: n2.left || 0 };
  }
  var r2 = (K(e2) ? e2.trim().split(/\s+/) : [e2]).map(function(e3) {
    return +e3 || 0;
  }), i2 = r2[0], a2 = r2[1], o2 = a2 === void 0 ? i2 : a2, s2 = r2[2], c2 = s2 === void 0 ? i2 : s2, l2 = r2[3];
  return { top: i2, right: o2, bottom: c2, left: l2 === void 0 ? o2 : l2 };
}
function Fr(e2, t2) {
  var n2 = M;
  e2.pendingRaf === null ? (e2.pendingRaf = U.requestAnimationFrame(function() {
    e2.pendingRaf = null;
  }), t2()) : (U[n2(183)](e2.pendingRaf), e2[n2(504)] = U.requestAnimationFrame(function() {
    e2.pendingRaf = null, t2();
  }));
}
function Ir(e2, t2) {
  t2 === void 0 && (t2 = function(e3) {
    return e3;
  });
  var n2 = /* @__PURE__ */ new Set();
  return Hn(e2, function(e3, r2) {
    n2[Q(677)](t2(e3, r2));
  }), n2;
}
function Lr(e2, t2, n2) {
  n2 === void 0 && (n2 = function(e3) {
    return e3;
  });
  var r2 = /* @__PURE__ */ new Map();
  return Hn(e2, function(e3, i2) {
    r2.set(t2(e3, i2), n2(e3, i2));
  }), r2;
}
var Rr = (function() {
  function e2() {
    return dr(ln, on, fn, sn, pn, cn, un, dn, e2.data);
  }
  return e2.setOptions = function(e3) {
    var t2 = Q;
    this[t2(444)] = e3.reduce(function(e4, t3) {
      return P(P({}, e4), t3);
    }, this.data);
  }, e2.data = {}, e2;
})(), zr = { element: /* @__PURE__ */ (function() {
  function e2() {
    return { chart: null, main: null, svg: null, axis: { x: null, y: null, y2: null, subX: null }, axisTooltip: { x: null, y: null, y2: null }, defs: null, tooltip: null, legend: null, title: null, subchart: { main: null, bar: null, line: null, area: null }, arcs: null, bar: null, candlestick: null, line: null, area: null, circle: null, radar: null, text: null, grid: { main: null, x: null, y: null }, gridLines: { main: null, x: null, y: null }, region: { main: null, list: null }, eventRect: null, zoomResetBtn: null };
  }
  return e2;
})(), state: /* @__PURE__ */ (function() {
  function e2() {
    return { width: 0, width2: 0, height: 0, height2: 0, margin: { top: 0, bottom: 0, left: 0, right: 0 }, margin2: { top: 0, bottom: 0, left: 0, right: 0 }, margin3: { top: 0, bottom: 0, left: 0, right: 0 }, arcWidth: 0, arcHeight: 0, xAxisHeight: 0, hasAxis: false, hasFunnel: false, hasRadar: false, hasTreemap: false, cssRule: {}, loading: void 0, domain: void 0, current: { domain: void 0, width: 0, height: 0, dataMax: 0, maxTickSize: { x: { width: 0, height: 0, ticks: [], clipPath: 0, domain: `` }, y: { width: 0, height: 0, domain: `` }, y2: { width: 0, height: 0, domain: `` } }, types: [], needle: void 0, zoomDomain: null }, isLegendRight: false, isLegendInset: false, isLegendTop: false, isLegendLeft: false, legendStep: 0, legendItemWidth: 0, legendItemHeight: 0, legendHasRendered: false, eventReceiver: { currentIdx: -1, rect: {}, data: [], coords: [] }, axis: { x: { padding: { left: 0, right: 0 }, tickCount: 0 } }, rotatedPadding: { left: 30, right: 0, top: 5 }, withoutFadeIn: {}, inputType: ``, datetimeId: ``, clip: { id: ``, idXAxis: ``, idYAxis: ``, idXAxisTickTexts: ``, idGrid: ``, idSubchart: ``, path: ``, pathXAxis: ``, pathYAxis: ``, pathXAxisTickTexts: ``, pathGrid: `` }, event: null, dragStart: null, dragging: false, flowing: false, cancelClick: false, mouseover: false, rendered: false, transiting: false, redrawing: false, resizing: false, toggling: false, zooming: false, hasNegativeValue: false, hasPositiveValue: true, orgAreaOpacity: `0.2`, orgConfig: {}, hiddenTargetIds: [], hiddenLegendIds: [], focusedTargetIds: [], defocusedTargetIds: [], radius: 0, innerRadius: 0, outerRadius: void 0, innerRadiusRatio: 0, gaugeArcWidth: 0, radiusExpanded: 0, xgridAttr: { x1: null, x2: null, y1: null, y2: null }, pendingRaf: null, rafBatchQueue: [] };
  }
  return e2;
})() }, Br = (function() {
  function e2() {
    var e3 = Q, t2 = this;
    Object[e3(552)](zr).forEach(function(e4) {
      t2[e4] = new zr[e4]();
    });
  }
  return e2.prototype.getStore = function(e3) {
    return this[e3];
  }, e2;
})(), Vr = { bubbleBaseLength: `$baseLength`, colorPattern: `__colorPattern__`, dataMinMax: `$dataMinMax`, dataTotalSum: `$dataTotalSum`, dataTotalPerIndex: `$totalPerIndex`, filteredTargets: `$filteredTargets`, visibilityChecksum: `visibilityChecksum`, legendItemTextBox: M(209), legendItemMap: `$legendItemMap`, radarPoints: M(775), radarTextWidth: `$radarTextWidth`, setOverOut: `setOverOut`, callOverOutForTouch: M(987), textRect: M(791), shapeOffset: `$shapeOffset` }, Hr = (function() {
  var e2 = M;
  function t2() {
    this.cache = {};
  }
  return t2.prototype.add = function(e3, t3, n2) {
    return n2 === void 0 && (n2 = false), this.cache[e3] = n2 ? this.cloneTarget(t3) : t3, this.cache[e3];
  }, t2.prototype.remove = function(e3) {
    var t3 = this;
    (K(e3) ? [e3] : e3).forEach(function(e4) {
      return delete t3.cache[e4];
    });
  }, t2[e2(977)].get = function(t3, n2) {
    var r2 = e2;
    if (n2 === void 0 && (n2 = false), n2 && Array.isArray(t3)) {
      for (var i2 = [], a2 = 0, o2 = void 0; o2 = t3[a2]; a2++) o2 in this[r2(808)] && i2[r2(559)](this[r2(909)](this.cache[o2]));
      return i2;
    } else {
      var s2 = this.cache[t3];
      return W(s2) ? s2 : null;
    }
  }, t2[e2(977)].has = function(e3) {
    return e3 in this.cache && this.cache[e3] !== null;
  }, t2.prototype[e2(981)] = function() {
    var t3 = e2;
    return Object.keys(this[t3(808)]);
  }, t2.prototype.reset = function(e3) {
    var t3 = this;
    for (var n2 in t3.cache) (e3 || /^\$/.test(n2)) && (t3.cache[n2] = null);
  }, t2.prototype.cloneTarget = function(t3) {
    var n2 = e2;
    return { id: t3.id, id_org: t3.id_org, values: t3.values[n2(279)](function(e3) {
      return { x: e3.x, value: e3.value, id: e3.id };
    }) };
  }, t2;
})(), $ = { AREA: M(687), AREA_LINE_RANGE: M(425), AREA_SPLINE: M(862), AREA_SPLINE_RANGE: `area-spline-range`, AREA_STEP: `area-step`, AREA_STEP_RANGE: `area-step-range`, BAR: M(951), BUBBLE: `bubble`, CANDLESTICK: `candlestick`, DONUT: `donut`, FUNNEL: `funnel`, GAUGE: `gauge`, LINE: `line`, PIE: `pie`, POLAR: `polar`, RADAR: `radar`, SCATTER: M(579), SPLINE: `spline`, STEP: `step`, TREEMAP: `treemap` }, Ur = { AREA: `initArea`, AREA_LINE_RANGE: M(1089), AREA_SPLINE: `initArea`, AREA_SPLINE_RANGE: `initArea`, AREA_STEP: `initArea`, AREA_STEP_RANGE: `initArea`, BAR: `initBar`, BUBBLE: `initCircle`, CANDLESTICK: `initCandlestick`, DONUT: M(1258), FUNNEL: `initFunnel`, GAUGE: `initArc`, LINE: M(671), PIE: `initArc`, POLAR: `initPolar`, RADAR: `initCircle`, SCATTER: `initCircle`, SPLINE: `initLine`, STEP: `initLine`, TREEMAP: `initTreemap` }, Wr = { Area: [$[M(697)], $.AREA_SPLINE, $.AREA_SPLINE_RANGE, $.AREA_LINE_RANGE, $.AREA_STEP, $[M(1119)]], AreaRange: [$.AREA_SPLINE_RANGE, $.AREA_LINE_RANGE, $.AREA_STEP_RANGE], Arc: [$.PIE, $.DONUT, $.GAUGE, $.POLAR, $[M(1047)]], Line: [$.LINE, $.SPLINE, $[M(697)], $.AREA_SPLINE, $[M(1173)], $.AREA_LINE_RANGE, $[M(834)], $.AREA_STEP, $.AREA_STEP_RANGE], Step: [$.STEP, $.AREA_STEP, $[M(1119)]], Spline: [$.SPLINE, $[M(239)], $.AREA_SPLINE_RANGE] };
function Gr(e2) {
  var t2 = M, n2 = e2, r2 = n2.config, i2 = ``;
  if (Xn(r2.data_type || r2[t2(1086)]) && !n2[Ur.LINE]) i2 = `line`;
  else for (var a2 in Ur) {
    var o2 = $[a2];
    if (n2.hasType(o2) && !n2[Ur[a2]]) {
      i2 = o2;
      break;
    }
  }
  i2 && Kr(`Please, make sure if %c` + mr(i2), `module has been imported and specified correctly.`, `https://github.com/naver/billboard.js/wiki/CHANGELOG-v2#modularization-by-its-functionality`);
}
function Kr(e2, t2, n2) {
  var r2 = M, i2, a2 = `[billboard.js]`;
  if ((i2 = U.console) != null && i2.error) {
    var o2 = [`background:red;color:white;display:block;font-size:15px`, t2];
    console[r2(330)].apply(console, F([`\u274C ` + a2 + ` ` + e2, `background:red;color:white;display:block;font-size:15px`], o2, false)), console[r2(1213)](r2(1085), r2(524), n2);
  }
  throw Error(a2 + ` ` + e2.replace(/\%c([a-z-]+)/i, r2(630)) + ` ` + t2);
}
var qr = U.setTimeout, Jr = U.clearTimeout;
function Yr(e2) {
  var t2 = M, n2 = [], r2, i2 = function() {
    i2.clear(), e2 === false ? yn(function() {
      n2[Q(743)](function(e3) {
        return e3();
      });
    }, { timeout: 200 }) : r2 = qr(function() {
      n2.forEach(function(e3) {
        return e3();
      });
    }, q(e2) ? e2 : 200);
  };
  return i2[t2(1136)] = function() {
    r2 && (r2 = (Jr(r2), null));
  }, i2[t2(677)] = function(e3) {
    return n2.push(e3);
  }, i2.remove = function(e3) {
    return n2[t2(388)](n2.indexOf(e3), 1);
  }, i2;
}
function Xr() {
  var e2 = [], t2 = function(t3, n2) {
    function r2() {
      for (var t4 = Q, n3, r3 = 0, i2 = 0, a2 = void 0; a2 = e2[i2]; i2++) {
        if (a2 === true || (n3 = a2.empty) != null && n3[t4(872)](a2)) {
          r3++;
          continue;
        }
        if (jr() === false) {
          r3 = e2.length;
          break;
        }
        try {
          a2.transition();
        } catch {
          r3++;
        }
      }
      return r3 === e2.length;
    }
    Nr(function() {
      n2 == null ? void 0 : n2();
    }, r2);
  };
  return t2.add = function(t3) {
    Y(t3) ? e2 = e2.concat(t3) : e2.push(t3);
  }, t2;
}
var Zr = {};
function Qr(e2, t2) {
  var n2 = M, r2 = e2.toString(), i2 = r2.replace(/(function|[\s\W\n])/g, ``).substring(0, 15);
  return i2 in Zr || (Zr[i2] = new U[n2(915)]([((t2 == null ? void 0 : t2.map(String).join(`;`)) ?? ``) + n2(816) + r2 + `).apply(null, data);
				self.postMessage(result);
			};`], { type: `text/javascript` })), U.URL.createObjectURL(Zr[i2]);
}
function $r(e2) {
  var t2 = new U.Worker(e2);
  return t2.onerror = function(e3) {
    console.error ? console.error(e3) : console.log(e3);
  }, t2;
}
function ei(e2, t2, n2, r2) {
  var i2 = M;
  e2 === void 0 && (e2 = true);
  var a2 = function() {
    var e3 = [...arguments];
    n2(t2.apply(void 0, e3));
  };
  if (U[i2(959)] && e2) {
    var o2 = Qr(t2, r2), s2 = $r(o2);
    a2 = function() {
      var e3 = i2, t3 = [...arguments];
      s2[e3(389)](t3), s2.onmessage = function(e4) {
        return U.URL.revokeObjectURL(o2), n2(e4.data);
      };
    };
  }
  return a2;
}
function ti(e2) {
  var t2 = [];
  return e2.forEach(function(e3, n2) {
    var r2 = e3[0];
    e3.forEach(function(e4, i2) {
      var a2 = Q;
      if (i2 > 0) {
        if (t2[i2 - 1] === void 0 && (t2[i2 - 1] = {}), e4 === void 0) throw Error(a2(360) + n2 + `, ` + i2 + `)!`);
        t2[i2 - 1][r2] = e4;
      }
    });
  }), t2;
}
function ni(e2) {
  var t2 = e2[0], n2 = [];
  return e2.forEach(function(e3, r2) {
    if (r2 > 0) {
      var i2 = {};
      e3.forEach(function(e4, n3) {
        if (e4 === void 0) throw Error(`Source data is missing a component at (` + r2 + `, ` + n3 + `)!`);
        i2[t2[n3]] = e4;
      }), n2.push(i2);
    }
  }), n2;
}
function ri(e2, t2) {
  var n2 = M, r2 = [], i2, a2;
  if (Array.isArray(e2)) {
    var o2 = function(e3, t3) {
      var n3 = Q;
      if (e3[t3] !== void 0) return e3[t3];
      var r3 = t3.replace(/\[(\w+)\]/g, n3(817))[n3(1077)](/^\./, ``).split(`.`), i3 = e3;
      return r3[n3(947)](function(e4) {
        return !(i3 = i3 && e4 in i3 ? i3[e4] : void 0);
      }), i3;
    };
    i2 = t2.x ? t2.value.concat(t2.x) : t2.value, r2.push(i2), e2.forEach(function(e3) {
      var t3 = i2[Q(279)](function(t4) {
        var n3 = o2(e3, t4);
        return n3 === void 0 && (n3 = null), n3;
      });
      r2.push(t3);
    }), a2 = ni(r2);
  } else Object[n2(552)](e2).forEach(function(t3) {
    var n3, i3 = e2[t3].concat();
    (n3 = i3.unshift) == null || n3.call(i3, t3), r2.push(i3);
  }), a2 = ti(r2);
  return a2;
}
function ii(e2, t2, n2, r2, i2) {
  var a2 = M;
  t2 === void 0 && (t2 = `csv`);
  var o2 = new XMLHttpRequest(), s2 = { csv: oi, tsv: si, json: ri };
  o2.open(`GET`, e2), n2 && Object.keys(n2)[a2(743)](function(e3) {
    o2.setRequestHeader(e3, n2[e3]);
  }), o2.onreadystatechange = function() {
    var n3 = a2;
    if (o2.readyState === 4) if (o2[n3(1256)] === 200) {
      var c2 = o2.responseText;
      c2 && i2[n3(872)](this, s2[t2](t2 === `json` ? JSON.parse(c2) : c2, r2));
    } else throw Error(e2 + `: Something went wrong loading!`);
  }, o2.send();
}
function ai(e2, t2) {
  var n2 = M, r2 = e2.rows(t2), i2;
  return r2.length === 1 ? (i2 = [{}], r2[0].forEach(function(e3) {
    i2[0][e3] = null;
  })) : i2 = e2[n2(484)](t2), i2;
}
function oi(e2) {
  return ai({ rows: bt, parse: yt }, e2);
}
function si(e2) {
  return ai({ rows: Ct, parse: St }, e2);
}
function ci(e2, t2) {
  var n2 = e2 || (t2 == null ? void 0 : t2[M(326)]);
  return n2 != null && n2.x && (t2.data_x = n2.x), n2;
}
function li(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = this, o2 = a2[r2(636)], s2;
  e2.forEach(function(e3) {
    var c2 = r2, l2 = a2.getXKey(e3);
    if (n2.customX || n2.timeSeries ? n2.xs[c2(509)](l2) >= 0 ? s2 = (n2.appendXs && a2.data.xs[e3] || []).concat(t2.map(function(t3, n3) {
      var r3 = W(t3[l2]);
      return r3 ? a2.generateTargetX(r3, e3, n3) : false;
    })[c2(1038)](function(e4) {
      return e4 !== false;
    })) : o2.data_x ? s2 = i2.getOtherTargetXs() : Zn(o2.data_xs) && (s2 = a2.getXValuesOfXKey(l2, a2.data.targets)) : s2 = t2.map(function(e4, t3) {
      return t3;
    }), s2) a2.data.xs[e3] = s2;
    else throw Error(c2(700) + e3 + `".`);
  });
}
var ui = { convertData: function(e2, t2) {
  var n2 = M, r2 = this.config, i2 = function(e3) {
    return e3 != null && e3[Q(626)] && !Xn(e3[0]) ? r2.boost_useWorker : false;
  }, a2 = e2;
  if (e2.bindto && (a2 = {}, [n2(1157), `mimeType`, `headers`, `keys`, `json`, `keys`, `rows`, `columns`].forEach(function(t3) {
    var n3 = `data_` + t3;
    n3 in e2 && (a2[t3] = e2[n3]);
  })), a2.url && t2) ii(a2.url, a2.mimeType, a2[n2(336)], ci(a2.keys, r2), t2);
  else if (a2[n2(1197)]) ei(i2(a2.json), ri, t2, [ti, ni])(a2.json, ci(a2.keys, r2));
  else if (a2.rows) ei(i2(a2.rows), ni, t2)(a2.rows);
  else if (a2.columns) ei(i2(a2[n2(954)]), ti, t2)(a2[n2(954)]);
  else if (e2.bindto) throw Error(n2(547));
}, convertDataToTargets: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.axis, a2 = r2.config, o2 = r2.state, s2 = a2.data_type, c2 = Object.keys(e2[0] || {}), l2 = c2.length ? c2.reduce(function(e3, t3) {
    var n3 = Q;
    return r2.isX.call(r2, t3) ? e3.xs[n3(559)](t3) : r2.isNotX.call(r2, t3) && e3.ids.push(t3), e3;
  }, { ids: [], xs: [] }) : { ids: [], xs: [] }, u2 = l2.ids, d2 = { appendXs: t2, xs: l2.xs, idConverter: a2.data_idConverter.bind(r2.api), categorized: i2 == null ? void 0 : i2.isCategorized(), timeSeries: i2 == null ? void 0 : i2.isTimeSeries(), customX: i2 == null ? void 0 : i2.isCustomX() };
  li.bind(r2)(u2, e2, d2);
  var f2 = u2.map(function(t3, n3) {
    var i3 = Q, s3 = a2.data_idConverter.bind(r2[i3(1158)])(t3), c3 = r2.getXKey(t3), l3 = d2.customX && d2.categorized, u3 = l3 && (function() {
      var t4 = Ir(a2[i3(369)]);
      return e2.every(function(e3) {
        return t4.has(e3.x);
      });
    })(), f3 = e2.__append__, p3 = c3 === null && f3 ? r2[i3(1158)].data.values(t3).length : 0;
    return { id: s3, id_org: t3, values: e2.map(function(e3, d3) {
      var m2 = i3, h2 = e3[c3], g2 = e3[t3], _2;
      return g2 = g2 !== null && !isNaN(g2) && !X(g2) ? +g2 : Y(g2) || X(g2) ? g2 : null, (l3 || o2[m2(184)]) && n3 === 0 && !Un(h2) ? (!u3 && n3 === 0 && d3 === 0 && !f3 && (a2.axis_x_categories = []), _2 = a2.axis_x_categories.indexOf(h2), _2 === -1 && (_2 = a2.axis_x_categories.length, a2.axis_x_categories.push(h2))) : _2 = r2.generateTargetX(h2, t3, p3 + d3), (Un(g2) || r2.data.xs[t3].length <= d3) && (_2 = void 0), { x: _2, value: g2, id: s3, index: -1 };
    })[i3(1038)](function(e3) {
      return J(e3.x);
    }) };
  });
  if (f2[n2(743)](function(e3) {
    var t3 = n2, i3;
    a2.data_xSort && (e3.values = e3.values[t3(418)](function(e4, t4) {
      return (e4.x || e4.x === 0 ? e4.x : 1 / 0) - (t4.x || t4.x === 0 ? t4.x : 1 / 0);
    })), e3.values.forEach(function(e4, t4) {
      return e4.index = t4;
    }), (i3 = r2.data.xs[e3.id]) == null || i3[t3(418)](function(e4, t4) {
      return e4 - t4;
    });
  }), o2[n2(398)] = r2[n2(893)](f2), o2[n2(240)] = r2.hasPositiveValueInTargets(f2), s2 && r2[n2(395)](s2)) {
    var p2 = r2.mapToIds(f2).filter(function(e3) {
      return !(e3 in a2.data_types) || !r2.isValidChartType(a2.data_types[e3]);
    });
    r2[n2(479)](p2, s2);
  }
  return f2.forEach(function(e3) {
    var t3 = n2;
    return r2[t3(808)][t3(677)](e3[t3(1240)], e3, true);
  }), f2;
} }, di = { isX: function(e2) {
  var t2 = this.config, n2 = t2.data_x && e2 === t2.data_x, r2 = Zn(t2.data_xs) && $n(t2.data_xs, e2);
  return n2 || r2;
}, isNotX: function(e2) {
  return !this.isX(e2);
}, isStackNormalized: function() {
  var e2 = M, t2 = this[e2(636)];
  return !!((t2.data_stack_normalize === true || Jn(t2.data_stack_normalize)) && t2.data_groups[e2(626)]);
}, isStackNormalizedPerGroup: function() {
  var e2 = M, t2, n2 = this.config;
  return !!(Jn(n2[e2(399)]) && (t2 = n2.data_stack_normalize) != null && t2.perGroup && n2.data_groups.length);
}, isGrouped: function(e2) {
  var t2 = this.config.data_groups;
  return e2 ? t2.some(function(t3) {
    return t3[Q(509)](e2) >= 0 && t3.length > 1;
  }) : t2.length > 0;
}, hasAxisGroupedData: function(e2) {
  var t2 = this, n2 = t2.axis;
  return t2.data.targets.filter(function(t3) {
    return n2.getId(t3.id) === e2;
  }).map(function(e3) {
    return e3.id;
  }).some(function(e3) {
    return t2.isGrouped(e3);
  });
}, getXKey: function(e2) {
  var t2 = M, n2 = this[t2(636)];
  return n2.data_x ? n2.data_x : Zn(n2.data_xs) ? n2.data_xs[e2] : null;
}, getXValuesOfXKey: function(e2, t2) {
  var n2 = this, r2 = t2 && Zn(t2) ? n2.mapToIds(t2) : [], i2;
  return r2.forEach(function(t3) {
    n2.getXKey(t3) === e2 && (i2 = n2.data.xs[t3]);
  }), i2;
}, getIndexByX: function(e2, t2) {
  var n2 = M, r2 = this;
  return t2 ? t2.indexOf(K(e2) ? e2 : +e2) : (r2.filterByX(r2[n2(444)].targets, e2)[0] || { index: null }).index;
}, getXValue: function(e2, t2) {
  var n2 = M, r2 = this;
  return e2 in r2.data.xs && r2[n2(444)].xs[e2] && W(r2.data.xs[e2][t2]) ? r2.data.xs[e2][t2] : t2;
}, getOtherTargetXs: function() {
  var e2 = M, t2 = this, n2 = Object.keys(t2[e2(444)].xs);
  return n2[e2(626)] ? t2[e2(444)].xs[n2[0]] : null;
}, getOtherTargetX: function(e2) {
  var t2 = this.getOtherTargetXs();
  return t2 && e2 < t2.length ? t2[e2] : null;
}, addXs: function(e2) {
  var t2 = M, n2 = this[t2(636)];
  Object[t2(552)](e2).forEach(function(r2) {
    var i2 = t2;
    n2[i2(789)][r2] = e2[r2];
  });
}, isMultipleX: function() {
  var e2 = M;
  return !this.config.axis_x_forceAsSingle && (Zn(this.config.data_xs) || this[e2(1013)](`bubble`) || this.hasType(`scatter`));
}, addName: function(e2) {
  var t2 = this.config, n2;
  return e2 && (n2 = t2.data_names[e2.id], e2.name = n2 === void 0 ? e2.id : n2), e2;
}, getAllValuesOnIndex: function(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2.filterTargetsToShow(r2.data.targets).map(function(t3) {
    return r2.addName(r2.getValueOnIndex(t3.values, e2));
  });
  return t2 && (i2 = i2[n2(1038)](function(e3) {
    return e3 && n2(461) in e3 && W(e3.value);
  })), i2;
}, getValueOnIndex: function(e2, t2) {
  var n2 = e2.filter(function(e3) {
    return e3[Q(1244)] === t2;
  });
  return n2.length ? n2[0] : null;
}, updateTargetX: function(e2, t2) {
  var n2 = this;
  e2.forEach(function(e3) {
    var r2 = Q;
    e3.values.forEach(function(r3, i2) {
      r3.x = n2[Q(1105)](t2[i2], e3.id, i2);
    }), n2[r2(444)].xs[e3.id] = t2;
  });
}, updateTargetXs: function(e2, t2) {
  var n2 = this;
  e2.forEach(function(e3) {
    t2[e3.id] && n2.updateTargetX([e3], t2[e3.id]);
  });
}, generateTargetX: function(e2, t2, n2) {
  var r2 = this, i2 = r2.axis, a2 = i2 != null && i2.isCategorized() ? n2 : e2 || n2;
  return i2 != null && i2.isTimeSeries() ? a2 = Or.bind(r2)(e2 || r2.getXValue(t2, n2)) : i2 != null && i2.isCustomX() && !(i2 != null && i2.isCategorized()) && (a2 = W(e2) ? +e2 : r2.getXValue(t2, n2)), a2;
}, updateXs: function(e2) {
  var t2 = M;
  e2.length && (this.axis.xs = e2[t2(279)](function(e3) {
    return e3.x;
  }));
}, getPrevX: function(e2) {
  var t2 = this.axis.xs[e2 - 1];
  return J(t2) ? t2 : null;
}, getNextX: function(e2) {
  var t2 = this.axis.xs[e2 + 1];
  return J(t2) ? t2 : null;
}, getBaseValue: function(e2) {
  var t2 = M, n2 = this, r2 = n2.state.hasAxis, i2 = e2.value;
  return i2 && r2 && (n2.isAreaRangeType(e2) ? i2 = n2[t2(561)](e2, `mid`) : n2.isBubbleZType(e2) && (i2 = n2.getBubbleZData(i2, `y`))), i2;
}, getMinMaxValue: function(e2) {
  var t2 = M, n2 = this.getBaseValue.bind(this), r2, i2;
  return (e2 || this[t2(444)].targets.map(function(e3) {
    return e3.values;
  }))[t2(743)](function(e3, t3) {
    var a2 = e3.map(n2).filter(q);
    r2 = Math.min.apply(Math, F([t3 ? r2 : 1 / 0], a2, false)), i2 = Math.max.apply(Math, F([t3 ? i2 : -1 / 0], a2, false));
  }), { min: r2, max: i2 };
}, getMinMaxData: function() {
  var e2 = M, t2 = this, n2 = Vr[e2(177)], r2 = t2[e2(808)].get(n2);
  if (!r2) {
    var i2 = t2.data[e2(517)].map(function(e3) {
      return e3.values;
    }), a2 = t2.getMinMaxValue(i2), o2 = [], s2 = [], c2 = a2.min, l2 = a2[e2(769)];
    i2.forEach(function(e3) {
      var n3 = t2.getFilteredDataByValue(e3, c2), r3 = t2.getFilteredDataByValue(e3, l2);
      n3.length && (o2 = o2.concat(n3)), r3.length && (s2 = s2.concat(r3));
    }), t2.cache.add(n2, r2 = { min: o2, max: s2 });
  }
  return r2;
}, getTotalPerIndex: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = e2 ? Vr.dataTotalPerIndex + `-` + e2 : Vr.dataTotalPerIndex, a2 = n2.cache.get(i2);
  if ((n2.config.data_groups.length || n2.isStackNormalized()) && !a2) {
    a2 = [];
    var o2 = n2.data.targets;
    if (n2.isStackNormalizedPerGroup() && e2) {
      var s2 = r2.data_groups[t2(531)](function(t3) {
        return t3.indexOf(e2) >= 0;
      });
      if (s2) o2 = o2.filter(function(e3) {
        return s2.indexOf(e3.id) >= 0;
      });
      else return null;
    }
    o2[t2(743)](function(e3) {
      e3.values.forEach(function(e4, t3) {
        a2[t3] || (a2[t3] = 0), a2[t3] += ~~e4.value;
      });
    }), n2.cache[t2(677)](i2, a2);
  }
  return a2;
}, getTotalDataSum: function(e2) {
  var t2 = M, n2 = this, r2 = Vr.dataTotalSum, i2 = n2.cache.get(r2);
  return q(i2) || (i2 = n2.data.targets.reduce(function(e3, t3) {
    var n3 = Q;
    return e3 + t3[n3(277)][n3(493)](function(e4, t4) {
      return e4 + (t4.value ?? 0);
    }, 0);
  }, 0), n2[t2(808)].add(r2, i2)), e2 && (i2 -= n2.getHiddenTotalDataSum()), i2;
}, getHiddenTotalDataSum: function() {
  var e2 = M, t2 = this, n2 = t2[e2(1158)], r2 = t2.state.hiddenTargetIds, i2 = 0;
  return r2.length && (i2 = n2.data.values.bind(n2)(r2).reduce(function(e3, t3) {
    return e3 + t3;
  })), i2;
}, getFilteredDataByValue: function(e2, t2) {
  var n2 = M, r2 = this;
  return e2[n2(1038)](function(e3) {
    return r2.getBaseValue(e3) === t2;
  });
}, getMaxDataCount: function() {
  return Math.max[M(868)](Math, F(F([], this.data.targets.map(function(e2) {
    return e2.values.length;
  }), false), [0], false));
}, getMaxDataCountTarget: function() {
  var e2 = M, t2 = this.filterTargetsToShow() || [], n2 = t2.length, r2 = this.config.axis_x_inverted;
  return n2 > 1 ? (t2 = t2[e2(279)](function(e3) {
    return e3.values;
  }).reduce(function(e3, t3) {
    return e3.concat(t3);
  }).map(function(e3) {
    return e3.x;
  }), t2 = wr(xr(t2))[e2(279)](function(e3, t3, n3) {
    return { x: e3, index: r2 ? n3.length - t3 - 1 : t3 };
  })) : n2 && (t2 = t2[0].values.concat()), t2;
}, mapToIds: function(e2) {
  return e2[M(279)](function(e3) {
    return e3.id;
  });
}, mapToTargetIds: function(e2) {
  var t2 = this;
  return e2 ? Y(e2) ? e2.concat() : [e2] : t2.mapToIds(t2.data.targets);
}, hasTarget: function(e2, t2) {
  for (var n2 = M, r2 = this[n2(1096)](e2), i2 = 0, a2 = void 0; a2 = r2[i2]; i2++) if (a2 === t2) return true;
  return false;
}, isTargetToShow: function(e2) {
  var t2 = M;
  return this.state[t2(505)].indexOf(e2) < 0;
}, isLegendToShow: function(e2) {
  var t2 = M;
  return this[t2(886)].hiddenLegendIds.indexOf(e2) < 0;
}, filterTargetsToShow: function(e2) {
  var t2 = M, n2 = this;
  if (!e2) {
    var r2 = n2[t2(808)], i2 = n2.data, a2 = n2.state, o2 = Vr[t2(368)], s2 = a2.hiddenTargetIds.join(`,`);
    if (s2 !== r2[t2(483)](Vr.visibilityChecksum) && (r2.remove(o2), r2.add(Vr.visibilityChecksum, s2)), r2.has(o2)) return r2[t2(483)](o2);
    var c2 = i2.targets.filter(function(e3) {
      return n2.isTargetToShow(e3.id);
    });
    return r2[t2(677)](o2, c2), c2;
  }
  return e2.filter(function(e3) {
    return n2.isTargetToShow(e3.id);
  });
}, mapTargetsToUniqueXs: function(e2) {
  var t2 = M, n2 = this.axis, r2 = [];
  return e2 != null && e2.length && (r2 = xr(Sr(e2.map(function(e3) {
    return e3.values.map(function(e4) {
      return +e4.x;
    });
  }))), r2 = n2 != null && n2[t2(199)]() ? r2.map(function(e3) {
    return /* @__PURE__ */ new Date(+e3);
  }) : r2.map(Number)), wr(r2);
}, addTargetIds: function(e2, t2) {
  var n2 = M, r2 = this.state;
  (Y(t2) ? t2 : [t2])[n2(743)](function(t3) {
    var i2 = n2;
    r2[e2].indexOf(t3) < 0 && r2[e2][i2(559)](t3);
  });
}, removeTargetIds: function(e2, t2) {
  var n2 = this.state;
  (Y(t2) ? t2 : [t2]).forEach(function(t3) {
    var r2 = n2[e2].indexOf(t3);
    r2 >= 0 && n2[e2].splice(r2, 1);
  });
}, addHiddenTargetIds: function(e2) {
  this.addTargetIds(`hiddenTargetIds`, e2);
}, removeHiddenTargetIds: function(e2) {
  var t2 = M;
  this[t2(997)](`hiddenTargetIds`, e2);
}, addHiddenLegendIds: function(e2) {
  this.addTargetIds(`hiddenLegendIds`, e2);
}, removeHiddenLegendIds: function(e2) {
  var t2 = M;
  this[t2(997)](t2(380), e2);
}, getValuesAsIdKeyed: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(886)].hasAxis, i2 = {}, a2 = n2.isMultipleX(), o2 = a2 ? n2.mapTargetsToUniqueXs(e2).map(function(e3) {
    return K(e3) ? e3 : +e3;
  }) : null, s2 = o2 ? new Map(o2.map(function(e3, t3) {
    return [e3, t3];
  })) : null;
  return e2.forEach(function(e3) {
    var t3 = [];
    e3.values.filter(function(e4) {
      var t4 = e4[Q(461)];
      return W(t4) || t4 === null;
    }).forEach(function(e4) {
      var i3 = Q, o3 = e4[i3(461)];
      if (o3 !== null && n2[i3(628)](e4) && (o3 = Y(o3) ? o3.slice(0, 4) : [o3.open, o3[i3(366)], o3.low, o3[i3(321)]]), Y(o3)) t3.push.apply(t3, o3);
      else if (X(o3) && `high` in o3) t3[i3(559)].apply(t3, Object.values(o3));
      else if (n2.isBubbleZType(e4)) t3.push(r2 && n2[i3(314)](o3, `y`));
      else if (a2 && s2) {
        var c2 = K(e4.x) ? e4.x : +e4.x, l2 = s2.get(c2);
        l2 !== void 0 && (t3[l2] = o3);
      } else t3[i3(559)](o3);
    }), i2[e3.id] = t3;
  }), i2;
}, checkValueInTargets: function(e2, t2) {
  return Object.keys(e2).some(function(n2) {
    return e2[n2].values.some(function(e3) {
      return t2(e3.value);
    });
  });
}, hasMultiTargets: function() {
  var e2 = M;
  return this[e2(1035)]().length > 1;
}, hasNegativeValueInTargets: function(e2) {
  return this.checkValueInTargets(e2, function(e3) {
    return e3 < 0;
  });
}, hasPositiveValueInTargets: function(e2) {
  var t2 = M;
  return this[t2(648)](e2, function(e3) {
    return e3 > 0;
  });
}, orderTargets: function(e2) {
  var t2 = this, n2 = F([], e2, true), r2 = t2.getSortCompareFn();
  return r2 && n2.sort(r2), n2;
}, getSortCompareFn: function(e2) {
  var t2 = M;
  e2 === void 0 && (e2 = false);
  var n2 = this, r2 = n2.config.data_order, i2 = /asc/i.test(r2), a2 = /desc/i.test(r2), o2;
  if (i2 || a2) {
    var s2 = function(e3, t3) {
      return e3 + Math.abs(t3.value);
    }, c2 = function(e3) {
      return q(e3) ? e3 : `values` in e3 ? e3.values.reduce(s2, 0) : e3.value;
    };
    o2 = function(t3, n3) {
      var r3 = c2(t3), a3 = c2(n3);
      return e2 ? i2 ? r3 - a3 : a3 - r3 : i2 ? a3 - r3 : r3 - a3;
    };
  } else G(r2) && (o2 = r2[t2(1194)](n2.api));
  return o2 || null;
}, filterByX: function(e2, t2) {
  return Sr(e2.map(function(e3) {
    return e3[Q(277)];
  })).filter(function(e3) {
    return e3.x - t2 === 0;
  });
}, filterNullish: function(e2) {
  var t2 = function(e3) {
    return W(e3[Q(461)]);
  };
  return e2 && e2.filter(function(e3) {
    return `value` in e3 ? t2(e3) : e3.values.some(t2);
  });
}, filterRemoveNull: function(e2) {
  var t2 = this;
  return e2.filter(function(e3) {
    return W(t2.getBaseValue(e3));
  });
}, filterByXDomain: function(e2, t2) {
  return e2.map(function(e3) {
    var n2 = Q;
    return { id: e3.id, id_org: e3.id_org, values: e3[n2(277)].filter(function(e4) {
      return t2[0] <= e4.x && e4.x <= t2[1];
    }) };
  });
}, hasDataLabel: function() {
  var e2 = this.config.data_labels;
  return Wn(e2) && e2 || Jn(e2) && Zn(e2);
}, hasNullDataValue: function(e2) {
  var t2 = M;
  return e2[t2(947)](function(e3) {
    return e3[t2(461)] === null;
  });
}, getDataIndexFromEvent: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(476)], i2 = n2.config, a2 = n2.state, o2 = a2.hasRadar, s2 = a2.inputType, c2 = a2.eventReceiver, l2 = c2.coords, u2 = c2[t2(1010)], d2;
  if (o2) {
    var f2 = e2.target;
    /tspan/i.test(f2.tagName) && (f2 = f2.parentNode);
    var p2 = j(f2).datum();
    d2 = p2 && Object.keys(p2).length === 1 ? p2.index : void 0;
  } else {
    var m2 = i2.axis_rotated, h2 = vr(r2.chart.node()), g2 = s2 === `touch` && e2.changedTouches ? e2.changedTouches[0] : e2, _2 = m2 ? g2[t2(763)] + h2.y : g2[t2(457)] + h2.x;
    if (kr(r2.svg)) {
      var v2 = [_2, 0];
      m2 && v2[t2(315)](), _2 = yr.apply(void 0, F([r2.eventRect.node()], v2, false))[m2 ? `y` : `x`];
    } else _2 -= m2 ? u2[t2(299)] : u2.left;
    d2 = lr(l2, _2, 0, l2[t2(626)] - 1, m2);
  }
  return d2;
}, getDataLabelLength: function(e2, t2, n2) {
  var _a2;
  var r2 = this, i2 = 1.3;
  return ((_a2 = r2.getTextRect([e2, t2].map(function(e3) {
    return r2.dataLabelFormat()(e3);
  }))) == null ? void 0 : _a2.map(function(e3) {
    return e3[n2] * i2;
  })) || [0, 0];
}, isNoneArc: function(e2) {
  return this.hasTarget(this.data.targets, e2.id);
}, isArc: function(e2) {
  return M(444) in e2 && this.hasTarget(this.data.targets, e2.data.id);
}, findSameXOfValues: function(e2, t2) {
  var n2 = e2[t2].x, r2 = [], i2;
  for (i2 = t2 - 1; i2 >= 0 && n2 === e2[i2].x; i2--) r2.push(e2[i2]);
  for (i2 = t2; i2 < e2.length && n2 === e2[i2].x; i2++) r2.push(e2[i2]);
  return r2;
}, findClosestFromTargets: function(e2, t2) {
  var n2 = this, r2 = e2.map(function(e3) {
    return n2.findClosest(e3.values, t2);
  });
  return n2.findClosest(r2, t2);
}, findClosest: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2[n2(476)].main, a2 = e2.filter(function(e3) {
    return e3 && W(e3.value);
  }), o2, s2;
  return a2.filter(function(e3) {
    return r2.isBarType(e3.id) || r2.isCandlestickType(e3.id);
  }).forEach(function(e3) {
    var t3 = n2, a3 = r2[t3(819)](e3.id) ? `.` + Wt.chartBar + `.` + I[t3(1257)] + r2.getTargetSelectorSuffix(e3.id) + ` .` + Wt[t3(951)] + `-` + e3.index : `.` + Gt.chartCandlestick + `.` + I[t3(1257)] + r2.getTargetSelectorSuffix(e3.id) + ` .` + Gt[t3(1002)] + `-` + e3.index + ` path`;
    !s2 && r2.isWithinBar(i2[t3(1057)](a3)[t3(376)]()) && (s2 = e3);
  }), a2.filter(function(e3) {
    return !r2.isBarType(e3.id) && !r2.isCandlestickType(e3.id);
  })[n2(743)](function(e3) {
    var n3 = r2.dist(e3, t2);
    o2 = r2.getPointSensitivity(e3), n3 < o2 && (o2 = n3, s2 = e3);
  }), s2;
}, dist: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config.axis_rotated, a2 = r2.scale, o2 = +i2, s2 = +!i2, c2 = r2[n2(172)](e2, e2[n2(1244)]), l2 = (a2[n2(234)] || a2.x)(e2.x);
  return Math.sqrt(Math[n2(1182)](l2 - t2[o2], 2) + (c2 - t2[s2]) ** 2);
}, convertValuesToStep: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(501)], i2 = n2.config.line_step_type, a2 = r2 ? r2.isCategorized() : false, o2 = Y(e2) ? e2.concat() : [e2];
  if (!(a2 || /step\-(after|before)/.test(i2))) return e2;
  if (o2.length) {
    var s2 = o2[0], c2 = o2[o2.length - 1], l2 = s2.id, u2 = s2.x;
    o2.unshift({ x: --u2, value: s2.value, id: l2 }), a2 && i2 === `step-after` && o2.unshift({ x: --u2, value: s2.value, id: l2 }), u2 = c2.x, o2[t2(559)]({ x: ++u2, value: c2[t2(461)], id: l2 }), a2 && i2 === `step-before` && o2.push({ x: ++u2, value: c2.value, id: l2 });
  }
  return o2;
}, convertValuesToRange: function(e2) {
  var t2 = Y(e2) ? e2.concat() : [e2], n2 = [];
  return t2.forEach(function(e3) {
    var t3 = Q, r2 = e3.x, i2 = e3.id;
    n2.push({ x: r2, id: i2, value: e3.value[0] }), n2[t3(559)]({ x: r2, id: i2, value: e3.value[2] });
  }), n2;
}, updateDataAttributes: function(e2, t2) {
  var n2 = this, r2 = n2.config[`data_` + e2];
  return Un(t2) ? r2 : (Object.keys(t2).forEach(function(e3) {
    r2[e3] = t2[e3];
  }), n2.redraw({ withLegend: true }), r2);
}, getRangedData: function(e2, t2, n2) {
  var r2 = M;
  t2 === void 0 && (t2 = ``), n2 === void 0 && (n2 = `areaRange`);
  var i2 = e2 == null ? void 0 : e2.value;
  if (Y(i2)) {
    if (n2 === `bar`) return i2[r2(493)](function(e3, t3) {
      return t3 - e3;
    });
    var a2 = { areaRange: [`high`, `mid`, `low`], candlestick: [`open`, `high`, `low`, r2(321), `volume`] }[n2][r2(509)](t2);
    return a2 >= 0 && i2 ? i2[a2] : void 0;
  } else if (i2 && t2) return i2[t2];
  return i2;
}, setRatioForGroupedData: function(e2) {
  var t2 = M, n2 = this;
  if (n2.config.data_groups[t2(626)] && e2.some(function(e3) {
    return n2.isGrouped(e3.id);
  })) {
    var r2 = function(e3) {
      var r3 = t2;
      return n2.getRatio(r3(1244), e3, true);
    };
    e2.forEach(function(e3) {
      t2(277) in e3 ? e3.values.forEach(r2) : r2(e3);
    });
  }
}, getRatio: function(e2, t2, n2) {
  var r2 = M;
  n2 === void 0 && (n2 = false);
  var i2 = this, a2 = i2[r2(636)], o2 = i2.state, s2 = i2[r2(1158)], c2 = 0;
  if (t2 && s2[r2(444)][r2(433)]().length) if (c2 = t2.ratio || t2.value, e2 === `arc`) if (i2.pie[r2(1033)]()()) c2 = t2.value / i2[r2(946)](true);
  else {
    var l2 = a2.gauge_fullCircle ? i2.getArcLength() : i2.getStartingAngle() * -2, u2 = i2.hasType(`gauge`) ? l2 : Math.PI * 2;
    c2 = (t2.endAngle - t2.startAngle) / u2;
  }
  else if (e2 === `index`) {
    var d2 = s2[r2(444)].values[r2(1194)](s2), f2 = o2.hiddenTargetIds, p2 = this.getTotalPerIndex(i2.isStackNormalizedPerGroup() ? t2.id : void 0);
    if (p2 === null) return c2;
    if (f2[r2(626)]) {
      var m2 = f2;
      if (i2.isStackNormalizedPerGroup() && t2.id) {
        var h2 = a2.data_groups.find(function(e3) {
          return e3.indexOf(t2.id) >= 0;
        });
        h2 && (m2 = m2.filter(function(e3) {
          return h2[r2(509)](e3) >= 0;
        }));
      }
      if (m2.length) {
        var g2 = d2(m2, false);
        g2.length && (g2 = g2[r2(493)](function(e3, t3) {
          return e3.map(function(e4, n3) {
            return ~~e4 + t3[n3];
          });
        }), p2 = p2[r2(279)](function(e3, t3) {
          return e3 - g2[t3];
        }));
      }
    }
    var _2 = p2[t2.index];
    t2.ratio = q(t2.value) && p2 && _2 ? t2.value / _2 : 0, c2 = t2.ratio;
  } else if (e2 === `radar`) c2 = parseFloat(String(Math.max(t2.value, 0))) / o2.current.dataMax * a2.radar_size_ratio;
  else if (e2 === `bar`) {
    var v2 = i2[r2(1174)][r2(1194)](i2)(t2.id).domain().reduce(function(e3, t3) {
      return t3 - e3;
    });
    c2 = v2 === 0 ? 0 : Math.abs(i2.getRangedData(t2, null, e2) / v2);
  } else e2 === `treemap` && (c2 /= i2.getTotalDataSum(true));
  return n2 && c2 ? c2 * 100 : c2;
}, updateDataIndexByX: function(e2) {
  var t2 = M, n2 = this, r2 = e2.reduce(function(e3, t3, n3) {
    return e3[Number(t3.x)] = n3, e3;
  }, {});
  n2.data.targets[t2(743)](function(e3) {
    e3.values.forEach(function(e4, t3) {
      var n3 = r2[Number(e4.x)];
      n3 === void 0 && (n3 = t3), e4.index = n3;
    });
  });
}, isBubbleZType: function(e2) {
  var t2 = M;
  return this[t2(910)](e2) && (X(e2.value) && (`z` in e2.value || `y` in e2.value) || Y(e2.value) && e2.value.length >= 2);
}, isBarRangeType: function(e2) {
  var t2 = this, n2 = e2.value;
  return t2.isBarType(e2) && Y(n2) && n2.length >= 2 && n2.every(q);
}, getDataById: function(e2) {
  var t2 = M, n2 = this[t2(808)][t2(483)](e2) || this[t2(1158)].data(e2);
  return (n2 == null ? void 0 : n2[0]) ?? n2;
} };
function fi(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2.api;
  t2 && r2[n2(1158)].flush(true), e2 == null ? void 0 : e2.call(i2);
}
var pi = { load: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.axis, a2 = r2.data, o2 = r2.org, s2 = r2.scale, c2 = t2.append, l2 = { domain: null, currentDomain: null, x: null }, u2 = e2;
  u2 && (t2.filter && (u2 = u2.filter(t2.filter)), (t2.type || t2.types) && u2.forEach(function(e3) {
    var _a2;
    var n3 = ((_a2 = t2[Q(898)]) == null ? void 0 : _a2[e3.id]) || t2.type;
    r2.setTargetType(e3.id, n3);
  }), a2.targets.forEach(function(e3) {
    for (var t3 = Q, n3 = 0; n3 < u2[t3(626)]; n3++) if (e3.id === u2[n3].id) {
      e3.values = c2 ? e3.values.concat(u2[n3].values) : u2[n3].values, u2.splice(n3, 1);
      break;
    }
  }), a2.targets = a2.targets.concat(u2)), r2.updateTargets(a2[n2(517)]), s2.zoom && (l2.x = i2[n2(762)]() ? s2.x[n2(1247)]() : (o2.xScale || s2.x).copy(), l2[n2(216)] = r2.getXDomain(a2[n2(517)]), l2.x.domain(l2.domain), l2.currentDomain = r2.zoom.getDomain(), r2.withinRange(l2.currentDomain, void 0, l2.domain) || (s2.x[n2(216)](l2.domain), s2[n2(234)] = null, r2[n2(476)].eventRect.property(n2(596), null))), r2.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true }), s2.zoom ? (o2.xDomain = l2.domain, o2.xScale = l2.x, i2[n2(762)]() && (l2.currentDomain = r2.getZoomDomainValue(l2.currentDomain), o2[n2(1233)] = r2.getZoomDomainValue(o2.xDomain), o2.xScale = l2.x.domain(o2.xDomain)), r2.updateCurrentZoomTransform(l2.x, l2.currentDomain)) : o2.xScale && o2.xScale.domain(o2[n2(1233)]), r2.updateTypesElements(), fi.call(r2, t2[n2(753)], t2.resizeAfter);
}, loadFromArgs: function(e2) {
  var t2 = M, n2 = this;
  n2.config && (n2.cache[t2(598)](), n2.convertData(e2, function(r2) {
    var i2 = t2, a2 = e2.data || r2;
    e2[i2(440)] && (a2.__append__ = true), a2 && n2.load(n2.convertDataToTargets[i2(872)](n2, a2), e2);
  }));
}, unload: function(e2, t2) {
  var n2 = M, r2, i2 = this, a2 = i2.state, o2 = i2.$el, s2 = i2.$T, c2 = !!((r2 = i2.hasLegendDefsPoint) != null && r2[n2(872)](i2)), l2 = t2, u2 = e2;
  if (i2.cache.reset(), l2 || (l2 = function() {
  }), u2 = u2.filter(function(e3) {
    return i2.hasTarget(i2.data.targets, e3);
  }), !u2 || u2.length === 0) {
    l2();
    return;
  }
  u2.forEach(function(e3) {
    var t3 = n2, r3, s3 = i2.getTargetSelectorSuffix(e3);
    a2.withoutFadeIn[e3] = false, o2.legend && o2.legend.selectAll(`.` + z.legendItem + s3).remove(), i2.data.targets = i2[t3(444)].targets[t3(1038)](function(t4) {
      return t4.id !== e3;
    }), c2 && ((r3 = o2.defs) == null || r3.select(`#` + i2.getDefsPointId(s3)).remove());
  }), a2.hasFunnel && i2.updateFunnel(i2[n2(444)][n2(517)]), a2.hasTreemap && i2.updateTargetsForTreemap(i2.data.targets), i2.updateTypesElements(), s2(o2.svg[n2(236)](u2.map(function(e3) {
    return i2.selectorTarget(e3);
  }))).style(`opacity`, `0`).remove().call(er, l2);
} }, mi = { setExpand: function(e2, t2, n2) {
  var r2 = this, i2 = r2.config;
  r2.$el.circle && i2.point_focus_expand_enabled && r2.expandCircles(e2, t2, n2), r2.expandBarTypeShapes(true, e2, t2, n2);
}, expandBarTypeShapes: function(e2, t2, n2, r2) {
  var i2 = M;
  e2 === void 0 && (e2 = true);
  var a2 = this;
  [i2(951), i2(1002)].filter(function(e3) {
    return a2.$el[e3];
  }).forEach(function(o2) {
    var s2 = i2;
    r2 && a2.$el[o2].classed(I[s2(268)], false), a2.getShapeByIndex(o2, t2, n2).classed(I.EXPANDED, e2);
  });
}, setOverOut: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.state, o2 = a2.hasFunnel, s2 = a2.hasRadar, c2 = a2.hasTreemap, l2 = r2.$el.main, u2 = X(t2);
  if (u2 || t2 !== -1) {
    var d2 = i2[e2 ? `data_onover` : `data_onout`].bind(r2.api);
    if (i2.color_onover && r2.setOverColor(e2, t2, u2), u2) {
      var f2 = r2.getTargetSelectorSuffix(t2.id), p2 = o2 || c2 ? I.target + f2 + ` .` + tn.shape : L[n2(837)] + f2;
      d2(t2, l2[n2(1057)](`.` + p2).node());
    } else if (i2.tooltip_grouped) e2 && (s2 && r2.isPointFocusOnly() ? r2.showCircleFocus(r2.getAllValuesOnIndex(t2, true)) : r2.setExpand(t2, null, true)), !r2.isMultipleX() && l2.selectAll(`.` + tn.shape + `-` + t2)[n2(904)](function(e3) {
      d2(e3, this);
    });
    else {
      var m2 = r2.cache.get(Vr.setOverOut) || [], h2 = l2.selectAll(`.` + tn.shape + `-` + t2).filter(function(e3) {
        return r2.isWithinShape(this, e3);
      }), g2 = h2.filter(function() {
        var e3 = this;
        return m2.every(function(t3) {
          return t3 !== e3;
        });
      });
      if (!e2 || h2.empty() || m2.length === g2[n2(246)]() && g2.nodes().every(function(e3, t3) {
        return e3 !== m2[t3];
      })) for (; m2.length; ) {
        var _2 = m2[n2(204)]();
        i2.data_onout.bind(r2.api)(j(_2).datum(), _2);
      }
      g2.each(function() {
        e2 && (d2(j(this).datum(), this), m2.push(this));
      }), r2.cache[n2(677)](Vr.setOverOut, m2);
    }
  }
}, callOverOutForTouch: function(e2) {
  var t2 = M, n2 = this, r2 = n2.cache.get(Vr[t2(987)]);
  (X(e2) && r2 ? e2.id !== r2.id : e2 !== r2) && ((r2 || q(r2)) && n2.setOverOut(false, r2), (e2 || q(e2)) && n2[t2(602)](true, e2), n2.cache.add(Vr[t2(987)], e2));
}, getDraggableSelection: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2[e2(886)];
  return n2.interaction_enabled && n2.data_selection_draggable && t2.drag ? it().on(`drag`, function(e3) {
    r2.event = e3, t2.drag(ir(e3, this));
  }).on(e2(210), function(n3) {
    var i2 = e2;
    r2.event = n3, t2[i2(605)](ir(n3, this));
  }).on(e2(1234), function(e3) {
    r2.event = e3, t2.dragend();
  }) : function() {
  };
}, dispatchEvent: function(e2, t2, n2) {
  var _a2, _b, _c;
  var r2 = M, i2, a2 = this, o2 = a2.config, s2 = a2.state, c2 = s2.eventReceiver, l2 = s2[r2(266)], u2 = s2.hasFunnel, d2 = s2[r2(184)], f2 = s2.hasTreemap, p2 = a2.$el, m2 = p2.eventRect, h2 = p2.funnel, g2 = p2.radar, _2 = p2.svg, v2 = p2[r2(702)], y2 = (_c = (_b = i2 = (u2 || f2) && c2.rect || d2 && g2[r2(334)].select(`.` + Ut.axis + `-` + t2 + ` text`) || m2 || ((_a2 = a2.getArcElementByIdOrIndex) == null ? void 0 : _a2.call(a2, t2))) == null ? void 0 : _b.node) == null ? void 0 : _c[r2(872)](i2);
  if (y2) {
    var b2 = a2.isMultipleX(), x2 = o2.axis_rotated, S2 = or(y2), C2 = S2[r2(1183)], w2 = S2.left, T2 = S2[r2(299)];
    if (l2 && !d2 && !b2) {
      var E2 = c2.coords[t2];
      E2 ? (C2 = E2.w, w2 += E2.x, T2 += E2.y) : (C2 = 0, w2 = 0, T2 = 0);
    }
    var D2 = w2 + (n2 ? n2[0] : 0) + (b2 || x2 ? 0 : C2 / 2), O2 = T2 + (n2 ? n2[1] : 0) + (x2 ? 4 : 0);
    if (kr(_2)) {
      var k2 = yr(a2[r2(476)].eventRect.node(), D2, O2, false);
      D2 = k2.x, O2 = k2.y;
    }
    var A2 = { screenX: D2, screenY: O2, clientX: D2, clientY: O2, bubbles: d2 };
    (u2 || f2) && (y2 = (h2 ?? v2).node()), Er[/^(mouse|click)/.test(e2) ? `mouse` : `touch`](y2, e2, A2);
  }
}, setDragStatus: function(e2) {
  this.state.dragging = e2;
}, unbindZoomEvent: function() {
  var e2 = M, t2 = this[e2(476)], n2 = t2.eventRect, r2 = t2.zoomResetBtn;
  n2 == null ? void 0 : n2.on(`.zoom wheel.zoom .drag`, null), r2 == null ? void 0 : r2.on(`click`, null).style(`display`, e2(1097));
}, unbindAllEvents: function() {
  var e2 = M, t2, n2 = this, r2 = n2.$el, i2 = r2.arcs, a2 = r2.eventRect, o2 = r2.legend, s2 = r2.region, c2 = r2.svg, l2 = r2.treemap, u2 = n2.brush, d2 = [`wheel`, `click`, `mouseover`, `mousemove`, `mouseout`, `touchstart`, `touchmove`, e2(884), `touchstart.eventRect`, `touchmove.eventRect`, e2(449), `.brush`, `.drag`, `.zoom`, `wheel.zoom`, `dblclick.zoom`].join(` `);
  [c2, a2, s2 == null ? void 0 : s2.list, u2 == null ? void 0 : u2.getSelection(), i2 == null ? void 0 : i2.selectAll(`path`), o2 == null ? void 0 : o2.selectAll(`g`), l2].forEach(function(e3) {
    return e3 == null ? void 0 : e3.on(d2, null);
  }), (t2 = n2.unbindZoomEvent) == null || t2.call(n2);
} }, hi = { categoryName: function(e2) {
  var _a2;
  return ((_a2 = this.config.axis_x_categories) == null ? void 0 : _a2[e2]) ?? e2;
} }, gi = { generateClass: function(e2, t2) {
  return ` ` + e2 + ` ` + (e2 + this.getTargetSelectorSuffix(t2));
}, getClass: function(e2, t2) {
  var n2 = M, r2 = this, i2 = /s$/.test(e2), a2 = /^(area|arc|line|funnel|treemap)s?$/.test(e2), o2 = i2 ? `id` : n2(1244);
  return function(s2) {
    var c2 = n2, l2 = s2.data || s2;
    return ((t2 ? r2.generateClass(an[i2 ? `shapes` : `shape`], l2[o2]) : ``) + r2.generateClass(an[e2], l2[a2 ? `id` : o2]))[c2(825)]();
  };
}, getChartClass: function(e2) {
  var t2 = this;
  return function(n2) {
    var r2 = Q;
    return an[r2(186) + e2] + t2.classTarget((n2.data ? n2[r2(444)] : n2).id);
  };
}, generateExtraLineClass: function() {
  var e2 = this.config.line_classes || [], t2 = [];
  return function(n2) {
    var _a2;
    var r2 = Q, i2 = n2.id || ((_a2 = n2[r2(444)]) == null ? void 0 : _a2.id) || n2;
    return t2.indexOf(i2) < 0 && t2.push(i2), e2[t2.indexOf(i2) % e2.length];
  };
}, classRegion: function(e2, t2) {
  var n2 = M;
  return this.generateClass(an.region, t2) + ` ` + (`class` in e2 ? e2[n2(1093)] : ``);
}, classTarget: function(e2) {
  var t2 = M, n2 = this.config.data_classes[e2], r2 = ``;
  return n2 && (r2 = ` ` + an[t2(1257)] + `-` + n2), this.generateClass(an[t2(1257)], e2) + r2;
}, classFocus: function(e2) {
  var t2 = M;
  return this.classFocused(e2) + this[t2(939)](e2);
}, classFocused: function(e2) {
  return ` ` + (this.state.focusedTargetIds.indexOf(e2.id) >= 0 ? an.focused : ``);
}, classDefocused: function(e2) {
  var t2 = M;
  return ` ` + (this.state.defocusedTargetIds[t2(509)](e2.id) >= 0 ? an.defocused : ``);
}, getTargetSelectorSuffix: function(e2) {
  return (e2 || e2 === 0 ? `-` + e2 : ``).replace(/[\x00-\x20\x7F-\xA0\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, `-`);
}, selectorTarget: function(e2, t2, n2) {
  t2 === void 0 && (t2 = ``), n2 === void 0 && (n2 = ``);
  var r2 = this.getTargetSelectorSuffix(e2);
  return t2 + `.` + (an.target + r2) + ` ` + n2 + `, ` + t2 + `.` + (an.circles + r2) + ` ` + n2;
}, selectorTargets: function(e2, t2) {
  var n2 = this, r2 = e2 || [];
  return r2.length ? r2.map(function(e3) {
    return n2.selectorTarget(e3, t2);
  }) : null;
}, selectorLegend: function(e2) {
  return `.` + (an[M(1228)] + this.getTargetSelectorSuffix(e2));
}, selectorLegends: function(e2) {
  var t2 = this;
  return e2 != null && e2.length ? e2.map(function(e3) {
    return t2.selectorLegend(e3);
  }) : null;
} }, _i = function(e2, t2, n2) {
  var r2 = M, i2 = j(e2.cloneNode(true));
  return i2.attr(`id`, n2).insert(r2(1010), `:first-child`)[r2(919)](`width`, i2.attr(`width`)).attr(`height`, i2.attr(`height`)).style(`fill`, t2), { id: n2, node: i2.node() };
};
function vi(e2) {
  var t2 = Vr.colorPattern, n2 = gn.body, r2 = n2[t2];
  if (!r2) {
    var i2 = `;`, a2 = e2.classed(qt.colorPattern, true).style(`background-image`);
    e2.classed(qt.colorPattern, false), a2.indexOf(i2) > -1 && (r2 = a2.replace(/url[^#]*|["'()]|(\s|%20)/g, ``).split(i2).map(function(e3) {
      var t3 = Q;
      return e3.trim()[t3(1077)](/[\"'\s]/g, ``);
    }).filter(Boolean), n2[t2] = r2);
  }
  return r2;
}
var yi = [`#1f77b4`, `#ff7f0e`, `#2ca02c`, `#d62728`, `#9467bd`, `#8c564b`, `#e377c2`, `#7f7f7f`, M(1005), `#17becf`], bi = { generateColor: function() {
  var e2 = M, t2 = this, n2 = t2.$el, r2 = t2[e2(636)], i2 = [], a2 = r2.area_linearGradient || r2.bar_linearGradient || r2.point_radialGradient, o2 = Zn(r2[e2(205)]) ? r2.color_pattern : be(vi(n2.chart) || yi)[e2(1091)](), s2 = o2;
  if (G(r2.color_tiles)) {
    var c2 = r2.color_tiles.bind(t2.api)(), l2 = o2.map(function(e3, n3) {
      var r3 = e3.replace(/[#\(\)\s,]/g, ``), i3 = t2.state.datetimeId + `-pattern-` + r3 + `-` + n3;
      return _i(c2[n3 % c2.length], e3, i3);
    });
    o2 = l2.map(function(e3) {
      return `url(#` + e3.id + `)`;
    }), t2.patterns = l2;
  }
  return function(n3) {
    var _a2;
    var c3 = e2, l3 = r2.data_colors, u2 = r2.data_color, d2 = n3.id || ((_a2 = n3[c3(444)]) == null ? void 0 : _a2.id) || n3, f2 = t2[c3(224)](d2, [c3(760), `spline`, `step`]) || !r2.data_types[d2], p2;
    if (G(l3[d2]) ? p2 = l3[d2].bind(t2.api)(n3) : l3[d2] ? p2 = l3[d2] : (i2.indexOf(d2) < 0 && i2.push(d2), p2 = f2 ? s2[i2.indexOf(d2) % s2.length] : o2[i2.indexOf(d2) % o2.length], l3[d2] = p2), p2 = G(u2) ? u2.call(t2.api, p2, n3) : p2, a2) {
      var m2 = t2.$el.defs.selectAll(`[id$='-gradient` + t2.getTargetSelectorSuffix(d2) + `'] stop`), h2;
      m2.each(function(e3, t3) {
        var n4 = c3;
        h2 = t3 === 0 ? this.style[n4(454)] : this[n4(521)].stopColor === h2;
      }), h2 === true && m2.attr(`stop-color`, p2);
    }
    return p2;
  };
}, generateLevelColor: function() {
  var e2 = M, t2 = this[e2(636)], n2 = t2.color_pattern, r2 = t2.color_threshold, i2 = r2[e2(208)] === `value`, a2 = r2[e2(769)] || 100, o2 = r2.values && r2.values[e2(626)] ? r2.values : [];
  return Zn(r2) ? function(e3) {
    for (var t3 = i2 ? e3 : e3 * 100 / a2, r3 = n2[n2.length - 1], s2 = 0, c2 = o2.length; s2 < c2; s2++) if (t3 <= o2[s2]) {
      r3 = n2[s2];
      break;
    }
    return r3;
  } : null;
}, generateTextBGColorFilter: function(e2, t2) {
  t2 === void 0 && (t2 = { x: 0, y: 0, width: 1, height: 1 });
  var n2 = this, r2 = n2.$el.defs, i2 = n2.state;
  if (e2) {
    var a2 = [];
    K(e2) ? a2.push(``) : X(e2) ? a2 = Object.keys(e2) : G(e2) && (a2 = n2.mapToTargetIds()), a2.forEach(function(a3) {
      var o2 = Q, s2 = i2.datetimeId + o2(472) + n2.getTargetSelectorSuffix(a3) + (K(e2) ? n2.getTargetSelectorSuffix(e2) : ``), c2 = Bn(a3 === `` ? e2 : (e2 == null ? void 0 : e2[a3]) || ``);
      r2.select(`#` + s2).empty() && r2.append(o2(1038))[o2(919)](`x`, t2.x).attr(`y`, t2.y)[o2(919)](o2(1183), t2.width)[o2(919)](`height`, t2.height).attr(`id`, s2).html(`<feFlood flood-color="` + c2 + `" />
							<feComposite in="SourceGraphic" />`);
    });
  }
}, getGradienColortUrl: function(e2) {
  var t2 = M;
  return t2(289) + this[t2(886)].datetimeId + `-gradient` + this.getTargetSelectorSuffix(e2) + `)`;
}, updateLinearGradient: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2[e2(444)].targets, i2 = t2.state[e2(1082)], a2 = t2.$el[e2(1008)];
  r2[e2(743)](function(r3) {
    var o2 = e2, s2 = i2 + `-gradient` + t2.getTargetSelectorSuffix(r3.id), c2 = t2.hasPointType() && n2.point_radialGradient, l2 = t2.isAreaType(r3) && `area` || t2.isBarType(r3) && o2(951);
    if ((c2 || l2) && a2.select(`#` + s2).empty()) {
      var u2 = t2[o2(309)](r3), d2 = { defs: null, stops: [] };
      if (c2) {
        var f2 = c2.cx, p2 = f2 === void 0 ? 0.3 : f2, m2 = c2.cy, h2 = m2 === void 0 ? 0.3 : m2, g2 = c2.r, _2 = g2 === void 0 ? 0.7 : g2, v2 = c2.stops, y2 = v2 === void 0 ? [[0.1, u2, 0], [0.9, u2, 1]] : v2;
        d2[o2(1030)] = y2, d2.defs = a2.append(`radialGradient`)[o2(919)](`id`, `` + s2).attr(`cx`, p2).attr(`cy`, h2)[o2(919)](`r`, _2);
      } else {
        var b2 = n2.axis_rotated, x2 = n2[l2 + `_linearGradient`], S2 = x2.x, C2 = S2 === void 0 ? b2 ? [1, 0] : [0, 0] : S2, w2 = x2.y, T2 = w2 === void 0 ? b2 ? [0, 0] : [0, 1] : w2, E2 = x2[o2(1030)], y2 = E2 === void 0 ? [[0, u2, 1], [1, u2, 0]] : E2;
        d2.stops = y2, d2.defs = a2.append(o2(530))[o2(919)](`id`, `` + s2).attr(`x1`, C2[0]).attr(`x2`, C2[1]).attr(`y1`, T2[0]).attr(`y2`, T2[1]);
      }
      d2.stops.forEach(function(e3) {
        var n3 = o2, i3 = e3[0], a3 = e3[1], s3 = e3[2], c3 = G(a3) ? a3.bind(t2.api)(r3.id) : a3;
        d2.defs && d2[n3(1008)].append(`stop`).attr(`offset`, i3).attr(n3(643), c3 || u2).attr(`stop-opacity`, s3);
      });
    }
  });
}, setOverColor: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2[n2(476)][n2(938)], o2 = i2.color_onover, s2 = e2 ? o2 : r2.color;
  X(s2) ? s2 = function(e3) {
    var t3 = n2, i3 = e3.id;
    return i3 in o2 ? o2[i3] : r2[t3(309)](i3);
  } : K(s2) ? s2 = function() {
    return o2;
  } : G(o2) && (s2 = s2.bind(r2.api)), a2.selectAll(X(t2) ? `.` + L.arc + r2.getTargetSelectorSuffix(t2.id) : `.` + tn.shape + `-` + t2).style(`fill`, s2);
} }, xi = { getYDomainMinMax: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2[n2(501)], a2 = r2.config, o2 = t2 === `min`, s2 = a2.data_groups, c2 = r2.mapToIds(e2), l2 = Ir(c2), u2 = r2.getValuesAsIdKeyed(e2);
  if (s2.length > 0) {
    var d2 = r2[n2(1132) + (o2 ? `Negative` : `Positive`) + `ValueInTargets`](e2), f2 = new Map(c2.map(function(e3) {
      return [e3, i2.getId(e3)];
    }));
    s2.forEach(function(e3) {
      var t3 = n2, r3 = e3.filter(function(e4) {
        return l2.has(e4);
      });
      if (r3[t3(626)]) {
        var i3 = r3[0], a3 = f2.get(i3);
        d2 && u2[i3] && (u2[i3] = u2[i3][t3(279)](function(e4) {
          return (o2 ? e4 < 0 : e4 > 0) ? e4 : 0;
        })), r3[t3(1038)](function(e4, t4) {
          return t4 > 0;
        }).forEach(function(e4) {
          if (u2[e4]) {
            var t4 = f2.get(e4);
            u2[e4].forEach(function(e5, n3) {
              var r4 = +e5;
              t4 === a3 && !(d2 && (o2 ? r4 > 0 : r4 < 0)) && (u2[i3][n3] += r4);
            });
          }
        });
      }
    });
  }
  return Tr(t2, Object.keys(u2).map(function(e3) {
    return Tr(t2, u2[e3]);
  }));
}, isHiddenTargetWithYDomain: function(e2) {
  var t2 = M, n2 = this;
  return n2.state.hiddenTargetIds[t2(947)](function(t3) {
    return n2.axis.getId(t3) === e2;
  });
}, getYDomain: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2.axis, o2 = i2.config, s2 = i2.scale, c2 = `axis_` + t2;
  if (i2.isStackNormalized() && e2.filter(function(e3) {
    return a2.getId(e3.id) === t2;
  }).map(function(e3) {
    return e3.id;
  })[r2(947)](function(e3) {
    return i2[r2(1242)](e3);
  })) return [0, 100];
  var l2 = (s2 == null ? void 0 : s2[t2]) && s2[t2].type === `log`, u2 = e2.filter(function(e3) {
    return a2.getId(e3.id) === t2;
  }), d2 = n2 ? i2.filterByXDomain(u2, n2) : u2;
  if (d2[r2(626)] === 0) return i2.isHiddenTargetWithYDomain(t2) ? s2[t2].domain() : t2 === `y2` ? s2.y.domain() : i2.getYDomain(e2, `y2`, n2);
  var f2 = o2[c2 + r2(941)], p2 = o2[c2 + `_max`], m2 = o2[c2 + `_center`], h2 = o2[c2 + `_inverted`], g2 = i2.hasDataLabel() && o2[r2(1088)], _2 = i2.hasDataLabel() && !o2[r2(1088)], v2 = i2.getYDomainMinMax(d2, `min`), y2 = i2.getYDomainMinMax(d2, `max`), b2 = F([$.BAR, $[r2(1123)], $.SCATTER], Wr[r2(582)], true).some(function(e3) {
    var t3 = r2, n3 = e3[t3(509)](`area`) > -1 ? `area` : e3;
    return i2[t3(1013)](e3, d2, true) && o2[n3 + `_zerobased`];
  });
  v2 = W(f2) ? f2 : W(p2) ? v2 <= p2 ? v2 : p2 - 10 : v2, y2 = W(p2) ? p2 : W(f2) ? f2 <= y2 ? y2 : f2 + 10 : y2, isNaN(v2) && (v2 = 0), isNaN(y2) && (y2 = v2), v2 === y2 && (v2 < 0 ? y2 = 0 : v2 = 0);
  var x2 = v2 >= 0 && y2 >= 0, S2 = v2 <= 0 && y2 <= 0;
  (W(f2) && x2 || W(p2) && S2) && (b2 = false), b2 && (x2 && (v2 = 0), S2 && (y2 = 0));
  var C2 = Math[r2(783)](y2 - v2), w2 = { top: C2 * 0.1, bottom: C2 * 0.1 };
  if (J(m2)) {
    var T2 = Math.max(Math.abs(v2), Math[r2(783)](y2));
    y2 = m2 + T2, v2 = m2 - T2;
  }
  if (g2) {
    var E2 = qn(s2.y.range()), D2 = i2.getDataLabelLength(v2, y2, `width`).map(function(e3) {
      var t3 = e3 / E2;
      return isFinite(t3) ? t3 : 0;
    });
    [r2(717), `top`].forEach(function(e3, t3) {
      w2[e3] += C2 * (D2[t3] / (1 - D2[0] - D2[1]));
    });
  } else if (_2) {
    var O2 = i2.getDataLabelLength(v2, y2, r2(1113));
    [r2(717), `top`].forEach(function(e3, t3) {
      w2[e3] += i2.convertPixelToScale(`y`, O2[t3], C2);
    });
  }
  w2 = i2.getResettedPadding(w2);
  var k2 = o2[c2 + `_padding`];
  Zn(k2) && [`bottom`, `top`][r2(743)](function(e3) {
    w2[e3] = a2.getPadding(k2, e3, w2[e3], C2);
  }), b2 && (x2 && (w2.bottom = v2), S2 && (w2.top = -y2));
  var A2 = l2 ? [v2, y2].map(function(e3) {
    return e3 < 0 ? 0 : e3;
  }) : [v2 - w2[r2(717)], y2 + w2.top];
  return h2 ? A2.reverse() : A2;
}, getXDomainMinMax: function(e2, t2) {
  var n2, r2 = this, i2 = r2.config[`axis_x_` + t2], a2 = Tr(t2, e2.map(function(e3) {
    var n3 = Q;
    return Tr(t2, e3.values[n3(279)](function(e4) {
      return e4.x;
    }));
  })), o2 = X(i2) ? i2.value : i2;
  return o2 = J(o2) && (n2 = r2.axis) != null && n2.isTimeSeries() ? Or.bind(this)(o2) : o2, X(i2) && i2.fit && (t2 === `min` && o2 < a2 || t2 === `max` && o2 > a2) && (o2 = void 0), J(o2) ? o2 : a2;
}, getXDomainPadding: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.axis, a2 = r2.config.axis_x_padding, o2 = i2[n2(199)]() && t2, s2 = qn(e2), c2;
  if (i2.isCategorized() || o2) c2 = 0;
  else if (r2.hasType(`bar`)) {
    var l2 = r2.getMaxDataCount();
    c2 = l2 > 1 ? s2 / (l2 - 1) / 2 : 0.5;
  } else c2 = r2.getResettedPadding(s2 * 0.01);
  var u2 = q(a2) ? { left: a2, right: a2 } : a2, d2 = u2[n2(300)], f2 = d2 === void 0 ? c2 : d2, p2 = u2.right, m2 = p2 === void 0 ? c2 : p2;
  if (a2.unit === `px`) {
    var h2 = Math.abs(s2 + s2 * 0.2);
    f2 = i2.getPadding(a2, `left`, c2, h2), m2 = i2[n2(1156)](a2, `right`, c2, h2);
  } else {
    var g2 = s2 + f2 + m2;
    if (o2 && g2) {
      var _2 = s2 / t2 / g2;
      f2 = f2 / g2 / _2, m2 = m2 / g2 / _2;
    }
  }
  return { left: f2, right: m2 };
}, getXDomain: function(e2) {
  var t2 = M, n2 = this, r2 = n2.axis, i2 = n2.config, a2 = n2.scale.x, o2 = i2.axis_x_inverted, s2 = [n2.getXDomainMinMax(e2, `min`), n2.getXDomainMinMax(e2, `max`)], c2 = s2[0], l2 = c2 === void 0 ? 0 : c2, u2 = s2[1], d2 = u2 === void 0 ? 0 : u2;
  if (a2.type !== t2(1098)) {
    var f2 = r2.isCategorized(), p2 = r2.isTimeSeries(), m2 = n2[t2(1133)](s2), h2 = s2[0], g2 = s2[1];
    h2 - g2 === 0 && !f2 && (p2 ? (h2 = new Date(h2.getTime() * 0.5), g2 = new Date(g2.getTime() * 1.5)) : (h2 = h2 === 0 ? 1 : h2 * 0.5, g2 = g2 === 0 ? -1 : g2 * 1.5)), (h2 || h2 === 0) && (l2 = p2 ? new Date(h2.getTime() - m2.left) : h2 - m2.left), (g2 || g2 === 0) && (d2 = p2 ? new Date(g2.getTime() + m2.right) : g2 + m2[t2(308)]);
  }
  return o2 ? [d2, l2] : [l2, d2];
}, updateXDomain: function(e2, t2, n2, r2, i2) {
  var a2 = M, o2, s2 = this, c2 = s2.config, l2 = s2.org, u2 = s2[a2(802)], d2 = u2.x, f2 = u2.subX, p2 = c2.zoom_enabled;
  if (n2 && (d2.domain(i2 || wr(s2.getXDomain(e2), !c2[a2(495)])), l2.xDomain = d2[a2(216)](), f2.domain(d2.domain()), (o2 = s2.brush) == null || o2.scale(f2)), t2) {
    var m2 = i2 || !s2.brush || ur(s2) ? l2[a2(1233)] : ar(s2).map(f2.invert);
    d2.domain(m2);
  }
  return (n2 || t2) && p2 && s2.zoom.updateScaleExtent(), r2 && d2.domain(s2.trimXDomain(d2.orgDomain())), d2.domain();
}, trimXDomain: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(636)].axis_x_inverted, i2 = n2.getZoomDomain(), a2 = i2[0], o2 = i2[1];
  return (r2 ? e2[0] >= a2 : e2[0] <= a2) && (e2[1] = +e2[1] + (a2 - e2[0]), e2[0] = a2), (r2 ? e2[1] <= o2 : e2[1] >= o2) && (e2[0] = +e2[0] - (e2[1] - o2), e2[1] = o2), e2;
}, getZoomDomain: function(e2, t2) {
  var n2 = M;
  e2 === void 0 && (e2 = `zoom`), t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2.config, a2 = r2.scale, o2 = r2[n2(815)], s2 = t2 && a2[e2] ? a2[e2].domain() : o2.xDomain, c2 = s2[0], l2 = s2[1];
  return e2 === `zoom` && (J(i2.zoom_x_min) && (c2 = Tr(`min`, [c2, i2.zoom_x_min])), J(i2.zoom_x_max) && (l2 = Tr(n2(769), [l2, i2[n2(854)]]))), [c2, l2];
}, getZoomDomainValue: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config;
  if (n2[t2(501)].isCategorized() && Array.isArray(e2)) {
    var i2 = r2.axis_x_inverted;
    return e2.map(function(e3, t3) {
      return Number(e3) + (t3 === 0 ? +i2 : +!i2);
    });
  }
  return e2;
}, convertPixelToScale: function(e2, t2, n2) {
  var r2 = this, i2 = r2.config, a2 = r2.state, o2 = i2.axis_rotated;
  return n2 * (t2 / a2[e2 === `x` ? o2 ? `height` : `width` : o2 ? `width` : `height`]);
}, withinRange: function(e2, t2, n2) {
  var r2 = M;
  t2 === void 0 && (t2 = [0, 0]);
  var i2 = this.config.axis_x_inverted, a2 = n2, o2 = a2[0], s2 = a2[1];
  if (Array.isArray(e2)) {
    var c2 = F([], e2, true);
    if (i2 && c2.reverse(), c2[0] < c2[1]) return e2[r2(278)](function(n3, r3) {
      return (r3 === 0 ? i2 ? +n3 <= o2 : +n3 >= o2 : i2 ? +n3 >= s2 : +n3 <= s2) && !e2.every(function(e3, n4) {
        return e3 === t2[n4];
      });
    });
  }
  return false;
} };
function Si(e2, t2, n2) {
  var r2 = e2.config, i2 = `axis_` + t2 + `_tick_format`;
  return (r2[i2] ? r2[i2] : e2.defaultValueFormat).call(e2.api, n2);
}
var Ci = { yFormat: function(e2) {
  return Si(this, `y`, e2);
}, y2Format: function(e2) {
  return Si(this, `y2`, e2);
}, getDefaultValueFormat: function() {
  var e2 = M, t2 = this, n2 = t2.defaultArcValueFormat, r2 = t2.yFormat, i2 = t2.y2Format, a2 = t2.hasArcType(null, [e2(1146), `polar`, `radar`]);
  return function(o2, s2, c2) {
    var l2 = e2;
    return (a2 ? n2 : t2.axis && t2.axis.getId(c2) === `y2` ? i2 : r2)[l2(872)](t2, o2, s2);
  };
}, defaultValueFormat: function(e2) {
  return Y(e2) ? e2.join(`~`) : W(e2) ? +e2 : ``;
}, defaultArcValueFormat: function(e2, t2) {
  return (t2 * 100).toFixed(1) + `%`;
}, defaultPolarValueFormat: function(e2) {
  return `` + e2;
}, dataLabelFormat: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config.data_labels, i2 = function(e3) {
    var t3 = `~`, n3 = e3;
    return Y(e3) ? n3 = e3.join(t3) : X(e3) && (n3 = Object.values(e3).join(t3)), n3;
  }, a2 = i2;
  return G(r2.format) ? a2 = r2.format : Jn(r2.format) && (a2 = r2[t2(1112)][e2] ? r2.format[e2] === true ? i2 : r2[t2(1112)][e2] : function() {
    return ``;
  }), a2.bind(n2.api);
} };
function wi(e2) {
  var t2 = M, n2 = this, r2 = n2.getDataById(e2);
  return n2.levelColor ? n2.levelColor(r2.values[0][t2(461)]) : n2.color(r2);
}
function Ti(e2, t2) {
  t2 === void 0 && (t2 = true);
  var n2 = this.config, r2 = n2.data_names[e2] ?? e2;
  return t2 && G(n2.legend_format) && (r2 = n2.legend_format(r2, e2 === r2 ? void 0 : e2)), r2;
}
function Ei(e2, t2) {
  if (!(!t2 || t2.empty())) {
    var n2 = [];
    t2.each(function(e3) {
      n2.push({ id: e3, node: this });
    });
    var r2 = Lr(n2, function(e3) {
      return e3.id;
    }, function(e3) {
      return e3[Q(376)];
    });
    e2.cache.add(Vr.legendItemMap, r2);
  }
}
var Di = { initLegend: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.$el;
  t2[e2(209)] = {}, t2.state.legendHasRendered = false, n2.legend_show ? (n2.legend_contents_bindto || (r2[e2(876)] = t2.$el[e2(1220)].append(`g`).classed(z.legend, true)[e2(919)](e2(310), t2.getTranslate(`legend`))), t2.updateLegend()) : t2.state.hiddenLegendIds = t2[e2(1096)](t2[e2(444)].targets);
}, updateLegend: function(e2, t2, n2) {
  var r2 = M, i2, a2 = this, o2 = a2.config, s2 = a2.state, c2 = a2.scale, l2 = a2.$el, u2 = t2 || { withTransform: false, withTransitionForTransform: false, withTransition: false };
  u2.withTransition = Qn(u2, `withTransition`, true), u2[r2(804)] = Qn(u2, r2(804), true), o2.legend_contents_bindto && o2.legend_contents_template ? a2.updateLegendTemplate() : s2.hasTreemap || a2.updateLegendElement(e2 || a2.mapToIds(a2.data.targets), u2, n2), (i2 = l2.legend) == null || i2[r2(236)](`.` + z.legendItem)[r2(901)](z.legendItemHidden, function(e3) {
    var t3 = r2, n3 = !a2.isTargetToShow(e3);
    return n3 && (this[t3(521)].opacity = null), n3;
  }), a2.updateScales(false, !c2.zoom), a2.updateSvgSize(), a2.transformAll(u2[r2(804)], n2), s2.legendHasRendered = true;
}, updateLegendTemplate: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2[e2(476)], i2 = j(n2.legend_contents_bindto), a2 = n2[e2(194)];
  if (!i2.empty()) {
    var o2 = t2.mapToIds(t2.data.targets), s2 = [], c2 = ``;
    o2.forEach(function(n3) {
      var r3 = e2, i3 = G(a2) ? Bn(a2.call(t2[r3(1158)], n3, t2.color(n3), t2.api[r3(444)](n3)[0][r3(277)])) : Dr(a2, { COLOR: t2[r3(309)](n3), TITLE: n3 });
      i3 && (s2.push(n3), c2 += i3);
    });
    var l2 = i2[e2(238)](c2).selectAll(function() {
      return this.childNodes;
    }).data(s2);
    t2.setLegendItem(l2), r2.legend = i2;
  }
}, updateSizeForLegend: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(636)], i2 = n2.state, a2 = i2.isLegendTop, o2 = i2[t2(217)], s2 = i2.isLegendRight, c2 = i2.isLegendInset, l2 = i2.current, u2 = e2.width, d2 = e2.height, f2 = { top: a2 ? n2.getCurrentPaddingByDirection(`top`) + r2.legend_inset_y + 5.5 : l2.height - d2 - n2.getCurrentPaddingByDirection(`bottom`) - r2.legend_inset_y, left: o2 ? n2.getCurrentPaddingByDirection(`left`) + r2.legend_inset_x + 0.5 : l2.width - u2 - n2.getCurrentPaddingByDirection(`right`) - r2.legend_inset_x + 0.5 };
  n2.state.margin3 = { top: s2 ? 0 : c2 ? f2.top : l2.height - d2, right: NaN, bottom: 0, left: s2 ? l2.width - u2 : c2 ? f2.left : 0 };
}, transformLegend: function(e2) {
  var t2 = M, n2 = this, r2 = n2.$el.legend, i2 = n2.$T;
  i2(r2, e2).attr(`transform`, n2[t2(379)](`legend`));
}, updateLegendStep: function(e2) {
  var t2 = M;
  this.state[t2(679)] = e2;
}, updateLegendItemWidth: function(e2) {
  this.state.legendItemWidth = e2;
}, updateLegendItemHeight: function(e2) {
  this.state.legendItemHeight = e2;
}, updateLegendItemColor: function(e2, t2) {
  var n2 = M, r2 = this;
  if (r2.$el.legend) {
    var i2 = r2[n2(1070)](e2);
    i2 && j(i2).select(`line`).style(`stroke`, t2);
  }
}, getLegendWidth: function() {
  var e2 = M, t2 = this, n2 = t2.state, r2 = n2.current.width, i2 = n2.isLegendRight, a2 = n2.isLegendInset, o2 = n2.legendItemWidth, s2 = n2.legendStep;
  return t2.config[e2(533)] ? i2 || a2 ? o2 * (s2 + 1) : r2 : 0;
}, getLegendHeight: function() {
  var _a2;
  var e2 = M, t2 = this, n2 = t2.state, r2 = n2.current, i2 = n2.isLegendRight, a2 = n2[e2(666)], o2 = n2.legendStep, s2 = ((_a2 = t2.config[e2(1099)]) == null ? void 0 : _a2.mode) === `fit`;
  return t2.config.legend_show ? i2 ? r2[e2(1113)] : Math.max(s2 ? 10 : 20, a2) * (o2 + 1) : 0;
}, opacityForUnfocusedLegend: function(e2) {
  return e2.classed(z.legendItemHidden) ? null : `0.3`;
}, toggleFocusLegend: function(e2, t2) {
  var n2 = this, r2 = n2.$el.legend, i2 = n2.$T, a2 = n2.mapToTargetIds(e2);
  r2 && i2(r2.selectAll(`.` + z.legendItem).filter(function(e3) {
    return a2[Q(509)](e3) >= 0;
  }).classed(B.legendItemFocused, t2)).style(`opacity`, function() {
    return t2 ? null : n2.opacityForUnfocusedLegend.call(n2, j(this));
  });
}, revertLegend: function() {
  var e2 = M, t2 = this, n2 = t2.$el[e2(876)], r2 = t2.$T;
  n2 && r2(n2[e2(236)](`.` + z.legendItem).classed(B.legendItemFocused, false)).style(`opacity`, null);
}, showLegend: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.$el, a2 = n2.$T;
  r2.legend_show || (r2.legend_show = true, i2.legend ? i2.legend.style(t2(1253), null) : n2.initLegend(), !n2.state.legendHasRendered && n2.updateLegend()), n2[t2(1103)](e2), a2(i2.legend.selectAll(n2.selectorLegends(e2)).style(`visibility`, null)).style(t2(363), null);
}, hideLegend: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.$el[t2(876)];
  r2.legend_show && Xn(e2) && (r2[t2(533)] = false, i2.style(`visibility`, t2(429))), n2.addHiddenLegendIds(e2), i2.selectAll(n2.selectorLegends(e2)).style(`opacity`, `0`).style(t2(1253), `hidden`);
}, getLegendItemTextBox: function(e2, t2) {
  var n2 = this, r2 = n2.cache, i2 = n2.state, a2, o2 = Vr.legendItemTextBox;
  return e2 && (a2 = !i2.redrawing && r2.get(o2) || {}, a2[e2] || (a2[e2] = n2.getTextRect(t2, z.legendItem), r2.add(o2, a2)), a2 = a2[e2]), a2;
}, setLegendItem: function(e2) {
  var t2 = M, n2 = this, r2 = n2.$el, i2 = n2.api, a2 = n2.config, o2 = n2.state, s2 = o2.inputType === `touch`, c2 = n2.hasType(`gauge`), l2 = a2[t2(820)], u2 = a2.legend_item_interaction;
  e2.attr(t2(1093), function(e3) {
    var t3 = j(this);
    return (!t3.empty() && t3.attr(`class`) || ``) + n2.generateClass(z.legendItem, e3);
  }).style(`visibility`, function(e3) {
    var r3 = t2;
    return n2.isLegendToShow(e3) ? null : r3(429);
  }), a2.interaction_enabled && (l2 && [[`.` + z.legendItem, t2(958)], [`.` + z.legendItem + ` text`, t2(1181)], [`.` + z.legendItemPoint + ` text`, `pointer-events:none`], [`.` + z.legendItemTile, `pointer-events:none`], [`.` + z.legendItemEvent, t2(680)]].forEach(function(e3) {
    var t3 = e3[0], i3 = e3[1];
    n2.setCssRule(false, t3, [i3])(r2.legend);
  }), e2.on(u2.dblclick ? `dblclick` : `click`, u2 || G(a2.legend_item_onclick) ? function(e3, r3) {
    var c3 = t2;
    if (!Z(a2[c3(390)], i2, r3, !o2.hiddenTargetIds.includes(r3))) {
      var l3 = e3.altKey, u3 = e3.target;
      e3.type === `dblclick` || l3 ? o2[c3(505)].length && u3[c3(298)].getAttribute(`class`).indexOf(z.legendItemHidden) === -1 ? i2.show() : (i2.hide(), i2.show(r3)) : (i2.toggle(r3), j(this).classed(B[c3(301)], false));
    }
    s2 && n2[c3(270)]();
  } : null), !s2 && e2.on(`mouseout`, u2 || G(a2.legend_item_onout) ? function(e3, r3) {
    var s3 = t2;
    Z(a2[s3(386)], i2, r3, !o2.hiddenTargetIds.includes(r3)) || (j(this).classed(B.legendItemFocused, false), c2 && n2.undoMarkOverlapped(n2, `.` + R.gaugeValue), n2[s3(1158)][s3(319)]());
  } : null).on(`mouseover`, u2 || G(a2[t2(295)]) ? function(e3, r3) {
    var s3 = t2;
    Z(a2[s3(295)], i2, r3, !o2.hiddenTargetIds.includes(r3)) || (j(this).classed(B[s3(301)], true), c2 && n2.markOverlapped(r3, n2, `.` + R.gaugeValue), !o2.transiting && n2.isTargetToShow(r3) && i2.focus(r3));
  } : null), !e2[t2(1222)]() && e2.on(`click mouseout mouseover`) && e2.style(`cursor`, n2[t2(650)](t2(980)))), Ei(n2, e2);
}, getLegendItemById: function(e2) {
  var _a2, _b;
  var t2 = M, n2 = this, r2 = n2[t2(808)].get(Vr[t2(174)]);
  return r2 && r2 instanceof Map ? r2[t2(483)](e2) || null : ((_b = (_a2 = n2.$el.legend) == null ? void 0 : _a2.selectAll(`.` + z.legendItem).filter(function(t3) {
    return t3 === e2;
  })) == null ? void 0 : _b.node()) || null;
}, updateLegendElement: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2[n2(886)], o2 = r2.$el[n2(876)], s2 = r2.$T, c2 = i2.legend_item_tile_type !== `circle`, l2 = i2.legend_item_tile_r, u2 = { width: c2 ? i2.legend_item_tile_width : l2 * 2, height: c2 ? i2.legend_item_tile_height : l2 * 2 }, d2 = { padding: { top: 4, right: 10 }, max: { width: 0, height: 0 }, posMin: 10, step: 0, tileWidth: u2.width + 5, totalLength: 0 }, f2 = { offsets: {}, widths: {}, heights: {}, margins: [0], steps: {} }, p2, m2, h2, g2 = e2[n2(1038)](function(e3) {
    return !J(i2[n2(242)][e3]) || i2.data_names[e3] !== null;
  }), _2 = t2.withTransition, v2 = r2.getUpdateLegendPositions(g2, d2, f2);
  a2.isLegendInset && (d2.step = i2.legend_inset_step ? i2.legend_inset_step : g2.length, r2.updateLegendStep(d2.step)), a2.isLegendRight ? (p2 = function(e3) {
    return d2.max.width * f2.steps[e3];
  }, m2 = function(e3) {
    return f2[n2(785)][f2.steps[e3]] + f2.offsets[e3];
  }) : a2[n2(349)] ? (p2 = function(e3) {
    var t3 = n2;
    return d2.max.width * f2[t3(725)][e3] + 10;
  }, m2 = function(e3) {
    return f2.margins[f2.steps[e3]] + f2.offsets[e3];
  }) : (p2 = function(e3) {
    return f2.margins[f2.steps[e3]] + f2.offsets[e3];
  }, m2 = function(e3) {
    var t3 = n2;
    return d2.max[t3(1113)] * f2.steps[e3];
  });
  var y2 = { xText: function(e3, t3) {
    return p2(e3, t3) + 4 + u2.width;
  }, xRect: function(e3, t3) {
    return p2(e3, t3);
  }, x1Tile: function(e3, t3) {
    return p2(e3, t3) - 2;
  }, x2Tile: function(e3, t3) {
    return p2(e3, t3) - 2 + u2.width;
  }, yText: function(e3, t3) {
    return m2(e3, t3) + 9;
  }, yRect: function(e3, t3) {
    return m2(e3, t3) - 5;
  }, yTile: function(e3, t3) {
    return m2(e3, t3) + 4;
  } };
  r2[n2(627)](g2, u2, v2, y2), h2 = o2.select(`.` + z.legendBackground + ` rect`), a2.isLegendInset && d2[n2(769)].width > 0 && h2[n2(246)]() === 0 && (h2 = o2[n2(394)](`g`, `.` + z.legendItem).attr(`class`, z.legendBackground).append(`rect`)), i2.legend_tooltip && o2.selectAll(`title`)[n2(444)](g2).text(function(e3) {
    return Ti.bind(r2)(e3, false);
  }), s2(o2.selectAll(n2(601)).data(g2).text(function(e3) {
    return Ti[n2(1194)](r2)(e3);
  }).each(function(e3, t3) {
    v2(this, e3, t3);
  }), _2).attr(`x`, y2.xText).attr(`y`, y2.yText), s2(o2.selectAll(`rect.` + z.legendItemEvent).data(g2), _2).attr(n2(1183), function(e3) {
    return f2[n2(622)][e3];
  }).attr(`height`, function(e3) {
    return f2.heights[e3];
  }).attr(`x`, y2.xRect).attr(`y`, y2.yRect), r2[n2(527)](g2, _2, y2), h2 && s2(h2, _2)[n2(919)](`height`, r2.getLegendHeight() - 12).attr(`width`, d2.max.width * (d2[n2(1017)] + 1) + 10), r2.updateLegendItemWidth(d2.max.width), r2.updateLegendItemHeight(d2.max.height), r2.updateLegendStep(d2.step);
}, getUpdateLegendPositions: function(e2, t2, n2) {
  var r2 = this, i2 = r2.config, a2 = r2.state, o2 = a2.isLegendRight || a2.isLegendInset;
  return function(s2, c2, l2) {
    var u2 = Q, d2 = l2 === 0, f2 = l2 === e2.length - 1, p2 = r2.getLegendItemTextBox(c2, s2), m2 = p2.width + t2.tileWidth + (f2 && !o2 ? 0 : t2.padding.right) + i2.legend_padding, h2 = p2[u2(1113)] + t2.padding.top, g2 = o2 ? h2 : m2, _2 = o2 ? r2.getLegendHeight() : r2.getLegendWidth(), v2, y2 = function(e3, r3) {
      var i3 = u2;
      r3 || (v2 = (_2 - t2.totalLength - g2) / 2, v2 < t2.posMin && (v2 = (_2 - g2) / 2, t2.totalLength = 0, t2[i3(1017)]++)), n2.steps[e3] = t2[i3(1017)], n2.margins[t2.step] = a2.isLegendInset ? 10 : v2, n2.offsets[e3] = t2.totalLength, t2[i3(1184)] += g2;
    };
    if (d2 && (t2.totalLength = 0, t2.step = 0, t2.max.width = 0, t2[u2(769)].height = 0), i2.legend_show && !r2[u2(1191)](c2)) {
      n2.widths[c2] = 0, n2.heights[c2] = 0, n2.steps[c2] = 0, n2.offsets[c2] = 0;
      return;
    }
    n2.widths[c2] = m2, n2.heights[c2] = h2, (!t2.max[u2(1183)] || m2 >= t2.max.width) && (t2.max.width = m2), (!t2.max.height || h2 >= t2.max.height) && (t2.max.height = h2);
    var b2 = o2 ? t2.max.height : t2.max[u2(1183)];
    i2[u2(1211)] ? (Object.keys(n2.widths).forEach(function(e3) {
      var r3 = u2;
      return n2[r3(622)][e3] = t2.max[r3(1183)];
    }), Object[u2(552)](n2.heights)[u2(743)](function(e3) {
      return n2.heights[e3] = t2.max.height;
    }), v2 = (_2 - b2 * e2.length) / 2, v2 < t2.posMin ? (t2.totalLength = 0, t2.step = 0, e2[u2(743)](function(e3) {
      return y2(e3);
    })) : y2(c2, true)) : y2(c2);
  };
}, generateLegendItem: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2[i2(636)], s2 = a2.state, c2 = a2[i2(476)].legend, l2 = o2[i2(740)], u2 = o2.legend_item_tile_r, d2 = o2.legend_item_tile_type, f2 = d2 !== `circle`, p2 = s2.isLegendRight || s2.isLegendInset, m2 = -200, h2 = c2.selectAll(`.` + z[i2(1228)])[i2(444)](e2).enter()[i2(440)](`g`);
  if (a2[i2(1226)](h2), o2[i2(1020)] && h2.append(i2(616)).text(function(e3) {
    return e3;
  }), h2.append(`text`).text(function(e3) {
    return Ti.bind(a2)(e3);
  }).each(function(e3, t3) {
    n2(this, e3, t3);
  }).style(`pointer-events`, a2.getStylePropValue(i2(1097)))[i2(919)](`x`, p2 ? r2.xText : m2).attr(`y`, p2 ? m2 : r2.yText), h2.append(`rect`).attr(i2(1093), z.legendItemEvent).style(i2(1221), a2.getStylePropValue(`0`)).attr(`x`, p2 ? r2.xRect : m2).attr(`y`, p2 ? m2 : r2.yRect), l2) {
    var g2 = [], _2 = a2.getValidPointPattern();
    h2.append(function(e3) {
      var t3 = i2;
      g2.indexOf(e3) === -1 && g2.push(e3);
      var n3 = _2[g2.indexOf(e3) % _2.length];
      return n3 === `rectangle` && (n3 = `rect`), gn.createElementNS(w.svg, `hasValidPointType` in a2 && a2.hasValidPointType(n3) ? n3 : t3(623));
    }).attr(`class`, z.legendItemPoint).style(`fill`, wi.bind(a2)).style(`pointer-events`, a2.getStylePropValue(`none`)).attr(`href`, function(e3, t3, n3) {
      var r3 = i2, o3 = n3[t3][r3(1027)].toLowerCase(), c3 = a2.getTargetSelectorSuffix(e3);
      return o3 === `use` ? `#` + s2.datetimeId + `-point` + c3 : void 0;
    });
  } else h2.append(f2 ? `line` : d2)[i2(919)](`class`, z.legendItemTile).style(`stroke`, wi.bind(a2)).style(`pointer-events`, a2.getStylePropValue(`none`)).call(function(e3) {
    var n3 = i2;
    d2 === `circle` ? e3.attr(`r`, u2)[n3(521)](`fill`, wi.bind(a2)).attr(`cx`, p2 ? r2.x2Tile : m2).attr(`cy`, p2 ? m2 : r2.yTile) : f2 && e3[n3(919)](n3(324), t2.height).attr(`x1`, p2 ? r2.x1Tile : m2)[n3(919)](`y1`, p2 ? m2 : r2.yTile).attr(`x2`, p2 ? r2.x2Tile : m2).attr(`y2`, p2 ? m2 : r2.yTile);
  });
}, updateLegendItemPos: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2.config, o2 = i2.$el.legend, s2 = i2.$T, c2 = a2.legend_usePoint, l2 = a2.legend_item_tile_type, u2 = l2 !== `circle`;
  if (c2) {
    var d2 = o2.selectAll(`.` + z.legendItemPoint)[r2(444)](e2);
    s2(d2, t2).each(function() {
      var e3 = r2, t3 = this.nodeName.toLowerCase(), i3 = a2.point_r, o3 = `x`, s3 = `y`, c3 = 2, l3 = 2.5, u3 = null, d3 = null, f2 = null;
      if (t3 === `circle`) {
        var p2 = i3 * 0.2;
        o3 = `cx`, s3 = `cy`, u3 = i3 + p2, c3 = i3 * 2, l3 = -p2;
      } else if (t3 === e3(1010)) {
        var p2 = i3 * 2.5;
        d3 = p2, f2 = p2, l3 = 3;
      }
      j(this)[e3(919)](o3, function(e4) {
        return n2.x1Tile(e4) + c3;
      }).attr(s3, function(e4) {
        return n2.yTile(e4) - l3;
      }).attr(`r`, u3).attr(`width`, d3).attr(`height`, f2);
    });
  } else {
    var d2 = o2.selectAll(`.` + z.legendItemTile).data(e2);
    s2(d2, t2).style(`stroke`, wi.bind(i2))[r2(872)](function(e3) {
      var t3 = r2;
      l2 === `circle` ? e3.attr(`cx`, function(e4) {
        var t4 = n2.x2Tile(e4);
        return t4 - (t4 - n2.x1Tile(e4)) / 2;
      })[t3(919)](`cy`, n2.yTile) : u2 && e3.attr(`x1`, n2.x1Tile).attr(`y1`, n2.yTile).attr(`x2`, n2[t3(780)]).attr(`y2`, n2[t3(1037)]);
    });
  }
} }, Oi = { redraw: function(e2) {
  var _a2;
  var t2 = M, n2, r2, i2;
  e2 === void 0 && (e2 = {});
  var a2 = this, o2 = a2.config, s2 = a2.state, c2 = a2.$el, l2 = c2.main, u2 = c2.treemap;
  s2.redrawing = true;
  var d2 = a2.filterTargetsToShow(a2.data.targets), f2 = e2.flow, p2 = e2.initializing, m2 = a2.getWithOption(e2), h2 = m2.Transition ? o2.transition_duration : 0, g2 = m2[t2(421)] ? h2 : 0, _2 = m2.TransitionForAxis ? h2 : 0, v2 = (_a2 = a2.axis) == null ? void 0 : _a2.generateTransitions(_2);
  a2[t2(1138)](p2), m2[t2(721)] && o2.legend_show ? (e2.withTransition = !!h2, !u2 && a2.updateLegend(a2[t2(1096)](a2[t2(444)][t2(517)]), e2, v2)) : m2.Dimension && a2[t2(431)](true), o2.data_empty_label_text && l2.select(`text.` + H.text + `.` + I.empty)[t2(919)](`x`, s2.width / 2).attr(`y`, s2.height / 2)[t2(601)](o2[t2(735)]).style(`display`, d2.length ? `none` : null), s2.hasAxis ? (a2.axis.redrawAxis(d2, m2, v2, f2, p2), a2.hasGrid() && a2.updateGrid(), o2.regions.length && a2.updateRegion(), [`bar`, `candlestick`, `line`, `area`].forEach(function(e3) {
    var n3 = t2, r3 = pr(e3);
    (/^(line|area)$/[n3(1021)](e3) && a2.hasTypeOf(r3) || a2.hasType(e3)) && a2[`update` + r3](m2[n3(421)]);
  }), c2.text && l2.selectAll(`.` + en.selectedCircles).filter(a2[t2(819)].bind(a2)).selectAll(`circle`)[t2(442)](), o2.interaction_enabled && !f2 && m2.EventRect && (a2.redrawEventRect(), (n2 = a2.bindZoomEvent) == null || n2.call(a2))) : (c2.arcs && a2.redrawArc(h2, g2, m2.Transform), c2.radar && a2.redrawRadar(), c2.polar && a2[t2(231)](), c2.funnel && a2.redrawFunnel(), u2 && a2.updateTreemap(g2)), !s2.resizing && !u2 && (a2.hasPointType() || s2[t2(184)]) ? a2[t2(1042)]() : (r2 = a2.hasLegendDefsPoint) != null && r2.call(a2) && a2.data.targets.forEach(a2.point(`create`, this)), a2[t2(777)]() && !a2.hasArcType(null, [`radar`]) && a2.updateText(), (i2 = a2.redrawTitle) == null || i2[t2(872)](a2), p2 && a2.updateTypesElements(), a2.generateRedrawList(d2, f2, h2, m2.Subchart), a2[t2(400)](), a2[t2(1040)](`$redraw`, e2, h2);
}, generateRedrawList: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2.config, s2 = a2.state, c2 = a2.getDrawShape();
  s2.hasAxis && o2[i2(1083)] && a2[i2(945)](r2, n2, c2);
  var l2 = t2 && a2.generateFlow({ targets: e2, flow: t2, duration: t2[i2(1168)], shape: c2, xv: a2.xv.bind(a2) }), u2 = (n2 || l2) && jr(), d2 = a2.getRedrawList(c2, t2, l2, u2), f2 = function() {
    var e3 = i2;
    l2 && l2(), s2.redrawing = false, Z(o2.onrendered, a2[e3(1158)]);
  };
  if (f2) if (u2 && d2[i2(626)]) {
    var p2 = Xr();
    C().duration(n2).each(function() {
      d2.reduce(function(e3, t3) {
        return e3.concat(t3);
      }, []).forEach(function(e3) {
        return p2.add(e3);
      });
    }).call(p2, f2);
  } else s2[i2(491)] || f2();
  a2.mapToIds(a2.data.targets).forEach(function(e3) {
    s2.withoutFadeIn[e3] = true;
  });
}, getRedrawList: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2[i2(636)], s2 = a2.state, c2 = s2.hasAxis, l2 = s2.hasRadar, u2 = s2.hasTreemap, d2 = a2[i2(476)].grid, f2 = e2.pos, p2 = f2.cx, m2 = f2.cy, h2 = f2.xForText, g2 = f2.yForText, _2 = [];
  return c2 && ((o2.grid_x_lines.length || o2.grid_y_lines.length) && _2.push(a2[i2(365)](r2)), o2.regions.length && _2.push(a2.redrawRegion(r2)), Object[i2(552)](e2.type).forEach(function(t3) {
    var n3 = i2, o3 = pr(t3), s3 = e2.type[t3];
    (/^(area|line)$/[n3(1021)](t3) && a2.hasTypeOf(o3) || a2.hasType(t3)) && _2.push(a2[`redraw` + o3](s3, r2));
  }), !t2 && d2.main && _2.push(a2.updateGridFocus())), (!a2.hasArcType() || l2) && Zn(o2[i2(269)]) && o2.data_labels !== false && _2.push(a2[i2(878)](h2, g2, t2, r2)), (a2.hasPointType() || l2) && !a2[i2(629)]() && a2.redrawCircle && _2.push(a2.redrawCircle(p2, m2, r2, n2)), u2 && _2[i2(559)](a2.redrawTreemap(r2)), _2;
}, updateAndRedraw: function(e2) {
  var t2 = M;
  e2 === void 0 && (e2 = {});
  var n2 = this, r2 = n2.config, i2 = n2[t2(886)], a2;
  e2.withTransition = Qn(e2, `withTransition`, true), e2.withTransform = Qn(e2, `withTransform`, false), e2[t2(615)] = Qn(e2, `withLegend`, false), e2.withUpdateXDomain = true, e2.withUpdateOrgXDomain = true, e2[t2(880)] = false, e2.withTransitionForTransform = Qn(e2, `withTransitionForTransform`, e2[t2(438)]), e2.withLegend && r2.legend_show || (i2[t2(266)] && (a2 = n2.axis.generateTransitions(e2.withTransitionForAxis ? r2[t2(523)] : 0)), n2.updateScales(), n2.updateSvgSize(), n2.transformAll(e2[t2(804)], a2)), n2.redraw(e2, a2);
} };
function ki(e2, t2, n2) {
  var r2 = M;
  e2 === void 0 && (e2 = `linear`);
  var i2 = { linear: me, log: It, _log: Mt, time: Ie, utc: Lt }[e2]();
  return i2.type = e2, /_?log/.test(e2) && i2[r2(518)](true), i2.range([t2 ?? 0, n2 ?? 1]);
}
var Ai = { getXScale: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2.state.loading !== `append` && a2.scale[i2(234)] || ki(a2.axis.getAxisType(`x`), e2, t2);
  return a2.getCustomizedXScale(n2 ? o2[i2(216)](n2) : o2, r2);
}, getYScale: function(e2, t2, n2, r2) {
  var i2 = M, a2 = ki(this.axis.getAxisType(e2), t2, n2);
  return r2 && a2[i2(216)](r2), a2;
}, getYScaleById: function(e2, t2) {
  var _a2;
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = ((_a2 = this[n2(501)]) == null ? void 0 : _a2[n2(649)](e2)) === `y2`, i2 = t2 ? r2 ? `subY2` : `subY` : r2 ? `y2` : `y`;
  return this.scale[i2];
}, getCustomizedXScale: function(e2, t2) {
  var n2 = this, r2 = t2 || function() {
    return n2.axis.x.tickOffset();
  }, i2 = n2.config.axis_x_inverted, a2 = function(t3) {
    return e2(t3) + r2();
  };
  for (var o2 in e2) a2[o2] = e2[o2];
  return a2.orgDomain = function() {
    return e2.domain();
  }, a2.orgScale = function() {
    return e2;
  }, n2.axis.isCategorized() && (a2.domain = function(t3) {
    var n3 = Q, r3 = t3;
    return arguments.length ? (e2[n3(216)](r3), a2) : (r3 = this.orgDomain(), i2 ? [r3[0] + 1, r3[1]] : [r3[0], r3[1] + 1]);
  }), a2;
}, updateScales: function(e2, t2) {
  var _a2;
  var n2 = M, r2;
  t2 === void 0 && (t2 = true);
  var i2 = this, a2 = i2.axis, o2 = i2.config, s2 = i2.format, c2 = i2.org, l2 = i2.scale, u2 = i2[n2(886)], d2 = u2.current, f2 = u2[n2(1183)], p2 = u2.height, m2 = u2.width2, h2 = u2.height2, g2 = u2[n2(266)], _2 = u2.hasTreemap;
  if (g2) {
    var v2 = o2.axis_rotated, y2 = i2.getResettedPadding(1), b2 = { x: v2 ? y2 : 0, y: v2 ? 0 : p2, subX: +!!v2, subY: v2 ? 0 : h2 }, x2 = { x: v2 ? p2 : f2, y: v2 ? f2 : y2, subX: v2 ? p2 : f2, subY: v2 ? m2 : 1 }, S2 = t2 && ((_a2 = l2.x) == null ? void 0 : _a2.orgDomain()), C2 = t2 && c2.xDomain;
    l2.x = i2.getXScale(b2.x, x2.x, S2, function() {
      return a2.x.tickOffset();
    }), l2.subX = i2.getXScale(b2.x, x2.x, C2, function(e3) {
      return e3 % 1 ? 0 : (a2.subX ?? a2.x).tickOffset();
    }), s2[n2(347)] = a2[n2(190)](), s2.subXAxisTick = a2.getXAxisTickFormat(true), a2.setAxis(`x`, l2.x, o2.axis_x_tick_outer, e2), o2.subchart_show && a2.setAxis(`subX`, l2.subX, o2.axis_x_tick_outer, e2), l2.y = i2[n2(797)](`y`, b2.y, x2.y, l2.y ? l2.y.domain() : o2.axis_y_default), l2[n2(297)] = i2.getYScale(`y`, b2.subY, x2.subY, l2.subY ? l2.subY.domain() : o2.axis_y_default), a2.setAxis(`y`, l2.y, o2.axis_y_tick_outer, e2), o2.axis_y2_show && (l2.y2 = i2[n2(797)](`y2`, b2.y, x2.y, l2.y2 ? l2.y2.domain() : o2[n2(950)]), l2.subY2 = i2[n2(797)](`y2`, b2.subY, x2[n2(297)], l2.subY2 ? l2.subY2.domain() : o2.axis_y2_default), a2.setAxis(`y2`, l2.y2, o2.axis_y2_tick_outer, e2));
  } else if (_2) {
    var w2 = i2.getCurrentPadding();
    l2.x = me()[n2(259)]([w2.left, d2[n2(1183)] - w2[n2(308)]]), l2.y = me()[n2(259)]([w2.top, d2.height - w2.bottom]);
  } else (r2 = i2.updateArc) == null || r2[n2(872)](i2);
}, xx: function(e2) {
  var t2 = this, n2 = t2.config, r2 = t2.scale, i2 = r2.x, a2 = r2.zoom, o2 = n2.zoom_enabled && a2 ? a2 : i2;
  return e2 ? o2(W(e2.x) ? e2.x : e2) : null;
}, xv: function(e2) {
  var t2 = M, n2 = this, r2 = n2.axis, i2 = n2[t2(636)], a2 = n2.scale, o2 = a2.x, s2 = a2.zoom, c2 = i2.zoom_enabled && s2 ? s2 : o2, l2 = n2.getBaseValue(e2);
  return r2.isTimeSeries() ? l2 = Or.call(n2, l2) : r2.isCategorized() && K(l2) && (l2 = i2.axis_x_categories.indexOf(l2)), c2(l2);
}, yv: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(802)], i2 = r2.y, a2 = r2.y2;
  return (e2.axis && e2.axis === `y2` ? a2 : i2)(n2.getBaseValue(e2));
}, subxx: function(e2) {
  var t2 = M;
  return e2 ? this[t2(802)].subX(e2.x) : null;
} }, ji = { setContainerSize: function() {
  var e2 = M, t2 = this, n2 = t2[e2(886)];
  n2.current.width = t2.getCurrentWidth(), n2.current.height = t2.getCurrentHeight();
}, getCurrentWidth: function() {
  var e2 = this;
  return e2.config.size_width || e2.getParentWidth();
}, getCurrentHeight: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = n2[e2(342)] || t2[e2(419)]();
  return r2 > 0 ? r2 : 320 / (t2[e2(1013)](e2(1146)) && !n2.gauge_fullCircle ? 2 : 1);
}, getParentRectValue: function(e2) {
  for (var t2 = M, n2 = `offset` + pr(e2), r2 = this.$el[t2(186)][t2(376)](), i2 = 0; i2 < 30 && r2 && r2.tagName !== `BODY`; ) {
    try {
      i2 = or(r2, true)[e2];
    } catch {
      n2 in r2 && (i2 = r2[n2]);
    }
    r2 = r2.parentNode;
  }
  var a2 = gn[t2(487)][n2];
  return i2 > a2 && (i2 = a2), i2;
}, getParentWidth: function() {
  return this.getParentRectValue(`width`);
}, getParentHeight: function() {
  var e2 = M, t2 = this.$el[e2(186)].style(`height`), n2 = 0;
  return t2 && (n2 = /px$/.test(t2) ? parseInt(t2, 10) : this.getParentRectValue(`height`)), n2;
}, getSvgLeft: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2[t2(886)].hasAxis, a2 = n2.$el, o2 = r2[t2(1088)], s2 = o2 || !o2 && !r2.axis_y_inner, c2 = o2 ? Ut.axisX : Ut.axisY, l2 = a2.main.select(`.` + c2).node(), u2 = i2 && r2[t2(593) + (o2 ? `x` : `y`) + `_label`], d2 = 0;
  if (i2 && (K(u2) || K(u2.text) || /^inner-/.test(u2 == null ? void 0 : u2.position))) {
    var f2 = a2[t2(938)].select(`.` + c2 + `-label`);
    f2.empty() || (d2 = or(f2.node()).left);
  }
  var p2 = l2 && s2 ? or(l2, !e2) : { right: 0 }, m2 = or(a2.chart.node(), !e2)[t2(300)] + d2, h2 = n2.hasArcType(), g2 = p2.right - m2 - (h2 ? 0 : n2.getCurrentPaddingByDirection(`left`, e2));
  return g2 > 0 ? g2 : 0;
}, updateDimension: function(e2) {
  var t2 = M, n2, r2 = this, i2 = r2.config, a2 = r2.state.hasAxis, o2 = r2.$el;
  a2 && !e2 && r2.axis.x && i2.axis_rotated && ((n2 = r2.axis.subX) == null || n2.create(o2.axis.subX)), r2[t2(1255)](e2), r2.updateSvgSize(), r2.transformAll(false);
}, updateSvgSize: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.state, i2 = r2.clip, a2 = r2.current, o2 = r2[e2(266)], s2 = r2.width, c2 = r2.height, l2 = t2.$el.svg;
  if (n2.resize_auto === `viewBox` ? l2.attr(`viewBox`, e2(881) + a2.width + ` ` + a2.height) : l2.attr(`width`, a2.width).attr(`height`, a2.height), o2) {
    var u2 = l2.select(`.` + nn.brush + ` .overlay`), d2 = { width: 0, height: 0 };
    u2.size() && (d2.width = +u2.attr(`width`), d2.height = +u2.attr(`height`)), l2.selectAll([`#` + i2.id, `#` + i2.idGrid])[e2(1057)](`rect`)[e2(919)](`width`, s2).attr(`height`, c2), l2.select(`#` + i2[e2(600)]).select(`rect`)[e2(872)](t2.setXAxisClipPath.bind(t2)), l2.select(`#` + i2.idYAxis)[e2(1057)](e2(1010)).call(t2.setYAxisClipPath.bind(t2)), i2.idSubchart && l2.select(`#` + i2[e2(768)]).select(`rect`).attr(`width`, s2)[e2(919)](`height`, d2.height);
  }
}, getCurrentPaddingByDirection: function(e2, t2, n2) {
  var _a2;
  var r2 = M;
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  var i2 = this, a2 = i2.config, o2 = i2[r2(476)], s2 = i2.state[r2(266)], c2 = a2.axis_rotated, l2 = ((_a2 = a2.padding) == null ? void 0 : _a2.mode) === `fit`, u2 = q(a2[`padding_` + e2]) ? a2[`padding_` + e2] : void 0, d2 = s2 ? { top: c2 ? `y2` : null, bottom: c2 ? `y` : `x`, left: c2 ? `x` : `y`, right: c2 ? null : `y2` }[e2] : null, f2 = /^(left|right)$/[r2(1021)](e2), p2 = d2 && a2[`axis_` + d2 + `_inner`], m2 = d2 && a2[`axis_` + d2 + `_show`], h2 = d2 ? a2[`axis_` + d2 + r2(1204)].length : 0, g2 = d2 ? f2 ? i2.getAxisWidthByAxisId(d2, t2) : i2.getHorizontalAxisHeight(d2) : 0, _2 = 20, v2 = 0;
  !l2 && f2 && (g2 = Gn(g2));
  var y2 = s2 && f2 && (p2 || Un(u2) && !m2) ? 0 : l2 ? (m2 ? g2 : 0) + (u2 ?? 0) : Un(u2) ? g2 : u2;
  return f2 && s2 ? (d2 && (l2 || p2) && a2[`axis_` + d2 + `_label`].text && (y2 += i2.axis.getAxisLabelPosition(d2).isOuter ? _2 : 0), e2 === `right` ? (y2 += c2 ? !l2 && Un(u2) ? 10 : 2 : !m2 || p2 ? l2 ? 2 : 1 : 0, y2 += n2 ? i2.axis.getXAxisTickTextY2Overflow(_2) : 0) : e2 === `left` && c2 && Un(u2) && (y2 = a2.axis_x_show ? l2 ? g2 : Math.max(g2, 40) : 1)) : e2 === r2(299) ? (o2.title && o2.title[r2(376)]() && (y2 += i2.getTitlePadding()), v2 = c2 && !p2 ? h2 : 0) : e2 === r2(717) && s2 && c2 && !m2 && (y2 += 1), y2 + g2 * h2 - v2;
}, getCurrentPadding: function(e2) {
  var t2 = M;
  e2 === void 0 && (e2 = false);
  var n2 = this, r2 = [`top`, t2(717), `left`, `right`][t2(279)](function(t3) {
    return n2.getCurrentPaddingByDirection(t3, null, e2);
  });
  return { top: r2[0], bottom: r2[1], left: r2[2], right: r2[3] };
}, getResettedPadding: function(e2) {
  var t2 = this.config, n2 = q(e2), r2 = n2 ? 0 : {};
  return t2.padding === false ? !n2 && Object.keys(e2).forEach(function(n3) {
    var i2 = Q;
    r2[n3] = !Xn(t2.data_labels) && t2.data_labels !== false && n3 === i2(299) ? e2[n3] : 0;
  }) : r2 = e2, r2;
}, updateSizes: function(e2) {
  var _a2;
  var t2 = M, n2, r2, i2, a2 = this, o2 = a2[t2(636)], s2 = a2.state, c2 = a2.$el.legend, l2 = o2.axis_rotated, u2 = a2.hasArcType() || s2.hasFunnel || s2.hasTreemap, d2 = ((_a2 = o2.padding) == null ? void 0 : _a2.mode) === `fit`;
  !e2 && a2.setContainerSize();
  var f2 = { width: c2 ? a2[t2(961)]() : 0, height: c2 ? a2.getLegendHeight() : 0 };
  !u2 && o2.axis_x_show && o2.axis_x_tick_autorotate && a2.updateXAxisTickClip();
  var p2 = { right: o2[t2(533)] && s2.isLegendRight ? a2.getLegendWidth() + (d2 ? 0 : 20) : 0, bottom: !o2.legend_show || s2[t2(620)] || s2.isLegendInset ? 0 : f2.height }, m2 = l2 || u2 ? 0 : a2.getHorizontalAxisHeight(`x`), h2 = o2.subchart_axis_x_show && o2.subchart_axis_x_tick_text_show ? m2 : 30, g2 = o2.subchart_show && !u2 ? o2[t2(1102)] + h2 : 0, _2 = a2.hasType(`gauge`) && o2.arc_needle_show && !o2[t2(647)] && !o2.gauge_label_show ? 10 : 0, v2 = a2.getCurrentPadding(true);
  if (s2.margin = !u2 && l2 ? { top: v2[t2(299)], right: u2 ? 0 : v2[t2(308)] + p2.right, bottom: p2.bottom + v2.bottom, left: g2 + (u2 ? 0 : v2[t2(300)]) } : { top: (d2 ? 0 : 4) + v2.top, right: u2 ? 0 : v2[t2(308)] + p2.right, bottom: _2 + g2 + p2.bottom + v2.bottom, left: u2 ? 0 : v2.left }, s2[t2(1185)] = a2.getResettedPadding(s2.margin), s2[t2(482)] = l2 ? { top: s2[t2(1185)].top, right: NaN, bottom: 20 + p2.bottom, left: a2.state.rotatedPadding.left } : { top: s2[t2(673)].height - g2 - p2.bottom, right: NaN, bottom: h2 + p2[t2(717)], left: s2.margin.left }, s2.margin3 = { top: 0, right: NaN, bottom: 0, left: 0 }, (n2 = a2[t2(302)]) == null || n2.call(a2, f2), s2.width = s2[t2(673)].width - s2.margin[t2(300)] - s2.margin[t2(308)], s2.height = s2.current.height - s2.margin.top - s2.margin.bottom, s2.width < 0 && (s2.width = 0), s2[t2(1113)] < 0 && (s2.height = 0), s2.width2 = l2 ? s2.margin.left - s2.rotatedPadding.left - s2.rotatedPadding[t2(308)] : s2.width, s2.height2 = l2 ? s2[t2(1113)] : s2.current[t2(1113)] - s2.margin2.top - s2.margin2.bottom, s2.width2 < 0 && (s2[t2(891)] = 0), s2.height2 < 0 && (s2[t2(275)] = 0), a2[t2(1180)]()) {
    var y2 = a2.hasType(t2(1146)), b2 = o2.legend_show && s2.isLegendRight, x2 = (s2.hasRadar && a2.cache.get(Vr.radarTextWidth)) ?? 0;
    s2[t2(434)] = s2.width - (b2 ? f2.width + 10 : 0) - x2, s2.arcHeight = s2[t2(1113)] - (b2 && !y2 ? 0 : 10), (r2 = o2.arc_rangeText_values) != null && r2.length && (y2 ? (s2[t2(434)] -= 25, s2.arcHeight -= 10, s2.margin.left += 10) : (s2.arcHeight -= 20, s2[t2(1185)].top += 10)), y2 && !o2[t2(647)] && (s2.arcHeight += s2.height - a2.getPaddingBottomForGauge()), (i2 = a2.updateRadius) == null || i2.call(a2);
  }
  s2[t2(620)] && u2 && (s2.margin3.left = s2.arcWidth / 2 + s2.radiusExpanded * 1.1);
} }, Mi = { setCssRule: function(e2, t2, n2, r2) {
  var i2 = this, a2 = i2.config, o2 = i2.state, s2 = o2.cssRule, c2 = o2.style;
  return a2.boost_useCssRule ? function(a3) {
    a3.each(function(a4) {
      var o3 = Q, l2 = r2 && (r2 == null ? void 0 : r2.call(i2, a4)), u2 = (e2 ? `.` + (tn.shapes + i2[o3(739)](a4.id)) : ``) + t2;
      t2 in s2 && c2.sheet.deleteRule(s2[u2]), i2[o3(886)].cssRule[u2] = gr(c2, u2, n2.filter(Boolean).map(function(e3) {
        return K(l2) && e3.indexOf(`:`) === -1 ? e3 + `: ` + l2 : e3 || ``;
      }));
    });
  } : function() {
  };
}, getStylePropValue: function(e2) {
  var t2 = M;
  return this.config[t2(820)] ? null : G(e2) ? e2[t2(1194)](this) : e2;
} };
function Ni(e2) {
  var t2 = M, n2 = `middle`;
  return e2 > 0 && e2 <= 170 ? n2 = t2(1234) : e2 > 190 && e2 <= 360 && (n2 = `start`), n2;
}
function Pi(e2, t2, n2, r2, i2) {
  var a2 = M, o2, s2 = this, c2 = e2.value, l2 = s2.isCandlestickType(e2), u2 = q(c2) && c2 < 0 || l2 && !((o2 = s2.getCandlestickData(e2)) != null && o2[a2(1254)]), d2 = t2.x, f2 = t2.y, p2 = 4, m2 = p2 * 2;
  return r2 ? n2 === `start` ? (d2 += u2 ? 0 : m2, f2 += p2) : n2 === `middle` ? (d2 += m2, f2 -= m2) : n2 === `end` && (u2 && (d2 -= m2), f2 += p2) : (n2 === a2(210) ? (d2 += p2, u2 && (f2 += m2 * 2)) : n2 === `middle` ? f2 -= m2 : n2 === a2(1234) && (d2 -= p2, u2 && (f2 += m2 * 2)), i2 && (f2 += u2 ? -17 : l2 ? 13 : 7)), { x: d2, y: f2 };
}
function Fi(e2, t2) {
  var n2 = M, r2 = this.config.data_labels_position, i2 = e2.id, a2 = e2[n2(1244)], o2 = e2.value;
  return (G(r2) ? r2[n2(1194)](this.api)(t2, o2, i2, a2, this.$el.text) : (i2 in r2 ? r2[i2] : r2)[t2]) ?? 0;
}
function Ii(e2, t2, n2) {
  var _a2;
  var r2 = M, i2, a2 = this, o2 = a2.config, s2 = a2.$T, c2 = o2.axis_rotated, l2 = o2.data_labels.border, u2 = l2.padding, d2 = u2 === void 0 ? `3 5` : u2, f2 = l2.radius, p2 = f2 === void 0 ? 10 : f2, m2 = l2.stroke, h2 = m2 === void 0 ? `#000` : m2, g2 = l2.strokeWidth, _2 = g2 === void 0 ? 1 : g2, v2 = l2.fill, y2 = v2 === void 0 ? r2(1097) : v2, b2 = Pr(d2), x2 = o2[r2(269)].border !== true, S2 = sr(e2), C2 = j(e2.previousElementSibling);
  (C2.empty() || ((_a2 = C2.node()) == null ? void 0 : _a2.tagName) !== `rect` || !((i2 = C2.attr(`class`)) != null && i2.includes(n2))) && (C2 = j(e2.parentNode).insert(`rect`, function() {
    return e2;
  }).attr(`class`, H.textBorderRect + ` ` + n2)[r2(919)](`width`, S2.width + (x2 ? b2.left + b2.right : 0)).attr(`height`, S2.height + (x2 ? b2[r2(299)] + b2.bottom : 0)), x2 && C2.style(`fill`, y2).style(r2(603), h2).style(r2(324), _2 + `px`).attr(`rx`, p2).attr(`ry`, p2)), s2(C2).attr(`x`, t2.x - (x2 ? b2.left : 0) - (c2 ? 0 : S2.width / 2)).attr(`y`, t2.y - (x2 ? b2.top : 0) - S2[r2(1113)] / 4 * 3.2);
}
function Li(e2, t2) {
  return e2 === void 0 && (e2 = 0), e2 >= (this.config[t2 + `_label_threshold`] || 0);
}
function Ri() {
  var e2 = M, t2 = this, n2 = t2.$el.text, r2 = t2[e2(636)];
  (t2.state.arcWidth ? t2.getArcLabelConfig(`image`) : r2[e2(269)].image) && n2.filter(function() {
    var t3 = e2, n3 = this.previousElementSibling;
    return n3 ? n3[t3(423)] !== `image` || !n3.classList[t3(466)](H.textLabelImage) : true;
  }).each(function(n3) {
    var _a2, _b;
    var r3 = e2, i2 = zi.call(t2, n3), a2 = i2[r3(1157)], o2 = i2.width, s2 = i2.height, c2 = i2.pos;
    a2 && ((_b = j(this[r3(298)])) == null ? void 0 : _b.insert(`image`, `` + (((_a2 = this.getAttribute(`class`)) == null ? void 0 : _a2.replace(/(?:^(.)|\s)/g, `.$1`)) ?? `text`)).style(`opacity`, `0`).attr(`href`, function(e3) {
      return Dr(a2, { ID: `id` in e3 ? e3.id : e3.data.id });
    })[r3(919)](`class`, H.textLabelImage).style(`pointer-events`, `none`)[r3(919)](`width`, o2)[r3(919)](`height`, s2).attr(`transform`, c2 ? `translate(` + (c2.x ?? 0) + ` ` + (c2.y ?? 0) + `)` : null));
  });
}
function zi(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state.arcWidth ? n2[t2(1241)](`image`) : r2.data_labels.image;
  if (G(i2)) return i2[t2(872)](n2.api, e2.value, e2.id, e2.index) ?? { url: ``, width: 0, height: 0, pos: { x: 0, y: 0 } };
  if (i2) {
    var a2 = i2.url, o2 = a2 === void 0 ? `` : a2, s2 = i2.width, c2 = s2 === void 0 ? 0 : s2, l2 = i2.height;
    return { url: o2, width: c2, height: l2 === void 0 ? 0 : l2, pos: i2[t2(173)] };
  }
  return null;
}
function Bi(e2, t2) {
  var _a2;
  var n2 = M, r2 = this, i2 = this, a2 = i2.config, o2 = i2.state, s2 = o2.arcWidth, c2 = o2.hasTreemap, l2 = a2.axis_rotated, u2 = j(e2.previousElementSibling), d2 = function(e3) {
    var _a3;
    var t3 = Q, n3 = e3[t3(521)].opacity !== `0` && e3.style.fillOpacity !== `0`;
    return (s2 ? e3.textContent : n3) && ((_a3 = r2[t3(718)]) == null ? void 0 : _a3.tagName) !== `image`;
  };
  if (!u2.empty() && ((_a2 = u2.node()) == null ? void 0 : _a2.tagName) === `image`) {
    var f2 = or(e2), p2 = u2.attr(n2(1183)) / 2, m2 = u2.attr(`height`) / 2, h2 = t2.x - p2, g2 = t2.y - m2 - f2.height / 2;
    l2 ? t2.x += p2 : (c2 && (h2 = -p2, g2 = -(m2 * 2 + f2.height)), i2.hasType(`pie`) || i2.hasType(n2(1187)) || (t2.y += m2)), i2.$T(u2).style(n2(363), d2(e2) ? null : `0`).attr(`x`, h2).attr(`y`, g2);
  }
}
function Vi(e2) {
  return Lr(e2, function(e3) {
    return e3;
  }, function(e3) {
    return sr(e3);
  });
}
var Hi = { opacityForText: function(e2) {
  var t2 = M, n2 = this;
  return n2[t2(819)](e2) && !Li[t2(872)](n2, Math.abs(n2.getRatio(`bar`, e2)), `bar`) ? `0` : n2[t2(777)] ? null : `0`;
}, initText: function() {
  var e2 = M, t2 = this.$el;
  t2.main[e2(1057)](`.` + I.chart).append(`g`).attr(e2(1093), H.chartTexts).style(`pointer-events`, t2.funnel || t2.treemap ? `none` : null);
}, updateTargetsForText: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(1137)](`Text`), i2 = n2.getClass(t2(260), `id`), a2 = n2.classFocus[t2(1194)](n2);
  n2.$el.main.select(`.` + H.chartTexts).selectAll(`.` + H.chartText).data(n2.filterNullish(e2)).attr(`class`, function(e3) {
    var n3 = t2;
    return (`` + r2(e3) + a2(e3))[n3(825)]();
  }).enter().append(`g`).style(`opacity`, `0`).attr(`class`, r2).call(n2.setCssRule(true, ` .` + H.text, [`fill`, `pointer-events:none`], n2.updateTextColor))[t2(440)](`g`).attr(`class`, i2);
}, updateText: function() {
  var e2 = M, t2 = this, n2 = t2[e2(476)], r2 = t2.$T, i2 = t2[e2(636)], a2 = t2.axis, o2 = t2.getClass(`text`, `index`), s2 = i2[e2(269)].centered, c2 = n2.main.selectAll(`.` + H.texts).selectAll(`.` + H.text).data(t2[e2(807)].bind(t2));
  r2(c2.exit()).style(`fill-opacity`, `0`).remove(), n2[e2(601)] = c2.enter()[e2(440)](`text`).merge(c2).attr(`class`, o2)[e2(919)](e2(632), function(n3) {
    var r3 = e2, o3 = i2[r3(593) + (a2 == null ? void 0 : a2.getId(n3.id)) + `_inverted`] ? n3.value > 0 : n3.value < 0;
    if (t2.isCandlestickType(n3)) {
      var c3 = t2.getCandlestickData(n3);
      o3 = !(c3 != null && c3._isUp);
    } else if (t2.isTreemapType(n3)) return s2 ? `middle` : `start`;
    return i2.axis_rotated ? o3 ? `end` : `start` : r3(1039);
  }).style(`fill`, t2[e2(650)](t2.updateTextColor)).style(e2(1221), `0`).each(function(n3, r3, i3) {
    var a3 = e2, o3 = j(this), s3 = n3[a3(461)];
    if (t2.isBubbleZType(n3)) s3 = t2.getBubbleZData(s3, `z`);
    else if (t2.isCandlestickType(n3)) {
      var c3 = t2.getCandlestickData(n3);
      c3 && (s3 = c3[a3(321)]);
    }
    s3 = t2.isTreemapType(n3) ? t2[a3(220)](n3)(o3) : t2.dataLabelFormat(n3.id)(s3, n3.id, n3.index, i3), q(s3) ? this.textContent = s3 : tr(o3, s3, void 0, true);
  }), Ri[e2(872)](t2);
}, updateTextColor: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = r2.data_labels_colors, a2 = n2.isArcType(e2) && !n2.isRadarType(e2) || n2.isFunnelType(e2) || n2[t2(1115)](e2) ? null : n2.color(e2), o2;
  if (K(i2) ? o2 = i2 : X(i2) ? o2 = i2[(e2.data || e2).id] : G(i2) && (o2 = i2[t2(1194)](n2.api)(a2, e2)), n2.isCandlestickType(e2) && !G(i2)) {
    var s2 = n2.getCandlestickData(e2);
    if (!(s2 != null && s2._isUp)) {
      var c2 = r2.candlestick_color_down;
      o2 = X(c2) ? c2[e2.id] : c2;
    }
  }
  return o2 || a2;
}, updateTextBGColor: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2[n2(476)].defs, a2 = ``;
  if (t2) {
    var o2 = K(t2) ? `` : r2.getTargetSelectorSuffix(`id` in e2 ? e2.id : e2.data.id), s2 = i2.select([`filter[id*='labels-bg`, `']`].join(o2));
    if (s2.size() && (a2 = `url(#` + s2[n2(919)](`id`) + `)`), G(t2)) {
      r2.generateTextBGColorFilter(t2);
      var c2 = r2.color(e2), l2 = t2.bind(r2.api)(c2, e2);
      l2 ? s2.select(`feFlood`).attr(`flood-color`, l2) : a2 = ``;
    }
  }
  return a2 || null;
}, redrawText: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2.$T, s2 = a2.axis, c2 = a2.config, l2 = a2.state.hasTreemap, u2 = cr(true), d2 = c2.axis_rotated, f2 = c2.data_labels.rotate, p2 = Ni(f2), m2 = f2 ? `rotate(` + f2 + `)` : ``, h2 = /* @__PURE__ */ new Map();
  if (c2.data_labels[i2(534)]) {
    var g2 = [];
    a2.$el[i2(601)].each(function(e3) {
      (a2[i2(819)](e3) || a2.isTreemapType(e3)) && g2.push(this);
    }), g2[i2(626)] > 0 && (h2 = Vi(g2));
  }
  return a2.$el[i2(601)].style(`fill`, a2.getStylePropValue(a2.updateTextColor)).attr(`filter`, function(e3) {
    var t3 = i2;
    return a2[t3(1155)].bind(a2)(e3, c2[t3(966)]);
  }).style(i2(1221), n2 ? 0 : a2.opacityForText[i2(1194)](a2)).each(function(n3, g3) {
    var _2 = i2, v2 = h2.get(this), y2 = o2(l2 && this.childElementCount ? this.parentNode : this, !!(r2 && (this[_2(955)](`x`) || this[_2(955)](`transform`))), u2), b2 = c2[`axis_` + (s2 == null ? void 0 : s2.getId(n3.id)) + _2(906)], x2 = { x: e2[_2(1194)](this)(n3, g3, v2), y: t2.bind(this)(n3, g3, v2) };
    f2 && (x2 = Pi.bind(a2)(n3, x2, p2, d2, b2), y2.attr(`text-anchor`, p2)), Bi.call(a2, this, x2), this.childElementCount || f2 ? y2[_2(919)](`transform`, `translate(` + x2.x + ` ` + x2.y + `) ` + m2) : y2.attr(`x`, x2.x).attr(`y`, x2.y), c2.data_labels.border && Ii.call(a2, y2.node(), x2, H.textBorderRect + `-` + g3);
  }), true;
}, getTextRect: function(e2, t2) {
  var _a2;
  var n2 = M, r2, i2 = this, a2, o2, s2;
  Array.isArray(e2) ? a2 = Vr.textRect + `-` + e2.join(`_`) : (o2 = ((_a2 = (r2 = e2).node) == null ? void 0 : _a2.call(r2)) ?? e2, /text/i[n2(1021)](o2[n2(423)]) || (o2 = o2[n2(996)](`text`)), s2 = o2.textContent, a2 = Vr.textRect + `-` + s2.replace(/\W/g, `_`));
  var c2 = i2[n2(808)].get(a2) || [];
  return c2.length === 0 && ((i2.$el.svg || i2[n2(476)].chart.select(`svg`)).selectAll(`.` + I.dummy)[n2(444)](s2 ? [s2] : e2)[n2(787)]().append(`text`)[n2(521)](`visibility`, `hidden`).style(`font`, o2 ? j(o2).style(`font`) : null).classed(t2 || I.dummy, true).text(function(e3) {
    return e3;
  }).each(function(e3, t3) {
    c2[t3] = or(this);
  })[n2(442)](), i2[n2(808)][n2(677)](a2, c2)), c2.length > 1 ? c2 : c2[0];
}, generateXYForText: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.state, a2 = i2.hasRadar, o2 = i2.hasFunnel, s2 = i2.hasTreemap, c2 = Object[n2(552)](e2), l2 = {}, u2 = t2 ? r2[n2(169)] : r2.getYForText;
  return o2 && c2[n2(559)](`funnel`), a2 && c2.push(`radar`), s2 && c2.push(`treemap`), c2.forEach(function(t3) {
    l2[t3] = r2[`generateGet` + pr(t3) + `Points`](e2[t3], false);
  }), function(e3, t3) {
    var i3 = n2, a3 = r2[i3(990)](e3) && `area` || r2[i3(819)](e3) && i3(951) || r2.isCandlestickType(e3) && `candlestick` || r2.isFunnelType(e3) && `funnel` || r2[i3(637)](e3) && `radar` || r2.isTreemapType(e3) && `treemap` || `line`;
    return u2.call(r2, l2[a3](e3, t3), e3, this);
  };
}, getCenteredTextPos: function(e2, t2, n2, r2, i2) {
  var a2 = M, o2 = this, s2 = o2[a2(636)], c2 = s2.axis_rotated, l2 = o2.isBarType(e2), u2 = o2[a2(1115)](e2);
  if (s2[a2(269)].centered && (l2 || u2)) {
    var d2 = i2 || sr(n2);
    if (l2) {
      var f2 = o2[a2(561)](e2, null, `bar`) >= 0;
      if (c2) {
        var p2 = (f2 ? t2[1][1] - t2[0][1] : t2[0][1] - t2[1][1]) / 2 + d2.width / 2;
        return f2 ? -p2 - 3 : p2 + 2;
      } else {
        var m2 = (f2 ? t2[0][1] - t2[1][1] : t2[1][1] - t2[0][1]) / 2 + d2.height / 2;
        return f2 ? m2 : -m2 - 2;
      }
    } else if (u2) return r2 === `x` ? (t2[1][0] - t2[0][0]) / 2 : (t2[1][1] - t2[0][1]) / 2 - d2.y - d2.height / 2;
  }
  return 0;
}, getXForText: function(e2, t2, n2, r2) {
  var i2 = M, a2, o2 = this, s2 = o2.config, c2 = s2.axis_rotated, l2 = o2.isFunnelType(t2), u2 = o2[i2(1115)](t2), d2 = e2 ? e2[0][0] : 0;
  if (o2.isCandlestickType(t2)) c2 ? d2 = (a2 = o2[i2(911)](t2)) != null && a2._isUp ? e2[2][2] + 4 : e2[2][1] - 4 : d2 += (e2[1][0] - d2) / 2;
  else if (l2) d2 += o2.state.current.width / 2;
  else if (u2) d2 += s2.data_labels.centered ? 0 : 5;
  else if (c2) {
    var f2 = s2[i2(593) + o2.axis.getId(t2.id) + `_inverted`], p2 = o2.isBarType(t2) ? 4 : 6, m2 = t2.value;
    d2 = e2[2][1], f2 ? d2 -= p2 * (m2 > 0 ? 1 : -1) : d2 += p2 * (m2 < 0 ? -1 : 1);
  } else d2 = o2.hasType(`bar`) ? (e2[2][0] + e2[0][0]) / 2 : d2;
  return (c2 || u2) && (d2 += o2.getCenteredTextPos(t2, e2, n2, `x`, r2)), d2 + Fi.call(this, t2, `x`);
}, getYForText: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2[i2(501)], s2 = a2.config, c2 = a2.state, l2 = s2.axis_rotated, u2 = s2[`axis_` + (o2 == null ? void 0 : o2[i2(649)](t2.id)) + `_inverted`], d2 = a2[i2(819)](t2), f2 = a2.isFunnelType(t2), p2 = a2.isTreemapType(t2), m2 = s2.point_r, h2 = or(n2), g2 = t2.value, _2 = 3, v2;
  if (a2.isCandlestickType(t2)) g2 = a2.getCandlestickData(t2), l2 ? (v2 = e2[0][0], v2 += (e2[1][0] - v2) / 2 + _2) : (v2 = g2 && g2._isUp ? e2[2][2] - _2 : e2[2][1] + _2 * 4, u2 && (v2 += 15 * (g2._isUp ? 1 : -1)));
  else if (f2) v2 = e2 ? e2[0][1] + (e2[1][1] - e2[0][1]) / 2 + h2.height / 2 - 3 : 0;
  else if (p2) v2 = e2[0][1] + (s2.data_labels.centered ? 0 : h2[i2(1113)] + 5);
  else if (l2) v2 = (e2[0][0] + e2[2][0] + h2.height * 0.6) / 2;
  else if (v2 = e2[2][1], q(m2) && m2 > 5 && (a2.isLineType(t2) || a2[i2(1159)](t2)) && (_2 += s2[i2(247)] / 2.3), g2 < 0 || g2 === 0 && !c2.hasPositiveValue && c2.hasNegativeValue) v2 += u2 ? d2 ? -3 : -5 : h2.height + (d2 ? -_2 : _2);
  else {
    var y2 = -_2 * 2;
    d2 ? y2 = -_2 : a2[i2(910)](t2) && (y2 = _2), u2 && (y2 = d2 ? 10 : 15), v2 += y2;
  }
  return (!l2 || p2) && (v2 += a2.getCenteredTextPos(t2, e2, n2, `y`, r2)), v2 + Fi.call(this, t2, `y`);
}, markOverlapped: function(e2, t2, n2) {
  var r2 = M, i2 = t2.$el.arcs.selectAll(n2), a2 = i2[r2(1038)](function(t3) {
    return t3.data.id !== e2;
  }), o2 = i2.filter(function(t3) {
    return t3.data.id === e2;
  }), s2 = br(o2[r2(376)]()), c2 = function(e3, t3) {
    return Math.sqrt(Math[r2(1182)](e3, 2) + t3 ** 2);
  };
  o2.node() && a2.each(function() {
    var e3 = r2, t3 = br(this), n3 = j(this), i3 = c2(s2.e, s2.f) > c2(t3.e, t3.f) ? o2 : n3, a3 = Math[e3(232)](Math[e3(783)](s2.e - t3.e)) < Math.ceil(i3.node().getComputedTextLength()), l2 = Math.ceil(Math.abs(s2.f - t3.f)) < parseInt(o2.style(`font-size`), 10);
    n3.classed(H[e3(1203)], a3 && l2);
  });
}, undoMarkOverlapped: function(e2, t2) {
  var n2 = M;
  e2.$el.arcs.selectAll(t2)[n2(904)](function() {
    var e3 = n2;
    Ge([this, this.previousSibling]).classed(H[e3(1203)], false);
  });
} };
function Ui(e2, t2) {
  var n2 = M;
  e2 === void 0 && (e2 = `left`);
  var r2 = q(t2);
  return e2.indexOf(`center`) > -1 ? r2 ? t2 / 2 : `middle` : e2.indexOf(n2(308)) > -1 ? r2 ? t2 : n2(1234) : r2 ? 0 : `start`;
}
var Wi = { initTitle: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.$el;
  n2[e2(557)] && (r2.title = r2.svg.append(`g`), tr(r2.title.append(e2(601))[e2(521)](e2(632), Ui(n2.title_position)).attr(`class`, H.title), n2.title_text, [0.3, 1.5]));
}, redrawTitle: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.state.current, i2 = t2[e2(476)].title;
  if (i2) {
    var a2 = Ui(n2[e2(991)], r2[e2(1183)]), o2 = (n2.title_padding.top || 0) + t2.getTextRect(t2.$el.title, H[e2(616)]).height;
    i2[e2(919)](`transform`, `translate(` + a2 + `, ` + o2 + `)`);
  }
}, getTitlePadding: function() {
  var e2 = this, t2 = e2.$el.title, n2 = e2.config;
  return (n2.title_padding.top || 0) + (t2 ? e2.getTextRect(t2, H.title).height : 0) + (n2.title_padding.bottom || 0);
} }, Gi = { initTooltip: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.$el;
  r2.tooltip = j(n2.tooltip_contents.bindto), r2.tooltip.empty() && (r2.tooltip = r2.chart.append(`div`)[e2(919)](e2(1093), rn.tooltipContainer).style(`position`, `absolute`).style(`pointer-events`, `none`)[e2(521)](`display`, `none`)), t2.bindTooltipResizePos();
}, initShowTooltip: function() {
  var e2 = M, t2, n2, r2 = this, i2 = r2.config, a2 = r2.$el, o2 = r2.state, s2 = o2.hasAxis, c2 = o2.hasRadar;
  if (i2.tooltip_init_show) {
    var l2 = !(s2 || c2);
    (n2 = r2.axis) != null && n2.isTimeSeries() && K(i2.tooltip_init_x) && (i2.tooltip_init_x = Or[e2(872)](r2, i2[e2(1071)])), r2[e2(1158)].tooltip.show({ data: (t2 = {}, t2[l2 ? `index` : `x`] = i2.tooltip_init_x, t2) });
    var u2 = i2[e2(565)];
    if (!i2[e2(1055)].bindto && !Xn(u2)) {
      var d2 = u2.top, f2 = d2 === void 0 ? 0 : d2, p2 = u2.left, m2 = p2 === void 0 ? 50 : p2;
      a2[e2(665)].style(`top`, K(f2) ? f2 : f2 + `px`).style(e2(300), K(m2) ? m2 : m2 + `px`).style(`display`, null);
    }
  }
}, getTooltipHTML: function() {
  var e2 = M, t2 = [...arguments], n2 = this, r2 = n2.api, i2 = n2[e2(636)];
  return Bn(G(i2.tooltip_contents) ? i2.tooltip_contents.bind(r2).apply(void 0, t2) : n2[e2(492)].apply(n2, t2));
}, getTooltipContent: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2.api, s2 = a2.config, c2 = a2.state, l2 = a2[i2(476)], u2 = [i2(616), `name`, `value`].map(function(e3) {
    var t3 = s2[`tooltip_format_` + e3];
    return G(t3) ? t3.bind(o2) : t3;
  }), d2 = u2[0], f2 = u2[1], p2 = u2[2], m2 = function() {
    var e3 = [...arguments];
    return (d2 || t2).apply(void 0, e3);
  }, h2 = function() {
    var e3 = [...arguments];
    return (f2 || function(e4) {
      return e4;
    }).apply(void 0, e3);
  }, g2 = function(e3, t3, r3, o3) {
    var s3 = i2, l3 = p2;
    return l3 || (l3 = c2.hasTreemap || a2.isStackNormalized() && (!a2.isStackNormalizedPerGroup() || a2[s3(1242)](r3)) ? function(e4, t4) {
      var n3 = s3;
      return (t4 * 100)[n3(1218)](2) + `%`;
    } : n2), l3(e3, t3, r3, o3);
  }, _2 = s2[i2(703)], v2 = function(e3) {
    var t3 = i2;
    return a2.axis && a2.isBubbleZType(e3) ? a2.getBubbleZData(e3.value, `z`) : a2[t3(345)](e3);
  }, y2 = a2[i2(691)] ? function(e3) {
    return a2.levelColor(e3.value);
  } : function(e3) {
    return r2(e3);
  }, b2 = s2.tooltip_contents, x2 = b2.template, S2 = a2.mapToTargetIds();
  if (_2 === null && s2.data_groups.length) {
    var C2 = a2.orderTargets(a2.data.targets)[i2(279)](function(e3) {
      return e3.id;
    }).reverse();
    e2.sort(function(e3, t3) {
      var n3 = i2, r3 = e3 ? e3[n3(461)] : null, a3 = t3 ? t3.value : null;
      return r3 > 0 && a3 > 0 && (r3 = e3.id ? C2[n3(509)](e3.id) : null, a3 = t3.id ? C2.indexOf(t3.id) : null), r3 - a3;
    });
  } else if (/^(asc|desc)$/.test(_2)) {
    var w2 = _2 === `asc`;
    e2.sort(function(e3, t3) {
      var n3 = e3 ? v2(e3) : null, r3 = t3 ? v2(t3) : null;
      return w2 ? n3 - r3 : r3 - n3;
    });
  } else G(_2) && e2[i2(418)](_2[i2(1194)](o2));
  var T2 = a2.getTooltipContentTemplate(x2), E2 = e2[i2(626)], D2, O2, k2, A2, ee2, te2 = function() {
    var t3 = i2;
    if (O2 = e2[ee2], !O2 || !(v2(O2) || v2(O2) === 0)) return `continue`;
    if (Un(D2)) {
      var n3 = (c2[t3(266)] || c2.hasRadar) && m2(O2.x);
      D2 = Dr(T2[0], { CLASS_TOOLTIP: rn.tooltip, TITLE: W(n3) ? x2 ? n3 : `<tr><th colspan="2">` + n3 + `</th></tr>` : `` });
    }
    if (!O2.ratio && l2[t3(1177)] && (k2 = [`arc`, a2.$el[t3(1177)].select(t3(413) + L[t3(837)] + `-` + O2.id)[t3(444)]()[0]], O2.ratio = a2.getRatio.apply(a2, k2)), k2 = [O2.ratio, O2.id, O2[t3(1244)]], a2.isAreaRangeType(O2)) {
      var r3 = [`high`, `low`].map(function(e3) {
        return g2.apply(void 0, F([a2.getRangedData(O2, e3)], k2, false));
      }), o3 = r3[0], s3 = r3[1];
      A2 = t3(200) + g2.apply(void 0, F([v2(O2)], k2, false)) + ` <b>High:</b> ` + o3 + ` <b>Low:</b> ` + s3;
    } else if (a2.isCandlestickType(O2)) {
      var u3 = [`open`, t3(366), `low`, `close`, `volume`].map(function(e3) {
        var n4 = t3;
        return a2.getRangedData(O2, e3, `candlestick`) ? g2[n4(868)](void 0, F([a2.getRangedData(O2, e3, `candlestick`)], k2, false)) : void 0;
      }), d3 = u3[0], o3 = u3[1], s3 = u3[2], f3 = u3[3], p3 = u3[4];
      A2 = t3(1087) + d3 + ` <b>High:</b> ` + o3 + ` <b>Low:</b> ` + s3 + ` <b>Close:</b> ` + f3 + (p3 ? ` <b>Volume:</b> ` + p3 : ``);
    } else if (a2.isBarRangeType(O2)) {
      var _3 = O2.value, C3 = O2.id, w3 = O2.index;
      A2 = `` + g2(_3, void 0, C3, w3);
    } else A2 = g2.apply(void 0, F([v2(O2)], k2, false));
    if (A2 !== void 0) {
      if (O2[t3(709)] === null) return `continue`;
      var E3 = h2.apply(void 0, F([O2.name ?? O2.id], k2, false)), te3 = y2(O2), ne2 = { CLASS_TOOLTIP_NAME: rn.tooltipName + a2[t3(739)](O2.id), COLOR: x2 || !a2.patterns ? te3 : `<svg><rect style="fill:` + te3 + `" width="10" height="10"></rect></svg>`, NAME: E3, VALUE: A2 };
      if (x2 && X(b2[t3(601)])) {
        var j2 = S2.indexOf(O2.id);
        Object.keys(b2.text).forEach(function(e3) {
          ne2[e3] = b2[t3(601)][e3][j2];
        });
      }
      D2 += Dr(T2[1], ne2);
    }
  };
  for (ee2 = 0; ee2 < E2; ee2++) te2();
  return D2 + i2(688);
}, getTooltipContentTemplate: function(e2) {
  var t2 = M;
  return (e2 || `<table class="{=CLASS_TOOLTIP}"><tbody>
				{=TITLE}
				{{<tr class="{=CLASS_TOOLTIP_NAME}">
					<td class="name">` + (this.patterns ? t2(803) : `<span style="background-color:{=COLOR}"></span>`) + `{=NAME}</td>
					<td class="value">{=VALUE}</td>
				</tr>}}
			</tbody></table>`)[t2(1077)](/(\r?\n|\t)/g, ``).split(/{{(.*)}}/);
}, setTooltipPosition: function(e2, t2) {
  var _a2;
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.scale, o2 = r2.state, s2 = r2.$el, c2 = s2.eventRect, l2 = s2.tooltip, u2 = s2[n2(1220)], d2 = i2.tooltip_contents[n2(551)], f2 = i2.axis_rotated, p2 = l2 == null ? void 0 : l2.datum();
  if (!d2 && p2) {
    var m2 = e2 ?? JSON[n2(484)](p2.current), h2 = ir(o2.event, t2 ?? (c2 == null ? void 0 : c2[n2(376)]())), g2 = { x: h2[0], y: h2[1] };
    if (o2.hasAxis && a2.x && p2 && `x` in p2) {
      var _2 = function(e3, t3, i3) {
        var _a3;
        var s3 = n2;
        e3 === void 0 && (e3 = 0), i3 === void 0 && (i3 = `y`);
        var c3 = a2[t3 ? (_a3 = r2.axis) == null ? void 0 : _a3.getId(t3) : i3];
        return c3 ? c3(e3) + (f2 ? o2.margin.left : o2[s3(1185)].top) : 0;
      };
      g2.xAxis = a2.x(p2.x) + (i2.tooltip_position ? f2 ? o2.margin.top : o2[n2(1185)].left : 0), m2[n2(626)] === 1 ? g2[n2(581)] = _2(m2[0].value, m2[0].id) : g2[n2(581)] = _2;
    }
    var v2 = p2.width, y2 = v2 === void 0 ? 0 : v2, b2 = p2.height, x2 = b2 === void 0 ? 0 : b2, S2 = ((_a2 = i2.tooltip_position) == null ? void 0 : _a2.bind(r2.api)(m2, y2, x2, c2 == null ? void 0 : c2.node(), g2)) ?? (kr(u2) ? r2[n2(437)].bind(r2)(y2, x2, g2) : r2[n2(538)].bind(r2)(y2, x2, g2));
    [`top`, n2(300)].forEach(function(e3) {
      var t3 = n2, r3 = S2[e3];
      l2[t3(521)](e3, r3 + `px`), e3 === `left` && !p2.xPosInPercent && (p2[t3(1225)] = r3 / o2.current.width * 100);
    });
  }
}, getTooltipPositionViewBox: function(e2, t2, n2) {
  var _a2;
  var r2 = M, i2 = this, a2 = i2.$el, o2 = a2.eventRect, s2 = a2.svg, c2 = i2.config, l2 = i2.state, u2 = c2.axis_rotated, d2 = i2.hasArcType() || l2[r2(562)] || l2[r2(1141)], f2 = ((_a2 = d2 ? s2 : o2) == null ? void 0 : _a2.node()) ?? l2[r2(663)].target, p2 = n2.x, m2 = n2.y;
  l2.hasAxis && (p2 = u2 ? p2 : n2.xAxis, m2 = u2 ? n2.xAxis : m2);
  var h2 = yr(f2, p2, m2, false), g2 = or(f2), _2 = yr(f2, 20, 0, false).x, v2 = h2.y, y2 = h2.x + e2 / 2 + _2;
  return d2 && (l2.hasFunnel || l2.hasTreemap || l2[r2(184)] ? (y2 -= e2 / 2 + _2, v2 += t2) : (v2 += g2.height / 2, y2 += g2.width / 2 - (e2 - _2))), y2 + e2 > g2[r2(1183)] && (y2 = g2.width - e2 - _2), v2 + t2 > g2.height && (v2 -= t2 * 2), { top: v2, left: y2 };
}, getTooltipPosition: function(e2, t2, n2) {
  var _a2;
  var r2 = M, i2, a2 = this, o2 = a2.config, s2 = a2.scale, c2 = a2.state, l2 = c2.width, u2 = c2.height, d2 = c2.current, f2 = c2[r2(562)], p2 = c2.hasRadar, m2 = c2.hasTreemap, h2 = c2[r2(620)], g2 = c2.inputType, _2 = a2.hasType(`gauge`) && !o2.gauge_fullCircle, v2 = o2.axis_rotated, y2 = a2[r2(1180)](), b2 = a2.getSvgLeft(true), x2 = b2 + d2.width - a2.getCurrentPaddingByDirection(`right`), S2 = 20, C2 = n2.x, w2 = n2.y;
  if (p2) C2 += C2 >= l2 / 2 ? 15 : -(e2 + 15), w2 += 15;
  else if (y2) {
    if (g2 !== `touch`) {
      var T2 = ((_a2 = a2.getTitlePadding) == null ? void 0 : _a2.call(a2)) ?? 0;
      T2 && _2 && (i2 = o2.arc_rangeText_values) != null && i2.length && (T2 += 10), C2 += (l2 - (h2 ? a2.getLegendWidth() : 0)) / 2, w2 += (_2 ? u2 : u2 / 2 + t2) + T2;
    }
  } else if (f2 || m2) w2 += t2;
  else {
    var E2 = { top: a2.getCurrentPaddingByDirection(`top`, true), left: a2.getCurrentPaddingByDirection(`left`, true) };
    v2 ? (C2 += b2 + E2[r2(300)] + S2, w2 = E2.top + n2[r2(766)] + S2, x2 -= b2) : (C2 = b2 + E2.left + S2 + (s2.zoom ? C2 : n2.xAxis), w2 += E2.top - 5);
  }
  if (C2 + e2 + 15 > x2 && (C2 -= e2 + (f2 || m2 || y2 ? 0 : v2 ? S2 * 2 : 38)), w2 + t2 > d2.height) {
    var D2 = m2 ? t2 + 10 : 30;
    w2 -= _2 ? t2 * 1.5 : t2 + D2;
  }
  var O2 = { top: w2, left: C2 };
  return Object.keys(O2).forEach(function(e3) {
    O2[e3] < 0 && (O2[e3] = 0);
  }), O2;
}, showTooltip: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.$el.tooltip, o2 = e2.filter(function(e3) {
    return e3 && W(r2[Q(345)](e3));
  });
  if (!(!a2 || o2.length === 0 || !i2.tooltip_show)) {
    var s2 = a2[n2(229)](), c2 = JSON.stringify(e2);
    if (!s2 || s2.current !== c2) {
      var l2 = e2.concat().sort()[0], u2 = l2.index, d2 = l2.x;
      Z(i2.tooltip_onshow, r2.api, e2), a2.html(r2.getTooltipHTML(e2, r2[n2(501)] ? r2[n2(501)].getXAxisTickFormat() : r2.categoryName.bind(r2), r2.getDefaultValueFormat(), r2.color))[n2(521)](n2(928), null)[n2(521)](n2(1253), null).datum(s2 = { index: u2, x: d2, current: c2, width: a2.property(n2(716)), height: a2.property(`offsetHeight`) }), Z(i2.tooltip_onshown, r2.api, e2), r2[n2(1073)](true, u2);
    }
    r2.setTooltipPosition(o2, t2);
  }
}, bindTooltipResizePos: function() {
  var e2 = this, t2 = e2.resizeFunction, n2 = e2.state, r2 = e2.$el.tooltip;
  t2.add(function() {
    var e3 = Q;
    if (r2.style(`display`) === `block`) {
      var t3 = n2.current, i2 = r2.datum(), a2 = i2[e3(1183)], o2 = i2.xPosInPercent, s2 = t3.width / 100 * o2, c2 = t3.width - (s2 + a2);
      c2 < 0 && (s2 += c2), r2.style(e3(300), s2 + `px`);
    }
  });
}, hideTooltip: function(e2) {
  var t2 = M, n2 = this, r2 = n2.api, i2 = n2.config, a2 = n2.$el.tooltip;
  if (a2 && a2[t2(521)](`display`) !== `none` && (!i2.tooltip_doNotHide || e2)) {
    var o2 = JSON.parse(a2.datum().current ?? {});
    Z(i2[t2(543)], r2, o2), a2.style(`display`, `none`).datum(null), Z(i2[t2(1238)], r2, o2);
  }
}, _handleLinkedCharts: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.charts, a2 = r2.config, o2 = r2.state.event;
  if (o2 != null && o2.isTrusted && a2[n2(406)] && i2.length > 1) {
    var s2 = a2.tooltip_linked_name;
    i2.filter(function(e3) {
      return e3 !== r2[n2(1158)];
    })[n2(743)](function(r3) {
      var _a2;
      var i3 = n2, a3 = r3.internal, o3 = a3.config, c2 = a3[i3(476)], l2 = o3.tooltip_linked, u2 = o3.tooltip_linked_name, d2 = gn.body.contains(c2.chart.node());
      if (l2 && s2 === u2 && d2) {
        var f2 = t2 !== ((_a2 = c2.tooltip.data()[0]) == null ? void 0 : _a2.index);
        try {
          r3.tooltip[e2 && f2 ? i3(304) : `hide`]({ index: t2 });
        } catch {
        }
      }
    });
  }
}, updateTooltipOnRedraw: function(e2, t2) {
  var _a2;
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2[n2(476)], o2 = a2.eventRect, s2 = a2.svg, c2 = a2.tooltip, l2 = r2.state, u2 = l2.event, d2 = l2.hasAxis, f2 = l2.hasRadar, p2 = l2.hasTreemap;
  if ((c2 == null ? void 0 : c2.style(`display`)) === n2(243) && u2) {
    var m2 = e2 ?? ((_a2 = f2 ? s2 : o2) == null ? void 0 : _a2[n2(376)]());
    if (d2 || f2) if (r2.isMultipleX()) r2.selectRectForMultipleXs(m2, false);
    else {
      var h2 = t2 ?? r2.getDataIndexFromEvent(u2);
      t2 === -1 ? r2.api.tooltip.hide() : (r2.selectRectForSingle(m2, h2), r2.setExpand(h2, null, true));
    }
    else {
      var g2 = u2[n2(457)], _2 = u2.clientY;
      setTimeout(function() {
        var e3 = n2, t3 = [g2, _2].every(Number.isFinite) && gn.elementFromPoint(g2, _2), i3 = t3 && j(t3).datum();
        if (i3) {
          var a3 = r2.hasArcType() ? r2[e3(571)](r2.updateAngle(i3)) : i3 == null ? void 0 : i3[e3(444)];
          p2 && (t3 = s2.node()), a3 && r2[e3(306)]([a3], t3);
        } else r2.api.tooltip[e3(537)]();
      }, i2[n2(523)]);
    }
  }
} }, Ki = { getTranslate: function(e2, t2) {
  var n2 = M, r2;
  t2 === void 0 && (t2 = 0);
  var i2 = this, a2 = i2.config, o2 = i2.state, s2 = a2.axis_rotated, c2 = 0, l2, u2;
  if (t2 && /^(x|y2?)$/.test(e2) && (c2 = i2.getAxisSize(e2) * t2), e2 === `main`) l2 = Kn(o2.margin.left), u2 = Kn(o2.margin.top);
  else if (e2 === `context`) l2 = Kn(o2.margin2.left), u2 = Kn(o2[n2(482)].top);
  else if (e2 === `legend`) l2 = o2[n2(619)].left, u2 = o2[n2(619)].top;
  else if (e2 === `x`) l2 = s2 ? -c2 : 0, u2 = s2 ? 0 : o2[n2(1113)] + c2;
  else if (e2 === `y`) l2 = s2 ? 0 : -c2, u2 = s2 ? o2.height + c2 : 0;
  else if (e2 === `y2`) l2 = s2 ? 0 : o2.width + c2, u2 = s2 ? -c2 - 1 : 0;
  else if (e2 === `subX`) l2 = 0, u2 = s2 ? 0 : o2.height2;
  else if (e2 === `arc`) l2 = o2[n2(434)] / 2, u2 = o2.arcHeight / 2, (r2 = a2.arc_rangeText_values) != null && r2[n2(626)] && (u2 += 5 + (i2[n2(1013)](`gauge`) && a2.title_text ? 10 : 0));
  else if (e2 === `polar`) l2 = o2.arcWidth / 2, u2 = o2.arcHeight / 2;
  else if (e2 === `radar`) {
    var d2 = i2[n2(223)](), f2 = d2[0], p2 = d2[1];
    l2 = o2.width / 2 - f2, u2 = o2.height / 2 - p2;
  }
  return `translate(` + l2 + `, ` + u2 + `)`;
}, transformMain: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2[n2(476)].main, a2 = r2.$T, o2 = t2 != null && t2.axisX ? t2.axisX : a2(i2[n2(1057)](`.` + Ut.axisX), e2), s2 = t2 != null && t2.axisY ? t2.axisY : a2(i2.select(`.` + Ut[n2(1231)]), e2), c2 = t2 != null && t2.axisY2 ? t2[n2(507)] : a2(i2.select(`.` + Ut.axisY2), e2);
  a2(i2, e2)[n2(919)](`transform`, r2[n2(379)](`main`)), o2.attr(`transform`, r2.getTranslate(`x`)), s2[n2(919)](`transform`, r2.getTranslate(`y`)), c2.attr(`transform`, r2.getTranslate(`y2`)), i2.select(`.` + L.chartArcs)[n2(919)](`transform`, r2[n2(379)](`arc`));
}, transformAll: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2[n2(886)], o2 = a2.hasAxis, s2 = a2.hasFunnel, c2 = a2.hasTreemap, l2 = r2.$el;
  !s2 && !c2 && r2.transformMain(e2, t2), o2 && i2.subchart_show && r2[n2(747)](e2, t2), l2.legend && r2.transformLegend(e2);
} }, qi = { isValidChartType: function(e2) {
  var t2 = M;
  return !!(e2 && Object[t2(277)]($)[t2(509)](e2) > -1);
}, setTargetType: function(e2, t2) {
  var n2 = this, r2 = n2.config, i2 = n2.state.withoutFadeIn;
  n2.mapToTargetIds(e2).forEach(function(e3) {
    i2[e3] = t2 === r2.data_types[e3], r2.data_types[e3] = t2;
  }), e2 || (r2.data_type = t2);
}, updateTypesElements: function() {
  var e2 = M, t2 = this, n2 = t2.state[e2(673)];
  Object[e2(552)]($).forEach(function(r2) {
    var i2 = e2, a2 = $[r2], o2 = t2[i2(1013)](a2, null, true), s2 = n2[i2(898)][i2(509)](a2);
    s2 === -1 && o2 ? n2[i2(898)].push(a2) : s2 > -1 && !o2 && n2.types.splice(s2, 1);
  }), t2.setChartElements();
}, hasType: function(e2, t2, n2) {
  var _a2;
  var r2 = M;
  n2 === void 0 && (n2 = false);
  var i2 = this, a2 = i2[r2(636)], o2 = i2.state[r2(673)], s2 = a2.data_types, c2 = t2 || i2.data.targets, l2 = false;
  return !n2 && ((_a2 = o2[r2(898)]) == null ? void 0 : _a2[r2(509)](e2)) > -1 ? l2 = true : c2 != null && c2.length ? c2.forEach(function(t3) {
    var n3 = s2[t3.id];
    (n3 === e2 || !n3 && e2 === `line`) && (l2 = true);
  }) : Object.keys(s2).length ? Object.keys(s2).forEach(function(t3) {
    s2[t3] === e2 && (l2 = true);
  }) : l2 = a2.data_type === e2, l2;
}, hasTypeOf: function(e2, t2, n2) {
  var r2 = this;
  return n2 === void 0 && (n2 = []), e2 in Wr ? !Wr[e2].filter(function(e3) {
    return n2.indexOf(e3) === -1;
  }).every(function(e3) {
    return !r2.hasType(e3, t2);
  }) : false;
}, isTypeOf: function(e2, t2) {
  var _a2;
  var n2 = M, r2 = K(e2) ? e2 : e2.id, i2 = this.config && (((_a2 = this[n2(636)].data_types) == null ? void 0 : _a2[r2]) || this[n2(636)].data_type);
  return Y(t2) ? t2.indexOf(i2) >= 0 : i2 === t2;
}, hasPointType: function() {
  var e2 = this;
  return e2.hasTypeOf(`Line`) || e2.hasType(`bubble`) || e2.hasType(`scatter`);
}, hasArcType: function(e2, t2) {
  return this.hasTypeOf(`Arc`, e2, t2);
}, hasMultiArcGauge: function() {
  return this.hasType(`gauge`) && this.config.gauge_type === `multi`;
}, isLineType: function(e2) {
  var t2 = M, n2 = K(e2) ? e2 : e2.id;
  return !this.config.data_types[n2] || this.isTypeOf(n2, Wr[t2(582)]);
}, isStepType: function(e2) {
  var t2 = M;
  return this.isTypeOf(e2, Wr[t2(861)]);
}, isSplineType: function(e2) {
  var t2 = M;
  return this[t2(224)](e2, Wr[t2(757)]);
}, isAreaType: function(e2) {
  var t2 = M;
  return this[t2(224)](e2, Wr.Area);
}, isAreaRangeType: function(e2) {
  return this.isTypeOf(e2, Wr.AreaRange);
}, isBarType: function(e2) {
  return this.isTypeOf(e2, `bar`);
}, isBubbleType: function(e2) {
  return this.isTypeOf(e2, `bubble`);
}, isCandlestickType: function(e2) {
  return this.isTypeOf(e2, `candlestick`);
}, isScatterType: function(e2) {
  var t2 = M;
  return this.isTypeOf(e2, t2(579));
}, isTreemapType: function(e2) {
  return this.isTypeOf(e2, `treemap`);
}, isPieType: function(e2) {
  var t2 = M;
  return this.isTypeOf(e2, t2(835));
}, isFunnelType: function(e2) {
  var t2 = M;
  return this[t2(224)](e2, t2(1192));
}, isGaugeType: function(e2) {
  return this.isTypeOf(e2, `gauge`);
}, isDonutType: function(e2) {
  var t2 = M;
  return this.isTypeOf(e2, t2(558));
}, isPolarType: function(e2) {
  return this.isTypeOf(e2, `polar`);
}, isRadarType: function(e2) {
  return this.isTypeOf(e2, `radar`);
}, isArcType: function(e2) {
  var t2 = M;
  return this.isPieType(e2) || this.isDonutType(e2) || this.isGaugeType(e2) || this[t2(465)](e2) || this.isRadarType(e2);
}, isCirclePoint: function(e2) {
  var t2 = M, n2 = this.config, r2 = n2[t2(1001)], i2 = false;
  return i2 = (e2 == null ? void 0 : e2.tagName) === `circle` ? true : n2.point_type === `circle` && (!r2 || Y(r2) && r2[t2(626)] === 0), i2;
}, lineData: function(e2) {
  return this.isLineType(e2) ? [e2] : [];
}, arcData: function(e2) {
  return this.isArcType(e2.data) ? [e2] : [];
}, labelishData: function(e2) {
  var t2 = M;
  return this.isBarType(e2) || this.isLineType(e2) || this.isScatterType(e2) || this.isBubbleType(e2) || this.isCandlestickType(e2) || this.isFunnelType(e2) || this.isRadarType(e2) || this.isTreemapType(e2) ? e2.values[t2(1038)](function(e3) {
    return q(e3[t2(461)]) || !!e3.value;
  }) : [];
}, barLineBubbleData: function(e2) {
  var t2 = M;
  return this.isBarType(e2) || this[t2(322)](e2) || this.isBubbleType(e2) ? e2.values : [];
}, isInterpolationType: function(e2) {
  var t2 = M;
  return [`basis`, `basis-closed`, `basis-open`, `bundle`, `cardinal`, `cardinal-closed`, `cardinal-open`, `catmull-rom`, `catmull-rom-closed`, `catmull-rom-open`, t2(409), t2(883), `monotone-x`, `monotone-y`, t2(903)].indexOf(e2) >= 0;
} };
function Ji(e2) {
  var t2 = M, n2 = this, r2;
  return n2.isLineType(e2) ? r2 = n2[t2(788)](n2.getShapeIndices(n2.isLineType)) : n2.isBarType(e2) && (r2 = n2[t2(288)](n2.getShapeIndices(n2.isBarType))), r2;
}
var Yi = { getDrawShape: function() {
  var e2 = M, t2 = this, n2 = t2.config.axis_rotated, r2 = t2.state, i2 = r2.hasRadar, a2 = r2.hasTreemap, o2 = { type: {}, indices: {}, pos: {} };
  if (!a2 && [`bar`, `candlestick`, `line`, `area`][e2(743)](function(n3) {
    var r3 = e2, i3 = pr(/^(bubble|scatter)$/.test(n3) ? `line` : n3);
    if (t2[r3(1013)](n3) || t2.hasTypeOf(i3) || n3 === `line` && (t2.hasType(`bubble`) || t2.hasType(r3(579)))) {
      var a3 = t2[r3(1149)](t2[`is` + i3 + `Type`]), s3 = t2[`generateDraw` + i3];
      o2.indices[n3] = a3, o2.type[n3] = s3 ? s3.bind(t2)(a3, false) : void 0;
    }
  }), !t2.hasArcType() || i2 || a2) {
    var s2 = void 0, c2 = void 0;
    a2 || (s2 = i2 ? t2.radarCircleX : n2 ? t2[e2(172)] : t2[e2(377)], c2 = i2 ? t2[e2(923)] : n2 ? t2.circleX : t2.circleY), o2[e2(173)] = { xForText: t2[e2(587)](o2.indices, true), yForText: t2.generateXYForText(o2.indices, false), cx: (s2 || function() {
    })[e2(1194)](t2), cy: (c2 || function() {
    }).bind(t2) };
  }
  return o2;
}, getShapeIndices: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = r2.data_xs, a2 = Zn(i2), o2 = {}, s2 = a2 ? {} : 0;
  return a2 && xr(Object.keys(i2).map(function(e3) {
    return i2[e3];
  })).forEach(function(e3) {
    s2[e3] = 0, o2[e3] = {};
  }), n2.filterTargetsToShow(n2.data.targets.filter(e2, n2))[t2(743)](function(e3) {
    for (var t3 = (e3.id in i2) ? i2[e3.id] : ``, n3 = t3 ? o2[t3] : o2, a3 = 0, c2 = void 0; c2 = r2.data_groups[a3]; a3++) if (!(c2.indexOf(e3.id) < 0)) for (var l2 = 0, u2 = void 0; u2 = c2[l2]; l2++) {
      if (u2 in n3) {
        n3[e3.id] = n3[u2];
        break;
      }
      e3.id !== u2 && t3 && (n3[u2] = n3[e3.id] ?? s2[t3]);
    }
    Un(n3[e3.id]) && (n3[e3.id] = t3 ? s2[t3]++ : s2++, n3.__max__ = (t3 ? s2[t3] : s2) - 1);
  }), o2;
}, getIndices: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2[r2(636)], o2 = a2.data_xs, s2 = a2[r2(608)], c2 = t2.id, l2 = t2.index;
  if (i2[r2(819)](c2) && s2) {
    var u2 = {};
    return i2.getAllValuesOnIndex(l2, true).forEach(function(e3, t3) {
      u2[e3.id] = t3, u2.__max__ = t3;
    }), u2;
  }
  return Zn(o2) ? e2[o2[c2]] : e2;
}, getIndicesMax: function(e2) {
  return Zn(this.config.data_xs) ? Object.keys(e2).map(function(t2) {
    return e2[t2].__max__ || 0;
  }).reduce(function(e3, t2) {
    return e3 + t2;
  }) : e2.__max__;
}, getShapeX: function(e2, t2, n2) {
  var r2 = this, i2 = r2.config, a2 = r2.scale, o2 = n2 ? a2.subX : a2.zoom || a2.x, s2 = i2.bar_overlap, c2 = i2.bar_padding, l2 = function(e3, t3) {
    return e3 + t3;
  }, u2 = Jn(e2) && (e2._$total.length ? e2._$total.reduce(l2) / 2 : 0);
  return function(n3) {
    var i3 = Q, a3 = r2[i3(992)](t2, n3, i3(426)), d2 = n3.id in a3 ? a3[n3.id] : 0, f2 = (a3.__max__ || 0) + 1, p2 = 0;
    if (Zn(n3.x)) {
      var m2 = o2(n3.x, true);
      if (u2) {
        var h2 = e2[n3.id] || e2._$width;
        p2 = s2 ? m2 - h2 / 2 : m2 - h2 + e2._$total.slice(0, d2 + 1)[i3(493)](l2) - u2;
      } else p2 = m2 - (q(e2) ? e2 : e2._$width) * (f2 / 2 - (s2 ? 1 : d2));
    }
    return e2 && p2 && f2 > 1 && c2 && (d2 && (p2 += c2 * d2), f2 > 2 ? p2 -= (f2 - 1) * c2 / 2 : f2 === 2 && (p2 -= c2 / 2)), p2;
  };
}, getShapeY: function(e2) {
  var t2 = this, n2 = t2.isStackNormalized();
  return function(r2) {
    var i2 = Q, a2 = r2.value;
    return q(r2) ? a2 = r2 : t2.isAreaRangeType(r2) ? a2 = t2.getBaseValue(r2, `mid`) : n2 ? a2 = t2[i2(250)](`index`, r2, true) : t2.isBubbleZType(r2) ? a2 = t2.getBubbleZData(r2[i2(461)], `y`) : t2[i2(555)](r2) && (a2 = a2[1]), t2.getYScaleById(r2.id, e2)(a2);
  };
}, getShapeYMin: function(e2) {
  var t2 = M, n2 = this, r2 = n2.axis.getId(e2), i2 = n2.scale[r2].domain()[0], a2 = n2.config[t2(593) + r2 + t2(906)];
  return !n2[t2(1242)](e2) && !a2 && i2 > 0 ? i2 : 0;
}, getShapeOffsetData: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(844)](n2.filterTargetsToShow(n2[t2(444)][t2(517)].filter(e2, n2))), i2 = r2.map(function(e3) {
    return e3.id;
  }).join(`_`), a2 = Vr.shapeOffset + `_` + i2, o2 = n2.cache.get(a2);
  if (o2) return o2;
  var s2 = n2.isStackNormalized(), c2 = r2.map(function(e3) {
    var r3 = t2, i3 = e3.values, a3 = {};
    n2[r3(525)](e3) && (i3 = n2[r3(726)](i3));
    var o3 = i3.reduce(function(e4, t3) {
      var r4 = Number(t3.x);
      return e4[r4] = t3, a3[r4] = s2 ? n2.getRatio(`index`, t3, true) : t3.value, e4;
    }, {});
    return { id: e3.id, rowValues: i3, rowValueMapByXValue: o3, values: a3 };
  }), l2 = { indexMapByTargetId: r2.reduce(function(e3, t3, n3) {
    var r3 = t3.id;
    return e3[r3] = n3, e3;
  }, {}), shapeOffsetTargets: c2 };
  return n2.cache[t2(677)](a2, l2), l2;
}, getShapeOffset: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2.getShapeOffsetData(e2), o2 = a2.shapeOffsetTargets, s2 = a2.indexMapByTargetId, c2 = i2[r2(636)].data_groupsZeroAs;
  return function(e3, a3) {
    var l2 = r2, u2 = e3.id, d2 = e3[l2(461)], f2 = e3.x, p2 = i2.getIndices(t2, e3), m2 = i2[l2(1174)](u2, n2);
    if (i2[l2(555)](e3)) return m2(d2[0]);
    var h2 = Number(f2), g2 = m2(c2 === `zero` ? 0 : i2.getShapeYMin(u2)), _2 = g2;
    return o2.filter(function(e4) {
      return e4.id !== u2 && p2[e4.id] === p2[u2];
    }).forEach(function(e4) {
      var t3 = e4.id, n3 = e4.rowValueMapByXValue, r3 = e4.rowValues, i3 = e4.values;
      if (s2[t3] < s2[u2]) {
        var o3 = i3[h2], l3 = r3[a3];
        (!l3 || Number(l3.x) !== h2) && (l3 = n3[h2]), (l3 == null ? void 0 : l3.value) * d2 >= 0 && q(o3) && (d2 !== 0 || c2 === `positive` && o3 > 0 || c2 === `negative` && o3 < 0) && (_2 += m2(o3) - g2);
      }
    }), _2;
  };
}, circleY: function(e2, t2) {
  var n2 = this, r2 = e2.id, i2;
  return n2.isGrouped(r2) && (i2 = Ji.bind(n2)(e2)), i2 ? i2(e2, t2)[0][1] : n2.getYScaleById(r2)(n2.getBaseValue(e2));
}, getBarW: function(e2, t2, n2) {
  var _a2, _b;
  var r2 = M, i2 = this, a2 = i2.config, o2 = i2.org, s2 = i2.scale, c2 = i2[r2(886)], l2 = i2.getMaxDataCount(), u2 = e2 === `bar` && ((_a2 = a2.data_groups) == null ? void 0 : _a2.length), d2 = e2 + r2(944), f2 = (((_b = i2.getZoomTransform) == null ? void 0 : _b.call(i2)) ?? { k: 1 }).k, p2 = [a2[r2(382)] ?? o2.xDomain[0], a2.axis_x_max ?? o2[r2(1233)][1]].map(i2.axis.isTimeSeries() ? Or[r2(1194)](i2) : Number), m2 = t2.tickInterval(l2);
  if (s2.zoom && !i2[r2(501)].isCategorized() && f2 > 1) {
    var h2 = p2.every(function(e3, t3) {
      return e3 === o2.xDomain[t3];
    });
    m2 = o2.xDomain.map(function(e3, t3) {
      var n3 = h2 ? e3 : e3 - Math.abs(p2[t3]);
      return s2.zoom(n3);
    }).reduce(function(e3, t3) {
      return Math.abs(e3) + t3;
    }) / l2;
  }
  var g2 = function(e3) {
    var t3 = e3 ? a2[d2][e3] : a2[d2], r3 = e3 ? t3.ratio : a2[d2 + `_ratio`], o3 = e3 ? t3.max : a2[d2 + `_max`], s3 = q(t3) ? t3 : G(t3) ? t3.call(i2, c2.width, n2, l2) : n2 ? m2 * r3 / n2 : 0;
    return o3 && s3 > o3 ? o3 : s3;
  }, _2 = g2();
  return !u2 && Jn(a2[d2]) && (_2 = { _$width: _2, _$total: [] }, i2.filterTargetsToShow(i2.data[r2(517)]).forEach(function(e3) {
    var t3 = r2;
    a2[d2][e3.id] && (_2[e3.id] = g2(e3.id), _2[t3(841)].push(_2[e3.id] || _2._$width));
  })), _2;
}, getShapeByIndex: function(e2, t2, n2) {
  var r2 = this, i2 = r2.$el, a2 = W(t2) ? `-` + t2 : ``, o2 = i2[e2];
  return o2 = o2 && !o2.empty() ? o2.filter(function(e3) {
    return n2 ? e3.id === n2 : true;
  }).filter(function(e3) {
    var n3 = Q;
    return W(t2) ? e3[n3(1244)] === t2 : true;
  }) : (n2 ? i2.main.selectAll(`.` + an[e2 + `s`] + r2.getTargetSelectorSuffix(n2)) : i2.main).selectAll(`.` + an[e2] + a2), o2;
}, isWithinShape: function(e2, t2) {
  var n2 = M, r2, i2 = this, a2 = j(e2), o2;
  return i2.isTargetToShow(t2.id) ? (r2 = i2.hasValidPointType) != null && r2[n2(872)](i2, e2.nodeName) ? o2 = i2[n2(525)](t2) ? i2.isWithinStep(e2, i2.getYScaleById(t2.id)(i2.getBaseValue(t2))) : i2.isWithinCircle(e2, i2.isBubbleType(t2) ? i2.pointSelectR(t2) * 1.5 : 0) : e2.nodeName === `path` && (o2 = a2.classed(an.bar) ? i2.isWithinBar(e2) : true) : o2 = false, o2;
}, getInterpolate: function(e2) {
  var t2 = this.getInterpolateType(e2);
  return { basis: D, "basis-closed": re, "basis-open": S, bundle: le, cardinal: ne, "cardinal-closed": E, "cardinal-open": p, "catmull-rom": se, "catmull-rom-closed": ae, "catmull-rom-open": T, "monotone-x": g, "monotone-y": f, natural: m, "linear-closed": te, linear: _, step: O, "step-after": b, "step-before": d }[t2];
}, getInterpolateType: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = r2[t2(1170)], a2 = n2.isInterpolationType(i2) ? i2 : `cardinal`;
  return n2.isSplineType(e2) ? a2 : n2[t2(525)](e2) ? r2.line_step_type : `linear`;
}, isWithinBar: function(e2) {
  var t2 = M, n2 = ir(this[t2(886)].event, e2), r2 = nr(e2), i2 = r2[0], a2 = r2[1], o2 = Math.min(i2.x, a2.x), s2 = Math.min(i2.y, a2.y), c2 = this.config.bar_sensitivity, l2 = sr(e2, true), u2 = l2.width, d2 = l2.height, f2 = o2 - c2, p2 = o2 + u2 + c2, m2 = s2 + d2 + c2, h2 = s2 - c2;
  return f2 < n2[0] && n2[0] < p2 && h2 < n2[1] && n2[1] < m2;
} }, Xi = (function() {
  var e2 = M;
  function t2(e3) {
    var t3 = Q;
    this.data = { xs: {}, targets: [] }, this.scale = { x: null, y: null, y2: null, subX: null, subY: null, subY2: null, zoom: null }, this.org = { xScale: null, xDomain: null }, this.format = { extraLineClasses: null, xAxisTick: null, dataTime: null, defaultAxisTime: null, axisTime: null };
    var n2 = this;
    n2.api = e3, n2.config = new Rr(), n2[t3(808)] = new Hr();
    var r2 = new Br();
    n2.$el = r2.getStore(t3(488)), n2.state = r2.getStore(`state`), n2.$T = n2.$T.bind(n2);
  }
  return t2[e2(977)].$T = function(t3, n2, r2) {
    var i2 = e2, a2 = this, o2 = a2[i2(636)], s2 = a2.state, c2 = o2.transition_duration, l2 = o2.subchart_show, u2 = t3;
    return u2 && (u2 = (i2(423) in u2 && (u2 = j(u2)), (n2 !== false && c2 || n2) && (!s2.zooming || s2[i2(799)]) && !s2.resizing && s2[i2(332)] && !l2 ? u2[i2(241)](r2).duration(c2) : u2)), u2;
  }, t2.prototype[e2(464)] = function() {
    var t3 = e2, n2 = this;
    n2.callPluginHook(`$beforeInit`), Z(n2.config[t3(374)], n2.api);
  }, t2.prototype.afterInit = function() {
    var e3 = this;
    e3.callPluginHook(`$afterInit`), Z(e3.config.onafterinit, e3.api);
  }, t2.prototype.init = function() {
    var t3 = e2, n2 = this, r2 = n2[t3(636)], i2 = n2.state, a2 = n2.$el, o2 = r2[t3(820)], s2 = r2.bindto;
    Gr(n2);
    var c2 = n2.hasArcType();
    if (i2.hasRadar = !i2.hasAxis && n2.hasType(`radar`), i2.hasFunnel = !i2.hasAxis && n2[t3(1013)](`funnel`), i2.hasTreemap = !i2.hasAxis && n2.hasType(t3(702)), i2.hasAxis = !c2 && !i2.hasFunnel && !i2.hasTreemap, i2.datetimeId = `bb-` + +/* @__PURE__ */ new Date() * cr(), o2) {
      var l2 = gn.createElement(t3(521));
      l2.type = `text/css`, gn.head.appendChild(l2), i2.style = { rootSelctor: `.` + i2[t3(1082)], sheet: l2.sheet }, a2[t3(521)] = l2;
    }
    var u2 = { element: s2, classname: `bb` };
    X(s2) && (u2[t3(488)] = s2[t3(488)] || `#chart`, u2.classname = s2.classname || u2.classname), a2[t3(186)] = G(u2[t3(488)].node) ? s2.element : j(u2.element || []), a2.chart.empty() && (a2.chart = j(gn.body.appendChild(gn.createElement(`div`)))), a2.chart[t3(238)](``).classed(u2[t3(689)], true).classed(i2.datetimeId, o2).style(`position`, `relative`), n2.initParams(), n2.initToRender();
  }, t2.prototype.initToRender = function(t3) {
    var n2 = e2, r2 = this, i2 = r2.config, a2 = r2.state, o2 = r2.$el[n2(186)], s2 = function() {
      return Ar(o2, { display: `none`, visibility: `hidden` });
    }, c2 = i2.render[n2(758)] === false ? false : i2.render.lazy || s2(), l2 = U.MutationObserver;
    c2 && l2 && i2.render[n2(731)] !== false && !t3 && new l2(function(e3, t4) {
      s2() || (t4.disconnect(), !a2.rendered && r2.initToRender(true));
    }).observe(o2.node(), { attributes: true, attributeFilter: [`class`, `style`] }), (!c2 || t3) && r2.convertData(i2, function(e3) {
      r2.initWithData(e3), r2.afterInit();
    });
  }, t2.prototype[e2(722)] = function() {
    var t3 = e2, n2, r2 = this, i2 = r2[t3(636)], a2 = r2[t3(1112)], o2 = r2.state;
    if (r2[t3(309)] = r2.generateColor(), r2.levelColor = r2.generateLevelColor(), i2[t3(1099)] === false && (i2.axis_x_show = false, i2.axis_y_show = false, i2.axis_y2_show = false, i2.subchart_show = false), (r2[t3(715)]() || (n2 = r2.hasLegendDefsPoint) != null && n2.call(r2)) && (r2.point = r2[t3(502)]()), o2.hasAxis) {
      r2.initClip(), a2.extraLineClasses = r2.generateExtraLineClass(), a2.dataTime = i2.data_xLocaltime ? je : Le, a2.axisTime = i2.axis_x_localtime ? Pe : Ne;
      var s2 = i2.zoom_enabled && i2.zoom_type === `drag`;
      a2.defaultAxisTime = function(e3) {
        var n3 = t3, i3 = r2[n3(802)], o3 = i3.x, c3 = i3.zoom, l3 = s2 ? c3 : c3 && o3.orgDomain().toString() !== c3.domain().toString(), u3 = e3.getMilliseconds() && n3(686) || e3[n3(916)]() && `.:%S` || e3.getMinutes() && `%I:%M` || e3[n3(273)]() && `%I %p` || e3.getDate() !== 1 && n3(847) || l3 && e3.getDate() === 1 && `%b'%y` || e3.getMonth() && `%-m/%-d` || `%Y`;
        return a2[n3(262)](u3)(e3);
      };
    }
    var c2 = i2.legend_position, l2 = i2.legend_inset_anchor, u2 = i2.axis_rotated;
    o2[t3(620)] = c2 === `right`, o2.isLegendInset = c2 === `inset`, o2.isLegendTop = l2 === `top-left` || l2 === `top-right`, o2.isLegendLeft = l2 === `top-left` || l2 === `bottom-left`, o2.rotatedPadding.top = r2.getResettedPadding(o2[t3(1134)].top), o2.rotatedPadding.right = u2 && !i2.axis_x_show ? 0 : 30, o2.inputType = Mr(i2.interaction_inputType_mouse, i2[t3(1012)]);
  }, t2.prototype.initWithData = function(t3) {
    var n2 = e2, r2, i2, a2, o2 = this, s2 = o2.config, c2 = o2[n2(802)], l2 = o2[n2(886)], u2 = o2[n2(476)], d2 = o2.org, f2 = l2.hasAxis, p2 = l2.hasFunnel, m2 = l2.hasTreemap, h2 = s2.interaction_enabled, g2 = o2.hasType(n2(1187)), _2 = s2[n2(966)];
    if (f2 && (o2.axis = o2.getAxisInstance(), s2[n2(604)] && o2.initZoom()), o2[n2(444)].xs = {}, o2.data.targets = o2[n2(1207)](t3), s2.data_filter && (o2.data.targets = o2[n2(444)].targets.filter(s2.data_filter.bind(o2.api))), s2.data_hide && o2.addHiddenTargetIds(s2.data_hide === true ? o2.mapToIds(o2.data.targets) : s2.data_hide), s2.legend_hide && o2.addHiddenLegendIds(s2.legend_hide === true ? o2.mapToIds(o2[n2(444)].targets) : s2.legend_hide), o2[n2(1138)](), o2.updateScales(true), f2) {
      var v2 = c2.x, y2 = c2.y, b2 = c2.y2, x2 = c2.subX, S2 = c2.subY, C2 = c2.subY2;
      v2 && (v2[n2(216)](wr(o2.getXDomain(o2.data.targets), !s2.axis_x_inverted)), x2.domain(v2.domain()), d2.xDomain = v2.domain()), y2 && (y2[n2(216)](o2.getYDomain(o2.data.targets, `y`)), S2.domain(y2.domain())), b2 && (b2[n2(216)](o2.getYDomain(o2[n2(444)].targets, `y2`)), C2 && C2[n2(216)](b2[n2(216)]()));
    }
    if (u2.svg = u2.chart.append(`svg`).style(`overflow`, `hidden`).style(n2(928), `block`), h2 && l2[n2(490)]) {
      var w2 = l2.inputType === `touch`, T2 = s2.onclick, E2 = s2.onover, D2 = s2.onout;
      u2.svg.on(`click`, (T2 == null ? void 0 : T2.bind(o2.api)) || null).on(w2 ? n2(1128) : `mouseenter`, (E2 == null ? void 0 : E2.bind(o2.api)) || null, w2 ? { passive: true } : void 0).on(w2 ? `touchend` : `mouseleave`, (D2 == null ? void 0 : D2[n2(1194)](o2.api)) || null);
    }
    s2.svg_classname && u2[n2(1220)].attr(`class`, s2.svg_classname);
    var O2 = G(s2[n2(607)]) && o2.patterns;
    (f2 || O2 || g2 || m2 || _2 || (r2 = o2.hasLegendDefsPoint) != null && r2.call(o2)) && (u2.defs = u2.svg.append(`defs`), f2 && [`id`, `idXAxis`, `idYAxis`, `idGrid`][n2(743)](function(e3) {
      var t4 = n2;
      o2.appendClip(u2[t4(1008)], l2[t4(1036)][e3]);
    }), o2.generateTextBGColorFilter(_2), O2 && o2.patterns[n2(743)](function(e3) {
      return u2.defs.append(function() {
        return e3.node;
      });
    })), o2.updateSvgSize(), o2.bindResize();
    var k2 = u2.svg[n2(440)](`g`).classed(I[n2(938)], true)[n2(919)](`transform`, p2 || m2 ? null : o2.getTranslate(`main`));
    if (u2.main = k2, s2.subchart_show && o2.initSubchart(), s2[n2(736)] && o2.initTooltip(), s2[n2(557)] && o2.initTitle(), !m2 && s2.legend_show && o2.initLegend(), s2.data_empty_label_text && k2[n2(440)](`text`).attr(`class`, H.text + ` ` + I.empty).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`), f2 && (s2.regions.length && o2[n2(899)](), !s2.clipPath && o2.axis[n2(1246)]()), k2.append(`g`).classed(I.chart, true).attr(`clip-path`, f2 ? l2.clip.path : null), o2.callPluginHook(n2(965)), o2.initChartElements(), f2 && (h2 && ((i2 = o2.initEventRect) == null || i2[n2(872)](o2)), o2[n2(576)](), s2.clipPath && ((a2 = o2.axis) == null || a2[n2(1246)]())), o2.updateTargets(o2.data.targets), o2.updateDimension(), Z(s2.oninit, o2[n2(1158)]), o2.setBackground(), o2.redraw({ withTransition: false, withTransform: true, withUpdateXDomain: true, withUpdateOrgXDomain: true, withTransitionForAxis: false, initializing: true }), s2.data_onmin || s2.data_onmax) {
      var A2 = o2[n2(927)]();
      Z(s2[n2(498)], o2.api, A2[n2(568)]), Z(s2[n2(405)], o2.api, A2.max);
    }
    s2[n2(736)] && o2.initShowTooltip(), l2.rendered = true;
  }, t2.prototype[e2(1169)] = function() {
    var t3 = e2, n2 = this, r2 = n2.state, i2 = r2.hasAxis, a2 = r2[t3(184)], o2 = r2.hasTreemap, s2 = [];
    if (i2) {
      var c2 = [`bar`, `bubble`, `candlestick`, `line`];
      n2[t3(636)].bar_front && c2.push(c2.shift());
      for (var l2 = 0, u2 = c2; l2 < u2.length; l2++) {
        var d2 = u2[l2], f2 = pr(d2);
        (d2 === `line` && n2[t3(1249)](f2) || n2.hasType(d2)) && s2.push(f2);
      }
    } else if (o2) s2[t3(559)](`Treemap`);
    else if (n2.hasType(t3(1192))) s2.push(`Funnel`);
    else {
      var p2 = n2.hasType(t3(1187)), m2 = n2.hasType(`gauge`);
      a2 || s2.push(`Arc`, t3(611)), m2 ? s2[t3(559)](`Gauge`) : a2 ? s2.push(`Radar`) : p2 && s2.push(`Polar`);
    }
    for (var h2 = 0, g2 = s2; h2 < g2.length; h2++) n2[`init` + g2[h2]]();
    Zn(n2.config.data_labels) && !n2.hasArcType(null, [`radar`]) && n2.initText();
  }, t2.prototype.setChartElements = function() {
    var t3 = e2, n2 = this, r2 = n2.$el, i2 = r2.chart, a2 = r2.svg, o2 = r2.defs, s2 = r2[t3(938)], c2 = r2.tooltip, l2 = r2[t3(876)], u2 = r2.title, d2 = r2.grid, f2 = r2.needle, p2 = r2.arcs, m2 = r2.circle, h2 = r2[t3(951)], g2 = r2.candlestick, _2 = r2[t3(760)], v2 = r2[t3(687)], y2 = r2.text;
    n2.api.$ = { chart: i2, svg: a2, defs: o2, main: s2, tooltip: c2, legend: l2, title: u2, grid: d2, arc: p2, circles: m2, bar: { bars: h2 }, candlestick: g2, line: { lines: _2, areas: v2 }, needle: f2, text: { texts: y2 } };
  }, t2.prototype.setBackground = function() {
    var t3 = e2, n2 = this, r2 = n2.config.background, i2 = n2.state, a2 = n2[t3(476)].svg;
    if (Zn(r2)) {
      var o2 = a2.select(`g`)[t3(394)](r2[t3(1e3)] ? t3(606) : `rect`, `:first-child`);
      r2[t3(1e3)] ? o2[t3(919)](`href`, r2[t3(1e3)]) : r2[t3(309)] && o2.style(`fill`, r2.color).attr(`clip-path`, i2.clip.path), o2.attr(t3(1093), r2.class || null)[t3(919)](`width`, `100%`).attr(`height`, t3(168));
    }
  }, t2.prototype.updateTargets = function(t3) {
    var n2 = e2, r2, i2, a2 = this, o2 = a2.state, s2 = o2.hasAxis, c2 = o2.hasFunnel, l2 = o2[n2(184)], u2 = o2[n2(1141)], d2 = function(e3) {
      var r3 = n2;
      return a2[`updateTargetsFor` + e3](t3[r3(1038)](a2[`is` + e3 + `Type`][r3(1194)](a2)));
    };
    if (a2.updateTargetsForText(t3), s2) {
      for (var f2 = [n2(951), `candlestick`, `line`], p2 = 0, m2 = f2; p2 < m2.length; p2++) {
        var h2 = m2[p2], g2 = pr(h2);
        (h2 === `line` && a2.hasTypeOf(g2) || a2.hasType(h2)) && d2(g2);
      }
      (r2 = a2[n2(824)]) == null || r2.call(a2, t3);
    } else if (a2.hasArcType(t3)) {
      var _2 = n2(255);
      l2 ? _2 = `Radar` : a2.hasType(`polar`) && (_2 = `Polar`), d2(_2);
    } else c2 ? d2(`Funnel`) : u2 && d2(`Treemap`);
    var v2 = a2.hasType(`bubble`) || a2.hasType(`scatter`);
    v2 && ((i2 = a2.updateTargetForCircle) == null || i2.call(a2)), a2.filterTargetsToShowAtInit(v2);
  }, t2.prototype.filterTargetsToShowAtInit = function(t3) {
    var n2 = e2;
    t3 === void 0 && (t3 = false);
    var r2 = this, i2 = r2.$el.svg, a2 = r2.$T, o2 = `.` + I.target;
    t3 && (o2 += `, .` + Kt.chartCircles + ` > .` + Kt.circles), a2(i2[n2(236)](o2)[n2(1038)](function(e3) {
      return r2.isTargetToShow(e3.id);
    })).style(`opacity`, null);
  }, t2.prototype.getWithOption = function(t3) {
    for (var n2 = { Dimension: true, EventRect: true, Legend: false, Subchart: true, Transform: false, Transition: true, TrimXDomain: true, UpdateXAxis: `UpdateXDomain`, UpdateXDomain: false, UpdateOrgXDomain: false, TransitionForExit: `Transition`, TransitionForAxis: e2(354), Y: true }, r2 = 0, i2 = Object.entries(n2); r2 < i2.length; r2++) {
      var a2 = i2[r2], o2 = a2[0], s2 = a2[1], c2 = K(s2) ? n2[s2] : s2;
      n2[o2] = Qn(t3, `with` + o2, c2);
    }
    return n2;
  }, t2.prototype.initialOpacity = function(t3) {
    var n2 = e2, r2 = this, i2 = r2.state[n2(618)];
    return r2.getBaseValue(t3) !== null && i2[t3.id] ? null : `0`;
  }, t2.prototype[e2(823)] = function() {
    var t3 = e2, n2 = this, r2 = n2.$el, i2 = n2.config, a2 = n2.state, o2 = Yr(i2.resize_timer), s2 = i2.resize_auto, c2 = [];
    c2.push(function() {
      return Z(i2.onresize, n2.api);
    }), /^(true|parent)$/.test(s2) && c2.push(function() {
      var e3 = Q;
      a2.resizing = true, i2.legend_show && (n2[e3(1138)](), n2.updateLegend()), n2[e3(1158)].flush(false);
    }), c2.push(function() {
      Z(i2.onresized, n2.api), a2.resizing = false;
    }), c2.forEach(function(e3) {
      return o2.add(e3);
    }), n2[t3(1224)] = o2, s2 === t3(644) ? (n2.resizeFunction[t3(536)] = new ResizeObserver(n2.resizeFunction[t3(1194)](n2)))[t3(731)](r2.chart.node()[t3(298)]) : U[t3(337)](`resize`, n2.resizeFunction);
  }, t2.prototype.callPluginHook = function(t3) {
    for (var n2 = e2, r2 = this, i2 = [], a2 = 1; a2 < arguments[n2(626)]; a2++) i2[a2 - 1] = arguments[a2];
    this.config[n2(348)].forEach(function(e3) {
      var a3 = n2;
      t3 === `$beforeInit` && (e3.$$ = r2, r2[a3(1158)].plugins.push(e3)), e3[t3].apply(e3, i2);
    });
  }, t2;
})();
fr(Xi.prototype, [ui, di, pi, hi, gi, bi, xi, mi, Ci, Di, Oi, Ai, Yi, ji, Mi, Hi, Wi, Gi, Ki, qi]);
function Zi(e2) {
  var t2 = M, n2 = this[t2(636)], r2, i2, a2, o2 = function() {
    var e3 = i2.shift();
    if (e3 && r2 && Jn(r2) && e3 in r2) return r2 = r2[e3], o2();
    if (!e3) return r2;
  };
  Object.keys(n2).forEach(function(t3) {
    r2 = e2, i2 = t3.split(`_`), a2 = o2(), J(a2) && (n2[t3] = a2);
  }), this[t2(1158)] && (this.state.orgConfig = e2);
}
var Qi = { resize: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.config, i2 = n2.state;
  i2.rendered && (r2[t2(219)] = e2 ? e2.width : null, r2.size_height = e2 ? e2.height : null, i2.resizing = true, this.flush(false), n2.resizeFunction());
}, flush: function(e2) {
  var t2 = M, n2, r2, i2 = this[t2(553)], a2 = i2[t2(886)], o2 = i2.$el.zoomResetBtn;
  a2.rendered ? (a2[t2(863)] ? (n2 = i2.brush) == null || n2.updateResize() : (r2 = i2.axis) == null || r2.setOrient(), o2 == null ? void 0 : o2.style(`display`, `none`), i2.scale[t2(234)] && (a2.current.zoomDomain = i2.scale.zoom.domain()), i2.scale[t2(234)] = null, e2 ? i2.redraw({ withTransform: true, withUpdateXDomain: true, withUpdateOrgXDomain: true, withLegend: true }) : i2.updateAndRedraw({ withLegend: true, withTransition: false, withTransitionForTransform: false }), !a2[t2(863)] && i2.brush && (i2.brush[t2(624)]().call(i2.brush.move), i2.unselectRect()), a2.current.zoomDomain && (i2.api.zoom(a2.current.zoomDomain), a2.current.zoomDomain = null)) : i2.initToRender(true);
}, destroy: function() {
  var e2 = M, t2 = this, n2, r2 = this.internal, i2 = r2.$el, a2 = i2.chart, o2 = i2.style, s2 = i2.svg;
  if (Zn(r2)) for (var c2 in r2.callPluginHook(`$willDestroy`), r2.charts.splice(r2.charts.indexOf(this), 1), r2.unbindAllEvents(), s2.select(`*`).interrupt(), r2[e2(1224)].clear(), (n2 = r2[e2(1224)].resizeObserver) == null || n2.disconnect(), U.removeEventListener(`resize`, r2.resizeFunction), a2.classed(`bb`, false).style(e2(563), null).selectChildren().remove(), o2 && o2.parentNode.removeChild(o2), Object.keys(this).forEach(function(e3) {
    e3 === `internal` && Object.keys(r2).forEach(function(e4) {
      r2[e4] = null;
    }), t2[e3] = null, delete t2[e3];
  }), this) this[c2] = function() {
  };
  return null;
}, config: function(e2, t2, n2) {
  var r2 = M, i2 = this.internal, a2 = i2.config, o2 = i2.state, s2 = e2 == null ? void 0 : e2.replace(/\./g, `_`), c2;
  return e2 && s2 in a2 ? J(t2) ? (a2[s2] = t2, c2 = t2, n2 && this.flush()) : c2 = a2[s2] : (arguments[r2(626)] === 0 || Xn(e2)) && (c2 = o2.orgConfig), c2;
} }, $i = { color: function(e2) {
  return this.internal.color(e2);
} }, ea = function(e2) {
  var t2 = M, n2 = this[t2(553)].data.targets;
  if (!Un(e2)) {
    var r2 = Y(e2) ? e2 : [e2];
    return n2.filter(function(e3) {
      return r2.some(function(t3) {
        return t3 === e3.id;
      });
    });
  }
  return n2;
};
fr(ea, { shown: function(e2) {
  return this.internal.filterTargetsToShow(this.data(e2));
}, values: function(e2, t2) {
  t2 === void 0 && (t2 = true);
  var n2 = null;
  if (e2) {
    var r2 = this.data(e2);
    Y(r2) && (n2 = [], r2.forEach(function(e3) {
      var r3 = Q, i2 = e3.values.map(function(e4) {
        return e4.value;
      });
      t2 ? n2 = n2.concat(i2) : n2[r3(559)](i2);
    }));
  }
  return n2;
}, names: function(e2) {
  var t2 = M;
  return this.internal[t2(591)](`names`, e2);
}, colors: function(e2) {
  return this.internal.updateDataAttributes(`colors`, e2);
}, axes: function(e2) {
  var t2 = M;
  return this.internal.updateDataAttributes(t2(334), e2);
}, min: function() {
  return this.internal.getMinMaxData().min;
}, max: function() {
  var e2 = M;
  return this.internal.getMinMaxData()[e2(769)];
} });
var ta = { data: ea }, na = function(e2) {
  var _a2;
  return (_a2 = U.btoa) == null ? void 0 : _a2.call(U, encodeURIComponent(e2).replace(/%([0-9A-F]{2})/g, function(e3, t2) {
    return String.fromCharCode(Number(`0x` + t2));
  }));
};
function ra(e2, t2, n2) {
  var r2 = M, i2 = t2 || n2, a2 = i2.width, o2 = i2[r2(1113)], s2 = new XMLSerializer(), c2 = e2.cloneNode(true), l2 = _r(hr(gn.styleSheets)).filter(function(e3) {
    return e3.cssText;
  }).map(function(e3) {
    return e3.cssText;
  });
  c2[r2(985)](`xmlns`, w.xhtml), c2.style.margin = `0`, c2.style.padding = `0`, t2.preserveFontStyle && c2.querySelectorAll(r2(601)).forEach(function(e3) {
    e3.innerHTML = ``;
  });
  var u2 = s2.serializeToString(c2), d2 = gn.createElement(`style`);
  d2[r2(522)](gn.createTextNode(l2.join(`
`)));
  var f2 = s2[r2(1058)](d2);
  return r2(696) + na(`<svg xmlns="` + w.svg + r2(770) + a2 + `" height="` + o2 + `" 
		viewBox="0 0 ` + n2[r2(1183)] + ` ` + n2.height + `" 
		preserveAspectRatio="` + ((t2 == null ? void 0 : t2[r2(1053)]) === false ? `none` : `xMinYMid meet`) + `">
			<foreignObject width="100%" height="100%">
				` + f2 + `
				` + u2.replace(/(url\()[^#]+/g, `$1`) + r2(170));
}
function ia(e2, t2) {
  var n2 = M, r2 = t2.top, i2 = t2.left, a2 = sr(e2, true), o2 = a2.x, s2 = a2.y, c2 = e2.getScreenCTM(), l2 = c2.a, u2 = c2.b, d2 = c2.c, f2 = c2.d, p2 = c2.e, m2 = c2.f, h2 = or(e2, true), g2 = h2.width, _2 = h2.height;
  return { x: l2 * o2 + d2 * s2 + p2 - i2, y: u2 * o2 + f2 * s2 + m2 - r2 + (_2 - Math[n2(448)](_2 / 4)), width: g2, height: _2 };
}
function aa(e2) {
  var t2 = M, n2 = or(e2), r2 = n2.left, i2 = n2.top, a2 = function(e3) {
    return e3.textContent || e3.childElementCount;
  }, o2 = [];
  return hr(e2[t2(358)](`text`)).filter(a2)[t2(743)](function(e3) {
    var n3 = t2, s2 = function(e4) {
      var t3 = Q, n4, a3 = U.getComputedStyle(e4), o3 = a3.fill, s3 = a3.fontFamily, c2 = a3[t3(684)], l2 = a3.textAnchor, u2 = a3.transform, d2 = ia(e4, { left: r2, top: i2 }), f2 = d2.x, p2 = d2.y, m2 = d2.width, h2 = d2.height;
      return n4 = {}, n4[e4.textContent] = { x: f2, y: p2, width: m2, height: h2, fill: o3, fontFamily: s3, fontSize: c2, textAnchor: l2, transform: u2 }, n4;
    };
    if (e3[n3(896)] > 1) return hr(e3.querySelectorAll(`tspan`))[n3(1038)](a2).forEach(function(e4) {
      o2.push(s2(e4));
    }), [];
    o2.push(s2(e3));
  }), o2;
}
function oa(e2, t2) {
  t2.forEach(function(t3) {
    Object.keys(t3).forEach(function(n2) {
      var r2 = Q, i2 = t3[n2], a2 = i2.x, o2 = i2.y, s2 = i2.width, c2 = i2.height, l2 = i2.fill, u2 = i2.fontFamily, d2 = i2.fontSize, f2 = i2.transform;
      if (e2.save(), e2[r2(694)] = d2 + ` ` + u2, e2.fillStyle = l2, f2 === `none`) e2[r2(1041)](n2, a2, o2);
      else {
        var p2 = f2.replace(/(matrix|\(|\))/g, ``).split(`,`);
        p2.splice(4).every(function(e3) {
          return +e3 == 0;
        }) ? (p2[r2(559)](a2 + s2 - s2 / 4), p2.push(o2 - c2 + c2 / 3)) : (p2.push(a2), p2.push(o2)), e2.transform.apply(e2, p2), e2.fillText(n2, 0, 0);
      }
      e2[r2(187)]();
    });
  });
}
var sa = { export: function(e2, t2) {
  var n2 = M, r2 = this, i2 = this.internal, a2 = i2.state, o2 = i2.$el, s2 = o2[n2(186)], c2 = o2.svg, l2 = a2.current, u2 = l2.width, d2 = l2.height, f2 = Cr(/* @__PURE__ */ Object.create(null), { width: u2, height: d2, preserveAspectRatio: true, preserveFontStyle: false, mimeType: `image/png` }, e2), p2 = ra(s2.node(), f2, { width: u2, height: d2 }), m2 = f2.preserveFontStyle ? aa(c2.node()) : [];
  if (t2 && G(t2)) {
    var h2 = new Image();
    h2.crossOrigin = `Anonymous`, h2.onload = function() {
      var e3 = n2, i3 = gn.createElement(`canvas`), a3 = i3.getContext(`2d`);
      i3[e3(1183)] = f2.width || u2, i3.height = f2.height || d2, a3[e3(917)](h2, 0, 0), m2.length && (m2.length = (oa(a3, m2), 0)), t2.bind(r2)(i3.toDataURL(f2.mimeType));
    }, h2.src = p2;
  }
  return p2;
} }, ca = { focus: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.state, i2 = n2.mapToTargetIds(e2), a2 = n2[t2(476)].svg.selectAll(n2.selectorTargets(i2.filter(n2[t2(1125)], n2)));
  this.revert(), this.defocus(), a2[t2(901)](B[t2(699)], true)[t2(901)](B[t2(520)], false), n2[t2(1180)]() && !r2.hasRadar && (n2.expandArc(i2), n2.hasType(`gauge`) && n2.markOverlapped(e2, n2, `.` + R.gaugeValue)), n2.toggleFocusLegend(i2, true), r2.focusedTargetIds = i2, r2.defocusedTargetIds = r2.defocusedTargetIds.filter(function(e3) {
    return i2.indexOf(e3) < 0;
  });
}, defocus: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.state, i2 = n2[t2(1147)](e2);
  n2[t2(476)].svg.selectAll(n2.selectorTargets(i2.filter(n2[t2(1125)], n2))).classed(B.focused, false).classed(B[t2(520)], true), n2.hasArcType(null, [`polar`]) && (n2.unexpandArc(i2), n2[t2(1013)](`gauge`) && n2.undoMarkOverlapped(n2, `.` + R.gaugeValue)), n2.toggleFocusLegend(i2, false), r2.focusedTargetIds = r2.focusedTargetIds.filter(function(e3) {
    return i2.indexOf(e3) < 0;
  }), r2[t2(610)] = i2;
}, revert: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2[t2(636)], i2 = n2[t2(886)], a2 = n2.$el, o2 = n2.mapToTargetIds(e2);
  a2.svg.selectAll(n2.selectorTargets(o2)).classed(B.focused, false).classed(B.defocused, false), n2[t2(1180)](null, [`polar`]) && n2.unexpandArc(o2), r2.legend_show && (n2.showLegend(o2.filter(n2.isLegendToShow[t2(1194)](n2))), a2.legend[t2(236)](n2[t2(1029)](o2)).filter(function() {
    return j(this).classed(B.legendItemFocused);
  }).classed(B.legendItemFocused, false)), i2[t2(924)] = [], i2.defocusedTargetIds = [];
} }, la = { legend: { show: function(e2) {
  var t2 = this.internal;
  t2.showLegend(t2.mapToTargetIds(e2)), t2.updateAndRedraw({ withLegend: true });
}, hide: function(e2) {
  var t2 = this.internal;
  t2.hideLegend(t2.mapToTargetIds(e2)), t2.updateAndRedraw({ withLegend: true });
} } }, ua = { load: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.config;
  e2.xs && n2.addXs(e2.xs), `names` in e2 && this.data[t2(215)](e2[t2(215)]), `classes` in e2 && Object.keys(e2.classes).forEach(function(n3) {
    var i2 = t2;
    r2[i2(1153)][n3] = e2.classes[n3];
  }), `categories` in e2 && n2.axis[t2(762)]() && (r2.axis_x_categories = e2[t2(1064)]), `axes` in e2 && Object.keys(e2.axes).forEach(function(t3) {
    r2.data_axes[t3] = e2.axes[t3];
  }), `colors` in e2 && Object.keys(e2.colors).forEach(function(n3) {
    var i2 = t2;
    r2[i2(529)][n3] = e2.colors[n3];
  }), `unload` in e2 && e2.unload !== false ? n2.unload(n2.mapToTargetIds(e2.unload === true ? null : e2[t2(930)]), function() {
    yn(function() {
      return n2.loadFromArgs(e2);
    });
  }) : n2[t2(450)](e2);
}, unload: function(e2) {
  var t2 = M, n2 = this[t2(553)], r2 = e2 || {};
  Xn(r2) && this.tooltip.hide(), Y(r2) ? r2 = { ids: r2 } : K(r2) && (r2 = { ids: [r2] });
  var i2 = n2.mapToTargetIds(r2.ids);
  n2[t2(930)](i2, function() {
    var e3 = t2;
    n2.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true }), n2.cache.remove(i2), fi.call(n2, r2[e3(753)], r2.resizeAfter);
  });
} };
function da(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = this.internal, o2 = a2[r2(1147)](t2), s2 = a2.state.hiddenTargetIds[r2(279)](function(e3) {
    return o2.indexOf(e3) > -1 && e3;
  }).filter(Boolean);
  a2.state.toggling = true, a2[(e2 ? `remove` : `add`) + `HiddenTargetIds`](o2);
  var c2 = a2.$el.svg.selectAll(a2.selectorTargets(o2)), l2 = e2 ? null : `0`;
  e2 && s2.length && (c2.style(`display`, null), Z(a2.config[r2(1084)], this, s2)), a2.$T(c2).style(r2(363), l2, `important`).call(er, function() {
    var _a2;
    var t3 = r2;
    !e2 && s2.length === 0 && (c2[t3(521)](`display`, `none`), Z((_a2 = a2.config) == null ? void 0 : _a2.data_onhidden, i2, o2)), c2.style(`opacity`, l2);
  }), n2[r2(615)] && a2[(e2 ? r2(304) : `hide`) + `Legend`](o2), a2.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true, withLegend: true }), a2[r2(886)].toggling = false;
}
var fa = { show: function(e2, t2) {
  t2 === void 0 && (t2 = {}), da.call(this, true, e2, t2);
}, hide: function(e2, t2) {
  t2 === void 0 && (t2 = {}), da.call(this, false, e2, t2);
}, toggle: function(e2, t2) {
  var n2 = M, r2 = this;
  t2 === void 0 && (t2 = {});
  var i2 = this.internal, a2 = { show: [], hide: [] };
  i2.mapToTargetIds(e2).forEach(function(e3) {
    return a2[i2.isTargetToShow(e3) ? `hide` : `show`].push(e3);
  }), a2[n2(304)].length && this.show(a2.show, t2), a2.hide.length && setTimeout(function() {
    return r2[n2(537)](a2.hide, t2);
  }, 0);
} }, pa = { tooltip: { show: function(e2) {
  var _a2, _b;
  var t2 = M, n2 = this.internal, r2 = n2.$el, i2 = n2.config, a2 = n2.state, o2 = a2[t2(998)], s2 = a2.hasFunnel, c2 = a2.hasTreemap, l2 = a2.inputType, u2, d2;
  if (e2[t2(935)] && (d2 = e2.mouse), e2[t2(444)]) {
    var f2 = e2.data, p2 = (_a2 = n2.getYScaleById(f2.id)) == null ? void 0 : _a2(f2.value);
    if ((s2 || c2) && f2.id) {
      var m2 = n2[t2(410)](f2.id, void 0, `.` + tn[t2(467)]);
      o2.rect = r2[t2(938)].select(m2);
    } else n2.isMultipleX() ? d2 = [n2.xx(f2), p2] : (i2.tooltip_grouped || (d2 = [0, p2]), u2 = f2.index ?? (n2[t2(1180)]() && f2.id ? (_b = n2.getArcElementByIdOrIndex(f2.id)) == null ? void 0 : _b[t2(229)]()[t2(1244)] : n2.getIndexByX(f2.x)));
  } else J(e2.x) ? u2 = n2.getIndexByX(e2.x) : J(e2.index) && (u2 = e2.index);
  (l2 === `mouse` ? [`mouseover`, `mousemove`] : [`touchstart`]).forEach(function(e3) {
    n2.dispatchEvent(e3, u2, d2);
  });
}, hide: function() {
  var _a2;
  var e2 = M, t2, n2, r2, i2 = this.internal, a2 = i2.state.inputType, o2 = (_a2 = i2.$el[e2(665)]) == null ? void 0 : _a2.datum();
  if (o2) {
    var s2 = JSON.parse(o2.current)[0].index;
    (a2 === `mouse` ? [`mouseout`] : [`touchend`]).forEach(function(e3) {
      i2.dispatchEvent(e3, s2);
    });
  }
  a2 === `touch` && i2.callOverOutForTouch(), i2.hideTooltip(true), (t2 = i2.hideGridFocus) == null || t2[e2(872)](i2), (n2 = i2.unexpandCircles) == null || n2.call(i2), (r2 = i2.expandBarTypeShapes) == null || r2.call(i2, false);
} } }, ma = /* @__PURE__ */ (function() {
  function e2(t2) {
    var n2 = Q;
    this.plugins = [];
    var r2 = new Xi(this);
    this.internal = r2, (function e3(t3, n3, r3) {
      Object.keys(t3)[Q(743)](function(i2) {
        var a2 = G(t3[i2]), o2 = n3 !== r3, s2 = Zn(t3[i2]), c2 = s2 && Object.keys(t3[i2]).length > 0;
        a2 && (!o2 && c2 || o2) ? n3[i2] = t3[i2].bind(r3) : s2 && !a2 ? n3[i2] = {} : n3[i2] = t3[i2], c2 && e3(t3[i2], n3[i2], r3);
      });
    })(e2[n2(977)], this, this), Zi[n2(872)](r2, t2), r2.beforeInit(), r2.init();
  }
  return e2;
})();
fr(ma.prototype, [Qi, $i, ta, sa, ca, la, ua, fa, pa]);
function ha(e2, t2, n2) {
  var r2 = e2.config, i2 = function(e3, n3) {
    var i3 = q(n3) ? n3 : n3 === false ? void 0 : null;
    i3 !== null && (r2[`axis_` + e3 + `_` + t2] = i3);
  };
  J(n2) && (Jn(n2) ? Object.keys(n2).forEach(function(e3) {
    i2(e3, n2[e3]);
  }) : (q(n2) || n2 === false) && [`y`, `y2`].forEach(function(e3) {
    i2(e3, n2);
  }), e2.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true }));
}
function ga(e2, t2) {
  var n2 = M, r2 = e2.config;
  return { x: r2[n2(952) + t2], y: r2[`axis_y_` + t2], y2: r2[n2(1118) + t2] };
}
var _a = { axis: { labels: function(e2) {
  var t2 = this.internal, n2;
  return e2 && (Object.keys(e2).forEach(function(n3) {
    t2.axis.setLabelText(n3, e2[n3]);
  }), t2.axis.updateLabels()), [`x`, `y`, `y2`].forEach(function(e3) {
    var r2 = t2.axis.getLabelText(e3);
    r2 && (!n2 && (n2 = {}), n2[e3] = r2);
  }), n2;
}, min: function(e2) {
  var t2 = this.internal;
  return W(e2) || e2 === false ? ha(t2, `min`, e2) : ga(t2, `min`);
}, max: function(e2) {
  var t2 = this.internal;
  return W(e2) || e2 === false ? ha(t2, `max`, e2) : ga(t2, `max`);
}, range: function(e2) {
  var t2 = M, n2 = this[t2(501)];
  if (arguments[t2(626)]) {
    var r2 = e2.min, i2 = e2.max;
    J(i2) && n2.max(i2), J(r2) && n2.min(r2);
  } else return { max: n2[t2(769)](), min: n2[t2(568)]() };
} } }, va = { category: function(e2, t2) {
  var n2 = this.internal, r2 = n2.config;
  return arguments.length > 1 && (r2.axis_x_categories[e2] = t2, n2.redraw()), r2.axis_x_categories[e2];
}, categories: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.config;
  if (!e2 || !Array.isArray(e2)) {
    var i2 = r2.axis_x_categories;
    return Xn(i2) ? Object.values(n2.data.xs)[0] : i2;
  }
  return r2[t2(369)] = e2, n2.redraw(), r2[t2(369)];
} }, ya = { flow: function(e2) {
  var t2 = M, n2 = this[t2(553)], r2;
  (e2.json || e2[t2(1023)] || e2.columns) && n2.convertData(e2, function(e3) {
    r2 = e3, i2();
  });
  function i2() {
    var i3 = t2, a2, o2 = 0, s2 = 0, c2, l2;
    if (!(n2.state.redrawing || !r2 || !jr())) {
      var u2 = [], d2 = n2.getMaxDataCount(), f2 = n2.convertDataToTargets(r2, true), p2 = n2.axis.isTimeSeries();
      n2.data.targets.forEach(function(e3) {
        for (var t3 = Q, n3 = false, r3 = 0; r3 < f2.length; r3++) if (e3.id === f2[r3].id) {
          n3 = true, e3.values[e3[t3(277)].length - 1] && (s2 = e3.values[e3.values.length - 1].index + 1), o2 = f2[r3].values.length;
          for (var i4 = 0; i4 < o2; i4++) f2[r3].values[i4].index = s2 + i4, p2 || (f2[r3][t3(277)][i4].x = s2 + i4);
          e3.values = e3.values[t3(640)](f2[r3].values), f2.splice(r3, 1);
          break;
        }
        !n3 && u2.push(e3.id);
      }), n2.data.targets[i3(743)](function(e3) {
        for (var t3 = i3, r3 = 0; r3 < u2.length; r3++) if (e3.id === u2[r3]) {
          s2 = e3.values[e3[t3(277)].length - 1].index + 1;
          for (var a3 = 0; a3 < o2; a3++) e3.values.push({ id: e3.id, index: s2 + a3, x: p2 ? n2.getOtherTargetX(s2 + a3) : s2 + a3, value: null });
        }
      }), n2[i3(444)].targets.length && f2.forEach(function(e3) {
        for (var t3 = i3, r3 = [], a3 = n2.data.targets[0].values[0].index; a3 < s2; a3++) r3[t3(559)]({ id: e3.id, index: a3, x: p2 ? n2.getOtherTargetX(a3) : a3, value: null });
        e3.values.forEach(function(e4) {
          e4.index += s2, p2 || (e4.x += s2);
        }), e3.values = r3.concat(e3.values);
      }), n2.data.targets = n2.data.targets.concat(f2);
      var m2 = n2[i3(444)].targets[0], h2 = m2.values[0];
      J(e2.to) ? (o2 = 0, l2 = p2 ? Or.call(n2, e2.to) : e2.to, m2[i3(277)].forEach(function(e3) {
        e3.x < l2 && o2++;
      })) : J(e2.length) && (o2 = e2[i3(626)]), d2 ? d2 === 1 && p2 && (c2 = (m2.values[m2.values.length - 1].x - h2.x) / 2, a2 = [new Date(+h2.x - c2), new Date(+h2.x + c2)]) : (c2 = p2 ? m2.values.length > 1 ? m2.values[m2.values[i3(626)] - 1].x - h2.x : h2.x - n2.getXDomain(n2.data.targets)[0] : 1, a2 = [h2.x - c2, h2.x]), a2 && n2.updateXDomain(null, true, true, false, a2), n2.updateTargets(n2[i3(444)].targets), n2.redraw({ flow: { index: h2.index, length: o2, duration: W(e2[i3(1168)]) ? e2.duration : n2[i3(636)].transition_duration, done: e2[i3(753)], orgDataCount: d2 }, withLegend: true, withTransition: d2 > 1, withTrimXDomain: false, withUpdateXAxis: true });
    }
  }
} };
function ba(e2, t2) {
  var n2 = M, r2 = this.internal, i2 = r2.config, a2 = i2.transition_duration && jr(), o2 = `grid_` + t2 + `_lines`;
  return e2 ? (i2[o2] = e2, r2[n2(727)](), r2[n2(365)](a2), i2[o2]) : i2[o2];
}
function xa(e2, t2) {
  var n2 = M(667) + t2 + `_lines`;
  return ba.bind(this)(this.internal.config[n2].concat(e2 || []), t2);
}
function Sa(e2, t2) {
  var n2 = M;
  this[n2(553)].removeGridLines(e2, t2);
}
var Ca = function(e2) {
  return ba.bind(this)(e2, `x`);
};
fr(Ca, { add: function(e2) {
  return xa.bind(this)(e2, `x`);
}, remove: function(e2) {
  return Sa.bind(this)(e2, true);
} });
var wa = function(e2) {
  return ba[M(1194)](this)(e2, `y`);
};
fr(wa, { add: function(e2) {
  return xa.bind(this)(e2, `y`);
}, remove: function(e2) {
  return Sa[M(1194)](this)(e2, false);
} });
var Ta = { xgrids: Ca, ygrids: wa }, Ea = { groups: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.config;
  return Un(e2) ? r2.data_groups : (r2.data_groups = e2, n2[t2(858)](), r2[t2(943)]);
} };
function Da(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this.internal, i2 = r2.config, a2 = i2.transition_duration && jr();
  return e2 ? (i2[n2(1212)] = t2 ? i2.regions[n2(640)](e2) : e2, r2.updateRegion(), r2.redrawRegion(a2), t2 ? i2.regions : e2) : i2.regions;
}
var Oa = function(e2) {
  return Da.bind(this)(e2);
};
fr(Oa, { add: function(e2) {
  return Da.bind(this)(e2, true);
}, remove: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.config, i2 = n2.$T, a2 = e2 || {}, o2 = Qn(a2, `classes`, [$t.region]), s2 = n2.$el[t2(938)].select(`.` + $t.regions).selectAll(o2[t2(279)](function(e3) {
    return `.` + e3;
  }));
  return i2(s2).style(`opacity`, `0`)[t2(442)](), s2 = r2.regions, Object.keys(a2).length ? (s2 = s2.filter(function(e3) {
    var n3 = t2, r3 = false;
    return e3.class ? (e3.class.split(` `)[n3(743)](function(e4) {
      o2[n3(509)](e4) >= 0 && (r3 = true);
    }), !r3) : true;
  }), r2[t2(1212)] = s2) : r2[t2(1212)] = [], s2;
} });
var ka = { regions: Oa }, Aa = { x: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.axis, i2 = n2.data, a2 = r2.isCustomX() && r2.isCategorized();
  return Y(e2) && (a2 ? this.categories(e2) : (n2[t2(655)](i2.targets, e2), n2.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true }))), a2 ? this.categories() : i2.xs;
}, xs: function(e2) {
  var t2 = M, n2 = this[t2(553)];
  return X(e2) && (n2.updateTargetXs(n2.data.targets, e2), n2.redraw({ withUpdateOrgXDomain: true, withUpdateXDomain: true })), n2[t2(444)].xs;
} }, ja = (function() {
  var e2 = M;
  function t2(e3) {
    var t3 = Q;
    this.charSize = {};
    var n2 = ki(), r2 = e3.config, i2 = e3.params;
    this.owner = e3, this.config = r2, this.scale = n2, (r2.noTransition || !i2.config.transition_duration) && (r2.withoutTransition = true), r2.range = this.scaleExtent((i2[t3(441)] || n2)[t3(1091)]());
  }
  return t2.prototype.getSizeFor1Char = function(e3, t3, n2) {
    var r2 = Q;
    n2 === void 0 && (n2 = true);
    var i2 = { w: 5.5, h: 11.5 };
    return this.charSize[e3] && n2 ? this.charSize[e3] : (!t3.empty() && t3.text(`0`)[r2(872)](function(e4) {
      var t4 = r2;
      try {
        var n3 = sr(e4.node(), true), a2 = n3.width, o2 = n3[t4(1113)];
        a2 && o2 && (i2.w = a2, i2.h = o2);
      } finally {
        e4.text(``);
      }
    }), this[r2(800)][e3] = i2, i2);
  }, t2[e2(977)].getTickTransformSetter = function(e3) {
    var t3 = this.config, n2 = e3 === `x` ? function(e4) {
      var n3 = Q;
      return n3(526) + (e4 + t3[n3(343)]) + `,0)`;
    } : function(e4) {
      return `translate(0,` + e4 + `)`;
    };
    return function(e4, t4) {
      e4.attr(`transform`, function(e5) {
        var r2 = t4(e5);
        return W(e5) ? n2(r2) : null;
      });
    };
  }, t2[e2(977)].scaleExtent = function(e3) {
    var t3 = e3[0], n2 = e3[e3.length - 1];
    return t3 < n2 ? [t3, n2] : [n2, t3];
  }, t2[e2(977)].generateTicks = function(t3, n2) {
    var r2 = e2, i2 = this.owner.params.tickStepSize, a2 = t3[r2(216)](), o2 = a2[0], s2 = a2[1], c2 = [];
    if (n2 && i2) for (var l2 = Math[r2(448)](o2); l2 <= s2; ) c2.push(l2), l2 += i2;
    else if (t3.ticks) {
      var u2 = this.config.tickArguments;
      if (t3.type === `log` && !u2) {
        var d2 = ki(`_log`).domain([o2 > 0 ? o2 : 1, s2]).range(t3[r2(1091)]());
        c2 = d2.ticks();
        for (var f2 = s2.toFixed().length; c2.length > 15; f2--) c2 = d2.ticks(f2);
        c2.splice(0, 1, o2), c2.splice(c2.length - 1, 1, s2);
      } else c2 = t3.ticks.apply(t3, this.config.tickArguments || []);
      c2 = c2.map(function(e3) {
        var t4 = r2;
        return K(e3) && q(e3) && !isNaN(e3) && Math[t4(448)](e3 * 10) / 10 || e3;
      });
    }
    return c2;
  }, t2.prototype.copyScale = function() {
    var t3 = e2, n2 = this[t3(802)].copy();
    return n2.domain().length || n2.domain(this[t3(802)].domain()), n2.type = this.scale.type, n2;
  }, t2.prototype.textFormatted = function(e3) {
    var t3 = this.config.tickFormat, n2 = /\d+\.\d+0{5,}\d$/.test(e3) ? +String(e3).replace(/0+\d$/, ``) : e3, r2 = t3 ? t3(n2) : n2;
    return J(r2) ? r2 : ``;
  }, t2.prototype.transitionise = function(t3) {
    var n2 = e2, r2 = this.config, i2 = t3;
    if (r2.withoutTransition) i2 = t3[n2(1067)]();
    else if (r2.transition || !this.owner.params[n2(839)]) try {
      i2 = t3.transition(r2[n2(241)]);
    } catch {
    }
    return i2;
  }, t2;
})(), Ma = (function() {
  var e2 = M;
  function t2(e3) {
    var t3 = Q;
    e3 === void 0 && (e3 = {});
    var n2 = { innerTickSize: 6, outerTickSize: e3.outerTick ? 6 : 0, orient: t3(717), range: [], tickArguments: null, tickCentered: null, tickCulling: true, tickFormat: null, tickLength: 9, tickOffset: 0, tickPadding: 3, tickValues: null, transition: null, noTransition: e3.noTransition };
    n2.tickLength = Math[t3(769)](n2.innerTickSize, 0) + n2.tickPadding, this.config = n2, this[t3(776)] = e3, this.helper = new ja(this);
  }
  return t2[e2(977)].create = function(t3) {
    var n2 = e2, r2 = this, i2 = r2[n2(636)], a2 = r2.helper, o2 = r2.params, s2 = a2.scale, c2 = i2.orient, l2 = this.splitTickText.bind(r2), u2 = /^(left|right)$/.test(c2), d2 = /^(top|bottom)$/.test(c2), f2 = a2.getTickTransformSetter(d2 ? `x` : `y`), p2 = f2 === a2.axisX ? `y` : `x`, m2 = /^(top|left)$/.test(c2) ? -1 : 1, h2 = o2.tickTextRotate;
    this[n2(636)].range = s2.rangeExtent ? s2.rangeExtent() : a2.scaleExtent((o2.orgXScale || s2).range());
    var g2 = i2.innerTickSize, _2 = i2.tickLength, v2 = i2.range, y2 = o2.id, b2 = y2 && /^(x|y|y2)$/.test(y2) ? o2.config[`axis_` + y2 + n2(1165)] : { x: 0, y: 0 }, x2 = y2 === `subX` ? `subchart_axis_x` : `axis_` + y2, S2 = o2.config[x2 + `_show`], C2 = { tick: S2 ? o2[n2(636)][x2 + n2(1016)] : false, text: S2 ? o2.config[x2 + `_tick_text_show`] : false }, w2 = o2.config.axis_evalTextSize, T2;
    t3[n2(904)](function() {
      var e3 = n2, t4 = j(this), x3 = this.__chart__ || s2, S3 = a2.copyScale();
      T2 = t4, this[e3(793)] = S3, i2[e3(343)] = o2.isCategory ? (S3(1) - S3(0)) / 2 : 0;
      var E2 = t4[e3(236)](`.domain`).data([0]);
      if (E2.enter()[e3(440)](`path`)[e3(919)](e3(1093), e3(216)).merge(E2).attr(`d`, function() {
        var e4 = i2.outerTickSize * m2;
        return d2 ? `M` + v2[0] + `,` + e4 + `V0H` + v2[1] + `V` + e4 : `M` + e4 + `,` + v2[0] + `H0V` + v2[1] + `H` + e4;
      }), C2[e3(873)] || C2.text) {
        var D2 = i2.tickValues || a2.generateTicks(S3, u2 || o2.config.axis_rotated);
        r2[e3(372)] = D2;
        var O2 = t4[e3(236)](`.tick`)[e3(444)](D2, S3), k2 = O2.enter()[e3(394)](`g`, `.domain`).attr(`class`, `tick`), A2 = O2.exit()[e3(442)]();
        O2 = k2[e3(1078)](O2), C2[e3(873)] && k2[e3(440)](`line`), C2.text && k2.append(`text`);
        var ee2 = O2[e3(1057)](`text`), te2 = [], ne2 = { w: 0, h: 0 };
        G(w2) && (ne2 = w2.bind(r2[e3(776)].owner.api)(ee2[e3(376)](), y2), this.classList.contains(I.dummy) && (this[e3(412)] = ne2)), (!ne2 || ne2.w === 0 || ne2.h === 0) && (ne2 = r2[e3(1172)][e3(801)](c2, ee2, !!w2));
        var re2 = ee2.selectAll(e3(1014)).data(function(t5, n3) {
          var r3 = o2[e3(597)] ? l2(t5, S3, D2, u2, ne2.w) : Y(a2.textFormatted(t5)) ? a2.textFormatted(t5).concat() : [a2.textFormatted(t5)];
          return te2[n3] = r3.length, r3.map(function(e4) {
            return { index: n3, splitted: e4 };
          });
        });
        re2.exit().remove(), re2 = re2.enter()[e3(440)](`tspan`).merge(re2).text(function(t5) {
          return t5[e3(206)];
        }), re2.attr(`x`, d2 ? 0 : _2 * m2)[e3(919)](`dx`, (function() {
          var e4 = 0;
          return /(top|bottom)/.test(c2) && h2 && (e4 = 8 * Math.sin(h2 / 180 * Math.PI) * (c2 === `top` ? -1 : 1)), e4 + (b2.x || 0);
        })()).attr(`dy`, function(e4, t5) {
          var n3 = `.71em`, r3 = 0;
          return c2 !== `top` && (r3 = ne2.h, t5 === 0 && (r3 = u2 ? -((te2[e4.index] - 1) * (ne2.h / 2) - 3) : b2.y === 0 ? n3 : 0)), q(r3) && b2.y ? r3 + b2.y : r3 || n3;
        });
        var ie2 = O2.select(e3(760)), ae2 = O2.select(e3(601));
        if (k2.select(`line`).attr(p2 + `2`, g2 * m2), k2.select(`text`).attr(p2, _2 * m2), r2[e3(972)](ie2, ae2, ne2), o2.tickTitle) {
          var oe2 = ae2.select(`title`);
          (oe2.empty() ? ae2.append(`title`) : oe2).text(function(e4) {
            return o2.tickTitle[e4];
          });
        }
        if (S3.bandwidth) {
          var se2 = S3, ce2 = se2[e3(500)]() / 2;
          x3 = function(e4) {
            return se2(e4) + ce2;
          }, S3 = x3;
        } else x3.bandwidth ? x3 = S3 : f2(A2, S3);
        O2 = o2[e3(1143)].state.flowing ? a2.transitionise(O2) : o2.owner.$T(O2), f2(k2, x3), f2(O2.style(e3(363), null), S3);
      }
    }), this.g = T2;
  }, t2[e2(977)].getGeneratedTicks = function(t3) {
    var _a2;
    var n2 = e2, r2 = ((_a2 = this.generatedTicks) == null ? void 0 : _a2[n2(626)]) - 1, i2 = this.generatedTicks;
    if (r2 > t3) {
      var a2 = Math[n2(448)](r2 / t3 + 0.1);
      i2 = this.generatedTicks.map(function(e3, t4) {
        return t4 % a2 === 0 ? e3 : null;
      }).filter(function(e3) {
        return e3 !== null;
      })[n2(388)](0, t3);
    }
    return i2;
  }, t2[e2(977)].getTickXY = function() {
    var t3 = e2, n2 = this.config, r2 = { x: 0, y: 0 };
    return this.params.isCategory && (r2.x = n2.tickCentered ? 0 : n2.tickOffset, r2.y = n2.tickCentered ? n2[t3(343)] : 0), r2;
  }, t2.prototype.getTickSize = function(t3) {
    var n2 = e2, r2 = this.helper.scale, i2 = this[n2(636)], a2 = i2[n2(1080)], o2 = i2.range, s2 = r2(t3) + (i2.tickCentered ? 0 : i2.tickOffset);
    return o2[0] < s2 && s2 < o2[1] ? a2 : 0;
  }, t2.prototype.setTickLineTextPosition = function(t3, n2, r2) {
    var i2 = e2, a2 = this, o2 = this.getTickXY(), s2 = this[i2(636)], c2 = s2.innerTickSize, l2 = s2.orient, u2 = s2[i2(407)], d2 = s2.tickOffset, f2 = this.params.id, p2 = this.params.tickTextRotate, m2 = 6, h2 = r2.h / 2 - m2, g2 = function(e3) {
      var t4 = [`start`, `end`];
      return l2 === `top` && t4.reverse(), e3 ? t4[e3 > 0 ? 0 : 1] : `middle`;
    }, _2 = function(e3) {
      return e3 ? `rotate(` + e3 + `)` : null;
    }, v2 = function(e3) {
      var t4 = e3 / (l2 === `bottom` ? 15 : 23);
      return e3 ? 11.5 - 2.5 * t4 * (e3 > 0 ? 1 : -1) : u2;
    }, y2 = this.params.owner[i2(636)], b2 = y2.axis_rotated, x2 = y2.axis_x_tick_text_inner, S2 = this.params.config[`axis_` + f2 + `_tick_inner`];
    switch (l2) {
      case `bottom`:
        t3[i2(919)](`x1`, o2.x).attr(`x2`, o2.x)[i2(919)](`y2`, function(e3) {
          return a2[i2(674)].bind(a2)(e3) * (S2 ? -1 : 1);
        }), n2[i2(919)](`x`, 0).attr(`y`, v2(p2))[i2(521)](`text-anchor`, g2(p2)).style(`text-anchor`, function(e3, t4, n3) {
          var r3 = n3.length;
          return !b2 && t4 === 0 && (x2 === true || x2.first) ? `start` : !b2 && t4 === r3 - 1 && (x2 === true || x2.last) ? `end` : g2(p2);
        })[i2(919)](i2(310), _2(p2));
        break;
      case i2(299):
        t3.attr(`x2`, 0).attr(`y2`, S2 ? c2 : -c2), n2.attr(`x`, 0)[i2(919)](`y`, -(v2(p2) + h2 + m2)).style(`text-anchor`, g2(p2)).attr(`transform`, _2(p2));
        break;
      case `left`:
        t3[i2(919)](`x2`, S2 ? c2 : -c2).attr(`y1`, o2.y).attr(`y2`, o2.y), n2.attr(`x`, -u2).attr(`y`, d2 + (b2 ? h2 / 4 : h2))[i2(521)](i2(632), `end`);
        break;
      case `right`:
        t3.attr(`x2`, S2 ? -c2 : c2).attr(`y2`, 0), n2.attr(`x`, u2).attr(`y`, h2)[i2(521)](`text-anchor`, `start`);
    }
  }, t2.prototype.splitTickText = function(t3, n2, r2, i2, a2) {
    var o2 = e2, s2 = this[o2(776)], c2 = this.helper.textFormatted(t3), l2 = K(c2) && c2.indexOf(`
`) > -1 ? c2.split(`
`) : [];
    if (l2.length) return l2;
    if (Y(c2)) return c2;
    var u2 = s2[o2(612)];
    (!u2 || u2 <= 0) && (u2 = i2 ? 95 : s2[o2(327)] ? (s2.isInverted ? n2(r2[0]) - n2(r2[1]) : n2(r2[1]) - n2(r2[0])) - 12 : 110);
    function d2(e3, t4) {
      for (var n3 = o2, r3, i3, s3, c3 = 1; c3 < t4.length; c3++) if (t4[n3(811)](c3) === ` ` && (i3 = c3), r3 = t4[n3(1142)](0, c3 + 1), s3 = a2 * r3.length, u2 < s3) return d2(e3.concat(t4.substr(0, i3 || c3)), t4.slice(i3 ? i3 + 1 : c3));
      return e3[n3(640)](t4);
    }
    return d2(l2, String(c2));
  }, t2.prototype.scale = function(t3) {
    var n2 = e2;
    return arguments[n2(626)] ? (this[n2(1172)].scale = t3, this) : this[n2(1172)].scale;
  }, t2.prototype[e2(1214)] = function(t3) {
    var n2 = e2;
    return arguments.length ? (this[n2(636)].orient = t3 in { top: 1, right: 1, bottom: 1, left: 1 } ? String(t3) : n2(717), this) : this[n2(636)].orient;
  }, t2.prototype[e2(230)] = function(e3) {
    var t3 = this.config;
    return arguments.length ? (t3.tickFormat = e3, this) : t3.tickFormat;
  }, t2[e2(977)][e2(774)] = function(t3) {
    var n2 = e2, r2 = this[n2(636)];
    return arguments.length ? (r2[n2(774)] = t3, this) : r2.tickCentered;
  }, t2.prototype.tickOffset = function() {
    return this.config.tickOffset;
  }, t2.prototype.tickInterval = function(t3) {
    var n2 = e2, r2 = this.config, i2 = r2[n2(781)], a2 = r2.tickOffset, o2 = r2.tickValues, s2;
    if (this.params.isCategory) s2 = a2 * 2;
    else {
      var c2 = this.params.owner[n2(802)].zoom ?? this.helper.scale;
      s2 = (this.g.select(n2(532)).node().getTotalLength() - i2 * 2) / (t3 || this.g.selectAll(`line`).size());
      var l2 = o2 ? o2.map(function(e3, t4, n3) {
        var r3 = t4 + 1;
        return r3 < n3.length ? c2(n3[r3]) - c2(e3) : null;
      })[n2(1038)](Boolean) : [];
      s2 = Math.min.apply(Math, F(F([], l2, false), [s2], false));
    }
    return s2 === 1 / 0 ? 0 : s2;
  }, t2.prototype.ticks = function() {
    var e3 = [...arguments], t3 = this.config;
    return e3.length ? (t3.tickArguments = hr(e3), this) : t3.tickArguments;
  }, t2[e2(977)].tickCulling = function(t3) {
    var n2 = e2, r2 = this.config;
    return arguments.length ? (r2[n2(1066)] = t3, this) : r2[n2(1066)];
  }, t2[e2(977)].tickValues = function(e3) {
    var t3 = this, n2 = this.config;
    if (G(e3)) n2.tickValues = function() {
      return e3(t3.helper.scale.domain());
    };
    else {
      if (!arguments.length) return n2.tickValues;
      n2.tickValues = e3;
    }
    return this;
  }, t2.prototype.setTransition = function(e3) {
    return this.config.transition = e3, this;
  }, t2;
})(), Na = { getAxisInstance: function() {
  return this.axis || new Pa(this);
} }, Pa = (function() {
  var e2 = M;
  function t2(e3) {
    var t3 = Q;
    this[t3(920)] = {}, this.tick = { x: null, y: null, y2: null }, this.xs = [], this.orient = { x: `bottom`, y: `left`, y2: `right`, subX: `bottom` }, this.owner = e3, this.setOrient();
  }
  return t2[e2(977)].getAxisClassName = function(e3) {
    return Ut.axis + ` ` + Ut[`axis` + pr(e3)];
  }, t2.prototype.isHorizontal = function(t3, n2) {
    var r2 = e2, i2 = t3[r2(636)][r2(1088)];
    return n2 ? i2 : !i2;
  }, t2.prototype.isCategorized = function() {
    var t3 = e2, n2 = this.owner, r2 = n2.config, i2 = n2.state;
    return r2[t3(427)][t3(509)](`category`) >= 0 || i2.hasRadar;
  }, t2[e2(977)].isCustomX = function() {
    var e3 = this.owner.config;
    return !this.isTimeSeries() && (e3.data_x || Zn(e3.data_xs));
  }, t2[e2(977)].isTimeSeries = function(t3) {
    var n2 = e2;
    return t3 === void 0 && (t3 = `x`), this.owner.config[n2(593) + t3 + n2(436)] === `timeseries`;
  }, t2.prototype[e2(750)] = function(t3) {
    var n2 = e2;
    return t3 === void 0 && (t3 = `x`), this[n2(1143)].config[n2(593) + t3 + n2(436)] === `log`;
  }, t2.prototype.isTimeSeriesY = function() {
    return this.isTimeSeries(`y`);
  }, t2.prototype[e2(738)] = function(t3) {
    var n2 = e2;
    t3 === void 0 && (t3 = `x`);
    var r2 = `linear`;
    return this[n2(199)](t3) ? r2 = this.owner.config.axis_x_localtime ? `time` : `utc` : this.isLog(t3) && (r2 = `log`), r2;
  }, t2.prototype.getExtent = function() {
    var t3 = e2, n2 = this[t3(1143)], r2 = n2.config, i2 = n2.scale, a2 = r2.axis_x_extent;
    if (a2) {
      if (G(a2)) a2 = a2[t3(1194)](n2[t3(1158)])(n2.getXDomain(n2.data.targets), i2[t3(724)]);
      else if (this.isTimeSeries() && a2.every(isNaN)) {
        var o2 = Or.bind(n2);
        a2 = a2.map(function(e3) {
          return i2.subX(o2(e3));
        });
      }
    }
    return a2;
  }, t2.prototype.init = function() {
    var t3 = e2, n2 = this, r2 = this.owner, i2 = r2.config, a2 = r2.$el, o2 = a2.main, s2 = a2.axis, c2 = r2.state.clip, l2 = [`x`, `y`];
    i2[t3(1186)] && l2[t3(559)](`y2`), l2.forEach(function(e3) {
      var a3 = t3, l3 = n2.getAxisClassName(e3);
      s2[e3] = o2[a3(440)](`g`).attr(`class`, l3).attr(`clip-path`, function() {
        var t4 = null;
        return e3 === `x` ? t4 = c2.pathXAxis : e3 === `y` && (t4 = c2.pathYAxis), t4;
      }).attr(`transform`, r2.getTranslate(e3)).style(a3(1253), i2[`axis_` + e3 + a3(512)] ? null : `hidden`), n2.generateAxes(e3);
    });
  }, t2.prototype[e2(690)] = function() {
    var t3 = e2, n2 = this.owner.config, r2 = n2.axis_rotated, i2 = n2.axis_y_inner, a2 = n2.axis_y2_inner;
    this.orient = { x: r2 ? `left` : `bottom`, y: r2 ? t3(i2 ? 299 : 717) : i2 ? `right` : t3(300), y2: r2 ? a2 ? `bottom` : `top` : a2 ? `left` : `right`, subX: r2 ? `left` : t3(717) };
  }, t2.prototype.generateAxes = function(t3) {
    var n2 = e2, r2 = this.owner, i2 = r2.config, a2 = [], o2 = i2[`axis_` + t3 + n2(1204)], s2 = i2.axis_rotated, c2;
    t3 === `x` ? c2 = s2 ? xe : Ee : t3 === `y` ? c2 = s2 ? Ee : xe : t3 === `y2` && (c2 = s2 ? ze : De), o2.length && o2.forEach(function(e3) {
      var i3 = n2, o3 = e3.tick || {}, s3 = r2.scale[t3][i3(1232)]();
      e3.domain && s3.domain(e3.domain), a2.push(c2(s3).ticks(o3.count).tickFormat(G(o3.format) ? o3[i3(1112)][i3(1194)](r2.api) : function(e4) {
        return e4;
      })[i3(638)](o3.values)[i3(546)](o3[i3(809)] === false ? 0 : 6));
    }), this[n2(920)][t3] = a2;
  }, t2.prototype.updateAxes = function() {
    var t3 = e2, n2 = this, r2 = this[t3(1143)], i2 = r2.config, a2 = r2.$el[t3(938)], o2 = r2.$T;
    Object.keys(this.axesList).forEach(function(e3) {
      var s2 = t3, c2 = i2[`axis_` + e3 + `_axes`], l2 = r2[s2(802)][e3].copy(), u2 = l2.range();
      n2.axesList[e3].forEach(function(t4, d2) {
        var f2 = s2, p2 = t4[f2(802)]().range();
        u2.every(function(e4, t5) {
          return e4 === p2[t5];
        }) || t4.scale()[f2(1091)](u2);
        var m2 = n2.getAxisClassName(e3) + `-` + (d2 + 1), h2 = a2.select(`.` + m2.replace(/\s/, `.`));
        h2.empty() ? h2 = a2.append(`g`)[f2(919)](`class`, m2).style(`visibility`, i2[`axis_` + e3 + f2(512)] ? null : `hidden`).call(t4) : (c2[d2].domain && l2.domain(c2[d2][f2(216)]), o2(h2).call(t4.scale(l2))), h2[f2(919)](f2(310), r2.getTranslate(e3, d2 + 1));
      });
    });
  }, t2.prototype.setAxis = function(t3, n2, r2, i2) {
    var a2 = e2, o2 = this[a2(1143)];
    t3 !== `subX` && (this.tick[t3] = this.getTickValues(t3)), this[t3] = this.getAxis(t3, n2, r2, t3 === `x` && (o2.scale.zoom || o2.config.subchart_show || o2.state.resizing) ? true : i2);
  }, t2.prototype[e2(786)] = function(t3, n2, r2, i2, a2) {
    var o2 = e2, s2 = this.owner, c2 = s2.config, l2 = /^(x|subX)$/.test(t3), u2 = l2 ? `x` : t3, d2 = l2 && this.isCategorized(), f2 = this.orient[t3], p2 = a2 ? 0 : s2.getAxisTickRotate(u2), m2;
    if (l2) m2 = t3 === `subX` ? s2.format.subXAxisTick : s2.format[o2(347)];
    else {
      var h2 = c2[o2(593) + t3 + `_tick_format`];
      G(h2) && (m2 = h2.bind(s2[o2(1158)]));
    }
    var g2 = this.tick[u2], _2 = Cr({ outerTick: r2, noTransition: i2, config: c2, id: t3, tickTextRotate: p2, owner: s2 }, l2 && { isCategory: d2, isInverted: c2.axis_x_inverted, tickMultiline: c2.axis_x_tick_multiline, tickWidth: c2.axis_x_tick_width, tickTitle: d2 && c2.axis_x_tick_tooltip && s2.api[o2(1064)](), orgXScale: s2.scale.x });
    l2 || (_2[o2(751)] = c2[`axis_` + u2 + `_tick_stepSize`]);
    var v2 = new Ma(_2).scale(l2 && s2.scale.zoom || n2).orient(f2);
    if (l2 && this.isTimeSeries() && g2 && !G(g2)) {
      var y2 = Or[o2(1194)](s2);
      g2 = g2.map(function(e3) {
        return y2(e3);
      });
    } else !l2 && this.isTimeSeriesY() && (v2.ticks(c2.axis_y_tick_time_value), g2 = null);
    g2 && v2.tickValues(g2), v2.tickFormat(m2 || !l2 && s2.isStackNormalized() && s2.hasAxisGroupedData(t3) && function(e3) {
      return e3 + `%`;
    }), d2 && (v2.tickCentered(c2.axis_x_tick_centered), Xn(c2.axis_x_tick_culling) && (c2[o2(550)] = false));
    var b2 = c2[`axis_` + u2 + `_tick_count`];
    return b2 && v2.ticks(b2), v2;
  }, t2.prototype.updateXAxisTickValues = function(t3, n2) {
    var r2 = e2, i2, a2 = this.owner, o2 = a2.config, s2 = o2.axis_x_tick_fit, c2 = o2.axis_x_tick_count, l2;
    return (s2 || c2 && s2) && (l2 = a2.mapTargetsToUniqueXs(t3), this[r2(762)]() && c2 > l2.length && (c2 = l2.length), l2 = this.generateTickValues(l2, c2, this.isTimeSeries())), n2 ? n2.tickValues(l2) : this.x && (this.x.tickValues(l2), (i2 = this.subX) == null || i2.tickValues(l2)), l2;
  }, t2.prototype.getId = function(t3) {
    var n2 = e2, r2 = this.owner, i2 = r2[n2(636)], a2 = r2.scale, o2 = i2.data_axes[t3];
    return (!o2 || !a2[o2]) && (o2 = `y`), o2;
  }, t2.prototype[e2(190)] = function(t3) {
    var n2 = e2, r2 = this[n2(1143)], i2 = r2.config, a2 = r2.format, o2 = t3 && i2.subchart_axis_x_tick_format || i2.axis_x_tick_format, s2 = this.isTimeSeries(), c2 = this.isCategorized(), l2;
    return o2 ? G(o2) ? l2 = o2.bind(r2.api) : s2 && (l2 = function(e3) {
      return e3 ? a2.axisTime(o2)(e3) : ``;
    }) : l2 = s2 ? a2.defaultAxisTime : c2 ? r2.categoryName : function(e3) {
      return e3 < 0 ? e3.toFixed(0) : e3;
    }, G(l2) ? function(e3) {
      return l2.apply(r2, c2 ? [e3, r2.categoryName(e3)] : [e3]);
    } : l2;
  }, t2.prototype[e2(595)] = function(t3) {
    var n2 = e2, r2 = this[n2(1143)], i2 = r2.config[n2(593) + t3 + n2(1011)], a2 = r2[t3 + `Axis`];
    return (G(i2) ? i2[n2(872)](r2[n2(1158)]) : i2) || (a2 ? a2.tickValues() : void 0);
  }, t2.prototype[e2(193)] = function(e3) {
    return this.owner.config[`axis_` + e3 + `_label`];
  }, t2.prototype.getLabelText = function(e3) {
    var t3 = this.getLabelOptionByAxisId(e3);
    return K(t3) ? t3 : t3 ? t3.text : null;
  }, t2.prototype.setLabelText = function(t3, n2) {
    var r2 = e2, i2 = this.owner.config, a2 = this.getLabelOptionByAxisId(t3);
    K(a2) ? i2[r2(593) + t3 + r2(296)] = n2 : a2 && (a2.text = n2);
  }, t2.prototype.getLabelPosition = function(t3, n2) {
    var r2 = e2, i2 = this.owner.config.axis_rotated, a2 = this.getLabelOptionByAxisId(t3), o2 = Jn(a2) && a2[r2(563)] ? a2.position : n2[+!i2], s2 = function(e3) {
      return !!~o2.indexOf(e3);
    };
    return { isInner: s2(`inner`), isOuter: s2(r2(809)), isLeft: s2(`left`), isCenter: s2(`center`), isRight: s2(`right`), isTop: s2(`top`), isMiddle: s2(`middle`), isBottom: s2(r2(717)) };
  }, t2.prototype.getAxisLabelPosition = function(t3) {
    var n2 = e2;
    return this.getLabelPosition(t3, t3 === `x` ? [`inner-top`, `inner-right`] : [`inner-right`, n2(978)]);
  }, t2.prototype.getLabelPositionById = function(e3) {
    return this.getAxisLabelPosition(e3);
  }, t2.prototype.xForAxisLabel = function(t3) {
    var n2 = e2, r2 = this.owner, i2 = r2.state, a2 = i2[n2(1183)], o2 = i2[n2(1113)], s2 = this.getAxisLabelPosition(t3), c2 = s2.isMiddle ? -o2 / 2 : 0;
    return this[n2(516)](r2, t3 !== `x`) ? c2 = s2.isLeft ? 0 : s2.isCenter ? a2 / 2 : a2 : s2[n2(838)] && (c2 = -o2), c2;
  }, t2.prototype.textAnchorForAxisLabel = function(t3) {
    var n2 = e2, r2 = this[n2(1143)], i2 = this.getAxisLabelPosition(t3), a2 = i2.isMiddle ? `middle` : `end`;
    return this.isHorizontal(r2, t3 !== `x`) ? a2 = i2.isLeft ? `start` : i2.isCenter ? `middle` : `end` : i2.isBottom && (a2 = `start`), a2;
  }, t2.prototype[e2(641)] = function(t3) {
    var n2 = e2, r2 = this.owner, i2 = this.getAxisLabelPosition(t3), a2 = i2.isBottom ? `0.5em` : `0`;
    return this.isHorizontal(r2, t3 !== `x`) ? a2 = i2.isLeft ? n2(214) : i2.isRight ? `-0.5em` : `0` : i2[n2(1007)] && (a2 = `-0.5em`), a2;
  }, t2[e2(977)].dyForAxisLabel = function(t3) {
    var n2 = e2, r2 = this.owner, i2 = r2.config, a2 = i2.axis_rotated, o2 = this.getAxisLabelPosition(t3).isInner, s2 = i2[`axis_` + t3 + `_tick_rotate`] ? r2.getHorizontalAxisHeight(t3) : 0, c2 = this.getMaxTickSize(t3).width, l2;
    if (t3 === `x`) {
      var u2 = i2[n2(499)];
      l2 = a2 ? o2 ? `1.2em` : -25 - c2 : o2 ? `-0.5em` : u2 ? u2 - 10 : s2 ? s2 - 10 : `3em`;
    } else l2 = { y: [`-0.5em`, 10, `3em`, n2(792), 10], y2: [`1.2em`, -20, n2(373), `-0.5em`, 15] }[t3], l2 = a2 ? o2 ? l2[0] : s2 ? s2 * (t3 === `y2` ? -1 : 1) - l2[1] : l2[2] : o2 ? l2[3] : (l2[4] + (i2[`axis_` + t3 + `_inner`] ? 0 : c2 + l2[4])) * (t3 === `y` ? -1 : 1);
    return l2;
  }, t2.prototype.getMaxTickSize = function(t3, n2) {
    var r2 = e2, i2 = this.owner, a2 = i2[r2(636)], o2 = i2.state, s2 = o2.current, c2 = o2.resizing, l2 = i2.$el, u2 = l2.svg, d2 = l2.chart, f2 = s2.maxTickSize[t3], p2 = `axis_` + t3, m2 = { width: 0, height: 0 };
    if (c2 || n2 || !a2[p2 + `_show`] || f2.width > 0 && i2[r2(1035)]().length === 0) return f2;
    if (u2) {
      var h2 = /^y2?$/.test(t3), g2 = i2.filterTargetsToShow(i2.data.targets), _2 = i2.scale[t3][r2(1232)]()[r2(216)](i2[`get` + (h2 ? `Y` : `X`) + `Domain`](g2, t3)), v2 = _2.domain(), y2 = v2[0] === v2[1] && v2.every(function(e3) {
        return e3 > 0;
      }), b2 = Y(f2.domain) && f2.domain[0] === f2.domain[1] && f2[r2(216)][r2(278)](function(e3) {
        return e3 > 0;
      });
      if (y2 || b2) return f2.size;
      f2.domain = v2, h2 || f2.ticks.splice(0);
      var x2 = this.getAxis(t3, _2, false, false, true), S2 = a2[p2 + r2(892)], C2 = a2[p2 + `_tick_count`];
      !a2[p2 + `_tick_values`] && C2 && x2.tickValues(this[r2(192)](v2, C2, h2 ? this.isTimeSeriesY() : this.isTimeSeries())), !h2 && this.updateXAxisTickValues(g2, x2);
      var w2 = d2.append(`svg`)[r2(521)](r2(1253), `hidden`).style(`position`, `fixed`).style(`top`, `0`).style(`left`, `0`), T2 = w2.append(`g`)[r2(919)](`class`, Ut[`axis` + pr(t3)] + ` ` + I.dummy);
      x2.create(T2);
      var E2 = T2.node().sizeFor1Char;
      w2.selectAll(`text`).attr(`transform`, q(S2) ? `rotate(` + S2 + `)` : null).each(function(e3, t4) {
        var n3 = r2, i3 = E2 ? { width: this.textContent.length * E2.w, height: E2.h } : or(this, true), a3 = i3[n3(1183)], o3 = i3.height;
        m2.width = Math.max(m2.width, a3), m2.height = Math.max(m2.height, o3), h2 || (f2.ticks[t4] = a3);
      }), w2.remove();
    }
    return Object.keys(m2).forEach(function(e3) {
      m2[e3] > 0 && (f2[e3] = m2[e3]);
    }), f2;
  }, t2.prototype.getXAxisTickTextY2Overflow = function(t3) {
    var n2 = e2, r2 = this.owner, i2 = r2.axis, a2 = r2.config, o2 = r2[n2(886)], s2 = o2.current, c2 = o2.isLegendRight, l2 = o2.legendItemWidth, u2 = r2.getAxisTickRotate(`x`), d2 = u2 > 0 && u2 < 90;
    if ((i2.isCategorized() || i2.isTimeSeries()) && a2.axis_x_tick_fit && (!a2.axis_x_tick_culling || Xn(a2.axis_x_tick_culling)) && !a2.axis_x_tick_multiline && d2) {
      var f2 = a2.axis_y2_show && s2.maxTickSize.y2.width || 0, p2 = c2 && l2 || 0, m2 = s2.width - r2.getCurrentPaddingByDirection(`left`), h2 = this.getXAxisTickMaxOverflow(u2, m2 - t3) - f2 - p2, g2 = Math.max(0, h2) + t3;
      return Math[n2(568)](g2, m2 / 2);
    }
    return 0;
  }, t2[e2(977)].getXAxisTickMaxOverflow = function(t3, n2) {
    for (var r2 = e2, i2 = this.owner, a2 = i2.axis, o2 = i2.config, s2 = i2.state, c2 = a2[r2(199)](), l2 = s2.current[r2(528)].x.ticks, u2 = l2.length, d2 = s2.axis.x[r2(1099)], f2 = d2.left, p2 = d2.right, m2 = 0, h2 = u2 - (c2 && o2.axis_x_tick_fit ? 0.5 : 0), g2 = 0; g2 < u2; g2++) {
      var _2 = g2 + 1, v2 = Math.cos(Math.PI * t3 / 180) * l2[g2], y2 = _2 - (c2 ? 1 : 0.5) + f2;
      if (!(y2 <= 0)) {
        var b2 = (n2 - v2) / y2, x2 = h2 - _2, S2 = p2 * b2, C2 = x2 * b2 + S2, w2 = v2 - b2 / 2 - C2;
        m2 = Math.max(m2, w2);
      }
    }
    var T2 = i2.filterTargetsToShow(i2[r2(444)][r2(517)]), E2 = 0;
    if (!c2 && o2.axis_x_tick_count <= T2[r2(626)] && T2[0].values.length) {
      var D2 = ki(i2.axis.getAxisType(`x`), 0, n2 - m2)[r2(216)]([f2 * -1, i2.getXDomainMax(i2.data.targets) + 1 + p2]);
      E2 = (D2(1) - D2(0)) / 2;
    }
    return m2 + E2;
  }, t2.prototype.updateLabels = function(t3) {
    var n2 = e2, r2 = this, i2 = this.owner, a2 = i2.config, o2 = i2.$el.main, s2 = i2.$T, c2 = a2[n2(1088)];
    [`x`, `y`, `y2`][n2(743)](function(e3) {
      var i3 = n2, a3 = r2.getLabelText(e3), l2 = `axis` + pr(e3), u2 = Ut[l2 + `Label`];
      if (a3) {
        var d2 = o2.select(`text.` + u2);
        d2[i3(1222)]() && (d2 = o2.select(`g.` + Ut[l2]).insert(`text`, `:first-child`).attr(`class`, u2).attr(`transform`, [i3(1248), null][e3 === `x` ? +!c2 : +c2]).style(`text-anchor`, function() {
          return r2.textAnchorForAxisLabel(e3);
        })), s2(d2, t3).attr(`x`, function() {
          return r2[i3(222)](e3);
        })[i3(919)](`dx`, function() {
          return r2[i3(641)](e3);
        }).attr(`dy`, function() {
          return r2.dyForAxisLabel(e3);
        })[i3(601)](a3);
      }
    });
  }, t2.prototype.getPadding = function(e3, t3, n2, r2) {
    var i2 = q(e3) ? e3 : e3[t3];
    return W(i2) ? this.owner.convertPixelToScale(/(bottom|top)/.test(t3) ? `y` : `x`, i2, r2) : n2;
  }, t2.prototype.generateTickValues = function(e3, t3, n2) {
    var r2 = e3;
    if (t3) {
      var i2 = G(t3) ? t3() : t3;
      if (i2 === 1) r2 = [e3[0]];
      else if (i2 === 2) r2 = [e3[0], e3[e3.length - 1]];
      else if (i2 > 2) {
        var a2 = this.isCategorized(), o2 = i2 - 2, s2 = e3[0], c2 = e3[e3.length - 1], l2 = (c2 - s2) / (o2 + 1), u2 = void 0;
        r2 = [s2];
        for (var d2 = 0; d2 < o2; d2++) u2 = +s2 + l2 * (d2 + 1), r2.push(n2 ? new Date(u2) : a2 ? Math.round(u2) : u2);
        r2.push(c2);
      }
    }
    return n2 || (r2 = r2.sort(function(e4, t4) {
      return e4 - t4;
    })), r2;
  }, t2.prototype.generateTransitions = function(t3) {
    var n2 = e2, r2 = this.owner, i2 = r2[n2(476)].axis, a2 = r2.$T, o2 = [`x`, `y`, `y2`, `subX`].map(function(e3) {
      return a2(i2[e3], t3);
    });
    return { axisX: o2[0], axisY: o2[1], axisY2: o2[2], axisSubX: o2[3] };
  }, t2.prototype.redraw = function(t3, n2, r2) {
    var i2 = e2, a2 = this, o2 = this.owner, s2 = o2.config, c2 = o2.state, l2 = o2.$el, u2 = n2 ? `0` : null;
    [`x`, `y`, `y2`, `subX`].forEach(function(e3) {
      var n3 = a2[e3], i3 = l2.axis[e3];
      n3 && i3 && (!r2 && !s2.transition_duration && (n3.config.withoutTransition = true), i3.style(`opacity`, u2), n3.create(t3[`axis` + pr(e3)]));
    }), this.updateAxes(), !c2[i2(332)] && s2.axis_tooltip && this.setAxisTooltip();
  }, t2.prototype.redrawAxis = function(t3, n2, r2, i2, a2) {
    var o2 = e2, s2 = this, c2, l2, u2, d2 = this.owner, f2 = d2.config, p2 = d2.scale, m2 = d2.$el, h2 = !!p2.zoom, g2;
    !h2 && this.isCategorized() && t3.length === 0 && p2.x.domain([0, m2.axis.x.selectAll(`.tick`).size()]), p2.x && t3.length ? (!h2 && d2.updateXDomain(t3, n2[o2(720)], n2[o2(313)], n2.TrimXDomain), f2.axis_x_tick_values || this.updateXAxisTickValues(t3)) : this.x && (this.x.tickValues([]), (c2 = this.subX) == null || c2.tickValues([])), f2[o2(339)] && !i2 && (g2 = p2.x[o2(669)]()), [`y`, `y2`].forEach(function(e3) {
      var n3 = o2, r3 = `axis_` + e3 + `_`, i3 = p2[e3];
      if (i3) {
        var a3 = f2[r3 + `tick_values`], c3 = f2[r3 + `tick_count`];
        if (i3[n3(216)](d2.getYDomain(t3, e3, g2)), !a3 && c3) {
          var l3 = d2.axis[e3], u3 = i3.domain();
          l3.tickValues(s2.generateTickValues(u3, u3.every(function(e4) {
            return e4 === 0;
          }) ? 1 : c3, s2[n3(848)]()));
        }
      }
    }), this.redraw(r2, d2[o2(1180)](), a2), this.updateLabels(n2.Transition), (n2.UpdateXDomain || n2.UpdateXAxis || n2.Y) && t3.length && this.setCulling(), n2.Y && ((l2 = p2.subY) == null || l2.domain(d2.getYDomain(t3, `y`)), (u2 = p2.subY2) == null || u2.domain(d2[o2(723)](t3, `y2`)));
  }, t2.prototype.setCulling = function() {
    var t3 = e2, n2 = this.owner, r2 = n2[t3(636)], i2 = n2.state, a2 = i2.clip, o2 = i2.current, s2 = n2.$el;
    [`subX`, `x`, `y`, `y2`].forEach(function(e3) {
      var n3 = t3, i3 = s2.axis[e3], c2 = `axis_` + (e3 === n3(724) ? `x` : e3) + `_tick_culling`, l2 = r2[c2];
      if (i3 && l2) {
        var u2 = i3.selectAll(`.tick`), d2 = wr(u2.data(), !r2[c2 + n3(182)]), f2 = d2.length, p2 = r2[c2 + n3(207)], m2 = r2[c2 + n3(317)], h2;
        if (f2) {
          for (var g2 = 1; g2 < f2; g2++) if (f2 / g2 < p2) {
            h2 = g2;
            break;
          }
          u2.each(function(e4) {
            var t4 = n3, r3 = m2 ? this.querySelector(t4(601)) : this;
            r3 && (r3[t4(521)].display = d2.indexOf(e4) % h2 ? `none` : null);
          });
        } else u2.style(`display`, null);
        if (e3 === `x`) {
          var _2 = o2[n3(528)].x.clipPath ? a2.pathXAxisTickTexts : null;
          s2[n3(1220)].selectAll(`.` + Ut.axisX + n3(813)).attr(`clip-path`, _2);
        }
      }
    });
  }, t2.prototype.setAxisTooltip = function() {
    var t3 = e2, n2 = this.owner, r2 = n2.config, i2 = r2[t3(1088)], a2 = r2.axis_tooltip, o2 = n2.$el, s2 = o2.axis, c2 = o2.axisTooltip, l2 = a2[t3(248)] ?? `black`;
    n2.generateTextBGColorFilter(l2, { x: -0.15, y: -0.2, width: 1.3, height: 1.3 }), [`x`, `y`, `y2`].forEach(function(e3) {
      var _a2;
      var r3 = t3, a3, o3;
      if (K(l2) || l2[e3]) if (c2[e3] = (_a2 = s2[e3]) == null ? void 0 : _a2.append(`text`).classed(Ut[`axis` + e3.toUpperCase() + r3(588)], true).attr(`filter`, n2.updateTextBGColor({ id: e3 }, l2)), i2) {
        var u2 = e3 === `x` ? `x` : `y`, d2 = e3 === `y` ? r3(574) : e3 === `x` ? `-0.3em` : `-0.4em`;
        (a3 = c2[e3]) == null || a3[r3(919)](u2, d2).attr(`d` + (e3 === `x` ? `y` : `x`), e3 === `x` ? `0.4em` : `-1.3em`).style(`text-anchor`, e3 === `x` ? r3(1234) : null);
      } else {
        var u2 = e3 === `x` ? `y` : `x`, d2 = e3 === `x` ? `1.15em` : (e3 === `y` ? `-` : ``) + r3(375);
        (o3 = c2[e3]) == null || o3[r3(919)](u2, d2).attr(`d` + (e3 === `x` ? `x` : `y`), e3 === `x` ? `-1em` : `0.3em`).style(`text-anchor`, e3 === `y` ? r3(1234) : null);
      }
    });
  }, t2;
})(), Fa = { initEventRect: function() {
  var e2 = M;
  this.$el.main.select(`.` + I.chart).append(`g`).attr(e2(1093), Zt.eventRects).style(`fill-opacity`, `0`);
}, redrawEventRect: function() {
  var e2 = M, t2, n2 = this, r2 = n2.config, i2 = n2[e2(886)], a2 = n2[e2(476)], o2 = n2[e2(830)](), s2 = r2.axis_x_inverted;
  if (a2.eventRect) n2.updateEventRect(a2[e2(244)], true);
  else if (n2.data.targets.length) {
    var c2 = n2.$el.main.select(`.` + Zt.eventRects)[e2(521)](`cursor`, r2.zoom_enabled && r2.zoom_type !== `drag` ? r2.axis_rotated ? `ns-resize` : `ew-resize` : null).classed(Zt.eventRectsMultiple, o2).classed(Zt.eventRectsSingle, !o2)[e2(236)](`.` + Zt.eventRect).data([0]).enter().append(`rect`);
    n2[e2(447)](c2), n2[e2(357)](c2), c2[e2(872)](n2.getDraggableSelection()), a2.eventRect = c2, n2.state.inputType === `touch` && !a2[e2(1220)].on(`touchstart.eventRect`) && !n2[e2(1180)]() && n2.bindTouchOnEventRect(), i2[e2(332)] && n2[e2(447)](a2.eventRect, true);
  }
  if (!o2) {
    var l2 = n2.getMaxDataCountTarget();
    (!r2.data_xSort || s2) && l2.sort(function(e3, t3) {
      return s2 ? t3.x - e3.x : e3.x - t3.x;
    }), n2.updateDataIndexByX(l2), n2.updateXs(l2), (t2 = n2.updatePointClass) == null || t2.call(n2, true), i2[e2(998)].data = l2;
  }
  n2[e2(846)]();
}, bindTouchOnEventRect: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.state, i2 = t2.$el, a2 = i2.eventRect, o2 = i2[e2(1220)], s2 = function(n3) {
    var i3 = e2;
    if (t2.isMultipleX()) t2[i3(822)](n3);
    else {
      var a3 = t2.getDataIndexFromEvent(r2.event);
      t2.callOverOutForTouch(a3), a3 === -1 ? t2.unselectRect() : t2[i3(1188)](n3, a3);
    }
  }, c2 = function() {
    t2.unselectRect(), t2.callOverOutForTouch();
  }, l2 = n2.interaction_inputType_touch.preventDefault, u2 = Wn(l2) && l2 || false, d2 = !isNaN(l2) && l2 || null, f2, p2 = !u2 && d2 === null, m2 = function(t3) {
    var r3 = e2, i3 = t3[r3(599)], a3 = t3.changedTouches[0][r3(953) + (n2.axis_rotated ? `Y` : `X`)];
    i3 === r3(1128) ? u2 ? t3.preventDefault() : d2 !== null && (f2 = a3) : i3 === r3(1116) && (u2 || f2 === true || d2 !== null && Math.abs(f2 - a3) >= d2) && (f2 = true, t3.preventDefault());
  };
  a2.on(`touchstart`, function(e3) {
    r2.event = e3, t2.updateEventRect();
  }, { passive: p2 }).on(e2(1075), function(n3) {
    var i3 = e2;
    if (r2.event = n3, !a2.empty() && a2[i3(901)](Zt.eventRect)) {
      if (r2.dragging || r2.flowing || t2.hasArcType() || n3[i3(338)].length > 1) return;
      m2(n3), s2(a2.node());
    } else c2();
  }, { passive: p2 }).on(e2(449), function(n3) {
    var i3 = e2;
    r2.event = n3, !a2.empty() && a2.classed(Zt[i3(244)]) && (t2.hasArcType() || !t2.toggleShape || r2.cancelClick) && r2.cancelClick && (r2.cancelClick = false);
  }, { passive: p2 }), o2.on(`touchstart`, function(e3) {
    r2.event = e3;
    var t3 = e3.target;
    t3 && t3 !== a2.node() && c2();
  }, { passive: p2 });
}, updateEventRect: function(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2[n2(886)], a2 = r2.$el, o2 = i2[n2(998)], s2 = i2[n2(1183)], c2 = i2[n2(1113)], l2 = i2[n2(332)], u2 = i2.resizing, d2 = e2 || a2.eventRect;
  (!l2 || u2 || t2) && (d2.attr(`x`, 0)[n2(919)](`y`, 0).attr(`width`, s2).attr(n2(1113), c2), (!l2 || t2) && d2.classed(Zt[n2(244)], true)), (function() {
    var e3 = n2;
    if (o2) {
      var t3 = vr(a2.chart.node());
      o2.rect = or(d2.node(), true).toJSON(), o2.rect.top += t3.y, o2.rect[e3(300)] += t3.x;
    }
  })();
}, updateEventType: function(e2) {
  var t2 = M, n2 = this, r2 = Wn(e2), i2 = r2 ? n2.$el.eventRect : e2, a2 = r2 ? e2 !== (i2 == null ? void 0 : i2[t2(229)]().multipleX) : false;
  i2 && (a2 && (i2 == null ? void 0 : i2.on(`mouseover mousemove mouseout click`, null)), n2.isMultipleX() ? n2.generateEventRectsForMultipleXs(i2) : n2.generateEventRectsForSingleX(i2));
}, updateEventRectData: function() {
  var e2 = M, t2 = this, n2 = t2[e2(636)], r2 = t2.scale, i2 = t2.state, a2 = r2.zoom || r2.x, o2 = n2.axis_rotated, s2 = t2.isMultipleX(), c2, l2, u2, d2;
  if (t2[e2(357)](s2), s2) c2 = 0, l2 = 0, u2 = i2.width, d2 = i2.height;
  else {
    var f2, p2 = void 0;
    if (t2.axis.isCategorized()) f2 = t2[e2(340)](), p2 = function(e3) {
      return a2(e3.x) - f2 / 2;
    };
    else {
      var m2 = function(e3) {
        var n3 = e3.index;
        return { prev: t2.getPrevX(n3), next: t2.getNextX(n3) };
      };
      f2 = function(t3) {
        var n3 = e2, r3 = m2(t3), s3 = a2.domain(), c3;
        return r3.prev === null && r3.next === null ? c3 = o2 ? i2.height : i2.width : r3.prev === null ? c3 = (a2(r3.next) + a2(t3.x)) / 2 : r3.next === null ? c3 = a2(s3[1]) - (a2(r3[n3(1090)]) + a2(t3.x)) / 2 : (Object.keys(r3).forEach(function(e3, t4) {
          r3[e3] = r3[e3] ?? s3[t4];
        }), c3 = Math.max(0, (a2(r3.next) - a2(r3.prev)) / 2)), c3;
      }, p2 = function(t3) {
        var n3 = e2, r3 = m2(t3);
        return r3.prev === null && r3[n3(698)] === null ? 0 : r3.prev === null ? a2(a2[n3(216)]()[0]) : (a2(t3.x) + a2(r3.prev)) / 2;
      };
    }
    c2 = o2 ? 0 : p2, l2 = o2 ? p2 : 0, u2 = o2 ? i2[e2(1183)] : f2, d2 = o2 ? f2 : i2.height;
  }
  var h2 = i2.eventReceiver, g2 = function(e3, t3) {
    return G(e3) ? e3(t3) : e3;
  };
  h2.coords.splice(h2.data.length), h2[e2(444)].forEach(function(e3, t3) {
    h2.coords[t3] = { x: g2(c2, e3), y: g2(l2, e3), w: g2(u2, e3), h: g2(d2, e3) };
  });
}, selectRectForSingle: function(e2, t2) {
  var n2 = M, r2, i2, a2 = this, o2 = a2.config, s2 = a2.$el, c2 = s2.main, l2 = s2.circle, u2 = o2.data_selection_enabled, d2 = o2.data_selection_grouped, f2 = o2.data_selection_isselectable, p2 = o2.tooltip_grouped, m2 = a2.getAllValuesOnIndex(t2);
  if (!(p2 && (a2.showTooltip(m2, e2), (r2 = a2.showGridFocus) == null || r2.call(a2, m2), !u2 || d2))) {
    !l2 && c2[n2(236)](`.` + I.EXPANDED + `:not(.` + tn.shape + `-` + t2 + `)`)[n2(901)](I.EXPANDED, false);
    var h2 = c2.selectAll(`.` + tn.shape + `-` + t2)[n2(901)](I.EXPANDED, true)[n2(521)](n2(914), f2 ? `pointer` : null).filter(function(e3) {
      return a2[n2(586)](this, e3);
    });
    h2.empty() && !p2 && o2.interaction_onout && ((i2 = a2.hideGridFocus) == null || i2.call(a2), a2.hideTooltip(), !d2 && a2.setExpand(t2)), h2.call(function(r3) {
      var i3 = n2, o3, s3, c3 = r3.data();
      u2 && (d2 || f2 != null && f2.bind(a2[i3(1158)])(c3)) && (e2[i3(521)].cursor = i3(980)), p2 || (a2.showTooltip(c3, e2), (o3 = a2.showGridFocus) == null || o3.call(a2, c3), (s3 = a2[i3(1122)]) == null || s3.call(a2), r3.each(function(e3) {
        return a2.setExpand(t2, e3.id);
      }));
    });
  }
}, selectRectForMultipleXs: function(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = true);
  var r2 = this, i2 = r2.config, a2 = r2.state, o2 = r2.filterTargetsToShow(r2.data.targets);
  if (!(a2[n2(799)] || r2.hasArcType(o2))) {
    var s2 = ir(a2.event, e2), c2 = r2.findClosestFromTargets(o2, s2);
    if (t2 && a2.mouseover && (!c2 || c2.id !== a2[n2(779)].id) && (i2.data_onout[n2(872)](r2.api, a2.mouseover), a2.mouseover = void 0), !c2) {
      r2.unselectRect();
      return;
    }
    var l2 = (r2[n2(910)](c2) || r2.isScatterType(c2) || !i2[n2(948)] ? [c2] : r2[n2(967)](o2, c2.x)).map(function(e3) {
      return r2.addName(e3);
    });
    r2.showTooltip(l2, e2), r2.setExpand(c2.index, c2.id, true), r2[n2(1120)](l2);
    var u2 = r2.dist(c2, s2);
    (r2[n2(819)](c2.id) || u2 < r2.getPointSensitivity(c2)) && (r2.$el[n2(1220)].select(`.` + Zt.eventRect).style(n2(914), n2(980)), t2 && (!a2[n2(779)] || a2.mouseover.x !== c2.x || a2[n2(779)].id !== c2.id) && (i2.data_onover.call(r2.api, c2), a2.mouseover = c2));
  }
}, unselectRect: function() {
  var e2 = M, t2 = this, n2 = t2[e2(476)], r2 = n2.circle, i2 = n2[e2(665)];
  t2.$el.svg.select(`.` + Zt.eventRect).style(`cursor`, null), t2.hideGridFocus(), i2 && (t2.hideTooltip(), t2[e2(1073)](false)), r2 && !t2.isPointFocusOnly() && t2.unexpandCircles(), t2.expandBarTypeShapes(false);
}, generateEventRectsForSingleX: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state, a2 = i2.eventReceiver, o2 = e2.style(`cursor`, r2.data_selection_enabled && r2[t2(794)] ? `pointer` : null).on(t2(567), function(e3) {
    i2.event = e3;
    var t3 = a2.currentIdx, r3 = a2.data[t3 === -1 ? n2.getDataIndexFromEvent(e3) : t3];
    n2.clickHandlerForSingleX.bind(this)(r3, n2);
  }).datum({ multipleX: false });
  if (i2.inputType === t2(935)) {
    var s2 = function(e3) {
      var r3 = e3 ? n2[t2(1121)](e3) : a2.currentIdx;
      return r3 > -1 ? a2.data[r3] : null;
    };
    o2.on(`mouseover`, function(e3) {
      var r3 = t2;
      i2.event = e3, n2.updateEventRect(), Object[r3(277)](n2.$el[r3(976)]).forEach(function(e4) {
        var t3 = r3;
        return e4 == null ? void 0 : e4.style(t3(928), null);
      });
    }).on(`mousemove`, function(e3) {
      var o3 = t2, c2 = s2(e3);
      if (i2.event = e3, c2) {
        var l2 = c2.index, u2 = r2.line_step_type;
        if (r2.line_step_tooltipMatch && n2.hasType(`step`) && /^step\-(before|after)$/[o3(1021)](u2)) {
          var d2 = n2.scale[o3(234)] || n2[o3(802)].x, f2 = n2.axis.xs[l2], p2 = d2.invert(ir(e3, this)[0]);
          u2 === `step-after` && p2 < f2 ? --l2 : u2 === `step-before` && p2 > f2 && (l2 += 1);
        }
        n2.showAxisGridFocus();
        var m2 = r2.tooltip_grouped && l2 === a2.currentIdx;
        if (i2.dragging || i2.flowing || n2.hasArcType() || m2) {
          r2.tooltip_show && m2 && n2.setTooltipPosition();
          return;
        }
        l2 !== a2.currentIdx && (n2.setOverOut(false, a2.currentIdx), a2.currentIdx = l2), l2 === -1 ? n2.unselectRect() : n2.selectRectForSingle(this, l2), n2.setOverOut(l2 !== -1, l2);
      }
    }).on(`mouseout`, function(e3) {
      var o3 = t2;
      i2.event = e3, !(!r2 || n2.hasArcType() || a2.currentIdx === -1 || !r2.interaction_onout) && (n2.hideAxisGridFocus(), n2.unselectRect(), n2[o3(602)](false, a2.currentIdx), a2.currentIdx = -1);
    });
  }
  return o2;
}, clickHandlerForSingleX: function(e2, t2) {
  var n2 = M, r2 = t2, i2 = r2.config, a2 = r2.state, o2 = r2.$el.main;
  if (!e2 || r2[n2(1180)]() || a2.cancelClick) {
    a2.cancelClick && (a2.cancelClick = false);
    return;
  }
  var s2 = e2.index;
  o2[n2(236)](`.` + tn[n2(467)] + `-` + s2).each(function(e3) {
    var t3;
    (i2.data_selection_grouped || r2.isWithinShape(this, e3)) && ((t3 = r2.toggleShape) == null || t3.call(r2, this, e3, s2), i2.data_onclick.bind(r2.api)(e3, this));
  });
}, generateEventRectsForMultipleXs: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state;
  e2.on(`click`, function(e3) {
    var t3 = Q;
    i2[t3(663)] = e3, n2.clickHandlerForMultipleXS.bind(this)(n2);
  })[t2(229)]({ multipleX: true }), i2[t2(490)] === t2(935) && e2.on(`mouseover mousemove`, function(e3) {
    var r3 = t2;
    i2[r3(663)] = e3, n2.selectRectForMultipleXs(this);
  }).on(`mouseout`, function(e3) {
    var a2 = t2;
    i2[a2(663)] = e3, !(!n2.config || n2.hasArcType() || !r2.interaction_onout) && n2.unselectRect();
  });
}, clickHandlerForMultipleXS: function(e2) {
  var t2 = M, n2 = e2, r2 = n2.config, i2 = n2.state, a2 = n2.filterTargetsToShow(n2.data.targets);
  if (!n2.hasArcType(a2)) {
    var o2 = ir(i2.event, this), s2 = n2[t2(352)](a2, o2), c2 = n2.getPointSensitivity(s2);
    s2 && (n2.isBarType(s2.id) || n2.dist(s2, o2) < c2) && n2.$el[t2(938)].selectAll(`.` + tn.shapes + n2.getTargetSelectorSuffix(s2.id)).selectAll(`.` + tn.shape + `-` + s2.index).each(function() {
      var e3 = t2, i3;
      (r2.data_selection_grouped || n2.isWithinShape(this, s2)) && ((i3 = n2[e3(651)]) == null || i3.call(n2, this, s2, s2.index), r2.data_onclick[e3(1194)](n2[e3(1158)])(s2, this));
    });
  }
} }, Ia = { generateFlow: function(e2) {
  var t2 = M, n2 = this, r2 = n2.data, i2 = n2[t2(886)], a2 = n2.$el;
  return function() {
    var o2 = t2, s2 = e2.flow.length;
    i2.flowing = true, r2.targets.forEach(function(e3) {
      e3.values.splice(0, s2);
    }), n2.updateXGrid && n2.updateXGrid(true);
    var c2 = {};
    [`axis.x`, `grid.x`, `gridLines.x`, `region.list`, `text`, `bar`, `line`, o2(687), o2(331)].forEach(function(e3) {
      var t3 = e3.split(`.`), n3 = a2[t3[0]];
      n3 && t3.length > 1 && (n3 = n3[t3[1]]), n3 != null && n3.size() && (c2[e3] = n3);
    }), n2.hideGridFocus(), n2.setFlowList(c2, e2);
  };
}, setFlowList: function(e2, t2) {
  var n2 = M, r2 = this, i2 = t2.flow, a2 = t2.targets, o2 = i2[n2(1168)], s2 = o2 === void 0 ? t2.duration : o2, c2 = i2.index, l2 = i2.length, u2 = i2.orgDataCount, d2 = r2.getFlowTransform(a2, u2, c2, l2), f2 = Xr(), p2;
  f2.add(Object.keys(e2).map(function(t3) {
    var i3 = n2;
    return p2 = e2[t3].transition().ease(at).duration(s2), p2 = t3 === `axis.x` ? p2.call(function(e3) {
      r2.axis.x.setTransition(e3).create(e3);
    }) : t3 === `region.list` ? p2.filter(r2.isRegionOnX)[i3(919)](i3(310), d2) : p2.attr(`transform`, d2), p2;
  })), p2.call(f2, function() {
    r2.cleanUpFlow(e2, t2);
  });
}, cleanUpFlow: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.state, o2 = r2.$el.svg, s2 = i2.axis_rotated, c2 = t2.flow, l2 = t2.shape, u2 = t2.xv, d2 = l2.pos, f2 = d2.cx, p2 = d2.cy, m2 = d2.xForText, h2 = d2.yForText, g2 = c2.done, _2 = g2 === void 0 ? function() {
  } : g2, v2 = c2[n2(626)];
  v2 && ([`circle`, n2(601), `shape`, `eventRect`].forEach(function(e3) {
    for (var t3 = n2, r3 = [], i3 = 0; i3 < v2; i3++) r3.push(`.` + an[e3] + `-` + i3);
    o2[t3(236)](`.` + an[e3 + `s`]).selectAll(r3).remove();
  }), o2.select(`.` + an.xgrid)[n2(442)]()), Object.keys(e2)[n2(743)](function(t3) {
    var o3 = n2, c3 = e2[t3];
    t3 !== `axis.x` && c3.attr(`transform`, null), t3 === `grid.x` ? c3.attr(a2[o3(855)]) : t3 === `gridLines.x` ? (c3[o3(919)](`x1`, s2 ? 0 : u2).attr(`x2`, s2 ? a2.width : u2), c3.select(`text`).attr(`x`, s2 ? a2.width : 0).attr(`y`, u2)) : /^(area|bar|line)$/.test(t3) ? c3.attr(`d`, l2.type[t3]) : t3 === o3(601) ? c3.attr(`x`, m2).attr(`y`, h2).style(`fill-opacity`, r2.opacityForText.bind(r2)) : t3 === `circle` ? r2.isCirclePoint() ? c3.attr(`cx`, f2)[o3(919)](`cy`, p2) : c3.attr(`x`, function(e3) {
      return f2(e3) - i2.point_r;
    }).attr(`y`, function(e3) {
      return p2(e3) - i2.point_r;
    }) : t3 === o3(311) && c3.select(`rect`).filter(r2[o3(1009)]).attr(`x`, r2.regionX.bind(r2))[o3(919)](`width`, r2[o3(960)].bind(r2));
  }), i2.interaction_enabled && r2.redrawEventRect(), _2.call(r2[n2(1158)]), a2[n2(1148)] = false;
}, getFlowTransform: function(e2, t2, n2, r2) {
  var i2 = M, a2 = this, o2 = a2[i2(444)], s2 = a2.scale.x, c2 = o2.targets[0].values, l2 = a2.getValueOnIndex(c2, n2), u2 = a2.getValueOnIndex(c2, n2 + r2), d2, f2 = s2.domain(), p2 = a2.updateXDomain(e2, true, true);
  t2 ? d2 = t2 === 1 || (l2 == null ? void 0 : l2.x) === (u2 == null ? void 0 : u2.x) || a2.axis.isTimeSeries() ? s2(f2[0]) - s2(p2[0]) : s2((l2 == null ? void 0 : l2.x) || 0) - s2(u2.x) : c2.length === 1 ? a2.axis.isTimeSeries() ? (l2 = a2.getValueOnIndex(c2, 0), u2 = a2.getValueOnIndex(c2, c2.length - 1), d2 = s2(l2.x) - s2(u2.x)) : d2 = qn(p2) / 2 : d2 = s2(f2[0]) - s2(p2[0]);
  var m2 = qn(f2) / qn(p2);
  return `translate(` + d2 + `,0) scale(` + m2 + `,1)`;
} }, La = { initClip: function() {
  var e2 = M, t2 = this, n2 = t2.state, r2 = n2.clip;
  r2.id = n2.datetimeId + `-clip`, r2.idXAxis = r2.id + `-xaxis`, r2.idYAxis = r2.id + e2(197), r2[e2(397)] = r2.id + `-grid`, r2.path = t2.getClipPath(r2.id), r2.pathXAxis = t2[e2(1100)](r2[e2(600)]), r2.pathYAxis = t2.getClipPath(r2.idYAxis), r2[e2(806)] = t2.getClipPath(r2.idGrid);
}, getClipPath: function(e2) {
  var t2 = M, n2 = this.config;
  return !n2[t2(469)] && /-clip$/.test(e2) || !n2.axis_x_clipPath && /-clip-xaxis$/.test(e2) || !n2.axis_y_clipPath && /-clip-yaxis$/.test(e2) ? null : t2(289) + e2 + `)`;
}, appendClip: function(e2, t2) {
  var n2 = M;
  t2 && e2.append(`clipPath`)[n2(919)](`id`, t2).append(n2(1010));
}, setXAxisClipPath: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2[t2(886)], a2 = i2.margin, o2 = i2.width, s2 = i2[t2(1113)], c2 = r2.axis_rotated, l2 = Math[t2(769)](30, a2.left) - (c2 ? 0 : 20), u2 = (c2 ? a2.top + s2 + 10 : a2.bottom) + 20, d2 = c2 ? -(1 + l2) : -(l2 - 1), f2 = -15, p2 = c2 ? a2.left + 20 : o2 + 10 + l2;
  e2.attr(`x`, d2).attr(`y`, f2)[t2(919)](`width`, p2).attr(`height`, u2);
}, setYAxisClipPath: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state, a2 = i2[t2(1185)], o2 = i2[t2(1183)], s2 = i2.height, c2 = r2.axis_rotated, l2 = Math.max(30, a2.left) - (c2 ? 20 : 0), u2 = r2[t2(1161)], d2 = u2 && !c2 ? r2.axis_y_label.text ? -20 : -1 : c2 ? -(1 + l2) : -(l2 - 1), f2 = -(c2 ? 20 : a2.top), p2 = (c2 ? o2 + 15 + l2 : a2.left + 20) + (u2 ? 20 : 0), m2 = (c2 ? a2.bottom + 10 : a2[t2(299)] + s2) + 10;
  e2[t2(919)](`x`, d2).attr(`y`, f2).attr(`width`, p2).attr(`height`, m2);
}, updateXAxisTickClip: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2[e2(886)], i2 = r2.clip, a2 = r2.xAxisHeight, o2 = t2[e2(476)].defs, s2 = t2.getHorizontalAxisHeight(`x`);
  if (o2 && !i2[e2(203)]) {
    var c2 = i2.id + `-xaxisticktexts`;
    t2.appendClip(o2, c2), i2.pathXAxisTickTexts = t2.getClipPath(i2[e2(203)]), i2.idXAxisTickTexts = c2;
  }
  !n2.axis_x_tick_multiline && t2.getAxisTickRotate(`x`) && s2 !== a2 && (t2.setXAxisTickClipWidth(), t2.setXAxisTickTextClipPathWidth()), t2[e2(886)].xAxisHeight = s2;
}, setXAxisTickClipWidth: function() {
  var e2 = M, t2 = this, n2 = t2[e2(636)], r2 = t2[e2(886)].current.maxTickSize, i2 = t2.getAxisTickRotate(`x`);
  if (!n2.axis_x_tick_multiline && i2) {
    var a2 = Math.sin(Math.PI / 180 * Math.abs(i2));
    r2.x.clipPath = (t2.getHorizontalAxisHeight(`x`) - 20) / a2;
  } else r2.x.clipPath = null;
}, setXAxisTickTextClipPathWidth: function() {
  var e2 = M, t2 = this, n2 = t2.state, r2 = n2.clip, i2 = n2[e2(673)], a2 = t2.$el.svg;
  a2 && a2.select(`#` + r2[e2(203)] + ` rect`)[e2(919)](`width`, i2.maxTickSize.x.clipPath).attr(e2(1113), 30);
} }, Ra = function(e2) {
  return W(e2.position) || `end`;
}, za = function(e2) {
  var t2 = M;
  return e2[t2(563)] === t2(210) ? 4 : e2.position === `middle` ? 0 : -4;
};
function Ba(e2, t2, n2) {
  return function(r2) {
    var i2 = Q, a2 = e2 ? 0 : t2;
    return r2.position === `start` ? a2 = e2 ? -n2 : 0 : r2[i2(563)] === `middle` && (a2 = (e2 ? -n2 : t2) / 2), a2;
  };
}
function Va(e2, t2) {
  e2.each(function() {
    var e3 = j(this);
    [`x1`, `x2`, `y1`, `y2`].forEach(function(t3) {
      var n2 = Q;
      return e3.attr(t3, +e3[n2(919)](t3));
    });
  });
}
function Ha() {
  var e2 = [`tweens`, `_min`, `ERROR`, `data_groups`, `_width`, `redrawSubchart`, `getTotalDataSum`, `some`, `tooltip_grouped`, `pptx-wrapper`, `axis_y2_default`, `bar`, `axis_x_`, `client`, `columns`, `getAttribute`, `behavior:`, `last`, `cursor:pointer`, `Worker`, `regionWidth`, `getLegendWidth`, `jsonp`, `fill`, `substring`, `$init`, `data_labels_backgroundColors`, `filterByX`, `dataTypes`, `sqrt`, `textForGaugeMinMax`, `stringify`, `setTickLineTextPosition`, `dataFilter`, `rejectWith`, `point_focus_expand_enabled`, `axisTooltip`, `prototype`, `inner-top`, `expr`, `pointer`, `getKeys`, `delegateCount`, `updateTargetForCircle`, `hasData`, `setAttribute`, `defined`, `callOverOutForTouch`, `parseRows`, `bb-ygrids`, `isAreaType`, `title_position`, `getIndices`, `arcRange`, `worker terminated`, `stopPropagation`, `querySelector`, `removeTargetIds`, `eventReceiver`, `exit`, `imgUrl`, `point_pattern`, `candlestick`, `grid_front`, `flat`, `#bcbd22`, `application/x-www-form-urlencoded`, `isTop`, `defs`, `isRegionOnX`, `rect`, `_tick_values`, `interaction_inputType_touch`, `hasType`, `tspan`, `prefilters`, `_tick_show`, `step`, `borderTopWidth`, `Invalid Date`, `legend_tooltip`, `test`, `getUTCFullYear`, `rows`, `scheduleResize`, `mode`, `success`, `nodeName`, `module`, `selectorLegends`, `stops`, `prevObject`, `cleanData`, `padAngle`, `getFullYear`, `filterTargetsToShow`, `clip`, `yTile`, `filter`, `middle`, `callPluginHook`, `fillText`, `updateCircle`, `identifier`, `bb-chart-arcs-background`, `join`, `arc_needle_show`, `RADAR`, `scrollX`, `https:`, `updateLinearGradient`, `col`, `isSimulated`, `preserveAspectRatio`, `bb-selected-circles`, `tooltip_contents`, `isDone`, `select`, `serializeToString`, `nocontent`, `INCLUDED`, `gauge_background`, `animated`, `radarCircleX`, `categories`, `No Transport`, `tickCulling`, `interrupt`, `src`, `nonce`, `getLegendItemById`, `tooltip_init_x`, `X-Requested-With`, `_handleLinkedCharts`, `Deferred`, `touchstart.eventRect touchmove.eventRect`, `MsgQueue`, `replace`, `merge`, `XMLHttpRequest`, `innerTickSize`, `then`, `datetimeId`, `subchart_show`, `data_onshown`, `%c\u2139\uFE0F`, `data_types`, `<b>Open:</b> `, `axis_rotated`, `initArea`, `prev`, `range`, `toggling`, `class`, `bb-chart-lines`, `context`, `mapToIds`, `none`, `log`, `padding`, `getClipPath`, `slice`, `subchart_size_height`, `removeHiddenLegendIds`, `_default`, `generateTargetX`, `prop`, `(pointer:fine)`, `uid`, `scrollY`, `border`, `bulltname`, `format`, `height`, `ready`, `isTreemapType`, `touchmove`, `assign`, `axis_y2_`, `AREA_STEP_RANGE`, `showGridFocus`, `getDataIndexFromEvent`, `unexpandCircles`, `BUBBLE`, `getDefsPointId`, `isTargetToShow`, `options`, ` was not called`, `touchstart`, `400`, `createSVGPoint`, `update`, `has`, `getXDomainPadding`, `rotatedPadding`, `updateTextColor`, `clear`, `getChartClass`, `updateSizes`, `rect:not([x])`, `radius`, `hasTreemap`, `substr`, `owner`, `makeArray`, `ajaxSettings`, `gauge`, `mapToTargetIds`, `flowing`, `getShapeIndices`, `GET`, `_queueHooks`, `getSvgArcExpanded`, `data_classes`, `gauge_min`, `updateTextBGColor`, `getPadding`, `url`, `api`, `isScatterType`, `compareDocumentPosition`, `axis_y_inner`, `animate`, `inline-block`, `focus`, `_tick_text_position`, `needsContext`, `xhrFields`, `duration`, `initChartElements`, `spline_interpolation_type`, `requestAnimationFrame`, `helper`, `AREA_SPLINE_RANGE`, `getYScaleById`, `protocol`, `pseudos`, `arcs`, `set`, `visible`, `hasArcType`, `pointer-events:none`, `pow`, `width`, `totalLength`, `margin`, `axis_y2_show`, `polar`, `selectRectForSingle`, `anim`, `shift`, `isLegendToShow`, `funnel`, `nth`, `bind`, `data_selection_multiple`, `cssHooks`, `json`, `generateGridData`, `click.drag`, `scroll`, `hash`, `dragStart`, `TextOverlapping`, `_axes`, `setProperty`, `content`, `convertDataToTargets`, `ygridLines`, `bb-axis-tooltip-x`, `complete`, `legend_equally`, `regions`, `info`, `orient`, `hasContent`, `ajaxPrefilter`, `speed`, `toFixed`, `content-type`, `svg`, `fill-opacity`, `empty`, `addProp`, `resizeFunction`, `xPosInPercent`, `setLegendItem`, `radio`, `legendItem`, `selectedCircle`, `^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(`, `axisY`, `copy`, `xDomain`, `end`, `queueHooks`, `point`, `stop`, `tooltip_onhidden`, `data_type`, `id_org`, `getArcLabelConfig`, `isGrouped`, `bindZoomEvent`, `index`, `bb-tooltip`, `init`, `orgScale`, `rotate(-90)`, `hasTypeOf`, `preventDefault`, `MozUserSelect`, `getPrototypeOf`, `visibility`, `_isUp`, `updateScales`, `status`, `target`, `initArc`, `xgrid`, `100%`, `getXForText`, `
			</foreignObject></svg>`, `href`, `circleY`, `pos`, `legendItemMap`, `async`, `startsWith`, `dataMinMax`, `endAngle`, `*\\)|)`, `fail`, `updateAngle`, `_reverse`, `cancelAnimationFrame`, `hasRadar`, `tweeners`, `chart`, `restore`, `point_type`, `mouseup.drag`, `getXAxisTickFormat`, `textarea`, `generateTickValues`, `getLabelOptionByAxisId`, `legend_contents_template`, `sign`, `return this`, `-yaxis`, `Area`, `isTimeSeries`, `<b>Mid:</b> `, `classFocus`, `xhr`, `idXAxisTickTexts`, `pop`, `color_pattern`, `splitted`, `_max`, `unit`, `legendItemTextBox`, `start`, `fieldset`, `<script>`, `_current`, `0.5em`, `names`, `domain`, `isLegendLeft`, `inverse`, `size_width`, `treemapDataLabelFormat`, `tickCount`, `xForAxisLabel`, `getRadarSize`, `isTypeOf`, `arc_needle_value`, `bb-zoom-brush`, `object`, `converters`, `datum`, `tickFormat`, `redrawPolar`, `ceil`, `resolved`, `zoom`, `&#39;`, `selectAll`, `hasMultiArcGauge`, `html`, `AREA_SPLINE`, `hasPositiveValue`, `transition`, `data_names`, `block`, `eventRect`, `cornerRadius`, `size`, `point_r`, `backgroundColor`, `run`, `getRatio`, `createElement`, `getRegionSize`, `handler`, `arc_cornerRadius`, `Arc`, `contentType`, `jQuery`, `document`, `rangeRound`, `texts`, `getUTCHours`, `axisTime`, `brush`, `inherit`, `addClass`, `hasAxis`, `fxshow`, `EXPANDED`, `data_labels`, `hideTooltip`, `onload`, `now`, `getHours`, `static`, `height2`, `mid`, `values`, `every`, `map`, `xml:lang`, `documentElement`, `ownerDocument`, `processData`, `application/xml, text/xml`, `bb-funnel`, `return {`, `line.`, `generateGetBarPoints`, `url(#`, `getShapeOffset`, `isPieType`, `exceptionHook`, `grid`, `extend`, `legend_item_onover`, `_label`, `subY`, `parentNode`, `top`, `left`, `legendItemFocused`, `updateSizeForLegend`, `axis_x_show`, `show`, `5594bPaxVc`, `showTooltip`, `getRadius`, `right`, `color`, `transform`, `region.list`, `isInner`, `UpdateOrgXDomain`, `getBubbleZData`, `reverse`, `opts`, `_lines`, `getTime`, `revert`, `isPlainObject`, `close`, `isLineType`, `includes`, `stroke-width`, `xgridFocus`, `data_keys`, `isCategory`, `lineStart`, `handle events`, `error`, `circle`, `rendered`, `point_opacity`, `axes`, `propHooks`, `headers`, `addEventListener`, `touches`, `zoom_rescale`, `getEventRectWidth`, `cos`, `size_height`, `tickOffset`, `bb-chart-candlestick`, `getBaseValue`, `clientLeft`, `xAxisTick`, `plugins`, `isLegendInset`, `disabled`, `timers`, `findClosestFromTargets`, `line.bb-axis-tooltip-x, line.bb-axis-tooltip-y`, `Transition`, `getResponseHeader`, `elem`, `updateEventType`, `querySelectorAll`, `setOptions`, `Source data is missing a component at (`, `toggle`, `timer`, `opacity`, `height:9px;width:9px;padding:0`, `redrawGrid`, `high`, ` to `, `filteredTargets`, `axis_x_categories`, `updateAndRedraw`, `0 0 1`, `generatedTicks`, `-2.2em`, `onbeforeinit`, `0.4em`, `node`, `circleX`, `using`, `getTranslate`, `hiddenLegendIds`, `lastLength`, `axis_x_min`, `removeChild`, `statusText`, `crossDomain`, `legend_item_onout`, `112221PIKuCY`, `splice`, `postMessage`, `legend_item_onclick`, `borderBottomWidth`, `dequeue`, `41165212SqPCRj`, `insert`, `isValidChartType`, `updateGaugeMax`, `idGrid`, `hasNegativeValue`, `data_stack_normalize`, `updateTooltipOnRedraw`, `clone`, `lineEnd`, `trigger`, `bb-chart-line`, `data_onmax`, `tooltip_linked`, `tickLength`, `rotated`, `linear`, `selectorTarget`, `list`, `sizeFor1Char`, `path.`, `)*)|.*)\\)|)`, `_padding`, `bb-chart-circles`, `expandCircles`, `sort`, `getParentHeight`, `boolean`, `TransitionForExit`, `selector`, `tagName`, `:first-child`, `area-line-range`, `getShapeX`, `axis_x_type`, `6646626FWZvtb`, `hidden`, `Webkit`, `updateDimension`, `setRequestHeader`, `shown`, `arcWidth`, `togglePoint`, `_type`, `getTooltipPositionViewBox`, `withTransition`, `barConnectLine`, `append`, `orgXScale`, `remove`, `inner`, `data`, `childNodes`, `matches`, `updateEventRect`, `round`, `touchend.eventRect`, `loadFromArgs`, `Event`, `timeout`, `-$&`, `stopColor`, `random`, ` + *`, `clientX`, `relatedTarget`, `handle`, `outerRadius`, `value`, `ajaxSend`, `firstChild`, `beforeInit`, `isPolarType`, `contains`, `shape`, `getPolarOuterRadius`, `clipPath`, `interaction_enabled`, `visibilityState`, `-labels-bg`, `charts`, `expando`, `easing`, `$el`, `relative`, `function`, `setTargetType`, `xlink:href`, `create`, `margin2`, `get`, `parse`, `selectedIndex`, `getToggle`, `body`, `element`, `M 0 0`, `inputType`, `transiting`, `getTooltipContent`, `reduce`, `bb-legend-item-focused`, `axis_x_inverted`, `exec`, `font-size`, `data_onmin`, `axis_x_height`, `bandwidth`, `axis`, `generatePoint`, `updateCircleColor`, `pendingRaf`, `hiddenTargetIds`, `stopWorker`, `axisY2`, `etag`, `indexOf`, `path`, `PPTX processing warning: `, `_show`, `unqueued`, `bb-event-rects`, `view`, `isHorizontal`, `targets`, `clamp`, `pageX`, `defocused`, `style`, `appendChild`, `transition_duration`, `font-size:15px`, `isStepType`, `translate(`, `updateLegendItemPos`, `maxTickSize`, `data_colors`, `linearGradient`, `find`, `path.domain`, `legend_show`, `centered`, `px 0 0`, `resizeObserver`, `hide`, `getTooltipPosition`, `parseFromString`, `isArcType`, `unique`, `userAgent`, `tooltip_onhide`, `charCodeAt`, `toUpperCase`, `tickSizeOuter`, `url or json or rows or columns is required.`, `replaceWith`, `offsetParent`, `axis_x_tick_culling`, `bindto`, `keys`, `internal`, `bb-circles`, `isBarRangeType`, `innerRadius`, `title_text`, `donut`, `push`, `send`, `getRangedData`, `hasFunnel`, `position`, `year`, `tooltip_init_position`, `script`, `click`, `min`, `isPropagationStopped`, `result`, `convertToArcData`, `pointR`, `gauge_expand`, `1.15em`, `bb-chart-arcs-gauge-title`, `initGrid`, `bb-shapes`, `text script`, `scatter`, `true/`, `yAxis`, `Line`, `string`, `barChart`, `svgArc`, `isWithinShape`, `generateXYForText`, `Tooltip`, `data_onclick`, `getComputedStyle`, `updateDataAttributes`, `matchMedia`, `axis_`, `gridLine`, `getTickValues`, `__zoom`, `tickMultiline`, `reset`, `type`, `idXAxis`, `text`, `setOverOut`, `stroke`, `zoom_enabled`, `dragstart`, `image`, `color_tiles`, `bar_indices_removeNull`, `not`, `defocusedTargetIds`, `Pie`, `tickWidth`, `pointSelectR`, `breakPoint`, `withLegend`, `title`, `origType`, `withoutFadeIn`, `margin3`, `isLegendRight`, `area_below`, `widths`, `use`, `getSelection`, `table td`, `length`, `generateLegendItem`, `isCandlestickType`, `isPointFocusOnly`, `'$1' `, `&#96;`, `text-anchor`, `before`, `responseType`, `getExpandConfig`, `config`, `isRadarType`, `tickValues`, `nodeType`, `concat`, `dxForAxisLabel`, `formatRows`, `stop-color`, `parent`, `label`, `defineProperty`, `gauge_fullCircle`, `checkValueInTargets`, `getId`, `getStylePropValue`, `toggleShape`, `5358630rowgkU`, `getGradienColortUrl`, `touch`, `updateTargetX`, `select-one`, `, line.`, `namespace`, `handleObj`, `lines`, `getRootNode`, `pushStack`, `event`, `getDomain`, `tooltip`, `legendItemHeight`, `grid_`, `chartArcs`, `orgDomain`, `guid`, `initLine`, `div`, `current`, `getTickSize`, `getArcTitle`, `lowerCase`, `add`, `toString`, `legendStep`, `fill-opacity:0`, `always`, `originalEvent`, `specialEasing`, `fontSize`, `rootSelector`, `.%L`, `area`, `</table>`, `classname`, `setOrient`, `levelColor`, `bb-legend-item-hidden`, `getLabelPositionById`, `font`, `bb-arcs`, `data:image/svg+xml;base64,`, `AREA`, `next`, `focused`, `x is not defined for id = "`, `^(?:([+-])=|)(`, `treemap`, `tooltip_order`, `1946HANZRe`, `sheet`, `iterator`, `removeAttr`, `previousSibling`, `name`, `once memory`, `contentDocument`, `isAreaRangeType`, `upperCase`, `regionY`, `hasPointType`, `offsetWidth`, `bottom`, `previousElementSibling`, `pageYOffset`, `UpdateXDomain`, `Legend`, `initParams`, `getYDomain`, `subX`, `steps`, `convertValuesToStep`, `updateGrid`, `offset`, `drag`, `resolveWith`, `observe`, `getBoundingClientRect`, `needle`, `gridLines`, `data_empty_label_text`, `tooltip_show`, `pointer-events`, `getAxisType`, `getTargetSelectorSuffix`, `legend_usePoint`, `text/html`, `-01-01 00:00:00`, `forEach`, `px 0 0 0`, `viewBox`, `fromCharCode`, `transformContext`, `242JLLyBT`, `bb-xgrid-lines`, `isLog`, `tickStepSize`, `floor`, `done`, `Callbacks`, `unshift`, `xgridLines`, `Spline`, `lazy`, `mousemove`, `line`, `grep`, `isCategorized`, `clientY`, `23136lmQNxs`, `: d[`, `xAxis`, `bb-shape`, `idSubchart`, `max`, `" width="`, `subject`, `getRandomValues`, `inArray`, `tickCentered`, `$radarPoints`, `params`, `hasDataLabel`, `isDefaultPrevented`, `mouseover`, `x2Tile`, `outerTickSize`, `requestIdleCallback`, `abs`, `jsonpCallback`, `margins`, `getAxis`, `enter`, `generateGetLinePoints`, `data_xs`, `setDragStatus`, `textRect`, `1.2em`, `__chart__`, `data_selection_grouped`, `textContent`, `donut_width`, `getYScale`, `auto`, `dragging`, `charSize`, `getSizeFor1Char`, `scale`, `{=COLOR}`, `withTransitionForTransform`, `bb-grid`, `pathGrid`, `labelishData`, `cache`, `outer`, `ratio`, `charAt`, `grid_x_type`, ` .tick text`, `sourceEvent`, `org`, `

			self.onmessage=function({data}) {
				const result = (`, `.$1`, `bb-arc-label-line-text`, `isBarType`, `boost_useCssRule`, `defaultView`, `selectRectForMultipleXs`, `bindResize`, `updateTargetsForSubchart`, `trim`, `defaults`, `console`, `altDomain`, `bb-axis-y-tooltip`, `isMultipleX`, `getBBox`, `getClass`, `expm1`, `STEP`, `pie`, `top left`, `arc`, `isBottom`, `noTransition`, `lineY1`, `_$total`, `match`, `isGaugeType`, `orderTargets`, `currentTarget`, `updateEventRectData`, `%b %d`, `isTimeSeriesY`, `initialOpacityForCircle`, `getZoomDomainValue`, `promise`, `hasMultiTargets`, `490VdUlBr`, `zoom_x_max`, `xgridAttr`, `toLowerCase`, `elementFromPoint`, `redraw`, `center`, `custom`, `Step`, `area-spline`, `resizing`, `crossOrigin`, `fit`, `option`, `ifModified`, `apply`, `overrideMimeType`, `css`, `2828wRMjby`, `call`, `tick`, `insertBefore`, `jquery`, `legend`, `getUTCSeconds`, `redrawText`, `serializeArray`, `withTransitionForExit`, `0 0 `, `delay`, `linear-closed`, `touchend`, `subchart`, `state`, `split`, `resizeFrame`, `special`, `exp`, `width2`, `_tick_rotate`, `hasNegativeValueInTargets`, `bb-selected-circle`, `circles`, `childElementCount`, `overflow`, `types`, `initRegion`, `bar_connectLine`, `classed`, `0 0 0 `, `natural`, `each`, `5775eaKTJh`, `_inverted`, `selectedCircles`, `noModule`, `cloneTarget`, `isBubbleType`, `getCandlestickData`, `ticks`, `getZoomDomain`, `cursor`, `Blob`, `getSeconds`, `drawImage`, `mouseenter`, `attr`, `axesList`, `handlers`, `data_selection_isselectable`, `radarCircleY`, `focusedTargetIds`, `updateBarColor`, `key`, `getMinMaxData`, `display`, `rnamespace`, `unload`, `../`, `post`, `filterNullish`, `*/*`, `mouse`, `cur`, `swing`, `main`, `classDefocused`];
  return Ha = function() {
    return e2;
  }, Ha();
}
var Ua = { hasGrid: function() {
  var e2 = M, t2 = this[e2(636)];
  return [`x`, `y`].some(function(e3) {
    return t2[`grid_` + e3 + `_show`] || t2[`grid_` + e3 + `_lines`].length;
  });
}, initGrid: function() {
  var e2 = this;
  e2.hasGrid() && e2.initGridLines(), e2.initFocusGrid();
}, initGridLines: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.state.clip, i2 = t2.$el;
  (n2.grid_x_lines.length || n2.grid_y_lines.length) && (i2.gridLines.main = i2.main.insert(`g`, `.` + I.chart + (n2.grid_lines_front ? e2(456) : ``))[e2(919)](`clip-path`, r2.pathGrid).attr(`class`, V.grid + ` ` + V.gridLines), i2.gridLines.main.append(`g`)[e2(919)](`class`, V.xgridLines), i2.gridLines.main.append(`g`).attr(`class`, V.ygridLines), i2.gridLines.x = Ge([]));
}, updateXGrid: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(636)], i2 = n2.scale, a2 = n2.state, o2 = n2[t2(476)], s2 = o2.main, c2 = o2.grid, l2 = r2.axis_rotated, u2 = n2[t2(1198)](r2[t2(812)], i2.x), d2 = n2.axis.isCategorized() ? n2.axis.x[t2(343)]() : 0, f2 = function(e3) {
    return (i2.zoom || i2.x)(e3) + d2 * (l2 ? -1 : 1);
  };
  a2.xgridAttr = l2 ? { x1: 0, x2: a2.width, y1: f2, y2: f2 } : { x1: f2, x2: f2, y1: 0, y2: a2.height }, c2.x = s2.select(`.` + V.xgrids).selectAll(`.` + V[t2(1259)])[t2(444)](u2), c2.x[t2(999)]().remove(), c2.x = c2.x.enter().append(`line`).attr(`class`, V.xgrid).merge(c2.x), e2 || c2.x.each(function() {
    var e3 = j(this);
    Object.keys(a2.xgridAttr).forEach(function(t3) {
      var n3 = Q;
      e3.attr(t3, a2[n3(855)][t3]).style(`opacity`, function() {
        return e3.attr(l2 ? `y1` : `x1`) === (l2 ? a2.height : 0) ? `0` : null;
      });
    });
  });
}, updateYGrid: function() {
  var e2 = M, t2 = this, n2 = t2.axis, r2 = t2.config, i2 = t2.scale, a2 = t2.state, o2 = t2.$el, s2 = o2[e2(293)], c2 = o2.main, l2 = r2.axis_rotated, u2 = function(e3) {
    return i2.y(e3);
  }, d2 = n2.y.getGeneratedTicks(r2.grid_y_ticks) || t2.scale.y[e2(912)](r2.grid_y_ticks);
  s2.y = c2.select(`.` + V.ygrids).selectAll(`.` + V.ygrid)[e2(444)](d2), s2.y[e2(999)]().remove(), s2.y = s2.y.enter().append(e2(760)).attr(`class`, V.ygrid)[e2(1078)](s2.y), s2.y.attr(`x1`, l2 ? u2 : 0).attr(`x2`, l2 ? u2 : a2.width).attr(`y1`, l2 ? 0 : u2).attr(`y2`, l2 ? a2.height : u2), Va(s2.y);
}, updateGrid: function() {
  var e2 = M, t2 = this, n2 = t2.$el, r2 = n2.grid;
  !n2.gridLines.main && t2.initGridLines(), r2.main.style(`visibility`, t2[e2(1180)]() ? e2(429) : null), t2.hideGridFocus(), t2.updateGridLines(`x`), t2.updateGridLines(`y`);
}, updateGridLines: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2[t2(476)], a2 = i2.gridLines, o2 = i2.main, s2 = n2.$T, c2 = r2.axis_rotated, l2 = e2 === `x`;
  r2[`grid_` + e2 + `_show`] && n2[t2(1131) + e2.toUpperCase() + `Grid`]();
  var u2 = o2.select(`.` + V[e2 + `gridLines`]).selectAll(`.` + V[e2 + t2(594)]).data(r2[t2(667) + e2 + `_lines`]);
  s2(u2.exit())[t2(521)](`opacity`, `0`).remove();
  var d2 = u2.enter()[t2(440)](`g`);
  d2.append(`line`).style(t2(363), `0`), u2 = d2.merge(u2), u2.each(function(e3) {
    var n3 = t2, r3 = j(this);
    r3.select(`text`).empty() && e3.text && r3[n3(440)](`text`).style(`opacity`, `0`);
  }), s2(u2.attr(`class`, function(t3) {
    return (V[e2 + `gridLine`] + ` ` + (t3.class || ``)).trim();
  }).select(`text`).attr(`text-anchor`, Ra).attr(`transform`, function() {
    var e3 = t2;
    return l2 ? c2 ? null : e3(1248) : c2 ? e3(1248) : null;
  }).attr(`dx`, za).attr(`dy`, -5)).text(function(e3) {
    return e3.text ?? this.remove();
  }), a2[e2] = u2;
}, redrawGrid: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config.axis_rotated, i2 = n2[t2(886)], a2 = i2.width, o2 = i2.height, s2 = n2.$el.gridLines, c2 = n2.$T, l2 = n2.xv[t2(1194)](n2), u2 = n2.yv.bind(n2), d2 = s2.x.select(`line`), f2 = s2.x.select(`text`), p2 = s2.y.select(`line`), m2 = s2.y.select(t2(601));
  return d2 = c2(d2, e2).attr(`x1`, r2 ? 0 : l2)[t2(919)](`x2`, r2 ? a2 : l2).attr(`y1`, r2 ? l2 : 0)[t2(919)](`y2`, r2 ? l2 : o2), f2 = c2(f2, e2).attr(`x`, Ba(!r2, a2, o2)).attr(`y`, l2), p2 = c2(p2, e2).attr(`x1`, r2 ? u2 : 0).attr(`x2`, r2 ? u2 : a2).attr(`y1`, r2 ? 0 : u2).attr(`y2`, r2 ? o2 : u2), m2 = c2(m2, e2).attr(`x`, Ba(r2, a2, o2))[t2(919)](`y`, u2), [d2.style(`opacity`, null), f2.style(`opacity`, null), p2.style(`opacity`, null), m2.style(`opacity`, null)];
}, initFocusGrid: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.state.clip, i2 = t2.$el, a2 = n2[e2(1003)], o2 = `.` + (a2 && i2[e2(734)].main ? V.gridLines : I.chart) + (a2 ? e2(456) : ``), s2 = i2[e2(938)][e2(394)](`g`, o2).attr(`clip-path`, r2[e2(806)]).attr(`class`, V.grid);
  if (i2[e2(293)][e2(938)] = s2, n2.grid_x_show && s2.append(`g`).attr(`class`, V.xgrids), n2.grid_y_show && s2.append(`g`).attr(`class`, V.ygrids), n2.axis_tooltip) {
    var c2 = s2.append(`g`).attr(e2(1093), `bb-axis-tooltip`);
    c2.append(`line`)[e2(919)](`class`, e2(1209)), c2.append(`line`).attr(`class`, `bb-axis-tooltip-y`);
  }
  n2[e2(470)] && n2.grid_focus_show && !n2.axis_tooltip && (s2.append(`g`).attr(`class`, B.xgridFocus).append(`line`).attr(`class`, B.xgridFocus), n2.grid_focus_y && !n2.tooltip_grouped && s2.append(`g`).attr(e2(1093), B.ygridFocus).append(`line`)[e2(919)](`class`, B.ygridFocus));
}, showAxisGridFocus: function() {
  var _a2, _b;
  for (var e2 = M, t2 = this, n2 = t2.config, r2 = t2[e2(1112)], i2 = t2.state, a2 = i2.event, o2 = i2.width, s2 = i2.height, c2 = n2.axis_rotated, l2 = ir(a2, (_a2 = t2.$el.eventRect) == null ? void 0 : _a2.node()), u2 = l2[0], d2 = l2[1], f2 = { x: u2, y: d2 }, p2 = 0, m2 = Object.entries(t2.$el.axisTooltip); p2 < m2[e2(626)]; p2++) {
    var h2 = m2[p2], g2 = h2[0], _2 = h2[1], v2 = g2 === `x` && !c2 || g2 !== `x` && c2 ? `x` : `y`, y2 = f2[v2], b2 = (_b = t2.scale[g2]) == null ? void 0 : _b.invert(y2);
    b2 && (b2 = g2 === `x` && t2.axis.isTimeSeries() ? r2.xAxisTick(b2) : b2 == null ? void 0 : b2.toFixed(2), _2 == null ? void 0 : _2.attr(v2, y2).text(b2));
  }
  t2.$el[e2(938)][e2(236)](e2(353)).style(`visibility`, null).each(function(e3, t3) {
    var n3 = j(this);
    t3 === 0 ? n3.attr(`x1`, u2).attr(`x2`, u2).attr(`y1`, t3 ? 0 : s2).attr(`y2`, t3 ? s2 : 0) : n3.attr(`x1`, t3 ? 0 : o2).attr(`x2`, t3 ? o2 : 0).attr(`y1`, d2).attr(`y2`, d2);
  });
}, hideAxisGridFocus: function() {
  var e2 = M, t2 = this;
  t2[e2(476)][e2(938)].selectAll(`line.` + Ut.axisTooltipX + `, line.` + Ut.axisTooltipY).style(e2(1253), e2(429)), Object.values(t2.$el.axisTooltip)[e2(743)](function(t3) {
    return t3 == null ? void 0 : t3[e2(521)](`display`, `none`);
  });
}, showGridFocus: function(e2) {
  var t2 = M, n2, r2 = this, i2 = r2.config, a2 = r2.state, o2 = a2.width, s2 = a2.height, c2 = i2.axis_rotated, l2 = r2.$el.main.selectAll(`line.` + B.xgridFocus + t2(657) + B.ygridFocus), u2 = (e2 || [l2.datum()])[t2(1038)](function(e3) {
    return e3 && W(r2.getBaseValue(e3));
  });
  if (!(!i2.tooltip_show || u2[t2(626)] === 0 || !i2.axis_x_forceAsSingle && r2.hasType(`bubble`) || r2.hasArcType())) {
    var d2 = i2.grid_focus_edge && !i2[t2(948)], f2 = r2.xx[t2(1194)](r2);
    l2[t2(521)](`visibility`, null).data(u2.concat(u2)).each(function(e3) {
      var t3 = j(this), n3 = { x: f2(e3), y: r2.getYScaleById(e3.id)(e3.value) }, i3;
      if (t3.classed(B.xgridFocus)) i3 = c2 ? [null, n3.x, d2 ? n3.y : o2, n3.x] : [n3.x, d2 ? n3.y : null, n3.x, s2];
      else {
        var a3 = r2.axis.getId(e3.id) === `y2`;
        i3 = c2 ? [n3.y, d2 && !a3 ? n3.x : null, n3.y, d2 && a3 ? n3.x : s2] : [d2 && a3 ? n3.x : null, n3.y, d2 && !a3 ? n3.x : o2, n3.y];
      }
      [`x1`, `y1`, `x2`, `y2`].forEach(function(e4, n4) {
        return t3[Q(919)](e4, i3[n4]);
      });
    }), Va(l2), (n2 = r2.showCircleFocus) == null || n2.call(r2, e2);
  }
}, hideGridFocus: function() {
  var e2, t2 = this, n2 = t2.state, r2 = n2.inputType, i2 = n2.resizing, a2 = t2.$el.main;
  (r2 === `mouse` || !i2) && (a2.selectAll(`line.` + B.xgridFocus + `, line.` + B.ygridFocus).style(`visibility`, `hidden`), (e2 = t2.hideCircleFocus) == null || e2.call(t2));
}, updateGridFocus: function() {
  var e2 = M, t2, n2 = this, r2 = n2.state, i2 = r2.inputType, a2 = r2.width, o2 = r2.height, s2 = r2.resizing, c2 = n2.$el[e2(293)].main[e2(1057)](e2(287) + B[e2(325)]);
  if (i2 === `touch`) c2[e2(1222)]() ? s2 && ((t2 = n2.showCircleFocus) == null || t2.call(n2)) : n2.showGridFocus();
  else {
    var l2 = n2.config[e2(1088)];
    c2.attr(`x1`, l2 ? 0 : -10).attr(`x2`, l2 ? a2 : -10).attr(`y1`, l2 ? -10 : 0).attr(`y2`, l2 ? -10 : o2);
  }
  return true;
}, generateGridData: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.$el.main.select(`.` + Ut.axisX).selectAll(`.tick`).size(), a2 = [];
  if (e2 === n2(564)) for (var o2 = r2.getXDomain()[n2(279)](function(e3) {
    return e3[n2(1034)]();
  }), s2 = o2[0], c2 = o2[1], l2 = s2; l2 <= c2; l2++) a2[n2(559)](new Date(l2 + n2(742)));
  else a2 = t2.ticks(10), a2.length > i2 && (a2 = a2.filter(function(e3) {
    return String(e3).indexOf(`.`) < 0;
  }));
  return a2;
}, getGridFilterToRemove: function(e2) {
  return e2 ? function(t2) {
    var n2 = Q, r2 = false;
    return (Y(e2) ? e2[n2(640)]() : [e2]).forEach(function(e3) {
      (`value` in e3 && t2.value === e3.value || `class` in e3 && t2.class === e3.class) && (r2 = true);
    }), r2;
  } : function() {
    return true;
  };
}, removeGridLines: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.$T, o2 = r2.getGridFilterToRemove(e2), s2 = function(e3) {
    return !o2(e3);
  }, c2 = t2 ? V[n2(756)] : V[n2(1208)], l2 = t2 ? V.xgridLine : V.ygridLine;
  a2(r2.$el.main.select(`.` + c2).selectAll(`.` + l2)[n2(1038)](o2)).style(n2(363), `0`).remove();
  var u2 = `grid_` + (t2 ? `x` : `y`) + n2(317);
  i2[u2] = i2[u2].filter(s2);
} }, Wa = { initRegion: function() {
  var e2 = M, t2 = this, n2 = t2.$el;
  n2.region.main = n2.main.insert(`g`, e2(424)).attr(`clip-path`, t2.state.clip.path).attr(e2(1093), $t.regions);
}, updateRegion: function() {
  var e2 = M, t2 = this, n2 = t2[e2(636)], r2 = t2.$el.region, i2 = t2.$T;
  r2[e2(938)] || t2.initRegion(), r2.main[e2(521)](`visibility`, t2.hasArcType() ? `hidden` : null);
  var a2 = r2.main.selectAll(`.` + $t.region).data(n2.regions);
  i2(a2.exit())[e2(521)](`opacity`, `0`)[e2(442)]();
  var o2 = a2[e2(787)]().append(`g`);
  o2.append(`rect`).style(e2(1221), `0`), r2.list = o2.merge(a2).attr(`class`, t2.classRegion.bind(t2)), r2[e2(411)].each(function(t3) {
    var n3 = e2, r3;
    j(this)[n3(1057)](n3(601)).empty() && (r3 = t3.label) != null && r3.text && j(this).append(`text`)[n3(521)](`opacity`, `0`);
  });
}, redrawRegion: function(e2) {
  var t2 = M, n2 = this, r2 = n2.$el.region, i2 = n2.$T, a2 = n2.regionX.bind(n2), o2 = n2.regionY.bind(n2), s2 = [t2(1183), `height`], c2 = r2.list.select(t2(1010)), l2 = r2.list.selectAll(`text`);
  return c2 = i2(c2, e2).attr(`x`, a2).attr(`y`, o2).attr(`width`, n2.regionWidth.bind(n2)).attr(`height`, n2.regionHeight.bind(n2)), l2 = i2(l2, e2)[t2(601)](function(e3) {
    var _a2;
    return (_a2 = e3.label) == null ? void 0 : _a2.text;
  }).attr(`transform`, function(e3) {
    var n3 = t2;
    return e3.label[n3(408)] ? ` rotate(-90)` : null;
  }).attr(`transform`, function(e3) {
    var n3 = t2, r3 = this, i3 = e3.label ?? {}, c3 = i3.x, l3 = c3 === void 0 ? 0 : c3, u2 = i3.y, d2 = u2 === void 0 ? 0 : u2, f2 = i3.center, p2 = f2 === void 0 ? false : f2, m2 = i3[n3(408)], h2 = m2 === void 0 ? false : m2, g2 = this.previousElementSibling, _2 = { x: 0, y: 0 };
    return K(p2) && [`x`, `y`].forEach(function(e4, t3) {
      p2.indexOf(e4) > -1 && (_2[e4] = (+g2.getAttribute(s2[t3]) - or(r3)[s2[t3]]) / 2);
    }), `translate(` + (a2(e3) + _2.x + l3) + `, ` + (o2(e3) + _2.y + d2) + `)` + (h2 ? ` rotate(-90)` : ``);
  }).attr(`text-anchor`, function(e3) {
    var t3 = e3.label;
    return t3 != null && t3.rotated ? `end` : null;
  }).attr(`dy`, `1em`).style(`fill`, function(e3) {
    var _a2;
    return ((_a2 = e3[t2(645)]) == null ? void 0 : _a2.color) ?? null;
  }), [c2.style(`fill-opacity`, function(e3) {
    return W(e3.opacity) ? e3.opacity : null;
  }).on(`end`, function() {
    var e3 = t2;
    j(this.parentNode).selectAll(e3(1139)).remove();
  }), l2.style(`opacity`, null)];
}, regionX: function(e2) {
  return this.getRegionSize(`x`, e2);
}, regionY: function(e2) {
  var t2 = M;
  return this[t2(252)](`y`, e2);
}, regionWidth: function(e2) {
  return this.getRegionSize(`width`, e2);
}, regionHeight: function(e2) {
  return this.getRegionSize(`height`, e2);
}, getRegionSize: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.scale, o2 = r2.state, s2 = i2[n2(1088)], c2 = /(x|y|y2)/.test(e2), l2 = c2 ? e2 === `x` : e2 === `width`, u2 = !c2 && r2[l2 ? `regionX` : n2(714)](t2), d2 = c2 ? `start` : n2(1234), f2 = c2 ? 0 : o2[e2], p2;
  if (t2.axis === `y` || t2.axis === `y2` ? (!c2 && !l2 ? d2 = `start` : c2 && !l2 && (d2 = `end`), (l2 ? s2 : !s2) && d2 in t2 && (p2 = a2[t2.axis])) : (l2 ? !s2 : s2) && d2 in t2 && (p2 = a2.zoom || a2.x), p2) {
    var m2 = 0;
    f2 = t2[d2], r2[n2(501)].isTimeSeries(t2.axis) ? f2 = Or.call(r2, f2) : /(x|width)/.test(e2) && r2[n2(501)].isCategorized() && isNaN(f2) && (f2 = i2[n2(369)].indexOf(f2), m2 = r2.axis.x.tickOffset() * (d2 === `start` ? -1 : 1)), f2 = p2(f2) + m2;
  }
  return c2 ? f2 : f2 < u2 ? 0 : f2 - u2;
}, isRegionOnX: function(e2) {
  var t2 = M;
  return !e2.axis || e2[t2(501)] === `x`;
} }, Ga = { getAxisSize: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config[t2(1088)];
  return r2 && e2 === `x` || !r2 && /y2?/.test(e2) ? n2.getAxisWidthByAxisId(e2, true) : n2.getHorizontalAxisHeight(e2);
}, getAxisWidthByAxisId: function(e2, t2) {
  var _a2, _b;
  var n2 = M, r2 = this;
  if (r2[n2(501)]) {
    var i2 = (_a2 = r2[n2(501)]) == null ? void 0 : _a2.getLabelPositionById(e2), a2 = r2[n2(501)].getMaxTickSize(e2, t2).width, o2 = a2 === 0 ? 0.5 : 0;
    return a2 + (((_b = r2.config.padding) == null ? void 0 : _b[n2(1025)]) === n2(865) ? i2.isInner ? 10 + o2 : 10 : i2.isInner ? 20 + o2 : 40);
  } else return 40;
}, getHorizontalAxisHeight: function(e2) {
  var _a2, _b;
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state, a2 = i2.rotatedPadding, o2 = i2[t2(620)], s2 = i2.isLegendInset, c2 = r2.axis_rotated, l2 = ((_a2 = r2.padding) == null ? void 0 : _a2.mode) === `fit`, u2 = r2[`axis_` + e2 + `_inner`], d2 = r2[`axis_` + e2 + `_label`].text, f2 = 13, p2 = ((_b = r2.padding) == null ? void 0 : _b.mode) === `fit` ? u2 && !d2 ? +(e2 === `y`) : 20 : 30;
  if (e2 === `x` && !r2[t2(303)]) return 8;
  if (e2 === `x` && q(r2.axis_x_height)) return r2.axis_x_height;
  if (e2 === `y` && !r2.axis_y_show) return r2.legend_show && !o2 && !s2 ? 10 : 1;
  if (e2 === `y2` && !r2.axis_y2_show) return l2 ? 0 : a2.top;
  var m2 = n2.axis.getMaxTickSize(e2), h2 = Math.abs(r2.axis_x_tick_rotate) > 0 && (!r2.axis_x_tick_autorotate || n2.needToRotateXAxisTickTexts());
  return (r2.axis_x_tick_multiline || h2) && m2.height > f2 && (p2 += m2.height - f2), p2 + (n2[t2(501)][t2(693)](e2)[t2(312)] ? 0 : 10) + (e2 === `y2` && !c2 ? -10 : 0);
}, getEventRectWidth: function() {
  var e2 = M, t2 = this, n2 = t2[e2(636)], r2 = t2.axis, i2 = n2.axis_x_inverted, a2 = r2.x.tickInterval();
  return Math[e2(769)](0, i2 ? Math.abs(a2) : a2);
}, getAxisTickRotate: function(e2) {
  var t2 = M, n2 = this, r2 = n2.axis, i2 = n2.config, a2 = n2[t2(886)], o2 = n2.$el, s2 = i2[`axis_` + e2 + `_tick_rotate`];
  if (e2 === `x`) {
    var c2 = r2.isCategorized() || r2.isTimeSeries();
    if (i2.axis_x_tick_fit && c2) {
      var l2 = i2.axis_x_tick_count, u2 = a2.current.maxTickSize.x.ticks.length, d2 = 0;
      if (l2 ? d2 = l2 > u2 ? u2 : l2 : u2 && (d2 = u2), d2 !== a2.axis.x.tickCount) {
        var f2 = n2.data.targets;
        a2.axis.x[t2(1099)] = n2.getXDomainPadding([n2.getXDomainMinMax(f2, `min`), n2.getXDomainMinMax(f2, t2(769))], d2);
      }
      a2.axis.x[t2(221)] = d2;
    }
    o2.svg && i2.axis_x_tick_autorotate && i2.axis_x_tick_fit && !i2.axis_x_tick_multiline && !i2.axis_x_tick_culling && c2 && (s2 = n2.needToRotateXAxisTickTexts() ? i2.axis_x_tick_rotate : 0);
  }
  return s2;
}, needToRotateXAxisTickTexts: function() {
  var e2 = M, t2 = this, n2 = t2.state, r2 = n2[e2(501)], i2 = n2[e2(673)], a2 = n2.isLegendRight, o2 = n2.legendItemWidth, s2 = a2 && o2, c2 = i2[e2(1183)] - s2 - t2.getCurrentPaddingByDirection(`left`) - t2.getCurrentPaddingByDirection(`right`), l2 = r2.x.tickCount + r2.x.padding.left + r2.x.padding.right;
  return t2.axis.getMaxTickSize(`x`).width > (l2 ? c2 / l2 : 0);
} }, Ka = P(P(P({ axis_evalTextSize: true, axis_rotated: false, axis_tooltip: false }, { axis_x_clipPath: true, axis_x_show: true, axis_x_forceAsSingle: false, axis_x_type: `indexed`, axis_x_localtime: true, axis_x_categories: [], axis_x_tick_centered: false, axis_x_tick_format: void 0, axis_x_tick_culling: {}, axis_x_tick_culling_max: 10, axis_x_tick_culling_lines: true, axis_x_tick_culling_reverse: false, axis_x_tick_count: void 0, axis_x_tick_inner: false, axis_x_tick_show: true, axis_x_tick_text_show: true, axis_x_tick_text_inner: false, axis_x_tick_text_position: { x: 0, y: 0 }, axis_x_tick_fit: true, axis_x_tick_values: null, axis_x_tick_autorotate: false, axis_x_tick_rotate: 0, axis_x_tick_outer: true, axis_x_tick_multiline: true, axis_x_tick_width: null, axis_x_tick_tooltip: false, axis_x_max: void 0, axis_x_min: void 0, axis_x_inverted: false, axis_x_padding: {}, axis_x_height: void 0, axis_x_extent: void 0, axis_x_label: {}, axis_x_axes: [] }), { axis_y_clipPath: true, axis_y_show: true, axis_y_type: `indexed`, axis_y_max: void 0, axis_y_min: void 0, axis_y_inverted: false, axis_y_center: void 0, axis_y_inner: false, axis_y_label: {}, axis_y_tick_format: void 0, axis_y_tick_culling: false, axis_y_tick_culling_max: 5, axis_y_tick_culling_lines: true, axis_y_tick_culling_reverse: false, axis_y_tick_inner: false, axis_y_tick_outer: true, axis_y_tick_values: null, axis_y_tick_rotate: 0, axis_y_tick_count: void 0, axis_y_tick_show: true, axis_y_tick_stepSize: null, axis_y_tick_text_show: true, axis_y_tick_text_position: { x: 0, y: 0 }, axis_y_tick_time_value: void 0, axis_y_padding: {}, axis_y_default: void 0, axis_y_axes: [] }), { axis_y2_show: false, axis_y2_type: `indexed`, axis_y2_max: void 0, axis_y2_min: void 0, axis_y2_inverted: false, axis_y2_center: void 0, axis_y2_inner: false, axis_y2_label: {}, axis_y2_tick_format: void 0, axis_y2_tick_culling: false, axis_y2_tick_culling_max: 5, axis_y2_tick_culling_lines: true, axis_y2_tick_culling_reverse: false, axis_y2_tick_inner: false, axis_y2_tick_outer: true, axis_y2_tick_values: null, axis_y2_tick_rotate: 0, axis_y2_tick_count: void 0, axis_y2_tick_show: true, axis_y2_tick_stepSize: null, axis_y2_tick_text_show: true, axis_y2_tick_text_position: { x: 0, y: 0 }, axis_y2_padding: {}, axis_y2_default: void 0, axis_y2_axes: [] }), qa = { grid_x_show: false, grid_x_type: `tick`, grid_x_lines: [], grid_y_show: false, grid_y_lines: [], grid_y_ticks: void 0, grid_focus_edge: false, grid_focus_show: true, grid_focus_y: false, grid_front: false, grid_lines_front: true }, Ja = { data_xs: {}, data_xFormat: `%Y-%m-%d`, data_xLocaltime: true, data_xSort: true, data_axes: {}, data_regions: {}, data_stack_normalize: false }, Ya = [_a, va, ya, Ta, Ea, ka, Aa], Xa = { axis: Na, clip: La, eventrect: Fa, flow: Ia, grid: Ua, region: Wa, sizeAxis: Ga }, Za = { optDataAxis: Ja, optAxis: Ka, optGrid: qa }, Qa = 15, $a = 20, eo = 0.35;
function to(e2) {
  e2 === void 0 && (e2 = false);
  var t2 = this;
  return [`donut`, `pie`, `polar`, `gauge`].find(function(n2) {
    return t2.hasType(n2) && !(n2 === `gauge` && e2 && t2.hasMultiArcGauge());
  });
}
function no() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = to.call(t2, true), i2 = r2 && n2[r2 + `_label_line`], a2 = Jn(i2), o2 = function(e3, t3, n3) {
    return n3;
  }, s2 = { show: i2 === true || a2 && (i2 == null ? void 0 : i2.show) !== false, distance: a2 && (i2 == null ? void 0 : i2.distance) || $a };
  if (i2 === true) return { chartType: r2, line: s2, text: { formatter: o2 } };
  if (!a2) return { chartType: r2, line: { show: false, distance: $a }, text: { formatter: null } };
  var c2 = o2;
  return G(i2.text) ? c2 = i2.text : i2[e2(601)] === false && (c2 = null), { chartType: r2, line: s2, text: { formatter: c2 } };
}
function ro(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.state, a2 = r2.updateAngle(e2);
  if (!a2) return null;
  var o2 = r2.getRadius(e2)[n2(460)], s2 = o2;
  r2.hasType(`polar`) && (s2 = r2.getPolarOuterRadius(e2, o2), o2 = i2.radius);
  var c2 = (a2.startAngle + a2.endAngle) / 2;
  Math.abs(a2.endAngle - a2.startAngle - 2 * Math.PI) < 0.01 && (c2 = Math.PI / 2);
  var l2 = Math.sin(c2), u2 = -Math.cos(c2), d2 = { x: l2 * s2, y: u2 * s2 }, f2 = o2 + Qa, p2 = { x: l2 * f2, y: u2 * f2 }, m2 = l2 >= 0;
  return { startPoint: d2, breakPoint: p2, endPoint: { x: p2.x + t2 * (m2 ? 1 : -1), y: p2.y }, isRight: m2, midAngle: c2 };
}
function io() {
  var e2 = M;
  return no.call(this).line[e2(304)];
}
function ao(e2) {
  var t2 = this, n2 = t2.$el.arcs, r2 = t2.$T, i2 = no.call(t2), a2 = i2.line, o2 = i2.text, s2 = a2.distance, c2 = null;
  n2.selectAll(`.` + L.chartArc).each(function(n3) {
    var i3 = Q, l2 = j(this), u2 = ro.call(t2, n3, s2), d2 = n3._cache ?? {}, f2 = d2.ratio, p2 = d2.meetsThreshold, m2 = d2.updated;
    if (!(!m2 || !u2)) {
      var h2 = t2.isTargetToShow(n3[i3(444)].id) && p2, g2 = u2.startPoint, _2 = u2[i3(614)], v2 = u2.endPoint, y2 = u2.isRight, b2 = g2.x + `,` + g2.y + ` ` + _2.x + `,` + _2.y + ` ` + v2.x + `,` + v2.y;
      if (a2[i3(304)]) {
        var x2 = l2[i3(1057)](`.` + L.arcLabelLine);
        x2[i3(1222)]() && (x2 = l2.append(`polyline`).attr(i3(1093), L.arcLabelLine)), r2(x2, e2).attr(`points`, b2).style(`stroke`, t2.color(n3.data)).style(`opacity`, h2 ? null : `0`);
      }
      var S2 = l2.select(`.` + L.arcLabelLineText);
      if (S2.empty() && (S2 = l2[i3(440)](`text`).attr(`class`, L.arcLabelLineText).style(i3(737), `none`)), h2) {
        var C2 = m2[i3(461)], w2 = n3.data.id, T2 = (o2.formatter ?? t2.getArcLabelConfig(`format`) ?? t2.defaultArcValueFormat)(C2, f2, w2).toString();
        tr(S2, T2, [-1, 1], false);
        var E2 = { x: v2.x + 5 * (y2 ? 1 : -1), y: v2.y };
        S2.style(`text-anchor`, y2 ? `start` : `end`);
        var D2 = S2[i3(376)](), O2 = D2 == null ? void 0 : D2.querySelectorAll(i3(1014));
        if (c2 === null && (c2 = parseFloat(U[i3(590)](D2).fontSize) || 12), O2 && O2.length > 1) {
          var k2 = (O2[i3(626)] - 3) / 2;
          E2.y += (-k2 + eo) * c2;
        } else E2.y += eo * c2;
        r2(S2, e2).attr(`transform`, `translate(` + E2.x + `,` + E2.y + `)`)[i3(521)](`opacity`, null)[i3(521)](`fill`, t2.updateTextColor.bind(t2)(n3));
      } else r2(S2, e2).style(i3(363), `0`);
    }
  });
}
function oo(e2) {
  return [`donut`, `pie`, `polar`, `gauge`].find(function(t2) {
    return e2.hasType(t2);
  });
}
function so(e2, t2, n2, r2) {
  var i2 = M, a2 = e2.config, o2 = e2.state.radiusExpanded, s2 = n2.endAngle - Math.PI / 2, c2 = Math.sin(s2), l2 = { x: Math[i2(341)](s2) * (o2 + (r2 ? 5 : 25)), y: c2 * (o2 + 15 - Math.abs(c2 * 10)) + 3 };
  if (r2) {
    var u2 = a2.arc_rangeText_position;
    if (u2) {
      var d2 = a2.arc_rangeText_values, f2 = G(u2) ? u2(d2[t2[i2(1244)]]) : u2;
      l2.x += (f2 == null ? void 0 : f2.x) ?? 0, l2.y += (f2 == null ? void 0 : f2.y) ?? 0;
    }
  }
  return l2;
}
function co(e2, t2, n2, r2) {
  var i2 = M, a2 = e2[i2(636)], o2 = oo(e2), s2 = o2 ? a2[o2 + `_label_ratio`] : void 0;
  if (s2) s2 = G(s2) ? s2.bind(e2[i2(1158)])(t2, n2, r2) : s2;
  else {
    var c2 = 36, l2 = 0.375, u2 = 1.175, d2 = 0.8, f2 = c2 / n2;
    s2 = n2 && r2 ? (f2 > l2 ? u2 - f2 : d2) * n2 / r2 : 0;
  }
  return s2;
}
function lo(e2, t2, n2) {
  var r2 = M, i2 = e2.getRadius(t2).outerRadius;
  e2.hasType(`polar`) && (i2 = e2.getPolarOuterRadius(t2, i2));
  var a2 = e2[r2(585)].centroid(n2).map(function(e3) {
    return isNaN(e3) ? 0 : e3;
  }), o2 = a2[0], s2 = a2[1], c2 = Math[r2(969)](o2 * o2 + s2 * s2), l2 = co(e2, t2, i2, c2);
  return { pos: { x: o2, y: s2 }, ratio: l2 };
}
function uo(e2) {
  var t2 = M;
  e2 === void 0 && (e2 = 0);
  var n2 = this, r2 = n2.config, i2 = n2.state, a2 = n2[t2(237)](), o2 = i2.gaugeArcWidth / n2.filterTargetsToShow(n2.data[t2(517)]).length, s2 = e2 ? Math.min(i2.radiusExpanded * e2 - i2.radius, o2 * 0.8 - (1 - e2) * 100) : 0;
  return { inner: function(e3) {
    var t3 = n2.getRadius(e3).innerRadius;
    return a2 ? i2.radius - o2 * (e3.index + 1) : q(t3) ? t3 : 0;
  }, outer: function(r3) {
    var c2 = t2, l2 = n2[c2(307)](r3).outerRadius, u2;
    if (a2) u2 = i2.radius - o2 * r3[c2(1244)] + s2;
    else if (n2.hasType(c2(1187)) && !e2) u2 = n2[c2(468)](r3, l2);
    else if (u2 = l2, e2) {
      var d2 = i2.radiusExpanded;
      i2[c2(1140)] !== l2 && (d2 -= Math.abs(i2.radius - l2)), u2 = d2 * e2;
    }
    return u2;
  }, corner: function(e3, i3) {
    var a3 = t2, o3 = r2.arc_cornerRadius_ratio, s3 = o3 === void 0 ? 0 : o3, c2 = r2[a3(254)], l2 = c2 === void 0 ? 0 : c2, u2 = e3.data.id, d2 = e3[a3(461)], f2 = 0;
    return f2 = s3 ? s3 * i3 : q(l2) ? l2 : l2[a3(872)](n2.api, u2, d2, i3), f2;
  } };
}
function fo(e2) {
  return function(t2) {
    var n2 = function(e3) {
      var t3 = e3.startAngle, n3 = t3 === void 0 ? 0 : t3, r3 = e3.endAngle, i2 = r3 === void 0 ? 0 : r3, a2 = e3.padAngle;
      return { startAngle: n3, endAngle: i2, padAngle: a2 === void 0 ? 0 : a2 };
    }, r2 = ye(n2(this._current), n2(t2));
    return this._current = t2, function(n3) {
      var i2 = r2(n3), a2 = t2.data, o2 = t2.index, s2 = t2.value;
      return e2(P(P({}, i2), { data: a2, index: o2, value: s2 }));
    };
  };
}
var po = { initPie: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = n2.data_type, i2 = n2[r2 + `_padding`], a2 = n2[r2 + `_startingAngle`] || 0, o2 = (i2 ? i2 * 0.01 : n2[r2 + `_padAngle`]) || 0;
  t2[e2(835)] = He().startAngle(a2)[e2(178)](a2 + 2 * Math.PI).padAngle(o2).value(function(t3) {
    var _a2;
    var n3 = e2;
    return ((_a2 = t3.values) == null ? void 0 : _a2[n3(493)](function(e3, t4) {
      return e3 + t4.value;
    }, 0)) ?? t3;
  }).sort(t2.getSortCompareFn.bind(t2)(true));
}, updateRadius: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.state, i2 = n2[n2.data_type + e2(415)], a2 = n2.gauge_width || n2[e2(796)], o2 = t2[e2(1035)](t2[e2(444)].targets).length * n2.gauge_arcs_minWidth, s2 = 0.85, c2 = io.call(t2) ? s2 : 1;
  r2.radiusExpanded = Math.min(r2[e2(434)], r2.arcHeight) / 2 * (t2.hasMultiArcGauge() && n2.gauge_label_show ? s2 : c2), r2.radius = r2.radiusExpanded * 0.95, r2.innerRadiusRatio = a2 ? (r2[e2(1140)] - a2) / r2.radius : 0.6, r2.gaugeArcWidth = a2 || (o2 <= r2.radius - r2[e2(556)] ? r2.radius - r2.innerRadius : o2 <= r2.radius ? o2 : r2.radius);
  var l2 = n2.pie_innerRadius || (i2 ? i2 * (r2.innerRadiusRatio + 0.1) : 0);
  r2.outerRadius = n2.pie_outerRadius, r2.innerRadius = t2.hasType(`donut`) || t2[e2(1013)](e2(1146)) ? r2.radius * r2.innerRadiusRatio : l2;
}, getRadius: function(e2) {
  var t2 = this, n2 = e2 == null ? void 0 : e2.data, r2 = t2.state, i2 = r2.innerRadius, a2 = r2.outerRadius;
  return !q(i2) && n2 && (i2 = i2[n2.id] || 0), X(a2) && n2 && n2.id in a2 ? a2 = a2[n2.id] : q(a2) || (a2 = t2.state.radius), { innerRadius: i2, outerRadius: a2 };
}, updateArc: function() {
  var e2 = M, t2 = this;
  t2.updateRadius(), t2[e2(585)] = t2.getSvgArc(), t2.svgArcExpanded = t2[e2(1152)]();
}, getArcLength: function() {
  var e2 = this.config.gauge_arcLength * 3.6, t2 = e2 / 360 * 2;
  return e2 < -360 ? t2 = -2 : e2 > 360 && (t2 = 2), t2 * Math.PI;
}, getStartingAngle: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = n2.data_type, i2 = t2.hasType(e2(1146)) ? n2.gauge_fullCircle : false, a2 = -1 * Math.PI / 2, o2 = Math.PI / 2, s2 = n2[r2 + `_startingAngle`] || 0;
  return !i2 && s2 <= a2 ? s2 = a2 : !i2 && s2 >= o2 ? s2 = o2 : (s2 > Math.PI || s2 < -1 * Math.PI) && (s2 = Math.PI), s2;
}, updateAngle: function(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2.config, a2 = r2.state, o2 = t2 && r2[n2(1013)](`gauge`), s2 = r2.pie, c2 = e2, l2 = false;
  if (!i2) return null;
  var u2 = r2.getStartingAngle(), d2 = i2.gauge_fullCircle || t2 && !o2 ? r2.getArcLength() : u2 * -2;
  if (c2.data && r2.isGaugeType(c2.data) && !r2[n2(237)]()) {
    var f2 = i2.gauge_min, p2 = i2.gauge_max, m2 = d2 * ((r2.getTotalDataSum(a2[n2(332)]) - f2) / (p2 - f2));
    s2 = s2.startAngle(u2).endAngle(m2 + u2);
  }
  if (t2 === false && s2(r2[n2(1035)]()).forEach(function(e3, t3) {
    var _a2;
    !l2 && e3.data.id === ((_a2 = c2.data) == null ? void 0 : _a2.id) && (l2 = true, c2 = e3, c2.index = t3);
  }), isNaN(c2.startAngle) && (c2.startAngle = 0), isNaN(c2.endAngle) && (c2[n2(178)] = c2.startAngle), t2 || c2.data && (i2.gauge_enforceMinMax || r2.hasMultiArcGauge())) {
    var f2 = i2.gauge_min, p2 = i2.gauge_max, h2 = t2 && !o2 ? r2.getTotalDataSum(a2.rendered) : p2, g2 = d2 / (h2 - f2), _2 = c2.value ?? 0, v2 = _2 < f2 ? 0 : _2 < h2 ? _2 - f2 : h2 - f2;
    c2.startAngle = u2, c2.endAngle = u2 + g2 * v2;
  }
  return l2 || t2 ? c2 : null;
}, getSvgArc: function() {
  var e2 = this, t2 = uo.call(e2), n2 = t2.inner, r2 = t2.outer, i2 = t2.corner, a2 = Ve().innerRadius(n2).outerRadius(r2), o2 = function(t3, n3) {
    var o3 = Q, s2 = `M 0 0`;
    if (t3.value || t3.data) {
      var c2 = n3 ? t3 : e2.updateAngle(t3) ?? null;
      c2 && (s2 = a2[o3(245)](i2(c2, r2(c2)))(c2));
    }
    return s2;
  };
  return o2.centroid = a2.centroid, o2;
}, getSvgArcExpanded: function(e2) {
  e2 === void 0 && (e2 = 1);
  var t2 = this, n2 = uo.call(t2, e2), r2 = n2.inner, i2 = n2.outer, a2 = n2.corner, o2 = Ve().innerRadius(r2).outerRadius(i2);
  return function(e3) {
    var n3 = t2.updateAngle(e3), r3 = i2(n3), s2 = 0;
    return n3 && (s2 = a2(n3, r3)), n3 ? o2.cornerRadius(s2)(n3) : `M 0 0`;
  };
}, getArc: function(e2, t2, n2) {
  var r2 = M;
  return n2 || this[r2(540)](e2[r2(444)]) ? this.svgArc(e2, t2) : `M 0 0`;
}, redrawArcRangeText: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.$el.arcs, i2 = t2.state, a2 = t2.$T, o2 = n2.arc_rangeText_format, s2 = t2.hasType(`gauge`) && n2.arc_rangeText_fixed, c2 = n2.arc_rangeText_values;
  if (c2 != null && c2.length) {
    var l2 = n2.arc_rangeText_unit === `%`, u2 = t2.getTotalDataSum(i2[e2(332)]);
    l2 && (c2 = c2.map(function(e3) {
      return u2 / 100 * e3;
    }));
    var d2 = t2.pie(c2).map(function(t3, n3) {
      var r3 = e2;
      return t3[r3(1244)] = n3, t3;
    }), f2 = r2.selectAll(`.` + L.arcRange)[e2(444)](c2);
    f2.exit(), f2 = a2(f2.enter().append(`text`).attr(`class`, L[e2(993)]).style(`text-anchor`, `middle`).style(`pointer-events`, `none`).style(`opacity`, `0`).text(function(e3) {
      var t3 = l2 ? e3 / u2 * 100 : e3;
      return G(o2) ? o2(t3) : `` + t3 + (l2 ? `%` : ``);
    }).merge(f2)), (!i2.rendered || i2[e2(332)] && !s2) && u2 > 0 && f2.attr(e2(310), function(e3, n3) {
      return t2.transformForArcLabel(this, d2[n3], true);
    }), f2.style(`opacity`, function(e3) {
      return !s2 && (e3 > u2 || u2 === 0) ? `0` : null;
    });
  }
}, transformForArcLabel: function(e2, t2, n2) {
  var r2 = M;
  n2 === void 0 && (n2 = false);
  var i2 = this, a2 = i2[r2(181)](t2, n2);
  if (!a2) return ``;
  var o2, s2 = 1;
  if (n2 || i2.hasMultiArcGauge()) o2 = so(i2, t2, a2, n2);
  else if (!i2.hasType(`gauge`) || i2[r2(444)].targets.length > 1) {
    var c2 = lo(i2, t2, a2);
    o2 = c2.pos, s2 = c2[r2(810)];
  } else return ``;
  return Bi[r2(872)](i2, e2, o2), `translate(` + o2.x * s2 + `,` + o2.y * s2 + `)`;
}, convertToArcData: function(e2) {
  var t2 = M;
  return this.addName({ id: t2(444) in e2 ? e2[t2(444)].id : e2.id, value: e2[t2(461)], ratio: this[t2(250)](`arc`, e2), index: e2.index });
}, textForArcLabel: function(e2) {
  var _a2;
  var t2 = M, n2 = this, r2 = n2.hasType(`gauge`), i2 = (_a2 = [`donut`, t2(1146), `pie`, `polar`].filter(n2.hasType.bind(n2))) == null ? void 0 : _a2[0];
  n2.shouldShowArcLabel() && e2[t2(521)](`fill`, n2[t2(1135)].bind(n2)).attr(`filter`, function(e3) {
    var r3 = t2;
    return n2.updateTextBGColor.bind(n2)(e3, n2[r3(636)].data_labels_backgroundColors);
  }).each(function(e3) {
    var a2 = t2, o2 = j(this), s2 = n2.updateAngle(e3), c2 = n2[a2(250)](a2(837), s2), l2 = Li.call(n2, c2, i2);
    if (e3._cache = { updated: s2, ratio: c2, meetsThreshold: l2 }, l2) {
      var u2 = (s2 || e3).value;
      tr(o2, (n2.getArcLabelConfig(`format`) || n2.defaultArcValueFormat)(u2, c2, e3.data.id)[a2(678)](), [-1, 1], r2);
    } else o2.text(``);
  });
}, expandArc: function(e2) {
  var t2 = M, n2 = this, r2 = n2.state.transiting, i2 = n2.$el;
  if (r2) {
    var a2 = setInterval(function() {
      var t3 = Q;
      r2 || (clearInterval(a2), i2[t3(876)].selectAll(`.` + B.legendItemFocused).size() > 0 && n2.expandArc(e2));
    }, 10);
    return;
  }
  var o2 = n2[t2(1147)](e2);
  i2.svg[t2(236)](n2.selectorTargets(o2, `.` + L.chartArc)).each(function(e3) {
    var r3 = t2;
    if (n2.shouldExpand(e3[r3(444)].id)) {
      var i3 = n2[r3(635)](e3[r3(444)].id, `duration`), a3 = n2.getSvgArcExpanded(n2.getExpandConfig(e3[r3(444)].id, `rate`));
      j(this).selectAll(`path`).transition().duration(i3).attrTween(`d`, fo(n2.svgArcExpanded.bind(n2)))[r3(241)]()[r3(1168)](i3 * 2).attrTween(`d`, fo(a3[r3(1194)](n2)));
    }
  });
}, unexpandArc: function(e2) {
  var t2 = M, n2 = this, r2 = n2.state.transiting, i2 = n2.$el.svg;
  if (!r2) {
    var a2 = n2[t2(1147)](e2);
    i2.selectAll(n2.selectorTargets(a2, `.` + L.chartArc)).selectAll(t2(510)).transition()[t2(1168)](function(e3) {
      var r3 = t2;
      return n2.getExpandConfig(e3[r3(444)].id, `duration`);
    }).attrTween(`d`, fo(n2.svgArc.bind(n2))), i2.selectAll(`` + L[t2(837)]).style(`opacity`, null);
  }
}, getExpandConfig: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = { duration: 50, rate: 0.98 }, o2;
  return r2.isDonutType(e2) ? o2 = n2(558) : r2.isGaugeType(e2) ? o2 = `gauge` : r2[n2(291)](e2) && (o2 = `pie`), o2 ? i2[o2 + `_expand_` + t2] : a2[t2];
}, shouldExpand: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(636)];
  return n2.isDonutType(e2) && r2.donut_expand || n2[t2(843)](e2) && r2[t2(573)] || n2.isPieType(e2) && r2.pie_expand;
}, shouldShowArcLabel: function() {
  var e2 = M, t2 = this, n2 = t2.config;
  return [e2(558), `gauge`, `pie`, `polar`].some(function(e3) {
    return t2.hasType(e3) && n2[e3 + `_label_show`];
  });
}, getArcLabelConfig: function(e2) {
  var t2 = M;
  e2 === void 0 && (e2 = `format`);
  var n2 = this, r2 = n2.config, i2 = function(e3) {
    return e3;
  };
  return [`donut`, t2(1146), t2(835), t2(1187)].filter(n2[t2(1013)].bind(n2))[t2(743)](function(t3) {
    i2 = r2[t3 + `_label_` + e2];
  }), e2 === `format` && G(i2) ? i2.bind(n2.api) : i2;
}, updateTargetsForArc: function(e2) {
  var t2 = M, n2 = this, r2 = n2.$el, i2 = n2.hasType(`gauge`), a2 = n2.getChartClass(`Arc`), o2 = n2.getClass(`arcs`, true), s2 = n2[t2(201)].bind(n2), c2 = r2[t2(938)].select(`.` + L.chartArcs), l2 = c2.selectAll(`.` + L.chartArc).data(n2.pie(e2)).attr(t2(1093), function(e3) {
    return a2(e3) + s2(e3.data);
  }), u2 = l2.enter()[t2(440)](`g`).attr(`class`, a2).call(this.setCssRule(false, `.` + L[t2(668)] + ` text`, [`pointer-events:none`, `text-anchor:middle`]));
  u2.append(`g`)[t2(919)](`class`, o2).merge(l2), u2.append(`text`).attr(`dy`, i2 && !n2[t2(852)]() ? `-.1em` : null).style(t2(363), `0`).style(`text-anchor`, n2.getStylePropValue(t2(1039))).style(`pointer-events`, n2.getStylePropValue(`none`)), r2.text = c2.selectAll(`.` + I[t2(1257)] + ` text`);
}, initArc: function() {
  var e2 = M, t2 = this, n2 = t2.$el;
  n2.arcs = n2.main.select(`.` + I.chart).append(`g`).attr(`class`, L.chartArcs)[e2(919)](`transform`, t2.getTranslate(e2(837))), t2.setArcTitle();
}, setArcTitle: function(e2) {
  var t2 = M, n2 = this, r2 = e2 || n2.getArcTitle(), i2 = n2.hasType(`gauge`);
  if (r2) {
    var a2 = i2 ? R.chartArcsGaugeTitle : L.chartArcsTitle, o2 = n2.$el.arcs.select(`.` + a2);
    o2.empty() && (o2 = n2.$el.arcs.append(`text`).attr(t2(1093), a2).style(`text-anchor`, `middle`)), i2 && o2.attr(`dy`, `-0.3em`), tr(o2, r2, i2 ? void 0 : [-0.6, 1.35], true);
  }
}, getArcTitle: function() {
  var e2 = M, t2 = this, n2 = t2[e2(1013)](`donut`) && `donut` || t2.hasType(e2(1146)) && `gauge`;
  return n2 ? t2.config[n2 + `_title`] : ``;
}, getArcTitleWithNeedleValue: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.state, i2 = t2[e2(675)]();
  if (i2 && t2.config[e2(1046)] && /{=[A-Z_]+}/.test(i2)) {
    var a2 = r2[e2(673)].needle;
    return q(a2) || (a2 = n2.arc_needle_value), Dr(i2, { NEEDLE_VALUE: ~~a2 });
  }
  return false;
}, redrawArc: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2.config, o2 = i2.state, s2 = i2[r2(476)].main, c2 = a2.interaction_enabled, l2 = c2 && a2.data_selection_isselectable, u2 = s2[r2(236)](`.` + L.arcs).selectAll(`.` + L.arc).data(i2.arcData[r2(1194)](i2));
  u2[r2(999)]().transition()[r2(1168)](t2).style(`opacity`, `0`).remove(), u2 = u2.enter().append(`path`).attr(r2(1093), i2.getClass(`arc`, true)).style(`fill`, function(e3) {
    return i2[r2(309)](e3.data);
  }).style(`cursor`, function(e3) {
    var t3;
    return (t3 = l2 == null ? void 0 : l2.bind) != null && t3.call(l2, i2.api)(e3) ? `pointer` : null;
  }).style(r2(363), `0`)[r2(904)](function(e3) {
    var t3 = r2;
    i2[t3(843)](e3.data) && (e3.startAngle = a2.gauge_startingAngle, e3[t3(178)] = a2.gauge_startingAngle), this._current = e3;
  }).merge(u2), i2.hasType(`gauge`) && (i2[r2(396)](), i2.hasMultiArcGauge() && i2.redrawArcGaugeLine()), u2[r2(919)](r2(310), function(e3) {
    return !i2[r2(843)](e3.data) && n2 ? `scale(0)` : ``;
  }).style(`opacity`, function(e3) {
    var t3 = r2;
    return e3 === this[t3(213)] ? `0` : null;
  }).each(function() {
    o2.transiting = true;
  }).transition().duration(e2).attrTween(`d`, function(e3) {
    var t3 = r2, n3 = i2.updateAngle(e3);
    if (!n3) return function() {
      return Q(489);
    };
    isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle);
    var a3 = ye(this._current, n3);
    return this[t3(213)] = a3(0), function(t4) {
      var n4 = a3(t4);
      return n4.data = e3.data, i2.getArc(n4, true);
    };
  }).attr(r2(310), n2 ? `scale(1)` : ``)[r2(521)](`fill`, function(e3) {
    var t3 = r2, n3;
    return i2.levelColor ? (n3 = i2.levelColor(e3.data.values[0].value), a2.data_colors[e3.data.id] = n3) : n3 = i2.color(e3[t3(444)]), n3;
  }).style(`opacity`, null).call(er, function() {
    var e3 = r2;
    if (i2.levelColor) {
      var t3 = j(this), n3 = t3.datum(this._current);
      i2.updateLegendItemColor(n3.data.id, t3.style(`fill`));
    }
    o2.transiting = false, Z(a2.onrendered, i2[e3(1158)]);
  }), c2 && i2.bindArcEvent(u2), i2.hasType(`polar`) && i2.redrawPolar(), i2.hasType(`gauge`) && i2.redrawBackgroundArcs(), a2.arc_needle_show && i2.redrawNeedle(), i2.redrawArcText(e2), i2.redrawArcRangeText();
}, redrawNeedle: function() {
  var e2 = M, t2 = this, n2 = t2.$el, r2 = t2[e2(636)], i2 = t2.state, a2 = i2[e2(505)], o2 = (i2[e2(1140)] - 1) / 100 * r2.arc_needle_length, s2 = a2.length !== t2.data[e2(517)].length, c2 = t2[e2(476)][e2(1177)][e2(1057)](`.` + L[e2(733)]), l2 = r2.arc_needle_path, u2 = r2.arc_needle_bottom_width / 2, d2 = r2.arc_needle_top_width / 2, f2 = r2.arc_needle_top_rx, p2 = r2.arc_needle_top_ry, m2 = r2.arc_needle_bottom_len, h2 = r2.arc_needle_bottom_rx, g2 = r2.arc_needle_bottom_ry, _2 = t2.getNeedleAngle(), v2 = function() {
    var e3 = t2.getArcTitleWithNeedleValue();
    e3 && t2.setArcTitle(e3);
  };
  if (v2(), c2.empty() && (c2 = n2.arcs.append(`path`).classed(L.needle, true), n2.needle = c2, n2.needle.updateHelper = function(i3, a3) {
    var o3 = e2;
    a3 === void 0 && (a3 = false), n2.needle.style(`display`) !== o3(1097) && t2.$T(n2.needle).style(`transform`, `rotate(` + t2.getNeedleAngle(i3) + `deg)`).call(er, function() {
      var e3 = o3;
      a3 && (r2[e3(225)] = i3), v2();
    });
  }), s2) {
    var y2 = G(l2) ? l2.call(t2, o2) : `M-` + u2 + ` ` + m2 + ` A` + h2 + ` ` + g2 + ` 0 0 0 ` + u2 + ` ` + m2 + ` L` + d2 + ` -` + o2 + ` A` + f2 + ` ` + p2 + ` 0 0 0 -` + d2 + ` -` + o2 + ` L-` + u2 + ` ` + m2 + ` Z`;
    t2.$T(c2).attr(`d`, y2).style(`fill`, r2.arc_needle_color).style(e2(928), null).style(e2(310), `rotate(` + _2 + `deg)`);
  } else c2.style(`display`, `none`);
}, getNeedleAngle: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state, a2 = n2.getArcLength(), o2 = n2.hasType(`gauge`), s2 = n2.getTotalDataSum(true), c2 = J(e2) ? e2 : r2.arc_needle_value, l2 = r2[r2[t2(1239)] + `_startingAngle`] || 0, u2 = 0;
  if (q(c2) || (c2 = o2 && n2.data[t2(517)].length === 1 ? s2 : 0), i2[t2(673)].needle = c2, o2) {
    l2 = n2.getStartingAngle();
    var d2 = r2[t2(647)] ? a2 : l2 * -2, f2 = r2[t2(1154)], p2 = r2.gauge_max;
    u2 = d2 * ((c2 - f2) / (p2 - f2));
  } else u2 = c2 / s2 * a2;
  return (l2 + u2) * (180 / Math.PI);
}, redrawBackgroundArcs: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2[e2(886)], i2 = t2[e2(237)](), a2 = n2.gauge_fullCircle, o2 = t2.filterTargetsToShow(t2.data[e2(517)])[e2(626)] === 0 && !!n2.data_empty_label_text, s2 = t2.getStartingAngle(), c2 = a2 ? s2 + t2.getArcLength() : s2 * -1, l2 = t2[e2(476)].arcs.select((i2 ? `g` : ``) + `.` + L.chartArcsBackground);
  if (i2) {
    var u2 = 0;
    l2 = l2.selectAll(e2(413) + L.chartArcsBackground).data(t2[e2(444)].targets), l2.enter().append(e2(510)).attr(`class`, function(e3, t3) {
      return L.chartArcsBackground + ` ` + L.chartArcsBackground + `-` + t3;
    }).merge(l2).style(`fill`, n2[e2(1061)] || null).attr(`d`, function(e3) {
      var i3 = e3.id;
      if (o2 || r2.hiddenTargetIds.indexOf(i3) >= 0) return `M 0 0`;
      var a3 = { data: [{ value: n2.gauge_max }], startAngle: s2, endAngle: c2, index: u2++ };
      return t2.getArc(a3, true, true);
    }), l2.exit().remove();
  } else l2.attr(`d`, o2 ? `M 0 0` : function() {
    var e3 = { data: [{ value: n2.gauge_max }], startAngle: s2, endAngle: c2 };
    return t2.getArc(e3, true, true);
  });
}, bindArcEvent: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state, a2 = i2[t2(490)] === `touch`, o2 = i2.inputType === `mouse`;
  function s2(e3, r3, i3) {
    var a3 = t2;
    n2.expandArc(i3), n2.api[a3(1164)](i3), n2.toggleFocusLegend(i3, true), n2.showTooltip([r3], e3);
  }
  function c2(e3) {
    n2.unexpandArc(void 0), n2.api.revert(), n2.revertLegend(), n2.hideTooltip();
  }
  if (e2.on(t2(567), function(e3, i3, a3) {
    var o3 = t2, s3, c3 = n2.updateAngle(i3), l3;
    c3 && (l3 = n2.convertToArcData(c3), (s3 = n2.toggleShape) == null || s3.call(n2, this, l3, a3), r2[o3(589)][o3(1194)](n2.api)(l3, this));
  }), o2 && e2.on(`mouseover`, function(e3, r3) {
    var a3 = t2;
    if (!i2.transiting) {
      i2.event = e3;
      var o3 = n2.updateAngle(r3), c3 = o3 ? n2[a3(571)](o3) : null, l3 = (c3 == null ? void 0 : c3.id) || void 0;
      s2(this, c3, l3), n2.setOverOut(true, c3);
    }
  }).on(`mouseout`, function(e3, t3) {
    if (!(i2.transiting || !r2.interaction_onout)) {
      i2.event = e3;
      var a3 = n2.updateAngle(t3), o3 = a3 ? n2.convertToArcData(a3) : null;
      c2(), n2.setOverOut(false, o3);
    }
  }).on(t2(759), function(e3, r3) {
    var a3 = n2[t2(181)](r3), o3 = a3 ? n2.convertToArcData(a3) : null;
    i2.event = e3, n2.showTooltip([o3], this);
  }), a2 && n2.hasArcType() && !n2.radars) {
    var l2 = function(e3) {
      var _a2;
      var n3 = t2, r3 = ((_a2 = e3.changedTouches) == null ? void 0 : _a2[0]) ?? { clientX: 0, clientY: 0 }, i3 = r3.clientX, a3 = r3.clientY;
      return j(gn[n3(857)](i3, a3));
    };
    n2.$el.svg.on(`touchstart touchmove`, function(e3) {
      if (!i2.transiting) {
        i2.event = e3;
        var t3 = l2(e3).datum(), r3 = t3 != null && t3.data && t3.data.id ? n2.updateAngle(t3) : null, a3 = r3 ? n2.convertToArcData(r3) : null, o3 = (a3 == null ? void 0 : a3.id) || void 0;
        n2.callOverOutForTouch(a3), Un(o3) ? c2() : s2(this, a3, o3);
      }
    }, { passive: true });
  }
}, redrawArcText: function(e2) {
  var t2 = M, n2 = this, r2 = n2[t2(636)], i2 = n2.state, a2 = n2.$el, o2 = a2.main, s2 = a2.arcs, c2 = n2.hasType(`gauge`), l2 = n2.hasMultiArcGauge(), u2;
  if (c2 && n2[t2(444)][t2(517)].length === 1 && r2.gauge_title || (u2 = o2[t2(236)](`.` + L.chartArc).select(t2(601))[t2(521)](`opacity`, `0`).attr(`class`, function(e3) {
    return n2.isGaugeType(e3.data) ? R.gaugeValue : null;
  }).call(n2.textForArcLabel.bind(n2)).style(t2(497), function(e3) {
    var r3 = t2;
    return n2.isGaugeType(e3[r3(444)]) && n2[r3(444)].targets.length === 1 && !l2 ? Math[r3(448)](i2.radius / 5) + `px` : null;
  }), Ri[t2(872)](n2), u2.attr(t2(310), function(e3) {
    return n2.transformForArcLabel.bind(n2)(this, e3);
  })[t2(241)]().duration(e2)[t2(521)](`opacity`, function(e3) {
    var r3 = t2;
    return n2.isTargetToShow(e3[r3(444)].id) && n2.isArcType(e3[r3(444)]) ? null : `0`;
  }), l2 && u2.attr(`dy`, `-.1em`)), o2.select(`.` + L.chartArcsTitle).style(`opacity`, n2.hasType(`donut`) || c2 ? null : `0`), c2) {
    var d2 = r2.gauge_fullCircle;
    d2 && (u2 == null ? void 0 : u2.attr(`dy`, `` + (l2 ? 0 : Math.round(i2.radius / 14)))), r2.gauge_label_show && (s2.select(`.` + R.chartArcsGaugeUnit).attr(`dy`, (d2 ? 1.5 : 0.75) + `em`).text(r2.gauge_units), s2.select(`.` + R.chartArcsGaugeMin).attr(`dx`, -1 * (i2.innerRadius + (i2.radius - i2[t2(556)]) / (d2 ? 1 : 2)) + `px`).attr(`dy`, `1.2em`)[t2(601)](n2[t2(970)](r2.gauge_min, false)), !d2 && s2.select(`.` + R.chartArcsGaugeMax).attr(`dx`, i2.innerRadius + (i2.radius - i2[t2(556)]) / 2 + `px`).attr(`dy`, `1.2em`).text(n2.textForGaugeMinMax(r2.gauge_max, true)));
  }
  io.call(n2) && ao[t2(872)](n2, e2);
}, getArcElementByIdOrIndex: function(e2) {
  var t2 = M, n2 = this.$el.arcs, r2 = q(e2) ? function(t3) {
    return t3.index === e2;
  } : function(t3) {
    return t3.data.id === e2;
  };
  return n2 == null ? void 0 : n2[t2(236)](`.` + I.target + ` path`).filter(r2);
} }, mo = { initArea: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config;
  e2.insert(`g`, `.` + (r2.area_front ? Kt.circles : Xt.lines)).attr(`class`, n2[t2(832)](`areas`, true));
}, updateAreaColor: function(e2) {
  var t2 = this;
  return t2.config.area_linearGradient ? t2.getGradienColortUrl(e2.id) : t2.color(e2);
}, updateArea: function(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2.config, a2 = r2.state, o2 = r2.$el, s2 = r2.$T, c2 = t2 ? o2.subchart : o2;
  i2.area_linearGradient && r2.updateLinearGradient();
  var l2 = c2.main.selectAll(`.` + Ht.areas).selectAll(`.` + Ht.area).data(r2.lineData.bind(r2));
  s2(l2.exit(), e2).style(`opacity`, `0`).remove(), c2.area = l2.enter().append(`path`).attr(`class`, r2.getClass(`area`, true))[n2(521)](`fill`, r2.updateAreaColor.bind(r2)).style(n2(363), function() {
    return a2.orgAreaOpacity = j(this).style(`opacity`), `0`;
  }).merge(l2), l2.style(`opacity`, a2.orgAreaOpacity), r2.setRatioForGroupedData(c2.area.data());
}, redrawArea: function(e2, t2, n2) {
  var r2 = M;
  n2 === void 0 && (n2 = false);
  var i2 = this, a2 = (n2 ? this[r2(476)].subchart : this.$el).area, o2 = i2.state.orgAreaOpacity;
  return [i2.$T(a2, t2, cr()).attr(`d`, e2).style(`fill`, i2.updateAreaColor.bind(i2))[r2(521)](r2(363), function(e3) {
    return String(i2[r2(712)](e3) ? o2 / 1.75 : o2);
  })];
}, generateDrawArea: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2[n2(636)], a2 = i2.line_connectNull, o2 = i2.axis_rotated, s2 = r2.generateGetAreaPoints(e2, t2), c2 = r2.getYScaleById.bind(r2), l2 = function(e3) {
    return (t2 ? r2.subxx : r2.xx).call(r2, e3);
  }, u2 = function(e3, n3) {
    return r2.isGrouped(e3.id) ? s2(e3, n3)[0][1] : c2(e3.id, t2)(r2.isAreaRangeType(e3) ? r2.getRangedData(e3, `high`) : r2.getShapeYMin(e3.id));
  }, d2 = function(e3, i3) {
    return r2[n2(1242)](e3.id) ? s2(e3, i3)[1][1] : c2(e3.id, t2)(r2.isAreaRangeType(e3) ? r2.getRangedData(e3, `low`) : e3.value);
  };
  return function(e3) {
    var t3 = n2, s3 = a2 ? r2.filterRemoveNull(e3.values) : e3.values, c3 = 0, f2 = 0, p2;
    if (r2.isAreaType(e3)) {
      var m2 = Rt();
      m2 = o2 ? m2.y(l2).x0(u2).x1(d2) : m2.x(l2).y0(i2.area_above ? 0 : i2[t3(621)] ? r2[t3(886)].height : u2).y1(d2), a2 || (m2 = m2.defined(function(e4) {
        return r2[t3(345)](e4) !== null;
      })), r2.isStepType(e3) && (s3 = r2.convertValuesToStep(s3)), p2 = m2.curve(r2.getCurve(e3))(s3);
    } else s3[0] && (c3 = r2.scale.x(s3[0].x), f2 = r2.getYScaleById(e3.id)(s3[0].value)), p2 = o2 ? `M ` + f2 + ` ` + c3 : `M ` + c3 + ` ` + f2;
    return p2 || `M 0 0`;
  };
}, generateGetAreaPoints: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.getShapeX(0, e2, t2), o2 = r2.getShapeY(!!t2), s2 = r2[n2(290)](r2[n2(990)], e2, t2), c2 = r2.getYScaleById.bind(r2);
  return function(e3, n3) {
    var l2 = c2.call(r2, e3.id, t2)(r2.getShapeYMin(e3.id)), u2 = s2(e3, n3) || l2, d2 = a2(e3), f2 = e3.value, p2 = o2(e3);
    return i2.axis_rotated && (f2 > 0 && p2 < l2 || f2 < 0 && l2 < p2) && (p2 = l2), [[d2, u2], [d2, p2 - (l2 - u2)], [d2, p2 - (l2 - u2)], [d2, u2]];
  };
} };
function ho(e2) {
  var t2 = M, n2 = this.config[t2(900)], r2 = (n2 == null ? void 0 : n2[e2]) || n2;
  return /^(start|end)\-(start|end)$/.test(r2) ? r2 : null;
}
var go = { initBar: function() {
  var e2 = M, t2 = this, n2 = t2.$el, r2 = t2[e2(636)], i2 = t2.state.clip;
  n2.bar = n2[e2(938)][e2(1057)](`.` + I.chart), n2.bar = r2.bar_front ? n2.bar.append(`g`) : n2.bar.insert(`g`, `:first-child`), n2.bar.attr(`class`, Wt.chartBars).call(this.setCssRule(false, `.` + Wt.chartBars, [`pointer-events:none`])), r2.clipPath === false && (r2.bar_radius || r2.bar_radius_ratio) && n2[e2(951)].attr(`clip-path`, i2.pathXAxis.replace(/#[^)]*/, `#` + i2.id));
}, updateTargetsForBar: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.$el, a2 = n2[t2(1137)](`Bar`), o2 = n2.getClass(`bars`, true), s2 = n2.classFocus.bind(n2), c2 = r2.interaction_enabled && r2[t2(922)];
  i2.bar || n2.initBar(), i2.main.select(`.` + Wt.chartBars).selectAll(`.` + Wt.chartBar).data(n2[t2(933)](e2)).attr(t2(1093), function(e3) {
    return a2(e3) + s2(e3);
  }).enter()[t2(440)](`g`)[t2(919)](`class`, a2).style(`opacity`, `0`)[t2(521)](t2(737), n2[t2(650)](`none`)).append(`g`).attr(`class`, o2).style(t2(914), function(e3) {
    var r3 = t2, i3;
    return (i3 = c2 == null ? void 0 : c2.bind) != null && i3.call(c2, n2[r3(1158)])(e3) ? `pointer` : null;
  }).call(function(e3) {
    var r3 = t2;
    n2.setCssRule(true, ` .` + Wt.bar, [r3(963)], n2[r3(309)])(e3), e3.each(function(e4) {
      ho.call(n2, e4.id) && j(this).append(`path`).attr(`class`, Wt.barConnectLine);
    });
  });
}, updateBar: function(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2.config, a2 = r2[n2(476)], o2 = r2.$T, s2 = t2 ? a2.subchart : a2, c2 = r2.getClass(`bar`, true), l2 = r2.initialOpacity.bind(r2);
  i2.bar_linearGradient && r2[n2(1050)]();
  var u2 = s2[n2(938)].selectAll(`.` + Wt.bars).selectAll(`.` + Wt[n2(951)]).data(r2.labelishData.bind(r2));
  o2(u2.exit(), e2).style(`opacity`, `0`).remove(), s2.bar = u2.enter().append(n2(510)).attr(n2(1093), c2).style(`fill`, r2[n2(925)][n2(1194)](r2)).merge(u2).style(`opacity`, l2), r2.setRatioForGroupedData(s2[n2(951)].data());
}, updateBarColor: function(e2) {
  var t2 = M, n2 = this, r2 = n2.getStylePropValue(n2.color);
  return n2.config.bar_linearGradient ? n2[t2(653)](e2.id) : r2 ? r2(e2) : null;
}, redrawBar: function(e2, t2, n2) {
  var r2 = M;
  n2 === void 0 && (n2 = false);
  var i2 = this, a2 = (n2 ? i2.$el.subchart : i2[r2(476)])[r2(951)], o2 = [];
  return [i2.$T(a2, t2, cr()).attr(`d`, function(n3, a3, s2) {
    var c2 = r2, l2 = (q(n3.value) || i2.isBarRangeType(n3)) && e2(n3, a3), u2 = ho.call(i2, n3.id);
    if (l2.length > 1 && (o2.push(l2[1]), a3 === s2.length - 1)) {
      var d2 = i2.$T(j(this.parentNode.querySelector(`.` + Wt[c2(439)])), t2, cr());
      i2.updateConnectLine(d2, u2, o2), o2[c2(388)](0);
    }
    return l2[0];
  }).style(r2(963), i2[r2(925)].bind(i2))[r2(521)](`clip-path`, function(e3) {
    return e3.clipPath;
  }).style(`opacity`, null)];
}, generateDrawBar: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2[n2(288)](e2, t2), o2 = i2.axis_rotated, s2 = i2.bar_radius, c2 = i2.bar_radius_ratio, l2 = q(s2) && s2 > 0 ? function() {
    return s2;
  } : q(c2) ? function(e3) {
    return e3 * c2;
  } : null;
  return function(e3, t3) {
    var s3 = n2, c3 = a2(e3, t3), u2 = +o2, d2 = +!u2, f2 = e3[s3(461)] < 0, p2 = i2[`axis_` + r2.axis.getId(e3.id) + `_inverted`], m2 = !p2 && f2 || p2 && !f2, h2 = [``, ``], g2 = r2.isGrouped(e3.id), _2 = l2 && g2 ? r2.isStackingRadiusData(e3) : false, v2 = [c3[0][u2], c3[0][d2]], y2 = 0;
    if (e3.clipPath = null, l2) {
      var b2 = o2 ? d2 : u2, x2 = c3[2][b2] - c3[0][b2];
      y2 = !g2 || _2 ? l2(x2) : 0;
      var S2 = `a` + y2 + ` ` + y2 + ` ` + (m2 ? `1 0 0` : s3(371)) + ` `;
      h2[+!o2] = `` + S2 + y2 + `,` + y2, h2[+o2] = `` + S2 + [-y2, y2][o2 ? `sort` : `reverse`](), m2 && h2[s3(315)]();
    }
    var C2 = o2 ? c3[1][u2] + (m2 ? y2 : -y2) : c3[1][d2] + (m2 ? -y2 : y2);
    if (y2) {
      var w2 = ``;
      o2 ? m2 && v2[0] < C2 ? w2 = `0 ` + (C2 - v2[0]) + s3(535) : !m2 && v2[0] > C2 && (w2 = s3(902) + (v2[0] - C2) + `px`) : m2 && v2[1] > C2 ? w2 = v2[1] - C2 + s3(744) : !m2 && v2[1] < C2 && (w2 = s3(881) + (C2 - v2[1]) + `px 0`), w2 && (e3.clipPath = `inset(` + w2 + `)`);
    }
    var T2 = o2 ? `H` + C2 + ` ` + h2[0] + `V` + (c3[2][d2] - y2) + ` ` + h2[1] + `H` + c3[3][u2] : `V` + C2 + ` ` + h2[0] + `H` + (c3[2][u2] - y2) + ` ` + h2[1] + `V` + c3[3][d2], E2 = [`M` + c3[0][u2] + `,` + c3[0][d2] + T2 + `z`];
    return ho.call(r2, e3.id) && E2[s3(559)](o2 ? { x: c3[0][u2], y: c3[0][d2], width: c3[0][u2] - C2, height: c3[2][d2] - c3[0][d2] } : { x: c3[0][u2], y: C2, width: c3[2][u2] - c3[0][u2], height: c3[3][d2] - C2 }), E2;
  };
}, isStackingRadiusData: function(e2) {
  var t2 = M, n2 = this, r2 = n2.$el, i2 = n2[t2(636)], a2 = n2.data, o2 = n2.state, s2 = e2.id, c2 = e2.index, l2 = e2.value;
  if (o2.hiddenTargetIds.indexOf(s2) > -1) {
    var u2 = r2.bar[t2(1038)](function(e3) {
      return e3.id === s2 && e3.value === l2;
    });
    return !u2.empty() && /a\d+/i.test(u2[t2(919)](`d`));
  }
  var d2 = i2.data_groups.find(function(e3) {
    return e3.indexOf(s2) > -1;
  }), f2 = n2[t2(844)](n2.filterTargetsToShow(a2.targets[t2(1038)](n2.isBarType, n2))).filter(function(e3) {
    return d2.indexOf(e3.id) > -1;
  }).map(function(e3) {
    var n3 = t2;
    return e3.values[n3(1038)](function(e4) {
      return e4.index === c2 && (q(l2) && l2 > 0 ? e4.value > 0 : e4.value < 0);
    })[0];
  }).filter(Boolean).map(function(e3) {
    return e3.id;
  });
  return l2 !== 0 && f2[t2(509)](s2) === f2.length - 1;
}, generateGetBarPoints: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = t2 ? r2.axis[n2(724)] : r2.axis.x, o2 = r2.getIndicesMax(e2) + 1, s2 = r2.getBarW(`bar`, a2, o2), c2 = r2.getShapeX(s2, e2, !!t2), l2 = r2.getShapeY(!!t2), u2 = r2.getShapeOffset(r2[n2(819)], e2, !!t2), d2 = r2.getYScaleById.bind(r2);
  return function(e3, a3) {
    var o3 = n2, f2 = e3.id, p2 = d2.call(r2, f2, t2)(r2.getShapeYMin(f2)), m2 = u2(e3, a3) || p2, h2 = q(s2) ? s2 : s2[e3.id] || s2._$width, g2 = i2[`axis_` + r2[o3(501)][o3(649)](f2) + `_inverted`], _2 = e3.value, v2 = c2(e3), y2 = l2(e3);
    i2[o3(1088)] && !g2 && (_2 > 0 && y2 < p2 || _2 < 0 && p2 < y2) && (y2 = p2), r2.isBarRangeType(e3) || (y2 -= p2 - m2);
    var b2 = v2 + h2;
    return [[v2, m2], [v2, y2], [b2, y2], [b2, m2]];
  };
}, updateConnectLine: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = n2.map(function(e3, n3, r3) {
    var a3 = Q, o2 = i2.config.axis_rotated, s2 = /^start-(start|end)$/.test(t2), c2 = /^end-(start|end)$/.test(t2), l2 = [], u2 = o2 ? c2 ? e3.x - e3[a3(1183)] : e3.x : e3.x + e3.width, d2 = o2 || s2 ? e3.y + e3.height : e3.y;
    return n3 === 0 ? l2.push(u2 + `,` + d2) : (l2.push(o2 ? `L` + (e3.x - (/\w+-end$/.test(t2) ? e3.width : 0)) + `,` + e3.y : `L` + e3.x + `,` + (e3.y + (/\w+-start$/[a3(1021)](t2) ? e3[a3(1113)] : 0))), n3 < r3.length - 1 && l2.push(`M` + u2 + `,` + d2)), l2.join(` `);
  });
  e2[r2(919)](`d`, `M` + a2.join(``) + `z`);
} };
function _o(e2, t2, n2, r2) {
  var i2 = M;
  r2 === void 0 && (r2 = false);
  for (var a2 = e2 ? [e2, 0] : n2, o2 = function(e3) {
    n2.forEach(function(n3) {
      e3 + n3 <= t2 && a2.push(n3), e3 += n3;
    }), s2 = e3;
  }, s2, c2 = e2 || n2.reduce(function(e3, t3) {
    return e3 + t3;
  }); c2 <= t2; ) o2(c2), c2 = s2;
  return a2.length % 2 != 0 && a2.push(r2 ? n2[1] : 0), { dash: a2.join(` `), length: a2[i2(493)](function(e3, t3) {
    return e3 + t3;
  }, 0) };
}
function vo(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = [], o2 = `2 2`;
  if (J(t2)) for (var s2 = function(e3, t3) {
    var r3 = Q;
    return Un(e3) ? t3 : n2 ? Or[r3(872)](i2, e3) : e3;
  }, c2 = 0, l2 = void 0; l2 = t2[c2]; c2++) a2[c2] = { start: s2(l2[r2(210)], e2[0].x), end: s2(l2.end, e2[e2.length - 1].x), style: l2[r2(521)] || { dasharray: o2 } };
  return a2;
}
var yo = { initLine: function() {
  var e2 = this.$el;
  e2.line = e2.main.select(`.` + I.chart).append(`g`).attr(`class`, Xt.chartLines).call(this.setCssRule(false, `.` + Xt.chartLines, [`pointer-events:none`]));
}, updateTargetsForLine: function(e2) {
  var t2 = M, n2 = this, r2 = n2.$el, i2 = r2.area, a2 = r2[t2(760)], o2 = r2.main, s2 = n2.getChartClass(`Line`), c2 = n2.getClass(`lines`, true), l2 = n2.classFocus.bind(n2);
  a2 || n2.initLine();
  var u2 = e2.filter(function(e3) {
    return !(n2.isScatterType(e3) || n2.isBubbleType(e3));
  }), d2 = o2[t2(1057)](`.` + Xt.chartLines).selectAll(`.` + Xt.chartLine)[t2(444)](n2.filterNullish(u2)).attr(`class`, function(e3) {
    return s2(e3) + l2(e3);
  }), f2 = d2.enter()[t2(440)](`g`)[t2(919)](`class`, s2).style(t2(363), `0`).style(`pointer-events`, n2[t2(650)](`none`));
  if (f2.append(`g`)[t2(919)](`class`, c2), n2[t2(1249)](t2(198))) {
    var p2 = (!i2 && f2.empty() ? d2 : f2).filter(n2.isAreaType.bind(n2));
    n2.initArea(p2);
  }
  n2[t2(983)](u2, f2);
}, updateLine: function(e2, t2) {
  var n2 = M;
  t2 === void 0 && (t2 = false);
  var r2 = this, i2 = r2.format.extraLineClasses, a2 = r2.$el, o2 = r2.$T, s2 = t2 ? a2.subchart : a2, c2 = s2.main.selectAll(`.` + Xt[n2(660)]).selectAll(`.` + Xt.line).data(r2.lineData.bind(r2));
  o2(c2.exit(), e2).style(`opacity`, `0`).remove(), s2.line = c2.enter()[n2(440)](`path`)[n2(919)](`class`, function(e3) {
    return r2.getClass(`line`, true)(e3) + ` ` + (i2(e3) || ``);
  }).style(`stroke`, r2.color).merge(c2).style(n2(363), r2.initialOpacity.bind(r2)).attr(n2(310), null);
}, redrawLine: function(e2, t2, n2) {
  var r2 = M;
  n2 === void 0 && (n2 = false);
  var i2 = this, a2 = i2.$el, o2 = i2.$T, s2 = (n2 ? a2.subchart : a2).line;
  return [o2(s2, t2, cr())[r2(919)](`d`, e2)[r2(521)](`stroke`, this.color).style(r2(363), null)];
}, getCurve: function(e2) {
  var t2 = this;
  return t2.config.axis_rotated && t2.isStepType(e2) ? function(n2) {
    var r2 = t2.getInterpolate(e2)(n2);
    return r2.orgPoint = r2.point, r2.pointRotated = function(e3, t3) {
      this._point === 1 && (this._point = 2);
      var n3 = this._y * (1 - this._t) + t3 * this._t;
      this._context.lineTo(this._x, n3), this._context.lineTo(e3, n3), this._x = e3, this._y = t3;
    }, r2.point = function(e3, t3) {
      this._point === 0 ? this.orgPoint(e3, t3) : this.pointRotated(e3, t3);
    }, r2;
  } : t2.getInterpolate(e2);
}, generateDrawLine: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.scale, o2 = i2.line_connectNull, s2 = i2.axis_rotated, c2 = r2.generateGetLinePoints(e2, t2), l2 = r2.getYScaleById.bind(r2), u2 = function(e3) {
    return (t2 ? r2.subxx : r2.xx).call(r2, e3);
  }, d2 = function(e3, n3) {
    return r2[Q(1242)](e3.id) ? c2(e3, n3)[0][1] : l2(e3.id, t2)(r2.getBaseValue(e3));
  }, f2 = A();
  f2 = s2 ? f2.x(d2).y(u2) : f2.x(u2).y(d2), o2 || (f2 = f2[n2(986)](function(e3) {
    return r2.getBaseValue(e3) !== null;
  }));
  var p2 = t2 ? a2.subX : a2.x;
  return function(e3) {
    var c3 = n2, u3 = l2(e3.id, t2), d3 = o2 ? r2.filterRemoveNull(e3.values) : e3[c3(277)], m2 = 0, h2 = 0, g2;
    if (r2.isLineType(e3)) {
      var _2 = i2.data_regions[e3.id];
      _2 ? (r2.isAreaRangeType(e3) && (d3 = d3.map(function(e4) {
        var t3 = c3;
        return P(P({}, e4), { value: r2[t3(561)](e4, t3(276)) });
      })), g2 = r2.lineWithRegions(d3, a2.zoom || p2, u3, _2)) : (r2.isStepType(e3) && (d3 = r2[c3(726)](d3)), g2 = f2.curve(r2.getCurve(e3))(d3));
    } else d3[0] && (m2 = p2(d3[0].x), h2 = u3(d3[0].value)), g2 = s2 ? `M ` + h2 + ` ` + m2 : `M ` + m2 + ` ` + h2;
    return g2 || c3(489);
  };
}, lineWithRegions: function(e2, t2, n2, r2) {
  for (var i2 = M, a2 = this, o2 = a2[i2(636)].axis_rotated, s2 = a2.axis.isTimeSeries(), c2 = `2 2`, l2 = vo.bind(a2)(e2, r2, s2), u2 = a2.hasNullDataValue(e2), d2, f2, p2, m2, h2 = o2 ? function(e3) {
    return n2(e3[i2(461)]);
  } : function(e3) {
    return t2(e3.x);
  }, g2 = o2 ? function(e3) {
    return t2(e3.x);
  } : function(e3) {
    return n2(e3[i2(461)]);
  }, _2 = function(e3) {
    return `M` + e3[0][0] + `,` + e3[0][1] + `L` + e3[1][0] + `,` + e3[1][1];
  }, v2 = s2 ? function(e3, r3, a3, s3) {
    var c3 = i2, l3 = e3.x[c3(318)](), u3 = r3.x - e3.x, d3 = new Date(l3 + u3 * a3), m3 = new Date(l3 + u3 * (a3 + s3));
    return _2(o2 ? [[n2(f2(a3)), t2(d3)], [n2(f2(a3 + p2)), t2(m3)]] : [[t2(d3), n2(f2(a3))], [t2(m3), n2(f2(a3 + p2))]]);
  } : function(e3, r3, i3, a3) {
    var s3 = t2(r3.x, !o2), c3 = n2(r3.value, o2), l3 = i3 + a3, u3 = t2(d2(i3), !o2), p3 = n2(f2(i3), o2), m3 = t2(d2(l3), !o2), h3 = n2(f2(l3), o2);
    m3 > s3 && (m3 = s3), e3.value > r3.value && (o2 ? h3 < c3 : h3 > c3) && (h3 = c3);
    var g3 = [[u3, p3], [m3, h3]];
    return o2 && g3.forEach(function(e4) {
      return e4.reverse();
    }), _2(g3);
  }, y2 = { x: a2.axis.getAxisType(`x`), y: a2.axis[i2(738)](`y`) }, b2 = ``, x2 = a2.$el.line.filter(function(t3) {
    return t3.id === e2[0].id;
  }), S2 = x2.clone().style(`display`, `none`), C2 = function(e3, t3) {
    return e3[i2(919)](`d`, t3).node().getTotalLength();
  }, w2 = { dash: [], lastLength: 0 }, T2 = false, E2 = 0, D2 = void 0; D2 = e2[E2]; E2++) {
    var O2 = e2[E2 - 1], k2 = O2 && W(O2[i2(461)]), A2 = a2.isWithinRegions(D2.x, l2);
    if (W(D2.value)) {
      if (Un(l2) || !A2 || !k2) b2 += (E2 && k2 ? `L` : `M`) + h2(D2) + `,` + g2(D2);
      else if (k2) if (A2 = ((A2 == null ? void 0 : A2.dasharray) || c2).split(` `).map(Number), d2 = ki(y2.x, O2.x, D2.x), f2 = ki(y2.y, O2.value, D2[i2(461)]), u2) {
        var ee2 = t2(D2.x) - t2(O2.x), te2 = n2(D2.value) - n2(O2[i2(461)]), ne2 = Math.sqrt(ee2 ** 2 + te2 ** 2);
        p2 = A2[0] / ne2, m2 = p2 * A2[1];
        for (var j2 = p2; j2 <= 1; j2 += m2) b2 += v2(O2, D2, j2, p2), j2 + m2 >= 1 && (b2 += v2(O2, D2, 1, 0));
      } else {
        var re2 = [];
        if (T2 = D2.x === e2[e2.length - 1].x, s2) {
          var ie2 = +O2.x, ae2 = new Date(ie2), oe2 = new Date(ie2 + (+D2.x - ie2));
          re2 = [[t2(ae2), n2(f2(0))], [t2(oe2), n2(f2(1))]];
        } else re2 = [[t2(d2(0)), n2(f2(0))], [t2(d2(1)), n2(f2(1))]];
        o2 && re2.forEach(function(e3) {
          return e3.reverse();
        });
        var se2 = C2(S2, b2), ce2 = C2(S2, b2 += `L` + re2[1].join(`,`)), le2 = _o(se2 - w2.lastLength, ce2 - w2[i2(381)], A2, T2);
        w2[i2(381)] += le2.length, w2.dash.push(le2.dash);
      }
    }
  }
  return w2.dash.length && (!T2 && w2.dash.push(C2(S2, b2)), S2.remove(), x2.attr(`stroke-dasharray`, w2.dash.join(` `))), b2;
}, isWithinRegions: function(e2, t2) {
  for (var n2 = 0, r2 = void 0; r2 = t2[n2]; n2++) if (r2.start < e2 && e2 <= r2.end) return r2.style;
  return false;
}, isWithinStep: function(e2, t2) {
  return Math.abs(t2 - ir(this.state.event, e2)[1]) < 30;
}, shouldDrawPointsForLine: function(e2) {
  var t2 = this.config.line_point;
  return t2 === true || Y(t2) && t2.indexOf(e2.id) !== -1;
} }, bo = function() {
  return cr();
}, xo = { initialOpacityForCircle: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state.withoutFadeIn, a2 = r2[t2(333)];
  return Un(a2) && (a2 = this.getBaseValue(e2) !== null && i2[e2.id] ? this.opacityForCircle(e2) : `0`), a2;
}, opacityForCircle: function(e2) {
  var t2 = M, n2, r2 = this.config, i2 = r2.point_opacity;
  return Un(i2) && (i2 = r2.point_show && !((n2 = this[t2(629)]) != null && n2.call(this)) ? null : `0`, i2 = W(this.getBaseValue(e2)) ? this.isBubbleType(e2) || this.isScatterType(e2) ? `0.5` : i2 : `0`), i2;
}, initCircle: function() {
  var e2 = M, t2 = this, n2 = t2.$el.main;
  !t2.point && (t2.point = t2.generatePoint()), (t2[e2(1013)](`bubble`) || t2.hasType(e2(579))) && n2.select(`.` + I[e2(186)] + ` > .` + Kt.chartCircles).empty() && n2.select(`.` + I.chart)[e2(440)](`g`).attr(e2(1093), Kt.chartCircles);
}, updateTargetForCircle: function(e2, t2) {
  var n2 = M, r2 = this, i2 = this, a2 = i2.config, o2 = i2.data, s2 = i2.$el, c2 = a2.interaction_enabled && a2.data_selection_enabled, l2 = c2 && a2.data_selection_isselectable, u2 = i2.getClass(n2(895), true);
  if (a2.point_show) {
    i2.initCircle();
    var d2 = e2, f2 = t2;
    if (!d2) {
      d2 = i2.filterNullish(o2.targets).filter(function(e3) {
        return r2.isScatterType(e3) || r2.isBubbleType(e3);
      });
      var p2 = s2.main.select(`.` + Kt.chartCircles)[n2(521)](`pointer-events`, `none`).selectAll(`.` + Kt.circles).data(d2);
      p2.exit().remove(), f2 = p2.enter();
    }
    c2 && f2.append(`g`).attr(`class`, function(e3) {
      return i2.generateClass(en.selectedCircles, e3.id);
    }), f2.append(`g`)[n2(919)](n2(1093), u2).call(function(e3) {
      i2.setCssRule(true, `.` + Kt.circles, [`cursor:pointer`], l2)(e3), i2.setCssRule(true, ` .` + Kt.circle, [`fill`, `stroke`], i2.color)(e3);
    }).style(n2(363), function() {
      var e3 = n2;
      return j(this.parentNode)[e3(919)](`class`).indexOf(Kt.chartCircles) > -1 ? `0` : null;
    }), c2 && d2[n2(743)](function(e3) {
      var t3 = n2;
      s2[t3(938)].selectAll(`.` + en.selectedCircles + i2.getTargetSelectorSuffix(e3.id)).selectAll(`` + en.selectedCircle).each(function(n3) {
        var r3 = t3;
        n3[r3(461)] = e3.values[n3.index].value;
      });
    });
  }
}, updateCircle: function(e2) {
  var t2 = M;
  e2 === void 0 && (e2 = false);
  var n2 = this, r2 = n2[t2(636)], i2 = n2.state, a2 = n2.$el, o2 = n2.isPointFocusOnly(), s2 = e2 ? a2[t2(885)] : a2;
  if (r2.point_show && !i2[t2(1092)]) {
    r2.point_radialGradient && n2.updateLinearGradient();
    var c2 = s2.main.selectAll(`.` + Kt.circles).selectAll(`.` + Kt.circle).data(function(e3) {
      var r3 = t2, i3 = n2.isLineType(e3) && n2.shouldDrawPointsForLine(e3) || n2[r3(910)](e3) || n2.isRadarType(e3) || n2.isScatterType(e3) ? o2 ? [e3.values[0]] : e3.values : [];
      return n2.filterNullish(i3);
    });
    c2.exit().remove(), c2.enter().filter(Boolean).append(n2.point(`create`, this, n2.pointR.bind(n2), n2[t2(503)].bind(n2))), s2.circle = s2.main.selectAll(`.` + Kt[t2(895)] + ` .` + Kt.circle)[t2(521)](`stroke`, n2.getStylePropValue(n2.color))[t2(521)](`opacity`, n2[t2(849)].bind(n2));
  }
}, updateCircleColor: function(e2) {
  var t2 = M, n2 = this, r2 = n2.getStylePropValue(n2[t2(309)]);
  return n2.config.point_radialGradient ? n2.getGradienColortUrl(e2.id) : r2 ? r2(e2) : null;
}, redrawCircle: function(e2, t2, n2, r2, i2) {
  var a2 = M;
  i2 === void 0 && (i2 = false);
  var o2 = this, s2 = o2.state[a2(332)], c2 = o2.$el, l2 = o2.$T, u2 = i2 ? c2.subchart : c2, d2 = u2.main.selectAll(`.` + en.selectedCircle);
  if (!o2.config.point_show) return [];
  var f2 = o2.point(a2(1131), o2, e2, t2, o2.updateCircleColor[a2(1194)](o2), n2, r2, d2), p2 = o2.isCirclePoint() ? `c` : ``, m2 = cr(), h2 = o2.opacityForCircle[a2(1194)](o2), g2 = [];
  return u2[a2(331)].each(function(e3) {
    var t3 = a2, r3 = f2[t3(1194)](this)(e3);
    r3 = l2(r3, n2 || !s2, m2)[t3(521)](`opacity`, h2), g2.push(r3);
  }), [g2, l2(d2, n2).attr(p2 + `x`, e2).attr(p2 + `y`, t2)];
}, showCircleFocus: function(e2) {
  var t2 = M, n2 = this, r2 = n2.state, i2 = r2.hasRadar, a2 = r2[t2(863)], o2 = r2.toggling, s2 = r2[t2(491)], c2 = n2[t2(476)][t2(331)];
  if (s2 === false && c2 && n2.isPointFocusOnly()) {
    var l2 = (i2 ? n2[t2(1063)] : n2.circleX).bind(n2), u2 = (i2 ? n2[t2(923)] : n2[t2(172)]).bind(n2), d2 = o2 || Un(e2), f2 = n2.point(`update`, n2, l2, u2, n2.getStylePropValue(n2[t2(309)]), a2 ? false : d2);
    e2 && (c2 = c2.filter(function(t3) {
      var _a2;
      var n3 = (_a2 = e2.filter) == null ? void 0 : _a2.call(e2, function(e3) {
        return e3.id === t3.id;
      });
      return n3.length ? j(this).datum(n3[0]) : false;
    })), c2.attr(`class`, this.updatePointClass.bind(this)).style(`opacity`, null).each(function(e3) {
      var r3 = t2, i3 = e3.id, a3 = e3[r3(1244)], o3 = e3.value, s3 = `hidden`;
      W(o3) && (f2[r3(1194)](this)(e3), n2[r3(417)](a3, i3), s3 = ``), this.style.visibility = s3;
    });
  }
}, hideCircleFocus: function() {
  var e2 = M, t2 = this, n2 = t2[e2(476)][e2(331)];
  t2.isPointFocusOnly() && n2 && (t2[e2(1122)](), n2.style(e2(1253), `hidden`));
}, circleX: function(e2) {
  return this.xx(e2);
}, updateCircleY: function(e2) {
  var t2 = M;
  e2 === void 0 && (e2 = false);
  var n2 = this, r2 = n2.generateGetLinePoints(n2[t2(1149)](n2.isLineType), e2);
  return function(t3, i2) {
    var a2 = t3.id;
    return n2.isGrouped(a2) ? r2(t3, i2)[0][1] : n2.getYScaleById(a2, e2)(n2.getBaseValue(t3));
  };
}, expandCircles: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2.pointExpandedR[r2(1194)](i2);
  n2 && i2.unexpandCircles();
  var o2 = i2.getShapeByIndex(`circle`, e2, t2).classed(I.EXPANDED, true), s2 = a2(o2) / i2.config.point_r, c2 = 1 - s2;
  i2.isCirclePoint() ? o2.attr(`r`, a2) : o2.each(function() {
    var e3 = r2, t3 = j(this);
    if (this[e3(423)] === `circle`) t3.attr(`r`, a2);
    else {
      var n3 = sr(this), i3 = n3.width, o3 = n3.height, l2 = c2 * (+t3.attr(`x`) + i3 / 2), u2 = c2 * (+t3.attr(`y`) + o3 / 2);
      t3.attr(`transform`, `translate(` + l2 + ` ` + u2 + `) scale(` + s2 + `)`);
    }
  });
}, unexpandCircles: function(e2) {
  var t2 = M, n2 = this, r2 = n2.pointR.bind(n2), i2 = n2.getShapeByIndex(t2(331), e2).filter(function() {
    return j(this).classed(I.EXPANDED);
  }).classed(I.EXPANDED, false);
  if (i2.attr(`r`, r2), !n2.isCirclePoint()) {
    var a2 = r2(i2) / n2[t2(636)].point_r;
    i2.attr(`transform`, a2 === 1 ? null : `scale(` + a2 + `)`);
  }
}, pointR: function(e2) {
  var t2 = this, n2 = t2.config.point_r, r2 = n2;
  return t2.isBubbleType(e2) ? r2 = t2.getBubbleR(e2) : G(n2) && (r2 = n2.bind(t2.api)(e2)), e2.r = r2, r2;
}, pointExpandedR: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2[t2(910)](e2) ? 1.15 : 1.75;
  return r2[t2(975)] ? r2.point_focus_expand_r || n2.pointR(e2) * i2 : n2[t2(572)](e2);
}, pointSelectR: function(e2) {
  var t2 = this, n2 = t2.config.point_select_r;
  return G(n2) ? n2(e2) : n2 || t2.pointR(e2) * 4;
}, isPointFocusOnly: function() {
  var e2 = M, t2 = this;
  return t2.config.point_focus_only && !t2.hasType(`bubble`) && !t2[e2(1013)](`scatter`) && !t2.hasArcType(null, [`radar`]);
}, isWithinCircle: function(e2, t2) {
  var n2 = M, r2 = this[n2(886)], i2 = ir(r2.event, e2), a2 = j(e2), o2 = this.isCirclePoint(e2) ? `c` : ``, s2 = this.getPointSensitivity(a2 == null ? void 0 : a2.datum()), c2 = +a2.attr(o2 + `x`), l2 = +a2.attr(o2 + `y`);
  if (!(c2 || l2) && e2.nodeType === 1) {
    var u2 = or(e2), d2 = u2.x, f2 = u2.y;
    c2 = d2, l2 = f2;
  }
  return Math[n2(969)]((c2 - i2[0]) ** 2 + (l2 - i2[1]) ** 2) < (t2 || s2);
}, getPointSensitivity: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config.point_sensitivity;
  if (e2) G(r2) ? r2 = r2.call(n2.api, e2) : r2 === t2(1140) && (r2 = e2.r);
  else return r2;
  return r2;
}, updatePointClass: function(e2) {
  var t2 = this, n2 = t2.$el.circle, r2 = false;
  return (X(e2) || n2) && (r2 = e2 === true ? n2.each(function(e3) {
    var n3 = t2.getClass(`circle`, true)(e3);
    this.getAttribute(`class`).indexOf(I.EXPANDED) > -1 && (n3 += ` ` + I.EXPANDED), this.setAttribute(`class`, n3);
  }) : t2.getClass(`circle`, true)(e2)), r2;
}, generateGetLinePoints: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config, a2 = r2.getShapeX(0, e2, t2), o2 = r2.getShapeY(t2), s2 = r2[n2(290)](r2[n2(322)], e2, t2), c2 = r2.getYScaleById.bind(r2);
  return function(e3, n3) {
    var l2 = c2.call(r2, e3.id, t2)(r2.getShapeYMin(e3.id)), u2 = s2(e3, n3) || l2, d2 = a2(e3), f2 = o2(e3);
    i2.axis_rotated && (e3.value > 0 && f2 < l2 || e3.value < 0 && l2 < f2) && (f2 = l2);
    var p2 = [d2, f2 - (l2 - u2)];
    return [p2, p2, p2, p2];
  };
}, custom: { create: function(e2, t2, n2) {
  var r2 = M;
  return e2[r2(440)](r2(623))[r2(919)](`xlink:href`, `#` + t2).attr(`class`, this.updatePointClass.bind(this)).style(r2(963), n2).node();
}, update: function(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = this, c2 = sr(e2.node()), l2 = c2.width, u2 = c2.height, d2 = function(e3) {
    return W(e3.value) ? t2(e3) - l2 / 2 : 0;
  }, f2 = function(e3) {
    return W(e3.value) ? n2(e3) - u2 / 2 : 0;
  }, p2 = e2;
  return i2 && (a2 && p2.attr(`x`, d2), p2 = s2.$T(p2, i2, bo()), o2 && s2.$T(o2, i2, bo())), p2.attr(`x`, d2).attr(`y`, f2).style(`fill`, r2);
} }, circle: { create: function(e2, t2, n2) {
  var r2 = M;
  return e2.append(`circle`).attr(`class`, this.updatePointClass[r2(1194)](this))[r2(919)](`r`, t2)[r2(521)](`fill`, n2).node();
}, update: function(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = M, c2 = this, l2 = e2;
  return c2[s2(1013)](`bubble`) && l2.attr(`r`, c2.pointR.bind(c2)), i2 && (a2 && l2.attr(`cx`, t2), l2.attr(`cx`) && (l2 = c2.$T(l2, i2, bo())), o2 && c2.$T(l2, i2, bo())), l2.attr(`cx`, t2).attr(`cy`, n2).style(s2(963), r2);
} }, rectangle: { create: function(e2, t2, n2) {
  var r2 = M, i2 = function(e3) {
    return t2(e3) * 2;
  };
  return e2[r2(440)](r2(1010)).attr(r2(1093), this.updatePointClass[r2(1194)](this)).attr(`width`, i2).attr(`height`, i2)[r2(521)](`fill`, n2).node();
}, update: function(e2, t2, n2, r2, i2, a2, o2) {
  var s2 = this, c2 = s2.config.point_r, l2 = function(e3) {
    return t2(e3) - c2;
  }, u2 = function(e3) {
    return n2(e3) - c2;
  }, d2 = e2;
  return i2 && (a2 && d2.attr(`x`, l2), d2 = s2.$T(d2, i2, bo()), o2 && s2.$T(o2, i2, bo())), d2.attr(`x`, l2).attr(`y`, u2).style(`fill`, r2);
} } };
function So(e2) {
  return Jn(e2) && G(e2.create) && G(e2.update);
}
function Co(e2, t2) {
  var n2 = M, r2, i2 = this, a2 = function(e3, t3) {
    for (var n3 = Q, r3 = e3.attributes, i3 = 0, a3; a3 = r3[i3]; i3++) a3 = a3[n3(709)], t3.setAttribute(a3, e3[n3(955)](a3));
  }, o2 = new DOMParser().parseFromString(Bn(e2), `image/svg+xml`).documentElement, s2 = gn.createElementNS(w[n2(1220)], o2.nodeName[n2(856)]());
  if (s2.id = t2, s2.style.fill = n2(264), s2[n2(521)][n2(603)] = `inherit`, a2(o2, s2), (r2 = o2.childNodes) != null && r2.length) {
    var c2 = j(s2);
    `innerHTML` in s2 ? c2.html(Bn(o2.innerHTML)) : hr(o2[n2(445)]).forEach(function(e3) {
      a2(e3, c2.append(e3.tagName).node());
    });
  }
  i2.$el.defs.node().appendChild(s2);
}
var wo = { hasValidPointType: function(e2) {
  var t2 = M;
  return /^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(e2 || this.config[t2(188)]);
}, hasLegendDefsPoint: function() {
  var _a2;
  var e2 = this.config;
  return e2.legend_show && ((_a2 = e2.point_pattern) == null ? void 0 : _a2.length) && e2.legend_usePoint;
}, getDefsPointId: function(e2) {
  return this.state.datetimeId + `-point` + e2;
}, getValidPointPattern: function() {
  var e2 = M, t2 = this.config, n2 = /^(circle|rect(angle)?)$/i.test(t2[e2(188)]) ? t2.point_type : e2(331);
  return Zn(t2.point_pattern) ? t2.point_pattern : [n2];
}, generatePoint: function() {
  var e2 = this, t2 = e2.$el, n2 = e2.config, r2 = [], i2 = e2.getValidPointPattern();
  return function(a2, o2) {
    var s2 = [...arguments].slice(2);
    return function(c2) {
      var _a2, _b, _c, _d;
      var l2 = Q, u2 = e2.getTargetSelectorSuffix(c2.id || ((_a2 = c2.data) == null ? void 0 : _a2.id) || c2), d2 = j(this);
      r2.indexOf(u2) < 0 && r2[l2(559)](u2);
      var f2 = i2[r2.indexOf(u2) % i2[l2(626)]];
      if (e2.hasValidPointType(f2)) f2 = e2[f2];
      else if (!So(f2 || n2.point_type)) {
        var p2 = e2[l2(1124)](u2);
        if (t2[l2(1008)].select(`#` + p2)[l2(246)]() < 1 && Co[l2(872)](e2, f2, p2), a2 === `create`) return (_b = e2.custom) == null ? void 0 : _b.create.bind(o2).apply(void 0, F([d2, p2], s2, false));
        if (a2 === `update`) return (_c = e2[l2(860)]) == null ? void 0 : _c.update.bind(o2).apply(void 0, F([d2], s2, false));
      }
      return (_d = f2[a2]) == null ? void 0 : _d.bind(o2).apply(void 0, F([d2], s2, false));
    };
  };
} };
Vr.radarPoints, Vr.radarTextWidth;
var To = { point_show: true, point_r: 2.5, point_radialGradient: false, point_sensitivity: 10, point_focus_expand_enabled: true, point_focus_expand_r: void 0, point_focus_only: false, point_opacity: void 0, point_pattern: [], point_select_r: void 0, point_type: `circle` }, Eo = { area_above: false, area_below: false, area_front: true, area_linearGradient: false, area_zerobased: true }, Do = { bar_connectLine: false, bar_front: false, bar_indices_removeNull: false, bar_label_threshold: 0, bar_linearGradient: false, bar_overlap: false, bar_padding: 0, bar_radius: void 0, bar_radius_ratio: void 0, bar_sensitivity: 2, bar_width: void 0, bar_width_ratio: 0.6, bar_width_max: void 0, bar_zerobased: true }, Oo = { line_connectNull: false, line_step_type: M(1017), line_step_tooltipMatch: false, line_zerobased: false, line_classes: void 0, line_point: true }, ko = { scatter_zerobased: false }, Ao = { arc_cornerRadius: 0, arc_cornerRadius_ratio: 0, arc_needle_show: false, arc_needle_color: void 0, arc_needle_value: void 0, arc_needle_path: void 0, arc_needle_length: 100, arc_needle_top_rx: 0, arc_needle_top_ry: 0, arc_needle_top_width: 0, arc_needle_bottom_rx: 1, arc_needle_bottom_ry: 1, arc_needle_bottom_width: 15, arc_needle_bottom_len: 0, arc_rangeText_values: void 0, arc_rangeText_unit: `absolute`, arc_rangeText_fixed: false, arc_rangeText_format: void 0, arc_rangeText_position: void 0 };
-1 * Math.PI / 2;
var jo = { pie_label_show: true, pie_label_format: void 0, pie_label_ratio: void 0, pie_label_threshold: 0.05, pie_label_line: false, pie_label_image: void 0, pie_expand: {}, pie_expand_rate: 0.98, pie_expand_duration: 50, pie_innerRadius: 0, pie_outerRadius: void 0, pie_padAngle: 0, pie_padding: 0, pie_startingAngle: 0 };
function Mo(e2, t2) {
  var n2 = M;
  fr(Xi[n2(977)], Object.values(Xa).concat(e2)), fr(ma.prototype, Ya), Rr[n2(359)](Object.values(Za).concat(t2 || []));
}
function No(e2, t2) {
  var n2 = M;
  Mo([wo, xo, yo].concat(e2 || [])), Rr[n2(359)]([To, Oo].concat(t2 || []));
}
function Po(e2, t2) {
  fr(Xi.prototype, [po, wo].concat(e2 || [])), Rr.setOptions([To].concat(t2 || []));
}
var Fo = function() {
  return No(mo, [Eo]), (Fo = function() {
    return $.AREA;
  })();
}, Io = function() {
  return No(), (Io = function() {
    return $.LINE;
  })();
}, Lo = function() {
  return Po(void 0, [Ao, jo]), (Lo = function() {
    return $.PIE;
  })();
}, Ro = function() {
  return Mo([go, wo], [Do, To]), (Ro = function() {
    return $.BAR;
  })();
}, zo = function() {
  return Mo([wo, xo], [To, ko]), (zo = function() {
    return $.SCATTER;
  })();
};
fr(function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2[t2(501)], i2 = n2[t2(263)], a2 = n2.config, o2 = n2.scale, s2 = o2.x, c2 = o2.subX, l2 = n2[t2(886)], u2;
  return a2.subchart_show && (u2 = e2, Array.isArray(u2) ? (r2.isTimeSeries() && (u2 = u2.map(function(e3) {
    return Or.bind(n2)(e3);
  })), n2.withinRange(u2, n2.getZoomDomain(t2(724), true), n2.getZoomDomain(`subX`)) && (l2[t2(216)] = u2, i2.move(i2[t2(624)](), u2.map(c2)))) : u2 = l2[t2(216)] ?? s2.orgDomain()), u2;
}, { show: function() {
  var _a2;
  var e2 = M, t2, n2 = this.internal, r2 = n2.$el[e2(885)], i2 = n2.config, a2 = i2.subchart_show;
  if (!a2) {
    n2.unbindZoomEvent(), i2.subchart_show = !a2, !r2.main && n2.initSubchart();
    var o2 = r2[e2(938)].selectAll(`.` + I.target);
    n2.data.targets.length !== o2.size() && (n2[e2(1138)](), n2.updateTargetsForSubchart(n2.data.targets), o2 = (_a2 = r2.main) == null ? void 0 : _a2.selectAll(`.` + I.target)), o2 == null ? void 0 : o2[e2(521)](`opacity`, null), (t2 = r2.main) == null || t2.style(e2(928), null), this.resize();
  }
}, hide: function() {
  var e2 = M, t2 = this.internal, n2 = t2.$el.subchart.main, r2 = t2.config;
  r2.subchart_show && (n2 == null ? void 0 : n2[e2(521)](e2(928))) !== `none` && (r2.subchart_show = false, n2.style(`display`, `none`), this.resize());
}, toggle: function() {
  var e2 = this.internal.config;
  this.subchart[e2.subchart_show ? `hide` : `show`]();
}, reset: function() {
  var e2 = this.internal.brush;
  e2.clear(e2.getSelection());
} }), fr(function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.axis, i2 = n2[t2(636)], a2 = n2.org, o2 = n2.scale, s2 = n2.state, c2 = r2.isCategorized(), l2;
  if (i2.zoom_enabled) if (l2 = e2, Array.isArray(l2)) {
    if (r2.isTimeSeries() && (l2 = l2.map(function(e3) {
      return Or.bind(n2)(e3);
    })), n2.withinRange(l2, n2[t2(913)](t2(234), true), n2.getZoomDomain(t2(234)))) {
      if (s2.domain = l2, l2 = n2[t2(850)](l2), n2.api.tooltip.hide(), i2.subchart_show) {
        var u2 = o2[t2(234)] || o2.x;
        n2.brush[t2(624)]()[t2(872)](n2.brush.move, l2[t2(279)](u2));
      } else {
        var u2 = c2 ? o2.x.orgScale() : a2.xScale || o2.x;
        n2.updateCurrentZoomTransform(u2, l2);
      }
      n2.setZoomResetButton();
    }
  } else l2 = n2.zoom[t2(664)]();
  return s2.domain ?? l2;
}, { enable: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2.config;
  /^(drag|wheel)$/[t2(1021)](e2) && (r2.zoom_type = e2), r2.zoom_enabled = !!e2, n2.zoom ? e2 === false && n2.bindZoomEvent(false) : (n2.initZoom(), n2[t2(1243)]()), n2[t2(370)]();
}, max: function(e2) {
  var t2 = M, n2 = this.internal, r2 = n2[t2(636)], i2 = n2.org.xDomain;
  return (e2 === 0 || e2) && (r2.zoom_x_max = Tr(t2(769), [i2[1], e2])), r2.zoom_x_max;
}, min: function(e2) {
  var t2 = this.internal, n2 = t2.config, r2 = t2.org.xDomain;
  return (e2 === 0 || e2) && (n2.zoom_x_min = Tr(`min`, [r2[0], e2])), n2.zoom_x_min;
}, range: function(e2) {
  var t2 = M, n2 = this.zoom;
  if (X(e2)) {
    var r2 = e2.min, i2 = e2.max;
    J(r2) && n2.min(r2), J(i2) && n2.max(i2);
  }
  return { min: n2[t2(568)](), max: n2.max() };
} }), P(P({}, { drag: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2[t2(886)], a2 = n2.$el.main, o2 = r2.data_selection_grouped, s2 = r2.interaction_enabled && r2.data_selection_isselectable;
  if (!(n2.hasArcType() || !r2.data_selection_enabled || r2.zoom_enabled && !n2.zoom[t2(828)] || !r2.data_selection_multiple)) {
    var c2 = i2[t2(1202)] || [0, 0], l2 = c2[0], u2 = c2[1], d2 = e2[0], f2 = e2[1], p2 = Math[t2(568)](l2, d2), m2 = Math.max(l2, d2), h2 = o2 ? i2[t2(1185)].top : Math.min(u2, f2), g2 = o2 ? i2.height : Math.max(u2, f2);
    Fr(n2[t2(886)], function() {
      var e3 = t2;
      !n2 || !n2.$el || !n2.$el.main || (a2.select(`.` + Jt.dragarea)[e3(919)](`x`, p2).attr(`y`, h2).attr(`width`, m2 - p2).attr(`height`, g2 - h2), a2.selectAll(`.` + tn.shapes).selectAll(`.` + tn.shape).filter(function(e4) {
        return s2 == null ? void 0 : s2.bind(n2.api)(e4);
      }).each(function(t3, r3) {
        var i3 = e3, a3 = j(this), o3 = a3[i3(901)](en.SELECTED), s3 = a3.classed(Jt[i3(1060)]), c3 = false, l3;
        if (a3.classed(Kt[i3(331)])) {
          var u3 = a3.attr(`cx`) * 1, d3 = a3.attr(`cy`) * 1;
          l3 = n2[i3(435)], c3 = p2 < u3 && u3 < m2 && h2 < d3 && d3 < g2;
        } else if (a3.classed(Wt[i3(951)])) {
          var f3 = rr(this), u3 = f3.x, d3 = f3.y, _2 = f3.width, v2 = f3.height;
          l3 = n2.togglePath, c3 = !(m2 < u3 || u3 + _2 < p2) && !(g2 < d3 || d3 + v2 < h2);
        } else return;
        c3 ^ s3 && (a3[i3(901)](Jt[i3(1060)], !s3), a3.classed(en.SELECTED, !o3), l3.call(n2, !o3, a3, t3, r3));
      }));
    });
  }
}, dragstart: function(e2) {
  var t2 = M, n2 = this, r2 = n2.config, i2 = n2.state, a2 = n2.$el[t2(938)];
  n2[t2(1180)]() || !r2.data_selection_enabled || (i2.dragStart = e2, a2.select(`.` + I[t2(186)]).append(`rect`).attr(`class`, Jt.dragarea).style(`opacity`, `0.1`), n2[t2(790)](true));
}, dragend: function() {
  var e2 = M, t2 = this, n2 = t2.config, r2 = t2.$el.main, i2 = t2.$T;
  t2.hasArcType() || !n2.data_selection_enabled || (i2(r2.select(`.` + Jt.dragarea))[e2(521)](e2(363), `0`)[e2(442)](), r2.selectAll(`.` + tn.shape).classed(Jt.INCLUDED, false), t2.setDragStatus(false));
} }), { selectPoint: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2[r2(636)], o2 = i2[r2(476)].main, s2 = i2.$T, c2 = a2.axis_rotated, l2 = (c2 ? i2.circleY : i2.circleX)[r2(1194)](i2), u2 = (c2 ? i2.circleX : i2.circleY)[r2(1194)](i2), d2 = i2.pointSelectR.bind(i2);
  Z(a2.data_onselected, i2.api, t2, e2.node()), s2(o2[r2(1057)](`.` + en.selectedCircles + i2.getTargetSelectorSuffix(t2.id)).selectAll(`.` + en.selectedCircle + `-` + n2).data([t2]).enter().append(`circle`).attr(`class`, function() {
    return i2.generateClass(en.selectedCircle, n2);
  })[r2(919)](`cx`, l2).attr(`cy`, u2).attr(`stroke`, i2.color).attr(`r`, function(e3) {
    return i2[r2(613)](e3) * 1.4;
  })).attr(`r`, d2);
}, unselectPoint: function(e2, t2, n2) {
  var r2 = M, i2 = this, a2 = i2.config, o2 = i2.$el.main, s2 = i2.$T;
  Z(a2.data_onunselected, i2.api, t2, e2 == null ? void 0 : e2.node()), s2(o2.select(`.` + en[r2(907)] + i2.getTargetSelectorSuffix(t2.id)).selectAll(`.` + en[r2(1229)] + `-` + n2)).attr(`r`, 0).remove();
}, togglePoint: function(e2, t2, n2, r2) {
  var i2 = (e2 ? `` : `un`) + `selectPoint`;
  this[i2](t2, n2, r2);
}, selectPath: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2.config;
  Z(i2.data_onselected, r2.api, t2, e2.node()), i2.interaction_brighten && e2[n2(521)](`filter`, `brightness(1.25)`);
}, unselectPath: function(e2, t2) {
  var n2 = M, r2 = this, i2 = r2[n2(636)];
  Z(i2.data_onunselected, r2.api, t2, e2.node()), i2.interaction_brighten && e2.style(`filter`, null);
}, togglePath: function(e2, t2, n2, r2) {
  this[(e2 ? `` : `un`) + `selectPath`](t2, n2, r2);
}, getToggle: function(e2, t2) {
  var n2 = this;
  return e2.nodeName === `path` ? n2.togglePath : n2.isStepType(t2) ? function() {
  } : n2.togglePoint;
}, toggleShape: function(e2, t2, n2) {
  var _a2;
  var r2 = M, i2 = this, a2 = i2.config, o2 = i2.$el.main;
  if (a2.data_selection_enabled && a2.data_selection_isselectable.bind(i2.api)(t2)) {
    var s2 = j(e2), c2 = s2.classed(en.SELECTED), l2 = i2[r2(486)](e2, t2).bind(i2), u2;
    if (!a2[r2(1195)]) {
      var d2 = (_a2 = i2.isPointFocusOnly) == null ? void 0 : _a2[r2(872)](i2), f2 = `.` + (d2 ? en.selectedCircles : tn.shapes);
      a2.data_selection_grouped && (f2 += i2.getTargetSelectorSuffix(t2.id)), o2[r2(236)](f2).selectAll(d2 ? `.` + en.selectedCircle : `.` + tn.shape + `.` + en.SELECTED)[r2(901)](en.SELECTED, false)[r2(904)](function(e3) {
        var t3 = j(this);
        u2 = t3, l2(false, t3, e3, e3.index);
      });
    }
    (!u2 || u2.node() !== s2.node()) && (s2.classed(en.SELECTED, !c2), l2(!c2, s2, t2, n2));
  }
} });
var Bo = /* @__PURE__ */ Object.create(null), Vo = { version: `3.18.0`, generate: function(e2) {
  var t2 = M, n2 = new ma(Cr(Object[t2(481)](null), Bo, e2));
  return n2.internal[t2(473)] = this.instance, this.instance.push(n2), n2;
}, defaults: function(e2) {
  return X(e2) && (Bo = e2), Bo;
}, instance: [], plugin: {} };
c();
var Ho = (e2) => {
  var t2 = M;
  Uo(e2[t2(1076)]), Ko(Bt(`.block`)), Ko(Bt(t2(625)));
};
function Uo(e2) {
  e2.forEach((e3) => Go(e3 == null ? void 0 : e3.data));
}
var Wo = (e2, t2 = (e3) => {
}) => ({ axis: ((e3) => (t2(e3), e3))({ x: { tick: { format(t3) {
  return e2[0].xlabels[t3] || t3;
} } } }) });
function Go(e2) {
  var t2 = M;
  if (!e2) return;
  let { chartID: n2, chartType: r2, chartData: i2 } = e2, a2 = { bindto: `#` + n2 };
  switch (r2) {
    case `lineChart`:
      Object[t2(1117)](a2, s(s({ data: { columns: i2.map((e3) => [e3.key, ...e3.values.map(({ y: e4 }) => e4)]), type: Io() } }, Wo(i2)), {}, { interaction: { enabled: true } }));
      break;
    case t2(584):
      Object.assign(a2, s({ data: { columns: i2.map((e3) => [e3[t2(926)], ...e3.values.map(({ y: e4 }) => e4)]), type: Ro() } }, Wo(i2, (e3) => e3.x.tick.multiline = true)));
      break;
    case `pieChart`:
    case `pie3DChart`:
      Object.assign(a2, { data: { columns: Object.values(i2[0].xlabels)[t2(279)]((e3, t3) => [e3, i2[0].values[t3].y]), type: Lo() } });
      break;
    case `areaChart`:
      Object.assign(a2, s({ data: { columns: i2[t2(279)]((e3) => [e3[t2(926)], ...e3.values[t2(279)](({ y: e4 }) => e4)]), type: Fo() }, interaction: { enabled: true } }, Wo(i2)));
      break;
    case `scatterChart`:
      Object.assign(a2, { data: { xs: { y: `x` }, columns: i2.map((e3, t3) => [t3 ? `y` : `x`, ...e3]), type: zo() }, axis: { x: { label: `X`, showDist: true, tick: { format: fe(`.02f`) } }, y: { label: `Y`, showDist: true, tick: { format: fe(`.02f`) } } } });
      break;
    default:
  }
  a2.data && Vo.generate(a2);
}
function Ko(e2) {
  var t2 = M;
  let n2 = e2;
  for (let e3 = 0; e3 < n2.length; e3++) {
    let r2 = Bt(n2[e3])[t2(531)](`.numeric-bullet-style`);
    if (r2[t2(626)] > 0) {
      let e4 = ``, n3 = ``, i2 = 0, a2 = [], o2 = 0, s2 = [];
      for (let c2 = 0; c2 < r2.length; c2++) {
        let l2 = Bt(r2[c2]).data(t2(1111)), u2 = Bt(r2[c2]).data(`bulltlvl`);
        i2 == 0 ? (e4 = l2, n3 = u2, a2[o2] = i2, s2[o2] = l2, i2++) : l2 == e4 && u2 == n3 ? (e4 = l2, n3 = u2, i2++, a2[o2] = i2, s2[o2] = l2) : l2 != e4 && u2 == n3 || l2 != e4 && Number(u2) > Number(n3) ? (e4 = l2, n3 = u2, o2++, a2[o2] = i2, s2[o2] = l2, i2 = 1) : l2 != e4 && Number(u2) < Number(n3) && (e4 = l2, n3 = u2, o2--, i2 = a2[o2] + 1);
        let d2 = qo(s2[o2], i2);
        Bt(r2[c2]).html(d2);
      }
    }
  }
}
function qo(e2, t2) {
  var n2 = M;
  let r2 = ``;
  switch (e2) {
    case `arabicPeriod`:
      r2 = t2 + `. `;
      break;
    case `arabicParenR`:
      r2 = t2 + `) `;
      break;
    case `alphaLcParenR`:
      r2 = Zo(t2, n2(676)) + `) `;
      break;
    case `alphaLcPeriod`:
      r2 = Zo(t2, `lowerCase`) + `. `;
      break;
    case `alphaUcParenR`:
      r2 = Zo(t2, `upperCase`) + `) `;
      break;
    case `alphaUcPeriod`:
      r2 = Zo(t2, `upperCase`) + `. `;
      break;
    case `romanUcPeriod`:
      r2 = Jo(t2) + `. `;
      break;
    case `romanLcParenR`:
      r2 = Jo(t2) + `) `;
      break;
    case `hebrew2Minus`:
      r2 = Yo.format(t2) + `-`;
      break;
    default:
      r2 = String(t2);
  }
  return r2;
}
function Jo(e2) {
  var t2 = M;
  if (!+e2) return false;
  let n2 = String(+e2).split(``), r2 = `.C.CC.CCC.CD.D.DC.DCC.DCCC.CM..X.XX.XXX.XL.L.LX.LXX.LXXX.XC..I.II.III.IV.V.VI.VII.VIII.IX`.split(`.`), i2 = ``, a2 = 3;
  for (; a2--; ) i2 = (r2[+(n2.pop() ?? ``) + a2 * 10] || ``) + i2;
  return Array(+n2.join(``) + 1)[t2(1045)](`M`) + i2;
}
var Yo = Xo([[1e3, ``], [400, `\u05EA`], [300, `\u05E9`], [200, `\u05E8`], [100, `\u05E7`], [90, `\u05E6`], [80, `\u05E4`], [70, `\u05E2`], [60, `\u05E1`], [50, `\u05E0`], [40, `\u05DE`], [30, `\u05DC`], [20, `\u05DB`], [10, `\u05D9`], [9, `\u05D8`], [8, `\u05D7`], [7, `\u05D6`], [6, `\u05D5`], [5, `\u05D4`], [4, `\u05D3`], [3, `\u05D2`], [2, `\u05D1`], [1, `\u05D0`], [/יה/, `\u05D8\u05F4\u05D5`], [/יו/, `\u05D8\u05F4\u05D6`], [/([א-ת])([א-ת])$/, `$1\u05F4$2`], [/^([א-ת])$/, `$1\u05F3`]]);
function Xo(e2) {
  return e2.slice().sort(function(e3, t2) {
    var n2 = Q;
    return t2[1][n2(626)] - e3[1].length;
  }), { format: function(t2) {
    let n2 = ``;
    return Bt.each(e2, function() {
      let e3 = this[0];
      if (parseInt(e3) > 0) for (; t2 >= e3; t2 -= e3) n2 += this[1];
      else n2 = n2.replace(e3, this[1]);
    }), n2;
  } };
}
function Zo(e2, t2) {
  var n2 = M;
  e2 = Number(e2) - 1;
  let r2 = ``;
  return t2 == n2(713) ? r2 = ((e2 / 26 >= 1 ? String.fromCharCode(e2 / 26 + 64) : ``) + String.fromCharCode(e2 % 26 + 65)).toUpperCase() : t2 == `lowerCase` && (r2 = ((e2 / 26 >= 1 ? String[n2(746)](e2 / 26 + 64) : ``) + String.fromCharCode(e2 % 26 + 65)).toLowerCase()), r2;
}
var Qo = { create() {
  var e2 = M;
  return u(`pptx.worker.js`)[e2(826)](() => new Worker(new URL(`` + new URL(`/pptx.worker-CZ4PjO6n.js`, `` + import.meta.url).href, `` + import.meta.url), { type: `module` }));
} }, $o = l(o({ __name: `PptxRender`, props: { data: {}, options: { type: Function, default: Vt } }, setup(o2) {
  var s2 = M;
  let c2 = o2, l2 = t(null);
  return (() => {
    let e2 = { isDone: false, thumbElement: null, worker: null, timer: null, resizeObserver: null, resizeFrame: 0 }, t2 = { startWorker() {
      var t3 = Q;
      e2.worker && e2.worker.terminate(), e2.timer && clearInterval(e2.timer);
      let n2 = e2.worker = Qo[t3(481)]();
      n2[t3(337)](`message`, (e3) => {
        this.processMessage(e3.data);
      }, false), n2.addEventListener(`error`, (e3) => {
        console.error(e3);
      }, false), n2[t3(389)]({ type: `processPPTX`, data: c2.data, IE11: `MSInputMethodContext` in window && `documentMode` in document, options: c2.options() }), e2[t3(362)] = window.setInterval(this[t3(506)], 500);
    }, stopWorker() {
      var t3 = Q;
      if (e2.isDone) {
        var n2;
        (n2 = e2.worker) == null || n2.terminate(), console.log(t3(994)), e2.timer && clearInterval(e2[t3(362)]);
      }
    }, scheduleResize() {
      window.cancelAnimationFrame(e2.resizeFrame), e2.resizeFrame = window.requestAnimationFrame(() => {
        this.resize();
      });
    }, resize() {
      var e3 = Q;
      if (l2.value) {
        let t3 = Bt(l2.value), n2 = Math.max(...Array.from(t3.children(`.slide, section`)).map((e4) => e4.offsetWidth), 0), r2 = t3[0][e3(716)];
        if (!n2 || !r2) return;
        t3.css({ transform: `scale(` + Math[e3(568)](1, r2 / n2) + `)`, "transform-origin": e3(836) });
      }
    }, processMessage(t3) {
      var r2 = Q;
      if (e2.isDone || !l2.value) return;
      let i2 = Bt(l2.value), { thumbElement: a2 } = e2;
      switch (t3.type) {
        case `slide`:
          console.log(`\u6B63\u5728\u5904\u7406:`, t3.slide_num), i2[r2(440)](t3.data), n(() => {
            this.scheduleResize();
          });
          break;
        case `pptx-thumb`:
          a2 && Bt(a2).attr(`src`, `data:image/jpeg;base64,` + t3.data);
          break;
        case `slideSize`:
          break;
        case `globalCSS`:
          i2.append(`<style>` + t3.data + `</style>`);
          break;
        case `ExecutionTime`:
        case `Done`:
          console.log(`pptx\u6E32\u67D3\u5B8C\u6210\uFF0C\u8017\u65F6`, t3.data), Ho(t3.charts), e2.isDone = true, n(() => {
            this.scheduleResize();
          });
          break;
        case `WARN`:
          console.warn(r2(511), t3.data);
          break;
        case r2(942):
          e2[r2(1056)] = true, console.error(`PPTX processing error: `, t3[r2(444)]);
          break;
        case `DEBUG`:
          console.debug(`Worker: `, t3.data);
          break;
        default:
          console[r2(1213)](`Worker: `, t3[r2(444)]);
      }
    } };
    r(() => {
      var n2 = Q;
      t2.startWorker(), l2.value && (e2[n2(536)] = new ResizeObserver(() => {
        t2[n2(1024)]();
      }), e2.resizeObserver.observe(l2.value), l2.value.parentElement && e2[n2(536)].observe(l2.value.parentElement));
    }), i(() => {
      var t3 = Q, n2, r2;
      (n2 = e2.worker) == null || n2.terminate(), e2[t3(362)] && clearInterval(e2[t3(362)]), window[t3(183)](e2[t3(888)]), (r2 = e2.resizeObserver) == null || r2.disconnect();
    });
  })(), (t2, n2) => (a(), e(s2(672), { class: s2(949), ref_key: `wrapper`, ref: l2 }, null, 512));
} }), [[`__scopeId`, `data-v-08511eed`]]);
export {
  $o as default
};
