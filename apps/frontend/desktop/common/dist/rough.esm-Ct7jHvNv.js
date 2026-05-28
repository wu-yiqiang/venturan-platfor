import { n as e } from "./rolldown-runtime-aKtaBQYM.js";
import { t } from "./chunk-DeXYQlWK.js";
var n = e({ n: () => i, t: () => $ }), r = J;
(function(e2, t2) {
  let n2 = J, r2 = e2();
  for (; ; ) try {
    if (parseInt(n2(418)) / 1 + parseInt(n2(473)) / 2 * (parseInt(n2(439)) / 3) + -parseInt(n2(456)) / 4 * (-parseInt(n2(490)) / 5) + -parseInt(n2(465)) / 6 * (parseInt(n2(417)) / 7) + -parseInt(n2(440)) / 8 * (-parseInt(n2(469)) / 9) + -parseInt(n2(447)) / 10 + -parseInt(n2(409)) / 11 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(C, 469643);
var i = t({ default: () => $ });
function a(e2, t2, n2) {
  if (e2 && e2[J(430)]) {
    let [r2, i2] = t2, a2 = Math.PI / 180 * n2, o2 = Math.cos(a2), s2 = Math.sin(a2);
    for (let t3 of e2) {
      let [e3, n3] = t3;
      t3[0] = (e3 - r2) * o2 - (n3 - i2) * s2 + r2, t3[1] = (e3 - r2) * s2 + (n3 - i2) * o2 + i2;
    }
  }
}
function o(e2, t2) {
  return e2[0] === t2[0] && e2[1] === t2[1];
}
function s(e2, t2, n2, r2 = 1) {
  let i2 = J, s2 = n2, c2 = Math.max(t2, 0.1), l2 = e2[0] && e2[0][0] && typeof e2[0][0] == i2(422) ? [e2] : e2, u2 = [0, 0];
  if (s2) for (let e3 of l2) a(e3, u2, s2);
  let d2 = (function(e3, t3, n3) {
    let r3 = i2, a2 = [];
    for (let t4 of e3) {
      let e4 = [...t4];
      o(e4[0], e4[e4.length - 1]) || e4.push([e4[0][0], e4[0][1]]), e4.length > 2 && a2.push(e4);
    }
    let s3 = [];
    t3 = Math.max(t3, 0.1);
    let c3 = [];
    for (let e4 of a2) for (let t4 = 0; t4 < e4.length - 1; t4++) {
      let n4 = e4[t4], i3 = e4[t4 + 1];
      if (n4[1] !== i3[1]) {
        let e5 = Math.min(n4[1], i3[1]);
        c3.push({ ymin: e5, ymax: Math[r3(435)](n4[1], i3[1]), x: e5 === n4[1] ? n4[0] : i3[0], islope: (i3[0] - n4[0]) / (i3[1] - n4[1]) });
      }
    }
    if (c3.sort((e4, t4) => e4.ymin < t4.ymin ? -1 : e4.ymin > t4.ymin ? 1 : e4.x < t4.x ? -1 : e4.x > t4.x ? 1 : e4.ymax === t4.ymax ? 0 : (e4[r3(449)] - t4.ymax) / Math[r3(472)](e4.ymax - t4.ymax)), !c3.length) return s3;
    let l3 = [], u3 = c3[0].ymin, d3 = 0;
    for (; l3.length || c3.length; ) {
      if (c3.length) {
        let e4 = -1;
        for (let t4 = 0; t4 < c3.length && !(c3[t4].ymin > u3); t4++) e4 = t4;
        c3.splice(0, e4 + 1).forEach((e5) => {
          l3[r3(410)]({ s: u3, edge: e5 });
        });
      }
      if (l3 = l3[r3(452)]((e4) => !(e4.edge.ymax <= u3)), l3[r3(485)]((e4, t4) => e4.edge.x === t4.edge.x ? 0 : (e4.edge.x - t4[r3(428)].x) / Math.abs(e4[r3(428)].x - t4.edge.x)), (n3 !== 1 || d3 % t3 == 0) && l3[r3(430)] > 1) for (let e4 = 0; e4 < l3[r3(430)]; e4 += 2) {
        let t4 = e4 + 1;
        if (t4 >= l3.length) break;
        let n4 = l3[e4].edge, r4 = l3[t4].edge;
        s3.push([[Math.round(n4.x), u3], [Math.round(r4.x), u3]]);
      }
      u3 += n3, l3[r3(431)]((e4) => {
        e4.edge.x = e4.edge.x + n3 * e4.edge.islope;
      }), d3++;
    }
    return s3;
  })(l2, c2, r2);
  if (s2) {
    for (let e3 of l2) a(e3, u2, -s2);
    (function(e3, t3, n3) {
      let r3 = [];
      e3.forEach((e4) => r3.push(...e4)), a(r3, t3, n3);
    })(d2, u2, -s2);
  }
  return d2;
}
function c(e2, t2) {
  var _a;
  let n2 = t2.hachureAngle + 90, r2 = t2.hachureGap;
  r2 < 0 && (r2 = 4 * t2.strokeWidth), r2 = Math.round(Math.max(r2, 0.1));
  let i2 = 1;
  return t2.roughness >= 1 && (((_a = t2.randomizer) == null ? void 0 : _a.next()) || Math.random()) > 0.7 && (i2 = r2), s(e2, r2, n2, i2 || 1);
}
var l = class {
  constructor(e2) {
    let t2 = J;
    this[t2(480)] = e2;
  }
  fillPolygons(e2, t2) {
    return this._fillPolygons(e2, t2);
  }
  _fillPolygons(e2, t2) {
    let n2 = J, r2 = c(e2, t2);
    return { type: n2(477), ops: this[n2(476)](r2, t2) };
  }
  renderLines(e2, t2) {
    let n2 = J, r2 = [];
    for (let i2 of e2) r2.push(...this[n2(480)].doubleLineOps(i2[0][0], i2[0][1], i2[1][0], i2[1][1], t2));
    return r2;
  }
};
function u(e2) {
  let t2 = J, n2 = e2[0], r2 = e2[1];
  return Math.sqrt((n2[0] - r2[0]) ** 2 + Math[t2(420)](n2[1] - r2[1], 2));
}
var d = class extends l {
  [r(441)](e2, t2) {
    let n2 = r, i2 = t2.hachureGap;
    i2 < 0 && (i2 = 4 * t2.strokeWidth), i2 = Math[n2(435)](i2, 0.1);
    let a2 = c(e2, Object.assign({}, t2, { hachureGap: i2 })), o2 = Math.PI / 180 * t2.hachureAngle, s2 = [], l2 = 0.5 * i2 * Math[n2(463)](o2), d2 = 0.5 * i2 * Math[n2(425)](o2);
    for (let [e3, t3] of a2) u([e3, t3]) && s2.push([[e3[0] - l2, e3[1] + d2], [...t3]], [[e3[0] + l2, e3[1] - d2], [...t3]]);
    return { type: `fillSketch`, ops: this.renderLines(s2, t2) };
  }
}, f = class extends l {
  fillPolygons(e2, t2) {
    let n2 = r, i2 = this[n2(423)](e2, t2), a2 = Object.assign({}, t2, { hachureAngle: t2.hachureAngle + 90 }), o2 = this._fillPolygons(e2, a2);
    return i2.ops = i2.ops.concat(o2.ops), i2;
  }
}, p = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = c(e2, t2 = Object.assign({}, t2, { hachureAngle: 0 }));
    return this.dotsOnLines(n2, t2);
  }
  dotsOnLines(e2, t2) {
    let n2 = r, i2 = [], a2 = t2[n2(461)];
    a2 < 0 && (a2 = 4 * t2.strokeWidth), a2 = Math.max(a2, 0.1);
    let o2 = t2.fillWeight;
    o2 < 0 && (o2 = t2.strokeWidth / 2);
    let s2 = a2 / 4;
    for (let r2 of e2) {
      let e3 = u(r2), c2 = e3 / a2, l2 = Math[n2(434)](c2) - 1, d2 = e3 - l2 * a2, f2 = (r2[0][0] + r2[1][0]) / 2 - a2 / 4, p2 = Math.min(r2[0][1], r2[1][1]);
      for (let e4 = 0; e4 < l2; e4++) {
        let n3 = p2 + d2 + e4 * a2, r3 = f2 - s2 + 2 * Math.random() * s2, c3 = n3 - s2 + 2 * Math.random() * s2, l3 = this.helper.ellipse(r3, c3, o2, o2, t2);
        i2.push(...l3.ops);
      }
    }
    return { type: `fillSketch`, ops: i2 };
  }
}, m = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = r, i2 = c(e2, t2);
    return { type: `fillSketch`, ops: this[n2(475)](i2, t2) };
  }
  dashedLine(e2, t2) {
    let n2 = r, i2 = t2.dashOffset < 0 ? t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2[n2(461)] : t2[n2(451)], a2 = t2.dashGap < 0 ? t2.hachureGap < 0 ? 4 * t2.strokeWidth : t2[n2(461)] : t2[n2(492)], o2 = [];
    return e2.forEach((e3) => {
      let r2 = n2, s2 = u(e3), c2 = Math.floor(s2 / (i2 + a2)), l2 = (s2 + a2 - c2 * (i2 + a2)) / 2, d2 = e3[0], f2 = e3[1];
      d2[0] > f2[0] && (d2 = e3[1], f2 = e3[0]);
      let p2 = Math.atan((f2[1] - d2[1]) / (f2[0] - d2[0]));
      for (let e4 = 0; e4 < c2; e4++) {
        let n3 = e4 * (i2 + a2), s3 = n3 + i2, c3 = [d2[0] + n3 * Math[r2(463)](p2) + l2 * Math.cos(p2), d2[1] + n3 * Math.sin(p2) + l2 * Math.sin(p2)], u2 = [d2[0] + s3 * Math[r2(463)](p2) + l2 * Math.cos(p2), d2[1] + s3 * Math.sin(p2) + l2 * Math[r2(425)](p2)];
        o2[r2(410)](...this.helper[r2(466)](c3[0], c3[1], u2[0], u2[1], t2));
      }
    }), o2;
  }
}, h = class {
  constructor(e2) {
    this.helper = e2;
  }
  fillPolygons(e2, t2) {
    let n2 = r, i2 = t2.hachureGap < 0 ? 4 * t2[n2(486)] : t2[n2(461)], a2 = t2.zigzagOffset < 0 ? i2 : t2.zigzagOffset, o2 = c(e2, t2 = Object.assign({}, t2, { hachureGap: i2 + a2 }));
    return { type: `fillSketch`, ops: this[n2(443)](o2, a2, t2) };
  }
  zigzagLines(e2, t2, n2) {
    let i2 = r, a2 = [];
    return e2[i2(431)]((e3) => {
      let r2 = i2, o2 = u(e3), s2 = Math.round(o2 / (2 * t2)), c2 = e3[0], l2 = e3[1];
      c2[0] > l2[0] && (c2 = e3[1], l2 = e3[0]);
      let d2 = Math.atan((l2[1] - c2[1]) / (l2[0] - c2[0]));
      for (let e4 = 0; e4 < s2; e4++) {
        let i3 = 2 * e4 * t2, o3 = 2 * (e4 + 1) * t2, s3 = Math.sqrt(2 * t2 ** 2), l3 = [c2[0] + i3 * Math[r2(463)](d2), c2[1] + i3 * Math.sin(d2)], u2 = [c2[0] + o3 * Math.cos(d2), c2[1] + o3 * Math[r2(425)](d2)], f2 = [l3[0] + s3 * Math.cos(d2 + Math.PI / 4), l3[1] + s3 * Math[r2(425)](d2 + Math.PI / 4)];
        a2.push(...this.helper.doubleLineOps(l3[0], l3[1], f2[0], f2[1], n2), ...this.helper.doubleLineOps(f2[0], f2[1], u2[0], u2[1], n2));
      }
    }), a2;
  }
}, g = {}, _ = class {
  constructor(e2) {
    this.seed = e2;
  }
  next() {
    let e2 = r;
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math[e2(474)](48271, this.seed))) / 2 ** 31 : Math.random();
  }
}, v = 0, y = 1, b = 2, x = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function S(e2, t2) {
  return e2.type === t2;
}
function C() {
  let e2 = `fill.helper.stroke-width.svg.stroke.circle.sort.strokeWidth.concat.disableMultiStroke.path.25fAMjJH.type.dashGap.move.shape.13839551xFIqnv.push.solid.assign.zigzag.opsToPath.nonzero.fillPath.3521dViLAL.680100EfKNQC.opset.pow.arc.number._fillPolygons.M0,0.sin.curve._mergedShape.edge.ellipse.length.forEach.maxRandomnessOffset.curveStepCount.ceil.max.restore.setAttribute.evenodd.15GMDeRZ.56rExKkC.fillPolygons.randomizer.zigzagLines.strokeStyle._drawToContext.polygon.2513160JtuOeq.setLineDash.ymax.fillLineDashOffset.dashOffset.filter.toFixed.draw.sqrt.499112TfSfes.gen.data.map.transparent.hachureGap.stroke-dasharray.cos.strokeLineDashOffset.4560hflKQz.doubleLineOps.fixedDecimalPlaceDigits.config.1198845asAyPG.lineWidth.hachure.abs.49982kOBrli.imul.dashedLine.renderLines.fillSketch.none`.split(`.`);
  return C = function() {
    return e2;
  }, C();
}
function w(e2) {
  let t2 = r, n2 = [], i2 = (function(e3) {
    let t3 = J, n3 = [];
    for (; e3 !== ``; ) if (e3.match(/^([ \t\r\n,]+)/)) e3 = e3.substr(RegExp.$1.length);
    else if (e3.match(/^([aAcChHlLmMqQsStTvVzZ])/)) n3[n3[t3(430)]] = { type: v, text: RegExp.$1 }, e3 = e3.substr(RegExp.$1.length);
    else {
      if (!e3.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      n3[n3[t3(430)]] = { type: y, text: `` + parseFloat(RegExp.$1) }, e3 = e3.substr(RegExp.$1.length);
    }
    return n3[n3.length] = { type: b, text: `` }, n3;
  })(e2), a2 = `BOD`, o2 = 0, s2 = i2[o2];
  for (; !S(s2, b); ) {
    let r2 = 0, c2 = [];
    if (a2 === `BOD`) {
      if (s2.text !== `M` && s2.text !== `m`) return w(t2(424) + e2);
      o2++, r2 = x[s2.text], a2 = s2.text;
    } else S(s2, y) ? r2 = x[a2] : (o2++, r2 = x[s2.text], a2 = s2.text);
    if (!(o2 + r2 < i2.length)) throw Error(`Path data ended short`);
    for (let e3 = o2; e3 < o2 + r2; e3++) {
      let n3 = i2[e3];
      if (!S(n3, y)) throw Error(`Param not a number: ` + a2 + `,` + n3.text);
      c2[c2[t2(430)]] = +n3.text;
    }
    if (typeof x[a2] != `number`) throw Error(`Bad segment: ` + a2);
    {
      let e3 = { key: a2, data: c2 };
      n2.push(e3), o2 += r2, s2 = i2[o2], a2 === `M` && (a2 = `L`), a2 === `m` && (a2 = `l`);
    }
  }
  return n2;
}
function T(e2) {
  let t2 = r, n2 = 0, i2 = 0, a2 = 0, o2 = 0, s2 = [];
  for (let { key: r2, data: c2 } of e2) switch (r2) {
    case `M`:
      s2[t2(410)]({ key: `M`, data: [...c2] }), [n2, i2] = c2, [a2, o2] = c2;
      break;
    case `m`:
      n2 += c2[0], i2 += c2[1], s2[t2(410)]({ key: `M`, data: [n2, i2] }), a2 = n2, o2 = i2;
      break;
    case `L`:
      s2.push({ key: `L`, data: [...c2] }), [n2, i2] = c2;
      break;
    case `l`:
      n2 += c2[0], i2 += c2[1], s2.push({ key: `L`, data: [n2, i2] });
      break;
    case `C`:
      s2[t2(410)]({ key: `C`, data: [...c2] }), n2 = c2[4], i2 = c2[5];
      break;
    case `c`: {
      let e3 = c2[t2(459)]((e4, t3) => t3 % 2 ? e4 + i2 : e4 + n2);
      s2.push({ key: `C`, data: e3 }), n2 = e3[4], i2 = e3[5];
      break;
    }
    case `Q`:
      s2.push({ key: `Q`, data: [...c2] }), n2 = c2[2], i2 = c2[3];
      break;
    case `q`: {
      let e3 = c2.map((e4, t3) => t3 % 2 ? e4 + i2 : e4 + n2);
      s2.push({ key: `Q`, data: e3 }), n2 = e3[2], i2 = e3[3];
      break;
    }
    case `A`:
      s2.push({ key: `A`, data: [...c2] }), n2 = c2[5], i2 = c2[6];
      break;
    case `a`:
      n2 += c2[5], i2 += c2[6], s2[t2(410)]({ key: `A`, data: [c2[0], c2[1], c2[2], c2[3], c2[4], n2, i2] });
      break;
    case `H`:
      s2.push({ key: `H`, data: [...c2] }), n2 = c2[0];
      break;
    case `h`:
      n2 += c2[0], s2.push({ key: `H`, data: [n2] });
      break;
    case `V`:
      s2.push({ key: `V`, data: [...c2] }), i2 = c2[0];
      break;
    case `v`:
      i2 += c2[0], s2.push({ key: `V`, data: [i2] });
      break;
    case `S`:
      s2[t2(410)]({ key: `S`, data: [...c2] }), n2 = c2[2], i2 = c2[3];
      break;
    case `s`: {
      let e3 = c2.map((e4, t3) => t3 % 2 ? e4 + i2 : e4 + n2);
      s2.push({ key: `S`, data: e3 }), n2 = e3[2], i2 = e3[3];
      break;
    }
    case `T`:
      s2.push({ key: `T`, data: [...c2] }), n2 = c2[0], i2 = c2[1];
      break;
    case `t`:
      n2 += c2[0], i2 += c2[1], s2.push({ key: `T`, data: [n2, i2] });
      break;
    case `Z`:
    case `z`:
      s2.push({ key: `Z`, data: [] }), n2 = a2, i2 = o2;
  }
  return s2;
}
function E(e2) {
  let t2 = r, n2 = [], i2 = ``, a2 = 0, o2 = 0, s2 = 0, c2 = 0, l2 = 0, u2 = 0;
  for (let { key: r2, data: d2 } of e2) {
    switch (r2) {
      case `M`:
        n2.push({ key: `M`, data: [...d2] }), [a2, o2] = d2, [s2, c2] = d2;
        break;
      case `C`:
        n2.push({ key: `C`, data: [...d2] }), a2 = d2[4], o2 = d2[5], l2 = d2[2], u2 = d2[3];
        break;
      case `L`:
        n2[t2(410)]({ key: `L`, data: [...d2] }), [a2, o2] = d2;
        break;
      case `H`:
        a2 = d2[0], n2.push({ key: `L`, data: [a2, o2] });
        break;
      case `V`:
        o2 = d2[0], n2.push({ key: `L`, data: [a2, o2] });
        break;
      case `S`: {
        let e3 = 0, t3 = 0;
        i2 === `C` || i2 === `S` ? (e3 = a2 + (a2 - l2), t3 = o2 + (o2 - u2)) : (e3 = a2, t3 = o2), n2.push({ key: `C`, data: [e3, t3, ...d2] }), l2 = d2[0], u2 = d2[1], a2 = d2[2], o2 = d2[3];
        break;
      }
      case `T`: {
        let [e3, t3] = d2, r3 = 0, s3 = 0;
        i2 === `Q` || i2 === `T` ? (r3 = a2 + (a2 - l2), s3 = o2 + (o2 - u2)) : (r3 = a2, s3 = o2);
        let c3 = a2 + 2 * (r3 - a2) / 3, f2 = o2 + 2 * (s3 - o2) / 3, p2 = e3 + 2 * (r3 - e3) / 3, m2 = t3 + 2 * (s3 - t3) / 3;
        n2.push({ key: `C`, data: [c3, f2, p2, m2, e3, t3] }), l2 = r3, u2 = s3, a2 = e3, o2 = t3;
        break;
      }
      case `Q`: {
        let [e3, t3, r3, i3] = d2, s3 = a2 + 2 * (e3 - a2) / 3, c3 = o2 + 2 * (t3 - o2) / 3, f2 = r3 + 2 * (e3 - r3) / 3, p2 = i3 + 2 * (t3 - i3) / 3;
        n2.push({ key: `C`, data: [s3, c3, f2, p2, r3, i3] }), l2 = e3, u2 = t3, a2 = r3, o2 = i3;
        break;
      }
      case `A`: {
        let e3 = Math.abs(d2[0]), r3 = Math[t2(472)](d2[1]), i3 = d2[2], s3 = d2[3], c3 = d2[4], l3 = d2[5], u3 = d2[6];
        e3 === 0 || r3 === 0 ? (n2[t2(410)]({ key: `C`, data: [a2, o2, l3, u3, l3, u3] }), a2 = l3, o2 = u3) : (a2 !== l3 || o2 !== u3) && (ee(a2, o2, l3, u3, e3, r3, i3, s3, c3).forEach(function(e4) {
          n2[t2(410)]({ key: `C`, data: e4 });
        }), a2 = l3, o2 = u3);
        break;
      }
      case `Z`:
        n2.push({ key: `Z`, data: [] }), a2 = s2, o2 = c2;
    }
    i2 = r2;
  }
  return n2;
}
function D(e2, t2, n2) {
  let i2 = r;
  return [e2 * Math.cos(n2) - t2 * Math.sin(n2), e2 * Math.sin(n2) + t2 * Math[i2(463)](n2)];
}
function ee(e2, t2, n2, i2, a2, o2, s2, c2, l2, u2) {
  let d2 = r, f2 = (p2 = s2, Math.PI * p2 / 180);
  var p2;
  let m2 = [], h2 = 0, g2 = 0, _2 = 0, v2 = 0;
  if (u2) [h2, g2, _2, v2] = u2;
  else {
    [e2, t2] = D(e2, t2, -f2), [n2, i2] = D(n2, i2, -f2);
    let r2 = (e2 - n2) / 2, s3 = (t2 - i2) / 2, u3 = r2 * r2 / (a2 * a2) + s3 * s3 / (o2 * o2);
    u3 > 1 && (u3 = Math[d2(455)](u3), a2 *= u3, o2 *= u3);
    let p3 = a2 * a2, m3 = o2 * o2, y3 = p3 * m3 - p3 * s3 * s3 - m3 * r2 * r2, b3 = p3 * s3 * s3 + m3 * r2 * r2, x3 = (c2 === l2 ? -1 : 1) * Math.sqrt(Math.abs(y3 / b3));
    _2 = x3 * a2 * s3 / o2 + (e2 + n2) / 2, v2 = x3 * -o2 * r2 / a2 + (t2 + i2) / 2, h2 = Math.asin(parseFloat(((t2 - v2) / o2).toFixed(9))), g2 = Math.asin(parseFloat(((i2 - v2) / o2).toFixed(9))), e2 < _2 && (h2 = Math.PI - h2), n2 < _2 && (g2 = Math.PI - g2), h2 < 0 && (h2 = 2 * Math.PI + h2), g2 < 0 && (g2 = 2 * Math.PI + g2), l2 && h2 > g2 && (h2 -= 2 * Math.PI), !l2 && g2 > h2 && (g2 -= 2 * Math.PI);
  }
  let y2 = g2 - h2;
  if (Math[d2(472)](y2) > 120 * Math.PI / 180) {
    let e3 = g2, t3 = n2, r2 = i2;
    g2 = l2 && g2 > h2 ? h2 + 120 * Math.PI / 180 * 1 : h2 + 120 * Math.PI / 180 * -1, m2 = ee(n2 = _2 + a2 * Math.cos(g2), i2 = v2 + o2 * Math[d2(425)](g2), t3, r2, a2, o2, s2, 0, l2, [g2, e3, _2, v2]);
  }
  y2 = g2 - h2;
  let b2 = Math.cos(h2), x2 = Math.sin(h2), S2 = Math.cos(g2), C2 = Math.sin(g2), w2 = Math.tan(y2 / 4), T2 = 4 / 3 * a2 * w2, E2 = 4 / 3 * o2 * w2, O2 = [e2, t2], k2 = [e2 + T2 * x2, t2 - E2 * b2], A2 = [n2 + T2 * C2, i2 - E2 * S2], j2 = [n2, i2];
  if (k2[0] = 2 * O2[0] - k2[0], k2[1] = 2 * O2[1] - k2[1], u2) return [k2, A2, j2].concat(m2);
  {
    m2 = [k2, A2, j2].concat(m2);
    let e3 = [];
    for (let t3 = 0; t3 < m2.length; t3 += 3) {
      let n3 = D(m2[t3][0], m2[t3][1], f2), r2 = D(m2[t3 + 1][0], m2[t3 + 1][1], f2), i3 = D(m2[t3 + 2][0], m2[t3 + 2][1], f2);
      e3.push([n3[0], n3[1], r2[0], r2[1], i3[0], i3[1]]);
    }
    return e3;
  }
}
var O = { randOffset: function(e2, t2) {
  return L(e2, t2);
}, randOffsetWithRange: function(e2, t2, n2) {
  return I(e2, t2, n2);
}, ellipse: function(e2, t2, n2, r2, i2) {
  return N(e2, t2, i2, M(n2, r2, i2)).opset;
}, doubleLineOps: function(e2, t2, n2, r2, i2) {
  return R(e2, t2, n2, r2, i2, true);
} };
function k(e2, t2, n2, r2, i2) {
  return { type: `path`, ops: R(e2, t2, n2, r2, i2) };
}
function A(e2, t2, n2) {
  let r2 = (e2 || []).length;
  if (r2 > 2) {
    let i2 = [];
    for (let t3 = 0; t3 < r2 - 1; t3++) i2.push(...R(e2[t3][0], e2[t3][1], e2[t3 + 1][0], e2[t3 + 1][1], n2));
    return t2 && i2.push(...R(e2[r2 - 1][0], e2[r2 - 1][1], e2[0][0], e2[0][1], n2)), { type: `path`, ops: i2 };
  }
  return r2 === 2 ? k(e2[0][0], e2[0][1], e2[1][0], e2[1][1], n2) : { type: `path`, ops: [] };
}
function j(e2, t2, n2, r2, i2) {
  return (function(e3, t3) {
    return A(e3, true, t3);
  })([[e2, t2], [e2 + n2, t2], [e2 + n2, t2 + r2], [e2, t2 + r2]], i2);
}
function te(e2, t2) {
  let n2 = r;
  if (e2.length) {
    let r2 = typeof e2[0][0] == `number` ? [e2] : e2, i2 = B(r2[0], 1 * (1 + 0.2 * t2.roughness), t2), a2 = t2.disableMultiStroke ? [] : B(r2[0], 1.5 * (1 + 0.22 * t2.roughness), ie(t2));
    for (let e3 = 1; e3 < r2.length; e3++) {
      let n3 = r2[e3];
      if (n3.length) {
        let e4 = B(n3, 1 * (1 + 0.2 * t2.roughness), t2), r3 = t2.disableMultiStroke ? [] : B(n3, 1.5 * (1 + 0.22 * t2.roughness), ie(t2));
        for (let t3 of e4) t3.op !== `move` && i2.push(t3);
        for (let e5 of r3) e5.op !== `move` && a2.push(e5);
      }
    }
    return { type: `path`, ops: i2[n2(487)](a2) };
  }
  return { type: `path`, ops: [] };
}
function M(e2, t2, n2) {
  let i2 = Math[r(455)](2 * Math.PI * Math.sqrt(((e2 / 2) ** 2 + (t2 / 2) ** 2) / 2)), a2 = Math.ceil(Math.max(n2.curveStepCount, n2.curveStepCount / Math.sqrt(200) * i2)), o2 = 2 * Math.PI / a2, s2 = Math.abs(e2 / 2), c2 = Math.abs(t2 / 2), l2 = 1 - n2.curveFitting;
  return s2 += L(s2 * l2, n2), c2 += L(c2 * l2, n2), { increment: o2, rx: s2, ry: c2 };
}
function N(e2, t2, n2, r2) {
  let [i2, a2] = H(r2.increment, e2, t2, r2.rx, r2.ry, 1, r2.increment * I(0.1, I(0.4, 1, n2), n2), n2), o2 = V(i2, null, n2);
  if (!n2.disableMultiStroke && n2.roughness !== 0) {
    let [i3] = H(r2.increment, e2, t2, r2.rx, r2.ry, 1.5, 0, n2), a3 = V(i3, null, n2);
    o2 = o2.concat(a3);
  }
  return { estimatedPoints: a2, opset: { type: `path`, ops: o2 } };
}
function ne(e2, t2, n2, i2, a2, o2, s2, c2, l2) {
  let u2 = r, d2 = e2, f2 = t2, p2 = Math.abs(n2 / 2), m2 = Math.abs(i2 / 2);
  p2 += L(0.01 * p2, l2), m2 += L(0.01 * m2, l2);
  let h2 = a2, g2 = o2;
  for (; h2 < 0; ) h2 += 2 * Math.PI, g2 += 2 * Math.PI;
  g2 - h2 > 2 * Math.PI && (h2 = 0, g2 = 2 * Math.PI);
  let _2 = 2 * Math.PI / l2.curveStepCount, v2 = Math.min(_2 / 2, (g2 - h2) / 2), y2 = oe(v2, d2, f2, p2, m2, h2, g2, 1, l2);
  if (!l2.disableMultiStroke) {
    let e3 = oe(v2, d2, f2, p2, m2, h2, g2, 1.5, l2);
    y2.push(...e3);
  }
  return s2 && (c2 ? y2.push(...R(d2, f2, d2 + p2 * Math[u2(463)](h2), f2 + m2 * Math.sin(h2), l2), ...R(d2, f2, d2 + p2 * Math[u2(463)](g2), f2 + m2 * Math.sin(g2), l2)) : y2[u2(410)]({ op: `lineTo`, data: [d2, f2] }, { op: `lineTo`, data: [d2 + p2 * Math.cos(h2), f2 + m2 * Math[u2(425)](h2)] })), { type: `path`, ops: y2 };
}
function re(e2, t2) {
  let n2 = r, i2 = E(T(w(e2))), a2 = [], o2 = [0, 0], s2 = [0, 0];
  for (let { key: e3, data: r2 } of i2) switch (e3) {
    case `M`:
      s2 = [r2[0], r2[1]], o2 = [r2[0], r2[1]];
      break;
    case `L`:
      a2[n2(410)](...R(s2[0], s2[1], r2[0], r2[1], t2)), s2 = [r2[0], r2[1]];
      break;
    case `C`: {
      let [e4, n3, i3, o3, c2, l2] = r2;
      a2.push(...se(e4, n3, i3, o3, c2, l2, s2, t2)), s2 = [c2, l2];
      break;
    }
    case `Z`:
      a2.push(...R(s2[0], s2[1], o2[0], o2[1], t2)), s2 = [o2[0], o2[1]];
  }
  return { type: `path`, ops: a2 };
}
function P(e2, t2) {
  let n2 = r, i2 = [];
  for (let r2 of e2) if (r2.length) {
    let e3 = t2.maxRandomnessOffset || 0, a2 = r2.length;
    if (a2 > 2) {
      i2[n2(410)]({ op: `move`, data: [r2[0][0] + L(e3, t2), r2[0][1] + L(e3, t2)] });
      for (let n3 = 1; n3 < a2; n3++) i2.push({ op: `lineTo`, data: [r2[n3][0] + L(e3, t2), r2[n3][1] + L(e3, t2)] });
    }
  }
  return { type: n2(416), ops: i2 };
}
function F(e2, t2) {
  return (function(e3, t3) {
    let n2 = J, r2 = e3.fillStyle || n2(471);
    if (!g[r2]) switch (r2) {
      case n2(413):
        g[r2] || (g[r2] = new d(t3));
        break;
      case `cross-hatch`:
        g[r2] || (g[r2] = new f(t3));
        break;
      case `dots`:
        g[r2] || (g[r2] = new p(t3));
        break;
      case `dashed`:
        g[r2] || (g[r2] = new m(t3));
        break;
      case `zigzag-line`:
        g[r2] || (g[r2] = new h(t3));
        break;
      default:
        r2 = `hachure`, g[r2] || (g[r2] = new l(t3));
    }
    return g[r2];
  })(t2, O).fillPolygons(e2, t2);
}
function ie(e2) {
  let t2 = Object.assign({}, e2);
  return t2.randomizer = void 0, e2.seed && (t2.seed = e2.seed + 1), t2;
}
function ae(e2) {
  let t2 = r;
  return e2.randomizer || (e2.randomizer = new _(e2.seed || 0)), e2[t2(442)].next();
}
function I(e2, t2, n2, r2 = 1) {
  return n2.roughness * r2 * (ae(n2) * (t2 - e2) + e2);
}
function L(e2, t2, n2 = 1) {
  return I(-e2, e2, t2, n2);
}
function R(e2, t2, n2, i2, a2, o2 = false) {
  let s2 = r, c2 = o2 ? a2.disableMultiStrokeFill : a2[s2(488)], l2 = z(e2, t2, n2, i2, a2, true, false);
  if (c2) return l2;
  let u2 = z(e2, t2, n2, i2, a2, true, true);
  return l2[s2(487)](u2);
}
function z(e2, t2, n2, i2, a2, o2, s2) {
  let c2 = r, l2 = (e2 - n2) ** 2 + (t2 - i2) ** 2, u2 = Math[c2(455)](l2), d2 = 1;
  d2 = u2 < 200 ? 1 : u2 > 500 ? 0.4 : -16668e-7 * u2 + 1.233334;
  let f2 = a2.maxRandomnessOffset || 0;
  f2 * f2 * 100 > l2 && (f2 = u2 / 10);
  let p2 = f2 / 2, m2 = 0.2 + 0.2 * ae(a2), h2 = a2.bowing * a2.maxRandomnessOffset * (i2 - t2) / 200, g2 = a2.bowing * a2.maxRandomnessOffset * (e2 - n2) / 200;
  h2 = L(h2, a2, d2), g2 = L(g2, a2, d2);
  let _2 = [], v2 = () => L(p2, a2, d2), y2 = () => L(f2, a2, d2), b2 = a2.preserveVertices;
  return o2 && (s2 ? _2[c2(410)]({ op: `move`, data: [e2 + (b2 ? 0 : v2()), t2 + (b2 ? 0 : v2())] }) : _2[c2(410)]({ op: c2(407), data: [e2 + (b2 ? 0 : L(f2, a2, d2)), t2 + (b2 ? 0 : L(f2, a2, d2))] })), s2 ? _2.push({ op: `bcurveTo`, data: [h2 + e2 + (n2 - e2) * m2 + v2(), g2 + t2 + (i2 - t2) * m2 + v2(), h2 + e2 + 2 * (n2 - e2) * m2 + v2(), g2 + t2 + 2 * (i2 - t2) * m2 + v2(), n2 + (b2 ? 0 : v2()), i2 + (b2 ? 0 : v2())] }) : _2[c2(410)]({ op: `bcurveTo`, data: [h2 + e2 + (n2 - e2) * m2 + y2(), g2 + t2 + (i2 - t2) * m2 + y2(), h2 + e2 + 2 * (n2 - e2) * m2 + y2(), g2 + t2 + 2 * (i2 - t2) * m2 + y2(), n2 + (b2 ? 0 : y2()), i2 + (b2 ? 0 : y2())] }), _2;
}
function B(e2, t2, n2) {
  if (!e2.length) return [];
  let r2 = [];
  r2.push([e2[0][0] + L(t2, n2), e2[0][1] + L(t2, n2)]), r2.push([e2[0][0] + L(t2, n2), e2[0][1] + L(t2, n2)]);
  for (let i2 = 1; i2 < e2.length; i2++) r2.push([e2[i2][0] + L(t2, n2), e2[i2][1] + L(t2, n2)]), i2 === e2.length - 1 && r2.push([e2[i2][0] + L(t2, n2), e2[i2][1] + L(t2, n2)]);
  return V(r2, null, n2);
}
function V(e2, t2, n2) {
  let i2 = r, a2 = e2.length, o2 = [];
  if (a2 > 3) {
    let r2 = [], s2 = 1 - n2.curveTightness;
    o2.push({ op: `move`, data: [e2[1][0], e2[1][1]] });
    for (let t3 = 1; t3 + 2 < a2; t3++) {
      let n3 = e2[t3];
      r2[0] = [n3[0], n3[1]], r2[1] = [n3[0] + (s2 * e2[t3 + 1][0] - s2 * e2[t3 - 1][0]) / 6, n3[1] + (s2 * e2[t3 + 1][1] - s2 * e2[t3 - 1][1]) / 6], r2[2] = [e2[t3 + 1][0] + (s2 * e2[t3][0] - s2 * e2[t3 + 2][0]) / 6, e2[t3 + 1][1] + (s2 * e2[t3][1] - s2 * e2[t3 + 2][1]) / 6], r2[3] = [e2[t3 + 1][0], e2[t3 + 1][1]], o2.push({ op: `bcurveTo`, data: [r2[1][0], r2[1][1], r2[2][0], r2[2][1], r2[3][0], r2[3][1]] });
    }
    if (t2 && t2.length === 2) {
      let e3 = n2[i2(432)];
      o2.push({ op: `lineTo`, data: [t2[0] + L(e3, n2), t2[1] + L(e3, n2)] });
    }
  } else a2 === 3 ? (o2.push({ op: `move`, data: [e2[1][0], e2[1][1]] }), o2.push({ op: `bcurveTo`, data: [e2[1][0], e2[1][1], e2[2][0], e2[2][1], e2[2][0], e2[2][1]] })) : a2 === 2 && o2.push(...z(e2[0][0], e2[0][1], e2[1][0], e2[1][1], n2, true, true));
  return o2;
}
function H(e2, t2, n2, i2, a2, o2, s2, c2) {
  let l2 = r, u2 = [], d2 = [];
  if (c2.roughness === 0) {
    e2 /= 4, d2[l2(410)]([t2 + i2 * Math.cos(-e2), n2 + a2 * Math.sin(-e2)]);
    for (let r2 = 0; r2 <= 2 * Math.PI; r2 += e2) {
      let e3 = [t2 + i2 * Math[l2(463)](r2), n2 + a2 * Math[l2(425)](r2)];
      u2[l2(410)](e3), d2.push(e3);
    }
    d2.push([t2 + i2 * Math.cos(0), n2 + a2 * Math.sin(0)]), d2.push([t2 + i2 * Math.cos(e2), n2 + a2 * Math.sin(e2)]);
  } else {
    let r2 = L(0.5, c2) - Math.PI / 2;
    d2.push([L(o2, c2) + t2 + 0.9 * i2 * Math.cos(r2 - e2), L(o2, c2) + n2 + 0.9 * a2 * Math[l2(425)](r2 - e2)]);
    let f2 = 2 * Math.PI + r2 - 0.01;
    for (let s3 = r2; s3 < f2; s3 += e2) {
      let e3 = [L(o2, c2) + t2 + i2 * Math.cos(s3), L(o2, c2) + n2 + a2 * Math[l2(425)](s3)];
      u2.push(e3), d2.push(e3);
    }
    d2.push([L(o2, c2) + t2 + i2 * Math[l2(463)](r2 + 2 * Math.PI + 0.5 * s2), L(o2, c2) + n2 + a2 * Math[l2(425)](r2 + 2 * Math.PI + 0.5 * s2)]), d2.push([L(o2, c2) + t2 + 0.98 * i2 * Math[l2(463)](r2 + s2), L(o2, c2) + n2 + 0.98 * a2 * Math.sin(r2 + s2)]), d2.push([L(o2, c2) + t2 + 0.9 * i2 * Math.cos(r2 + 0.5 * s2), L(o2, c2) + n2 + 0.9 * a2 * Math.sin(r2 + 0.5 * s2)]);
  }
  return [d2, u2];
}
function oe(e2, t2, n2, i2, a2, o2, s2, c2, l2) {
  let u2 = r, d2 = o2 + L(0.1, l2), f2 = [];
  f2.push([L(c2, l2) + t2 + 0.9 * i2 * Math.cos(d2 - e2), L(c2, l2) + n2 + 0.9 * a2 * Math[u2(425)](d2 - e2)]);
  for (let r2 = d2; r2 <= s2; r2 += e2) f2.push([L(c2, l2) + t2 + i2 * Math.cos(r2), L(c2, l2) + n2 + a2 * Math.sin(r2)]);
  return f2[u2(410)]([t2 + i2 * Math.cos(s2), n2 + a2 * Math.sin(s2)]), f2.push([t2 + i2 * Math.cos(s2), n2 + a2 * Math.sin(s2)]), V(f2, null, l2);
}
function se(e2, t2, n2, i2, a2, o2, s2, c2) {
  let l2 = r, u2 = [], d2 = [c2.maxRandomnessOffset || 1, (c2.maxRandomnessOffset || 1) + 0.3], f2 = [0, 0], p2 = c2[l2(488)] ? 1 : 2, m2 = c2.preserveVertices;
  for (let r2 = 0; r2 < p2; r2++) r2 === 0 ? u2[l2(410)]({ op: l2(407), data: [s2[0], s2[1]] }) : u2.push({ op: `move`, data: [s2[0] + (m2 ? 0 : L(d2[0], c2)), s2[1] + (m2 ? 0 : L(d2[0], c2))] }), f2 = m2 ? [a2, o2] : [a2 + L(d2[r2], c2), o2 + L(d2[r2], c2)], u2.push({ op: `bcurveTo`, data: [e2 + L(d2[r2], c2), t2 + L(d2[r2], c2), n2 + L(d2[r2], c2), i2 + L(d2[r2], c2), f2[0], f2[1]] });
  return u2;
}
function U(e2) {
  return [...e2];
}
function ce(e2, t2 = 0) {
  let n2 = r, i2 = e2.length;
  if (i2 < 3) throw Error(`A curve must have at least three points.`);
  let a2 = [];
  if (i2 === 3) a2.push(U(e2[0]), U(e2[1]), U(e2[2]), U(e2[2]));
  else {
    let r2 = [];
    r2.push(e2[0], e2[0]);
    for (let t3 = 1; t3 < e2.length; t3++) r2[n2(410)](e2[t3]), t3 === e2.length - 1 && r2[n2(410)](e2[t3]);
    let i3 = [], o2 = 1 - t2;
    a2.push(U(r2[0]));
    for (let e3 = 1; e3 + 2 < r2[n2(430)]; e3++) {
      let t3 = r2[e3];
      i3[0] = [t3[0], t3[1]], i3[1] = [t3[0] + (o2 * r2[e3 + 1][0] - o2 * r2[e3 - 1][0]) / 6, t3[1] + (o2 * r2[e3 + 1][1] - o2 * r2[e3 - 1][1]) / 6], i3[2] = [r2[e3 + 1][0] + (o2 * r2[e3][0] - o2 * r2[e3 + 2][0]) / 6, r2[e3 + 1][1] + (o2 * r2[e3][1] - o2 * r2[e3 + 2][1]) / 6], i3[3] = [r2[e3 + 1][0], r2[e3 + 1][1]], a2.push(i3[1], i3[2], i3[3]);
    }
  }
  return a2;
}
function W(e2, t2) {
  return (e2[0] - t2[0]) ** 2 + (e2[1] - t2[1]) ** 2;
}
function le(e2, t2, n2) {
  let i2 = r, a2 = W(t2, n2);
  if (a2 === 0) return W(e2, t2);
  let o2 = ((e2[0] - t2[0]) * (n2[0] - t2[0]) + (e2[1] - t2[1]) * (n2[1] - t2[1])) / a2;
  return o2 = Math[i2(435)](0, Math.min(1, o2)), W(e2, G(t2, n2, o2));
}
function G(e2, t2, n2) {
  return [e2[0] + (t2[0] - e2[0]) * n2, e2[1] + (t2[1] - e2[1]) * n2];
}
function K(e2, t2, n2, r2) {
  let i2 = r2 || [];
  if ((function(e3, t3) {
    let n3 = e3[t3 + 0], r3 = e3[t3 + 1], i3 = e3[t3 + 2], a3 = e3[t3 + 3], o3 = 3 * r3[0] - 2 * n3[0] - a3[0];
    o3 *= o3;
    let s2 = 3 * r3[1] - 2 * n3[1] - a3[1];
    s2 *= s2;
    let c2 = 3 * i3[0] - 2 * a3[0] - n3[0];
    c2 *= c2;
    let l2 = 3 * i3[1] - 2 * a3[1] - n3[1];
    return l2 *= l2, o3 < c2 && (o3 = c2), s2 < l2 && (s2 = l2), o3 + s2;
  })(e2, t2) < n2) {
    let n3 = e2[t2 + 0];
    i2.length ? (a2 = i2[i2.length - 1], o2 = n3, Math.sqrt(W(a2, o2))) > 1 && i2.push(n3) : i2.push(n3), i2.push(e2[t2 + 3]);
  } else {
    let r3 = 0.5, a3 = e2[t2 + 0], o3 = e2[t2 + 1], s2 = e2[t2 + 2], c2 = e2[t2 + 3], l2 = G(a3, o3, r3), u2 = G(o3, s2, r3), d2 = G(s2, c2, r3), f2 = G(l2, u2, r3), p2 = G(u2, d2, r3), m2 = G(f2, p2, r3);
    K([a3, l2, f2, m2], 0, n2, i2), K([m2, p2, d2, c2], 0, n2, i2);
  }
  var a2, o2;
  return i2;
}
function ue(e2, t2) {
  return q(e2, 0, e2.length, t2);
}
function q(e2, t2, n2, r2, i2) {
  let a2 = i2 || [], o2 = e2[t2], s2 = e2[n2 - 1], c2 = 0, l2 = 1;
  for (let r3 = t2 + 1; r3 < n2 - 1; ++r3) {
    let t3 = le(e2[r3], o2, s2);
    t3 > c2 && (c2 = t3, l2 = r3);
  }
  return Math.sqrt(c2) > r2 ? (q(e2, t2, l2 + 1, r2, a2), q(e2, l2, n2, r2, a2)) : (a2.length || a2.push(o2), a2.push(s2)), a2;
}
function J(e2, t2) {
  return e2 -= 407, C()[e2];
}
function Y(e2, t2 = 0.15, n2) {
  let r2 = [], i2 = (e2.length - 1) / 3;
  for (let n3 = 0; n3 < i2; n3++) K(e2, 3 * n3, t2, r2);
  return n2 && n2 > 0 ? q(r2, 0, r2.length, n2) : r2;
}
var X = r(478), Z = class {
  constructor(e2) {
    let t2 = r;
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: `#000`, strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: `hachure`, fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: false, disableMultiStrokeFill: false, preserveVertices: false, fillShapeRoughnessGain: 0.8 }, this.config = e2 || {}, this.config.options && (this.defaultOptions = this._o(this[t2(468)].options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(e2) {
    return e2 ? Object[r(412)]({}, this.defaultOptions, e2) : this.defaultOptions;
  }
  _d(e2, t2, n2) {
    return { shape: e2, sets: t2 || [], options: n2 || this.defaultOptions };
  }
  line(e2, t2, n2, r2, i2) {
    let a2 = this._o(i2);
    return this._d(`line`, [k(e2, t2, n2, r2, a2)], a2);
  }
  rectangle(e2, t2, n2, i2, a2) {
    let o2 = r, s2 = this._o(a2), c2 = [], l2 = j(e2, t2, n2, i2, s2);
    if (s2[o2(479)]) {
      let r2 = [[e2, t2], [e2 + n2, t2], [e2 + n2, t2 + i2], [e2, t2 + i2]];
      s2.fillStyle === o2(411) ? c2.push(P([r2], s2)) : c2.push(F([r2], s2));
    }
    return s2[o2(483)] !== X && c2.push(l2), this._d(`rectangle`, c2, s2);
  }
  ellipse(e2, t2, n2, i2, a2) {
    let o2 = r, s2 = this._o(a2), c2 = [], l2 = M(n2, i2, s2), u2 = N(e2, t2, s2, l2);
    if (s2[o2(479)]) if (s2.fillStyle === `solid`) {
      let n3 = N(e2, t2, s2, l2)[o2(419)];
      n3.type = `fillPath`, c2.push(n3);
    } else c2.push(F([u2.estimatedPoints], s2));
    return s2[o2(483)] !== X && c2.push(u2.opset), this._d(`ellipse`, c2, s2);
  }
  circle(e2, t2, n2, i2) {
    let a2 = r, o2 = this[a2(429)](e2, t2, n2, n2, i2);
    return o2[a2(408)] = a2(484), o2;
  }
  linearPath(e2, t2) {
    let n2 = this._o(t2);
    return this._d(`linearPath`, [A(e2, false, n2)], n2);
  }
  [r(421)](e2, t2, n2, i2, a2, o2, s2 = false, c2) {
    let l2 = r, u2 = this._o(c2), d2 = [], f2 = ne(e2, t2, n2, i2, a2, o2, s2, true, u2);
    if (s2 && u2.fill) if (u2.fillStyle === `solid`) {
      let r2 = Object.assign({}, u2);
      r2.disableMultiStroke = true;
      let s3 = ne(e2, t2, n2, i2, a2, o2, true, false, r2);
      s3.type = l2(416), d2[l2(410)](s3);
    } else d2.push((function(e3, t3, n3, r2, i3, a3, o3) {
      let s3 = l2, c3 = e3, u3 = t3, d3 = Math[s3(472)](n3 / 2), f3 = Math.abs(r2 / 2);
      d3 += L(0.01 * d3, o3), f3 += L(0.01 * f3, o3);
      let p2 = i3, m2 = a3;
      for (; p2 < 0; ) p2 += 2 * Math.PI, m2 += 2 * Math.PI;
      m2 - p2 > 2 * Math.PI && (p2 = 0, m2 = 2 * Math.PI);
      let h2 = (m2 - p2) / o3[s3(433)], g2 = [];
      for (let e4 = p2; e4 <= m2; e4 += h2) g2.push([c3 + d3 * Math[s3(463)](e4), u3 + f3 * Math[s3(425)](e4)]);
      return g2.push([c3 + d3 * Math.cos(m2), u3 + f3 * Math[s3(425)](m2)]), g2.push([c3, u3]), F([g2], o3);
    })(e2, t2, n2, i2, a2, o2, u2));
    return u2.stroke !== X && d2.push(f2), this._d(`arc`, d2, u2);
  }
  curve(e2, t2) {
    let n2 = r, i2 = this._o(t2), a2 = [], o2 = te(e2, i2);
    if (i2.fill && i2.fill !== X) if (i2.fillStyle === `solid`) {
      let t3 = te(e2, Object.assign(Object.assign({}, i2), { disableMultiStroke: true, roughness: i2.roughness ? i2.roughness + i2.fillShapeRoughnessGain : 0 }));
      a2.push({ type: `fillPath`, ops: this._mergedShape(t3.ops) });
    } else {
      let t3 = [], r2 = e2;
      if (r2.length) {
        let e3 = typeof r2[0][0] == `number` ? [r2] : r2;
        for (let r3 of e3) r3.length < 3 ? t3[n2(410)](...r3) : r3.length === 3 ? t3.push(...Y(ce([r3[0], r3[0], r3[1], r3[2]]), 10, (1 + i2.roughness) / 2)) : t3.push(...Y(ce(r3), 10, (1 + i2.roughness) / 2));
      }
      t3[n2(430)] && a2.push(F([t3], i2));
    }
    return i2.stroke !== X && a2.push(o2), this._d(`curve`, a2, i2);
  }
  polygon(e2, t2) {
    let n2 = r, i2 = this._o(t2), a2 = [], o2 = A(e2, true, i2);
    return i2.fill && (i2.fillStyle === `solid` ? a2.push(P([e2], i2)) : a2[n2(410)](F([e2], i2))), i2.stroke !== X && a2[n2(410)](o2), this._d(n2(446), a2, i2);
  }
  path(e2, t2) {
    let n2 = r, i2 = this._o(t2), a2 = [];
    if (!e2) return this._d(n2(489), a2, i2);
    e2 = (e2 || ``).replace(/\n/g, ` `).replace(/(-\s)/g, `-`).replace(`/(ss)/g`, ` `);
    let o2 = i2.fill && i2.fill !== n2(460) && i2.fill !== X, s2 = i2[n2(483)] !== X, c2 = !!(i2.simplification && i2.simplification < 1), l2 = (function(e3, t3, r2) {
      let i3 = n2, a3 = E(T(w(e3))), o3 = [], s3 = [], c3 = [0, 0], l3 = [], u3 = () => {
        l3.length >= 4 && s3.push(...Y(l3, t3)), l3 = [];
      }, d2 = () => {
        u3(), s3.length && (o3.push(s3), s3 = []);
      };
      for (let { key: e4, data: t4 } of a3) switch (e4) {
        case `M`:
          d2(), c3 = [t4[0], t4[1]], s3[i3(410)](c3);
          break;
        case `L`:
          u3(), s3.push([t4[0], t4[1]]);
          break;
        case `C`:
          if (!l3[i3(430)]) {
            let e5 = s3.length ? s3[s3.length - 1] : c3;
            l3.push([e5[0], e5[1]]);
          }
          l3.push([t4[0], t4[1]]), l3.push([t4[2], t4[3]]), l3.push([t4[4], t4[5]]);
          break;
        case `Z`:
          u3(), s3.push([c3[0], c3[1]]);
      }
      if (d2(), !r2) return o3;
      let f2 = [];
      for (let e4 of o3) {
        let t4 = ue(e4, r2);
        t4.length && f2.push(t4);
      }
      return f2;
    })(e2, 1, c2 ? 4 - 4 * (i2.simplification || 1) : (1 + i2.roughness) / 2), u2 = re(e2, i2);
    if (o2) if (i2.fillStyle === `solid`) if (l2.length === 1) {
      let t3 = re(e2, Object.assign(Object.assign({}, i2), { disableMultiStroke: true, roughness: i2.roughness ? i2.roughness + i2.fillShapeRoughnessGain : 0 }));
      a2.push({ type: n2(416), ops: this._mergedShape(t3.ops) });
    } else a2.push(P(l2, i2));
    else a2.push(F(l2, i2));
    return s2 && (c2 ? l2.forEach((e3) => {
      a2.push(A(e3, false, i2));
    }) : a2.push(u2)), this._d(`path`, a2, i2);
  }
  opsToPath(e2, t2) {
    let n2 = ``;
    for (let r2 of e2.ops) {
      let e3 = typeof t2 == `number` && t2 >= 0 ? r2.data.map((e4) => +e4.toFixed(t2)) : r2.data;
      switch (r2.op) {
        case `move`:
          n2 += `M` + e3[0] + ` ` + e3[1] + ` `;
          break;
        case `bcurveTo`:
          n2 += `C` + e3[0] + ` ` + e3[1] + `, ` + e3[2] + ` ` + e3[3] + `, ` + e3[4] + ` ` + e3[5] + ` `;
          break;
        case `lineTo`:
          n2 += `L` + e3[0] + ` ` + e3[1] + ` `;
      }
    }
    return n2.trim();
  }
  toPaths(e2) {
    let t2 = e2.sets || [], n2 = e2.options || this.defaultOptions, r2 = [];
    for (let e3 of t2) {
      let t3 = null;
      switch (e3.type) {
        case `path`:
          t3 = { d: this.opsToPath(e3), stroke: n2.stroke, strokeWidth: n2.strokeWidth, fill: X };
          break;
        case `fillPath`:
          t3 = { d: this.opsToPath(e3), stroke: X, strokeWidth: 0, fill: n2.fill || X };
          break;
        case `fillSketch`:
          t3 = this.fillSketch(e3, n2);
      }
      t3 && r2.push(t3);
    }
    return r2;
  }
  fillSketch(e2, t2) {
    let n2 = t2.fillWeight;
    return n2 < 0 && (n2 = t2.strokeWidth / 2), { d: this.opsToPath(e2), stroke: t2.fill || X, strokeWidth: n2, fill: X };
  }
  [r(427)](e2) {
    return e2.filter((e3, t2) => t2 === 0 || e3.op !== `move`);
  }
}, de = class {
  constructor(e2, t2) {
    this.canvas = e2, this.ctx = this.canvas.getContext(`2d`), this.gen = new Z(t2);
  }
  [r(454)](e2) {
    let t2 = r, n2 = e2.sets || [], i2 = e2.options || this.getDefaultOptions(), a2 = this.ctx, o2 = e2.options[t2(467)];
    for (let r2 of n2) switch (r2[t2(491)]) {
      case t2(489):
        a2.save(), a2.strokeStyle = i2.stroke === t2(478) ? `transparent` : i2.stroke, a2[t2(470)] = i2.strokeWidth, i2.strokeLineDash && a2[t2(448)](i2.strokeLineDash), i2.strokeLineDashOffset && (a2.lineDashOffset = i2.strokeLineDashOffset), this._drawToContext(a2, r2, o2), a2[t2(436)]();
        break;
      case `fillPath`: {
        a2.save(), a2.fillStyle = i2.fill || ``;
        let n3 = e2[t2(408)] === `curve` || e2.shape === `polygon` || e2.shape === `path` ? t2(438) : `nonzero`;
        this[t2(445)](a2, r2, o2, n3), a2.restore();
        break;
      }
      case `fillSketch`:
        this.fillSketch(a2, r2, i2);
    }
  }
  fillSketch(e2, t2, n2) {
    let i2 = r, a2 = n2.fillWeight;
    a2 < 0 && (a2 = n2.strokeWidth / 2), e2.save(), n2.fillLineDash && e2.setLineDash(n2.fillLineDash), n2.fillLineDashOffset && (e2.lineDashOffset = n2.fillLineDashOffset), e2[i2(444)] = n2[i2(479)] || ``, e2[i2(470)] = a2, this._drawToContext(e2, t2, n2.fixedDecimalPlaceDigits), e2[i2(436)]();
  }
  _drawToContext(e2, t2, n2, i2 = r(415)) {
    let a2 = r;
    e2.beginPath();
    for (let r2 of t2.ops) {
      let t3 = typeof n2 == a2(422) && n2 >= 0 ? r2[a2(458)].map((e3) => +e3[a2(453)](n2)) : r2.data;
      switch (r2.op) {
        case `move`:
          e2.moveTo(t3[0], t3[1]);
          break;
        case `bcurveTo`:
          e2.bezierCurveTo(t3[0], t3[1], t3[2], t3[3], t3[4], t3[5]);
          break;
        case `lineTo`:
          e2.lineTo(t3[0], t3[1]);
      }
    }
    t2[a2(491)] === `fillPath` ? e2.fill(i2) : e2.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(e2, t2, n2, i2, a2) {
    let o2 = r, s2 = this[o2(457)].line(e2, t2, n2, i2, a2);
    return this.draw(s2), s2;
  }
  rectangle(e2, t2, n2, i2, a2) {
    let o2 = r, s2 = this.gen.rectangle(e2, t2, n2, i2, a2);
    return this[o2(454)](s2), s2;
  }
  ellipse(e2, t2, n2, r2, i2) {
    let a2 = this.gen.ellipse(e2, t2, n2, r2, i2);
    return this.draw(a2), a2;
  }
  circle(e2, t2, n2, r2) {
    let i2 = this.gen.circle(e2, t2, n2, r2);
    return this.draw(i2), i2;
  }
  linearPath(e2, t2) {
    let n2 = this.gen.linearPath(e2, t2);
    return this.draw(n2), n2;
  }
  [r(446)](e2, t2) {
    let n2 = r, i2 = this.gen.polygon(e2, t2);
    return this[n2(454)](i2), i2;
  }
  [r(421)](e2, t2, n2, i2, a2, o2, s2 = false, c2) {
    let l2 = r, u2 = this.gen[l2(421)](e2, t2, n2, i2, a2, o2, s2, c2);
    return this.draw(u2), u2;
  }
  curve(e2, t2) {
    let n2 = this.gen.curve(e2, t2);
    return this.draw(n2), n2;
  }
  path(e2, t2) {
    let n2 = r, i2 = this[n2(457)].path(e2, t2);
    return this.draw(i2), i2;
  }
}, Q = `http://www.w3.org/2000/svg`, fe = class {
  constructor(e2, t2) {
    let n2 = r;
    this[n2(482)] = e2, this[n2(457)] = new Z(t2);
  }
  draw(e2) {
    let t2 = r, n2 = e2.sets || [], i2 = e2.options || this.getDefaultOptions(), a2 = this[t2(482)].ownerDocument || window.document, o2 = a2.createElementNS(Q, `g`), s2 = e2.options.fixedDecimalPlaceDigits;
    for (let r2 of n2) {
      let n3 = null;
      switch (r2.type) {
        case `path`:
          n3 = a2.createElementNS(Q, `path`), n3[t2(437)](`d`, this[t2(414)](r2, s2)), n3.setAttribute(`stroke`, i2.stroke), n3[t2(437)](t2(481), i2[t2(486)] + ``), n3.setAttribute(`fill`, t2(478)), i2.strokeLineDash && n3[t2(437)](t2(462), i2.strokeLineDash.join(` `).trim()), i2[t2(464)] && n3.setAttribute(`stroke-dashoffset`, `` + i2.strokeLineDashOffset);
          break;
        case `fillPath`:
          n3 = a2.createElementNS(Q, `path`), n3[t2(437)](`d`, this.opsToPath(r2, s2)), n3[t2(437)](`stroke`, `none`), n3.setAttribute(`stroke-width`, `0`), n3.setAttribute(`fill`, i2[t2(479)] || ``), e2.shape !== t2(426) && e2.shape !== `polygon` || n3.setAttribute(`fill-rule`, `evenodd`);
          break;
        case `fillSketch`:
          n3 = this.fillSketch(a2, r2, i2);
      }
      n3 && o2.appendChild(n3);
    }
    return o2;
  }
  fillSketch(e2, t2, n2) {
    let i2 = r, a2 = n2.fillWeight;
    a2 < 0 && (a2 = n2.strokeWidth / 2);
    let o2 = e2.createElementNS(Q, `path`);
    return o2.setAttribute(`d`, this.opsToPath(t2, n2.fixedDecimalPlaceDigits)), o2.setAttribute(`stroke`, n2.fill || ``), o2.setAttribute(`stroke-width`, a2 + ``), o2.setAttribute(`fill`, `none`), n2.fillLineDash && o2.setAttribute(`stroke-dasharray`, n2.fillLineDash.join(` `).trim()), n2.fillLineDashOffset && o2.setAttribute(`stroke-dashoffset`, `` + n2[i2(450)]), o2;
  }
  get generator() {
    let e2 = r;
    return this[e2(457)];
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(e2, t2) {
    return this.gen.opsToPath(e2, t2);
  }
  line(e2, t2, n2, i2, a2) {
    let o2 = r, s2 = this[o2(457)].line(e2, t2, n2, i2, a2);
    return this[o2(454)](s2);
  }
  rectangle(e2, t2, n2, r2, i2) {
    let a2 = this.gen.rectangle(e2, t2, n2, r2, i2);
    return this.draw(a2);
  }
  ellipse(e2, t2, n2, i2, a2) {
    let o2 = r, s2 = this[o2(457)].ellipse(e2, t2, n2, i2, a2);
    return this.draw(s2);
  }
  [r(484)](e2, t2, n2, r2) {
    let i2 = this.gen.circle(e2, t2, n2, r2);
    return this.draw(i2);
  }
  linearPath(e2, t2) {
    let n2 = this.gen.linearPath(e2, t2);
    return this.draw(n2);
  }
  [r(446)](e2, t2) {
    let n2 = this.gen.polygon(e2, t2);
    return this.draw(n2);
  }
  arc(e2, t2, n2, i2, a2, o2, s2 = false, c2) {
    let l2 = r, u2 = this.gen[l2(421)](e2, t2, n2, i2, a2, o2, s2, c2);
    return this.draw(u2);
  }
  [r(426)](e2, t2) {
    let n2 = this.gen.curve(e2, t2);
    return this.draw(n2);
  }
  path(e2, t2) {
    let n2 = this.gen.path(e2, t2);
    return this.draw(n2);
  }
}, $ = { canvas: (e2, t2) => new de(e2, t2), svg: (e2, t2) => new fe(e2, t2), generator: (e2) => new Z(e2), newSeed: () => Z.newSeed() };
export {
  $ as n,
  n as t
};
