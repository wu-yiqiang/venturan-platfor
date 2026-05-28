const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["word-B84jt2Zx.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","index-IvLr1-5o.css","pptx-UJ2ZBvXd.js","xlsx-BRjPxYBr.js","pdf-CbGSbGv0.js","ofd2-Bs0ptbCG.js","archive-CtpJw_xJ.js","email-CEMHPT1n.js","eda-C38llHvD.js","cad-CPFLMM0z.js","model-ChNQawP7.js","drawing-DrNCn3Q3.js","ebook-BdGMm6l9.js","umd-CsK81iuZ.js","image-DMpoQQBV.js","md-BEqwcMJo.js","text-BPFoXQfR.js","audio-DiLEPirI.js"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { m as t, n, p as r, r as i, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let h;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var a = s;
  (function(e2, t2) {
    let n2 = s, r2 = e2();
    for (; ; ) try {
      if (-parseInt(n2(293)) / 1 * (parseInt(n2(280)) / 2) + -parseInt(n2(282)) / 3 * (-parseInt(n2(291)) / 4) + parseInt(n2(278)) / 5 + parseInt(n2(292)) / 6 * (parseInt(n2(298)) / 7) + parseInt(n2(288)) / 8 + -parseInt(n2(286)) / 9 * (-parseInt(n2(281)) / 10) + -parseInt(n2(285)) / 11 * (parseInt(n2(295)) / 12) === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(o, 205667);
  function o() {
    let e2 = [
      `396760CvHbbM`,
      `jpg`,
      `2IhwotS`,
      `80oYgBxC`,
      `2271VEdoZQ`,
      `xlsm`,
      `mpeg`,
      `406417baCRQQ`,
      `324846dgqeRh`,
      `svg`,
      `798504DuTxhH`,
      `umd`,
      `epub`,
      `2020gBwiQD`,
      `30GYuCuS`,
      `149869FkJfEL`,
      `csv`,
      `276KsQhCB`,
      `webp`,
      `docx`,
      `497161OeFlZP`
    ];
    return o = function() {
      return e2;
    }, o();
  }
  function s(e2, t2) {
    return e2 -= 278, o()[e2];
  }
  t();
  let c, l, u, d, f, p, m;
  c = [
    `xlsx`,
    a(283),
    `xlsb`,
    `xls`,
    a(294),
    `ods`,
    `fods`,
    `numbers`
  ];
  l = [
    `gif`,
    a(279),
    `jpeg`,
    `bmp`,
    `tiff`,
    `tif`,
    `png`,
    a(287),
    a(296)
  ];
  u = [
    `excalidraw`,
    `drawio`,
    `dio`
  ];
  d = [
    `mp3`,
    a(284),
    `wav`,
    `ogg`,
    `oga`,
    `opus`,
    `m4a`,
    `aac`,
    `flac`,
    `weba`
  ];
  f = `txt.json.js.mjs.cjs.css.java.py.html.htm.jsx.ts.tsx.xml.log.vue.yaml.yml.ini.sh.bash.sql.go.rs.php.c.cpp.cc.h.hpp.cs.diff`.split(`.`);
  p = (e2) => ({
    $el: e2,
    unmount() {
    }
  });
  m = (function() {
    var e2 = r(function* (e3, t2) {
      return e3.innerHTML = `<div style="text-align:center;margin-top:80px">\u4E0D\u652F\u6301.` + t2 + `\u683C\u5F0F\u7684\u5728\u7EBF\u9884\u89C8\uFF0C\u8BF7\u4E0B\u8F7D\u540E\u9884\u89C8\u6216\u8F6C\u6362\u4E3A\u652F\u6301\u7684\u683C\u5F0F</div>
<div style="text-align:center">\u538B\u7F29\u5305\u548C\u90AE\u4EF6\u9644\u4EF6\u4F1A\u590D\u7528\u4E3B\u9884\u89C8\u5668\u7684\u683C\u5F0F\u80FD\u529B\uFF0C\u5F53\u524D\u9644\u4EF6\u7C7B\u578B\u6682\u672A\u547D\u4E2D\u53EF\u9884\u89C8\u94FE\u8DEF\u3002</div>`, p(e3);
    });
    return function(t2, n2) {
      return e2.apply(this, arguments);
    };
  })();
  h = (function() {
    var t2 = r(function* (t3, r2, a2, o2) {
      let h2 = s, g = r2.toLowerCase();
      if (g === h2(297)) {
        let { renderDocx: n2 } = yield e(() => import("./word-B84jt2Zx.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0,1,2,3,4])), r3 = yield n2(t3, a2);
        return window.dispatchEvent(new Event(`resize`)), r3;
      }
      if (g === `doc`) {
        let { renderDoc: n2 } = yield e(() => import("./word-B84jt2Zx.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([0,1,2,3,4]));
        return n2(t3, a2);
      }
      if (g === `pptx`) {
        let { default: n2 } = yield e(() => import("./pptx-UJ2ZBvXd.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([5,1,2,3,4]));
        return yield n2(t3, a2), window.dispatchEvent(new Event(`resize`)), p(a2);
      }
      if (c.includes(g)) {
        let { default: n2 } = yield e(() => import("./xlsx-BRjPxYBr.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([6,1,2,3,4]));
        return n2(t3, a2);
      }
      if (g === `pdf`) {
        let { default: n2 } = yield e(() => import("./pdf-CbGSbGv0.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([7,1,2,3,4]));
        return n2(t3, a2);
      }
      if (g === `ofd`) {
        let { default: n2 } = yield e(() => import("./ofd2-Bs0ptbCG.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([8,1,2,3,4]));
        return n2(t3, a2);
      }
      if (i.includes(g)) {
        let { default: n2 } = yield e(() => import("./archive-CtpJw_xJ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([9,1,2,3,4]));
        return n2(t3, a2, o2);
      }
      if (g === `eml` || g === `msg`) {
        let { default: n2 } = yield e(() => import("./email-CEMHPT1n.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([10,1,2,3,4]));
        return n2(t3, a2, g, o2);
      }
      if (g === `olb` || g === `dra`) {
        let { default: n2 } = yield e(() => import("./eda-C38llHvD.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([11,1,2,3,4]));
        return n2(t3, a2, g, o2);
      }
      if (g === `dxf` || g === `dwg`) {
        let { default: n2 } = yield e(() => import("./cad-CPFLMM0z.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([12,1,2,3,4]));
        return n2(t3, a2, g);
      }
      if (n.includes(g)) {
        let { default: n2 } = yield e(() => import("./model-ChNQawP7.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([13,1,2,3,4]));
        return n2(t3, a2, g, o2);
      }
      if (u.includes(g)) {
        let { default: n2 } = yield e(() => import("./drawing-DrNCn3Q3.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([14,1,2,3,4]));
        return n2(t3, a2, g);
      }
      if (g === h2(290)) {
        let { default: n2 } = yield e(() => import("./ebook-BdGMm6l9.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([15,1,2,3,4]));
        return n2(t3, a2);
      }
      if (g === h2(289)) {
        let { default: n2 } = yield e(() => import("./umd-CsK81iuZ.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([16,1,2,3,4]));
        return n2(t3, a2);
      }
      if (l.includes(g)) {
        let { default: n2 } = yield e(() => import("./image-DMpoQQBV.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([17,1,2,3,4]));
        return n2(t3, a2);
      }
      if (g === `md` || g === `markdown`) {
        let { default: n2 } = yield e(() => import("./md-BEqwcMJo.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([18,1,2,3,4]));
        return n2(t3, a2);
      }
      if (f.includes(g)) {
        let { default: n2 } = yield e(() => import("./text-BPFoXQfR.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([19,1,2,3,4]));
        return n2(t3, a2, g);
      }
      if (g === `mp4`) {
        let { default: n2 } = yield e(() => import("./mp4-Bp2-UgK_.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), []);
        return n2(t3, a2), p(a2);
      }
      if (d.includes(g)) {
        let { default: n2 } = yield e(() => import("./audio-DiLEPirI.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([20,1,2,3,4]));
        return n2(t3, a2, g);
      }
      return m(a2, g);
    });
    return function(e2, n2, r2, i2) {
      return t2.apply(this, arguments);
    };
  })();
});
export {
  __tla,
  h as t
};
