import { a as e, r as t } from "./chunk-DeXYQlWK.js";
(function(e2, t2) {
  for (var r2 = n, i2 = e2(); ; ) try {
    if (parseInt(r2(565)) / 1 * (parseInt(r2(555)) / 2) + -parseInt(r2(499)) / 3 + parseInt(r2(509)) / 4 * (-parseInt(r2(525)) / 5) + parseInt(r2(604)) / 6 * (-parseInt(r2(577)) / 7) + parseInt(r2(557)) / 8 + -parseInt(r2(538)) / 9 + parseInt(r2(632)) / 10 === t2) break;
    i2.push(i2.shift());
  } catch {
    i2.push(i2.shift());
  }
})(i, 506280);
function n(e2, t2) {
  return e2 -= 498, i()[e2];
}
var r = e((e2, r2) => {
  (function(t2) {
    if (typeof e2 == `object` && r2 !== void 0) r2.exports = t2();
    else if (typeof define == `function` && define.amd) define([], t2);
    else {
      var n2 = typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : this;
      n2.pica = t2();
    }
  })(function() {
    return (/* @__PURE__ */ (function() {
      function e3(r3, i2, a2) {
        var o = n;
        function s(o2, l2) {
          var u = n;
          if (!i2[o2]) {
            if (!r3[o2]) {
              var d = typeof t == `function` && t;
              if (!l2 && d) return d(o2, true);
              if (c) return c(o2, true);
              var f = Error(`Cannot find module '` + o2 + `'`);
              throw f.code = u(572), f;
            }
            var p = i2[o2] = { exports: {} };
            r3[o2][0][u(559)](p.exports, function(e4) {
              var t2 = r3[o2][1][e4];
              return s(t2 || e4);
            }, p, p.exports, e3, r3, i2, a2);
          }
          return i2[o2].exports;
        }
        for (var c = typeof t == `function` && t, l = 0; l < a2[o(507)]; l++) s(a2[l]);
        return s;
      }
      return e3;
    })())({ 1: [function(e3, t2, r3) {
      var i2 = n, a2 = e3(`inherits`), o = e3(`multimath`), s = e3(`./mm_unsharp_mask`), c = e3(`./mm_resize`);
      function l(e4) {
        var t3 = n, r4 = e4 || [], i3 = { js: r4.indexOf(`js`) >= 0, wasm: r4.indexOf(`wasm`) >= 0 };
        o.call(this, i3), this.features = { js: i3.js, wasm: i3.wasm && this[t3(608)]() }, this[t3(575)](s), this.use(c);
      }
      a2(l, o), l[i2(501)].resizeAndUnsharp = function(e4, t3) {
        var n2 = i2, r4 = this.resize(e4, t3);
        return e4.unsharpAmount && this.unsharp_mask(r4, e4[n2(582)], e4.toHeight, e4.unsharpAmount, e4[n2(513)], e4.unsharpThreshold), r4;
      }, t2.exports = l;
    }, { "./mm_resize": 4, "./mm_unsharp_mask": 9, inherits: 19, multimath: 20 }], 2: [function(e3, t2, n2) {
      function r3(e4) {
        return e4 < 0 ? 0 : e4 > 255 ? 255 : e4;
      }
      function i2(e4, t3, n3, i3, a3, o) {
        var s, c, l, u, d, f, p, m, h, g, _, v = 0, y = 0;
        for (h = 0; h < i3; h++) {
          for (d = 0, g = 0; g < a3; g++) {
            for (f = o[d++], p = o[d++], m = v + f * 4 | 0, s = c = l = u = 0; p > 0; p--) _ = o[d++], u = u + _ * e4[m + 3] | 0, l = l + _ * e4[m + 2] | 0, c = c + _ * e4[m + 1] | 0, s = s + _ * e4[m] | 0, m = m + 4 | 0;
            t3[y + 3] = r3(u + 8192 >> 14), t3[y + 2] = r3(l + 8192 >> 14), t3[y + 1] = r3(c + 8192 >> 14), t3[y] = r3(s + 8192 >> 14), y = y + i3 * 4 | 0;
          }
          y = (h + 1) * 4 | 0, v = (h + 1) * n3 * 4 | 0;
        }
      }
      function a2(e4, t3, n3, i3, a3, o) {
        var s, c, l, u, d, f, p, m, h, g, _, v = 0, y = 0;
        for (h = 0; h < i3; h++) {
          for (d = 0, g = 0; g < a3; g++) {
            for (f = o[d++], p = o[d++], m = v + f * 4 | 0, s = c = l = u = 0; p > 0; p--) _ = o[d++], u = u + _ * e4[m + 3] | 0, l = l + _ * e4[m + 2] | 0, c = c + _ * e4[m + 1] | 0, s = s + _ * e4[m] | 0, m = m + 4 | 0;
            t3[y + 3] = r3(u + 8192 >> 14), t3[y + 2] = r3(l + 8192 >> 14), t3[y + 1] = r3(c + 8192 >> 14), t3[y] = r3(s + 8192 >> 14), y = y + i3 * 4 | 0;
          }
          y = (h + 1) * 4 | 0, v = (h + 1) * n3 * 4 | 0;
        }
      }
      t2.exports = { convolveHorizontally: i2, convolveVertically: a2 };
    }, {}], 3: [function(e3, t2, n2) {
      t2.exports = `AGFzbQEAAAAADAZkeWxpbmsAAAAAAAEXA2AAAGAGf39/f39/AGAHf39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMEAwABAgYGAX8AQQALB1cFEV9fd2FzbV9jYWxsX2N0b3JzAAAIY29udm9sdmUAAQpjb252b2x2ZUhWAAIMX19kc29faGFuZGxlAwAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAK7AMDAwABC8YDAQ9/AkAgA0UNACAERQ0AA0AgDCENQQAhE0EAIQcDQCAHQQJqIQYCfyAHQQF0IAVqIgcuAQIiFEUEQEGAwAAhCEGAwAAhCUGAwAAhCkGAwAAhCyAGDAELIBIgBy4BAGohCEEAIQsgFCEHQQAhDiAGIQlBACEPQQAhEANAIAUgCUEBdGouAQAiESAAIAhBAnRqKAIAIgpBGHZsIBBqIRAgCkH/AXEgEWwgC2ohCyAKQRB2Qf8BcSARbCAPaiEPIApBCHZB/wFxIBFsIA5qIQ4gCEEBaiEIIAlBAWohCSAHQQFrIgcNAAsgC0GAQGshCCAOQYBAayEJIA9BgEBrIQogEEGAQGshCyAGIBRqCyEHIAEgDUECdGogCUEOdSIGQf8BIAZB/wFIGyIGQQAgBkEAShtBCHRBgP4DcSAKQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EQdEGAgPwHcSALQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EYdHJyIAhBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobcjYCACADIA1qIQ0gE0EBaiITIARHDQALIAxBAWoiDCACbCESIAMgDEcNAAsLCx4AQQAgAiADIAQgBSAAEAEgAkEAIAQgBSAGIAEQAQs=`;
    }, {}], 4: [function(e3, t2, r3) {
      var i2 = n;
      t2.exports = { name: `resize`, fn: e3(i2(548)), wasm_fn: e3(i2(631)), wasm_src: e3(`./convolve_wasm_base64`) };
    }, { "./convolve_wasm_base64": 3, "./resize": 5, "./resize_wasm": 8 }], 5: [function(e3, t2, r3) {
      var i2 = n, a2 = e3(`./resize_filter_gen`), o = e3(`./convolve`)[i2(529)], s = e3(`./convolve`).convolveVertically;
      function c(e4, t3, n2) {
        for (var r4 = 3, i3 = t3 * n2 * 4 | 0; r4 < i3; ) e4[r4] = 255, r4 = r4 + 4 | 0;
      }
      t2.exports = function(e4) {
        var t3 = i2, n2 = e4.src, r4 = e4[t3(574)], l = e4[t3(553)], u = e4.toWidth, d = e4.toHeight, f = e4[t3(569)] || e4.toWidth / e4.width, p = e4.scaleY || e4.toHeight / e4.height, m = e4.offsetX || 0, h = e4[t3(624)] || 0, g = e4[t3(635)] || new Uint8Array(u * d * 4), _ = e4.quality === void 0 ? 3 : e4.quality, v = e4[t3(596)] || false, y = a2(_, r4, u, f, m), b = a2(_, l, d, p, h), x = new Uint8Array(u * l * 4);
        return o(n2, x, r4, l, u, y), s(x, g, l, u, d, b), v || c(g, u, d), g;
      };
    }, { "./convolve": 2, "./resize_filter_gen": 6 }], 6: [function(e3, t2, r3) {
      var i2 = e3(`./resize_filter_info`), a2 = 14;
      function o(e4) {
        return Math.round(e4 * ((1 << a2) - 1));
      }
      t2.exports = function(e4, t3, r4, a3, s) {
        var c = n, l = i2[e4].filter, u = 1 / a3, d = Math.min(1, a3), f = i2[e4].win / d, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A = Math[c(634)]((f + 1) * 2), j = new Int16Array((A + 2) * r4), M = 0, N = !j[c(528)] || !j.set;
        for (p = 0; p < r4; p++) {
          for (m = (p + 0.5) * u + s, h = Math.max(0, Math.floor(m - f)), g = Math.min(t3 - 1, Math.ceil(m + f)), _ = g - h + 1, v = new Float32Array(_), y = new Int16Array(_), b = 0, x = h, S = 0; x <= g; x++, S++) C = l((x + 0.5 - m) * d), b += C, v[S] = C;
          for (w = 0, S = 0; S < v.length; S++) T = v[S] / b, w += T, y[S] = o(T);
          for (y[r4 >> 1] += o(1 - w), E = 0; E < y[c(507)] && y[E] === 0; ) E++;
          if (E < y.length) {
            for (D = y[c(507)] - 1; D > 0 && y[D] === 0; ) D--;
            if (O = h + E, k = D - E + 1, j[M++] = O, j[M++] = k, !N) j.set(y.subarray(E, D + 1), M), M += k;
            else for (S = E; S <= D; S++) j[M++] = y[S];
          } else j[M++] = 0, j[M++] = 0;
        }
        return j;
      };
    }, { "./resize_filter_info": 7 }], 7: [function(e3, t2, r3) {
      var i2 = n;
      t2[i2(576)] = [{ win: 0.5, filter: function(e4) {
        return +(e4 >= -0.5 && e4 < 0.5);
      } }, { win: 1, filter: function(e4) {
        var t3 = i2;
        if (e4 <= -1 || e4 >= 1) return 0;
        if (e4 > -11920929e-14 && e4 < 11920929e-14) return 1;
        var n2 = e4 * Math.PI;
        return Math[t3(621)](n2) / n2 * (0.54 + 0.46 * Math.cos(n2 / 1));
      } }, { win: 2, filter: function(e4) {
        if (e4 <= -2 || e4 >= 2) return 0;
        if (e4 > -11920929e-14 && e4 < 11920929e-14) return 1;
        var t3 = e4 * Math.PI;
        return Math.sin(t3) / t3 * Math.sin(t3 / 2) / (t3 / 2);
      } }, { win: 3, filter: function(e4) {
        if (e4 <= -3 || e4 >= 3) return 0;
        if (e4 > -11920929e-14 && e4 < 11920929e-14) return 1;
        var t3 = e4 * Math.PI;
        return Math.sin(t3) / t3 * Math.sin(t3 / 3) / (t3 / 3);
      } }];
    }, {}], 8: [function(e3, t2, r3) {
      var i2 = e3(`./resize_filter_gen`);
      function a2(e4, t3, n2) {
        for (var r4 = 3, i3 = t3 * n2 * 4 | 0; r4 < i3; ) e4[r4] = 255, r4 = r4 + 4 | 0;
      }
      function o(e4) {
        return new Uint8Array(e4.buffer, 0, e4.byteLength);
      }
      var s = true;
      try {
        s = new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0] === 1;
      } catch {
      }
      function c(e4, t3, n2) {
        if (s) {
          t3.set(o(e4), n2);
          return;
        }
        for (var r4 = n2, i3 = 0; i3 < e4.length; i3++) {
          var a3 = e4[i3];
          t3[r4++] = a3 & 255, t3[r4++] = a3 >> 8 & 255;
        }
      }
      t2.exports = function(e4) {
        var t3 = n, r4 = e4.src, o2 = e4.width, s2 = e4[t3(553)], l = e4.toWidth, u = e4.toHeight, d = e4[t3(569)] || e4.toWidth / e4[t3(574)], f = e4.scaleY || e4.toHeight / e4[t3(553)], p = e4.offsetX || 0, m = e4.offsetY || 0, h = e4[t3(635)] || new Uint8Array(l * u * 4), g = e4.quality === void 0 ? 3 : e4.quality, _ = e4.alpha || false, v = i2(g, o2, l, d, p), y = i2(g, s2, u, f, m), b = this.__align(0 + Math.max(r4.byteLength, h.byteLength)), x = this.__align(b + s2 * l * 4), S = this.__align(x + v.byteLength), C = S + y.byteLength, w = this.__instance(`resize`, C), T = new Uint8Array(this.__memory[t3(599)]), E = new Uint32Array(this[t3(589)].buffer), D = new Uint32Array(r4.buffer);
        return E.set(D), c(v, T, x), c(y, T, S), (w.exports[t3(512)] || w.exports[t3(581)])(x, S, b, o2, s2, l, u), new Uint32Array(h[t3(599)]).set(new Uint32Array(this.__memory.buffer, 0, u * l)), _ || a2(h, l, u), h;
      };
    }, { "./resize_filter_gen": 6 }], 9: [function(e3, t2, r3) {
      var i2 = n;
      t2[i2(576)] = { name: `unsharp_mask`, fn: e3(`./unsharp_mask`), wasm_fn: e3(`./unsharp_mask_wasm`), wasm_src: e3(`./unsharp_mask_wasm_base64`) };
    }, { "./unsharp_mask": 10, "./unsharp_mask_wasm": 11, "./unsharp_mask_wasm_base64": 12 }], 10: [function(e3, t2, r3) {
      var i2 = n, a2 = e3(i2(578));
      function o(e4, t3, n2) {
        for (var r4 = t3 * n2, i3 = new Uint16Array(r4), a3, o2, s, c, l = 0; l < r4; l++) a3 = e4[4 * l], o2 = e4[4 * l + 1], s = e4[4 * l + 2], c = a3 >= o2 && a3 >= s ? a3 : o2 >= s && o2 >= a3 ? o2 : s, i3[l] = c << 8;
        return i3;
      }
      t2[i2(576)] = function(e4, t3, n2, r4, i3, s) {
        var c, l, u, d, f;
        if (!(r4 === 0 || i3 < 0.5)) {
          i3 > 2 && (i3 = 2);
          var p = o(e4, t3, n2), m = new Uint16Array(p);
          a2(m, t3, n2, i3);
          for (var h = r4 / 100 * 4096 + 0.5 | 0, g = s << 8, _ = t3 * n2, v = 0; v < _; v++) c = p[v], d = c - m[v], Math.abs(d) >= g && (l = c + (h * d + 2048 >> 12), l = l > 65280 ? 65280 : l, l = l < 0 ? 0 : l, c = c === 0 ? 1 : c, u = (l << 12) / c | 0, f = v * 4, e4[f] = e4[f] * u + 2048 >> 12, e4[f + 1] = e4[f + 1] * u + 2048 >> 12, e4[f + 2] = e4[f + 2] * u + 2048 >> 12);
        }
      };
    }, { "glur/mono16": 18 }], 11: [function(e3, t2, r3) {
      t2.exports = function(e4, t3, r4, i2, a2, o) {
        var s = n;
        if (!(i2 === 0 || a2 < 0.5)) {
          a2 > 2 && (a2 = 2);
          var c = t3 * r4, l = c * 4, u = c * 2, d = c * 2, f = Math.max(t3, r4) * 4, p = 32, m = 0, h = l, g = h + u, _ = g + d, v = _ + d, y = v + f, b = this[s(628)](`unsharp_mask`, l + u + d * 2 + f + p, { exp: Math.exp }), x = new Uint32Array(e4.buffer);
          new Uint32Array(this[s(589)].buffer)[s(561)](x);
          var S = b.exports.hsv_v16 || b.exports._hsv_v16;
          S(m, h, t3, r4), S = b.exports[s(522)] || b[s(576)]._blurMono16, S(h, g, _, v, y, t3, r4, a2), S = b.exports[s(551)] || b.exports._unsharp, S(m, m, h, g, t3, r4, i2, o), x.set(new Uint32Array(this.__memory.buffer, 0, c));
        }
      };
    }, {}], 12: [function(e3, t2, n2) {
      t2.exports = `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`;
    }, {}], 13: [function(e3, t2, r3) {
      var i2 = n, a2 = 100;
      function o(e4, t3) {
        var r4 = n;
        this.create = e4, this.available = [], this.acquired = {}, this.lastId = 1, this[r4(587)] = 0, this.idle = t3 || 2e3;
      }
      o[i2(501)][i2(519)] = function() {
        var e4 = i2, t3 = this, n2;
        return this.available.length === 0 ? (n2 = this.create(), n2.id = this.lastId++, n2[e4(564)] = function() {
          return t3.release(n2);
        }) : n2 = this.available.pop(), this.acquired[n2.id] = n2, n2;
      }, o.prototype[i2(564)] = function(e4) {
        var t3 = this;
        delete this.acquired[e4.id], e4.lastUsed = Date.now(), this.available.push(e4), this.timeoutId === 0 && (this.timeoutId = setTimeout(function() {
          return t3.gc();
        }, a2));
      }, o.prototype.gc = function() {
        var e4 = i2, t3 = this, n2 = Date.now();
        this.available = this.available.filter(function(e5) {
          return n2 - e5.lastUsed > t3.idle ? (e5.destroy(), false) : true;
        }), this[e4(563)].length === 0 ? this.timeoutId = 0 : this.timeoutId = setTimeout(function() {
          return t3.gc();
        }, a2);
      }, t2.exports = o;
    }, {}], 14: [function(e3, t2, r3) {
      var i2 = 2;
      t2.exports = function(e4, t3, r4, a2, o, s) {
        var c = n, l = r4 / e4, u = a2 / t3, d = (2 * s + i2 + 1) / o;
        if (d > 0.5) return [[r4, a2]];
        var f = Math.ceil(Math.log(Math.min(l, u)) / Math.log(d));
        if (f <= 1) return [[r4, a2]];
        for (var p = [], m = 0; m < f; m++) {
          var h = Math.round((e4 ** (f - m - 1) * Math[c(515)](r4, m + 1)) ** (1 / f)), g = Math[c(609)]((t3 ** (f - m - 1) * a2 ** +(m + 1)) ** (1 / f));
          p.push([h, g]);
        }
        return p;
      };
    }, {}], 15: [function(e3, t2, r3) {
      var i2 = 1e-5;
      function a2(e4) {
        var t3 = Math.round(e4);
        return Math.abs(e4 - t3) < i2 ? t3 : Math.floor(e4);
      }
      function o(e4) {
        var t3 = Math.round(e4);
        return Math.abs(e4 - t3) < i2 ? t3 : Math.ceil(e4);
      }
      t2.exports = function(e4) {
        var t3 = n, r4 = e4.toWidth / e4.width, i3 = e4.toHeight / e4.height, s = a2(e4[t3(546)] * r4) - 2 * e4.destTileBorder, c = a2(e4.srcTileSize * i3) - 2 * e4.destTileBorder;
        if (s < 1 || c < 1) throw Error(t3(549));
        var l, u, d, f, p, m, h = [], g;
        for (f = 0; f < e4.toHeight; f += c) for (d = 0; d < e4.toWidth; d += s) l = d - e4.destTileBorder, l < 0 && (l = 0), p = d + s + e4.destTileBorder - l, l + p >= e4.toWidth && (p = e4.toWidth - l), u = f - e4.destTileBorder, u < 0 && (u = 0), m = f + c + e4[t3(506)] - u, u + m >= e4[t3(533)] && (m = e4.toHeight - u), g = { toX: l, toY: u, toWidth: p, toHeight: m, toInnerX: d, toInnerY: f, toInnerWidth: s, toInnerHeight: c, offsetX: l / r4 - a2(l / r4), offsetY: u / i3 - a2(u / i3), scaleX: r4, scaleY: i3, x: a2(l / r4), y: a2(u / i3), width: o(p / r4), height: o(m / i3) }, h.push(g);
        return h;
      };
    }, {}], 16: [function(e3, t2, r3) {
      function i2(e4) {
        return Object.prototype.toString.call(e4);
      }
      t2.exports.isCanvas = function(e4) {
        var t3 = i2(e4);
        return t3 === `[object HTMLCanvasElement]` || t3 === `[object OffscreenCanvas]` || t3 === `[object Canvas]`;
      }, t2.exports.isImage = function(e4) {
        return i2(e4) === `[object HTMLImageElement]`;
      }, t2.exports.isImageBitmap = function(e4) {
        return i2(e4) === `[object ImageBitmap]`;
      }, t2.exports.limiter = function(e4) {
        var t3 = 0, r4 = [];
        function i3() {
          t3 < e4 && r4.length && (t3++, r4.shift()());
        }
        return function(e5) {
          return new Promise(function(a2, o) {
            r4[n(619)](function() {
              e5().then(function(e6) {
                a2(e6), t3--, i3();
              }, function(e6) {
                o(e6), t3--, i3();
              });
            }), i3();
          });
        };
      }, t2.exports.cib_quality_name = function(e4) {
        switch (e4) {
          case 0:
            return `pixelated`;
          case 1:
            return `low`;
          case 2:
            return `medium`;
        }
        return `high`;
      }, t2.exports.cib_support = function(e4) {
        return Promise.resolve().then(function() {
          var t3 = n;
          if (typeof createImageBitmap > `u`) return false;
          var r4 = e4(100, 100);
          return createImageBitmap(r4, 0, 0, 100, 100, { resizeWidth: 10, resizeHeight: 10, resizeQuality: `high` })[t3(535)](function(e5) {
            var t4 = e5.width === 10;
            return e5.close(), r4 = null, t4;
          });
        }).catch(function() {
          return false;
        });
      }, t2.exports.worker_offscreen_canvas_support = function() {
        return new Promise(function(e4, t3) {
          if (typeof OffscreenCanvas > `u`) {
            e4(false);
            return;
          }
          function r4(e5) {
            var t4 = n;
            if (typeof createImageBitmap > `u`) {
              e5[t4(573)](false);
              return;
            }
            Promise.resolve().then(function() {
              var e6 = new OffscreenCanvas(10, 10);
              return e6.getContext(`2d`).rect(0, 0, 1, 1), createImageBitmap(e6, 0, 0, 1, 1);
            }).then(function() {
              return e5.postMessage(true);
            }, function() {
              return e5.postMessage(false);
            });
          }
          var i3 = btoa(`(` + r4.toString() + `)(self);`), a2 = new Worker(`data:text/javascript;base64,` + i3);
          a2.onmessage = function(t4) {
            return e4(t4.data);
          }, a2.onerror = t3;
        }).then(function(e4) {
          return e4;
        }, function() {
          return false;
        });
      }, t2.exports.can_use_canvas = function(e4) {
        var t3 = n, r4 = false;
        try {
          var i3 = e4(2, 1)[t3(562)](`2d`), a2 = i3.createImageData(2, 1);
          a2.data[0] = 12, a2.data[1] = 23, a2.data[2] = 34, a2.data[3] = 255, a2.data[4] = 45, a2.data[5] = 56, a2[t3(503)][6] = 67, a2[t3(503)][7] = 255, i3.putImageData(a2, 0, 0), a2 = null, a2 = i3.getImageData(0, 0, 2, 1), a2.data[0] === 12 && a2.data[1] === 23 && a2[t3(503)][2] === 34 && a2.data[3] === 255 && a2.data[4] === 45 && a2[t3(503)][5] === 56 && a2.data[6] === 67 && a2.data[7] === 255 && (r4 = true);
        } catch {
        }
        return r4;
      }, t2.exports.cib_can_use_region = function() {
        return new Promise(function(e4) {
          var t3 = n;
          if (typeof createImageBitmap > `u`) {
            e4(false);
            return;
          }
          var r4 = new Image();
          r4.src = `data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z`, r4[t3(630)] = function() {
            var n2 = t3;
            createImageBitmap(r4, 0, 0, r4.width, r4.height)[n2(535)](function(t4) {
              var i3 = n2;
              t4.width === r4.width && t4[i3(553)] === r4.height ? e4(true) : e4(false);
            }, function() {
              return e4(false);
            });
          }, r4.onerror = function() {
            return e4(false);
          };
        });
      };
    }, {}], 17: [function(e3, t2, r3) {
      var i2 = n;
      t2[i2(576)] = function() {
        var t3 = e3(`./mathlib`), r4;
        onmessage = function(e4) {
          var i3 = n, a2 = e4.data.opts, o = false;
          if (!a2.src && a2.srcBitmap) {
            var s = new OffscreenCanvas(a2.width, a2.height), c = s.getContext(`2d`, { alpha: !!a2.alpha });
            c.drawImage(a2[i3(550)], 0, 0), a2.src = c.getImageData(0, 0, a2.width, a2.height).data, s.width = s.height = 0, s = null, a2.srcBitmap.close(), a2.srcBitmap = null;
          }
          r4 || (r4 = new t3(e4.data.features));
          var l = r4[i3(520)](a2);
          if (o) {
            var u = new ImageData(new Uint8ClampedArray(l), a2.toWidth, a2.toHeight), d = new OffscreenCanvas(a2.toWidth, a2.toHeight);
            d.getContext(`2d`, { alpha: !!a2.alpha }).putImageData(u, 0, 0), createImageBitmap(d).then(function(e5) {
              postMessage({ bitmap: e5 }, [e5]);
            });
          } else postMessage({ data: l }, [l.buffer]);
        };
      };
    }, { "./mathlib": 1 }], 18: [function(e3, t2, r3) {
      var i2, a2, o, s, c, l, u, d;
      function f(e4) {
        var t3 = n;
        e4 < 0.5 && (e4 = 0.5);
        var r4 = Math.exp(0.726 * 0.726) / e4, f2 = Math[t3(517)](-r4), p2 = Math.exp(-2 * r4), m2 = (1 - f2) * (1 - f2) / (1 + 2 * r4 * f2 - p2);
        return i2 = m2, a2 = m2 * (r4 - 1) * f2, o = m2 * (r4 + 1) * f2, s = -m2 * p2, c = 2 * f2, l = -p2, u = (i2 + a2) / (1 - c - l), d = (o + s) / (1 - c - l), new Float32Array([i2, a2, o, s, c, l, u, d]);
      }
      function p(e4, t3, n2, r4, i3, a3) {
        var o2, s2, c2, l2, u2, d2, f2, p2, m2, h, g, _, v, y;
        for (m2 = 0; m2 < a3; m2++) {
          for (d2 = m2 * i3, f2 = m2, p2 = 0, o2 = e4[d2], u2 = o2 * r4[6], l2 = u2, g = r4[0], _ = r4[1], v = r4[4], y = r4[5], h = 0; h < i3; h++) s2 = e4[d2], c2 = s2 * g + o2 * _ + l2 * v + u2 * y, u2 = l2, l2 = c2, o2 = s2, n2[p2] = l2, p2++, d2++;
          for (d2--, p2--, f2 += a3 * (i3 - 1), o2 = e4[d2], u2 = o2 * r4[7], l2 = u2, s2 = o2, g = r4[2], _ = r4[3], h = i3 - 1; h >= 0; h--) c2 = s2 * g + o2 * _ + l2 * v + u2 * y, u2 = l2, l2 = c2, o2 = s2, s2 = e4[d2], t3[f2] = n2[p2] + l2, d2--, p2--, f2 -= a3;
        }
      }
      function m(e4, t3, r4, i3) {
        var a3 = n;
        if (i3) {
          var o2 = new Uint16Array(e4[a3(507)]), s2 = new Float32Array(Math.max(t3, r4)), c2 = f(i3);
          p(e4, o2, s2, c2, t3, r4, i3), p(o2, e4, s2, c2, r4, t3, i3);
        }
      }
      t2.exports = m;
    }, {}], 19: [function(e3, t2, r3) {
      typeof Object.create == `function` ? t2.exports = function(e4, t3) {
        t3 && (e4.super_ = t3, e4.prototype = Object.create(t3.prototype, { constructor: { value: e4, enumerable: false, writable: true, configurable: true } }));
      } : t2.exports = function(e4, t3) {
        var r4 = n;
        if (t3) {
          e4[r4(511)] = t3;
          var i2 = function() {
          };
          i2.prototype = t3.prototype, e4.prototype = new i2(), e4.prototype.constructor = e4;
        }
      };
    }, {}], 20: [function(e3, t2, r3) {
      var i2 = n, a2 = e3(i2(567)), o = e3(`./lib/base64decode`), s = e3(`./lib/wa_detect`), c = { js: true, wasm: true };
      function l(e4) {
        var t3 = i2;
        if (!(this instanceof l)) return new l(e4);
        var n2 = a2({}, c, e4 || {});
        if (this.options = n2, this[t3(541)] = {}, this.__init_promise = null, this.__modules = n2.modules || {}, this.__memory = null, this[t3(568)] = {}, this.__isLE = new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0] === 1, !this[t3(607)].js && !this.options.wasm) throw Error(t3(547));
      }
      l[i2(501)].has_wasm = s, l.prototype.use = function(e4) {
        var t3 = i2;
        return this.__modules[e4[t3(500)]] = e4, this.options.wasm && this.has_wasm() && e4.wasm_fn ? this[e4[t3(500)]] = e4.wasm_fn : this[e4.name] = e4.fn, this;
      }, l[i2(501)].init = function() {
        var e4 = i2;
        if (this.__init_promise) return this.__init_promise;
        if (!this.options.js && this.options.wasm && !this[e4(608)]()) return Promise.reject(Error(`mathlib: only "wasm" was enabled, but it's not supported`));
        var t3 = this;
        return this.__init_promise = Promise.all(Object.keys(t3.__modules).map(function(n2) {
          var r4 = e4, i3 = t3.__modules[n2];
          return !t3.options.wasm || !t3.has_wasm() || !i3.wasm_fn || t3[r4(568)][n2] ? null : WebAssembly.compile(t3.__base64decode(i3.wasm_src)).then(function(e5) {
            t3.__wasm[n2] = e5;
          });
        })).then(function() {
          return t3;
        }), this.__init_promise;
      }, l[i2(501)].__base64decode = o, l[i2(501)].__reallocate = function(e4) {
        var t3 = i2;
        if (!this.__memory) return this.__memory = new WebAssembly[t3(504)]({ initial: Math[t3(585)](e4 / (64 * 1024)) }), this[t3(589)];
        var n2 = this[t3(589)].buffer.byteLength;
        return n2 < e4 && this.__memory.grow(Math.ceil((e4 - n2) / (64 * 1024))), this.__memory;
      }, l.prototype.__instance = function(e4, t3, n2) {
        var r4 = i2;
        if (t3 && this.__reallocate(t3), !this.__wasm[e4]) {
          var o2 = this[r4(532)][e4];
          this[r4(568)][e4] = new WebAssembly.Module(this.__base64decode(o2[r4(510)]));
        }
        if (!this.__cache[e4]) {
          var s2 = { memoryBase: 0, memory: this.__memory, tableBase: 0, table: new WebAssembly.Table({ initial: 0, element: `anyfunc` }) };
          this[r4(541)][e4] = new WebAssembly.Instance(this.__wasm[e4], { env: a2(s2, n2 || {}) });
        }
        return this.__cache[e4];
      }, l.prototype.__align = function(e4, t3) {
        t3 || (t3 = 8);
        var n2 = e4 % t3;
        return e4 + (n2 ? t3 - n2 : 0);
      }, t2.exports = l;
    }, { "./lib/base64decode": 21, "./lib/wa_detect": 22, "object-assign": 23 }], 21: [function(e3, t2, r3) {
      var i2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
      t2.exports = function(e4) {
        for (var t3 = n, r4 = e4.replace(/[\r\n=]/g, ``), a2 = r4.length, o = new Uint8Array(a2 * 3 >> 2), s = 0, c = 0, l = 0; l < a2; l++) l % 4 == 0 && l && (o[c++] = s >> 16 & 255, o[c++] = s >> 8 & 255, o[c++] = s & 255), s = s << 6 | i2.indexOf(r4[t3(613)](l));
        var u = a2 % 4 * 6;
        return u === 0 ? (o[c++] = s >> 16 & 255, o[c++] = s >> 8 & 255, o[c++] = s & 255) : u === 18 ? (o[c++] = s >> 10 & 255, o[c++] = s >> 2 & 255) : u === 12 && (o[c++] = s >> 4 & 255), o;
      };
    }, {}], 22: [function(e3, t2, n2) {
      var r3;
      t2.exports = function() {
        if (r3 !== void 0 || (r3 = false, typeof WebAssembly > `u`)) return r3;
        try {
          var e4 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11]), t3 = new WebAssembly.Module(e4);
          return new WebAssembly.Instance(t3, {}).exports.test(4) !== 0 && (r3 = true), r3;
        } catch {
        }
        return r3;
      };
    }, {}], 23: [function(e3, t2, r3) {
      var i2 = n, a2 = Object[i2(592)], o = Object.prototype[i2(527)], s = Object.prototype.propertyIsEnumerable;
      function c(e4) {
        if (e4 == null) throw TypeError(`Object.assign cannot be called with null or undefined`);
        return Object(e4);
      }
      function l() {
        var e4 = i2;
        try {
          if (!Object.assign) return false;
          var t3 = new String(e4(566));
          if (t3[5] = `de`, Object.getOwnPropertyNames(t3)[0] === `5`) return false;
          for (var n2 = {}, r4 = 0; r4 < 10; r4++) n2[`_` + String.fromCharCode(r4)] = r4;
          if (Object.getOwnPropertyNames(n2).map(function(e5) {
            return n2[e5];
          }).join(``) !== `0123456789`) return false;
          var a3 = {};
          return `abcdefghijklmnopqrst`.split(``).forEach(function(e5) {
            a3[e5] = e5;
          }), Object.keys(Object.assign({}, a3)).join(``) === e4(539);
        } catch {
          return false;
        }
      }
      t2.exports = l() ? Object[i2(598)] : function(e4, t3) {
        for (var n2, r4 = c(e4), i3, l2 = 1; l2 < arguments.length; l2++) {
          for (var u in n2 = Object(arguments[l2]), n2) o.call(n2, u) && (r4[u] = n2[u]);
          if (a2) {
            i3 = a2(n2);
            for (var d = 0; d < i3.length; d++) s.call(n2, i3[d]) && (r4[i3[d]] = n2[i3[d]]);
          }
        }
        return r4;
      };
    }, {}], 24: [function(e3, t2, r3) {
      var i2 = arguments[3], a2 = arguments[4], o = arguments[5], s = JSON.stringify;
      t2.exports = function(e4, t3) {
        for (var r4 = n, c, l = Object.keys(o), u = 0, d = l[r4(507)]; u < d; u++) {
          var f = l[u], p = o[f][r4(576)];
          if (p === e4 || p && p.default === e4) {
            c = f;
            break;
          }
        }
        if (!c) {
          c = Math.floor(16 ** 8 * Math.random()).toString(16);
          for (var m = {}, u = 0, d = l.length; u < d; u++) {
            var f = l[u];
            m[f] = f;
          }
          a2[c] = [r4(595) + e4 + `(self); }`, m];
        }
        var h = Math.floor(16 ** 8 * Math.random()).toString(16), g = {};
        g[c] = c, a2[h] = [`function(require,module,exports){var f = require(` + s(c) + `);(f.default ? f.default : f)(self);}`, g];
        var _ = {};
        v(h);
        function v(e5) {
          for (var t4 in _[e5] = true, a2[e5][1]) {
            var n2 = a2[e5][1][t4];
            _[n2] || v(n2);
          }
        }
        var y = `(` + i2 + `)({` + Object.keys(_).map(function(e5) {
          return s(e5) + `:[` + a2[e5][0] + `,` + s(a2[e5][1]) + `]`;
        }).join(`,`) + `},{},[` + s(h) + `])`, b = window.URL || window.webkitURL || window.mozURL || window.msURL, x = new Blob([y], { type: `text/javascript` });
        if (t3 && t3.bare) return x;
        var S = b.createObjectURL(x), C = new Worker(S);
        return C.objectURL = S, C;
      };
    }, {}], "/index.js": [function(e3, t2, r3) {
      var i2 = n;
      function a2(e4, t3) {
        return u(e4) || l(e4, t3) || s(e4, t3) || o();
      }
      function o() {
        throw TypeError(n(560));
      }
      function s(e4, t3) {
        var r4 = n;
        if (e4) {
          if (typeof e4 == `string`) return c(e4, t3);
          var i3 = Object.prototype.toString.call(e4).slice(8, -1);
          if (i3 === `Object` && e4.constructor && (i3 = e4.constructor.name), i3 === r4(498) || i3 === r4(600)) return Array[r4(615)](e4);
          if (i3 === r4(530) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3)) return c(e4, t3);
        }
      }
      function c(e4, t3) {
        (t3 == null || t3 > e4[n(507)]) && (t3 = e4.length);
        for (var r4 = 0, i3 = Array(t3); r4 < t3; r4++) i3[r4] = e4[r4];
        return i3;
      }
      function l(e4, t3) {
        var r4 = n, i3 = e4 == null ? null : typeof Symbol < `u` && e4[Symbol[r4(580)]] || e4[`@@iterator`];
        if (i3 != null) {
          var a3 = [], o2 = true, s2 = false, c2, l2;
          try {
            for (i3 = i3[r4(559)](e4); !(o2 = (c2 = i3.next()).done) && (a3.push(c2[r4(627)]), !(t3 && a3.length === t3)); o2 = true) ;
          } catch (e5) {
            s2 = true, l2 = e5;
          } finally {
            try {
              !o2 && i3.return != null && i3[r4(556)]();
            } finally {
              if (s2) throw l2;
            }
          }
          return a3;
        }
      }
      function u(e4) {
        if (Array.isArray(e4)) return e4;
      }
      var d = e3(`object-assign`), f = e3(`webworkify`), p = e3(`./lib/mathlib`), m = e3(`./lib/pool`), h = e3(i2(558)), g = e3(i2(616)), _ = e3(i2(593)), v = e3(i2(534)), y = {}, b = false;
      try {
        typeof navigator < `u` && navigator.userAgent && (b = navigator.userAgent.indexOf(i2(602)) >= 0);
      } catch {
      }
      var x = 1;
      typeof navigator < `u` && (x = Math.min(navigator.hardwareConcurrency || 1, 4));
      var S = { tile: 1024, concurrency: x, features: [`js`, `wasm`, `ww`], idle: 2e3, createCanvas: function(e4, t3) {
        var n2 = i2, r4 = document[n2(545)](`canvas`);
        return r4[n2(574)] = e4, r4.height = t3, r4;
      } }, C = { quality: 3, alpha: false, unsharpAmount: 0, unsharpRadius: 0, unsharpThreshold: 0 }, w = false, T = false, E = false, D = false, O = false;
      function k() {
        return { value: f(g), destroy: function() {
          if (this.value.terminate(), typeof window < `u`) {
            var e4 = window.URL || window.webkitURL || window.mozURL || window.msURL;
            e4 && e4.revokeObjectURL && this.value.objectURL && e4.revokeObjectURL(this.value.objectURL);
          }
        } };
      }
      function A(e4) {
        var t3 = i2;
        if (!(this instanceof A)) return new A(e4);
        this[t3(607)] = d({}, S, e4 || {});
        var n2 = t3(544) + this.options.concurrency;
        this.__limit = y[n2] || h[t3(605)](this.options.concurrency), y[n2] || (y[n2] = this[t3(601)]), this[t3(571)] = { js: false, wasm: false, cib: false, ww: false }, this.__workersPool = null, this.__requested_features = [], this.__mathlib = null;
      }
      A[i2(501)].init = function() {
        var t3 = i2, n2 = this;
        if (this.__initPromise) return this.__initPromise;
        if (typeof ImageData < `u` && typeof Uint8ClampedArray < `u`) try {
          new ImageData(new Uint8ClampedArray(400), 10, 10), w = true;
        } catch {
        }
        typeof ImageBitmap < `u` && (ImageBitmap[t3(501)] && ImageBitmap.prototype.close ? T = true : this[t3(594)](`ImageBitmap does not support .close(), disabled`));
        var r4 = this.options.features.slice();
        if (r4.indexOf(`all`) >= 0 && (r4 = [`cib`, `wasm`, `js`, `ww`]), this[t3(508)] = r4, this.__mathlib = new p(r4), r4.indexOf(`ww`) >= 0 && typeof window < `u` && t3(620) in window) try {
          e3(`webworkify`)(function() {
          }).terminate(), this.features.ww = true;
          var a3 = `wp_` + JSON[t3(505)](this.options);
          y[a3] ? this.__workersPool = y[a3] : (this[t3(606)] = new m(k, this.options[t3(521)]), y[a3] = this.__workersPool);
        } catch {
        }
        var o2 = this.__mathlib.init()[t3(535)](function(e4) {
          d(n2.features, e4.features);
        }), s2 = T ? h.cib_support(this.options[t3(590)]).then(function(e4) {
          var i3 = t3;
          if (n2.features.cib && r4.indexOf(`cib`) < 0) {
            n2[i3(594)](`createImageBitmap() resize supported, but disabled by config`);
            return;
          }
          r4.indexOf(`cib`) >= 0 && (n2.features.cib = e4);
        }) : Promise.resolve(false);
        E = h[t3(570)](this.options.createCanvas);
        var c2 = T && w && r4.indexOf(`ww`) !== -1 ? h.worker_offscreen_canvas_support() : Promise.resolve(false);
        c2 = c2.then(function(e4) {
          D = e4;
        });
        var l2 = h[t3(626)]().then(function(e4) {
          O = e4;
        });
        return this.__initPromise = Promise.all([o2, s2, c2, l2])[t3(535)](function() {
          return n2;
        }), this.__initPromise;
      }, A.prototype.__invokeResize = function(e4, t3) {
        var r4 = i2, a3 = this;
        return t3.__mathCache = t3.__mathCache || {}, Promise[r4(524)]().then(function() {
          return a3.features.ww ? new Promise(function(r5, i3) {
            var o2 = n, s2 = a3.__workersPool.acquire();
            t3.cancelToken && t3[o2(625)].catch(function(e5) {
              return i3(e5);
            }), s2.value[o2(617)] = function(e5) {
              var t4 = o2;
              s2[t4(564)](), e5.data.err ? i3(e5.data.err) : r5(e5[t4(503)]);
            };
            var c2 = [];
            e4.src && c2.push(e4.src.buffer), e4.srcBitmap && c2.push(e4.srcBitmap), s2.value.postMessage({ opts: e4, features: a3.__requested_features, preload: { wasm_nodule: a3.__mathlib.__ } }, c2);
          }) : { data: a3.__mathlib.resizeAndUnsharp(e4, t3.__mathCache) };
        });
      }, A.prototype.__extractTileData = function(e4, t3, n2, r4, a3) {
        var o2 = i2;
        if (this.features.ww && D && (h.isCanvas(t3) || O)) return this.debug(`Create tile for OffscreenCanvas`), createImageBitmap(r4[o2(579)] || t3, e4.x, e4.y, e4.width, e4.height).then(function(e5) {
          var t4 = o2;
          return a3[t4(550)] = e5, a3;
        });
        if (h.isCanvas(t3)) return r4.srcCtx || (r4.srcCtx = t3.getContext(`2d`, { alpha: !!n2.alpha })), this.debug(`Get tile pixel data`), a3.src = r4[o2(543)].getImageData(e4.x, e4.y, e4[o2(574)], e4.height).data, a3;
        this.debug(`Draw tile imageBitmap/image to temporary canvas`);
        var s2 = this.options.createCanvas(e4.width, e4.height), c2 = s2.getContext(`2d`, { alpha: !!n2[o2(596)] });
        return c2.globalCompositeOperation = o2(502), c2[o2(629)](r4.srcImageBitmap || t3, e4.x, e4.y, e4.width, e4.height, 0, 0, e4.width, e4[o2(553)]), this[o2(594)](o2(623)), a3.src = c2.getImageData(0, 0, e4.width, e4.height).data, s2.width = s2[o2(553)] = 0, a3;
      }, A.prototype.__landTileData = function(e4, t3, n2) {
        var r4 = i2, a3;
        if (this[r4(594)](`Convert raw rgba tile result to ImageData`), t3.bitmap) return n2.toCtx.drawImage(t3.bitmap, e4.toX, e4.toY), null;
        if (w) a3 = new ImageData(new Uint8ClampedArray(t3[r4(503)]), e4.toWidth, e4[r4(533)]);
        else if (a3 = n2.toCtx.createImageData(e4.toWidth, e4[r4(533)]), a3.data.set) a3.data.set(t3.data);
        else for (var o2 = a3.data.length - 1; o2 >= 0; o2--) a3.data[o2] = t3[r4(503)][o2];
        return this.debug(`Draw tile`), b ? n2.toCtx.putImageData(a3, e4.toX, e4.toY, e4.toInnerX - e4.toX, e4.toInnerY - e4[r4(588)], e4[r4(554)] + 1e-5, e4.toInnerHeight + 1e-5) : n2.toCtx.putImageData(a3, e4.toX, e4[r4(588)], e4.toInnerX - e4.toX, e4.toInnerY - e4.toY, e4[r4(554)], e4.toInnerHeight), null;
      }, A[i2(501)][i2(618)] = function(e4, t3, r4) {
        var i3 = this, a3 = { srcCtx: null, srcImageBitmap: null, isImageBitmapReused: false, toCtx: null }, o2 = function(t4) {
          return i3.__limit(function() {
            var o3 = n;
            if (r4[o3(583)]) return r4[o3(625)];
            var s2 = { width: t4.width, height: t4.height, toWidth: t4.toWidth, toHeight: t4[o3(533)], scaleX: t4.scaleX, scaleY: t4.scaleY, offsetX: t4.offsetX, offsetY: t4.offsetY, quality: r4.quality, alpha: r4.alpha, unsharpAmount: r4.unsharpAmount, unsharpRadius: r4.unsharpRadius, unsharpThreshold: r4[o3(552)] };
            return i3.debug(`Invoke resize math`), Promise.resolve(s2)[o3(535)](function(n2) {
              return i3[o3(591)](t4, e4, r4, a3, n2);
            }).then(function(e5) {
              var t5 = o3;
              return i3.debug(t5(633)), i3.__invokeResize(e5, r4);
            }).then(function(e5) {
              return r4.canceled ? r4.cancelToken : (a3.srcImageData = null, i3.__landTileData(t4, e5, a3));
            });
          });
        };
        return Promise.resolve().then(function() {
          var o3 = n;
          if (a3.toCtx = t3.getContext(`2d`, { alpha: !!r4[o3(596)] }), h[o3(536)](e4)) return null;
          if (h[o3(542)](e4)) return a3.srcImageBitmap = e4, a3.isImageBitmapReused = true, null;
          if (h[o3(586)](e4)) return T ? (i3.debug(o3(622)), createImageBitmap(e4).then(function(e5) {
            a3.srcImageBitmap = e5;
          }).catch(function(e5) {
            return null;
          })) : null;
          throw Error(`Pica: ".from" should be Image, Canvas or ImageBitmap`);
        }).then(function() {
          var e5 = n;
          if (r4[e5(583)]) return r4.cancelToken;
          i3.debug(`Calculate tiles`);
          var s2 = v({ width: r4.width, height: r4.height, srcTileSize: i3.options.tile, toWidth: r4.toWidth, toHeight: r4.toHeight, destTileBorder: r4.__destTileBorder })[e5(540)](function(e6) {
            return o2(e6);
          });
          function c2(t4) {
            t4.srcImageBitmap && (t4.srcImageBitmap = (t4[e5(611)] || t4.srcImageBitmap.close(), null));
          }
          return i3.debug(`Process tiles`), Promise.all(s2).then(function() {
            var n2 = e5;
            return i3[n2(594)](n2(516)), c2(a3), t3;
          }, function(e6) {
            throw c2(a3), e6;
          });
        });
      }, A[i2(501)].__processStages = function(e4, t3, n2, r4) {
        var o2 = i2, s2 = this;
        if (r4.canceled) return r4.cancelToken;
        var c2 = a2(e4.shift(), 2), l2 = c2[0], u2 = c2[1], f2 = e4.length === 0;
        r4 = d({}, r4, { toWidth: l2, toHeight: u2, quality: f2 ? r4.quality : Math.min(1, r4.quality) });
        var p2;
        return f2 || (p2 = this.options.createCanvas(l2, u2)), this[o2(618)](t3, f2 ? n2 : p2, r4).then(function() {
          var t4 = o2;
          return f2 ? n2 : (r4.width = l2, r4[t4(553)] = u2, s2[t4(518)](e4, p2, n2, r4));
        })[o2(535)](function(e5) {
          var t4 = o2;
          return p2 && (p2[t4(574)] = p2.height = 0), e5;
        });
      }, A[i2(501)].__resizeViaCreateImageBitmap = function(e4, t3, n2) {
        var r4 = i2, a3 = this, o2 = t3.getContext(`2d`, { alpha: !!n2.alpha });
        return this[r4(594)](`Resize via createImageBitmap()`), createImageBitmap(e4, { resizeWidth: n2.toWidth, resizeHeight: n2[r4(533)], resizeQuality: h.cib_quality_name(n2.quality) }).then(function(e5) {
          var i3 = r4;
          if (n2.canceled) return n2.cancelToken;
          if (!n2[i3(584)]) return o2.drawImage(e5, 0, 0), e5[i3(603)](), o2 = null, a3[i3(594)](`Finished!`), t3;
          a3.debug(i3(526));
          var s2 = a3.options.createCanvas(n2.toWidth, n2.toHeight), c2 = s2.getContext(`2d`, { alpha: !!n2.alpha });
          c2[i3(629)](e5, 0, 0), e5.close();
          var l2 = c2.getImageData(0, 0, n2.toWidth, n2[i3(533)]);
          return a3[i3(597)].unsharp_mask(l2.data, n2[i3(582)], n2.toHeight, n2.unsharpAmount, n2.unsharpRadius, n2.unsharpThreshold), o2[i3(614)](l2, 0, 0), s2.width = s2.height = 0, l2 = c2 = s2 = o2 = null, a3.debug(`Finished!`), t3;
        });
      }, A.prototype[i2(514)] = function(e4, t3, n2) {
        var r4 = i2, a3 = this;
        this.debug(`Start resize...`);
        var o2 = d({}, C);
        return isNaN(n2) ? n2 && (o2 = d(o2, n2)) : o2 = d(o2, { quality: n2 }), o2.toWidth = t3[r4(574)], o2.toHeight = t3.height, o2.width = e4.naturalWidth || e4.width, o2[r4(553)] = e4.naturalHeight || e4.height, t3.width === 0 || t3.height === 0 ? Promise.reject(Error(`Invalid output size: ` + t3.width + `x` + t3.height)) : (o2.unsharpRadius > 2 && (o2.unsharpRadius = 2), o2.canceled = false, o2.cancelToken && (o2[r4(625)] = o2.cancelToken.then(function(e5) {
          throw o2.canceled = true, e5;
        }, function(e5) {
          throw o2.canceled = true, e5;
        })), o2[r4(610)] = Math[r4(585)](Math[r4(523)](3, 2.5 * o2[r4(513)] | 0)), this.init()[r4(535)](function() {
          var n3 = r4;
          if (o2.canceled) return o2[n3(625)];
          if (a3[n3(571)][n3(537)]) return a3.__resizeViaCreateImageBitmap(e4, t3, o2);
          if (!E) {
            var i3 = Error(n3(531));
            throw i3.code = `ERR_GET_IMAGE_DATA`, i3;
          }
          var s2 = _(o2.width, o2.height, o2.toWidth, o2.toHeight, a3.options.tile, o2.__destTileBorder);
          return a3.__processStages(s2, e4, t3, o2);
        }));
      }, A[i2(501)].resizeBuffer = function(e4) {
        var t3 = this, n2 = d({}, C, e4);
        return this.init().then(function() {
          return t3.__mathlib.resizeAndUnsharp(n2);
        });
      }, A.prototype[i2(612)] = function(e4, t3, r4) {
        return t3 || (t3 = `image/png`), new Promise(function(i3) {
          var a3 = n;
          if (e4.toBlob) {
            e4[a3(612)](function(e5) {
              return i3(e5);
            }, t3, r4);
            return;
          }
          if (e4.convertToBlob) {
            i3(e4.convertToBlob({ type: t3, quality: r4 }));
            return;
          }
          for (var o2 = atob(e4.toDataURL(t3, r4).split(`,`)[1]), s2 = o2.length, c2 = new Uint8Array(s2), l2 = 0; l2 < s2; l2++) c2[l2] = o2.charCodeAt(l2);
          i3(new Blob([c2], { type: t3 }));
        });
      }, A.prototype.debug = function() {
      }, t2.exports = A;
    }, { "./lib/mathlib": 1, "./lib/pool": 13, "./lib/stepper": 14, "./lib/tiler": 15, "./lib/utils": 16, "./lib/worker": 17, "object-assign": 23, webworkify: 24 }] }, {}, [])(`/index.js`);
  });
});
function i() {
  var e2 = [`_convolveHV`, `toWidth`, `canceled`, `unsharpAmount`, `ceil`, `isImage`, `timeoutId`, `toY`, `__memory`, `createCanvas`, `__extractTileData`, `getOwnPropertySymbols`, `./lib/stepper`, `debug`, `function(require,module,exports){`, `alpha`, `__mathlib`, `assign`, `buffer`, `Set`, `__limit`, `Safari`, `close`, `6fPwGmH`, `limiter`, `__workersPool`, `options`, `has_wasm`, `round`, `__destTileBorder`, `isImageBitmapReused`, `toBlob`, `charAt`, `putImageData`, `from`, `./lib/worker`, `onmessage`, `__tileAndResize`, `push`, `Worker`, `sin`, `Decode image via createImageBitmap`, `Get tile pixel data`, `offsetY`, `cancelToken`, `cib_can_use_region`, `value`, `__instance`, `drawImage`, `onload`, `./resize_wasm`, `7087100fwSNGf`, `Invoke resize math`, `floor`, `dest`, `Map`, `1540302kOhLFF`, `name`, `prototype`, `copy`, `data`, `Memory`, `stringify`, `destTileBorder`, `length`, `__requested_features`, `82644jQiMKz`, `wasm_src`, `super_`, `convolveHV`, `unsharpRadius`, `resize`, `pow`, `Finished!`, `exp`, `__processStages`, `acquire`, `resizeAndUnsharp`, `idle`, `blurMono16`, `max`, `resolve`, `20uaaSGh`, `Unsharp result`, `hasOwnProperty`, `subarray`, `convolveHorizontally`, `Arguments`, `Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled`, `__modules`, `toHeight`, `./lib/tiler`, `then`, `isCanvas`, `cib`, `1542987xtwDVV`, `abcdefghijklmnopqrst`, `map`, `__cache`, `isImageBitmap`, `srcCtx`, `lk_`, `createElement`, `srcTileSize`, `mathlib: at least "js" or "wasm" should be enabled`, `./resize`, `Internal error in pica: target tile width/height is too small.`, `srcBitmap`, `unsharp`, `unsharpThreshold`, `height`, `toInnerWidth`, `445224GHdqUm`, `return`, `6875728LDOShn`, `./lib/utils`, `call`, `Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`, `set`, `getContext`, `available`, `release`, `1qSyLVn`, `abc`, `object-assign`, `__wasm`, `scaleX`, `can_use_canvas`, `features`, `MODULE_NOT_FOUND`, `postMessage`, `width`, `use`, `exports`, `3618909igkIzd`, `glur/mono16`, `srcImageBitmap`, `iterator`];
  return i = function() {
    return e2;
  }, i();
}
var a = r();
export {
  a as default
};
