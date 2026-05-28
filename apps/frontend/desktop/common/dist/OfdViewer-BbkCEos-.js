const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["ofd-CbR4_x4F.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","jszip.min-DwLxZD9E.js","index-IvLr1-5o.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, F as n, G as r, Q as i, c as a, d as o, et as s, l as c, m as l, ot as u } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { m as d, p as f, t as p, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function(e2, t2) {
    let n2 = _, r2 = e2();
    for (; ; ) try {
      if (parseInt(n2(350)) / 1 + -parseInt(n2(352)) / 2 * (-parseInt(n2(333)) / 3) + -parseInt(n2(344)) / 4 * (-parseInt(n2(340)) / 5) + -parseInt(n2(342)) / 6 + parseInt(n2(347)) / 7 * (parseInt(n2(351)) / 8) + -parseInt(n2(332)) / 9 + -parseInt(n2(343)) / 10 * (parseInt(n2(337)) / 11) === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(v, 969486), d();
  let m, h;
  m = {
    key: 0,
    class: `ofd-state`
  };
  h = {
    key: 1,
    class: `ofd-state error`
  };
  g = p(u({
    __name: `OfdViewer`,
    props: {
      data: {}
    },
    setup(u2) {
      let d2 = _, p2 = u2, g2 = n(null), v2 = n(null), y = n(`loading`), b = n(``), x = false, S = 0, C = null, w = 0, T = 0, E = null, D = () => {
        let e2 = _, t2 = g2.value;
        if (t2) for (; t2.firstChild; ) t2.removeChild(t2[e2(348)]);
      }, O = (e2) => new Promise((t2, n2) => {
        e2.parseOfdDocument({
          ofd: p2.data,
          success: (e3) => t2(e3),
          fail: (e3) => n2(e3)
        });
      }), k = (function() {
        var e2 = f(function* (e3) {
          return E || (E = O(e3).then((e4) => {
            let t2 = e4[0];
            if (!t2) throw Error(`OFD \u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u6E32\u67D3\u7684\u6587\u6863`);
            return t2;
          })), E;
        });
        return function(t2) {
          return e2.apply(this, arguments);
        };
      })(), A = (e2) => e2 instanceof Error ? e2[d2(336)] : typeof e2 == `string` ? e2 : JSON.stringify(e2), j = (e2, t2) => {
        let n2 = d2, r2 = document[n2(339)]();
        t2.forEach((e3) => {
          let t3 = n2;
          e3.classList[t3(338)](`ofd-page`), r2.appendChild(e3);
        }), e2.appendChild(r2);
      }, M = () => {
        var _a, _b;
        let e2 = d2, t2 = ((_a = v2.value) == null ? void 0 : _a.getBoundingClientRect()[e2(349)]) || ((_b = g2[e2(341)]) == null ? void 0 : _b.getBoundingClientRect().width) || 0;
        return Math.max(Math.floor(t2 - 48), 240);
      }, N = (function() {
        var t2 = f(function* (t3) {
          let n2 = yield e(() => import("./ofd-CbR4_x4F.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([0,1,2,3,4,5])), r2 = yield k(n2);
          return x ? [] : Promise.resolve(n2.renderOfd(t3, r2));
        });
        return function(e2) {
          return t2[_(346)](this, arguments);
        };
      })(), P = (function() {
        var e2 = f(function* (e3 = {}) {
          let t2 = _, n2 = g2.value;
          if (!n2) return;
          let r2 = e3.force ?? false, i2 = e3.showLoading ?? false, o2 = M();
          if (!r2 && y.value === `ready` && Math.abs(o2 - T) < 8) return;
          let s2 = ++S;
          (i2 || y.value !== t2(353)) && (y.value = t2(334), D()), b.value = ``;
          try {
            yield a();
            let e4 = yield N(o2);
            if (x || s2 !== S) return;
            D(), j(n2, e4), T = o2, y.value = `ready`;
          } catch (e4) {
            if (x || s2 !== S) return;
            console.error(e4), y[t2(341)] = `error`, b.value = A(e4) || `OFD \u6587\u4EF6\u89E3\u6790\u5931\u8D25`;
          }
        });
        return function() {
          return e2.apply(this, arguments);
        };
      })(), F = () => {
        !v2.value || C || (C = new ResizeObserver(() => {
          window.clearTimeout(w), w = window.setTimeout(() => {
            x || P({
              showLoading: false
            });
          }, 180);
        }), C.observe(v2.value));
      };
      return o(() => {
        P({
          force: true,
          showLoading: true
        }).finally(() => {
          F();
        });
      }), c(() => {
        x = true, S += 1, window.clearTimeout(w), C == null ? void 0 : C.disconnect(), C = null, D();
      }), (e2, n2) => (l(), t(`div`, {
        ref_key: `viewer`,
        ref: v2,
        class: `ofd-viewer`
      }, [
        y.value === `loading` ? (l(), t(`div`, m, d2(345))) : y.value === d2(331) ? (l(), t(d2(330), h, r(b.value), 1)) : i(``, true),
        s(`div`, {
          ref_key: d2(335),
          ref: g2,
          class: `ofd-stage`
        }, null, 512)
      ], 512));
    }
  }), [
    [
      `__scopeId`,
      `data-v-48238ef6`
    ]
  ]);
  function _(e2, t2) {
    return e2 -= 330, v()[e2];
  }
  function v() {
    let e2 = [
      `1694987BMpWWf`,
      `firstChild`,
      `width`,
      `578436AwABUS`,
      `56CCZjNb`,
      `186588oVrLbA`,
      `ready`,
      `div`,
      `error`,
      `6939459gBfAhZ`,
      `21YRxZqA`,
      `loading`,
      `stage`,
      `message`,
      `11pthYSo`,
      `add`,
      `createDocumentFragment`,
      `10yHZUZa`,
      `value`,
      `5250954HWLzBJ`,
      `14057590igJrOw`,
      `2189948ADWBSy`,
      `\u6B63\u5728\u89E3\u6790 OFD...`,
      `apply`
    ];
    return v = function() {
      return e2;
    }, v();
  }
});
export {
  __tla,
  g as default
};
