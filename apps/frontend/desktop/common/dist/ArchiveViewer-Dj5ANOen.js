const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["libarchive-EG3UeuH1.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","index-IvLr1-5o.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, C as n, F as r, G as i, H as a, L as o, Q as s, V as c, W as l, X as u, c as ee, d, et as f, g as p, l as te, m, ot as h, q as g, w as _ } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { a as ne, g as v, h as y, i as b, m as x, o as S, p as C, t as w, __tla as __tla_0 } from "./index-D-g3WoLo.js";
import { t as re, __tla as __tla_1 } from "./nestedRender-CW1QOENT.js";
let X;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  var T = Z;
  (function(e2, t2) {
    let n2 = Z, r2 = e2();
    for (; ; ) try {
      if (parseInt(n2(424)) / 1 + -parseInt(n2(441)) / 2 * (-parseInt(n2(467)) / 3) + parseInt(n2(447)) / 4 * (-parseInt(n2(455)) / 5) + parseInt(n2(418)) / 6 * (parseInt(n2(419)) / 7) + parseInt(n2(454)) / 8 + -parseInt(n2(436)) / 9 + -parseInt(n2(437)) / 10 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(E, 185316);
  function E() {
    let e2 = `\uFF0C\u8BF7\u4E0B\u8F7D\u540E\u5728\u672C\u5730\u89E3\u538B\u3002,section,archive.bin,remove,openCursor,key,\u68C0\u6D4B\u5230\u52A0\u5BC6\u5185\u5BB9\uFF0C\u5F53\u524D\u5728\u7EBF\u9884\u89C8\u4E0D\u63A5\u6536\u5BC6\u7801\uFF0C\u5EFA\u8BAE\u4E0B\u8F7D\u540E\u672C\u5730\u89E3\u538B\u3002,body,objectStoreNames,102KnkLwi,32214vdUlHI,message,data,target,archive-spinner,326374obzgIc,\u538B\u7F29\u5305\u9884\u89C8\u63D0\u793A,includes,size,firstChild,\u6B63\u5728\u6E32\u67D3 ,createObjectStore,toLowerCase,error,previewableCount,onsuccess,maxEntryPreviewSize,29070kZfkvc,3402930nAZRle,\u6B63\u5728\u5BFC\u51FA , \u8D85\u8FC7\u9884\u89C8\u4E0A\u9650 ,HEAD,6rdddRi,entry-copy,unmount,result,div,aside,820496bYIwOe,archive-preview,\u538B\u7F29\u5305\u5185\u9884\u89C8,span,href, \u8D85\u8FC7\u5B89\u5168\u4E0A\u9650 ,compressedFile,203664CPadMC,5MyKjZi,onerror,byteLength,name,buffer,value,createElement,index,\u9009\u62E9\u5DE6\u4FA7\u6587\u4EF6\u5373\u53EF\u9884\u89C8,apply,button,call,303897Fkzscs`.split(`,`);
    return E = function() {
      return e2;
    }, E();
  }
  x(), y();
  var D = `flyfish-file-viewer-cache`, O = `archiveEntries`, k = 1, A = 24 * 1024 * 1024, j = 96 * 1024 * 1024, M = null, N = () => typeof indexedDB < `u`, P = () => N() ? M || (M = new Promise((e2, t2) => {
    let n2 = Z, r2 = indexedDB.open(D, k);
    r2.onupgradeneeded = () => {
      let e3 = Z, t3 = r2[e3(444)];
      t3[e3(417)].contains(O) || t3[e3(430)](O, {
        keyPath: e3(414)
      }).createIndex(`updatedAt`, `updatedAt`);
    }, r2[n2(434)] = () => e2(r2.result), r2.onerror = () => t2(r2[n2(432)]);
  }), M) : Promise.reject(Error(`IndexedDB \u4E0D\u53EF\u7528`)), F = (function() {
    var e2 = C(function* (e3, t2) {
      let n2 = yield P();
      return new Promise((r2, i2) => {
        let a2 = Z, o2 = n2.transaction(O, e3), s2 = t2(o2.objectStore(O));
        s2[a2(434)] = () => r2(s2[a2(444)]), s2[a2(456)] = () => i2(s2.error), o2[a2(456)] = () => i2(o2.error);
      });
    });
    return function(t2, n2) {
      return e2[Z(464)](this, arguments);
    };
  })(), I = (function() {
    var e2 = C(function* (e3) {
      try {
        return (yield F(`readonly`, (t2) => t2.get(e3))) || null;
      } catch {
        return null;
      }
    });
    return function(t2) {
      return e2.apply(this, arguments);
    };
  })(), L = (function() {
    var e2 = C(function* () {
      try {
        let e3 = yield P();
        yield new Promise((t2, n2) => {
          let r2 = Z, i2 = e3.transaction(O, `readwrite`), a2 = i2.objectStore(O), o2 = a2[r2(462)](`updatedAt`), s2 = [], c2 = 0;
          o2[r2(413)]().onsuccess = (e4) => {
            let t3 = r2, n3 = e4[t3(422)].result;
            if (!n3) {
              for (; c2 > j && s2.length; ) {
                let e5 = s2.shift();
                e5 && (c2 -= e5.size, a2.delete(e5.key));
              }
              return;
            }
            let i3 = n3.value;
            c2 += i3.size || 0, s2.push({
              key: i3[t3(414)],
              size: i3.size || 0
            }), n3.continue();
          }, i2.oncomplete = () => t2(), i2[r2(456)] = () => n2(i2.error);
        });
      } catch {
      }
    });
    return function() {
      return e2.apply(this, arguments);
    };
  })(), R = (function() {
    var e2 = C(function* (e3) {
      if (!(e3.size > A)) try {
        yield F(`readwrite`, (t2) => t2.put(v(v({}, e3), {}, {
          updatedAt: Date.now()
        }))), yield L();
      } catch {
      }
    });
    return function(t2) {
      return e2.apply(this, arguments);
    };
  })();
  x();
  let z, B, V, H, U, W, G, K, q, ie, J, Y, ae, oe, se, ce;
  z = {
    class: `archive-viewer`
  };
  B = {
    class: `archive-sidebar`
  };
  V = {
    class: `archive-head`
  };
  H = {
    key: 0,
    class: `archive-warning`
  };
  U = {
    class: `archive-list`,
    role: `list`
  };
  W = [
    `onClick`
  ];
  G = {
    class: `entry-ext`
  };
  K = {
    class: T(442)
  };
  q = {
    class: T(448)
  };
  ie = {
    class: `archive-preview-toolbar`
  };
  J = {
    key: 0,
    class: `archive-empty`
  };
  Y = {
    key: 0,
    class: `archive-state`
  };
  ae = {
    key: 1,
    class: `archive-error`
  };
  oe = 320 * 1024 * 1024;
  se = 64 * 1024 * 1024;
  ce = 5e3;
  X = w(h({
    __name: `ArchiveViewer`,
    props: {
      data: {},
      filename: {},
      options: {}
    },
    setup(h2) {
      let v2 = h2, y2 = o(null), x2 = r([]), w2 = r(null), T2 = r(false), E2 = r(`\u6B63\u5728\u8BFB\u53D6\u538B\u7F29\u5305\u76EE\u5F55...`), D2 = r(``), O2 = r(``), k2 = r(null), A2 = r(null), j2, M2 = [], N2 = u(() => {
        var _a;
        return ((_a = v2.options) == null ? void 0 : _a.maxArchiveSize) || oe;
      }), P2 = u(() => {
        var _a;
        let e2 = Z;
        return ((_a = v2.options) == null ? void 0 : _a[e2(435)]) || se;
      }), F2 = u(() => {
        var _a;
        return ((_a = v2.options) == null ? void 0 : _a.cache) !== false;
      }), L2 = u(() => ({
        archive: v2.options
      })), X2 = u(() => {
        let e2 = Z, t2 = x2.value.reduce((e3, t3) => e3 + t3.size, 0), n2 = x2.value.filter((e3) => e3.previewable).length;
        return {
          count: x2[e2(460)].length,
          totalSize: t2,
          previewableCount: n2
        };
      }), le = u(() => {
        let e2 = Z, t2 = O2[e2(460)].trim().toLowerCase();
        return (t2 ? x2.value.filter((n2) => n2.path[e2(431)]()[e2(426)](t2)) : x2.value).slice(0, ce);
      }), ue = (function() {
        var t2 = C(function* () {
          let t3 = Z;
          var n2;
          if ((n2 = v2.options) != null && n2.workerUrl) return v2.options.workerUrl;
          let r2 = new URL(`/vendor/libarchive/worker-bundle.js`, window.location[t3(451)]).toString();
          try {
            if ((yield fetch(r2, {
              method: t3(440)
            })).ok) return r2;
          } catch {
          }
          return (yield e(() => import("./worker-bundle-BPEhCUYV.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), [])).default;
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), Q = () => {
        let e2 = Z;
        var t2;
        j2 == null || (t2 = j2[e2(443)]) == null || t2.call(j2), j2 = void 0;
        let n2 = A2.value;
        if (n2) for (; n2.firstChild; ) n2.removeChild(n2[e2(428)]);
      }, de = (function() {
        var e2 = C(function* () {
          let e3 = Z;
          var t2, n2;
          yield (t2 = y2[e3(460)]) == null || (n2 = t2.close) == null ? void 0 : n2[e3(466)](t2), y2.value = null;
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })(), fe = (function() {
        var t2 = C(function* () {
          let t3 = Z;
          if (v2.data.byteLength > N2.value) {
            D2.value = `\u538B\u7F29\u5305\u4F53\u79EF ` + b(v2.data[t3(457)]) + t3(452) + b(N2.value) + t3(409);
            return;
          }
          T2[t3(460)] = true, E2[t3(460)] = `\u6B63\u5728\u521D\u59CB\u5316\u538B\u7F29\u5305\u89E3\u6790 Worker...`, D2.value = ``;
          try {
            let [{ Archive: n2 }, r2] = yield Promise.all([
              e(() => import("./libarchive-EG3UeuH1.js").then(async (m2) => {
                await m2.__tla;
                return m2;
              }), __vite__mapDeps([0,1,2,3,4])),
              ue()
            ]);
            n2.init({
              workerUrl: r2
            }), E2[t3(460)] = `\u6B63\u5728\u8BFB\u53D6\u538B\u7F29\u5305\u76EE\u5F55...`;
            let i2 = new File([
              v2.data
            ], v2.filename || t3(411)), a2 = yield n2.open(i2);
            y2.value = a2, k2.value = yield a2.hasEncryptedData().catch(() => null), x2.value = ne(yield a2.getFilesObject()).sort((e2, t4) => e2.path.localeCompare(t4.path));
          } catch (e2) {
            console.error(e2), D2.value = e2 instanceof Error ? e2[t3(420)] : String(e2);
          } finally {
            T2.value = false;
          }
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), pe = (function() {
        var e2 = C(function* (e3, t2) {
          let n2 = Z;
          yield ee();
          let r2 = A2[n2(460)];
          if (!r2) return;
          Q();
          let i2 = document.createElement(`div`);
          i2.className = `archive-nested-content`, r2.appendChild(i2), j2 = yield re(t2, e3.extension, i2, {
            filename: e3.name,
            options: L2.value
          });
        });
        return function(t2, n2) {
          return e2[Z(464)](this, arguments);
        };
      })(), $ = (function() {
        var e2 = C(function* (e3) {
          let t2 = Z, n2 = S(v2.filename, v2[t2(421)][t2(457)], e3);
          if (F2[t2(460)]) {
            let e4 = yield I(n2);
            if (e4) return e4[t2(459)];
          }
          let r2 = yield (yield e3[t2(453)].extract()).arrayBuffer();
          return F2[t2(460)] && (yield R({
            key: n2,
            filename: e3.name,
            size: r2[t2(457)],
            updatedAt: Date.now(),
            buffer: r2
          })), r2;
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })(), me = (function() {
        var e2 = C(function* (e3) {
          let t2 = Z;
          if (w2.value = e3, e3[t2(427)] > P2[t2(460)]) {
            D2.value = `\u538B\u7F29\u5305\u5185\u6587\u4EF6 ` + e3.name + ` \u4F53\u79EF ` + b(e3.size) + t2(439) + b(P2.value) + `\u3002`;
            return;
          }
          T2.value = true, E2.value = `\u6B63\u5728\u6309\u9700\u89E3\u538B ` + e3.name + `...`, D2.value = ``;
          try {
            let n2 = yield $(e3);
            E2.value = t2(429) + e3[t2(458)] + `...`, yield pe(e3, n2);
          } catch (e4) {
            console.error(e4), D2.value = e4 instanceof Error ? e4.message : String(e4);
          } finally {
            T2.value = false;
          }
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })(), he = (function() {
        var e2 = C(function* (e3) {
          let t2 = Z;
          T2.value = true, E2.value = t2(438) + e3[t2(458)] + `...`;
          try {
            let n2 = yield $(e3), r2 = URL.createObjectURL(new Blob([
              n2
            ]));
            M2.push(r2);
            let i2 = document[t2(461)](`a`);
            i2.href = r2, i2.download = e3.name, document[t2(416)].appendChild(i2), i2.click(), i2[t2(412)]();
          } finally {
            T2.value = false;
          }
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })();
      return d(() => {
        fe();
      }), te(() => {
        Q(), de(), M2.forEach((e2) => URL.revokeObjectURL(e2));
      }), (e2, r2) => {
        var _a;
        let o2 = Z;
        return m(), t(o2(410), z, [
          f(o2(446), B, [
            f(`div`, V, [
              r2[2] || (r2[2] = f(`span`, null, `ARCHIVE`, -1)),
              f(`strong`, null, i(h2.filename), 1),
              f(`p`, null, i(X2.value.count) + ` \u4E2A\u6587\u4EF6 \xB7 ` + i(c(b)(X2.value.totalSize)) + ` \xB7 ` + i(X2.value[o2(433)]) + ` \u4E2A\u53EF\u76F4\u63A5\u9884\u89C8`, 1)
            ]),
            k2.value ? (m(), t(`div`, H, o2(415))) : s(``, true),
            n(f(`input`, {
              "onUpdate:modelValue": r2[0] || (r2[0] = (e3) => O2.value = e3),
              class: `archive-search`,
              type: `search`,
              placeholder: `\u7B5B\u9009\u538B\u7F29\u5305\u5185\u6587\u4EF6`
            }, null, 512), [
              [
                _,
                O2.value
              ]
            ]),
            f(`div`, U, [
              (m(true), t(g, null, p(le.value, (e3) => {
                var _a2;
                let n2 = o2;
                return m(), t(n2(465), {
                  key: e3.id,
                  type: `button`,
                  class: a([
                    `archive-entry`,
                    {
                      active: ((_a2 = w2[n2(460)]) == null ? void 0 : _a2.id) === e3.id
                    }
                  ]),
                  style: l({
                    "--entry-depth": e3.depth
                  }),
                  onClick: (t2) => me(e3)
                }, [
                  f(`span`, G, i(e3.extension || `file`), 1),
                  f(`span`, K, [
                    f(`strong`, null, i(e3.name), 1),
                    f(`em`, null, i(e3.path), 1)
                  ]),
                  f(`small`, null, i(c(b)(e3.size)), 1)
                ], 14, W);
              }), 128))
            ])
          ]),
          f(`main`, q, [
            f(o2(445), ie, [
              f(`div`, null, [
                r2[3] || (r2[3] = f(o2(450), null, o2(449), -1)),
                f(`strong`, null, i(((_a = w2[o2(460)]) == null ? void 0 : _a.name) || `\u8BF7\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6`), 1)
              ]),
              w2.value ? (m(), t(`button`, {
                key: 0,
                type: `button`,
                onClick: r2[1] || (r2[1] = (e3) => he(w2.value))
              }, `\u4E0B\u8F7D\u6587\u4EF6`)) : s(``, true)
            ]),
            f(`div`, {
              ref_key: `nestedTarget`,
              ref: A2,
              class: `archive-nested-target`
            }, [
              !w2[o2(460)] && !T2.value ? (m(), t(`div`, J, [
                ...r2[4] || (r2[4] = [
                  f(`strong`, null, o2(463), -1),
                  f(`p`, null, `\u538B\u7F29\u5305\u53EA\u8BFB\u53D6\u76EE\u5F55\uFF1B\u6587\u4EF6\u5185\u5BB9\u4F1A\u5728\u70B9\u51FB\u540E\u6309\u9700\u89E3\u538B\uFF0C\u5E76\u5728\u4F53\u79EF\u5141\u8BB8\u65F6\u7F13\u5B58\u5230 IndexedDB\u3002`, -1)
                ])
              ])) : s(``, true)
            ], 512)
          ]),
          T2.value ? (m(), t(`div`, Y, [
            f(`div`, null, [
              r2[5] || (r2[5] = f(`span`, {
                class: o2(423)
              }, null, -1)),
              f(`strong`, null, i(E2.value), 1),
              r2[6] || (r2[6] = f(`p`, null, `\u5927\u6587\u4EF6\u4F1A\u5728 Worker \u4E2D\u89E3\u6790\uFF0C\u907F\u514D\u963B\u585E\u4E3B\u7EBF\u7A0B\u3002`, -1))
            ])
          ])) : s(``, true),
          D2.value ? (m(), t(`div`, ae, [
            r2[7] || (r2[7] = f(`strong`, null, o2(425), -1)),
            f(`p`, null, i(D2.value), 1)
          ])) : s(``, true)
        ]);
      };
    }
  }), [
    [
      `__scopeId`,
      `data-v-3a5c7aee`
    ]
  ]);
  function Z(e2, t2) {
    return e2 -= 409, E()[e2];
  }
});
export {
  __tla,
  X as default
};
