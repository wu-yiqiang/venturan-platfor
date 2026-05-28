import { H as e, K as t, U as n, t as r, yt as i } from "./three.module-fqN0WVmI.js";
function a(e2, t2) {
  return e2 -= 479, o()[e2];
}
(function(e2, t2) {
  let n2 = a, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(515)) / 1 + parseInt(n2(514)) / 2 * (parseInt(n2(495)) / 3) + -parseInt(n2(530)) / 4 * (parseInt(n2(499)) / 5) + -parseInt(n2(500)) / 6 + parseInt(n2(516)) / 7 + -parseInt(n2(518)) / 8 + -parseInt(n2(535)) / 9 * (-parseInt(n2(523)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(o, 322919);
function o() {
  let e2 = `getUint16.short.customPropertyMapping.elements.valueReader.getFloat32.properties.354cBZnBk.length.countType.itemType.20bffGUy.1350924xtwTuM.itemError.normalx.faceVertexUvs.uint32.diffuse_g.float.color.error.format.faceVertexColors.split.attrS.indices.1510nVfcOh.310626knneIs.2321802FLZuPQ.int16.4267280ddkeAB.countReader.vertex_index.push.attrT.50GBngYv.obj_info.shift.posz.setPath.next.empty.302892KUyViC.exec.attrG.getInt32.attrNY.2293605DiLtCv.getInt8.propertyNameMapping.normals.char.arr.keys.float64.double.name`.split(`.`);
  return o = function() {
    return e2;
  }, o();
}
var s = new t(), c = class extends r {
  constructor(e2) {
    super(e2), this.propertyNameMapping = {}, this.customPropertyMapping = {};
  }
  load(e2, t2, n2, r2) {
    let o2 = a, s2 = this, c2 = new i(this.manager);
    c2[o2(527)](this.path), c2.setResponseType(`arraybuffer`), c2.setRequestHeader(this.requestHeader), c2.setWithCredentials(this.withCredentials), c2.load(e2, function(n3) {
      let i2 = o2;
      try {
        t2(s2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console[i2(508)](t3), s2.manager[i2(501)](e2);
      }
    }, n2, r2);
  }
  setPropertyNameMapping(e2) {
    let t2 = a;
    this[t2(480)] = e2;
  }
  setCustomPropertyNameMapping(e2) {
    this.customPropertyMapping = e2;
  }
  parse(t2) {
    function r2(e2, t3 = 0) {
      let n2 = a, r3 = /^ply([\s\S]*)end_header(\r\n|\r|\n)/, i3 = ``, o3 = r3[n2(531)](e2);
      o3 !== null && (i3 = o3[1]);
      let s2 = { comments: [], elements: [], headerLength: t3, objInfo: `` }, c3 = i3.split(/\r\n|\r|\n/), l2;
      function u2(e3, t4) {
        let r4 = n2, i4 = { type: e3[0] };
        return i4.type === `list` ? (i4.name = e3[3], i4.countType = e3[1], i4[r4(498)] = e3[2]) : i4.name = e3[1], i4[r4(487)] in t4 && (i4.name = t4[i4.name]), i4;
      }
      for (let e3 = 0; e3 < c3.length; e3++) {
        let t4 = c3[e3];
        if (t4 = t4.trim(), t4 === ``) continue;
        let r4 = t4[n2(511)](/\s+/), i4 = r4[n2(525)]();
        switch (t4 = r4.join(` `), i4) {
          case `format`:
            s2.format = r4[0], s2.version = r4[1];
            break;
          case `comment`:
            s2.comments.push(t4);
            break;
          case `element`:
            l2 !== void 0 && s2[n2(491)].push(l2), l2 = {}, l2.name = r4[0], l2.count = parseInt(r4[1]), l2.properties = [];
            break;
          case `property`:
            l2[n2(494)].push(u2(r4, y[n2(480)]));
            break;
          case n2(524):
            s2.objInfo = t4;
            break;
          default:
            console.log(`unhandled`, i4, r4);
        }
      }
      return l2 !== void 0 && s2.elements.push(l2), s2;
    }
    function i2(e2, t3) {
      let n2 = a;
      switch (t3) {
        case n2(482):
        case `uchar`:
        case n2(489):
        case `ushort`:
        case `int`:
        case `uint`:
        case `int8`:
        case `uint8`:
        case n2(517):
        case `uint16`:
        case `int32`:
        case `uint32`:
          return parseInt(e2);
        case n2(506):
        case `double`:
        case `float32`:
        case n2(485):
          return parseFloat(e2);
      }
    }
    function o2(e2, t3) {
      let n2 = a, r3 = {};
      for (let a2 = 0; a2 < e2.length; a2++) {
        if (t3[n2(529)]()) return null;
        if (e2[a2].type === `list`) {
          let o3 = [], s2 = i2(t3.next(), e2[a2].countType);
          for (let r4 = 0; r4 < s2; r4++) {
            if (t3[n2(529)]()) return null;
            o3.push(i2(t3.next(), e2[a2].itemType));
          }
          r3[e2[a2].name] = o3;
        } else r3[e2[a2].name] = i2(t3[n2(528)](), e2[a2].type);
      }
      return r3;
    }
    function c2() {
      let e2 = a, t3 = { indices: [], vertices: [], normals: [], uvs: [], faceVertexUvs: [], colors: [], faceVertexColors: [] };
      for (let n2 of Object.keys(y[e2(490)])) t3[n2] = [];
      return t3;
    }
    function u(e2) {
      let t3 = a, n2 = e2.map((e3) => e3.name);
      function r3(e3) {
        for (let t4 = 0, r4 = e3.length; t4 < r4; t4++) {
          let r5 = e3[t4];
          if (n2.includes(r5)) return r5;
        }
        return null;
      }
      return { attrX: r3([`x`, `px`, `posx`]) || `x`, attrY: r3([`y`, `py`, `posy`]) || `y`, attrZ: r3([`z`, `pz`, t3(526)]) || `z`, attrNX: r3([`nx`, t3(502)]), attrNY: r3([`ny`, `normaly`]), attrNZ: r3([`nz`, `normalz`]), attrS: r3([`s`, `u`, `texture_u`, `tx`]), attrT: r3([`t`, `v`, `texture_v`, `ty`]), attrR: r3([`red`, `diffuse_red`, `r`, `diffuse_r`]), attrG: r3([`green`, `diffuse_green`, `g`, t3(505)]), attrB: r3([`blue`, `diffuse_blue`, `b`, `diffuse_b`]) };
    }
    function d(e2, t3) {
      let n2 = a, r3 = c2(), i3 = /end_header\s+(\S[\s\S]*\S|\S)\s*$/, s2, d2;
      s2 = (d2 = i3[n2(531)](e2)) === null ? [] : d2[1][n2(511)](/\s+/);
      let m2 = new l(s2);
      X: for (let e3 = 0; e3 < t3[n2(491)][n2(496)]; e3++) {
        let n3 = t3.elements[e3], i4 = u(n3.properties);
        for (let e4 = 0; e4 < n3.count; e4++) {
          let e5 = o2(n3.properties, m2);
          if (!e5) break X;
          p(r3, n3.name, e5, i4);
        }
      }
      return f(r3);
    }
    function f(t3) {
      let r3 = a, i3 = new e();
      t3.indices.length > 0 && i3.setIndex(t3.indices), i3.setAttribute(`position`, new n(t3.vertices, 3)), t3.normals.length > 0 && i3.setAttribute(`normal`, new n(t3[r3(481)], 3)), t3.uvs.length > 0 && i3.setAttribute(`uv`, new n(t3.uvs, 2)), t3.colors.length > 0 && i3.setAttribute(r3(507), new n(t3.colors, 3)), (t3.faceVertexUvs[r3(496)] > 0 || t3.faceVertexColors[r3(496)] > 0) && (i3 = i3.toNonIndexed(), t3.faceVertexUvs.length > 0 && i3.setAttribute(`uv`, new n(t3[r3(503)], 2)), t3.faceVertexColors.length > 0 && i3.setAttribute(`color`, new n(t3[r3(510)], 3)));
      for (let e2 of Object.keys(y.customPropertyMapping)) t3[e2].length > 0 && i3.setAttribute(e2, new n(t3[e2], y.customPropertyMapping[e2].length));
      return i3.computeBoundingSphere(), i3;
    }
    function p(e2, t3, n2, r3) {
      let i3 = a;
      if (t3 === `vertex`) {
        e2.vertices.push(n2[r3.attrX], n2[r3.attrY], n2[r3.attrZ]), r3.attrNX !== null && r3[i3(534)] !== null && r3.attrNZ !== null && e2[i3(481)][i3(521)](n2[r3.attrNX], n2[r3.attrNY], n2[r3.attrNZ]), r3[i3(512)] !== null && r3.attrT !== null && e2.uvs.push(n2[r3.attrS], n2[r3[i3(522)]]), r3.attrR !== null && r3.attrG !== null && r3.attrB !== null && (s.setRGB(n2[r3.attrR] / 255, n2[r3.attrG] / 255, n2[r3.attrB] / 255, `srgb`), e2.colors.push(s.r, s.g, s.b));
        for (let t4 of Object[i3(484)](y.customPropertyMapping)) for (let r4 of y.customPropertyMapping[t4]) e2[t4][i3(521)](n2[r4]);
      } else if (t3 === `face`) {
        let t4 = n2.vertex_indices || n2[i3(520)], a2 = n2.texcoord;
        t4.length === 3 ? (e2.indices.push(t4[0], t4[1], t4[2]), a2 && a2.length === 6 && (e2.faceVertexUvs.push(a2[0], a2[1]), e2.faceVertexUvs.push(a2[2], a2[3]), e2.faceVertexUvs.push(a2[4], a2[5]))) : t4.length === 4 && (e2[i3(513)][i3(521)](t4[0], t4[1], t4[3]), e2.indices.push(t4[1], t4[2], t4[3])), r3.attrR !== null && r3.attrG !== null && r3.attrB !== null && (s.setRGB(n2[r3.attrR] / 255, n2[r3[i3(532)]] / 255, n2[r3.attrB] / 255, `srgb`), e2[i3(510)].push(s.r, s.g, s.b), e2.faceVertexColors[i3(521)](s.r, s.g, s.b), e2.faceVertexColors.push(s.r, s.g, s.b));
      }
    }
    function m(e2, t3) {
      let n2 = a, r3 = {}, i3 = 0;
      for (let a2 = 0; a2 < t3[n2(496)]; a2++) {
        let o3 = t3[a2], s2 = o3[n2(492)];
        if (o3.type === `list`) {
          let t4 = [], a3 = o3.countReader.read(e2 + i3);
          i3 += o3.countReader.size;
          for (let n3 = 0; n3 < a3; n3++) t4.push(s2.read(e2 + i3)), i3 += s2.size;
          r3[o3[n2(487)]] = t4;
        } else r3[o3.name] = s2.read(e2 + i3), i3 += s2.size;
      }
      return [r3, i3];
    }
    function h(e2, t3, n2) {
      let r3 = a;
      function i3(e3, t4, n3) {
        let r4 = a;
        switch (t4) {
          case `int8`:
          case `char`:
            return { read: (t5) => e3[r4(479)](t5), size: 1 };
          case `uint8`:
          case `uchar`:
            return { read: (t5) => e3.getUint8(t5), size: 1 };
          case `int16`:
          case r4(489):
            return { read: (t5) => e3.getInt16(t5, n3), size: 2 };
          case `uint16`:
          case `ushort`:
            return { read: (t5) => e3[r4(488)](t5, n3), size: 2 };
          case `int32`:
          case `int`:
            return { read: (t5) => e3[r4(533)](t5, n3), size: 4 };
          case r4(504):
          case `uint`:
            return { read: (t5) => e3.getUint32(t5, n3), size: 4 };
          case `float32`:
          case `float`:
            return { read: (t5) => e3[r4(493)](t5, n3), size: 4 };
          case `float64`:
          case r4(486):
            return { read: (t5) => e3.getFloat64(t5, n3), size: 8 };
        }
      }
      for (let a2 = 0, o3 = e2.length; a2 < o3; a2++) {
        let o4 = e2[a2];
        o4.type === `list` ? (o4[r3(519)] = i3(t3, o4[r3(497)], n2), o4.valueReader = i3(t3, o4.itemType, n2)) : o4.valueReader = i3(t3, o4.type, n2);
      }
    }
    function g(e2, t3) {
      let n2 = a, r3 = c2(), i3 = t3[n2(509)] === `binary_little_endian`, o3 = new DataView(e2, t3.headerLength), s2, l2 = 0;
      for (let e3 = 0; e3 < t3.elements.length; e3++) {
        let a2 = t3[n2(491)][e3], c3 = a2.properties, d2 = u(c3);
        h(c3, o3, i3);
        for (let e4 = 0; e4 < a2.count; e4++) {
          s2 = m(l2, c3), l2 += s2[1];
          let e5 = s2[0];
          p(r3, a2.name, e5, d2);
        }
      }
      return f(r3);
    }
    function _(e2) {
      let t3 = a, n2 = 0, r3 = true, i3 = ``, o3 = [], s2 = new TextDecoder().decode(e2.subarray(0, 5)), c3 = /^ply\r\n/.test(s2);
      do {
        let a2 = String.fromCharCode(e2[n2++]);
        a2 !== `
` && a2 !== `\r` ? i3 += a2 : (i3 === `end_header` && (r3 = false), i3 !== `` && (o3[t3(521)](i3), i3 = ``));
      } while (r3 && n2 < e2.length);
      return c3 === true && n2++, { headerText: o3.join(`\r`) + `\r`, headerLength: n2 };
    }
    let v, y = this;
    if (t2 instanceof ArrayBuffer) {
      let e2 = new Uint8Array(t2), { headerText: n2, headerLength: i3 } = _(e2), a2 = r2(n2, i3);
      v = a2.format === `ascii` ? d(new TextDecoder().decode(e2), a2) : g(t2, a2);
    } else v = d(t2, r2(t2));
    return v;
  }
}, l = class {
  constructor(e2) {
    this.arr = e2, this.i = 0;
  }
  empty() {
    let e2 = a;
    return this.i >= this[e2(483)].length;
  }
  next() {
    return this.arr[this.i++];
  }
};
export {
  c as PLYLoader
};
