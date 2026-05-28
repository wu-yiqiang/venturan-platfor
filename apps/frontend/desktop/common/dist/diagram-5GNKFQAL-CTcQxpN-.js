import { m as e, p as t } from "./index-D-g3WoLo.js";
import { _ as n } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as r, t as i } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as a, E as o, W as s, X as c, Z as l, j as u, k as d, q as f, s as p, z as m } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as g } from "./chunk-WU5MYG2G-BnIisATw.js";
import { t as _ } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
import { t as v } from "./chunk-QZHKN3VN-CETewxXf.js";
function y() {
  let e2 = `953091kVKOfi,26826pkXaNT,rowIndent,156988XfTpGN,line,paddingX,stroke-width,stack,522snHTxJ,getRoot,append,records,6168DXeCdV,class,attr,length,viewBox,forEach,6853LaTRok,lineThickness,9fftNQg,middle,7772210VBLIqD,debug,indent,paddingY,black,41545AwnhyH,BBox,
    .treeView-node-label {
        font-size: ,4239400FJfpNt`.split(`,`);
  return y = function() {
    return e2;
  }, y();
}
var b = x;
(function(e2, t2) {
  let n2 = x, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(353)) / 1 + -parseInt(n2(351)) / 2 * (-parseInt(n2(339)) / 3) + parseInt(n2(349)) / 4 + parseInt(n2(346)) / 5 * (-parseInt(n2(358)) / 6) + parseInt(n2(337)) / 7 * (parseInt(n2(331)) / 8) + parseInt(n2(350)) / 9 + -parseInt(n2(341)) / 10 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(y, 617681);
function x(e2, t2) {
  return e2 -= 331, y()[e2];
}
e();
var S = new v(() => ({ cnt: 1, stack: [{ id: 0, level: -1, name: `/`, children: [] }] })), C = i(() => {
  S.reset(), o();
}, `clear`), w = i(() => S.records.stack[0], `getRoot`), T = i(() => S.records.cnt, `getCount`), E = p.treeView, D = { clear: C, addNode: i((e2, t2) => {
  let n2 = x;
  for (; e2 <= S.records.stack[S.records[n2(357)][n2(334)] - 1].level; ) S.records.stack.pop();
  let r2 = { id: S.records.cnt++, level: e2, name: t2, children: [] };
  S[n2(361)].stack[S.records[n2(357)].length - 1].children.push(r2), S[n2(361)].stack.push(r2);
}, `addNode`), getRoot: w, getCount: T, getConfig: i(() => h(E, m().treeView), `getConfig`), getAccTitle: c, getAccDescription: a, getDiagramTitle: u, setAccDescription: d, setAccTitle: s, setDiagramTitle: l }, O = i((e2) => {
  let t2 = x;
  _(e2, D), e2.nodes.map((e3) => D.addNode(e3[t2(343)] ? parseInt(e3.indent) : 0, e3.name));
}, `populate`), k = { parse: i((function() {
  var e2 = t(function* (e3) {
    let t2 = x, i2 = yield n(`treeView`, e3);
    r[t2(342)](i2), O(i2);
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), `parse`) }, A = i((e2, t2, n2, r2, i2) => {
  let a2 = x, o2 = r2[a2(360)](`text`).text(n2.name)[a2(333)](`dominant-baseline`, a2(340)).attr(`class`, `treeView-node-label`), { height: s2, width: c2 } = o2.node().getBBox(), l2 = s2 + i2[a2(344)] * 2, u2 = c2 + i2.paddingX * 2;
  o2.attr(`x`, e2 + i2.paddingX), o2.attr(`y`, t2 + l2 / 2), n2.BBox = { x: e2, y: t2, width: u2, height: l2 };
}, `positionLabel`), j = i((e2, t2, n2, r2, i2, a2) => e2.append(b(354)).attr(`x1`, t2).attr(`y1`, n2).attr(`x2`, r2).attr(`y2`, i2).attr(b(356), a2).attr(`class`, `treeView-node-line`), `positionLine`), M = i((e2, t2, n2) => {
  let r2 = 0, a2 = 0, o2 = i((e3, t3, n3, i2) => {
    let o3 = x, s3 = i2 * (n3[o3(352)] + n3.paddingX);
    A(s3, r2, t3, e3, n3);
    let { height: c2, width: l2 } = t3.BBox;
    j(e3, s3 - n3.rowIndent, r2 + c2 / 2, s3, r2 + c2 / 2, n3[o3(338)]), a2 = Math.max(a2, s3 + l2), r2 += c2;
  }, `drawNode`), s2 = i((t3, r3 = 0) => {
    let i2 = x;
    o2(e2, t3, n2, r3), t3.children[i2(336)]((e3) => {
      s2(e3, r3 + 1);
    });
    let { x: a3, y: c2, height: l2 } = t3.BBox;
    if (t3.children.length) {
      let { y: r4, height: o3 } = t3.children[t3.children[i2(334)] - 1][i2(347)];
      j(e2, a3 + n2.paddingX, c2 + l2, a3 + n2[i2(355)], r4 + o3 / 2 + n2[i2(338)] / 2, n2.lineThickness);
    }
  }, `processNode`);
  return s2(t2), { totalHeight: r2, totalWidth: a2 };
}, `drawTree`), N = { draw: i((e2, t2, n2, i2) => {
  let a2 = b;
  r.debug(`Rendering treeView diagram
` + e2);
  let o2 = i2.db, s2 = o2[a2(359)](), c2 = o2.getConfig(), l2 = g(t2), u2 = l2.append(`g`);
  u2.attr(a2(332), `tree-view`);
  let { totalHeight: d2, totalWidth: p2 } = M(u2, s2, c2);
  l2.attr(a2(335), `-` + c2.lineThickness / 2 + ` 0 ` + p2 + ` ` + d2), f(l2, d2, p2, c2.useMaxWidth);
}, `draw`) }, P = { labelFontSize: `16px`, labelColor: `black`, lineColor: b(345) }, F = { db: D, renderer: N, parser: k, styles: i(({ treeView: e2 }) => {
  let t2 = b, { labelFontSize: n2, labelColor: r2, lineColor: i2 } = h(P, e2);
  return t2(348) + n2 + `;
        fill: ` + r2 + `;
    }
    .treeView-node-line {
        stroke: ` + i2 + `;
    }
    `;
}, `styles`) };
export {
  F as diagram
};
