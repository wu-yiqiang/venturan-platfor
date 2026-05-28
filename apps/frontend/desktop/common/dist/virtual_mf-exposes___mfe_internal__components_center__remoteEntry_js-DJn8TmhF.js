const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["MButton-CS9ESJLj.js","_plugin-vue_export-helper-BDNMzG2s.js","MButton-x1XGuNl0.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
let o;
let __tla = (async () => {
  var t = {}, n = /* @__PURE__ */ new Set(), r = Promise.resolve();
  async function i(e2) {
    let t2 = r.then(e2, e2);
    return r = t2.then(() => void 0, () => void 0), t2;
  }
  async function a(e2) {
    if (typeof document > `u`) return;
    let r2 = t[e2] || [];
    await Promise.all(r2.map((e3) => {
      let t2 = new URL(e3, import.meta.url).href;
      return n.has(t2) || (n.add(t2), document.querySelector(`link[rel="stylesheet"][data-mf-href="${t2}"]`)) ? Promise.resolve() : new Promise((e4, n2) => {
        let r3 = document.createElement(`link`);
        r3.rel = `stylesheet`, r3.href = t2, r3.setAttribute(`data-mf-href`, t2), r3.onload = () => e4(), r3.onerror = () => n2(Error(`[Module Federation] Failed to load CSS asset: ${t2}`)), document.head.appendChild(r3);
      });
    }));
  }
  o = {
    "./MButton": async () => {
      await a(`./MButton`);
      let t2 = await i(() => e(() => import("./MButton-CS9ESJLj.js").then(async (m) => {
        await m.__tla;
        return m;
      }), __vite__mapDeps([0,1,2]))), n2 = {};
      return Object.assign(n2, t2), Object.defineProperty(n2, "__esModule", {
        value: true,
        enumerable: false
      }), n2;
    }
  };
})();
export {
  __tla,
  o as t
};
