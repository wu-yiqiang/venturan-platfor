import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { n as i, t as a } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { V as o } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import "./chunk-5ZQYHXKU-BklVe06k.js";
import "./chunk-O5CBEL6O-CERCp6yT.js";
import "./chunk-BSJP7CBP-DNSq_z0Y.js";
import { t as s } from "./chunk-L5ZTLDWV-CfFez56L.js";
import { N as c, nt as l } from "./graphlib-DTFeuqXt.js";
import "./chunk-NZK2D7GU-Bb3JacnP.js";
import { a as u, i as d, l as f, n as p, o as m, s as h, u as g } from "./chunk-3OPIFGDE-tadvN-H3.js";
import { a as _, i as v, n as y, r as b, t as x } from "./chunk-KSCS5N6A-yNMqidgz.js";
import { n as S, r as C, t as w } from "./dagre-CDN7GhC3.js";
var T = E;
(function(e2, t2) {
  let n2 = E, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(371)) / 1 * (parseInt(n2(335)) / 2) + -parseInt(n2(396)) / 3 + parseInt(n2(339)) / 4 + parseInt(n2(366)) / 5 * (parseInt(n2(399)) / 6) + -parseInt(n2(394)) / 7 + parseInt(n2(354)) / 8 + -parseInt(n2(349)) / 9 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Y, 673240);
function E(e2, t2) {
  return e2 -= 332, Y()[e2];
}
var D = 4;
function O(e2) {
  return S(e2, D);
}
function k(e2) {
  let t2 = E;
  var n2 = { options: { directed: e2.isDirected(), multigraph: e2.isMultigraph(), compound: e2.isCompound() }, nodes: A(e2), edges: j(e2) };
  return c(e2.graph()) || (n2[t2(398)] = O(e2.graph())), n2;
}
function A(e2) {
  return w(e2.nodes(), function(t2) {
    let n2 = E;
    var r2 = e2.node(t2), i2 = e2.parent(t2), a2 = { v: t2 };
    return c(r2) || (a2.value = r2), c(i2) || (a2[n2(377)] = i2), a2;
  });
}
function j(e2) {
  return w(e2.edges(), function(t2) {
    let n2 = E;
    var r2 = e2.edge(t2), i2 = { v: t2.v, w: t2.w };
    return c(t2[n2(392)]) || (i2[n2(392)] = t2.name), c(r2) || (i2.value = r2), i2;
  });
}
t(), n();
var M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), F = a(() => {
  let e2 = E;
  N.clear(), P.clear(), M[e2(337)]();
}, `clear`), I = a((e2, t2) => {
  let n2 = E, r2 = N.get(t2) || [];
  return i.trace(`In isDescendant`, t2, ` `, e2, ` = `, r2.includes(e2)), r2[n2(381)](e2);
}, `isDescendant`), L = a((e2, t2) => {
  let n2 = E, r2 = N[n2(361)](t2) || [];
  return i.info(`Descendants of `, t2, ` is `, r2), i.info(`Edge is `, e2), e2.v === t2 || e2.w === t2 ? false : r2 ? r2.includes(e2.v) || I(e2.v, t2) || I(e2.w, t2) || r2[n2(381)](e2.w) : (i.debug(`Tilt, `, t2, `,not in descendants`), false);
}, `edgeInCluster`), R = a((e2, t2, n2, r2) => {
  let a2 = E;
  i.warn(`Copying children of `, e2, `root`, r2, `data`, t2.node(e2), r2);
  let o2 = t2.children(e2) || [];
  e2 !== r2 && o2.push(e2), i.warn(`Copying (nodes) clusterId`, e2, a2(352), o2), o2.forEach((o3) => {
    let s2 = a2;
    if (t2.children(o3).length > 0) R(o3, t2, n2, r2);
    else {
      let a3 = t2.node(o3);
      i.info(`cp `, o3, ` to `, r2, ` with parent `, e2), n2.setNode(o3, a3), r2 !== t2.parent(o3) && (i.warn(`Setting parent`, o3, t2.parent(o3)), n2.setParent(o3, t2.parent(o3))), e2 !== r2 && o3 !== e2 ? (i.debug(s2(362), o3, e2), n2.setParent(o3, e2)) : (i.info(`In copy `, e2, `root`, r2, s2(357), t2.node(e2), r2), i.debug(`Not Setting parent for node=`, o3, `cluster!==rootId`, e2 !== r2, `node!==clusterId`, o3 !== e2));
      let c2 = t2.edges(o3);
      i.debug(`Copying Edges`, c2), c2.forEach((a4) => {
        let o4 = s2;
        i.info(`Edge`, a4);
        let c3 = t2.edge(a4.v, a4.w, a4[o4(392)]);
        i.info(o4(333), c3, r2);
        try {
          L(a4, r2) ? (i.info(`Copying as `, a4.v, a4.w, c3, a4.name), n2.setEdge(a4.v, a4.w, c3, a4.name), i[o4(358)](`newGraph edges `, n2.edges(), n2.edge(n2.edges()[0]))) : i.info(`Skipping copy of edge `, a4.v, `-->`, a4.w, ` rootId: `, r2, ` clusterId:`, e2);
        } catch (e3) {
          i.error(e3);
        }
      });
    }
    i.debug(`Removing node`, o3), t2[s2(391)](o3);
  });
}, `copy`), z = a((e2, t2) => {
  let n2 = t2.children(e2), r2 = [...n2];
  for (let i2 of n2) P.set(i2, e2), r2 = [...r2, ...z(i2, t2)];
  return r2;
}, `extractDescendants`), B = a((e2, t2, n2) => {
  let r2 = E, i2 = e2.edges().filter((e3) => e3.v === t2 || e3.w === t2), a2 = e2.edges()[r2(397)]((e3) => e3.v === n2 || e3.w === n2), o2 = i2.map((e3) => ({ v: e3.v === t2 ? n2 : e3.v, w: e3.w === t2 ? t2 : e3.w })), s2 = a2.map((e3) => ({ v: e3.v, w: e3.w }));
  return o2.filter((e3) => s2.some((t3) => e3.v === t3.v && e3.w === t3.w));
}, `findCommonEdges`), V = a((e2, t2, n2) => {
  let r2 = E, a2 = t2.children(e2);
  if (i.trace(`Searching children of id `, e2, a2), a2.length < 1) return e2;
  let o2;
  for (let e3 of a2) {
    let i2 = V(e3, t2, n2), a3 = B(t2, n2, i2);
    if (i2) if (a3[r2(351)] > 0) o2 = i2;
    else return i2;
  }
  return o2;
}, `findNonClusterChild`), H = a((e2) => !M[T(364)](e2) || !M.get(e2).externalConnections ? e2 : M.has(e2) ? M.get(e2).id : e2, `getAnchorId`), U = a((e2, t2) => {
  let n2 = T;
  if (!e2 || t2 > 10) {
    i.debug(`Opting out, no graph `);
    return;
  } else i.debug(`Opting in, graph `);
  e2.nodes().forEach(function(t3) {
    let n3 = E;
    e2.children(t3)[n3(351)] > 0 && (i[n3(365)](`Cluster identified`, t3, ` Replacement id in edges: `, V(t3, e2, t3)), N[n3(341)](t3, z(t3, e2)), M[n3(341)](t3, { id: V(t3, e2, t3), clusterData: e2.node(t3) }));
  }), e2.nodes().forEach(function(t3) {
    let n3 = e2.children(t3), r2 = e2.edges();
    n3.length > 0 ? (i.debug(`Cluster identified`, t3, N), r2.forEach((e3) => {
      let n4 = E;
      I(e3.v, t3) ^ I(e3.w, t3) && (i.warn(`Edge: `, e3, ` leaves cluster `, t3), i.warn(`Descendants of XXX `, t3, `: `, N.get(t3)), M.get(t3)[n4(382)] = true);
    })) : i.debug(`Not a cluster `, t3, N);
  });
  for (let t3 of M.keys()) {
    let r2 = M[n2(361)](t3).id, i2 = e2[n2(377)](r2);
    i2 !== t3 && M.has(i2) && !M.get(i2).externalConnections && (M[n2(361)](t3).id = i2);
  }
  e2.edges().forEach(function(t3) {
    let r2 = n2, a2 = e2.edge(t3);
    i.warn(`Edge ` + t3.v + ` -> ` + t3.w + `: ` + JSON.stringify(t3)), i.warn(`Edge ` + t3.v + ` -> ` + t3.w + `: ` + JSON.stringify(e2.edge(t3)));
    let o2 = t3.v, s2 = t3.w;
    if (i.warn(`Fix XXX`, M, `ids:`, t3.v, t3.w, r2(387), M.get(t3.v), ` --- `, M.get(t3.w)), M.get(t3.v) || M.get(t3.w)) {
      if (i[r2(365)](`Fixing and trying - removing XXX`, t3.v, t3.w, t3.name), o2 = H(t3.v), s2 = H(t3.w), e2.removeEdge(t3.v, t3.w, t3.name), o2 !== t3.v) {
        let n3 = e2.parent(o2);
        M.get(n3).externalConnections = true, a2.fromCluster = t3.v;
      }
      if (s2 !== t3.w) {
        let n3 = e2.parent(s2);
        M.get(n3)[r2(382)] = true, a2[r2(332)] = t3.w;
      }
      i.warn(`Fix Replacing with XXX`, o2, s2, t3.name), e2.setEdge(o2, s2, a2, t3.name);
    }
  }), i.warn(n2(401), k(e2)), W(e2, 0), i.trace(M);
}, T(345)), W = a((e2, t2) => {
  let n2 = T;
  if (i.warn(`extractor - `, t2, k(e2), e2.children(`D`)), t2 > 10) {
    i.error(`Bailing out`);
    return;
  }
  let r2 = e2.nodes(), a2 = false;
  for (let t3 of r2) {
    let r3 = e2.children(t3);
    a2 || (a2 = r3[n2(351)] > 0);
  }
  if (!a2) {
    i.debug(`Done, no node has children`, e2[n2(352)]());
    return;
  }
  i.debug(`Nodes = `, r2, t2);
  for (let a3 of r2) if (i.debug(`Extracting node`, a3, M, M[n2(364)](a3) && !M.get(a3).externalConnections, !e2.parent(a3), e2.node(a3), e2.children(`D`), ` Depth `, t2), !M.has(a3)) i[n2(342)](n2(340), a3, t2);
  else if (!M.get(a3).externalConnections && e2.children(a3) && e2.children(a3)[n2(351)] > 0) {
    var o2;
    i.warn(`Cluster without external connections, without a parent and with children`, a3, t2);
    let r3 = e2.graph().rankdir === `TB` ? `LR` : `TB`;
    !((o2 = M.get(a3)) == null || (o2 = o2.clusterData) == null) && o2.dir && (r3 = M.get(a3).clusterData.dir, i.warn(`Fixing dir`, M.get(a3).clusterData[n2(350)], r3));
    let s2 = new l({ multigraph: true, compound: true }).setGraph({ rankdir: r3, nodesep: 50, ranksep: 50, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
      return {};
    });
    i[n2(365)](n2(393), k(e2)), R(a3, e2, s2, a3), e2.setNode(a3, { clusterNode: true, id: a3, clusterData: M[n2(361)](a3).clusterData, label: M.get(a3).label, graph: s2 }), i.warn(`New graph after copy node: (`, a3, `)`, k(s2)), i.debug(`Old graph after copy`, k(e2));
  } else i[n2(365)](`Cluster ** `, a3, ` **not meeting the criteria !externalConnections:`, !M.get(a3)[n2(382)], n2(388), !e2.parent(a3), ` children `, e2[n2(390)](a3) && e2.children(a3).length > 0, e2.children(`D`), t2), i.debug(M);
  r2 = e2.nodes(), i.warn(`New list of nodes`, r2);
  for (let n3 of r2) {
    let r3 = e2.node(n3);
    i.warn(` Now next level`, n3, r3), r3 != null && r3.clusterNode && W(r3.graph, t2 + 1);
  }
}, `extractor`), G = a((e2, t2) => {
  let n2 = T;
  if (t2[n2(351)] === 0) return [];
  let r2 = Object.assign([], t2);
  return t2.forEach((t3) => {
    let i2 = G(e2, e2[n2(390)](t3));
    r2 = [...r2, ...i2];
  }), r2;
}, `sorter`), K = a((e2) => G(e2, e2.children()), `sortNodesByHierarchy`), q = a((function() {
  var t2 = r(function* (t3, n2, o2, c2, l2, f2) {
    let p2 = E;
    i.warn(`Graph in recursive render:XAX`, k(n2), l2);
    let v2 = n2.graph().rankdir;
    i.trace(`Dir in recursive render - dir:`, v2);
    let y2 = t3.insert(`g`).attr(`class`, `root`);
    n2.nodes() ? i.info(`Recursive render XXX`, n2.nodes()) : i.info(`No nodes found for`, n2), n2.edges().length > 0 && i[p2(358)](`Recursive edges`, n2.edge(n2[p2(383)]()[0]));
    let S2 = y2.insert(`g`).attr(`class`, `clusters`), w2 = y2.insert(`g`).attr(`class`, `edgePaths`), T2 = y2.insert(`g`).attr(p2(400), `edgeLabels`), D2 = y2.insert(`g`).attr(`class`, `nodes`);
    yield Promise.all(n2.nodes().map((function() {
      var t4 = r(function* (t5) {
        let r2 = E, a2 = n2.node(t5);
        if (l2 !== void 0) {
          let e2 = JSON.parse(JSON.stringify(l2.clusterData));
          i[r2(346)](r2(374), t5, `
 data=`, e2[r2(395)], `
Parent cluster`, l2.height), n2.setNode(l2.id, e2), n2.parent(t5) || (i.trace(`Setting parent`, t5, l2.id), n2.setParent(t5, l2.id, e2));
        }
        if (i.info(`(Insert) Node XXX` + t5 + `: ` + JSON.stringify(n2.node(t5))), a2 != null && a2.clusterNode) {
          i.info(r2(370), t5, a2[r2(334)], n2[r2(403)](t5));
          let { ranksep: s2, nodesep: l3 } = n2.graph();
          a2[r2(347)].setGraph(e(e({}, a2.graph[r2(347)]()), {}, { ranksep: s2 + 25, nodesep: l3 }));
          let d2 = yield q(D2, a2.graph, o2, c2, n2.node(t5), f2), p3 = d2.elem;
          h(a2, p3), a2.diff = d2.diff || 0, i.info(`New compound node after recursive render XAX`, t5, `width`, a2.width, `height`, a2.height), u(p3, a2);
        } else n2.children(t5)[r2(351)] > 0 ? (i[r2(346)](`Cluster - the non recursive path XBX`, t5, a2.id, a2, a2.width, `Graph:`, n2), i[r2(346)](V(a2.id, n2)), M.set(a2.id, { id: V(a2.id, n2), node: a2 })) : (i.trace(`Node - the non recursive path XAX`, t5, D2, n2.node(t5), v2), yield m(D2, n2.node(t5), { config: f2, dir: v2 }));
      });
      return function(e2) {
        return t4.apply(this, arguments);
      };
    })())), yield a(r(function* () {
      let e2 = p2, t4 = n2[e2(383)]()[e2(375)]((function() {
        var e3 = r(function* (e4) {
          let t5 = E, r2 = n2.edge(e4.v, e4.w, e4.name);
          i.info(t5(336) + e4.v + t5(359) + e4.w + `: ` + JSON.stringify(e4)), i.info(`Edge ` + e4.v + ` -> ` + e4.w + `: `, e4, ` `, JSON.stringify(n2.edge(e4))), i.info(t5(360), M, `ids:`, e4.v, e4.w, `Translating: `, M.get(e4.v), M.get(e4.w)), yield _(T2, r2);
        });
        return function(t5) {
          return e3.apply(this, arguments);
        };
      })());
      yield Promise.all(t4);
    }), p2(386))(), i.info(`Graph before layout:`, JSON.stringify(k(n2))), i.info(`############################################# XXX`), i.info(`###                Layout                 ### XXX`), i[p2(358)](`############################################# XXX`), C(n2), i.info(`Graph after layout:`, JSON.stringify(k(n2)));
    let O2 = 0, { subGraphTitleTotalMargin: A2 } = s(f2);
    return yield Promise.all(K(n2).map((function() {
      var e2 = r(function* (e3) {
        let t4 = E, r2 = n2.node(e3);
        if (i[t4(358)](`Position XBX => ` + e3 + t4(389) + r2.x, `,` + r2.y, t4(338), r2.width, ` height: `, r2.height), r2 != null && r2.clusterNode) r2.y += A2, i.info(`A tainted cluster node XBX1`, e3, r2.id, r2[t4(334)], r2.height, r2.x, r2.y, n2.parent(e3)), M.get(r2.id).node = r2, g(r2);
        else if (n2.children(e3)[t4(351)] > 0) {
          var a2;
          i.info(`A pure cluster node XBX1`, e3, r2.id, r2.x, r2.y, r2[t4(334)], r2.height, n2.parent(e3)), r2.height += A2, n2.node(r2.parentId);
          let o3 = (r2 == null ? void 0 : r2.padding) / 2 || 0, s2 = (r2 == null || (a2 = r2[t4(363)]) == null ? void 0 : a2.height) || 0, c3 = s2 - o3 || 0;
          i.debug(t4(376), c3, `labelHeight`, s2, `halfPadding`, o3), yield d(S2, r2), M[t4(361)](r2.id)[t4(403)] = r2;
        } else {
          let e4 = n2.node(r2.parentId);
          r2.y += A2 / 2, i[t4(358)](`A regular node XBX1 - using the padding`, r2.id, `parent`, r2.parentId, r2.width, r2[t4(395)], r2.x, r2.y, `offsetY`, r2.offsetY, `parent`, e4, e4 == null ? void 0 : e4.offsetY, r2), g(r2);
        }
      });
      return function(t4) {
        return e2.apply(this, arguments);
      };
    })())), n2.edges()[p2(343)](function(e2) {
      let t4 = p2, r2 = n2.edge(e2);
      i.info(t4(336) + e2.v + t4(359) + e2.w + `: ` + JSON.stringify(r2), r2), r2[t4(378)][t4(343)]((e3) => e3.y += A2 / 2), x(r2, b(w2, r2, M, o2, n2.node(e2.v), n2.node(e2.w), c2));
    }), n2.nodes().forEach(function(e2) {
      let t4 = p2, r2 = n2.node(e2);
      i[t4(358)](e2, r2[t4(379)], r2.diff), r2.isGroup && (O2 = r2.diff);
    }), i.warn(`Returning from recursive render XAX`, y2, O2), { elem: y2, diff: O2 };
  });
  return function(e2, n2, r2, i2, a2, o2) {
    return t2.apply(this, arguments);
  };
})(), `recursiveRender`), J = a((function() {
  var t2 = r(function* (t3, n2) {
    var _a, _b;
    let r2 = E;
    var a2, s2;
    let c2 = new l({ multigraph: true, compound: true }).setGraph({ rankdir: t3.direction, nodesep: ((_a = t3.config) == null ? void 0 : _a[r2(367)]) || ((a2 = t3[r2(385)]) == null || (a2 = a2.flowchart) == null ? void 0 : a2.nodeSpacing) || t3.nodeSpacing, ranksep: ((_b = t3.config) == null ? void 0 : _b.rankSpacing) || ((s2 = t3.config) == null || (s2 = s2.flowchart) == null ? void 0 : s2.rankSpacing) || t3.rankSpacing, marginx: 8, marginy: 8 }).setDefaultEdgeLabel(function() {
      return {};
    }), u2 = n2.select(`g`);
    v(u2, t3[r2(355)], t3.type, t3.diagramId), f(), y(), p(), F(), t3.nodes.forEach((t4) => {
      c2.setNode(t4.id, e({}, t4)), t4.parentId && c2.setParent(t4.id, t4.parentId);
    }), i[r2(342)](`Edges:`, t3.edges), t3.edges.forEach((t4) => {
      let n3 = r2;
      if (t4.start === t4.end) {
        let e2 = t4.start, r3 = e2 + n3(369) + e2 + `---1`, i2 = e2 + `---` + e2 + `---2`, a3 = c2[n3(403)](e2);
        c2[n3(402)](r3, { domId: r3, id: r3, parentId: a3.parentId, labelStyle: ``, label: ``, padding: 0, shape: `labelRect`, style: ``, width: 10, height: 10 }), c2.setParent(r3, a3[n3(384)]), c2.setNode(i2, { domId: i2, id: i2, parentId: a3.parentId, labelStyle: ``, padding: 0, shape: `labelRect`, label: ``, style: ``, width: 10, height: 10 }), c2[n3(348)](i2, a3.parentId);
        let o2 = structuredClone(t4), s3 = structuredClone(t4), l2 = structuredClone(t4);
        o2.label = ``, o2.arrowTypeEnd = `none`, o2.endLabelLeft = ``, o2.endLabelRight = ``, o2.startLabelLeft = ``, o2.id = e2 + n3(373), s3.startLabelRight = ``, s3.startLabelLeft = ``, s3.endLabelLeft = ``, s3.endLabelRight = ``, s3[n3(372)] = `none`, s3[n3(344)] = `none`, s3.id = e2 + `-cyclic-special-mid`, l2.label = ``, l2.startLabelRight = ``, l2.startLabelLeft = ``, l2.arrowTypeStart = `none`, a3.isGroup && (o2.fromCluster = e2, l2.toCluster = e2), l2.id = e2 + n3(380), l2.arrowTypeStart = `none`, c2[n3(353)](e2, r3, o2, e2 + `-cyclic-special-0`), c2[n3(353)](r3, i2, s3, e2 + `-cyclic-special-1`), c2.setEdge(i2, e2, l2, e2 + `-cyc<lic-special-2`);
      } else c2.setEdge(t4.start, t4[n3(368)], e({}, t4), t4.id);
    }), i[r2(365)](`Graph at first:`, JSON.stringify(k(c2))), U(c2), i[r2(365)](`Graph after XAX:`, JSON[r2(356)](k(c2)));
    let d2 = o();
    yield q(u2, c2, t3.type, t3.diagramId, void 0, d2);
  });
  return function(e2, n2) {
    return t2.apply(this, arguments);
  };
})(), `render`);
function Y() {
  let e2 = `markers,stringify,data,info, -> ,Fix,get,Setting parent,labelBBox,has,warn,10bYvfvN,nodeSpacing,end,---,Cluster identified XBX,26AUupou,arrowTypeStart,-cyclic-special-1,Setting data for parent cluster XXX
 Node.id = ,map,OffsetY,parent,points,type,-cyclic-special-2,includes,externalConnections,edges,parentId,config,processEdges,Translating: , no parent: ,: (,children,removeNode,name,Old graph before copy,7574245ihIesa,height,1445934GeItEn,filter,value,2110746FzgCsS,class,Adjusted Graph,setNode,node,toCluster,Edge data,width,93102nwycrF,Edge ,clear,) width: ,4095620HGHYYF,Not a cluster,set,debug,forEach,arrowTypeEnd,adjustClustersAndEdges,trace,graph,setParent,10727901YSRidR,dir,length,nodes,setEdge,3931432boNvuT`.split(`,`);
  return Y = function() {
    return e2;
  }, Y();
}
export {
  J as render
};
