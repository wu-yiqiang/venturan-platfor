import { g as e, h as t } from "./index-D-g3WoLo.js";
import { A as n, B as r, C as i, D as a, H as o, I as s, Q as c, S as l, W as u, c as d, d as ee, et as te, k as ne, l as re, m as ie, nt as ae, q as oe, t as se, x as ce } from "./src-B18GHWxx.js";
import { n as f, t as p } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { H as m, a as le, b as ue, g as h, tt as de } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { t as fe } from "./dist2-CVEWu2Ar.js";
var g = _;
(function(e2, t2) {
  let n2 = _, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(243)) / 1 * (parseInt(n2(184)) / 2) + -parseInt(n2(239)) / 3 + parseInt(n2(234)) / 4 + parseInt(n2(208)) / 5 * (parseInt(n2(236)) / 6) + parseInt(n2(251)) / 7 + parseInt(n2(193)) / 8 + -parseInt(n2(232)) / 9 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(K, 335195);
var pe = class {
  constructor(e2, t2) {
    this._context = e2, this._x = t2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    let e2 = _;
    this[e2(209)] = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    let e2 = _;
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this[e2(209)] = 1 - this._line;
  }
  [g(227)](e2, t2) {
    let n2 = g;
    switch (e2 = +e2, t2 = +t2, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, t2) : this._context.moveTo(e2, t2);
        break;
      case 1:
        this._point = 2;
      default:
        this._x ? this[n2(238)][n2(202)](this._x0 = (this._x0 + e2) / 2, this._y0, this[n2(250)], t2, e2, t2) : this._context.bezierCurveTo(this._x0, this._y0 = (this[n2(242)] + t2) / 2, e2, this[n2(242)], e2, t2);
        break;
    }
    this._x0 = e2, this[n2(242)] = t2;
  }
};
function _(e2, t2) {
  return e2 -= 177, K()[e2];
}
function me(e2) {
  return new pe(e2, true);
}
function he(e2) {
  return new pe(e2, false);
}
function ge(e2) {
  return Number[g(210)](e2) && e2 >= 0;
}
function _e(e2) {
  return e2 != null && typeof e2 != `function` && ge(e2.length);
}
function ve(e2) {
  return e2 === `__proto__`;
}
function v(e2) {
  return e2 == null || typeof e2 != `object` && typeof e2 != `function`;
}
function ye(e2) {
  return Object.getOwnPropertySymbols(e2).filter((t2) => Object.prototype.propertyIsEnumerable.call(e2, t2));
}
function y(e2) {
  return e2 == null ? e2 === void 0 ? `[object Undefined]` : `[object Null]` : Object.prototype.toString.call(e2);
}
var be = `[object RegExp]`, b = `[object String]`, x = `[object Number]`, S = `[object Boolean]`, C = `[object Arguments]`, xe = g(200), Se = `[object Date]`, Ce = `[object Map]`, we = `[object Set]`, w = `[object Array]`, T = `[object ArrayBuffer]`, E = `[object Object]`, D = `[object DataView]`, O = `[object Uint8Array]`, k = `[object Uint8ClampedArray]`, A = g(212), Te = `[object Uint32Array]`, Ee = g(216), De = `[object Int16Array]`, Oe = `[object Int32Array]`, ke = `[object Float32Array]`, Ae = g(196), je = typeof globalThis == g(233) && globalThis || typeof window == `object` && window || typeof self == g(233) && self || typeof global == `object` && global || /* @__PURE__ */ (function() {
  return this;
})() || Function(`return this`)();
function j(e2) {
  let t2 = g;
  return je.Buffer !== void 0 && je[t2(244)].isBuffer(e2);
}
function M(e2) {
  return ArrayBuffer.isView(e2) && !(e2 instanceof DataView);
}
function Me(e2, t2) {
  return N(e2, void 0, e2, /* @__PURE__ */ new Map(), t2);
}
function N(e2, t2, n2, r2 = /* @__PURE__ */ new Map(), i2 = void 0) {
  let a2 = g, o2 = i2 == null ? void 0 : i2(e2, t2, n2, r2);
  if (o2 !== void 0) return o2;
  if (v(e2)) return e2;
  if (r2.has(e2)) return r2.get(e2);
  if (Array.isArray(e2)) {
    let t3 = Array(e2.length);
    r2.set(e2, t3);
    for (let a3 = 0; a3 < e2.length; a3++) t3[a3] = N(e2[a3], a3, n2, r2, i2);
    return Object.hasOwn(e2, `index`) && (t3.index = e2[a2(206)]), Object.hasOwn(e2, `input`) && (t3.input = e2.input), t3;
  }
  if (e2 instanceof Date) return new Date(e2.getTime());
  if (e2 instanceof RegExp) {
    let t3 = new RegExp(e2.source, e2.flags);
    return t3[a2(249)] = e2[a2(249)], t3;
  }
  if (e2 instanceof Map) {
    let t3 = /* @__PURE__ */ new Map();
    r2[a2(179)](e2, t3);
    for (let [a3, o3] of e2) t3.set(a3, N(o3, a3, n2, r2, i2));
    return t3;
  }
  if (e2 instanceof Set) {
    let t3 = /* @__PURE__ */ new Set();
    r2.set(e2, t3);
    for (let a3 of e2) t3.add(N(a3, void 0, n2, r2, i2));
    return t3;
  }
  if (j(e2)) return e2.subarray();
  if (M(e2)) {
    let t3 = new (Object.getPrototypeOf(e2)).constructor(e2.length);
    r2.set(e2, t3);
    for (let a3 = 0; a3 < e2.length; a3++) t3[a3] = N(e2[a3], a3, n2, r2, i2);
    return t3;
  }
  if (e2 instanceof ArrayBuffer || typeof SharedArrayBuffer < `u` && e2 instanceof SharedArrayBuffer) return e2.slice(0);
  if (e2 instanceof DataView) {
    let t3 = new DataView(e2.buffer.slice(0), e2.byteOffset, e2.byteLength);
    return r2.set(e2, t3), P(t3, e2, n2, r2, i2), t3;
  }
  if (typeof File < `u` && e2 instanceof File) {
    let t3 = new File([e2], e2.name, { type: e2.type });
    return r2.set(e2, t3), P(t3, e2, n2, r2, i2), t3;
  }
  if (typeof Blob < `u` && e2 instanceof Blob) {
    let t3 = new Blob([e2], { type: e2.type });
    return r2.set(e2, t3), P(t3, e2, n2, r2, i2), t3;
  }
  if (e2 instanceof Error) {
    let t3 = structuredClone(e2);
    return r2[a2(179)](e2, t3), t3[a2(207)] = e2.message, t3[a2(195)] = e2[a2(195)], t3[a2(224)] = e2.stack, t3.cause = e2.cause, t3[a2(187)] = e2.constructor, P(t3, e2, n2, r2, i2), t3;
  }
  if (e2 instanceof Boolean) {
    let t3 = new Boolean(e2.valueOf());
    return r2.set(e2, t3), P(t3, e2, n2, r2, i2), t3;
  }
  if (e2 instanceof Number) {
    let t3 = new Number(e2[a2(220)]());
    return r2.set(e2, t3), P(t3, e2, n2, r2, i2), t3;
  }
  if (e2 instanceof String) {
    let t3 = new String(e2.valueOf());
    return r2.set(e2, t3), P(t3, e2, n2, r2, i2), t3;
  }
  if (typeof e2 == `object` && Ne(e2)) {
    let t3 = Object.create(Object.getPrototypeOf(e2));
    return r2.set(e2, t3), P(t3, e2, n2, r2, i2), t3;
  }
  return e2;
}
function P(e2, t2, n2 = e2, r2, i2) {
  let a2 = [...Object.keys(t2), ...ye(t2)];
  for (let o2 = 0; o2 < a2.length; o2++) {
    let s2 = a2[o2], c2 = Object.getOwnPropertyDescriptor(e2, s2);
    (c2 == null || c2.writable) && (e2[s2] = N(t2[s2], s2, n2, r2, i2));
  }
}
function Ne(e2) {
  switch (y(e2)) {
    case C:
    case w:
    case T:
    case D:
    case S:
    case Se:
    case ke:
    case Ae:
    case Ee:
    case De:
    case Oe:
    case Ce:
    case x:
    case E:
    case be:
    case we:
    case b:
    case xe:
    case O:
    case k:
    case A:
    case Te:
      return true;
    default:
      return false;
  }
}
function Pe(e2, t2) {
  return Me(e2, (n2, r2, i2, a2) => {
    let o2 = _, s2 = t2 == null ? void 0 : t2(n2, r2, i2, a2);
    if (s2 !== void 0) return s2;
    if (typeof e2 == `object`) {
      if (y(e2) === `[object Object]` && typeof e2[o2(187)] != `function`) {
        let t3 = {};
        return a2.set(e2, t3), P(t3, e2, i2, a2), t3;
      }
      switch (Object.prototype.toString.call(e2)) {
        case x:
        case b:
        case S: {
          let t3 = new e2.constructor(e2 == null ? void 0 : e2.valueOf());
          return P(t3, e2), t3;
        }
        case C: {
          let t3 = {};
          return P(t3, e2), t3.length = e2.length, t3[Symbol[o2(222)]] = e2[Symbol.iterator], t3;
        }
        default:
          return;
      }
    }
  });
}
function Fe(e2) {
  return Pe(e2);
}
function F(e2) {
  return typeof e2 == `object` && !!e2 && y(e2) === `[object Arguments]`;
}
function I(e2) {
  return typeof e2 == g(233) && !!e2;
}
function Ie(e2) {
  return I(e2) && _e(e2);
}
function L(e2, t2) {
  if (typeof e2 != `function` || t2 != null && typeof t2 != `function`) throw TypeError(`Expected a function`);
  let n2 = function(...r2) {
    let i2 = t2 ? t2[_(228)](this, r2) : r2[0], a2 = n2.cache;
    if (a2.has(i2)) return a2.get(i2);
    let o2 = e2.apply(this, r2);
    return n2.cache = a2.set(i2, o2) || a2, o2;
  };
  return n2.cache = new (L.Cache || Map)(), n2;
}
L.Cache = Map, t();
function Le() {
}
function R(e2) {
  return M(e2);
}
function z(e2) {
  let t2 = g;
  if (typeof e2 != `object` || !e2) return false;
  if (Object.getPrototypeOf(e2) === null) return true;
  if (Object.prototype.toString.call(e2) !== t2(180)) {
    var n2;
    let r3 = e2[Symbol.toStringTag];
    return r3 == null || !((n2 = Object.getOwnPropertyDescriptor(e2, Symbol.toStringTag)) != null && n2[t2(245)]) ? false : e2.toString() === `[object ` + r3 + `]`;
  }
  let r2 = e2;
  for (; Object.getPrototypeOf(r2) !== null; ) r2 = Object.getPrototypeOf(r2);
  return Object.getPrototypeOf(e2) === r2;
}
function Re(e2) {
  let t2 = g;
  if (v(e2)) return e2;
  if (Array.isArray(e2) || M(e2) || e2 instanceof ArrayBuffer || typeof SharedArrayBuffer < `u` && e2 instanceof SharedArrayBuffer) return e2.slice(0);
  let n2 = Object.getPrototypeOf(e2);
  if (n2 == null) return Object.assign(Object.create(n2), e2);
  let r2 = n2.constructor;
  if (e2 instanceof Date || e2 instanceof Map || e2 instanceof Set) return new r2(e2);
  if (e2 instanceof RegExp) {
    let t3 = new r2(e2);
    return t3.lastIndex = e2.lastIndex, t3;
  }
  if (e2 instanceof DataView) return new r2(e2.buffer.slice(0));
  if (e2 instanceof Error) {
    let n3;
    return n3 = e2 instanceof AggregateError ? new r2(e2.errors, e2[t2(207)], { cause: e2.cause }) : new r2(e2.message, { cause: e2.cause }), n3[t2(224)] = e2.stack, Object.assign(n3, e2), n3;
  }
  return typeof File < `u` && e2 instanceof File ? new r2([e2], e2.name, { type: e2.type, lastModified: e2.lastModified }) : typeof e2 == `object` ? Object.assign(Object.create(n2), e2) : e2;
}
function ze(e2, ...t2) {
  let n2 = g, r2 = t2.slice(0, -1), i2 = t2[t2[n2(191)] - 1], a2 = e2;
  for (let e3 = 0; e3 < r2[n2(191)]; e3++) {
    let t3 = r2[e3];
    a2 = B(a2, t3, i2, /* @__PURE__ */ new Map());
  }
  return a2;
}
function B(t2, n2, r2, i2) {
  let a2 = g;
  if (v(t2) && (t2 = Object(t2)), typeof n2 != `object` || !n2) return t2;
  if (i2[a2(188)](n2)) return Re(i2.get(n2));
  if (i2.set(n2, t2), Array.isArray(n2)) {
    n2 = n2.slice();
    for (let e2 = 0; e2 < n2.length; e2++) n2[e2] = n2[e2] ?? void 0;
  }
  let o2 = [...Object[a2(217)](n2), ...ye(n2)];
  for (let s2 = 0; s2 < o2.length; s2++) {
    let c2 = o2[s2];
    if (ve(c2)) continue;
    let l2 = n2[c2], u2 = t2[c2];
    if (F(l2) && (l2 = e({}, l2)), F(u2) && (u2 = e({}, u2)), j(l2) && (l2 = Fe(l2)), Array.isArray(l2)) if (Array.isArray(u2)) {
      let e2 = [], t3 = Reflect.ownKeys(u2);
      for (let n3 = 0; n3 < t3[a2(191)]; n3++) {
        let r3 = t3[n3];
        e2[r3] = u2[r3];
      }
      u2 = e2;
    } else if (Ie(u2)) {
      let e2 = [];
      for (let t3 = 0; t3 < u2.length; t3++) e2[t3] = u2[t3];
      u2 = e2;
    } else u2 = [];
    let d2 = r2(u2, l2, c2, t2, n2, i2);
    d2 === void 0 ? Array.isArray(l2) || I(u2) && I(l2) && (z(u2) || z(l2) || R(u2) || R(l2)) ? t2[c2] = B(u2, l2, r2, i2) : u2 == null && z(l2) ? t2[c2] = B({}, l2, r2, i2) : u2 == null && R(l2) ? t2[c2] = Fe(l2) : (u2 === void 0 || l2 !== void 0) && (t2[c2] = l2) : t2[c2] = d2;
  }
  return t2;
}
function Be(e2, ...t2) {
  return ze(e2, ...t2, Le);
}
var Ve = fe(), V, He = { curveBasis: ee, curveBasisClosed: ae, curveBasisOpen: l, curveBumpX: me, curveBumpY: he, curveBundle: ce, curveCardinalClosed: d, curveCardinalOpen: i, curveCardinal: re, curveCatmullRomClosed: oe, curveCatmullRomOpen: u, curveCatmullRom: se, curveLinear: s, curveLinearClosed: ne, curveMonotoneX: o, curveMonotoneY: r, curveNatural: a, curveStep: te, curveStepAfter: c, curveStepBefore: n }, Ue = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, We = p(function(e2, t2) {
  let n2 = g, r2 = Ge(e2, /(?:init\b)|(?:initialize\b)/), i2 = {};
  if (Array.isArray(r2)) {
    let e3 = r2.map((e4) => e4.args);
    ue(e3), i2 = le(i2, [...e3]);
  } else i2 = r2.args;
  if (!i2) return;
  let a2 = de(e2, t2), o2 = `config`;
  return i2[o2] !== void 0 && (a2 === `flowchart-v2` && (a2 = n2(235)), i2[a2] = i2[o2], delete i2[o2]), i2;
}, `detectInit`), Ge = p(function(e2, t2 = null) {
  let n2 = g;
  try {
    let a2 = RegExp(n2(219) + Ue.source + `)(?=[}][%]{2}).*
`, `ig`);
    e2 = e2[n2(203)]().replace(a2, ``).replace(/'/gm, `"`), f.debug(`Detecting diagram directive` + (t2 === null ? `` : ` type:` + t2) + ` based on the text:` + e2);
    let o2, s2 = [];
    for (; (o2 = m.exec(e2)) !== null; ) {
      var r2, i2;
      if (o2.index === m.lastIndex && m.lastIndex++, o2 && !t2 || t2 && (r2 = o2[1]) != null && r2.match(t2) || t2 && (i2 = o2[2]) != null && i2.match(t2)) {
        let e3 = o2[1] ? o2[1] : o2[2], t3 = o2[3] ? o2[3].trim() : o2[4] ? JSON.parse(o2[4].trim()) : null;
        s2.push({ type: e3, args: t3 });
      }
    }
    return s2.length === 0 ? { type: e2, args: null } : s2.length === 1 ? s2[0] : s2;
  } catch (r3) {
    return f.error(`ERROR: ` + r3.message + n2(226) + t2 + `' based on the text: '` + e2 + `'`), { type: void 0, args: null };
  }
}, `detectDirective`), Ke = p(function(e2) {
  return e2.replace(m, ``);
}, `removeDirectives`), qe = p(function(e2, t2) {
  for (let [n2, r2] of t2.entries()) if (r2.match(e2)) return n2;
  return -1;
}, `isSubstringInArray`);
function H(e2, t2) {
  let n2 = g;
  return e2 ? He[`curve` + (e2.charAt(0)[n2(194)]() + e2[n2(230)](1))] ?? t2 : t2;
}
p(H, `interpolateToCurve`);
function U(e2, t2) {
  let n2 = e2.trim();
  if (n2) return t2.securityLevel === `loose` ? n2 : (0, Ve.sanitizeUrl)(n2);
}
p(U, `formatUrl`);
var Je = p((e2, ...t2) => {
  let n2 = g, r2 = e2.split(`.`), i2 = r2[n2(191)] - 1, a2 = r2[i2], o2 = window;
  for (let t3 = 0; t3 < i2; t3++) if (o2 = o2[r2[t3]], !o2) {
    f.error(`Function name: ` + e2 + ` not found in window`);
    return;
  }
  o2[a2](...t2);
}, `runFunc`);
function W(e2, t2) {
  return !e2 || !t2 ? 0 : Math[g(183)]((t2.x - e2.x) ** 2 + (t2.y - e2.y) ** 2);
}
p(W, `distance`);
function Ye(e2) {
  let t2, n2 = 0;
  return e2.forEach((e3) => {
    n2 += W(e3, t2), t2 = e3;
  }), G(e2, n2 / 2);
}
p(Ye, `traverseEdge`);
function Xe(e2) {
  return e2.length === 1 ? e2[0] : Ye(e2);
}
p(Xe, `calcLabelPosition`);
var Ze = p((e2, t2 = 2) => {
  let n2 = 10 ** t2;
  return Math.round(e2 * n2) / n2;
}, `roundNumber`), G = p((e2, t2) => {
  let n2, r2 = t2;
  for (let t3 of e2) {
    if (n2) {
      let e3 = W(t3, n2);
      if (e3 === 0) return n2;
      if (e3 < r2) r2 -= e3;
      else {
        let i2 = r2 / e3;
        if (i2 <= 0) return n2;
        if (i2 >= 1) return { x: t3.x, y: t3.y };
        if (i2 > 0 && i2 < 1) return { x: Ze((1 - i2) * n2.x + i2 * t3.x, 5), y: Ze((1 - i2) * n2.y + i2 * t3.y, 5) };
      }
    }
    n2 = t3;
  }
  throw Error(`Could not find a suitable point for the given distance`);
}, `calculatePoint`), Qe = p((e2, t2, n2) => {
  let r2 = g;
  f.info(`our points ` + JSON[r2(223)](t2)), t2[0] !== n2 && (t2 = t2[r2(213)]());
  let i2 = G(t2, 25), a2 = e2 ? 10 : 5, o2 = Math.atan2(t2[0].y - i2.y, t2[0].x - i2.x), s2 = { x: 0, y: 0 };
  return s2.x = Math.sin(o2) * a2 + (t2[0].x + i2.x) / 2, s2.y = -Math.cos(o2) * a2 + (t2[0].y + i2.y) / 2, s2;
}, `calcCardinalityPosition`);
function K() {
  let e2 = `[object Int8Array].keys.div.[%]{2}(?![{].valueOf.attr.iterator.stringify.stack.fill. - Unable to parse directive type: '.point.apply.count.slice.calculateTextWidth.11319417MbzMGJ.object.2115184fZDPth.flowchart.25050ptXzBc.start_left._context.1725354oELngc.drawSimpleText.joinWith._y0.67967JjUfOZ.Buffer.writable.handleUndefinedAttr.toString.text-anchor.lastIndex._x0.4543210SSGNbn.replace.cos.set.[object Object].style.width.sqrt.2PTUGXf.innerHTML.split.constructor.has.number.calculateTextHeight.length.text.5039864fJXRoZ.toUpperCase.name.[object Float64Array].fontSize.push.append.[object Symbol].class.bezierCurveTo.trim.info.lineHeight.index.message.350IPaAPG._line.isSafeInteger.lineBreakRegex.[object Uint16Array].reverse.start_right.forEach`.split(`.`);
  return K = function() {
    return e2;
  }, K();
}
function $e(e2, t2, n2) {
  let r2 = g, i2 = structuredClone(n2);
  f[r2(204)](`our points`, i2), t2 !== r2(237) && t2 !== r2(214) && i2.reverse();
  let a2 = G(i2, 25 + e2), o2 = 10 + e2 * 0.5, s2 = Math.atan2(i2[0].y - a2.y, i2[0].x - a2.x), c2 = { x: 0, y: 0 };
  return t2 === r2(237) ? (c2.x = Math.sin(s2 + Math.PI) * o2 + (i2[0].x + a2.x) / 2, c2.y = -Math[r2(178)](s2 + Math.PI) * o2 + (i2[0].y + a2.y) / 2) : t2 === `end_right` ? (c2.x = Math.sin(s2 - Math.PI) * o2 + (i2[0].x + a2.x) / 2 - 5, c2.y = -Math.cos(s2 - Math.PI) * o2 + (i2[0].y + a2.y) / 2 - 5) : t2 === `end_left` ? (c2.x = Math.sin(s2) * o2 + (i2[0].x + a2.x) / 2 - 5, c2.y = -Math.cos(s2) * o2 + (i2[0].y + a2.y) / 2 - 5) : (c2.x = Math.sin(s2) * o2 + (i2[0].x + a2.x) / 2, c2.y = -Math.cos(s2) * o2 + (i2[0].y + a2.y) / 2), c2;
}
p($e, `calcTerminalLabelPosition`);
function q(e2) {
  let t2 = ``, n2 = ``;
  for (let r2 of e2) r2 !== void 0 && (r2.startsWith(`color:`) || r2.startsWith(`text-align:`) ? n2 = n2 + r2 + `;` : t2 = t2 + r2 + `;`);
  return { style: t2, labelStyle: n2 };
}
p(q, `getStylesFromArray`);
var et = 0, tt = p(() => (et++, `id-` + Math.random()[g(247)](36).substr(2, 12) + `-` + et), `generateId`);
function nt(e2) {
  let t2 = ``;
  for (let n2 = 0; n2 < e2; n2++) t2 += `0123456789abcdef`.charAt(Math.floor(Math.random() * 16));
  return t2;
}
p(nt, `makeRandomHex`);
var rt = p((e2) => nt(e2.length), `random`), it = p(function() {
  return { x: 0, y: 0, fill: void 0, anchor: `start`, style: `#666`, width: 100, height: 100, textMargin: 0, rx: 0, ry: 0, valign: void 0, text: `` };
}, `getTextObj`), at = p(function(e2, t2) {
  let n2 = g, r2 = t2.text.replace(h.lineBreakRegex, ` `), [, i2] = Q(t2.fontSize), a2 = e2.append(`text`);
  a2.attr(`x`, t2.x), a2[n2(221)](`y`, t2.y), a2.style(n2(248), t2.anchor), a2.style(`font-family`, t2.fontFamily), a2.style(`font-size`, i2), a2[n2(181)](`font-weight`, t2.fontWeight), a2.attr(`fill`, t2.fill), t2.class !== void 0 && a2.attr(`class`, t2[n2(201)]);
  let o2 = a2[n2(199)](`tspan`);
  return o2.attr(`x`, t2.x + t2.textMargin * 2), o2.attr(n2(225), t2.fill), o2[n2(192)](r2), a2;
}, g(240)), ot = L((e2, t2, n2) => {
  let r2 = g;
  if (!e2 || (n2 = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: `Arial`, joinWith: `<br/>` }, n2), h.lineBreakRegex.test(e2))) return e2;
  let i2 = e2[r2(186)](` `).filter(Boolean), a2 = [], o2 = ``;
  return i2[r2(215)]((e3, s2) => {
    let c2 = r2, l2 = Y(e3 + ` `, n2), u2 = Y(o2, n2);
    if (l2 > t2) {
      let { hyphenatedStrings: r3, remainingWord: i3 } = st(e3, t2, `-`, n2);
      a2[c2(198)](o2, ...r3), o2 = i3;
    } else u2 + l2 >= t2 ? (a2.push(o2), o2 = e3) : o2 = [o2, e3].filter(Boolean).join(` `);
    s2 + 1 === i2.length && a2.push(o2);
  }), a2.filter((e3) => e3 !== ``).join(n2[r2(241)]);
}, (e2, t2, n2) => `` + e2 + t2 + n2.fontSize + n2.fontWeight + n2.fontFamily + n2.joinWith), st = L((e2, t2, n2 = `-`, r2) => {
  r2 = Object.assign({ fontSize: 12, fontWeight: 400, fontFamily: `Arial`, margin: 0 }, r2);
  let i2 = [...e2], a2 = [], o2 = ``;
  return i2.forEach((e3, s2) => {
    let c2 = `` + o2 + e3;
    if (Y(c2, r2) >= t2) {
      let e4 = s2 + 1, t3 = i2.length === e4, r3 = `` + c2 + n2;
      a2.push(t3 ? c2 : r3), o2 = ``;
    } else o2 = c2;
  }), { hyphenatedStrings: a2, remainingWord: o2 };
}, (e2, t2, n2 = `-`, r2) => `` + e2 + t2 + n2 + r2.fontSize + r2.fontWeight + r2.fontFamily);
function J(e2, t2) {
  return X(e2, t2).height;
}
p(J, g(190));
function Y(e2, t2) {
  return X(e2, t2).width;
}
p(Y, g(231));
var X = L((e2, t2) => {
  let n2 = g, { fontSize: r2 = 12, fontFamily: i2 = `Arial`, fontWeight: a2 = 400 } = t2;
  if (!e2) return { width: 0, height: 0 };
  let [, o2] = Q(r2), s2 = [`sans-serif`, i2], c2 = e2[n2(186)](h[n2(211)]), l2 = [], u2 = ie(`body`);
  if (!u2.remove) return { width: 0, height: 0, lineHeight: 0 };
  let d2 = u2[n2(199)](`svg`);
  for (let e3 of s2) {
    let t3 = 0, r3 = { width: 0, height: 0, lineHeight: 0 };
    for (let i3 of c2) {
      let s3 = it();
      s3.text = i3 || `\u200B`;
      let c3 = at(d2, s3).style(`font-size`, o2).style(`font-weight`, a2).style(`font-family`, e3), l3 = (c3._groups || c3)[0][0].getBBox();
      if (l3.width === 0 && l3.height === 0) throw Error(`svg element not in render tree`);
      r3[n2(182)] = Math.round(Math.max(r3.width, l3[n2(182)])), t3 = Math.round(l3.height), r3.height += t3, r3.lineHeight = Math.round(Math.max(r3[n2(205)], t3));
    }
    l2.push(r3);
  }
  return d2.remove(), l2[isNaN(l2[1].height) || isNaN(l2[1].width) || isNaN(l2[1].lineHeight) || l2[0].height > l2[1].height && l2[0].width > l2[1].width && l2[0][n2(205)] > l2[1].lineHeight ? 0 : 1];
}, (e2, t2) => `` + e2 + t2[g(197)] + t2.fontWeight + t2.fontFamily), ct = (V = class {
  constructor(e2 = false, t2) {
    let n2 = g;
    this.count = 0, this.count = t2 ? t2.length : 0, this.next = e2 ? () => this[n2(229)]++ : () => Date.now();
  }
}, p(V, `InitIDGenerator`), V), Z, lt = p(function(e2) {
  let t2 = g;
  return Z || (Z = document.createElement(t2(218))), e2 = escape(e2).replace(/%26/g, `&`).replace(/%23/g, `#`).replace(/%3B/g, `;`), Z[t2(185)] = e2, unescape(Z.textContent);
}, `entityDecode`);
function ut(e2) {
  return `str` in e2;
}
p(ut, `isDetailedError`);
var dt = p((e2, t2, n2, r2) => {
  var _a;
  let i2 = g;
  if (!r2) return;
  let a2 = (_a = e2.node()) == null ? void 0 : _a.getBBox();
  a2 && e2.append(i2(192)).text(r2).attr(`text-anchor`, `middle`).attr(`x`, a2.x + a2.width / 2).attr(`y`, -n2)[i2(221)](`class`, t2);
}, `insertTitle`), Q = p((e2) => {
  if (typeof e2 == g(189)) return [e2, e2 + `px`];
  let t2 = parseInt(e2 ?? ``, 10);
  return Number.isNaN(t2) ? [void 0, void 0] : e2 === String(t2) ? [t2, e2 + `px`] : [t2, e2];
}, `parseFontSize`);
function $(e2, t2) {
  return Be({}, e2, t2);
}
p($, `cleanAndMerge`);
var ft = { assignWithDepth: le, wrapLabel: ot, calculateTextHeight: J, calculateTextWidth: Y, calculateTextDimensions: X, cleanAndMerge: $, detectInit: We, detectDirective: Ge, isSubstringInArray: qe, interpolateToCurve: H, calcLabelPosition: Xe, calcCardinalityPosition: Qe, calcTerminalLabelPosition: $e, formatUrl: U, getStylesFromArray: q, generateId: tt, random: rt, runFunc: Je, entityDecode: lt, insertTitle: dt, isLabelCoordinateInPath: _t, parseFontSize: Q, InitIDGenerator: ct }, pt = p(function(e2) {
  let t2 = g, n2 = e2;
  return n2 = n2.replace(/style.*:\S*#.*;/g, function(e3) {
    return e3.substring(0, e3.length - 1);
  }), n2 = n2[t2(177)](/classDef.*:\S*#.*;/g, function(e3) {
    return e3.substring(0, e3.length - 1);
  }), n2 = n2.replace(/#\w+;/g, function(e3) {
    let t3 = e3.substring(1, e3.length - 1);
    return /^\+?\d+$/.test(t3) ? `\uFB02\xB0\xB0` + t3 + `\xB6\xDF` : `\uFB02\xB0` + t3 + `\xB6\xDF`;
  }), n2;
}, `encodeEntities`), mt = p(function(e2) {
  let t2 = g;
  return e2[t2(177)](/ﬂ°°/g, `&#`)[t2(177)](/ﬂ°/g, `&`).replace(/¶ß/g, `;`);
}, `decodeEntities`), ht = p((e2, t2, { counter: n2 = 0, prefix: r2, suffix: i2 }, a2) => a2 || (r2 ? r2 + `_` : ``) + e2 + `_` + t2 + `_` + n2 + (i2 ? `_` + i2 : ``), `getEdgeId`);
function gt(e2) {
  return e2 ?? null;
}
p(gt, g(246));
function _t(e2, t2) {
  let n2 = Math.round(e2.x), r2 = Math.round(e2.y), i2 = t2.replace(/(\d+\.\d+)/g, (e3) => Math.round(parseFloat(e3)).toString());
  return i2.includes(n2.toString()) || i2.includes(r2.toString());
}
p(_t, `isLabelCoordinateInPath`);
export {
  mt as A,
  J as B,
  S as C,
  ut as D,
  _e as E,
  y as F,
  Ce as G,
  C as H,
  gt as I,
  we as K,
  rt as L,
  b as M,
  j as N,
  pt as O,
  Te as P,
  v as R,
  Q as S,
  Se as T,
  he as U,
  ft as V,
  E as W,
  w as _,
  ke as a,
  Ke as b,
  F as c,
  Y as d,
  ot as f,
  R as g,
  $ as h,
  k as i,
  x as j,
  tt as k,
  q as l,
  Ae as m,
  T as n,
  O as o,
  A as p,
  xe as q,
  be as r,
  Oe as s,
  Ee as t,
  H as u,
  D as v,
  me as w,
  X as x,
  De as y,
  ht as z
};
