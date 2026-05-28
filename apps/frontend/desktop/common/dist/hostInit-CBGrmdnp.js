import { t as e } from "./preload-helper-zJ_50EbN.js";
let r, i;
let __tla = (async () => {
  var _a, _b;
  var t = `__mf_module_cache__`;
  globalThis[t] || (globalThis[t] = {
    share: {},
    remote: {}
  }), (_a = globalThis[t]).share || (_a.share = {}), (_b = globalThis[t]).remote || (_b.remote = {});
  let n;
  n = globalThis[t];
  i = async function() {
    return r || (r = (async () => {
      let t2 = await (await e(() => import("./remoteEntry.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [])).init(), r2 = {
        vue: {
          shareConfig: {
            singleton: true,
            requiredVersion: `^3.5.17`
          }
        }
      }, i2 = (e2) => {
        let t3 = e2;
        for (let e3 = 0; e3 < 5; e3++) {
          let e4 = t3 == null ? void 0 : t3.default;
          if (!e4 || typeof e4 != `object`) break;
          let n2 = Object.keys(t3).filter((e5) => e5 !== `default`).map((e5) => t3[e5]);
          if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
          t3 = e4;
        }
        return t3;
      };
      for (let [e2, a] of Object.entries(r2)) n.share[e2] === void 0 && await t2.loadShare(e2, {
        customShareInfo: {
          shareConfig: a.shareConfig
        }
      }).then((t3) => {
        let r3 = typeof t3 == `function` ? t3() : t3;
        return Promise.resolve(r3).then((t4) => {
          n.share[e2] = i2(t4);
        });
      });
      return await Promise.all([]), t2;
    })()), r;
  };
  r = i();
})();
export {
  __tla,
  r as hostInitPromise,
  i as initHost
};
