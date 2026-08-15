import { t as e } from "./preload-helper-zJ_50EbN.js";
let In;
let __tla = (async () => {
  var t = `FEDERATION_DEBUG`, n = {
    AT: `@`,
    HYPHEN: `-`,
    SLASH: `/`
  }, r = {
    [n.AT]: `scope_`,
    [n.HYPHEN]: `_`,
    [n.SLASH]: `__`
  };
  r[n.AT], n.AT, r[n.HYPHEN], n.HYPHEN, r[n.SLASH], n.SLASH;
  var i = (function(e2) {
    return e2[e2.UNKNOWN = 1] = `UNKNOWN`, e2[e2.CALCULATED = 2] = `CALCULATED`, e2[e2.NO_USE = 0] = `NO_USE`, e2;
  })({});
  function a() {
    return true;
  }
  function o() {
    return typeof navigator < `u` && (navigator == null ? void 0 : navigator.product) === `ReactNative`;
  }
  function s() {
    try {
      if (a() && window.localStorage) return !!localStorage.getItem(t);
    } catch {
      return false;
    }
    return false;
  }
  function c() {
    return typeof process < `u` && {}.FEDERATION_DEBUG ? !!{}.FEDERATION_DEBUG : typeof FEDERATION_DEBUG < `u` && FEDERATION_DEBUG ? true : s();
  }
  var l = `[ Federation Runtime ]`, u = function(...e2) {
    return e2.length ? e2.reduce((e3, t2) => t2 ? e3 ? `${e3}:${t2}` : t2 : e3, ``) : ``;
  }, d = (e2, t2) => {
    if (`getPublicPath` in e2) {
      let n2;
      return n2 = e2.getPublicPath.startsWith(`function`) ? Function(`return ` + e2.getPublicPath)()() : Function(e2.getPublicPath)(), `${n2}${t2}`;
    } else if (`publicPath` in e2) return !a() && !o() && `ssrPublicPath` in e2 && typeof e2.ssrPublicPath == `string` ? `${e2.ssrPublicPath}${t2}` : `${e2.publicPath}${t2}`;
    else return console.warn(`Cannot get resource URL. If in debug mode, please ignore.`, e2, t2), ``;
  }, f = (e2) => {
    console.warn(`${l}: ${e2}`);
  };
  function p(e2) {
    try {
      return JSON.stringify(e2, null, 2);
    } catch {
      return ``;
    }
  }
  var m = (e2, t2) => {
    if (!e2) return t2;
    let n2 = ((e3) => {
      if (e3 === `.`) return ``;
      if (e3.startsWith(`./`)) return e3.replace(`./`, ``);
      if (e3.startsWith(`/`)) {
        let t3 = e3.slice(1);
        return t3.endsWith(`/`) ? t3.slice(0, -1) : t3;
      }
      return e3;
    })(e2);
    return n2 ? n2.endsWith(`/`) ? `${n2}${t2}` : `${n2}/${t2}` : t2;
  };
  function ee(e2) {
    return e2.replace(/#.*$/, ``).replace(/\?.*$/, ``).replace(/\/[^\/]+$/, `/`);
  }
  function te(e2, t2 = {}) {
    var _a;
    let { remotes: n2 = {}, overrides: r2 = {}, version: i2 } = t2, a2, o2 = () => `publicPath` in e2.metaData ? (e2.metaData.publicPath === `auto` || e2.metaData.publicPath === ``) && i2 ? ee(i2) : e2.metaData.publicPath : e2.metaData.getPublicPath, s2 = Object.keys(r2), c2 = {};
    Object.keys(n2).length || (c2 = ((_a = e2.remotes) == null ? void 0 : _a.reduce((e3, t3) => {
      let n3, i3 = t3.federationContainerName;
      return n3 = s2.includes(i3) ? r2[i3] : `version` in t3 ? t3.version : t3.entry, e3[i3] = {
        matchedVersion: n3
      }, e3;
    }, {})) || {}), Object.keys(n2).forEach((e3) => c2[e3] = {
      matchedVersion: s2.includes(e3) ? r2[e3] : n2[e3]
    });
    let { remoteEntry: { path: l2, name: u2, type: d2 }, types: f2 = {
      path: ``,
      name: ``,
      zip: ``,
      api: ``
    }, buildInfo: { buildVersion: p2 }, globalName: te2, ssrRemoteEntry: h2 } = e2.metaData, { exposes: ne2 } = e2, g2 = {
      version: i2 || ``,
      buildVersion: p2,
      globalName: te2,
      remoteEntry: m(l2, u2),
      remoteEntryType: d2,
      remoteTypes: m(f2.path, f2.name),
      remoteTypesZip: f2.zip || ``,
      remoteTypesAPI: f2.api || ``,
      remotesInfo: c2,
      shared: e2 == null ? void 0 : e2.shared.map((e3) => ({
        assets: e3.assets,
        sharedName: e3.name,
        version: e3.version,
        usedExports: e3.referenceExports || []
      })),
      modules: ne2 == null ? void 0 : ne2.map((e3) => ({
        moduleName: e3.name,
        modulePath: e3.path,
        assets: e3.assets
      }))
    };
    if (`publicPath` in e2.metaData ? (a2 = {
      ...g2,
      publicPath: o2()
    }, typeof e2.metaData.ssrPublicPath == `string` && (a2.ssrPublicPath = e2.metaData.ssrPublicPath)) : a2 = {
      ...g2,
      getPublicPath: o2()
    }, h2) {
      let e3 = m(h2.path, h2.name);
      a2.ssrRemoteEntry = e3, a2.ssrRemoteEntryType = h2.type || `commonjs-module`;
    }
    return a2;
  }
  function h(e2) {
    return !!(`remoteEntry` in e2 && e2.remoteEntry.includes(`.json`));
  }
  var ne = `[ Module Federation ]`, g = console, re = [
    `logger.ts`,
    `logger.js`,
    `captureStackTrace`,
    `Logger.emit`,
    `Logger.log`,
    `Logger.info`,
    `Logger.warn`,
    `Logger.error`,
    `Logger.debug`
  ];
  function ie() {
    try {
      let e2 = Error().stack;
      if (!e2) return;
      let [, ...t2] = e2.split(`
`), n2 = t2.filter((e3) => !re.some((t3) => e3.includes(t3)));
      return n2.length ? `Stack trace:
${n2.slice(0, 5).join(`
`)}` : void 0;
    } catch {
      return;
    }
  }
  var ae = class {
    constructor(e2, t2 = g) {
      this.prefix = e2, this.delegate = t2 ?? g;
    }
    setPrefix(e2) {
      this.prefix = e2;
    }
    setDelegate(e2) {
      this.delegate = e2 ?? g;
    }
    emit(e2, t2) {
      let n2 = this.delegate, r2 = c() ? ie() : void 0, i2 = r2 ? [
        ...t2,
        r2
      ] : t2, a2 = (() => {
        switch (e2) {
          case `log`:
            return [
              `log`,
              `info`
            ];
          case `info`:
            return [
              `info`,
              `log`
            ];
          case `warn`:
            return [
              `warn`,
              `info`,
              `log`
            ];
          case `error`:
            return [
              `error`,
              `warn`,
              `log`
            ];
          default:
            return [
              `debug`,
              `log`
            ];
        }
      })();
      for (let e3 of a2) {
        let t3 = n2[e3];
        if (typeof t3 == `function`) {
          t3.call(n2, this.prefix, ...i2);
          return;
        }
      }
      for (let e3 of a2) {
        let t3 = g[e3];
        if (typeof t3 == `function`) {
          t3.call(g, this.prefix, ...i2);
          return;
        }
      }
    }
    log(...e2) {
      this.emit(`log`, e2);
    }
    warn(...e2) {
      this.emit(`warn`, e2);
    }
    error(...e2) {
      this.emit(`error`, e2);
    }
    success(...e2) {
      this.emit(`info`, e2);
    }
    info(...e2) {
      this.emit(`info`, e2);
    }
    ready(...e2) {
      this.emit(`info`, e2);
    }
    debug(...e2) {
      c() && this.emit(`debug`, e2);
    }
  };
  function oe(e2) {
    return new ae(e2);
  }
  function se(e2) {
    let t2 = new ae(e2);
    return Object.defineProperty(t2, "__mf_infrastructure_logger__", {
      value: true,
      enumerable: false,
      configurable: false
    }), t2;
  }
  oe(ne), se(ne);
  async function ce(e2, t2) {
    try {
      return await e2();
    } catch (e3) {
      !t2 && f(e3);
      return;
    }
  }
  function le(e2, t2) {
    let n2 = /^(https?:)?\/\//i;
    return e2.replace(n2, ``).replace(/\/$/, ``) === t2.replace(n2, ``).replace(/\/$/, ``);
  }
  function ue(e2) {
    let t2 = null, n2 = true, r2 = 2e4, i2, a2 = document.getElementsByTagName(`script`);
    for (let r3 = 0; r3 < a2.length; r3++) {
      let i3 = a2[r3], o3 = i3.getAttribute(`src`);
      if (o3 && le(o3, e2.url)) {
        t2 = i3, n2 = false;
        break;
      }
    }
    if (!t2) {
      let n3 = e2.attrs;
      t2 = document.createElement(`script`), t2.type = (n3 == null ? void 0 : n3.type) === `module` ? `module` : `text/javascript`;
      let i3;
      e2.createScriptHook && (i3 = e2.createScriptHook(e2.url, e2.attrs), i3 instanceof HTMLScriptElement ? t2 = i3 : typeof i3 == `object` && (`script` in i3 && i3.script && (t2 = i3.script), `timeout` in i3 && i3.timeout && (r2 = i3.timeout))), t2.src || (t2.src = e2.url), n3 && !i3 && Object.keys(n3).forEach((e3) => {
        t2 && (e3 === `async` || e3 === `defer` ? t2[e3] = n3[e3] : t2.getAttribute(e3) || t2.setAttribute(e3, n3[e3]));
      });
    }
    let o2 = null, s2 = typeof window < `u` ? (t3) => {
      if (t3.filename && le(t3.filename, e2.url)) {
        let n3 = Error(`ScriptExecutionError: Script "${e2.url}" loaded but threw a runtime error during execution: ${t3.message} (${t3.filename}:${t3.lineno}:${t3.colno})`);
        n3.name = `ScriptExecutionError`, o2 = n3;
      }
    } : null;
    s2 && window.addEventListener(`error`, s2);
    let c2 = async (n3, r3) => {
      clearTimeout(i2), s2 && window.removeEventListener(`error`, s2);
      let a3 = () => {
        if ((r3 == null ? void 0 : r3.type) === `error`) {
          let t3 = Error((r3 == null ? void 0 : r3.isTimeout) ? `ScriptNetworkError: Script "${e2.url}" timed out.` : `ScriptNetworkError: Failed to load script "${e2.url}" - the script URL is unreachable or the server returned an error (network failure, 404, CORS, etc.)`);
          t3.name = `ScriptNetworkError`, (e2 == null ? void 0 : e2.onErrorCallback) && (e2 == null ? void 0 : e2.onErrorCallback(t3));
        } else o2 ? (e2 == null ? void 0 : e2.onErrorCallback) && (e2 == null ? void 0 : e2.onErrorCallback(o2)) : (e2 == null ? void 0 : e2.cb) && (e2 == null ? void 0 : e2.cb());
      };
      if (t2 && (t2.onerror = null, t2.onload = null, ce(() => {
        let { needDeleteScript: n4 = true } = e2;
        n4 && (t2 == null ? void 0 : t2.parentNode) && t2.parentNode.removeChild(t2);
      }), n3 && typeof n3 == `function`)) {
        let e3 = n3(r3);
        if (e3 instanceof Promise) {
          let t3 = await e3;
          return a3(), t3;
        }
        return a3(), e3;
      }
      a3();
    };
    return t2.onerror = c2.bind(null, t2.onerror), t2.onload = c2.bind(null, t2.onload), i2 = setTimeout(() => {
      c2(null, {
        type: `error`,
        isTimeout: true
      });
    }, r2), {
      script: t2,
      needAttach: n2
    };
  }
  function de(e2) {
    let t2 = null, n2 = true, r2 = document.getElementsByTagName(`link`);
    for (let i3 = 0; i3 < r2.length; i3++) {
      let a2 = r2[i3], o2 = a2.getAttribute(`href`), s2 = a2.getAttribute(`rel`);
      if (o2 && le(o2, e2.url) && s2 === e2.attrs.rel) {
        t2 = a2, n2 = false;
        break;
      }
    }
    if (!t2) {
      t2 = document.createElement(`link`), t2.setAttribute(`href`, e2.url);
      let n3, r3 = e2.attrs;
      e2.createLinkHook && (n3 = e2.createLinkHook(e2.url, r3), n3 instanceof HTMLLinkElement && (t2 = n3)), r3 && !n3 && Object.keys(r3).forEach((e3) => {
        t2 && !t2.getAttribute(e3) && t2.setAttribute(e3, r3[e3]);
      });
    }
    let i2 = (n3, r3) => {
      let i3 = () => {
        (r3 == null ? void 0 : r3.type) === `error` ? (e2 == null ? void 0 : e2.onErrorCallback) && (e2 == null ? void 0 : e2.onErrorCallback(r3)) : (e2 == null ? void 0 : e2.cb) && (e2 == null ? void 0 : e2.cb());
      };
      if (t2 && (t2.onerror = null, t2.onload = null, ce(() => {
        let { needDeleteLink: n4 = true } = e2;
        n4 && (t2 == null ? void 0 : t2.parentNode) && t2.parentNode.removeChild(t2);
      }), n3)) {
        let e3 = n3(r3);
        return i3(), e3;
      }
      i3();
    };
    return t2.onerror = i2.bind(null, t2.onerror), t2.onload = i2.bind(null, t2.onload), {
      link: t2,
      needAttach: n2
    };
  }
  function fe(e2, t2) {
    let { attrs: n2 = {}, createScriptHook: r2 } = t2;
    return new Promise((t3, i2) => {
      let { script: a2, needAttach: o2 } = ue({
        url: e2,
        cb: t3,
        onErrorCallback: i2,
        attrs: {
          fetchpriority: `high`,
          ...n2
        },
        createScriptHook: r2,
        needDeleteScript: true
      });
      o2 && document.head.appendChild(a2);
    });
  }
  var pe = (e2) => `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${e2.split(`-`)[0].toLowerCase()}#${e2.toLowerCase()}`, me = (e2, t2, n2, r2) => {
    let i2 = [
      `${[
        t2[e2]
      ]} #${e2}`
    ];
    return n2 && i2.push(`args: ${JSON.stringify(n2)}`), i2.push(pe(e2)), r2 && i2.push(`Original Error Message:
 ${r2}`), i2.join(`
`);
  };
  function he(e2, t2, n2, r2, i2, a2) {
    return r2(me(e2, t2, n2, i2));
  }
  var _ = `[ Federation Runtime ]`, ge = oe(_);
  function v(e2, t2, n2, r2, i2) {
    e2 || (n2 === void 0 ? y(t2) : y(t2, n2, r2, void 0, i2));
  }
  function y(e2, t2, n2, r2, i2) {
    if (t2 !== void 0) return he(e2, t2, n2 ?? {}, (e3) => {
      throw Error(`${_}: ${e3}`);
    }, r2, i2);
    let a2 = e2;
    throw a2 instanceof Error ? (a2.message.startsWith(_) || (a2.message = `${_}: ${a2.message}`), a2) : Error(`${_}: ${a2}`);
  }
  function _e(e2) {
    e2 instanceof Error && (e2.message.startsWith(_) || (e2.message = `${_}: ${e2.message}`)), ge.warn(e2);
  }
  function ve(e2, t2) {
    return e2.findIndex((e3) => e3 === t2) === -1 && e2.push(t2), e2;
  }
  function b(e2) {
    return `version` in e2 && e2.version ? `${e2.name}:${e2.version}` : `entry` in e2 && e2.entry ? `${e2.name}:${e2.entry}` : `${e2.name}`;
  }
  function ye(e2) {
    return e2.entry !== void 0;
  }
  function be(e2) {
    return !e2.entry.includes(`.json`);
  }
  function xe(e2) {
    return e2 && typeof e2 == `object`;
  }
  var Se = Object.prototype.toString;
  function Ce(e2) {
    return Se.call(e2) === `[object Object]`;
  }
  function we(e2) {
    return Array.isArray(e2) ? e2 : [
      e2
    ];
  }
  function Te(e2) {
    return `remoteEntry` in e2 ? {
      url: e2.remoteEntry,
      type: e2.remoteEntryType,
      globalName: e2.globalName
    } : {
      url: ``,
      type: `global`,
      globalName: ``
    };
  }
  var Ee = (e2, t2) => {
    let n2;
    return n2 = e2.endsWith(`/`) ? e2.slice(0, -1) : e2, t2.startsWith(`.`) && (t2 = t2.slice(1)), n2 += t2, n2;
  }, x = typeof globalThis == `object` ? globalThis : window, S = (() => {
    try {
      return document.defaultView;
    } catch {
      return x;
    }
  })(), C = S;
  function w(e2, t2, n2) {
    Object.defineProperty(e2, t2, {
      value: n2,
      configurable: false,
      writable: true
    });
  }
  function T(e2, t2) {
    return Object.hasOwnProperty.call(e2, t2);
  }
  T(x, `__GLOBAL_LOADING_REMOTE_ENTRY__`) || w(x, `__GLOBAL_LOADING_REMOTE_ENTRY__`, {});
  var E = x.__GLOBAL_LOADING_REMOTE_ENTRY__;
  function De(e2) {
    var _a, _b, _c, _d, _e2, _f;
    T(e2, `__VMOK__`) && !T(e2, `__FEDERATION__`) && w(e2, `__FEDERATION__`, e2.__VMOK__), T(e2, `__FEDERATION__`) || (w(e2, `__FEDERATION__`, {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: /* @__PURE__ */ new Map()
    }), w(e2, `__VMOK__`, e2.__FEDERATION__)), (_a = e2.__FEDERATION__).__GLOBAL_PLUGIN__ ?? (_a.__GLOBAL_PLUGIN__ = []), (_b = e2.__FEDERATION__).__INSTANCES__ ?? (_b.__INSTANCES__ = []), (_c = e2.__FEDERATION__).moduleInfo ?? (_c.moduleInfo = {}), (_d = e2.__FEDERATION__).__SHARE__ ?? (_d.__SHARE__ = {}), (_e2 = e2.__FEDERATION__).__MANIFEST_LOADING__ ?? (_e2.__MANIFEST_LOADING__ = {}), (_f = e2.__FEDERATION__).__PRELOADED_MAP__ ?? (_f.__PRELOADED_MAP__ = /* @__PURE__ */ new Map());
  }
  De(x), De(S);
  function Oe(e2) {
    x.__FEDERATION__.__INSTANCES__.push(e2);
  }
  function ke() {
    return x.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
  }
  function Ae(e2, t2 = c()) {
    t2 && (x.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e2, x.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = `2.4.0`);
  }
  function D(e2, t2) {
    if (typeof t2 == `string`) {
      if (e2[t2]) return {
        value: e2[t2],
        key: t2
      };
      {
        let n2 = Object.keys(e2);
        for (let r2 of n2) {
          let [n3, i2] = r2.split(`:`), a2 = `${n3}:${t2}`, o2 = e2[a2];
          if (o2) return {
            value: o2,
            key: a2
          };
        }
        return {
          value: void 0,
          key: t2
        };
      }
    } else y(`getInfoWithoutType: "key" must be a string, got ${typeof t2} (${JSON.stringify(t2)}).`);
  }
  var je = () => S.__FEDERATION__.moduleInfo, Me = (e2, t2) => {
    let n2 = D(t2, b(e2)).value;
    if (n2 && !n2.version && `version` in e2 && e2.version && (n2.version = e2.version), n2) return n2;
    if (`version` in e2 && e2.version) {
      let { version: t3, ...n3 } = e2, r2 = b(n3), i2 = D(S.__FEDERATION__.moduleInfo, r2).value;
      if ((i2 == null ? void 0 : i2.version) === t3) return i2;
    }
  }, O = (e2) => Me(e2, S.__FEDERATION__.moduleInfo), Ne = (e2, t2) => {
    let n2 = b(e2);
    return S.__FEDERATION__.moduleInfo[n2] = t2, S.__FEDERATION__.moduleInfo;
  }, Pe = (e2) => (S.__FEDERATION__.moduleInfo = {
    ...S.__FEDERATION__.moduleInfo,
    ...e2
  }, () => {
    let t2 = Object.keys(e2);
    for (let e3 of t2) delete S.__FEDERATION__.moduleInfo[e3];
  }), Fe = (e2, t2) => {
    let n2 = t2 || `__FEDERATION_${e2}:custom__`;
    return {
      remoteEntryKey: n2,
      entryExports: x[n2]
    };
  }, Ie = () => S.__FEDERATION__.__GLOBAL_PLUGIN__, Le = (e2) => x.__FEDERATION__.__PRELOADED_MAP__.get(e2), Re = (e2) => x.__FEDERATION__.__PRELOADED_MAP__.set(e2, true), ze = `[0-9A-Za-z-]+`, Be = `(?:\\+(${ze}(?:\\.${ze})*))`, k = `0|[1-9]\\d*`, A = `[0-9]+`, Ve = `\\d*[a-zA-Z-][a-zA-Z0-9-]*`, He = `(?:${A}|${Ve})`, Ue = `(?:-?(${He}(?:\\.${He})*))`, We = `(?:${k}|${Ve})`, Ge = `(?:-(${We}(?:\\.${We})*))`, Ke = `${k}|x|X|\\*`, j = `[v=\\s]*(${Ke})(?:\\.(${Ke})(?:\\.(${Ke})(?:${Ge})?${Be}?)?)?`, qe = `^\\s*(${j})\\s+-\\s+(${j})\\s*$`, Je = `[v=\\s]*${`(${A})\\.(${A})\\.(${A})`}${Ue}?${Be}?`, Ye = `((?:<|>)?=?)`, Xe = `(\\s*)${Ye}\\s*(${Je}|${j})`, Ze = `(?:~>?)`, Qe = `(\\s*)${Ze}\\s+`, $e = `(?:\\^)`, et = `(\\s*)${$e}\\s+`, tt = `(<|>)?=?\\s*\\*`, nt = `^${$e}${j}$`, rt = `v?${`(${k})\\.(${k})\\.(${k})`}${Ge}?${Be}?`, it = `^${Ze}${j}$`, at = `^${Ye}\\s*${j}$`, ot = `^${Ye}\\s*(${rt})$|^$`, st = `^\\s*>=\\s*0.0.0\\s*$`;
  function M(e2) {
    return new RegExp(e2);
  }
  function N(e2) {
    return !e2 || e2.toLowerCase() === `x` || e2 === `*`;
  }
  function ct(...e2) {
    return (t2) => e2.reduce((e3, t3) => t3(e3), t2);
  }
  function lt(e2) {
    return e2.match(M(ot));
  }
  function ut(e2, t2, n2, r2) {
    let i2 = `${e2}.${t2}.${n2}`;
    return r2 ? `${i2}-${r2}` : i2;
  }
  function dt(e2) {
    return e2.replace(M(qe), (e3, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) => (t2 = N(n2) ? `` : N(r2) ? `>=${n2}.0.0` : N(i2) ? `>=${n2}.${r2}.0` : `>=${t2}`, s2 = N(c2) ? `` : N(l2) ? `<${Number(c2) + 1}.0.0-0` : N(u2) ? `<${c2}.${Number(l2) + 1}.0-0` : d2 ? `<=${c2}.${l2}.${u2}-${d2}` : `<=${s2}`, `${t2} ${s2}`.trim()));
  }
  function ft(e2) {
    return e2.replace(M(Xe), `$1$2$3`);
  }
  function pt(e2) {
    return e2.replace(M(Qe), `$1~`);
  }
  function mt(e2) {
    return e2.replace(M(et), `$1^`);
  }
  function ht(e2) {
    return e2.trim().split(/\s+/).map((e3) => e3.replace(M(nt), (e4, t2, n2, r2, i2) => N(t2) ? `` : N(n2) ? `>=${t2}.0.0 <${Number(t2) + 1}.0.0-0` : N(r2) ? t2 === `0` ? `>=${t2}.${n2}.0 <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.0 <${Number(t2) + 1}.0.0-0` : i2 ? t2 === `0` ? n2 === `0` ? `>=${t2}.${n2}.${r2}-${i2} <${t2}.${n2}.${Number(r2) + 1}-0` : `>=${t2}.${n2}.${r2}-${i2} <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.${r2}-${i2} <${Number(t2) + 1}.0.0-0` : t2 === `0` ? n2 === `0` ? `>=${t2}.${n2}.${r2} <${t2}.${n2}.${Number(r2) + 1}-0` : `>=${t2}.${n2}.${r2} <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.${r2} <${Number(t2) + 1}.0.0-0`)).join(` `);
  }
  function gt(e2) {
    return e2.trim().split(/\s+/).map((e3) => e3.replace(M(it), (e4, t2, n2, r2, i2) => N(t2) ? `` : N(n2) ? `>=${t2}.0.0 <${Number(t2) + 1}.0.0-0` : N(r2) ? `>=${t2}.${n2}.0 <${t2}.${Number(n2) + 1}.0-0` : i2 ? `>=${t2}.${n2}.${r2}-${i2} <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.${r2} <${t2}.${Number(n2) + 1}.0-0`)).join(` `);
  }
  function _t(e2) {
    return e2.split(/\s+/).map((e3) => e3.trim().replace(M(at), (e4, t2, n2, r2, i2, a2) => {
      let o2 = N(n2), s2 = o2 || N(r2), c2 = s2 || N(i2);
      return t2 === `=` && c2 && (t2 = ``), a2 = ``, o2 ? t2 === `>` || t2 === `<` ? `<0.0.0-0` : `*` : t2 && c2 ? (s2 && (r2 = 0), i2 = 0, t2 === `>` ? (t2 = `>=`, s2 ? (n2 = Number(n2) + 1, r2 = 0, i2 = 0) : (r2 = Number(r2) + 1, i2 = 0)) : t2 === `<=` && (t2 = `<`, s2 ? n2 = Number(n2) + 1 : r2 = Number(r2) + 1), t2 === `<` && (a2 = `-0`), `${t2 + n2}.${r2}.${i2}${a2}`) : s2 ? `>=${n2}.0.0${a2} <${Number(n2) + 1}.0.0-0` : c2 ? `>=${n2}.${r2}.0${a2} <${n2}.${Number(r2) + 1}.0-0` : e4;
    })).join(` `);
  }
  function vt(e2) {
    return e2.trim().replace(M(tt), ``);
  }
  function yt(e2) {
    return e2.trim().replace(M(st), ``);
  }
  function P(e2, t2) {
    return e2 = Number(e2) || e2, t2 = Number(t2) || t2, e2 > t2 ? 1 : e2 === t2 ? 0 : -1;
  }
  function bt(e2, t2) {
    let { preRelease: n2 } = e2, { preRelease: r2 } = t2;
    if (n2 === void 0 && r2) return 1;
    if (n2 && r2 === void 0) return -1;
    if (n2 === void 0 && r2 === void 0) return 0;
    for (let e3 = 0, t3 = n2.length; e3 <= t3; e3++) {
      let t4 = n2[e3], i2 = r2[e3];
      if (t4 !== i2) return t4 === void 0 && i2 === void 0 ? 0 : t4 ? i2 ? P(t4, i2) : -1 : 1;
    }
    return 0;
  }
  function F(e2, t2) {
    return P(e2.major, t2.major) || P(e2.minor, t2.minor) || P(e2.patch, t2.patch) || bt(e2, t2);
  }
  function xt(e2, t2) {
    return e2.version === t2.version;
  }
  function St(e2, t2) {
    switch (e2.operator) {
      case ``:
      case `=`:
        return xt(e2, t2);
      case `>`:
        return F(e2, t2) < 0;
      case `>=`:
        return xt(e2, t2) || F(e2, t2) < 0;
      case `<`:
        return F(e2, t2) > 0;
      case `<=`:
        return xt(e2, t2) || F(e2, t2) > 0;
      case void 0:
        return true;
      default:
        return false;
    }
  }
  function Ct(e2) {
    return ct(ht, gt, _t, vt)(e2);
  }
  function wt(e2) {
    return ct(dt, ft, pt, mt)(e2.trim()).split(/\s+/).join(` `);
  }
  function I(e2, t2) {
    if (!e2) return false;
    let n2 = lt(e2);
    if (!n2) return false;
    let [, r2, , i2, a2, o2, s2] = n2, c2 = {
      operator: r2,
      version: ut(i2, a2, o2, s2),
      major: i2,
      minor: a2,
      patch: o2,
      preRelease: s2 == null ? void 0 : s2.split(`.`)
    }, l2 = t2.split(`||`);
    for (let e3 of l2) {
      let t3 = e3.trim();
      if (!t3 || t3 === `*` || t3 === `x`) return true;
      try {
        let e4 = wt(t3);
        if (!e4.trim()) return true;
        let n3 = e4.split(` `).map((e5) => Ct(e5)).join(` `);
        if (!n3.trim()) return true;
        let r3 = n3.split(/\s+/).map((e5) => yt(e5)).filter(Boolean);
        if (r3.length === 0) continue;
        let i3 = true;
        for (let e5 of r3) {
          let t4 = lt(e5);
          if (!t4) {
            i3 = false;
            break;
          }
          let [, n4, , r4, a3, o3, s3] = t4;
          if (!St({
            operator: n4,
            version: ut(r4, a3, o3, s3),
            major: r4,
            minor: a3,
            patch: o3,
            preRelease: s3 == null ? void 0 : s3.split(`.`)
          }, c2)) {
            i3 = false;
            break;
          }
        }
        if (i3) return true;
      } catch (e4) {
        console.error(`[semver] Error processing range part "${t3}":`, e4);
        continue;
      }
    }
    return false;
  }
  var L = `default`, Tt = `global`;
  function Et(e2, t2, n2, r2) {
    var _a, _b;
    let a2;
    return a2 = `get` in e2 ? e2.get : `lib` in e2 ? () => Promise.resolve(e2.lib) : () => Promise.resolve(() => {
      y(`Cannot get shared "${n2}" from "${t2}": neither "get" nor "lib" is provided in the share config.`);
    }), ((_a = e2.shareConfig) == null ? void 0 : _a.eager) && ((_b = e2.treeShaking) == null ? void 0 : _b.mode) && y(`Invalid shared config for "${n2}" from "${t2}": cannot use both "eager: true" and "treeShaking.mode" simultaneously. Choose one strategy.`), {
      deps: [],
      useIn: [],
      from: t2,
      loading: null,
      ...e2,
      shareConfig: {
        requiredVersion: `^${e2.version}`,
        singleton: false,
        eager: false,
        strictVersion: false,
        ...e2.shareConfig
      },
      get: a2,
      loaded: (e2 == null ? void 0 : e2.loaded) || `lib` in e2 ? true : void 0,
      version: e2.version ?? `0`,
      scope: Array.isArray(e2.scope) ? e2.scope : [
        e2.scope ?? `default`
      ],
      strategy: (e2.strategy ?? r2) || `version-first`,
      treeShaking: e2.treeShaking ? {
        ...e2.treeShaking,
        mode: e2.treeShaking.mode ?? `server-calc`,
        status: e2.treeShaking.status ?? i.UNKNOWN,
        useIn: []
      } : void 0
    };
  }
  function Dt(e2, t2) {
    let n2 = t2.shared || {}, r2 = t2.name, i2 = Object.keys(n2).reduce((e3, i3) => {
      let a3 = we(n2[i3]);
      return e3[i3] = e3[i3] || [], a3.forEach((n3) => {
        e3[i3].push(Et(n3, r2, i3, t2.shareStrategy));
      }), e3;
    }, {}), a2 = {
      ...e2.shared
    };
    return Object.keys(i2).forEach((e3) => {
      a2[e3] ? i2[e3].forEach((t3) => {
        a2[e3].find((e4) => e4.version === t3.version) || a2[e3].push(t3);
      }) : a2[e3] = i2[e3];
    }), {
      allShareInfos: a2,
      newShareInfos: i2
    };
  }
  function R(e2, t2) {
    if (!e2) return false;
    let { status: n2, mode: r2 } = e2;
    return n2 === i.NO_USE ? false : n2 === i.CALCULATED ? true : r2 === `runtime-infer` ? t2 ? kt(e2, t2) : true : false;
  }
  function z(e2, t2) {
    let n2 = (e3) => {
      if (!Number.isNaN(Number(e3))) {
        let t3 = e3.split(`.`), n3 = e3;
        for (let e4 = 0; e4 < 3 - t3.length; e4++) n3 += `.0`;
        return n3;
      }
      return e3;
    };
    return !!I(n2(e2), `<=${n2(t2)}`);
  }
  var B = (e2, t2) => {
    let n2 = t2 || function(e3, t3) {
      return z(e3, t3);
    };
    return Object.keys(e2).reduce((e3, t3) => !e3 || n2(e3, t3) || e3 === `0` ? t3 : e3, 0);
  }, V = (e2) => !!e2.loaded || typeof e2.lib == `function`, Ot = (e2) => !!e2.loading, kt = (e2, t2) => {
    if (!e2 || !t2) return false;
    let { usedExports: n2 } = e2;
    return n2 ? !!t2.every((e3) => n2.includes(e3)) : false;
  };
  function At(e2, t2, n2, r2) {
    let i2 = e2[t2][n2], a2 = ``, o2 = R(r2), s2 = function(e3, t3) {
      return o2 ? i2[e3].treeShaking ? i2[t3].treeShaking ? !V(i2[e3].treeShaking) && z(e3, t3) : false : true : !V(i2[e3]) && z(e3, t3);
    };
    if (o2) {
      if (a2 = B(e2[t2][n2], s2), a2) return {
        version: a2,
        useTreesShaking: o2
      };
      o2 = false;
    }
    return {
      version: B(e2[t2][n2], s2),
      useTreesShaking: o2
    };
  }
  var H = (e2) => V(e2) || Ot(e2);
  function jt(e2, t2, n2, r2) {
    let i2 = e2[t2][n2], a2 = ``, o2 = R(r2), s2 = function(e3, t3) {
      if (o2) {
        if (!i2[e3].treeShaking) return true;
        if (!i2[t3].treeShaking) return false;
        if (H(i2[t3].treeShaking)) return H(i2[e3].treeShaking) ? !!z(e3, t3) : true;
        if (H(i2[e3].treeShaking)) return false;
      }
      return H(i2[t3]) ? H(i2[e3]) ? !!z(e3, t3) : true : H(i2[e3]) ? false : z(e3, t3);
    };
    if (o2) {
      if (a2 = B(e2[t2][n2], s2), a2) return {
        version: a2,
        useTreesShaking: o2
      };
      o2 = false;
    }
    return {
      version: B(e2[t2][n2], s2),
      useTreesShaking: o2
    };
  }
  function Mt(e2) {
    return e2 === `loaded-first` ? jt : At;
  }
  function U(e2, t2, n2, r2) {
    if (!e2) return;
    let { shareConfig: i2, scope: a2 = L, strategy: o2, treeShaking: s2 } = n2, c2 = Array.isArray(a2) ? a2 : [
      a2
    ];
    for (let a3 of c2) if (i2 && e2[a3] && e2[a3][t2]) {
      let { requiredVersion: c3 } = i2, { version: l2, useTreesShaking: u2 } = Mt(o2)(e2, a3, t2, s2), d2 = {
        shareScopeMap: e2,
        scope: a3,
        pkgName: t2,
        version: l2,
        GlobalFederation: C.__FEDERATION__,
        shareInfo: n2,
        resolver: () => {
          let r3 = e2[a3][t2][l2];
          if (i2.singleton) {
            if (typeof c3 == `string` && !I(l2, c3)) {
              let e3 = `Version ${l2} from ${l2 && r3.from} of shared singleton module ${t2} does not satisfy the requirement of ${n2.from} which needs ${c3})`;
              i2.strictVersion ? y(e3) : _e(e3);
            }
            return {
              shared: r3,
              useTreesShaking: u2
            };
          } else {
            if (c3 === false || c3 === `*` || I(l2, c3)) return {
              shared: r3,
              useTreesShaking: u2
            };
            let n3 = R(s2);
            if (n3) {
              for (let [r4, i3] of Object.entries(e2[a3][t2])) if (R(i3.treeShaking, s2 == null ? void 0 : s2.usedExports) && I(r4, c3)) return {
                shared: i3,
                useTreesShaking: n3
              };
            }
            for (let [n4, r4] of Object.entries(e2[a3][t2])) if (I(n4, c3)) return {
              shared: r4,
              useTreesShaking: false
            };
          }
        }
      };
      return (r2.emit(d2) || d2).resolver();
    }
  }
  function Nt() {
    return C.__FEDERATION__.__SHARE__;
  }
  function Pt(e2) {
    let { pkgName: t2, extraOptions: n2, shareInfos: r2 } = e2, i2 = (n2 == null ? void 0 : n2.resolver) ?? ((e3) => {
      if (!e3) return;
      let t3 = {};
      return e3.forEach((e4) => {
        t3[e4.version] = e4;
      }), t3[B(t3, function(e4, n3) {
        return !V(t3[e4]) && z(e4, n3);
      })];
    }), a2 = (e3) => typeof e3 == `object` && !!e3 && !Array.isArray(e3), o2 = (...e3) => {
      let t3 = {};
      for (let n3 of e3) if (n3) for (let [e4, r3] of Object.entries(n3)) {
        let n4 = t3[e4];
        a2(n4) && a2(r3) ? t3[e4] = o2(n4, r3) : r3 !== void 0 && (t3[e4] = r3);
      }
      return t3;
    };
    return o2(i2(r2[t2]), n2 == null ? void 0 : n2.customShareInfo);
  }
  var W = (e2, t2) => {
    e2.useIn || (e2.useIn = []), ve(e2.useIn, t2);
  };
  function G(e2, t2) {
    return t2 && e2.treeShaking ? e2.treeShaking : e2;
  }
  function Ft(e2, t2) {
    for (let n2 of e2) {
      let e3 = t2.startsWith(n2.name), r2 = t2.replace(n2.name, ``);
      if (e3) {
        if (r2.startsWith(`/`)) {
          let e4 = n2.name;
          return r2 = `.${r2}`, {
            pkgNameOrAlias: e4,
            expose: r2,
            remote: n2
          };
        } else if (r2 === ``) return {
          pkgNameOrAlias: n2.name,
          expose: `.`,
          remote: n2
        };
      }
      let i2 = n2.alias && t2.startsWith(n2.alias), a2 = n2.alias && t2.replace(n2.alias, ``);
      if (n2.alias && i2) {
        if (a2 && a2.startsWith(`/`)) {
          let e4 = n2.alias;
          return a2 = `.${a2}`, {
            pkgNameOrAlias: e4,
            expose: a2,
            remote: n2
          };
        } else if (a2 === ``) return {
          pkgNameOrAlias: n2.alias,
          expose: `.`,
          remote: n2
        };
      }
    }
  }
  function It(e2, t2) {
    for (let n2 of e2) if (t2 === n2.name || n2.alias && t2 === n2.alias) return n2;
  }
  var Lt = `RUNTIME-001`, Rt = `RUNTIME-002`, zt = `RUNTIME-003`, Bt = `RUNTIME-004`, Vt = `RUNTIME-005`, Ht = `RUNTIME-006`, Ut = `RUNTIME-007`, Wt = `RUNTIME-008`, Gt = `RUNTIME-009`, Kt = `RUNTIME-010`, qt = `RUNTIME-011`, Jt = `RUNTIME-012`, Yt = `TYPE-001`, Xt = `BUILD-001`, Zt = `BUILD-002`, K = {
    [Lt]: `Failed to get remoteEntry exports.`,
    [Rt]: `The remote entry interface does not contain "init"`,
    [zt]: `Failed to get manifest.`,
    [Bt]: `Failed to locate remote.`,
    [Vt]: `Invalid loadShareSync function call from bundler runtime`,
    [Ht]: `Invalid loadShareSync function call from runtime`,
    [Ut]: `Failed to get remote snapshot.`,
    [Wt]: `Failed to load script resources.`,
    [Gt]: `Please call createInstance first.`,
    [Kt]: `The name option cannot be changed after initialization. If you want to create a new instance with a different name, please use "createInstance" api.`,
    [qt]: `The remoteEntry URL is missing from the remote snapshot.`,
    [Jt]: `The getter for the shared module is not a function. This may be caused by setting "shared.import: false" without the host providing the corresponding lib.`
  }, Qt = {
    [Yt]: `Failed to generate type declaration. Execute the below cmd to reproduce and fix the error.`
  }, $t = {
    [Xt]: `Failed to find expose module.`,
    [Zt]: `PublicPath is required in prod mode.`
  };
  ({
    ...K,
    ...Qt,
    ...$t
  });
  var en = `.then(callbacks[0]).catch(callbacks[1])`;
  async function tn({ entry: t2, remoteEntryExports: n2 }) {
    return new Promise((r2, i2) => {
      try {
        n2 ? r2(n2) : typeof FEDERATION_ALLOW_NEW_FUNCTION < `u` ? Function(`callbacks`, `import("${t2}")${en}`)([
          r2,
          i2
        ]) : e(() => import(t2).then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then(r2), []).catch(i2);
      } catch (e2) {
        y(`Failed to load ESM entry from "${t2}". ${e2 instanceof Error ? e2.message : String(e2)}`);
      }
    });
  }
  async function nn({ entry: e2, remoteEntryExports: t2 }) {
    return new Promise((n2, r2) => {
      try {
        t2 ? n2(t2) : typeof __system_context__ > `u` ? System.import(e2).then(n2).catch(r2) : Function(`callbacks`, `System.import("${e2}")${en}`)([
          n2,
          r2
        ]);
      } catch (t3) {
        y(`Failed to load SystemJS entry from "${e2}". ${t3 instanceof Error ? t3.message : String(t3)}`);
      }
    });
  }
  function rn(e2, t2, n2) {
    let { remoteEntryKey: r2, entryExports: i2 } = Fe(e2, t2);
    return i2 || y(Lt, K, {
      remoteName: e2,
      remoteEntryUrl: n2,
      remoteEntryKey: r2
    }), i2;
  }
  async function an({ name: e2, globalName: t2, entry: n2, remoteInfo: r2, loaderHook: i2, getEntryUrl: a2 }) {
    let { entryExports: o2 } = Fe(e2, t2);
    if (o2) return o2;
    let s2 = a2 ? a2(n2) : n2;
    return fe(s2, {
      attrs: {},
      createScriptHook: (e3, t3) => {
        let n3 = i2.lifecycle.createScript.emit({
          url: e3,
          attrs: t3,
          remoteInfo: r2
        });
        if (n3 && (n3 instanceof HTMLScriptElement || `script` in n3 || `timeout` in n3)) return n3;
      }
    }).then(() => rn(e2, t2, n2), (t3) => {
      let n3 = t3 instanceof Error ? t3.message : String(t3);
      y(Wt, K, {
        remoteName: e2,
        resourceUrl: s2
      }, n3);
    });
  }
  async function on({ remoteInfo: e2, remoteEntryExports: t2, loaderHook: n2, getEntryUrl: r2 }) {
    let { entry: i2, entryGlobalName: a2, name: o2, type: s2 } = e2;
    switch (s2) {
      case `esm`:
      case `module`:
        return tn({
          entry: i2,
          remoteEntryExports: t2
        });
      case `system`:
        return nn({
          entry: i2,
          remoteEntryExports: t2
        });
      default:
        return an({
          entry: i2,
          globalName: a2,
          name: o2,
          remoteInfo: e2,
          loaderHook: n2,
          getEntryUrl: r2
        });
    }
  }
  function sn(e2) {
    let { entry: t2, name: n2 } = e2;
    return u(n2, t2);
  }
  async function cn(e2) {
    let { origin: t2, remoteEntryExports: n2, remoteInfo: r2, getEntryUrl: i2, _inErrorHandling: a2 = false } = e2, o2 = sn(r2);
    if (n2) return n2;
    if (!E[o2]) {
      let e3 = t2.remoteHandler.hooks.lifecycle.loadEntry, s2 = t2.loaderHook;
      E[o2] = e3.emit({
        loaderHook: s2,
        remoteInfo: r2,
        remoteEntryExports: n2
      }).then((e4) => e4 || on({
        remoteInfo: r2,
        remoteEntryExports: n2,
        loaderHook: s2,
        getEntryUrl: i2
      })).catch(async (e4) => {
        let i3 = sn(r2), o3 = e4 instanceof Error && e4.message.includes(`ScriptExecutionError`);
        if (e4 instanceof Error && e4.message.includes(`RUNTIME-008`) && !o3 && !a2) {
          let e5 = await t2.loaderHook.lifecycle.loadEntryError.emit({
            getRemoteEntry: (e6) => cn({
              ...e6,
              _inErrorHandling: true
            }),
            origin: t2,
            remoteInfo: r2,
            remoteEntryExports: n2,
            globalLoading: E,
            uniqueKey: i3
          });
          if (e5) return e5;
        }
        throw e4;
      });
    }
    return E[o2];
  }
  function q(e2) {
    return {
      ...e2,
      entry: `entry` in e2 ? e2.entry : ``,
      type: e2.type || `global`,
      entryGlobalName: e2.entryGlobalName || e2.name,
      shareScope: e2.shareScope || `default`
    };
  }
  function ln() {
    return typeof FEDERATION_BUILD_IDENTIFIER < `u` ? FEDERATION_BUILD_IDENTIFIER : ``;
  }
  function un(e2, t2) {
    let n2 = Ie(), r2 = [
      t2.hooks,
      t2.remoteHandler.hooks,
      t2.sharedHandler.hooks,
      t2.snapshotHandler.hooks,
      t2.loaderHook,
      t2.bridgeHook
    ];
    return n2.length > 0 && n2.forEach((t3) => {
      (e2 == null ? void 0 : e2.find((e3) => e3.name !== t3.name)) && e2.push(t3);
    }), e2 && e2.length > 0 && e2.forEach((e3) => {
      r2.forEach((n3) => {
        n3.applyPlugin(e3, t2);
      });
    }), e2;
  }
  function dn(e2) {
    return {
      name: e2.name,
      alias: e2.alias,
      entry: `entry` in e2 ? e2.entry : void 0,
      version: `version` in e2 ? e2.version : void 0,
      type: e2.type,
      entryGlobalName: e2.entryGlobalName,
      shareScope: e2.shareScope
    };
  }
  function J(e2) {
    var _a, _b, _c, _d, _e2, _f;
    let t2 = {};
    for (let [n2, r2] of Object.entries(e2.shared)) {
      let e3 = r2[0];
      e3 && (t2[n2] = {
        version: e3.version,
        singleton: (_a = e3.shareConfig) == null ? void 0 : _a.singleton,
        requiredVersion: ((_b = e3.shareConfig) == null ? void 0 : _b.requiredVersion) === false ? false : (_c = e3.shareConfig) == null ? void 0 : _c.requiredVersion,
        eager: e3.eager,
        strictVersion: (_d = e3.shareConfig) == null ? void 0 : _d.strictVersion
      });
    }
    return {
      project: {
        name: e2.name,
        mfRole: ((_e2 = e2.remotes) == null ? void 0 : _e2.length) > 0 ? `host` : `unknown`
      },
      mfConfig: {
        name: e2.name,
        remotes: ((_f = e2.remotes) == null ? void 0 : _f.map(dn)) ?? [],
        shared: t2
      }
    };
  }
  function fn(e2) {
    return {
      resourceCategory: `sync`,
      share: true,
      depsRemote: true,
      ...e2
    };
  }
  function pn(e2, t2) {
    return t2.map((t3) => {
      let n2 = It(e2, t3.nameOrAlias);
      return v(n2, `Unable to preload ${t3.nameOrAlias} as it is not included in ${!n2 && p({
        remoteInfo: n2,
        remotes: e2
      })}`), {
        remote: n2,
        preloadConfig: fn(t3)
      };
    });
  }
  function mn(e2) {
    return e2 ? e2.map((e3) => e3 === `.` ? e3 : e3.startsWith(`./`) ? e3.replace(`./`, ``) : e3) : [];
  }
  function hn(e2, t2, n2, r2 = true) {
    let { cssAssets: i2, jsAssetsWithoutEntry: a2, entryAssets: o2 } = n2;
    if (t2.options.inBrowser) {
      if (o2.forEach((n3) => {
        let { moduleInfo: r3 } = n3, i3 = t2.moduleCache.get(e2.name);
        cn(i3 ? {
          origin: t2,
          remoteInfo: r3,
          remoteEntryExports: i3.remoteEntryExports
        } : {
          origin: t2,
          remoteInfo: r3,
          remoteEntryExports: void 0
        });
      }), r2) {
        let n3 = {
          rel: `preload`,
          as: `style`
        };
        i2.forEach((r3) => {
          let { link: i3, needAttach: a3 } = de({
            url: r3,
            cb: () => {
            },
            attrs: n3,
            createLinkHook: (n4, r4) => {
              let i4 = t2.loaderHook.lifecycle.createLink.emit({
                url: n4,
                attrs: r4,
                remoteInfo: e2
              });
              if (i4 instanceof HTMLLinkElement) return i4;
            }
          });
          a3 && document.head.appendChild(i3);
        });
      } else {
        let n3 = {
          rel: `stylesheet`,
          type: `text/css`
        };
        i2.forEach((r3) => {
          let { link: i3, needAttach: a3 } = de({
            url: r3,
            cb: () => {
            },
            attrs: n3,
            createLinkHook: (n4, r4) => {
              let i4 = t2.loaderHook.lifecycle.createLink.emit({
                url: n4,
                attrs: r4,
                remoteInfo: e2
              });
              if (i4 instanceof HTMLLinkElement) return i4;
            },
            needDeleteLink: false
          });
          a3 && document.head.appendChild(i3);
        });
      }
      if (r2) {
        let n3 = {
          rel: `preload`,
          as: `script`
        };
        a2.forEach((r3) => {
          let { link: i3, needAttach: a3 } = de({
            url: r3,
            cb: () => {
            },
            attrs: n3,
            createLinkHook: (n4, r4) => {
              let i4 = t2.loaderHook.lifecycle.createLink.emit({
                url: n4,
                attrs: r4,
                remoteInfo: e2
              });
              if (i4 instanceof HTMLLinkElement) return i4;
            }
          });
          a3 && document.head.appendChild(i3);
        });
      } else {
        let n3 = {
          fetchpriority: `high`,
          type: (e2 == null ? void 0 : e2.type) === `module` ? `module` : `text/javascript`
        };
        a2.forEach((r3) => {
          let { script: i3, needAttach: a3 } = ue({
            url: r3,
            cb: () => {
            },
            attrs: n3,
            createScriptHook: (n4, r4) => {
              let i4 = t2.loaderHook.lifecycle.createScript.emit({
                url: n4,
                attrs: r4,
                remoteInfo: e2
              });
              if (i4 instanceof HTMLScriptElement) return i4;
            },
            needDeleteScript: true
          });
          a3 && document.head.appendChild(i3);
        });
      }
    }
  }
  function gn(e2, t2, n2) {
    let r2 = t2, i2 = Array.isArray(e2.shareScope) ? e2.shareScope : [
      e2.shareScope
    ];
    i2.length || i2.push(`default`), i2.forEach((e3) => {
      r2[e3] || (r2[e3] = {});
    });
    let a2 = {
      version: e2.version || ``,
      shareScopeKeys: Array.isArray(e2.shareScope) ? i2 : e2.shareScope || `default`
    };
    return Object.defineProperty(a2, "shareScopeMap", {
      value: r2,
      enumerable: false
    }), {
      remoteEntryInitOptions: a2,
      shareScope: r2[i2[0]],
      initScope: n2 ?? []
    };
  }
  var _n = class {
    constructor({ remoteInfo: e2, host: t2 }) {
      this.inited = false, this.initing = false, this.lib = void 0, this.remoteInfo = e2, this.host = t2;
    }
    async getEntry() {
      if (this.remoteEntryExports) return this.remoteEntryExports;
      let e2 = await cn({
        origin: this.host,
        remoteInfo: this.remoteInfo,
        remoteEntryExports: this.remoteEntryExports
      });
      return v(e2, `remoteEntryExports is undefined 
 ${p(this.remoteInfo)}`), this.remoteEntryExports = e2, this.remoteEntryExports;
    }
    async init(e2, t2, n2) {
      let r2 = await this.getEntry();
      if (this.inited) return r2;
      if (this.initPromise) return await this.initPromise, r2;
      this.initing = true, this.initPromise = (async () => {
        let { remoteEntryInitOptions: i2, shareScope: a2, initScope: o2 } = gn(this.remoteInfo, this.host.shareScopeMap, n2), s2 = await this.host.hooks.lifecycle.beforeInitContainer.emit({
          shareScope: a2,
          remoteEntryInitOptions: i2,
          initScope: o2,
          remoteInfo: this.remoteInfo,
          origin: this.host
        });
        (r2 == null ? void 0 : r2.init) === void 0 && y(Rt, K, {
          hostName: this.host.name,
          remoteName: this.remoteInfo.name,
          remoteEntryUrl: this.remoteInfo.entry,
          remoteEntryKey: this.remoteInfo.entryGlobalName
        }, void 0, J(this.host.options)), await r2.init(s2.shareScope, s2.initScope, s2.remoteEntryInitOptions), await this.host.hooks.lifecycle.initContainer.emit({
          ...s2,
          id: e2,
          remoteSnapshot: t2,
          remoteEntryExports: r2
        }), this.inited = true;
      })();
      try {
        await this.initPromise;
      } finally {
        this.initing = false, this.initPromise = void 0;
      }
      return r2;
    }
    async get(e2, t2, n2, r2) {
      let { loadFactory: i2 = true } = n2 || {
        loadFactory: true
      }, a2 = await this.init(e2, r2);
      this.lib = a2;
      let o2;
      o2 = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
        remoteEntryExports: a2,
        expose: t2,
        moduleInfo: this.remoteInfo
      }), o2 || (o2 = await a2.get(t2)), v(o2, `${b(this.remoteInfo)} remote don't export ${t2}.`);
      let s2 = Ee(this.remoteInfo.name, t2), c2 = this.wraperFactory(o2, s2);
      return i2 ? await c2() : c2;
    }
    wraperFactory(e2, t2) {
      function n2(e3, t3) {
        e3 && typeof e3 == `object` && Object.isExtensible(e3) && !Object.getOwnPropertyDescriptor(e3, /* @__PURE__ */ Symbol.for(`mf_module_id`)) && Object.defineProperty(e3, /* @__PURE__ */ Symbol.for(`mf_module_id`), {
          value: t3,
          enumerable: false
        });
      }
      return e2 instanceof Promise ? async () => {
        let r2 = await e2();
        return n2(r2, t2), r2;
      } : () => {
        let r2 = e2();
        return n2(r2, t2), r2;
      };
    }
  }, Y = class {
    constructor(e2) {
      this.type = ``, this.listeners = /* @__PURE__ */ new Set(), e2 && (this.type = e2);
    }
    on(e2) {
      typeof e2 == `function` && this.listeners.add(e2);
    }
    once(e2) {
      let t2 = this;
      this.on(function n2(...r2) {
        return t2.remove(n2), e2.apply(null, r2);
      });
    }
    emit(...e2) {
      let t2;
      return this.listeners.size > 0 && this.listeners.forEach((n2) => {
        t2 = n2(...e2);
      }), t2;
    }
    remove(e2) {
      this.listeners.delete(e2);
    }
    removeAll() {
      this.listeners.clear();
    }
  }, X = class extends Y {
    emit(...e2) {
      let t2, n2 = Array.from(this.listeners);
      if (n2.length > 0) {
        let r2 = 0, i2 = (t3) => t3 === false ? false : r2 < n2.length ? Promise.resolve(n2[r2++].apply(null, e2)).then(i2) : t3;
        t2 = i2();
      }
      return Promise.resolve(t2);
    }
  };
  function vn(e2, t2) {
    if (!xe(t2)) return false;
    if (e2 !== t2) {
      for (let n2 in e2) if (!(n2 in t2)) return false;
    }
    return true;
  }
  var Z = class extends Y {
    constructor(e2) {
      super(), this.onerror = y, this.type = e2;
    }
    emit(e2) {
      xe(e2) || y(`The data for the "${this.type}" hook should be an object.`);
      for (let t2 of this.listeners) try {
        let n2 = t2(e2);
        if (vn(e2, n2)) e2 = n2;
        else {
          this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
          break;
        }
      } catch (e3) {
        _e(e3), this.onerror(e3);
      }
      return e2;
    }
  }, Q = class extends Y {
    constructor(e2) {
      super(), this.onerror = y, this.type = e2;
    }
    emit(e2) {
      xe(e2) || y(`The response data for the "${this.type}" hook must be an object.`);
      let t2 = Array.from(this.listeners);
      if (t2.length > 0) {
        let n2 = 0, r2 = (t3) => (_e(t3), this.onerror(t3), e2), i2 = (a2) => {
          if (vn(e2, a2)) {
            if (e2 = a2, n2 < t2.length) try {
              return Promise.resolve(t2[n2++](e2)).then(i2, r2);
            } catch (e3) {
              return r2(e3);
            }
          } else this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
          return e2;
        };
        return Promise.resolve(i2(e2));
      }
      return Promise.resolve(e2);
    }
  }, $ = class {
    constructor(e2) {
      this.registerPlugins = {}, this.lifecycle = e2, this.lifecycleKeys = Object.keys(e2);
    }
    applyPlugin(e2, t2) {
      var _a;
      v(Ce(e2), `Plugin configuration is invalid.`);
      let n2 = e2.name;
      v(n2, `A name must be provided by the plugin.`), this.registerPlugins[n2] || (this.registerPlugins[n2] = e2, (_a = e2.apply) == null ? void 0 : _a.call(e2, t2), Object.keys(this.lifecycle).forEach((t3) => {
        let n3 = e2[t3];
        n3 && this.lifecycle[t3].on(n3);
      }));
    }
    removePlugin(e2) {
      v(e2, `A name is required.`);
      let t2 = this.registerPlugins[e2];
      v(t2, `The plugin "${e2}" is not registered.`), Object.keys(t2).forEach((e3) => {
        e3 !== `name` && this.lifecycle[e3].remove(t2[e3]);
      });
    }
  };
  function yn(e2, t2) {
    let n2 = Te(t2);
    n2.url || y(qt, K, {
      remoteName: e2.name
    });
    let r2 = d(t2, n2.url);
    e2.type = n2.type, e2.entryGlobalName = n2.globalName, e2.entry = r2, e2.version = t2.version, e2.buildVersion = t2.buildVersion;
  }
  function bn() {
    return {
      name: `snapshot-plugin`,
      async afterResolve(e2) {
        let { remote: t2, pkgNameOrAlias: n2, expose: r2, origin: i2, remoteInfo: a2, id: o2 } = e2;
        if (!ye(t2) || !be(t2)) {
          let { remoteSnapshot: s2, globalSnapshot: c2 } = await i2.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: t2,
            id: o2
          });
          yn(a2, s2);
          let l2 = {
            remote: t2,
            preloadConfig: {
              nameOrAlias: n2,
              exposes: [
                r2
              ],
              resourceCategory: `sync`,
              share: false,
              depsRemote: false
            }
          }, u2 = await i2.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
            origin: i2,
            preloadOptions: l2,
            remoteInfo: a2,
            remote: t2,
            remoteSnapshot: s2,
            globalSnapshot: c2
          });
          return u2 && hn(a2, i2, u2, false), {
            ...e2,
            remoteSnapshot: s2
          };
        }
        return e2;
      }
    };
  }
  function xn(e2) {
    let t2 = e2.split(`:`);
    return t2.length === 1 ? {
      name: t2[0],
      version: void 0
    } : t2.length === 2 ? {
      name: t2[0],
      version: t2[1]
    } : {
      name: t2[1],
      version: t2[2]
    };
  }
  function Sn(e2, t2, n2, r2, i2 = {}, a2) {
    let { value: o2 } = D(e2, b(t2)), s2 = a2 || o2;
    if (s2 && !h(s2) && (n2(s2, t2, r2), s2.remotesInfo)) {
      let t3 = Object.keys(s2.remotesInfo);
      for (let r3 of t3) {
        if (i2[r3]) continue;
        i2[r3] = true;
        let t4 = xn(r3), a3 = s2.remotesInfo[r3];
        Sn(e2, {
          name: t4.name,
          version: a3.matchedVersion
        }, n2, false, i2, void 0);
      }
    }
  }
  var Cn = (e2, t2) => document.querySelector(`${e2}[${e2 === `link` ? `href` : `src`}="${t2}"]`);
  function wn(e2, t2, n2, r2, i2) {
    let a2 = [], o2 = [], s2 = [], c2 = /* @__PURE__ */ new Set(), l2 = /* @__PURE__ */ new Set(), { options: u2 } = e2, { preloadConfig: f2 } = t2, { depsRemote: p2 } = f2;
    if (Sn(r2, n2, (t3, n3, r3) => {
      var _a;
      let i3;
      if (r3) i3 = f2;
      else if (Array.isArray(p2)) {
        let e3 = p2.find((e4) => e4.nameOrAlias === n3.name || e4.nameOrAlias === n3.alias);
        if (!e3) return;
        i3 = fn(e3);
      } else if (p2 === true) i3 = f2;
      else return;
      let c3 = d(t3, Te(t3).url);
      c3 && s2.push({
        name: n3.name,
        moduleInfo: {
          name: n3.name,
          entry: c3,
          type: `remoteEntryType` in t3 ? t3.remoteEntryType : `global`,
          entryGlobalName: `globalName` in t3 ? t3.globalName : n3.name,
          shareScope: ``,
          version: `version` in t3 ? t3.version : void 0
        },
        url: c3
      });
      let l3 = `modules` in t3 ? t3.modules : [], u3 = mn(i3.exposes);
      u3.length && `modules` in t3 && (l3 = (_a = t3 == null ? void 0 : t3.modules) == null ? void 0 : _a.reduce((e3, t4) => ((u3 == null ? void 0 : u3.indexOf(t4.moduleName)) !== -1 && e3.push(t4), e3), []));
      function m3(e3) {
        let n4 = e3.map((e4) => d(t3, e4));
        return i3.filter ? n4.filter(i3.filter) : n4;
      }
      if (l3) {
        let r4 = l3.length;
        for (let s3 = 0; s3 < r4; s3++) {
          let r5 = l3[s3], c4 = `${n3.name}/${r5.moduleName}`;
          e2.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
            id: r5.moduleName === `.` ? n3.name : c4,
            name: n3.name,
            remoteSnapshot: t3,
            preloadConfig: i3,
            remote: n3,
            origin: e2
          }), !Le(c4) && (i3.resourceCategory === `all` ? (a2.push(...m3(r5.assets.css.async)), a2.push(...m3(r5.assets.css.sync)), o2.push(...m3(r5.assets.js.async)), o2.push(...m3(r5.assets.js.sync))) : i3.resourceCategory === `sync` && (a2.push(...m3(r5.assets.css.sync)), o2.push(...m3(r5.assets.js.sync))), Re(c4));
        }
      }
    }, true, {}, i2), i2.shared && i2.shared.length > 0) {
      let t3 = (t4, n3) => {
        let { shared: r3 } = U(e2.shareScopeMap, n3.sharedName, t4, e2.sharedHandler.hooks.lifecycle.resolveShare) || {};
        r3 && typeof r3.lib == `function` && (n3.assets.js.sync.forEach((e3) => {
          c2.add(e3);
        }), n3.assets.css.sync.forEach((e3) => {
          l2.add(e3);
        }));
      };
      i2.shared.forEach((e3) => {
        var _a;
        let n3 = (_a = u2.shared) == null ? void 0 : _a[e3.sharedName];
        if (!n3) return;
        let r3 = e3.version ? n3.find((t4) => t4.version === e3.version) : n3;
        r3 && we(r3).forEach((n4) => {
          t3(n4, e3);
        });
      });
    }
    let m2 = o2.filter((e3) => !c2.has(e3) && !Cn(`script`, e3));
    return {
      cssAssets: a2.filter((e3) => !l2.has(e3) && !Cn(`link`, e3)),
      jsAssetsWithoutEntry: m2,
      entryAssets: s2.filter((e3) => !Cn(`script`, e3.url))
    };
  }
  var Tn = function() {
    return {
      name: `generate-preload-assets-plugin`,
      async generatePreloadAssets(e2) {
        let { origin: t2, preloadOptions: n2, remoteInfo: r2, remote: i2, globalSnapshot: a2, remoteSnapshot: o2 } = e2;
        return ye(i2) && be(i2) ? {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: [
            {
              name: i2.name,
              url: i2.entry,
              moduleInfo: {
                name: r2.name,
                entry: i2.entry,
                type: r2.type || `global`,
                entryGlobalName: ``,
                shareScope: ``
              }
            }
          ]
        } : (yn(r2, o2), wn(t2, n2, r2, a2, o2));
      }
    };
  };
  function En(e2, t2) {
    let n2 = O({
      name: t2.name,
      version: t2.options.version
    }), r2 = n2 && `remotesInfo` in n2 && n2.remotesInfo && D(n2.remotesInfo, e2.name).value;
    return r2 && r2.matchedVersion ? {
      hostGlobalSnapshot: n2,
      globalSnapshot: je(),
      remoteSnapshot: O({
        name: e2.name,
        version: r2.matchedVersion
      })
    } : {
      hostGlobalSnapshot: void 0,
      globalSnapshot: je(),
      remoteSnapshot: O({
        name: e2.name,
        version: `version` in e2 ? e2.version : void 0
      })
    };
  }
  var Dn = class {
    constructor(e2) {
      this.loadingHostSnapshot = null, this.manifestCache = /* @__PURE__ */ new Map(), this.hooks = new $({
        beforeLoadRemoteSnapshot: new X(`beforeLoadRemoteSnapshot`),
        loadSnapshot: new Q(`loadGlobalSnapshot`),
        loadRemoteSnapshot: new Q(`loadRemoteSnapshot`),
        afterLoadSnapshot: new Q(`afterLoadSnapshot`)
      }), this.manifestLoading = C.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e2, this.loaderHook = e2.loaderHook;
    }
    async loadRemoteSnapshotInfo({ moduleInfo: e2, id: t2, expose: n2 }) {
      let { options: r2 } = this.HostInstance;
      await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
        options: r2,
        moduleInfo: e2
      });
      let i2 = O({
        name: this.HostInstance.options.name,
        version: this.HostInstance.options.version
      });
      i2 || (i2 = {
        version: this.HostInstance.options.version || ``,
        remoteEntry: ``,
        remotesInfo: {}
      }, Pe({
        [this.HostInstance.options.name]: i2
      })), i2 && `remotesInfo` in i2 && !D(i2.remotesInfo, e2.name).value && (`version` in e2 || `entry` in e2) && (i2.remotesInfo = {
        ...i2 == null ? void 0 : i2.remotesInfo,
        [e2.name]: {
          matchedVersion: `version` in e2 ? e2.version : e2.entry
        }
      });
      let { hostGlobalSnapshot: a2, remoteSnapshot: o2, globalSnapshot: s2 } = this.getGlobalRemoteInfo(e2), { remoteSnapshot: c2, globalSnapshot: l2 } = await this.hooks.lifecycle.loadSnapshot.emit({
        options: r2,
        moduleInfo: e2,
        hostGlobalSnapshot: a2,
        remoteSnapshot: o2,
        globalSnapshot: s2
      }), u2, d2;
      if (c2) if (h(c2)) {
        let t3 = c2.remoteEntry, n3 = await this.getManifestJson(t3, e2, {}), r3 = Ne({
          ...e2,
          entry: t3
        }, n3);
        u2 = n3, d2 = r3;
      } else {
        let { remoteSnapshot: t3 } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: e2,
          remoteSnapshot: c2,
          from: `global`
        });
        u2 = t3, d2 = l2;
      }
      else if (ye(e2)) {
        let t3 = await this.getManifestJson(e2.entry, e2, {}), n3 = Ne(e2, t3), { remoteSnapshot: r3 } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: e2,
          remoteSnapshot: t3,
          from: `global`
        });
        u2 = r3, d2 = n3;
      } else y(Ut, K, {
        remoteName: e2.name,
        remoteVersion: e2.version,
        hostName: this.HostInstance.options.name,
        globalSnapshot: JSON.stringify(l2)
      }, void 0, J(this.HostInstance.options));
      return await this.hooks.lifecycle.afterLoadSnapshot.emit({
        id: t2,
        host: this.HostInstance,
        options: r2,
        moduleInfo: e2,
        remoteSnapshot: u2
      }), {
        remoteSnapshot: u2,
        globalSnapshot: d2
      };
    }
    getGlobalRemoteInfo(e2) {
      return En(e2, this.HostInstance);
    }
    async getManifestJson(e2, t2, n2) {
      let r2 = async () => {
        let n3 = this.manifestCache.get(e2);
        if (n3) return n3;
        try {
          let r3 = await this.loaderHook.lifecycle.fetch.emit(e2, {}, q(t2));
          (!r3 || !(r3 instanceof Response)) && (r3 = await fetch(e2, {})), n3 = await r3.json();
        } catch (r3) {
          n3 = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: e2,
            error: r3,
            from: `runtime`,
            lifecycle: `afterResolve`,
            origin: this.HostInstance
          }), n3 || (delete this.manifestLoading[e2], y(zt, K, {
            manifestUrl: e2,
            moduleName: t2.name,
            hostName: this.HostInstance.options.name
          }, `${r3}`, J(this.HostInstance.options)));
        }
        return v(n3.metaData && n3.exposes && n3.shared, `"${e2}" is not a valid federation manifest for remote "${t2.name}". Missing required fields: ${[
          !n3.metaData && `metaData`,
          !n3.exposes && `exposes`,
          !n3.shared && `shared`
        ].filter(Boolean).join(`, `)}.`), this.manifestCache.set(e2, n3), n3;
      }, i2 = async () => {
        let n3 = await r2(), i3 = te(n3, {
          version: e2
        }), { remoteSnapshot: a2 } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: t2,
          manifestJson: n3,
          remoteSnapshot: i3,
          manifestUrl: e2,
          from: `manifest`
        });
        return a2;
      };
      return this.manifestLoading[e2] || (this.manifestLoading[e2] = i2().then((e3) => e3)), this.manifestLoading[e2];
    }
  }, On = class {
    constructor(e2) {
      this.hooks = new $({
        beforeRegisterShare: new Z(`beforeRegisterShare`),
        afterResolve: new Q(`afterResolve`),
        beforeLoadShare: new Q(`beforeLoadShare`),
        loadShare: new X(),
        resolveShare: new Z(`resolveShare`),
        initContainerShareScopeMap: new Z(`initContainerShareScopeMap`)
      }), this.host = e2, this.shareScopeMap = {}, this.initTokens = {}, this._setGlobalShareScopeMap(e2.options);
    }
    registerShared(e2, t2) {
      let { newShareInfos: n2, allShareInfos: r2 } = Dt(e2, t2);
      return Object.keys(n2).forEach((e3) => {
        n2[e3].forEach((n3) => {
          n3.scope.forEach((r3) => {
            var _a;
            this.hooks.lifecycle.beforeRegisterShare.emit({
              origin: this.host,
              pkgName: e3,
              shared: n3
            }), ((_a = this.shareScopeMap[r3]) == null ? void 0 : _a[e3]) || this.setShared({
              pkgName: e3,
              lib: n3.lib,
              get: n3.get,
              loaded: n3.loaded || !!n3.lib,
              shared: n3,
              from: t2.name
            });
          });
        });
      }), {
        newShareInfos: n2,
        allShareInfos: r2
      };
    }
    async loadShare(e2, t2) {
      let { host: n2 } = this, r2 = Pt({
        pkgName: e2,
        extraOptions: t2,
        shareInfos: n2.options.shared
      });
      (r2 == null ? void 0 : r2.scope) && await Promise.all(r2.scope.map(async (e3) => {
        await Promise.all(this.initializeSharing(e3, {
          strategy: r2.strategy
        }));
      }));
      let { shareInfo: i2 } = await this.hooks.lifecycle.beforeLoadShare.emit({
        pkgName: e2,
        shareInfo: r2,
        shared: n2.options.shared,
        origin: n2
      });
      v(i2, `Cannot find shared "${e2}" in host "${n2.options.name}". Ensure the shared config for "${e2}" is declared in the federation plugin options and the host has been initialized before loading shares.`);
      let { shared: a2, useTreesShaking: o2 } = U(this.shareScopeMap, e2, i2, this.hooks.lifecycle.resolveShare) || {};
      if (a2) {
        let t3 = G(a2, o2);
        if (t3.lib) return W(t3, n2.options.name), t3.lib;
        if (t3.loading && !t3.loaded) {
          let e3 = await t3.loading;
          return t3.loaded = true, t3.lib || (t3.lib = e3), W(t3, n2.options.name), e3;
        } else {
          let r3 = (async () => {
            let e3 = await t3.get();
            return W(t3, n2.options.name), t3.loaded = true, t3.lib = e3, e3;
          })();
          return this.setShared({
            pkgName: e2,
            loaded: false,
            shared: a2,
            from: n2.options.name,
            lib: null,
            loading: r3,
            treeShaking: o2 ? t3 : void 0
          }), r3;
        }
      } else {
        if (t2 == null ? void 0 : t2.customShareInfo) return false;
        let r3 = R(i2.treeShaking), a3 = G(i2, r3), o3 = (async () => {
          let t3 = await a3.get();
          a3.lib = t3, a3.loaded = true, W(a3, n2.options.name);
          let { shared: r4, useTreesShaking: o4 } = U(this.shareScopeMap, e2, i2, this.hooks.lifecycle.resolveShare) || {};
          if (r4) {
            let e3 = G(r4, o4);
            e3.lib = t3, e3.loaded = true, r4.from = i2.from;
          }
          return t3;
        })();
        return this.setShared({
          pkgName: e2,
          loaded: false,
          shared: i2,
          from: n2.options.name,
          lib: null,
          loading: o3,
          treeShaking: r3 ? a3 : void 0
        }), o3;
      }
    }
    initializeSharing(e2 = L, t2) {
      let { host: n2 } = this, r2 = t2 == null ? void 0 : t2.from, i2 = t2 == null ? void 0 : t2.strategy, a2 = t2 == null ? void 0 : t2.initScope, o2 = [];
      if (r2 !== `build`) {
        let { initTokens: t3 } = this;
        a2 || (a2 = []);
        let n3 = t3[e2];
        if (n3 || (n3 = t3[e2] = {
          from: this.host.name
        }), a2.indexOf(n3) >= 0) return o2;
        a2.push(n3);
      }
      let s2 = this.shareScopeMap, c2 = n2.options.name;
      s2[e2] || (s2[e2] = {});
      let l2 = s2[e2], u2 = (e3, t3) => {
        var _a;
        let { version: n3, eager: r3 } = t3;
        l2[e3] = l2[e3] || {};
        let i3 = l2[e3], a3 = i3[n3] && G(i3[n3]), o3 = !!(a3 && (`eager` in a3 && a3.eager || `shareConfig` in a3 && ((_a = a3.shareConfig) == null ? void 0 : _a.eager)));
        (!a3 || a3.strategy !== `loaded-first` && !a3.loaded && (!r3 == !o3 ? c2 > i3[n3].from : r3)) && (i3[n3] = t3);
      }, d2 = async (e3) => {
        let { module: t3 } = await n2.remoteHandler.getRemoteModuleAndOptions({
          id: e3
        }), r3;
        try {
          r3 = await t3.getEntry();
        } catch (t4) {
          if (r3 = await n2.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: e3,
            error: t4,
            from: `runtime`,
            lifecycle: `beforeLoadShare`,
            origin: n2
          }), !r3) return;
        } finally {
          (r3 == null ? void 0 : r3.init) && !t3.initing && (t3.remoteEntryExports = r3, await t3.init(void 0, void 0, a2));
        }
      };
      return Object.keys(n2.options.shared).forEach((t3) => {
        n2.options.shared[t3].forEach((n3) => {
          n3.scope.includes(e2) && u2(t3, n3);
        });
      }), (n2.options.shareStrategy === `version-first` || i2 === `version-first`) && n2.options.remotes.forEach((t3) => {
        t3.shareScope === e2 && o2.push(d2(t3.name));
      }), o2;
    }
    loadShareSync(e2, t2) {
      let { host: n2 } = this, r2 = Pt({
        pkgName: e2,
        extraOptions: t2,
        shareInfos: n2.options.shared
      });
      (r2 == null ? void 0 : r2.scope) && r2.scope.forEach((e3) => {
        this.initializeSharing(e3, {
          strategy: r2.strategy
        });
      });
      let { shared: i2, useTreesShaking: a2 } = U(this.shareScopeMap, e2, r2, this.hooks.lifecycle.resolveShare) || {};
      if (i2) {
        if (typeof i2.lib == `function`) return W(i2, n2.options.name), i2.loaded || (i2.loaded = true, i2.from === n2.options.name && (r2.loaded = true)), i2.lib;
        if (typeof i2.get == `function`) {
          let t3 = i2.get();
          if (!(t3 instanceof Promise)) return W(i2, n2.options.name), this.setShared({
            pkgName: e2,
            loaded: true,
            from: n2.options.name,
            lib: t3,
            shared: i2
          }), t3;
        }
      }
      if (r2.lib) return r2.loaded || (r2.loaded = true), r2.lib;
      if (r2.get) {
        let i3 = r2.get();
        return i3 instanceof Promise && y((t2 == null ? void 0 : t2.from) === `build` ? Vt : Ht, K, {
          hostName: n2.options.name,
          sharedPkgName: e2
        }, void 0, J(n2.options)), r2.lib = i3, this.setShared({
          pkgName: e2,
          loaded: true,
          from: n2.options.name,
          lib: r2.lib,
          shared: r2
        }), r2.lib;
      }
      y(Ht, K, {
        hostName: n2.options.name,
        sharedPkgName: e2
      }, void 0, J(n2.options));
    }
    initShareScopeMap(e2, t2, n2 = {}) {
      let { host: r2 } = this;
      this.shareScopeMap[e2] = t2, this.hooks.lifecycle.initContainerShareScopeMap.emit({
        shareScope: t2,
        options: r2.options,
        origin: r2,
        scopeName: e2,
        hostShareScopeMap: n2.hostShareScopeMap
      });
    }
    setShared({ pkgName: e2, shared: t2, from: n2, lib: r2, loading: i2, loaded: a2, get: o2, treeShaking: s2 }) {
      let { version: c2, scope: l2 = `default`, ...u2 } = t2, d2 = Array.isArray(l2) ? l2 : [
        l2
      ], f2 = (e3) => {
        let t3 = (e4, t4, n4) => {
          n4 && !e4[t4] && (e4[t4] = n4);
        }, n3 = s2 ? e3.treeShaking : e3;
        t3(n3, `loaded`, a2), t3(n3, `loading`, i2), t3(n3, `get`, o2);
      };
      d2.forEach((t3) => {
        this.shareScopeMap[t3] || (this.shareScopeMap[t3] = {}), this.shareScopeMap[t3][e2] || (this.shareScopeMap[t3][e2] = {}), this.shareScopeMap[t3][e2][c2] || (this.shareScopeMap[t3][e2][c2] = {
          version: c2,
          scope: [
            t3
          ],
          ...u2,
          lib: r2
        });
        let i3 = this.shareScopeMap[t3][e2][c2];
        f2(i3), n2 && i3.from !== n2 && (i3.from = n2);
      });
    }
    _setGlobalShareScopeMap(e2) {
      let t2 = Nt(), n2 = e2.id || e2.name;
      n2 && !t2[n2] && (t2[n2] = this.shareScopeMap);
    }
  }, kn = class {
    constructor(e2) {
      this.hooks = new $({
        beforeRegisterRemote: new Z(`beforeRegisterRemote`),
        registerRemote: new Z(`registerRemote`),
        beforeRequest: new Q(`beforeRequest`),
        onLoad: new X(`onLoad`),
        handlePreloadModule: new Y(`handlePreloadModule`),
        errorLoadRemote: new X(`errorLoadRemote`),
        beforePreloadRemote: new X(`beforePreloadRemote`),
        generatePreloadAssets: new X(`generatePreloadAssets`),
        afterPreloadRemote: new X(),
        loadEntry: new X()
      }), this.host = e2, this.idToRemoteMap = {};
    }
    formatAndRegisterRemote(e2, t2) {
      return (t2.remotes || []).reduce((e3, t3) => (this.registerRemote(t3, e3, {
        force: false
      }), e3), e2.remotes);
    }
    setIdToRemoteMap(e2, t2) {
      let { remote: n2, expose: r2 } = t2, { name: i2, alias: a2 } = n2;
      if (this.idToRemoteMap[e2] = {
        name: n2.name,
        expose: r2
      }, a2 && e2.startsWith(i2)) {
        let t3 = e2.replace(i2, a2);
        this.idToRemoteMap[t3] = {
          name: n2.name,
          expose: r2
        };
        return;
      }
      if (a2 && e2.startsWith(a2)) {
        let t3 = e2.replace(a2, i2);
        this.idToRemoteMap[t3] = {
          name: n2.name,
          expose: r2
        };
      }
    }
    async loadRemote(e2, t2) {
      let { host: n2 } = this;
      try {
        let { loadFactory: r2 = true } = t2 || {
          loadFactory: true
        }, { module: i2, moduleOptions: a2, remoteMatchInfo: o2 } = await this.getRemoteModuleAndOptions({
          id: e2
        }), { pkgNameOrAlias: s2, remote: c2, expose: l2, id: u2, remoteSnapshot: d2 } = o2, f2 = await i2.get(u2, l2, t2, d2), p2 = await this.hooks.lifecycle.onLoad.emit({
          id: u2,
          pkgNameOrAlias: s2,
          expose: l2,
          exposeModule: r2 ? f2 : void 0,
          exposeModuleFactory: r2 ? void 0 : f2,
          remote: c2,
          options: a2,
          moduleInstance: i2,
          origin: n2
        });
        return this.setIdToRemoteMap(e2, o2), typeof p2 == `function` ? p2 : f2;
      } catch (r2) {
        let { from: i2 = `runtime` } = t2 || {
          from: `runtime`
        }, a2 = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: e2,
          error: r2,
          from: i2,
          lifecycle: `onLoad`,
          origin: n2
        });
        if (!a2) throw r2;
        return a2;
      }
    }
    async preloadRemote(e2) {
      let { host: t2 } = this;
      await this.hooks.lifecycle.beforePreloadRemote.emit({
        preloadOps: e2,
        options: t2.options,
        origin: t2
      });
      let n2 = pn(t2.options.remotes, e2);
      await Promise.all(n2.map(async (e3) => {
        let { remote: n3 } = e3, r2 = q(n3), { globalSnapshot: i2, remoteSnapshot: a2 } = await t2.snapshotHandler.loadRemoteSnapshotInfo({
          moduleInfo: n3
        }), o2 = await this.hooks.lifecycle.generatePreloadAssets.emit({
          origin: t2,
          preloadOptions: e3,
          remote: n3,
          remoteInfo: r2,
          globalSnapshot: i2,
          remoteSnapshot: a2
        });
        o2 && hn(r2, t2, o2);
      }));
    }
    registerRemotes(e2, t2) {
      let { host: n2 } = this;
      e2.forEach((e3) => {
        this.registerRemote(e3, n2.options.remotes, {
          force: t2 == null ? void 0 : t2.force
        });
      });
    }
    async getRemoteModuleAndOptions(e2) {
      let { host: t2 } = this, { id: n2 } = e2, r2;
      try {
        r2 = await this.hooks.lifecycle.beforeRequest.emit({
          id: n2,
          options: t2.options,
          origin: t2
        });
      } catch (e3) {
        if (r2 = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: n2,
          options: t2.options,
          origin: t2,
          from: `runtime`,
          error: e3,
          lifecycle: `beforeRequest`
        }), !r2) throw e3;
      }
      let { id: i2 } = r2, a2 = Ft(t2.options.remotes, i2);
      a2 || y(Bt, K, {
        hostName: t2.options.name,
        requestId: i2
      }, void 0, J(t2.options));
      let { remote: o2 } = a2, s2 = q(o2), c2 = await t2.sharedHandler.hooks.lifecycle.afterResolve.emit({
        id: i2,
        ...a2,
        options: t2.options,
        origin: t2,
        remoteInfo: s2
      }), { remote: l2, expose: u2 } = c2;
      v(l2 && u2, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${i2}.`);
      let d2 = t2.moduleCache.get(l2.name), f2 = {
        host: t2,
        remoteInfo: s2
      };
      return d2 || (d2 = new _n(f2), t2.moduleCache.set(l2.name, d2)), {
        module: d2,
        moduleOptions: f2,
        remoteMatchInfo: c2
      };
    }
    registerRemote(e2, t2, n2) {
      let { host: r2 } = this, i2 = () => {
        if (e2.alias) {
          let n3 = t2.find((t3) => {
            var _a;
            return e2.alias && (t3.name.startsWith(e2.alias) || ((_a = t3.alias) == null ? void 0 : _a.startsWith(e2.alias)));
          });
          v(!n3, `The alias ${e2.alias} of remote ${e2.name} is not allowed to be the prefix of ${n3 && n3.name} name or alias`);
        }
        `entry` in e2 && typeof window < `u` && !e2.entry.startsWith(`http`) && (e2.entry = new URL(e2.entry, window.location.origin).href), e2.shareScope || (e2.shareScope = L), e2.type || (e2.type = Tt);
      };
      this.hooks.lifecycle.beforeRegisterRemote.emit({
        remote: e2,
        origin: r2
      });
      let a2 = t2.find((t3) => t3.name === e2.name);
      if (!a2) i2(), t2.push(e2), this.hooks.lifecycle.registerRemote.emit({
        remote: e2,
        origin: r2
      });
      else {
        let o2 = [
          `The remote "${e2.name}" is already registered.`,
          `Please note that overriding it may cause unexpected errors.`
        ];
        (n2 == null ? void 0 : n2.force) && (this.removeRemote(a2), i2(), t2.push(e2), this.hooks.lifecycle.registerRemote.emit({
          remote: e2,
          origin: r2
        }), f(o2.join(` `)));
      }
    }
    removeRemote(e2) {
      var _a;
      try {
        let { host: t2 } = this, { name: n2 } = e2, r2 = t2.options.remotes.findIndex((e3) => e3.name === n2);
        r2 !== -1 && t2.options.remotes.splice(r2, 1);
        let i2 = t2.moduleCache.get(e2.name);
        if (i2) {
          let n3 = i2.remoteInfo, r3 = n3.entryGlobalName;
          x[r3] && (((_a = Object.getOwnPropertyDescriptor(x, r3)) == null ? void 0 : _a.configurable) ? delete x[r3] : x[r3] = void 0);
          let a2 = sn(i2.remoteInfo);
          E[a2] && delete E[a2], t2.snapshotHandler.manifestCache.delete(n3.entry);
          let o2 = n3.buildVersion ? u(n3.name, n3.buildVersion) : n3.name, s2 = x.__FEDERATION__.__INSTANCES__.findIndex((e3) => n3.buildVersion ? e3.options.id === o2 : e3.name === o2);
          if (s2 !== -1) {
            let e3 = x.__FEDERATION__.__INSTANCES__[s2];
            o2 = e3.options.id || o2;
            let t3 = Nt(), r4 = true, i3 = [];
            Object.keys(t3).forEach((e4) => {
              let a3 = t3[e4];
              a3 && Object.keys(a3).forEach((t4) => {
                let o3 = a3[t4];
                o3 && Object.keys(o3).forEach((a4) => {
                  let s3 = o3[a4];
                  s3 && Object.keys(s3).forEach((o4) => {
                    let c3 = s3[o4];
                    c3 && typeof c3 == `object` && c3.from === n3.name && (c3.loaded || c3.loading ? (c3.useIn = c3.useIn.filter((e5) => e5 !== n3.name), c3.useIn.length ? r4 = false : i3.push([
                      e4,
                      t4,
                      a4,
                      o4
                    ])) : i3.push([
                      e4,
                      t4,
                      a4,
                      o4
                    ]));
                  });
                });
              });
            }), r4 && (e3.shareScopeMap = {}, delete t3[o2]), i3.forEach(([e4, n4, r5, i4]) => {
              var _a2, _b, _c;
              (_c = (_b = (_a2 = t3[e4]) == null ? void 0 : _a2[n4]) == null ? void 0 : _b[r5]) == null ? true : delete _c[i4];
            }), x.__FEDERATION__.__INSTANCES__.splice(s2, 1);
          }
          let { hostGlobalSnapshot: c2 } = En(e2, t2);
          if (c2) {
            let t3 = c2 && `remotesInfo` in c2 && c2.remotesInfo && D(c2.remotesInfo, e2.name).key;
            t3 && (delete c2.remotesInfo[t3], C.__FEDERATION__.__MANIFEST_LOADING__[t3] && delete C.__FEDERATION__.__MANIFEST_LOADING__[t3]);
          }
          t2.moduleCache.delete(e2.name);
        }
      } catch (e3) {
        ge.error(`removeRemote failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
      }
    }
  }, An = typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN == `boolean` ? !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN : true, jn = class {
    constructor(e2) {
      this.hooks = new $({
        beforeInit: new Z(`beforeInit`),
        init: new Y(),
        beforeInitContainer: new Q(`beforeInitContainer`),
        initContainer: new Q(`initContainer`)
      }), this.version = `2.4.0`, this.moduleCache = /* @__PURE__ */ new Map(), this.loaderHook = new $({
        getModuleInfo: new Y(),
        createScript: new Y(),
        createLink: new Y(),
        fetch: new X(),
        loadEntryError: new X(),
        getModuleFactory: new X()
      }), this.bridgeHook = new $({
        beforeBridgeRender: new Y(),
        afterBridgeRender: new Y(),
        beforeBridgeDestroy: new Y(),
        afterBridgeDestroy: new Y()
      });
      let t2 = An ? [
        bn(),
        Tn()
      ] : [], n2 = {
        id: ln(),
        name: e2.name,
        plugins: t2,
        remotes: [],
        shared: {},
        inBrowser: true
      };
      this.name = e2.name, this.options = n2, this.snapshotHandler = new Dn(this), this.sharedHandler = new On(this), this.remoteHandler = new kn(this), this.shareScopeMap = this.sharedHandler.shareScopeMap, this.registerPlugins([
        ...n2.plugins,
        ...e2.plugins || []
      ]), this.options = this.formatOptions(n2, e2);
    }
    initOptions(e2) {
      e2.name && e2.name !== this.options.name && y(me(Kt, K)), this.registerPlugins(e2.plugins);
      let t2 = this.formatOptions(this.options, e2);
      return this.options = t2, t2;
    }
    async loadShare(e2, t2) {
      return this.sharedHandler.loadShare(e2, t2);
    }
    loadShareSync(e2, t2) {
      return this.sharedHandler.loadShareSync(e2, t2);
    }
    initializeSharing(e2 = L, t2) {
      return this.sharedHandler.initializeSharing(e2, t2);
    }
    initRawContainer(e2, t2, n2) {
      let r2 = q({
        name: e2,
        entry: t2
      }), i2 = new _n({
        host: this,
        remoteInfo: r2
      });
      return i2.remoteEntryExports = n2, this.moduleCache.set(e2, i2), i2;
    }
    async loadRemote(e2, t2) {
      return this.remoteHandler.loadRemote(e2, t2);
    }
    async preloadRemote(e2) {
      return this.remoteHandler.preloadRemote(e2);
    }
    initShareScopeMap(e2, t2, n2 = {}) {
      this.sharedHandler.initShareScopeMap(e2, t2, n2);
    }
    formatOptions(e2, t2) {
      let { allShareInfos: n2 } = Dt(e2, t2), { userOptions: r2, options: i2 } = this.hooks.lifecycle.beforeInit.emit({
        origin: this,
        userOptions: t2,
        options: e2,
        shareInfo: n2
      }), a2 = this.remoteHandler.formatAndRegisterRemote(i2, r2), { allShareInfos: o2 } = this.sharedHandler.registerShared(i2, r2), s2 = [
        ...i2.plugins
      ];
      r2.plugins && r2.plugins.forEach((e3) => {
        s2.includes(e3) || s2.push(e3);
      });
      let c2 = {
        ...e2,
        ...t2,
        plugins: s2,
        remotes: a2,
        shared: o2,
        id: r2.id || e2.id
      };
      return this.hooks.lifecycle.init.emit({
        origin: this,
        options: c2
      }), c2;
    }
    registerPlugins(e2) {
      let t2 = un(e2, this);
      this.options.plugins = this.options.plugins.reduce((e3, t3) => (t3 && e3 && !e3.find((e4) => e4.name === t3.name) && e3.push(t3), e3), t2 || []);
    }
    registerRemotes(e2, t2) {
      return this.remoteHandler.registerRemotes(e2, t2);
    }
    registerShared(e2) {
      this.sharedHandler.registerShared(this.options, {
        ...this.options,
        shared: e2
      });
    }
  };
  function Mn() {
    return typeof FEDERATION_BUILD_IDENTIFIER < `u` ? FEDERATION_BUILD_IDENTIFIER : ``;
  }
  function Nn(e2, t2) {
    let n2 = Mn();
    return x.__FEDERATION__.__INSTANCES__.find((r2) => !!(n2 && r2.options.id === n2 || r2.options.name === e2 && !r2.options.version && !t2 || r2.options.name === e2 && t2 && r2.options.version === t2));
  }
  function Pn(e2) {
    let t2 = new (ke() || jn)({
      id: `${e2.name}@${e2.version || Date.now()}`,
      ...e2
    });
    return Oe(t2), t2;
  }
  var Fn = null;
  In = function(e2) {
    let t2 = Nn(e2.name, e2.version), n2 = {
      ...e2,
      id: e2.id || ``
    };
    return t2 ? (t2.initOptions(n2), Fn || (Fn = t2), t2) : (Fn = Pn(n2), Fn);
  };
  Ae(jn);
})();
export {
  __tla,
  In as t
};
