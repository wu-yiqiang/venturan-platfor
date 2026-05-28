import { H as e, K as t, U as n, V as r, mt as i, t as a, yt as o } from "./three.module-fqN0WVmI.js";
(function(e2, t2) {
  let n2 = c, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(396)) / 1 + -parseInt(n2(404)) / 2 * (-parseInt(n2(407)) / 3) + parseInt(n2(413)) / 4 * (-parseInt(n2(395)) / 5) + -parseInt(n2(408)) / 6 + parseInt(n2(405)) / 7 + parseInt(n2(394)) / 8 * (parseInt(n2(411)) / 9) + parseInt(n2(402)) / 10 * (-parseInt(n2(414)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(s, 744753);
function s() {
  let e2 = [`setPath`, `getFloat32`, `setAttribute`, `push`, `1328110dllcFy`, `error`, `394466reIKtY`, `7106141rSExSZ`, `addGroup`, `21WkqEkX`, `6497850EMPEtO`, `setWithCredentials`, `string`, `117rEvBif`, `getUint32`, `14724pyrkjS`, `11sVaMEi`, `360488YgdhGC`, `1420uKhEBq`, `24356mkurEi`, `manager`];
  return s = function() {
    return e2;
  }, s();
}
function c(e2, t2) {
  return e2 -= 394, s()[e2];
}
var l = class extends a {
  constructor(e2) {
    super(e2);
  }
  load(e2, t2, n2, r2) {
    let i2 = c, a2 = this, s2 = new o(this[i2(397)]);
    s2[i2(398)](this.path), s2.setResponseType(`arraybuffer`), s2.setRequestHeader(this.requestHeader), s2[i2(409)](this.withCredentials), s2.load(e2, function(n3) {
      try {
        t2(a2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2.manager.itemError(e2);
      }
    }, n2, r2);
  }
  parse(a2) {
    function o2(e2) {
      let t2 = c, n2 = new DataView(e2);
      if (84 + n2[t2(412)](80, true) * 50 === n2.byteLength) return true;
      let r2 = [115, 111, 108, 105, 100];
      for (let e3 = 0; e3 < 5; e3++) if (s2(r2, n2, e3)) return false;
      return true;
    }
    function s2(e2, t2, n2) {
      for (let r2 = 0, i2 = e2.length; r2 < i2; r2++) if (e2[r2] !== t2.getUint8(n2 + r2)) return false;
      return true;
    }
    function l2(n2) {
      let r2 = c, a3 = new DataView(n2), o3 = a3.getUint32(80, true), s3, l3, u2, d2 = false, f2, p2, m, h, g;
      for (let e2 = 0; e2 < 70; e2++) a3[r2(412)](e2, false) == 1129270351 && a3.getUint8(e2 + 4) == 82 && a3.getUint8(e2 + 5) == 61 && (d2 = true, f2 = new Float32Array(o3 * 3 * 3), p2 = a3.getUint8(e2 + 6) / 255, m = a3.getUint8(e2 + 7) / 255, h = a3.getUint8(e2 + 8) / 255, g = a3.getUint8(e2 + 9) / 255);
      let _ = new e(), v = new Float32Array(o3 * 3 * 3), y = new Float32Array(o3 * 3 * 3), b = new t();
      for (let e2 = 0; e2 < o3; e2++) {
        let t2 = 84 + e2 * 50, n3 = a3.getFloat32(t2, true), i2 = a3.getFloat32(t2 + 4, true), o4 = a3.getFloat32(t2 + 8, true);
        if (d2) {
          let e3 = a3.getUint16(t2 + 48, true);
          e3 & 32768 ? (s3 = p2, l3 = m, u2 = h) : (s3 = (e3 & 31) / 31, l3 = (e3 >> 5 & 31) / 31, u2 = (e3 >> 10 & 31) / 31);
        }
        for (let c2 = 1; c2 <= 3; c2++) {
          let p3 = t2 + c2 * 12, m2 = e2 * 3 * 3 + (c2 - 1) * 3;
          v[m2] = a3[r2(399)](p3, true), v[m2 + 1] = a3.getFloat32(p3 + 4, true), v[m2 + 2] = a3.getFloat32(p3 + 8, true), y[m2] = n3, y[m2 + 1] = i2, y[m2 + 2] = o4, d2 && (b.setRGB(s3, l3, u2, `srgb`), f2[m2] = b.r, f2[m2 + 1] = b.g, f2[m2 + 2] = b.b);
        }
      }
      return _[r2(400)](`position`, new i(v, 3)), _.setAttribute(`normal`, new i(y, 3)), d2 && (_.setAttribute(`color`, new i(f2, 3)), _.hasColors = true, _.alpha = g), _;
    }
    function u(t2) {
      let i2 = c, a3 = new e(), o3 = /solid([\s\S]*?)endsolid/g, s3 = /facet([\s\S]*?)endfacet/g, l3 = /solid\s(.+)/, u2 = 0, d2 = RegExp(`vertex[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)`, `g`), f2 = RegExp(`normal[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)[\\s]+([+-]?(?:\\d*)(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)`, `g`), p2 = [], m = [], h = [], g = new r(), _, v = 0, y = 0, b = 0;
      for (; (_ = o3.exec(t2)) !== null; ) {
        y = b;
        let e2 = _[0], t3 = (_ = l3.exec(e2)) === null ? `` : _[1];
        for (h.push(t3); (_ = s3.exec(e2)) !== null; ) {
          let e3 = 0, t4 = 0, n3 = _[0];
          for (; (_ = f2.exec(n3)) !== null; ) g.x = parseFloat(_[1]), g.y = parseFloat(_[2]), g.z = parseFloat(_[3]), t4++;
          for (; (_ = d2.exec(n3)) !== null; ) p2.push(parseFloat(_[1]), parseFloat(_[2]), parseFloat(_[3])), m[i2(401)](g.x, g.y, g.z), e3++, b++;
          t4 !== 1 && console.error(`THREE.STLLoader: Something isn't right with the normal of face number ` + u2), e3 !== 3 && console[i2(403)](`THREE.STLLoader: Something isn't right with the vertices of face number ` + u2), u2++;
        }
        let n2 = y, r2 = b - y;
        a3.userData.groupNames = h, a3[i2(406)](n2, r2, v), v++;
      }
      return a3.setAttribute(`position`, new n(p2, 3)), a3[i2(400)](`normal`, new n(m, 3)), a3;
    }
    function d(e2) {
      return typeof e2 == c(410) ? e2 : new TextDecoder().decode(e2);
    }
    function f(e2) {
      if (typeof e2 == `string`) {
        let t2 = new Uint8Array(e2.length);
        for (let n2 = 0; n2 < e2.length; n2++) t2[n2] = e2.charCodeAt(n2) & 255;
        return t2.buffer || t2;
      } else return e2;
    }
    let p = f(a2);
    return o2(p) ? l2(p) : u(d(a2));
  }
};
export {
  l as STLLoader
};
