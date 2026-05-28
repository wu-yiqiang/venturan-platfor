const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","index-IvLr1-5o.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, F as n, G as r, H as i, Q as a, W as o, X as s, c, d as l, et as u, g as d, l as f, m as p, ot as m, q as h } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { g, h as _, m as v, p as y, t as b, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let P;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var x = S;
  function S(e2, t2) {
    return e2 -= 109, C()[e2];
  }
  (function(e2, t2) {
    let n2 = S, r2 = e2();
    for (; ; ) try {
      if (parseInt(n2(149)) / 1 * (parseInt(n2(116)) / 2) + -parseInt(n2(144)) / 3 + parseInt(n2(145)) / 4 + parseInt(n2(141)) / 5 * (parseInt(n2(137)) / 6) + parseInt(n2(130)) / 7 + -parseInt(n2(129)) / 8 + parseInt(n2(113)) / 9 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(C, 376616);
  function C() {
    let e2 = `loading.cropped.span.cad-viewer.1897160wTDhzU.1390977kIjXDV.measure.button.canvas.byteLength.dwg-preview-frame.revokeObjectURL.6wJqmpz.setTool.AutoCAD 2018/2019/2020/2021/2022/2023/2024.setLayerVisible.336865xDuSFw.apply.max.1066581VIlaSa.527284wldjjf.data.DWG \u5185\u5D4C\u9884\u89C8\u56FE.value.20wkDTrh.createElement.round.naturalHeight.onerror.1836927vRBazP.decode.name.36728RrIbuI.\u7F29\u5C0F DWG \u9884\u89C8.div.length.slice.disconnect.img.from.min`.split(`.`);
    return C = function() {
      return e2;
    }, C();
  }
  v(), _();
  let w, T, E, D, O, k, A, j, ee, te, ne, M, N;
  w = {
    class: x(128)
  };
  T = {
    class: `cad-toolbar`
  };
  E = {
    class: `cad-tools`
  };
  D = {
    class: `cad-zoom`
  };
  O = {
    key: 0,
    class: `cad-layers`
  };
  k = [
    `onClick`
  ];
  A = {
    class: `cad-canvas-wrap`
  };
  j = {
    key: 0,
    class: `cad-state`
  };
  ee = {
    key: 1,
    class: `dwg-preview`
  };
  te = {
    class: x(135)
  };
  ne = [
    `src`
  ];
  M = {
    key: 2,
    class: `cad-state error`
  };
  N = 1800;
  P = b(m({
    __name: `CadViewer`,
    props: {
      data: {},
      type: {}
    },
    setup(m2) {
      let _2 = x, v2 = m2, b2 = n(null), C2 = n([]), P2 = n(`pan`), F = n(_2(125)), I = n(``), L = n(``), R = n(``), z = n(1), B = null, V = null, re = new TextDecoder(`utf-8`), H = N * N, U = {
        AC1015: `AutoCAD 2000/2000i/2002`,
        AC1018: `AutoCAD 2004/2005/2006`,
        AC1021: `AutoCAD 2007/2008/2009`,
        AC1024: `AutoCAD 2010/2011/2012`,
        AC1027: `AutoCAD 2013/2014/2015/2016/2017`,
        AC1032: _2(139)
      }, W = (e2) => e2 instanceof Error ? e2.message : typeof e2 == `string` ? e2 : JSON.stringify(e2), G = () => {
        let e2 = _2;
        L.value && (URL[e2(136)](L[e2(148)]), L[e2(148)] = ``);
      }, K = (e2) => Number(Math[_2(124)](4, Math.max(0.35, e2)).toFixed(2)), q = s(() => ({
        width: z.value * 100 + `%`
      })), J = (e2) => {
        z.value = K(z.value + e2);
      }, Y = (e2) => new Promise((t2, n2) => {
        let r2 = _2, i2 = URL.createObjectURL(e2), a2 = new Image();
        a2.onload = () => {
          URL[S(136)](i2), t2(a2);
        }, a2[r2(112)] = () => {
          URL.revokeObjectURL(i2), n2(Error(`DWG \u9884\u89C8\u56FE\u52A0\u8F7D\u5931\u8D25`));
        }, a2.src = i2;
      }), ie = (e2, t2, n2) => {
        let r2 = _2, i2 = [
          0,
          (t2 - 1) * 4,
          (n2 - 1) * t2 * 4,
          ((n2 - 1) * t2 + t2 - 1) * 4
        ], a2 = i2.reduce((t3, n3) => (t3.r += e2[n3], t3.g += e2[n3 + 1], t3.b += e2[n3 + 2], t3.a += e2[n3 + 3], t3), {
          r: 0,
          g: 0,
          b: 0,
          a: 0
        });
        return {
          r: a2.r / i2.length,
          g: a2.g / i2.length,
          b: a2.b / i2[r2(119)],
          a: a2.a / i2.length
        };
      }, ae = (e2, t2, n2) => {
        let r2 = e2[t2] - n2.r, i2 = e2[t2 + 1] - n2.g, a2 = e2[t2 + 2] - n2.b, o2 = e2[t2 + 3] - n2.a;
        return Math.sqrt(r2 * r2 + i2 * i2 + a2 * a2 + o2 * o2);
      }, oe = (e2, t2, n2) => e2[t2 + 3] <= 12 ? false : ae(e2, t2, n2) > 28, se = (function() {
        var e2 = y(function* (e3) {
          let t2 = S, n2 = yield Y(e3), r2 = n2.naturalWidth || n2.width, i2 = n2[t2(111)] || n2.height;
          if (!r2 || !i2) return {
            blob: e3,
            cropped: false
          };
          let a2 = Math.min(1, N / Math[t2(143)](r2, i2), Math.sqrt(H / (r2 * i2))), o2 = Math[t2(143)](1, Math.round(r2 * a2)), s2 = Math.max(1, Math[t2(110)](i2 * a2)), c2 = document[t2(109)](t2(133));
          c2.width = o2, c2.height = s2;
          let l2 = c2.getContext(`2d`, {
            willReadFrequently: true
          });
          if (!l2) return {
            blob: e3,
            cropped: false
          };
          l2.drawImage(n2, 0, 0, o2, s2);
          let u2 = l2.getImageData(0, 0, o2, s2), d2 = ie(u2.data, o2, s2), f2 = o2, p2 = s2, m3 = -1, h2 = -1;
          for (let e4 = 0; e4 < s2; e4 += 1) for (let n3 = 0; n3 < o2; n3 += 1) {
            let r3 = (e4 * o2 + n3) * 4;
            oe(u2[t2(146)], r3, d2) && (f2 = Math.min(f2, n3), p2 = Math.min(p2, e4), m3 = Math.max(m3, n3), h2 = Math.max(h2, e4));
          }
          if (m3 < f2 || h2 < p2) return {
            blob: e3,
            cropped: false
          };
          let g2 = m3 - f2 + 1, _3 = h2 - p2 + 1;
          if (g2 / o2 > 0.94 && _3 / s2 > 0.94) return {
            blob: e3,
            cropped: false
          };
          let v3 = Math.max(8, Math.round(Math.max(g2, _3) * 0.04)), y2 = Math.max(0, Math.floor((f2 - v3) / a2)), b3 = Math.max(0, Math.floor((p2 - v3) / a2)), x2 = Math.min(r2, Math.ceil((m3 + v3 + 1) / a2)), C3 = Math.min(i2, Math.ceil((h2 + v3 + 1) / a2)), w2 = x2 - y2, T2 = C3 - b3;
          if (w2 <= 0 || T2 <= 0) return {
            blob: e3,
            cropped: false
          };
          let E2 = document.createElement(`canvas`);
          E2.width = w2, E2.height = T2;
          let D2 = E2.getContext(`2d`);
          if (!D2) return {
            blob: e3,
            cropped: false
          };
          D2.drawImage(n2, y2, b3, w2, T2, 0, 0, w2, T2);
          let O2 = yield new Promise((e4) => {
            E2.toBlob(e4, `image/png`);
          });
          return {
            blob: O2 || e3,
            cropped: !!O2
          };
        });
        return function(t2) {
          return e2[S(142)](this, arguments);
        };
      })(), X = (e2, t2, n2 = 0) => {
        let r2 = _2;
        for (let i2 = n2; i2 <= e2.length - t2.length; i2 += 1) {
          let n3 = true;
          for (let a2 = 0; a2 < t2[r2(119)]; a2 += 1) if (e2[i2 + a2] !== t2[a2]) {
            n3 = false;
            break;
          }
          if (n3) return i2;
        }
        return -1;
      }, ce = () => {
        let e2 = new Uint8Array(v2.data), t2 = X(e2, [
          137,
          80,
          78,
          71,
          13,
          10,
          26,
          10
        ]);
        if (t2 >= 0) {
          let n3 = X(e2, [
            73,
            69,
            78,
            68,
            174,
            66,
            96,
            130
          ], t2);
          if (n3 > t2) return new Blob([
            e2.slice(t2, n3 + 8)
          ], {
            type: `image/png`
          });
        }
        let n2 = X(e2, [
          255,
          216,
          255
        ]);
        if (n2 >= 0) {
          let t3 = X(e2, [
            255,
            217
          ], n2 + 3);
          if (t3 > n2) return new Blob([
            e2.slice(n2, t3 + 2)
          ], {
            type: `image/jpeg`
          });
        }
        let r2 = X(e2, [
          66,
          77
        ]);
        if (r2 >= 0 && r2 + 6 < e2.length) {
          let t3 = new DataView(v2.data, r2).getUint32(2, true);
          if (t3 > 14 && r2 + t3 <= e2.length) return new Blob([
            e2.slice(r2, r2 + t3)
          ], {
            type: `image/bmp`
          });
        }
        return null;
      }, le = () => {
        let e2 = _2, t2 = new Uint8Array(v2.data.slice(0, 64));
        return Array[e2(123)](t2).map((e3) => e3 >= 32 && e3 <= 126 ? String.fromCharCode(e3) : ` `).join(``).trim();
      }, ue = () => {
        let e2 = _2, t2 = re[e2(114)](v2.data.slice(0, Math.min(v2[e2(146)][e2(134)], 512)));
        return /\bSECTION\b/.test(t2) || /\$ACADVER/.test(t2);
      }, Z = (e2) => {
        let t2 = _2;
        P2.value = e2, B == null ? void 0 : B[t2(138)](e2);
      }, Q = () => {
        if (F.value === `preview`) {
          z.value = 1;
          return;
        }
        B == null ? void 0 : B.resize(), B == null ? void 0 : B.fitToView();
      }, de = (e2) => {
        let t2 = _2, n2 = e2.isOff;
        B == null ? void 0 : B[t2(140)](e2.name, n2), C2.value = C2[t2(148)].map((t3) => t3.name === e2.name ? g(g({}, t3), {}, {
          isOff: !n2
        }) : t3);
      }, $ = (function() {
        var t2 = y(function* () {
          let t3 = S, n2 = b2.value;
          if (n2) {
            F.value = `loading`, I.value = ``, z.value = 1, G();
            try {
              let { CadViewer: r2 } = yield e(() => import("./dist-D-OuzBKQ.js").then(async (m3) => {
                await m3.__tla;
                return m3;
              }), __vite__mapDeps([0,1,2,3]));
              B == null ? void 0 : B.destroy(), B = new r2(n2, {
                theme: `light`,
                initialTool: P2.value,
                worker: false
              }), B.loadArrayBuffer(v2[t3(146)]), yield c(), Q(), C2.value = B.getLayers(), F.value = `ready`;
            } catch (e2) {
              console.error(e2), F.value = `error`, I.value = W(e2) || `CAD \u56FE\u7EB8\u89E3\u6790\u5931\u8D25`;
            }
          }
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), fe = (function() {
        var e2 = y(function* () {
          let e3 = S;
          if (ue()) {
            yield $();
            return;
          }
          F.value = e3(125), I.value = ``, G();
          let t2 = le()[e3(120)](0, 6), n2 = U[t2] ? t2 + `\uFF08` + U[t2] + `\uFF09` : t2 || `\u672A\u77E5 DWG \u7248\u672C`, r2 = ce();
          if (r2) {
            let t3 = yield se(r2);
            L.value = URL.createObjectURL(t3.blob), R.value = `\u5DF2\u4ECE DWG \u4E8C\u8FDB\u5236\u4E2D\u63D0\u53D6\u5185\u5D4C\u9884\u89C8\u56FE\uFF0C\u7248\u672C ` + n2 + `\u3002` + (t3[e3(126)] ? `\u5DF2\u81EA\u52A8\u88C1\u526A\u7A7A\u767D\u8FB9\u8DDD\uFF0C\u4FBF\u4E8E\u67E5\u770B\u6709\u6548\u5185\u5BB9\u3002` : ``) + `\u8FD9\u662F\u6587\u4EF6\u4FDD\u5B58\u65F6\u5199\u5165\u7684\u5FEB\u7167\uFF0C\u4E0D\u7B49\u540C\u4E8E\u5B8C\u6574 CAD \u51E0\u4F55\u89E3\u6790\u3002`, F.value = `preview`;
            return;
          }
          F.value = `error`, I.value = `DWG \u662F\u4E13\u6709\u4E8C\u8FDB\u5236 CAD \u683C\u5F0F\uFF0C\u5F53\u524D Apache-2.0 \u524D\u7AEF\u5305\u672A\u5185\u7F6E GPL \u6216\u95ED\u6E90 DWG \u89E3\u7801\u5668\uFF1B\u6B64\u6587\u4EF6\u4E5F\u6CA1\u6709\u53EF\u63D0\u53D6\u7684\u5185\u5D4C\u9884\u89C8\u56FE\u3002\u8BF7\u5728\u4E1A\u52A1\u4FA7\u8F6C\u6362\u4E3A DXF \u540E\u9884\u89C8\uFF0C\u6216\u63A5\u5165\u79C1\u6709\u670D\u52A1\u7AEF\u8F6C\u6362\u94FE\u8DEF\u3002\u68C0\u6D4B\u5230\u7684\u7248\u672C\u4E3A ` + n2 + `\u3002`;
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })(), pe = (function() {
        var e2 = y(function* () {
          if (v2.type.toLowerCase() === `dwg`) {
            yield fe();
            return;
          }
          yield $();
        });
        return function() {
          return e2[S(142)](this, arguments);
        };
      })();
      return l(() => {
        pe();
        let e2 = b2.value;
        e2 && (V = new ResizeObserver(() => {
          B == null ? void 0 : B.resize(), B == null ? void 0 : B.requestRender();
        }), V.observe(e2));
      }), f(() => {
        V == null ? void 0 : V[_2(121)](), V = null, B == null ? void 0 : B.destroy(), B = null, G();
      }), (e2, n2) => (p(), t(_2(118), w, [
        u(`div`, T, [
          u(`div`, E, [
            u(`button`, {
              type: `button`,
              class: i({
                active: P2.value === `pan`
              }),
              onClick: n2[0] || (n2[0] = (e3) => Z(`pan`))
            }, `\u5E73\u79FB`, 2),
            u(`button`, {
              type: `button`,
              class: i({
                active: P2[_2(148)] === `select`
              }),
              onClick: n2[1] || (n2[1] = (e3) => Z(`select`))
            }, `\u9009\u62E9`, 2),
            u(`button`, {
              type: _2(132),
              class: i({
                active: P2.value === _2(131)
              }),
              onClick: n2[2] || (n2[2] = (e3) => Z(`measure`))
            }, `\u6D4B\u91CF`, 2),
            u(`button`, {
              type: `button`,
              onClick: Q
            }, `\u9002\u914D`),
            F[_2(148)] === `preview` ? (p(), t(h, {
              key: 0
            }, [
              u(`button`, {
                type: `button`,
                title: _2(117),
                onClick: n2[3] || (n2[3] = (e3) => J(-0.15))
              }, `-`),
              u(`span`, D, r(Math.round(z.value * 100)) + `%`, 1),
              u(`button`, {
                type: `button`,
                title: `\u653E\u5927 DWG \u9884\u89C8`,
                onClick: n2[4] || (n2[4] = (e3) => J(0.15))
              }, `+`)
            ], 64)) : a(``, true)
          ]),
          u(_2(127), null, r(m2.type.toUpperCase()), 1)
        ]),
        u(`div`, {
          class: i([
            `cad-body`,
            {
              "without-layers": !C2.value[_2(119)]
            }
          ])
        }, [
          C2.value.length ? (p(), t(`aside`, O, [
            (p(true), t(h, null, d(C2[_2(148)], (e3) => (p(), t(`button`, {
              key: e3.name,
              type: `button`,
              class: i({
                muted: e3.isOff
              }),
              onClick: (t2) => de(e3)
            }, r(e3[_2(115)]), 11, k))), 128))
          ])) : a(``, true),
          u(`div`, A, [
            u(`canvas`, {
              ref_key: `canvas`,
              ref: b2
            }, null, 512),
            F.value === _2(125) ? (p(), t(`div`, j, `\u6B63\u5728\u89E3\u6790 CAD...`)) : F.value === `preview` ? (p(), t(`div`, ee, [
              u(`div`, te, [
                u(_2(122), {
                  src: L.value,
                  alt: _2(147),
                  style: o(q.value)
                }, null, 12, ne)
              ]),
              u(`p`, null, r(R.value), 1)
            ])) : F.value === `error` ? (p(), t(`div`, M, r(I[_2(148)]), 1)) : a(``, true)
          ])
        ], 2)
      ]));
    }
  }), [
    [
      `__scopeId`,
      `data-v-4d603439`
    ]
  ]);
});
export {
  __tla,
  P as default
};
