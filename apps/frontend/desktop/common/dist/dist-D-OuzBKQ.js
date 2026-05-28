import { _ as e, g as t, h as n, m as r, p as i, v as a } from "./index-D-g3WoLo.js";
var o = A;
(function(e2, t2) {
  let n2 = A, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(571)) / 1 * (parseInt(n2(490)) / 2) + -parseInt(n2(354)) / 3 * (-parseInt(n2(454)) / 4) + parseInt(n2(530)) / 5 * (parseInt(n2(439)) / 6) + parseInt(n2(484)) / 7 + -parseInt(n2(297)) / 8 * (parseInt(n2(516)) / 9) + parseInt(n2(305)) / 10 * (parseInt(n2(407)) / 11) + -parseInt(n2(542)) / 12 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Y, 339122);
function s(e2, t2, n2 = 0, r2 = e2.length - 1, i2 = l) {
  let a2 = A;
  for (; r2 > n2; ) {
    if (r2 - n2 > 600) {
      let o3 = r2 - n2 + 1, c2 = t2 - n2 + 1, l3 = Math.log(o3), u3 = 0.5 * Math.exp(2 * l3 / 3), d2 = 0.5 * Math.sqrt(l3 * u3 * (o3 - u3) / o3) * (c2 - o3 / 2 < 0 ? -1 : 1);
      s(e2, t2, Math.max(n2, Math.floor(t2 - c2 * u3 / o3 + d2)), Math.min(r2, Math[a2(339)](t2 + (o3 - c2) * u3 / o3 + d2)), i2);
    }
    let o2 = e2[t2], l2 = n2, u2 = r2;
    for (c(e2, n2, t2), i2(e2[r2], o2) > 0 && c(e2, n2, r2); l2 < u2; ) {
      for (c(e2, l2, u2), l2++, u2--; i2(e2[l2], o2) < 0; ) l2++;
      for (; i2(e2[u2], o2) > 0; ) u2--;
    }
    i2(e2[n2], o2) === 0 ? c(e2, n2, u2) : (u2++, c(e2, u2, r2)), u2 <= t2 && (n2 = u2 + 1), t2 <= u2 && (r2 = u2 - 1);
  }
}
function c(e2, t2, n2) {
  let r2 = e2[t2];
  e2[t2] = e2[n2], e2[n2] = r2;
}
function l(e2, t2) {
  return e2 < t2 ? -1 : +(e2 > t2);
}
var u = class {
  constructor(e2 = 9) {
    let t2 = A;
    this._maxEntries = Math.max(4, e2), this._minEntries = Math.max(2, Math.ceil(this[t2(585)] * 0.4)), this[t2(431)]();
  }
  [o(546)]() {
    let e2 = o;
    return this[e2(492)](this.data, []);
  }
  [o(441)](e2) {
    let t2 = this.data, n2 = [];
    if (!S(e2, t2)) return n2;
    let r2 = this.toBBox, i2 = [];
    for (; t2; ) {
      for (let a2 = 0; a2 < t2.children.length; a2++) {
        let o2 = t2.children[a2], s2 = t2.leaf ? r2(o2) : o2;
        S(e2, s2) && (t2.leaf ? n2.push(o2) : x(e2, s2) ? this._all(o2, n2) : i2.push(o2));
      }
      t2 = i2.pop();
    }
    return n2;
  }
  collides(e2) {
    let t2 = o, n2 = this[t2(463)];
    if (!S(e2, n2)) return false;
    let r2 = [];
    for (; n2; ) {
      for (let t3 = 0; t3 < n2.children.length; t3++) {
        let i2 = n2.children[t3], a2 = n2.leaf ? this.toBBox(i2) : i2;
        if (S(e2, a2)) {
          if (n2.leaf || x(e2, a2)) return true;
          r2.push(i2);
        }
      }
      n2 = r2.pop();
    }
    return false;
  }
  load(e2) {
    let t2 = o;
    if (!(e2 && e2[t2(321)])) return this;
    if (e2.length < this._minEntries) {
      for (let n3 = 0; n3 < e2[t2(321)]; n3++) this.insert(e2[n3]);
      return this;
    }
    let n2 = this._build(e2.slice(), 0, e2.length - 1, 0);
    if (!this.data.children.length) this.data = n2;
    else if (this.data.height === n2.height) this._splitRoot(this.data, n2);
    else {
      if (this.data.height < n2.height) {
        let e3 = this.data;
        this.data = n2, n2 = e3;
      }
      this._insert(n2, this.data.height - n2.height - 1, true);
    }
    return this;
  }
  insert(e2) {
    return e2 && this._insert(e2, this.data.height - 1), this;
  }
  clear() {
    return this.data = C([]), this;
  }
  remove(e2, t2) {
    let n2 = o;
    if (!e2) return this;
    let r2 = this.data, i2 = this.toBBox(e2), a2 = [], s2 = [], c2, l2, u2;
    for (; r2 || a2.length; ) {
      if (r2 || (r2 = a2.pop(), l2 = a2[a2.length - 1], c2 = s2.pop(), u2 = true), r2[n2(415)]) {
        let n3 = d(e2, r2.children, t2);
        if (n3 !== -1) return r2.children.splice(n3, 1), a2.push(r2), this._condense(a2), this;
      }
      !u2 && !r2[n2(415)] && x(r2, i2) ? (a2[n2(329)](r2), s2[n2(329)](c2), c2 = 0, l2 = r2, r2 = r2[n2(427)][0]) : l2 ? (c2++, r2 = l2.children[c2], u2 = false) : r2 = null;
    }
    return this;
  }
  toBBox(e2) {
    return e2;
  }
  compareMinX(e2, t2) {
    return e2.minX - t2.minX;
  }
  compareMinY(e2, t2) {
    return e2.minY - t2.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(e2) {
    return this.data = e2, this;
  }
  _all(e2, t2) {
    let n2 = o, r2 = [];
    for (; e2; ) e2.leaf ? t2[n2(329)](...e2.children) : r2.push(...e2.children), e2 = r2.pop();
    return t2;
  }
  [o(345)](e2, t2, n2, r2) {
    let i2 = o, a2 = n2 - t2 + 1, s2 = this._maxEntries, c2;
    if (a2 <= s2) return c2 = C(e2.slice(t2, n2 + 1)), f(c2, this.toBBox), c2;
    r2 || (r2 = Math.ceil(Math.log(a2) / Math.log(s2)), s2 = Math.ceil(a2 / s2 ** (r2 - 1))), c2 = C([]), c2[i2(415)] = false, c2.height = r2;
    let l2 = Math.ceil(a2 / s2), u2 = l2 * Math.ceil(Math.sqrt(s2));
    w(e2, t2, n2, u2, this.compareMinX);
    for (let a3 = t2; a3 <= n2; a3 += u2) {
      let t3 = Math.min(a3 + u2 - 1, n2);
      w(e2, a3, t3, l2, this.compareMinY);
      for (let n3 = a3; n3 <= t3; n3 += l2) {
        let a4 = Math.min(n3 + l2 - 1, t3);
        c2[i2(427)].push(this[i2(345)](e2, n3, a4, r2 - 1));
      }
    }
    return f(c2, this.toBBox), c2;
  }
  [o(438)](e2, t2, n2, r2) {
    let i2 = o;
    for (; r2.push(t2), !(t2.leaf || r2.length - 1 === n2); ) {
      let n3 = 1 / 0, r3 = 1 / 0, a2;
      for (let o2 = 0; o2 < t2[i2(427)].length; o2++) {
        let i3 = t2.children[o2], s2 = _(i3), c2 = y(e2, i3) - s2;
        c2 < r3 ? (r3 = c2, n3 = s2 < n3 ? s2 : n3, a2 = i3) : c2 === r3 && s2 < n3 && (n3 = s2, a2 = i3);
      }
      t2 = a2 || t2.children[0];
    }
    return t2;
  }
  _insert(e2, t2, n2) {
    let r2 = o, i2 = n2 ? e2 : this.toBBox(e2), a2 = [], s2 = this._chooseSubtree(i2, this.data, t2, a2);
    for (s2.children.push(e2), m(s2, i2); t2 >= 0 && a2[t2].children[r2(321)] > this._maxEntries; ) this._split(a2, t2), t2--;
    this._adjustParentBBoxes(i2, a2, t2);
  }
  _split(e2, t2) {
    let n2 = o, r2 = e2[t2], i2 = r2.children[n2(321)], a2 = this[n2(422)];
    this._chooseSplitAxis(r2, a2, i2);
    let s2 = this._chooseSplitIndex(r2, a2, i2), c2 = C(r2.children.splice(s2, r2.children[n2(321)] - s2));
    c2.height = r2.height, c2.leaf = r2[n2(415)], f(r2, this.toBBox), f(c2, this.toBBox), t2 ? e2[t2 - 1].children.push(c2) : this._splitRoot(r2, c2);
  }
  _splitRoot(e2, t2) {
    let n2 = o;
    this[n2(463)] = C([e2, t2]), this.data.height = e2.height + 1, this.data.leaf = false, f(this.data, this[n2(449)]);
  }
  _chooseSplitIndex(e2, t2, n2) {
    let r2, i2 = 1 / 0, a2 = 1 / 0;
    for (let o2 = t2; o2 <= n2 - t2; o2++) {
      let t3 = p(e2, 0, o2, this.toBBox), s2 = p(e2, o2, n2, this.toBBox), c2 = b(t3, s2), l2 = _(t3) + _(s2);
      c2 < i2 ? (i2 = c2, r2 = o2, a2 = l2 < a2 ? l2 : a2) : c2 === i2 && l2 < a2 && (a2 = l2, r2 = o2);
    }
    return r2 || n2 - t2;
  }
  _chooseSplitAxis(e2, t2, n2) {
    let r2 = o, i2 = e2.leaf ? this.compareMinX : h, a2 = e2[r2(415)] ? this.compareMinY : g;
    this._allDistMargin(e2, t2, n2, i2) < this._allDistMargin(e2, t2, n2, a2) && e2[r2(427)][r2(357)](i2);
  }
  [o(477)](e2, t2, n2, r2) {
    let i2 = o;
    e2.children.sort(r2);
    let a2 = this.toBBox, s2 = p(e2, 0, t2, a2), c2 = p(e2, n2 - t2, n2, a2), l2 = v(s2) + v(c2);
    for (let r3 = t2; r3 < n2 - t2; r3++) {
      let t3 = e2.children[r3];
      m(s2, e2[i2(415)] ? a2(t3) : t3), l2 += v(s2);
    }
    for (let r3 = n2 - t2 - 1; r3 >= t2; r3--) {
      let t3 = e2.children[r3];
      m(c2, e2.leaf ? a2(t3) : t3), l2 += v(c2);
    }
    return l2;
  }
  _adjustParentBBoxes(e2, t2, n2) {
    for (let r2 = n2; r2 >= 0; r2--) m(t2[r2], e2);
  }
  _condense(e2) {
    for (let t2 = e2.length - 1, n2; t2 >= 0; t2--) e2[t2].children.length === 0 ? t2 > 0 ? (n2 = e2[t2 - 1].children, n2.splice(n2.indexOf(e2[t2]), 1)) : this.clear() : f(e2[t2], this.toBBox);
  }
};
function d(e2, t2, n2) {
  if (!n2) return t2.indexOf(e2);
  for (let r2 = 0; r2 < t2.length; r2++) if (n2(e2, t2[r2])) return r2;
  return -1;
}
function f(e2, t2) {
  p(e2, 0, e2[o(427)].length, t2, e2);
}
function p(e2, t2, n2, r2, i2) {
  let a2 = o;
  i2 || (i2 = C(null)), i2.minX = 1 / 0, i2.minY = 1 / 0, i2.maxX = -1 / 0, i2.maxY = -1 / 0;
  for (let o2 = t2; o2 < n2; o2++) {
    let t3 = e2[a2(427)][o2];
    m(i2, e2.leaf ? r2(t3) : t3);
  }
  return i2;
}
function m(e2, t2) {
  let n2 = o;
  return e2.minX = Math[n2(366)](e2.minX, t2.minX), e2.minY = Math[n2(366)](e2.minY, t2.minY), e2.maxX = Math[n2(615)](e2.maxX, t2.maxX), e2.maxY = Math.max(e2.maxY, t2[n2(526)]), e2;
}
function h(e2, t2) {
  let n2 = o;
  return e2[n2(515)] - t2[n2(515)];
}
function g(e2, t2) {
  return e2.minY - t2.minY;
}
function _(e2) {
  let t2 = o;
  return (e2.maxX - e2[t2(515)]) * (e2.maxY - e2.minY);
}
function v(e2) {
  let t2 = o;
  return e2.maxX - e2.minX + (e2.maxY - e2[t2(302)]);
}
function y(e2, t2) {
  let n2 = o;
  return (Math.max(t2.maxX, e2.maxX) - Math.min(t2.minX, e2.minX)) * (Math.max(t2[n2(526)], e2.maxY) - Math[n2(366)](t2[n2(302)], e2.minY));
}
function b(e2, t2) {
  let n2 = o, r2 = Math.max(e2[n2(515)], t2.minX), i2 = Math.max(e2.minY, t2[n2(302)]), a2 = Math.min(e2.maxX, t2.maxX), s2 = Math.min(e2[n2(526)], t2.maxY);
  return Math.max(0, a2 - r2) * Math.max(0, s2 - i2);
}
function x(e2, t2) {
  let n2 = o;
  return e2.minX <= t2.minX && e2.minY <= t2.minY && t2.maxX <= e2[n2(424)] && t2.maxY <= e2.maxY;
}
function S(e2, t2) {
  return t2.minX <= e2.maxX && t2.minY <= e2.maxY && t2.maxX >= e2.minX && t2.maxY >= e2.minY;
}
function C(e2) {
  return { children: e2, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
}
function w(e2, t2, n2, r2, i2) {
  let a2 = o, c2 = [t2, n2];
  for (; c2.length; ) {
    if (n2 = c2[a2(543)](), t2 = c2.pop(), n2 - t2 <= r2) continue;
    let o2 = t2 + Math.ceil((n2 - t2) / r2 / 2) * r2;
    s(e2, o2, t2, n2, i2), c2.push(t2, o2, o2, n2);
  }
}
n(), e(), r();
function ee(e2) {
  let t2 = o, n2 = e2.replace(/\r\n?/g, `
`), r2 = [], i2 = n2[t2(321)], a2 = 0;
  for (; a2 < i2; ) {
    for (; a2 < i2 && n2.charCodeAt(a2) === 10; ) a2++;
    if (a2 >= i2) break;
    let e3 = n2[t2(370)](`
`, a2);
    e3 === -1 && (e3 = i2);
    let o2 = n2[t2(524)](a2, e3).trim();
    a2 = e3 + 1;
    let s2 = parseInt(o2, 10);
    if (isNaN(s2)) {
      a2 < i2 && (e3 = n2[t2(370)](`
`, a2), e3 === -1 && (e3 = i2), a2 = e3 + 1);
      continue;
    }
    if (a2 >= i2) break;
    e3 = n2[t2(370)](`
`, a2), e3 === -1 && (e3 = i2);
    let c2 = n2.substring(a2, e3).replace(/\s+$/, ``);
    a2 = e3 + 1, r2.push({ code: s2, value: c2 });
  }
  return r2;
}
function T(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2.length; ) {
    let i2 = e2[t2];
    if (i2[r2(503)] === 0 && i2.value === `ENDSEC`) return t2 + 1;
    if (i2.code === 9) {
      let a2 = i2.value;
      switch (t2++, a2) {
        case `$ACADVER`:
          t2 < e2.length && (n2[r2(350)] = e2[t2].value, t2++);
          break;
        case `$EXTMIN`:
          if (t2 < e2[r2(321)]) {
            let i3 = E(e2, t2);
            n2.extMin = i3.point, t2 = i3[r2(314)];
          }
          break;
        case `$EXTMAX`:
          if (t2 < e2.length) {
            let r3 = E(e2, t2);
            n2.extMax = r3.point, t2 = r3.nextIndex;
          }
          break;
        case `$INSUNITS`:
          t2 < e2.length && (n2[r2(326)] = parseInt(e2[t2][r2(494)], 10), t2++);
          break;
        case `$MEASUREMENT`:
          t2 < e2.length && (n2.measurement = parseInt(e2[t2].value, 10), t2++);
          break;
        case r2(538):
          t2 < e2.length && (n2[r2(583)] = parseFloat(e2[t2].value), t2++);
          break;
        case `$DWGCODEPAGE`:
          t2 < e2[r2(321)] && (n2.dwgCodePage = e2[t2].value, t2++);
          break;
        case `$HANDSEED`:
          t2 < e2.length && (n2.handleSeed = e2[t2].value, t2++);
          break;
        default:
          for (; t2 < e2[r2(321)] && e2[t2][r2(503)] !== 9 && e2[t2][r2(503)] !== 0; ) n2[a2] = e2[t2].value, t2++;
      }
    } else t2++;
  }
  return t2;
}
function E(e2, t2) {
  let n2 = { x: 0, y: 0, z: 0 };
  for (; t2 < e2.length; ) {
    let r2 = e2[t2].code;
    if (r2 === 10) n2.x = parseFloat(e2[t2].value), t2++;
    else if (r2 === 20) n2.y = parseFloat(e2[t2].value), t2++;
    else if (r2 === 30) n2.z = parseFloat(e2[t2].value), t2++;
    else break;
  }
  return { point: n2, nextIndex: t2 };
}
function D(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2[r2(321)]; ) {
    let i2 = e2[t2];
    if (i2.code === 0 && i2[r2(494)] === `ENDSEC`) return t2 + 1;
    if (i2.code === 0 && i2[r2(494)] === `TABLE`) {
      if (t2++, t2 >= e2.length) break;
      let i3 = e2[t2].value;
      switch (t2++, i3) {
        case `LAYER`:
          t2 = k(e2, t2, n2.layers);
          break;
        case r2(291):
          t2 = te(e2, t2, n2.lineTypes);
          break;
        case `STYLE`:
          t2 = ne(e2, t2, n2.styles);
          break;
        default:
          t2 = O(e2, t2);
          break;
      }
    } else t2++;
  }
  return t2;
}
function O(e2, t2) {
  let n2 = o;
  for (; t2 < e2[n2(321)]; ) {
    if (e2[t2].code === 0 && e2[t2][n2(494)] === `ENDTAB`) return t2 + 1;
    t2++;
  }
  return t2;
}
function k(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2[r2(321)]; ) {
    let i2 = e2[t2];
    if (i2.code === 0 && i2.value === `ENDTAB`) return t2 + 1;
    if (i2.code === 0 && i2.value === `LAYER`) {
      t2++;
      let i3 = { name: `0`, color: 7, lineType: `Continuous`, flags: 0, lineWeight: -3, isOff: false, isFrozen: false, isLocked: false };
      for (; t2 < e2[r2(321)] && e2[t2].code !== 0; ) {
        let n3 = e2[t2];
        switch (n3.code) {
          case 2:
            i3.name = n3.value;
            break;
          case 6:
            i3.lineType = n3.value;
            break;
          case 62:
            i3.color = parseInt(n3.value, 10);
            break;
          case 70:
            i3.flags = parseInt(n3.value, 10);
            break;
          case 370:
            i3.lineWeight = parseInt(n3[r2(494)], 10);
            break;
          case 420:
            i3.trueColor = parseInt(n3.value, 10);
            break;
        }
        t2++;
      }
      n2.set(i3[r2(397)], i3);
    } else t2++;
  }
  return t2;
}
function A(e2, t2) {
  return e2 -= 291, Y()[e2];
}
function te(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2.length; ) {
    let i2 = e2[t2];
    if (i2.code === 0 && i2.value === `ENDTAB`) return t2 + 1;
    if (i2[r2(503)] === 0 && i2.value === `LTYPE`) {
      t2++;
      let i3 = { name: ``, description: ``, pattern: [], totalLength: 0 };
      for (; t2 < e2.length && e2[t2].code !== 0; ) {
        let n3 = e2[t2];
        switch (n3.code) {
          case 2:
            i3.name = n3.value;
            break;
          case 3:
            i3.description = n3.value;
            break;
          case 40:
            i3.totalLength = parseFloat(n3[r2(494)]);
            break;
          case 49:
            i3[r2(593)].push(parseFloat(n3.value));
            break;
        }
        t2++;
      }
      i3.name && n2.set(i3.name, i3);
    } else t2++;
  }
  return t2;
}
function ne(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2.length; ) {
    let i2 = e2[t2];
    if (i2.code === 0 && i2.value === `ENDTAB`) return t2 + 1;
    if (i2.code === 0 && i2.value === `STYLE`) {
      t2++;
      let i3 = { name: ``, fontName: ``, bigFontName: ``, height: 0, widthFactor: 1, obliqueAngle: 0 };
      for (; t2 < e2[r2(321)] && e2[t2].code !== 0; ) {
        let n3 = e2[t2];
        switch (n3.code) {
          case 2:
            i3.name = n3.value;
            break;
          case 3:
            i3.fontName = n3.value;
            break;
          case 4:
            i3.bigFontName = n3.value;
            break;
          case 40:
            i3.height = parseFloat(n3.value);
            break;
          case 41:
            i3[r2(346)] = parseFloat(n3.value);
            break;
          case 50:
            i3[r2(510)] = parseFloat(n3.value);
            break;
        }
        t2++;
      }
      i3.name && n2.set(i3.name, i3);
    } else t2++;
  }
  return t2;
}
function j(e2) {
  let t2 = o, n2 = { type: ``, layer: `0`, color: 256, lineType: `BYLAYER`, lineTypeScale: 1, lineWeight: -1, visible: true, extrusion: { x: 0, y: 0, z: 1 } };
  for (let r2 of e2) switch (r2.code) {
    case 5:
      n2.handle = r2.value;
      break;
    case 8:
      n2.layer = r2.value;
      break;
    case 6:
      n2.lineType = r2.value;
      break;
    case 48:
      n2.lineTypeScale = parseFloat(r2.value);
      break;
    case 60:
      n2.visible = r2.value === `0` || r2[t2(494)] === ``;
      break;
    case 62:
      n2.color = parseInt(r2.value, 10);
      break;
    case 370:
      n2.lineWeight = parseInt(r2[t2(494)], 10);
      break;
    case 420:
      n2.trueColor = parseInt(r2.value, 10);
      break;
    case 210:
      n2.extrusion.x = parseFloat(r2.value);
      break;
    case 220:
      n2.extrusion.y = parseFloat(r2.value);
      break;
    case 230:
      n2[t2(368)].z = parseFloat(r2.value);
      break;
  }
  return n2;
}
function re(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `LINE`, start: { x: 0, y: 0, z: 0 }, end: { x: 0, y: 0, z: 0 } });
  for (let t2 of e2) switch (t2.code) {
    case 10:
      r2[n2(619)].x = parseFloat(t2.value);
      break;
    case 20:
      r2.start.y = parseFloat(t2.value);
      break;
    case 30:
      r2.start.z = parseFloat(t2.value);
      break;
    case 11:
      r2.end.x = parseFloat(t2.value);
      break;
    case 21:
      r2.end.y = parseFloat(t2.value);
      break;
    case 31:
      r2.end.z = parseFloat(t2[n2(494)]);
      break;
  }
  return r2;
}
function ie(e2) {
  let n2 = t(t({}, j(e2)), {}, { type: `CIRCLE`, center: { x: 0, y: 0, z: 0 }, radius: 0 });
  for (let t2 of e2) switch (t2.code) {
    case 10:
      n2.center.x = parseFloat(t2.value);
      break;
    case 20:
      n2.center.y = parseFloat(t2.value);
      break;
    case 30:
      n2.center.z = parseFloat(t2.value);
      break;
    case 40:
      n2.radius = parseFloat(t2.value);
      break;
  }
  return n2;
}
function ae(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `ARC`, center: { x: 0, y: 0, z: 0 }, radius: 0, startAngle: 0, endAngle: 360 });
  for (let t2 of e2) switch (t2.code) {
    case 10:
      r2.center.x = parseFloat(t2.value);
      break;
    case 20:
      r2[n2(470)].y = parseFloat(t2.value);
      break;
    case 30:
      r2.center.z = parseFloat(t2.value);
      break;
    case 40:
      r2.radius = parseFloat(t2.value);
      break;
    case 50:
      r2[n2(417)] = parseFloat(t2.value);
      break;
    case 51:
      r2.endAngle = parseFloat(t2[n2(494)]);
      break;
  }
  return r2;
}
function oe(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: n2(579), vertices: [], closed: false, constantWidth: 0, elevation: 0 }), i2 = null;
  for (let t2 of e2) switch (t2.code) {
    case 70:
      r2[n2(408)] = (parseInt(t2.value, 10) & 1) != 0;
      break;
    case 38:
      r2[n2(456)] = parseFloat(t2.value);
      break;
    case 43:
      r2[n2(608)] = parseFloat(t2.value);
      break;
    case 10:
      i2 && r2.vertices.push(i2), i2 = { x: parseFloat(t2.value), y: 0, bulge: 0, startWidth: 0, endWidth: 0 };
      break;
    case 20:
      i2 && (i2.y = parseFloat(t2.value));
      break;
    case 40:
      i2 && (i2.startWidth = parseFloat(t2[n2(494)]));
      break;
    case 41:
      i2 && (i2[n2(296)] = parseFloat(t2.value));
      break;
    case 42:
      i2 && (i2.bulge = parseFloat(t2.value));
      break;
  }
  return i2 && r2.vertices.push(i2), r2;
}
function se(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `POLYLINE`, vertices: [], closed: false, is3d: false });
  for (let t2 of e2) switch (t2[n2(503)]) {
    case 70: {
      let e3 = parseInt(t2.value, 10);
      r2.closed = (e3 & 1) != 0, r2.is3d = (e3 & 8) != 0;
      break;
    }
  }
  return r2;
}
function ce(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: n2(544), center: { x: 0, y: 0, z: 0 }, majorAxis: { x: 1, y: 0, z: 0 }, minorRatio: 1, startParam: 0, endParam: Math.PI * 2 });
  for (let t2 of e2) switch (t2.code) {
    case 10:
      r2.center.x = parseFloat(t2.value);
      break;
    case 20:
      r2.center.y = parseFloat(t2[n2(494)]);
      break;
    case 30:
      r2.center.z = parseFloat(t2.value);
      break;
    case 11:
      r2.majorAxis.x = parseFloat(t2.value);
      break;
    case 21:
      r2.majorAxis.y = parseFloat(t2[n2(494)]);
      break;
    case 31:
      r2.majorAxis.z = parseFloat(t2.value);
      break;
    case 40:
      r2.minorRatio = parseFloat(t2.value);
      break;
    case 41:
      r2.startParam = parseFloat(t2.value);
      break;
    case 42:
      r2.endParam = parseFloat(t2[n2(494)]);
      break;
  }
  return r2;
}
function le(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `SPLINE`, degree: 3, flags: 0, knots: [], controlPoints: [], fitPoints: [], weights: [] }), i2 = null, a2 = null;
  for (let t2 of e2) switch (t2.code) {
    case 70:
      r2.flags = parseInt(t2.value, 10);
      break;
    case 71:
      r2.degree = parseInt(t2[n2(494)], 10);
      break;
    case 40:
      r2.knots.push(parseFloat(t2.value));
      break;
    case 41:
      r2[n2(495)].push(parseFloat(t2[n2(494)]));
      break;
    case 10:
      i2 && r2.controlPoints[n2(329)](i2), i2 = { x: parseFloat(t2.value), y: 0, z: 0 };
      break;
    case 20:
      i2 && (i2.y = parseFloat(t2.value));
      break;
    case 30:
      i2 && (i2.z = parseFloat(t2[n2(494)]));
      break;
    case 11:
      a2 && r2.fitPoints.push(a2), a2 = { x: parseFloat(t2.value), y: 0, z: 0 };
      break;
    case 21:
      a2 && (a2.y = parseFloat(t2.value));
      break;
    case 31:
      a2 && (a2.z = parseFloat(t2.value));
      break;
    case 12:
      r2.startTangent || (r2.startTangent = { x: 0, y: 0, z: 0 }), r2.startTangent.x = parseFloat(t2[n2(494)]);
      break;
    case 22:
      r2.startTangent && (r2[n2(553)].y = parseFloat(t2.value));
      break;
    case 32:
      r2.startTangent && (r2.startTangent.z = parseFloat(t2[n2(494)]));
      break;
    case 13:
      r2.endTangent || (r2.endTangent = { x: 0, y: 0, z: 0 }), r2.endTangent.x = parseFloat(t2.value);
      break;
    case 23:
      r2.endTangent && (r2.endTangent.y = parseFloat(t2.value));
      break;
    case 33:
      r2.endTangent && (r2[n2(557)].z = parseFloat(t2.value));
      break;
  }
  return i2 && r2.controlPoints.push(i2), a2 && r2[n2(298)].push(a2), r2;
}
function ue(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: n2(607), text: ``, insertionPoint: { x: 0, y: 0, z: 0 }, height: 1, rotation: 0, widthFactor: 1, obliqueAngle: 0, style: `STANDARD`, hAlign: 0, vAlign: 0, generationFlags: 0 });
  for (let t2 of e2) switch (t2.code) {
    case 1:
      r2.text = t2.value;
      break;
    case 10:
      r2.insertionPoint.x = parseFloat(t2.value);
      break;
    case 20:
      r2.insertionPoint.y = parseFloat(t2.value);
      break;
    case 30:
      r2.insertionPoint.z = parseFloat(t2[n2(494)]);
      break;
    case 11:
      r2.alignmentPoint || (r2.alignmentPoint = { x: 0, y: 0, z: 0 }), r2.alignmentPoint.x = parseFloat(t2.value);
      break;
    case 21:
      r2.alignmentPoint || (r2.alignmentPoint = { x: 0, y: 0, z: 0 }), r2.alignmentPoint.y = parseFloat(t2.value);
      break;
    case 31:
      r2.alignmentPoint || (r2.alignmentPoint = { x: 0, y: 0, z: 0 }), r2[n2(598)].z = parseFloat(t2.value);
      break;
    case 40:
      r2.height = parseFloat(t2.value);
      break;
    case 41:
      r2.widthFactor = parseFloat(t2.value);
      break;
    case 50:
      r2.rotation = parseFloat(t2.value);
      break;
    case 51:
      r2.obliqueAngle = parseFloat(t2.value);
      break;
    case 7:
      r2.style = t2.value;
      break;
    case 71:
      r2.generationFlags = parseInt(t2.value, 10);
      break;
    case 72:
      r2[n2(316)] = parseInt(t2.value, 10);
      break;
    case 73:
      r2.vAlign = parseInt(t2.value, 10);
      break;
  }
  return r2;
}
function de(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `MTEXT`, text: ``, insertionPoint: { x: 0, y: 0, z: 0 }, height: 1, width: 0, attachmentPoint: 1, drawingDirection: 1, rotation: 0, lineSpacingStyle: 1, lineSpacingFactor: 1, style: `STANDARD`, bgFill: 0, bgFillScale: 1.5 }), i2 = [];
  for (let t2 of e2) switch (t2.code) {
    case 1:
      i2[n2(329)](t2.value);
      break;
    case 3:
      i2.push(t2[n2(494)]);
      break;
    case 7:
      r2.style = t2.value;
      break;
    case 10:
      r2.insertionPoint.x = parseFloat(t2[n2(494)]);
      break;
    case 20:
      r2.insertionPoint.y = parseFloat(t2.value);
      break;
    case 30:
      r2.insertionPoint.z = parseFloat(t2.value);
      break;
    case 11:
      r2.textDirection || (r2.textDirection = { x: 0, y: 0, z: 0 }), r2.textDirection.x = parseFloat(t2.value);
      break;
    case 21:
      r2.textDirection || (r2.textDirection = { x: 0, y: 0, z: 0 }), r2.textDirection.y = parseFloat(t2.value);
      break;
    case 31:
      r2.textDirection || (r2.textDirection = { x: 0, y: 0, z: 0 }), r2[n2(361)].z = parseFloat(t2.value);
      break;
    case 40:
      r2.height = parseFloat(t2.value);
      break;
    case 41:
      r2[n2(396)] = parseFloat(t2.value);
      break;
    case 44:
      r2.lineSpacingFactor = parseFloat(t2[n2(494)]);
      break;
    case 50:
      r2[n2(493)] = parseFloat(t2.value);
      break;
    case 71:
      r2.attachmentPoint = parseInt(t2.value, 10);
      break;
    case 72:
      r2.drawingDirection = parseInt(t2.value, 10);
      break;
    case 73:
      r2[n2(306)] = parseInt(t2[n2(494)], 10);
      break;
    case 90:
      r2.bgFill = parseInt(t2[n2(494)], 10);
      break;
  }
  return r2.text = i2.join(``), r2;
}
function fe(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `INSERT`, blockName: ``, insertionPoint: { x: 0, y: 0, z: 0 }, scaleX: 1, scaleY: 1, scaleZ: 1, rotation: 0, columnCount: 1, rowCount: 1, columnSpacing: 0, rowSpacing: 0, attribs: [] });
  for (let t2 of e2) switch (t2[n2(503)]) {
    case 2:
      r2[n2(511)] = t2[n2(494)];
      break;
    case 10:
      r2[n2(344)].x = parseFloat(t2.value);
      break;
    case 20:
      r2[n2(344)].y = parseFloat(t2.value);
      break;
    case 30:
      r2.insertionPoint.z = parseFloat(t2.value);
      break;
    case 41:
      r2.scaleX = parseFloat(t2.value);
      break;
    case 42:
      r2.scaleY = parseFloat(t2.value);
      break;
    case 43:
      r2.scaleZ = parseFloat(t2.value);
      break;
    case 44:
      r2[n2(609)] = parseFloat(t2.value);
      break;
    case 45:
      r2.rowSpacing = parseFloat(t2.value);
      break;
    case 50:
      r2.rotation = parseFloat(t2.value);
      break;
    case 70:
      r2.columnCount = parseInt(t2.value, 10) || 1;
      break;
    case 71:
      r2[n2(555)] = parseInt(t2[n2(494)], 10) || 1;
      break;
  }
  return r2;
}
function pe(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: n2(476), blockName: ``, dimStyle: n2(317), dimType: 0, defPoint: { x: 0, y: 0, z: 0 }, textMidpoint: { x: 0, y: 0, z: 0 }, textOverride: ``, rotation: 0, textRotation: 0, leaderLength: 0 });
  for (let t2 of e2) switch (t2.code) {
    case 1:
      r2.textOverride = t2[n2(494)];
      break;
    case 2:
      r2.blockName = t2.value;
      break;
    case 3:
      r2.dimStyle = t2.value;
      break;
    case 10:
      r2.defPoint.x = parseFloat(t2.value);
      break;
    case 20:
      r2.defPoint.y = parseFloat(t2.value);
      break;
    case 30:
      r2.defPoint.z = parseFloat(t2.value);
      break;
    case 11:
      r2.textMidpoint.x = parseFloat(t2[n2(494)]);
      break;
    case 21:
      r2.textMidpoint.y = parseFloat(t2.value);
      break;
    case 31:
      r2.textMidpoint.z = parseFloat(t2.value);
      break;
    case 13:
      r2.defPoint2 || (r2.defPoint2 = { x: 0, y: 0, z: 0 }), r2.defPoint2.x = parseFloat(t2.value);
      break;
    case 23:
      r2.defPoint2 || (r2[n2(322)] = { x: 0, y: 0, z: 0 }), r2.defPoint2.y = parseFloat(t2[n2(494)]);
      break;
    case 33:
      r2.defPoint2 || (r2.defPoint2 = { x: 0, y: 0, z: 0 }), r2.defPoint2.z = parseFloat(t2.value);
      break;
    case 14:
      r2.defPoint3 || (r2.defPoint3 = { x: 0, y: 0, z: 0 }), r2.defPoint3.x = parseFloat(t2.value);
      break;
    case 24:
      r2.defPoint3 || (r2.defPoint3 = { x: 0, y: 0, z: 0 }), r2.defPoint3.y = parseFloat(t2.value);
      break;
    case 34:
      r2.defPoint3 || (r2.defPoint3 = { x: 0, y: 0, z: 0 }), r2.defPoint3.z = parseFloat(t2.value);
      break;
    case 15:
      r2.defPoint4 || (r2.defPoint4 = { x: 0, y: 0, z: 0 }), r2.defPoint4.x = parseFloat(t2[n2(494)]);
      break;
    case 25:
      r2[n2(517)] || (r2.defPoint4 = { x: 0, y: 0, z: 0 }), r2.defPoint4.y = parseFloat(t2[n2(494)]);
      break;
    case 35:
      r2[n2(517)] || (r2.defPoint4 = { x: 0, y: 0, z: 0 }), r2.defPoint4.z = parseFloat(t2[n2(494)]);
      break;
    case 16:
      r2.defPoint5 || (r2.defPoint5 = { x: 0, y: 0, z: 0 }), r2.defPoint5.x = parseFloat(t2.value);
      break;
    case 26:
      r2[n2(377)] || (r2.defPoint5 = { x: 0, y: 0, z: 0 }), r2[n2(377)].y = parseFloat(t2.value);
      break;
    case 36:
      r2[n2(377)] || (r2.defPoint5 = { x: 0, y: 0, z: 0 }), r2[n2(377)].z = parseFloat(t2[n2(494)]);
      break;
    case 40:
      r2.leaderLength = parseFloat(t2.value);
      break;
    case 50:
      r2.rotation = parseFloat(t2.value);
      break;
    case 53:
      r2.textRotation = parseFloat(t2.value);
      break;
    case 70:
      r2[n2(573)] = parseInt(t2.value, 10);
      break;
  }
  return r2;
}
function me(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `HATCH`, patternName: ``, solidFill: true, associative: false, hatchStyle: 0, patternType: 1, patternAngle: 0, patternScale: 1, boundaryPaths: [] }), i2 = 0;
  for (; i2 < e2.length; ) {
    let t2 = e2[i2];
    switch (t2[n2(503)]) {
      case 2:
        r2.patternName = t2.value;
        break;
      case 41:
        r2[n2(426)] = parseFloat(t2.value);
        break;
      case 52:
        r2.patternAngle = parseFloat(t2.value);
        break;
      case 70:
        r2[n2(356)] = t2.value === `1`;
        break;
      case 71:
        r2.associative = t2.value === `1`;
        break;
      case 75:
        r2.hatchStyle = parseInt(t2.value, 10);
        break;
      case 76:
        r2.patternType = parseInt(t2.value, 10);
        break;
      case 91: {
        let a2 = parseInt(t2.value, 10);
        i2++;
        for (let t3 = 0; t3 < a2 && i2 < e2.length; t3++) {
          let t4 = he(e2, i2);
          r2.boundaryPaths.push(t4[n2(617)]), i2 = t4.nextIndex;
        }
        continue;
      }
    }
    i2++;
  }
  return r2;
}
function he(e2, t2) {
  let n2 = 0;
  return t2 < e2.length && e2[t2].code === 92 && (n2 = parseInt(e2[t2].value, 10), t2++), n2 & 2 ? ge(e2, t2, n2) : _e(e2, t2, n2);
}
function ge(e2, t2, n2) {
  let r2 = o, i2 = { type: `polyline`, vertices: [], bulges: [], flags: n2 }, a2 = false;
  t2 < e2.length && e2[t2].code === 72 && (a2 = e2[t2].value === `1`, t2++), t2 < e2.length && e2[t2][r2(503)] === 73 && (i2.isClosed = e2[t2].value === `1`, t2++);
  let s2 = 0;
  t2 < e2.length && e2[t2].code === 93 && (s2 = parseInt(e2[t2][r2(494)], 10), t2++);
  for (let n3 = 0; n3 < s2 && t2 < e2[r2(321)]; n3++) {
    let n4 = { x: 0, y: 0 };
    e2[t2].code === 10 && (n4.x = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2][r2(503)] === 20 && (n4.y = parseFloat(e2[t2].value), t2++), i2.vertices[r2(329)](n4), a2 && t2 < e2.length && e2[t2].code === 42 ? (i2[r2(341)][r2(329)](parseFloat(e2[t2].value)), t2++) : a2 && i2.bulges.push(0);
  }
  for (; t2 < e2.length && (e2[t2].code === 97 || e2[t2].code === 330); ) if (e2[t2].code === 97) {
    let n3 = parseInt(e2[t2].value, 10);
    t2++;
    for (let i3 = 0; i3 < n3 && t2 < e2[r2(321)] && e2[t2].code === 330; i3++) t2++;
  } else t2++;
  return { path: i2, nextIndex: t2 };
}
function _e(e2, t2, n2) {
  let r2 = o, i2 = { type: `edges`, edges: [], flags: n2 }, a2 = 0;
  t2 < e2.length && e2[t2].code === 93 && (a2 = parseInt(e2[t2].value, 10), t2++);
  for (let n3 = 0; n3 < a2 && t2 < e2.length && e2[t2].code === 72; n3++) {
    let n4 = parseInt(e2[t2].value, 10);
    switch (t2++, n4) {
      case 1: {
        let n5 = { type: `line`, start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
        t2 < e2[r2(321)] && e2[t2].code === 10 && (n5.start.x = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2][r2(503)] === 20 && (n5.start.y = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 11 && (n5.end.x = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 21 && (n5.end.y = parseFloat(e2[t2].value), t2++), i2.edges.push(n5);
        break;
      }
      case 2: {
        let n5 = { type: r2(504), center: { x: 0, y: 0 }, radius: 0, startAngle: 0, endAngle: 360, ccw: true };
        t2 < e2.length && e2[t2].code === 10 && (n5.center.x = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 20 && (n5.center.y = parseFloat(e2[t2][r2(494)]), t2++), t2 < e2[r2(321)] && e2[t2].code === 40 && (n5[r2(547)] = parseFloat(e2[t2][r2(494)]), t2++), t2 < e2.length && e2[t2].code === 50 && (n5.startAngle = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 51 && (n5[r2(459)] = parseFloat(e2[t2].value), t2++), t2 < e2[r2(321)] && e2[t2].code === 73 && (n5[r2(529)] = e2[t2].value === `1`, t2++), i2[r2(469)].push(n5);
        break;
      }
      case 3: {
        let n5 = { type: `ellipse`, center: { x: 0, y: 0 }, majorAxis: { x: 1, y: 0 }, minorRatio: 1, startAngle: 0, endAngle: Math.PI * 2, ccw: true };
        t2 < e2.length && e2[t2].code === 10 && (n5.center.x = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2][r2(503)] === 20 && (n5[r2(470)].y = parseFloat(e2[t2].value), t2++), t2 < e2[r2(321)] && e2[t2].code === 11 && (n5.majorAxis.x = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 21 && (n5.majorAxis.y = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 40 && (n5.minorRatio = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 50 && (n5.startAngle = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 51 && (n5.endAngle = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 73 && (n5.ccw = e2[t2].value === `1`, t2++), i2.edges.push(n5);
        break;
      }
      case 4: {
        let n5 = 3, a3 = [], o2 = [];
        t2 < e2.length && e2[t2].code === 94 && (n5 = parseInt(e2[t2].value, 10), t2++), t2 < e2.length && e2[t2].code === 73 && t2++, t2 < e2.length && e2[t2][r2(503)] === 74 && t2++;
        let s2 = 0;
        t2 < e2[r2(321)] && e2[t2].code === 95 && (s2 = parseInt(e2[t2].value, 10), t2++);
        let c2 = 0;
        t2 < e2.length && e2[t2].code === 96 && (c2 = parseInt(e2[t2].value, 10), t2++);
        for (let n6 = 0; n6 < s2 && t2 < e2.length && e2[t2].code === 40; n6++) a3.push(parseFloat(e2[t2][r2(494)])), t2++;
        for (let n6 = 0; n6 < c2 && t2 < e2.length; n6++) {
          let n7 = { x: 0, y: 0 };
          e2[t2][r2(503)] === 10 && (n7.x = parseFloat(e2[t2].value), t2++), t2 < e2.length && e2[t2].code === 20 && (n7.y = parseFloat(e2[t2].value), t2++), o2.push(n7);
        }
        i2[r2(469)].push({ type: `spline`, degree: n5, knots: a3, controlPoints: o2 });
        break;
      }
    }
  }
  for (; t2 < e2.length && (e2[t2].code === 97 || e2[t2].code === 330); ) if (e2[t2][r2(503)] === 97) {
    let n3 = parseInt(e2[t2][r2(494)], 10);
    t2++;
    for (let i3 = 0; i3 < n3 && t2 < e2.length && e2[t2][r2(503)] === 330; i3++) t2++;
  } else t2++;
  return { path: i2, nextIndex: t2 };
}
function ve(e2) {
  let n2 = o, r2 = t(t({}, j(e2)), {}, { type: `POINT`, position: { x: 0, y: 0, z: 0 } });
  for (let t2 of e2) switch (t2.code) {
    case 10:
      r2.position.x = parseFloat(t2[n2(494)]);
      break;
    case 20:
      r2.position.y = parseFloat(t2.value);
      break;
    case 30:
      r2[n2(359)].z = parseFloat(t2[n2(494)]);
      break;
  }
  return r2;
}
function ye(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2.length; ) {
    let i2 = e2[t2];
    if (i2.code !== 0) {
      t2++;
      continue;
    }
    let a2 = i2.value;
    if (a2 === `ENDSEC` || a2 === r2(611)) return t2 + 1;
    t2++;
    let o2 = [];
    for (; t2 < e2[r2(321)] && e2[t2].code !== 0; ) o2.push(e2[t2]), t2++;
    switch (a2) {
      case `LINE`:
        n2.push(re(o2));
        break;
      case `CIRCLE`:
        n2.push(ie(o2));
        break;
      case r2(457):
        n2.push(ae(o2));
        break;
      case `LWPOLYLINE`:
        n2[r2(329)](oe(o2));
        break;
      case `ELLIPSE`:
        n2[r2(329)](ce(o2));
        break;
      case `SPLINE`:
        n2[r2(329)](le(o2));
        break;
      case `TEXT`:
        n2[r2(329)](ue(o2));
        break;
      case `MTEXT`:
        n2.push(de(o2));
        break;
      case `INSERT`: {
        let r3 = fe(o2);
        o2.some((e3) => e3.code === 66 && e3.value === `1`) && (t2 = xe(e2, t2, r3.attribs)), n2.push(r3);
        break;
      }
      case `DIMENSION`:
        n2[r2(329)](pe(o2));
        break;
      case `HATCH`:
        n2.push(me(o2));
        break;
      case `POINT`:
        n2[r2(329)](ve(o2));
        break;
      case `POLYLINE`: {
        let i3 = se(o2);
        t2 = be(e2, t2, i3.vertices), n2[r2(329)](i3);
        break;
      }
    }
  }
  return t2;
}
function be(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2.length; ) {
    if (e2[t2].code !== 0) {
      t2++;
      continue;
    }
    let i2 = e2[t2].value;
    if (i2 === `SEQEND`) return t2 + 1;
    if (i2 === `ENDSEC` || i2 === `ENDBLK`) return t2;
    if (i2 === `VERTEX`) {
      t2++;
      let i3 = { x: 0, y: 0, bulge: 0, startWidth: 0, endWidth: 0 };
      for (; t2 < e2.length && e2[t2].code !== 0; ) {
        let n3 = e2[t2];
        switch (n3.code) {
          case 10:
            i3.x = parseFloat(n3.value);
            break;
          case 20:
            i3.y = parseFloat(n3[r2(494)]);
            break;
          case 42:
            i3.bulge = parseFloat(n3[r2(494)]);
            break;
          case 40:
            i3[r2(336)] = parseFloat(n3.value);
            break;
          case 41:
            i3.endWidth = parseFloat(n3.value);
            break;
        }
        t2++;
      }
      n2.push(i3);
    } else for (t2++; t2 < e2[r2(321)] && e2[t2].code !== 0; ) t2++;
  }
  return t2;
}
function xe(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2.length; ) {
    if (e2[t2][r2(503)] !== 0) {
      t2++;
      continue;
    }
    let i2 = e2[t2].value;
    if (i2 === `SEQEND`) return t2 + 1;
    if (i2 === `ENDSEC` || i2 === `ENDBLK`) return t2;
    if (i2 === `ATTRIB`) {
      t2++;
      let i3 = { tag: ``, text: ``, insertionPoint: { x: 0, y: 0, z: 0 }, height: 1, rotation: 0, style: `STANDARD`, layer: `0`, color: 256 };
      for (; t2 < e2.length && e2[t2].code !== 0; ) {
        let n3 = e2[t2];
        switch (n3[r2(503)]) {
          case 1:
            i3.text = n3[r2(494)];
            break;
          case 2:
            i3[r2(394)] = n3.value;
            break;
          case 7:
            i3.style = n3.value;
            break;
          case 8:
            i3.layer = n3[r2(494)];
            break;
          case 10:
            i3.insertionPoint.x = parseFloat(n3.value);
            break;
          case 20:
            i3.insertionPoint.y = parseFloat(n3.value);
            break;
          case 30:
            i3.insertionPoint.z = parseFloat(n3.value);
            break;
          case 40:
            i3.height = parseFloat(n3.value);
            break;
          case 50:
            i3.rotation = parseFloat(n3[r2(494)]);
            break;
          case 62:
            i3[r2(533)] = parseInt(n3[r2(494)], 10);
            break;
        }
        t2++;
      }
      n2.push(i3);
    } else for (t2++; t2 < e2.length && e2[t2].code !== 0; ) t2++;
  }
  return t2;
}
function Se(e2, t2, n2) {
  let r2 = o;
  for (; t2 < e2.length; ) {
    let i2 = e2[t2];
    if (i2.code === 0 && i2.value === `ENDSEC`) return t2 + 1;
    if (i2.code === 0 && i2.value === r2(560)) {
      t2++;
      let i3 = { name: ``, basePoint: { x: 0, y: 0, z: 0 }, entities: [], flags: 0 };
      for (; t2 < e2[r2(321)] && e2[t2].code !== 0; ) {
        let n3 = e2[t2];
        switch (n3[r2(503)]) {
          case 2:
            i3.name = n3[r2(494)];
            break;
          case 8:
            break;
          case 10:
            i3.basePoint.x = parseFloat(n3.value);
            break;
          case 20:
            i3.basePoint.y = parseFloat(n3[r2(494)]);
            break;
          case 30:
            i3.basePoint.z = parseFloat(n3.value);
            break;
          case 70:
            i3.flags = parseInt(n3.value, 10);
            break;
        }
        t2++;
      }
      t2 = ye(e2, t2, i3.entities), i3[r2(397)] && !i3[r2(397)].startsWith(`*Model_Space`) && !i3.name[r2(500)](`*Paper_Space`) && n2.set(i3.name, i3);
    } else t2++;
  }
  return t2;
}
var M = o(319), Ce = { ANSI_874: `windows-874`, ANSI_932: `shift_jis`, ANSI_936: `gbk`, ANSI_949: `euc-kr`, ANSI_950: `big5`, ANSI_1250: `windows-1250`, ANSI_1251: `windows-1251`, ANSI_1252: `windows-1252`, ANSI_1253: `windows-1253`, ANSI_1254: `windows-1254`, ANSI_1255: o(525), ANSI_1256: o(294), ANSI_1257: `windows-1257`, ANSI_1258: `windows-1258` }, we = o(534);
function Te() {
  return { acadVersion: ``, insUnits: 0, measurement: 0, ltScale: 1 };
}
function Ee(e2) {
  let t2 = o;
  return e2[t2(349)](/\\U\+([0-9A-Fa-f]{4})/g, (e3, n2) => String[t2(481)](parseInt(n2, 16)));
}
function De(e2) {
  var _a, _b;
  let t2 = o;
  if (typeof e2 == t2(624)) return Ee(e2);
  let n2 = new Uint8Array(e2);
  if (new TextDecoder(t2(506)).decode(n2.slice(0, M.length)) === M) throw new N(`Binary DXF format is not supported. Please export as ASCII DXF.`);
  let r2 = new TextDecoder(t2(545)).decode(e2), i2 = ((_a = r2.match(/\$ACADVER[\s\S]*?\n\s*1\s*\n\s*(\S+)/)) == null ? void 0 : _a[1]) ?? ``;
  if (i2 && i2 < we) {
    let t3 = Ce[((_b = r2.match(/\$DWGCODEPAGE[\s\S]*?\n\s*3\s*\n\s*(\S+)/)) == null ? void 0 : _b[1]) ?? ``] ?? `windows-1252`;
    t3 !== `utf-8` && (r2 = new TextDecoder(t3).decode(e2));
  }
  return Ee(r2);
}
function Oe(e2, t2) {
  for (; t2 < e2.length; ) {
    if (e2[t2].code === 0 && e2[t2].value === `ENDSEC`) return t2 + 1;
    t2++;
  }
  return t2;
}
function ke(e2) {
  let t2 = o;
  e2.layers.has(`0`) || e2.layers[t2(430)](`0`, { name: `0`, color: 7, lineType: t2(486), flags: 0, lineWeight: -3, isOff: false, isFrozen: false, isLocked: false });
}
function Ae(e2) {
  for (let [, t2] of e2.layers) t2.isOff = t2.color < 0, t2.isOff && (t2.color = Math.abs(t2.color)), t2.isFrozen = (t2.flags & 1) != 0, t2.isLocked = (t2.flags & 4) != 0;
}
var N = class extends Error {
  constructor(e2, t2) {
    super(e2), this.cause = t2, this.name = `DxfParseError`;
  }
};
function P(e2) {
  let t2 = o;
  if (typeof e2 == `string`) {
    if (e2.length === 0) throw new N(`Input is empty. Expected a DXF string or ArrayBuffer.`);
  } else if (e2 instanceof ArrayBuffer) {
    if (e2.byteLength === 0) throw new N(`Input ArrayBuffer is empty.`);
  } else throw new N(`Invalid input type. Expected a string or ArrayBuffer.`);
  let n2;
  try {
    n2 = De(e2);
  } catch (e3) {
    throw e3 instanceof N ? e3 : new N(`Failed to decode DXF input.`, e3);
  }
  let r2;
  try {
    r2 = ee(n2);
  } catch (e3) {
    throw new N(`Failed to tokenize DXF content.`, e3);
  }
  if (r2.length === 0) throw new N(`DXF content produced no tokens. The input may not be a valid DXF file.`);
  let i2 = { header: Te(), layers: /* @__PURE__ */ new Map(), lineTypes: /* @__PURE__ */ new Map(), styles: /* @__PURE__ */ new Map(), blocks: /* @__PURE__ */ new Map(), entities: [] };
  try {
    let e3 = 0;
    for (; e3 < r2.length; ) {
      let n3 = r2[e3];
      if (n3.code === 0 && n3.value === `SECTION`) {
        if (e3++, e3 >= r2[t2(321)]) break;
        let n4 = r2[e3].value;
        switch (e3++, n4) {
          case t2(360):
            e3 = T(r2, e3, i2.header);
            break;
          case `TABLES`:
            e3 = D(r2, e3, i2);
            break;
          case `BLOCKS`:
            e3 = Se(r2, e3, i2.blocks);
            break;
          case `ENTITIES`:
            e3 = ye(r2, e3, i2.entities);
            break;
          default:
            e3 = Oe(r2, e3);
            break;
        }
      } else if (n3[t2(503)] === 0 && n3.value === `EOF`) break;
      else e3++;
    }
  } catch (e3) {
    throw new N(`Failed to parse DXF sections.`, e3);
  }
  return ke(i2), Ae(i2), i2;
}
var je = `#000000.#FF0000.#FFFF00.#00FF00.#00FFFF.#0000FF.#FF00FF.#FFFFFF.#808080.#C0C0C0.#FF0000.#FF7F7F.#A50000.#A55252.#7F0000.#7F3F3F.#4C0000.#4C2626.#260000.#261313.#FF3F00.#FF9F7F.#A52900.#A56752.#7F1F00.#7F4F3F.#4C1300.#4C2F26.#260900.#261713.#FF7F00.#FFBF7F.#A55200.#A57C52.#7F3F00.#7F5F3F.#4C2600.#4C3926.#261300.#261C13.#FFBF00.#FFDF7F.#A57C00.#A59152.#7F5F00.#7F6F3F.#4C3900.#4C4226.#261C00.#262113.#FFFF00.#FFFF7F.#A5A500.#A5A552.#7F7F00.#7F7F3F.#4C4C00.#4C4C26.#262600.#262613.#BFFF00.#DFFF7F.#7CA500.#91A552.#5F7F00.#6F7F3F.#394C00.#424C26.#1C2600.#212613.#7FFF00.#BFFF7F.#52A500.#7CA552.#3F7F00.#5F7F3F.#264C00.#394C26.#132600.#1C2613.#3FFF00.#9FFF7F.#29A500.#67A552.#1F7F00.#4F7F3F.#134C00.#2F4C26.#092600.#172613.#00FF00.#7FFF7F.#00A500.#52A552.#007F00.#3F7F3F.#004C00.#264C26.#002600.#132613.#00FF3F.#7FFF9F.#00A529.#52A567.#007F1F.#3F7F4F.#004C13.#264C2F.#002609.#132617.#00FF7F.#7FFFBF.#00A552.#52A57C.#007F3F.#3F7F5F.#004C26.#264C39.#002613.#13261C.#00FFBF.#7FFFDF.#00A57C.#52A591.#007F5F.#3F7F6F.#004C39.#264C42.#00261C.#132621.#00FFFF.#7FFFFF.#00A5A5.#52A5A5.#007F7F.#3F7F7F.#004C4C.#264C4C.#002626.#132626.#00BFFF.#7FDFFF.#007CA5.#5291A5.#005F7F.#3F6F7F.#00394C.#26424C.#001C26.#132126.#007FFF.#7FBFFF.#0052A5.#527CA5.#003F7F.#3F5F7F.#00264C.#26394C.#001326.#131C26.#003FFF.#7F9FFF.#0029A5.#5267A5.#001F7F.#3F4F7F.#00134C.#262F4C.#000926.#131726.#0000FF.#7F7FFF.#0000A5.#5252A5.#00007F.#3F3F7F.#00004C.#26264C.#000026.#131326.#3F00FF.#9F7FFF.#2900A5.#6752A5.#1F007F.#4F3F7F.#13004C.#2F264C.#090026.#171326.#7F00FF.#BF7FFF.#5200A5.#7C52A5.#3F007F.#5F3F7F.#26004C.#39264C.#130026.#1C1326.#BF00FF.#DF7FFF.#7C00A5.#9152A5.#5F007F.#6F3F7F.#39004C.#42264C.#1C0026.#211326.#FF00FF.#FF7FFF.#A500A5.#A552A5.#7F007F.#7F3F7F.#4C004C.#4C264C.#260026.#261326.#FF00BF.#FF7FDF.#A5007C.#A55291.#7F005F.#7F3F6F.#4C0039.#4C2642.#26001C.#261321.#FF007F.#FF7FBF.#A50052.#A5527C.#7F003F.#7F3F5F.#4C0026.#4C2639.#260013.#26131C.#FF003F.#FF7F9F.#A50029.#A55267.#7F001F.#7F3F4F.#4C0013.#4C262F.#260009.#261317.#333333.#505050.#696969.#828282.#BEBEBE.#FFFFFF`[o(425)](`.`);
function Me(e2) {
  if (!(e2 === 0 || e2 === 256) && !(e2 < 0 || e2 > 255)) return je[e2];
}
function Ne(e2, t2) {
  let n2 = o;
  var r2;
  return e2 === 7 || (r2 = je[Math.abs(e2)]) == null ? t2 ? `#FFFFFF` : n2(577) : r2;
}
function Pe(e2) {
  let t2 = o, n2 = e2 >> 16 & 255, r2 = e2 >> 8 & 255, i2 = e2 & 255;
  return `#` + n2.toString(16).padStart(2, `0`) + r2.toString(16).padStart(2, `0`) + i2.toString(16)[t2(584)](2, `0`);
}
var F = { dark: { backgroundColor: `#1a1a2e`, defaultEntityColor: o(616), selectionColor: `#00ff88`, measureColor: `#ffaa00`, gridColor: o(613), crosshairColor: `#555555` }, light: { backgroundColor: o(616), defaultEntityColor: `#000000`, selectionColor: `#0066ff`, measureColor: `#ff6600`, gridColor: `#dddddd`, crosshairColor: `#cccccc` } };
function I(e2, t2, n2) {
  return [t2 * e2.scale + e2.offsetX, -n2 * e2.scale + e2.offsetY];
}
function L(e2, t2, n2) {
  let r2 = o;
  return [(t2 - e2.offsetX) / e2.scale, -(n2 - e2.offsetY) / e2[r2(421)]];
}
function R(e2, t2) {
  let n2 = o, r2 = window.devicePixelRatio || 1;
  e2[n2(376)](t2[n2(421)] * r2, 0, 0, -t2.scale * r2, t2.offsetX * r2, t2[n2(389)] * r2);
}
function Fe(e2, t2, n2, r2, i2, a2, s2 = 0.05) {
  let c2 = o, l2 = i2 - n2, u2 = a2 - r2;
  if (l2 <= 0 || u2 <= 0) return { scale: 1, offsetX: e2 / 2, offsetY: t2 / 2 };
  let d2 = e2 / l2, f2 = t2 / u2, p2 = Math[c2(366)](d2, f2) * (1 - s2 * 2), m2 = (n2 + i2) / 2, h2 = (r2 + a2) / 2;
  return { scale: p2, offsetX: e2 / 2 - m2 * p2, offsetY: t2 / 2 + h2 * p2 };
}
function Ie(e2, t2, n2, r2, i2 = 1e-4, a2 = 1e5) {
  let s2 = o, c2 = Math.max(i2, Math.min(a2, e2.scale * r2)), l2 = c2 / e2.scale;
  return { scale: c2, offsetX: t2 - (t2 - e2.offsetX) * l2, offsetY: n2 - (n2 - e2[s2(389)]) * l2 };
}
var Le = class {
  constructor(e2) {
    a(this, `transform`, { scale: 1, offsetX: 0, offsetY: 0 }), a(this, `minScale`, void 0), a(this, `maxScale`, void 0), this.minScale = e2.minZoom, this.maxScale = e2.maxZoom;
  }
  getTransform() {
    return this.transform;
  }
  setTransform(e2) {
    let t2 = o;
    this[t2(603)] = e2;
  }
  [o(587)](e2, n2) {
    let r2 = o;
    this[r2(603)] = t(t({}, this[r2(603)]), {}, { offsetX: this[r2(603)].offsetX + e2, offsetY: this.transform.offsetY + n2 });
  }
  zoom(e2, t2, n2) {
    let r2 = o;
    this.transform = Ie(this.transform, e2, t2, n2, this.minScale, this[r2(599)]);
  }
};
function Re(e2, t2) {
  let n2 = o;
  return e2 === 7 ? t2 === `dark` ? `#ffffff` : `#000000` : Me(e2) ?? n2(616);
}
function z(e2, t2, n2, r2) {
  let i2 = o;
  if (e2.trueColor !== void 0) return `rgb(` + (e2.trueColor >> 16 & 255) + `,` + (e2.trueColor >> 8 & 255) + `,` + (e2.trueColor & 255) + `)`;
  if (e2.color === 0) return r2 ?? F[n2].defaultEntityColor;
  if (e2.color !== 256) return Re(e2.color, n2);
  let a2 = t2.get(e2.layer);
  return a2 ? a2.trueColor === void 0 ? Re(Math[i2(582)](a2.color), n2) : `rgb(` + (a2.trueColor >> 16 & 255) + `,` + (a2.trueColor >> 8 & 255) + `,` + (a2.trueColor & 255) + `)` : F[n2].defaultEntityColor;
}
function ze(e2, t2) {
  let n2 = o;
  e2.beginPath(), e2[n2(479)](t2[n2(619)].x, t2[n2(619)].y), e2.lineTo(t2.end.x, t2.end.y), e2.stroke();
}
function Be(e2, t2) {
  t2[o(547)] <= 0 || (e2.beginPath(), e2.arc(t2.center.x, t2.center.y, t2.radius, 0, Math.PI * 2), e2.stroke());
}
function Ve(e2, t2) {
  if (t2.radius <= 0) return;
  let n2 = t2.startAngle * Math.PI / 180, r2 = t2.endAngle * Math.PI / 180;
  e2.beginPath(), e2.arc(t2.center.x, t2.center.y, t2.radius, n2, r2, false), e2.stroke();
}
function He(e2, t2, n2, r2, i2) {
  let a2 = o, s2 = n2 - e2, c2 = r2 - t2, l2 = Math.sqrt(s2 * s2 + c2 * c2);
  if (l2 < 1e-10) return { cx: e2, cy: t2, radius: 0, startAngle: 0, endAngle: 0, anticlockwise: false };
  let u2 = Math[a2(582)](i2) * l2 / 2, d2 = ((l2 / 2) ** 2 + u2 ** 2) / (2 * u2), f2 = (e2 + n2) / 2, p2 = (t2 + r2) / 2, m2 = -c2 / l2, h2 = s2 / l2, g2 = d2 - u2, _2 = i2 > 0 ? 1 : -1, v2 = f2 + _2 * g2 * m2, y2 = p2 + _2 * g2 * h2;
  return { cx: v2, cy: y2, radius: d2, startAngle: Math.atan2(t2 - y2, e2 - v2), endAngle: Math[a2(399)](r2 - y2, n2 - v2), anticlockwise: i2 < 0 };
}
function B(e2, t2, n2, r2, i2, a2) {
  let o2 = He(t2, n2, r2, i2, a2);
  if (o2.radius < 1e-10) {
    e2.lineTo(r2, i2);
    return;
  }
  e2.arc(o2.cx, o2.cy, o2.radius, o2.startAngle, o2.endAngle, o2.anticlockwise);
}
function Ue(e2, t2) {
  let n2 = o, r2 = t2.vertices;
  if (r2[n2(321)] < 2) return;
  e2.beginPath(), e2.moveTo(r2[0].x, r2[0].y);
  let i2 = t2.closed ? r2.length : r2.length - 1;
  for (let t3 = 0; t3 < i2; t3++) {
    let i3 = r2[t3], a2 = r2[(t3 + 1) % r2[n2(321)]];
    Math.abs(i3.bulge) < 1e-10 ? e2.lineTo(a2.x, a2.y) : B(e2, i3.x, i3.y, a2.x, a2.y, i3.bulge);
  }
  e2.stroke();
}
function We(e2, t2) {
  let n2 = o, r2 = t2[n2(574)];
  if (r2.length < 2) return;
  e2.beginPath(), e2[n2(479)](r2[0].x, r2[0].y);
  let i2 = t2[n2(408)] ? r2.length : r2.length - 1;
  for (let t3 = 0; t3 < i2; t3++) {
    let i3 = r2[t3], a2 = r2[(t3 + 1) % r2[n2(321)]], o2 = i3.bulge ?? 0;
    Math.abs(o2) < 1e-10 ? e2.lineTo(a2.x, a2.y) : B(e2, i3.x, i3.y, a2.x, a2.y, o2);
  }
  e2.stroke();
}
function Ge(e2, t2) {
  let n2 = o, r2 = Math[n2(435)](t2.majorAxis.x ** 2 + t2.majorAxis.y ** 2 + t2.majorAxis.z ** 2);
  if (r2 < 1e-10 || t2.minorRatio <= 0) return;
  let i2 = r2 * t2.minorRatio, a2 = Math[n2(399)](t2[n2(312)].y, t2.majorAxis.x);
  e2[n2(565)](), e2.ellipse(t2.center.x, t2.center.y, r2, i2, a2, t2.startParam, t2[n2(605)], false), e2.stroke();
}
function Ke(e2, n2, r2, i2, a2) {
  let o2 = n2.length - 1, s2 = e2;
  for (; s2 < o2 && r2[s2 + 1] <= i2; ) s2++;
  let c2 = [], l2 = [];
  for (let r3 = 0; r3 <= e2; r3++) {
    let i3 = s2 - e2 + r3;
    c2.push(t({}, n2[i3])), l2.push(a2 ? a2[i3] : 1);
  }
  for (let t2 = 1; t2 <= e2; t2++) for (let n3 = e2; n3 >= t2; n3--) {
    let o3 = s2 - e2 + n3, u2 = r2[o3 + e2 - t2 + 1] - r2[o3];
    if (Math.abs(u2) < 1e-10) continue;
    let d2 = (i2 - r2[o3]) / u2, f2 = c2[n3], p2 = c2[n3 - 1];
    if (a2) {
      let e3 = l2[n3 - 1] * (1 - d2), t3 = l2[n3] * d2, r3 = e3 + t3;
      if (Math.abs(r3) < 1e-10) continue;
      f2.x = (p2.x * e3 + f2.x * t3) / r3, f2.y = (p2.y * e3 + f2.y * t3) / r3, f2.z = (p2.z * e3 + f2.z * t3) / r3, l2[n3] = r3;
    } else f2.x = (1 - d2) * p2.x + d2 * f2.x, f2.y = (1 - d2) * p2.y + d2 * f2.y, f2.z = (1 - d2) * p2.z + d2 * f2.z;
  }
  return c2[e2] ?? { x: 0, y: 0, z: 0 };
}
function qe(e2) {
  let t2 = o;
  if (e2.length < 2) return e2[t2(488)]((e3) => ({ x: e3.x, y: e3.y }));
  let n2 = [], r2 = e2.length;
  for (let i2 = 0; i2 < r2 - 1; i2++) {
    let a2 = e2[Math.max(0, i2 - 1)], o2 = e2[i2], s2 = e2[Math.min(r2 - 1, i2 + 1)], c2 = e2[Math[t2(366)](r2 - 1, i2 + 2)];
    for (let e3 = 0; e3 <= (i2 === r2 - 2 ? 10 : 9); e3++) {
      let t3 = e3 / 10, r3 = t3 * t3, i3 = r3 * t3, l2 = 0.5 * (2 * o2.x + (-a2.x + s2.x) * t3 + (2 * a2.x - 5 * o2.x + 4 * s2.x - c2.x) * r3 + (-a2.x + 3 * o2.x - 3 * s2.x + c2.x) * i3), u2 = 0.5 * (2 * o2.y + (-a2.y + s2.y) * t3 + (2 * a2.y - 5 * o2.y + 4 * s2.y - c2.y) * r3 + (-a2.y + 3 * o2.y - 3 * s2.y + c2.y) * i3);
      n2.push({ x: l2, y: u2 });
    }
  }
  return n2;
}
function Je(e2, t2) {
  let n2 = o;
  if (e2.degree === 1) return e2.controlPoints.map((e3) => ({ x: e3.x, y: e3.y }));
  if (e2.controlPoints.length === 0 && e2[n2(298)].length >= 2) return qe(e2.fitPoints);
  if (e2[n2(299)].length < e2[n2(527)] + 1 || e2.knots[n2(321)] < e2.controlPoints.length + e2.degree + 1) return [];
  let r2 = [], i2 = e2.knots[e2.degree], a2 = e2.knots[e2.knots.length - e2.degree - 1];
  if (a2 <= i2) return [];
  let s2 = Math.max(e2.controlPoints.length * 10, Math.ceil((a2 - i2) / t2)), c2 = Math.min(s2, 5e3), l2 = e2.weights[n2(321)] > 0 ? e2.weights : void 0;
  for (let t3 = 0; t3 <= c2; t3++) {
    let n3 = i2 + (a2 - i2) * (t3 / c2), o2 = Ke(e2.degree, e2.controlPoints, e2.knots, n3, l2);
    r2.push({ x: o2.x, y: o2.y });
  }
  return r2;
}
function Ye(e2, t2, n2) {
  let r2 = o, i2 = Je(t2, n2);
  if (!(i2.length < 2)) {
    e2.beginPath(), e2.moveTo(i2[0].x, i2[0].y);
    for (let t3 = 1; t3 < i2[r2(321)]; t3++) e2.lineTo(i2[t3].x, i2[t3].y);
    t2.flags & 1 && e2.closePath(), e2[r2(509)]();
  }
}
var Xe = { standard: `Arial, sans-serif`, arial: `Arial, sans-serif`, "arial.ttf": `Arial, sans-serif`, "romans.shx": `"Courier New", monospace`, "simplex.shx": `"Courier New", monospace`, "txt.shx": `monospace`, "monotxt.shx": `monospace`, "isocp.shx": `"Courier New", monospace`, "isocpeur.shx": o(409), "times.ttf": `"Times New Roman", serif`, "timesnr.ttf": o(521), "gothic.ttf": `"Century Gothic", sans-serif` };
function Ze(e2) {
  return Xe[e2.toLowerCase().trim()] || `sans-serif`;
}
function Qe(e2, t2, n2) {
  let r2 = o;
  if (!t2.text || t2.height < n2 * 4) return;
  let i2 = t2.hAlign !== 0 || t2.vAlign !== 0, a2 = i2 && t2.alignmentPoint ? t2.alignmentPoint.x : t2[r2(344)].x, s2 = i2 && t2[r2(598)] ? t2.alignmentPoint.y : t2.insertionPoint.y;
  if (e2[r2(558)](), e2.translate(a2, s2), e2[r2(421)](1, -1), t2.rotation && e2.rotate(-t2.rotation * Math.PI / 180), t2.widthFactor !== 1 && e2[r2(421)](t2.widthFactor, 1), t2.obliqueAngle) {
    let n3 = Math.tan(t2.obliqueAngle * Math.PI / 180);
    e2.transform(1, 0, n3, 1, 0, 0);
  }
  let c2 = (t2[r2(310)] & 2) != 0, l2 = (t2.generationFlags & 4) != 0;
  c2 && e2.scale(-1, 1), l2 && e2.scale(1, -1);
  let u2 = Ze(t2.style || `Standard`);
  switch (e2.font = t2.height + `px ` + u2, t2.hAlign) {
    case 0:
      e2.textAlign = `left`;
      break;
    case 1:
      e2.textAlign = `center`;
      break;
    case 2:
      e2.textAlign = `right`;
      break;
    case 3:
      e2.textAlign = `left`;
      break;
    case 4:
      e2.textAlign = `center`;
      break;
    case 5:
      e2.textAlign = `left`;
      break;
    default:
      e2.textAlign = `left`;
  }
  switch (t2[r2(333)]) {
    case 0:
      e2.textBaseline = r2(292);
      break;
    case 1:
      e2.textBaseline = `bottom`;
      break;
    case 2:
      e2.textBaseline = `middle`;
      break;
    case 3:
      e2.textBaseline = `top`;
      break;
    default:
      e2.textBaseline = `alphabetic`;
  }
  e2.fillText(t2.text, 0, 0), e2.restore();
}
function $e(e2) {
  let t2 = o;
  return e2.replace(/\\P/g, `
`).replace(/\\[fFHWQTCAaLlOoKk][^;]*;/g, ``).replace(/\\\\/g, `\\`).replace(/\\~/g, `\xA0`).replace(/\{/g, ``)[t2(349)](/\}/g, ``)[t2(349)](/\\S[^;]*;/g, ``).trim();
}
function et(e2, t2, n2) {
  let r2 = o;
  if (!t2.text || t2.height < n2 * 4) return;
  e2[r2(558)](), e2.translate(t2.insertionPoint.x, t2.insertionPoint.y), e2.scale(1, -1);
  let i2 = t2.textDirection ? Math.atan2(t2.textDirection.y, t2.textDirection.x) : (t2[r2(493)] || 0) * Math.PI / 180;
  i2 && e2.rotate(-i2);
  let a2 = $e(t2[r2(561)]).split(`
`), s2 = t2.height * (t2.lineSpacingFactor || 1.4), c2 = Ze(t2.style || `Standard`);
  e2.font = t2.height + `px ` + c2;
  let l2 = (t2.attachmentPoint - 1) % 3, u2 = Math.floor((t2.attachmentPoint - 1) / 3);
  e2.textAlign = [`left`, `center`, r2(563)][l2] ?? `left`;
  let d2 = 0, f2 = a2.length * s2;
  switch (u2) {
    case 0:
      d2 = t2.height;
      break;
    case 1:
      d2 = t2.height - f2 / 2;
      break;
    case 2:
      d2 = t2.height - f2;
      break;
  }
  for (let t3 = 0; t3 < a2.length; t3++) e2.fillText(a2[t3], 0, d2 + t3 * s2);
  e2.restore();
}
var tt = 100;
function nt(e2, t2, n2, r2 = 0) {
  let i2 = o;
  if (r2 > tt) return null;
  if (n2.has(e2)) return n2.get(e2);
  let a2 = t2.blocks.get(e2);
  if (!a2) return n2.set(e2, null), null;
  n2.set(e2, null);
  let s2 = 1 / 0, c2 = 1 / 0, l2 = -1 / 0, u2 = -1 / 0, d2 = false;
  for (let e3 of a2.entities) {
    let a3;
    a3 = e3[i2(383)] === `INSERT` ? rt(e3, t2, n2, r2 + 1) : H(e3), a3 && (d2 = true, s2 = Math.min(s2, a3.minX), c2 = Math[i2(366)](c2, a3[i2(302)]), l2 = Math.max(l2, a3.maxX), u2 = Math.max(u2, a3[i2(526)]));
  }
  let f2 = d2 ? { minX: s2, minY: c2, maxX: l2, maxY: u2 } : null;
  return n2[i2(430)](e2, f2), f2;
}
function rt(e2, t2, n2, r2 = 0) {
  let i2 = o, a2 = nt(e2.blockName, t2, n2, r2);
  if (!a2) return null;
  let s2 = t2.blocks.get(e2.blockName);
  if (!s2) return null;
  let c2 = s2[i2(379)].x, l2 = s2.basePoint.y, u2 = a2.minX - c2, d2 = a2.minY - l2, f2 = a2.maxX - c2, p2 = a2.maxY - l2, m2 = e2.scaleX, h2 = e2[i2(621)], g2 = u2 * m2, _2 = f2 * m2, v2 = d2 * h2, y2 = p2 * h2;
  if (g2 > _2) {
    let e3 = g2;
    g2 = _2, _2 = e3;
  }
  if (v2 > y2) {
    let e3 = v2;
    v2 = y2, y2 = e3;
  }
  let b2 = (e2.rotation || 0) * Math.PI / 180;
  if (Math.abs(b2) < 1e-10) {
    let t3 = e2.insertionPoint.x, n3 = e2.insertionPoint.y, r3 = g2 + t3, a3 = v2 + n3, o2 = _2 + t3, s3 = y2 + n3, c3 = Math[i2(615)](1, e2.columnCount), l3 = Math.max(1, e2.rowCount);
    if (c3 > 1 || l3 > 1) {
      let t4 = (c3 - 1) * e2.columnSpacing, n4 = (l3 - 1) * e2.rowSpacing;
      r3 = Math[i2(366)](r3, r3 + t4), o2 = Math.max(o2, o2 + t4), a3 = Math.min(a3, a3 + n4), s3 = Math.max(s3, s3 + n4);
    }
    return { minX: r3, minY: a3, maxX: o2, maxY: s3 };
  }
  let x2 = Math.cos(b2), S2 = Math.sin(b2), C2 = [{ x: g2, y: v2 }, { x: _2, y: v2 }, { x: _2, y: y2 }, { x: g2, y: y2 }], w2 = e2.insertionPoint.x, ee2 = e2.insertionPoint.y, T2 = 1 / 0, E2 = 1 / 0, D2 = -1 / 0, O2 = -1 / 0;
  for (let e3 of C2) {
    let t3 = e3.x * x2 - e3.y * S2 + w2, n3 = e3.x * S2 + e3.y * x2 + ee2;
    T2 = Math.min(T2, t3), E2 = Math[i2(366)](E2, n3), D2 = Math.max(D2, t3), O2 = Math.max(O2, n3);
  }
  let k2 = Math.max(1, e2.columnCount), A2 = Math.max(1, e2[i2(555)]);
  if (k2 > 1 || A2 > 1) {
    let t3 = (k2 - 1) * e2[i2(609)], n3 = (A2 - 1) * e2[i2(434)], r3 = [{ x: 0, y: 0 }, { x: t3, y: 0 }, { x: t3, y: n3 }, { x: 0, y: n3 }];
    for (let e3 of r3) {
      let t4 = e3.x * x2 - e3.y * S2, n4 = e3.x * S2 + e3.y * x2;
      T2 = Math[i2(366)](T2, T2 + t4), E2 = Math.min(E2, E2 + n4), D2 = Math[i2(615)](D2, D2 + t4), O2 = Math.max(O2, O2 + n4);
    }
  }
  return { minX: T2, minY: E2, maxX: D2, maxY: O2 };
}
function it(e2, t2) {
  let n2 = o, r2 = 1 / 0, i2 = 1 / 0, a2 = -1 / 0, s2 = -1 / 0, c2 = false, l2 = t2 ? /* @__PURE__ */ new Map() : void 0;
  for (let o2 of e2) {
    let e3 = t2 && l2 ? at(o2, t2, l2) : H(o2);
    e3 && (c2 = true, r2 = Math[n2(366)](r2, e3[n2(515)]), i2 = Math.min(i2, e3.minY), a2 = Math.max(a2, e3.maxX), s2 = Math[n2(615)](s2, e3.maxY));
  }
  return c2 ? { minX: r2, minY: i2, maxX: a2, maxY: s2 } : null;
}
function at(e2, t2, n2) {
  return e2.type === `INSERT` ? rt(e2, t2, n2) : H(e2);
}
var V = null;
function ot(e2) {
  let t2 = o, n2 = /* @__PURE__ */ new Map();
  for (let [r2, i2] of e2.blocks) {
    let e3 = Array(i2.entities.length);
    for (let n3 = 0; n3 < i2.entities[t2(321)]; n3++) e3[n3] = H(i2[t2(338)][n3]);
    n2.set(r2, e3);
  }
  return n2;
}
function st(e2) {
  V = e2;
}
function ct() {
  V = null;
}
function lt(e2, t2) {
  if (!V) return;
  let n2 = V.get(e2);
  if (!(!n2 || t2 >= n2.length)) return n2[t2];
}
function H(e2) {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  let t2 = o;
  switch (e2.type) {
    case `LINE`:
      return { minX: Math.min(e2.start.x, e2[t2(343)].x), minY: Math[t2(366)](e2.start.y, e2.end.y), maxX: Math.max(e2.start.x, e2.end.x), maxY: Math.max(e2.start.y, e2[t2(343)].y) };
    case t2(411):
      return { minX: e2.center.x - e2.radius, minY: e2[t2(470)].y - e2[t2(547)], maxX: e2.center.x + e2.radius, maxY: e2.center.y + e2.radius };
    case t2(457):
      return { minX: e2[t2(470)].x - e2[t2(547)], minY: e2.center.y - e2.radius, maxX: e2.center.x + e2.radius, maxY: e2.center.y + e2.radius };
    case `LWPOLYLINE`:
    case `POLYLINE`: {
      if (e2.vertices.length === 0) return null;
      let n2 = 1 / 0, r2 = 1 / 0, i2 = -1 / 0, a2 = -1 / 0;
      for (let o2 of e2.vertices) n2 = Math[t2(366)](n2, o2.x), r2 = Math[t2(366)](r2, o2.y), i2 = Math[t2(615)](i2, o2.x), a2 = Math.max(a2, o2.y);
      return { minX: n2, minY: r2, maxX: i2, maxY: a2 };
    }
    case `ELLIPSE`: {
      let n2 = Math[t2(435)](e2[t2(312)].x ** 2 + e2.majorAxis.y ** 2);
      return { minX: e2[t2(470)].x - n2, minY: e2.center.y - n2, maxX: e2[t2(470)].x + n2, maxY: e2.center.y + n2 };
    }
    case `TEXT`:
      return { minX: e2.insertionPoint.x, minY: e2.insertionPoint.y, maxX: e2.insertionPoint.x + e2.height * e2.text.length * 0.6, maxY: e2.insertionPoint.y + e2.height };
    case `MTEXT`:
      return { minX: e2.insertionPoint.x, minY: e2.insertionPoint.y - e2.height, maxX: e2[t2(344)].x + (e2.width || e2[t2(602)] * 10), maxY: e2.insertionPoint.y + e2.height };
    case `SPLINE`: {
      if (e2[t2(299)].length === 0) return null;
      let n2 = 1 / 0, r2 = 1 / 0, i2 = -1 / 0, a2 = -1 / 0;
      for (let o2 of e2.controlPoints) n2 = Math.min(n2, o2.x), r2 = Math[t2(366)](r2, o2.y), i2 = Math.max(i2, o2.x), a2 = Math.max(a2, o2.y);
      return { minX: n2, minY: r2, maxX: i2, maxY: a2 };
    }
    case t2(353):
      return { minX: e2.position.x, minY: e2.position.y, maxX: e2[t2(359)].x, maxY: e2[t2(359)].y };
    case t2(575):
      return { minX: e2[t2(344)].x, minY: e2[t2(344)].y, maxX: e2.insertionPoint.x, maxY: e2.insertionPoint.y };
    case `DIMENSION`:
      return e2.defPoint ? { minX: Math.min(e2.defPoint.x, ((_a = e2.defPoint2) == null ? void 0 : _a.x) ?? e2.defPoint.x, ((_b = e2.defPoint3) == null ? void 0 : _b.x) ?? e2.defPoint.x), minY: Math.min(e2[t2(559)].y, ((_c = e2[t2(322)]) == null ? void 0 : _c.y) ?? e2[t2(559)].y, ((_d = e2.defPoint3) == null ? void 0 : _d.y) ?? e2.defPoint.y), maxX: Math.max(e2.defPoint.x, ((_e2 = e2.defPoint2) == null ? void 0 : _e2.x) ?? e2.defPoint.x, ((_f = e2.defPoint3) == null ? void 0 : _f.x) ?? e2.defPoint.x), maxY: Math.max(e2.defPoint.y, ((_g = e2.defPoint2) == null ? void 0 : _g.y) ?? e2.defPoint.y, ((_h = e2.defPoint3) == null ? void 0 : _h.y) ?? e2[t2(559)].y) } : null;
    case `HATCH`: {
      let n2 = 1 / 0, r2 = 1 / 0, i2 = -1 / 0, a2 = -1 / 0, o2 = false;
      for (let s2 of e2[t2(400)]) if (s2.vertices) for (let e3 of s2.vertices) o2 = true, n2 = Math[t2(366)](n2, e3.x), r2 = Math.min(r2, e3.y), i2 = Math.max(i2, e3.x), a2 = Math.max(a2, e3.y);
      return o2 ? { minX: n2, minY: r2, maxX: i2, maxY: a2 } : null;
    }
    default:
      return null;
  }
}
var ut = /* @__PURE__ */ new Set([`LINE`, `ARC`, o(411), `LWPOLYLINE`, `POLYLINE`, `ELLIPSE`, `SPLINE`]);
function dt(e2) {
  return ut[o(536)](e2);
}
function ft(e2, t2) {
  let n2 = o;
  e2.moveTo(t2.start.x, t2.start.y), e2.lineTo(t2[n2(343)].x, t2.end.y);
}
function pt(e2, t2) {
  let n2 = o;
  if (t2[n2(547)] <= 0) return;
  let r2 = t2[n2(417)] * Math.PI / 180, i2 = t2.endAngle * Math.PI / 180;
  e2[n2(479)](t2.center.x + t2.radius * Math.cos(r2), t2.center.y + t2.radius * Math.sin(r2)), e2.arc(t2.center.x, t2.center.y, t2.radius, r2, i2, false);
}
function mt(e2, t2) {
  t2.radius <= 0 || (e2.moveTo(t2.center.x + t2.radius, t2.center.y), e2.arc(t2.center.x, t2.center.y, t2.radius, 0, Math.PI * 2));
}
function ht(e2, t2) {
  let n2 = o, r2 = t2.vertices;
  if (r2.length < 2) return;
  e2[n2(479)](r2[0].x, r2[0].y);
  let i2 = t2.closed ? r2.length : r2.length - 1;
  for (let t3 = 0; t3 < i2; t3++) {
    let i3 = r2[t3], a2 = r2[(t3 + 1) % r2[n2(321)]];
    Math[n2(582)](i3.bulge) < 1e-10 ? e2.lineTo(a2.x, a2.y) : B(e2, i3.x, i3.y, a2.x, a2.y, i3.bulge);
  }
}
function gt(e2, t2) {
  let n2 = o, r2 = t2.vertices;
  if (r2[n2(321)] < 2) return;
  e2.moveTo(r2[0].x, r2[0].y);
  let i2 = t2.closed ? r2.length : r2.length - 1;
  for (let t3 = 0; t3 < i2; t3++) {
    let i3 = r2[t3], a2 = r2[(t3 + 1) % r2.length], o2 = i3.bulge ?? 0;
    Math[n2(582)](o2) < 1e-10 ? e2.lineTo(a2.x, a2.y) : B(e2, i3.x, i3.y, a2.x, a2.y, o2);
  }
}
function _t(e2, t2) {
  let n2 = o, r2 = Math.sqrt(Math[n2(592)](t2[n2(312)].x, 2) + t2.majorAxis.y ** 2 + t2.majorAxis.z ** 2);
  if (r2 < 1e-10 || t2[n2(351)] <= 0) return;
  let i2 = r2 * t2.minorRatio, a2 = Math.atan2(t2.majorAxis.y, t2.majorAxis.x), s2 = Math.cos(a2), c2 = Math.sin(a2), l2 = Math.cos(t2[n2(403)]), u2 = Math.sin(t2.startParam);
  e2.moveTo(t2[n2(470)].x + r2 * s2 * l2 - i2 * c2 * u2, t2[n2(470)].y + r2 * c2 * l2 + i2 * s2 * u2), e2[n2(556)](t2.center.x, t2[n2(470)].y, r2, i2, a2, t2.startParam, t2.endParam, false);
}
function vt(e2, t2, n2) {
  let r2 = o, i2 = Je(t2, n2);
  if (!(i2[r2(321)] < 2)) {
    e2[r2(479)](i2[0].x, i2[0].y);
    for (let t3 = 1; t3 < i2.length; t3++) e2.lineTo(i2[t3].x, i2[t3].y);
    t2[r2(382)] & 1 && e2.closePath();
  }
}
function yt(e2, t2, n2) {
  let r2 = o;
  switch (t2.type) {
    case `LINE`:
      ft(e2, t2);
      break;
    case `ARC`:
      pt(e2, t2);
      break;
    case r2(411):
      mt(e2, t2);
      break;
    case r2(579):
      ht(e2, t2);
      break;
    case `POLYLINE`:
      gt(e2, t2);
      break;
    case `ELLIPSE`:
      _t(e2, t2);
      break;
    case `SPLINE`:
      vt(e2, t2, n2);
      break;
  }
}
var bt = 100, xt = 0.5;
function St(e2, t2, n2, r2, i2, a2, s2 = 0, c2) {
  let l2 = o;
  if (s2 > bt) return;
  let u2 = n2.blocks.get(t2.blockName);
  if (!u2) return;
  let d2 = Math[l2(615)](1, t2.columnCount), f2 = Math.max(1, t2.rowCount);
  for (let o2 = 0; o2 < f2; o2++) for (let f3 = 0; f3 < d2; f3++) {
    e2.save();
    let d3 = t2[l2(344)].x + f3 * t2[l2(609)], p2 = t2.insertionPoint.y + o2 * t2.rowSpacing;
    e2.translate(d3, p2), t2.rotation && e2[l2(293)](t2.rotation * Math.PI / 180), e2.scale(t2.scaleX, t2.scaleY), e2.translate(-u2.basePoint.x, -u2.basePoint.y);
    let m2 = a2 / (Math.max(Math[l2(582)](t2[l2(295)]), Math.abs(t2.scaleY)) || 1), h2 = null, g2 = u2.entities;
    for (let a3 = 0; a3 < g2.length; a3++) {
      let o3 = g2[a3];
      if (o3.type !== `INSERT`) {
        let e3 = lt(t2[l2(511)], a3), n3 = e3 === void 0 ? H(o3) : e3;
        if (n3) {
          let e4 = Math.max(n3[l2(424)] - n3.minX, n3.maxY - n3.minY);
          if (e4 > 0 && e4 / m2 < xt) continue;
        }
      }
      let u3 = z(o3, n2.layers, i2);
      o3[l2(383)] !== `INSERT` && dt(o3[l2(383)]) ? (u3 !== h2 && (h2 !== null && (e2.stroke(), c2 && c2.drawCalls++), h2 = u3, e2[l2(565)](), e2.strokeStyle = u3, e2.lineWidth = m2), yt(e2, o3, m2), c2 && (c2.byType[o3.type] = (c2.byType[o3.type] ?? 0) + 1)) : (h2 !== null && (e2.stroke(), c2 && c2.drawCalls++, h2 = null), e2[l2(508)] = u3, e2[l2(522)] = u3, e2.lineWidth = m2, o3.type === l2(575) ? St(e2, o3, n2, r2, i2, m2, s2 + 1, c2) : U(e2, o3, n2, r2, i2, m2, c2));
    }
    h2 !== null && (e2.stroke(), c2 && c2[l2(335)]++), e2.restore();
  }
}
function Ct(e2, t2, n2, r2, i2, a2, s2) {
  let c2 = o;
  if (t2.blockName) {
    let o2 = n2.blocks.get(t2[c2(511)]);
    if (o2) {
      for (let t3 of o2.entities) {
        let o3 = z(t3, n2.layers, i2);
        e2.strokeStyle = o3, e2[c2(522)] = o3, e2.lineWidth = a2, U(e2, t3, n2, r2, i2, a2, s2);
      }
      return;
    }
  }
  t2.defPoint2 && t2.defPoint3 && (e2.beginPath(), e2.moveTo(t2.defPoint2.x, t2.defPoint2.y), e2.lineTo(t2.defPoint.x, t2.defPoint.y), e2.stroke(), e2[c2(565)](), e2[c2(479)](t2.defPoint3.x, t2.defPoint3.y), e2.lineTo(t2.defPoint.x, t2.defPoint.y), e2[c2(509)]());
}
function wt(e2, t2) {
  var _a;
  let n2 = o;
  if (t2.boundaryPaths[n2(321)] !== 0) {
    e2.beginPath();
    for (let r2 of t2[n2(400)]) if (r2.type === `polyline` && r2.vertices && r2.vertices.length > 0) {
      let t3 = r2.vertices[0];
      e2[n2(479)](t3.x, t3.y);
      for (let t4 = 1; t4 < r2.vertices.length; t4++) {
        let i2 = r2.vertices[t4 - 1], a2 = r2[n2(574)][t4], o2 = ((_a = r2.bulges) == null ? void 0 : _a[t4 - 1]) ?? 0;
        Math.abs(o2) < 1e-10 ? e2.lineTo(a2.x, a2.y) : B(e2, i2.x, i2.y, a2.x, a2.y, o2);
      }
      r2.isClosed && e2.closePath();
    } else if (r2.type === n2(469) && r2.edges) for (let t3 = 0; t3 < r2.edges.length; t3++) {
      let i2 = r2.edges[t3];
      if (i2.type === `line`) t3 === 0 && e2.moveTo(i2.start.x, i2.start.y), e2.lineTo(i2.end.x, i2.end.y);
      else if (i2.type === n2(504)) {
        if (t3 === 0) {
          let t4 = i2.center.x + i2.radius * Math.cos(i2.startAngle * Math.PI / 180), r3 = i2.center.y + i2[n2(547)] * Math.sin(i2[n2(417)] * Math.PI / 180);
          e2.moveTo(t4, r3);
        }
        e2.arc(i2.center.x, i2.center.y, i2.radius, i2.startAngle * Math.PI / 180, i2.endAngle * Math.PI / 180, !i2.ccw);
      }
    }
    t2[n2(356)] && (e2.globalAlpha = 0.3, e2.fill(n2(604)), e2.globalAlpha = 1), e2[n2(509)]();
  }
}
function Tt(e2, t2, n2) {
  let r2 = o, i2 = n2 * 3;
  e2[r2(565)](), e2[r2(504)](t2[r2(359)].x, t2.position.y, i2, 0, Math.PI * 2), e2[r2(464)]();
}
function U(e2, t2, n2, r2, i2, a2, s2) {
  let c2 = o;
  switch (s2 && (s2.drawCalls++, s2.byType[t2[c2(383)]] = (s2.byType[t2.type] ?? 0) + 1), t2[c2(383)]) {
    case `LINE`:
      ze(e2, t2);
      break;
    case `CIRCLE`:
      Be(e2, t2);
      break;
    case `ARC`:
      Ve(e2, t2);
      break;
    case `LWPOLYLINE`:
      Ue(e2, t2);
      break;
    case `POLYLINE`:
      We(e2, t2);
      break;
    case `ELLIPSE`:
      Ge(e2, t2);
      break;
    case `SPLINE`:
      Ye(e2, t2, a2);
      break;
    case `TEXT`:
      Qe(e2, t2, a2);
      break;
    case `MTEXT`:
      et(e2, t2, a2);
      break;
    case `INSERT`:
      St(e2, t2, n2, r2, i2, a2, 0, s2);
      break;
    case `DIMENSION`:
      Ct(e2, t2, n2, r2, i2, a2, s2);
      break;
    case `HATCH`:
      wt(e2, t2);
      break;
    case `POINT`:
      Tt(e2, t2, a2);
      break;
  }
}
var Et = 0.5, Dt = class {
  constructor(e2) {
    let t2 = o;
    a(this, `ctx`, void 0), a(this, t2(396), 0), a(this, `height`, 0), this.canvas = e2;
    let n2 = e2[t2(334)](`2d`, { alpha: false });
    if (!n2) throw Error(`Failed to get 2D rendering context. The canvas may already have a different context type, or canvas rendering is not available in this environment.`);
    this.ctx = n2, this[t2(482)]();
  }
  getContext() {
    return this.ctx;
  }
  [o(303)]() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  updateSize() {
    let e2 = window.devicePixelRatio || 1, t2 = this.canvas.getBoundingClientRect();
    this.width = t2.width, this.height = t2.height, this.canvas.width = t2.width * e2, this.canvas.height = t2.height * e2;
  }
  render(e2, t2, n2, r2, i2, a2, s2) {
    let c2 = o, l2 = this[c2(588)], u2 = window.devicePixelRatio || 1, d2 = { entitiesDrawn: 0, entitiesSkipped: 0, drawCalls: 0, byType: {} };
    l2.setTransform(u2, 0, 0, u2, 0, 0), l2[c2(522)] = F[n2].backgroundColor, l2.fillRect(0, 0, this.width, this.height), R(l2, t2);
    let f2 = 1 / t2.scale;
    l2.lineCap = `round`, l2[c2(300)] = `round`;
    let p2 = null;
    for (let i3 = 0; i3 < e2.entities.length; i3++) {
      let o2 = e2.entities[i3];
      if (!o2.visible) {
        d2.entitiesSkipped++;
        continue;
      }
      if (!r2.has(o2.layer)) {
        d2.entitiesSkipped++;
        continue;
      }
      if (a2 && !a2.has(i3)) {
        d2.entitiesSkipped++;
        continue;
      }
      if (s2) {
        let e3 = s2[i3];
        if (e3) {
          let n3 = (e3.maxX - e3.minX) * t2.scale, r3 = (e3.maxY - e3[c2(302)]) * t2.scale;
          if (Math[c2(615)](n3, r3) < Et) {
            d2[c2(371)]++;
            continue;
          }
        }
      }
      let u3 = z(o2, e2[c2(307)], n2);
      dt(o2.type) ? (u3 !== p2 && (p2 !== null && (l2[c2(509)](), d2[c2(335)]++), p2 = u3, l2.beginPath(), l2.strokeStyle = u3, l2.lineWidth = f2), yt(l2, o2, f2), d2.entitiesDrawn++, d2.byType[o2[c2(383)]] = (d2.byType[o2.type] ?? 0) + 1) : (p2 !== null && (l2.stroke(), d2[c2(335)]++, p2 = null), l2[c2(508)] = u3, l2.fillStyle = u3, l2.lineWidth = f2, d2.entitiesDrawn++, U(l2, o2, e2, t2, n2, f2, d2));
    }
    if (p2 !== null && (l2.stroke(), d2.drawCalls++), i2 >= 0 && i2 < e2.entities.length) {
      let r3 = e2.entities[i2];
      R(l2, t2), l2.strokeStyle = F[n2].selectionColor, l2[c2(522)] = F[n2][c2(460)], l2.lineWidth = f2 * 3, U(l2, r3, e2, t2, n2, f2);
    }
    return d2;
  }
  renderEmpty(e2) {
    let t2 = o, n2 = this[t2(588)], r2 = window.devicePixelRatio || 1;
    n2.setTransform(r2, 0, 0, r2, 0, 0), n2.fillStyle = F[e2][t2(471)], n2.fillRect(0, 0, this[t2(396)], this.height);
  }
  [o(331)]() {
  }
}, Ot = { showFps: true, showRenderStats: true, showDocumentInfo: true, showTimings: true, showCamera: true, position: `top-left` };
function W(e2) {
  return t(t({}, Ot), e2);
}
function kt(e2) {
  return e2 === 0 ? `0 B` : e2 < 1024 ? e2 + ` B` : e2 < 1024 * 1024 ? (e2 / 1024).toFixed(1) + ` KB` : (e2 / (1024 * 1024)).toFixed(1) + ` MB`;
}
function At(e2) {
  return e2 >= 1 ? e2.toFixed(2) + `x` : `1:` + (1 / e2).toFixed(1);
}
var jt = `11px monospace`, Mt = 15, Nt = 8, G = 8, K = 10;
function Pt(e2, t2, n2, r2, i2, a2) {
  let s2 = o;
  e2.setTransform(1, 0, 0, 1, 0, 0);
  let c2 = [];
  if (r2.showFps && c2.push([s2(473) + t2.fps + `  Frame: ` + t2.frameTime.toFixed(1) + `ms`]), r2.showRenderStats) {
    let e3 = t2[s2(518)].entitiesDrawn + t2.renderStats.entitiesSkipped, n3 = [`Drawn: ` + t2.renderStats[s2(386)] + ` / ` + e3 + s2(437) + t2.renderStats.drawCalls], r3 = Object[s2(315)](t2[s2(518)].byType).sort(([, e4], [, t3]) => t3 - e4).slice(0, 6).map(([e4, t3]) => e4 + `: ` + t3).join(`  `);
    r3 && n3.push(r3), c2[s2(329)](n3);
  }
  if (r2.showDocumentInfo) {
    let e3 = [`Layers: ` + t2.visibleLayerCount + ` / ` + t2.layerCount + `  Blocks: ` + t2.blockCount];
    t2[s2(358)] && e3.push(s2(514) + t2.dxfVersion), t2.fileName && e3[s2(329)](s2(355) + t2.fileName), t2.fileSize > 0 && e3.push(s2(591) + kt(t2.fileSize)), c2.push(e3);
  }
  if (r2.showTimings) {
    let e3 = [];
    t2[s2(378)] > 0 && e3.push(`Parse: ` + t2[s2(378)].toFixed(0) + `ms`), t2[s2(597)] > 0 && e3.push(`Index: ` + t2.spatialIndexBuildTime.toFixed(0) + `ms`), t2[s2(513)] > 0 && e3.push(s2(367) + t2[s2(513)].toFixed(0) + `ms`), e3.length > 0 && c2.push([e3.join(`  `)]);
  }
  if (r2[s2(491)]) {
    let e3 = t2[s2(462)];
    c2.push([`Zoom: ` + At(t2.zoom) + `  Pixel: ` + t2[s2(483)].toFixed(2), `View: [` + e3[s2(515)][s2(365)](0) + `, ` + e3[s2(302)].toFixed(0) + `] \u2192 [` + e3.maxX.toFixed(0) + `, ` + e3.maxY.toFixed(0) + `]`]);
  }
  if (c2[s2(321)] === 0) return;
  e2.font = jt;
  let l2 = [];
  for (let e3 = 0; e3 < c2.length; e3++) {
    e3 > 0 && l2.push({ text: ``, isSeparator: true });
    for (let t3 of c2[e3]) l2.push({ text: t3, isSeparator: false });
  }
  let u2 = 0;
  for (let t3 of l2) if (!t3.isSeparator) {
    let n3 = e2.measureText(t3.text).width;
    n3 > u2 && (u2 = n3);
  }
  let d2 = u2 + G * 2, f2 = G * 2;
  for (let e3 of l2) f2 += e3.isSeparator ? Nt : Mt;
  let p2, m2;
  switch (r2[s2(359)]) {
    case `top-left`:
      p2 = K, m2 = K;
      break;
    case `top-right`:
      p2 = i2 - d2 - K, m2 = K;
      break;
    case `bottom-left`:
      p2 = K, m2 = a2 - f2 - K;
      break;
    case `bottom-right`:
      p2 = i2 - d2 - K, m2 = a2 - f2 - K;
      break;
  }
  let h2 = F[n2];
  e2[s2(522)] = n2 === `dark` ? `rgba(0, 0, 0, 0.75)` : `rgba(255, 255, 255, 0.85)`, e2.fillRect(p2, m2, d2, f2), e2.strokeStyle = n2 === `dark` ? `rgba(255, 255, 255, 0.15)` : s2(465), e2[s2(433)] = 1, e2.strokeRect(p2 + 0.5, m2 + 0.5, d2 - 1, f2 - 1), e2.fillStyle = n2 === `dark` ? h2.defaultEntityColor : s2(320), e2.textAlign = s2(594), e2.textBaseline = `top`;
  let g2 = m2 + G;
  for (let t3 of l2) t3.isSeparator ? g2 += Nt : (e2.fillText(t3.text, p2 + G, g2), g2 += Mt);
}
var Ft = class {
  constructor() {
    a(this, `layers`, /* @__PURE__ */ new Map()), a(this, `visibility`, /* @__PURE__ */ new Map()), a(this, `colorOverrides`, /* @__PURE__ */ new Map()), a(this, `visibleCache`, null);
  }
  [o(502)](e2) {
    let t2 = o;
    this.layers = new Map(e2), this.visibility.clear(), this.colorOverrides.clear(), this.visibleCache = null;
    for (let [e3, n2] of this.layers) this[t2(380)].set(e3, !n2[t2(512)] && !n2.isFrozen);
  }
  getAllLayers() {
    return Array.from(this.layers.values());
  }
  setVisible(e2, t2) {
    let n2 = o;
    this.visibility[n2(430)](e2, t2), this.visibleCache = null;
  }
  isVisible(e2) {
    return this.visibility.get(e2) ?? true;
  }
  setColorOverride(e2, t2) {
    this.colorOverrides.set(e2, t2);
  }
  getColorOverride(e2) {
    let t2 = o;
    return this[t2(410)].get(e2);
  }
  getVisibleLayerNames() {
    let e2 = o;
    if (this.visibleCache) return this.visibleCache;
    let t2 = /* @__PURE__ */ new Set();
    for (let [n2, r2] of this[e2(380)]) r2 && t2[e2(614)](n2);
    return this.visibleCache = t2, t2;
  }
  clear() {
    let e2 = o;
    this.layers.clear(), this.visibility.clear(), this[e2(410)].clear(), this.visibleCache = null;
  }
}, It = class {
  constructor() {
    a(this, `listeners`, /* @__PURE__ */ new Map());
  }
  on(e2, t2) {
    let n2 = o;
    this[n2(324)].has(e2) || this.listeners[n2(430)](e2, /* @__PURE__ */ new Set()), this.listeners.get(e2).add(t2);
  }
  off(e2, t2) {
    let n2 = o;
    var r2;
    (r2 = this[n2(324)].get(e2)) == null || r2.delete(t2);
  }
  emit(e2, t2) {
    let n2 = this.listeners.get(e2);
    if (n2) for (let e3 of n2) e3(t2);
  }
  removeAllListeners() {
    this.listeners.clear();
  }
}, Lt = class {
  constructor(e2, t2) {
    let n2 = o;
    a(this, n2(453), false), a(this, `lastX`, 0), a(this, n2(455), 0), a(this, `touches`, /* @__PURE__ */ new Map()), a(this, `onPointerDown`, void 0), a(this, `onPointerMove`, void 0), a(this, `onPointerUp`, void 0), a(this, `onWheel`, void 0), a(this, `onTouchStart`, void 0), a(this, `onTouchMove`, void 0), a(this, `onTouchEnd`, void 0), a(this, `onContextMenu`, void 0), this[n2(404)] = e2, this.viewer = t2, this.onPointerDown = this[n2(576)].bind(this), this.onPointerMove = this.handlePointerMove[n2(466)](this), this.onPointerUp = this.handlePointerUp.bind(this), this.onWheel = this.handleWheel.bind(this), this.onTouchStart = this[n2(467)].bind(this), this[n2(429)] = this.handleTouchMove.bind(this), this.onTouchEnd = this.handleTouchEnd.bind(this), this.onContextMenu = (e3) => e3.preventDefault(), e2[n2(308)](`pointerdown`, this[n2(405)]), e2.addEventListener(n2(501), this.onPointerMove), e2.addEventListener(`pointerup`, this.onPointerUp), e2.addEventListener(`wheel`, this.onWheel, { passive: false }), e2.addEventListener(n2(572), this.onTouchStart, { passive: false }), e2.addEventListener(`touchmove`, this.onTouchMove, { passive: false }), e2.addEventListener(`touchend`, this.onTouchEnd), e2.addEventListener(`contextmenu`, this.onContextMenu);
  }
  [o(331)]() {
    let e2 = o;
    this.canvas.removeEventListener(e2(535), this.onPointerDown), this.canvas.removeEventListener(`pointermove`, this.onPointerMove), this.canvas[e2(337)](`pointerup`, this.onPointerUp), this.canvas.removeEventListener(`wheel`, this[e2(327)]), this.canvas.removeEventListener(`touchstart`, this.onTouchStart), this.canvas.removeEventListener(`touchmove`, this.onTouchMove), this.canvas.removeEventListener(e2(413), this[e2(309)]), this.canvas.removeEventListener(`contextmenu`, this[e2(363)]);
  }
  handlePointerDown(e2) {
    let t2 = o, n2 = this.viewer[t2(328)](), r2 = this.canvas[t2(436)](), i2 = e2.clientX - r2.left, a2 = e2.clientY - r2.top;
    e2.button === 0 && n2 === `pan` || e2.button === 1 ? this.startPan(e2, i2, a2) : e2.button === 0 && (n2 === `select` || n2 === `measure`) && this.viewer.handleClick(i2, a2);
  }
  startPan(e2, t2, n2) {
    let r2 = o;
    this.isPanning = true, this.lastX = t2, this[r2(455)] = n2, this.canvas.setPointerCapture(e2[r2(420)]), this.canvas.style[r2(323)] = `grabbing`;
  }
  handlePointerMove(e2) {
    let t2 = o, n2 = this.canvas.getBoundingClientRect(), r2 = e2[t2(507)] - n2.left, i2 = e2.clientY - n2.top;
    if (this[t2(453)]) {
      let e3 = r2 - this[t2(537)], n3 = i2 - this.lastY;
      this.lastX = r2, this.lastY = i2, this[t2(348)].handlePan(e3, n3);
    } else this.viewer[t2(311)](r2, i2);
  }
  handlePointerUp(e2) {
    let t2 = o;
    this.isPanning && (this.isPanning = false, this.canvas[t2(398)](e2.pointerId), this.canvas.style[t2(323)] = this.viewer[t2(328)]() === `pan` ? `grab` : `crosshair`);
  }
  handleWheel(e2) {
    let t2 = o;
    e2.preventDefault();
    let n2 = this.canvas.getBoundingClientRect(), r2 = e2[t2(507)] - n2.left, i2 = e2.clientY - n2.top, a2 = -Math.sign(e2.deltaY), s2 = this[t2(348)].getZoomSpeed(), c2 = a2 > 0 ? s2 : 1 / s2;
    this.viewer.handleZoom(r2, i2, c2);
  }
  handleTouchStart(e2) {
    let t2 = o;
    e2.preventDefault();
    for (let n2 of Array.from(e2.changedTouches)) this[t2(505)][t2(430)](n2.identifier, { x: n2[t2(507)], y: n2[t2(590)] });
  }
  handleTouchMove(e2) {
    let t2 = o;
    if (e2.preventDefault(), this.touches.size === 2 && e2[t2(505)].length === 2) {
      let n2 = e2.touches[0], r2 = e2.touches[1], i2 = Array.from(this.touches[t2(369)]()), a2 = Math.hypot(i2[0].x - i2[1].x, i2[0].y - i2[1].y), o2 = Math.hypot(n2.clientX - r2.clientX, n2.clientY - r2.clientY);
      if (a2 > 0) {
        let e3 = o2 / a2, s2 = this.canvas[t2(436)](), c2 = (i2[0].x + i2[1].x) / 2 - s2.left, l2 = (i2[0].y + i2[1].y) / 2 - s2.top, u2 = (n2.clientX + r2[t2(507)]) / 2 - s2.left, d2 = (n2.clientY + r2.clientY) / 2 - s2.top;
        this.viewer.handleZoom(c2, l2, e3), this.viewer.handlePan(u2 - c2, d2 - l2);
      }
    } else if (this.touches.size === 1 && e2.touches[t2(321)] === 1) {
      let n2 = e2.touches[0], r2 = this.touches.get(n2.identifier);
      r2 && this[t2(348)][t2(519)](n2.clientX - r2.x, n2[t2(590)] - r2.y);
    }
    for (let n2 of Array.from(e2.changedTouches)) this.touches.set(n2.identifier, { x: n2[t2(507)], y: n2.clientY });
  }
  handleTouchEnd(e2) {
    let t2 = o;
    for (let n2 of Array[t2(498)](e2.changedTouches)) this.touches.delete(n2.identifier);
  }
}, Rt = 5, zt = class {
  constructor() {
    let e2 = o;
    a(this, e2(520), new u()), a(this, e2(564), []), a(this, `entityBBoxes`, []);
  }
  [o(612)](e2, n2) {
    let r2 = o;
    this[r2(564)] = [], this[r2(618)] = Array(e2.length).fill(null);
    let i2 = n2 ? /* @__PURE__ */ new Map() : void 0;
    for (let a2 = 0; a2 < e2.length; a2++) {
      let o2 = e2[a2], s2 = n2 && i2 ? at(o2, n2, i2) : H(o2);
      this[r2(618)][a2] = s2, s2 && this.items.push(t(t({}, s2), {}, { entityIndex: a2 }));
    }
    this.tree.clear(), this.tree.load(this[r2(564)]);
  }
  search(e2, t2, n2, r2) {
    return this.tree.search({ minX: e2, minY: t2, maxX: n2, maxY: r2 });
  }
  [o(552)](e2) {
    return this.entityBBoxes[e2] ?? null;
  }
  [o(313)]() {
    return this.entityBBoxes;
  }
  clear() {
    this.tree.clear(), this.items = [], this.entityBBoxes = [];
  }
};
function q(e2, t2, n2, r2, i2, a2) {
  let s2 = o, c2 = Rt / a2, l2 = r2.search(e2 - c2, t2 - c2, e2 + c2, t2 + c2), u2 = c2, d2 = -1;
  for (let r3 = l2.length - 1; r3 >= 0; r3--) {
    let a3 = l2[r3], o2 = n2[a3.entityIndex];
    if (!o2 || !i2[s2(536)](o2.layer) || !o2[s2(596)]) continue;
    let c3 = Bt(e2, t2, o2);
    c3 < u2 && (u2 = c3, d2 = a3.entityIndex);
  }
  return d2;
}
function Bt(e2, t2, n2) {
  let r2 = o;
  switch (n2.type) {
    case `LINE`:
      return J(e2, t2, n2.start.x, n2[r2(619)].y, n2.end.x, n2.end.y);
    case `CIRCLE`:
      return Vt(e2, t2, n2.center.x, n2.center.y, n2.radius);
    case r2(457):
      return Ht(e2, t2, n2[r2(470)].x, n2.center.y, n2.radius, n2.startAngle * Math.PI / 180, n2.endAngle * Math.PI / 180);
    case `LWPOLYLINE`:
    case `POLYLINE`: {
      let i2 = 1 / 0, a2 = n2[r2(574)], o2 = n2.closed ? a2[r2(321)] : a2.length - 1;
      for (let n3 = 0; n3 < o2; n3++) {
        let r3 = a2[n3], o3 = a2[(n3 + 1) % a2.length], s2 = J(e2, t2, r3.x, r3.y, o3.x, o3.y);
        i2 = Math.min(i2, s2);
      }
      return i2;
    }
    case r2(544):
      return Wt(e2, t2, n2[r2(470)].x, n2.center.y, n2.majorAxis, n2.minorRatio);
    case `TEXT`:
    case `MTEXT`: {
      let r3 = H(n2);
      return r3 ? Ut(e2, t2, r3.minX, r3.minY, r3.maxX, r3.maxY) : 1 / 0;
    }
    case `POINT`:
      return Math.hypot(e2 - n2[r2(359)].x, t2 - n2.position.y);
    case `SPLINE`: {
      let r3 = 1 / 0, i2 = n2.controlPoints;
      for (let n3 = 0; n3 < i2.length - 1; n3++) {
        let a2 = J(e2, t2, i2[n3].x, i2[n3].y, i2[n3 + 1].x, i2[n3 + 1].y);
        r3 = Math.min(r3, a2);
      }
      return r3;
    }
    default:
      return 1 / 0;
  }
}
function J(e2, t2, n2, r2, i2, a2) {
  let o2 = i2 - n2, s2 = a2 - r2, c2 = o2 * o2 + s2 * s2;
  if (c2 === 0) return Math.hypot(e2 - n2, t2 - r2);
  let l2 = ((e2 - n2) * o2 + (t2 - r2) * s2) / c2;
  l2 = Math.max(0, Math.min(1, l2));
  let u2 = n2 + l2 * o2, d2 = r2 + l2 * s2;
  return Math.hypot(e2 - u2, t2 - d2);
}
function Vt(e2, t2, n2, r2, i2) {
  return Math.abs(Math.hypot(e2 - n2, t2 - r2) - i2);
}
function Ht(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = (Math.atan2(t2 - r2, e2 - n2) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI), c2 = (a2 % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI), l2 = (o2 % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
  if (c2 <= l2 ? s2 >= c2 && s2 <= l2 : s2 >= c2 || s2 <= l2) return Math.abs(Math.hypot(e2 - n2, t2 - r2) - i2);
  let u2 = Math.hypot(e2 - (n2 + i2 * Math.cos(a2)), t2 - (r2 + i2 * Math.sin(a2))), d2 = Math.hypot(e2 - (n2 + i2 * Math.cos(o2)), t2 - (r2 + i2 * Math.sin(o2)));
  return Math.min(u2, d2);
}
function Y() {
  let e2 = [`arrayBuffer`, `getCursorForTool`, `from`, `sin`, `startsWith`, `pointermove`, `setLayers`, `code`, `arc`, `touches`, `ascii`, `clientX`, `strokeStyle`, `stroke`, `obliqueAngle`, `blockName`, `isOff`, `totalLoadTime`, `DXF: `, `minX`, `373923rnedQU`, `defPoint4`, `renderStats`, `handlePan`, `tree`, `"Times New Roman", serif`, `fillStyle`, `hypot`, `substring`, `windows-1255`, `maxY`, `degree`, `getViewTransform`, `ccw`, `85LEPUip`, `worker`, `renderPending`, `color`, `AC1021`, `pointerdown`, `has`, `lastX`, `$LTSCALE`, `currentTool`, `Worker error`, `getWorker`, `9935388GChcTi`, `pop`, `ELLIPSE`, `utf-8`, `all`, `radius`, `loadString`, `ensureMap`, `selectedEntityIndex`, `font`, `getEntityBBox`, `startTangent`, `spatialIndex`, `rowCount`, `ellipse`, `endTangent`, `save`, `defPoint`, `BLOCK`, `text`, `reviveDocument`, `right`, `items`, `beginPath`, `state`, `blocks`, `shift`, `workerManager`, `setTheme`, `4YBVQag`, `touchstart`, `dimType`, `vertices`, `INSERT`, `handlePointerDown`, `#000000`, `activate`, `LWPOLYLINE`, `loadGeneration`, `guardDestroyed`, `abs`, `ltScale`, `padStart`, `_maxEntries`, `debugOptions`, `pan`, `ctx`, `measureTool`, `clientY`, `Size: `, `pow`, `pattern`, `left`, `debugRafId`, `visible`, `spatialIndexBuildTime`, `alignmentPoint`, `maxScale`, `currentSnap`, `formatConverters`, `height`, `transform`, `evenodd`, `endParam`, `point`, `TEXT`, `constantWidth`, `columnSpacing`, `byteLength`, `ENDBLK`, `build`, `#333333`, `add`, `max`, `#ffffff`, `path`, `entityBBoxes`, `start`, `resizeObserver`, `scaleY`, `pending`, `blobUrl`, `string`, `LTYPE`, `alphabetic`, `rotate`, `windows-1256`, `scaleX`, `endWidth`, `72YdNjmd`, `fitPoints`, `controlPoints`, `lineJoin`, `loadDocument`, `minY`, `getWidth`, `lineTo`, `2538650jDShyc`, `lineSpacingStyle`, `layers`, `addEventListener`, `onTouchEnd`, `generationFlags`, `handleMouseMove`, `majorAxis`, `getEntityBBoxes`, `nextIndex`, `entries`, `hAlign`, `STANDARD`, `measureColor`, `AutoCAD Binary DXF`, `rgba(0, 0, 0, 0.85)`, `length`, `defPoint2`, `cursor`, `listeners`, `style`, `insUnits`, `onWheel`, `getTool`, `push`, `resize`, `destroy`, `getLayers`, `vAlign`, `getContext`, `drawCalls`, `startWidth`, `removeEventListener`, `entities`, `floor`, `firstPoint`, `bulges`, `clearDocument`, `end`, `insertionPoint`, `_build`, `widthFactor`, `size`, `viewer`, `replace`, `acadVersion`, `minorRatio`, `header`, `POINT`, `717sMuxji`, `File: `, `solidFill`, `sort`, `dxfVersion`, `position`, `HEADER`, `textDirection`, `requestRender`, `onContextMenu`, `options`, `toFixed`, `min`, `Load: `, `extrusion`, `values`, `indexOf`, `entitiesSkipped`, `second-point`, `object`, `onDocumentLoaded`, `frameTimestamps`, `setTransform`, `defPoint5`, `parseTime`, `basePoint`, `visibility`, `debugEnabled`, `flags`, `type`, `extMin`, `renderEmpty`, `entitiesDrawn`, `setLineDash`, `fitToView`, `offsetY`, `first-point`, `destroyed`, `fillRect`, `parseWithOptionalWorker`, `tag`, `emit`, `width`, `name`, `releasePointerCapture`, `atan2`, `boundaryPaths`, `startDebugLoop`, `setColorOverride`, `startParam`, `canvas`, `onPointerDown`, `select`, `22KsrDTT`, `closed`, `"Courier New", monospace`, `colorOverrides`, `CIRCLE`, `runConverters`, `touchend`, `camera`, `leaf`, `doRender`, `startAngle`, `error`, `getDocument`, `pointerId`, `scale`, `_minEntries`, `render`, `maxX`, `split`, `patternScale`, `children`, `inputHandler`, `onTouchMove`, `set`, `clear`, `extMax`, `lineWidth`, `rowSpacing`, `sqrt`, `getBoundingClientRect`, `  Calls: `, `_chooseSubtree`, `215706rUksSk`, `terminate`, `search`, `computeViewportBounds`, `renderer`, `doc`, `zoomSpeed`, `measure`, `midpoint`, `layerManager`, `toBBox`, `minZoom`, `endpoint`, `getTransform`, `isPanning`, `1684yVbBPF`, `lastY`, `elevation`, `ARC`, `delete`, `endAngle`, `selectionColor`, `done`, `viewportBounds`, `data`, `fill`, `rgba(0, 0, 0, 0.15)`, `bind`, `handleTouchStart`, `now`, `edges`, `center`, `backgroundColor`, `postMessage`, `FPS: `, '"use strict";(()=>{function h(a){let e=a.replace(/\\r\\n?/g,`\n`),t=[],r=e.length,n=0;for(;n<r;){for(;n<r&&e.charCodeAt(n)===10;)n++;if(n>=r)break;let o=e.indexOf(`\n`,n);o===-1&&(o=r);let c=e.substring(n,o).trim();n=o+1;let s=parseInt(c,10);if(isNaN(s)){n<r&&(o=e.indexOf(`\n`,n),o===-1&&(o=r),n=o+1);continue}if(n>=r)break;o=e.indexOf(`\n`,n),o===-1&&(o=r);let p=e.substring(n,o).replace(/\\s+$/,"");n=o+1,t.push({code:s,value:p})}return t}function m(a,e,t){for(;e<a.length;){let r=a[e];if(r.code===0&&r.value==="ENDSEC")return e+1;if(r.code===9){let n=r.value;switch(e++,n){case"$ACADVER":e<a.length&&(t.acadVersion=a[e].value,e++);break;case"$EXTMIN":if(e<a.length){let o=v(a,e);t.extMin=o.point,e=o.nextIndex}break;case"$EXTMAX":if(e<a.length){let o=v(a,e);t.extMax=o.point,e=o.nextIndex}break;case"$INSUNITS":e<a.length&&(t.insUnits=parseInt(a[e].value,10),e++);break;case"$MEASUREMENT":e<a.length&&(t.measurement=parseInt(a[e].value,10),e++);break;case"$LTSCALE":e<a.length&&(t.ltScale=parseFloat(a[e].value),e++);break;case"$DWGCODEPAGE":e<a.length&&(t.dwgCodePage=a[e].value,e++);break;case"$HANDSEED":e<a.length&&(t.handleSeed=a[e].value,e++);break;default:for(;e<a.length&&a[e].code!==9&&a[e].code!==0;)t[n]=a[e].value,e++}}else e++}return e}function v(a,e){let t={x:0,y:0,z:0};for(;e<a.length;){let r=a[e].code;if(r===10)t.x=parseFloat(a[e].value),e++;else if(r===20)t.y=parseFloat(a[e].value),e++;else if(r===30)t.z=parseFloat(a[e].value),e++;else break}return{point:t,nextIndex:e}}function k(a,e,t){for(;e<a.length;){let r=a[e];if(r.code===0&&r.value==="ENDSEC")return e+1;if(r.code===0&&r.value==="TABLE"){if(e++,e>=a.length)break;let n=a[e].value;switch(e++,n){case"LAYER":e=H(a,e,t.layers);break;case"LTYPE":e=O(a,e,t.lineTypes);break;case"STYLE":e=_(a,e,t.styles);break;default:e=R(a,e);break}}else e++}return e}function R(a,e){for(;e<a.length;){if(a[e].code===0&&a[e].value==="ENDTAB")return e+1;e++}return e}function H(a,e,t){for(;e<a.length;){let r=a[e];if(r.code===0&&r.value==="ENDTAB")return e+1;if(r.code===0&&r.value==="LAYER"){e++;let n={name:"0",color:7,lineType:"Continuous",flags:0,lineWeight:-3,isOff:!1,isFrozen:!1,isLocked:!1};for(;e<a.length&&a[e].code!==0;){let o=a[e];switch(o.code){case 2:n.name=o.value;break;case 6:n.lineType=o.value;break;case 62:n.color=parseInt(o.value,10);break;case 70:n.flags=parseInt(o.value,10);break;case 370:n.lineWeight=parseInt(o.value,10);break;case 420:n.trueColor=parseInt(o.value,10);break}e++}t.set(n.name,n)}else e++}return e}function O(a,e,t){for(;e<a.length;){let r=a[e];if(r.code===0&&r.value==="ENDTAB")return e+1;if(r.code===0&&r.value==="LTYPE"){e++;let n={name:"",description:"",pattern:[],totalLength:0};for(;e<a.length&&a[e].code!==0;){let o=a[e];switch(o.code){case 2:n.name=o.value;break;case 3:n.description=o.value;break;case 40:n.totalLength=parseFloat(o.value);break;case 49:n.pattern.push(parseFloat(o.value));break}e++}n.name&&t.set(n.name,n)}else e++}return e}function _(a,e,t){for(;e<a.length;){let r=a[e];if(r.code===0&&r.value==="ENDTAB")return e+1;if(r.code===0&&r.value==="STYLE"){e++;let n={name:"",fontName:"",bigFontName:"",height:0,widthFactor:1,obliqueAngle:0};for(;e<a.length&&a[e].code!==0;){let o=a[e];switch(o.code){case 2:n.name=o.value;break;case 3:n.fontName=o.value;break;case 4:n.bigFontName=o.value;break;case 40:n.height=parseFloat(o.value);break;case 41:n.widthFactor=parseFloat(o.value);break;case 50:n.obliqueAngle=parseFloat(o.value);break}e++}n.name&&t.set(n.name,n)}else e++}return e}function l(a){let e={type:"",layer:"0",color:256,lineType:"BYLAYER",lineTypeScale:1,lineWeight:-1,visible:!0,extrusion:{x:0,y:0,z:1}};for(let t of a)switch(t.code){case 5:e.handle=t.value;break;case 8:e.layer=t.value;break;case 6:e.lineType=t.value;break;case 48:e.lineTypeScale=parseFloat(t.value);break;case 60:e.visible=t.value==="0"||t.value==="";break;case 62:e.color=parseInt(t.value,10);break;case 370:e.lineWeight=parseInt(t.value,10);break;case 420:e.trueColor=parseInt(t.value,10);break;case 210:e.extrusion.x=parseFloat(t.value);break;case 220:e.extrusion.y=parseFloat(t.value);break;case 230:e.extrusion.z=parseFloat(t.value);break}return e}function D(a){let t={...l(a),type:"LINE",start:{x:0,y:0,z:0},end:{x:0,y:0,z:0}};for(let r of a)switch(r.code){case 10:t.start.x=parseFloat(r.value);break;case 20:t.start.y=parseFloat(r.value);break;case 30:t.start.z=parseFloat(r.value);break;case 11:t.end.x=parseFloat(r.value);break;case 21:t.end.y=parseFloat(r.value);break;case 31:t.end.z=parseFloat(r.value);break}return t}function F(a){let t={...l(a),type:"CIRCLE",center:{x:0,y:0,z:0},radius:0};for(let r of a)switch(r.code){case 10:t.center.x=parseFloat(r.value);break;case 20:t.center.y=parseFloat(r.value);break;case 30:t.center.z=parseFloat(r.value);break;case 40:t.radius=parseFloat(r.value);break}return t}function E(a){let t={...l(a),type:"ARC",center:{x:0,y:0,z:0},radius:0,startAngle:0,endAngle:360};for(let r of a)switch(r.code){case 10:t.center.x=parseFloat(r.value);break;case 20:t.center.y=parseFloat(r.value);break;case 30:t.center.z=parseFloat(r.value);break;case 40:t.radius=parseFloat(r.value);break;case 50:t.startAngle=parseFloat(r.value);break;case 51:t.endAngle=parseFloat(r.value);break}return t}function P(a){let t={...l(a),type:"LWPOLYLINE",vertices:[],closed:!1,constantWidth:0,elevation:0},r=null;for(let n of a)switch(n.code){case 70:t.closed=(parseInt(n.value,10)&1)!==0;break;case 38:t.elevation=parseFloat(n.value);break;case 43:t.constantWidth=parseFloat(n.value);break;case 10:r&&t.vertices.push(r),r={x:parseFloat(n.value),y:0,bulge:0,startWidth:0,endWidth:0};break;case 20:r&&(r.y=parseFloat(n.value));break;case 40:r&&(r.startWidth=parseFloat(n.value));break;case 41:r&&(r.endWidth=parseFloat(n.value));break;case 42:r&&(r.bulge=parseFloat(n.value));break}return r&&t.vertices.push(r),t}function T(a){let t={...l(a),type:"POLYLINE",vertices:[],closed:!1,is3d:!1};for(let r of a)if(r.code===70){let n=parseInt(r.value,10);t.closed=(n&1)!==0,t.is3d=(n&8)!==0}return t}function w(a){let t={...l(a),type:"ELLIPSE",center:{x:0,y:0,z:0},majorAxis:{x:1,y:0,z:0},minorRatio:1,startParam:0,endParam:Math.PI*2};for(let r of a)switch(r.code){case 10:t.center.x=parseFloat(r.value);break;case 20:t.center.y=parseFloat(r.value);break;case 30:t.center.z=parseFloat(r.value);break;case 11:t.majorAxis.x=parseFloat(r.value);break;case 21:t.majorAxis.y=parseFloat(r.value);break;case 31:t.majorAxis.z=parseFloat(r.value);break;case 40:t.minorRatio=parseFloat(r.value);break;case 41:t.startParam=parseFloat(r.value);break;case 42:t.endParam=parseFloat(r.value);break}return t}function g(a){let t={...l(a),type:"SPLINE",degree:3,flags:0,knots:[],controlPoints:[],fitPoints:[],weights:[]},r=null,n=null;for(let o of a)switch(o.code){case 70:t.flags=parseInt(o.value,10);break;case 71:t.degree=parseInt(o.value,10);break;case 40:t.knots.push(parseFloat(o.value));break;case 41:t.weights.push(parseFloat(o.value));break;case 10:r&&t.controlPoints.push(r),r={x:parseFloat(o.value),y:0,z:0};break;case 20:r&&(r.y=parseFloat(o.value));break;case 30:r&&(r.z=parseFloat(o.value));break;case 11:n&&t.fitPoints.push(n),n={x:parseFloat(o.value),y:0,z:0};break;case 21:n&&(n.y=parseFloat(o.value));break;case 31:n&&(n.z=parseFloat(o.value));break;case 12:t.startTangent||(t.startTangent={x:0,y:0,z:0}),t.startTangent.x=parseFloat(o.value);break;case 22:t.startTangent&&(t.startTangent.y=parseFloat(o.value));break;case 32:t.startTangent&&(t.startTangent.z=parseFloat(o.value));break;case 13:t.endTangent||(t.endTangent={x:0,y:0,z:0}),t.endTangent.x=parseFloat(o.value);break;case 23:t.endTangent&&(t.endTangent.y=parseFloat(o.value));break;case 33:t.endTangent&&(t.endTangent.z=parseFloat(o.value));break}return r&&t.controlPoints.push(r),n&&t.fitPoints.push(n),t}function I(a){let t={...l(a),type:"TEXT",text:"",insertionPoint:{x:0,y:0,z:0},height:1,rotation:0,widthFactor:1,obliqueAngle:0,style:"STANDARD",hAlign:0,vAlign:0,generationFlags:0};for(let r of a)switch(r.code){case 1:t.text=r.value;break;case 10:t.insertionPoint.x=parseFloat(r.value);break;case 20:t.insertionPoint.y=parseFloat(r.value);break;case 30:t.insertionPoint.z=parseFloat(r.value);break;case 11:t.alignmentPoint||(t.alignmentPoint={x:0,y:0,z:0}),t.alignmentPoint.x=parseFloat(r.value);break;case 21:t.alignmentPoint||(t.alignmentPoint={x:0,y:0,z:0}),t.alignmentPoint.y=parseFloat(r.value);break;case 31:t.alignmentPoint||(t.alignmentPoint={x:0,y:0,z:0}),t.alignmentPoint.z=parseFloat(r.value);break;case 40:t.height=parseFloat(r.value);break;case 41:t.widthFactor=parseFloat(r.value);break;case 50:t.rotation=parseFloat(r.value);break;case 51:t.obliqueAngle=parseFloat(r.value);break;case 7:t.style=r.value;break;case 71:t.generationFlags=parseInt(r.value,10);break;case 72:t.hAlign=parseInt(r.value,10);break;case 73:t.vAlign=parseInt(r.value,10);break}return t}function A(a){let t={...l(a),type:"MTEXT",text:"",insertionPoint:{x:0,y:0,z:0},height:1,width:0,attachmentPoint:1,drawingDirection:1,rotation:0,lineSpacingStyle:1,lineSpacingFactor:1,style:"STANDARD",bgFill:0,bgFillScale:1.5},r=[];for(let n of a)switch(n.code){case 1:r.push(n.value);break;case 3:r.push(n.value);break;case 7:t.style=n.value;break;case 10:t.insertionPoint.x=parseFloat(n.value);break;case 20:t.insertionPoint.y=parseFloat(n.value);break;case 30:t.insertionPoint.z=parseFloat(n.value);break;case 11:t.textDirection||(t.textDirection={x:0,y:0,z:0}),t.textDirection.x=parseFloat(n.value);break;case 21:t.textDirection||(t.textDirection={x:0,y:0,z:0}),t.textDirection.y=parseFloat(n.value);break;case 31:t.textDirection||(t.textDirection={x:0,y:0,z:0}),t.textDirection.z=parseFloat(n.value);break;case 40:t.height=parseFloat(n.value);break;case 41:t.width=parseFloat(n.value);break;case 44:t.lineSpacingFactor=parseFloat(n.value);break;case 50:t.rotation=parseFloat(n.value);break;case 71:t.attachmentPoint=parseInt(n.value,10);break;case 72:t.drawingDirection=parseInt(n.value,10);break;case 73:t.lineSpacingStyle=parseInt(n.value,10);break;case 90:t.bgFill=parseInt(n.value,10);break}return t.text=r.join(""),t}function z(a){let t={...l(a),type:"INSERT",blockName:"",insertionPoint:{x:0,y:0,z:0},scaleX:1,scaleY:1,scaleZ:1,rotation:0,columnCount:1,rowCount:1,columnSpacing:0,rowSpacing:0,attribs:[]};for(let r of a)switch(r.code){case 2:t.blockName=r.value;break;case 10:t.insertionPoint.x=parseFloat(r.value);break;case 20:t.insertionPoint.y=parseFloat(r.value);break;case 30:t.insertionPoint.z=parseFloat(r.value);break;case 41:t.scaleX=parseFloat(r.value);break;case 42:t.scaleY=parseFloat(r.value);break;case 43:t.scaleZ=parseFloat(r.value);break;case 44:t.columnSpacing=parseFloat(r.value);break;case 45:t.rowSpacing=parseFloat(r.value);break;case 50:t.rotation=parseFloat(r.value);break;case 70:t.columnCount=parseInt(r.value,10)||1;break;case 71:t.rowCount=parseInt(r.value,10)||1;break}return t}function S(a){let t={...l(a),type:"DIMENSION",blockName:"",dimStyle:"STANDARD",dimType:0,defPoint:{x:0,y:0,z:0},textMidpoint:{x:0,y:0,z:0},textOverride:"",rotation:0,textRotation:0,leaderLength:0};for(let r of a)switch(r.code){case 1:t.textOverride=r.value;break;case 2:t.blockName=r.value;break;case 3:t.dimStyle=r.value;break;case 10:t.defPoint.x=parseFloat(r.value);break;case 20:t.defPoint.y=parseFloat(r.value);break;case 30:t.defPoint.z=parseFloat(r.value);break;case 11:t.textMidpoint.x=parseFloat(r.value);break;case 21:t.textMidpoint.y=parseFloat(r.value);break;case 31:t.textMidpoint.z=parseFloat(r.value);break;case 13:t.defPoint2||(t.defPoint2={x:0,y:0,z:0}),t.defPoint2.x=parseFloat(r.value);break;case 23:t.defPoint2||(t.defPoint2={x:0,y:0,z:0}),t.defPoint2.y=parseFloat(r.value);break;case 33:t.defPoint2||(t.defPoint2={x:0,y:0,z:0}),t.defPoint2.z=parseFloat(r.value);break;case 14:t.defPoint3||(t.defPoint3={x:0,y:0,z:0}),t.defPoint3.x=parseFloat(r.value);break;case 24:t.defPoint3||(t.defPoint3={x:0,y:0,z:0}),t.defPoint3.y=parseFloat(r.value);break;case 34:t.defPoint3||(t.defPoint3={x:0,y:0,z:0}),t.defPoint3.z=parseFloat(r.value);break;case 15:t.defPoint4||(t.defPoint4={x:0,y:0,z:0}),t.defPoint4.x=parseFloat(r.value);break;case 25:t.defPoint4||(t.defPoint4={x:0,y:0,z:0}),t.defPoint4.y=parseFloat(r.value);break;case 35:t.defPoint4||(t.defPoint4={x:0,y:0,z:0}),t.defPoint4.z=parseFloat(r.value);break;case 16:t.defPoint5||(t.defPoint5={x:0,y:0,z:0}),t.defPoint5.x=parseFloat(r.value);break;case 26:t.defPoint5||(t.defPoint5={x:0,y:0,z:0}),t.defPoint5.y=parseFloat(r.value);break;case 36:t.defPoint5||(t.defPoint5={x:0,y:0,z:0}),t.defPoint5.z=parseFloat(r.value);break;case 40:t.leaderLength=parseFloat(r.value);break;case 50:t.rotation=parseFloat(r.value);break;case 53:t.textRotation=parseFloat(r.value);break;case 70:t.dimType=parseInt(r.value,10);break}return t}function N(a){let t={...l(a),type:"HATCH",patternName:"",solidFill:!0,associative:!1,hatchStyle:0,patternType:1,patternAngle:0,patternScale:1,boundaryPaths:[]},r=0;for(;r<a.length;){let n=a[r];switch(n.code){case 2:t.patternName=n.value;break;case 41:t.patternScale=parseFloat(n.value);break;case 52:t.patternAngle=parseFloat(n.value);break;case 70:t.solidFill=n.value==="1";break;case 71:t.associative=n.value==="1";break;case 75:t.hatchStyle=parseInt(n.value,10);break;case 76:t.patternType=parseInt(n.value,10);break;case 91:{let o=parseInt(n.value,10);r++;for(let c=0;c<o&&r<a.length;c++){let s=W(a,r);t.boundaryPaths.push(s.path),r=s.nextIndex}continue}}r++}return t}function W(a,e){let t=0;return e<a.length&&a[e].code===92&&(t=parseInt(a[e].value,10),e++),(t&2)!==0?X(a,e,t):Y(a,e,t)}function X(a,e,t){let r={type:"polyline",vertices:[],bulges:[],flags:t},n=!1;e<a.length&&a[e].code===72&&(n=a[e].value==="1",e++),e<a.length&&a[e].code===73&&(r.isClosed=a[e].value==="1",e++);let o=0;e<a.length&&a[e].code===93&&(o=parseInt(a[e].value,10),e++);for(let c=0;c<o&&e<a.length;c++){let s={x:0,y:0};a[e].code===10&&(s.x=parseFloat(a[e].value),e++),e<a.length&&a[e].code===20&&(s.y=parseFloat(a[e].value),e++),r.vertices.push(s),n&&e<a.length&&a[e].code===42?(r.bulges.push(parseFloat(a[e].value)),e++):n&&r.bulges.push(0)}for(;e<a.length&&(a[e].code===97||a[e].code===330);)if(a[e].code===97){let c=parseInt(a[e].value,10);e++;for(let s=0;s<c&&e<a.length&&a[e].code===330;s++)e++}else e++;return{path:r,nextIndex:e}}function Y(a,e,t){let r={type:"edges",edges:[],flags:t},n=0;e<a.length&&a[e].code===93&&(n=parseInt(a[e].value,10),e++);for(let o=0;o<n&&e<a.length&&a[e].code===72;o++){let c=parseInt(a[e].value,10);switch(e++,c){case 1:{let s={type:"line",start:{x:0,y:0},end:{x:0,y:0}};e<a.length&&a[e].code===10&&(s.start.x=parseFloat(a[e].value),e++),e<a.length&&a[e].code===20&&(s.start.y=parseFloat(a[e].value),e++),e<a.length&&a[e].code===11&&(s.end.x=parseFloat(a[e].value),e++),e<a.length&&a[e].code===21&&(s.end.y=parseFloat(a[e].value),e++),r.edges.push(s);break}case 2:{let s={type:"arc",center:{x:0,y:0},radius:0,startAngle:0,endAngle:360,ccw:!0};e<a.length&&a[e].code===10&&(s.center.x=parseFloat(a[e].value),e++),e<a.length&&a[e].code===20&&(s.center.y=parseFloat(a[e].value),e++),e<a.length&&a[e].code===40&&(s.radius=parseFloat(a[e].value),e++),e<a.length&&a[e].code===50&&(s.startAngle=parseFloat(a[e].value),e++),e<a.length&&a[e].code===51&&(s.endAngle=parseFloat(a[e].value),e++),e<a.length&&a[e].code===73&&(s.ccw=a[e].value==="1",e++),r.edges.push(s);break}case 3:{let s={type:"ellipse",center:{x:0,y:0},majorAxis:{x:1,y:0},minorRatio:1,startAngle:0,endAngle:Math.PI*2,ccw:!0};e<a.length&&a[e].code===10&&(s.center.x=parseFloat(a[e].value),e++),e<a.length&&a[e].code===20&&(s.center.y=parseFloat(a[e].value),e++),e<a.length&&a[e].code===11&&(s.majorAxis.x=parseFloat(a[e].value),e++),e<a.length&&a[e].code===21&&(s.majorAxis.y=parseFloat(a[e].value),e++),e<a.length&&a[e].code===40&&(s.minorRatio=parseFloat(a[e].value),e++),e<a.length&&a[e].code===50&&(s.startAngle=parseFloat(a[e].value),e++),e<a.length&&a[e].code===51&&(s.endAngle=parseFloat(a[e].value),e++),e<a.length&&a[e].code===73&&(s.ccw=a[e].value==="1",e++),r.edges.push(s);break}case 4:{let s=3,p=[],b=[];e<a.length&&a[e].code===94&&(s=parseInt(a[e].value,10),e++),e<a.length&&a[e].code===73&&e++,e<a.length&&a[e].code===74&&e++;let d=0;e<a.length&&a[e].code===95&&(d=parseInt(a[e].value,10),e++);let x=0;e<a.length&&a[e].code===96&&(x=parseInt(a[e].value,10),e++);for(let f=0;f<d&&e<a.length&&a[e].code===40;f++)p.push(parseFloat(a[e].value)),e++;for(let f=0;f<x&&e<a.length;f++){let y={x:0,y:0};a[e].code===10&&(y.x=parseFloat(a[e].value),e++),e<a.length&&a[e].code===20&&(y.y=parseFloat(a[e].value),e++),b.push(y)}r.edges.push({type:"spline",degree:s,knots:p,controlPoints:b});break}default:break}}for(;e<a.length&&(a[e].code===97||a[e].code===330);)if(a[e].code===97){let o=parseInt(a[e].value,10);e++;for(let c=0;c<o&&e<a.length&&a[e].code===330;c++)e++}else e++;return{path:r,nextIndex:e}}function L(a){let t={...l(a),type:"POINT",position:{x:0,y:0,z:0}};for(let r of a)switch(r.code){case 10:t.position.x=parseFloat(r.value);break;case 20:t.position.y=parseFloat(r.value);break;case 30:t.position.z=parseFloat(r.value);break}return t}function u(a,e,t){for(;e<a.length;){let r=a[e];if(r.code!==0){e++;continue}let n=r.value;if(n==="ENDSEC"||n==="ENDBLK")return e+1;e++;let o=[];for(;e<a.length&&a[e].code!==0;)o.push(a[e]),e++;switch(n){case"LINE":t.push(D(o));break;case"CIRCLE":t.push(F(o));break;case"ARC":t.push(E(o));break;case"LWPOLYLINE":t.push(P(o));break;case"ELLIPSE":t.push(w(o));break;case"SPLINE":t.push(g(o));break;case"TEXT":t.push(I(o));break;case"MTEXT":t.push(A(o));break;case"INSERT":{let c=z(o);o.some(p=>p.code===66&&p.value==="1")&&(e=$(a,e,c.attribs)),t.push(c);break}case"DIMENSION":t.push(S(o));break;case"HATCH":t.push(N(o));break;case"POINT":t.push(L(o));break;case"POLYLINE":{let c=T(o);e=V(a,e,c.vertices),t.push(c);break}default:break}}return e}function V(a,e,t){for(;e<a.length;){if(a[e].code!==0){e++;continue}let r=a[e].value;if(r==="SEQEND")return e+1;if(r==="ENDSEC"||r==="ENDBLK")return e;if(r==="VERTEX"){e++;let n={x:0,y:0,bulge:0,startWidth:0,endWidth:0};for(;e<a.length&&a[e].code!==0;){let o=a[e];switch(o.code){case 10:n.x=parseFloat(o.value);break;case 20:n.y=parseFloat(o.value);break;case 42:n.bulge=parseFloat(o.value);break;case 40:n.startWidth=parseFloat(o.value);break;case 41:n.endWidth=parseFloat(o.value);break}e++}t.push(n)}else for(e++;e<a.length&&a[e].code!==0;)e++}return e}function $(a,e,t){for(;e<a.length;){if(a[e].code!==0){e++;continue}let r=a[e].value;if(r==="SEQEND")return e+1;if(r==="ENDSEC"||r==="ENDBLK")return e;if(r==="ATTRIB"){e++;let n={tag:"",text:"",insertionPoint:{x:0,y:0,z:0},height:1,rotation:0,style:"STANDARD",layer:"0",color:256};for(;e<a.length&&a[e].code!==0;){let o=a[e];switch(o.code){case 1:n.text=o.value;break;case 2:n.tag=o.value;break;case 7:n.style=o.value;break;case 8:n.layer=o.value;break;case 10:n.insertionPoint.x=parseFloat(o.value);break;case 20:n.insertionPoint.y=parseFloat(o.value);break;case 30:n.insertionPoint.z=parseFloat(o.value);break;case 40:n.height=parseFloat(o.value);break;case 50:n.rotation=parseFloat(o.value);break;case 62:n.color=parseInt(o.value,10);break}e++}t.push(n)}else for(e++;e<a.length&&a[e].code!==0;)e++}return e}function B(a,e,t){for(;e<a.length;){let r=a[e];if(r.code===0&&r.value==="ENDSEC")return e+1;if(r.code===0&&r.value==="BLOCK"){e++;let n={name:"",basePoint:{x:0,y:0,z:0},entities:[],flags:0};for(;e<a.length&&a[e].code!==0;){let o=a[e];switch(o.code){case 2:n.name=o.value;break;case 8:break;case 10:n.basePoint.x=parseFloat(o.value);break;case 20:n.basePoint.y=parseFloat(o.value);break;case 30:n.basePoint.z=parseFloat(o.value);break;case 70:n.flags=parseInt(o.value,10);break}e++}e=u(a,e,n.entities),n.name&&!n.name.startsWith("*Model_Space")&&!n.name.startsWith("*Paper_Space")&&t.set(n.name,n)}else e++}return e}var C="AutoCAD Binary DXF",U={ANSI_874:"windows-874",ANSI_932:"shift_jis",ANSI_936:"gbk",ANSI_949:"euc-kr",ANSI_950:"big5",ANSI_1250:"windows-1250",ANSI_1251:"windows-1251",ANSI_1252:"windows-1252",ANSI_1253:"windows-1253",ANSI_1254:"windows-1254",ANSI_1255:"windows-1255",ANSI_1256:"windows-1256",ANSI_1257:"windows-1257",ANSI_1258:"windows-1258"},G="AC1021";function K(){return{acadVersion:"",insUnits:0,measurement:0,ltScale:1}}function j(a){return a.replace(/\\\\U\\+([0-9A-Fa-f]{4})/g,(e,t)=>String.fromCodePoint(parseInt(t,16)))}function q(a){if(typeof a=="string")return j(a);let e=new Uint8Array(a);if(new TextDecoder("ascii").decode(e.slice(0,C.length))===C)throw new i("Binary DXF format is not supported. Please export as ASCII DXF.");let r=new TextDecoder("utf-8").decode(a),o=r.match(/\\$ACADVER[\\s\\S]*?\\n\\s*1\\s*\\n\\s*(\\S+)/)?.[1]??"";if(o&&o<G){let s=r.match(/\\$DWGCODEPAGE[\\s\\S]*?\\n\\s*3\\s*\\n\\s*(\\S+)/)?.[1]??"",p=U[s]??"windows-1252";p!=="utf-8"&&(r=new TextDecoder(p).decode(a))}return j(r)}function Q(a,e){for(;e<a.length;){if(a[e].code===0&&a[e].value==="ENDSEC")return e+1;e++}return e}function Z(a){a.layers.has("0")||a.layers.set("0",{name:"0",color:7,lineType:"Continuous",flags:0,lineWeight:-3,isOff:!1,isFrozen:!1,isLocked:!1})}function J(a){for(let[,e]of a.layers)e.isOff=e.color<0,e.isOff&&(e.color=Math.abs(e.color)),e.isFrozen=(e.flags&1)!==0,e.isLocked=(e.flags&4)!==0}var i=class extends Error{constructor(t,r){super(t);this.cause=r;this.name="DxfParseError"}};function M(a){if(typeof a=="string"){if(a.length===0)throw new i("Input is empty. Expected a DXF string or ArrayBuffer.")}else if(a instanceof ArrayBuffer){if(a.byteLength===0)throw new i("Input ArrayBuffer is empty.")}else throw new i("Invalid input type. Expected a string or ArrayBuffer.");let e;try{e=q(a)}catch(n){throw n instanceof i?n:new i("Failed to decode DXF input.",n)}let t;try{t=h(e)}catch(n){throw new i("Failed to tokenize DXF content.",n)}if(t.length===0)throw new i("DXF content produced no tokens. The input may not be a valid DXF file.");let r={header:K(),layers:new Map,lineTypes:new Map,styles:new Map,blocks:new Map,entities:[]};try{let n=0;for(;n<t.length;){let o=t[n];if(o.code===0&&o.value==="SECTION"){if(n++,n>=t.length)break;let c=t[n].value;switch(n++,c){case"HEADER":n=m(t,n,r.header);break;case"TABLES":n=k(t,n,r);break;case"BLOCKS":n=B(t,n,r.blocks);break;case"ENTITIES":n=u(t,n,r.entities);break;default:n=Q(t,n);break}}else{if(o.code===0&&o.value==="EOF")break;n++}}}catch(n){throw new i("Failed to parse DXF sections.",n)}return Z(r),J(r),r}self.onmessage=a=>{let{type:e,id:t,payload:r}=a.data;if(e==="parse")try{let n=M(r);postMessage({type:"result",id:t,doc:n})}catch(n){let o=n instanceof Error?n.message:String(n);postMessage({type:"error",id:t,message:o})}};})();\n', `deactivate`, `DIMENSION`, `_allDistMargin`, `onmessage`, `moveTo`, `emitter`, `fromCodePoint`, `updateSize`, `pixelSize`, `4626622tyqoAi`, `phase`, `Continuous`, `getVisibleLayerNames`, `map`, `cos`, `169734JeStMC`, `showCamera`, `_all`, `rotation`, `value`, `weights`];
  return Y = function() {
    return e2;
  }, Y();
}
function Ut(e2, t2, n2, r2, i2, a2) {
  if (e2 >= n2 && e2 <= i2 && t2 >= r2 && t2 <= a2) return 0;
  let o2 = Math.max(n2 - e2, 0, e2 - i2), s2 = Math.max(r2 - t2, 0, t2 - a2);
  return Math.hypot(o2, s2);
}
function Wt(e2, t2, n2, r2, i2, a2) {
  let s2 = o, c2 = Math[s2(399)](i2.y, i2.x), l2 = Math.cos(-c2), u2 = Math[s2(499)](-c2), d2 = (e2 - n2) * l2 - (t2 - r2) * u2, f2 = (e2 - n2) * u2 + (t2 - r2) * l2, p2 = Math.sqrt(i2.x ** 2 + i2.y ** 2), m2 = p2 * a2;
  if (p2 < 1e-10) return Math.hypot(e2 - n2, t2 - r2);
  let h2 = p2 / m2 * f2, g2 = Math.hypot(d2, h2);
  if (g2 < 1e-10) return p2;
  let _2 = d2 / g2 * p2, v2 = f2 / g2 * m2;
  return Math[s2(523)](d2 - _2, f2 - v2);
}
var Gt = class {
  constructor() {
    a(this, `state`, { phase: `idle` }), a(this, `currentSnap`, null);
  }
  activate() {
    this.state = { phase: `first-point` }, this.currentSnap = null;
  }
  deactivate() {
    let e2 = o;
    this[e2(566)] = { phase: `idle` }, this.currentSnap = null;
  }
  handleClick(e2, t2, n2) {
    let r2 = o, i2 = n2 ? n2.point : { x: e2, y: t2 };
    switch (this.state[r2(485)]) {
      case r2(390):
        return this[r2(566)] = { phase: r2(372), firstPoint: i2, firstSnap: n2 ?? void 0 }, null;
      case `second-point`: {
        let e3 = this[r2(566)].firstPoint, t3 = i2, n3 = t3.x - e3.x, a2 = t3.y - e3.y, o2 = Math[r2(435)](n3 * n3 + a2 * a2), s2 = Math[r2(399)](a2, n3) * 180 / Math.PI;
        return this.state = { phase: `done`, firstPoint: e3, secondPoint: t3, distance: o2, angle: s2 }, { distance: o2, angle: s2, deltaX: n3, deltaY: a2, points: [e3, t3] };
      }
      case `done`:
        return this.state = { phase: `second-point`, firstPoint: i2 }, null;
      default:
        return null;
    }
  }
  handleMove(e2) {
    this.currentSnap = e2;
  }
};
function X(e2, t2, n2, r2, i2, a2 = /* @__PURE__ */ new Set([`endpoint`, o(447), `center`])) {
  let s2 = o, c2 = 10 / i2, l2 = [], u2 = r2.search(e2 - c2, t2 - c2, e2 + c2, t2 + c2);
  for (let r3 of u2) {
    let i3 = n2[r3.entityIndex];
    if (!i3) continue;
    let o2 = r3.entityIndex;
    switch (i3.type) {
      case `LINE`:
        a2.has(`endpoint`) && (Z(l2, i3.start.x, i3.start.y, `endpoint`, o2, e2, t2, c2), Z(l2, i3.end.x, i3.end.y, `endpoint`, o2, e2, t2, c2)), a2[s2(536)](s2(447)) && Z(l2, (i3.start.x + i3.end.x) / 2, (i3.start.y + i3.end.y) / 2, `midpoint`, o2, e2, t2, c2);
        break;
      case s2(411):
        if (a2.has(s2(470)) && Z(l2, i3.center.x, i3.center.y, `center`, o2, e2, t2, c2), a2.has(`endpoint`)) for (let n3 of [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2]) Z(l2, i3.center.x + i3.radius * Math[s2(489)](n3), i3.center.y + i3.radius * Math.sin(n3), `endpoint`, o2, e2, t2, c2);
        break;
      case `ARC`:
        if (a2[s2(536)](`center`) && Z(l2, i3.center.x, i3.center.y, `center`, o2, e2, t2, c2), a2.has(`endpoint`)) {
          let n3 = i3.startAngle * Math.PI / 180, r4 = i3.endAngle * Math.PI / 180;
          Z(l2, i3[s2(470)].x + i3.radius * Math.cos(n3), i3[s2(470)].y + i3.radius * Math.sin(n3), `endpoint`, o2, e2, t2, c2), Z(l2, i3[s2(470)].x + i3.radius * Math.cos(r4), i3[s2(470)].y + i3.radius * Math.sin(r4), s2(451), o2, e2, t2, c2);
        }
        break;
      case `LWPOLYLINE`:
      case `POLYLINE`:
        if (a2.has(`endpoint`)) for (let n3 of i3.vertices) Z(l2, n3.x, n3.y, `endpoint`, o2, e2, t2, c2);
        if (a2[s2(536)](s2(447))) for (let n3 = 0; n3 < i3.vertices.length - 1; n3++) {
          let r4 = i3[s2(574)][n3], a3 = i3.vertices[n3 + 1];
          Z(l2, (r4.x + a3.x) / 2, (r4.y + a3.y) / 2, s2(447), o2, e2, t2, c2);
        }
        break;
      case `ELLIPSE`:
        a2[s2(536)](`center`) && Z(l2, i3.center.x, i3.center.y, `center`, o2, e2, t2, c2);
        break;
      case `TEXT`:
        a2.has(s2(451)) && Z(l2, i3.insertionPoint.x, i3.insertionPoint.y, `endpoint`, o2, e2, t2, c2);
        break;
      case `MTEXT`:
        a2.has(`endpoint`) && Z(l2, i3.insertionPoint.x, i3.insertionPoint.y, `endpoint`, o2, e2, t2, c2);
        break;
    }
  }
  return l2[s2(357)]((n3, r3) => Math.hypot(n3.point.x - e2, n3.point.y - t2) - Math.hypot(r3.point.x - e2, r3[s2(606)].y - t2)), l2;
}
function Z(e2, t2, n2, r2, i2, a2, o2, s2) {
  Math.hypot(t2 - a2, n2 - o2) <= s2 && e2.push({ point: { x: t2, y: n2 }, type: r2, entityIndex: i2 });
}
function Kt(e2, t2, n2, r2, i2, a2) {
  let s2 = o, c2 = F[a2];
  e2.setTransform(1, 0, 0, 1, 0, 0);
  let l2 = n2.state;
  if (n2.currentSnap) {
    let [r3, i3] = I(t2, n2[s2(600)].point.x, n2.currentSnap.point.y);
    qt(e2, r3, i3, n2.currentSnap[s2(383)], c2.measureColor);
  }
  if (l2[s2(485)] === `second-point`) {
    let [o2, u2] = I(t2, l2.firstPoint.x, l2[s2(340)].y), d2, f2;
    if (n2.currentSnap) {
      let [e3, r3] = I(t2, n2.currentSnap.point.x, n2[s2(600)].point.y);
      d2 = e3, f2 = r3;
    } else d2 = r2, f2 = i2;
    e2.strokeStyle = c2.measureColor, e2.lineWidth = 1.5, e2.setLineDash([6, 3]), e2.beginPath(), e2.moveTo(o2, u2), e2[s2(304)](d2, f2), e2[s2(509)](), e2[s2(387)]([]), Q(e2, o2, u2, c2[s2(318)]), Q(e2, d2, f2, c2.measureColor);
    let p2, m2;
    n2.currentSnap ? (p2 = n2.currentSnap.point.x, m2 = n2.currentSnap.point.y) : [p2, m2] = L(t2, r2, i2);
    let h2 = Math.hypot(p2 - l2[s2(340)].x, m2 - l2.firstPoint.y);
    $(e2, (o2 + d2) / 2, (u2 + f2) / 2, h2, a2);
  }
  if (l2.phase === s2(461)) {
    let [n3, r3] = I(t2, l2[s2(340)].x, l2.firstPoint.y), [i3, o2] = I(t2, l2.secondPoint.x, l2.secondPoint.y);
    e2[s2(508)] = c2.measureColor, e2.lineWidth = 2, e2[s2(565)](), e2.moveTo(n3, r3), e2.lineTo(i3, o2), e2.stroke(), Q(e2, n3, r3, c2.measureColor), Q(e2, i3, o2, c2[s2(318)]), $(e2, (n3 + i3) / 2, (r3 + o2) / 2, l2.distance, a2);
  }
}
function qt(e2, t2, n2, r2, i2) {
  let a2 = o;
  switch (e2.strokeStyle = i2, e2.lineWidth = 2, r2) {
    case `endpoint`:
      e2.strokeRect(t2 - 8 / 2, n2 - 8 / 2, 8, 8);
      break;
    case `midpoint`:
      e2.beginPath(), e2[a2(479)](t2, n2 - 8 / 2), e2[a2(304)](t2 + 8 / 2, n2 + 8 / 2), e2.lineTo(t2 - 8 / 2, n2 + 8 / 2), e2.closePath(), e2.stroke();
      break;
    case `center`:
      e2.beginPath(), e2.arc(t2, n2, 8 / 2, 0, Math.PI * 2), e2.stroke();
      break;
    case `nearest`:
      e2.beginPath(), e2.moveTo(t2 - 8 / 2, n2 - 8 / 2), e2[a2(304)](t2 + 8 / 2, n2 + 8 / 2), e2.moveTo(t2 + 8 / 2, n2 - 8 / 2), e2.lineTo(t2 - 8 / 2, n2 + 8 / 2), e2.stroke();
      break;
  }
}
function Q(e2, t2, n2, r2) {
  e2.fillStyle = r2, e2.beginPath(), e2.arc(t2, n2, 4, 0, Math.PI * 2), e2.fill();
}
function $(e2, t2, n2, r2, i2) {
  let a2 = o, s2 = r2.toFixed(4);
  e2[a2(551)] = `13px monospace`, e2.textAlign = `center`, e2.textBaseline = `bottom`;
  let c2 = e2.measureText(s2), l2 = t2 - c2.width / 2 - 4, u2 = n2 - 20, d2 = c2[a2(396)] + 8;
  e2.fillStyle = i2 === `dark` ? `rgba(0,0,0,0.8)` : `rgba(255,255,255,0.9)`, e2[a2(392)](l2, u2, d2, 18), e2.fillStyle = F[i2][a2(318)], e2.fillText(s2, t2, n2 - 6);
}
var Jt = class {
  constructor() {
    a(this, `worker`, null), a(this, `blobUrl`, null), a(this, `nextId`, 1), a(this, `pending`, /* @__PURE__ */ new Map());
  }
  [o(541)]() {
    let e2 = o;
    return this.worker ? this.worker : (this[e2(623)] = URL.createObjectURL(new Blob([e2(474)], { type: `text/javascript` })), this.worker = new Worker(this.blobUrl), this.worker[e2(478)] = (t2) => {
      let n2 = e2, { type: r2, id: i2, doc: a2, message: o2 } = t2.data, s2 = this.pending.get(i2);
      s2 && (this.pending.delete(i2), r2 === `result` ? s2.resolve(this.reviveDocument(a2)) : r2 === n2(418) && s2.reject(Error(o2 ?? `Worker parse failed`)));
    }, this.worker.onerror = (t2) => {
      let n2 = e2, r2 = Error(t2.message ?? n2(540));
      for (let [, e3] of this.pending) e3.reject(r2);
      this.pending.clear(), this.destroyWorker();
    }, this.worker);
  }
  parse(e2) {
    return new Promise((t2, n2) => {
      let r2 = A, i2 = this.nextId++;
      this.pending.set(i2, { resolve: t2, reject: n2 });
      let a2;
      try {
        a2 = this.getWorker();
      } catch (e3) {
        this[r2(622)].delete(i2), n2(e3 instanceof Error ? e3 : Error(String(e3)));
        return;
      }
      let o2 = { type: `parse`, id: i2, payload: e2 };
      try {
        e2 instanceof ArrayBuffer ? a2.postMessage(o2, [e2]) : a2[r2(472)](o2);
      } catch (e3) {
        this.pending[r2(458)](i2), n2(e3 instanceof Error ? e3 : Error(String(e3)));
      }
    });
  }
  terminate() {
    this.destroyWorker();
    let e2 = Error(`Worker terminated`);
    for (let [, t2] of this.pending) t2.reject(e2);
    this.pending.clear();
  }
  destroyWorker() {
    let e2 = o;
    this.worker && (this.worker[e2(440)](), this[e2(531)] = null), this.blobUrl && (URL.revokeObjectURL(this.blobUrl), this[e2(623)] = null);
  }
  [o(562)](e2) {
    let n2 = o;
    return t(t({}, e2), {}, { layers: this.ensureMap(e2[n2(307)]), lineTypes: this.ensureMap(e2.lineTypes), styles: this[n2(549)](e2.styles), blocks: this.ensureMap(e2.blocks) });
  }
  [o(549)](e2) {
    let t2 = o;
    return e2 instanceof Map ? e2 : e2 && typeof e2 == t2(373) ? new Map(Object.entries(e2)) : /* @__PURE__ */ new Map();
  }
}, Yt = class {
  constructor(e2, t2) {
    let n2 = o;
    a(this, `canvas`, void 0), a(this, `renderer`, void 0), a(this, `camera`, void 0), a(this, `layerManager`, void 0), a(this, `emitter`, void 0), a(this, `spatialIndex`, void 0), a(this, `measureTool`, void 0), a(this, `doc`, null), a(this, n2(364), void 0), a(this, `currentTool`, void 0), a(this, n2(428), void 0), a(this, `resizeObserver`, void 0), a(this, n2(601), void 0), a(this, `workerManager`, null), a(this, `selectedEntityIndex`, -1), a(this, n2(532), false), a(this, `destroyed`, false), a(this, n2(580), 0), a(this, `mouseScreenX`, 0), a(this, `mouseScreenY`, 0), a(this, `debugEnabled`, false), a(this, `debugOptions`, void 0), a(this, `lastRenderStats`, null), a(this, `lastDebugStats`, null), a(this, n2(375), []), a(this, `lastDoRenderTime`, 0), a(this, `lastFrameTime`, 0), a(this, `parseTime`, 0), a(this, n2(597), 0), a(this, `loadedFileName`, null), a(this, `loadedFileSize`, 0), a(this, `debugRafId`, 0), this[n2(404)] = e2, this.options = { theme: (t2 == null ? void 0 : t2.theme) ?? `dark`, backgroundColor: t2 == null ? void 0 : t2.backgroundColor, antialias: (t2 == null ? void 0 : t2.antialias) ?? true, minZoom: (t2 == null ? void 0 : t2[n2(450)]) ?? 1e-4, maxZoom: (t2 == null ? void 0 : t2.maxZoom) ?? 1e5, zoomSpeed: (t2 == null ? void 0 : t2[n2(445)]) ?? 1.1, initialTool: (t2 == null ? void 0 : t2.initialTool) ?? `pan` }, this.formatConverters = (t2 == null ? void 0 : t2.formatConverters) ?? [], t2 != null && t2.worker && (this[n2(569)] = new Jt()), t2 != null && t2.debug ? (this.debugEnabled = true, this.debugOptions = W(typeof t2.debug == `boolean` ? void 0 : t2.debug)) : this[n2(586)] = W(), this.renderer = new Dt(e2), this.camera = new Le(this.options), this.layerManager = new Ft(), this.emitter = new It(), this[n2(554)] = new zt(), this.measureTool = new Gt(), this[n2(539)] = this.options.initialTool, this[n2(428)] = new Lt(e2, this), this.resizeObserver = new ResizeObserver(() => this.resize()), this[n2(620)].observe(e2), e2.style.cursor = this.getCursorForTool(this.currentTool), this.requestRender(), this[n2(381)] && this.startDebugLoop();
  }
  guardDestroyed() {
    let e2 = o;
    if (this[e2(391)]) throw Error(`CadViewer: cannot call methods on a destroyed instance.`);
  }
  [o(412)](e2) {
    var t2 = this;
    return i(function* () {
      for (let n2 of t2.formatConverters) {
        let t3 = false;
        try {
          t3 = n2.detect(e2);
        } catch {
          continue;
        }
        if (t3) return n2.convert(e2);
      }
      return null;
    })();
  }
  loadFile(e2) {
    var t2 = this;
    return i(function* () {
      let n2 = A;
      t2[n2(581)]();
      let r2 = ++t2.loadGeneration;
      t2.loadedFileName = e2.name, t2.loadedFileSize = e2[n2(347)];
      let i2 = yield e2[n2(496)]();
      if (t2.destroyed || r2 !== t2.loadGeneration) return;
      let a2 = yield t2.runConverters(i2);
      if (t2[n2(391)] || r2 !== t2.loadGeneration) return;
      let o2 = performance.now(), s2 = a2 ?? i2;
      t2.doc = yield t2.parseWithOptionalWorker(s2, r2), !(t2.destroyed || r2 !== t2.loadGeneration) && (t2.parseTime = performance.now() - o2, t2[n2(374)]());
    })();
  }
  loadBuffer(e2) {
    var t2 = this;
    return i(function* () {
      let n2 = A;
      t2[n2(581)]();
      let r2 = ++t2.loadGeneration;
      t2.loadedFileName = null, t2.loadedFileSize = e2[n2(610)];
      let i2 = yield t2.runConverters(e2);
      if (t2[n2(391)] || r2 !== t2[n2(580)]) return;
      let a2 = performance.now(), o2 = i2 ?? e2;
      t2[n2(444)] = yield t2[n2(393)](o2, r2), !(t2.destroyed || r2 !== t2.loadGeneration) && (t2.parseTime = performance[n2(468)]() - a2, t2[n2(374)]());
    })();
  }
  [o(393)](e2, t2) {
    var n2 = this;
    return i(function* () {
      if (!n2[A(569)]) return P(e2);
      try {
        return yield n2.workerManager.parse(e2);
      } catch (e3) {
        if (n2.destroyed || t2 !== n2.loadGeneration) return null;
        throw e3;
      }
    })();
  }
  [o(301)](e2) {
    let t2 = o;
    if (this.guardDestroyed(), ++this.loadGeneration, this.loadedFileName = null, this.loadedFileSize = 0, this.parseTime = 0, !e2 || !Array.isArray(e2.entities) || !(e2[t2(307)] instanceof Map)) throw Error(`CadViewer: invalid DxfDocument \u2014 expected entities array and layers Map.`);
    this.doc = e2, this[t2(374)]();
  }
  [o(548)](e2) {
    let t2 = o;
    this.guardDestroyed(), ++this.loadGeneration, this.loadedFileName = null, this.loadedFileSize = e2.length;
    let n2 = performance[t2(468)]();
    this.doc = P(e2), this[t2(378)] = performance.now() - n2, this.onDocumentLoaded();
  }
  loadArrayBuffer(e2) {
    let t2 = o;
    this.guardDestroyed(), ++this[t2(580)], this.loadedFileName = null, this.loadedFileSize = e2.byteLength;
    let n2 = performance[t2(468)]();
    this[t2(444)] = P(e2), this.parseTime = performance.now() - n2, this.onDocumentLoaded();
  }
  [o(342)]() {
    let e2 = o;
    this.guardDestroyed(), ++this.loadGeneration, this.doc = null, this[e2(550)] = -1, this.spatialIndex.clear(), ct(), this.layerManager.clear(), this.measureTool[e2(475)](), this[e2(362)]();
  }
  onDocumentLoaded() {
    let e2 = o;
    if (!this.doc) return;
    this.layerManager.setLayers(this.doc.layers);
    let t2 = performance.now();
    this.spatialIndex[e2(612)](this[e2(444)][e2(338)], this.doc), st(ot(this.doc)), this.spatialIndexBuildTime = performance.now() - t2, this.selectedEntityIndex = -1, this.measureTool.deactivate(), this.currentTool === `measure` && this.measureTool[e2(578)](), this[e2(388)]();
  }
  fitToView() {
    let e2 = o;
    if (this.guardDestroyed(), !this.doc) return;
    let t2 = this.computeDocumentBounds();
    if (!t2) return;
    let n2 = this[e2(404)].getBoundingClientRect();
    this.camera.setTransform(Fe(n2.width, n2.height, t2.minX, t2.minY, t2[e2(424)], t2.maxY)), this[e2(362)](), this.emitter.emit(`viewchange`, this.camera.getTransform());
  }
  zoomTo(e2) {
    let t2 = o;
    this.guardDestroyed();
    let n2 = this.canvas[t2(436)](), r2 = n2.width / 2, i2 = n2.height / 2, a2 = e2 / this.camera[t2(452)]().scale;
    this.camera.zoom(r2, i2, a2), this.requestRender(), this.emitter[t2(395)](`viewchange`, this.camera.getTransform());
  }
  panTo(e2, t2) {
    let n2 = o;
    this.guardDestroyed();
    let r2 = this.canvas.getBoundingClientRect(), i2 = this[n2(414)].getTransform(), a2 = e2 * i2[n2(421)] + i2.offsetX, s2 = -t2 * i2.scale + i2.offsetY, c2 = r2.width / 2 - a2, l2 = r2.height / 2 - s2;
    this.camera.pan(c2, l2), this.requestRender(), this.emitter.emit(`viewchange`, this.camera.getTransform());
  }
  [o(528)]() {
    let e2 = o;
    return t({}, this.camera[e2(452)]());
  }
  getZoomSpeed() {
    return this.options.zoomSpeed;
  }
  [o(332)]() {
    return this.layerManager.getAllLayers();
  }
  setLayerVisible(e2, t2) {
    this.guardDestroyed(), this.layerManager.setVisible(e2, t2), this.requestRender();
  }
  setLayerColor(e2, t2) {
    let n2 = o;
    this.guardDestroyed(), this.layerManager[n2(402)](e2, t2), this.requestRender();
  }
  [o(570)](e2) {
    this.guardDestroyed(), this.options.theme = e2, this.requestRender();
  }
  getTheme() {
    return this.options.theme;
  }
  setBackgroundColor(e2) {
    let t2 = o;
    this.guardDestroyed(), this.options.backgroundColor = e2, this[t2(362)]();
  }
  setTool(e2) {
    let t2 = o;
    this.guardDestroyed(), this.currentTool === t2(446) && e2 !== `measure` && this[t2(589)].deactivate(), this.currentTool = e2, this.canvas[t2(325)][t2(323)] = this.getCursorForTool(e2), e2 === `measure` && this[t2(589)][t2(578)](), e2 !== `select` && (this.selectedEntityIndex = -1), this[t2(362)]();
  }
  getTool() {
    return this.currentTool;
  }
  [o(497)](e2) {
    let t2 = o;
    switch (e2) {
      case `pan`:
        return `grab`;
      case t2(406):
        return `crosshair`;
      case `measure`:
        return `crosshair`;
    }
  }
  on(e2, t2) {
    this.emitter.on(e2, t2);
  }
  off(e2, t2) {
    this.emitter.off(e2, t2);
  }
  [o(419)]() {
    return this.doc;
  }
  getEntities() {
    var _a;
    return ((_a = this.doc) == null ? void 0 : _a.entities) ?? [];
  }
  [o(330)]() {
    this.renderer.updateSize(), this.requestRender();
  }
  destroy() {
    var e2;
    this.destroyed = true, this.stopDebugLoop(), this.inputHandler.destroy(), this.resizeObserver.disconnect(), this.renderer.destroy(), this.emitter.removeAllListeners(), this.spatialIndex.clear(), ct(), this.layerManager.clear(), (e2 = this.workerManager) == null || e2.terminate(), this.workerManager = null, this.doc = null;
  }
  [o(362)]() {
    let e2 = o;
    if (!this.destroyed) {
      if (this.debugRafId) {
        this[e2(416)]();
        return;
      }
      this.renderPending || (this.renderPending = true, requestAnimationFrame(() => {
        this.renderPending = false, !this.destroyed && this.doRender();
      }));
    }
  }
  doRender() {
    let e2 = o;
    if (!this.doc) {
      this.renderer[e2(385)](this.options.theme);
      return;
    }
    let t2 = this.camera.getTransform(), n2 = this.renderer.getWidth(), r2 = this.renderer.getHeight(), i2 = this.computeViewportBounds(t2, n2, r2), a2 = this.spatialIndex.search(i2.minX, i2.minY, i2[e2(424)], i2.maxY), s2 = /* @__PURE__ */ new Set();
    for (let t3 = 0; t3 < a2.length; t3++) s2[e2(614)](a2[t3].entityIndex);
    let c2 = performance.now(), l2 = this.renderer[e2(423)](this.doc, t2, this.options.theme, this.layerManager[e2(487)](), this.selectedEntityIndex, s2, this.spatialIndex[e2(313)]());
    this.lastFrameTime = performance[e2(468)]() - c2, this.lastRenderStats = l2;
    let u2 = performance.now();
    for (u2 - this.lastDoRenderTime >= 3 && this.frameTimestamps.push(u2), this.lastDoRenderTime = u2; this.frameTimestamps[e2(321)] > 0 && this.frameTimestamps[0] < u2 - 1e3; ) this.frameTimestamps[e2(568)]();
    if (this.currentTool === `measure` && this[e2(589)].state.phase !== `idle` && Kt(this[e2(443)].getContext(), this[e2(414)].getTransform(), this[e2(589)], this.mouseScreenX, this.mouseScreenY, this.options.theme), this.debugEnabled) {
      let e3 = this.renderer.getContext(), t3 = this.buildDebugStats();
      this.lastDebugStats = t3, Pt(e3, t3, this.options.theme, this.debugOptions, this.renderer.getWidth(), this.renderer.getHeight());
    }
  }
  setDebug(e2) {
    let t2 = o;
    this.guardDestroyed(), typeof e2 == `boolean` ? this.debugEnabled = e2 : (this.debugEnabled = true, this.debugOptions = W(e2)), this[t2(381)] ? this[t2(401)]() : (this.stopDebugLoop(), this.requestRender());
  }
  [o(401)]() {
    if (this.debugRafId) return;
    let e2 = () => {
      if (!this.debugEnabled || this.destroyed) {
        this.debugRafId = 0;
        return;
      }
      this.doRender(), this.debugRafId = requestAnimationFrame(e2);
    };
    this.debugRafId = requestAnimationFrame(e2);
  }
  stopDebugLoop() {
    let e2 = o;
    this.debugRafId && (cancelAnimationFrame(this.debugRafId), this[e2(595)] = 0);
  }
  getDebugStats() {
    return this.debugEnabled ? this.lastDebugStats : null;
  }
  buildDebugStats() {
    var _a, _b, _c, _d;
    let e2 = o, t2 = this.camera.getTransform(), n2 = this.renderer[e2(303)](), r2 = this.renderer.getHeight(), i2 = this.computeViewportBounds(t2, n2, r2);
    return { fps: this.frameTimestamps.length, frameTime: this.lastFrameTime, renderStats: this.lastRenderStats ?? { entitiesDrawn: 0, entitiesSkipped: 0, drawCalls: 0, byType: {} }, entityCount: ((_a = this.doc) == null ? void 0 : _a[e2(338)].length) ?? 0, layerCount: ((_b = this.doc) == null ? void 0 : _b.layers.size) ?? 0, visibleLayerCount: this[e2(448)].getVisibleLayerNames().size, blockCount: ((_c = this[e2(444)]) == null ? void 0 : _c[e2(567)].size) ?? 0, parseTime: this.parseTime, spatialIndexBuildTime: this.spatialIndexBuildTime, totalLoadTime: this.parseTime + this.spatialIndexBuildTime, zoom: t2.scale, pixelSize: t2.scale > 0 ? 1 / t2.scale : 0, viewportBounds: i2, fileName: this.loadedFileName, fileSize: this.loadedFileSize, dxfVersion: ((_d = this.doc) == null ? void 0 : _d.header.acadVersion) ?? null };
  }
  [o(442)](e2, t2, n2) {
    let [r2, i2] = L(e2, 0, n2), [a2, o2] = L(e2, t2, 0);
    return { minX: Math.min(r2, a2), minY: Math.min(i2, o2), maxX: Math.max(r2, a2), maxY: Math.max(i2, o2) };
  }
  handlePan(e2, t2) {
    let n2 = o;
    this.camera.pan(e2, t2), this.requestRender(), this[n2(480)].emit(`viewchange`, this.camera.getTransform());
  }
  handleZoom(e2, t2, n2) {
    let r2 = o;
    this.camera.zoom(e2, t2, n2), this.requestRender(), this[r2(480)].emit(`viewchange`, this.camera.getTransform());
  }
  handleClick(e2, t2) {
    let n2 = o;
    if (!this.doc) return;
    let r2 = this[n2(414)][n2(452)](), [i2, a2] = L(r2, e2, t2);
    switch (this[n2(539)]) {
      case `select`:
        this.handleSelect(i2, a2, e2, t2);
        break;
      case `measure`: {
        let e3 = X(i2, a2, this.doc[n2(338)], this.spatialIndex, r2[n2(421)]), t3 = e3.length > 0 ? e3[0] : null, o2 = this.measureTool.handleClick(i2, a2, t3);
        this.requestRender(), o2 && this.emitter.emit(`measure`, o2);
        break;
      }
    }
  }
  [o(311)](e2, t2) {
    let n2 = o;
    if (this.mouseScreenX = e2, this.mouseScreenY = t2, this.currentTool === `measure` && this.doc) {
      let r2 = this[n2(414)].getTransform(), [i2, a2] = L(r2, e2, t2), o2 = X(i2, a2, this.doc.entities, this.spatialIndex, r2.scale);
      this.measureTool.handleMove(o2[0] ?? null), this.requestRender();
    }
  }
  handleSelect(e2, t2, n2, r2) {
    let i2 = o;
    if (!this.doc) return;
    let a2 = q(e2, t2, this[i2(444)].entities, this.spatialIndex, this.layerManager.getVisibleLayerNames(), this.camera[i2(452)]().scale);
    if (this[i2(550)] = a2, this.requestRender(), a2 >= 0 && this.doc) {
      let o2 = this[i2(444)][i2(338)][a2];
      o2 && this[i2(480)].emit(i2(406), { entity: o2, entityIndex: a2, worldPoint: { x: e2, y: t2 }, screenPoint: { x: n2, y: r2 } });
    }
  }
  computeDocumentBounds() {
    let e2 = o;
    return this.doc ? this.doc[e2(352)].extMin && this.doc[e2(352)].extMax ? { minX: this[e2(444)].header.extMin.x, minY: this.doc.header[e2(384)].y, maxX: this.doc.header[e2(432)].x, maxY: this.doc.header.extMax.y } : it(this[e2(444)].entities) : null;
  }
};
export {
  Yt as CadViewer,
  Le as Camera,
  Dt as CanvasRenderer,
  N as DxfParseError,
  It as EventEmitter,
  Ft as LayerManager,
  Gt as MeasureTool,
  zt as SpatialIndex,
  F as THEMES,
  Ne as aciToDisplayColor,
  Me as aciToHex,
  R as applyTransform,
  it as computeEntitiesBounds,
  H as computeEntityBBox,
  U as drawEntity,
  X as findSnaps,
  Fe as fitToView,
  q as hitTest,
  P as parseDxf,
  Pt as renderDebugOverlay,
  Kt as renderMeasureOverlay,
  z as resolveEntityColor,
  L as screenToWorld,
  Pe as trueColorToHex,
  I as worldToScreen,
  Ie as zoomAtPoint
};
