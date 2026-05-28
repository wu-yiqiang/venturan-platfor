const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["postal-mime-VTfLiDob.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","index-IvLr1-5o.css","lib-Ck52NX5T.js","__vite-browser-external-Db0kvMGT.js","rolldown-runtime-aKtaBQYM.js"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, F as n, G as r, H as i, Q as a, X as o, c as s, d as c, et as l, g as u, l as d, m as f, ot as p, q as m, rt as h } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { o as g } from "./chunk-DeXYQlWK.js";
import { m as _, p as v, t as y, __tla as __tla_0 } from "./index-D-g3WoLo.js";
import { t as b, __tla as __tla_1 } from "./nestedRender-CW1QOENT.js";
let L;
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
  function x() {
    let e2 = `241308EKeEer,attachment-preview-head,flatMap,address,apply,334990kygFVR,642908OGUMLW,senderEmail,\u6B63\u5728\u89E3\u6790\u90AE\u4EF6...,html,split,buffer,span,9278622uokOCx,toUpperCase,srcdoc,headers,section,map,value,application/octet-stream,div,label,208826ykYwrI,text,1101495RnfuPe,body-tabs,length,call,options,error,email-attachment-render,3246264qgKsgC,toFixed,\u6536\u4EF6\u4EBA,name,contentLength,40AHicRw,recipients,button,replace,txt,\u4E0B\u8F7D\u9644\u4EF6,strong,forEach,12HCfUlJ,fileNameShort,default`.split(`,`);
    return x = function() {
      return e2;
    }, x();
  }
  var S = R;
  (function(e2, t2) {
    let n2 = R, r2 = e2();
    for (; ; ) try {
      if (-parseInt(n2(241)) / 1 + parseInt(n2(211)) / 2 + -parseInt(n2(236)) / 3 + -parseInt(n2(233)) / 4 * (-parseInt(n2(213)) / 5) + -parseInt(n2(220)) / 6 + parseInt(n2(242)) / 7 * (-parseInt(n2(225)) / 8) + parseInt(n2(249)) / 9 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(x, 380578), _();
  let C, w, T, E, D, O, k, ee, te, ne, re, ie, A, j, M, N, P, F, I;
  C = {
    class: `email-viewer`
  };
  w = {
    class: `email-header`
  };
  T = {
    key: 0,
    class: `email-meta`
  };
  E = {
    key: 0
  };
  D = {
    key: 0,
    class: `email-body`
  };
  O = {
    class: `email-sidebar`
  };
  k = {
    class: S(214)
  };
  ee = [
    `disabled`,
    `onClick`
  ];
  te = {
    class: `attachment-panel`
  };
  ne = {
    class: `attachment-title`
  };
  re = [
    `onClick`
  ];
  ie = {
    class: `message-panel`
  };
  A = [
    S(203)
  ];
  j = {
    key: 1,
    class: `email-text`
  };
  M = {
    key: 2,
    class: `email-text`
  };
  N = {
    key: 3,
    class: `attachment-preview`
  };
  P = {
    class: S(237)
  };
  F = {
    key: 1,
    class: `email-state`
  };
  I = {
    key: 2,
    class: `email-error`
  };
  L = y(p({
    __name: `EmailViewer`,
    props: {
      data: {},
      type: {},
      filename: {},
      options: {}
    },
    setup(p2) {
      let _2 = S, y2 = p2, x2 = n(null), L2 = n(true), z = n(_2(244)), B = n(``), V = n(`html`), H = n(null), U = n(null), W = /* @__PURE__ */ new Map(), G = [], K, q = (e2) => {
        let t2 = _2;
        if (!Number.isFinite(e2) || e2 < 0) return `-`;
        if (e2 < 1024) return e2 + ` B`;
        let n2 = e2 / 1024 / 1024;
        return n2 >= 1 ? n2.toFixed(+(n2 < 10)) + ` MB` : (e2 / 1024)[t2(221)](+(e2 < 10 * 1024)) + ` KB`;
      }, J = (e2) => e2 ? (Array.isArray(e2) ? e2 : [
        e2
      ])[_2(238)]((e3) => {
        let t2 = e3;
        return t2.group ? J(t2.group) : [
          {
            name: t2.name || ``,
            address: t2.address || t2.email || ``
          }
        ];
      }) : [], Y = (e2) => e2.map((e3) => e3.name && e3.address ? e3.name + ` <` + e3[_2(239)] + `>` : e3.address || e3.name || ``).filter(Boolean).join(`, `), X = o(() => {
        var _a;
        let e2 = ((_a = x2.value) == null ? void 0 : _a.html) || ``;
        if (!e2) return ``;
        let t2 = e2;
        return W.forEach((e3, n2) => {
          t2 = t2[R(228)](RegExp(`cid:` + n2.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`), `gi`), e3);
        }), `<!doctype html><html><head><meta charset="utf-8"><base target="_blank"><style>body{margin:0;padding:18px;font-family:Aptos,"Segoe UI",sans-serif;line-height:1.6;color:#172033;word-break:break-word;}img{max-width:100%;height:auto;}</style></head><body>` + t2 + `</body></html>`;
      }), ae = o(() => {
        let e2 = _2;
        var t2, n2, r2;
        return [
          {
            key: e2(245),
            label: `HTML`,
            disabled: !((t2 = x2.value) != null && t2.html)
          },
          {
            key: `text`,
            label: `\u6B63\u6587`,
            disabled: !((n2 = x2.value) != null && n2.text)
          },
          {
            key: `headers`,
            label: `\u5934\u4FE1\u606F`,
            disabled: !((r2 = x2.value) != null && r2[e2(204)])
          }
        ];
      }), Z = (function() {
        var e2 = v(function* (e3) {
          let t2 = R;
          if (e3 instanceof ArrayBuffer) return e3;
          if (e3 instanceof Uint8Array) {
            let n2 = new Uint8Array(e3.byteLength);
            return n2.set(e3), n2[t2(247)];
          }
          return Z(new TextEncoder().encode(e3));
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })(), oe = (function() {
        var t2 = v(function* () {
          var _a, _b;
          let t3 = R, n2 = yield (yield e(() => import("./postal-mime-VTfLiDob.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([0,1,2,3,4]))).default.parse(y2.data, {
            attachmentEncoding: `arraybuffer`,
            maxNestingDepth: 24,
            maxHeadersSize: 2 * 1024 * 1024
          }), r2 = n2.attachments.map((e2, t4) => {
            let n3 = typeof e2.content == `string` ? e2.content.length : e2.content.byteLength, r3 = e2.filename || `attachment-` + (t4 + 1);
            return {
              id: t4 + `-` + r3,
              name: r3,
              mimeType: e2.mimeType,
              size: n3,
              contentId: e2.contentId,
              load: () => Z(e2.content)
            };
          });
          return yield Promise.all(r2.map((function() {
            var e2 = v(function* (e3) {
              var t4;
              if (!e3.contentId || !((t4 = e3.mimeType) != null && t4.startsWith(`image/`))) return;
              let n3 = yield e3.load(), r3 = URL.createObjectURL(new Blob([
                n3
              ], {
                type: e3.mimeType
              }));
              G.push(r3), W.set(e3.contentId.replace(/[<>]/g, ``), r3);
            });
            return function(t4) {
              return e2.apply(this, arguments);
            };
          })())), {
            kind: `eml`,
            subject: n2.subject || y2.filename,
            from: J(n2.from),
            to: J(n2.to),
            cc: J(n2.cc),
            date: n2.date,
            text: n2[t3(212)],
            html: n2.html,
            headers: ((_a = n2.headerLines) == null ? void 0 : _a.map((e2) => e2.line).join(`
`)) || ((_b = n2.headers) == null ? void 0 : _b[t3(206)]((e2) => e2.originalKey + `: ` + e2.value).join(`
`)),
            attachments: r2
          };
        });
        return function() {
          return t2.apply(this, arguments);
        };
      })(), se = (function() {
        var t2 = v(function* () {
          var _a;
          let t3 = R, n2 = yield e(() => import("./lib-Ck52NX5T.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }).then((e2) => g(e2[t3(235)], 1)), __vite__mapDeps([5,6,3,7])), r2 = new (((_a = n2.default) == null ? void 0 : _a.default) || n2.default)(y2.data), i2 = r2.getFileData(), a2 = (i2.attachments || []).map((e2, n3) => {
            let i3 = t3, a3 = e2.fileName || e2[i3(234)] || e2.name || `attachment-` + (n3 + 1) + (e2.extension || ``);
            return {
              id: n3 + `-` + a3,
              name: a3,
              mimeType: `application/octet-stream`,
              size: e2[i3(224)] || e2.size || 0,
              contentId: e2.pidContentId,
              load() {
                return v(function* () {
                  return Z(r2.getAttachment(e2).content);
                })();
              }
            };
          });
          return {
            kind: `msg`,
            subject: i2.subject || y2.filename,
            from: J({
              name: i2.senderName,
              address: i2[t3(243)]
            }),
            to: J(i2[t3(226)] || []).filter((e2) => e2.name || e2.address),
            cc: [],
            date: i2.messageDeliveryTime || i2.clientSubmitTime || i2.creationTime,
            text: i2.body,
            html: i2.html || ``,
            headers: i2.headers,
            attachments: a2
          };
        });
        return function() {
          return t2[R(240)](this, arguments);
        };
      })(), Q = (function() {
        var e2 = v(function* () {
          let e3 = R;
          L2.value = true, B.value = ``;
          try {
            x2.value = y2.type === `msg` ? yield se() : yield oe(), V.value = x2.value[e3(245)] ? `html` : x2.value.text ? `text` : `headers`;
          } catch (e4) {
            console.error(e4), B.value = e4 instanceof Error ? e4.message : String(e4);
          } finally {
            L2.value = false;
          }
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })(), $ = () => {
        let e2 = _2;
        var t2;
        K == null || (t2 = K.unmount) == null || t2[e2(216)](K), K = void 0;
        let n2 = U.value;
        if (n2) for (; n2.firstChild; ) n2.removeChild(n2.firstChild);
      }, ce = (function() {
        var e2 = v(function* (e3) {
          let t2 = R;
          H.value = e3, L2.value = true, z.value = `\u6B63\u5728\u6253\u5F00\u9644\u4EF6 ` + e3.name + `...`;
          try {
            let n2 = yield e3.load();
            yield s(), $();
            let r2 = U[t2(207)];
            if (!r2) return;
            let i2 = document.createElement(`div`);
            i2.className = t2(219), r2.appendChild(i2), K = yield b(n2, e3[t2(223)].includes(`.`) ? e3.name.slice(e3.name.lastIndexOf(`.`) + 1).toLowerCase() : t2(229), i2, {
              filename: e3.name,
              options: y2[t2(217)]
            });
          } catch (e4) {
            console[t2(218)](e4), B.value = e4 instanceof Error ? e4.message : String(e4);
          } finally {
            L2.value = false, z.value = `\u6B63\u5728\u89E3\u6790\u90AE\u4EF6...`;
          }
        });
        return function(t2) {
          return e2[R(240)](this, arguments);
        };
      })(), le = (function() {
        var e2 = v(function* (e3) {
          let t2 = R, n2 = yield e3.load(), r2 = URL.createObjectURL(new Blob([
            n2
          ], {
            type: e3.mimeType || t2(208)
          }));
          G.push(r2);
          let i2 = document.createElement(`a`);
          i2.href = r2, i2.download = e3.name, document.body.appendChild(i2), i2.click(), i2.remove();
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })();
      return c(() => {
        Q();
      }), d(() => {
        let e2 = _2;
        $(), G[e2(232)]((e3) => URL.revokeObjectURL(e3));
      }), (e2, n2) => {
        var _a;
        let o2 = _2;
        var s2;
        return f(), t(`section`, C, [
          l(`header`, w, [
            l(o2(248), null, r(((s2 = x2.value) == null || (s2 = s2.kind) == null ? void 0 : s2.toUpperCase()) || p2.type.toUpperCase()), 1),
            l(`h2`, null, r(((_a = x2.value) == null ? void 0 : _a.subject) || p2.filename), 1),
            x2.value ? (f(), t(`div`, T, [
              l(`p`, null, [
                n2[1] || (n2[1] = l(`strong`, null, `\u53D1\u4EF6\u4EBA`, -1)),
                h(r(Y(x2.value.from) || `-`), 1)
              ]),
              l(`p`, null, [
                n2[2] || (n2[2] = l(`strong`, null, o2(222), -1)),
                h(r(Y(x2.value.to) || `-`), 1)
              ]),
              x2.value.cc.length ? (f(), t(`p`, E, [
                n2[3] || (n2[3] = l(`strong`, null, `\u6284\u9001`, -1)),
                h(r(Y(x2.value.cc)), 1)
              ])) : a(``, true),
              l(`p`, null, [
                n2[4] || (n2[4] = l(`strong`, null, `\u65F6\u95F4`, -1)),
                h(r(x2.value.date || `-`), 1)
              ])
            ])) : a(``, true)
          ]),
          x2.value ? (f(), t(`div`, D, [
            l(`aside`, O, [
              l(`div`, k, [
                (f(true), t(m, null, u(ae.value, (e3) => (f(), t(o2(227), {
                  key: e3.key,
                  type: `button`,
                  disabled: e3.disabled,
                  class: i({
                    active: V.value === e3.key
                  }),
                  onClick: (t2) => V.value = e3.key
                }, r(e3[o2(210)]), 11, ee))), 128))
              ]),
              l(`section`, te, [
                l(`div`, ne, [
                  n2[5] || (n2[5] = l(`strong`, null, `\u9644\u4EF6`, -1)),
                  l(`span`, null, r(x2.value.attachments[o2(215)]), 1)
                ]),
                (f(true), t(m, null, u(x2.value.attachments, (e3) => {
                  var _a2, _b;
                  let n3 = o2;
                  return f(), t(`button`, {
                    key: e3.id,
                    type: `button`,
                    class: i([
                      `attachment-item`,
                      {
                        active: ((_a2 = H.value) == null ? void 0 : _a2.id) === e3.id
                      }
                    ]),
                    onClick: (t2) => ce(e3)
                  }, [
                    l(`span`, null, r(((_b = e3.name[n3(246)](`.`).pop()) == null ? void 0 : _b[n3(250)]()) || `FILE`), 1),
                    l(n3(231), null, r(e3.name), 1),
                    l(`em`, null, r(q(e3.size)), 1)
                  ], 10, re);
                }), 128))
              ])
            ]),
            l(`main`, ie, [
              V.value === o2(245) && X.value ? (f(), t(`iframe`, {
                key: 0,
                class: `email-html`,
                sandbox: ``,
                srcdoc: X.value
              }, null, 8, A)) : V.value === `text` ? (f(), t(`pre`, j, r(x2.value.text), 1)) : (f(), t(`pre`, M, r(x2.value.headers), 1)),
              H[o2(207)] ? (f(), t(o2(205), N, [
                l(`div`, P, [
                  l(o2(231), null, r(H[o2(207)].name), 1),
                  l(`button`, {
                    type: `button`,
                    onClick: n2[0] || (n2[0] = (e3) => le(H[o2(207)]))
                  }, o2(230))
                ]),
                l(`div`, {
                  ref_key: `attachmentTarget`,
                  ref: U,
                  class: `attachment-target`
                }, null, 512)
              ])) : a(``, true)
            ])
          ])) : a(``, true),
          L2.value ? (f(), t(`div`, F, [
            n2[6] || (n2[6] = l(`span`, null, null, -1)),
            l(`strong`, null, r(z[o2(207)]), 1)
          ])) : a(``, true),
          B.value ? (f(), t(o2(209), I, [
            n2[7] || (n2[7] = l(`strong`, null, `\u90AE\u4EF6\u9884\u89C8\u63D0\u793A`, -1)),
            l(`p`, null, r(B.value), 1)
          ])) : a(``, true)
        ]);
      };
    }
  }), [
    [
      `__scopeId`,
      `data-v-0989d798`
    ]
  ]);
  function R(e2, t2) {
    return e2 -= 203, x()[e2];
  }
});
export {
  __tla,
  L as default
};
