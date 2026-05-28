import { t as e } from "./init-FHLUNZLx.js";
var t = r;
(function(e2, t2) {
  let n2 = r, i2 = e2();
  for (; ; ) try {
    if (parseInt(n2(414)) / 1 + parseInt(n2(419)) / 2 + parseInt(n2(422)) / 3 + -parseInt(n2(420)) / 4 + -parseInt(n2(417)) / 5 * (parseInt(n2(421)) / 6) + parseInt(n2(425)) / 7 * (parseInt(n2(427)) / 8) + parseInt(n2(416)) / 9 * (parseInt(n2(426)) / 10) === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(n, 701334);
function n() {
  let e2 = [`defineProperties`, `1008401dzuCyb`, `slice`, `7929CGNguL`, `624545penAjK`, `range`, `1027094PIOluC`, `5501252RaseMz`, `42MWpLSN`, `1313034XOXCow`, `object`, `has`, `643181DNurlj`, `10210lHJrUu`, `8kWKcIv`];
  return n = function() {
    return e2;
  }, n();
}
function r(e2, t2) {
  return e2 -= 414, n()[e2];
}
var i = class extends Map {
  constructor(e2, t2 = c) {
    let n2 = r;
    if (super(), Object[n2(428)](this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: t2 } }), e2 != null) for (let [t3, n3] of e2) this.set(t3, n3);
  }
  get(e2) {
    return super.get(a(this, e2));
  }
  [t(424)](e2) {
    return super.has(a(this, e2));
  }
  set(e2, t2) {
    return super.set(o(this, e2), t2);
  }
  delete(e2) {
    return super.delete(s(this, e2));
  }
};
function a({ _intern: e2, _key: t2 }, n2) {
  let r2 = t2(n2);
  return e2.has(r2) ? e2.get(r2) : n2;
}
function o({ _intern: e2, _key: t2 }, n2) {
  let r2 = t2(n2);
  return e2.has(r2) ? e2.get(r2) : (e2.set(r2, n2), n2);
}
function s({ _intern: e2, _key: t2 }, n2) {
  let r2 = t2(n2);
  return e2.has(r2) && (n2 = e2.get(r2), e2.delete(r2)), n2;
}
function c(e2) {
  return typeof e2 == t(423) && e2 ? e2.valueOf() : e2;
}
var l = /* @__PURE__ */ Symbol(`implicit`);
function u() {
  let n2 = t;
  var r2 = new i(), a2 = [], o2 = [], s2 = l;
  function c2(e2) {
    let t2 = r2.get(e2);
    if (t2 === void 0) {
      if (s2 !== l) return s2;
      r2.set(e2, t2 = a2.push(e2) - 1);
    }
    return o2[t2 % o2.length];
  }
  return c2.domain = function(e2) {
    if (!arguments.length) return a2.slice();
    a2 = [], r2 = new i();
    for (let t2 of e2) r2.has(t2) || r2.set(t2, a2.push(t2) - 1);
    return c2;
  }, c2[n2(418)] = function(e2) {
    let t2 = n2;
    return arguments.length ? (o2 = Array.from(e2), c2) : o2[t2(415)]();
  }, c2.unknown = function(e2) {
    return arguments.length ? (s2 = e2, c2) : s2;
  }, c2.copy = function() {
    return u(a2, o2).unknown(s2);
  }, e.apply(c2, arguments), c2;
}
export {
  u as t
};
