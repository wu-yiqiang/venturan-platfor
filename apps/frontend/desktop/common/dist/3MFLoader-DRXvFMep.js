import { F as e, Ft as t, H as n, Ht as r, K as i, Ot as a, Pt as o, U as s, Z as c, bt as l, c as u, g as d, j as f, lt as p, mt as m, st as h, t as g, v as _, yt as v } from "./three.module-fqN0WVmI.js";
import { n as y } from "./fflate.module-DqHR0NvN.js";
var b = w;
(function(e2, t2) {
  let n2 = w, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(222)) / 1 + parseInt(n2(265)) / 2 + -parseInt(n2(241)) / 3 + parseInt(n2(254)) / 4 * (parseInt(n2(219)) / 5) + -parseInt(n2(252)) / 6 * (parseInt(n2(274)) / 7) + parseInt(n2(215)) / 8 * (parseInt(n2(230)) / 9) + -parseInt(n2(224)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(x, 553562);
function x() {
  let e2 = "transform,build,data,querySelectorAll,xml,THREE.3MFLoader: Unsupported resource type.,model,6MvjMKr,mirror,180Yjagnw,querySelector,arraybuffer,color,magFilter,getAttribute,availableExtensions,nodeName,wrap,default,name,1219612rOyJTb,texture,CreationDate,Designer,setWithCredentials,split,metallicness,Description,resources,1559579hqDbzS,children,Title,triangles,roughness,application/xml,tilestyleu,identifier,push,THREE.3MFLoader: Error loading 3MF - no 3MF document found: ,material,176iYznrn,mesh,pindex,position,73525mqeiwA,add,i:out,176431XPZGHQ,THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.,4138150PYdyzU,basematerials,length,millimeter,requestHeader,match,30231JUJlJf,keys,objectid,Copyright,vertices,load,wrapT,objectId,texid,path,charAt,995058HbzTNf,displaypropertiesid,pid,clamp".split(`,`);
  return x = function() {
    return e2;
  }, x();
}
var S = a, C = class extends g {
  constructor(e2) {
    super(e2), this.availableExtensions = [];
  }
  [b(235)](e2, t2, n2, r2) {
    let i2 = b, a2 = this, o2 = new v(a2.manager);
    o2.setPath(a2[i2(239)]), o2.setResponseType(i2(256)), o2.setRequestHeader(a2[i2(228)]), o2[i2(269)](a2.withCredentials), o2.load(e2, function(n3) {
      try {
        t2(a2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2.manager.itemError(e2);
      }
    }, n2, r2);
  }
  parse(a2) {
    let v2 = this, b2 = new l(this.manager);
    function x2(e2) {
      let t2 = w, n2 = null, r2 = null, i2, a3, o2 = [], s2 = [], c2, l2 = {}, u2 = {}, d2 = {}, f2 = new TextDecoder();
      try {
        n2 = y(new Uint8Array(e2));
      } catch (e3) {
        if (e3 instanceof ReferenceError) return console.error(`THREE.3MFLoader: fflate missing and file is compressed.`), null;
      }
      let p2 = null;
      for (r2 in n2) r2.match(/\_rels\/.rels$/) ? i2 = r2 : r2[t2(229)](/3D\/_rels\/.*\.model\.rels$/) ? a3 = r2 : r2[t2(229)](/^3D\/[^\/]*\.model$/) ? p2 = r2 : r2.match(/^3D\/.*\/.*\.model$/) ? o2[t2(282)](r2) : r2.match(/^3D\/Textures?\/.*/) && s2.push(r2);
      if (o2.push(p2), i2 === void 0) throw Error(t2(223));
      let m2 = n2[i2], h2 = C2(f2.decode(m2));
      if (a3) {
        let e3 = n2[a3];
        c2 = C2(f2.decode(e3));
      }
      for (let e3 = 0; e3 < o2.length; e3++) {
        let r3 = o2[e3], i3 = n2[r3], a4 = f2.decode(i3), s3 = new DOMParser().parseFromString(a4, t2(279));
        s3.documentElement.nodeName.toLowerCase() !== `model` && console.error(t2(283), r3);
        let c3 = s3.querySelector(`model`), u3 = {};
        for (let e4 = 0; e4 < c3.attributes.length; e4++) {
          let n3 = c3.attributes[e4];
          n3[t2(264)][t2(229)](/^xmlns:(.+)$/) && (u3[n3.value] = RegExp.$1);
        }
        let d3 = z(c3);
        d3.xml = c3, 0 < Object.keys(u3)[t2(226)] && (d3.extensions = u3), l2[r3] = d3;
      }
      for (let e3 = 0; e3 < s2[t2(226)]; e3++) {
        let t3 = s2[e3];
        d2[t3] = n2[t3].buffer;
      }
      return { rels: h2, modelRels: c2, model: l2, printTicket: u2, texture: d2 };
    }
    function C2(e2) {
      let t2 = w, n2 = [], r2 = new DOMParser().parseFromString(e2, t2(279)).querySelectorAll(`Relationship`);
      for (let e3 = 0; e3 < r2[t2(226)]; e3++) {
        let i2 = r2[e3], a3 = { target: i2.getAttribute(`Target`), id: i2[t2(259)](`Id`), type: i2.getAttribute(`Type`) };
        n2[t2(282)](a3);
      }
      return n2;
    }
    function ee(e2) {
      let t2 = w, n2 = {};
      for (let r2 = 0; r2 < e2[t2(226)]; r2++) {
        let i2 = e2[r2], a3 = i2.getAttribute(`name`);
        0 <= [t2(276), t2(268), t2(272), t2(233), `LicenseTerms`, `Rating`, t2(267), `ModificationDate`].indexOf(a3) && (n2[a3] = i2.textContent);
      }
      return n2;
    }
    function T(e2) {
      let t2 = w, n2 = { id: e2.getAttribute(`id`), basematerials: [] }, r2 = e2.querySelectorAll(`base`);
      for (let e3 = 0; e3 < r2.length; e3++) {
        let i2 = r2[e3], a3 = j(i2);
        a3.index = e3, n2[t2(225)].push(a3);
      }
      return n2;
    }
    function E(e2) {
      let t2 = w;
      return { id: e2[t2(259)](`id`), path: e2.getAttribute(`path`), contenttype: e2[t2(259)](`contenttype`), tilestyleu: e2.getAttribute(`tilestyleu`), tilestylev: e2.getAttribute(`tilestylev`), filter: e2.getAttribute(`filter`) };
    }
    function D(e2) {
      let t2 = w, n2 = { id: e2[t2(259)](`id`), texid: e2[t2(259)](`texid`), displaypropertiesid: e2.getAttribute(`displaypropertiesid`) }, r2 = e2.querySelectorAll(`tex2coord`), i2 = [];
      for (let e3 = 0; e3 < r2.length; e3++) {
        let t3 = r2[e3], n3 = t3.getAttribute(`u`), a3 = t3.getAttribute(`v`);
        i2.push(parseFloat(n3), parseFloat(a3));
      }
      return n2.uvs = new Float32Array(i2), n2;
    }
    function te(e2) {
      let t2 = w, n2 = { id: e2.getAttribute(`id`), displaypropertiesid: e2.getAttribute(t2(242)) }, r2 = e2.querySelectorAll(`color`), a3 = [], o2 = new i();
      for (let e3 = 0; e3 < r2.length; e3++) {
        let t3 = r2[e3].getAttribute(`color`);
        o2.setStyle(t3.substring(0, 7), S), a3.push(o2.r, o2.g, o2.b);
      }
      return n2.colors = new Float32Array(a3), n2;
    }
    function O(e2) {
      let t2 = w, n2 = e2[t2(275)], r2 = {};
      for (let e3 = 0; e3 < n2.length; e3++) {
        let i2 = { type: n2[e3].nodeName.substring(2) };
        for (let t3 = 0; t3 < n2[e3].attributes.length; t3++) {
          let r3 = n2[e3].attributes[t3];
          r3.specified && (i2[r3.name] = r3.value);
        }
        r2[n2[e3].getAttribute(t2(281))] = i2;
      }
      return r2;
    }
    function k(e2) {
      let t2 = w, n2 = { id: e2[t2(259)](`id`), displayname: e2[t2(259)](`displayname`) }, r2 = e2.children, i2 = {};
      for (let e3 = 0; e3 < r2.length; e3++) {
        let n3 = r2[e3];
        if (n3[t2(261)] === `i:in` || n3.nodeName === t2(221)) i2[n3.nodeName === `i:in` ? `inputs` : `outputs`] = O(n3);
        else {
          let e4 = n3[t2(275)], r3 = { op: n3.nodeName.substring(2), identifier: n3[t2(259)](`identifier`) };
          for (let t3 = 0; t3 < e4.length; t3++) r3[e4[t3].nodeName.substring(2)] = O(e4[t3]);
          i2[r3.identifier] = r3;
        }
      }
      return n2.operations = i2, n2;
    }
    function A(e2) {
      let t2 = w, n2 = { id: e2[t2(259)](`id`) }, r2 = e2.querySelectorAll(`pbmetallic`), i2 = [];
      for (let e3 = 0; e3 < r2.length; e3++) {
        let n3 = r2[e3];
        i2.push({ name: n3.getAttribute(`name`), metallicness: parseFloat(n3.getAttribute(`metallicness`)), roughness: parseFloat(n3[t2(259)](`roughness`)) });
      }
      return n2.data = i2, n2;
    }
    function j(e2) {
      let t2 = w, n2 = {};
      return n2.name = e2.getAttribute(`name`), n2.displaycolor = e2[t2(259)](`displaycolor`), n2.displaypropertiesid = e2.getAttribute(t2(242)), n2;
    }
    function M(e2) {
      let t2 = w, n2 = {}, r2 = [], i2 = e2.querySelectorAll(`vertices vertex`);
      for (let e3 = 0; e3 < i2.length; e3++) {
        let t3 = i2[e3], n3 = t3.getAttribute(`x`), a4 = t3.getAttribute(`y`), o3 = t3.getAttribute(`z`);
        r2.push(parseFloat(n3), parseFloat(a4), parseFloat(o3));
      }
      n2.vertices = new Float32Array(r2);
      let a3 = [], o2 = [], s2 = e2.querySelectorAll(`triangles triangle`);
      for (let e3 = 0; e3 < s2.length; e3++) {
        let n3 = s2[e3], r3 = n3.getAttribute(`v1`), i3 = n3[t2(259)](`v2`), c2 = n3.getAttribute(`v3`), l2 = n3.getAttribute(`p1`), u2 = n3[t2(259)](`p2`), d2 = n3.getAttribute(`p3`), f2 = n3.getAttribute(`pid`), p2 = {};
        p2.v1 = parseInt(r3, 10), p2.v2 = parseInt(i3, 10), p2.v3 = parseInt(c2, 10), o2[t2(282)](p2.v1, p2.v2, p2.v3), l2 && (p2.p1 = parseInt(l2, 10)), u2 && (p2.p2 = parseInt(u2, 10)), d2 && (p2.p3 = parseInt(d2, 10)), f2 && (p2.pid = f2), 0 < Object.keys(p2).length && a3[t2(282)](p2);
      }
      return n2.triangleProperties = a3, n2[t2(277)] = new Uint32Array(o2), n2;
    }
    function N(e2) {
      let t2 = [], n2 = e2.querySelectorAll(`component`);
      for (let e3 = 0; e3 < n2.length; e3++) {
        let r2 = n2[e3], i2 = P(r2);
        t2.push(i2);
      }
      return t2;
    }
    function P(e2) {
      let t2 = w, n2 = {};
      n2.objectId = e2[t2(259)](t2(232));
      let r2 = e2.getAttribute(t2(245));
      return r2 && (n2.transform = F(r2)), n2;
    }
    function F(e2) {
      let t2 = w, n2 = [];
      e2[t2(270)](` `).forEach(function(e3) {
        n2.push(parseFloat(e3));
      });
      let r2 = new _();
      return r2.set(n2[0], n2[3], n2[6], n2[9], n2[1], n2[4], n2[7], n2[10], n2[2], n2[5], n2[8], n2[11], 0, 0, 0, 1), r2;
    }
    function I(e2) {
      let t2 = w, n2 = { type: e2.getAttribute(`type`) }, r2 = e2[t2(259)](`id`);
      r2 && (n2.id = r2);
      let i2 = e2[t2(259)](`pid`);
      i2 && (n2.pid = i2);
      let a3 = e2.getAttribute(`pindex`);
      a3 && (n2.pindex = a3);
      let o2 = e2.getAttribute(`thumbnail`);
      o2 && (n2.thumbnail = o2);
      let s2 = e2.getAttribute(`partnumber`);
      s2 && (n2.partnumber = s2);
      let c2 = e2.getAttribute(t2(264));
      c2 && (n2.name = c2);
      let l2 = e2[t2(255)](`mesh`);
      l2 && (n2[t2(216)] = M(l2));
      let u2 = e2.querySelector(`components`);
      return u2 && (n2.components = N(u2)), n2;
    }
    function L(e2) {
      let t2 = w, n2 = {};
      n2.basematerials = {};
      let r2 = e2.querySelectorAll(`basematerials`);
      for (let e3 = 0; e3 < r2[t2(226)]; e3++) {
        let t3 = r2[e3], i3 = T(t3);
        n2.basematerials[i3.id] = i3;
      }
      n2.texture2d = {};
      let i2 = e2.querySelectorAll(`texture2d`);
      for (let e3 = 0; e3 < i2.length; e3++) {
        let t3 = i2[e3], r3 = E(t3);
        n2.texture2d[r3.id] = r3;
      }
      n2.colorgroup = {};
      let a3 = e2[t2(248)](`colorgroup`);
      for (let e3 = 0; e3 < a3.length; e3++) {
        let t3 = a3[e3], r3 = te(t3);
        n2.colorgroup[r3.id] = r3;
      }
      let o2 = e2.querySelectorAll(`implicitfunction`);
      o2.length > 0 && (n2.implicitfunction = {});
      for (let e3 = 0; e3 < o2[t2(226)]; e3++) {
        let t3 = o2[e3], r3 = k(t3);
        n2.implicitfunction[r3.id] = r3;
      }
      n2.pbmetallicdisplayproperties = {};
      let s2 = e2[t2(248)](`pbmetallicdisplayproperties`);
      for (let e3 = 0; e3 < s2[t2(226)]; e3++) {
        let t3 = s2[e3], r3 = A(t3);
        n2.pbmetallicdisplayproperties[r3.id] = r3;
      }
      n2.texture2dgroup = {};
      let c2 = e2.querySelectorAll(`texture2dgroup`);
      for (let e3 = 0; e3 < c2[t2(226)]; e3++) {
        let t3 = c2[e3], r3 = D(t3);
        n2.texture2dgroup[r3.id] = r3;
      }
      n2.object = {};
      let l2 = e2[t2(248)](`object`);
      for (let e3 = 0; e3 < l2[t2(226)]; e3++) {
        let t3 = l2[e3], r3 = I(t3);
        n2.object[r3.id] = r3;
      }
      return n2;
    }
    function R(e2) {
      let t2 = w, n2 = [], r2 = e2.querySelectorAll(`item`);
      for (let e3 = 0; e3 < r2.length; e3++) {
        let i2 = r2[e3], a3 = { objectId: i2.getAttribute(t2(232)) }, o2 = i2.getAttribute(`transform`);
        o2 && (a3.transform = F(o2)), n2[t2(282)](a3);
      }
      return n2;
    }
    function z(e2) {
      let t2 = w, n2 = { unit: e2.getAttribute(`unit`) || t2(227) }, r2 = e2[t2(248)](`metadata`);
      r2 && (n2.metadata = ee(r2));
      let i2 = e2.querySelector(`resources`);
      i2 && (n2.resources = L(i2));
      let a3 = e2.querySelector(`build`);
      return a3 && (n2.build = R(a3)), n2;
    }
    function B(e2, n2, i2, a3) {
      let s2 = w, l2 = e2[s2(238)], u2 = i2.resources.texture2d[l2];
      if (u2) {
        let e3 = a3[u2.path], n3 = u2.contenttype, i3 = new Blob([e3], { type: n3 }), l3 = URL.createObjectURL(i3), d2 = b2.load(l3, function() {
          URL.revokeObjectURL(l3);
        });
        switch (d2.colorSpace = S, u2[s2(280)]) {
          case s2(262):
            d2.wrapS = h;
            break;
          case s2(253):
            d2.wrapS = o;
            break;
          case `none`:
          case `clamp`:
            d2.wrapS = c;
            break;
          default:
            d2.wrapS = h;
        }
        switch (u2.tilestylev) {
          case `wrap`:
            d2[s2(236)] = h;
            break;
          case `mirror`:
            d2.wrapT = o;
            break;
          case `none`:
          case s2(244):
            d2[s2(236)] = c;
            break;
          default:
            d2.wrapT = h;
        }
        switch (u2.filter) {
          case `auto`:
            d2[s2(258)] = f, d2.minFilter = t;
            break;
          case `linear`:
            d2.magFilter = f, d2.minFilter = f, d2.generateMipmaps = false;
            break;
          case `nearest`:
            d2.magFilter = r, d2.minFilter = r, d2.generateMipmaps = false;
            break;
          default:
            d2.magFilter = f, d2.minFilter = t;
        }
        return d2;
      } else return null;
    }
    function V(e2, t2, r2, i2, a3, o2, c2) {
      let l2 = w, u2 = c2[l2(217)], d2 = {};
      for (let e3 = 0, n2 = t2.length; e3 < n2; e3++) {
        let n3 = t2[e3], r3 = n3.p1 === void 0 ? u2 : n3.p1;
        d2[r3] === void 0 && (d2[r3] = []), d2[r3].push(n3);
      }
      let f2 = Object.keys(d2), m2 = [];
      for (let t3 = 0, u3 = f2.length; t3 < u3; t3++) {
        let u4 = f2[t3], h2 = d2[u4], g2 = e2[l2(225)][u4], _2 = X(g2, i2, a3, o2, c2, Z), v3 = new n(), y2 = [], b3 = r2.vertices;
        for (let e3 = 0, t4 = h2.length; e3 < t4; e3++) {
          let t5 = h2[e3];
          y2.push(b3[t5.v1 * 3 + 0]), y2.push(b3[t5.v1 * 3 + 1]), y2.push(b3[t5.v1 * 3 + 2]), y2.push(b3[t5.v2 * 3 + 0]), y2.push(b3[t5.v2 * 3 + 1]), y2[l2(282)](b3[t5.v2 * 3 + 2]), y2.push(b3[t5.v3 * 3 + 0]), y2.push(b3[t5.v3 * 3 + 1]), y2.push(b3[t5.v3 * 3 + 2]);
        }
        v3.setAttribute(`position`, new s(y2, 3));
        let x3 = new p(v3, _2);
        m2[l2(282)](x3);
      }
      return m2;
    }
    function H(t2, r2, i2, a3, o2, c2, l2) {
      let u2 = w, d2 = new n(), f2 = [], m2 = [], h2 = i2[u2(234)], g2 = t2.uvs;
      for (let e2 = 0, t3 = r2.length; e2 < t3; e2++) {
        let t4 = r2[e2];
        f2[u2(282)](h2[t4.v1 * 3 + 0]), f2.push(h2[t4.v1 * 3 + 1]), f2.push(h2[t4.v1 * 3 + 2]), f2.push(h2[t4.v2 * 3 + 0]), f2.push(h2[t4.v2 * 3 + 1]), f2.push(h2[t4.v2 * 3 + 2]), f2.push(h2[t4.v3 * 3 + 0]), f2.push(h2[t4.v3 * 3 + 1]), f2.push(h2[t4.v3 * 3 + 2]), m2.push(g2[t4.p1 * 2 + 0]), m2.push(g2[t4.p1 * 2 + 1]), m2.push(g2[t4.p2 * 2 + 0]), m2.push(g2[t4.p2 * 2 + 1]), m2.push(g2[t4.p3 * 2 + 0]), m2.push(g2[t4.p3 * 2 + 1]);
      }
      return d2.setAttribute(`position`, new s(f2, 3)), d2.setAttribute(`uv`, new s(m2, 2)), new p(d2, new e({ map: X(t2, a3, o2, c2, l2, B), flatShading: true }));
    }
    function U(t2, r2, i2, a3) {
      let o2 = w, c2 = new n(), l2 = [], u2 = [], d2 = i2.vertices, f2 = t2.colors;
      for (let e2 = 0, t3 = r2.length; e2 < t3; e2++) {
        let t4 = r2[e2], n2 = t4.v1, i3 = t4.v2, s2 = t4.v3;
        l2[o2(282)](d2[n2 * 3 + 0]), l2[o2(282)](d2[n2 * 3 + 1]), l2[o2(282)](d2[n2 * 3 + 2]), l2[o2(282)](d2[i3 * 3 + 0]), l2.push(d2[i3 * 3 + 1]), l2.push(d2[i3 * 3 + 2]), l2.push(d2[s2 * 3 + 0]), l2[o2(282)](d2[s2 * 3 + 1]), l2.push(d2[s2 * 3 + 2]);
        let c3 = t4.p1 === void 0 ? a3.pindex : t4.p1, p2 = t4.p2 === void 0 ? c3 : t4.p2, m2 = t4.p3 === void 0 ? c3 : t4.p3;
        u2.push(f2[c3 * 3 + 0]), u2.push(f2[c3 * 3 + 1]), u2.push(f2[c3 * 3 + 2]), u2.push(f2[p2 * 3 + 0]), u2.push(f2[p2 * 3 + 1]), u2.push(f2[p2 * 3 + 2]), u2.push(f2[m2 * 3 + 0]), u2.push(f2[m2 * 3 + 1]), u2.push(f2[m2 * 3 + 2]);
      }
      return c2.setAttribute(o2(218), new s(l2, 3)), c2.setAttribute(o2(257), new s(u2, 3)), new p(c2, new e({ vertexColors: true, flatShading: true }));
    }
    function W(t2) {
      let r2 = w, i2 = new n();
      return i2.setIndex(new m(t2.triangles, 1)), i2.setAttribute(r2(218), new m(t2.vertices, 3)), new p(i2, new e({ name: g.DEFAULT_MATERIAL_NAME, color: 16777215, flatShading: true }));
    }
    function G(e2, t2, n2, r2, i2, a3) {
      let o2 = w, s2 = Object.keys(e2), c2 = [];
      for (let l2 = 0, u2 = s2.length; l2 < u2; l2++) {
        let u3 = s2[l2], d2 = e2[u3];
        switch (K(u3, r2)) {
          case `material`:
            let e3 = r2[o2(273)][o2(225)][u3], s3 = V(e3, d2, t2, n2, r2, i2, a3);
            for (let e4 = 0, t3 = s3.length; e4 < t3; e4++) c2.push(s3[e4]);
            break;
          case o2(266):
            let l3 = r2.resources.texture2dgroup[u3];
            c2.push(H(l3, d2, t2, n2, r2, i2, a3));
            break;
          case `vertexColors`:
            let f2 = r2.resources.colorgroup[u3];
            c2.push(U(f2, d2, t2, a3));
            break;
          case o2(263):
            c2[o2(282)](W(t2));
            break;
          default:
            console.error(o2(250));
        }
      }
      if (a3.name) for (let e3 = 0; e3 < c2.length; e3++) c2[e3].name = a3.name;
      return c2;
    }
    function K(e2, t2) {
      let n2 = w;
      if (t2.resources.texture2dgroup[e2] !== void 0) return `texture`;
      if (t2.resources.basematerials[e2] !== void 0) return n2(214);
      if (t2.resources.colorgroup[e2] !== void 0) return `vertexColors`;
      if (e2 === `default`) return `default`;
    }
    function q(e2, t2) {
      let n2 = w, r2 = {}, i2 = e2.triangleProperties, a3 = t2[n2(243)];
      for (let e3 = 0, t3 = i2[n2(226)]; e3 < t3; e3++) {
        let t4 = i2[e3], o2 = t4[n2(243)] === void 0 ? a3 : t4.pid;
        o2 === void 0 && (o2 = n2(263)), r2[o2] === void 0 && (r2[o2] = []), r2[o2].push(t4);
      }
      return r2;
    }
    function J(e2, t2, n2, r2, i2) {
      let a3 = w, o2 = new d(), s2 = G(q(e2, i2), e2, t2, n2, r2, i2);
      for (let e3 = 0, t3 = s2.length; e3 < t3; e3++) o2[a3(220)](s2[e3]);
      return o2;
    }
    function Y(e2, t2, n2) {
      let r2 = w;
      if (!e2) return;
      let i2 = [], a3 = Object[r2(231)](e2);
      for (let e3 = 0; e3 < a3.length; e3++) {
        let t3 = a3[e3];
        for (let e4 = 0; e4 < v2[r2(260)].length; e4++) {
          let n3 = v2.availableExtensions[e4];
          n3.ns === t3 && i2.push(n3);
        }
      }
      for (let r3 = 0; r3 < i2.length; r3++) {
        let a4 = i2[r3];
        a4.apply(n2, e2[a4.ns], t2);
      }
    }
    function X(e2, t2, n2, r2, i2, a3) {
      let o2 = w;
      return e2.build === void 0 && (e2.build = a3(e2, t2, n2, r2, i2)), e2[o2(246)];
    }
    function Z(t2, n2, r2) {
      let i2 = w, a3, o2 = t2[i2(242)], s2 = r2.resources.pbmetallicdisplayproperties;
      if (o2 !== null && s2[o2] !== void 0) {
        let e2 = s2[o2][i2(247)][t2.index];
        a3 = new u({ flatShading: true, roughness: e2[i2(278)], metalness: e2[i2(271)] });
      } else a3 = new e({ flatShading: true });
      a3.name = t2.name;
      let c2 = t2.displaycolor, l2 = c2.substring(0, 7);
      return a3.color.setStyle(l2, S), c2[i2(226)] === 9 && (a3.opacity = parseInt(c2.charAt(7) + c2[i2(240)](8), 16) / 255), a3;
    }
    function ne(e2, t2, n2, r2) {
      let i2 = w, a3 = new d();
      for (let o2 = 0; o2 < e2.length; o2++) {
        let s2 = e2[o2], c2 = t2[s2.objectId];
        c2 === void 0 && (Q(s2.objectId, t2, n2, r2), c2 = t2[s2[i2(237)]]);
        let l2 = c2.clone(), u2 = s2[i2(245)];
        u2 && l2.applyMatrix4(u2), a3.add(l2);
      }
      return a3;
    }
    function Q(e2, t2, n2, r2) {
      let i2 = w, a3 = n2.resources.object[e2];
      if (a3[i2(216)]) {
        let e3 = a3.mesh, o2 = n2.extensions, s2 = n2[i2(249)];
        Y(o2, e3, s2), t2[a3.id] = X(e3, t2, n2, r2, a3, J);
      } else {
        let e3 = a3.components;
        t2[a3.id] = X(e3, t2, n2, r2, a3, ne);
      }
      a3.name && (t2[a3.id].name = a3.name), n2.resources.implicitfunction && console.warn(`THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.`, n2.resources.implicitfunction);
    }
    function re(e2) {
      let t2 = w, n2 = e2.model, r2 = e2.modelRels, i2 = {}, a3 = Object.keys(n2), o2 = {};
      if (r2) for (let t3 = 0, n3 = r2.length; t3 < n3; t3++) {
        let n4 = r2[t3], i3 = n4.target.substring(1);
        e2.texture[i3] && (o2[n4.target] = e2.texture[i3]);
      }
      for (let e3 = 0; e3 < a3.length; e3++) {
        let r3 = n2[a3[e3]], s2 = Object[t2(231)](r3.resources.object);
        for (let e4 = 0; e4 < s2.length; e4++) {
          let t3 = s2[e4];
          Q(t3, i2, r3, o2);
        }
      }
      return i2;
    }
    function ie(e2) {
      let t2 = w;
      for (let n2 = 0; n2 < e2.length; n2++) {
        let r2 = e2[n2];
        if (r2.target.split(`.`).pop().toLowerCase() === t2(251)) return r2;
      }
    }
    function ae(e2, t2) {
      let n2 = w, r2 = new d(), i2 = ie(t2.rels), a3 = t2[n2(251)][i2.target.substring(1)].build;
      for (let t3 = 0; t3 < a3.length; t3++) {
        let n3 = a3[t3], i3 = e2[n3.objectId].clone(), o2 = n3.transform;
        o2 && i3.applyMatrix4(o2), r2.add(i3);
      }
      return r2;
    }
    let $ = x2(a2);
    return ae(re($), $);
  }
  addExtension(e2) {
    let t2 = b;
    this.availableExtensions[t2(282)](e2);
  }
};
function w(e2, t2) {
  return e2 -= 214, x()[e2];
}
export {
  C as ThreeMFLoader
};
