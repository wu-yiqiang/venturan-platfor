import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
var i = $;
(function(e17, t3) {
  let n2 = $, r2 = e17();
  for (; ; ) try {
    if (-parseInt(n2(1162)) / 1 * (-parseInt(n2(402)) / 2) + -parseInt(n2(667)) / 3 * (parseInt(n2(865)) / 4) + -parseInt(n2(426)) / 5 + parseInt(n2(1456)) / 6 + -parseInt(n2(1171)) / 7 * (parseInt(n2(777)) / 8) + parseInt(n2(208)) / 9 * (parseInt(n2(978)) / 10) + parseInt(n2(1144)) / 11 === t3) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Vl, 687005), t();
var a, o, s, c, l, u, d, f, p, m = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, h = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, g = i(1193), _ = 1e3, v = 1001, y = 1002, b = 1003, x = 1004, S = 1005, C = 1006, w = 1007, T = 1008, E = 1009, D = 1010, O = 1011, k = 1012, A = 1013, ee = 1014, j = 1015, te = 1016, ne = 1017, M = 1018, re = 1020, ie = 35902, ae = 35899, oe = 1021, se = 1022, N = 1023, ce = 1026, le = 1027, ue = 1028, de = 1029, P = 1030, fe = 1031, pe = 1033, me = 33776, he = 33777, ge = 33778, _e = 33779, ve = 35840, ye = 35841, be = 35842, xe = 35843, Se = 36196, Ce = 37492, we = 37496, Te = 37488, Ee = 37489, De = 37490, Oe = 37491, ke = 37808, Ae = 37809, je = 37810, Me = 37811, Ne = 37812, F = 37813, Pe = 37814, Fe = 37815, Ie = 37816, I = 37817, Le = 37818, L = 37819, R = 37820, Re = 37821, ze = 36492, Be = 36494, Ve = 36495, He = 36283, Ue = 36284, We = 36285, Ge = 36286, Ke = 2201, qe = 2202, Je = 2300, Ye = 2301, Xe = 2302, Ze = 2303, Qe = 2400, $e = 2401, et = 2402, tt = 2500, nt = 2501, rt = 3200, it = `srgb`, at = `srgb-linear`, ot = `linear`, st = `srgb`, ct = 7680, lt = 35044, ut = 2e3;
function dt(e17) {
  for (let t3 = e17.length - 1; t3 >= 0; --t3) if (e17[t3] >= 65535) return true;
  return false;
}
function ft(e17) {
  return ArrayBuffer[i(1417)](e17) && !(e17 instanceof DataView);
}
function pt(e17) {
  return document[i(504)](`http://www.w3.org/1999/xhtml`, e17);
}
function mt() {
  let e17 = pt(i(1261));
  return e17.style.display = `block`, e17;
}
var ht = {}, gt = null;
function _t(...e17) {
  let t3 = `THREE.` + e17.shift();
  gt ? gt(`log`, t3, ...e17) : console.log(t3, ...e17);
}
function vt(e17) {
  let t3 = i, n2 = e17[0];
  if (typeof n2 == t3(1254) && n2.startsWith(`TSL:`)) {
    let n3 = e17[1];
    n3 && n3.isStackTrace ? e17[0] += ` ` + n3.getLocation() : e17[1] = t3(1461);
  }
  return e17;
}
function z(...e17) {
  e17 = vt(e17);
  let t3 = `THREE.` + e17.shift();
  if (gt) gt(`warn`, t3, ...e17);
  else {
    let n2 = e17[0];
    n2 && n2.isStackTrace ? console.warn(n2.getError(t3)) : console.warn(t3, ...e17);
  }
}
function B(...e17) {
  e17 = vt(e17);
  let t3 = `THREE.` + e17.shift();
  if (gt) gt(`error`, t3, ...e17);
  else {
    let n2 = e17[0];
    n2 && n2.isStackTrace ? console.error(n2.getError(t3)) : console.error(t3, ...e17);
  }
}
function yt(...e17) {
  let t3 = e17.join(` `);
  t3 in ht || (ht[t3] = true, z(...e17));
}
function bt(e17, t3, n2) {
  return new Promise(function(r2, i2) {
    function a2() {
      let o2 = $;
      switch (e17.clientWaitSync(t3, e17[o2(1022)], 0)) {
        case e17.WAIT_FAILED:
          i2();
          break;
        case e17.TIMEOUT_EXPIRED:
          setTimeout(a2, n2);
          break;
        default:
          r2();
      }
    }
    setTimeout(a2, n2);
  });
}
var xt = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 }, St = class {
  addEventListener(e17, t3) {
    this._listeners === void 0 && (this._listeners = {});
    let n2 = this._listeners;
    n2[e17] === void 0 && (n2[e17] = []), n2[e17].indexOf(t3) === -1 && n2[e17].push(t3);
  }
  hasEventListener(e17, t3) {
    let n2 = this._listeners;
    return n2 === void 0 ? false : n2[e17] !== void 0 && n2[e17].indexOf(t3) !== -1;
  }
  removeEventListener(e17, t3) {
    let n2 = i, r2 = this[n2(672)];
    if (r2 === void 0) return;
    let a2 = r2[e17];
    if (a2 !== void 0) {
      let e18 = a2[n2(530)](t3);
      e18 !== -1 && a2.splice(e18, 1);
    }
  }
  dispatchEvent(e17) {
    let t3 = this._listeners;
    if (t3 === void 0) return;
    let n2 = t3[e17.type];
    if (n2 !== void 0) {
      e17.target = this;
      let t4 = n2.slice(0);
      for (let n3 = 0, r2 = t4.length; n3 < r2; n3++) t4[n3].call(this, e17);
      e17.target = null;
    }
  }
}, Ct = i(1375).split(`.`), wt = 1234567, Tt = Math.PI / 180, Et = 180 / Math.PI;
function Dt() {
  let e17 = i, t3 = Math.random() * 4294967295 | 0, n2 = Math.random() * 4294967295 | 0, r2 = Math.random() * 4294967295 | 0, a2 = Math[e17(1449)]() * 4294967295 | 0;
  return (Ct[t3 & 255] + Ct[t3 >> 8 & 255] + Ct[t3 >> 16 & 255] + Ct[t3 >> 24 & 255] + `-` + Ct[n2 & 255] + Ct[n2 >> 8 & 255] + `-` + Ct[n2 >> 16 & 15 | 64] + Ct[n2 >> 24 & 255] + `-` + Ct[r2 & 63 | 128] + Ct[r2 >> 8 & 255] + `-` + Ct[r2 >> 16 & 255] + Ct[r2 >> 24 & 255] + Ct[a2 & 255] + Ct[a2 >> 8 & 255] + Ct[a2 >> 16 & 255] + Ct[a2 >> 24 & 255]).toLowerCase();
}
function V(e17, t3, n2) {
  return Math.max(t3, Math.min(n2, e17));
}
function Ot(e17, t3) {
  return (e17 % t3 + t3) % t3;
}
function kt(e17, t3, n2, r2, i2) {
  return r2 + (e17 - t3) * (i2 - r2) / (n2 - t3);
}
function At(e17, t3, n2) {
  return e17 === t3 ? 0 : (n2 - e17) / (t3 - e17);
}
function jt(e17, t3, n2) {
  return (1 - n2) * e17 + n2 * t3;
}
function Mt(e17, t3, n2, r2) {
  return jt(e17, t3, 1 - Math.exp(-n2 * r2));
}
function Nt(e17, t3 = 1) {
  return t3 - Math.abs(Ot(e17, t3 * 2) - t3);
}
function Pt(e17, t3, n2) {
  return e17 <= t3 ? 0 : e17 >= n2 ? 1 : (e17 = (e17 - t3) / (n2 - t3), e17 * e17 * (3 - 2 * e17));
}
function Ft(e17, t3, n2) {
  return e17 <= t3 ? 0 : e17 >= n2 ? 1 : (e17 = (e17 - t3) / (n2 - t3), e17 * e17 * e17 * (e17 * (e17 * 6 - 15) + 10));
}
function It(e17, t3) {
  return e17 + Math.floor(Math.random() * (t3 - e17 + 1));
}
function Lt(e17, t3) {
  return e17 + Math.random() * (t3 - e17);
}
function Rt(e17) {
  return e17 * (0.5 - Math.random());
}
function zt(e17) {
  e17 !== void 0 && (wt = e17);
  let t3 = wt += 1831565813;
  return t3 = Math.imul(t3 ^ t3 >>> 15, t3 | 1), t3 ^= t3 + Math.imul(t3 ^ t3 >>> 7, t3 | 61), ((t3 ^ t3 >>> 14) >>> 0) / 4294967296;
}
function Bt(e17) {
  return e17 * Tt;
}
function Vt(e17) {
  return e17 * Et;
}
function Ht(e17) {
  return (e17 & e17 - 1) == 0 && e17 !== 0;
}
function Ut(e17) {
  return 2 ** Math.ceil(Math[i(628)](e17) / Math.LN2);
}
function Wt(e17) {
  return 2 ** Math[i(425)](Math.log(e17) / Math.LN2);
}
function Gt(e17, t3, n2, r2, i2) {
  let a2 = Math.cos, o2 = Math.sin, s2 = a2(n2 / 2), c2 = o2(n2 / 2), l2 = a2((t3 + r2) / 2), u2 = o2((t3 + r2) / 2), d2 = a2((t3 - r2) / 2), f2 = o2((t3 - r2) / 2), p2 = a2((r2 - t3) / 2), m2 = o2((r2 - t3) / 2);
  switch (i2) {
    case `XYX`:
      e17.set(s2 * u2, c2 * d2, c2 * f2, s2 * l2);
      break;
    case `YZY`:
      e17.set(c2 * f2, s2 * u2, c2 * d2, s2 * l2);
      break;
    case `ZXZ`:
      e17.set(c2 * d2, c2 * f2, s2 * u2, s2 * l2);
      break;
    case `XZX`:
      e17.set(s2 * u2, c2 * m2, c2 * p2, s2 * l2);
      break;
    case `YXY`:
      e17.set(c2 * p2, s2 * u2, c2 * m2, s2 * l2);
      break;
    case `ZYZ`:
      e17.set(c2 * m2, c2 * p2, s2 * u2, s2 * l2);
      break;
    default:
      z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ` + i2);
  }
}
function Kt(e17, t3) {
  let n2 = i;
  switch (t3.constructor) {
    case Float32Array:
      return e17;
    case Uint32Array:
      return e17 / 4294967295;
    case Uint16Array:
      return e17 / 65535;
    case Uint8Array:
      return e17 / 255;
    case Int32Array:
      return Math.max(e17 / 2147483647, -1);
    case Int16Array:
      return Math.max(e17 / 32767, -1);
    case Int8Array:
      return Math.max(e17 / 127, -1);
    default:
      throw Error(n2(960));
  }
}
function H(e17, t3) {
  let n2 = i;
  switch (t3.constructor) {
    case Float32Array:
      return e17;
    case Uint32Array:
      return Math.round(e17 * 4294967295);
    case Uint16Array:
      return Math.round(e17 * 65535);
    case Uint8Array:
      return Math[n2(866)](e17 * 255);
    case Int32Array:
      return Math[n2(866)](e17 * 2147483647);
    case Int16Array:
      return Math.round(e17 * 32767);
    case Int8Array:
      return Math.round(e17 * 127);
    default:
      throw Error(`Invalid component type.`);
  }
}
var qt = { DEG2RAD: Tt, RAD2DEG: Et, generateUUID: Dt, clamp: V, euclideanModulo: Ot, mapLinear: kt, inverseLerp: At, lerp: jt, damp: Mt, pingpong: Nt, smoothstep: Pt, smootherstep: Ft, randInt: It, randFloat: Lt, randFloatSpread: Rt, seededRandom: zt, degToRad: Bt, radToDeg: Vt, isPowerOfTwo: Ht, ceilPowerOfTwo: Ut, floorPowerOfTwo: Wt, setQuaternionFromProperEuler: Gt, normalize: H, denormalize: Kt };
d = Symbol.iterator;
var U = class {
  constructor(e17 = 0, t3 = 0) {
    this.x = e17, this.y = t3;
  }
  get width() {
    return this.x;
  }
  set width(e17) {
    this.x = e17;
  }
  get height() {
    return this.y;
  }
  set [i(221)](e17) {
    this.y = e17;
  }
  set(e17, t3) {
    return this.x = e17, this.y = t3, this;
  }
  [i(1015)](e17) {
    return this.x = e17, this.y = e17, this;
  }
  setX(e17) {
    return this.x = e17, this;
  }
  [i(716)](e17) {
    return this.y = e17, this;
  }
  setComponent(e17, t3) {
    let n2 = i;
    switch (e17) {
      case 0:
        this.x = t3;
        break;
      case 1:
        this.y = t3;
        break;
      default:
        throw Error(n2(769) + e17);
    }
    return this;
  }
  [i(886)](e17) {
    let t3 = i;
    switch (e17) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw Error(t3(769) + e17);
    }
  }
  [i(443)]() {
    return new this.constructor(this.x, this.y);
  }
  copy(e17) {
    return this.x = e17.x, this.y = e17.y, this;
  }
  add(e17) {
    return this.x += e17.x, this.y += e17.y, this;
  }
  addScalar(e17) {
    return this.x += e17, this.y += e17, this;
  }
  addVectors(e17, t3) {
    return this.x = e17.x + t3.x, this.y = e17.y + t3.y, this;
  }
  addScaledVector(e17, t3) {
    return this.x += e17.x * t3, this.y += e17.y * t3, this;
  }
  sub(e17) {
    return this.x -= e17.x, this.y -= e17.y, this;
  }
  subScalar(e17) {
    return this.x -= e17, this.y -= e17, this;
  }
  subVectors(e17, t3) {
    return this.x = e17.x - t3.x, this.y = e17.y - t3.y, this;
  }
  multiply(e17) {
    return this.x *= e17.x, this.y *= e17.y, this;
  }
  multiplyScalar(e17) {
    return this.x *= e17, this.y *= e17, this;
  }
  divide(e17) {
    return this.x /= e17.x, this.y /= e17.y, this;
  }
  divideScalar(e17) {
    return this.multiplyScalar(1 / e17);
  }
  applyMatrix3(e17) {
    let t3 = this.x, n2 = this.y, r2 = e17.elements;
    return this.x = r2[0] * t3 + r2[3] * n2 + r2[6], this.y = r2[1] * t3 + r2[4] * n2 + r2[7], this;
  }
  min(e17) {
    return this.x = Math.min(this.x, e17.x), this.y = Math.min(this.y, e17.y), this;
  }
  max(e17) {
    let t3 = i;
    return this.x = Math[t3(1023)](this.x, e17.x), this.y = Math.max(this.y, e17.y), this;
  }
  clamp(e17, t3) {
    return this.x = V(this.x, e17.x, t3.x), this.y = V(this.y, e17.y, t3.y), this;
  }
  clampScalar(e17, t3) {
    return this.x = V(this.x, e17, t3), this.y = V(this.y, e17, t3), this;
  }
  [i(1189)](e17, t3) {
    let n2 = this.length();
    return this.divideScalar(n2 || 1).multiplyScalar(V(n2, e17, t3));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    let e17 = i;
    return this.x = Math[e17(182)](this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    let e17 = i;
    return this.x = Math[e17(266)](this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  [i(1336)](e17) {
    return this.x * e17.x + this.y * e17.y;
  }
  cross(e17) {
    return this.x * e17.y - this.y * e17.x;
  }
  [i(1156)]() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  [i(811)]() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  [i(473)]() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e17) {
    let t3 = Math.sqrt(this.lengthSq() * e17.lengthSq());
    if (t3 === 0) return Math.PI / 2;
    let n2 = this.dot(e17) / t3;
    return Math.acos(V(n2, -1, 1));
  }
  distanceTo(e17) {
    return Math.sqrt(this.distanceToSquared(e17));
  }
  distanceToSquared(e17) {
    let t3 = this.x - e17.x, n2 = this.y - e17.y;
    return t3 * t3 + n2 * n2;
  }
  manhattanDistanceTo(e17) {
    return Math[i(1513)](this.x - e17.x) + Math.abs(this.y - e17.y);
  }
  setLength(e17) {
    let t3 = i;
    return this.normalize()[t3(1072)](e17);
  }
  lerp(e17, t3) {
    return this.x += (e17.x - this.x) * t3, this.y += (e17.y - this.y) * t3, this;
  }
  [i(433)](e17, t3, n2) {
    return this.x = e17.x + (t3.x - e17.x) * n2, this.y = e17.y + (t3.y - e17.y) * n2, this;
  }
  equals(e17) {
    return e17.x === this.x && e17.y === this.y;
  }
  fromArray(e17, t3 = 0) {
    return this.x = e17[t3], this.y = e17[t3 + 1], this;
  }
  [i(1263)](e17 = [], t3 = 0) {
    return e17[t3] = this.x, e17[t3 + 1] = this.y, e17;
  }
  fromBufferAttribute(e17, t3) {
    return this.x = e17.getX(t3), this.y = e17.getY(t3), this;
  }
  rotateAround(e17, t3) {
    let n2 = Math.cos(t3), r2 = Math.sin(t3), i2 = this.x - e17.x, a2 = this.y - e17.y;
    return this.x = i2 * n2 - a2 * r2 + e17.x, this.y = i2 * r2 + a2 * n2 + e17.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[d]() {
    yield this.x, yield this.y;
  }
};
a = U, a.prototype.isVector2 = true;
var Jt = class {
  constructor(e17 = 0, t3 = 0, n2 = 0, r2 = 1) {
    let a2 = i;
    this[a2(1500)] = true, this._x = e17, this._y = t3, this._z = n2, this._w = r2;
  }
  static slerpFlat(e17, t3, n2, r2, a2, o2, s2) {
    let c2 = i, l2 = n2[r2 + 0], u2 = n2[r2 + 1], d2 = n2[r2 + 2], f2 = n2[r2 + 3], p2 = a2[o2 + 0], m2 = a2[o2 + 1], h2 = a2[o2 + 2], g2 = a2[o2 + 3];
    if (f2 !== g2 || l2 !== p2 || u2 !== m2 || d2 !== h2) {
      let e18 = l2 * p2 + u2 * m2 + d2 * h2 + f2 * g2;
      e18 < 0 && (p2 = -p2, m2 = -m2, h2 = -h2, g2 = -g2, e18 = -e18);
      let t4 = 1 - s2;
      if (e18 < 0.9995) {
        let n3 = Math.acos(e18), r3 = Math.sin(n3);
        t4 = Math[c2(547)](t4 * n3) / r3, s2 = Math.sin(s2 * n3) / r3, l2 = l2 * t4 + p2 * s2, u2 = u2 * t4 + m2 * s2, d2 = d2 * t4 + h2 * s2, f2 = f2 * t4 + g2 * s2;
      } else {
        l2 = l2 * t4 + p2 * s2, u2 = u2 * t4 + m2 * s2, d2 = d2 * t4 + h2 * s2, f2 = f2 * t4 + g2 * s2;
        let e19 = 1 / Math.sqrt(l2 * l2 + u2 * u2 + d2 * d2 + f2 * f2);
        l2 *= e19, u2 *= e19, d2 *= e19, f2 *= e19;
      }
    }
    e17[t3] = l2, e17[t3 + 1] = u2, e17[t3 + 2] = d2, e17[t3 + 3] = f2;
  }
  static multiplyQuaternionsFlat(e17, t3, n2, r2, i2, a2) {
    let o2 = n2[r2], s2 = n2[r2 + 1], c2 = n2[r2 + 2], l2 = n2[r2 + 3], u2 = i2[a2], d2 = i2[a2 + 1], f2 = i2[a2 + 2], p2 = i2[a2 + 3];
    return e17[t3] = o2 * p2 + l2 * u2 + s2 * f2 - c2 * d2, e17[t3 + 1] = s2 * p2 + l2 * d2 + c2 * u2 - o2 * f2, e17[t3 + 2] = c2 * p2 + l2 * f2 + o2 * d2 - s2 * u2, e17[t3 + 3] = l2 * p2 - o2 * u2 - s2 * d2 - c2 * f2, e17;
  }
  get x() {
    return this._x;
  }
  set x(e17) {
    this._x = e17, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e17) {
    this._y = e17, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e17) {
    this._z = e17, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e17) {
    this._w = e17, this._onChangeCallback();
  }
  set(e17, t3, n2, r2) {
    return this._x = e17, this._y = t3, this._z = n2, this._w = r2, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e17) {
    return this._x = e17.x, this._y = e17.y, this._z = e17.z, this._w = e17.w, this._onChangeCallback(), this;
  }
  setFromEuler(e17, t3 = true) {
    let n2 = e17._x, r2 = e17._y, i2 = e17._z, a2 = e17._order, o2 = Math.cos, s2 = Math.sin, c2 = o2(n2 / 2), l2 = o2(r2 / 2), u2 = o2(i2 / 2), d2 = s2(n2 / 2), f2 = s2(r2 / 2), p2 = s2(i2 / 2);
    switch (a2) {
      case `XYZ`:
        this._x = d2 * l2 * u2 + c2 * f2 * p2, this._y = c2 * f2 * u2 - d2 * l2 * p2, this._z = c2 * l2 * p2 + d2 * f2 * u2, this._w = c2 * l2 * u2 - d2 * f2 * p2;
        break;
      case `YXZ`:
        this._x = d2 * l2 * u2 + c2 * f2 * p2, this._y = c2 * f2 * u2 - d2 * l2 * p2, this._z = c2 * l2 * p2 - d2 * f2 * u2, this._w = c2 * l2 * u2 + d2 * f2 * p2;
        break;
      case `ZXY`:
        this._x = d2 * l2 * u2 - c2 * f2 * p2, this._y = c2 * f2 * u2 + d2 * l2 * p2, this._z = c2 * l2 * p2 + d2 * f2 * u2, this._w = c2 * l2 * u2 - d2 * f2 * p2;
        break;
      case `ZYX`:
        this._x = d2 * l2 * u2 - c2 * f2 * p2, this._y = c2 * f2 * u2 + d2 * l2 * p2, this._z = c2 * l2 * p2 - d2 * f2 * u2, this._w = c2 * l2 * u2 + d2 * f2 * p2;
        break;
      case `YZX`:
        this._x = d2 * l2 * u2 + c2 * f2 * p2, this._y = c2 * f2 * u2 + d2 * l2 * p2, this._z = c2 * l2 * p2 - d2 * f2 * u2, this._w = c2 * l2 * u2 - d2 * f2 * p2;
        break;
      case `XZY`:
        this._x = d2 * l2 * u2 - c2 * f2 * p2, this._y = c2 * f2 * u2 - d2 * l2 * p2, this._z = c2 * l2 * p2 + d2 * f2 * u2, this._w = c2 * l2 * u2 + d2 * f2 * p2;
        break;
      default:
        z(`Quaternion: .setFromEuler() encountered an unknown order: ` + a2);
    }
    return t3 === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e17, t3) {
    let n2 = t3 / 2, r2 = Math.sin(n2);
    return this._x = e17.x * r2, this._y = e17.y * r2, this._z = e17.z * r2, this._w = Math.cos(n2), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e17) {
    let t3 = i, n2 = e17.elements, r2 = n2[0], a2 = n2[4], o2 = n2[8], s2 = n2[1], c2 = n2[5], l2 = n2[9], u2 = n2[2], d2 = n2[6], f2 = n2[10], p2 = r2 + c2 + f2;
    if (p2 > 0) {
      let e18 = 0.5 / Math.sqrt(p2 + 1);
      this._w = 0.25 / e18, this._x = (d2 - l2) * e18, this._y = (o2 - u2) * e18, this._z = (s2 - a2) * e18;
    } else if (r2 > c2 && r2 > f2) {
      let e18 = 2 * Math.sqrt(1 + r2 - c2 - f2);
      this._w = (d2 - l2) / e18, this._x = 0.25 * e18, this._y = (a2 + s2) / e18, this._z = (o2 + u2) / e18;
    } else if (c2 > f2) {
      let e18 = 2 * Math[t3(1199)](1 + c2 - r2 - f2);
      this._w = (o2 - u2) / e18, this._x = (a2 + s2) / e18, this._y = 0.25 * e18, this._z = (l2 + d2) / e18;
    } else {
      let e18 = 2 * Math[t3(1199)](1 + f2 - r2 - c2);
      this._w = (s2 - a2) / e18, this._x = (o2 + u2) / e18, this._y = (l2 + d2) / e18, this._z = 0.25 * e18;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e17, t3) {
    let n2 = i, r2 = e17[n2(1336)](t3) + 1;
    return r2 < 1e-8 ? (r2 = 0, Math[n2(1513)](e17.x) > Math[n2(1513)](e17.z) ? (this._x = -e17.y, this._y = e17.x, this._z = 0, this._w = r2) : (this._x = 0, this._y = -e17.z, this._z = e17.y, this._w = r2)) : (this._x = e17.y * t3.z - e17.z * t3.y, this._y = e17.z * t3.x - e17.x * t3.z, this._z = e17.x * t3.y - e17.y * t3.x, this._w = r2), this[n2(473)]();
  }
  angleTo(e17) {
    return 2 * Math.acos(Math.abs(V(this.dot(e17), -1, 1)));
  }
  rotateTowards(e17, t3) {
    let n2 = this.angleTo(e17);
    if (n2 === 0) return this;
    let r2 = Math.min(1, t3 / n2);
    return this.slerp(e17, r2), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    let e17 = i;
    return this._x *= -1, this._y *= -1, this._z *= -1, this[e17(1463)](), this;
  }
  dot(e17) {
    return this._x * e17._x + this._y * e17._y + this._z * e17._z + this._w * e17._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  [i(660)]() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  [i(473)]() {
    let e17 = i, t3 = this.length();
    return t3 === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t3 = 1 / t3, this._x *= t3, this._y *= t3, this._z *= t3, this._w *= t3), this[e17(1463)](), this;
  }
  multiply(e17) {
    return this.multiplyQuaternions(this, e17);
  }
  premultiply(e17) {
    return this.multiplyQuaternions(e17, this);
  }
  multiplyQuaternions(e17, t3) {
    let n2 = e17._x, r2 = e17._y, i2 = e17._z, a2 = e17._w, o2 = t3._x, s2 = t3._y, c2 = t3._z, l2 = t3._w;
    return this._x = n2 * l2 + a2 * o2 + r2 * c2 - i2 * s2, this._y = r2 * l2 + a2 * s2 + i2 * o2 - n2 * c2, this._z = i2 * l2 + a2 * c2 + n2 * s2 - r2 * o2, this._w = a2 * l2 - n2 * o2 - r2 * s2 - i2 * c2, this._onChangeCallback(), this;
  }
  slerp(e17, t3) {
    let n2 = e17._x, r2 = e17._y, i2 = e17._z, a2 = e17._w, o2 = this.dot(e17);
    o2 < 0 && (n2 = -n2, r2 = -r2, i2 = -i2, a2 = -a2, o2 = -o2);
    let s2 = 1 - t3;
    if (o2 < 0.9995) {
      let e18 = Math.acos(o2), c2 = Math.sin(e18);
      s2 = Math.sin(s2 * e18) / c2, t3 = Math.sin(t3 * e18) / c2, this._x = this._x * s2 + n2 * t3, this._y = this._y * s2 + r2 * t3, this._z = this._z * s2 + i2 * t3, this._w = this._w * s2 + a2 * t3, this._onChangeCallback();
    } else this._x = this._x * s2 + n2 * t3, this._y = this._y * s2 + r2 * t3, this._z = this._z * s2 + i2 * t3, this._w = this._w * s2 + a2 * t3, this.normalize();
    return this;
  }
  [i(311)](e17, t3, n2) {
    let r2 = i;
    return this.copy(e17)[r2(626)](t3, n2);
  }
  random() {
    let e17 = 2 * Math.PI * Math.random(), t3 = 2 * Math.PI * Math.random(), n2 = Math.random(), r2 = Math.sqrt(1 - n2), i2 = Math.sqrt(n2);
    return this.set(r2 * Math.sin(e17), r2 * Math.cos(e17), i2 * Math.sin(t3), i2 * Math.cos(t3));
  }
  equals(e17) {
    return e17._x === this._x && e17._y === this._y && e17._z === this._z && e17._w === this._w;
  }
  fromArray(e17, t3 = 0) {
    return this._x = e17[t3], this._y = e17[t3 + 1], this._z = e17[t3 + 2], this._w = e17[t3 + 3], this._onChangeCallback(), this;
  }
  toArray(e17 = [], t3 = 0) {
    return e17[t3] = this._x, e17[t3 + 1] = this._y, e17[t3 + 2] = this._z, e17[t3 + 3] = this._w, e17;
  }
  [i(577)](e17, t3) {
    let n2 = i;
    return this._x = e17[n2(879)](t3), this._y = e17.getY(t3), this._z = e17[n2(388)](t3), this._w = e17.getW(t3), this._onChangeCallback(), this;
  }
  toJSON() {
    let e17 = i;
    return this[e17(1263)]();
  }
  _onChange(e17) {
    return this._onChangeCallback = e17, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
};
f = Symbol.iterator;
var W = class {
  constructor(e17 = 0, t3 = 0, n2 = 0) {
    this.x = e17, this.y = t3, this.z = n2;
  }
  [i(1139)](e17, t3, n2) {
    return n2 === void 0 && (n2 = this.z), this.x = e17, this.y = t3, this.z = n2, this;
  }
  setScalar(e17) {
    return this.x = e17, this.y = e17, this.z = e17, this;
  }
  setX(e17) {
    return this.x = e17, this;
  }
  [i(716)](e17) {
    return this.y = e17, this;
  }
  setZ(e17) {
    return this.z = e17, this;
  }
  setComponent(e17, t3) {
    switch (e17) {
      case 0:
        this.x = t3;
        break;
      case 1:
        this.y = t3;
        break;
      case 2:
        this.z = t3;
        break;
      default:
        throw Error(`index is out of range: ` + e17);
    }
    return this;
  }
  getComponent(e17) {
    switch (e17) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw Error(`index is out of range: ` + e17);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e17) {
    return this.x = e17.x, this.y = e17.y, this.z = e17.z, this;
  }
  add(e17) {
    return this.x += e17.x, this.y += e17.y, this.z += e17.z, this;
  }
  [i(174)](e17) {
    return this.x += e17, this.y += e17, this.z += e17, this;
  }
  [i(630)](e17, t3) {
    return this.x = e17.x + t3.x, this.y = e17.y + t3.y, this.z = e17.z + t3.z, this;
  }
  addScaledVector(e17, t3) {
    return this.x += e17.x * t3, this.y += e17.y * t3, this.z += e17.z * t3, this;
  }
  sub(e17) {
    return this.x -= e17.x, this.y -= e17.y, this.z -= e17.z, this;
  }
  subScalar(e17) {
    return this.x -= e17, this.y -= e17, this.z -= e17, this;
  }
  subVectors(e17, t3) {
    return this.x = e17.x - t3.x, this.y = e17.y - t3.y, this.z = e17.z - t3.z, this;
  }
  multiply(e17) {
    return this.x *= e17.x, this.y *= e17.y, this.z *= e17.z, this;
  }
  multiplyScalar(e17) {
    return this.x *= e17, this.y *= e17, this.z *= e17, this;
  }
  multiplyVectors(e17, t3) {
    return this.x = e17.x * t3.x, this.y = e17.y * t3.y, this.z = e17.z * t3.z, this;
  }
  applyEuler(e17) {
    return this.applyQuaternion(Xt.setFromEuler(e17));
  }
  [i(203)](e17, t3) {
    let n2 = i;
    return this[n2(234)](Xt[n2(1269)](e17, t3));
  }
  applyMatrix3(e17) {
    let t3 = this.x, n2 = this.y, r2 = this.z, i2 = e17.elements;
    return this.x = i2[0] * t3 + i2[3] * n2 + i2[6] * r2, this.y = i2[1] * t3 + i2[4] * n2 + i2[7] * r2, this.z = i2[2] * t3 + i2[5] * n2 + i2[8] * r2, this;
  }
  [i(438)](e17) {
    return this.applyMatrix3(e17).normalize();
  }
  applyMatrix4(e17) {
    let t3 = this.x, n2 = this.y, r2 = this.z, i2 = e17.elements, a2 = 1 / (i2[3] * t3 + i2[7] * n2 + i2[11] * r2 + i2[15]);
    return this.x = (i2[0] * t3 + i2[4] * n2 + i2[8] * r2 + i2[12]) * a2, this.y = (i2[1] * t3 + i2[5] * n2 + i2[9] * r2 + i2[13]) * a2, this.z = (i2[2] * t3 + i2[6] * n2 + i2[10] * r2 + i2[14]) * a2, this;
  }
  applyQuaternion(e17) {
    let t3 = this.x, n2 = this.y, r2 = this.z, i2 = e17.x, a2 = e17.y, o2 = e17.z, s2 = e17.w, c2 = 2 * (a2 * r2 - o2 * n2), l2 = 2 * (o2 * t3 - i2 * r2), u2 = 2 * (i2 * n2 - a2 * t3);
    return this.x = t3 + s2 * c2 + a2 * u2 - o2 * l2, this.y = n2 + s2 * l2 + o2 * c2 - i2 * u2, this.z = r2 + s2 * u2 + i2 * l2 - a2 * c2, this;
  }
  project(e17) {
    let t3 = i;
    return this.applyMatrix4(e17[t3(510)]).applyMatrix4(e17[t3(490)]);
  }
  unproject(e17) {
    let t3 = i;
    return this[t3(874)](e17.projectionMatrixInverse).applyMatrix4(e17[t3(1234)]);
  }
  transformDirection(e17) {
    let t3 = i, n2 = this.x, r2 = this.y, a2 = this.z, o2 = e17[t3(992)];
    return this.x = o2[0] * n2 + o2[4] * r2 + o2[8] * a2, this.y = o2[1] * n2 + o2[5] * r2 + o2[9] * a2, this.z = o2[2] * n2 + o2[6] * r2 + o2[10] * a2, this.normalize();
  }
  divide(e17) {
    return this.x /= e17.x, this.y /= e17.y, this.z /= e17.z, this;
  }
  [i(1423)](e17) {
    let t3 = i;
    return this[t3(1072)](1 / e17);
  }
  min(e17) {
    return this.x = Math.min(this.x, e17.x), this.y = Math.min(this.y, e17.y), this.z = Math.min(this.z, e17.z), this;
  }
  max(e17) {
    let t3 = i;
    return this.x = Math.max(this.x, e17.x), this.y = Math.max(this.y, e17.y), this.z = Math[t3(1023)](this.z, e17.z), this;
  }
  clamp(e17, t3) {
    return this.x = V(this.x, e17.x, t3.x), this.y = V(this.y, e17.y, t3.y), this.z = V(this.z, e17.z, t3.z), this;
  }
  clampScalar(e17, t3) {
    return this.x = V(this.x, e17, t3), this.y = V(this.y, e17, t3), this.z = V(this.z, e17, t3), this;
  }
  clampLength(e17, t3) {
    let n2 = i, r2 = this.length();
    return this.divideScalar(r2 || 1)[n2(1072)](V(r2, e17, t3));
  }
  floor() {
    let e17 = i;
    return this.x = Math.floor(this.x), this.y = Math[e17(425)](this.y), this.z = Math.floor(this.z), this;
  }
  [i(182)]() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  [i(866)]() {
    let e17 = i;
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math[e17(866)](this.z), this;
  }
  roundToZero() {
    let e17 = i;
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math[e17(266)](this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e17) {
    return this.x * e17.x + this.y * e17.y + this.z * e17.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    let e17 = i;
    return Math.abs(this.x) + Math[e17(1513)](this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e17) {
    let t3 = i;
    return this.normalize()[t3(1072)](e17);
  }
  lerp(e17, t3) {
    return this.x += (e17.x - this.x) * t3, this.y += (e17.y - this.y) * t3, this.z += (e17.z - this.z) * t3, this;
  }
  lerpVectors(e17, t3, n2) {
    return this.x = e17.x + (t3.x - e17.x) * n2, this.y = e17.y + (t3.y - e17.y) * n2, this.z = e17.z + (t3.z - e17.z) * n2, this;
  }
  cross(e17) {
    return this.crossVectors(this, e17);
  }
  crossVectors(e17, t3) {
    let n2 = e17.x, r2 = e17.y, i2 = e17.z, a2 = t3.x, o2 = t3.y, s2 = t3.z;
    return this.x = r2 * s2 - i2 * o2, this.y = i2 * a2 - n2 * s2, this.z = n2 * o2 - r2 * a2, this;
  }
  projectOnVector(e17) {
    let t3 = i, n2 = e17.lengthSq();
    if (n2 === 0) return this[t3(1139)](0, 0, 0);
    let r2 = e17.dot(this) / n2;
    return this.copy(e17)[t3(1072)](r2);
  }
  projectOnPlane(e17) {
    return Yt.copy(this).projectOnVector(e17), this.sub(Yt);
  }
  reflect(e17) {
    return this.sub(Yt.copy(e17).multiplyScalar(2 * this.dot(e17)));
  }
  angleTo(e17) {
    let t3 = i, n2 = Math.sqrt(this.lengthSq() * e17[t3(1156)]());
    if (n2 === 0) return Math.PI / 2;
    let r2 = this.dot(e17) / n2;
    return Math[t3(1097)](V(r2, -1, 1));
  }
  distanceTo(e17) {
    return Math[i(1199)](this.distanceToSquared(e17));
  }
  distanceToSquared(e17) {
    let t3 = this.x - e17.x, n2 = this.y - e17.y, r2 = this.z - e17.z;
    return t3 * t3 + n2 * n2 + r2 * r2;
  }
  manhattanDistanceTo(e17) {
    return Math[i(1513)](this.x - e17.x) + Math.abs(this.y - e17.y) + Math.abs(this.z - e17.z);
  }
  setFromSpherical(e17) {
    return this.setFromSphericalCoords(e17.radius, e17.phi, e17.theta);
  }
  setFromSphericalCoords(e17, t3, n2) {
    let r2 = Math[i(547)](t3) * e17;
    return this.x = r2 * Math.sin(n2), this.y = Math.cos(t3) * e17, this.z = r2 * Math.cos(n2), this;
  }
  setFromCylindrical(e17) {
    return this.setFromCylindricalCoords(e17.radius, e17.theta, e17.y);
  }
  setFromCylindricalCoords(e17, t3, n2) {
    let r2 = i;
    return this.x = e17 * Math.sin(t3), this.y = n2, this.z = e17 * Math[r2(339)](t3), this;
  }
  setFromMatrixPosition(e17) {
    let t3 = e17.elements;
    return this.x = t3[12], this.y = t3[13], this.z = t3[14], this;
  }
  setFromMatrixScale(e17) {
    let t3 = i, n2 = this.setFromMatrixColumn(e17, 0).length(), r2 = this[t3(1488)](e17, 1).length(), a2 = this.setFromMatrixColumn(e17, 2).length();
    return this.x = n2, this.y = r2, this.z = a2, this;
  }
  setFromMatrixColumn(e17, t3) {
    return this.fromArray(e17.elements, t3 * 4);
  }
  setFromMatrix3Column(e17, t3) {
    let n2 = i;
    return this[n2(823)](e17.elements, t3 * 3);
  }
  [i(982)](e17) {
    return this.x = e17._x, this.y = e17._y, this.z = e17._z, this;
  }
  setFromColor(e17) {
    return this.x = e17.r, this.y = e17.g, this.z = e17.b, this;
  }
  [i(1522)](e17) {
    return e17.x === this.x && e17.y === this.y && e17.z === this.z;
  }
  fromArray(e17, t3 = 0) {
    return this.x = e17[t3], this.y = e17[t3 + 1], this.z = e17[t3 + 2], this;
  }
  toArray(e17 = [], t3 = 0) {
    return e17[t3] = this.x, e17[t3 + 1] = this.y, e17[t3 + 2] = this.z, e17;
  }
  fromBufferAttribute(e17, t3) {
    let n2 = i;
    return this.x = e17[n2(879)](t3), this.y = e17.getY(t3), this.z = e17.getZ(t3), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  [i(636)]() {
    let e17 = i, t3 = Math.random() * Math.PI * 2, n2 = Math[e17(1449)]() * 2 - 1, r2 = Math[e17(1199)](1 - n2 * n2);
    return this.x = r2 * Math.cos(t3), this.y = n2, this.z = r2 * Math.sin(t3), this;
  }
  *[f]() {
    yield this.x, yield this.y, yield this.z;
  }
};
o = W, o.prototype.isVector3 = true;
var Yt = new W(), Xt = new Jt(), G = class {
  constructor(e17, t3, n2, r2, i2, a2, o2, s2, c2) {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e17 !== void 0 && this.set(e17, t3, n2, r2, i2, a2, o2, s2, c2);
  }
  set(e17, t3, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = this.elements;
    return l2[0] = e17, l2[1] = r2, l2[2] = o2, l2[3] = t3, l2[4] = i2, l2[5] = s2, l2[6] = n2, l2[7] = a2, l2[8] = c2, this;
  }
  [i(1351)]() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e17) {
    let t3 = i, n2 = this[t3(992)], r2 = e17.elements;
    return n2[0] = r2[0], n2[1] = r2[1], n2[2] = r2[2], n2[3] = r2[3], n2[4] = r2[4], n2[5] = r2[5], n2[6] = r2[6], n2[7] = r2[7], n2[8] = r2[8], this;
  }
  extractBasis(e17, t3, n2) {
    return e17.setFromMatrix3Column(this, 0), t3.setFromMatrix3Column(this, 1), n2.setFromMatrix3Column(this, 2), this;
  }
  [i(370)](e17) {
    let t3 = e17.elements;
    return this.set(t3[0], t3[4], t3[8], t3[1], t3[5], t3[9], t3[2], t3[6], t3[10]), this;
  }
  [i(407)](e17) {
    return this.multiplyMatrices(this, e17);
  }
  premultiply(e17) {
    return this.multiplyMatrices(e17, this);
  }
  [i(902)](e17, t3) {
    let n2 = i, r2 = e17.elements, a2 = t3[n2(992)], o2 = this.elements, s2 = r2[0], c2 = r2[3], l2 = r2[6], u2 = r2[1], d2 = r2[4], f2 = r2[7], p2 = r2[2], m2 = r2[5], h2 = r2[8], g2 = a2[0], _2 = a2[3], v2 = a2[6], y2 = a2[1], b2 = a2[4], x2 = a2[7], S2 = a2[2], C2 = a2[5], w2 = a2[8];
    return o2[0] = s2 * g2 + c2 * y2 + l2 * S2, o2[3] = s2 * _2 + c2 * b2 + l2 * C2, o2[6] = s2 * v2 + c2 * x2 + l2 * w2, o2[1] = u2 * g2 + d2 * y2 + f2 * S2, o2[4] = u2 * _2 + d2 * b2 + f2 * C2, o2[7] = u2 * v2 + d2 * x2 + f2 * w2, o2[2] = p2 * g2 + m2 * y2 + h2 * S2, o2[5] = p2 * _2 + m2 * b2 + h2 * C2, o2[8] = p2 * v2 + m2 * x2 + h2 * w2, this;
  }
  multiplyScalar(e17) {
    let t3 = this.elements;
    return t3[0] *= e17, t3[3] *= e17, t3[6] *= e17, t3[1] *= e17, t3[4] *= e17, t3[7] *= e17, t3[2] *= e17, t3[5] *= e17, t3[8] *= e17, this;
  }
  determinant() {
    let e17 = this.elements, t3 = e17[0], n2 = e17[1], r2 = e17[2], i2 = e17[3], a2 = e17[4], o2 = e17[5], s2 = e17[6], c2 = e17[7], l2 = e17[8];
    return t3 * a2 * l2 - t3 * o2 * c2 - n2 * i2 * l2 + n2 * o2 * s2 + r2 * i2 * c2 - r2 * a2 * s2;
  }
  invert() {
    let e17 = this.elements, t3 = e17[0], n2 = e17[1], r2 = e17[2], i2 = e17[3], a2 = e17[4], o2 = e17[5], s2 = e17[6], c2 = e17[7], l2 = e17[8], u2 = l2 * a2 - o2 * c2, d2 = o2 * s2 - l2 * i2, f2 = c2 * i2 - a2 * s2, p2 = t3 * u2 + n2 * d2 + r2 * f2;
    if (p2 === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let m2 = 1 / p2;
    return e17[0] = u2 * m2, e17[1] = (r2 * c2 - l2 * n2) * m2, e17[2] = (o2 * n2 - r2 * a2) * m2, e17[3] = d2 * m2, e17[4] = (l2 * t3 - r2 * s2) * m2, e17[5] = (r2 * i2 - o2 * t3) * m2, e17[6] = f2 * m2, e17[7] = (n2 * s2 - c2 * t3) * m2, e17[8] = (a2 * t3 - n2 * i2) * m2, this;
  }
  transpose() {
    let e17 = i, t3, n2 = this[e17(992)];
    return t3 = n2[1], n2[1] = n2[3], n2[3] = t3, t3 = n2[2], n2[2] = n2[6], n2[6] = t3, t3 = n2[5], n2[5] = n2[7], n2[7] = t3, this;
  }
  [i(1039)](e17) {
    return this.setFromMatrix4(e17).invert().transpose();
  }
  transposeIntoArray(e17) {
    let t3 = this.elements;
    return e17[0] = t3[0], e17[1] = t3[3], e17[2] = t3[6], e17[3] = t3[1], e17[4] = t3[4], e17[5] = t3[7], e17[6] = t3[2], e17[7] = t3[5], e17[8] = t3[8], this;
  }
  setUvTransform(e17, t3, n2, r2, a2, o2, s2) {
    let c2 = i, l2 = Math.cos(a2), u2 = Math[c2(547)](a2);
    return this.set(n2 * l2, n2 * u2, -n2 * (l2 * o2 + u2 * s2) + o2 + e17, -r2 * u2, r2 * l2, -r2 * (-u2 * o2 + l2 * s2) + s2 + t3, 0, 0, 1), this;
  }
  scale(e17, t3) {
    return this.premultiply(Zt.makeScale(e17, t3)), this;
  }
  [i(163)](e17) {
    let t3 = i;
    return this.premultiply(Zt[t3(1378)](-e17)), this;
  }
  [i(277)](e17, t3) {
    let n2 = i;
    return this.premultiply(Zt[n2(680)](e17, t3)), this;
  }
  makeTranslation(e17, t3) {
    let n2 = i;
    return e17[n2(506)] ? this.set(1, 0, e17.x, 0, 1, e17.y, 0, 0, 1) : this[n2(1139)](1, 0, e17, 0, 1, t3, 0, 0, 1), this;
  }
  [i(1378)](e17) {
    let t3 = Math[i(339)](e17), n2 = Math.sin(e17);
    return this.set(t3, -n2, 0, n2, t3, 0, 0, 0, 1), this;
  }
  makeScale(e17, t3) {
    return this.set(e17, 0, 0, 0, t3, 0, 0, 0, 1), this;
  }
  equals(e17) {
    let t3 = i, n2 = this.elements, r2 = e17[t3(992)];
    for (let e18 = 0; e18 < 9; e18++) if (n2[e18] !== r2[e18]) return false;
    return true;
  }
  fromArray(e17, t3 = 0) {
    for (let n2 = 0; n2 < 9; n2++) this.elements[n2] = e17[n2 + t3];
    return this;
  }
  toArray(e17 = [], t3 = 0) {
    let n2 = this.elements;
    return e17[t3] = n2[0], e17[t3 + 1] = n2[1], e17[t3 + 2] = n2[2], e17[t3 + 3] = n2[3], e17[t3 + 4] = n2[4], e17[t3 + 5] = n2[5], e17[t3 + 6] = n2[6], e17[t3 + 7] = n2[7], e17[t3 + 8] = n2[8], e17;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
};
s = G, s.prototype.isMatrix3 = true;
var Zt = new G(), Qt = new G().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), $t = new G().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function en() {
  let e17 = { enabled: true, workingColorSpace: at, spaces: {}, convert: function(e18, t4, n3) {
    let r3 = $;
    return this.enabled === false || t4 === n3 || !t4 || !n3 ? e18 : (this.spaces[t4].transfer === `srgb` && (e18.r = tn(e18.r), e18.g = tn(e18.g), e18.b = tn(e18.b)), this.spaces[t4].primaries !== this[r3(624)][n3].primaries && (e18[r3(1425)](this.spaces[t4].toXYZ), e18.applyMatrix3(this[r3(624)][n3].fromXYZ)), this.spaces[n3][r3(706)] === `srgb` && (e18.r = nn(e18.r), e18.g = nn(e18.g), e18.b = nn(e18.b)), e18);
  }, workingToColorSpace: function(e18, t4) {
    return this.convert(e18, this.workingColorSpace, t4);
  }, colorSpaceToWorking: function(e18, t4) {
    let n3 = $;
    return this[n3(1073)](e18, t4, this.workingColorSpace);
  }, getPrimaries: function(e18) {
    let t4 = $;
    return this[t4(624)][e18].primaries;
  }, getTransfer: function(e18) {
    return e18 === `` ? ot : this.spaces[e18].transfer;
  }, getToneMappingMode: function(e18) {
    let t4 = $;
    return this.spaces[e18][t4(889)].toneMappingMode || `standard`;
  }, getLuminanceCoefficients: function(e18, t4 = this.workingColorSpace) {
    let n3 = $;
    return e18.fromArray(this.spaces[t4][n3(627)]);
  }, define: function(e18) {
    Object.assign(this.spaces, e18);
  }, _getMatrix: function(e18, t4, n3) {
    let r3 = $;
    return e18[r3(1250)](this[r3(624)][t4].toXYZ).multiply(this.spaces[n3].fromXYZ);
  }, _getDrawingBufferColorSpace: function(e18) {
    let t4 = $;
    return this.spaces[e18][t4(889)].drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(e18 = this.workingColorSpace) {
    let t4 = $;
    return this.spaces[e18].workingColorSpaceConfig[t4(543)];
  }, fromWorkingColorSpace: function(t4, n3) {
    return yt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`), e17.workingToColorSpace(t4, n3);
  }, toWorkingColorSpace: function(t4, n3) {
    return yt($(1244)), e17.colorSpaceToWorking(t4, n3);
  } }, t3 = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], n2 = [0.2126, 0.7152, 0.0722], r2 = [0.3127, 0.329];
  return e17.define({ [at]: { primaries: t3, whitePoint: r2, transfer: ot, toXYZ: Qt, fromXYZ: $t, luminanceCoefficients: n2, workingColorSpaceConfig: { unpackColorSpace: it }, outputColorSpaceConfig: { drawingBufferColorSpace: it } }, [it]: { primaries: t3, whitePoint: r2, transfer: st, toXYZ: Qt, fromXYZ: $t, luminanceCoefficients: n2, outputColorSpaceConfig: { drawingBufferColorSpace: it } } }), e17;
}
var K = en();
function tn(e17) {
  return e17 < 0.04045 ? e17 * 0.0773993808 : (e17 * 0.9478672986 + 0.0521327014) ** 2.4;
}
function nn(e17) {
  return e17 < 31308e-7 ? e17 * 12.92 : 1.055 * Math[i(1090)](e17, 0.41666) - 0.055;
}
var rn, an = class {
  static getDataURL(e17, t3 = `image/png`) {
    let n2 = i;
    if (/^data:/i.test(e17.src) || typeof HTMLCanvasElement > `u`) return e17.src;
    let r2;
    if (e17 instanceof HTMLCanvasElement) r2 = e17;
    else {
      rn === void 0 && (rn = pt(n2(1261))), rn.width = e17[n2(1505)], rn[n2(221)] = e17.height;
      let t4 = rn.getContext(`2d`);
      e17 instanceof ImageData ? t4.putImageData(e17, 0, 0) : t4.drawImage(e17, 0, 0, e17.width, e17.height), r2 = rn;
    }
    return r2.toDataURL(t3);
  }
  static [i(896)](e17) {
    let t3 = i;
    if (typeof HTMLImageElement < `u` && e17 instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e17 instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e17 instanceof ImageBitmap) {
      let n2 = pt(`canvas`);
      n2.width = e17.width, n2[t3(221)] = e17[t3(221)];
      let r2 = n2.getContext(`2d`);
      r2.drawImage(e17, 0, 0, e17.width, e17[t3(221)]);
      let i2 = r2.getImageData(0, 0, e17.width, e17.height), a2 = i2.data;
      for (let e18 = 0; e18 < a2.length; e18++) a2[e18] = tn(a2[e18] / 255) * 255;
      return r2.putImageData(i2, 0, 0), n2;
    } else if (e17.data) {
      let n2 = e17.data.slice(0);
      for (let e18 = 0; e18 < n2.length; e18++) n2 instanceof Uint8Array || n2 instanceof Uint8ClampedArray ? n2[e18] = Math[t3(425)](tn(n2[e18] / 255) * 255) : n2[e18] = tn(n2[e18]);
      return { data: n2, width: e17[t3(1505)], height: e17.height };
    } else return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`), e17;
  }
}, on = 0, sn = class {
  constructor(e17 = null) {
    let t3 = i;
    this.isSource = true, Object.defineProperty(this, "id", { value: on++ }), this.uuid = Dt(), this.data = e17, this[t3(1037)] = true, this.version = 0;
  }
  getSize(e17) {
    let t3 = i, n2 = this.data;
    return typeof HTMLVideoElement < `u` && n2 instanceof HTMLVideoElement ? e17[t3(1139)](n2.videoWidth, n2.videoHeight, 0) : typeof VideoFrame < `u` && n2 instanceof VideoFrame ? e17.set(n2.displayWidth, n2[t3(1302)], 0) : n2 === null ? e17.set(0, 0, 0) : e17.set(n2.width, n2[t3(221)], n2.depth || 0), e17;
  }
  set needsUpdate(e17) {
    let t3 = i;
    e17 === true && this[t3(235)]++;
  }
  toJSON(e17) {
    let t3 = i, n2 = e17 === void 0 || typeof e17 == `string`;
    if (!n2 && e17.images[this.uuid] !== void 0) return e17[t3(1332)][this.uuid];
    let r2 = { uuid: this.uuid, url: `` }, a2 = this[t3(1304)];
    if (a2 !== null) {
      let e18;
      if (Array[t3(1277)](a2)) {
        e18 = [];
        for (let t4 = 0, n3 = a2.length; t4 < n3; t4++) a2[t4].isDataTexture ? e18.push(cn(a2[t4].image)) : e18.push(cn(a2[t4]));
      } else e18 = cn(a2);
      r2.url = e18;
    }
    return n2 || (e17.images[this.uuid] = r2), r2;
  }
};
function cn(e17) {
  let t3 = i;
  return typeof HTMLImageElement < `u` && e17 instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e17 instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e17 instanceof ImageBitmap ? an.getDataURL(e17) : e17.data ? { data: Array.from(e17.data), width: e17[t3(1505)], height: e17.height, type: e17.data[t3(1178)][t3(1301)] } : (z(t3(396)), {});
}
var ln = 0, un = new W(), dn = class e2 extends St {
  constructor(t3 = e2.DEFAULT_IMAGE, n2 = e2.DEFAULT_MAPPING, r2 = v, a2 = v, o2 = C, s2 = T, c2 = N, l2 = E, u2 = e2.DEFAULT_ANISOTROPY, d2 = ``) {
    let f2 = i;
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: ln++ }), this.uuid = Dt(), this[f2(1301)] = ``, this[f2(996)] = new sn(t3), this.mipmaps = [], this.mapping = n2, this.channel = 0, this.wrapS = r2, this[f2(344)] = a2, this[f2(957)] = o2, this.minFilter = s2, this.anisotropy = u2, this.format = c2, this.internalFormat = null, this.type = l2, this.offset = new U(0, 0), this.repeat = new U(1, 1), this.center = new U(0, 0), this.rotation = 0, this[f2(875)] = true, this[f2(307)] = new G(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this[f2(541)] = d2, this.userData = {}, this[f2(1503)] = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(t3 && t3[f2(379)] && t3.depth > 1), this.pmremVersion = 0, this.normalized = false;
  }
  get width() {
    return this.source.getSize(un).x;
  }
  get height() {
    let e17 = i;
    return this[e17(996)].getSize(un).y;
  }
  get depth() {
    let e17 = i;
    return this[e17(996)].getSize(un).z;
  }
  get image() {
    let e17 = i;
    return this[e17(996)].data;
  }
  set [i(495)](e17) {
    this.source.data = e17;
  }
  updateMatrix() {
    let e17 = i;
    this.matrix.setUvTransform(this[e17(1377)].x, this.offset.y, this[e17(281)].x, this.repeat.y, this.rotation, this.center.x, this[e17(1388)].y);
  }
  addUpdateRange(e17, t3) {
    this.updateRanges.push({ start: e17, count: t3 });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e17) {
    let t3 = i;
    return this[t3(1301)] = e17.name, this.source = e17[t3(996)], this.mipmaps = e17.mipmaps[t3(883)](0), this.mapping = e17.mapping, this.channel = e17.channel, this[t3(286)] = e17[t3(286)], this.wrapT = e17.wrapT, this.magFilter = e17[t3(957)], this.minFilter = e17[t3(486)], this[t3(1091)] = e17.anisotropy, this.format = e17.format, this.internalFormat = e17.internalFormat, this.type = e17.type, this.normalized = e17.normalized, this[t3(1377)].copy(e17.offset), this.repeat.copy(e17.repeat), this.center.copy(e17[t3(1388)]), this.rotation = e17.rotation, this.matrixAutoUpdate = e17.matrixAutoUpdate, this.matrix.copy(e17[t3(307)]), this.generateMipmaps = e17.generateMipmaps, this.premultiplyAlpha = e17.premultiplyAlpha, this.flipY = e17.flipY, this.unpackAlignment = e17.unpackAlignment, this.colorSpace = e17.colorSpace, this.renderTarget = e17.renderTarget, this.isRenderTargetTexture = e17.isRenderTargetTexture, this.isArrayTexture = e17.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e17.userData)), this.needsUpdate = true, this;
  }
  setValues(e17) {
    let t3 = i;
    for (let n2 in e17) {
      let r2 = e17[n2];
      if (r2 === void 0) {
        z(t3(170) + n2 + `' has value of undefined.`);
        continue;
      }
      let i2 = this[n2];
      if (i2 === void 0) {
        z(`Texture.setValues(): property '` + n2 + `' does not exist.`);
        continue;
      }
      i2 && r2 && i2.isVector2 && r2.isVector2 || i2 && r2 && i2.isVector3 && r2.isVector3 || i2 && r2 && i2.isMatrix3 && r2.isMatrix3 ? i2.copy(r2) : this[n2] = r2;
    }
  }
  toJSON(e17) {
    let t3 = i, n2 = e17 === void 0 || typeof e17 == `string`;
    if (!n2 && e17.textures[this.uuid] !== void 0) return e17[t3(1324)][this.uuid];
    let r2 = { metadata: { version: 4.7, type: `Texture`, generator: `Texture.toJSON` }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e17)[t3(797)], mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, normalized: this.normalized, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this[t3(1091)], flipY: this.flipY, generateMipmaps: this[t3(1142)], premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this[t3(727)])[t3(660)] > 0 && (r2.userData = this.userData), n2 || (e17.textures[this.uuid] = r2), r2;
  }
  dispose() {
    let e17 = i;
    this.dispatchEvent({ type: e17(254) });
  }
  transformUv(e17) {
    let t3 = i;
    if (this.mapping !== 300) return e17;
    if (e17[t3(1425)](this.matrix), e17.x < 0 || e17.x > 1) switch (this.wrapS) {
      case _:
        e17.x -= Math[t3(425)](e17.x);
        break;
      case v:
        e17.x = e17.x < 0 ? 0 : 1;
        break;
      case y:
        Math.abs(Math.floor(e17.x) % 2) === 1 ? e17.x = Math[t3(182)](e17.x) - e17.x : e17.x -= Math.floor(e17.x);
        break;
    }
    if (e17.y < 0 || e17.y > 1) switch (this.wrapT) {
      case _:
        e17.y -= Math[t3(425)](e17.y);
        break;
      case v:
        e17.y = e17.y < 0 ? 0 : 1;
        break;
      case y:
        Math.abs(Math.floor(e17.y) % 2) === 1 ? e17.y = Math[t3(182)](e17.y) - e17.y : e17.y -= Math.floor(e17.y);
        break;
    }
    return this.flipY && (e17.y = 1 - e17.y), e17;
  }
  set needsUpdate(e17) {
    let t3 = i;
    e17 === true && (this.version++, this.source[t3(318)] = true);
  }
  set [i(1398)](e17) {
    e17 === true && this.pmremVersion++;
  }
};
dn.DEFAULT_IMAGE = null, dn.DEFAULT_MAPPING = 300, dn.DEFAULT_ANISOTROPY = 1, p = Symbol[i(709)];
var q = class {
  constructor(e17 = 0, t3 = 0, n2 = 0, r2 = 1) {
    this.x = e17, this.y = t3, this.z = n2, this.w = r2;
  }
  get width() {
    return this.z;
  }
  set width(e17) {
    this.z = e17;
  }
  get height() {
    return this.w;
  }
  set height(e17) {
    this.w = e17;
  }
  [i(1139)](e17, t3, n2, r2) {
    return this.x = e17, this.y = t3, this.z = n2, this.w = r2, this;
  }
  [i(1015)](e17) {
    return this.x = e17, this.y = e17, this.z = e17, this.w = e17, this;
  }
  setX(e17) {
    return this.x = e17, this;
  }
  setY(e17) {
    return this.y = e17, this;
  }
  setZ(e17) {
    return this.z = e17, this;
  }
  setW(e17) {
    return this.w = e17, this;
  }
  setComponent(e17, t3) {
    let n2 = i;
    switch (e17) {
      case 0:
        this.x = t3;
        break;
      case 1:
        this.y = t3;
        break;
      case 2:
        this.z = t3;
        break;
      case 3:
        this.w = t3;
        break;
      default:
        throw Error(n2(769) + e17);
    }
    return this;
  }
  getComponent(e17) {
    switch (e17) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw Error(`index is out of range: ` + e17);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e17) {
    return this.x = e17.x, this.y = e17.y, this.z = e17.z, this.w = e17.w === void 0 ? 1 : e17.w, this;
  }
  add(e17) {
    return this.x += e17.x, this.y += e17.y, this.z += e17.z, this.w += e17.w, this;
  }
  addScalar(e17) {
    return this.x += e17, this.y += e17, this.z += e17, this.w += e17, this;
  }
  [i(630)](e17, t3) {
    return this.x = e17.x + t3.x, this.y = e17.y + t3.y, this.z = e17.z + t3.z, this.w = e17.w + t3.w, this;
  }
  addScaledVector(e17, t3) {
    return this.x += e17.x * t3, this.y += e17.y * t3, this.z += e17.z * t3, this.w += e17.w * t3, this;
  }
  sub(e17) {
    return this.x -= e17.x, this.y -= e17.y, this.z -= e17.z, this.w -= e17.w, this;
  }
  subScalar(e17) {
    return this.x -= e17, this.y -= e17, this.z -= e17, this.w -= e17, this;
  }
  subVectors(e17, t3) {
    return this.x = e17.x - t3.x, this.y = e17.y - t3.y, this.z = e17.z - t3.z, this.w = e17.w - t3.w, this;
  }
  [i(407)](e17) {
    return this.x *= e17.x, this.y *= e17.y, this.z *= e17.z, this.w *= e17.w, this;
  }
  multiplyScalar(e17) {
    return this.x *= e17, this.y *= e17, this.z *= e17, this.w *= e17, this;
  }
  applyMatrix4(e17) {
    let t3 = this.x, n2 = this.y, r2 = this.z, i2 = this.w, a2 = e17.elements;
    return this.x = a2[0] * t3 + a2[4] * n2 + a2[8] * r2 + a2[12] * i2, this.y = a2[1] * t3 + a2[5] * n2 + a2[9] * r2 + a2[13] * i2, this.z = a2[2] * t3 + a2[6] * n2 + a2[10] * r2 + a2[14] * i2, this.w = a2[3] * t3 + a2[7] * n2 + a2[11] * r2 + a2[15] * i2, this;
  }
  divide(e17) {
    return this.x /= e17.x, this.y /= e17.y, this.z /= e17.z, this.w /= e17.w, this;
  }
  divideScalar(e17) {
    return this.multiplyScalar(1 / e17);
  }
  setAxisAngleFromQuaternion(e17) {
    let t3 = i;
    this.w = 2 * Math[t3(1097)](e17.w);
    let n2 = Math.sqrt(1 - e17.w * e17.w);
    return n2 < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e17.x / n2, this.y = e17.y / n2, this.z = e17.z / n2), this;
  }
  [i(1145)](e17) {
    let t3 = i, n2, r2, a2, o2, s2 = 0.01, c2 = 0.1, l2 = e17[t3(992)], u2 = l2[0], d2 = l2[4], f2 = l2[8], p2 = l2[1], m2 = l2[5], h2 = l2[9], g2 = l2[2], _2 = l2[6], v2 = l2[10];
    if (Math.abs(d2 - p2) < s2 && Math.abs(f2 - g2) < s2 && Math.abs(h2 - _2) < s2) {
      if (Math.abs(d2 + p2) < c2 && Math.abs(f2 + g2) < c2 && Math.abs(h2 + _2) < c2 && Math.abs(u2 + m2 + v2 - 3) < c2) return this.set(1, 0, 0, 0), this;
      n2 = Math.PI;
      let e18 = (u2 + 1) / 2, t4 = (m2 + 1) / 2, i2 = (v2 + 1) / 2, l3 = (d2 + p2) / 4, y3 = (f2 + g2) / 4, b2 = (h2 + _2) / 4;
      return e18 > t4 && e18 > i2 ? e18 < s2 ? (r2 = 0, a2 = 0.707106781, o2 = 0.707106781) : (r2 = Math.sqrt(e18), a2 = l3 / r2, o2 = y3 / r2) : t4 > i2 ? t4 < s2 ? (r2 = 0.707106781, a2 = 0, o2 = 0.707106781) : (a2 = Math.sqrt(t4), r2 = l3 / a2, o2 = b2 / a2) : i2 < s2 ? (r2 = 0.707106781, a2 = 0.707106781, o2 = 0) : (o2 = Math.sqrt(i2), r2 = y3 / o2, a2 = b2 / o2), this.set(r2, a2, o2, n2), this;
    }
    let y2 = Math[t3(1199)]((_2 - h2) * (_2 - h2) + (f2 - g2) * (f2 - g2) + (p2 - d2) * (p2 - d2));
    return Math.abs(y2) < 1e-3 && (y2 = 1), this.x = (_2 - h2) / y2, this.y = (f2 - g2) / y2, this.z = (p2 - d2) / y2, this.w = Math.acos((u2 + m2 + v2 - 1) / 2), this;
  }
  setFromMatrixPosition(e17) {
    let t3 = e17.elements;
    return this.x = t3[12], this.y = t3[13], this.z = t3[14], this.w = t3[15], this;
  }
  min(e17) {
    return this.x = Math.min(this.x, e17.x), this.y = Math.min(this.y, e17.y), this.z = Math.min(this.z, e17.z), this.w = Math.min(this.w, e17.w), this;
  }
  max(e17) {
    let t3 = i;
    return this.x = Math[t3(1023)](this.x, e17.x), this.y = Math.max(this.y, e17.y), this.z = Math.max(this.z, e17.z), this.w = Math.max(this.w, e17.w), this;
  }
  clamp(e17, t3) {
    return this.x = V(this.x, e17.x, t3.x), this.y = V(this.y, e17.y, t3.y), this.z = V(this.z, e17.z, t3.z), this.w = V(this.w, e17.w, t3.w), this;
  }
  clampScalar(e17, t3) {
    return this.x = V(this.x, e17, t3), this.y = V(this.y, e17, t3), this.z = V(this.z, e17, t3), this.w = V(this.w, e17, t3), this;
  }
  clampLength(e17, t3) {
    let n2 = this.length();
    return this.divideScalar(n2 || 1).multiplyScalar(V(n2, e17, t3));
  }
  [i(425)]() {
    let e17 = i;
    return this.x = Math[e17(425)](this.x), this.y = Math[e17(425)](this.y), this.z = Math.floor(this.z), this.w = Math[e17(425)](this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    let e17 = i;
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math[e17(866)](this.w), this;
  }
  roundToZero() {
    let e17 = i;
    return this.x = Math[e17(266)](this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  [i(736)]() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  [i(1336)](e17) {
    return this.x * e17.x + this.y * e17.y + this.z * e17.z + this.w * e17.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    let e17 = i;
    return Math.abs(this.x) + Math.abs(this.y) + Math[e17(1513)](this.z) + Math.abs(this.w);
  }
  normalize() {
    let e17 = i;
    return this[e17(1423)](this.length() || 1);
  }
  setLength(e17) {
    return this.normalize().multiplyScalar(e17);
  }
  [i(1102)](e17, t3) {
    return this.x += (e17.x - this.x) * t3, this.y += (e17.y - this.y) * t3, this.z += (e17.z - this.z) * t3, this.w += (e17.w - this.w) * t3, this;
  }
  [i(433)](e17, t3, n2) {
    return this.x = e17.x + (t3.x - e17.x) * n2, this.y = e17.y + (t3.y - e17.y) * n2, this.z = e17.z + (t3.z - e17.z) * n2, this.w = e17.w + (t3.w - e17.w) * n2, this;
  }
  equals(e17) {
    return e17.x === this.x && e17.y === this.y && e17.z === this.z && e17.w === this.w;
  }
  fromArray(e17, t3 = 0) {
    return this.x = e17[t3], this.y = e17[t3 + 1], this.z = e17[t3 + 2], this.w = e17[t3 + 3], this;
  }
  [i(1263)](e17 = [], t3 = 0) {
    return e17[t3] = this.x, e17[t3 + 1] = this.y, e17[t3 + 2] = this.z, e17[t3 + 3] = this.w, e17;
  }
  fromBufferAttribute(e17, t3) {
    return this.x = e17.getX(t3), this.y = e17.getY(t3), this.z = e17.getZ(t3), this.w = e17.getW(t3), this;
  }
  random() {
    let e17 = i;
    return this.x = Math[e17(1449)](), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[p]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
};
c = q, c.prototype.isVector4 = true;
var fn = class extends St {
  constructor(e17 = 1, t3 = 1, n2 = {}) {
    let r2 = i;
    super(), n2 = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: C, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false }, n2), this[r2(677)] = true, this.width = e17, this.height = t3, this.depth = n2.depth, this.scissor = new q(0, 0, e17, t3), this[r2(597)] = false, this.viewport = new q(0, 0, e17, t3), this.textures = [];
    let a2 = new dn({ width: e17, height: t3, depth: n2[r2(379)] }), o2 = n2.count;
    for (let e18 = 0; e18 < o2; e18++) this.textures[e18] = a2[r2(443)](), this.textures[e18].isRenderTargetTexture = true, this.textures[e18].renderTarget = this;
    this[r2(389)](n2), this.depthBuffer = n2.depthBuffer, this.stencilBuffer = n2.stencilBuffer, this.resolveDepthBuffer = n2.resolveDepthBuffer, this[r2(263)] = n2[r2(263)], this._depthTexture = null, this.depthTexture = n2.depthTexture, this.samples = n2.samples, this.multiview = n2.multiview;
  }
  _setTextureOptions(e17 = {}) {
    let t3 = i, n2 = { minFilter: C, generateMipmaps: false, flipY: false, internalFormat: null };
    e17.mapping !== void 0 && (n2[t3(1315)] = e17.mapping), e17.wrapS !== void 0 && (n2.wrapS = e17.wrapS), e17.wrapT !== void 0 && (n2.wrapT = e17.wrapT), e17.wrapR !== void 0 && (n2.wrapR = e17.wrapR), e17[t3(957)] !== void 0 && (n2.magFilter = e17.magFilter), e17.minFilter !== void 0 && (n2[t3(486)] = e17[t3(486)]), e17.format !== void 0 && (n2[t3(253)] = e17[t3(253)]), e17.type !== void 0 && (n2.type = e17.type), e17.anisotropy !== void 0 && (n2.anisotropy = e17[t3(1091)]), e17.colorSpace !== void 0 && (n2.colorSpace = e17.colorSpace), e17.flipY !== void 0 && (n2.flipY = e17.flipY), e17.generateMipmaps !== void 0 && (n2[t3(1142)] = e17.generateMipmaps), e17[t3(372)] !== void 0 && (n2.internalFormat = e17.internalFormat);
    for (let e18 = 0; e18 < this.textures[t3(660)]; e18++) this.textures[e18].setValues(n2);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e17) {
    this.textures[0] = e17;
  }
  set depthTexture(e17) {
    let t3 = i;
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e17 !== null && (e17[t3(1479)] = this), this._depthTexture = e17;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e17, t3, n2 = 1) {
    let r2 = i;
    if (this.width !== e17 || this.height !== t3 || this.depth !== n2) {
      this[r2(1505)] = e17, this.height = t3, this.depth = n2;
      for (let i2 = 0, a2 = this.textures.length; i2 < a2; i2++) this.textures[i2].image.width = e17, this.textures[i2].image[r2(221)] = t3, this.textures[i2].image[r2(379)] = n2, this.textures[i2].isData3DTexture !== true && (this.textures[i2].isArrayTexture = this.textures[i2].image.depth > 1);
      this.dispose();
    }
    this[r2(436)].set(0, 0, e17, t3), this.scissor.set(0, 0, e17, t3);
  }
  [i(443)]() {
    return new this.constructor().copy(this);
  }
  copy(e17) {
    let t3 = i;
    this.width = e17.width, this[t3(221)] = e17.height, this.depth = e17.depth, this.scissor.copy(e17[t3(446)]), this[t3(597)] = e17.scissorTest, this[t3(436)].copy(e17.viewport), this[t3(1324)].length = 0;
    for (let n2 = 0, r2 = e17.textures[t3(660)]; n2 < r2; n2++) {
      this[t3(1324)][n2] = e17[t3(1324)][n2].clone(), this.textures[n2].isRenderTargetTexture = true, this.textures[n2].renderTarget = this;
      let r3 = Object.assign({}, e17.textures[n2].image);
      this[t3(1324)][n2].source = new sn(r3);
    }
    return this.depthBuffer = e17[t3(1089)], this.stencilBuffer = e17.stencilBuffer, this.resolveDepthBuffer = e17.resolveDepthBuffer, this.resolveStencilBuffer = e17.resolveStencilBuffer, e17.depthTexture !== null && (this.depthTexture = e17.depthTexture.clone()), this[t3(1026)] = e17[t3(1026)], this.multiview = e17[t3(1019)], this;
  }
  dispose() {
    let e17 = i;
    this[e17(516)]({ type: `dispose` });
  }
}, pn = class extends fn {
  constructor(e17 = 1, t3 = 1, n2 = {}) {
    super(e17, t3, n2), this.isWebGLRenderTarget = true;
  }
}, mn = class extends dn {
  constructor(e17 = null, t3 = 1, n2 = 1, r2 = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e17, width: t3, height: n2, depth: r2 }, this.magFilter = b, this.minFilter = b, this.wrapR = v, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e17) {
    let t3 = i;
    this.layerUpdates[t3(1034)](e17);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}, hn = class extends dn {
  constructor(e17 = null, t3 = 1, n2 = 1, r2 = 1) {
    let a2 = i;
    super(null), this.isData3DTexture = true, this.image = { data: e17, width: t3, height: n2, depth: r2 }, this.magFilter = b, this.minFilter = b, this[a2(1487)] = v, this.generateMipmaps = false, this.flipY = false, this[a2(1024)] = 1;
  }
}, J = class e3 {
  constructor(e17, t3, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2) {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e17 !== void 0 && this.set(e17, t3, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2);
  }
  set(e17, t3, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2) {
    let g2 = this.elements;
    return g2[0] = e17, g2[4] = t3, g2[8] = n2, g2[12] = r2, g2[1] = i2, g2[5] = a2, g2[9] = o2, g2[13] = s2, g2[2] = c2, g2[6] = l2, g2[10] = u2, g2[14] = d2, g2[3] = f2, g2[7] = p2, g2[11] = m2, g2[15] = h2, this;
  }
  identity() {
    let e17 = i;
    return this[e17(1139)](1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new e3().fromArray(this.elements);
  }
  [i(1250)](e17) {
    let t3 = this.elements, n2 = e17.elements;
    return t3[0] = n2[0], t3[1] = n2[1], t3[2] = n2[2], t3[3] = n2[3], t3[4] = n2[4], t3[5] = n2[5], t3[6] = n2[6], t3[7] = n2[7], t3[8] = n2[8], t3[9] = n2[9], t3[10] = n2[10], t3[11] = n2[11], t3[12] = n2[12], t3[13] = n2[13], t3[14] = n2[14], t3[15] = n2[15], this;
  }
  [i(383)](e17) {
    let t3 = i, n2 = this[t3(992)], r2 = e17[t3(992)];
    return n2[12] = r2[12], n2[13] = r2[13], n2[14] = r2[14], this;
  }
  setFromMatrix3(e17) {
    let t3 = e17[i(992)];
    return this.set(t3[0], t3[3], t3[6], 0, t3[1], t3[4], t3[7], 0, t3[2], t3[5], t3[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e17, t3, n2) {
    let r2 = i;
    return this.determinant() === 0 ? (e17.set(1, 0, 0), t3[r2(1139)](0, 1, 0), n2.set(0, 0, 1), this) : (e17.setFromMatrixColumn(this, 0), t3.setFromMatrixColumn(this, 1), n2.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(e17, t3, n2) {
    let r2 = i;
    return this[r2(1139)](e17.x, t3.x, n2.x, 0, e17.y, t3.y, n2.y, 0, e17.z, t3.z, n2.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e17) {
    let t3 = i;
    if (e17[t3(1397)]() === 0) return this.identity();
    let n2 = this.elements, r2 = e17.elements, a2 = 1 / gn[t3(1488)](e17, 0).length(), o2 = 1 / gn.setFromMatrixColumn(e17, 1)[t3(660)](), s2 = 1 / gn.setFromMatrixColumn(e17, 2).length();
    return n2[0] = r2[0] * a2, n2[1] = r2[1] * a2, n2[2] = r2[2] * a2, n2[3] = 0, n2[4] = r2[4] * o2, n2[5] = r2[5] * o2, n2[6] = r2[6] * o2, n2[7] = 0, n2[8] = r2[8] * s2, n2[9] = r2[9] * s2, n2[10] = r2[10] * s2, n2[11] = 0, n2[12] = 0, n2[13] = 0, n2[14] = 0, n2[15] = 1, this;
  }
  makeRotationFromEuler(e17) {
    let t3 = i, n2 = this.elements, r2 = e17.x, a2 = e17.y, o2 = e17.z, s2 = Math.cos(r2), c2 = Math[t3(547)](r2), l2 = Math[t3(339)](a2), u2 = Math.sin(a2), d2 = Math.cos(o2), f2 = Math.sin(o2);
    if (e17[t3(1107)] === `XYZ`) {
      let e18 = s2 * d2, t4 = s2 * f2, r3 = c2 * d2, i2 = c2 * f2;
      n2[0] = l2 * d2, n2[4] = -l2 * f2, n2[8] = u2, n2[1] = t4 + r3 * u2, n2[5] = e18 - i2 * u2, n2[9] = -c2 * l2, n2[2] = i2 - e18 * u2, n2[6] = r3 + t4 * u2, n2[10] = s2 * l2;
    } else if (e17.order === `YXZ`) {
      let e18 = l2 * d2, t4 = l2 * f2, r3 = u2 * d2, i2 = u2 * f2;
      n2[0] = e18 + i2 * c2, n2[4] = r3 * c2 - t4, n2[8] = s2 * u2, n2[1] = s2 * f2, n2[5] = s2 * d2, n2[9] = -c2, n2[2] = t4 * c2 - r3, n2[6] = i2 + e18 * c2, n2[10] = s2 * l2;
    } else if (e17[t3(1107)] === `ZXY`) {
      let e18 = l2 * d2, t4 = l2 * f2, r3 = u2 * d2, i2 = u2 * f2;
      n2[0] = e18 - i2 * c2, n2[4] = -s2 * f2, n2[8] = r3 + t4 * c2, n2[1] = t4 + r3 * c2, n2[5] = s2 * d2, n2[9] = i2 - e18 * c2, n2[2] = -s2 * u2, n2[6] = c2, n2[10] = s2 * l2;
    } else if (e17.order === t3(1411)) {
      let e18 = s2 * d2, t4 = s2 * f2, r3 = c2 * d2, i2 = c2 * f2;
      n2[0] = l2 * d2, n2[4] = r3 * u2 - t4, n2[8] = e18 * u2 + i2, n2[1] = l2 * f2, n2[5] = i2 * u2 + e18, n2[9] = t4 * u2 - r3, n2[2] = -u2, n2[6] = c2 * l2, n2[10] = s2 * l2;
    } else if (e17.order === `YZX`) {
      let e18 = s2 * l2, t4 = s2 * u2, r3 = c2 * l2, i2 = c2 * u2;
      n2[0] = l2 * d2, n2[4] = i2 - e18 * f2, n2[8] = r3 * f2 + t4, n2[1] = f2, n2[5] = s2 * d2, n2[9] = -c2 * d2, n2[2] = -u2 * d2, n2[6] = t4 * f2 + r3, n2[10] = e18 - i2 * f2;
    } else if (e17.order === `XZY`) {
      let e18 = s2 * l2, t4 = s2 * u2, r3 = c2 * l2, i2 = c2 * u2;
      n2[0] = l2 * d2, n2[4] = -f2, n2[8] = u2 * d2, n2[1] = e18 * f2 + i2, n2[5] = s2 * d2, n2[9] = t4 * f2 - r3, n2[2] = r3 * f2 - t4, n2[6] = c2 * d2, n2[10] = i2 * f2 + e18;
    }
    return n2[3] = 0, n2[7] = 0, n2[11] = 0, n2[12] = 0, n2[13] = 0, n2[14] = 0, n2[15] = 1, this;
  }
  makeRotationFromQuaternion(e17) {
    return this.compose(vn, e17, yn);
  }
  lookAt(e17, t3, n2) {
    let r2 = i, a2 = this.elements;
    return Sn.subVectors(e17, t3), Sn.lengthSq() === 0 && (Sn.z = 1), Sn.normalize(), bn.crossVectors(n2, Sn), bn.lengthSq() === 0 && (Math[r2(1513)](n2.z) === 1 ? Sn.x += 1e-4 : Sn.z += 1e-4, Sn.normalize(), bn.crossVectors(n2, Sn)), bn[r2(473)](), xn[r2(336)](Sn, bn), a2[0] = bn.x, a2[4] = xn.x, a2[8] = Sn.x, a2[1] = bn.y, a2[5] = xn.y, a2[9] = Sn.y, a2[2] = bn.z, a2[6] = xn.z, a2[10] = Sn.z, this;
  }
  multiply(e17) {
    return this.multiplyMatrices(this, e17);
  }
  premultiply(e17) {
    return this.multiplyMatrices(e17, this);
  }
  multiplyMatrices(e17, t3) {
    let n2 = e17[i(992)], r2 = t3.elements, a2 = this.elements, o2 = n2[0], s2 = n2[4], c2 = n2[8], l2 = n2[12], u2 = n2[1], d2 = n2[5], f2 = n2[9], p2 = n2[13], m2 = n2[2], h2 = n2[6], g2 = n2[10], _2 = n2[14], v2 = n2[3], y2 = n2[7], b2 = n2[11], x2 = n2[15], S2 = r2[0], C2 = r2[4], w2 = r2[8], T2 = r2[12], E2 = r2[1], D2 = r2[5], O2 = r2[9], k2 = r2[13], A2 = r2[2], ee2 = r2[6], j2 = r2[10], te2 = r2[14], ne2 = r2[3], M2 = r2[7], re2 = r2[11], ie2 = r2[15];
    return a2[0] = o2 * S2 + s2 * E2 + c2 * A2 + l2 * ne2, a2[4] = o2 * C2 + s2 * D2 + c2 * ee2 + l2 * M2, a2[8] = o2 * w2 + s2 * O2 + c2 * j2 + l2 * re2, a2[12] = o2 * T2 + s2 * k2 + c2 * te2 + l2 * ie2, a2[1] = u2 * S2 + d2 * E2 + f2 * A2 + p2 * ne2, a2[5] = u2 * C2 + d2 * D2 + f2 * ee2 + p2 * M2, a2[9] = u2 * w2 + d2 * O2 + f2 * j2 + p2 * re2, a2[13] = u2 * T2 + d2 * k2 + f2 * te2 + p2 * ie2, a2[2] = m2 * S2 + h2 * E2 + g2 * A2 + _2 * ne2, a2[6] = m2 * C2 + h2 * D2 + g2 * ee2 + _2 * M2, a2[10] = m2 * w2 + h2 * O2 + g2 * j2 + _2 * re2, a2[14] = m2 * T2 + h2 * k2 + g2 * te2 + _2 * ie2, a2[3] = v2 * S2 + y2 * E2 + b2 * A2 + x2 * ne2, a2[7] = v2 * C2 + y2 * D2 + b2 * ee2 + x2 * M2, a2[11] = v2 * w2 + y2 * O2 + b2 * j2 + x2 * re2, a2[15] = v2 * T2 + y2 * k2 + b2 * te2 + x2 * ie2, this;
  }
  multiplyScalar(e17) {
    let t3 = this.elements;
    return t3[0] *= e17, t3[4] *= e17, t3[8] *= e17, t3[12] *= e17, t3[1] *= e17, t3[5] *= e17, t3[9] *= e17, t3[13] *= e17, t3[2] *= e17, t3[6] *= e17, t3[10] *= e17, t3[14] *= e17, t3[3] *= e17, t3[7] *= e17, t3[11] *= e17, t3[15] *= e17, this;
  }
  determinant() {
    let e17 = this.elements, t3 = e17[0], n2 = e17[4], r2 = e17[8], i2 = e17[12], a2 = e17[1], o2 = e17[5], s2 = e17[9], c2 = e17[13], l2 = e17[2], u2 = e17[6], d2 = e17[10], f2 = e17[14], p2 = e17[3], m2 = e17[7], h2 = e17[11], g2 = e17[15], _2 = s2 * f2 - c2 * d2, v2 = o2 * f2 - c2 * u2, y2 = o2 * d2 - s2 * u2, b2 = a2 * f2 - c2 * l2, x2 = a2 * d2 - s2 * l2, S2 = a2 * u2 - o2 * l2;
    return t3 * (m2 * _2 - h2 * v2 + g2 * y2) - n2 * (p2 * _2 - h2 * b2 + g2 * x2) + r2 * (p2 * v2 - m2 * b2 + g2 * S2) - i2 * (p2 * y2 - m2 * x2 + h2 * S2);
  }
  [i(925)]() {
    let e17 = this.elements, t3;
    return t3 = e17[1], e17[1] = e17[4], e17[4] = t3, t3 = e17[2], e17[2] = e17[8], e17[8] = t3, t3 = e17[6], e17[6] = e17[9], e17[9] = t3, t3 = e17[3], e17[3] = e17[12], e17[12] = t3, t3 = e17[7], e17[7] = e17[13], e17[13] = t3, t3 = e17[11], e17[11] = e17[14], e17[14] = t3, this;
  }
  setPosition(e17, t3, n2) {
    let r2 = i, a2 = this.elements;
    return e17[r2(1236)] ? (a2[12] = e17.x, a2[13] = e17.y, a2[14] = e17.z) : (a2[12] = e17, a2[13] = t3, a2[14] = n2), this;
  }
  invert() {
    let e17 = this.elements, t3 = e17[0], n2 = e17[1], r2 = e17[2], i2 = e17[3], a2 = e17[4], o2 = e17[5], s2 = e17[6], c2 = e17[7], l2 = e17[8], u2 = e17[9], d2 = e17[10], f2 = e17[11], p2 = e17[12], m2 = e17[13], h2 = e17[14], g2 = e17[15], _2 = t3 * o2 - n2 * a2, v2 = t3 * s2 - r2 * a2, y2 = t3 * c2 - i2 * a2, b2 = n2 * s2 - r2 * o2, x2 = n2 * c2 - i2 * o2, S2 = r2 * c2 - i2 * s2, C2 = l2 * m2 - u2 * p2, w2 = l2 * h2 - d2 * p2, T2 = l2 * g2 - f2 * p2, E2 = u2 * h2 - d2 * m2, D2 = u2 * g2 - f2 * m2, O2 = d2 * g2 - f2 * h2, k2 = _2 * O2 - v2 * D2 + y2 * E2 + b2 * T2 - x2 * w2 + S2 * C2;
    if (k2 === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let A2 = 1 / k2;
    return e17[0] = (o2 * O2 - s2 * D2 + c2 * E2) * A2, e17[1] = (r2 * D2 - n2 * O2 - i2 * E2) * A2, e17[2] = (m2 * S2 - h2 * x2 + g2 * b2) * A2, e17[3] = (d2 * x2 - u2 * S2 - f2 * b2) * A2, e17[4] = (s2 * T2 - a2 * O2 - c2 * w2) * A2, e17[5] = (t3 * O2 - r2 * T2 + i2 * w2) * A2, e17[6] = (h2 * y2 - p2 * S2 - g2 * v2) * A2, e17[7] = (l2 * S2 - d2 * y2 + f2 * v2) * A2, e17[8] = (a2 * D2 - o2 * T2 + c2 * C2) * A2, e17[9] = (n2 * T2 - t3 * D2 - i2 * C2) * A2, e17[10] = (p2 * x2 - m2 * y2 + g2 * _2) * A2, e17[11] = (u2 * y2 - l2 * x2 - f2 * _2) * A2, e17[12] = (o2 * w2 - a2 * E2 - s2 * C2) * A2, e17[13] = (t3 * E2 - n2 * w2 + r2 * C2) * A2, e17[14] = (m2 * v2 - p2 * b2 - h2 * _2) * A2, e17[15] = (l2 * b2 - u2 * v2 + d2 * _2) * A2, this;
  }
  [i(542)](e17) {
    let t3 = this.elements, n2 = e17.x, r2 = e17.y, i2 = e17.z;
    return t3[0] *= n2, t3[4] *= r2, t3[8] *= i2, t3[1] *= n2, t3[5] *= r2, t3[9] *= i2, t3[2] *= n2, t3[6] *= r2, t3[10] *= i2, t3[3] *= n2, t3[7] *= r2, t3[11] *= i2, this;
  }
  getMaxScaleOnAxis() {
    let e17 = i, t3 = this.elements, n2 = t3[0] * t3[0] + t3[1] * t3[1] + t3[2] * t3[2], r2 = t3[4] * t3[4] + t3[5] * t3[5] + t3[6] * t3[6], a2 = t3[8] * t3[8] + t3[9] * t3[9] + t3[10] * t3[10];
    return Math[e17(1199)](Math.max(n2, r2, a2));
  }
  makeTranslation(e17, t3, n2) {
    return e17[i(1236)] ? this.set(1, 0, 0, e17.x, 0, 1, 0, e17.y, 0, 0, 1, e17.z, 0, 0, 0, 1) : this.set(1, 0, 0, e17, 0, 1, 0, t3, 0, 0, 1, n2, 0, 0, 0, 1), this;
  }
  makeRotationX(e17) {
    let t3 = Math.cos(e17), n2 = Math.sin(e17);
    return this.set(1, 0, 0, 0, 0, t3, -n2, 0, 0, n2, t3, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e17) {
    let t3 = Math.cos(e17), n2 = Math.sin(e17);
    return this.set(t3, 0, n2, 0, 0, 1, 0, 0, -n2, 0, t3, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e17) {
    let t3 = i, n2 = Math[t3(339)](e17), r2 = Math[t3(547)](e17);
    return this.set(n2, -r2, 0, 0, r2, n2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e17, t3) {
    let n2 = Math.cos(t3), r2 = Math.sin(t3), i2 = 1 - n2, a2 = e17.x, o2 = e17.y, s2 = e17.z, c2 = i2 * a2, l2 = i2 * o2;
    return this.set(c2 * a2 + n2, c2 * o2 - r2 * s2, c2 * s2 + r2 * o2, 0, c2 * o2 + r2 * s2, l2 * o2 + n2, l2 * s2 - r2 * a2, 0, c2 * s2 - r2 * o2, l2 * s2 + r2 * a2, i2 * s2 * s2 + n2, 0, 0, 0, 0, 1), this;
  }
  makeScale(e17, t3, n2) {
    return this.set(e17, 0, 0, 0, 0, t3, 0, 0, 0, 0, n2, 0, 0, 0, 0, 1), this;
  }
  makeShear(e17, t3, n2, r2, a2, o2) {
    let s2 = i;
    return this[s2(1139)](1, n2, a2, 0, e17, 1, o2, 0, t3, r2, 1, 0, 0, 0, 0, 1), this;
  }
  [i(1396)](e17, t3, n2) {
    let r2 = this.elements, i2 = t3._x, a2 = t3._y, o2 = t3._z, s2 = t3._w, c2 = i2 + i2, l2 = a2 + a2, u2 = o2 + o2, d2 = i2 * c2, f2 = i2 * l2, p2 = i2 * u2, m2 = a2 * l2, h2 = a2 * u2, g2 = o2 * u2, _2 = s2 * c2, v2 = s2 * l2, y2 = s2 * u2, b2 = n2.x, x2 = n2.y, S2 = n2.z;
    return r2[0] = (1 - (m2 + g2)) * b2, r2[1] = (f2 + y2) * b2, r2[2] = (p2 - v2) * b2, r2[3] = 0, r2[4] = (f2 - y2) * x2, r2[5] = (1 - (d2 + g2)) * x2, r2[6] = (h2 + _2) * x2, r2[7] = 0, r2[8] = (p2 + v2) * S2, r2[9] = (h2 - _2) * S2, r2[10] = (1 - (d2 + m2)) * S2, r2[11] = 0, r2[12] = e17.x, r2[13] = e17.y, r2[14] = e17.z, r2[15] = 1, this;
  }
  decompose(e17, t3, n2) {
    let r2 = i, a2 = this[r2(992)];
    e17.x = a2[12], e17.y = a2[13], e17.z = a2[14];
    let o2 = this.determinant();
    if (o2 === 0) return n2.set(1, 1, 1), t3.identity(), this;
    let s2 = gn.set(a2[0], a2[1], a2[2])[r2(660)](), c2 = gn.set(a2[4], a2[5], a2[6]).length(), l2 = gn.set(a2[8], a2[9], a2[10]).length();
    o2 < 0 && (s2 = -s2), _n.copy(this);
    let u2 = 1 / s2, d2 = 1 / c2, f2 = 1 / l2;
    return _n.elements[0] *= u2, _n[r2(992)][1] *= u2, _n.elements[2] *= u2, _n[r2(992)][4] *= d2, _n.elements[5] *= d2, _n.elements[6] *= d2, _n.elements[8] *= f2, _n.elements[9] *= f2, _n[r2(992)][10] *= f2, t3.setFromRotationMatrix(_n), n2.x = s2, n2.y = c2, n2.z = l2, this;
  }
  makePerspective(e17, t3, n2, r2, i2, a2, o2 = ut, s2 = false) {
    let c2 = this.elements, l2 = 2 * i2 / (t3 - e17), u2 = 2 * i2 / (n2 - r2), d2 = (t3 + e17) / (t3 - e17), f2 = (n2 + r2) / (n2 - r2), p2, m2;
    if (s2) p2 = i2 / (a2 - i2), m2 = a2 * i2 / (a2 - i2);
    else if (o2 === 2e3) p2 = -(a2 + i2) / (a2 - i2), m2 = -2 * a2 * i2 / (a2 - i2);
    else if (o2 === 2001) p2 = -a2 / (a2 - i2), m2 = -a2 * i2 / (a2 - i2);
    else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: ` + o2);
    return c2[0] = l2, c2[4] = 0, c2[8] = d2, c2[12] = 0, c2[1] = 0, c2[5] = u2, c2[9] = f2, c2[13] = 0, c2[2] = 0, c2[6] = 0, c2[10] = p2, c2[14] = m2, c2[3] = 0, c2[7] = 0, c2[11] = -1, c2[15] = 0, this;
  }
  makeOrthographic(e17, t3, n2, r2, i2, a2, o2 = ut, s2 = false) {
    let c2 = this.elements, l2 = 2 / (t3 - e17), u2 = 2 / (n2 - r2), d2 = -(t3 + e17) / (t3 - e17), f2 = -(n2 + r2) / (n2 - r2), p2, m2;
    if (s2) p2 = 1 / (a2 - i2), m2 = a2 / (a2 - i2);
    else if (o2 === 2e3) p2 = -2 / (a2 - i2), m2 = -(a2 + i2) / (a2 - i2);
    else if (o2 === 2001) p2 = -1 / (a2 - i2), m2 = -i2 / (a2 - i2);
    else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ` + o2);
    return c2[0] = l2, c2[4] = 0, c2[8] = 0, c2[12] = d2, c2[1] = 0, c2[5] = u2, c2[9] = 0, c2[13] = f2, c2[2] = 0, c2[6] = 0, c2[10] = p2, c2[14] = m2, c2[3] = 0, c2[7] = 0, c2[11] = 0, c2[15] = 1, this;
  }
  equals(e17) {
    let t3 = i, n2 = this[t3(992)], r2 = e17[t3(992)];
    for (let e18 = 0; e18 < 16; e18++) if (n2[e18] !== r2[e18]) return false;
    return true;
  }
  fromArray(e17, t3 = 0) {
    for (let n2 = 0; n2 < 16; n2++) this.elements[n2] = e17[n2 + t3];
    return this;
  }
  toArray(e17 = [], t3 = 0) {
    let n2 = this.elements;
    return e17[t3] = n2[0], e17[t3 + 1] = n2[1], e17[t3 + 2] = n2[2], e17[t3 + 3] = n2[3], e17[t3 + 4] = n2[4], e17[t3 + 5] = n2[5], e17[t3 + 6] = n2[6], e17[t3 + 7] = n2[7], e17[t3 + 8] = n2[8], e17[t3 + 9] = n2[9], e17[t3 + 10] = n2[10], e17[t3 + 11] = n2[11], e17[t3 + 12] = n2[12], e17[t3 + 13] = n2[13], e17[t3 + 14] = n2[14], e17[t3 + 15] = n2[15], e17;
  }
};
l = J, l[i(688)].isMatrix4 = true;
var gn = new W(), _n = new J(), vn = new W(0, 0, 0), yn = new W(1, 1, 1), bn = new W(), xn = new W(), Sn = new W(), Cn = new J(), wn = new Jt(), Tn = class e4 {
  constructor(t3 = 0, n2 = 0, r2 = 0, a2 = e4.DEFAULT_ORDER) {
    let o2 = i;
    this.isEuler = true, this._x = t3, this._y = n2, this._z = r2, this[o2(190)] = a2;
  }
  get x() {
    return this._x;
  }
  set x(e17) {
    let t3 = i;
    this._x = e17, this[t3(1463)]();
  }
  get y() {
    return this._y;
  }
  set y(e17) {
    let t3 = i;
    this._y = e17, this[t3(1463)]();
  }
  get z() {
    return this._z;
  }
  set z(e17) {
    this._z = e17, this._onChangeCallback();
  }
  get order() {
    let e17 = i;
    return this[e17(190)];
  }
  set order(e17) {
    let t3 = i;
    this._order = e17, this[t3(1463)]();
  }
  set(e17, t3, n2, r2 = this._order) {
    return this._x = e17, this._y = t3, this._z = n2, this._order = r2, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e17) {
    let t3 = i;
    return this._x = e17._x, this._y = e17._y, this._z = e17._z, this._order = e17[t3(190)], this[t3(1463)](), this;
  }
  setFromRotationMatrix(e17, t3 = this._order, n2 = true) {
    let r2 = i, a2 = e17.elements, o2 = a2[0], s2 = a2[4], c2 = a2[8], l2 = a2[1], u2 = a2[5], d2 = a2[9], f2 = a2[2], p2 = a2[6], m2 = a2[10];
    switch (t3) {
      case r2(1369):
        this._y = Math.asin(V(c2, -1, 1)), Math[r2(1513)](c2) < 0.9999999 ? (this._x = Math.atan2(-d2, m2), this._z = Math[r2(1348)](-s2, o2)) : (this._x = Math[r2(1348)](p2, u2), this._z = 0);
        break;
      case `YXZ`:
        this._x = Math.asin(-V(d2, -1, 1)), Math.abs(d2) < 0.9999999 ? (this._y = Math.atan2(c2, m2), this._z = Math[r2(1348)](l2, u2)) : (this._y = Math.atan2(-f2, o2), this._z = 0);
        break;
      case `ZXY`:
        this._x = Math.asin(V(p2, -1, 1)), Math[r2(1513)](p2) < 0.9999999 ? (this._y = Math.atan2(-f2, m2), this._z = Math.atan2(-s2, u2)) : (this._y = 0, this._z = Math.atan2(l2, o2));
        break;
      case `ZYX`:
        this._y = Math[r2(341)](-V(f2, -1, 1)), Math.abs(f2) < 0.9999999 ? (this._x = Math.atan2(p2, m2), this._z = Math.atan2(l2, o2)) : (this._x = 0, this._z = Math.atan2(-s2, u2));
        break;
      case r2(496):
        this._z = Math.asin(V(l2, -1, 1)), Math[r2(1513)](l2) < 0.9999999 ? (this._x = Math.atan2(-d2, u2), this._y = Math.atan2(-f2, o2)) : (this._x = 0, this._y = Math.atan2(c2, m2));
        break;
      case r2(1441):
        this._z = Math.asin(-V(s2, -1, 1)), Math.abs(s2) < 0.9999999 ? (this._x = Math.atan2(p2, u2), this._y = Math.atan2(c2, o2)) : (this._x = Math.atan2(-d2, m2), this._y = 0);
        break;
      default:
        z(`Euler: .setFromRotationMatrix() encountered an unknown order: ` + t3);
    }
    return this._order = t3, n2 === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e17, t3, n2) {
    return Cn.makeRotationFromQuaternion(e17), this.setFromRotationMatrix(Cn, t3, n2);
  }
  setFromVector3(e17, t3 = this._order) {
    return this.set(e17.x, e17.y, e17.z, t3);
  }
  reorder(e17) {
    return wn.setFromEuler(this), this.setFromQuaternion(wn, e17);
  }
  equals(e17) {
    return e17._x === this._x && e17._y === this._y && e17._z === this._z && e17._order === this._order;
  }
  fromArray(e17) {
    return this._x = e17[0], this._y = e17[1], this._z = e17[2], e17[3] !== void 0 && (this._order = e17[3]), this._onChangeCallback(), this;
  }
  toArray(e17 = [], t3 = 0) {
    return e17[t3] = this._x, e17[t3 + 1] = this._y, e17[t3 + 2] = this._z, e17[t3 + 3] = this._order, e17;
  }
  _onChange(e17) {
    return this._onChangeCallback = e17, this;
  }
  _onChangeCallback() {
  }
  *[Symbol[i(709)]]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
Tn.DEFAULT_ORDER = i(1369);
var En = class {
  constructor() {
    this.mask = 1;
  }
  [i(1139)](e17) {
    this.mask = (1 << e17 | 0) >>> 0;
  }
  enable(e17) {
    this.mask |= 1 << e17 | 0;
  }
  [i(913)]() {
    let e17 = i;
    this[e17(1464)] = -1;
  }
  toggle(e17) {
    let t3 = i;
    this[t3(1464)] ^= 1 << e17 | 0;
  }
  disable(e17) {
    this.mask &= ~(1 << e17 | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  [i(1327)](e17) {
    return (this.mask & e17.mask) !== 0;
  }
  isEnabled(e17) {
    let t3 = i;
    return (this[t3(1464)] & (1 << e17 | 0)) != 0;
  }
}, Dn = 0, On = new W(), kn = new Jt(), An = new J(), jn = new W(), Mn = new W(), Nn = new W(), Pn = new Jt(), Fn = new W(1, 0, 0), In = new W(0, 1, 0), Ln = new W(0, 0, 1), Rn = { type: `added` }, zn = { type: `removed` }, Bn = { type: `childadded`, child: null }, Vn = { type: i(1231), child: null }, Hn = class t2 extends St {
  constructor() {
    let e17 = i;
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Dn++ }), this[e17(797)] = Dt(), this.name = ``, this.type = `Object3D`, this.parent = null, this.children = [], this.up = t2.DEFAULT_UP.clone();
    let n2 = new W(), r2 = new Tn(), a2 = new Jt(), o2 = new W(1, 1, 1);
    function s2() {
      a2[e17(982)](r2, false);
    }
    function c2() {
      r2.setFromQuaternion(a2, void 0, false);
    }
    r2._onChange(s2), a2._onChange(c2), Object[e17(757)](this, { position: { configurable: true, enumerable: true, value: n2 }, rotation: { configurable: true, enumerable: true, value: r2 }, quaternion: { configurable: true, enumerable: true, value: a2 }, scale: { configurable: true, enumerable: true, value: o2 }, modelViewMatrix: { value: new J() }, normalMatrix: { value: new G() } }), this.matrix = new J(), this.matrixWorld = new J(), this.matrixAutoUpdate = t2[e17(1166)], this.matrixWorldAutoUpdate = t2.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this[e17(464)] = new En(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this[e17(951)] = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
  }
  [i(395)]() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e17) {
    let t3 = i;
    this.matrixAutoUpdate && this.updateMatrix(), this[t3(307)].premultiply(e17), this.matrix[t3(1352)](this.position, this.quaternion, this.scale);
  }
  [i(234)](e17) {
    let t3 = i;
    return this[t3(1421)].premultiply(e17), this;
  }
  setRotationFromAxisAngle(e17, t3) {
    let n2 = i;
    this.quaternion[n2(1269)](e17, t3);
  }
  setRotationFromEuler(e17) {
    let t3 = i;
    this.quaternion[t3(982)](e17, true);
  }
  setRotationFromMatrix(e17) {
    this.quaternion.setFromRotationMatrix(e17);
  }
  setRotationFromQuaternion(e17) {
    this.quaternion.copy(e17);
  }
  rotateOnAxis(e17, t3) {
    let n2 = i;
    return kn[n2(1269)](e17, t3), this[n2(1421)].multiply(kn), this;
  }
  rotateOnWorldAxis(e17, t3) {
    return kn.setFromAxisAngle(e17, t3), this.quaternion.premultiply(kn), this;
  }
  [i(1322)](e17) {
    return this.rotateOnAxis(Fn, e17);
  }
  rotateY(e17) {
    return this.rotateOnAxis(In, e17);
  }
  rotateZ(e17) {
    return this.rotateOnAxis(Ln, e17);
  }
  translateOnAxis(e17, t3) {
    let n2 = i;
    return On.copy(e17).applyQuaternion(this.quaternion), this.position.add(On[n2(1072)](t3)), this;
  }
  translateX(e17) {
    return this.translateOnAxis(Fn, e17);
  }
  [i(935)](e17) {
    let t3 = i;
    return this[t3(590)](In, e17);
  }
  translateZ(e17) {
    let t3 = i;
    return this[t3(590)](Ln, e17);
  }
  localToWorld(e17) {
    return this.updateWorldMatrix(true, false), e17.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e17) {
    return this.updateWorldMatrix(true, false), e17.applyMatrix4(An.copy(this.matrixWorld).invert());
  }
  lookAt(e17, t3, n2) {
    let r2 = i;
    e17.isVector3 ? jn[r2(1250)](e17) : jn[r2(1139)](e17, t3, n2);
    let a2 = this[r2(950)];
    this.updateWorldMatrix(true, false), Mn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? An.lookAt(Mn, jn, this.up) : An.lookAt(jn, Mn, this.up), this[r2(1421)].setFromRotationMatrix(An), a2 && (An.extractRotation(a2.matrixWorld), kn.setFromRotationMatrix(An), this.quaternion.premultiply(kn.invert()));
  }
  add(e17) {
    let t3 = i;
    if (arguments.length > 1) {
      for (let e18 = 0; e18 < arguments.length; e18++) this[t3(1034)](arguments[e18]);
      return this;
    }
    return e17 === this ? (B(`Object3D.add: object can't be added as a child of itself.`, e17), this) : (e17 && e17.isObject3D ? (e17[t3(1134)](), e17.parent = this, this.children.push(e17), e17.dispatchEvent(Rn), Bn.child = e17, this.dispatchEvent(Bn), Bn.child = null) : B(`Object3D.add: object not an instance of THREE.Object3D.`, e17), this);
  }
  remove(e17) {
    let t3 = i;
    if (arguments.length > 1) {
      for (let e18 = 0; e18 < arguments.length; e18++) this.remove(arguments[e18]);
      return this;
    }
    let n2 = this[t3(1200)][t3(530)](e17);
    return n2 !== -1 && (e17.parent = null, this.children[t3(854)](n2, 1), e17.dispatchEvent(zn), Vn[t3(655)] = e17, this.dispatchEvent(Vn), Vn.child = null), this;
  }
  [i(1134)]() {
    let e17 = i, t3 = this[e17(950)];
    return t3 !== null && t3.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e17) {
    let t3 = i;
    return this[t3(1412)](true, false), An[t3(1250)](this.matrixWorld).invert(), e17.parent !== null && (e17.parent.updateWorldMatrix(true, false), An.multiply(e17.parent.matrixWorld)), e17.applyMatrix4(An), e17.removeFromParent(), e17.parent = this, this.children.push(e17), e17.updateWorldMatrix(false, true), e17.dispatchEvent(Rn), Bn.child = e17, this.dispatchEvent(Bn), Bn.child = null, this;
  }
  getObjectById(e17) {
    return this.getObjectByProperty(`id`, e17);
  }
  getObjectByName(e17) {
    let t3 = i;
    return this.getObjectByProperty(t3(1301), e17);
  }
  getObjectByProperty(e17, t3) {
    let n2 = i;
    if (this[e17] === t3) return this;
    for (let r2 = 0, i2 = this.children[n2(660)]; r2 < i2; r2++) {
      let i3 = this.children[r2][n2(332)](e17, t3);
      if (i3 !== void 0) return i3;
    }
  }
  getObjectsByProperty(e17, t3, n2 = []) {
    let r2 = i;
    this[e17] === t3 && n2.push(this);
    let a2 = this.children;
    for (let i2 = 0, o2 = a2.length; i2 < o2; i2++) a2[i2][r2(771)](e17, t3, n2);
    return n2;
  }
  getWorldPosition(e17) {
    let t3 = i;
    return this.updateWorldMatrix(true, false), e17.setFromMatrixPosition(this[t3(1234)]);
  }
  getWorldQuaternion(e17) {
    let t3 = i;
    return this.updateWorldMatrix(true, false), this[t3(1234)][t3(1352)](Mn, e17, Nn), e17;
  }
  getWorldScale(e17) {
    let t3 = i;
    return this.updateWorldMatrix(true, false), this[t3(1234)].decompose(Mn, Pn, e17), e17;
  }
  getWorldDirection(e17) {
    let t3 = i;
    this.updateWorldMatrix(true, false);
    let n2 = this[t3(1234)].elements;
    return e17.set(n2[8], n2[9], n2[10]).normalize();
  }
  [i(193)]() {
  }
  traverse(e17) {
    e17(this);
    let t3 = this.children;
    for (let n2 = 0, r2 = t3.length; n2 < r2; n2++) t3[n2].traverse(e17);
  }
  [i(1092)](e17) {
    let t3 = i;
    if (this.visible === false) return;
    e17(this);
    let n2 = this[t3(1200)];
    for (let t4 = 0, r2 = n2.length; t4 < r2; t4++) n2[t4].traverseVisible(e17);
  }
  traverseAncestors(e17) {
    let t3 = this.parent;
    t3 !== null && (e17(t3), t3.traverseAncestors(e17));
  }
  updateMatrix() {
    let e17 = i;
    this.matrix.compose(this.position, this.quaternion, this.scale);
    let t3 = this.pivot;
    if (t3 !== null) {
      let n2 = t3.x, r2 = t3.y, i2 = t3.z, a2 = this[e17(307)].elements;
      a2[12] += n2 - a2[0] * n2 - a2[4] * r2 - a2[8] * i2, a2[13] += r2 - a2[1] * n2 - a2[5] * r2 - a2[9] * i2, a2[14] += i2 - a2[2] * n2 - a2[6] * r2 - a2[10] * i2;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e17) {
    let t3 = i;
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e17) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this[t3(307)])), this.matrixWorldNeedsUpdate = false, e17 = true);
    let n2 = this.children;
    for (let t4 = 0, r2 = n2.length; t4 < r2; t4++) n2[t4].updateMatrixWorld(e17);
  }
  [i(1412)](e17, t3) {
    let n2 = i, r2 = this.parent;
    if (e17 === true && r2 !== null && r2.updateWorldMatrix(true, false), this.matrixAutoUpdate && this[n2(494)](), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this[n2(307)])), t3 === true) {
      let e18 = this.children;
      for (let t4 = 0, n3 = e18.length; t4 < n3; t4++) e18[t4].updateWorldMatrix(false, true);
    }
  }
  toJSON(t3) {
    let n2 = i, r2 = t3 === void 0 || typeof t3 == `string`, a2 = {};
    r2 && (t3 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, a2[n2(452)] = { version: 4.7, type: `Object`, generator: `Object3D.toJSON` });
    let o2 = {};
    o2.uuid = this[n2(797)], o2.type = this[n2(1112)], this.name !== `` && (o2.name = this.name), this.castShadow === true && (o2.castShadow = true), this.receiveShadow === true && (o2.receiveShadow = true), this.visible === false && (o2.visible = false), this.frustumCulled === false && (o2.frustumCulled = false), this.renderOrder !== 0 && (o2[n2(963)] = this.renderOrder), this.static !== false && (o2.static = this.static), Object.keys(this.userData)[n2(660)] > 0 && (o2.userData = this.userData), o2.layers = this.layers.mask, o2.matrix = this.matrix.toArray(), o2.up = this.up[n2(1263)](), this.pivot !== null && (o2.pivot = this.pivot[n2(1263)]()), this.matrixAutoUpdate === false && (o2[n2(875)] = false), this.morphTargetDictionary !== void 0 && (o2.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (o2.morphTargetInfluences = this[n2(1390)].slice()), this.isInstancedMesh && (o2.type = `InstancedMesh`, o2.count = this.count, o2.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (o2.instanceColor = this.instanceColor[n2(497)]())), this.isBatchedMesh && (o2.type = `BatchedMesh`, o2[n2(1427)] = this.perObjectFrustumCulled, o2[n2(1108)] = this.sortObjects, o2.drawRanges = this._drawRanges, o2[n2(272)] = this._reservedRanges, o2.geometryInfo = this._geometryInfo[n2(579)]((t4) => e(e({}, t4), {}, { boundingBox: t4.boundingBox ? t4.boundingBox[n2(497)]() : void 0, boundingSphere: t4.boundingSphere ? t4[n2(741)][n2(497)]() : void 0 })), o2.instanceInfo = this._instanceInfo[n2(579)]((t4) => e({}, t4)), o2[n2(217)] = this._availableInstanceIds.slice(), o2.availableGeometryIds = this._availableGeometryIds.slice(), o2.nextIndexStart = this._nextIndexStart, o2.nextVertexStart = this._nextVertexStart, o2.geometryCount = this._geometryCount, o2[n2(898)] = this[n2(368)], o2.maxVertexCount = this._maxVertexCount, o2.maxIndexCount = this._maxIndexCount, o2[n2(670)] = this._geometryInitialized, o2.matricesTexture = this[n2(917)].toJSON(t3), o2.indirectTexture = this[n2(398)].toJSON(t3), this._colorsTexture !== null && (o2.colorsTexture = this._colorsTexture[n2(497)](t3)), this[n2(741)] !== null && (o2.boundingSphere = this[n2(741)].toJSON()), this.boundingBox !== null && (o2.boundingBox = this.boundingBox.toJSON()));
    function s2(e17, r3) {
      let i2 = n2;
      return e17[r3.uuid] === void 0 && (e17[r3[i2(797)]] = r3.toJSON(t3)), r3.uuid;
    }
    if (this.isScene) this.background && (this[n2(262)].isColor ? o2[n2(262)] = this.background.toJSON() : this.background.isTexture && (o2[n2(262)] = this.background[n2(497)](t3).uuid)), this.environment && this.environment[n2(1055)] && this.environment.isRenderTargetTexture !== true && (o2.environment = this.environment[n2(497)](t3).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      o2.geometry = s2(t3.geometries, this.geometry);
      let e17 = this.geometry[n2(1008)];
      if (e17 !== void 0 && e17[n2(1230)] !== void 0) {
        let r3 = e17.shapes;
        if (Array.isArray(r3)) for (let e18 = 0, i2 = r3[n2(660)]; e18 < i2; e18++) {
          let n3 = r3[e18];
          s2(t3.shapes, n3);
        }
        else s2(t3[n2(1230)], r3);
      }
    }
    if (this.isSkinnedMesh && (o2[n2(297)] = this.bindMode, o2.bindMatrix = this.bindMatrix[n2(1263)](), this.skeleton !== void 0 && (s2(t3.skeletons, this.skeleton), o2.skeleton = this[n2(1096)].uuid)), this.material !== void 0) if (Array[n2(1277)](this.material)) {
      let e17 = [];
      for (let r3 = 0, i2 = this[n2(849)].length; r3 < i2; r3++) e17.push(s2(t3.materials, this.material[r3]));
      o2.material = e17;
    } else o2[n2(849)] = s2(t3[n2(1062)], this[n2(849)]);
    if (this.children.length > 0) {
      o2.children = [];
      for (let e17 = 0; e17 < this[n2(1200)].length; e17++) o2.children[n2(1184)](this.children[e17].toJSON(t3).object);
    }
    if (this.animations.length > 0) {
      o2.animations = [];
      for (let e17 = 0; e17 < this.animations.length; e17++) {
        let r3 = this[n2(807)][e17];
        o2.animations.push(s2(t3.animations, r3));
      }
    }
    if (r2) {
      let e17 = c2(t3.geometries), r3 = c2(t3.materials), i2 = c2(t3.textures), o3 = c2(t3[n2(1332)]), s3 = c2(t3.shapes), l2 = c2(t3.skeletons), u2 = c2(t3.animations), d2 = c2(t3.nodes);
      e17.length > 0 && (a2.geometries = e17), r3[n2(660)] > 0 && (a2.materials = r3), i2.length > 0 && (a2.textures = i2), o3[n2(660)] > 0 && (a2.images = o3), s3[n2(660)] > 0 && (a2.shapes = s3), l2.length > 0 && (a2.skeletons = l2), u2[n2(660)] > 0 && (a2.animations = u2), d2[n2(660)] > 0 && (a2.nodes = d2);
    }
    return a2.object = o2, a2;
    function c2(e17) {
      let t4 = n2, r3 = [];
      for (let n3 in e17) {
        let i2 = e17[n3];
        delete i2.metadata, r3[t4(1184)](i2);
      }
      return r3;
    }
  }
  [i(443)](e17) {
    let t3 = i;
    return new this[t3(1178)]().copy(this, e17);
  }
  copy(e17, t3 = true) {
    let n2 = i;
    if (this.name = e17[n2(1301)], this.up.copy(e17.up), this.position.copy(e17.position), this[n2(320)].order = e17.rotation.order, this.quaternion.copy(e17.quaternion), this[n2(542)][n2(1250)](e17.scale), this[n2(722)] = e17.pivot === null ? null : e17.pivot.clone(), this.matrix.copy(e17[n2(307)]), this.matrixWorld.copy(e17.matrixWorld), this.matrixAutoUpdate = e17[n2(875)], this.matrixWorldAutoUpdate = e17.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e17.matrixWorldNeedsUpdate, this.layers[n2(1464)] = e17.layers[n2(1464)], this.visible = e17.visible, this.castShadow = e17.castShadow, this[n2(1392)] = e17.receiveShadow, this.frustumCulled = e17.frustumCulled, this.renderOrder = e17.renderOrder, this[n2(707)] = e17.static, this.animations = e17.animations.slice(), this[n2(727)] = JSON.parse(JSON.stringify(e17.userData)), t3 === true) for (let t4 = 0; t4 < e17.children.length; t4++) {
      let r2 = e17[n2(1200)][t4];
      this.add(r2.clone());
    }
    return this;
  }
};
Hn.DEFAULT_UP = new W(0, 1, 0), Hn.DEFAULT_MATRIX_AUTO_UPDATE = true, Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var Un = class extends Hn {
  constructor() {
    super(), this.isGroup = true, this.type = `Group`;
  }
}, Wn = { type: `move` }, Gn = class {
  constructor() {
    let e17 = i;
    this._targetRay = null, this[e17(349)] = null, this._hand = null;
  }
  getHandSpace() {
    let e17 = i;
    return this[e17(1118)] === null && (this._hand = new Un(), this._hand[e17(875)] = false, this._hand.visible = false, this._hand[e17(1215)] = {}, this._hand.inputState = { pinching: false }), this[e17(1118)];
  }
  [i(457)]() {
    let e17 = i;
    return this[e17(983)] === null && (this._targetRay = new Un(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this[e17(983)].hasLinearVelocity = false, this._targetRay.linearVelocity = new W(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new W()), this._targetRay;
  }
  getGripSpace() {
    let e17 = i;
    return this._grip === null && (this._grip = new Un(), this._grip.matrixAutoUpdate = false, this._grip[e17(884)] = false, this._grip.hasLinearVelocity = false, this._grip[e17(540)] = new W(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new W(), this._grip.eventsEnabled = false), this[e17(349)];
  }
  dispatchEvent(e17) {
    let t3 = i;
    return this._targetRay !== null && this._targetRay.dispatchEvent(e17), this._grip !== null && this[t3(349)].dispatchEvent(e17), this._hand !== null && this._hand.dispatchEvent(e17), this;
  }
  connect(e17) {
    let t3 = i;
    if (e17 && e17.hand) {
      let t4 = this._hand;
      if (t4) for (let n2 of e17.hand.values()) this._getHandJoint(t4, n2);
    }
    return this[t3(516)]({ type: `connected`, data: e17 }), this;
  }
  disconnect(e17) {
    let t3 = i;
    return this.dispatchEvent({ type: `disconnected`, data: e17 }), this[t3(983)] !== null && (this._targetRay.visible = false), this._grip !== null && (this[t3(349)].visible = false), this[t3(1118)] !== null && (this._hand[t3(884)] = false), this;
  }
  update(e17, t3, n2) {
    let r2 = i, a2 = null, o2 = null, s2 = null, c2 = this._targetRay, l2 = this[r2(349)], u2 = this._hand;
    if (e17 && t3.session.visibilityState !== r2(916)) {
      if (u2 && e17.hand) {
        s2 = true;
        for (let i3 of e17.hand[r2(1151)]()) {
          let e18 = t3.getJointPose(i3, n2), a4 = this[r2(1334)](u2, i3);
          e18 !== null && (a4.matrix[r2(823)](e18.transform.matrix), a4.matrix.decompose(a4[r2(1477)], a4.rotation, a4[r2(542)]), a4.matrixWorldNeedsUpdate = true, a4[r2(485)] = e18.radius), a4.visible = e18 !== null;
        }
        let i2 = u2.joints[`index-finger-tip`], a3 = u2.joints[`thumb-tip`], o3 = i2.position.distanceTo(a3.position);
        u2.inputState.pinching && o3 > 0.025 ? (u2.inputState.pinching = false, this[r2(516)]({ type: `pinchend`, handedness: e17.handedness, target: this })) : !u2.inputState.pinching && o3 <= 0.015 && (u2[r2(1143)].pinching = true, this.dispatchEvent({ type: `pinchstart`, handedness: e17.handedness, target: this }));
      } else l2 !== null && e17.gripSpace && (o2 = t3.getPose(e17[r2(710)], n2), o2 !== null && (l2.matrix.fromArray(o2.transform[r2(307)]), l2[r2(307)].decompose(l2[r2(1477)], l2.rotation, l2.scale), l2[r2(697)] = true, o2[r2(540)] ? (l2.hasLinearVelocity = true, l2.linearVelocity.copy(o2.linearVelocity)) : l2.hasLinearVelocity = false, o2.angularVelocity ? (l2.hasAngularVelocity = true, l2.angularVelocity.copy(o2.angularVelocity)) : l2.hasAngularVelocity = false, l2.eventsEnabled && l2.dispatchEvent({ type: `gripUpdated`, data: e17, target: this })));
      c2 !== null && (a2 = t3.getPose(e17[r2(518)], n2), a2 === null && o2 !== null && (a2 = o2), a2 !== null && (c2.matrix[r2(823)](a2[r2(284)].matrix), c2.matrix[r2(1352)](c2[r2(1477)], c2.rotation, c2.scale), c2.matrixWorldNeedsUpdate = true, a2.linearVelocity ? (c2[r2(591)] = true, c2.linearVelocity.copy(a2.linearVelocity)) : c2.hasLinearVelocity = false, a2[r2(1207)] ? (c2.hasAngularVelocity = true, c2[r2(1207)].copy(a2.angularVelocity)) : c2.hasAngularVelocity = false, this[r2(516)](Wn)));
    }
    return c2 !== null && (c2.visible = a2 !== null), l2 !== null && (l2.visible = o2 !== null), u2 !== null && (u2.visible = s2 !== null), this;
  }
  [i(1334)](e17, t3) {
    let n2 = i;
    if (e17.joints[t3.jointName] === void 0) {
      let r2 = new Un();
      r2.matrixAutoUpdate = false, r2.visible = false, e17.joints[t3[n2(725)]] = r2, e17.add(r2);
    }
    return e17.joints[t3.jointName];
  }
}, Kn = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, qn = { h: 0, s: 0, l: 0 }, Jn = { h: 0, s: 0, l: 0 };
function Yn(e17, t3, n2) {
  return n2 < 0 && (n2 += 1), n2 > 1 && --n2, n2 < 1 / 6 ? e17 + (t3 - e17) * 6 * n2 : n2 < 1 / 2 ? t3 : n2 < 2 / 3 ? e17 + (t3 - e17) * 6 * (2 / 3 - n2) : e17;
}
var Y = class {
  constructor(e17, t3, n2) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e17, t3, n2);
  }
  [i(1139)](e17, t3, n2) {
    let r2 = i;
    if (t3 === void 0 && n2 === void 0) {
      let t4 = e17;
      t4 && t4.isColor ? this.copy(t4) : typeof t4 == r2(793) ? this.setHex(t4) : typeof t4 == r2(1254) && this.setStyle(t4);
    } else this[r2(923)](e17, t3, n2);
    return this;
  }
  [i(1015)](e17) {
    return this.r = e17, this.g = e17, this.b = e17, this;
  }
  setHex(e17, t3 = it) {
    return e17 = Math.floor(e17), this.r = (e17 >> 16 & 255) / 255, this.g = (e17 >> 8 & 255) / 255, this.b = (e17 & 255) / 255, K.colorSpaceToWorking(this, t3), this;
  }
  [i(923)](e17, t3, n2, r2 = K.workingColorSpace) {
    return this.r = e17, this.g = t3, this.b = n2, K.colorSpaceToWorking(this, r2), this;
  }
  setHSL(e17, t3, n2, r2 = K.workingColorSpace) {
    if (e17 = Ot(e17, 1), t3 = V(t3, 0, 1), n2 = V(n2, 0, 1), t3 === 0) this.r = this.g = this.b = n2;
    else {
      let r3 = n2 <= 0.5 ? n2 * (1 + t3) : n2 + t3 - n2 * t3, i2 = 2 * n2 - r3;
      this.r = Yn(i2, r3, e17 + 1 / 3), this.g = Yn(i2, r3, e17), this.b = Yn(i2, r3, e17 - 1 / 3);
    }
    return K.colorSpaceToWorking(this, r2), this;
  }
  setStyle(e17, t3 = it) {
    let n2 = i;
    function r2(t4) {
      t4 !== void 0 && parseFloat(t4) < 1 && z(`Color: Alpha component of ` + e17 + ` will be ignored.`);
    }
    let a2;
    if (a2 = /^(\w+)\(([^\)]*)\)/.exec(e17)) {
      let i2, o2 = a2[1], s2 = a2[2];
      switch (o2) {
        case n2(1051):
        case `rgba`:
          if (i2 = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/[n2(1347)](s2)) return r2(i2[4]), this[n2(923)](Math.min(255, parseInt(i2[1], 10)) / 255, Math.min(255, parseInt(i2[2], 10)) / 255, Math[n2(1245)](255, parseInt(i2[3], 10)) / 255, t3);
          if (i2 = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2)) return r2(i2[4]), this.setRGB(Math.min(100, parseInt(i2[1], 10)) / 100, Math.min(100, parseInt(i2[2], 10)) / 100, Math.min(100, parseInt(i2[3], 10)) / 100, t3);
          break;
        case `hsl`:
        case `hsla`:
          if (i2 = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s2)) return r2(i2[4]), this.setHSL(parseFloat(i2[1]) / 360, parseFloat(i2[2]) / 100, parseFloat(i2[3]) / 100, t3);
          break;
        default:
          z(`Color: Unknown color model ` + e17);
      }
    } else if (a2 = /^\#([A-Fa-f\d]+)$/.exec(e17)) {
      let r3 = a2[1], i2 = r3.length;
      if (i2 === 3) return this.setRGB(parseInt(r3.charAt(0), 16) / 15, parseInt(r3[n2(570)](1), 16) / 15, parseInt(r3[n2(570)](2), 16) / 15, t3);
      if (i2 === 6) return this[n2(1286)](parseInt(r3, 16), t3);
      z(`Color: Invalid hex color ` + e17);
    } else if (e17 && e17.length > 0) return this[n2(1071)](e17, t3);
    return this;
  }
  setColorName(e17, t3 = it) {
    let n2 = i, r2 = Kn[e17.toLowerCase()];
    return r2 === void 0 ? z(n2(639) + e17) : this.setHex(r2, t3), this;
  }
  clone() {
    let e17 = i;
    return new this[e17(1178)](this.r, this.g, this.b);
  }
  copy(e17) {
    return this.r = e17.r, this.g = e17.g, this.b = e17.b, this;
  }
  copySRGBToLinear(e17) {
    return this.r = tn(e17.r), this.g = tn(e17.g), this.b = tn(e17.b), this;
  }
  copyLinearToSRGB(e17) {
    return this.r = nn(e17.r), this.g = nn(e17.g), this.b = nn(e17.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  [i(1361)](e17 = it) {
    return K.workingToColorSpace(Xn.copy(this), e17), Math.round(V(Xn.r * 255, 0, 255)) * 65536 + Math.round(V(Xn.g * 255, 0, 255)) * 256 + Math.round(V(Xn.b * 255, 0, 255));
  }
  getHexString(e17 = it) {
    return (`000000` + this.getHex(e17).toString(16)).slice(-6);
  }
  getHSL(e17, t3 = K.workingColorSpace) {
    K.workingToColorSpace(Xn.copy(this), t3);
    let n2 = Xn.r, r2 = Xn.g, i2 = Xn.b, a2 = Math.max(n2, r2, i2), o2 = Math.min(n2, r2, i2), s2, c2, l2 = (o2 + a2) / 2;
    if (o2 === a2) s2 = 0, c2 = 0;
    else {
      let e18 = a2 - o2;
      switch (c2 = l2 <= 0.5 ? e18 / (a2 + o2) : e18 / (2 - a2 - o2), a2) {
        case n2:
          s2 = (r2 - i2) / e18 + (r2 < i2 ? 6 : 0);
          break;
        case r2:
          s2 = (i2 - n2) / e18 + 2;
          break;
        case i2:
          s2 = (n2 - r2) / e18 + 4;
          break;
      }
      s2 /= 6;
    }
    return e17.h = s2, e17.s = c2, e17.l = l2, e17;
  }
  getRGB(e17, t3 = K.workingColorSpace) {
    return K.workingToColorSpace(Xn.copy(this), t3), e17.r = Xn.r, e17.g = Xn.g, e17.b = Xn.b, e17;
  }
  [i(844)](e17 = it) {
    let t3 = i;
    K.workingToColorSpace(Xn[t3(1250)](this), e17);
    let n2 = Xn.r, r2 = Xn.g, a2 = Xn.b;
    return e17 === `srgb` ? `rgb(` + Math.round(n2 * 255) + `,` + Math.round(r2 * 255) + `,` + Math.round(a2 * 255) + `)` : t3(463) + e17 + ` ` + n2[t3(1295)](3) + ` ` + r2.toFixed(3) + ` ` + a2[t3(1295)](3) + `)`;
  }
  [i(410)](e17, t3, n2) {
    let r2 = i;
    return this[r2(226)](qn), this[r2(565)](qn.h + e17, qn.s + t3, qn.l + n2);
  }
  add(e17) {
    return this.r += e17.r, this.g += e17.g, this.b += e17.b, this;
  }
  addColors(e17, t3) {
    return this.r = e17.r + t3.r, this.g = e17.g + t3.g, this.b = e17.b + t3.b, this;
  }
  addScalar(e17) {
    return this.r += e17, this.g += e17, this.b += e17, this;
  }
  sub(e17) {
    let t3 = i;
    return this.r = Math[t3(1023)](0, this.r - e17.r), this.g = Math[t3(1023)](0, this.g - e17.g), this.b = Math.max(0, this.b - e17.b), this;
  }
  multiply(e17) {
    return this.r *= e17.r, this.g *= e17.g, this.b *= e17.b, this;
  }
  multiplyScalar(e17) {
    return this.r *= e17, this.g *= e17, this.b *= e17, this;
  }
  lerp(e17, t3) {
    return this.r += (e17.r - this.r) * t3, this.g += (e17.g - this.g) * t3, this.b += (e17.b - this.b) * t3, this;
  }
  [i(357)](e17, t3, n2) {
    return this.r = e17.r + (t3.r - e17.r) * n2, this.g = e17.g + (t3.g - e17.g) * n2, this.b = e17.b + (t3.b - e17.b) * n2, this;
  }
  [i(1444)](e17, t3) {
    let n2 = i;
    this.getHSL(qn), e17.getHSL(Jn);
    let r2 = jt(qn.h, Jn.h, t3), a2 = jt(qn.s, Jn.s, t3), o2 = jt(qn.l, Jn.l, t3);
    return this[n2(565)](r2, a2, o2), this;
  }
  setFromVector3(e17) {
    return this.r = e17.x, this.g = e17.y, this.b = e17.z, this;
  }
  applyMatrix3(e17) {
    let t3 = this.r, n2 = this.g, r2 = this.b, i2 = e17.elements;
    return this.r = i2[0] * t3 + i2[3] * n2 + i2[6] * r2, this.g = i2[1] * t3 + i2[4] * n2 + i2[7] * r2, this.b = i2[2] * t3 + i2[5] * n2 + i2[8] * r2, this;
  }
  equals(e17) {
    return e17.r === this.r && e17.g === this.g && e17.b === this.b;
  }
  [i(823)](e17, t3 = 0) {
    return this.r = e17[t3], this.g = e17[t3 + 1], this.b = e17[t3 + 2], this;
  }
  toArray(e17 = [], t3 = 0) {
    return e17[t3] = this.r, e17[t3 + 1] = this.g, e17[t3 + 2] = this.b, e17;
  }
  fromBufferAttribute(e17, t3) {
    return this.r = e17.getX(t3), this.g = e17.getY(t3), this.b = e17.getZ(t3), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}, Xn = new Y();
Y.NAMES = Kn;
var Zn = class extends Hn {
  constructor() {
    let e17 = i;
    super(), this.isScene = true, this.type = `Scene`, this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this[e17(754)] = 1, this.backgroundRotation = new Tn(), this.environmentIntensity = 1, this.environmentRotation = new Tn(), this[e17(492)] = null, typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, { detail: this }));
  }
  [i(1250)](e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), e17.background !== null && (this[n2(262)] = e17.background.clone()), e17[n2(1353)] !== null && (this.environment = e17.environment.clone()), e17.fog !== null && (this.fog = e17.fog[n2(443)]()), this.backgroundBlurriness = e17.backgroundBlurriness, this.backgroundIntensity = e17.backgroundIntensity, this.backgroundRotation.copy(e17.backgroundRotation), this.environmentIntensity = e17[n2(512)], this[n2(1239)].copy(e17[n2(1239)]), e17.overrideMaterial !== null && (this[n2(492)] = e17.overrideMaterial[n2(443)]()), this.matrixAutoUpdate = e17[n2(875)], this;
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return this.fog !== null && (n2.object.fog = this.fog.toJSON()), this[t3(1172)] > 0 && (n2.object[t3(1172)] = this[t3(1172)]), this.backgroundIntensity !== 1 && (n2[t3(199)].backgroundIntensity = this.backgroundIntensity), n2.object.backgroundRotation = this[t3(1356)][t3(1263)](), this.environmentIntensity !== 1 && (n2.object.environmentIntensity = this.environmentIntensity), n2[t3(199)][t3(1239)] = this.environmentRotation.toArray(), n2;
  }
}, Qn = new W(), $n = new W(), er = new W(), tr = new W(), nr = new W(), rr = new W(), ir = new W(), ar = new W(), or = new W(), sr = new W(), cr = new q(), lr = new q(), ur = new q(), dr = class e5 {
  constructor(e17 = new W(), t3 = new W(), n2 = new W()) {
    this.a = e17, this.b = t3, this.c = n2;
  }
  static getNormal(e17, t3, n2, r2) {
    let a2 = i;
    r2.subVectors(n2, t3), Qn.subVectors(e17, t3), r2.cross(Qn);
    let o2 = r2.lengthSq();
    return o2 > 0 ? r2.multiplyScalar(1 / Math.sqrt(o2)) : r2[a2(1139)](0, 0, 0);
  }
  static getBarycoord(e17, t3, n2, r2, a2) {
    let o2 = i;
    Qn.subVectors(r2, t3), $n[o2(974)](n2, t3), er.subVectors(e17, t3);
    let s2 = Qn.dot(Qn), c2 = Qn.dot($n), l2 = Qn.dot(er), u2 = $n.dot($n), d2 = $n.dot(er), f2 = s2 * u2 - c2 * c2;
    if (f2 === 0) return a2.set(0, 0, 0), null;
    let p2 = 1 / f2, m2 = (u2 * l2 - c2 * d2) * p2, h2 = (s2 * d2 - c2 * l2) * p2;
    return a2[o2(1139)](1 - m2 - h2, h2, m2);
  }
  static containsPoint(e17, t3, n2, r2) {
    return this.getBarycoord(e17, t3, n2, r2, tr) === null ? false : tr.x >= 0 && tr.y >= 0 && tr.x + tr.y <= 1;
  }
  static getInterpolation(e17, t3, n2, r2, i2, a2, o2, s2) {
    return this.getBarycoord(e17, t3, n2, r2, tr) === null ? (s2.x = 0, s2.y = 0, `z` in s2 && (s2.z = 0), `w` in s2 && (s2.w = 0), null) : (s2.setScalar(0), s2.addScaledVector(i2, tr.x), s2.addScaledVector(a2, tr.y), s2.addScaledVector(o2, tr.z), s2);
  }
  static getInterpolatedAttribute(e17, t3, n2, r2, a2, o2) {
    let s2 = i;
    return cr.setScalar(0), lr.setScalar(0), ur.setScalar(0), cr.fromBufferAttribute(e17, t3), lr.fromBufferAttribute(e17, n2), ur.fromBufferAttribute(e17, r2), o2[s2(1015)](0), o2[s2(825)](cr, a2.x), o2[s2(825)](lr, a2.y), o2.addScaledVector(ur, a2.z), o2;
  }
  static isFrontFacing(e17, t3, n2, r2) {
    let a2 = i;
    return Qn.subVectors(n2, t3), $n.subVectors(e17, t3), Qn.cross($n)[a2(1336)](r2) < 0;
  }
  set(e17, t3, n2) {
    return this.a.copy(e17), this.b.copy(t3), this.c.copy(n2), this;
  }
  setFromPointsAndIndices(e17, t3, n2, r2) {
    return this.a.copy(e17[t3]), this.b.copy(e17[n2]), this.c.copy(e17[r2]), this;
  }
  setFromAttributeAndIndices(e17, t3, n2, r2) {
    return this.a.fromBufferAttribute(e17, t3), this.b.fromBufferAttribute(e17, n2), this.c.fromBufferAttribute(e17, r2), this;
  }
  [i(443)]() {
    return new this.constructor().copy(this);
  }
  [i(1250)](e17) {
    let t3 = i;
    return this.a.copy(e17.a), this.b[t3(1250)](e17.b), this.c.copy(e17.c), this;
  }
  getArea() {
    let e17 = i;
    return Qn.subVectors(this.c, this.b), $n[e17(974)](this.a, this.b), Qn.cross($n).length() * 0.5;
  }
  getMidpoint(e17) {
    return e17.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t3) {
    return e5.getNormal(this.a, this.b, this.c, t3);
  }
  getPlane(e17) {
    return e17[i(985)](this.a, this.b, this.c);
  }
  getBarycoord(t3, n2) {
    return e5[i(1410)](t3, this.a, this.b, this.c, n2);
  }
  getInterpolation(t3, n2, r2, i2, a2) {
    return e5.getInterpolation(t3, this.a, this.b, this.c, n2, r2, i2, a2);
  }
  containsPoint(t3) {
    return e5.containsPoint(t3, this.a, this.b, this.c);
  }
  isFrontFacing(t3) {
    return e5.isFrontFacing(this.a, this.b, this.c, t3);
  }
  intersectsBox(e17) {
    return e17.intersectsTriangle(this);
  }
  [i(323)](e17, t3) {
    let n2 = i, r2 = this.a, a2 = this.b, o2 = this.c, s2, c2;
    nr.subVectors(a2, r2), rr.subVectors(o2, r2), ar[n2(974)](e17, r2);
    let l2 = nr[n2(1336)](ar), u2 = rr.dot(ar);
    if (l2 <= 0 && u2 <= 0) return t3.copy(r2);
    or.subVectors(e17, a2);
    let d2 = nr[n2(1336)](or), f2 = rr.dot(or);
    if (d2 >= 0 && f2 <= d2) return t3.copy(a2);
    let p2 = l2 * f2 - d2 * u2;
    if (p2 <= 0 && l2 >= 0 && d2 <= 0) return s2 = l2 / (l2 - d2), t3.copy(r2).addScaledVector(nr, s2);
    sr.subVectors(e17, o2);
    let m2 = nr.dot(sr), h2 = rr.dot(sr);
    if (h2 >= 0 && m2 <= h2) return t3.copy(o2);
    let g2 = m2 * u2 - l2 * h2;
    if (g2 <= 0 && u2 >= 0 && h2 <= 0) return c2 = u2 / (u2 - h2), t3.copy(r2)[n2(825)](rr, c2);
    let _2 = d2 * h2 - m2 * f2;
    if (_2 <= 0 && f2 - d2 >= 0 && m2 - h2 >= 0) return ir.subVectors(o2, a2), c2 = (f2 - d2) / (f2 - d2 + (m2 - h2)), t3.copy(a2).addScaledVector(ir, c2);
    let v2 = 1 / (_2 + g2 + p2);
    return s2 = g2 * v2, c2 = p2 * v2, t3.copy(r2).addScaledVector(nr, s2).addScaledVector(rr, c2);
  }
  [i(1522)](e17) {
    let t3 = i;
    return e17.a.equals(this.a) && e17.b.equals(this.b) && e17.c[t3(1522)](this.c);
  }
}, fr = class {
  constructor(e17 = new W(1 / 0, 1 / 0, 1 / 0), t3 = new W(-1 / 0, -1 / 0, -1 / 0)) {
    let n2 = i;
    this.isBox3 = true, this[n2(1245)] = e17, this.max = t3;
  }
  set(e17, t3) {
    let n2 = i;
    return this.min[n2(1250)](e17), this[n2(1023)].copy(t3), this;
  }
  setFromArray(e17) {
    let t3 = i;
    this.makeEmpty();
    for (let n2 = 0, r2 = e17.length; n2 < r2; n2 += 3) this[t3(998)](mr.fromArray(e17, n2));
    return this;
  }
  [i(1167)](e17) {
    this.makeEmpty();
    for (let t3 = 0, n2 = e17.count; t3 < n2; t3++) this.expandByPoint(mr.fromBufferAttribute(e17, t3));
    return this;
  }
  setFromPoints(e17) {
    let t3 = i;
    this[t3(1185)]();
    for (let n2 = 0, r2 = e17[t3(660)]; n2 < r2; n2++) this.expandByPoint(e17[n2]);
    return this;
  }
  setFromCenterAndSize(e17, t3) {
    let n2 = mr.copy(t3).multiplyScalar(0.5);
    return this.min.copy(e17).sub(n2), this.max.copy(e17).add(n2), this;
  }
  [i(857)](e17, t3 = false) {
    let n2 = i;
    return this[n2(1185)](), this.expandByObject(e17, t3);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e17) {
    let t3 = i;
    return this.min.copy(e17.min), this[t3(1023)].copy(e17.max), this;
  }
  makeEmpty() {
    let e17 = i;
    return this.min.x = this.min.y = this[e17(1245)].z = 1 / 0, this.max.x = this.max.y = this[e17(1023)].z = -1 / 0, this;
  }
  isEmpty() {
    let e17 = i;
    return this.max.x < this[e17(1245)].x || this.max.y < this.min.y || this[e17(1023)].z < this[e17(1245)].z;
  }
  getCenter(e17) {
    let t3 = i;
    return this.isEmpty() ? e17.set(0, 0, 0) : e17[t3(630)](this[t3(1245)], this.max).multiplyScalar(0.5);
  }
  [i(1502)](e17) {
    let t3 = i;
    return this[t3(229)]() ? e17.set(0, 0, 0) : e17.subVectors(this.max, this[t3(1245)]);
  }
  expandByPoint(e17) {
    return this.min.min(e17), this.max.max(e17), this;
  }
  expandByVector(e17) {
    let t3 = i;
    return this.min[t3(1206)](e17), this.max.add(e17), this;
  }
  [i(937)](e17) {
    let t3 = i;
    return this.min.addScalar(-e17), this[t3(1023)][t3(174)](e17), this;
  }
  expandByObject(e17, t3 = false) {
    let n2 = i;
    e17.updateWorldMatrix(false, false);
    let r2 = e17.geometry;
    if (r2 !== void 0) {
      let i2 = r2.getAttribute(`position`);
      if (t3 === true && i2 !== void 0 && e17.isInstancedMesh !== true) for (let t4 = 0, n3 = i2.count; t4 < n3; t4++) e17.isMesh === true ? e17.getVertexPosition(t4, mr) : mr.fromBufferAttribute(i2, t4), mr.applyMatrix4(e17.matrixWorld), this.expandByPoint(mr);
      else e17.boundingBox === void 0 ? (r2.boundingBox === null && r2.computeBoundingBox(), hr.copy(r2.boundingBox)) : (e17.boundingBox === null && e17.computeBoundingBox(), hr[n2(1250)](e17.boundingBox)), hr.applyMatrix4(e17.matrixWorld), this.union(hr);
    }
    let a2 = e17.children;
    for (let e18 = 0, n3 = a2.length; e18 < n3; e18++) this.expandByObject(a2[e18], t3);
    return this;
  }
  [i(1333)](e17) {
    let t3 = i;
    return e17.x >= this.min.x && e17.x <= this.max.x && e17.y >= this.min.y && e17.y <= this.max.y && e17.z >= this[t3(1245)].z && e17.z <= this.max.z;
  }
  containsBox(e17) {
    let t3 = i;
    return this.min.x <= e17.min.x && e17.max.x <= this.max.x && this.min.y <= e17[t3(1245)].y && e17.max.y <= this[t3(1023)].y && this.min.z <= e17[t3(1245)].z && e17[t3(1023)].z <= this.max.z;
  }
  getParameter(e17, t3) {
    let n2 = i;
    return t3.set((e17.x - this.min.x) / (this[n2(1023)].x - this.min.x), (e17.y - this.min.y) / (this.max.y - this.min.y), (e17.z - this.min.z) / (this[n2(1023)].z - this.min.z));
  }
  [i(969)](e17) {
    let t3 = i;
    return e17.max.x >= this[t3(1245)].x && e17.min.x <= this[t3(1023)].x && e17.max.y >= this[t3(1245)].y && e17.min.y <= this[t3(1023)].y && e17.max.z >= this.min.z && e17[t3(1245)].z <= this.max.z;
  }
  intersectsSphere(e17) {
    let t3 = i;
    return this.clampPoint(e17.center, mr), mr.distanceToSquared(e17.center) <= e17.radius * e17[t3(816)];
  }
  intersectsPlane(e17) {
    let t3 = i, n2, r2;
    return e17.normal.x > 0 ? (n2 = e17.normal.x * this[t3(1245)].x, r2 = e17.normal.x * this.max.x) : (n2 = e17.normal.x * this.max.x, r2 = e17.normal.x * this.min.x), e17.normal.y > 0 ? (n2 += e17.normal.y * this.min.y, r2 += e17[t3(564)].y * this.max.y) : (n2 += e17.normal.y * this[t3(1023)].y, r2 += e17.normal.y * this.min.y), e17.normal.z > 0 ? (n2 += e17.normal.z * this.min.z, r2 += e17.normal.z * this.max.z) : (n2 += e17.normal.z * this.max.z, r2 += e17.normal.z * this.min.z), n2 <= -e17.constant && r2 >= -e17[t3(976)];
  }
  intersectsTriangle(e17) {
    let t3 = i;
    if (this.isEmpty()) return false;
    this.getCenter(Sr), Cr.subVectors(this.max, Sr), gr.subVectors(e17.a, Sr), _r.subVectors(e17.b, Sr), vr.subVectors(e17.c, Sr), yr[t3(974)](_r, gr), br.subVectors(vr, _r), xr.subVectors(gr, vr);
    let n2 = [0, -yr.z, yr.y, 0, -br.z, br.y, 0, -xr.z, xr.y, yr.z, 0, -yr.x, br.z, 0, -br.x, xr.z, 0, -xr.x, -yr.y, yr.x, 0, -br.y, br.x, 0, -xr.y, xr.x, 0];
    return !Er(n2, gr, _r, vr, Cr) || (n2 = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Er(n2, gr, _r, vr, Cr)) ? false : (wr[t3(336)](yr, br), n2 = [wr.x, wr.y, wr.z], Er(n2, gr, _r, vr, Cr));
  }
  clampPoint(e17, t3) {
    return t3.copy(e17).clamp(this.min, this.max);
  }
  distanceToPoint(e17) {
    let t3 = i;
    return this[t3(1243)](e17, mr).distanceTo(e17);
  }
  getBoundingSphere(e17) {
    return this.isEmpty() ? e17.makeEmpty() : (this.getCenter(e17.center), e17.radius = this.getSize(mr).length() * 0.5), e17;
  }
  intersect(e17) {
    let t3 = i;
    return this.min.max(e17.min), this[t3(1023)].min(e17.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e17) {
    return this.min.min(e17.min), this.max.max(e17.max), this;
  }
  applyMatrix4(e17) {
    let t3 = i;
    return this.isEmpty() ? this : (pr[0].set(this.min.x, this.min.y, this[t3(1245)].z).applyMatrix4(e17), pr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e17), pr[2].set(this.min.x, this.max.y, this.min.z)[t3(874)](e17), pr[3].set(this[t3(1245)].x, this.max.y, this.max.z).applyMatrix4(e17), pr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e17), pr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e17), pr[6].set(this.max.x, this[t3(1023)].y, this.min.z).applyMatrix4(e17), pr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e17), this.setFromPoints(pr), this);
  }
  [i(277)](e17) {
    let t3 = i;
    return this[t3(1245)].add(e17), this.max[t3(1034)](e17), this;
  }
  equals(e17) {
    let t3 = i;
    return e17.min[t3(1522)](this.min) && e17.max.equals(this.max);
  }
  [i(497)]() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  [i(1003)](e17) {
    let t3 = i;
    return this.min[t3(823)](e17.min), this.max.fromArray(e17.max), this;
  }
}, pr = [new W(), new W(), new W(), new W(), new W(), new W(), new W(), new W()], mr = new W(), hr = new fr(), gr = new W(), _r = new W(), vr = new W(), yr = new W(), br = new W(), xr = new W(), Sr = new W(), Cr = new W(), wr = new W(), Tr = new W();
function Er(e17, t3, n2, r2, a2) {
  let o2 = i;
  for (let i2 = 0, s2 = e17.length - 3; i2 <= s2; i2 += 3) {
    Tr[o2(823)](e17, i2);
    let s3 = a2.x * Math[o2(1513)](Tr.x) + a2.y * Math[o2(1513)](Tr.y) + a2.z * Math.abs(Tr.z), c2 = t3.dot(Tr), l2 = n2.dot(Tr), u2 = r2.dot(Tr);
    if (Math.max(-Math.max(c2, l2, u2), Math.min(c2, l2, u2)) > s3) return false;
  }
  return true;
}
var Dr = new W(), Or = new U(), kr = 0, Ar = class extends St {
  constructor(e17, t3, n2 = false) {
    let r2 = i;
    if (super(), Array.isArray(e17)) throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);
    this.isBufferAttribute = true, Object[r2(977)](this, `id`, { value: kr++ }), this[r2(1301)] = ``, this.array = e17, this.itemSize = t3, this[r2(1414)] = e17 === void 0 ? 0 : e17[r2(660)] / t3, this.normalized = n2, this[r2(1135)] = lt, this.updateRanges = [], this.gpuType = j, this.version = 0;
  }
  [i(867)]() {
  }
  set needsUpdate(e17) {
    e17 === true && this.version++;
  }
  setUsage(e17) {
    let t3 = i;
    return this[t3(1135)] = e17, this;
  }
  [i(733)](e17, t3) {
    let n2 = i;
    this.updateRanges[n2(1184)]({ start: e17, count: t3 });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e17) {
    let t3 = i;
    return this.name = e17[t3(1301)], this[t3(893)] = new e17.array.constructor(e17.array), this.itemSize = e17.itemSize, this.count = e17.count, this.normalized = e17.normalized, this.usage = e17.usage, this.gpuType = e17.gpuType, this;
  }
  copyAt(e17, t3, n2) {
    let r2 = i;
    e17 *= this[r2(1458)], n2 *= t3[r2(1458)];
    for (let i2 = 0, a2 = this.itemSize; i2 < a2; i2++) this[r2(893)][e17 + i2] = t3.array[n2 + i2];
    return this;
  }
  copyArray(e17) {
    let t3 = i;
    return this[t3(893)].set(e17), this;
  }
  applyMatrix3(e17) {
    let t3 = i;
    if (this.itemSize === 2) for (let n2 = 0, r2 = this[t3(1414)]; n2 < r2; n2++) Or.fromBufferAttribute(this, n2), Or.applyMatrix3(e17), this.setXY(n2, Or.x, Or.y);
    else if (this.itemSize === 3) for (let n2 = 0, r2 = this[t3(1414)]; n2 < r2; n2++) Dr[t3(577)](this, n2), Dr.applyMatrix3(e17), this.setXYZ(n2, Dr.x, Dr.y, Dr.z);
    return this;
  }
  applyMatrix4(e17) {
    let t3 = i;
    for (let n2 = 0, r2 = this[t3(1414)]; n2 < r2; n2++) Dr.fromBufferAttribute(this, n2), Dr.applyMatrix4(e17), this.setXYZ(n2, Dr.x, Dr.y, Dr.z);
    return this;
  }
  applyNormalMatrix(e17) {
    let t3 = i;
    for (let n2 = 0, r2 = this[t3(1414)]; n2 < r2; n2++) Dr.fromBufferAttribute(this, n2), Dr.applyNormalMatrix(e17), this.setXYZ(n2, Dr.x, Dr.y, Dr.z);
    return this;
  }
  transformDirection(e17) {
    let t3 = i;
    for (let n2 = 0, r2 = this.count; n2 < r2; n2++) Dr[t3(577)](this, n2), Dr[t3(775)](e17), this.setXYZ(n2, Dr.x, Dr.y, Dr.z);
    return this;
  }
  set(e17, t3 = 0) {
    return this.array.set(e17, t3), this;
  }
  getComponent(e17, t3) {
    let n2 = i, r2 = this[n2(893)][e17 * this.itemSize + t3];
    return this.normalized && (r2 = Kt(r2, this.array)), r2;
  }
  [i(760)](e17, t3, n2) {
    let r2 = i;
    return this.normalized && (n2 = H(n2, this[r2(893)])), this.array[e17 * this.itemSize + t3] = n2, this;
  }
  getX(e17) {
    let t3 = i, n2 = this[t3(893)][e17 * this.itemSize];
    return this.normalized && (n2 = Kt(n2, this.array)), n2;
  }
  [i(944)](e17, t3) {
    return this.normalized && (t3 = H(t3, this.array)), this.array[e17 * this.itemSize] = t3, this;
  }
  [i(994)](e17) {
    let t3 = i, n2 = this[t3(893)][e17 * this.itemSize + 1];
    return this.normalized && (n2 = Kt(n2, this.array)), n2;
  }
  [i(716)](e17, t3) {
    return this.normalized && (t3 = H(t3, this.array)), this.array[e17 * this.itemSize + 1] = t3, this;
  }
  getZ(e17) {
    let t3 = i, n2 = this[t3(893)][e17 * this.itemSize + 2];
    return this.normalized && (n2 = Kt(n2, this.array)), n2;
  }
  [i(779)](e17, t3) {
    return this.normalized && (t3 = H(t3, this.array)), this.array[e17 * this.itemSize + 2] = t3, this;
  }
  getW(e17) {
    let t3 = this.array[e17 * this.itemSize + 3];
    return this.normalized && (t3 = Kt(t3, this.array)), t3;
  }
  [i(1512)](e17, t3) {
    return this.normalized && (t3 = H(t3, this.array)), this.array[e17 * this.itemSize + 3] = t3, this;
  }
  setXY(e17, t3, n2) {
    return e17 *= this.itemSize, this.normalized && (t3 = H(t3, this.array), n2 = H(n2, this.array)), this.array[e17 + 0] = t3, this.array[e17 + 1] = n2, this;
  }
  setXYZ(e17, t3, n2, r2) {
    return e17 *= this.itemSize, this.normalized && (t3 = H(t3, this.array), n2 = H(n2, this.array), r2 = H(r2, this.array)), this.array[e17 + 0] = t3, this.array[e17 + 1] = n2, this.array[e17 + 2] = r2, this;
  }
  setXYZW(e17, t3, n2, r2, i2) {
    return e17 *= this.itemSize, this.normalized && (t3 = H(t3, this.array), n2 = H(n2, this.array), r2 = H(r2, this.array), i2 = H(i2, this.array)), this.array[e17 + 0] = t3, this.array[e17 + 1] = n2, this.array[e17 + 2] = r2, this.array[e17 + 3] = i2, this;
  }
  onUpload(e17) {
    return this.onUploadCallback = e17, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let e17 = i, t3 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this[e17(893)]), normalized: this.normalized };
    return this.name !== `` && (t3.name = this[e17(1301)]), this.usage !== 35044 && (t3[e17(1135)] = this.usage), t3;
  }
  [i(254)]() {
    this.dispatchEvent({ type: `dispose` });
  }
}, jr = class extends Ar {
  constructor(e17, t3, n2) {
    super(new Uint16Array(e17), t3, n2);
  }
}, Mr = class extends Ar {
  constructor(e17, t3, n2) {
    super(new Int32Array(e17), t3, n2);
  }
}, Nr = class extends Ar {
  constructor(e17, t3, n2) {
    super(new Uint32Array(e17), t3, n2);
  }
}, X = class extends Ar {
  constructor(e17, t3, n2) {
    super(new Float32Array(e17), t3, n2);
  }
}, Pr = new fr(), Fr = new W(), Ir = new W(), Lr = class {
  constructor(e17 = new W(), t3 = -1) {
    this.isSphere = true, this.center = e17, this.radius = t3;
  }
  set(e17, t3) {
    let n2 = i;
    return this[n2(1388)].copy(e17), this[n2(816)] = t3, this;
  }
  [i(634)](e17, t3) {
    let n2 = i, r2 = this.center;
    t3 === void 0 ? Pr.setFromPoints(e17).getCenter(r2) : r2.copy(t3);
    let a2 = 0;
    for (let t4 = 0, i2 = e17.length; t4 < i2; t4++) a2 = Math[n2(1023)](a2, r2[n2(1058)](e17[t4]));
    return this.radius = Math.sqrt(a2), this;
  }
  copy(e17) {
    return this.center.copy(e17.center), this.radius = e17.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e17) {
    let t3 = i;
    return e17.distanceToSquared(this[t3(1388)]) <= this.radius * this.radius;
  }
  distanceToPoint(e17) {
    return e17[i(1473)](this.center) - this.radius;
  }
  intersectsSphere(e17) {
    let t3 = i, n2 = this.radius + e17[t3(816)];
    return e17.center.distanceToSquared(this.center) <= n2 * n2;
  }
  intersectsBox(e17) {
    return e17[i(599)](this);
  }
  [i(871)](e17) {
    return Math.abs(e17.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e17, t3) {
    let n2 = i, r2 = this.center[n2(1058)](e17);
    return t3.copy(e17), r2 > this.radius * this[n2(816)] && (t3.sub(this.center)[n2(473)](), t3.multiplyScalar(this.radius).add(this.center)), t3;
  }
  getBoundingBox(e17) {
    return this.isEmpty() ? (e17.makeEmpty(), e17) : (e17.set(this.center, this.center), e17.expandByScalar(this.radius), e17);
  }
  applyMatrix4(e17) {
    return this.center.applyMatrix4(e17), this.radius *= e17.getMaxScaleOnAxis(), this;
  }
  translate(e17) {
    return this.center.add(e17), this;
  }
  expandByPoint(e17) {
    let t3 = i;
    if (this[t3(229)]()) return this.center[t3(1250)](e17), this[t3(816)] = 0, this;
    Fr.subVectors(e17, this.center);
    let n2 = Fr.lengthSq();
    if (n2 > this.radius * this.radius) {
      let e18 = Math.sqrt(n2), t4 = (e18 - this.radius) * 0.5;
      this.center.addScaledVector(Fr, t4 / e18), this.radius += t4;
    }
    return this;
  }
  [i(358)](e17) {
    let t3 = i;
    return e17[t3(229)]() ? this : this.isEmpty() ? (this[t3(1250)](e17), this) : (this[t3(1388)][t3(1522)](e17.center) === true ? this.radius = Math.max(this.radius, e17[t3(816)]) : (Ir.subVectors(e17.center, this.center).setLength(e17.radius), this.expandByPoint(Fr[t3(1250)](e17.center).add(Ir)), this.expandByPoint(Fr[t3(1250)](e17.center).sub(Ir))), this);
  }
  equals(e17) {
    return e17.center.equals(this.center) && e17.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let e17 = i;
    return { radius: this.radius, center: this.center[e17(1263)]() };
  }
  fromJSON(e17) {
    let t3 = i;
    return this.radius = e17.radius, this[t3(1388)].fromArray(e17.center), this;
  }
}, Rr = 0, zr = new J(), Br = new Hn(), Vr = new W(), Hr = new fr(), Ur = new fr(), Wr = new W(), Gr = class e6 extends St {
  constructor() {
    let e17 = i;
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Rr++ }), this.uuid = Dt(), this.name = ``, this.type = e17(891), this[e17(1259)] = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e17) {
    return Array[i(1277)](e17) ? this.index = new (dt(e17) ? Nr : jr)(e17, 1) : this.index = e17, this;
  }
  [i(920)](e17, t3 = 0) {
    return this.indirect = e17, this.indirectOffset = t3, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e17) {
    let t3 = i;
    return this[t3(1106)][e17];
  }
  setAttribute(e17, t3) {
    return this.attributes[e17] = t3, this;
  }
  deleteAttribute(e17) {
    return delete this.attributes[e17], this;
  }
  hasAttribute(e17) {
    return this.attributes[e17] !== void 0;
  }
  addGroup(e17, t3, n2 = 0) {
    let r2 = i;
    this[r2(711)].push({ start: e17, count: t3, materialIndex: n2 });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e17, t3) {
    let n2 = i;
    this.drawRange[n2(392)] = e17, this.drawRange[n2(1414)] = t3;
  }
  applyMatrix4(e17) {
    let t3 = i, n2 = this[t3(1106)].position;
    n2 !== void 0 && (n2[t3(874)](e17), n2.needsUpdate = true);
    let r2 = this[t3(1106)].normal;
    if (r2 !== void 0) {
      let t4 = new G().getNormalMatrix(e17);
      r2.applyNormalMatrix(t4), r2.needsUpdate = true;
    }
    let a2 = this.attributes.tangent;
    return a2 !== void 0 && (a2[t3(775)](e17), a2.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this[t3(741)] !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e17) {
    return zr.makeRotationFromQuaternion(e17), this.applyMatrix4(zr), this;
  }
  [i(1322)](e17) {
    return zr.makeRotationX(e17), this.applyMatrix4(zr), this;
  }
  [i(1169)](e17) {
    return zr[i(656)](e17), this.applyMatrix4(zr), this;
  }
  [i(1510)](e17) {
    return zr.makeRotationZ(e17), this.applyMatrix4(zr), this;
  }
  translate(e17, t3, n2) {
    return zr.makeTranslation(e17, t3, n2), this.applyMatrix4(zr), this;
  }
  scale(e17, t3, n2) {
    return zr.makeScale(e17, t3, n2), this.applyMatrix4(zr), this;
  }
  lookAt(e17) {
    let t3 = i;
    return Br.lookAt(e17), Br[t3(494)](), this[t3(874)](Br[t3(307)]), this;
  }
  center() {
    let e17 = i;
    return this.computeBoundingBox(), this.boundingBox.getCenter(Vr).negate(), this[e17(277)](Vr.x, Vr.y, Vr.z), this;
  }
  setFromPoints(e17) {
    let t3 = i, n2 = this.getAttribute(t3(1477));
    if (n2 === void 0) {
      let t4 = [];
      for (let n3 = 0, r2 = e17.length; n3 < r2; n3++) {
        let r3 = e17[n3];
        t4.push(r3.x, r3.y, r3.z || 0);
      }
      this.setAttribute(`position`, new X(t4, 3));
    } else {
      let r2 = Math.min(e17.length, n2.count);
      for (let t4 = 0; t4 < r2; t4++) {
        let r3 = e17[t4];
        n2.setXYZ(t4, r3.x, r3.y, r3.z || 0);
      }
      e17.length > n2.count && z(t3(1233)), n2.needsUpdate = true;
    }
    return this;
  }
  [i(551)]() {
    let e17 = i;
    this.boundingBox === null && (this[e17(1321)] = new fr());
    let t3 = this.attributes[e17(1477)], n2 = this.morphAttributes.position;
    if (t3 && t3.isGLBufferAttribute) {
      B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`, this), this.boundingBox.set(new W(-1 / 0, -1 / 0, -1 / 0), new W(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t3 !== void 0) {
      if (this[e17(1321)].setFromBufferAttribute(t3), n2) for (let t4 = 0, r2 = n2.length; t4 < r2; t4++) {
        let r3 = n2[t4];
        Hr.setFromBufferAttribute(r3), this.morphTargetsRelative ? (Wr[e17(630)](this[e17(1321)].min, Hr[e17(1245)]), this.boundingBox.expandByPoint(Wr), Wr.addVectors(this.boundingBox.max, Hr.max), this.boundingBox[e17(998)](Wr)) : (this[e17(1321)].expandByPoint(Hr[e17(1245)]), this.boundingBox.expandByPoint(Hr.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this[e17(1321)].min.x) || isNaN(this.boundingBox[e17(1245)].y) || isNaN(this.boundingBox.min.z)) && B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`, this);
  }
  computeBoundingSphere() {
    let e17 = i;
    this.boundingSphere === null && (this.boundingSphere = new Lr());
    let t3 = this.attributes.position, n2 = this.morphAttributes.position;
    if (t3 && t3.isGLBufferAttribute) {
      B(e17(589), this), this.boundingSphere.set(new W(), 1 / 0);
      return;
    }
    if (t3) {
      let r2 = this[e17(741)].center;
      if (Hr.setFromBufferAttribute(t3), n2) for (let t4 = 0, r3 = n2.length; t4 < r3; t4++) {
        let r4 = n2[t4];
        Ur.setFromBufferAttribute(r4), this[e17(755)] ? (Wr[e17(630)](Hr.min, Ur.min), Hr[e17(998)](Wr), Wr.addVectors(Hr[e17(1023)], Ur.max), Hr.expandByPoint(Wr)) : (Hr[e17(998)](Ur.min), Hr.expandByPoint(Ur.max));
      }
      Hr.getCenter(r2);
      let i2 = 0;
      for (let n3 = 0, a2 = t3[e17(1414)]; n3 < a2; n3++) Wr.fromBufferAttribute(t3, n3), i2 = Math.max(i2, r2.distanceToSquared(Wr));
      if (n2) for (let a2 = 0, o2 = n2[e17(660)]; a2 < o2; a2++) {
        let o3 = n2[a2], s2 = this.morphTargetsRelative;
        for (let n3 = 0, a3 = o3[e17(1414)]; n3 < a3; n3++) Wr.fromBufferAttribute(o3, n3), s2 && (Vr.fromBufferAttribute(t3, n3), Wr[e17(1034)](Vr)), i2 = Math.max(i2, r2.distanceToSquared(Wr));
      }
      this[e17(741)].radius = Math.sqrt(i2), isNaN(this[e17(741)].radius) && B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`, this);
    }
  }
  computeTangents() {
    let e17 = i, t3 = this.index, n2 = this.attributes;
    if (t3 === null || n2.position === void 0 || n2.normal === void 0 || n2.uv === void 0) {
      B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);
      return;
    }
    let r2 = n2.position, a2 = n2[e17(564)], o2 = n2.uv;
    this.hasAttribute(`tangent`) === false && this.setAttribute(`tangent`, new Ar(new Float32Array(4 * r2.count), 4));
    let s2 = this.getAttribute(e17(1387)), c2 = [], l2 = [];
    for (let e18 = 0; e18 < r2.count; e18++) c2[e18] = new W(), l2[e18] = new W();
    let u2 = new W(), d2 = new W(), f2 = new W(), p2 = new U(), m2 = new U(), h2 = new U(), g2 = new W(), _2 = new W();
    function v2(t4, n3, i2) {
      let a3 = e17;
      u2.fromBufferAttribute(r2, t4), d2.fromBufferAttribute(r2, n3), f2.fromBufferAttribute(r2, i2), p2[a3(577)](o2, t4), m2.fromBufferAttribute(o2, n3), h2.fromBufferAttribute(o2, i2), d2.sub(u2), f2.sub(u2), m2[a3(1206)](p2), h2.sub(p2);
      let s3 = 1 / (m2.x * h2.y - h2.x * m2.y);
      isFinite(s3) && (g2[a3(1250)](d2).multiplyScalar(h2.y)[a3(825)](f2, -m2.y)[a3(1072)](s3), _2.copy(f2).multiplyScalar(m2.x).addScaledVector(d2, -h2.x).multiplyScalar(s3), c2[t4].add(g2), c2[n3][a3(1034)](g2), c2[i2].add(g2), l2[t4].add(_2), l2[n3].add(_2), l2[i2].add(_2));
    }
    let y2 = this.groups;
    y2[e17(660)] === 0 && (y2 = [{ start: 0, count: t3.count }]);
    for (let n3 = 0, r3 = y2.length; n3 < r3; ++n3) {
      let r4 = y2[n3], i2 = r4.start, a3 = r4.count;
      for (let n4 = i2, r5 = i2 + a3; n4 < r5; n4 += 3) v2(t3[e17(879)](n4 + 0), t3.getX(n4 + 1), t3[e17(879)](n4 + 2));
    }
    let b2 = new W(), x2 = new W(), S2 = new W(), C2 = new W();
    function w2(t4) {
      let n3 = e17;
      S2.fromBufferAttribute(a2, t4), C2.copy(S2);
      let r3 = c2[t4];
      b2.copy(r3), b2.sub(S2[n3(1072)](S2.dot(r3))).normalize(), x2.crossVectors(C2, r3);
      let i2 = x2.dot(l2[t4]) < 0 ? -1 : 1;
      s2[n3(505)](t4, b2.x, b2.y, b2.z, i2);
    }
    for (let e18 = 0, n3 = y2.length; e18 < n3; ++e18) {
      let n4 = y2[e18], r3 = n4.start, i2 = n4.count;
      for (let e19 = r3, n5 = r3 + i2; e19 < n5; e19 += 3) w2(t3.getX(e19 + 0)), w2(t3.getX(e19 + 1)), w2(t3.getX(e19 + 2));
    }
  }
  computeVertexNormals() {
    let e17 = i, t3 = this.index, n2 = this[e17(715)](`position`);
    if (n2 !== void 0) {
      let r2 = this.getAttribute(`normal`);
      if (r2 === void 0) r2 = new Ar(new Float32Array(n2.count * 3), 3), this[e17(248)](`normal`, r2);
      else for (let t4 = 0, n3 = r2.count; t4 < n3; t4++) r2[e17(604)](t4, 0, 0, 0);
      let i2 = new W(), a2 = new W(), o2 = new W(), s2 = new W(), c2 = new W(), l2 = new W(), u2 = new W(), d2 = new W();
      if (t3) for (let f2 = 0, p2 = t3.count; f2 < p2; f2 += 3) {
        let p3 = t3.getX(f2 + 0), m2 = t3.getX(f2 + 1), h2 = t3.getX(f2 + 2);
        i2.fromBufferAttribute(n2, p3), a2.fromBufferAttribute(n2, m2), o2[e17(577)](n2, h2), u2.subVectors(o2, a2), d2.subVectors(i2, a2), u2[e17(1067)](d2), s2.fromBufferAttribute(r2, p3), c2[e17(577)](r2, m2), l2.fromBufferAttribute(r2, h2), s2.add(u2), c2.add(u2), l2.add(u2), r2[e17(604)](p3, s2.x, s2.y, s2.z), r2.setXYZ(m2, c2.x, c2.y, c2.z), r2.setXYZ(h2, l2.x, l2.y, l2.z);
      }
      else for (let e18 = 0, t4 = n2.count; e18 < t4; e18 += 3) i2.fromBufferAttribute(n2, e18 + 0), a2.fromBufferAttribute(n2, e18 + 1), o2.fromBufferAttribute(n2, e18 + 2), u2.subVectors(o2, a2), d2.subVectors(i2, a2), u2.cross(d2), r2.setXYZ(e18 + 0, u2.x, u2.y, u2.z), r2.setXYZ(e18 + 1, u2.x, u2.y, u2.z), r2.setXYZ(e18 + 2, u2.x, u2.y, u2.z);
      this.normalizeNormals(), r2.needsUpdate = true;
    }
  }
  normalizeNormals() {
    let e17 = i, t3 = this.attributes.normal;
    for (let n2 = 0, r2 = t3.count; n2 < r2; n2++) Wr.fromBufferAttribute(t3, n2), Wr[e17(473)](), t3.setXYZ(n2, Wr.x, Wr.y, Wr.z);
  }
  toNonIndexed() {
    let t3 = i;
    function n2(e17, t4) {
      let n3 = $, r3 = e17[n3(893)], i2 = e17[n3(1458)], a3 = e17.normalized, o3 = new r3[n3(1178)](t4[n3(660)] * i2), s3 = 0, c3 = 0;
      for (let a4 = 0, l2 = t4.length; a4 < l2; a4++) {
        s3 = e17[n3(618)] ? t4[a4] * e17.data.stride + e17.offset : t4[a4] * i2;
        for (let e18 = 0; e18 < i2; e18++) o3[c3++] = r3[s3++];
      }
      return new Ar(o3, i2, a3);
    }
    if (this.index === null) return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`), this;
    let r2 = new e6(), a2 = this.index.array, o2 = this.attributes;
    for (let e17 in o2) {
      let t4 = o2[e17], i2 = n2(t4, a2);
      r2.setAttribute(e17, i2);
    }
    let s2 = this.morphAttributes;
    for (let e17 in s2) {
      let i2 = [], o3 = s2[e17];
      for (let e18 = 0, r3 = o3.length; e18 < r3; e18++) {
        let r4 = o3[e18], s3 = n2(r4, a2);
        i2[t3(1184)](s3);
      }
      r2.morphAttributes[e17] = i2;
    }
    r2.morphTargetsRelative = this.morphTargetsRelative;
    let c2 = this.groups;
    for (let e17 = 0, t4 = c2.length; e17 < t4; e17++) {
      let t5 = c2[e17];
      r2.addGroup(t5.start, t5.count, t5.materialIndex);
    }
    return r2;
  }
  toJSON() {
    let e17 = i, t3 = { metadata: { version: 4.7, type: `BufferGeometry`, generator: `BufferGeometry.toJSON` } };
    if (t3.uuid = this.uuid, t3.type = this.type, this[e17(1301)] !== `` && (t3.name = this.name), Object.keys(this.userData).length > 0 && (t3.userData = this.userData), this[e17(1008)] !== void 0) {
      let e18 = this.parameters;
      for (let n3 in e18) e18[n3] !== void 0 && (t3[n3] = e18[n3]);
      return t3;
    }
    t3.data = { attributes: {} };
    let n2 = this[e17(1259)];
    n2 !== null && (t3.data.index = { type: n2.array.constructor.name, array: Array.prototype.slice[e17(1183)](n2[e17(893)]) });
    let r2 = this.attributes;
    for (let e18 in r2) {
      let n3 = r2[e18];
      t3.data.attributes[e18] = n3.toJSON(t3.data);
    }
    let a2 = {}, o2 = false;
    for (let n3 in this.morphAttributes) {
      let r3 = this.morphAttributes[n3], i2 = [];
      for (let n4 = 0, a3 = r3[e17(660)]; n4 < a3; n4++) {
        let e18 = r3[n4];
        i2.push(e18.toJSON(t3.data));
      }
      i2.length > 0 && (a2[n3] = i2, o2 = true);
    }
    o2 && (t3.data.morphAttributes = a2, t3[e17(1304)].morphTargetsRelative = this.morphTargetsRelative);
    let s2 = this.groups;
    s2.length > 0 && (t3.data.groups = JSON.parse(JSON.stringify(s2)));
    let c2 = this[e17(741)];
    return c2 !== null && (t3[e17(1304)].boundingSphere = c2[e17(497)]()), t3;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e17) {
    let t3 = i;
    this[t3(1259)] = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    let n2 = {};
    this[t3(1301)] = e17.name;
    let r2 = e17[t3(1259)];
    r2 !== null && this.setIndex(r2.clone());
    let a2 = e17.attributes;
    for (let e18 in a2) {
      let t4 = a2[e18];
      this.setAttribute(e18, t4.clone(n2));
    }
    let o2 = e17[t3(1175)];
    for (let e18 in o2) {
      let r3 = [], i2 = o2[e18];
      for (let e19 = 0, a3 = i2.length; e19 < a3; e19++) r3[t3(1184)](i2[e19].clone(n2));
      this.morphAttributes[e18] = r3;
    }
    this.morphTargetsRelative = e17.morphTargetsRelative;
    let s2 = e17.groups;
    for (let e18 = 0, t4 = s2.length; e18 < t4; e18++) {
      let t5 = s2[e18];
      this.addGroup(t5.start, t5.count, t5.materialIndex);
    }
    let c2 = e17[t3(1321)];
    c2 !== null && (this[t3(1321)] = c2.clone());
    let l2 = e17.boundingSphere;
    return l2 !== null && (this.boundingSphere = l2.clone()), this.drawRange.start = e17.drawRange.start, this.drawRange[t3(1414)] = e17.drawRange.count, this[t3(727)] = e17.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
}, Kr = class {
  constructor(e17, t3) {
    this.isInterleavedBuffer = true, this.array = e17, this.stride = t3, this.count = e17 === void 0 ? 0 : e17.length / t3, this.usage = lt, this.updateRanges = [], this.version = 0, this.uuid = Dt();
  }
  [i(867)]() {
  }
  set needsUpdate(e17) {
    e17 === true && this.version++;
  }
  setUsage(e17) {
    return this.usage = e17, this;
  }
  addUpdateRange(e17, t3) {
    let n2 = i;
    this.updateRanges[n2(1184)]({ start: e17, count: t3 });
  }
  clearUpdateRanges() {
    let e17 = i;
    this.updateRanges[e17(660)] = 0;
  }
  copy(e17) {
    return this.array = new e17.array.constructor(e17.array), this.count = e17.count, this.stride = e17.stride, this.usage = e17.usage, this;
  }
  [i(247)](e17, t3, n2) {
    let r2 = i;
    e17 *= this.stride, n2 *= t3.stride;
    for (let i2 = 0, a2 = this[r2(1228)]; i2 < a2; i2++) this.array[e17 + i2] = t3.array[n2 + i2];
    return this;
  }
  set(e17, t3 = 0) {
    return this.array.set(e17, t3), this;
  }
  clone(e17) {
    let t3 = i;
    e17[t3(601)] === void 0 && (e17.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Dt()), e17.arrayBuffers[this.array[t3(918)]._uuid] === void 0 && (e17.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    let n2 = new this.array[t3(1178)](e17[t3(601)][this.array.buffer._uuid]), r2 = new this.constructor(n2, this.stride);
    return r2[t3(1325)](this.usage), r2;
  }
  onUpload(e17) {
    return this.onUploadCallback = e17, this;
  }
  toJSON(e17) {
    let t3 = i;
    return e17.arrayBuffers === void 0 && (e17.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this[t3(893)].buffer[t3(1466)] = Dt()), e17.arrayBuffers[this.array.buffer._uuid] === void 0 && (e17.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this[t3(893)].buffer))), { uuid: this.uuid, buffer: this.array[t3(918)][t3(1466)], type: this.array.constructor.name, stride: this.stride };
  }
}, qr = new W(), Jr = class e7 {
  constructor(e17, t3, n2, r2 = false) {
    this.isInterleavedBufferAttribute = true, this.name = ``, this.data = e17, this.itemSize = t3, this.offset = n2, this.normalized = r2;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set [i(318)](e17) {
    let t3 = i;
    this[t3(1304)].needsUpdate = e17;
  }
  applyMatrix4(e17) {
    let t3 = i;
    for (let n2 = 0, r2 = this[t3(1304)][t3(1414)]; n2 < r2; n2++) qr.fromBufferAttribute(this, n2), qr.applyMatrix4(e17), this.setXYZ(n2, qr.x, qr.y, qr.z);
    return this;
  }
  [i(438)](e17) {
    for (let t3 = 0, n2 = this.count; t3 < n2; t3++) qr.fromBufferAttribute(this, t3), qr.applyNormalMatrix(e17), this.setXYZ(t3, qr.x, qr.y, qr.z);
    return this;
  }
  transformDirection(e17) {
    for (let t3 = 0, n2 = this.count; t3 < n2; t3++) qr.fromBufferAttribute(this, t3), qr.transformDirection(e17), this.setXYZ(t3, qr.x, qr.y, qr.z);
    return this;
  }
  getComponent(e17, t3) {
    let n2 = i, r2 = this.array[e17 * this.data.stride + this.offset + t3];
    return this[n2(1393)] && (r2 = Kt(r2, this.array)), r2;
  }
  setComponent(e17, t3, n2) {
    return this.normalized && (n2 = H(n2, this.array)), this.data.array[e17 * this.data.stride + this.offset + t3] = n2, this;
  }
  [i(944)](e17, t3) {
    let n2 = i;
    return this.normalized && (t3 = H(t3, this.array)), this.data[n2(893)][e17 * this.data.stride + this[n2(1377)]] = t3, this;
  }
  setY(e17, t3) {
    let n2 = i;
    return this.normalized && (t3 = H(t3, this.array)), this.data.array[e17 * this[n2(1304)].stride + this.offset + 1] = t3, this;
  }
  [i(779)](e17, t3) {
    let n2 = i;
    return this.normalized && (t3 = H(t3, this.array)), this[n2(1304)].array[e17 * this.data.stride + this.offset + 2] = t3, this;
  }
  setW(e17, t3) {
    let n2 = i;
    return this.normalized && (t3 = H(t3, this.array)), this.data[n2(893)][e17 * this[n2(1304)][n2(1228)] + this.offset + 3] = t3, this;
  }
  getX(e17) {
    let t3 = i, n2 = this.data.array[e17 * this[t3(1304)].stride + this[t3(1377)]];
    return this.normalized && (n2 = Kt(n2, this.array)), n2;
  }
  getY(e17) {
    let t3 = i, n2 = this.data.array[e17 * this[t3(1304)].stride + this.offset + 1];
    return this.normalized && (n2 = Kt(n2, this.array)), n2;
  }
  getZ(e17) {
    let t3 = i, n2 = this.data.array[e17 * this.data.stride + this.offset + 2];
    return this.normalized && (n2 = Kt(n2, this[t3(893)])), n2;
  }
  getW(e17) {
    let t3 = i, n2 = this[t3(1304)].array[e17 * this.data.stride + this.offset + 3];
    return this.normalized && (n2 = Kt(n2, this.array)), n2;
  }
  setXY(e17, t3, n2) {
    let r2 = i;
    return e17 = e17 * this.data.stride + this.offset, this.normalized && (t3 = H(t3, this.array), n2 = H(n2, this.array)), this.data.array[e17 + 0] = t3, this.data[r2(893)][e17 + 1] = n2, this;
  }
  setXYZ(e17, t3, n2, r2) {
    let a2 = i;
    return e17 = e17 * this.data[a2(1228)] + this[a2(1377)], this[a2(1393)] && (t3 = H(t3, this.array), n2 = H(n2, this.array), r2 = H(r2, this[a2(893)])), this.data.array[e17 + 0] = t3, this[a2(1304)].array[e17 + 1] = n2, this.data.array[e17 + 2] = r2, this;
  }
  setXYZW(e17, t3, n2, r2, a2) {
    let o2 = i;
    return e17 = e17 * this.data.stride + this.offset, this.normalized && (t3 = H(t3, this[o2(893)]), n2 = H(n2, this[o2(893)]), r2 = H(r2, this.array), a2 = H(a2, this.array)), this.data[o2(893)][e17 + 0] = t3, this.data[o2(893)][e17 + 1] = n2, this[o2(1304)].array[e17 + 2] = r2, this.data.array[e17 + 3] = a2, this;
  }
  clone(t3) {
    let n2 = i;
    if (t3 === void 0) {
      _t(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);
      let e17 = [];
      for (let t4 = 0; t4 < this.count; t4++) {
        let n3 = t4 * this.data.stride + this.offset;
        for (let t5 = 0; t5 < this.itemSize; t5++) e17.push(this.data.array[n3 + t5]);
      }
      return new Ar(new this.array.constructor(e17), this.itemSize, this[n2(1393)]);
    } else return t3.interleavedBuffers === void 0 && (t3.interleavedBuffers = {}), t3.interleavedBuffers[this.data.uuid] === void 0 && (t3[n2(573)][this.data[n2(797)]] = this.data.clone(t3)), new e7(t3[n2(573)][this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e17) {
    let t3 = i;
    if (e17 === void 0) {
      _t(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);
      let e18 = [];
      for (let n2 = 0; n2 < this.count; n2++) {
        let r2 = n2 * this.data.stride + this.offset;
        for (let n3 = 0; n3 < this.itemSize; n3++) e18[t3(1184)](this[t3(1304)][t3(893)][r2 + n3]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: e18, normalized: this.normalized };
    } else return e17.interleavedBuffers === void 0 && (e17.interleavedBuffers = {}), e17.interleavedBuffers[this.data.uuid] === void 0 && (e17.interleavedBuffers[this[t3(1304)][t3(797)]] = this.data[t3(497)](e17)), { isInterleavedBufferAttribute: true, itemSize: this[t3(1458)], data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}, Yr = 0, Xr = class extends St {
  constructor() {
    let e17 = i;
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Yr++ }), this.uuid = Dt(), this.name = ``, this.type = `Material`, this.blending = 1, this.side = 0, this[e17(264)] = false, this[e17(1226)] = 1, this[e17(1429)] = false, this.alphaHash = false, this.blendSrc = 204, this[e17(1127)] = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this[e17(743)] = null, this.blendEquationAlpha = null, this.blendColor = new Y(0, 0, 0), this.blendAlpha = 0, this[e17(946)] = 3, this[e17(1132)] = true, this[e17(678)] = true, this[e17(699)] = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this[e17(440)] = ct, this.stencilZFail = ct, this[e17(751)] = ct, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this[e17(1248)] = false, this[e17(243)] = 0, this.polygonOffsetUnits = 0, this[e17(1128)] = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this[e17(1125)] = true, this.userData = {}, this[e17(235)] = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    let e17 = i;
    return this[e17(566)];
  }
  set [i(283)](e17) {
    let t3 = i;
    this[t3(566)] > 0 != e17 > 0 && this.version++, this[t3(566)] = e17;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e17) {
    let t3 = i;
    if (e17 !== void 0) for (let n2 in e17) {
      let r2 = e17[n2];
      if (r2 === void 0) {
        z(`Material: parameter '` + n2 + t3(612));
        continue;
      }
      let i2 = this[n2];
      if (i2 === void 0) {
        z(`Material: '` + n2 + `' is not a property of THREE.` + this.type + `.`);
        continue;
      }
      i2 && i2.isColor ? i2.set(r2) : i2 && i2.isVector3 && r2 && r2.isVector3 ? i2[t3(1250)](r2) : this[n2] = r2;
    }
  }
  toJSON(e17) {
    let t3 = i, n2 = e17 === void 0 || typeof e17 == `string`;
    n2 && (e17 = { textures: {}, images: {} });
    let r2 = { metadata: { version: 4.7, type: `Material`, generator: t3(1371) } };
    r2.uuid = this.uuid, r2.type = this.type, this[t3(1301)] !== `` && (r2.name = this.name), this.color && this.color.isColor && (r2.color = this[t3(1119)].getHex()), this.roughness !== void 0 && (r2.roughness = this[t3(561)]), this[t3(305)] !== void 0 && (r2[t3(305)] = this[t3(305)]), this.sheen !== void 0 && (r2[t3(1391)] = this[t3(1391)]), this.sheenColor && this.sheenColor[t3(1059)] && (r2.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (r2.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive[t3(1059)] && (r2[t3(1006)] = this[t3(1006)][t3(1361)]()), this.emissiveIntensity !== void 0 && this[t3(738)] !== 1 && (r2.emissiveIntensity = this.emissiveIntensity), this[t3(230)] && this[t3(230)].isColor && (r2[t3(230)] = this.specular.getHex()), this.specularIntensity !== void 0 && (r2.specularIntensity = this[t3(1212)]), this.specularColor && this.specularColor.isColor && (r2[t3(1025)] = this.specularColor[t3(1361)]()), this[t3(563)] !== void 0 && (r2.shininess = this.shininess), this.clearcoat !== void 0 && (r2[t3(1045)] = this.clearcoat), this.clearcoatRoughness !== void 0 && (r2.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (r2.clearcoatMap = this.clearcoatMap.toJSON(e17).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap[t3(1055)] && (r2[t3(196)] = this.clearcoatRoughnessMap.toJSON(e17)[t3(797)]), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (r2.clearcoatNormalMap = this[t3(1136)][t3(497)](e17).uuid, r2[t3(237)] = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (r2[t3(289)] = this.sheenColorMap[t3(497)](e17).uuid), this[t3(686)] && this[t3(686)].isTexture && (r2.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e17).uuid), this.dispersion !== void 0 && (r2[t3(815)] = this.dispersion), this.iridescence !== void 0 && (r2[t3(274)] = this[t3(274)]), this.iridescenceIOR !== void 0 && (r2.iridescenceIOR = this[t3(1364)]), this.iridescenceThicknessRange !== void 0 && (r2.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (r2.iridescenceMap = this.iridescenceMap.toJSON(e17).uuid), this.iridescenceThicknessMap && this[t3(658)].isTexture && (r2.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e17).uuid), this.anisotropy !== void 0 && (r2.anisotropy = this[t3(1091)]), this.anisotropyRotation !== void 0 && (r2.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (r2.anisotropyMap = this.anisotropyMap.toJSON(e17)[t3(797)]), this.map && this[t3(579)].isTexture && (r2[t3(579)] = this[t3(579)][t3(497)](e17).uuid), this.matcap && this.matcap.isTexture && (r2.matcap = this.matcap.toJSON(e17).uuid), this.alphaMap && this.alphaMap.isTexture && (r2.alphaMap = this.alphaMap.toJSON(e17).uuid), this.lightMap && this.lightMap.isTexture && (r2[t3(1054)] = this.lightMap.toJSON(e17).uuid, r2.lightMapIntensity = this.lightMapIntensity), this[t3(456)] && this.aoMap.isTexture && (r2.aoMap = this.aoMap.toJSON(e17).uuid, r2.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (r2.bumpMap = this.bumpMap[t3(497)](e17).uuid, r2.bumpScale = this.bumpScale), this[t3(1083)] && this.normalMap.isTexture && (r2.normalMap = this.normalMap.toJSON(e17)[t3(797)], r2.normalMapType = this.normalMapType, r2.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (r2[t3(180)] = this[t3(180)].toJSON(e17).uuid, r2.displacementScale = this[t3(342)], r2.displacementBias = this.displacementBias), this.roughnessMap && this[t3(1289)].isTexture && (r2.roughnessMap = this.roughnessMap.toJSON(e17).uuid), this.metalnessMap && this.metalnessMap.isTexture && (r2[t3(698)] = this.metalnessMap[t3(497)](e17).uuid), this.emissiveMap && this.emissiveMap.isTexture && (r2[t3(691)] = this.emissiveMap.toJSON(e17).uuid), this.specularMap && this[t3(481)].isTexture && (r2.specularMap = this.specularMap.toJSON(e17).uuid), this.specularIntensityMap && this[t3(1445)].isTexture && (r2.specularIntensityMap = this[t3(1445)].toJSON(e17)[t3(797)]), this[t3(1065)] && this[t3(1065)].isTexture && (r2.specularColorMap = this.specularColorMap[t3(497)](e17).uuid), this.envMap && this.envMap.isTexture && (r2.envMap = this.envMap[t3(497)](e17).uuid, this.combine !== void 0 && (r2[t3(534)] = this.combine)), this.envMapRotation !== void 0 && (r2.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (r2.envMapIntensity = this[t3(703)]), this.reflectivity !== void 0 && (r2.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (r2.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap[t3(1055)] && (r2[t3(1283)] = this.gradientMap.toJSON(e17).uuid), this.transmission !== void 0 && (r2.transmission = this.transmission), this.transmissionMap && this[t3(864)].isTexture && (r2.transmissionMap = this.transmissionMap.toJSON(e17).uuid), this.thickness !== void 0 && (r2.thickness = this.thickness), this.thicknessMap && this[t3(613)][t3(1055)] && (r2.thicknessMap = this.thicknessMap.toJSON(e17).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (r2.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (r2.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (r2.size = this.size), this.shadowSide !== null && (r2.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (r2.sizeAttenuation = this[t3(418)]), this[t3(1290)] !== 1 && (r2[t3(1290)] = this.blending), this[t3(1319)] !== 0 && (r2.side = this[t3(1319)]), this.vertexColors === true && (r2.vertexColors = true), this.opacity < 1 && (r2.opacity = this.opacity), this.transparent === true && (r2.transparent = true), this.blendSrc !== 204 && (r2.blendSrc = this.blendSrc), this.blendDst !== 205 && (r2.blendDst = this[t3(1127)]), this[t3(453)] !== 100 && (r2.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (r2.blendSrcAlpha = this[t3(794)]), this.blendDstAlpha !== null && (r2.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (r2.blendEquationAlpha = this.blendEquationAlpha), this[t3(821)] && this.blendColor.isColor && (r2.blendColor = this.blendColor[t3(1361)]()), this.blendAlpha !== 0 && (r2.blendAlpha = this[t3(632)]), this[t3(946)] !== 3 && (r2[t3(946)] = this[t3(946)]), this.depthTest === false && (r2.depthTest = this[t3(1132)]), this.depthWrite === false && (r2[t3(678)] = this[t3(678)]), this.colorWrite === false && (r2.colorWrite = this.colorWrite), this[t3(699)] !== 255 && (r2.stencilWriteMask = this[t3(699)]), this[t3(724)] !== 519 && (r2.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (r2.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (r2.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (r2.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (r2.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (r2.stencilZPass = this.stencilZPass), this.stencilWrite === true && (r2.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (r2.rotation = this[t3(320)]), this.polygonOffset === true && (r2.polygonOffset = true), this.polygonOffsetFactor !== 0 && (r2.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (r2.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (r2.linewidth = this[t3(980)]), this.dashSize !== void 0 && (r2[t3(1438)] = this[t3(1438)]), this.gapSize !== void 0 && (r2.gapSize = this[t3(475)]), this.scale !== void 0 && (r2.scale = this.scale), this.dithering === true && (r2.dithering = true), this.alphaTest > 0 && (r2.alphaTest = this[t3(283)]), this.alphaHash === true && (r2.alphaHash = true), this.alphaToCoverage === true && (r2.alphaToCoverage = true), this.premultipliedAlpha === true && (r2.premultipliedAlpha = true), this.forceSinglePass === true && (r2.forceSinglePass = true), this.allowOverride === false && (r2[t3(1436)] = false), this[t3(1121)] === true && (r2.wireframe = true), this.wireframeLinewidth > 1 && (r2.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== `round` && (r2.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== `round` && (r2.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (r2.flatShading = true), this.visible === false && (r2[t3(884)] = false), this.toneMapped === false && (r2.toneMapped = false), this.fog === false && (r2.fog = false), Object.keys(this[t3(727)]).length > 0 && (r2.userData = this.userData);
    function a2(e18) {
      let n3 = t3, r3 = [];
      for (let t4 in e18) {
        let i2 = e18[t4];
        delete i2[n3(452)], r3.push(i2);
      }
      return r3;
    }
    if (n2) {
      let n3 = a2(e17.textures), i2 = a2(e17[t3(1332)]);
      n3.length > 0 && (r2.textures = n3), i2.length > 0 && (r2.images = i2);
    }
    return r2;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  [i(1250)](e17) {
    let t3 = i;
    this.name = e17[t3(1301)], this[t3(1290)] = e17.blending, this[t3(1319)] = e17.side, this[t3(264)] = e17.vertexColors, this.opacity = e17.opacity, this.transparent = e17.transparent, this.blendSrc = e17.blendSrc, this[t3(1127)] = e17.blendDst, this.blendEquation = e17.blendEquation, this.blendSrcAlpha = e17[t3(794)], this.blendDstAlpha = e17.blendDstAlpha, this.blendEquationAlpha = e17[t3(162)], this.blendColor.copy(e17.blendColor), this.blendAlpha = e17.blendAlpha, this.depthFunc = e17.depthFunc, this.depthTest = e17.depthTest, this.depthWrite = e17.depthWrite, this.stencilWriteMask = e17.stencilWriteMask, this.stencilFunc = e17.stencilFunc, this.stencilRef = e17.stencilRef, this.stencilFuncMask = e17.stencilFuncMask, this.stencilFail = e17.stencilFail, this.stencilZFail = e17.stencilZFail, this.stencilZPass = e17.stencilZPass, this.stencilWrite = e17.stencilWrite;
    let n2 = e17.clippingPlanes, r2 = null;
    if (n2 !== null) {
      let e18 = n2.length;
      r2 = Array(e18);
      for (let t4 = 0; t4 !== e18; ++t4) r2[t4] = n2[t4].clone();
    }
    return this.clippingPlanes = r2, this.clipIntersection = e17[t3(1110)], this.clipShadows = e17[t3(1150)], this.shadowSide = e17.shadowSide, this.colorWrite = e17.colorWrite, this.precision = e17.precision, this.polygonOffset = e17.polygonOffset, this.polygonOffsetFactor = e17.polygonOffsetFactor, this.polygonOffsetUnits = e17.polygonOffsetUnits, this[t3(1128)] = e17.dithering, this[t3(283)] = e17.alphaTest, this[t3(939)] = e17.alphaHash, this.alphaToCoverage = e17.alphaToCoverage, this.premultipliedAlpha = e17[t3(973)], this.forceSinglePass = e17.forceSinglePass, this[t3(1436)] = e17.allowOverride, this.visible = e17[t3(884)], this.toneMapped = e17.toneMapped, this.userData = JSON[t3(474)](JSON.stringify(e17.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
  set needsUpdate(e17) {
    e17 === true && this.version++;
  }
}, Zr = new W(), Qr = new W(), $r = new W(), ei = new W(), ti = new W(), ni = new W(), ri = new W(), ii = class {
  constructor(e17 = new W(), t3 = new W(0, 0, -1)) {
    this.origin = e17, this.direction = t3;
  }
  set(e17, t3) {
    let n2 = i;
    return this[n2(1346)].copy(e17), this.direction[n2(1250)](t3), this;
  }
  [i(1250)](e17) {
    return this.origin.copy(e17.origin), this.direction.copy(e17.direction), this;
  }
  at(e17, t3) {
    return t3.copy(this.origin).addScaledVector(this.direction, e17);
  }
  lookAt(e17) {
    return this.direction.copy(e17).sub(this.origin).normalize(), this;
  }
  recast(e17) {
    return this.origin.copy(this.at(e17, Zr)), this;
  }
  [i(323)](e17, t3) {
    let n2 = i;
    t3.subVectors(e17, this[n2(1346)]);
    let r2 = t3[n2(1336)](this.direction);
    return r2 < 0 ? t3.copy(this.origin) : t3.copy(this.origin).addScaledVector(this.direction, r2);
  }
  distanceToPoint(e17) {
    return Math.sqrt(this.distanceSqToPoint(e17));
  }
  [i(938)](e17) {
    let t3 = i, n2 = Zr.subVectors(e17, this.origin).dot(this.direction);
    return n2 < 0 ? this.origin.distanceToSquared(e17) : (Zr[t3(1250)](this.origin).addScaledVector(this[t3(1159)], n2), Zr.distanceToSquared(e17));
  }
  distanceSqToSegment(e17, t3, n2, r2) {
    let a2 = i;
    Qr.copy(e17).add(t3).multiplyScalar(0.5), $r.copy(t3).sub(e17).normalize(), ei[a2(1250)](this.origin).sub(Qr);
    let o2 = e17.distanceTo(t3) * 0.5, s2 = -this.direction[a2(1336)]($r), c2 = ei.dot(this[a2(1159)]), l2 = -ei.dot($r), u2 = ei.lengthSq(), d2 = Math.abs(1 - s2 * s2), f2, p2, m2, h2;
    if (d2 > 0) if (f2 = s2 * l2 - c2, p2 = s2 * c2 - l2, h2 = o2 * d2, f2 >= 0) if (p2 >= -h2) if (p2 <= h2) {
      let e18 = 1 / d2;
      f2 *= e18, p2 *= e18, m2 = f2 * (f2 + s2 * p2 + 2 * c2) + p2 * (s2 * f2 + p2 + 2 * l2) + u2;
    } else p2 = o2, f2 = Math.max(0, -(s2 * p2 + c2)), m2 = -f2 * f2 + p2 * (p2 + 2 * l2) + u2;
    else p2 = -o2, f2 = Math.max(0, -(s2 * p2 + c2)), m2 = -f2 * f2 + p2 * (p2 + 2 * l2) + u2;
    else p2 <= -h2 ? (f2 = Math.max(0, -(-s2 * o2 + c2)), p2 = f2 > 0 ? -o2 : Math.min(Math.max(-o2, -l2), o2), m2 = -f2 * f2 + p2 * (p2 + 2 * l2) + u2) : p2 <= h2 ? (f2 = 0, p2 = Math[a2(1245)](Math.max(-o2, -l2), o2), m2 = p2 * (p2 + 2 * l2) + u2) : (f2 = Math.max(0, -(s2 * o2 + c2)), p2 = f2 > 0 ? o2 : Math.min(Math[a2(1023)](-o2, -l2), o2), m2 = -f2 * f2 + p2 * (p2 + 2 * l2) + u2);
    else p2 = s2 > 0 ? -o2 : o2, f2 = Math[a2(1023)](0, -(s2 * p2 + c2)), m2 = -f2 * f2 + p2 * (p2 + 2 * l2) + u2;
    return n2 && n2.copy(this.origin).addScaledVector(this[a2(1159)], f2), r2 && r2.copy(Qr).addScaledVector($r, p2), m2;
  }
  intersectSphere(e17, t3) {
    let n2 = i;
    Zr[n2(974)](e17.center, this.origin);
    let r2 = Zr.dot(this.direction), a2 = Zr[n2(1336)](Zr) - r2 * r2, o2 = e17[n2(816)] * e17.radius;
    if (a2 > o2) return null;
    let s2 = Math.sqrt(o2 - a2), c2 = r2 - s2, l2 = r2 + s2;
    return l2 < 0 ? null : c2 < 0 ? this.at(l2, t3) : this.at(c2, t3);
  }
  intersectsSphere(e17) {
    let t3 = i;
    return e17.radius < 0 ? false : this.distanceSqToPoint(e17[t3(1388)]) <= e17.radius * e17.radius;
  }
  distanceToPlane(e17) {
    let t3 = i, n2 = e17[t3(564)].dot(this.direction);
    if (n2 === 0) return e17.distanceToPoint(this[t3(1346)]) === 0 ? 0 : null;
    let r2 = -(this.origin.dot(e17.normal) + e17[t3(976)]) / n2;
    return r2 >= 0 ? r2 : null;
  }
  [i(595)](e17, t3) {
    let n2 = i, r2 = this[n2(1257)](e17);
    return r2 === null ? null : this.at(r2, t3);
  }
  intersectsPlane(e17) {
    let t3 = i, n2 = e17.distanceToPoint(this[t3(1346)]);
    return n2 === 0 || e17.normal.dot(this[t3(1159)]) * n2 < 0;
  }
  intersectBox(e17, t3) {
    let n2 = i, r2, a2, o2, s2, c2, l2, u2 = 1 / this[n2(1159)].x, d2 = 1 / this.direction.y, f2 = 1 / this.direction.z, p2 = this.origin;
    return u2 >= 0 ? (r2 = (e17.min.x - p2.x) * u2, a2 = (e17.max.x - p2.x) * u2) : (r2 = (e17[n2(1023)].x - p2.x) * u2, a2 = (e17[n2(1245)].x - p2.x) * u2), d2 >= 0 ? (o2 = (e17.min.y - p2.y) * d2, s2 = (e17.max.y - p2.y) * d2) : (o2 = (e17.max.y - p2.y) * d2, s2 = (e17.min.y - p2.y) * d2), r2 > s2 || o2 > a2 || ((o2 > r2 || isNaN(r2)) && (r2 = o2), (s2 < a2 || isNaN(a2)) && (a2 = s2), f2 >= 0 ? (c2 = (e17.min.z - p2.z) * f2, l2 = (e17.max.z - p2.z) * f2) : (c2 = (e17.max.z - p2.z) * f2, l2 = (e17.min.z - p2.z) * f2), r2 > l2 || c2 > a2) || ((c2 > r2 || r2 !== r2) && (r2 = c2), (l2 < a2 || a2 !== a2) && (a2 = l2), a2 < 0) ? null : this.at(r2 >= 0 ? r2 : a2, t3);
  }
  intersectsBox(e17) {
    return this.intersectBox(e17, Zr) !== null;
  }
  intersectTriangle(e17, t3, n2, r2, a2) {
    let o2 = i;
    ti.subVectors(t3, e17), ni[o2(974)](n2, e17), ri.crossVectors(ti, ni);
    let s2 = this[o2(1159)][o2(1336)](ri), c2;
    if (s2 > 0) {
      if (r2) return null;
      c2 = 1;
    } else if (s2 < 0) c2 = -1, s2 = -s2;
    else return null;
    ei.subVectors(this[o2(1346)], e17);
    let l2 = c2 * this.direction.dot(ni.crossVectors(ei, ni));
    if (l2 < 0) return null;
    let u2 = c2 * this.direction.dot(ti.cross(ei));
    if (u2 < 0 || l2 + u2 > s2) return null;
    let d2 = -c2 * ei.dot(ri);
    return d2 < 0 ? null : this.at(d2 / s2, a2);
  }
  applyMatrix4(e17) {
    let t3 = i;
    return this.origin.applyMatrix4(e17), this.direction[t3(775)](e17), this;
  }
  [i(1522)](e17) {
    let t3 = i;
    return e17.origin[t3(1522)](this.origin) && e17[t3(1159)].equals(this.direction);
  }
  clone() {
    let e17 = i;
    return new this.constructor()[e17(1250)](this);
  }
}, ai = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this.isMeshBasicMaterial = true, this.type = `MeshBasicMaterial`, this.color = new Y(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this[t3(195)] = null, this.envMapRotation = new Tn(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this[t3(1121)] = false, this.wireframeLinewidth = 1, this.wireframeLinecap = t3(866), this.wireframeLinejoin = `round`, this[t3(240)] = true, this.setValues(e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.color.copy(e17.color), this.map = e17.map, this.lightMap = e17.lightMap, this.lightMapIntensity = e17.lightMapIntensity, this.aoMap = e17.aoMap, this.aoMapIntensity = e17.aoMapIntensity, this.specularMap = e17.specularMap, this.alphaMap = e17.alphaMap, this.envMap = e17.envMap, this.envMapRotation.copy(e17[t3(592)]), this.combine = e17.combine, this[t3(549)] = e17.reflectivity, this.refractionRatio = e17.refractionRatio, this.wireframe = e17.wireframe, this.wireframeLinewidth = e17[t3(789)], this.wireframeLinecap = e17[t3(631)], this.wireframeLinejoin = e17.wireframeLinejoin, this[t3(240)] = e17[t3(240)], this;
  }
}, oi = new J(), si = new ii(), ci = new Lr(), li = new W(), ui = new W(), di = new W(), fi = new W(), pi = new W(), mi = new W(), hi = new W(), gi = new W(), _i = class extends Hn {
  constructor(e17 = new Gr(), t3 = new ai()) {
    let n2 = i;
    super(), this.isMesh = true, this.type = `Mesh`, this.geometry = e17, this.material = t3, this.morphTargetDictionary = void 0, this[n2(1390)] = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e17, t3) {
    let n2 = i;
    return super[n2(1250)](e17, t3), e17.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e17.morphTargetInfluences[n2(883)]()), e17.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e17.morphTargetDictionary)), this.material = Array.isArray(e17.material) ? e17[n2(849)].slice() : e17.material, this.geometry = e17.geometry, this;
  }
  updateMorphTargets() {
    let e17 = i, t3 = this.geometry.morphAttributes, n2 = Object.keys(t3);
    if (n2.length > 0) {
      let r2 = t3[n2[0]];
      if (r2 !== void 0) {
        this.morphTargetInfluences = [], this[e17(353)] = {};
        for (let t4 = 0, n3 = r2.length; t4 < n3; t4++) {
          let n4 = r2[t4].name || String(t4);
          this.morphTargetInfluences.push(0), this[e17(353)][n4] = t4;
        }
      }
    }
  }
  [i(575)](e17, t3) {
    let n2 = i, r2 = this.geometry, a2 = r2.attributes.position, o2 = r2[n2(1175)].position, s2 = r2[n2(755)];
    t3.fromBufferAttribute(a2, e17);
    let c2 = this.morphTargetInfluences;
    if (o2 && c2) {
      mi.set(0, 0, 0);
      for (let r3 = 0, i2 = o2.length; r3 < i2; r3++) {
        let i3 = c2[r3], a3 = o2[r3];
        i3 !== 0 && (pi[n2(577)](a3, e17), s2 ? mi.addScaledVector(pi, i3) : mi[n2(825)](pi.sub(t3), i3));
      }
      t3.add(mi);
    }
    return t3;
  }
  raycast(e17, t3) {
    let n2 = i, r2 = this.geometry, a2 = this.material, o2 = this[n2(1234)];
    a2 !== void 0 && (r2.boundingSphere === null && r2.computeBoundingSphere(), ci.copy(r2.boundingSphere), ci[n2(874)](o2), si.copy(e17[n2(1227)]).recast(e17.near), !(ci.containsPoint(si.origin) === false && (si.intersectSphere(ci, li) === null || si[n2(1346)].distanceToSquared(li) > Math[n2(1090)](e17.far - e17.near, 2))) && (oi[n2(1250)](o2).invert(), si.copy(e17[n2(1227)]).applyMatrix4(oi), !(r2.boundingBox !== null && si[n2(969)](r2.boundingBox) === false) && this._computeIntersections(e17, t3, si)));
  }
  _computeIntersections(e17, t3, n2) {
    let r2 = i, a2, o2 = this.geometry, s2 = this[r2(849)], c2 = o2.index, l2 = o2[r2(1106)].position, u2 = o2.attributes.uv, d2 = o2[r2(1106)].uv1, f2 = o2.attributes.normal, p2 = o2.groups, m2 = o2[r2(414)];
    if (c2 !== null) if (Array.isArray(s2)) for (let i2 = 0, o3 = p2.length; i2 < o3; i2++) {
      let o4 = p2[i2], l3 = s2[o4.materialIndex], h2 = Math[r2(1023)](o4.start, m2.start), g2 = Math.min(c2.count, Math.min(o4.start + o4.count, m2.start + m2.count));
      for (let i3 = h2, s3 = g2; i3 < s3; i3 += 3) {
        let s4 = c2.getX(i3), p3 = c2.getX(i3 + 1), m3 = c2.getX(i3 + 2);
        a2 = yi(this, l3, e17, n2, u2, d2, f2, s4, p3, m3), a2 && (a2.faceIndex = Math.floor(i3 / 3), a2.face.materialIndex = o4.materialIndex, t3[r2(1184)](a2));
      }
    }
    else {
      let r3 = Math.max(0, m2.start), i2 = Math.min(c2.count, m2.start + m2.count);
      for (let o3 = r3, l3 = i2; o3 < l3; o3 += 3) {
        let r4 = c2.getX(o3), i3 = c2.getX(o3 + 1), l4 = c2.getX(o3 + 2);
        a2 = yi(this, s2, e17, n2, u2, d2, f2, r4, i3, l4), a2 && (a2.faceIndex = Math.floor(o3 / 3), t3.push(a2));
      }
    }
    else if (l2 !== void 0) if (Array.isArray(s2)) for (let i2 = 0, o3 = p2.length; i2 < o3; i2++) {
      let o4 = p2[i2], c3 = s2[o4.materialIndex], h2 = Math.max(o4.start, m2.start), g2 = Math.min(l2.count, Math.min(o4.start + o4.count, m2.start + m2[r2(1414)]));
      for (let r3 = h2, i3 = g2; r3 < i3; r3 += 3) {
        let i4 = r3, s3 = r3 + 1, l3 = r3 + 2;
        a2 = yi(this, c3, e17, n2, u2, d2, f2, i4, s3, l3), a2 && (a2.faceIndex = Math.floor(r3 / 3), a2.face.materialIndex = o4.materialIndex, t3.push(a2));
      }
    }
    else {
      let i2 = Math.max(0, m2.start), o3 = Math[r2(1245)](l2[r2(1414)], m2.start + m2[r2(1414)]);
      for (let r3 = i2, c3 = o3; r3 < c3; r3 += 3) {
        let i3 = r3, o4 = r3 + 1, c4 = r3 + 2;
        a2 = yi(this, s2, e17, n2, u2, d2, f2, i3, o4, c4), a2 && (a2.faceIndex = Math.floor(r3 / 3), t3.push(a2));
      }
    }
  }
};
function vi(e17, t3, n2, r2, a2, o2, s2, c2) {
  let l2 = i, u2;
  if (u2 = t3.side === 1 ? r2.intersectTriangle(s2, o2, a2, true, c2) : r2[l2(1104)](a2, o2, s2, t3.side === 0, c2), u2 === null) return null;
  gi.copy(c2), gi.applyMatrix4(e17[l2(1234)]);
  let d2 = n2.ray.origin.distanceTo(gi);
  return d2 < n2.near || d2 > n2.far ? null : { distance: d2, point: gi.clone(), object: e17 };
}
function yi(e17, t3, n2, r2, a2, o2, s2, c2, l2, u2) {
  let d2 = i;
  e17.getVertexPosition(c2, ui), e17.getVertexPosition(l2, di), e17.getVertexPosition(u2, fi);
  let f2 = vi(e17, t3, n2, r2, ui, di, fi, hi);
  if (f2) {
    let e18 = new W();
    dr.getBarycoord(hi, ui, di, fi, e18), a2 && (f2.uv = dr[d2(1495)](a2, c2, l2, u2, e18, new U())), o2 && (f2.uv1 = dr.getInterpolatedAttribute(o2, c2, l2, u2, e18, new U())), s2 && (f2.normal = dr.getInterpolatedAttribute(s2, c2, l2, u2, e18, new W()), f2.normal.dot(r2.direction) > 0 && f2[d2(564)].multiplyScalar(-1));
    let t4 = { a: c2, b: l2, c: u2, normal: new W(), materialIndex: 0 };
    dr.getNormal(ui, di, fi, t4.normal), f2.face = t4, f2.barycoord = e18;
  }
  return f2;
}
var bi = new q(), xi = new q(), Si = new q(), Ci = new q(), wi = new J(), Ti = new W(), Ei = new Lr(), Di = new J(), Oi = new ii(), ki = class extends _i {
  constructor(e17, t3) {
    let n2 = i;
    super(e17, t3), this.isSkinnedMesh = true, this.type = n2(1041), this.bindMode = g, this.bindMatrix = new J(), this.bindMatrixInverse = new J(), this[n2(1321)] = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    let e17 = i, t3 = this.geometry;
    this.boundingBox === null && (this.boundingBox = new fr()), this.boundingBox.makeEmpty();
    let n2 = t3.getAttribute(`position`);
    for (let t4 = 0; t4 < n2.count; t4++) this.getVertexPosition(t4, Ti), this[e17(1321)].expandByPoint(Ti);
  }
  [i(535)]() {
    let e17 = i, t3 = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Lr()), this.boundingSphere.makeEmpty();
    let n2 = t3.getAttribute(`position`);
    for (let t4 = 0; t4 < n2.count; t4++) this.getVertexPosition(t4, Ti), this.boundingSphere[e17(998)](Ti);
  }
  copy(e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this.bindMode = e17.bindMode, this.bindMatrix.copy(e17.bindMatrix), this.bindMatrixInverse.copy(e17.bindMatrixInverse), this.skeleton = e17.skeleton, e17[n2(1321)] !== null && (this.boundingBox = e17.boundingBox.clone()), e17.boundingSphere !== null && (this.boundingSphere = e17.boundingSphere.clone()), this;
  }
  raycast(e17, t3) {
    let n2 = i, r2 = this.material, a2 = this.matrixWorld;
    r2 !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Ei.copy(this[n2(741)]), Ei[n2(874)](a2), e17.ray.intersectsSphere(Ei) !== false && (Di[n2(1250)](a2).invert(), Oi.copy(e17.ray).applyMatrix4(Di), !(this.boundingBox !== null && Oi.intersectsBox(this[n2(1321)]) === false) && this._computeIntersections(e17, t3, Oi)));
  }
  getVertexPosition(e17, t3) {
    return super[i(575)](e17, t3), this.applyBoneTransform(e17, t3), t3;
  }
  [i(729)](e17, t3) {
    let n2 = i;
    this.skeleton = e17, t3 === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t3 = this.matrixWorld), this.bindMatrix.copy(t3), this.bindMatrixInverse[n2(1250)](t3).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  [i(763)]() {
    let e17 = i, t3 = new q(), n2 = this.geometry[e17(1106)][e17(783)];
    for (let r2 = 0, i2 = n2.count; r2 < i2; r2++) {
      t3.fromBufferAttribute(n2, r2);
      let i3 = 1 / t3.manhattanLength();
      i3 === 1 / 0 ? t3.set(1, 0, 0, 0) : t3.multiplyScalar(i3), n2[e17(505)](r2, t3.x, t3.y, t3.z, t3.w);
    }
  }
  updateMatrixWorld(e17) {
    let t3 = i;
    super.updateMatrixWorld(e17), this.bindMode === `attached` ? this[t3(194)][t3(1250)](this.matrixWorld).invert() : this.bindMode === `detached` ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : z(`SkinnedMesh: Unrecognized bindMode: ` + this[t3(297)]);
  }
  applyBoneTransform(e17, t3) {
    let n2 = i, r2 = this[n2(1096)], a2 = this.geometry;
    xi[n2(577)](a2.attributes[n2(228)], e17), Si.fromBufferAttribute(a2[n2(1106)].skinWeight, e17), t3.isVector4 ? (bi[n2(1250)](t3), t3.set(0, 0, 0, 0)) : (bi.set(...t3, 1), t3.set(0, 0, 0)), bi.applyMatrix4(this.bindMatrix);
    for (let e18 = 0; e18 < 4; e18++) {
      let i2 = Si.getComponent(e18);
      if (i2 !== 0) {
        let a3 = xi.getComponent(e18);
        wi[n2(902)](r2.bones[a3].matrixWorld, r2.boneInverses[a3]), t3.addScaledVector(Ci.copy(bi).applyMatrix4(wi), i2);
      }
    }
    return t3[n2(616)] && (t3.w = bi.w), t3.applyMatrix4(this.bindMatrixInverse);
  }
}, Ai = class extends Hn {
  constructor() {
    let e17 = i;
    super(), this.isBone = true, this.type = e17(615);
  }
}, ji = class extends dn {
  constructor(e17 = null, t3 = 1, n2 = 1, r2, a2, o2, s2, c2, l2 = b, u2 = b, d2, f2) {
    let p2 = i;
    super(null, o2, s2, c2, l2, u2, r2, a2, d2, f2), this.isDataTexture = true, this[p2(495)] = { data: e17, width: t3, height: n2 }, this[p2(1142)] = false, this.flipY = false, this.unpackAlignment = 1;
  }
}, Mi = new J(), Ni = new J(), Pi = class e8 {
  constructor(e17 = [], t3 = []) {
    let n2 = i;
    this.uuid = Dt(), this.bones = e17.slice(0), this[n2(236)] = t3, this.boneMatrices = null, this.previousBoneMatrices = null, this[n2(652)] = null, this.init();
  }
  [i(1078)]() {
    let e17 = i, t3 = this[e17(166)], n2 = this.boneInverses;
    if (this[e17(1307)] = new Float32Array(t3[e17(660)] * 16), n2.length === 0) this.calculateInverses();
    else if (t3.length !== n2[e17(660)]) {
      z(e17(294)), this.boneInverses = [];
      for (let e18 = 0, t4 = this.bones.length; e18 < t4; e18++) this.boneInverses.push(new J());
    }
  }
  calculateInverses() {
    let e17 = i;
    this[e17(236)].length = 0;
    for (let t3 = 0, n2 = this[e17(166)].length; t3 < n2; t3++) {
      let e18 = new J();
      this.bones[t3] && e18.copy(this.bones[t3].matrixWorld).invert(), this.boneInverses.push(e18);
    }
  }
  [i(1180)]() {
    let e17 = i;
    for (let t3 = 0, n2 = this.bones[e17(660)]; t3 < n2; t3++) {
      let n3 = this.bones[t3];
      n3 && n3.matrixWorld.copy(this.boneInverses[t3])[e17(995)]();
    }
    for (let t3 = 0, n2 = this.bones.length; t3 < n2; t3++) {
      let n3 = this.bones[t3];
      n3 && (n3.parent && n3.parent.isBone ? (n3.matrix.copy(n3[e17(950)].matrixWorld).invert(), n3.matrix.multiply(n3.matrixWorld)) : n3.matrix.copy(n3.matrixWorld), n3.matrix.decompose(n3.position, n3.quaternion, n3.scale));
    }
  }
  update() {
    let e17 = i, t3 = this.bones, n2 = this.boneInverses, r2 = this.boneMatrices, a2 = this.boneTexture;
    for (let i2 = 0, a3 = t3.length; i2 < a3; i2++) {
      let a4 = t3[i2] ? t3[i2][e17(1234)] : Ni;
      Mi.multiplyMatrices(a4, n2[i2]), Mi[e17(1263)](r2, i2 * 16);
    }
    a2 !== null && (a2.needsUpdate = true);
  }
  [i(443)]() {
    return new e8(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e17 = i, t3 = Math.sqrt(this.bones.length * 4);
    t3 = Math.ceil(t3 / 4) * 4, t3 = Math.max(t3, 4);
    let n2 = new Float32Array(t3 * t3 * 4);
    n2[e17(1139)](this.boneMatrices);
    let r2 = new ji(n2, t3, t3, N, j);
    return r2[e17(318)] = true, this.boneMatrices = n2, this.boneTexture = r2, this;
  }
  getBoneByName(e17) {
    let t3 = i;
    for (let n2 = 0, r2 = this[t3(166)].length; n2 < r2; n2++) {
      let r3 = this.bones[n2];
      if (r3[t3(1301)] === e17) return r3;
    }
  }
  dispose() {
    let e17 = i;
    this.boneTexture !== null && (this.boneTexture[e17(254)](), this[e17(652)] = null);
  }
  fromJSON(e17, t3) {
    let n2 = i;
    this[n2(797)] = e17.uuid;
    for (let r2 = 0, i2 = e17[n2(166)].length; r2 < i2; r2++) {
      let n3 = e17.bones[r2], i3 = t3[n3];
      i3 === void 0 && (z(`Skeleton: No bone found with UUID:`, n3), i3 = new Ai()), this.bones.push(i3), this.boneInverses.push(new J().fromArray(e17.boneInverses[r2]));
    }
    return this.init(), this;
  }
  toJSON() {
    let e17 = i, t3 = { metadata: { version: 4.7, type: `Skeleton`, generator: `Skeleton.toJSON` }, bones: [], boneInverses: [] };
    t3.uuid = this.uuid;
    let n2 = this.bones, r2 = this[e17(236)];
    for (let i2 = 0, a2 = n2[e17(660)]; i2 < a2; i2++) {
      let a3 = n2[i2];
      t3.bones.push(a3.uuid);
      let o2 = r2[i2];
      t3[e17(236)][e17(1184)](o2.toArray());
    }
    return t3;
  }
}, Fi = class extends Ar {
  constructor(e17, t3, n2, r2 = 1) {
    super(e17, t3, n2), this.isInstancedBufferAttribute = true, this.meshPerAttribute = r2;
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.meshPerAttribute = e17[t3(468)], this;
  }
  toJSON() {
    let e17 = i, t3 = super[e17(497)]();
    return t3[e17(468)] = this.meshPerAttribute, t3.isInstancedBufferAttribute = true, t3;
  }
}, Ii = new J(), Li = new J(), Ri = [], zi = new fr(), Bi = new J(), Vi = new _i(), Hi = new Lr(), Ui = class extends _i {
  constructor(e17, t3, n2) {
    let r2 = i;
    super(e17, t3), this[r2(1360)] = true, this[r2(704)] = new Fi(new Float32Array(n2 * 16), 16), this.previousInstanceMatrix = null, this.instanceColor = null, this.morphTexture = null, this.count = n2, this.boundingBox = null, this.boundingSphere = null;
    for (let e18 = 0; e18 < n2; e18++) this.setMatrixAt(e18, Bi);
  }
  computeBoundingBox() {
    let e17 = i, t3 = this.geometry, n2 = this.count;
    this.boundingBox === null && (this.boundingBox = new fr()), t3.boundingBox === null && t3.computeBoundingBox(), this[e17(1321)][e17(1185)]();
    for (let r2 = 0; r2 < n2; r2++) this.getMatrixAt(r2, Ii), zi.copy(t3[e17(1321)]).applyMatrix4(Ii), this[e17(1321)].union(zi);
  }
  computeBoundingSphere() {
    let e17 = i, t3 = this[e17(641)], n2 = this[e17(1414)];
    this.boundingSphere === null && (this.boundingSphere = new Lr()), t3.boundingSphere === null && t3.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let r2 = 0; r2 < n2; r2++) this.getMatrixAt(r2, Ii), Hi.copy(t3[e17(741)]).applyMatrix4(Ii), this[e17(741)][e17(358)](Hi);
  }
  [i(1250)](e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this.instanceMatrix.copy(e17.instanceMatrix), e17.previousInstanceMatrix !== null && (this.previousInstanceMatrix = e17.previousInstanceMatrix[n2(443)]()), e17[n2(567)] !== null && (this[n2(567)] = e17.morphTexture[n2(443)]()), e17.instanceColor !== null && (this.instanceColor = e17[n2(887)][n2(443)]()), this.count = e17.count, e17[n2(1321)] !== null && (this.boundingBox = e17.boundingBox.clone()), e17[n2(741)] !== null && (this.boundingSphere = e17.boundingSphere[n2(443)]()), this;
  }
  getColorAt(e17, t3) {
    let n2 = i;
    return this[n2(887)] === null ? t3.setRGB(1, 1, 1) : t3[n2(823)](this.instanceColor.array, e17 * 3);
  }
  getMatrixAt(e17, t3) {
    return t3.fromArray(this.instanceMatrix.array, e17 * 16);
  }
  getMorphAt(e17, t3) {
    let n2 = i, r2 = t3[n2(1390)], a2 = this[n2(567)][n2(996)].data[n2(1304)], o2 = e17 * (r2.length + 1) + 1;
    for (let e18 = 0; e18 < r2[n2(660)]; e18++) r2[e18] = a2[o2 + e18];
  }
  [i(193)](e17, t3) {
    let n2 = i, r2 = this.matrixWorld, a2 = this.count;
    if (Vi.geometry = this.geometry, Vi.material = this.material, Vi[n2(849)] !== void 0 && (this[n2(741)] === null && this.computeBoundingSphere(), Hi.copy(this.boundingSphere), Hi.applyMatrix4(r2), e17.ray.intersectsSphere(Hi) !== false)) for (let i2 = 0; i2 < a2; i2++) {
      this.getMatrixAt(i2, Ii), Li[n2(902)](r2, Ii), Vi.matrixWorld = Li, Vi.raycast(e17, Ri);
      for (let e18 = 0, n3 = Ri.length; e18 < n3; e18++) {
        let n4 = Ri[e18];
        n4.instanceId = i2, n4.object = this, t3.push(n4);
      }
      Ri.length = 0;
    }
  }
  setColorAt(e17, t3) {
    let n2 = i;
    return this.instanceColor === null && (this.instanceColor = new Fi(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t3.toArray(this.instanceColor[n2(893)], e17 * 3), this;
  }
  [i(953)](e17, t3) {
    return t3.toArray(this.instanceMatrix.array, e17 * 16), this;
  }
  setMorphAt(e17, t3) {
    let n2 = i, r2 = t3.morphTargetInfluences, a2 = r2.length + 1;
    this.morphTexture === null && (this[n2(567)] = new ji(new Float32Array(a2 * this.count), a2, this[n2(1414)], ue, j));
    let o2 = this.morphTexture.source.data[n2(1304)], s2 = 0;
    for (let e18 = 0; e18 < r2.length; e18++) s2 += r2[e18];
    let c2 = this.geometry.morphTargetsRelative ? 1 : 1 - s2, l2 = a2 * e17;
    return o2[l2] = c2, o2[n2(1139)](r2, l2 + 1), this;
  }
  updateMorphTargets() {
  }
  [i(254)]() {
    this.dispatchEvent({ type: `dispose` }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}, Wi = new W(), Gi = new W(), Ki = new G(), qi = class {
  constructor(e17 = new W(1, 0, 0), t3 = 0) {
    this.isPlane = true, this.normal = e17, this.constant = t3;
  }
  set(e17, t3) {
    return this.normal.copy(e17), this.constant = t3, this;
  }
  setComponents(e17, t3, n2, r2) {
    let a2 = i;
    return this[a2(564)].set(e17, t3, n2), this.constant = r2, this;
  }
  setFromNormalAndCoplanarPoint(e17, t3) {
    let n2 = i;
    return this.normal.copy(e17), this.constant = -t3.dot(this[n2(564)]), this;
  }
  setFromCoplanarPoints(e17, t3, n2) {
    let r2 = i, a2 = Wi.subVectors(n2, t3).cross(Gi.subVectors(e17, t3)).normalize();
    return this[r2(390)](a2, e17), this;
  }
  copy(e17) {
    let t3 = i;
    return this.normal[t3(1250)](e17.normal), this.constant = e17.constant, this;
  }
  normalize() {
    let e17 = i, t3 = 1 / this.normal.length();
    return this.normal.multiplyScalar(t3), this[e17(976)] *= t3, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e17) {
    let t3 = i;
    return this.normal[t3(1336)](e17) + this.constant;
  }
  distanceToSphere(e17) {
    return this.distanceToPoint(e17.center) - e17.radius;
  }
  projectPoint(e17, t3) {
    let n2 = i;
    return t3.copy(e17).addScaledVector(this[n2(564)], -this.distanceToPoint(e17));
  }
  intersectLine(e17, t3, n2 = true) {
    let r2 = i, a2 = e17.delta(Wi), o2 = this.normal.dot(a2);
    if (o2 === 0) return this.distanceToPoint(e17.start) === 0 ? t3[r2(1250)](e17.start) : null;
    let s2 = -(e17.start.dot(this.normal) + this.constant) / o2;
    return n2 === true && (s2 < 0 || s2 > 1) ? null : t3.copy(e17[r2(392)]).addScaledVector(a2, s2);
  }
  [i(1278)](e17) {
    let t3 = this.distanceToPoint(e17.start), n2 = this.distanceToPoint(e17.end);
    return t3 < 0 && n2 > 0 || n2 < 0 && t3 > 0;
  }
  intersectsBox(e17) {
    return e17.intersectsPlane(this);
  }
  [i(599)](e17) {
    return e17.intersectsPlane(this);
  }
  coplanarPoint(e17) {
    let t3 = i;
    return e17.copy(this.normal)[t3(1072)](-this.constant);
  }
  applyMatrix4(e17, t3) {
    let n2 = i, r2 = t3 || Ki.getNormalMatrix(e17), a2 = this[n2(1014)](Wi).applyMatrix4(e17), o2 = this.normal.applyMatrix3(r2).normalize();
    return this.constant = -a2.dot(o2), this;
  }
  translate(e17) {
    return this.constant -= e17.dot(this.normal), this;
  }
  equals(e17) {
    return e17.normal.equals(this.normal) && e17.constant === this.constant;
  }
  [i(443)]() {
    return new this.constructor().copy(this);
  }
}, Ji = new Lr(), Yi = new U(0.5, 0.5), Xi = new W(), Zi = class {
  constructor(e17 = new qi(), t3 = new qi(), n2 = new qi(), r2 = new qi(), i2 = new qi(), a2 = new qi()) {
    this.planes = [e17, t3, n2, r2, i2, a2];
  }
  set(e17, t3, n2, r2, a2, o2) {
    let s2 = i, c2 = this.planes;
    return c2[0].copy(e17), c2[1].copy(t3), c2[2][s2(1250)](n2), c2[3].copy(r2), c2[4].copy(a2), c2[5].copy(o2), this;
  }
  copy(e17) {
    let t3 = i, n2 = this[t3(1170)];
    for (let t4 = 0; t4 < 6; t4++) n2[t4].copy(e17.planes[t4]);
    return this;
  }
  setFromProjectionMatrix(e17, t3 = ut, n2 = false) {
    let r2 = i, a2 = this.planes, o2 = e17.elements, s2 = o2[0], c2 = o2[1], l2 = o2[2], u2 = o2[3], d2 = o2[4], f2 = o2[5], p2 = o2[6], m2 = o2[7], h2 = o2[8], g2 = o2[9], _2 = o2[10], v2 = o2[11], y2 = o2[12], b2 = o2[13], x2 = o2[14], S2 = o2[15];
    if (a2[0][r2(1418)](u2 - s2, m2 - d2, v2 - h2, S2 - y2)[r2(473)](), a2[1].setComponents(u2 + s2, m2 + d2, v2 + h2, S2 + y2).normalize(), a2[2].setComponents(u2 + c2, m2 + f2, v2 + g2, S2 + b2).normalize(), a2[3][r2(1418)](u2 - c2, m2 - f2, v2 - g2, S2 - b2).normalize(), n2) a2[4].setComponents(l2, p2, _2, x2).normalize(), a2[5][r2(1418)](u2 - l2, m2 - p2, v2 - _2, S2 - x2).normalize();
    else if (a2[4].setComponents(u2 - l2, m2 - p2, v2 - _2, S2 - x2).normalize(), t3 === 2e3) a2[5].setComponents(u2 + l2, m2 + p2, v2 + _2, S2 + x2).normalize();
    else if (t3 === 2001) a2[5].setComponents(l2, p2, _2, x2).normalize();
    else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ` + t3);
    return this;
  }
  intersectsObject(e17) {
    let t3 = i;
    if (e17.boundingSphere !== void 0) e17.boundingSphere === null && e17.computeBoundingSphere(), Ji.copy(e17.boundingSphere)[t3(874)](e17.matrixWorld);
    else {
      let n2 = e17.geometry;
      n2.boundingSphere === null && n2.computeBoundingSphere(), Ji.copy(n2.boundingSphere).applyMatrix4(e17[t3(1234)]);
    }
    return this.intersectsSphere(Ji);
  }
  [i(273)](e17) {
    return Ji.center.set(0, 0, 0), Ji.radius = 0.7071067811865476 + Yi.distanceTo(e17.center), Ji.applyMatrix4(e17.matrixWorld), this.intersectsSphere(Ji);
  }
  intersectsSphere(e17) {
    let t3 = i, n2 = this.planes, r2 = e17.center, a2 = -e17[t3(816)];
    for (let e18 = 0; e18 < 6; e18++) if (n2[e18].distanceToPoint(r2) < a2) return false;
    return true;
  }
  [i(969)](e17) {
    let t3 = i, n2 = this.planes;
    for (let r2 = 0; r2 < 6; r2++) {
      let i2 = n2[r2];
      if (Xi.x = i2.normal.x > 0 ? e17.max.x : e17[t3(1245)].x, Xi.y = i2.normal.y > 0 ? e17.max.y : e17[t3(1245)].y, Xi.z = i2.normal.z > 0 ? e17.max.z : e17.min.z, i2.distanceToPoint(Xi) < 0) return false;
    }
    return true;
  }
  containsPoint(e17) {
    let t3 = i, n2 = this[t3(1170)];
    for (let t4 = 0; t4 < 6; t4++) if (n2[t4].distanceToPoint(e17) < 0) return false;
    return true;
  }
  [i(443)]() {
    return new this.constructor().copy(this);
  }
}, Qi = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this.isLineBasicMaterial = true, this.type = t3(1229), this.color = new Y(16777215), this[t3(579)] = null, this.linewidth = 1, this[t3(1160)] = `round`, this.linejoin = t3(866), this.fog = true, this.setValues(e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.color[t3(1250)](e17.color), this[t3(579)] = e17.map, this.linewidth = e17.linewidth, this.linecap = e17.linecap, this.linejoin = e17[t3(878)], this.fog = e17.fog, this;
  }
}, $i = new W(), ea = new W(), ta = new J(), na = new ii(), ra = new Lr(), ia = new W(), aa = new W(), oa = class extends Hn {
  constructor(e17 = new Gr(), t3 = new Qi()) {
    let n2 = i;
    super(), this.isLine = true, this.type = n2(382), this.geometry = e17, this.material = t3, this.morphTargetDictionary = void 0, this[n2(1390)] = void 0, this[n2(1251)]();
  }
  [i(1250)](e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this.material = Array[n2(1277)](e17[n2(849)]) ? e17.material.slice() : e17.material, this.geometry = e17[n2(641)], this;
  }
  computeLineDistances() {
    let e17 = i, t3 = this.geometry;
    if (t3.index === null) {
      let n2 = t3.attributes.position, r2 = [0];
      for (let t4 = 1, i2 = n2.count; t4 < i2; t4++) $i.fromBufferAttribute(n2, t4 - 1), ea.fromBufferAttribute(n2, t4), r2[t4] = r2[t4 - 1], r2[t4] += $i[e17(1473)](ea);
      t3[e17(248)](`lineDistance`, new X(r2, 1));
    } else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);
    return this;
  }
  raycast(e17, t3) {
    let n2 = i, r2 = this.geometry, a2 = this[n2(1234)], o2 = e17.params[n2(382)].threshold, s2 = r2.drawRange;
    if (r2.boundingSphere === null && r2[n2(535)](), ra.copy(r2.boundingSphere), ra[n2(874)](a2), ra.radius += o2, e17.ray.intersectsSphere(ra) === false) return;
    ta.copy(a2)[n2(995)](), na.copy(e17.ray).applyMatrix4(ta);
    let c2 = o2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), l2 = c2 * c2, u2 = this.isLineSegments ? 2 : 1, d2 = r2.index, f2 = r2.attributes.position;
    if (d2 !== null) {
      let r3 = Math.max(0, s2.start), i2 = Math.min(d2.count, s2[n2(392)] + s2.count);
      for (let n3 = r3, a3 = i2 - 1; n3 < a3; n3 += u2) {
        let r4 = d2.getX(n3), i3 = d2.getX(n3 + 1), a4 = sa(this, e17, na, l2, r4, i3, n3);
        a4 && t3.push(a4);
      }
      if (this.isLineLoop) {
        let n3 = d2.getX(i2 - 1), a3 = d2.getX(r3), o3 = sa(this, e17, na, l2, n3, a3, i2 - 1);
        o3 && t3.push(o3);
      }
    } else {
      let r3 = Math.max(0, s2.start), i2 = Math.min(f2.count, s2.start + s2.count);
      for (let a3 = r3, o3 = i2 - 1; a3 < o3; a3 += u2) {
        let r4 = sa(this, e17, na, l2, a3, a3 + 1, a3);
        r4 && t3[n2(1184)](r4);
      }
      if (this[n2(683)]) {
        let n3 = sa(this, e17, na, l2, i2 - 1, r3, i2 - 1);
        n3 && t3.push(n3);
      }
    }
  }
  updateMorphTargets() {
    let e17 = i, t3 = this[e17(641)][e17(1175)], n2 = Object[e17(928)](t3);
    if (n2.length > 0) {
      let r2 = t3[n2[0]];
      if (r2 !== void 0) {
        this.morphTargetInfluences = [], this[e17(353)] = {};
        for (let e18 = 0, t4 = r2.length; e18 < t4; e18++) {
          let t5 = r2[e18].name || String(e18);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[t5] = e18;
        }
      }
    }
  }
};
function sa(e17, t3, n2, r2, a2, o2, s2) {
  let c2 = i, l2 = e17.geometry.attributes.position;
  if ($i[c2(577)](l2, a2), ea.fromBufferAttribute(l2, o2), n2.distanceSqToSegment($i, ea, ia, aa) > r2) return;
  ia.applyMatrix4(e17[c2(1234)]);
  let u2 = t3.ray.origin.distanceTo(ia);
  if (!(u2 < t3.near || u2 > t3.far)) return { distance: u2, point: aa.clone().applyMatrix4(e17.matrixWorld), index: s2, face: null, faceIndex: null, barycoord: null, object: e17 };
}
var ca = new W(), la = new W(), ua = class extends oa {
  constructor(e17, t3) {
    let n2 = i;
    super(e17, t3), this[n2(664)] = true, this.type = `LineSegments`;
  }
  computeLineDistances() {
    let e17 = i, t3 = this.geometry;
    if (t3.index === null) {
      let n2 = t3.attributes.position, r2 = [];
      for (let t4 = 0, i2 = n2.count; t4 < i2; t4 += 2) ca.fromBufferAttribute(n2, t4), la.fromBufferAttribute(n2, t4 + 1), r2[t4] = t4 === 0 ? 0 : r2[t4 - 1], r2[t4 + 1] = r2[t4] + ca[e17(1473)](la);
      t3.setAttribute(`lineDistance`, new X(r2, 1));
    } else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);
    return this;
  }
}, da = class extends oa {
  constructor(e17, t3) {
    let n2 = i;
    super(e17, t3), this.isLineLoop = true, this.type = n2(668);
  }
}, fa = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this.isPointsMaterial = true, this.type = t3(1012), this[t3(1119)] = new Y(16777215), this.map = null, this.alphaMap = null, this.size = 1, this[t3(418)] = true, this.fog = true, this[t3(1218)](e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.color.copy(e17[t3(1119)]), this.map = e17.map, this.alphaMap = e17[t3(1219)], this[t3(803)] = e17.size, this.sizeAttenuation = e17.sizeAttenuation, this.fog = e17.fog, this;
  }
}, pa = new J(), ma = new ii(), ha = new Lr(), ga = new W(), _a = class extends Hn {
  constructor(e17 = new Gr(), t3 = new fa()) {
    super(), this.isPoints = true, this.type = `Points`, this.geometry = e17, this.material = t3, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e17, t3) {
    return super.copy(e17, t3), this.material = Array.isArray(e17.material) ? e17.material.slice() : e17.material, this.geometry = e17.geometry, this;
  }
  raycast(e17, t3) {
    let n2 = i, r2 = this.geometry, a2 = this[n2(1234)], o2 = e17.params.Points.threshold, s2 = r2.drawRange;
    if (r2.boundingSphere === null && r2[n2(535)](), ha.copy(r2.boundingSphere), ha.applyMatrix4(a2), ha.radius += o2, e17.ray[n2(599)](ha) === false) return;
    pa.copy(a2).invert(), ma[n2(1250)](e17[n2(1227)])[n2(874)](pa);
    let c2 = o2 / ((this.scale.x + this.scale.y + this.scale.z) / 3), l2 = c2 * c2, u2 = r2[n2(1259)], d2 = r2.attributes.position;
    if (u2 !== null) {
      let r3 = Math.max(0, s2[n2(392)]), i2 = Math.min(u2[n2(1414)], s2[n2(392)] + s2[n2(1414)]);
      for (let n3 = r3, o3 = i2; n3 < o3; n3++) {
        let r4 = u2.getX(n3);
        ga.fromBufferAttribute(d2, r4), va(ga, r4, l2, a2, e17, t3, this);
      }
    } else {
      let r3 = Math.max(0, s2.start), i2 = Math.min(d2.count, s2.start + s2.count);
      for (let o3 = r3, s3 = i2; o3 < s3; o3++) ga[n2(577)](d2, o3), va(ga, o3, l2, a2, e17, t3, this);
    }
  }
  [i(1251)]() {
    let e17 = i, t3 = this.geometry.morphAttributes, n2 = Object.keys(t3);
    if (n2.length > 0) {
      let r2 = t3[n2[0]];
      if (r2 !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let t4 = 0, n3 = r2.length; t4 < n3; t4++) {
          let n4 = r2[t4][e17(1301)] || String(t4);
          this[e17(1390)][e17(1184)](0), this[e17(353)][n4] = t4;
        }
      }
    }
  }
};
function va(e17, t3, n2, r2, i2, a2, o2) {
  let s2 = ma.distanceSqToPoint(e17);
  if (s2 < n2) {
    let n3 = new W();
    ma.closestPointToPoint(e17, n3), n3.applyMatrix4(r2);
    let c2 = i2.ray.origin.distanceTo(n3);
    if (c2 < i2.near || c2 > i2.far) return;
    a2.push({ distance: c2, distanceToRay: Math.sqrt(s2), point: n3, index: t3, face: null, faceIndex: null, barycoord: null, object: o2 });
  }
}
var ya = class extends dn {
  constructor(e17 = [], t3 = 301, n2, r2, i2, a2, o2, s2, c2, l2) {
    super(e17, t3, n2, r2, i2, a2, o2, s2, c2, l2), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e17) {
    this.image = e17;
  }
}, ba = class extends dn {
  constructor(e17, t3, n2 = ee, r2, a2, o2, s2 = b, c2 = b, l2, u2 = ce, d2 = 1) {
    let f2 = i;
    if (u2 !== 1026 && u2 !== 1027) throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);
    super({ width: e17, height: t3, depth: d2 }, r2, a2, o2, s2, c2, u2, n2, l2), this.isDepthTexture = true, this[f2(165)] = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  [i(1250)](e17) {
    let t3 = i;
    return super.copy(e17), this.source = new sn(Object[t3(420)]({}, e17.image)), this.compareFunction = e17[t3(1399)], this;
  }
  toJSON(e17) {
    let t3 = i, n2 = super[t3(497)](e17);
    return this[t3(1399)] !== null && (n2.compareFunction = this[t3(1399)]), n2;
  }
}, xa = class extends ba {
  constructor(e17, t3 = ee, n2 = 301, r2, i2, a2 = b, o2 = b, s2, c2 = ce) {
    let l2 = { width: e17, height: e17, depth: 1 }, u2 = [l2, l2, l2, l2, l2, l2];
    super(e17, e17, t3, n2, r2, i2, a2, o2, s2, c2), this.image = u2, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    let e17 = i;
    return this[e17(495)];
  }
  set images(e17) {
    this.image = e17;
  }
}, Sa = class extends dn {
  constructor(e17 = null) {
    let t3 = i;
    super(), this[t3(834)] = e17, this.isExternalTexture = true;
  }
  copy(e17) {
    return super.copy(e17), this.sourceTexture = e17.sourceTexture, this;
  }
}, Ca = class e9 extends Gr {
  constructor(e17 = 1, t3 = 1, n2 = 1, r2 = 1, a2 = 1, o2 = 1) {
    let s2 = i;
    super(), this[s2(1112)] = `BoxGeometry`, this.parameters = { width: e17, height: t3, depth: n2, widthSegments: r2, heightSegments: a2, depthSegments: o2 };
    let c2 = this;
    r2 = Math.floor(r2), a2 = Math.floor(a2), o2 = Math.floor(o2);
    let l2 = [], u2 = [], d2 = [], f2 = [], p2 = 0, m2 = 0;
    h2(`z`, `y`, `x`, -1, -1, n2, t3, e17, o2, a2, 0), h2(`z`, `y`, `x`, 1, -1, n2, t3, -e17, o2, a2, 1), h2(`x`, `z`, `y`, 1, 1, e17, n2, t3, r2, o2, 2), h2(`x`, `z`, `y`, 1, -1, e17, n2, -t3, r2, o2, 3), h2(`x`, `y`, `z`, 1, -1, e17, t3, n2, r2, a2, 4), h2(`x`, `y`, `z`, -1, -1, e17, t3, -n2, r2, a2, 5), this.setIndex(l2), this.setAttribute(s2(1477), new X(u2, 3)), this.setAttribute(s2(564), new X(d2, 3)), this[s2(248)](`uv`, new X(f2, 2));
    function h2(e18, t4, n3, r3, i2, a3, o3, s3, h3, g2, _2) {
      let v2 = a3 / h3, y2 = o3 / g2, b2 = a3 / 2, x2 = o3 / 2, S2 = s3 / 2, C2 = h3 + 1, w2 = g2 + 1, T2 = 0, E2 = 0, D2 = new W();
      for (let a4 = 0; a4 < w2; a4++) {
        let o4 = a4 * y2 - x2;
        for (let c3 = 0; c3 < C2; c3++) D2[e18] = (c3 * v2 - b2) * r3, D2[t4] = o4 * i2, D2[n3] = S2, u2.push(D2.x, D2.y, D2.z), D2[e18] = 0, D2[t4] = 0, D2[n3] = s3 > 0 ? 1 : -1, d2.push(D2.x, D2.y, D2.z), f2.push(c3 / h3), f2.push(1 - a4 / g2), T2 += 1;
      }
      for (let e19 = 0; e19 < g2; e19++) for (let t5 = 0; t5 < h3; t5++) {
        let n4 = p2 + t5 + C2 * e19, r4 = p2 + t5 + C2 * (e19 + 1), i3 = p2 + (t5 + 1) + C2 * (e19 + 1), a4 = p2 + (t5 + 1) + C2 * e19;
        l2.push(n4, r4, a4), l2.push(r4, i3, a4), E2 += 6;
      }
      c2.addGroup(m2, E2, _2), m2 += E2, p2 += T2;
    }
  }
  [i(1250)](e17) {
    return super.copy(e17), this.parameters = Object.assign({}, e17.parameters), this;
  }
  static fromJSON(t3) {
    return new e9(t3.width, t3.height, t3.depth, t3.widthSegments, t3.heightSegments, t3.depthSegments);
  }
}, wa = class e10 extends Gr {
  constructor(e17 = 1, t3 = 1, n2 = 4, r2 = 8, a2 = 1) {
    let o2 = i;
    super(), this.type = `CapsuleGeometry`, this.parameters = { radius: e17, height: t3, capSegments: n2, radialSegments: r2, heightSegments: a2 }, t3 = Math.max(0, t3), n2 = Math[o2(1023)](1, Math.floor(n2)), r2 = Math.max(3, Math.floor(r2)), a2 = Math.max(1, Math.floor(a2));
    let s2 = [], c2 = [], l2 = [], u2 = [], d2 = t3 / 2, f2 = Math.PI / 2 * e17, p2 = t3, m2 = 2 * f2 + p2, h2 = n2 * 2 + a2, g2 = r2 + 1, _2 = new W(), v2 = new W();
    for (let i2 = 0; i2 <= h2; i2++) {
      let y2 = 0, b2 = 0, x2 = 0, S2 = 0;
      if (i2 <= n2) {
        let t4 = i2 / n2, r3 = t4 * Math.PI / 2;
        b2 = -d2 - e17 * Math.cos(r3), x2 = e17 * Math[o2(547)](r3), S2 = -e17 * Math.cos(r3), y2 = t4 * f2;
      } else if (i2 <= n2 + a2) {
        let r3 = (i2 - n2) / a2;
        b2 = -d2 + r3 * t3, x2 = e17, S2 = 0, y2 = f2 + r3 * p2;
      } else {
        let t4 = (i2 - n2 - a2) / n2, r3 = t4 * Math.PI / 2;
        b2 = d2 + e17 * Math[o2(547)](r3), x2 = e17 * Math[o2(339)](r3), S2 = e17 * Math.sin(r3), y2 = f2 + p2 + t4 * f2;
      }
      let C2 = Math.max(0, Math.min(1, y2 / m2)), w2 = 0;
      i2 === 0 ? w2 = 0.5 / r2 : i2 === h2 && (w2 = -0.5 / r2);
      for (let e18 = 0; e18 <= r2; e18++) {
        let t4 = e18 / r2, n3 = t4 * Math.PI * 2, i3 = Math.sin(n3), a3 = Math.cos(n3);
        v2.x = -x2 * a3, v2.y = b2, v2.z = x2 * i3, c2.push(v2.x, v2.y, v2.z), _2.set(-x2 * a3, S2, x2 * i3), _2.normalize(), l2.push(_2.x, _2.y, _2.z), u2.push(t4 + w2, C2);
      }
      if (i2 > 0) {
        let e18 = (i2 - 1) * g2;
        for (let t4 = 0; t4 < r2; t4++) {
          let n3 = e18 + t4, r3 = e18 + t4 + 1, a3 = i2 * g2 + t4, o3 = i2 * g2 + t4 + 1;
          s2.push(n3, r3, a3), s2.push(r3, o3, a3);
        }
      }
    }
    this.setIndex(s2), this.setAttribute(`position`, new X(c2, 3)), this.setAttribute(`normal`, new X(l2, 3)), this.setAttribute(`uv`, new X(u2, 2));
  }
  copy(e17) {
    return super.copy(e17), this.parameters = Object.assign({}, e17.parameters), this;
  }
  static fromJSON(t3) {
    return new e10(t3.radius, t3.height, t3.capSegments, t3.radialSegments, t3.heightSegments);
  }
}, Ta = class e11 extends Gr {
  constructor(e17 = 1, t3 = 1, n2 = 1, r2 = 32, a2 = 1, o2 = false, s2 = 0, c2 = Math.PI * 2) {
    let l2 = i;
    super(), this.type = `CylinderGeometry`, this.parameters = { radiusTop: e17, radiusBottom: t3, height: n2, radialSegments: r2, heightSegments: a2, openEnded: o2, thetaStart: s2, thetaLength: c2 };
    let u2 = this;
    r2 = Math.floor(r2), a2 = Math.floor(a2);
    let d2 = [], f2 = [], p2 = [], m2 = [], h2 = 0, g2 = [], _2 = n2 / 2, v2 = 0;
    y2(), o2 === false && (e17 > 0 && b2(true), t3 > 0 && b2(false)), this.setIndex(d2), this.setAttribute(`position`, new X(f2, 3)), this.setAttribute(l2(564), new X(p2, 3)), this.setAttribute(`uv`, new X(m2, 2));
    function y2() {
      let i2 = l2, o3 = new W(), y3 = new W(), b3 = 0, x2 = (t3 - e17) / n2;
      for (let l3 = 0; l3 <= a2; l3++) {
        let u3 = [], d3 = l3 / a2, v3 = d3 * (t3 - e17) + e17;
        for (let e18 = 0; e18 <= r2; e18++) {
          let t4 = e18 / r2, a3 = t4 * c2 + s2, l4 = Math[i2(547)](a3), g3 = Math.cos(a3);
          y3.x = v3 * l4, y3.y = -d3 * n2 + _2, y3.z = v3 * g3, f2.push(y3.x, y3.y, y3.z), o3.set(l4, x2, g3).normalize(), p2.push(o3.x, o3.y, o3.z), m2[i2(1184)](t4, 1 - d3), u3.push(h2++);
        }
        g2.push(u3);
      }
      for (let n3 = 0; n3 < r2; n3++) for (let r3 = 0; r3 < a2; r3++) {
        let i3 = g2[r3][n3], o4 = g2[r3 + 1][n3], s3 = g2[r3 + 1][n3 + 1], c3 = g2[r3][n3 + 1];
        (e17 > 0 || r3 !== 0) && (d2.push(i3, o4, c3), b3 += 3), (t3 > 0 || r3 !== a2 - 1) && (d2.push(o4, s3, c3), b3 += 3);
      }
      u2.addGroup(v2, b3, 0), v2 += b3;
    }
    function b2(n3) {
      let i2 = l2, a3 = h2, o3 = new U(), g3 = new W(), y3 = 0, b3 = n3 === true ? e17 : t3, x2 = n3 === true ? 1 : -1;
      for (let e18 = 1; e18 <= r2; e18++) f2.push(0, _2 * x2, 0), p2.push(0, x2, 0), m2.push(0.5, 0.5), h2++;
      let S2 = h2;
      for (let e18 = 0; e18 <= r2; e18++) {
        let t4 = e18 / r2 * c2 + s2, n4 = Math.cos(t4), i3 = Math.sin(t4);
        g3.x = b3 * i3, g3.y = _2 * x2, g3.z = b3 * n4, f2.push(g3.x, g3.y, g3.z), p2.push(0, x2, 0), o3.x = n4 * 0.5 + 0.5, o3.y = i3 * 0.5 * x2 + 0.5, m2.push(o3.x, o3.y), h2++;
      }
      for (let e18 = 0; e18 < r2; e18++) {
        let t4 = a3 + e18, r3 = S2 + e18;
        n3 === true ? d2[i2(1184)](r3, r3 + 1, t4) : d2.push(r3 + 1, r3, t4), y3 += 3;
      }
      u2.addGroup(v2, y3, n3 === true ? 1 : 2), v2 += y3;
    }
  }
  copy(e17) {
    let t3 = i;
    return super[t3(1250)](e17), this[t3(1008)] = Object[t3(420)]({}, e17.parameters), this;
  }
  static fromJSON(t3) {
    return new e11(t3[i(479)], t3.radiusBottom, t3.height, t3.radialSegments, t3.heightSegments, t3.openEnded, t3.thetaStart, t3.thetaLength);
  }
}, Ea = class e12 extends Ta {
  constructor(e17 = 1, t3 = 1, n2 = 32, r2 = 1, a2 = false, o2 = 0, s2 = Math.PI * 2) {
    let c2 = i;
    super(0, e17, t3, n2, r2, a2, o2, s2), this[c2(1112)] = c2(1046), this.parameters = { radius: e17, height: t3, radialSegments: n2, heightSegments: r2, openEnded: a2, thetaStart: o2, thetaLength: s2 };
  }
  static fromJSON(t3) {
    let n2 = i;
    return new e12(t3.radius, t3[n2(221)], t3.radialSegments, t3.heightSegments, t3.openEnded, t3.thetaStart, t3[n2(988)]);
  }
}, Da = class {
  constructor() {
    let e17 = i;
    this.type = e17(1312), this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    z(`Curve: .getPoint() not implemented.`);
  }
  getPointAt(e17, t3) {
    let n2 = this.getUtoTmapping(e17);
    return this.getPoint(n2, t3);
  }
  getPoints(e17 = 5) {
    let t3 = [];
    for (let n2 = 0; n2 <= e17; n2++) t3.push(this.getPoint(n2 / e17));
    return t3;
  }
  getSpacedPoints(e17 = 5) {
    let t3 = [];
    for (let n2 = 0; n2 <= e17; n2++) t3.push(this.getPointAt(n2 / e17));
    return t3;
  }
  getLength() {
    let e17 = this.getLengths();
    return e17[e17.length - 1];
  }
  [i(870)](e17 = this.arcLengthDivisions) {
    let t3 = i;
    if (this[t3(1213)] && this.cacheArcLengths.length === e17 + 1 && !this[t3(318)]) return this.cacheArcLengths;
    this.needsUpdate = false;
    let n2 = [], r2, a2 = this.getPoint(0), o2 = 0;
    n2.push(0);
    for (let i2 = 1; i2 <= e17; i2++) r2 = this.getPoint(i2 / e17), o2 += r2.distanceTo(a2), n2[t3(1184)](o2), a2 = r2;
    return this[t3(1213)] = n2, n2;
  }
  updateArcLengths() {
    let e17 = i;
    this.needsUpdate = true, this[e17(870)]();
  }
  getUtoTmapping(e17, t3 = null) {
    let n2 = i, r2 = this.getLengths(), a2 = 0, o2 = r2.length, s2;
    s2 = t3 || e17 * r2[o2 - 1];
    let c2 = 0, l2 = o2 - 1, u2;
    for (; c2 <= l2; ) if (a2 = Math[n2(425)](c2 + (l2 - c2) / 2), u2 = r2[a2] - s2, u2 < 0) c2 = a2 + 1;
    else if (u2 > 0) l2 = a2 - 1;
    else {
      l2 = a2;
      break;
    }
    if (a2 = l2, r2[a2] === s2) return a2 / (o2 - 1);
    let d2 = r2[a2], f2 = r2[a2 + 1] - d2, p2 = (s2 - d2) / f2;
    return (a2 + p2) / (o2 - 1);
  }
  getTangent(e17, t3) {
    let n2 = i, r2 = 1e-4, a2 = e17 - r2, o2 = e17 + r2;
    a2 < 0 && (a2 = 0), o2 > 1 && (o2 = 1);
    let s2 = this.getPoint(a2), c2 = this.getPoint(o2), l2 = t3 || (s2[n2(506)] ? new U() : new W());
    return l2.copy(c2)[n2(1206)](s2).normalize(), l2;
  }
  [i(560)](e17, t3) {
    let n2 = i, r2 = this.getUtoTmapping(e17);
    return this[n2(956)](r2, t3);
  }
  computeFrenetFrames(e17, t3 = false) {
    let n2 = i, r2 = new W(), a2 = [], o2 = [], s2 = [], c2 = new W(), l2 = new J();
    for (let t4 = 0; t4 <= e17; t4++) {
      let r3 = t4 / e17;
      a2[t4] = this[n2(560)](r3, new W());
    }
    o2[0] = new W(), s2[0] = new W();
    let u2 = Number.MAX_VALUE, d2 = Math.abs(a2[0].x), f2 = Math.abs(a2[0].y), p2 = Math.abs(a2[0].z);
    d2 <= u2 && (u2 = d2, r2[n2(1139)](1, 0, 0)), f2 <= u2 && (u2 = f2, r2.set(0, 1, 0)), p2 <= u2 && r2.set(0, 0, 1), c2[n2(336)](a2[0], r2)[n2(473)](), o2[0][n2(336)](a2[0], c2), s2[0].crossVectors(a2[0], o2[0]);
    for (let t4 = 1; t4 <= e17; t4++) {
      if (o2[t4] = o2[t4 - 1].clone(), s2[t4] = s2[t4 - 1].clone(), c2.crossVectors(a2[t4 - 1], a2[t4]), c2.length() > Number[n2(669)]) {
        c2[n2(473)]();
        let e18 = Math.acos(V(a2[t4 - 1].dot(a2[t4]), -1, 1));
        o2[t4].applyMatrix4(l2.makeRotationAxis(c2, e18));
      }
      s2[t4][n2(336)](a2[t4], o2[t4]);
    }
    if (t3 === true) {
      let t4 = Math.acos(V(o2[0].dot(o2[e17]), -1, 1));
      t4 /= e17, a2[0].dot(c2.crossVectors(o2[0], o2[e17])) > 0 && (t4 = -t4);
      for (let r3 = 1; r3 <= e17; r3++) o2[r3].applyMatrix4(l2.makeRotationAxis(a2[r3], t4 * r3)), s2[r3][n2(336)](a2[r3], o2[r3]);
    }
    return { tangents: a2, normals: o2, binormals: s2 };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e17) {
    return this.arcLengthDivisions = e17.arcLengthDivisions, this;
  }
  toJSON() {
    let e17 = { metadata: { version: 4.7, type: `Curve`, generator: `Curve.toJSON` } };
    return e17.arcLengthDivisions = this.arcLengthDivisions, e17.type = this.type, e17;
  }
  fromJSON(e17) {
    return this.arcLengthDivisions = e17.arcLengthDivisions, this;
  }
};
function Oa(e17, t3, n2 = 2) {
  let r2 = i, a2 = t3 && t3[r2(660)], o2 = a2 ? t3[0] * n2 : e17.length, s2 = ka(e17, 0, o2, n2, true), c2 = [];
  if (!s2 || s2.next === s2.prev) return c2;
  let l2, u2, d2;
  if (a2 && (s2 = Ia(e17, t3, s2, n2)), e17[r2(660)] > 80 * n2) {
    l2 = e17[0], u2 = e17[1];
    let t4 = l2, r3 = u2;
    for (let i2 = n2; i2 < o2; i2 += n2) {
      let n3 = e17[i2], a3 = e17[i2 + 1];
      n3 < l2 && (l2 = n3), a3 < u2 && (u2 = a3), n3 > t4 && (t4 = n3), a3 > r3 && (r3 = a3);
    }
    d2 = Math.max(t4 - l2, r3 - u2), d2 = d2 === 0 ? 0 : 32767 / d2;
  }
  return ja(s2, c2, n2, l2, u2, d2, 0), c2;
}
function ka(e17, t3, n2, r2, a2) {
  let o2 = i, s2;
  if (a2 === oo(e17, t3, n2, r2) > 0) for (let i2 = t3; i2 < n2; i2 += r2) s2 = ro(i2 / r2 | 0, e17[i2], e17[i2 + 1], s2);
  else for (let i2 = n2 - r2; i2 >= t3; i2 -= r2) s2 = ro(i2 / r2 | 0, e17[i2], e17[i2 + 1], s2);
  return s2 && Ya(s2, s2[o2(900)]) && (io(s2), s2 = s2.next), s2;
}
function Aa(e17, t3) {
  let n2 = i;
  if (!e17) return e17;
  t3 || (t3 = e17);
  let r2 = e17, a2;
  do
    if (a2 = false, !r2.steiner && (Ya(r2, r2.next) || Ja(r2[n2(1311)], r2, r2.next) === 0)) {
      if (io(r2), r2 = t3 = r2.prev, r2 === r2.next) break;
      a2 = true;
    } else r2 = r2.next;
  while (a2 || r2 !== t3);
  return t3;
}
function ja(e17, t3, n2, r2, i2, a2, o2) {
  if (!e17) return;
  !o2 && a2 && Va(e17, r2, i2, a2);
  let s2 = e17;
  for (; e17.prev !== e17.next; ) {
    let c2 = e17.prev, l2 = e17.next;
    if (a2 ? Na(e17, r2, i2, a2) : Ma(e17)) {
      t3.push(c2.i, e17.i, l2.i), io(e17), e17 = l2.next, s2 = l2.next;
      continue;
    }
    if (e17 = l2, e17 === s2) {
      o2 ? o2 === 1 ? (e17 = Pa(Aa(e17), t3), ja(e17, t3, n2, r2, i2, a2, 2)) : o2 === 2 && Fa(e17, t3, n2, r2, i2, a2) : ja(Aa(e17), t3, n2, r2, i2, a2, 1);
      break;
    }
  }
}
function Ma(e17) {
  let t3 = e17.prev, n2 = e17, r2 = e17.next;
  if (Ja(t3, n2, r2) >= 0) return false;
  let i2 = t3.x, a2 = n2.x, o2 = r2.x, s2 = t3.y, c2 = n2.y, l2 = r2.y, u2 = Math.min(i2, a2, o2), d2 = Math.min(s2, c2, l2), f2 = Math.max(i2, a2, o2), p2 = Math.max(s2, c2, l2), m2 = r2.next;
  for (; m2 !== t3; ) {
    if (m2.x >= u2 && m2.x <= f2 && m2.y >= d2 && m2.y <= p2 && Ka(i2, s2, a2, c2, o2, l2, m2.x, m2.y) && Ja(m2.prev, m2, m2.next) >= 0) return false;
    m2 = m2.next;
  }
  return true;
}
function Na(e17, t3, n2, r2) {
  let a2 = i, o2 = e17.prev, s2 = e17, c2 = e17.next;
  if (Ja(o2, s2, c2) >= 0) return false;
  let l2 = o2.x, u2 = s2.x, d2 = c2.x, f2 = o2.y, p2 = s2.y, m2 = c2.y, h2 = Math.min(l2, u2, d2), g2 = Math.min(f2, p2, m2), _2 = Math.max(l2, u2, d2), v2 = Math.max(f2, p2, m2), y2 = Ua(h2, g2, t3, n2, r2), b2 = Ua(_2, v2, t3, n2, r2), x2 = e17.prevZ, S2 = e17.nextZ;
  for (; x2 && x2.z >= y2 && S2 && S2.z <= b2; ) {
    if (x2.x >= h2 && x2.x <= _2 && x2.y >= g2 && x2.y <= v2 && x2 !== o2 && x2 !== c2 && Ka(l2, f2, u2, p2, d2, m2, x2.x, x2.y) && Ja(x2[a2(1311)], x2, x2.next) >= 0 || (x2 = x2.prevZ, S2.x >= h2 && S2.x <= _2 && S2.y >= g2 && S2.y <= v2 && S2 !== o2 && S2 !== c2 && Ka(l2, f2, u2, p2, d2, m2, S2.x, S2.y) && Ja(S2.prev, S2, S2.next) >= 0)) return false;
    S2 = S2.nextZ;
  }
  for (; x2 && x2.z >= y2; ) {
    if (x2.x >= h2 && x2.x <= _2 && x2.y >= g2 && x2.y <= v2 && x2 !== o2 && x2 !== c2 && Ka(l2, f2, u2, p2, d2, m2, x2.x, x2.y) && Ja(x2.prev, x2, x2.next) >= 0) return false;
    x2 = x2.prevZ;
  }
  for (; S2 && S2.z <= b2; ) {
    if (S2.x >= h2 && S2.x <= _2 && S2.y >= g2 && S2.y <= v2 && S2 !== o2 && S2 !== c2 && Ka(l2, f2, u2, p2, d2, m2, S2.x, S2.y) && Ja(S2.prev, S2, S2.next) >= 0) return false;
    S2 = S2.nextZ;
  }
  return true;
}
function Pa(e17, t3) {
  let n2 = i, r2 = e17;
  do {
    let i2 = r2[n2(1311)], a2 = r2[n2(900)].next;
    !Ya(i2, a2) && Xa(i2, r2, r2.next, a2) && eo(i2, a2) && eo(a2, i2) && (t3.push(i2.i, r2.i, a2.i), io(r2), io(r2[n2(900)]), r2 = e17 = a2), r2 = r2.next;
  } while (r2 !== e17);
  return Aa(r2);
}
function Fa(e17, t3, n2, r2, a2, o2) {
  let s2 = i, c2 = e17;
  do {
    let e18 = c2[s2(900)].next;
    for (; e18 !== c2.prev; ) {
      if (c2.i !== e18.i && qa(c2, e18)) {
        let i2 = no(c2, e18);
        c2 = Aa(c2, c2[s2(900)]), i2 = Aa(i2, i2.next), ja(c2, t3, n2, r2, a2, o2, 0), ja(i2, t3, n2, r2, a2, o2, 0);
        return;
      }
      e18 = e18[s2(900)];
    }
    c2 = c2[s2(900)];
  } while (c2 !== e17);
}
function Ia(e17, t3, n2, r2) {
  let a2 = i, o2 = [];
  for (let n3 = 0, i2 = t3.length; n3 < i2; n3++) {
    let s2 = ka(e17, t3[n3] * r2, n3 < i2 - 1 ? t3[n3 + 1] * r2 : e17.length, r2, false);
    s2 === s2[a2(900)] && (s2.steiner = true), o2.push(Wa(s2));
  }
  o2[a2(334)](La);
  for (let e18 = 0; e18 < o2.length; e18++) n2 = Ra(o2[e18], n2);
  return n2;
}
function La(e17, t3) {
  let n2 = i, r2 = e17.x - t3.x;
  return r2 === 0 && (r2 = e17.y - t3.y, r2 === 0 && (r2 = (e17.next.y - e17.y) / (e17[n2(900)].x - e17.x) - (t3.next.y - t3.y) / (t3.next.x - t3.x))), r2;
}
function Ra(e17, t3) {
  let n2 = za(e17, t3);
  if (!n2) return t3;
  let r2 = no(n2, e17);
  return Aa(r2, r2.next), Aa(n2, n2.next);
}
function za(e17, t3) {
  let n2 = t3, r2 = e17.x, i2 = e17.y, a2 = -1 / 0, o2;
  if (Ya(e17, n2)) return n2;
  do {
    if (Ya(e17, n2.next)) return n2.next;
    if (i2 <= n2.y && i2 >= n2.next.y && n2.next.y !== n2.y) {
      let e18 = n2.x + (i2 - n2.y) * (n2.next.x - n2.x) / (n2.next.y - n2.y);
      if (e18 <= r2 && e18 > a2 && (a2 = e18, o2 = n2.x < n2.next.x ? n2 : n2.next, e18 === r2)) return o2;
    }
    n2 = n2.next;
  } while (n2 !== t3);
  if (!o2) return null;
  let s2 = o2, c2 = o2.x, l2 = o2.y, u2 = 1 / 0;
  n2 = o2;
  do {
    if (r2 >= n2.x && n2.x >= c2 && r2 !== n2.x && Ga(i2 < l2 ? r2 : a2, i2, c2, l2, i2 < l2 ? a2 : r2, i2, n2.x, n2.y)) {
      let t4 = Math.abs(i2 - n2.y) / (r2 - n2.x);
      eo(n2, e17) && (t4 < u2 || t4 === u2 && (n2.x > o2.x || n2.x === o2.x && Ba(o2, n2))) && (o2 = n2, u2 = t4);
    }
    n2 = n2.next;
  } while (n2 !== s2);
  return o2;
}
function Ba(e17, t3) {
  let n2 = i;
  return Ja(e17.prev, e17, t3.prev) < 0 && Ja(t3.next, e17, e17[n2(900)]) < 0;
}
function Va(e17, t3, n2, r2) {
  let a2 = i, o2 = e17;
  do
    o2.z === 0 && (o2.z = Ua(o2.x, o2.y, t3, n2, r2)), o2.prevZ = o2.prev, o2[a2(1075)] = o2.next, o2 = o2.next;
  while (o2 !== e17);
  o2.prevZ.nextZ = null, o2.prevZ = null, Ha(o2);
}
function Ha(e17) {
  let t3 = i, n2, r2 = 1;
  do {
    let i2 = e17, a2;
    e17 = null;
    let o2 = null;
    for (n2 = 0; i2; ) {
      n2++;
      let s2 = i2, c2 = 0;
      for (let e18 = 0; e18 < r2 && (c2++, s2 = s2[t3(1075)], s2); e18++) ;
      let l2 = r2;
      for (; c2 > 0 || l2 > 0 && s2; ) c2 !== 0 && (l2 === 0 || !s2 || i2.z <= s2.z) ? (a2 = i2, i2 = i2.nextZ, c2--) : (a2 = s2, s2 = s2.nextZ, l2--), o2 ? o2.nextZ = a2 : e17 = a2, a2.prevZ = o2, o2 = a2;
      i2 = s2;
    }
    o2[t3(1075)] = null, r2 *= 2;
  } while (n2 > 1);
  return e17;
}
function Ua(e17, t3, n2, r2, i2) {
  return e17 = (e17 - n2) * i2 | 0, t3 = (t3 - r2) * i2 | 0, e17 = (e17 | e17 << 8) & 16711935, e17 = (e17 | e17 << 4) & 252645135, e17 = (e17 | e17 << 2) & 858993459, e17 = (e17 | e17 << 1) & 1431655765, t3 = (t3 | t3 << 8) & 16711935, t3 = (t3 | t3 << 4) & 252645135, t3 = (t3 | t3 << 2) & 858993459, t3 = (t3 | t3 << 1) & 1431655765, e17 | t3 << 1;
}
function Wa(e17) {
  let t3 = e17, n2 = e17;
  do
    (t3.x < n2.x || t3.x === n2.x && t3.y < n2.y) && (n2 = t3), t3 = t3.next;
  while (t3 !== e17);
  return n2;
}
function Ga(e17, t3, n2, r2, i2, a2, o2, s2) {
  return (i2 - o2) * (t3 - s2) >= (e17 - o2) * (a2 - s2) && (e17 - o2) * (r2 - s2) >= (n2 - o2) * (t3 - s2) && (n2 - o2) * (a2 - s2) >= (i2 - o2) * (r2 - s2);
}
function Ka(e17, t3, n2, r2, i2, a2, o2, s2) {
  return !(e17 === o2 && t3 === s2) && Ga(e17, t3, n2, r2, i2, a2, o2, s2);
}
function qa(e17, t3) {
  let n2 = i;
  return e17.next.i !== t3.i && e17.prev.i !== t3.i && !$a(e17, t3) && (eo(e17, t3) && eo(t3, e17) && to(e17, t3) && (Ja(e17.prev, e17, t3.prev) || Ja(e17, t3[n2(1311)], t3)) || Ya(e17, t3) && Ja(e17.prev, e17, e17.next) > 0 && Ja(t3.prev, t3, t3.next) > 0);
}
function Ja(e17, t3, n2) {
  return (t3.y - e17.y) * (n2.x - t3.x) - (t3.x - e17.x) * (n2.y - t3.y);
}
function Ya(e17, t3) {
  return e17.x === t3.x && e17.y === t3.y;
}
function Xa(e17, t3, n2, r2) {
  let i2 = Qa(Ja(e17, t3, n2)), a2 = Qa(Ja(e17, t3, r2)), o2 = Qa(Ja(n2, r2, e17)), s2 = Qa(Ja(n2, r2, t3));
  return !!(i2 !== a2 && o2 !== s2 || i2 === 0 && Za(e17, n2, t3) || a2 === 0 && Za(e17, r2, t3) || o2 === 0 && Za(n2, e17, r2) || s2 === 0 && Za(n2, t3, r2));
}
function Za(e17, t3, n2) {
  return t3.x <= Math.max(e17.x, n2.x) && t3.x >= Math.min(e17.x, n2.x) && t3.y <= Math.max(e17.y, n2.y) && t3.y >= Math.min(e17.y, n2.y);
}
function Qa(e17) {
  return e17 > 0 ? 1 : e17 < 0 ? -1 : 0;
}
function $a(e17, t3) {
  let n2 = i, r2 = e17;
  do {
    if (r2.i !== e17.i && r2[n2(900)].i !== e17.i && r2.i !== t3.i && r2.next.i !== t3.i && Xa(r2, r2.next, e17, t3)) return true;
    r2 = r2.next;
  } while (r2 !== e17);
  return false;
}
function eo(e17, t3) {
  let n2 = i;
  return Ja(e17[n2(1311)], e17, e17[n2(900)]) < 0 ? Ja(e17, t3, e17[n2(900)]) >= 0 && Ja(e17, e17.prev, t3) >= 0 : Ja(e17, t3, e17[n2(1311)]) < 0 || Ja(e17, e17.next, t3) < 0;
}
function to(e17, t3) {
  let n2 = e17, r2 = false, i2 = (e17.x + t3.x) / 2, a2 = (e17.y + t3.y) / 2;
  do
    n2.y > a2 != n2.next.y > a2 && n2.next.y !== n2.y && i2 < (n2.next.x - n2.x) * (a2 - n2.y) / (n2.next.y - n2.y) + n2.x && (r2 = !r2), n2 = n2.next;
  while (n2 !== e17);
  return r2;
}
function no(e17, t3) {
  let n2 = i, r2 = ao(e17.i, e17.x, e17.y), a2 = ao(t3.i, t3.x, t3.y), o2 = e17[n2(900)], s2 = t3.prev;
  return e17.next = t3, t3.prev = e17, r2[n2(900)] = o2, o2[n2(1311)] = r2, a2[n2(900)] = r2, r2.prev = a2, s2.next = a2, a2[n2(1311)] = s2, a2;
}
function ro(e17, t3, n2, r2) {
  let a2 = i, o2 = ao(e17, t3, n2);
  return r2 ? (o2[a2(900)] = r2[a2(900)], o2.prev = r2, r2[a2(900)].prev = o2, r2.next = o2) : (o2.prev = o2, o2.next = o2), o2;
}
function io(e17) {
  let t3 = i;
  e17.next.prev = e17.prev, e17.prev.next = e17.next, e17[t3(922)] && (e17.prevZ.nextZ = e17[t3(1075)]), e17.nextZ && (e17.nextZ.prevZ = e17.prevZ);
}
function ao(e17, t3, n2) {
  return { i: e17, x: t3, y: n2, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function oo(e17, t3, n2, r2) {
  let i2 = 0;
  for (let a2 = t3, o2 = n2 - r2; a2 < n2; a2 += r2) i2 += (e17[o2] - e17[a2]) * (e17[a2 + 1] + e17[o2 + 1]), o2 = a2;
  return i2;
}
var so = class {
  static triangulate(e17, t3, n2 = 2) {
    return Oa(e17, t3, n2);
  }
}, co = class e13 {
  static [i(682)](e17) {
    let t3 = e17.length, n2 = 0;
    for (let r2 = t3 - 1, i2 = 0; i2 < t3; r2 = i2++) n2 += e17[r2].x * e17[i2].y - e17[i2].x * e17[r2].y;
    return n2 * 0.5;
  }
  static isClockWise(t3) {
    return e13.area(t3) < 0;
  }
  static triangulateShape(e17, t3) {
    let n2 = i, r2 = [], a2 = [], o2 = [];
    lo(e17), uo(r2, e17);
    let s2 = e17.length;
    t3[n2(695)](lo);
    for (let e18 = 0; e18 < t3.length; e18++) a2.push(s2), s2 += t3[e18].length, uo(r2, t3[e18]);
    let c2 = so.triangulate(r2, a2);
    for (let e18 = 0; e18 < c2.length; e18 += 3) o2.push(c2[n2(883)](e18, e18 + 3));
    return o2;
  }
};
function lo(e17) {
  let t3 = e17.length;
  t3 > 2 && e17[t3 - 1].equals(e17[0]) && e17.pop();
}
function uo(e17, t3) {
  let n2 = i;
  for (let r2 = 0; r2 < t3[n2(660)]; r2++) e17.push(t3[r2].x), e17.push(t3[r2].y);
}
var fo = class e14 extends Gr {
  constructor(e17 = 1, t3 = 1, n2 = 1, r2 = 1) {
    let a2 = i;
    super(), this.type = `PlaneGeometry`, this.parameters = { width: e17, height: t3, widthSegments: n2, heightSegments: r2 };
    let o2 = e17 / 2, s2 = t3 / 2, c2 = Math.floor(n2), l2 = Math.floor(r2), u2 = c2 + 1, d2 = l2 + 1, f2 = e17 / c2, p2 = t3 / l2, m2 = [], h2 = [], g2 = [], _2 = [];
    for (let e18 = 0; e18 < d2; e18++) {
      let t4 = e18 * p2 - s2;
      for (let n3 = 0; n3 < u2; n3++) {
        let r3 = n3 * f2 - o2;
        h2.push(r3, -t4, 0), g2.push(0, 0, 1), _2.push(n3 / c2), _2.push(1 - e18 / l2);
      }
    }
    for (let e18 = 0; e18 < l2; e18++) for (let t4 = 0; t4 < c2; t4++) {
      let n3 = t4 + u2 * e18, r3 = t4 + u2 * (e18 + 1), i2 = t4 + 1 + u2 * (e18 + 1), o3 = t4 + 1 + u2 * e18;
      m2[a2(1184)](n3, r3, o3), m2.push(r3, i2, o3);
    }
    this.setIndex(m2), this[a2(248)](`position`, new X(h2, 3)), this.setAttribute(`normal`, new X(g2, 3)), this[a2(248)](`uv`, new X(_2, 2));
  }
  copy(e17) {
    return super.copy(e17), this.parameters = Object.assign({}, e17.parameters), this;
  }
  static [i(1003)](t3) {
    return new e14(t3.width, t3.height, t3.widthSegments, t3.heightSegments);
  }
}, po = class e15 extends Gr {
  constructor(e17 = 1, t3 = 32, n2 = 16, r2 = 0, a2 = Math.PI * 2, o2 = 0, s2 = Math.PI) {
    let c2 = i;
    super(), this.type = `SphereGeometry`, this.parameters = { radius: e17, widthSegments: t3, heightSegments: n2, phiStart: r2, phiLength: a2, thetaStart: o2, thetaLength: s2 }, t3 = Math.max(3, Math.floor(t3)), n2 = Math.max(2, Math.floor(n2));
    let l2 = Math.min(o2 + s2, Math.PI), u2 = 0, d2 = [], f2 = new W(), p2 = new W(), m2 = [], h2 = [], g2 = [], _2 = [];
    for (let i2 = 0; i2 <= n2; i2++) {
      let m3 = [], v2 = i2 / n2, y2 = 0;
      i2 === 0 && o2 === 0 ? y2 = 0.5 / t3 : i2 === n2 && l2 === Math.PI && (y2 = -0.5 / t3);
      for (let n3 = 0; n3 <= t3; n3++) {
        let i3 = n3 / t3;
        f2.x = -e17 * Math.cos(r2 + i3 * a2) * Math[c2(547)](o2 + v2 * s2), f2.y = e17 * Math.cos(o2 + v2 * s2), f2.z = e17 * Math.sin(r2 + i3 * a2) * Math.sin(o2 + v2 * s2), h2.push(f2.x, f2.y, f2.z), p2.copy(f2).normalize(), g2.push(p2.x, p2.y, p2.z), _2[c2(1184)](i3 + y2, 1 - v2), m3.push(u2++);
      }
      d2.push(m3);
    }
    for (let e18 = 0; e18 < n2; e18++) for (let r3 = 0; r3 < t3; r3++) {
      let t4 = d2[e18][r3 + 1], i2 = d2[e18][r3], a3 = d2[e18 + 1][r3], s3 = d2[e18 + 1][r3 + 1];
      (e18 !== 0 || o2 > 0) && m2[c2(1184)](t4, i2, s3), (e18 !== n2 - 1 || l2 < Math.PI) && m2.push(i2, a3, s3);
    }
    this[c2(924)](m2), this.setAttribute(c2(1477), new X(h2, 3)), this.setAttribute(`normal`, new X(g2, 3)), this.setAttribute(`uv`, new X(_2, 2));
  }
  copy(e17) {
    return super[i(1250)](e17), this.parameters = Object.assign({}, e17.parameters), this;
  }
  static fromJSON(t3) {
    let n2 = i;
    return new e15(t3.radius, t3.widthSegments, t3.heightSegments, t3.phiStart, t3.phiLength, t3.thetaStart, t3[n2(988)]);
  }
};
function mo(e17) {
  let t3 = {};
  for (let n2 in e17) {
    t3[n2] = {};
    for (let r2 in e17[n2]) {
      let i2 = e17[n2][r2];
      if (go(i2)) i2.isRenderTargetTexture ? (z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`), t3[n2][r2] = null) : t3[n2][r2] = i2.clone();
      else if (Array.isArray(i2)) if (go(i2[0])) {
        let e18 = [];
        for (let t4 = 0, n3 = i2.length; t4 < n3; t4++) e18[t4] = i2[t4].clone();
        t3[n2][r2] = e18;
      } else t3[n2][r2] = i2.slice();
      else t3[n2][r2] = i2;
    }
  }
  return t3;
}
function ho(e17) {
  let t3 = {};
  for (let n2 = 0; n2 < e17.length; n2++) {
    let r2 = mo(e17[n2]);
    for (let e18 in r2) t3[e18] = r2[e18];
  }
  return t3;
}
function go(e17) {
  let t3 = i;
  return e17 && (e17.isColor || e17.isMatrix3 || e17[t3(1430)] || e17.isVector2 || e17[t3(1236)] || e17.isVector4 || e17.isTexture || e17.isQuaternion);
}
function _o(e17) {
  let t3 = [];
  for (let n2 = 0; n2 < e17.length; n2++) t3.push(e17[n2].clone());
  return t3;
}
function vo(e17) {
  let t3 = i, n2 = e17.getRenderTarget();
  return n2 === null ? e17.outputColorSpace : n2[t3(449)] === true ? n2[t3(1017)].colorSpace : K.workingColorSpace;
}
var yo = { clone: mo, merge: ho }, bo = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, xo = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, So = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this[t3(1042)] = true, this.type = t3(348), this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = bo, this.fragmentShader = xo, this.linewidth = 1, this.wireframe = false, this[t3(789)] = 1, this.fog = false, this[t3(387)] = false, this.clipping = false, this[t3(356)] = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this[t3(990)] = void 0, this[t3(1079)] = false, this[t3(1516)] = null, e17 !== void 0 && this.setValues(e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.fragmentShader = e17.fragmentShader, this.vertexShader = e17.vertexShader, this.uniforms = mo(e17.uniforms), this.uniformsGroups = _o(e17.uniformsGroups), this.defines = Object.assign({}, e17.defines), this.wireframe = e17.wireframe, this.wireframeLinewidth = e17.wireframeLinewidth, this.fog = e17.fog, this.lights = e17.lights, this.clipping = e17.clipping, this.extensions = Object.assign({}, e17[t3(617)]), this.glslVersion = e17[t3(1516)], this.defaultAttributeValues = Object.assign({}, e17[t3(1413)]), this.index0AttributeName = e17.index0AttributeName, this[t3(1079)] = e17[t3(1079)], this;
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    n2.glslVersion = this.glslVersion, n2.uniforms = {};
    for (let r3 in this.uniforms) {
      let i2 = this.uniforms[r3].value;
      i2 && i2.isTexture ? n2.uniforms[r3] = { type: `t`, value: i2[t3(497)](e17).uuid } : i2 && i2.isColor ? n2.uniforms[r3] = { type: `c`, value: i2.getHex() } : i2 && i2.isVector2 ? n2.uniforms[r3] = { type: `v2`, value: i2.toArray() } : i2 && i2.isVector3 ? n2.uniforms[r3] = { type: `v3`, value: i2.toArray() } : i2 && i2.isVector4 ? n2[t3(606)][r3] = { type: `v4`, value: i2.toArray() } : i2 && i2.isMatrix3 ? n2.uniforms[r3] = { type: `m3`, value: i2.toArray() } : i2 && i2.isMatrix4 ? n2.uniforms[r3] = { type: `m4`, value: i2.toArray() } : n2.uniforms[r3] = { value: i2 };
    }
    Object.keys(this[t3(523)])[t3(660)] > 0 && (n2.defines = this.defines), n2.vertexShader = this.vertexShader, n2.fragmentShader = this.fragmentShader, n2[t3(387)] = this.lights, n2[t3(179)] = this[t3(179)];
    let r2 = {};
    for (let e18 in this.extensions) this[t3(617)][e18] === true && (r2[e18] = true);
    return Object.keys(r2)[t3(660)] > 0 && (n2.extensions = r2), n2;
  }
}, Co = class extends So {
  constructor(e17) {
    super(e17), this.isRawShaderMaterial = true, this.type = `RawShaderMaterial`;
  }
}, wo = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this.isMeshStandardMaterial = true, this.type = `MeshStandardMaterial`, this.defines = { STANDARD: `` }, this.color = new Y(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this[t3(456)] = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this[t3(738)] = 1, this.emissiveMap = null, this.bumpMap = null, this[t3(1044)] = 1, this.normalMap = null, this[t3(1331)] = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this[t3(1114)] = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Tn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = `round`, this.wireframeLinejoin = `round`, this[t3(1515)] = false, this[t3(240)] = true, this.setValues(e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.defines = { STANDARD: `` }, this[t3(1119)].copy(e17.color), this.roughness = e17.roughness, this.metalness = e17.metalness, this.map = e17.map, this.lightMap = e17.lightMap, this.lightMapIntensity = e17.lightMapIntensity, this[t3(456)] = e17.aoMap, this.aoMapIntensity = e17.aoMapIntensity, this.emissive.copy(e17.emissive), this.emissiveMap = e17.emissiveMap, this[t3(738)] = e17[t3(738)], this.bumpMap = e17.bumpMap, this.bumpScale = e17.bumpScale, this[t3(1083)] = e17.normalMap, this.normalMapType = e17[t3(1331)], this.normalScale[t3(1250)](e17.normalScale), this[t3(180)] = e17.displacementMap, this.displacementScale = e17.displacementScale, this[t3(1114)] = e17.displacementBias, this.roughnessMap = e17[t3(1289)], this[t3(698)] = e17[t3(698)], this.alphaMap = e17.alphaMap, this.envMap = e17.envMap, this.envMapRotation.copy(e17[t3(592)]), this.envMapIntensity = e17.envMapIntensity, this.wireframe = e17.wireframe, this[t3(789)] = e17[t3(789)], this.wireframeLinecap = e17.wireframeLinecap, this.wireframeLinejoin = e17.wireframeLinejoin, this.flatShading = e17[t3(1515)], this.fog = e17.fog, this;
  }
}, To = class extends wo {
  constructor(e17) {
    let t3 = i;
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: ``, PHYSICAL: `` }, this.type = `MeshPhysicalMaterial`, this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this[t3(196)] = null, this[t3(237)] = new U(1, 1), this.clearcoatNormalMap = null, this[t3(1303)] = 1.5, Object.defineProperty(this, t3(549), { get: function() {
      return V(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(e18) {
      this.ior = (1 + 0.4 * e18) / (1 - 0.4 * e18);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Y(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this[t3(343)] = 1 / 0, this.attenuationColor = new Y(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Y(1, 1, 1), this.specularColorMap = null, this[t3(961)] = 0, this._clearcoat = 0, this[t3(855)] = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e17);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e17) {
    let t3 = i;
    this._anisotropy > 0 != e17 > 0 && this.version++, this[t3(961)] = e17;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e17) {
    let t3 = i;
    this[t3(808)] > 0 != e17 > 0 && this.version++, this._clearcoat = e17;
  }
  get [i(274)]() {
    return this._iridescence;
  }
  set iridescence(e17) {
    this._iridescence > 0 != e17 > 0 && this.version++, this._iridescence = e17;
  }
  get dispersion() {
    let e17 = i;
    return this[e17(855)];
  }
  set [i(815)](e17) {
    this._dispersion > 0 != e17 > 0 && this.version++, this._dispersion = e17;
  }
  get sheen() {
    let e17 = i;
    return this[e17(1431)];
  }
  set sheen(e17) {
    this._sheen > 0 != e17 > 0 && this.version++, this._sheen = e17;
  }
  get [i(954)]() {
    return this._transmission;
  }
  set transmission(e17) {
    this._transmission > 0 != e17 > 0 && this.version++, this._transmission = e17;
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.defines = { STANDARD: ``, PHYSICAL: `` }, this.anisotropy = e17.anisotropy, this.anisotropyRotation = e17.anisotropyRotation, this[t3(1437)] = e17.anisotropyMap, this.clearcoat = e17.clearcoat, this.clearcoatMap = e17.clearcoatMap, this.clearcoatRoughness = e17[t3(371)], this[t3(196)] = e17.clearcoatRoughnessMap, this.clearcoatNormalMap = e17.clearcoatNormalMap, this[t3(237)][t3(1250)](e17.clearcoatNormalScale), this.dispersion = e17.dispersion, this.ior = e17.ior, this.iridescence = e17.iridescence, this[t3(413)] = e17.iridescenceMap, this.iridescenceIOR = e17[t3(1364)], this.iridescenceThicknessRange = [...e17.iridescenceThicknessRange], this.iridescenceThicknessMap = e17.iridescenceThicknessMap, this[t3(1391)] = e17.sheen, this.sheenColor.copy(e17[t3(429)]), this[t3(289)] = e17.sheenColorMap, this.sheenRoughness = e17.sheenRoughness, this.sheenRoughnessMap = e17.sheenRoughnessMap, this.transmission = e17.transmission, this.transmissionMap = e17.transmissionMap, this[t3(832)] = e17.thickness, this.thicknessMap = e17.thicknessMap, this.attenuationDistance = e17.attenuationDistance, this[t3(459)][t3(1250)](e17[t3(459)]), this[t3(1212)] = e17.specularIntensity, this.specularIntensityMap = e17.specularIntensityMap, this[t3(1025)].copy(e17.specularColor), this.specularColorMap = e17.specularColorMap, this;
  }
}, Eo = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this.isMeshPhongMaterial = true, this.type = `MeshPhongMaterial`, this.color = new Y(16777215), this.specular = new Y(1118481), this.shininess = 30, this[t3(579)] = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this[t3(738)] = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this[t3(342)] = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Tn(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = `round`, this[t3(1255)] = `round`, this.flatShading = false, this.fog = true, this.setValues(e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.color.copy(e17.color), this.specular[t3(1250)](e17.specular), this[t3(563)] = e17[t3(563)], this.map = e17.map, this.lightMap = e17.lightMap, this[t3(1070)] = e17[t3(1070)], this.aoMap = e17[t3(456)], this.aoMapIntensity = e17.aoMapIntensity, this.emissive[t3(1250)](e17.emissive), this.emissiveMap = e17[t3(691)], this.emissiveIntensity = e17.emissiveIntensity, this.bumpMap = e17.bumpMap, this.bumpScale = e17.bumpScale, this.normalMap = e17.normalMap, this.normalMapType = e17.normalMapType, this.normalScale.copy(e17.normalScale), this[t3(180)] = e17.displacementMap, this.displacementScale = e17[t3(342)], this.displacementBias = e17.displacementBias, this[t3(481)] = e17[t3(481)], this.alphaMap = e17.alphaMap, this.envMap = e17.envMap, this.envMapRotation.copy(e17.envMapRotation), this.combine = e17.combine, this[t3(549)] = e17.reflectivity, this.envMapIntensity = e17.envMapIntensity, this.refractionRatio = e17.refractionRatio, this.wireframe = e17.wireframe, this.wireframeLinewidth = e17.wireframeLinewidth, this.wireframeLinecap = e17[t3(631)], this.wireframeLinejoin = e17.wireframeLinejoin, this.flatShading = e17.flatShading, this.fog = e17.fog, this;
  }
}, Do = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this[t3(260)] = true, this[t3(1112)] = `MeshLambertMaterial`, this[t3(1119)] = new Y(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Y(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this[t3(1044)] = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new U(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Tn(), this[t3(534)] = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = 0.98, this[t3(1121)] = false, this.wireframeLinewidth = 1, this.wireframeLinecap = `round`, this.wireframeLinejoin = `round`, this.flatShading = false, this[t3(240)] = true, this.setValues(e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.color.copy(e17.color), this.map = e17.map, this[t3(1054)] = e17.lightMap, this.lightMapIntensity = e17[t3(1070)], this.aoMap = e17.aoMap, this.aoMapIntensity = e17.aoMapIntensity, this.emissive.copy(e17.emissive), this.emissiveMap = e17.emissiveMap, this.emissiveIntensity = e17.emissiveIntensity, this.bumpMap = e17[t3(1354)], this.bumpScale = e17.bumpScale, this[t3(1083)] = e17.normalMap, this.normalMapType = e17.normalMapType, this.normalScale.copy(e17.normalScale), this.displacementMap = e17.displacementMap, this[t3(342)] = e17.displacementScale, this.displacementBias = e17.displacementBias, this.specularMap = e17.specularMap, this.alphaMap = e17.alphaMap, this.envMap = e17.envMap, this.envMapRotation.copy(e17.envMapRotation), this.combine = e17.combine, this.reflectivity = e17.reflectivity, this[t3(703)] = e17.envMapIntensity, this.refractionRatio = e17.refractionRatio, this.wireframe = e17.wireframe, this.wireframeLinewidth = e17.wireframeLinewidth, this.wireframeLinecap = e17.wireframeLinecap, this[t3(1255)] = e17.wireframeLinejoin, this.flatShading = e17.flatShading, this[t3(240)] = e17.fog, this;
  }
}, Oo = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this[t3(256)] = true, this.type = t3(897), this[t3(1005)] = rt, this.map = null, this.alphaMap = null, this[t3(180)] = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e17);
  }
  [i(1250)](e17) {
    let t3 = i;
    return super.copy(e17), this[t3(1005)] = e17.depthPacking, this.map = e17.map, this.alphaMap = e17.alphaMap, this[t3(180)] = e17[t3(180)], this[t3(342)] = e17[t3(342)], this.displacementBias = e17.displacementBias, this.wireframe = e17.wireframe, this.wireframeLinewidth = e17.wireframeLinewidth, this;
  }
}, ko = class extends Xr {
  constructor(e17) {
    let t3 = i;
    super(), this.isMeshDistanceMaterial = true, this[t3(1112)] = `MeshDistanceMaterial`, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e17);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.map = e17.map, this.alphaMap = e17.alphaMap, this.displacementMap = e17.displacementMap, this[t3(342)] = e17[t3(342)], this.displacementBias = e17.displacementBias, this;
  }
};
function Ao(e17, t3) {
  return !e17 || e17.constructor === t3 ? e17 : typeof t3.BYTES_PER_ELEMENT == `number` ? new t3(e17) : Array.prototype.slice.call(e17);
}
function jo(e17) {
  function t3(t4, n3) {
    return e17[t4] - e17[n3];
  }
  let n2 = e17.length, r2 = Array(n2);
  for (let e18 = 0; e18 !== n2; ++e18) r2[e18] = e18;
  return r2.sort(t3), r2;
}
function Mo(e17, t3, n2) {
  let r2 = e17.length, i2 = new e17.constructor(r2);
  for (let a2 = 0, o2 = 0; o2 !== r2; ++a2) {
    let r3 = n2[a2] * t3;
    for (let n3 = 0; n3 !== t3; ++n3) i2[o2++] = e17[r3 + n3];
  }
  return i2;
}
function No(e17, t3, n2, r2) {
  let a2 = i, o2 = 1, s2 = e17[0];
  for (; s2 !== void 0 && s2[r2] === void 0; ) s2 = e17[o2++];
  if (s2 === void 0) return;
  let c2 = s2[r2];
  if (c2 !== void 0) if (Array.isArray(c2)) do
    c2 = s2[r2], c2 !== void 0 && (t3.push(s2.time), n2[a2(1184)](...c2)), s2 = e17[o2++];
  while (s2 !== void 0);
  else if (c2[a2(1263)] !== void 0) do
    c2 = s2[r2], c2 !== void 0 && (t3.push(s2.time), c2.toArray(n2, n2.length)), s2 = e17[o2++];
  while (s2 !== void 0);
  else do
    c2 = s2[r2], c2 !== void 0 && (t3.push(s2.time), n2[a2(1184)](c2)), s2 = e17[o2++];
  while (s2 !== void 0);
}
var Po = class {
  constructor(e17, t3, n2, r2) {
    let a2 = i;
    this.parameterPositions = e17, this[a2(1494)] = 0, this[a2(901)] = r2 === void 0 ? new t3.constructor(n2) : r2, this[a2(367)] = t3, this.valueSize = n2, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e17) {
    let t3 = i, n2 = this.parameterPositions, r2 = this._cachedIndex, a2 = n2[r2], o2 = n2[r2 - 1];
    aj: {
      ak: {
        let i2;
        am: {
          ap: if (!(e17 < a2)) {
            for (let i3 = r2 + 2; ; ) {
              if (a2 === void 0) {
                if (e17 < o2) break ap;
                return r2 = n2[t3(660)], this._cachedIndex = r2, this.copySampleValue_(r2 - 1);
              }
              if (r2 === i3) break;
              if (o2 = a2, a2 = n2[++r2], e17 < a2) break ak;
            }
            i2 = n2[t3(660)];
            break am;
          }
          if (!(e17 >= o2)) {
            let s2 = n2[1];
            e17 < s2 && (r2 = 2, o2 = s2);
            for (let i3 = r2 - 2; ; ) {
              if (o2 === void 0) return this[t3(1494)] = 0, this.copySampleValue_(0);
              if (r2 === i3) break;
              if (a2 = o2, o2 = n2[--r2 - 1], e17 >= o2) break ak;
            }
            i2 = r2, r2 = 0;
            break am;
          }
          break aj;
        }
        for (; r2 < i2; ) {
          let t4 = r2 + i2 >>> 1;
          e17 < n2[t4] ? i2 = t4 : r2 = t4 + 1;
        }
        if (a2 = n2[r2], o2 = n2[r2 - 1], o2 === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (a2 === void 0) return r2 = n2.length, this._cachedIndex = r2, this.copySampleValue_(r2 - 1);
      }
      this._cachedIndex = r2, this.intervalChanged_(r2, o2, a2);
    }
    return this.interpolate_(r2, o2, e17, a2);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e17) {
    let t3 = this.resultBuffer, n2 = this.sampleValues, r2 = this.valueSize, i2 = e17 * r2;
    for (let e18 = 0; e18 !== r2; ++e18) t3[e18] = n2[i2 + e18];
    return t3;
  }
  interpolate_() {
    throw Error(`call to abstract method`);
  }
  [i(365)]() {
  }
}, Fo = class extends Po {
  constructor(e17, t3, n2, r2) {
    let a2 = i;
    super(e17, t3, n2, r2), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this[a2(1009)] = -0, this.DefaultSettings_ = { endingStart: Qe, endingEnd: Qe };
  }
  intervalChanged_(e17, t3, n2) {
    let r2 = this.parameterPositions, i2 = e17 - 2, a2 = e17 + 1, o2 = r2[i2], s2 = r2[a2];
    if (o2 === void 0) switch (this.getSettings_().endingStart) {
      case $e:
        i2 = e17, o2 = 2 * t3 - n2;
        break;
      case et:
        i2 = r2.length - 2, o2 = t3 + r2[i2] - r2[i2 + 1];
        break;
      default:
        i2 = e17, o2 = n2;
    }
    if (s2 === void 0) switch (this.getSettings_().endingEnd) {
      case $e:
        a2 = e17, s2 = 2 * n2 - t3;
        break;
      case et:
        a2 = 1, s2 = n2 + r2[1] - r2[0];
        break;
      default:
        a2 = e17 - 1, s2 = t3;
    }
    let c2 = (n2 - t3) * 0.5, l2 = this.valueSize;
    this._weightPrev = c2 / (t3 - o2), this._weightNext = c2 / (s2 - n2), this._offsetPrev = i2 * l2, this._offsetNext = a2 * l2;
  }
  interpolate_(e17, t3, n2, r2) {
    let a2 = i, o2 = this.resultBuffer, s2 = this.sampleValues, c2 = this[a2(331)], l2 = e17 * c2, u2 = l2 - c2, d2 = this._offsetPrev, f2 = this._offsetNext, p2 = this._weightPrev, m2 = this._weightNext, h2 = (n2 - t3) / (r2 - t3), g2 = h2 * h2, _2 = g2 * h2, v2 = -p2 * _2 + 2 * p2 * g2 - p2 * h2, y2 = (1 + p2) * _2 + (-1.5 - 2 * p2) * g2 + (-0.5 + p2) * h2 + 1, b2 = (-1 - m2) * _2 + (1.5 + m2) * g2 + 0.5 * h2, x2 = m2 * _2 - m2 * g2;
    for (let e18 = 0; e18 !== c2; ++e18) o2[e18] = v2 * s2[d2 + e18] + y2 * s2[u2 + e18] + b2 * s2[l2 + e18] + x2 * s2[f2 + e18];
    return o2;
  }
}, Io = class extends Po {
  constructor(e17, t3, n2, r2) {
    super(e17, t3, n2, r2);
  }
  interpolate_(e17, t3, n2, r2) {
    let i2 = this.resultBuffer, a2 = this.sampleValues, o2 = this.valueSize, s2 = e17 * o2, c2 = s2 - o2, l2 = (n2 - t3) / (r2 - t3), u2 = 1 - l2;
    for (let e18 = 0; e18 !== o2; ++e18) i2[e18] = a2[c2 + e18] * u2 + a2[s2 + e18] * l2;
    return i2;
  }
}, Lo = class extends Po {
  constructor(e17, t3, n2, r2) {
    super(e17, t3, n2, r2);
  }
  interpolate_(e17) {
    let t3 = i;
    return this[t3(784)](e17 - 1);
  }
}, Ro = class extends Po {
  interpolate_(e17, t3, n2, r2) {
    let a2 = i, o2 = this.resultBuffer, s2 = this.sampleValues, c2 = this.valueSize, l2 = e17 * c2, u2 = l2 - c2, d2 = this[a2(528)] || this.DefaultSettings_, f2 = d2[a2(1329)], p2 = d2.outTangents;
    if (!f2 || !p2) {
      let e18 = (n2 - t3) / (r2 - t3), i2 = 1 - e18;
      for (let t4 = 0; t4 !== c2; ++t4) o2[t4] = s2[u2 + t4] * i2 + s2[l2 + t4] * e18;
      return o2;
    }
    let m2 = c2 * 2, h2 = e17 - 1;
    for (let i2 = 0; i2 !== c2; ++i2) {
      let a3 = s2[u2 + i2], c3 = s2[l2 + i2], d3 = h2 * m2 + i2 * 2, g2 = p2[d3], _2 = p2[d3 + 1], v2 = e17 * m2 + i2 * 2, y2 = f2[v2], b2 = f2[v2 + 1], x2 = (n2 - t3) / (r2 - t3), S2, C2, w2, T2, E2;
      for (let e18 = 0; e18 < 8; e18++) {
        S2 = x2 * x2, C2 = S2 * x2, w2 = 1 - x2, T2 = w2 * w2, E2 = T2 * w2;
        let e19 = E2 * t3 + 3 * T2 * x2 * g2 + 3 * w2 * S2 * y2 + C2 * r2 - n2;
        if (Math.abs(e19) < 1e-10) break;
        let i3 = 3 * T2 * (g2 - t3) + 6 * w2 * x2 * (y2 - g2) + 3 * S2 * (r2 - y2);
        if (Math.abs(i3) < 1e-10) break;
        x2 -= e19 / i3, x2 = Math.max(0, Math.min(1, x2));
      }
      o2[i2] = E2 * a3 + 3 * T2 * x2 * _2 + 3 * w2 * S2 * b2 + C2 * c3;
    }
    return o2;
  }
}, zo = class {
  constructor(e17, t3, n2, r2) {
    let a2 = i;
    if (e17 === void 0) throw Error(`THREE.KeyframeTrack: track name is undefined`);
    if (t3 === void 0 || t3.length === 0) throw Error(`THREE.KeyframeTrack: no keyframes in track named ` + e17);
    this.name = e17, this.times = Ao(t3, this.TimeBufferType), this.values = Ao(n2, this[a2(1198)]), this[a2(752)](r2 || this[a2(1031)]);
  }
  static [i(497)](e17) {
    let t3 = i, n2 = e17[t3(1178)], r2;
    if (n2.toJSON !== this.toJSON) r2 = n2.toJSON(e17);
    else {
      r2 = { name: e17[t3(1301)], times: Ao(e17.times, Array), values: Ao(e17.values, Array) };
      let n3 = e17.getInterpolation();
      n3 !== e17.DefaultInterpolation && (r2.interpolation = n3);
    }
    return r2.type = e17.ValueTypeName, r2;
  }
  InterpolantFactoryMethodDiscrete(e17) {
    let t3 = i;
    return new Lo(this.times, this[t3(1151)], this.getValueSize(), e17);
  }
  InterpolantFactoryMethodLinear(e17) {
    let t3 = i;
    return new Io(this.times, this.values, this[t3(212)](), e17);
  }
  [i(843)](e17) {
    return new Fo(this.times, this.values, this.getValueSize(), e17);
  }
  InterpolantFactoryMethodBezier(e17) {
    let t3 = i, n2 = new Ro(this[t3(1220)], this[t3(1151)], this.getValueSize(), e17);
    return this[t3(528)] && (n2.settings = this[t3(528)]), n2;
  }
  setInterpolation(e17) {
    let t3 = i, n2;
    switch (e17) {
      case Je:
        n2 = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ye:
        n2 = this.InterpolantFactoryMethodLinear;
        break;
      case Xe:
        n2 = this.InterpolantFactoryMethodSmooth;
        break;
      case Ze:
        n2 = this.InterpolantFactoryMethodBezier;
        break;
    }
    if (n2 === void 0) {
      let n3 = `unsupported interpolation for ` + this.ValueTypeName + t3(1407) + this.name;
      if (this.createInterpolant === void 0) if (e17 !== this.DefaultInterpolation) this[t3(752)](this.DefaultInterpolation);
      else throw Error(n3);
      return z(`KeyframeTrack:`, n3), this;
    }
    return this.createInterpolant = n2, this;
  }
  getInterpolation() {
    let e17 = i;
    switch (this.createInterpolant) {
      case this[e17(1335)]:
        return Je;
      case this.InterpolantFactoryMethodLinear:
        return Ye;
      case this.InterpolantFactoryMethodSmooth:
        return Xe;
      case this.InterpolantFactoryMethodBezier:
        return Ze;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e17) {
    if (e17 !== 0) {
      let t3 = this.times;
      for (let n2 = 0, r2 = t3.length; n2 !== r2; ++n2) t3[n2] += e17;
    }
    return this;
  }
  scale(e17) {
    if (e17 !== 1) {
      let t3 = this.times;
      for (let n2 = 0, r2 = t3.length; n2 !== r2; ++n2) t3[n2] *= e17;
    }
    return this;
  }
  trim(e17, t3) {
    let n2 = i, r2 = this.times, a2 = r2[n2(660)], o2 = 0, s2 = a2 - 1;
    for (; o2 !== a2 && r2[o2] < e17; ) ++o2;
    for (; s2 !== -1 && r2[s2] > t3; ) --s2;
    if (++s2, o2 !== 0 || s2 !== a2) {
      o2 >= s2 && (s2 = Math[n2(1023)](s2, 1), o2 = s2 - 1);
      let e18 = this.getValueSize();
      this.times = r2.slice(o2, s2), this.values = this.values.slice(o2 * e18, s2 * e18);
    }
    return this;
  }
  validate() {
    let e17 = i, t3 = true, n2 = this.getValueSize();
    n2 - Math[e17(425)](n2) !== 0 && (B(`KeyframeTrack: Invalid value size in track.`, this), t3 = false);
    let r2 = this[e17(1220)], a2 = this.values, o2 = r2.length;
    o2 === 0 && (B(e17(588), this), t3 = false);
    let s2 = null;
    for (let n3 = 0; n3 !== o2; n3++) {
      let i2 = r2[n3];
      if (typeof i2 == `number` && isNaN(i2)) {
        B(`KeyframeTrack: Time is not a valid number.`, this, n3, i2), t3 = false;
        break;
      }
      if (s2 !== null && s2 > i2) {
        B(e17(1475), this, n3, i2, s2), t3 = false;
        break;
      }
      s2 = i2;
    }
    if (a2 !== void 0 && ft(a2)) for (let n3 = 0, r3 = a2[e17(660)]; n3 !== r3; ++n3) {
      let e18 = a2[n3];
      if (isNaN(e18)) {
        B(`KeyframeTrack: Value is not a valid number.`, this, n3, e18), t3 = false;
        break;
      }
    }
    return t3;
  }
  optimize() {
    let e17 = i, t3 = this.times.slice(), n2 = this.values.slice(), r2 = this.getValueSize(), a2 = this.getInterpolation() === Xe, o2 = t3[e17(660)] - 1, s2 = 1;
    for (let e18 = 1; e18 < o2; ++e18) {
      let i2 = false, o3 = t3[e18];
      if (o3 !== t3[e18 + 1] && (e18 !== 1 || o3 !== t3[0])) if (a2) i2 = true;
      else {
        let t4 = e18 * r2, a3 = t4 - r2, o4 = t4 + r2;
        for (let e19 = 0; e19 !== r2; ++e19) {
          let r3 = n2[t4 + e19];
          if (r3 !== n2[a3 + e19] || r3 !== n2[o4 + e19]) {
            i2 = true;
            break;
          }
        }
      }
      if (i2) {
        if (e18 !== s2) {
          t3[s2] = t3[e18];
          let i3 = e18 * r2, a3 = s2 * r2;
          for (let e19 = 0; e19 !== r2; ++e19) n2[a3 + e19] = n2[i3 + e19];
        }
        ++s2;
      }
    }
    if (o2 > 0) {
      t3[s2] = t3[o2];
      for (let e18 = o2 * r2, t4 = s2 * r2, i2 = 0; i2 !== r2; ++i2) n2[t4 + i2] = n2[e18 + i2];
      ++s2;
    }
    return s2 === t3.length ? (this.times = t3, this[e17(1151)] = n2) : (this.times = t3.slice(0, s2), this.values = n2.slice(0, s2 * r2)), this;
  }
  clone() {
    let e17 = i, t3 = this.times.slice(), n2 = this[e17(1151)].slice(), r2 = this.constructor, a2 = new r2(this[e17(1301)], t3, n2);
    return a2[e17(484)] = this.createInterpolant, a2;
  }
};
zo.prototype.ValueTypeName = ``, zo.prototype[i(1032)] = Float32Array, zo.prototype.ValueBufferType = Float32Array, zo[i(688)].DefaultInterpolation = Ye;
var Bo = class extends zo {
  constructor(e17, t3, n2) {
    super(e17, t3, n2);
  }
};
Bo.prototype.ValueTypeName = `bool`, Bo.prototype.ValueBufferType = Array, Bo.prototype[i(1031)] = Je, Bo[i(688)].InterpolantFactoryMethodLinear = void 0, Bo.prototype.InterpolantFactoryMethodSmooth = void 0;
var Vo = class extends zo {
  constructor(e17, t3, n2, r2) {
    super(e17, t3, n2, r2);
  }
};
Vo.prototype.ValueTypeName = `color`;
var Ho = class extends zo {
  constructor(e17, t3, n2, r2) {
    super(e17, t3, n2, r2);
  }
};
Ho.prototype.ValueTypeName = `number`;
var Uo = class extends Po {
  constructor(e17, t3, n2, r2) {
    super(e17, t3, n2, r2);
  }
  interpolate_(e17, t3, n2, r2) {
    let i2 = this.resultBuffer, a2 = this.sampleValues, o2 = this.valueSize, s2 = (n2 - t3) / (r2 - t3), c2 = e17 * o2;
    for (let e18 = c2 + o2; c2 !== e18; c2 += 4) Jt.slerpFlat(i2, 0, a2, c2 - o2, a2, c2, s2);
    return i2;
  }
}, Wo = class extends zo {
  constructor(e17, t3, n2, r2) {
    super(e17, t3, n2, r2);
  }
  InterpolantFactoryMethodLinear(e17) {
    return new Uo(this.times, this.values, this.getValueSize(), e17);
  }
};
Wo[i(688)].ValueTypeName = `quaternion`, Wo[i(688)][i(843)] = void 0;
var Go = class extends zo {
  constructor(e17, t3, n2) {
    super(e17, t3, n2);
  }
};
Go.prototype.ValueTypeName = `string`, Go.prototype[i(1198)] = Array, Go.prototype.DefaultInterpolation = Je, Go.prototype.InterpolantFactoryMethodLinear = void 0, Go[i(688)].InterpolantFactoryMethodSmooth = void 0;
var Ko = class extends zo {
  constructor(e17, t3, n2, r2) {
    super(e17, t3, n2, r2);
  }
};
Ko.prototype.ValueTypeName = `vector`;
var qo = class {
  constructor(e17 = ``, t3 = -1, n2 = [], r2 = tt) {
    let a2 = i;
    this.name = e17, this[a2(1052)] = n2, this.duration = t3, this.blendMode = r2, this.uuid = Dt(), this.userData = {}, this[a2(965)] < 0 && this.resetDuration();
  }
  static parse(e17) {
    let t3 = i, n2 = [], r2 = e17.tracks, a2 = 1 / (e17.fps || 1);
    for (let e18 = 0, i2 = r2[t3(660)]; e18 !== i2; ++e18) n2.push(Yo(r2[e18]).scale(a2));
    let o2 = new this(e17.name, e17.duration, n2, e17[t3(242)]);
    return o2[t3(797)] = e17[t3(797)], o2[t3(727)] = JSON.parse(e17.userData || `{}`), o2;
  }
  static toJSON(e17) {
    let t3 = [], n2 = e17.tracks, r2 = { name: e17.name, duration: e17.duration, tracks: t3, uuid: e17.uuid, blendMode: e17.blendMode, userData: JSON.stringify(e17.userData) };
    for (let e18 = 0, r3 = n2.length; e18 !== r3; ++e18) t3.push(zo.toJSON(n2[e18]));
    return r2;
  }
  static CreateFromMorphTargetSequence(e17, t3, n2, r2) {
    let a2 = i, o2 = t3[a2(660)], s2 = [];
    for (let e18 = 0; e18 < o2; e18++) {
      let i2 = [], c2 = [];
      i2.push((e18 + o2 - 1) % o2, e18, (e18 + 1) % o2), c2.push(0, 1, 0);
      let l2 = jo(i2);
      i2 = Mo(i2, 1, l2), c2 = Mo(c2, 1, l2), !r2 && i2[0] === 0 && (i2.push(o2), c2.push(c2[0])), s2.push(new Ho(a2(293) + t3[e18].name + `]`, i2, c2).scale(1 / n2));
    }
    return new this(e17, -1, s2);
  }
  static findByName(e17, t3) {
    let n2 = i, r2 = e17;
    if (!Array.isArray(e17)) {
      let t4 = e17;
      r2 = t4[n2(641)] && t4.geometry.animations || t4.animations;
    }
    for (let e18 = 0; e18 < r2.length; e18++) if (r2[e18][n2(1301)] === t3) return r2[e18];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e17, t3, n2) {
    let r2 = i, a2 = {}, o2 = /^([\w-]*?)([\d]+)$/;
    for (let t4 = 0, n3 = e17.length; t4 < n3; t4++) {
      let n4 = e17[t4], i2 = n4.name.match(o2);
      if (i2 && i2[r2(660)] > 1) {
        let e18 = i2[1], t5 = a2[e18];
        t5 || (a2[e18] = t5 = []), t5.push(n4);
      }
    }
    let s2 = [];
    for (let e18 in a2) s2.push(this.CreateFromMorphTargetSequence(e18, a2[e18], t3, n2));
    return s2;
  }
  static parseAnimation(e17, t3) {
    let n2 = i;
    if (z(`AnimationClip: parseAnimation() is deprecated and will be removed with r185`), !e17) return B(`AnimationClip: No animation in JSONLoader data.`), null;
    let r2 = function(e18, t4, n3, r3, i2) {
      if (n3.length !== 0) {
        let a3 = [], o3 = [];
        No(n3, a3, o3, r3), a3.length !== 0 && i2.push(new e18(t4, a3, o3));
      }
    }, a2 = [], o2 = e17.name || `default`, s2 = e17.fps || 30, c2 = e17.blendMode, l2 = e17.length || -1, u2 = e17.hierarchy || [];
    for (let e18 = 0; e18 < u2.length; e18++) {
      let i2 = u2[e18][n2(928)];
      if (!(!i2 || i2.length === 0)) if (i2[0].morphTargets) {
        let e19 = {}, t4;
        for (t4 = 0; t4 < i2.length; t4++) if (i2[t4][n2(1216)]) for (let r3 = 0; r3 < i2[t4].morphTargets[n2(660)]; r3++) e19[i2[t4].morphTargets[r3]] = -1;
        for (let r3 in e19) {
          let e20 = [], o3 = [];
          for (let a3 = 0; a3 !== i2[t4].morphTargets.length; ++a3) {
            let a4 = i2[t4];
            e20.push(a4.time), o3.push(+(a4[n2(666)] === r3));
          }
          a2.push(new Ho(`.morphTargetInfluence[` + r3 + `]`, e20, o3));
        }
        l2 = e19[n2(660)] * s2;
      } else {
        let o3 = `.bones[` + t3[e18][n2(1301)] + `]`;
        r2(Ko, o3 + `.position`, i2, `pos`, a2), r2(Wo, o3 + `.quaternion`, i2, `rot`, a2), r2(Ko, o3 + `.scale`, i2, `scl`, a2);
      }
    }
    return a2.length === 0 ? null : new this(o2, l2, a2, c2);
  }
  resetDuration() {
    let e17 = i, t3 = this[e17(1052)], n2 = 0;
    for (let e18 = 0, r2 = t3.length; e18 !== r2; ++e18) {
      let t4 = this.tracks[e18];
      n2 = Math.max(n2, t4.times[t4.times.length - 1]);
    }
    return this.duration = n2, this;
  }
  [i(850)]() {
    let e17 = i;
    for (let t3 = 0; t3 < this.tracks.length; t3++) this[e17(1052)][t3].trim(0, this[e17(965)]);
    return this;
  }
  validate() {
    let e17 = true;
    for (let t3 = 0; t3 < this.tracks.length; t3++) e17 && (e17 = this.tracks[t3].validate());
    return e17;
  }
  optimize() {
    let e17 = i;
    for (let t3 = 0; t3 < this[e17(1052)].length; t3++) this.tracks[t3][e17(1123)]();
    return this;
  }
  clone() {
    let e17 = i, t3 = [];
    for (let n3 = 0; n3 < this.tracks.length; n3++) t3[e17(1184)](this.tracks[n3][e17(443)]());
    let n2 = new this.constructor(this.name, this[e17(965)], t3, this[e17(242)]);
    return n2[e17(727)] = JSON.parse(JSON.stringify(this.userData)), n2;
  }
  [i(497)]() {
    return this.constructor.toJSON(this);
  }
};
function Jo(e17) {
  let t3 = i;
  switch (e17[t3(220)]()) {
    case t3(1326):
    case t3(476):
    case `float`:
    case `number`:
    case t3(351):
      return Ho;
    case t3(770):
    case `vector2`:
    case `vector3`:
    case t3(493):
      return Ko;
    case t3(1119):
      return Vo;
    case `quaternion`:
      return Wo;
    case `bool`:
    case `boolean`:
      return Bo;
    case `string`:
      return Go;
  }
  throw Error(`THREE.KeyframeTrack: Unsupported typeName: ` + e17);
}
function Yo(e17) {
  let t3 = i;
  if (e17.type === void 0) throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);
  let n2 = Jo(e17.type);
  if (e17.times === void 0) {
    let t4 = [], n3 = [];
    No(e17.keys, t4, n3, `value`), e17.times = t4, e17.values = n3;
  }
  return n2.parse === void 0 ? new n2(e17[t3(1301)], e17.times, e17[t3(1151)], e17.interpolation) : n2.parse(e17);
}
var Xo = { enabled: false, files: {}, add: function(e17, t3) {
  this.enabled !== false && (Zo(e17) || (this.files[e17] = t3));
}, get: function(e17) {
  let t3 = i;
  if (this.enabled !== false && !Zo(e17)) return this[t3(829)][e17];
}, remove: function(e17) {
  delete this.files[e17];
}, clear: function() {
  this.files = {};
} };
function Zo(e17) {
  let t3 = i;
  try {
    let n2 = e17[t3(883)](e17.indexOf(`:`) + 1);
    return new URL(n2).protocol === `blob:`;
  } catch {
    return false;
  }
}
var Qo = class {
  constructor(e17, t3, n2) {
    let r2 = i, a2 = this, o2 = false, s2 = 0, c2 = 0, l2, u2 = [];
    this.onStart = void 0, this.onLoad = e17, this.onProgress = t3, this.onError = n2, this._abortController = null, this.itemStart = function(e18) {
      let t4 = $;
      c2++, o2 === false && a2.onStart !== void 0 && a2[t4(1472)](e18, s2, c2), o2 = true;
    }, this.itemEnd = function(e18) {
      s2++, a2.onProgress !== void 0 && a2.onProgress(e18, s2, c2), s2 === c2 && (o2 = false, a2.onLoad !== void 0 && a2.onLoad());
    }, this.itemError = function(e18) {
      a2.onError !== void 0 && a2.onError(e18);
    }, this.resolveURL = function(e18) {
      return l2 ? l2(e18) : e18;
    }, this.setURLModifier = function(e18) {
      return l2 = e18, this;
    }, this.addHandler = function(e18, t4) {
      return u2.push(e18, t4), this;
    }, this.removeHandler = function(e18) {
      let t4 = u2.indexOf(e18);
      return t4 !== -1 && u2.splice(t4, 2), this;
    }, this.getHandler = function(e18) {
      let t4 = $;
      for (let n3 = 0, r3 = u2.length; n3 < r3; n3 += 2) {
        let r4 = u2[n3], i2 = u2[n3 + 1];
        if (r4.global && (r4[t4(558)] = 0), r4.test(e18)) return i2;
      }
      return null;
    }, this[r2(333)] = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    let e17 = i;
    return this[e17(587)] || (this._abortController = new AbortController()), this._abortController;
  }
}, $o = new Qo(), es = class {
  constructor(e17) {
    let t3 = i;
    this.manager = e17 === void 0 ? $o : e17, this.crossOrigin = `anonymous`, this.withCredentials = false, this.path = ``, this.resourcePath = ``, this[t3(249)] = {}, typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, { detail: this }));
  }
  [i(1408)]() {
  }
  loadAsync(e17, t3) {
    let n2 = this;
    return new Promise(function(r2, i2) {
      n2.load(e17, r2, t3, i2);
    });
  }
  parse() {
  }
  setCrossOrigin(e17) {
    let t3 = i;
    return this[t3(285)] = e17, this;
  }
  setWithCredentials(e17) {
    return this.withCredentials = e17, this;
  }
  setPath(e17) {
    return this.path = e17, this;
  }
  setResourcePath(e17) {
    return this.resourcePath = e17, this;
  }
  setRequestHeader(e17) {
    return this.requestHeader = e17, this;
  }
  abort() {
    return this;
  }
};
es.DEFAULT_MATERIAL_NAME = `__DEFAULT`;
var ts = {}, ns = class extends Error {
  constructor(e17, t3) {
    let n2 = i;
    super(e17), this[n2(1029)] = t3;
  }
}, rs = class extends es {
  constructor(e17) {
    let t3 = i;
    super(e17), this[t3(562)] = ``, this.responseType = ``, this._abortController = new AbortController();
  }
  [i(1408)](e17, t3, n2, r2) {
    let a2 = i;
    e17 === void 0 && (e17 = ``), this.path !== void 0 && (e17 = this.path + e17), e17 = this.manager.resolveURL(e17);
    let o2 = Xo.get(`file:` + e17);
    if (o2 !== void 0) {
      this.manager.itemStart(e17), setTimeout(() => {
        t3 && t3(o2), this.manager.itemEnd(e17);
      }, 0);
      return;
    }
    if (ts[e17] !== void 0) {
      ts[e17].push({ onLoad: t3, onProgress: n2, onError: r2 });
      return;
    }
    ts[e17] = [], ts[e17][a2(1184)]({ onLoad: t3, onProgress: n2, onError: r2 });
    let s2 = new Request(e17, { headers: new Headers(this[a2(249)]), credentials: this.withCredentials ? a2(1141) : `same-origin`, signal: typeof AbortSignal.any == `function` ? AbortSignal.any([this[a2(587)][a2(1267)], this.manager.abortController.signal]) : this._abortController.signal }), c2 = this.mimeType, l2 = this.responseType;
    fetch(s2).then((t4) => {
      let n3 = a2;
      if (t4.status === 200 || t4.status === 0) {
        if (t4.status === 0 && z(`FileLoader: HTTP Status 0 received.`), typeof ReadableStream > `u` || t4.body === void 0 || t4.body.getReader === void 0) return t4;
        let r3 = ts[e17], i2 = t4[n3(521)].getReader(), a3 = t4[n3(586)].get(`X-File-Size`) || t4.headers.get(`Content-Length`), o3 = a3 ? parseInt(a3) : 0, s3 = o3 !== 0, c3 = 0, l3 = new ReadableStream({ start(e18) {
          t5();
          function t5() {
            i2[$(1129)]().then(({ done: n4, value: i3 }) => {
              if (n4) e18.close();
              else {
                c3 += i3.byteLength;
                let n5 = new ProgressEvent(`progress`, { lengthComputable: s3, loaded: c3, total: o3 });
                for (let e19 = 0, t6 = r3.length; e19 < t6; e19++) {
                  let t7 = r3[e19];
                  t7.onProgress && t7.onProgress(n5);
                }
                e18.enqueue(i3), t5();
              }
            }, (t6) => {
              e18.error(t6);
            });
          }
        } });
        return new Response(l3);
      } else throw new ns(n3(536) + t4.url + `" responded with ` + t4.status + `: ` + t4.statusText, t4);
    }).then((e18) => {
      let t4 = a2;
      switch (l2) {
        case `arraybuffer`:
          return e18.arrayBuffer();
        case `blob`:
          return e18.blob();
        case `document`:
          return e18[t4(422)]().then((e19) => new DOMParser()[t4(317)](e19, c2));
        case t4(524):
          return e18.json();
        default:
          if (c2 === ``) return e18.text();
          {
            let t5 = /charset="?([^;"\s]*)"?/i.exec(c2), n3 = t5 && t5[1] ? t5[1].toLowerCase() : void 0, r3 = new TextDecoder(n3);
            return e18.arrayBuffer().then((e19) => r3.decode(e19));
          }
      }
    }).then((t4) => {
      let n3 = a2;
      Xo.add(`file:` + e17, t4);
      let r3 = ts[e17];
      delete ts[e17];
      for (let e18 = 0, i2 = r3.length; e18 < i2; e18++) {
        let i3 = r3[e18];
        i3[n3(662)] && i3.onLoad(t4);
      }
    })[a2(571)]((t4) => {
      let n3 = ts[e17];
      if (n3 === void 0) throw this.manager.itemError(e17), t4;
      delete ts[e17];
      for (let e18 = 0, r3 = n3.length; e18 < r3; e18++) {
        let r4 = n3[e18];
        r4.onError && r4.onError(t4);
      }
      this.manager.itemError(e17);
    }).finally(() => {
      this.manager.itemEnd(e17);
    }), this.manager.itemStart(e17);
  }
  setResponseType(e17) {
    return this.responseType = e17, this;
  }
  setMimeType(e17) {
    return this.mimeType = e17, this;
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}, is = /* @__PURE__ */ new WeakMap(), as = class extends es {
  constructor(e17) {
    super(e17);
  }
  load(e17, t3, n2, r2) {
    let a2 = i;
    this.path !== void 0 && (e17 = this.path + e17), e17 = this.manager.resolveURL(e17);
    let o2 = this, s2 = Xo.get(`image:` + e17);
    if (s2 !== void 0) {
      if (s2.complete === true) o2.manager[a2(509)](e17), setTimeout(function() {
        let n3 = a2;
        t3 && t3(s2), o2.manager[n3(1419)](e17);
      }, 0);
      else {
        let e18 = is[a2(859)](s2);
        e18 === void 0 && (e18 = [], is[a2(1139)](s2, e18)), e18.push({ onLoad: t3, onError: r2 });
      }
      return s2;
    }
    let c2 = pt(`img`);
    function l2() {
      let n3 = a2;
      d2(), t3 && t3(this);
      let r3 = is.get(this) || [];
      for (let e18 = 0; e18 < r3.length; e18++) {
        let t4 = r3[e18];
        t4.onLoad && t4.onLoad(this);
      }
      is[n3(905)](this), o2.manager.itemEnd(e17);
    }
    function u2(t4) {
      let n3 = a2;
      d2(), r2 && r2(t4), Xo.remove(`image:` + e17);
      let i2 = is.get(this) || [];
      for (let e18 = 0; e18 < i2.length; e18++) {
        let n4 = i2[e18];
        n4.onError && n4.onError(t4);
      }
      is.delete(this), o2.manager.itemError(e17), o2[n3(526)].itemEnd(e17);
    }
    function d2() {
      c2[a2(806)](`load`, l2, false), c2.removeEventListener(`error`, u2, false);
    }
    return c2.addEventListener(`load`, l2, false), c2.addEventListener(a2(306), u2, false), e17.slice(0, 5) !== `data:` && this.crossOrigin !== void 0 && (c2.crossOrigin = this.crossOrigin), Xo.add(`image:` + e17, c2), o2.manager.itemStart(e17), c2[a2(503)] = e17, c2;
  }
}, os = class extends es {
  constructor(e17) {
    super(e17);
  }
  load(e17, t3, n2, r2) {
    let i2 = this, a2 = new ji(), o2 = new rs(this.manager);
    return o2.setResponseType(`arraybuffer`), o2.setRequestHeader(this.requestHeader), o2.setPath(this.path), o2.setWithCredentials(i2.withCredentials), o2.load(e17, function(e18) {
      let n3 = $, o3;
      try {
        o3 = i2.parse(e18);
      } catch (e19) {
        r2 === void 0 ? B(e19) : r2(e19);
        return;
      }
      o3.image === void 0 ? o3.data !== void 0 && (a2.image.width = o3.width, a2.image.height = o3.height, a2.image.data = o3[n3(1304)]) : a2.image = o3.image, a2[n3(286)] = o3.wrapS === void 0 ? v : o3.wrapS, a2.wrapT = o3.wrapT === void 0 ? v : o3.wrapT, a2.magFilter = o3.magFilter === void 0 ? C : o3.magFilter, a2.minFilter = o3[n3(486)] === void 0 ? C : o3[n3(486)], a2.anisotropy = o3.anisotropy === void 0 ? 1 : o3[n3(1091)], o3.colorSpace !== void 0 && (a2[n3(541)] = o3[n3(541)]), o3.flipY !== void 0 && (a2.flipY = o3.flipY), o3.format !== void 0 && (a2.format = o3.format), o3.type !== void 0 && (a2.type = o3[n3(1112)]), o3.mipmaps !== void 0 && (a2.mipmaps = o3.mipmaps, a2[n3(486)] = 1008), o3.mipmapCount === 1 && (a2.minFilter = 1006), o3.generateMipmaps !== void 0 && (a2.generateMipmaps = o3[n3(1142)]), a2.needsUpdate = true, t3 && t3(a2, o3);
    }, n2, r2), a2;
  }
}, ss = class extends es {
  constructor(e17) {
    super(e17);
  }
  load(e17, t3, n2, r2) {
    let a2 = i, o2 = new dn(), s2 = new as(this[a2(526)]);
    return s2.setCrossOrigin(this.crossOrigin), s2[a2(809)](this[a2(252)]), s2.load(e17, function(e18) {
      o2.image = e18, o2.needsUpdate = true, t3 !== void 0 && t3(o2);
    }, n2, r2), o2;
  }
}, cs = class extends Hn {
  constructor(e17, t3 = 1) {
    let n2 = i;
    super(), this.isLight = true, this.type = n2(444), this[n2(1119)] = new Y(e17), this.intensity = t3;
  }
  dispose() {
    this.dispatchEvent({ type: `dispose` });
  }
  copy(e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this.color[n2(1250)](e17.color), this.intensity = e17.intensity, this;
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return n2[t3(199)].color = this.color[t3(1361)](), n2[t3(199)][t3(403)] = this.intensity, n2;
  }
}, ls = class extends cs {
  constructor(e17, t3, n2) {
    let r2 = i;
    super(e17, n2), this.isHemisphereLight = true, this.type = `HemisphereLight`, this.position[r2(1250)](Hn.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Y(t3);
  }
  copy(e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this.groundColor.copy(e17[n2(847)]), this;
  }
  toJSON(e17) {
    let t3 = super.toJSON(e17);
    return t3.object.groundColor = this.groundColor.getHex(), t3;
  }
}, us = new J(), ds = new W(), fs = new W(), ps = class {
  constructor(e17) {
    let t3 = i;
    this.camera = e17, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new U(512, 512), this.mapType = E, this.map = null, this[t3(732)] = null, this[t3(307)] = new J(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Zi(), this._frameExtents = new U(1, 1), this[t3(574)] = 1, this._viewports = [new q(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e17) {
    let t3 = i, n2 = this.camera, r2 = this.matrix;
    ds[t3(1328)](e17.matrixWorld), n2.position.copy(ds), fs.setFromMatrixPosition(e17.target.matrixWorld), n2.lookAt(fs), n2.updateMatrixWorld(), us.multiplyMatrices(n2.projectionMatrix, n2.matrixWorldInverse), this._frustum.setFromProjectionMatrix(us, n2.coordinateSystem, n2.reversedDepth), n2.coordinateSystem === 2001 || n2.reversedDepth ? r2.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1) : r2[t3(1139)](0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), r2.multiply(us);
  }
  getViewport(e17) {
    return this._viewports[e17];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e17) {
    let t3 = i;
    return this.camera = e17.camera.clone(), this[t3(403)] = e17.intensity, this.bias = e17.bias, this.radius = e17[t3(816)], this.autoUpdate = e17.autoUpdate, this[t3(318)] = e17[t3(318)], this.normalBias = e17.normalBias, this.blurSamples = e17.blurSamples, this.mapSize.copy(e17.mapSize), this.biasNode = e17[t3(255)], this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let e17 = i, t3 = {};
    return this[e17(403)] !== 1 && (t3[e17(403)] = this.intensity), this.bias !== 0 && (t3[e17(986)] = this.bias), this.normalBias !== 0 && (t3[e17(1197)] = this.normalBias), this[e17(816)] !== 1 && (t3.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t3.mapSize = this.mapSize.toArray()), t3[e17(971)] = this.camera.toJSON(false).object, delete t3.camera.matrix, t3;
  }
}, ms = new W(), hs = new Jt(), gs = new W(), _s = class extends Hn {
  constructor() {
    super(), this.isCamera = true, this.type = `Camera`, this.matrixWorldInverse = new J(), this.projectionMatrix = new J(), this.projectionMatrixInverse = new J(), this.coordinateSystem = ut, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this.matrixWorldInverse[n2(1250)](e17.matrixWorldInverse), this[n2(490)].copy(e17.projectionMatrix), this.projectionMatrixInverse.copy(e17.projectionMatrixInverse), this.coordinateSystem = e17.coordinateSystem, this;
  }
  getWorldDirection(e17) {
    return super[i(642)](e17).negate();
  }
  updateMatrixWorld(e17) {
    let t3 = i;
    super.updateMatrixWorld(e17), this.matrixWorld.decompose(ms, hs, gs), gs.x === 1 && gs.y === 1 && gs.z === 1 ? this.matrixWorldInverse[t3(1250)](this.matrixWorld).invert() : this.matrixWorldInverse.compose(ms, hs, gs.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e17, t3) {
    let n2 = i;
    super.updateWorldMatrix(e17, t3), this[n2(1234)].decompose(ms, hs, gs), gs.x === 1 && gs.y === 1 && gs.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse[n2(1396)](ms, hs, gs.set(1, 1, 1))[n2(995)]();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, vs = new W(), ys = new U(), bs = new U(), xs = class extends _s {
  constructor(e17 = 50, t3 = 1, n2 = 0.1, r2 = 2e3) {
    let a2 = i;
    super(), this[a2(265)] = true, this.type = `PerspectiveCamera`, this[a2(931)] = e17, this.zoom = 1, this.near = n2, this[a2(726)] = r2, this.focus = 10, this[a2(1451)] = t3, this.view = null, this.filmGauge = 35, this[a2(377)] = 0, this.updateProjectionMatrix();
  }
  copy(e17, t3) {
    let n2 = i;
    return super[n2(1250)](e17, t3), this.fov = e17.fov, this.zoom = e17.zoom, this[n2(1474)] = e17.near, this.far = e17.far, this.focus = e17.focus, this.aspect = e17.aspect, this.view = e17.view === null ? null : Object.assign({}, e17.view), this.filmGauge = e17.filmGauge, this.filmOffset = e17.filmOffset, this;
  }
  setFocalLength(e17) {
    let t3 = i, n2 = 0.5 * this.getFilmHeight() / e17;
    this[t3(931)] = Et * 2 * Math[t3(556)](n2), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let e17 = i, t3 = Math.tan(Tt * 0.5 * this[e17(931)]);
    return 0.5 * this.getFilmHeight() / t3;
  }
  getEffectiveFOV() {
    return Et * 2 * Math.atan(Math.tan(Tt * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    let e17 = i;
    return this.filmGauge / Math.max(this[e17(1451)], 1);
  }
  getViewBounds(e17, t3, n2) {
    let r2 = i;
    vs.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t3.set(vs.x, vs.y).multiplyScalar(-e17 / vs.z), vs.set(1, 1, 0.5)[r2(874)](this.projectionMatrixInverse), n2.set(vs.x, vs.y).multiplyScalar(-e17 / vs.z);
  }
  getViewSize(e17, t3) {
    let n2 = i;
    return this.getViewBounds(e17, ys, bs), t3[n2(974)](bs, ys);
  }
  setViewOffset(e17, t3, n2, r2, a2, o2) {
    let s2 = i;
    this.aspect = e17 / t3, this[s2(1284)] === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this[s2(1284)].fullWidth = e17, this.view[s2(210)] = t3, this[s2(1284)].offsetX = n2, this.view.offsetY = r2, this[s2(1284)].width = a2, this.view.height = o2, this.updateProjectionMatrix();
  }
  [i(987)]() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e17 = i, t3 = this.near, n2 = t3 * Math.tan(Tt * 0.5 * this.fov) / this.zoom, r2 = 2 * n2, a2 = this[e17(1451)] * r2, o2 = -0.5 * a2, s2 = this.view;
    if (this.view !== null && this.view[e17(359)]) {
      let e18 = s2.fullWidth, t4 = s2.fullHeight;
      o2 += s2.offsetX * a2 / e18, n2 -= s2.offsetY * r2 / t4, a2 *= s2.width / e18, r2 *= s2.height / t4;
    }
    let c2 = this.filmOffset;
    c2 !== 0 && (o2 += t3 * c2 / this.getFilmWidth()), this.projectionMatrix[e17(638)](o2, o2 + a2, n2, n2 - r2, t3, this[e17(726)], this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return n2.object.fov = this.fov, n2.object.zoom = this.zoom, n2.object[t3(1474)] = this.near, n2.object.far = this[t3(726)], n2.object.focus = this.focus, n2[t3(199)].aspect = this.aspect, this.view !== null && (n2.object.view = Object.assign({}, this.view)), n2.object.filmGauge = this[t3(1394)], n2.object.filmOffset = this[t3(377)], n2;
  }
}, Ss = class extends ps {
  constructor() {
    super(new xs(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(e17) {
    let t3 = i, n2 = this.camera, r2 = Et * 2 * e17.angle * this.focus, a2 = this.mapSize.width / this.mapSize[t3(221)] * this.aspect, o2 = e17.distance || n2.far;
    (r2 !== n2.fov || a2 !== n2.aspect || o2 !== n2[t3(726)]) && (n2.fov = r2, n2.aspect = a2, n2.far = o2, n2[t3(1210)]()), super.updateMatrices(e17);
  }
  copy(e17) {
    return super.copy(e17), this.focus = e17.focus, this;
  }
}, Cs = class extends cs {
  constructor(e17, t3, n2 = 0, r2 = Math.PI / 3, a2 = 0, o2 = 2) {
    let s2 = i;
    super(e17, t3), this[s2(441)] = true, this[s2(1112)] = s2(404), this.position.copy(Hn[s2(362)]), this.updateMatrix(), this[s2(1149)] = new Hn(), this.distance = n2, this[s2(1191)] = r2, this.penumbra = a2, this.decay = o2, this.map = null, this.shadow = new Ss();
  }
  get [i(1208)]() {
    return this.intensity * Math.PI;
  }
  set [i(1208)](e17) {
    this.intensity = e17 / Math.PI;
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this[n2(654)] = e17.distance, this[n2(1191)] = e17.angle, this.penumbra = e17.penumbra, this.decay = e17[n2(1238)], this.target = e17.target.clone(), this[n2(579)] = e17.map, this.shadow = e17.shadow.clone(), this;
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return n2.object.distance = this.distance, n2.object.angle = this.angle, n2[t3(199)].decay = this[t3(1238)], n2.object[t3(363)] = this.penumbra, n2.object.target = this[t3(1149)].uuid, this.map && this.map[t3(1055)] && (n2.object.map = this.map[t3(497)](e17).uuid), n2[t3(199)][t3(1271)] = this.shadow[t3(497)](), n2;
  }
}, ws = class extends ps {
  constructor() {
    super(new xs(90, 1, 0.5, 500)), this.isPointLightShadow = true;
  }
}, Ts = class extends cs {
  constructor(e17, t3, n2 = 0, r2 = 2) {
    let a2 = i;
    super(e17, t3), this.isPointLight = true, this.type = `PointLight`, this[a2(654)] = n2, this[a2(1238)] = r2, this.shadow = new ws();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set [i(1208)](e17) {
    this.intensity = e17 / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e17, t3) {
    let n2 = i;
    return super[n2(1250)](e17, t3), this.distance = e17[n2(654)], this.decay = e17.decay, this[n2(1271)] = e17.shadow[n2(443)](), this;
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return n2.object[t3(654)] = this.distance, n2.object.decay = this.decay, n2.object.shadow = this.shadow.toJSON(), n2;
  }
}, Es = class extends _s {
  constructor(e17 = -1, t3 = 1, n2 = 1, r2 = -1, a2 = 0.1, o2 = 2e3) {
    let s2 = i;
    super(), this[s2(619)] = true, this.type = `OrthographicCamera`, this.zoom = 1, this.view = null, this.left = e17, this.right = t3, this.top = n2, this.bottom = r2, this.near = a2, this.far = o2, this.updateProjectionMatrix();
  }
  copy(e17, t3) {
    let n2 = i;
    return super.copy(e17, t3), this.left = e17.left, this.right = e17[n2(908)], this[n2(374)] = e17.top, this[n2(1235)] = e17.bottom, this.near = e17.near, this.far = e17.far, this.zoom = e17.zoom, this.view = e17.view === null ? null : Object.assign({}, e17.view), this;
  }
  setViewOffset(e17, t3, n2, r2, a2, o2) {
    let s2 = i;
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this[s2(1284)].fullWidth = e17, this.view.fullHeight = t3, this.view.offsetX = n2, this.view.offsetY = r2, this.view.width = a2, this.view.height = o2, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    let e17 = i;
    this.view !== null && (this[e17(1284)].enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let e17 = i, t3 = (this[e17(908)] - this[e17(692)]) / (2 * this.zoom), n2 = (this[e17(374)] - this.bottom) / (2 * this.zoom), r2 = (this.right + this.left) / 2, a2 = (this.top + this.bottom) / 2, o2 = r2 - t3, s2 = r2 + t3, c2 = a2 + n2, l2 = a2 - n2;
    if (this.view !== null && this.view.enabled) {
      let t4 = (this.right - this.left) / this[e17(1284)].fullWidth / this.zoom, n3 = (this[e17(374)] - this.bottom) / this[e17(1284)].fullHeight / this.zoom;
      o2 += t4 * this.view.offsetX, s2 = o2 + t4 * this.view.width, c2 -= n3 * this.view.offsetY, l2 = c2 - n3 * this.view.height;
    }
    this[e17(490)].makeOrthographic(o2, s2, c2, l2, this.near, this.far, this.coordinateSystem, this.reversedDepth), this[e17(548)].copy(this.projectionMatrix).invert();
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return n2[t3(199)].zoom = this.zoom, n2.object.left = this.left, n2.object.right = this.right, n2.object.top = this.top, n2.object.bottom = this[t3(1235)], n2.object.near = this.near, n2[t3(199)].far = this.far, this.view !== null && (n2.object.view = Object[t3(420)]({}, this[t3(1284)])), n2;
  }
}, Ds = class extends ps {
  constructor() {
    super(new Es(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}, Os = class extends cs {
  constructor(e17, t3) {
    let n2 = i;
    super(e17, t3), this[n2(921)] = true, this.type = `DirectionalLight`, this.position.copy(Hn[n2(362)]), this.updateMatrix(), this[n2(1149)] = new Hn(), this.shadow = new Ds();
  }
  dispose() {
    let e17 = i;
    super.dispose(), this[e17(1271)].dispose();
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this[t3(1149)] = e17.target.clone(), this[t3(1271)] = e17[t3(1271)][t3(443)](), this;
  }
  toJSON(e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return n2.object.shadow = this.shadow.toJSON(), n2.object.target = this[t3(1149)].uuid, n2;
  }
}, ks = class extends cs {
  constructor(e17, t3) {
    let n2 = i;
    super(e17, t3), this[n2(633)] = true, this.type = `AmbientLight`;
  }
}, As = class extends cs {
  constructor(e17, t3, n2 = 10, r2 = 10) {
    let a2 = i;
    super(e17, t3), this.isRectAreaLight = true, this[a2(1112)] = a2(1435), this.width = n2, this[a2(221)] = r2;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set [i(1208)](e17) {
    let t3 = i;
    this.intensity = e17 / (this[t3(1505)] * this[t3(221)] * Math.PI);
  }
  copy(e17) {
    let t3 = i;
    return super.copy(e17), this.width = e17[t3(1505)], this.height = e17.height, this;
  }
  [i(497)](e17) {
    let t3 = i, n2 = super.toJSON(e17);
    return n2.object[t3(1505)] = this.width, n2[t3(199)][t3(221)] = this.height, n2;
  }
}, js = class {
  static extractUrlBase(e17) {
    let t3 = e17[i(1161)](`/`);
    return t3 === -1 ? `./` : e17.slice(0, t3 + 1);
  }
  static resolveURL(e17, t3) {
    return typeof e17 != `string` || e17 === `` ? `` : (/^https?:\/\//i.test(t3) && /^\//.test(e17) && (t3 = t3.replace(/(^https?:\/\/[^\/]+).*/i, `$1`)), /^(https?:)?\/\//i.test(e17) || /^data:.*,.*$/i.test(e17) || /^blob:.*$/i.test(e17) ? e17 : t3 + e17);
  }
}, Ms = /* @__PURE__ */ new WeakMap(), Ns = class extends es {
  constructor(e17) {
    let t3 = i;
    super(e17), this.isImageBitmapLoader = true, typeof createImageBitmap > `u` && z(`ImageBitmapLoader: createImageBitmap() not supported.`), typeof fetch > `u` && z(`ImageBitmapLoader: fetch() not supported.`), this.options = { premultiplyAlpha: `none` }, this[t3(587)] = new AbortController();
  }
  setOptions(e17) {
    return this.options = e17, this;
  }
  load(e17, t3, n2, r2) {
    let a2 = i;
    e17 === void 0 && (e17 = ``), this.path !== void 0 && (e17 = this.path + e17), e17 = this.manager.resolveURL(e17);
    let o2 = this, s2 = Xo.get(`image-bitmap:` + e17);
    if (s2 !== void 0) {
      if (o2.manager.itemStart(e17), s2.then) {
        s2[a2(1214)]((n3) => {
          Ms[a2(1209)](s2) === true ? (r2 && r2(Ms.get(s2)), o2.manager.itemError(e17), o2.manager.itemEnd(e17)) : (t3 && t3(n3), o2.manager.itemEnd(e17));
        });
        return;
      }
      setTimeout(function() {
        t3 && t3(s2), o2.manager.itemEnd(e17);
      }, 0);
      return;
    }
    let c2 = {};
    c2.credentials = this[a2(285)] === a2(1509) ? `same-origin` : a2(1141), c2.headers = this.requestHeader, c2.signal = typeof AbortSignal.any == `function` ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
    let l2 = fetch(e17, c2).then(function(e18) {
      return e18[a2(1470)]();
    }).then(function(e18) {
      return createImageBitmap(e18, Object.assign(o2.options, { colorSpaceConversion: `none` }));
    }).then(function(n3) {
      Xo.add(`image-bitmap:` + e17, n3), t3 && t3(n3), o2.manager.itemEnd(e17);
    }).catch(function(t4) {
      let n3 = a2;
      r2 && r2(t4), Ms[n3(1139)](l2, t4), Xo.remove(`image-bitmap:` + e17), o2.manager.itemError(e17), o2.manager.itemEnd(e17);
    });
    Xo.add(`image-bitmap:` + e17, l2), o2.manager.itemStart(e17);
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}, Ps = -90, Fs = 1, Is = class extends Hn {
  constructor(e17, t3, n2) {
    let r2 = i;
    super(), this.type = `CubeCamera`, this.renderTarget = n2, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    let a2 = new xs(Ps, Fs, e17, t3);
    a2.layers = this[r2(464)], this.add(a2);
    let o2 = new xs(Ps, Fs, e17, t3);
    o2.layers = this.layers, this.add(o2);
    let s2 = new xs(Ps, Fs, e17, t3);
    s2.layers = this.layers, this.add(s2);
    let c2 = new xs(Ps, Fs, e17, t3);
    c2.layers = this.layers, this.add(c2);
    let l2 = new xs(Ps, Fs, e17, t3);
    l2[r2(464)] = this.layers, this.add(l2);
    let u2 = new xs(Ps, Fs, e17, t3);
    u2.layers = this.layers, this[r2(1034)](u2);
  }
  [i(537)]() {
    let e17 = i, t3 = this.coordinateSystem, n2 = this.children.concat(), [r2, a2, o2, s2, c2, l2] = n2;
    for (let e18 of n2) this.remove(e18);
    if (t3 === 2e3) r2.up.set(0, 1, 0), r2.lookAt(1, 0, 0), a2.up.set(0, 1, 0), a2[e17(949)](-1, 0, 0), o2.up.set(0, 0, -1), o2.lookAt(0, 1, 0), s2.up[e17(1139)](0, 0, 1), s2.lookAt(0, -1, 0), c2.up[e17(1139)](0, 1, 0), c2.lookAt(0, 0, 1), l2.up.set(0, 1, 0), l2.lookAt(0, 0, -1);
    else if (t3 === 2001) r2.up[e17(1139)](0, -1, 0), r2[e17(949)](-1, 0, 0), a2.up.set(0, -1, 0), a2.lookAt(1, 0, 0), o2.up.set(0, 0, 1), o2[e17(949)](0, 1, 0), s2.up.set(0, 0, -1), s2.lookAt(0, -1, 0), c2.up[e17(1139)](0, -1, 0), c2.lookAt(0, 0, 1), l2.up.set(0, -1, 0), l2[e17(949)](0, 0, -1);
    else throw Error(e17(1246) + t3);
    for (let t4 of n2) this[e17(1034)](t4), t4.updateMatrixWorld();
  }
  update(e17, t3) {
    let n2 = i;
    this.parent === null && this.updateMatrixWorld();
    let { renderTarget: r2, activeMipmapLevel: a2 } = this;
    this.coordinateSystem !== e17.coordinateSystem && (this.coordinateSystem = e17.coordinateSystem, this.updateCoordinateSystem());
    let [o2, s2, c2, l2, u2, d2] = this.children, f2 = e17.getRenderTarget(), p2 = e17.getActiveCubeFace(), m2 = e17.getActiveMipmapLevel(), h2 = e17.xr.enabled;
    e17.xr.enabled = false;
    let g2 = r2.texture.generateMipmaps;
    r2[n2(1017)].generateMipmaps = false;
    let _2 = false;
    _2 = e17.isWebGLRenderer === true ? e17.state.buffers.depth.getReversed() : e17.reversedDepthBuffer, e17.setRenderTarget(r2, 0, a2), _2 && e17.autoClear === false && e17.clearDepth(), e17.render(t3, o2), e17.setRenderTarget(r2, 1, a2), _2 && e17.autoClear === false && e17.clearDepth(), e17[n2(581)](t3, s2), e17.setRenderTarget(r2, 2, a2), _2 && e17[n2(584)] === false && e17.clearDepth(), e17.render(t3, c2), e17.setRenderTarget(r2, 3, a2), _2 && e17.autoClear === false && e17.clearDepth(), e17.render(t3, l2), e17.setRenderTarget(r2, 4, a2), _2 && e17.autoClear === false && e17.clearDepth(), e17.render(t3, u2), r2.texture[n2(1142)] = g2, e17.setRenderTarget(r2, 5, a2), _2 && e17[n2(584)] === false && e17.clearDepth(), e17.render(t3, d2), e17.setRenderTarget(f2, p2, m2), e17.xr[n2(359)] = h2, r2.texture.needsPMREMUpdate = true;
  }
}, Ls = class extends xs {
  constructor(e17 = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = e17;
  }
}, Rs = class {
  constructor() {
    let e17 = i;
    this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this[e17(335)] = 0, this._timescale = 1, this._document = null, this[e17(970)] = null;
  }
  connect(e17) {
    let t3 = i;
    this._document = e17, e17.hidden !== void 0 && (this._pageVisibilityHandler = zs[t3(729)](this), e17.addEventListener(t3(1282), this._pageVisibilityHandler, false));
  }
  [i(674)]() {
    let e17 = i;
    this._pageVisibilityHandler !== null && (this._document[e17(806)](`visibilitychange`, this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
  }
  getDelta() {
    return this._delta / 1e3;
  }
  [i(596)]() {
    return this._elapsed / 1e3;
  }
  [i(1460)]() {
    return this._timescale;
  }
  setTimescale(e17) {
    return this._timescale = e17, this;
  }
  reset() {
    let e17 = i;
    return this._currentTime = performance[e17(447)]() - this._startTime, this;
  }
  dispose() {
    this.disconnect();
  }
  update(e17) {
    let t3 = i;
    return this._pageVisibilityHandler !== null && this._document.hidden === true ? this._delta = 0 : (this._previousTime = this[t3(927)], this._currentTime = (e17 === void 0 ? performance.now() : e17) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
  }
};
function zs() {
  this._document.hidden === false && this.reset();
}
var Bs = class {
  constructor(e17, t3, n2) {
    let r2 = i;
    this[r2(1069)] = e17, this.valueSize = n2;
    let a2, o2, s2;
    switch (t3) {
      case `quaternion`:
        a2 = this[r2(400)], o2 = this[r2(673)], s2 = this[r2(1266)], this[r2(918)] = new Float64Array(n2 * 6), this._workIndex = 5;
        break;
      case `string`:
      case `bool`:
        a2 = this._select, o2 = this._select, s2 = this._setAdditiveIdentityOther, this.buffer = Array(n2 * 5);
        break;
      default:
        a2 = this._lerp, o2 = this[r2(1484)], s2 = this[r2(645)], this[r2(918)] = new Float64Array(n2 * 5);
    }
    this[r2(1153)] = a2, this._mixBufferRegionAdditive = o2, this._setIdentity = s2, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this[r2(1424)] = 0;
  }
  accumulate(e17, t3) {
    let n2 = i, r2 = this[n2(918)], a2 = this.valueSize, o2 = e17 * a2 + a2, s2 = this[n2(1453)];
    if (s2 === 0) {
      for (let e18 = 0; e18 !== a2; ++e18) r2[o2 + e18] = r2[e18];
      s2 = t3;
    } else {
      s2 += t3;
      let e18 = t3 / s2;
      this._mixBufferRegion(r2, o2, 0, e18, a2);
    }
    this.cumulativeWeight = s2;
  }
  accumulateAdditive(e17) {
    let t3 = i, n2 = this.buffer, r2 = this.valueSize, a2 = r2 * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this[t3(375)](n2, a2, 0, e17, r2), this[t3(209)] += e17;
  }
  apply(e17) {
    let t3 = this.valueSize, n2 = this.buffer, r2 = e17 * t3 + t3, i2 = this.cumulativeWeight, a2 = this.cumulativeWeightAdditive, o2 = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, i2 < 1) {
      let e18 = t3 * this._origIndex;
      this._mixBufferRegion(n2, r2, e18, 1 - i2, t3);
    }
    a2 > 0 && this._mixBufferRegionAdditive(n2, r2, this._addIndex * t3, 1, t3);
    for (let e18 = t3, i3 = t3 + t3; e18 !== i3; ++e18) if (n2[e18] !== n2[e18 + t3]) {
      o2.setValue(n2, r2);
      break;
    }
  }
  [i(765)]() {
    let e17 = i, t3 = this.binding, n2 = this.buffer, r2 = this.valueSize, a2 = r2 * this._origIndex;
    t3[e17(851)](n2, a2);
    for (let e18 = r2, t4 = a2; e18 !== t4; ++e18) n2[e18] = n2[a2 + e18 % r2];
    this._setIdentity(), this.cumulativeWeight = 0, this[e17(209)] = 0;
  }
  restoreOriginalState() {
    let e17 = i, t3 = this.valueSize * 3;
    this[e17(1069)].setValue(this.buffer, t3);
  }
  _setAdditiveIdentityNumeric() {
    let e17 = this._addIndex * this.valueSize, t3 = e17 + this.valueSize;
    for (let n2 = e17; n2 < t3; n2++) this.buffer[n2] = 0;
  }
  [i(1266)]() {
    let e17 = i;
    this._setAdditiveIdentityNumeric(), this.buffer[this[e17(690)] * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    let e17 = i, t3 = this._origIndex * this[e17(331)], n2 = this[e17(690)] * this[e17(331)];
    for (let r2 = 0; r2 < this[e17(331)]; r2++) this.buffer[n2 + r2] = this[e17(918)][t3 + r2];
  }
  _select(e17, t3, n2, r2, i2) {
    if (r2 >= 0.5) for (let r3 = 0; r3 !== i2; ++r3) e17[t3 + r3] = e17[n2 + r3];
  }
  _slerp(e17, t3, n2, r2) {
    Jt.slerpFlat(e17, t3, e17, t3, e17, n2, r2);
  }
  _slerpAdditive(e17, t3, n2, r2, i2) {
    let a2 = this._workIndex * i2;
    Jt.multiplyQuaternionsFlat(e17, a2, e17, t3, e17, n2), Jt.slerpFlat(e17, t3, e17, t3, e17, a2, r2);
  }
  _lerp(e17, t3, n2, r2, i2) {
    let a2 = 1 - r2;
    for (let o2 = 0; o2 !== i2; ++o2) {
      let i3 = t3 + o2;
      e17[i3] = e17[i3] * a2 + e17[n2 + o2] * r2;
    }
  }
  _lerpAdditive(e17, t3, n2, r2, i2) {
    for (let a2 = 0; a2 !== i2; ++a2) {
      let i3 = t3 + a2;
      e17[i3] = e17[i3] + e17[n2 + a2] * r2;
    }
  }
}, Vs = i(1379), Hs = RegExp(`[` + Vs + `]`, `g`), Us = `[^` + Vs + `]`, Ws = `[^` + Vs.replace(`\\.`, ``) + `]`, Gs = i(303).replace(`WC`, Us), Ks = `(WCOD+)?`.replace(`WCOD`, Ws), qs = `(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`, Us), Js = `\\.(WC+)(?:\\[(.+)\\])?`[i(720)](`WC`, Us), Ys = RegExp(`^` + Gs + Ks + qs + Js + `$`), Xs = [`material`, `materials`, `bones`, `map`], Zs = class {
  constructor(e17, t3, n2) {
    let r2 = i, a2 = n2 || Qs[r2(1383)](t3);
    this._targetGroup = e17, this._bindings = e17[r2(198)](t3, a2);
  }
  getValue(e17, t3) {
    let n2 = i;
    this.bind();
    let r2 = this._targetGroup.nCachedObjects_, a2 = this[n2(1133)][r2];
    a2 !== void 0 && a2[n2(851)](e17, t3);
  }
  setValue(e17, t3) {
    let n2 = i, r2 = this._bindings;
    for (let i2 = this._targetGroup[n2(1338)], a2 = r2.length; i2 !== a2; ++i2) r2[i2].setValue(e17, t3);
  }
  bind() {
    let e17 = i, t3 = this._bindings;
    for (let n2 = this[e17(594)].nCachedObjects_, r2 = t3.length; n2 !== r2; ++n2) t3[n2].bind();
  }
  unbind() {
    let e17 = i, t3 = this._bindings;
    for (let n2 = this[e17(594)][e17(1338)], r2 = t3[e17(660)]; n2 !== r2; ++n2) t3[n2][e17(1177)]();
  }
}, Qs = class e16 {
  constructor(t3, n2, r2) {
    let a2 = i;
    this.path = n2, this.parsedPath = r2 || e16.parseTrackName(n2), this.node = e16.findNode(t3, this.parsedPath[a2(580)]), this.rootNode = t3, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static [i(781)](t3, n2, r2) {
    return t3 && t3[i(734)] ? new e16.Composite(t3, n2, r2) : new e16(t3, n2, r2);
  }
  static sanitizeNodeName(e17) {
    return e17.replace(/\s/g, `_`).replace(Hs, ``);
  }
  static parseTrackName(e17) {
    let t3 = i, n2 = Ys.exec(e17);
    if (n2 === null) throw Error(`PropertyBinding: Cannot parse trackName: ` + e17);
    let r2 = { nodeName: n2[2], objectName: n2[3], objectIndex: n2[4], propertyName: n2[5], propertyIndex: n2[6] }, a2 = r2.nodeName && r2.nodeName.lastIndexOf(`.`);
    if (a2 !== void 0 && a2 !== -1) {
      let e18 = r2.nodeName.substring(a2 + 1);
      Xs.indexOf(e18) !== -1 && (r2[t3(580)] = r2.nodeName.substring(0, a2), r2.objectName = e18);
    }
    if (r2.propertyName === null || r2[t3(1061)][t3(660)] === 0) throw Error(t3(739) + e17);
    return r2;
  }
  static findNode(e17, t3) {
    let n2 = i;
    if (t3 === void 0 || t3 === `` || t3 === `.` || t3 === -1 || t3 === e17.name || t3 === e17.uuid) return e17;
    if (e17[n2(1096)]) {
      let n3 = e17.skeleton.getBoneByName(t3);
      if (n3 !== void 0) return n3;
    }
    if (e17.children) {
      let r2 = function(e18) {
        let i3 = n2;
        for (let n3 = 0; n3 < e18[i3(660)]; n3++) {
          let i4 = e18[n3];
          if (i4.name === t3 || i4.uuid === t3) return i4;
          let a2 = r2(i4.children);
          if (a2) return a2;
        }
        return null;
      }, i2 = r2(e17.children);
      if (i2) return i2;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e17, t3) {
    e17[t3] = this.targetObject[this.propertyName];
  }
  _getValue_array(e17, t3) {
    let n2 = i, r2 = this[n2(1520)];
    for (let i2 = 0, a2 = r2[n2(660)]; i2 !== a2; ++i2) e17[t3++] = r2[i2];
  }
  [i(354)](e17, t3) {
    e17[t3] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e17, t3) {
    this.resolvedProperty.toArray(e17, t3);
  }
  _setValue_direct(e17, t3) {
    this.targetObject[this.propertyName] = e17[t3];
  }
  [i(1344)](e17, t3) {
    let n2 = i;
    this.targetObject[this[n2(1061)]] = e17[t3], this.targetObject.needsUpdate = true;
  }
  [i(805)](e17, t3) {
    this.targetObject[this.propertyName] = e17[t3], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e17, t3) {
    let n2 = i, r2 = this.resolvedProperty;
    for (let i2 = 0, a2 = r2[n2(660)]; i2 !== a2; ++i2) r2[i2] = e17[t3++];
  }
  _setValue_array_setNeedsUpdate(e17, t3) {
    let n2 = this.resolvedProperty;
    for (let r2 = 0, i2 = n2.length; r2 !== i2; ++r2) n2[r2] = e17[t3++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e17, t3) {
    let n2 = i, r2 = this[n2(1520)];
    for (let i2 = 0, a2 = r2[n2(660)]; i2 !== a2; ++i2) r2[i2] = e17[t3++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  [i(912)](e17, t3) {
    let n2 = i;
    this[n2(1520)][this.propertyIndex] = e17[t3];
  }
  [i(471)](e17, t3) {
    let n2 = i;
    this[n2(1520)][this.propertyIndex] = e17[t3], this.targetObject[n2(318)] = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e17, t3) {
    this.resolvedProperty[this.propertyIndex] = e17[t3], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e17, t3) {
    this.resolvedProperty.fromArray(e17, t3);
  }
  _setValue_fromArray_setNeedsUpdate(e17, t3) {
    this.resolvedProperty.fromArray(e17, t3), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e17, t3) {
    let n2 = i;
    this[n2(1520)].fromArray(e17, t3), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e17, t3) {
    let n2 = i;
    this[n2(729)](), this.getValue(e17, t3);
  }
  [i(296)](e17, t3) {
    let n2 = i;
    this[n2(729)](), this[n2(428)](e17, t3);
  }
  bind() {
    let t3 = i, n2 = this[t3(309)], r2 = this.parsedPath, a2 = r2.objectName, o2 = r2.propertyName, s2 = r2.propertyIndex;
    if (n2 || (n2 = e16.findNode(this.rootNode, r2.nodeName), this.node = n2), this.getValue = this._getValue_unavailable, this[t3(428)] = this._setValue_unavailable, !n2) {
      z(`PropertyBinding: No target node found for track: ` + this.path + `.`);
      return;
    }
    if (a2) {
      let e17 = r2.objectIndex;
      switch (a2) {
        case `materials`:
          if (!n2.material) {
            B(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
            return;
          }
          if (!n2.material.materials) {
            B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`, this);
            return;
          }
          n2 = n2.material.materials;
          break;
        case `bones`:
          if (!n2.skeleton) {
            B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`, this);
            return;
          }
          n2 = n2.skeleton.bones;
          for (let t4 = 0; t4 < n2.length; t4++) if (n2[t4].name === e17) {
            e17 = t4;
            break;
          }
          break;
        case `map`:
          if (`map` in n2) {
            n2 = n2.map;
            break;
          }
          if (!n2.material) {
            B(`PropertyBinding: Can not bind to material as node does not have a material.`, this);
            return;
          }
          if (!n2.material.map) {
            B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`, this);
            return;
          }
          n2 = n2.material.map;
          break;
        default:
          if (n2[a2] === void 0) {
            B(`PropertyBinding: Can not bind to objectName of node undefined.`, this);
            return;
          }
          n2 = n2[a2];
      }
      if (e17 !== void 0) {
        if (n2[e17] === void 0) {
          B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`, this, n2);
          return;
        }
        n2 = n2[e17];
      }
    }
    let c2 = n2[o2];
    if (c2 === void 0) {
      let e17 = r2.nodeName;
      B(`PropertyBinding: Trying to update property for track: ` + e17 + `.` + o2 + ` but it wasn't found.`, n2);
      return;
    }
    let l2 = this.Versioning.None;
    this.targetObject = n2, n2.isMaterial === true ? l2 = this.Versioning.NeedsUpdate : n2[t3(1190)] === true && (l2 = this.Versioning.MatrixWorldNeedsUpdate);
    let u2 = this.BindingType.Direct;
    if (s2 !== void 0) {
      if (o2 === `morphTargetInfluences`) {
        if (!n2.geometry) {
          B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`, this);
          return;
        }
        if (!n2.geometry[t3(1175)]) {
          B(t3(287), this);
          return;
        }
        n2.morphTargetDictionary[s2] !== void 0 && (s2 = n2.morphTargetDictionary[s2]);
      }
      u2 = this.BindingType.ArrayElement, this[t3(1520)] = c2, this.propertyIndex = s2;
    } else c2.fromArray !== void 0 && c2[t3(1263)] !== void 0 ? (u2 = this.BindingType.HasFromToArray, this.resolvedProperty = c2) : Array[t3(1277)](c2) ? (u2 = this.BindingType.EntireArray, this.resolvedProperty = c2) : this[t3(1061)] = o2;
    this.getValue = this[t3(1124)][u2], this.setValue = this[t3(972)][u2][l2];
  }
  unbind() {
    let e17 = i;
    this.node = null, this[e17(851)] = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
Qs.Composite = Zs, Qs.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, Qs.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, Qs.prototype.GetterByBindingType = [Qs.prototype._getValue_direct, Qs.prototype[i(553)], Qs.prototype._getValue_arrayElement, Qs.prototype._getValue_toArray], Qs.prototype.SetterByBindingTypeAndVersioning = [[Qs.prototype[i(814)], Qs.prototype._setValue_direct_setNeedsUpdate, Qs[i(688)]._setValue_direct_setMatrixWorldNeedsUpdate], [Qs.prototype._setValue_array, Qs.prototype._setValue_array_setNeedsUpdate, Qs.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Qs.prototype[i(912)], Qs[i(688)]._setValue_arrayElement_setNeedsUpdate, Qs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Qs[i(688)]._setValue_fromArray, Qs.prototype._setValue_fromArray_setNeedsUpdate, Qs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
var $s = class {
  constructor(e17, t3, n2 = null, r2 = t3.blendMode) {
    let a2 = i;
    this._mixer = e17, this[a2(1272)] = t3, this._localRoot = n2, this.blendMode = r2;
    let o2 = t3.tracks, s2 = o2[a2(660)], c2 = Array(s2), l2 = { endingStart: Qe, endingEnd: Qe };
    for (let e18 = 0; e18 !== s2; ++e18) {
      let t4 = o2[e18].createInterpolant(null);
      c2[e18] = t4, t4.settings && Object[a2(420)](l2, t4.settings), t4.settings = l2;
    }
    this._interpolantSettings = l2, this._interpolants = c2, this._propertyBindings = Array(s2), this._cacheIndex = null, this[a2(324)] = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this[a2(1288)] = Ke, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this[a2(1158)] = false, this[a2(359)] = true, this.clampWhenFinished = false, this.zeroSlopeAtStart = true, this.zeroSlopeAtEnd = true;
  }
  [i(1339)]() {
    return this._mixer._activateAction(this), this;
  }
  [i(676)]() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  [i(340)]() {
    return this.paused = false, this.enabled = true, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  isScheduled() {
    let e17 = i;
    return this[e17(216)]._isActiveAction(this);
  }
  startAt(e17) {
    return this._startTime = e17, this;
  }
  setLoop(e17, t3) {
    return this.loop = e17, this.repetitions = t3, this;
  }
  setEffectiveWeight(e17) {
    let t3 = i;
    return this[t3(298)] = e17, this._effectiveWeight = this.enabled ? e17 : 0, this[t3(890)]();
  }
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(e17) {
    return this._scheduleFading(e17, 0, 1);
  }
  fadeOut(e17) {
    return this._scheduleFading(e17, 1, 0);
  }
  crossFadeFrom(e17, t3, n2 = false) {
    let r2 = i;
    if (e17[r2(555)](t3), this[r2(1501)](t3), n2 === true) {
      let n3 = this._clip[r2(965)], i2 = e17._clip.duration, a2 = i2 / n3, o2 = n3 / i2;
      e17.warp(1, a2, t3), this.warp(o2, 1, t3);
    }
    return this;
  }
  crossFadeTo(e17, t3, n2 = false) {
    return e17.crossFadeFrom(this, t3, n2);
  }
  stopFading() {
    let e17 = i, t3 = this[e17(310)];
    return t3 !== null && (this[e17(310)] = null, this._mixer._takeBackControlInterpolant(t3)), this;
  }
  setEffectiveTimeScale(e17) {
    let t3 = i;
    return this.timeScale = e17, this._effectiveTimeScale = this.paused ? 0 : e17, this[t3(979)]();
  }
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(e17) {
    let t3 = i;
    return this.timeScale = this._clip[t3(965)] / e17, this.stopWarping();
  }
  syncWith(e17) {
    let t3 = i;
    return this.time = e17.time, this[t3(1448)] = e17[t3(1448)], this[t3(979)]();
  }
  halt(e17) {
    let t3 = i;
    return this.warp(this[t3(1493)], 0, e17);
  }
  warp(e17, t3, n2) {
    let r2 = i, a2 = this[r2(216)], o2 = a2.time, s2 = this.timeScale, c2 = this._timeScaleInterpolant;
    c2 === null && (c2 = a2._lendControlInterpolant(), this[r2(693)] = c2);
    let l2 = c2.parameterPositions, u2 = c2.sampleValues;
    return l2[0] = o2, l2[1] = o2 + n2, u2[0] = e17 / s2, u2[1] = t3 / s2, this;
  }
  stopWarping() {
    let e17 = this._timeScaleInterpolant;
    return e17 !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e17)), this;
  }
  getMixer() {
    let e17 = i;
    return this[e17(216)];
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  [i(1350)](e17, t3, n2, r2) {
    let a2 = i;
    if (!this[a2(359)]) {
      this[a2(466)](e17);
      return;
    }
    let o2 = this._startTime;
    if (o2 !== null) {
      let r3 = (e17 - o2) * n2;
      r3 < 0 || n2 === 0 ? t3 = 0 : (this._startTime = null, t3 = n2 * r3);
    }
    t3 *= this[a2(267)](e17);
    let s2 = this._updateTime(t3), c2 = this._updateWeight(e17);
    if (c2 > 0) {
      let e18 = this[a2(302)], t4 = this._propertyBindings;
      switch (this.blendMode) {
        case nt:
          for (let n3 = 0, r3 = e18[a2(660)]; n3 !== r3; ++n3) e18[n3][a2(222)](s2), t4[n3].accumulateAdditive(c2);
          break;
        case tt:
        default:
          for (let n3 = 0, i2 = e18.length; n3 !== i2; ++n3) e18[n3].evaluate(s2), t4[n3].accumulate(r2, c2);
      }
    }
  }
  _updateWeight(e17) {
    let t3 = i, n2 = 0;
    if (this.enabled) {
      n2 = this.weight;
      let r2 = this._weightInterpolant;
      if (r2 !== null) {
        let i2 = r2.evaluate(e17)[0];
        n2 *= i2, e17 > r2[t3(1374)][1] && (this.stopFading(), i2 === 0 && (this[t3(359)] = false));
      }
    }
    return this._effectiveWeight = n2, n2;
  }
  _updateTimeScale(e17) {
    let t3 = i, n2 = 0;
    if (!this.paused) {
      n2 = this.timeScale;
      let r2 = this[t3(693)];
      if (r2 !== null) {
        let i2 = r2.evaluate(e17)[0];
        n2 *= i2, e17 > r2.parameterPositions[1] && (this[t3(979)](), n2 === 0 ? this.paused = true : this[t3(1448)] = n2);
      }
    }
    return this._effectiveTimeScale = n2, n2;
  }
  _updateTime(e17) {
    let t3 = i, n2 = this[t3(1272)][t3(965)], r2 = this[t3(1288)], a2 = this.time + e17, o2 = this._loopCount, s2 = r2 === qe;
    if (e17 === 0) return o2 === -1 ? a2 : s2 && (o2 & 1) == 1 ? n2 - a2 : a2;
    if (r2 === 2200) {
      o2 === -1 && (this._loopCount = 0, this[t3(909)](true, true, false));
      ah: {
        if (a2 >= n2) a2 = n2;
        else if (a2 < 0) a2 = 0;
        else {
          this.time = a2;
          break ah;
        }
        this.clampWhenFinished ? this[t3(1158)] = true : this[t3(359)] = false, this.time = a2, this._mixer.dispatchEvent({ type: `finished`, action: this, direction: e17 < 0 ? -1 : 1 });
      }
    } else {
      if (o2 === -1 && (e17 >= 0 ? (o2 = 0, this[t3(909)](true, this.repetitions === 0, s2)) : this._setEndings(this[t3(984)] === 0, true, s2)), a2 >= n2 || a2 < 0) {
        let r3 = Math.floor(a2 / n2);
        a2 -= n2 * r3, o2 += Math.abs(r3);
        let i2 = this[t3(984)] - o2;
        if (i2 <= 0) this.clampWhenFinished ? this.paused = true : this.enabled = false, a2 = e17 > 0 ? n2 : 0, this.time = a2, this._mixer.dispatchEvent({ type: t3(1082), action: this, direction: e17 > 0 ? 1 : -1 });
        else {
          if (i2 === 1) {
            let n3 = e17 < 0;
            this[t3(909)](n3, !n3, s2);
          } else this._setEndings(false, false, s2);
          this._loopCount = o2, this.time = a2, this._mixer.dispatchEvent({ type: t3(1288), action: this, loopDelta: r3 });
        }
      } else this._loopCount = o2, this.time = a2;
      if (s2 && (o2 & 1) == 1) return n2 - a2;
    }
    return a2;
  }
  _setEndings(e17, t3, n2) {
    let r2 = i, a2 = this._interpolantSettings;
    n2 ? (a2[r2(1380)] = $e, a2[r2(841)] = $e) : (e17 ? a2.endingStart = this.zeroSlopeAtStart ? $e : Qe : a2.endingStart = et, t3 ? a2.endingEnd = this[r2(1021)] ? $e : Qe : a2.endingEnd = et);
  }
  _scheduleFading(e17, t3, n2) {
    let r2 = i, a2 = this._mixer, o2 = a2[r2(1358)], s2 = this._weightInterpolant;
    s2 === null && (s2 = a2._lendControlInterpolant(), this[r2(310)] = s2);
    let c2 = s2.parameterPositions, l2 = s2.sampleValues;
    return c2[0] = o2, l2[0] = t3, c2[1] = o2 + e17, l2[1] = n2, this;
  }
}, ec = new Float32Array(1), tc = class extends St {
  constructor(e17) {
    super(), this._root = e17, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1, typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`, { detail: this }));
  }
  [i(185)](e17, t3) {
    let n2 = i, r2 = e17[n2(1349)] || this[n2(1002)], a2 = e17._clip[n2(1052)], o2 = a2[n2(660)], s2 = e17._propertyBindings, c2 = e17._interpolants, l2 = r2.uuid, u2 = this._bindingsByRootAndName, d2 = u2[l2];
    d2 === void 0 && (d2 = {}, u2[l2] = d2);
    for (let e18 = 0; e18 !== o2; ++e18) {
      let i2 = a2[e18], o3 = i2[n2(1301)], u3 = d2[o3];
      if (u3 !== void 0) ++u3.referenceCount, s2[e18] = u3;
      else {
        if (u3 = s2[e18], u3 !== void 0) {
          u3._cacheIndex === null && (++u3.referenceCount, this[n2(1084)](u3, l2, o3));
          continue;
        }
        let a3 = t3 && t3._propertyBindings[e18].binding.parsedPath;
        u3 = new Bs(Qs[n2(781)](r2, o3, a3), i2[n2(211)], i2.getValueSize()), ++u3.referenceCount, this[n2(1084)](u3, l2, o3), s2[e18] = u3;
      }
      c2[e18].resultBuffer = u3.buffer;
    }
  }
  _activateAction(e17) {
    let t3 = i;
    if (!this._isActiveAction(e17)) {
      if (e17._cacheIndex === null) {
        let n3 = (e17[t3(1349)] || this._root).uuid, r2 = e17._clip.uuid, i2 = this._actionsByClip[r2];
        this._bindAction(e17, i2 && i2[t3(172)][0]), this._addInactiveAction(e17, r2, n3);
      }
      let n2 = e17[t3(244)];
      for (let e18 = 0, r2 = n2[t3(660)]; e18 !== r2; ++e18) {
        let r3 = n2[e18];
        r3.useCount++ === 0 && (this[t3(1318)](r3), r3.saveOriginalState());
      }
      this._lendAction(e17);
    }
  }
  _deactivateAction(e17) {
    if (this._isActiveAction(e17)) {
      let t3 = e17._propertyBindings;
      for (let e18 = 0, n2 = t3.length; e18 !== n2; ++e18) {
        let n3 = t3[e18];
        --n3.useCount === 0 && (n3.restoreOriginalState(), this._takeBackBinding(n3));
      }
      this._takeBackAction(e17);
    }
  }
  _initMemoryManager() {
    let e17 = i;
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this[e17(792)] = 0, this._bindingsByRootAndName = {}, this[e17(326)] = [], this._nActiveControlInterpolants = 0;
    let t3 = this;
    this.stats = { actions: { get total() {
      return t3._actions.length;
    }, get inUse() {
      return t3._nActiveActions;
    } }, bindings: { get total() {
      return t3._bindings.length;
    }, get inUse() {
      return t3._nActiveBindings;
    } }, controlInterpolants: { get total() {
      let n2 = e17;
      return t3._controlInterpolants[n2(660)];
    }, get inUse() {
      return t3._nActiveControlInterpolants;
    } } };
  }
  [i(1454)](e17) {
    let t3 = e17._cacheIndex;
    return t3 !== null && t3 < this._nActiveActions;
  }
  _addInactiveAction(e17, t3, n2) {
    let r2 = i, a2 = this._actions, o2 = this[r2(465)], s2 = o2[t3];
    if (s2 === void 0) s2 = { knownActions: [e17], actionByRoot: {} }, e17._byClipCacheIndex = 0, o2[t3] = s2;
    else {
      let t4 = s2.knownActions;
      e17[r2(324)] = t4.length, t4.push(e17);
    }
    e17._cacheIndex = a2.length, a2.push(e17), s2.actionByRoot[n2] = e17;
  }
  _removeInactiveAction(e17) {
    let t3 = i, n2 = this[t3(245)], r2 = n2[n2.length - 1], a2 = e17._cacheIndex;
    r2._cacheIndex = a2, n2[a2] = r2, n2.pop(), e17._cacheIndex = null;
    let o2 = e17._clip.uuid, s2 = this._actionsByClip, c2 = s2[o2], l2 = c2.knownActions, u2 = l2[l2.length - 1], d2 = e17._byClipCacheIndex;
    u2._byClipCacheIndex = d2, l2[d2] = u2, l2.pop(), e17._byClipCacheIndex = null;
    let f2 = c2.actionByRoot, p2 = (e17._localRoot || this._root).uuid;
    delete f2[p2], l2[t3(660)] === 0 && delete s2[o2], this._removeInactiveBindingsForAction(e17);
  }
  _removeInactiveBindingsForAction(e17) {
    let t3 = e17._propertyBindings;
    for (let e18 = 0, n2 = t3.length; e18 !== n2; ++e18) {
      let n3 = t3[e18];
      --n3.referenceCount === 0 && this._removeInactiveBinding(n3);
    }
  }
  _lendAction(e17) {
    let t3 = i, n2 = this._actions, r2 = e17[t3(787)], a2 = this._nActiveActions++, o2 = n2[a2];
    e17._cacheIndex = a2, n2[a2] = e17, o2[t3(787)] = r2, n2[r2] = o2;
  }
  _takeBackAction(e17) {
    let t3 = i, n2 = this[t3(245)], r2 = e17[t3(787)], a2 = --this._nActiveActions, o2 = n2[a2];
    e17[t3(787)] = a2, n2[a2] = e17, o2._cacheIndex = r2, n2[r2] = o2;
  }
  _addInactiveBinding(e17, t3, n2) {
    let r2 = this._bindingsByRootAndName, i2 = this._bindings, a2 = r2[t3];
    a2 === void 0 && (a2 = {}, r2[t3] = a2), a2[n2] = e17, e17._cacheIndex = i2.length, i2.push(e17);
  }
  [i(1222)](e17) {
    let t3 = i, n2 = this._bindings, r2 = e17.binding, a2 = r2[t3(863)].uuid, o2 = r2.path, s2 = this._bindingsByRootAndName, c2 = s2[a2], l2 = n2[n2.length - 1], u2 = e17[t3(787)];
    l2._cacheIndex = u2, n2[u2] = l2, n2.pop(), delete c2[o2], Object[t3(928)](c2).length === 0 && delete s2[a2];
  }
  _lendBinding(e17) {
    let t3 = this._bindings, n2 = e17._cacheIndex, r2 = this._nActiveBindings++, i2 = t3[r2];
    e17._cacheIndex = r2, t3[r2] = e17, i2._cacheIndex = n2, t3[n2] = i2;
  }
  [i(329)](e17) {
    let t3 = i, n2 = this[t3(1133)], r2 = e17._cacheIndex, a2 = --this._nActiveBindings, o2 = n2[a2];
    e17._cacheIndex = a2, n2[a2] = e17, o2._cacheIndex = r2, n2[r2] = o2;
  }
  _lendControlInterpolant() {
    let e17 = this._controlInterpolants, t3 = this._nActiveControlInterpolants++, n2 = e17[t3];
    return n2 === void 0 && (n2 = new Io(new Float32Array(2), new Float32Array(2), 1, ec), n2.__cacheIndex = t3, e17[t3] = n2), n2;
  }
  _takeBackControlInterpolant(e17) {
    let t3 = this._controlInterpolants, n2 = e17.__cacheIndex, r2 = --this._nActiveControlInterpolants, i2 = t3[r2];
    e17.__cacheIndex = r2, t3[r2] = e17, i2.__cacheIndex = n2, t3[n2] = i2;
  }
  clipAction(e17, t3, n2) {
    let r2 = i, a2 = t3 || this._root, o2 = a2.uuid, s2 = typeof e17 == `string` ? qo.findByName(a2, e17) : e17, c2 = s2 === null ? e17 : s2.uuid, l2 = this._actionsByClip[c2], u2 = null;
    if (n2 === void 0 && (n2 = s2 === null ? tt : s2.blendMode), l2 !== void 0) {
      let e18 = l2[r2(544)][o2];
      if (e18 !== void 0 && e18.blendMode === n2) return e18;
      u2 = l2[r2(172)][0], s2 === null && (s2 = u2[r2(1272)]);
    }
    if (s2 === null) return null;
    let d2 = new $s(this, s2, t3, n2);
    return this[r2(185)](d2, u2), this._addInactiveAction(d2, c2, o2), d2;
  }
  existingAction(e17, t3) {
    let n2 = i, r2 = t3 || this[n2(1002)], a2 = r2.uuid, o2 = typeof e17 == `string` ? qo.findByName(r2, e17) : e17, s2 = o2 ? o2.uuid : e17, c2 = this[n2(465)][s2];
    return c2 === void 0 ? null : c2.actionByRoot[a2] || null;
  }
  stopAllAction() {
    let e17 = this._actions, t3 = this._nActiveActions;
    for (let n2 = t3 - 1; n2 >= 0; --n2) e17[n2].stop();
    return this;
  }
  update(e17) {
    let t3 = i;
    e17 *= this[t3(1448)];
    let n2 = this._actions, r2 = this._nActiveActions, a2 = this.time += e17, o2 = Math[t3(292)](e17), s2 = this._accuIndex ^= 1;
    for (let t4 = 0; t4 !== r2; ++t4) n2[t4]._update(a2, e17, o2, s2);
    let c2 = this._bindings, l2 = this._nActiveBindings;
    for (let e18 = 0; e18 !== l2; ++e18) c2[e18].apply(s2);
    return this;
  }
  setTime(e17) {
    this.time = 0;
    for (let e18 = 0; e18 < this._actions.length; e18++) this._actions[e18].time = 0;
    return this.update(e17);
  }
  getRoot() {
    return this._root;
  }
  uncacheClip(e17) {
    let t3 = i, n2 = this._actions, r2 = e17.uuid, a2 = this._actionsByClip, o2 = a2[r2];
    if (o2 !== void 0) {
      let e18 = o2.knownActions;
      for (let r3 = 0, i2 = e18.length; r3 !== i2; ++r3) {
        let i3 = e18[r3];
        this._deactivateAction(i3);
        let a3 = i3[t3(787)], o3 = n2[n2.length - 1];
        i3._cacheIndex = null, i3[t3(324)] = null, o3._cacheIndex = a3, n2[a3] = o3, n2[t3(1087)](), this[t3(430)](i3);
      }
      delete a2[r2];
    }
  }
  uncacheRoot(e17) {
    let t3 = e17.uuid, n2 = this._actionsByClip;
    for (let e18 in n2) {
      let r3 = n2[e18].actionByRoot[t3];
      r3 !== void 0 && (this._deactivateAction(r3), this._removeInactiveAction(r3));
    }
    let r2 = this._bindingsByRootAndName[t3];
    if (r2 !== void 0) for (let e18 in r2) {
      let t4 = r2[e18];
      t4.restoreOriginalState(), this._removeInactiveBinding(t4);
    }
  }
  uncacheAction(e17, t3) {
    let n2 = i, r2 = this[n2(881)](e17, t3);
    r2 !== null && (this._deactivateAction(r2), this._removeInactiveAction(r2));
  }
}, nc = class {
  constructor(e17 = 1, t3 = 0, n2 = 0) {
    this.radius = e17, this.phi = t3, this.theta = n2;
  }
  set(e17, t3, n2) {
    let r2 = i;
    return this.radius = e17, this[r2(1485)] = t3, this[r2(442)] = n2, this;
  }
  copy(e17) {
    let t3 = i;
    return this.radius = e17.radius, this.phi = e17[t3(1485)], this.theta = e17.theta, this;
  }
  makeSafe() {
    let e17 = 1e-6;
    return this.phi = V(this.phi, e17, Math.PI - e17), this;
  }
  [i(772)](e17) {
    return this.setFromCartesianCoords(e17.x, e17.y, e17.z);
  }
  setFromCartesianCoords(e17, t3, n2) {
    let r2 = i;
    return this.radius = Math.sqrt(e17 * e17 + t3 * t3 + n2 * n2), this[r2(816)] === 0 ? (this.theta = 0, this.phi = 0) : (this[r2(442)] = Math[r2(1348)](e17, n2), this.phi = Math.acos(V(t3 / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
u = class {
  constructor(e17, t3, n2, r2) {
    this.elements = [1, 0, 0, 1], e17 !== void 0 && this.set(e17, t3, n2, r2);
  }
  identity() {
    let e17 = i;
    return this[e17(1139)](1, 0, 0, 1), this;
  }
  fromArray(e17, t3 = 0) {
    let n2 = i;
    for (let r2 = 0; r2 < 4; r2++) this[n2(992)][r2] = e17[r2 + t3];
    return this;
  }
  set(e17, t3, n2, r2) {
    let i2 = this.elements;
    return i2[0] = e17, i2[2] = t3, i2[1] = n2, i2[3] = r2, this;
  }
}, u.prototype.isMatrix2 = true;
var rc = class extends ua {
  constructor(e17 = 10, t3 = 10, n2 = 4473924, r2 = 8947848) {
    let a2 = i;
    n2 = new Y(n2), r2 = new Y(r2);
    let o2 = t3 / 2, s2 = e17 / t3, c2 = e17 / 2, l2 = [], u2 = [];
    for (let e18 = 0, i2 = 0, d3 = -c2; e18 <= t3; e18++, d3 += s2) {
      l2.push(-c2, 0, d3, c2, 0, d3), l2.push(d3, 0, -c2, d3, 0, c2);
      let t4 = e18 === o2 ? n2 : r2;
      t4[a2(1263)](u2, i2), i2 += 3, t4[a2(1263)](u2, i2), i2 += 3, t4[a2(1263)](u2, i2), i2 += 3, t4.toArray(u2, i2), i2 += 3;
    }
    let d2 = new Gr();
    d2.setAttribute(a2(1477), new X(l2, 3)), d2.setAttribute(`color`, new X(u2, 3));
    let f2 = new Qi({ vertexColors: true, toneMapped: false });
    super(d2, f2), this.type = `GridHelper`;
  }
  [i(254)]() {
    let e17 = i;
    this[e17(641)].dispose(), this.material.dispose();
  }
}, ic = class extends ua {
  constructor(e17 = 1) {
    let t3 = [0, 0, 0, e17, 0, 0, 0, 0, 0, 0, e17, 0, 0, 0, 0, 0, 0, e17], n2 = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], r2 = new Gr();
    r2.setAttribute(`position`, new X(t3, 3)), r2.setAttribute(`color`, new X(n2, 3));
    let i2 = new Qi({ vertexColors: true, toneMapped: false });
    super(r2, i2), this.type = `AxesHelper`;
  }
  setColors(e17, t3, n2) {
    let r2 = i, a2 = new Y(), o2 = this[r2(641)].attributes.color.array;
    return a2.set(e17), a2.toArray(o2, 0), a2[r2(1263)](o2, 3), a2[r2(1139)](t3), a2.toArray(o2, 6), a2.toArray(o2, 9), a2.set(n2), a2.toArray(o2, 12), a2.toArray(o2, 15), this.geometry.attributes.color.needsUpdate = true, this;
  }
  dispose() {
    let e17 = i;
    this.geometry.dispose(), this[e17(849)].dispose();
  }
}, ac = class extends St {
  constructor(e17, t3 = null) {
    let n2 = i;
    super(), this.object = e17, this.domElement = t3, this.enabled = true, this.state = -1, this.keys = {}, this[n2(1285)] = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(e17) {
    let t3 = i;
    if (e17 === void 0) {
      z(t3(685));
      return;
    }
    this[t3(802)] !== null && this.disconnect(), this.domElement = e17;
  }
  disconnect() {
  }
  dispose() {
  }
  [i(997)]() {
  }
};
function oc(e17, t3, n2, r2) {
  let a2 = i, o2 = sc(r2);
  switch (n2) {
    case oe:
      return e17 * t3;
    case ue:
      return e17 * t3 / o2.components * o2.byteLength;
    case de:
      return e17 * t3 / o2.components * o2[a2(936)];
    case P:
      return e17 * t3 * 2 / o2.components * o2[a2(936)];
    case fe:
      return e17 * t3 * 2 / o2.components * o2.byteLength;
    case se:
      return e17 * t3 * 3 / o2.components * o2.byteLength;
    case N:
      return e17 * t3 * 4 / o2.components * o2.byteLength;
    case pe:
      return e17 * t3 * 4 / o2.components * o2.byteLength;
    case me:
    case he:
      return Math.floor((e17 + 3) / 4) * Math.floor((t3 + 3) / 4) * 8;
    case ge:
    case _e:
      return Math.floor((e17 + 3) / 4) * Math.floor((t3 + 3) / 4) * 16;
    case ye:
    case xe:
      return Math.max(e17, 16) * Math[a2(1023)](t3, 8) / 4;
    case ve:
    case be:
      return Math[a2(1023)](e17, 8) * Math.max(t3, 8) / 2;
    case Se:
    case Ce:
    case Te:
    case Ee:
      return Math.floor((e17 + 3) / 4) * Math.floor((t3 + 3) / 4) * 8;
    case we:
    case De:
    case Oe:
      return Math.floor((e17 + 3) / 4) * Math[a2(425)]((t3 + 3) / 4) * 16;
    case ke:
      return Math.floor((e17 + 3) / 4) * Math.floor((t3 + 3) / 4) * 16;
    case Ae:
      return Math.floor((e17 + 4) / 5) * Math.floor((t3 + 3) / 4) * 16;
    case je:
      return Math.floor((e17 + 4) / 5) * Math.floor((t3 + 4) / 5) * 16;
    case Me:
      return Math.floor((e17 + 5) / 6) * Math.floor((t3 + 4) / 5) * 16;
    case Ne:
      return Math.floor((e17 + 5) / 6) * Math.floor((t3 + 5) / 6) * 16;
    case F:
      return Math.floor((e17 + 7) / 8) * Math[a2(425)]((t3 + 4) / 5) * 16;
    case Pe:
      return Math.floor((e17 + 7) / 8) * Math[a2(425)]((t3 + 5) / 6) * 16;
    case Fe:
      return Math.floor((e17 + 7) / 8) * Math.floor((t3 + 7) / 8) * 16;
    case Ie:
      return Math.floor((e17 + 9) / 10) * Math.floor((t3 + 4) / 5) * 16;
    case I:
      return Math.floor((e17 + 9) / 10) * Math[a2(425)]((t3 + 5) / 6) * 16;
    case Le:
      return Math.floor((e17 + 9) / 10) * Math[a2(425)]((t3 + 7) / 8) * 16;
    case L:
      return Math.floor((e17 + 9) / 10) * Math[a2(425)]((t3 + 9) / 10) * 16;
    case R:
      return Math.floor((e17 + 11) / 12) * Math.floor((t3 + 9) / 10) * 16;
    case Re:
      return Math.floor((e17 + 11) / 12) * Math.floor((t3 + 11) / 12) * 16;
    case ze:
    case Be:
    case Ve:
      return Math.ceil(e17 / 4) * Math.ceil(t3 / 4) * 16;
    case He:
    case Ue:
      return Math.ceil(e17 / 4) * Math[a2(182)](t3 / 4) * 8;
    case We:
    case Ge:
      return Math[a2(182)](e17 / 4) * Math.ceil(t3 / 4) * 16;
  }
  throw Error(a2(637) + n2 + a2(1013));
}
function sc(e17) {
  switch (e17) {
    case E:
    case D:
      return { byteLength: 1, components: 1 };
    case k:
    case O:
    case te:
      return { byteLength: 2, components: 1 };
    case ne:
    case M:
      return { byteLength: 2, components: 4 };
    case ee:
    case A:
    case j:
      return { byteLength: 4, components: 1 };
    case ie:
    case ae:
      return { byteLength: 4, components: 3 };
  }
  throw Error(`Unknown texture type ` + e17 + `.`);
}
typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`, { detail: { revision: `184` } })), typeof window < `u` && (window[i(740)] ? z(i(940)) : window.__THREE__ = i(397)), n();
function cc() {
  let e17 = null, t3 = false, n2 = null, r2 = null;
  function i2(t4, a2) {
    n2(t4, a2), r2 = e17.requestAnimationFrame(i2);
  }
  return { start: function() {
    t3 !== true && n2 !== null && e17 !== null && (r2 = e17[$(472)](i2), t3 = true);
  }, stop: function() {
    e17 !== null && e17[$(622)](r2), t3 = false;
  }, setAnimationLoop: function(e18) {
    n2 = e18;
  }, setContext: function(t4) {
    e17 = t4;
  } };
}
function lc(e17) {
  let t3 = /* @__PURE__ */ new WeakMap();
  function n2(t4, n3) {
    let r3 = $, i3 = t4.array, a3 = t4.usage, o3 = i3.byteLength, s2 = e17.createBuffer();
    e17.bindBuffer(n3, s2), e17.bufferData(n3, i3, a3), t4.onUploadCallback();
    let c2;
    if (i3 instanceof Float32Array) c2 = e17.FLOAT;
    else if (typeof Float16Array < `u` && i3 instanceof Float16Array) c2 = e17.HALF_FLOAT;
    else if (i3 instanceof Uint16Array) c2 = t4.isFloat16BufferAttribute ? e17.HALF_FLOAT : e17.UNSIGNED_SHORT;
    else if (i3 instanceof Int16Array) c2 = e17.SHORT;
    else if (i3 instanceof Uint32Array) c2 = e17[r3(184)];
    else if (i3 instanceof Int32Array) c2 = e17.INT;
    else if (i3 instanceof Int8Array) c2 = e17.BYTE;
    else if (i3 instanceof Uint8Array) c2 = e17.UNSIGNED_BYTE;
    else if (i3 instanceof Uint8ClampedArray) c2 = e17.UNSIGNED_BYTE;
    else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: ` + i3);
    return { buffer: s2, type: c2, bytesPerElement: i3[r3(1211)], version: t4.version, size: o3 };
  }
  function r2(t4, n3, r3) {
    let i3 = $, a3 = n3.array, o3 = n3[i3(1503)];
    if (e17.bindBuffer(r3, t4), o3.length === 0) e17.bufferSubData(r3, 0, a3);
    else {
      o3[i3(334)]((e18, t6) => e18[i3(392)] - t6.start);
      let t5 = 0;
      for (let e18 = 1; e18 < o3.length; e18++) {
        let n4 = o3[t5], r4 = o3[e18];
        r4.start <= n4[i3(392)] + n4.count + 1 ? n4[i3(1414)] = Math.max(n4[i3(1414)], r4.start + r4.count - n4.start) : (++t5, o3[t5] = r4);
      }
      o3.length = t5 + 1;
      for (let t6 = 0, n4 = o3.length; t6 < n4; t6++) {
        let n5 = o3[t6];
        e17.bufferSubData(r3, n5.start * a3[i3(1211)], a3, n5.start, n5.count);
      }
      n3.clearUpdateRanges();
    }
    n3.onUploadCallback();
  }
  function i2(e18) {
    return e18.isInterleavedBufferAttribute && (e18 = e18.data), t3.get(e18);
  }
  function a2(n3) {
    let r3 = $;
    n3.isInterleavedBufferAttribute && (n3 = n3.data);
    let i3 = t3.get(n3);
    i3 && (e17.deleteBuffer(i3[r3(918)]), t3.delete(n3));
  }
  function o2(e18, i3) {
    let a3 = $;
    if (e18.isInterleavedBufferAttribute && (e18 = e18[a3(1304)]), e18[a3(899)]) {
      let n3 = t3.get(e18);
      (!n3 || n3.version < e18.version) && t3.set(e18, { buffer: e18.buffer, type: e18[a3(1112)], bytesPerElement: e18.elementSize, version: e18.version });
      return;
    }
    let o3 = t3.get(e18);
    if (o3 === void 0) t3.set(e18, n2(e18, i3));
    else if (o3.version < e18.version) {
      if (o3.size !== e18.array.byteLength) throw Error(a3(835));
      r2(o3.buffer, e18, i3), o3[a3(235)] = e18.version;
    }
  }
  return { get: i2, remove: a2, update: o2 };
}
var Z = { alphahash_fragment: i(962), alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, alphamap_fragment: i(1386), alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, clipping_planes_pars_fragment: i(1264), clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, color_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, color_pars_fragment: i(1465), color_pars_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, color_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, cube_uv_reflection_fragment: `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, displacementmap_vertex: i(1252), emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, colorspace_fragment: `gl_FragColor = linearToOutputTexel( gl_FragColor );`, colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, envmap_vertex: i(204), fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, lights_lambert_pars_fragment: i(1439), lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`, lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, lights_fragment_begin: i(1035), lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, lightprobes_pars_fragment: `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`, logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, logdepthbuf_vertex: i(1363), map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, map_pars_fragment: i(785), map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, metalnessmap_fragment: i(1080), metalnessmap_pars_fragment: i(360), morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, normal_vertex: i(454), normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, clearcoat_normal_fragment_begin: i(609), clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, opaque_fragment: i(904), packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, shadowmap_vertex: i(1357), shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, specularmap_fragment: i(717), specularmap_pars_fragment: i(1480), tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, transmission_fragment: i(845), transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, background_frag: i(1384), backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, backgroundCube_frag: `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, distance_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, distance_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, equirect_frag: i(941), linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, meshbasic_frag: i(644), meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, meshnormal_frag: i(708), meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, meshtoon_vert: i(1086), meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}` }, Q = { common: { diffuse: { value: new Y(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new G() }, alphaMap: { value: null }, alphaMapTransform: { value: new G() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new G() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new G() }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new G() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new G() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new G() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new G() }, normalScale: { value: new U(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new G() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new G() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new G() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new G() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Y(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null }, probesSH: { value: null }, probesMin: { value: new W() }, probesMax: { value: new W() }, probesResolution: { value: new W() } }, points: { diffuse: { value: new Y(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new G() }, alphaTest: { value: 0 }, uvTransform: { value: new G() } }, sprite: { diffuse: { value: new Y(16777215) }, opacity: { value: 1 }, center: { value: new U(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new G() }, alphaMap: { value: null }, alphaMapTransform: { value: new G() }, alphaTest: { value: 0 } } }, uc = { basic: { uniforms: ho([Q.common, Q.specularmap, Q.envmap, Q[i(684)], Q[i(1507)], Q.fog]), vertexShader: Z.meshbasic_vert, fragmentShader: Z[i(1240)] }, lambert: { uniforms: ho([Q.common, Q.specularmap, Q[i(451)], Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.fog, Q.lights, { emissive: { value: new Y(0) }, envMapIntensity: { value: 1 } }]), vertexShader: Z.meshlambert_vert, fragmentShader: Z[i(583)] }, phong: { uniforms: ho([Q[i(1130)], Q.specularmap, Q.envmap, Q[i(684)], Q.lightmap, Q.emissivemap, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.fog, Q.lights, { emissive: { value: new Y(0) }, specular: { value: new Y(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: Z.meshphong_vert, fragmentShader: Z.meshphong_frag }, standard: { uniforms: ho([Q.common, Q.envmap, Q.aomap, Q.lightmap, Q.emissivemap, Q[i(1497)], Q.normalmap, Q.displacementmap, Q.roughnessmap, Q[i(1370)], Q[i(240)], Q.lights, { emissive: { value: new Y(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Z[i(499)], fragmentShader: Z[i(846)] }, toon: { uniforms: ho([Q[i(1130)], Q.aomap, Q.lightmap, Q.emissivemap, Q.bumpmap, Q[i(1404)], Q.displacementmap, Q.gradientmap, Q[i(240)], Q.lights, { emissive: { value: new Y(0) } }]), vertexShader: Z.meshtoon_vert, fragmentShader: Z.meshtoon_frag }, matcap: { uniforms: ho([Q.common, Q.bumpmap, Q.normalmap, Q.displacementmap, Q.fog, { matcap: { value: null } }]), vertexShader: Z.meshmatcap_vert, fragmentShader: Z.meshmatcap_frag }, points: { uniforms: ho([Q.points, Q.fog]), vertexShader: Z.points_vert, fragmentShader: Z.points_frag }, dashed: { uniforms: ho([Q.common, Q.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Z.linedashed_vert, fragmentShader: Z.linedashed_frag }, depth: { uniforms: ho([Q.common, Q.displacementmap]), vertexShader: Z[i(1168)], fragmentShader: Z.depth_frag }, normal: { uniforms: ho([Q.common, Q.bumpmap, Q.normalmap, Q.displacementmap, { opacity: { value: 1 } }]), vertexShader: Z[i(1131)], fragmentShader: Z.meshnormal_frag }, sprite: { uniforms: ho([Q[i(269)], Q.fog]), vertexShader: Z.sprite_vert, fragmentShader: Z.sprite_frag }, background: { uniforms: { uvTransform: { value: new G() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Z.background_vert, fragmentShader: Z.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new G() } }, vertexShader: Z.backgroundCube_vert, fragmentShader: Z.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Z.cube_vert, fragmentShader: Z[i(600)] }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Z.equirect_vert, fragmentShader: Z[i(942)] }, distance: { uniforms: ho([Q.common, Q.displacementmap, { referencePosition: { value: new W() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Z.distance_vert, fragmentShader: Z.distance_frag }, shadow: { uniforms: ho([Q.lights, Q.fog, { color: { value: new Y(0) }, opacity: { value: 1 } }]), vertexShader: Z[i(366)], fragmentShader: Z.shadow_frag } };
uc.physical = { uniforms: ho([uc.standard[i(606)], { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new G() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new G() }, clearcoatNormalScale: { value: new U(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new G() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new G() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new G() }, sheen: { value: 0 }, sheenColor: { value: new Y(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new G() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new G() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new G() }, transmissionSamplerSize: { value: new U() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new G() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Y(0) }, specularColor: { value: new Y(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new G() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new G() }, anisotropyVector: { value: new U() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new G() } }]), vertexShader: Z.meshphysical_vert, fragmentShader: Z.meshphysical_frag };
var dc = { r: 0, b: 0, g: 0 }, fc = new J(), pc = new G();
pc.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function mc(e17, t3, n2, r2, i2, a2) {
  let o2 = new Y(0), s2 = i2 === true ? 0 : 1, c2, l2, u2 = null, d2 = 0, f2 = null;
  function p2(e18) {
    let n3 = $, r3 = e18[n3(1053)] === true ? e18.background : null;
    if (r3 && r3.isTexture) {
      let i3 = e18[n3(1172)] > 0;
      r3 = t3.get(r3, i3);
    }
    return r3;
  }
  function m2(t4) {
    let r3 = $, i3 = false, c3 = p2(t4);
    c3 === null ? g2(o2, s2) : c3 && c3.isColor && (g2(c3, 1), i3 = true);
    let l3 = e17.xr.getEnvironmentBlendMode();
    l3 === r3(361) ? n2.buffers.color[r3(502)](0, 0, 0, 1, a2) : l3 === r3(282) && n2[r3(1447)].color.setClear(0, 0, 0, 0, a2), (e17[r3(584)] || i3) && (n2.buffers[r3(379)].setTest(true), n2.buffers.depth[r3(1508)](true), n2.buffers.color.setMask(true), e17.clear(e17[r3(347)], e17.autoClearDepth, e17.autoClearStencil));
  }
  function h2(t4, n3) {
    let i3 = $, a3 = p2(n3);
    a3 && (a3.isCubeTexture || a3.mapping === 306) ? (l2 === void 0 && (l2 = new _i(new Ca(1, 1, 1), new So({ name: `BackgroundCubeMaterial`, uniforms: mo(uc.backgroundCube.uniforms), vertexShader: uc.backgroundCube.vertexShader, fragmentShader: uc.backgroundCube.fragmentShader, side: 1, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), l2.geometry.deleteAttribute(i3(564)), l2.geometry.deleteAttribute(`uv`), l2[i3(1450)] = function(e18, t5, n4) {
      let r3 = i3;
      this.matrixWorld[r3(383)](n4.matrixWorld);
    }, Object.defineProperty(l2.material, "envMap", { get: function() {
      let e18 = i3;
      return this.uniforms[e18(195)][e18(895)];
    } }), r2.update(l2)), l2[i3(849)].uniforms.envMap.value = a3, l2.material.uniforms.backgroundBlurriness.value = n3.backgroundBlurriness, l2.material[i3(606)].backgroundIntensity.value = n3.backgroundIntensity, l2[i3(849)].uniforms.backgroundRotation.value[i3(370)](fc.makeRotationFromEuler(n3.backgroundRotation))[i3(925)](), a3.isCubeTexture && a3.isRenderTargetTexture === false && l2.material.uniforms.backgroundRotation.value.premultiply(pc), l2[i3(849)].toneMapped = K.getTransfer(a3.colorSpace) !== st, (u2 !== a3 || d2 !== a3.version || f2 !== e17.toneMapping) && (l2.material.needsUpdate = true, u2 = a3, d2 = a3.version, f2 = e17.toneMapping), l2[i3(464)].enableAll(), t4.unshift(l2, l2.geometry, l2.material, 0, 0, null)) : a3 && a3.isTexture && (c2 === void 0 && (c2 = new _i(new fo(2, 2), new So({ name: `BackgroundMaterial`, uniforms: mo(uc.background.uniforms), vertexShader: uc.background.vertexShader, fragmentShader: uc.background.fragmentShader, side: 0, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), c2.geometry.deleteAttribute(`normal`), Object.defineProperty(c2.material, "map", { get: function() {
      let e18 = i3;
      return this.uniforms[e18(1147)].value;
    } }), r2[i3(997)](c2)), c2.material.uniforms.t2D.value = a3, c2.material[i3(606)][i3(754)].value = n3.backgroundIntensity, c2.material.toneMapped = K.getTransfer(a3.colorSpace) !== st, a3[i3(875)] === true && a3.updateMatrix(), c2.material.uniforms[i3(301)].value.copy(a3.matrix), (u2 !== a3 || d2 !== a3[i3(235)] || f2 !== e17[i3(876)]) && (c2.material[i3(318)] = true, u2 = a3, d2 = a3.version, f2 = e17.toneMapping), c2.layers.enableAll(), t4.unshift(c2, c2.geometry, c2.material, 0, 0, null));
  }
  function g2(t4, r3) {
    let i3 = $;
    t4.getRGB(dc, vo(e17)), n2.buffers.color[i3(502)](dc.r, dc.g, dc.b, r3, a2);
  }
  function _2() {
    let e18 = $;
    l2 !== void 0 && (l2.geometry[e18(254)](), l2.material.dispose(), l2 = void 0), c2 !== void 0 && (c2.geometry.dispose(), c2.material.dispose(), c2 = void 0);
  }
  return { getClearColor: function() {
    return o2;
  }, setClearColor: function(e18, t4 = 1) {
    o2.set(e18), s2 = t4, g2(o2, s2);
  }, getClearAlpha: function() {
    return s2;
  }, setClearAlpha: function(e18) {
    s2 = e18, g2(o2, s2);
  }, render: m2, addToRenderList: h2, dispose: _2 };
}
function hc(e17, t3) {
  let n2 = e17.getParameter(e17.MAX_VERTEX_ATTRIBS), r2 = {}, i2 = f2(null), a2 = i2, o2 = false;
  function s2(n3, r3, i3, s3, c3) {
    let u3 = $, f3 = false, h3 = d2(n3, s3, i3, r3);
    a2 !== h3 && (a2 = h3, l2(a2.object)), f3 = p2(n3, s3, i3, c3), f3 && m2(n3, s3, i3, c3), c3 !== null && t3.update(c3, e17.ELEMENT_ARRAY_BUFFER), (f3 || o2) && (o2 = false, b2(n3, r3, i3, s3), c3 !== null && e17.bindBuffer(e17[u3(605)], t3.get(c3)[u3(918)]));
  }
  function c2() {
    return e17.createVertexArray();
  }
  function l2(t4) {
    return e17.bindVertexArray(t4);
  }
  function u2(t4) {
    return e17.deleteVertexArray(t4);
  }
  function d2(e18, t4, n3, i3) {
    let a3 = $, o3 = i3.wireframe === true, s3 = r2[t4.id];
    s3 === void 0 && (s3 = {}, r2[t4.id] = s3);
    let l3 = e18[a3(1360)] === true ? e18.id : 0, u3 = s3[l3];
    u3 === void 0 && (u3 = {}, s3[l3] = u3);
    let d3 = u3[n3.id];
    d3 === void 0 && (d3 = {}, u3[n3.id] = d3);
    let p3 = d3[o3];
    return p3 === void 0 && (p3 = f2(c2()), d3[o3] = p3), p3;
  }
  function f2(e18) {
    let t4 = [], r3 = [], i3 = [];
    for (let e19 = 0; e19 < n2; e19++) t4[e19] = 0, r3[e19] = 0, i3[e19] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: t4, enabledAttributes: r3, attributeDivisors: i3, object: e18, attributes: {}, index: null };
  }
  function p2(e18, t4, n3, r3) {
    let i3 = $, o3 = a2.attributes, s3 = t4[i3(1106)], c3 = 0, l3 = n3.getAttributes();
    for (let t5 in l3) if (l3[t5].location >= 0) {
      let n4 = o3[t5], r4 = s3[t5];
      if (r4 === void 0 && (t5 === `instanceMatrix` && e18.instanceMatrix && (r4 = e18.instanceMatrix), t5 === `instanceColor` && e18.instanceColor && (r4 = e18[i3(887)])), n4 === void 0 || n4.attribute !== r4 || r4 && n4.data !== r4[i3(1304)]) return true;
      c3++;
    }
    return a2.attributesNum !== c3 || a2.index !== r3;
  }
  function m2(e18, t4, n3, r3) {
    let i3 = $, o3 = {}, s3 = t4[i3(1106)], c3 = 0, l3 = n3.getAttributes();
    for (let t5 in l3) if (l3[t5].location >= 0) {
      let n4 = s3[t5];
      n4 === void 0 && (t5 === i3(704) && e18.instanceMatrix && (n4 = e18[i3(704)]), t5 === i3(887) && e18.instanceColor && (n4 = e18.instanceColor));
      let r4 = {};
      r4.attribute = n4, n4 && n4.data && (r4.data = n4.data), o3[t5] = r4, c3++;
    }
    a2.attributes = o3, a2.attributesNum = c3, a2.index = r3;
  }
  function h2() {
    let e18 = a2.newAttributes;
    for (let t4 = 0, n3 = e18.length; t4 < n3; t4++) e18[t4] = 0;
  }
  function g2(e18) {
    _2(e18, 0);
  }
  function _2(t4, n3) {
    let r3 = $, i3 = a2.newAttributes, o3 = a2[r3(919)], s3 = a2[r3(1498)];
    i3[t4] = 1, o3[t4] === 0 && (e17.enableVertexAttribArray(t4), o3[t4] = 1), s3[t4] !== n3 && (e17.vertexAttribDivisor(t4, n3), s3[t4] = n3);
  }
  function v2() {
    let t4 = $, n3 = a2.newAttributes, r3 = a2[t4(919)];
    for (let t5 = 0, i3 = r3.length; t5 < i3; t5++) r3[t5] !== n3[t5] && (e17.disableVertexAttribArray(t5), r3[t5] = 0);
  }
  function y2(t4, n3, r3, i3, a3, o3, s3) {
    s3 === true ? e17.vertexAttribIPointer(t4, n3, r3, a3, o3) : e17.vertexAttribPointer(t4, n3, r3, i3, a3, o3);
  }
  function b2(n3, r3, i3, a3) {
    let o3 = $;
    h2();
    let s3 = a3[o3(1106)], c3 = i3.getAttributes(), l3 = r3.defaultAttributeValues;
    for (let r4 in c3) {
      let i4 = c3[r4];
      if (i4[o3(435)] >= 0) {
        let c4 = s3[r4];
        if (c4 === void 0 && (r4 === `instanceMatrix` && n3[o3(704)] && (c4 = n3.instanceMatrix), r4 === `instanceColor` && n3.instanceColor && (c4 = n3.instanceColor)), c4 !== void 0) {
          let r5 = c4[o3(1393)], s4 = c4.itemSize, l4 = t3[o3(859)](c4);
          if (l4 === void 0) continue;
          let u3 = l4[o3(918)], d3 = l4.type, f3 = l4.bytesPerElement, p3 = d3 === e17.INT || d3 === e17.UNSIGNED_INT || c4.gpuType === 1013;
          if (c4.isInterleavedBufferAttribute) {
            let t4 = c4.data, l5 = t4.stride, m3 = c4.offset;
            if (t4[o3(967)]) {
              for (let e18 = 0; e18 < i4.locationSize; e18++) _2(i4.location + e18, t4.meshPerAttribute);
              n3.isInstancedMesh !== true && a3._maxInstanceCount === void 0 && (a3[o3(368)] = t4[o3(468)] * t4.count);
            } else for (let e18 = 0; e18 < i4.locationSize; e18++) g2(i4.location + e18);
            e17.bindBuffer(e17.ARRAY_BUFFER, u3);
            for (let e18 = 0; e18 < i4[o3(1217)]; e18++) y2(i4.location + e18, s4 / i4.locationSize, d3, r5, l5 * f3, (m3 + s4 / i4[o3(1217)] * e18) * f3, p3);
          } else {
            if (c4.isInstancedBufferAttribute) {
              for (let e18 = 0; e18 < i4.locationSize; e18++) _2(i4[o3(435)] + e18, c4.meshPerAttribute);
              n3[o3(1360)] !== true && a3._maxInstanceCount === void 0 && (a3._maxInstanceCount = c4.meshPerAttribute * c4.count);
            } else for (let e18 = 0; e18 < i4.locationSize; e18++) g2(i4[o3(435)] + e18);
            e17[o3(799)](e17.ARRAY_BUFFER, u3);
            for (let e18 = 0; e18 < i4.locationSize; e18++) y2(i4.location + e18, s4 / i4.locationSize, d3, r5, s4 * f3, s4 / i4.locationSize * e18 * f3, p3);
          }
        } else if (l3 !== void 0) {
          let t4 = l3[r4];
          if (t4 !== void 0) switch (t4.length) {
            case 2:
              e17.vertexAttrib2fv(i4[o3(435)], t4);
              break;
            case 3:
              e17[o3(1033)](i4[o3(435)], t4);
              break;
            case 4:
              e17[o3(501)](i4[o3(435)], t4);
              break;
            default:
              e17.vertexAttrib1fv(i4.location, t4);
          }
        }
      }
    }
    v2();
  }
  function x2() {
    T2();
    for (let e18 in r2) {
      let t4 = r2[e18];
      for (let e19 in t4) {
        let n3 = t4[e19];
        for (let e20 in n3) {
          let t5 = n3[e20];
          for (let e21 in t5) u2(t5[e21].object), delete t5[e21];
          delete n3[e20];
        }
      }
      delete r2[e18];
    }
  }
  function S2(e18) {
    if (r2[e18.id] === void 0) return;
    let t4 = r2[e18.id];
    for (let e19 in t4) {
      let n3 = t4[e19];
      for (let e20 in n3) {
        let t5 = n3[e20];
        for (let e21 in t5) u2(t5[e21].object), delete t5[e21];
        delete n3[e20];
      }
    }
    delete r2[e18.id];
  }
  function C2(e18) {
    for (let t4 in r2) {
      let n3 = r2[t4];
      for (let t5 in n3) {
        let r3 = n3[t5];
        if (r3[e18.id] === void 0) continue;
        let i3 = r3[e18.id];
        for (let e19 in i3) u2(i3[e19].object), delete i3[e19];
        delete r3[e18.id];
      }
    }
  }
  function w2(e18) {
    for (let t4 in r2) {
      let n3 = r2[t4], i3 = e18.isInstancedMesh === true ? e18.id : 0, a3 = n3[i3];
      if (a3 !== void 0) {
        for (let e19 in a3) {
          let t5 = a3[e19];
          for (let e20 in t5) u2(t5[e20].object), delete t5[e20];
          delete a3[e19];
        }
        delete n3[i3], Object.keys(n3).length === 0 && delete r2[t4];
      }
    }
  }
  function T2() {
    E2(), o2 = true, a2 !== i2 && (a2 = i2, l2(a2.object));
  }
  function E2() {
    i2.geometry = null, i2.program = null, i2.wireframe = false;
  }
  return { setup: s2, reset: T2, resetDefaultState: E2, dispose: x2, releaseStatesOfGeometry: S2, releaseStatesOfObject: w2, releaseStatesOfProgram: C2, initAttributes: h2, enableAttribute: g2, disableUnusedAttributes: v2 };
}
function gc(e17, t3, n2) {
  let r2;
  function i2(e18) {
    r2 = e18;
  }
  function a2(t4, i3) {
    e17.drawArrays(r2, t4, i3), n2.update(i3, r2, 1);
  }
  function o2(t4, i3, a3) {
    a3 !== 0 && (e17.drawArraysInstanced(r2, t4, i3, a3), n2.update(i3, r2, a3));
  }
  function s2(e18, i3, a3) {
    let o3 = $;
    if (a3 === 0) return;
    t3[o3(859)](`WEBGL_multi_draw`).multiDrawArraysWEBGL(r2, e18, 0, i3, 0, a3);
    let s3 = 0;
    for (let e19 = 0; e19 < a3; e19++) s3 += i3[e19];
    n2.update(s3, r2, 1);
  }
  this.setMode = i2, this.render = a2, this.renderInstances = o2, this.renderMultiDraw = s2;
}
function _c(e17, t3, n2, r2) {
  let a2 = i, o2;
  function s2() {
    let n3 = $;
    if (o2 !== void 0) return o2;
    if (t3.has(`EXT_texture_filter_anisotropic`) === true) {
      let r3 = t3[n3(859)](`EXT_texture_filter_anisotropic`);
      o2 = e17[n3(1004)](r3[n3(539)]);
    } else o2 = 0;
    return o2;
  }
  function c2(t4) {
    let n3 = $;
    return !(t4 !== 1023 && r2.convert(t4) !== e17[n3(1004)](e17.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function l2(n3) {
    let i2 = $, a3 = n3 === 1016 && (t3.has(`EXT_color_buffer_half_float`) || t3.has(`EXT_color_buffer_float`));
    return !(n3 !== 1009 && r2[i2(1073)](n3) !== e17.getParameter(e17.IMPLEMENTATION_COLOR_READ_TYPE) && n3 !== 1015 && !a3);
  }
  function u2(t4) {
    let n3 = $;
    if (t4 === `highp`) {
      if (e17.getShaderPrecisionFormat(e17.VERTEX_SHADER, e17[n3(608)]).precision > 0 && e17.getShaderPrecisionFormat(e17.FRAGMENT_SHADER, e17[n3(608)])[n3(1181)] > 0) return `highp`;
      t4 = `mediump`;
    }
    return t4 === `mediump` && e17.getShaderPrecisionFormat(e17.VERTEX_SHADER, e17.MEDIUM_FLOAT).precision > 0 && e17.getShaderPrecisionFormat(e17.FRAGMENT_SHADER, e17[n3(419)]).precision > 0 ? `mediump` : `lowp`;
  }
  let d2 = n2[a2(1181)] === void 0 ? a2(1010) : n2.precision, f2 = u2(d2);
  f2 !== d2 && (z(a2(1317), d2, `not supported, using`, f2, `instead.`), d2 = f2);
  let p2 = n2.logarithmicDepthBuffer === true, m2 = n2[a2(1482)] === true && t3.has(`EXT_clip_control`);
  n2.reversedDepthBuffer === true && m2 === false && z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);
  let h2 = e17.getParameter(e17.MAX_TEXTURE_IMAGE_UNITS), g2 = e17.getParameter(e17.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _2 = e17.getParameter(e17[a2(723)]), v2 = e17.getParameter(e17.MAX_CUBE_MAP_TEXTURE_SIZE), y2 = e17.getParameter(e17.MAX_VERTEX_ATTRIBS), b2 = e17[a2(1004)](e17[a2(1400)]), x2 = e17.getParameter(e17.MAX_VARYING_VECTORS), S2 = e17.getParameter(e17.MAX_FRAGMENT_UNIFORM_VECTORS), C2 = e17.getParameter(e17.MAX_SAMPLES), w2 = e17[a2(1004)](e17.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s2, getMaxPrecision: u2, textureFormatReadable: c2, textureTypeReadable: l2, precision: d2, logarithmicDepthBuffer: p2, reversedDepthBuffer: m2, maxTextures: h2, maxVertexTextures: g2, maxTextureSize: _2, maxCubemapSize: v2, maxAttributes: y2, maxVertexUniforms: b2, maxVaryings: x2, maxFragmentUniforms: S2, maxSamples: C2, samples: w2 };
}
function vc(e17) {
  let t3 = this, n2 = null, r2 = 0, i2 = false, a2 = false, o2 = new qi(), s2 = new G(), c2 = { value: null, needsUpdate: false };
  this.uniform = c2, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e18, t4) {
    let n3 = e18.length !== 0 || t4 || r2 !== 0 || i2;
    return i2 = t4, r2 = e18.length, n3;
  }, this.beginShadows = function() {
    a2 = true, u2(null);
  }, this.endShadows = function() {
    a2 = false;
  }, this.setGlobalState = function(e18, t4) {
    n2 = u2(e18, t4, 0);
  }, this.setState = function(t4, o3, s3) {
    let d2 = $, f2 = t4.clippingPlanes, p2 = t4.clipIntersection, m2 = t4[d2(1150)], h2 = e17.get(t4);
    if (!i2 || f2 === null || f2.length === 0 || a2 && !m2) a2 ? u2(null) : l2();
    else {
      let e18 = a2 ? 0 : r2, t5 = e18 * 4, i3 = h2.clippingState || null;
      c2.value = i3, i3 = u2(f2, o3, t5, s3);
      for (let e19 = 0; e19 !== t5; ++e19) i3[e19] = n2[e19];
      h2.clippingState = i3, this.numIntersection = p2 ? this.numPlanes : 0, this.numPlanes += e18;
    }
  };
  function l2() {
    let e18 = $;
    c2.value !== n2 && (c2[e18(895)] = n2, c2.needsUpdate = r2 > 0), t3.numPlanes = r2, t3.numIntersection = 0;
  }
  function u2(e18, n3, r3, i3) {
    let a3 = $, l3 = e18 === null ? 0 : e18.length, u3 = null;
    if (l3 !== 0) {
      if (u3 = c2.value, i3 !== true || u3 === null) {
        let t4 = r3 + l3 * 4, i4 = n3.matrixWorldInverse;
        s2.getNormalMatrix(i4), (u3 === null || u3.length < t4) && (u3 = new Float32Array(t4));
        for (let t5 = 0, n4 = r3; t5 !== l3; ++t5, n4 += 4) o2.copy(e18[t5]).applyMatrix4(i4, s2), o2.normal[a3(1263)](u3, n4), u3[n4 + 3] = o2[a3(976)];
      }
      c2.value = u3, c2.needsUpdate = true;
    }
    return t3.numPlanes = l3, t3.numIntersection = 0, u3;
  }
}
var yc = 4, bc = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], xc = 20, Sc = 256, Cc = new Es(), wc = new Y(), Tc = null, Ec = 0, Dc = 0, Oc = false, kc = new W(), Ac = class {
  constructor(e17) {
    let t3 = i;
    this._renderer = e17, this._pingPongRenderTarget = null, this[t3(189)] = 0, this._cubeSize = 0, this[t3(261)] = [], this._sigmas = [], this._lodMeshes = [], this[t3(1490)] = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(e17, t3 = 0, n2 = 0.1, r2 = 100, a2 = {}) {
    let o2 = i, { size: s2 = 256, position: c2 = kc } = a2;
    Tc = this._renderer.getRenderTarget(), Ec = this._renderer.getActiveCubeFace(), Dc = this._renderer.getActiveMipmapLevel(), Oc = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(s2);
    let l2 = this._allocateTargets();
    return l2[o2(1089)] = true, this._sceneToCubeUV(e17, n2, r2, l2, c2), t3 > 0 && this._blur(l2, 0, 0, t3), this._applyPMREM(l2), this._cleanup(l2), l2;
  }
  fromEquirectangular(e17, t3 = null) {
    return this._fromTexture(e17, t3);
  }
  fromCubemap(e17, t3 = null) {
    let n2 = i;
    return this[n2(1137)](e17, t3);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Lc(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ic(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    let e17 = i;
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this[e17(259)] !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this[e17(1490)].material.dispose());
  }
  [i(1074)](e17) {
    let t3 = i;
    this[t3(189)] = Math.floor(Math.log2(e17)), this._cubeSize = 2 ** this._lodMax;
  }
  _dispose() {
    let e17 = i;
    this._blurMaterial !== null && this[e17(532)].dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t3 = 0; t3 < this._lodMeshes.length; t3++) this[e17(1201)][t3].geometry.dispose();
  }
  _cleanup(e17) {
    let t3 = i;
    this._renderer.setRenderTarget(Tc, Ec, Dc), this._renderer.xr.enabled = Oc, e17.scissorTest = false, Nc(e17, 0, 0, e17[t3(1505)], e17[t3(221)]);
  }
  [i(1137)](e17, t3) {
    let n2 = i;
    e17.mapping === 301 || e17.mapping === 302 ? this._setSize(e17.image.length === 0 ? 16 : e17.image[0].width || e17.image[0].image.width) : this._setSize(e17[n2(495)].width / 4), Tc = this._renderer[n2(355)](), Ec = this[n2(552)].getActiveCubeFace(), Dc = this._renderer.getActiveMipmapLevel(), Oc = this._renderer.xr.enabled, this[n2(552)].xr.enabled = false;
    let r2 = t3 || this._allocateTargets();
    return this._textureToCubeUV(e17, r2), this._applyPMREM(r2), this._cleanup(r2), r2;
  }
  [i(1300)]() {
    let e17 = i, t3 = 3 * Math.max(this[e17(767)], 112), n2 = 4 * this._cubeSize, r2 = { magFilter: C, minFilter: C, generateMipmaps: false, type: te, format: N, colorSpace: at, depthBuffer: false }, a2 = Mc(t3, n2, r2);
    if (this._pingPongRenderTarget === null || this[e17(877)].width !== t3 || this._pingPongRenderTarget.height !== n2) {
      this[e17(877)] !== null && this._dispose(), this._pingPongRenderTarget = Mc(t3, n2, r2);
      let { _lodMax: i2 } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this[e17(818)] } = jc(i2)), this._blurMaterial = Fc(i2, t3, n2), this._ggxMaterial = Pc(i2, t3, n2);
    }
    return a2;
  }
  _compileMaterial(e17) {
    let t3 = i, n2 = new _i(new Gr(), e17);
    this[t3(552)].compile(n2, Cc);
  }
  [i(750)](e17, t3, n2, r2, a2) {
    let o2 = i, s2 = new xs(90, 1, t3, n2), c2 = [1, -1, 1, 1, 1, 1], l2 = [1, 1, 1, -1, -1, -1], u2 = this._renderer, d2 = u2.autoClear, f2 = u2[o2(876)];
    u2.getClearColor(wc), u2.toneMapping = 0, u2.autoClear = false, u2.state.buffers.depth.getReversed() && (u2.setRenderTarget(r2), u2.clearDepth(), u2.setRenderTarget(null)), this._backgroundBox === null && (this[o2(1490)] = new _i(new Ca(), new ai({ name: `PMREM.Background`, side: 1, depthWrite: false, depthTest: false })));
    let p2 = this._backgroundBox, m2 = p2.material, h2 = false, g2 = e17.background;
    g2 ? g2.isColor && (m2.color.copy(g2), e17.background = null, h2 = true) : (m2.color.copy(wc), h2 = true);
    for (let t4 = 0; t4 < 6; t4++) {
      let n3 = t4 % 3;
      n3 === 0 ? (s2.up.set(0, c2[t4], 0), s2.position.set(a2.x, a2.y, a2.z), s2.lookAt(a2.x + l2[t4], a2.y, a2.z)) : n3 === 1 ? (s2.up.set(0, 0, c2[t4]), s2.position[o2(1139)](a2.x, a2.y, a2.z), s2.lookAt(a2.x, a2.y + l2[t4], a2.z)) : (s2.up.set(0, c2[t4], 0), s2.position.set(a2.x, a2.y, a2.z), s2.lookAt(a2.x, a2.y, a2.z + l2[t4]));
      let i2 = this._cubeSize;
      Nc(r2, n3 * i2, t4 > 2 ? i2 : 0, i2, i2), u2.setRenderTarget(r2), h2 && u2.render(p2, s2), u2.render(e17, s2);
    }
    u2.toneMapping = f2, u2.autoClear = d2, e17.background = g2;
  }
  [i(1385)](e17, t3) {
    let n2 = i, r2 = this._renderer, a2 = e17[n2(1315)] === 301 || e17[n2(1315)] === 302;
    a2 ? (this._cubemapMaterial === null && (this._cubemapMaterial = Lc()), this._cubemapMaterial.uniforms.flipEnvMap.value = e17.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ic());
    let o2 = a2 ? this._cubemapMaterial : this[n2(259)], s2 = this._lodMeshes[0];
    s2.material = o2;
    let c2 = o2.uniforms;
    c2[n2(195)].value = e17;
    let l2 = this._cubeSize;
    Nc(t3, 0, 0, 3 * l2, 2 * l2), r2.setRenderTarget(t3), r2.render(s2, Cc);
  }
  _applyPMREM(e17) {
    let t3 = i, n2 = this._renderer, r2 = n2[t3(584)];
    n2.autoClear = false;
    let a2 = this._lodMeshes.length;
    for (let t4 = 1; t4 < a2; t4++) this._applyGGXFilter(e17, t4 - 1, t4);
    n2.autoClear = r2;
  }
  _applyGGXFilter(e17, t3, n2) {
    let r2 = i, a2 = this._renderer, o2 = this._pingPongRenderTarget, s2 = this._ggxMaterial, c2 = this._lodMeshes[n2];
    c2[r2(849)] = s2;
    let l2 = s2.uniforms, u2 = n2 / (this._lodMeshes[r2(660)] - 1), d2 = t3 / (this._lodMeshes.length - 1), f2 = Math.sqrt(u2 * u2 - d2 * d2) * (0 + u2 * 1.25), { _lodMax: p2 } = this, m2 = this._sizeLods[n2], h2 = 3 * m2 * (n2 > p2 - yc ? n2 - p2 + yc : 0), g2 = 4 * (this._cubeSize - m2);
    l2.envMap.value = e17[r2(1017)], l2.roughness[r2(895)] = f2, l2.mipInt.value = p2 - t3, Nc(o2, h2, g2, 3 * m2, 2 * m2), a2[r2(689)](o2), a2[r2(581)](c2, Cc), l2.envMap.value = o2.texture, l2.roughness[r2(895)] = 0, l2.mipInt[r2(895)] = p2 - n2, Nc(e17, h2, g2, 3 * m2, 2 * m2), a2.setRenderTarget(e17), a2.render(c2, Cc);
  }
  _blur(e17, t3, n2, r2, a2) {
    let o2 = i, s2 = this._pingPongRenderTarget;
    this._halfBlur(e17, s2, t3, n2, r2, o2(1402), a2), this[o2(477)](s2, e17, n2, n2, r2, `longitudinal`, a2);
  }
  [i(477)](e17, t3, n2, r2, a2, o2, s2) {
    let c2 = i, l2 = this._renderer, u2 = this._blurMaterial;
    o2 !== `latitudinal` && o2 !== `longitudinal` && B(c2(207));
    let d2 = this._lodMeshes[r2];
    d2.material = u2;
    let f2 = u2.uniforms, p2 = this._sizeLods[n2] - 1, m2 = isFinite(a2) ? Math.PI / (2 * p2) : 2 * Math.PI / (2 * xc - 1), h2 = a2 / m2, g2 = isFinite(a2) ? 1 + Math.floor(3 * h2) : xc;
    g2 > xc && z(`sigmaRadians, ` + a2 + `, is too large and will clip, as it requested ` + g2 + ` samples when the maximum is set to ` + xc);
    let _2 = [], v2 = 0;
    for (let e18 = 0; e18 < xc; ++e18) {
      let t4 = e18 / h2, n3 = Math.exp(-t4 * t4 / 2);
      _2[c2(1184)](n3), e18 === 0 ? v2 += n3 : e18 < g2 && (v2 += 2 * n3);
    }
    for (let e18 = 0; e18 < _2.length; e18++) _2[e18] = _2[e18] / v2;
    f2.envMap[c2(895)] = e17.texture, f2.samples[c2(895)] = g2, f2[c2(629)].value = _2, f2.latitudinal[c2(895)] = o2 === `latitudinal`, s2 && (f2.poleAxis.value = s2);
    let { _lodMax: y2 } = this;
    f2.dTheta.value = m2, f2.mipInt[c2(895)] = y2 - n2;
    let b2 = this._sizeLods[r2];
    Nc(t3, 3 * b2 * (r2 > y2 - yc ? r2 - y2 + yc : 0), 4 * (this._cubeSize - b2), 3 * b2, 2 * b2), l2.setRenderTarget(t3), l2.render(d2, Cc);
  }
};
function jc(e17) {
  let t3 = [], n2 = [], r2 = [], i2 = e17, a2 = e17 - yc + 1 + bc.length;
  for (let o2 = 0; o2 < a2; o2++) {
    let a3 = 2 ** i2;
    t3.push(a3);
    let s2 = 1 / a3;
    o2 > e17 - yc ? s2 = bc[o2 - e17 + yc - 1] : o2 === 0 && (s2 = 0), n2.push(s2);
    let c2 = 1 / (a3 - 2), l2 = -c2, u2 = 1 + c2, d2 = [l2, l2, u2, l2, u2, u2, l2, l2, u2, u2, l2, u2], f2 = new Float32Array(108), p2 = new Float32Array(72), m2 = new Float32Array(36);
    for (let e18 = 0; e18 < 6; e18++) {
      let t4 = e18 % 3 * 2 / 3 - 1, n3 = e18 > 2 ? 0 : -1, r3 = [t4, n3, 0, t4 + 2 / 3, n3, 0, t4 + 2 / 3, n3 + 1, 0, t4, n3, 0, t4 + 2 / 3, n3 + 1, 0, t4, n3 + 1, 0];
      f2.set(r3, 18 * e18), p2.set(d2, 12 * e18);
      let i3 = [e18, e18, e18, e18, e18, e18];
      m2.set(i3, 6 * e18);
    }
    let h2 = new Gr();
    h2.setAttribute(`position`, new Ar(f2, 3)), h2.setAttribute(`uv`, new Ar(p2, 2)), h2.setAttribute(`faceIndex`, new Ar(m2, 1)), r2.push(new _i(h2, null)), i2 > yc && i2--;
  }
  return { lodMeshes: r2, sizeLods: t3, sigmas: n2 };
}
function Mc(e17, t3, n2) {
  let r2 = i, a2 = new pn(e17, t3, n2);
  return a2.texture.mapping = 306, a2.texture[r2(1301)] = `PMREM.cubeUv`, a2.scissorTest = true, a2;
}
function Nc(e17, t3, n2, r2, i2) {
  e17.viewport.set(t3, n2, r2, i2), e17.scissor.set(t3, n2, r2, i2);
}
function Pc(e17, t3, n2) {
  return new So({ name: i(1188), defines: { GGX_SAMPLES: Sc, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n2, CUBEUV_MAX_MIP: e17 + `.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: Rc(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: 0, depthTest: false, depthWrite: false });
}
function Fc(e17, t3, n2) {
  let r2 = new Float32Array(xc), i2 = new W(0, 1, 0);
  return new So({ name: `SphericalGaussianBlur`, defines: { n: xc, CUBEUV_TEXEL_WIDTH: 1 / t3, CUBEUV_TEXEL_HEIGHT: 1 / n2, CUBEUV_MAX_MIP: e17 + `.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: r2 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i2 } }, vertexShader: Rc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: 0, depthTest: false, depthWrite: false });
}
function Ic() {
  return new So({ name: `EquirectangularToCubeUV`, uniforms: { envMap: { value: null } }, vertexShader: Rc(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: 0, depthTest: false, depthWrite: false });
}
function Lc() {
  let e17 = i;
  return new So({ name: e17(448), uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Rc(), fragmentShader: e17(1099), blending: 0, depthTest: false, depthWrite: false });
}
function Rc() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
var zc = class extends pn {
  constructor(e17 = 1, t3 = {}) {
    let n2 = i;
    super(e17, e17, t3), this[n2(885)] = true;
    let r2 = { width: e17, height: e17, depth: 1 }, a2 = [r2, r2, r2, r2, r2, r2];
    this.texture = new ya(a2), this._setTextureOptions(t3), this.texture[n2(1403)] = true;
  }
  fromEquirectangularTexture(e17, t3) {
    let n2 = i;
    this.texture.type = t3.type, this.texture.colorSpace = t3.colorSpace, this.texture[n2(1142)] = t3.generateMipmaps, this[n2(1017)].minFilter = t3[n2(486)], this.texture.magFilter = t3.magFilter;
    let r2 = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, a2 = new Ca(5, 5, 5), o2 = new So({ name: `CubemapFromEquirect`, uniforms: mo(r2.uniforms), vertexShader: r2.vertexShader, fragmentShader: r2.fragmentShader, side: 1, blending: 0 });
    o2[n2(606)].tEquirect.value = t3;
    let s2 = new _i(a2, o2), c2 = t3.minFilter;
    return t3.minFilter === 1008 && (t3.minFilter = 1006), new Is(1, 10, this).update(e17, s2), t3[n2(486)] = c2, s2.geometry.dispose(), s2.material.dispose(), this;
  }
  clear(e17, t3 = true, n2 = true, r2 = true) {
    let a2 = i, o2 = e17.getRenderTarget();
    for (let i2 = 0; i2 < 6; i2++) e17[a2(689)](this, i2), e17.clear(t3, n2, r2);
    e17[a2(689)](o2);
  }
};
function Bc(e17) {
  let t3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), r2 = null;
  function i2(e18, t4 = false) {
    return e18 == null ? null : t4 ? o2(e18) : a2(e18);
  }
  function a2(n3) {
    let r3 = $;
    if (n3 && n3.isTexture) {
      let i3 = n3.mapping;
      if (i3 === 303 || i3 === 304) if (t3.has(n3)) {
        let e18 = t3.get(n3).texture;
        return s2(e18, n3.mapping);
      } else {
        let i4 = n3[r3(495)];
        if (i4 && i4.height > 0) {
          let a3 = new zc(i4[r3(221)]);
          return a3.fromEquirectangularTexture(e17, n3), t3.set(n3, a3), n3.addEventListener(`dispose`, l2), s2(a3.texture, n3.mapping);
        } else return null;
      }
    }
    return n3;
  }
  function o2(t4) {
    let i3 = $;
    if (t4 && t4.isTexture) {
      let a3 = t4.mapping, o3 = a3 === 303 || a3 === 304, s3 = a3 === 301 || a3 === 302;
      if (o3 || s3) {
        let a4 = n2.get(t4), l3 = a4 === void 0 ? 0 : a4.texture.pmremVersion;
        if (t4.isRenderTargetTexture && t4.pmremVersion !== l3) return r2 === null && (r2 = new Ac(e17)), a4 = o3 ? r2.fromEquirectangular(t4, a4) : r2[i3(964)](t4, a4), a4[i3(1017)][i3(545)] = t4.pmremVersion, n2.set(t4, a4), a4.texture;
        if (a4 !== void 0) return a4[i3(1017)];
        {
          let i4 = t4.image;
          return o3 && i4 && i4.height > 0 || s3 && i4 && c2(i4) ? (r2 === null && (r2 = new Ac(e17)), a4 = o3 ? r2.fromEquirectangular(t4) : r2.fromCubemap(t4), a4.texture.pmremVersion = t4.pmremVersion, n2.set(t4, a4), t4.addEventListener(`dispose`, u2), a4.texture) : null;
        }
      }
    }
    return t4;
  }
  function s2(e18, t4) {
    return t4 === 303 ? e18.mapping = 301 : t4 === 304 && (e18.mapping = 302), e18;
  }
  function c2(e18) {
    let t4 = 0;
    for (let n3 = 0; n3 < 6; n3++) e18[n3] !== void 0 && t4++;
    return t4 === 6;
  }
  function l2(e18) {
    let n3 = e18.target;
    n3.removeEventListener(`dispose`, l2);
    let r3 = t3.get(n3);
    r3 !== void 0 && (t3.delete(n3), r3.dispose());
  }
  function u2(e18) {
    let t4 = $, r3 = e18.target;
    r3.removeEventListener(t4(254), u2);
    let i3 = n2.get(r3);
    i3 !== void 0 && (n2[t4(905)](r3), i3[t4(254)]());
  }
  function d2() {
    t3 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakMap(), r2 !== null && (r2.dispose(), r2 = null);
  }
  return { get: i2, dispose: d2 };
}
function Vc(e17) {
  let t3 = {};
  function n2(n3) {
    if (t3[n3] !== void 0) return t3[n3];
    let r2 = e17.getExtension(n3);
    return t3[n3] = r2, r2;
  }
  return { has: function(e18) {
    return n2(e18) !== null;
  }, init: function() {
    let e18 = $;
    n2(`EXT_color_buffer_float`), n2(e18(427)), n2(`OES_texture_float_linear`), n2(`EXT_color_buffer_half_float`), n2(`WEBGL_multisampled_render_to_texture`), n2(`WEBGL_render_shared_exponent`);
  }, get: function(e18) {
    let t4 = n2(e18);
    return t4 === null && yt(`WebGLRenderer: ` + e18 + ` extension not supported.`), t4;
  } };
}
function Hc(e17, t3, n2, r2) {
  let i2 = {}, a2 = /* @__PURE__ */ new WeakMap();
  function o2(e18) {
    let s3 = e18.target;
    s3.index !== null && t3.remove(s3.index);
    for (let e19 in s3.attributes) t3.remove(s3.attributes[e19]);
    s3.removeEventListener(`dispose`, o2), delete i2[s3.id];
    let c3 = a2.get(s3);
    c3 && (t3.remove(c3), a2.delete(s3)), r2.releaseStatesOfGeometry(s3), s3.isInstancedBufferGeometry === true && delete s3._maxInstanceCount, n2.memory.geometries--;
  }
  function s2(e18, t4) {
    let r3 = $;
    return i2[t4.id] === true ? t4 : (t4[r3(322)](`dispose`, o2), i2[t4.id] = true, n2.memory.geometries++, t4);
  }
  function c2(n3) {
    let r3 = $, i3 = n3.attributes;
    for (let n4 in i3) t3[r3(997)](i3[n4], e17.ARRAY_BUFFER);
  }
  function l2(e18) {
    let n3 = $, r3 = [], i3 = e18[n3(1259)], o3 = e18.attributes.position, s3 = 0;
    if (o3 === void 0) return;
    if (i3 !== null) {
      let e19 = i3.array;
      s3 = i3[n3(235)];
      for (let t4 = 0, n4 = e19.length; t4 < n4; t4 += 3) {
        let n5 = e19[t4 + 0], i4 = e19[t4 + 1], a3 = e19[t4 + 2];
        r3.push(n5, i4, i4, a3, a3, n5);
      }
    } else {
      let e19 = o3.array;
      s3 = o3[n3(235)];
      for (let t4 = 0, n4 = e19.length / 3 - 1; t4 < n4; t4 += 3) {
        let e20 = t4 + 0, n5 = t4 + 1, i4 = t4 + 2;
        r3.push(e20, n5, n5, i4, i4, e20);
      }
    }
    let c3 = new (o3[n3(1414)] >= 65535 ? Nr : jr)(r3, 1);
    c3[n3(235)] = s3;
    let l3 = a2.get(e18);
    l3 && t3.remove(l3), a2.set(e18, c3);
  }
  function u2(e18) {
    let t4 = $, n3 = a2[t4(859)](e18);
    if (n3) {
      let r3 = e18[t4(1259)];
      r3 !== null && n3.version < r3[t4(235)] && l2(e18);
    } else l2(e18);
    return a2.get(e18);
  }
  return { get: s2, update: c2, getWireframeAttribute: u2 };
}
function Uc(e17, t3, n2) {
  let r2 = i, a2;
  function o2(e18) {
    a2 = e18;
  }
  let s2, c2;
  function l2(e18) {
    s2 = e18.type, c2 = e18.bytesPerElement;
  }
  function u2(t4, r3) {
    let i2 = $;
    e17.drawElements(a2, r3, s2, t4 * c2), n2[i2(997)](r3, a2, 1);
  }
  function d2(t4, r3, i2) {
    i2 !== 0 && (e17.drawElementsInstanced(a2, r3, s2, t4 * c2, i2), n2.update(r3, a2, i2));
  }
  function f2(e18, r3, i2) {
    let o3 = $;
    if (i2 === 0) return;
    t3.get(`WEBGL_multi_draw`)[o3(299)](a2, r3, 0, s2, e18, 0, i2);
    let c3 = 0;
    for (let e19 = 0; e19 < i2; e19++) c3 += r3[e19];
    n2[o3(997)](c3, a2, 1);
  }
  this.setMode = o2, this[r2(924)] = l2, this[r2(581)] = u2, this.renderInstances = d2, this.renderMultiDraw = f2;
}
function Wc(e17) {
  let t3 = { geometries: 0, textures: 0 }, n2 = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function r2(t4, r3, i3) {
    switch (n2.calls++, r3) {
      case e17.TRIANGLES:
        n2.triangles += t4 / 3 * i3;
        break;
      case e17.LINES:
        n2.lines += t4 / 2 * i3;
        break;
      case e17.LINE_STRIP:
        n2.lines += i3 * (t4 - 1);
        break;
      case e17.LINE_LOOP:
        n2.lines += i3 * t4;
        break;
      case e17.POINTS:
        n2.points += i3 * t4;
        break;
      default:
        B(`WebGLInfo: Unknown draw mode:`, r3);
        break;
    }
  }
  function i2() {
    let e18 = $;
    n2.calls = 0, n2.triangles = 0, n2[e18(1517)] = 0, n2[e18(1192)] = 0;
  }
  return { memory: t3, render: n2, programs: null, autoReset: true, reset: i2, update: r2 };
}
function Gc(e17, t3, n2) {
  let r2 = /* @__PURE__ */ new WeakMap(), i2 = new q();
  function a2(a3, o2, s2) {
    let c2 = $, l2 = a3.morphTargetInfluences, u2 = o2.morphAttributes[c2(1477)] || o2[c2(1175)].normal || o2.morphAttributes[c2(1119)], d2 = u2 === void 0 ? 0 : u2.length, f2 = r2[c2(859)](o2);
    if (f2 === void 0 || f2.count !== d2) {
      let y2 = function() {
        _2.dispose(), r2.delete(o2), o2.removeEventListener(`dispose`, y2);
      };
      f2 !== void 0 && f2.texture[c2(254)]();
      let e18 = o2.morphAttributes.position !== void 0, n3 = o2.morphAttributes.normal !== void 0, a4 = o2.morphAttributes.color !== void 0, s3 = o2[c2(1175)].position || [], l3 = o2.morphAttributes[c2(564)] || [], u3 = o2.morphAttributes[c2(1119)] || [], p2 = 0;
      e18 === true && (p2 = 1), n3 === true && (p2 = 2), a4 === true && (p2 = 3);
      let m2 = o2[c2(1106)].position.count * p2, h2 = 1;
      m2 > t3.maxTextureSize && (h2 = Math[c2(182)](m2 / t3.maxTextureSize), m2 = t3[c2(1496)]);
      let g2 = new Float32Array(m2 * h2 * 4 * d2), _2 = new mn(g2, m2, h2, d2);
      _2.type = j, _2.needsUpdate = true;
      let v2 = p2 * 4;
      for (let t4 = 0; t4 < d2; t4++) {
        let r3 = s3[t4], o3 = l3[t4], c3 = u3[t4], d3 = m2 * h2 * 4 * t4;
        for (let t5 = 0; t5 < r3.count; t5++) {
          let s4 = t5 * v2;
          e18 === true && (i2.fromBufferAttribute(r3, t5), g2[d3 + s4 + 0] = i2.x, g2[d3 + s4 + 1] = i2.y, g2[d3 + s4 + 2] = i2.z, g2[d3 + s4 + 3] = 0), n3 === true && (i2.fromBufferAttribute(o3, t5), g2[d3 + s4 + 4] = i2.x, g2[d3 + s4 + 5] = i2.y, g2[d3 + s4 + 6] = i2.z, g2[d3 + s4 + 7] = 0), a4 === true && (i2.fromBufferAttribute(c3, t5), g2[d3 + s4 + 8] = i2.x, g2[d3 + s4 + 9] = i2.y, g2[d3 + s4 + 10] = i2.z, g2[d3 + s4 + 11] = c3.itemSize === 4 ? i2.w : 1);
        }
      }
      f2 = { count: d2, texture: _2, size: new U(m2, h2) }, r2.set(o2, f2);
      o2.addEventListener(`dispose`, y2);
    }
    if (a3.isInstancedMesh === true && a3.morphTexture !== null) s2.getUniforms().setValue(e17, `morphTexture`, a3.morphTexture, n2);
    else {
      let t4 = 0;
      for (let e18 = 0; e18 < l2.length; e18++) t4 += l2[e18];
      let n3 = o2.morphTargetsRelative ? 1 : 1 - t4;
      s2.getUniforms().setValue(e17, `morphTargetBaseInfluence`, n3), s2.getUniforms().setValue(e17, `morphTargetInfluences`, l2);
    }
    s2.getUniforms().setValue(e17, `morphTargetsTexture`, f2.texture, n2), s2.getUniforms().setValue(e17, `morphTargetsTextureSize`, f2.size);
  }
  return { update: a2 };
}
function Kc(e17, t3, n2, r2, i2) {
  let a2 = /* @__PURE__ */ new WeakMap();
  function o2(r3) {
    let o3 = $, s3 = i2.render.frame, l2 = r3[o3(641)], u2 = t3[o3(859)](r3, l2);
    if (a2.get(u2) !== s3 && (t3.update(u2), a2.set(u2, s3)), r3[o3(1360)] && (r3.hasEventListener(`dispose`, c2) === false && r3[o3(322)](`dispose`, c2), a2.get(r3) !== s3 && (n2.update(r3.instanceMatrix, e17[o3(948)]), r3.instanceColor !== null && n2.update(r3.instanceColor, e17[o3(948)]), a2.set(r3, s3))), r3.isSkinnedMesh) {
      let e18 = r3.skeleton;
      a2.get(e18) !== s3 && (e18.update(), a2.set(e18, s3));
    }
    return u2;
  }
  function s2() {
    a2 = /* @__PURE__ */ new WeakMap();
  }
  function c2(e18) {
    let t4 = $, i3 = e18.target;
    i3.removeEventListener(`dispose`, c2), r2.releaseStatesOfObject(i3), n2[t4(842)](i3.instanceMatrix), i3[t4(887)] !== null && n2[t4(842)](i3.instanceColor);
  }
  return { update: o2, dispose: s2 };
}
var qc = { 1: i(646), 2: i(826), 3: `CINEON_TONE_MAPPING`, 4: `ACES_FILMIC_TONE_MAPPING`, 6: `AGX_TONE_MAPPING`, 7: `NEUTRAL_TONE_MAPPING`, 5: `CUSTOM_TONE_MAPPING` };
function Jc(e17, t3, n2, r2, i2) {
  let a2 = new pn(t3, n2, { type: e17, depthBuffer: r2, stencilBuffer: i2, depthTexture: r2 ? new ba(t3, n2) : void 0 }), o2 = new pn(t3, n2, { type: te, depthBuffer: false, stencilBuffer: false }), s2 = new Gr();
  s2.setAttribute(`position`, new X([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), s2.setAttribute(`uv`, new X([0, 2, 0, 0, 2, 0], 2));
  let c2 = new Co({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`, fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`, depthTest: false, depthWrite: false }), l2 = new _i(s2, c2), u2 = new Es(-1, 1, 1, -1, 0, 1), d2 = null, f2 = null, p2 = false, m2, h2 = null, g2 = [], _2 = false;
  this.setSize = function(e18, t4) {
    a2.setSize(e18, t4), o2.setSize(e18, t4);
    for (let n3 = 0; n3 < g2.length; n3++) {
      let r3 = g2[n3];
      r3.setSize && r3.setSize(e18, t4);
    }
  }, this.setEffects = function(e18) {
    let t4 = $;
    g2 = e18, _2 = g2.length > 0 && g2[0].isRenderPass === true;
    let n3 = a2.width, r3 = a2.height;
    for (let e19 = 0; e19 < g2.length; e19++) {
      let i3 = g2[e19];
      i3.setSize && i3[t4(569)](n3, r3);
    }
  }, this.begin = function(e18, t4) {
    let n3 = $;
    if (p2 || e18.toneMapping === 0 && g2.length === 0) return false;
    if (h2 = t4, t4 !== null) {
      let e19 = t4.width, r3 = t4[n3(221)];
      (a2[n3(1505)] !== e19 || a2.height !== r3) && this.setSize(e19, r3);
    }
    return _2 === false && e18[n3(689)](a2), m2 = e18[n3(876)], e18[n3(876)] = 0, true;
  }, this.hasRenderPass = function() {
    return _2;
  }, this.end = function(e18, t4) {
    let n3 = $;
    e18.toneMapping = m2, p2 = true;
    let r3 = a2, i3 = o2;
    for (let a3 = 0; a3 < g2.length; a3++) {
      let o3 = g2[a3];
      if (o3[n3(359)] !== false && (o3.render(e18, i3, r3, t4), o3.needsSwap !== false)) {
        let e19 = r3;
        r3 = i3, i3 = e19;
      }
    }
    if (d2 !== e18.outputColorSpace || f2 !== e18.toneMapping) {
      d2 = e18.outputColorSpace, f2 = e18.toneMapping, c2.defines = {}, K[n3(910)](d2) === `srgb` && (c2.defines.SRGB_TRANSFER = ``);
      let t5 = qc[f2];
      t5 && (c2[n3(523)][t5] = ``), c2.needsUpdate = true;
    }
    c2.uniforms.tDiffuse[n3(895)] = r3.texture, e18.setRenderTarget(h2), e18.render(l2, u2), h2 = null, p2 = false;
  }, this.isCompositing = function() {
    return p2;
  }, this.dispose = function() {
    let e18 = $;
    a2[e18(598)] && a2[e18(598)].dispose(), a2.dispose(), o2.dispose(), s2.dispose(), c2.dispose();
  };
}
var Yc = new dn(), Xc = new ba(1, 1), Zc = new mn(), Qc = new hn(), $c = new ya(), el = [], tl = [], nl = new Float32Array(16), rl = new Float32Array(9), il = new Float32Array(4);
function al(e17, t3, n2) {
  let r2 = e17[0];
  if (r2 <= 0 || r2 > 0) return e17;
  let i2 = t3 * n2, a2 = el[i2];
  if (a2 === void 0 && (a2 = new Float32Array(i2), el[i2] = a2), t3 !== 0) {
    r2.toArray(a2, 0);
    for (let r3 = 1, i3 = 0; r3 !== t3; ++r3) i3 += n2, e17[r3].toArray(a2, i3);
  }
  return a2;
}
function ol(e17, t3) {
  let n2 = i;
  if (e17.length !== t3.length) return false;
  for (let r2 = 0, i2 = e17[n2(660)]; r2 < i2; r2++) if (e17[r2] !== t3[r2]) return false;
  return true;
}
function sl(e17, t3) {
  for (let n2 = 0, r2 = t3.length; n2 < r2; n2++) e17[n2] = t3[n2];
}
function cl(e17, t3) {
  let n2 = i, r2 = tl[t3];
  r2 === void 0 && (r2 = new Int32Array(t3), tl[t3] = r2);
  for (let i2 = 0; i2 !== t3; ++i2) r2[i2] = e17[n2(215)]();
  return r2;
}
function ll(e17, t3) {
  let n2 = this.cache;
  n2[0] !== t3 && (e17.uniform1f(this.addr, t3), n2[0] = t3);
}
function ul(e17, t3) {
  let n2 = this.cache;
  if (t3.x !== void 0) (n2[0] !== t3.x || n2[1] !== t3.y) && (e17.uniform2f(this.addr, t3.x, t3.y), n2[0] = t3.x, n2[1] = t3.y);
  else {
    if (ol(n2, t3)) return;
    e17.uniform2fv(this.addr, t3), sl(n2, t3);
  }
}
function dl(e17, t3) {
  let n2 = this.cache;
  if (t3.x !== void 0) (n2[0] !== t3.x || n2[1] !== t3.y || n2[2] !== t3.z) && (e17.uniform3f(this.addr, t3.x, t3.y, t3.z), n2[0] = t3.x, n2[1] = t3.y, n2[2] = t3.z);
  else if (t3.r !== void 0) (n2[0] !== t3.r || n2[1] !== t3.g || n2[2] !== t3.b) && (e17.uniform3f(this.addr, t3.r, t3.g, t3.b), n2[0] = t3.r, n2[1] = t3.g, n2[2] = t3.b);
  else {
    if (ol(n2, t3)) return;
    e17.uniform3fv(this.addr, t3), sl(n2, t3);
  }
}
function fl(e17, t3) {
  let n2 = i, r2 = this.cache;
  if (t3.x !== void 0) (r2[0] !== t3.x || r2[1] !== t3.y || r2[2] !== t3.z || r2[3] !== t3.w) && (e17.uniform4f(this.addr, t3.x, t3.y, t3.z, t3.w), r2[0] = t3.x, r2[1] = t3.y, r2[2] = t3.z, r2[3] = t3.w);
  else {
    if (ol(r2, t3)) return;
    e17.uniform4fv(this[n2(1157)], t3), sl(r2, t3);
  }
}
function pl(e17, t3) {
  let n2 = this.cache, r2 = t3.elements;
  if (r2 === void 0) {
    if (ol(n2, t3)) return;
    e17.uniformMatrix2fv(this.addr, false, t3), sl(n2, t3);
  } else {
    if (ol(n2, r2)) return;
    il.set(r2), e17.uniformMatrix2fv(this.addr, false, il), sl(n2, r2);
  }
}
function ml(e17, t3) {
  let n2 = i, r2 = this.cache, a2 = t3.elements;
  if (a2 === void 0) {
    if (ol(r2, t3)) return;
    e17.uniformMatrix3fv(this.addr, false, t3), sl(r2, t3);
  } else {
    if (ol(r2, a2)) return;
    rl.set(a2), e17[n2(1205)](this.addr, false, rl), sl(r2, a2);
  }
}
function hl(e17, t3) {
  let n2 = i, r2 = this.cache, a2 = t3.elements;
  if (a2 === void 0) {
    if (ol(r2, t3)) return;
    e17.uniformMatrix4fv(this.addr, false, t3), sl(r2, t3);
  } else {
    if (ol(r2, a2)) return;
    nl[n2(1139)](a2), e17.uniformMatrix4fv(this.addr, false, nl), sl(r2, a2);
  }
}
function gl(e17, t3) {
  let n2 = i, r2 = this[n2(610)];
  r2[0] !== t3 && (e17.uniform1i(this.addr, t3), r2[0] = t3);
}
function _l(e17, t3) {
  let n2 = i, r2 = this.cache;
  if (t3.x !== void 0) (r2[0] !== t3.x || r2[1] !== t3.y) && (e17.uniform2i(this[n2(1157)], t3.x, t3.y), r2[0] = t3.x, r2[1] = t3.y);
  else {
    if (ol(r2, t3)) return;
    e17.uniform2iv(this.addr, t3), sl(r2, t3);
  }
}
function vl(e17, t3) {
  let n2 = i, r2 = this.cache;
  if (t3.x !== void 0) (r2[0] !== t3.x || r2[1] !== t3.y || r2[2] !== t3.z) && (e17.uniform3i(this.addr, t3.x, t3.y, t3.z), r2[0] = t3.x, r2[1] = t3.y, r2[2] = t3.z);
  else {
    if (ol(r2, t3)) return;
    e17[n2(582)](this.addr, t3), sl(r2, t3);
  }
}
function yl(e17, t3) {
  let n2 = i, r2 = this.cache;
  if (t3.x !== void 0) (r2[0] !== t3.x || r2[1] !== t3.y || r2[2] !== t3.z || r2[3] !== t3.w) && (e17.uniform4i(this[n2(1157)], t3.x, t3.y, t3.z, t3.w), r2[0] = t3.x, r2[1] = t3.y, r2[2] = t3.z, r2[3] = t3.w);
  else {
    if (ol(r2, t3)) return;
    e17.uniform4iv(this[n2(1157)], t3), sl(r2, t3);
  }
}
function bl(e17, t3) {
  let n2 = i, r2 = this.cache;
  r2[0] !== t3 && (e17.uniform1ui(this[n2(1157)], t3), r2[0] = t3);
}
function $(e17, t3) {
  return e17 -= 161, Vl()[e17];
}
function xl(e17, t3) {
  let n2 = this.cache;
  if (t3.x !== void 0) (n2[0] !== t3.x || n2[1] !== t3.y) && (e17.uniform2ui(this.addr, t3.x, t3.y), n2[0] = t3.x, n2[1] = t3.y);
  else {
    if (ol(n2, t3)) return;
    e17.uniform2uiv(this.addr, t3), sl(n2, t3);
  }
}
function Sl(e17, t3) {
  let n2 = this.cache;
  if (t3.x !== void 0) (n2[0] !== t3.x || n2[1] !== t3.y || n2[2] !== t3.z) && (e17.uniform3ui(this.addr, t3.x, t3.y, t3.z), n2[0] = t3.x, n2[1] = t3.y, n2[2] = t3.z);
  else {
    if (ol(n2, t3)) return;
    e17.uniform3uiv(this.addr, t3), sl(n2, t3);
  }
}
function Cl(e17, t3) {
  let n2 = i, r2 = this.cache;
  if (t3.x !== void 0) (r2[0] !== t3.x || r2[1] !== t3.y || r2[2] !== t3.z || r2[3] !== t3.w) && (e17.uniform4ui(this.addr, t3.x, t3.y, t3.z, t3.w), r2[0] = t3.x, r2[1] = t3.y, r2[2] = t3.z, r2[3] = t3.w);
  else {
    if (ol(r2, t3)) return;
    e17[n2(393)](this.addr, t3), sl(r2, t3);
  }
}
function wl(e17, t3, n2) {
  let r2 = this.cache, i2 = n2.allocateTextureUnit();
  r2[0] !== i2 && (e17.uniform1i(this.addr, i2), r2[0] = i2);
  let a2;
  this.type === e17.SAMPLER_2D_SHADOW ? (Xc.compareFunction = n2.isReversedDepthBuffer() ? 518 : 515, a2 = Xc) : a2 = Yc, n2.setTexture2D(t3 || a2, i2);
}
function Tl(e17, t3, n2) {
  let r2 = i, a2 = this.cache, o2 = n2.allocateTextureUnit();
  a2[0] !== o2 && (e17.uniform1i(this.addr, o2), a2[0] = o2), n2[r2(1262)](t3 || Qc, o2);
}
function El(e17, t3, n2) {
  let r2 = i, a2 = this.cache, o2 = n2[r2(215)]();
  a2[0] !== o2 && (e17.uniform1i(this.addr, o2), a2[0] = o2), n2[r2(231)](t3 || $c, o2);
}
function Dl(e17, t3, n2) {
  let r2 = i, a2 = this.cache, o2 = n2[r2(215)]();
  a2[0] !== o2 && (e17[r2(337)](this.addr, o2), a2[0] = o2), n2.setTexture2DArray(t3 || Zc, o2);
}
function Ol(e17) {
  switch (e17) {
    case 5126:
      return ll;
    case 35664:
      return ul;
    case 35665:
      return dl;
    case 35666:
      return fl;
    case 35674:
      return pl;
    case 35675:
      return ml;
    case 35676:
      return hl;
    case 5124:
    case 35670:
      return gl;
    case 35667:
    case 35671:
      return _l;
    case 35668:
    case 35672:
      return vl;
    case 35669:
    case 35673:
      return yl;
    case 5125:
      return bl;
    case 36294:
      return xl;
    case 36295:
      return Sl;
    case 36296:
      return Cl;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return wl;
    case 35679:
    case 36299:
    case 36307:
      return Tl;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return El;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Dl;
  }
}
function kl(e17, t3) {
  let n2 = i;
  e17.uniform1fv(this[n2(1157)], t3);
}
function Al(e17, t3) {
  let n2 = al(t3, this.size, 2);
  e17.uniform2fv(this.addr, n2);
}
function jl(e17, t3) {
  let n2 = al(t3, this.size, 3);
  e17.uniform3fv(this.addr, n2);
}
function Ml(e17, t3) {
  let n2 = i, r2 = al(t3, this.size, 4);
  e17[n2(796)](this.addr, r2);
}
function Nl(e17, t3) {
  let n2 = al(t3, this.size, 4);
  e17.uniformMatrix2fv(this.addr, false, n2);
}
function Pl(e17, t3) {
  let n2 = al(t3, this.size, 9);
  e17.uniformMatrix3fv(this.addr, false, n2);
}
function Fl(e17, t3) {
  let n2 = al(t3, this.size, 16);
  e17.uniformMatrix4fv(this.addr, false, n2);
}
function Il(e17, t3) {
  e17[i(868)](this.addr, t3);
}
function Ll(e17, t3) {
  let n2 = i;
  e17.uniform2iv(this[n2(1157)], t3);
}
function Rl(e17, t3) {
  e17[i(582)](this.addr, t3);
}
function zl(e17, t3) {
  e17.uniform4iv(this.addr, t3);
}
function Bl(e17, t3) {
  e17[i(525)](this.addr, t3);
}
function Vl() {
  let e17 = [`normalMap`, `_addInactiveBinding`, `computeBoneTexture`, `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, `pop`, `COMPRESSED_RGBA_BPTC_UNORM_EXT`, `depthBuffer`, `pow`, `anisotropy`, `traverseVisible`, `has no shadow.`, `modelMatrix`, `refreshMaterialUniforms`, `skeleton`, `acos`, `usedTimes`, `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, `_colorsTexture`, `isDataTexture`, `lerp`, `isLightProbeGrid`, `intersectTriangle`, ` texture units while this GPU supports only `, `attributes`, `order`, `sortObjects`, `updateUBOMapping`, `clipIntersection`, `isMesh`, `type`, `disable`, `displacementBias`, `updateCamera`, `polygonOffsetUnits`, `shaderID`, `_hand`, `color`, `texStorage3D`, `wireframe`, `customFragmentShaderID`, `optimize`, `GetterByBindingType`, `toneMapped`, `fixedFoveation`, `blendDst`, `dithering`, `read`, `common`, `meshnormal_vert`, `depthTest`, `_bindings`, `removeFromParent`, `usage`, `clearcoatNormalMap`, `_fromTexture`, `stencilZFail`, `set`, `instancingMorph`, `include`, `generateMipmaps`, `inputState`, `25863519hfgIhN`, `setAxisAngleFromRotationMatrix`, `TEXTURE_2D_ARRAY`, `t2D`, `spotLightMatrix`, `target`, `clipShadows`, `values`, `iridescenceMapUv`, `_mixBufferRegion`, `READ_FRAMEBUFFER`, `specularColorMapUv`, `lengthSq`, `addr`, `paused`, `direction`, `linecap`, `lastIndexOf`, `32881QMjjEA`, `hemi`, `getViewerPose`, `isArrayCamera`, `DEFAULT_MATRIX_AUTO_UPDATE`, `setFromBufferAttribute`, `depth_vert`, `rotateY`, `planes`, `490630lGpwjx`, `backgroundBlurriness`, `getDepthTexture`, `createTexture`, `morphAttributes`, `COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`, `unbind`, `constructor`, `#define PREMULTIPLIED_ALPHA`, `pose`, `precision`, `state`, `call`, `push`, `makeEmpty`, `void main() {
	gl_Position = vec4( position, 1.0 );
}`, `getContextAttributes`, `PMREMGGXConvolution`, `clampLength`, `isObject3D`, `angle`, `lines`, `attached`, `isDataArrayTexture`, `morphTargetsCount`, `info`, `normalBias`, `ValueBufferType`, `sqrt`, `children`, `_lodMeshes`, `penumbraCos`, `WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`, `not supported, using`, `uniformMatrix3fv`, `sub`, `angularVelocity`, `power`, `has`, `updateProjectionMatrix`, `BYTES_PER_ELEMENT`, `specularIntensity`, `cacheArcLengths`, `then`, `joints`, `morphTargets`, `locationSize`, `setValues`, `alphaMap`, `times`, `sessionend`, `_removeInactiveBinding`, `#define attribute in`, `#define CLEARCOAT_ROUGHNESSMAP_UV `, `KEEP`, `opacity`, `ray`, `stride`, `LineBasicMaterial`, `shapes`, `childremoved`, `COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR`, `BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`, `matrixWorld`, `bottom`, `isVector3`, `memory`, `decay`, `environmentRotation`, `meshbasic_frag`, `LESS`, `#ifdef USE_INSTANCING_COLOR`, `clampPoint`, `ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`, `min`, `THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `, `fogExp2`, `polygonOffset`, `beginShadows`, `copy`, `updateMorphTargets`, `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, `TEXTURE_MAG_FILTER`, `string`, `wireframeLinejoin`, `isRawShaderMaterial`, `distanceToPlane`, `lightMapTransform`, `index`, `alphaToCoverage`, `canvas`, `setTexture3D`, `toArray`, `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, `#define USE_LOGARITHMIC_DEPTH_BUFFER`, `_setAdditiveIdentityQuaternion`, `signal`, `#define USE_NORMALMAP_TANGENTSPACE`, `setFromAxisAngle`, `referencePosition`, `shadow`, `_clip`, `toUpperCase`, `texSubImage2D`, `#define USE_SHEEN_ROUGHNESSMAP`, `customProgramCacheKey`, `isArray`, `intersectsLine`, `LinearTransferOETF`, `refreshFogUniforms`, `#define `, `visibilitychange`, `gradientMap`, `view`, `mouseButtons`, `setHex`, `WebGLState:`, `loop`, `roughnessMap`, `blending`, `cameraAutoUpdate`, `unbindTexture`, `POLYGON_OFFSET_FILL`, `halfWidth`, `toFixed`, `WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`, `NONE`, `blitFramebuffer`, `#ifdef USE_SKINNING`, `_allocateTargets`, `name`, `displayHeight`, `ior`, `data`, `getDepthInformation`, `specularIntensityMapUv`, `boneMatrices`, `activeTexture`, `SAMPLER_2D_SHADOW`, `#define USE_TANGENT`, `prev`, `Curve`, `framebufferTexture2DMultisampleEXT`, `COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR`, `mapping`, `GREATER`, `WebGLRenderer:`, `_lendBinding`, `side`, `#define USE_LIGHTMAP`, `boundingBox`, `rotateX`, `layout(location = 0) out highp vec4 pc_fragColor;`, `textures`, `setUsage`, `scalar`, `test`, `setFromMatrixPosition`, `inTangents`, `probe`, `normalMapType`, `images`, `containsPoint`, `_getHandJoint`, `InterpolantFactoryMethodDiscrete`, `dot`, `lineWidth`, `nCachedObjects_`, `play`, `compileAsync`, `diffuse`, `getWireframeAttribute`, `vertexShader`, `_setValue_direct_setNeedsUpdate`, `sheenRoughnessMapUv`, `origin`, `exec`, `atan2`, `_localRoot`, `_update`, `identity`, `decompose`, `environment`, `bumpMap`, `outputColorSpace`, `backgroundRotation`, `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, `time`, `isMeshNormalMaterial`, `isInstancedMesh`, `getHex`, `rectAreaLTC1`, `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, `iridescenceIOR`, `THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`, `RG8UI`, `ambient`, `isLineDashedMaterial`, `XYZ`, `metalnessmap`, `Material.toJSON`, `depthNear`, `TEXTURE0`, `parameterPositions`, `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`, `OES_texture_float_linear`, `offset`, `makeRotation`, `\\[\\]\\.:\\/`, `endingStart`, `batchingTexture`, `_getShaderStage`, `parseTrackName`, `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, `_textureToCubeUV`, `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, `tangent`, `center`, `#if defined( USE_COLOR_ALPHA )`, `morphTargetInfluences`, `sheen`, `receiveShadow`, `normalized`, `filmGauge`, `squeeze`, `compose`, `determinant`, `needsPMREMUpdate`, `compareFunction`, `MAX_VERTEX_UNIFORM_VECTORS`, `COLOR_ATTACHMENT0`, `latitudinal`, `isRenderTargetTexture`, `normalmap`, `#endif`, `isBatchedMesh`, ` keyframe track named `, `load`, `isSprite`, `getBarycoord`, `ZYX`, `updateWorldMatrix`, `defaultAttributeValues`, `count`, `WebXRManager: Cannot change reference space type while presenting.`, `UNPACK_ROW_LENGTH`, `isView`, `setComponents`, `itemEnd`, `setMaterial`, `quaternion`, `	attribute vec2 uv2;`, `divideScalar`, `referenceCount`, `applyMatrix3`, `numSpotLights`, `perObjectFrustumCulled`, `TEXTURE_3D`, `transparent`, `isMatrix4`, `_sheen`, `getClearColor`, `releaseShaderCache`, `EQUAL`, `RectAreaLight`, `allowOverride`, `anisotropyMap`, `dashSize`, `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, `UNSIGNED_SHORT`, `XZY`, `#define varying out`, `__webglColorRenderbuffer`, `lerpHSL`, `specularIntensityMap`, `COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR`, `buffers`, `timeScale`, `random`, `onBeforeRender`, `aspect`, `isMeshStandardMaterial`, `cumulativeWeight`, `_isActiveAction`, `COLOR_BUFFER_BIT`, `5690244hpocnV`, `DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`, `itemSize`, `lightProbeGrid`, `getTimescale`, `Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`, `blurSamples`, `_onChangeCallback`, `mask`, `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, `_uuid`, `TEXTURE_WRAP_S`, `texImage2D`, `COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`, `blob`, `materialVariant`, `onStart`, `distanceTo`, `near`, `KeyframeTrack: Out of order keys.`, `CULL_FACE`, `position`, `roughnessMapTransform`, `renderTarget`, `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, `lightsStateVersion`, `reversedDepthBuffer`, `getShaderParameter`, `_lerpAdditive`, `phi`, `isSpriteMaterial`, `wrapR`, `setFromMatrixColumn`, `, value.a ) );`, `_backgroundBox`, `isPointLight`, `#define MAP_UV `, `_effectiveTimeScale`, `_cachedIndex`, `getInterpolatedAttribute`, `maxTextureSize`, `bumpmap`, `attributeDivisors`, `selectend`, `isQuaternion`, `fadeIn`, `getSize`, `updateRanges`, `shadowIntensity`, `width`, `FRAMEBUFFER`, `lightmap`, `setMask`, `anonymous`, `rotateZ`, `__webglMultisampledFramebuffer`, `setW`, `abs`, `DEPTH_ATTACHMENT`, `flatShading`, `glslVersion`, `points`, `mapSize`, `isWebGL3DRenderTarget`, `resolvedProperty`, `INT`, `equals`, `logarithmicDepthBuffer`, `#define SHADER_NAME `, `blendEquationAlpha`, `rotate`, `COMPRESSED_RGBA_ASTC_5x5_KHR`, `flipY`, `bones`, `packedNormalMap`, `boundary`, `getFrustum`, `Texture.setValues(): parameter '`, `shadowRadius`, `knownActions`, `drawingBufferColorSpace`, `addScalar`, `bytesPerElement`, `thicknessMapUv`, `COMPRESSED_RGB_PVRTC_4BPPV1_IMG`, `debug`, `clipping`, `displacementMap`, `TEXTURE_MIN_FILTER`, `ceil`, `WebGLRenderer: Context Lost.`, `UNSIGNED_INT`, `_bindAction`, `RGBA8`, `uniform bool isOrthographic;`, `isPresenting`, `_lodMax`, `_order`, `DRAW_FRAMEBUFFER`, `DEPTH_COMPONENT24`, `raycast`, `bindMatrixInverse`, `envMap`, `clearcoatRoughnessMap`, `iridescenceThicknessMapUv`, `subscribe_`, `object`, `sessionstart`, `blendFunc`, `RED_INTEGER`, `applyAxisAngle`, `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, `pointShadow`, `hemiLength`, `blur direction must be either latitudinal or longitudinal!`, `6139737rdPNLv`, `cumulativeWeightAdditive`, `fullHeight`, `ValueTypeName`, `getValueSize`, `WebGLRenderer: Attempt to use non-existing WebGL internal format '`, `linearToOutputTexel`, `allocateTextureUnit`, `_mixer`, `availableInstanceIds`, `enable`, `WEBGL_multi_draw`, `toLowerCase`, `height`, `evaluate`, `RG32I`, `unshift`, `STENCIL_BUFFER_BIT`, `getHSL`, `framebufferRenderbuffer`, `skinIndex`, `isEmpty`, `specular`, `setTextureCube`, `onShaderError`, `blendFuncSeparate`, `applyQuaternion`, `version`, `boneInverses`, `clearcoatNormalScale`, `DEPTH_BUFFER_BIT`, `#define USE_CLEARCOAT_NORMALMAP`, `fog`, `clearcoatMap`, `blendMode`, `polygonOffsetFactor`, `_propertyBindings`, `_actions`, `bindRenderbuffer`, `copyAt`, `setAttribute`, `requestHeader`, `vec4 `, `LOWER_LEFT_EXT`, `path`, `format`, `dispose`, `biasNode`, `isMeshDepthMaterial`, `isFramebufferTexture`, `useFog`, `_equirectMaterial`, `isMeshLambertMaterial`, `_sizeLods`, `background`, `resolveStencilBuffer`, `vertexColors`, `isPerspectiveCamera`, `trunc`, `_updateTimeScale`, `autoUpdate`, `sprite`, `onUpdateProgram`, `mapUv`, `reservedRanges`, `intersectsSprite`, `iridescence`, `COMPRESSED_RG11_EAC`, `COMPRESSED_RGBA_ASTC_8x5_KHR`, `translate`, `STENCIL_TEST`, `numClippingPlanes`, `COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR`, `repeat`, `alpha-blend`, `alphaTest`, `transform`, `crossOrigin`, `wrapS`, `PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`, `channel`, `sheenColorMap`, `#define USE_UV3`, `isPoints`, `sign`, `.morphTargetInfluences[`, `Skeleton: Number of inverse bone matrices does not match amount of bones.`, `TEXTURE_2D`, `_setValue_unbound`, `bindMode`, `weight`, `multiDrawElementsWEBGL`, `isNodeMaterial`, `uvTransform`, `_interpolants`, `((?:WC+[\\/:])*)`, `translateZ`, `metalness`, `error`, `matrix`, `#define SHEEN_COLORMAP_UV `, `node`, `_weightInterpolant`, `slerpQuaternions`, `envMapCubeUVHeight`, `lightMapUv`, `__cache`, `isCompressedArrayTexture`, `isExternalTexture`, `parseFromString`, `needsUpdate`, `setPolygonOffset`, `rotation`, `setFramebufferScaleFactor`, `addEventListener`, `closestPointToPoint`, `_byClipCacheIndex`, `SAMPLE_ALPHA_TO_COVERAGE`, `_controlInterpolants`, `ONE_MINUS_CONSTANT_ALPHA`, `isSkinnedMesh`, `_takeBackBinding`, ` isampler3D;
	precision `, `valueSize`, `getObjectByProperty`, `abort`, `sort`, `_elapsed`, `crossVectors`, `uniform1i`, `RGB16UI`, `cos`, `reset`, `asin`, `displacementScale`, `attenuationDistance`, `wrapT`, `instancing`, `MAX_COMBINED_TEXTURE_IMAGE_UNITS`, `autoClearColor`, `ShaderMaterial`, `_grip`, `displacementMapTransform`, `integer`, `isFog`, `morphTargetDictionary`, `_getValue_arrayElement`, `getRenderTarget`, `forceSinglePass`, `lerpColors`, `union`, `enabled`, `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, `additive`, `DEFAULT_UP`, `penumbra`, `COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`, `intervalChanged_`, `shadow_vert`, `sampleValues`, `_maxInstanceCount`, `WebGLRenderer: Texture marked for update but image is incomplete`, `setFromMatrix4`, `clearcoatRoughness`, `internalFormat`, `makeRotationFromEuler`, `top`, `_mixBufferRegionAdditive`, `numSpotLightShadowsWithMaps`, `filmOffset`, `textureWidth`, `depth`, `PointLight`, `ZERO`, `Line`, `copyPosition`, `	attribute vec3 instanceColor;`, `pushLight`, `fragmentShader`, `lights`, `getZ`, `_setTextureOptions`, `setFromNormalAndCoplanarPoint`, `log2`, `start`, `uniform4uiv`, `setupLightsView`, `onBeforeShadow`, `Texture: Unable to serialize Texture.`, `184`, `_indirectTexture`, `clearcoatNormalMapUv`, `_slerp`, `TEXTURE_MAX_ANISOTROPY_EXT`, `14MjzrKQ`, `intensity`, `SpotLight`, `shaderCache`, `code`, `multiply`, `DEPTH_TEST`, `getActiveMipmapLevel`, `offsetHSL`, `numSpotLightShadows`, `spotLightShadows`, `iridescenceMap`, `drawRange`, `doubleSided`, `__webglDepthbuffer`, `vec3 `, `sizeAttenuation`, `MEDIUM_FLOAT`, `assign`, `texElementImage2D`, `text`, `_getShaderCacheForMaterial`, `hasDepthSensing`, `floor`, `5628585aNuLPR`, `WEBGL_clip_cull_distance`, `setValue`, `sheenColor`, `_removeInactiveBindingsForAction`, `stencil`, `BYTE`, `lerpVectors`, `TEXTURE_CUBE_MAP`, `location`, `viewport`, `vertexAlphas`, `applyNormalMatrix`, `RGBA16UI`, `stencilFail`, `isSpotLight`, `theta`, `clone`, `Light`, `TEXTURE_CUBE_MAP_POSITIVE_X`, `scissor`, `now`, `CubemapToCubeUV`, `isXRRenderTarget`, `RENDERBUFFER`, `envmap`, `metadata`, `blendEquation`, `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, `autoReset`, `aoMap`, `getTargetRaySpace`, `shadowMap`, `attenuationColor`, `restoreContext`, `aoMapIntensity`, `( vec4 value ) {`, `color(`, `layers`, `_actionsByClip`, `_updateWeight`, `directionalShadowMap`, `meshPerAttribute`, `#define USE_ROUGHNESSMAP`, `pointShadowMap`, `_setValue_arrayElement_setNeedsUpdate`, `requestAnimationFrame`, `normalize`, `parse`, `gapSize`, `double`, `_halfBlur`, `bindFramebuffer`, `radiusTop`, `setMode`, `specularMap`, `srgb`, `pixelStorei`, `createInterpolant`, `jointRadius`, `minFilter`, `__version`, `programs`, `transmissionRenderTarget`, `projectionMatrix`, `texParameteri`, `overrideMaterial`, `vector4`, `updateMatrix`, `image`, `YZX`, `toJSON`, `spot`, `meshphysical_vert`, `drawBuffers`, `vertexAttrib4fv`, `setClear`, `src`, `createElementNS`, `setXYZW`, `isVector2`, `HALF_FLOAT`, `mipmaps`, `itemStart`, `matrixWorldInverse`, `sheenColorMapUv`, `environmentIntensity`, `setup`, `texStorage2D`, `shaderName`, `dispatchEvent`, `includes`, `targetRaySpace`, `getCurrentViewport`, `RGB32UI`, `body`, `setPixelRatio`, `defines`, `json`, `uniform1uiv`, `manager`, `isVideoTexture`, `settings`, `renderbufferStorage`, `indexOf`, `LINEAR_MIPMAP_LINEAR`, `_blurMaterial`, ` sampler3D;
	precision `, `combine`, `computeBoundingSphere`, `fetch for "`, `updateCoordinateSystem`, `FLOAT`, `MAX_TEXTURE_MAX_ANISOTROPY_EXT`, `linearVelocity`, `colorSpace`, `scale`, `unpackColorSpace`, `actionByRoot`, `pmremVersion`, `RGB16_SNORM_EXT`, `sin`, `projectionMatrixInverse`, `reflectivity`, `__offset`, `computeBoundingBox`, `_renderer`, `_getValue_array`, `attribute vec3 position;`, `fadeOut`, `atan`, `__webglInit`, `lastIndex`, `morphNormals`, `getTangentAt`, `roughness`, `mimeType`, `shininess`, `normal`, `setHSL`, `_alphaTest`, `morphTexture`, `textureTypeReadable`, `setSize`, `charAt`, `catch`, `UNSIGNED_BYTE`, `interleavedBuffers`, `_viewportCount`, `getVertexPosition`, `setOptional`, `fromBufferAttribute`, `stencilOp`, `map`, `nodeName`, `render`, `uniform3iv`, `meshlambert_frag`, `autoClear`, `maxMip`, `headers`, `_abortController`, `KeyframeTrack: Track is empty.`, `BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`, `translateOnAxis`, `hasLinearVelocity`, `envMapRotation`, `shadowMapType`, `_targetGroup`, `intersectPlane`, `getElapsed`, `scissorTest`, `depthTexture`, `intersectsSphere`, `cube_frag`, `arrayBuffers`, `useMultisampledRTT`, `addToRenderList`, `setXYZ`, `ELEMENT_ARRAY_BUFFER`, `uniforms`, `resetTextureUnits`, `HIGH_FLOAT`, `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, `cache`, `gpu-optimized`, `' has value of undefined.`, `thicknessMap`, `numPlanes`, `Bone`, `isVector4`, `extensions`, `isInterleavedBufferAttribute`, `isOrthographicCamera`, `#define USE_NORMALMAP`, `__boundDepthTexture`, `cancelAnimationFrame`, `seq`, `spaces`, `#define USE_MORPHTARGETS`, `slerp`, `luminanceCoefficients`, `log`, `weights`, `addVectors`, `wireframeLinecap`, `blendAlpha`, `isAmbientLight`, `setFromPoints`, `#define FOG_EXP2`, `randomDirection`, `Unable to determine texture byte length for `, `makePerspective`, `Color: Unknown color `, `numClipIntersection`, `geometry`, `getWorldDirection`, `lightProbeGridArray`, `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, `_setAdditiveIdentityNumeric`, `LINEAR_TONE_MAPPING`, `deleteTexture`, `isRectAreaLight`, `getFrame`, `rectArea`, `depthStencilTexture`, `boneTexture`, `join`, `distance`, `child`, `makeRotationY`, `clearcoatRoughnessMapUv`, `iridescenceThicknessMap`, `updateMatrixWorld`, `length`, `PACK_SKIP_PIXELS`, `onLoad`, `DEPTH24_STENCIL8`, `isLineSegments`, `#define USE_SHEEN_COLORMAP`, `morphTarget`, `3623133LQlWNK`, `LineLoop`, `EPSILON`, `geometryInitialized`, `probesResolution`, `_listeners`, `_slerpAdditive`, `disconnect`, `TEXTURE_COMPARE_FUNC`, `stop`, `isRenderTarget`, `depthWrite`, `uniform3uiv`, `makeTranslation`, `RGBA32I`, `area`, `isLineLoop`, `aomap`, `Controls: connect() now requires an element.`, `sheenRoughnessMap`, `UNPACK_PREMULTIPLY_ALPHA_WEBGL`, `prototype`, `setRenderTarget`, `_addIndex`, `emissiveMap`, `left`, `_timeScaleInterpolant`, `getCamera`, `forEach`, `deleteBuffer`, `matrixWorldNeedsUpdate`, `metalnessMap`, `stencilWriteMask`, `UNPACK_SKIP_IMAGES`, `TEXTURE_COMPARE_MODE`, `stencilMask`, `envMapIntensity`, `instanceMatrix`, `xrCompatible`, `transfer`, `static`, `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, `iterator`, `gripSpace`, `groups`, `useProgram`, `#define ROUGHNESSMAP_UV `, `premultiplyAlpha`, `getAttribute`, `setY`, `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, `#define USE_EMISSIVEMAP`, `COMPRESSED_RGBA_ASTC_12x12_KHR`, `replace`, `autoClearDepth`, `pivot`, `MAX_TEXTURE_SIZE`, `stencilFunc`, `jointName`, `far`, `userData`, `NEAREST`, `bind`, `batchingColorTexture`, `vertexTangents`, `mapPass`, `addUpdateRange`, `isAnimationObjectGroup`, `program`, `negate`, `NEVER`, `emissiveIntensity`, `PropertyBinding: can not parse propertyName from trackName: `, `__THREE__`, `boundingSphere`, `colorTexture`, `blendDstAlpha`, `webglcontextcreationerror`, `updateRenderTargetMipmap`, `isLine`, `rendererExtensionParallelShaderCompile`, `__webglFramebuffer`, `.shadowMap`, `_sceneToCubeUV`, `stencilZPass`, `setInterpolation`, `WebGLRenderer: A WebGL context could not be created. Reason: `, `backgroundIntensity`, `morphTargetsRelative`, `workingColorSpace`, `defineProperties`, `isInstancedBufferGeometry`, `WebGLTextures: Unsupported texture color space:`, `setComponent`, `frontFace`, `numPointLights`, `normalizeSkinWeights`, `#define SHADER_TYPE `, `saveOriginalState`, `texSubImage3D`, `_cubeSize`, `cacheKey`, `index is out of range: `, `vector`, `getObjectsByProperty`, `setFromVector3`, `setLineWidth`, `WebGLProgram: Program Info Log:`, `transformDirection`, `setTest`, `136ODYHoy`, `#define USE_UV1`, `setZ`, `WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`, `create`, `#define USE_MORPHNORMALS`, `skinWeight`, `copySampleValue_`, `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, `#define MORPHTARGETS_TEXTURE_STRIDE `, `_cacheIndex`, `needsLights`, `wireframeLinewidth`, `#define USE_MAP`, `FRONT`, `_nActiveBindings`, `number`, `blendSrcAlpha`, `BLEND`, `uniform4fv`, `uuid`, `dfgLUT`, `bindBuffer`, `__cacheKey`, `ACESFilmic`, `domElement`, `size`, `ONE`, `_setValue_direct_setMatrixWorldNeedsUpdate`, `removeEventListener`, `animations`, `_clearcoat`, `setPath`, `HORIZONTAL_PASS`, `manhattanLength`, `rectAreaLights`, `getActiveAttrib`, `_setValue_direct`, `dispersion`, `radius`, `pointShadowMatrix`, `_sigmas`, `physical`, `getScissorTest`, `blendColor`, `SHORT`, `fromArray`, `getActiveUniform`, `addScaledVector`, `REINHARD_TONE_MAPPING`, `getController`, `#ifdef USE_UV3`, `files`, `#define LIGHTMAP_UV `, `frustumCulled`, `thickness`, `isData3DTexture`, `sourceTexture`, `THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`, `ENVMAP_TYPE_CUBE`, ` samplerCube;
	precision `, `uniform mat3 normalMatrix;`, `getVertexShaderID`, `__bindingPointIndex`, `endingEnd`, `remove`, `InterpolantFactoryMethodSmooth`, `getStyle`, `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, `meshphysical_frag`, `groundColor`, `observe`, `material`, `trim`, `getValue`, `frame`, `spotLightMap`, `splice`, `_dispersion`, `COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`, `setFromObject`, `	attribute vec4 skinIndex;`, `get`, `#define USE_ALPHAHASH`, `THREE.WebGLProgram: Shader Error `, `R32F`, `rootNode`, `transmissionMap`, `4NYISyX`, `round`, `onUploadCallback`, `uniform1iv`, `shadowCameraFar`, `getLengths`, `intersectsPlane`, `getContext`, `bindTexture`, `applyMatrix4`, `matrixAutoUpdate`, `toneMapping`, `_pingPongRenderTarget`, `linejoin`, `getX`, `clipCullDistance`, `existingAction`, `updateMultisampleRenderTarget`, `slice`, `visible`, `isWebGLCubeRenderTarget`, `getComponent`, `instanceColor`, `layoutsubtree`, `outputColorSpaceConfig`, `stopFading`, `BufferGeometry`, `#define CLEARCOATMAP_UV `, `array`, `matcap`, `value`, `sRGBToLinear`, `MeshDepthMaterial`, `maxInstanceCount`, `isGLBufferAttribute`, `next`, `resultBuffer`, `multiplyMatrices`, `setTexture2D`, `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, `delete`, `setDrawingBufferSize`, `emissiveMapUv`, `right`, `_setEndings`, `getTransfer`, `invalidateFramebuffer`, `_setValue_arrayElement`, `enableAll`, `numLightProbeGrids`, `__data`, `visible-blurred`, `_matricesTexture`, `buffer`, `enabledAttributes`, `setIndirect`, `isDirectionalLight`, `prevZ`, `setRGB`, `setIndex`, `transpose`, `OpenGL ES`, `_currentTime`, `keys`, `depthFar`, `bumpMapUv`, `fov`, `getCameraImage`, `materialCache`, `BROWSER_DEFAULT_WEBGL`, `translateY`, `byteLength`, `expandByScalar`, `distanceSqToPoint`, `alphaHash`, `WARNING: Multiple instances of Three.js being imported.`, `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, `equirect_frag`, `sheenRoughness`, `setX`, `isMeshPhongMaterial`, `depthFunc`, `normalMapUv`, `ARRAY_BUFFER`, `lookAt`, `parent`, `customDepthMaterial`, `depthUsage`, `setMatrixAt`, `transmission`, `LINE_LOOP`, `getTangent`, `magFilter`, `getReversed`, `COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR`, `Invalid component type.`, `_anisotropy`, `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, `renderOrder`, `fromCubemap`, `duration`, `isMeshPhysicalMaterial`, `isInstancedInterleavedBuffer`, `spotLights`, `intersectsBox`, `_pageVisibilityHandler`, `camera`, `SetterByBindingTypeAndVersioning`, `premultipliedAlpha`, `subVectors`, `UNPACK_IMAGE_HEIGHT`, `constant`, `defineProperty`, `10siQFZY`, `stopWarping`, `linewidth`, `#define USE_INSTANCING_MORPH`, `setFromEuler`, `_targetRay`, `repetitions`, `setFromCoplanarPoints`, `bias`, `clearViewOffset`, `thetaLength`, `deleteFramebuffer`, `index0AttributeName`, `createFramebuffer`, `elements`, `compressedTexSubImage2D`, `getY`, `invert`, `source`, `update`, `expandByPoint`, `clippingPlanes`, `stencilFuncMask`, `getAttribLocation`, `_root`, `fromJSON`, `getParameter`, `depthPacking`, `emissive`, `PACK_ALIGNMENT`, `parameters`, `_offsetNext`, `highp`, `#define USE_IRIDESCENCE_THICKNESSMAP`, `PointsMaterial`, ` format.`, `coplanarPoint`, `setScalar`, `	attribute vec4 color;`, `texture`, `point`, `multiview`, `ONE_MINUS_SRC_COLOR`, `zeroSlopeAtEnd`, `SYNC_FLUSH_COMMANDS_BIT`, `max`, `unpackAlignment`, `specularColor`, `samples`, `squeezeend`, `#define USE_ANISOTROPY`, `response`, `directionalShadowMatrix`, `DefaultInterpolation`, `TimeBufferType`, `vertexAttrib3fv`, `add`, `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, `flipSided`, `dataReady`, `getTextureUnits`, `getNormalMatrix`, `COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR`, `SkinnedMesh`, `isShaderMaterial`, `stencilBuffer`, `bumpScale`, `clearcoat`, `ConeGeometry`, `FRAGMENT_SHADER`, `#define USE_DISPLACEMENTMAP`, `PIXEL_PACK_BUFFER`, `hasAttribute`, `rgb`, `tracks`, `isScene`, `lightMap`, `isTexture`, `__webglTexture`, `isCompositing`, `distanceToSquared`, `isColor`, `#define textureCube texture`, `propertyName`, `materials`, `getProgramParameter`, `deleteRenderbuffer`, `specularColorMap`, `cullFace`, `cross`, `COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`, `binding`, `lightMapIntensity`, `setColorName`, `multiplyScalar`, `convert`, `_setSize`, `nextZ`, `WebGLProgram: Unsupported color space: `, `shaderType`, `init`, `uniformsNeedUpdate`, `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, `batchingColor`, `finished`];
  return Vl = function() {
    return e17;
  }, Vl();
}
function Hl(e17, t3) {
  e17.uniform2uiv(this.addr, t3);
}
function Ul(e17, t3) {
  e17[i(679)](this.addr, t3);
}
function Wl(e17, t3) {
  e17.uniform4uiv(this.addr, t3);
}
function Gl(e17, t3, n2) {
  let r2 = i, a2 = this.cache, o2 = t3.length, s2 = cl(n2, o2);
  ol(a2, s2) || (e17.uniform1iv(this.addr, s2), sl(a2, s2));
  let c2;
  c2 = this[r2(1112)] === e17[r2(1309)] ? Xc : Yc;
  for (let e18 = 0; e18 !== o2; ++e18) n2[r2(903)](t3[e18] || c2, s2[e18]);
}
function Kl(e17, t3, n2) {
  let r2 = i, a2 = this.cache, o2 = t3.length, s2 = cl(n2, o2);
  ol(a2, s2) || (e17.uniform1iv(this[r2(1157)], s2), sl(a2, s2));
  for (let e18 = 0; e18 !== o2; ++e18) n2.setTexture3D(t3[e18] || Qc, s2[e18]);
}
function ql(e17, t3, n2) {
  let r2 = i, a2 = this.cache, o2 = t3[r2(660)], s2 = cl(n2, o2);
  ol(a2, s2) || (e17.uniform1iv(this.addr, s2), sl(a2, s2));
  for (let e18 = 0; e18 !== o2; ++e18) n2.setTextureCube(t3[e18] || $c, s2[e18]);
}
function Jl(e17, t3, n2) {
  let r2 = i, a2 = this[r2(610)], o2 = t3.length, s2 = cl(n2, o2);
  ol(a2, s2) || (e17[r2(868)](this.addr, s2), sl(a2, s2));
  for (let e18 = 0; e18 !== o2; ++e18) n2.setTexture2DArray(t3[e18] || Zc, s2[e18]);
}
function Yl(e17) {
  switch (e17) {
    case 5126:
      return kl;
    case 35664:
      return Al;
    case 35665:
      return jl;
    case 35666:
      return Ml;
    case 35674:
      return Nl;
    case 35675:
      return Pl;
    case 35676:
      return Fl;
    case 5124:
    case 35670:
      return Il;
    case 35667:
    case 35671:
      return Ll;
    case 35668:
    case 35672:
      return Rl;
    case 35669:
    case 35673:
      return zl;
    case 5125:
      return Bl;
    case 36294:
      return Hl;
    case 36295:
      return Ul;
    case 36296:
      return Wl;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Gl;
    case 35679:
    case 36299:
    case 36307:
      return Kl;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return ql;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Jl;
  }
}
var Xl = class {
  constructor(e17, t3, n2) {
    let r2 = i;
    this.id = e17, this.addr = n2, this[r2(610)] = [], this.type = t3[r2(1112)], this[r2(428)] = Ol(t3.type);
  }
}, Zl = class {
  constructor(e17, t3, n2) {
    let r2 = i;
    this.id = e17, this.addr = n2, this.cache = [], this.type = t3.type, this[r2(803)] = t3[r2(803)], this.setValue = Yl(t3.type);
  }
}, Ql = class {
  constructor(e17) {
    let t3 = i;
    this.id = e17, this[t3(623)] = [], this.map = {};
  }
  setValue(e17, t3, n2) {
    let r2 = this.seq;
    for (let i2 = 0, a2 = r2.length; i2 !== a2; ++i2) {
      let a3 = r2[i2];
      a3.setValue(e17, t3[a3.id], n2);
    }
  }
}, $l = /(\w+)(\])?(\[|\.)?/g;
function eu(e17, t3) {
  e17[i(623)].push(t3), e17.map[t3.id] = t3;
}
function tu(e17, t3, n2) {
  let r2 = i, a2 = e17.name, o2 = a2.length;
  for ($l.lastIndex = 0; ; ) {
    let i2 = $l.exec(a2), s2 = $l[r2(558)], c2 = i2[1], l2 = i2[2] === `]`, u2 = i2[3];
    if (l2 && (c2 |= 0), u2 === void 0 || u2 === `[` && s2 + 2 === o2) {
      eu(n2, u2 === void 0 ? new Xl(c2, e17, t3) : new Zl(c2, e17, t3));
      break;
    } else {
      let e18 = n2.map[c2];
      e18 === void 0 && (e18 = new Ql(c2), eu(n2, e18)), n2 = e18;
    }
  }
}
var nu = class {
  constructor(e17, t3) {
    let n2 = i;
    this.seq = [], this[n2(579)] = {};
    let r2 = e17.getProgramParameter(t3, e17.ACTIVE_UNIFORMS);
    for (let i2 = 0; i2 < r2; ++i2) {
      let r3 = e17[n2(824)](t3, i2);
      tu(r3, e17.getUniformLocation(t3, r3.name), this);
    }
    let a2 = [], o2 = [];
    for (let t4 of this.seq) t4.type === e17.SAMPLER_2D_SHADOW || t4.type === e17.SAMPLER_CUBE_SHADOW || t4.type === e17.SAMPLER_2D_ARRAY_SHADOW ? a2.push(t4) : o2.push(t4);
    a2[n2(660)] > 0 && (this.seq = a2.concat(o2));
  }
  setValue(e17, t3, n2, r2) {
    let a2 = i, o2 = this[a2(579)][t3];
    o2 !== void 0 && o2.setValue(e17, n2, r2);
  }
  setOptional(e17, t3, n2) {
    let r2 = i, a2 = t3[n2];
    a2 !== void 0 && this[r2(428)](e17, n2, a2);
  }
  static upload(e17, t3, n2, r2) {
    for (let i2 = 0, a2 = t3.length; i2 !== a2; ++i2) {
      let a3 = t3[i2], o2 = n2[a3.id];
      o2.needsUpdate !== false && a3.setValue(e17, o2.value, r2);
    }
  }
  static seqWithValue(e17, t3) {
    let n2 = [];
    for (let r2 = 0, i2 = e17.length; r2 !== i2; ++r2) {
      let i3 = e17[r2];
      i3.id in t3 && n2.push(i3);
    }
    return n2;
  }
};
function ru(e17, t3, n2) {
  let r2 = e17.createShader(t3);
  return e17.shaderSource(r2, n2), e17.compileShader(r2), r2;
}
var iu = 37297, au = 0;
function ou(e17, t3) {
  let n2 = i, r2 = e17.split(`
`), a2 = [], o2 = Math.max(t3 - 6, 0), s2 = Math.min(t3 + 6, r2[n2(660)]);
  for (let e18 = o2; e18 < s2; e18++) {
    let n3 = e18 + 1;
    a2.push((n3 === t3 ? `>` : ` `) + ` ` + n3 + `: ` + r2[e18]);
  }
  return a2[n2(653)](`
`);
}
var su = new G();
function cu(e17) {
  let t3 = i;
  K._getMatrix(su, K[t3(756)], e17);
  let n2 = `mat3( ` + su[t3(992)].map((e18) => e18.toFixed(4)) + ` )`;
  switch (K.getTransfer(e17)) {
    case ot:
      return [n2, t3(1279)];
    case st:
      return [n2, `sRGBTransferOETF`];
    default:
      return z(t3(1076), e17), [n2, t3(1279)];
  }
}
function lu(e17, t3, n2) {
  let r2 = i, a2 = e17[r2(1483)](t3, e17.COMPILE_STATUS), o2 = (e17.getShaderInfoLog(t3) || ``).trim();
  if (a2 && o2 === ``) return ``;
  let s2 = /ERROR: 0:(\d+)/.exec(o2);
  if (s2) {
    let i2 = parseInt(s2[1]);
    return n2[r2(1273)]() + `

` + o2 + `

` + ou(e17.getShaderSource(t3), i2);
  } else return o2;
}
function uu(e17, t3) {
  let n2 = i, r2 = cu(t3);
  return [n2(250) + e17 + n2(462), `	return ` + r2[1] + `( vec4( value.rgb * ` + r2[0] + n2(1489), `}`].join(`
`);
}
var du = { 1: `Linear`, 2: `Reinhard`, 3: `Cineon`, 4: i(801), 6: `AgX`, 7: `Neutral`, 5: `Custom` };
function fu(e17, t3) {
  let n2 = i, r2 = du[t3];
  return r2 === void 0 ? (z(`WebGLProgram: Unsupported toneMapping:`, t3), n2(417) + e17 + `( vec3 color ) { return LinearToneMapping( color ); }`) : `vec3 ` + e17 + `( vec3 color ) { return ` + r2 + `ToneMapping( color ); }`;
}
var pu = new W();
function mu() {
  return K.getLuminanceCoefficients(pu), [`float luminance( const in vec3 rgb ) {`, `	const vec3 weights = vec3( ` + pu.x.toFixed(4) + `, ` + pu.y.toFixed(4) + `, ` + pu.z.toFixed(4) + ` );`, `	return dot( weights, rgb );`, `}`].join(`
`);
}
function hu(e17) {
  return [e17.extensionClipCullDistance ? `#extension GL_ANGLE_clip_cull_distance : require` : ``, e17.extensionMultiDraw ? `#extension GL_ANGLE_multi_draw : require` : ``].filter(vu).join(`
`);
}
function gu(e17) {
  let t3 = [];
  for (let n2 in e17) {
    let r2 = e17[n2];
    r2 !== false && t3.push(`#define ` + n2 + ` ` + r2);
  }
  return t3.join(`
`);
}
function _u(e17, t3) {
  let n2 = i, r2 = {}, a2 = e17.getProgramParameter(t3, e17.ACTIVE_ATTRIBUTES);
  for (let i2 = 0; i2 < a2; i2++) {
    let a3 = e17[n2(813)](t3, i2), o2 = a3[n2(1301)], s2 = 1;
    a3[n2(1112)] === e17.FLOAT_MAT2 && (s2 = 2), a3[n2(1112)] === e17.FLOAT_MAT3 && (s2 = 3), a3.type === e17.FLOAT_MAT4 && (s2 = 4), r2[o2] = { type: a3.type, location: e17[n2(1001)](t3, o2), locationSize: s2 };
  }
  return r2;
}
function vu(e17) {
  return e17 !== ``;
}
function yu(e17, t3) {
  let n2 = i, r2 = t3[n2(411)] + t3.numSpotLightMaps - t3.numSpotLightShadowsWithMaps;
  return e17.replace(/NUM_DIR_LIGHTS/g, t3.numDirLights)[n2(720)](/NUM_SPOT_LIGHTS/g, t3[n2(1426)]).replace(/NUM_SPOT_LIGHT_MAPS/g, t3.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, r2).replace(/NUM_RECT_AREA_LIGHTS/g, t3.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t3.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t3.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t3.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t3.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t3.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t3.numPointLightShadows);
}
function bu(e17, t3) {
  let n2 = i;
  return e17.replace(/NUM_CLIPPING_PLANES/g, t3[n2(279)])[n2(720)](/UNION_CLIPPING_PLANES/g, t3[n2(279)] - t3.numClipIntersection);
}
var xu = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Su(e17) {
  return e17.replace(xu, wu);
}
var Cu = /* @__PURE__ */ new Map();
function wu(e17, t3) {
  let n2 = Z[t3];
  if (n2 === void 0) {
    let e18 = Cu.get(t3);
    if (e18 !== void 0) n2 = Z[e18], z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`, t3, e18);
    else throw Error(`Can not resolve #include <` + t3 + `>`);
  }
  return Su(n2);
}
var Tu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Eu(e17) {
  return e17.replace(Tu, Du);
}
function Du(e17, t3, n2, r2) {
  let a2 = i, o2 = ``;
  for (let e18 = parseInt(t3); e18 < parseInt(n2); e18++) o2 += r2.replace(/\[\s*i\s*\]/g, `[ ` + e18 + ` ]`)[a2(720)](/UNROLLED_LOOP_INDEX/g, e18);
  return o2;
}
function Ou(e17) {
  let t3 = i, n2 = `precision ` + e17.precision + ` float;
	precision ` + e17.precision + ` int;
	precision ` + e17.precision + ` sampler2D;
	precision ` + e17[t3(1181)] + t3(837) + e17.precision + t3(533) + e17.precision + ` sampler2DArray;
	precision ` + e17.precision + ` sampler2DShadow;
	precision ` + e17.precision + ` samplerCubeShadow;
	precision ` + e17.precision + ` sampler2DArrayShadow;
	precision ` + e17.precision + ` isampler2D;
	precision ` + e17.precision + t3(330) + e17.precision + ` isamplerCube;
	precision ` + e17[t3(1181)] + ` isampler2DArray;
	precision ` + e17.precision + ` usampler2D;
	precision ` + e17.precision + ` usampler3D;
	precision ` + e17[t3(1181)] + ` usamplerCube;
	precision ` + e17.precision + ` usampler2DArray;
	`;
  return e17.precision === `highp` ? n2 += `
#define HIGH_PRECISION` : e17.precision === `mediump` ? n2 += `
#define MEDIUM_PRECISION` : e17.precision === `lowp` && (n2 += `
#define LOW_PRECISION`), n2;
}
var ku = { 1: `SHADOWMAP_TYPE_PCF`, 3: `SHADOWMAP_TYPE_VSM` };
function Au(e17) {
  return ku[e17[i(593)]] || `SHADOWMAP_TYPE_BASIC`;
}
var ju = { 301: i(836), 302: `ENVMAP_TYPE_CUBE`, 306: `ENVMAP_TYPE_CUBE_UV` };
function Mu(e17) {
  let t3 = i;
  return e17.envMap === false ? `ENVMAP_TYPE_CUBE` : ju[e17.envMapMode] || t3(836);
}
var Nu = { 302: `ENVMAP_MODE_REFRACTION` };
function Pu(e17) {
  return e17.envMap === false ? `ENVMAP_MODE_REFLECTION` : Nu[e17.envMapMode] || `ENVMAP_MODE_REFLECTION`;
}
var Fu = { 0: `ENVMAP_BLENDING_MULTIPLY`, 1: `ENVMAP_BLENDING_MIX`, 2: `ENVMAP_BLENDING_ADD` };
function Iu(e17) {
  return e17.envMap === false ? `ENVMAP_BLENDING_NONE` : Fu[e17.combine] || `ENVMAP_BLENDING_NONE`;
}
function Lu(e17) {
  let t3 = i, n2 = e17[t3(312)];
  if (n2 === null) return null;
  let r2 = Math[t3(391)](n2) - 2, a2 = 1 / n2;
  return { texelWidth: 1 / (3 * Math.max(2 ** r2, 112)), texelHeight: a2, maxMip: r2 };
}
function Ru(e17, t3, n2, r2) {
  let a2 = i, o2 = e17.getContext(), s2 = n2.defines, c2 = n2.vertexShader, l2 = n2.fragmentShader, u2 = Au(n2), d2 = Mu(n2), f2 = Pu(n2), p2 = Iu(n2), m2 = Lu(n2), h2 = hu(n2), g2 = gu(s2), _2 = o2.createProgram(), v2, y2, b2 = n2.glslVersion ? `#version ` + n2.glslVersion + `
` : ``;
  n2.isRawShaderMaterial ? (v2 = [`#define SHADER_TYPE ` + n2.shaderType, a2(161) + n2[a2(515)], g2].filter(vu).join(`
`), v2[a2(660)] > 0 && (v2 += `
`), y2 = [`#define SHADER_TYPE ` + n2[a2(1077)], `#define SHADER_NAME ` + n2.shaderName, g2].filter(vu)[a2(653)](`
`), y2.length > 0 && (y2 += `
`)) : (v2 = [Ou(n2), a2(764) + n2[a2(1077)], `#define SHADER_NAME ` + n2.shaderName, g2, n2.extensionClipCullDistance ? `#define USE_CLIP_DISTANCE` : ``, n2.batching ? `#define USE_BATCHING` : ``, n2[a2(1081)] ? `#define USE_BATCHING_COLOR` : ``, n2[a2(345)] ? `#define USE_INSTANCING` : ``, n2.instancingColor ? `#define USE_INSTANCING_COLOR` : ``, n2.instancingMorph ? a2(981) : ``, n2.useFog && n2.fog ? `#define USE_FOG` : ``, n2.useFog && n2[a2(1247)] ? a2(635) : ``, n2.map ? `#define USE_MAP` : ``, n2.envMap ? `#define USE_ENVMAP` : ``, n2[a2(195)] ? `#define ` + f2 : ``, n2.lightMap ? `#define USE_LIGHTMAP` : ``, n2.aoMap ? `#define USE_AOMAP` : ``, n2.bumpMap ? `#define USE_BUMPMAP` : ``, n2.normalMap ? a2(620) : ``, n2.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n2.normalMapTangentSpace ? `#define USE_NORMALMAP_TANGENTSPACE` : ``, n2.displacementMap ? a2(1048) : ``, n2.emissiveMap ? `#define USE_EMISSIVEMAP` : ``, n2[a2(1091)] ? a2(1028) : ``, n2[a2(1437)] ? `#define USE_ANISOTROPYMAP` : ``, n2[a2(241)] ? `#define USE_CLEARCOATMAP` : ``, n2.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n2[a2(1136)] ? `#define USE_CLEARCOAT_NORMALMAP` : ``, n2.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n2[a2(658)] ? a2(1011) : ``, n2.specularMap ? `#define USE_SPECULARMAP` : ``, n2.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n2.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n2.roughnessMap ? `#define USE_ROUGHNESSMAP` : ``, n2.metalnessMap ? `#define USE_METALNESSMAP` : ``, n2.alphaMap ? `#define USE_ALPHAMAP` : ``, n2[a2(939)] ? a2(860) : ``, n2.transmission ? `#define USE_TRANSMISSION` : ``, n2[a2(864)] ? `#define USE_TRANSMISSIONMAP` : ``, n2.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n2.sheenColorMap ? `#define USE_SHEEN_COLORMAP` : ``, n2.sheenRoughnessMap ? `#define USE_SHEEN_ROUGHNESSMAP` : ``, n2.mapUv ? a2(1492) + n2[a2(271)] : ``, n2.alphaMapUv ? `#define ALPHAMAP_UV ` + n2.alphaMapUv : ``, n2.lightMapUv ? a2(830) + n2[a2(313)] : ``, n2.aoMapUv ? `#define AOMAP_UV ` + n2.aoMapUv : ``, n2[a2(907)] ? `#define EMISSIVEMAP_UV ` + n2.emissiveMapUv : ``, n2.bumpMapUv ? `#define BUMPMAP_UV ` + n2.bumpMapUv : ``, n2.normalMapUv ? `#define NORMALMAP_UV ` + n2[a2(947)] : ``, n2.displacementMapUv ? `#define DISPLACEMENTMAP_UV ` + n2.displacementMapUv : ``, n2.metalnessMapUv ? `#define METALNESSMAP_UV ` + n2.metalnessMapUv : ``, n2.roughnessMapUv ? a2(713) + n2.roughnessMapUv : ``, n2.anisotropyMapUv ? `#define ANISOTROPYMAP_UV ` + n2.anisotropyMapUv : ``, n2.clearcoatMapUv ? a2(892) + n2.clearcoatMapUv : ``, n2[a2(399)] ? `#define CLEARCOAT_NORMALMAP_UV ` + n2.clearcoatNormalMapUv : ``, n2[a2(657)] ? a2(1224) + n2.clearcoatRoughnessMapUv : ``, n2[a2(1152)] ? `#define IRIDESCENCEMAP_UV ` + n2.iridescenceMapUv : ``, n2[a2(197)] ? `#define IRIDESCENCE_THICKNESSMAP_UV ` + n2.iridescenceThicknessMapUv : ``, n2.sheenColorMapUv ? a2(308) + n2.sheenColorMapUv : ``, n2[a2(1345)] ? `#define SHEEN_ROUGHNESSMAP_UV ` + n2[a2(1345)] : ``, n2.specularMapUv ? `#define SPECULARMAP_UV ` + n2.specularMapUv : ``, n2.specularColorMapUv ? `#define SPECULAR_COLORMAP_UV ` + n2.specularColorMapUv : ``, n2.specularIntensityMapUv ? `#define SPECULAR_INTENSITYMAP_UV ` + n2[a2(1306)] : ``, n2.transmissionMapUv ? `#define TRANSMISSIONMAP_UV ` + n2.transmissionMapUv : ``, n2[a2(176)] ? `#define THICKNESSMAP_UV ` + n2[a2(176)] : ``, n2[a2(731)] && n2.flatShading === false ? `#define USE_TANGENT` : ``, n2.vertexNormals ? `#define HAS_NORMAL` : ``, n2.vertexColors ? `#define USE_COLOR` : ``, n2[a2(437)] ? `#define USE_COLOR_ALPHA` : ``, n2.vertexUv1s ? `#define USE_UV1` : ``, n2.vertexUv2s ? `#define USE_UV2` : ``, n2.vertexUv3s ? a2(290) : ``, n2.pointsUvs ? `#define USE_POINTS_UV` : ``, n2.flatShading ? `#define FLAT_SHADED` : ``, n2.skinning ? `#define USE_SKINNING` : ``, n2.morphTargets ? a2(625) : ``, n2[a2(559)] && n2.flatShading === false ? a2(782) : ``, n2.morphColors ? `#define USE_MORPHCOLORS` : ``, n2.morphTargetsCount > 0 ? a2(786) + n2.morphTextureStride : ``, n2.morphTargetsCount > 0 ? `#define MORPHTARGETS_COUNT ` + n2.morphTargetsCount : ``, n2[a2(415)] ? `#define DOUBLE_SIDED` : ``, n2.flipSided ? `#define FLIP_SIDED` : ``, n2.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n2.shadowMapEnabled ? a2(1281) + u2 : ``, n2.sizeAttenuation ? `#define USE_SIZEATTENUATION` : ``, n2.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n2.logarithmicDepthBuffer ? a2(1265) : ``, n2.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``, `uniform mat4 modelMatrix;`, `uniform mat4 modelViewMatrix;`, `uniform mat4 projectionMatrix;`, `uniform mat4 viewMatrix;`, a2(838), `uniform vec3 cameraPosition;`, a2(187), `#ifdef USE_INSTANCING`, `	attribute mat4 instanceMatrix;`, `#endif`, a2(1242), a2(384), `#endif`, `#ifdef USE_INSTANCING_MORPH`, `	uniform sampler2D morphTexture;`, `#endif`, a2(554), `attribute vec3 normal;`, `attribute vec2 uv;`, `#ifdef USE_UV1`, `	attribute vec2 uv1;`, `#endif`, `#ifdef USE_UV2`, a2(1422), `#endif`, a2(828), `	attribute vec2 uv3;`, a2(1405), `#ifdef USE_TANGENT`, `	attribute vec4 tangent;`, `#endif`, a2(1389), a2(1016), `#elif defined( USE_COLOR )`, `	attribute vec3 color;`, `#endif`, a2(1299), a2(858), `	attribute vec4 skinWeight;`, a2(1405), `
`].filter(vu).join(`
`), y2 = [Ou(n2), `#define SHADER_TYPE ` + n2.shaderType, `#define SHADER_NAME ` + n2.shaderName, g2, n2.useFog && n2.fog ? `#define USE_FOG` : ``, n2.useFog && n2.fogExp2 ? `#define FOG_EXP2` : ``, n2.alphaToCoverage ? `#define ALPHA_TO_COVERAGE` : ``, n2.map ? a2(790) : ``, n2[a2(894)] ? `#define USE_MATCAP` : ``, n2.envMap ? `#define USE_ENVMAP` : ``, n2.envMap ? `#define ` + d2 : ``, n2.envMap ? `#define ` + f2 : ``, n2.envMap ? a2(1281) + p2 : ``, m2 ? `#define CUBEUV_TEXEL_WIDTH ` + m2.texelWidth : ``, m2 ? `#define CUBEUV_TEXEL_HEIGHT ` + m2.texelHeight : ``, m2 ? `#define CUBEUV_MAX_MIP ` + m2[a2(585)] + `.0` : ``, n2[a2(1054)] ? a2(1320) : ``, n2.aoMap ? `#define USE_AOMAP` : ``, n2.bumpMap ? `#define USE_BUMPMAP` : ``, n2.normalMap ? `#define USE_NORMALMAP` : ``, n2.normalMapObjectSpace ? `#define USE_NORMALMAP_OBJECTSPACE` : ``, n2.normalMapTangentSpace ? a2(1268) : ``, n2[a2(167)] ? `#define USE_PACKED_NORMALMAP` : ``, n2.emissiveMap ? a2(718) : ``, n2[a2(1091)] ? `#define USE_ANISOTROPY` : ``, n2.anisotropyMap ? `#define USE_ANISOTROPYMAP` : ``, n2.clearcoat ? `#define USE_CLEARCOAT` : ``, n2.clearcoatMap ? `#define USE_CLEARCOATMAP` : ``, n2.clearcoatRoughnessMap ? `#define USE_CLEARCOAT_ROUGHNESSMAP` : ``, n2.clearcoatNormalMap ? a2(239) : ``, n2[a2(815)] ? `#define USE_DISPERSION` : ``, n2.iridescence ? `#define USE_IRIDESCENCE` : ``, n2.iridescenceMap ? `#define USE_IRIDESCENCEMAP` : ``, n2[a2(658)] ? `#define USE_IRIDESCENCE_THICKNESSMAP` : ``, n2.specularMap ? `#define USE_SPECULARMAP` : ``, n2.specularColorMap ? `#define USE_SPECULAR_COLORMAP` : ``, n2.specularIntensityMap ? `#define USE_SPECULAR_INTENSITYMAP` : ``, n2.roughnessMap ? a2(469) : ``, n2.metalnessMap ? `#define USE_METALNESSMAP` : ``, n2.alphaMap ? `#define USE_ALPHAMAP` : ``, n2[a2(283)] ? `#define USE_ALPHATEST` : ``, n2.alphaHash ? `#define USE_ALPHAHASH` : ``, n2[a2(1391)] ? `#define USE_SHEEN` : ``, n2.sheenColorMap ? a2(665) : ``, n2.sheenRoughnessMap ? a2(1275) : ``, n2.transmission ? `#define USE_TRANSMISSION` : ``, n2.transmissionMap ? `#define USE_TRANSMISSIONMAP` : ``, n2.thicknessMap ? `#define USE_THICKNESSMAP` : ``, n2.vertexTangents && n2.flatShading === false ? a2(1310) : ``, n2.vertexColors || n2.instancingColor ? `#define USE_COLOR` : ``, n2.vertexAlphas || n2.batchingColor ? `#define USE_COLOR_ALPHA` : ``, n2.vertexUv1s ? a2(778) : ``, n2.vertexUv2s ? `#define USE_UV2` : ``, n2.vertexUv3s ? `#define USE_UV3` : ``, n2.pointsUvs ? `#define USE_POINTS_UV` : ``, n2.gradientMap ? `#define USE_GRADIENTMAP` : ``, n2.flatShading ? `#define FLAT_SHADED` : ``, n2.doubleSided ? `#define DOUBLE_SIDED` : ``, n2[a2(1036)] ? `#define FLIP_SIDED` : ``, n2.shadowMapEnabled ? `#define USE_SHADOWMAP` : ``, n2.shadowMapEnabled ? `#define ` + u2 : ``, n2.premultipliedAlpha ? a2(1179) : ``, n2.numLightProbes > 0 ? `#define USE_LIGHT_PROBES` : ``, n2[a2(914)] > 0 ? `#define USE_LIGHT_PROBES_GRID` : ``, n2.decodeVideoTexture ? `#define DECODE_VIDEO_TEXTURE` : ``, n2.decodeVideoTextureEmissive ? `#define DECODE_VIDEO_TEXTURE_EMISSIVE` : ``, n2.logarithmicDepthBuffer ? `#define USE_LOGARITHMIC_DEPTH_BUFFER` : ``, n2.reversedDepthBuffer ? `#define USE_REVERSED_DEPTH_BUFFER` : ``, `uniform mat4 viewMatrix;`, `uniform vec3 cameraPosition;`, `uniform bool isOrthographic;`, n2[a2(876)] === 0 ? `` : `#define TONE_MAPPING`, n2.toneMapping === 0 ? `` : Z.tonemapping_pars_fragment, n2.toneMapping === 0 ? `` : fu(`toneMapping`, n2.toneMapping), n2.dithering ? `#define DITHERING` : ``, n2.opaque ? `#define OPAQUE` : ``, Z.colorspace_pars_fragment, uu(a2(214), n2.outputColorSpace), mu(), n2.useDepthPacking ? `#define DEPTH_PACKING ` + n2.depthPacking : ``, `
`].filter(vu).join(`
`)), c2 = Su(c2), c2 = yu(c2, n2), c2 = bu(c2, n2), l2 = Su(l2), l2 = yu(l2, n2), l2 = bu(l2, n2), c2 = Eu(c2), l2 = Eu(l2), n2.isRawShaderMaterial !== true && (b2 = `#version 300 es
`, v2 = [h2, a2(1223), a2(1442), `#define texture2D texture`][a2(653)](`
`) + `
` + v2, y2 = [`#define varying in`, n2[a2(1516)] === `300 es` ? `` : a2(1323), n2.glslVersion === `300 es` ? `` : `#define gl_FragColor pc_fragColor`, `#define gl_FragDepthEXT gl_FragDepth`, `#define texture2D texture`, a2(1060), `#define texture2DProj textureProj`, `#define texture2DLodEXT textureLod`, `#define texture2DProjLodEXT textureProjLod`, `#define textureCubeLodEXT textureLod`, `#define texture2DGradEXT textureGrad`, `#define texture2DProjGradEXT textureProjGrad`, `#define textureCubeGradEXT textureGrad`].join(`
`) + `
` + y2);
  let x2 = b2 + v2 + c2, S2 = b2 + y2 + l2, C2 = ru(o2, o2.VERTEX_SHADER, x2), w2 = ru(o2, o2[a2(1047)], S2);
  o2.attachShader(_2, C2), o2.attachShader(_2, w2), n2.index0AttributeName === void 0 ? n2[a2(1216)] === true && o2.bindAttribLocation(_2, 0, `position`) : o2.bindAttribLocation(_2, 0, n2.index0AttributeName), o2.linkProgram(_2);
  function T2(t4) {
    let n3 = a2;
    if (e17[n3(178)].checkShaderErrors) {
      let r3 = o2.getProgramInfoLog(_2) || ``, i2 = o2.getShaderInfoLog(C2) || ``, a3 = o2.getShaderInfoLog(w2) || ``, s3 = r3.trim(), c3 = i2.trim(), l3 = a3.trim(), u3 = true, d3 = true;
      if (o2.getProgramParameter(_2, o2.LINK_STATUS) === false) if (u3 = false, typeof e17.debug[n3(232)] == `function`) e17.debug.onShaderError(o2, _2, C2, w2);
      else {
        let e18 = lu(o2, C2, `vertex`), r4 = lu(o2, w2, `fragment`);
        B(n3(861) + o2.getError() + ` - VALIDATE_STATUS ` + o2.getProgramParameter(_2, o2.VALIDATE_STATUS) + `

Material Name: ` + t4[n3(1301)] + `
Material Type: ` + t4.type + `

Program Info Log: ` + s3 + `
` + e18 + `
` + r4);
      }
      else s3 === `` ? (c3 === `` || l3 === ``) && (d3 = false) : z(n3(774), s3);
      d3 && (t4.diagnostics = { runnable: u3, programLog: s3, vertexShader: { log: c3, prefix: v2 }, fragmentShader: { log: l3, prefix: y2 } });
    }
    o2.deleteShader(C2), o2.deleteShader(w2), E2 = new nu(o2, _2), D2 = _u(o2, _2);
  }
  let E2;
  this.getUniforms = function() {
    return E2 === void 0 && T2(this), E2;
  };
  let D2;
  this.getAttributes = function() {
    return D2 === void 0 && T2(this), D2;
  };
  let O2 = n2[a2(747)] === false;
  return this.isReady = function() {
    return O2 === false && (O2 = o2[a2(1063)](_2, iu)), O2;
  }, this.destroy = function() {
    r2.releaseStatesOfProgram(this), o2.deleteProgram(_2), this.program = void 0;
  }, this.type = n2.shaderType, this.name = n2.shaderName, this.id = au++, this.cacheKey = t3, this.usedTimes = 1, this.program = _2, this.vertexShader = C2, this.fragmentShader = w2, this;
}
var zu = 0, Bu = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e17) {
    let t3 = i, n2 = e17.vertexShader, r2 = e17.fragmentShader, a2 = this._getShaderStage(n2), o2 = this._getShaderStage(r2), s2 = this[t3(423)](e17);
    return s2.has(a2) === false && (s2.add(a2), a2.usedTimes++), s2.has(o2) === false && (s2.add(o2), o2.usedTimes++), this;
  }
  remove(e17) {
    let t3 = i, n2 = this.materialCache.get(e17);
    for (let e18 of n2) e18.usedTimes--, e18.usedTimes === 0 && this.shaderCache.delete(e18.code);
    return this[t3(933)].delete(e17), this;
  }
  getVertexShaderID(e17) {
    let t3 = i;
    return this[t3(1382)](e17[t3(1343)]).id;
  }
  getFragmentShaderID(e17) {
    let t3 = i;
    return this._getShaderStage(e17[t3(386)]).id;
  }
  dispose() {
    let e17 = i;
    this[e17(405)].clear(), this.materialCache.clear();
  }
  [i(423)](e17) {
    let t3 = i, n2 = this.materialCache, r2 = n2[t3(859)](e17);
    return r2 === void 0 && (r2 = /* @__PURE__ */ new Set(), n2[t3(1139)](e17, r2)), r2;
  }
  _getShaderStage(e17) {
    let t3 = i, n2 = this[t3(405)], r2 = n2.get(e17);
    return r2 === void 0 && (r2 = new Vu(e17), n2.set(e17, r2)), r2;
  }
}, Vu = class {
  constructor(e17) {
    let t3 = i;
    this.id = zu++, this[t3(406)] = e17, this.usedTimes = 0;
  }
};
function Hu(e17) {
  return e17 === 1030 || e17 === 37490 || e17 === 36285;
}
function Uu(e17, t3, n2, r2, a2, o2) {
  let s2 = i, c2 = new En(), l2 = new Bu(), u2 = /* @__PURE__ */ new Set(), d2 = [], f2 = /* @__PURE__ */ new Map(), p2 = r2.logarithmicDepthBuffer, m2 = r2[s2(1181)], h2 = { MeshDepthMaterial: `depth`, MeshDistanceMaterial: `distance`, MeshNormalMaterial: `normal`, MeshBasicMaterial: `basic`, MeshLambertMaterial: `lambert`, MeshPhongMaterial: `phong`, MeshToonMaterial: `toon`, MeshStandardMaterial: s2(819), MeshPhysicalMaterial: `physical`, MeshMatcapMaterial: s2(894), LineBasicMaterial: `basic`, LineDashedMaterial: `dashed`, PointsMaterial: `points`, ShadowMaterial: s2(1271), SpriteMaterial: `sprite` };
  function g2(e18) {
    return u2.add(e18), e18 === 0 ? `uv` : `uv` + e18;
  }
  function _2(i2, a3, c3, d3, f3, _3) {
    let v3 = s2, y3 = d3.fog, b3 = f3[v3(641)], x3 = i2.isMeshStandardMaterial || i2.isMeshLambertMaterial || i2.isMeshPhongMaterial ? d3.environment : null, S3 = i2.isMeshStandardMaterial || i2.isMeshLambertMaterial && !i2.envMap || i2.isMeshPhongMaterial && !i2.envMap, C3 = t3[v3(859)](i2.envMap || x3, S3), w3 = C3 && C3.mapping === 306 ? C3[v3(495)].height : null, T3 = h2[i2.type];
    i2[v3(1181)] !== null && (m2 = r2.getMaxPrecision(i2[v3(1181)]), m2 !== i2.precision && z(`WebGLProgram.getParameters:`, i2.precision, v3(1204), m2, `instead.`));
    let E2 = b3[v3(1175)].position || b3.morphAttributes.normal || b3.morphAttributes.color, D2 = E2 === void 0 ? 0 : E2.length, O2 = 0;
    b3.morphAttributes[v3(1477)] !== void 0 && (O2 = 1), b3.morphAttributes.normal !== void 0 && (O2 = 2), b3.morphAttributes[v3(1119)] !== void 0 && (O2 = 3);
    let k2, A2, ee2, j2;
    if (T3) {
      let e18 = uc[T3];
      k2 = e18.vertexShader, A2 = e18.fragmentShader;
    } else k2 = i2.vertexShader, A2 = i2.fragmentShader, l2.update(i2), ee2 = l2[v3(839)](i2), j2 = l2.getFragmentShaderID(i2);
    let te2 = e17.getRenderTarget(), ne2 = e17.state.buffers.depth.getReversed(), M2 = f3.isInstancedMesh === true, re2 = f3.isBatchedMesh === true, ie2 = !!i2.map, ae2 = !!i2.matcap, oe2 = !!C3, se2 = !!i2.aoMap, N2 = !!i2[v3(1054)], ce2 = !!i2.bumpMap, le2 = !!i2.normalMap, ue2 = !!i2.displacementMap, de2 = !!i2[v3(691)], P2 = !!i2.metalnessMap, fe2 = !!i2[v3(1289)], pe2 = i2.anisotropy > 0, me2 = i2.clearcoat > 0, he2 = i2.dispersion > 0, ge2 = i2[v3(274)] > 0, _e2 = i2[v3(1391)] > 0, ve2 = i2.transmission > 0, ye2 = pe2 && !!i2.anisotropyMap, be2 = me2 && !!i2.clearcoatMap, xe2 = me2 && !!i2.clearcoatNormalMap, Se2 = me2 && !!i2.clearcoatRoughnessMap, Ce2 = ge2 && !!i2[v3(413)], we2 = ge2 && !!i2[v3(658)], Te2 = _e2 && !!i2[v3(289)], Ee2 = _e2 && !!i2.sheenRoughnessMap, De2 = !!i2.specularMap, Oe2 = !!i2[v3(1065)], ke2 = !!i2.specularIntensityMap, Ae2 = ve2 && !!i2.transmissionMap, je2 = ve2 && !!i2.thicknessMap, Me2 = !!i2[v3(1283)], Ne2 = !!i2.alphaMap, F2 = i2.alphaTest > 0, Pe2 = !!i2.alphaHash, Fe2 = !!i2.extensions, Ie2 = 0;
    i2[v3(1125)] && (te2 === null || te2.isXRRenderTarget === true) && (Ie2 = e17.toneMapping);
    let I2 = { shaderID: T3, shaderType: i2[v3(1112)], shaderName: i2.name, vertexShader: k2, fragmentShader: A2, defines: i2.defines, customVertexShaderID: ee2, customFragmentShaderID: j2, isRawShaderMaterial: i2.isRawShaderMaterial === true, glslVersion: i2[v3(1516)], precision: m2, batching: re2, batchingColor: re2 && f3._colorsTexture !== null, instancing: M2, instancingColor: M2 && f3.instanceColor !== null, instancingMorph: M2 && f3.morphTexture !== null, outputColorSpace: te2 === null ? e17.outputColorSpace : te2.isXRRenderTarget === true ? te2[v3(1017)].colorSpace : K.workingColorSpace, alphaToCoverage: !!i2.alphaToCoverage, map: ie2, matcap: ae2, envMap: oe2, envMapMode: oe2 && C3.mapping, envMapCubeUVHeight: w3, aoMap: se2, lightMap: N2, bumpMap: ce2, normalMap: le2, displacementMap: ue2, emissiveMap: de2, normalMapObjectSpace: le2 && i2.normalMapType === 1, normalMapTangentSpace: le2 && i2.normalMapType === 0, packedNormalMap: le2 && i2[v3(1331)] === 0 && Hu(i2.normalMap.format), metalnessMap: P2, roughnessMap: fe2, anisotropy: pe2, anisotropyMap: ye2, clearcoat: me2, clearcoatMap: be2, clearcoatNormalMap: xe2, clearcoatRoughnessMap: Se2, dispersion: he2, iridescence: ge2, iridescenceMap: Ce2, iridescenceThicknessMap: we2, sheen: _e2, sheenColorMap: Te2, sheenRoughnessMap: Ee2, specularMap: De2, specularColorMap: Oe2, specularIntensityMap: ke2, transmission: ve2, transmissionMap: Ae2, thicknessMap: je2, gradientMap: Me2, opaque: i2.transparent === false && i2.blending === 1 && i2.alphaToCoverage === false, alphaMap: Ne2, alphaTest: F2, alphaHash: Pe2, combine: i2.combine, mapUv: ie2 && g2(i2.map.channel), aoMapUv: se2 && g2(i2.aoMap.channel), lightMapUv: N2 && g2(i2.lightMap.channel), bumpMapUv: ce2 && g2(i2[v3(1354)].channel), normalMapUv: le2 && g2(i2.normalMap.channel), displacementMapUv: ue2 && g2(i2[v3(180)].channel), emissiveMapUv: de2 && g2(i2.emissiveMap.channel), metalnessMapUv: P2 && g2(i2.metalnessMap.channel), roughnessMapUv: fe2 && g2(i2.roughnessMap.channel), anisotropyMapUv: ye2 && g2(i2.anisotropyMap.channel), clearcoatMapUv: be2 && g2(i2.clearcoatMap.channel), clearcoatNormalMapUv: xe2 && g2(i2.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Se2 && g2(i2.clearcoatRoughnessMap.channel), iridescenceMapUv: Ce2 && g2(i2[v3(413)].channel), iridescenceThicknessMapUv: we2 && g2(i2.iridescenceThicknessMap.channel), sheenColorMapUv: Te2 && g2(i2.sheenColorMap[v3(288)]), sheenRoughnessMapUv: Ee2 && g2(i2.sheenRoughnessMap.channel), specularMapUv: De2 && g2(i2.specularMap.channel), specularColorMapUv: Oe2 && g2(i2.specularColorMap.channel), specularIntensityMapUv: ke2 && g2(i2[v3(1445)].channel), transmissionMapUv: Ae2 && g2(i2[v3(864)][v3(288)]), thicknessMapUv: je2 && g2(i2.thicknessMap.channel), alphaMapUv: Ne2 && g2(i2.alphaMap[v3(288)]), vertexTangents: !!b3[v3(1106)].tangent && (le2 || pe2), vertexNormals: !!b3.attributes.normal, vertexColors: i2[v3(264)], vertexAlphas: i2[v3(264)] === true && !!b3.attributes.color && b3.attributes.color.itemSize === 4, pointsUvs: f3[v3(291)] === true && !!b3.attributes.uv && (ie2 || Ne2), fog: !!y3, useFog: i2[v3(240)] === true, fogExp2: !!y3 && y3.isFogExp2, flatShading: i2.wireframe === false && (i2.flatShading === true || b3.attributes.normal === void 0 && le2 === false && (i2.isMeshLambertMaterial || i2[v3(945)] || i2.isMeshStandardMaterial || i2[v3(966)])), sizeAttenuation: i2[v3(418)] === true, logarithmicDepthBuffer: p2, reversedDepthBuffer: ne2, skinning: f3[v3(328)] === true, morphTargets: b3.morphAttributes.position !== void 0, morphNormals: b3.morphAttributes.normal !== void 0, morphColors: b3.morphAttributes.color !== void 0, morphTargetsCount: D2, morphTextureStride: O2, numDirLights: a3.directional[v3(660)], numPointLights: a3.point.length, numSpotLights: a3[v3(498)].length, numSpotLightMaps: a3.spotLightMap.length, numRectAreaLights: a3.rectArea.length, numHemiLights: a3.hemi.length, numDirLightShadows: a3.directionalShadowMap[v3(660)], numPointLightShadows: a3.pointShadowMap.length, numSpotLightShadows: a3.spotShadowMap.length, numSpotLightShadowsWithMaps: a3[v3(376)], numLightProbes: a3.numLightProbes, numLightProbeGrids: _3.length, numClippingPlanes: o2.numPlanes, numClipIntersection: o2.numIntersection, dithering: i2.dithering, shadowMapEnabled: e17.shadowMap.enabled && c3.length > 0, shadowMapType: e17.shadowMap.type, toneMapping: Ie2, decodeVideoTexture: ie2 && i2[v3(579)].isVideoTexture === true && K[v3(910)](i2.map.colorSpace) === `srgb`, decodeVideoTextureEmissive: de2 && i2.emissiveMap.isVideoTexture === true && K[v3(910)](i2.emissiveMap[v3(541)]) === v3(482), premultipliedAlpha: i2.premultipliedAlpha, doubleSided: i2.side === 2, flipSided: i2.side === 1, useDepthPacking: i2.depthPacking >= 0, depthPacking: i2.depthPacking || 0, index0AttributeName: i2.index0AttributeName, extensionClipCullDistance: Fe2 && i2[v3(617)][v3(880)] === true && n2.has(`WEBGL_clip_cull_distance`), extensionMultiDraw: (Fe2 && i2.extensions.multiDraw === true || re2) && n2.has(v3(219)), rendererExtensionParallelShaderCompile: n2.has(`KHR_parallel_shader_compile`), customProgramCacheKey: i2[v3(1276)]() };
    return I2.vertexUv1s = u2.has(1), I2.vertexUv2s = u2.has(2), I2.vertexUv3s = u2.has(3), u2.clear(), I2;
  }
  function v2(t4) {
    let n3 = s2, r3 = [];
    if (t4[n3(1117)] ? r3.push(t4.shaderID) : (r3.push(t4.customVertexShaderID), r3.push(t4[n3(1122)])), t4.defines !== void 0) for (let e18 in t4.defines) r3.push(e18), r3.push(t4.defines[e18]);
    return t4[n3(1256)] === false && (y2(r3, t4), b2(r3, t4), r3.push(e17.outputColorSpace)), r3[n3(1184)](t4.customProgramCacheKey), r3[n3(653)]();
  }
  function y2(e18, t4) {
    let n3 = s2;
    e18.push(t4.precision), e18.push(t4[n3(1355)]), e18.push(t4.envMapMode), e18.push(t4.envMapCubeUVHeight), e18.push(t4[n3(271)]), e18.push(t4.alphaMapUv), e18.push(t4.lightMapUv), e18.push(t4.aoMapUv), e18.push(t4[n3(930)]), e18.push(t4.normalMapUv), e18.push(t4.displacementMapUv), e18.push(t4.emissiveMapUv), e18.push(t4.metalnessMapUv), e18.push(t4.roughnessMapUv), e18.push(t4.anisotropyMapUv), e18[n3(1184)](t4.clearcoatMapUv), e18.push(t4.clearcoatNormalMapUv), e18.push(t4.clearcoatRoughnessMapUv), e18.push(t4.iridescenceMapUv), e18.push(t4.iridescenceThicknessMapUv), e18.push(t4[n3(511)]), e18.push(t4.sheenRoughnessMapUv), e18[n3(1184)](t4.specularMapUv), e18.push(t4[n3(1155)]), e18.push(t4.specularIntensityMapUv), e18.push(t4.transmissionMapUv), e18.push(t4.thicknessMapUv), e18.push(t4.combine), e18.push(t4.fogExp2), e18.push(t4.sizeAttenuation), e18.push(t4[n3(1195)]), e18.push(t4.morphAttributeCount), e18.push(t4.numDirLights), e18.push(t4[n3(762)]), e18.push(t4.numSpotLights), e18[n3(1184)](t4.numSpotLightMaps), e18.push(t4.numHemiLights), e18.push(t4.numRectAreaLights), e18.push(t4.numDirLightShadows), e18.push(t4.numPointLightShadows), e18[n3(1184)](t4.numSpotLightShadows), e18.push(t4.numSpotLightShadowsWithMaps), e18.push(t4.numLightProbes), e18.push(t4.shadowMapType), e18.push(t4.toneMapping), e18[n3(1184)](t4.numClippingPlanes), e18.push(t4.numClipIntersection), e18.push(t4.depthPacking);
  }
  function b2(e18, t4) {
    let n3 = s2;
    c2.disableAll(), t4.instancing && c2[n3(218)](0), t4.instancingColor && c2.enable(1), t4.instancingMorph && c2.enable(2), t4.matcap && c2[n3(218)](3), t4[n3(195)] && c2.enable(4), t4.normalMapObjectSpace && c2.enable(5), t4.normalMapTangentSpace && c2.enable(6), t4[n3(1045)] && c2.enable(7), t4.iridescence && c2.enable(8), t4.alphaTest && c2.enable(9), t4.vertexColors && c2[n3(218)](10), t4.vertexAlphas && c2.enable(11), t4.vertexUv1s && c2.enable(12), t4.vertexUv2s && c2.enable(13), t4.vertexUv3s && c2.enable(14), t4.vertexTangents && c2.enable(15), t4.anisotropy && c2[n3(218)](16), t4.alphaHash && c2[n3(218)](17), t4.batching && c2.enable(18), t4[n3(815)] && c2[n3(218)](19), t4.batchingColor && c2.enable(20), t4.gradientMap && c2[n3(218)](21), t4.packedNormalMap && c2.enable(22), t4.vertexNormals && c2.enable(23), e18[n3(1184)](c2[n3(1464)]), c2.disableAll(), t4.fog && c2.enable(0), t4[n3(258)] && c2.enable(1), t4.flatShading && c2.enable(2), t4.logarithmicDepthBuffer && c2.enable(3), t4.reversedDepthBuffer && c2.enable(4), t4.skinning && c2.enable(5), t4.morphTargets && c2.enable(6), t4.morphNormals && c2.enable(7), t4.morphColors && c2.enable(8), t4.premultipliedAlpha && c2.enable(9), t4.shadowMapEnabled && c2.enable(10), t4[n3(415)] && c2.enable(11), t4[n3(1036)] && c2[n3(218)](12), t4.useDepthPacking && c2.enable(13), t4.dithering && c2[n3(218)](14), t4.transmission && c2.enable(15), t4.sheen && c2.enable(16), t4.opaque && c2.enable(17), t4.pointsUvs && c2[n3(218)](18), t4.decodeVideoTexture && c2.enable(19), t4.decodeVideoTextureEmissive && c2.enable(20), t4.alphaToCoverage && c2.enable(21), t4.numLightProbeGrids > 0 && c2.enable(22), e18.push(c2.mask);
  }
  function x2(e18) {
    let t4 = s2, n3 = h2[e18[t4(1112)]], r3;
    if (n3) {
      let e19 = uc[n3];
      r3 = yo.clone(e19.uniforms);
    } else r3 = e18[t4(606)];
    return r3;
  }
  function S2(t4, n3) {
    let r3 = f2[s2(859)](n3);
    return r3 === void 0 ? (r3 = new Ru(e17, n3, t4, a2), d2.push(r3), f2.set(n3, r3)) : ++r3.usedTimes, r3;
  }
  function C2(e18) {
    let t4 = s2;
    if (--e18[t4(1098)] === 0) {
      let n3 = d2[t4(530)](e18);
      d2[n3] = d2[d2.length - 1], d2.pop(), f2[t4(905)](e18[t4(768)]), e18.destroy();
    }
  }
  function w2(e18) {
    l2.remove(e18);
  }
  function T2() {
    l2.dispose();
  }
  return { getParameters: _2, getProgramCacheKey: v2, getUniforms: x2, acquireProgram: S2, releaseProgram: C2, releaseShaderCache: w2, programs: d2, dispose: T2 };
}
function Wu() {
  let e17 = /* @__PURE__ */ new WeakMap();
  function t3(t4) {
    return e17.has(t4);
  }
  function n2(t4) {
    let n3 = $, r3 = e17.get(t4);
    return r3 === void 0 && (r3 = {}, e17[n3(1139)](t4, r3)), r3;
  }
  function r2(t4) {
    e17.delete(t4);
  }
  function i2(t4, n3, r3) {
    let i3 = $;
    e17[i3(859)](t4)[n3] = r3;
  }
  function a2() {
    e17 = /* @__PURE__ */ new WeakMap();
  }
  return { has: t3, get: n2, remove: r2, update: i2, dispose: a2 };
}
function Gu(e17, t3) {
  let n2 = i;
  return e17.groupOrder === t3.groupOrder ? e17.renderOrder === t3.renderOrder ? e17.material.id === t3.material.id ? e17.materialVariant === t3.materialVariant ? e17.z === t3.z ? e17.id - t3.id : e17.z - t3.z : e17[n2(1471)] - t3.materialVariant : e17.material.id - t3[n2(849)].id : e17.renderOrder - t3.renderOrder : e17.groupOrder - t3.groupOrder;
}
function Ku(e17, t3) {
  return e17.groupOrder === t3.groupOrder ? e17.renderOrder === t3.renderOrder ? e17.z === t3.z ? e17.id - t3.id : t3.z - e17.z : e17.renderOrder - t3.renderOrder : e17.groupOrder - t3.groupOrder;
}
function qu() {
  let e17 = [], t3 = 0, n2 = [], r2 = [], i2 = [];
  function a2() {
    let e18 = $;
    t3 = 0, n2.length = 0, r2.length = 0, i2[e18(660)] = 0;
  }
  function o2(e18) {
    let t4 = 0;
    return e18.isInstancedMesh && (t4 += 2), e18.isSkinnedMesh && (t4 += 1), t4;
  }
  function s2(n3, r3, i3, a3, s3, c3) {
    let l3 = $, u3 = e17[t3];
    return u3 === void 0 ? (u3 = { id: n3.id, object: n3, geometry: r3, material: i3, materialVariant: o2(n3), groupOrder: a3, renderOrder: n3[l3(963)], z: s3, group: c3 }, e17[t3] = u3) : (u3.id = n3.id, u3.object = n3, u3.geometry = r3, u3[l3(849)] = i3, u3.materialVariant = o2(n3), u3.groupOrder = a3, u3.renderOrder = n3.renderOrder, u3.z = s3, u3.group = c3), t3++, u3;
  }
  function c2(e18, t4, a3, o3, c3, l3) {
    let u3 = $, d3 = s2(e18, t4, a3, o3, c3, l3);
    a3.transmission > 0 ? r2.push(d3) : a3.transparent === true ? i2.push(d3) : n2[u3(1184)](d3);
  }
  function l2(e18, t4, a3, o3, c3, l3) {
    let u3 = $, d3 = s2(e18, t4, a3, o3, c3, l3);
    a3.transmission > 0 ? r2[u3(224)](d3) : a3.transparent === true ? i2.unshift(d3) : n2[u3(224)](d3);
  }
  function u2(e18, t4) {
    let a3 = $;
    n2.length > 1 && n2.sort(e18 || Gu), r2[a3(660)] > 1 && r2.sort(t4 || Ku), i2[a3(660)] > 1 && i2.sort(t4 || Ku);
  }
  function d2() {
    let n3 = $;
    for (let r3 = t3, i3 = e17.length; r3 < i3; r3++) {
      let t4 = e17[r3];
      if (t4.id === null) break;
      t4.id = null, t4.object = null, t4.geometry = null, t4[n3(849)] = null, t4.group = null;
    }
  }
  return { opaque: n2, transmissive: r2, transparent: i2, init: a2, push: c2, unshift: l2, finish: d2, sort: u2 };
}
function Ju() {
  let e17 = /* @__PURE__ */ new WeakMap();
  function t3(t4, n3) {
    let r2 = $, i2 = e17.get(t4), a2;
    return i2 === void 0 ? (a2 = new qu(), e17[r2(1139)](t4, [a2])) : n3 >= i2[r2(660)] ? (a2 = new qu(), i2.push(a2)) : a2 = i2[n3], a2;
  }
  function n2() {
    e17 = /* @__PURE__ */ new WeakMap();
  }
  return { get: t3, dispose: n2 };
}
function Yu() {
  let e17 = {};
  return { get: function(t3) {
    if (e17[t3.id] !== void 0) return e17[t3.id];
    let n2;
    switch (t3.type) {
      case `DirectionalLight`:
        n2 = { direction: new W(), color: new Y() };
        break;
      case `SpotLight`:
        n2 = { position: new W(), direction: new W(), color: new Y(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case `PointLight`:
        n2 = { position: new W(), color: new Y(), distance: 0, decay: 0 };
        break;
      case `HemisphereLight`:
        n2 = { direction: new W(), skyColor: new Y(), groundColor: new Y() };
        break;
      case `RectAreaLight`:
        n2 = { color: new Y(), position: new W(), halfWidth: new W(), halfHeight: new W() };
        break;
    }
    return e17[t3.id] = n2, n2;
  } };
}
function Xu() {
  let e17 = {};
  return { get: function(t3) {
    let n2 = $;
    if (e17[t3.id] !== void 0) return e17[t3.id];
    let r2;
    switch (t3.type) {
      case `DirectionalLight`:
        r2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new U() };
        break;
      case `SpotLight`:
        r2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new U() };
        break;
      case n2(380):
        r2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new U(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return e17[t3.id] = r2, r2;
  } };
}
var Zu = 0;
function Qu(e17, t3) {
  let n2 = i;
  return (t3.castShadow ? 2 : 0) - (e17.castShadow ? 2 : 0) + +!!t3.map - !!e17[n2(579)];
}
function $u(e17) {
  let t3 = new Yu(), n2 = Xu(), r2 = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let e18 = 0; e18 < 9; e18++) r2.probe.push(new W());
  let i2 = new W(), a2 = new J(), o2 = new J();
  function s2(i3) {
    let a3 = $, o3 = 0, s3 = 0, c3 = 0;
    for (let e18 = 0; e18 < 9; e18++) r2.probe[e18].set(0, 0, 0);
    let l2 = 0, u2 = 0, d2 = 0, f2 = 0, p2 = 0, m2 = 0, h2 = 0, g2 = 0, _2 = 0, v2 = 0, y2 = 0;
    i3.sort(Qu);
    for (let e18 = 0, b3 = i3.length; e18 < b3; e18++) {
      let b4 = i3[e18], x2 = b4.color, S2 = b4.intensity, C2 = b4.distance, w2 = null;
      if (b4.shadow && b4.shadow.map && (w2 = b4[a3(1271)].map.texture.format === 1030 ? b4.shadow.map.texture : b4[a3(1271)].map.depthTexture || b4[a3(1271)].map.texture), b4[a3(633)]) o3 += x2.r * S2, s3 += x2.g * S2, c3 += x2.b * S2;
      else if (b4.isLightProbe) {
        for (let e19 = 0; e19 < 9; e19++) r2[a3(1330)][e19].addScaledVector(b4.sh.coefficients[e19], S2);
        y2++;
      } else if (b4.isDirectionalLight) {
        let e19 = t3[a3(859)](b4);
        if (e19.color[a3(1250)](b4.color).multiplyScalar(b4.intensity), b4.castShadow) {
          let e20 = b4[a3(1271)], t4 = n2.get(b4);
          t4[a3(1504)] = e20.intensity, t4.shadowBias = e20.bias, t4.shadowNormalBias = e20[a3(1197)], t4.shadowRadius = e20.radius, t4.shadowMapSize = e20.mapSize, r2.directionalShadow[l2] = t4, r2.directionalShadowMap[l2] = w2, r2.directionalShadowMatrix[l2] = b4.shadow[a3(307)], m2++;
        }
        r2.directional[l2] = e19, l2++;
      } else if (b4.isSpotLight) {
        let e19 = t3.get(b4);
        e19.position.setFromMatrixPosition(b4[a3(1234)]), e19.color.copy(x2).multiplyScalar(S2), e19.distance = C2, e19.coneCos = Math.cos(b4[a3(1191)]), e19[a3(1202)] = Math[a3(339)](b4.angle * (1 - b4.penumbra)), e19.decay = b4[a3(1238)], r2.spot[d2] = e19;
        let i4 = b4.shadow;
        if (b4.map && (r2.spotLightMap[_2] = b4[a3(579)], _2++, i4.updateMatrices(b4), b4.castShadow && v2++), r2.spotLightMatrix[d2] = i4.matrix, b4.castShadow) {
          let e20 = n2.get(b4);
          e20[a3(1504)] = i4.intensity, e20.shadowBias = i4.bias, e20.shadowNormalBias = i4.normalBias, e20.shadowRadius = i4.radius, e20.shadowMapSize = i4.mapSize, r2.spotShadow[d2] = e20, r2.spotShadowMap[d2] = w2, g2++;
        }
        d2++;
      } else if (b4.isRectAreaLight) {
        let e19 = t3.get(b4);
        e19.color.copy(x2).multiplyScalar(S2), e19.halfWidth.set(b4.width * 0.5, 0, 0), e19.halfHeight[a3(1139)](0, b4.height * 0.5, 0), r2[a3(650)][f2] = e19, f2++;
      } else if (b4[a3(1491)]) {
        let e19 = t3.get(b4);
        if (e19.color.copy(b4[a3(1119)]).multiplyScalar(b4[a3(403)]), e19.distance = b4[a3(654)], e19.decay = b4.decay, b4.castShadow) {
          let e20 = b4.shadow, t4 = n2.get(b4);
          t4.shadowIntensity = e20.intensity, t4.shadowBias = e20.bias, t4.shadowNormalBias = e20.normalBias, t4[a3(171)] = e20.radius, t4.shadowMapSize = e20.mapSize, t4.shadowCameraNear = e20.camera.near, t4[a3(869)] = e20.camera.far, r2[a3(205)][u2] = t4, r2.pointShadowMap[u2] = w2, r2.pointShadowMatrix[u2] = b4.shadow[a3(307)], h2++;
        }
        r2[a3(1018)][u2] = e19, u2++;
      } else if (b4.isHemisphereLight) {
        let e19 = t3.get(b4);
        e19.skyColor.copy(b4[a3(1119)]).multiplyScalar(S2), e19.groundColor.copy(b4.groundColor).multiplyScalar(S2), r2.hemi[p2] = e19, p2++;
      }
    }
    f2 > 0 && (e17.has(`OES_texture_float_linear`) === true ? (r2[a3(1362)] = Q.LTC_FLOAT_1, r2.rectAreaLTC2 = Q.LTC_FLOAT_2) : (r2.rectAreaLTC1 = Q.LTC_HALF_1, r2.rectAreaLTC2 = Q.LTC_HALF_2)), r2.ambient[0] = o3, r2[a3(1367)][1] = s3, r2[a3(1367)][2] = c3;
    let b2 = r2.hash;
    (b2.directionalLength !== l2 || b2.pointLength !== u2 || b2.spotLength !== d2 || b2.rectAreaLength !== f2 || b2[a3(206)] !== p2 || b2.numDirectionalShadows !== m2 || b2.numPointShadows !== h2 || b2.numSpotShadows !== g2 || b2.numSpotMaps !== _2 || b2.numLightProbes !== y2) && (r2.directional.length = l2, r2.spot.length = d2, r2[a3(650)].length = f2, r2.point.length = u2, r2.hemi.length = p2, r2.directionalShadow.length = m2, r2[a3(467)].length = m2, r2.pointShadow.length = h2, r2.pointShadowMap.length = h2, r2.spotShadow.length = g2, r2.spotShadowMap.length = g2, r2[a3(1030)][a3(660)] = m2, r2[a3(817)].length = h2, r2.spotLightMatrix.length = g2 + _2 - v2, r2.spotLightMap.length = _2, r2.numSpotLightShadowsWithMaps = v2, r2.numLightProbes = y2, b2.directionalLength = l2, b2.pointLength = u2, b2.spotLength = d2, b2.rectAreaLength = f2, b2.hemiLength = p2, b2.numDirectionalShadows = m2, b2.numPointShadows = h2, b2.numSpotShadows = g2, b2.numSpotMaps = _2, b2.numLightProbes = y2, r2.version = Zu++);
  }
  function c2(e18, t4) {
    let n3 = $, s3 = 0, c3 = 0, l2 = 0, u2 = 0, d2 = 0, f2 = t4.matrixWorldInverse;
    for (let t5 = 0, p2 = e18.length; t5 < p2; t5++) {
      let p3 = e18[t5];
      if (p3.isDirectionalLight) {
        let e19 = r2.directional[s3];
        e19[n3(1159)][n3(1328)](p3[n3(1234)]), i2.setFromMatrixPosition(p3[n3(1149)][n3(1234)]), e19.direction.sub(i2), e19.direction.transformDirection(f2), s3++;
      } else if (p3.isSpotLight) {
        let e19 = r2[n3(498)][l2];
        e19.position.setFromMatrixPosition(p3.matrixWorld), e19.position.applyMatrix4(f2), e19.direction[n3(1328)](p3.matrixWorld), i2.setFromMatrixPosition(p3.target.matrixWorld), e19[n3(1159)].sub(i2), e19.direction[n3(775)](f2), l2++;
      } else if (p3[n3(648)]) {
        let e19 = r2.rectArea[u2];
        e19.position[n3(1328)](p3.matrixWorld), e19[n3(1477)].applyMatrix4(f2), o2.identity(), a2.copy(p3.matrixWorld), a2.premultiply(f2), o2.extractRotation(a2), e19.halfWidth.set(p3.width * 0.5, 0, 0), e19.halfHeight.set(0, p3.height * 0.5, 0), e19[n3(1294)].applyMatrix4(o2), e19.halfHeight.applyMatrix4(o2), u2++;
      } else if (p3.isPointLight) {
        let e19 = r2.point[c3];
        e19.position.setFromMatrixPosition(p3.matrixWorld), e19.position.applyMatrix4(f2), c3++;
      } else if (p3.isHemisphereLight) {
        let e19 = r2.hemi[d2];
        e19.direction.setFromMatrixPosition(p3.matrixWorld), e19.direction.transformDirection(f2), d2++;
      }
    }
  }
  return { setup: s2, setupView: c2, state: r2 };
}
function ed(e17) {
  let t3 = new $u(e17), n2 = [], r2 = [], i2 = [];
  function a2(e18) {
    d2.camera = e18, n2.length = 0, r2.length = 0, i2.length = 0;
  }
  function o2(e18) {
    n2[$(1184)](e18);
  }
  function s2(e18) {
    r2.push(e18);
  }
  function c2(e18) {
    i2.push(e18);
  }
  function l2() {
    t3[$(513)](n2);
  }
  function u2(e18) {
    t3.setupView(n2, e18);
  }
  let d2 = { lightsArray: n2, shadowsArray: r2, lightProbeGridArray: i2, camera: null, lights: t3, transmissionRenderTarget: {}, textureUnits: 0 };
  return { init: a2, state: d2, setupLights: l2, setupLightsView: u2, pushLight: o2, pushShadow: s2, pushLightProbeGrid: c2 };
}
function td(e17) {
  let t3 = /* @__PURE__ */ new WeakMap();
  function n2(n3, r3 = 0) {
    let i2 = t3[$(859)](n3), a2;
    return i2 === void 0 ? (a2 = new ed(e17), t3.set(n3, [a2])) : r3 >= i2.length ? (a2 = new ed(e17), i2.push(a2)) : a2 = i2[r3], a2;
  }
  function r2() {
    t3 = /* @__PURE__ */ new WeakMap();
  }
  return { get: n2, dispose: r2 };
}
var nd = i(1186), rd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, id = [new W(1, 0, 0), new W(-1, 0, 0), new W(0, 1, 0), new W(0, -1, 0), new W(0, 0, 1), new W(0, 0, -1)], ad = [new W(0, -1, 0), new W(0, -1, 0), new W(0, 0, 1), new W(0, 0, -1), new W(0, -1, 0), new W(0, -1, 0)], od = new J(), sd = new W(), cd = new W();
function ld(e17, t3, n2) {
  let r2 = i, a2 = new Zi(), o2 = new U(), s2 = new U(), c2 = new q(), l2 = new Oo(), u2 = new ko(), d2 = {}, f2 = n2.maxTextureSize, p2 = { 0: 1, 1: 0, 2: 2 }, m2 = new So({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new U() }, radius: { value: 4 } }, vertexShader: nd, fragmentShader: rd }), h2 = m2.clone();
  h2[r2(523)][r2(810)] = 1;
  let g2 = new Gr();
  g2[r2(248)](`position`, new Ar(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  let _2 = new _i(g2, m2), v2 = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = 1;
  let y2 = this.type;
  this.render = function(t4, n3, i2) {
    let l3 = r2;
    if (v2.enabled === false || v2[l3(268)] === false && v2.needsUpdate === false || t4.length === 0) return;
    this.type === 2 && (z(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`), this.type = 1);
    let u3 = e17.getRenderTarget(), d3 = e17.getActiveCubeFace(), p3 = e17.getActiveMipmapLevel(), m3 = e17.state;
    m3.setBlending(0), m3.buffers[l3(379)].getReversed() === true ? m3.buffers.color.setClear(0, 0, 0, 0) : m3.buffers.color.setClear(1, 1, 1, 1), m3.buffers[l3(379)].setTest(true), m3.setScissorTest(false);
    let h3 = y2 !== this.type;
    h3 && n3.traverse(function(e18) {
      let t5 = l3;
      e18.material && (Array[t5(1277)](e18[t5(849)]) ? e18[t5(849)].forEach((e19) => e19.needsUpdate = true) : e18.material.needsUpdate = true);
    });
    for (let r3 = 0, u4 = t4.length; r3 < u4; r3++) {
      let u5 = t4[r3], d4 = u5[l3(1271)];
      if (d4 === void 0) {
        z(`WebGLShadowMap:`, u5, l3(1093));
        continue;
      }
      if (d4.autoUpdate === false && d4[l3(318)] === false) continue;
      o2[l3(1250)](d4.mapSize);
      let p4 = d4.getFrameExtents();
      o2.multiply(p4), s2.copy(d4.mapSize), (o2.x > f2 || o2.y > f2) && (o2.x > f2 && (s2.x = Math[l3(425)](f2 / p4.x), o2.x = s2.x * p4.x, d4.mapSize.x = s2.x), o2.y > f2 && (s2.y = Math[l3(425)](f2 / p4.y), o2.y = s2.y * p4.y, d4.mapSize.y = s2.y));
      let g3 = e17.state.buffers[l3(379)][l3(958)]();
      if (d4.camera._reversedDepth = g3, d4.map === null || h3 === true) {
        if (d4[l3(579)] !== null && (d4.map.depthTexture !== null && (d4[l3(579)].depthTexture.dispose(), d4.map.depthTexture = null), d4[l3(579)].dispose()), this.type === 3) {
          if (u5.isPointLight) {
            z(l3(1296));
            continue;
          }
          d4.map = new pn(o2.x, o2.y, { format: P, type: te, minFilter: C, magFilter: C, generateMipmaps: false }), d4.map.texture[l3(1301)] = u5.name + l3(749), d4.map.depthTexture = new ba(o2.x, o2.y, j), d4[l3(579)][l3(598)].name = u5.name + `.shadowMapDepth`, d4.map.depthTexture[l3(253)] = ce, d4.map.depthTexture.compareFunction = null, d4.map.depthTexture.minFilter = b, d4.map.depthTexture.magFilter = b;
        } else u5.isPointLight ? (d4[l3(579)] = new zc(o2.x), d4.map[l3(598)] = new xa(o2.x, ee)) : (d4.map = new pn(o2.x, o2.y), d4.map[l3(598)] = new ba(o2.x, o2.y, ee)), d4.map[l3(598)].name = u5.name + `.shadowMap`, d4[l3(579)].depthTexture.format = ce, this[l3(1112)] === 1 ? (d4.map.depthTexture.compareFunction = g3 ? 518 : 515, d4.map.depthTexture.minFilter = C, d4.map[l3(598)].magFilter = C) : (d4[l3(579)].depthTexture.compareFunction = null, d4.map.depthTexture.minFilter = b, d4.map.depthTexture[l3(957)] = b);
        d4.camera.updateProjectionMatrix();
      }
      let _3 = d4.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let t5 = 0; t5 < _3; t5++) {
        if (d4.map.isWebGLCubeRenderTarget) e17[l3(689)](d4.map, t5), e17.clear();
        else {
          t5 === 0 && (e17[l3(689)](d4.map), e17.clear());
          let n4 = d4.getViewport(t5);
          c2.set(s2.x * n4.x, s2.y * n4.y, s2.x * n4.z, s2.y * n4.w), m3[l3(436)](c2);
        }
        if (u5.isPointLight) {
          let e18 = d4.camera, n4 = d4.matrix, r4 = u5.distance || e18[l3(726)];
          r4 !== e18[l3(726)] && (e18.far = r4, e18.updateProjectionMatrix()), sd.setFromMatrixPosition(u5.matrixWorld), e18[l3(1477)].copy(sd), cd.copy(e18.position), cd.add(id[t5]), e18.up[l3(1250)](ad[t5]), e18[l3(949)](cd), e18.updateMatrixWorld(), n4[l3(680)](-sd.x, -sd.y, -sd.z), od[l3(902)](e18.projectionMatrix, e18.matrixWorldInverse), d4._frustum.setFromProjectionMatrix(od, e18.coordinateSystem, e18.reversedDepth);
        } else d4.updateMatrices(u5);
        a2 = d4[l3(169)](), w2(n3, i2, d4[l3(971)], u5, this.type);
      }
      d4.isPointLightShadow !== true && this[l3(1112)] === 3 && x2(d4, i2), d4.needsUpdate = false;
    }
    y2 = this.type, v2.needsUpdate = false, e17.setRenderTarget(u3, d3, p3);
  };
  function x2(n3, i2) {
    let a3 = r2, s3 = t3.update(_2);
    m2.defines.VSM_SAMPLES !== n3.blurSamples && (m2.defines.VSM_SAMPLES = n3[a3(1462)], h2.defines.VSM_SAMPLES = n3[a3(1462)], m2.needsUpdate = true, h2.needsUpdate = true), n3[a3(732)] === null && (n3.mapPass = new pn(o2.x, o2.y, { format: P, type: te })), m2.uniforms.shadow_pass[a3(895)] = n3.map.depthTexture, m2.uniforms.resolution[a3(895)] = n3.mapSize, m2.uniforms.radius.value = n3.radius, e17.setRenderTarget(n3.mapPass), e17.clear(), e17.renderBufferDirect(i2, null, s3, m2, _2, null), h2.uniforms.shadow_pass.value = n3.mapPass.texture, h2.uniforms.resolution.value = n3[a3(1518)], h2.uniforms.radius.value = n3.radius, e17.setRenderTarget(n3.map), e17.clear(), e17.renderBufferDirect(i2, null, s3, h2, _2, null);
  }
  function S2(t4, n3, i2, a3) {
    let o3 = r2, s3 = null, c3 = i2[o3(1491)] === true ? t4.customDistanceMaterial : t4.customDepthMaterial;
    if (c3 !== void 0) s3 = c3;
    else if (s3 = i2.isPointLight === true ? u2 : l2, e17.localClippingEnabled && n3.clipShadows === true && Array[o3(1277)](n3.clippingPlanes) && n3[o3(999)][o3(660)] !== 0 || n3.displacementMap && n3.displacementScale !== 0 || n3.alphaMap && n3.alphaTest > 0 || n3.map && n3.alphaTest > 0 || n3[o3(1260)] === true) {
      let e18 = s3.uuid, t5 = n3.uuid, r3 = d2[e18];
      r3 === void 0 && (r3 = {}, d2[e18] = r3);
      let i3 = r3[t5];
      i3 === void 0 && (i3 = s3.clone(), r3[t5] = i3, n3[o3(322)](o3(254), T2)), s3 = i3;
    }
    if (s3.visible = n3[o3(884)], s3.wireframe = n3.wireframe, a3 === 3 ? s3.side = n3.shadowSide === null ? n3.side : n3.shadowSide : s3.side = n3.shadowSide === null ? p2[n3.side] : n3.shadowSide, s3.alphaMap = n3.alphaMap, s3[o3(283)] = n3.alphaToCoverage === true ? 0.5 : n3.alphaTest, s3.map = n3.map, s3.clipShadows = n3.clipShadows, s3.clippingPlanes = n3.clippingPlanes, s3.clipIntersection = n3.clipIntersection, s3.displacementMap = n3.displacementMap, s3.displacementScale = n3.displacementScale, s3.displacementBias = n3.displacementBias, s3[o3(789)] = n3[o3(789)], s3.linewidth = n3.linewidth, i2[o3(1491)] === true && s3.isMeshDistanceMaterial === true) {
      let t5 = e17.properties[o3(859)](s3);
      t5.light = i2;
    }
    return s3;
  }
  function w2(n3, i2, o3, s3, c3) {
    let l3 = r2;
    if (n3.visible === false) return;
    if (n3.layers.test(i2.layers) && (n3.isMesh || n3[l3(746)] || n3.isPoints) && (n3.castShadow || n3.receiveShadow && c3 === 3) && (!n3.frustumCulled || a2.intersectsObject(n3))) {
      n3.modelViewMatrix.multiplyMatrices(o3.matrixWorldInverse, n3.matrixWorld);
      let r3 = t3.update(n3), a3 = n3.material;
      if (Array.isArray(a3)) {
        let t4 = r3.groups;
        for (let l4 = 0, u4 = t4.length; l4 < u4; l4++) {
          let u5 = t4[l4], d3 = a3[u5.materialIndex];
          if (d3 && d3.visible) {
            let t5 = S2(n3, d3, s3, c3);
            n3.onBeforeShadow(e17, n3, i2, o3, r3, t5, u5), e17.renderBufferDirect(o3, null, r3, t5, n3, u5), n3.onAfterShadow(e17, n3, i2, o3, r3, t5, u5);
          }
        }
      } else if (a3.visible) {
        let t4 = S2(n3, a3, s3, c3);
        n3.onBeforeShadow(e17, n3, i2, o3, r3, t4, null), e17.renderBufferDirect(o3, null, r3, t4, n3, null), n3.onAfterShadow(e17, n3, i2, o3, r3, t4, null);
      }
    }
    let u3 = n3[l3(1200)];
    for (let e18 = 0, t4 = u3.length; e18 < t4; e18++) w2(u3[e18], i2, o3, s3, c3);
  }
  function T2(e18) {
    let t4 = r2;
    e18[t4(1149)].removeEventListener(`dispose`, T2);
    for (let n3 in d2) {
      let r3 = d2[n3], i2 = e18.target.uuid;
      i2 in r3 && (r3[i2][t4(254)](), delete r3[i2]);
    }
  }
}
function ud(e17, t3) {
  let n2 = i;
  function r2() {
    let t4 = false, n3 = new q(), r3 = null, i2 = new q(0, 0, 0, 0);
    return { setMask: function(n4) {
      r3 !== n4 && !t4 && (e17.colorMask(n4, n4, n4, n4), r3 = n4);
    }, setLocked: function(e18) {
      t4 = e18;
    }, setClear: function(t5, r4, a3, o3, s3) {
      s3 === true && (t5 *= o3, r4 *= o3, a3 *= o3), n3.set(t5, r4, a3, o3), i2.equals(n3) === false && (e17.clearColor(t5, r4, a3, o3), i2.copy(n3));
    }, reset: function() {
      t4 = false, r3 = null, i2.set(-1, 0, 0, 0);
    } };
  }
  function a2() {
    let n3 = false, r3 = false, i2 = null, a3 = null, o3 = null;
    return { setReversed: function(e18) {
      let n4 = $;
      if (r3 !== e18) {
        let i3 = t3.get(`EXT_clip_control`);
        e18 ? i3.clipControlEXT(i3.LOWER_LEFT_EXT, i3.ZERO_TO_ONE_EXT) : i3.clipControlEXT(i3[n4(251)], i3.NEGATIVE_ONE_TO_ONE_EXT), r3 = e18;
        let a4 = o3;
        o3 = null, this.setClear(a4);
      }
    }, getReversed: function() {
      return r3;
    }, setTest: function(t4) {
      t4 ? P2(e17[$(408)]) : fe2(e17.DEPTH_TEST);
    }, setMask: function(t4) {
      i2 !== t4 && !n3 && (e17.depthMask(t4), i2 = t4);
    }, setFunc: function(t4) {
      let n4 = $;
      if (r3 && (t4 = xt[t4]), a3 !== t4) {
        switch (t4) {
          case 0:
            e17.depthFunc(e17[n4(737)]);
            break;
          case 1:
            e17.depthFunc(e17.ALWAYS);
            break;
          case 2:
            e17.depthFunc(e17.LESS);
            break;
          case 3:
            e17.depthFunc(e17.LEQUAL);
            break;
          case 4:
            e17.depthFunc(e17.EQUAL);
            break;
          case 5:
            e17.depthFunc(e17.GEQUAL);
            break;
          case 6:
            e17.depthFunc(e17[n4(1316)]);
            break;
          case 7:
            e17[n4(946)](e17.NOTEQUAL);
            break;
          default:
            e17[n4(946)](e17.LEQUAL);
        }
        a3 = t4;
      }
    }, setLocked: function(e18) {
      n3 = e18;
    }, setClear: function(t4) {
      o3 !== t4 && (o3 = t4, r3 && (t4 = 1 - t4), e17.clearDepth(t4));
    }, reset: function() {
      n3 = false, i2 = null, a3 = null, o3 = null, r3 = false;
    } };
  }
  function o2() {
    let t4 = false, n3 = null, r3 = null, i2 = null, a3 = null, o3 = null, s3 = null, c3 = null, l3 = null;
    return { setTest: function(n4) {
      t4 || (n4 ? P2(e17[$(278)]) : fe2(e17.STENCIL_TEST));
    }, setMask: function(r4) {
      n3 !== r4 && !t4 && (e17[$(702)](r4), n3 = r4);
    }, setFunc: function(t5, n4, o4) {
      (r3 !== t5 || i2 !== n4 || a3 !== o4) && (e17.stencilFunc(t5, n4, o4), r3 = t5, i2 = n4, a3 = o4);
    }, setOp: function(t5, n4, r4) {
      (o3 !== t5 || s3 !== n4 || c3 !== r4) && (e17[$(578)](t5, n4, r4), o3 = t5, s3 = n4, c3 = r4);
    }, setLocked: function(e18) {
      t4 = e18;
    }, setClear: function(t5) {
      l3 !== t5 && (e17.clearStencil(t5), l3 = t5);
    }, reset: function() {
      t4 = false, n3 = null, r3 = null, i2 = null, a3 = null, o3 = null, s3 = null, c3 = null, l3 = null;
    } };
  }
  let s2 = new r2(), c2 = new a2(), l2 = new o2(), u2 = /* @__PURE__ */ new WeakMap(), d2 = /* @__PURE__ */ new WeakMap(), f2 = {}, p2 = {}, m2 = {}, h2 = /* @__PURE__ */ new WeakMap(), g2 = [], _2 = null, v2 = false, y2 = null, b2 = null, x2 = null, S2 = null, C2 = null, w2 = null, T2 = null, E2 = new Y(0, 0, 0), D2 = 0, O2 = false, k2 = null, A2 = null, ee2 = null, j2 = null, te2 = null, ne2 = e17.getParameter(e17[n2(346)]), M2 = false, re2 = 0, ie2 = e17[n2(1004)](e17.VERSION);
  ie2.indexOf(`WebGL`) === -1 ? ie2.indexOf(n2(926)) !== -1 && (re2 = parseFloat(/^OpenGL ES (\d)/.exec(ie2)[1]), M2 = re2 >= 2) : (re2 = parseFloat(/^WebGL (\d)/.exec(ie2)[1]), M2 = re2 >= 1);
  let ae2 = null, oe2 = {}, se2 = e17[n2(1004)](e17.SCISSOR_BOX), N2 = e17.getParameter(e17.VIEWPORT), ce2 = new q().fromArray(se2), le2 = new q().fromArray(N2);
  function ue2(t4, r3, i2, a3) {
    let o3 = n2, s3 = new Uint8Array(4), c3 = e17[o3(1174)]();
    e17.bindTexture(t4, c3), e17[o3(491)](t4, e17.TEXTURE_MIN_FILTER, e17.NEAREST), e17.texParameteri(t4, e17[o3(1253)], e17[o3(728)]);
    for (let n3 = 0; n3 < i2; n3++) t4 === e17[o3(1428)] || t4 === e17[o3(1146)] ? e17.texImage3D(r3, 0, e17.RGBA, 1, 1, a3, 0, e17.RGBA, e17.UNSIGNED_BYTE, s3) : e17.texImage2D(r3 + n3, 0, e17.RGBA, 1, 1, 0, e17.RGBA, e17.UNSIGNED_BYTE, s3);
    return c3;
  }
  let de2 = {};
  de2[e17.TEXTURE_2D] = ue2(e17[n2(295)], e17.TEXTURE_2D, 1), de2[e17[n2(434)]] = ue2(e17.TEXTURE_CUBE_MAP, e17.TEXTURE_CUBE_MAP_POSITIVE_X, 6), de2[e17.TEXTURE_2D_ARRAY] = ue2(e17[n2(1146)], e17.TEXTURE_2D_ARRAY, 1, 1), de2[e17.TEXTURE_3D] = ue2(e17.TEXTURE_3D, e17.TEXTURE_3D, 1, 1), s2.setClear(0, 0, 0, 1), c2[n2(502)](1), l2.setClear(0), P2(e17[n2(408)]), c2.setFunc(3), be2(false), xe2(1), P2(e17[n2(1476)]), ve2(0);
  function P2(t4) {
    f2[t4] !== true && (e17.enable(t4), f2[t4] = true);
  }
  function fe2(t4) {
    f2[t4] !== false && (e17.disable(t4), f2[t4] = false);
  }
  function pe2(t4, r3) {
    let i2 = n2;
    return m2[t4] === r3 ? false : (e17.bindFramebuffer(t4, r3), m2[t4] = r3, t4 === e17.DRAW_FRAMEBUFFER && (m2[e17.FRAMEBUFFER] = r3), t4 === e17[i2(1506)] && (m2[e17.DRAW_FRAMEBUFFER] = r3), true);
  }
  function me2(t4, r3) {
    let i2 = n2, a3 = g2, o3 = false;
    if (t4) {
      a3 = h2.get(r3), a3 === void 0 && (a3 = [], h2[i2(1139)](r3, a3));
      let n3 = t4[i2(1324)];
      if (a3[i2(660)] !== n3.length || a3[0] !== e17.COLOR_ATTACHMENT0) {
        for (let t5 = 0, r4 = n3.length; t5 < r4; t5++) a3[t5] = e17.COLOR_ATTACHMENT0 + t5;
        a3.length = n3.length, o3 = true;
      }
    } else a3[0] !== e17.BACK && (a3[0] = e17.BACK, o3 = true);
    o3 && e17[i2(500)](a3);
  }
  function he2(t4) {
    return _2 === t4 ? false : (e17.useProgram(t4), _2 = t4, true);
  }
  let ge2 = { 100: e17.FUNC_ADD, 101: e17.FUNC_SUBTRACT, 102: e17.FUNC_REVERSE_SUBTRACT };
  ge2[103] = e17.MIN, ge2[104] = e17.MAX;
  let _e2 = { 200: e17.ZERO, 201: e17[n2(804)], 202: e17.SRC_COLOR, 204: e17.SRC_ALPHA, 210: e17.SRC_ALPHA_SATURATE, 208: e17.DST_COLOR, 206: e17.DST_ALPHA, 203: e17[n2(1020)], 205: e17.ONE_MINUS_SRC_ALPHA, 209: e17.ONE_MINUS_DST_COLOR, 207: e17.ONE_MINUS_DST_ALPHA, 211: e17.CONSTANT_COLOR, 212: e17.ONE_MINUS_CONSTANT_COLOR, 213: e17.CONSTANT_ALPHA, 214: e17[n2(327)] };
  function ve2(t4, r3, i2, a3, o3, s3, c3, l3, u3, d3) {
    let f3 = n2;
    if (t4 === 0) {
      v2 === true && (fe2(e17.BLEND), v2 = false);
      return;
    }
    if (v2 === false && (P2(e17.BLEND), v2 = true), t4 !== 5) {
      if (t4 !== y2 || d3 !== O2) {
        if ((b2 !== 100 || C2 !== 100) && (e17.blendEquation(e17.FUNC_ADD), b2 = 100, C2 = 100), d3) switch (t4) {
          case 1:
            e17.blendFuncSeparate(e17.ONE, e17.ONE_MINUS_SRC_ALPHA, e17.ONE, e17.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e17[f3(201)](e17.ONE, e17.ONE);
            break;
          case 3:
            e17[f3(233)](e17[f3(381)], e17.ONE_MINUS_SRC_COLOR, e17.ZERO, e17.ONE);
            break;
          case 4:
            e17[f3(233)](e17.DST_COLOR, e17.ONE_MINUS_SRC_ALPHA, e17.ZERO, e17.ONE);
            break;
          default:
            B(`WebGLState: Invalid blending: `, t4);
            break;
        }
        else switch (t4) {
          case 1:
            e17[f3(233)](e17.SRC_ALPHA, e17.ONE_MINUS_SRC_ALPHA, e17.ONE, e17.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e17.blendFuncSeparate(e17.SRC_ALPHA, e17.ONE, e17.ONE, e17[f3(804)]);
            break;
          case 3:
            B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);
            break;
          case 4:
            B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);
            break;
          default:
            B(`WebGLState: Invalid blending: `, t4);
            break;
        }
        x2 = null, S2 = null, w2 = null, T2 = null, E2.set(0, 0, 0), D2 = 0, y2 = t4, O2 = d3;
      }
      return;
    }
    o3 || (o3 = r3), s3 || (s3 = i2), c3 || (c3 = a3), (r3 !== b2 || o3 !== C2) && (e17.blendEquationSeparate(ge2[r3], ge2[o3]), b2 = r3, C2 = o3), (i2 !== x2 || a3 !== S2 || s3 !== w2 || c3 !== T2) && (e17.blendFuncSeparate(_e2[i2], _e2[a3], _e2[s3], _e2[c3]), x2 = i2, S2 = a3, w2 = s3, T2 = c3), (l3.equals(E2) === false || u3 !== D2) && (e17.blendColor(l3.r, l3.g, l3.b, u3), E2.copy(l3), D2 = u3), y2 = t4, O2 = false;
  }
  function ye2(t4, r3) {
    let i2 = n2;
    t4[i2(1319)] === 2 ? fe2(e17.CULL_FACE) : P2(e17.CULL_FACE);
    let a3 = t4.side === 1;
    r3 && (a3 = !a3), be2(a3), t4.blending === 1 && t4.transparent === false ? ve2(0) : ve2(t4.blending, t4.blendEquation, t4.blendSrc, t4.blendDst, t4[i2(162)], t4[i2(794)], t4[i2(743)], t4[i2(821)], t4.blendAlpha, t4.premultipliedAlpha), c2.setFunc(t4.depthFunc), c2.setTest(t4.depthTest), c2.setMask(t4[i2(678)]), s2.setMask(t4.colorWrite);
    let o3 = t4.stencilWrite;
    l2.setTest(o3), o3 && (l2.setMask(t4.stencilWriteMask), l2.setFunc(t4.stencilFunc, t4.stencilRef, t4[i2(1e3)]), l2.setOp(t4.stencilFail, t4[i2(1138)], t4.stencilZPass)), Ce2(t4.polygonOffset, t4[i2(243)], t4[i2(1116)]), t4[i2(1260)] === true ? P2(e17.SAMPLE_ALPHA_TO_COVERAGE) : fe2(e17[i2(325)]);
  }
  function be2(t4) {
    k2 !== t4 && (t4 ? e17.frontFace(e17.CW) : e17[n2(761)](e17.CCW), k2 = t4);
  }
  function xe2(t4) {
    let r3 = n2;
    t4 === 0 ? fe2(e17.CULL_FACE) : (P2(e17.CULL_FACE), t4 !== A2 && (t4 === 1 ? e17[r3(1066)](e17.BACK) : t4 === 2 ? e17[r3(1066)](e17[r3(791)]) : e17[r3(1066)](e17.FRONT_AND_BACK))), A2 = t4;
  }
  function Se2(t4) {
    t4 !== ee2 && (M2 && e17.lineWidth(t4), ee2 = t4);
  }
  function Ce2(t4, r3, i2) {
    t4 ? (P2(e17.POLYGON_OFFSET_FILL), (j2 !== r3 || te2 !== i2) && (j2 = r3, te2 = i2, c2.getReversed() && (r3 = -r3), e17.polygonOffset(r3, i2))) : fe2(e17[n2(1293)]);
  }
  function we2(t4) {
    t4 ? P2(e17.SCISSOR_TEST) : fe2(e17.SCISSOR_TEST);
  }
  function Te2(t4) {
    t4 === void 0 && (t4 = e17.TEXTURE0 + ne2 - 1), ae2 !== t4 && (e17.activeTexture(t4), ae2 = t4);
  }
  function Ee2(t4, r3, i2) {
    let a3 = n2;
    i2 === void 0 && (i2 = ae2 === null ? e17[a3(1373)] + ne2 - 1 : ae2);
    let o3 = oe2[i2];
    o3 === void 0 && (o3 = { type: void 0, texture: void 0 }, oe2[i2] = o3), (o3.type !== t4 || o3.texture !== r3) && (ae2 !== i2 && (e17[a3(1308)](i2), ae2 = i2), e17.bindTexture(t4, r3 || de2[t4]), o3.type = t4, o3[a3(1017)] = r3);
  }
  function De2() {
    let t4 = oe2[ae2];
    t4 !== void 0 && t4.type !== void 0 && (e17.bindTexture(t4.type, null), t4.type = void 0, t4.texture = void 0);
  }
  function Oe2() {
    try {
      e17.compressedTexImage2D(...arguments);
    } catch (e18) {
      B(`WebGLState:`, e18);
    }
  }
  function ke2() {
    try {
      e17.compressedTexImage3D(...arguments);
    } catch (e18) {
      B(`WebGLState:`, e18);
    }
  }
  function Ae2() {
    let t4 = n2;
    try {
      e17.texSubImage2D(...arguments);
    } catch (e18) {
      B(t4(1287), e18);
    }
  }
  function je2() {
    try {
      e17.texSubImage3D(...arguments);
    } catch (e18) {
      B(`WebGLState:`, e18);
    }
  }
  function Me2() {
    let t4 = n2;
    try {
      e17[t4(993)](...arguments);
    } catch (e18) {
      B(t4(1287), e18);
    }
  }
  function Ne2() {
    try {
      e17.compressedTexSubImage3D(...arguments);
    } catch (e18) {
      B(`WebGLState:`, e18);
    }
  }
  function F2() {
    try {
      e17.texStorage2D(...arguments);
    } catch (e18) {
      B(`WebGLState:`, e18);
    }
  }
  function Pe2() {
    let t4 = n2;
    try {
      e17.texStorage3D(...arguments);
    } catch (e18) {
      B(t4(1287), e18);
    }
  }
  function Fe2() {
    try {
      e17.texImage2D(...arguments);
    } catch (e18) {
      B(`WebGLState:`, e18);
    }
  }
  function Ie2() {
    try {
      e17.texImage3D(...arguments);
    } catch (e18) {
      B(`WebGLState:`, e18);
    }
  }
  function I2(t4) {
    return p2[t4] === void 0 ? e17.getParameter(t4) : p2[t4];
  }
  function Le2(t4, n3) {
    p2[t4] !== n3 && (e17.pixelStorei(t4, n3), p2[t4] = n3);
  }
  function L2(t4) {
    ce2.equals(t4) === false && (e17.scissor(t4.x, t4.y, t4.z, t4.w), ce2.copy(t4));
  }
  function R2(t4) {
    le2[n2(1522)](t4) === false && (e17.viewport(t4.x, t4.y, t4.z, t4.w), le2.copy(t4));
  }
  function Re2(t4, r3) {
    let i2 = n2, a3 = d2.get(r3);
    a3 === void 0 && (a3 = /* @__PURE__ */ new WeakMap(), d2[i2(1139)](r3, a3));
    let o3 = a3[i2(859)](t4);
    o3 === void 0 && (o3 = e17.getUniformBlockIndex(r3, t4[i2(1301)]), a3.set(t4, o3));
  }
  function ze2(t4, r3) {
    let i2 = n2, a3 = d2.get(r3).get(t4);
    u2[i2(859)](r3) !== a3 && (e17.uniformBlockBinding(r3, a3, t4.__bindingPointIndex), u2.set(r3, a3));
  }
  function Be2() {
    let t4 = n2;
    e17.disable(e17[t4(795)]), e17.disable(e17[t4(1476)]), e17.disable(e17.DEPTH_TEST), e17.disable(e17.POLYGON_OFFSET_FILL), e17.disable(e17.SCISSOR_TEST), e17.disable(e17.STENCIL_TEST), e17[t4(1113)](e17[t4(325)]), e17.blendEquation(e17.FUNC_ADD), e17.blendFunc(e17.ONE, e17.ZERO), e17.blendFuncSeparate(e17.ONE, e17[t4(381)], e17.ONE, e17.ZERO), e17[t4(821)](0, 0, 0, 0), e17.colorMask(true, true, true, true), e17.clearColor(0, 0, 0, 0), e17.depthMask(true), e17.depthFunc(e17.LESS), c2.setReversed(false), e17.clearDepth(1), e17.stencilMask(4294967295), e17[t4(724)](e17.ALWAYS, 0, 4294967295), e17.stencilOp(e17.KEEP, e17[t4(1225)], e17.KEEP), e17.clearStencil(0), e17[t4(1066)](e17.BACK), e17.frontFace(e17.CCW), e17.polygonOffset(0, 0), e17.activeTexture(e17[t4(1373)]), e17.bindFramebuffer(e17.FRAMEBUFFER, null), e17[t4(478)](e17.DRAW_FRAMEBUFFER, null), e17.bindFramebuffer(e17.READ_FRAMEBUFFER, null), e17[t4(712)](null), e17[t4(1337)](1), e17.scissor(0, 0, e17.canvas.width, e17.canvas.height), e17[t4(436)](0, 0, e17.canvas[t4(1505)], e17.canvas.height), e17[t4(483)](e17[t4(1007)], 4), e17.pixelStorei(e17.UNPACK_ALIGNMENT, 4), e17[t4(483)](e17.UNPACK_FLIP_Y_WEBGL, false), e17.pixelStorei(e17[t4(687)], false), e17.pixelStorei(e17.UNPACK_COLORSPACE_CONVERSION_WEBGL, e17.BROWSER_DEFAULT_WEBGL), e17.pixelStorei(e17.PACK_ROW_LENGTH, 0), e17.pixelStorei(e17[t4(661)], 0), e17[t4(483)](e17.PACK_SKIP_ROWS, 0), e17.pixelStorei(e17.UNPACK_ROW_LENGTH, 0), e17.pixelStorei(e17[t4(975)], 0), e17.pixelStorei(e17.UNPACK_SKIP_PIXELS, 0), e17.pixelStorei(e17.UNPACK_SKIP_ROWS, 0), e17[t4(483)](e17.UNPACK_SKIP_IMAGES, 0), f2 = {}, p2 = {}, ae2 = null, oe2 = {}, m2 = {}, h2 = /* @__PURE__ */ new WeakMap(), g2 = [], _2 = null, v2 = false, y2 = null, b2 = null, x2 = null, S2 = null, C2 = null, w2 = null, T2 = null, E2 = new Y(0, 0, 0), D2 = 0, O2 = false, k2 = null, A2 = null, ee2 = null, j2 = null, te2 = null, ce2.set(0, 0, e17.canvas.width, e17.canvas.height), le2.set(0, 0, e17.canvas.width, e17.canvas.height), s2.reset(), c2[t4(340)](), l2.reset();
  }
  return { buffers: { color: s2, depth: c2, stencil: l2 }, enable: P2, disable: fe2, bindFramebuffer: pe2, drawBuffers: me2, useProgram: he2, setBlending: ve2, setMaterial: ye2, setFlipSided: be2, setCullFace: xe2, setLineWidth: Se2, setPolygonOffset: Ce2, setScissorTest: we2, activeTexture: Te2, bindTexture: Ee2, unbindTexture: De2, compressedTexImage2D: Oe2, compressedTexImage3D: ke2, texImage2D: Fe2, texImage3D: Ie2, pixelStorei: Le2, getParameter: I2, updateUBOMapping: Re2, uniformBlockBinding: ze2, texStorage2D: F2, texStorage3D: Pe2, texSubImage2D: Ae2, texSubImage3D: je2, compressedTexSubImage2D: Me2, compressedTexSubImage3D: Ne2, scissor: L2, viewport: R2, reset: Be2 };
}
function dd(e17, t3, n2, r2, a2, o2, s2) {
  let c2 = i, l2 = t3.has(`WEBGL_multisampled_render_to_texture`) ? t3[c2(859)](`WEBGL_multisampled_render_to_texture`) : null, u2 = typeof navigator > `u` ? false : /OculusBrowser/g.test(navigator.userAgent), d2 = new U(), f2 = /* @__PURE__ */ new WeakMap(), p2 = /* @__PURE__ */ new Set(), m2, h2 = /* @__PURE__ */ new WeakMap(), g2 = false;
  try {
    g2 = typeof OffscreenCanvas < `u` && new OffscreenCanvas(1, 1).getContext(`2d`) !== null;
  } catch {
  }
  function E2(e18, t4) {
    return g2 ? new OffscreenCanvas(e18, t4) : pt(`canvas`);
  }
  function D2(e18, t4, n3) {
    let r3 = c2, i2 = 1, a3 = I2(e18);
    if ((a3.width > n3 || a3.height > n3) && (i2 = n3 / Math.max(a3.width, a3.height)), i2 < 1) if (typeof HTMLImageElement < `u` && e18 instanceof HTMLImageElement || typeof HTMLCanvasElement < `u` && e18 instanceof HTMLCanvasElement || typeof ImageBitmap < `u` && e18 instanceof ImageBitmap || typeof VideoFrame < `u` && e18 instanceof VideoFrame) {
      let n4 = Math[r3(425)](i2 * a3.width), o3 = Math.floor(i2 * a3.height);
      m2 === void 0 && (m2 = E2(n4, o3));
      let s3 = t4 ? E2(n4, o3) : m2;
      return s3.width = n4, s3.height = o3, s3[r3(872)](`2d`).drawImage(e18, 0, 0, n4, o3), z(`WebGLRenderer: Texture has been resized from (` + a3.width + `x` + a3.height + `) to (` + n4 + `x` + o3 + `).`), s3;
    } else return r3(1304) in e18 && z(`WebGLRenderer: Image in DataTexture is too big (` + a3.width + `x` + a3.height + `).`), e18;
    return e18;
  }
  function O2(e18) {
    return e18.generateMipmaps;
  }
  function k2(t4) {
    e17.generateMipmap(t4);
  }
  function A2(t4) {
    return t4[c2(885)] ? e17.TEXTURE_CUBE_MAP : t4.isWebGL3DRenderTarget ? e17.TEXTURE_3D : t4.isWebGLArrayRenderTarget || t4.isCompressedArrayTexture ? e17.TEXTURE_2D_ARRAY : e17.TEXTURE_2D;
  }
  function ee2(n3, r3, i2, a3, o3, s3 = false) {
    let l3 = c2;
    if (n3 !== null) {
      if (e17[n3] !== void 0) return e17[n3];
      z(l3(213) + n3 + `'`);
    }
    let u3;
    a3 && (u3 = t3[l3(859)](`EXT_texture_norm16`), u3 || z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));
    let d3 = r3;
    if (r3 === e17.RED && (i2 === e17.FLOAT && (d3 = e17[l3(862)]), i2 === e17.HALF_FLOAT && (d3 = e17.R16F), i2 === e17.UNSIGNED_BYTE && (d3 = e17.R8), i2 === e17.UNSIGNED_SHORT && u3 && (d3 = u3.R16_EXT), i2 === e17[l3(822)] && u3 && (d3 = u3.R16_SNORM_EXT)), r3 === e17[l3(202)] && (i2 === e17.UNSIGNED_BYTE && (d3 = e17.R8UI), i2 === e17[l3(1440)] && (d3 = e17.R16UI), i2 === e17.UNSIGNED_INT && (d3 = e17.R32UI), i2 === e17.BYTE && (d3 = e17.R8I), i2 === e17.SHORT && (d3 = e17.R16I), i2 === e17.INT && (d3 = e17.R32I)), r3 === e17.RG && (i2 === e17.FLOAT && (d3 = e17.RG32F), i2 === e17[l3(507)] && (d3 = e17.RG16F), i2 === e17[l3(572)] && (d3 = e17.RG8), i2 === e17.UNSIGNED_SHORT && u3 && (d3 = u3.RG16_EXT), i2 === e17[l3(822)] && u3 && (d3 = u3.RG16_SNORM_EXT)), r3 === e17.RG_INTEGER && (i2 === e17.UNSIGNED_BYTE && (d3 = e17[l3(1366)]), i2 === e17.UNSIGNED_SHORT && (d3 = e17.RG16UI), i2 === e17.UNSIGNED_INT && (d3 = e17.RG32UI), i2 === e17.BYTE && (d3 = e17.RG8I), i2 === e17.SHORT && (d3 = e17.RG16I), i2 === e17.INT && (d3 = e17[l3(223)])), r3 === e17.RGB_INTEGER && (i2 === e17[l3(572)] && (d3 = e17.RGB8UI), i2 === e17.UNSIGNED_SHORT && (d3 = e17[l3(338)]), i2 === e17.UNSIGNED_INT && (d3 = e17[l3(520)]), i2 === e17.BYTE && (d3 = e17.RGB8I), i2 === e17.SHORT && (d3 = e17.RGB16I), i2 === e17.INT && (d3 = e17.RGB32I)), r3 === e17.RGBA_INTEGER && (i2 === e17.UNSIGNED_BYTE && (d3 = e17.RGBA8UI), i2 === e17[l3(1440)] && (d3 = e17[l3(439)]), i2 === e17[l3(184)] && (d3 = e17.RGBA32UI), i2 === e17.BYTE && (d3 = e17.RGBA8I), i2 === e17.SHORT && (d3 = e17.RGBA16I), i2 === e17[l3(1521)] && (d3 = e17[l3(681)])), r3 === e17.RGB && (i2 === e17.UNSIGNED_SHORT && u3 && (d3 = u3.RGB16_EXT), i2 === e17.SHORT && u3 && (d3 = u3[l3(546)]), i2 === e17.UNSIGNED_INT_5_9_9_9_REV && (d3 = e17.RGB9_E5), i2 === e17.UNSIGNED_INT_10F_11F_11F_REV && (d3 = e17.R11F_G11F_B10F)), r3 === e17.RGBA) {
      let t4 = s3 ? ot : K.getTransfer(o3);
      i2 === e17.FLOAT && (d3 = e17.RGBA32F), i2 === e17.HALF_FLOAT && (d3 = e17.RGBA16F), i2 === e17.UNSIGNED_BYTE && (d3 = t4 === `srgb` ? e17.SRGB8_ALPHA8 : e17.RGBA8), i2 === e17.UNSIGNED_SHORT && u3 && (d3 = u3.RGBA16_EXT), i2 === e17.SHORT && u3 && (d3 = u3.RGBA16_SNORM_EXT), i2 === e17.UNSIGNED_SHORT_4_4_4_4 && (d3 = e17.RGBA4), i2 === e17.UNSIGNED_SHORT_5_5_5_1 && (d3 = e17.RGB5_A1);
    }
    return (d3 === e17.R16F || d3 === e17.R32F || d3 === e17.RG16F || d3 === e17.RG32F || d3 === e17.RGBA16F || d3 === e17.RGBA32F) && t3.get(`EXT_color_buffer_float`), d3;
  }
  function j2(t4, n3) {
    let r3 = c2, i2;
    return t4 ? n3 === null || n3 === 1014 || n3 === 1020 ? i2 = e17.DEPTH24_STENCIL8 : n3 === 1015 ? i2 = e17.DEPTH32F_STENCIL8 : n3 === 1012 && (i2 = e17.DEPTH24_STENCIL8, z(r3(1457))) : n3 === null || n3 === 1014 || n3 === 1020 ? i2 = e17.DEPTH_COMPONENT24 : n3 === 1015 ? i2 = e17.DEPTH_COMPONENT32F : n3 === 1012 && (i2 = e17.DEPTH_COMPONENT16), i2;
  }
  function te2(e18, t4) {
    let n3 = c2;
    return O2(e18) === true || e18[n3(257)] && e18.minFilter !== 1003 && e18[n3(486)] !== 1006 ? Math.log2(Math.max(t4.width, t4.height)) + 1 : e18.mipmaps !== void 0 && e18.mipmaps.length > 0 ? e18.mipmaps.length : e18.isCompressedTexture && Array[n3(1277)](e18.image) ? t4.mipmaps.length : 1;
  }
  function ne2(e18) {
    let t4 = c2, n3 = e18[t4(1149)];
    n3[t4(806)](t4(254), ne2), re2(n3), n3.isVideoTexture && f2.delete(n3), n3.isHTMLTexture && p2.delete(n3);
  }
  function M2(e18) {
    let t4 = c2, n3 = e18.target;
    n3[t4(806)](t4(254), M2), ae2(n3);
  }
  function re2(e18) {
    let t4 = c2, n3 = r2.get(e18);
    if (n3[t4(557)] === void 0) return;
    let i2 = e18[t4(996)], a3 = h2[t4(859)](i2);
    if (a3) {
      let r3 = a3[n3.__cacheKey];
      r3.usedTimes--, r3[t4(1098)] === 0 && ie2(e18), Object.keys(a3).length === 0 && h2[t4(905)](i2);
    }
    r2.remove(e18);
  }
  function ie2(t4) {
    let n3 = c2, i2 = r2.get(t4);
    e17[n3(647)](i2[n3(1056)]);
    let a3 = t4.source, o3 = h2.get(a3);
    delete o3[i2.__cacheKey], s2.memory[n3(1324)]--;
  }
  function ae2(t4) {
    let n3 = c2, i2 = r2.get(t4);
    if (t4.depthTexture && (t4[n3(598)].dispose(), r2.remove(t4[n3(598)])), t4.isWebGLCubeRenderTarget) for (let t5 = 0; t5 < 6; t5++) {
      if (Array[n3(1277)](i2.__webglFramebuffer[t5])) for (let r3 = 0; r3 < i2[n3(748)][t5].length; r3++) e17.deleteFramebuffer(i2.__webglFramebuffer[t5][r3]);
      else e17.deleteFramebuffer(i2.__webglFramebuffer[t5]);
      i2.__webglDepthbuffer && e17.deleteRenderbuffer(i2.__webglDepthbuffer[t5]);
    }
    else {
      if (Array[n3(1277)](i2.__webglFramebuffer)) for (let t5 = 0; t5 < i2[n3(748)].length; t5++) e17.deleteFramebuffer(i2[n3(748)][t5]);
      else e17.deleteFramebuffer(i2.__webglFramebuffer);
      if (i2[n3(416)] && e17.deleteRenderbuffer(i2.__webglDepthbuffer), i2.__webglMultisampledFramebuffer && e17[n3(989)](i2[n3(1511)]), i2.__webglColorRenderbuffer) for (let t5 = 0; t5 < i2.__webglColorRenderbuffer.length; t5++) i2[n3(1443)][t5] && e17[n3(1064)](i2.__webglColorRenderbuffer[t5]);
      i2.__webglDepthRenderbuffer && e17.deleteRenderbuffer(i2.__webglDepthRenderbuffer);
    }
    let a3 = t4.textures;
    for (let t5 = 0, i3 = a3[n3(660)]; t5 < i3; t5++) {
      let i4 = r2.get(a3[t5]);
      i4.__webglTexture && (e17.deleteTexture(i4.__webglTexture), s2[n3(1237)].textures--), r2[n3(842)](a3[t5]);
    }
    r2.remove(t4);
  }
  let oe2 = 0;
  function se2() {
    oe2 = 0;
  }
  function N2() {
    return oe2;
  }
  function ce2(e18) {
    oe2 = e18;
  }
  function ue2() {
    let e18 = c2, t4 = oe2;
    return t4 >= a2.maxTextures && z(`WebGLTextures: Trying to use ` + t4 + e18(1105) + a2.maxTextures), oe2 += 1, t4;
  }
  function de2(e18) {
    let t4 = c2, n3 = [];
    return n3.push(e18[t4(286)]), n3.push(e18.wrapT), n3.push(e18.wrapR || 0), n3.push(e18.magFilter), n3.push(e18.minFilter), n3.push(e18[t4(1091)]), n3.push(e18.internalFormat), n3.push(e18.format), n3.push(e18.type), n3.push(e18[t4(1142)]), n3.push(e18.premultiplyAlpha), n3[t4(1184)](e18.flipY), n3[t4(1184)](e18[t4(1024)]), n3[t4(1184)](e18.colorSpace), n3.join();
  }
  function P2(t4, i2) {
    let a3 = c2, o3 = r2.get(t4);
    if (t4.isVideoTexture && Fe2(t4), t4.isRenderTargetTexture === false && t4[a3(316)] !== true && t4[a3(235)] > 0 && o3.__version !== t4.version) {
      let e18 = t4.image;
      if (e18 === null) z(`WebGLRenderer: Texture marked for update but no image data found.`);
      else if (e18.complete === false) z(a3(369));
      else {
        Se2(o3, t4, i2);
        return;
      }
    } else t4[a3(316)] && (o3.__webglTexture = t4.sourceTexture ? t4.sourceTexture : null);
    n2.bindTexture(e17.TEXTURE_2D, o3.__webglTexture, e17.TEXTURE0 + i2);
  }
  function fe2(t4, i2) {
    let a3 = c2, o3 = r2.get(t4);
    if (t4.isRenderTargetTexture === false && t4[a3(235)] > 0 && o3.__version !== t4.version) {
      Se2(o3, t4, i2);
      return;
    } else t4.isExternalTexture && (o3.__webglTexture = t4[a3(834)] ? t4.sourceTexture : null);
    n2.bindTexture(e17.TEXTURE_2D_ARRAY, o3.__webglTexture, e17.TEXTURE0 + i2);
  }
  function pe2(t4, i2) {
    let a3 = c2, o3 = r2.get(t4);
    if (t4.isRenderTargetTexture === false && t4.version > 0 && o3.__version !== t4.version) {
      Se2(o3, t4, i2);
      return;
    }
    n2[a3(873)](e17.TEXTURE_3D, o3.__webglTexture, e17.TEXTURE0 + i2);
  }
  function me2(t4, i2) {
    let a3 = c2, o3 = r2[a3(859)](t4);
    if (t4.isCubeDepthTexture !== true && t4[a3(235)] > 0 && o3.__version !== t4.version) {
      Ce2(o3, t4, i2);
      return;
    }
    n2.bindTexture(e17.TEXTURE_CUBE_MAP, o3.__webglTexture, e17.TEXTURE0 + i2);
  }
  let he2 = { [_]: e17.REPEAT, [v]: e17.CLAMP_TO_EDGE, [y]: e17.MIRRORED_REPEAT }, ge2 = { [b]: e17.NEAREST, [x]: e17.NEAREST_MIPMAP_NEAREST, [S]: e17.NEAREST_MIPMAP_LINEAR, [C]: e17.LINEAR, [w]: e17.LINEAR_MIPMAP_NEAREST, [T]: e17[c2(531)] }, _e2 = { 512: e17[c2(737)], 519: e17.ALWAYS, 513: e17[c2(1241)], 515: e17.LEQUAL, 514: e17[c2(1434)], 518: e17.GEQUAL, 516: e17.GREATER, 517: e17.NOTEQUAL };
  function ve2(n3, i2) {
    let o3 = c2;
    if (i2.type === 1015 && t3.has(`OES_texture_float_linear`) === false && (i2.magFilter === 1006 || i2.magFilter === 1007 || i2.magFilter === 1005 || i2.magFilter === 1008 || i2.minFilter === 1006 || i2[o3(486)] === 1007 || i2.minFilter === 1005 || i2.minFilter === 1008) && z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`), e17.texParameteri(n3, e17[o3(1467)], he2[i2[o3(286)]]), e17.texParameteri(n3, e17.TEXTURE_WRAP_T, he2[i2.wrapT]), (n3 === e17.TEXTURE_3D || n3 === e17.TEXTURE_2D_ARRAY) && e17.texParameteri(n3, e17.TEXTURE_WRAP_R, he2[i2.wrapR]), e17.texParameteri(n3, e17.TEXTURE_MAG_FILTER, ge2[i2.magFilter]), e17[o3(491)](n3, e17.TEXTURE_MIN_FILTER, ge2[i2[o3(486)]]), i2.compareFunction && (e17.texParameteri(n3, e17[o3(701)], e17.COMPARE_REF_TO_TEXTURE), e17.texParameteri(n3, e17[o3(675)], _e2[i2.compareFunction])), t3[o3(1209)](`EXT_texture_filter_anisotropic`) === true) {
      if (i2[o3(957)] === 1003 || i2.minFilter !== 1005 && i2[o3(486)] !== 1008 || i2.type === 1015 && t3.has(o3(1376)) === false) return;
      if (i2[o3(1091)] > 1 || r2.get(i2).__currentAnisotropy) {
        let s3 = t3.get(`EXT_texture_filter_anisotropic`);
        e17.texParameterf(n3, s3[o3(401)], Math.min(i2[o3(1091)], a2.getMaxAnisotropy())), r2.get(i2).__currentAnisotropy = i2.anisotropy;
      }
    }
  }
  function ye2(t4, n3) {
    let r3 = c2, i2 = false;
    t4.__webglInit === void 0 && (t4.__webglInit = true, n3.addEventListener(`dispose`, ne2));
    let a3 = n3.source, o3 = h2.get(a3);
    o3 === void 0 && (o3 = {}, h2.set(a3, o3));
    let l3 = de2(n3);
    if (l3 !== t4.__cacheKey) {
      o3[l3] === void 0 && (o3[l3] = { texture: e17.createTexture(), usedTimes: 0 }, s2.memory.textures++, i2 = true), o3[l3].usedTimes++;
      let a4 = o3[t4.__cacheKey];
      a4 !== void 0 && (o3[t4.__cacheKey].usedTimes--, a4.usedTimes === 0 && ie2(n3)), t4[r3(800)] = l3, t4.__webglTexture = o3[l3].texture;
    }
    return i2;
  }
  function be2(e18, t4, n3) {
    return Math.floor(Math[c2(425)](e18 / n3) / t4);
  }
  function xe2(t4, r3, i2, a3) {
    let o3 = c2, s3 = t4.updateRanges;
    if (s3.length === 0) n2.texSubImage2D(e17.TEXTURE_2D, 0, 0, 0, r3.width, r3.height, i2, a3, r3.data);
    else {
      s3.sort((e18, t5) => e18.start - t5.start);
      let c3 = 0;
      for (let e18 = 1; e18 < s3.length; e18++) {
        let t5 = s3[c3], n3 = s3[e18], i3 = t5.start + t5[o3(1414)], a4 = be2(n3.start, r3.width, 4), l4 = be2(t5.start, r3.width, 4);
        n3.start <= i3 + 1 && a4 === l4 && be2(n3.start + n3.count - 1, r3[o3(1505)], 4) === a4 ? t5.count = Math.max(t5.count, n3.start + n3[o3(1414)] - t5.start) : (++c3, s3[c3] = n3);
      }
      s3.length = c3 + 1;
      let l3 = n2.getParameter(e17[o3(1416)]), u3 = n2[o3(1004)](e17.UNPACK_SKIP_PIXELS), d3 = n2.getParameter(e17.UNPACK_SKIP_ROWS);
      n2.pixelStorei(e17.UNPACK_ROW_LENGTH, r3.width);
      for (let t5 = 0, c4 = s3.length; t5 < c4; t5++) {
        let c5 = s3[t5], l4 = Math.floor(c5.start / 4), u4 = Math.ceil(c5.count / 4), d4 = l4 % r3.width, f3 = Math[o3(425)](l4 / r3.width), p3 = u4;
        n2[o3(483)](e17.UNPACK_SKIP_PIXELS, d4), n2[o3(483)](e17.UNPACK_SKIP_ROWS, f3), n2.texSubImage2D(e17.TEXTURE_2D, 0, d4, f3, p3, 1, i2, a3, r3.data);
      }
      t4.clearUpdateRanges(), n2.pixelStorei(e17.UNPACK_ROW_LENGTH, l3), n2.pixelStorei(e17.UNPACK_SKIP_PIXELS, u3), n2.pixelStorei(e17.UNPACK_SKIP_ROWS, d3);
    }
  }
  function Se2(t4, i2, s3) {
    let l3 = c2, u3 = e17.TEXTURE_2D;
    (i2.isDataArrayTexture || i2.isCompressedArrayTexture) && (u3 = e17.TEXTURE_2D_ARRAY), i2.isData3DTexture && (u3 = e17[l3(1428)]);
    let d3 = ye2(t4, i2), f3 = i2.source;
    n2.bindTexture(u3, t4.__webglTexture, e17[l3(1373)] + s3);
    let m3 = r2.get(f3);
    if (f3.version !== m3[l3(487)] || d3 === true) {
      if (n2.activeTexture(e17.TEXTURE0 + s3), !(typeof ImageBitmap < `u` && i2.image instanceof ImageBitmap)) {
        let t6 = K.getPrimaries(K.workingColorSpace), r4 = i2.colorSpace === `` ? null : K.getPrimaries(i2.colorSpace), a3 = i2.colorSpace === `` || t6 === r4 ? e17[l3(1297)] : e17[l3(934)];
        n2.pixelStorei(e17.UNPACK_FLIP_Y_WEBGL, i2.flipY), n2[l3(483)](e17.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i2.premultiplyAlpha), n2[l3(483)](e17.UNPACK_COLORSPACE_CONVERSION_WEBGL, a3);
      }
      n2.pixelStorei(e17.UNPACK_ALIGNMENT, i2.unpackAlignment);
      let t5 = D2(i2.image, false, a2.maxTextureSize);
      t5 = Ie2(i2, t5);
      let r3 = o2.convert(i2.format, i2[l3(541)]), c3 = o2.convert(i2[l3(1112)]), h3 = ee2(i2.internalFormat, r3, c3, i2.normalized, i2.colorSpace, i2.isVideoTexture);
      ve2(u3, i2);
      let g3, _2 = i2.mipmaps, v2 = i2.isVideoTexture !== true, y2 = m3.__version === void 0 || d3 === true, b2 = f3.dataReady, x2 = te2(i2, t5);
      if (i2.isDepthTexture) h3 = j2(i2.format === le, i2.type), y2 && (v2 ? n2.texStorage2D(e17[l3(295)], 1, h3, t5.width, t5.height) : n2[l3(1468)](e17[l3(295)], 0, h3, t5.width, t5.height, 0, r3, c3, null));
      else if (i2.isDataTexture) if (_2.length > 0) {
        v2 && y2 && n2.texStorage2D(e17.TEXTURE_2D, x2, h3, _2[0][l3(1505)], _2[0].height);
        for (let t6 = 0, i3 = _2.length; t6 < i3; t6++) g3 = _2[t6], v2 ? b2 && n2.texSubImage2D(e17.TEXTURE_2D, t6, 0, 0, g3.width, g3.height, r3, c3, g3.data) : n2.texImage2D(e17.TEXTURE_2D, t6, h3, g3.width, g3.height, 0, r3, c3, g3.data);
        i2[l3(1142)] = false;
      } else v2 ? (y2 && n2.texStorage2D(e17[l3(295)], x2, h3, t5.width, t5.height), b2 && xe2(i2, t5, r3, c3)) : n2[l3(1468)](e17.TEXTURE_2D, 0, h3, t5.width, t5.height, 0, r3, c3, t5[l3(1304)]);
      else if (i2.isCompressedTexture) if (i2.isCompressedArrayTexture) {
        v2 && y2 && n2.texStorage3D(e17.TEXTURE_2D_ARRAY, x2, h3, _2[0].width, _2[0].height, t5.depth);
        for (let a3 = 0, o3 = _2.length; a3 < o3; a3++) if (g3 = _2[a3], i2.format !== 1023) if (r3 !== null) if (v2) {
          if (b2) if (i2.layerUpdates.size > 0) {
            let t6 = oc(g3.width, g3.height, i2.format, i2.type);
            for (let o4 of i2.layerUpdates) {
              let i3 = g3.data.subarray(o4 * t6 / g3.data.BYTES_PER_ELEMENT, (o4 + 1) * t6 / g3.data.BYTES_PER_ELEMENT);
              n2.compressedTexSubImage3D(e17.TEXTURE_2D_ARRAY, a3, 0, 0, o4, g3[l3(1505)], g3[l3(221)], 1, r3, i3);
            }
            i2.clearLayerUpdates();
          } else n2.compressedTexSubImage3D(e17[l3(1146)], a3, 0, 0, 0, g3.width, g3.height, t5[l3(379)], r3, g3[l3(1304)]);
        } else n2.compressedTexImage3D(e17.TEXTURE_2D_ARRAY, a3, h3, g3.width, g3[l3(221)], t5.depth, 0, g3.data, 0, 0);
        else z(l3(780));
        else v2 ? b2 && n2.texSubImage3D(e17.TEXTURE_2D_ARRAY, a3, 0, 0, 0, g3.width, g3.height, t5.depth, r3, c3, g3.data) : n2.texImage3D(e17.TEXTURE_2D_ARRAY, a3, h3, g3.width, g3.height, t5.depth, 0, r3, c3, g3.data);
      } else {
        v2 && y2 && n2.texStorage2D(e17.TEXTURE_2D, x2, h3, _2[0].width, _2[0].height);
        for (let t6 = 0, a3 = _2.length; t6 < a3; t6++) g3 = _2[t6], i2.format === 1023 ? v2 ? b2 && n2.texSubImage2D(e17.TEXTURE_2D, t6, 0, 0, g3[l3(1505)], g3.height, r3, c3, g3.data) : n2.texImage2D(e17.TEXTURE_2D, t6, h3, g3.width, g3.height, 0, r3, c3, g3.data) : r3 === null ? z(l3(780)) : v2 ? b2 && n2[l3(993)](e17.TEXTURE_2D, t6, 0, 0, g3.width, g3.height, r3, g3[l3(1304)]) : n2.compressedTexImage2D(e17[l3(295)], t6, h3, g3.width, g3.height, 0, g3[l3(1304)]);
      }
      else if (i2.isDataArrayTexture) if (v2) {
        if (y2 && n2[l3(1120)](e17.TEXTURE_2D_ARRAY, x2, h3, t5.width, t5[l3(221)], t5[l3(379)]), b2) if (i2.layerUpdates.size > 0) {
          let a3 = oc(t5.width, t5.height, i2.format, i2.type);
          for (let o3 of i2.layerUpdates) {
            let i3 = t5.data.subarray(o3 * a3 / t5[l3(1304)].BYTES_PER_ELEMENT, (o3 + 1) * a3 / t5.data.BYTES_PER_ELEMENT);
            n2[l3(766)](e17.TEXTURE_2D_ARRAY, 0, 0, 0, o3, t5.width, t5[l3(221)], 1, r3, c3, i3);
          }
          i2.clearLayerUpdates();
        } else n2.texSubImage3D(e17.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t5[l3(1505)], t5.height, t5.depth, r3, c3, t5.data);
      } else n2.texImage3D(e17.TEXTURE_2D_ARRAY, 0, h3, t5.width, t5.height, t5.depth, 0, r3, c3, t5.data);
      else if (i2[l3(833)]) v2 ? (y2 && n2.texStorage3D(e17.TEXTURE_3D, x2, h3, t5.width, t5[l3(221)], t5.depth), b2 && n2.texSubImage3D(e17[l3(1428)], 0, 0, 0, 0, t5.width, t5.height, t5[l3(379)], r3, c3, t5.data)) : n2.texImage3D(e17.TEXTURE_3D, 0, h3, t5.width, t5[l3(221)], t5.depth, 0, r3, c3, t5.data);
      else if (i2.isFramebufferTexture) {
        if (y2) if (v2) n2[l3(514)](e17.TEXTURE_2D, x2, h3, t5[l3(1505)], t5.height);
        else {
          let i3 = t5.width, a3 = t5.height;
          for (let t6 = 0; t6 < x2; t6++) n2.texImage2D(e17[l3(295)], t6, h3, i3, a3, 0, r3, c3, null), i3 >>= 1, a3 >>= 1;
        }
      } else if (i2.isHTMLTexture) {
        if (`texElementImage2D` in e17) {
          let n3 = e17.canvas;
          if (n3[l3(1050)](l3(888)) || n3[l3(248)](`layoutsubtree`, `true`), t5.parentNode !== n3) {
            n3.appendChild(t5), p2.add(i2), n3.onpaint = (e18) => {
              let t6 = l3, n4 = e18.changedElements;
              for (let e19 of p2) n4[t6(517)](e19.image) && (e19.needsUpdate = true);
            }, n3.requestPaint();
            return;
          }
          let r4 = e17.RGBA, a3 = e17.RGBA, o3 = e17.UNSIGNED_BYTE;
          e17[l3(421)](e17.TEXTURE_2D, 0, r4, a3, o3, t5), e17.texParameteri(e17.TEXTURE_2D, e17[l3(181)], e17.LINEAR), e17[l3(491)](e17.TEXTURE_2D, e17.TEXTURE_WRAP_S, e17.CLAMP_TO_EDGE), e17.texParameteri(e17.TEXTURE_2D, e17.TEXTURE_WRAP_T, e17.CLAMP_TO_EDGE);
        }
      } else if (_2[l3(660)] > 0) {
        if (v2 && y2) {
          let t6 = I2(_2[0]);
          n2[l3(514)](e17.TEXTURE_2D, x2, h3, t6.width, t6.height);
        }
        for (let t6 = 0, i3 = _2[l3(660)]; t6 < i3; t6++) g3 = _2[t6], v2 ? b2 && n2.texSubImage2D(e17[l3(295)], t6, 0, 0, r3, c3, g3) : n2.texImage2D(e17.TEXTURE_2D, t6, h3, r3, c3, g3);
        i2.generateMipmaps = false;
      } else if (v2) {
        if (y2) {
          let r4 = I2(t5);
          n2.texStorage2D(e17.TEXTURE_2D, x2, h3, r4.width, r4.height);
        }
        b2 && n2[l3(1274)](e17.TEXTURE_2D, 0, 0, 0, r3, c3, t5);
      } else n2.texImage2D(e17.TEXTURE_2D, 0, h3, r3, c3, t5);
      O2(i2) && k2(u3), m3.__version = f3.version, i2.onUpdate && i2.onUpdate(i2);
    }
    t4.__version = i2.version;
  }
  function Ce2(t4, i2, s3) {
    let l3 = c2;
    if (i2[l3(495)].length !== 6) return;
    let u3 = ye2(t4, i2), d3 = i2.source;
    n2.bindTexture(e17[l3(434)], t4.__webglTexture, e17.TEXTURE0 + s3);
    let f3 = r2[l3(859)](d3);
    if (d3[l3(235)] !== f3.__version || u3 === true) {
      n2.activeTexture(e17.TEXTURE0 + s3);
      let t5 = K.getPrimaries(K[l3(756)]), r3 = i2.colorSpace === `` ? null : K.getPrimaries(i2.colorSpace), c3 = i2.colorSpace === `` || t5 === r3 ? e17[l3(1297)] : e17.BROWSER_DEFAULT_WEBGL;
      n2.pixelStorei(e17.UNPACK_FLIP_Y_WEBGL, i2.flipY), n2.pixelStorei(e17.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i2.premultiplyAlpha), n2[l3(483)](e17.UNPACK_ALIGNMENT, i2.unpackAlignment), n2.pixelStorei(e17.UNPACK_COLORSPACE_CONVERSION_WEBGL, c3);
      let p3 = i2.isCompressedTexture || i2.image[0].isCompressedTexture, m3 = i2.image[0] && i2[l3(495)][0].isDataTexture, h3 = [];
      for (let e18 = 0; e18 < 6; e18++) !p3 && !m3 ? h3[e18] = D2(i2.image[e18], true, a2.maxCubemapSize) : h3[e18] = m3 ? i2.image[e18][l3(495)] : i2.image[e18], h3[e18] = Ie2(i2, h3[e18]);
      let g3 = h3[0], _2 = o2[l3(1073)](i2.format, i2[l3(541)]), v2 = o2.convert(i2.type), y2 = ee2(i2.internalFormat, _2, v2, i2.normalized, i2.colorSpace), b2 = i2.isVideoTexture !== true, x2 = f3.__version === void 0 || u3 === true, S2 = d3.dataReady, C2 = te2(i2, g3);
      ve2(e17.TEXTURE_CUBE_MAP, i2);
      let w2;
      if (p3) {
        b2 && x2 && n2.texStorage2D(e17.TEXTURE_CUBE_MAP, C2, y2, g3.width, g3[l3(221)]);
        for (let t6 = 0; t6 < 6; t6++) {
          w2 = h3[t6].mipmaps;
          for (let r4 = 0; r4 < w2.length; r4++) {
            let a3 = w2[r4];
            i2.format === 1023 ? b2 ? S2 && n2[l3(1274)](e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, r4, 0, 0, a3.width, a3[l3(221)], _2, v2, a3[l3(1304)]) : n2.texImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, r4, y2, a3.width, a3.height, 0, _2, v2, a3.data) : _2 === null ? z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`) : b2 ? S2 && n2.compressedTexSubImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, r4, 0, 0, a3.width, a3.height, _2, a3.data) : n2.compressedTexImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, r4, y2, a3.width, a3[l3(221)], 0, a3.data);
          }
        }
      } else {
        if (w2 = i2.mipmaps, b2 && x2) {
          w2.length > 0 && C2++;
          let t6 = I2(h3[0]);
          n2.texStorage2D(e17.TEXTURE_CUBE_MAP, C2, y2, t6.width, t6.height);
        }
        for (let t6 = 0; t6 < 6; t6++) if (m3) {
          b2 ? S2 && n2.texSubImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, 0, 0, 0, h3[t6].width, h3[t6][l3(221)], _2, v2, h3[t6].data) : n2[l3(1468)](e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, 0, y2, h3[t6].width, h3[t6].height, 0, _2, v2, h3[t6].data);
          for (let r4 = 0; r4 < w2[l3(660)]; r4++) {
            let i3 = w2[r4].image[t6].image;
            b2 ? S2 && n2.texSubImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, r4 + 1, 0, 0, i3.width, i3.height, _2, v2, i3.data) : n2.texImage2D(e17[l3(445)] + t6, r4 + 1, y2, i3.width, i3.height, 0, _2, v2, i3[l3(1304)]);
          }
        } else {
          b2 ? S2 && n2.texSubImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, 0, 0, 0, _2, v2, h3[t6]) : n2.texImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, 0, y2, _2, v2, h3[t6]);
          for (let r4 = 0; r4 < w2.length; r4++) {
            let i3 = w2[r4];
            b2 ? S2 && n2.texSubImage2D(e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, r4 + 1, 0, 0, _2, v2, i3.image[t6]) : n2[l3(1468)](e17.TEXTURE_CUBE_MAP_POSITIVE_X + t6, r4 + 1, y2, _2, v2, i3.image[t6]);
          }
        }
      }
      O2(i2) && k2(e17[l3(434)]), f3.__version = d3[l3(235)], i2.onUpdate && i2.onUpdate(i2);
    }
    t4.__version = i2[l3(235)];
  }
  function we2(t4, i2, a3, s3, u3, d3) {
    let f3 = c2, p3 = o2.convert(a3.format, a3[f3(541)]), m3 = o2.convert(a3.type), h3 = ee2(a3.internalFormat, p3, m3, a3.normalized, a3[f3(541)]), g3 = r2.get(i2), _2 = r2.get(a3);
    if (_2.__renderTarget = i2, !g3.__hasExternalTextures) {
      let t5 = Math.max(1, i2.width >> d3), r3 = Math.max(1, i2.height >> d3);
      u3 === e17.TEXTURE_3D || u3 === e17.TEXTURE_2D_ARRAY ? n2.texImage3D(u3, d3, h3, t5, r3, i2.depth, 0, p3, m3, null) : n2.texImage2D(u3, d3, h3, t5, r3, 0, p3, m3, null);
    }
    n2.bindFramebuffer(e17[f3(1506)], t4), Pe2(i2) ? l2.framebufferTexture2DMultisampleEXT(e17[f3(1506)], s3, u3, _2[f3(1056)], 0, F2(i2)) : (u3 === e17.TEXTURE_2D || u3 >= e17.TEXTURE_CUBE_MAP_POSITIVE_X && u3 <= e17.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e17.framebufferTexture2D(e17.FRAMEBUFFER, s3, u3, _2.__webglTexture, d3), n2.bindFramebuffer(e17.FRAMEBUFFER, null);
  }
  function Te2(t4, n3, r3) {
    let i2 = c2;
    if (e17.bindRenderbuffer(e17.RENDERBUFFER, t4), n3.depthBuffer) {
      let a3 = n3[i2(598)], o3 = a3 && a3.isDepthTexture ? a3.type : null, s3 = j2(n3[i2(1043)], o3), c3 = n3.stencilBuffer ? e17.DEPTH_STENCIL_ATTACHMENT : e17.DEPTH_ATTACHMENT;
      Pe2(n3) ? l2.renderbufferStorageMultisampleEXT(e17.RENDERBUFFER, F2(n3), s3, n3.width, n3.height) : r3 ? e17.renderbufferStorageMultisample(e17.RENDERBUFFER, F2(n3), s3, n3.width, n3[i2(221)]) : e17[i2(529)](e17.RENDERBUFFER, s3, n3.width, n3.height), e17.framebufferRenderbuffer(e17.FRAMEBUFFER, c3, e17[i2(450)], t4);
    } else {
      let t5 = n3.textures;
      for (let a3 = 0; a3 < t5.length; a3++) {
        let s3 = t5[a3], c3 = o2[i2(1073)](s3.format, s3.colorSpace), u3 = o2.convert(s3.type), d3 = ee2(s3[i2(372)], c3, u3, s3.normalized, s3.colorSpace);
        Pe2(n3) ? l2.renderbufferStorageMultisampleEXT(e17.RENDERBUFFER, F2(n3), d3, n3[i2(1505)], n3.height) : r3 ? e17.renderbufferStorageMultisample(e17[i2(450)], F2(n3), d3, n3.width, n3.height) : e17.renderbufferStorage(e17.RENDERBUFFER, d3, n3[i2(1505)], n3[i2(221)]);
      }
    }
    e17.bindRenderbuffer(e17.RENDERBUFFER, null);
  }
  function Ee2(t4, i2, a3) {
    let s3 = c2, u3 = i2.isWebGLCubeRenderTarget === true;
    if (n2.bindFramebuffer(e17.FRAMEBUFFER, t4), !(i2[s3(598)] && i2.depthTexture.isDepthTexture)) throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);
    let d3 = r2.get(i2.depthTexture);
    if (d3.__renderTarget = i2, (!d3.__webglTexture || i2[s3(598)].image.width !== i2.width || i2.depthTexture.image[s3(221)] !== i2.height) && (i2.depthTexture.image.width = i2.width, i2[s3(598)].image[s3(221)] = i2.height, i2.depthTexture.needsUpdate = true), u3) {
      if (d3.__webglInit === void 0 && (d3.__webglInit = true, i2.depthTexture.addEventListener(`dispose`, ne2)), d3[s3(1056)] === void 0) {
        d3.__webglTexture = e17[s3(1174)](), n2[s3(873)](e17.TEXTURE_CUBE_MAP, d3[s3(1056)]), ve2(e17.TEXTURE_CUBE_MAP, i2.depthTexture);
        let t5 = o2.convert(i2.depthTexture.format), r3 = o2[s3(1073)](i2.depthTexture.type), a4;
        i2.depthTexture.format === 1026 ? a4 = e17[s3(192)] : i2[s3(598)].format === 1027 && (a4 = e17.DEPTH24_STENCIL8);
        for (let n3 = 0; n3 < 6; n3++) e17.texImage2D(e17[s3(445)] + n3, 0, a4, i2.width, i2.height, 0, t5, r3, null);
      }
    } else P2(i2.depthTexture, 0);
    let f3 = d3.__webglTexture, p3 = F2(i2), m3 = u3 ? e17.TEXTURE_CUBE_MAP_POSITIVE_X + a3 : e17[s3(295)], h3 = i2.depthTexture[s3(253)] === 1027 ? e17.DEPTH_STENCIL_ATTACHMENT : e17[s3(1514)];
    if (i2.depthTexture.format === 1026) Pe2(i2) ? l2.framebufferTexture2DMultisampleEXT(e17[s3(1506)], h3, m3, f3, 0, p3) : e17.framebufferTexture2D(e17.FRAMEBUFFER, h3, m3, f3, 0);
    else if (i2.depthTexture.format === 1027) Pe2(i2) ? l2[s3(1313)](e17.FRAMEBUFFER, h3, m3, f3, 0, p3) : e17.framebufferTexture2D(e17.FRAMEBUFFER, h3, m3, f3, 0);
    else throw Error(`Unknown depthTexture format`);
  }
  function De2(t4) {
    let i2 = c2, a3 = r2[i2(859)](t4), o3 = t4.isWebGLCubeRenderTarget === true;
    if (a3.__boundDepthTexture !== t4.depthTexture) {
      let e18 = t4.depthTexture;
      if (a3.__depthDisposeCallback && a3.__depthDisposeCallback(), e18) {
        let t5 = () => {
          delete a3.__boundDepthTexture, delete a3.__depthDisposeCallback, e18.removeEventListener(`dispose`, t5);
        };
        e18.addEventListener(`dispose`, t5), a3.__depthDisposeCallback = t5;
      }
      a3[i2(621)] = e18;
    }
    if (t4.depthTexture && !a3.__autoAllocateDepthBuffer) if (o3) for (let e18 = 0; e18 < 6; e18++) Ee2(a3.__webglFramebuffer[e18], t4, e18);
    else {
      let e18 = t4.texture.mipmaps;
      e18 && e18.length > 0 ? Ee2(a3.__webglFramebuffer[0], t4, 0) : Ee2(a3.__webglFramebuffer, t4, 0);
    }
    else if (o3) {
      a3.__webglDepthbuffer = [];
      for (let r3 = 0; r3 < 6; r3++) if (n2[i2(478)](e17[i2(1506)], a3.__webglFramebuffer[r3]), a3.__webglDepthbuffer[r3] === void 0) a3.__webglDepthbuffer[r3] = e17.createRenderbuffer(), Te2(a3.__webglDepthbuffer[r3], t4, false);
      else {
        let n3 = t4.stencilBuffer ? e17.DEPTH_STENCIL_ATTACHMENT : e17.DEPTH_ATTACHMENT, o4 = a3.__webglDepthbuffer[r3];
        e17.bindRenderbuffer(e17[i2(450)], o4), e17.framebufferRenderbuffer(e17.FRAMEBUFFER, n3, e17.RENDERBUFFER, o4);
      }
    } else {
      let r3 = t4.texture.mipmaps;
      if (r3 && r3.length > 0 ? n2.bindFramebuffer(e17[i2(1506)], a3.__webglFramebuffer[0]) : n2[i2(478)](e17.FRAMEBUFFER, a3[i2(748)]), a3.__webglDepthbuffer === void 0) a3.__webglDepthbuffer = e17.createRenderbuffer(), Te2(a3.__webglDepthbuffer, t4, false);
      else {
        let n3 = t4[i2(1043)] ? e17.DEPTH_STENCIL_ATTACHMENT : e17.DEPTH_ATTACHMENT, r4 = a3.__webglDepthbuffer;
        e17[i2(246)](e17.RENDERBUFFER, r4), e17.framebufferRenderbuffer(e17[i2(1506)], n3, e17.RENDERBUFFER, r4);
      }
    }
    n2.bindFramebuffer(e17.FRAMEBUFFER, null);
  }
  function Oe2(t4, n3, i2) {
    let a3 = r2.get(t4);
    n3 !== void 0 && we2(a3.__webglFramebuffer, t4, t4.texture, e17.COLOR_ATTACHMENT0, e17.TEXTURE_2D, 0), i2 !== void 0 && De2(t4);
  }
  function ke2(t4) {
    let i2 = c2, a3 = t4.texture, l3 = r2.get(t4), u3 = r2.get(a3);
    t4.addEventListener(`dispose`, M2);
    let d3 = t4.textures, f3 = t4.isWebGLCubeRenderTarget === true, p3 = d3.length > 1;
    if (p3 || (u3.__webglTexture === void 0 && (u3.__webglTexture = e17.createTexture()), u3[i2(487)] = a3.version, s2.memory.textures++), f3) {
      l3.__webglFramebuffer = [];
      for (let t5 = 0; t5 < 6; t5++) if (a3.mipmaps && a3[i2(508)].length > 0) {
        l3.__webglFramebuffer[t5] = [];
        for (let n3 = 0; n3 < a3[i2(508)].length; n3++) l3.__webglFramebuffer[t5][n3] = e17.createFramebuffer();
      } else l3.__webglFramebuffer[t5] = e17.createFramebuffer();
    } else {
      if (a3.mipmaps && a3.mipmaps.length > 0) {
        l3.__webglFramebuffer = [];
        for (let t5 = 0; t5 < a3[i2(508)][i2(660)]; t5++) l3.__webglFramebuffer[t5] = e17.createFramebuffer();
      } else l3[i2(748)] = e17.createFramebuffer();
      if (p3) for (let t5 = 0, n3 = d3.length; t5 < n3; t5++) {
        let n4 = r2[i2(859)](d3[t5]);
        n4.__webglTexture === void 0 && (n4.__webglTexture = e17.createTexture(), s2.memory[i2(1324)]++);
      }
      if (t4.samples > 0 && Pe2(t4) === false) {
        l3.__webglMultisampledFramebuffer = e17.createFramebuffer(), l3.__webglColorRenderbuffer = [], n2.bindFramebuffer(e17.FRAMEBUFFER, l3.__webglMultisampledFramebuffer);
        for (let n3 = 0; n3 < d3.length; n3++) {
          let r3 = d3[n3];
          l3.__webglColorRenderbuffer[n3] = e17.createRenderbuffer(), e17.bindRenderbuffer(e17.RENDERBUFFER, l3.__webglColorRenderbuffer[n3]);
          let a4 = o2.convert(r3[i2(253)], r3.colorSpace), s3 = o2.convert(r3.type), c3 = ee2(r3.internalFormat, a4, s3, r3.normalized, r3[i2(541)], t4.isXRRenderTarget === true), u4 = F2(t4);
          e17.renderbufferStorageMultisample(e17[i2(450)], u4, c3, t4[i2(1505)], t4.height), e17[i2(227)](e17.FRAMEBUFFER, e17.COLOR_ATTACHMENT0 + n3, e17.RENDERBUFFER, l3.__webglColorRenderbuffer[n3]);
        }
        e17.bindRenderbuffer(e17.RENDERBUFFER, null), t4.depthBuffer && (l3.__webglDepthRenderbuffer = e17.createRenderbuffer(), Te2(l3.__webglDepthRenderbuffer, t4, true)), n2.bindFramebuffer(e17.FRAMEBUFFER, null);
      }
    }
    if (f3) {
      n2.bindTexture(e17.TEXTURE_CUBE_MAP, u3.__webglTexture), ve2(e17.TEXTURE_CUBE_MAP, a3);
      for (let n3 = 0; n3 < 6; n3++) if (a3.mipmaps && a3.mipmaps.length > 0) for (let r3 = 0; r3 < a3.mipmaps[i2(660)]; r3++) we2(l3.__webglFramebuffer[n3][r3], t4, a3, e17.COLOR_ATTACHMENT0, e17.TEXTURE_CUBE_MAP_POSITIVE_X + n3, r3);
      else we2(l3.__webglFramebuffer[n3], t4, a3, e17.COLOR_ATTACHMENT0, e17.TEXTURE_CUBE_MAP_POSITIVE_X + n3, 0);
      O2(a3) && k2(e17.TEXTURE_CUBE_MAP), n2.unbindTexture();
    } else if (p3) {
      for (let a4 = 0, o3 = d3.length; a4 < o3; a4++) {
        let o4 = d3[a4], s3 = r2[i2(859)](o4), c3 = e17.TEXTURE_2D;
        (t4[i2(1519)] || t4.isWebGLArrayRenderTarget) && (c3 = t4[i2(1519)] ? e17.TEXTURE_3D : e17.TEXTURE_2D_ARRAY), n2.bindTexture(c3, s3[i2(1056)]), ve2(c3, o4), we2(l3.__webglFramebuffer, t4, o4, e17.COLOR_ATTACHMENT0 + a4, c3, 0), O2(o4) && k2(c3);
      }
      n2.unbindTexture();
    } else {
      let r3 = e17.TEXTURE_2D;
      if ((t4[i2(1519)] || t4.isWebGLArrayRenderTarget) && (r3 = t4.isWebGL3DRenderTarget ? e17.TEXTURE_3D : e17.TEXTURE_2D_ARRAY), n2.bindTexture(r3, u3[i2(1056)]), ve2(r3, a3), a3.mipmaps && a3.mipmaps.length > 0) for (let n3 = 0; n3 < a3.mipmaps.length; n3++) we2(l3.__webglFramebuffer[n3], t4, a3, e17.COLOR_ATTACHMENT0, r3, n3);
      else we2(l3.__webglFramebuffer, t4, a3, e17.COLOR_ATTACHMENT0, r3, 0);
      O2(a3) && k2(r3), n2[i2(1292)]();
    }
    t4[i2(1089)] && De2(t4);
  }
  function Ae2(e18) {
    let t4 = c2, i2 = e18[t4(1324)];
    for (let a3 = 0, o3 = i2.length; a3 < o3; a3++) {
      let o4 = i2[a3];
      if (O2(o4)) {
        let i3 = A2(e18), a4 = r2[t4(859)](o4).__webglTexture;
        n2.bindTexture(i3, a4), k2(i3), n2[t4(1292)]();
      }
    }
  }
  let je2 = [], Me2 = [];
  function Ne2(t4) {
    let i2 = c2;
    if (t4.samples > 0) {
      if (Pe2(t4) === false) {
        let a3 = t4.textures, o3 = t4.width, s3 = t4.height, c3 = e17[i2(1455)], l3 = t4.stencilBuffer ? e17.DEPTH_STENCIL_ATTACHMENT : e17.DEPTH_ATTACHMENT, d3 = r2.get(t4), f3 = a3.length > 1;
        if (f3) for (let t5 = 0; t5 < a3[i2(660)]; t5++) n2.bindFramebuffer(e17.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e17.framebufferRenderbuffer(e17.FRAMEBUFFER, e17.COLOR_ATTACHMENT0 + t5, e17.RENDERBUFFER, null), n2.bindFramebuffer(e17.FRAMEBUFFER, d3.__webglFramebuffer), e17.framebufferTexture2D(e17.DRAW_FRAMEBUFFER, e17.COLOR_ATTACHMENT0 + t5, e17.TEXTURE_2D, null, 0);
        n2[i2(478)](e17.READ_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
        let p3 = t4.texture.mipmaps;
        p3 && p3.length > 0 ? n2.bindFramebuffer(e17.DRAW_FRAMEBUFFER, d3[i2(748)][0]) : n2.bindFramebuffer(e17.DRAW_FRAMEBUFFER, d3.__webglFramebuffer);
        for (let n3 = 0; n3 < a3.length; n3++) {
          if (t4.resolveDepthBuffer && (t4.depthBuffer && (c3 |= e17.DEPTH_BUFFER_BIT), t4.stencilBuffer && t4[i2(263)] && (c3 |= e17.STENCIL_BUFFER_BIT)), f3) {
            e17.framebufferRenderbuffer(e17[i2(1154)], e17.COLOR_ATTACHMENT0, e17[i2(450)], d3.__webglColorRenderbuffer[n3]);
            let t5 = r2.get(a3[n3]).__webglTexture;
            e17.framebufferTexture2D(e17.DRAW_FRAMEBUFFER, e17.COLOR_ATTACHMENT0, e17.TEXTURE_2D, t5, 0);
          }
          e17.blitFramebuffer(0, 0, o3, s3, 0, 0, o3, s3, c3, e17.NEAREST), u2 === true && (je2[i2(660)] = 0, Me2.length = 0, je2[i2(1184)](e17.COLOR_ATTACHMENT0 + n3), t4.depthBuffer && t4.resolveDepthBuffer === false && (je2.push(l3), Me2.push(l3), e17.invalidateFramebuffer(e17.DRAW_FRAMEBUFFER, Me2)), e17[i2(911)](e17.READ_FRAMEBUFFER, je2));
        }
        if (n2.bindFramebuffer(e17.READ_FRAMEBUFFER, null), n2.bindFramebuffer(e17.DRAW_FRAMEBUFFER, null), f3) for (let t5 = 0; t5 < a3.length; t5++) {
          n2[i2(478)](e17.FRAMEBUFFER, d3.__webglMultisampledFramebuffer), e17.framebufferRenderbuffer(e17.FRAMEBUFFER, e17[i2(1401)] + t5, e17.RENDERBUFFER, d3.__webglColorRenderbuffer[t5]);
          let o4 = r2.get(a3[t5])[i2(1056)];
          n2.bindFramebuffer(e17.FRAMEBUFFER, d3.__webglFramebuffer), e17.framebufferTexture2D(e17[i2(191)], e17.COLOR_ATTACHMENT0 + t5, e17.TEXTURE_2D, o4, 0);
        }
        n2.bindFramebuffer(e17.DRAW_FRAMEBUFFER, d3.__webglMultisampledFramebuffer);
      } else if (t4.depthBuffer && t4.resolveDepthBuffer === false && u2) {
        let n3 = t4[i2(1043)] ? e17.DEPTH_STENCIL_ATTACHMENT : e17.DEPTH_ATTACHMENT;
        e17[i2(911)](e17[i2(191)], [n3]);
      }
    }
  }
  function F2(e18) {
    return Math.min(a2.maxSamples, e18.samples);
  }
  function Pe2(e18) {
    let n3 = r2.get(e18);
    return e18.samples > 0 && t3.has(`WEBGL_multisampled_render_to_texture`) === true && n3.__useRenderToTexture !== false;
  }
  function Fe2(e18) {
    let t4 = c2, n3 = s2.render[t4(852)];
    f2[t4(859)](e18) !== n3 && (f2.set(e18, n3), e18.update());
  }
  function Ie2(e18, t4) {
    let n3 = c2, r3 = e18.colorSpace, i2 = e18.format, a3 = e18.type;
    return e18.isCompressedTexture === true || e18[n3(527)] === true || r3 !== `srgb-linear` && r3 !== `` && (K[n3(910)](r3) === `srgb` ? (i2 !== 1023 || a3 !== 1009) && z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`) : B(n3(759), r3)), t4;
  }
  function I2(e18) {
    let t4 = c2;
    return typeof HTMLImageElement < `u` && e18 instanceof HTMLImageElement ? (d2.width = e18.naturalWidth || e18.width, d2.height = e18.naturalHeight || e18.height) : typeof VideoFrame < `u` && e18 instanceof VideoFrame ? (d2.width = e18.displayWidth, d2[t4(221)] = e18[t4(1302)]) : (d2.width = e18.width, d2[t4(221)] = e18[t4(221)]), d2;
  }
  this[c2(215)] = ue2, this[c2(607)] = se2, this.getTextureUnits = N2, this.setTextureUnits = ce2, this.setTexture2D = P2, this.setTexture2DArray = fe2, this[c2(1262)] = pe2, this.setTextureCube = me2, this.rebindTextures = Oe2, this.setupRenderTarget = ke2, this.updateRenderTargetMipmap = Ae2, this.updateMultisampleRenderTarget = Ne2, this.setupDepthRenderbuffer = De2, this.setupFrameBufferTexture = we2, this[c2(602)] = Pe2, this.isReversedDepthBuffer = function() {
    return n2.buffers.depth.getReversed();
  };
}
function fd(e17, t3) {
  function n2(n3, r2 = ``) {
    let i2 = $, a2, o2 = K.getTransfer(r2);
    if (n3 === 1009) return e17.UNSIGNED_BYTE;
    if (n3 === 1017) return e17.UNSIGNED_SHORT_4_4_4_4;
    if (n3 === 1018) return e17.UNSIGNED_SHORT_5_5_5_1;
    if (n3 === 35902) return e17.UNSIGNED_INT_5_9_9_9_REV;
    if (n3 === 35899) return e17.UNSIGNED_INT_10F_11F_11F_REV;
    if (n3 === 1010) return e17[i2(432)];
    if (n3 === 1011) return e17.SHORT;
    if (n3 === 1012) return e17.UNSIGNED_SHORT;
    if (n3 === 1013) return e17[i2(1521)];
    if (n3 === 1014) return e17[i2(184)];
    if (n3 === 1015) return e17[i2(538)];
    if (n3 === 1016) return e17.HALF_FLOAT;
    if (n3 === 1021) return e17.ALPHA;
    if (n3 === 1022) return e17.RGB;
    if (n3 === 1023) return e17.RGBA;
    if (n3 === 1026) return e17.DEPTH_COMPONENT;
    if (n3 === 1027) return e17.DEPTH_STENCIL;
    if (n3 === 1028) return e17.RED;
    if (n3 === 1029) return e17.RED_INTEGER;
    if (n3 === 1030) return e17.RG;
    if (n3 === 1031) return e17.RG_INTEGER;
    if (n3 === 1033) return e17.RGBA_INTEGER;
    if (n3 === 33776 || n3 === 33777 || n3 === 33778 || n3 === 33779) if (o2 === i2(482)) if (a2 = t3.get(`WEBGL_compressed_texture_s3tc_srgb`), a2 !== null) {
      if (n3 === 33776) return a2.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n3 === 33777) return a2.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n3 === 33778) return a2[i2(364)];
      if (n3 === 33779) return a2.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (a2 = t3.get(`WEBGL_compressed_texture_s3tc`), a2 !== null) {
      if (n3 === 33776) return a2.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n3 === 33777) return a2.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n3 === 33778) return a2.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n3 === 33779) return a2.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n3 === 35840 || n3 === 35841 || n3 === 35842 || n3 === 35843) if (a2 = t3[i2(859)](`WEBGL_compressed_texture_pvrtc`), a2 !== null) {
      if (n3 === 35840) return a2[i2(177)];
      if (n3 === 35841) return a2.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n3 === 35842) return a2[i2(1176)];
      if (n3 === 35843) return a2[i2(856)];
    } else return null;
    if (n3 === 36196 || n3 === 37492 || n3 === 37496 || n3 === 37488 || n3 === 37489 || n3 === 37490 || n3 === 37491) if (a2 = t3.get(`WEBGL_compressed_texture_etc`), a2 !== null) {
      if (n3 === 36196 || n3 === 37492) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ETC2 : a2.COMPRESSED_RGB8_ETC2;
      if (n3 === 37496) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a2.COMPRESSED_RGBA8_ETC2_EAC;
      if (n3 === 37488) return a2.COMPRESSED_R11_EAC;
      if (n3 === 37489) return a2.COMPRESSED_SIGNED_R11_EAC;
      if (n3 === 37490) return a2[i2(275)];
      if (n3 === 37491) return a2.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (n3 === 37808 || n3 === 37809 || n3 === 37810 || n3 === 37811 || n3 === 37812 || n3 === 37813 || n3 === 37814 || n3 === 37815 || n3 === 37816 || n3 === 37817 || n3 === 37818 || n3 === 37819 || n3 === 37820 || n3 === 37821) if (a2 = t3.get(`WEBGL_compressed_texture_astc`), a2 !== null) {
      if (n3 === 37808) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a2.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n3 === 37809) return o2 === `srgb` ? a2[i2(1040)] : a2.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n3 === 37810) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a2[i2(164)];
      if (n3 === 37811) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a2.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n3 === 37812) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a2.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n3 === 37813) return o2 === `srgb` ? a2[i2(280)] : a2[i2(276)];
      if (n3 === 37814) return o2 === `srgb` ? a2[i2(959)] : a2.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n3 === 37815) return o2 === `srgb` ? a2[i2(1314)] : a2.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n3 === 37816) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a2.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n3 === 37817) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a2.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n3 === 37818) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a2.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n3 === 37819) return o2 === `srgb` ? a2[i2(1232)] : a2.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n3 === 37820) return o2 === `srgb` ? a2.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a2.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n3 === 37821) return o2 === `srgb` ? a2[i2(1446)] : a2[i2(719)];
    } else return null;
    if (n3 === 36492 || n3 === 36494 || n3 === 36495) if (a2 = t3.get(`EXT_texture_compression_bptc`), a2 !== null) {
      if (n3 === 36492) return o2 === `srgb` ? a2[i2(1068)] : a2[i2(1088)];
      if (n3 === 36494) return a2.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n3 === 36495) return a2.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n3 === 36283 || n3 === 36284 || n3 === 36285 || n3 === 36286) if (a2 = t3.get(`EXT_texture_compression_rgtc`), a2 !== null) {
      if (n3 === 36283) return a2.COMPRESSED_RED_RGTC1_EXT;
      if (n3 === 36284) return a2.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n3 === 36285) return a2.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n3 === 36286) return a2[i2(1469)];
    } else return null;
    return n3 === 1020 ? e17.UNSIGNED_INT_24_8 : e17[n3] === void 0 ? null : e17[n3];
  }
  return { convert: n2 };
}
var pd = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, md = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, hd = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e17, t3) {
    let n2 = i;
    if (this.texture === null) {
      let r2 = new Sa(e17.texture);
      (e17.depthNear !== t3.depthNear || e17[n2(929)] !== t3.depthFar) && (this[n2(1372)] = e17.depthNear, this.depthFar = e17.depthFar), this.texture = r2;
    }
  }
  getMesh(e17) {
    if (this.texture !== null && this.mesh === null) {
      let t3 = e17.cameras[0].viewport, n2 = new So({ vertexShader: pd, fragmentShader: md, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t3.z }, depthHeight: { value: t3.w } } });
      this.mesh = new _i(new fo(20, 20), n2);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, gd = class extends St {
  constructor(e17, t3) {
    let n2 = i;
    super();
    let a2 = this, o2 = null, s2 = 1, c2 = null, l2 = `local-floor`, u2 = 1, d2 = null, f2 = null, p2 = null, m2 = null, h2 = null, g2 = null, _2 = typeof XRWebGLBinding < `u`, v2 = new hd(), y2 = {}, b2 = t3[n2(1187)](), x2 = null, S2 = null, C2 = [], w2 = [], T2 = new U(), D2 = null, O2 = new xs();
    O2.viewport = new q();
    let k2 = new xs();
    k2.viewport = new q();
    let A2 = [O2, k2], j2 = new Ls(), te2 = null, ne2 = null;
    this.cameraAutoUpdate = true, this[n2(359)] = false, this.isPresenting = false, this[n2(827)] = function(e18) {
      let t4 = C2[e18];
      return t4 === void 0 && (t4 = new Gn(), C2[e18] = t4), t4.getTargetRaySpace();
    }, this.getControllerGrip = function(e18) {
      let t4 = C2[e18];
      return t4 === void 0 && (t4 = new Gn(), C2[e18] = t4), t4.getGripSpace();
    }, this.getHand = function(e18) {
      let t4 = C2[e18];
      return t4 === void 0 && (t4 = new Gn(), C2[e18] = t4), t4.getHandSpace();
    };
    function M2(e18) {
      let t4 = n2, r2 = w2.indexOf(e18.inputSource);
      if (r2 === -1) return;
      let i2 = C2[r2];
      i2 !== void 0 && (i2[t4(997)](e18.inputSource, e18.frame, d2 || c2), i2.dispatchEvent({ type: e18.type, data: e18.inputSource }));
    }
    function ie2() {
      let t4 = n2;
      o2[t4(806)](`select`, M2), o2.removeEventListener(`selectstart`, M2), o2[t4(806)](`selectend`, M2), o2.removeEventListener(`squeeze`, M2), o2.removeEventListener(`squeezestart`, M2), o2.removeEventListener(t4(1027), M2), o2.removeEventListener(`end`, ie2), o2.removeEventListener(`inputsourceschange`, ae2);
      for (let e18 = 0; e18 < C2[t4(660)]; e18++) {
        let t5 = w2[e18];
        t5 !== null && (w2[e18] = null, C2[e18].disconnect(t5));
      }
      te2 = null, ne2 = null, v2.reset();
      for (let e18 in y2) delete y2[e18];
      e17.setRenderTarget(x2), h2 = null, m2 = null, p2 = null, o2 = null, S2 = null, me2.stop(), a2.isPresenting = false, e17[t4(522)](D2), e17.setSize(T2.width, T2.height, false), a2.dispatchEvent({ type: t4(1221) });
    }
    this[n2(321)] = function(e18) {
      s2 = e18, a2.isPresenting === true && z(`WebXRManager: Cannot change framebuffer scale while presenting.`);
    }, this.setReferenceSpaceType = function(e18) {
      let t4 = n2;
      l2 = e18, a2.isPresenting === true && z(t4(1415));
    }, this.getReferenceSpace = function() {
      return d2 || c2;
    }, this.setReferenceSpace = function(e18) {
      d2 = e18;
    }, this.getBaseLayer = function() {
      return m2 === null ? h2 : m2;
    }, this.getBinding = function() {
      return p2 === null && _2 && (p2 = new XRWebGLBinding(o2, t3)), p2;
    }, this[n2(649)] = function() {
      return g2;
    }, this.getSession = function() {
      return o2;
    }, this.setSession = (function() {
      var n3 = r(function* (n4) {
        let r2 = $;
        if (o2 = n4, o2 !== null) {
          if (x2 = e17.getRenderTarget(), o2.addEventListener(`select`, M2), o2.addEventListener(`selectstart`, M2), o2[r2(322)](r2(1499), M2), o2.addEventListener(r2(1395), M2), o2.addEventListener(`squeezestart`, M2), o2.addEventListener(r2(1027), M2), o2.addEventListener(`end`, ie2), o2.addEventListener(`inputsourceschange`, ae2), b2[r2(705)] !== true && (yield t3.makeXRCompatible()), D2 = e17.getPixelRatio(), e17.getSize(T2), _2 && `createProjectionLayer` in XRWebGLBinding.prototype) {
            let n5 = null, i2 = null, a3 = null;
            b2[r2(379)] && (a3 = b2[r2(431)] ? t3[r2(663)] : t3.DEPTH_COMPONENT24, n5 = b2.stencil ? le : ce, i2 = b2.stencil ? re : ee);
            let c3 = { colorFormat: t3[r2(186)], depthFormat: a3, scaleFactor: s2 };
            p2 = this.getBinding(), m2 = p2.createProjectionLayer(c3), o2.updateRenderState({ layers: [m2] }), e17.setPixelRatio(1), e17.setSize(m2.textureWidth, m2.textureHeight, false), S2 = new pn(m2[r2(378)], m2.textureHeight, { format: N, type: E, depthTexture: new ba(m2.textureWidth, m2.textureHeight, i2, void 0, void 0, void 0, void 0, void 0, void 0, n5), stencilBuffer: b2.stencil, colorSpace: e17.outputColorSpace, samples: b2.antialias ? 4 : 0, resolveDepthBuffer: m2.ignoreDepthValues === false, resolveStencilBuffer: m2.ignoreDepthValues === false });
          } else {
            let n5 = { antialias: b2.antialias, alpha: true, depth: b2[r2(379)], stencil: b2.stencil, framebufferScaleFactor: s2 };
            h2 = new XRWebGLLayer(o2, t3, n5), o2.updateRenderState({ baseLayer: h2 }), e17.setPixelRatio(1), e17.setSize(h2.framebufferWidth, h2.framebufferHeight, false), S2 = new pn(h2.framebufferWidth, h2.framebufferHeight, { format: N, type: E, colorSpace: e17.outputColorSpace, stencilBuffer: b2.stencil, resolveDepthBuffer: h2.ignoreDepthValues === false, resolveStencilBuffer: h2.ignoreDepthValues === false });
          }
          S2[r2(449)] = true, this.setFoveation(u2), d2 = null, c2 = yield o2.requestReferenceSpace(l2), me2.setContext(o2), me2.start(), a2[r2(188)] = true, a2.dispatchEvent({ type: `sessionstart` });
        }
      });
      return function(e18) {
        return n3.apply(this, arguments);
      };
    })(), this.getEnvironmentBlendMode = function() {
      if (o2 !== null) return o2.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return v2[n2(1173)]();
    };
    function ae2(e18) {
      let t4 = n2;
      for (let n3 = 0; n3 < e18.removed[t4(660)]; n3++) {
        let t5 = e18.removed[n3], r2 = w2.indexOf(t5);
        r2 >= 0 && (w2[r2] = null, C2[r2].disconnect(t5));
      }
      for (let t5 = 0; t5 < e18.added.length; t5++) {
        let n3 = e18.added[t5], r2 = w2.indexOf(n3);
        if (r2 === -1) {
          for (let e19 = 0; e19 < C2.length; e19++) if (e19 >= w2.length) {
            w2.push(n3), r2 = e19;
            break;
          } else if (w2[e19] === null) {
            w2[e19] = n3, r2 = e19;
            break;
          }
          if (r2 === -1) break;
        }
        let i2 = C2[r2];
        i2 && i2.connect(n3);
      }
    }
    let oe2 = new W(), se2 = new W();
    function ue2(e18, t4, r2) {
      let i2 = n2;
      oe2[i2(1328)](t4.matrixWorld), se2.setFromMatrixPosition(r2.matrixWorld);
      let a3 = oe2.distanceTo(se2), o3 = t4.projectionMatrix.elements, s3 = r2[i2(490)].elements, c3 = o3[14] / (o3[10] - 1), l3 = o3[14] / (o3[10] + 1), u3 = (o3[9] + 1) / o3[5], d3 = (o3[9] - 1) / o3[5], f3 = (o3[8] - 1) / o3[0], p3 = (s3[8] + 1) / s3[0], m3 = c3 * f3, h3 = c3 * p3, g3 = a3 / (-f3 + p3), _3 = g3 * -f3;
      if (t4.matrixWorld.decompose(e18.position, e18.quaternion, e18.scale), e18.translateX(_3), e18[i2(304)](g3), e18[i2(1234)].compose(e18.position, e18[i2(1421)], e18.scale), e18.matrixWorldInverse.copy(e18.matrixWorld).invert(), o3[10] === -1) e18.projectionMatrix[i2(1250)](t4.projectionMatrix), e18[i2(548)].copy(t4.projectionMatrixInverse);
      else {
        let t5 = c3 + g3, n3 = l3 + g3, r3 = m3 - _3, o4 = h3 + (a3 - _3), s4 = u3 * l3 / n3 * t5, f4 = d3 * l3 / n3 * t5;
        e18[i2(490)].makePerspective(r3, o4, s4, f4, t5, n3), e18[i2(548)][i2(1250)](e18.projectionMatrix).invert();
      }
    }
    function de2(e18, t4) {
      let r2 = n2;
      t4 === null ? e18.matrixWorld.copy(e18.matrix) : e18.matrixWorld.multiplyMatrices(t4.matrixWorld, e18[r2(307)]), e18.matrixWorldInverse.copy(e18.matrixWorld)[r2(995)]();
    }
    this[n2(1115)] = function(e18) {
      let t4 = n2;
      if (o2 === null) return;
      let r2 = e18.near, i2 = e18.far;
      v2.texture !== null && (v2.depthNear > 0 && (r2 = v2.depthNear), v2.depthFar > 0 && (i2 = v2.depthFar)), j2.near = k2.near = O2.near = r2, j2.far = k2[t4(726)] = O2[t4(726)] = i2, (te2 !== j2.near || ne2 !== j2.far) && (o2.updateRenderState({ depthNear: j2.near, depthFar: j2.far }), te2 = j2.near, ne2 = j2[t4(726)]), j2.layers.mask = e18.layers.mask | 6, O2.layers.mask = j2.layers.mask & -5, k2.layers.mask = j2.layers[t4(1464)] & -3;
      let a3 = e18.parent, s3 = j2.cameras;
      de2(j2, a3);
      for (let e19 = 0; e19 < s3.length; e19++) de2(s3[e19], a3);
      s3.length === 2 ? ue2(j2, O2, k2) : j2[t4(490)].copy(O2[t4(490)]), P2(e18, j2, a3);
    };
    function P2(e18, t4, r2) {
      let i2 = n2;
      r2 === null ? e18[i2(307)].copy(t4.matrixWorld) : (e18.matrix[i2(1250)](r2.matrixWorld), e18[i2(307)][i2(995)](), e18.matrix.multiply(t4.matrixWorld)), e18.matrix.decompose(e18.position, e18.quaternion, e18.scale), e18[i2(659)](true), e18.projectionMatrix.copy(t4.projectionMatrix), e18.projectionMatrixInverse[i2(1250)](t4[i2(548)]), e18.isPerspectiveCamera && (e18.fov = Et * 2 * Math[i2(556)](1 / e18[i2(490)].elements[5]), e18.zoom = 1);
    }
    this.getCamera = function() {
      return j2;
    }, this.getFoveation = function() {
      if (!(m2 === null && h2 === null)) return u2;
    }, this.setFoveation = function(e18) {
      let t4 = n2;
      u2 = e18, m2 !== null && (m2[t4(1126)] = e18), h2 !== null && h2.fixedFoveation !== void 0 && (h2.fixedFoveation = e18);
    }, this[n2(424)] = function() {
      return v2[n2(1017)] !== null;
    }, this.getDepthSensingMesh = function() {
      return v2.getMesh(j2);
    }, this.getCameraTexture = function(e18) {
      return y2[e18];
    };
    let fe2 = null;
    function pe2(t4, r2) {
      let i2 = n2;
      if (f2 = r2[i2(1164)](d2 || c2), g2 = r2, f2 !== null) {
        let t5 = f2.views;
        h2 !== null && (e17.setRenderTargetFramebuffer(S2, h2.framebuffer), e17.setRenderTarget(S2));
        let n3 = false;
        t5.length !== j2.cameras.length && (j2.cameras[i2(660)] = 0, n3 = true);
        for (let r4 = 0; r4 < t5.length; r4++) {
          let a3 = t5[r4], o3 = null;
          if (h2 !== null) o3 = h2.getViewport(a3);
          else {
            let t6 = p2.getViewSubImage(m2, a3);
            o3 = t6.viewport, r4 === 0 && (e17.setRenderTargetTextures(S2, t6.colorTexture, t6[i2(651)]), e17.setRenderTarget(S2));
          }
          let s3 = A2[r4];
          s3 === void 0 && (s3 = new xs(), s3.layers.enable(r4), s3.viewport = new q(), A2[r4] = s3), s3.matrix[i2(823)](a3.transform[i2(307)]), s3[i2(307)].decompose(s3.position, s3.quaternion, s3.scale), s3.projectionMatrix.fromArray(a3.projectionMatrix), s3.projectionMatrixInverse.copy(s3.projectionMatrix).invert(), s3.viewport.set(o3.x, o3.y, o3[i2(1505)], o3[i2(221)]), r4 === 0 && (j2.matrix.copy(s3.matrix), j2.matrix.decompose(j2.position, j2.quaternion, j2.scale)), n3 === true && j2.cameras[i2(1184)](s3);
        }
        let r3 = o2.enabledFeatures;
        if (r3 && r3.includes(`depth-sensing`) && o2[i2(952)] == i2(611) && _2) {
          p2 = a2.getBinding();
          let e18 = p2[i2(1305)](t5[0]);
          e18 && e18.isValid && e18.texture && v2.init(e18, o2.renderState);
        }
        if (r3 && r3.includes(`camera-access`) && _2) {
          e17[i2(1182)].unbindTexture(), p2 = a2.getBinding();
          for (let e18 = 0; e18 < t5.length; e18++) {
            let n4 = t5[e18].camera;
            if (n4) {
              let e19 = y2[n4];
              e19 || (e19 = new Sa(), y2[n4] = e19);
              let t6 = p2[i2(932)](n4);
              e19.sourceTexture = t6;
            }
          }
        }
      }
      for (let e18 = 0; e18 < C2.length; e18++) {
        let t5 = w2[e18], n3 = C2[e18];
        t5 !== null && n3 !== void 0 && n3.update(t5, r2, d2 || c2);
      }
      fe2 && fe2(t4, r2), r2.detectedPlanes && a2.dispatchEvent({ type: `planesdetected`, data: r2 }), g2 = null;
    }
    let me2 = new cc();
    me2.setAnimationLoop(pe2), this.setAnimationLoop = function(e18) {
      fe2 = e18;
    }, this.dispose = function() {
    };
  }
}, _d = new J(), vd = new G();
vd.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function yd(e17, t3) {
  function n2(e18, t4) {
    e18.matrixAutoUpdate === true && e18.updateMatrix(), t4.value.copy(e18.matrix);
  }
  function r2(t4, n3) {
    let r3 = $;
    n3.color.getRGB(t4.fogColor.value, vo(e17)), n3[r3(352)] ? (t4.fogNear.value = n3.near, t4.fogFar.value = n3.far) : n3.isFogExp2 && (t4.fogDensity[r3(895)] = n3.density);
  }
  function i2(e18, t4, n3, r3, i3) {
    let g2 = $;
    t4[g2(300)] ? t4.uniformsNeedUpdate = false : t4.isMeshBasicMaterial ? a2(e18, t4) : t4[g2(260)] ? (a2(e18, t4), t4[g2(195)] && (e18.envMapIntensity.value = t4.envMapIntensity)) : t4.isMeshToonMaterial ? (a2(e18, t4), d2(e18, t4)) : t4.isMeshPhongMaterial ? (a2(e18, t4), u2(e18, t4), t4.envMap && (e18.envMapIntensity[g2(895)] = t4.envMapIntensity)) : t4.isMeshStandardMaterial ? (a2(e18, t4), f2(e18, t4), t4.isMeshPhysicalMaterial && p2(e18, t4, i3)) : t4.isMeshMatcapMaterial ? (a2(e18, t4), m2(e18, t4)) : t4.isMeshDepthMaterial ? a2(e18, t4) : t4.isMeshDistanceMaterial ? (a2(e18, t4), h2(e18, t4)) : t4[g2(1359)] ? a2(e18, t4) : t4.isLineBasicMaterial ? (o2(e18, t4), t4[g2(1368)] && s2(e18, t4)) : t4.isPointsMaterial ? c2(e18, t4, n3, r3) : t4[g2(1486)] ? l2(e18, t4) : t4.isShadowMaterial ? (e18.color[g2(895)].copy(t4.color), e18.opacity.value = t4[g2(1226)]) : t4.isShaderMaterial && (t4.uniformsNeedUpdate = false);
  }
  function a2(e18, r3) {
    let i3 = $;
    e18.opacity.value = r3.opacity, r3.color && e18[i3(1341)].value.copy(r3.color), r3.emissive && e18.emissive.value[i3(1250)](r3[i3(1006)]).multiplyScalar(r3.emissiveIntensity), r3[i3(579)] && (e18.map.value = r3.map, n2(r3.map, e18.mapTransform)), r3.alphaMap && (e18.alphaMap.value = r3.alphaMap, n2(r3.alphaMap, e18.alphaMapTransform)), r3.bumpMap && (e18.bumpMap.value = r3.bumpMap, n2(r3[i3(1354)], e18.bumpMapTransform), e18[i3(1044)][i3(895)] = r3.bumpScale, r3.side === 1 && (e18[i3(1044)].value *= -1)), r3.normalMap && (e18.normalMap[i3(895)] = r3.normalMap, n2(r3.normalMap, e18.normalMapTransform), e18.normalScale.value.copy(r3.normalScale), r3[i3(1319)] === 1 && e18.normalScale.value.negate()), r3.displacementMap && (e18.displacementMap.value = r3.displacementMap, n2(r3.displacementMap, e18[i3(350)]), e18.displacementScale.value = r3[i3(342)], e18[i3(1114)].value = r3[i3(1114)]), r3.emissiveMap && (e18.emissiveMap[i3(895)] = r3.emissiveMap, n2(r3.emissiveMap, e18.emissiveMapTransform)), r3.specularMap && (e18.specularMap[i3(895)] = r3.specularMap, n2(r3.specularMap, e18.specularMapTransform)), r3.alphaTest > 0 && (e18.alphaTest.value = r3.alphaTest);
    let a3 = t3.get(r3), o3 = a3[i3(195)], s3 = a3.envMapRotation;
    o3 && (e18[i3(195)].value = o3, e18.envMapRotation.value[i3(370)](_d[i3(373)](s3)).transpose(), o3.isCubeTexture && o3.isRenderTargetTexture === false && e18.envMapRotation.value.premultiply(vd), e18.reflectivity.value = r3.reflectivity, e18.ior.value = r3.ior, e18.refractionRatio.value = r3.refractionRatio), r3.lightMap && (e18.lightMap.value = r3.lightMap, e18[i3(1070)].value = r3[i3(1070)], n2(r3.lightMap, e18[i3(1258)])), r3[i3(456)] && (e18.aoMap.value = r3.aoMap, e18[i3(461)].value = r3.aoMapIntensity, n2(r3.aoMap, e18.aoMapTransform));
  }
  function o2(e18, t4) {
    let r3 = $;
    e18.diffuse[r3(895)].copy(t4.color), e18.opacity[r3(895)] = t4[r3(1226)], t4.map && (e18.map.value = t4[r3(579)], n2(t4.map, e18.mapTransform));
  }
  function s2(e18, t4) {
    e18.dashSize.value = t4.dashSize, e18.totalSize.value = t4.dashSize + t4.gapSize, e18.scale.value = t4.scale;
  }
  function c2(e18, t4, r3, i3) {
    let a3 = $;
    e18.diffuse.value.copy(t4.color), e18.opacity.value = t4[a3(1226)], e18.size.value = t4.size * r3, e18.scale.value = i3 * 0.5, t4.map && (e18.map[a3(895)] = t4.map, n2(t4.map, e18.uvTransform)), t4.alphaMap && (e18.alphaMap[a3(895)] = t4.alphaMap, n2(t4.alphaMap, e18.alphaMapTransform)), t4.alphaTest > 0 && (e18.alphaTest.value = t4.alphaTest);
  }
  function l2(e18, t4) {
    let r3 = $;
    e18.diffuse[r3(895)].copy(t4[r3(1119)]), e18[r3(1226)].value = t4.opacity, e18.rotation.value = t4.rotation, t4.map && (e18.map.value = t4[r3(579)], n2(t4.map, e18.mapTransform)), t4.alphaMap && (e18.alphaMap.value = t4.alphaMap, n2(t4.alphaMap, e18.alphaMapTransform)), t4[r3(283)] > 0 && (e18.alphaTest.value = t4.alphaTest);
  }
  function u2(e18, t4) {
    let n3 = $;
    e18.specular.value.copy(t4.specular), e18[n3(563)][n3(895)] = Math.max(t4.shininess, 1e-4);
  }
  function d2(e18, t4) {
    t4[$(1283)] && (e18.gradientMap.value = t4.gradientMap);
  }
  function f2(e18, t4) {
    let r3 = $;
    e18.metalness.value = t4.metalness, t4.metalnessMap && (e18[r3(698)][r3(895)] = t4.metalnessMap, n2(t4.metalnessMap, e18.metalnessMapTransform)), e18.roughness.value = t4.roughness, t4.roughnessMap && (e18.roughnessMap.value = t4[r3(1289)], n2(t4.roughnessMap, e18[r3(1478)])), t4.envMap && (e18.envMapIntensity[r3(895)] = t4[r3(703)]);
  }
  function p2(e18, t4, r3) {
    let i3 = $;
    e18.ior.value = t4.ior, t4.sheen > 0 && (e18.sheenColor.value.copy(t4[i3(429)]).multiplyScalar(t4.sheen), e18[i3(943)].value = t4[i3(943)], t4.sheenColorMap && (e18[i3(289)].value = t4[i3(289)], n2(t4.sheenColorMap, e18.sheenColorMapTransform)), t4.sheenRoughnessMap && (e18.sheenRoughnessMap.value = t4.sheenRoughnessMap, n2(t4.sheenRoughnessMap, e18.sheenRoughnessMapTransform))), t4.clearcoat > 0 && (e18.clearcoat.value = t4.clearcoat, e18.clearcoatRoughness.value = t4[i3(371)], t4.clearcoatMap && (e18.clearcoatMap.value = t4.clearcoatMap, n2(t4.clearcoatMap, e18.clearcoatMapTransform)), t4.clearcoatRoughnessMap && (e18.clearcoatRoughnessMap.value = t4.clearcoatRoughnessMap, n2(t4.clearcoatRoughnessMap, e18.clearcoatRoughnessMapTransform)), t4.clearcoatNormalMap && (e18.clearcoatNormalMap.value = t4.clearcoatNormalMap, n2(t4.clearcoatNormalMap, e18.clearcoatNormalMapTransform), e18.clearcoatNormalScale[i3(895)].copy(t4[i3(237)]), t4[i3(1319)] === 1 && e18.clearcoatNormalScale.value.negate())), t4.dispersion > 0 && (e18.dispersion[i3(895)] = t4[i3(815)]), t4.iridescence > 0 && (e18.iridescence.value = t4.iridescence, e18[i3(1364)].value = t4.iridescenceIOR, e18.iridescenceThicknessMinimum.value = t4.iridescenceThicknessRange[0], e18.iridescenceThicknessMaximum.value = t4.iridescenceThicknessRange[1], t4.iridescenceMap && (e18.iridescenceMap.value = t4[i3(413)], n2(t4[i3(413)], e18.iridescenceMapTransform)), t4.iridescenceThicknessMap && (e18.iridescenceThicknessMap.value = t4[i3(658)], n2(t4.iridescenceThicknessMap, e18.iridescenceThicknessMapTransform))), t4.transmission > 0 && (e18.transmission[i3(895)] = t4.transmission, e18.transmissionSamplerMap.value = r3.texture, e18.transmissionSamplerSize[i3(895)].set(r3.width, r3.height), t4.transmissionMap && (e18.transmissionMap.value = t4.transmissionMap, n2(t4.transmissionMap, e18.transmissionMapTransform)), e18.thickness.value = t4.thickness, t4.thicknessMap && (e18.thicknessMap.value = t4[i3(613)], n2(t4.thicknessMap, e18.thicknessMapTransform)), e18.attenuationDistance.value = t4.attenuationDistance, e18.attenuationColor.value.copy(t4.attenuationColor)), t4.anisotropy > 0 && (e18.anisotropyVector.value.set(t4.anisotropy * Math[i3(339)](t4.anisotropyRotation), t4[i3(1091)] * Math.sin(t4.anisotropyRotation)), t4.anisotropyMap && (e18.anisotropyMap.value = t4.anisotropyMap, n2(t4.anisotropyMap, e18.anisotropyMapTransform))), e18.specularIntensity.value = t4.specularIntensity, e18.specularColor.value.copy(t4.specularColor), t4.specularColorMap && (e18.specularColorMap.value = t4.specularColorMap, n2(t4.specularColorMap, e18.specularColorMapTransform)), t4[i3(1445)] && (e18.specularIntensityMap.value = t4.specularIntensityMap, n2(t4.specularIntensityMap, e18.specularIntensityMapTransform));
  }
  function m2(e18, t4) {
    let n3 = $;
    t4.matcap && (e18[n3(894)].value = t4.matcap);
  }
  function h2(e18, n3) {
    let r3 = $, i3 = t3.get(n3).light;
    e18[r3(1270)].value.setFromMatrixPosition(i3.matrixWorld), e18.nearDistance.value = i3.shadow.camera.near, e18.farDistance.value = i3[r3(1271)].camera.far;
  }
  return { refreshFogUniforms: r2, refreshMaterialUniforms: i2 };
}
function bd(e17, t3, n2, r2) {
  let i2 = {}, a2 = {}, o2 = [], s2 = e17.getParameter(e17.MAX_UNIFORM_BUFFER_BINDINGS);
  function c2(e18, t4) {
    let n3 = t4[$(735)];
    r2.uniformBlockBinding(e18, n3);
  }
  function l2(e18, n3) {
    let o3 = $, s3 = i2[e18.id];
    s3 === void 0 && (m2(e18), s3 = u2(e18), i2[e18.id] = s3, e18.addEventListener(o3(254), g2));
    let c3 = n3.program;
    r2[o3(1109)](e18, c3);
    let l3 = t3.render[o3(852)];
    a2[e18.id] !== l3 && (f2(e18), a2[e18.id] = l3);
  }
  function u2(t4) {
    let n3 = d2();
    t4.__bindingPointIndex = n3;
    let r3 = e17.createBuffer(), i3 = t4.__size, a3 = t4.usage;
    return e17.bindBuffer(e17.UNIFORM_BUFFER, r3), e17.bufferData(e17.UNIFORM_BUFFER, i3, a3), e17.bindBuffer(e17.UNIFORM_BUFFER, null), e17.bindBufferBase(e17.UNIFORM_BUFFER, n3, r3), r3;
  }
  function d2() {
    let e18 = $;
    for (let t4 = 0; t4 < s2; t4++) if (o2.indexOf(t4) === -1) return o2[e18(1184)](t4), t4;
    return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`), 0;
  }
  function f2(t4) {
    let n3 = $, r3 = i2[t4.id], a3 = t4.uniforms, o3 = t4.__cache;
    e17.bindBuffer(e17.UNIFORM_BUFFER, r3);
    for (let t5 = 0, r4 = a3.length; t5 < r4; t5++) {
      let r5 = Array.isArray(a3[t5]) ? a3[t5] : [a3[t5]];
      for (let i3 = 0, a4 = r5.length; i3 < a4; i3++) {
        let a5 = r5[i3];
        if (p2(a5, t5, i3, o3) === true) {
          let t6 = a5.__offset, r6 = Array.isArray(a5[n3(895)]) ? a5.value : [a5.value], i4 = 0;
          for (let o4 = 0; o4 < r6.length; o4++) {
            let s3 = r6[o4], c3 = h2(s3);
            typeof s3 == `number` || typeof s3 == `boolean` ? (a5.__data[0] = s3, e17.bufferSubData(e17.UNIFORM_BUFFER, t6 + i4, a5.__data)) : s3.isMatrix3 ? (a5.__data[0] = s3[n3(992)][0], a5.__data[1] = s3.elements[1], a5.__data[2] = s3.elements[2], a5.__data[3] = 0, a5.__data[4] = s3.elements[3], a5.__data[5] = s3.elements[4], a5.__data[6] = s3.elements[5], a5[n3(915)][7] = 0, a5.__data[8] = s3.elements[6], a5.__data[9] = s3.elements[7], a5.__data[10] = s3.elements[8], a5.__data[11] = 0) : ArrayBuffer.isView(s3) ? a5[n3(915)][n3(1139)](new s3.constructor(s3.buffer, s3.byteOffset, a5.__data.length)) : (s3.toArray(a5[n3(915)], i4), i4 += c3.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          e17.bufferSubData(e17.UNIFORM_BUFFER, t6, a5[n3(915)]);
        }
      }
    }
    e17.bindBuffer(e17.UNIFORM_BUFFER, null);
  }
  function p2(e18, t4, n3, r3) {
    let i3 = e18.value, a3 = t4 + `_` + n3;
    if (r3[a3] === void 0) return typeof i3 == `number` || typeof i3 == `boolean` ? r3[a3] = i3 : ArrayBuffer.isView(i3) ? r3[a3] = i3.slice() : r3[a3] = i3.clone(), true;
    {
      let e19 = r3[a3];
      if (typeof i3 == `number` || typeof i3 == `boolean`) {
        if (e19 !== i3) return r3[a3] = i3, true;
      } else if (ArrayBuffer.isView(i3)) return true;
      else if (e19.equals(i3) === false) return e19.copy(i3), true;
    }
    return false;
  }
  function m2(e18) {
    let t4 = $, n3 = e18.uniforms, r3 = 0;
    for (let e19 = 0, i4 = n3.length; e19 < i4; e19++) {
      let i5 = Array.isArray(n3[e19]) ? n3[e19] : [n3[e19]];
      for (let e20 = 0, n4 = i5.length; e20 < n4; e20++) {
        let n5 = i5[e20], a3 = Array.isArray(n5[t4(895)]) ? n5.value : [n5.value];
        for (let e21 = 0, i6 = a3.length; e21 < i6; e21++) {
          let i7 = a3[e21], o3 = h2(i7), s3 = r3 % 16, c3 = s3 % o3[t4(168)], l3 = s3 + c3;
          r3 += c3, l3 !== 0 && 16 - l3 < o3.storage && (r3 += 16 - l3), n5[t4(915)] = new Float32Array(o3.storage / Float32Array[t4(1211)]), n5[t4(550)] = r3, r3 += o3.storage;
        }
      }
    }
    let i3 = r3 % 16;
    return i3 > 0 && (r3 += 16 - i3), e18.__size = r3, e18[t4(314)] = {}, this;
  }
  function h2(e18) {
    let t4 = $, n3 = { boundary: 0, storage: 0 };
    return typeof e18 == `number` || typeof e18 == `boolean` ? (n3.boundary = 4, n3.storage = 4) : e18.isVector2 ? (n3.boundary = 8, n3.storage = 8) : e18.isVector3 || e18.isColor ? (n3.boundary = 16, n3.storage = 12) : e18.isVector4 ? (n3.boundary = 16, n3.storage = 16) : e18.isMatrix3 ? (n3.boundary = 48, n3.storage = 48) : e18.isMatrix4 ? (n3.boundary = 64, n3.storage = 64) : e18.isTexture ? z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`) : ArrayBuffer.isView(e18) ? (n3.boundary = 16, n3.storage = e18[t4(936)]) : z(`WebGLRenderer: Unsupported uniform value type.`, e18), n3;
  }
  function g2(t4) {
    let n3 = $, r3 = t4.target;
    r3.removeEventListener(`dispose`, g2);
    let s3 = o2.indexOf(r3[n3(840)]);
    o2.splice(s3, 1), e17.deleteBuffer(i2[r3.id]), delete i2[r3.id], delete a2[r3.id];
  }
  function _2() {
    let t4 = $;
    for (let n3 in i2) e17[t4(696)](i2[n3]);
    o2 = [], i2 = {}, a2 = {};
  }
  return { bind: c2, update: l2, dispose: _2 };
}
var xd = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]), Sd = null;
function Cd() {
  let e17 = i;
  return Sd === null && (Sd = new ji(xd, 16, 16, P, te), Sd.name = `DFG_LUT`, Sd[e17(486)] = 1006, Sd.magFilter = 1006, Sd.wrapS = 1001, Sd[e17(344)] = 1001, Sd.generateMipmaps = false, Sd.needsUpdate = true), Sd;
}
var wd = class {
  constructor(e17 = {}) {
    let t3 = i, { canvas: n2 = mt(), context: a2 = null, depth: o2 = true, stencil: s2 = false, alpha: c2 = false, antialias: l2 = false, premultipliedAlpha: u2 = true, preserveDrawingBuffer: d2 = false, powerPreference: f2 = `default`, failIfMajorPerformanceCaveat: p2 = false, reversedDepthBuffer: m2 = false, outputBufferType: h2 = E } = e17;
    this.isWebGLRenderer = true;
    let g2;
    if (a2 !== null) {
      if (typeof WebGLRenderingContext < `u` && a2 instanceof WebGLRenderingContext) throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);
      g2 = a2.getContextAttributes().alpha;
    } else g2 = c2;
    let _2 = h2, v2 = /* @__PURE__ */ new Set([pe, fe, de]), y2 = /* @__PURE__ */ new Set([E, ee, k, re, ne, M]), b2 = new Uint32Array(4), x2 = new Int32Array(4), S2 = new W(), C2 = null, w2 = null, D2 = [], O2 = [], A2 = null;
    this.domElement = n2, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this[t3(721)] = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    let j2 = this, ie2 = false, ae2 = null;
    this._outputColorSpace = it;
    let oe2 = 0, se2 = 0, N2 = null, ce2 = -1, le2 = null, ue2 = new q(), P2 = new q(), me2 = null, he2 = new Y(0), ge2 = 0, _e2 = n2.width, ve2 = n2.height, ye2 = 1, be2 = null, xe2 = null, Se2 = new q(0, 0, _e2, ve2), Ce2 = new q(0, 0, _e2, ve2), we2 = false, Te2 = new Zi(), Ee2 = false, De2 = false, Oe2 = new J(), ke2 = new W(), Ae2 = new q(), je2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true }, Me2 = false;
    function Ne2() {
      return N2 === null ? ye2 : 1;
    }
    let F2 = a2;
    function Pe2(e18, t4) {
      return n2.getContext(e18, t4);
    }
    try {
      let e18 = { alpha: true, depth: o2, stencil: s2, antialias: l2, premultipliedAlpha: u2, preserveDrawingBuffer: d2, powerPreference: f2, failIfMajorPerformanceCaveat: p2 };
      if (t3(248) in n2 && n2.setAttribute(`data-engine`, `three.js r184`), n2.addEventListener(`webglcontextlost`, rt2, false), n2.addEventListener(`webglcontextrestored`, at2, false), n2.addEventListener(`webglcontextcreationerror`, ot2, false), F2 === null) {
        let t4 = `webgl2`;
        if (F2 = Pe2(t4, e18), F2 === null) throw Pe2(t4) ? Error(`Error creating WebGL context with your selected attributes.`) : Error(`Error creating WebGL context.`);
      }
    } catch (e18) {
      throw B(`WebGLRenderer: ` + e18.message), e18;
    }
    let Fe2, Ie2, I2, Le2, L2, R2, Re2, ze2, Be2, Ve2, He2, Ue2, We2, Ge2, Ke2, qe2, Je2, Ye2, Xe2, Ze2, Qe2, $e2, et2;
    function tt2() {
      let n3 = t3;
      Fe2 = new Vc(F2), Fe2[n3(1078)](), Qe2 = new fd(F2, Fe2), Ie2 = new _c(F2, Fe2, e17, Qe2), I2 = new ud(F2, Fe2), Ie2.reversedDepthBuffer && m2 && I2.buffers.depth.setReversed(true), Le2 = new Wc(F2), L2 = new Wu(), R2 = new dd(F2, Fe2, I2, L2, Ie2, Qe2, Le2), Re2 = new Bc(j2), ze2 = new lc(F2), $e2 = new hc(F2, ze2), Be2 = new Hc(F2, ze2, Le2, $e2), Ve2 = new Kc(F2, Be2, ze2, $e2, Le2), Ye2 = new Gc(F2, Ie2, R2), Ke2 = new vc(L2), He2 = new Uu(j2, Re2, Fe2, Ie2, $e2, Ke2), Ue2 = new yd(j2, L2), We2 = new Ju(), Ge2 = new td(Fe2), Je2 = new mc(j2, Re2, I2, Ve2, g2, u2), qe2 = new ld(j2, Ve2, Ie2), et2 = new bd(F2, Le2, Ie2, I2), Xe2 = new gc(F2, Fe2, Le2), Ze2 = new Uc(F2, Fe2, Le2), Le2.programs = He2[n3(488)], j2.capabilities = Ie2, j2.extensions = Fe2, j2.properties = L2, j2.renderLists = We2, j2[n3(458)] = qe2, j2.state = I2, j2.info = Le2;
    }
    tt2(), _2 !== 1009 && (A2 = new Jc(_2, n2[t3(1505)], n2.height, o2, s2));
    let nt2 = new gd(j2, F2);
    this.xr = nt2, this.getContext = function() {
      return F2;
    }, this.getContextAttributes = function() {
      return F2.getContextAttributes();
    }, this.forceContextLoss = function() {
      let e18 = Fe2[t3(859)](`WEBGL_lose_context`);
      e18 && e18.loseContext();
    }, this.forceContextRestore = function() {
      let e18 = t3, n3 = Fe2[e18(859)](`WEBGL_lose_context`);
      n3 && n3[e18(460)]();
    }, this.getPixelRatio = function() {
      return ye2;
    }, this.setPixelRatio = function(e18) {
      e18 !== void 0 && (ye2 = e18, this.setSize(_e2, ve2, false));
    }, this.getSize = function(e18) {
      return e18.set(_e2, ve2);
    }, this.setSize = function(e18, r2, i2 = true) {
      let a3 = t3;
      if (nt2[a3(188)]) {
        z(`WebGLRenderer: Can't change size while VR device is presenting.`);
        return;
      }
      _e2 = e18, ve2 = r2, n2.width = Math.floor(e18 * ye2), n2.height = Math.floor(r2 * ye2), i2 === true && (n2.style.width = e18 + `px`, n2.style.height = r2 + `px`), A2 !== null && A2.setSize(n2.width, n2[a3(221)]), this.setViewport(0, 0, e18, r2);
    }, this.getDrawingBufferSize = function(e18) {
      return e18[t3(1139)](_e2 * ye2, ve2 * ye2).floor();
    }, this[t3(906)] = function(e18, r2, i2) {
      let a3 = t3;
      _e2 = e18, ve2 = r2, ye2 = i2, n2[a3(1505)] = Math.floor(e18 * i2), n2.height = Math.floor(r2 * i2), this.setViewport(0, 0, e18, r2);
    }, this.setEffects = function(e18) {
      if (_2 === 1009) {
        B(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);
        return;
      }
      if (e18) {
        for (let t4 = 0; t4 < e18.length; t4++) if (e18[t4].isOutputPass === true) {
          z(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);
          break;
        }
      }
      A2.setEffects(e18 || []);
    }, this[t3(519)] = function(e18) {
      return e18[t3(1250)](ue2);
    }, this.getViewport = function(e18) {
      return e18.copy(Se2);
    }, this.setViewport = function(e18, n3, r2, i2) {
      let a3 = t3;
      e18.isVector4 ? Se2[a3(1139)](e18.x, e18.y, e18.z, e18.w) : Se2.set(e18, n3, r2, i2), I2.viewport(ue2[a3(1250)](Se2).multiplyScalar(ye2)[a3(866)]());
    }, this.getScissor = function(e18) {
      return e18.copy(Ce2);
    }, this.setScissor = function(e18, n3, r2, i2) {
      let a3 = t3;
      e18.isVector4 ? Ce2.set(e18.x, e18.y, e18.z, e18.w) : Ce2.set(e18, n3, r2, i2), I2.scissor(P2[a3(1250)](Ce2).multiplyScalar(ye2).round());
    }, this[t3(820)] = function() {
      return we2;
    }, this.setScissorTest = function(e18) {
      I2.setScissorTest(we2 = e18);
    }, this.setOpaqueSort = function(e18) {
      be2 = e18;
    }, this.setTransparentSort = function(e18) {
      xe2 = e18;
    }, this[t3(1432)] = function(e18) {
      let n3 = t3;
      return e18.copy(Je2[n3(1432)]());
    }, this.setClearColor = function() {
      Je2.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Je2.getClearAlpha();
    }, this.setClearAlpha = function() {
      Je2.setClearAlpha(...arguments);
    }, this.clear = function(e18 = true, n3 = true, r2 = true) {
      let i2 = t3, a3 = 0;
      if (e18) {
        let e19 = false;
        if (N2 !== null) {
          let t4 = N2.texture.format;
          e19 = v2[i2(1209)](t4);
        }
        if (e19) {
          let e20 = N2.texture[i2(1112)], t4 = y2.has(e20), n4 = Je2.getClearColor(), r3 = Je2.getClearAlpha(), a4 = n4.r, o3 = n4.g, s3 = n4.b;
          t4 ? (b2[0] = a4, b2[1] = o3, b2[2] = s3, b2[3] = r3, F2.clearBufferuiv(F2.COLOR, 0, b2)) : (x2[0] = a4, x2[1] = o3, x2[2] = s3, x2[3] = r3, F2.clearBufferiv(F2.COLOR, 0, x2));
        } else a3 |= F2.COLOR_BUFFER_BIT;
      }
      n3 && (a3 |= F2.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), r2 && (a3 |= F2[i2(225)], this.state.buffers[i2(431)].setMask(4294967295)), a3 !== 0 && F2.clear(a3);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.setNodesHandler = function(e18) {
      e18.setRenderer(this), ae2 = e18;
    }, this[t3(254)] = function() {
      let e18 = t3;
      n2.removeEventListener(`webglcontextlost`, rt2, false), n2.removeEventListener(`webglcontextrestored`, at2, false), n2.removeEventListener(e18(744), ot2, false), Je2.dispose(), We2.dispose(), Ge2[e18(254)](), L2.dispose(), Re2.dispose(), Ve2.dispose(), $e2.dispose(), et2.dispose(), He2[e18(254)](), nt2.dispose(), nt2.removeEventListener(e18(200), ht2), nt2.removeEventListener(e18(1221), gt2), vt2.stop();
    };
    function rt2(e18) {
      let n3 = t3;
      e18.preventDefault(), _t(n3(183)), ie2 = true;
    }
    function at2() {
      let e18 = t3;
      _t(`WebGLRenderer: Context Restored.`), ie2 = false;
      let n3 = Le2[e18(455)], r2 = qe2.enabled, i2 = qe2.autoUpdate, a3 = qe2[e18(318)], o3 = qe2.type;
      tt2(), Le2.autoReset = n3, qe2.enabled = r2, qe2.autoUpdate = i2, qe2.needsUpdate = a3, qe2.type = o3;
    }
    function ot2(e18) {
      B(t3(753), e18.statusMessage);
    }
    function st2(e18) {
      let n3 = e18[t3(1149)];
      n3.removeEventListener(`dispose`, st2), ct2(n3);
    }
    function ct2(e18) {
      let n3 = t3;
      lt2(e18), L2[n3(842)](e18);
    }
    function lt2(e18) {
      let n3 = t3, r2 = L2.get(e18).programs;
      r2 !== void 0 && (r2.forEach(function(e19) {
        He2.releaseProgram(e19);
      }), e18.isShaderMaterial && He2[n3(1433)](e18));
    }
    this.renderBufferDirect = function(e18, n3, r2, i2, a3, o3) {
      let s3 = t3;
      n3 === null && (n3 = je2);
      let c3 = a3.isMesh && a3.matrixWorld.determinant() < 0, l3 = Ot2(e18, n3, r2, i2, a3);
      I2[s3(1420)](i2, c3);
      let u3 = r2[s3(1259)], d3 = 1;
      if (i2[s3(1121)] === true) {
        if (u3 = Be2[s3(1342)](r2), u3 === void 0) return;
        d3 = 2;
      }
      let f3 = r2.drawRange, p3 = r2.attributes[s3(1477)], m3 = f3.start * d3, h3 = (f3.start + f3.count) * d3;
      o3 !== null && (m3 = Math[s3(1023)](m3, o3.start * d3), h3 = Math.min(h3, (o3.start + o3.count) * d3)), u3 === null ? p3 != null && (m3 = Math.max(m3, 0), h3 = Math.min(h3, p3.count)) : (m3 = Math[s3(1023)](m3, 0), h3 = Math.min(h3, u3.count));
      let g3 = h3 - m3;
      if (g3 < 0 || g3 === 1 / 0) return;
      $e2.setup(a3, i2, l3, r2, u3);
      let _3, v3 = Xe2;
      if (u3 !== null && (_3 = ze2.get(u3), v3 = Ze2, v3[s3(924)](_3)), a3[s3(1111)]) i2.wireframe === true ? (I2[s3(773)](i2.wireframeLinewidth * Ne2()), v3.setMode(F2.LINES)) : v3.setMode(F2.TRIANGLES);
      else if (a3.isLine) {
        let e19 = i2.linewidth;
        e19 === void 0 && (e19 = 1), I2.setLineWidth(e19 * Ne2()), a3.isLineSegments ? v3.setMode(F2.LINES) : a3.isLineLoop ? v3.setMode(F2[s3(955)]) : v3.setMode(F2.LINE_STRIP);
      } else a3.isPoints ? v3.setMode(F2.POINTS) : a3.isSprite && v3[s3(480)](F2.TRIANGLES);
      if (a3.isBatchedMesh) if (Fe2.get(`WEBGL_multi_draw`)) v3.renderMultiDraw(a3._multiDrawStarts, a3._multiDrawCounts, a3._multiDrawCount);
      else {
        let e19 = a3._multiDrawStarts, t4 = a3._multiDrawCounts, n4 = a3._multiDrawCount, r3 = u3 ? ze2.get(u3)[s3(175)] : 1, o4 = L2.get(i2).currentProgram.getUniforms();
        for (let i3 = 0; i3 < n4; i3++) o4[s3(428)](F2, `_gl_DrawID`, i3), v3[s3(581)](e19[i3] / r3, t4[i3]);
      }
      else if (a3.isInstancedMesh) v3.renderInstances(m3, g3, a3.count);
      else if (r2[s3(758)]) {
        let e19 = r2._maxInstanceCount === void 0 ? 1 / 0 : r2._maxInstanceCount, t4 = Math[s3(1245)](r2.instanceCount, e19);
        v3.renderInstances(m3, g3, t4);
      } else v3.render(m3, g3);
    };
    function dt2(e18, n3, r2) {
      let i2 = t3;
      e18.transparent === true && e18.side === 2 && e18.forceSinglePass === false ? (e18.side = 1, e18[i2(318)] = true, Tt2(e18, n3, r2), e18.side = 0, e18.needsUpdate = true, Tt2(e18, n3, r2), e18.side = 2) : Tt2(e18, n3, r2);
    }
    this.compile = function(e18, n3, r2 = null) {
      let i2 = t3;
      r2 === null && (r2 = e18), w2 = Ge2[i2(859)](r2), w2.init(n3), O2.push(w2), r2[i2(1092)](function(e19) {
        e19.isLight && e19.layers.test(n3.layers) && (w2.pushLight(e19), e19.castShadow && w2.pushShadow(e19));
      }), e18 !== r2 && e18[i2(1092)](function(e19) {
        let t4 = i2;
        e19.isLight && e19.layers[t4(1327)](n3.layers) && (w2[t4(385)](e19), e19.castShadow && w2.pushShadow(e19));
      }), w2.setupLights();
      let a3 = /* @__PURE__ */ new Set();
      return e18.traverse(function(e19) {
        if (!(e19[i2(1111)] || e19.isPoints || e19.isLine || e19.isSprite)) return;
        let t4 = e19.material;
        if (t4) if (Array.isArray(t4)) for (let n4 = 0; n4 < t4.length; n4++) {
          let i3 = t4[n4];
          dt2(i3, r2, e19), a3.add(i3);
        }
        else dt2(t4, r2, e19), a3.add(t4);
      }), w2 = O2.pop(), a3;
    }, this[t3(1340)] = function(e18, t4, n3 = null) {
      let r2 = this.compile(e18, t4, n3);
      return new Promise((t5) => {
        function n4() {
          let i2 = $;
          if (r2.forEach(function(e19) {
            L2[$(859)](e19).currentProgram.isReady() && r2.delete(e19);
          }), r2[i2(803)] === 0) {
            t5(e18);
            return;
          }
          setTimeout(n4, 10);
        }
        Fe2.get(`KHR_parallel_shader_compile`) === null ? setTimeout(n4, 10) : n4();
      });
    };
    let ft2 = null;
    function pt2(e18) {
      ft2 && ft2(e18);
    }
    function ht2() {
      vt2.stop();
    }
    function gt2() {
      vt2.start();
    }
    let vt2 = new cc();
    vt2.setAnimationLoop(pt2), typeof self < `u` && vt2.setContext(self), this.setAnimationLoop = function(e18) {
      ft2 = e18, nt2.setAnimationLoop(e18), e18 === null ? vt2.stop() : vt2.start();
    }, nt2.addEventListener(`sessionstart`, ht2), nt2.addEventListener(`sessionend`, gt2), this.render = function(e18, n3) {
      let r2 = t3;
      if (n3 !== void 0 && n3.isCamera !== true) {
        B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);
        return;
      }
      if (ie2 === true) return;
      ae2 !== null && ae2.renderStart(e18, n3);
      let i2 = nt2.enabled === true && nt2.isPresenting === true, a3 = A2 !== null && (N2 === null || i2) && A2.begin(j2, N2);
      if (e18.matrixWorldAutoUpdate === true && e18[r2(659)](), n3.parent === null && n3.matrixWorldAutoUpdate === true && n3[r2(659)](), nt2[r2(359)] === true && nt2[r2(188)] === true && (A2 === null || A2[r2(1057)]() === false) && (nt2[r2(1291)] === true && nt2.updateCamera(n3), n3 = nt2[r2(694)]()), e18.isScene === true && e18.onBeforeRender(j2, e18, n3, N2), w2 = Ge2.get(e18, O2.length), w2.init(n3), w2[r2(1182)].textureUnits = R2[r2(1038)](), O2[r2(1184)](w2), Oe2.multiplyMatrices(n3.projectionMatrix, n3.matrixWorldInverse), Te2.setFromProjectionMatrix(Oe2, ut, n3.reversedDepth), De2 = this.localClippingEnabled, Ee2 = Ke2.init(this.clippingPlanes, De2), C2 = We2.get(e18, D2[r2(660)]), C2[r2(1078)](), D2[r2(1184)](C2), nt2.enabled === true && nt2.isPresenting === true) {
        let e19 = j2.xr.getDepthSensingMesh();
        e19 !== null && yt2(e19, n3, -1 / 0, j2.sortObjects);
      }
      yt2(e18, n3, 0, j2.sortObjects), C2.finish(), j2[r2(1108)] === true && C2.sort(be2, xe2), Me2 = nt2.enabled === false || nt2.isPresenting === false || nt2.hasDepthSensing() === false, Me2 && Je2[r2(603)](C2, e18), this.info.render.frame++, Ee2 === true && Ke2[r2(1249)]();
      let o3 = w2[r2(1182)].shadowsArray;
      if (qe2[r2(581)](o3, e18, n3), Ee2 === true && Ke2.endShadows(), this.info.autoReset === true && this[r2(1196)].reset(), (a3 && A2.hasRenderPass()) === false) {
        let t4 = C2.opaque, i3 = C2.transmissive;
        if (w2.setupLights(), n3[r2(1165)]) {
          let a4 = n3.cameras;
          if (i3[r2(660)] > 0) for (let n4 = 0, r3 = a4.length; n4 < r3; n4++) {
            let r4 = a4[n4];
            St2(t4, i3, e18, r4);
          }
          Me2 && Je2.render(e18);
          for (let t5 = 0, n4 = a4.length; t5 < n4; t5++) {
            let n5 = a4[t5];
            xt2(C2, e18, n5, n5.viewport);
          }
        } else i3.length > 0 && St2(t4, i3, e18, n3), Me2 && Je2.render(e18), xt2(C2, e18, n3);
      }
      N2 !== null && se2 === 0 && (R2.updateMultisampleRenderTarget(N2), R2.updateRenderTargetMipmap(N2)), a3 && A2.end(j2), e18.isScene === true && e18.onAfterRender(j2, e18, n3), $e2.resetDefaultState(), ce2 = -1, le2 = null, O2[r2(1087)](), O2[r2(660)] > 0 ? (w2 = O2[O2[r2(660)] - 1], R2.setTextureUnits(w2[r2(1182)].textureUnits), Ee2 === true && Ke2.setGlobalState(j2.clippingPlanes, w2.state.camera)) : w2 = null, D2.pop(), C2 = D2.length > 0 ? D2[D2.length - 1] : null, ae2 !== null && ae2.renderEnd();
    };
    function yt2(e18, n3, r2, i2) {
      let a3 = t3;
      if (e18.visible === false) return;
      if (e18.layers.test(n3.layers)) {
        if (e18.isGroup) r2 = e18.renderOrder;
        else if (e18.isLOD) e18.autoUpdate === true && e18.update(n3);
        else if (e18[a3(1103)]) w2.pushLightProbeGrid(e18);
        else if (e18.isLight) w2.pushLight(e18), e18.castShadow && w2.pushShadow(e18);
        else if (e18[a3(1409)]) {
          if (!e18[a3(831)] || Te2.intersectsSprite(e18)) {
            i2 && Ae2.setFromMatrixPosition(e18.matrixWorld).applyMatrix4(Oe2);
            let t4 = Ve2[a3(997)](e18), n4 = e18.material;
            n4.visible && C2.push(e18, t4, n4, r2, Ae2.z, null);
          }
        } else if ((e18[a3(1111)] || e18[a3(746)] || e18.isPoints) && (!e18.frustumCulled || Te2.intersectsObject(e18))) {
          let t4 = Ve2.update(e18), n4 = e18.material;
          if (i2 && (e18.boundingSphere === void 0 ? (t4.boundingSphere === null && t4.computeBoundingSphere(), Ae2.copy(t4[a3(741)].center)) : (e18.boundingSphere === null && e18.computeBoundingSphere(), Ae2.copy(e18.boundingSphere.center)), Ae2[a3(874)](e18.matrixWorld)[a3(874)](Oe2)), Array.isArray(n4)) {
            let i3 = t4.groups;
            for (let o4 = 0, s3 = i3[a3(660)]; o4 < s3; o4++) {
              let a4 = i3[o4], s4 = n4[a4.materialIndex];
              s4 && s4.visible && C2.push(e18, t4, s4, r2, Ae2.z, a4);
            }
          } else n4.visible && C2.push(e18, t4, n4, r2, Ae2.z, null);
        }
      }
      let o3 = e18.children;
      for (let e19 = 0, t4 = o3.length; e19 < t4; e19++) yt2(o3[e19], n3, r2, i2);
    }
    function xt2(e18, n3, r2, i2) {
      let a3 = t3, { opaque: o3, transmissive: s3, transparent: c3 } = e18;
      w2.setupLightsView(r2), Ee2 === true && Ke2.setGlobalState(j2.clippingPlanes, r2), i2 && I2.viewport(ue2.copy(i2)), o3.length > 0 && Ct2(o3, n3, r2), s3.length > 0 && Ct2(s3, n3, r2), c3.length > 0 && Ct2(c3, n3, r2), I2.buffers.depth[a3(776)](true), I2.buffers.depth.setMask(true), I2.buffers.color.setMask(true), I2[a3(319)](false);
    }
    function St2(e18, n3, r2, i2) {
      let a3 = t3;
      if ((r2.isScene === true ? r2.overrideMaterial : null) !== null) return;
      if (w2.state.transmissionRenderTarget[i2.id] === void 0) {
        let e19 = Fe2.has(`EXT_color_buffer_half_float`) || Fe2.has(`EXT_color_buffer_float`);
        w2.state.transmissionRenderTarget[i2.id] = new pn(1, 1, { generateMipmaps: true, type: e19 ? te : E, minFilter: T, samples: Math.max(4, Ie2[a3(1026)]), stencilBuffer: s2, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: K.workingColorSpace });
      }
      let o3 = w2[a3(1182)][a3(489)][i2.id], c3 = i2[a3(436)] || ue2;
      o3.setSize(c3.z * j2.transmissionResolutionScale, c3.w * j2.transmissionResolutionScale);
      let l3 = j2.getRenderTarget(), u3 = j2.getActiveCubeFace(), d3 = j2[a3(409)]();
      j2[a3(689)](o3), j2.getClearColor(he2), ge2 = j2.getClearAlpha(), ge2 < 1 && j2.setClearColor(16777215, 0.5), j2.clear(), Me2 && Je2.render(r2);
      let f3 = j2[a3(876)];
      j2.toneMapping = 0;
      let p3 = i2.viewport;
      if (i2.viewport !== void 0 && (i2.viewport = void 0), w2[a3(394)](i2), Ee2 === true && Ke2.setGlobalState(j2.clippingPlanes, i2), Ct2(e18, r2, i2), R2[a3(882)](o3), R2.updateRenderTargetMipmap(o3), Fe2.has(`WEBGL_multisampled_render_to_texture`) === false) {
        let e19 = false;
        for (let t4 = 0, o4 = n3[a3(660)]; t4 < o4; t4++) {
          let { object: o5, geometry: s3, material: c4, group: l4 } = n3[t4];
          if (c4.side === 2 && o5.layers.test(i2.layers)) {
            let t5 = c4[a3(1319)];
            c4.side = 1, c4[a3(318)] = true, wt2(o5, r2, i2, s3, c4, l4), c4[a3(1319)] = t5, c4[a3(318)] = true, e19 = true;
          }
        }
        e19 === true && (R2.updateMultisampleRenderTarget(o3), R2[a3(745)](o3));
      }
      j2.setRenderTarget(l3, u3, d3), j2.setClearColor(he2, ge2), p3 !== void 0 && (i2.viewport = p3), j2.toneMapping = f3;
    }
    function Ct2(e18, n3, r2) {
      let i2 = t3, a3 = n3.isScene === true ? n3[i2(492)] : null;
      for (let t4 = 0, o3 = e18[i2(660)]; t4 < o3; t4++) {
        let o4 = e18[t4], { object: s3, geometry: c3, group: l3 } = o4, u3 = o4.material;
        u3.allowOverride === true && a3 !== null && (u3 = a3), s3[i2(464)].test(r2.layers) && wt2(s3, n3, r2, c3, u3, l3);
      }
    }
    function wt2(e18, t4, n3, r2, i2, a3) {
      e18.onBeforeRender(j2, t4, n3, r2, i2, a3), e18.modelViewMatrix.multiplyMatrices(n3.matrixWorldInverse, e18.matrixWorld), e18.normalMatrix.getNormalMatrix(e18.modelViewMatrix), i2.onBeforeRender(j2, t4, n3, r2, e18, a3), i2.transparent === true && i2.side === 2 && i2.forceSinglePass === false ? (i2.side = 1, i2.needsUpdate = true, j2.renderBufferDirect(n3, t4, r2, i2, e18, a3), i2.side = 0, i2.needsUpdate = true, j2.renderBufferDirect(n3, t4, r2, i2, e18, a3), i2.side = 2) : j2.renderBufferDirect(n3, t4, r2, i2, e18, a3), e18.onAfterRender(j2, t4, n3, r2, i2, a3);
    }
    function Tt2(e18, n3, r2) {
      let i2 = t3;
      n3.isScene !== true && (n3 = je2);
      let a3 = L2.get(e18), o3 = w2.state.lights, s3 = w2[i2(1182)].shadowsArray, c3 = o3.state.version, l3 = He2.getParameters(e18, o3.state, s3, n3, r2, w2[i2(1182)].lightProbeGridArray), u3 = He2.getProgramCacheKey(l3), d3 = a3.programs;
      a3.environment = e18.isMeshStandardMaterial || e18.isMeshLambertMaterial || e18.isMeshPhongMaterial ? n3.environment : null, a3[i2(240)] = n3.fog;
      let f3 = e18.isMeshStandardMaterial || e18.isMeshLambertMaterial && !e18.envMap || e18.isMeshPhongMaterial && !e18[i2(195)];
      a3.envMap = Re2.get(e18.envMap || a3.environment, f3), a3.envMapRotation = a3.environment !== null && e18.envMap === null ? n3.environmentRotation : e18.envMapRotation, d3 === void 0 && (e18[i2(322)](`dispose`, st2), d3 = /* @__PURE__ */ new Map(), a3.programs = d3);
      let p3 = d3.get(u3);
      if (p3 !== void 0) {
        if (a3.currentProgram === p3 && a3.lightsStateVersion === c3) return Dt2(e18, l3), p3;
      } else l3.uniforms = He2.getUniforms(e18), ae2 !== null && e18[i2(300)] && ae2.build(e18, r2, l3), e18.onBeforeCompile(l3, j2), p3 = He2.acquireProgram(l3, u3), d3.set(u3, p3), a3.uniforms = l3.uniforms;
      let m3 = a3.uniforms;
      return (!e18[i2(1042)] && !e18[i2(1256)] || e18.clipping === true) && (m3.clippingPlanes = Ke2.uniform), Dt2(e18, l3), a3[i2(788)] = At2(e18), a3[i2(1481)] = c3, a3.needsLights && (m3.ambientLightColor.value = o3.state[i2(1367)], m3.lightProbe.value = o3.state.probe, m3.directionalLights.value = o3.state.directional, m3.directionalLightShadows.value = o3.state.directionalShadow, m3.spotLights.value = o3.state.spot, m3[i2(412)].value = o3.state.spotShadow, m3[i2(812)].value = o3.state[i2(650)], m3.ltc_1.value = o3.state[i2(1362)], m3.ltc_2[i2(895)] = o3.state.rectAreaLTC2, m3.pointLights.value = o3.state.point, m3.pointLightShadows[i2(895)] = o3.state[i2(205)], m3.hemisphereLights.value = o3.state[i2(1163)], m3.directionalShadowMatrix.value = o3.state.directionalShadowMatrix, m3[i2(1148)].value = o3.state.spotLightMatrix, m3[i2(853)].value = o3.state.spotLightMap, m3.pointShadowMatrix.value = o3[i2(1182)].pointShadowMatrix), a3.lightProbeGrid = w2.state.lightProbeGridArray.length > 0, a3.currentProgram = p3, a3.uniformsList = null, p3;
    }
    function Et2(e18) {
      let n3 = t3;
      if (e18.uniformsList === null) {
        let t4 = e18.currentProgram.getUniforms();
        e18.uniformsList = nu.seqWithValue(t4[n3(623)], e18.uniforms);
      }
      return e18.uniformsList;
    }
    function Dt2(e18, n3) {
      let r2 = t3, i2 = L2[r2(859)](e18);
      i2.outputColorSpace = n3[r2(1355)], i2.batching = n3.batching, i2.batchingColor = n3.batchingColor, i2.instancing = n3[r2(345)], i2.instancingColor = n3.instancingColor, i2.instancingMorph = n3.instancingMorph, i2.skinning = n3.skinning, i2.morphTargets = n3.morphTargets, i2.morphNormals = n3.morphNormals, i2.morphColors = n3.morphColors, i2[r2(1195)] = n3[r2(1195)], i2.numClippingPlanes = n3.numClippingPlanes, i2.numIntersection = n3[r2(640)], i2.vertexAlphas = n3.vertexAlphas, i2.vertexTangents = n3.vertexTangents, i2[r2(876)] = n3.toneMapping;
    }
    function V2(e18, n3) {
      let r2 = t3;
      if (e18.length === 0) return null;
      if (e18.length === 1) return e18[0].texture === null ? null : e18[0];
      S2[r2(1328)](n3.matrixWorld);
      for (let t4 = 0, n4 = e18.length; t4 < n4; t4++) {
        let n5 = e18[t4];
        if (n5.texture !== null && n5.boundingBox.containsPoint(S2)) return n5;
      }
      return null;
    }
    function Ot2(e18, n3, r2, i2, a3) {
      let o3 = t3;
      n3[o3(1053)] !== true && (n3 = je2), R2[o3(607)]();
      let s3 = n3[o3(240)], c3 = i2.isMeshStandardMaterial || i2[o3(260)] || i2.isMeshPhongMaterial ? n3.environment : null, l3 = N2 === null ? j2.outputColorSpace : N2.isXRRenderTarget === true ? N2.texture.colorSpace : K.workingColorSpace, u3 = i2.isMeshStandardMaterial || i2.isMeshLambertMaterial && !i2.envMap || i2.isMeshPhongMaterial && !i2.envMap, d3 = Re2[o3(859)](i2.envMap || c3, u3), f3 = i2.vertexColors === true && !!r2.attributes[o3(1119)] && r2.attributes[o3(1119)].itemSize === 4, p3 = !!r2[o3(1106)].tangent && (!!i2[o3(1083)] || i2[o3(1091)] > 0), m3 = !!r2.morphAttributes.position, h3 = !!r2.morphAttributes.normal, g3 = !!r2.morphAttributes[o3(1119)], _3 = 0;
      i2.toneMapped && (N2 === null || N2.isXRRenderTarget === true) && (_3 = j2.toneMapping);
      let v3 = r2.morphAttributes.position || r2.morphAttributes.normal || r2[o3(1175)].color, y3 = v3 === void 0 ? 0 : v3.length, b3 = L2.get(i2), x3 = w2.state.lights;
      if (Ee2 === true && (De2 === true || e18 !== le2)) {
        let t4 = e18 === le2 && i2.id === ce2;
        Ke2.setState(i2, e18, t4);
      }
      let S3 = false;
      i2.version === b3.__version ? b3.needsLights && b3.lightsStateVersion !== x3.state.version ? S3 = true : b3.outputColorSpace === l3 ? a3[o3(1406)] && b3.batching === false || !a3.isBatchedMesh && b3.batching === true || a3.isBatchedMesh && b3.batchingColor === true && a3.colorTexture === null || a3.isBatchedMesh && b3.batchingColor === false && a3[o3(742)] !== null || a3.isInstancedMesh && b3.instancing === false || !a3[o3(1360)] && b3.instancing === true || a3.isSkinnedMesh && b3.skinning === false || !a3[o3(328)] && b3.skinning === true || a3.isInstancedMesh && b3.instancingColor === true && a3.instanceColor === null || a3.isInstancedMesh && b3.instancingColor === false && a3.instanceColor !== null || a3.isInstancedMesh && b3[o3(1140)] === true && a3.morphTexture === null || a3.isInstancedMesh && b3[o3(1140)] === false && a3.morphTexture !== null ? S3 = true : b3.envMap === d3 ? i2[o3(240)] === true && b3.fog !== s3 || b3.numClippingPlanes !== void 0 && (b3[o3(279)] !== Ke2[o3(614)] || b3.numIntersection !== Ke2.numIntersection) ? S3 = true : b3[o3(437)] === f3 && b3.vertexTangents === p3 && b3.morphTargets === m3 && b3.morphNormals === h3 && b3.morphColors === g3 && b3[o3(876)] === _3 && b3.morphTargetsCount === y3 ? !!b3[o3(1459)] != w2.state[o3(643)].length > 0 && (S3 = true) : S3 = true : S3 = true : S3 = true : (S3 = true, b3.__version = i2.version);
      let C3 = b3.currentProgram;
      S3 === true && (C3 = Tt2(i2, n3, a3), ae2 && i2.isNodeMaterial && ae2[o3(270)](i2, C3, b3));
      let T2 = false, E2 = false, D3 = false, O3 = C3.getUniforms(), k2 = b3[o3(606)];
      if (I2.useProgram(C3.program) && (T2 = true, E2 = true, D3 = true), i2.id !== ce2 && (ce2 = i2.id, E2 = true), b3[o3(788)]) {
        let e19 = V2(w2[o3(1182)].lightProbeGridArray, a3);
        b3.lightProbeGrid !== e19 && (b3[o3(1459)] = e19, E2 = true);
      }
      if (T2 || le2 !== e18) {
        I2.buffers.depth.getReversed() && e18.reversedDepth !== true && (e18._reversedDepth = true, e18.updateProjectionMatrix()), O3.setValue(F2, o3(490), e18.projectionMatrix), O3.setValue(F2, `viewMatrix`, e18[o3(510)]);
        let t4 = O3.map.cameraPosition;
        t4 !== void 0 && t4.setValue(F2, ke2.setFromMatrixPosition(e18.matrixWorld)), Ie2[o3(1523)] && O3[o3(428)](F2, `logDepthBufFC`, 2 / (Math.log(e18.far + 1) / Math.LN2)), (i2.isMeshPhongMaterial || i2.isMeshToonMaterial || i2.isMeshLambertMaterial || i2.isMeshBasicMaterial || i2.isMeshStandardMaterial || i2.isShaderMaterial) && O3[o3(428)](F2, `isOrthographic`, e18.isOrthographicCamera === true), le2 !== e18 && (le2 = e18, E2 = true, D3 = true);
      }
      if (b3.needsLights && (x3.state.directionalShadowMap.length > 0 && O3.setValue(F2, `directionalShadowMap`, x3.state.directionalShadowMap, R2), x3.state.spotShadowMap.length > 0 && O3[o3(428)](F2, `spotShadowMap`, x3.state.spotShadowMap, R2), x3[o3(1182)].pointShadowMap[o3(660)] > 0 && O3.setValue(F2, `pointShadowMap`, x3.state[o3(470)], R2)), a3.isSkinnedMesh) {
        O3.setOptional(F2, a3, `bindMatrix`), O3[o3(576)](F2, a3, `bindMatrixInverse`);
        let e19 = a3.skeleton;
        e19 && (e19.boneTexture === null && e19[o3(1085)](), O3.setValue(F2, `boneTexture`, e19[o3(652)], R2));
      }
      a3.isBatchedMesh && (O3[o3(576)](F2, a3, o3(1381)), O3[o3(428)](F2, o3(1381), a3[o3(917)], R2), O3.setOptional(F2, a3, `batchingIdTexture`), O3[o3(428)](F2, `batchingIdTexture`, a3._indirectTexture, R2), O3.setOptional(F2, a3, o3(730)), a3._colorsTexture !== null && O3[o3(428)](F2, `batchingColorTexture`, a3[o3(1100)], R2));
      let A3 = r2[o3(1175)];
      if ((A3.position !== void 0 || A3[o3(564)] !== void 0 || A3.color !== void 0) && Ye2.update(a3, r2, C3), (E2 || b3.receiveShadow !== a3.receiveShadow) && (b3.receiveShadow = a3.receiveShadow, O3.setValue(F2, `receiveShadow`, a3.receiveShadow)), (i2.isMeshStandardMaterial || i2.isMeshLambertMaterial || i2.isMeshPhongMaterial) && i2.envMap === null && n3.environment !== null && (k2.envMapIntensity.value = n3[o3(512)]), k2[o3(798)] !== void 0 && (k2.dfgLUT.value = Cd()), E2) {
        if (O3[o3(428)](F2, `toneMappingExposure`, j2.toneMappingExposure), b3.needsLights && kt2(k2, D3), s3 && i2[o3(240)] === true && Ue2[o3(1280)](k2, s3), Ue2[o3(1095)](k2, i2, ye2, ve2, w2.state.transmissionRenderTarget[e18.id]), b3.needsLights && b3.lightProbeGrid) {
          let e19 = b3[o3(1459)];
          k2.probesSH.value = e19.texture, k2.probesMin.value[o3(1250)](e19.boundingBox.min), k2.probesMax.value[o3(1250)](e19.boundingBox[o3(1023)]), k2[o3(671)].value.copy(e19.resolution);
        }
        nu.upload(F2, Et2(b3), k2, R2);
      }
      if (i2[o3(1042)] && i2.uniformsNeedUpdate === true && (nu.upload(F2, Et2(b3), k2, R2), i2.uniformsNeedUpdate = false), i2.isSpriteMaterial && O3.setValue(F2, `center`, a3.center), O3.setValue(F2, `modelViewMatrix`, a3.modelViewMatrix), O3.setValue(F2, `normalMatrix`, a3.normalMatrix), O3.setValue(F2, o3(1094), a3.matrixWorld), i2.uniformsGroups !== void 0) {
        let e19 = i2.uniformsGroups;
        for (let t4 = 0, n4 = e19.length; t4 < n4; t4++) {
          let n5 = e19[t4];
          et2.update(n5, C3), et2.bind(n5, C3);
        }
      }
      return C3;
    }
    function kt2(e18, n3) {
      let r2 = t3;
      e18.ambientLightColor.needsUpdate = n3, e18.lightProbe.needsUpdate = n3, e18.directionalLights.needsUpdate = n3, e18.directionalLightShadows.needsUpdate = n3, e18.pointLights[r2(318)] = n3, e18.pointLightShadows.needsUpdate = n3, e18[r2(968)].needsUpdate = n3, e18.spotLightShadows.needsUpdate = n3, e18.rectAreaLights.needsUpdate = n3, e18.hemisphereLights[r2(318)] = n3;
    }
    function At2(e18) {
      let n3 = t3;
      return e18.isMeshLambertMaterial || e18.isMeshToonMaterial || e18.isMeshPhongMaterial || e18[n3(1452)] || e18.isShadowMaterial || e18.isShaderMaterial && e18.lights === true;
    }
    this.getActiveCubeFace = function() {
      return oe2;
    }, this.getActiveMipmapLevel = function() {
      return se2;
    }, this.getRenderTarget = function() {
      return N2;
    }, this.setRenderTargetTextures = function(e18, n3, r2) {
      let i2 = t3, a3 = L2.get(e18);
      a3.__autoAllocateDepthBuffer = e18.resolveDepthBuffer === false, a3.__autoAllocateDepthBuffer === false && (a3.__useRenderToTexture = false), L2.get(e18.texture)[i2(1056)] = n3, L2.get(e18.depthTexture).__webglTexture = a3.__autoAllocateDepthBuffer ? void 0 : r2, a3.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(e18, n3) {
      let r2 = t3, i2 = L2.get(e18);
      i2[r2(748)] = n3, i2.__useDefaultFramebuffer = n3 === void 0;
    };
    let jt2 = F2.createFramebuffer();
    this.setRenderTarget = function(e18, n3 = 0, r2 = 0) {
      let i2 = t3;
      N2 = e18, oe2 = n3, se2 = r2;
      let a3 = null, o3 = false, s3 = false;
      if (e18) {
        let t4 = L2.get(e18);
        if (t4.__useDefaultFramebuffer !== void 0) {
          I2.bindFramebuffer(F2.FRAMEBUFFER, t4.__webglFramebuffer), ue2[i2(1250)](e18.viewport), P2.copy(e18.scissor), me2 = e18.scissorTest, I2.viewport(ue2), I2.scissor(P2), I2.setScissorTest(me2), ce2 = -1;
          return;
        } else if (t4[i2(748)] === void 0) R2.setupRenderTarget(e18);
        else if (t4.__hasExternalTextures) R2.rebindTextures(e18, L2.get(e18.texture).__webglTexture, L2.get(e18.depthTexture).__webglTexture);
        else if (e18.depthBuffer) {
          let n4 = e18.depthTexture;
          if (t4.__boundDepthTexture !== n4) {
            if (n4 !== null && L2.has(n4) && (e18.width !== n4[i2(495)].width || e18[i2(221)] !== n4.image.height)) throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);
            R2.setupDepthRenderbuffer(e18);
          }
        }
        let c3 = e18.texture;
        (c3.isData3DTexture || c3[i2(1194)] || c3.isCompressedArrayTexture) && (s3 = true);
        let l3 = L2[i2(859)](e18)[i2(748)];
        e18.isWebGLCubeRenderTarget ? (a3 = Array[i2(1277)](l3[n3]) ? l3[n3][r2] : l3[n3], o3 = true) : a3 = e18.samples > 0 && R2.useMultisampledRTT(e18) === false ? L2.get(e18).__webglMultisampledFramebuffer : Array.isArray(l3) ? l3[r2] : l3, ue2.copy(e18.viewport), P2.copy(e18.scissor), me2 = e18[i2(597)];
      } else ue2.copy(Se2).multiplyScalar(ye2).floor(), P2.copy(Ce2)[i2(1072)](ye2).floor(), me2 = we2;
      if (r2 !== 0 && (a3 = jt2), I2.bindFramebuffer(F2.FRAMEBUFFER, a3) && I2.drawBuffers(e18, a3), I2.viewport(ue2), I2[i2(446)](P2), I2.setScissorTest(me2), o3) {
        let t4 = L2[i2(859)](e18.texture);
        F2.framebufferTexture2D(F2.FRAMEBUFFER, F2.COLOR_ATTACHMENT0, F2.TEXTURE_CUBE_MAP_POSITIVE_X + n3, t4.__webglTexture, r2);
      } else if (s3) {
        let t4 = n3;
        for (let n4 = 0; n4 < e18.textures.length; n4++) {
          let a4 = L2.get(e18.textures[n4]);
          F2.framebufferTextureLayer(F2.FRAMEBUFFER, F2[i2(1401)] + n4, a4.__webglTexture, r2, t4);
        }
      } else if (e18 !== null && r2 !== 0) {
        let t4 = L2.get(e18.texture);
        F2.framebufferTexture2D(F2.FRAMEBUFFER, F2.COLOR_ATTACHMENT0, F2.TEXTURE_2D, t4.__webglTexture, r2);
      }
      ce2 = -1;
    }, this.readRenderTargetPixels = function(e18, n3, r2, i2, a3, o3, s3, c3 = 0) {
      let l3 = t3;
      if (!(e18 && e18.isWebGLRenderTarget)) {
        B(l3(1203));
        return;
      }
      let u3 = L2.get(e18).__webglFramebuffer;
      if (e18.isWebGLCubeRenderTarget && s3 !== void 0 && (u3 = u3[s3]), u3) {
        I2.bindFramebuffer(F2.FRAMEBUFFER, u3);
        try {
          let t4 = e18.textures[c3], s4 = t4.format, l4 = t4.type;
          if (e18.textures.length > 1 && F2.readBuffer(F2.COLOR_ATTACHMENT0 + c3), !Ie2.textureFormatReadable(s4)) {
            B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);
            return;
          }
          if (!Ie2.textureTypeReadable(l4)) {
            B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);
            return;
          }
          n3 >= 0 && n3 <= e18.width - i2 && r2 >= 0 && r2 <= e18.height - a3 && F2.readPixels(n3, r2, i2, a3, Qe2.convert(s4), Qe2.convert(l4), o3);
        } finally {
          let e19 = N2 === null ? null : L2.get(N2).__webglFramebuffer;
          I2.bindFramebuffer(F2[l3(1506)], e19);
        }
      }
    }, this.readRenderTargetPixelsAsync = (function() {
      var e18 = r(function* (e19, t4, n3, r2, i2, a3, o3, s3 = 0) {
        let c3 = $;
        if (!(e19 && e19.isWebGLRenderTarget)) throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);
        let l3 = L2.get(e19).__webglFramebuffer;
        if (e19.isWebGLCubeRenderTarget && o3 !== void 0 && (l3 = l3[o3]), l3) if (t4 >= 0 && t4 <= e19.width - r2 && n3 >= 0 && n3 <= e19.height - i2) {
          I2.bindFramebuffer(F2.FRAMEBUFFER, l3);
          let o4 = e19.textures[s3], u3 = o4.format, d3 = o4.type;
          if (e19[c3(1324)].length > 1 && F2.readBuffer(F2.COLOR_ATTACHMENT0 + s3), !Ie2.textureFormatReadable(u3)) throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);
          if (!Ie2[c3(568)](d3)) throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);
          let f3 = F2.createBuffer();
          F2.bindBuffer(F2.PIXEL_PACK_BUFFER, f3), F2.bufferData(F2[c3(1049)], a3.byteLength, F2.STREAM_READ), F2.readPixels(t4, n3, r2, i2, Qe2.convert(u3), Qe2.convert(d3), 0);
          let p3 = N2 === null ? null : L2.get(N2).__webglFramebuffer;
          I2.bindFramebuffer(F2[c3(1506)], p3);
          let m3 = F2.fenceSync(F2.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return F2.flush(), yield bt(F2, m3, 4), F2.bindBuffer(F2.PIXEL_PACK_BUFFER, f3), F2.getBufferSubData(F2.PIXEL_PACK_BUFFER, 0, a3), F2.deleteBuffer(f3), F2.deleteSync(m3), a3;
        } else throw Error(c3(1365));
      });
      return function(t4, n3, r2, i2, a3, o3, s3) {
        return e18.apply(this, arguments);
      };
    })(), this.copyFramebufferToTexture = function(e18, t4 = null, n3 = 0) {
      let r2 = 2 ** -n3, i2 = Math.floor(e18.image.width * r2), a3 = Math.floor(e18.image.height * r2), o3 = t4 === null ? 0 : t4.x, s3 = t4 === null ? 0 : t4.y;
      R2.setTexture2D(e18, 0), F2.copyTexSubImage2D(F2.TEXTURE_2D, n3, 0, 0, o3, s3, i2, a3), I2.unbindTexture();
    };
    let Mt2 = F2.createFramebuffer(), Nt2 = F2[t3(991)]();
    this.copyTextureToTexture = function(e18, n3, r2 = null, i2 = null, a3 = 0, o3 = 0) {
      let s3 = t3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3 = e18.isCompressedTexture ? e18.mipmaps[o3] : e18[s3(495)];
      if (r2 !== null) c3 = r2.max.x - r2.min.x, l3 = r2[s3(1023)].y - r2.min.y, u3 = r2.isBox3 ? r2[s3(1023)].z - r2.min.z : 1, d3 = r2.min.x, f3 = r2.min.y, p3 = r2.isBox3 ? r2.min.z : 0;
      else {
        let t4 = 2 ** -a3;
        c3 = Math.floor(_3.width * t4), l3 = Math.floor(_3.height * t4), u3 = e18[s3(1194)] ? _3[s3(379)] : e18.isData3DTexture ? Math[s3(425)](_3.depth * t4) : 1, d3 = 0, f3 = 0, p3 = 0;
      }
      i2 === null ? (m3 = 0, h3 = 0, g3 = 0) : (m3 = i2.x, h3 = i2.y, g3 = i2.z);
      let v3 = Qe2.convert(n3[s3(253)]), y3 = Qe2.convert(n3.type), b3;
      n3.isData3DTexture ? (R2.setTexture3D(n3, 0), b3 = F2.TEXTURE_3D) : n3.isDataArrayTexture || n3[s3(315)] ? (R2.setTexture2DArray(n3, 0), b3 = F2.TEXTURE_2D_ARRAY) : (R2.setTexture2D(n3, 0), b3 = F2.TEXTURE_2D), I2.activeTexture(F2.TEXTURE0), I2[s3(483)](F2.UNPACK_FLIP_Y_WEBGL, n3[s3(165)]), I2.pixelStorei(F2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n3[s3(714)]), I2.pixelStorei(F2.UNPACK_ALIGNMENT, n3.unpackAlignment);
      let x3 = I2.getParameter(F2.UNPACK_ROW_LENGTH), S3 = I2.getParameter(F2[s3(975)]), C3 = I2.getParameter(F2.UNPACK_SKIP_PIXELS), w3 = I2.getParameter(F2.UNPACK_SKIP_ROWS), T2 = I2.getParameter(F2[s3(700)]);
      I2[s3(483)](F2.UNPACK_ROW_LENGTH, _3.width), I2.pixelStorei(F2.UNPACK_IMAGE_HEIGHT, _3.height), I2.pixelStorei(F2.UNPACK_SKIP_PIXELS, d3), I2.pixelStorei(F2.UNPACK_SKIP_ROWS, f3), I2.pixelStorei(F2.UNPACK_SKIP_IMAGES, p3);
      let E2 = e18.isDataArrayTexture || e18.isData3DTexture, D3 = n3.isDataArrayTexture || n3.isData3DTexture;
      if (e18.isDepthTexture) {
        let t4 = L2[s3(859)](e18), r3 = L2[s3(859)](n3), i3 = L2.get(t4.__renderTarget), _4 = L2.get(r3.__renderTarget);
        I2.bindFramebuffer(F2.READ_FRAMEBUFFER, i3.__webglFramebuffer), I2.bindFramebuffer(F2.DRAW_FRAMEBUFFER, _4[s3(748)]);
        for (let t5 = 0; t5 < u3; t5++) E2 && (F2.framebufferTextureLayer(F2.READ_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, L2.get(e18).__webglTexture, a3, p3 + t5), F2.framebufferTextureLayer(F2.DRAW_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, L2[s3(859)](n3).__webglTexture, o3, g3 + t5)), F2[s3(1298)](d3, f3, c3, l3, m3, h3, c3, l3, F2[s3(238)], F2[s3(728)]);
        I2.bindFramebuffer(F2.READ_FRAMEBUFFER, null), I2.bindFramebuffer(F2.DRAW_FRAMEBUFFER, null);
      } else if (a3 !== 0 || e18.isRenderTargetTexture || L2.has(e18)) {
        let t4 = L2[s3(859)](e18), r3 = L2.get(n3);
        I2.bindFramebuffer(F2.READ_FRAMEBUFFER, Mt2), I2.bindFramebuffer(F2[s3(191)], Nt2);
        for (let e19 = 0; e19 < u3; e19++) E2 ? F2.framebufferTextureLayer(F2.READ_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, t4.__webglTexture, a3, p3 + e19) : F2.framebufferTexture2D(F2.READ_FRAMEBUFFER, F2[s3(1401)], F2.TEXTURE_2D, t4.__webglTexture, a3), D3 ? F2.framebufferTextureLayer(F2.DRAW_FRAMEBUFFER, F2[s3(1401)], r3.__webglTexture, o3, g3 + e19) : F2.framebufferTexture2D(F2.DRAW_FRAMEBUFFER, F2.COLOR_ATTACHMENT0, F2.TEXTURE_2D, r3[s3(1056)], o3), a3 === 0 ? D3 ? F2.copyTexSubImage3D(b3, o3, m3, h3, g3 + e19, d3, f3, c3, l3) : F2.copyTexSubImage2D(b3, o3, m3, h3, d3, f3, c3, l3) : F2.blitFramebuffer(d3, f3, c3, l3, m3, h3, c3, l3, F2.COLOR_BUFFER_BIT, F2.NEAREST);
        I2[s3(478)](F2.READ_FRAMEBUFFER, null), I2.bindFramebuffer(F2[s3(191)], null);
      } else D3 ? e18.isDataTexture || e18.isData3DTexture ? F2[s3(766)](b3, o3, m3, h3, g3, c3, l3, u3, v3, y3, _3.data) : n3.isCompressedArrayTexture ? F2.compressedTexSubImage3D(b3, o3, m3, h3, g3, c3, l3, u3, v3, _3[s3(1304)]) : F2.texSubImage3D(b3, o3, m3, h3, g3, c3, l3, u3, v3, y3, _3) : e18[s3(1101)] ? F2.texSubImage2D(F2.TEXTURE_2D, o3, m3, h3, c3, l3, v3, y3, _3.data) : e18.isCompressedTexture ? F2[s3(993)](F2.TEXTURE_2D, o3, m3, h3, _3.width, _3.height, v3, _3.data) : F2.texSubImage2D(F2.TEXTURE_2D, o3, m3, h3, c3, l3, v3, y3, _3);
      I2.pixelStorei(F2[s3(1416)], x3), I2[s3(483)](F2.UNPACK_IMAGE_HEIGHT, S3), I2.pixelStorei(F2.UNPACK_SKIP_PIXELS, C3), I2.pixelStorei(F2.UNPACK_SKIP_ROWS, w3), I2.pixelStorei(F2.UNPACK_SKIP_IMAGES, T2), o3 === 0 && n3.generateMipmaps && F2.generateMipmap(b3), I2.unbindTexture();
    }, this.initRenderTarget = function(e18) {
      L2.get(e18).__webglFramebuffer === void 0 && R2.setupRenderTarget(e18);
    }, this.initTexture = function(e18) {
      let n3 = t3;
      e18.isCubeTexture ? R2[n3(231)](e18, 0) : e18[n3(833)] ? R2.setTexture3D(e18, 0) : e18.isDataArrayTexture || e18.isCompressedArrayTexture ? R2.setTexture2DArray(e18, 0) : R2.setTexture2D(e18, 0), I2.unbindTexture();
    }, this.resetState = function() {
      let e18 = t3;
      oe2 = 0, se2 = 0, N2 = null, I2[e18(340)](), $e2[e18(340)]();
    }, typeof __THREE_DEVTOOLS__ < `u` && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(t3(848), { detail: this }));
  }
  get coordinateSystem() {
    return ut;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e17) {
    let t3 = i;
    this._outputColorSpace = e17;
    let n2 = this[t3(872)]();
    n2[t3(173)] = K._getDrawingBufferColorSpace(e17), n2.unpackColorSpace = K._getUnpackColorSpace();
  }
};
export {
  os as $,
  Fi as A,
  rc as At,
  Ho as B,
  S as Bt,
  qt as C,
  Je as Ct,
  Po as D,
  ii as Dt,
  Pi as E,
  ac as Et,
  Eo as F,
  T as Ft,
  Zn as G,
  Gr as H,
  b as Ht,
  Es as I,
  Ta as It,
  Qs as J,
  Y as K,
  U as L,
  Tn as Lt,
  Ca as M,
  dn as Mt,
  Cs as N,
  dr as Nt,
  ki as O,
  it as Ot,
  Ea as P,
  y as Pt,
  oa as Q,
  Wo as R,
  To as Rt,
  qo as S,
  q as St,
  Ns as T,
  Jt as Tt,
  X as U,
  W as V,
  wd as Vt,
  Ze as W,
  Qo as X,
  Qi as Y,
  v as Z,
  Lr as _,
  h as _t,
  js as a,
  nc as at,
  K as b,
  ss as bt,
  wo as c,
  _a as ct,
  Do as d,
  at as dt,
  x as et,
  G as f,
  Mr as ft,
  Un as g,
  ua as gt,
  Ui as h,
  As as ht,
  jr as i,
  fr as it,
  C as j,
  da as jt,
  ks as k,
  co as kt,
  Os as l,
  _i as lt,
  Kr as m,
  Ar as mt,
  tc as n,
  ls as nt,
  w as o,
  po as ot,
  Ko as p,
  Ai as pt,
  Xr as q,
  ji as r,
  fa as rt,
  wa as s,
  _ as st,
  es as t,
  xs as tt,
  Da as u,
  ai as ut,
  J as v,
  ic as vt,
  Rs as w,
  Jr as wt,
  qi as x,
  m as xt,
  Ye as y,
  rs as yt,
  Hn as z,
  Ts as zt
};
