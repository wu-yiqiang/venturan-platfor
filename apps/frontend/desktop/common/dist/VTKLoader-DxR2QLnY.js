import { H as e, K as t, Ot as n, U as r, mt as i, t as a, yt as o } from "./three.module-fqN0WVmI.js";
import { t as s } from "./fflate.module-DqHR0NvN.js";
var c = u;
function l() {
  let e2 = `THREE.VTKLoader: The loader has been deprecated and will be removed with r194. Export your VTK files to glTF before using them on the web.,1227002LAetrb,Int32,push,PolyData,Verts,childNodes,hasChildNodes,Piece,includes,set,path,text,114twfOvd,getFloat32,charCodeAt,next,Float32,Points,setAttribute,split,byteLength,binary,isArray,PointData,16224400BXGzaW,parse,469191dezEQH,Unsupported DATASET type: ,Name,join,6517904aacurs,decode,6749475UOQGIo,slice,format,attributes,502649bXsCfz,setIndex,setPath,POINTS,#text,type,Int64,3196918IpNHTg,DataArray,length,NumberOfPolys`.split(`,`);
  return l = function() {
    return e2;
  }, l();
}
function u(e2, t2) {
  return e2 -= 359, l()[e2];
}
(function(e2, t2) {
  let n2 = u, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(390)) / 1 + parseInt(n2(385)) / 2 + parseInt(n2(368)) / 3 + -parseInt(n2(372)) / 4 + parseInt(n2(374)) / 5 + -parseInt(n2(402)) / 6 * (parseInt(n2(378)) / 7) + parseInt(n2(366)) / 8 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(l, 911990);
var d = class extends a {
  constructor(e2) {
    let t2 = u;
    super(e2), console.warn(t2(389));
  }
  load(e2, t2, n2, r2) {
    let i2 = u, a2 = this, s2 = new o(a2.manager);
    s2[i2(380)](a2[i2(400)]), s2.setResponseType(`arraybuffer`), s2.setRequestHeader(a2.requestHeader), s2.setWithCredentials(a2.withCredentials), s2.load(e2, function(n3) {
      try {
        t2(a2.parse(n3));
      } catch (t3) {
        r2 ? r2(t3) : console.error(t3), a2.manager.itemError(e2);
      }
    }, n2, r2);
  }
  [c(367)](a2) {
    let o2 = c;
    function l2(i2) {
      let a3 = u, o3 = [], s2 = [], c2 = [], l3 = [], d3, f2 = /^[^\d.\s-]+/;
      function p2(e2) {
        let t2 = u, n2 = [], r2 = e2.split(/\s+/);
        for (let e3 = 0; e3 < r2[t2(387)]; e3++) r2[e3] !== `` && n2[t2(392)](parseFloat(r2[e3]));
        return n2;
      }
      let m2 = /^(\d+)\s+([\s\d]*)/, h2 = /^POINTS /, g2 = /^POLYGONS /, _ = /^TRIANGLE_STRIPS /, v = /^POINT_DATA[ ]+(\d+)/, y = /^CELL_DATA[ ]+(\d+)/, b = /^COLOR_SCALARS[ ]+(\w+)[ ]+3/, x = /^NORMALS[ ]+(\w+)[ ]+(\w+)/, S = false, C = false, w = false, T = false, E = false, D = false, O = false, k = new t(), A = i2[a3(361)](`
`);
      for (let e2 in A) {
        let t2 = A[e2].trim();
        if (t2.indexOf(`DATASET`) === 0) {
          let e3 = t2.split(` `)[1];
          if (e3 !== `POLYDATA`) throw Error(`Unsupported DATASET type: ` + e3);
        } else if (S) {
          if (f2.exec(t2) === null) {
            let e3 = p2(t2);
            for (let t3 = 0; t3 + 2 < e3.length; t3 += 3) s2.push(e3[t3], e3[t3 + 1], e3[t3 + 2]);
          }
        } else if (C) {
          if ((d3 = m2.exec(t2)) !== null) {
            let e3 = parseInt(d3[1]), t3 = d3[2][a3(361)](/\s+/);
            if (e3 >= 3) {
              let n2 = parseInt(t3[0]), r2 = 1;
              for (let i3 = 0; i3 < e3 - 2; ++i3) {
                let e4 = parseInt(t3[r2]), i4 = parseInt(t3[r2 + 1]);
                o3.push(n2, e4, i4), r2++;
              }
            }
          }
        } else if (w) {
          if ((d3 = m2.exec(t2)) !== null) {
            let e3 = parseInt(d3[1]), t3 = d3[2][a3(361)](/\s+/);
            if (e3 >= 3) for (let n2 = 0; n2 < e3 - 2; n2++) if (n2 % 2 == 1) {
              let e4 = parseInt(t3[n2]), r2 = parseInt(t3[n2 + 2]), i3 = parseInt(t3[n2 + 1]);
              o3[a3(392)](e4, r2, i3);
            } else {
              let e4 = parseInt(t3[n2]), r2 = parseInt(t3[n2 + 1]), i3 = parseInt(t3[n2 + 2]);
              o3.push(e4, r2, i3);
            }
          }
        } else if (T || E) {
          if (D) {
            if (f2.exec(t2) === null) {
              let e3 = p2(t2);
              for (let t3 = 0; t3 + 2 < e3.length; t3 += 3) k.setRGB(e3[t3], e3[t3 + 1], e3[t3 + 2], n), c2[a3(392)](k.r, k.g, k.b);
            }
          } else if (O && f2.exec(t2) === null) {
            let e3 = p2(t2);
            for (let t3 = 0; t3 + 2 < e3.length; t3 += 3) l3.push(e3[t3], e3[t3 + 1], e3[t3 + 2]);
          }
        }
        g2.exec(t2) === null ? h2.exec(t2) === null ? _.exec(t2) === null ? v.exec(t2) === null ? y.exec(t2) === null ? b.exec(t2) === null ? x.exec(t2) !== null && (O = true, D = false, S = false, C = false, w = false) : (D = true, O = false, S = false, C = false, w = false) : (E = true, S = false, C = false, w = false) : (T = true, S = false, C = false, w = false) : (C = false, S = false, w = true) : (C = false, S = true, w = false) : (C = true, S = false, w = false);
      }
      let j = new e();
      if (j[a3(379)](o3), j.setAttribute(`position`, new r(s2, 3)), l3.length === s2.length && j.setAttribute(`normal`, new r(l3, 3)), c2.length !== o3[a3(387)]) c2.length === s2.length && j[a3(360)](`color`, new r(c2, 3));
      else {
        j = j.toNonIndexed();
        let e2 = j.attributes.position.count / 3;
        if (c2.length === e2 * 3) {
          let t2 = [];
          for (let r2 = 0; r2 < e2; r2++) {
            let e3 = c2[3 * r2 + 0], i3 = c2[3 * r2 + 1], o4 = c2[3 * r2 + 2];
            k.setRGB(e3, i3, o4, n), t2.push(k.r, k.g, k.b), t2.push(k.r, k.g, k.b), t2[a3(392)](k.r, k.g, k.b);
          }
          j[a3(360)](`color`, new r(t2, 3));
        }
      }
      return j;
    }
    function d2(t2) {
      let n2 = u, r2 = new Uint8Array(t2), a3 = new DataView(t2), o3 = [], s2 = [], c2 = [], l3 = 0;
      function d3(e2, t3) {
        let n3 = u, r3 = t3, i2 = e2[r3], a4 = [];
        for (; i2 !== 10 && r3 < e2.length; ) a4[n3(392)](String.fromCharCode(i2)), r3++, i2 = e2[r3];
        return { start: t3, end: r3, next: r3 + 1, parsedString: a4[n3(371)](``) };
      }
      let f2, p2;
      for (; ; ) {
        if (f2 = d3(r2, l3), p2 = f2.parsedString, p2.indexOf(`DATASET`) === 0) {
          let e2 = p2.split(` `)[1];
          if (e2 !== `POLYDATA`) throw Error(n2(369) + e2);
        } else if (p2.indexOf(n2(381)) === 0) {
          let e2 = parseInt(p2.split(` `)[1], 10), t3 = e2 * 4 * 3;
          o3 = new Float32Array(e2 * 3);
          let r3 = f2.next;
          for (let t4 = 0; t4 < e2; t4++) o3[3 * t4] = a3[n2(403)](r3, false), o3[3 * t4 + 1] = a3.getFloat32(r3 + 4, false), o3[3 * t4 + 2] = a3.getFloat32(r3 + 8, false), r3 += 12;
          f2.next = f2[n2(405)] + t3 + 1;
        } else if (p2.indexOf(`TRIANGLE_STRIPS`) === 0) {
          let e2 = parseInt(p2.split(` `)[1], 10), t3 = parseInt(p2[n2(361)](` `)[2], 10), r3 = t3 * 4;
          c2 = new Uint32Array(3 * t3 - 9 * e2);
          let i2 = 0, o4 = f2.next;
          for (let t4 = 0; t4 < e2; t4++) {
            let e3 = a3.getInt32(o4, false), t5 = [];
            o4 += 4;
            for (let n3 = 0; n3 < e3; n3++) t5.push(a3.getInt32(o4, false)), o4 += 4;
            for (let n3 = 0; n3 < e3 - 2; n3++) n3 % 2 ? (c2[i2++] = t5[n3], c2[i2++] = t5[n3 + 2], c2[i2++] = t5[n3 + 1]) : (c2[i2++] = t5[n3], c2[i2++] = t5[n3 + 1], c2[i2++] = t5[n3 + 2]);
          }
          f2.next = f2.next + r3 + 1;
        } else if (p2.indexOf(`POLYGONS`) === 0) {
          let e2 = parseInt(p2.split(` `)[1], 10), t3 = parseInt(p2[n2(361)](` `)[2], 10), r3 = t3 * 4;
          c2 = new Uint32Array(3 * t3 - 9 * e2);
          let i2 = 0, o4 = f2[n2(405)];
          for (let t4 = 0; t4 < e2; t4++) {
            let e3 = a3.getInt32(o4, false), t5 = [];
            o4 += 4;
            for (let n3 = 0; n3 < e3; n3++) t5.push(a3.getInt32(o4, false)), o4 += 4;
            for (let n3 = 1; n3 < e3 - 1; n3++) c2[i2++] = t5[0], c2[i2++] = t5[n3], c2[i2++] = t5[n3 + 1];
          }
          f2[n2(405)] = f2.next + r3 + 1;
        } else if (p2.indexOf(`POINT_DATA`) === 0) {
          let e2 = parseInt(p2.split(` `)[1], 10);
          f2 = d3(r2, f2.next);
          let t3 = e2 * 4 * 3;
          s2 = new Float32Array(e2 * 3);
          let i2 = f2.next;
          for (let t4 = 0; t4 < e2; t4++) s2[3 * t4] = a3.getFloat32(i2, false), s2[3 * t4 + 1] = a3.getFloat32(i2 + 4, false), s2[3 * t4 + 2] = a3.getFloat32(i2 + 8, false), i2 += 12;
          f2[n2(405)] += t3;
        }
        if (l3 = f2.next, l3 >= r2[n2(362)]) break;
      }
      let m2 = new e();
      return m2[n2(379)](new i(c2, 1)), m2.setAttribute(`position`, new i(o3, 3)), s2.length === o3.length && m2[n2(360)](`normal`, new i(s2, 3)), m2;
    }
    function f(e2, t2) {
      let n2 = u, r2 = e2.length, i2 = new Float32Array(r2 + t2[n2(387)]);
      return i2.set(e2), i2.set(t2, r2), i2;
    }
    function p(e2, t2) {
      let n2 = u, r2 = e2[n2(387)], i2 = new Int32Array(r2 + t2[n2(387)]);
      return i2.set(e2), i2.set(t2, r2), i2;
    }
    function m(t2) {
      let n2 = u;
      function r2(e2) {
        let t3 = u, n3 = {};
        if (e2.nodeType === 1) {
          if (e2.attributes && e2.attributes.length > 0) {
            n3.attributes = {};
            for (let r3 = 0; r3 < e2[t3(377)][t3(387)]; r3++) {
              let t4 = e2.attributes.item(r3);
              n3.attributes[t4.nodeName] = t4.nodeValue.trim();
            }
          }
        } else e2.nodeType === 3 && (n3 = e2.nodeValue.trim());
        if (e2[t3(396)]()) for (let i2 = 0; i2 < e2.childNodes[t3(387)]; i2++) {
          let a4 = e2[t3(395)].item(i2), o4 = a4.nodeName;
          if (n3[o4] === void 0) {
            let e3 = r2(a4);
            e3 !== `` && (Array.isArray(e3[`#text`]) && (e3[t3(382)] = e3[t3(382)][0]), n3[o4] = e3);
          } else {
            if (n3[o4].push === void 0) {
              let e4 = n3[o4];
              n3[o4] = [e4];
            }
            let e3 = r2(a4);
            e3 !== `` && (Array.isArray(e3[t3(382)]) && (e3[`#text`] = e3[t3(382)][0]), n3[o4].push(e3));
          }
        }
        return n3;
      }
      function a3(e2) {
        let t3 = u, n3 = typeof Uint8Array < `u` ? Uint8Array : Array, r3 = [];
        for (let e3 = 0; e3 < 64; ++e3) r3[`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`.charCodeAt(e3)] = e3;
        r3[45] = 62, r3[95] = 63;
        let i2 = e2.length;
        if (i2 % 4 > 0) throw Error(`Invalid string. Length must be a multiple of 4`);
        let a4 = e2[i2 - 2] === `=` ? 2 : +(e2[i2 - 1] === `=`), o4 = new n3(i2 * 3 / 4 - a4), s2 = a4 > 0 ? i2 - 4 : i2, c3 = 0, l4, d4;
        for (l4 = 0, d4 = 0; l4 < s2; l4 += 4, d4 += 3) {
          let n4 = r3[e2.charCodeAt(l4)] << 18 | r3[e2[t3(404)](l4 + 1)] << 12 | r3[e2.charCodeAt(l4 + 2)] << 6 | r3[e2.charCodeAt(l4 + 3)];
          o4[c3++] = (n4 & 16711680) >> 16, o4[c3++] = (n4 & 65280) >> 8, o4[c3++] = n4 & 255;
        }
        if (a4 === 2) {
          let t4 = r3[e2.charCodeAt(l4)] << 2 | r3[e2.charCodeAt(l4 + 1)] >> 4;
          o4[c3++] = t4 & 255;
        } else if (a4 === 1) {
          let n4 = r3[e2.charCodeAt(l4)] << 10 | r3[e2[t3(404)](l4 + 1)] << 4 | r3[e2.charCodeAt(l4 + 2)] >> 2;
          o4[c3++] = n4 >> 8 & 255, o4[c3++] = n4 & 255;
        }
        return o4;
      }
      function o3(e2, t3) {
        let n3 = u, r3 = 0;
        l3.attributes.header_type === `UInt64` ? r3 = 8 : l3.attributes.header_type === `UInt32` && (r3 = 4);
        let i2, o4;
        if (e2.attributes.format === `binary` && t3) {
          e2.attributes[n3(383)] === `Float32` ? i2 = new Float32Array() : (e2.attributes.type === n3(391) || e2.attributes[n3(383)] === `Int64`) && (i2 = new Int32Array());
          let t4 = e2[`#text`], c3 = a3(Array[n3(364)](t4) ? t4[0] : t4), l4 = c3[0];
          for (let e3 = 1; e3 < r3 - 1; e3++) l4 |= c3[e3] << e3 * 8;
          let u2 = (l4 + 3) * r3, d4 = u2 % 3 > 0 ? 3 - u2 % 3 : 0;
          u2 += d4;
          let m3 = [], h3 = u2;
          m3.push(h3);
          let g2 = 3 * r3;
          for (let e3 = 0; e3 < l4; e3++) {
            let t5 = c3[e3 * r3 + g2];
            for (let n4 = 1; n4 < r3 - 1; n4++) t5 |= c3[e3 * r3 + g2 + n4] << n4 * 8;
            h3 += t5, m3[n3(392)](h3);
          }
          for (let t5 = 0; t5 < m3.length - 1; t5++) o4 = s(c3.slice(m3[t5], m3[t5 + 1])).buffer, e2.attributes.type === `Float32` ? (o4 = new Float32Array(o4), i2 = f(i2, o4)) : (e2.attributes.type === `Int32` || e2.attributes.type === `Int64`) && (o4 = new Int32Array(o4), i2 = p(i2, o4));
          delete e2[n3(382)], e2.attributes.type === n3(384) && e2.attributes[n3(376)] === `binary` && (i2 = i2.filter(function(e3, t5) {
            if (t5 % 2 != 1) return true;
          }));
        } else e2.attributes.format === `binary` && !t3 ? (o4 = a3(e2[`#text`]), o4 = o4.slice(r3).buffer) : o4 = e2[`#text`] ? e2[`#text`].split(/\s+/).filter(function(e3) {
          if (e3 !== ``) return e3;
        }) : new Int32Array().buffer, delete e2[`#text`], e2.attributes.type === n3(406) ? i2 = new Float32Array(o4) : e2.attributes.type === `Int32` ? i2 = new Int32Array(o4) : e2[n3(377)].type === `Int64` && (i2 = new Int32Array(o4), e2.attributes.format === `binary` && (i2 = i2.filter(function(e3, t4) {
          if (t4 % 2 != 1) return true;
        })));
        return i2;
      }
      let c2 = new DOMParser().parseFromString(t2, `application/xml`).documentElement, l3 = r2(c2), d3 = [], m2 = [], h2 = [];
      if (l3.AppendedData) {
        let e2 = l3.AppendedData[`#text`].slice(1), t3 = l3[n2(393)][n2(397)], r3 = [n2(365), `CellData`, `Points`, n2(394), `Lines`, `Strips`, `Polys`], i2 = 0, a4 = r3.map((e3) => {
          let r4 = n2, i3 = t3[e3];
          return i3 && i3.DataArray ? (Array.isArray(i3[r4(386)]) ? i3.DataArray : [i3.DataArray]).map((e4) => e4.attributes.offset) : [];
        }).flat();
        for (let o4 of r3) {
          let r4 = t3[o4];
          if (r4 && r4.DataArray) if (Array.isArray(r4[n2(386)])) for (let t4 of r4[n2(386)]) t4[`#text`] = e2[n2(375)](a4[i2], a4[i2 + 1]), t4.attributes.format = n2(363), i2++;
          else r4.DataArray[n2(382)] = e2.slice(a4[i2], a4[i2 + 1]), r4.DataArray.attributes.format = `binary`, i2++;
        }
      }
      if (l3.PolyData) {
        let t3 = l3[n2(393)].Piece, r3 = l3.attributes.hasOwnProperty(`compressor`), a4 = [`PointData`, `Points`, `Strips`, `Polys`], s2 = 0, c3 = a4.length;
        for (; s2 < c3; ) {
          let e2 = t3[a4[s2]];
          if (e2 && e2.DataArray) {
            let i2;
            i2 = Array.isArray(e2.DataArray) ? e2.DataArray : [e2.DataArray];
            let c4 = 0, l4 = i2.length;
            for (; c4 < l4; ) `#text` in i2[c4] && i2[c4][`#text`].length > 0 && (i2[c4].text = o3(i2[c4], r3)), c4++;
            switch (a4[s2]) {
              case `PointData`:
                {
                  let r4 = parseInt(t3.attributes.NumberOfPoints), a5 = e2.attributes.Normals;
                  if (r4 > 0) {
                    for (let e3 = 0, t4 = i2[n2(387)]; e3 < t4; e3++) if (a5 === i2[e3].attributes[n2(370)]) {
                      let t5 = i2[e3].attributes.NumberOfComponents;
                      m2 = new Float32Array(r4 * t5), m2.set(i2[e3].text, 0);
                    }
                  }
                }
                break;
              case n2(359):
                {
                  let r4 = parseInt(t3.attributes.NumberOfPoints);
                  if (r4 > 0) {
                    let t4 = e2.DataArray.attributes.NumberOfComponents;
                    d3 = new Float32Array(r4 * t4), d3[n2(399)](e2.DataArray.text, 0);
                  }
                }
                break;
              case `Strips`:
                {
                  let r4 = parseInt(t3.attributes.NumberOfStrips);
                  if (r4 > 0) {
                    let t4 = new Int32Array(e2.DataArray[0].text.length), i3 = new Int32Array(e2.DataArray[1].text[n2(387)]);
                    t4.set(e2.DataArray[0][n2(401)], 0), i3[n2(399)](e2.DataArray[1].text, 0);
                    let a5 = r4 + t4.length;
                    h2 = new Uint32Array(3 * a5 - 9 * r4);
                    let o4 = 0;
                    for (let e3 = 0, n3 = r4; e3 < n3; e3++) {
                      let n4 = [];
                      for (let r5 = 0, a6 = i3[e3], o5 = 0; r5 < a6 - o5; r5++) n4.push(t4[r5]), e3 > 0 && (o5 = i3[e3 - 1]);
                      for (let t5 = 0, r5 = i3[e3], a6 = 0; t5 < r5 - a6 - 2; t5++) t5 % 2 ? (h2[o4++] = n4[t5], h2[o4++] = n4[t5 + 2], h2[o4++] = n4[t5 + 1]) : (h2[o4++] = n4[t5], h2[o4++] = n4[t5 + 1], h2[o4++] = n4[t5 + 2]), e3 > 0 && (a6 = i3[e3 - 1]);
                    }
                  }
                }
                break;
              case `Polys`:
                {
                  let r4 = parseInt(t3.attributes[n2(388)]);
                  if (r4 > 0) {
                    let t4 = new Int32Array(e2[n2(386)][0].text.length), i3 = new Int32Array(e2.DataArray[1].text.length);
                    t4.set(e2.DataArray[0].text, 0), i3.set(e2.DataArray[1].text, 0);
                    let a5 = r4 + t4.length;
                    h2 = new Uint32Array(3 * a5 - 9 * r4);
                    let o4 = 0, s3 = 0, c5 = 0, l5 = 0, u3 = r4;
                    for (; c5 < u3; ) {
                      let e3 = [], n3 = 0, r5 = i3[c5];
                      for (; n3 < r5 - l5; ) e3.push(t4[s3++]), n3++;
                      let a6 = 1;
                      for (; a6 < r5 - l5 - 1; ) h2[o4++] = e3[0], h2[o4++] = e3[a6], h2[o4++] = e3[a6 + 1], a6++;
                      c5++, l5 = i3[c5 - 1];
                    }
                  }
                }
                break;
              default:
                break;
            }
          }
          s2++;
        }
        let u2 = new e();
        return u2.setIndex(new i(h2, 1)), u2.setAttribute(`position`, new i(d3, 3)), m2.length === d3.length && u2.setAttribute(`normal`, new i(m2, 3)), u2;
      } else throw Error(`Unsupported DATASET type`);
    }
    let h = new TextDecoder(), g = h[o2(373)](new Uint8Array(a2, 0, 250)).split(`
`);
    return g[0].indexOf(`xml`) === -1 ? g[2][o2(398)](`ASCII`) ? l2(h.decode(a2)) : d2(a2) : m(h[o2(373)](a2));
  }
};
export {
  d as VTKLoader
};
