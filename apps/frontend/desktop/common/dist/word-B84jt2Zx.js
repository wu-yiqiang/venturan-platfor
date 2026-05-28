const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["docx-preview-YwdkyMcv.js","index-D-g3WoLo.js","_plugin-vue_export-helper-BDNMzG2s.js","chunk-DeXYQlWK.js","jszip.min-DwLxZD9E.js","index-IvLr1-5o.css"])))=>i.map(i=>d[i]);
import { t as e } from "./preload-helper-zJ_50EbN.js";
import { _ as t, g as n, h as r, m as i, p as a, v as o, __tla as __tla_0 } from "./index-D-g3WoLo.js";
let gn, g;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var s = Q;
  (function(e2, t2) {
    let n2 = Q, r2 = e2();
    for (; ; ) try {
      if (parseInt(n2(476)) / 1 + parseInt(n2(613)) / 2 * (-parseInt(n2(663)) / 3) + parseInt(n2(600)) / 4 * (parseInt(n2(517)) / 5) + parseInt(n2(696)) / 6 + parseInt(n2(664)) / 7 * (parseInt(n2(469)) / 8) + parseInt(n2(646)) / 9 + -parseInt(n2(532)) / 10 === t2) break;
      r2.push(r2.shift());
    } catch {
      r2.push(r2.shift());
    }
  })(Ie, 777273), i();
  var c = (() => {
    let t2 = {
      module: null,
      load() {
        var t3 = this;
        return a(function* () {
          let n2 = Q;
          return t3.module || (t3.module = e(() => import("./docx-preview-YwdkyMcv.js").then(async (m2) => {
            await m2.__tla;
            return m2;
          }), __vite__mapDeps([0,1,2,3,4,5]))), t3[n2(675)];
        })();
      }
    };
    return a(function* () {
      return yield t2.load();
    });
  })(), l = s(570);
  function u(e2) {
    let t2 = document.createElement(`style`);
    return t2.textContent = l, e2.prepend(t2), t2;
  }
  function d(e2, t2, n2) {
    let r2 = s, i2 = e2.cloneNode(false);
    i2.innerHTML = ``, i2.dataset.docxPaginated = `true`, i2.style[r2(587)] = n2 + `px`, i2.style[r2(486)] = n2 + `px`, i2.style.overflow = `hidden`;
    let a2 = t2[r2(547)](false);
    return i2.appendChild(a2), Array.from(e2.children).forEach((e3) => {
      let n3 = r2;
      e3 !== t2 && i2.appendChild(e3[n3(547)](true));
    }), {
      page: i2,
      article: a2
    };
  }
  function f(e2) {
    let t2 = window[s(581)](e2), n2 = parseFloat(t2.minHeight);
    return Number.isFinite(n2) && n2 > 0 ? n2 : e2.offsetHeight;
  }
  function p(e2) {
    let t2 = s, n2 = e2[t2(722)](`.docx-wrapper`);
    n2 && Array[t2(660)](n2.children).forEach((e3) => {
      if (!(e3 instanceof HTMLElement) || !e3.matches(`section.docx`)) return;
      let t3 = e3.querySelector(`:scope > article`);
      if (!(t3 instanceof HTMLElement)) return;
      let n3 = f(e3), r2 = Array.from(t3.childNodes);
      if (!n3 || r2.length < 2 || e3.scrollHeight <= n3 * 1.15) return;
      let i2 = d(e3, t3, n3);
      e3.before(i2.page), r2.forEach((r3) => {
        let a2 = Q;
        i2.article.appendChild(r3), !(i2.page.scrollHeight <= n3 + 1 || i2.article[a2(658)].length === 1) && (i2[a2(724)].removeChild(r3), i2 = d(e3, t3, n3), e3.before(i2.page), i2.article.appendChild(r3));
      }), e3.remove();
    });
  }
  function m(e2) {
    let t2 = s, n2 = e2.querySelector(t2(642));
    return n2 ? Array.from(n2.children).flatMap((e3) => {
      if (!(e3 instanceof HTMLElement) || !e3.matches(`section.docx`)) return [];
      let t3 = document.createElement(`div`);
      return t3.className = `docx-page-frame`, e3.before(t3), t3.appendChild(e3), [
        t3
      ];
    }) : [];
  }
  function h(e2) {
    let t2 = s;
    e2[t2(513)][t2(455)](`docx-fit-viewer`);
    let n2 = u(e2);
    p(e2);
    let r2 = m(e2), i2 = 0, a2 = () => {
      let e3 = t2;
      window.cancelAnimationFrame(i2), i2 = window[e3(458)](() => {
        r2.forEach((e4) => {
          let t3 = Q, n3 = e4.firstElementChild;
          if (!(n3 instanceof HTMLElement)) return;
          n3.style.transform = `translateX(-50%)`;
          let r3 = n3.offsetWidth, i3 = n3.offsetHeight;
          if (!r3 || !i3) return;
          let a3 = Math.max(e4[t3(530)] - 8, 120), o3 = Math.min(1, Math[t3(693)](0.24, a3 / r3));
          n3.style.transform = `translateX(-50%) scale(` + o3 + `)`, e4.style.height = Math.ceil(i3 * o3) + `px`;
        });
      });
    }, o2 = new ResizeObserver(a2);
    return o2.observe(e2), r2.forEach((e3) => o2[t2(548)](e3)), a2(), () => {
      let r3 = t2;
      window.cancelAnimationFrame(i2), o2[r3(659)](), n2.remove(), e2.classList[r3(717)](`docx-fit-viewer`);
    };
  }
  g = function(e2, t2) {
    return _.apply(this, arguments);
  };
  function _() {
    return _ = a(function* (e2, t2) {
      let n2 = Q, { defaultOptions: r2, renderAsync: i2 } = yield c();
      yield i2(e2, t2, void 0, Object[n2(456)](r2, {
        debug: true,
        experimental: true
      }));
      let a2 = h(t2);
      return {
        $el: t2,
        unmount() {
          a2(), t2.innerHTML = ``;
        }
      };
    }), _.apply(this, arguments);
  }
  r();
  var v = globalThis.Buffer, y = 0;
  function b(e2) {
    let t2 = s;
    return String(e2)[t2(629)](/&/g, `&amp;`)[t2(629)](/</g, t2(554)).replace(/>/g, `&gt;`).replace(/"/g, `&quot;`)[t2(629)](/'/g, `&#39;`);
  }
  function x(e2 = `id`) {
    return y += 1, e2 + `-` + y;
  }
  function S(e2) {
    return e2 % 2 == 0 ? e2 : e2 + 1;
  }
  function C(e2) {
    let t2 = s, n2 = e2 instanceof Uint8Array ? e2 : e2 instanceof ArrayBuffer ? new Uint8Array(e2) : new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength);
    if (v) return v.from(n2).toString(`base64`);
    let r2 = ``, i2 = 32768;
    for (let e3 = 0; e3 < n2.length; e3 += i2) r2 += String.fromCharCode(...n2.subarray(e3, Math.min(e3 + i2, n2[t2(671)])));
    return btoa(r2);
  }
  function w(e2, t2 = s(593)) {
    return `data:` + t2 + `;base64,` + C(e2);
  }
  function T(e2) {
    return String(e2 ?? ``).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, `-`).replace(/^-+|-+$/g, ``) || `item`;
  }
  function E(e2, t2) {
    let n2 = s;
    if (e2 === t2) return true;
    if (!e2 || !t2) return false;
    let r2 = Object.keys(e2), i2 = Object.keys(t2);
    if (r2[n2(671)] !== i2.length) return false;
    for (let n3 of r2) if (e2[n3] !== t2[n3]) return false;
    return true;
  }
  function D(e2, t2, r2) {
    let i2 = r2 ? n({
      message: t2
    }, r2) : {
      message: t2
    };
    return e2.push(i2), i2;
  }
  function O(e2, t2 = 96) {
    if (!(e2 == null || Number.isNaN(e2))) return e2 / 1440 * t2;
  }
  function k(e2) {
    return String(e2 ?? ``)[s(629)](/\u000b/g, `
`).replace(/\u000c/g, `
`);
  }
  function A(e2 = s(497)) {
    return new TextDecoder(e2, {
      fatal: false
    });
  }
  t();
  var j = A(`utf-16le`), ee = A(s(typeof TextDecoder < `u` ? 685 : 573)), M = class {
    constructor(e2) {
      let t2 = s;
      if (o(this, `bytes`, void 0), o(this, `view`, void 0), o(this, `length`, void 0), e2 instanceof Uint8Array) this[t2(680)] = e2;
      else if (e2 instanceof ArrayBuffer) this.bytes = new Uint8Array(e2);
      else if (ArrayBuffer.isView(e2)) this.bytes = new Uint8Array(e2[t2(541)], e2.byteOffset, e2[t2(684)]);
      else throw TypeError(`BinaryReader expects ArrayBuffer or Uint8Array`);
      this.view = new DataView(this.bytes.buffer, this.bytes.byteOffset, this.bytes.byteLength), this[t2(671)] = this.bytes.byteLength;
    }
    [s(692)](e2, t2 = 1) {
      return e2 >= 0 && e2 + t2 <= this.length;
    }
    u8(e2) {
      let t2 = s;
      return this.ensure(e2, 1) ? this.view[t2(452)](e2) : 0;
    }
    i8(e2) {
      return this.ensure(e2, 1) ? this.view.getInt8(e2) : 0;
    }
    [s(450)](e2) {
      let t2 = s;
      return this.ensure(e2, 2) ? this.view[t2(461)](e2, true) : 0;
    }
    [s(485)](e2) {
      let t2 = s;
      return this[t2(692)](e2, 2) ? this.view.getInt16(e2, true) : 0;
    }
    u32(e2) {
      let t2 = s;
      return this.ensure(e2, 4) ? this.view[t2(586)](e2, true) : 0;
    }
    i32(e2) {
      let t2 = s;
      return this[t2(692)](e2, 4) ? this.view[t2(568)](e2, true) : 0;
    }
    [s(650)](e2) {
      let t2 = this.u32(e2);
      return this.u32(e2 + 4) * 4294967296 + t2;
    }
    slice(e2, t2) {
      return this.ensure(e2, t2) ? this.bytes.subarray(e2, e2 + t2) : new Uint8Array();
    }
    [s(480)](e2, t2, n2) {
      let r2 = s, i2 = [], a2 = n2.byteWidth ?? 1;
      for (let o2 = 0; o2 < t2; o2 += 1) i2[r2(698)](n2.call(this, e2 + o2 * a2));
      return i2;
    }
    utf16le(e2, t2) {
      return this.ensure(e2, t2) ? j.decode(this.slice(e2, t2)) : ``;
    }
    latin1(e2, t2) {
      let n2 = s;
      return this.ensure(e2, t2) ? ee[n2(482)](this.slice(e2, t2)) : ``;
    }
    ascii(e2, t2) {
      if (!this.ensure(e2, t2)) return ``;
      let n2 = ``, r2 = this.slice(e2, t2);
      for (let e3 = 0; e3 < r2.length; e3 += 1) n2 += String.fromCharCode(r2[e3] ?? 0);
      return n2;
    }
    utf16z(e2, t2) {
      let n2 = s, r2 = this.slice(e2, t2), i2 = r2.length;
      for (let e3 = 0; e3 + 1 < r2.length; e3 += 2) if (r2[e3] === 0 && r2[e3 + 1] === 0) {
        i2 = e3;
        break;
      }
      return j[n2(482)](r2.subarray(0, i2));
    }
  };
  M.prototype.u8[s(704)] = 1, M.prototype.i8.byteWidth = 1, M.prototype.u16.byteWidth = 2, M[s(496)].i16[s(704)] = 2, M.prototype.u32.byteWidth = 4, M[s(496)].i32.byteWidth = 4;
  function te(e2) {
    let t2 = s;
    if (e2 instanceof Uint8Array) return e2;
    if (e2 instanceof ArrayBuffer) return new Uint8Array(e2);
    if (ArrayBuffer.isView(e2)) return new Uint8Array(e2.buffer, e2[t2(488)], e2.byteLength);
    throw TypeError(t2(559));
  }
  var ne = [
    208,
    207,
    17,
    224,
    161,
    177,
    26,
    225
  ], re = 4294967295, N = 4294967294, ie = 4294967293, ae = 4294967292, oe = 1 << 20, se = 4096;
  function ce(e2) {
    return e2 === re || e2 === N || e2 === ie || e2 === ae;
  }
  function le(e2, t2, n2) {
    let r2 = s, i2 = 512 + n2 * t2, a2 = i2 + t2;
    if (i2 < 0 || a2 > e2.length) throw Error(`Sector ` + n2 + r2(651));
    return e2[r2(567)](i2, a2);
  }
  function ue(e2, t2, n2 = oe) {
    let r2 = [], i2 = /* @__PURE__ */ new Set(), a2 = e2, o2 = 0;
    for (; a2 !== N && a2 !== re && a2 >= 0; ) {
      if (i2.has(a2)) throw Error(`Detected sector loop at ` + a2);
      if (i2.add(a2), r2.push(a2), a2 = t2(a2), o2 += 1, o2 > n2) throw Error(`Sector chain exceeds safe limit`);
    }
    return r2;
  }
  function P(e2, t2, n2, r2, i2 = null) {
    let a2 = s;
    if (n2 === N || n2 === re || n2 < 0) return new Uint8Array();
    let o2 = ue(n2, (e3) => r2[e3] ?? N), c2 = new Uint8Array(o2[a2(671)] * t2), l2 = 0;
    for (let n3 of o2) c2.set(le(e2, t2, n3), l2), l2 += t2;
    return i2 == null ? c2 : c2.subarray(0, Math.min(i2, c2.length));
  }
  function de(e2) {
    function t2(n3, r3) {
      if (n3 < 0 || n3 >= e2.length) return;
      let i2 = e2[n3];
      i2 && (t2(i2.leftSiblingId, r3), r3.push(n3), t2(i2.rightSiblingId, r3));
    }
    function n2(r3) {
      let i2 = Q, a2 = e2[r3];
      if (!a2 || a2.childId < 0) return;
      let o2 = [];
      t2(a2.childId, o2), a2[i2(720)] = o2;
      for (let t3 of o2) {
        let i3 = e2[t3];
        i3 && (i3.parentId = r3, n2(t3));
      }
    }
    let r2 = e2.find((e3) => e3.objectType === 5);
    if (!r2) throw Error(`CFB root storage not found`);
    return n2(r2.id), r2;
  }
  function fe(e2) {
    let t2 = s, n2 = /* @__PURE__ */ new Map();
    for (let i2 of e2) {
      if (!i2 || !i2.name) continue;
      let a2 = [], o2 = i2;
      for (; o2; ) {
        var r2;
        o2[t2(682)] !== 5 && a2.push(o2.name), o2 = o2.parentId == null || (r2 = e2[o2.parentId]) == null ? null : r2;
      }
      let s2 = `/` + a2[t2(467)]().join(`/`);
      i2.path = s2 === `/` ? `/` + i2.name : s2, n2.set(i2.path, i2);
    }
    return n2;
  }
  function pe(e2) {
    return e2.replace(/\u0000+$/, ``);
  }
  function me(e2, t2 = {}) {
    let n2 = s, r2 = te(e2), i2 = new M(r2), a2 = [];
    for (let e3 = 0; e3 < ne.length; e3 += 1) if (i2.u8(e3) !== ne[e3]) throw Error(`Not a Compound File Binary document`);
    let o2 = i2[n2(450)](26), c2 = i2.u16(30), l2 = i2.u16(32), u2 = 1 << c2, d2 = 1 << l2, f2 = i2.u32(40), p2 = i2[n2(546)](44), m2 = i2[n2(716)](48), h2 = i2.u32(52), g2 = i2.u32(56), _2 = i2.i32(60), v2 = i2.u32(64), y2 = i2.i32(68), b2 = i2.u32(72);
    g2 !== se && D(a2, `Unexpected mini stream cutoff size ` + g2);
    let x2 = [];
    for (let e3 = 0; e3 < 109; e3 += 1) {
      let t3 = i2.i32(76 + e3 * 4);
      !ce(t3) && t3 >= 0 && x2.push(t3);
    }
    let S2 = [
      ...x2
    ], C2 = y2, w2 = 0;
    for (; C2 !== N && C2 !== re && C2 >= 0; ) {
      let e3 = new M(le(r2, u2, C2)), t3 = u2 / 4 - 1;
      for (let r3 = 0; r3 < t3; r3 += 1) {
        let t4 = e3[n2(716)](r3 * 4);
        !ce(t4) && t4 >= 0 && S2[n2(698)](t4);
      }
      if (C2 = e3.i32(u2 - 4), w2 += 1, w2 > b2 + 4) {
        D(a2, `DIFAT chain exceeded declared sector count; stopping early`);
        break;
      }
    }
    p2 && S2.length < p2 && D(a2, `FAT sector count mismatch: header says ` + p2 + `, found ` + S2.length);
    let T2 = [];
    for (let e3 of S2) {
      let t3 = new M(le(r2, u2, e3));
      for (let e4 = 0; e4 < u2 / 4; e4 += 1) T2.push(t3.i32(e4 * 4));
    }
    let E2 = P(r2, u2, m2, T2), O2 = new M(E2), k2 = [];
    for (let e3 = 0, t3 = 0; e3 + 128 <= E2.length; e3 += 128, t3 += 1) {
      let r3 = O2.u16(e3 + 64), i3 = pe(O2.utf16le(e3, Math.max(0, r3 - 2)));
      !i3 && O2.u8(e3 + 66) === 0 || k2.push({
        id: t3,
        name: i3,
        objectType: O2.u8(e3 + 66),
        colorFlag: O2.u8(e3 + 67),
        leftSiblingId: O2[n2(716)](e3 + 68),
        rightSiblingId: O2.i32(e3 + 72),
        childId: O2.i32(e3 + 76),
        clsid: O2.slice(e3 + 80, 16),
        stateBits: O2[n2(546)](e3 + 96),
        creationTime: O2.u64(e3 + 100),
        modifiedTime: O2.u64(e3 + 108),
        startSector: O2.i32(e3 + 116),
        streamSize: o2 === 3 ? O2.u32(e3 + 120) : O2.u64(e3 + 120),
        children: [],
        parentId: null
      });
    }
    let A2 = de(k2), j2 = fe(k2), ee2 = [];
    if (v2 && _2 >= 0) {
      let e3 = P(r2, u2, _2, T2), t3 = new M(e3);
      for (let r3 = 0; r3 + 4 <= e3.length; r3 += 4) ee2[n2(698)](t3.i32(r3));
    }
    let ie2 = P(r2, u2, A2.startSector, T2, A2.streamSize);
    function ae2(e3) {
      let t3 = n2;
      if (e3.startSector < 0) return new Uint8Array();
      let r3 = ue(e3.startSector, (e4) => ee2[e4] ?? N), i3 = new Uint8Array(r3.length * d2), a3 = 0;
      for (let e4 of r3) {
        let n3 = e4 * d2, r4 = n3 + d2;
        if (r4 > ie2.length) throw Error(`Mini sector ` + e4 + t3(651));
        i3.set(ie2.subarray(n3, r4), a3), a3 += d2;
      }
      return i3.subarray(0, Math.min(e3.streamSize, i3.length));
    }
    function oe2(e3) {
      let t3 = n2, i3 = typeof e3 == `string` ? j2.get(e3) ?? null : e3;
      return !i3 || i3.objectType !== 2 && i3.objectType !== 5 ? null : i3[t3(682)] === 5 ? ie2 : i3.streamSize < g2 && i3.startSector >= 0 && ee2.length ? ae2(i3) : P(r2, u2, i3[t3(609)], T2, i3[t3(677)]);
    }
    function me2(e3) {
      let t3 = n2, r3 = typeof e3 == `string` ? j2.get(e3) ?? null : e3;
      return r3 ? (r3[t3(720)] || [])[t3(584)]((e4) => k2[e4])[t3(503)]((e4) => !!e4) : [];
    }
    return {
      bytes: r2,
      majorVersion: o2,
      sectorSize: u2,
      miniSectorSize: d2,
      numDirSectors: f2,
      numFatSectors: p2,
      firstDirSector: m2,
      transactionSignature: h2,
      miniStreamCutoffSize: g2,
      warnings: a2,
      entries: k2,
      root: A2,
      pathMap: j2,
      getEntry(e3) {
        return j2.get(e3) ?? null;
      },
      getStream: oe2,
      listChildren: me2,
      findByName(e3, t3 = `/`) {
        let r3 = n2, i3 = t3 === `/` ? A2 : j2.get(t3) ?? null;
        if (!i3) return null;
        let a3 = [
          i3
        ];
        for (; a3.length; ) {
          let t4 = a3.pop();
          if (t4) {
            if (t4.name === e3) return t4;
            for (let e4 of t4[r3(720)] || []) {
              let t5 = k2[e4];
              t5 && a3.push(t5);
            }
          }
        }
        return null;
      }
    };
  }
  var he = {
    "\x82": `\u201A`,
    "\x83": `\u0192`,
    "\x84": `\u201E`,
    "\x85": `\u2026`,
    "\x86": `\u2020`,
    "\x87": `\u2021`,
    "\x88": `\u02C6`,
    "\x89": `\u2030`,
    "\x8A": `\u0160`,
    "\x8B": `\u2039`,
    "\x8C": `\u0152`,
    "\x91": `\u2018`,
    "\x92": `\u2019`,
    "\x93": `\u201C`,
    "\x94": `\u201D`,
    "\x95": `\u2022`,
    "\x96": `\u2013`,
    "\x97": `\u2014`,
    "\x98": `\u02DC`,
    "\x99": `\u2122`,
    "\x9A": `\u0161`,
    "\x9B": `\u203A`,
    "\x9C": `\u0153`,
    "\x9F": `\u0178`
  };
  function ge(e2) {
    return e2.replace(/[\x82-\x8C\x91-\x9C\x9F]/g, (e3) => he[e3] || e3);
  }
  function _e(e2) {
    let t2 = ``;
    for (let n2 = 0; n2 < e2.length; n2 += 1) t2 += String.fromCharCode(e2[n2] ?? 0);
    return ge(t2);
  }
  function ve(e2) {
    return new TextDecoder(s(558)).decode(e2);
  }
  function ye(e2, t2) {
    let n2 = s, r2 = t2.fcClx, i2 = t2.lcbClx;
    if (r2 == null || i2 == null || i2 <= 0) throw Error(n2(475));
    let a2 = e2.subarray(r2, r2 + i2), o2 = new M(a2), c2 = 0, l2 = [];
    for (; c2 < a2[n2(671)] && o2.u8(c2) === 1; ) {
      let e3 = o2.u16(c2 + 1);
      l2.push({
        type: 1,
        cbGrpprl: e3,
        bytes: o2.slice(c2 + 3, e3)
      }), c2 += 3 + e3;
    }
    if (o2.u8(c2) !== 2) throw Error(`CLX does not contain a Pcdt marker`);
    let u2 = o2.u32(c2 + 1);
    return {
      prcs: l2,
      pcdt: {
        lcb: u2,
        pieceTable: be(o2.slice(c2 + 5, u2))
      }
    };
  }
  function be(e2) {
    let t2 = s;
    if (!e2.length) throw Error(`Empty PlcPcd`);
    let n2 = new M(e2), r2 = (e2.length - 4) / 12;
    if (!Number.isInteger(r2) || r2 < 0) throw Error(`Invalid PlcPcd size`);
    let i2 = [];
    for (let e3 = 0; e3 < r2 + 1; e3 += 1) i2[t2(698)](n2.u32(e3 * 4));
    let a2 = [], o2 = (r2 + 1) * 4;
    for (let e3 = 0; e3 < r2; e3 += 1) {
      let r3 = n2[t2(450)](o2), s2 = n2.u32(o2 + 2) >>> 0, c2 = n2.u16(o2 + 6), l2 = !!(s2 & 1073741824), u2 = s2 & 1073741823, d2 = i2[e3] ?? 0, f2 = i2[e3 + 1] ?? d2, p2 = l2 ? Math.floor(u2 / 2) : u2, m2 = l2 ? f2 - d2 : (f2 - d2) * 2;
      a2.push({
        index: e3,
        descriptor: r3,
        fNoParaLast: !!(r3 & 1),
        fRaw: !!(r3 & 2),
        prm: c2,
        compressed: l2,
        fcRaw: s2,
        fc: u2,
        cpStart: d2,
        cpEnd: f2,
        actualByteStart: p2,
        byteLength: m2,
        actualByteEnd: p2 + m2
      }), o2 += 8;
    }
    return {
      cps: i2,
      pieces: a2
    };
  }
  function xe(e2, t2) {
    let n2 = s, r2 = e2.subarray(t2[n2(550)], t2[n2(606)]);
    return t2.compressed ? _e(r2) : ve(r2);
  }
  function Se(e2, t2) {
    return t2.pcdt.pieceTable.pieces.map((t3) => xe(e2, t3));
  }
  function F(e2, t2, n2 = null) {
    let r2 = s, i2 = e2.pcdt[r2(667)].pieces, a2 = n2 ?? !!(t2 & 1073741824), o2 = n2 == null ? t2 & 1073741823 : t2, c2 = a2 ? Math.floor(o2 / 2) : o2;
    for (let e3 of i2) {
      if (c2 < e3.actualByteStart || c2 > e3[r2(606)]) continue;
      let t3 = c2 - e3.actualByteStart, n3 = e3.cpStart + Math.floor(t3 / (e3.compressed ? 1 : 2));
      if (n3 >= e3.cpStart && n3 <= e3.cpEnd) return n3;
    }
    for (let e3 of i2) {
      if (t2 < e3.actualByteStart || t2 > e3[r2(606)]) continue;
      let n3 = t2 - e3[r2(550)], i3 = e3[r2(656)] + Math.floor(n3 / (e3.compressed ? 1 : 2));
      if (i3 >= e3.cpStart && i3 <= e3.cpEnd) return i3;
    }
    return null;
  }
  function Ce(e2, t2, n2, r2, i2) {
    let a2 = s;
    if (i2 <= r2) return ``;
    let o2 = [];
    for (let e3 = 0; e3 < t2.pcdt.pieceTable[a2(616)].length; e3 += 1) {
      let s2 = t2.pcdt[a2(667)].pieces[e3];
      if (s2.cpEnd <= r2) continue;
      if (s2.cpStart >= i2) break;
      let c2 = Math.max(r2, s2[a2(656)]) - s2.cpStart, l2 = Math.min(i2, s2.cpEnd) - s2.cpStart;
      o2.push((n2[e3] ?? ``).slice(c2, l2));
    }
    return o2.join(``);
  }
  function we(e2) {
    let t2 = s, n2 = [], r2 = 0;
    for (let i2 = 0; i2 < e2.length; i2 += 1) {
      let a2 = e2[i2];
      (a2 === `\r` || a2 === `\x07`) && (n2[t2(698)]({
        cpStart: r2,
        cpEnd: i2 + 1,
        terminator: a2
      }), r2 = i2 + 1);
    }
    return r2 < e2.length && n2.push({
      cpStart: r2,
      cpEnd: e2.length,
      terminator: ``
    }), n2;
  }
  var I = {
    paragraph: `\r`,
    cellMark: `\x07`,
    picture: ``,
    fieldStart: ``,
    fieldSeparator: ``,
    fieldEnd: ``,
    annotationRef: ``,
    hardLineBreak: `\v`,
    pageBreak: `\f`,
    nonBreakingHyphen: ``,
    nonRequiredHyphen: ``
  }, Te = {
    0: `none`,
    1: `single`,
    2: `word`,
    3: s(544),
    4: s(569),
    5: `hidden`,
    6: `thick`,
    7: `dash`,
    9: `dot-dash`,
    10: s(565),
    11: `wave`,
    16: s(636),
    17: `dashed-heavy`,
    18: `dash-long`,
    19: `dash-long-heavy`,
    20: `dot-dash-heavy`,
    21: `dot-dot-dash-heavy`,
    22: `wavy-heavy`,
    23: `wavy-double`
  }, Ee = {
    0: s(603),
    1: s(500),
    2: `right`,
    3: `justify`,
    4: s(576)
  }, De = {
    0: s(710),
    1: `center`,
    2: s(635)
  }, Oe = {
    1: `#000000`,
    2: s(448),
    3: `#00ffff`,
    4: s(669),
    5: `#ff00ff`,
    6: `#ff0000`,
    7: `#ffff00`,
    8: `#ffffff`,
    9: `#000080`,
    10: `#008080`,
    11: `#008000`,
    12: `#800080`,
    13: `#800000`,
    14: `#808000`,
    15: `#808080`,
    16: s(516)
  }, ke = `StshfOrig.Stshf.PlcffndRef.PlcffndTxt.PlcfandRef.PlcfandTxt.PlcfSed.PlcPad.PlcfPhe.SttbfGlsy.PlcfGlsy.PlcfHdd.PlcfBteChpx.PlcfBtePapx.PlcfSea.SttbfFfn.PlcfFldMom.PlcfFldHdr.PlcfFldFtn.PlcfFldAtn.PlcfFldMcr.SttbfBkmk.PlcfBkf.PlcfBkl.Cmds.Unused1.SttbfMcr.PrDrvr.PrEnvPort.PrEnvLand.Wss.Dop.SttbfAssoc.Clx.PlcfPgdFtn.AutosaveSource.GrpXstAtnOwners.SttbfAtnBkmk.Unused2.Unused3.PlcSpaMom.PlcSpaHdr.PlcfAtnBkf.PlcfAtnBkl.Pms.FormFldSttbs.PlcfendRef.PlcfendTxt.PlcfFldEdn.Unused4.DggInfo.SttbfRMark.SttbfCaption.SttbfAutoCaption.PlcfWkb.PlcfSpl.PlcftxbxTxt.PlcfFldTxbx.PlcfHdrtxbxTxt.PlcffldHdrTxbx.StwUser.SttbTtmbd.CookieData.PgdMotherOldOld.BkdMotherOldOld.PgdFtnOldOld.BkdFtnOldOld.PgdEdnOldOld.BkdEdnOldOld.SttbfIntlFld.RouteSlip.SttbSavedBy.SttbFnm.PlfLst.PlfLfo.PlcfTxbxBkd.PlcfTxbxHdrBkd.DocUndoWord9.RgbUse.Usp.Uskf.PlcupcRgbUse.PlcupcUsp.SttbGlsyStyle.Plgosl.Plcocx.PlcfBteLvc.dwLowDateTime.dwHighDateTime.PlcfLvcPre10.PlcfAsumy.PlcfGram.SttbListNames.SttbfUssr`[s(585)](`.`);
  function Ae(e2) {
    let t2 = s, n2 = new M(e2), r2 = je(n2), i2 = 32, a2 = n2.u16(i2);
    i2 += 2;
    let o2 = n2.slice(i2, a2 * 2);
    i2 += a2 * 2;
    let c2 = n2.u16(i2);
    i2 += 2;
    let l2 = n2.slice(i2, c2 * 4);
    i2 += c2 * 4;
    let u2 = n2[t2(450)](i2);
    i2 += 2;
    let d2 = n2[t2(691)](i2, u2 * 8);
    i2 += u2 * 8;
    let f2 = n2[t2(692)](i2, 2) ? n2.u16(i2) : 0;
    n2[t2(692)](i2, 2) && (i2 += 2);
    let p2 = f2 ? n2.slice(i2, f2 * 2) : new Uint8Array(), m2 = Me(l2), h2 = Ne(d2, u2);
    return {
      base: r2,
      csw: a2,
      cslw: c2,
      cbRgFcLcb: u2,
      cswNew: f2,
      nFibNew: f2 ? new M(p2).u16(0) : 0,
      fibRgWBytes: o2,
      fibRgLwBytes: l2,
      fibRgFcLcbBytes: d2,
      fibRgCswNewBytes: p2,
      fibRgLw: m2,
      fibRgFcLcb: h2
    };
  }
  function je(e2) {
    let t2 = s, n2 = e2.u16(0), r2 = e2.u16(2), i2 = e2[t2(450)](6), a2 = e2.u16(8), o2 = e2.u16(10), c2 = e2.u16(18);
    return {
      wIdent: n2,
      nFib: r2,
      lid: i2,
      pnNext: a2,
      flags: o2,
      envFlags: c2,
      fDot: !!(o2 & 1),
      fGlsy: !!(o2 & 2),
      fComplex: !!(o2 & 4),
      fHasPic: !!(o2 & 8),
      cQuickSaves: o2 >> 4 & 15,
      fEncrypted: !!(o2 & 256),
      fWhichTblStm: o2 & 512 ? 1 : 0,
      fReadOnlyRecommended: !!(o2 & 1024),
      fWriteReservation: !!(o2 & 2048),
      fExtChar: !!(o2 & 4096),
      fLoadOverride: !!(o2 & 8192),
      fFarEast: !!(o2 & 16384),
      fObfuscated: !!(o2 & 32768),
      nFibBack: e2.u16(12),
      lKey: e2.u32(14),
      envr: e2.u8(18),
      fMac: !!(c2 & 1),
      fEmptySpecial: !!(c2 & 2),
      fLoadOverridePage: !!(c2 & 4)
    };
  }
  function Me(e2) {
    let t2 = new M(e2), n2 = [];
    for (let r2 = 0; r2 + 4 <= e2.length; r2 += 4) n2.push(t2.i32(r2));
    return {
      raw: n2,
      cbMac: n2[0] ?? 0,
      ccpText: n2[3] ?? 0,
      ccpFtn: n2[4] ?? 0,
      ccpHdd: n2[5] ?? 0,
      ccpMcr: n2[6] ?? 0,
      ccpAtn: n2[7] ?? 0,
      ccpEdn: n2[8] ?? 0,
      ccpTxbx: n2[9] ?? 0,
      ccpHdrTxbx: n2[10] ?? 0
    };
  }
  function Ne(e2, t2) {
    let n2 = s, r2 = new M(e2), i2 = {
      _pairs: []
    }, a2 = [];
    for (let o2 = 0; o2 < t2 && o2 * 8 + 8 <= e2[n2(671)]; o2 += 1) {
      let e3 = r2.u32(o2 * 8), t3 = r2[n2(546)](o2 * 8 + 4), s2 = ke[o2] || `Field` + o2;
      i2[`fc` + s2] = e3, i2[`lcb` + s2] = t3, a2.push({
        name: s2,
        fc: e3,
        lcb: t3,
        index: o2
      });
    }
    return i2._pairs = a2, i2;
  }
  var L = {
    sprmCFRMarkDel: 2048,
    sprmCFRMark: 2049,
    sprmCFFldVanish: 2050,
    sprmCPicLocation: 27139,
    sprmCIbstRMark: 18436,
    sprmCDttmRMark: 26629,
    sprmCFData: 2054,
    sprmCFOle2: 2058,
    sprmCHighlight: 10764,
    sprmCIstd: 18992,
    sprmCPlain: 10803,
    sprmCFBold: 2101,
    sprmCFItalic: 2102,
    sprmCFStrike: 2103,
    sprmCFOutline: 2104,
    sprmCFShadow: 2105,
    sprmCFSmallCaps: 2106,
    sprmCFCaps: 2107,
    sprmCFVanish: 2108,
    sprmCKul: 10814,
    sprmCDxaSpace: 34880,
    sprmCIco: 10818,
    sprmCHps: 19011,
    sprmCHpsPos: 18501,
    sprmCSymbol: 27145,
    sprmCHpsKern: 18507,
    sprmCRgFtc0: 19023,
    sprmCRgFtc1: 19024,
    sprmCRgFtc2: 19025,
    sprmCCharScale: 18514,
    sprmCFDStrike: 10835,
    sprmCFImprint: 2132,
    sprmCFSpec: 2133,
    sprmCFObj: 2134,
    sprmCFEmboss: 2136,
    sprmCFBiDi: 2138,
    sprmCFBoldBi: 2140,
    sprmCFItalicBi: 2141,
    sprmCFtcBi: 19038,
    sprmCIcoBi: 19040,
    sprmCHpsBi: 19041,
    sprmPIstd: 17920,
    sprmPIstdPermute: 50689,
    sprmPIncLvl: 9730,
    sprmPJc80: 9219,
    sprmPFKeep: 9221,
    sprmPFKeepFollow: 9222,
    sprmPFPageBreakBefore: 9223,
    sprmPIlvl: 9738,
    sprmPIlfo: 17931,
    sprmPChgTabsPapx: 50701,
    sprmPDxaRight80: 33806,
    sprmPDxaLeft80: 33807,
    sprmPNest80: 17936,
    sprmPDxaLeft180: 33809,
    sprmPDyaLine: 25618,
    sprmPDyaBefore: 42003,
    sprmPDyaAfter: 42004,
    sprmPChgTabs: 50709,
    sprmPFInTable: 9238,
    sprmPFTtp: 9239,
    sprmPDxaAbs: 33816,
    sprmPDyaAbs: 33817,
    sprmPDxaWidth: 33818,
    sprmPPc: 9755,
    sprmPWr: 9251,
    sprmPBrcTop80: 25636,
    sprmPBrcLeft80: 25637,
    sprmPBrcBottom80: 25638,
    sprmPBrcRight80: 25639,
    sprmPBrcBetween80: 25640,
    sprmPBrcBar80: 26153,
    sprmPWHeightAbs: 17451,
    sprmPDcs: 17452,
    sprmPShd80: 17453,
    sprmPDyaFromText: 33838,
    sprmPDxaFromText: 33839,
    sprmPFLocked: 9264,
    sprmPFWidowControl: 9265,
    sprmPFBiDi: 9281,
    sprmPHugePapx: 26182,
    sprmPFAdjustRight: 9288,
    sprmPItap: 26185,
    sprmPDtap: 26186,
    sprmPFInnerTableCell: 9291,
    sprmPFInnerTtp: 9292,
    sprmPShd: 50765,
    sprmPBrcTop: 50766,
    sprmPBrcLeft: 50767,
    sprmPBrcBottom: 50768,
    sprmPBrcRight: 50769,
    sprmPBrcBetween: 50770,
    sprmPBrcBar: 50771,
    sprmPDxcRight: 17493,
    sprmPDxcLeft: 17494,
    sprmPDxcLeft1: 17495,
    sprmPDylBefore: 17496,
    sprmPDylAfter: 17497,
    sprmPFDyaBeforeAuto: 9307,
    sprmPFDyaAfterAuto: 9308,
    sprmPDxaRight: 33885,
    sprmPDxaLeft: 33886,
    sprmPNest: 18015,
    sprmPDxaLeft1: 33888,
    sprmPJc: 9313,
    sprmTJc90: 21504,
    sprmTDxaLeft: 38401,
    sprmTDxaGapHalf: 38402,
    sprmTFCantSplit90: 13315,
    sprmTTableHeader: 13316,
    sprmTTableBorders80: 54789,
    sprmTDyaRowHeight: 37895,
    sprmTDefTable: 54792,
    sprmTDefTableShd80: 54793,
    sprmTTlp: 29706,
    sprmTFBiDi: 22027,
    sprmTDefTableShd3rd: 54796,
    sprmTPc: 13837,
    sprmTDxaAbs: 37902,
    sprmTDyaAbs: 37903,
    sprmTDxaFromText: 37904,
    sprmTDyaFromText: 37905,
    sprmTDefTableShd: 54802,
    sprmTTableBorders: 54803,
    sprmTTableWidth: 62996,
    sprmTFAutofit: 13845,
    sprmTWidthBefore: 62999,
    sprmTWidthAfter: 63e3,
    sprmTSetBrc80: 54816,
    sprmTInsert: 30241,
    sprmTDelete: 22050,
    sprmTDxaCol: 30243,
    sprmTMerge: 22052,
    sprmTSplit: 22053,
    sprmTTextFlow: 30249,
    sprmTVertMerge: 54827,
    sprmTVertAlign: 54828,
    sprmTSetShd: 54829,
    sprmTSetShdOdd: 54830,
    sprmTSetBrc: 54831,
    sprmTCellPadding: 54834,
    sprmTCellPaddingDefault: 54835,
    sprmTCellWidth: 54837,
    sprmTFitText: 63030,
    sprmTFCellNoWrap: 54841,
    sprmTIstd: 22074
  }, Pe = /* @__PURE__ */ new Set([
    L.sprmPChgTabs,
    L.sprmPChgTabsPapx,
    L[s(694)],
    L.sprmTTableBorders80,
    L.sprmTTableBorders,
    L.sprmTDefTableShd,
    L.sprmTDefTableShd80,
    L.sprmTDefTableShd3rd,
    L.sprmTSetBrc80,
    L.sprmTSetBrc,
    L.sprmTSetShd,
    L.sprmTSetShdOdd,
    L[s(522)],
    L.sprmTCellPaddingDefault,
    L[s(507)],
    L[s(674)],
    L.sprmTVertMerge,
    L.sprmTTextFlow,
    L.sprmTDxaCol
  ]);
  function Fe(e2) {
    return e2 >> 13 & 7;
  }
  function R(e2, t2 = 0) {
    let n2 = s;
    return t2 + 2 > e2[n2(671)] ? 0 : (e2[t2] ?? 0) | (e2[t2 + 1] ?? 0) << 8;
  }
  function z(e2, t2 = 0) {
    let n2 = R(e2, t2);
    return n2 > 32767 ? n2 - 65536 : n2;
  }
  function Ie() {
    let e2 = [
      `widowControl`,
      `sprmPFInnerTtp`,
      `terminator`,
      `font-family`,
      `vertMerge`,
      `sprmCFBiDi`,
      `clientWidth`,
      `dtap`,
      `20929170yUHLkW`,
      `sprmPIstd`,
      `adjustRight`,
      `paraState`,
      `pageBreakBefore`,
      `instruction`,
      `dot`,
      `borders`,
      `resolveStyle`,
      `buffer`,
      `startsWith`,
      `sprmTDelete`,
      `double`,
      `value`,
      `u32`,
      `cloneNode`,
      `observe`,
      `px"`,
      `actualByteStart`,
      `italicBi`,
      `" target="_blank" rel="noreferrer noopener">`,
      `sprmCFOutline`,
      `&lt;`,
      `positionHalfPoints`,
      `sprmCFOle2`,
      `sprmPIlvl`,
      `utf-16le`,
      `Unsupported binary input`,
      `innerTableRowEnd`,
      `includes`,
      `base`,
      `borderRight`,
      `table`,
      `dot-dot-dash`,
      `operations`,
      `subarray`,
      `getInt32`,
      `dotted`,
      `
.docx-fit-viewer {
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  background: #ececec;
}
.docx-fit-viewer .docx-wrapper {
  box-sizing: border-box;
  min-width: 0 !important;
  width: 100% !important;
  padding: 24px 14px 40px !important;
  background: #e7e9ec !important;
}
.docx-fit-viewer .docx-page-frame {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto 24px;
  overflow: visible;
}
.docx-fit-viewer .docx-page-frame > section.docx {
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0 !important;
  background: #ffffff !important;
  box-shadow: 0 2px 14px rgba(25, 35, 48, 0.18);
  box-sizing: border-box;
  color: #111827;
  overflow: hidden;
  transform-origin: top center;
}
`,
      `properties`,
      `data`,
      `latin1`,
      `join`,
      `<tr class="msdoc-row"`,
      `distributed`,
      `distanceTop`,
      `emboss`,
      `boldBi`,
      `cellWidth`,
      `getComputedStyle`,
      `inlines`,
      `originalPath`,
      `map`,
      `split`,
      `getUint32`,
      `minHeight`,
      `</style>`,
      `parsed`,
      `label`,
      `sprmTDyaRowHeight`,
      `tableRowEnd`,
      `application/octet-stream`,
      `highlight`,
      `apply`,
      `outline`,
      `Unsupported input type`,
      `sprmTMerge`,
      `smallCaps`,
      `8EKfnJc`,
      `margin-top`,
      `fcPlcfBtePapx`,
      `left`,
      `cpEnd`,
      `sprmCRgFtc0`,
      `actualByteEnd`,
      `toUpperCase`,
      `absTop`,
      `startSector`,
      `lcbPlcfBtePapx`,
      `fieldSeparator`,
      `cells`,
      `5578MOTPLF`,
      `string`,
      `spacingAfter`,
      `pieces`,
      `ftsWidth`,
      `msdoc`,
      `margin-left`,
      `keepLines`,
      `min`,
      `rightBoundary`,
      `vertical-align`,
      `wave`,
      `rgfc`,
      `char`,
      `lcbStshf`,
      `<span class="msdoc-page-break"></span>`,
      `replace`,
      `widthAfter`,
      `tcgrf`,
      `sprmPBrcTop`,
      `msdoc-paragraph`,
      `wWidth`,
      `bottom`,
      `dotted-heavy`,
      `rowHeight`,
      `cellMark`,
      `gapHalf`,
      `<section class="msdoc-attachments"><div class="msdoc-attachments-title">Embedded attachments</div><ul>`,
      `rowspan`,
      `.docx-wrapper`,
      `meta`,
      `tableWidth`,
      `<table class="msdoc-table msdoc-table-depth-`,
      `5394132jsBStp`,
      `lineBreak`,
      `fontFamilyId`,
      `sprmPShd80`,
      `u64`,
      ` is out of bounds`,
      `underline`,
      `listLevel`,
      `inTable`,
      `sprmTFCellNoWrap`,
      `cpStart`,
      `sprmTDxaLeft`,
      `childNodes`,
      `disconnect`,
      `from`,
      `name`,
      `forEach`,
      `1233APrUec`,
      `77ZBVYik`,
      `border-bottom`,
      `sprmPDyaLine`,
      `pieceTable`,
      `<a class="msdoc-link" href="`,
      `#00ff00`,
      `istdBase`,
      `length`,
      `frameWidth`,
      `sprmCFSmallCaps`,
      `sprmTVertAlign`,
      `module`,
      `color`,
      `streamSize`,
      `text-align`,
      `charStyleId`,
      `bytes`,
      `solid`,
      `objectType`,
      `has`,
      `byteLength`,
      `windows-1252`,
      `text`,
      `sprmTDxaGapHalf`,
      `caps`,
      `image`,
      `shading`,
      `slice`,
      `ensure`,
      `max`,
      `sprmTDefTable`,
      `itap`,
      `1742022ifLRaE`,
      `hidden`,
      `push`,
      `sprmCFItalicBi`,
      `width`,
      `image/emf`,
      `widthBefore`,
      `stk`,
      `byteWidth`,
      `attachment`,
      `parseOptions`,
      `trim`,
      `distanceLeft`,
      `tableProps`,
      `top`,
      `vertAlign`,
      `pop`,
      ` style="`,
      `empty`,
      `getStream`,
      `i32`,
      `remove`,
      `sprm_`,
      `fibRgFcLcb`,
      `children`,
      `borderType`,
      `querySelector`,
      `spacing`,
      `article`,
      `frameLeft`,
      `doubleStrike`,
      `spacingBefore`,
      `<span`,
      `</td>`,
      `#0000ff`,
      `lineWidth`,
      `u16`,
      `sprmCHpsPos`,
      `getUint8`,
      `type`,
      `none`,
      `add`,
      `assign`,
      `break-inside`,
      `requestAnimationFrame`,
      `colspan`,
      `values`,
      `getUint16`,
      `header`,
      `#ffffff`,
      `state`,
      `positionCode`,
      `sprmTDxaFromText`,
      `reverse`,
      `papxOffsets`,
      `740968nQbzXw`,
      `text-shadow`,
      `rtl`,
      `sprmTIstd`,
      `wIdent`,
      `scale`,
      `FIB does not point to a CLX structure`,
      `1467581csXuAi`,
      `fitText`,
      `styleId`,
      `sprmPFKeep`,
      `array`,
      `defTable`,
      `decode`,
      `wavy-double`,
      `sprmPDxaAbs`,
      `i16`,
      `height`,
      `<td class="msdoc-cell"`,
      `byteOffset`,
      `italic`,
      `sprmTPc`,
      `cell`,
      `LINK`,
      `maxPictureBytes`,
      `borderBetween`,
      `abs`,
      `prototype`,
      `utf-8`,
      `lim`,
      `href`,
      `center`,
      `font-variant-caps`,
      `image/png`,
      `filter`,
      `</a>`,
      `get`,
      `borderLeft`,
      `sprmTCellWidth`,
      `sprmTDxaCol`,
      `right`,
      `objinfo`,
      `alignment`,
      `sprmTWidthAfter`,
      `classList`,
      ` colspan="`,
      `leftIndent`,
      `#c0c0c0`,
      `1600930vGezWP`,
      `para`,
      `object`,
      `colorIndex`,
      `ccpText`,
      `sprmTCellPadding`,
      `renderOptions`
    ];
    return Ie = function() {
      return e2;
    }, Ie();
  }
  function Le(e2, t2 = 0) {
    return t2 + 4 > e2.length ? 0 : ((e2[t2] ?? 0) | (e2[t2 + 1] ?? 0) << 8 | (e2[t2 + 2] ?? 0) << 16 | (e2[t2 + 3] ?? 0) << 24 >>> 0) >>> 0;
  }
  function B(e2, t2 = 0) {
    return {
      first: e2[t2] ?? 0,
      lim: e2[t2 + 1] ?? 0
    };
  }
  function V(e2, t2 = 0) {
    let n2 = s;
    if (t2 + 4 > e2[n2(671)]) return null;
    let r2 = Le(e2, t2) >>> 0;
    return {
      raw: r2,
      lineWidth: r2 & 255,
      borderType: r2 >> 8 & 255,
      color: r2 >> 16 & 255
    };
  }
  function Re(e2, t2 = 0) {
    let n2 = R(e2, t2);
    return {
      raw: n2,
      horzMerge: n2 & 3,
      textFlow: n2 >> 2 & 7,
      vertMerge: n2 >> 5 & 3,
      vertAlign: n2 >> 7 & 3,
      ftsWidth: n2 >> 9 & 7,
      fitText: !!(n2 & 4096),
      noWrap: !!(n2 & 8192),
      hideMark: !!(n2 & 16384)
    };
  }
  function ze(e2, t2 = 0) {
    return t2 + 20 > e2.length ? null : {
      tcgrf: Re(e2, t2),
      wWidth: R(e2, t2 + 2),
      borders: {
        top: V(e2, t2 + 4) || {},
        left: V(e2, t2 + 8) || {},
        bottom: V(e2, t2 + 12) || {},
        right: V(e2, t2 + 16) || {}
      }
    };
  }
  function Be(e2) {
    if (e2.length < 3) return null;
    let t2 = R(e2, 0), n2 = e2[2] ?? 0, r2 = 3, i2 = [];
    for (let t3 = 0; t3 < n2 + 1 && r2 + 2 <= e2.length; t3 += 1) i2.push(z(e2, r2)), r2 += 2;
    let a2 = [];
    for (let t3 = 0; t3 < n2 && r2 + 20 <= e2.length; t3 += 1) {
      let t4 = ze(e2, r2);
      t4 && a2.push(t4), r2 += 20;
    }
    return {
      cb: t2,
      numberOfColumns: n2,
      rgdxaCenter: i2,
      cells: a2
    };
  }
  function H(e2) {
    return e2[s(671)] ? {
      cb: e2[0] ?? 0,
      range: B(e2, 1),
      value: e2[3] ?? 0,
      extra: e2.subarray(4)
    } : null;
  }
  function Ve(e2) {
    if (!e2.length) return null;
    let t2 = e2[0] ?? 0, n2 = R(e2, 4);
    return {
      cb: t2,
      range: B(e2, 1),
      ftsWidth: e2[3] ?? 0,
      width: n2,
      wWidth: n2
    };
  }
  function He(e2) {
    return e2.length ? {
      cb: e2[0] ?? 0,
      range: B(e2, 1),
      border: V(e2, 3) || {},
      extra: e2.subarray(7)
    } : null;
  }
  function Ue(e2) {
    if (!e2.length) return null;
    let t2 = R(e2, 1);
    return {
      ftsWidth: e2[0] ?? 0,
      width: t2,
      wWidth: t2
    };
  }
  function We(e2) {
    let t2 = s;
    if (!e2.length) return null;
    let n2 = e2[0] ?? 0, r2 = B(e2, 1), i2 = r2.lim - r2.first, a2 = 3, o2 = [];
    for (let n3 = 0; n3 < i2 && a2 + 2 <= e2[t2(671)]; n3 += 1) o2.push(z(e2, a2)), a2 += 2;
    let c2 = [];
    for (let t3 = 0; t3 < i2 && a2 + 20 <= e2.length; t3 += 1) c2.push(ze(e2, a2)), a2 += 20;
    return {
      cb: n2,
      range: r2,
      itcFirst: r2.first,
      ctc: i2,
      dxaCol: o2,
      cells: c2
    };
  }
  function Ge(e2, t2, n2) {
    let r2 = s, i2 = n2 >> 13 & 7;
    if (t2 >= e2[r2(671)]) return 0;
    if (n2 === L.sprmTDefTable) {
      let n3 = R(e2, t2);
      return n3 ? n3 + 1 : 0;
    }
    if (Pe.has(n2)) return (e2[t2] ?? 0) + 1;
    switch (i2) {
      case 0:
        return 1;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 4;
      case 4:
        return 2;
      case 5:
        return 2;
      case 6:
        return (e2[t2] ?? 0) + 1;
      case 7:
        return 3;
      default:
        return 0;
    }
  }
  function U(e2) {
    var t2;
    return !!((t2 = e2[0]) != null && t2);
  }
  function W(e2, t2, n2, r2, i2) {
    return {
      kind: e2,
      name: t2,
      value: n2,
      raw: r2,
      operandBytes: i2
    };
  }
  function Ke(e2, t2) {
    let n2 = s, r2 = Fe(e2), i2 = t2, a2 = e2;
    switch (e2) {
      case L.sprmCPicLocation:
        return W(`char`, `pictureOffset`, Le(i2, 0) >>> 0, a2, i2);
      case L.sprmCFData:
        return W(`char`, n2(572), U(i2), a2, i2);
      case L[n2(556)]:
        return W(n2(626), `ole2`, U(i2), a2, i2);
      case L.sprmCIstd:
        return W(`char`, n2(679), R(i2, 0), a2, i2);
      case L.sprmCPlain:
        return W(`char`, `plain`, U(i2), a2, i2);
      case L.sprmCFBold:
        return W(`char`, `bold`, U(i2), a2, i2);
      case L.sprmCFItalic:
        return W(`char`, `italic`, U(i2), a2, i2);
      case L.sprmCFStrike:
        return W(n2(626), `strike`, U(i2), a2, i2);
      case L[n2(553)]:
        return W(`char`, n2(596), U(i2), a2, i2);
      case L.sprmCFShadow:
        return W(`char`, `shadow`, U(i2), a2, i2);
      case L[n2(673)]:
        return W(`char`, `smallCaps`, U(i2), a2, i2);
      case L.sprmCFCaps:
        return W(n2(626), `caps`, U(i2), a2, i2);
      case L.sprmCFVanish:
        return W(`char`, `hidden`, U(i2), a2, i2);
      case L.sprmCKul:
        return W(n2(626), n2(652), i2[0] ?? 0, a2, i2);
      case L.sprmCDxaSpace:
        return W(n2(626), `spacing`, z(i2, 0), a2, i2);
      case L.sprmCIco:
      case L.sprmCIcoBi:
        return W(`char`, `colorIndex`, i2[0] ?? 0, a2, i2);
      case L.sprmCHighlight: {
        let e3 = i2[0] ?? 0;
        return W(`char`, `highlight`, {
          index: e3,
          color: Oe[e3]
        }, a2, i2);
      }
      case L.sprmCHps:
      case L.sprmCHpsBi:
        return W(`char`, `fontSizeHalfPoints`, R(i2, 0), a2, i2);
      case L[n2(451)]:
        return W(n2(626), n2(555), z(i2, 0), a2, i2);
      case L.sprmCSymbol:
        return W(`char`, `symbol`, {
          font: R(i2, 0),
          charCode: R(i2, 2)
        }, a2, i2);
      case L[n2(605)]:
      case L.sprmCRgFtc1:
      case L.sprmCRgFtc2:
      case L.sprmCFtcBi:
        return W(`char`, `fontFamilyId`, R(i2, 0), a2, i2);
      case L.sprmCCharScale:
        return W(`char`, `scale`, R(i2, 0), a2, i2);
      case L.sprmCFDStrike:
        return W(`char`, `doubleStrike`, U(i2), a2, i2);
      case L.sprmCFImprint:
        return W(`char`, `imprint`, U(i2), a2, i2);
      case L.sprmCFSpec:
        return W(`char`, `special`, U(i2), a2, i2);
      case L.sprmCFObj:
        return W(`char`, n2(519), U(i2), a2, i2);
      case L.sprmCFEmboss:
        return W(`char`, n2(578), U(i2), a2, i2);
      case L[n2(529)]:
        return W(`char`, `rtl`, U(i2), a2, i2);
      case L.sprmCFBoldBi:
        return W(`char`, `boldBi`, U(i2), a2, i2);
      case L[n2(699)]:
        return W(`char`, n2(551), U(i2), a2, i2);
      case L[n2(533)]:
        return W(`para`, `styleId`, R(i2, 0), a2, i2);
      case L.sprmPJc80:
      case L.sprmPJc:
        return W(n2(518), `alignment`, i2[0] ?? 0, a2, i2);
      case L[n2(479)]:
        return W(n2(518), `keepLines`, U(i2), a2, i2);
      case L.sprmPFKeepFollow:
        return W(n2(518), `keepNext`, U(i2), a2, i2);
      case L.sprmPFPageBreakBefore:
        return W(`para`, `pageBreakBefore`, U(i2), a2, i2);
      case L[n2(557)]:
        return W(`para`, n2(653), i2[0] ?? 0, a2, i2);
      case L.sprmPIlfo:
        return W(`para`, `listId`, R(i2, 0), a2, i2);
      case L.sprmPDxaRight80:
      case L.sprmPDxaRight:
        return W(`para`, `rightIndent`, z(i2, 0), a2, i2);
      case L.sprmPDxaLeft80:
      case L.sprmPDxaLeft:
        return W(`para`, n2(515), z(i2, 0), a2, i2);
      case L.sprmPDxaLeft180:
      case L.sprmPDxaLeft1:
        return W(`para`, `firstLineIndent`, z(i2, 0), a2, i2);
      case L[n2(666)]:
        return W(`para`, `lineSpacing`, z(i2, 0), a2, i2);
      case L.sprmPDyaBefore:
        return W(`para`, `spacingBefore`, z(i2, 0), a2, i2);
      case L.sprmPDyaAfter:
        return W(`para`, `spacingAfter`, z(i2, 0), a2, i2);
      case L.sprmPFInTable:
        return W(`para`, n2(654), U(i2), a2, i2);
      case L.sprmPFTtp:
        return W(`para`, `tableRowEnd`, U(i2), a2, i2);
      case L[n2(484)]:
        return W(n2(518), n2(725), z(i2, 0), a2, i2);
      case L.sprmPDyaAbs:
        return W(`para`, `frameTop`, z(i2, 0), a2, i2);
      case L.sprmPDxaWidth:
        return W(n2(518), n2(672), z(i2, 0), a2, i2);
      case L.sprmPPc:
        return W(n2(518), `framePosition`, i2[0] ?? 0, a2, i2);
      case L.sprmPWr:
        return W(`para`, `frameWrap`, i2[0] ?? 0, a2, i2);
      case L.sprmPBrcTop80:
      case L[n2(632)]:
        return W(`para`, `borderTop`, V(i2, 0), a2, i2);
      case L.sprmPBrcLeft80:
      case L.sprmPBrcLeft:
        return W(`para`, `borderLeft`, V(i2, 0), a2, i2);
      case L.sprmPBrcBottom80:
      case L.sprmPBrcBottom:
        return W(n2(518), `borderBottom`, V(i2, 0), a2, i2);
      case L.sprmPBrcRight80:
      case L.sprmPBrcRight:
        return W(n2(518), `borderRight`, V(i2, 0), a2, i2);
      case L.sprmPBrcBetween80:
      case L.sprmPBrcBetween:
        return W(`para`, `borderBetween`, V(i2, 0), a2, i2);
      case L.sprmPBrcBar80:
      case L.sprmPBrcBar:
        return W(`para`, `borderBar`, V(i2, 0), a2, i2);
      case L.sprmPWHeightAbs:
        return W(`para`, `frameHeight`, z(i2, 0), a2, i2);
      case L[n2(649)]:
      case L.sprmPShd:
        return W(`para`, n2(690), i2.slice(), a2, i2);
      case L.sprmPDyaFromText:
        return W(`para`, `distanceFromTextY`, z(i2, 0), a2, i2);
      case L.sprmPDxaFromText:
        return W(`para`, `distanceFromTextX`, z(i2, 0), a2, i2);
      case L.sprmPFLocked:
        return W(n2(518), `locked`, U(i2), a2, i2);
      case L.sprmPFWidowControl:
        return W(`para`, n2(524), U(i2), a2, i2);
      case L.sprmPFBiDi:
        return W(`para`, `rtlPara`, U(i2), a2, i2);
      case L.sprmPFAdjustRight:
        return W(`para`, n2(534), U(i2), a2, i2);
      case L.sprmPItap:
        return W(`para`, n2(695), Le(i2, 0), a2, i2);
      case L.sprmPDtap:
        return W(`para`, `dtap`, Le(i2, 0), a2, i2);
      case L.sprmPFInnerTableCell:
        return W(`para`, `innerTableCell`, U(i2), a2, i2);
      case L[n2(525)]:
        return W(`para`, `innerTableRowEnd`, U(i2), a2, i2);
      case L.sprmPFDyaBeforeAuto:
        return W(`para`, `spacingBeforeAuto`, U(i2), a2, i2);
      case L.sprmPFDyaAfterAuto:
        return W(`para`, `spacingAfterAuto`, U(i2), a2, i2);
      case L.sprmTJc90:
        return W(`table`, `alignment`, R(i2, 0), a2, i2);
      case L[n2(657)]:
        return W(`table`, `leftIndent`, z(i2, 0), a2, i2);
      case L[n2(687)]:
        return W(`table`, n2(639), R(i2, 0), a2, i2);
      case L.sprmTFCantSplit90:
        return W(`table`, `cantSplit`, U(i2), a2, i2);
      case L.sprmTTableHeader:
        return W(n2(564), `header`, U(i2), a2, i2);
      case L[n2(591)]:
        return W(n2(564), n2(637), z(i2, 0), a2, i2);
      case L.sprmTDefTable:
        return W(`table`, n2(481), Be(i2), a2, i2);
      case L.sprmTFBiDi:
        return W(`table`, `rtl`, U(i2), a2, i2);
      case L[n2(490)]:
        return W(`table`, n2(465), i2[0] ?? 0, a2, i2);
      case L.sprmTDxaAbs:
        return W(`table`, `absLeft`, z(i2, 0), a2, i2);
      case L.sprmTDyaAbs:
        return W(n2(564), `absTop`, z(i2, 0), a2, i2);
      case L[n2(466)]:
        return W(n2(564), n2(708), z(i2, 0), a2, i2);
      case L.sprmTDyaFromText:
        return W(`table`, `distanceTop`, z(i2, 0), a2, i2);
      case L.sprmTTableWidth:
        return W(`table`, n2(644), Ue(i2), a2, i2);
      case L.sprmTFAutofit:
        return W(`table`, `autoFit`, U(i2), a2, i2);
      case L.sprmTWidthBefore:
        return W(`table`, `widthBefore`, Ue(i2), a2, i2);
      case L[n2(512)]:
        return W(`table`, n2(630), Ue(i2), a2, i2);
      case L.sprmTInsert:
        return W(`table`, `insertCells`, We(i2), a2, i2);
      case L[n2(543)]:
        return W(`table`, `deleteCells`, B(i2, 0), a2, i2);
      case L[n2(508)]:
        return W(n2(564), `columnWidth`, Ve(i2), a2, i2);
      case L[n2(598)]:
        return W(`table`, `merge`, B(i2, 0), a2, i2);
      case L.sprmTSplit:
        return W(`table`, `split`, B(i2, 0), a2, i2);
      case L.sprmTTextFlow:
        return W(`table`, `textFlow`, H(i2), a2, i2);
      case L.sprmTVertMerge:
        return W(`table`, `vertMerge`, H(i2), a2, i2);
      case L[n2(674)]:
        return W(n2(564), `vertAlign`, H(i2), a2, i2);
      case L.sprmTSetShd:
      case L.sprmTSetShdOdd:
        return W(`table`, `setShading`, H(i2), a2, i2);
      case L.sprmTSetBrc80:
      case L.sprmTSetBrc:
        return W(`table`, `setBorder`, He(i2), a2, i2);
      case L[n2(522)]:
      case L.sprmTCellPaddingDefault:
        return W(n2(564), `cellPadding`, Ve(i2), a2, i2);
      case L.sprmTCellWidth:
        return W(`table`, `cellWidth`, Ve(i2), a2, i2);
      case L.sprmTFitText:
        return W(n2(564), `fitText`, H(i2), a2, i2);
      case L[n2(655)]:
        return W(`table`, `cellNoWrap`, H(i2), a2, i2);
      case L[n2(472)]:
        return W(`table`, `styleId`, R(i2, 0), a2, i2);
      default:
        return {
          kind: r2 === 1 ? `para` : r2 === 2 ? `char` : r2 === 5 ? `table` : `unknown`,
          name: n2(718) + e2.toString(16),
          value: i2,
          raw: e2,
          operandBytes: i2
        };
    }
  }
  function G(e2, t2, n2) {
    let r2 = [], i2 = t2;
    for (; i2 + 2 <= n2; ) {
      let t3 = R(e2, i2);
      i2 += 2;
      let a2 = Ge(e2, i2, t3);
      if (!a2 || i2 + a2 > n2) break;
      let o2 = e2.subarray(i2, i2 + a2);
      i2 += a2, r2.push(Ke(t3, o2));
    }
    return r2;
  }
  function qe(e2, t2, n2) {
    let r2 = s;
    if (t2 == null || n2 == null || n2 <= 0) return {
      aFC: [],
      pages: []
    };
    let i2 = new M(e2.subarray(t2, t2 + n2)), a2 = Math.floor((n2 - 4) / 8);
    if (a2 <= 0) return {
      aFC: [],
      pages: []
    };
    let o2 = [];
    for (let e3 = 0; e3 <= a2; e3 += 1) o2.push(i2.u32(e3 * 4) >>> 0);
    let c2 = [], l2 = (a2 + 1) * 4;
    for (let e3 = 0; e3 < a2; e3 += 1) c2.push(i2[r2(546)](l2 + e3 * 4) & 4194303);
    return {
      aFC: o2,
      pages: c2
    };
  }
  function Je(e2, t2) {
    let n2 = s, r2 = t2 * 512, i2 = e2[n2(567)](r2, r2 + 512);
    if (i2[n2(671)] < 512) return null;
    let a2 = new M(i2), o2 = a2.u8(511);
    if (!o2 || o2 > 100) return null;
    let c2 = [];
    for (let e3 = 0; e3 <= o2; e3 += 1) c2.push(a2.u32(e3 * 4) >>> 0);
    let l2 = [], u2 = [], d2 = (o2 + 1) * 4;
    for (let e3 = 0; e3 < o2; e3 += 1) {
      let t3 = a2.u8(d2 + e3);
      l2[n2(698)](t3), u2.push(t3 ? r2 + t3 * 2 : 0);
    }
    return {
      crun: o2,
      rgfc: c2,
      rgb: l2,
      chpxOffsets: u2
    };
  }
  function Ye(e2, t2) {
    let n2 = t2 * 512, r2 = e2.subarray(n2, n2 + 512);
    if (r2.length < 512) return null;
    let i2 = new M(r2), a2 = i2.u8(511);
    if (a2 > 29) return null;
    let o2 = [];
    for (let e3 = 0; e3 <= a2; e3 += 1) o2.push(i2.u32(e3 * 4) >>> 0);
    let s2 = (a2 + 1) * 4, c2 = [], l2 = [];
    for (let e3 = 0; e3 < a2; e3 += 1) {
      let t3 = i2.u8(s2 + e3 * 13);
      c2.push(t3), l2.push(t3 ? n2 + t3 * 2 : 0);
    }
    return {
      cpara: a2,
      rgfc: o2,
      bOffsets: c2,
      papxOffsets: l2
    };
  }
  function Xe(e2, t2, n2, r2) {
    let i2 = s, a2 = n2.fibRgFcLcb.fcPlcfBteChpx, o2 = n2.fibRgFcLcb.lcbPlcfBteChpx, c2 = qe(t2, a2, o2), l2 = [];
    for (let t3 of c2.pages) {
      let n3 = Je(e2, t3);
      if (n3) for (let t4 = 0; t4 < n3.crun; t4 += 1) {
        let i3 = n3.rgfc[t4] ?? 0, a3 = n3.rgfc[t4 + 1] ?? i3, o3 = F(r2, i3), s2 = F(r2, a3);
        if (o3 == null || s2 == null || s2 <= o3) continue;
        let c3 = n3.chpxOffsets[t4] ? Qe(e2, n3.chpxOffsets[t4]) : [];
        l2.push({
          cpStart: o3,
          cpEnd: s2,
          fcStart: i3,
          fcEnd: a3,
          properties: c3
        });
      }
    }
    return l2.sort((e3, t3) => e3[i2(656)] - t3.cpStart || e3.cpEnd - t3.cpEnd), l2;
  }
  function Ze(e2, t2, n2, r2) {
    let i2 = s, a2 = n2[i2(719)][i2(602)], o2 = n2.fibRgFcLcb[i2(610)], c2 = qe(t2, a2, o2), l2 = [];
    for (let t3 of c2.pages) {
      let n3 = Ye(e2, t3);
      if (n3) for (let t4 = 0; t4 < n3.cpara; t4 += 1) {
        let a3 = n3.rgfc[t4] ?? 0, o3 = n3[i2(625)][t4 + 1] ?? a3, s2 = F(r2, a3), c3 = F(r2, o3);
        if (s2 == null || c3 == null || c3 < s2) continue;
        let u2 = n3.papxOffsets[t4] ? $e(e2, n3[i2(468)][t4]) : {
          styleId: 0,
          properties: []
        };
        l2.push({
          cpStart: s2,
          cpEnd: c3,
          fcStart: a3,
          fcEnd: o3,
          styleId: u2[i2(478)],
          properties: u2[i2(571)],
          rawOffset: n3.papxOffsets[t4] ?? 0
        });
      }
    }
    return l2.sort((e3, t3) => e3.cpStart - t3[i2(656)] || e3.cpEnd - t3.cpEnd), l2;
  }
  function Qe(e2, t2) {
    if (t2 == null || t2 < 0 || t2 >= e2.length) return [];
    let n2 = e2[t2] ?? 0;
    if (!n2) return [];
    let r2 = t2 + 1;
    return G(e2, r2, Math.min(e2.length, r2 + n2));
  }
  function $e(e2, t2) {
    let n2 = s;
    if (t2 == null || t2 < 0 || t2 >= e2.length) return {
      styleId: 0,
      properties: []
    };
    let r2 = new M(e2), i2 = r2.u8(t2);
    if (i2 === 0 && !r2.ensure(t2 + 1, 1)) return {
      styleId: 0,
      properties: []
    };
    let a2, o2;
    return i2 === 0 ? (o2 = r2.u8(t2 + 1) * 2, a2 = t2 + 2) : (o2 = i2 - 1, a2 = t2 + 1), o2 < 2 || !r2.ensure(a2, Math[n2(693)](2, o2)) ? {
      styleId: 0,
      properties: []
    } : {
      styleId: r2.u16(a2),
      properties: G(e2, a2 + 2, Math.min(e2.length, a2 + o2))
    };
  }
  function et(e2, t2) {
    let n2 = s, r2 = t2;
    for (; r2 + 1 < e2.length && !(e2[r2] === 0 && e2[r2 + 1] === 0); ) r2 += 2;
    return {
      value: new TextDecoder(`utf-16le`)[n2(482)](e2.subarray(t2, r2)),
      nextOffset: Math.min(e2.length, r2 + 2)
    };
  }
  function tt(e2, t2) {
    if (!e2[s(671)]) return null;
    let n2 = new M(e2), r2 = n2.u8(0), i2 = n2.u8(1), a2 = n2.u16(2), o2 = n2.u8(4), c2 = n2.u8(5), l2 = n2.slice(6, 10), u2 = n2.slice(16, 24), d2 = ``, f2 = ``;
    if (e2.length > 40) {
      let t3 = new TextDecoder(`utf-16le`).decode(e2.subarray(40)).split(`\0`).filter(Boolean);
      if (d2 = t3[0] || ``, f2 = t3[1] || ``, !f2 && c2) {
        let t4 = 40 + c2 * 2;
        t4 + 2 <= e2.length && (f2 = et(e2, t4).value);
      }
    }
    return {
      index: t2,
      cbFfnM1: r2,
      ffid: i2,
      weight: a2,
      charset: o2,
      ixchSzAlt: c2,
      panose: l2,
      fontSignature: u2,
      name: d2,
      altName: f2
    };
  }
  function nt(e2, t2) {
    let n2 = t2.fcSttbfFfn, r2 = t2.lcbSttbfFfn;
    if (n2 == null || r2 == null || r2 <= 0) return {
      header: null,
      fonts: [],
      byIndex(e3) {
        return null;
      }
    };
    let i2 = e2.subarray(n2, n2 + r2), a2 = new M(i2), o2 = a2.u16(0), s2 = a2.u16(2), c2 = 4, l2 = [];
    for (let e3 = 0; e3 < o2 && c2 < i2.length; e3 += 1) {
      let t3 = a2.u8(c2) + 1, n3 = tt(i2.subarray(c2, Math.min(c2 + t3, i2.length)), e3);
      n3 && l2.push(n3), c2 += t3 + s2;
    }
    return {
      header: {
        cData: o2,
        cbExtra: s2
      },
      fonts: l2,
      byIndex(e3) {
        return e3 == null || e3 < 0 ? null : l2[e3] || null;
      }
    };
  }
  function rt(e2, t2, n2 = 0) {
    if (n2 + t2[s(671)] > e2.length) return false;
    for (let r2 = 0; r2 < t2.length; r2 += 1) if (e2[n2 + r2] !== t2[r2]) return false;
    return true;
  }
  function it(e2) {
    let t2 = s, n2 = [
      {
        mime: t2(502),
        magic: [
          137,
          80,
          78,
          71
        ],
        end: at
      },
      {
        mime: `image/jpeg`,
        magic: [
          255,
          216,
          255
        ],
        end: ot
      },
      {
        mime: `image/gif`,
        magic: [
          71,
          73,
          70,
          56
        ],
        end: st
      },
      {
        mime: `image/bmp`,
        magic: [
          66,
          77
        ],
        end: ct
      },
      {
        mime: `image/tiff`,
        magic: [
          73,
          73,
          42,
          0
        ],
        end: null
      },
      {
        mime: `image/tiff`,
        magic: [
          77,
          77,
          0,
          42
        ],
        end: null
      },
      {
        mime: t2(701),
        magic: [
          1,
          0,
          0,
          0
        ],
        end: lt
      },
      {
        mime: `image/wmf`,
        magic: [
          215,
          205,
          198,
          154
        ],
        end: null
      }
    ];
    for (let t3 = 0; t3 < e2.length - 4; t3 += 1) for (let r2 of n2) if (rt(e2, r2.magic, t3)) {
      let n3 = r2.end ? r2.end(e2, t3) : e2.length;
      return {
        mime: r2.mime,
        start: t3,
        end: n3 || e2.length
      };
    }
    return null;
  }
  function at(e2, t2) {
    for (let n2 = t2 + 8; n2 + 8 < e2.length; n2 += 1) if (rt(e2, [
      73,
      69,
      78,
      68
    ], n2)) return n2 + 8;
    return e2.length;
  }
  function ot(e2, t2) {
    for (let n2 = t2 + 2; n2 + 1 < e2.length; n2 += 1) if (e2[n2] === 255 && e2[n2 + 1] === 217) return n2 + 2;
    return e2.length;
  }
  function st(e2, t2) {
    for (let n2 = t2 + 6; n2 < e2.length; n2 += 1) if (e2[n2] === 59) return n2 + 1;
    return e2.length;
  }
  function ct(e2, t2) {
    if (t2 + 6 <= e2.length) {
      let n2 = new M(e2.subarray(t2)).u32(2);
      if (n2 > 0 && t2 + n2 <= e2.length) return t2 + n2;
    }
    return e2.length;
  }
  function lt(e2, t2) {
    let n2 = s;
    if (t2 + 48 <= e2.length) {
      let r2 = new M(e2.subarray(t2)).u32(40);
      if (r2 > 0 && t2 + r2 <= e2[n2(671)]) return t2 + r2;
    }
    return e2[n2(671)];
  }
  function ut(e2, t2, n2 = {}) {
    let r2 = s;
    if (!e2 || t2 == null || t2 < 0 || t2 + 68 > e2.length) return null;
    let i2 = new M(e2), a2 = i2.i32(t2), o2 = i2.u16(t2 + 4), c2 = a2 > 0 && t2 + a2 <= e2.length ? a2 : Math.min(e2.length - t2, n2[r2(493)] || 8 * 1024 * 1024), l2 = e2[r2(567)](t2, t2 + c2), u2 = Math.min(o2 || 68, l2[r2(671)]), d2 = it(l2.subarray(u2));
    if (!d2) return {
      id: x(`asset-img`),
      type: `image`,
      mime: `application/octet-stream`,
      bytes: l2,
      dataUrl: w(l2, `application/octet-stream`),
      meta: {
        pictureOffset: t2,
        lcb: a2,
        cbHeader: o2
      }
    };
    let f2 = u2 + d2.start, p2 = Math[r2(621)](u2 + d2.end, l2.length), m2 = l2[r2(567)](f2, p2);
    return {
      id: x(`asset-img`),
      type: r2(689),
      mime: d2.mime,
      bytes: m2,
      dataUrl: w(m2, d2.mime),
      meta: {
        pictureOffset: t2,
        lcb: a2,
        cbHeader: o2
      }
    };
  }
  function dt(e2, t2) {
    let n2 = s, r2 = t2;
    for (; r2 < e2.length && e2[r2] !== 0; ) r2 += 1;
    return {
      value: new TextDecoder(`windows-1252`)[n2(482)](e2.subarray(t2, r2)),
      nextOffset: r2 + 1
    };
  }
  function ft(e2) {
    let t2 = s, n2 = new M(e2);
    for (let r2 of [
      4,
      6
    ]) try {
      let i2 = r2, a2 = dt(e2, i2);
      i2 = a2.nextOffset;
      let o2 = dt(e2, i2);
      i2 = o2.nextOffset;
      let s2 = dt(e2, i2);
      if (i2 = s2.nextOffset, i2 + 4 > e2.length) continue;
      let c2 = n2.u32(i2);
      if (i2 += 4, c2 > 0 && i2 + c2 <= e2.length) {
        let n3 = e2.subarray(i2, i2 + c2);
        return {
          label: a2[t2(545)],
          originalPath: o2.value,
          tempPath: s2.value,
          dataSize: c2,
          bytes: n3
        };
      }
    } catch {
    }
    return null;
  }
  function pt(e2, t2) {
    let n2 = s, r2 = e2.listChildren(t2)[n2(503)]((e3) => e3.objectType === 2 || e3.objectType === 5), i2 = new Map(r2.map((e3) => [
      e3.name.toLowerCase(),
      e3
    ])), a2 = i2.get(`objinfo`) || i2.get(`objinfo`) || i2.get(n2(510)), o2 = i2[n2(505)](`ole10native`) || i2.get(`ole10native`) || i2.get(`ole10native`), c2 = i2.get(`package`) || i2.get(`contents`) || i2.get(`content`), l2 = {
      entry: t2,
      streams: r2,
      displayName: t2.name,
      attachment: null,
      objectData: null
    };
    if (o2) {
      let r3 = ft(e2[n2(715)](o2) || new Uint8Array());
      if (r3) {
        let e3 = r3[n2(590)] || r3[n2(583)][n2(585)](/[\\/]/).pop() || t2.name + `.bin`;
        return l2.attachment = {
          id: x(`asset-ole`),
          type: `attachment`,
          name: e3,
          mime: n2(593),
          bytes: r3[n2(680)],
          dataUrl: w(r3[n2(680)], n2(593)),
          meta: r3
        }, l2;
      }
    }
    if (c2) {
      let r3 = e2.getStream(c2) || new Uint8Array();
      l2.attachment = {
        id: x(`asset-pkg`),
        type: `attachment`,
        name: T(t2[n2(661)]) + `.bin`,
        mime: `application/octet-stream`,
        bytes: r3,
        dataUrl: w(r3, `application/octet-stream`),
        meta: {
          stream: c2.name
        }
      };
    }
    return a2 && (l2.objectData = e2[n2(715)](a2) || new Uint8Array()), l2;
  }
  function mt(e2) {
    let t2 = e2.getEntry(`/ObjectPool`);
    if (!t2) return /* @__PURE__ */ new Map();
    let n2 = e2.listChildren(t2).filter((e3) => e3.objectType === 1), r2 = /* @__PURE__ */ new Map();
    for (let t3 of n2) r2.set(t3.name, pt(e2, t3));
    return r2;
  }
  r();
  function ht(e2) {
    let t2 = s, n2 = {
      bold: false,
      italic: false,
      strike: false,
      underline: 0,
      fontSizeHalfPoints: void 0,
      fontFamilyId: void 0,
      colorIndex: void 0,
      highlight: void 0,
      spacing: 0,
      positionHalfPoints: 0,
      scale: 100,
      hidden: false,
      smallCaps: false,
      caps: false,
      outline: false,
      shadow: false,
      emboss: false,
      imprint: false,
      rtl: false,
      pictureOffset: void 0,
      data: false,
      ole2: false,
      object: false,
      special: false,
      charStyleId: void 0
    };
    for (let r2 of e2 || []) switch (r2.name) {
      case `plain`:
        r2.value && (n2.bold = false, n2.italic = false, n2.strike = false, n2.underline = 0, n2.smallCaps = false, n2.caps = false);
        break;
      case `bold`:
      case `italic`:
      case `strike`:
      case `hidden`:
      case t2(599):
      case `caps`:
      case `outline`:
      case `shadow`:
      case `emboss`:
      case `imprint`:
      case `rtl`:
      case `data`:
      case `ole2`:
      case `object`:
      case `special`:
        n2[r2.name] = !!r2.value;
        break;
      case `underline`:
        n2.underline = r2.value ?? 0;
        break;
      case `fontSizeHalfPoints`:
        n2.fontSizeHalfPoints = r2.value;
        break;
      case `fontFamilyId`:
        n2.fontFamilyId = r2[t2(545)];
        break;
      case `colorIndex`:
        n2.colorIndex = r2.value;
        break;
      case `highlight`:
        n2.highlight = r2.value;
        break;
      case `spacing`:
        n2[t2(723)] = r2.value || 0;
        break;
      case `positionHalfPoints`:
        n2[t2(555)] = r2.value || 0;
        break;
      case `scale`:
        n2.scale = r2.value || 100;
        break;
      case `pictureOffset`:
        n2.pictureOffset = r2.value;
        break;
      case `charStyleId`:
        n2.charStyleId = r2.value;
        break;
      default:
        n2[r2.name] = r2.value;
        break;
    }
    return n2;
  }
  function gt(e2) {
    let t2 = s, n2 = {
      styleId: 0,
      alignment: 0,
      spacingBefore: 0,
      spacingAfter: 0,
      lineSpacing: 0,
      leftIndent: 0,
      rightIndent: 0,
      firstLineIndent: 0,
      keepLines: false,
      keepNext: false,
      pageBreakBefore: false,
      widowControl: false,
      inTable: false,
      tableRowEnd: false,
      innerTableCell: false,
      innerTableRowEnd: false,
      itap: 0,
      dtap: 0,
      listLevel: void 0,
      listId: void 0,
      rtlPara: false,
      adjustRight: false,
      frameLeft: void 0,
      frameTop: void 0,
      frameWidth: void 0,
      frameHeight: void 0,
      framePosition: void 0,
      frameWrap: void 0,
      borders: {},
      shading: void 0
    };
    for (let r2 of e2 || []) switch (r2.name) {
      case t2(478):
        n2[t2(478)] = r2.value || 0;
        break;
      case t2(511):
        n2.alignment = r2.value ?? 0;
        break;
      case `spacingBefore`:
        n2[t2(727)] = r2.value || 0;
        break;
      case `spacingAfter`:
        n2.spacingAfter = r2.value || 0;
        break;
      case `lineSpacing`:
        n2.lineSpacing = r2[t2(545)] || 0;
        break;
      case `leftIndent`:
        n2.leftIndent = r2.value || 0;
        break;
      case `rightIndent`:
        n2.rightIndent = r2.value || 0;
        break;
      case `firstLineIndent`:
        n2.firstLineIndent = r2.value || 0;
        break;
      case t2(620):
      case `keepNext`:
      case `pageBreakBefore`:
      case `widowControl`:
      case t2(654):
      case t2(592):
      case `innerTableCell`:
      case `innerTableRowEnd`:
      case `rtlPara`:
      case `adjustRight`:
        n2[r2.name] = !!r2.value;
        break;
      case `itap`:
        n2.itap = r2.value || 0;
        break;
      case t2(531):
        n2.dtap = r2.value || 0;
        break;
      case t2(653):
        n2.listLevel = r2.value;
        break;
      case `listId`:
        n2.listId = r2[t2(545)];
        break;
      case `frameLeft`:
        n2.frameLeft = r2.value;
        break;
      case `frameTop`:
        n2.frameTop = r2.value;
        break;
      case `frameWidth`:
        n2.frameWidth = r2[t2(545)];
        break;
      case `frameHeight`:
        n2.frameHeight = r2.value;
        break;
      case `framePosition`:
        n2.framePosition = r2.value;
        break;
      case `frameWrap`:
        n2.frameWrap = r2.value;
        break;
      case `borderTop`:
        n2.borders.top = r2.value;
        break;
      case t2(506):
        n2.borders.left = r2.value;
        break;
      case `borderBottom`:
        n2.borders.bottom = r2.value;
        break;
      case t2(563):
        n2[t2(539)].right = r2.value;
        break;
      case t2(494):
        n2.borders.between = r2[t2(545)];
        break;
      case `borderBar`:
        n2.borders.bar = r2.value;
        break;
      case `shading`:
        n2[t2(690)] = r2.value;
        break;
      default:
        n2[r2.name] = r2.value;
        break;
    }
    return n2;
  }
  function K(e2) {
    let t2 = s, n2 = {
      styleId: void 0,
      alignment: 0,
      leftIndent: 0,
      gapHalf: 0,
      cantSplit: false,
      header: false,
      rowHeight: 0,
      rtl: false,
      positionCode: void 0,
      absLeft: void 0,
      absTop: void 0,
      distanceLeft: void 0,
      distanceTop: void 0,
      tableWidth: void 0,
      autoFit: void 0,
      widthBefore: void 0,
      widthAfter: void 0,
      defTable: void 0,
      operations: []
    };
    for (let r2 of e2 || []) switch (r2.name) {
      case `styleId`:
        n2.styleId = r2.value;
        break;
      case `alignment`:
        n2.alignment = r2.value ?? 0;
        break;
      case t2(515):
        n2[t2(515)] = r2.value || 0;
        break;
      case t2(639):
        n2.gapHalf = r2.value || 0;
        break;
      case `cantSplit`:
      case t2(462):
      case t2(471):
        n2[r2.name] = !!r2[t2(545)];
        break;
      case `rowHeight`:
        n2.rowHeight = r2.value || 0;
        break;
      case `positionCode`:
        n2[t2(465)] = r2.value;
        break;
      case `absLeft`:
        n2.absLeft = r2.value;
        break;
      case t2(608):
        n2.absTop = r2.value;
        break;
      case `distanceLeft`:
        n2.distanceLeft = r2.value;
        break;
      case t2(577):
        n2.distanceTop = r2.value;
        break;
      case t2(644):
        n2.tableWidth = r2.value;
        break;
      case `autoFit`:
        n2.autoFit = r2[t2(545)];
        break;
      case t2(702):
        n2.widthBefore = r2.value;
        break;
      case `widthAfter`:
        n2.widthAfter = r2.value;
        break;
      case `defTable`:
        n2.defTable = r2.value;
        break;
      default:
        n2[t2(566)].push(r2);
        break;
    }
    return n2;
  }
  function _t(e2) {
    let t2 = s;
    return e2 != null && e2.inTable ? Math[t2(693)](1, e2.itap || (e2.dtap ? e2[t2(531)] : 1)) : 0;
  }
  function vt(e2) {
    return Ee[e2] || `left`;
  }
  function yt(e2) {
    return Te[e2] || (e2 ? `single` : `none`);
  }
  function bt(e2) {
    return De[e2] || `top`;
  }
  function q(e2, t2, n2) {
    let r2 = s;
    if (!t2) return;
    let i2 = Math.max(0, t2.first || 0), a2 = Math.max(i2, t2[r2(498)] || i2);
    for (let t3 = i2; t3 < a2 && t3 < e2.length; t3 += 1) n2(e2[t3], t3);
  }
  function xt(e2) {
    let t2 = s, r2 = e2 == null ? void 0 : e2.defTable;
    if (!r2 || !Array.isArray(r2.cells)) return [];
    let i2 = r2.cells.map((e3, t3) => {
      var _a, _b;
      let n2 = Q;
      var i3, a2, o2, s2, c2, l2, u2, d2;
      return {
        index: t3,
        width: e3 == null ? void 0 : e3[n2(634)],
        ftsWidth: e3 == null || (i3 = e3[n2(631)]) == null ? void 0 : i3[n2(617)],
        borders: (e3 == null ? void 0 : e3.borders) || {},
        merge: (e3 == null || (a2 = e3.tcgrf) == null ? void 0 : a2.horzMerge) || 0,
        vertMerge: (e3 == null || (o2 = e3.tcgrf) == null ? void 0 : o2.vertMerge) || 0,
        vertAlign: (e3 == null || (s2 = e3.tcgrf) == null ? void 0 : s2.vertAlign) || 0,
        fitText: !!(!(e3 == null || (c2 = e3.tcgrf) == null) && c2.fitText),
        noWrap: !!(!(e3 == null || (l2 = e3[n2(631)]) == null) && l2.noWrap),
        hideMark: !!(!(e3 == null || (u2 = e3.tcgrf) == null) && u2.hideMark),
        textFlow: (e3 == null || (d2 = e3.tcgrf) == null ? void 0 : d2.textFlow) || 0,
        rightBoundary: (_a = r2.rgdxaCenter) == null ? void 0 : _a[t3 + 1],
        leftBoundary: (_b = r2.rgdxaCenter) == null ? void 0 : _b[t3]
      };
    });
    for (let r3 of e2.operations || []) switch (r3[t2(661)]) {
      case `merge`:
        q(i2, r3[t2(545)], (e3, t3) => {
          t3 === r3.value.first ? e3.merge = 2 : e3.merge = 1;
        });
        break;
      case `split`:
        q(i2, r3.value, (e3) => {
          e3.merge = 0;
        });
        break;
      case t2(580):
      case `columnWidth`:
        q(i2, r3.value.range, (e3) => {
          let t3 = r3.value;
          e3.width = t3.width, e3.ftsWidth = t3.ftsWidth;
        });
        break;
      case `vertMerge`:
        q(i2, r3[t2(545)].range, (e3) => {
          let n2 = t2;
          e3[n2(528)] = r3[n2(545)].value;
        });
        break;
      case `vertAlign`:
        q(i2, r3.value.range, (e3) => {
          e3.vertAlign = r3.value.value;
        });
        break;
      case `setBorder`:
        q(i2, r3[t2(545)].range, (e3) => {
          let i3 = t2;
          e3.borders = n(n({}, e3.borders || {}), {}, {
            all: r3[i3(545)].border
          });
        });
        break;
      case `setShading`:
        q(i2, r3.value.range, (e3) => {
          e3.shading = r3[t2(545)].value;
        });
        break;
      case `fitText`:
        q(i2, r3.value.range, (e3) => {
          let n2 = t2;
          e3[n2(477)] = !!r3[n2(545)].value;
        });
        break;
      case `cellNoWrap`:
        q(i2, r3.value.range, (e3) => {
          e3.noWrap = !!r3.value.value;
        });
        break;
      case `textFlow`:
        q(i2, r3.value.range, (e3) => {
          e3.textFlow = r3[t2(545)].value;
        });
        break;
      default:
        break;
    }
    return i2;
  }
  function J(...e2) {
    let t2 = /* @__PURE__ */ new Map();
    for (let n2 of e2) for (let e3 of n2 || []) t2.set(e3.kind + `:` + e3.name, e3);
    return Array.from(t2.values());
  }
  function St(e2) {
    let t2 = s, n2 = {
      para: [],
      char: [],
      table: []
    };
    for (let r2 of e2 || []) r2.kind === `para` ? n2.para.push(r2) : r2.kind === `char` ? n2.char.push(r2) : r2.kind === `table` && n2.table[t2(698)](r2);
    return n2;
  }
  function Ct(e2, t2) {
    let n2 = s, r2 = new M(e2), i2 = r2.u16(t2), a2 = t2 + 2, o2 = i2 * 2, c2 = r2.utf16le(a2, o2), l2 = a2 + o2 + 2;
    return {
      value: c2[n2(629)](/\u0000+$/, ``),
      nextOffset: l2
    };
  }
  function wt(e2, t2) {
    let n2 = s, r2 = new M(e2), i2 = r2.u16(t2), a2 = r2.u16(t2 + 2), o2 = r2.u16(t2 + 4);
    return {
      sti: i2 & 4095,
      flags1: i2 >> 12,
      stk: a2 & 15,
      istdBase: a2 >> 4 & 4095,
      cupx: o2 & 15,
      istdNext: o2 >> 4 & 4095,
      bchUpe: r2.u16(t2 + 6),
      grfstd: r2[n2(450)](t2 + 8)
    };
  }
  function Tt(e2, t2) {
    let n2 = s, r2 = new M(e2).u16(t2), i2 = t2 + 2, a2 = i2 + r2, o2 = e2.subarray(i2, Math.min(a2, e2[n2(671)])), c2 = 0, l2 = [];
    return o2.length >= 2 && (c2 = o2[0] | (o2[1] ?? 0) << 8, l2 = G(o2, 2, o2.length)), {
      cbUpx: r2,
      styleId: c2,
      properties: l2,
      nextOffset: S(a2)
    };
  }
  function Et(e2, t2) {
    let n2 = s, r2 = new M(e2).u16(t2), i2 = t2 + 2, a2 = i2 + r2, o2 = e2[n2(567)](i2, Math.min(a2, e2.length));
    return {
      cbUpx: r2,
      properties: G(o2, 0, o2.length),
      nextOffset: S(a2)
    };
  }
  function Dt(e2, t2) {
    let n2 = s, r2 = new M(e2).u16(t2), i2 = t2 + 2, a2 = i2 + r2, o2 = e2.subarray(i2, Math[n2(621)](a2, e2[n2(671)]));
    return {
      cbUpx: r2,
      properties: G(o2, 0, o2.length),
      nextOffset: S(a2)
    };
  }
  function Ot(e2, t2, n2) {
    let r2 = s;
    if (!e2.length) return {
      istd: n2,
      empty: true,
      name: ``,
      stdfBase: {
        istdBase: 4095,
        istdNext: 0,
        stk: 1,
        cupx: 0
      },
      paraProps: [],
      charProps: [],
      tableProps: []
    };
    let i2 = Math.max(10, Math.min(t2 || 10, e2.length)), a2 = wt(e2, 0), o2 = i2, c2 = Ct(e2, o2);
    o2 = c2.nextOffset;
    let l2 = [], u2 = [], d2 = [];
    try {
      if (a2.stk === 1) {
        if (a2.cupx >= 1 && o2 + 2 <= e2.length) {
          let t3 = Tt(e2, o2);
          l2 = t3.properties, o2 = t3.nextOffset;
        }
        a2.cupx >= 2 && o2 + 2 <= e2.length && (u2 = Et(e2, o2).properties);
      } else if (a2[r2(703)] === 2) o2 + 2 <= e2[r2(671)] && (u2 = Et(e2, o2)[r2(571)]);
      else if (a2.stk === 3) {
        if (a2.cupx >= 1 && o2 + 2 <= e2[r2(671)]) {
          let t3 = Dt(e2, o2);
          d2 = t3.properties, o2 = t3.nextOffset;
        }
        if (a2.cupx >= 2 && o2 + 2 <= e2.length) {
          let t3 = Tt(e2, o2);
          l2 = t3.properties, o2 = t3.nextOffset;
        }
        a2.cupx >= 3 && o2 + 2 <= e2.length && (u2 = Et(e2, o2).properties);
      }
    } catch {
    }
    return {
      istd: n2,
      name: c2.value,
      stdfBase: a2,
      paraProps: l2,
      charProps: u2,
      tableProps: d2,
      empty: false
    };
  }
  function kt(e2, t2) {
    let n2 = s, r2 = t2.fcStshf, i2 = t2[n2(627)];
    if (r2 == null || i2 == null || i2 <= 0) return {
      styles: /* @__PURE__ */ new Map(),
      header: null,
      resolveStyle(e3) {
        return At(/* @__PURE__ */ new Map(), e3);
      }
    };
    let a2 = e2.subarray(r2, r2 + i2), o2 = new M(a2), c2 = o2.u16(0), l2 = o2.u16(2), u2 = o2.u16(4), d2 = {
      cbStshi: c2,
      cstd: l2,
      cbSTDBaseInFile: u2,
      ftcAsci: o2.u16(12),
      ftcFE: o2.u16(14),
      ftcOther: o2.u16(16)
    }, f2 = 2 + c2, p2 = /* @__PURE__ */ new Map();
    for (let e3 = 0; e3 < l2 && f2 + 2 <= a2.length; e3 += 1) {
      let t3 = o2[n2(450)](f2), r3 = f2 + 2, i3 = r3 + t3;
      if (t3 === 0) {
        p2.set(e3, {
          istd: e3,
          empty: true,
          name: ``,
          stdfBase: {
            istdBase: 4095,
            istdNext: 0,
            stk: 1,
            cupx: 0
          },
          paraProps: [],
          charProps: [],
          tableProps: []
        }), f2 = S(i3);
        continue;
      }
      let s2 = Ot(a2.subarray(r3, Math.min(i3, a2.length)), u2, e3);
      p2.set(e3, s2), f2 = S(i3);
    }
    return {
      header: d2,
      styles: p2,
      resolveStyle(e3) {
        return At(p2, e3);
      }
    };
  }
  function At(e2, t2, n2 = /* @__PURE__ */ new Set()) {
    var _a;
    let r2 = s;
    if (t2 == null || t2 === 4095 || n2[r2(683)](t2)) return {
      paraProps: [],
      charProps: [],
      tableProps: [],
      styleIds: []
    };
    let i2 = e2.get(t2);
    if (!i2 || i2[r2(714)]) return {
      paraProps: [],
      charProps: [],
      tableProps: [],
      styleIds: []
    };
    n2.add(t2);
    let a2 = At(e2, (_a = i2.stdfBase) == null ? void 0 : _a[r2(670)], n2);
    return {
      styleIds: [
        ...a2.styleIds,
        t2
      ],
      paraProps: J(a2.paraProps, i2.paraProps),
      charProps: J(a2.charProps, i2.charProps),
      tableProps: J(a2.tableProps, i2[r2(709)])
    };
  }
  r();
  function jt(e2, t2, n2, r2) {
    let i2 = s, a2 = (r2 == null ? void 0 : r2.index) || 0;
    for (; a2 < e2.length && e2[a2][i2(604)] <= t2; ) a2 += 1;
    r2 && (r2.index = a2);
    let o2 = [], c2 = a2;
    for (; c2 < e2.length && e2[c2].cpStart < n2; ) e2[c2].cpEnd > t2 && o2.push(e2[c2]), c2 += 1;
    return o2;
  }
  function Mt(e2) {
    return String(e2 || ``).trim();
  }
  function Nt(e2) {
    var _a, _b;
    let t2 = s, n2 = String(e2 || ``).replace(/[\r\n\t]+/g, ` `).replace(/\s+/g, ` `).trim();
    if (!n2) return null;
    let r2 = n2.toUpperCase();
    if (r2.startsWith(`HYPERLINK`)) {
      let e3 = n2.slice(9).trim(), t3 = ((_a = e3.match(/"([^"]+)"/)) == null ? void 0 : _a[1]) || e3.split(/\s+/)[0] || ``;
      return t3 ? {
        type: `hyperlink`,
        href: t3
      } : null;
    }
    if (r2.startsWith(`INCLUDEPICTURE`)) {
      let e3 = n2[t2(691)](14)[t2(707)]();
      return {
        type: `includePicture`,
        target: ((_b = e3.match(/"([^"]+)"/)) == null ? void 0 : _b[1]) || e3.split(/\s+/)[0] || ``
      };
    }
    return r2.startsWith(`EMBED`) ? {
      type: `embed`,
      raw: n2
    } : r2[t2(542)](t2(492)) ? {
      type: `link`,
      raw: n2
    } : {
      type: `unknown`,
      raw: n2
    };
  }
  function Pt(e2, t2) {
    let n2 = s;
    if (!t2.text) return;
    let r2 = e2[e2.length - 1];
    if (r2 && r2.type === `text` && r2.href === t2[n2(499)] && E(r2.style, t2.style)) {
      r2.text += t2.text;
      return;
    }
    e2.push(t2);
  }
  function Y(e2, t2, n2) {
    if (!n2) return;
    let r2 = e2.length ? e2[e2.length - 1].nodes : t2;
    n2.type === `text` ? Pt(r2, n2) : r2.push(n2);
  }
  function Ft(e2, t2) {
    let n2 = s, r2 = [
      `_` + t2,
      `_` + String(t2),
      `_` + t2.toString(16),
      `_` + t2.toString(16)[n2(607)]()
    ];
    for (let t3 of r2) if (e2.has(t3)) return e2.get(t3) || null;
    return null;
  }
  function It(e2, t2, n2, r2, i2, a2 = {}) {
    return function(o2) {
      let s2 = Q, c2 = o2 == null ? void 0 : o2.pictureOffset;
      if (c2 == null) return null;
      if (i2.has(c2)) return i2.get(c2) || null;
      let l2 = null, u2 = Ft(t2, c2);
      if ((o2.ole2 || o2.object || o2.data) && u2 != null && u2.attachment && (l2 = u2.attachment, r2.add(u2.entry.name)), !l2 && e2 != null && e2[s2(671)]) {
        let t3 = ut(e2, c2, a2);
        t3 && t3.mime !== `application/octet-stream` ? l2 = t3 : !l2 && u2 != null && u2.attachment ? (l2 = u2[s2(705)], r2[s2(455)](u2.entry[s2(661)])) : t3 && (l2 = t3);
      }
      return !l2 && u2 != null && u2[s2(705)] && (l2 = u2.attachment, r2.add(u2.entry.name)), l2 && n2.push(l2), i2.set(c2, l2), l2;
    };
  }
  function Lt(e2) {
    switch (e2) {
      case I.nonBreakingHyphen:
        return `-`;
      case I.nonRequiredHyphen:
        return ``;
      case I.annotationRef:
        return ``;
      default:
        return e2;
    }
  }
  function Rt(e2, t2) {
    var _a;
    let r2 = s, i2 = [], a2 = [];
    for (let o2 of e2) if (!(!o2[r2(686)] || o2.state.hidden)) for (let e3 of o2.text) {
      let s2 = Lt(e3);
      if (s2 === I.fieldStart) {
        a2[r2(698)]({
          instruction: ``,
          parsed: null,
          readingInstruction: true,
          nodes: []
        });
        continue;
      }
      if (s2 === I[r2(611)]) {
        let e4 = a2[a2[r2(671)] - 1];
        e4 && (e4[r2(589)] = Nt(e4[r2(537)]), e4.readingInstruction = false);
        continue;
      }
      if (s2 === I.fieldEnd) {
        let e4 = a2[r2(712)]();
        if (!e4) continue;
        let t3 = e4.nodes;
        if (e4.readingInstruction && (e4[r2(589)] = Nt(e4.instruction)), ((_a = e4.parsed) == null ? void 0 : _a.type) === `hyperlink`) {
          let r3 = e4.parsed.href;
          t3 = t3.map((e5) => e5.type === `lineBreak` || e5.type === `pageBreak` ? e5 : n(n({}, e5), {}, {
            href: r3
          }));
        }
        for (let e5 of t3) Y(a2, i2, e5);
        continue;
      }
      let c2 = a2[a2.length - 1];
      if (c2 != null && c2.readingInstruction) {
        c2.instruction += s2;
        continue;
      }
      if (s2 === I.hardLineBreak) {
        Y(a2, i2, {
          type: r2(647)
        });
        continue;
      }
      if (s2 === I.pageBreak) {
        Y(a2, i2, {
          type: `pageBreak`
        });
        continue;
      }
      if (s2 === I.picture) {
        let e4 = t2(o2.state);
        (e4 == null ? void 0 : e4[r2(453)]) === r2(689) ? Y(a2, i2, {
          type: `image`,
          asset: e4,
          style: o2.state
        }) : (e4 == null ? void 0 : e4.type) === `attachment` && Y(a2, i2, {
          type: r2(705),
          asset: e4,
          style: o2.state
        });
        continue;
      }
      Y(a2, i2, {
        type: r2(686),
        text: k(s2),
        style: o2.state
      });
    }
    for (; a2.length; ) {
      let e3 = a2.pop();
      for (let t3 of e3.nodes) Y(a2, i2, t3);
    }
    return i2;
  }
  function zt(e2, t2, n2, r2, i2, a2, o2) {
    var _a;
    let c2 = s, l2 = jt(n2, e2.cpStart, e2.cpEnd, o2), u2 = /* @__PURE__ */ new Set([
      e2.cpStart,
      e2.cpEnd
    ]);
    for (let t3 of l2) u2[c2(455)](Math[c2(693)](e2[c2(656)], t3.cpStart)), u2.add(Math.min(e2[c2(604)], t3[c2(604)]));
    let d2 = Array.from(u2).sort((e3, t3) => e3 - t3), f2 = [];
    for (let n3 = 0; n3 < d2.length - 1; n3 += 1) {
      let o3 = d2[n3], s2 = d2[n3 + 1];
      if (s2 <= o3) continue;
      let u3 = ((_a = l2.find((e3) => e3.cpStart <= o3 && e3[c2(604)] >= s2)) == null ? void 0 : _a.properties) || [], p2 = ht(u3), m2 = ht(J(i2, p2.charStyleId == null ? [] : r2.resolveStyle(p2.charStyleId).charProps, u3)), h2 = a2(m2[c2(648)]);
      h2 && (m2.fontFamily = h2.name || h2.altName || void 0);
      let g2 = o3 - e2.cpStart, _2 = s2 - e2.cpStart, v2 = t2.slice(g2, _2);
      if (!v2) continue;
      let y2 = f2[f2.length - 1];
      if (y2 && E(y2[c2(464)], m2)) {
        y2.text += v2, y2[c2(604)] = s2;
        continue;
      }
      f2.push({
        cpStart: o3,
        cpEnd: s2,
        text: v2,
        state: m2
      });
    }
    if (!f2.length && t2) {
      let n3 = ht(i2), r3 = a2(n3.fontFamilyId);
      r3 && (n3.fontFamily = r3.name || r3.altName || void 0), f2.push({
        cpStart: e2.cpStart,
        cpEnd: e2.cpEnd,
        text: t2,
        state: n3
      });
    }
    return f2;
  }
  function Bt(e2, t2, n2, r2, i2, a2, o2) {
    var _a, _b;
    let c2 = s, l2 = St(e2[c2(571)] || []), u2 = e2.styleId || ((_a = l2.para.find((e3) => e3.name === `styleId`)) == null ? void 0 : _a.value) || 0, d2 = n2.resolveStyle(u2), f2 = J(d2.paraProps, l2[c2(518)]), p2 = gt(f2), m2 = K(l2.table), h2 = J(m2.styleId == null ? [] : n2[c2(540)](m2.styleId).tableProps, l2.table), g2 = K(h2), _2 = d2.charProps, v2 = zt(e2, t2, i2, n2, _2, (e3) => r2.byIndex(e3), o2), y2 = Rt(v2, a2);
    return {
      id: x(`para`),
      cpStart: e2[c2(656)],
      cpEnd: e2.cpEnd,
      terminator: e2.terminator || ``,
      text: t2,
      rawProperties: e2.properties || [],
      styleId: u2,
      styleName: Mt((_b = n2.styles.get(u2)) == null ? void 0 : _b.name),
      paraProps: f2,
      paraState: p2,
      tableProps: h2,
      tableState: g2,
      segments: v2,
      inlines: y2
    };
  }
  function Vt(e2) {
    var _a, _b, _c, _d;
    let t2 = s;
    for (let n2 of e2) for (let e3 = 0; e3 < n2.cells.length; e3 += 1) {
      let r2 = n2[t2(612)][e3], i2 = ((_a = r2.meta) == null ? void 0 : _a.merge) || 0;
      if (r2.colIndex = e3, r2.colspan = 1, r2.rowspan = 1, r2.hidden = false, i2 === 1) {
        r2[t2(697)] = true;
        continue;
      }
      if (i2 > 1) {
        let t3 = e3 + 1;
        for (; t3 < n2.cells.length && (((_b = n2.cells[t3].meta) == null ? void 0 : _b.merge) || 0) === 1; ) n2.cells[t3].hidden = true, r2.colspan += 1, t3 += 1;
      }
    }
    for (let n2 = 0; n2 < e2[t2(671)]; n2 += 1) {
      let r2 = e2[n2];
      for (let i2 of r2.cells) {
        if (i2.hidden) continue;
        let r3 = ((_c = i2.meta) == null ? void 0 : _c.vertMerge) || 0;
        if (r3 === 1) {
          i2.hidden = true;
          continue;
        }
        if (r3 > 1) {
          let r4 = n2 + 1;
          for (; r4 < e2[t2(671)]; ) {
            let n3 = true;
            for (let a2 = i2.colIndex || 0; a2 < (i2.colIndex || 0) + (i2.colspan || 1); a2 += 1) {
              let i3 = e2[r4][t2(612)][a2];
              if (!i3 || (((_d = i3[t2(643)]) == null ? void 0 : _d.vertMerge) || 0) !== 1) {
                n3 = false;
                break;
              }
            }
            if (!n3) break;
            for (let t3 = i2.colIndex || 0; t3 < (i2.colIndex || 0) + (i2.colspan || 1); t3 += 1) e2[r4].cells[t3].hidden = true;
            i2.rowspan = (i2.rowspan || 1) + 1, r4 += 1;
          }
        }
      }
    }
  }
  function Ht(e2) {
    return {
      type: `paragraph`,
      id: e2.id,
      styleId: e2.styleId,
      styleName: e2.styleName,
      paraState: e2.paraState,
      inlines: e2.inlines,
      text: e2.text
    };
  }
  function Ut(e2) {
    var _a, _b, _c;
    let t2 = s, n2 = [], r2 = {
      cells: []
    }, i2 = [];
    for (let a3 of e2) if (i2.push(a3), a3[t2(526)] === I[t2(638)] && (r2.cells.push({
      id: x(t2(491)),
      paragraphs: i2.map(Ht),
      meta: null
    }), i2 = [], a3.paraState.tableRowEnd || a3[t2(535)][t2(560)])) {
      let e3 = xt(a3.tableState);
      for (; e3.length && r2.cells.length > e3.length && r2.cells[r2.cells[t2(671)] - 1].paragraphs.every((e4) => !e4[t2(686)] && !(e4[t2(582)] || []).length); ) r2.cells.pop();
      r2.cells[t2(662)]((t3, n3) => {
        t3.meta = e3[n3] || {
          index: n3
        };
      });
      let i3 = e3.length ? (e3[e3.length - 1].rightBoundary || 0) - (e3[0].leftBoundary || 0) : 0;
      n2[t2(698)]({
        id: x(`row`),
        cells: r2.cells,
        state: a3.tableState,
        gridWidthTwips: i3
      }), r2 = {
        cells: []
      };
    }
    i2[t2(671)] && r2[t2(612)][t2(698)]({
      id: x(`cell`),
      paragraphs: i2.map(Ht),
      meta: null
    }), r2.cells[t2(671)] && n2.push({
      id: x(`row`),
      cells: r2.cells,
      state: ((_a = e2[0]) == null ? void 0 : _a.tableState) || K([]),
      gridWidthTwips: 0
    }), Vt(n2);
    let a2 = ((_b = n2.find((e3) => e3.gridWidthTwips)) == null ? void 0 : _b.gridWidthTwips) || 0, o2 = Math.max(...e2.map((e3) => _t(e3.paraState)), 1);
    return {
      type: `table`,
      id: x(`table`),
      depth: o2,
      rows: n2,
      state: ((_c = n2[0]) == null ? void 0 : _c.state) || K([]),
      gridWidthTwips: a2
    };
  }
  function Wt(e2) {
    let t2 = s, n2 = [], r2 = 0;
    for (; r2 < e2.length; ) {
      let i2 = e2[r2];
      if (_t(i2[t2(535)]) <= 0) {
        n2.push(Ht(i2)), r2 += 1;
        continue;
      }
      let a2 = [];
      for (; r2 < e2.length && _t(e2[r2].paraState) > 0; ) a2.push(e2[r2]), r2 += 1;
      n2.push(Ut(a2));
    }
    return n2;
  }
  function Gt(e2, t2 = {}) {
    let r2 = s, i2 = [], a2 = me(e2, t2);
    i2.push(...a2.warnings || []);
    let o2 = a2.getStream(`/WordDocument`);
    if (!o2) throw Error(`Missing WordDocument stream`);
    let c2 = Ae(o2);
    if (c2.base.wIdent !== 42476 && D(i2, `Unexpected FIB identifier: 0x` + c2.base.wIdent.toString(16)), c2.base.fEncrypted) throw Error(`Encrypted .doc files are not supported yet`);
    let l2 = a2.getStream(c2[r2(562)].fWhichTblStm ? `/1Table` : `/0Table`);
    if (!l2) throw Error(`Missing table stream`);
    let u2 = a2.getStream(`/Data`) || new Uint8Array(), d2 = ye(l2, c2.fibRgFcLcb), f2 = Se(o2, d2), p2 = f2.join(``), m2 = c2.fibRgLw[r2(521)] > 0 ? c2.fibRgLw.ccpText : p2.length, h2 = kt(l2, c2.fibRgFcLcb), g2 = nt(l2, c2.fibRgFcLcb), _2 = Xe(o2, l2, c2, d2).filter((e3) => e3[r2(656)] < m2), v2 = Ze(o2, l2, c2, d2).filter((e3) => e3.cpStart < m2).map((e3) => n(n({}, e3), {}, {
      cpEnd: Math[r2(621)](e3.cpEnd, m2)
    })), y2 = v2.length ? v2.map((e3) => ({
      cpStart: e3.cpStart,
      cpEnd: e3.cpEnd,
      terminator: p2[e3.cpEnd - 1] || ``,
      styleId: e3[r2(478)],
      properties: e3.properties
    })) : we(p2.slice(0, m2)).map((e3) => n(n({}, e3), {}, {
      styleId: 0,
      properties: []
    })), b2 = mt(a2), S2 = [], C2 = /* @__PURE__ */ new Set(), w2 = It(u2, b2, S2, C2, /* @__PURE__ */ new Map(), t2), T2 = {
      index: 0
    }, E2 = y2.map((e3) => {
      let t3 = r2, i3 = Ce(o2, d2, f2, e3.cpStart, e3[t3(604)]), a3 = e3.terminator === I.paragraph || e3.terminator === I.cellMark ? e3.terminator : ``, s2 = a3 && i3.endsWith(a3) ? i3.slice(0, -1) : i3;
      return Bt(n(n({}, e3), {}, {
        terminator: a3
      }), s2, h2, g2, _2, w2, T2);
    }), O2 = Wt(E2), k2 = Array[r2(660)](b2.values()).filter((e3) => (e3 == null ? void 0 : e3[r2(705)]) && !C2.has(e3.entry.name)).map((e3) => e3.attachment);
    for (let e3 of k2) S2.push(e3);
    return k2.length && O2.push({
      type: `attachments`,
      id: x(`attachments`),
      items: k2
    }), {
      kind: r2(618),
      version: 1,
      warnings: i2,
      meta: {
        fib: {
          wIdent: c2.base[r2(473)],
          nFib: c2.base.nFib,
          fWhichTblStm: c2[r2(562)].fWhichTblStm,
          fComplex: c2[r2(562)].fComplex,
          fEncrypted: c2[r2(562)].fEncrypted,
          ccpText: c2.fibRgLw.ccpText
        },
        counts: {
          paragraphs: E2.length,
          blocks: O2.length,
          assets: S2[r2(671)],
          styles: h2.styles.size,
          fonts: g2.fonts.length
        }
      },
      fonts: g2.fonts,
      styles: Array.from(h2.styles[r2(460)]()).map((e3) => {
        var _a, _b, _c;
        return {
          istd: e3.istd,
          name: e3.name,
          type: (_a = e3.stdfBase) == null ? void 0 : _a.stk,
          basedOn: (_b = e3.stdfBase) == null ? void 0 : _b.istdBase,
          next: (_c = e3.stdfBase) == null ? void 0 : _c.istdNext
        };
      }),
      blocks: O2,
      assets: S2
    };
  }
  var X = {
    1: `#000000`,
    2: `#0000ff`,
    3: `#00ffff`,
    4: `#00ff00`,
    5: `#ff00ff`,
    6: `#ff0000`,
    7: `#ffff00`,
    8: s(463),
    9: `#000080`,
    10: `#008080`,
    11: `#008000`,
    12: `#800080`,
    13: `#800000`,
    14: `#808000`,
    15: `#808080`,
    16: `#c0c0c0`
  };
  function Z(e2) {
    let t2 = s;
    return Object.entries(e2).filter(([, e3]) => e3 != null && e3 !== ``)[t2(584)](([e3, t3]) => e3 + `:` + t3)[t2(574)](`;`);
  }
  function Q(e2, t2) {
    return e2 -= 447, Ie()[e2];
  }
  function $(e2) {
    let t2 = s;
    if (!e2) return null;
    let n2 = Math[t2(693)](1, Math.round((e2[t2(449)] ?? 8) / 8 * 1.3333)), r2 = e2[t2(721)], i2 = r2 === 6 ? `double` : r2 === 3 ? `dotted` : r2 === 2 ? `dashed` : t2(681), a2 = e2.color;
    return n2 + `px ` + i2 + ` ` + (a2 && X[a2] || `#666`);
  }
  function Kt(e2) {
    var _a, _b, _c, _d;
    let t2 = s, n2 = {
      "text-align": vt(e2.alignment)
    }, r2 = O(e2.spacingBefore), i2 = O(e2[t2(615)]), a2 = O(e2.leftIndent), o2 = O(e2.rightIndent), c2 = O(e2.firstLineIndent);
    if (r2 && (n2[t2(601)] = r2 + `px`), i2 && (n2[`margin-bottom`] = i2 + `px`), a2 && (n2[t2(619)] = a2 + `px`), o2 && (n2[`margin-right`] = o2 + `px`), c2 && (n2[`text-indent`] = c2 + `px`), e2.lineSpacing) {
      let t3 = Math.abs(e2.lineSpacing) / 240;
      t3 && (n2[`line-height`] = String(Math.max(1, t3)));
    }
    e2.keepLines && (n2[t2(457)] = `avoid`), e2.keepNext && (n2[`break-after`] = `avoid`), e2[t2(536)] && (n2[`break-before`] = `page`), e2.rtlPara && (n2.direction = `rtl`);
    let l2 = $((_a = e2.borders) == null ? void 0 : _a.top), u2 = $((_b = e2[t2(539)]) == null ? void 0 : _b[t2(509)]), d2 = $((_c = e2.borders) == null ? void 0 : _c.bottom), f2 = $((_d = e2.borders) == null ? void 0 : _d.left);
    return l2 && (n2[`border-top`] = l2), u2 && (n2[`border-right`] = u2), d2 && (n2[t2(665)] = d2), f2 && (n2[`border-left`] = f2), n2;
  }
  function qt(e2) {
    let t2 = s, n2 = yt(e2);
    if (!e2 || n2 === t2(454)) return {};
    let r2 = {
      "text-decoration-line": `underline`
    };
    return n2 === `double` || n2 === t2(483) ? r2[`text-decoration-style`] = `double` : n2.includes(t2(538)) || n2 === `dotted-heavy` ? r2[`text-decoration-style`] = `dotted` : n2[t2(561)](`dash`) ? r2[`text-decoration-style`] = `dashed` : n2.includes(t2(624)) || n2.includes(`wavy`) ? r2[`text-decoration-style`] = `wavy` : r2[`text-decoration-style`] = `solid`, r2;
  }
  function Jt(e2) {
    var _a;
    let t2 = s, n2 = {};
    (e2.bold || e2[t2(579)]) && (n2[`font-weight`] = `700`), (e2[t2(489)] || e2.italicBi) && (n2[`font-style`] = `italic`), (e2.strike || e2[t2(726)]) && (n2[`text-decoration-line`] = (n2[`text-decoration-line`] ? n2[`text-decoration-line`] + ` ` : ``) + `line-through`), Object.assign(n2, qt(e2.underline)), e2.fontSizeHalfPoints && (n2[`font-size`] = e2.fontSizeHalfPoints / 2 + `pt`), e2.fontFamily && (n2[t2(527)] = `'` + String(e2.fontFamily).replace(/'/g, `\\'`) + `', sans-serif`), e2.colorIndex && X[e2[t2(520)]] && (n2.color = X[e2.colorIndex]);
    let r2 = typeof e2[t2(594)] == `number` ? e2.highlight : (_a = e2.highlight) == null ? void 0 : _a.index;
    return r2 && Oe[r2] && (n2[`background-color`] = Oe[r2]), e2.smallCaps && (n2[t2(501)] = `small-caps`), e2[t2(688)] && (n2[`text-transform`] = `uppercase`), e2.scale && e2.scale !== 100 && (n2.display = `inline-block`, n2.transform = `scaleX(` + e2[t2(474)] / 100 + `)`, n2[`transform-origin`] = `left center`), e2.positionHalfPoints > 0 && (n2[`vertical-align`] = `super`), e2.positionHalfPoints < 0 && (n2[`vertical-align`] = `sub`), e2[t2(596)] && (n2[`text-shadow`] = `0 0 0.02em currentColor`), (e2.shadow || e2.emboss || e2.imprint) && (n2[t2(470)] = n2[`text-shadow`] ? n2[`text-shadow`] + `, 0.06em 0.06em 0.08em rgba(0,0,0,.25)` : `0.06em 0.06em 0.08em rgba(0,0,0,.25)`), e2.rtl && (n2.direction = t2(471)), n2;
  }
  function Yt(e2) {
    let t2 = s, n2 = b(e2.text), r2 = Jt(e2.style);
    r2[`white-space`] = `break-spaces`;
    let i2 = Z(r2), a2 = t2(728) + (i2 ? t2(713) + i2 + `"` : ``) + `>` + n2 + `</span>`;
    return e2.href ? `<a class="msdoc-link" href="` + b(e2.href) + t2(552) + a2 + `</a>` : a2;
  }
  function Xt(e2) {
    let t2 = s, n2 = Jt(e2.style);
    n2[`max-width`] = `100%`, n2[t2(486)] = `auto`;
    let r2 = `<img class="msdoc-image" src="` + b(e2.asset.dataUrl) + `" alt="" style="` + Z(n2) + `">`;
    return e2.href ? t2(668) + b(e2.href) + `" target="_blank" rel="noreferrer noopener">` + r2 + `</a>` : r2;
  }
  function Zt(e2) {
    let t2 = s, n2 = b(e2.asset.name || `embedded-file`), r2 = `<a class="msdoc-attachment" href="` + b(e2.asset.dataUrl) + `" download="` + n2 + `">\u{1F4CE} ` + n2 + t2(504);
    return e2.href ? `<a class="msdoc-link" href="` + b(e2.href) + `" target="_blank" rel="noreferrer noopener">` + r2 + `</a>` : r2;
  }
  function Qt(e2) {
    let t2 = s;
    return e2[t2(584)]((e3) => e3.type === `text` ? Yt(e3) : e3[t2(453)] === t2(689) ? Xt(e3) : e3.type === `attachment` ? Zt(e3) : e3.type === `lineBreak` ? `<br>` : e3.type === `pageBreak` ? t2(628) : ``).join(``);
  }
  function $t(e2, t2 = {}) {
    let n2 = s, r2 = t2.inline ? `div` : `p`, i2 = Z(Kt(e2.paraState)), a2 = Qt(e2.inlines || []) || `<br>`, o2 = [
      n2(633)
    ];
    return e2.styleName && o2.push(`msdoc-style-` + T(e2.styleName)), `<` + r2 + ` class="` + o2.join(` `) + `"` + (i2 ? ` style="` + i2 + `"` : ``) + `>` + a2 + `</` + r2 + `>`;
  }
  function en(e2) {
    var _a, _b, _c, _d, _e2;
    let t2 = s;
    var n2, r2, i2, a2, o2, c2, l2, u2;
    let d2 = {}, f2 = O(((_a = e2.meta) == null ? void 0 : _a[t2(622)]) != null && ((_b = e2.meta) == null ? void 0 : _b.leftBoundary) != null ? e2.meta.rightBoundary - e2.meta.leftBoundary : (_c = e2.meta) == null ? void 0 : _c[t2(700)]);
    f2 && (d2.width = f2 + `px`), (n2 = e2[t2(643)]) != null && n2.noWrap && (d2[`white-space`] = `nowrap`), (r2 = e2.meta) != null && r2.fitText && (d2[t2(678)] = `justify`), ((_d = e2.meta) == null ? void 0 : _d[t2(711)]) != null && (d2[t2(623)] = bt(e2.meta[t2(711)]));
    let p2 = $((i2 = e2.meta) == null || (i2 = i2.borders) == null ? void 0 : i2.all), m2 = $((a2 = e2[t2(643)]) == null || (a2 = a2.borders) == null ? void 0 : a2.top) || p2, h2 = $((o2 = e2.meta) == null || (o2 = o2[t2(539)]) == null ? void 0 : o2.right) || p2, g2 = $((c2 = e2[t2(643)]) == null || (c2 = c2.borders) == null ? void 0 : c2.bottom) || p2, _2 = $((l2 = e2.meta) == null || (l2 = l2[t2(539)]) == null ? void 0 : l2.left) || p2;
    m2 && (d2[`border-top`] = m2), h2 && (d2[`border-right`] = h2), g2 && (d2[`border-bottom`] = g2), _2 && (d2[`border-left`] = _2);
    let v2 = typeof ((_e2 = e2.meta) == null ? void 0 : _e2.shading) == `object` && (u2 = e2.meta) != null && u2.shading && t2(676) in e2.meta.shading ? e2.meta.shading[t2(676)] : void 0;
    return v2 && X[v2] && (d2[`background-color`] = X[v2]), d2;
  }
  function tn(e2) {
    var _a;
    let t2 = s;
    var n2;
    let r2 = {}, i2 = O(e2.gridWidthTwips || ((n2 = e2.state) == null || (n2 = n2.tableWidth) == null ? void 0 : n2.wWidth));
    i2 ? r2.width = i2 + `px` : r2.width = `100%`;
    let a2 = O((_a = e2.state) == null ? void 0 : _a[t2(515)]);
    return a2 && (r2[t2(619)] = a2 + `px`), r2[`border-collapse`] = `collapse`, r2[`table-layout`] = `fixed`, r2;
  }
  function nn(e2) {
    let t2 = s, n2 = e2.rows.map((e3) => {
      let t3 = Q;
      var n3;
      let r2 = (n3 = e3.state) != null && n3[t3(637)] ? O(Math[t3(495)](e3.state.rowHeight)) : null;
      return t3(575) + (r2 ? ` style="height:` + r2 + t3(549) : ``) + `>` + e3[t3(612)].filter((e4) => !e4.hidden).map((e4) => {
        let n4 = t3, r3 = [];
        (e4.colspan ?? 1) > 1 && r3[n4(698)](n4(514) + e4[n4(459)] + `"`), (e4[n4(641)] ?? 1) > 1 && r3.push(` rowspan="` + e4.rowspan + `"`);
        let i2 = Z(en(e4)), a2 = e4.paragraphs.map((e5) => $t(e5, {
          inline: true
        })).join(``);
        return n4(487) + r3.join(``) + (i2 ? n4(713) + i2 + `"` : ``) + `>` + (a2 || `<div class="msdoc-paragraph"><br></div>`) + n4(447);
      }).join(``) + `</tr>`;
    }).join(``);
    return t2(645) + e2.depth + `" style="` + Z(tn(e2)) + `"><tbody>` + n2 + `</tbody></table>`;
  }
  function rn(e2) {
    return s(640) + e2.items.map((e3) => `<li><a class="msdoc-attachment" href="` + b(e3.dataUrl) + `" download="` + b(e3.name || `embedded-file`) + `">\u{1F4CE} ` + b(e3.name || `embedded-file`) + `</a></li>`).join(``) + `</ul></section>`;
  }
  function an() {
    return `
.msdoc-root{box-sizing:border-box;max-width:100%;padding:24px;background:#fff;color:#111;font:14px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
.msdoc-root *{box-sizing:border-box}
.msdoc-paragraph{margin:0 0 8px;white-space:normal;word-break:break-word;overflow-wrap:anywhere}
.msdoc-paragraph:last-child{margin-bottom:0}
.msdoc-table{margin:12px 0;border-collapse:collapse;border-spacing:0;max-width:100%}
.msdoc-cell{padding:6px 8px;vertical-align:top;word-break:break-word;overflow-wrap:anywhere}
.msdoc-link{color:#1a73e8;text-decoration:none}
.msdoc-link:hover{text-decoration:underline}
.msdoc-image{display:inline-block;vertical-align:middle}
.msdoc-attachment{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border:1px solid #d0d7de;border-radius:6px;background:#f6f8fa;color:#0969da;text-decoration:none}
.msdoc-attachments{margin-top:20px;padding-top:12px;border-top:1px solid #e5e7eb}
.msdoc-attachments-title{font-weight:600;margin-bottom:8px}
.msdoc-page-break{display:block;height:0;border-top:1px dashed #cbd5e1;margin:16px 0}
`;
  }
  function on(e2, t2 = {}) {
    let n2 = s, r2 = t2.css ?? an();
    return {
      html: e2.blocks.map((e3) => e3.type === `paragraph` ? $t(e3) : e3.type === `table` ? nn(e3) : e3[n2(453)] === `attachments` ? rn(e3) : ``).join(``),
      css: r2,
      warnings: e2.warnings || [],
      meta: e2.meta,
      assets: e2.assets || [],
      parsed: e2
    };
  }
  i();
  function sn(e2) {
    return cn[s(595)](this, arguments);
  }
  function cn() {
    return cn = a(function* (e2) {
      let t2 = Q;
      if (e2 instanceof ArrayBuffer) return e2;
      if (ArrayBuffer.isView(e2)) {
        let t3 = new Uint8Array(e2.byteLength);
        return t3.set(new Uint8Array(e2.buffer, e2.byteOffset, e2.byteLength)), t3.buffer;
      }
      if (typeof Blob < `u` && e2 instanceof Blob) return yield e2.arrayBuffer();
      if (typeof e2 == t2(614)) {
        let t3 = yield fetch(e2);
        if (!t3.ok) throw Error(`Failed to fetch document: ` + t3.status);
        return yield t3.arrayBuffer();
      }
      throw TypeError(t2(597));
    }), cn.apply(this, arguments);
  }
  function ln(e2) {
    return un.apply(this, arguments);
  }
  function un() {
    return un = a(function* (e2, t2 = {}) {
      let n2 = Q, r2 = yield sn(e2);
      return t2.workerClient ? t2.workerClient.parseToHtml(r2, {
        parseOptions: t2[n2(706)] || {},
        renderOptions: t2[n2(523)] || {}
      }) : on(Gt(r2, t2.parseOptions || {}), t2.renderOptions || {});
    }), un.apply(this, arguments);
  }
  i();
  var dn = `<span class="msdoc-page-break"></span>`, fn = `<p class="msdoc-paragraph"><br></p>`, pn = `
.msdoc-stage{
  box-sizing:border-box;
  min-height:100%;
  padding:32px 24px 48px;
  background:#ececec;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:24px;
}
.msdoc-page{
  width:min(100%,794px);
  box-sizing:border-box;
}
.msdoc-page > .msdoc-root{
  box-sizing:border-box;
  width:100%;
  max-width:none;
  min-height:1123px;
  padding:clamp(24px,7%,96px) clamp(20px,6%,88px);
  background:#fff;
  border:1px solid #d9d9d9;
  box-shadow:0 1px 3px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.12);
  overflow-wrap:anywhere;
}
.msdoc-page .msdoc-page-break{
  display:none;
}
@media (max-width: 860px){
  .msdoc-stage{
    padding:16px 12px 24px;
    gap:16px;
  }
  .msdoc-page{
    width:100%;
  }
  .msdoc-page > .msdoc-root{
    min-height:auto;
    padding:24px 20px;
    box-shadow:none;
  }
}
`;
  function mn(e2) {
    return e2.replace(/<(p|table|section)([^>]*?)style="([^"]*?\bbreak-before\s*:\s*page;?[^"]*?)"([^>]*)>/gi, (e3) => `` + dn + e3);
  }
  function hn(e2) {
    return `<div class="msdoc-stage">` + mn(e2).split(dn).map((e3) => `<section class="msdoc-page"><div class="msdoc-root">` + (e3 || fn) + `</div></section>`).join(``) + `</div>`;
  }
  gn = function(e2, t2) {
    return _n[s(595)](this, arguments);
  };
  function _n() {
    return _n = a(function* (e2, t2) {
      let n2 = Q, r2 = yield ln(e2, {
        renderOptions: {
          css: an() + `
` + pn
        }
      });
      return t2.innerHTML = `<style data-msdoc>` + r2.css + n2(588) + hn(r2.html), {
        $el: t2,
        unmount() {
          t2.innerHTML = ``;
        }
      };
    }), _n.apply(this, arguments);
  }
});
export {
  __tla,
  gn as renderDoc,
  g as renderDocx
};
