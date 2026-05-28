import { t as e } from "./preload-helper-zJ_50EbN.js";
import { __tla as __tla_0 } from "./virtual_mf-REMOTE_ENTRY_ID___mfe_internal__components_center__remoteEntry_js-m358Udq8.js";
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
    vue: async () => await e(() => import("./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js").then(async (m) => {
      await m.__tla;
      return m;
    }).then((e2) => e2.lt), [])
  };
  n = {
    vue: {
      name: `vue`,
      version: `3.5.17`,
      scope: [
        `default`
      ],
      loaded: false,
      from: `__mfe_internal__components_center`,
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
  r = [];
});
export {
  __tla,
  r as usedRemotes,
  n as usedShared
};
