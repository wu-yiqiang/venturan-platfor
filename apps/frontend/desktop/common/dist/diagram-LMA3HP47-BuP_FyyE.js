import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { _ as i } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as a, t as o } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as s, E as c, W as l, X as u, Z as d, j as f, k as p, q as m, s as h, z as g } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h as _ } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as v } from "./chunk-WU5MYG2G-BnIisATw.js";
import { t as y } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
var b = S;
(function(e2, t2) {
  let n2 = S, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(239)) / 1 + parseInt(n2(248)) / 2 * (-parseInt(n2(250)) / 3) + parseInt(n2(221)) / 4 + parseInt(n2(220)) / 5 * (parseInt(n2(209)) / 6) + -parseInt(n2(252)) / 7 + -parseInt(n2(229)) / 8 * (parseInt(n2(226)) / 9) + parseInt(n2(243)) / 10 * (parseInt(n2(223)) / 11) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(x, 545578);
function x() {
  let e2 = `endByteColor,titleColor,setDiagramTitle,setAccDescription,end should have been set during first phase,attr,middle,packetTitle,append,351446hVuVEL,;
	}
	.packetLabel {
		fill: ,text,text-anchor,22211660ZVdseV,parse,pushWord, is invalid. Cannot have a zero bit field.,getConfig,14920TNcrNA,viewBox,417OsoSll,entries,4490542NDkvkj,30PeZCNK,useMaxWidth,populate,packet,length,setAccTitle,end, is greater than block end ,Packet block ,showBits,labelFontSize,105385mVrgON,1543612uHTcQO,push,11YKMIxf,start should have been set during first phase,start,616428zMCbKr,byteFontSize,;
	}
	.packetBlock {
		stroke: ,16uUVxET`.split(`,`);
  return x = function() {
    return e2;
  }, x();
}
function S(e2, t2) {
  return e2 -= 209, x()[e2];
}
t(), n();
var C, w = h[b(212)], T = (C = class {
  constructor() {
    let e2 = b;
    this.packet = [], this[e2(214)] = l, this.getAccTitle = u, this[e2(232)] = d, this.getDiagramTitle = f, this.getAccDescription = s, this[e2(233)] = p;
  }
  getConfig() {
    let t2 = b, n2 = _(e(e({}, w), g().packet));
    return n2[t2(218)] && (n2.paddingY += 10), n2;
  }
  getPacket() {
    return this.packet;
  }
  pushWord(e2) {
    e2.length > 0 && this.packet.push(e2);
  }
  clear() {
    c(), this.packet = [];
  }
}, o(C, `PacketDB`), C), E = 1e4, D = o((e2, t2) => {
  let n2 = b;
  y(e2, t2);
  let r2 = -1, i2 = [], o2 = 1, { bitsPerRow: s2 } = t2[n2(247)]();
  for (let { start: c2, end: l2, bits: u2, label: d2 } of e2.blocks) {
    if (c2 !== void 0 && l2 !== void 0 && l2 < c2) throw Error(`Packet block ` + c2 + ` - ` + l2 + ` is invalid. End must be greater than start.`);
    if (c2 ?? (c2 = r2 + 1), c2 !== r2 + 1) throw Error(`Packet block ` + c2 + ` - ` + (l2 ?? c2) + ` is not contiguous. It should start from ` + (r2 + 1) + `.`);
    if (u2 === 0) throw Error(n2(217) + c2 + n2(246));
    for (l2 ?? (l2 = c2 + (u2 ?? 1) - 1), u2 ?? (u2 = l2 - c2 + 1), r2 = l2, a.debug(`Packet block ` + c2 + ` - ` + r2 + ` with label ` + d2); i2[n2(213)] <= s2 + 1 && t2.getPacket().length < E; ) {
      let [e3, r3] = O({ start: c2, end: l2, bits: u2, label: d2 }, o2, s2);
      if (i2[n2(222)](e3), e3.end + 1 === o2 * s2 && (t2[n2(245)](i2), i2 = [], o2++), !r3) break;
      ({ start: c2, end: l2, bits: u2, label: d2 } = r3);
    }
  }
  t2.pushWord(i2);
}, b(211)), O = o((e2, t2, n2) => {
  let r2 = b;
  if (e2.start === void 0) throw Error(r2(224));
  if (e2.end === void 0) throw Error(r2(234));
  if (e2.start > e2.end) throw Error(`Block start ` + e2.start + r2(216) + e2.end + `.`);
  if (e2[r2(215)] + 1 <= t2 * n2) return [e2, void 0];
  let i2 = t2 * n2 - 1, a2 = t2 * n2;
  return [{ start: e2.start, end: i2, label: e2.label, bits: i2 - e2[r2(225)] }, { start: a2, end: e2[r2(215)], label: e2.label, bits: e2.end - a2 }];
}, `getNextFittingBlock`), k = { parser: { yy: void 0 }, parse: o((function() {
  var e2 = r(function* (e3) {
    var _a;
    let t2 = yield i(`packet`, e3), n2 = (_a = k.parser) == null ? void 0 : _a.yy;
    if (!(n2 instanceof T)) throw Error(`parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
    a.debug(t2), D(t2, n2);
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), b(244)) }, A = o((e2, t2, n2, r2) => {
  let i2 = b, a2 = r2.db, o2 = a2[i2(247)](), { rowHeight: s2, paddingY: c2, bitWidth: l2, bitsPerRow: u2 } = o2, d2 = a2.getPacket(), f2 = a2.getDiagramTitle(), p2 = s2 + c2, h2 = p2 * (d2.length + 1) - (f2 ? 0 : s2), g2 = l2 * u2 + 2, _2 = v(t2);
  _2.attr(i2(249), `0 0 ` + g2 + ` ` + h2), m(_2, h2, g2, o2[i2(210)]);
  for (let [e3, t3] of d2[i2(251)]()) j(_2, t3, e3, o2);
  _2.append(`text`).text(f2).attr(`x`, g2 / 2).attr(`y`, h2 - p2 / 2).attr(`dominant-baseline`, `middle`).attr(`text-anchor`, i2(236)).attr(`class`, i2(237));
}, `draw`), j = o((e2, t2, n2, { rowHeight: r2, paddingX: i2, paddingY: a2, bitWidth: o2, bitsPerRow: s2, showBits: c2 }) => {
  let l2 = b, u2 = e2[l2(238)](`g`), d2 = n2 * (r2 + a2) + a2;
  for (let e3 of t2) {
    let t3 = e3.start % s2 * o2 + 1, n3 = (e3.end - e3.start + 1) * o2 - i2;
    if (u2[l2(238)](`rect`)[l2(235)](`x`, t3).attr(`y`, d2)[l2(235)](`width`, n3).attr(`height`, r2)[l2(235)](`class`, `packetBlock`), u2.append(l2(241)).attr(`x`, t3 + n3 / 2).attr(`y`, d2 + r2 / 2).attr(`class`, `packetLabel`).attr(`dominant-baseline`, l2(236)).attr(`text-anchor`, l2(236))[l2(241)](e3.label), !c2) continue;
    let a3 = e3.end === e3.start, f2 = d2 - 2;
    u2[l2(238)](l2(241)).attr(`x`, t3 + (a3 ? n3 / 2 : 0)).attr(`y`, f2)[l2(235)](`class`, `packetByte start`).attr(`dominant-baseline`, `auto`).attr(`text-anchor`, a3 ? `middle` : `start`).text(e3.start), a3 || u2.append(l2(241)).attr(`x`, t3 + n3).attr(`y`, f2).attr(`class`, `packetByte end`).attr(`dominant-baseline`, `auto`).attr(l2(242), l2(215)).text(e3.end);
  }
}, `drawWord`), M = { draw: A }, N = { byteFontSize: `10px`, startByteColor: `black`, endByteColor: `black`, labelColor: `black`, labelFontSize: `12px`, titleColor: `black`, titleFontSize: `14px`, blockStrokeColor: `black`, blockStrokeWidth: `1`, blockFillColor: `#efefef` }, P = { parser: k, get db() {
  return new T();
}, renderer: M, styles: o(({ packet: e2 } = {}) => {
  let t2 = b, n2 = _(N, e2);
  return `
	.packetByte {
		font-size: ` + n2[t2(227)] + `;
	}
	.packetByte.start {
		fill: ` + n2.startByteColor + `;
	}
	.packetByte.end {
		fill: ` + n2[t2(230)] + t2(240) + n2.labelColor + `;
		font-size: ` + n2[t2(219)] + `;
	}
	.packetTitle {
		fill: ` + n2[t2(231)] + `;
		font-size: ` + n2.titleFontSize + t2(228) + n2.blockStrokeColor + `;
		stroke-width: ` + n2.blockStrokeWidth + `;
		fill: ` + n2.blockFillColor + `;
	}
	`;
}, `styles`) };
export {
  P as diagram
};
