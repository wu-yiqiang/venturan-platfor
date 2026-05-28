var e = g;
(function(e2, t2) {
  for (var n2 = g, r2 = e2(); ; ) try {
    if (-parseInt(n2(346)) / 1 * (-parseInt(n2(416)) / 2) + -parseInt(n2(380)) / 3 + parseInt(n2(298)) / 4 * (parseInt(n2(378)) / 5) + -parseInt(n2(275)) / 6 + parseInt(n2(367)) / 7 * (-parseInt(n2(334)) / 8) + -parseInt(n2(402)) / 9 + parseInt(n2(318)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(u, 401054);
var t = function(e2) {
  for (var t2 = g, n2, r2 = 1; r2 < arguments[t2(320)]; r2++) for (var i2 in n2 = Object(arguments[r2]), n2) Object.prototype.hasOwnProperty.call(n2, i2) && (e2[i2] = n2[i2]);
  return e2;
};
function n(e2, t2) {
  var n2 = {};
  return t2.forEach(function(t3) {
    Object.prototype[g(253)].call(e2, t3) && (n2[t3] = e2[t3]);
  }), n2;
}
function r(e2) {
  return n(e2, [`alpha`, `unsharpAmount`, `unsharpRadius`, `unsharpThreshold`, `cancelToken`]);
}
var i = { assign: t, pick: n, pick_pica_resize_options: r };
function a(e2) {
  var t2 = { exports: {} };
  return e2(t2, t2.exports), t2.exports;
}
function o(e2) {
  throw Error(`Could not dynamically require "` + e2 + `". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.`);
}
var s = a(function(e2, t2) {
  (function(t3) {
    e2.exports = t3();
  })(function() {
    return (/* @__PURE__ */ (function() {
      function e3(t3, n2, r2) {
        var i2 = g;
        function a2(i3, c3) {
          var l2 = g;
          if (!n2[i3]) {
            if (!t3[i3]) {
              var u2 = typeof o == `function` && o;
              if (!c3 && u2) return u2(i3, true);
              if (s2) return s2(i3, true);
              var d2 = Error(l2(302) + i3 + `'`);
              throw d2[l2(333)] = `MODULE_NOT_FOUND`, d2;
            }
            var f2 = n2[i3] = { exports: {} };
            t3[i3][0].call(f2.exports, function(e4) {
              var n3 = t3[i3][1][e4];
              return a2(n3 || e4);
            }, f2, f2.exports, e3, t3, n2, r2);
          }
          return n2[i3].exports;
        }
        for (var s2 = typeof o == `function` && o, c2 = 0; c2 < r2[i2(320)]; c2++) a2(r2[c2]);
        return a2;
      }
      return e3;
    })())({ 1: [function(e3, t3, n2) {
      var r2 = g, i2 = e3(`inherits`), a2 = e3(`multimath`), o2 = e3(r2(350)), s2 = e3(`./mm_resize`);
      function c2(e4) {
        var t4 = r2, n3 = e4 || [], i3 = { js: n3.indexOf(`js`) >= 0, wasm: n3[t4(258)](`wasm`) >= 0 };
        a2.call(this, i3), this.features = { js: i3.js, wasm: i3.wasm && this.has_wasm() }, this.use(o2), this.use(s2);
      }
      i2(c2, a2), c2.prototype[r2(391)] = function(e4, t4) {
        var n3 = r2, i3 = this[n3(301)](e4, t4);
        return e4.unsharpAmount && this.unsharp_mask(i3, e4[n3(394)], e4.toHeight, e4[n3(278)], e4.unsharpRadius, e4.unsharpThreshold), i3;
      }, t3[r2(274)] = c2;
    }, { "./mm_resize": 4, "./mm_unsharp_mask": 9, inherits: 19, multimath: 20 }], 2: [function(e3, t3, n2) {
      function r2(e4) {
        return e4 < 0 ? 0 : e4 > 255 ? 255 : e4;
      }
      function i2(e4, t4, n3, i3, a3, o2) {
        var s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v = 0, y = 0;
        for (h2 = 0; h2 < i3; h2++) {
          for (d2 = 0, g2 = 0; g2 < a3; g2++) {
            for (f2 = o2[d2++], p2 = o2[d2++], m2 = v + f2 * 4 | 0, s2 = c2 = l2 = u2 = 0; p2 > 0; p2--) _2 = o2[d2++], u2 = u2 + _2 * e4[m2 + 3] | 0, l2 = l2 + _2 * e4[m2 + 2] | 0, c2 = c2 + _2 * e4[m2 + 1] | 0, s2 = s2 + _2 * e4[m2] | 0, m2 = m2 + 4 | 0;
            t4[y + 3] = r2(u2 + 8192 >> 14), t4[y + 2] = r2(l2 + 8192 >> 14), t4[y + 1] = r2(c2 + 8192 >> 14), t4[y] = r2(s2 + 8192 >> 14), y = y + i3 * 4 | 0;
          }
          y = (h2 + 1) * 4 | 0, v = (h2 + 1) * n3 * 4 | 0;
        }
      }
      function a2(e4, t4, n3, i3, a3, o2) {
        var s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v = 0, y = 0;
        for (h2 = 0; h2 < i3; h2++) {
          for (d2 = 0, g2 = 0; g2 < a3; g2++) {
            for (f2 = o2[d2++], p2 = o2[d2++], m2 = v + f2 * 4 | 0, s2 = c2 = l2 = u2 = 0; p2 > 0; p2--) _2 = o2[d2++], u2 = u2 + _2 * e4[m2 + 3] | 0, l2 = l2 + _2 * e4[m2 + 2] | 0, c2 = c2 + _2 * e4[m2 + 1] | 0, s2 = s2 + _2 * e4[m2] | 0, m2 = m2 + 4 | 0;
            t4[y + 3] = r2(u2 + 8192 >> 14), t4[y + 2] = r2(l2 + 8192 >> 14), t4[y + 1] = r2(c2 + 8192 >> 14), t4[y] = r2(s2 + 8192 >> 14), y = y + i3 * 4 | 0;
          }
          y = (h2 + 1) * 4 | 0, v = (h2 + 1) * n3 * 4 | 0;
        }
      }
      t3.exports = { convolveHorizontally: i2, convolveVertically: a2 };
    }, {}], 3: [function(e3, t3, n2) {
      t3.exports = `AGFzbQEAAAAADAZkeWxpbmsAAAAAAAEXA2AAAGAGf39/f39/AGAHf39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMEAwABAgYGAX8AQQALB1cFEV9fd2FzbV9jYWxsX2N0b3JzAAAIY29udm9sdmUAAQpjb252b2x2ZUhWAAIMX19kc29faGFuZGxlAwAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAK7AMDAwABC8YDAQ9/AkAgA0UNACAERQ0AA0AgDCENQQAhE0EAIQcDQCAHQQJqIQYCfyAHQQF0IAVqIgcuAQIiFEUEQEGAwAAhCEGAwAAhCUGAwAAhCkGAwAAhCyAGDAELIBIgBy4BAGohCEEAIQsgFCEHQQAhDiAGIQlBACEPQQAhEANAIAUgCUEBdGouAQAiESAAIAhBAnRqKAIAIgpBGHZsIBBqIRAgCkH/AXEgEWwgC2ohCyAKQRB2Qf8BcSARbCAPaiEPIApBCHZB/wFxIBFsIA5qIQ4gCEEBaiEIIAlBAWohCSAHQQFrIgcNAAsgC0GAQGshCCAOQYBAayEJIA9BgEBrIQogEEGAQGshCyAGIBRqCyEHIAEgDUECdGogCUEOdSIGQf8BIAZB/wFIGyIGQQAgBkEAShtBCHRBgP4DcSAKQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EQdEGAgPwHcSALQQ51IgZB/wEgBkH/AUgbIgZBACAGQQBKG0EYdHJyIAhBDnUiBkH/ASAGQf8BSBsiBkEAIAZBAEobcjYCACADIA1qIQ0gE0EBaiITIARHDQALIAxBAWoiDCACbCESIAMgDEcNAAsLCx4AQQAgAiADIAQgBSAAEAEgAkEAIAQgBSAGIAEQAQs=`;
    }, {}], 4: [function(e3, t3, n2) {
      var r2 = g;
      t3.exports = { name: r2(301), fn: e3(`./resize`), wasm_fn: e3(`./resize_wasm`), wasm_src: e3(r2(339)) };
    }, { "./convolve_wasm_base64": 3, "./resize": 5, "./resize_wasm": 8 }], 5: [function(e3, t3, n2) {
      var r2 = g, i2 = e3(`./resize_filter_gen`), a2 = e3(`./convolve`).convolveHorizontally, o2 = e3(r2(303)).convolveVertically;
      function s2(e4, t4, n3) {
        for (var r3 = 3, i3 = t4 * n3 * 4 | 0; r3 < i3; ) e4[r3] = 255, r3 = r3 + 4 | 0;
      }
      t3.exports = function(e4) {
        var t4 = r2, n3 = e4.src, c2 = e4.width, l2 = e4[t4(286)], u2 = e4.toWidth, d2 = e4[t4(241)], f2 = e4.scaleX || e4.toWidth / e4.width, p2 = e4.scaleY || e4.toHeight / e4.height, m2 = e4[t4(287)] || 0, h2 = e4.offsetY || 0, g2 = e4[t4(357)] || new Uint8Array(u2 * d2 * 4), _2 = e4.quality === void 0 ? 3 : e4.quality, v = e4.alpha || false, y = i2(_2, c2, u2, f2, m2), b = i2(_2, l2, d2, p2, h2), x = new Uint8Array(u2 * l2 * 4);
        return a2(n3, x, c2, l2, u2, y), o2(x, g2, l2, u2, d2, b), v || s2(g2, u2, d2), g2;
      };
    }, { "./convolve": 2, "./resize_filter_gen": 6 }], 6: [function(e3, t3, n2) {
      var r2 = g, i2 = e3(r2(377)), a2 = 14;
      function o2(e4) {
        return Math.round(e4 * ((1 << a2) - 1));
      }
      t3.exports = function(e4, t4, n3, a3, s2) {
        var c2 = r2, l2 = i2[e4][c2(383)], u2 = 1 / a3, d2 = Math.min(1, a3), f2 = i2[e4].win / d2, p2, m2, h2, g2, _2, v, y, b, x, S, C, w, T, E, D, O, k, A = Math.floor((f2 + 1) * 2), j = new Int16Array((A + 2) * n3), M = 0, N = !j.subarray || !j.set;
        for (p2 = 0; p2 < n3; p2++) {
          for (m2 = (p2 + 0.5) * u2 + s2, h2 = Math[c2(272)](0, Math.floor(m2 - f2)), g2 = Math.min(t4 - 1, Math.ceil(m2 + f2)), _2 = g2 - h2 + 1, v = new Float32Array(_2), y = new Int16Array(_2), b = 0, x = h2, S = 0; x <= g2; x++, S++) C = l2((x + 0.5 - m2) * d2), b += C, v[S] = C;
          for (w = 0, S = 0; S < v.length; S++) T = v[S] / b, w += T, y[S] = o2(T);
          for (y[n3 >> 1] += o2(1 - w), E = 0; E < y.length && y[E] === 0; ) E++;
          if (E < y.length) {
            for (D = y.length - 1; D > 0 && y[D] === 0; ) D--;
            if (O = h2 + E, k = D - E + 1, j[M++] = O, j[M++] = k, !N) j.set(y[c2(323)](E, D + 1), M), M += k;
            else for (S = E; S <= D; S++) j[M++] = y[S];
          } else j[M++] = 0, j[M++] = 0;
        }
        return j;
      };
    }, { "./resize_filter_info": 7 }], 7: [function(e3, t3, n2) {
      t3.exports = [{ win: 0.5, filter: function(e4) {
        return +(e4 >= -0.5 && e4 < 0.5);
      } }, { win: 1, filter: function(e4) {
        if (e4 <= -1 || e4 >= 1) return 0;
        if (e4 > -11920929e-14 && e4 < 11920929e-14) return 1;
        var t4 = e4 * Math.PI;
        return Math.sin(t4) / t4 * (0.54 + 0.46 * Math.cos(t4 / 1));
      } }, { win: 2, filter: function(e4) {
        if (e4 <= -2 || e4 >= 2) return 0;
        if (e4 > -11920929e-14 && e4 < 11920929e-14) return 1;
        var t4 = e4 * Math.PI;
        return Math.sin(t4) / t4 * Math.sin(t4 / 2) / (t4 / 2);
      } }, { win: 3, filter: function(e4) {
        if (e4 <= -3 || e4 >= 3) return 0;
        if (e4 > -11920929e-14 && e4 < 11920929e-14) return 1;
        var t4 = e4 * Math.PI;
        return Math.sin(t4) / t4 * Math.sin(t4 / 3) / (t4 / 3);
      } }];
    }, {}], 8: [function(e3, t3, n2) {
      var r2 = g, i2 = e3(`./resize_filter_gen`);
      function a2(e4, t4, n3) {
        for (var r3 = 3, i3 = t4 * n3 * 4 | 0; r3 < i3; ) e4[r3] = 255, r3 = r3 + 4 | 0;
      }
      function o2(e4) {
        return new Uint8Array(e4.buffer, 0, e4.byteLength);
      }
      var s2 = true;
      try {
        s2 = new Uint32Array(new Uint8Array([1, 0, 0, 0])[r2(295)])[0] === 1;
      } catch {
      }
      function c2(e4, t4, n3) {
        var i3 = r2;
        if (s2) {
          t4[i3(300)](o2(e4), n3);
          return;
        }
        for (var a3 = n3, c3 = 0; c3 < e4.length; c3++) {
          var l2 = e4[c3];
          t4[a3++] = l2 & 255, t4[a3++] = l2 >> 8 & 255;
        }
      }
      t3.exports = function(e4) {
        var t4 = r2, n3 = e4.src, o3 = e4.width, s3 = e4.height, l2 = e4.toWidth, u2 = e4.toHeight, d2 = e4.scaleX || e4.toWidth / e4.width, f2 = e4.scaleY || e4.toHeight / e4[t4(286)], p2 = e4.offsetX || 0, m2 = e4.offsetY || 0, h2 = e4.dest || new Uint8Array(l2 * u2 * 4), g2 = e4[t4(397)] === void 0 ? 3 : e4.quality, _2 = e4[t4(314)] || false, v = i2(g2, o3, l2, d2, p2), y = i2(g2, s3, u2, f2, m2), b = this[t4(381)](0 + Math[t4(272)](n3.byteLength, h2[t4(385)])), x = this[t4(381)](b + s3 * l2 * 4), S = this.__align(x + v[t4(385)]), C = S + y.byteLength, w = this.__instance(t4(301), C), T = new Uint8Array(this[t4(326)][t4(295)]), E = new Uint32Array(this.__memory.buffer), D = new Uint32Array(n3[t4(295)]);
        return E.set(D), c2(v, T, x), c2(y, T, S), (w.exports.convolveHV || w.exports[t4(344)])(x, S, b, o3, s3, l2, u2), new Uint32Array(h2.buffer).set(new Uint32Array(this.__memory.buffer, 0, u2 * l2)), _2 || a2(h2, l2, u2), h2;
      };
    }, { "./resize_filter_gen": 6 }], 9: [function(e3, t3, n2) {
      t3.exports = { name: `unsharp_mask`, fn: e3(`./unsharp_mask`), wasm_fn: e3(`./unsharp_mask_wasm`), wasm_src: e3(`./unsharp_mask_wasm_base64`) };
    }, { "./unsharp_mask": 10, "./unsharp_mask_wasm": 11, "./unsharp_mask_wasm_base64": 12 }], 10: [function(e3, t3, n2) {
      var r2 = e3(`glur/mono16`);
      function i2(e4, t4, n3) {
        for (var r3 = t4 * n3, i3 = new Uint16Array(r3), a2, o2, s2, c2, l2 = 0; l2 < r3; l2++) a2 = e4[4 * l2], o2 = e4[4 * l2 + 1], s2 = e4[4 * l2 + 2], c2 = a2 >= o2 && a2 >= s2 ? a2 : o2 >= s2 && o2 >= a2 ? o2 : s2, i3[l2] = c2 << 8;
        return i3;
      }
      t3.exports = function(e4, t4, n3, a2, o2, s2) {
        var c2 = g, l2, u2, d2, f2, p2;
        if (!(a2 === 0 || o2 < 0.5)) {
          o2 > 2 && (o2 = 2);
          var m2 = i2(e4, t4, n3), h2 = new Uint16Array(m2);
          r2(h2, t4, n3, o2);
          for (var _2 = a2 / 100 * 4096 + 0.5 | 0, v = s2 << 8, y = t4 * n3, b = 0; b < y; b++) l2 = m2[b], f2 = l2 - h2[b], Math[c2(375)](f2) >= v && (u2 = l2 + (_2 * f2 + 2048 >> 12), u2 = u2 > 65280 ? 65280 : u2, u2 = u2 < 0 ? 0 : u2, l2 = l2 === 0 ? 1 : l2, d2 = (u2 << 12) / l2 | 0, p2 = b * 4, e4[p2] = e4[p2] * d2 + 2048 >> 12, e4[p2 + 1] = e4[p2 + 1] * d2 + 2048 >> 12, e4[p2 + 2] = e4[p2 + 2] * d2 + 2048 >> 12);
        }
      };
    }, { "glur/mono16": 18 }], 11: [function(e3, t3, n2) {
      t3.exports = function(e4, t4, n3, r2, i2, a2) {
        var o2 = g;
        if (!(r2 === 0 || i2 < 0.5)) {
          i2 > 2 && (i2 = 2);
          var s2 = t4 * n3, c2 = s2 * 4, l2 = s2 * 2, u2 = s2 * 2, d2 = Math.max(t4, n3) * 4, f2 = 32, p2 = 0, m2 = c2, h2 = m2 + l2, _2 = h2 + u2, v = _2 + u2, y = v + d2, b = this.__instance(`unsharp_mask`, c2 + l2 + u2 * 2 + d2 + f2, { exp: Math[o2(311)] }), x = new Uint32Array(e4[o2(295)]);
          new Uint32Array(this.__memory.buffer).set(x);
          var S = b.exports.hsv_v16 || b[o2(274)]._hsv_v16;
          S(p2, m2, t4, n3), S = b.exports[o2(250)] || b.exports._blurMono16, S(m2, h2, _2, v, y, t4, n3, i2), S = b[o2(274)].unsharp || b[o2(274)][o2(313)], S(p2, p2, m2, h2, t4, n3, r2, a2), x.set(new Uint32Array(this.__memory[o2(295)], 0, s2));
        }
      };
    }, {}], 12: [function(e3, t3, n2) {
      t3.exports = `AGFzbQEAAAAADAZkeWxpbmsAAAAAAAE0B2AAAGAEf39/fwBgBn9/f39/fwBgCH9/f39/f39/AGAIf39/f39/f30AYAJ9fwBgAXwBfAIZAgNlbnYDZXhwAAYDZW52Bm1lbW9yeQIAAAMHBgAFAgQBAwYGAX8AQQALB4oBCBFfX3dhc21fY2FsbF9jdG9ycwABFl9fYnVpbGRfZ2F1c3NpYW5fY29lZnMAAg5fX2dhdXNzMTZfbGluZQADCmJsdXJNb25vMTYABAdoc3ZfdjE2AAUHdW5zaGFycAAGDF9fZHNvX2hhbmRsZQMAGF9fd2FzbV9hcHBseV9kYXRhX3JlbG9jcwABCsUMBgMAAQvWAQEHfCABRNuGukOCGvs/IAC7oyICRAAAAAAAAADAohAAIgW2jDgCFCABIAKaEAAiAyADoCIGtjgCECABRAAAAAAAAPA/IAOhIgQgBKIgAyACIAKgokQAAAAAAADwP6AgBaGjIgS2OAIAIAEgBSAEmqIiB7Y4AgwgASADIAJEAAAAAAAA8D+gIASioiIItjgCCCABIAMgAkQAAAAAAADwv6AgBKKiIgK2OAIEIAEgByAIoCAFRAAAAAAAAPA/IAahoCIDo7Y4AhwgASAEIAKgIAOjtjgCGAuGBQMGfwl8An0gAyoCDCEVIAMqAgghFiADKgIUuyERIAMqAhC7IRACQCAEQQFrIghBAEgiCQRAIAIhByAAIQYMAQsgAiAALwEAuCIPIAMqAhi7oiIMIBGiIg0gDCAQoiAPIAMqAgS7IhOiIhQgAyoCALsiEiAPoqCgoCIOtjgCACACQQRqIQcgAEECaiEGIAhFDQAgCEEBIAhBAUgbIgpBf3MhCwJ/IAQgCmtBAXFFBEAgDiENIAgMAQsgAiANIA4gEKIgFCASIAAvAQK4Ig+ioKCgIg22OAIEIAJBCGohByAAQQRqIQYgDiEMIARBAmsLIQIgC0EAIARrRg0AA0AgByAMIBGiIA0gEKIgDyAToiASIAYvAQC4Ig6ioKCgIgy2OAIAIAcgDSARoiAMIBCiIA4gE6IgEiAGLwECuCIPoqCgoCINtjgCBCAHQQhqIQcgBkEEaiEGIAJBAkohACACQQJrIQIgAA0ACwsCQCAJDQAgASAFIAhsQQF0aiIAAn8gBkECay8BACICuCINIBW7IhKiIA0gFrsiE6KgIA0gAyoCHLuiIgwgEKKgIAwgEaKgIg8gB0EEayIHKgIAu6AiDkQAAAAAAADwQWMgDkQAAAAAAAAAAGZxBEAgDqsMAQtBAAs7AQAgCEUNACAGQQRrIQZBACAFa0EBdCEBA0ACfyANIBKiIAJB//8DcbgiDSAToqAgDyIOIBCioCAMIBGioCIPIAdBBGsiByoCALugIgxEAAAAAAAA8EFjIAxEAAAAAAAAAABmcQRAIAyrDAELQQALIQMgBi8BACECIAAgAWoiACADOwEAIAZBAmshBiAIQQFKIQMgDiEMIAhBAWshCCADDQALCwvRAgIBfwd8AkAgB0MAAAAAWw0AIARE24a6Q4Ia+z8gB0MAAAA/l7ujIglEAAAAAAAAAMCiEAAiDLaMOAIUIAQgCZoQACIKIAqgIg22OAIQIAREAAAAAAAA8D8gCqEiCyALoiAKIAkgCaCiRAAAAAAAAPA/oCAMoaMiC7Y4AgAgBCAMIAuaoiIOtjgCDCAEIAogCUQAAAAAAADwP6AgC6KiIg+2OAIIIAQgCiAJRAAAAAAAAPC/oCALoqIiCbY4AgQgBCAOIA+gIAxEAAAAAAAA8D8gDaGgIgqjtjgCHCAEIAsgCaAgCqO2OAIYIAYEQANAIAAgBSAIbEEBdGogAiAIQQF0aiADIAQgBSAGEAMgCEEBaiIIIAZHDQALCyAFRQ0AQQAhCANAIAIgBiAIbEEBdGogASAIQQF0aiADIAQgBiAFEAMgCEEBaiIIIAVHDQALCwtxAQN/IAIgA2wiBQRAA0AgASAAKAIAIgRBEHZB/wFxIgIgAiAEQQh2Qf8BcSIDIAMgBEH/AXEiBEkbIAIgA0sbIgYgBiAEIAIgBEsbIAMgBEsbQQh0OwEAIAFBAmohASAAQQRqIQAgBUEBayIFDQALCwuZAgIDfwF8IAQgBWwhBAJ/IAazQwAAgEWUQwAAyEKVu0QAAAAAAADgP6AiC5lEAAAAAAAA4EFjBEAgC6oMAQtBgICAgHgLIQUgBARAIAdBCHQhCUEAIQYDQCAJIAIgBkEBdCIHai8BACIBIAMgB2ovAQBrIgcgB0EfdSIIaiAIc00EQCAAIAZBAnQiCGoiCiAFIAdsQYAQakEMdSABaiIHQYD+AyAHQYD+A0gbIgdBACAHQQBKG0EMdCABQQEgARtuIgEgCi0AAGxBgBBqQQx2OgAAIAAgCEEBcmoiByABIActAABsQYAQakEMdjoAACAAIAhBAnJqIgcgASAHLQAAbEGAEGpBDHY6AAALIAZBAWoiBiAERw0ACwsL`;
    }, {}], 13: [function(e3, t3, n2) {
      var r2 = g, i2 = 100;
      function a2(e4, t4) {
        var n3 = g;
        this.create = e4, this.available = [], this[n3(360)] = {}, this.lastId = 1, this.timeoutId = 0, this.idle = t4 || 2e3;
      }
      a2.prototype.acquire = function() {
        var e4 = g, t4 = this, n3;
        return this.available.length === 0 ? (n3 = this.create(), n3.id = this.lastId++, n3[e4(413)] = function() {
          return t4.release(n3);
        }) : n3 = this.available.pop(), this.acquired[n3.id] = n3, n3;
      }, a2[r2(376)].release = function(e4) {
        var t4 = r2, n3 = this;
        delete this.acquired[e4.id], e4.lastUsed = Date[t4(408)](), this.available.push(e4), this.timeoutId === 0 && (this[t4(292)] = setTimeout(function() {
          return n3.gc();
        }, i2));
      }, a2.prototype.gc = function() {
        var e4 = r2, t4 = this, n3 = Date.now();
        this.available = this.available[e4(383)](function(e5) {
          return n3 - e5.lastUsed > t4.idle ? (e5.destroy(), false) : true;
        }), this.available.length === 0 ? this.timeoutId = 0 : this.timeoutId = setTimeout(function() {
          return t4.gc();
        }, i2);
      }, t3.exports = a2;
    }, {}], 14: [function(e3, t3, n2) {
      var r2 = 2;
      t3.exports = function(e4, t4, n3, i2, a2, o2) {
        var s2 = g, c2 = n3 / e4, l2 = i2 / t4, u2 = (2 * o2 + r2 + 1) / a2;
        if (u2 > 0.5) return [[n3, i2]];
        var d2 = Math.ceil(Math.log(Math.min(c2, l2)) / Math.log(u2));
        if (d2 <= 1) return [[n3, i2]];
        for (var f2 = [], p2 = 0; p2 < d2; p2++) {
          var m2 = Math.round((Math[s2(325)](e4, d2 - p2 - 1) * n3 ** +(p2 + 1)) ** (1 / d2)), h2 = Math[s2(265)]((t4 ** (d2 - p2 - 1) * Math[s2(325)](i2, p2 + 1)) ** (1 / d2));
          f2.push([m2, h2]);
        }
        return f2;
      };
    }, {}], 15: [function(e3, t3, n2) {
      var r2 = 1e-5;
      function i2(e4) {
        var t4 = Math.round(e4);
        return Math.abs(e4 - t4) < r2 ? t4 : Math.floor(e4);
      }
      function a2(e4) {
        var t4 = Math.round(e4);
        return Math.abs(e4 - t4) < r2 ? t4 : Math.ceil(e4);
      }
      t3.exports = function(e4) {
        var t4 = g, n3 = e4.toWidth / e4.width, r3 = e4.toHeight / e4[t4(286)], o2 = i2(e4[t4(264)] * n3) - 2 * e4[t4(256)], s2 = i2(e4[t4(264)] * r3) - 2 * e4.destTileBorder;
        if (o2 < 1 || s2 < 1) throw Error(`Internal error in pica: target tile width/height is too small.`);
        var c2, l2, u2, d2, f2, p2, m2 = [], h2;
        for (d2 = 0; d2 < e4[t4(241)]; d2 += s2) for (u2 = 0; u2 < e4.toWidth; u2 += o2) c2 = u2 - e4.destTileBorder, c2 < 0 && (c2 = 0), f2 = u2 + o2 + e4.destTileBorder - c2, c2 + f2 >= e4.toWidth && (f2 = e4.toWidth - c2), l2 = d2 - e4.destTileBorder, l2 < 0 && (l2 = 0), p2 = d2 + s2 + e4.destTileBorder - l2, l2 + p2 >= e4[t4(241)] && (p2 = e4.toHeight - l2), h2 = { toX: c2, toY: l2, toWidth: f2, toHeight: p2, toInnerX: u2, toInnerY: d2, toInnerWidth: o2, toInnerHeight: s2, offsetX: c2 / n3 - i2(c2 / n3), offsetY: l2 / r3 - i2(l2 / r3), scaleX: n3, scaleY: r3, x: i2(c2 / n3), y: i2(l2 / r3), width: a2(f2 / n3), height: a2(p2 / r3) }, m2.push(h2);
        return m2;
      };
    }, {}], 16: [function(e3, t3, n2) {
      var r2 = g;
      function i2(e4) {
        return Object[g(376)].toString.call(e4);
      }
      t3.exports.isCanvas = function(e4) {
        var t4 = i2(e4);
        return t4 === `[object HTMLCanvasElement]` || t4 === `[object OffscreenCanvas]` || t4 === `[object Canvas]`;
      }, t3.exports.isImage = function(e4) {
        return i2(e4) === `[object HTMLImageElement]`;
      }, t3.exports.isImageBitmap = function(e4) {
        var t4 = g;
        return i2(e4) === t4(386);
      }, t3.exports[r2(279)] = function(e4) {
        var t4 = 0, n3 = [];
        function r3() {
          t4 < e4 && n3.length && (t4++, n3.shift()());
        }
        return function(e5) {
          return new Promise(function(i3, a2) {
            n3.push(function() {
              e5().then(function(e6) {
                i3(e6), t4--, r3();
              }, function(e6) {
                a2(e6), t4--, r3();
              });
            }), r3();
          });
        };
      }, t3[r2(274)].cib_quality_name = function(e4) {
        var t4 = r2;
        switch (e4) {
          case 0:
            return `pixelated`;
          case 1:
            return t4(340);
          case 2:
            return `medium`;
        }
        return `high`;
      }, t3.exports.cib_support = function(e4) {
        return Promise[r2(393)]().then(function() {
          if (typeof createImageBitmap > `u`) return false;
          var t4 = e4(100, 100);
          return createImageBitmap(t4, 0, 0, 100, 100, { resizeWidth: 10, resizeHeight: 10, resizeQuality: `high` }).then(function(e5) {
            var n3 = e5[g(263)] === 10;
            return e5.close(), t4 = null, n3;
          });
        }).catch(function() {
          return false;
        });
      }, t3[r2(274)].worker_offscreen_canvas_support = function() {
        var e4 = r2;
        return new Promise(function(e5, t4) {
          var n3 = g;
          if (typeof OffscreenCanvas > `u`) {
            e5(false);
            return;
          }
          function r3(e6) {
            if (typeof createImageBitmap > `u`) {
              e6.postMessage(false);
              return;
            }
            Promise.resolve().then(function() {
              var e7 = new OffscreenCanvas(10, 10);
              return e7.getContext(`2d`).rect(0, 0, 1, 1), createImageBitmap(e7, 0, 0, 1, 1);
            }).then(function() {
              return e6.postMessage(true);
            }, function() {
              return e6.postMessage(false);
            });
          }
          var i3 = btoa(`(` + r3.toString() + `)(self);`), a2 = new Worker(n3(411) + i3);
          a2.onmessage = function(t5) {
            return e5(t5.data);
          }, a2.onerror = t4;
        })[e4(291)](function(e5) {
          return e5;
        }, function() {
          return false;
        });
      }, t3.exports.can_use_canvas = function(e4) {
        var t4 = r2, n3 = false;
        try {
          var i3 = e4(2, 1).getContext(`2d`), a2 = i3.createImageData(2, 1);
          a2.data[0] = 12, a2.data[1] = 23, a2[t4(249)][2] = 34, a2[t4(249)][3] = 255, a2.data[4] = 45, a2[t4(249)][5] = 56, a2[t4(249)][6] = 67, a2.data[7] = 255, i3.putImageData(a2, 0, 0), a2 = null, a2 = i3.getImageData(0, 0, 2, 1), a2[t4(249)][0] === 12 && a2.data[1] === 23 && a2.data[2] === 34 && a2.data[3] === 255 && a2[t4(249)][4] === 45 && a2.data[5] === 56 && a2.data[6] === 67 && a2.data[7] === 255 && (n3 = true);
        } catch {
        }
        return n3;
      }, t3[r2(274)].cib_can_use_region = function() {
        return new Promise(function(e4) {
          var t4 = g;
          if (typeof createImageBitmap > `u`) {
            e4(false);
            return;
          }
          var n3 = new Image();
          n3[t4(316)] = `data:image/jpeg;base64,/9j/4QBiRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAYAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAwMEAwMEBAMEBQQEBQYKBwYGBgYNCQoICg8NEBAPDQ8OERMYFBESFxIODxUcFRcZGRsbGxAUHR8dGh8YGhsa/9sAQwEEBQUGBQYMBwcMGhEPERoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa/8IAEQgAAQACAwERAAIRAQMRAf/EABQAAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF/P//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8hf//aAAwDAQACAAMAAAAQH//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAT8Qf//Z`, n3.onload = function() {
            createImageBitmap(n3, 0, 0, n3.width, n3.height).then(function(t5) {
              t5.width === n3.width && t5.height === n3.height ? e4(true) : e4(false);
            }, function() {
              return e4(false);
            });
          }, n3.onerror = function() {
            return e4(false);
          };
        });
      };
    }, {}], 17: [function(e3, t3, n2) {
      t3.exports = function() {
        var t4 = e3(`./mathlib`), n3;
        onmessage = function(e4) {
          var r2 = g, i2 = e4[r2(249)].opts, a2 = false;
          if (!i2.src && i2.srcBitmap) {
            var o2 = new OffscreenCanvas(i2.width, i2.height), s2 = o2.getContext(`2d`, { alpha: !!i2.alpha });
            s2.drawImage(i2.srcBitmap, 0, 0), i2.src = s2.getImageData(0, 0, i2.width, i2.height).data, o2.width = o2.height = 0, o2 = null, i2.srcBitmap.close(), i2.srcBitmap = null, a2 = true;
          }
          n3 || (n3 = new t4(e4.data.features));
          var c2 = n3.resizeAndUnsharp(i2);
          if (a2) {
            var l2 = new ImageData(new Uint8ClampedArray(c2), i2.toWidth, i2.toHeight), u2 = new OffscreenCanvas(i2.toWidth, i2.toHeight);
            u2[r2(341)](`2d`, { alpha: !!i2.alpha }).putImageData(l2, 0, 0), createImageBitmap(u2)[r2(291)](function(e5) {
              postMessage({ bitmap: e5 }, [e5]);
            });
          } else postMessage({ data: c2 }, [c2.buffer]);
        };
      };
    }, { "./mathlib": 1 }], 18: [function(e3, t3, n2) {
      var r2, i2, a2, o2, s2, c2, l2, u2;
      function d2(e4) {
        var t4 = g;
        e4 < 0.5 && (e4 = 0.5);
        var n3 = Math.exp(0.726 * 0.726) / e4, d3 = Math[t4(311)](-n3), f3 = Math[t4(311)](-2 * n3), p3 = (1 - d3) * (1 - d3) / (1 + 2 * n3 * d3 - f3);
        return r2 = p3, i2 = p3 * (n3 - 1) * d3, a2 = p3 * (n3 + 1) * d3, o2 = -p3 * f3, s2 = 2 * d3, c2 = -f3, l2 = (r2 + i2) / (1 - s2 - c2), u2 = (a2 + o2) / (1 - s2 - c2), new Float32Array([r2, i2, a2, o2, s2, c2, l2, u2]);
      }
      function f2(e4, t4, n3, r3, i3, a3) {
        var o3, s3, c3, l3, u3, d3, f3, p3, m2, h2, g2, _2, v, y;
        for (m2 = 0; m2 < a3; m2++) {
          for (d3 = m2 * i3, f3 = m2, p3 = 0, o3 = e4[d3], u3 = o3 * r3[6], l3 = u3, g2 = r3[0], _2 = r3[1], v = r3[4], y = r3[5], h2 = 0; h2 < i3; h2++) s3 = e4[d3], c3 = s3 * g2 + o3 * _2 + l3 * v + u3 * y, u3 = l3, l3 = c3, o3 = s3, n3[p3] = l3, p3++, d3++;
          for (d3--, p3--, f3 += a3 * (i3 - 1), o3 = e4[d3], u3 = o3 * r3[7], l3 = u3, s3 = o3, g2 = r3[2], _2 = r3[3], h2 = i3 - 1; h2 >= 0; h2--) c3 = s3 * g2 + o3 * _2 + l3 * v + u3 * y, u3 = l3, l3 = c3, o3 = s3, s3 = e4[d3], t4[f3] = n3[p3] + l3, d3--, p3--, f3 -= a3;
        }
      }
      function p2(e4, t4, n3, r3) {
        var i3 = g;
        if (r3) {
          var a3 = new Uint16Array(e4.length), o3 = new Float32Array(Math[i3(272)](t4, n3)), s3 = d2(r3);
          f2(e4, a3, o3, s3, t4, n3), f2(a3, e4, o3, s3, n3, t4);
        }
      }
      t3.exports = p2;
    }, {}], 19: [function(e3, t3, n2) {
      var r2 = g;
      typeof Object.create == r2(363) ? t3.exports = function(e4, t4) {
        var n3 = r2;
        t4 && (e4[n3(409)] = t4, e4.prototype = Object[n3(306)](t4[n3(376)], { constructor: { value: e4, enumerable: false, writable: true, configurable: true } }));
      } : t3.exports = function(e4, t4) {
        var n3 = r2;
        if (t4) {
          e4.super_ = t4;
          var i2 = function() {
          };
          i2.prototype = t4.prototype, e4[n3(376)] = new i2(), e4[n3(376)][n3(308)] = e4;
        }
      };
    }, {}], 20: [function(e3, t3, n2) {
      var r2 = g, i2 = e3(`object-assign`), a2 = e3(`./lib/base64decode`), o2 = e3(`./lib/wa_detect`), s2 = { js: true, wasm: true };
      function c2(e4) {
        var t4 = g;
        if (!(this instanceof c2)) return new c2(e4);
        var n3 = i2({}, s2, e4 || {});
        if (this.options = n3, this.__cache = {}, this.__init_promise = null, this[t4(276)] = n3.modules || {}, this.__memory = null, this[t4(410)] = {}, this.__isLE = new Uint32Array(new Uint8Array([1, 0, 0, 0]).buffer)[0] === 1, !this.options.js && !this.options.wasm) throw Error(`mathlib: at least "js" or "wasm" should be enabled`);
      }
      c2[r2(376)].has_wasm = o2, c2.prototype.use = function(e4) {
        var t4 = r2;
        return this[t4(276)][e4.name] = e4, this.options.wasm && this.has_wasm() && e4.wasm_fn ? this[e4.name] = e4.wasm_fn : this[e4.name] = e4.fn, this;
      }, c2.prototype.init = function() {
        var e4 = r2;
        if (this.__init_promise) return this.__init_promise;
        if (!this[e4(345)].js && this.options[e4(330)] && !this.has_wasm()) return Promise.reject(Error(`mathlib: only "wasm" was enabled, but it's not supported`));
        var t4 = this;
        return this.__init_promise = Promise[e4(261)](Object[e4(331)](t4.__modules).map(function(n3) {
          var r3 = e4, i3 = t4.__modules[n3];
          return !t4.options.wasm || !t4.has_wasm() || !i3.wasm_fn || t4.__wasm[n3] ? null : WebAssembly[r3(328)](t4.__base64decode(i3[r3(349)]))[r3(291)](function(e5) {
            t4.__wasm[n3] = e5;
          });
        })).then(function() {
          return t4;
        }), this.__init_promise;
      }, c2.prototype[r2(254)] = a2, c2.prototype.__reallocate = function(e4) {
        var t4 = r2;
        if (!this.__memory) return this.__memory = new WebAssembly[t4(321)]({ initial: Math.ceil(e4 / (64 * 1024)) }), this[t4(326)];
        var n3 = this.__memory.buffer.byteLength;
        return n3 < e4 && this.__memory[t4(240)](Math.ceil((e4 - n3) / (64 * 1024))), this.__memory;
      }, c2.prototype.__instance = function(e4, t4, n3) {
        var a3 = r2;
        if (t4 && this[a3(297)](t4), !this[a3(410)][e4]) {
          var o3 = this[a3(276)][e4];
          this[a3(410)][e4] = new WebAssembly[a3(260)](this.__base64decode(o3.wasm_src));
        }
        if (!this.__cache[e4]) {
          var s3 = { memoryBase: 0, memory: this.__memory, tableBase: 0, table: new WebAssembly.Table({ initial: 0, element: `anyfunc` }) };
          this[a3(293)][e4] = new WebAssembly.Instance(this.__wasm[e4], { env: i2(s3, n3 || {}) });
        }
        return this.__cache[e4];
      }, c2.prototype.__align = function(e4, t4) {
        t4 || (t4 = 8);
        var n3 = e4 % t4;
        return e4 + (n3 ? t4 - n3 : 0);
      }, t3.exports = c2;
    }, { "./lib/base64decode": 21, "./lib/wa_detect": 22, "object-assign": 23 }], 21: [function(e3, t3, n2) {
      var r2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;
      t3.exports = function(e4) {
        for (var t4 = e4[g(277)](/[\r\n=]/g, ``), n3 = t4.length, i2 = new Uint8Array(n3 * 3 >> 2), a2 = 0, o2 = 0, s2 = 0; s2 < n3; s2++) s2 % 4 == 0 && s2 && (i2[o2++] = a2 >> 16 & 255, i2[o2++] = a2 >> 8 & 255, i2[o2++] = a2 & 255), a2 = a2 << 6 | r2.indexOf(t4.charAt(s2));
        var c2 = n3 % 4 * 6;
        return c2 === 0 ? (i2[o2++] = a2 >> 16 & 255, i2[o2++] = a2 >> 8 & 255, i2[o2++] = a2 & 255) : c2 === 18 ? (i2[o2++] = a2 >> 10 & 255, i2[o2++] = a2 >> 2 & 255) : c2 === 12 && (i2[o2++] = a2 >> 4 & 255), i2;
      };
    }, {}], 22: [function(e3, t3, n2) {
      var r2;
      t3.exports = function() {
        var e4 = g;
        if (r2 !== void 0 || (r2 = false, typeof WebAssembly > `u`)) return r2;
        try {
          var t4 = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11]), n3 = new WebAssembly[e4(260)](t4);
          return new WebAssembly[e4(354)](n3, {}).exports.test(4) !== 0 && (r2 = true), r2;
        } catch {
        }
        return r2;
      };
    }, {}], 23: [function(e3, t3, n2) {
      var r2 = g, i2 = Object.getOwnPropertySymbols, a2 = Object[r2(376)][r2(253)], o2 = Object.prototype.propertyIsEnumerable;
      function s2(e4) {
        if (e4 == null) throw TypeError(`Object.assign cannot be called with null or undefined`);
        return Object(e4);
      }
      function c2() {
        var e4 = r2;
        try {
          if (!Object[e4(405)]) return false;
          var t4 = new String(`abc`);
          if (t4[5] = `de`, Object.getOwnPropertyNames(t4)[0] === `5`) return false;
          for (var n3 = {}, i3 = 0; i3 < 10; i3++) n3[`_` + String.fromCharCode(i3)] = i3;
          if (Object.getOwnPropertyNames(n3).map(function(e5) {
            return n3[e5];
          }).join(``) !== `0123456789`) return false;
          var a3 = {};
          return `abcdefghijklmnopqrst`.split(``).forEach(function(e5) {
            a3[e5] = e5;
          }), Object.keys(Object.assign({}, a3)).join(``) === `abcdefghijklmnopqrst`;
        } catch {
          return false;
        }
      }
      t3.exports = c2() ? Object.assign : function(e4, t4) {
        for (var n3 = r2, c3, l2 = s2(e4), u2, d2 = 1; d2 < arguments.length; d2++) {
          for (var f2 in c3 = Object(arguments[d2]), c3) a2.call(c3, f2) && (l2[f2] = c3[f2]);
          if (i2) {
            u2 = i2(c3);
            for (var p2 = 0; p2 < u2[n3(320)]; p2++) o2.call(c3, u2[p2]) && (l2[u2[p2]] = c3[u2[p2]]);
          }
        }
        return l2;
      };
    }, {}], 24: [function(e3, t3, n2) {
      var r2 = g, i2 = arguments[3], a2 = arguments[4], o2 = arguments[5], s2 = JSON.stringify;
      t3[r2(274)] = function(e4, t4) {
        for (var n3 = r2, c2, l2 = Object.keys(o2), u2 = 0, d2 = l2.length; u2 < d2; u2++) {
          var f2 = l2[u2], p2 = o2[f2].exports;
          if (p2 === e4 || p2 && p2.default === e4) {
            c2 = f2;
            break;
          }
        }
        if (!c2) {
          c2 = Math.floor(16 ** 8 * Math[n3(296)]()).toString(16);
          for (var m2 = {}, u2 = 0, d2 = l2.length; u2 < d2; u2++) {
            var f2 = l2[u2];
            m2[f2] = f2;
          }
          a2[c2] = [`function(require,module,exports){` + e4 + `(self); }`, m2];
        }
        var h2 = Math.floor(16 ** 8 * Math.random())[n3(255)](16), g2 = {};
        g2[c2] = c2, a2[h2] = [`function(require,module,exports){var f = require(` + s2(c2) + n3(347), g2];
        var _2 = {};
        v(h2);
        function v(e5) {
          for (var t5 in _2[e5] = true, a2[e5][1]) {
            var n4 = a2[e5][1][t5];
            _2[n4] || v(n4);
          }
        }
        var y = `(` + i2 + `)({` + Object.keys(_2).map(function(e5) {
          return s2(e5) + `:[` + a2[e5][0] + `,` + s2(a2[e5][1]) + `]`;
        }).join(`,`) + `},{},[` + s2(h2) + `])`, b = window.URL || window.webkitURL || window.mozURL || window.msURL, x = new Blob([y], { type: `text/javascript` });
        if (t4 && t4[n3(361)]) return x;
        var S = b[n3(365)](x), C = new Worker(S);
        return C[n3(307)] = S, C;
      };
    }, {}], "/index.js": [function(e3, t3, n2) {
      var r2 = g;
      function i2(e4, t4) {
        return l2(e4) || c2(e4, t4) || o2(e4, t4) || a2();
      }
      function a2() {
        throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function o2(e4, t4) {
        var n3 = g;
        if (e4) {
          if (typeof e4 == `string`) return s2(e4, t4);
          var r3 = Object.prototype.toString.call(e4).slice(8, -1);
          if (r3 === `Object` && e4.constructor && (r3 = e4[n3(308)][n3(364)]), r3 === `Map` || r3 === `Set`) return Array[n3(319)](e4);
          if (r3 === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3)) return s2(e4, t4);
        }
      }
      function s2(e4, t4) {
        (t4 == null || t4 > e4[g(320)]) && (t4 = e4.length);
        for (var n3 = 0, r3 = Array(t4); n3 < t4; n3++) r3[n3] = e4[n3];
        return r3;
      }
      function c2(e4, t4) {
        var n3 = g, r3 = e4 == null ? null : typeof Symbol < `u` && e4[Symbol.iterator] || e4[`@@iterator`];
        if (r3 != null) {
          var i3 = [], a3 = true, o3 = false, s3, c3;
          try {
            for (r3 = r3.call(e4); !(a3 = (s3 = r3.next()).done) && (i3[n3(395)](s3.value), !(t4 && i3.length === t4)); a3 = true) ;
          } catch (e5) {
            o3 = true, c3 = e5;
          } finally {
            try {
              !a3 && r3.return != null && r3.return();
            } finally {
              if (o3) throw c3;
            }
          }
          return i3;
        }
      }
      function l2(e4) {
        if (Array.isArray(e4)) return e4;
      }
      var u2 = e3(`object-assign`), d2 = e3(`webworkify`), f2 = e3(`./lib/mathlib`), p2 = e3(`./lib/pool`), m2 = e3(`./lib/utils`), h2 = e3(`./lib/worker`), _2 = e3(`./lib/stepper`), v = e3(r2(324)), y = {}, b = false;
      try {
        typeof navigator < `u` && navigator.userAgent && (b = navigator.userAgent.indexOf(`Safari`) >= 0);
      } catch {
      }
      var x = 1;
      typeof navigator < `u` && (x = Math.min(navigator.hardwareConcurrency || 1, 4));
      var S = { tile: 1024, concurrency: x, features: [`js`, `wasm`, `ww`], idle: 2e3, createCanvas: function(e4, t4) {
        var n3 = document[r2(273)](`canvas`);
        return n3.width = e4, n3.height = t4, n3;
      } }, C = { quality: 3, alpha: false, unsharpAmount: 0, unsharpRadius: 0, unsharpThreshold: 0 }, w = false, T = false, E = false, D = false, O = false;
      function k() {
        return { value: d2(h2), destroy: function() {
          var e4 = g;
          if (this[e4(406)].terminate(), typeof window < `u`) {
            var t4 = window.URL || window.webkitURL || window[e4(379)] || window.msURL;
            t4 && t4.revokeObjectURL && this.value.objectURL && t4.revokeObjectURL(this.value.objectURL);
          }
        } };
      }
      function A(e4) {
        var t4 = r2;
        if (!(this instanceof A)) return new A(e4);
        this[t4(345)] = u2({}, S, e4 || {});
        var n3 = `lk_` + this[t4(345)].concurrency;
        this[t4(362)] = y[n3] || m2[t4(279)](this.options[t4(371)]), y[n3] || (y[n3] = this.__limit), this.features = { js: false, wasm: false, cib: false, ww: false }, this.__workersPool = null, this[t4(329)] = [], this[t4(269)] = null;
      }
      A.prototype.init = function() {
        var t4 = r2, n3 = this;
        if (this.__initPromise) return this.__initPromise;
        if (typeof ImageData < `u` && typeof Uint8ClampedArray < `u`) try {
          new ImageData(new Uint8ClampedArray(400), 10, 10), w = true;
        } catch {
        }
        typeof ImageBitmap < `u` && (ImageBitmap.prototype && ImageBitmap.prototype[t4(338)] ? T = true : this.debug(`ImageBitmap does not support .close(), disabled`));
        var i3 = this.options.features[t4(374)]();
        if (i3[t4(258)](`all`) >= 0 && (i3 = [t4(284), `wasm`, `js`, `ww`]), this.__requested_features = i3, this.__mathlib = new f2(i3), i3.indexOf(`ww`) >= 0 && typeof window < `u` && `Worker` in window) try {
          e3(t4(399))(function() {
          })[t4(390)](), this[t4(299)].ww = true;
          var a3 = `wp_` + JSON.stringify(this.options);
          y[a3] ? this.__workersPool = y[a3] : (this[t4(342)] = new p2(k, this.options.idle), y[a3] = this.__workersPool);
        } catch {
        }
        var o3 = this[t4(269)][t4(382)]().then(function(e4) {
          var r3 = t4;
          u2(n3[r3(299)], e4[r3(299)]);
        }), s3 = T ? m2.cib_support(this.options.createCanvas)[t4(291)](function(e4) {
          var r3 = t4;
          if (n3.features.cib && i3.indexOf(r3(284)) < 0) {
            n3.debug(`createImageBitmap() resize supported, but disabled by config`);
            return;
          }
          i3.indexOf(r3(284)) >= 0 && (n3[r3(299)].cib = e4);
        }) : Promise[t4(393)](false);
        E = m2[t4(267)](this[t4(345)][t4(266)]);
        var c3 = T && w && i3.indexOf(`ww`) !== -1 ? m2.worker_offscreen_canvas_support() : Promise.resolve(false);
        c3 = c3[t4(291)](function(e4) {
          D = e4;
        });
        var l3 = m2.cib_can_use_region().then(function(e4) {
          O = e4;
        });
        return this.__initPromise = Promise.all([o3, s3, c3, l3]).then(function() {
          return n3;
        }), this.__initPromise;
      }, A.prototype.__invokeResize = function(e4, t4) {
        var n3 = this;
        return t4.__mathCache = t4.__mathCache || {}, Promise.resolve().then(function() {
          var r3 = g;
          return n3.features.ww ? new Promise(function(r4, i3) {
            var a3 = g, o3 = n3.__workersPool.acquire();
            t4[a3(370)] && t4.cancelToken.catch(function(e5) {
              return i3(e5);
            }), o3.value.onmessage = function(e5) {
              var t5 = a3;
              o3.release(), e5.data.err ? i3(e5[t5(249)].err) : r4(e5.data);
            };
            var s3 = [];
            e4[a3(316)] && s3.push(e4.src[a3(295)]), e4[a3(281)] && s3[a3(395)](e4.srcBitmap), o3.value.postMessage({ opts: e4, features: n3[a3(329)], preload: { wasm_nodule: n3.__mathlib.__ } }, s3);
          }) : { data: n3[r3(269)].resizeAndUnsharp(e4, t4.__mathCache) };
        });
      }, A.prototype.__extractTileData = function(e4, t4, n3, i3, a3) {
        var o3 = r2;
        if (this.features.ww && D && (m2.isCanvas(t4) || O)) return this[o3(317)](`Create tile for OffscreenCanvas`), createImageBitmap(i3.srcImageBitmap || t4, e4.x, e4.y, e4.width, e4.height).then(function(e5) {
          return a3.srcBitmap = e5, a3;
        });
        if (m2.isCanvas(t4)) return i3[o3(373)] || (i3.srcCtx = t4.getContext(`2d`, { alpha: !!n3[o3(314)] })), this.debug(`Get tile pixel data`), a3.src = i3[o3(373)].getImageData(e4.x, e4.y, e4.width, e4[o3(286)])[o3(249)], a3;
        this[o3(317)](`Draw tile imageBitmap/image to temporary canvas`);
        var s3 = this[o3(345)].createCanvas(e4.width, e4[o3(286)]), c3 = s3.getContext(`2d`, { alpha: !!n3[o3(314)] });
        return c3.globalCompositeOperation = `copy`, c3.drawImage(i3.srcImageBitmap || t4, e4.x, e4.y, e4[o3(263)], e4.height, 0, 0, e4.width, e4[o3(286)]), this.debug(`Get tile pixel data`), a3.src = c3.getImageData(0, 0, e4.width, e4.height).data, s3.width = s3.height = 0, a3;
      }, A.prototype[r2(327)] = function(e4, t4, n3) {
        var i3 = r2, a3;
        if (this[i3(317)](`Convert raw rgba tile result to ImageData`), t4.bitmap) return n3.toCtx.drawImage(t4.bitmap, e4.toX, e4.toY), null;
        if (w) a3 = new ImageData(new Uint8ClampedArray(t4.data), e4.toWidth, e4.toHeight);
        else if (a3 = n3.toCtx.createImageData(e4[i3(394)], e4.toHeight), a3[i3(249)].set) a3[i3(249)].set(t4.data);
        else for (var o3 = a3.data.length - 1; o3 >= 0; o3--) a3.data[o3] = t4[i3(249)][o3];
        return this[i3(317)](`Draw tile`), b ? n3.toCtx.putImageData(a3, e4.toX, e4[i3(285)], e4.toInnerX - e4.toX, e4.toInnerY - e4.toY, e4.toInnerWidth + 1e-5, e4.toInnerHeight + 1e-5) : n3[i3(283)].putImageData(a3, e4.toX, e4.toY, e4.toInnerX - e4.toX, e4[i3(384)] - e4.toY, e4.toInnerWidth, e4.toInnerHeight), null;
      }, A.prototype[r2(244)] = function(e4, t4, n3) {
        var r3 = this, i3 = { srcCtx: null, srcImageBitmap: null, isImageBitmapReused: false, toCtx: null }, a3 = function(t5) {
          return r3.__limit(function() {
            var a4 = g;
            if (n3.canceled) return n3[a4(370)];
            var o3 = { width: t5.width, height: t5[a4(286)], toWidth: t5.toWidth, toHeight: t5[a4(241)], scaleX: t5[a4(257)], scaleY: t5.scaleY, offsetX: t5.offsetX, offsetY: t5.offsetY, quality: n3.quality, alpha: n3.alpha, unsharpAmount: n3.unsharpAmount, unsharpRadius: n3.unsharpRadius, unsharpThreshold: n3.unsharpThreshold };
            return r3.debug(a4(259)), Promise[a4(393)](o3).then(function(o4) {
              return r3[a4(332)](t5, e4, n3, i3, o4);
            }).then(function(e5) {
              return r3.debug(`Invoke resize math`), r3.__invokeResize(e5, n3);
            }).then(function(e5) {
              return n3.canceled ? n3.cancelToken : (i3.srcImageData = null, r3.__landTileData(t5, e5, i3));
            });
          });
        };
        return Promise.resolve().then(function() {
          var a4 = g;
          if (i3[a4(283)] = t4.getContext(`2d`, { alpha: !!n3.alpha }), m2.isCanvas(e4)) return null;
          if (m2.isImageBitmap(e4)) return i3.srcImageBitmap = e4, i3.isImageBitmapReused = true, null;
          if (m2.isImage(e4)) return T ? (r3.debug(`Decode image via createImageBitmap`), createImageBitmap(e4).then(function(e5) {
            i3.srcImageBitmap = e5;
          })[a4(351)](function(e5) {
            return null;
          })) : null;
          throw Error(`Pica: ".from" should be Image, Canvas or ImageBitmap`);
        }).then(function() {
          var e5 = g;
          if (n3.canceled) return n3.cancelToken;
          r3.debug(e5(310));
          var o3 = v({ width: n3[e5(263)], height: n3.height, srcTileSize: r3.options[e5(400)], toWidth: n3.toWidth, toHeight: n3.toHeight, destTileBorder: n3.__destTileBorder }).map(function(e6) {
            return a3(e6);
          });
          function s3(t5) {
            var n4 = e5;
            t5.srcImageBitmap && (t5.srcImageBitmap = (t5.isImageBitmapReused || t5.srcImageBitmap[n4(338)](), null));
          }
          return r3.debug(`Process tiles`), Promise[e5(261)](o3).then(function() {
            var n4 = e5;
            return r3.debug(n4(372)), s3(i3), t4;
          }, function(e6) {
            throw s3(i3), e6;
          });
        });
      }, A.prototype.__processStages = function(e4, t4, n3, a3) {
        var o3 = r2, s3 = this;
        if (a3[o3(348)]) return a3.cancelToken;
        var c3 = i2(e4.shift(), 2), l3 = c3[0], d3 = c3[1], f3 = e4.length === 0;
        a3 = u2({}, a3, { toWidth: l3, toHeight: d3, quality: f3 ? a3.quality : Math.min(1, a3.quality) });
        var p3;
        return f3 || (p3 = this.options[o3(266)](l3, d3)), this.__tileAndResize(t4, f3 ? n3 : p3, a3)[o3(291)](function() {
          var t5 = o3;
          return f3 ? n3 : (a3[t5(263)] = l3, a3.height = d3, s3.__processStages(e4, p3, n3, a3));
        }).then(function(e5) {
          return p3 && (p3.width = p3.height = 0), e5;
        });
      }, A.prototype.__resizeViaCreateImageBitmap = function(e4, t4, n3) {
        var i3 = r2, a3 = this, o3 = t4.getContext(`2d`, { alpha: !!n3.alpha });
        return this.debug(`Resize via createImageBitmap()`), createImageBitmap(e4, { resizeWidth: n3[i3(394)], resizeHeight: n3.toHeight, resizeQuality: m2.cib_quality_name(n3.quality) })[i3(291)](function(e5) {
          var r3 = i3;
          if (n3.canceled) return n3.cancelToken;
          if (!n3.unsharpAmount) return o3.drawImage(e5, 0, 0), e5[r3(338)](), o3 = null, a3.debug(r3(372)), t4;
          a3.debug(`Unsharp result`);
          var s3 = a3.options.createCanvas(n3.toWidth, n3[r3(241)]), c3 = s3.getContext(`2d`, { alpha: !!n3.alpha });
          c3.drawImage(e5, 0, 0), e5.close();
          var l3 = c3.getImageData(0, 0, n3.toWidth, n3.toHeight);
          return a3[r3(269)].unsharp_mask(l3.data, n3.toWidth, n3.toHeight, n3.unsharpAmount, n3[r3(352)], n3.unsharpThreshold), o3.putImageData(l3, 0, 0), s3.width = s3.height = 0, l3 = c3 = s3 = o3 = null, a3.debug(`Finished!`), t4;
        });
      }, A.prototype.resize = function(e4, t4, n3) {
        var i3 = r2, a3 = this;
        this.debug(`Start resize...`);
        var o3 = u2({}, C);
        return isNaN(n3) ? n3 && (o3 = u2(o3, n3)) : o3 = u2(o3, { quality: n3 }), o3.toWidth = t4.width, o3.toHeight = t4.height, o3.width = e4.naturalWidth || e4.width, o3.height = e4.naturalHeight || e4[i3(286)], t4.width === 0 || t4[i3(286)] === 0 ? Promise.reject(Error(i3(270) + t4[i3(263)] + `x` + t4.height)) : (o3.unsharpRadius > 2 && (o3.unsharpRadius = 2), o3.canceled = false, o3.cancelToken && (o3.cancelToken = o3.cancelToken.then(function(e5) {
          var t5 = i3;
          throw o3[t5(348)] = true, e5;
        }, function(e5) {
          throw o3.canceled = true, e5;
        })), o3.__destTileBorder = Math.ceil(Math[i3(272)](3, 2.5 * o3.unsharpRadius | 0)), this.init().then(function() {
          var n4 = i3;
          if (o3[n4(348)]) return o3.cancelToken;
          if (a3.features.cib) return a3.__resizeViaCreateImageBitmap(e4, t4, o3);
          if (!E) {
            var r3 = Error(n4(359));
            throw r3[n4(333)] = `ERR_GET_IMAGE_DATA`, r3;
          }
          var s3 = _2(o3.width, o3.height, o3.toWidth, o3.toHeight, a3.options.tile, o3.__destTileBorder);
          return a3.__processStages(s3, e4, t4, o3);
        }));
      }, A[r2(376)].resizeBuffer = function(e4) {
        var t4 = this, n3 = u2({}, C, e4);
        return this.init().then(function() {
          return t4.__mathlib.resizeAndUnsharp(n3);
        });
      }, A.prototype.toBlob = function(e4, t4, n3) {
        return t4 || (t4 = `image/png`), new Promise(function(r3) {
          var i3 = g;
          if (e4.toBlob) {
            e4.toBlob(function(e5) {
              return r3(e5);
            }, t4, n3);
            return;
          }
          if (e4.convertToBlob) {
            r3(e4.convertToBlob({ type: t4, quality: n3 }));
            return;
          }
          for (var a3 = atob(e4.toDataURL(t4, n3)[i3(282)](`,`)[1]), o3 = a3.length, s3 = new Uint8Array(o3), c3 = 0; c3 < o3; c3++) s3[c3] = a3[i3(251)](c3);
          r3(new Blob([s3], { type: t4 }));
        });
      }, A.prototype.debug = function() {
      }, t3.exports = A;
    }, { "./lib/mathlib": 1, "./lib/pool": 13, "./lib/stepper": 14, "./lib/tiler": 15, "./lib/utils": 16, "./lib/worker": 17, "object-assign": 23, webworkify: 24 }] }, {}, [])(`/index.js`);
  });
}), c = a(function(e2) {
  var t2 = g;
  function n2(e3, t3) {
    var n3 = Error(e3);
    return n3.code = t3, n3;
  }
  function r2(e3) {
    for (var t3 = e3.toString(16).toUpperCase(), n3 = 2 - t3.length; n3 > 0; n3--) t3 = `0` + t3;
    return `0x` + t3;
  }
  function i2(e3) {
    try {
      return unescape(encodeURIComponent(e3));
    } catch {
      return e3;
    }
  }
  function a2(e3) {
    try {
      return decodeURIComponent(escape(e3));
    } catch {
      return e3;
    }
  }
  function o2(e3) {
    return Object.prototype[g(255)].call(e3) === `[object Uint8Array]`;
  }
  function s2(e3, t3, r3) {
    var i3 = g;
    this[i3(289)] = e3.subarray(t3, r3), this.start = t3;
    var a3 = String[i3(392)].apply(null, this.input.subarray(0, 4));
    if (a3 !== `II*\0` && a3 !== `MM\0*`) throw n2(`invalid TIFF signature`, i3(280));
    this.big_endian = a3[0] === `M`;
  }
  s2.prototype.each = function(e3) {
    var t3 = g;
    this.aborted = false;
    var n3 = this[t3(252)](4);
    for (this.ifds_to_read = [{ id: 0, offset: n3 }]; this[t3(417)][t3(320)] > 0 && !this.aborted; ) {
      var r3 = this.ifds_to_read.shift();
      r3.offset && this[t3(403)](r3.id, r3[t3(312)], e3);
    }
  }, s2.prototype.filter = function(e3) {
    var t3 = g, r3 = {};
    r3[t3(246)] = { id: 0, entries: [] }, this.each(function(n3) {
      var i4 = t3;
      e3(n3) === false && !n3.is_subifd_link || n3.is_subifd_link && n3.count !== 1 && n3[i4(243)] !== 4 || (r3[`ifd` + n3.ifd] || (r3[`ifd` + n3.ifd] = { id: n3.ifd, entries: [] }), r3[`ifd` + n3.ifd].entries.push(n3));
    }), delete r3[t3(387)];
    var i3 = 8;
    Object[t3(331)](r3).forEach(function(e4) {
      i3 += 2, r3[e4].entries.forEach(function(e5) {
        i3 += 12 + (e5.data_length > 4 ? Math.ceil(e5.data_length / 2) * 2 : 0);
      }), i3 += 4;
    }), this.output = new Uint8Array(i3), this.output[0] = this.output[1] = (this.big_endian ? `M` : `I`).charCodeAt(0), this.write_uint16(2, 42);
    var a3 = 8, o3 = this;
    if (this.write_uint32(4, a3), Object[t3(331)](r3)[t3(412)](function(e4) {
      var n3 = t3;
      r3[e4].written_offset = a3;
      var i4 = a3, s3 = i4 + 2 + r3[e4].entries.length * 12 + 4;
      a3 = s3, o3.write_uint16(i4, r3[e4].entries.length), r3[e4][n3(366)].sort(function(e5, t4) {
        return e5.tag - t4.tag;
      }).forEach(function(e5, t4) {
        var s4 = n3, c3 = i4 + 2 + t4 * 12;
        o3[s4(245)](c3, e5.tag), o3.write_uint16(c3 + 2, e5[s4(243)]), o3.write_uint32(c3 + 4, e5.count), e5.is_subifd_link ? r3[`ifd` + e5[s4(414)]] && (r3[`ifd` + e5.tag].link_offset = c3 + 8) : e5[s4(309)] <= 4 ? o3[s4(271)].set(o3.input.subarray(e5.data_offset - o3[s4(396)], e5.data_offset - o3[s4(396)] + 4), c3 + 8) : (o3.write_uint32(c3 + 8, a3), o3.output.set(o3.input.subarray(e5.data_offset - o3[s4(396)], e5.data_offset - o3.start + e5.data_length), a3), a3 += Math.ceil(e5.data_length / 2) * 2);
      });
      var c2 = r3[`ifd` + (r3[e4].id + 1)];
      c2 && (c2.link_offset = s3 - 4);
    }), Object.keys(r3).forEach(function(e4) {
      r3[e4].written_offset && r3[e4].link_offset && o3.write_uint32(r3[e4].link_offset, r3[e4].written_offset);
    }), this[t3(271)][t3(320)] !== a3) throw n2(`internal error: incorrect buffer size allocated`);
    return this.output;
  }, s2.prototype.read_uint16 = function(e3) {
    var t3 = g, r3 = this.input;
    if (e3 + 2 > r3[t3(320)]) throw n2(`unexpected EOF`, `EBADDATA`);
    return this[t3(398)] ? r3[e3] * 256 + r3[e3 + 1] : r3[e3] + r3[e3 + 1] * 256;
  }, s2[t2(376)].read_uint32 = function(e3) {
    var t3 = this.input;
    if (e3 + 4 > t3.length) throw n2(`unexpected EOF`, `EBADDATA`);
    return this.big_endian ? t3[e3] * 16777216 + t3[e3 + 1] * 65536 + t3[e3 + 2] * 256 + t3[e3 + 3] : t3[e3] + t3[e3 + 1] * 256 + t3[e3 + 2] * 65536 + t3[e3 + 3] * 16777216;
  }, s2.prototype.write_uint16 = function(e3, t3) {
    var n3 = this.output;
    this.big_endian ? (n3[e3] = t3 >>> 8 & 255, n3[e3 + 1] = t3 & 255) : (n3[e3] = t3 & 255, n3[e3 + 1] = t3 >>> 8 & 255);
  }, s2.prototype.write_uint32 = function(e3, t3) {
    var n3 = this.output;
    this.big_endian ? (n3[e3] = t3 >>> 24 & 255, n3[e3 + 1] = t3 >>> 16 & 255, n3[e3 + 2] = t3 >>> 8 & 255, n3[e3 + 3] = t3 & 255) : (n3[e3] = t3 & 255, n3[e3 + 1] = t3 >>> 8 & 255, n3[e3 + 2] = t3 >>> 16 & 255, n3[e3 + 3] = t3 >>> 24 & 255);
  }, s2.prototype.is_subifd_link = function(e3, t3) {
    return e3 === 0 && t3 === 34665 || e3 === 0 && t3 === 34853 || e3 === 34665 && t3 === 40965;
  }, s2[t2(376)].exif_format_length = function(e3) {
    switch (e3) {
      case 1:
      case 2:
      case 6:
      case 7:
        return 1;
      case 3:
      case 8:
        return 2;
      case 4:
      case 9:
      case 11:
        return 4;
      case 5:
      case 10:
      case 12:
        return 8;
      default:
        return 0;
    }
  }, s2.prototype.exif_format_read = function(e3, n3) {
    var r3 = t2, i3;
    switch (e3) {
      case 1:
      case 2:
        return i3 = this.input[n3], i3;
      case 6:
        return i3 = this.input[n3], i3 | (i3 & 128) * 33554430;
      case 3:
        return i3 = this[r3(336)](n3), i3;
      case 8:
        return i3 = this[r3(336)](n3), i3 | (i3 & 32768) * 131070;
      case 4:
        return i3 = this[r3(252)](n3), i3;
      case 9:
        return i3 = this.read_uint32(n3), i3 | 0;
      case 5:
      case 10:
      case 11:
      case 12:
        return null;
      case 7:
        return null;
      default:
        return null;
    }
  }, s2.prototype.scan_ifd = function(e3, r3, i3) {
    var o3 = t2, s3 = this.read_uint16(r3);
    r3 += 2;
    for (var c2 = 0; c2 < s3; c2++) {
      var l2 = this.read_uint16(r3), u2 = this.read_uint16(r3 + 2), d2 = this.read_uint32(r3 + 4), f2 = this.exif_format_length(u2), p2 = d2 * f2, m2 = p2 <= 4 ? r3 + 8 : this.read_uint32(r3 + 8), h2 = false;
      if (m2 + p2 > this.input.length) throw n2(`unexpected EOF`, `EBADDATA`);
      for (var g2 = [], _2 = m2, v = 0; v < d2; v++, _2 += f2) {
        var y = this.exif_format_read(u2, _2);
        if (y === null) {
          g2 = null;
          break;
        }
        g2.push(y);
      }
      if (Array.isArray(g2) && u2 === 2) {
        try {
          g2 = a2(String[o3(392)].apply(null, g2));
        } catch {
          g2 = null;
        }
        g2 && g2[g2.length - 1] === `\0` && (g2 = g2.slice(0, -1));
      }
      if (this.is_subifd_link(e3, l2) && Array.isArray(g2) && Number.isInteger(g2[0]) && g2[0] > 0 && (this.ifds_to_read.push({ id: l2, offset: g2[0] }), h2 = true), i3({ is_big_endian: this[o3(398)], ifd: e3, tag: l2, format: u2, count: d2, entry_offset: r3 + this[o3(396)], data_length: p2, data_offset: m2 + this.start, value: g2, is_subifd_link: h2 }) === false) {
        this.aborted = true;
        return;
      }
      r3 += 12;
    }
    e3 === 0 && this.ifds_to_read.push({ id: 1, offset: this.read_uint32(r3) });
  }, e2.exports.is_jpeg = function(e3) {
    return e3.length >= 4 && e3[0] === 255 && e3[1] === 216 && e3[2] === 255;
  }, e2[t2(274)][t2(262)] = function(i3, a3) {
    var s3 = t2;
    if (!o2(i3)) throw n2(`Invalid argument (jpeg_bin), Uint8Array expected`, `EINVAL`);
    if (typeof a3 != s3(363)) throw n2(`Invalid argument (on_segment), Function expected`, `EINVAL`);
    if (!e2.exports.is_jpeg(i3)) throw n2(`Unknown file format`, s3(239));
    for (var c2 = 0, l2 = i3[s3(320)], u2 = false; ; ) {
      var d2, f2;
      if (c2 + 1 >= l2) throw n2(`Unexpected EOF`, `EBADDATA`);
      var p2 = i3[c2], m2 = i3[c2 + 1];
      if (p2 === 255 && m2 === 255) d2 = 255, f2 = 1;
      else if (p2 === 255 && m2 !== 0) {
        if (d2 = m2, f2 = 2, !(208 <= d2 && d2 <= 217 || d2 === 1)) {
          if (c2 + 3 >= l2) throw n2(`Unexpected EOF`, s3(280));
          if (f2 += i3[c2 + 2] * 256 + i3[c2 + 3], f2 < 2) throw n2(`Invalid segment length`, `EBADDATA`);
          if (c2 + f2 - 1 >= l2) throw n2(`Unexpected EOF`, `EBADDATA`);
        }
        u2 && (d2 >= 208 && d2 <= 215 || (u2 = false)), d2 === 218 && (u2 = true);
      } else if (u2) for (var h2 = c2 + 1; ; h2++) {
        if (h2 >= l2) throw n2(`Unexpected EOF`, `EBADDATA`);
        if (i3[h2] === 255) {
          if (h2 + 1 >= l2) throw n2(`Unexpected EOF`, s3(280));
          if (i3[h2 + 1] !== 0) {
            d2 = 0, f2 = h2 - c2;
            break;
          }
        }
      }
      else throw n2(`Unexpected byte at segment start: ` + r2(p2) + ` (offset ` + r2(c2) + `)`, `EBADDATA`);
      if (a3({ code: d2, offset: c2, length: f2 }) === false || d2 === 217) break;
      c2 += f2;
    }
  }, e2.exports[t2(294)] = function(r3, i3) {
    var a3 = t2;
    if (!o2(r3)) throw n2(a3(268), `EINVAL`);
    if (typeof i3 != `function`) throw n2(a3(415), a3(358));
    var s3 = [], c2 = 0;
    e2.exports.jpeg_segments_each(r3, function(e3) {
      var t3 = a3, n3 = i3(e3);
      if (o2(n3)) s3[t3(395)]({ data: n3 }), c2 += n3.length;
      else if (Array.isArray(n3)) n3.filter(o2).forEach(function(e4) {
        s3.push({ data: e4 }), c2 += e4.length;
      });
      else if (n3 !== false) {
        var r4 = { start: e3.offset, end: e3.offset + e3.length };
        s3.length > 0 && s3[s3[t3(320)] - 1].end === r4.start ? s3[s3.length - 1].end = r4.end : s3.push(r4), c2 += e3.length;
      }
    });
    var l2 = new Uint8Array(c2), u2 = 0;
    return s3.forEach(function(e3) {
      var t3 = a3, n3 = e3[t3(249)] || r3[t3(323)](e3.start, e3.end);
      l2[t3(300)](n3, u2), u2 += n3.length;
    }), l2;
  }, e2[t2(274)][t2(353)] = function(t3, r3) {
    if (!o2(t3)) throw n2(`Invalid argument (jpeg_bin), Uint8Array expected`, `EINVAL`);
    if (typeof r3 != `function`) throw n2(`Invalid argument (on_exif_entry), Function expected`, `EINVAL`);
    e2.exports.jpeg_segments_each(t3, function(e3) {
      var n3 = g;
      if (e3[n3(333)] === 218) return false;
      if (e3.code === 225 && e3.length >= 10 && t3[e3.offset + 4] === 69 && t3[e3.offset + 5] === 120 && t3[e3.offset + 6] === 105 && t3[e3.offset + 7] === 102 && t3[e3[n3(312)] + 8] === 0 && t3[e3.offset + 9] === 0) return new s2(t3, e3.offset + 10, e3[n3(312)] + e3.length).each(r3), false;
    });
  }, e2[t2(274)].jpeg_exif_tags_filter = function(t3, r3) {
    if (!o2(t3)) throw n2(`Invalid argument (jpeg_bin), Uint8Array expected`, `EINVAL`);
    if (typeof r3 != `function`) throw n2(`Invalid argument (on_exif_entry), Function expected`, `EINVAL`);
    var i3 = false;
    return e2.exports.jpeg_segments_filter(t3, function(e3) {
      var n3 = g;
      if (!i3 && (e3.code === 218 && (i3 = true), e3[n3(333)] === 225 && e3.length >= 10 && t3[e3[n3(312)] + 4] === 69 && t3[e3.offset + 5] === 120 && t3[e3[n3(312)] + 6] === 105 && t3[e3.offset + 7] === 102 && t3[e3.offset + 8] === 0 && t3[e3.offset + 9] === 0)) {
        var a3 = new s2(t3, e3.offset + 10, e3.offset + e3.length)[n3(383)](r3);
        if (!a3) return false;
        var o3 = new Uint8Array(10);
        return o3.set(t3.slice(e3.offset, e3.offset + 10)), o3[2] = a3[n3(320)] + 8 >>> 8 & 255, o3[3] = a3.length + 8 & 255, i3 = true, [o3, a3];
      }
    });
  }, e2.exports.jpeg_add_comment = function(t3, n3) {
    var r3 = false, a3 = 0;
    return e2.exports.jpeg_segments_filter(t3, function(e3) {
      var o3 = g;
      if (a3++, !(a3 === 1 && e3.code === 216) && !(a3 === 2 && e3.code === 224) && !r3) {
        n3 = i2(n3);
        var s3 = new Uint8Array(5 + n3.length), c2 = 0;
        return s3[c2++] = 255, s3[c2++] = 254, s3[c2++] = n3.length + 3 >>> 8 & 255, s3[c2++] = n3.length + 3 & 255, n3.split(``)[o3(412)](function(e4) {
          var t4 = o3;
          s3[c2++] = e4[t4(251)](0) & 255;
        }), s3[c2++] = 0, r3 = true, [s3, t3.subarray(e3[o3(312)], e3[o3(312)] + e3.length)];
      }
    });
  };
});
function l(e2) {
  return this._getUint8Array(e2.blob).then(function(t2) {
    var n2 = g;
    if (e2.is_jpeg = c.is_jpeg(t2), !e2[n2(404)]) return Promise.resolve(e2);
    e2.orig_blob = e2.blob;
    try {
      var r2, i2;
      if (c.jpeg_exif_tags_each(t2, function(t3) {
        if (t3[n2(248)] === 0 && t3.tag === 274 && Array.isArray(t3.value)) return e2.orientation = t3.value[0] || 1, r2 = t3.is_big_endian, i2 = t3.data_offset, false;
      }), i2) {
        var a2 = r2 ? new Uint8Array([0, 1]) : new Uint8Array([1, 0]);
        e2.blob = new Blob([t2.slice(0, i2), a2, t2[n2(374)](i2 + 2)], { type: `image/jpeg` });
      }
    } catch {
    }
    return e2;
  });
}
function u() {
  var e2 = [`from`, `length`, `Memory`, `_cleanup`, `subarray`, `./lib/tiler`, `pow`, `__memory`, `__landTileData`, `compile`, `__requested_features`, `wasm`, `keys`, `__extractTileData`, `code`, `53224noQSrw`, `_transform`, `read_uint16`, `save`, `close`, `./convolve_wasm_base64`, `low`, `getContext`, `__workersPool`, `image_url`, `_convolveHV`, `options`, `3070oqZmFh`, `);(f.default ? f.default : f)(self);}`, `canceled`, `wasm_src`, `./mm_unsharp_mask`, `catch`, `unsharpRadius`, `jpeg_exif_tags_each`, `Instance`, `image`, `orientation`, `dest`, `EINVAL`, `Pica: cannot use getImageData on canvas, make sure fingerprinting protection isn't enabled`, `acquired`, `bare`, `__limit`, `function`, `name`, `createObjectURL`, `entries`, `224kSXDtU`, `pica`, `Invalid argument "fn", function expected`, `cancelToken`, `concurrency`, `Finished!`, `srcCtx`, `slice`, `abs`, `prototype`, `./resize_filter_info`, `35GgMmIa`, `mozURL`, `67476wSOKhu`, `__align`, `init`, `filter`, `toInnerY`, `byteLength`, `[object ImageBitmap]`, `ifd1`, `blob`, `_blob_to_image`, `terminate`, `resizeAndUnsharp`, `fromCharCode`, `resolve`, `toWidth`, `push`, `start`, `quality`, `big_endian`, `webworkify`, `tile`, `pick_pica_resize_options`, `2199042qlkerx`, `scan_ifd`, `is_jpeg`, `assign`, `value`, `scale_factor`, `now`, `super_`, `__wasm`, `data:text/javascript;base64,`, `forEach`, `release`, `tag`, `Invalid argument (on_segment), Function expected`, `336NVWeUV`, `ifds_to_read`, `ENOTJPEG`, `grow`, `toHeight`, `restore`, `format`, `__tileAndResize`, `write_uint16`, `ifd0`, `opts`, `ifd`, `data`, `blurMono16`, `charCodeAt`, `read_uint32`, `hasOwnProperty`, `__base64decode`, `toString`, `destTileBorder`, `scaleX`, `indexOf`, `Invoke resize math`, `Module`, `all`, `jpeg_segments_each`, `width`, `srcTileSize`, `round`, `createCanvas`, `can_use_canvas`, `Invalid argument (jpeg_bin), Uint8Array expected`, `__mathlib`, `Invalid output size: `, `output`, `max`, `createElement`, `exports`, `1502400OuXIaa`, `__modules`, `replace`, `unsharpAmount`, `limiter`, `EBADDATA`, `srcBitmap`, `split`, `toCtx`, `cib`, `toY`, `height`, `offsetX`, `out_canvas`, `input`, `transform`, `then`, `timeoutId`, `__cache`, `jpeg_segments_filter`, `buffer`, `random`, `__reallocate`, `67876zZPcSa`, `features`, `set`, `resize`, `Cannot find module '`, `./convolve`, `before`, `initialized`, `create`, `objectURL`, `constructor`, `data_length`, `Calculate tiles`, `exp`, `offset`, `_unsharp`, `alpha`, `abort`, `src`, `debug`, `4966370Uqtrkp`];
  return u = function() {
    return e2;
  }, u();
}
function d(e2) {
  var t2 = g;
  if (!e2.is_jpeg) return Promise.resolve(e2);
  var n2 = e2[t2(356)] - 1;
  if (!n2) return Promise.resolve(e2);
  var r2 = n2 & 4 ? this.pica.options.createCanvas(e2.out_canvas.height, e2.out_canvas.width) : this[t2(368)][t2(345)].createCanvas(e2.out_canvas[t2(263)], e2[t2(288)].height), i2 = r2.getContext(`2d`);
  return i2[t2(337)](), n2 & 1 && i2.transform(-1, 0, 0, 1, r2[t2(263)], 0), n2 & 2 && i2.transform(-1, 0, 0, -1, r2.width, r2.height), n2 & 4 && i2[t2(290)](0, 1, 1, 0, 0, 0), i2.drawImage(e2[t2(288)], 0, 0), i2[t2(242)](), e2.out_canvas.width = e2.out_canvas.height = 0, e2.out_canvas = r2, Promise.resolve(e2);
}
function f(e2) {
  var t2 = g;
  return e2.is_jpeg ? Promise.all([this._getUint8Array(e2.blob), this._getUint8Array(e2.out_blob)])[t2(291)](function(n2) {
    var r2 = t2, i2 = n2[0], a2 = n2[1];
    if (!c.is_jpeg(i2)) return Promise.resolve(e2);
    var o2 = [];
    return c.jpeg_segments_each(i2, function(e3) {
      if (e3.code === 218) return false;
      o2.push(e3);
    }), o2 = o2[r2(383)](function(e3) {
      var t3 = r2;
      return e3.code === 226 ? false : e3[t3(333)] >= 224 && e3.code < 240 || e3[t3(333)] === 254;
    }).map(function(e3) {
      var t3 = r2;
      return i2.slice(e3[t3(312)], e3.offset + e3.length);
    }), e2.out_blob = new Blob([a2.slice(0, 2)].concat(o2, [a2.slice(20)]), { type: `image/jpeg` }), e2;
  }) : Promise.resolve(e2);
}
function p(e2) {
  var t2 = g;
  e2.before(t2(389), l), e2.after(`_transform`, d), e2.after(`_create_blob`, f);
}
var m = { jpeg_patch_exif: l, jpeg_rotate_canvas: d, jpeg_attach_orig_segments: f, assign: p };
function h(e2) {
  var t2 = g;
  if (!(this instanceof h)) return new h(e2);
  e2 || (e2 = {}), this.pica = e2.pica || s({}), this[t2(305)] = false, this.utils = i;
}
h.prototype.use = function(e2) {
  var t2 = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e2.apply(e2, t2), this;
}, h.prototype[e(382)] = function() {
  this.use(m.assign);
}, h.prototype.toBlob = function(t2, n2) {
  var r2 = e, a2 = { blob: t2, opts: i.assign({ max: 1 / 0 }, n2) };
  return this.initialized || (this.initialized = (this.init(), true)), Promise.resolve(a2).then(this._blob_to_image).then(this._calculate_size).then(this[r2(335)])[r2(291)](this._cleanup)[r2(291)](this._create_blob).then(function(e2) {
    var t3 = r2;
    return e2.out_canvas[t3(263)] = e2.out_canvas.height = 0, e2.out_blob;
  });
}, h.prototype.toCanvas = function(t2, n2) {
  var r2 = e, a2 = { blob: t2, opts: i[r2(405)]({ max: 1 / 0 }, n2) };
  return this.initialized || (this.initialized = (this[r2(382)](), true)), Promise.resolve(a2).then(this[r2(389)]).then(this._calculate_size).then(this._transform).then(this[r2(322)]).then(function(e2) {
    return e2.out_canvas;
  });
}, h.prototype[e(304)] = function(t2, n2) {
  var r2 = e;
  if (!this[t2]) throw Error(`Method "` + t2 + `" does not exist`);
  if (typeof n2 != `function`) throw Error(r2(369));
  var i2 = this[t2], a2 = this;
  return this[t2] = function(e2) {
    return n2.call(a2, e2).then(function(e3) {
      return i2.call(a2, e3);
    });
  }, this;
}, h.prototype.after = function(t2, n2) {
  var r2 = e;
  if (!this[t2]) throw Error(`Method "` + t2 + `" does not exist`);
  if (typeof n2 != `function`) throw Error(r2(369));
  var i2 = this[t2], a2 = this;
  return this[t2] = function(e2) {
    var t3 = r2;
    return i2.call(a2, e2)[t3(291)](function(e3) {
      return n2.call(a2, e3);
    });
  }, this;
}, h.prototype._blob_to_image = function(t2) {
  var n2 = e, r2 = window.URL || window.webkitURL || window[n2(379)] || window.msURL;
  return t2.image = document.createElement(`img`), t2.image_url = r2[n2(365)](t2[n2(388)]), t2.image.src = t2[n2(343)], new Promise(function(e2, n3) {
    t2.image.onerror = function() {
      n3(Error(`ImageBlobReduce: failed to create Image() from blob`));
    }, t2.image.onload = function() {
      e2(t2);
    };
  });
}, h.prototype._calculate_size = function(t2) {
  var n2 = e, r2 = t2.opts.max / Math.max(t2.image.width, t2.image.height);
  return r2 > 1 && (r2 = 1), t2.transform_width = Math[n2(272)](Math[n2(265)](t2[n2(355)].width * r2), 1), t2.transform_height = Math.max(Math.round(t2.image.height * r2), 1), t2[n2(407)] = r2, Promise.resolve(t2);
}, h.prototype._transform = function(t2) {
  var n2 = e;
  t2[n2(288)] = this.pica.options.createCanvas(t2.transform_width, t2.transform_height), t2.transform_width = null, t2.transform_height = null;
  var r2 = { alpha: t2.blob.type === `image/png` };
  return this.utils.assign(r2, this.utils[n2(401)](t2[n2(247)])), this.pica[n2(301)](t2.image, t2.out_canvas, r2).then(function() {
    return t2;
  });
}, h.prototype[e(322)] = function(t2) {
  var n2 = e;
  t2[n2(355)].src = ``, t2.image = null;
  var r2 = window.URL || window.webkitURL || window.mozURL || window.msURL;
  return r2.revokeObjectURL && r2.revokeObjectURL(t2[n2(343)]), t2.image_url = null, Promise.resolve(t2);
}, h.prototype._create_blob = function(t2) {
  var n2 = e;
  return this.pica.toBlob(t2[n2(288)], t2[n2(388)].type)[n2(291)](function(e2) {
    return t2.out_blob = e2, t2;
  });
}, h.prototype._getUint8Array = function(e2) {
  return e2.arrayBuffer ? e2.arrayBuffer().then(function(e3) {
    return new Uint8Array(e3);
  }) : new Promise(function(t2, n2) {
    var r2 = new FileReader();
    r2.readAsArrayBuffer(e2), r2.onload = function() {
      t2(new Uint8Array(r2.result));
    }, r2.onerror = function() {
      var e3 = g;
      n2(Error(`ImageBlobReduce: failed to load data from input blob`)), r2[e3(315)]();
    }, r2.onabort = function() {
      n2(Error(`ImageBlobReduce: failed to load data from input blob (aborted)`));
    };
  });
}, h.pica = s;
function g(e2, t2) {
  return e2 -= 239, u()[e2];
}
var _ = h;
export {
  _ as default
};
