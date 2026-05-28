import { H as e, K as t, Ot as n, U as r, ct as i, ft as a, rt as o, t as s, yt as c } from "./three.module-fqN0WVmI.js";
(function(e2, t2) {
  let n2 = u, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(503)) / 1 * (-parseInt(n2(498)) / 2) + -parseInt(n2(497)) / 3 * (parseInt(n2(519)) / 4) + -parseInt(n2(490)) / 5 + parseInt(n2(506)) / 6 * (-parseInt(n2(500)) / 7) + parseInt(n2(493)) / 8 + -parseInt(n2(522)) / 9 * (-parseInt(n2(529)) / 10) + -parseInt(n2(513)) / 11 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(l, 206123);
function l() {
  let e2 = `getFloat64.path.276170tmBxjp.width.buffer.1981096xGSIvD.normal_y.setAttribute.fields.315HZvhah.222VTVKZk.count.2541532VvCLyv.label.binary.2003dovuGd.size.split.6KKVjTV.itemError.type.viewpoint.search.length.Output buffer is not large enough.414018xSIAkp.setRequestHeader.rowSize.version.points.normal_x.2628szOLzy.getInt16.Invalid compressed data.126LbHoNd.push.str._getDataView.littleEndian.data.normal_z.186490CMQDXG.indexOf`.split(`.`);
  return l = function() {
    return e2;
  }, l();
}
function u(e2, t2) {
  return e2 -= 487, l()[e2];
}
var d = class extends s {
  constructor(e2) {
    super(e2), this.littleEndian = true;
  }
  load(e2, t2, n2, r2) {
    let i2 = u, a2 = this, o2 = new c(a2.manager);
    o2.setPath(a2[i2(489)]), o2.setResponseType(`arraybuffer`), o2[i2(514)](a2.requestHeader), o2.setWithCredentials(a2.withCredentials), o2.load(e2, function(n3) {
      let o3 = i2;
      try {
        t2(a2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2.manager[o3(507)](e2);
      }
    }, n2, r2);
  }
  _getDataView(e2, t2, n2, r2) {
    let i2 = u;
    switch (n2) {
      case `F`:
        return r2 === 8 ? e2[i2(488)](t2, this.littleEndian) : e2.getFloat32(t2, this.littleEndian);
      case `I`:
        return r2 === 1 ? e2.getInt8(t2) : r2 === 2 ? e2[i2(520)](t2, this.littleEndian) : e2.getInt32(t2, this.littleEndian);
      case `U`:
        return r2 === 1 ? e2.getUint8(t2) : r2 === 2 ? e2.getUint16(t2, this.littleEndian) : e2.getUint32(t2, this[i2(526)]);
    }
  }
  parse(s2) {
    let c2 = u;
    function l2(e2, t2) {
      let n2 = u, r2 = e2[n2(511)], i2 = new Uint8Array(t2), a2 = 0, o2 = 0, s3, c3, l3;
      do
        if (s3 = e2[a2++], s3 < 32) {
          if (s3++, o2 + s3 > t2) throw Error(n2(512));
          if (a2 + s3 > r2) throw Error(`Invalid compressed data`);
          do
            i2[o2++] = e2[a2++];
          while (--s3);
        } else {
          if (c3 = s3 >> 5, l3 = o2 - ((s3 & 31) << 8) - 1, a2 >= r2 || c3 === 7 && (c3 += e2[a2++], a2 >= r2)) throw Error(`Invalid compressed data`);
          if (l3 -= e2[a2++], o2 + c3 + 2 > t2) throw Error(n2(512));
          if (l3 < 0 || l3 >= o2) throw Error(n2(521));
          do
            i2[o2++] = i2[l3++];
          while (--c3 + 2);
        }
      while (a2 < r2);
      return i2;
    }
    function d2(e2) {
      let t2 = u, n2 = {}, r2 = new Uint8Array(e2), i2 = ``, a2 = ``, o2 = 0, s3 = false, c3 = r2.length;
      for (; o2 < c3 && s3 === false; ) {
        let e3 = String.fromCharCode(r2[o2++]);
        e3 === `
` || e3 === `\r` ? (a2.trim().toLowerCase().startsWith(`data`) && (s3 = true), a2 = ``) : a2 += e3, i2 += e3;
      }
      let l3 = i2[t2(510)](/[\r\n]DATA\s(\S*)\s/i), d3 = /[\r\n]DATA\s(\S*)\s/i.exec(i2.slice(l3 - 1));
      if (n2.data = d3[1], n2.headerLen = d3[0].length + l3, n2.str = i2.slice(0, n2.headerLen), n2.str = n2[t2(524)].replace(/#.*/gi, ``), n2.version = /^VERSION (.*)/im.exec(n2.str), n2[t2(496)] = /^FIELDS (.*)/im.exec(n2.str), n2.size = /^SIZE (.*)/im.exec(n2[t2(524)]), n2.type = /^TYPE (.*)/im.exec(n2.str), n2.count = /^COUNT (.*)/im.exec(n2.str), n2.width = /^WIDTH (.*)/im.exec(n2.str), n2.height = /^HEIGHT (.*)/im.exec(n2[t2(524)]), n2.viewpoint = /^VIEWPOINT (.*)/im.exec(n2.str), n2.points = /^POINTS (.*)/im.exec(n2[t2(524)]), n2.version !== null && (n2[t2(516)] = parseFloat(n2.version[1])), n2[t2(496)] = n2.fields === null ? [] : n2.fields[1].split(` `), n2.type !== null && (n2.type = n2.type[1].split(` `)), n2.width !== null && (n2[t2(491)] = parseInt(n2.width[1])), n2.height !== null && (n2.height = parseInt(n2.height[1])), n2.viewpoint !== null && (n2.viewpoint = n2[t2(509)][1]), n2.points !== null && (n2[t2(517)] = parseInt(n2[t2(517)][1], 10)), n2.points === null && (n2.points = n2.width * n2.height), n2.size !== null && (n2[t2(504)] = n2.size[1].split(` `).map(function(e3) {
        return parseInt(e3, 10);
      })), n2[t2(499)] !== null) n2.count = n2[t2(499)][1].split(` `).map(function(e3) {
        return parseInt(e3, 10);
      });
      else {
        n2[t2(499)] = [];
        for (let e3 = 0, r3 = n2.fields.length; e3 < r3; e3++) n2[t2(499)].push(1);
      }
      n2.offset = {};
      let f2 = 0;
      for (let e3 = 0, r3 = n2.fields.length; e3 < r3; e3++) n2[t2(527)] === `ascii` ? n2.offset[n2[t2(496)][e3]] = e3 : (n2.offset[n2.fields[e3]] = f2, f2 += n2[t2(504)][e3] * n2.count[e3]);
      return n2.rowSize = f2, n2;
    }
    let f = d2(s2), p = [], m = [], h = [], g = [], _ = [], v = new t();
    if (f.data === `ascii`) {
      let e2 = f.offset, t2 = new TextDecoder().decode(s2).slice(f.headerLen)[c2(505)](`
`);
      for (let r2 = 0, i2 = t2[c2(511)]; r2 < i2; r2++) {
        if (t2[r2] === ``) continue;
        let i3 = t2[r2].split(` `);
        if (e2.x !== void 0 && (p.push(parseFloat(i3[e2.x])), p.push(parseFloat(i3[e2.y])), p.push(parseFloat(i3[e2.z]))), e2.rgb !== void 0) {
          let t3 = f[c2(496)].findIndex((e3) => e3 === `rgb`), r3 = f.type[t3], a2 = parseFloat(i3[e2.rgb]), o2 = a2;
          if (r3 === `F`) {
            let e3 = new Float32Array(1);
            e3[0] = a2, o2 = new Int32Array(e3[c2(492)])[0];
          }
          let s3 = (o2 >> 16 & 255) / 255, l3 = (o2 >> 8 & 255) / 255, u2 = (o2 >> 0 & 255) / 255;
          v.setRGB(s3, l3, u2, n), h[c2(523)](v.r, v.g, v.b);
        }
        e2.normal_x !== void 0 && (m[c2(523)](parseFloat(i3[e2.normal_x])), m.push(parseFloat(i3[e2[c2(494)]])), m[c2(523)](parseFloat(i3[e2.normal_z]))), e2.intensity !== void 0 && g.push(parseFloat(i3[e2.intensity])), e2.label !== void 0 && _[c2(523)](parseInt(i3[e2.label]));
      }
    }
    if (f.data === `binary_compressed`) {
      let e2 = new Uint32Array(s2.slice(f.headerLen, f.headerLen + 8)), t2 = e2[0], r2 = e2[1], i2 = l2(new Uint8Array(s2, f.headerLen + 8, t2), r2), a2 = new DataView(i2.buffer), o2 = f.offset;
      for (let e3 = 0; e3 < f[c2(517)]; e3++) {
        if (o2.x !== void 0) {
          let t3 = f.fields.indexOf(`x`), n2 = f.fields.indexOf(`y`), r3 = f.fields.indexOf(`z`);
          p.push(this._getDataView(a2, f[c2(517)] * o2.x + f.size[t3] * e3, f.type[t3], f[c2(504)][t3])), p[c2(523)](this._getDataView(a2, f.points * o2.y + f.size[n2] * e3, f.type[n2], f.size[n2])), p.push(this[c2(525)](a2, f.points * o2.z + f.size[r3] * e3, f.type[r3], f.size[r3]));
        }
        if (o2.rgb !== void 0) {
          let t3 = f.fields.indexOf(`rgb`), r3 = a2.getUint8(f.points * o2.rgb + f.size[t3] * e3 + 2) / 255, i3 = a2.getUint8(f.points * o2.rgb + f.size[t3] * e3 + 1) / 255, s3 = a2.getUint8(f.points * o2.rgb + f[c2(504)][t3] * e3 + 0) / 255;
          v.setRGB(r3, i3, s3, n), h.push(v.r, v.g, v.b);
        }
        if (o2.normal_x !== void 0) {
          let t3 = f.fields.indexOf(`normal_x`), n2 = f.fields.indexOf(`normal_y`), r3 = f.fields.indexOf(`normal_z`);
          m.push(this[c2(525)](a2, f.points * o2.normal_x + f[c2(504)][t3] * e3, f.type[t3], f[c2(504)][t3])), m[c2(523)](this._getDataView(a2, f.points * o2.normal_y + f[c2(504)][n2] * e3, f[c2(508)][n2], f.size[n2])), m.push(this._getDataView(a2, f.points * o2[c2(528)] + f.size[r3] * e3, f.type[r3], f.size[r3]));
        }
        if (o2.intensity !== void 0) {
          let t3 = f[c2(496)].indexOf(`intensity`);
          g.push(this._getDataView(a2, f.points * o2.intensity + f.size[t3] * e3, f.type[t3], f[c2(504)][t3]));
        }
        if (o2[c2(501)] !== void 0) {
          let t3 = f.fields.indexOf(c2(501));
          _[c2(523)](this._getDataView(a2, f.points * o2.label + f[c2(504)][t3] * e3, f.type[t3], f.size[t3]));
        }
      }
    }
    if (f.data === c2(502)) {
      let e2 = new DataView(s2, f.headerLen), t2 = f.offset;
      for (let r2 = 0, i2 = 0; r2 < f[c2(517)]; r2++, i2 += f[c2(515)]) {
        if (t2.x !== void 0) {
          let n2 = f.fields.indexOf(`x`), r3 = f[c2(496)].indexOf(`y`), a2 = f[c2(496)][c2(487)](`z`);
          p.push(this._getDataView(e2, i2 + t2.x, f.type[n2], f[c2(504)][n2])), p.push(this._getDataView(e2, i2 + t2.y, f[c2(508)][r3], f.size[r3])), p[c2(523)](this[c2(525)](e2, i2 + t2.z, f.type[a2], f[c2(504)][a2]));
        }
        if (t2.rgb !== void 0) {
          let r3 = e2.getUint8(i2 + t2.rgb + 2) / 255, a2 = e2.getUint8(i2 + t2.rgb + 1) / 255, o2 = e2.getUint8(i2 + t2.rgb + 0) / 255;
          v.setRGB(r3, a2, o2, n), h.push(v.r, v.g, v.b);
        }
        if (t2[c2(518)] !== void 0) {
          let n2 = f[c2(496)].indexOf(`normal_x`), r3 = f.fields.indexOf(`normal_y`), a2 = f.fields.indexOf(`normal_z`);
          m.push(this._getDataView(e2, i2 + t2.normal_x, f.type[n2], f.size[n2])), m[c2(523)](this._getDataView(e2, i2 + t2[c2(494)], f.type[r3], f[c2(504)][r3])), m.push(this[c2(525)](e2, i2 + t2.normal_z, f.type[a2], f[c2(504)][a2]));
        }
        if (t2.intensity !== void 0) {
          let n2 = f.fields.indexOf(`intensity`);
          g[c2(523)](this._getDataView(e2, i2 + t2.intensity, f.type[n2], f.size[n2]));
        }
        if (t2[c2(501)] !== void 0) {
          let n2 = f.fields.indexOf(`label`);
          _[c2(523)](this._getDataView(e2, i2 + t2.label, f.type[n2], f.size[n2]));
        }
      }
    }
    let y = new e();
    p.length > 0 && y.setAttribute(`position`, new r(p, 3)), m.length > 0 && y.setAttribute(`normal`, new r(m, 3)), h[c2(511)] > 0 && y.setAttribute(`color`, new r(h, 3)), g.length > 0 && y.setAttribute(`intensity`, new r(g, 1)), _.length > 0 && y[c2(495)](c2(501), new a(_, 1)), y.computeBoundingSphere();
    let b = new o({ size: 5e-3 });
    return h.length > 0 && (b.vertexColors = true), new i(y, b);
  }
};
export {
  d as PCDLoader
};
