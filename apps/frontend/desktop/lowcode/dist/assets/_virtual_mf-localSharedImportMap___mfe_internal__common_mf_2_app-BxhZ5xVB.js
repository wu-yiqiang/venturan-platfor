import { __tla as __tla_0 } from "./dist-D2emLcM9.js";
import { t as e } from "./preload-helper-zJ_50EbN.js";
let r, n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let t;
  t = {
    vue: async () => await e(() => import("./_virtual_mf___mfe_internal__common_mf_2_app__prebuild__vue__prebuild__-IacaeI8G.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [])
  };
  n = {
    vue: {
      name: `vue`,
      version: `3.5.17`,
      scope: [
        `default`
      ],
      loaded: false,
      from: `__mfe_internal__common-app`,
      async get() {
        n.vue.loaded = true;
        let { vue: e2 } = t, r2 = {
          ...await e2()
        };
        return Object.defineProperty(r2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r2;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `^3.5.17`
      }
    }
  };
  r = [
    {
      entryGlobalName: `http://localhost:8980/dist/remoteEntry.js`,
      name: `components_center`,
      type: `var`,
      entry: `http://localhost:8980/dist/remoteEntry.js`,
      shareScope: `default`
    }
  ];
});
export {
  __tla,
  r as usedRemotes,
  n as usedShared
};
