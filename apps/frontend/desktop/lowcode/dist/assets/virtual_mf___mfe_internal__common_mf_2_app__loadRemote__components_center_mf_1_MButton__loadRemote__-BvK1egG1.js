import { t as e, __tla as __tla_0 } from "./_virtual_mf___mfe_internal__common_mf_2_app__H_A_I__hostAutoInit__H_A_I__-DIscsODo.js";
let o, a, s;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a, _b;
  var t = `__mf_module_cache__`;
  globalThis[t] || (globalThis[t] = {
    share: {},
    remote: {}
  }), (_a = globalThis[t]).share || (_a.share = {}), (_b = globalThis[t]).remote || (_b.remote = {});
  var n = globalThis[t], r, i = n.remote[`components_center/MButton`];
  if (i === void 0) {
    let t2 = `__mf_pending__components_center/MButton`;
    n.remote[t2] || (n.remote[t2] = e.then((e2) => e2.loadRemote(`components_center/MButton`)).then((e2) => (n.remote[`components_center/MButton`] = e2, delete n.remote[t2], e2)).catch((e2) => {
      throw delete n.remote[t2], e2;
    })), r = n.remote[t2], i = {};
  }
  if (r) {
    let e2 = await r;
    e2 !== void 0 && (i = e2);
  }
  a = i;
  o = Promise.resolve(i);
  s = (i == null ? void 0 : i.__mf_is_remote_proxy) ? i : (i == null ? void 0 : i.__esModule) ? i.default : i.default ?? i;
});
export {
  o as __mf_remote_pending,
  a as __moduleExports,
  __tla,
  s as default
};
