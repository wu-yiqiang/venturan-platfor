import { t as e, __tla as __tla_0 } from "./dist-D2emLcM9.js";
import { t } from "./preload-helper-zJ_50EbN.js";
let h, g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a, _b;
  typeof __VUE_HMR_RUNTIME__ > `u` && (globalThis.__VUE_HMR_RUNTIME__ = {
    createRecord() {
    },
    rerender() {
    },
    reload() {
    }
  });
  var n = `__mf_init__virtual:mf:__mfe_internal__common_mf_2_app__mf_v__runtimeInit__mf_v__.js__`, r = globalThis[n];
  if (!r) {
    let e2, t2, i2 = new Promise((n2, r2) => {
      e2 = n2, t2 = r2;
    });
    r = globalThis[n] = {
      initPromise: i2,
      initResolve: e2,
      initReject: t2
    }, typeof window > `u` && e2({
      loadRemote: function() {
        return Promise.resolve(void 0);
      },
      loadShare: function() {
        return Promise.resolve(void 0);
      }
    });
  }
  var i = r.initResolve, a = `__mf_module_cache__`;
  globalThis[a] || (globalThis[a] = {
    share: {},
    remote: {}
  }), (_a = globalThis[a]).share || (_a.share = {}), (_b = globalThis[a]).remote || (_b.remote = {});
  var o = globalThis[a], s = {}, c = `default`, l = `__mfe_internal__common-app`, u, d;
  async function f(e2) {
    for (let t2 = 0; ; t2++) try {
      return await e2();
    } catch (e3) {
      throw e3;
    }
  }
  async function p() {
    return u || (u = f(() => t(() => import("./_virtual_mf-localSharedImportMap___mfe_internal__common_mf_2_app-BxhZ5xVB.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [])).catch((e2) => {
      throw u = void 0, e2;
    })), u;
  }
  async function m() {
    return d || (d = f(() => t(() => import("./virtualExposes-BV-YRH5c.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [])).then((e2) => e2.default ?? e2).catch((e2) => {
      throw d = void 0, e2;
    })), d;
  }
  h = async function(n2 = {}, r2 = []) {
    var _a2, _b2;
    let { usedShared: a2, usedRemotes: u2 } = await p();
    if (o.share.vue === void 0) {
      let e2 = await t(() => import("./_virtual_mf___mfe_internal__common_mf_2_app__loadShare__vue__loadShare__-JBUo7Wmp.js").then(async (m3) => {
        await m3.__tla;
        return m3;
      }), []), n3 = ((e3) => {
        let t2 = e3;
        for (let e4 = 0; e4 < 5; e4++) {
          let e5 = t2 == null ? void 0 : t2.default;
          if (!e5 || typeof e5 != `object`) break;
          let n4 = Object.keys(t2).filter((e6) => e6 !== `default`).map((e6) => t2[e6]);
          if (n4.length > 0 && n4.some((e6) => e6 !== void 0)) break;
          t2 = e5;
        }
        return t2;
      })(e2), r3 = n3 === e2 ? {
        ...e2
      } : n3;
      Object.defineProperty(r3, "__esModule", {
        value: true,
        enumerable: false
      }), o.share.vue = r3;
    }
    let d2 = e({
      name: l,
      remotes: u2,
      shared: a2,
      plugins: [],
      shareStrategy: `version-first`
    });
    var m2 = s[c];
    if (m2 || (m2 = s[c] = {
      from: l
    }), !(r2.indexOf(m2) >= 0)) {
      r2.push(m2), d2.initShareScopeMap(`default`, n2), i(d2);
      try {
        await f(async () => {
          await Promise.all(await d2.initializeSharing(`default`, {
            strategy: `version-first`,
            from: `build`,
            initScope: r2
          }));
        });
      } catch (e2) {
        console.error(`[Module Federation]`, e2);
      }
      for (let [e2, t2] of Object.entries(a2)) {
        if (((_a2 = t2.shareConfig) == null ? void 0 : _a2.import) !== false || o.share[e2] !== void 0) continue;
        let r3 = (e3) => {
          let t3 = e3;
          for (let e4 = 0; e4 < 5; e4++) {
            let e5 = t3 == null ? void 0 : t3.default;
            if (!e5 || typeof e5 != `object`) break;
            let n3 = Object.keys(t3).filter((e6) => e6 !== `default`).map((e6) => t3[e6]);
            if (n3.length > 0 && n3.some((e6) => e6 !== void 0)) break;
            t3 = e5;
          }
          return t3;
        }, i2 = n2 == null ? void 0 : n2[e2], a3 = i2 && i2[Object.keys(i2)[0]];
        if (!a3) continue;
        let s2 = a3.lib || (a3.loading ? await a3.loading : await ((_b2 = a3.get) == null ? void 0 : _b2.call(a3))), c2 = typeof s2 == `function` ? s2() : s2, l2 = await Promise.resolve(c2);
        o.share[e2] = r3(l2);
      }
      return d2;
    }
  };
  g = async function(e2) {
    let t2 = await m();
    if (!(e2 in t2)) throw Error(`[Module Federation] Module ${e2} does not exist in container.`);
    return t2[e2]().then((e3) => () => e3);
  };
});
export {
  __tla,
  h as n,
  g as t
};
