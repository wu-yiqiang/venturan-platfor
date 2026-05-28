import { F as e, H as t, K as n, U as r, a as i, bt as a, g as o, lt as s, t as c, v as l, yt as u } from "./three.module-fqN0WVmI.js";
function d(e3, t2) {
  return e3 -= 456, p()[e3];
}
var f = d;
function p() {
  let e3 = `manager.readMap.11291ExipLV.790060LnJQaL.error.scale.hexId.set.end.readFile.readColor.push.readByte.setAttribute.readChunk.3184VQvDWZ.3570325keVnBh.29135seRRWx.applyMatrix4.position.transparent.   Unknown mesh chunk: .resourcePath.transpose.materials.3MqHAGQ.debugMessage.readFaceArray.      Color: .name.setPath.data.2810592BcqnwX.toString.readString.      RepeatX: .byteLength.readFloat.437918ZhdIDH.path.setWithCredentials.group.debug.readDWord.Unknown main chunk: .36mJsNln.readNamedObject.3034310GaChTQ`.split(`.`);
  return p = function() {
    return e3;
  }, p();
}
(function(e3, t2) {
  let n2 = d, r2 = e3();
  for (; ; ) try {
    if (parseInt(n2(494)) / 1 + parseInt(n2(467)) / 2 + parseInt(n2(502)) / 3 * (-parseInt(n2(480)) / 4) + -parseInt(n2(493)) / 5 + parseInt(n2(461)) / 6 + -parseInt(n2(479)) / 7 * (parseInt(n2(492)) / 8) + parseInt(n2(474)) / 9 * (parseInt(n2(476)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(p, 376696);
var m = class extends c {
  constructor(e3) {
    let t2 = d;
    super(e3), this.debug = false, this[t2(470)] = null, this[t2(501)] = [], this.meshes = [];
  }
  load(e3, t2, n2, r2) {
    let a2 = d, o2 = this, s2 = this[a2(468)] === `` ? i.extractUrlBase(e3) : this.path, c2 = new u(this.manager);
    c2[a2(459)](this.path), c2.setResponseType(`arraybuffer`), c2.setRequestHeader(this.requestHeader), c2[a2(469)](this.withCredentials), c2.load(e3, function(n3) {
      let i2 = a2;
      try {
        t2(o2.parse(n3, s2));
      } catch (t3) {
        r2 ? r2(t3) : console[i2(481)](t3), o2[i2(477)].itemError(e3);
      }
    }, n2, r2);
  }
  parse(e3, t2) {
    let n2 = d;
    this.group = new o(), this[n2(501)] = [], this.meshes = [], this[n2(486)](e3, t2);
    for (let e4 = 0; e4 < this.meshes.length; e4++) this.group.add(this.meshes[e4]);
    return this.group;
  }
  readFile(e3, t2) {
    let n2 = d, r2 = new h(new DataView(e3), 0, this.debugMessage);
    if (r2.id === _ || r2.id === v || r2.id === g) {
      let e4 = r2.readChunk();
      for (; e4; ) {
        if (e4.id === y) {
          let t3 = e4[n2(472)]();
          this.debugMessage(`3DS file version: ` + t3);
        } else e4.id === E ? this.readMeshData(e4, t2) : this.debugMessage(n2(473) + e4.hexId);
        e4 = r2.readChunk();
      }
    }
    this.debugMessage(`Parsed ` + this.meshes.length + ` meshes`);
  }
  readMeshData(e3, t2) {
    let n2 = d, r2 = e3.readChunk();
    for (; r2; ) {
      if (r2.id === D) {
        let e4 = +r2.readDWord();
        this[n2(503)](`Mesh Version: ` + e4);
      } else if (r2.id === O) {
        let e4 = r2.readFloat();
        this.debugMessage(`Master scale: ` + e4), this.group[n2(482)][n2(484)](e4, e4, e4);
      } else r2.id === J ? (this.debugMessage(`Named Object`), this[n2(475)](r2)) : r2.id === k ? (this.debugMessage(`Material`), this.readMaterialEntry(r2, t2)) : this[n2(503)](`Unknown MDATA chunk: ` + r2.hexId);
      r2 = e3.readChunk();
    }
  }
  readNamedObject(e3) {
    let t2 = d, n2 = e3.readString(), r2 = e3.readChunk();
    for (; r2; ) {
      if (r2.id === Y) {
        let e4 = this.readMesh(r2);
        e4.name = n2, this.meshes[t2(488)](e4);
      } else this.debugMessage(`Unknown named object chunk: ` + r2[t2(483)]);
      r2 = e3.readChunk();
    }
  }
  readMaterialEntry(t2, n2) {
    let r2 = d, i2 = t2[r2(491)](), a2 = new e();
    for (; i2; ) {
      if (i2.id === A) a2[r2(458)] = i2.readString(), this.debugMessage(`   Name: ` + a2.name);
      else if (i2.id === L) this.debugMessage(`   Wireframe`), a2.wireframe = true;
      else if (i2.id === R) {
        let e3 = i2.readByte();
        a2.wireframeLinewidth = e3, this.debugMessage(`   Wireframe Thickness: ` + e3);
      } else if (i2.id === F) a2.side = 2, this.debugMessage(`   DoubleSided`);
      else if (i2.id === I) this.debugMessage(`   Additive Blending`), a2.blending = 2;
      else if (i2.id === M) this.debugMessage(`   Diffuse Color`), a2.color = this.readColor(i2);
      else if (i2.id === N) this.debugMessage(`   Specular Color`), a2.specular = this.readColor(i2);
      else if (i2.id === j) this.debugMessage(`   Ambient color`), a2.color = this.readColor(i2);
      else if (i2.id === ee) {
        let e3 = this.readPercentage(i2);
        a2.shininess = e3 * 100, this[r2(503)](`   Shininess : ` + e3);
      } else if (i2.id === P) {
        let e3 = this.readPercentage(i2);
        a2.opacity = 1 - e3, this.debugMessage(`  Transparency : ` + e3), a2[r2(497)] = a2.opacity < 1;
      } else i2.id === z ? (this[r2(503)](`   ColorMap`), a2.map = this[r2(478)](i2, n2)) : i2.id === V ? (this.debugMessage(`   BumpMap`), a2.bumpMap = this.readMap(i2, n2)) : i2.id === B ? (this.debugMessage(`   OpacityMap`), a2.alphaMap = this.readMap(i2, n2)) : i2.id === H ? (this.debugMessage(`   SpecularMap`), a2.specularMap = this.readMap(i2, n2)) : this.debugMessage(`   Unknown material chunk: ` + i2.hexId);
      i2 = t2.readChunk();
    }
    this.materials[a2.name] = a2;
  }
  readMesh(n2) {
    let i2 = d, a2 = n2[i2(491)](), o2 = new t(), c2 = new s(o2, new e());
    for (c2[i2(458)] = `mesh`; a2; ) {
      if (a2.id === X) {
        let e3 = a2.readWord();
        this[i2(503)](`   Vertex: ` + e3);
        let t2 = [];
        for (let n3 = 0; n3 < e3; n3++) t2.push(a2[i2(466)]()), t2.push(a2.readFloat()), t2.push(a2.readFloat());
        o2[i2(490)](`position`, new r(t2, 3));
      } else if (a2.id === Z) this.readFaceArray(a2, c2);
      else if (a2.id === $) {
        let e3 = a2.readWord();
        this.debugMessage(`   UV: ` + e3);
        let t2 = [];
        for (let n3 = 0; n3 < e3; n3++) t2.push(a2.readFloat()), t2.push(a2[i2(466)]());
        o2.setAttribute(`uv`, new r(t2, 2));
      } else if (a2.id === te) {
        this.debugMessage(`   Transformation Matrix (TODO)`);
        let e3 = [];
        for (let t3 = 0; t3 < 12; t3++) e3[t3] = a2[i2(466)]();
        let t2 = new l();
        t2.elements[0] = e3[0], t2.elements[1] = e3[6], t2.elements[2] = e3[3], t2.elements[3] = e3[9], t2.elements[4] = e3[2], t2.elements[5] = e3[8], t2.elements[6] = e3[5], t2.elements[7] = e3[11], t2.elements[8] = e3[1], t2.elements[9] = e3[7], t2.elements[10] = e3[4], t2.elements[11] = e3[10], t2.elements[12] = 0, t2.elements[13] = 0, t2.elements[14] = 0, t2.elements[15] = 1, t2[i2(500)]();
        let n3 = new l();
        n3.copy(t2).invert(), o2[i2(495)](n3), t2.decompose(c2.position, c2.quaternion, c2.scale);
      } else this.debugMessage(i2(498) + a2[i2(483)]);
      a2 = n2.readChunk();
    }
    return o2.computeVertexNormals(), c2;
  }
  [f(456)](e3, t2) {
    let n2 = e3.readWord();
    this.debugMessage(`   Faces: ` + n2);
    let r2 = [];
    for (let t3 = 0; t3 < n2; ++t3) r2.push(e3.readWord(), e3.readWord(), e3.readWord()), e3.readWord();
    t2.geometry.setIndex(r2);
    let i2 = 0, a2 = 0;
    for (; !e3.endOfChunk; ) {
      let n3 = e3.readChunk();
      if (n3.id === Q) {
        this.debugMessage(`      Material Group`);
        let e4 = this.readMaterialGroup(n3), r3 = e4.index.length * 3;
        t2.geometry.addGroup(a2, r3, i2), a2 += r3, i2++;
        let o2 = this.materials[e4.name];
        Array.isArray(t2.material) === false && (t2.material = []), o2 !== void 0 && t2.material.push(o2);
      } else this.debugMessage(`      Unknown face array chunk: ` + n3.hexId);
    }
    t2.material.length === 1 && (t2.material = t2.material[0]);
  }
  [f(478)](e3, t2) {
    let n2 = f, r2 = e3.readChunk(), i2 = {}, o2 = new a(this.manager);
    for (o2.setPath(this[n2(499)] || t2).setCrossOrigin(this.crossOrigin); r2; ) {
      if (r2.id === U) {
        let e4 = r2[n2(463)]();
        i2 = o2.load(e4), this.debugMessage(`      File: ` + t2 + e4);
      } else r2.id === K ? (i2.offset.x = r2.readFloat(), this[n2(503)](`      OffsetX: ` + i2.offset.x)) : r2.id === q ? (i2.offset.y = r2[n2(466)](), this.debugMessage(`      OffsetY: ` + i2.offset.y)) : r2.id === W ? (i2.repeat.x = r2.readFloat(), this.debugMessage(n2(464) + i2.repeat.x)) : r2.id === G ? (i2.repeat.y = r2.readFloat(), this.debugMessage(`      RepeatY: ` + i2.repeat.y)) : this.debugMessage(`      Unknown map chunk: ` + r2.hexId);
      r2 = e3[n2(491)]();
    }
    return i2;
  }
  readMaterialGroup(e3) {
    let t2 = e3.readString(), n2 = e3.readWord();
    this.debugMessage(`         Name: ` + t2), this.debugMessage(`         Faces: ` + n2);
    let r2 = [];
    for (let t3 = 0; t3 < n2; ++t3) r2.push(e3.readWord());
    return { name: t2, index: r2 };
  }
  [f(487)](e3) {
    let t2 = f, r2 = e3.readChunk(), i2 = new n();
    if (r2.id === x || r2.id === S) {
      let e4 = r2.readByte(), n2 = r2[t2(489)](), a2 = r2[t2(489)]();
      i2.setRGB(e4 / 255, n2 / 255, a2 / 255), this.debugMessage(t2(457) + i2.r + `, ` + i2.g + `, ` + i2.b);
    } else if (r2.id === b || r2.id === C) {
      let e4 = r2.readFloat(), n2 = r2.readFloat(), a2 = r2.readFloat();
      i2.setRGB(e4, n2, a2), this[t2(503)](`      Color: ` + i2.r + `, ` + i2.g + `, ` + i2.b);
    } else this[t2(503)](`      Unknown color chunk: ` + r2.hexId);
    return i2;
  }
  readPercentage(e3) {
    let t2 = f, n2 = e3.readChunk();
    switch (n2.id) {
      case w:
        return n2.readShort() / 100;
      case T:
        return n2.readFloat();
      default:
        return this.debugMessage(`      Unknown percentage chunk: ` + n2[t2(483)]), 0;
    }
  }
  debugMessage(e3) {
    let t2 = f;
    this[t2(471)] && console.log(e3);
  }
}, h = class e2 {
  constructor(e3, t2, n2) {
    let r2 = f;
    this.data = e3, this.offset = t2, this[r2(496)] = t2, this.debugMessage = n2, this.debugMessage instanceof Function && (this.debugMessage = function() {
    }), this.id = this.readWord(), this.size = this[r2(472)](), this.end = this.offset + this.size, this[r2(485)] > e3[r2(465)] && this[r2(503)](`Bad chunk size for chunk at ` + t2);
  }
  readChunk() {
    let t2 = f;
    if (this.endOfChunk) return null;
    try {
      let n2 = new e2(this[t2(460)], this[t2(496)], this.debugMessage);
      return this[t2(496)] += n2.size, n2;
    } catch {
      return this[t2(503)](`Unable to read chunk at ` + this.position), null;
    }
  }
  get hexId() {
    let e3 = f;
    return this.id[e3(462)](16);
  }
  get endOfChunk() {
    return this.position >= this.end;
  }
  readByte() {
    let e3 = f, t2 = this.data.getUint8(this[e3(496)], true);
    return this.position += 1, t2;
  }
  readFloat() {
    let e3 = f;
    try {
      let t2 = this.data.getFloat32(this[e3(496)], true);
      return this.position += 4, t2;
    } catch (e4) {
      return this.debugMessage(e4 + ` ` + this.position + ` ` + this.data.byteLength), 0;
    }
  }
  readInt() {
    let e3 = this.data.getInt32(this.position, true);
    return this.position += 4, e3;
  }
  readShort() {
    let e3 = this.data.getInt16(this.position, true);
    return this.position += 2, e3;
  }
  readDWord() {
    let e3 = this.data.getUint32(this.position, true);
    return this.position += 4, e3;
  }
  readWord() {
    let e3 = this.data.getUint16(this.position, true);
    return this.position += 2, e3;
  }
  [f(463)]() {
    let e3 = ``, t2 = this.readByte();
    for (; t2; ) e3 += String.fromCharCode(t2), t2 = this.readByte();
    return e3;
  }
}, g = 19789, _ = 15786, v = 49725, y = 2, b = 16, x = 17, S = 18, C = 19, w = 48, T = 49, E = 15677, D = 15678, O = 256, k = 45055, A = 40960, j = 40976, M = 40992, N = 41008, ee = 41024, P = 41040, F = 41089, I = 41091, L = 41093, R = 41095, z = 41472, B = 41488, V = 41520, H = 41476, U = 41728, W = 41812, G = 41814, K = 41816, q = 41818, J = 16384, Y = 16640, X = 16656, Z = 16672, Q = 16688, $ = 16704, te = 16736;
export {
  m as TDSLoader
};
