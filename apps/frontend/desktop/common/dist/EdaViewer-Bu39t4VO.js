const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["cfb-Dmo-NGX5.js","__vite-browser-external-Db0kvMGT.js","chunk-DeXYQlWK.js","rolldown-runtime-aKtaBQYM.js"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { $ as t, C as n, F as r, G as i, H as a, Q as o, V as s, W as c, X as l, d as u, et as d, g as f, m as p, ot as m, q as h, rt as ee, w as te } from "./_virtual_mf___mfe_internal__components_center__loadShare__vue__loadShare__.mjs-DlvFZDQ7.js";
import { o as g } from "./chunk-DeXYQlWK.js";
import { g as _, h as v, i as y, m as b, p as x, t as S, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let pt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var C = T;
  (function(e2, t2) {
    let n2 = T, r2 = e2();
    for (; ; ) try {
      if (parseInt(n2(229)) / 1 * (-parseInt(n2(233)) / 2) + -parseInt(n2(230)) / 3 + parseInt(n2(243)) / 4 * (parseInt(n2(205)) / 5) + -parseInt(n2(244)) / 6 * (parseInt(n2(250)) / 7) + parseInt(n2(201)) / 8 + -parseInt(n2(234)) / 9 + parseInt(n2(239)) / 10 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(w, 352687);
  function w() {
    let e2 = `map.children.toUpperCase.Pin Numbers.\u6587\u672C\u6D41.filter.eda-tree.code.text.\u8BE5\u6587\u4EF6\u4E0D\u662F\u6807\u51C6 CFB \u5BB9\u5668\uFF0C\u5DF2\u9000\u5316\u4E3A\u5B89\u5168\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u7D22\u5F15\u9884\u89C8\u3002.value.\u56FE\u7EB8\u4FE1\u606F.storage.medium.drawing.main.symbol.forEach.footprint.match.filename.\u5143\u4EF6\u7B26\u53F7.label.join.layers.kind.push.warnings.dra.byteLength.eda-state.properties.5590864oPqjGi.Package.eda-panel.div.907285Ipjhta.Description.eda-string-grid.warning-.eda-stream.strings.name.key.\u53EF\u8BFB\u5B57\u7B26\u4E32.padstack.slice.path.has.trim.size.message.warning.sample.depth.streams.toLowerCase.pins.part.Layers.1aQqfFd.1394670NbIAsC.Pins.geometry.1013410fRpgCO.3767751FfbzDp.length.cfb.route.Padstack.9107200DPqgnQ.role. \xB7 .span.12LHhKGu.24bUgIGm.data-role.description.strong.min.root.719299TEezYI.entry.Drawing`.split(`.`);
    return w = function() {
      return e2;
    }, w();
  }
  function T(e2, t2) {
    return e2 -= 167, w()[e2];
  }
  v(), b();
  var E = [
    208,
    207,
    17,
    224,
    161,
    177,
    26,
    225
  ], D = 200, O = 4096, k = 192, A = 180, j = 24, M = 420, N = (e2) => new Uint8Array(e2), P = (e2) => E.every((t2, n2) => e2[n2] === t2), F = (e2) => e2 instanceof Uint8Array ? e2 : new Uint8Array(e2), I = (e2) => e2.replace(/\u0000/g, ``).replace(/[^\S\r\n]+/g, ` `).replace(/\r\n/g, `
`).trim(), L = (e2) => I(e2).toLowerCase(), R = (e2) => {
    let t2 = T, n2 = e2.split(`/`)[t2(174)](Boolean);
    return n2[n2.length - 1] || e2 || `/`;
  }, z = (e2) => e2.replace(/\.[a-z0-9]+$/i, ``), B = (e2, t2, n2 = 1 / 0) => {
    let r2 = I(t2);
    !r2 || e2.includes(r2) || e2.length >= n2 || e2.push(r2);
  }, V = (e2) => {
    let t2 = T;
    if (!e2.length) return false;
    let n2 = e2[t2(215)](0, Math[t2(248)](e2.length, O)), r2 = 0, i2 = 0;
    for (let e3 of n2) e3 === 0 && (i2 += 1), (e3 === 9 || e3 === 10 || e3 === 13 || e3 >= 32 && e3 <= 126 || e3 >= 128) && (r2 += 1);
    return r2 / n2.length > 0.82 || i2 / n2.length > 0.25;
  }, H = (e2) => {
    let t2 = T, n2 = e2[t2(215)](0, Math[t2(248)](e2.length, O));
    if (!n2.length) return ``;
    try {
      let e3 = 0, r2 = 0;
      for (let t3 = 0; t3 < n2.length; t3 += 1) n2[t3] === 0 && (t3 % 2 == 0 ? r2 += 1 : e3 += 1);
      return I((e3 > n2[t2(235)] / 5 && e3 > r2 * 2 ? new TextDecoder(`utf-16le`, {
        fatal: false
      }) : new TextDecoder(`utf-8`, {
        fatal: false
      })).decode(n2));
    } catch {
      return ``;
    }
  }, U = (e2) => {
    let t2 = T, n2 = e2[t2(215)](0, Math.min(e2.length, k)), r2 = [];
    for (let e3 = 0; e3 < n2[t2(235)]; e3 += 16) {
      let i2 = n2.slice(e3, e3 + 16), a2 = Array.from(i2).map((e4) => e4.toString(16).padStart(2, `0`)).join(` `), o2 = Array.from(i2)[t2(169)]((e4) => e4 >= 32 && e4 <= 126 ? String.fromCharCode(e4) : `.`).join(``);
      r2.push(e3.toString(16).padStart(8, `0`) + `  ` + a2.padEnd(47) + `  ` + o2);
    }
    return r2[t2(192)](`
`);
  }, ne = (e2) => {
    let t2 = T, n2 = [], r2 = ``;
    for (let t3 of e2) {
      if (t3 >= 32 && t3 <= 126) {
        r2 += String.fromCharCode(t3);
        continue;
      }
      r2.length >= 4 && n2.push(r2), r2 = ``;
    }
    return r2[t2(235)] >= 4 && n2.push(r2), n2;
  }, re = (e2) => {
    let t2 = [], n2 = ``;
    for (let r2 = 0; r2 + 1 < e2.length; r2 += 2) {
      let i2 = e2[r2];
      if (e2[r2 + 1] === 0 && i2 >= 32 && i2 <= 126) {
        n2 += String.fromCharCode(i2);
        continue;
      }
      n2.length >= 4 && t2.push(n2), n2 = ``;
    }
    return n2.length >= 4 && t2.push(n2), t2;
  }, W = (e2, t2 = A) => {
    let n2 = T, r2 = /* @__PURE__ */ new Set(), i2 = [];
    return e2[n2(186)]((e3) => {
      [
        ...ne(e3),
        ...re(e3)
      ].forEach((e4) => {
        let n3 = I(e4);
        !n3 || n3.length < 4 || r2.has(n3) || i2.length >= t2 || (r2.add(n3), i2.push(n3));
      });
    }), i2;
  }, ie = /^\s*([A-Za-z][A-Za-z0-9_. /#-]{1,56})\s*[:=]\s*(.{1,240})\s*$/, ae = /\b([A-Za-z][A-Za-z0-9_. /#-]{1,56})\s*=\s*([^;\n\r|]{1,240})/g, oe = (e2) => I(e2).replace(/\s+/g, ` `), G = (e2, t2, n2, r2, i2) => {
    let a2 = T;
    if (e2.length >= M) return;
    let o2 = oe(n2), s2 = I(r2);
    if (!o2 || !s2) return;
    let c2 = i2 + `\0` + o2[a2(225)]() + `\0` + s2;
    t2.has(c2) || (t2.add(c2), e2[a2(195)]({
      key: o2,
      value: s2,
      source: i2
    }));
  }, se = (e2, t2, n2) => {
    let r2 = [], i2 = /* @__PURE__ */ new Set();
    return [
      e2,
      ...t2
    ].filter(Boolean).forEach((e3) => {
      I(e3).split(/\n|[|;]/).forEach((e4) => {
        let t3 = e4.match(ie);
        t3 && G(r2, i2, t3[1], t3[2], n2);
      });
      for (let t3 of e3.matchAll(ae)) G(r2, i2, t3[1], t3[2], n2);
    }), r2;
  }, K = (e2, t2) => {
    let n2 = T, r2 = t2[n2(169)]((e3) => e3[n2(225)]());
    return e2.some((e3) => r2.includes(e3[n2(212)].toLowerCase()));
  }, q = (e2, t2) => {
    var _a;
    let n2 = T, r2 = t2.map((e3) => e3[n2(225)]());
    return (_a = e2.find((e3) => r2.includes(e3.key.toLowerCase()))) == null ? void 0 : _a.value;
  }, J = (e2, t2, n2, r2, i2, a2, o2) => {
    let s2 = T, c2 = L(t2 + `
` + n2 + `
` + r2 + `
` + i2.join(`
`));
    if (c2 === `/` || t2 === `/`) return s2(249);
    if (o2 === `storage` && /(^|\/)(library|libraries)(\/|$)/i.test(t2)) return `library`;
    if (/(header|version|source|author|metadata|property|properties)/.test(c2)) return K(a2, [
      `Name`,
      s2(231),
      `Footprint`,
      `Padstack`
    ]) ? `property` : `metadata`;
    if (e2 === `olb`) {
      if (/(^|\/)(symbols?|parts?)(\/|$)/.test(c2) || K(a2, [
        s2(231),
        `Footprint`,
        `PCB Footprint`,
        `Part Number`
      ])) return `symbol`;
      if (/(^|\/)(library|capture|orcad)(\/|$)/.test(c2)) return `library`;
    }
    if (e2 === `dra`) {
      if (/(padstack|pad stack|thermal|antipad|drill)/.test(c2) || K(a2, [
        s2(238),
        `Drill`
      ])) return `padstack`;
      if (/(footprint|package|psm|bsm|fsm|ssm|symbol)/.test(c2)) return `footprint`;
      if (/(route|net|via|ratsnest)/.test(c2)) return `net`;
      if (/(line |arc |circle|shape|outline|silk|place_bound|assembly|soldermask|pastemask)/.test(c2)) return `geometry`;
      if (/(drawing|units|layers?|constraint|allegro)/.test(c2) || K(a2, [
        `Units`,
        `Layers`
      ])) return `drawing`;
    }
    return a2.length ? `property` : o2 === `storage` ? `library` : `unknown`;
  }, Y = (e2, t2, n2, r2, i2, a2) => {
    let o2 = T;
    if (i2 === `storage` || !a2) return {
      path: t2,
      name: n2,
      size: r2,
      kind: i2,
      role: J(e2, t2, n2, ``, [], [], i2),
      strings: [],
      properties: []
    };
    let s2 = V(a2) ? H(a2) : ``, c2 = W([
      a2
    ], j), l2 = se(s2, c2, t2), u2 = J(e2, t2, n2, s2, c2, l2, s2 ? o2(177) : `binary`);
    return {
      path: t2,
      name: n2,
      size: r2,
      kind: s2 ? `text` : `binary`,
      role: u2,
      sample: s2,
      hex: s2 ? void 0 : U(a2),
      strings: c2,
      properties: l2
    };
  }, X = (e2) => {
    let t2 = T;
    e2[t2(170)].sort((e3, n2) => e3[t2(170)].length === n2.children.length ? e3.name.localeCompare(n2[t2(211)]) : n2.children.length - e3.children.length), e2[t2(170)].forEach(X);
  }, ce = (e2, t2) => {
    let n2 = T, r2 = {
      id: t2 + `:root`,
      path: `/`,
      name: t2.toUpperCase(),
      kind: `storage`,
      role: `root`,
      size: 0,
      children: []
    }, i2 = /* @__PURE__ */ new Map([
      [
        `/`,
        r2
      ]
    ]);
    return e2[n2(186)]((e3) => {
      let a2 = n2, o2 = e3[a2(216)].split(`/`).filter(Boolean), s2 = r2, c2 = ``;
      o2.forEach((n3, r3) => {
        let l2 = a2;
        c2 += `/` + n3;
        let u2 = r3 === o2.length - 1, d2 = i2.get(c2);
        d2 || (d2 = {
          id: t2 + `:` + c2,
          path: c2,
          name: n3,
          kind: u2 ? e3.kind : `storage`,
          role: u2 ? e3.role : J(t2, c2, n3, ``, [], [], l2(181)),
          size: u2 ? e3.size : 0,
          children: []
        }, i2.set(c2, d2), s2[l2(170)].push(d2)), u2 && (d2.kind = e3.kind, d2.role = e3[l2(240)], d2.size = e3.size), s2 = d2;
      });
    }), X(r2), r2[n2(170)];
  }, Z = (e2) => {
    if (!e2) return [];
    let t2 = [];
    return e2.split(/[,/;| ]+/).forEach((e3) => {
      /^[A-Za-z0-9_.+-]+$/.test(e3) && B(t2, e3, 64);
    }), t2;
  }, le = (e2, t2) => t2 === `olb` ? e2.role === C(185) && e2[C(194)] !== `storage` ? `symbol` : null : e2.role === C(214) ? `padstack` : e2.role === `footprint` || e2.role === C(232) && /\/footprint\//i.test(e2.path) ? `footprint` : e2[C(240)] === `drawing` ? `drawing` : null, ue = (e2, t2) => {
    var _a, _b;
    let n2 = C;
    return t2 === `footprint` ? ((_a = e2.path.match(/^(.+?\/Footprint)(?:\/|$)/i)) == null ? void 0 : _a[1]) || e2[n2(216)] : t2 === `drawing` && ((_b = e2.path[n2(188)](/^(.+?\/Drawing)(?:\/|$)/i)) == null ? void 0 : _b[1]) || e2.path;
  }, de = (e2, t2, n2) => {
    let r2 = C, i2 = q(e2.properties, [
      `Name`,
      `Part`,
      `Part Name`,
      `Symbol`,
      `Device`,
      `Footprint`,
      `PCB Footprint`,
      `Package`,
      `Padstack`,
      `Pad Stack`,
      r2(168)
    ]);
    if (i2) return i2;
    let a2 = z(R(n2));
    return a2 && a2 !== `/` ? a2 : t2.toUpperCase();
  }, fe = (e2, t2) => {
    let n2 = C, r2 = [], i2 = (e2.path + `
` + (e2.sample || ``) + `
` + e2[n2(210)].join(`
`)).toLowerCase();
    return (t2 === `symbol` ? [
      `pins`,
      n2(187),
      `pspice`,
      n2(227),
      `symbol`
    ] : [
      `units`,
      n2(193),
      `padstack`,
      `drill`,
      `outline`,
      n2(237),
      `constraint`,
      `shape`,
      `place_bound`
    ])[n2(186)]((e3) => {
      i2.includes(e3) && B(r2, e3, 12);
    }), r2;
  }, Q = (e2, t2) => {
    let n2 = new Set(e2.map((e3) => e3.key.toLowerCase() + `\0` + e3.value));
    t2.forEach((t3) => {
      let r2 = T, i2 = t3.key[r2(225)]() + `\0` + t3[r2(179)];
      n2[r2(217)](i2) || (n2.add(i2), e2.push(t3));
    });
  }, pe = (e2, t2) => {
    let n2 = /* @__PURE__ */ new Map();
    return e2.forEach((e3) => {
      let r2 = T, i2 = le(e3, t2);
      if (!i2) return;
      let a2 = ue(e3, i2), o2 = i2 + `:` + a2.toLowerCase(), s2 = n2.get(o2) || {
        id: o2,
        name: de(e3, i2, a2),
        role: i2,
        path: a2,
        streamCount: 0,
        byteLength: 0,
        properties: [],
        pins: [],
        layers: [],
        keywords: []
      };
      s2.streamCount += 1, s2.byteLength += e3[r2(219)], Q(s2.properties, e3.properties), Z(q(e3.properties, [
        r2(231),
        `Pin`,
        r2(172)
      ])).forEach((e4) => B(s2.pins, e4, 96)), Z(q(e3[r2(200)], [
        `Layers`,
        `Layer`
      ])).forEach((e4) => B(s2.layers, e4, 64)), fe(e3, i2).forEach((e4) => B(s2.keywords, e4, 16)), s2[r2(246)] || (s2.description = q(s2.properties, [
        r2(206),
        `Desc`
      ])), s2.footprint || (s2.footprint = q(s2.properties, [
        `Footprint`,
        `PCB Footprint`,
        r2(202)
      ])), n2.set(o2, s2);
    }), Array.from(n2.values()).sort((e3, t3) => {
      let n3 = T, r2 = {
        symbol: 0,
        footprint: 1,
        padstack: 2,
        drawing: 3
      };
      return (r2[e3[n3(240)]] ?? 9) - (r2[t3.role] ?? 9) || e3.name.localeCompare(t3.name);
    });
  }, me = (e2) => {
    let t2 = C, n2 = [];
    return e2[t2(186)]((e3) => {
      (e3.role === `metadata` || e3.role === `library` || e3.role === `drawing`) && Q(n2, e3.properties);
    }), n2[t2(215)](0, 80);
  }, he = (e2, t2, n2, r2) => {
    let i2 = C, a2 = {
      textStreams: e2.filter((e3) => e3.kind === i2(177)).length,
      binaryStreams: e2.filter((e3) => e3[i2(194)] === `binary`)[i2(235)],
      storageEntries: e2.filter((e3) => e3[i2(194)] === `storage`).length,
      propertyCount: e2.reduce((e3, t3) => e3 + t3[i2(200)].length, 0),
      stringCount: n2[i2(235)],
      symbolCount: t2.filter((e3) => e3.role === i2(185)).length,
      footprintCount: t2[i2(174)]((e3) => e3[i2(240)] === `footprint`).length,
      padstackCount: t2.filter((e3) => e3.role === `padstack`).length,
      confidence: `low`
    };
    return r2 === `cfb` && t2[i2(235)] && a2.propertyCount ? a2.confidence = `high` : (r2 === i2(236) || n2[i2(235)] || a2.propertyCount) && (a2.confidence = i2(182)), a2;
  }, ge = (e2, t2, n2, r2, i2, a2) => {
    let o2 = C, s2 = a2.map((e3, t3) => ({
      level: o2(221),
      code: o2(208) + (t3 + 1),
      message: e3
    }));
    s2.push({
      level: `info`,
      code: `parser`,
      message: t2 === `cfb` ? `\u5DF2\u8BC6\u522B\u4E3A Microsoft Compound File / OLE2 \u590D\u5408\u6587\u6863\u5BB9\u5668\uFF0C\u5E76\u5728\u6D4F\u89C8\u5668\u7AEF\u89E3\u6790\u76EE\u5F55\u4E0E\u6D41\u3002` : `\u672A\u8BC6\u522B\u4E3A CFB \u5BB9\u5668\uFF0C\u5DF2\u4F7F\u7528\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u7D22\u5F15\u6A21\u5F0F\u5C55\u793A\u53EF\u8BFB\u4FE1\u606F\u3002`
    }), s2[o2(195)]({
      level: `info`,
      code: `coverage`,
      message: `\u5DF2\u7D22\u5F15 ` + n2[o2(235)] + ` \u4E2A\u6761\u76EE\u3001` + i2.length + ` \u4E2A\u53EF\u8BFB\u5B57\u7B26\u4E32\u3001` + r2.length + ` \u4E2A EDA \u7ED3\u6784\u5019\u9009\u3002`
    });
    let c2 = e2 === `olb` && !r2.some((e3) => e3.role === `symbol`), l2 = e2 === `dra` && !r2.some((e3) => e3[o2(240)] === o2(187) || e3[o2(240)] === `padstack`);
    return (c2 || l2) && s2[o2(195)]({
      level: `warning`,
      code: `domain-candidates`,
      message: e2 === `olb` ? `\u672A\u53D1\u73B0\u660E\u786E\u7684\u5143\u4EF6\u7B26\u53F7\u5019\u9009\uFF0C\u6587\u4EF6\u53EF\u80FD\u4F7F\u7528\u4E86\u79C1\u6709\u4E8C\u8FDB\u5236\u7F16\u7801\u6216\u9700\u8981\u4E13\u4E1A\u5DE5\u5177\u5BFC\u51FA ASCII/XML \u540E\u518D\u68C0\u67E5\u3002` : `\u672A\u53D1\u73B0\u660E\u786E\u7684\u5C01\u88C5\u3001\u56FE\u5F62\u6216 padstack \u5019\u9009\uFF0C\u6587\u4EF6\u53EF\u80FD\u4F7F\u7528\u4E86\u79C1\u6709\u4E8C\u8FDB\u5236\u6570\u636E\u5E93\u7F16\u7801\u3002`
    }), s2;
  }, $ = (e2, t2, n2, r2, i2, a2, o2) => {
    let s2 = C, c2 = i2.reduce((e3, t3) => e3 + t3.size, 0), l2 = pe(i2, t2), u2 = me(i2), d2 = ge(t2, n2, i2, l2, a2, o2);
    return {
      type: t2,
      parser: n2,
      title: t2 === `olb` ? n2 === `cfb` ? `OrCAD Capture Symbol Library` : `OLB Binary Library` : n2 === s2(236) ? `OrCAD / Allegro Drawing Library` : `DRA Binary Drawing`,
      byteLength: e2.byteLength,
      streamCount: r2,
      totalStreamBytes: c2,
      streams: i2,
      tree: ce(i2, t2),
      entities: l2,
      metadata: u2,
      strings: a2,
      warnings: o2,
      diagnostics: d2,
      stats: he(i2, l2, a2, n2)
    };
  }, _e = (function() {
    var t2 = x(function* (t3, n2) {
      let r2 = T, i2 = (yield e(() => import("./cfb-Dmo-NGX5.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((e2) => g(e2.default, 1)), __vite__mapDeps([0,1,2,3]))).parse(N(t3), {
        type: `array`
      }), a2 = i2.FileIndex.map((e2, t4) => ({
        entry: e2,
        path: i2.FullPaths[t4] || e2.name
      })).filter((e2) => e2[r2(167)].type !== 5 && e2.path !== `/` && e2.entry.name).slice(0, D), o2 = [], s2 = a2.map(({ entry: e2, path: t4 }) => {
        let i3 = r2;
        if (e2.type === 1) return Y(n2, t4, e2.name, e2[i3(219)] || 0, `storage`);
        let a3 = F(e2.content || []);
        return o2.push(a3), Y(n2, t4, e2.name, e2.size || a3.byteLength || 0, `binary`, a3);
      }), c2 = a2[r2(235)] >= D ? [
        `\u4EC5\u5C55\u793A\u524D ` + D + ` \u4E2A CFB \u9879\uFF0C\u5B8C\u6574\u6587\u4EF6\u4ECD\u53EF\u4E0B\u8F7D\u540E\u5728\u4E13\u4E1A EDA \u5DE5\u5177\u4E2D\u6253\u5F00\u3002`
      ] : [];
      return $(t3, n2, `cfb`, i2.FileIndex.length, s2, W(o2), c2);
    });
    return function(e2, n2) {
      return t2.apply(this, arguments);
    };
  })(), ve = (e2, t2) => {
    let n2 = C, r2 = N(e2);
    return $(e2, t2, `binary`, 1, [
      Y(t2, t2 + `.` + t2, t2 + `.` + t2, e2[n2(198)], `binary`, r2)
    ], W([
      r2
    ]), [
      n2(178)
    ]);
  }, ye = (function() {
    var e2 = x(function* (e3, t2 = `olb`) {
      let n2 = T, r2 = t2 === `dra` ? n2(197) : `olb`;
      if (!P(N(e3))) return ve(e3, r2);
      try {
        return yield _e(e3, r2);
      } catch (t3) {
        let i2 = ve(e3, r2);
        return i2[n2(196)].unshift(t3 instanceof Error ? t3[n2(220)] : String(t3)), i2.diagnostics.unshift({
          level: n2(221),
          code: `cfb-parse-failed`,
          message: t3 instanceof Error ? t3.message : String(t3)
        }), i2;
      }
    });
    return function(t2) {
      return e2.apply(this, arguments);
    };
  })();
  b();
  let be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft;
  be = {
    class: `eda-viewer`
  };
  xe = {
    class: `eda-header`
  };
  Se = {
    key: 0
  };
  Ce = {
    key: 0,
    class: `eda-body`
  };
  we = {
    class: `eda-sidebar`
  };
  Te = {
    class: `eda-summary`
  };
  Ee = {
    class: `eda-mini-grid`
  };
  De = {
    key: 0,
    class: `eda-warning`
  };
  Oe = {
    class: `eda-stream-list`
  };
  ke = [
    `onClick`
  ];
  Ae = [
    C(245)
  ];
  je = {
    class: `eda-preview`
  };
  Me = {
    class: `eda-panel eda-panel--compact`
  };
  Ne = {
    class: `eda-panel-head`
  };
  Pe = {
    class: `eda-stat-grid`
  };
  Fe = {
    class: `eda-topology`
  };
  Ie = {
    class: `eda-panel`
  };
  Le = {
    class: `eda-panel-head`
  };
  Re = {
    class: C(175)
  };
  ze = [
    `onClick`
  ];
  Be = {
    class: `eda-panel`
  };
  Ve = {
    class: `eda-panel-head`
  };
  He = {
    key: 0,
    class: `eda-entities`
  };
  Ue = [
    `onClick`
  ];
  We = {
    key: 0
  };
  Ge = {
    key: 0
  };
  Ke = {
    key: 1
  };
  qe = {
    key: 2
  };
  Je = {
    key: 3
  };
  Ye = {
    key: 1,
    class: `eda-empty`
  };
  Xe = {
    class: C(203)
  };
  Ze = {
    class: `eda-panel-head`
  };
  Qe = {
    key: 0,
    class: `eda-selected-meta`
  };
  $e = {
    key: 1,
    class: `eda-property-grid`
  };
  et = {
    key: 2
  };
  tt = {
    key: 3,
    class: `eda-empty`
  };
  nt = {
    class: `eda-bottom`
  };
  rt = {
    class: `eda-panel`
  };
  it = {
    class: `eda-panel-head`
  };
  at = {
    class: C(207)
  };
  ot = {
    class: `eda-panel`
  };
  st = {
    class: `eda-panel-head`
  };
  ct = {
    class: `eda-diagnostics`
  };
  lt = [
    `data-level`
  ];
  ut = {
    key: 0,
    class: `eda-local-strings`
  };
  dt = {
    key: 1,
    class: C(199)
  };
  ft = {
    key: 2,
    class: `eda-error`
  };
  pt = S(m({
    __name: `EdaViewer`,
    props: {
      data: {},
      type: {},
      filename: {}
    },
    setup(e2) {
      let m2 = C, g2 = e2, v2 = r(null), b2 = r(true), S2 = r(``), w2 = r(null), E2 = r(``), D2 = {
        root: `\u6839`,
        library: `\u5E93`,
        symbol: m2(190),
        footprint: `\u5C01\u88C5`,
        padstack: `Padstack`,
        drawing: `\u56FE\u7EB8`,
        metadata: `\u5143\u6570\u636E`,
        property: `\u5C5E\u6027`,
        geometry: `\u51E0\u4F55`,
        net: `\u7F51\u7EDC`,
        unknown: `\u672A\u77E5`
      }, O2 = {
        high: `\u9AD8`,
        medium: `\u4E2D`,
        low: `\u4F4E`
      }, k2 = (e3) => D2[e3] || e3, A2 = (e3) => e3 === m2(181) ? `\u76EE\u5F55` : e3 === `text` ? `\u6587\u672C` : `\u4E8C\u8FDB\u5236`, j2 = (e3) => e3.replace(/^\/+/, ``).toLowerCase(), M2 = l(() => {
        let e3 = m2;
        if (!v2.value) return [];
        let t2 = v2.value.stats;
        return [
          {
            label: e3(173),
            value: t2.textStreams
          },
          {
            label: `\u4E8C\u8FDB\u5236\u6D41`,
            value: t2.binaryStreams
          },
          {
            label: `\u76EE\u5F55`,
            value: t2.storageEntries
          },
          {
            label: `\u5C5E\u6027`,
            value: t2.propertyCount
          },
          {
            label: `\u7B26\u53F7`,
            value: t2.symbolCount
          },
          {
            label: `\u5C01\u88C5`,
            value: t2.footprintCount
          },
          {
            label: `Padstack`,
            value: t2.padstackCount
          },
          {
            label: `\u53EF\u4FE1\u5EA6`,
            value: O2[t2.confidence]
          }
        ];
      }), N2 = l(() => {
        var _a;
        let e3 = m2, t2 = ((_a = v2[e3(179)]) == null ? void 0 : _a.entities) || [], n2 = [
          {
            role: `symbol`,
            label: e3(190),
            items: []
          },
          {
            role: `footprint`,
            label: `\u5C01\u88C5\u56FE\u5F62`,
            items: []
          },
          {
            role: e3(214),
            label: `Padstack`,
            items: []
          },
          {
            role: e3(183),
            label: e3(180),
            items: []
          }
        ];
        return n2.forEach((e4) => {
          e4.items = t2.filter((t3) => t3.role === e4.role);
        }), n2.filter((e4) => e4.items.length);
      }), P2 = l(() => {
        var _a;
        let e3 = m2, t2 = E2[e3(179)][e3(218)]().toLowerCase(), n2 = ((_a = v2.value) == null ? void 0 : _a[e3(224)]) || [];
        return t2 ? n2.filter((n3) => {
          let r2 = e3, i2 = n3[r2(200)][r2(169)]((e4) => e4.key + `=` + e4.value).join(`
`);
          return (n3.path + `
` + n3[r2(211)] + `
` + n3.kind + `
` + n3.role + `
` + (n3[r2(222)] || ``) + `
` + n3[r2(210)].join(`
`) + `
` + i2).toLowerCase().includes(t2);
        }) : n2;
      }), F2 = (e3, t2 = 0) => e3.flatMap((e4) => [
        _(_({}, e4), {}, {
          depth: t2
        }),
        ...F2(e4.children, t2 + 1)
      ]), I2 = l(() => {
        var _a;
        return F2(((_a = v2.value) == null ? void 0 : _a.tree) || []);
      }), L2 = l(() => {
        var _a;
        return ((_a = w2.value) == null ? void 0 : _a.properties) || [];
      }), R2 = l(() => {
        var _a;
        return ((_a = w2.value) == null ? void 0 : _a.strings) || [];
      }), z2 = l(() => {
        var _a, _b;
        let e3 = m2;
        return ((_a = w2[e3(179)]) == null ? void 0 : _a.sample) || ((_b = w2[e3(179)]) == null ? void 0 : _b.hex) || ``;
      }), B2 = (e3) => {
        let t2 = m2;
        w2[t2(179)] = e3;
      }, V2 = (e3) => {
        var _a;
        let t2 = m2, n2 = j2(e3.path), r2 = (_a = v2[t2(179)]) == null ? void 0 : _a.streams.find((e4) => j2(e4.path) === n2);
        r2 && (w2.value = r2);
      }, H2 = (e3) => {
        var _a;
        let t2 = j2(e3.path), n2 = (_a = v2.value) == null ? void 0 : _a.streams.find((e4) => {
          let n3 = j2(e4.path);
          return n3 === t2 || n3.startsWith(t2 + `/`);
        });
        n2 && (w2.value = n2);
      }, U2 = (function() {
        var e3 = x(function* () {
          let e4 = T;
          b2.value = true, S2[e4(179)] = ``;
          try {
            let t2 = yield ye(g2.data, g2.type);
            v2.value = t2, w2.value = t2.streams.find((e5) => e5.properties.length) || t2[e4(224)].find((t3) => t3.kind === e4(177)) || t2[e4(224)][0] || null;
          } catch (t2) {
            console.error(t2), S2[e4(179)] = t2 instanceof Error ? t2[e4(220)] : String(t2);
          } finally {
            b2.value = false;
          }
        });
        return function() {
          return e3.apply(this, arguments);
        };
      })();
      return u(() => {
        U2();
      }), (r2, l2) => {
        var _a, _b;
        let u2 = m2;
        return p(), t(`section`, be, [
          d(`header`, xe, [
            d(u2(204), null, [
              d(`span`, null, i(((_a = v2.value) == null ? void 0 : _a.parser) === `cfb` ? `CFB STRUCTURE VIEWER` : `BINARY STRUCTURE VIEWER`), 1),
              d(`h2`, null, i(e2[u2(189)]), 1)
            ]),
            v2.value ? (p(), t(`dl`, Se, [
              d(`div`, null, [
                l2[1] || (l2[1] = d(`dt`, null, `\u683C\u5F0F`, -1)),
                d(`dd`, null, i(v2.value.type.toUpperCase()), 1)
              ]),
              d(`div`, null, [
                l2[2] || (l2[2] = d(`dt`, null, `\u5927\u5C0F`, -1)),
                d(`dd`, null, i(s(y)(v2.value.byteLength)), 1)
              ]),
              d(`div`, null, [
                l2[3] || (l2[3] = d(`dt`, null, `\u6761\u76EE`, -1)),
                d(`dd`, null, i(v2.value.streamCount), 1)
              ]),
              d(u2(204), null, [
                l2[4] || (l2[4] = d(`dt`, null, `\u53EF\u4FE1\u5EA6`, -1)),
                d(`dd`, null, i(O2[v2.value.stats.confidence]), 1)
              ])
            ])) : o(``, true)
          ]),
          v2.value ? (p(), t(`div`, Ce, [
            d(`aside`, we, [
              d(`div`, Te, [
                d(`strong`, null, i(v2[u2(179)].title), 1),
                l2[5] || (l2[5] = d(`p`, null, `OLB / DRA \u5C5E\u4E8E OrCAD / Allegro \u751F\u6001\u7684\u79C1\u6709\u8BBE\u8BA1\u6570\u636E\u3002\u9884\u89C8\u5668\u4F18\u5148\u89E3\u6790 CFB \u7ED3\u6784\u3001\u5BF9\u8C61\u5019\u9009\u3001\u5C5E\u6027\u548C\u53EF\u8BFB\u6587\u672C\uFF0C\u5E76\u5728\u7EAF\u524D\u7AEF\u5B89\u5168\u9000\u5316\u3002`, -1))
              ]),
              d(`div`, Ee, [
                (p(true), t(h, null, f(M2.value.slice(0, 4), (e3) => (p(), t(`div`, {
                  key: e3.label
                }, [
                  d(`span`, null, i(e3.label), 1),
                  d(`strong`, null, i(e3.value), 1)
                ]))), 128))
              ]),
              v2.value.warnings.length ? (p(), t(`div`, De, [
                (p(true), t(h, null, f(v2.value.warnings, (e3) => (p(), t(`p`, {
                  key: e3
                }, i(e3), 1))), 128))
              ])) : o(``, true),
              n(d(`input`, {
                "onUpdate:modelValue": l2[0] || (l2[0] = (e3) => E2.value = e3),
                class: `eda-search`,
                type: `search`,
                placeholder: `\u7B5B\u9009\u8DEF\u5F84\u3001\u89D2\u8272\u3001\u5C5E\u6027\u6216\u6587\u672C`
              }, null, 512), [
                [
                  te,
                  E2[u2(179)]
                ]
              ]),
              d(`div`, Oe, [
                (p(true), t(h, null, f(P2[u2(179)], (e3) => {
                  var _a2;
                  let n2 = u2;
                  return p(), t(`button`, {
                    key: e3.path,
                    type: `button`,
                    class: a([
                      n2(209),
                      {
                        active: ((_a2 = w2[n2(179)]) == null ? void 0 : _a2.path) === e3.path
                      }
                    ]),
                    onClick: (t2) => B2(e3)
                  }, [
                    d(`span`, {
                      "data-role": e3.role
                    }, i(k2(e3.role)), 9, Ae),
                    d(`strong`, null, i(e3.name || e3[n2(216)]), 1),
                    d(`em`, null, i(e3.path), 1),
                    d(`small`, null, i(A2(e3.kind)) + ` \xB7 ` + i(s(y)(e3.size)), 1)
                  ], 10, ke);
                }), 128))
              ])
            ]),
            d(u2(184), je, [
              d(`section`, Me, [
                d(`div`, Ne, [
                  l2[6] || (l2[6] = d(u2(242), null, `\u89E3\u6790\u6982\u89C8`, -1)),
                  d(u2(247), null, i(v2.value.parser.toUpperCase()) + ` \xB7 ` + i(s(y)(v2.value.totalStreamBytes)), 1)
                ]),
                d(`div`, Pe, [
                  (p(true), t(h, null, f(M2[u2(179)], (e3) => (p(), t(u2(204), {
                    key: e3[u2(191)]
                  }, [
                    d(`span`, null, i(e3.label), 1),
                    d(`strong`, null, i(e3.value), 1)
                  ]))), 128))
                ])
              ]),
              d(`section`, Fe, [
                d(`div`, Ie, [
                  d(`div`, Le, [
                    l2[7] || (l2[7] = d(u2(242), null, `\u7ED3\u6784\u6811`, -1)),
                    d(`strong`, null, i(I2.value[u2(235)]) + ` \u8282\u70B9`, 1)
                  ]),
                  d(u2(204), Re, [
                    (p(true), t(h, null, f(I2.value, (e3) => {
                      var _a2;
                      let n2 = u2;
                      return p(), t(`button`, {
                        key: e3.id,
                        type: `button`,
                        class: a({
                          active: j2(((_a2 = w2.value) == null ? void 0 : _a2.path) || ``) === j2(e3[n2(216)])
                        }),
                        onClick: (t2) => V2(e3)
                      }, [
                        d(`span`, {
                          style: c({
                            paddingLeft: e3[n2(223)] * 14 + `px`
                          })
                        }, i(e3.children.length ? `\u25B8` : `\u2022`), 5),
                        d(n2(247), null, i(e3.name), 1),
                        d(`em`, null, i(k2(e3.role)), 1),
                        d(`small`, null, i(e3.size ? s(y)(e3.size) : A2(e3.kind)), 1)
                      ], 10, ze);
                    }), 128))
                  ])
                ]),
                d(u2(204), Be, [
                  d(`div`, Ve, [
                    l2[8] || (l2[8] = d(`span`, null, `EDA \u5BF9\u8C61`, -1)),
                    d(u2(247), null, i(v2.value.entities.length) + ` \u9879`, 1)
                  ]),
                  N2[u2(179)].length ? (p(), t(u2(204), He, [
                    (p(true), t(h, null, f(N2[u2(179)], (e3) => (p(), t(`div`, {
                      key: e3.role,
                      class: `eda-entity-group`
                    }, [
                      d(`h3`, null, i(e3.label), 1),
                      (p(true), t(h, null, f(e3.items, (e4) => (p(), t(`button`, {
                        key: e4.id,
                        type: `button`,
                        onClick: (t2) => H2(e4)
                      }, [
                        d(`strong`, null, i(e4.name), 1),
                        d(`span`, null, i(s(y)(e4.byteLength)) + u2(241) + i(e4.streamCount) + ` \u6761\u76EE`, 1),
                        e4.description ? (p(), t(`p`, We, i(e4.description), 1)) : o(``, true),
                        d(`dl`, null, [
                          e4[u2(187)] ? (p(), t(`div`, Ge, [
                            l2[9] || (l2[9] = d(`dt`, null, `Footprint`, -1)),
                            d(`dd`, null, i(e4.footprint), 1)
                          ])) : o(``, true),
                          e4[u2(226)].length ? (p(), t(u2(204), Ke, [
                            l2[10] || (l2[10] = d(`dt`, null, u2(231), -1)),
                            d(`dd`, null, i(e4.pins[u2(192)](`, `)), 1)
                          ])) : o(``, true),
                          e4.layers.length ? (p(), t(`div`, qe, [
                            l2[11] || (l2[11] = d(`dt`, null, u2(228), -1)),
                            d(`dd`, null, i(e4.layers[u2(192)](`, `)), 1)
                          ])) : o(``, true),
                          e4.keywords[u2(235)] ? (p(), t(`div`, Je, [
                            l2[12] || (l2[12] = d(`dt`, null, `Keywords`, -1)),
                            d(`dd`, null, i(e4.keywords.join(`, `)), 1)
                          ])) : o(``, true)
                        ])
                      ], 8, Ue))), 128))
                    ]))), 128))
                  ])) : (p(), t(`div`, Ye, [
                    ...l2[13] || (l2[13] = [
                      d(`strong`, null, `\u6CA1\u6709\u660E\u786E\u5BF9\u8C61\u5019\u9009`, -1),
                      d(`p`, null, `\u4ECD\u53EF\u4ECE\u7ED3\u6784\u6811\u3001\u5C5E\u6027\u548C\u5B57\u7B26\u4E32\u7D22\u5F15\u4E2D\u67E5\u770B\u53EF\u8BFB\u5185\u5BB9\u3002`, -1)
                    ])
                  ]))
                ])
              ]),
              d(`section`, Xe, [
                d(`div`, Ze, [
                  l2[14] || (l2[14] = d(`span`, null, `\u5F53\u524D\u6761\u76EE`, -1)),
                  d(`strong`, null, i(((_b = w2[u2(179)]) == null ? void 0 : _b.path) || `\u672A\u9009\u62E9`), 1)
                ]),
                w2.value ? (p(), t(`div`, Qe, [
                  d(u2(242), null, i(k2(w2[u2(179)].role)), 1),
                  d(`span`, null, i(A2(w2.value.kind)), 1),
                  d(`span`, null, i(s(y)(w2.value.size)), 1)
                ])) : o(``, true),
                L2.value[u2(235)] ? (p(), t(`div`, $e, [
                  (p(true), t(h, null, f(L2.value, (e3) => (p(), t(`div`, {
                    key: e3.source + `-` + e3[u2(212)] + `-` + e3.value
                  }, [
                    d(`span`, null, i(e3.key), 1),
                    d(u2(247), null, i(e3.value), 1)
                  ]))), 128))
                ])) : o(``, true),
                z2.value ? (p(), t(`pre`, et, i(z2.value), 1)) : (p(), t(`div`, tt, [
                  ...l2[15] || (l2[15] = [
                    d(`strong`, null, `\u76EE\u5F55\u6761\u76EE`, -1),
                    d(`p`, null, `\u8BE5\u8282\u70B9\u7528\u4E8E\u7EC4\u7EC7\u4E0B\u7EA7\u6D41\uFF0C\u6CA1\u6709\u53EF\u76F4\u63A5\u5C55\u793A\u7684\u6587\u672C\u6216\u5341\u516D\u8FDB\u5236\u7247\u6BB5\u3002`, -1)
                  ])
                ]))
              ]),
              d(`section`, nt, [
                d(u2(204), rt, [
                  d(`div`, it, [
                    l2[16] || (l2[16] = d(`span`, null, u2(213), -1)),
                    d(`strong`, null, i(v2.value.strings.length) + ` \u9879`, 1)
                  ]),
                  d(`div`, at, [
                    (p(true), t(h, null, f(v2.value.strings, (e3, n2) => (p(), t(`span`, {
                      key: e3 + `-` + n2
                    }, i(e3), 1))), 128))
                  ])
                ]),
                d(u2(204), ot, [
                  d(`div`, st, [
                    l2[17] || (l2[17] = d(u2(242), null, `\u8BCA\u65AD`, -1)),
                    d(`strong`, null, i(v2[u2(179)].diagnostics[u2(235)]) + ` \u6761`, 1)
                  ]),
                  d(`div`, ct, [
                    (p(true), t(h, null, f(v2[u2(179)].diagnostics, (e3) => (p(), t(`p`, {
                      key: e3[u2(176)] + `-` + e3[u2(220)],
                      "data-level": e3.level
                    }, [
                      d(u2(242), null, i(e3.level), 1),
                      ee(` ` + i(e3.message), 1)
                    ], 8, lt))), 128))
                  ]),
                  R2.value.length ? (p(), t(u2(204), ut, [
                    l2[18] || (l2[18] = d(`strong`, null, `\u5F53\u524D\u6761\u76EE\u5B57\u7B26\u4E32`, -1)),
                    (p(true), t(h, null, f(R2.value, (e3, n2) => (p(), t(`span`, {
                      key: e3 + `-` + n2
                    }, i(e3), 1))), 128))
                  ])) : o(``, true)
                ])
              ])
            ])
          ])) : o(``, true),
          b2.value ? (p(), t(`div`, dt, [
            l2[19] || (l2[19] = d(`span`, null, null, -1)),
            d(`strong`, null, `\u6B63\u5728\u89E3\u6790 ` + i(e2.type[u2(171)]()) + `...`, 1)
          ])) : o(``, true),
          S2.value ? (p(), t(`div`, ft, [
            l2[20] || (l2[20] = d(`strong`, null, `EDA \u9884\u89C8\u63D0\u793A`, -1)),
            d(`p`, null, i(S2[u2(179)]), 1)
          ])) : o(``, true)
        ]);
      };
    }
  }), [
    [
      `__scopeId`,
      `data-v-9eb9b927`
    ]
  ]);
});
export {
  __tla,
  pt as default
};
