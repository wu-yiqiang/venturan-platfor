const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["rough.esm-Ct7jHvNv.js","rolldown-runtime-aKtaBQYM.js","chunk-DeXYQlWK.js","prod-BCU1U8Br.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-6U3AYISY-PlP9beZC.js","chunk-K2UTITRG-XrIvWmFy.js","chunk-SRAX5OIU-C6StDhHi.js","objectWithoutProperties-DmTMMCiX.js","chunk-Z3N5DIM6-5a_8xS66.js","index-IvLr1-5o.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, F as n, G as r, Q as i, W as a, X as o, c as s, d as c, et as l, m as u, ot as d } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { g as f, h as p, l as m, m as h, p as g, t as _, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let j;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var v = y;
  (function(e2, t2) {
    let n2 = y, r2 = e2();
    for (; ; ) try {
      if (-parseInt(n2(143)) / 1 + parseInt(n2(161)) / 2 + -parseInt(n2(136)) / 3 * (parseInt(n2(155)) / 4) + parseInt(n2(123)) / 5 * (-parseInt(n2(137)) / 6) + parseInt(n2(121)) / 7 + -parseInt(n2(166)) / 8 + parseInt(n2(162)) / 9 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(b, 390420);
  function y(e2, t2) {
    return e2 -= 114, b()[e2];
  }
  h(), p();
  function b() {
    let e2 = `isArray.#1e1e1e.fontSize.drawing-toolbar.stage.max.setAttribute.script.strokeColor.348783mxKNRl.18UuZnkk.width.value.sin.filter.min.319592KxvGon.transparent.minX.role.GraphViewer.viewBox.right.button.join.ellipse.classList.toUpperCase.12Etefii.map.isDeleted.forEach.backgroundColor.fill.12382ixOyai.9774045PnUBWI.drawing-title.length.official.903288XUZpRe.linearPath.error.div.elements.minY.viewBackgroundColor.abs.dio.files.Helvetica, Arial, sans-serif.loading.type.appendChild.5292007KlGJLc.transform.1127485psFXEd.arrow.round.text`.split(`.`);
    return b = function() {
      return e2;
    }, b();
  }
  let x, S, ee, C, w, T, E, D, O, k, A;
  x = {
    class: `drawing-viewer`
  };
  S = {
    class: v(130)
  };
  ee = {
    class: v(163)
  };
  C = {
    class: `drawing-actions`
  };
  w = {
    class: `drawing-stage`
  };
  T = {
    key: 0,
    class: `drawing-state`
  };
  E = {
    key: 1,
    class: `drawing-state error`
  };
  D = {
    class: `drawing-scroll`
  };
  O = `https://viewer.diagrams.net/js/viewer-static.min.js`;
  k = `http://www.w3.org/2000/svg`;
  A = 6e3;
  j = _(d({
    __name: `DrawingViewer`,
    props: {
      data: {},
      type: {}
    },
    setup(d2) {
      let p2 = v, h2 = d2, _2 = null, b2 = n(`loading`), j2 = n(``), M = n(null), N = n(1), P = o(() => h2[p2(119)].toLowerCase()), F = o(() => P.value === `excalidraw`), I = o(() => P[p2(139)] === p2(115) ? `DRAWIO` : P.value[p2(154)]()), L = o(() => F.value ? {
        transform: `scale(` + N.value + `)`,
        transformOrigin: `top center`
      } : {
        zoom: N.value
      }), R = (e2) => Math[p2(142)](3, Math.max(0.5, Number(e2.toFixed(2)))), z = () => {
        N.value = R(N.value + 0.15);
      }, B = () => {
        N.value = R(N.value - 0.15);
      }, V = () => {
        N.value = 1;
      }, H = () => {
        let e2 = M.value;
        if (e2) for (delete e2.dataset.drawingRendered; e2.firstChild; ) e2.removeChild(e2.firstChild);
      }, U = () => window.GraphViewer ? Promise.resolve() : (_2 || (_2 = new Promise((e2, t2) => {
        let n2 = p2, r2 = document.querySelector(`script[src="` + O + `"]`);
        if (r2) {
          r2.addEventListener(`load`, () => e2(), {
            once: true
          }), r2.addEventListener(`error`, () => t2(Error(`diagrams.net viewer \u52A0\u8F7D\u5931\u8D25`)), {
            once: true
          });
          return;
        }
        let i2 = document.createElement(n2(134));
        i2.src = O, i2.async = true, i2.onload = () => e2(), i2.onerror = () => t2(Error(`diagrams.net viewer \u52A0\u8F7D\u5931\u8D25`)), document.head[n2(120)](i2);
      })), _2), W = (e2, t2 = 0) => {
        let n2 = Number(e2);
        return Number.isFinite(n2) ? n2 : t2;
      }, G = (e2) => !e2 || e2 === p2(144) || e2 === `rgba(0, 0, 0, 0)`, K = (e2) => document.createElementNS(k, e2), q = (function() {
        var e2 = g(function* (e3, t2, n2) {
          let r2;
          try {
            return yield Promise.race([
              e3,
              new Promise((e4, i2) => {
                r2 = setTimeout(() => i2(Error(n2)), t2);
              })
            ]);
          } finally {
            r2 && clearTimeout(r2);
          }
        });
        return function(t2, n2, r2) {
          return e2.apply(this, arguments);
        };
      })(), J = (e2, t2) => e2.dataset.drawingRendered ? false : (e2.dataset.drawingRendered = t2, true), Y = (e2, t2, n2) => {
        let r2 = p2;
        J(e2, n2) && (t2[r2(153)].add(`drawing-svg`), e2.appendChild(t2));
      }, X = () => {
        let e2 = console.error, t2 = (...t3) => {
          t3[y(156)]((e3) => String(e3)).join(` `).includes(`Failed to use workers for subsetting`) || e2(...t3);
        };
        return console.error = t2, () => {
          let n2 = y;
          console.error === t2 && (console[n2(168)] = e2);
        };
      }, Z = (e2) => Array[p2(127)](e2.points) && e2.points.length ? e2.points.map((t2) => [
        W(e2.x) + W(t2[0]),
        W(e2.y) + W(t2[1])
      ]) : [
        [
          W(e2.x),
          W(e2.y)
        ],
        [
          W(e2.x) + W(e2.width),
          W(e2.y) + W(e2.height)
        ]
      ], Q = (e2) => {
        let t2 = p2, n2 = Z(e2), r2 = n2.map((e3) => e3[0]), i2 = n2[t2(156)]((e3) => e3[1]);
        return Array.isArray(e2.points) || (r2.push(W(e2.x) + W(e2.width)), i2.push(W(e2.y) + W(e2.height))), {
          minX: Math.min(...r2),
          minY: Math.min(...i2),
          maxX: Math[t2(132)](...r2),
          maxY: Math.max(...i2)
        };
      }, te = (e2) => {
        let t2 = e2.reduce((e3, t3) => {
          let n2 = y, r2 = Q(t3);
          return {
            minX: Math[n2(142)](e3.minX, r2.minX),
            minY: Math[n2(142)](e3.minY, r2[n2(171)]),
            maxX: Math.max(e3.maxX, r2.maxX),
            maxY: Math.max(e3.maxY, r2.maxY)
          };
        }, {
          minX: 1 / 0,
          minY: 1 / 0,
          maxX: -1 / 0,
          maxY: -1 / 0
        });
        return Number.isFinite(t2.minX) ? t2 : {
          minX: 0,
          minY: 0,
          maxX: 800,
          maxY: 480
        };
      }, ne = (e2) => {
        let t2 = p2, n2 = G(e2.backgroundColor) ? void 0 : e2[t2(159)];
        return {
          stroke: e2.strokeColor || `#1e1e1e`,
          strokeWidth: Math.max(1, W(e2.strokeWidth, 1)),
          roughness: Math[t2(132)](0, W(e2.roughness, 1)),
          fill: n2,
          fillStyle: e2.fillStyle || `hachure`,
          seed: W(e2.seed, 1),
          strokeLineDash: e2.strokeStyle === `dashed` ? [
            10,
            8
          ] : e2.strokeStyle === `dotted` ? [
            2,
            6
          ] : void 0
        };
      }, $ = (e2, t2, n2) => {
        let r2 = W(t2.opacity, 100) / 100;
        r2 < 1 && n2.setAttribute(`opacity`, String(r2)), e2.appendChild(n2);
      }, re = (e2) => {
        let t2 = p2, n2 = K(`g`), r2 = W(e2.angle);
        if (r2) {
          let i2 = W(e2.x) + W(e2.width) / 2, a2 = W(e2.y) + W(e2.height) / 2;
          n2.setAttribute(t2(122), `rotate(` + r2 * 180 / Math.PI + ` ` + i2 + ` ` + a2 + `)`);
        }
        return n2;
      }, ie = (e2, t2) => {
        let n2 = p2, r2 = String(t2.text || ``);
        if (!r2.trim()) return;
        let i2 = K(n2(126)), a2 = Math.max(8, W(t2[n2(129)], 20)), o2 = a2 * 1.25, s2 = r2.split(/\r?\n/), c2 = {
          1: `Virgil, Segoe Print, Comic Sans MS, sans-serif`,
          2: n2(117),
          3: `Cascadia Mono, Menlo, Consolas, monospace`
        };
        i2[n2(133)](`x`, String(W(t2.x))), i2.setAttribute(`y`, String(W(t2.y) + a2)), i2.setAttribute(n2(160), t2[n2(135)] || `#1e1e1e`), i2.setAttribute(`font-size`, String(a2)), i2.setAttribute(`font-family`, c2[W(t2.fontFamily, 1)] || c2[1]), i2.setAttribute(`font-weight`, String(t2.fontWeight || 400)), i2.setAttribute(`text-anchor`, t2.textAlign === `center` ? `middle` : t2.textAlign === `right` ? `end` : `start`), t2.textAlign === `center` ? i2.setAttribute(`x`, String(W(t2.x) + W(t2[n2(138)]) / 2)) : t2.textAlign === n2(149) && i2[n2(133)](`x`, String(W(t2.x) + W(t2.width))), s2.forEach((e3, n3) => {
          let r3 = K(`tspan`);
          r3.setAttribute(`x`, i2.getAttribute(`x`) || String(W(t2.x))), r3.setAttribute(`dy`, n3 === 0 ? `0` : String(o2)), r3.textContent = e3, i2.appendChild(r3);
        }), $(e2, t2, i2);
      }, ae = (e2, t2, n2) => {
        let r2 = p2;
        if (!(t2.endArrowhead || t2.startArrowhead) || n2.length < 2) return;
        let i2 = n2[n2.length - 1], a2 = n2[n2.length - 2], o2 = Math.atan2(i2[1] - a2[1], i2[0] - a2[0]), s2 = Math.max(10, W(t2.strokeWidth, 1) * 7), c2 = [
          i2[0] - s2 * Math.cos(o2 - Math.PI / 7),
          i2[1] - s2 * Math[r2(140)](o2 - Math.PI / 7)
        ], l2 = [
          i2[0] - s2 * Math.cos(o2 + Math.PI / 7),
          i2[1] - s2 * Math.sin(o2 + Math.PI / 7)
        ], u2 = K(`polygon`);
        u2.setAttribute(`points`, i2.join(`,`) + ` ` + c2.join(`,`) + ` ` + l2[r2(151)](`,`)), u2[r2(133)](`fill`, t2.strokeColor || r2(128)), u2[r2(133)](`stroke`, t2.strokeColor || `#1e1e1e`), $(e2, t2, u2);
      }, oe = (function() {
        var t2 = g(function* (t3, n2, r2) {
          var _a;
          let i2 = y, { default: a2 } = yield e(() => import("./rough.esm-Ct7jHvNv.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((e2) => e2.t).then((e2) => e2.n), __vite__mapDeps([0,1,2])), o2 = te(n2), s2 = Math.max(320, o2.maxX - o2.minX + 160), c2 = Math.max(220, o2.maxY - o2.minY + 160), l2 = K(`svg`), u2 = K(`g`), d3 = a2.svg(l2);
          l2.setAttribute(i2(148), o2[i2(145)] - 80 + ` ` + (o2.minY - 80) + ` ` + s2 + ` ` + c2), l2.setAttribute(`width`, String(s2)), l2[i2(133)](`height`, String(c2)), l2.setAttribute(i2(146), `img`), l2[i2(133)](`aria-label`, `Excalidraw rough.js preview`);
          let f2 = K(`rect`);
          f2.setAttribute(`x`, String(o2.minX - 80)), f2.setAttribute(`y`, String(o2.minY - 80)), f2.setAttribute(i2(138), String(s2)), f2[i2(133)](`height`, String(c2)), f2[i2(133)](`fill`, ((_a = t3.appState) == null ? void 0 : _a.viewBackgroundColor) || `#ffffff`), l2[i2(120)](f2), l2.appendChild(u2), n2[i2(158)]((e2) => {
            let t4 = i2, n3 = re(e2), r3 = ne(e2), a3 = W(e2.x), o3 = W(e2.y), s3 = W(e2[t4(138)]), c3 = W(e2.height);
            if (e2.type === `text`) ie(n3, e2);
            else if (e2.type === `rectangle`) $(n3, e2, d3.rectangle(a3, o3, s3, c3, r3));
            else if (e2.type === `diamond`) $(n3, e2, d3.polygon([
              [
                a3 + s3 / 2,
                o3
              ],
              [
                a3 + s3,
                o3 + c3 / 2
              ],
              [
                a3 + s3 / 2,
                o3 + c3
              ],
              [
                a3,
                o3 + c3 / 2
              ]
            ], r3));
            else if (e2.type === t4(152)) $(n3, e2, d3.ellipse(a3 + s3 / 2, o3 + c3 / 2, Math.abs(s3), Math[t4(114)](c3), r3));
            else if (e2.type === `line` || e2.type === `arrow` || e2[t4(119)] === `freedraw`) {
              let i3 = Z(e2);
              $(n3, e2, d3[t4(167)](i3, r3)), e2.type === t4(124) && ae(n3, e2, i3);
            }
            n3.childNodes[t4(164)] && u2.appendChild(n3);
          }), Y(r2, l2, `rough`);
        });
        return function(e2, n2, r2) {
          return t2.apply(this, arguments);
        };
      })(), se = (function() {
        var t2 = g(function* (t3, n2, r2) {
          let i2 = y, a2 = X(), o2 = setTimeout(a2, A + 1e3), { exportToSvg: s2, restore: c2 } = yield e(() => import("./prod-BCU1U8Br.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([3,4,5,2,6,7,8,9,10,11]));
          try {
            let e2 = c2({
              elements: n2,
              appState: t3.appState || {},
              files: t3.files || {}
            }, null, null, {
              repairBindings: true,
              refreshDimensions: true
            });
            Y(r2, yield s2({
              elements: e2.elements.filter((e3) => !e3.isDeleted),
              appState: f(f({}, e2.appState), {}, {
                exportBackground: true,
                viewBackgroundColor: e2.appState[i2(172)] || `#ffffff`
              }),
              files: e2[i2(116)] || {}
            }), i2(165));
          } finally {
            clearTimeout(o2), a2();
          }
        });
        return function(e2, n2, r2) {
          return t2.apply(this, arguments);
        };
      })(), ce = (function() {
        var e2 = g(function* (e3) {
          let t2 = y, n2 = M.value;
          if (!n2) return;
          let r2 = JSON.parse(e3), i2 = Array.isArray(r2.elements) ? r2[t2(170)][t2(141)]((e4) => !e4[t2(157)]) : [];
          if (!i2.length) throw Error(`Excalidraw \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u9884\u89C8\u56FE\u5143`);
          try {
            yield q(se(r2, i2, n2), A, `Excalidraw \u5B98\u65B9\u5BFC\u51FA\u8D85\u65F6\uFF0C\u81EA\u52A8\u5207\u6362 rough.js \u517C\u5BB9\u6E32\u67D3`);
          } catch (e4) {
            console.warn(e4), yield oe(r2, i2, n2);
          }
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })(), le = (function() {
        var e2 = g(function* (e3) {
          let t2 = y, n2 = M.value;
          if (!n2) return;
          yield U(), yield s();
          let r2 = document.createElement(t2(169));
          if (r2.className = `mxgraph drawing-mxgraph`, r2.setAttribute(`data-mxgraph`, JSON.stringify({
            xml: e3,
            toolbar: `zoom layers lightbox`,
            nav: true,
            resize: true,
            "auto-fit": true,
            "auto-crop": true,
            "auto-origin": true,
            "allow-zoom-in": true,
            "allow-zoom-out": true,
            border: 16,
            highlight: `#0f766e`
          })), n2.appendChild(r2), !window[t2(147)]) throw Error(`diagrams.net viewer \u672A\u6B63\u786E\u521D\u59CB\u5316`);
          window.GraphViewer.createViewerForElement(r2);
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })();
      return c((function() {
        var e2 = g(function* () {
          let e3 = y;
          b2.value = e3(118), j2.value = ``, N.value = 1, H();
          try {
            let e4 = yield m(h2.data);
            F.value ? yield ce(e4) : yield le(e4), b2.value = `ready`;
          } catch (t2) {
            console[e3(168)](t2), j2.value = t2 instanceof Error ? t2.message : String(t2), b2.value = `error`;
          }
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })()), (e2, n2) => (u(), t(`div`, x, [
        l(`div`, S, [
          l(`div`, ee, [
            l(`span`, null, r(I.value), 1),
            l(`strong`, null, r(F.value ? `Excalidraw \u5B98\u65B9 SVG \u9884\u89C8` : `diagrams.net \u5B98\u65B9 Viewer \u9884\u89C8`), 1)
          ]),
          l(`div`, C, [
            l(p2(150), {
              type: `button`,
              title: `\u7F29\u5C0F`,
              onClick: B
            }, `-`),
            l(`span`, null, r(Math[p2(125)](N.value * 100)) + `%`, 1),
            l(`button`, {
              type: `button`,
              title: `\u653E\u5927`,
              onClick: z
            }, `+`),
            l(p2(150), {
              type: `button`,
              title: `\u9002\u5408\u5BBD\u5EA6`,
              onClick: V
            }, `\u9002\u5408`)
          ])
        ]),
        l(`div`, w, [
          b2.value === p2(118) ? (u(), t(`div`, T, `\u6B63\u5728\u52A0\u8F7D\u5B98\u65B9\u7ED8\u56FE\u9884\u89C8\u5668...`)) : b2.value === `error` ? (u(), t(`div`, E, r(j2.value), 1)) : i(``, true),
          l(`div`, D, [
            l(`div`, {
              ref_key: p2(131),
              ref: M,
              class: `drawing-canvas`,
              style: a(L.value)
            }, null, 4)
          ])
        ])
      ]));
    }
  }), [
    [
      `__scopeId`,
      `data-v-6f438c82`
    ]
  ]);
});
export {
  __tla,
  j as default
};
