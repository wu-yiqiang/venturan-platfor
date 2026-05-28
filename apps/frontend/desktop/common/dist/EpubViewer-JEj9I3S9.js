const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["src2-BClfEkMP.js","chunk-DeXYQlWK.js","rolldown-runtime-aKtaBQYM.js"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, F as n, G as r, H as i, Q as a, W as o, X as s, c, d as l, et as u, g as d, l as f, m as p, ot as m, q as h } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { m as g, p as _, t as v, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let N;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function y(e2, t2) {
    return e2 -= 156, P()[e2];
  }
  var b = y;
  (function(e2, t2) {
    let n2 = y, r2 = e2();
    for (; ; ) try {
      if (parseInt(n2(163)) / 1 + parseInt(n2(167)) / 2 * (-parseInt(n2(185)) / 3) + parseInt(n2(157)) / 4 * (parseInt(n2(158)) / 5) + -parseInt(n2(176)) / 6 + -parseInt(n2(170)) / 7 + -parseInt(n2(178)) / 8 + parseInt(n2(169)) / 9 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(P, 358482), g();
  let x, S, C, w, T, E, ee, D, te, O, k, A, j, M;
  x = {
    class: `epub-toolbar`
  };
  S = {
    class: `epub-title`
  };
  C = {
    class: `epub-actions`
  };
  w = [
    `disabled`
  ];
  T = {
    class: `epub-progress`
  };
  E = [
    `disabled`
  ];
  ee = {
    class: `epub-body`
  };
  D = {
    key: 0,
    class: `epub-toc`
  };
  te = {
    class: `epub-toc-head`
  };
  O = {
    class: b(162)
  };
  k = [
    `onClick`
  ];
  A = {
    class: `epub-stage-wrap`
  };
  j = {
    key: 0,
    class: `epub-state`
  };
  M = {
    key: 1,
    class: `epub-state error`
  };
  N = v(m({
    __name: b(184),
    props: {
      data: {}
    },
    setup(m2) {
      let g2 = b, v2 = m2, N2 = n(null), P2 = n(`loading`), F = n(``), I = n(true), L = n(`EPUB \u7535\u5B50\u4E66`), R = n(``), z = n([]), B = n(``), V = n(null), H = n(true), U = n(false), W, G, K = false, q, J = s(() => {
        var _a;
        let e2 = y;
        if (!B.value) return ``;
        let t2 = z.value[e2(173)]((t3) => t3[e2(159)] === B[e2(186)]);
        return t2 ? t2[e2(160)] : ((_a = z[e2(186)].find((e3) => B.value.includes(e3.href.split(`#`)[0]))) == null ? void 0 : _a.label) || ``;
      }), Y = s(() => typeof V.value == `number` ? V.value + `%` : J.value || `\u9605\u8BFB\u4E2D`), X = (e2, t2) => typeof e2 == `string` && e2.trim() ? e2.trim() : t2, Z = (e2, t2 = 0) => Array.isArray(e2) ? e2.flatMap((e3, n2) => {
        let r2 = y, i2 = e3, a2 = typeof i2.href == `string` ? i2.href : ``, o2 = X(i2.label || i2.title, `\u7AE0\u8282 ` + (n2 + 1)), s2 = Z(i2[r2(183)] || i2.children, t2 + 1);
        return a2 ? [
          {
            depth: t2,
            href: a2,
            id: t2 + `-` + n2 + `-` + a2,
            label: o2
          },
          ...s2
        ] : s2;
      }) : [], ne = (e2) => {
        var _a, _b;
        let t2 = y, n2 = e2.find((e3) => {
          let t3 = y, n3 = e3.label[t3(171)]();
          return /(^|\s)(chapter|part|book|prologue|preface|introduction)\b/.test(n3) || /第[一二三四五六七八九十百千0-9]+[章节回部卷篇]/.test(e3.label);
        });
        return n2 ? n2.href : ((_a = e2.find((e3) => {
          let t3 = (e3.label + ` ` + e3.href).toLowerCase();
          return !/(cover|titlepage|title-page|copyright|license|toc|contents|nav|table-of-contents|wrap0000)/.test(t3);
        })) == null ? void 0 : _a[t2(159)]) || ((_b = e2[0]) == null ? void 0 : _b.href);
      }, Q = (e2) => {
        let t2 = y;
        var n2, r2;
        H.value = !!(e2 != null && e2.atStart), U.value = !!(e2 != null && e2[t2(180)]), B[t2(186)] = (e2 == null || (n2 = e2.start) == null ? void 0 : n2[t2(159)]) || ``, typeof (e2 == null || (r2 = e2[t2(181)]) == null ? void 0 : r2[t2(161)]) == t2(172) && (V.value = Math.round(e2.start.percentage * 100));
      }, re = (e2) => new Promise((t2) => {
        q = window.setTimeout(t2, e2);
      }), $ = () => {
        var _a;
        var e2;
        let t2 = (_a = N2.value) == null ? void 0 : _a.querySelector(`iframe`), n2 = t2 == null || (e2 = t2.contentDocument) == null ? void 0 : e2.body;
        return n2 ? !!(n2.innerText.trim() || n2.querySelector(`img, svg, canvas`)) : false;
      }, ie = (function() {
        var e2 = _(function* () {
          for (let e3 = 0; e3 < 20; e3++) {
            if (K || $()) return $();
            yield re(100);
          }
          return $();
        });
        return function() {
          return e2[y(166)](this, arguments);
        };
      })(), ae = (function() {
        var t2 = _(function* () {
          var _a;
          let t3 = y;
          P2.value = `loading`, yield c();
          let n2 = N2.value;
          if (n2) try {
            let { default: r2 } = yield e(() => import("./src2-BClfEkMP.js").then(async (m3) => {
              await m3.__tla;
              return m3;
            }), __vite__mapDeps([0,1,2]));
            if (K) return;
            W = r2(v2.data.slice(0), {
              openAs: `binary`,
              replacements: `blobUrl`
            }), G = W[t3(177)](n2, {
              allowScriptedContent: false,
              flow: `scrolled`,
              height: `100%`,
              manager: `continuous`,
              resizeOnOrientationChange: true,
              spread: `none`,
              width: `100%`
            }), G.themes[t3(164)]({
              body: {
                color: `#172033`,
                fontFamily: `Georgia, "Times New Roman", serif`,
                lineHeight: `1.72`,
                padding: `0 8px`
              },
              img: {
                maxWidth: `100%`
              },
              html: {
                height: `auto`,
                overflow: `auto`
              }
            }), G.on(`relocated`, Q), yield W.ready;
            let i2 = yield W[t3(165)].metadata.catch(() => void 0);
            L.value = X(i2 == null ? void 0 : i2.title, L.value), R.value = X(i2 == null ? void 0 : i2.creator, ``), z.value = Z((_a = yield W.loaded.navigation.catch(() => void 0)) == null ? void 0 : _a.toc);
            let a2 = ne(z.value);
            if (yield G.display(a2), !(yield ie())) throw Error(`EPUB \u6B63\u6587\u6E32\u67D3\u672A\u5B8C\u6210\uFF0C\u8BF7\u5237\u65B0\u540E\u91CD\u8BD5`);
            if (K) return;
            P2.value = t3(182), W.locations.generate(1200).catch(() => void 0);
          } catch (e2) {
            console.error(e2), F.value = e2 instanceof Error ? e2.message : String(e2), P2.value = `error`;
          }
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), oe = (function() {
        var e2 = _(function* () {
          yield G == null ? void 0 : G.prev();
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })(), se = (function() {
        var e2 = _(function* () {
          yield G == null ? void 0 : G.next();
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })(), ce = (function() {
        var e2 = _(function* (e3) {
          let t2 = y;
          yield G == null ? void 0 : G.display(e3.href), I[t2(186)] = false;
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })();
      return l(ae), f(() => {
        K = true, q !== void 0 && (clearTimeout(q), q = void 0), G && (G = (G.off(`relocated`, Q), G.destroy(), void 0)), W == null ? void 0 : W.destroy(), W = void 0;
      }), (e2, n2) => (p(), t(`div`, {
        class: i([
          `epub-viewer`,
          {
            "epub-viewer--toc-hidden": !I.value
          }
        ])
      }, [
        u(`div`, x, [
          u(`button`, {
            type: `button`,
            class: i([
              `epub-icon-button`,
              {
                active: I[g2(186)]
              }
            ]),
            title: `\u76EE\u5F55`,
            onClick: n2[0] || (n2[0] = (e3) => I.value = !I.value)
          }, [
            ...n2[1] || (n2[1] = [
              u(`span`, null, null, -1)
            ])
          ], 2),
          u(`div`, S, [
            u(`strong`, null, r(L.value), 1),
            u(`span`, null, r(R.value || Y.value), 1)
          ]),
          u(`div`, C, [
            u(`button`, {
              type: `button`,
              class: `epub-button`,
              disabled: P2.value !== `ready` || H.value,
              onClick: oe
            }, ` \u4E0A\u4E00\u9875 `, 8, w),
            u(`span`, T, r(Y.value), 1),
            u(`button`, {
              type: `button`,
              class: `epub-button`,
              disabled: P2.value !== `ready` || U[g2(186)],
              onClick: se
            }, ` \u4E0B\u4E00\u9875 `, 8, E)
          ])
        ]),
        u(`div`, ee, [
          I.value ? (p(), t(`aside`, D, [
            u(`div`, te, [
              n2[2] || (n2[2] = u(g2(179), null, `\u76EE\u5F55`, -1)),
              u(`span`, null, r(z[g2(186)].length) + ` \u9879`, 1)
            ]),
            u(`div`, O, [
              (p(true), t(h, null, d(z.value, (e3) => (p(), t(`button`, {
                key: e3.id,
                type: `button`,
                class: i([
                  `epub-toc-item`,
                  {
                    active: e3[g2(159)] === B.value
                  }
                ]),
                style: o({
                  paddingLeft: 12 + e3.depth * 14 + `px`
                }),
                onClick: (t2) => ce(e3)
              }, r(e3.label), 15, k))), 128))
            ])
          ])) : a(``, true),
          u(g2(174), A, [
            u(g2(156), {
              ref_key: `stage`,
              ref: N2,
              class: `epub-stage`
            }, null, 512),
            P2.value === `loading` ? (p(), t(`div`, j, `\u6B63\u5728\u89E3\u6790 EPUB...`)) : P2.value === `error` ? (p(), t(`div`, M, r(F.value), 1)) : a(``, true)
          ])
        ])
      ], 2));
    }
  }), [
    [
      b(168),
      b(175)
    ]
  ]);
  function P() {
    let e2 = `epub-toc-list.527840dNsxzs.default.loaded.apply.2okIQiK.__scopeId.7721487NIqUHj.4499600XiWToQ.toLowerCase.number.find.main.data-v-8f8a2b3b.2110698WqSeEt.renderTo.1159472tAIBta.strong.atEnd.start.ready.subitems.EpubViewer.1070313tqUVOO.value.div.4VuKMzS.2344935RSyNMo.href.label.percentage`.split(`.`);
    return P = function() {
      return e2;
    }, P();
  }
});
export {
  __tla,
  N as default
};
