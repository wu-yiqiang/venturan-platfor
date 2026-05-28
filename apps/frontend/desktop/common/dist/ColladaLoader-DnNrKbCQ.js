import { $ as e, C as t, Ct as n, E as r, F as i, Ft as a, G as o, H as s, I as c, K as l, L as u, N as d, Nt as f, O as p, Ot as m, Q as h, R as g, S as _, Tt as v, U as y, V as b, Y as x, Z as S, a as C, b as w, bt as T, d as E, g as D, gt as O, k, kt as A, l as j, lt as M, p as N, pt as P, st as F, t as I, tt as L, ut as R, v as z, yt as B, zt as V } from "./three.module-fqN0WVmI.js";
var H = q;
(function(e2, t2) {
  let n2 = q, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(400)) / 1 + -parseInt(n2(391)) / 2 * (-parseInt(n2(297)) / 3) + parseInt(n2(268)) / 4 * (parseInt(n2(296)) / 5) + -parseInt(n2(271)) / 6 + parseInt(n2(364)) / 7 * (-parseInt(n2(368)) / 8) + -parseInt(n2(264)) / 9 + parseInt(n2(415)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(J, 339953);
var U = class extends e {
  constructor(e2) {
    super(e2);
  }
  parse(e2) {
    let t2 = q;
    function n2(e3) {
      let t3 = q;
      switch (e3.image_type) {
        case p2:
        case g2:
          if (e3.colormap_length > 256 || e3.colormap_size !== 24 || e3.colormap_type !== 1) throw Error(`THREE.TGALoader: Invalid type colormap data for indexed type.`);
          break;
        case m2:
        case h2:
        case _2:
        case v2:
          if (e3.colormap_type) throw Error(`THREE.TGALoader: Invalid type colormap data for colormap type.`);
          break;
        case f2:
          throw Error(t3(352));
        default:
          throw Error(`THREE.TGALoader: Invalid type ` + e3.image_type);
      }
      if (e3.width <= 0 || e3[t3(397)] <= 0) throw Error(t3(423));
      if (e3.pixel_size !== 8 && e3.pixel_size !== 16 && e3.pixel_size !== 24 && e3.pixel_size !== 32) throw Error(t3(311) + e3.pixel_size);
    }
    function r2(e3, t3, n3, r3, i3) {
      let a2 = q, o3, s3, c3 = n3[a2(330)] >> 3, l3 = n3.width * n3.height * c3;
      if (t3 && (s3 = i3.subarray(r3, r3 += n3[a2(386)] * (n3.colormap_size >> 3))), e3) {
        o3 = new Uint8Array(l3);
        let e4, t4, n4, s4 = 0, u3 = new Uint8Array(c3);
        for (; s4 < l3; ) if (e4 = i3[r3++], t4 = (e4 & 127) + 1, e4 & 128) {
          for (n4 = 0; n4 < c3; ++n4) u3[n4] = i3[r3++];
          for (n4 = 0; n4 < t4; ++n4) o3[a2(439)](u3, s4 + n4 * c3);
          s4 += c3 * t4;
        } else {
          for (t4 *= c3, n4 = 0; n4 < t4; ++n4) o3[s4 + n4] = i3[r3++];
          s4 += t4;
        }
      } else o3 = i3.subarray(r3, r3 += t3 ? n3.width * n3.height : l3);
      return { pixel_data: o3, palettes: s3 };
    }
    function i2(e3, t3, n3, r3, i3, a2, o3, s3, c3) {
      let l3 = c3, u3, d3 = 0, f3, p3, m3 = D2.width;
      for (p3 = t3; p3 !== r3; p3 += n3) for (f3 = i3; f3 !== o3; f3 += a2, d3++) u3 = s3[d3], e3[(f3 + m3 * p3) * 4 + 3] = 255, e3[(f3 + m3 * p3) * 4 + 2] = l3[u3 * 3 + 0], e3[(f3 + m3 * p3) * 4 + 1] = l3[u3 * 3 + 1], e3[(f3 + m3 * p3) * 4 + 0] = l3[u3 * 3 + 2];
      return e3;
    }
    function o2(e3, t3, n3, r3, i3, a2, o3, s3) {
      let c3, l3 = 0, u3, d3, f3 = D2.width;
      for (d3 = t3; d3 !== r3; d3 += n3) for (u3 = i3; u3 !== o3; u3 += a2, l3 += 2) c3 = s3[l3 + 0] + (s3[l3 + 1] << 8), e3[(u3 + f3 * d3) * 4 + 0] = (c3 & 31744) >> 7, e3[(u3 + f3 * d3) * 4 + 1] = (c3 & 992) >> 2, e3[(u3 + f3 * d3) * 4 + 2] = (c3 & 31) << 3, e3[(u3 + f3 * d3) * 4 + 3] = c3 & 32768 ? 0 : 255;
      return e3;
    }
    function s2(e3, t3, n3, r3, i3, a2, o3, s3) {
      let c3 = 0, l3, u3, d3 = D2.width;
      for (u3 = t3; u3 !== r3; u3 += n3) for (l3 = i3; l3 !== o3; l3 += a2, c3 += 3) e3[(l3 + d3 * u3) * 4 + 3] = 255, e3[(l3 + d3 * u3) * 4 + 2] = s3[c3 + 0], e3[(l3 + d3 * u3) * 4 + 1] = s3[c3 + 1], e3[(l3 + d3 * u3) * 4 + 0] = s3[c3 + 2];
      return e3;
    }
    function c2(e3, t3, n3, r3, i3, a2, o3, s3) {
      let c3 = 0, l3, u3, d3 = D2.width;
      for (u3 = t3; u3 !== r3; u3 += n3) for (l3 = i3; l3 !== o3; l3 += a2, c3 += 4) e3[(l3 + d3 * u3) * 4 + 2] = s3[c3 + 0], e3[(l3 + d3 * u3) * 4 + 1] = s3[c3 + 1], e3[(l3 + d3 * u3) * 4 + 0] = s3[c3 + 2], e3[(l3 + d3 * u3) * 4 + 3] = s3[c3 + 3];
      return e3;
    }
    function l2(e3, t3, n3, r3, i3, a2, o3, s3) {
      let c3, l3 = 0, u3, d3, f3 = D2.width;
      for (d3 = t3; d3 !== r3; d3 += n3) for (u3 = i3; u3 !== o3; u3 += a2, l3++) c3 = s3[l3], e3[(u3 + f3 * d3) * 4 + 0] = c3, e3[(u3 + f3 * d3) * 4 + 1] = c3, e3[(u3 + f3 * d3) * 4 + 2] = c3, e3[(u3 + f3 * d3) * 4 + 3] = 255;
      return e3;
    }
    function u2(e3, t3, n3, r3, i3, a2, o3, s3) {
      let c3 = q, l3 = 0, u3, d3, f3 = D2[c3(448)];
      for (d3 = t3; d3 !== r3; d3 += n3) for (u3 = i3; u3 !== o3; u3 += a2, l3 += 2) e3[(u3 + f3 * d3) * 4 + 0] = s3[l3 + 0], e3[(u3 + f3 * d3) * 4 + 1] = s3[l3 + 0], e3[(u3 + f3 * d3) * 4 + 2] = s3[l3 + 0], e3[(u3 + f3 * d3) * 4 + 3] = s3[l3 + 1];
      return e3;
    }
    function d2(e3, t3, n3, r3, a2) {
      let d3 = q, f3, p3, m3, h3, g3, _3;
      switch ((D2.flags & y2) >> b2) {
        default:
        case C2:
          f3 = 0, m3 = 1, g3 = t3, p3 = 0, h3 = 1, _3 = n3;
          break;
        case x2:
          f3 = 0, m3 = 1, g3 = t3, p3 = n3 - 1, h3 = -1, _3 = -1;
          break;
        case w2:
          f3 = t3 - 1, m3 = -1, g3 = -1, p3 = 0, h3 = 1, _3 = n3;
          break;
        case S2:
          f3 = t3 - 1, m3 = -1, g3 = -1, p3 = n3 - 1, h3 = -1, _3 = -1;
          break;
      }
      if (A2) switch (D2.pixel_size) {
        case 8:
          l2(e3, p3, h3, _3, f3, m3, g3, r3);
          break;
        case 16:
          u2(e3, p3, h3, _3, f3, m3, g3, r3);
          break;
        default:
          throw Error(`THREE.TGALoader: Format not supported.`);
      }
      else switch (D2.pixel_size) {
        case 8:
          i2(e3, p3, h3, _3, f3, m3, g3, r3, a2);
          break;
        case 16:
          o2(e3, p3, h3, _3, f3, m3, g3, r3);
          break;
        case 24:
          s2(e3, p3, h3, _3, f3, m3, g3, r3);
          break;
        case 32:
          c2(e3, p3, h3, _3, f3, m3, g3, r3);
          break;
        default:
          throw Error(d3(446));
      }
      return e3;
    }
    let f2 = 0, p2 = 1, m2 = 2, h2 = 3, g2 = 9, _2 = 10, v2 = 11, y2 = 48, b2 = 4, x2 = 0, S2 = 1, C2 = 2, w2 = 3;
    if (e2[t2(361)] < 19) throw Error(`THREE.TGALoader: Not enough data to contain header.`);
    let T2 = 0, E2 = new Uint8Array(e2), D2 = { id_length: E2[T2++], colormap_type: E2[T2++], image_type: E2[T2++], colormap_index: E2[T2++] | E2[T2++] << 8, colormap_length: E2[T2++] | E2[T2++] << 8, colormap_size: E2[T2++], origin: [E2[T2++] | E2[T2++] << 8, E2[T2++] | E2[T2++] << 8], width: E2[T2++] | E2[T2++] << 8, height: E2[T2++] | E2[T2++] << 8, pixel_size: E2[T2++], flags: E2[T2++] };
    if (n2(D2), D2.id_length + T2 > e2.length) throw Error(`THREE.TGALoader: No data.`);
    T2 += D2.id_length;
    let O2 = false, k2 = false, A2 = false;
    switch (D2.image_type) {
      case 9:
        O2 = true, k2 = true;
        break;
      case 1:
        k2 = true;
        break;
      case 10:
        O2 = true;
        break;
      case 2:
        break;
      case 11:
        O2 = true, A2 = true;
        break;
      case 3:
        A2 = true;
        break;
    }
    let j2 = new Uint8Array(D2.width * D2.height * 4), M2 = r2(O2, k2, D2, T2, E2);
    return d2(j2, D2[t2(448)], D2.height, M2.pixel_data, M2.palettes), { data: j2, width: D2.width, height: D2[t2(397)], flipY: true, generateMipmaps: true, minFilter: a };
  }
};
function W(e2, t2) {
  let n2 = [], r2 = e2.childNodes;
  for (let e3 = 0, i2 = r2.length; e3 < i2; e3++) {
    let i3 = r2[e3];
    i3.nodeName === t2 && n2.push(i3);
  }
  return n2;
}
function G(e2) {
  return e2[q(361)] === 0 ? [] : e2.trim().split(/\s+/);
}
function K(e2) {
  let t2 = q;
  return e2.length === 0 ? [] : e2.trim().split(/\s+/)[t2(251)](parseFloat);
}
function q(e2, t2) {
  return e2 -= 244, J()[e2];
}
function J() {
  let e2 = `getPrev,primitives,buildAnimationClip,max,THREE.TGALoader: Invalid pixel size ,rotationAxis,parseAssetUpAxis,buildGeometryData,inTangent,THREE.ColladaLoader: Please access animations over scene.animations now.,path,type,times,joints,cameras,.quaternion,reverse,buildLight,memberSyntax,position,parseCamera,point,perspective,pixel_size,opaque,getTimesForAllAxes,revolute,kinematics_model,linestrips,tga,prepareNodes,buildLibrary,load,parseAssetUnit,WEIGHT,kinematicsScenes,limits,count,offsetV,textureLoader,parseEffectParameterTextureExtraTechnique,warn,repeatU,add,shift,THREE.TGALoader: No data.,isMeshPhongMaterial,parseVertexWeights,concat,parseKinematicsJoint,getInterpolationInfo,processed,setAttribute,buildNode,length,opacity,falloff_angle,70KEeCfJ, doesn't exist.,wrapS,buildHierarchyScaleTrack,437064flmJsf,diffuse,parseKinematicsScene,buildAnimation,semantic, outside of limits (min: ,parseKinematicsTransform,instance_material,from,transformData,substring,push,init_from,STEP,distance,lightMap,textContent,library,colormap_length,zfar,library_joints,application/xml,hasNode,11810YASSIH,geometries,sources,copy,member,parseGeometryPrimitive,height,yfov,setWithCredentials,604668efagsg,getCamera,interpolation,clone,uuid,buildMatrixTracks,parseJoints,scene,getAnimationClip,parseLibrary,controllers,angle,setupAnimations,stride,parseGeometryVertices,11572890jkOQAM,default,offset,url,indices,rotatePivotInverse,input,animations,THREE.TGALoader: Invalid image size.,requestHeader,scale,specularMap,bone,name,crossOrigin,normal,fromArray,znear,prepareAnimationData,parseEffectParameterTexture,time,join,nodeName,double_sided,set,abs,technique,getAttribute,getBuild,normalMap,matrix,THREE.TGALoader: Format not supported.,setRGB,width,sid,phong,buildTranslateTrack,array,inputs,parseSkin,keys,transformOrder,build,transforms,THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530).,light,childNodes,traverse,value,parserErrorToText,toUpperCase,applyInterpolation,withCredentials,target,parseAnimationClip,bind,axis,nodeType, value ,joint,map,emissive,color,parseEffectNewparam,values,material,parseSource,buildBoneHierarchy,wrapU,parseEffectParameter,INPUT,optics,vcount,2809656TIELDf,getValueAtTime,transparent,quaternion,12VsYWkO,parseScene,skinWeights,286050idrGnv,degToRad,THREE.ColladaLoader: Couldn't find camera with ID:,parseController,wrapV,LINEAR,extra,IN_TANGENT,getElementsByTagName,parseEffectExtraTechniqueBump,parameters,hasAttribute,THREE.ColladaLoader: File version,source,mesh,colorSpaceToWorking,parseEffectParameters,buildImage,bump,rotation,texture,uvsNeedsFix,obj,rigidBodies,library_geometries,191385BhTnbG,294KBjKQC,[id=",visualScenes,triangles,rotate,buildSkeleton,isEmpty,instanceGeometries,hasVisualScene,outTangent`.split(`,`);
  return J = function() {
    return e2;
  }, J();
}
function Y(e2) {
  return e2[q(361)] === 0 ? [] : e2.trim().split(/\s+/).map((e3) => parseInt(e3));
}
function X(e2) {
  return e2[q(378)](1);
}
var Z = class {
  constructor() {
    let e2 = q;
    this[e2(344)] = 0;
  }
  generateId() {
    return `three_default_` + this.count++;
  }
  parse(e2) {
    let t2 = q;
    if (e2.length === 0) return null;
    let n2 = new DOMParser().parseFromString(e2, t2(389)), r2 = W(n2, `COLLADA`)[0], i2 = n2.getElementsByTagName(`parsererror`)[0];
    if (i2 !== void 0) {
      let e3 = W(i2, `div`)[0], t3;
      return t3 = e3 ? e3.textContent : this.parserErrorToText(i2), console.error(`THREE.ColladaLoader: Failed to parse collada file.
`, t3), null;
    }
    let a2 = r2.getAttribute(`version`);
    console.debug(t2(283), a2);
    let o2 = this.parseAsset(W(r2, `asset`)[0]), s2 = { animations: {}, clips: {}, controllers: {}, images: {}, effects: {}, materials: {}, cameras: {}, lights: {}, geometries: {}, nodes: {}, visualScenes: {}, kinematicsModels: {}, physicsModels: {}, kinematicsScenes: {}, joints: {} };
    return this.library = s2, this.collada = r2, this[t2(409)](r2, `library_animations`, `animation`, this.parseAnimation.bind(this)), this.parseLibrary(r2, `library_animation_clips`, `animation_clip`, this[t2(245)].bind(this)), this.parseLibrary(r2, `library_controllers`, `controller`, this[t2(274)].bind(this)), this.parseLibrary(r2, `library_images`, `image`, this.parseImage.bind(this)), this[t2(409)](r2, `library_effects`, `effect`, this.parseEffect.bind(this)), this[t2(409)](r2, `library_materials`, t2(256), this.parseMaterial.bind(this)), this[t2(409)](r2, `library_cameras`, `camera`, this.parseCamera.bind(this)), this.parseLibrary(r2, `library_lights`, t2(460), this.parseLight.bind(this)), this.parseLibrary(r2, t2(295), `geometry`, this.parseGeometry.bind(this)), this.parseLibrary(r2, `library_nodes`, `node`, this.parseNode.bind(this)), this.parseLibrary(r2, `library_visual_scenes`, `visual_scene`, this.parseVisualScene.bind(this)), this.parseLibrary(r2, t2(388), `joint`, this.parseLibraryJoint.bind(this)), this.parseLibrary(r2, `library_kinematics_models`, t2(334), this.parseKinematicsModel.bind(this)), this.parseLibrary(r2, `library_physics_models`, `physics_model`, this.parsePhysicsModel.bind(this)), this.parseLibrary(r2, `scene`, `instance_kinematics_scene`, this[t2(370)].bind(this)), { library: s2, asset: o2, collada: r2 };
  }
  [H(464)](e2) {
    let t2 = H, n2 = [], r2 = [e2];
    for (; r2.length; ) {
      let e3 = r2.shift();
      e3.nodeType === Node.TEXT_NODE ? n2.push(e3.textContent) : (n2.push(`
`), r2.push(...e3[t2(461)]));
    }
    return n2[t2(436)](``).trim();
  }
  parseAsset(e2) {
    let t2 = H;
    return { unit: this.parseAssetUnit(W(e2, `unit`)[0]), upAxis: this[t2(313)](W(e2, `up_axis`)[0]) };
  }
  [H(340)](e2) {
    return e2 !== void 0 && e2[H(282)](`meter`) === true ? parseFloat(e2.getAttribute(`meter`)) : 1;
  }
  parseAssetUpAxis(e2) {
    return e2 === void 0 ? `Y_UP` : e2[H(384)];
  }
  parseLibrary(e2, t2, n2, r2) {
    let i2 = W(e2, t2)[0];
    if (i2 !== void 0) {
      let e3 = W(i2, n2);
      for (let t3 = 0; t3 < e3.length; t3++) r2(e3[t3]);
    }
  }
  parseAnimation(e2) {
    let n2 = H, r2 = { sources: {}, samplers: {}, channels: {} }, i2 = false;
    for (let t2 = 0, a2 = e2.childNodes.length; t2 < a2; t2++) {
      let a3 = e2.childNodes[t2];
      if (a3.nodeType !== 1) continue;
      let o2;
      switch (a3.nodeName) {
        case `source`:
          o2 = a3[n2(442)](`id`), r2.sources[o2] = this.parseSource(a3);
          break;
        case `sampler`:
          o2 = a3.getAttribute(`id`), r2.samplers[o2] = this.parseAnimationSampler(a3);
          break;
        case `channel`:
          o2 = a3.getAttribute(n2(244)), r2.channels[o2] = this.parseAnimationChannel(a3);
          break;
        case `animation`:
          this.parseAnimation(a3), i2 = true;
          break;
        default:
      }
    }
    i2 === false && (this.library.animations[e2.getAttribute(`id`) || t.generateUUID()] = r2);
  }
  parseAnimationSampler(e2) {
    let t2 = H, n2 = { inputs: {} };
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case t2(421):
          let e3 = X(i3[t2(442)](`source`)), r3 = i3.getAttribute(`semantic`);
          n2.inputs[r3] = e3;
          break;
      }
    }
    return n2;
  }
  parseAnimationChannel(e2) {
    let t2 = H, n2 = {}, r2 = e2[t2(442)](`target`).split(`/`), i2 = r2.shift(), a2 = r2[t2(351)](), o2 = a2.indexOf(`(`) !== -1, s2 = a2.indexOf(`.`) !== -1;
    if (s2) r2 = a2.split(`.`), a2 = r2.shift(), n2.member = r2.shift();
    else if (o2) {
      let e3 = a2.split(`(`);
      a2 = e3.shift();
      for (let t3 = 0; t3 < e3.length; t3++) e3[t3] = parseInt(e3[t3].replace(/\)/, ``));
      n2.indices = e3;
    }
    return n2.id = i2, n2.sid = a2, n2.arraySyntax = o2, n2[t2(325)] = s2, n2.sampler = X(e2[t2(442)](`source`)), n2;
  }
  parseAnimationClip(e2) {
    let t2 = H, n2 = { name: e2.getAttribute(`id`) || `default`, start: parseFloat(e2.getAttribute(`start`) || 0), end: parseFloat(e2[t2(442)](`end`) || 0), animations: [] };
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `instance_animation`:
          n2.animations.push(X(i3[t2(442)](`url`)));
          break;
      }
    }
    this.library.clips[e2.getAttribute(`id`)] = n2;
  }
  parseController(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2[t2(461)].length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `skin`:
          n2.id = X(i3.getAttribute(t2(284))), n2.skin = this[t2(454)](i3);
          break;
        case `morph`:
          n2.id = X(i3[t2(442)](`source`)), console[t2(348)](`THREE.ColladaLoader: Morph target animation not supported yet.`);
          break;
      }
    }
    this.library.controllers[e2[t2(442)](`id`)] = n2;
  }
  parseSkin(e2) {
    let t2 = H, n2 = { sources: {} };
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `bind_shape_matrix`:
          n2.bindShapeMatrix = K(i3.textContent);
          break;
        case `source`:
          let e3 = i3.getAttribute(`id`);
          n2[t2(393)][e3] = this[t2(257)](i3);
          break;
        case `joints`:
          n2.joints = this[t2(406)](i3);
          break;
        case `vertex_weights`:
          n2.vertexWeights = this[t2(354)](i3);
          break;
      }
    }
    return n2;
  }
  parseJoints(e2) {
    let t2 = H, n2 = { inputs: {} };
    for (let r2 = 0, i2 = e2.childNodes[t2(361)]; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3[t2(248)] === 1) switch (i3.nodeName) {
        case `input`:
          let e3 = i3.getAttribute(`semantic`), r3 = X(i3.getAttribute(`source`));
          n2[t2(453)][e3] = r3;
          break;
      }
    }
    return n2;
  }
  parseVertexWeights(e2) {
    let t2 = H, n2 = { inputs: {} };
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case t2(421):
          let e3 = i3.getAttribute(`semantic`), r3 = X(i3[t2(442)](`source`)), a2 = parseInt(i3.getAttribute(t2(417)));
          n2.inputs[e3] = { id: r3, offset: a2 };
          break;
        case `vcount`:
          n2.vcount = Y(i3[t2(384)]);
          break;
        case `v`:
          n2.v = Y(i3.textContent);
          break;
      }
    }
    return n2;
  }
  parseImage(e2) {
    let t2 = H, n2 = { init_from: W(e2, `init_from`)[0].textContent };
    this.library.images[e2[t2(442)](`id`)] = n2;
  }
  parseEffect(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2[t2(461)][t2(361)]; r2 < i2; r2++) {
      let t3 = e2.childNodes[r2];
      if (t3.nodeType === 1) switch (t3.nodeName) {
        case `profile_COMMON`:
          n2.profile = this.parseEffectProfileCOMMON(t3);
          break;
      }
    }
    this.library.effects[e2.getAttribute(`id`)] = n2;
  }
  parseEffectProfileCOMMON(e2) {
    let t2 = H, n2 = { surfaces: {}, samplers: {} };
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `newparam`:
          this[t2(254)](i3, n2);
          break;
        case t2(441):
          n2.technique = this.parseEffectTechnique(i3);
          break;
        case `extra`:
          n2.extra = this.parseEffectExtra(i3);
          break;
      }
    }
    return n2;
  }
  [H(254)](e2, t2) {
    let n2 = H, r2 = e2[n2(442)](`sid`);
    for (let i2 = 0, a2 = e2.childNodes.length; i2 < a2; i2++) {
      let a3 = e2[n2(461)][i2];
      if (a3.nodeType === 1) switch (a3.nodeName) {
        case `surface`:
          t2.surfaces[r2] = this.parseEffectSurface(a3);
          break;
        case `sampler2D`:
          t2.samplers[r2] = this.parseEffectSampler(a3);
          break;
      }
    }
  }
  parseEffectSurface(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2[t2(461)][t2(361)]; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `init_from`:
          n2[t2(380)] = i3.textContent;
          break;
      }
    }
    return n2;
  }
  parseEffectSampler(e2) {
    let t2 = {};
    for (let n2 = 0, r2 = e2.childNodes.length; n2 < r2; n2++) {
      let r3 = e2.childNodes[n2];
      if (r3.nodeType === 1) switch (r3.nodeName) {
        case `source`:
          t2.source = r3.textContent;
          break;
      }
    }
    return t2;
  }
  parseEffectTechnique(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `constant`:
        case `lambert`:
        case `blinn`:
        case `phong`:
          n2.type = i3[t2(437)], n2[t2(281)] = this[t2(287)](i3);
          break;
        case `extra`:
          n2[t2(277)] = this.parseEffectExtra(i3);
          break;
      }
    }
    return n2;
  }
  parseEffectParameters(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2[t2(461)].length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `emission`:
        case t2(369):
        case `specular`:
        case `bump`:
        case `ambient`:
        case `shininess`:
        case `transparency`:
          n2[i3[t2(437)]] = this[t2(260)](i3);
          break;
        case `transparent`:
          n2[i3[t2(437)]] = { opaque: i3.hasAttribute(t2(331)) ? i3.getAttribute(`opaque`) : `A_ONE`, data: this[t2(260)](i3) };
          break;
      }
    }
    return n2;
  }
  parseEffectParameter(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `color`:
          n2[i3.nodeName] = K(i3.textContent);
          break;
        case `float`:
          n2[i3.nodeName] = parseFloat(i3.textContent);
          break;
        case `texture`:
          n2[i3.nodeName] = { id: i3.getAttribute(t2(291)), extra: this.parseEffectParameterTexture(i3) };
          break;
      }
    }
    return n2;
  }
  [H(434)](e2) {
    let t2 = H, n2 = { technique: {} };
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case t2(277):
          this.parseEffectParameterTextureExtra(i3, n2);
          break;
      }
    }
    return n2;
  }
  parseEffectParameterTextureExtra(e2, t2) {
    let n2 = H;
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `technique`:
          this[n2(347)](i3, t2);
          break;
      }
    }
  }
  parseEffectParameterTextureExtraTechnique(e2, t2) {
    let n2 = H;
    for (let r2 = 0, i2 = e2.childNodes[n2(361)]; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `repeatU`:
        case `repeatV`:
        case `offsetU`:
        case n2(345):
          t2.technique[i3.nodeName] = parseFloat(i3.textContent);
          break;
        case n2(259):
        case `wrapV`:
          i3.textContent.toUpperCase() === `TRUE` ? t2[n2(441)][i3[n2(437)]] = 1 : i3.textContent[n2(465)]() === `FALSE` ? t2.technique[i3.nodeName] = 0 : t2[n2(441)][i3[n2(437)]] = parseInt(i3.textContent);
          break;
        case `bump`:
          t2[i3.nodeName] = this[n2(280)](i3);
          break;
      }
    }
  }
  parseEffectExtra(e2) {
    let t2 = {};
    for (let n2 = 0, r2 = e2.childNodes.length; n2 < r2; n2++) {
      let r3 = e2.childNodes[n2];
      if (r3.nodeType === 1) switch (r3.nodeName) {
        case `technique`:
          t2.technique = this.parseEffectExtraTechnique(r3);
          break;
      }
    }
    return t2;
  }
  parseEffectExtraTechnique(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2[t2(461)][r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `double_sided`:
          n2[i3.nodeName] = parseInt(i3[t2(384)]);
          break;
        case t2(289):
          n2[i3.nodeName] = this.parseEffectExtraTechniqueBump(i3);
          break;
      }
    }
    return n2;
  }
  parseEffectExtraTechniqueBump(e2) {
    let t2 = {};
    for (let n2 = 0, r2 = e2.childNodes.length; n2 < r2; n2++) {
      let r3 = e2.childNodes[n2];
      if (r3.nodeType === 1) switch (r3.nodeName) {
        case `texture`:
          t2[r3.nodeName] = { id: r3.getAttribute(`texture`), texcoord: r3.getAttribute(`texcoord`), extra: this.parseEffectParameterTexture(r3) };
          break;
      }
    }
    return t2;
  }
  parseMaterial(e2) {
    let t2 = H, n2 = { name: e2.getAttribute(`name`) };
    for (let r2 = 0, i2 = e2[t2(461)][t2(361)]; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3[t2(248)] === 1) switch (i3[t2(437)]) {
        case `instance_effect`:
          n2.url = X(i3.getAttribute(t2(418)));
          break;
      }
    }
    this.library.materials[e2.getAttribute(`id`)] = n2;
  }
  [H(327)](e2) {
    let t2 = H, n2 = { name: e2.getAttribute(`name`) };
    for (let t3 = 0, r2 = e2.childNodes.length; t3 < r2; t3++) {
      let r3 = e2.childNodes[t3];
      if (r3.nodeType === 1) switch (r3.nodeName) {
        case `optics`:
          n2.optics = this.parseCameraOptics(r3);
          break;
      }
    }
    this[t2(385)][t2(321)][e2.getAttribute(`id`)] = n2;
  }
  parseCameraOptics(e2) {
    let t2 = H;
    for (let n2 = 0; n2 < e2.childNodes.length; n2++) {
      let r2 = e2.childNodes[n2];
      switch (r2[t2(437)]) {
        case `technique_common`:
          return this.parseCameraTechnique(r2);
      }
    }
    return {};
  }
  parseCameraTechnique(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0; r2 < e2[t2(461)].length; r2++) {
      let i2 = e2.childNodes[r2];
      switch (i2[t2(437)]) {
        case `perspective`:
        case `orthographic`:
          n2.technique = i2[t2(437)], n2.parameters = this.parseCameraParameters(i2);
          break;
      }
    }
    return n2;
  }
  parseCameraParameters(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2.childNodes[r2];
      switch (i2.nodeName) {
        case `xfov`:
        case `yfov`:
        case `xmag`:
        case `ymag`:
        case `znear`:
        case t2(387):
        case `aspect_ratio`:
          n2[i2[t2(437)]] = parseFloat(i2.textContent);
          break;
      }
    }
    return n2;
  }
  parseLight(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3[t2(248)] === 1) switch (i3.nodeName) {
        case `technique_common`:
          n2 = this.parseLightTechnique(i3);
          break;
      }
    }
    this.library.lights[e2.getAttribute(`id`)] = n2;
  }
  parseLightTechnique(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2.childNodes.length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3.nodeName) {
        case `directional`:
        case t2(328):
        case `spot`:
        case `ambient`:
          n2[t2(441)] = i3.nodeName, n2.parameters = this.parseLightParameters(i3);
          break;
      }
    }
    return n2;
  }
  parseLightParameters(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0, i2 = e2[t2(461)].length; r2 < i2; r2++) {
      let i3 = e2.childNodes[r2];
      if (i3.nodeType === 1) switch (i3[t2(437)]) {
        case `color`:
          let e3 = K(i3[t2(384)]);
          n2.color = new l().fromArray(e3), w.colorSpaceToWorking(n2.color, m);
          break;
        case t2(363):
          n2.falloffAngle = parseFloat(i3.textContent);
          break;
        case `quadratic_attenuation`:
          let r3 = parseFloat(i3.textContent);
          n2[t2(382)] = r3 ? Math.sqrt(1 / r3) : 0;
          break;
      }
    }
    return n2;
  }
  parseGeometry(e2) {
    let t2 = H, n2 = { name: e2.getAttribute(`name`), sources: {}, vertices: {}, primitives: [] }, r2 = W(e2, t2(285))[0];
    if (r2 !== void 0) {
      for (let e3 = 0; e3 < r2.childNodes.length; e3++) {
        let i2 = r2.childNodes[e3];
        if (i2[t2(248)] !== 1) continue;
        let a2 = i2[t2(442)](`id`);
        switch (i2[t2(437)]) {
          case t2(284):
            n2.sources[a2] = this.parseSource(i2);
            break;
          case `vertices`:
            n2.vertices = this.parseGeometryVertices(i2);
            break;
          case `polygons`:
          case `lines`:
          case `linestrips`:
          case `polylist`:
          case `triangles`:
            n2[t2(308)][t2(379)](this.parseGeometryPrimitive(i2));
            break;
          default:
        }
      }
      this.library[t2(392)][e2.getAttribute(`id`)] = n2;
    }
  }
  parseSource(e2) {
    let t2 = H, n2 = { array: [], stride: 3 };
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2.childNodes[r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `float_array`:
          n2.array = K(i2.textContent);
          break;
        case `Name_array`:
          n2[t2(452)] = G(i2.textContent);
          break;
        case `technique_common`:
          let e3 = W(i2, `accessor`)[0];
          e3 !== void 0 && (n2.stride = parseInt(e3.getAttribute(`stride`)));
          break;
      }
    }
    return n2;
  }
  [H(414)](e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2.childNodes[r2];
      i2[t2(248)] === 1 && (n2[i2.getAttribute(t2(372))] = X(i2.getAttribute(`source`)));
    }
    return n2;
  }
  [H(396)](e2) {
    let t2 = H, n2 = { type: e2.nodeName, material: e2.getAttribute(`material`), count: parseInt(e2.getAttribute(`count`)), inputs: {}, stride: 0, hasUV: false };
    for (let r2 = 0, i2 = e2.childNodes[t2(361)]; r2 < i2; r2++) {
      let i3 = e2[t2(461)][r2];
      if (i3.nodeType === 1) switch (i3[t2(437)]) {
        case `input`:
          let e3 = X(i3.getAttribute(t2(284))), r3 = i3.getAttribute(`semantic`), a2 = parseInt(i3.getAttribute(`offset`)), o2 = parseInt(i3[t2(442)](`set`)), s2 = o2 > 0 ? r3 + o2 : r3;
          n2.inputs[s2] = { id: e3, offset: a2 }, n2.stride = Math[t2(310)](n2.stride, a2 + 1), r3 === `TEXCOORD` && (n2.hasUV = true);
          break;
        case `vcount`:
          n2.vcount = Y(i3.textContent);
          break;
        case `p`:
          n2.p = Y(i3[t2(384)]);
          break;
      }
    }
    return n2.type === `polygons` && (n2[t2(263)] = [n2.p.length / n2.stride]), n2;
  }
  parseLibraryJoint(e2) {
    let t2 = H;
    this.library.joints[e2.getAttribute(`id`)] = this[t2(356)](e2);
  }
  parseKinematicsModel(e2) {
    let t2 = { name: e2.getAttribute(`name`) || ``, joints: {}, links: [] };
    for (let n2 = 0; n2 < e2.childNodes.length; n2++) {
      let r2 = e2.childNodes[n2];
      if (r2.nodeType === 1) switch (r2.nodeName) {
        case `technique_common`:
          this.parseKinematicsTechniqueCommon(r2, t2);
          break;
      }
    }
    this.library.kinematicsModels[e2.getAttribute(`id`)] = t2;
  }
  parseKinematicsTechniqueCommon(e2, t2) {
    let n2 = H;
    for (let r2 = 0; r2 < e2.childNodes[n2(361)]; r2++) {
      let i2 = e2.childNodes[r2];
      if (i2.nodeType === 1) switch (i2[n2(437)]) {
        case `joint`:
          t2.joints[i2.getAttribute(`sid`)] = this.parseKinematicsJoint(i2);
          break;
        case `instance_joint`:
          t2.joints[i2.getAttribute(`sid`)] = this.library[n2(320)][X(i2[n2(442)](`url`))];
          break;
        case `link`:
          t2.links.push(this.parseKinematicsLink(i2));
          break;
      }
    }
  }
  [H(356)](e2) {
    let t2 = H, n2;
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2[t2(461)][r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `prismatic`:
        case `revolute`:
          n2 = this.parseKinematicsJointParameter(i2);
          break;
      }
    }
    return n2;
  }
  parseKinematicsJointParameter(e2) {
    let t2 = H, n2 = { sid: e2.getAttribute(t2(449)), name: e2.getAttribute(t2(428)) || ``, axis: new b(), limits: { min: 0, max: 0 }, type: e2.nodeName, static: false, zeroPosition: 0, middlePosition: 0 };
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2.childNodes[r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `axis`:
          let e3 = K(i2.textContent);
          n2.axis.fromArray(e3);
          break;
        case `limits`:
          let r3 = i2.getElementsByTagName(`max`)[0], a2 = i2.getElementsByTagName(`min`)[0];
          n2.limits.max = parseFloat(r3[t2(384)]), n2[t2(343)].min = parseFloat(a2[t2(384)]);
          break;
      }
    }
    return n2.limits.min >= n2[t2(343)].max && (n2.static = true), n2.middlePosition = (n2.limits.min + n2.limits[t2(310)]) / 2, n2;
  }
  parseKinematicsLink(e2) {
    let t2 = H, n2 = { sid: e2.getAttribute(`sid`), name: e2.getAttribute(`name`) || ``, attachments: [], transforms: [] };
    for (let r2 = 0; r2 < e2[t2(461)].length; r2++) {
      let i2 = e2[t2(461)][r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `attachment_full`:
          n2.attachments[t2(379)](this.parseKinematicsAttachment(i2));
          break;
        case `matrix`:
        case `translate`:
        case `rotate`:
          n2.transforms.push(this.parseKinematicsTransform(i2));
          break;
      }
    }
    return n2;
  }
  parseKinematicsAttachment(e2) {
    let t2 = H, n2 = { joint: e2.getAttribute(`joint`).split(`/`).pop(), transforms: [], links: [] };
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2.childNodes[r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `link`:
          n2.links.push(this.parseKinematicsLink(i2));
          break;
        case t2(445):
        case `translate`:
        case `rotate`:
          n2.transforms.push(this[t2(374)](i2));
          break;
      }
    }
    return n2;
  }
  parseKinematicsTransform(e2) {
    let n2 = H, r2 = { type: e2.nodeName }, i2 = K(e2[n2(384)]);
    switch (r2[n2(318)]) {
      case `matrix`:
        r2.obj = new z(), r2.obj.fromArray(i2).transpose();
        break;
      case `translate`:
        r2.obj = new b(), r2.obj.fromArray(i2);
        break;
      case n2(301):
        r2.obj = new b(), r2.obj[n2(431)](i2), r2.angle = t.degToRad(i2[3]);
        break;
    }
    return r2;
  }
  parsePhysicsModel(e2) {
    let t2 = H, n2 = { name: e2[t2(442)](t2(428)) || ``, rigidBodies: {} };
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2.childNodes[r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `rigid_body`:
          n2[t2(294)][i2[t2(442)](`name`)] = {}, this.parsePhysicsRigidBody(i2, n2[t2(294)][i2.getAttribute(`name`)]);
          break;
      }
    }
    this[t2(385)].physicsModels[e2.getAttribute(`id`)] = n2;
  }
  parsePhysicsRigidBody(e2, t2) {
    for (let n2 = 0; n2 < e2.childNodes.length; n2++) {
      let r2 = e2.childNodes[n2];
      if (r2.nodeType === 1) switch (r2.nodeName) {
        case `technique_common`:
          this.parsePhysicsTechniqueCommon(r2, t2);
          break;
      }
    }
  }
  parsePhysicsTechniqueCommon(e2, t2) {
    let n2 = H;
    for (let r2 = 0; r2 < e2.childNodes[n2(361)]; r2++) {
      let i2 = e2.childNodes[r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `inertia`:
          t2.inertia = K(i2[n2(384)]);
          break;
        case `mass`:
          t2.mass = K(i2.textContent)[0];
          break;
      }
    }
  }
  parseKinematicsScene(e2) {
    let t2 = H, n2 = { bindJointAxis: [] };
    for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
      let i2 = e2.childNodes[r2];
      if (i2.nodeType === 1) switch (i2.nodeName) {
        case `bind_joint_axis`:
          n2.bindJointAxis[t2(379)](this.parseKinematicsBindJointAxis(i2));
          break;
      }
    }
    this.library.kinematicsScenes[X(e2.getAttribute(`url`))] = n2;
  }
  parseKinematicsBindJointAxis(e2) {
    let t2 = { target: e2.getAttribute(`target`).split(`/`).pop() };
    for (let n2 = 0; n2 < e2.childNodes.length; n2++) {
      let r2 = e2.childNodes[n2];
      if (r2.nodeType === 1) switch (r2.nodeName) {
        case `axis`:
          t2.axis = r2.getElementsByTagName(`param`)[0].textContent;
          let e3 = t2.axis.split(`inst_`).pop().split(`axis`)[0];
          t2.jointIndex = e3.substring(0, e3.length - 1);
          break;
      }
    }
    return t2;
  }
  prepareNodes(e2) {
    let t2 = e2[H(279)](`node`);
    for (let e3 = 0; e3 < t2.length; e3++) {
      let n2 = t2[e3];
      n2.hasAttribute(`id`) === false && n2.setAttribute(`id`, this.generateId());
    }
  }
  parseNode(e2) {
    let n2 = H, r2 = new z(), i2 = new b(), a2 = { name: e2.getAttribute(`name`) || ``, type: e2.getAttribute(`type`), id: e2.getAttribute(`id`), sid: e2.getAttribute(`sid`), matrix: new z(), nodes: [], instanceCameras: [], instanceControllers: [], instanceLights: [], instanceGeometries: [], instanceNodes: [], transforms: {}, transformData: {}, transformOrder: [] };
    for (let o2 = 0; o2 < e2.childNodes.length; o2++) {
      let s2 = e2.childNodes[o2];
      if (s2.nodeType !== 1) continue;
      let c2;
      switch (s2.nodeName) {
        case `node`:
          a2.nodes[n2(379)](s2.getAttribute(`id`)), this.parseNode(s2);
          break;
        case `instance_camera`:
          a2.instanceCameras[n2(379)](X(s2.getAttribute(`url`)));
          break;
        case `instance_controller`:
          a2.instanceControllers.push(this.parseNodeInstance(s2));
          break;
        case `instance_light`:
          a2.instanceLights.push(X(s2.getAttribute(`url`)));
          break;
        case `instance_geometry`:
          a2[n2(304)].push(this.parseNodeInstance(s2));
          break;
        case `instance_node`:
          a2.instanceNodes[n2(379)](X(s2.getAttribute(n2(418))));
          break;
        case `matrix`:
          c2 = K(s2.textContent), a2.matrix.multiply(r2[n2(431)](c2).transpose());
          {
            let e3 = s2.getAttribute(`sid`);
            a2.transforms[e3] = s2.nodeName, a2[n2(377)][e3] = { type: `matrix`, array: c2 }, a2.transformOrder.push(e3);
          }
          break;
        case `translate`:
          c2 = K(s2.textContent), i2.fromArray(c2), a2[n2(445)].multiply(r2.makeTranslation(i2.x, i2.y, i2.z));
          {
            let e3 = s2[n2(442)](`sid`);
            a2[n2(458)][e3] = s2.nodeName, a2.transformData[e3] = { type: `translate`, x: c2[0], y: c2[1], z: c2[2] }, a2.transformOrder.push(e3);
          }
          break;
        case n2(301):
          c2 = K(s2.textContent);
          {
            let e3 = t.degToRad(c2[3]);
            a2.matrix.multiply(r2.makeRotationAxis(i2.fromArray(c2), e3));
            let o3 = s2.getAttribute(`sid`);
            a2.transforms[o3] = s2[n2(437)], a2[n2(377)][o3] = { type: n2(301), axis: [c2[0], c2[1], c2[2]], angle: c2[3] }, a2.transformOrder.push(o3);
          }
          break;
        case `scale`:
          c2 = K(s2[n2(384)]), a2.matrix.scale(i2.fromArray(c2));
          {
            let e3 = s2.getAttribute(n2(449));
            a2.transforms[e3] = s2.nodeName, a2[n2(377)][e3] = { type: n2(425), x: c2[0], y: c2[1], z: c2[2] }, a2.transformOrder.push(e3);
          }
          break;
        case `extra`:
          break;
        default:
      }
    }
    return this.hasNode(a2.id) ? console.warn(`THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.`, a2.id) : this.library.nodes[a2.id] = a2, a2;
  }
  parseNodeInstance(e2) {
    let t2 = H, n2 = { id: X(e2.getAttribute(`url`)), materials: {}, skeletons: [] };
    for (let r2 = 0; r2 < e2[t2(461)].length; r2++) {
      let i2 = e2.childNodes[r2];
      switch (i2.nodeName) {
        case `bind_material`:
          let e3 = i2[t2(279)](t2(375));
          for (let r3 = 0; r3 < e3[t2(361)]; r3++) {
            let t3 = e3[r3], i3 = t3.getAttribute(`symbol`), a2 = t3.getAttribute(`target`);
            n2.materials[i3] = X(a2);
          }
          break;
        case `skeleton`:
          n2.skeletons.push(X(i2.textContent));
          break;
        default:
          break;
      }
    }
    return n2;
  }
  parseVisualScene(e2) {
    let t2 = H, n2 = { name: e2.getAttribute(`name`), children: [] };
    this[t2(337)](e2);
    let r2 = W(e2, `node`);
    for (let e3 = 0; e3 < r2.length; e3++) n2.children[t2(379)](this.parseNode(r2[e3]));
    this.library.visualScenes[e2.getAttribute(`id`)] = n2;
  }
  hasNode(e2) {
    return this.library.nodes[e2] !== void 0;
  }
}, Q = class {
  constructor(e2, t2, n2, r2) {
    let i2 = H;
    this.library = e2, this.collada = t2, this.textureLoader = n2, this.tgaLoader = r2, this.tempColor = new l(), this[i2(422)] = [], this.kinematics = {}, this.position = new b(), this.scale = new b(), this[i2(267)] = new v(), this[i2(445)] = new z(), this.deferredPivotAnimations = {}, this.transformNodes = {};
  }
  compose() {
    let e2 = H, t2 = this.library;
    this.buildLibrary(t2.animations, this[e2(371)].bind(this)), this.buildLibrary(t2.clips, this[e2(309)].bind(this)), this.buildLibrary(t2.controllers, this.buildController.bind(this)), this.buildLibrary(t2.images, this[e2(288)].bind(this)), this[e2(338)](t2.effects, this.buildEffect.bind(this)), this.buildLibrary(t2.materials, this.buildMaterial.bind(this)), this.buildLibrary(t2.cameras, this.buildCamera.bind(this)), this[e2(338)](t2.lights, this.buildLight[e2(246)](this)), this.buildLibrary(t2[e2(392)], this.buildGeometry[e2(246)](this)), this[e2(338)](t2[e2(299)], this.buildVisualScene[e2(246)](this)), this[e2(412)](), this.setupKinematics();
    let n2 = this[e2(269)](W(this.collada, e2(407))[0]);
    return n2.animations = this.animations, { scene: n2, animations: this.animations, kinematics: this.kinematics };
  }
  buildLibrary(e2, t2) {
    let n2 = H;
    for (let r2 in e2) {
      let i2 = e2[r2];
      i2[n2(457)] = t2(e2[r2]);
    }
  }
  [H(443)](e2, t2) {
    return e2[H(457)] === void 0 && (e2.build = t2(e2)), e2.build;
  }
  isEmpty(e2) {
    let t2 = H;
    return Object[t2(455)](e2)[t2(361)] === 0;
  }
  buildAnimation(e2) {
    let t2 = H, n2 = [], r2 = e2.channels, i2 = e2.samplers, a2 = e2[t2(393)], o2 = this.aggregateAnimationChannels(r2, i2, a2);
    for (let e3 in o2) {
      let r3 = this.library.nodes[e3];
      if (!r3) continue;
      let i3 = o2[e3];
      if (this.hasPivotTransforms(r3)) this.collectDeferredPivotAnimation(e3, i3);
      else {
        let a3 = this.getNode(e3), o3 = false;
        for (let e4 in i3) {
          let s2 = r3.transforms[e4], c2 = r3.transformData[e4], l2 = i3[e4];
          switch (s2) {
            case `matrix`:
              this[t2(405)](a3, l2, r3, n2);
              break;
            case `translate`:
              this[t2(451)](a3, l2, c2, n2);
              break;
            case `rotate`:
              o3 || (o3 = (this.buildRotateTrack(a3, e4, l2, c2, r3, n2), true));
              break;
            case `scale`:
              this.buildScaleTrack(a3, l2, c2, n2);
              break;
          }
        }
      }
    }
    return n2;
  }
  collectDeferredPivotAnimation(e2, t2) {
    this.deferredPivotAnimations[e2] || (this.deferredPivotAnimations[e2] = {});
    let n2 = this.deferredPivotAnimations[e2];
    for (let e3 in t2) {
      n2[e3] || (n2[e3] = {});
      for (let r2 in t2[e3]) n2[e3][r2] = t2[e3][r2];
    }
  }
  hasPivotTransforms(e2) {
    let t2 = H;
    for (let n2 of [`rotatePivot`, t2(420), `rotatePivotTranslation`, `scalePivot`, `scalePivotInverse`, `scalePivotTranslation`]) if (e2.transforms[n2] !== void 0) return true;
    return false;
  }
  getAnimation(e2) {
    let t2 = H;
    return this.getBuild(this.library[t2(422)][e2], this.buildAnimation.bind(this));
  }
  aggregateAnimationChannels(e2, t2, n2) {
    let r2 = H, i2 = {};
    for (let a2 in e2) {
      if (!e2.hasOwnProperty(a2)) continue;
      let o2 = e2[a2], s2 = t2[o2.sampler], c2 = s2.inputs[r2(261)], l2 = s2.inputs.OUTPUT, u2 = n2[c2], d2 = n2[l2], f2 = s2.inputs.INTERPOLATION, p2 = s2.inputs[r2(278)], m2 = s2.inputs.OUT_TANGENT, h2 = f2 ? n2[f2] : null, g2 = p2 ? n2[p2] : null, _2 = m2 ? n2[m2] : null, v2 = o2.id, y2 = o2.sid, b2 = o2[r2(395)] || `default`;
      i2[v2] || (i2[v2] = {}), i2[v2][y2] || (i2[v2][y2] = {}), i2[v2][y2][b2] = { times: u2.array, values: d2[r2(452)], stride: d2.stride, arraySyntax: o2.arraySyntax, indices: o2.indices, interpolation: h2 ? h2.array : null, inTangent: g2 ? g2[r2(452)] : null, outTangent: _2 ? _2.array : null, inTangentStride: g2 ? g2[r2(413)] : 0, outTangentStride: _2 ? _2.stride : 0 };
    }
    return i2;
  }
  [H(405)](e2, t2, n2, r2) {
    let i2 = H, a2 = n2.matrix.clone().transpose(), o2 = {};
    for (let e3 in t2) {
      let n3 = t2[e3], r3 = n3.times, a3 = n3.values, s3 = n3.stride;
      for (let e4 = 0, t3 = r3.length; e4 < t3; e4++) {
        let t4 = r3[e4], c3 = e4 * s3;
        if (o2[t4] === void 0 && (o2[t4] = {}), n3.arraySyntax === true) {
          let e5 = a3[c3], r4 = n3[i2(419)][0] + 4 * n3.indices[1];
          o2[t4][r4] = e5;
        } else for (let e5 = 0; e5 < s3; e5++) o2[t4][e5] = a3[c3 + e5];
      }
    }
    let s2 = this[i2(433)](o2, a2), c2 = { name: e2.uuid, keyframes: s2 };
    this.createKeyframeTracks(c2, r2);
  }
  buildTranslateTrack(e2, t2, n2, r2) {
    let i2 = H;
    if (t2.default && t2.default.stride === 3) {
      let n3 = t2.default, a3 = Array[i2(376)](n3.times), o3 = Array.from(n3.values), s3 = new N(e2[i2(404)] + `.position`, a3, o3), c3 = this.getInterpolationInfo(t2);
      this.applyInterpolation(s3, c3, t2), r2.push(s3);
      return;
    }
    let a2 = this.getTimesForAllAxes(t2);
    if (a2.length === 0) return;
    let o2 = [], s2 = this[i2(357)](t2);
    for (let e3 = 0; e3 < a2.length; e3++) {
      let r3 = a2[e3], s3 = this.getValueAtTime(t2.X, r3, n2.x), c3 = this.getValueAtTime(t2.Y, r3, n2.y), l2 = this[i2(265)](t2.Z, r3, n2.z);
      o2[i2(379)](s3, c3, l2);
    }
    let c2 = new N(e2.uuid + `.position`, a2, o2);
    this.applyInterpolation(c2, s2), r2.push(c2);
  }
  buildRotateTrack(e2, n2, r2, i2, a2, o2) {
    let s2 = H, c2 = r2.ANGLE || r2[s2(416)];
    if (!c2) return;
    let l2 = Array.from(c2.times);
    if (l2.length === 0) return;
    let u2 = [];
    for (let e3 of a2.transformOrder) if (a2.transforms[e3] === `rotate`) {
      let t2 = a2[s2(377)][e3];
      u2[s2(379)]({ sid: e3, axis: new b(t2.axis[0], t2.axis[1], t2.axis[2]), defaultAngle: t2[s2(411)] });
    }
    let d2 = new v(), f2 = new v(), p2 = new v(), m2 = [], h2 = this.getInterpolationInfo(r2);
    for (let e3 = 0; e3 < l2.length; e3++) {
      let r3 = l2[e3];
      d2.identity();
      for (let e4 of u2) {
        let i3;
        i3 = e4.sid === n2 ? this.getValueAtTime(c2, r3, e4.defaultAngle) : e4.defaultAngle;
        let a3 = t.degToRad(i3);
        p2.setFromAxisAngle(e4.axis, a3), d2.multiply(p2);
      }
      e3 > 0 && f2.dot(d2) < 0 && (d2.x = -d2.x, d2.y = -d2.y, d2.z = -d2.z, d2.w = -d2.w), f2.copy(d2), m2.push(d2.x, d2.y, d2.z, d2.w);
    }
    let _2 = new g(e2.uuid + `.quaternion`, l2, m2);
    this[s2(466)](_2, h2), o2.push(_2);
  }
  buildScaleTrack(e2, t2, n2, r2) {
    let i2 = H;
    if (t2.default && t2.default.stride === 3) {
      let n3 = t2.default, a3 = Array[i2(376)](n3.times), o3 = Array.from(n3.values), s3 = new N(e2.uuid + `.scale`, a3, o3), c3 = this.getInterpolationInfo(t2);
      this.applyInterpolation(s3, c3, t2), r2.push(s3);
      return;
    }
    let a2 = this[i2(332)](t2);
    if (a2.length === 0) return;
    let o2 = [], s2 = this.getInterpolationInfo(t2);
    for (let e3 = 0; e3 < a2.length; e3++) {
      let r3 = a2[e3], s3 = this.getValueAtTime(t2.X, r3, n2.x), c3 = this.getValueAtTime(t2.Y, r3, n2.y), l2 = this[i2(265)](t2.Z, r3, n2.z);
      o2[i2(379)](s3, c3, l2);
    }
    let c2 = new N(e2[i2(404)] + `.scale`, a2, o2);
    this.applyInterpolation(c2, s2), r2.push(c2);
  }
  getTimesForAllAxes(e2) {
    let t2 = H, n2 = [];
    return e2.X && (n2 = n2[t2(355)](Array.from(e2.X.times))), e2.Y && (n2 = n2[t2(355)](Array.from(e2.Y[t2(319)]))), e2.Z && (n2 = n2.concat(Array[t2(376)](e2.Z.times))), e2.ANGLE && (n2 = n2.concat(Array.from(e2.ANGLE.times))), e2[t2(416)] && (n2 = n2[t2(355)](Array.from(e2[t2(416)][t2(319)]))), n2 = [...new Set(n2)].sort((e3, t3) => e3 - t3), n2;
  }
  getValueAtTime(e2, t2, n2) {
    let r2 = H;
    if (!e2) return n2;
    let i2 = e2[r2(319)], a2 = e2.values, o2 = e2[r2(402)];
    for (let n3 = 0; n3 < i2.length; n3++) {
      if (i2[n3] === t2) return a2[n3];
      if (i2[n3] > t2) {
        if (n3 === 0) return a2[0];
        let s2 = n3 - 1, c2 = n3, l2 = i2[s2], u2 = i2[c2], d2 = a2[s2], f2 = a2[c2], p2 = o2 ? o2[s2] : r2(276);
        return p2 === r2(381) ? d2 : p2 === `BEZIER` && e2.inTangent && e2.outTangent ? this.evaluateBezierComponent(e2, s2, c2, l2, u2, t2) : d2 + (t2 - l2) / (u2 - l2) * (f2 - d2);
      }
    }
    return a2[a2.length - 1];
  }
  evaluateBezierComponent(e2, t2, n2, r2, i2, a2) {
    let o2 = H, s2 = e2.values, c2 = e2.inTangent, l2 = e2[o2(306)], u2 = e2.inTangentStride || 1, d2 = s2[t2], f2 = s2[n2], p2, m2, h2, g2;
    u2 === 2 ? (p2 = l2[t2 * 2], m2 = l2[t2 * 2 + 1], h2 = c2[n2 * 2], g2 = c2[n2 * 2 + 1]) : (p2 = r2 + (i2 - r2) / 3, m2 = l2[t2], h2 = i2 - (i2 - r2) / 3, g2 = c2[n2]);
    let _2 = (a2 - r2) / (i2 - r2);
    for (let e3 = 0; e3 < 8; e3++) {
      let e4 = _2 * _2, t3 = e4 * _2, n3 = 1 - _2, s3 = n3 * n3, c3 = s3 * n3 * r2 + 3 * s3 * _2 * p2 + 3 * n3 * e4 * h2 + t3 * i2, l3 = 3 * s3 * (p2 - r2) + 6 * n3 * _2 * (h2 - p2) + 3 * e4 * (i2 - h2);
      if (Math.abs(l3) < 1e-10) break;
      let u3 = c3 - a2;
      if (Math[o2(440)](u3) < 1e-10) break;
      _2 -= u3 / l3, _2 = Math.max(0, Math.min(1, _2));
    }
    let v2 = _2 * _2, y2 = v2 * _2, b2 = 1 - _2, x2 = b2 * b2;
    return x2 * b2 * d2 + 3 * x2 * _2 * m2 + 3 * b2 * v2 * g2 + y2 * f2;
  }
  getInterpolationInfo(e2) {
    let t2 = H, n2 = [`X`, `Y`, `Z`, `ANGLE`, `default`], r2 = null, i2 = true;
    for (let a2 of n2) {
      let n3 = e2[a2];
      if (!n3 || !n3.interpolation) continue;
      let o2 = n3.interpolation;
      for (let e3 = 0; e3 < o2[t2(361)]; e3++) {
        let t3 = o2[e3];
        r2 === null ? r2 = t3 : t3 !== r2 && (i2 = false);
      }
    }
    return { type: r2 || `LINEAR`, uniform: i2 };
  }
  applyInterpolation(e2, t2, r2 = null) {
    let i2 = H;
    if (t2.type === `STEP` && t2.uniform) e2.setInterpolation(n);
    else if (t2.type === `BEZIER` && t2.uniform && r2) {
      let t3 = r2.default;
      t3 && t3[i2(315)] && t3.outTangent && (e2.setInterpolation(2303), e2.settings = { inTangents: new Float32Array(t3.inTangent), outTangents: new Float32Array(t3.outTangent) });
    }
  }
  [H(433)](e2, t2) {
    let n2 = H, r2 = [];
    for (let t3 in e2) r2[n2(379)]({ time: parseFloat(t3), value: e2[t3] });
    r2.sort((e3, t3) => e3.time - t3.time);
    for (let e3 = 0; e3 < 16; e3++) this.transformAnimationData(r2, e3, t2.elements[e3]);
    return r2;
  }
  createKeyframeTracks(e2, t2) {
    let n2 = H, r2 = e2.keyframes, i2 = e2[n2(428)], a2 = [], o2 = [], s2 = [], c2 = [], l2 = this[n2(326)], u2 = this.quaternion, d2 = this.scale, f2 = this[n2(445)];
    for (let e3 = 0, t3 = r2.length; e3 < t3; e3++) {
      let t4 = r2[e3], i3 = t4.time, p2 = t4.value;
      f2.fromArray(p2).transpose(), f2.decompose(l2, u2, d2), a2.push(i3), o2.push(l2.x, l2.y, l2.z), s2[n2(379)](u2.x, u2.y, u2.z, u2.w), c2.push(d2.x, d2.y, d2.z);
    }
    return o2.length > 0 && t2[n2(379)](new N(i2 + `.position`, a2, o2)), s2.length > 0 && t2.push(new g(i2 + n2(322), a2, s2)), c2.length > 0 && t2.push(new N(i2 + `.scale`, a2, c2)), t2;
  }
  transformAnimationData(e2, t2, n2) {
    let r2 = H, i2, a2 = true, o2, s2;
    for (o2 = 0, s2 = e2.length; o2 < s2; o2++) i2 = e2[o2], i2.value[t2] === void 0 ? i2.value[t2] = null : a2 = false;
    if (a2 === true) for (o2 = 0, s2 = e2[r2(361)]; o2 < s2; o2++) i2 = e2[o2], i2.value[t2] = n2;
    else this.createMissingKeyframes(e2, t2);
  }
  createMissingKeyframes(e2, t2) {
    let n2 = H, r2, i2;
    for (let a2 = 0, o2 = e2.length; a2 < o2; a2++) {
      let o3 = e2[a2];
      if (o3.value[t2] === null) {
        if (r2 = this.getPrev(e2, a2, t2), i2 = this.getNext(e2, a2, t2), r2 === null) {
          o3[n2(463)][t2] = i2[n2(463)][t2];
          continue;
        }
        if (i2 === null) {
          o3.value[t2] = r2.value[t2];
          continue;
        }
        this.interpolate(o3, r2, i2, t2);
      }
    }
  }
  [H(307)](e2, t2, n2) {
    for (; t2 >= 0; ) {
      let r2 = e2[t2];
      if (r2.value[n2] !== null) return r2;
      t2--;
    }
    return null;
  }
  getNext(e2, t2, n2) {
    for (; t2 < e2.length; ) {
      let r2 = e2[t2];
      if (r2.value[n2] !== null) return r2;
      t2++;
    }
    return null;
  }
  interpolate(e2, t2, n2, r2) {
    let i2 = H;
    if (n2.time - t2[i2(435)] === 0) {
      e2[i2(463)][r2] = t2.value[r2];
      return;
    }
    e2[i2(463)][r2] = (e2[i2(435)] - t2.time) * (n2.value[r2] - t2.value[r2]) / (n2.time - t2.time) + t2[i2(463)][r2];
  }
  [H(309)](e2) {
    let t2 = [], n2 = e2.name, r2 = e2.end - e2.start || -1, i2 = e2.animations;
    for (let e3 = 0, n3 = i2.length; e3 < n3; e3++) {
      let n4 = this.getAnimation(i2[e3]);
      for (let e4 = 0, r3 = n4.length; e4 < r3; e4++) t2.push(n4[e4]);
    }
    return new _(n2, r2, t2);
  }
  [H(408)](e2) {
    let t2 = H;
    return this.getBuild(this[t2(385)].clips[e2], this.buildAnimationClip.bind(this));
  }
  buildController(e2) {
    let t2 = H, n2 = { id: e2.id }, r2 = this[t2(385)].geometries[n2.id];
    return e2.skin !== void 0 && (n2.skin = this.buildSkin(e2.skin), r2.sources.skinIndices = n2.skin.indices, r2.sources.skinWeights = n2.skin.weights), n2;
  }
  buildSkin(e2) {
    let t2 = H, n2 = { joints: [], indices: { array: [], stride: 4 }, weights: { array: [], stride: 4 } }, r2 = e2.sources, i2 = e2.vertexWeights, a2 = i2.vcount, o2 = i2.v, s2 = i2.inputs.JOINT.offset, c2 = i2[t2(453)][t2(341)].offset, l2 = e2[t2(393)][e2[t2(320)].inputs.JOINT], u2 = e2.sources[e2.joints.inputs.INV_BIND_MATRIX], d2 = r2[i2.inputs.WEIGHT.id].array, f2 = 0, p2, m2, h2;
    for (p2 = 0, h2 = a2.length; p2 < h2; p2++) {
      let e3 = a2[p2], r3 = [];
      for (m2 = 0; m2 < e3; m2++) {
        let e4 = o2[f2 + s2], n3 = d2[o2[f2 + c2]];
        r3[t2(379)]({ index: e4, weight: n3 }), f2 += 2;
      }
      for (r3.sort(g2), m2 = 0; m2 < 4; m2++) {
        let e4 = r3[m2];
        e4 === void 0 ? (n2.indices.array.push(0), n2.weights.array.push(0)) : (n2.indices.array[t2(379)](e4.index), n2.weights.array.push(e4.weight));
      }
    }
    for (e2.bindShapeMatrix ? n2.bindMatrix = new z()[t2(431)](e2.bindShapeMatrix).transpose() : n2.bindMatrix = new z().identity(), p2 = 0, h2 = l2.array.length; p2 < h2; p2++) {
      let e3 = l2.array[p2], r3 = new z().fromArray(u2.array, p2 * u2.stride).transpose();
      n2[t2(320)].push({ name: e3, boneInverse: r3 });
    }
    return n2;
    function g2(e3, t3) {
      return t3.weight - e3.weight;
    }
  }
  getController(e2) {
    let t2 = H;
    return this.getBuild(this.library[t2(410)][e2], this.buildController.bind(this));
  }
  buildImage(e2) {
    return e2.build === void 0 ? e2.init_from : e2.build;
  }
  getImage(e2) {
    let t2 = H, n2 = this.library.images[e2];
    return n2 === void 0 ? (console.warn(`THREE.ColladaLoader: Couldn't find image with ID:`, e2), null) : this[t2(443)](n2, this.buildImage.bind(this));
  }
  buildEffect(e2) {
    return e2;
  }
  getEffect(e2) {
    return this.getBuild(this.library.effects[e2], this.buildEffect.bind(this));
  }
  getTextureLoader(e2) {
    let t2 = H, n2, r2 = e2.slice((e2.lastIndexOf(`.`) - 1 >>> 0) + 2);
    switch (r2 = r2.toLowerCase(), r2) {
      case t2(336):
        n2 = this.tgaLoader;
        break;
      default:
        n2 = this[t2(346)];
    }
    return n2;
  }
  buildMaterial(e2) {
    let t2 = H, n2 = this.getEffect(e2[t2(418)]), r2 = n2.profile.technique, a2;
    switch (r2.type) {
      case t2(450):
      case `blinn`:
        a2 = new i();
        break;
      case `lambert`:
        a2 = new E();
        break;
      default:
        a2 = new R();
        break;
    }
    a2.name = e2[t2(428)] || ``;
    let o2 = this;
    function s2(e3, r3 = null) {
      let i2 = t2, a3 = n2.profile.samplers[e3.id], s3 = null;
      if (a3 !== void 0) {
        let e4 = n2.profile.surfaces[a3.source];
        s3 = o2.getImage(e4.init_from);
      } else console.warn(i2(459)), s3 = o2.getImage(e3.id);
      if (s3 !== null) {
        let t3 = o2.getTextureLoader(s3);
        if (t3 !== void 0) {
          let n3 = t3.load(s3), a4 = e3.extra;
          if (a4 !== void 0 && a4[i2(441)] !== void 0 && o2.isEmpty(a4.technique) === false) {
            let e4 = a4[i2(441)];
            n3.wrapS = e4.wrapU ? F : S, n3.wrapT = e4[i2(275)] ? F : S, n3.offset[i2(439)](e4.offsetU || 0, e4.offsetV || 0), n3.repeat.set(e4[i2(349)] || 1, e4.repeatV || 1);
          } else n3[i2(366)] = F, n3.wrapT = F;
          return r3 !== null && (n3.colorSpace = r3), n3;
        } else return console.warn(`THREE.ColladaLoader: Loader for texture %s not found.`, s3), null;
      } else return console.warn(`THREE.ColladaLoader: Couldn't create texture with ID:`, e3.id), null;
    }
    let c2 = r2[t2(281)];
    for (let e3 in c2) {
      let n3 = c2[e3];
      switch (e3) {
        case `diffuse`:
          n3.color && a2[t2(253)].fromArray(n3.color), n3.texture && (a2.map = s2(n3.texture, `srgb`));
          break;
        case `specular`:
          n3.color && a2.specular && a2.specular.fromArray(n3.color), n3.texture && (a2[t2(426)] = s2(n3.texture));
          break;
        case `bump`:
          n3.texture && (a2.normalMap = s2(n3.texture));
          break;
        case `ambient`:
          n3.texture && (a2[t2(383)] = s2(n3.texture, `srgb`));
          break;
        case `shininess`:
          n3.float && a2.shininess && (a2.shininess = n3.float);
          break;
        case `emission`:
          n3.color && a2[t2(252)] && a2.emissive[t2(431)](n3.color), n3[t2(291)] && (a2.emissiveMap = s2(n3[t2(291)], `srgb`));
          break;
      }
    }
    w.colorSpaceToWorking(a2.color, m), a2.specular && w[t2(286)](a2.specular, `srgb`), a2.emissive && w.colorSpaceToWorking(a2.emissive, `srgb`);
    let l2 = c2.transparent, d2 = c2.transparency;
    if (d2 === void 0 && l2 && (d2 = { float: 1 }), l2 === void 0 && d2 && (l2 = { opaque: `A_ONE`, data: { color: [1, 1, 1, 1] } }), l2 && d2) if (l2.data.texture) a2.transparent = true;
    else {
      let e3 = l2.data.color;
      switch (l2.opaque) {
        case `A_ONE`:
          a2[t2(362)] = e3[3] * d2.float;
          break;
        case `RGB_ZERO`:
          a2[t2(362)] = 1 - e3[0] * d2.float;
          break;
        case `A_ZERO`:
          a2[t2(362)] = 1 - e3[3] * d2.float;
          break;
        case `RGB_ONE`:
          a2.opacity = e3[0] * d2.float;
          break;
        default:
          console.warn(`THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.`, l2.opaque);
      }
      a2.opacity < 1 && (a2[t2(266)] = true);
    }
    if (r2.extra !== void 0 && r2.extra[t2(441)] !== void 0) {
      let e3 = r2.extra.technique;
      for (let n3 in e3) {
        let r3 = e3[n3];
        switch (n3) {
          case t2(438):
            a2.side = r3 === 1 ? 2 : 0;
            break;
          case `bump`:
            a2[t2(444)] = s2(r3.texture), a2.normalScale = new u(1, 1);
            break;
        }
      }
    }
    return a2;
  }
  getMaterial(e2) {
    let t2 = H;
    return this[t2(443)](this.library.materials[e2], this.buildMaterial[t2(246)](this));
  }
  buildCamera(e2) {
    let t2 = H, n2;
    switch (e2[t2(262)].technique) {
      case t2(329):
        n2 = new L(e2.optics.parameters[t2(398)], e2.optics.parameters.aspect_ratio, e2.optics.parameters.znear, e2[t2(262)].parameters.zfar);
        break;
      case `orthographic`:
        let r2 = e2.optics.parameters.ymag, i2 = e2.optics.parameters.xmag, a2 = e2.optics[t2(281)].aspect_ratio;
        i2 = i2 === void 0 ? r2 * a2 : i2, r2 = r2 === void 0 ? i2 / a2 : r2, i2 *= 0.5, r2 *= 0.5, n2 = new c(-i2, i2, r2, -r2, e2.optics.parameters[t2(432)], e2.optics.parameters.zfar);
        break;
      default:
        n2 = new L();
        break;
    }
    return n2.name = e2.name || ``, n2;
  }
  [H(401)](e2) {
    let t2 = H, n2 = this[t2(385)].cameras[e2];
    return n2 === void 0 ? (console.warn(t2(273), e2), null) : this.getBuild(n2, this.buildCamera.bind(this));
  }
  buildLight(e2) {
    let n2 = H, r2;
    switch (e2[n2(441)]) {
      case `directional`:
        r2 = new j();
        break;
      case `point`:
        r2 = new V();
        break;
      case `spot`:
        r2 = new d();
        break;
      case `ambient`:
        r2 = new k();
        break;
    }
    return e2.parameters.color && r2.color.copy(e2.parameters.color), e2.parameters.distance && (r2.distance = e2.parameters.distance), e2.parameters.falloffAngle && (r2[n2(411)] = t.degToRad(e2.parameters.falloffAngle)), r2;
  }
  getLight(e2) {
    let t2 = H, n2 = this[t2(385)].lights[e2];
    return n2 === void 0 ? (console.warn(`THREE.ColladaLoader: Couldn't find light with ID:`, e2), null) : this[t2(443)](n2, this[t2(324)].bind(this));
  }
  groupPrimitives(e2) {
    let t2 = H, n2 = {};
    for (let r2 = 0; r2 < e2[t2(361)]; r2++) {
      let i2 = e2[r2];
      n2[i2.type] === void 0 && (n2[i2[t2(318)]] = []), n2[i2.type][t2(379)](i2);
    }
    return n2;
  }
  checkUVCoordinates(e2) {
    let t2 = H, n2 = 0;
    for (let r2 = 0, i2 = e2[t2(361)]; r2 < i2; r2++) e2[r2].hasUV === true && n2++;
    n2 > 0 && n2 < e2.length && (e2[t2(292)] = true);
  }
  buildGeometry(e2) {
    let t2 = {}, n2 = e2.sources, r2 = e2.vertices, i2 = e2.primitives;
    if (i2.length === 0) return {};
    let a2 = this.groupPrimitives(i2);
    for (let e3 in a2) {
      let i3 = a2[e3];
      this.checkUVCoordinates(i3), t2[e3] = this.buildGeometryType(i3, n2, r2);
    }
    return t2;
  }
  buildGeometryType(e2, t2, n2) {
    let r2 = H, i2 = {}, a2 = { array: [], stride: 0 }, o2 = { array: [], stride: 0 }, c2 = { array: [], stride: 0 }, l2 = { array: [], stride: 0 }, u2 = { array: [], stride: 0 }, d2 = { array: [], stride: 4 }, f2 = { array: [], stride: 4 }, p2 = new s(), m2 = [], h2 = 0;
    for (let i3 = 0; i3 < e2[r2(361)]; i3++) {
      let s2 = e2[i3], g2 = s2[r2(453)], _2 = 0;
      switch (s2.type) {
        case `lines`:
        case `linestrips`:
          _2 = s2[r2(344)] * 2;
          break;
        case `triangles`:
          _2 = s2.count * 3;
          break;
        case `polygons`:
        case `polylist`:
          for (let e3 = 0; e3 < s2[r2(344)]; e3++) {
            let t3 = s2.vcount[e3];
            switch (t3) {
              case 3:
                _2 += 3;
                break;
              case 4:
                _2 += 6;
                break;
              default:
                _2 += (t3 - 2) * 3;
                break;
            }
          }
          break;
        default:
          console.warn(`THREE.ColladaLoader: Unknown primitive type:`, s2.type);
      }
      p2.addGroup(h2, _2, i3), h2 += _2, s2.material && m2.push(s2.material);
      for (let i4 in g2) {
        let p3 = g2[i4];
        switch (i4) {
          case `VERTEX`:
            for (let i5 in n2) {
              let m3 = n2[i5];
              switch (i5) {
                case `POSITION`:
                  let n3 = a2.array.length;
                  if (this.buildGeometryData(s2, t2[m3], p3[r2(417)], a2[r2(452)]), a2.stride = t2[m3].stride, t2[r2(270)] && t2.skinIndices && (this[r2(314)](s2, t2.skinIndices, p3.offset, d2[r2(452)]), this.buildGeometryData(s2, t2.skinWeights, p3.offset, f2[r2(452)])), s2.hasUV === false && e2.uvsNeedsFix === true) {
                    let e3 = (a2.array[r2(361)] - n3) / a2.stride;
                    for (let t3 = 0; t3 < e3; t3++) c2[r2(452)].push(0, 0);
                  }
                  break;
                case `NORMAL`:
                  this.buildGeometryData(s2, t2[m3], p3[r2(417)], o2[r2(452)]), o2.stride = t2[m3].stride;
                  break;
                case `COLOR`:
                  this.buildGeometryData(s2, t2[m3], p3[r2(417)], u2.array), u2.stride = t2[m3].stride;
                  break;
                case `TEXCOORD`:
                  this.buildGeometryData(s2, t2[m3], p3.offset, c2.array), c2.stride = t2[m3].stride;
                  break;
                case `TEXCOORD1`:
                  this.buildGeometryData(s2, t2[m3], p3.offset, l2.array), c2[r2(413)] = t2[m3].stride;
                  break;
                default:
                  console.warn(`THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.`, i5);
              }
            }
            break;
          case `NORMAL`:
            this[r2(314)](s2, t2[p3.id], p3.offset, o2[r2(452)]), o2.stride = t2[p3.id].stride;
            break;
          case `COLOR`:
            this[r2(314)](s2, t2[p3.id], p3.offset, u2.array, true), u2.stride = t2[p3.id].stride;
            break;
          case `TEXCOORD`:
            this.buildGeometryData(s2, t2[p3.id], p3[r2(417)], c2.array), c2.stride = t2[p3.id].stride;
            break;
          case `TEXCOORD1`:
            this.buildGeometryData(s2, t2[p3.id], p3.offset, l2.array), l2.stride = t2[p3.id].stride;
            break;
        }
      }
    }
    return a2.array[r2(361)] > 0 && p2[r2(359)](`position`, new y(a2.array, a2.stride)), o2[r2(452)].length > 0 && p2.setAttribute(r2(430), new y(o2[r2(452)], o2.stride)), u2[r2(452)].length > 0 && p2.setAttribute(`color`, new y(u2.array, u2.stride)), c2.array[r2(361)] > 0 && p2.setAttribute(`uv`, new y(c2.array, c2.stride)), l2[r2(452)].length > 0 && p2.setAttribute(`uv1`, new y(l2.array, l2[r2(413)])), d2.array[r2(361)] > 0 && p2[r2(359)](`skinIndex`, new y(d2.array, d2.stride)), f2.array.length > 0 && p2.setAttribute(`skinWeight`, new y(f2[r2(452)], f2[r2(413)])), i2.data = p2, i2.type = e2[0].type, i2.materialKeys = m2, i2;
  }
  buildGeometryData(e2, t2, n2, r2, i2 = false) {
    let a2 = H, o2 = e2.p, s2 = e2.stride, c2 = e2.vcount, l2 = this.tempColor;
    function d2(e3) {
      let t3 = q, a3 = o2[e3 + n2] * h2, s3 = a3 + h2;
      for (; a3 < s3; a3++) r2[t3(379)](p2[a3]);
      if (i2) {
        let e4 = r2.length - h2 - 1;
        l2[t3(447)](r2[e4 + 0], r2[e4 + 1], r2[e4 + 2], m), r2[e4 + 0] = l2.r, r2[e4 + 1] = l2.g, r2[e4 + 2] = l2.b;
      }
    }
    let p2 = t2.array, h2 = t2.stride;
    if (e2.vcount !== void 0) {
      let e3 = 0;
      for (let t3 = 0, n3 = c2.length; t3 < n3; t3++) {
        let n4 = c2[t3];
        if (n4 === 4) {
          let t4 = e3 + s2 * 0, n5 = e3 + s2 * 1, r3 = e3 + s2 * 2, i3 = e3 + s2 * 3;
          d2(t4), d2(n5), d2(i3), d2(n5), d2(r3), d2(i3);
        } else if (n4 === 3) {
          let t4 = e3 + s2 * 0, n5 = e3 + s2 * 1, r3 = e3 + s2 * 2;
          d2(t4), d2(n5), d2(r3);
        } else if (n4 > 4) {
          let t4 = [];
          for (let r4 = 0; r4 < n4; r4++) {
            let n5 = o2[e3 + s2 * r4] * h2, i4 = p2[n5], a3 = p2[n5 + 1], c4 = p2[n5 + 2];
            t4.push(new b(i4, a3, c4));
          }
          let r3 = new b(), i3 = new f();
          i3.a = t4[0], i3.b = t4[1], i3.c = t4[2], i3.getNormal(r3);
          let c3 = [];
          if (Math[a2(440)](r3.x) > Math.abs(r3.y) && Math.abs(r3.x) > Math[a2(440)](r3.z)) for (let e4 = 0; e4 < n4; e4++) c3.push(new u(t4[e4].y, t4[e4].z));
          else if (Math.abs(r3.y) > Math.abs(r3.z)) for (let e4 = 0; e4 < n4; e4++) c3.push(new u(t4[e4].x, t4[e4].z));
          else for (let e4 = 0; e4 < n4; e4++) c3.push(new u(t4[e4].x, t4[e4].y));
          let l3 = A.isClockWise(c3);
          l3 === true && c3[a2(323)]();
          let m2 = A.triangulateShape(c3, []);
          for (let t5 = 0; t5 < m2.length; t5++) {
            let r4 = m2[t5], i4, a3, o3;
            l3 === false ? (i4 = r4[0], a3 = r4[1], o3 = r4[2]) : (i4 = n4 - 1 - r4[0], a3 = n4 - 1 - r4[2], o3 = n4 - 1 - r4[1]);
            let c4 = e3 + s2 * i4, u2 = e3 + s2 * a3, f2 = e3 + s2 * o3;
            d2(c4), d2(u2), d2(f2);
          }
        }
        e3 += s2 * n4;
      }
    } else for (let e3 = 0, t3 = o2[a2(361)]; e3 < t3; e3 += s2) d2(e3);
  }
  getGeometry(e2) {
    let t2 = H;
    return this[t2(443)](this[t2(385)].geometries[e2], this.buildGeometry.bind(this));
  }
  buildKinematicsModel(e2) {
    return e2.build === void 0 ? e2 : e2.build;
  }
  getKinematicsModel(e2) {
    return this.getBuild(this.library.kinematicsModels[e2], this.buildKinematicsModel.bind(this));
  }
  buildKinematicsScene(e2) {
    let t2 = H;
    return e2[t2(457)] === void 0 ? e2 : e2[t2(457)];
  }
  getKinematicsScene(e2) {
    let t2 = H;
    return this.getBuild(this.library[t2(342)][e2], this.buildKinematicsScene.bind(this));
  }
  setupKinematics() {
    let e2 = H, n2 = Object.keys(this.library.kinematicsModels)[0], r2 = Object[e2(455)](this[e2(385)].kinematicsScenes)[0], i2 = Object.keys(this[e2(385)][e2(299)])[0];
    if (n2 === void 0 || r2 === void 0) return;
    let a2 = this.getKinematicsModel(n2), o2 = this.getKinematicsScene(r2), s2 = this.getVisualScene(i2), c2 = o2.bindJointAxis, l2 = {}, u2 = this.collada, d2 = this;
    for (let e3 = 0, t2 = c2.length; e3 < t2; e3++) {
      let t3 = c2[e3], n3 = u2.querySelector(`[sid="` + t3.target + `"]`);
      if (n3) {
        let e4 = n3.parentElement;
        f2(t3.jointIndex, e4);
      }
    }
    function f2(e3, t2) {
      let n3 = t2.getAttribute(`name`), r3 = a2.joints[e3], i3 = d2.buildTransformList(t2);
      s2.traverse(function(t3) {
        t3.name === n3 && (l2[e3] = { object: t3, transforms: i3, joint: r3, position: r3.zeroPosition });
      });
    }
    let p2 = new z(), m2 = this.matrix;
    this.kinematics = { joints: a2 && a2.joints, getJointValue: function(t2) {
      let n3 = e2, r3 = l2[t2];
      if (r3) return r3[n3(326)];
      console[n3(348)](`THREE.ColladaLoader: Joint ` + t2 + n3(365));
    }, setJointValue: function(n3, r3) {
      let i3 = e2, a3 = l2[n3];
      if (a3) {
        let e3 = a3[i3(250)];
        if (r3 > e3.limits[i3(310)] || r3 < e3.limits.min) console[i3(348)](`THREE.ColladaLoader: Joint ` + n3 + i3(249) + r3 + i3(373) + e3.limits.min + `, max: ` + e3[i3(343)].max + `).`);
        else if (e3.static) console.warn(`THREE.ColladaLoader: Joint ` + n3 + ` is static.`);
        else {
          let o3 = a3.object, s3 = e3[i3(247)], c3 = a3.transforms;
          m2.identity();
          for (let a4 = 0; a4 < c3.length; a4++) {
            let o4 = c3[a4];
            if (o4.sid && o4.sid.indexOf(n3) !== -1) switch (e3.type) {
              case i3(333):
                m2.multiply(p2.makeRotationAxis(s3, t.degToRad(r3)));
                break;
              case `prismatic`:
                m2.multiply(p2.makeTranslation(s3.x * r3, s3.y * r3, s3.z * r3));
                break;
              default:
                console.warn(`THREE.ColladaLoader: Unknown joint type: ` + e3.type);
                break;
            }
            else switch (o4.type) {
              case `matrix`:
                m2.multiply(o4.obj);
                break;
              case `translate`:
                m2.multiply(p2.makeTranslation(o4.obj.x, o4.obj.y, o4[i3(293)].z));
                break;
              case `scale`:
                m2.scale(o4.obj);
                break;
              case `rotate`:
                m2.multiply(p2.makeRotationAxis(o4.obj, o4[i3(411)]));
                break;
            }
          }
          o3.matrix.copy(m2), o3.matrix.decompose(o3[i3(326)], o3[i3(267)], o3[i3(425)]), l2[n3].position = r3;
        }
      } else console.warn(`THREE.ColladaLoader: Joint ` + n3 + ` does not exist.`);
    } };
  }
  buildTransformList(e2) {
    let n2 = H, r2 = [], i2 = this.collada.querySelector(n2(298) + e2.id + `"]`);
    for (let e3 = 0; e3 < i2.childNodes.length; e3++) {
      let a2 = i2[n2(461)][e3];
      if (a2.nodeType !== 1) continue;
      let o2, s2;
      switch (a2.nodeName) {
        case n2(445):
          o2 = K(a2.textContent);
          let e4 = new z().fromArray(o2).transpose();
          r2[n2(379)]({ sid: a2[n2(442)](n2(449)), type: a2.nodeName, obj: e4 });
          break;
        case `translate`:
        case `scale`:
          o2 = K(a2.textContent), s2 = new b().fromArray(o2), r2.push({ sid: a2.getAttribute(n2(449)), type: a2.nodeName, obj: s2 });
          break;
        case `rotate`:
          o2 = K(a2.textContent), s2 = new b().fromArray(o2);
          let i3 = t.degToRad(o2[3]);
          r2.push({ sid: a2.getAttribute(`sid`), type: a2.nodeName, obj: s2, angle: i3 });
          break;
      }
    }
    return r2;
  }
  buildSkeleton(e2, t2) {
    let n2 = H, i2 = [], a2 = [], o2, s2, c2;
    for (o2 = 0; o2 < e2.length; o2++) {
      let r2 = e2[o2], a3;
      if (this.hasNode(r2)) a3 = this.getNode(r2), this[n2(258)](a3, t2, i2);
      else if (this.hasVisualScene(r2)) {
        let e3 = this.library.visualScenes[r2].children;
        for (let n3 = 0; n3 < e3.length; n3++) {
          let r3 = e3[n3];
          if (r3.type === `JOINT`) {
            let e4 = this.getNode(r3.id);
            this.buildBoneHierarchy(e4, t2, i2);
          }
        }
      } else console.error(`THREE.ColladaLoader: Unable to find root bone of skeleton with ID:`, r2);
    }
    for (o2 = 0; o2 < t2[n2(361)]; o2++) for (s2 = 0; s2 < i2.length; s2++) if (c2 = i2[s2], c2.bone[n2(428)] === t2[o2][n2(428)]) {
      a2[o2] = c2, c2.processed = true;
      break;
    }
    for (o2 = 0; o2 < i2.length; o2++) c2 = i2[o2], c2.processed === false && (a2.push(c2), c2[n2(358)] = true);
    let l2 = [], u2 = [];
    for (o2 = 0; o2 < a2[n2(361)]; o2++) c2 = a2[o2], l2.push(c2[n2(427)]), u2[n2(379)](c2.boneInverse);
    return new r(l2, u2);
  }
  buildBoneHierarchy(e2, t2, n2) {
    let r2 = H;
    e2[r2(462)](function(e3) {
      let i2 = r2;
      if (e3.isBone === true) {
        let r3;
        for (let n3 = 0; n3 < t2[i2(361)]; n3++) {
          let a2 = t2[n3];
          if (a2[i2(428)] === e3.name) {
            r3 = a2.boneInverse;
            break;
          }
        }
        r3 === void 0 && (r3 = new z()), n2.push({ bone: e3, boneInverse: r3, processed: false });
      }
    });
  }
  buildNode(e2) {
    let t2 = H, n2 = [], r2 = e2.matrix, i2 = e2.nodes, a2 = e2.type, o2 = e2.instanceCameras, s2 = e2.instanceControllers, c2 = e2.instanceLights, l2 = e2[t2(304)], u2 = e2.instanceNodes;
    for (let e3 = 0, t3 = i2.length; e3 < t3; e3++) n2.push(this.getNode(i2[e3]));
    for (let e3 = 0, r3 = o2[t2(361)]; e3 < r3; e3++) {
      let r4 = this.getCamera(o2[e3]);
      r4 !== null && n2.push(r4[t2(403)]());
    }
    for (let e3 = 0, r3 = s2.length; e3 < r3; e3++) {
      let r4 = s2[e3], i3 = this.getController(r4.id), a3 = this.getGeometry(i3.id), o3 = this.buildObjects(a3, r4.materials), c3 = r4.skeletons, l3 = i3.skin.joints, u3 = this[t2(302)](c3, l3);
      for (let e4 = 0, r5 = o3[t2(361)]; e4 < r5; e4++) {
        let t3 = o3[e4];
        t3.isSkinnedMesh && (t3.bind(u3, i3.skin.bindMatrix), t3.normalizeSkinWeights()), n2.push(t3);
      }
    }
    for (let e3 = 0, r3 = c2[t2(361)]; e3 < r3; e3++) {
      let t3 = this.getLight(c2[e3]);
      t3 !== null && n2.push(t3.clone());
    }
    for (let e3 = 0, t3 = l2.length; e3 < t3; e3++) {
      let t4 = l2[e3], r3 = this.getGeometry(t4.id), i3 = this.buildObjects(r3, t4.materials);
      for (let e4 = 0, t5 = i3.length; e4 < t5; e4++) n2.push(i3[e4]);
    }
    for (let e3 = 0, r3 = u2[t2(361)]; e3 < r3; e3++) n2[t2(379)](this.getNode(u2[e3]).clone());
    let d2;
    if (i2.length === 0 && n2.length === 1) d2 = n2[0];
    else {
      d2 = a2 === `JOINT` ? new P() : new D();
      for (let e3 = 0; e3 < n2.length; e3++) d2[t2(350)](n2[e3]);
    }
    return d2.name = a2 === `JOINT` ? e2[t2(449)] : e2.name, a2 !== `JOINT` && this.hasPivotTransforms(e2) ? this.wrapWithTransformHierarchy(d2, e2) : (d2.matrix[t2(394)](r2), d2[t2(445)].decompose(d2.position, d2[t2(267)], d2.scale), d2);
  }
  wrapWithTransformHierarchy(e2, n2) {
    let r2 = H, i2 = n2.id;
    this.transformNodes[i2] = {};
    let a2 = n2[r2(456)], o2 = n2.transformData, s2 = new D();
    s2[r2(428)] = n2.name;
    let c2 = s2;
    for (let e3 = 0; e3 < a2.length; e3++) {
      let s3 = a2[e3], l2 = o2[s3], u2 = new D();
      switch (u2.name = n2.name + `_` + s3, l2.type) {
        case `translate`:
          u2.position[r2(439)](l2.x, l2.y, l2.z);
          break;
        case `rotate`: {
          let e4 = new b(l2.axis[0], l2.axis[1], l2.axis[2]), n3 = t[r2(272)](l2.angle);
          u2.quaternion.setFromAxisAngle(e4, n3), u2.userData.rotationAxis = e4;
          break;
        }
        case `scale`:
          u2.scale[r2(439)](l2.x, l2.y, l2.z);
          break;
        case `matrix`:
          new z()[r2(431)](l2.array).transpose().decompose(u2.position, u2.quaternion, u2.scale);
          break;
      }
      this.transformNodes[i2][s3] = u2, c2.add(u2), c2 = u2;
    }
    return c2.add(e2), s2;
  }
  resolveMaterialBinding(e2, t2) {
    let n2 = H, r2 = [];
    for (let i2 = 0, a2 = e2.length; i2 < a2; i2++) {
      let a3 = t2[e2[i2]];
      a3 === void 0 ? (console[n2(348)](`THREE.ColladaLoader: Material with key %s not found. Apply fallback material.`, e2[i2]), r2.push(this.fallbackMaterial)) : r2.push(this.getMaterial(a3));
    }
    return r2;
  }
  get fallbackMaterial() {
    return this._fallbackMaterial === void 0 && (this._fallbackMaterial = new R({ name: I.DEFAULT_MATERIAL_NAME, color: 16711935 })), this._fallbackMaterial;
  }
  buildObjects(e2, t2) {
    let n2 = H, r2 = [];
    for (let a2 in e2) {
      let o2 = e2[a2], s2 = this.resolveMaterialBinding(o2.materialKeys, t2);
      if (s2.length === 0 && (a2 === `lines` || a2 === n2(335) ? s2.push(new x()) : s2.push(new i())), a2 === `lines` || a2 === `linestrips`) for (let e3 = 0, t3 = s2.length; e3 < t3; e3++) {
        let t4 = s2[e3];
        if (t4[n2(353)] === true || t4.isMeshLambertMaterial === true) {
          let r3 = new x();
          r3[n2(253)].copy(t4[n2(253)]), r3.opacity = t4[n2(362)], r3[n2(266)] = t4.transparent, s2[e3] = r3;
        }
      }
      let c2 = o2.data.attributes.skinIndex !== void 0, l2 = s2[n2(361)] === 1 ? s2[0] : s2, u2;
      switch (a2) {
        case `lines`:
          u2 = new O(o2.data, l2);
          break;
        case n2(335):
          u2 = new h(o2.data, l2);
          break;
        case n2(300):
        case `polygons`:
        case `polylist`:
          u2 = c2 ? new p(o2.data, l2) : new M(o2.data, l2);
          break;
      }
      r2.push(u2);
    }
    return r2;
  }
  [H(390)](e2) {
    return this.library.nodes[e2] !== void 0;
  }
  getNode(e2) {
    let t2 = H;
    return this.getBuild(this.library.nodes[e2], this[t2(360)].bind(this));
  }
  buildVisualScene(e2) {
    let t2 = new D();
    t2.name = e2.name;
    let n2 = e2.children;
    for (let e3 = 0; e3 < n2.length; e3++) {
      let r2 = n2[e3];
      t2.add(this.getNode(r2.id));
    }
    return t2;
  }
  [H(305)](e2) {
    return this.library.visualScenes[e2] !== void 0;
  }
  getVisualScene(e2) {
    let t2 = H;
    return this[t2(443)](this.library[t2(299)][e2], this.buildVisualScene.bind(this));
  }
  parseScene(e2) {
    let t2 = W(e2, `instance_visual_scene`)[0];
    return this.getVisualScene(this.parseId(t2.getAttribute(`url`)));
  }
  parseId(e2) {
    return e2.substring(1);
  }
  setupAnimations() {
    let e2 = H, t2 = this.library.clips;
    if (this[e2(303)](t2) === true) {
      if (this.isEmpty(this.library.animations) === false) {
        let e3 = [];
        for (let t3 in this.library.animations) {
          let n2 = this.getAnimation(t3);
          for (let t4 = 0, r2 = n2.length; t4 < r2; t4++) e3.push(n2[t4]);
        }
        this.buildDeferredPivotAnimationTracks(e3), this.animations.push(new _(`default`, -1, e3));
      }
    } else for (let e3 in t2) this.animations.push(this.getAnimationClip(e3));
  }
  buildDeferredPivotAnimationTracks(e2) {
    for (let t2 in this.deferredPivotAnimations) {
      let n2 = this.library.nodes[t2];
      if (!n2) continue;
      let r2 = this.deferredPivotAnimations[t2];
      this.buildTransformHierarchyTracks(t2, r2, n2, e2);
    }
  }
  buildTransformHierarchyTracks(e2, t2, n2, r2) {
    let i2 = H, a2 = this.transformNodes[e2];
    if (!a2) {
      console.warn(`THREE.ColladaLoader: Transform hierarchy not found for node:`, e2);
      return;
    }
    for (let e3 in t2) {
      let o2 = a2[e3];
      if (!o2) continue;
      let s2 = n2.transforms[e3], c2 = n2.transformData[e3], l2 = t2[e3];
      switch (s2) {
        case `translate`:
          this.buildHierarchyTranslateTrack(o2, l2, c2, r2);
          break;
        case `rotate`:
          this.buildHierarchyRotateTrack(o2, l2, c2, r2);
          break;
        case `scale`:
          this[i2(367)](o2, l2, c2, r2);
          break;
      }
    }
  }
  buildHierarchyTranslateTrack(e2, t2, n2, r2) {
    let i2 = H;
    if (t2.default && t2[i2(416)].stride === 3) {
      let n3 = t2.default, a3 = new N(e2.uuid + `.position`, Array.from(n3.times), Array.from(n3[i2(255)])), o3 = this[i2(357)](t2);
      this.applyInterpolation(a3, o3, t2), r2.push(a3);
      return;
    }
    let a2 = this.getTimesForAllAxes(t2);
    if (a2.length === 0) return;
    let o2 = [], s2 = this[i2(357)](t2);
    for (let e3 = 0; e3 < a2.length; e3++) {
      let r3 = a2[e3], s3 = this[i2(265)](t2.X, r3, n2.x), c3 = this[i2(265)](t2.Y, r3, n2.y), l2 = this[i2(265)](t2.Z, r3, n2.z);
      o2.push(s3, c3, l2);
    }
    let c2 = new N(e2.uuid + `.position`, a2, o2);
    this.applyInterpolation(c2, s2), r2.push(c2);
  }
  buildHierarchyRotateTrack(e2, n2, r2, i2) {
    let a2 = H, o2 = n2.ANGLE || n2.default;
    if (!o2) return;
    let s2 = Array.from(o2.times);
    if (s2.length === 0) return;
    let c2 = e2.userData[a2(312)] || new b(r2.axis[0], r2.axis[1], r2.axis[2]), l2 = new v(), u2 = new v(), d2 = [], f2 = this.getInterpolationInfo(n2);
    for (let e3 = 0; e3 < s2.length; e3++) {
      let n3 = s2[e3], i3 = this[a2(265)](o2, n3, r2.angle), f3 = t[a2(272)](i3);
      l2.setFromAxisAngle(c2, f3), e3 > 0 && u2.dot(l2) < 0 && (l2.x = -l2.x, l2.y = -l2.y, l2.z = -l2.z, l2.w = -l2.w), u2[a2(394)](l2), d2.push(l2.x, l2.y, l2.z, l2.w);
    }
    let p2 = new g(e2.uuid + `.quaternion`, s2, d2);
    this.applyInterpolation(p2, f2), i2.push(p2);
  }
  buildHierarchyScaleTrack(e2, t2, n2, r2) {
    let i2 = H;
    if (t2[i2(416)] && t2.default[i2(413)] === 3) {
      let n3 = t2.default, a3 = new N(e2[i2(404)] + `.scale`, Array.from(n3.times), Array.from(n3.values)), o3 = this.getInterpolationInfo(t2);
      this.applyInterpolation(a3, o3, t2), r2.push(a3);
      return;
    }
    let a2 = this[i2(332)](t2);
    if (a2.length === 0) return;
    let o2 = [], s2 = this.getInterpolationInfo(t2);
    for (let e3 = 0; e3 < a2[i2(361)]; e3++) {
      let r3 = a2[e3], s3 = this.getValueAtTime(t2.X, r3, n2.x), c3 = this[i2(265)](t2.Y, r3, n2.y), l2 = this.getValueAtTime(t2.Z, r3, n2.z);
      o2.push(s3, c3, l2);
    }
    let c2 = new N(e2.uuid + `.scale`, a2, o2);
    this.applyInterpolation(c2, s2), r2.push(c2);
  }
}, $ = class extends I {
  load(e2, t2, n2, r2) {
    let i2 = H, a2 = this, o2 = a2[i2(317)] === `` ? C.extractUrlBase(e2) : a2.path, s2 = new B(a2.manager);
    s2.setPath(a2.path), s2.setRequestHeader(a2[i2(424)]), s2[i2(399)](a2[i2(467)]), s2[i2(339)](e2, function(n3) {
      try {
        t2(a2.parse(n3, o2));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2.manager.itemError(e2);
      }
    }, n2, r2);
  }
  parse(e2, t2) {
    let n2 = H;
    if (e2[n2(361)] === 0) return { scene: new o() };
    let r2 = new Z().parse(e2);
    if (r2 === null) return null;
    let { library: i2, asset: a2, collada: s2 } = r2, c2 = new T(this.manager);
    c2.setPath(this.resourcePath || t2).setCrossOrigin(this[n2(429)]);
    let l2;
    U && (l2 = new U(this.manager), l2.setPath(this.resourcePath || t2));
    let { scene: u2, animations: d2, kinematics: f2 } = new Q(i2, s2, c2, l2).compose();
    return u2.animations = d2, a2.upAxis === `Z_UP` && (console[n2(348)](`THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289.`), u2[n2(290)][n2(439)](-Math.PI / 2, 0, 0)), u2.scale.multiplyScalar(a2.unit), { get animations() {
      return console.warn(n2(316)), d2;
    }, kinematics: f2, library: i2, scene: u2 };
  }
};
export {
  $ as ColladaLoader
};
