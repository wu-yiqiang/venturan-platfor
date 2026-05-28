import { g as e, h as t } from "./index-D-g3WoLo.js";
import { E as n, H as r, I as i, It as a, K as o, L as s, Lt as c, M as l, Mt as u, N as d, O as f, Ot as p, P as m, Pt as h, R as g, Rt as _, S as v, Tt as y, V as b, Z as x, g as S, ht as C, kt as w, l as T, lt as E, mt as D, ot as O, p as k, pt as A, s as j, st as M, t as ee, tt as N, v as P, yt as te, z as F, zt as I } from "./three.module-fqN0WVmI.js";
import { n as L } from "./fflate.module-DqHR0NvN.js";
var R = z;
(function(e2, t3) {
  let n2 = z, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(481)) / 1 * (parseInt(n2(380)) / 2) + -parseInt(n2(507)) / 3 * (-parseInt(n2(435)) / 4) + -parseInt(n2(464)) / 5 + -parseInt(n2(416)) / 6 + parseInt(n2(401)) / 7 + parseInt(n2(373)) / 8 * (parseInt(n2(459)) / 9) + -parseInt(n2(400)) / 10 === t3) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})($, 633798);
function z(e2, t3) {
  return e2 -= 328, $()[e2];
}
var B = /^def\s+(?:(\w+)\s+)?"?([^"]+)"?$/, V = /^string\s+(\w+)$/, H = /^(?:uniform\s+)?(\w+(?:\[\])?)\s+(.+)$/, U = class {
  parseText(e2) {
    let t3 = z;
    e2 = this._preprocess(e2);
    let n2 = {}, r2 = e2.split(`
`), i2 = null, a2 = n2, o2 = [n2];
    for (let e3 of r2) if (e3.includes(`=`)) {
      let n3 = this[t3(532)](e3);
      if (n3 === -1) {
        i2 = e3.trim();
        continue;
      }
      let r3 = e3.slice(0, n3).trim(), s2 = e3.slice(n3 + 1).trim();
      if (s2.endsWith(`{`)) {
        let e4 = {};
        o2[t3(460)](e4), a2[r3] = e4, a2 = e4;
      } else if (s2[t3(504)](`(`)) {
        let e4 = s2.slice(0, -1);
        a2[r3] = e4;
        let t4 = {};
        o2.push(t4), a2 = t4;
      } else a2[r3] = s2;
    } else if (e3.includes(`:`) && !e3.includes(`=`)) {
      let n3 = e3.indexOf(`:`), r3 = e3.slice(0, n3)[t3(544)](), i3 = e3.slice(n3 + 1)[t3(544)]();
      /^[\d.]+$/.test(r3) && (a2[r3] = i3);
    } else if (e3.endsWith(`{`)) {
      let e4 = a2[i2] || {};
      o2.push(e4), a2[i2] = e4, a2 = e4;
    } else if (e3.endsWith(`}`)) {
      if (o2.pop(), o2.length === 0) continue;
      a2 = o2[o2.length - 1];
    } else if (e3[t3(504)](`(`)) {
      let n3 = {};
      o2[t3(460)](n3), i2 = e3.split(`(`)[0].trim() || i2, a2[i2] = n3, a2 = n3;
    } else e3.endsWith(`)`) ? (o2.pop(), a2 = o2[o2.length - 1]) : e3.trim() && (i2 = e3.trim());
    return n2;
  }
  _preprocess(e2) {
    let t3 = z;
    e2 = this._stripBlockComments(e2), e2 = this._collapseTripleQuotedStrings(e2);
    let n2 = e2.split(`
`), r2 = [], i2 = false, a2 = 0, o2 = 0, s2 = ``;
    for (let e3 = 0; e3 < n2.length; e3++) {
      let c2 = n2[e3];
      c2 = this._stripInlineComment(c2);
      let l2 = c2.trim();
      if (i2) {
        s2 += ` ` + l2;
        for (let e4 of l2) e4 === `[` ? a2++ : e4 === `]` ? a2-- : e4 === `(` && a2 > 0 ? o2++ : e4 === `)` && a2 > 0 && o2--;
        a2 === 0 && o2 === 0 && (r2.push(s2), s2 = ``, i2 = false);
      } else {
        if (l2.includes(`=`)) {
          let e4 = this[t3(532)](l2);
          if (e4 !== -1) {
            let t4 = l2.slice(e4 + 1).trim(), n3 = 0, r3 = 0;
            for (let e5 of t4) e5 === `[` ? n3++ : e5 === `]` && r3++;
            if (n3 > r3) {
              i2 = true, a2 = n3 - r3, o2 = 0, s2 = l2;
              continue;
            }
          }
        }
        r2.push(l2);
      }
    }
    return r2.join(`
`);
  }
  _stripBlockComments(e2) {
    let t3 = ``, n2 = 0;
    for (; n2 < e2.length; ) if (e2[n2] === `/` && n2 + 1 < e2.length && e2[n2 + 1] === `*`) {
      let t4 = n2 + 2;
      for (; t4 < e2.length; ) {
        if (e2[t4] === `*` && t4 + 1 < e2.length && e2[t4 + 1] === `/`) {
          t4 += 2;
          break;
        }
        t4++;
      }
      n2 = t4;
    } else t3 += e2[n2], n2++;
    return t3;
  }
  _collapseTripleQuotedStrings(e2) {
    let t3 = z, n2 = ``, r2 = 0;
    for (; r2 < e2.length; ) {
      if (r2 + 2 < e2[t3(430)]) {
        let i2 = e2.slice(r2, r2 + 3);
        if (i2 === `'''` || i2 === `"""`) {
          let a2 = i2;
          for (n2 += a2, r2 += 3; r2 < e2.length; ) if (r2 + 2 < e2.length && e2[t3(533)](r2, r2 + 3) === a2) {
            n2 += a2, r2 += 3;
            break;
          } else e2[r2] === `
` ? n2 += `\\n` : e2[r2] !== `\r` && (n2 += e2[r2]), r2++;
          continue;
        }
      }
      n2 += e2[r2], r2++;
    }
    return n2;
  }
  [R(419)](e2) {
    let t3 = R;
    if (e2.trim().startsWith(t3(384))) return e2;
    let n2 = false, r2 = null, i2 = false;
    for (let a2 = 0; a2 < e2.length; a2++) {
      let o2 = e2[a2];
      if (i2) {
        i2 = false;
        continue;
      }
      if (o2 === `\\`) {
        i2 = true;
        continue;
      }
      if (!n2 && (o2 === `"` || o2 === `'`)) n2 = true, r2 = o2;
      else if (n2 && o2 === r2) n2 = false, r2 = null;
      else if (!n2 && o2 === `#`) return e2[t3(533)](0, a2).trimEnd();
    }
    return e2;
  }
  [R(532)](e2) {
    let t3 = R, n2 = false, r2 = null, i2 = false;
    for (let a2 = 0; a2 < e2[t3(430)]; a2++) {
      let t4 = e2[a2];
      if (i2) {
        i2 = false;
        continue;
      }
      if (t4 === `\\`) {
        i2 = true;
        continue;
      }
      if (!n2 && (t4 === `"` || t4 === `'`)) n2 = true, r2 = t4;
      else if (n2 && t4 === r2) n2 = false, r2 = null;
      else if (!n2 && t4 === `=`) return a2;
    }
    return -1;
  }
  parseData(e2) {
    let t3 = R, n2 = this.parseText(e2), r2 = {}, i2 = { Attribute: 1, Prim: 6, Relationship: 8 }, a2 = {};
    if (`#usda 1.0` in n2) {
      let e3 = n2[t3(423)];
      e3.upAxis && (a2.upAxis = e3.upAxis[t3(498)](/"/g, ``)), e3[t3(329)] && (a2.defaultPrim = e3.defaultPrim.replace(/"/g, ``)), e3.metersPerUnit !== void 0 && (a2.metersPerUnit = parseFloat(e3.metersPerUnit));
    }
    r2[`/`] = { specType: i2.Prim, fields: a2 };
    let o2 = (e3, n3) => {
      let a3 = t3, s2 = [];
      for (let t4 in e3) {
        if (t4 === `#usda 1.0` || t4 === `variants`) continue;
        let a4 = t4.match(B);
        if (a4) {
          let c2 = a4[1] || ``, l2 = a4[2], u2 = n3 === `/` ? `/` + l2 : n3 + `/` + l2;
          s2.push(l2);
          let d2 = { typeName: c2 }, f2 = e3[t4];
          this._extractPrimData(f2, u2, d2, r2, i2), r2[u2] = { specType: i2.Prim, fields: d2 }, o2(f2, u2);
        }
      }
      s2.length > 0 && r2[n3] && (r2[n3].fields[a3(407)] = s2);
    };
    return o2(n2, `/`), { specsByPath: r2 };
  }
  _extractPrimData(e2, t3, n2, r2, i2) {
    let a2 = R;
    if (!(!e2 || typeof e2 != `object`)) for (let o2 in e2) {
      if (o2[a2(484)](`def `)) continue;
      if (o2 === `prepend references`) {
        n2[a2(362)] = [e2[o2]];
        continue;
      }
      if (o2 === `payload`) {
        n2[a2(420)] = e2[o2];
        continue;
      }
      if (o2 === `variants`) {
        let t4 = {}, r3 = e2[o2];
        for (let e3 in r3) {
          let n3 = e3.match(V);
          if (n3) {
            let i3 = n3[1];
            t4[i3] = r3[e3].replace(/"/g, ``);
          }
        }
        Object.keys(t4)[a2(430)] > 0 && (n2.variantSelection = t4);
        continue;
      }
      if (o2[a2(484)](a2(543))) {
        let n3 = o2.slice(4), a3 = t3 + `.` + n3, s3 = e2[o2].replace(/[<>]/g, ``);
        r2[a3] = { specType: i2.Relationship, fields: { targetPaths: [s3] } };
        continue;
      }
      if (o2.includes(`xformOpOrder`)) {
        n2.xformOpOrder = e2[o2][a2(498)](/[\[\]]/g, ``)[a2(521)](`,`)[a2(352)]((e3) => e3.trim().replace(/"/g, ``));
        continue;
      }
      let s2 = o2.match(H);
      if (s2) {
        let n3 = s2[1], c2 = s2[2], l2 = e2[o2];
        if (c2.endsWith(`.connect`)) {
          let e3 = c2.slice(0, -8), o3 = t3 + `.` + e3, s3 = String(l2)[a2(544)]();
          s3.startsWith(`<`) && (s3 = s3.slice(1)), s3.endsWith(`>`) && (s3 = s3[a2(533)](0, -1)), r2[o3] || (r2[o3] = { specType: i2.Attribute, fields: { typeName: n3 } }), r2[o3].fields.connectionPaths = [s3];
          continue;
        }
        if (c2.endsWith(`.timeSamples`) && typeof l2 == `object`) {
          let e3 = c2[a2(533)](0, -12), o3 = t3 + `.` + e3, s3 = [], u2 = [];
          for (let e4 in l2) {
            let t4 = parseFloat(e4);
            isNaN(t4) || (s3[a2(460)](t4), u2.push(this._parseAttributeValue(n3, l2[e4])));
          }
          let d2 = s3.map((e4, t4) => ({ t: e4, v: u2[t4] }))[a2(535)]((e4, t4) => e4.t - t4.t);
          r2[o3] = { specType: i2.Attribute, fields: { timeSamples: { times: d2.map((e4) => e4.t), values: d2.map((e4) => e4.v) }, typeName: n3 } };
        } else {
          let e3 = this._parseAttributeValue(n3, l2), a3 = t3 + `.` + c2;
          r2[a3] = { specType: i2.Attribute, fields: { default: e3, typeName: n3 } };
        }
      }
    }
  }
  _parseAttributeValue(e2, t3) {
    let n2 = R;
    if (t3 == null) return;
    let r2 = String(t3).trim();
    if (e2.endsWith(`[]`)) try {
      let e3 = r2.replace(/\(/g, `[`)[n2(498)](/\)/g, `]`);
      e3.endsWith(`,`) && (e3 = e3.slice(0, -1));
      let t4 = JSON.parse(e3);
      return Array.isArray(t4) && Array.isArray(t4[0]) ? t4.flat() : t4;
    } catch {
      return r2[n2(498)](/[\[\]]/g, ``)[n2(521)](`,`)[n2(352)]((e3) => {
        let t4 = n2, r3 = e3.trim(), i2 = parseFloat(r3);
        return isNaN(i2) ? r3[t4(498)](/"/g, ``) : i2;
      });
    }
    if (e2.includes(`3`) || e2.includes(`2`) || e2[n2(494)](`4`)) return r2.replace(/[()]/g, ``)[n2(521)](`,`).map((e3) => parseFloat(e3.trim()));
    if (e2.startsWith(`quat`)) {
      let e3 = r2.replace(/[()]/g, ``).split(`,`).map((e4) => parseFloat(e4.trim()));
      return [e3[1], e3[2], e3[3], e3[0]];
    }
    return e2.includes(n2(367)) ? r2.replace(/[()]/g, ``).split(`,`).map((e3) => parseFloat(e3.trim())) : e2 === n2(565) || e2 === `double` || e2 === `int` ? parseFloat(r2) : e2 === `string` || e2 === `token` ? this._parseString(r2) : e2 === `asset` ? r2.replace(/@/g, ``)[n2(498)](/"/g, ``) : this._parseString(r2);
  }
  _parseString(e2) {
    let t3 = R;
    (e2.startsWith(`"`) && e2.endsWith(`"`) || e2.startsWith(`'`) && e2.endsWith(`'`)) && (e2 = e2.slice(1, -1));
    let n2 = ``, r2 = 0;
    for (; r2 < e2.length; ) if (e2[r2] === `\\` && r2 + 1 < e2[t3(430)]) {
      let t4 = e2[r2 + 1];
      switch (t4) {
        case `n`:
          n2 += `
`;
          break;
        case `t`:
          n2 += `	`;
          break;
        case `r`:
          n2 += `\r`;
          break;
        case `\\`:
          n2 += `\\`;
          break;
        case `"`:
          n2 += `"`;
          break;
        case `'`:
          n2 += `'`;
          break;
        default:
          n2 += t4;
          break;
      }
      r2 += 2;
    } else n2 += e2[r2], r2++;
    return n2;
  }
}, W = new TextDecoder(), G = new Float32Array(32);
for (let e2 = 0; e2 < 32; e2++) G[e2] = Math[R(567)](2, e2 - 15);
var ne = 2 ** -14, K = { Invalid: 0, Bool: 1, UChar: 2, Int: 3, UInt: 4, Int64: 5, UInt64: 6, Half: 7, Float: 8, Double: 9, String: 10, Token: 11, AssetPath: 12, Matrix2d: 13, Matrix3d: 14, Matrix4d: 15, Quatd: 16, Quatf: 17, Quath: 18, Vec2d: 19, Vec2f: 20, Vec2h: 21, Vec2i: 22, Vec3d: 23, Vec3f: 24, Vec3h: 25, Vec3i: 26, Vec4d: 27, Vec4f: 28, Vec4h: 29, Vec4i: 30, Dictionary: 31, TokenListOp: 32, StringListOp: 33, PathListOp: 34, ReferenceListOp: 35, IntListOp: 36, Int64ListOp: 37, UIntListOp: 38, UInt64ListOp: 39, PathVector: 40, TokenVector: 41, Specifier: 42, Permission: 43, Variability: 44, VariantSelectionMap: 45, TimeSamples: 46, Payload: 47, DoubleVector: 48, LayerOffsetVector: 49, StringVector: 50, ValueBlock: 51, Value: 52, UnregisteredValue: 53, UnregisteredValueListOp: 54, PayloadListOp: 55, TimeCode: 56, PathExpression: 57, Relocates: 58, Spline: 59, AnimationBlock: 60 }, re = 4294967295, ie = 105, ae = 116;
function oe(e2, t3, n2, r2, i2, a2) {
  for (; t3 < n2; ) {
    let o2 = e2[t3++];
    if (t3 > n2) break;
    let s2 = o2 >> 4;
    if (s2 === 15) {
      let r3;
      do {
        if (t3 >= n2) break;
        r3 = e2[t3++], s2 += r3;
      } while (r3 === 255 && t3 < n2);
    }
    if (s2 > 0) {
      t3 + s2 > n2 && (s2 = n2 - t3);
      for (let n3 = 0; n3 < s2 && !(i2 >= a2); n3++) r2[i2++] = e2[t3++];
    }
    if (t3 >= n2 || t3 + 2 > n2) break;
    let c2 = e2[t3++] | e2[t3++] << 8;
    if (c2 === 0) break;
    let l2 = (o2 & 15) + 4;
    if (l2 === 19) {
      let r3;
      do {
        if (t3 >= n2) break;
        r3 = e2[t3++], l2 += r3;
      } while (r3 === 255 && t3 < n2);
    }
    let u2 = i2 - c2;
    if (u2 < 0) break;
    for (let e3 = 0; e3 < l2 && !(i2 >= a2); e3++) r2[i2++] = r2[u2 + e3];
  }
  return i2;
}
function q(e2, t3) {
  let n2 = new Uint8Array(t3), r2 = e2[0];
  if (r2 === 0) return oe(e2, 1, e2.length, n2, 0, t3), n2;
  {
    let i2 = 1, a2 = [];
    for (let t4 = 0; t4 < r2; t4++) {
      let t5 = (e2[i2] | e2[i2 + 1] << 8 | e2[i2 + 2] << 16 | e2[i2 + 3] << 24) >>> 0;
      a2.push(t5), i2 += 4;
    }
    let o2 = i2, s2 = 0;
    for (let i3 = 0; i3 < r2; i3++) {
      let r3 = a2[i3], c2 = Math.min(65536, t3 - s2);
      oe(e2, o2, o2 + r3, n2, s2, s2 + c2), o2 += r3, s2 += c2;
    }
    return n2;
  }
}
function J(e2, t3) {
  let n2 = t3 * 4 + (t3 * 2 + 7 >> 3) + 4;
  return se(q(new Uint8Array(e2), n2), t3);
}
function se(e2, t3) {
  let n2 = R, r2 = new DataView(e2.buffer, e2.byteOffset, e2.byteLength), i2 = 0, a2 = r2[n2(399)](i2, true);
  i2 += 4;
  let o2 = t3 * 2 + 7 >> 3, s2 = i2, c2 = i2 + o2, l2 = new Int32Array(t3), u2 = 0, d2 = s2, f2 = c2;
  for (let i3 = 0; i3 < t3; ) {
    let o3 = e2[d2++];
    for (let e3 = 0; e3 < 4 && i3 < t3; e3++, i3++) {
      let t4 = o3 >> e3 * 2 & 3, s3 = 0;
      switch (t4) {
        case 0:
          s3 = a2;
          break;
        case 1:
          s3 = r2[n2(522)](f2), f2 += 1;
          break;
        case 2:
          s3 = r2.getInt16(f2, true), f2 += 2;
          break;
        case 3:
          s3 = r2.getInt32(f2, true), f2 += 4;
          break;
      }
      u2 += s3, l2[i3] = u2;
    }
  }
  return l2;
}
var ce = class {
  constructor(e2) {
    let t3 = R;
    this[t3(396)] = e2, this[t3(358)] = new DataView(e2), this.offset = 0;
  }
  seek(e2) {
    this.offset = e2;
  }
  tell() {
    let e2 = R;
    return this[e2(480)];
  }
  [R(516)]() {
    let e2 = R, t3 = this.view[e2(437)](this.offset);
    return this.offset += 1, t3;
  }
  [R(549)]() {
    let e2 = R, t3 = this.view.getInt8(this.offset);
    return this[e2(480)] += 1, t3;
  }
  readUint16() {
    let e2 = this.view.getUint16(this.offset, true);
    return this.offset += 2, e2;
  }
  readInt16() {
    let e2 = R, t3 = this.view.getInt16(this.offset, true);
    return this[e2(480)] += 2, t3;
  }
  readUint32() {
    let e2 = this.view.getUint32(this.offset, true);
    return this.offset += 4, e2;
  }
  [R(500)]() {
    let e2 = this.view.getInt32(this.offset, true);
    return this.offset += 4, e2;
  }
  readUint64() {
    let e2 = R, t3 = this.view.getUint32(this.offset, true), n2 = this.view.getUint32(this[e2(480)] + 4, true);
    return this.offset += 8, n2 * 4294967296 + t3;
  }
  [R(395)]() {
    let e2 = R, t3 = this.view.getUint32(this[e2(480)], true), n2 = this.view.getInt32(this.offset + 4, true);
    return this[e2(480)] += 8, n2 * 4294967296 + t3;
  }
  readFloat32() {
    let e2 = R, t3 = this.view.getFloat32(this[e2(480)], true);
    return this.offset += 4, t3;
  }
  readFloat64() {
    let e2 = R, t3 = this[e2(358)].getFloat64(this.offset, true);
    return this[e2(480)] += 8, t3;
  }
  readBytes(e2) {
    let t3 = new Uint8Array(this.buffer, this.offset, e2);
    return this.offset += e2, t3;
  }
  readString(e2) {
    let t3 = R, n2 = this[t3(382)](e2), r2 = 0;
    for (; r2 < e2 && n2[r2] !== 0; ) r2++;
    return W.decode(n2.subarray(0, r2));
  }
}, Y = class {
  constructor(e2, t3) {
    this.lo = e2, this.hi = t3;
  }
  get isArray() {
    return (this.hi & 2147483648) != 0;
  }
  get isInlined() {
    return (this.hi & 1073741824) != 0;
  }
  get isCompressed() {
    return (this.hi & 536870912) != 0;
  }
  get typeEnum() {
    return this.hi >> 16 & 255;
  }
  get payload() {
    return this.lo + (this.hi & 65535) * 4294967296;
  }
  getInlinedValue() {
    return this.lo;
  }
}, le = class {
  [R(398)](e2) {
    let t3 = R;
    this.buffer = e2 instanceof ArrayBuffer ? e2 : e2.buffer, this[t3(331)] = new ce(this.buffer), this.version = { major: 0, minor: 0, patch: 0 }, this._conversionBuffer = new ArrayBuffer(4), this._conversionView = new DataView(this._conversionBuffer), this._readBootstrap(), this._readTOC(), this._readTokens(), this._readStrings(), this._readFields(), this._readFieldSets(), this._readPaths(), this._readSpecs(), this.specsByPath = {};
    for (let e3 of this.specs) {
      let n2 = this.paths[e3.pathIndex];
      if (!n2) continue;
      let r2 = this[t3(410)](e3);
      this.specsByPath[n2] = { specType: e3[t3(426)], fields: r2 };
    }
    return { specsByPath: this.specsByPath };
  }
  _readBootstrap() {
    let e2 = R, t3 = this[e2(331)];
    if (t3.seek(0), t3[e2(364)](8) !== e2(438)) throw Error(`Not a valid USDC file`);
    this.version.major = t3[e2(516)](), this[e2(553)][e2(348)] = t3.readUint8(), this.version.patch = t3.readUint8(), t3.readBytes(5), this.tocOffset = t3.readUint64();
  }
  _readTOC() {
    let e2 = this.reader;
    e2.seek(this.tocOffset);
    let t3 = e2.readUint64();
    this.sections = {};
    for (let n2 = 0; n2 < t3; n2++) {
      let t4 = e2.readString(16), n3 = e2.readUint64(), r2 = e2.readUint64();
      this.sections[t4] = { start: n3, size: r2 };
    }
  }
  _readTokens() {
    let e2 = R, t3 = this.sections.TOKENS;
    if (!t3) return;
    let n2 = this[e2(331)];
    n2[e2(572)](t3.start);
    let r2 = n2[e2(576)]();
    if (this.tokens = [], this.version.major === 0 && this.version.minor < 4) {
      let e3 = n2.readUint64(), t4 = n2.readBytes(e3), i2 = 0;
      for (let e4 = 0; e4 < r2; e4++) {
        let e5 = i2;
        for (; e5 < t4.length && t4[e5] !== 0; ) e5++;
        this.tokens.push(W.decode(t4.subarray(i2, e5))), i2 = e5 + 1;
      }
    } else {
      let t4 = n2[e2(576)](), i2 = n2.readUint64(), a2 = q(n2.readBytes(i2), t4), o2 = 0;
      for (let e3 = 0; e3 < r2; e3++) {
        let e4 = o2;
        for (; e4 < a2.length && a2[e4] !== 0; ) e4++;
        this.tokens.push(W.decode(a2.subarray(o2, e4))), o2 = e4 + 1;
      }
    }
  }
  [R(563)]() {
    let e2 = R, t3 = this.sections[e2(515)];
    if (!t3) {
      this.strings = [];
      return;
    }
    let n2 = this.reader;
    n2.seek(t3.start);
    let r2 = Math.floor(t3.size / 4);
    this.strings = [];
    for (let e3 = 0; e3 < r2; e3++) this.strings.push(n2.readUint32());
  }
  _readFields() {
    let e2 = R, t3 = this[e2(433)].FIELDS;
    if (!t3) return;
    let n2 = this.reader;
    if (n2.seek(t3.start), this.fields = [], this.version.major === 0 && this.version.minor < 4) {
      let r2 = Math.floor(t3.size / 12);
      for (let t4 = 0; t4 < r2; t4++) {
        let t5 = n2.readUint32(), r3 = n2.readUint32(), i2 = n2.readUint32();
        this[e2(333)][e2(460)]({ tokenIndex: t5, valueRep: new Y(r3, i2) });
      }
    } else {
      let t4 = n2.readUint64(), r2 = n2[e2(576)](), i2 = n2.readBytes(r2), a2 = J(i2[e2(396)].slice(i2.byteOffset, i2.byteOffset + r2), t4), o2 = n2.readUint64(), s2 = q(n2[e2(382)](o2), t4 * 8), c2 = new DataView(s2.buffer, s2.byteOffset, s2.byteLength);
      for (let e3 = 0; e3 < t4; e3++) {
        let t5 = c2.getUint32(e3 * 8, true), n3 = c2.getUint32(e3 * 8 + 4, true);
        this.fields.push({ tokenIndex: a2[e3], valueRep: new Y(t5, n3) });
      }
    }
  }
  _readFieldSets() {
    let e2 = R, t3 = this.sections.FIELDSETS;
    if (!t3) return;
    let n2 = this.reader;
    if (n2.seek(t3.start), this[e2(345)] = [], this.version[e2(550)] === 0 && this.version.minor < 4) {
      let r2 = Math.floor(t3.size / 4);
      for (let t4 = 0; t4 < r2; t4++) this.fieldSets.push(n2[e2(337)]());
    } else {
      let t4 = n2.readUint64(), r2 = n2.readUint64(), i2 = n2.readBytes(r2), a2 = J(i2.buffer[e2(533)](i2.byteOffset, i2.byteOffset + r2), t4);
      for (let n3 = 0; n3 < t4; n3++) this.fieldSets[e2(460)](a2[n3]);
    }
  }
  _readPaths() {
    let e2 = R, t3 = this.sections.PATHS;
    if (!t3) return;
    let n2 = this.reader;
    n2.seek(t3.start);
    let r2 = n2.readUint64();
    if (this.paths = Array(r2)[e2(417)](``), this.version[e2(550)] === 0 && this.version.minor < 4) this._readPathsRecursive(``);
    else {
      n2[e2(576)]();
      let t4 = n2.readUint64(), i2 = n2.readBytes(t4), a2 = J(i2.buffer[e2(533)](i2.byteOffset, i2.byteOffset + t4), r2), o2 = n2[e2(576)](), s2 = n2.readBytes(o2), c2 = J(s2.buffer.slice(s2[e2(478)], s2.byteOffset + o2), r2), l2 = n2[e2(576)](), u2 = n2.readBytes(l2), d2 = J(u2[e2(396)].slice(u2.byteOffset, u2.byteOffset + l2), r2);
      this[e2(519)](a2, c2, d2);
    }
  }
  _readPathsRecursive(e2, t3 = 0) {
    let n2 = R, r2 = this.reader;
    if (t3 > 1e3) return;
    let i2 = r2.readUint32(), a2 = r2.readUint32(), o2 = r2.readUint8(), s2 = (o2 & 1) != 0, c2 = (o2 & 2) != 0, l2 = (o2 & 4) != 0, u2;
    if (e2 === ``) u2 = `/`;
    else {
      let t4 = this.tokens[a2] || ``;
      u2 = l2 ? e2 + `.` + t4 : e2 === `/` ? `/` + t4 : e2 + `/` + t4;
    }
    if (this.paths[i2] = u2, s2 && c2) {
      let i3 = r2[n2(576)]();
      this._readPathsRecursive(u2, t3 + 1), r2.seek(i3), this._readPathsRecursive(e2, t3 + 1);
    } else s2 ? this._readPathsRecursive(u2, t3 + 1) : c2 && this[n2(427)](e2, t3 + 1);
  }
  _buildPathsFromCompressed(e2, t3, n2) {
    let r2 = (i2, a2) => {
      let o2 = i2;
      for (; o2 < e2.length; ) {
        let i3 = o2++, s2 = e2[i3], c2 = t3[i3], l2 = n2[i3], u2;
        if (a2 === ``) u2 = `/`, a2 = u2;
        else {
          let e3 = this.tokens[Math.abs(c2)] || ``;
          u2 = c2 < 0 ? a2 + `.` + e3 : a2 === `/` ? `/` + e3 : a2 + `/` + e3;
        }
        this.paths[s2] = u2;
        let d2 = l2 > 0 || l2 === -1, f2 = l2 >= 0;
        if (d2) f2 && r2(i3 + l2, a2), a2 = u2;
        else if (!f2) break;
      }
    };
    r2(0, ``);
  }
  _readSpecs() {
    let e2 = R, t3 = this.sections[e2(378)];
    if (!t3) return;
    let n2 = this.reader;
    if (n2.seek(t3[e2(448)]), this.specs = [], this.version.major === 0 && this.version.minor < 4) {
      let r2 = this[e2(553)].minor === 0 && this[e2(553)][e2(545)] === 1 ? 16 : 12, i2 = Math.floor(t3.size / r2);
      for (let e3 = 0; e3 < i2; e3++) {
        let e4 = n2.readUint32(), t4 = n2.readUint32(), i3 = n2.readUint32();
        r2 === 16 && n2.readUint32(), this.specs.push({ pathIndex: e4, fieldSetIndex: t4, specType: i3 });
      }
    } else {
      let t4 = n2.readUint64(), r2 = n2.readUint64(), i2 = n2.readBytes(r2), a2 = J(i2.buffer.slice(i2[e2(478)], i2.byteOffset + r2), t4), o2 = n2.readUint64(), s2 = n2.readBytes(o2), c2 = J(s2.buffer.slice(s2[e2(478)], s2.byteOffset + o2), t4), l2 = n2.readUint64(), u2 = n2.readBytes(l2), d2 = J(u2[e2(396)][e2(533)](u2.byteOffset, u2.byteOffset + l2), t4);
      for (let n3 = 0; n3 < t4; n3++) this.specs[e2(460)]({ pathIndex: a2[n3], fieldSetIndex: c2[n3], specType: d2[n3] });
    }
  }
  [R(371)](e2) {
    let t3 = R, n2 = e2[t3(370)], r2 = e2.isArray, i2 = e2.isInlined;
    if (n2 === K.TimeSamples) return this._readTimeSamples(e2);
    if (i2) return this[t3(513)](e2);
    let a2 = e2[t3(420)];
    if (a2 === 0 && r2) return [];
    if (a2 < 0 || a2 >= this.buffer[t3(482)]) throw RangeError(`USDCParser: Invalid payload offset ` + a2 + t3(434) + n2 + `.`);
    let o2 = this.reader.tell();
    this.reader.seek(a2);
    let s2;
    return s2 = r2 ? this._readArrayValue(e2) : this._readScalarValue(n2), this.reader.seek(o2), s2;
  }
  _readInlinedValue(e2) {
    let t3 = R, n2 = e2.typeEnum, r2 = e2.getInlinedValue(), i2 = this._conversionView;
    switch (n2) {
      case K.Bool:
        return r2 !== 0;
      case K.UChar:
        return r2 & 255;
      case K.Int:
      case K.UInt:
        return r2;
      case K.Float:
        return i2.setUint32(0, r2, true), i2.getFloat32(0, true);
      case K.Double:
        return i2.setUint32(0, r2, true), i2.getFloat32(0, true);
      case K.Token:
        return this.tokens[r2] || ``;
      case K.String:
        return this[t3(393)][this.strings[r2]] || ``;
      case K.AssetPath:
        return this[t3(393)][r2] || ``;
      case K.Specifier:
        return r2;
      case K.Permission:
      case K.Variability:
        return r2;
      case K.Vec2h:
        return i2[t3(518)](0, r2, true), [this._halfToFloat(i2.getUint16(0, true)), this[t3(330)](i2.getUint16(2, true))];
      case K.Vec2f:
      case K.Vec2i:
        return i2[t3(518)](0, r2, true), [i2.getInt8(0), i2.getInt8(1)];
      case K.Vec3f:
      case K.Vec3i:
        return i2.setUint32(0, r2, true), [i2.getInt8(0), i2.getInt8(1), i2[t3(522)](2)];
      case K.Vec4f:
      case K.Vec4i:
        return i2.setUint32(0, r2, true), [i2.getInt8(0), i2[t3(522)](1), i2.getInt8(2), i2.getInt8(3)];
      case K.Matrix2d:
        return i2.setUint32(0, r2, true), [i2[t3(522)](0), 0, 0, i2.getInt8(1)];
      case K.Matrix3d:
        return i2.setUint32(0, r2, true), [i2.getInt8(0), 0, 0, 0, i2.getInt8(1), 0, 0, 0, i2.getInt8(2)];
      case K[t3(523)]:
        return i2.setUint32(0, r2, true), [i2.getInt8(0), 0, 0, 0, 0, i2.getInt8(1), 0, 0, 0, 0, i2.getInt8(2), 0, 0, 0, 0, i2.getInt8(3)];
      default:
        return r2;
    }
  }
  _readTimeSamples(e2) {
    let t3 = R, n2 = this[t3(331)], r2 = e2.payload, i2 = n2.tell();
    n2.seek(r2);
    let a2 = n2.tell(), o2 = n2.readInt64();
    n2.seek(a2 + o2);
    let s2 = new Y(n2.readUint32(), n2.readUint32()), c2 = this._readValue(s2), l2 = a2 + o2 + 8;
    n2[t3(572)](l2);
    let u2 = n2.tell(), d2 = n2.readInt64();
    n2[t3(572)](u2 + d2);
    let f2 = n2.readUint64(), p2 = [];
    for (let e3 = 0; e3 < f2; e3++) {
      let e4 = n2.readUint32(), r3 = n2.readUint32();
      p2[t3(460)](new Y(e4, r3));
    }
    let m2 = [];
    for (let e3 = 0; e3 < f2; e3++) m2.push(this._readValue(p2[e3]));
    return n2[t3(572)](i2), { times: c2 instanceof Float64Array ? Array.from(c2) : Array.isArray(c2) ? c2 : [c2], values: m2 };
  }
  [R(403)](e2) {
    let t3 = R, n2 = this.reader;
    switch (e2) {
      case K[t3(505)]:
        return null;
      case K[t3(429)]:
        return n2.readUint8() !== 0;
      case K.UChar:
        return n2[t3(516)]();
      case K.Int:
        return n2.readInt32();
      case K.UInt:
        return n2.readUint32();
      case K.Int64:
        return n2.readInt64();
      case K.UInt64:
        return n2.readUint64();
      case K.Half:
        return this._readHalf();
      case K.Float:
        return n2.readFloat32();
      case K.Double:
        return n2.readFloat64();
      case K.String:
      case K[t3(349)]: {
        let e3 = n2.readUint32();
        return this.tokens[e3] || ``;
      }
      case K.AssetPath: {
        let e3 = n2.readUint32();
        return this.tokens[e3] || ``;
      }
      case K[t3(509)]:
        return [n2.readFloat32(), n2.readFloat32()];
      case K.Vec2d:
        return [n2.readFloat64(), n2.readFloat64()];
      case K.Vec2i:
        return [n2[t3(500)](), n2.readInt32()];
      case K.Vec3f:
        return [n2.readFloat32(), n2.readFloat32(), n2.readFloat32()];
      case K.Vec3d:
        return [n2.readFloat64(), n2[t3(573)](), n2.readFloat64()];
      case K.Vec3i:
        return [n2[t3(500)](), n2.readInt32(), n2.readInt32()];
      case K.Vec4f:
        return [n2[t3(360)](), n2.readFloat32(), n2.readFloat32(), n2.readFloat32()];
      case K.Vec4d:
        return [n2.readFloat64(), n2.readFloat64(), n2.readFloat64(), n2[t3(573)]()];
      case K.Quatf:
        return [n2.readFloat32(), n2[t3(360)](), n2.readFloat32(), n2.readFloat32()];
      case K.Quatd:
        return [n2.readFloat64(), n2.readFloat64(), n2[t3(573)](), n2.readFloat64()];
      case K.Matrix4d: {
        let e3 = [];
        for (let r2 = 0; r2 < 16; r2++) e3.push(n2[t3(573)]());
        return e3;
      }
      case K.TokenVector: {
        let e3 = n2.readUint64(), t4 = [];
        for (let r2 = 0; r2 < e3; r2++) {
          let e4 = n2.readUint32();
          t4.push(this.tokens[e4] || ``);
        }
        return t4;
      }
      case K.PathVector: {
        let e3 = n2.readUint64(), r2 = [];
        for (let i2 = 0; i2 < e3; i2++) {
          let e4 = n2.readUint32();
          r2[t3(460)](this.paths[e4] || ``);
        }
        return r2;
      }
      case K.DoubleVector: {
        let e3 = n2.readUint64(), t4 = new Float64Array(e3);
        for (let r2 = 0; r2 < e3; r2++) t4[r2] = n2.readFloat64();
        return t4;
      }
      case K[t3(397)]: {
        let e3 = n2.readUint64(), r2 = {};
        for (let i2 = 0; i2 < e3; i2++) {
          let e4 = n2.readUint32(), i3 = this.tokens[e4], a2 = n2.position + n2.readInt64(), o2 = n2.position;
          n2.position = a2;
          let s2 = new Y(n2.readUint64()), c2 = null;
          s2.isInlined ? c2 = this._readInlinedValue(s2) : s2.isArray ? (n2.position = s2.payload, c2 = this._readArrayValue(s2)) : (n2[t3(520)] = s2.payload, c2 = this[t3(403)](s2.typeEnum)), n2[t3(520)] = o2, i3 !== void 0 && c2 !== null && (r2[i3] = c2);
        }
        return r2;
      }
      case K.TokenListOp:
      case K.StringListOp:
      case K.IntListOp:
      case K.Int64ListOp:
      case K.UIntListOp:
      case K[t3(444)]:
        return null;
      case K.PathListOp: {
        let e3 = n2[t3(516)](), r2 = (e3 & 2) != 0, i2 = (e3 & 4) != 0, a2 = (e3 & 8) != 0, o2 = (e3 & 16) != 0, s2 = (e3 & 32) != 0, c2 = (e3 & 64) != 0, l2 = () => {
          let e4 = n2.readUint64(), t4 = [];
          for (let r3 = 0; r3 < e4; r3++) {
            let e5 = n2.readUint32();
            t4.push(this.paths[e5]);
          }
          return t4;
        }, u2 = null, d2 = null, f2 = null, p2 = null;
        return r2 && (u2 = l2()), i2 && (d2 = l2()), s2 && (f2 = l2()), c2 && (p2 = l2()), a2 && l2(), o2 && l2(), f2 && f2.length > 0 ? f2 : u2 && u2.length > 0 ? u2 : p2 && p2.length > 0 ? p2 : d2 && d2[t3(430)] > 0 ? d2 : null;
      }
      case K.VariantSelectionMap: {
        let e3 = n2.readUint64(), r2 = {};
        for (let i2 = 0; i2 < e3; i2++) {
          let e4 = n2.readUint32(), i3 = n2[t3(337)](), a2 = this[t3(393)][this.strings[e4]], o2 = this[t3(393)][this.strings[i3]];
          a2 && o2 && (r2[a2] = o2);
        }
        return r2;
      }
      default:
        return console.warn(t3(422), e2), null;
    }
  }
  _readArrayValue(e2) {
    let t3 = R, n2 = this.reader, r2 = e2[t3(370)], i2 = e2.isCompressed, a2;
    if (a2 = this.version.major === 0 && this.version.minor < 7 ? n2.readUint32() : n2.readUint64(), !Number.isSafeInteger(a2) || a2 < 0) throw RangeError(`USDCParser: Invalid array size ` + a2 + ` for type ` + r2 + `.`);
    if (a2 > 2147483647) throw RangeError(`USDCParser: Array size ` + a2 + ` exceeds implementation limits.`);
    if (a2 === 0) return [];
    if (i2) return this._readCompressedArray(r2, a2);
    switch (r2) {
      case K.Int: {
        let e3 = new Int32Array(a2);
        for (let t4 = 0; t4 < a2; t4++) e3[t4] = n2.readInt32();
        return e3;
      }
      case K.UInt: {
        let e3 = new Uint32Array(a2);
        for (let t4 = 0; t4 < a2; t4++) e3[t4] = n2.readUint32();
        return e3;
      }
      case K.Float: {
        let e3 = new Float32Array(a2);
        for (let t4 = 0; t4 < a2; t4++) e3[t4] = n2.readFloat32();
        return e3;
      }
      case K.Double: {
        let e3 = new Float64Array(a2);
        for (let t4 = 0; t4 < a2; t4++) e3[t4] = n2.readFloat64();
        return e3;
      }
      case K.Vec2f: {
        let e3 = new Float32Array(a2 * 2);
        for (let t4 = 0; t4 < a2 * 2; t4++) e3[t4] = n2.readFloat32();
        return e3;
      }
      case K.Vec3f: {
        let e3 = new Float32Array(a2 * 3);
        for (let t4 = 0; t4 < a2 * 3; t4++) e3[t4] = n2.readFloat32();
        return e3;
      }
      case K.Vec4f: {
        let e3 = new Float32Array(a2 * 4);
        for (let t4 = 0; t4 < a2 * 4; t4++) e3[t4] = n2.readFloat32();
        return e3;
      }
      case K.Vec3h: {
        let e3 = new Float32Array(a2 * 3);
        for (let t4 = 0; t4 < a2 * 3; t4++) e3[t4] = this._readHalf();
        return e3;
      }
      case K.Quatf: {
        let e3 = new Float32Array(a2 * 4);
        for (let t4 = 0; t4 < a2 * 4; t4++) e3[t4] = n2.readFloat32();
        return e3;
      }
      case K.Quath: {
        let e3 = new Float32Array(a2 * 4);
        for (let t4 = 0; t4 < a2 * 4; t4++) e3[t4] = this._readHalf();
        return e3;
      }
      case K.Matrix4d: {
        let e3 = new Float64Array(a2 * 16);
        for (let t4 = 0; t4 < a2 * 16; t4++) e3[t4] = n2.readFloat64();
        return e3;
      }
      case K.Token: {
        let e3 = [];
        for (let r3 = 0; r3 < a2; r3++) {
          let r4 = n2.readUint32();
          e3.push(this[t3(393)][r4] || ``);
        }
        return e3;
      }
      case K[t3(350)]: {
        let e3 = new Float32Array(a2);
        for (let n3 = 0; n3 < a2; n3++) e3[n3] = this[t3(470)]();
        return e3;
      }
      default:
        return console.warn(`USDCParser: Unsupported array type`, r2), [];
    }
  }
  _readCompressedArray(e2, t3) {
    let n2 = R, r2 = this.reader;
    switch (e2) {
      case K.Int:
      case K.UInt: {
        let e3 = r2.readUint64(), i2 = r2[n2(382)](e3);
        return J(i2[n2(396)][n2(533)](i2.byteOffset, i2.byteOffset + e3), t3);
      }
      case K.Float: {
        let e3 = r2.readInt8();
        if (e3 === ie) {
          let e4 = r2.readUint64(), i2 = r2.readBytes(e4), a2 = J(i2.buffer.slice(i2[n2(478)], i2.byteOffset + e4), t3), o2 = new Float32Array(t3);
          for (let e5 = 0; e5 < t3; e5++) o2[e5] = a2[e5];
          return o2;
        } else if (e3 === ae) {
          let e4 = r2.readUint32(), i2 = new Float32Array(e4);
          for (let t4 = 0; t4 < e4; t4++) i2[t4] = r2.readFloat32();
          let a2 = r2.readUint64(), o2 = r2[n2(382)](a2), s2 = J(o2[n2(396)].slice(o2.byteOffset, o2[n2(478)] + a2), t3), c2 = new Float32Array(t3);
          for (let e5 = 0; e5 < t3; e5++) c2[e5] = i2[s2[e5]];
          return c2;
        }
        return console.warn(`USDCParser: Unknown float compression code`, e3), new Float32Array(t3);
      }
      default:
        return console.warn(`USDCParser: Unsupported compressed array type`, e2), [];
    }
  }
  _readHalf() {
    let e2 = R;
    return this._halfToFloat(this.reader[e2(528)]());
  }
  _halfToFloat(e2) {
    let t3 = (e2 & 32768) >> 15, n2 = (e2 & 31744) >> 10, r2 = e2 & 1023;
    return n2 === 0 ? r2 === 0 ? t3 ? -0 : 0 : (t3 ? -1 : 1) * ne * (r2 / 1024) : n2 === 31 ? r2 ? NaN : t3 ? -1 / 0 : 1 / 0 : (t3 ? -1 : 1) * G[n2] * (1 + r2 / 1024);
  }
  _getFieldsForSpec(e2) {
    let t3 = R, n2 = {}, r2 = e2[t3(472)], i2 = 0;
    for (; r2 < this.fieldSets[t3(430)] && i2 < 1e4; ) {
      let e3 = this[t3(345)][r2];
      if (e3 === re || e3 === -1) break;
      let a2 = this[t3(333)][e3];
      if (a2) {
        let e4 = this.tokens[a2.tokenIndex];
        n2[e4] = this._readValue(a2.valueRep);
      }
      r2++, i2++;
    }
    return n2;
  }
};
t();
var ue = /^(.+?)\/\{(\w+)=(\w+)\}\/(.+)$/, X = { Unknown: 0, Attribute: 1, Connection: 2, Expression: 3, Mapper: 4, MapperArg: 5, Prim: 6, PseudoRoot: 7, Relationship: 8, RelationshipTarget: 9, Variant: 10, VariantSet: 11 }, Z = { projection: R(517), clippingRange: [1, 1e6], horizontalAperture: 20.955, verticalAperture: 15.2908, horizontalApertureOffset: 0, verticalApertureOffset: 0, focalLength: 50, focusDistance: 0, fStop: 0 }, Q = class t2 {
  constructor(e2 = null) {
    let t3 = R;
    this[t3(559)] = {}, this[t3(477)] = [], this.manager = e2;
  }
  [R(564)](e2, t3 = {}, n2 = {}, r2 = ``) {
    let i2 = R;
    this.specsByPath = e2.specsByPath, this.assets = t3, this.externalVariantSelections = n2, this.basePath = r2, this.skinnedMeshes = [], this.skeletons = {}, this._buildIndexes();
    let a2 = this.specsByPath[`/`], o2 = a2 ? a2[i2(333)] : {};
    this.fps = o2[i2(547)] || o2.timeCodesPerSecond || 30;
    let s2 = new S();
    this._buildHierarchy(s2, `/`), this._bindSkeletons();
    let c2 = Object.keys(this.skeletons);
    c2.length === 1 && (s2[i2(366)] = this.skeletons[c2[0]].skeleton), s2.animations = this._buildAnimations();
    let l2 = o2[i2(502)];
    return l2 !== void 0 && l2 !== 1 && s2.scale.setScalar(l2), a2 && a2.fields && a2.fields[i2(361)] === `Z` && (s2[i2(514)].x = -Math.PI / 2), s2;
  }
  applyTransform(t3, n2, r2 = {}) {
    let i2 = R, a2 = e(e({}, n2), r2), o2 = a2.xformOpOrder;
    if (o2 && o2.length > 0) {
      let e2 = new P(), n3 = new P(), r3 = null;
      for (let t4 = 0; t4 < o2.length; t4++) {
        let s2 = o2[t4], l2 = s2.startsWith(`!invert!`), u2 = l2 ? s2.slice(8) : s2;
        if (u2 === `xformOp:transform`) {
          let t5 = a2[`xformOp:transform`];
          t5 && t5[i2(430)] === 16 && (n3[i2(446)](t5[0], t5[4], t5[8], t5[12], t5[1], t5[5], t5[9], t5[13], t5[2], t5[6], t5[10], t5[14], t5[3], t5[7], t5[11], t5[15]), l2 && n3.invert(), e2.multiply(n3));
        } else if (u2 === i2(334)) {
          let t5 = a2[`xformOp:translate`];
          t5 && (n3.makeTranslation(t5[0], t5[1], t5[2]), l2 && n3.invert(), e2.multiply(n3));
        } else if (u2 === `xformOp:translate:pivot`) {
          let t5 = a2[`xformOp:translate:pivot`];
          t5 && (n3.makeTranslation(t5[0], t5[1], t5[2]), l2 && n3.invert(), e2.multiply(n3));
        } else if (u2 === i2(387)) {
          let t5 = a2[`xformOp:scale`];
          t5 && (Array.isArray(t5) ? (n3[i2(385)](t5[0], t5[1], t5[2]), r3 = [t5[0], t5[1], t5[2]]) : (n3.makeScale(t5, t5, t5), r3 = [t5, t5, t5]), l2 && n3.invert(), e2[i2(466)](n3));
        } else if (u2 === i2(542)) {
          let t5 = a2[i2(542)];
          if (t5) {
            let r4 = new c(t5[0] * Math.PI / 180, t5[1] * Math.PI / 180, t5[2] * Math.PI / 180, `ZYX`);
            n3.makeRotationFromEuler(r4), l2 && n3.invert(), e2.multiply(n3);
          }
        } else if (u2 === `xformOp:rotateX`) {
          let t5 = a2[`xformOp:rotateX`];
          t5 !== void 0 && (n3.makeRotationX(t5 * Math.PI / 180), l2 && n3.invert(), e2.multiply(n3));
        } else if (u2 === i2(335)) {
          let t5 = a2[`xformOp:rotateY`];
          t5 !== void 0 && (n3.makeRotationY(t5 * Math.PI / 180), l2 && n3[i2(390)](), e2.multiply(n3));
        } else if (u2 === `xformOp:rotateZ`) {
          let t5 = a2[`xformOp:rotateZ`];
          t5 !== void 0 && (n3.makeRotationZ(t5 * Math.PI / 180), l2 && n3.invert(), e2.multiply(n3));
        } else if (u2 === `xformOp:orient`) {
          let t5 = a2[`xformOp:orient`];
          if (t5 && t5.length === 4) {
            let r4 = new y(t5[0], t5[1], t5[2], t5[3]);
            n3.makeRotationFromQuaternion(r4), l2 && n3[i2(390)](), e2.multiply(n3);
          }
        }
      }
      if (t3.matrix[i2(421)](e2), t3.matrix.decompose(t3.position, t3.quaternion, t3.scale), r3) {
        let e3 = r3[0] < 0, n4 = r3[1] < 0, a3 = r3[2] < 0;
        +!!e3 + +!!n4 + +!!a3 == 3 && (t3[i2(508)].set(r3[0], r3[1], r3[2]), t3.quaternion.set(t3.quaternion.x, -t3.quaternion.y, t3.quaternion.z, -t3[i2(524)].w));
      }
      return;
    }
    if (a2[`xformOp:translate`]) {
      let e2 = a2[i2(334)];
      t3.position.set(e2[0], e2[1], e2[2]);
    }
    if (a2[i2(332)]) {
      let e2 = a2[`xformOp:translate:pivot`];
      t3.pivot = new b(e2[0], e2[1], e2[2]);
    }
    if (a2[i2(387)]) {
      let e2 = a2[`xformOp:scale`];
      Array.isArray(e2) ? t3.scale.set(e2[0], e2[1], e2[2]) : t3[i2(508)].set(e2, e2, e2);
    }
    if (a2[`xformOp:rotateXYZ`]) {
      let e2 = a2[`xformOp:rotateXYZ`];
      t3[i2(514)].set(e2[0] * Math.PI / 180, e2[1] * Math.PI / 180, e2[2] * Math.PI / 180);
    }
    if (a2[i2(389)]) {
      let e2 = a2[`xformOp:orient`];
      e2.length === 4 && t3.quaternion.set(e2[0], e2[1], e2[2], e2[3]);
    }
  }
  _buildIndexes() {
    let e2 = R;
    this.childrenByPath = /* @__PURE__ */ new Map(), this[e2(436)] = /* @__PURE__ */ new Map(), this.materialsByRoot = /* @__PURE__ */ new Map(), this.shadersByMaterialPath = /* @__PURE__ */ new Map(), this.geomSubsetsByMeshPath = /* @__PURE__ */ new Map();
    for (let t3 in this.specsByPath) {
      let n2 = this.specsByPath[t3];
      if (n2[e2(426)] === X.Prim) {
        let r2 = t3.lastIndexOf(`/`);
        if (r2 > 0) {
          let n3 = t3.slice(0, r2), i3 = t3.slice(r2 + 1);
          this.childrenByPath.has(n3) || this.childrenByPath[e2(446)](n3, []), this.childrenByPath[e2(377)](n3)[e2(460)]({ name: i3, path: t3 });
        } else if (r2 === 0 && t3.length > 1) {
          let n3 = t3[e2(533)](1);
          this.childrenByPath.has(`/`) || this[e2(450)].set(`/`, []), this.childrenByPath.get(`/`).push({ name: n3, path: t3 });
        }
        let i2 = n2.fields[e2(569)];
        if (i2 === `Material`) {
          let n3 = t3.split(`/`), r3 = n3[e2(430)] > 1 ? `/` + n3[1] : `/`;
          this.materialsByRoot.has(r3) || this.materialsByRoot.set(r3, []), this.materialsByRoot.get(r3).push(t3);
        }
        if (i2 === `Shader` && r2 > 0) {
          let n3 = t3.slice(0, r2);
          for (; n3.length > 0; ) {
            let r3 = this[e2(372)][n3];
            if (r3 && r3[e2(426)] === X.Prim && r3.fields[e2(569)] === `Material`) {
              this[e2(443)].has(n3) || this.shadersByMaterialPath[e2(446)](n3, []), this[e2(443)].get(n3).push(t3);
              break;
            }
            let i3 = n3.lastIndexOf(`/`);
            if (i3 <= 0) break;
            n3 = n3[e2(533)](0, i3);
          }
        }
        if (i2 === `GeomSubset` && r2 > 0) {
          let e3 = t3.slice(0, r2);
          this.geomSubsetsByMeshPath.has(e3) || this.geomSubsetsByMeshPath.set(e3, []), this.geomSubsetsByMeshPath.get(e3).push(t3);
        }
      } else if (n2[e2(426)] === X.Attribute || n2.specType === X.Relationship) {
        let e3 = t3.lastIndexOf(`.`);
        if (e3 > 0) {
          let r2 = t3.slice(0, e3), i2 = t3.slice(e3 + 1);
          this.attributesByPrimPath.has(r2) || this.attributesByPrimPath.set(r2, /* @__PURE__ */ new Map()), this.attributesByPrimPath.get(r2).set(i2, n2);
        }
      }
    }
  }
  _isDirectChild(e2, t3, n2) {
    let r2 = R;
    if (!t3.startsWith(n2)) return false;
    let i2 = t3.slice(n2.length);
    return i2[r2(430)] === 0 || i2.startsWith(`{`) ? false : !i2.includes(`/`);
  }
  _buildHierarchy(e2, t3) {
    let n2 = R, r2 = [], i2 = /* @__PURE__ */ new Set(), a2 = this.childrenByPath[n2(377)](t3);
    if (a2) for (let e3 of a2) i2.has(e3.path) || (i2.add(e3.path), r2.push(e3));
    let o2 = this[n2(473)](t3);
    for (let e3 of o2) {
      let t4 = this.childrenByPath[n2(377)](e3);
      if (t4) for (let e4 of t4) i2.has(e4.path) || (i2[n2(555)](e4.path), r2.push(e4));
    }
    for (let { name: t4, path: i3 } of r2) {
      let r3 = this.specsByPath[i3];
      if (!r3 || r3[n2(426)] !== X.Prim) continue;
      let a3 = r3.fields.typeName, o3 = this._getReferences(r3);
      if (o3.length > 0) {
        let s2 = this._getLocalVariantSelections(r3.fields), c2 = [];
        for (let e3 of o3) {
          let t5 = this._resolveReference(e3, s2);
          t5 && c2.push(t5);
        }
        if (c2.length > 0) {
          let o4 = this._getAttributes(i3);
          if (c2[n2(430)] === 1) {
            let s4 = this._findSingleMesh(c2[0]);
            if (s4 && (a3 === `Xform` || !a3)) {
              s4.name = t4, this.applyTransform(s4, r3[n2(333)], o4), this._applyMaterialBinding(s4, i3), e2.add(s4), this._buildHierarchy(s4, i3);
              continue;
            }
          }
          let s3 = new F();
          s3[n2(363)] = t4, this.applyTransform(s3, r3.fields, o4);
          for (let e3 of c2) for (; e3.children.length > 0; ) s3.add(e3.children[0]);
          e2[n2(555)](s3), this[n2(379)](s3, i3);
          continue;
        }
      }
      if (a3 === n2(391)) {
        let a4 = new F();
        a4[n2(363)] = t4, a4.userData.isSkelRoot = true;
        let o4 = this._getAttributes(i3);
        this.applyTransform(a4, r3.fields, o4), e2.add(a4), this._buildHierarchy(a4, i3);
      } else if (a3 === `Skeleton`) {
        let t5 = this[n2(458)](i3);
        t5 && (this.skeletons[i3] = t5), this._buildHierarchy(e2, i3);
      } else if (a3 !== `SkelAnimation`) {
        if (a3 === `Mesh`) {
          let t5 = this[n2(483)](i3, r3);
          t5 && (e2.add(t5), this._buildHierarchy(t5, i3));
        } else if (a3 === `Camera`) {
          let a4 = this._buildCamera(i3);
          a4.name = t4;
          let o4 = this._getAttributes(i3);
          this.applyTransform(a4, r3.fields, o4), e2[n2(555)](a4), this._buildHierarchy(a4, i3);
        } else if (a3 === `DistantLight` || a3 === n2(491) || a3 === `RectLight` || a3 === `DiskLight`) {
          let n3 = this._buildLight(i3, a3);
          n3.name = t4;
          let o4 = this._getAttributes(i3);
          this.applyTransform(n3, r3.fields, o4), e2.add(n3), this._buildHierarchy(n3, i3);
        } else if (a3 === `Cube` || a3 === `Sphere` || a3 === `Cylinder` || a3 === `Cone` || a3 === `Capsule`) {
          let t5 = this._buildGeomPrimitive(i3, r3, a3);
          t5 && (e2.add(t5), this._buildHierarchy(t5, i3));
        } else if (!(a3 === `Material` || a3 === `Shader` || a3 === n2(453))) {
          let n3 = new F();
          n3.name = t4;
          let a4 = this._getAttributes(i3);
          this.applyTransform(n3, r3.fields, a4), e2.add(n3), this._buildHierarchy(n3, i3);
        }
      }
    }
  }
  _getVariantPaths(e2) {
    let t3 = R;
    var n2;
    let r2 = this.specsByPath[e2], i2 = r2 == null || (n2 = r2.fields) == null ? void 0 : n2[t3(493)], a2 = [];
    if (!i2 || i2.length === 0) return a2;
    for (let n3 of i2) {
      let i3 = this.externalVariantSelections[n3] || null;
      if (!i3) {
        let e3 = r2.fields[t3(418)];
        i3 = e3 ? e3[n3] : null;
      }
      if (!i3) {
        var o2;
        let t4 = e2 + `/{` + n3 + `=}`, r3 = this.specsByPath[t4];
        !(r3 == null || (o2 = r3.fields) == null) && o2.variantChildren && (i3 = r3.fields.variantChildren[0]);
      }
      if (i3) {
        let r3 = e2 + `/{` + n3 + `=` + i3 + `}`;
        a2[t3(460)](r3);
      }
    }
    return a2;
  }
  [R(451)](e2) {
    let t3 = R, n2 = e2;
    return n2.startsWith(`./`) && (n2 = n2.slice(2)), this[t3(537)] ? this.basePath + `/` + n2 : n2;
  }
  _resolveReference(n2, r2 = {}) {
    let i2 = R;
    if (!n2) return null;
    let a2 = n2.match(/@([^@]+)@(?:<([^>]+)>)?/);
    if (!a2) return null;
    let o2 = a2[1], s2 = a2[2], c2 = this._resolveFilePath(o2), l2 = e(e({}, r2), this.externalVariantSelections), u2 = this.assets[c2];
    if (!u2) return null;
    if (u2.specsByPath) {
      let e2 = new t2(this.manager), n3 = this._getBasePath(c2), r3 = e2[i2(564)](u2, this.assets, l2, n3);
      if (s2) {
        let e3 = s2[i2(521)](`/`).pop(), t3 = null;
        for (let n4 of r3.children) if (n4[i2(363)] === e3) {
          t3 = n4;
          break;
        }
        if (t3) {
          r3.remove(t3);
          let e4 = new S();
          return e4.add(t3), e4;
        }
      }
      return r3;
    }
    return u2[i2(428)] || u2.isObject3D ? u2.clone() : null;
  }
  _findSingleMesh(e2) {
    let t3 = R;
    for (let t4 of e2.children) if (t4.isMesh) return e2.remove(t4), t4;
    if (e2[t3(463)][t3(430)] === 1) {
      let n2 = e2[t3(463)][0];
      if (n2.children && n2.children[t3(430)] === 1) {
        let e3 = n2.children[0];
        if (e3.isMesh && !this._hasNonIdentityTransform(n2)) return n2[t3(442)](e3), e3;
      }
    }
    return null;
  }
  _hasNonIdentityTransform(e2) {
    let t3 = e2.position, n2 = e2.rotation, r2 = e2.scale, i2 = t3.x !== 0 || t3.y !== 0 || t3.z !== 0, a2 = n2.x !== 0 || n2.y !== 0 || n2.z !== 0, o2 = r2.x !== 1 || r2.y !== 1 || r2.z !== 1;
    return i2 || a2 || o2;
  }
  _getBasePath(e2) {
    let t3 = e2[R(454)](`/`);
    return t3 >= 0 ? e2.slice(0, t3) : ``;
  }
  _getLocalVariantSelections(e2) {
    let t3 = R, n2 = {};
    if (e2.variantSelection) for (let r2 in e2[t3(418)]) n2[r2] = e2.variantSelection[r2];
    return n2;
  }
  _getReferences(e2) {
    let t3 = R, n2 = [];
    if (e2[t3(333)].references && e2[t3(333)].references.length > 0) {
      let r2 = e2.fields.references[0];
      if (typeof r2 == `string`) {
        let e3 = r2.matchAll(/@([^@]+)@(?:<([^>]+)>)?/g);
        for (let t4 of e3) n2.push(t4[0]);
      } else r2[t3(359)] && n2.push(`@` + r2.assetPath + `@`);
    }
    if (n2.length === 0 && e2.fields[t3(420)]) {
      let t4 = e2.fields.payload;
      typeof t4 == `string` ? n2.push(t4) : t4.assetPath && n2.push(`@` + t4.assetPath + `@`);
    }
    return n2;
  }
  [R(369)](e2) {
    let t3 = R, n2 = {};
    this._collectAttributesFromPath(e2, n2);
    let r2 = e2[t3(540)](ue);
    if (r2) {
      let t4 = r2[1], i2 = r2[4], a2 = this._getVariantPaths(t4);
      for (let t5 of a2) {
        if (e2.startsWith(t5)) continue;
        let r3 = t5 + `/` + i2;
        this._collectAttributesFromPath(r3, n2);
      }
    } else {
      let r3 = e2.split(`/`);
      for (let e3 = 1; e3 < r3.length - 1; e3++) {
        let i2 = r3.slice(0, e3 + 1).join(`/`), a2 = r3.slice(e3 + 1)[t3(355)](`/`), o2 = this._getVariantPaths(i2);
        for (let e4 of o2) {
          let t4 = e4 + `/` + a2;
          this._collectAttributesFromPath(t4, n2);
        }
      }
    }
    return n2;
  }
  _collectAttributesFromPath(e2, t3) {
    var _a, _b, _c;
    let n2 = R, r2 = this.attributesByPrimPath[n2(377)](e2);
    if (r2) for (let [e3, a2] of r2) {
      var i2;
      if (((_a = a2.fields) == null ? void 0 : _a.default) !== void 0) t3[e3] = a2.fields.default;
      else if ((i2 = a2.fields) != null && i2.timeSamples) {
        let { times: r3, values: i3 } = a2.fields[n2(338)];
        if (r3 && i3 && r3[n2(430)] > 0) {
          let n3 = r3.indexOf(0);
          t3[e3] = n3 >= 0 ? i3[n3] : i3[0];
        }
      }
      ((_b = a2.fields) == null ? void 0 : _b.elementSize) !== void 0 && (t3[e3 + `:elementSize`] = a2.fields.elementSize), e3.startsWith(`primvars:`) && ((_c = a2.fields) == null ? void 0 : _c.typeName) !== void 0 && (t3[e3 + `:typeName`] = a2[n2(333)].typeName);
    }
  }
  _buildGeomPrimitive(e2, t3, n2) {
    let r2 = R, i2 = this[r2(369)](e2), o2 = e2.split(`/`).pop(), s2;
    switch (n2) {
      case `Cube`: {
        let e3 = i2.size || 2;
        s2 = new l(e3, e3, e3);
        break;
      }
      case `Sphere`:
        s2 = new O(i2.radius || 1, 32, 16);
        break;
      case r2(447): {
        let e3 = i2.height || 2, t4 = i2.radius || 1;
        s2 = new a(t4, t4, e3, 32);
        break;
      }
      case `Cone`: {
        let e3 = i2[r2(374)] || 2;
        s2 = new m(i2[r2(469)] || 1, e3, 32);
        break;
      }
      case `Capsule`: {
        let e3 = i2.height || 1;
        s2 = new j(i2.radius || 0.5, e3, 16, 32);
        break;
      }
    }
    let c2 = i2.axis || `Z`;
    c2 === `X` ? s2.rotateZ(-Math.PI / 2) : c2 === `Z` && s2.rotateX(Math.PI / 2);
    let u2 = this._buildMaterial(e2, t3.fields), d2 = new E(s2, u2);
    return d2.name = o2, this.applyTransform(d2, t3[r2(333)], i2), d2;
  }
  _buildMesh(e2, t3) {
    let n2 = R, r2 = this._getAttributes(e2), i2 = r2[`primvars:skel:jointIndices`], a2 = r2[`primvars:skel:jointWeights`], o2 = i2 && a2 && i2[n2(430)] > 0 && a2.length > 0, s2 = this._getGeomSubsets(e2), c2, l2;
    if (s2.length > 0) {
      c2 = this._buildGeometryWithSubsets(r2, s2, o2);
      let n3 = this._getMaterialPath(e2, t3.fields);
      l2 = s2.map((e3) => {
        let t4 = e3.materialPath || n3;
        return this._buildMaterialForPath(t4);
      });
    } else c2 = this._buildGeometry(e2, r2, o2), l2 = this._buildMaterial(e2, t3.fields);
    let u2 = r2[`primvars:displayColor`];
    if (u2 && u2[n2(430)] >= 3) {
      let e3 = (e4) => {
        let t4 = n2;
        e4.color && e4.color.r === 1 && e4.color.g === 1 && e4[t4(541)].b === 1 && !e4.map && e4.color.setRGB(u2[0], u2[1], u2[2], `srgb`);
      };
      Array[n2(336)](l2) ? l2[n2(527)](e3) : e3(l2);
    }
    let d2 = r2[`primvars:displayOpacity`];
    if (d2 && d2.length === 1 && s2[n2(430)] === 0) {
      let e3 = d2[0], t4 = (t5) => {
        e3 < 1 && t5.opacity === 1 && t5.transparent === false && (t5.opacity = e3, t5.transparent = true);
      };
      Array[n2(336)](l2) ? l2.forEach(t4) : t4(l2);
    }
    let p2;
    if (o2) {
      p2 = new f(c2, l2);
      let t4 = this.specsByPath[e2 + `.skel:skeleton`];
      t4 || (t4 = this.specsByPath[e2 + `.rel skel:skeleton`]);
      let i3 = null;
      t4 && (t4.fields.targetPaths && t4.fields[n2(467)].length > 0 ? i3 = t4.fields.targetPaths[0] : t4.fields.default && (i3 = t4[n2(333)].default.replace(/<|>/g, ``)));
      let a3 = r2[`skel:joints`], o3 = r2[n2(496)];
      this.skinnedMeshes.push({ mesh: p2, skeletonPath: i3, path: e2, localJoints: a3, geomBindTransform: o3 });
    } else p2 = new E(c2, l2);
    return p2.name = e2[n2(521)](`/`).pop(), this[n2(538)](p2, t3.fields, r2), p2;
  }
  _buildCamera(e2) {
    let t3 = R, n2 = this[t3(369)](e2), r2 = n2.projection, a2 = typeof r2 == `string` ? r2[t3(406)]() : Z.projection, o2 = n2.clippingRange || Z[t3(432)], s2 = Math.max(2 ** -52, this[t3(579)](o2[0], Z.clippingRange[0])), c2 = Math.max(s2 + Number[t3(392)], this._parseNumber(o2[1], Z.clippingRange[1])), l2 = this._parseNumber(n2.horizontalAperture, Z.horizontalAperture), u2 = this[t3(579)](n2.verticalAperture, Z.verticalAperture), d2 = this._parseNumber(n2.horizontalApertureOffset, Z[t3(409)]), f2 = this[t3(579)](n2[t3(413)], Z.verticalApertureOffset), p2 = this._parseNumber(n2[t3(414)], Z.focalLength), m2 = this._parseNumber(n2.focusDistance, Z[t3(492)]), h2 = this._parseNumber(n2.fStop, Z[t3(568)]), g2;
    if (a2 === `orthographic`) {
      let e3 = l2 / 10, t4 = u2 / 10, n3 = d2 / 10, r3 = f2 / 10;
      g2 = new i(n3 - e3 * 0.5, n3 + e3 * 0.5, r3 + t4 * 0.5, r3 - t4 * 0.5, s2, c2);
    } else {
      let e3 = Math.max(2 ** -52, u2), n3 = Math.max(2 ** -52, p2), r3 = l2 / e3;
      g2 = new N(2 * Math.atan(e3 / (2 * n3)) * 180 / Math.PI, r3, s2, c2), g2.filmGauge = Math[t3(531)](l2, u2), g2.filmOffset = d2, g2.focus = m2, g2[t3(558)](n3), f2 !== 0 && (g2.userData.verticalApertureOffset = f2);
    }
    return g2.userData.fStop = h2, g2[t3(512)].usdProjection = a2, g2;
  }
  _buildLight(e2, t3) {
    let n2 = R, r2 = this._getAttributes(e2), i2 = this._parseNumber(r2[`inputs:intensity`], 1), a2 = r2[n2(457)] || [1, 1, 1], s2 = r2[`inputs:enableColorTemperature`] === true, c2 = this._parseNumber(r2[`inputs:colorTemperature`], 6500), l2 = new o(a2[0], a2[1], a2[2]);
    if (s2) {
      let e3 = this._colorTemperature(c2);
      l2.multiply(e3);
    }
    let u2;
    switch (t3) {
      case `DistantLight`:
        u2 = new T(l2, i2);
        break;
      case `SphereLight`: {
        let e3 = this._parseNumber(r2[`shaping:cone:angle`], 0);
        u2 = e3 > 0 ? new d(l2, i2, 0, e3 * Math.PI / 180, this._parseNumber(r2[`shaping:cone:softness`], 0)) : new I(l2, i2);
        break;
      }
      case `RectLight`:
        u2 = new C(l2, i2, this._parseNumber(r2[n2(402)], 1), this._parseNumber(r2[`inputs:height`], 1));
        break;
      case `DiskLight`: {
        let e3 = this._parseNumber(r2[`inputs:radius`], 0.5) * 2;
        u2 = new C(l2, i2, e3, e3);
        break;
      }
    }
    return u2;
  }
  _colorTemperature(e2) {
    let t3 = e2 / 100, n2, r2, i2;
    return t3 <= 66 ? (n2 = 1, r2 = 0.3900815787690196 * Math.log(t3) - 0.6318414437886275) : (n2 = 1.292936186062745 * (t3 - 60) ** -0.1332047592, r2 = 1.1298908608952942 * (t3 - 60) ** -0.0755148492), i2 = t3 >= 66 ? 1 : t3 <= 19 ? 0 : 0.543206789110196 * Math.log(t3 - 10) - 1.19625408914, new o(Math.min(Math.max(n2, 0), 1), Math.min(Math.max(r2, 0), 1), Math.min(Math.max(i2, 0), 1));
  }
  _parseNumber(e2, t3) {
    let n2 = Number(e2);
    return Number.isFinite(n2) ? n2 : t3;
  }
  _getGeomSubsets(e2) {
    let t3 = [], n2 = this.geomSubsetsByMeshPath.get(e2);
    if (!n2) return t3;
    for (let e3 of n2) {
      let n3 = this._getAttributes(e3).indices;
      if (!n3 || n3.length === 0) continue;
      let r2 = this._getMaterialBindingTarget(e3);
      t3.push({ name: e3.split(`/`).pop(), indices: n3, materialPath: r2 });
    }
    return t3;
  }
  _getMaterialBindingTarget(e2) {
    let t3 = R;
    var n2;
    let r2 = e2 + `.material:binding`, i2 = this.specsByPath[r2];
    if ((i2 == null || (n2 = i2.fields) == null || (n2 = n2.targetPaths) == null ? void 0 : n2.length) > 0) return i2.fields.targetPaths[0];
    let a2 = e2.split(`/`);
    for (let e3 = 1; e3 < a2.length; e3++) {
      let n3 = a2.slice(0, e3 + 1).join(`/`), r3 = a2.slice(e3 + 1).join(`/`), i3 = this._getVariantPaths(n3);
      for (let e4 of i3) {
        var o2;
        let n4 = r3 ? e4 + `/` + r3 + `.material:binding` : e4 + t3(351), i4 = this[t3(372)][n4];
        if ((i4 == null || (o2 = i4.fields) == null || (o2 = o2.targetPaths) == null ? void 0 : o2.length) > 0) return i4.fields.targetPaths[0];
      }
    }
    return null;
  }
  [R(501)](e2, t3, n2 = false) {
    let i2 = R, a2 = new r(), o2 = t3.points;
    if (!o2 || o2.length === 0) return a2;
    let s2 = t3.faceVertexIndices, c2 = t3.faceVertexCounts, l2 = t3[`primvars:arnold:polygon_holes`], u2 = this._buildHoleMap(l2), d2 = s2, f2 = null;
    if (c2 && c2.length > 0) {
      let e3 = this[i2(415)](s2, c2, o2, u2);
      d2 = e3.indices, f2 = e3.pattern;
    }
    let p2 = o2;
    d2 && d2.length > 0 && (p2 = this._expandAttribute(o2, d2, 3)), a2.setAttribute(`position`, new D(new Float32Array(p2), 3));
    let m2 = t3.normals || t3[`primvars:normals`], h2 = t3[i2(554)] || t3[`primvars:normals:indices`];
    if (m2 && m2.length > 0) {
      let e3 = m2;
      if (h2 && h2.length > 0 && f2) {
        let t4 = this[i2(356)](h2, f2);
        e3 = this._expandAttribute(m2, t4, 3);
      } else if (m2.length === o2.length) d2 && d2.length > 0 && (e3 = this._expandAttribute(m2, d2, 3));
      else if (f2) {
        let t4 = this[i2(356)](Array.from({ length: m2.length / 3 }, (e4, t5) => t5), f2);
        e3 = this._expandAttribute(m2, t4, 3);
      }
      a2.setAttribute(`normal`, new D(new Float32Array(e3), 3));
    } else {
      let e3 = this._computeVertexNormals(o2, d2);
      a2.setAttribute(`normal`, new D(new Float32Array(this._expandAttribute(e3, d2, 3)), 3));
    }
    let { uvs: g2, uvIndices: _2 } = this._findUVPrimvar(t3), v2 = s2 ? s2.length : 0;
    if (g2 && g2[i2(430)] > 0) {
      let e3 = g2;
      if (_2 && _2.length > 0 && f2) {
        let t4 = this._applyTriangulationPattern(_2, f2);
        e3 = this._expandAttribute(g2, t4, 2);
      } else if (d2 && g2.length / 2 == o2.length / 3) e3 = this._expandAttribute(g2, d2, 2);
      else if (f2 && g2[i2(430)] / 2 === v2) {
        let t4 = this._applyTriangulationPattern(Array.from({ length: v2 }, (e4, t5) => t5), f2);
        e3 = this._expandAttribute(g2, t4, 2);
      }
      a2.setAttribute(`uv`, new D(new Float32Array(e3), 2));
    }
    let { uvs2: y2, uv2Indices: b2 } = this._findUV2Primvar(t3);
    if (y2 && y2.length > 0) {
      let e3 = y2;
      if (b2 && b2.length > 0 && f2) {
        let t4 = this._applyTriangulationPattern(b2, f2);
        e3 = this[i2(339)](y2, t4, 2);
      } else if (d2 && y2.length / 2 == o2.length / 3) e3 = this._expandAttribute(y2, d2, 2);
      else if (f2 && y2.length / 2 === v2) {
        let t4 = this[i2(356)](Array.from({ length: v2 }, (e4, t5) => t5), f2);
        e3 = this._expandAttribute(y2, t4, 2);
      }
      a2.setAttribute(`uv1`, new D(new Float32Array(e3), 2));
    }
    if (n2) {
      let e3 = t3[`primvars:skel:jointIndices`], n3 = t3[i2(506)], r2 = t3[`primvars:skel:jointIndices:elementSize`] || 4;
      if (e3 && n3) {
        let t4 = p2[i2(430)] / 3, o3, s3;
        d2 && d2[i2(430)] > 0 ? (o3 = this._expandAttribute(e3, d2, r2), s3 = this._expandAttribute(n3, d2, r2)) : (o3 = e3, s3 = n3);
        let c3 = new Uint16Array(t4 * 4), l3 = new Float32Array(t4 * 4);
        this._selectTopWeights(o3, s3, r2, t4, c3, l3), a2.setAttribute(`skinIndex`, new D(c3, 4)), a2[i2(486)](`skinWeight`, new D(l3, 4));
      }
    }
    return a2;
  }
  _buildGeometryWithSubsets(e2, t3, n2 = false) {
    let i2 = R, a2 = new r(), o2 = e2.points;
    if (!o2 || o2[i2(430)] === 0) return a2;
    let s2 = e2.faceVertexIndices, c2 = e2.faceVertexCounts;
    if (!c2 || c2.length === 0) return a2;
    let l2 = e2[`primvars:arnold:polygon_holes`], u2 = this._buildHoleMap(l2), d2 = u2.holeFaces, f2 = u2.parentToHoles, { uvs: p2, uvIndices: m2 } = this[i2(529)](e2), { uvs2: h2, uv2Indices: g2 } = this._findUV2Primvar(e2), _2 = e2.normals || e2[`primvars:normals`], v2 = e2[`normals:indices`] || e2[`primvars:normals:indices`], y2 = n2 ? e2[i2(465)] : null, b2 = n2 ? e2[`primvars:skel:jointWeights`] : null, x2 = e2[`primvars:skel:jointIndices:elementSize`] || 4, S2 = [], C2 = 0;
    for (let e3 = 0; e3 < c2.length; e3++) {
      if (S2.push(C2), d2.has(e3)) continue;
      let t4 = c2[e3], n3 = f2.get(e3);
      if (n3 && n3.length > 0) {
        let e4 = t4;
        for (let t5 of n3) e4 += c2[t5];
        C2 += e4 - 2;
      } else t4 >= 3 && (C2 += t4 - 2);
    }
    let w2 = new Int32Array(C2)[i2(417)](-1);
    for (let e3 = 0; e3 < t3.length; e3++) {
      let n3 = t3[e3];
      for (let t4 = 0; t4 < n3.indices[i2(430)]; t4++) {
        let r2 = n3.indices[t4];
        if (r2 >= c2[i2(430)]) continue;
        let a3 = S2[r2], o3 = c2[r2] - 2;
        for (let t5 = 0; t5 < o3; t5++) w2[a3 + t5] = e3;
      }
    }
    let T2 = [];
    for (let e3 = 0; e3 < C2; e3++) T2[i2(460)]({ original: e3, subset: w2[e3] });
    T2.sort((e3, t4) => e3[i2(511)] - t4.subset);
    let E2 = [], O2 = T2[i2(430)] > 0 ? T2[0].subset : -1, k2 = 0;
    for (let e3 = 0; e3 < T2.length; e3++) T2[e3].subset !== O2 && (O2 >= 0 && E2.push({ start: k2 * 3, count: (e3 - k2) * 3, materialIndex: O2 }), O2 = T2[e3].subset, k2 = e3);
    O2 >= 0 && T2.length > k2 && E2.push({ start: k2 * 3, count: (T2.length - k2) * 3, materialIndex: O2 });
    for (let e3 of E2) a2.addGroup(e3.start, e3[i2(449)], e3[i2(441)]);
    let { indices: A2, pattern: j2 } = this._triangulateIndicesWithPattern(s2, c2, o2, u2), M2 = c2.reduce((e3, t4) => e3 + t4, 0), ee2 = p2 && !m2 && p2.length / 2 === M2 || h2 && !g2 && h2.length / 2 === M2 ? this._applyTriangulationPattern(Array[i2(342)]({ length: M2 }, (e3, t4) => t4), j2) : null, N2 = m2 ? this._applyTriangulationPattern(m2, j2) : p2 && p2.length / 2 === M2 ? ee2 : null, P2 = g2 ? this[i2(356)](g2, j2) : h2 && h2.length / 2 === M2 ? ee2 : null, te2 = _2 && v2 && v2.length > 0, F2 = _2 && _2.length / 3 === M2, I2 = te2 ? this._applyTriangulationPattern(v2, j2) : F2 ? this[i2(356)](Array.from({ length: M2 }, (e3, t4) => t4), j2) : null, L2 = !_2 && A2.length > 0 ? this._computeVertexNormals(o2, A2) : null, z2 = C2 * 3, B2 = new Float32Array(z2 * 3), V2 = p2 ? new Float32Array(z2 * 2) : null, H2 = h2 ? new Float32Array(z2 * 2) : null, U2 = _2 || L2 ? new Float32Array(z2 * 3) : null, W2 = y2 ? new Uint16Array(z2 * x2) : null, G2 = b2 ? new Float32Array(z2 * x2) : null;
    for (let e3 = 0; e3 < T2[i2(430)]; e3++) {
      let t4 = T2[e3][i2(461)];
      for (let n3 = 0; n3 < 3; n3++) {
        let r2 = t4 * 3 + n3, a3 = e3 * 3 + n3, s3 = A2[r2];
        if (B2[a3 * 3] = o2[s3 * 3], B2[a3 * 3 + 1] = o2[s3 * 3 + 1], B2[a3 * 3 + 2] = o2[s3 * 3 + 2], V2 && p2) if (N2) {
          let e4 = N2[r2];
          V2[a3 * 2] = p2[e4 * 2], V2[a3 * 2 + 1] = p2[e4 * 2 + 1];
        } else p2.length / 2 == o2[i2(430)] / 3 && (V2[a3 * 2] = p2[s3 * 2], V2[a3 * 2 + 1] = p2[s3 * 2 + 1]);
        if (H2 && h2) if (P2) {
          let e4 = P2[r2];
          H2[a3 * 2] = h2[e4 * 2], H2[a3 * 2 + 1] = h2[e4 * 2 + 1];
        } else h2.length / 2 == o2[i2(430)] / 3 && (H2[a3 * 2] = h2[s3 * 2], H2[a3 * 2 + 1] = h2[s3 * 2 + 1]);
        if (U2) if (_2 && I2) {
          let e4 = I2[r2];
          U2[a3 * 3] = _2[e4 * 3], U2[a3 * 3 + 1] = _2[e4 * 3 + 1], U2[a3 * 3 + 2] = _2[e4 * 3 + 2];
        } else _2 && _2[i2(430)] === o2.length ? (U2[a3 * 3] = _2[s3 * 3], U2[a3 * 3 + 1] = _2[s3 * 3 + 1], U2[a3 * 3 + 2] = _2[s3 * 3 + 2]) : L2 && (U2[a3 * 3] = L2[s3 * 3], U2[a3 * 3 + 1] = L2[s3 * 3 + 1], U2[a3 * 3 + 2] = L2[s3 * 3 + 2]);
        if (W2 && G2 && y2 && b2) for (let e4 = 0; e4 < x2; e4++) W2[a3 * x2 + e4] = y2[s3 * x2 + e4] || 0, G2[a3 * x2 + e4] = b2[s3 * x2 + e4] || 0;
      }
    }
    if (a2.setAttribute(i2(520), new D(B2, 3)), V2 && a2.setAttribute(`uv`, new D(V2, 2)), H2 && a2.setAttribute(`uv1`, new D(H2, 2)), a2.setAttribute(i2(456), new D(U2, 3)), W2 && G2) {
      let e3 = new Uint16Array(z2 * 4), t4 = new Float32Array(z2 * 4);
      this._selectTopWeights(W2, G2, x2, z2, e3, t4), a2.setAttribute(`skinIndex`, new D(e3, 4)), a2.setAttribute(`skinWeight`, new D(t4, 4));
    }
    return a2;
  }
  _selectTopWeights(e2, t3, n2, r2, i2, a2) {
    if (n2 <= 4) {
      for (let o3 = 0; o3 < r2; o3++) for (let r3 = 0; r3 < 4; r3++) r3 < n2 ? (i2[o3 * 4 + r3] = e2[o3 * n2 + r3] || 0, a2[o3 * 4 + r3] = t3[o3 * n2 + r3] || 0) : (i2[o3 * 4 + r3] = 0, a2[o3 * 4 + r3] = 0);
      return;
    }
    let o2 = new Uint32Array(n2);
    for (let s2 = 0; s2 < r2; s2++) {
      let r3 = s2 * n2;
      for (let e3 = 0; e3 < n2; e3++) o2[e3] = e3;
      for (let e3 = 0; e3 < 4; e3++) {
        let i3 = e3, a3 = t3[r3 + o2[e3]] || 0;
        for (let s3 = e3 + 1; s3 < n2; s3++) {
          let e4 = t3[r3 + o2[s3]] || 0;
          e4 > a3 && (a3 = e4, i3 = s3);
        }
        if (i3 !== e3) {
          let t4 = o2[e3];
          o2[e3] = o2[i3], o2[i3] = t4;
        }
      }
      let c2 = 0;
      for (let e3 = 0; e3 < 4; e3++) c2 += t3[r3 + o2[e3]] || 0;
      for (let n3 = 0; n3 < 4; n3++) {
        let l2 = o2[n3];
        c2 > 0 ? (i2[s2 * 4 + n3] = e2[r3 + l2] || 0, a2[s2 * 4 + n3] = (t3[r3 + l2] || 0) / c2) : (i2[s2 * 4 + n3] = 0, a2[s2 * 4 + n3] = 0);
      }
    }
  }
  _findUVPrimvar(e2) {
    let t3 = R;
    for (let n2 in e2) {
      if (!n2[t3(484)](`primvars:`) || n2.endsWith(`:typeName`) || n2.endsWith(`:elementSize`) || n2.endsWith(`:indices`) || n2.includes(`skel:`)) continue;
      let r2 = e2[n2 + t3(575)];
      if (r2 && r2.includes(`texCoord`)) return { uvs: e2[n2], uvIndices: e2[n2 + `:indices`] };
    }
    return { uvs: e2[`primvars:st`] || e2[t3(368)], uvIndices: e2[`primvars:st:indices`] };
  }
  _findUV2Primvar(e2) {
    return { uvs2: e2[R(561)], uv2Indices: e2[`primvars:st1:indices`] };
  }
  _buildHoleMap(e2) {
    if (!e2 || e2.length === 0) return { parentToHoles: /* @__PURE__ */ new Map(), holeFaces: /* @__PURE__ */ new Set() };
    let t3 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set();
    for (let r2 = 0; r2 < e2.length; r2 += 2) {
      let i2 = e2[r2], a2 = e2[r2 + 1];
      n2.add(i2), t3.has(a2) || t3.set(a2, []), t3.get(a2).push(i2);
    }
    return { parentToHoles: t3, holeFaces: n2 };
  }
  _triangulateIndicesWithPattern(e2, t3, n2 = null, r2 = null) {
    let i2 = R, a2 = [], o2 = [], s2 = [], c2 = 0;
    for (let e3 = 0; e3 < t3[i2(430)]; e3++) s2.push(c2), c2 += t3[e3];
    let l2 = (r2 == null ? void 0 : r2.parentToHoles) || /* @__PURE__ */ new Map(), u2 = (r2 == null ? void 0 : r2.holeFaces) || /* @__PURE__ */ new Set(), d2 = 0;
    for (let r3 = 0; r3 < t3.length; r3++) {
      let c3 = t3[r3];
      if (u2.has(r3)) {
        d2 += c3;
        continue;
      }
      let f2 = l2.get(r3);
      if (f2 && f2.length > 0 && n2 && n2.length > 0) {
        let r4 = /* @__PURE__ */ new Map(), i3 = [];
        for (let t4 = 0; t4 < c3; t4++) {
          let n3 = e2[d2 + t4];
          i3.push(n3), r4.set(n3, d2 + t4);
        }
        let l3 = [];
        for (let n3 of f2) {
          let i4 = s2[n3], a3 = t3[n3], o3 = [];
          for (let t4 = 0; t4 < a3; t4++) {
            let n4 = e2[i4 + t4];
            o3.push(n4), r4.set(n4, i4 + t4);
          }
          l3.push(o3);
        }
        let u3 = this._triangulateNGonWithHoles(i3, l3, n2);
        for (let e3 of u3) a2.push(e3[0], e3[1], e3[2]), o2.push(r4.get(e3[0]), r4.get(e3[1]), r4.get(e3[2]));
      } else if (c3 === 3) a2.push(e2[d2], e2[d2 + 1], e2[d2 + 2]), o2[i2(460)](d2, d2 + 1, d2 + 2);
      else if (c3 === 4) a2.push(e2[d2], e2[d2 + 1], e2[d2 + 2], e2[d2], e2[d2 + 2], e2[d2 + 3]), o2.push(d2, d2 + 1, d2 + 2, d2, d2 + 2, d2 + 3);
      else if (c3 > 4) if (n2 && n2.length > 0) {
        let t4 = [];
        for (let n3 = 0; n3 < c3; n3++) t4.push(e2[d2 + n3]);
        let r4 = this._triangulateNGon(t4, n2);
        for (let e3 of r4) a2.push(e3[0], e3[1], e3[2]), o2.push(d2 + t4.indexOf(e3[0]), d2 + t4.indexOf(e3[1]), d2 + t4.indexOf(e3[2]));
      } else for (let t4 = 1; t4 < c3 - 1; t4++) a2.push(e2[d2], e2[d2 + t4], e2[d2 + t4 + 1]), o2[i2(460)](d2, d2 + t4, d2 + t4 + 1);
      d2 += c3;
    }
    return { indices: a2, pattern: o2 };
  }
  _applyTriangulationPattern(e2, t3) {
    let n2 = R, r2 = [];
    for (let i2 = 0; i2 < t3[n2(430)]; i2++) r2[n2(460)](e2[t3[i2]]);
    return r2;
  }
  _triangulateNGon(e2, t3) {
    let n2 = R, r2 = [], i2 = [];
    for (let r3 of e2) i2[n2(460)](new b(t3[r3 * 3], t3[r3 * 3 + 1], t3[r3 * 3 + 2]));
    let a2 = new b();
    for (let e3 = 0; e3 < i2[n2(430)]; e3++) {
      let t4 = i2[e3], n3 = i2[(e3 + 1) % i2.length];
      a2.x += (t4.y - n3.y) * (t4.z + n3.z), a2.y += (t4.z - n3.z) * (t4.x + n3.x), a2.z += (t4.x - n3.x) * (t4.y + n3.y);
    }
    a2.normalize();
    let o2 = new b(), c2 = new b();
    Math.abs(a2.y) > 0.9 ? o2.set(1, 0, 0) : o2.set(0, 1, 0), c2.crossVectors(a2, o2).normalize(), o2.crossVectors(c2, a2).normalize();
    for (let e3 of i2) r2.push(new s(e3[n2(577)](o2), e3.dot(c2)));
    let l2 = w.triangulateShape(r2, []), u2 = [];
    for (let t4 of l2) u2.push([e2[t4[0]], e2[t4[1]], e2[t4[2]]]);
    return u2;
  }
  [R(340)](e2, t3, n2) {
    let r2 = R, i2 = [];
    for (let t4 of e2) i2[r2(460)](new b(n2[t4 * 3], n2[t4 * 3 + 1], n2[t4 * 3 + 2]));
    let a2 = new b();
    for (let e3 = 0; e3 < i2.length; e3++) {
      let t4 = i2[e3], n3 = i2[(e3 + 1) % i2.length];
      a2.x += (t4.y - n3.y) * (t4.z + n3.z), a2.y += (t4.z - n3.z) * (t4.x + n3.x), a2.z += (t4.x - n3.x) * (t4.y + n3.y);
    }
    a2.normalize();
    let o2 = new b(), c2 = new b();
    Math.abs(a2.y) > 0.9 ? o2.set(1, 0, 0) : o2.set(0, 1, 0), c2.crossVectors(a2, o2).normalize(), o2.crossVectors(c2, a2).normalize();
    let l2 = [];
    for (let e3 of i2) l2.push(new s(e3.dot(o2), e3[r2(577)](c2)));
    let u2 = [];
    for (let e3 of t3) {
      let t4 = [];
      for (let i3 of e3) {
        let e4 = new b(n2[i3 * 3], n2[i3 * 3 + 1], n2[i3 * 3 + 2]);
        t4.push(new s(e4[r2(577)](o2), e4[r2(577)](c2)));
      }
      u2.push(t4);
    }
    let d2 = [...e2];
    for (let e3 of t3) d2.push(...e3);
    let f2 = w.triangulateShape(l2, u2), p2 = [];
    for (let e3 of f2) p2.push([d2[e3[0]], d2[e3[1]], d2[e3[2]]]);
    return p2;
  }
  _triangulateIndices(e2, t3) {
    let n2 = R, r2 = [], i2 = 0;
    for (let a2 = 0; a2 < t3.length; a2++) {
      let o2 = t3[a2];
      if (o2 === 3) r2[n2(460)](e2[i2], e2[i2 + 1], e2[i2 + 2]);
      else if (o2 === 4) r2.push(e2[i2], e2[i2 + 1], e2[i2 + 2], e2[i2], e2[i2 + 2], e2[i2 + 3]);
      else if (o2 > 4) for (let t4 = 1; t4 < o2 - 1; t4++) r2.push(e2[i2], e2[i2 + t4], e2[i2 + t4 + 1]);
      i2 += o2;
    }
    return r2;
  }
  [R(339)](e2, t3, n2) {
    let r2 = Array(t3.length * n2);
    for (let i2 = 0; i2 < t3.length; i2++) {
      let a2 = t3[i2];
      for (let t4 = 0; t4 < n2; t4++) r2[i2 * n2 + t4] = e2[a2 * n2 + t4];
    }
    return r2;
  }
  _computeVertexNormals(e2, t3) {
    let n2 = R, r2 = e2.length / 3, i2 = new Float32Array(r2 * 3);
    for (let n3 = 0; n3 < t3.length; n3 += 3) {
      let r3 = t3[n3], a2 = t3[n3 + 1], o2 = t3[n3 + 2], s2 = e2[r3 * 3], c2 = e2[r3 * 3 + 1], l2 = e2[r3 * 3 + 2], u2 = e2[a2 * 3], d2 = e2[a2 * 3 + 1], f2 = e2[a2 * 3 + 2], p2 = e2[o2 * 3], m2 = e2[o2 * 3 + 1], h2 = e2[o2 * 3 + 2], g2 = u2 - s2, _2 = d2 - c2, v2 = f2 - l2, y2 = p2 - s2, b2 = m2 - c2, x2 = h2 - l2, S2 = _2 * x2 - v2 * b2, C2 = v2 * y2 - g2 * x2, w2 = g2 * b2 - _2 * y2;
      i2[r3 * 3] += S2, i2[r3 * 3 + 1] += C2, i2[r3 * 3 + 2] += w2, i2[a2 * 3] += S2, i2[a2 * 3 + 1] += C2, i2[a2 * 3 + 2] += w2, i2[o2 * 3] += S2, i2[o2 * 3 + 1] += C2, i2[o2 * 3 + 2] += w2;
    }
    for (let e3 = 0; e3 < r2; e3++) {
      let t4 = i2[e3 * 3], r3 = i2[e3 * 3 + 1], a2 = i2[e3 * 3 + 2], o2 = Math[n2(365)](t4 * t4 + r3 * r3 + a2 * a2);
      o2 > 0 && (i2[e3 * 3] /= o2, i2[e3 * 3 + 1] /= o2, i2[e3 * 3 + 2] /= o2);
    }
    return i2;
  }
  _getMaterialPath(e2, t3) {
    let n2 = null, r2 = t3[`material:binding`];
    return r2 && (n2 = Array.isArray(r2) ? r2[0] : r2), n2 || (n2 = this._getMaterialBindingTarget(e2)), n2;
  }
  _buildMaterial(e2, t3) {
    let n2 = R, r2 = new _(), i2 = null, a2 = t3[n2(425)];
    if (a2 && (i2 = Array.isArray(a2) ? a2[0] : a2), i2 || (i2 = this._getMaterialBindingTarget(e2)), !i2) {
      let t4 = [], r3 = e2 + `/`;
      for (let e3 in this.specsByPath) {
        if (!e3.startsWith(r3) || !e3.endsWith(`.material:binding`)) continue;
        let i3 = this.specsByPath[e3];
        if (!i3) continue;
        let a3 = i3.fields.targetPaths;
        a3 && a3[n2(430)] > 0 && t4.push(a3[0]);
      }
      t4[n2(430)] > 0 && (i2 = this[n2(503)](t4));
    }
    if (!i2) {
      let t4 = `/` + e2.split(`/`)[1], r3 = this.materialsByRoot.get(t4);
      if (r3) {
        for (let e3 of r3) if (e3.startsWith(t4 + n2(556)) || e3.startsWith(t4 + `/Materials/`)) {
          i2 = e3;
          break;
        }
      }
    }
    return i2 && this._applyMaterial(r2, i2), r2;
  }
  _buildMaterialForPath(e2) {
    let t3 = new _();
    return e2 && this._applyMaterial(t3, e2), t3;
  }
  _applyMaterialBinding(e2, t3) {
    var _a, _b;
    let n2 = R, r2 = t3 + `.material:binding`, i2 = this.specsByPath[r2];
    if (!i2) return;
    let a2 = null, o2 = ((_a = i2.fields) == null ? void 0 : _a.targetPaths) || ((_b = i2[n2(333)]) == null ? void 0 : _b.default);
    if (o2 && (a2 = Array.isArray(o2) ? o2[0] : o2), !a2) return;
    a2 = String(a2).replace(/^<|>$/g, ``);
    let s2 = new _();
    this._applyMaterial(s2, a2), e2.material = s2;
  }
  [R(503)](e2) {
    for (let t3 of e2) {
      let e3 = this.shadersByMaterialPath.get(t3);
      if (e3) for (let n2 of e3) {
        let e4 = this._getAttributes(n2);
        if (e4[`info:id`] === `UsdUVTexture` && e4[`inputs:file`]) return t3;
      }
    }
    return e2[0];
  }
  _applyMaterial(e2, t3) {
    let n2 = R;
    if (!this.specsByPath[t3]) return;
    let r2 = this.shadersByMaterialPath.get(t3);
    if (r2) for (let t4 of r2) {
      let r3 = this.specsByPath[t4];
      if (!r3) continue;
      let i2 = this[n2(369)](t4)[`info:id`] || r3.fields[`info:id`];
      i2 === `UsdPreviewSurface` || i2 === n2(552) ? this[n2(405)](e2, t4) : i2 === n2(455) && this._applyOpenPBRSurface(e2, t4);
    }
  }
  _applyTextureOrValue(e2, t3, n2, r2, i2, a2, o2, s2) {
    let c2 = R, l2 = t3 + `.` + r2, u2 = this.specsByPath[l2];
    if (u2 && u2[c2(333)].connectionPaths && u2.fields.connectionPaths.length > 0) {
      let t4 = s2 === this._getTextureFromOpenPBRConnection ? u2.fields.connectionPaths : [u2.fields.connectionPaths[0]];
      for (let n3 of t4) {
        let t5 = s2.call(this, n3);
        if (t5) return t5.colorSpace = a2, e2[i2] = t5, true;
      }
    }
    return n2[r2] !== void 0 && o2 && o2(n2[r2]), false;
  }
  _applyPreviewSurface(e2, t3) {
    let n2 = R;
    var r2;
    let i2 = this._getAttributes(t3), a2 = (r3, a3, o3, s2) => this._applyTextureOrValue(e2, t3, i2, r3, a3, o3, s2, this[n2(539)]), o2 = (e3) => {
      let n3 = t3 + `.` + e3;
      return this.specsByPath[n3];
    };
    if (a2(n2(578), `map`, `srgb`, (t4) => {
      let r3 = n2;
      Array[r3(336)](t4) && t4.length >= 3 && e2.color[r3(475)](t4[0], t4[1], t4[2], `srgb`);
    }), e2.map && e2[n2(352)][n2(512)].scale) {
      let t4 = e2.map.userData.scale;
      Array[n2(336)](t4) && t4.length >= 3 && e2[n2(541)].setRGB(t4[0], t4[1], t4[2], `srgb`);
    }
    if (a2(`inputs:emissiveColor`, `emissiveMap`, `srgb`, (t4) => {
      Array.isArray(t4) && t4.length >= 3 && e2.emissive.setRGB(t4[0], t4[1], t4[2], `srgb`);
    }), e2[n2(499)]) if (e2.emissiveMap[n2(512)].scale) {
      let t4 = e2.emissiveMap.userData.scale;
      Array.isArray(t4) && t4.length >= 3 && e2.emissive.setRGB(t4[0], t4[1], t4[2], `srgb`);
    } else e2.emissive[n2(446)](16777215);
    if (a2(`inputs:normal`, `normalMap`, ``, null), e2[n2(346)] && e2.normalMap.userData[n2(508)]) {
      let t4 = e2.normalMap.userData.scale;
      e2.normalScale = new s(t4[0], t4[1]);
    }
    if (a2(n2(354), `roughnessMap`, ``, (t4) => {
      e2.roughness = t4;
    }) && (e2.roughness = 1), a2(n2(412), `metalnessMap`, ``, (t4) => {
      e2.metalness = t4;
    }) && (e2[n2(546)] = 1), a2(n2(476), `aoMap`, ``, null), i2[`inputs:ior`] !== void 0 && (e2.ior = i2[`inputs:ior`]), a2(`inputs:specularColor`, `specularColorMap`, `srgb`, (t4) => {
      Array.isArray(t4) && t4.length >= 3 && e2.specularColor.setRGB(t4[0], t4[1], t4[2], `srgb`);
    }), e2.specularColorMap && e2[n2(381)].userData.scale) {
      let t4 = e2[n2(381)].userData[n2(508)];
      Array.isArray(t4) && t4.length >= 3 && e2.specularColor.setRGB(t4[0], t4[1], t4[2], `srgb`);
    }
    i2[`inputs:clearcoat`] !== void 0 && (e2.clearcoat = i2[`inputs:clearcoat`]), i2[`inputs:clearcoatRoughness`] !== void 0 && (e2.clearcoatRoughness = i2[`inputs:clearcoatRoughness`]);
    let c2 = i2[`inputs:opacityThreshold`] === void 0 ? 0 : i2[`inputs:opacityThreshold`], l2 = o2(n2(570));
    if ((l2 == null || (r2 = l2[n2(333)]) == null || (r2 = r2.connectionPaths) == null ? void 0 : r2.length) > 0) c2 > 0 ? (e2.alphaTest = c2, e2.transparent = false) : e2.transparent = true;
    else {
      let t4 = i2[n2(570)] === void 0 ? 1 : i2[`inputs:opacity`];
      t4 < 1 && (e2.transparent = true, e2.opacity = t4);
    }
  }
  [R(431)](e2, t3) {
    let n2 = R, r2 = this._getAttributes(t3), i2 = (n3, i3, a3, o3) => this._applyTextureOrValue(e2, t3, r2, n3, i3, a3, o3, this._getTextureFromOpenPBRConnection);
    if (i2(`inputs:base_color`, `map`, `srgb`, (t4) => {
      Array[z(336)](t4) && t4.length >= 3 && e2.color.setRGB(t4[0], t4[1], t4[2], `srgb`);
    }), e2.map && e2.map[n2(512)].scale) {
      let t4 = e2.map.userData.scale;
      Array.isArray(t4) && t4[n2(430)] >= 3 && e2[n2(541)].setRGB(t4[0], t4[1], t4[2], `srgb`);
    }
    i2(`inputs:base_metalness`, `metalnessMap`, ``, (t4) => {
      typeof t4 == `number` && (e2.metalness = t4);
    }), i2(`inputs:specular_roughness`, `roughnessMap`, ``, (t4) => {
      typeof t4 == `number` && (e2.roughness = t4);
    });
    let a2 = i2(`inputs:emission_color`, `emissiveMap`, p, (t4) => {
      let r3 = n2;
      Array[r3(336)](t4) && t4.length >= 3 && e2.emissive[r3(475)](t4[0], t4[1], t4[2], `srgb`);
    }), o2 = r2[`inputs:emission_luminance`];
    o2 !== void 0 && o2 > 0 && (a2 ? e2[n2(571)] = o2 : e2[n2(411)].multiplyScalar(o2));
    let s2 = r2[`inputs:transmission_weight`];
    if (s2 !== void 0 && s2 > 0) {
      e2.transmission = s2;
      let t4 = r2[`inputs:transmission_depth`];
      t4 !== void 0 && (e2.thickness = t4);
      let i3 = r2[`inputs:transmission_color`];
      i3 !== void 0 && Array.isArray(i3) && (e2[n2(424)][n2(475)](i3[0], i3[1], i3[2]), e2.attenuationDistance = t4 || 1);
    }
    let c2 = r2[`inputs:geometry_opacity`];
    c2 !== void 0 && c2 < 1 && (e2.opacity = c2, e2.transparent = true);
    let l2 = r2[`inputs:specular_ior`];
    l2 !== void 0 && (e2.ior = l2);
    let u2 = r2[`inputs:coat_weight`];
    if (u2 !== void 0 && u2 > 0) {
      e2.clearcoat = u2;
      let t4 = r2[n2(468)];
      t4 !== void 0 && (e2.clearcoatRoughness = t4);
    }
    let d2 = r2[`inputs:thin_film_weight`];
    if (d2 !== void 0 && d2 > 0) {
      e2.iridescence = d2;
      let t4 = r2[`inputs:thin_film_ior`];
      t4 !== void 0 && (e2[n2(487)] = t4);
      let i3 = r2[`inputs:thin_film_thickness`];
      if (i3 !== void 0) {
        let t5 = i3 * 1e3;
        e2.iridescenceThicknessRange = [t5, t5];
      }
    }
    let f2 = r2[n2(489)];
    f2 !== void 0 && (e2.specularIntensity = f2);
    let m2 = r2[`inputs:specular_color`];
    m2 !== void 0 && Array.isArray(m2) && e2.specularColor.setRGB(m2[0], m2[1], m2[2]);
    let h2 = r2[n2(562)];
    h2 !== void 0 && h2 > 0 && (e2.anisotropy = h2), i2(`inputs:geometry_normal`, `normalMap`, ``, null);
  }
  _getTextureFromOpenPBRConnection(e2) {
    let t3 = R, n2 = e2.replace(/<|>/g, ``), r2 = n2.split(`.`)[0], i2 = this[t3(372)][r2];
    if (!i2) return null;
    let a2 = this._getAttributes(r2), o2 = a2[`info:id`] || i2.fields[`info:id`];
    if (i2.fields.typeName === `NodeGraph`) {
      var s2;
      let e3 = n2.split(`.`)[1], i3 = r2 + `.` + e3, a3 = this.specsByPath[i3];
      return (a3 == null || (s2 = a3.fields) == null || (s2 = s2.connectionPaths) == null ? void 0 : s2[t3(430)]) > 0 ? this._getTextureFromOpenPBRConnection(a3.fields.connectionPaths[0]) : null;
    }
    if (o2 === `arnold:image`) {
      let e3 = a2[`inputs:filename`];
      return e3 ? this._loadTextureFromPath(e3) : null;
    }
    if (o2 && o2.startsWith(`ND_image_`)) {
      let e3 = a2[`inputs:file`];
      return e3 ? this._loadTextureFromPath(e3) : null;
    }
    if (o2 === `MayaND_fileTexture_color4`) {
      var c2;
      let e3 = r2 + t3(566), n3 = this[t3(372)][e3];
      return (n3 == null || (c2 = n3[t3(333)]) == null || (c2 = c2.connectionPaths) == null ? void 0 : c2.length) > 0 ? this._getTextureFromOpenPBRConnection(n3.fields[t3(534)][0]) : null;
    }
    if (o2 && o2.startsWith(`ND_convert_`)) {
      var l2;
      let e3 = r2 + `.inputs:in`, n3 = this[t3(372)][e3];
      return (n3 == null || (l2 = n3[t3(333)]) == null || (l2 = l2.connectionPaths) == null ? void 0 : l2.length) > 0 ? this._getTextureFromOpenPBRConnection(n3.fields.connectionPaths[0]) : null;
    }
    if (o2 === `arnold:bump2d`) {
      var u2;
      let e3 = r2 + `.inputs:bump_map`, n3 = this[t3(372)][e3];
      return (n3 == null || (u2 = n3.fields) == null || (u2 = u2.connectionPaths) == null ? void 0 : u2.length) > 0 ? this._getTextureFromOpenPBRConnection(n3.fields.connectionPaths[0]) : null;
    }
    if (o2 === t3(471)) {
      var d2;
      let e3 = r2 + `.inputs:input`, n3 = this[t3(372)][e3];
      return (n3 == null || (d2 = n3.fields) == null || (d2 = d2.connectionPaths) == null ? void 0 : d2.length) > 0 ? this[t3(497)](n3.fields.connectionPaths[0]) : null;
    }
    let f2 = r2.substring(0, r2.lastIndexOf(`/`));
    if (f2) {
      let e3 = this.specsByPath[f2];
      if (e3) {
        let n3 = this._getAttributes(f2);
        if ((n3[`info:id`] || e3.fields[`info:id`]) === `arnold:image`) {
          let e4 = n3[`inputs:filename`];
          if (e4) return this[t3(557)](e4);
        }
      }
    }
    return null;
  }
  _loadTextureFromPath(e2) {
    if (!e2) return null;
    if (this.textureCache[e2]) return this.textureCache[e2];
    let t3 = this._loadTexture(e2, null, null);
    return t3 && (this.textureCache[e2] = t3), t3;
  }
  [R(539)](e2) {
    let t3 = R;
    var n2;
    let r2 = e2.split(`.`)[0], i2 = this.specsByPath[r2];
    if (!i2) return null;
    let a2 = this._getAttributes(r2);
    if ((a2[t3(388)] || i2.fields[`info:id`]) !== `UsdUVTexture`) return null;
    let o2 = a2[`inputs:file`];
    if (!o2) return null;
    let s2 = null, c2 = 0, l2 = r2 + `.inputs:st`, u2 = this[t3(372)][l2];
    if ((u2 == null || (n2 = u2[t3(333)]) == null || (n2 = n2.connectionPaths) == null ? void 0 : n2.length) > 0) {
      let e3 = u2.fields.connectionPaths[0].replace(/<|>/g, ``).split(`.`)[0], n3 = this.specsByPath[e3];
      if (n3) {
        let r3 = this._getAttributes(e3), i3 = r3[`info:id`] || n3.fields[`info:id`];
        if (i3 === t3(357)) {
          var d2;
          s2 = r3;
          let n4 = e3 + `.inputs:in`, i4 = this.specsByPath[n4];
          if ((i4 == null || (d2 = i4.fields) == null || (d2 = d2.connectionPaths) == null ? void 0 : d2.length) > 0) {
            let e4 = i4.fields.connectionPaths[0].replace(/<|>/g, ``).split(`.`)[0], n5 = this._getAttributes(e4)[t3(343)];
            n5 === t3(328) ? c2 = 1 : n5 === `st2` && (c2 = 2);
          }
        } else if (i3 === `UsdPrimvarReader_float2`) {
          let e4 = r3[`inputs:varname`];
          e4 === `st1` ? c2 = 1 : e4 === `st2` && (c2 = 2);
        }
      }
    }
    let f2 = a2[`inputs:scale`], p2 = a2[t3(408)], m2 = o2;
    if (f2 && (m2 += `:s` + f2.join(`,`)), p2 && (m2 += `:b` + p2.join(`,`)), this.textureCache[m2]) return this.textureCache[m2];
    let h2 = this._loadTexture(o2, a2, s2);
    return h2 && (f2 && (h2[t3(512)].scale = f2), p2 && (h2.userData.bias = p2), c2 !== 0 && (h2[t3(474)] = c2), this.textureCache[m2] = h2), h2;
  }
  _applyTextureTransforms(e2, t3) {
    let n2 = R;
    if (!t3) return;
    let r2 = t3[`inputs:scale`];
    r2 && Array[n2(336)](r2) && r2.length >= 2 && e2.repeat.set(r2[0], r2[1]);
    let i2 = t3[`inputs:translation`];
    i2 && Array.isArray(i2) && i2.length >= 2 && e2[n2(480)].set(i2[0], i2[1]);
    let a2 = t3[`inputs:rotation`];
    typeof a2 == `number` && (e2[n2(514)] = a2 * Math.PI / 180);
  }
  _loadTexture(e2, t3, n2) {
    let r2 = R, i2 = e2;
    i2.startsWith(`@`) && (i2 = i2.slice(1)), i2.endsWith(`@`) && (i2 = i2.slice(0, -1));
    let a2 = this._resolveFilePath(i2), o2 = this.assets[a2];
    if (o2 || (o2 = this.assets[i2]), !o2) {
      let e3 = i2.split(`/`).pop();
      for (let r3 in this.assets) if (r3.endsWith(e3) || r3.endsWith(`/` + e3)) return this._createTextureFromData(this.assets[r3], t3, n2);
      if (this.manager) {
        let i3 = this.manager[r2(526)](e3);
        if (i3 !== e3) return this._createTextureFromData(i3, t3, n2);
      }
      return console.warn(r2(394), i2), null;
    }
    return this._createTextureFromData(o2, t3, n2);
  }
  [R(574)](e2, t3, n2) {
    if (!e2) return null;
    let r2 = this, i2 = new u(), a2;
    if (typeof e2 == `string`) a2 = e2;
    else if (e2 instanceof Uint8Array || e2 instanceof ArrayBuffer) {
      let t4 = new Blob([e2]);
      a2 = URL.createObjectURL(t4);
    } else return null;
    let o2 = new Image();
    return o2.onload = function() {
      let s2 = z;
      i2.image = o2, t3 && (i2.wrapS = r2._getWrapMode(t3[`inputs:wrapS`]), i2.wrapT = r2._getWrapMode(t3[`inputs:wrapT`])), r2._applyTextureTransforms(i2, n2), i2[s2(510)] = true, typeof e2 != `string` && URL.revokeObjectURL(a2);
    }, o2.src = a2, i2;
  }
  _getWrapMode(e2) {
    return e2 === `repeat` ? M : e2 === `mirror` ? h : e2 === `clamp` ? x : M;
  }
  _buildSkeleton(e2) {
    let t3 = R, r2 = this._getAttributes(e2), i2 = r2.joints;
    if (!i2 || i2.length === 0) return null;
    let a2 = r2.bindTransforms, o2 = r2.restTransforms, s2 = this._flattenMatrixArray(a2, i2.length), c2 = this._flattenMatrixArray(o2, i2.length), l2 = [], u2 = {}, d2 = [];
    for (let e3 = 0; e3 < i2[t3(430)]; e3++) {
      let n2 = i2[e3], r3 = n2.split(`/`).pop(), a3 = new A();
      if (a3.name = r3, l2[t3(460)](a3), u2[n2] = { bone: a3, index: e3 }, s2 && s2.length >= (e3 + 1) * 16) {
        let n3 = new P(), r4 = s2.slice(e3 * 16, (e3 + 1) * 16);
        n3[t3(446)](r4[0], r4[4], r4[8], r4[12], r4[1], r4[5], r4[9], r4[13], r4[2], r4[6], r4[10], r4[14], r4[3], r4[7], r4[11], r4[15]);
        let i3 = n3.clone().invert();
        d2.push(i3);
      } else d2.push(new P());
    }
    for (let e3 = 0; e3 < i2.length; e3++) {
      let n2 = i2[e3][t3(521)](`/`);
      if (n2[t3(430)] > 1) {
        let t4 = u2[n2.slice(0, -1).join(`/`)];
        t4 && t4.bone.add(l2[e3]);
      }
    }
    if (c2 && c2.length >= i2[t3(430)] * 16) for (let e3 = 0; e3 < i2[t3(430)]; e3++) {
      let n2 = new P(), r3 = c2[t3(533)](e3 * 16, (e3 + 1) * 16);
      n2[t3(446)](r3[0], r3[4], r3[8], r3[12], r3[1], r3[5], r3[9], r3[13], r3[2], r3[6], r3[10], r3[14], r3[3], r3[7], r3[11], r3[15]), n2.decompose(l2[e3].position, l2[e3].quaternion, l2[e3][t3(508)]);
    }
    let f2 = l2.filter((e3) => !e3.parent || !e3.parent.isBone), p2 = this.specsByPath[e2 + `.skel:animationSource`], m2 = null;
    return p2 && p2.fields.targetPaths && p2.fields.targetPaths.length > 0 && (m2 = p2.fields[t3(467)][0]), { skeleton: new n(l2, d2), joints: i2, rootBones: f2, animationPath: m2, path: e2 };
  }
  [R(479)]() {
    let e2 = R;
    for (let t3 of this[e2(477)]) {
      let { mesh: n2, skeletonPath: r2, localJoints: i2, geomBindTransform: a2 } = t3, o2 = null;
      if (r2 && this.skeletons[r2] && (o2 = this.skeletons[r2]), !o2) {
        for (let t4 in this.skeletons) if (r2 && (r2[e2(494)](t4) || t4.includes(r2))) {
          o2 = this.skeletons[t4];
          break;
        }
      }
      if (!o2) {
        let t4 = Object[e2(490)](this[e2(551)]);
        t4.length > 0 && (o2 = this.skeletons[t4[0]]);
      }
      if (!o2) {
        console.warn(`USDComposer: No skeleton found for skinned mesh`, n2.name);
        continue;
      }
      let { skeleton: s2, rootBones: c2, joints: l2 } = o2;
      if (i2 && i2.length > 0) {
        let t4 = n2.geometry.attributes.skinIndex;
        if (t4) {
          let n3 = [];
          for (let e3 = 0; e3 < i2.length; e3++) {
            let t5 = i2[e3], r4 = l2.indexOf(t5);
            n3[e3] = r4 >= 0 ? r4 : 0;
          }
          let r3 = t4.array;
          for (let t5 = 0; t5 < r3.length; t5++) {
            let i3 = r3[t5];
            i3 < n3[e2(430)] && (r3[t5] = n3[i3]);
          }
        }
      }
      for (let e3 of c2) n2.add(e3);
      let u2 = new P();
      if (a2 && a2.length === 16) {
        let e3 = a2;
        u2.set(e3[0], e3[4], e3[8], e3[12], e3[1], e3[5], e3[9], e3[13], e3[2], e3[6], e3[10], e3[14], e3[3], e3[7], e3[11], e3[15]);
      }
      n2.bind(s2, u2);
    }
  }
  _buildAnimations() {
    let e2 = R, t3 = [];
    for (let n3 in this.specsByPath) {
      let r2 = this.specsByPath[n3];
      if (r2.specType !== X[e2(386)] || r2.fields.typeName !== e2(452)) continue;
      let i2 = this._buildAnimationClip(n3);
      i2 && t3.push(i2);
    }
    let n2 = this._buildTransformAnimations();
    return n2.length > 0 && t3.push(new v(e2(488), -1, n2)), t3;
  }
  [R(560)]() {
    var _a, _b;
    let e2 = R, t3 = [];
    for (let s2 in this[e2(372)]) {
      var n2, r2, i2, a2;
      let l2 = this.specsByPath[s2];
      if (l2[e2(426)] !== X.Prim) continue;
      let u2 = (_a = l2.fields) == null ? void 0 : _a.typeName;
      if (u2 !== `Xform` && u2 !== `Scope` && u2 !== `Mesh`) continue;
      let d2 = s2.split(`/`).pop(), f2 = s2 + e2(440), p2 = this.specsByPath[f2];
      if (!(p2 == null || (n2 = p2[e2(333)]) == null) && n2[e2(338)]) {
        let { times: n3, values: r3 } = p2[e2(333)].timeSamples, i3 = [], a3 = [];
        for (let t4 = 0; t4 < n3.length; t4++) {
          i3.push(n3[t4] / this[e2(353)]);
          let o3 = r3[t4];
          a3.push(o3[0], o3[1], o3[2], o3[3]);
        }
        i3.length > 0 && t3.push(new g(d2 + e2(445), new Float32Array(i3), new Float32Array(a3)));
      }
      let m2 = s2 + `.xformOp:rotateXYZ`, h2 = this[e2(372)][m2];
      if (!(h2 == null || (r2 = h2.fields) == null) && r2.timeSamples) {
        let { times: n3, values: r3 } = h2.fields.timeSamples, i3 = [], a3 = [], o3 = new c(), s3 = new y();
        for (let t4 = 0; t4 < n3.length; t4++) {
          i3.push(n3[t4] / this.fps);
          let c2 = r3[t4];
          o3.set(c2[0] * Math.PI / 180, c2[1] * Math.PI / 180, c2[2] * Math.PI / 180, `ZYX`), s3[e2(462)](o3), a3[e2(460)](s3.x, s3.y, s3.z, s3.w);
        }
        i3[e2(430)] > 0 && t3.push(new g(d2 + `.quaternion`, new Float32Array(i3), new Float32Array(a3)));
      }
      let _2 = s2 + `.xformOp:translate`, v2 = this.specsByPath[_2];
      if (!(v2 == null || (i2 = v2.fields) == null) && i2.timeSamples) {
        let { times: n3, values: r3 } = v2.fields.timeSamples, i3 = [], a3 = [];
        for (let t4 = 0; t4 < n3[e2(430)]; t4++) {
          i3.push(n3[t4] / this[e2(353)]);
          let o3 = r3[t4];
          a3[e2(460)](o3[0], o3[1], o3[2]);
        }
        i3.length > 0 && t3[e2(460)](new k(d2 + `.position`, new Float32Array(i3), new Float32Array(a3)));
      }
      let x2 = s2 + e2(548), S2 = this.specsByPath[x2];
      if (!(S2 == null || (a2 = S2.fields) == null) && a2.timeSamples) {
        let { times: n3, values: r3 } = S2.fields.timeSamples, i3 = [], a3 = [];
        for (let t4 = 0; t4 < n3[e2(430)]; t4++) {
          i3.push(n3[t4] / this.fps);
          let e3 = r3[t4];
          a3.push(e3[0], e3[1], e3[2]);
        }
        i3[e2(430)] > 0 && t3.push(new k(d2 + `.scale`, new Float32Array(i3), new Float32Array(a3)));
      }
      let C2 = ((_b = l2.fields) == null ? void 0 : _b.properties) || [];
      for (let n3 of C2) {
        var o2;
        if (!n3.startsWith(`xformOp:transform`)) continue;
        let r3 = s2 + `.` + n3, i3 = this.specsByPath[r3];
        if (!(!(i3 == null || (o2 = i3.fields) == null) && o2.timeSamples)) continue;
        let { times: a3, values: c2 } = i3[e2(333)].timeSamples, l3 = [], u3 = [], f3 = [], p3 = [], m3 = [], h3 = [], _3 = new P(), v3 = new b(), x3 = new y(), S3 = new b();
        for (let t4 = 0; t4 < a3.length; t4++) {
          let n4 = c2[t4];
          if (!n4 || n4.length < 16) continue;
          let r4 = a3[t4] / this.fps;
          _3.set(n4[0], n4[4], n4[8], n4[12], n4[1], n4[5], n4[9], n4[13], n4[2], n4[6], n4[10], n4[14], n4[3], n4[7], n4[11], n4[15]), _3[e2(525)](v3, x3, S3), l3.push(r4), u3.push(v3.x, v3.y, v3.z), f3[e2(460)](r4), p3.push(x3.x, x3.y, x3.z, x3.w), m3.push(r4), h3.push(S3.x, S3.y, S3.z);
        }
        l3.length > 0 && (t3.push(new k(d2 + `.position`, new Float32Array(l3), new Float32Array(u3))), t3[e2(460)](new g(d2 + `.quaternion`, new Float32Array(f3), new Float32Array(p3))), t3.push(new k(d2 + `.scale`, new Float32Array(m3), new Float32Array(h3))));
        break;
      }
    }
    return t3;
  }
  _buildAnimationClip(e2) {
    let t3 = R, n2 = this._getAttributes(e2).joints;
    if (!n2 || n2.length === 0) return null;
    let r2 = [], i2 = this._getTimeSampledAttribute(e2, `rotations`);
    if (i2 && i2.times && i2.values) {
      let { times: e3, values: a3 } = i2;
      for (let i3 = 0; i3 < n2[t3(430)]; i3++) {
        let o3 = n2[i3].split(`/`)[t3(375)](), s2 = [], c2 = [];
        for (let t4 = 0; t4 < e3.length; t4++) {
          let n3 = a3[t4];
          if (!n3 || n3.length < (i3 + 1) * 4) continue;
          s2.push(e3[t4] / this.fps);
          let r3 = n3[i3 * 4 + 0], o4 = n3[i3 * 4 + 1], l2 = n3[i3 * 4 + 2], u2 = n3[i3 * 4 + 3];
          c2.push(r3, o4, l2, u2);
        }
        s2.length > 0 && r2.push(new g(o3 + `.quaternion`, new Float32Array(s2), new Float32Array(c2)));
      }
    }
    let a2 = this._getTimeSampledAttribute(e2, t3(347));
    if (a2 && a2.times && a2.values) {
      let { times: e3, values: i3 } = a2;
      for (let a3 = 0; a3 < n2.length; a3++) {
        let o3 = n2[a3].split(`/`).pop(), s2 = [], c2 = [];
        for (let n3 = 0; n3 < e3.length; n3++) {
          let r3 = i3[n3];
          !r3 || r3[t3(430)] < (a3 + 1) * 3 || (s2[t3(460)](e3[n3] / this.fps), c2.push(r3[a3 * 3 + 0], r3[a3 * 3 + 1], r3[a3 * 3 + 2]));
        }
        s2.length > 0 && r2[t3(460)](new k(o3 + t3(536), new Float32Array(s2), new Float32Array(c2)));
      }
    }
    let o2 = this._getTimeSampledAttribute(e2, t3(530));
    if (o2 && o2[t3(344)] && o2.values) {
      let { times: e3, values: i3 } = o2;
      for (let a3 = 0; a3 < n2.length; a3++) {
        let o3 = n2[a3][t3(521)](`/`).pop(), s2 = [], c2 = [];
        for (let n3 = 0; n3 < e3[t3(430)]; n3++) {
          let t4 = i3[n3];
          !t4 || t4.length < (a3 + 1) * 3 || (s2.push(e3[n3] / this.fps), c2.push(t4[a3 * 3 + 0], t4[a3 * 3 + 1], t4[a3 * 3 + 2]));
        }
        s2.length > 0 && r2.push(new k(o3 + `.scale`, new Float32Array(s2), new Float32Array(c2)));
      }
    }
    return r2.length === 0 ? null : new v(e2.split(`/`).pop(), -1, r2);
  }
  _getTimeSampledAttribute(e2, t3) {
    let n2 = R, r2 = e2 + `.` + t3, i2 = this.specsByPath[r2];
    if (i2 && i2.fields[n2(338)]) {
      let e3 = i2.fields.timeSamples;
      if (e3.times && e3.values) return e3;
    }
    return null;
  }
  [R(341)](e2, t3) {
    let n2 = R;
    if (!e2 || e2.length === 0) return null;
    if (typeof e2[0] == n2(376)) return e2;
    let r2 = [];
    for (let i2 = 0; i2 < t3; i2++) for (let t4 = 0; t4 < 4; t4++) {
      let a2 = e2[i2 * 4 + t4];
      a2 && a2.length === 4 ? r2[n2(460)](a2[0], a2[1], a2[2], a2[3]) : r2.push(+(t4 === 0), +(t4 === 1), +(t4 === 2), +(t4 === 3));
    }
    return r2;
  }
}, de = class extends ee {
  constructor(e2) {
    super(e2);
  }
  load(e2, t3, n2, r2) {
    let i2 = R, a2 = this, o2 = new te(a2.manager);
    o2[i2(404)](a2.path), o2.setResponseType(`arraybuffer`), o2.setRequestHeader(a2.requestHeader), o2.setWithCredentials(a2.withCredentials), o2.load(e2, function(n3) {
      let o3 = i2;
      try {
        t3(a2.parse(n3));
      } catch (t4) {
        r2 ? r2(t4) : console.error(t4), a2[o3(439)].itemError(e2);
      }
    }, n2, r2);
  }
  parse(e2) {
    let t3 = R, n2 = new U(), r2 = new le(), i2 = new TextDecoder();
    function a2(e3) {
      let t4 = z;
      return e3 instanceof ArrayBuffer ? e3 : e3.byteOffset === 0 && e3.byteLength === e3.buffer.byteLength ? e3[t4(396)] : e3.buffer.slice(e3.byteOffset, e3.byteOffset + e3.byteLength);
    }
    function o2(e3) {
      let t4 = e3[z(454)](`.`);
      return t4 < 0 || e3.lastIndexOf(`/`) > t4 ? `` : e3.slice(t4 + 1).toLowerCase();
    }
    function s2(e3) {
      let t4 = z, s3 = {};
      for (let l3 in e3) {
        let u3 = e3[l3], d3 = o2(l3);
        if (d3 === `png` || d3 === t4(495) || d3 === `jpeg` || d3 === `avif`) {
          s3[l3] = u3;
          continue;
        }
        d3 !== `usd` && d3 !== `usda` && d3 !== `usdc` || (c2(u3) ? s3[l3] = r2.parseData(a2(u3)) : s3[l3] = n2.parseData(i2.decode(u3)));
      }
      return s3;
    }
    function c2(e3) {
      let t4 = new Uint8Array([80, 88, 82, 45, 85, 83, 68, 67]), n3 = e3 instanceof Uint8Array ? e3 : new Uint8Array(e3);
      if (n3.byteLength < t4.length) return false;
      for (let e4 = 0; e4 < t4.length; e4++) if (n3[e4] !== t4[e4]) return false;
      return true;
    }
    function l2(e3) {
      let t4 = z, n3 = Object.keys(e3);
      if (n3.length < 1) return { file: void 0, filename: ``, basePath: `` };
      let r3 = n3[0], i3 = o2(r3), a3 = false, s3 = r3.lastIndexOf(`/`), l3 = s3 >= 0 ? r3.slice(0, s3) : ``;
      if (i3 === `usda`) return { file: e3[r3], filename: r3, basePath: l3 };
      if (i3 === `usdc`) a3 = true;
      else if (i3 === t4(485)) if (c2(e3[r3])) a3 = true;
      else return { file: e3[r3], filename: r3, basePath: l3 };
      return a3 ? { file: e3[r3], filename: r3, basePath: l3 } : { file: void 0, filename: ``, basePath: `` };
    }
    let u2 = this;
    if (typeof e2 == t3(383)) {
      let t4 = new Q(u2.manager), r3 = n2.parseData(e2);
      return t4.compose(r3, {});
    }
    if (c2(e2)) {
      let t4 = new Q(u2.manager), n3 = r2.parseData(a2(e2));
      return t4.compose(n3, {});
    }
    let d2 = new Uint8Array(e2);
    if (d2[0] === 80 && d2[1] === 75) {
      let e3 = L(d2), t4 = s2(e3), { file: n3, filename: r3, basePath: i3 } = l2(e3);
      if (!n3) throw Error(`USDLoader: Invalid USDZ package. The first ZIP entry must be a USD layer (.usd/.usda/.usdc).`);
      let a3 = new Q(u2.manager), o3 = t4[r3];
      if (!o3) throw Error(`USDLoader: Failed to parse root layer "` + r3 + `".`);
      return a3.compose(o3, t4, {}, i3);
    }
    let f2 = new Q(u2.manager), p2 = i2.decode(d2), m2 = n2.parseData(p2);
    return f2.compose(m2, {});
  }
};
function $() {
  let e2 = `readFloat32,upAxis,references,name,readString,sqrt,skeleton,matrix,primvars:UVMap,_getAttributes,typeEnum,_readValue,specsByPath,376QvYQQb,height,pop,number,get,SPECS,_buildHierarchy,11226xGMXDz,specularColorMap,readBytes,string,#usda,makeScale,Prim,xformOp:scale,info:id,xformOp:orient,invert,SkelRoot,EPSILON,tokens,USDLoader: Texture not found:,readInt64,buffer,Dictionary,parseData,getInt32,15143780kCimjH,4281872lIDUAM,inputs:width,_readScalarValue,setPath,_applyPreviewSurface,toLowerCase,primChildren,inputs:bias,horizontalApertureOffset,_getFieldsForSpec,emissive,inputs:metallic,verticalApertureOffset,focalLength,_triangulateIndicesWithPattern,3795270SKKuOR,fill,variantSelection,_stripInlineComment,payload,copy,USDCParser: Unsupported scalar type,#usda 1.0,attenuationColor,material:binding,specType,_readPathsRecursive,isGroup,Bool,length,_applyOpenPBRSurface,clippingRange,sections, for type ,1043984LicNWL,attributesByPrimPath,getUint8,PXR-USDC,manager,.xformOp:orient,materialIndex,remove,shadersByMaterialPath,UInt64ListOp,.quaternion,set,Cylinder,start,count,childrenByPath,_resolveFilePath,SkelAnimation,GeomSubset,lastIndexOf,arnold:openpbr_surface,normal,inputs:color,_buildSkeleton,178047WdINLM,push,original,setFromEuler,children,1114770aluruE,primvars:skel:jointIndices,multiply,targetPaths,inputs:coat_roughness,radius,_readHalf,arnold:color_correct,fieldSetIndex,_getVariantPaths,channel,setRGB,inputs:occlusion,skinnedMeshes,byteOffset,_bindSkeletons,offset,214MuvwOj,byteLength,_buildMesh,startsWith,usd,setAttribute,iridescenceIOR,TransformAnimation,inputs:specular_weight,keys,SphereLight,focusDistance,variantSetChildren,includes,jpg,primvars:skel:geomBindTransform,_getTextureFromOpenPBRConnection,replace,emissiveMap,readInt32,_buildGeometry,metersPerUnit,_pickBestMaterial,endsWith,Invalid,primvars:skel:jointWeights,3RYzskZ,scale,Vec2f,needsUpdate,subset,userData,_readInlinedValue,rotation,STRINGS,readUint8,perspective,setUint32,_buildPathsFromCompressed,position,split,getInt8,Matrix4d,quaternion,decompose,resolveURL,forEach,readUint16,_findUVPrimvar,scales,max,_findAssignmentOperator,slice,connectionPaths,sort,.position,basePath,applyTransform,_getTextureFromConnection,match,color,xformOp:rotateXYZ,rel ,trim,patch,metalness,framesPerSecond,.xformOp:scale,readInt8,major,skeletons,ND_UsdPreviewSurface_surfaceshader,version,normals:indices,add,/Looks/,_loadTextureFromPath,setFocalLength,textureCache,_buildTransformAnimations,primvars:st1,inputs:specular_roughness_anisotropy,_readStrings,compose,float,.inputs:inColor,pow,fStop,typeName,inputs:opacity,emissiveIntensity,seek,readFloat64,_createTextureFromData,:typeName,readUint64,dot,inputs:diffuseColor,_parseNumber,st1,defaultPrim,_halfToFloat,reader,xformOp:translate:pivot,fields,xformOp:translate,xformOp:rotateY,isArray,readUint32,timeSamples,_expandAttribute,_triangulateNGonWithHoles,_flattenMatrixArray,from,inputs:varname,times,fieldSets,normalMap,translations,minor,Token,Half,.material:binding,map,fps,inputs:roughness,join,_applyTriangulationPattern,UsdTransform2d,view,assetPath`.split(`,`);
  return $ = function() {
    return e2;
  }, $();
}
export {
  de as USDLoader
};
