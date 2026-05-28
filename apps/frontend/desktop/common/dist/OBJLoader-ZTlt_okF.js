import { F as e, H as t, K as n, Ot as r, U as i, V as a, Y as o, ct as s, g as c, gt as l, lt as u, q as d, rt as f, t as p, yt as m } from "./three.module-fqN0WVmI.js";
var h = O;
(function(e2, t2) {
  let n2 = O, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(525)) / 1 + parseInt(n2(513)) / 2 * (-parseInt(n2(522)) / 3) + parseInt(n2(498)) / 4 + -parseInt(n2(515)) / 5 + -parseInt(n2(503)) / 6 * (parseInt(n2(510)) / 7) + parseInt(n2(489)) / 8 + -parseInt(n2(488)) / 9 * (-parseInt(n2(487)) / 10) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(A, 474692);
var g = /^[og]\s*(.+)?/, _ = /^mtllib /, v = /^usemtl /, y = /^usemap /, b = /\s+/, x = new a(), S = new a(), C = new a(), w = new a(), T = new a(), E = new n();
function D() {
  let e2 = O, t2 = { objects: [], object: {}, vertices: [], normals: [], colors: [], uvs: [], materials: {}, materialLibraries: [], startObject: function(e3, t3) {
    let n2 = O;
    if (this.object && this.object.fromDeclaration === false) {
      this.object[n2(485)] = e3, this[n2(514)].fromDeclaration = t3 !== false;
      return;
    }
    let r2 = this[n2(514)] && typeof this.object[n2(499)] == `function` ? this.object.currentMaterial() : void 0;
    if (this.object && typeof this.object[n2(507)] == n2(505) && this.object[n2(507)](true), this.object = { name: e3 || ``, fromDeclaration: t3 !== false, geometry: { vertices: [], normals: [], colors: [], uvs: [], hasUVIndices: false }, materials: [], smooth: true, startMaterial: function(e4, t4) {
      let r3 = n2, i2 = this[r3(507)](false);
      i2 && (i2.inherited || i2.groupCount <= 0) && this[r3(520)].splice(i2.index, 1);
      let a2 = { index: this.materials[r3(528)], name: e4 || ``, mtllib: Array.isArray(t4) && t4.length > 0 ? t4[t4[r3(528)] - 1] : ``, smooth: i2 === void 0 ? this.smooth : i2.smooth, groupStart: i2 === void 0 ? 0 : i2.groupEnd, groupEnd: -1, groupCount: -1, inherited: false, clone: function(e5) {
        let t5 = r3, n3 = { index: typeof e5 == `number` ? e5 : this[t5(500)], name: this.name, mtllib: this[t5(532)], smooth: this.smooth, groupStart: 0, groupEnd: -1, groupCount: -1, inherited: false };
        return n3[t5(491)] = this.clone.bind(n3), n3;
      } };
      return this.materials.push(a2), a2;
    }, currentMaterial: function() {
      let e4 = n2;
      if (this[e4(520)][e4(528)] > 0) return this[e4(520)][this.materials.length - 1];
    }, _finalize: function(e4) {
      let t4 = n2, r3 = this.currentMaterial();
      if (r3 && r3.groupEnd === -1 && (r3[t4(502)] = this.geometry.vertices[t4(528)] / 3, r3.groupCount = r3.groupEnd - r3[t4(482)], r3.inherited = false), e4 && this.materials[t4(528)] > 1) for (let e5 = this.materials[t4(528)] - 1; e5 >= 0; e5--) this[t4(520)][e5].groupCount <= 0 && this.materials.splice(e5, 1);
      return e4 && this.materials.length === 0 && this.materials.push({ name: ``, smooth: this.smooth }), r3;
    } }, r2 && r2[n2(485)] && typeof r2.clone == `function`) {
      let e4 = r2[n2(491)](0);
      e4[n2(521)] = true, this[n2(514)].materials.push(e4);
    }
    this.objects.push(this.object);
  }, finalize: function() {
    let e3 = O;
    this.object && typeof this.object[e3(507)] == `function` && this.object._finalize(true);
  }, parseVertexIndex: function(e3, t3) {
    let n2 = parseInt(e3, 10);
    return (n2 >= 0 ? n2 - 1 : n2 + t3 / 3) * 3;
  }, parseNormalIndex: function(e3, t3) {
    let n2 = parseInt(e3, 10);
    return (n2 >= 0 ? n2 - 1 : n2 + t3 / 3) * 3;
  }, parseUVIndex: function(e3, t3) {
    let n2 = parseInt(e3, 10);
    return (n2 >= 0 ? n2 - 1 : n2 + t3 / 2) * 2;
  }, addVertex: function(e3, t3, n2) {
    let r2 = O, i2 = this.vertices, a2 = this.object[r2(516)].vertices;
    a2[r2(527)](i2[e3 + 0], i2[e3 + 1], i2[e3 + 2]), a2.push(i2[t3 + 0], i2[t3 + 1], i2[t3 + 2]), a2.push(i2[n2 + 0], i2[n2 + 1], i2[n2 + 2]);
  }, addVertexPoint: function(e3) {
    let t3 = O, n2 = this.vertices;
    this[t3(514)].geometry.vertices.push(n2[e3 + 0], n2[e3 + 1], n2[e3 + 2]);
  }, addVertexLine: function(e3) {
    let t3 = O, n2 = this.vertices;
    this.object[t3(516)][t3(517)].push(n2[e3 + 0], n2[e3 + 1], n2[e3 + 2]);
  }, addNormal: function(e3, t3, n2) {
    let r2 = O, i2 = this[r2(492)], a2 = this[r2(514)].geometry.normals;
    a2[r2(527)](i2[e3 + 0], i2[e3 + 1], i2[e3 + 2]), a2[r2(527)](i2[t3 + 0], i2[t3 + 1], i2[t3 + 2]), a2.push(i2[n2 + 0], i2[n2 + 1], i2[n2 + 2]);
  }, addFaceNormal: function(e3, t3, n2) {
    let r2 = O, i2 = this.vertices, a2 = this[r2(514)].geometry.normals;
    x.fromArray(i2, e3), S[r2(496)](i2, t3), C.fromArray(i2, n2), T.subVectors(C, S), w.subVectors(x, S), T[r2(494)](w), T.normalize(), a2.push(T.x, T.y, T.z), a2.push(T.x, T.y, T.z), a2.push(T.x, T.y, T.z);
  }, addColor: function(e3, t3, n2) {
    let r2 = O, i2 = this.colors, a2 = this[r2(514)].geometry.colors;
    i2[e3] !== void 0 && a2.push(i2[e3 + 0], i2[e3 + 1], i2[e3 + 2]), i2[t3] !== void 0 && a2.push(i2[t3 + 0], i2[t3 + 1], i2[t3 + 2]), i2[n2] !== void 0 && a2.push(i2[n2 + 0], i2[n2 + 1], i2[n2 + 2]);
  }, addUV: function(e3, t3, n2) {
    let r2 = O, i2 = this.uvs, a2 = this.object.geometry[r2(486)];
    a2.push(i2[e3 + 0], i2[e3 + 1]), a2.push(i2[t3 + 0], i2[t3 + 1]), a2.push(i2[n2 + 0], i2[n2 + 1]);
  }, addDefaultUV: function() {
    let e3 = O, t3 = this.object.geometry[e3(486)];
    t3.push(0, 0), t3.push(0, 0), t3.push(0, 0);
  }, addUVLine: function(e3) {
    let t3 = this.uvs;
    this.object.geometry.uvs.push(t3[e3 + 0], t3[e3 + 1]);
  }, addFace: function(e3, t3, n2, r2, i2, a2, o2, s2, c2) {
    let l2 = O, u2 = this.vertices.length, d2 = this.parseVertexIndex(e3, u2), f2 = this.parseVertexIndex(t3, u2), p2 = this.parseVertexIndex(n2, u2);
    if (this.addVertex(d2, f2, p2), this.addColor(d2, f2, p2), o2 !== void 0 && o2 !== ``) {
      let e4 = this.normals[l2(528)];
      d2 = this.parseNormalIndex(o2, e4), f2 = this.parseNormalIndex(s2, e4), p2 = this.parseNormalIndex(c2, e4), this.addNormal(d2, f2, p2);
    } else this[l2(481)](d2, f2, p2);
    if (r2 !== void 0 && r2 !== ``) {
      let e4 = this.uvs.length;
      d2 = this.parseUVIndex(r2, e4), f2 = this.parseUVIndex(i2, e4), p2 = this.parseUVIndex(a2, e4), this.addUV(d2, f2, p2), this[l2(514)].geometry[l2(504)] = true;
    } else this[l2(530)]();
  }, addPointGeometry: function(e3) {
    let t3 = O;
    this.object.geometry.type = t3(497);
    let n2 = this.vertices.length;
    for (let t4 = 0, r2 = e3.length; t4 < r2; t4++) {
      let r3 = this.parseVertexIndex(e3[t4], n2);
      this.addVertexPoint(r3), this.addColor(r3);
    }
  }, addLineGeometry: function(e3, t3) {
    let n2 = O;
    this.object.geometry.type = `Line`;
    let r2 = this.vertices.length, i2 = this.uvs.length;
    for (let t4 = 0, i3 = e3[n2(528)]; t4 < i3; t4++) this.addVertexLine(this.parseVertexIndex(e3[t4], r2));
    for (let e4 = 0, n3 = t3.length; e4 < n3; e4++) this.addUVLine(this.parseUVIndex(t3[e4], i2));
  } };
  return t2[e2(506)](``, false), t2;
}
function O(e2, t2) {
  return e2 -= 481, A()[e2];
}
var k = class extends p {
  constructor(e2) {
    super(e2), this.materials = null;
  }
  [h(495)](e2, t2, n2, r2) {
    let i2 = h, a2 = this, o2 = new m(this.manager);
    o2.setPath(this.path), o2.setRequestHeader(this.requestHeader), o2[i2(490)](this.withCredentials), o2.load(e2, function(n3) {
      let o3 = i2;
      try {
        t2(a2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2[o3(519)].itemError(e2);
      }
    }, n2, r2);
  }
  setMaterials(e2) {
    let t2 = h;
    return this[t2(520)] = e2, this;
  }
  parse(n2) {
    let a2 = h, p2 = new D();
    n2.indexOf(`\r
`) !== -1 && (n2 = n2.replace(/\r\n/g, `
`)), n2.indexOf(`\\
`) !== -1 && (n2 = n2.replace(/\\\n/g, ``));
    let m2 = n2.split(`
`), x2 = [];
    for (let e2 = 0, t2 = m2.length; e2 < t2; e2++) {
      let t3 = m2[e2].trimStart();
      if (t3[a2(528)] === 0) continue;
      let n3 = t3.charAt(0);
      if (n3 !== `#`) if (n3 === `v`) {
        let e3 = t3.split(b);
        switch (e3[0]) {
          case `v`:
            p2[a2(517)].push(parseFloat(e3[1]), parseFloat(e3[2]), parseFloat(e3[3])), e3[a2(528)] >= 7 ? (E[a2(529)](parseFloat(e3[4]), parseFloat(e3[5]), parseFloat(e3[6]), r), p2.colors.push(E.r, E.g, E.b)) : p2.colors.push(void 0, void 0, void 0);
            break;
          case `vn`:
            p2.normals.push(parseFloat(e3[1]), parseFloat(e3[2]), parseFloat(e3[3]));
            break;
          case `vt`:
            p2[a2(486)].push(parseFloat(e3[1]), parseFloat(e3[2]));
            break;
        }
      } else if (n3 === `f`) {
        let e3 = t3.slice(1)[a2(518)]().split(b), n4 = [];
        for (let t4 = 0, r3 = e3.length; t4 < r3; t4++) {
          let r4 = e3[t4];
          if (r4.length > 0) {
            let e4 = r4.split(`/`);
            n4.push(e4);
          }
        }
        let r2 = n4[0];
        for (let e4 = 1, t4 = n4[a2(528)] - 1; e4 < t4; e4++) {
          let t5 = n4[e4], i2 = n4[e4 + 1];
          p2.addFace(r2[0], t5[0], i2[0], r2[1], t5[1], i2[1], r2[2], t5[2], i2[2]);
        }
      } else if (n3 === `l`) {
        let e3 = t3.substring(1).trim().split(` `), n4 = [], r2 = [];
        if (t3.indexOf(`/`) === -1) n4 = e3;
        else for (let t4 = 0, i2 = e3.length; t4 < i2; t4++) {
          let i3 = e3[t4].split(`/`);
          i3[0] !== `` && n4.push(i3[0]), i3[1] !== `` && r2.push(i3[1]);
        }
        p2.addLineGeometry(n4, r2);
      } else if (n3 === `p`) {
        let e3 = t3.slice(1).trim().split(` `);
        p2.addPointGeometry(e3);
      } else if ((x2 = g.exec(t3)) !== null) {
        let e3 = (` ` + x2[0].slice(1).trim()).slice(1);
        p2[a2(506)](e3);
      } else if (v.test(t3)) p2[a2(514)].startMaterial(t3[a2(512)](7).trim(), p2.materialLibraries);
      else if (_.test(t3)) p2.materialLibraries.push(t3.substring(7).trim());
      else if (y.test(t3)) console.warn(`THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.`);
      else if (n3 === `s`) {
        if (x2 = t3.split(` `), x2.length > 1) {
          let e4 = x2[1].trim()[a2(493)]();
          p2.object.smooth = e4 !== `0` && e4 !== `off`;
        } else p2.object.smooth = true;
        let e3 = p2.object.currentMaterial();
        e3 && (e3.smooth = p2.object.smooth);
      } else {
        if (t3 === `\0`) continue;
        console[a2(509)](a2(501) + t3 + `"`);
      }
    }
    p2.finalize();
    let S2 = new c();
    if (S2.materialLibraries = [].concat(p2[a2(483)]), !(p2.objects[a2(528)] === 1 && p2[a2(524)][0][a2(516)].vertices.length === 0)) for (let n3 = 0, r2 = p2.objects.length; n3 < r2; n3++) {
      let r3 = p2[a2(524)][n3], c2 = r3.geometry, m3 = r3.materials, h2 = c2[a2(526)] === `Line`, g2 = c2[a2(526)] === a2(497), _2 = false;
      if (c2.vertices.length === 0) continue;
      let v2 = new t();
      v2.setAttribute(`position`, new i(c2.vertices, 3)), c2.normals.length > 0 && v2.setAttribute(`normal`, new i(c2.normals, 3)), c2[a2(508)][a2(528)] > 0 && (_2 = true, v2.setAttribute(`color`, new i(c2.colors, 3))), c2[a2(504)] === true && v2.setAttribute(`uv`, new i(c2.uvs, 2));
      let y2 = [];
      for (let t2 = 0, n4 = m3.length; t2 < n4; t2++) {
        let n5 = m3[t2], r4 = n5.name + `_` + n5.smooth + `_` + _2, i2 = p2[a2(520)][r4];
        if (this.materials !== null) {
          if (i2 = this.materials.create(n5.name), h2 && i2 && !(i2 instanceof o)) {
            let e2 = new o();
            d.prototype[a2(511)][a2(523)](e2, i2), e2.color.copy(i2.color), i2 = e2;
          } else if (g2 && i2 && !(i2 instanceof f)) {
            let e2 = new f({ size: 10, sizeAttenuation: false });
            d.prototype.copy[a2(523)](e2, i2), e2.color.copy(i2.color), e2.map = i2.map, i2 = e2;
          }
        }
        i2 === void 0 && (i2 = h2 ? new o() : g2 ? new f({ size: 1, sizeAttenuation: false }) : new e(), i2.name = n5.name, i2.flatShading = !n5[a2(484)], i2[a2(533)] = _2, p2.materials[r4] = i2), y2.push(i2);
      }
      let b2;
      if (y2.length > 1) {
        for (let e2 = 0, t2 = m3.length; e2 < t2; e2++) {
          let t3 = m3[e2];
          v2.addGroup(t3.groupStart, t3.groupCount, e2);
        }
        b2 = h2 ? new l(v2, y2) : g2 ? new s(v2, y2) : new u(v2, y2);
      } else b2 = h2 ? new l(v2, y2[0]) : g2 ? new s(v2, y2[0]) : new u(v2, y2[0]);
      b2.name = r3.name, S2[a2(531)](b2);
    }
    else if (p2.vertices[a2(528)] > 0) {
      let e2 = new f({ size: 1, sizeAttenuation: false }), n3 = new t();
      n3.setAttribute(`position`, new i(p2.vertices, 3)), p2.colors[a2(528)] > 0 && p2.colors[0] !== void 0 && (n3.setAttribute(`color`, new i(p2.colors, 3)), e2.vertexColors = true);
      let r2 = new s(n3, e2);
      S2.add(r2);
    }
    return S2;
  }
};
function A() {
  let e2 = `warn,7qjsZYa,copy,substring,2qsOmyz,object,3720320dYTHoc,geometry,vertices,trim,manager,materials,inherited,1932717zoWkLB,call,objects,304418iCQQfu,type,push,length,setRGB,addDefaultUV,add,mtllib,vertexColors,addFaceNormal,groupStart,materialLibraries,smooth,name,uvs,17700160nffhxe,9cumjox,2119480bXSpWG,setWithCredentials,clone,normals,toLowerCase,cross,load,fromArray,Points,1663208tbechj,currentMaterial,index,THREE.OBJLoader: Unexpected line: ",groupEnd,5353056hkOKhb,hasUVIndices,function,startObject,_finalize,colors`.split(`,`);
  return A = function() {
    return e2;
  }, A();
}
export {
  k as OBJLoader
};
