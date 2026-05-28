import { g as e, h as t } from "./index-D-g3WoLo.js";
import { A as n, B as r, Bt as i, C as a, Ct as o, D as s, E as c, Ft as l, H as u, Ht as d, I as f, J as p, K as m, L as h, Mt as g, N as _, O as ee, Pt as v, Q as te, R as ne, Rt as y, S as re, T as ie, Tt as b, V as x, Y as ae, Z as oe, _ as se, a as S, b as C, bt as ce, c as le, ct as ue, dt as w, et as de, g as T, gt as fe, h as pe, it as me, j as he, jt as ge, l as _e, lt as ve, m as ye, mt as E, o as be, p as D, pt as xe, q as O, rt as Se, st as Ce, t as we, tt as Te, ut as k, v as A, wt as Ee, y as j, yt as M, z as N, zt as De } from "./three.module-fqN0WVmI.js";
function P(e2, t2) {
  return e2 -= 367, R()[e2];
}
var F = P;
(function(e2, t2) {
  let n2 = P, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(403)) / 1 + -parseInt(n2(553)) / 2 * (parseInt(n2(379)) / 3) + -parseInt(n2(461)) / 4 * (parseInt(n2(542)) / 5) + parseInt(n2(408)) / 6 * (-parseInt(n2(560)) / 7) + parseInt(n2(471)) / 8 * (-parseInt(n2(434)) / 9) + -parseInt(n2(387)) / 10 + parseInt(n2(531)) / 11 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(R, 778062);
function I(e2, t2) {
  let n2 = P;
  if (t2 === 0) return console[n2(495)](`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`), e2;
  if (t2 === 2 || t2 === 1) {
    let r2 = e2[n2(567)]();
    if (r2 === null) {
      let t3 = [], i3 = e2[n2(543)](`position`);
      if (i3 !== void 0) {
        for (let e3 = 0; e3 < i3.count; e3++) t3.push(e3);
        e2.setIndex(t3), r2 = e2.getIndex();
      } else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`), e2;
    }
    let i2 = r2.count - 2, a2 = [];
    if (t2 === 2) for (let e3 = 1; e3 <= i2; e3++) a2.push(r2[n2(532)](0)), a2.push(r2.getX(e3)), a2.push(r2.getX(e3 + 1));
    else for (let e3 = 0; e3 < i2; e3++) e3 % 2 == 0 ? (a2.push(r2.getX(e3)), a2.push(r2.getX(e3 + 1)), a2.push(r2.getX(e3 + 2))) : (a2[n2(558)](r2.getX(e3 + 2)), a2.push(r2.getX(e3 + 1)), a2[n2(558)](r2[n2(532)](e3)));
    a2.length / 3 !== i2 && console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);
    let o2 = e2.clone();
    return o2.setIndex(a2), o2[n2(424)](), o2;
  } else return console.error(n2(585), t2), e2;
}
function Oe(e2) {
  let t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Map(), r2 = e2.clone();
  return L(e2, r2, function(e3, r3) {
    t2.set(r3, e3), n2.set(e3, r3);
  }), r2.traverse(function(e3) {
    let r3 = P;
    if (!e3.isSkinnedMesh) return;
    let i2 = e3, a2 = t2.get(e3), o2 = a2[r3(452)].bones;
    i2.skeleton = a2.skeleton.clone(), i2.bindMatrix.copy(a2.bindMatrix), i2[r3(452)].bones = o2.map(function(e4) {
      return n2.get(e4);
    }), i2.bind(i2.skeleton, i2.bindMatrix);
  }), r2;
}
function L(e2, t2, n2) {
  let r2 = P;
  n2(e2, t2);
  for (let i2 = 0; i2 < e2[r2(486)].length; i2++) L(e2.children[i2], t2.children[i2], n2);
}
t();
function R() {
  let e2 = `THREE.GLTFLoader: Image ,crossOrigin,name,10714990bzythW,meshes,isArray,normalized,catch,texCoord,scene,length,loadMesh,zfar,componentType,loadSkin,textureCache,filter,morphTargetInfluences,camera,588795KHRIiU,ior,_createAnimationTracks,all,thicknessTexture,62760MMqPOq,isPoints,fromBufferAttribute,register,skins,requestHeader,userData,KHR_MATERIALS_SHEEN,uses,pluginCallbacks,wrapT,yfov,clearcoatNormalScale,abs,rotation,body,clearGroups,prototype,_getNodeRef,createInterpolant,light_,set,nodeCache,KHR_meshopt_compression,KHR_TEXTURE_BASISU,then,558153vVvEzx,TRIANGLES,uuid,color,normal,header,startsWith,parser,position,magFilter,dracoLoader,transparent,add,associations,extensionsUsed,KHR_BINARY_GLTF,roughness,attenuationDistance,skeleton,doubleSided,parse,BIN,resultBuffer,THREE.GLTFLoader: Unexpected light type: ,setWithCredentials,assignTexture,sheenRoughnessMap,357832ACFpGb,specularFactor,THREE.GLTFLoader: Missing min/max properties for accessor POSITION.,clone,metallicRoughnessTexture,error,getValueSize,_instance_,values,minFilter,8srJsum,generateMipmaps,THREE.GLTFLoader: Unsupported normalized accessor component type.,alphaCutoff,POSITION,parameters,images,getDependency,type,setPath,resolveURL,emissive,occlusionTexture,sheenRoughnessFactor,transmissionMap,children,revokeObjectURL,spot,KHR_DRACO_MESH_COMPRESSION,KHR_MESH_QUANTIZATION,decodePrimitive,radToDeg,specularIntensityMap,KHR_materials_sheen,warn,aspectRatio,setPlugins,max,times,accessors,clearcoatRoughnessFactor,copy,resolve,textureLoader,matrix,clearcoatNormalTexture,nodes,_invokeAll,THREE.GLTFLoader: Invalid plugin found: missing name,transmissionTexture,indexOf,ROTATION,loadTexture,THREE.GLTFLoader: JSON content not found.,sheenColorTexture,isSkinnedMesh,buffers,loadBufferView,bufferView,dispersion,extensionsRequired,TRIANGLE_FAN,traverse,map,getHandler,specularTexture,center,specularColorTexture,accessor,targets,41564622aORgFo,getX,manager,source,scale,slice,loadNode,innerConeAngle,transmissionFactor,_getArrayFromAccessor,EXT_MATERIALS_BUMP,60SFpNtL,getAttribute,getUint32,extendMaterialParams,setExtensions,anisotropy,fromArray,loadTextureImage,baseColorTexture,itemSize,_loadNodeShallow,2743726jVZLjE,uri,morphAttributes,geometry,options,push,iridescenceTexture,7FACuEH,KHR_materials_clearcoat,thickness,setRGB,iridescenceIor,toArray,baseColorFactor,getIndex,mesh,buffer,resourcePath,indices,extras,preload,uv3,getMaterialType,meshoptDecoder,assignFinalMaterial,EXT_meshopt_compression,object,path,extensions,node,KHR_MATERIALS_IOR,count,THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:,SCALE,anisotropyRotation,createNodeMesh,afterRoot,attributes,byteOffset,thicknessFactor,material,targetNames,loadAnimation,_invokeOne,json,iridescenceThicknessRange,mode,light,KHR_MATERIALS_TRANSMISSION,input,refs,intensity,decode,3NtSPHr,image/webp,sheenColorFactor,cache,textures`.split(`,`);
  return R = function() {
    return e2;
  }, R();
}
var ke = class extends we {
  constructor(e2) {
    let t2 = P;
    super(e2), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e3) {
      return new Pe(e3);
    }), this.register(function(e3) {
      return new Fe(e3);
    }), this.register(function(e3) {
      return new We(e3);
    }), this.register(function(e3) {
      return new Ge(e3);
    }), this.register(function(e3) {
      return new Ke(e3);
    }), this[t2(411)](function(e3) {
      return new Le(e3);
    }), this.register(function(e3) {
      return new Re(e3);
    }), this.register(function(e3) {
      return new ze(e3);
    }), this.register(function(e3) {
      return new Be(e3);
    }), this.register(function(e3) {
      return new Ne(e3);
    }), this.register(function(e3) {
      return new Ve(e3);
    }), this[t2(411)](function(e3) {
      return new Ie(e3);
    }), this.register(function(e3) {
      return new Ue(e3);
    }), this.register(function(e3) {
      return new He(e3);
    }), this.register(function(e3) {
      return new je(e3);
    }), this.register(function(e3) {
      return new V(e3, B.EXT_MESHOPT_COMPRESSION);
    }), this.register(function(e3) {
      return new V(e3, B.KHR_MESHOPT_COMPRESSION);
    }), this.register(function(e3) {
      return new qe(e3);
    });
  }
  load(e2, t2, n2, r2) {
    let i2 = P, a2 = this, o2;
    if (this.resourcePath !== ``) o2 = this.resourcePath;
    else if (this.path !== ``) {
      let t3 = S.extractUrlBase(e2);
      o2 = S.resolveURL(t3, this.path);
    } else o2 = S.extractUrlBase(e2);
    this.manager.itemStart(e2);
    let s2 = function(t3) {
      r2 ? r2(t3) : console.error(t3), a2.manager.itemError(e2), a2.manager.itemEnd(e2);
    }, c2 = new M(this.manager);
    c2[i2(480)](this.path), c2.setResponseType(`arraybuffer`), c2.setRequestHeader(this.requestHeader), c2.setWithCredentials(this.withCredentials), c2.load(e2, function(n3) {
      try {
        a2.parse(n3, o2, function(n4) {
          t2(n4), a2.manager.itemEnd(e2);
        }, s2);
      } catch (e3) {
        s2(e3);
      }
    }, n2, s2);
  }
  setDRACOLoader(e2) {
    return this.dracoLoader = e2, this;
  }
  setKTX2Loader(e2) {
    return this.ktx2Loader = e2, this;
  }
  setMeshoptDecoder(e2) {
    let t2 = P;
    return this[t2(576)] = e2, this;
  }
  register(e2) {
    return this.pluginCallbacks.indexOf(e2) === -1 && this.pluginCallbacks.push(e2), this;
  }
  unregister(e2) {
    return this.pluginCallbacks.indexOf(e2) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e2), 1), this;
  }
  parse(e2, t2, n2, r2) {
    let i2 = P, a2, o2 = {}, s2 = {}, c2 = new TextDecoder();
    if (typeof e2 == `string`) a2 = JSON.parse(e2);
    else if (e2 instanceof ArrayBuffer) if (c2.decode(new Uint8Array(e2, 0, 4)) === Je) {
      try {
        o2[B[i2(449)]] = new Xe(e2);
      } catch (e3) {
        r2 && r2(e3);
        return;
      }
      a2 = JSON[i2(454)](o2[B.KHR_BINARY_GLTF].content);
    } else a2 = JSON[i2(454)](c2[i2(378)](e2));
    else a2 = e2;
    if (a2.asset === void 0 || a2.asset.version[0] < 2) {
      r2 && r2(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));
      return;
    }
    let l2 = new ft(a2, { path: t2 || this[i2(570)] || ``, crossOrigin: this[i2(385)], requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    l2.fileLoader.setRequestHeader(this.requestHeader);
    for (let e3 = 0; e3 < this[i2(417)].length; e3++) {
      let t3 = this.pluginCallbacks[e3](l2);
      t3[i2(386)] || console[i2(466)](i2(509)), s2[t3.name] = t3, o2[t3.name] = true;
    }
    if (a2[i2(448)]) for (let e3 = 0; e3 < a2.extensionsUsed.length; ++e3) {
      let t3 = a2.extensionsUsed[e3], n3 = a2.extensionsRequired || [];
      switch (t3) {
        case B.KHR_MATERIALS_UNLIT:
          o2[t3] = new Me();
          break;
        case B.KHR_DRACO_MESH_COMPRESSION:
          o2[t3] = new Ze(a2, this[i2(444)]);
          break;
        case B.KHR_TEXTURE_TRANSFORM:
          o2[t3] = new Qe();
          break;
        case B.KHR_MESH_QUANTIZATION:
          o2[t3] = new $e();
          break;
        default:
          n3[i2(511)](t3) >= 0 && s2[t3] === void 0 && console.warn(`THREE.GLTFLoader: Unknown extension "` + t3 + `".`);
      }
    }
    l2[i2(546)](o2), l2.setPlugins(s2), l2[i2(454)](n2, r2);
  }
  parseAsync(e2, t2) {
    let n2 = this;
    return new Promise(function(r2, i2) {
      n2.parse(e2, t2, r2, i2);
    });
  }
};
function Ae() {
  let e2 = {};
  return { get: function(t2) {
    return e2[t2];
  }, add: function(t2, n2) {
    e2[t2] = n2;
  }, remove: function(t2) {
    delete e2[t2];
  }, removeAll: function() {
    e2 = {};
  } };
}
function z(e2, t2, n2) {
  let r2 = P, i2 = e2.json.materials[t2];
  return i2.extensions && i2.extensions[n2] ? i2[r2(581)][n2] : null;
}
var B = { KHR_BINARY_GLTF: `KHR_binary_glTF`, KHR_DRACO_MESH_COMPRESSION: `KHR_draco_mesh_compression`, KHR_LIGHTS_PUNCTUAL: `KHR_lights_punctual`, KHR_MATERIALS_CLEARCOAT: F(561), KHR_MATERIALS_DISPERSION: `KHR_materials_dispersion`, KHR_MATERIALS_IOR: `KHR_materials_ior`, KHR_MATERIALS_SHEEN: F(494), KHR_MATERIALS_SPECULAR: `KHR_materials_specular`, KHR_MATERIALS_TRANSMISSION: `KHR_materials_transmission`, KHR_MATERIALS_IRIDESCENCE: `KHR_materials_iridescence`, KHR_MATERIALS_ANISOTROPY: `KHR_materials_anisotropy`, KHR_MATERIALS_UNLIT: `KHR_materials_unlit`, KHR_MATERIALS_VOLUME: `KHR_materials_volume`, KHR_TEXTURE_BASISU: `KHR_texture_basisu`, KHR_TEXTURE_TRANSFORM: `KHR_texture_transform`, KHR_MESH_QUANTIZATION: `KHR_mesh_quantization`, KHR_MATERIALS_EMISSIVE_STRENGTH: `KHR_materials_emissive_strength`, EXT_MATERIALS_BUMP: `EXT_materials_bump`, EXT_TEXTURE_WEBP: `EXT_texture_webp`, EXT_TEXTURE_AVIF: `EXT_texture_avif`, EXT_MESHOPT_COMPRESSION: F(578), KHR_MESHOPT_COMPRESSION: F(431), EXT_MESH_GPU_INSTANCING: `EXT_mesh_gpu_instancing` }, je = class {
  constructor(e2) {
    this.parser = e2, this.name = B.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    let e2 = F, t2 = this.parser, n2 = this.parser[e2(370)].nodes || [];
    for (let r2 = 0, i2 = n2.length; r2 < i2; r2++) {
      let i3 = n2[r2];
      i3.extensions && i3.extensions[this.name] && i3.extensions[this[e2(386)]].light !== void 0 && t2._addNodeRef(this.cache, i3.extensions[this.name].light);
    }
  }
  _loadLight(e2) {
    let t2 = F, n2 = this.parser, r2 = `light:` + e2, i2 = n2.cache.get(r2);
    if (i2) return i2;
    let a2 = n2.json, o2 = ((a2[t2(581)] && a2[t2(581)][this.name] || {}).lights || [])[e2], s2, c2 = new m(16777215);
    o2.color !== void 0 && c2[t2(563)](o2.color[0], o2.color[1], o2.color[2], `srgb-linear`);
    let l2 = o2.range === void 0 ? 0 : o2.range;
    switch (o2.type) {
      case `directional`:
        s2 = new _e(c2), s2.target[t2(442)][t2(429)](0, 0, -1), s2.add(s2.target);
        break;
      case `point`:
        s2 = new De(c2), s2.distance = l2;
        break;
      case `spot`:
        s2 = new _(c2), s2.distance = l2, o2.spot = o2.spot || {}, o2.spot.innerConeAngle = o2[t2(488)][t2(538)] === void 0 ? 0 : o2.spot.innerConeAngle, o2.spot.outerConeAngle = o2.spot.outerConeAngle === void 0 ? Math.PI / 4 : o2[t2(488)].outerConeAngle, s2.angle = o2.spot.outerConeAngle, s2.penumbra = 1 - o2.spot.innerConeAngle / o2.spot.outerConeAngle, s2.target.position.set(0, 0, -1), s2[t2(446)](s2.target);
        break;
      default:
        throw Error(t2(457) + o2.type);
    }
    return s2.position.set(0, 0, 0), X(s2, o2), o2[t2(377)] !== void 0 && (s2.intensity = o2.intensity), s2.name = n2.createUniqueName(o2.name || t2(428) + e2), i2 = Promise.resolve(s2), n2.cache[t2(446)](r2, i2), i2;
  }
  getDependency(e2, t2) {
    if (e2 === `light`) return this._loadLight(t2);
  }
  createNodeAttachment(e2) {
    let t2 = F, n2 = this, r2 = this.parser, i2 = r2[t2(370)][t2(507)][e2], a2 = (i2.extensions && i2[t2(581)][this[t2(386)]] || {})[t2(373)];
    return a2 === void 0 ? null : this._loadLight(a2)[t2(433)](function(e3) {
      return r2._getNodeRef(n2.cache, a2, e3);
    });
  }
}, Me = class {
  constructor() {
    this.name = B.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return k;
  }
  extendParams(e2, t2, n2) {
    let r2 = F, i2 = [];
    e2.color = new m(1, 1, 1), e2.opacity = 1;
    let a2 = t2.pbrMetallicRoughness;
    if (a2) {
      if (Array.isArray(a2.baseColorFactor)) {
        let t3 = a2[r2(566)];
        e2.color.setRGB(t3[0], t3[1], t3[2], w), e2.opacity = t3[3];
      }
      a2.baseColorTexture !== void 0 && i2.push(n2[r2(459)](e2, r2(524), a2[r2(550)], `srgb`));
    }
    return Promise[r2(406)](i2);
  }
}, Ne = class {
  constructor(e2) {
    this.parser = e2, this.name = B.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e2, t2) {
    let n2 = z(this.parser, e2, this.name);
    return n2 === null || n2.emissiveStrength !== void 0 && (t2.emissiveIntensity = n2.emissiveStrength), Promise.resolve();
  }
}, Pe = class {
  constructor(e2) {
    let t2 = F;
    this[t2(441)] = e2, this.name = B.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e2) {
    let t2 = F;
    return z(this[t2(441)], e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this.name);
    if (r2 === null) return Promise.resolve();
    let i2 = [];
    if (r2.clearcoatFactor !== void 0 && (t2.clearcoat = r2.clearcoatFactor), r2.clearcoatTexture !== void 0 && i2.push(this.parser.assignTexture(t2, `clearcoatMap`, r2.clearcoatTexture)), r2[n2(501)] !== void 0 && (t2.clearcoatRoughness = r2[n2(501)]), r2.clearcoatRoughnessTexture !== void 0 && i2[n2(558)](this.parser.assignTexture(t2, `clearcoatRoughnessMap`, r2.clearcoatRoughnessTexture)), r2.clearcoatNormalTexture !== void 0 && (i2.push(this.parser.assignTexture(t2, `clearcoatNormalMap`, r2.clearcoatNormalTexture)), r2[n2(506)].scale !== void 0)) {
      let e3 = r2.clearcoatNormalTexture[n2(535)];
      t2.clearcoatNormalScale = new h(e3, e3);
    }
    return Promise.all(i2);
  }
}, Fe = class {
  constructor(e2) {
    let t2 = F;
    this.parser = e2, this[t2(386)] = B.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e2) {
    let t2 = F;
    return z(this[t2(441)], e2, this[t2(386)]) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this[n2(386)]);
    return r2 === null || (t2.dispersion = r2.dispersion === void 0 ? 0 : r2[n2(520)]), Promise[n2(503)]();
  }
}, Ie = class {
  constructor(e2) {
    let t2 = F;
    this.parser = e2, this[t2(386)] = B.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e2) {
    let t2 = F;
    return z(this[t2(441)], e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this[n2(386)]);
    if (r2 === null) return Promise.resolve();
    let i2 = [];
    return r2.iridescenceFactor !== void 0 && (t2.iridescence = r2.iridescenceFactor), r2[n2(559)] !== void 0 && i2[n2(558)](this.parser.assignTexture(t2, `iridescenceMap`, r2[n2(559)])), r2[n2(564)] !== void 0 && (t2.iridescenceIOR = r2.iridescenceIor), t2.iridescenceThicknessRange === void 0 && (t2.iridescenceThicknessRange = [100, 400]), r2.iridescenceThicknessMinimum !== void 0 && (t2.iridescenceThicknessRange[0] = r2.iridescenceThicknessMinimum), r2.iridescenceThicknessMaximum !== void 0 && (t2[n2(371)][1] = r2.iridescenceThicknessMaximum), r2.iridescenceThicknessTexture !== void 0 && i2.push(this.parser.assignTexture(t2, `iridescenceThicknessMap`, r2.iridescenceThicknessTexture)), Promise.all(i2);
  }
}, Le = class {
  constructor(e2) {
    let t2 = F;
    this[t2(441)] = e2, this.name = B[t2(415)];
  }
  getMaterialType(e2) {
    return z(this.parser, e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this.name);
    if (r2 === null) return Promise[n2(503)]();
    let i2 = [];
    if (t2.sheenColor = new m(0, 0, 0), t2.sheenRoughness = 0, t2.sheen = 1, r2.sheenColorFactor !== void 0) {
      let e3 = r2[n2(381)];
      t2.sheenColor[n2(563)](e3[0], e3[1], e3[2], w);
    }
    return r2[n2(484)] !== void 0 && (t2.sheenRoughness = r2.sheenRoughnessFactor), r2[n2(515)] !== void 0 && i2[n2(558)](this[n2(441)][n2(459)](t2, `sheenColorMap`, r2.sheenColorTexture, `srgb`)), r2.sheenRoughnessTexture !== void 0 && i2[n2(558)](this.parser.assignTexture(t2, n2(460), r2.sheenRoughnessTexture)), Promise.all(i2);
  }
}, Re = class {
  constructor(e2) {
    let t2 = F;
    this.parser = e2, this[t2(386)] = B[t2(374)];
  }
  [F(575)](e2) {
    return z(this.parser, e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this.name);
    if (r2 === null) return Promise.resolve();
    let i2 = [];
    return r2.transmissionFactor !== void 0 && (t2.transmission = r2[n2(539)]), r2[n2(510)] !== void 0 && i2.push(this.parser.assignTexture(t2, n2(485), r2.transmissionTexture)), Promise.all(i2);
  }
}, ze = class {
  constructor(e2) {
    this.parser = e2, this.name = B.KHR_MATERIALS_VOLUME;
  }
  [F(575)](e2) {
    return z(this.parser, e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this[n2(386)]);
    if (r2 === null) return Promise.resolve();
    let i2 = [];
    t2[n2(562)] = r2[n2(592)] === void 0 ? 0 : r2.thicknessFactor, r2[n2(407)] !== void 0 && i2.push(this.parser[n2(459)](t2, `thicknessMap`, r2.thicknessTexture)), t2[n2(451)] = r2.attenuationDistance || 1 / 0;
    let a2 = r2.attenuationColor || [1, 1, 1];
    return t2.attenuationColor = new m()[n2(563)](a2[0], a2[1], a2[2], w), Promise.all(i2);
  }
}, Be = class {
  constructor(e2) {
    let t2 = F;
    this.parser = e2, this.name = B[t2(583)];
  }
  getMaterialType(e2) {
    return z(this.parser, e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this[n2(386)]);
    return r2 === null ? Promise.resolve() : (t2.ior = r2.ior === void 0 ? 1.5 : r2.ior, t2.ior === 0 && (t2[n2(404)] = 1e3), Promise.resolve());
  }
}, Ve = class {
  constructor(e2) {
    this.parser = e2, this.name = B.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e2) {
    return z(this.parser, e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this.name);
    if (r2 === null) return Promise[n2(503)]();
    let i2 = [];
    t2.specularIntensity = r2[n2(462)] === void 0 ? 1 : r2.specularFactor, r2.specularTexture !== void 0 && i2.push(this.parser[n2(459)](t2, n2(493), r2[n2(526)]));
    let a2 = r2.specularColorFactor || [1, 1, 1];
    return t2.specularColor = new m().setRGB(a2[0], a2[1], a2[2], w), r2.specularColorTexture !== void 0 && i2[n2(558)](this[n2(441)].assignTexture(t2, `specularColorMap`, r2[n2(528)], `srgb`)), Promise.all(i2);
  }
}, He = class {
  constructor(e2) {
    let t2 = F;
    this[t2(441)] = e2, this.name = B[t2(541)];
  }
  getMaterialType(e2) {
    return z(this.parser, e2, this.name) === null ? null : y;
  }
  extendMaterialParams(e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this.name);
    if (r2 === null) return Promise.resolve();
    let i2 = [];
    return t2.bumpScale = r2.bumpFactor === void 0 ? 1 : r2.bumpFactor, r2.bumpTexture !== void 0 && i2.push(this.parser[n2(459)](t2, `bumpMap`, r2.bumpTexture)), Promise[n2(406)](i2);
  }
}, Ue = class {
  constructor(e2) {
    let t2 = F;
    this[t2(441)] = e2, this.name = B.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e2) {
    return z(this.parser, e2, this.name) === null ? null : y;
  }
  [F(545)](e2, t2) {
    let n2 = F, r2 = z(this.parser, e2, this[n2(386)]);
    if (r2 === null) return Promise.resolve();
    let i2 = [];
    return r2.anisotropyStrength !== void 0 && (t2[n2(547)] = r2.anisotropyStrength), r2[n2(587)] !== void 0 && (t2.anisotropyRotation = r2.anisotropyRotation), r2.anisotropyTexture !== void 0 && i2.push(this[n2(441)].assignTexture(t2, `anisotropyMap`, r2.anisotropyTexture)), Promise.all(i2);
  }
}, We = class {
  constructor(e2) {
    let t2 = F;
    this.parser = e2, this.name = B[t2(432)];
  }
  loadTexture(e2) {
    let t2 = F, n2 = this[t2(441)], r2 = n2.json, i2 = r2[t2(383)][e2];
    if (!i2.extensions || !i2[t2(581)][this.name]) return null;
    let a2 = i2.extensions[this.name], o2 = n2.options.ktx2Loader;
    if (!o2) {
      if (r2[t2(521)] && r2.extensionsRequired.indexOf(this.name) >= 0) throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);
      return null;
    }
    return n2[t2(549)](e2, a2.source, o2);
  }
}, Ge = class {
  constructor(e2) {
    let t2 = F;
    this[t2(441)] = e2, this.name = B.EXT_TEXTURE_WEBP;
  }
  loadTexture(e2) {
    let t2 = F, n2 = this.name, r2 = this.parser, i2 = r2.json, a2 = i2.textures[e2];
    if (!a2.extensions || !a2.extensions[n2]) return null;
    let o2 = a2.extensions[n2], s2 = i2.images[o2.source], c2 = r2[t2(504)];
    if (s2.uri) {
      let e3 = r2.options.manager.getHandler(s2.uri);
      e3 !== null && (c2 = e3);
    }
    return r2.loadTextureImage(e2, o2.source, c2);
  }
}, Ke = class {
  constructor(e2) {
    this.parser = e2, this.name = B.EXT_TEXTURE_AVIF;
  }
  [F(513)](e2) {
    let t2 = F, n2 = this[t2(386)], r2 = this.parser, i2 = r2.json, a2 = i2.textures[e2];
    if (!a2.extensions || !a2.extensions[n2]) return null;
    let o2 = a2[t2(581)][n2], s2 = i2.images[o2.source], c2 = r2.textureLoader;
    if (s2[t2(554)]) {
      let e3 = r2.options.manager[t2(525)](s2.uri);
      e3 !== null && (c2 = e3);
    }
    return r2.loadTextureImage(e2, o2.source, c2);
  }
}, V = class {
  constructor(e2, t2) {
    let n2 = F;
    this[n2(386)] = t2, this.parser = e2;
  }
  loadBufferView(e2) {
    let t2 = F, n2 = this.parser[t2(370)], r2 = n2.bufferViews[e2];
    if (r2.extensions && r2.extensions[this.name]) {
      let e3 = r2.extensions[this.name], i2 = this.parser.getDependency(`buffer`, e3[t2(569)]), a2 = this.parser.options.meshoptDecoder;
      if (!a2 || !a2.supported) {
        if (n2.extensionsRequired && n2.extensionsRequired[t2(511)](this.name) >= 0) throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);
        return null;
      }
      return i2.then(function(n3) {
        let r3 = t2, i3 = e3.byteOffset || 0, o2 = e3.byteLength || 0, s2 = e3.count, c2 = e3.byteStride, l2 = new Uint8Array(n3, i3, o2);
        return a2.decodeGltfBufferAsync ? a2.decodeGltfBufferAsync(s2, c2, l2, e3.mode, e3[r3(400)])[r3(433)](function(e4) {
          return e4.buffer;
        }) : a2.ready.then(function() {
          let t3 = r3, n4 = new ArrayBuffer(s2 * c2);
          return a2.decodeGltfBuffer(new Uint8Array(n4), s2, c2, l2, e3[t3(372)], e3[t3(400)]), n4;
        });
      });
    } else return null;
  }
}, qe = class {
  constructor(e2) {
    this.name = B.EXT_MESH_GPU_INSTANCING, this.parser = e2;
  }
  createNodeMesh(e2) {
    let t2 = F, r2 = this.parser.json, i2 = r2[t2(507)][e2];
    if (!i2[t2(581)] || !i2.extensions[this.name] || i2.mesh === void 0) return null;
    let a2 = r2.meshes[i2.mesh];
    for (let e3 of a2.primitives) if (e3.mode !== U[t2(435)] && e3[t2(372)] !== U.TRIANGLE_STRIP && e3[t2(372)] !== U.TRIANGLE_FAN && e3.mode !== void 0) return null;
    let o2 = i2[t2(581)][this.name].attributes, s2 = [], c2 = {};
    for (let e3 in o2) s2.push(this[t2(441)].getDependency(`accessor`, o2[e3]).then((t3) => (c2[e3] = t3, c2[e3])));
    return s2[t2(394)] < 1 ? null : (s2.push(this.parser.createNodeMesh(e2)), Promise.all(s2).then((e3) => {
      let r3 = t2, i3 = e3.pop(), a3 = i3.isGroup ? i3.children : [i3], o3 = e3[0].count, s3 = [];
      for (let e4 of a3) {
        let t3 = new A(), i4 = new x(), a4 = new b(), l2 = new x(1, 1, 1), u2 = new pe(e4.geometry, e4.material, o3);
        for (let e5 = 0; e5 < o3; e5++) c2.TRANSLATION && i4.fromBufferAttribute(c2.TRANSLATION, e5), c2[r3(512)] && a4.fromBufferAttribute(c2[r3(512)], e5), c2.SCALE && l2[r3(410)](c2[r3(586)], e5), u2.setMatrixAt(e5, t3.compose(i4, a4, l2));
        for (let t4 in c2) if (t4 === `_COLOR_0`) {
          let e5 = c2[t4];
          u2.instanceColor = new n(e5.array, e5[r3(551)], e5[r3(390)]);
        } else t4 !== `TRANSLATION` && t4 !== `ROTATION` && t4 !== `SCALE` && e4.geometry.setAttribute(t4, c2[t4]);
        N[r3(425)].copy.call(u2, e4), this.parser[r3(577)](u2), s3.push(u2);
      }
      return i3.isGroup ? (i3.clear(), i3.add(...s3), i3) : s3[0];
    }));
  }
}, Je = `glTF`, H = 12, Ye = { JSON: 1313821514, BIN: 5130562 }, Xe = class {
  constructor(e2) {
    let t2 = F;
    this.name = B.KHR_BINARY_GLTF, this.content = null, this[t2(423)] = null;
    let n2 = new DataView(e2, 0, H), r2 = new TextDecoder();
    if (this.header = { magic: r2.decode(new Uint8Array(e2.slice(0, 4))), version: n2[t2(544)](4, true), length: n2.getUint32(8, true) }, this.header.magic !== Je) throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);
    if (this.header.version < 2) throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);
    let i2 = this[t2(439)].length - H, a2 = new DataView(e2, H), o2 = 0;
    for (; o2 < i2; ) {
      let n3 = a2[t2(544)](o2, true);
      o2 += 4;
      let i3 = a2.getUint32(o2, true);
      if (o2 += 4, i3 === Ye.JSON) {
        let i4 = new Uint8Array(e2, H + o2, n3);
        this.content = r2[t2(378)](i4);
      } else if (i3 === Ye[t2(455)]) {
        let r3 = H + o2;
        this[t2(423)] = e2.slice(r3, r3 + n3);
      }
      o2 += n3;
    }
    if (this.content === null) throw Error(t2(514));
  }
}, Ze = class {
  constructor(e2, t2) {
    let n2 = F;
    if (!t2) throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);
    this.name = B[n2(489)], this.json = e2, this.dracoLoader = t2, this.dracoLoader[n2(573)]();
  }
  [F(491)](e2, t2) {
    let n2 = F, r2 = this[n2(370)], i2 = this.dracoLoader, a2 = e2.extensions[this.name][n2(519)], o2 = e2.extensions[this.name][n2(590)], s2 = {}, c2 = {}, l2 = {};
    for (let e3 in o2) {
      let t3 = K[e3] || e3.toLowerCase();
      s2[t3] = o2[e3];
    }
    for (let t3 in e2.attributes) {
      let i3 = K[t3] || t3.toLowerCase();
      if (o2[t3] !== void 0) {
        let a3 = r2[n2(500)][e2.attributes[t3]];
        l2[i3] = W[a3.componentType].name, c2[i3] = a3[n2(390)] === true;
      }
    }
    return t2.getDependency(`bufferView`, a2).then(function(e3) {
      return new Promise(function(t3, n3) {
        i2.decodeDracoFile(e3, function(e4) {
          let n4 = P;
          for (let t4 in e4[n4(590)]) {
            let n5 = e4.attributes[t4], r3 = c2[t4];
            r3 !== void 0 && (n5.normalized = r3);
          }
          t3(e4);
        }, s2, l2, w, n3);
      });
    });
  }
}, Qe = class {
  constructor() {
    this.name = B.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e2, t2) {
    let n2 = F;
    return (t2.texCoord === void 0 || t2.texCoord === e2.channel) && t2.offset === void 0 && t2.rotation === void 0 && t2.scale === void 0 ? e2 : (e2 = e2.clone(), t2.texCoord !== void 0 && (e2.channel = t2.texCoord), t2.offset !== void 0 && e2.offset[n2(548)](t2.offset), t2.rotation !== void 0 && (e2.rotation = t2[n2(422)]), t2.scale !== void 0 && e2.repeat.fromArray(t2.scale), e2.needsUpdate = true, e2);
  }
}, $e = class {
  constructor() {
    let e2 = F;
    this.name = B[e2(490)];
  }
}, et = class extends s {
  constructor(e2, t2, n2, r2) {
    super(e2, t2, n2, r2);
  }
  copySampleValue_(e2) {
    let t2 = this.resultBuffer, n2 = this.sampleValues, r2 = this.valueSize, i2 = e2 * r2 * 3 + r2;
    for (let e3 = 0; e3 !== r2; e3++) t2[e3] = n2[i2 + e3];
    return t2;
  }
  interpolate_(e2, t2, n2, r2) {
    let i2 = F, a2 = this[i2(456)], o2 = this.sampleValues, s2 = this.valueSize, c2 = s2 * 2, l2 = s2 * 3, u2 = r2 - t2, d2 = (n2 - t2) / u2, f2 = d2 * d2, p2 = f2 * d2, m2 = e2 * l2, h2 = m2 - l2, g2 = -2 * p2 + 3 * f2, _2 = p2 - f2, ee2 = 1 - g2, v2 = _2 - f2 + d2;
    for (let e3 = 0; e3 !== s2; e3++) {
      let t3 = o2[h2 + e3 + s2], n3 = o2[h2 + e3 + c2] * u2, r3 = o2[m2 + e3 + s2], i3 = o2[m2 + e3] * u2;
      a2[e3] = ee2 * t3 + v2 * n3 + g2 * r3 + _2 * i3;
    }
    return a2;
  }
}, tt = new b(), nt = class extends et {
  interpolate_(e2, t2, n2, r2) {
    let i2 = F, a2 = super.interpolate_(e2, t2, n2, r2);
    return tt.fromArray(a2).normalize()[i2(565)](a2), a2;
  }
}, U = { FLOAT: 5126, FLOAT_MAT3: 35675, FLOAT_MAT4: 35676, FLOAT_VEC2: 35664, FLOAT_VEC3: 35665, FLOAT_VEC4: 35666, LINEAR: 9729, REPEAT: 10497, SAMPLER_2D: 35678, POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6, UNSIGNED_BYTE: 5121, UNSIGNED_SHORT: 5123 }, W = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, rt = { 9728: d, 9729: he, 9984: de, 9985: be, 9986: i, 9987: l }, it = { 33071: oe, 33648: v, 10497: Ce }, G = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, K = { POSITION: `position`, NORMAL: F(438), TANGENT: `tangent`, TEXCOORD_0: `uv`, TEXCOORD_1: `uv1`, TEXCOORD_2: `uv2`, TEXCOORD_3: F(574), COLOR_0: `color`, WEIGHTS_0: `skinWeight`, JOINTS_0: `skinIndex` }, q = { scale: F(535), translation: `position`, rotation: `quaternion`, weights: `morphTargetInfluences` }, at = { CUBICSPLINE: void 0, LINEAR: j, STEP: o }, J = { OPAQUE: `OPAQUE`, MASK: `MASK`, BLEND: `BLEND` };
function ot(e2) {
  return e2.DefaultMaterial === void 0 && (e2.DefaultMaterial = new le({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: 0 })), e2.DefaultMaterial;
}
function Y(e2, t2, n2) {
  let r2 = F;
  for (let i2 in n2.extensions) e2[i2] === void 0 && (t2.userData.gltfExtensions = t2.userData.gltfExtensions || {}, t2.userData.gltfExtensions[i2] = n2[r2(581)][i2]);
}
function X(e2, t2) {
  let n2 = F;
  t2.extras !== void 0 && (typeof t2.extras == n2(579) ? Object.assign(e2.userData, t2.extras) : console[n2(495)](`THREE.GLTFLoader: Ignoring primitive type .extras, ` + t2[n2(572)]));
}
function st(e2, t2, n2) {
  let r2 = F, i2 = false, a2 = false, o2 = false;
  for (let e3 = 0, n3 = t2.length; e3 < n3; e3++) {
    let n4 = t2[e3];
    if (n4.POSITION !== void 0 && (i2 = true), n4.NORMAL !== void 0 && (a2 = true), n4.COLOR_0 !== void 0 && (o2 = true), i2 && a2 && o2) break;
  }
  if (!i2 && !a2 && !o2) return Promise.resolve(e2);
  let s2 = [], c2 = [], l2 = [];
  for (let u2 = 0, d2 = t2.length; u2 < d2; u2++) {
    let d3 = t2[u2];
    if (i2) {
      let t3 = d3.POSITION === void 0 ? e2.attributes.position : n2.getDependency(`accessor`, d3.POSITION);
      s2.push(t3);
    }
    if (a2) {
      let t3 = d3.NORMAL === void 0 ? e2.attributes.normal : n2[r2(478)](`accessor`, d3.NORMAL);
      c2[r2(558)](t3);
    }
    if (o2) {
      let t3 = d3.COLOR_0 === void 0 ? e2.attributes[r2(437)] : n2.getDependency(`accessor`, d3.COLOR_0);
      l2[r2(558)](t3);
    }
  }
  return Promise.all([Promise.all(s2), Promise.all(c2), Promise.all(l2)])[r2(433)](function(t3) {
    let n3 = r2, s3 = t3[0], c3 = t3[1], l3 = t3[2];
    return i2 && (e2[n3(555)].position = s3), a2 && (e2.morphAttributes.normal = c3), o2 && (e2.morphAttributes.color = l3), e2.morphTargetsRelative = true, e2;
  });
}
function ct(e2, t2) {
  let n2 = F;
  if (e2.updateMorphTargets(), t2.weights !== void 0) for (let n3 = 0, r2 = t2.weights.length; n3 < r2; n3++) e2.morphTargetInfluences[n3] = t2.weights[n3];
  if (t2[n2(572)] && Array[n2(389)](t2.extras.targetNames)) {
    let r2 = t2.extras[n2(367)];
    if (e2.morphTargetInfluences[n2(394)] === r2.length) {
      e2.morphTargetDictionary = {};
      for (let t3 = 0, n3 = r2.length; t3 < n3; t3++) e2.morphTargetDictionary[r2[t3]] = t3;
    } else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`);
  }
}
function lt(e2) {
  let t2 = F, n2, r2 = e2.extensions && e2.extensions[B.KHR_DRACO_MESH_COMPRESSION];
  if (n2 = r2 ? `draco:` + r2.bufferView + `:` + r2.indices + `:` + Z(r2.attributes) : e2[t2(571)] + `:` + Z(e2.attributes) + `:` + e2.mode, e2[t2(530)] !== void 0) for (let t3 = 0, r3 = e2.targets.length; t3 < r3; t3++) n2 += `:` + Z(e2.targets[t3]);
  return n2;
}
function Z(e2) {
  let t2 = ``, n2 = Object.keys(e2).sort();
  for (let r2 = 0, i2 = n2.length; r2 < i2; r2++) t2 += n2[r2] + `:` + e2[n2[r2]] + `;`;
  return t2;
}
function Q(e2) {
  let t2 = F;
  switch (e2) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw Error(t2(473));
  }
}
function ut(e2) {
  let t2 = F;
  return e2.search(/\.jpe?g($|\?)/i) > 0 || e2.search(/^data\:image\/jpeg/) === 0 ? `image/jpeg` : e2.search(/\.webp($|\?)/i) > 0 || e2.search(/^data\:image\/webp/) === 0 ? t2(380) : e2.search(/\.ktx2($|\?)/i) > 0 || e2.search(/^data\:image\/ktx2/) === 0 ? `image/ktx2` : `image/png`;
}
var dt = new A(), ft = class {
  constructor(e2 = {}, t2 = {}) {
    let n2 = F;
    this.json = e2, this.extensions = {}, this.plugins = {}, this.options = t2, this.cache = new Ae(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let r2 = false, i2 = -1, a2 = false, o2 = -1;
    if (typeof navigator < `u` && navigator.userAgent !== void 0) {
      let e3 = navigator.userAgent;
      r2 = /^((?!chrome|android).)*safari/i.test(e3) === true;
      let t3 = e3.match(/Version\/(\d+)/);
      i2 = r2 && t3 ? parseInt(t3[1], 10) : -1, a2 = e3.indexOf(`Firefox`) > -1, o2 = a2 ? e3.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > `u` || r2 && i2 < 17 || a2 && o2 < 98 ? this[n2(504)] = new ce(this.options.manager) : this[n2(504)] = new ie(this[n2(557)][n2(533)]), this.textureLoader.setCrossOrigin(this[n2(557)].crossOrigin), this.textureLoader.setRequestHeader(this.options[n2(413)]), this.fileLoader = new M(this.options.manager), this.fileLoader.setResponseType(`arraybuffer`), this.options.crossOrigin === `use-credentials` && this.fileLoader[n2(458)](true);
  }
  setExtensions(e2) {
    this.extensions = e2;
  }
  [F(497)](e2) {
    this.plugins = e2;
  }
  [F(454)](e2, t2) {
    let n2 = F, r2 = this, i2 = this[n2(370)], a2 = this[n2(581)];
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e3) {
      return e3._markDefs && e3._markDefs();
    }), Promise.all(this._invokeAll(function(e3) {
      return e3.beforeRoot && e3.beforeRoot();
    })).then(function() {
      return Promise.all([r2.getDependencies(`scene`), r2.getDependencies(`animation`), r2.getDependencies(`camera`)]);
    }).then(function(t3) {
      let o2 = n2, s2 = { scene: t3[0][i2[o2(393)] || 0], scenes: t3[0], animations: t3[1], cameras: t3[2], asset: i2.asset, parser: r2, userData: {} };
      return Y(a2, s2, i2), X(s2, i2), Promise.all(r2._invokeAll(function(e3) {
        let t4 = o2;
        return e3.afterRoot && e3[t4(589)](s2);
      })).then(function() {
        for (let e3 of s2.scenes) e3.updateMatrixWorld();
        e2(s2);
      });
    })[n2(391)](t2);
  }
  _markDefs() {
    let e2 = F, t2 = this.json.nodes || [], n2 = this[e2(370)][e2(412)] || [], r2 = this.json[e2(388)] || [];
    for (let e3 = 0, r3 = n2.length; e3 < r3; e3++) {
      let r4 = n2[e3].joints;
      for (let e4 = 0, n3 = r4.length; e4 < n3; e4++) t2[r4[e4]].isBone = true;
    }
    for (let n3 = 0, i2 = t2.length; n3 < i2; n3++) {
      let i3 = t2[n3];
      i3.mesh !== void 0 && (this._addNodeRef(this.meshCache, i3.mesh), i3.skin !== void 0 && (r2[i3[e2(568)]].isSkinnedMesh = true)), i3[e2(402)] !== void 0 && this._addNodeRef(this.cameraCache, i3.camera);
    }
  }
  _addNodeRef(e2, t2) {
    let n2 = F;
    t2 !== void 0 && (e2.refs[t2] === void 0 && (e2.refs[t2] = e2[n2(416)][t2] = 0), e2[n2(376)][t2]++);
  }
  _getNodeRef(e2, t2, n2) {
    let r2 = F;
    if (e2[r2(376)][t2] <= 1) return n2;
    let i2 = n2[r2(464)](), a2 = (e3, t3) => {
      let n3 = r2, i3 = this.associations.get(e3);
      i3 != null && this[n3(447)][n3(429)](t3, i3);
      for (let [n4, r3] of e3.children.entries()) a2(r3, t3.children[n4]);
    };
    return a2(n2, i2), i2.name += r2(468) + e2.uses[t2]++, i2;
  }
  [F(369)](e2) {
    let t2 = Object.values(this.plugins);
    t2.push(this);
    for (let n2 = 0; n2 < t2.length; n2++) {
      let r2 = e2(t2[n2]);
      if (r2) return r2;
    }
    return null;
  }
  _invokeAll(e2) {
    let t2 = Object.values(this.plugins);
    t2.unshift(this);
    let n2 = [];
    for (let r2 = 0; r2 < t2.length; r2++) {
      let i2 = e2(t2[r2]);
      i2 && n2.push(i2);
    }
    return n2;
  }
  getDependency(e2, t2) {
    let n2 = F, r2 = e2 + `:` + t2, i2 = this.cache.get(r2);
    if (!i2) {
      switch (e2) {
        case `scene`:
          i2 = this.loadScene(t2);
          break;
        case `node`:
          i2 = this[n2(369)](function(e3) {
            return e3.loadNode && e3.loadNode(t2);
          });
          break;
        case `mesh`:
          i2 = this._invokeOne(function(e3) {
            let r3 = n2;
            return e3[r3(395)] && e3[r3(395)](t2);
          });
          break;
        case n2(529):
          i2 = this.loadAccessor(t2);
          break;
        case `bufferView`:
          i2 = this._invokeOne(function(e3) {
            let r3 = n2;
            return e3.loadBufferView && e3[r3(518)](t2);
          });
          break;
        case `buffer`:
          i2 = this.loadBuffer(t2);
          break;
        case `material`:
          i2 = this._invokeOne(function(e3) {
            return e3.loadMaterial && e3.loadMaterial(t2);
          });
          break;
        case `texture`:
          i2 = this._invokeOne(function(e3) {
            let r3 = n2;
            return e3.loadTexture && e3[r3(513)](t2);
          });
          break;
        case `skin`:
          i2 = this.loadSkin(t2);
          break;
        case `animation`:
          i2 = this._invokeOne(function(e3) {
            return e3.loadAnimation && e3.loadAnimation(t2);
          });
          break;
        case `camera`:
          i2 = this.loadCamera(t2);
          break;
        default:
          if (i2 = this._invokeOne(function(n3) {
            return n3 != this && n3.getDependency && n3.getDependency(e2, t2);
          }), !i2) throw Error(`Unknown type: ` + e2);
          break;
      }
      this.cache[n2(446)](r2, i2);
    }
    return i2;
  }
  getDependencies(e2) {
    let t2 = F, n2 = this.cache.get(e2);
    if (!n2) {
      let r2 = this, i2 = this.json[e2 + (e2 === t2(568) ? `es` : `s`)] || [];
      n2 = Promise[t2(406)](i2.map(function(t3, n3) {
        return r2.getDependency(e2, n3);
      })), this.cache[t2(446)](e2, n2);
    }
    return n2;
  }
  loadBuffer(e2) {
    let t2 = F, n2 = this.json[t2(517)][e2], r2 = this.fileLoader;
    if (n2.type && n2.type !== `arraybuffer`) throw Error(`THREE.GLTFLoader: ` + n2.type + ` buffer type is not supported.`);
    if (n2.uri === void 0 && e2 === 0) return Promise[t2(503)](this.extensions[B.KHR_BINARY_GLTF].body);
    let i2 = this.options;
    return new Promise(function(e3, a2) {
      let o2 = t2;
      r2.load(S.resolveURL(n2.uri, i2[o2(580)]), e3, void 0, function() {
        a2(Error(`THREE.GLTFLoader: Failed to load buffer "` + n2[o2(554)] + `".`));
      });
    });
  }
  loadBufferView(e2) {
    let t2 = F, n2 = this.json.bufferViews[e2];
    return this.getDependency(`buffer`, n2[t2(569)]).then(function(e3) {
      let r2 = t2, i2 = n2.byteLength || 0, a2 = n2[r2(591)] || 0;
      return e3.slice(a2, a2 + i2);
    });
  }
  loadAccessor(e2) {
    let t2 = F, n2 = this, r2 = this.json, i2 = this.json.accessors[e2];
    if (i2.bufferView === void 0 && i2.sparse === void 0) {
      let e3 = G[i2[t2(479)]], n3 = W[i2.componentType], r3 = i2.normalized === true, a3 = new n3(i2[t2(584)] * e3);
      return Promise[t2(503)](new E(a3, e3, r3));
    }
    let a2 = [];
    return i2.bufferView === void 0 ? a2.push(null) : a2.push(this.getDependency(`bufferView`, i2.bufferView)), i2.sparse !== void 0 && (a2.push(this.getDependency(t2(519), i2.sparse.indices[t2(519)])), a2.push(this.getDependency(`bufferView`, i2.sparse[t2(469)].bufferView))), Promise.all(a2).then(function(e3) {
      let a3 = t2, o2 = e3[0], s2 = G[i2.type], c2 = W[i2.componentType], l2 = c2.BYTES_PER_ELEMENT, u2 = l2 * s2, d2 = i2[a3(591)] || 0, f2 = i2.bufferView === void 0 ? void 0 : r2.bufferViews[i2.bufferView].byteStride, p2 = i2[a3(390)] === true, m2, h2;
      if (f2 && f2 !== u2) {
        let e4 = Math.floor(d2 / f2), t3 = `InterleavedBuffer:` + i2.bufferView + `:` + i2.componentType + `:` + e4 + `:` + i2.count, r3 = n2.cache.get(t3);
        r3 || (m2 = new c2(o2, e4 * f2, i2[a3(584)] * f2 / l2), r3 = new ye(m2, f2 / l2), n2.cache.add(t3, r3)), h2 = new Ee(r3, s2, d2 % f2 / l2, p2);
      } else m2 = o2 === null ? new c2(i2[a3(584)] * s2) : new c2(o2, d2, i2.count * s2), h2 = new E(m2, s2, p2);
      if (i2.sparse !== void 0) {
        let t3 = G.SCALAR, n3 = W[i2.sparse.indices[a3(397)]], r3 = i2.sparse.indices.byteOffset || 0, l3 = i2.sparse.values.byteOffset || 0, u3 = new n3(e3[1], r3, i2.sparse.count * t3), d3 = new c2(e3[2], l3, i2.sparse.count * s2);
        o2 !== null && (h2 = new E(h2.array.slice(), h2.itemSize, h2.normalized)), h2[a3(390)] = false;
        for (let e4 = 0, t4 = u3[a3(394)]; e4 < t4; e4++) {
          let t5 = u3[e4];
          if (h2.setX(t5, d3[e4 * s2]), s2 >= 2 && h2.setY(t5, d3[e4 * s2 + 1]), s2 >= 3 && h2.setZ(t5, d3[e4 * s2 + 2]), s2 >= 4 && h2.setW(t5, d3[e4 * s2 + 3]), s2 >= 5) throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`);
        }
        h2[a3(390)] = p2;
      }
      return h2;
    });
  }
  loadTexture(e2) {
    let t2 = F, n2 = this.json, r2 = this.options, i2 = n2.textures[e2][t2(534)], a2 = n2.images[i2], o2 = this.textureLoader;
    if (a2.uri) {
      let e3 = r2.manager.getHandler(a2.uri);
      e3 !== null && (o2 = e3);
    }
    return this.loadTextureImage(e2, i2, o2);
  }
  loadTextureImage(e2, t2, n2) {
    let r2 = F, i2 = this, a2 = this.json, o2 = a2[r2(383)][e2], s2 = a2.images[t2], c2 = (s2[r2(554)] || s2[r2(519)]) + `:` + o2.sampler;
    if (this[r2(399)][c2]) return this.textureCache[c2];
    let l2 = this.loadImageSource(t2, n2).then(function(t3) {
      let n3 = r2;
      t3.flipY = false, t3[n3(386)] = o2.name || s2.name || ``, t3[n3(386)] === `` && typeof s2.uri == `string` && s2.uri[n3(440)](`data:image/`) === false && (t3.name = s2.uri);
      let c3 = (a2.samplers || {})[o2.sampler] || {};
      return t3.magFilter = rt[c3[n3(443)]] || 1006, t3.minFilter = rt[c3[n3(470)]] || 1008, t3.wrapS = it[c3.wrapS] || 1e3, t3.wrapT = it[c3[n3(418)]] || 1e3, t3[n3(472)] = !t3.isCompressedTexture && t3[n3(470)] !== 1003 && t3[n3(470)] !== 1006, i2.associations.set(t3, { textures: e2 }), t3;
    }).catch(function() {
      return null;
    });
    return this.textureCache[c2] = l2, l2;
  }
  loadImageSource(e2, t2) {
    let n2 = F, r2 = this, i2 = this.json, a2 = this.options;
    if (this.sourceCache[e2] !== void 0) return this.sourceCache[e2].then((e3) => e3.clone());
    let o2 = i2[n2(477)][e2], s2 = self.URL || self.webkitURL, c2 = o2.uri || ``, l2 = false;
    if (o2[n2(519)] !== void 0) c2 = r2.getDependency(`bufferView`, o2[n2(519)]).then(function(e3) {
      l2 = true;
      let t3 = new Blob([e3], { type: o2.mimeType });
      return c2 = s2.createObjectURL(t3), c2;
    });
    else if (o2[n2(554)] === void 0) throw Error(n2(384) + e2 + ` is missing URI and bufferView`);
    let u2 = Promise.resolve(c2).then(function(e3) {
      return new Promise(function(n3, r3) {
        let i3 = P, o3 = n3;
        t2.isImageBitmapLoader === true && (o3 = function(e4) {
          let t3 = new g(e4);
          t3.needsUpdate = true, n3(t3);
        }), t2.load(S[i3(481)](e3, a2.path), o3, void 0, r3);
      });
    }).then(function(e3) {
      let t3 = n2;
      return l2 === true && s2[t3(487)](c2), X(e3, o2), e3.userData.mimeType = o2.mimeType || ut(o2[t3(554)]), e3;
    })[n2(391)](function(e3) {
      throw console[n2(466)](`THREE.GLTFLoader: Couldn't load texture`, c2), e3;
    });
    return this.sourceCache[e2] = u2, u2;
  }
  assignTexture(e2, t2, n2, r2) {
    let i2 = this;
    return this.getDependency(`texture`, n2.index).then(function(a2) {
      let o2 = P;
      if (!a2) return null;
      if (n2[o2(392)] !== void 0 && n2[o2(392)] > 0 && (a2 = a2.clone(), a2.channel = n2.texCoord), i2.extensions[B.KHR_TEXTURE_TRANSFORM]) {
        let e3 = n2.extensions === void 0 ? void 0 : n2.extensions[B.KHR_TEXTURE_TRANSFORM];
        if (e3) {
          let t3 = i2.associations.get(a2);
          a2 = i2[o2(581)][B.KHR_TEXTURE_TRANSFORM].extendTexture(a2, e3), i2.associations.set(a2, t3);
        }
      }
      return r2 !== void 0 && (a2.colorSpace = r2), e2[t2] = a2, a2;
    });
  }
  assignFinalMaterial(e2) {
    let t2 = F, n2 = e2.geometry, r2 = e2.material, i2 = n2[t2(590)].tangent === void 0, a2 = n2[t2(590)].color !== void 0, o2 = n2.attributes.normal === void 0;
    if (e2[t2(409)]) {
      let e3 = `PointsMaterial:` + r2.uuid, n3 = this[t2(382)].get(e3);
      n3 || (n3 = new Se(), O.prototype.copy.call(n3, r2), n3.color[t2(502)](r2.color), n3.map = r2.map, n3.sizeAttenuation = false, this.cache[t2(446)](e3, n3)), r2 = n3;
    } else if (e2.isLine) {
      let e3 = `LineBasicMaterial:` + r2.uuid, n3 = this[t2(382)].get(e3);
      n3 || (n3 = new ae(), O.prototype.copy.call(n3, r2), n3[t2(437)].copy(r2.color), n3.map = r2.map, this.cache[t2(446)](e3, n3)), r2 = n3;
    }
    if (i2 || a2 || o2) {
      let e3 = `ClonedMaterial:` + r2[t2(436)] + `:`;
      i2 && (e3 += `derivative-tangents:`), a2 && (e3 += `vertex-colors:`), o2 && (e3 += `flat-shading:`);
      let n3 = this.cache.get(e3);
      n3 || (n3 = r2.clone(), a2 && (n3.vertexColors = true), o2 && (n3.flatShading = true), i2 && (n3.normalScale && (n3.normalScale.y *= -1), n3.clearcoatNormalScale && (n3[t2(420)].y *= -1)), this.cache[t2(446)](e3, n3), this[t2(447)][t2(429)](n3, this.associations.get(r2))), r2 = n3;
    }
    e2.material = r2;
  }
  getMaterialType() {
    return le;
  }
  loadMaterial(e2) {
    let t2 = F, n2 = this, r2 = this.json, i2 = this.extensions, a2 = r2.materials[e2], o2, s2 = {}, c2 = a2[t2(581)] || {}, l2 = [];
    if (c2[B.KHR_MATERIALS_UNLIT]) {
      let e3 = i2[B.KHR_MATERIALS_UNLIT];
      o2 = e3[t2(575)](), l2.push(e3.extendParams(s2, a2, n2));
    } else {
      let r3 = a2.pbrMetallicRoughness || {};
      if (s2.color = new m(1, 1, 1), s2.opacity = 1, Array.isArray(r3[t2(566)])) {
        let e3 = r3.baseColorFactor;
        s2.color.setRGB(e3[0], e3[1], e3[2], w), s2.opacity = e3[3];
      }
      r3.baseColorTexture !== void 0 && l2.push(n2.assignTexture(s2, t2(524), r3.baseColorTexture, `srgb`)), s2.metalness = r3.metallicFactor === void 0 ? 1 : r3.metallicFactor, s2[t2(450)] = r3.roughnessFactor === void 0 ? 1 : r3.roughnessFactor, r3.metallicRoughnessTexture !== void 0 && (l2.push(n2.assignTexture(s2, `metalnessMap`, r3[t2(465)])), l2.push(n2.assignTexture(s2, `roughnessMap`, r3.metallicRoughnessTexture))), o2 = this[t2(369)](function(n3) {
        let r4 = t2;
        return n3.getMaterialType && n3[r4(575)](e2);
      }), l2.push(Promise.all(this._invokeAll(function(t3) {
        return t3.extendMaterialParams && t3.extendMaterialParams(e2, s2);
      })));
    }
    a2[t2(453)] === true && (s2.side = 2);
    let u2 = a2.alphaMode || J.OPAQUE;
    if (u2 === J.BLEND ? (s2.transparent = true, s2.depthWrite = false) : (s2[t2(445)] = false, u2 === J.MASK && (s2.alphaTest = a2[t2(474)] === void 0 ? 0.5 : a2.alphaCutoff)), a2.normalTexture !== void 0 && o2 !== k && (l2.push(n2[t2(459)](s2, `normalMap`, a2.normalTexture)), s2.normalScale = new h(1, 1), a2.normalTexture.scale !== void 0)) {
      let e3 = a2.normalTexture.scale;
      s2.normalScale.set(e3, e3);
    }
    if (a2.occlusionTexture !== void 0 && o2 !== k && (l2.push(n2.assignTexture(s2, `aoMap`, a2[t2(483)])), a2[t2(483)].strength !== void 0 && (s2.aoMapIntensity = a2.occlusionTexture.strength)), a2.emissiveFactor !== void 0 && o2 !== k) {
      let e3 = a2.emissiveFactor;
      s2[t2(482)] = new m()[t2(563)](e3[0], e3[1], e3[2], w);
    }
    return a2.emissiveTexture !== void 0 && o2 !== k && l2.push(n2.assignTexture(s2, `emissiveMap`, a2.emissiveTexture, `srgb`)), Promise.all(l2)[t2(433)](function() {
      let t3 = new o2(s2);
      return a2.name && (t3.name = a2.name), X(t3, a2), n2.associations.set(t3, { materials: e2 }), a2.extensions && Y(i2, t3, a2), t3;
    });
  }
  createUniqueName(e2) {
    let t2 = p.sanitizeNodeName(e2 || ``);
    return t2 in this.nodeNamesUsed ? t2 + `_` + ++this.nodeNamesUsed[t2] : (this.nodeNamesUsed[t2] = 0, t2);
  }
  loadGeometries(e2) {
    let t2 = F, n2 = this, r2 = this.extensions, i2 = this.primitiveCache;
    function a2(e3) {
      let t3 = P;
      return r2[B.KHR_DRACO_MESH_COMPRESSION][t3(491)](e3, n2).then(function(t4) {
        return $(t4, e3, n2);
      });
    }
    let o2 = [];
    for (let r3 = 0, s2 = e2.length; r3 < s2; r3++) {
      let s3 = e2[r3], c2 = lt(s3), l2 = i2[c2];
      if (l2) o2.push(l2.promise);
      else {
        let e3;
        e3 = s3[t2(581)] && s3.extensions[B.KHR_DRACO_MESH_COMPRESSION] ? a2(s3) : $(new u(), s3, n2), i2[c2] = { primitive: s3, promise: e3 }, o2.push(e3);
      }
    }
    return Promise.all(o2);
  }
  loadMesh(e2) {
    let t2 = F, n2 = this, r2 = this.json, i2 = this.extensions, a2 = r2.meshes[e2], o2 = a2.primitives, s2 = [];
    for (let e3 = 0, n3 = o2[t2(394)]; e3 < n3; e3++) {
      let n4 = o2[e3][t2(593)] === void 0 ? ot(this[t2(382)]) : this[t2(478)](t2(593), o2[e3].material);
      s2.push(n4);
    }
    return s2.push(n2.loadGeometries(o2)), Promise.all(s2)[t2(433)](function(r3) {
      let s3 = t2, c2 = r3[s3(536)](0, r3.length - 1), l2 = r3[r3[s3(394)] - 1], u2 = [];
      for (let t3 = 0, r4 = l2.length; t3 < r4; t3++) {
        let r5 = l2[t3], d3 = o2[t3], f2, p2 = c2[t3];
        if (d3.mode === U.TRIANGLES || d3.mode === U.TRIANGLE_STRIP || d3.mode === U[s3(522)] || d3[s3(372)] === void 0) f2 = a2[s3(516)] === true ? new ee(r5, p2) : new ve(r5, p2), f2.isSkinnedMesh === true && f2.normalizeSkinWeights(), d3.mode === U.TRIANGLE_STRIP ? f2.geometry = I(f2.geometry, 1) : d3[s3(372)] === U.TRIANGLE_FAN && (f2[s3(556)] = I(f2.geometry, 2));
        else if (d3[s3(372)] === U.LINES) f2 = new fe(r5, p2);
        else if (d3.mode === U.LINE_STRIP) f2 = new te(r5, p2);
        else if (d3.mode === U.LINE_LOOP) f2 = new ge(r5, p2);
        else if (d3.mode === U.POINTS) f2 = new ue(r5, p2);
        else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: ` + d3.mode);
        Object.keys(f2.geometry.morphAttributes).length > 0 && ct(f2, a2), f2.name = n2.createUniqueName(a2[s3(386)] || `mesh_` + e2), X(f2, a2), d3.extensions && Y(i2, f2, d3), n2[s3(577)](f2), u2.push(f2);
      }
      for (let t3 = 0, r4 = u2.length; t3 < r4; t3++) n2.associations.set(u2[t3], { meshes: e2, primitives: t3 });
      if (u2.length === 1) return a2[s3(581)] && Y(i2, u2[0], a2), u2[0];
      let d2 = new T();
      a2.extensions && Y(i2, d2, a2), n2.associations.set(d2, { meshes: e2 });
      for (let e3 = 0, t3 = u2[s3(394)]; e3 < t3; e3++) d2.add(u2[e3]);
      return d2;
    });
  }
  loadCamera(e2) {
    let t2 = F, n2, r2 = this.json.cameras[e2], i2 = r2[r2.type];
    if (!i2) {
      console.warn(`THREE.GLTFLoader: Missing camera parameters.`);
      return;
    }
    return r2.type === `perspective` ? n2 = new Te(a[t2(492)](i2[t2(419)]), i2[t2(496)] || 1, i2.znear || 1, i2.zfar || 2e6) : r2[t2(479)] === `orthographic` && (n2 = new f(-i2.xmag, i2.xmag, i2.ymag, -i2.ymag, i2.znear, i2[t2(396)])), r2.name && (n2.name = this.createUniqueName(r2[t2(386)])), X(n2, r2), Promise.resolve(n2);
  }
  [F(398)](e2) {
    let t2 = F, n2 = this.json[t2(412)][e2], r2 = [];
    for (let e3 = 0, i2 = n2.joints[t2(394)]; e3 < i2; e3++) r2.push(this[t2(552)](n2.joints[e3]));
    return n2.inverseBindMatrices === void 0 ? r2.push(null) : r2.push(this.getDependency(`accessor`, n2.inverseBindMatrices)), Promise.all(r2).then(function(e3) {
      let t3 = e3.pop(), r3 = e3, i2 = [], a2 = [];
      for (let e4 = 0, o2 = r3.length; e4 < o2; e4++) {
        let o3 = r3[e4];
        if (o3) {
          i2.push(o3);
          let n3 = new A();
          t3 !== null && n3.fromArray(t3.array, e4 * 16), a2.push(n3);
        } else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`, n2.joints[e4]);
      }
      return new c(i2, a2);
    });
  }
  [F(368)](e2) {
    let t2 = F, n2 = this.json, r2 = this, i2 = n2.animations[e2], a2 = i2.name ? i2.name : `animation_` + e2, o2 = [], s2 = [], c2 = [], l2 = [], u2 = [];
    for (let e3 = 0, n3 = i2.channels.length; e3 < n3; e3++) {
      let n4 = i2.channels[e3], r3 = i2.samplers[n4.sampler], a3 = n4.target, d2 = a3[t2(582)], f2 = i2[t2(476)] === void 0 ? r3.input : i2.parameters[r3[t2(375)]], p2 = i2[t2(476)] === void 0 ? r3.output : i2.parameters[r3.output];
      a3.node !== void 0 && (o2.push(this.getDependency(`node`, d2)), s2.push(this[t2(478)](`accessor`, f2)), c2.push(this[t2(478)](`accessor`, p2)), l2.push(r3), u2.push(a3));
    }
    return Promise.all([Promise.all(o2), Promise.all(s2), Promise.all(c2), Promise.all(l2), Promise[t2(406)](u2)]).then(function(e3) {
      let n3 = t2, o3 = e3[0], s3 = e3[1], c3 = e3[2], l3 = e3[3], u3 = e3[4], d2 = [];
      for (let e4 = 0, t3 = o3[n3(394)]; e4 < t3; e4++) {
        let t4 = o3[e4], n4 = s3[e4], i3 = c3[e4], a3 = l3[e4], f3 = u3[e4];
        if (t4 === void 0) continue;
        t4.updateMatrix && t4.updateMatrix();
        let p2 = r2._createAnimationTracks(t4, n4, i3, a3, f3);
        if (p2) for (let e5 = 0; e5 < p2.length; e5++) d2.push(p2[e5]);
      }
      let f2 = new re(a2, void 0, d2);
      return X(f2, i2), f2;
    });
  }
  createNodeMesh(e2) {
    let t2 = F, n2 = this.json, r2 = this, i2 = n2.nodes[e2];
    return i2.mesh === void 0 ? null : r2[t2(478)](`mesh`, i2[t2(568)]).then(function(e3) {
      let n3 = t2, a2 = r2[n3(426)](r2.meshCache, i2.mesh, e3);
      return i2.weights !== void 0 && a2.traverse(function(e4) {
        let t3 = n3;
        if (e4.isMesh) for (let n4 = 0, r3 = i2.weights[t3(394)]; n4 < r3; n4++) e4.morphTargetInfluences[n4] = i2.weights[n4];
      }), a2;
    });
  }
  [F(537)](e2) {
    let t2 = F, n2 = this.json, r2 = this, i2 = n2.nodes[e2], a2 = r2._loadNodeShallow(e2), o2 = [], s2 = i2.children || [];
    for (let e3 = 0, n3 = s2.length; e3 < n3; e3++) o2.push(r2[t2(478)](`node`, s2[e3]));
    let c2 = i2.skin === void 0 ? Promise.resolve(null) : r2.getDependency(`skin`, i2.skin);
    return Promise.all([a2, Promise.all(o2), c2]).then(function(e3) {
      let n3 = t2, r3 = e3[0], i3 = e3[1], a3 = e3[2];
      a3 !== null && r3[n3(523)](function(e4) {
        e4.isSkinnedMesh && e4.bind(a3, dt);
      });
      for (let e4 = 0, t3 = i3.length; e4 < t3; e4++) r3.add(i3[e4]);
      if (r3.userData.pivot !== void 0 && i3.length > 0) {
        let e4 = r3[n3(414)].pivot, t3 = i3[0];
        r3.pivot = new x().fromArray(e4), r3.position.x -= e4[0], r3[n3(442)].y -= e4[1], r3.position.z -= e4[2], t3.position.set(0, 0, 0), delete r3.userData.pivot;
      }
      return r3;
    });
  }
  _loadNodeShallow(t2) {
    let n2 = F, r2 = this.json, i2 = this.extensions, a2 = this;
    if (this.nodeCache[t2] !== void 0) return this[n2(430)][t2];
    let o2 = r2[n2(507)][t2], s2 = o2.name ? a2.createUniqueName(o2.name) : ``, c2 = [], l2 = a2[n2(369)](function(e2) {
      let r3 = n2;
      return e2[r3(588)] && e2[r3(588)](t2);
    });
    return l2 && c2.push(l2), o2.camera !== void 0 && c2[n2(558)](a2.getDependency(`camera`, o2.camera).then(function(e2) {
      return a2[n2(426)](a2.cameraCache, o2.camera, e2);
    })), a2[n2(508)](function(e2) {
      return e2.createNodeAttachment && e2.createNodeAttachment(t2);
    }).forEach(function(e2) {
      c2.push(e2);
    }), this.nodeCache[t2] = Promise.all(c2).then(function(r3) {
      let c3 = n2, l3;
      if (l3 = o2.isBone === true ? new xe() : r3.length > 1 ? new T() : r3.length === 1 ? r3[0] : new N(), l3 !== r3[0]) for (let e2 = 0, t3 = r3.length; e2 < t3; e2++) l3.add(r3[e2]);
      if (o2.name && (l3.userData.name = o2[c3(386)], l3[c3(386)] = s2), X(l3, o2), o2.extensions && Y(i2, l3, o2), o2.matrix !== void 0) {
        let e2 = new A();
        e2[c3(548)](o2[c3(505)]), l3.applyMatrix4(e2);
      } else o2.translation !== void 0 && l3.position.fromArray(o2.translation), o2[c3(422)] !== void 0 && l3.quaternion.fromArray(o2.rotation), o2.scale !== void 0 && l3.scale[c3(548)](o2.scale);
      if (!a2.associations.has(l3)) a2.associations.set(l3, {});
      else if (o2.mesh !== void 0 && a2.meshCache.refs[o2.mesh] > 1) {
        let t3 = a2.associations.get(l3);
        a2.associations.set(l3, e({}, t3));
      }
      return a2.associations.get(l3)[c3(507)] = t2, l3;
    }), this.nodeCache[t2];
  }
  loadScene(e2) {
    let t2 = F, n2 = this[t2(581)], r2 = this.json.scenes[e2], i2 = this, a2 = new T();
    r2.name && (a2.name = i2.createUniqueName(r2.name)), X(a2, r2), r2.extensions && Y(n2, a2, r2);
    let o2 = r2.nodes || [], s2 = [];
    for (let e3 = 0, n3 = o2[t2(394)]; e3 < n3; e3++) s2.push(i2.getDependency(`node`, o2[e3]));
    return Promise.all(s2).then(function(e3) {
      for (let t3 = 0, n3 = e3.length; t3 < n3; t3++) {
        let n4 = e3[t3];
        n4.parent === null ? a2.add(n4) : a2.add(Oe(n4));
      }
      return i2.associations = ((e4) => {
        let t3 = P, n3 = /* @__PURE__ */ new Map();
        for (let [e5, r3] of i2[t3(447)]) (e5 instanceof O || e5 instanceof g) && n3.set(e5, r3);
        return e4[t3(523)]((e5) => {
          let t4 = i2.associations.get(e5);
          t4 != null && n3.set(e5, t4);
        }), n3;
      })(a2), a2;
    });
  }
  [F(405)](e2, t2, n2, i2, a2) {
    let o2 = F, s2 = [], c2 = e2.name ? e2[o2(386)] : e2.uuid, l2 = [];
    function u2(e3) {
      let t3 = o2;
      e3[t3(401)] && l2.push(e3.name ? e3[t3(386)] : e3[t3(436)]);
    }
    q[a2[o2(580)]] === q.weights ? (u2(e2), e2.isGroup && e2.children.forEach(u2)) : l2.push(c2);
    let d2;
    switch (q[a2.path]) {
      case q.weights:
        d2 = r;
        break;
      case q.rotation:
        d2 = ne;
        break;
      case q.translation:
      case q.scale:
        d2 = D;
        break;
      default:
        switch (n2.itemSize) {
          case 1:
            d2 = r;
            break;
          default:
            d2 = D;
            break;
        }
        break;
    }
    let f2 = i2.interpolation === void 0 ? j : at[i2.interpolation], p2 = this[o2(540)](n2);
    for (let e3 = 0, n3 = l2.length; e3 < n3; e3++) {
      let n4 = new d2(l2[e3] + `.` + q[a2.path], t2.array, p2, f2);
      i2.interpolation === `CUBICSPLINE` && this._createCubicSplineTrackInterpolant(n4), s2[o2(558)](n4);
    }
    return s2;
  }
  _getArrayFromAccessor(e2) {
    let t2 = e2.array;
    if (e2.normalized) {
      let e3 = Q(t2.constructor), n2 = new Float32Array(t2.length);
      for (let r2 = 0, i2 = t2.length; r2 < i2; r2++) n2[r2] = t2[r2] * e3;
      t2 = n2;
    }
    return t2;
  }
  _createCubicSplineTrackInterpolant(e2) {
    let t2 = F;
    e2.createInterpolant = function(e3) {
      let t3 = P;
      return new (this instanceof ne ? nt : et)(this[t3(499)], this.values, this[t3(467)]() / 3, e3);
    }, e2[t2(427)].isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
};
function pt(e2, t2, n2) {
  let r2 = F, i2 = t2.attributes, a2 = new me();
  if (i2.POSITION !== void 0) {
    let e3 = n2.json.accessors[i2.POSITION], t3 = e3.min, o3 = e3.max;
    if (t3 !== void 0 && o3 !== void 0) {
      if (a2.set(new x(t3[0], t3[1], t3[2]), new x(o3[0], o3[1], o3[2])), e3.normalized) {
        let t4 = Q(W[e3[r2(397)]]);
        a2.min.multiplyScalar(t4), a2.max.multiplyScalar(t4);
      }
    } else {
      console.warn(r2(463));
      return;
    }
  } else return;
  let o2 = t2.targets;
  if (o2 !== void 0) {
    let e3 = new x(), t3 = new x();
    for (let i3 = 0, a3 = o2[r2(394)]; i3 < a3; i3++) {
      let a4 = o2[i3];
      if (a4.POSITION !== void 0) {
        let i4 = n2.json.accessors[a4[r2(475)]], o3 = i4.min, s3 = i4[r2(498)];
        if (o3 !== void 0 && s3 !== void 0) {
          if (t3.setX(Math.max(Math.abs(o3[0]), Math[r2(421)](s3[0]))), t3.setY(Math.max(Math.abs(o3[1]), Math[r2(421)](s3[1]))), t3.setZ(Math.max(Math.abs(o3[2]), Math.abs(s3[2]))), i4.normalized) {
            let e4 = Q(W[i4[r2(397)]]);
            t3.multiplyScalar(e4);
          }
          e3[r2(498)](t3);
        } else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);
      }
    }
    a2.expandByVector(e3);
  }
  e2.boundingBox = a2;
  let s2 = new se();
  a2.getCenter(s2[r2(527)]), s2.radius = a2.min.distanceTo(a2.max) / 2, e2.boundingSphere = s2;
}
function $(e2, t2, n2) {
  let r2 = F, i2 = t2.attributes, a2 = [];
  function o2(t3, r3) {
    return n2.getDependency(`accessor`, t3).then(function(t4) {
      e2.setAttribute(r3, t4);
    });
  }
  for (let t3 in i2) {
    let n3 = K[t3] || t3.toLowerCase();
    n3 in e2.attributes || a2.push(o2(i2[t3], n3));
  }
  if (t2.indices !== void 0 && !e2.index) {
    let r3 = n2.getDependency(`accessor`, t2.indices).then(function(t3) {
      e2.setIndex(t3);
    });
    a2.push(r3);
  }
  return C.workingColorSpace !== `srgb-linear` && `COLOR_0` in i2 && console[r2(495)](`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "` + C.workingColorSpace + `" not supported.`), X(e2, t2), pt(e2, t2, n2), Promise.all(a2).then(function() {
    return t2.targets === void 0 ? e2 : st(e2, t2.targets, n2);
  });
}
export {
  ke as GLTFLoader
};
