import { B as e, C as t, E as n, F as r, H as i, J as a, K as o, L as s, Lt as c, Mt as l, N as u, O as d, Ot as f, Q as p, R as m, S as h, St as g, Tt as _, U as v, V as y, Y as b, a as x, b as S, bt as C, d as w, f as T, g as E, i as D, k as O, kt as k, l as ee, lt as te, p as ne, pt as A, t as j, tt as re, u as ie, v as M, yt as ae, z as N, zt as P } from "./three.module-fqN0WVmI.js";
import { t as oe } from "./fflate.module-DqHR0NvN.js";
function F(e2, t2) {
  return e2 -= 498, R()[e2];
}
var I = F;
(function(e2, t2) {
  let n2 = F, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(618)) / 1 + parseInt(n2(706)) / 2 * (parseInt(n2(622)) / 3) + -parseInt(n2(587)) / 4 + -parseInt(n2(502)) / 5 * (parseInt(n2(645)) / 6) + parseInt(n2(647)) / 7 * (-parseInt(n2(568)) / 8) + parseInt(n2(650)) / 9 + -parseInt(n2(655)) / 10 * (-parseInt(n2(723)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(R, 353048);
function L(e2, t2, n2) {
  let r2 = n2.length - e2 - 1;
  if (t2 >= n2[r2]) return r2 - 1;
  if (t2 <= n2[e2]) return e2;
  let i2 = e2, a2 = r2, o2 = Math.floor((i2 + a2) / 2);
  for (; t2 < n2[o2] || t2 >= n2[o2 + 1]; ) t2 < n2[o2] ? a2 = o2 : i2 = o2, o2 = Math.floor((i2 + a2) / 2);
  return o2;
}
function se(e2, t2, n2, r2) {
  let i2 = [], a2 = [], o2 = [];
  i2[0] = 1;
  for (let s2 = 1; s2 <= n2; ++s2) {
    a2[s2] = t2 - r2[e2 + 1 - s2], o2[s2] = r2[e2 + s2] - t2;
    let n3 = 0;
    for (let e3 = 0; e3 < s2; ++e3) {
      let t3 = o2[e3 + 1], r3 = a2[s2 - e3], c2 = i2[e3] / (t3 + r3);
      i2[e3] = n3 + t3 * c2, n3 = r3 * c2;
    }
    i2[s2] = n3;
  }
  return i2;
}
function ce(e2, t2, n2, r2) {
  let i2 = L(e2, r2, t2), a2 = se(i2, r2, e2, t2), o2 = new g(0, 0, 0, 0);
  for (let t3 = 0; t3 <= e2; ++t3) {
    let r3 = n2[i2 - e2 + t3], s2 = a2[t3], c2 = r3.w * s2;
    o2.x += r3.x * c2, o2.y += r3.y * c2, o2.z += r3.z * c2, o2.w += r3.w * s2;
  }
  return o2;
}
function le(e2, t2, n2, r2, i2) {
  let a2 = [];
  for (let e3 = 0; e3 <= n2; ++e3) a2[e3] = 0;
  let o2 = [];
  for (let e3 = 0; e3 <= r2; ++e3) o2[e3] = a2.slice(0);
  let s2 = [];
  for (let e3 = 0; e3 <= n2; ++e3) s2[e3] = a2.slice(0);
  s2[0][0] = 1;
  let c2 = a2.slice(0), l2 = a2.slice(0);
  for (let r3 = 1; r3 <= n2; ++r3) {
    c2[r3] = t2 - i2[e2 + 1 - r3], l2[r3] = i2[e2 + r3] - t2;
    let n3 = 0;
    for (let e3 = 0; e3 < r3; ++e3) {
      let t3 = l2[e3 + 1], i3 = c2[r3 - e3];
      s2[r3][e3] = t3 + i3;
      let a3 = s2[e3][r3 - 1] / s2[r3][e3];
      s2[e3][r3] = n3 + t3 * a3, n3 = i3 * a3;
    }
    s2[r3][r3] = n3;
  }
  for (let e3 = 0; e3 <= n2; ++e3) o2[0][e3] = s2[e3][n2];
  for (let e3 = 0; e3 <= n2; ++e3) {
    let t3 = 0, i3 = 1, c3 = [];
    for (let e4 = 0; e4 <= n2; ++e4) c3[e4] = a2.slice(0);
    c3[0][0] = 1;
    for (let a3 = 1; a3 <= r2; ++a3) {
      let r3 = 0, l3 = e3 - a3, u3 = n2 - a3;
      e3 >= a3 && (c3[i3][0] = c3[t3][0] / s2[u3 + 1][l3], r3 = c3[i3][0] * s2[l3][u3]);
      let d2 = l3 >= -1 ? 1 : -l3, f2 = e3 - 1 <= u3 ? a3 - 1 : n2 - e3;
      for (let e4 = d2; e4 <= f2; ++e4) c3[i3][e4] = (c3[t3][e4] - c3[t3][e4 - 1]) / s2[u3 + 1][l3 + e4], r3 += c3[i3][e4] * s2[l3 + e4][u3];
      e3 <= u3 && (c3[i3][a3] = -c3[t3][a3 - 1] / s2[u3 + 1][e3], r3 += c3[i3][a3] * s2[e3][u3]), o2[a3][e3] = r3;
      let p2 = t3;
      t3 = i3, i3 = p2;
    }
  }
  let u2 = n2;
  for (let e3 = 1; e3 <= r2; ++e3) {
    for (let t3 = 0; t3 <= n2; ++t3) o2[e3][t3] *= u2;
    u2 *= n2 - e3;
  }
  return o2;
}
function ue(e2, t2, n2, r2, i2) {
  let a2 = F, o2 = i2 < e2 ? i2 : e2, s2 = [], c2 = L(e2, r2, t2), l2 = le(c2, r2, e2, o2, t2), u2 = [];
  for (let e3 = 0; e3 < n2[a2(543)]; ++e3) {
    let t3 = n2[e3].clone(), r3 = t3.w;
    t3.x *= r3, t3.y *= r3, t3.z *= r3, u2[e3] = t3;
  }
  for (let t3 = 0; t3 <= o2; ++t3) {
    let n3 = u2[c2 - e2].clone().multiplyScalar(l2[t3][0]);
    for (let r3 = 1; r3 <= e2; ++r3) n3.add(u2[c2 - e2 + r3].clone().multiplyScalar(l2[t3][r3]));
    s2[t3] = n3;
  }
  for (let e3 = o2 + 1; e3 <= i2 + 1; ++e3) s2[e3] = new g(0, 0, 0);
  return s2;
}
function de(e2, t2) {
  let n2 = 1;
  for (let t3 = 2; t3 <= e2; ++t3) n2 *= t3;
  let r2 = 1;
  for (let e3 = 2; e3 <= t2; ++e3) r2 *= e3;
  for (let n3 = 2; n3 <= e2 - t2; ++n3) r2 *= n3;
  return n2 / r2;
}
function fe(e2) {
  let t2 = F, n2 = e2.length, r2 = [], i2 = [];
  for (let t3 = 0; t3 < n2; ++t3) {
    let n3 = e2[t3];
    r2[t3] = new y(n3.x, n3.y, n3.z), i2[t3] = n3.w;
  }
  let a2 = [];
  for (let e3 = 0; e3 < n2; ++e3) {
    let n3 = r2[e3].clone();
    for (let t3 = 1; t3 <= e3; ++t3) n3.sub(a2[e3 - t3].clone().multiplyScalar(de(e3, t3) * i2[t3]));
    a2[e3] = n3[t2(726)](i2[0]);
  }
  return a2;
}
function pe(e2, t2, n2, r2, i2) {
  return fe(ue(e2, t2, n2, r2, i2));
}
function R() {
  let e2 = [`NearPlane`, `THREE.FBXLoader: Unknown camera type `, `rotationOffset`, `TransparencyFactor`, `double`, `parseAnimationCurveNodes`, `interpolateRotations`, `parsePoseNodes`, `THREE.FBXLoader: Orthographic cameras not supported yet.`, `Connections`, `rotation`, `warn`, `startKnot`, `envMap`, `parseNodeAttr`, `InheritType`, `transformData`, `parseMeshGeometry`, `attributes`, `name`, `length`, `invert`, `getInt32Array`, `multiply`, `start`, `dataSize`, `getFloat64`, `Content`, `FBXLoader: Image type "`, `initialRotation`, `weightsIndices`, `trim`, `offset`, `GeometricRotation`, `getPoint`, `object`, `Properties70`, `relationship`, `fromJSON`, `quaternion`, `toArray`, `TransformLink`, `phong`, `bool`, `rotationPivot`, `400xcyRax`, `Model`, `setPath`, `PostRotation`, `bones`, `color`, `colors`, `Lcl_Rotation`, `loadTexture`, `geometryID`, `getFloat32`, `attrName`, `bumpMap`, `webp`, `int`, `parseScene`, `PreRotation`, `GlobalSettings`, `position`, `65336REIjTK`, `Pose`, `parent`, `CameraProjectionType`, `toJSON`, `slice`, `, defaulting to a PointLight.`, `bind`, `forEach`, `Lcl_`, `layer`, `vertex`, `clone`, `getOffset`, `AllSame`, `FocalLength`, `number`, `extractRotation`, `Lcl_Translation`, `string`, `values`, `skinIndex`, `translation`, `normal`, `ReferenceInformationType`, `Vector`, `popStack`, `getTimesForAllAxes`, `transform`, `generateRotationTrack`, `parseModels`, `121014vwvTeQ`, `getUint32`, `vertexWeights`, `normalize`, `207513rvkFol`, `set`, `emissive`, `controlPoints`, `Color`, `modelName`, `degToRad`, `getArrayBuffer`, `Scaling`, `getInt32`, `setFocalLength`, `.tga`, `currentPropName`, `createObjectURL`, `getObjectByName`, `makeRotationFromEuler`, `traverse`, `WrapModeV`, `parseNode`, `colorSpace`, `createLight`, `image/tga`, `parents`, `1878210UlfYsB`, `parse`, `88109LiBase`, `specular`, `eulerOrder`, `3160296lnAoxM`, `}(\\w+):[\\s\\t\\r\\n](.*)`, `path`, `has`, `weightTable`, `5629250ilZAuz`, `get`, `propertyList`, `match`, `connections`, `Number`, `manager`, `emissiveMap`, `displacementScale`, `.morphTargetInfluences[`, `_textDecoder`, `setCurrentProp`, `preRotation`, `replace`, `skeletons`, `colorSpaceToWorking`, `WrapModeU`, `Intensity`, `LayerElementMaterial`, `RotationOrder`, `curves`, `scale`, `Lcl_Scaling`, `addGlobalSceneSettings`, `itemError`, `BlendShapeChannel`, `getFloat64Array`, `addClip`, `GeometricTranslation`, `enum`, `Opacity`, `negativeMaterialIndices`, `parseSubNode`, `Vector3D`, `parentMatrixWorld`, `THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.`, `mappingType`, `map`, `scalingOffset`, `rawBones`, `generateTracks`, `specularMap`, `copy`, `littleEndian`, `LayerElementNormal`, `abs`, `Objects`, `IndexToDirect`, `morphTargets`, `PoseNode`, `parseGeometry`, `8lSFjQD`, `getTexture`, `setLookAtProperties`, `pop`, `parseTextures`, `opacity`, `setFromPoints`, `endKnot`, `setPosition`, `morphTargetsRelative`, `generateVectorTrack`, `ShadingModel`, `addGroup`, `value`, `getBoolean`, `userData`, `applyMatrix4`, `11hqmhWA`, `postRotation`, `dot`, `divideScalar`, `concat`, `times`, `LayerElementUV`, `premultiply`, `flattenVertex`, `emissiveIntensity`, `baseVertexPositions`, `split`, `fromArray`, `decompose`, `type`, `attrType`, `Geometry`, `transformLink`, `Filename`, `filter`, `THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected.`, `Camera`, `parseAnimationCurves`, `transparent`, `5gLPJgh`, `THREE.FBXLoader: morph target attached to more than one geometry is not supported.`, `knots`, `FarPlane`, `indexOf`, `Mesh`, `push`, `Vertices`, `children`, `attr`, `getTransformData`, `lookAt`, `setRGB`, `uvs`, `getUint64`, `materialIndex`, `crossOrigin`, `degree`, `byteLength`, `MappingInformationType`, `parseMaterial`];
  return R = function() {
    return e2;
  }, R();
}
var z = class extends ie {
  constructor(e2, t2, n2, r2, i2) {
    let a2 = F;
    super();
    let o2 = t2 ? t2.length - 1 : 0, s2 = n2 ? n2.length : 0;
    this.degree = e2, this.knots = t2, this.controlPoints = [], this[a2(535)] = r2 || 0, this.endKnot = i2 || o2;
    for (let e3 = 0; e3 < s2; ++e3) {
      let t3 = n2[e3];
      this.controlPoints[e3] = new g(t3.x, t3.y, t3.z, t3.w);
    }
  }
  [I(557)](e2, t2 = new y()) {
    let n2 = I, r2 = t2, i2 = this.knots[this[n2(535)]] + e2 * (this[n2(504)][this.endKnot] - this.knots[this.startKnot]), a2 = ce(this.degree, this.knots, this[n2(625)], i2);
    return a2.w !== 1 && a2.divideScalar(a2.w), r2[n2(623)](a2.x, a2.y, a2.z);
  }
  getTangent(e2, t2 = new y()) {
    let n2 = I, r2 = t2, i2 = this[n2(504)][0] + e2 * (this.knots[this.knots.length - 1] - this.knots[0]), a2 = pe(this.degree, this[n2(504)], this.controlPoints, i2, 1);
    return r2[n2(697)](a2[1]).normalize(), r2;
  }
  [I(591)]() {
    let e2 = I, t2 = super.toJSON();
    return t2[e2(519)] = this.degree, t2.knots = [...this.knots], t2.controlPoints = this.controlPoints.map((e3) => e3.toArray()), t2.startKnot = this.startKnot, t2.endKnot = this.endKnot, t2;
  }
  fromJSON(e2) {
    let t2 = I;
    return super[t2(561)](e2), this.degree = e2.degree, this.knots = [...e2.knots], this.controlPoints = e2.controlPoints.map((e3) => new g(e3[0], e3[1], e3[2], e3[3])), this.startKnot = e2.startKnot, this[t2(713)] = e2[t2(713)], this;
  }
}, B, V, H, U = class extends j {
  constructor(e2) {
    super(e2);
  }
  load(e2, t2, n2, r2) {
    let i2 = I, a2 = this, o2 = a2.path === `` ? x.extractUrlBase(e2) : a2.path, s2 = new ae(this.manager);
    s2.setPath(a2[i2(652)]), s2.setResponseType(`arraybuffer`), s2.setRequestHeader(a2.requestHeader), s2.setWithCredentials(a2.withCredentials), s2.load(e2, function(n3) {
      let s3 = i2;
      try {
        t2(a2[s3(646)](n3, o2));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2.manager[s3(679)](e2);
      }
    }, n2, r2);
  }
  parse(e2, t2) {
    let n2 = I;
    if (ye(e2)) B = new ve().parse(e2);
    else {
      let t3 = $(e2);
      if (!be(t3)) throw Error(`THREE.FBXLoader: Unknown format.`);
      if (K(t3) < 7e3) throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: ` + K(t3));
      B = new _e().parse(t3);
    }
    return new me(new C(this.manager).setPath(this.resourcePath || t2).setCrossOrigin(this[n2(518)]), this.manager).parse(B);
  }
}, me = class {
  constructor(e2, t2) {
    let n2 = I;
    this.textureLoader = e2, this[n2(661)] = t2;
  }
  parse() {
    let e2 = I;
    V = this.parseConnections();
    let t2 = this.parseImages(), n2 = this[e2(710)](t2), r2 = this.parseMaterials(n2), i2 = this.parseDeformers(), a2 = new he().parse(i2);
    return this[e2(583)](i2, a2, r2), H;
  }
  parseConnections() {
    let e2 = /* @__PURE__ */ new Map();
    return `Connections` in B && B.Connections.connections.forEach(function(t2) {
      let n2 = F, r2 = t2[0], i2 = t2[1], a2 = t2[2];
      e2.has(r2) || e2.set(r2, { parents: [], children: [] });
      let o2 = { ID: i2, relationship: a2 };
      e2.get(r2).parents.push(o2), e2[n2(653)](i2) || e2.set(i2, { parents: [], children: [] });
      let s2 = { ID: r2, relationship: a2 };
      e2.get(i2).children.push(s2);
    }), e2;
  }
  parseImages() {
    let e2 = I, t2 = {}, n2 = {};
    if (`Video` in B.Objects) {
      let r2 = B.Objects.Video;
      for (let i2 in r2) {
        let a2 = r2[i2], o2 = parseInt(i2);
        if (t2[o2] = a2.RelativeFilename || a2[e2(741)], `Content` in a2) {
          let t3 = a2.Content instanceof ArrayBuffer && a2.Content[e2(520)] > 0, o3 = typeof a2.Content == `string` && a2.Content !== ``;
          if (t3 || o3) {
            let e3 = this.parseImage(r2[i2]);
            n2[a2.RelativeFilename || a2.Filename] = e3;
          }
        }
      }
    }
    for (let r2 in t2) {
      let i2 = t2[r2];
      n2[i2] === void 0 ? t2[r2] = t2[r2].split(`\\`)[e2(709)]() : t2[r2] = n2[i2];
    }
    return t2;
  }
  parseImage(e2) {
    let t2 = I, n2 = e2.Content, r2 = e2.RelativeFilename || e2.Filename, i2 = r2[t2(592)](r2.lastIndexOf(`.`) + 1).toLowerCase(), a2;
    switch (i2) {
      case `bmp`:
        a2 = `image/bmp`;
        break;
      case `jpg`:
      case `jpeg`:
        a2 = `image/jpeg`;
        break;
      case `png`:
        a2 = `image/png`;
        break;
      case `tif`:
        a2 = `image/tiff`;
        break;
      case `tga`:
        this.manager.getHandler(t2(633)) === null && console.warn(`FBXLoader: TGA loader not found, skipping `, r2), a2 = t2(643);
        break;
      case t2(581):
        a2 = `image/webp`;
        break;
      default:
        console.warn(t2(551) + i2 + `" is not supported.`);
        return;
    }
    if (typeof n2 == t2(606)) return `data:` + a2 + `;base64,` + n2;
    {
      let e3 = new Uint8Array(n2);
      return window.URL[t2(635)](new Blob([e3], { type: a2 }));
    }
  }
  parseTextures(e2) {
    let t2 = I, n2 = /* @__PURE__ */ new Map();
    if (`Texture` in B.Objects) {
      let r2 = B.Objects.Texture;
      for (let i2 in r2) {
        let a2 = this.parseTexture(r2[i2], e2);
        n2[t2(623)](parseInt(i2), a2);
      }
    }
    return n2;
  }
  parseTexture(e2, t2) {
    let n2 = I, r2 = this[n2(576)](e2, t2);
    r2.ID = e2.id, r2.name = e2.attrName;
    let i2 = e2[n2(671)], a2 = e2[n2(639)], o2 = i2 === void 0 ? 0 : i2.value, s2 = a2 === void 0 ? 0 : a2[n2(719)];
    if (r2.wrapS = o2 === 0 ? 1e3 : 1001, r2.wrapT = s2 === 0 ? 1e3 : 1001, `Scaling` in e2) {
      let t3 = e2[n2(630)].value;
      r2.repeat.x = t3[0], r2.repeat.y = t3[1];
    }
    if (`Translation` in e2) {
      let t3 = e2.Translation.value;
      r2[n2(555)].x = t3[0], r2.offset.y = t3[1];
    }
    return r2;
  }
  [I(576)](e2, t2) {
    let n2 = I, r2 = e2.FileName.split(`.`).pop().toLowerCase(), i2 = this.manager.getHandler(`.` + r2);
    i2 === null && (i2 = this.textureLoader);
    let a2 = i2.path;
    a2 || i2[n2(570)](this.textureLoader.path);
    let o2 = V.get(e2.id).children, s2;
    if (o2 !== void 0 && o2.length > 0 && t2[o2[0].ID] !== void 0 && (s2 = t2[o2[0].ID], (s2[n2(506)](`blob:`) === 0 || s2.indexOf(`data:`) === 0) && i2.setPath(void 0)), s2 === void 0) return console.warn(`FBXLoader: Undefined filename, creating placeholder texture.`), new l();
    let c2 = i2.load(s2);
    return i2.setPath(a2), c2;
  }
  parseMaterials(e2) {
    let t2 = I, n2 = /* @__PURE__ */ new Map();
    if (`Material` in B.Objects) {
      let r2 = B[t2(701)].Material;
      for (let i2 in r2) {
        let a2 = this[t2(522)](r2[i2], e2);
        a2 !== null && n2.set(parseInt(i2), a2);
      }
    }
    return n2;
  }
  parseMaterial(e2, t2) {
    let n2 = I, i2 = e2.id, a2 = e2.attrName, o2 = e2[n2(717)];
    if (typeof o2 == n2(558) && (o2 = o2[n2(719)]), !V.has(i2)) return null;
    let s2 = this.parseParameters(e2, t2, i2), c2;
    switch (o2.toLowerCase()) {
      case n2(565):
        c2 = new r();
        break;
      case `lambert`:
        c2 = new w();
        break;
      default:
        console[n2(534)](n2(690), o2), c2 = new r();
        break;
    }
    return c2.setValues(s2), c2.name = a2, c2;
  }
  parseParameters(e2, t2, n2) {
    let r2 = I, i2 = {};
    e2.BumpFactor && (i2.bumpScale = e2.BumpFactor.value), e2.Diffuse ? i2[r2(573)] = S.colorSpaceToWorking(new o()[r2(735)](e2.Diffuse.value), f) : e2.DiffuseColor && (e2.DiffuseColor.type === `Color` || e2.DiffuseColor[r2(737)] === `ColorRGB`) && (i2[r2(573)] = S.colorSpaceToWorking(new o().fromArray(e2.DiffuseColor.value), `srgb`)), e2.DisplacementFactor && (i2[r2(663)] = e2.DisplacementFactor.value), e2.Emissive ? i2.emissive = S[r2(670)](new o().fromArray(e2.Emissive[r2(719)]), f) : e2.EmissiveColor && (e2.EmissiveColor[r2(737)] === r2(626) || e2.EmissiveColor.type === `ColorRGB`) && (i2[r2(624)] = S.colorSpaceToWorking(new o().fromArray(e2.EmissiveColor[r2(719)]), `srgb`)), e2.EmissiveFactor && (i2[r2(732)] = parseFloat(e2.EmissiveFactor.value)), i2[r2(711)] = 1 - (e2[r2(526)] ? parseFloat(e2.TransparencyFactor[r2(719)]) : 0), (i2.opacity === 1 || i2.opacity === 0) && (i2.opacity = e2.Opacity ? parseFloat(e2[r2(685)].value) : null, i2.opacity === null && (i2.opacity = 1)), i2[r2(711)] < 1 && (i2.transparent = true), e2.ReflectionFactor && (i2.reflectivity = e2.ReflectionFactor.value), e2.Shininess && (i2.shininess = e2.Shininess.value), e2.Specular ? i2[r2(648)] = S.colorSpaceToWorking(new o()[r2(735)](e2.Specular[r2(719)]), f) : e2.SpecularColor && e2.SpecularColor.type === `Color` && (i2.specular = S.colorSpaceToWorking(new o().fromArray(e2.SpecularColor.value), `srgb`));
    let a2 = this;
    return V.get(n2).children.forEach(function(e3) {
      let n3 = r2, o2 = e3.relationship;
      switch (o2) {
        case `Bump`:
          i2[n3(580)] = a2.getTexture(t2, e3.ID);
          break;
        case `Maya|TEX_ao_map`:
          i2.aoMap = a2.getTexture(t2, e3.ID);
          break;
        case `DiffuseColor`:
        case `Maya|TEX_color_map`:
          i2.map = a2.getTexture(t2, e3.ID), i2[n3(692)] !== void 0 && (i2.map.colorSpace = `srgb`);
          break;
        case `DisplacementColor`:
          i2.displacementMap = a2.getTexture(t2, e3.ID);
          break;
        case `EmissiveColor`:
          i2[n3(662)] = a2.getTexture(t2, e3.ID), i2[n3(662)] !== void 0 && (i2.emissiveMap.colorSpace = `srgb`);
          break;
        case `NormalMap`:
        case `Maya|TEX_normal_map`:
          i2.normalMap = a2.getTexture(t2, e3.ID);
          break;
        case `ReflectionColor`:
          i2.envMap = a2.getTexture(t2, e3.ID), i2[n3(536)] !== void 0 && (i2.envMap.mapping = 303, i2.envMap[n3(641)] = `srgb`);
          break;
        case `SpecularColor`:
          i2.specularMap = a2[n3(707)](t2, e3.ID), i2.specularMap !== void 0 && (i2[n3(696)].colorSpace = `srgb`);
          break;
        case `TransparentColor`:
        case `TransparencyFactor`:
          i2.alphaMap = a2.getTexture(t2, e3.ID), i2[n3(501)] = true;
          break;
        default:
          console.warn(`THREE.FBXLoader: %s map is not supported in three.js, skipping texture.`, o2);
          break;
      }
    }), i2;
  }
  getTexture(e2, t2) {
    return `LayeredTexture` in B[I(701)] && t2 in B.Objects.LayeredTexture && (console.warn(`THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer.`), t2 = V.get(t2).children[0].ID), e2.get(t2);
  }
  parseDeformers() {
    let e2 = I, t2 = {}, n2 = {};
    if (`Deformer` in B.Objects) {
      let r2 = B.Objects.Deformer;
      for (let i2 in r2) {
        let a2 = r2[i2], o2 = V.get(parseInt(i2));
        if (a2[e2(738)] === `Skin`) {
          let n3 = this.parseSkeleton(o2, r2);
          n3.ID = i2, o2[e2(644)].length > 1 && console.warn(`THREE.FBXLoader: skeleton attached to more than one geometry is not supported.`), n3[e2(577)] = o2[e2(644)][0].ID, t2[i2] = n3;
        } else if (a2.attrType === `BlendShape`) {
          let t3 = { id: i2 };
          t3.rawTargets = this.parseMorphTargets(o2, r2), t3.id = i2, o2.parents[e2(543)] > 1 && console.warn(e2(503)), n2[i2] = t3;
        }
      }
    }
    return { skeletons: t2, morphTargets: n2 };
  }
  parseSkeleton(e2, t2) {
    let n2 = I, r2 = [];
    return e2[n2(510)][n2(595)](function(e3) {
      let i2 = n2, a2 = t2[e3.ID];
      if (a2[i2(738)] !== `Cluster`) return;
      let o2 = { ID: e3.ID, indices: [], weights: [], transformLink: new M().fromArray(a2[i2(564)].a) };
      `Indexes` in a2 && (o2.indices = a2.Indexes.a, o2.weights = a2.Weights.a), r2.push(o2);
    }), { rawBones: r2, bones: [] };
  }
  parseMorphTargets(e2, t2) {
    let n2 = I, r2 = [];
    for (let i2 = 0; i2 < e2.children.length; i2++) {
      let a2 = e2[n2(510)][i2], o2 = t2[a2.ID], s2 = { name: o2.attrName, initialWeight: o2.DeformPercent, id: o2.id, fullWeights: o2.FullWeights.a };
      if (o2.attrType !== n2(680)) return;
      s2.geoID = V.get(parseInt(a2.ID)).children[n2(742)](function(e3) {
        return e3.relationship === void 0;
      })[0].ID, r2.push(s2);
    }
    return r2;
  }
  parseScene(e2, t2, n2) {
    let r2 = I;
    H = new E();
    let i2 = this[r2(617)](e2.skeletons, t2, n2), a2 = B.Objects[r2(569)], o2 = this;
    i2[r2(595)](function(e3) {
      let t3 = a2[e3.ID];
      o2.setLookAtProperties(e3, t3), V.get(e3.ID).parents.forEach(function(t4) {
        let n3 = i2.get(t4.ID);
        n3 !== void 0 && n3.add(e3);
      }), e3.parent === null && H.add(e3);
    }), this[r2(678)](), H[r2(638)](function(e3) {
      let t3 = r2;
      if (e3[t3(721)].transformData) {
        e3.parent && (e3[t3(721)][t3(539)].parentMatrix = e3.parent.matrix, e3.userData.transformData[t3(689)] = e3[t3(589)].matrixWorld);
        let n3 = X(e3.userData.transformData);
        e3.applyMatrix4(n3), e3.updateWorldMatrix();
      }
    });
    let s2 = this[r2(530)](), c2 = /* @__PURE__ */ new Set();
    for (let t3 in e2[r2(669)]) e2[r2(669)][t3].rawBones.forEach(function(n3, r3) {
      let i3 = e2.skeletons[t3].bones[r3];
      i3 && c2.add(i3.ID);
    });
    let l2 = new M();
    H[r2(638)](function(e3) {
      let t3 = r2;
      if (e3.isBone && e3.ID !== void 0 && !c2.has(e3.ID)) {
        let n3 = s2[e3.ID];
        n3 !== void 0 && (e3[t3(589)] ? (l2.copy(e3.parent.matrixWorld).invert(), l2.multiply(n3)) : l2.copy(n3), l2[t3(736)](e3[t3(586)], e3[t3(562)], e3.scale), e3.updateMatrix(), e3.matrixWorld.copy(n3));
      }
    }), this.bindSkeleton(e2[r2(669)], t2, i2);
    let u2 = new ge()[r2(646)]();
    H.children.length === 1 && H.children[0].isGroup && (H.children[0].animations = u2, H = H.children[0]), H.animations = u2, `GlobalSettings` in B && `UpAxis` in B.GlobalSettings && B.GlobalSettings.UpAxis[r2(719)] === 2 && (console.warn(`THREE.FBXLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted.`), H[r2(533)].set(-Math.PI / 2, 0, 0));
  }
  [I(617)](e2, t2, n2) {
    let r2 = I, i2 = /* @__PURE__ */ new Map(), o2 = B.Objects.Model;
    for (let s2 in o2) {
      let c2 = parseInt(s2), l2 = o2[s2], u2 = V.get(c2), d2 = this.buildSkeleton(u2, e2, c2, l2.attrName);
      if (!d2) {
        switch (l2[r2(738)]) {
          case r2(499):
            d2 = this.createCamera(u2);
            break;
          case `Light`:
            d2 = this[r2(642)](u2);
            break;
          case r2(507):
            d2 = this.createMesh(u2, t2, n2);
            break;
          case `NurbsCurve`:
            d2 = this.createCurve(u2, t2);
            break;
          case `LimbNode`:
          case `Root`:
            d2 = new A();
            break;
          default:
            d2 = new E();
            break;
        }
        d2.name = l2[r2(579)] ? a.sanitizeNodeName(l2[r2(579)]) : ``, d2.userData.originalName = l2.attrName, d2.ID = c2;
      }
      this[r2(512)](d2, l2), i2.set(c2, d2);
    }
    return i2;
  }
  buildSkeleton(e2, t2, n2, r2) {
    let i2 = I, o2 = null;
    return e2[i2(644)].forEach(function(e3) {
      for (let i3 in t2) {
        let s2 = t2[i3];
        s2.rawBones.forEach(function(t3, i4) {
          let c2 = F;
          if (t3.ID === e3.ID) {
            let e4 = o2;
            o2 = new A(), o2.matrixWorld[c2(697)](t3[c2(740)]), o2.name = r2 ? a.sanitizeNodeName(r2) : ``, o2[c2(721)].originalName = r2, o2.ID = n2, s2.bones[i4] = o2, e4 !== null && o2.add(e4);
          }
        });
      }
    }), o2;
  }
  createCamera(e2) {
    let t2 = I, n2, r2;
    if (e2.children[t2(595)](function(e3) {
      let t3 = B.Objects.NodeAttribute[e3.ID];
      t3 !== void 0 && (r2 = t3);
    }), r2 === void 0) n2 = new N();
    else {
      let e3 = 0;
      r2.CameraProjectionType !== void 0 && r2[t2(590)].value === 1 && (e3 = 1);
      let i2 = 1;
      r2.NearPlane !== void 0 && (i2 = r2[t2(523)][t2(719)] / 1e3);
      let a2 = 1e3;
      r2.FarPlane !== void 0 && (a2 = r2[t2(505)].value / 1e3);
      let o2 = window.innerWidth, s2 = window.innerHeight;
      r2.AspectWidth !== void 0 && r2.AspectHeight !== void 0 && (o2 = r2.AspectWidth.value, s2 = r2.AspectHeight.value);
      let c2 = o2 / s2, l2 = 45;
      r2.FieldOfView !== void 0 && (l2 = r2.FieldOfView[t2(719)]);
      let u2 = r2[t2(602)] ? r2[t2(602)][t2(719)] : null;
      switch (e3) {
        case 0:
          n2 = new re(l2, c2, i2, a2), u2 !== null && n2[t2(632)](u2);
          break;
        case 1:
          console.warn(t2(531)), n2 = new N();
          break;
        default:
          console[t2(534)](t2(524) + e3 + `.`), n2 = new N();
          break;
      }
    }
    return n2;
  }
  createLight(e2) {
    let n2 = I, r2, i2;
    if (e2.children.forEach(function(e3) {
      let t2 = B.Objects.NodeAttribute[e3.ID];
      t2 !== void 0 && (i2 = t2);
    }), i2 === void 0) r2 = new N();
    else {
      let e3;
      e3 = i2.LightType === void 0 ? 0 : i2.LightType.value;
      let a2 = 16777215;
      i2.Color !== void 0 && (a2 = S[n2(670)](new o().fromArray(i2.Color.value), `srgb`));
      let s2 = i2[n2(672)] === void 0 ? 1 : i2.Intensity.value / 100;
      i2.CastLightOnObject !== void 0 && i2.CastLightOnObject.value === 0 && (s2 = 0);
      let c2 = 0;
      switch (i2.FarAttenuationEnd !== void 0 && (c2 = i2.EnableFarAttenuation !== void 0 && i2.EnableFarAttenuation.value === 0 ? 0 : i2.FarAttenuationEnd.value), e3) {
        case 0:
          r2 = new P(a2, s2, c2, 1);
          break;
        case 1:
          r2 = new ee(a2, s2);
          break;
        case 2:
          let e4 = Math.PI / 3, o2 = 0;
          i2.OuterAngle === void 0 ? i2.InnerAngle !== void 0 && (e4 = t.degToRad(i2.InnerAngle.value)) : (e4 = t.degToRad(i2.OuterAngle.value), i2.InnerAngle !== void 0 && (o2 = 1 - i2.InnerAngle[n2(719)] / i2.OuterAngle.value, o2 = Math.max(0, o2))), r2 = new u(a2, s2, c2, e4, o2, 1);
          break;
        default:
          console.warn(`THREE.FBXLoader: Unknown light type ` + i2.LightType.value + n2(593)), r2 = new P(a2, s2);
          break;
      }
      i2.CastShadows !== void 0 && i2.CastShadows.value === 1 && (r2.castShadow = true);
    }
    return r2;
  }
  createMesh(e2, t2, n2) {
    let i2 = I, a2, o2 = null, s2 = null, c2 = [];
    if (e2.children.forEach(function(e3) {
      let r2 = F;
      t2.has(e3.ID) && (o2 = t2.get(e3.ID)), n2.has(e3.ID) && c2.push(n2[r2(656)](e3.ID));
    }), c2.length > 1 ? s2 = c2 : c2[i2(543)] > 0 ? s2 = c2[0] : (s2 = new r({ name: j.DEFAULT_MATERIAL_NAME, color: 13421772 }), c2[i2(508)](s2)), `color` in o2[i2(541)] && c2.forEach(function(e3) {
      e3.vertexColors = true;
    }), o2.groups.length > 0) {
      let e3 = false;
      for (let t3 = 0, n3 = o2.groups.length; t3 < n3; t3++) {
        let n4 = o2.groups[t3];
        (n4.materialIndex < 0 || n4.materialIndex >= c2.length) && (n4.materialIndex = c2.length, e3 = true);
      }
      if (e3) {
        let e4 = new r();
        c2.push(e4);
      }
    }
    return o2.FBX_Deformer ? (a2 = new d(o2, s2), a2.normalizeSkinWeights()) : a2 = new te(o2, s2), a2;
  }
  createCurve(e2, t2) {
    return new p(e2.children.reduce(function(e3, n2) {
      let r2 = F;
      return t2[r2(653)](n2.ID) && (e3 = t2[r2(656)](n2.ID)), e3;
    }, null), new b({ name: j.DEFAULT_MATERIAL_NAME, color: 3342591, linewidth: 1 }));
  }
  getTransformData(e2, t2) {
    let n2 = I, r2 = {};
    n2(538) in t2 && (r2.inheritType = parseInt(t2.InheritType.value)), n2(674) in t2 ? r2.eulerOrder = Z(t2.RotationOrder.value) : r2.eulerOrder = Z(0), `Lcl_Translation` in t2 && (r2.translation = t2.Lcl_Translation[n2(719)]), `PreRotation` in t2 && (r2.preRotation = t2[n2(584)][n2(719)]), `Lcl_Rotation` in t2 && (r2.rotation = t2.Lcl_Rotation[n2(719)]), `PostRotation` in t2 && (r2.postRotation = t2[n2(571)].value), `Lcl_Scaling` in t2 && (r2.scale = t2[n2(677)].value), `ScalingOffset` in t2 && (r2[n2(693)] = t2.ScalingOffset.value), `ScalingPivot` in t2 && (r2.scalingPivot = t2.ScalingPivot.value), `RotationOffset` in t2 && (r2[n2(525)] = t2.RotationOffset[n2(719)]), `RotationPivot` in t2 && (r2[n2(567)] = t2.RotationPivot.value), e2.userData.transformData = r2;
  }
  [I(708)](e2, t2) {
    `LookAtProperty` in t2 && V.get(e2.ID).children.forEach(function(t3) {
      let n2 = F;
      if (t3[n2(560)] === `LookAtProperty`) {
        let r2 = B.Objects[n2(569)][t3.ID];
        if (`Lcl_Translation` in r2) {
          let t4 = r2.Lcl_Translation[n2(719)];
          e2.target === void 0 ? e2[n2(513)](new y().fromArray(t4)) : (e2.target[n2(586)][n2(735)](t4), H.add(e2.target));
        }
      }
    });
  }
  bindSkeleton(e2, t2, r2) {
    let i2 = I;
    for (let a2 in e2) {
      let o2 = e2[a2], s2 = [];
      for (let e3 = 0, t3 = o2[i2(572)][i2(543)]; e3 < t3; e3++) {
        let t4 = new M();
        o2.bones[e3] && o2.rawBones[e3] && t4.copy(o2.rawBones[e3].transformLink).invert(), s2[i2(508)](t4);
      }
      V[i2(656)](parseInt(o2.ID))[i2(644)].forEach(function(e3) {
        if (t2.has(e3.ID)) {
          let t3 = e3.ID;
          V.get(t3).parents.forEach(function(e4) {
            let t4 = F;
            if (r2.has(e4.ID)) {
              let i3 = r2.get(e4.ID);
              i3.updateMatrixWorld(true), i3[t4(594)](new n(o2.bones, s2), i3.matrixWorld);
            }
          });
        }
      });
    }
  }
  [I(530)]() {
    let e2 = I, t2 = {};
    if (e2(588) in B.Objects) {
      let n2 = B[e2(701)][e2(588)];
      for (let r2 in n2) if (n2[r2][e2(738)] === `BindPose` && n2[r2].NbPoseNodes > 0) {
        let i2 = n2[r2][e2(704)];
        Array.isArray(i2) ? i2.forEach(function(e3) {
          t2[e3.Node] = new M().fromArray(e3.Matrix.a);
        }) : t2[i2.Node] = new M().fromArray(i2.Matrix.a);
      }
    }
    return t2;
  }
  addGlobalSceneSettings() {
    let e2 = I;
    if (`GlobalSettings` in B) {
      if (`AmbientColor` in B.GlobalSettings) {
        let t2 = B.GlobalSettings.AmbientColor.value, n2 = t2[0], r2 = t2[1], i2 = t2[2];
        if (n2 !== 0 || r2 !== 0 || i2 !== 0) {
          let t3 = new o()[e2(514)](n2, r2, i2, f);
          H.add(new O(t3, 1));
        }
      }
      `UnitScaleFactor` in B[e2(585)] && (H[e2(721)].unitScaleFactor = B[e2(585)].UnitScaleFactor[e2(719)]);
    }
  }
}, he = class {
  constructor() {
    this.negativeMaterialIndices = false;
  }
  [I(646)](e2) {
    let t2 = I, n2 = /* @__PURE__ */ new Map();
    if (t2(739) in B.Objects) {
      let r2 = B.Objects.Geometry;
      for (let i2 in r2) {
        let a2 = V.get(parseInt(i2)), o2 = this.parseGeometry(a2, r2[i2], e2);
        n2[t2(623)](parseInt(i2), o2);
      }
    }
    return this.negativeMaterialIndices === true && console.warn(t2(498)), n2;
  }
  [I(705)](e2, t2, n2) {
    let r2 = I;
    switch (t2[r2(738)]) {
      case `Mesh`:
        return this[r2(540)](e2, t2, n2);
      case `NurbsCurve`:
        return this.parseNurbsGeometry(t2);
    }
  }
  parseMeshGeometry(e2, t2, n2) {
    let r2 = I, i2 = n2[r2(669)], a2 = [], o2 = e2.parents.map(function(e3) {
      return B.Objects.Model[e3.ID];
    });
    if (o2.length === 0) return;
    let s2 = e2[r2(510)].reduce(function(e3, t3) {
      return i2[t3.ID] !== void 0 && (e3 = i2[t3.ID]), e3;
    }, null);
    e2.children.forEach(function(e3) {
      let t3 = r2;
      n2.morphTargets[e3.ID] !== void 0 && a2[t3(508)](n2[t3(703)][e3.ID]);
    });
    let c2 = o2[0], l2 = {};
    `RotationOrder` in c2 && (l2.eulerOrder = Z(c2.RotationOrder[r2(719)])), `InheritType` in c2 && (l2.inheritType = parseInt(c2.InheritType.value)), `GeometricTranslation` in c2 && (l2[r2(609)] = c2[r2(683)].value), r2(556) in c2 && (l2[r2(533)] = c2.GeometricRotation.value), `GeometricScaling` in c2 && (l2.scale = c2.GeometricScaling.value);
    let u2 = X(l2);
    return this.genGeometry(t2, s2, a2, u2);
  }
  genGeometry(e2, t2, n2, r2) {
    let a2 = I, o2 = new i();
    e2.attrName && (o2.name = e2[a2(579)]);
    let s2 = this.parseGeoNode(e2, t2), c2 = this.genBuffers(s2), l2 = new v(c2.vertex, 3);
    if (l2[a2(722)](r2), o2.setAttribute(`position`, l2), c2.colors.length > 0 && o2.setAttribute(`color`, new v(c2[a2(574)], 3)), t2 && (o2.setAttribute(a2(608), new D(c2.weightsIndices, 4)), o2.setAttribute(`skinWeight`, new v(c2[a2(620)], 4)), o2.FBX_Deformer = t2), c2.normal.length > 0) {
      let e3 = new T().getNormalMatrix(r2), t3 = new v(c2.normal, 3);
      t3.applyNormalMatrix(e3), o2.setAttribute(`normal`, t3);
    }
    if (c2.uvs.forEach(function(e3, t3) {
      let n3 = t3 === 0 ? `uv` : `uv` + t3;
      o2.setAttribute(n3, new v(c2.uvs[t3], 2));
    }), s2.material && s2.material.mappingType !== `AllSame`) {
      let e3 = c2.materialIndex[0], t3 = 0;
      if (c2.materialIndex.forEach(function(n3, r3) {
        n3 !== e3 && (o2.addGroup(t3, r3 - t3, e3), e3 = n3, t3 = r3);
      }), o2.groups.length > 0) {
        let t4 = o2.groups[o2.groups.length - 1], n3 = t4[a2(547)] + t4.count;
        n3 !== c2.materialIndex.length && o2.addGroup(n3, c2.materialIndex.length - n3, e3);
      }
      o2.groups.length === 0 && o2[a2(718)](0, c2.materialIndex[a2(543)], c2.materialIndex[0]);
    }
    return this.addMorphTargets(o2, e2, n2, r2), o2;
  }
  parseGeoNode(e2, t2) {
    let n2 = I, r2 = {};
    if (r2.vertexPositions = e2.Vertices === void 0 ? [] : e2.Vertices.a, r2.vertexIndices = e2.PolygonVertexIndex === void 0 ? [] : e2.PolygonVertexIndex.a, e2.LayerElementColor && e2.LayerElementColor[0].Colors && (r2.color = this.parseVertexColors(e2.LayerElementColor[0])), e2[n2(673)] && (r2.material = this.parseMaterialIndices(e2.LayerElementMaterial[0])), e2[n2(699)] && (r2.normal = this.parseNormals(e2.LayerElementNormal[0])), e2[n2(729)]) {
      r2.uv = [];
      let t3 = 0;
      for (; e2[n2(729)][t3]; ) e2.LayerElementUV[t3].UV && r2.uv.push(this.parseUVs(e2.LayerElementUV[t3])), t3++;
    }
    return r2.weightTable = {}, t2 !== null && (r2.skeleton = t2, t2[n2(694)][n2(595)](function(e3, t3) {
      e3.indices.forEach(function(n3, i2) {
        let a2 = F;
        r2.weightTable[n3] === void 0 && (r2.weightTable[n3] = []), r2.weightTable[n3][a2(508)]({ id: t3, weight: e3.weights[i2] });
      });
    })), r2;
  }
  genBuffers(e2) {
    let t2 = I, n2 = { vertex: [], normal: [], colors: [], uvs: [], materialIndex: [], vertexWeights: [], weightsIndices: [] }, r2 = 0, i2 = 0, a2 = false, o2 = [], s2 = [], c2 = [], l2 = [], u2 = [], d2 = [], f2 = this;
    return e2.vertexIndices[t2(595)](function(p2, m2) {
      let h2 = t2, g2, _2 = false;
      p2 < 0 && (p2 ^= -1, _2 = true);
      let v2 = [], y2 = [];
      if (o2.push(p2 * 3, p2 * 3 + 1, p2 * 3 + 2), e2.color) {
        let t3 = q(m2, r2, p2, e2.color);
        c2.push(t3[0], t3[1], t3[2]);
      }
      if (e2.skeleton) {
        if (e2[h2(654)][p2] !== void 0 && e2[h2(654)][p2].forEach(function(e3) {
          let t3 = h2;
          y2.push(e3.weight), v2[t3(508)](e3.id);
        }), y2[h2(543)] > 4) {
          a2 || (a2 = (console.warn(`THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.`), true));
          let e3 = [0, 0, 0, 0], t3 = [0, 0, 0, 0];
          y2.forEach(function(n3, r3) {
            let i3 = n3, a3 = v2[r3];
            t3.forEach(function(t4, n4, r4) {
              if (i3 > t4) {
                r4[n4] = i3, i3 = t4;
                let o3 = e3[n4];
                e3[n4] = a3, a3 = o3;
              }
            });
          }), v2 = e3, y2 = t3;
        }
        for (; y2.length < 4; ) y2.push(0), v2.push(0);
        for (let e3 = 0; e3 < 4; ++e3) u2.push(y2[e3]), d2.push(v2[e3]);
      }
      if (e2[h2(610)]) {
        let t3 = q(m2, r2, p2, e2[h2(610)]);
        s2.push(t3[0], t3[1], t3[2]);
      }
      e2.material && e2.material[h2(691)] !== `AllSame` && (g2 = q(m2, r2, p2, e2.material)[0], g2 < 0 && (f2[h2(686)] = true, g2 = 0)), e2.uv && e2.uv.forEach(function(e3, t3) {
        let n3 = q(m2, r2, p2, e3);
        l2[t3] === void 0 && (l2[t3] = []), l2[t3].push(n3[0]), l2[t3].push(n3[1]);
      }), i2++, _2 && (f2.genFace(n2, e2, o2, g2, s2, c2, l2, u2, d2, i2), r2++, i2 = 0, o2 = [], s2 = [], c2 = [], l2 = [], u2 = [], d2 = []);
    }), n2;
  }
  getNormalNewell(e2) {
    let t2 = I, n2 = new y(0, 0, 0);
    for (let r2 = 0; r2 < e2.length; r2++) {
      let i2 = e2[r2], a2 = e2[(r2 + 1) % e2[t2(543)]];
      n2.x += (i2.y - a2.y) * (i2.z + a2.z), n2.y += (i2.z - a2.z) * (i2.x + a2.x), n2.z += (i2.x - a2.x) * (i2.y + a2.y);
    }
    return n2[t2(621)](), n2;
  }
  getNormalTangentAndBitangent(e2) {
    let t2 = I, n2 = this.getNormalNewell(e2), r2 = (Math[t2(700)](n2.z) > 0.5 ? new y(0, 1, 0) : new y(0, 0, 1)).cross(n2)[t2(621)]();
    return { normal: n2, tangent: r2, bitangent: n2.clone().cross(r2).normalize() };
  }
  flattenVertex(e2, t2, n2) {
    return new s(e2.dot(t2), e2.dot(n2));
  }
  genFace(e2, t2, n2, r2, i2, a2, o2, s2, c2, l2) {
    let u2 = I, d2;
    if (l2 > 3) {
      let e3 = [], r3 = t2[u2(733)] || t2.vertexPositions;
      for (let t3 = 0; t3 < n2.length; t3 += 3) e3[u2(508)](new y(r3[n2[t3]], r3[n2[t3 + 1]], r3[n2[t3 + 2]]));
      let { tangent: i3, bitangent: a3 } = this.getNormalTangentAndBitangent(e3), o3 = [];
      for (let t3 of e3) o3[u2(508)](this[u2(731)](t3, i3, a3));
      d2 = k.triangulateShape(o3, []);
    } else d2 = [[0, 1, 2]];
    for (let [l3, f2, p2] of d2) e2[u2(598)][u2(508)](t2.vertexPositions[n2[l3 * 3]]), e2.vertex[u2(508)](t2.vertexPositions[n2[l3 * 3 + 1]]), e2.vertex.push(t2.vertexPositions[n2[l3 * 3 + 2]]), e2.vertex.push(t2.vertexPositions[n2[f2 * 3]]), e2[u2(598)][u2(508)](t2.vertexPositions[n2[f2 * 3 + 1]]), e2.vertex.push(t2.vertexPositions[n2[f2 * 3 + 2]]), e2.vertex.push(t2.vertexPositions[n2[p2 * 3]]), e2.vertex[u2(508)](t2.vertexPositions[n2[p2 * 3 + 1]]), e2.vertex.push(t2.vertexPositions[n2[p2 * 3 + 2]]), t2.skeleton && (e2.vertexWeights.push(s2[l3 * 4]), e2.vertexWeights[u2(508)](s2[l3 * 4 + 1]), e2.vertexWeights[u2(508)](s2[l3 * 4 + 2]), e2.vertexWeights[u2(508)](s2[l3 * 4 + 3]), e2.vertexWeights[u2(508)](s2[f2 * 4]), e2.vertexWeights.push(s2[f2 * 4 + 1]), e2.vertexWeights[u2(508)](s2[f2 * 4 + 2]), e2.vertexWeights.push(s2[f2 * 4 + 3]), e2[u2(620)].push(s2[p2 * 4]), e2.vertexWeights.push(s2[p2 * 4 + 1]), e2.vertexWeights.push(s2[p2 * 4 + 2]), e2[u2(620)][u2(508)](s2[p2 * 4 + 3]), e2.weightsIndices.push(c2[l3 * 4]), e2.weightsIndices[u2(508)](c2[l3 * 4 + 1]), e2.weightsIndices.push(c2[l3 * 4 + 2]), e2.weightsIndices.push(c2[l3 * 4 + 3]), e2.weightsIndices.push(c2[f2 * 4]), e2.weightsIndices.push(c2[f2 * 4 + 1]), e2.weightsIndices[u2(508)](c2[f2 * 4 + 2]), e2.weightsIndices[u2(508)](c2[f2 * 4 + 3]), e2.weightsIndices.push(c2[p2 * 4]), e2.weightsIndices.push(c2[p2 * 4 + 1]), e2.weightsIndices.push(c2[p2 * 4 + 2]), e2[u2(553)][u2(508)](c2[p2 * 4 + 3])), t2[u2(573)] && (e2.colors.push(a2[l3 * 3]), e2.colors[u2(508)](a2[l3 * 3 + 1]), e2.colors.push(a2[l3 * 3 + 2]), e2[u2(574)].push(a2[f2 * 3]), e2.colors.push(a2[f2 * 3 + 1]), e2.colors.push(a2[f2 * 3 + 2]), e2.colors.push(a2[p2 * 3]), e2.colors[u2(508)](a2[p2 * 3 + 1]), e2.colors.push(a2[p2 * 3 + 2])), t2.material && t2.material.mappingType !== `AllSame` && (e2.materialIndex[u2(508)](r2), e2[u2(517)].push(r2), e2.materialIndex[u2(508)](r2)), t2.normal && (e2.normal.push(i2[l3 * 3]), e2.normal.push(i2[l3 * 3 + 1]), e2.normal.push(i2[l3 * 3 + 2]), e2.normal[u2(508)](i2[f2 * 3]), e2.normal.push(i2[f2 * 3 + 1]), e2.normal.push(i2[f2 * 3 + 2]), e2[u2(610)].push(i2[p2 * 3]), e2.normal.push(i2[p2 * 3 + 1]), e2.normal.push(i2[p2 * 3 + 2])), t2.uv && t2.uv[u2(595)](function(t3, n3) {
      let r3 = u2;
      e2.uvs[n3] === void 0 && (e2.uvs[n3] = []), e2.uvs[n3].push(o2[n3][l3 * 2]), e2.uvs[n3][r3(508)](o2[n3][l3 * 2 + 1]), e2.uvs[n3].push(o2[n3][f2 * 2]), e2[r3(515)][n3].push(o2[n3][f2 * 2 + 1]), e2.uvs[n3].push(o2[n3][p2 * 2]), e2.uvs[n3].push(o2[n3][p2 * 2 + 1]);
    });
  }
  addMorphTargets(e2, t2, n2, r2) {
    let i2 = I;
    if (n2[i2(543)] === 0) return;
    e2[i2(715)] = true, e2.morphAttributes.position = [];
    let a2 = r2[i2(599)]()[i2(714)](0, 0, 0), o2 = this;
    n2.forEach(function(n3) {
      let r3 = i2;
      n3.rawTargets[r3(595)](function(n4) {
        let i3 = r3, s2 = B.Objects.Geometry[n4.geoID];
        s2 !== void 0 && o2.genMorphGeometry(e2, t2, s2, a2, n4[i3(542)]);
      });
    });
  }
  genMorphGeometry(e2, t2, n2, r2, i2) {
    let a2 = I, o2 = t2.Vertices === void 0 ? [] : t2.Vertices.a, s2 = t2.PolygonVertexIndex === void 0 ? [] : t2.PolygonVertexIndex.a, c2 = n2.Vertices === void 0 ? [] : n2[a2(509)].a, l2 = n2.Indexes === void 0 ? [] : n2.Indexes.a, u2 = e2.attributes.position.count * 3, d2 = new Float32Array(u2);
    for (let e3 = 0; e3 < l2.length; e3++) {
      let t3 = l2[e3] * 3;
      d2[t3] = c2[e3 * 3], d2[t3 + 1] = c2[e3 * 3 + 1], d2[t3 + 2] = c2[e3 * 3 + 2];
    }
    let f2 = { vertexIndices: s2, vertexPositions: d2, baseVertexPositions: o2 }, p2 = new v(this.genBuffers(f2).vertex, 3);
    p2.name = i2 || n2.attrName, p2[a2(722)](r2), e2.morphAttributes.position.push(p2);
  }
  parseNormals(e2) {
    let t2 = e2[I(521)], n2 = e2.ReferenceInformationType, r2 = e2.Normals.a, i2 = [];
    return n2 === `IndexToDirect` && (`NormalIndex` in e2 ? i2 = e2.NormalIndex.a : `NormalsIndex` in e2 && (i2 = e2.NormalsIndex.a)), { dataSize: 3, buffer: r2, indices: i2, mappingType: t2, referenceType: n2 };
  }
  parseUVs(e2) {
    let t2 = e2[I(521)], n2 = e2.ReferenceInformationType, r2 = e2.UV.a, i2 = [];
    return n2 === `IndexToDirect` && (i2 = e2.UVIndex.a), { dataSize: 2, buffer: r2, indices: i2, mappingType: t2, referenceType: n2 };
  }
  parseVertexColors(e2) {
    let t2 = I, n2 = e2.MappingInformationType, r2 = e2[t2(611)], i2 = e2.Colors.a, a2 = [];
    r2 === t2(702) && (a2 = e2.ColorIndex.a);
    for (let e3 = 0, t3 = new o(); e3 < i2.length; e3 += 4) t3.fromArray(i2, e3), S.colorSpaceToWorking(t3, f), t3.toArray(i2, e3);
    return { dataSize: 4, buffer: i2, indices: a2, mappingType: n2, referenceType: r2 };
  }
  parseMaterialIndices(e2) {
    let t2 = e2.MappingInformationType, n2 = e2.ReferenceInformationType;
    if (t2 === `NoMappingInformation`) return { dataSize: 1, buffer: [0], indices: [0], mappingType: `AllSame`, referenceType: n2 };
    let r2 = e2.Materials.a, i2 = [];
    for (let e3 = 0; e3 < r2.length; ++e3) i2.push(e3);
    return { dataSize: 1, buffer: r2, indices: i2, mappingType: t2, referenceType: n2 };
  }
  parseNurbsGeometry(e2) {
    let t2 = I, n2 = parseInt(e2.Order);
    if (isNaN(n2)) return console.error(`THREE.FBXLoader: Invalid Order %s given for geometry ID: %s`, e2.Order, e2.id), new i();
    let r2 = n2 - 1, a2 = e2.KnotVector.a, o2 = [], s2 = e2.Points.a;
    for (let e3 = 0, t3 = s2.length; e3 < t3; e3 += 4) o2.push(new g().fromArray(s2, e3));
    let c2, l2;
    if (e2.Form === `Closed`) o2.push(o2[0]);
    else if (e2.Form === `Periodic`) {
      c2 = r2, l2 = a2.length - 1 - c2;
      for (let e3 = 0; e3 < r2; ++e3) o2[t2(508)](o2[e3]);
    }
    let u2 = new z(r2, a2, o2, c2, l2).getPoints(o2.length * 12);
    return new i()[t2(712)](u2);
  }
}, ge = class {
  [I(646)]() {
    let e2 = I, t2 = [], n2 = this.parseClips();
    if (n2 !== void 0) for (let r2 in n2) {
      let i2 = n2[r2], a2 = this[e2(682)](i2);
      t2.push(a2);
    }
    return t2;
  }
  parseClips() {
    if (B.Objects.AnimationCurve === void 0) return;
    let e2 = this.parseAnimationCurveNodes();
    this.parseAnimationCurves(e2);
    let t2 = this.parseAnimationLayers(e2);
    return this.parseAnimStacks(t2);
  }
  [I(528)]() {
    let e2 = I, t2 = B.Objects.AnimationCurveNode, n2 = /* @__PURE__ */ new Map();
    for (let r2 in t2) {
      let i2 = t2[r2];
      if (i2.attrName[e2(658)](/S|R|T|DeformPercent/) !== null) {
        let e3 = { id: i2.id, attr: i2.attrName, curves: {} };
        n2.set(e3.id, e3);
      }
    }
    return n2;
  }
  [I(500)](e2) {
    let t2 = I, n2 = B.Objects.AnimationCurve;
    for (let r2 in n2) {
      let i2 = { id: n2[r2].id, times: n2[r2].KeyTime.a.map(xe), values: n2[r2].KeyValueFloat.a }, a2 = V.get(i2.id);
      if (a2 !== void 0) {
        let n3 = a2.parents[0].ID, r3 = a2[t2(644)][0].relationship;
        r3.match(/X/) ? e2.get(n3).curves.x = i2 : r3.match(/Y/) ? e2.get(n3).curves.y = i2 : r3.match(/Z/) ? e2.get(n3).curves.z = i2 : r3.match(/DeformPercent/) && e2.has(n3) && (e2[t2(656)](n3).curves.morph = i2);
      }
    }
  }
  parseAnimationLayers(e2) {
    let t2 = I, n2 = B[t2(701)].AnimationLayer, r2 = /* @__PURE__ */ new Map();
    for (let i2 in n2) {
      let n3 = [], o2 = V.get(parseInt(i2));
      o2 !== void 0 && (o2[t2(510)].forEach(function(r3, i3) {
        let o3 = t2;
        if (e2.has(r3.ID)) {
          let t3 = e2.get(r3.ID);
          if (t3.curves.x !== void 0 || t3[o3(675)].y !== void 0 || t3.curves.z !== void 0) {
            if (n3[i3] === void 0) {
              let e3 = V.get(r3.ID).parents.filter(function(e4) {
                return e4.relationship !== void 0;
              });
              if (e3.length === 0) return;
              let t4 = e3[0].ID;
              if (t4 !== void 0) {
                let e4 = B.Objects[o3(569)][t4.toString()];
                if (e4 === void 0) {
                  console[o3(534)](`THREE.FBXLoader: Encountered a unused curve.`, r3);
                  return;
                }
                let s2 = { modelName: e4.attrName ? a.sanitizeNodeName(e4.attrName) : ``, ID: e4.id, initialPosition: [0, 0, 0], initialRotation: [0, 0, 0], initialScale: [1, 1, 1] };
                H.traverse(function(t5) {
                  let n4 = o3;
                  t5.ID === e4.id && (s2.transform = t5.matrix, t5[n4(721)].transformData && (s2[n4(649)] = t5.userData.transformData[n4(649)], t5.userData.transformData[n4(533)] && (s2.initialRotation = t5.userData.transformData.rotation)));
                }), s2[o3(615)] || (s2.transform = new M()), `PreRotation` in e4 && (s2.preRotation = e4.PreRotation.value), `PostRotation` in e4 && (s2.postRotation = e4.PostRotation.value), n3[i3] = s2;
              }
            }
            n3[i3] && (n3[i3][t3[o3(511)]] = t3);
          } else if (t3.curves.morph !== void 0) {
            if (n3[i3] === void 0) {
              let e3 = V[o3(656)](r3.ID).parents.filter(function(e4) {
                return e4.relationship !== void 0;
              });
              if (e3.length === 0) return;
              let t4 = e3[0].ID, s2 = V.get(t4)[o3(644)][0].ID, c2 = V.get(s2).parents[0].ID, l2 = V.get(c2).parents[0].ID, u2 = B.Objects.Model[l2];
              n3[i3] = { modelName: u2.attrName ? a.sanitizeNodeName(u2[o3(579)]) : ``, morphName: B.Objects.Deformer[t4].attrName };
            }
            n3[i3][t3[o3(511)]] = t3;
          }
        }
      }), r2.set(parseInt(i2), n3));
    }
    return r2;
  }
  parseAnimStacks(e2) {
    let t2 = B.Objects.AnimationStack, n2 = {};
    for (let r2 in t2) {
      let i2 = V.get(parseInt(r2)).children;
      i2.length > 1 && console.warn(`THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.`);
      let a2 = e2.get(i2[0].ID);
      n2[r2] = { name: t2[r2].attrName, layer: a2 };
    }
    return n2;
  }
  addClip(e2) {
    let t2 = I, n2 = [], r2 = this;
    return e2[t2(597)].forEach(function(e3) {
      let i2 = t2;
      n2 = n2.concat(r2[i2(695)](e3));
    }), new h(e2.name, -1, n2);
  }
  generateTracks(e2) {
    let t2 = I, n2 = [], r2 = new y(), i2 = new y();
    if (e2.transform && e2.transform.decompose(r2, new _(), i2), r2 = r2[t2(563)](), i2 = i2.toArray(), e2.T !== void 0 && Object.keys(e2.T.curves).length > 0) {
      let i3 = this[t2(716)](e2.modelName, e2.T.curves, r2, `position`);
      i3 !== void 0 && n2.push(i3);
    }
    if (e2.R !== void 0 && Object.keys(e2.R[t2(675)]).length > 0) {
      let r3 = this[t2(616)](e2.modelName, e2.R.curves, e2.preRotation, e2.postRotation, e2.eulerOrder, e2[t2(552)]);
      r3 !== void 0 && n2.push(r3);
    }
    if (e2.S !== void 0 && Object.keys(e2.S.curves).length > 0) {
      let r3 = this[t2(716)](e2[t2(627)], e2.S.curves, i2, `scale`);
      r3 !== void 0 && n2.push(r3);
    }
    if (e2.DeformPercent !== void 0) {
      let t3 = this.generateMorphTrack(e2);
      t3 !== void 0 && n2.push(t3);
    }
    return n2;
  }
  [I(716)](e2, t2, n2, r2) {
    let i2 = I, a2 = this[i2(614)](t2), o2 = this.getKeyframeTrackValues(a2, t2, n2);
    return new ne(e2 + `.` + r2, a2, o2);
  }
  generateRotationTrack(e2, n2, r2, i2, a2, o2) {
    let s2 = I, l2, u2;
    if (n2.x !== void 0 || n2.y !== void 0 || n2.z !== void 0) {
      let e3 = this.getTimesForAllAxes(n2);
      if (e3.length > 0) {
        let t2 = o2 || [0, 0, 0], r3 = this.synchronizeCurve(n2.x, e3, t2[0]), i3 = this.synchronizeCurve(n2.y, e3, t2[1]), c2 = this.synchronizeCurve(n2.z, e3, t2[2]), d3 = this[s2(529)](r3, i3, c2, a2);
        l2 = d3[0], u2 = d3[1];
      }
    }
    let d2 = Z(0);
    r2 !== void 0 && (r2 = r2.map(t.degToRad), r2.push(d2), r2 = new c().fromArray(r2), r2 = new _().setFromEuler(r2)), i2 !== void 0 && (i2 = i2.map(t.degToRad), i2[s2(508)](d2), i2 = new c().fromArray(i2), i2 = new _().setFromEuler(i2)[s2(544)]());
    let f2 = new _(), p2 = new c(), h2 = [];
    if (!(!u2 || !l2)) {
      for (let e3 = 0; e3 < u2.length; e3 += 3) p2.set(u2[e3], u2[e3 + 1], u2[e3 + 2], a2), f2.setFromEuler(p2), r2 !== void 0 && f2[s2(730)](r2), i2 !== void 0 && f2[s2(546)](i2), e3 > 2 && new _().fromArray(h2, (e3 - 3) / 3 * 4)[s2(725)](f2) < 0 && f2.set(-f2.x, -f2.y, -f2.z, -f2.w), f2.toArray(h2, e3 / 3 * 4);
      return new m(e2 + `.quaternion`, l2, h2);
    }
  }
  generateMorphTrack(t2) {
    let n2 = I, r2 = t2.DeformPercent.curves.morph, i2 = r2.values.map(function(e2) {
      return e2 / 100;
    }), a2 = H[n2(636)](t2.modelName).morphTargetDictionary[t2.morphName];
    return new e(t2.modelName + n2(664) + a2 + `]`, r2.times, i2);
  }
  getTimesForAllAxes(e2) {
    let t2 = I, n2 = [];
    if (e2.x !== void 0 && (n2 = n2.concat(e2.x.times)), e2.y !== void 0 && (n2 = n2[t2(727)](e2.y.times)), e2.z !== void 0 && (n2 = n2.concat(e2.z.times)), n2 = n2.sort(function(e3, t3) {
      return e3 - t3;
    }), n2.length > 1) {
      let e3 = 1, t3 = n2[0];
      for (let r2 = 1; r2 < n2.length; r2++) {
        let i2 = n2[r2];
        i2 !== t3 && (n2[e3] = i2, t3 = i2, e3++);
      }
      n2 = n2.slice(0, e3);
    }
    return n2;
  }
  getKeyframeTrackValues(e2, t2, n2) {
    let r2 = n2, i2 = [], a2 = -1, o2 = -1, s2 = -1;
    return e2.forEach(function(e3) {
      let n3 = F;
      if (t2.x && (a2 = t2.x.times.indexOf(e3)), t2.y && (o2 = t2.y.times.indexOf(e3)), t2.z && (s2 = t2.z[n3(728)][n3(506)](e3)), a2 !== -1) {
        let e4 = t2.x.values[a2];
        i2[n3(508)](e4), r2[0] = e4;
      } else i2[n3(508)](r2[0]);
      if (o2 !== -1) {
        let e4 = t2.y.values[o2];
        i2[n3(508)](e4), r2[1] = e4;
      } else i2[n3(508)](r2[1]);
      if (s2 !== -1) {
        let e4 = t2.z.values[s2];
        i2.push(e4), r2[2] = e4;
      } else i2.push(r2[2]);
    }), i2;
  }
  synchronizeCurve(e2, t2, n2) {
    let r2 = I;
    if (e2 === void 0) return { times: t2, values: t2.map(() => n2) };
    if (e2.times[r2(543)] === t2.length) return e2;
    let i2 = [];
    for (let r3 = 0; r3 < t2.length; r3++) i2.push(this.sampleCurveValue(e2, t2[r3], n2));
    return { times: t2, values: i2 };
  }
  sampleCurveValue(e2, t2, n2) {
    let r2 = I, i2 = e2.times, a2 = e2[r2(607)];
    if (t2 <= i2[0]) return a2[0];
    if (t2 >= i2[i2.length - 1]) return a2[a2.length - 1];
    for (let e3 = 0; e3 < i2.length - 1; e3++) if (t2 >= i2[e3] && t2 <= i2[e3 + 1]) {
      if (i2[e3] === t2) return a2[e3];
      let n3 = (t2 - i2[e3]) / (i2[e3 + 1] - i2[e3]);
      return a2[e3] * (1 - n3) + a2[e3 + 1] * n3;
    }
    return n2;
  }
  interpolateRotations(e2, n2, r2, i2) {
    let a2 = I, o2 = [], s2 = [];
    o2.push(e2.times[0]), s2[a2(508)](t.degToRad(e2.values[0])), s2[a2(508)](t.degToRad(n2[a2(607)][0])), s2.push(t.degToRad(r2.values[0]));
    for (let l2 = 1; l2 < e2.values.length; l2++) {
      let u2 = [e2[a2(607)][l2 - 1], n2.values[l2 - 1], r2.values[l2 - 1]];
      if (isNaN(u2[0]) || isNaN(u2[1]) || isNaN(u2[2])) continue;
      let d2 = u2.map(t.degToRad), f2 = [e2.values[l2], n2[a2(607)][l2], r2[a2(607)][l2]];
      if (isNaN(f2[0]) || isNaN(f2[1]) || isNaN(f2[2])) continue;
      let p2 = f2.map(t[a2(628)]), m2 = [f2[0] - u2[0], f2[1] - u2[1], f2[2] - u2[2]], h2 = [Math[a2(700)](m2[0]), Math.abs(m2[1]), Math[a2(700)](m2[2])];
      if (h2[0] >= 180 || h2[1] >= 180 || h2[2] >= 180) {
        let t2 = Math.max(...h2) / 180, n3 = new c(...d2, i2), r3 = new c(...p2, i2), u3 = new _().setFromEuler(n3), f3 = new _().setFromEuler(r3);
        u3.dot(f3) < 0 && f3[a2(623)](-f3.x, -f3.y, -f3.z, -f3.w);
        let m3 = e2.times[l2 - 1], g2 = e2.times[l2] - m3, v2 = new _(), y2 = new c();
        for (let e3 = 0; e3 < 1; e3 += 1 / t2) v2.copy(u3[a2(599)]().slerp(f3.clone(), e3)), o2.push(m3 + e3 * g2), y2.setFromQuaternion(v2, i2), s2.push(y2.x), s2[a2(508)](y2.y), s2[a2(508)](y2.z);
      } else o2.push(e2.times[l2]), s2.push(t.degToRad(e2.values[l2])), s2.push(t.degToRad(n2[a2(607)][l2])), s2.push(t.degToRad(r2.values[l2]));
    }
    return [o2, s2];
  }
}, _e = class {
  getPrevNode() {
    return this.nodeStack[this.currentIndent - 2];
  }
  getCurrentNode() {
    return this.nodeStack[this.currentIndent - 1];
  }
  getCurrentProp() {
    return this.currentProp;
  }
  pushStack(e2) {
    this.nodeStack.push(e2), this.currentIndent += 1;
  }
  popStack() {
    let e2 = I;
    this.nodeStack[e2(709)](), --this.currentIndent;
  }
  [I(666)](e2, t2) {
    let n2 = I;
    this.currentProp = e2, this[n2(634)] = t2;
  }
  [I(646)](e2) {
    this.currentIndent = 0, this.allNodes = new G(), this.nodeStack = [], this.currentProp = [], this.currentPropName = ``;
    let t2 = this, n2 = e2.split(/[\r\n]+/);
    return n2.forEach(function(e3, r2) {
      let i2 = F, a2 = e3.match(/^[\s\t]*;/), o2 = e3.match(/^[\s\t]*$/);
      if (a2 || o2) return;
      let s2 = e3.match(`^\\t{` + t2.currentIndent + `}(\\w+):(.*){`, ``), c2 = e3[i2(658)](`^\\t{` + t2.currentIndent + i2(651)), l2 = e3[i2(658)](`^\\t{` + (t2.currentIndent - 1) + `}}`);
      s2 ? t2.parseNodeBegin(e3, s2) : c2 ? t2.parseNodeProperty(e3, c2, n2[++r2]) : l2 ? t2[i2(613)]() : e3.match(/^[^\s\t}]/) && t2.parseNodePropertyContinued(e3);
    }), this.allNodes;
  }
  parseNodeBegin(e2, t2) {
    let n2 = I, r2 = t2[1][n2(554)]().replace(/^"/, ``).replace(/"$/, ``), i2 = t2[2].split(`,`).map(function(e3) {
      return e3.trim().replace(/^"/, ``).replace(/"$/, ``);
    }), a2 = { name: r2 }, o2 = this.parseNodeAttr(i2), s2 = this.getCurrentNode();
    this.currentIndent === 0 ? this.allNodes.add(r2, a2) : r2 in s2 ? (r2 === `PoseNode` ? s2.PoseNode.push(a2) : s2[r2].id !== void 0 && (s2[r2] = {}, s2[r2][s2[r2].id] = s2[r2]), o2.id !== `` && (s2[r2][o2.id] = a2)) : typeof o2.id == `number` ? (s2[r2] = {}, s2[r2][o2.id] = a2) : r2 !== n2(559) && (r2 === `PoseNode` ? s2[r2] = [a2] : s2[r2] = a2), typeof o2.id == `number` && (a2.id = o2.id), o2.name !== `` && (a2.attrName = o2.name), o2.type !== `` && (a2.attrType = o2.type), this.pushStack(a2);
  }
  [I(537)](e2) {
    let t2 = e2[0];
    e2[0] !== `` && (t2 = parseInt(e2[0]), isNaN(t2) && (t2 = e2[0]));
    let n2 = ``, r2 = ``;
    return e2.length > 1 && (n2 = e2[1].replace(/^(\w+)::/, ``), r2 = e2[2]), { id: t2, name: n2, type: r2 };
  }
  parseNodeProperty(e2, t2, n2) {
    let r2 = I, i2 = t2[1][r2(668)](/^"/, ``).replace(/"$/, ``)[r2(554)](), a2 = t2[2].replace(/^"/, ``).replace(/"$/, ``).trim();
    i2 === r2(550) && a2 === `,` && (a2 = n2.replace(/"/g, ``).replace(/,$/, ``).trim());
    let o2 = this.getCurrentNode();
    if (o2[r2(542)] === r2(559)) {
      this.parseNodeSpecialProperty(e2, i2, a2);
      return;
    }
    if (i2 === `C`) {
      let e3 = a2.split(`,`).slice(1), t3 = parseInt(e3[0]), n3 = parseInt(e3[1]), s2 = a2[r2(734)](`,`).slice(3);
      s2 = s2[r2(692)](function(e4) {
        return e4.trim().replace(/^"/, ``);
      }), i2 = `connections`, a2 = [t3, n3], Ce(a2, s2), o2[i2] === void 0 && (o2[i2] = []);
    }
    i2 === `Node` && (o2.id = a2), i2 in o2 && Array.isArray(o2[i2]) ? o2[i2].push(a2) : i2 === `a` ? o2.a = a2 : o2[i2] = a2, this.setCurrentProp(o2, i2), i2 === `a` && a2[r2(592)](-1) !== `,` && (o2.a = Q(a2));
  }
  parseNodePropertyContinued(e2) {
    let t2 = this.getCurrentNode();
    t2.a += e2, e2.slice(-1) !== `,` && (t2.a = Q(t2.a));
  }
  parseNodeSpecialProperty(e2, t2, n2) {
    let r2 = I, i2 = n2[r2(734)](`",`)[r2(692)](function(e3) {
      let t3 = r2;
      return e3.trim()[t3(668)](/^\"/, ``).replace(/\s/, `_`);
    }), a2 = i2[0], o2 = i2[1], s2 = i2[2], c2 = i2[3], l2 = i2[4];
    switch (o2) {
      case r2(582):
      case r2(684):
      case r2(566):
      case `ULongLong`:
      case r2(527):
      case r2(660):
      case `FieldOfView`:
        l2 = parseFloat(l2);
        break;
      case r2(626):
      case `ColorRGB`:
      case `Vector3D`:
      case r2(605):
      case r2(575):
      case `Lcl_Scaling`:
        l2 = Q(l2);
        break;
    }
    this.getPrevNode()[a2] = { type: o2, type2: s2, flag: c2, value: l2 }, this.setCurrentProp(this.getPrevNode(), a2);
  }
}, ve = class {
  parse(e2) {
    let t2 = I, n2 = new W(e2);
    n2.skip(23);
    let r2 = n2.getUint32();
    if (r2 < 6400) throw Error(`THREE.FBXLoader: FBX version not supported, FileVersion: ` + r2);
    let i2 = new G();
    for (; !this.endOfContent(n2); ) {
      let e3 = this[t2(640)](n2, r2);
      e3 !== null && i2.add(e3.name, e3);
    }
    return i2;
  }
  endOfContent(e2) {
    return e2.size() % 16 == 0 ? (e2.getOffset() + 160 + 16 & -16) >= e2.size() : e2.getOffset() + 160 + 16 >= e2.size();
  }
  [I(640)](e2, t2) {
    let n2 = I, r2 = {}, i2 = t2 >= 7500 ? e2.getUint64() : e2.getUint32(), a2 = t2 >= 7500 ? e2[n2(516)]() : e2[n2(619)]();
    t2 >= 7500 ? e2.getUint64() : e2.getUint32();
    let o2 = e2.getUint8(), s2 = e2.getString(o2);
    if (i2 === 0) return null;
    let c2 = [];
    for (let t3 = 0; t3 < a2; t3++) c2[n2(508)](this.parseProperty(e2));
    let l2 = c2.length > 0 ? c2[0] : ``, u2 = c2.length > 1 ? c2[1] : ``, d2 = c2[n2(543)] > 2 ? c2[2] : ``;
    for (r2.singleProperty = a2 === 1 && e2[n2(600)]() === i2; i2 > e2[n2(600)](); ) {
      let i3 = this[n2(640)](e2, t2);
      i3 !== null && this.parseSubNode(s2, r2, i3);
    }
    return r2[n2(657)] = c2, typeof l2 == `number` && (r2.id = l2), u2 !== `` && (r2.attrName = u2), d2 !== `` && (r2[n2(738)] = d2), s2 !== `` && (r2.name = s2), r2;
  }
  [I(687)](e2, t2, n2) {
    let r2 = I;
    if (n2.singleProperty === true) {
      let e3 = n2.propertyList[0];
      Array.isArray(e3) ? (t2[n2[r2(542)]] = n2, n2.a = e3) : t2[n2[r2(542)]] = e3;
    } else if (e2 === r2(532) && n2.name === `C`) {
      let e3 = [];
      n2[r2(657)].forEach(function(t3, n3) {
        n3 !== 0 && e3.push(t3);
      }), t2[r2(659)] === void 0 && (t2.connections = []), t2.connections.push(e3);
    } else if (n2.name === r2(559)) Object.keys(n2)[r2(595)](function(e3) {
      t2[e3] = n2[e3];
    });
    else if (e2 === `Properties70` && n2.name === `P`) {
      let e3 = n2[r2(657)][0], i2 = n2.propertyList[1], a2 = n2.propertyList[2], o2 = n2.propertyList[3], s2;
      e3.indexOf(`Lcl `) === 0 && (e3 = e3.replace(`Lcl `, `Lcl_`)), i2[r2(506)](`Lcl `) === 0 && (i2 = i2.replace(`Lcl `, r2(596))), s2 = i2 === `Color` || i2 === `ColorRGB` || i2 === r2(612) || i2 === r2(688) || i2.indexOf(`Lcl_`) === 0 ? [n2.propertyList[4], n2.propertyList[5], n2.propertyList[6]] : n2.propertyList[4], t2[e3] = { type: i2, type2: a2, flag: o2, value: s2 };
    } else t2[n2.name] === void 0 ? typeof n2.id == r2(603) ? (t2[n2.name] = {}, t2[n2.name][n2.id] = n2) : t2[n2.name] = n2 : n2[r2(542)] === `PoseNode` ? (Array.isArray(t2[n2.name]) || (t2[n2.name] = [t2[n2.name]]), t2[n2.name].push(n2)) : t2[n2.name][n2.id] === void 0 && (t2[n2.name][n2.id] = n2);
  }
  parseProperty(e2) {
    let t2 = I, n2 = e2.getString(1), r2;
    switch (n2) {
      case `C`:
        return e2.getBoolean();
      case `D`:
        return e2.getFloat64();
      case `F`:
        return e2.getFloat32();
      case `I`:
        return e2.getInt32();
      case `L`:
        return e2.getInt64();
      case `R`:
        return r2 = e2[t2(619)](), e2.getArrayBuffer(r2);
      case `S`:
        return r2 = e2.getUint32(), e2.getString(r2);
      case `Y`:
        return e2.getInt16();
      case `b`:
      case `c`:
      case `d`:
      case `f`:
      case `i`:
      case `l`:
        let i2 = e2.getUint32(), a2 = e2.getUint32(), o2 = e2.getUint32();
        if (a2 === 0) switch (n2) {
          case `b`:
          case `c`:
            return e2.getBooleanArray(i2);
          case `d`:
            return e2.getFloat64Array(i2);
          case `f`:
            return e2.getFloat32Array(i2);
          case `i`:
            return e2.getInt32Array(i2);
          case `l`:
            return e2.getInt64Array(i2);
        }
        let s2 = new W(oe(new Uint8Array(e2[t2(629)](o2))).buffer);
        switch (n2) {
          case `b`:
          case `c`:
            return s2.getBooleanArray(i2);
          case `d`:
            return s2[t2(681)](i2);
          case `f`:
            return s2.getFloat32Array(i2);
          case `i`:
            return s2[t2(545)](i2);
          case `l`:
            return s2.getInt64Array(i2);
        }
        break;
      default:
        throw Error(`THREE.FBXLoader: Unknown property type ` + n2);
    }
  }
}, W = class {
  constructor(e2, t2) {
    let n2 = I;
    this.dv = new DataView(e2), this[n2(555)] = 0, this.littleEndian = t2 === void 0 ? true : t2, this._textDecoder = new TextDecoder();
  }
  [I(600)]() {
    let e2 = I;
    return this[e2(555)];
  }
  size() {
    return this.dv.buffer.byteLength;
  }
  skip(e2) {
    this.offset += e2;
  }
  [I(720)]() {
    return (this.getUint8() & 1) == 1;
  }
  getBooleanArray(e2) {
    let t2 = [];
    for (let n2 = 0; n2 < e2; n2++) t2.push(this.getBoolean());
    return t2;
  }
  getUint8() {
    let e2 = this.dv.getUint8(this.offset);
    return this.offset += 1, e2;
  }
  getInt16() {
    let e2 = I, t2 = this.dv.getInt16(this.offset, this[e2(698)]);
    return this.offset += 2, t2;
  }
  getInt32() {
    let e2 = I, t2 = this.dv[e2(631)](this[e2(555)], this.littleEndian);
    return this.offset += 4, t2;
  }
  [I(545)](e2) {
    let t2 = I, n2 = [];
    for (let r2 = 0; r2 < e2; r2++) n2[t2(508)](this.getInt32());
    return n2;
  }
  [I(619)]() {
    let e2 = I, t2 = this.dv.getUint32(this.offset, this[e2(698)]);
    return this.offset += 4, t2;
  }
  getInt64() {
    let e2 = I, t2, n2;
    return this[e2(698)] ? (t2 = this.getUint32(), n2 = this.getUint32()) : (n2 = this[e2(619)](), t2 = this.getUint32()), n2 & 2147483648 ? (n2 = ~n2 & 4294967295, t2 = ~t2 & 4294967295, t2 === 4294967295 && (n2 = n2 + 1 & 4294967295), t2 = t2 + 1 & 4294967295, -(n2 * 4294967296 + t2)) : n2 * 4294967296 + t2;
  }
  getInt64Array(e2) {
    let t2 = [];
    for (let n2 = 0; n2 < e2; n2++) t2.push(this.getInt64());
    return t2;
  }
  getUint64() {
    let e2, t2;
    return this.littleEndian ? (e2 = this.getUint32(), t2 = this.getUint32()) : (t2 = this.getUint32(), e2 = this.getUint32()), t2 * 4294967296 + e2;
  }
  [I(578)]() {
    let e2 = this.dv.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, e2;
  }
  getFloat32Array(e2) {
    let t2 = [];
    for (let n2 = 0; n2 < e2; n2++) t2.push(this.getFloat32());
    return t2;
  }
  getFloat64() {
    let e2 = I, t2 = this.dv.getFloat64(this[e2(555)], this[e2(698)]);
    return this[e2(555)] += 8, t2;
  }
  getFloat64Array(e2) {
    let t2 = I, n2 = [];
    for (let r2 = 0; r2 < e2; r2++) n2.push(this[t2(549)]());
    return n2;
  }
  getArrayBuffer(e2) {
    let t2 = I, n2 = this.dv.buffer[t2(592)](this.offset, this[t2(555)] + e2);
    return this.offset += e2, n2;
  }
  getString(e2) {
    let t2 = I, n2 = this.offset, r2 = new Uint8Array(this.dv.buffer, n2, e2);
    this.skip(e2);
    let i2 = r2.indexOf(0);
    return i2 >= 0 && (r2 = new Uint8Array(this.dv.buffer, n2, i2)), this[t2(665)].decode(r2);
  }
}, G = class {
  add(e2, t2) {
    this[e2] = t2;
  }
};
function ye(e2) {
  return e2.byteLength >= 21 && $(e2, 0, 21) === `Kaydara FBX Binary  \0`;
}
function be(e2) {
  let t2 = I, n2 = [`K`, `a`, `y`, `d`, `a`, `r`, `a`, `\\`, `F`, `B`, `X`, `\\`, `B`, `i`, `n`, `a`, `r`, `y`, `\\`, `\\`], r2 = 0;
  function i2(t3) {
    let n3 = e2[t3 - 1];
    return e2 = e2.slice(r2 + t3), r2++, n3;
  }
  for (let e3 = 0; e3 < n2[t2(543)]; ++e3) if (i2(1) === n2[e3]) return false;
  return true;
}
function K(e2) {
  let t2 = e2.match(/FBXVersion: (\d+)/);
  if (t2) return parseInt(t2[1]);
  throw Error(`THREE.FBXLoader: Cannot find the version number for the file given.`);
}
function xe(e2) {
  return e2 / 46186158e3;
}
var Se = [];
function q(e2, t2, n2, r2) {
  let i2 = I, a2;
  switch (r2.mappingType) {
    case `ByPolygonVertex`:
      a2 = e2;
      break;
    case `ByPolygon`:
      a2 = t2;
      break;
    case `ByVertice`:
      a2 = n2;
      break;
    case i2(601):
      a2 = r2.indices[0];
      break;
    default:
      console[i2(534)](`THREE.FBXLoader: unknown attribute mapping type ` + r2[i2(691)]);
  }
  r2.referenceType === i2(702) && (a2 = r2.indices[a2]);
  let o2 = a2 * r2[i2(548)], s2 = o2 + r2[i2(548)];
  return we(Se, r2.buffer, o2, s2);
}
var J = new c(), Y = new y();
function X(e2) {
  let n2 = I, r2 = new M(), i2 = new M(), a2 = new M(), o2 = new M(), s2 = new M(), c2 = new M(), l2 = new M(), u2 = new M(), d2 = new M(), f2 = new M(), p2 = new M(), m2 = new M(), h2 = e2.inheritType ? e2.inheritType : 0;
  e2.translation && r2.setPosition(Y.fromArray(e2.translation));
  let g2 = Z(0);
  if (e2.preRotation) {
    let r3 = e2[n2(667)].map(t.degToRad);
    r3.push(g2), i2[n2(637)](J[n2(735)](r3));
  }
  if (e2.rotation) {
    let r3 = e2.rotation.map(t.degToRad);
    r3[n2(508)](e2.eulerOrder || g2), a2.makeRotationFromEuler(J.fromArray(r3));
  }
  if (e2.postRotation) {
    let r3 = e2[n2(724)][n2(692)](t[n2(628)]);
    r3.push(g2), o2.makeRotationFromEuler(J.fromArray(r3)), o2.invert();
  }
  e2.scale && s2[n2(676)](Y.fromArray(e2[n2(676)])), e2.scalingOffset && l2[n2(714)](Y.fromArray(e2.scalingOffset)), e2.scalingPivot && c2[n2(714)](Y.fromArray(e2.scalingPivot)), e2.rotationOffset && u2.setPosition(Y.fromArray(e2.rotationOffset)), e2.rotationPivot && d2[n2(714)](Y.fromArray(e2[n2(567)])), e2.parentMatrixWorld && (p2.copy(e2.parentMatrix), f2.copy(e2.parentMatrixWorld));
  let _2 = i2.clone().multiply(a2).multiply(o2), v2 = new M();
  v2[n2(604)](f2);
  let b2 = new M();
  b2.copyPosition(f2);
  let x2 = b2.clone().invert().multiply(f2), S2 = v2.clone().invert().multiply(x2), C2 = s2, w2 = new M();
  if (h2 === 0) w2.copy(v2).multiply(_2).multiply(S2).multiply(C2);
  else if (h2 === 1) w2[n2(697)](v2).multiply(S2).multiply(_2).multiply(C2);
  else {
    let e3 = new M().scale(new y().setFromMatrixScale(p2)).clone().invert(), t2 = S2.clone().multiply(e3);
    w2[n2(697)](v2).multiply(_2).multiply(t2).multiply(C2);
  }
  let T2 = d2[n2(599)]().invert(), E2 = c2.clone().invert(), D2 = r2.clone()[n2(546)](u2)[n2(546)](d2).multiply(i2).multiply(a2)[n2(546)](o2).multiply(T2).multiply(l2)[n2(546)](c2).multiply(s2).multiply(E2), O2 = new M().copyPosition(D2), k2 = f2.clone().multiply(O2);
  return m2.copyPosition(k2), D2 = m2.clone().multiply(w2), D2.premultiply(f2[n2(544)]()), D2;
}
function Z(e2) {
  e2 || (e2 = 0);
  let t2 = [`ZYX`, `YZX`, `XZY`, `ZXY`, `YXZ`, `XYZ`];
  return e2 === 6 ? (console.warn(`THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect.`), t2[0]) : t2[e2];
}
function Q(e2) {
  return e2.split(`,`).map(function(e3) {
    return parseFloat(e3);
  });
}
function $(e2, t2, n2) {
  return t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = e2.byteLength), new TextDecoder().decode(new Uint8Array(e2, t2, n2));
}
function Ce(e2, t2) {
  for (let n2 = 0, r2 = e2.length, i2 = t2.length; n2 < i2; n2++, r2++) e2[r2] = t2[n2];
}
function we(e2, t2, n2, r2) {
  for (let i2 = n2, a2 = 0; i2 < r2; i2++, a2++) e2[a2] = t2[i2];
  return e2;
}
export {
  U as FBXLoader
};
