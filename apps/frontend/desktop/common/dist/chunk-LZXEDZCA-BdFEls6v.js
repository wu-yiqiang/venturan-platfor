const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["dagre-BM42HDAG-j5WhfcrW.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","chunk-3OPIFGDE-tadvN-H3.js","chunk-5ZQYHXKU-BklVe06k.js","chunk-AGHRB4JF-CBHSUHQe.js","chunk-CSCIHK7Q-pN0du8p0.js","dist2-CVEWu2Ar.js","src-B18GHWxx.js","chunk-L5ZTLDWV-CfFez56L.js","chunk-NZK2D7GU-Bb3JacnP.js","chunk-O5CBEL6O-CERCp6yT.js","rough.esm-Ct7jHvNv.js","chunk-BSJP7CBP-DNSq_z0Y.js","chunk-KSCS5N6A-yNMqidgz.js","dagre-CDN7GhC3.js","graphlib-DTFeuqXt.js","index-IvLr1-5o.css","cose-bilkent-S5V4N54A-CrPZflVE.js","cytoscape.esm-BopBxywr.js"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { m as t, p as n, __tla as __tla_0 } from "./index-D-g3WoLo.js";
import { n as r, t as i } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { g as a, z as o, __tla as __tla_1 } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { u as s } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { i as c, o as l, t as u } from "./chunk-3OPIFGDE-tadvN-H3.js";
import { a as d, i as f, r as p, t as m } from "./chunk-KSCS5N6A-yNMqidgz.js";
let b, S, x;
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
  var h = g;
  function g(e2, t2) {
    return e2 -= 370, _()[e2];
  }
  function _() {
    let e2 = `9036vqKqpf,0.06,-drop-shadow,height,100%,16583FKNAIp,130%,name,registerLayoutLoaders,cose-bilkent,11122389fbTZPu,150%,458300QScuip,486uzIEkA,144dMZAzo,append,1341CNmMGr,Unknown layout algorithm: ,8937805AXverv,10OoxUXT,6eiDCKn,2706231HBvdOm,291512FRLjSq,loader,layoutAlgorithm,attr,stop-opacity`.split(`,`);
    return _ = function() {
      return e2;
    }, _();
  }
  (function(e2, t2) {
    let n2 = g, r2 = e2();
    for (; ; ) try {
      if (-parseInt(n2(387)) / 1 * (parseInt(n2(379)) / 2) + parseInt(n2(383)) / 3 * (-parseInt(n2(394)) / 4) + parseInt(n2(385)) / 5 + -parseInt(n2(380)) / 6 * (parseInt(n2(372)) / 7) + parseInt(n2(389)) / 8 + parseInt(n2(377)) / 9 * (-parseInt(n2(386)) / 10) + parseInt(n2(388)) / 11 * (parseInt(n2(381)) / 12) === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(_, 963869), t();
  let v, y;
  v = {
    common: a,
    getConfig: o,
    insertCluster: c,
    insertEdge: p,
    insertEdgeLabel: d,
    insertMarkers: f,
    insertNode: l,
    interpolateToCurve: s,
    labelHelper: u,
    log: r,
    positionEdgeLabel: m
  };
  y = {};
  b = i((e2) => {
    let t2 = g;
    for (let n2 of e2) y[n2[t2(374)]] = n2;
  }, h(375));
  i(() => {
    let t2 = h;
    b([
      {
        name: `dagre`,
        loader: i(n(function* () {
          return yield e(() => import("./dagre-BM42HDAG-j5WhfcrW.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));
        }), `loader`)
      },
      {
        name: t2(376),
        loader: i(n(function* () {
          return yield e(() => import("./cose-bilkent-S5V4N54A-CrPZflVE.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([19,1,2,3,6,20,9,18]));
        }), t2(390))
      }
    ]);
  }, `registerDefaultLayoutLoaders`)();
  x = i((function() {
    var e2 = n(function* (e3, t2) {
      let n2 = g;
      if (!(e3[n2(391)] in y)) throw Error(n2(384) + e3.layoutAlgorithm);
      if (e3.diagramId) for (let t3 of e3.nodes) {
        let n3 = t3.domId || t3.id;
        t3.domId = e3.diagramId + `-` + n3;
      }
      let r2 = y[e3.layoutAlgorithm], i2 = yield r2.loader(), { theme: a2, themeVariables: o2 } = e3.config, { useGradient: s2, gradientStart: c2, gradientStop: l2 } = o2, u2 = t2[n2(392)](`id`);
      if (t2.append(`defs`)[n2(382)](`filter`).attr(`id`, u2 + n2(396)).attr(n2(370), `130%`).attr(`width`, n2(373))[n2(382)](`feDropShadow`)[n2(392)](`dx`, `4`)[n2(392)](`dy`, `4`).attr(`stdDeviation`, 0).attr(`flood-opacity`, `0.06`).attr(`flood-color`, a2 != null && a2.includes(`dark`) ? `#FFFFFF` : `#000000`), t2.append(`defs`).append(`filter`).attr(`id`, u2 + `-drop-shadow-small`)[n2(392)](n2(370), `150%`)[n2(392)](`width`, n2(378)).append(`feDropShadow`).attr(`dx`, `2`)[n2(392)](`dy`, `2`).attr(`stdDeviation`, 0).attr(`flood-opacity`, n2(395)).attr(`flood-color`, a2 != null && a2.includes(`dark`) ? `#FFFFFF` : `#000000`), s2) {
        let e4 = t2.append(`linearGradient`).attr(`id`, t2.attr(`id`) + `-gradient`).attr(`gradientUnits`, `objectBoundingBox`).attr(`x1`, `0%`).attr(`y1`, `0%`).attr(`x2`, `100%`).attr(`y2`, `0%`);
        e4.append(`svg:stop`).attr(`offset`, `0%`).attr(`stop-color`, c2).attr(n2(393), 1), e4.append(`svg:stop`)[n2(392)](`offset`, n2(371)).attr(`stop-color`, l2).attr(`stop-opacity`, 1);
      }
      return i2.render(e3, t2, v, {
        algorithm: r2.algorithm
      });
    });
    return function(t2, n2) {
      return e2.apply(this, arguments);
    };
  })(), `render`);
  S = i((e2 = ``, { fallback: t2 = `dagre` } = {}) => {
    if (e2 in y) return e2;
    if (t2 in y) return r.warn(`Layout algorithm ` + e2 + ` is not registered. Using ` + t2 + ` as fallback.`), t2;
    throw Error(`Both layout algorithms ` + e2 + ` and ` + t2 + ` are not registered.`);
  }, `getRegisteredLayoutAlgorithm`);
});
export {
  __tla,
  b as n,
  S as r,
  x as t
};
