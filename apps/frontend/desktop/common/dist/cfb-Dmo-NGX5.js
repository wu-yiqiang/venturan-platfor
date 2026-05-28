import { a as e, r as t } from "./chunk-DeXYQlWK.js";
import { t as n } from "./__vite-browser-external-Db0kvMGT.js";
function r(e2, t2) {
  return e2 -= 483, i()[e2];
}
(function(e2, t2) {
  for (var n2 = r, i2 = e2(); ; ) try {
    if (parseInt(n2(521)) / 1 * (parseInt(n2(492)) / 2) + parseInt(n2(517)) / 3 * (-parseInt(n2(512)) / 4) + -parseInt(n2(497)) / 5 + parseInt(n2(498)) / 6 * (parseInt(n2(570)) / 7) + -parseInt(n2(534)) / 8 * (parseInt(n2(518)) / 9) + parseInt(n2(541)) / 10 * (-parseInt(n2(493)) / 11) + parseInt(n2(491)) / 12 * (parseInt(n2(508)) / 13) === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 462968);
function i() {
  var e2 = `24eLlFys,212598zCVFeN,zlib does not expose bytesRead, != ,3213cLEsgU,write,Content-Type: multipart/related; boundary=",length,Reserved: ,FullPaths,content,buffer,pop,hex,
=0A,FileIndex,!Directory,104GBDrYu,name,read_shift,base64,deflateRawSync,fat_addrs,push,20yQSXpV,zip,match,utf16le,Header Signature: ,ctype,isBuffer,fat,cannot use native zlib: ,lastIndexOf, saw ,setMilliseconds,000000000000,ctime,fromCharCode,slice,utf8,Unsupported ZIP Compression method , 4 ,binary,split,size,write_shift,=09,toString,application/vnd.ms-officetheme,min,buf,text/html,21679IjuSDJ,start,toLowerCase,property,setFullYear,versions,indexOf,cfb_gc,clsid,storage,477132CRtsUe,214obouwY,1883156EeuQYm,charAt,boundary,alloc,2839285ICloOe,1572vRSYNW,_finishFlushFlag,image/png,replace,--\r
,getFullYear,color,mime-version:,string,!StreamData,338nuUvLh,join,data,trim,254344pwhptP,type,error,charCodeAt,raw`.split(`,`);
  return i = function() {
    return e2;
  }, i();
}
var a = e((e2, i2) => {
  var a2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;
  function o(e3) {
    for (var t2 = r, n2 = ``, i3 = 0, o2 = 0, s2 = 0, c2 = 0, l2 = 0, u2 = 0, d2 = 0, f2 = 0; f2 < e3.length; ) i3 = e3[t2(515)](f2++), c2 = i3 >> 2, o2 = e3[t2(515)](f2++), l2 = (i3 & 3) << 4 | o2 >> 4, s2 = e3.charCodeAt(f2++), u2 = (o2 & 15) << 2 | s2 >> 6, d2 = s2 & 63, isNaN(o2) ? u2 = d2 = 64 : isNaN(s2) && (d2 = 64), n2 += a2.charAt(c2) + a2.charAt(l2) + a2.charAt(u2) + a2.charAt(d2);
    return n2;
  }
  function s(e3) {
    var t2 = r, n2 = ``, i3 = 0, o2 = 0, s2 = 0, c2 = 0, l2 = 0, u2 = 0, d2 = 0;
    e3 = e3.replace(/[^\w\+\/\=]/g, ``);
    for (var f2 = 0; f2 < e3.length; ) c2 = a2.indexOf(e3.charAt(f2++)), l2 = a2.indexOf(e3.charAt(f2++)), i3 = c2 << 2 | l2 >> 4, n2 += String.fromCharCode(i3), u2 = a2.indexOf(e3[t2(494)](f2++)), o2 = (l2 & 15) << 4 | u2 >> 2, u2 !== 64 && (n2 += String[t2(555)](o2)), d2 = a2.indexOf(e3.charAt(f2++)), s2 = (u2 & 3) << 6 | d2, d2 !== 64 && (n2 += String.fromCharCode(s2));
    return n2;
  }
  var c = (function() {
    var e3 = r;
    return typeof Buffer < `u` && typeof process < `u` && process[e3(486)] !== void 0 && !!process.versions.node;
  })(), l = (function() {
    var e3 = r;
    if (typeof Buffer < `u`) {
      var t2 = !Buffer.from;
      if (!t2) try {
        Buffer.from(`foo`, e3(557));
      } catch {
        t2 = true;
      }
      return t2 ? function(e4, t3) {
        return t3 ? new Buffer(e4, t3) : new Buffer(e4);
      } : Buffer.from.bind(Buffer);
    }
    return function() {
    };
  })();
  function u(e3) {
    var t2 = r;
    if (c) {
      if (Buffer.alloc) return Buffer[t2(496)](e3);
      var n2 = new Buffer(e3);
      return n2.fill(0), n2;
    }
    return typeof Uint8Array < `u` ? new Uint8Array(e3) : Array(e3);
  }
  function d(e3) {
    return c ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e3) : new Buffer(e3) : typeof Uint8Array < `u` ? new Uint8Array(e3) : Array(e3);
  }
  var f = function(e3) {
    return c ? l(e3, r(560)) : e3.split(``).map(function(e4) {
      return e4.charCodeAt(0) & 255;
    });
  }, p = /\u0000/g, m = /[\u0001-\u0006]/g, h = function(e3) {
    for (var t2 = [], n2 = 0; n2 < e3[0].length; ++n2) t2.push.apply(t2, e3[0][n2]);
    return t2;
  }, g = h, _ = function(e3, t2, n2) {
    for (var r2 = [], i3 = t2; i3 < n2; i3 += 2) r2.push(String.fromCharCode(w(e3, i3)));
    return r2.join(``).replace(p, ``);
  }, v = _, y = function(e3, t2, n2) {
    for (var r2 = [], i3 = t2; i3 < t2 + n2; ++i3) r2.push((`0` + e3[i3].toString(16)).slice(-2));
    return r2.join(``);
  }, b = y, x = function(e3) {
    var t2 = r;
    if (Array.isArray(e3[0])) return [].concat.apply([], e3);
    var n2 = 0, i3 = 0;
    for (i3 = 0; i3 < e3.length; ++i3) n2 += e3[i3][t2(524)];
    var a3 = new Uint8Array(n2);
    for (i3 = 0, n2 = 0; i3 < e3.length; n2 += e3[i3].length, ++i3) a3.set(e3[i3], n2);
    return a3;
  }, S = x;
  c && (_ = function(e3, t2, n2) {
    return Buffer.isBuffer(e3) ? e3.toString(`utf16le`, t2, n2).replace(p, ``) : v(e3, t2, n2);
  }, y = function(e3, t2, n2) {
    var i3 = r;
    return Buffer.isBuffer(e3) ? e3.toString(i3(530), t2, t2 + n2) : b(e3, t2, n2);
  }, h = function(e3) {
    var t2 = r;
    return e3[0].length > 0 && Buffer[t2(547)](e3[0][0]) ? Buffer.concat(e3[0]) : g(e3);
  }, f = function(e3) {
    return l(e3, `binary`);
  }, S = function(e3) {
    return Buffer.isBuffer(e3[0]) ? Buffer.concat(e3) : x(e3);
  });
  var C = function(e3, t2) {
    return e3[t2];
  }, w = function(e3, t2) {
    return e3[t2 + 1] * 256 + e3[t2];
  }, ee = function(e3, t2) {
    var n2 = e3[t2 + 1] * 256 + e3[t2];
    return n2 < 32768 ? n2 : (65535 - n2 + 1) * -1;
  }, te = function(e3, t2) {
    return e3[t2 + 3] * (1 << 24) + (e3[t2 + 2] << 16) + (e3[t2 + 1] << 8) + e3[t2];
  }, T = function(e3, t2) {
    return (e3[t2 + 3] << 24) + (e3[t2 + 2] << 16) + (e3[t2 + 1] << 8) + e3[t2];
  };
  function ne(e3, t2) {
    var n2, r2, i3 = 0;
    switch (e3) {
      case 1:
        n2 = C(this, this.l);
        break;
      case 2:
        n2 = (t2 === `i` ? ee : w)(this, this.l);
        break;
      case 4:
        n2 = T(this, this.l);
        break;
      case 16:
        i3 = 2, r2 = y(this, this.l, e3);
    }
    return this.l += e3, i3 === 0 ? n2 : r2;
  }
  var re = function(e3, t2, n2) {
    e3[n2] = t2 & 255, e3[n2 + 1] = t2 >>> 8 & 255, e3[n2 + 2] = t2 >>> 16 & 255, e3[n2 + 3] = t2 >>> 24 & 255;
  }, ie = function(e3, t2, n2) {
    e3[n2] = t2 & 255, e3[n2 + 1] = t2 >> 8 & 255, e3[n2 + 2] = t2 >> 16 & 255, e3[n2 + 3] = t2 >> 24 & 255;
  };
  function ae(e3, t2, n2) {
    var i3 = r, a3 = 0, o2 = 0;
    switch (n2) {
      case `hex`:
        for (; o2 < e3; ++o2) this[this.l++] = parseInt(t2[i3(556)](2 * o2, 2 * o2 + 2), 16) || 0;
        return this;
      case i3(544):
        var s2 = this.l + e3;
        for (o2 = 0; o2 < Math.min(t2[i3(524)], e3); ++o2) {
          var c2 = t2.charCodeAt(o2);
          this[this.l++] = c2 & 255, this[this.l++] = c2 >> 8;
        }
        for (; this.l < s2; ) this[this.l++] = 0;
        return this;
    }
    switch (e3) {
      case 1:
        a3 = 1, this[this.l] = t2 & 255;
        break;
      case 2:
        a3 = 2, this[this.l] = t2 & 255, t2 >>>= 8, this[this.l + 1] = t2 & 255;
        break;
      case 4:
        a3 = 4, re(this, t2, this.l);
        break;
      case -4:
        a3 = 4, ie(this, t2, this.l);
        break;
    }
    return this.l += a3, this;
  }
  function oe(e3, t2) {
    var n2 = r, i3 = y(this, this.l, e3.length >> 1);
    if (i3 !== e3) throw Error(t2 + `Expected ` + e3 + n2(551) + i3);
    this.l += e3.length >> 1;
  }
  function E(e3, t2) {
    e3.l = t2, e3.read_shift = ne, e3.chk = oe, e3.write_shift = ae;
  }
  function D(e3) {
    var t2 = u(e3);
    return E(t2, 0), t2;
  }
  var se = (function() {
    var e3 = {};
    e3.version = `1.2.1`;
    function t2() {
      for (var e4 = 0, t3 = Array(256), n3 = 0; n3 != 256; ++n3) e4 = n3, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, e4 = e4 & 1 ? -306674912 ^ e4 >>> 1 : e4 >>> 1, t3[n3] = e4;
      return typeof Int32Array < `u` ? new Int32Array(t3) : t3;
    }
    var n2 = t2();
    function i3(e4) {
      var t3 = 0, n3 = 0, r2 = 0, i4 = typeof Int32Array < `u` ? new Int32Array(4096) : Array(4096);
      for (r2 = 0; r2 != 256; ++r2) i4[r2] = e4[r2];
      for (r2 = 0; r2 != 256; ++r2) for (n3 = e4[r2], t3 = 256 + r2; t3 < 4096; t3 += 256) n3 = i4[t3] = n3 >>> 8 ^ e4[n3 & 255];
      var a4 = [];
      for (r2 = 1; r2 != 16; ++r2) a4[r2 - 1] = typeof Int32Array < `u` ? i4.subarray(r2 * 256, r2 * 256 + 256) : i4.slice(r2 * 256, r2 * 256 + 256);
      return a4;
    }
    var a3 = i3(n2), o2 = a3[0], s2 = a3[1], c2 = a3[2], l2 = a3[3], u2 = a3[4], d2 = a3[5], f2 = a3[6], p2 = a3[7], m2 = a3[8], h2 = a3[9], g2 = a3[10], _2 = a3[11], v2 = a3[12], y2 = a3[13], b2 = a3[14];
    function x2(e4, t3) {
      for (var i4 = r, a4 = t3 ^ -1, o3 = 0, s3 = e4[i4(524)]; o3 < s3; ) a4 = a4 >>> 8 ^ n2[(a4 ^ e4.charCodeAt(o3++)) & 255];
      return ~a4;
    }
    function S2(e4, t3) {
      for (var r2 = t3 ^ -1, i4 = e4.length - 15, a4 = 0; a4 < i4; ) r2 = b2[e4[a4++] ^ r2 & 255] ^ y2[e4[a4++] ^ r2 >> 8 & 255] ^ v2[e4[a4++] ^ r2 >> 16 & 255] ^ _2[e4[a4++] ^ r2 >>> 24] ^ g2[e4[a4++]] ^ h2[e4[a4++]] ^ m2[e4[a4++]] ^ p2[e4[a4++]] ^ f2[e4[a4++]] ^ d2[e4[a4++]] ^ u2[e4[a4++]] ^ l2[e4[a4++]] ^ c2[e4[a4++]] ^ s2[e4[a4++]] ^ o2[e4[a4++]] ^ n2[e4[a4++]];
      for (i4 += 15; a4 < i4; ) r2 = r2 >>> 8 ^ n2[(r2 ^ e4[a4++]) & 255];
      return ~r2;
    }
    function C2(e4, t3) {
      for (var i4 = r, a4 = t3 ^ -1, o3 = 0, s3 = e4[i4(524)], c3 = 0, l3 = 0; o3 < s3; ) c3 = e4.charCodeAt(o3++), c3 < 128 ? a4 = a4 >>> 8 ^ n2[(a4 ^ c3) & 255] : c3 < 2048 ? (a4 = a4 >>> 8 ^ n2[(a4 ^ (192 | c3 >> 6 & 31)) & 255], a4 = a4 >>> 8 ^ n2[(a4 ^ (128 | c3 & 63)) & 255]) : c3 >= 55296 && c3 < 57344 ? (c3 = (c3 & 1023) + 64, l3 = e4[i4(515)](o3++) & 1023, a4 = a4 >>> 8 ^ n2[(a4 ^ (240 | c3 >> 8 & 7)) & 255], a4 = a4 >>> 8 ^ n2[(a4 ^ (128 | c3 >> 2 & 63)) & 255], a4 = a4 >>> 8 ^ n2[(a4 ^ (128 | l3 >> 6 & 15 | (c3 & 3) << 4)) & 255], a4 = a4 >>> 8 ^ n2[(a4 ^ (128 | l3 & 63)) & 255]) : (a4 = a4 >>> 8 ^ n2[(a4 ^ (224 | c3 >> 12 & 15)) & 255], a4 = a4 >>> 8 ^ n2[(a4 ^ (128 | c3 >> 6 & 63)) & 255], a4 = a4 >>> 8 ^ n2[(a4 ^ (128 | c3 & 63)) & 255]);
      return ~a4;
    }
    return e3.table = n2, e3.bstr = x2, e3.buf = S2, e3.str = C2, e3;
  })(), O = (function() {
    var e3 = r, t2 = {};
    t2.version = `1.2.2`;
    function i3(e4, t3) {
      for (var n2 = r, i4 = e4.split(`/`), a4 = t3.split(`/`), o2 = 0, s2 = 0, c2 = Math[n2(567)](i4.length, a4[n2(524)]); o2 < c2; ++o2) {
        if (s2 = i4[o2].length - a4[o2].length) return s2;
        if (i4[o2] != a4[o2]) return i4[o2] < a4[o2] ? -1 : 1;
      }
      return i4.length - a4[n2(524)];
    }
    function a3(e4) {
      var t3 = r;
      if (e4.charAt(e4.length - 1) == `/`) return e4.slice(0, -1).indexOf(`/`) === -1 ? e4 : a3(e4.slice(0, -1));
      var n2 = e4[t3(550)](`/`);
      return n2 === -1 ? e4 : e4.slice(0, n2 + 1);
    }
    function g2(e4) {
      var t3 = r;
      if (e4[t3(494)](e4.length - 1) == `/`) return g2(e4[t3(556)](0, -1));
      var n2 = e4.lastIndexOf(`/`);
      return n2 === -1 ? e4 : e4.slice(n2 + 1);
    }
    function v2(e4, t3) {
      var n2 = r;
      typeof t3 == `string` && (t3 = new Date(t3));
      var i4 = t3.getHours();
      i4 = i4 << 6 | t3.getMinutes(), i4 = i4 << 5 | t3.getSeconds() >>> 1, e4[n2(563)](2, i4);
      var a4 = t3[n2(503)]() - 1980;
      a4 = a4 << 4 | t3.getMonth() + 1, a4 = a4 << 5 | t3.getDate(), e4.write_shift(2, a4);
    }
    function y2(e4) {
      var t3 = r, n2 = e4.read_shift(2) & 65535, i4 = e4.read_shift(2) & 65535, a4 = /* @__PURE__ */ new Date(), o2 = i4 & 31;
      i4 >>>= 5;
      var s2 = i4 & 15;
      i4 >>>= 4, a4[t3(552)](0), a4[t3(485)](i4 + 1980), a4.setMonth(s2 - 1), a4.setDate(o2);
      var c2 = n2 & 31;
      n2 >>>= 5;
      var l2 = n2 & 63;
      return n2 >>>= 6, a4.setHours(n2), a4.setMinutes(l2), a4.setSeconds(c2 << 1), a4;
    }
    function b2(e4) {
      var t3 = r;
      E(e4, 0);
      for (var n2 = {}, i4 = 0; e4.l <= e4[t3(524)] - 4; ) {
        var a4 = e4.read_shift(2), o2 = e4.read_shift(2), s2 = e4.l + o2, c2 = {};
        switch (a4) {
          case 21589:
            i4 = e4[t3(536)](1), i4 & 1 && (c2.mtime = e4.read_shift(4)), o2 > 5 && (i4 & 2 && (c2.atime = e4.read_shift(4)), i4 & 4 && (c2[t3(554)] = e4[t3(536)](4))), c2.mtime && (c2.mt = new Date(c2.mtime * 1e3));
            break;
        }
        e4.l = s2, n2[a4] = c2;
      }
      return n2;
    }
    var x2;
    function C2() {
      return x2 || (x2 = n());
    }
    function w2(e4, t3) {
      var n2 = r;
      if (e4[0] == 80 && e4[1] == 75) return Ke(e4, t3);
      if ((e4[0] | 32) == 109 && (e4[1] | 32) == 105) return et(e4, t3);
      if (e4.length < 512) throw Error(`CFB file size ` + e4.length + ` < 512`);
      var i4 = 3, a4 = 512, o2 = 0, s2 = 0, c2 = 0, l2 = 0, u2 = 0, d2 = [], f2 = e4.slice(0, 512);
      E(f2, 0);
      var p2 = ee2(f2);
      switch (i4 = p2[0], i4) {
        case 3:
          a4 = 512;
          break;
        case 4:
          a4 = 4096;
          break;
        case 0:
          if (p2[1] == 0) return Ke(e4, t3);
        default:
          throw Error(`Major Version: Expected 3 or 4 saw ` + i4);
      }
      a4 !== 512 && (f2 = e4.slice(0, a4), E(f2, 28));
      var m2 = e4.slice(0, a4);
      re2(f2, i4);
      var h2 = f2.read_shift(4, `i`);
      if (i4 === 3 && h2 !== 0) throw Error(`# Directory Sectors: Expected 0 saw ` + h2);
      f2.l += 4, c2 = f2.read_shift(4, `i`), f2.l += 4, f2.chk(`00100000`, `Mini Stream Cutoff Size: `), l2 = f2.read_shift(4, `i`), o2 = f2.read_shift(4, `i`), u2 = f2.read_shift(4, `i`), s2 = f2[n2(536)](4, `i`);
      for (var g3 = -1, _2 = 0; _2 < 109 && (g3 = f2.read_shift(4, `i`), !(g3 < 0)); ++_2) d2[_2] = g3;
      var v3 = ie2(e4, a4);
      le(u2, s2, v3, a4, d2);
      var y3 = de(v3, c2, d2, a4);
      y3[c2].name = n2(533), o2 > 0 && l2 !== M && (y3[l2].name = `!MiniFAT`), y3[d2[0]].name = `!FAT`, y3[n2(539)] = d2, y3.ssz = a4;
      var b3 = {}, x3 = [], S2 = [], C3 = [];
      fe(c2, y3, v3, x3, o2, b3, S2, l2), ae2(S2, C3, x3), x3.shift();
      var w3 = { FileIndex: S2, FullPaths: C3 };
      return t3 && t3.raw && (w3[n2(516)] = { header: m2, sectors: v3 }), w3;
    }
    function ee2(e4) {
      var t3 = r;
      if (e4[e4.l] == 80 && e4[e4.l + 1] == 75) return [0, 0];
      e4.chk(ye, t3(545)), e4.l += 16;
      var n2 = e4.read_shift(2, `u`);
      return [e4[t3(536)](2, `u`), n2];
    }
    function re2(e4, t3) {
      var n2 = r, i4 = 9;
      switch (e4.l += 2, i4 = e4.read_shift(2)) {
        case 9:
          if (t3 != 3) throw Error(`Sector Shift: Expected 9 saw ` + i4);
          break;
        case 12:
          if (t3 != 4) throw Error(`Sector Shift: Expected 12 saw ` + i4);
          break;
        default:
          throw Error(`Sector Shift: Expected 9 or 12 saw ` + i4);
      }
      e4.chk(`0600`, `Mini Sector Shift: `), e4.chk(n2(553), n2(525));
    }
    function ie2(e4, t3) {
      for (var n2 = Math.ceil(e4.length / t3) - 1, r2 = [], i4 = 1; i4 < n2; ++i4) r2[i4 - 1] = e4.slice(i4 * t3, (i4 + 1) * t3);
      return r2[n2 - 1] = e4.slice(n2 * t3), r2;
    }
    function ae2(e4, t3, n2) {
      for (var i4 = r, a4 = 0, o2 = 0, s2 = 0, c2 = 0, l2 = 0, u2 = n2.length, d2 = [], f2 = []; a4 < u2; ++a4) d2[a4] = f2[a4] = a4, t3[a4] = n2[a4];
      for (; l2 < f2.length; ++l2) a4 = f2[l2], o2 = e4[a4].L, s2 = e4[a4].R, c2 = e4[a4].C, d2[a4] === a4 && (o2 !== -1 && d2[o2] !== o2 && (d2[a4] = d2[o2]), s2 !== -1 && d2[s2] !== s2 && (d2[a4] = d2[s2])), c2 !== -1 && (d2[c2] = a4), o2 !== -1 && a4 != d2[a4] && (d2[o2] = d2[a4], f2[i4(550)](o2) < l2 && f2.push(o2)), s2 !== -1 && a4 != d2[a4] && (d2[s2] = d2[a4], f2.lastIndexOf(s2) < l2 && f2.push(s2));
      for (a4 = 1; a4 < u2; ++a4) d2[a4] === a4 && (s2 !== -1 && d2[s2] !== s2 ? d2[a4] = d2[s2] : o2 !== -1 && d2[o2] !== o2 && (d2[a4] = d2[o2]));
      for (a4 = 1; a4 < u2; ++a4) if (e4[a4].type !== 0) {
        if (l2 = a4, l2 != d2[l2]) do
          l2 = d2[l2], t3[a4] = t3[l2] + `/` + t3[a4];
        while (l2 !== 0 && d2[l2] !== -1 && l2 != d2[l2]);
        d2[a4] = -1;
      }
      for (t3[0] += `/`, a4 = 1; a4 < u2; ++a4) e4[a4].type !== 2 && (t3[a4] += `/`);
    }
    function ce(e4, t3, n2) {
      for (var i4 = r, a4 = e4.start, o2 = e4.size, s2 = [], c2 = a4; n2 && o2 > 0 && c2 >= 0; ) s2.push(t3.slice(c2 * j, c2 * j + j)), o2 -= j, c2 = T(n2, c2 * 4);
      return s2.length === 0 ? D(0) : S(s2).slice(0, e4[i4(562)]);
    }
    function le(e4, t3, n2, r2, i4) {
      var a4 = M;
      if (e4 === M) {
        if (t3 !== 0) throw Error(`DIFAT chain shorter than expected`);
      } else if (e4 !== -1) {
        var o2 = n2[e4], s2 = (r2 >>> 2) - 1;
        if (!o2) return;
        for (var c2 = 0; c2 < s2 && (a4 = T(o2, c2 * 4)) !== M; ++c2) i4.push(a4);
        t3 >= 1 && le(T(o2, r2 - 4), t3 - 1, n2, r2, i4);
      }
    }
    function ue(e4, t3, n2, r2, i4) {
      var a4 = [], o2 = [];
      i4 || (i4 = []);
      var s2 = r2 - 1, c2 = 0, l2 = 0;
      for (c2 = t3; c2 >= 0; ) {
        i4[c2] = true, a4[a4.length] = c2, o2.push(e4[c2]);
        var u2 = n2[Math.floor(c2 * 4 / r2)];
        if (l2 = c2 * 4 & s2, r2 < 4 + l2) throw Error(`FAT boundary crossed: ` + c2 + ` 4 ` + r2);
        if (!e4[u2]) break;
        c2 = T(e4[u2], l2);
      }
      return { nodes: a4, data: h([o2]) };
    }
    function de(e4, t3, n2, i4) {
      var a4 = r, o2 = e4.length, s2 = [], c2 = [], l2 = [], u2 = [], d2 = i4 - 1, f2 = 0, p2 = 0, m2 = 0, g3 = 0;
      for (f2 = 0; f2 < o2; ++f2) if (l2 = [], m2 = f2 + t3, m2 >= o2 && (m2 -= o2), !c2[m2]) {
        u2 = [];
        var _2 = [];
        for (p2 = m2; p2 >= 0; ) {
          _2[p2] = true, c2[p2] = true, l2[l2.length] = p2, u2.push(e4[p2]);
          var v3 = n2[Math.floor(p2 * 4 / i4)];
          if (g3 = p2 * 4 & d2, i4 < 4 + g3) throw Error(`FAT boundary crossed: ` + p2 + a4(559) + i4);
          if (!e4[v3] || (p2 = T(e4[v3], g3), _2[p2])) break;
        }
        s2[m2] = { nodes: l2, data: h([u2]) };
      }
      return s2;
    }
    function fe(e4, t3, n2, i4, a4, o2, s2, c2) {
      for (var l2 = r, u2 = 0, d2 = i4.length ? 2 : 0, f2 = t3[e4][l2(510)], p2 = 0, m2 = 0, h2; p2 < f2.length; p2 += 128) {
        var g3 = f2.slice(p2, p2 + 128);
        E(g3, 64), m2 = g3.read_shift(2), h2 = _(g3, 0, m2 - d2), i4[l2(540)](h2);
        var v3 = { name: h2, type: g3.read_shift(1), color: g3.read_shift(1), L: g3.read_shift(4, `i`), R: g3.read_shift(4, `i`), C: g3.read_shift(4, `i`), clsid: g3.read_shift(16), state: g3.read_shift(4, `i`), start: 0, size: 0 };
        g3[l2(536)](2) + g3.read_shift(2) + g3.read_shift(2) + g3.read_shift(2) !== 0 && (v3.ct = pe(g3, g3.l - 8)), g3[l2(536)](2) + g3.read_shift(2) + g3.read_shift(2) + g3.read_shift(2) !== 0 && (v3.mt = pe(g3, g3.l - 8)), v3.start = g3.read_shift(4, `i`), v3.size = g3.read_shift(4, `i`), v3.size < 0 && v3.start < 0 && (v3.size = v3.type = 0, v3.start = M, v3.name = ``), v3.type === 5 ? (u2 = v3.start, a4 > 0 && u2 !== M && (t3[u2].name = l2(507))) : v3.size >= 4096 ? (v3[l2(490)] = l2(548), t3[v3.start] === void 0 && (t3[v3.start] = ue(n2, v3.start, t3.fat_addrs, t3.ssz)), t3[v3.start].name = v3.name, v3.content = t3[v3.start].data[l2(556)](0, v3.size)) : (v3.storage = `minifat`, v3.size < 0 ? v3.size = 0 : u2 !== M && v3.start !== M && t3[u2] && (v3.content = ce(v3, t3[u2].data, (t3[c2] || {}).data))), v3.content && E(v3.content, 0), o2[h2] = v3, s2[l2(540)](v3);
      }
    }
    function pe(e4, t3) {
      return new Date((te(e4, t3 + 4) / 1e7 * 2 ** 32 + te(e4, t3) / 1e7 - 11644473600) * 1e3);
    }
    function me(e4, t3) {
      return C2(), w2(x2.readFileSync(e4), t3);
    }
    function he(e4, t3) {
      var n2 = r, i4 = t3 && t3.type;
      switch (i4 || c && Buffer.isBuffer(e4) && (i4 = n2(528)), i4 || `base64`) {
        case `file`:
          return me(e4, t3);
        case `base64`:
          return w2(f(s(e4)), t3);
        case `binary`:
          return w2(f(e4), t3);
      }
      return w2(e4, t3);
    }
    function k(e4, t3) {
      var n2 = r, i4 = t3 || {}, a4 = i4.root || `Root Entry`;
      if (e4.FullPaths || (e4.FullPaths = []), e4.FileIndex || (e4.FileIndex = []), e4.FullPaths[n2(524)] !== e4.FileIndex.length) throw Error(`inconsistent CFB structure`);
      e4.FullPaths[n2(524)] === 0 && (e4[n2(526)][0] = a4 + `/`, e4[n2(532)][0] = { name: a4, type: 5 }), i4.CLSID && (e4.FileIndex[0].clsid = i4.CLSID), ge(e4);
    }
    function ge(e4) {
      var t3 = r, n2 = `Sh33tJ5`;
      if (!O.find(e4, `/` + n2)) {
        var i4 = D(4);
        i4[0] = 55, i4[1] = i4[3] = 50, i4[2] = 54, e4.FileIndex.push({ name: n2, type: 2, content: i4, size: 4, L: 69, R: 69, C: 69 }), e4[t3(526)].push(e4.FullPaths[0] + n2), A(e4);
      }
    }
    function A(e4, t3) {
      var n2 = r;
      k(e4);
      for (var o2 = false, s2 = false, c2 = e4.FullPaths[n2(524)] - 1; c2 >= 0; --c2) {
        var l2 = e4.FileIndex[c2];
        switch (l2.type) {
          case 0:
            s2 ? o2 = true : (e4[n2(532)][n2(529)](), e4.FullPaths[n2(529)]());
            break;
          case 1:
          case 2:
          case 5:
            s2 = true, isNaN(l2.R * l2.L * l2.C) && (o2 = true), l2.R > -1 && l2.L > -1 && l2.R == l2.L && (o2 = true);
            break;
          default:
            o2 = true;
            break;
        }
      }
      if (!(!o2 && !t3)) {
        var u2 = new Date(1987, 1, 19), d2 = 0, f2 = Object.create ? /* @__PURE__ */ Object.create(null) : {}, p2 = [];
        for (c2 = 0; c2 < e4.FullPaths[n2(524)]; ++c2) f2[e4.FullPaths[c2]] = true, e4[n2(532)][c2][n2(513)] !== 0 && p2.push([e4[n2(526)][c2], e4.FileIndex[c2]]);
        for (c2 = 0; c2 < p2.length; ++c2) {
          var m2 = a3(p2[c2][0]);
          for (s2 = f2[m2]; !s2; ) {
            for (; a3(m2) && !f2[a3(m2)]; ) m2 = a3(m2);
            p2[n2(540)]([m2, { name: g2(m2)[n2(501)](`/`, ``), type: 1, clsid: N, ct: u2, mt: u2, content: null }]), f2[m2] = true, m2 = a3(p2[c2][0]), s2 = f2[m2];
          }
        }
        for (p2.sort(function(e5, t4) {
          return i3(e5[0], t4[0]);
        }), e4.FullPaths = [], e4.FileIndex = [], c2 = 0; c2 < p2[n2(524)]; ++c2) e4.FullPaths[c2] = p2[c2][0], e4.FileIndex[c2] = p2[c2][1];
        for (c2 = 0; c2 < p2.length; ++c2) {
          var h2 = e4.FileIndex[c2], _2 = e4.FullPaths[c2];
          if (h2.name = g2(_2).replace(`/`, ``), h2.L = h2.R = h2.C = -(h2.color = 1), h2[n2(562)] = h2.content ? h2[n2(527)].length : 0, h2.start = 0, h2.clsid = h2[n2(489)] || N, c2 === 0) h2.C = p2.length > 1 ? 1 : -1, h2[n2(562)] = 0, h2.type = 5;
          else if (_2.slice(-1) == `/`) {
            for (d2 = c2 + 1; d2 < p2[n2(524)] && a3(e4.FullPaths[d2]) != _2; ++d2) ;
            for (h2.C = d2 >= p2[n2(524)] ? -1 : d2, d2 = c2 + 1; d2 < p2.length && a3(e4.FullPaths[d2]) != a3(_2); ++d2) ;
            h2.R = d2 >= p2.length ? -1 : d2, h2.type = 1;
          } else a3(e4[n2(526)][c2 + 1] || ``) == a3(_2) && (h2.R = c2 + 1), h2.type = 2;
        }
      }
    }
    function _e(e4, t3) {
      var n2 = r, i4 = t3 || {};
      if (i4.fileType == `mad`) return tt(e4, i4);
      switch (A(e4), i4.fileType) {
        case n2(542):
          return Je(e4, i4);
      }
      var a4 = (function(e5) {
        for (var t4 = n2, r2 = 0, i5 = 0, a5 = 0; a5 < e5.FileIndex.length; ++a5) {
          var o3 = e5.FileIndex[a5];
          if (o3.content) {
            var s3 = o3.content.length;
            s3 > 0 && (s3 < 4096 ? r2 += s3 + 63 >> 6 : i5 += s3 + 511 >> 9);
          }
        }
        for (var c2 = e5.FullPaths.length + 3 >> 2, l3 = r2 + 7 >> 3, u3 = r2 + 127 >> 7, d3 = l3 + i5 + c2 + u3, f3 = d3 + 127 >> 7, p3 = f3 <= 109 ? 0 : Math.ceil((f3 - 109) / 127); d3 + f3 + p3 + 127 >> 7 > f3; ) p3 = ++f3 <= 109 ? 0 : Math.ceil((f3 - 109) / 127);
        var m3 = [1, p3, f3, u3, c2, i5, r2, 0];
        return e5.FileIndex[0].size = r2 << 6, m3[7] = (e5.FileIndex[0][t4(571)] = m3[0] + m3[1] + m3[2] + m3[3] + m3[4] + m3[5]) + (m3[6] + 7 >> 3), m3;
      })(e4), o2 = D(a4[7] << 9), s2 = 0, l2 = 0;
      for (s2 = 0; s2 < 8; ++s2) o2.write_shift(1, be[s2]);
      for (s2 = 0; s2 < 8; ++s2) o2.write_shift(2, 0);
      for (o2.write_shift(2, 62), o2.write_shift(2, 3), o2.write_shift(2, 65534), o2.write_shift(2, 9), o2.write_shift(2, 6), s2 = 0; s2 < 3; ++s2) o2.write_shift(2, 0);
      for (o2.write_shift(4, 0), o2.write_shift(4, a4[2]), o2.write_shift(4, a4[0] + a4[1] + a4[2] + a4[3] - 1), o2.write_shift(4, 0), o2.write_shift(4, 4096), o2.write_shift(4, a4[3] ? a4[0] + a4[1] + a4[2] - 1 : M), o2.write_shift(4, a4[3]), o2.write_shift(-4, a4[1] ? a4[0] - 1 : M), o2.write_shift(4, a4[1]), s2 = 0; s2 < 109; ++s2) o2[n2(563)](-4, s2 < a4[2] ? a4[1] + s2 : -1);
      if (a4[1]) for (l2 = 0; l2 < a4[1]; ++l2) {
        for (; s2 < 236 + l2 * 127; ++s2) o2.write_shift(-4, s2 < a4[2] ? a4[1] + s2 : -1);
        o2.write_shift(-4, l2 === a4[1] - 1 ? M : l2 + 1);
      }
      var u2 = function(e5) {
        for (l2 += e5; s2 < l2 - 1; ++s2) o2.write_shift(-4, s2 + 1);
        e5 && (++s2, o2.write_shift(-4, M));
      };
      for (l2 = s2 = 0, l2 += a4[1]; s2 < l2; ++s2) o2.write_shift(-4, P.DIFSECT);
      for (l2 += a4[2]; s2 < l2; ++s2) o2.write_shift(-4, P.FATSECT);
      u2(a4[3]), u2(a4[4]);
      for (var d2 = 0, f2 = 0, p2 = e4.FileIndex[0]; d2 < e4[n2(532)].length; ++d2) p2 = e4.FileIndex[d2], p2.content && (f2 = p2[n2(527)].length, !(f2 < 4096) && (p2[n2(571)] = l2, u2(f2 + 511 >> 9)));
      for (u2(a4[6] + 7 >> 3); o2.l & 511; ) o2.write_shift(-4, P.ENDOFCHAIN);
      for (l2 = s2 = 0, d2 = 0; d2 < e4.FileIndex.length; ++d2) p2 = e4.FileIndex[d2], p2.content && (f2 = p2.content[n2(524)], !(!f2 || f2 >= 4096) && (p2.start = l2, u2(f2 + 63 >> 6)));
      for (; o2.l & 511; ) o2.write_shift(-4, P.ENDOFCHAIN);
      for (s2 = 0; s2 < a4[4] << 2; ++s2) {
        var m2 = e4.FullPaths[s2];
        if (!m2 || m2.length === 0) {
          for (d2 = 0; d2 < 17; ++d2) o2[n2(563)](4, 0);
          for (d2 = 0; d2 < 3; ++d2) o2[n2(563)](4, -1);
          for (d2 = 0; d2 < 12; ++d2) o2.write_shift(4, 0);
          continue;
        }
        p2 = e4.FileIndex[s2], s2 === 0 && (p2.start = p2.size ? p2.start - 1 : M);
        var h2 = s2 === 0 && i4.root || p2[n2(535)];
        if (h2.length > 32 && (console[n2(514)](`Name ` + h2 + ` will be truncated to ` + h2.slice(0, 32)), h2 = h2.slice(0, 32)), f2 = 2 * (h2.length + 1), o2.write_shift(64, h2, `utf16le`), o2[n2(563)](2, f2), o2.write_shift(1, p2.type), o2.write_shift(1, p2[n2(504)]), o2.write_shift(-4, p2.L), o2[n2(563)](-4, p2.R), o2.write_shift(-4, p2.C), p2.clsid) o2.write_shift(16, p2.clsid, `hex`);
        else for (d2 = 0; d2 < 4; ++d2) o2.write_shift(4, 0);
        o2.write_shift(4, p2.state || 0), o2.write_shift(4, 0), o2[n2(563)](4, 0), o2[n2(563)](4, 0), o2.write_shift(4, 0), o2.write_shift(4, p2.start), o2.write_shift(4, p2.size), o2.write_shift(4, 0);
      }
      for (s2 = 1; s2 < e4.FileIndex.length; ++s2) if (p2 = e4.FileIndex[s2], p2.size >= 4096) if (o2.l = p2[n2(571)] + 1 << 9, c && Buffer.isBuffer(p2[n2(527)])) p2.content.copy(o2, o2.l, 0, p2[n2(562)]), o2.l += p2.size + 511 & -512;
      else {
        for (d2 = 0; d2 < p2.size; ++d2) o2.write_shift(1, p2.content[d2]);
        for (; d2 & 511; ++d2) o2[n2(563)](1, 0);
      }
      for (s2 = 1; s2 < e4.FileIndex.length; ++s2) if (p2 = e4.FileIndex[s2], p2.size > 0 && p2.size < 4096) if (c && Buffer.isBuffer(p2.content)) p2.content.copy(o2, o2.l, 0, p2[n2(562)]), o2.l += p2.size + 63 & -64;
      else {
        for (d2 = 0; d2 < p2.size; ++d2) o2.write_shift(1, p2.content[d2]);
        for (; d2 & 63; ++d2) o2.write_shift(1, 0);
      }
      if (c) o2.l = o2.length;
      else for (; o2.l < o2.length; ) o2.write_shift(1, 0);
      return o2;
    }
    function ve(e4, t3) {
      var n2 = r, i4 = e4.FullPaths.map(function(e5) {
        return e5.toUpperCase();
      }), a4 = i4.map(function(e5) {
        var t4 = r, n3 = e5.split(`/`);
        return n3[n3[t4(524)] - (e5.slice(-1) == `/` ? 2 : 1)];
      }), o2 = false;
      t3.charCodeAt(0) === 47 ? (o2 = true, t3 = i4[0][n2(556)](0, -1) + t3) : o2 = t3[n2(487)](`/`) !== -1;
      var s2 = t3.toUpperCase(), c2 = o2 === true ? i4.indexOf(s2) : a4.indexOf(s2);
      if (c2 !== -1) return e4.FileIndex[c2];
      var l2 = !s2.match(m);
      for (s2 = s2.replace(p, ``), l2 && (s2 = s2.replace(m, `!`)), c2 = 0; c2 < i4.length; ++c2) if ((l2 ? i4[c2].replace(m, `!`) : i4[c2]).replace(p, ``) == s2 || (l2 ? a4[c2][n2(501)](m, `!`) : a4[c2]).replace(p, ``) == s2) return e4.FileIndex[c2];
      return null;
    }
    var j = 64, M = -2, ye = `d0cf11e0a1b11ae1`, be = [208, 207, 17, 224, 161, 177, 26, 225], N = `00000000000000000000000000000000`, P = { MAXREGSECT: -6, DIFSECT: -4, FATSECT: -3, ENDOFCHAIN: M, FREESECT: -1, HEADER_SIGNATURE: ye, HEADER_MINOR_VERSION: `3e00`, MAXREGSID: -6, NOSTREAM: -1, HEADER_CLSID: N, EntryTypes: [`unknown`, e3(490), `stream`, `lockbytes`, e3(484), `root`] };
    function xe(e4, t3, n2) {
      C2();
      var r2 = _e(e4, n2);
      x2.writeFileSync(t3, r2);
    }
    function F(t3) {
      for (var n2 = Array(t3[e3(524)]), r2 = 0; r2 < t3.length; ++r2) n2[r2] = String.fromCharCode(t3[r2]);
      return n2.join(``);
    }
    function Se(t3, n2) {
      var r2 = e3, i4 = _e(t3, n2);
      switch (n2 && n2.type || r2(528)) {
        case `file`:
          return C2(), x2.writeFileSync(n2.filename, i4), i4;
        case `binary`:
          return typeof i4 == `string` ? i4 : F(i4);
        case `base64`:
          return o(typeof i4 == r2(506) ? i4 : F(i4));
        case `buffer`:
          if (c) return Buffer.isBuffer(i4) ? i4 : l(i4);
        case `array`:
          return typeof i4 == `string` ? f(i4) : i4;
      }
      return i4;
    }
    var I;
    function Ce(t3) {
      var n2 = e3;
      try {
        var r2 = t3.InflateRaw, i4 = new r2();
        if (i4._processChunk(new Uint8Array([3, 0]), i4._finishFlushFlag), i4.bytesRead) I = t3;
        else throw Error(n2(519));
      } catch (e4) {
        console.error(n2(549) + (e4.message || e4));
      }
    }
    function we(t3, n2) {
      var r2 = e3;
      if (!I) return Ge(t3, n2);
      var i4 = I.InflateRaw, a4 = new i4(), o2 = a4._processChunk(t3[r2(556)](t3.l), a4[r2(499)]);
      return t3.l += a4.bytesRead, o2;
    }
    function Te(t3) {
      return I ? I[e3(538)](t3) : Le(t3);
    }
    var Ee = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], L = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], R = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    function De(e4) {
      var t3 = (e4 << 1 | e4 << 11) & 139536 | (e4 << 5 | e4 << 15) & 558144;
      return (t3 >> 16 | t3 >> 8 | t3) & 255;
    }
    for (var z = typeof Uint8Array < `u`, B = z ? new Uint8Array(256) : [], V = 0; V < 256; ++V) B[V] = De(V);
    function Oe(e4, t3) {
      var n2 = B[e4 & 255];
      return t3 <= 8 ? n2 >>> 8 - t3 : (n2 = n2 << 8 | B[e4 >> 8 & 255], t3 <= 16 ? n2 >>> 16 - t3 : (n2 = n2 << 8 | B[e4 >> 16 & 255], n2 >>> 24 - t3));
    }
    function ke(e4, t3) {
      var n2 = t3 & 7, r2 = t3 >>> 3;
      return (e4[r2] | (n2 <= 6 ? 0 : e4[r2 + 1] << 8)) >>> n2 & 3;
    }
    function H(e4, t3) {
      var n2 = t3 & 7, r2 = t3 >>> 3;
      return (e4[r2] | (n2 <= 5 ? 0 : e4[r2 + 1] << 8)) >>> n2 & 7;
    }
    function Ae(e4, t3) {
      var n2 = t3 & 7, r2 = t3 >>> 3;
      return (e4[r2] | (n2 <= 4 ? 0 : e4[r2 + 1] << 8)) >>> n2 & 15;
    }
    function je(e4, t3) {
      var n2 = t3 & 7, r2 = t3 >>> 3;
      return (e4[r2] | (n2 <= 3 ? 0 : e4[r2 + 1] << 8)) >>> n2 & 31;
    }
    function Me(e4, t3) {
      var n2 = t3 & 7, r2 = t3 >>> 3;
      return (e4[r2] | (n2 <= 1 ? 0 : e4[r2 + 1] << 8)) >>> n2 & 127;
    }
    function U(e4, t3, n2) {
      var r2 = t3 & 7, i4 = t3 >>> 3, a4 = (1 << n2) - 1, o2 = e4[i4] >>> r2;
      return n2 < 8 - r2 || (o2 |= e4[i4 + 1] << 8 - r2, n2 < 16 - r2) || (o2 |= e4[i4 + 2] << 16 - r2, n2 < 24 - r2) || (o2 |= e4[i4 + 3] << 24 - r2), o2 & a4;
    }
    function Ne(e4, t3, n2) {
      var r2 = t3 & 7, i4 = t3 >>> 3;
      return r2 <= 5 ? e4[i4] |= (n2 & 7) << r2 : (e4[i4] |= n2 << r2 & 255, e4[i4 + 1] = (n2 & 7) >> 8 - r2), t3 + 3;
    }
    function Pe(e4, t3, n2) {
      var r2 = t3 & 7, i4 = t3 >>> 3;
      return n2 = (n2 & 1) << r2, e4[i4] |= n2, t3 + 1;
    }
    function W(e4, t3, n2) {
      var r2 = t3 & 7, i4 = t3 >>> 3;
      return n2 <<= r2, e4[i4] |= n2 & 255, n2 >>>= 8, e4[i4 + 1] = n2, t3 + 8;
    }
    function Fe(e4, t3, n2) {
      var r2 = t3 & 7, i4 = t3 >>> 3;
      return n2 <<= r2, e4[i4] |= n2 & 255, n2 >>>= 8, e4[i4 + 1] = n2 & 255, e4[i4 + 2] = n2 >>> 8, t3 + 16;
    }
    function G(e4, t3) {
      var n2 = e4.length, r2 = 2 * n2 > t3 ? 2 * n2 : t3 + 5, i4 = 0;
      if (n2 >= t3) return e4;
      if (c) {
        var a4 = d(r2);
        if (e4.copy) e4.copy(a4);
        else for (; i4 < e4.length; ++i4) a4[i4] = e4[i4];
        return a4;
      } else if (z) {
        var o2 = new Uint8Array(r2);
        if (o2.set) o2.set(e4);
        else for (; i4 < n2; ++i4) o2[i4] = e4[i4];
        return o2;
      }
      return e4.length = r2, e4;
    }
    function K(e4) {
      for (var t3 = Array(e4), n2 = 0; n2 < e4; ++n2) t3[n2] = 0;
      return t3;
    }
    function q(e4, t3, n2) {
      var r2 = 1, i4 = 0, a4 = 0, o2 = 0, s2 = 0, c2 = e4.length, l2 = z ? new Uint16Array(32) : K(32);
      for (a4 = 0; a4 < 32; ++a4) l2[a4] = 0;
      for (a4 = c2; a4 < n2; ++a4) e4[a4] = 0;
      c2 = e4.length;
      var u2 = z ? new Uint16Array(c2) : K(c2);
      for (a4 = 0; a4 < c2; ++a4) l2[i4 = e4[a4]]++, r2 < i4 && (r2 = i4), u2[a4] = 0;
      for (l2[0] = 0, a4 = 1; a4 <= r2; ++a4) l2[a4 + 16] = s2 = s2 + l2[a4 - 1] << 1;
      for (a4 = 0; a4 < c2; ++a4) s2 = e4[a4], s2 != 0 && (u2[a4] = l2[s2 + 16]++);
      var d2 = 0;
      for (a4 = 0; a4 < c2; ++a4) if (d2 = e4[a4], d2 != 0) for (s2 = Oe(u2[a4], r2) >> r2 - d2, o2 = (1 << r2 + 4 - d2) - 1; o2 >= 0; --o2) t3[s2 | o2 << d2] = d2 & 15 | a4 << 4;
      return r2;
    }
    var J = z ? new Uint16Array(512) : K(512), Y = z ? new Uint16Array(32) : K(32);
    if (!z) {
      for (var X = 0; X < 512; ++X) J[X] = 0;
      for (X = 0; X < 32; ++X) Y[X] = 0;
    }
    (function() {
      for (var t3 = e3, n2 = [], r2 = 0; r2 < 32; r2++) n2[t3(540)](5);
      q(n2, Y, 32);
      var i4 = [];
      for (r2 = 0; r2 <= 143; r2++) i4.push(8);
      for (; r2 <= 255; r2++) i4.push(9);
      for (; r2 <= 279; r2++) i4.push(7);
      for (; r2 <= 287; r2++) i4.push(8);
      q(i4, J, 288);
    })();
    var Ie = (function() {
      for (var e4 = z ? new Uint8Array(32768) : [], t3 = 0, n2 = 0; t3 < R.length - 1; ++t3) for (; n2 < R[t3 + 1]; ++n2) e4[n2] = t3;
      for (; n2 < 32768; ++n2) e4[n2] = 29;
      var i4 = z ? new Uint8Array(259) : [];
      for (t3 = 0, n2 = 0; t3 < L.length - 1; ++t3) for (; n2 < L[t3 + 1]; ++n2) i4[n2] = t3;
      function a4(e5, t4) {
        for (var n3 = 0; n3 < e5.length; ) {
          var r2 = Math.min(65535, e5.length - n3), i5 = n3 + r2 == e5.length;
          for (t4.write_shift(1, +i5), t4.write_shift(2, r2), t4.write_shift(2, ~r2 & 65535); r2-- > 0; ) t4[t4.l++] = e5[n3++];
        }
        return t4.l;
      }
      function o2(t4, n3) {
        for (var a5 = r, o3 = 0, s2 = 0, c2 = z ? new Uint16Array(32768) : []; s2 < t4[a5(524)]; ) {
          var l2 = Math.min(65535, t4[a5(524)] - s2);
          if (l2 < 10) {
            for (o3 = Ne(n3, o3, +(s2 + l2 == t4.length)), o3 & 7 && (o3 += 8 - (o3 & 7)), n3.l = o3 / 8 | 0, n3.write_shift(2, l2), n3.write_shift(2, ~l2 & 65535); l2-- > 0; ) n3[n3.l++] = t4[s2++];
            o3 = n3.l * 8;
            continue;
          }
          o3 = Ne(n3, o3, +(s2 + l2 == t4[a5(524)]) + 2);
          for (var u2 = 0; l2-- > 0; ) {
            var d2 = t4[s2];
            u2 = (u2 << 5 ^ d2) & 32767;
            var f2 = -1, p2 = 0;
            if ((f2 = c2[u2]) && (f2 |= s2 & -32768, f2 > s2 && (f2 -= 32768), f2 < s2)) for (; t4[f2 + p2] == t4[s2 + p2] && p2 < 250; ) ++p2;
            if (p2 > 2) {
              d2 = i4[p2], d2 <= 22 ? o3 = W(n3, o3, B[d2 + 1] >> 1) - 1 : (W(n3, o3, 3), o3 += 5, W(n3, o3, B[d2 - 23] >> 5), o3 += 3);
              var m2 = d2 < 8 ? 0 : d2 - 4 >> 2;
              m2 > 0 && (Fe(n3, o3, p2 - L[d2]), o3 += m2), d2 = e4[s2 - f2], o3 = W(n3, o3, B[d2] >> 3), o3 -= 3;
              var h2 = d2 < 4 ? 0 : d2 - 2 >> 1;
              h2 > 0 && (Fe(n3, o3, s2 - f2 - R[d2]), o3 += h2);
              for (var g3 = 0; g3 < p2; ++g3) c2[u2] = s2 & 32767, u2 = (u2 << 5 ^ t4[s2]) & 32767, ++s2;
              l2 -= p2 - 1;
            } else d2 <= 143 ? d2 += 48 : o3 = Pe(n3, o3, 1), o3 = W(n3, o3, B[d2]), c2[u2] = s2 & 32767, ++s2;
          }
          o3 = W(n3, o3, 0) - 1;
        }
        return n3.l = (o3 + 7) / 8 | 0, n3.l;
      }
      return function(e5, t4) {
        return e5.length < 8 ? a4(e5, t4) : o2(e5, t4);
      };
    })();
    function Le(t3) {
      var n2 = e3, r2 = D(50 + Math.floor(t3.length * 1.1)), i4 = Ie(t3, r2);
      return r2[n2(556)](0, i4);
    }
    var Re = z ? new Uint16Array(32768) : K(32768), ze = z ? new Uint16Array(32768) : K(32768), Be = z ? new Uint16Array(128) : K(128), Ve = 1, He = 1;
    function Ue(t3, n2) {
      var r2 = e3, i4 = je(t3, n2) + 257;
      n2 += 5;
      var a4 = je(t3, n2) + 1;
      n2 += 5;
      var o2 = Ae(t3, n2) + 4;
      n2 += 4;
      for (var s2 = 0, c2 = z ? new Uint8Array(19) : K(19), l2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], u2 = 1, d2 = z ? new Uint8Array(8) : K(8), f2 = z ? new Uint8Array(8) : K(8), p2 = c2.length, m2 = 0; m2 < o2; ++m2) c2[Ee[m2]] = s2 = H(t3, n2), u2 < s2 && (u2 = s2), d2[s2]++, n2 += 3;
      var h2 = 0;
      for (d2[0] = 0, m2 = 1; m2 <= u2; ++m2) f2[m2] = h2 = h2 + d2[m2 - 1] << 1;
      for (m2 = 0; m2 < p2; ++m2) (h2 = c2[m2]) != 0 && (l2[m2] = f2[h2]++);
      var g3 = 0;
      for (m2 = 0; m2 < p2; ++m2) if (g3 = c2[m2], g3 != 0) {
        h2 = B[l2[m2]] >> 8 - g3;
        for (var _2 = (1 << 7 - g3) - 1; _2 >= 0; --_2) Be[h2 | _2 << g3] = g3 & 7 | m2 << 3;
      }
      var v3 = [];
      for (u2 = 1; v3.length < i4 + a4; ) switch (h2 = Be[Me(t3, n2)], n2 += h2 & 7, h2 >>>= 3) {
        case 16:
          for (s2 = 3 + ke(t3, n2), n2 += 2, h2 = v3[v3.length - 1]; s2-- > 0; ) v3.push(h2);
          break;
        case 17:
          for (s2 = 3 + H(t3, n2), n2 += 3; s2-- > 0; ) v3.push(0);
          break;
        case 18:
          for (s2 = 11 + Me(t3, n2), n2 += 7; s2-- > 0; ) v3[r2(540)](0);
          break;
        default:
          v3.push(h2), u2 < h2 && (u2 = h2);
          break;
      }
      var y3 = v3.slice(0, i4), b3 = v3.slice(i4);
      for (m2 = i4; m2 < 286; ++m2) y3[m2] = 0;
      for (m2 = a4; m2 < 30; ++m2) b3[m2] = 0;
      return Ve = q(y3, Re, 286), He = q(b3, ze, 30), n2;
    }
    function We(t3, n2) {
      var r2 = e3;
      if (t3[0] == 3 && !(t3[1] & 3)) return [u(n2), 2];
      for (var i4 = 0, a4 = 0, o2 = d(n2 || 1 << 18), s2 = 0, c2 = o2[r2(524)] >>> 0, l2 = 0, f2 = 0; !(a4 & 1); ) {
        if (a4 = H(t3, i4), i4 += 3, a4 >>> 1) a4 >> 1 == 1 ? (l2 = 9, f2 = 5) : (i4 = Ue(t3, i4), l2 = Ve, f2 = He);
        else {
          i4 & 7 && (i4 += 8 - (i4 & 7));
          var p2 = t3[i4 >>> 3] | t3[(i4 >>> 3) + 1] << 8;
          if (i4 += 32, p2 > 0) for (!n2 && c2 < s2 + p2 && (o2 = G(o2, s2 + p2), c2 = o2.length); p2-- > 0; ) o2[s2++] = t3[i4 >>> 3], i4 += 8;
          continue;
        }
        for (; ; ) {
          !n2 && c2 < s2 + 32767 && (o2 = G(o2, s2 + 32767), c2 = o2.length);
          var m2 = U(t3, i4, l2), h2 = a4 >>> 1 == 1 ? J[m2] : Re[m2];
          if (i4 += h2 & 15, h2 >>>= 4, !(h2 >>> 8 & 255)) o2[s2++] = h2;
          else if (h2 == 256) break;
          else {
            h2 -= 257;
            var g3 = h2 < 8 ? 0 : h2 - 4 >> 2;
            g3 > 5 && (g3 = 0);
            var _2 = s2 + L[h2];
            g3 > 0 && (_2 += U(t3, i4, g3), i4 += g3), m2 = U(t3, i4, f2), h2 = a4 >>> 1 == 1 ? Y[m2] : ze[m2], i4 += h2 & 15, h2 >>>= 4;
            var v3 = h2 < 4 ? 0 : h2 - 2 >> 1, y3 = R[h2];
            for (v3 > 0 && (y3 += U(t3, i4, v3), i4 += v3), !n2 && c2 < _2 && (o2 = G(o2, _2 + 100), c2 = o2.length); s2 < _2; ) o2[s2] = o2[s2 - y3], ++s2;
          }
        }
      }
      return n2 ? [o2, i4 + 7 >>> 3] : [o2.slice(0, s2), i4 + 7 >>> 3];
    }
    function Ge(e4, t3) {
      var n2 = We(e4.slice(e4.l || 0), t3);
      return e4.l += n2[1], n2[0];
    }
    function Z(e4, t3) {
      if (e4) typeof console < `u` && console.error(t3);
      else throw Error(t3);
    }
    function Ke(t3, n2) {
      var r2 = e3, i4 = t3;
      E(i4, 0);
      var a4 = { FileIndex: [], FullPaths: [] };
      k(a4, { root: n2.root });
      for (var o2 = i4.length - 4; (i4[o2] != 80 || i4[o2 + 1] != 75 || i4[o2 + 2] != 5 || i4[o2 + 3] != 6) && o2 >= 0; ) --o2;
      i4.l = o2 + 4, i4.l += 4;
      var s2 = i4.read_shift(2);
      for (i4.l += 6, i4.l = i4.read_shift(4), o2 = 0; o2 < s2; ++o2) {
        i4.l += 20;
        var c2 = i4.read_shift(4), l2 = i4.read_shift(4), u2 = i4.read_shift(2), d2 = i4.read_shift(2), f2 = i4.read_shift(2);
        i4.l += 8;
        var p2 = i4.read_shift(4), m2 = b2(i4[r2(556)](i4.l + u2, i4.l + u2 + d2));
        i4.l += u2 + d2 + f2;
        var h2 = i4.l;
        i4.l = p2 + 4, qe(i4, c2, l2, a4, m2), i4.l = h2;
      }
      return a4;
    }
    function qe(t3, n2, r2, i4, a4) {
      var o2 = e3;
      t3.l += 2;
      var s2 = t3.read_shift(2), c2 = t3.read_shift(2), l2 = y2(t3);
      if (s2 & 8257) throw Error(`Unsupported ZIP encryption`);
      for (var u2 = t3.read_shift(4), d2 = t3.read_shift(4), f2 = t3[o2(536)](4), p2 = t3.read_shift(2), m2 = t3[o2(536)](2), h2 = ``, g3 = 0; g3 < p2; ++g3) h2 += String.fromCharCode(t3[t3.l++]);
      if (m2) {
        var _2 = b2(t3.slice(t3.l, t3.l + m2));
        (_2[21589] || {}).mt && (l2 = _2[21589].mt), ((a4 || {})[21589] || {}).mt && (l2 = a4[21589].mt);
      }
      t3.l += m2;
      var v3 = t3.slice(t3.l, t3.l + d2);
      switch (c2) {
        case 8:
          v3 = we(t3, f2);
          break;
        case 0:
          break;
        default:
          throw Error(o2(558) + c2);
      }
      var x3 = false;
      s2 & 8 && (u2 = t3.read_shift(4), u2 == 134695760 && (u2 = t3.read_shift(4), x3 = true), d2 = t3.read_shift(4), f2 = t3[o2(536)](4)), d2 != n2 && Z(x3, `Bad compressed size: ` + n2 + ` != ` + d2), f2 != r2 && Z(x3, `Bad uncompressed size: ` + r2 + o2(520) + f2);
      var S2 = se[o2(568)](v3, 0);
      u2 >> 0 != S2 >> 0 && Z(x3, `Bad CRC32 checksum: ` + u2 + ` != ` + S2), $(i4, h2, v3, { unsafe: true, mt: l2 });
    }
    function Je(t3, n2) {
      var r2 = e3, i4 = n2 || {}, a4 = [], o2 = [], s2 = D(1), c2 = i4.compression ? 8 : 0, l2 = 0, u2 = 0, d2 = 0, f2 = 0, p2 = 0, m2 = t3.FullPaths[0], h2 = m2, g3 = t3.FileIndex[0], _2 = [], y3 = 0;
      for (u2 = 1; u2 < t3.FullPaths.length; ++u2) if (h2 = t3.FullPaths[u2].slice(m2.length), g3 = t3.FileIndex[u2], !(!g3.size || !g3[r2(527)] || h2 == `Sh33tJ5`)) {
        var b3 = f2, x3 = D(h2.length);
        for (d2 = 0; d2 < h2.length; ++d2) x3[r2(563)](1, h2.charCodeAt(d2) & 127);
        x3 = x3[r2(556)](0, x3.l), _2[p2] = se.buf(g3.content, 0);
        var C3 = g3.content;
        c2 == 8 && (C3 = Te(C3)), s2 = D(30), s2.write_shift(4, 67324752), s2.write_shift(2, 20), s2.write_shift(2, l2), s2.write_shift(2, c2), g3.mt ? v2(s2, g3.mt) : s2.write_shift(4, 0), s2[r2(563)](-4, l2 & 8 ? 0 : _2[p2]), s2[r2(563)](4, l2 & 8 ? 0 : C3[r2(524)]), s2.write_shift(4, l2 & 8 ? 0 : g3[r2(527)].length), s2.write_shift(2, x3.length), s2.write_shift(2, 0), f2 += s2[r2(524)], a4[r2(540)](s2), f2 += x3.length, a4.push(x3), f2 += C3.length, a4.push(C3), l2 & 8 && (s2 = D(12), s2.write_shift(-4, _2[p2]), s2.write_shift(4, C3.length), s2.write_shift(4, g3.content.length), f2 += s2.l, a4.push(s2)), s2 = D(46), s2.write_shift(4, 33639248), s2.write_shift(2, 0), s2.write_shift(2, 20), s2.write_shift(2, l2), s2.write_shift(2, c2), s2.write_shift(4, 0), s2.write_shift(-4, _2[p2]), s2.write_shift(4, C3.length), s2.write_shift(4, g3.content.length), s2[r2(563)](2, x3.length), s2.write_shift(2, 0), s2.write_shift(2, 0), s2.write_shift(2, 0), s2[r2(563)](2, 0), s2.write_shift(4, 0), s2.write_shift(4, b3), y3 += s2.l, o2[r2(540)](s2), y3 += x3.length, o2.push(x3), ++p2;
      }
      return s2 = D(22), s2.write_shift(4, 101010256), s2.write_shift(2, 0), s2.write_shift(2, 0), s2.write_shift(2, p2), s2.write_shift(2, p2), s2.write_shift(4, y3), s2.write_shift(4, f2), s2.write_shift(2, 0), S([S(a4), S(o2), s2]);
    }
    var Q = { htm: e3(569), xml: `text/xml`, gif: `image/gif`, jpg: `image/jpeg`, png: e3(500), mso: `application/x-mso`, thmx: e3(566), sh33tj5: `application/octet-stream` };
    function Ye(t3, n2) {
      if (t3[e3(546)]) return t3.ctype;
      var r2 = t3.name || ``, i4 = r2.match(/\.([^\.]+)$/);
      return i4 && Q[i4[1]] || n2 && (i4 = (r2 = n2).match(/[\.\\]([^\.\\])+$/), i4 && Q[i4[1]]) ? Q[i4[1]] : `application/octet-stream`;
    }
    function Xe(t3) {
      for (var n2 = e3, r2 = o(t3), i4 = [], a4 = 0; a4 < r2.length; a4 += 76) i4.push(r2.slice(a4, a4 + 76));
      return i4[n2(509)](`\r
`) + `\r
`;
    }
    function Ze(t3) {
      var n2 = e3, i4 = t3.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(e4) {
        var t4 = r, n3 = e4.charCodeAt(0).toString(16).toUpperCase();
        return `=` + (n3[t4(524)] == 1 ? `0` + n3 : n3);
      });
      i4 = i4.replace(/ $/gm, `=20`).replace(/\t$/gm, n2(564)), i4.charAt(0) == `
` && (i4 = `=0D` + i4.slice(1)), i4 = i4.replace(/\r(?!\n)/gm, `=0D`).replace(/\n\n/gm, n2(531))[n2(501)](/([^\r\n])\n/gm, `$1=0A`);
      for (var a4 = [], o2 = i4.split(`\r
`), s2 = 0; s2 < o2.length; ++s2) {
        var c2 = o2[s2];
        if (c2.length == 0) {
          a4.push(``);
          continue;
        }
        for (var l2 = 0; l2 < c2.length; ) {
          var u2 = 76, d2 = c2.slice(l2, l2 + u2);
          d2.charAt(u2 - 1) == `=` ? u2-- : d2.charAt(u2 - 2) == `=` ? u2 -= 2 : d2.charAt(u2 - 3) == `=` && (u2 -= 3), d2 = c2.slice(l2, l2 + u2), l2 += u2, l2 < c2[n2(524)] && (d2 += `=`), a4.push(d2);
        }
      }
      return a4.join(`\r
`);
    }
    function Qe(t3) {
      for (var n2 = e3, r2 = [], i4 = 0; i4 < t3.length; ++i4) {
        for (var a4 = t3[i4]; i4 <= t3.length && a4[n2(494)](a4.length - 1) == `=`; ) a4 = a4[n2(556)](0, a4[n2(524)] - 1) + t3[++i4];
        r2.push(a4);
      }
      for (var o2 = 0; o2 < r2.length; ++o2) r2[o2] = r2[o2].replace(/[=][0-9A-Fa-f]{2}/g, function(e4) {
        return String[n2(555)](parseInt(e4.slice(1), 16));
      });
      return f(r2.join(`\r
`));
    }
    function $e(t3, n2, r2) {
      for (var i4 = e3, a4 = ``, o2 = ``, c2 = ``, l2, u2 = 0; u2 < 10; ++u2) {
        var d2 = n2[u2];
        if (!d2 || d2.match(/^\s*$/)) break;
        var p2 = d2.match(/^(.*?):\s*([^\s].*)$/);
        if (p2) switch (p2[1][i4(483)]()) {
          case `content-location`:
            a4 = p2[2].trim();
            break;
          case `content-type`:
            c2 = p2[2].trim();
            break;
          case `content-transfer-encoding`:
            o2 = p2[2][i4(511)]();
            break;
        }
      }
      switch (++u2, o2.toLowerCase()) {
        case `base64`:
          l2 = f(s(n2.slice(u2).join(``)));
          break;
        case `quoted-printable`:
          l2 = Qe(n2.slice(u2));
          break;
        default:
          throw Error(`Unsupported Content-Transfer-Encoding ` + o2);
      }
      var m2 = $(t3, a4.slice(r2.length), l2, { unsafe: true });
      c2 && (m2[i4(546)] = c2);
    }
    function et(t3, n2) {
      var r2 = e3;
      if (F(t3[r2(556)](0, 13)).toLowerCase() != r2(505)) throw Error(`Unsupported MAD header`);
      var i4 = n2 && n2.root || ``, a4 = (c && Buffer.isBuffer(t3) ? t3.toString(`binary`) : F(t3))[r2(561)](`\r
`), o2 = 0, s2 = ``;
      for (o2 = 0; o2 < a4.length; ++o2) if (s2 = a4[o2], /^Content-Location:/i.test(s2) && (s2 = s2.slice(s2.indexOf(`file`)), i4 || (i4 = s2.slice(0, s2[r2(550)](`/`) + 1)), s2.slice(0, i4.length) != i4)) for (; i4.length > 0 && (i4 = i4.slice(0, i4.length - 1), i4 = i4.slice(0, i4.lastIndexOf(`/`) + 1), s2.slice(0, i4[r2(524)]) != i4); ) ;
      var l2 = (a4[1] || ``)[r2(543)](/boundary="(.*?)"/);
      if (!l2) throw Error(`MAD cannot find boundary`);
      var u2 = `--` + (l2[1] || ``), d2 = { FileIndex: [], FullPaths: [] };
      k(d2);
      var f2, p2 = 0;
      for (o2 = 0; o2 < a4[r2(524)]; ++o2) {
        var m2 = a4[o2];
        m2 !== u2 && m2 !== u2 + `--` || (p2++ && $e(d2, a4.slice(f2, o2), i4), f2 = o2);
      }
      return d2;
    }
    function tt(t3, n2) {
      var r2 = e3, i4 = n2 || {}, a4 = i4[r2(495)] || `SheetJS`;
      a4 = `------=` + a4;
      for (var o2 = [`MIME-Version: 1.0`, r2(523) + a4[r2(556)](2) + `"`, ``, ``, ``], s2 = t3[r2(526)][0], l2 = s2, u2 = t3.FileIndex[0], d2 = 1; d2 < t3[r2(526)].length; ++d2) if (l2 = t3.FullPaths[d2].slice(s2.length), u2 = t3[r2(532)][d2], !(!u2[r2(562)] || !u2[r2(527)] || l2 == `Sh33tJ5`)) {
        l2 = l2[r2(501)](/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(e4) {
          return `_x` + e4.charCodeAt(0).toString(16) + `_`;
        }).replace(/[\u0080-\uFFFF]/g, function(e4) {
          return `_u` + e4.charCodeAt(0).toString(16) + `_`;
        });
        for (var f2 = u2.content, p2 = c && Buffer.isBuffer(f2) ? f2[r2(565)](`binary`) : F(f2), m2 = 0, h2 = Math.min(1024, p2.length), g3 = 0, _2 = 0; _2 <= h2; ++_2) (g3 = p2[r2(515)](_2)) >= 32 && g3 < 128 && ++m2;
        var v3 = m2 >= h2 * 4 / 5;
        o2.push(a4), o2.push(`Content-Location: ` + (i4.root || `file:///C:/SheetJS/`) + l2), o2.push(`Content-Transfer-Encoding: ` + (v3 ? `quoted-printable` : r2(537))), o2[r2(540)](`Content-Type: ` + Ye(u2, l2)), o2[r2(540)](``), o2[r2(540)](v3 ? Ze(p2) : Xe(p2));
      }
      return o2.push(a4 + r2(502)), o2.join(`\r
`);
    }
    function nt(e4) {
      var t3 = {};
      return k(t3, e4), t3;
    }
    function $(t3, n2, r2, i4) {
      var a4 = e3, o2 = i4 && i4.unsafe;
      o2 || k(t3);
      var s2 = !o2 && O.find(t3, n2);
      if (!s2) {
        var c2 = t3[a4(526)][0];
        n2.slice(0, c2[a4(524)]) == c2 ? c2 = n2 : (c2.slice(-1) != `/` && (c2 += `/`), c2 = (c2 + n2).replace(`//`, `/`)), s2 = { name: g2(n2), type: 2 }, t3.FileIndex.push(s2), t3.FullPaths[a4(540)](c2), o2 || O.utils[a4(488)](t3);
      }
      return s2.content = r2, s2.size = r2 ? r2.length : 0, i4 && (i4.CLSID && (s2.clsid = i4.CLSID), i4.mt && (s2.mt = i4.mt), i4.ct && (s2.ct = i4.ct)), s2;
    }
    function rt(t3, n2) {
      var r2 = e3;
      k(t3);
      var i4 = O.find(t3, n2);
      if (i4) {
        for (var a4 = 0; a4 < t3[r2(532)][r2(524)]; ++a4) if (t3.FileIndex[a4] == i4) return t3.FileIndex.splice(a4, 1), t3.FullPaths.splice(a4, 1), true;
      }
      return false;
    }
    function it(t3, n2, r2) {
      var i4 = e3;
      k(t3);
      var a4 = O.find(t3, n2);
      if (a4) {
        for (var o2 = 0; o2 < t3[i4(532)].length; ++o2) if (t3.FileIndex[o2] == a4) return t3.FileIndex[o2].name = g2(r2), t3.FullPaths[o2] = r2, true;
      }
      return false;
    }
    function at(e4) {
      A(e4, true);
    }
    return t2.find = ve, t2.read = he, t2.parse = w2, t2[e3(522)] = Se, t2.writeFile = xe, t2.utils = { cfb_new: nt, cfb_add: $, cfb_del: rt, cfb_mov: it, cfb_gc: at, ReadShift: ne, CheckField: oe, prep_blob: E, bconcat: S, use_zlib: Ce, _deflateRaw: Le, _inflateRaw: Ge, consts: P }, t2;
  })();
  t !== void 0 && i2 !== void 0 && typeof DO_NOT_EXPORT_CFB > `u` && (i2.exports = O);
})();
export {
  a as default
};
