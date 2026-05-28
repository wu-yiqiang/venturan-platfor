import { g as e, h as t, m as n, p as r } from "./index-D-g3WoLo.js";
import { m as i } from "./src-B18GHWxx.js";
import { _ as a } from "./mermaid-parser.core-GIi7jTaD.js";
import { n as o, t as s } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as c, E as l, V as u, W as d, X as f, Z as p, et as m, g as h, j as g, k as _, s as v, z as y } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { L as b, V as x, h as S } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as C } from "./chunk-4BX2VUAB-GSW_Gx_n.js";
import { t as ee } from "./chunk-QZHKN3VN-CETewxXf.js";
var w = T;
(function(e2, t2) {
  let n2 = T, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(417)) / 1 + parseInt(n2(504)) / 2 * (-parseInt(n2(421)) / 3) + -parseInt(n2(437)) / 4 * (parseInt(n2(524)) / 5) + -parseInt(n2(484)) / 6 + -parseInt(n2(439)) / 7 + -parseInt(n2(480)) / 8 + parseInt(n2(515)) / 9 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(E, 993276);
function T(e2, t2) {
  return e2 -= 368, E()[e2];
}
function E() {
  let e2 = [`seq`, ` already exists`, `commitLabelBackground`, `index`, `redux-color`, `titleTopMargin`, `HIGHLIGHT`, `font-weight:`, `options`, `commits`, `preserve`, `tag-label-bkg`, `noteFontWeight`, `#fff`, `-drop-shadow`, `clear`, `;
  }

  .arrow {
    /* Intentional: neo themes keep the bold 8px arrow (like classic themes); only redux-geometry themes use the thinner options.strokeWidth. */
    stroke-width: `, `parents`, `Incorrect usage of "merge". Branch to be merged (`, `customId`, `diagramPadding`, `tagLabelBorder`, `width`, `debug`, `flood-opacity`, `type`, `; stroke: `, `strokeWidth`, `path`, `fill`, `gradientUnits`, `parseMerge`, `Incorrect usage of "merge". Current branch (`, `Position were undefined for commit `, `direction`, `length`, `393112lVMYoK`, `findClosestParentPos`, `commit-normal`, `transform`, `766764PGEhsY`, `
        .branch-label`, `drawText`, `append`, `currBranch`, `hash`, `commit `, `) has no commits`, `gitGraph`, `stop`, `rotate(-45, `, `_UNIQUE `, `stroke`, `includes`, ` L `, `setParallelBTPos`, `Entering commit:`, `THEME_COLOR_LIMIT`, `line`, `redux-dark`, `2232028SsVWCa`, `set`, `; fill: `, `getBBox`, `statements`, ` commit`, ` { fill: `, `prettyPrint`, `getConfig`, `has`, `forEach`, `29547288HnbVtL`, `setAttribute`, `get`, `getDirection`, `row`, `translate(-19, `, `parseCheckout`, `CHERRY_PICK`, `translate(`, `3710dpMDot`, `
        `, ` commit-highlight`, `
      `, `keys`, `message`, `; }
        .commit-highlight`, `;  stroke-width: `, `parseBranch`, `in cherryPick`, `pos`, `;
  }
`, `; }
        .commit`, `node`, `;
    stroke-dasharray:  `, `sanitizeText`, `branchConfig`, `;   }
        .commit-highlight`, `insert`, `order`, `indexOf`, `; }
        `, `stop-opacity`, `, 0)`, `head`, `class`, `error`, `mainBkg`, `primaryColor`, `merge `, `map`, `name`, `; opacity: `, `string`, `; }
        .label`, `cherryPick `, `branches`, `polygon`, `getHead`, `genGitGraphGradient`, `;
    fill: `, `commitLabelFontSize`, `Closest parent position not found for commit `, `dropShadow`, ` into `, `MERGE`, `tags`, `cherryPick`, `;
  }
  .commit-reverse {
    stroke: `, `points`, `getBranches`, `circle`, `-drop-shadow)`, `merge`, `rect`, `160804ASuOLr`, `NORMAL`, `posWithOffset`, `A 20 20, 0, 0, 1,`, `3AZExWC`, `nodeBorder`, `from`, `textColor`, `isArray`, `getCommitPosition`, `branch`, `attr`, `branch abc`, `error while parsing gitGraph options`, `height`, ` { stroke: `, `mainBranchName`, `abs`, `max`, `records`, `2624mguGFn`, `branchLabel`, `4696027lUvkuD`, `getConfig method is not available on db`, `filter`, `A 10 10, 0, 0, 0,`, `insertTitle`];
  return E = function() {
    return e2;
  }, E();
}
t(), n();
var D = { NORMAL: 0, REVERSE: 1, HIGHLIGHT: 2, MERGE: 3, CHERRY_PICK: 4 }, te = v.gitGraph, O = s(() => S(e(e({}, te), y().gitGraph)), w(512)), k = new ee(() => {
  let e2 = O(), t2 = e2.mainBranchName, n2 = e2.mainBranchOrder;
  return { mainBranchName: t2, commits: /* @__PURE__ */ new Map(), head: null, branchConfig: /* @__PURE__ */ new Map([[t2, { name: t2, order: n2 }]]), branches: /* @__PURE__ */ new Map([[t2, null]]), currBranch: t2, direction: `LR`, seq: 0, options: {} };
});
function A() {
  return b({ length: 7 });
}
s(A, `getID`);
function j(e2, t2) {
  let n2 = /* @__PURE__ */ Object.create(null);
  return e2.reduce((e3, r2) => {
    let i2 = t2(r2);
    return n2[i2] || (n2[i2] = true, e3.push(r2)), e3;
  }, []);
}
s(j, `uniqBy`);
var ne = s(function(e2) {
  let t2 = w;
  k.records[t2(478)] = e2;
}, `setDirection`), re = s(function(e2) {
  let t2 = w;
  o.debug(`options str`, e2), e2 = e2 == null ? void 0 : e2.trim(), e2 || (e2 = `{}`);
  try {
    k.records.options = JSON.parse(e2);
  } catch (e3) {
    o.error(t2(430), e3.message);
  }
}, `setOptions`), ie = s(function() {
  let e2 = w;
  return k[e2(436)][e2(452)];
}, `getOptions`), ae = s(function(e2) {
  let t2 = w, n2 = e2.msg, r2 = e2.id, i2 = e2[t2(469)], a2 = e2.tags;
  o.info(`commit`, n2, r2, i2, a2), o[t2(467)](t2(500), n2, r2, i2, a2);
  let s2 = O();
  r2 = h.sanitizeText(r2, s2), n2 = h[t2(377)](n2, s2), a2 = a2 == null ? void 0 : a2.map((e3) => h.sanitizeText(e3, s2));
  let c2 = { id: r2 || k.records.seq + `-` + A(), message: n2, seq: k.records.seq++, type: i2 ?? D.NORMAL, tags: a2 ?? [], parents: k.records.head == null ? [] : [k[t2(436)].head.id], branch: k.records.currBranch };
  k.records[t2(386)] = c2, o.info(`main branch`, s2[t2(433)]), k.records.commits.has(c2.id) && o.warn(`Commit ID ` + c2.id + t2(445)), k.records.commits.set(c2.id, c2), k[t2(436)][t2(398)].set(k.records.currBranch, c2.id), o.debug(`in pushCommit ` + c2.id);
}, `commit`), oe = s(function(e2) {
  let t2 = w, n2 = e2.name, r2 = e2.order;
  if (n2 = h[t2(377)](n2, O()), k.records.branches.has(n2)) throw Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ` + n2 + `")`);
  k.records.branches.set(n2, k.records.head == null ? null : k.records.head.id), k[t2(436)].branchConfig.set(n2, { name: n2, order: r2 }), le(n2), o.debug(`in createBranch`);
}, `branch`), se = s((e2) => {
  let t2 = w, n2 = e2.branch, r2 = e2.id, i2 = e2.type, a2 = e2.tags, s2 = O();
  n2 = h.sanitizeText(n2, s2), r2 && (r2 = h.sanitizeText(r2, s2));
  let c2 = k.records[t2(398)][t2(517)](k.records.currBranch), l2 = k.records[t2(398)].get(n2), u2 = c2 ? k.records.commits.get(c2) : void 0, d2 = l2 ? k.records.commits.get(l2) : void 0;
  if (u2 && d2 && u2[t2(427)] === n2) throw Error(`Cannot merge branch '` + n2 + `' into itself.`);
  if (k.records[t2(488)] === n2) {
    let e3 = Error(`Incorrect usage of "merge". Cannot merge a branch to itself`);
    throw e3.hash = { text: `merge ` + n2, token: `merge ` + n2, expected: [`branch abc`] }, e3;
  }
  if (u2 === void 0 || !u2) {
    let e3 = Error(t2(476) + k.records[t2(488)] + `)has no commits`);
    throw e3.hash = { text: `merge ` + n2, token: `merge ` + n2, expected: [`commit`] }, e3;
  }
  if (!k[t2(436)].branches.has(n2)) {
    let e3 = Error(t2(462) + n2 + `) does not exist`);
    throw e3.hash = { text: `merge ` + n2, token: `merge ` + n2, expected: [`branch ` + n2] }, e3;
  }
  if (d2 === void 0 || !d2) {
    let e3 = Error(`Incorrect usage of "merge". Branch to be merged (` + n2 + t2(491));
    throw e3.hash = { text: `merge ` + n2, token: `merge ` + n2, expected: [`"commit"`] }, e3;
  }
  if (u2 === d2) {
    let e3 = Error(`Incorrect usage of "merge". Both branches have same head`);
    throw e3.hash = { text: `merge ` + n2, token: `merge ` + n2, expected: [t2(429)] }, e3;
  }
  if (r2 && k.records[t2(453)].has(r2)) {
    let e3 = Error(`Incorrect usage of "merge". Commit with id:` + r2 + ` already exists, use different custom id`);
    throw e3[t2(489)] = { text: `merge ` + n2 + ` ` + r2 + ` ` + i2 + ` ` + (a2 == null ? void 0 : a2.join(` `)), token: `merge ` + n2 + ` ` + r2 + ` ` + i2 + ` ` + (a2 == null ? void 0 : a2.join(` `)), expected: [t2(391) + n2 + ` ` + r2 + t2(495) + i2 + ` ` + (a2 == null ? void 0 : a2.join(` `))] }, e3;
  }
  let f2 = l2 || ``, p2 = { id: r2 || k[t2(436)].seq + `-` + A(), message: `merged branch ` + n2 + t2(406) + k.records.currBranch, seq: k.records[t2(444)]++, parents: k.records.head == null ? [] : [k.records.head.id, f2], branch: k[t2(436)].currBranch, type: D.MERGE, customType: i2, customId: !!r2, tags: a2 ?? [] };
  k.records[t2(386)] = p2, k.records.commits.set(p2.id, p2), k.records[t2(398)].set(k.records[t2(488)], p2.id), o.debug(k[t2(436)].branches), o.debug(`in mergeBranch`);
}, w(415)), ce = s(function(e2) {
  let t2 = w, n2 = e2.id, r2 = e2.targetId, i2 = e2.tags, a2 = e2.parent;
  o[t2(467)](`Entering cherryPick:`, n2, r2, i2);
  let s2 = O();
  if (n2 = h.sanitizeText(n2, s2), r2 = h.sanitizeText(r2, s2), i2 = i2 == null ? void 0 : i2.map((e3) => h.sanitizeText(e3, s2)), a2 = h.sanitizeText(a2, s2), !n2 || !k.records.commits.has(n2)) {
    let e3 = Error(`Incorrect usage of "cherryPick". Source commit id should exist and provided`);
    throw e3.hash = { text: `cherryPick ` + n2 + ` ` + r2, token: t2(397) + n2 + ` ` + r2, expected: [`cherry-pick abc`] }, e3;
  }
  let c2 = k.records.commits[t2(517)](n2);
  if (c2 === void 0 || !c2) throw Error(`Incorrect usage of "cherryPick". Source commit id should exist and provided`);
  if (a2 && !(Array[t2(425)](c2.parents) && c2.parents[t2(497)](a2))) throw Error(`Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.`);
  let l2 = c2.branch;
  if (c2[t2(469)] === D.MERGE && !a2) throw Error(`Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.`);
  if (!r2 || !k.records.commits.has(r2)) {
    if (l2 === k.records.currBranch) {
      let e4 = Error(`Incorrect usage of "cherryPick". Source commit is already on current branch`);
      throw e4.hash = { text: `cherryPick ` + n2 + ` ` + r2, token: `cherryPick ` + n2 + ` ` + r2, expected: [`cherry-pick abc`] }, e4;
    }
    let e3 = k[t2(436)].branches.get(k.records.currBranch);
    if (e3 === void 0 || !e3) {
      let e4 = Error(`Incorrect usage of "cherry-pick". Current branch (` + k.records.currBranch + `)has no commits`);
      throw e4.hash = { text: `cherryPick ` + n2 + ` ` + r2, token: `cherryPick ` + n2 + ` ` + r2, expected: [`cherry-pick abc`] }, e4;
    }
    let s3 = k[t2(436)][t2(453)].get(e3);
    if (s3 === void 0 || !s3) {
      let e4 = Error(`Incorrect usage of "cherry-pick". Current branch (` + k[t2(436)].currBranch + `)has no commits`);
      throw e4.hash = { text: `cherryPick ` + n2 + ` ` + r2, token: `cherryPick ` + n2 + ` ` + r2, expected: [`cherry-pick abc`] }, e4;
    }
    let u2 = { id: k.records.seq + `-` + A(), message: `cherry-picked ` + (c2 == null ? void 0 : c2[t2(529)]) + ` into ` + k.records.currBranch, seq: k.records.seq++, parents: k.records.head == null ? [] : [k.records.head.id, c2.id], branch: k.records[t2(488)], type: D[t2(522)], tags: i2 ? i2.filter(Boolean) : [`cherry-pick:` + c2.id + (c2.type === D.MERGE ? `|parent:` + a2 : ``)] };
    k.records.head = u2, k[t2(436)].commits[t2(505)](u2.id, u2), k.records.branches.set(k[t2(436)][t2(488)], u2.id), o[t2(467)](k.records.branches), o.debug(t2(371));
  }
}, `cherryPick`), le = s(function(e2) {
  let t2 = w;
  if (e2 = h[t2(377)](e2, O()), k.records[t2(398)].has(e2)) {
    k.records.currBranch = e2;
    let n2 = k.records.branches.get(k.records.currBranch);
    n2 === void 0 || !n2 ? k.records.head = null : k.records.head = k.records[t2(453)].get(n2) ?? null;
  } else {
    let t3 = Error(`Trying to checkout branch which is not yet created. (Help try using "branch ` + e2 + `")`);
    throw t3.hash = { text: `checkout ` + e2, token: `checkout ` + e2, expected: [`branch ` + e2] }, t3;
  }
}, `checkout`);
function M(e2, t2, n2) {
  let r2 = e2[w(382)](t2);
  r2 === -1 ? e2.push(n2) : e2.splice(r2, 1, n2);
}
s(M, `upsert`);
function N(e2) {
  let t2 = w, n2 = e2.reduce((e3, t3) => e3.seq > t3.seq ? e3 : t3, e2[0]), r2 = ``;
  e2.forEach(function(e3) {
    e3 === n2 ? r2 += `	*` : r2 += `	|`;
  });
  let i2 = [r2, n2.id, n2.seq];
  for (let e3 in k[t2(436)][t2(398)]) k.records.branches.get(e3) === n2.id && i2.push(e3);
  if (o.debug(i2.join(` `)), n2.parents && n2.parents.length == 2 && n2.parents[0] && n2.parents[1]) {
    let r3 = k.records.commits.get(n2.parents[0]);
    M(e2, n2, r3), n2.parents[1] && e2.push(k.records.commits[t2(517)](n2[t2(461)][1]));
  } else if (n2[t2(461)].length == 0) return;
  else if (n2[t2(461)][0]) {
    let r3 = k.records[t2(453)].get(n2[t2(461)][0]);
    M(e2, n2, r3);
  }
  e2 = j(e2, (e3) => e3.id), N(e2);
}
s(N, `prettyPrintCommitHistory`);
var ue = s(function() {
  o.debug(k.records.commits);
  let e2 = he()[0];
  N([e2]);
}, w(511)), de = s(function() {
  k.reset(), l();
}, `clear`), fe = s(function() {
  let t2 = w;
  return [...k[t2(436)][t2(378)].values()][t2(392)]((t3, n2) => t3.order !== null && t3.order !== void 0 ? t3 : e(e({}, t3), {}, { order: parseFloat(`0.` + n2) })).sort((e2, n2) => (e2[t2(381)] ?? 0) - (n2.order ?? 0)).map(({ name: e2 }) => ({ name: e2 }));
}, `getBranchesAsObjArray`), pe = s(function() {
  let e2 = w;
  return k[e2(436)][e2(398)];
}, w(412)), me = s(function() {
  return k.records.commits;
}, `getCommits`), he = s(function() {
  let e2 = [...k.records.commits.values()];
  return e2.forEach(function(e3) {
    o.debug(e3.id);
  }), e2.sort((e3, t2) => e3.seq - t2.seq), e2;
}, `getCommitsArray`), P = { commitType: D, getConfig: O, setDirection: ne, setOptions: re, getOptions: ie, commit: ae, branch: oe, merge: se, cherryPick: ce, checkout: le, prettyPrint: ue, clear: de, getBranchesAsObjArray: fe, getBranches: pe, getCommits: me, getCommitsArray: he, getCurrentBranch: s(function() {
  return k.records.currBranch;
}, `getCurrentBranch`), getDirection: s(function() {
  return k.records.direction;
}, w(518)), getHead: s(function() {
  return k.records.head;
}, w(400)), setAccTitle: d, getAccTitle: f, getAccDescription: c, setAccDescription: _, setDiagramTitle: p, getDiagramTitle: g }, ge = s((e2, t2) => {
  let n2 = w;
  C(e2, t2), e2.dir && t2.setDirection(e2.dir);
  for (let r2 of e2[n2(508)]) _e(r2, t2);
}, `populate`), _e = s((e2, t2) => {
  let n2 = w, r2 = { Commit: s((e3) => t2.commit(ve(e3)), `Commit`), Branch: s((e3) => t2[n2(427)](ye(e3)), `Branch`), Merge: s((e3) => t2.merge(be(e3)), `Merge`), Checkout: s((e3) => t2.checkout(xe(e3)), `Checkout`), CherryPicking: s((e3) => t2[n2(409)](Se(e3)), `CherryPicking`) }[e2.$type];
  r2 ? r2(e2) : o.error(`Unknown statement type: ` + e2.$type);
}, `parseStatement`), ve = s((e2) => {
  let t2 = w;
  return { id: e2.id, msg: e2.message ?? ``, type: e2[t2(469)] === void 0 ? D[t2(418)] : D[e2.type], tags: e2.tags ?? void 0 };
}, `parseCommit`), ye = s((e2) => {
  let t2 = w;
  return { name: e2.name, order: e2[t2(381)] ?? 0 };
}, w(370)), be = s((e2) => {
  let t2 = w;
  return { branch: e2.branch, id: e2.id ?? ``, type: e2[t2(469)] === void 0 ? void 0 : D[e2[t2(469)]], tags: e2[t2(408)] ?? void 0 };
}, w(475)), xe = s((e2) => e2.branch, w(521)), Se = s((e2) => {
  var _a;
  let t2 = w;
  return { id: e2.id, targetId: ``, tags: ((_a = e2.tags) == null ? void 0 : _a.length) === 0 ? void 0 : e2[t2(408)], parent: e2.parent };
}, `parseCherryPicking`), Ce = { parse: s((function() {
  var e2 = r(function* (e3) {
    let t2 = yield a(T(492), e3);
    o.debug(t2), ge(t2, P);
  });
  return function(t2) {
    return e2.apply(this, arguments);
  };
})(), `parse`) }, F = 10, I = 40, L = 4, R = 2, z = 8, B = /* @__PURE__ */ new Set([`redux`, `redux-dark`, w(448), `redux-dark-color`]), V = 12, H = /* @__PURE__ */ new Set([`redux-color`, `redux-dark-color`]), we = /* @__PURE__ */ new Set([`dark`, w(503), `redux-dark-color`, `neo-dark`]), U = s((e2, t2, n2 = false) => n2 && e2 > 0 ? (e2 - 1) % (t2 - 1) + 1 : e2 % t2, `calcColorIndex`), W = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), K = 30, q = /* @__PURE__ */ new Map(), J = [], Y = 0, X = `LR`, Te = s(() => {
  let e2 = w;
  W[e2(459)](), G.clear(), q[e2(459)](), Y = 0, J = [], X = `LR`;
}, `clear`), Z = s((e2) => {
  let t2 = w, n2 = document.createElementNS(`http://www.w3.org/2000/svg`, `text`);
  return (typeof e2 == t2(395) ? e2.split(/\\n|\n|<br\s*\/?>/gi) : e2).forEach((e3) => {
    let r2 = t2, i2 = document.createElementNS(`http://www.w3.org/2000/svg`, `tspan`);
    i2.setAttributeNS(`http://www.w3.org/XML/1998/namespace`, `xml:space`, r2(454)), i2.setAttribute(`dy`, `1em`), i2[r2(516)](`x`, `0`), i2[r2(516)](r2(387), r2(519)), i2.textContent = e3.trim(), n2.appendChild(i2);
  }), n2;
}, w(486)), Q = s((e2) => {
  let t2, n2, r2;
  return X === `BT` ? (n2 = s((e3, t3) => e3 <= t3, `comparisonFunc`), r2 = 1 / 0) : (n2 = s((e3, t3) => e3 >= t3, `comparisonFunc`), r2 = 0), e2.forEach((e3) => {
    var _a, _b;
    let i2 = X === `TB` || X == `BT` ? (_a = G.get(e3)) == null ? void 0 : _a.y : (_b = G[T(517)](e3)) == null ? void 0 : _b.x;
    i2 !== void 0 && n2(i2, r2) && (t2 = e3, r2 = i2);
  }), t2;
}, `findClosestParent`), Ee = s((e2) => {
  let t2 = w, n2 = ``, r2 = 1 / 0;
  return e2[t2(514)]((e3) => {
    let t3 = G.get(e3).y;
    t3 <= r2 && (n2 = e3, r2 = t3);
  }), n2 || void 0;
}, `findClosestParentBT`), De = s((e2, t2, n2) => {
  let r2 = w, i2 = n2, a2 = n2, o2 = [];
  e2.forEach((e3) => {
    let n3 = t2.get(e3);
    if (!n3) throw Error(`Commit not found for key ` + e3);
    n3.parents.length ? (i2 = ke(n3), a2 = Math.max(i2, a2)) : o2.push(n3), Ae(n3, i2);
  }), i2 = a2, o2[r2(514)]((e3) => {
    je(e3, i2, n2);
  }), e2.forEach((e3) => {
    let n3 = r2, o3 = t2.get(e3);
    if (o3 != null && o3.parents.length) {
      let e4 = Ee(o3[n3(461)]);
      i2 = G.get(e4).y - I, i2 <= a2 && (a2 = i2);
      let t3 = W.get(o3[n3(427)]).pos, r3 = i2 - F;
      G.set(o3.id, { x: t3, y: r3 });
    }
  });
}, w(499)), Oe = s((e2) => {
  var _a;
  let t2 = w, n2 = Q(e2[t2(461)].filter((e3) => e3 !== null));
  if (!n2) throw Error(`Closest parent not found for commit ` + e2.id);
  let r2 = (_a = G[t2(517)](n2)) == null ? void 0 : _a.y;
  if (r2 === void 0) throw Error(t2(404) + e2.id);
  return r2;
}, w(481)), ke = s((e2) => Oe(e2) + I, `calculateCommitPosition`), Ae = s((e2, t2) => {
  let n2 = w, r2 = W.get(e2[n2(427)]);
  if (!r2) throw Error(`Branch not found for commit ` + e2.id);
  let i2 = r2.pos, a2 = t2 + F;
  return G.set(e2.id, { x: i2, y: a2 }), { x: i2, y: a2 };
}, `setCommitPosition`), je = s((e2, t2, n2) => {
  let r2 = w, i2 = W[r2(517)](e2[r2(427)]);
  if (!i2) throw Error(`Branch not found for commit ` + e2.id);
  let a2 = t2 + n2, o2 = i2.pos;
  G.set(e2.id, { x: o2, y: a2 });
}, `setRootPosition`), Me = s((e2, t2, n2, r2, i2, a2) => {
  let o2 = w, { theme: s2 } = u(), c2 = B.has(s2 ?? ``), l2 = H[o2(513)](s2 ?? ``), d2 = we.has(s2 ?? ``);
  if (a2 === D[o2(450)]) e2.append(`rect`).attr(`x`, n2.x - 10 + (c2 ? 3 : 0)).attr(`y`, n2.y - 10 + (c2 ? 3 : 0)).attr(o2(466), c2 ? 14 : 20).attr(`height`, c2 ? 14 : 20).attr(o2(387), `commit ` + t2.id + o2(526) + U(i2, z, l2) + ` ` + r2 + `-outer`), e2.append(`rect`)[o2(428)](`x`, n2.x - 6 + (c2 ? 2 : 0)).attr(`y`, n2.y - 6 + (c2 ? 2 : 0)).attr(`width`, c2 ? 8 : 12).attr(`height`, c2 ? 8 : 12).attr(`class`, `commit ` + t2.id + o2(509) + U(i2, z, l2) + ` ` + r2 + `-inner`);
  else if (a2 === D.CHERRY_PICK) e2[o2(487)](o2(413)).attr(`cx`, n2.x).attr(`cy`, n2.y).attr(`r`, c2 ? 7 : 10).attr(o2(387), `commit ` + t2.id + ` ` + r2), e2[o2(487)](`circle`).attr(`cx`, n2.x - 3).attr(`cy`, n2.y + 2).attr(`r`, c2 ? 2.5 : 2.75).attr(o2(473), d2 ? `#000000` : `#fff`)[o2(428)](o2(387), `commit ` + t2.id + ` ` + r2), e2.append(`circle`)[o2(428)](`cx`, n2.x + 3).attr(`cy`, n2.y + 2).attr(`r`, c2 ? 2.5 : 2.75)[o2(428)](o2(473), d2 ? `#000000` : `#fff`).attr(`class`, o2(490) + t2.id + ` ` + r2), e2.append(`line`)[o2(428)](`x1`, n2.x + 3)[o2(428)](`y1`, n2.y + 1).attr(`x2`, n2.x)[o2(428)](`y2`, n2.y - 5).attr(`stroke`, d2 ? `#000000` : `#fff`).attr(`class`, `commit ` + t2.id + ` ` + r2), e2.append(o2(502)).attr(`x1`, n2.x - 3).attr(`y1`, n2.y + 1).attr(`x2`, n2.x).attr(`y2`, n2.y - 5).attr(o2(496), d2 ? `#000000` : o2(457)).attr(`class`, `commit ` + t2.id + ` ` + r2);
  else {
    let s3 = e2.append(o2(413));
    if (s3[o2(428)](`cx`, n2.x), s3.attr(`cy`, n2.y), s3.attr(`r`, c2 ? 7 : 10), s3.attr(`class`, `commit ` + t2.id + ` commit` + U(i2, z, l2)), a2 === D.MERGE) {
      let a3 = e2.append(`circle`);
      a3[o2(428)](`cx`, n2.x), a3.attr(`cy`, n2.y), a3.attr(`r`, c2 ? 5 : 6), a3.attr(`class`, `commit ` + r2 + ` ` + t2.id + ` commit` + U(i2, z, l2));
    }
    if (a2 === D.REVERSE) {
      let a3 = e2.append(`path`), s4 = c2 ? 4 : 5;
      a3[o2(428)](`d`, `M ` + (n2.x - s4) + `,` + (n2.y - s4) + `L` + (n2.x + s4) + `,` + (n2.y + s4) + `M` + (n2.x - s4) + `,` + (n2.y + s4) + `L` + (n2.x + s4) + `,` + (n2.y - s4)).attr(o2(387), `commit ` + r2 + ` ` + t2.id + ` commit` + U(i2, z, l2));
    }
  }
}, `drawCommitBullet`), Ne = s((e2, t2, n2, r2, i2) => {
  var _a;
  let a2 = w;
  if (t2.type !== D.CHERRY_PICK && (t2[a2(463)] && t2.type === D[a2(407)] || t2[a2(469)] !== D[a2(407)]) && i2.showCommitLabel) {
    let o2 = e2.append(`g`), s2 = o2.insert(a2(416)).attr(`class`, `commit-label-bkg`), c2 = o2.append(`text`).attr(`x`, r2).attr(`y`, n2.y + 25).attr(`class`, `commit-label`).text(t2.id), l2 = (_a = c2[a2(375)]()) == null ? void 0 : _a.getBBox();
    if (l2 && (s2.attr(`x`, n2[a2(419)] - l2.width / 2 - R).attr(`y`, n2.y + 13.5).attr(`width`, l2.width + 2 * R).attr(`height`, l2.height + 2 * R), X === `TB` || X === `BT` ? (s2.attr(`x`, n2.x - (l2.width + 4 * L + 5)).attr(`y`, n2.y - 12), c2.attr(`x`, n2.x - (l2.width + 4 * L)).attr(`y`, n2.y + l2.height - 12)) : c2.attr(`x`, n2[a2(419)] - l2.width / 2), i2.rotateCommitLabel)) if (X === `TB` || X === `BT`) c2[a2(428)](`transform`, a2(494) + n2.x + `, ` + n2.y + `)`), s2.attr(`transform`, `rotate(-45, ` + n2.x + `, ` + n2.y + `)`);
    else {
      let e3 = -7.5 - (l2.width + 10) / 25 * 9.5, t3 = 10 + l2[a2(466)] / 25 * 8.5;
      o2[a2(428)](`transform`, `translate(` + e3 + `, ` + t3 + `) rotate(-45, ` + r2 + `, ` + n2.y + `)`);
    }
  }
}, `drawCommitLabel`), Pe = s((e2, t2, n2, r2) => {
  var _a;
  let i2 = w;
  if (t2[i2(408)].length > 0) {
    let a2 = 0, o2 = 0, s2 = 0, c2 = [];
    for (let r3 of t2.tags.reverse()) {
      let t3 = e2.insert(i2(399)), l2 = e2[i2(487)](`circle`), u2 = e2[i2(487)](`text`).attr(`y`, n2.y - 16 - a2)[i2(428)](`class`, `tag-label`).text(r3), d2 = (_a = u2.node()) == null ? void 0 : _a.getBBox();
      if (!d2) throw Error(`Tag bbox not found`);
      o2 = Math[i2(435)](o2, d2.width), s2 = Math.max(s2, d2[i2(431)]), u2[i2(428)](`x`, n2.posWithOffset - d2.width / 2), c2.push({ tag: u2, hole: l2, rect: t3, yOffset: a2 }), a2 += 20;
    }
    for (let { tag: e3, hole: t3, rect: a3, yOffset: l2 } of c2) {
      let c3 = s2 / 2, u2 = n2.y - 19.2 - l2;
      if (a3[i2(428)](`class`, i2(455))[i2(428)](`points`, `
      ` + (r2 - o2 / 2 - L / 2) + `,` + (u2 + R) + `  
      ` + (r2 - o2 / 2 - L / 2) + `,` + (u2 - R) + `
      ` + (n2.posWithOffset - o2 / 2 - L) + `,` + (u2 - c3 - R) + `
      ` + (n2.posWithOffset + o2 / 2 + L) + `,` + (u2 - c3 - R) + `
      ` + (n2.posWithOffset + o2 / 2 + L) + `,` + (u2 + c3 + R) + i2(527) + (n2[i2(419)] - o2 / 2 - L) + `,` + (u2 + c3 + R)), t3.attr(`cy`, u2).attr(`cx`, r2 - o2 / 2 + L / 2).attr(`r`, 1.5).attr(`class`, `tag-hole`), X === `TB` || X === `BT`) {
        let s3 = r2 + l2;
        a3[i2(428)](i2(387), `tag-label-bkg`).attr(i2(411), i2(525) + n2.x + `,` + (s3 + 2) + i2(525) + n2.x + `,` + (s3 - 2) + `
        ` + (n2.x + F) + `,` + (s3 - c3 - 2) + `
        ` + (n2.x + F + o2 + 4) + `,` + (s3 - c3 - 2) + `
        ` + (n2.x + F + o2 + 4) + `,` + (s3 + c3 + 2) + `
        ` + (n2.x + F) + `,` + (s3 + c3 + 2)).attr(i2(483), `translate(12,12) rotate(45, ` + n2.x + `,` + r2 + `)`), t3.attr(`cx`, n2.x + L / 2).attr(`cy`, s3).attr(`transform`, `translate(12,12) rotate(45, ` + n2.x + `,` + r2 + `)`), e3.attr(`x`, n2.x + 5).attr(`y`, s3 + 3).attr(`transform`, `translate(14,14) rotate(45, ` + n2.x + `,` + r2 + `)`);
      }
    }
  }
}, `drawCommitTags`), Fe = s((e2) => {
  let t2 = w;
  switch (e2.customType ?? e2.type) {
    case D.NORMAL:
      return `commit-normal`;
    case D.REVERSE:
      return `commit-reverse`;
    case D.HIGHLIGHT:
      return `commit-highlight`;
    case D.MERGE:
      return `commit-merge`;
    case D.CHERRY_PICK:
      return `commit-cherry-pick`;
    default:
      return t2(482);
  }
}, `getCommitClassType`), Ie = s((e2, t2, n2, r2) => {
  let i2 = w, a2 = { x: 0, y: 0 };
  if (e2.parents[i2(479)] > 0) {
    let n3 = Q(e2[i2(461)]);
    if (n3) {
      let i3 = r2.get(n3) ?? a2;
      return t2 === `TB` ? i3.y + I : t2 === `BT` ? (r2.get(e2.id) ?? a2).y - I : i3.x + I;
    }
  } else if (t2 === `TB`) return K;
  else if (t2 === `BT`) return (r2.get(e2.id) ?? a2).y - I;
  else return 0;
  return 0;
}, `calculatePosition`), Le = s((e2, t2, n2) => {
  var _a, _b;
  let r2 = w, i2 = X === `BT` && n2 ? t2 : t2 + F, a2 = (_a = W[r2(517)](e2.branch)) == null ? void 0 : _a[r2(372)], o2 = X === `TB` || X === `BT` ? (_b = W[r2(517)](e2.branch)) == null ? void 0 : _b.pos : i2;
  if (o2 === void 0 || a2 === void 0) throw Error(r2(477) + e2.id);
  let s2 = B.has(u().theme ?? ``);
  return { x: o2, y: X === `TB` || X === `BT` ? i2 : a2 + (s2 ? V / 2 + 1 : -2), posWithOffset: i2 };
}, w(426)), Re = s((e2, t2, n2, r2) => {
  let i2 = w, a2 = e2.append(`g`).attr(`class`, `commit-bullets`), o2 = e2.append(`g`)[i2(428)](`class`, `commit-labels`), c2 = X === `TB` || X === `BT` ? K : 0, l2 = [...t2[i2(528)]()], u2 = r2.parallelCommits ?? false, d2 = s((e3, n3) => {
    var _a, _b;
    let r3 = (_a = t2.get(e3)) == null ? void 0 : _a.seq, i3 = (_b = t2.get(n3)) == null ? void 0 : _b.seq;
    return r3 !== void 0 && i3 !== void 0 ? r3 - i3 : 0;
  }, `sortKeys`), f2 = l2.sort(d2);
  X === `BT` && (u2 && De(f2, t2, c2), f2 = f2.reverse()), f2.forEach((e3) => {
    var _a;
    let s2 = i2, l3 = t2.get(e3);
    if (!l3) throw Error(`Commit not found for key ` + e3);
    u2 && (c2 = Ie(l3, X, c2, G));
    let d3 = Le(l3, c2, u2);
    if (n2) {
      let e4 = Fe(l3), t3 = l3.customType ?? l3.type;
      Me(a2, l3, d3, e4, ((_a = W.get(l3.branch)) == null ? void 0 : _a.index) ?? 0, t3), Ne(o2, l3, d3, c2, r2), Pe(o2, l3, d3, c2);
    }
    X === `TB` || X === `BT` ? G[s2(505)](l3.id, { x: d3.x, y: d3.posWithOffset }) : G.set(l3.id, { x: d3.posWithOffset, y: d3.y }), c2 = X === `BT` && u2 ? c2 + I : c2 + I + F, c2 > Y && (Y = c2);
  });
}, `drawCommits`), ze = s((e2, t2, n2, r2, i2) => {
  let a2 = w, o2 = (X === `TB` || X === `BT` ? n2.x < r2.x : n2.y < r2.y) ? t2.branch : e2.branch, c2 = s((e3) => e3.branch === o2, `isOnBranchToGetCurve`), l2 = s((n3) => n3.seq > e2[a2(444)] && n3.seq < t2.seq, `isBetweenCommits`);
  return [...i2.values()].some((e3) => l2(e3) && c2(e3));
}, `shouldRerouteArrow`), $ = s((e2, t2, n2 = 0) => {
  let r2 = w, i2 = e2 + Math.abs(e2 - t2) / 2;
  return n2 > 5 ? i2 : J.every((e3) => Math[r2(434)](e3 - i2) >= 10) ? (J.push(i2), i2) : $(e2, t2 - Math.abs(e2 - t2) / 5, n2 + 1);
}, `findLane`), Be = s((e2, t2, n2, r2) => {
  var _a, _b, _c, _d, _e2;
  let i2 = w, { theme: a2 } = u(), o2 = H[i2(513)](a2 ?? ``), s2 = G.get(t2.id), c2 = G.get(n2.id);
  if (s2 === void 0 || c2 === void 0) throw Error(`Commit positions not found for commits ` + t2.id + ` and ` + n2.id);
  let l2 = ze(t2, n2, s2, c2, r2), d2 = ``, f2 = ``, p2 = 0, m2 = 0, h2 = (_a = W.get(n2[i2(427)])) == null ? void 0 : _a.index;
  n2.type === D[i2(407)] && t2.id !== n2.parents[0] && (h2 = (_b = W[i2(517)](t2.branch)) == null ? void 0 : _b.index);
  let g2;
  if (l2) {
    d2 = i2(442), f2 = `A 10 10, 0, 0, 1,`, p2 = 10, m2 = 10;
    let e3 = s2.y < c2.y ? $(s2.y, c2.y) : $(c2.y, s2.y), n3 = s2.x < c2.x ? $(s2.x, c2.x) : $(c2.x, s2.x);
    X === `TB` ? s2.x < c2.x ? g2 = `M ` + s2.x + ` ` + s2.y + ` L ` + (n3 - p2) + ` ` + s2.y + ` ` + f2 + ` ` + n3 + ` ` + (s2.y + m2) + i2(498) + n3 + ` ` + (c2.y - p2) + ` ` + d2 + ` ` + (n3 + m2) + ` ` + c2.y + i2(498) + c2.x + ` ` + c2.y : (h2 = (_c = W.get(t2.branch)) == null ? void 0 : _c[i2(447)], g2 = `M ` + s2.x + ` ` + s2.y + i2(498) + (n3 + p2) + ` ` + s2.y + ` ` + d2 + ` ` + n3 + ` ` + (s2.y + m2) + ` L ` + n3 + ` ` + (c2.y - p2) + ` ` + f2 + ` ` + (n3 - m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y) : X === `BT` ? s2.x < c2.x ? g2 = `M ` + s2.x + ` ` + s2.y + ` L ` + (n3 - p2) + ` ` + s2.y + ` ` + d2 + ` ` + n3 + ` ` + (s2.y - m2) + ` L ` + n3 + ` ` + (c2.y + p2) + ` ` + f2 + ` ` + (n3 + m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y : (h2 = (_d = W.get(t2.branch)) == null ? void 0 : _d.index, g2 = `M ` + s2.x + ` ` + s2.y + ` L ` + (n3 + p2) + ` ` + s2.y + ` ` + f2 + ` ` + n3 + ` ` + (s2.y - m2) + i2(498) + n3 + ` ` + (c2.y + p2) + ` ` + d2 + ` ` + (n3 - m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y) : s2.y < c2.y ? g2 = `M ` + s2.x + ` ` + s2.y + i2(498) + s2.x + ` ` + (e3 - p2) + ` ` + d2 + ` ` + (s2.x + m2) + ` ` + e3 + ` L ` + (c2.x - p2) + ` ` + e3 + ` ` + f2 + ` ` + c2.x + ` ` + (e3 + m2) + ` L ` + c2.x + ` ` + c2.y : (h2 = (_e2 = W[i2(517)](t2.branch)) == null ? void 0 : _e2.index, g2 = `M ` + s2.x + ` ` + s2.y + ` L ` + s2.x + ` ` + (e3 + p2) + ` ` + f2 + ` ` + (s2.x + m2) + ` ` + e3 + ` L ` + (c2.x - p2) + ` ` + e3 + ` ` + d2 + ` ` + c2.x + ` ` + (e3 - m2) + i2(498) + c2.x + ` ` + c2.y);
  } else d2 = `A 20 20, 0, 0, 0,`, f2 = i2(420), p2 = 20, m2 = 20, X === `TB` ? (s2.x < c2.x && (g2 = n2.type === D.MERGE && t2.id !== n2.parents[0] ? `M ` + s2.x + ` ` + s2.y + ` L ` + s2.x + ` ` + (c2.y - p2) + ` ` + d2 + ` ` + (s2.x + m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y : `M ` + s2.x + ` ` + s2.y + ` L ` + (c2.x - p2) + ` ` + s2.y + ` ` + f2 + ` ` + c2.x + ` ` + (s2.y + m2) + ` L ` + c2.x + ` ` + c2.y), s2.x > c2.x && (d2 = `A 20 20, 0, 0, 0,`, f2 = i2(420), p2 = 20, m2 = 20, g2 = n2.type === D.MERGE && t2.id !== n2.parents[0] ? `M ` + s2.x + ` ` + s2.y + ` L ` + s2.x + ` ` + (c2.y - p2) + ` ` + f2 + ` ` + (s2.x - m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y : `M ` + s2.x + ` ` + s2.y + i2(498) + (c2.x + p2) + ` ` + s2.y + ` ` + d2 + ` ` + c2.x + ` ` + (s2.y + m2) + ` L ` + c2.x + ` ` + c2.y), s2.x === c2.x && (g2 = `M ` + s2.x + ` ` + s2.y + ` L ` + c2.x + ` ` + c2.y)) : X === `BT` ? (s2.x < c2.x && (g2 = n2[i2(469)] === D.MERGE && t2.id !== n2.parents[0] ? `M ` + s2.x + ` ` + s2.y + i2(498) + s2.x + ` ` + (c2.y + p2) + ` ` + f2 + ` ` + (s2.x + m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y : `M ` + s2.x + ` ` + s2.y + ` L ` + (c2.x - p2) + ` ` + s2.y + ` ` + d2 + ` ` + c2.x + ` ` + (s2.y - m2) + ` L ` + c2.x + ` ` + c2.y), s2.x > c2.x && (d2 = `A 20 20, 0, 0, 0,`, f2 = `A 20 20, 0, 0, 1,`, p2 = 20, m2 = 20, g2 = n2.type === D.MERGE && t2.id !== n2.parents[0] ? `M ` + s2.x + ` ` + s2.y + ` L ` + s2.x + ` ` + (c2.y + p2) + ` ` + d2 + ` ` + (s2.x - m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y : `M ` + s2.x + ` ` + s2.y + ` L ` + (c2.x + p2) + ` ` + s2.y + ` ` + f2 + ` ` + c2.x + ` ` + (s2.y - m2) + ` L ` + c2.x + ` ` + c2.y), s2.x === c2.x && (g2 = `M ` + s2.x + ` ` + s2.y + ` L ` + c2.x + ` ` + c2.y)) : (s2.y < c2.y && (g2 = n2.type === D.MERGE && t2.id !== n2.parents[0] ? `M ` + s2.x + ` ` + s2.y + i2(498) + (c2.x - p2) + ` ` + s2.y + ` ` + f2 + ` ` + c2.x + ` ` + (s2.y + m2) + ` L ` + c2.x + ` ` + c2.y : `M ` + s2.x + ` ` + s2.y + i2(498) + s2.x + ` ` + (c2.y - p2) + ` ` + d2 + ` ` + (s2.x + m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y), s2.y > c2.y && (g2 = n2.type === D.MERGE && t2.id !== n2.parents[0] ? `M ` + s2.x + ` ` + s2.y + ` L ` + (c2.x - p2) + ` ` + s2.y + ` ` + d2 + ` ` + c2.x + ` ` + (s2.y - m2) + ` L ` + c2.x + ` ` + c2.y : `M ` + s2.x + ` ` + s2.y + ` L ` + s2.x + ` ` + (c2.y + p2) + ` ` + f2 + ` ` + (s2.x + m2) + ` ` + c2.y + ` L ` + c2.x + ` ` + c2.y), s2.y === c2.y && (g2 = `M ` + s2.x + ` ` + s2.y + ` L ` + c2.x + ` ` + c2.y));
  if (g2 === void 0) throw Error(`Line definition not found`);
  e2.append(i2(472))[i2(428)](`d`, g2)[i2(428)](`class`, `arrow arrow` + U(h2, z, o2));
}, `drawArrow`), Ve = s((e2, t2) => {
  let n2 = e2.append(`g`).attr(`class`, `commit-arrows`);
  [...t2.keys()].forEach((e3) => {
    let r2 = T, i2 = t2[r2(517)](e3);
    i2.parents && i2.parents.length > 0 && i2.parents.forEach((e4) => {
      Be(n2, t2[r2(517)](e4), i2, t2);
    });
  });
}, `drawArrows`), He = s((e2, t2, n2, r2) => {
  let i2 = w, { look: a2, theme: o2, themeVariables: s2 } = u(), { dropShadow: c2, THEME_COLOR_LIMIT: l2 } = s2, d2 = B[i2(513)](o2 ?? ``), f2 = H.has(o2 ?? ``), p2 = e2.append(`g`);
  t2.forEach((e3, t3) => {
    var _a;
    let o3 = i2, s3 = U(t3, d2 ? l2 : z, f2), u2 = (_a = W.get(e3[o3(393)])) == null ? void 0 : _a.pos;
    if (u2 === void 0) throw Error(`Position not found for branch ` + e3.name);
    let m2 = X === `TB` || X === `BT` ? u2 : d2 ? u2 + V / 2 + 1 : u2 - 2, h2 = p2.append(o3(502));
    h2.attr(`x1`, 0), h2.attr(`y1`, m2), h2.attr(`x2`, Y), h2.attr(`y2`, m2), h2.attr(`class`, `branch branch` + s3), X === `TB` ? (h2.attr(`y1`, K), h2[o3(428)](`x1`, u2), h2.attr(`y2`, Y), h2.attr(`x2`, u2)) : X === `BT` && (h2.attr(`y1`, Y), h2.attr(`x1`, u2), h2[o3(428)](`y2`, K), h2.attr(`x2`, u2)), J.push(m2);
    let g2 = e3.name, _2 = Z(g2), v2 = p2.insert(`rect`), y2 = p2[o3(380)](`g`).attr(o3(387), o3(438)).insert(`g`).attr(`class`, `label branch-label` + s3);
    y2.node().appendChild(_2);
    let b2 = _2[o3(507)](), x2 = d2 ? 0 : 4, S2 = d2 ? 16 : 0, C2 = d2 ? V : 0;
    a2 === `neo` && v2.attr(`data-look`, `neo`), v2[o3(428)](`class`, `branchLabelBkg label` + s3).attr(`style`, a2 === `neo` ? `filter:` + (d2 ? `url(#` + r2 + o3(414) : c2) : ``).attr(`rx`, x2).attr(`ry`, x2).attr(`x`, -b2.width - 4 - (n2.rotateCommitLabel === true ? 30 : 0)).attr(`y`, -b2.height / 2 + 10)[o3(428)](`width`, b2.width + 18 + S2).attr(o3(431), b2.height + 4 + C2), y2.attr(o3(483), `translate(` + (-b2.width - 14 - (n2.rotateCommitLabel === true ? 30 : 0) + S2 / 2) + `, ` + (m2 - b2.height / 2 - 2) + `)`), X === `TB` ? (v2.attr(`x`, u2 - b2.width / 2 - 10).attr(`y`, 0), y2.attr(o3(483), `translate(` + (u2 - b2.width / 2 - 5) + o3(385)), d2 && (v2.attr(`transform`, `translate(` + (-S2 / 2 - 3) + `, ` + (-C2 - 10) + `)`), y2.attr(`transform`, o3(523) + (u2 - b2.width / 2 - 5) + `, ` + (-C2 * 2 + 7) + `)`))) : X === `BT` ? (v2.attr(`x`, u2 - b2.width / 2 - 10).attr(`y`, Y), y2.attr(`transform`, o3(523) + (u2 - b2.width / 2 - 5) + `, ` + Y + `)`), d2 && (v2.attr(`transform`, `translate(` + (-S2 / 2 - 3) + `, ` + (C2 + 10) + `)`), y2.attr(`transform`, `translate(` + (u2 - b2[o3(466)] / 2 - 5) + `, ` + (Y + C2 * 2 + 4) + `)`))) : v2.attr(`transform`, o3(520) + (m2 - 12 - C2 / 2) + `)`);
  });
}, `drawBranches`), Ue = s(function(e2, t2, n2, r2, i2) {
  return W[w(505)](e2, { pos: t2, index: n2 }), t2 += 50 + (i2 ? 40 : 0) + (X === `TB` || X === `BT` ? r2.width / 2 : 0), t2;
}, `setBranchPosition`), We = { draw: s(function(e2, t2, n2, r2) {
  let a2 = w;
  Te(), o.debug(`in gitgraph renderer`, e2 + `
`, `id:`, t2, n2);
  let s2 = r2.db;
  if (!s2.getConfig) {
    o[a2(388)](a2(440));
    return;
  }
  let c2 = s2[a2(512)](), l2 = c2.rotateCommitLabel ?? false;
  q = s2.getCommits();
  let d2 = s2.getBranchesAsObjArray();
  X = s2.getDirection();
  let f2 = i(`[id="` + t2 + `"]`), { look: p2, theme: h2, themeVariables: g2 } = u(), { useGradient: _2, gradientStart: v2, gradientStop: y2, filterColor: b2 } = g2;
  if (_2) {
    let e3 = f2.append(`defs`).append(`linearGradient`).attr(`id`, t2 + `-gradient`).attr(a2(474), `objectBoundingBox`)[a2(428)](`x1`, `0%`).attr(`y1`, `0%`).attr(`x2`, `100%`).attr(`y2`, `0%`);
    e3.append(a2(493)).attr(`offset`, `0%`).attr(`stop-color`, v2)[a2(428)](a2(384), 1), e3.append(`stop`).attr(`offset`, `100%`).attr(`stop-color`, y2).attr(`stop-opacity`, 1);
  }
  p2 === `neo` && B.has(h2 ?? ``) && f2.append(`defs`)[a2(487)](a2(441)).attr(`id`, t2 + a2(458)).attr(`height`, `130%`).attr(`width`, `130%`)[a2(487)](`feDropShadow`).attr(`dx`, `4`).attr(`dy`, `4`).attr(`stdDeviation`, 0).attr(a2(468), `0.06`).attr(`flood-color`, b2);
  let S2 = 0;
  d2.forEach((e3, t3) => {
    let n3 = a2;
    var r3;
    let i2 = Z(e3.name), o2 = f2.append(`g`), s3 = o2.insert(`g`).attr(n3(387), `branchLabel`), c3 = s3.insert(`g`)[n3(428)](n3(387), `label branch-label`);
    (r3 = c3[n3(375)]()) == null || r3.appendChild(i2);
    let u2 = i2.getBBox();
    S2 = Ue(e3.name, S2, t3, u2, l2), c3.remove(), s3.remove(), o2.remove();
  }), Re(f2, q, false, c2), c2.showBranches && He(f2, d2, c2, t2), Ve(f2, q), Re(f2, q, true, c2), x[a2(443)](f2, `gitTitleText`, c2[a2(449)] ?? 0, s2.getDiagramTitle()), m(void 0, f2, c2[a2(464)], c2.useMaxWidth);
}, `draw`) }, Ge = 8, Ke = /* @__PURE__ */ new Set([`redux`, w(503), `redux-color`, `redux-dark-color`]), qe = /* @__PURE__ */ new Set([w(448), `redux-dark-color`]), Je = /* @__PURE__ */ new Set([`neo`, `neo-dark`]), Ye = /* @__PURE__ */ new Set([`dark`, `redux-dark`, `redux-dark-color`, `neo-dark`]), Xe = /* @__PURE__ */ new Set([`redux`, `redux-dark`, `redux-color`, `redux-dark-color`, `neo`, `neo-dark`]), Ze = s((e2) => {
  let t2 = w, { svgId: n2 } = e2, r2 = ``;
  if (e2.useGradient && n2) for (let i2 = 0; i2 < e2.THEME_COLOR_LIMIT; i2++) r2 += `
      .label` + i2 + `  { fill: ` + e2[t2(389)] + `; stroke: url(` + n2 + `-gradient); stroke-width: ` + e2.strokeWidth + `;}
             `;
  return r2;
}, w(401)), Qe = s((e2) => {
  let t2 = w, { theme: n2, themeVariables: r2 } = y(), { borderColorArray: i2 } = r2, a2 = Ke.has(n2);
  if (Je[t2(513)](n2)) {
    let n3 = ``;
    for (let r3 = 0; r3 < e2.THEME_COLOR_LIMIT; r3++) if (r3 === 0) n3 += `
        .branch-label` + r3 + ` { fill: ` + e2.nodeBorder + `;}
        .commit` + r3 + ` { stroke: ` + e2.nodeBorder + t2(379) + r3 + t2(432) + e2[t2(422)] + `; fill: ` + e2.nodeBorder + `; }
        .arrow` + r3 + ` { stroke: ` + e2.nodeBorder + `; }
        .commit-bullets { fill: ` + e2.nodeBorder + `; }
        .commit-cherry-pick` + r3 + ` { stroke: ` + e2.nodeBorder + t2(383) + Ze(e2);
    else {
      let i3 = r3 % Ge;
      n3 += `
        .branch-label` + r3 + ` { fill: ` + e2[`gitBranchLabel` + i3] + t2(374) + r3 + ` { stroke: ` + e2[`git` + i3] + `; fill: ` + e2[`git` + i3] + t2(368) + r3 + t2(432) + e2[`gitInv` + i3] + t2(506) + e2[`gitInv` + i3] + `; }
        .arrow` + r3 + t2(432) + e2[`git` + i3] + `; }
        `;
    }
    return n3;
  } else if (qe[t2(513)](n2)) {
    let r3 = ``;
    for (let o2 = 0; o2 < e2[t2(501)]; o2++) if (o2 === 0) r3 += t2(485) + o2 + ` { fill: ` + e2.nodeBorder + `; ` + (a2 ? `font-weight:` + e2.noteFontWeight : ``) + ` }
        .commit` + o2 + ` { stroke: ` + e2[t2(422)] + `; }
        .commit-highlight` + o2 + ` { stroke: ` + e2.nodeBorder + `; fill: ` + e2.mainBkg + `; }
        .label` + o2 + `  { fill: ` + e2.mainBkg + `; stroke: ` + e2.nodeBorder + `; stroke-width: ` + e2.strokeWidth + `; ` + (a2 ? t2(451) + e2[t2(456)] : ``) + ` }
        .arrow` + o2 + ` { stroke: ` + e2.nodeBorder + `; }
        .commit-bullets { fill: ` + e2.nodeBorder + t2(383);
    else {
      let s2 = o2 % i2.length;
      r3 += `
        .branch-label` + o2 + t2(510) + e2.nodeBorder + `; ` + (a2 ? `font-weight:` + e2.noteFontWeight : ``) + ` }
        .commit` + o2 + ` { stroke: ` + i2[s2] + `; fill: ` + i2[s2] + `; }
        .commit-highlight` + o2 + ` { stroke: ` + i2[s2] + `; fill: ` + i2[s2] + t2(396) + o2 + `  { fill: ` + (Ye[t2(513)](n2) ? e2.mainBkg : i2[s2]) + t2(470) + i2[s2] + t2(369) + e2[t2(471)] + `; }
        .arrow` + o2 + ` { stroke: ` + i2[s2] + `; }
        `;
    }
    return r3;
  } else {
    let n3 = ``;
    for (let r3 = 0; r3 < e2[t2(501)]; r3++) n3 += `
        .branch-label` + r3 + ` { fill: ` + e2.nodeBorder + `; ` + (a2 ? t2(451) + e2[t2(456)] : ``) + ` }
        .commit` + r3 + t2(432) + e2.nodeBorder + `;   }
        .commit-highlight` + r3 + ` { stroke: ` + e2.nodeBorder + `; fill: ` + e2.nodeBorder + `; }
        .label` + r3 + `  { fill: ` + e2.mainBkg + `; stroke: ` + e2.nodeBorder + `; stroke-width: ` + e2.strokeWidth + `; ` + (a2 ? `font-weight:` + e2.noteFontWeight : ``) + `}
        .arrow` + r3 + ` { stroke: ` + e2.nodeBorder + `; }
        .commit-bullets { fill: ` + e2.nodeBorder + `; }
        .commit-cherry-pick` + r3 + ` { stroke: ` + e2.nodeBorder + `; }
        `;
    return n3;
  }
}, `genColor`), $e = s((e2) => `` + Array[w(423)]({ length: e2.THEME_COLOR_LIMIT }, (e3, t2) => t2).map((t2) => {
  let n2 = w, r2 = t2 % Ge;
  return `
        .branch-label` + t2 + ` { fill: ` + e2[`gitBranchLabel` + r2] + `; }
        .commit` + t2 + n2(432) + e2[`git` + r2] + `; fill: ` + e2[`git` + r2] + `; }
        .commit-highlight` + t2 + ` { stroke: ` + e2[`gitInv` + r2] + `; fill: ` + e2[`gitInv` + r2] + `; }
        .label` + t2 + `  { fill: ` + e2[`git` + r2] + `; }
        .arrow` + t2 + ` { stroke: ` + e2[`git` + r2] + `; }
        `;
}).join(`
`), `normalTheme`), et = { parser: Ce, db: P, renderer: We, styles: s((e2) => {
  let t2 = w, { theme: n2 } = y(), r2 = Xe[t2(513)](n2);
  return `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  
  ` + (r2 ? Qe(e2) : $e(e2)) + `

  .branch {
    stroke-width: ` + e2[t2(471)] + `;
    stroke: ` + (e2.commitLineColor ?? e2.lineColor) + t2(376) + (r2 ? `4 2` : `2`) + `;
  }
  .commit-label { font-size: ` + e2[t2(403)] + `; fill: ` + (r2 ? e2.nodeBorder : e2.commitLabelColor) + `; ` + (r2 ? `font-weight:` + e2.noteFontWeight + `;` : ``) + `}
  .commit-label-bkg { font-size: ` + e2[t2(403)] + `; fill: ` + (r2 ? `transparent` : e2[t2(446)]) + t2(394) + (r2 ? `` : 0.5) + `;  }
  .tag-label { font-size: ` + e2.tagLabelFontSize + t2(506) + e2.tagLabelColor + `;}
  .tag-label-bkg { fill: ` + (r2 ? e2.mainBkg : e2.tagLabelBackground) + `; stroke: ` + (r2 ? e2.nodeBorder : e2[t2(465)]) + `; ` + (r2 ? `filter:` + e2[t2(405)] : ``) + `  }
  .tag-hole { fill: ` + e2.textColor + `; }

  .commit-merge {
    stroke: ` + (r2 ? e2.mainBkg : e2[t2(390)]) + `;
    fill: ` + (r2 ? e2.mainBkg : e2.primaryColor) + t2(410) + (r2 ? e2[t2(389)] : e2.primaryColor) + t2(402) + (r2 ? e2.mainBkg : e2.primaryColor) + `;
    stroke-width: ` + (r2 ? e2.strokeWidth : 3) + `;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ` + (r2 ? e2[t2(389)] : e2.primaryColor) + `;
    fill: ` + (r2 ? e2.mainBkg : e2[t2(390)]) + t2(460) + (Ke.has(n2) ? e2.strokeWidth : 8) + `;
    stroke-linecap: round;
    fill: none
  }
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ` + e2[t2(424)] + t2(373);
}, `getStyles`) };
export {
  et as diagram
};
