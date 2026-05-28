import { F as e, H as t, K as n, U as r, g as i, lt as a, t as o, yt as s } from "./three.module-fqN0WVmI.js";
import { n as c } from "./fflate.module-DqHR0NvN.js";
function l(e2, t2) {
  return e2 -= 237, u()[e2];
}
(function(e2, t2) {
  let n2 = l, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(256)) / 1 * (parseInt(n2(252)) / 2) + parseInt(n2(263)) / 3 + parseInt(n2(260)) / 4 * (-parseInt(n2(278)) / 5) + -parseInt(n2(279)) / 6 * (parseInt(n2(245)) / 7) + parseInt(n2(248)) / 8 + -parseInt(n2(275)) / 9 * (-parseInt(n2(274)) / 10) + -parseInt(n2(237)) / 11 * (parseInt(n2(258)) / 12) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(u, 627683);
function u() {
  let e2 = `228OcfaWk,nodeName,6226APPxZN,.amf,metadata,materialId,textContent,load,type,THREE.AMFLoader: Error loading AMF - no AMF document found.,160013wUNrNE,vertex,nextElementSibling,8198864XYKOSw,value,setResponseType,vertices,815578rxROiT,childNodes,setRequestHeader,AMF,3JonHWL,clone,42852EfsoBG,withCredentials,630404IoJDDS,object,attributes,718296BLhECw,toLowerCase,amf,normals,color,log,name,push,length,author,volumes,50qkVJkE,2137419RvQhmZ,getElementsByTagName,userData,5PvDXdE`.split(`,`);
  return u = function() {
    return e2;
  }, u();
}
var d = class extends o {
  constructor(e2) {
    super(e2);
  }
  load(e2, t2, n2, r2) {
    let i2 = l, a2 = this, o2 = new s(a2.manager);
    o2.setPath(a2.path), o2[i2(250)](`arraybuffer`), o2[i2(254)](a2.requestHeader), o2.setWithCredentials(a2[i2(259)]), o2[i2(242)](e2, function(n3) {
      try {
        t2(a2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2.manager.itemError(e2);
      }
    }, n2, r2);
  }
  parse(s2) {
    let u2 = l;
    function d2(e2) {
      let t2 = l, n2 = new DataView(e2);
      if (String.fromCharCode(n2.getUint8(0), n2.getUint8(1)) === `PK`) {
        let r3 = null, i3 = null;
        console.log(`THREE.AMFLoader: Loading Zip`);
        try {
          r3 = c(new Uint8Array(e2));
        } catch (e3) {
          if (e3 instanceof ReferenceError) return console.log(`THREE.AMFLoader: fflate missing and file is compressed.`), null;
        }
        for (i3 in r3) if (i3[t2(264)]().slice(-4) === t2(238)) break;
        console.log(`THREE.AMFLoader: Trying to load file asset: ` + i3), n2 = new DataView(r3[i3].buffer);
      }
      let r2 = new TextDecoder().decode(n2), i2 = new DOMParser().parseFromString(r2, `application/xml`);
      return i2.documentElement.nodeName.toLowerCase() === t2(265) ? i2 : (console.log(t2(244)), null);
    }
    function f(e2) {
      let t2 = l, n2 = 1, r2 = `millimeter`;
      e2.documentElement.attributes.unit !== void 0 && (r2 = e2.documentElement.attributes.unit.value.toLowerCase());
      let i2 = { millimeter: 1, inch: 25.4, feet: 304.8, meter: 1e3, micron: 1e-3 };
      return i2[r2] !== void 0 && (n2 = i2[r2]), console[t2(268)](`THREE.AMFLoader: Unit scale: ` + n2), n2;
    }
    function p(t2) {
      let r2 = l, i2 = `AMF Material`, a2 = t2.attributes.id.textContent, o2 = { r: 1, g: 1, b: 1, a: 1 }, s3 = null;
      for (let e2 = 0; e2 < t2[r2(253)].length; e2++) {
        let n2 = t2.childNodes[e2];
        n2.nodeName === `metadata` && n2.attributes.type !== void 0 ? n2.attributes.type.value === `name` && (i2 = n2.textContent) : n2[r2(280)] === `color` && (o2 = m(n2));
      }
      return s3 = new e({ flatShading: true, color: new n(o2.r, o2.g, o2.b), name: i2 }), o2.a !== 1 && (s3.transparent = true, s3.opacity = o2.a), { id: a2, material: s3 };
    }
    function m(e2) {
      let t2 = l, n2 = { r: 1, g: 1, b: 1, a: 1 };
      for (let r2 = 0; r2 < e2.childNodes.length; r2++) {
        let i2 = e2.childNodes[r2];
        i2.nodeName === `r` ? n2.r = i2.textContent : i2.nodeName === `g` ? n2.g = i2.textContent : i2.nodeName === `b` ? n2.b = i2[t2(241)] : i2.nodeName === `a` && (n2.a = i2.textContent);
      }
      return n2;
    }
    function h(e2) {
      let t2 = l, n2 = { name: ``, triangles: [], materialId: null }, r2 = e2.firstElementChild;
      for (e2.attributes.materialid !== void 0 && (n2.materialId = e2.attributes.materialid.nodeValue); r2; ) {
        if (r2[t2(280)] === `metadata`) r2.attributes[t2(243)] !== void 0 && r2.attributes.type.value === `name` && (n2.name = r2.textContent);
        else if (r2.nodeName === `triangle`) {
          let e3 = r2[t2(276)](`v1`)[0].textContent, i2 = r2.getElementsByTagName(`v2`)[0].textContent, a2 = r2.getElementsByTagName(`v3`)[0].textContent;
          n2.triangles.push(e3, i2, a2);
        }
        r2 = r2.nextElementSibling;
      }
      return n2;
    }
    function g(e2) {
      let t2 = l, n2 = [], r2 = [], i2 = e2.firstElementChild;
      for (; i2; ) {
        if (i2.nodeName === t2(246)) {
          let e3 = i2.firstElementChild;
          for (; e3; ) {
            if (e3.nodeName === `coordinates`) {
              let r3 = e3.getElementsByTagName(`x`)[0].textContent, i3 = e3.getElementsByTagName(`y`)[0][t2(241)], a2 = e3.getElementsByTagName(`z`)[0].textContent;
              n2.push(r3, i3, a2);
            } else if (e3.nodeName === `normal`) {
              let n3 = e3.getElementsByTagName(`nx`)[0].textContent, i3 = e3.getElementsByTagName(`ny`)[0].textContent, a2 = e3.getElementsByTagName(`nz`)[0].textContent;
              r2[t2(270)](n3, i3, a2);
            }
            e3 = e3[t2(247)];
          }
        }
        i2 = i2.nextElementSibling;
      }
      return { vertices: n2, normals: r2 };
    }
    function _(e2) {
      let t2 = l, n2 = e2[t2(262)].id.textContent, r2 = { name: `amfobject`, meshes: [] }, i2 = null, a2 = e2.firstElementChild;
      for (; a2; ) {
        if (a2.nodeName === t2(239)) a2.attributes.type !== void 0 && a2.attributes.type.value === `name` && (r2.name = a2[t2(241)]);
        else if (a2.nodeName === t2(267)) i2 = m(a2);
        else if (a2.nodeName === `mesh`) {
          let e3 = a2.firstElementChild, n3 = { vertices: [], normals: [], volumes: [], color: i2 };
          for (; e3; ) {
            if (e3.nodeName === t2(251)) {
              let r3 = g(e3);
              n3[t2(266)] = n3.normals.concat(r3.normals), n3.vertices = n3.vertices.concat(r3.vertices);
            } else e3.nodeName === `volume` && n3.volumes.push(h(e3));
            e3 = e3.nextElementSibling;
          }
          r2.meshes.push(n3);
        }
        a2 = a2.nextElementSibling;
      }
      return { id: n2, obj: r2 };
    }
    let v = d2(s2), y = ``, b = ``, x = f(v), S = {}, C = {}, w = v.documentElement.childNodes, T, E;
    for (T = 0; T < w.length; T++) {
      let e2 = w[T];
      if (e2.nodeName === `metadata`) e2.attributes[u2(243)] !== void 0 && (e2.attributes.type[u2(249)] === `name` ? y = e2.textContent : e2.attributes[u2(243)].value === `author` && (b = e2[u2(241)]));
      else if (e2.nodeName === `material`) {
        let t2 = p(e2);
        S[t2.id] = t2.material;
      } else if (e2.nodeName === u2(261)) {
        let t2 = _(e2);
        C[t2.id] = t2.obj;
      }
    }
    let D = new i(), O = new e({ name: o.DEFAULT_MATERIAL_NAME, color: 11184895, flatShading: true });
    D[u2(269)] = y, D[u2(277)][u2(272)] = b, D.userData.loader = u2(255);
    for (let e2 in C) {
      let o2 = C[e2], s3 = o2.meshes, c2 = new i();
      for (c2.name = o2.name || ``, T = 0; T < s3.length; T++) {
        let e3 = O, i2 = s3[T], o3 = new r(i2.vertices, 3), l2 = null;
        if (i2[u2(266)].length && (l2 = new r(i2.normals, 3)), i2.color) {
          let t2 = i2[u2(267)];
          e3 = O.clone(), e3.color = new n(t2.r, t2.g, t2.b), t2.a !== 1 && (e3.transparent = true, e3.opacity = t2.a);
        }
        let d3 = i2[u2(273)];
        for (E = 0; E < d3[u2(271)]; E++) {
          let n2 = d3[E], r2 = new t(), i3 = e3;
          r2.setIndex(n2.triangles), r2.setAttribute(`position`, o3.clone()), l2 && r2.setAttribute(`normal`, l2[u2(257)]()), S[n2.materialId] !== void 0 && (i3 = S[n2[u2(240)]]), r2.scale(x, x, x), c2.add(new a(r2, i3.clone()));
        }
      }
      D.add(c2);
    }
    return D;
  }
};
export {
  d as AMFLoader
};
