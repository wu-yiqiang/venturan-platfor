import { m as e } from "./src-B18GHWxx.js";
import { t } from "./ordinal-Dn-wPUXi.js";
import { t as n } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as r, E as i, P as a, V as o, W as s, X as c, Z as l, g as u, j as d, k as f, o as p } from "./chunk-CSCIHK7Q-pN0du8p0.js";
var m = h;
(function(e3, t2) {
  let n2 = h, r2 = e3();
  for (; ; ) try {
    if (parseInt(n2(405)) / 1 + -parseInt(n2(476)) / 2 + parseInt(n2(446)) / 3 + -parseInt(n2(436)) / 4 * (-parseInt(n2(468)) / 5) + parseInt(n2(429)) / 6 * (-parseInt(n2(425)) / 7) + -parseInt(n2(412)) / 8 + parseInt(n2(460)) / 9 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(g, 686604);
function h(e3, t2) {
  return e3 -= 381, g()[e3];
}
function g() {
  let e3 = `nodes)parseError)parser)acos)1474352QIQaEr)node)length)slice)last_column)width)yylloc)value)index).link)yylineno)offset)yytext)_y1)_x1)terminals_)extent).label {
    font-family: )last_line)prototype)anonymous)addLink)abs)getGraph)useMaxWidth)join)first_column);
  }

  .node-labels {
    font-family: )class)yyleng)sourceLinks)selectAll)_more)url()depth)append)match)setInput)254191AfQsyH)popState)target)sankey)trim)getLabelPosition)_backtrack)9521088TubLYK)negative radius: )NON_ESCAPED_TEXT)pushState)sandbox)
Expecting )showPosition)call)height)conditionStack)ranges)Parser)map)1491WXiqUS)split)[id=")update)23238AMAfVe)rules)range)labelStyle)sqrt)options)targetLinks)14828AHasqM)apply)missing: )escaped_text),0,0,)getText)getNodeColor)matched)data)coloring)2833107cflmID)substr)_input)href)symbols_)nodeId)SankeyLink)lex)attr)push);
  }

  /* Node styling */
  .node rect {
    shape-rendering: crispEdges;
  }

  /* Link styling */
  .link {
    fill: none;
    stroke-opacity: 0.5;
    mix-blend-mode: multiply;
  }
)sin)function)layer)14791302cKQCIo)draw)source)max)nodeAlignment)Parse error on line )stateStackSize)links)805eAAqbK)_x0)next)concat`.split(`)`);
  return g = function() {
    return e3;
  }, g();
}
function _(e3) {
  for (var t2 = e3[h(478)] / 6 | 0, n2 = Array(t2), r2 = 0; r2 < t2; ) n2[r2] = `#` + e3.slice(r2 * 6, ++r2 * 6);
  return n2;
}
var v = _(`4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab`);
function y(e3, t2) {
  let n2;
  if (t2 === void 0) for (let t3 of e3) t3 != null && (n2 < t3 || n2 === void 0 && t3 >= t3) && (n2 = t3);
  else {
    let r2 = -1;
    for (let i2 of e3) (i2 = t2(i2, ++r2, e3)) != null && (n2 < i2 || n2 === void 0 && i2 >= i2) && (n2 = i2);
  }
  return n2;
}
function b(e3, t2) {
  let n2;
  if (t2 === void 0) for (let t3 of e3) t3 != null && (n2 > t3 || n2 === void 0 && t3 >= t3) && (n2 = t3);
  else {
    let r2 = -1;
    for (let i2 of e3) (i2 = t2(i2, ++r2, e3)) != null && (n2 > i2 || n2 === void 0 && i2 >= i2) && (n2 = i2);
  }
  return n2;
}
function x(e3, t2) {
  let n2 = 0;
  if (t2 === void 0) for (let t3 of e3) (t3 = +t3) && (n2 += t3);
  else {
    let r2 = -1;
    for (let i2 of e3) (i2 = +t2(i2, ++r2, e3)) && (n2 += i2);
  }
  return n2;
}
function S(e3) {
  return e3.target.depth;
}
function C(e3) {
  return e3.depth;
}
function w(e3, t2) {
  return t2 - 1 - e3.height;
}
function T(e3, t2) {
  return e3[h(397)].length ? e3.depth : t2 - 1;
}
function E(e3) {
  let t2 = h;
  return e3.targetLinks[t2(478)] ? e3[t2(401)] : e3.sourceLinks.length ? b(e3.sourceLinks, S) - 1 : 0;
}
function D(e3) {
  return function() {
    return e3;
  };
}
function O(e3, t2) {
  return A(e3[h(462)], t2.source) || e3.index - t2.index;
}
function k(e3, t2) {
  return A(e3.target, t2.target) || e3.index - t2.index;
}
function A(e3, t2) {
  return e3.y0 - t2.y0;
}
function j(e3) {
  return e3.value;
}
function M(e3) {
  return e3[h(484)];
}
function N(e3) {
  return e3.nodes;
}
function P(e3) {
  return e3.links;
}
function F(e3, t2) {
  let n2 = h, r2 = e3.get(t2);
  if (!r2) throw Error(n2(438) + t2);
  return r2;
}
function I({ nodes: e3 }) {
  let t2 = h;
  for (let n2 of e3) {
    let e4 = n2.y0, r2 = e4;
    for (let r3 of n2.sourceLinks) r3.y0 = e4 + r3.width / 2, e4 += r3[t2(481)];
    for (let e5 of n2[t2(435)]) e5.y1 = r2 + e5.width / 2, r2 += e5.width;
  }
}
function L() {
  let e3 = h, t2 = 0, n2 = 0, r2 = 1, i2 = 1, a2 = 24, o2 = 8, s2, c2 = M, l2 = T, u2, d2, f2 = N, p2 = P, m2 = 6;
  function g2() {
    let e4 = { nodes: f2.apply(null, arguments), links: p2.apply(null, arguments) };
    return _2(e4), v2(e4), S2(e4), C2(e4), L2(e4), I(e4), e4;
  }
  g2[e3(428)] = function(e4) {
    return I(e4), e4;
  }, g2.nodeId = function(e4) {
    return arguments.length ? (c2 = typeof e4 == `function` ? e4 : D(e4), g2) : c2;
  }, g2.nodeAlign = function(e4) {
    return arguments.length ? (l2 = typeof e4 == `function` ? e4 : D(e4), g2) : l2;
  }, g2.nodeSort = function(e4) {
    return arguments.length ? (u2 = e4, g2) : u2;
  }, g2.nodeWidth = function(e4) {
    return arguments.length ? (a2 = +e4, g2) : a2;
  }, g2.nodePadding = function(e4) {
    return arguments.length ? (o2 = s2 = +e4, g2) : o2;
  }, g2.nodes = function(e4) {
    return arguments.length ? (f2 = typeof e4 == `function` ? e4 : D(e4), g2) : f2;
  }, g2[e3(467)] = function(e4) {
    return arguments.length ? (p2 = typeof e4 == `function` ? e4 : D(e4), g2) : p2;
  }, g2.linkSort = function(e4) {
    return arguments.length ? (d2 = e4, g2) : d2;
  }, g2.size = function(e4) {
    return arguments.length ? (t2 = n2 = 0, r2 = +e4[0], i2 = +e4[1], g2) : [r2 - t2, i2 - n2];
  }, g2[e3(383)] = function(e4) {
    return arguments.length ? (t2 = +e4[0][0], r2 = +e4[1][0], n2 = +e4[0][1], i2 = +e4[1][1], g2) : [[t2, n2], [r2, i2]];
  }, g2.iterations = function(e4) {
    return arguments.length ? (m2 = +e4, g2) : m2;
  };
  function _2({ nodes: t3, links: n3 }) {
    let r3 = e3;
    for (let [e4, n4] of t3.entries()) n4.index = e4, n4[r3(397)] = [], n4.targetLinks = [];
    let i3 = new Map(t3.map((e4, n4) => [c2(e4, n4, t3), e4]));
    for (let [e4, t4] of n3.entries()) {
      t4.index = e4;
      let { source: n4, target: a3 } = t4;
      typeof n4 != `object` && (n4 = t4[r3(462)] = F(i3, n4)), typeof a3 != `object` && (a3 = t4.target = F(i3, a3)), n4.sourceLinks.push(t4), a3.targetLinks[r3(455)](t4);
    }
    if (d2 != null) for (let { sourceLinks: e4, targetLinks: n4 } of t3) e4.sort(d2), n4.sort(d2);
  }
  function v2({ nodes: e4 }) {
    for (let t3 of e4) t3.value = t3.fixedValue === void 0 ? Math.max(x(t3.sourceLinks, j), x(t3.targetLinks, j)) : t3.fixedValue;
  }
  function S2({ nodes: e4 }) {
    let t3 = e4.length, n3 = new Set(e4), r3 = /* @__PURE__ */ new Set(), i3 = 0;
    for (; n3.size; ) {
      for (let e5 of n3) {
        e5.depth = i3;
        for (let { target: t4 } of e5.sourceLinks) r3.add(t4);
      }
      if (++i3 > t3) throw Error(`circular link`);
      n3 = r3, r3 = /* @__PURE__ */ new Set();
    }
  }
  function C2({ nodes: t3 }) {
    let n3 = e3, r3 = t3.length, i3 = new Set(t3), a3 = /* @__PURE__ */ new Set(), o3 = 0;
    for (; i3.size; ) {
      for (let e4 of i3) {
        e4[n3(420)] = o3;
        for (let { source: t4 } of e4.targetLinks) a3.add(t4);
      }
      if (++o3 > r3) throw Error(`circular link`);
      i3 = a3, a3 = /* @__PURE__ */ new Set();
    }
  }
  function w2({ nodes: n3 }) {
    let i3 = e3, o3 = y(n3, (e4) => e4[i3(401)]) + 1, s3 = (r2 - t2 - a2) / (o3 - 1), c3 = Array(o3);
    for (let e4 of n3) {
      let n4 = Math[i3(463)](0, Math.min(o3 - 1, Math.floor(l2[i3(419)](null, e4, o3))));
      e4.layer = n4, e4.x0 = t2 + n4 * s3, e4.x1 = e4.x0 + a2, c3[n4] ? c3[n4].push(e4) : c3[n4] = [e4];
    }
    if (u2) for (let e4 of c3) e4.sort(u2);
    return c3;
  }
  function E2(t3) {
    let r3 = e3, a3 = b(t3, (e4) => (i2 - n2 - (e4.length - 1) * s2) / x(e4, j));
    for (let e4 of t3) {
      let t4 = n2;
      for (let n3 of e4) {
        n3.y0 = t4, n3.y1 = t4 + n3[r3(483)] * a3, t4 = n3.y1 + s2;
        for (let e5 of n3.sourceLinks) e5.width = e5.value * a3;
      }
      t4 = (i2 - t4 + s2) / (e4.length + 1);
      for (let n3 = 0; n3 < e4[r3(478)]; ++n3) {
        let r4 = e4[n3];
        r4.y0 += t4 * (n3 + 1), r4.y1 += t4 * (n3 + 1);
      }
      W2(e4);
    }
  }
  function L2(t3) {
    let r3 = e3, a3 = w2(t3);
    s2 = Math.min(o2, (i2 - n2) / (y(a3, (e4) => e4[r3(478)]) - 1)), E2(a3);
    for (let e4 = 0; e4 < m2; ++e4) {
      let t4 = 0.99 ** e4, n3 = Math.max(1 - t4, (e4 + 1) / m2);
      z2(a3, t4, n3), R2(a3, t4, n3);
    }
  }
  function R2(t3, n3, r3) {
    let i3 = e3;
    for (let e4 = 1, a3 = t3[i3(478)]; e4 < a3; ++e4) {
      let a4 = t3[e4];
      for (let e5 of a4) {
        let t4 = 0, r4 = 0;
        for (let { source: n4, value: a6 } of e5.targetLinks) {
          let o3 = a6 * (e5.layer - n4[i3(459)]);
          t4 += G2(n4, e5) * o3, r4 += o3;
        }
        if (!(r4 > 0)) continue;
        let a5 = (t4 / r4 - e5.y0) * n3;
        e5.y0 += a5, e5.y1 += a5, U2(e5);
      }
      u2 === void 0 && a4.sort(A), B2(a4, r3);
    }
  }
  function z2(t3, n3, r3) {
    let i3 = e3;
    for (let e4 = t3.length - 2; e4 >= 0; --e4) {
      let a3 = t3[e4];
      for (let e5 of a3) {
        let t4 = 0, r4 = 0;
        for (let { target: n4, value: a5 } of e5.sourceLinks) {
          let o3 = a5 * (n4.layer - e5[i3(459)]);
          t4 += ee2(e5, n4) * o3, r4 += o3;
        }
        if (!(r4 > 0)) continue;
        let a4 = (t4 / r4 - e5.y0) * n3;
        e5.y0 += a4, e5.y1 += a4, U2(e5);
      }
      u2 === void 0 && a3.sort(A), B2(a3, r3);
    }
  }
  function B2(e4, t3) {
    let r3 = e4.length >> 1, a3 = e4[r3];
    H2(e4, a3.y0 - s2, r3 - 1, t3), V2(e4, a3.y1 + s2, r3 + 1, t3), H2(e4, i2, e4.length - 1, t3), V2(e4, n2, 0, t3);
  }
  function V2(e4, t3, n3, r3) {
    for (; n3 < e4.length; ++n3) {
      let i3 = e4[n3], a3 = (t3 - i3.y0) * r3;
      a3 > 1e-6 && (i3.y0 += a3, i3.y1 += a3), t3 = i3.y1 + s2;
    }
  }
  function H2(e4, t3, n3, r3) {
    for (; n3 >= 0; --n3) {
      let i3 = e4[n3], a3 = (i3.y1 - t3) * r3;
      a3 > 1e-6 && (i3.y0 -= a3, i3.y1 -= a3), t3 = i3.y0 - s2;
    }
  }
  function U2({ sourceLinks: e4, targetLinks: t3 }) {
    if (d2 === void 0) {
      for (let { source: { sourceLinks: e5 } } of t3) e5.sort(k);
      for (let { target: { targetLinks: t4 } } of e4) t4.sort(O);
    }
  }
  function W2(e4) {
    if (d2 === void 0) for (let { sourceLinks: t3, targetLinks: n3 } of e4) t3.sort(k), n3.sort(O);
  }
  function G2(e4, t3) {
    let n3 = e4.y0 - (e4.sourceLinks.length - 1) * s2 / 2;
    for (let { target: r3, width: i3 } of e4.sourceLinks) {
      if (r3 === t3) break;
      n3 += i3 + s2;
    }
    for (let { source: r3, width: i3 } of t3.targetLinks) {
      if (r3 === e4) break;
      n3 -= i3;
    }
    return n3;
  }
  function ee2(t3, n3) {
    let r3 = e3, i3 = n3.y0 - (n3[r3(435)].length - 1) * s2 / 2;
    for (let { source: e4, width: r4 } of n3.targetLinks) {
      if (e4 === t3) break;
      i3 += r4 + s2;
    }
    for (let { target: e4, width: r4 } of t3.sourceLinks) {
      if (e4 === n3) break;
      i3 -= r4;
    }
    return i3;
  }
  return g2;
}
var R = Math.PI, z = 2 * R, B = 1e-6, V = z - B;
function H() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ``;
}
function U() {
  return new H();
}
H.prototype = U.prototype = { constructor: H, moveTo: function(e3, t2) {
  this._ += `M` + (this._x0 = this._x1 = +e3) + `,` + (this._y0 = this._y1 = +t2);
}, closePath: function() {
  let e3 = h;
  this._x1 !== null && (this._x1 = this[e3(469)], this[e3(489)] = this._y0, this._ += `Z`);
}, lineTo: function(e3, t2) {
  this._ += `L` + (this._x1 = +e3) + `,` + (this._y1 = +t2);
}, quadraticCurveTo: function(e3, t2, n2, r2) {
  let i2 = h;
  this._ += `Q` + +e3 + `,` + +t2 + `,` + (this._x1 = +n2) + `,` + (this[i2(489)] = +r2);
}, bezierCurveTo: function(e3, t2, n2, r2, i2, a2) {
  this._ += `C` + +e3 + `,` + +t2 + `,` + +n2 + `,` + +r2 + `,` + (this._x1 = +i2) + `,` + (this._y1 = +a2);
}, arcTo: function(e3, t2, n2, r2, i2) {
  let a2 = h;
  e3 = +e3, t2 = +t2, n2 = +n2, r2 = +r2, i2 = +i2;
  var o2 = this._x1, s2 = this._y1, c2 = n2 - e3, l2 = r2 - t2, u2 = o2 - e3, d2 = s2 - t2, f2 = u2 * u2 + d2 * d2;
  if (i2 < 0) throw Error(a2(413) + i2);
  if (this[a2(381)] === null) this._ += `M` + (this._x1 = e3) + `,` + (this[a2(489)] = t2);
  else if (f2 > B) if (!(Math.abs(d2 * c2 - l2 * u2) > B) || !i2) this._ += `L` + (this._x1 = e3) + `,` + (this._y1 = t2);
  else {
    var p2 = n2 - o2, m2 = r2 - s2, g2 = c2 * c2 + l2 * l2, _2 = p2 * p2 + m2 * m2, v2 = Math.sqrt(g2), y2 = Math[a2(433)](f2), b2 = i2 * Math.tan((R - Math[a2(475)]((g2 + f2 - _2) / (2 * v2 * y2))) / 2), x2 = b2 / y2, S2 = b2 / v2;
    Math.abs(x2 - 1) > B && (this._ += `L` + (e3 + x2 * u2) + `,` + (t2 + x2 * d2)), this._ += `A` + i2 + `,` + i2 + a2(440) + +(d2 * p2 > u2 * m2) + `,` + (this._x1 = e3 + S2 * c2) + `,` + (this._y1 = t2 + S2 * l2);
  }
}, arc: function(e3, t2, n2, r2, i2, a2) {
  let o2 = h;
  e3 = +e3, t2 = +t2, n2 = +n2, a2 = !!a2;
  var s2 = n2 * Math.cos(r2), c2 = n2 * Math[o2(457)](r2), l2 = e3 + s2, u2 = t2 + c2, d2 = 1 ^ a2, f2 = a2 ? r2 - i2 : i2 - r2;
  if (n2 < 0) throw Error(`negative radius: ` + n2);
  this._x1 === null ? this._ += `M` + l2 + `,` + u2 : (Math.abs(this._x1 - l2) > B || Math[o2(389)](this._y1 - u2) > B) && (this._ += `L` + l2 + `,` + u2), n2 && (f2 < 0 && (f2 = f2 % z + z), f2 > V ? this._ += `A` + n2 + `,` + n2 + `,0,1,` + d2 + `,` + (e3 - s2) + `,` + (t2 - c2) + `A` + n2 + `,` + n2 + `,0,1,` + d2 + `,` + (this._x1 = l2) + `,` + (this._y1 = u2) : f2 > B && (this._ += `A` + n2 + `,` + n2 + `,0,` + +(f2 >= R) + `,` + d2 + `,` + (this._x1 = e3 + n2 * Math.cos(i2)) + `,` + (this._y1 = t2 + n2 * Math[o2(457)](i2))));
}, rect: function(e3, t2, n2, r2) {
  this._ += `M` + (this._x0 = this._x1 = +e3) + `,` + (this._y0 = this._y1 = +t2) + `h` + +n2 + `v` + +r2 + `h` + -n2 + `Z`;
}, toString: function() {
  return this._;
} };
function W(e3) {
  return function() {
    return e3;
  };
}
function G(e3) {
  return e3[0];
}
function ee(e3) {
  return e3[1];
}
var te = Array[m(386)].slice;
function ne(e3) {
  return e3[m(462)];
}
function re(e3) {
  return e3.target;
}
function ie(e3) {
  var t2 = ne, n2 = re, r2 = G, i2 = ee, a2 = null;
  function o2() {
    let o3 = h;
    var s2, c2 = te.call(arguments), l2 = t2.apply(this, c2), u2 = n2.apply(this, c2);
    if (a2 || (a2 = s2 = U()), e3(a2, +r2[o3(437)](this, (c2[0] = l2, c2)), +i2.apply(this, c2), +r2.apply(this, (c2[0] = u2, c2)), +i2.apply(this, c2)), s2) return a2 = null, s2 + `` || null;
  }
  return o2.source = function(e4) {
    return arguments.length ? (t2 = e4, o2) : t2;
  }, o2.target = function(e4) {
    let t3 = h;
    return arguments[t3(478)] ? (n2 = e4, o2) : n2;
  }, o2.x = function(e4) {
    let t3 = h;
    return arguments.length ? (r2 = typeof e4 == t3(458) ? e4 : W(+e4), o2) : r2;
  }, o2.y = function(e4) {
    return arguments.length ? (i2 = typeof e4 == `function` ? e4 : W(+e4), o2) : i2;
  }, o2.context = function(e4) {
    return arguments.length ? (a2 = e4 ?? null, o2) : a2;
  }, o2;
}
function ae(e3, t2, n2, r2, i2) {
  e3.moveTo(t2, n2), e3.bezierCurveTo(t2 = (t2 + r2) / 2, n2, t2, i2, r2, i2);
}
function oe() {
  return ie(ae);
}
function se(e3) {
  return [e3[m(462)].x1, e3.y0];
}
function ce(e3) {
  return [e3.target.x0, e3.y1];
}
function le() {
  let e3 = m;
  return oe()[e3(462)](se).target(ce);
}
var K, q, J, Y = (function() {
  let e3 = m;
  var t2 = n(function(e4, t3, n2, r3) {
    for (n2 || (n2 = {}), r3 = e4.length; r3--; n2[e4[r3]] = t3) ;
    return n2;
  }, `o`), r2 = [1, 9], i2 = [1, 10], a2 = [1, 5, 10, 12], o2 = { trace: n(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, SANKEY: 4, NEWLINE: 5, csv: 6, opt_eof: 7, record: 8, csv_tail: 9, EOF: 10, "field[source]": 11, COMMA: 12, "field[target]": 13, "field[value]": 14, field: 15, escaped: 16, non_escaped: 17, DQUOTE: 18, ESCAPED_TEXT: 19, NON_ESCAPED_TEXT: 20, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 4: `SANKEY`, 5: `NEWLINE`, 10: `EOF`, 11: `field[source]`, 12: `COMMA`, 13: `field[target]`, 14: `field[value]`, 18: `DQUOTE`, 19: `ESCAPED_TEXT`, 20: e3(414) }, productions_: [0, [3, 4], [6, 2], [9, 2], [9, 0], [7, 1], [7, 0], [8, 5], [15, 1], [15, 1], [16, 3], [17, 1]], performAction: n(function(t3, n2, r3, i3, a3, o3, s3) {
    let c2 = e3;
    var l2 = o3.length - 1;
    switch (a3) {
      case 7:
        let e4 = i3.findOrCreateNode(o3[l2 - 4].trim().replaceAll(`""`, `"`)), t4 = i3.findOrCreateNode(o3[l2 - 2][c2(409)]().replaceAll(`""`, `"`)), n3 = parseFloat(o3[l2].trim());
        i3[c2(388)](e4, t4, n3);
        break;
      case 8:
      case 9:
      case 11:
        this.$ = o3[l2];
        break;
      case 10:
        this.$ = o3[l2 - 1];
        break;
    }
  }, `anonymous`), table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, { 5: [1, 3] }, { 6: 4, 8: 5, 15: 6, 16: 7, 17: 8, 18: r2, 20: i2 }, { 1: [2, 6], 7: 11, 10: [1, 12] }, t2(i2, [2, 4], { 9: 13, 5: [1, 14] }), { 12: [1, 15] }, t2(a2, [2, 8]), t2(a2, [2, 9]), { 19: [1, 16] }, t2(a2, [2, 11]), { 1: [2, 1] }, { 1: [2, 5] }, t2(i2, [2, 2]), { 6: 17, 8: 5, 15: 6, 16: 7, 17: 8, 18: r2, 20: i2 }, { 15: 18, 16: 7, 17: 8, 18: r2, 20: i2 }, { 18: [1, 19] }, t2(i2, [2, 3]), { 12: [1, 20] }, t2(a2, [2, 10]), { 15: 21, 16: 7, 17: 8, 18: r2, 20: i2 }, t2([1, 5, 10], [2, 7])], defaultActions: { 11: [2, 1], 12: [2, 5] }, parseError: n(function(e4, t3) {
    if (t3.recoverable) this.trace(e4);
    else {
      var n2 = Error(e4);
      throw n2.hash = t3, n2;
    }
  }, `parseError`), parse: n(function(t3) {
    let r3 = e3;
    var i3 = this, a3 = [0], o3 = [], s3 = [null], c2 = [], l2 = this.table, u2 = ``, d2 = 0, f2 = 0, p2 = 0, m2 = 2, h2 = 1, g2 = c2[r3(479)].call(arguments, 1), _2 = Object.create(this.lexer), v2 = { yy: {} };
    for (var y2 in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y2) && (v2.yy[y2] = this.yy[y2]);
    _2.setInput(t3, v2.yy), v2.yy.lexer = _2, v2.yy[r3(474)] = this, _2.yylloc === void 0 && (_2.yylloc = {});
    var b2 = _2.yylloc;
    c2.push(b2);
    var x2 = _2.options && _2.options[r3(422)];
    typeof v2.yy.parseError == `function` ? this.parseError = v2.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
    function S2(e4) {
      a3.length -= 2 * e4, s3.length -= e4, c2.length -= e4;
    }
    n(S2, `popStack`);
    function C2() {
      let e4 = r3;
      var t4 = o3.pop() || _2[e4(453)]() || h2;
      return typeof t4 != `number` && (t4 instanceof Array && (o3 = t4, t4 = o3.pop()), t4 = i3[e4(450)][t4] || t4), t4;
    }
    n(C2, `lex`);
    for (var w2, T2, E2, D2, O2, k2 = {}, A2, j2, M2, N2; ; ) {
      if (E2 = a3[a3.length - 1], this.defaultActions[E2] ? D2 = this.defaultActions[E2] : (w2 ?? (w2 = C2()), D2 = l2[E2] && l2[E2][w2]), D2 === void 0 || !D2.length || !D2[0]) {
        var P2 = ``;
        for (A2 in N2 = [], l2[E2]) this.terminals_[A2] && A2 > m2 && N2.push(`'` + this.terminals_[A2] + `'`);
        P2 = _2.showPosition ? r3(465) + (d2 + 1) + `:
` + _2.showPosition() + r3(417) + N2[r3(392)](`, `) + `, got '` + (this.terminals_[w2] || w2) + `'` : `Parse error on line ` + (d2 + 1) + `: Unexpected ` + (w2 == h2 ? `end of input` : `'` + (this[r3(382)][w2] || w2) + `'`), this.parseError(P2, { text: _2.match, token: this[r3(382)][w2] || w2, line: _2.yylineno, loc: b2, expected: N2 });
      }
      if (D2[0] instanceof Array && D2[r3(478)] > 1) throw Error(`Parse Error: multiple actions possible at state: ` + E2 + `, token: ` + w2);
      switch (D2[0]) {
        case 1:
          a3.push(w2), s3.push(_2.yytext), c2[r3(455)](_2.yylloc), a3.push(D2[1]), w2 = null, T2 ? (w2 = T2, T2 = null) : (f2 = _2[r3(396)], u2 = _2.yytext, d2 = _2[r3(486)], b2 = _2.yylloc, p2 > 0 && p2--);
          break;
        case 2:
          if (j2 = this.productions_[D2[1]][1], k2.$ = s3[s3.length - j2], k2._$ = { first_line: c2[c2[r3(478)] - (j2 || 1)].first_line, last_line: c2[c2.length - 1].last_line, first_column: c2[c2.length - (j2 || 1)].first_column, last_column: c2[c2[r3(478)] - 1].last_column }, x2 && (k2._$.range = [c2[c2.length - (j2 || 1)].range[0], c2[c2.length - 1].range[1]]), O2 = this.performAction.apply(k2, [u2, f2, d2, v2.yy, D2[1], s3, c2][r3(471)](g2)), O2 !== void 0) return O2;
          j2 && (a3 = a3.slice(0, -1 * j2 * 2), s3 = s3[r3(479)](0, -1 * j2), c2 = c2.slice(0, -1 * j2)), a3.push(this.productions_[D2[1]][0]), s3[r3(455)](k2.$), c2.push(k2._$), M2 = l2[a3[a3[r3(478)] - 2]][a3[a3.length - 1]], a3.push(M2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  o2.lexer = (function() {
    let t3 = e3;
    return { EOF: 1, parseError: n(function(e4, t4) {
      if (this.yy.parser) this.yy.parser.parseError(e4, t4);
      else throw Error(e4);
    }, t3(473)), setInput: n(function(e4, n2) {
      let r3 = t3;
      return this.yy = n2 || this.yy || {}, this._input = e4, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this[r3(488)] = this.matched = this.match = ``, this.conditionStack = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options[r3(422)] && (this.yylloc.range = [0, 0]), this.offset = 0, this;
    }, t3(404)), input: n(function() {
      let e4 = t3;
      var n2 = this._input[0];
      return this[e4(488)] += n2, this[e4(396)]++, this.offset++, this[e4(403)] += n2, this[e4(443)] += n2, n2.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this[e4(448)].slice(1), n2;
    }, `input`), unput: n(function(e4) {
      let n2 = t3;
      var r3 = e4.length, i3 = e4[n2(426)](/(?:\r\n?|\n)/g);
      this._input = e4 + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - r3), this.offset -= r3;
      var a3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i3.length - 1 && (this.yylineno -= i3[n2(478)] - 1);
      var o3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: i3 ? (i3[n2(478)] === a3[n2(478)] ? this[n2(482)][n2(393)] : 0) + a3[a3.length - i3[n2(478)]].length - i3[0].length : this.yylloc.first_column - r3 }, this.options.ranges && (this.yylloc[n2(431)] = [o3[0], o3[0] + this.yyleng - r3]), this.yyleng = this[n2(488)].length, this;
    }, `unput`), more: n(function() {
      return this._more = true, this;
    }, `more`), reject: n(function() {
      let e4 = t3;
      if (this[e4(434)].backtrack_lexer) this._backtrack = true;
      else return this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
      return this;
    }, `reject`), less: n(function(e4) {
      let n2 = t3;
      this.unput(this[n2(403)][n2(479)](e4));
    }, `less`), pastInput: n(function() {
      let e4 = t3;
      var n2 = this[e4(443)].substr(0, this[e4(443)].length - this.match.length);
      return (n2[e4(478)] > 20 ? `...` : ``) + n2.substr(-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: n(function() {
      let e4 = t3;
      var n2 = this.match;
      return n2.length < 20 && (n2 += this._input[e4(447)](0, 20 - n2.length)), (n2.substr(0, 20) + (n2.length > 20 ? `...` : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: n(function() {
      var e4 = this.pastInput(), t4 = Array(e4.length + 1).join(`-`);
      return e4 + this.upcomingInput() + `
` + t4 + `^`;
    }, t3(418)), test_match: n(function(e4, n2) {
      let r3 = t3;
      var i3, a3, o3;
      if (this.options.backtrack_lexer && (o3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc.first_column, last_column: this.yylloc[r3(480)] }, yytext: this[r3(488)], match: this.match, matches: this.matches, matched: this.matched, yyleng: this[r3(396)], offset: this[r3(487)], _more: this._more, _input: this._input, yy: this.yy, conditionStack: this[r3(421)].slice(0), done: this.done }, this.options.ranges && (o3.yylloc[r3(431)] = this.yylloc[r3(431)].slice(0))), a3 = e4[0].match(/(?:\r\n?|\n).*/g), a3 && (this.yylineno += a3.length), this.yylloc = { first_line: this.yylloc[r3(385)], last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: a3 ? a3[a3.length - 1].length - a3[a3.length - 1][r3(403)](/\r?\n?/)[0].length : this.yylloc.last_column + e4[0].length }, this.yytext += e4[0], this.match += e4[0], this.matches = e4, this[r3(396)] = this.yytext.length, this[r3(434)].ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this[r3(411)] = false, this._input = this[r3(448)].slice(e4[0].length), this.matched += e4[0], i3 = this.performAction.call(this, this.yy, this, n2, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), i3) return i3;
      if (this._backtrack) {
        for (var s3 in o3) this[s3] = o3[s3];
        return false;
      }
      return false;
    }, `test_match`), next: n(function() {
      let e4 = t3;
      if (this.done) return this.EOF;
      this._input || (this.done = true);
      var n2, r3, i3, a3;
      this[e4(399)] || (this.yytext = ``, this.match = ``);
      for (var o3 = this._currentRules(), s3 = 0; s3 < o3.length; s3++) if (i3 = this._input.match(this[e4(430)][o3[s3]]), i3 && (!r3 || i3[0].length > r3[0].length)) {
        if (r3 = i3, a3 = s3, this[e4(434)].backtrack_lexer) {
          if (n2 = this.test_match(i3, o3[s3]), n2 !== false) return n2;
          if (this._backtrack) {
            r3 = false;
            continue;
          } else return false;
        } else if (!this.options.flex) break;
      }
      return r3 ? (n2 = this.test_match(r3, o3[a3]), n2 === false ? false : n2) : this[e4(448)] === `` ? this.EOF : this.parseError(`Lexical error on line ` + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, t3(470)), lex: n(function() {
      return this.next() || this.lex();
    }, `lex`), begin: n(function(e4) {
      this.conditionStack.push(e4);
    }, `begin`), popState: n(function() {
      return this.conditionStack.length - 1 > 0 ? this.conditionStack.pop() : this.conditionStack[0];
    }, t3(406)), _currentRules: n(function() {
      let e4 = t3;
      return this.conditionStack[e4(478)] && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this[e4(421)].length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: n(function(e4) {
      let n2 = t3;
      return e4 = this.conditionStack[n2(478)] - 1 - Math.abs(e4 || 0), e4 >= 0 ? this.conditionStack[e4] : `INITIAL`;
    }, `topState`), pushState: n(function(e4) {
      this.begin(e4);
    }, `pushState`), stateStackSize: n(function() {
      return this.conditionStack.length;
    }, t3(466)), options: { "case-insensitive": true }, performAction: n(function(e4, n2, r3, i3) {
      let a3 = t3;
      switch (r3) {
        case 0:
          return this[a3(415)](`csv`), 4;
        case 1:
          return this.pushState(`csv`), 4;
        case 2:
          return 10;
        case 3:
          return 5;
        case 4:
          return 12;
        case 5:
          return this.pushState(a3(439)), 18;
        case 6:
          return 20;
        case 7:
          return this.popState(`escaped_text`), 18;
        case 8:
          return 19;
      }
    }, t3(387)), rules: [/^(?:sankey-beta\b)/i, /^(?:sankey\b)/i, /^(?:$)/i, /^(?:((\u000D\u000A)|(\u000A)))/i, /^(?:(\u002C))/i, /^(?:(\u0022))/i, /^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i, /^(?:(\u0022)(?!(\u0022)))/i, /^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i], conditions: { csv: { rules: [2, 3, 4, 5, 6, 7, 8], inclusive: false }, escaped_text: { rules: [7, 8], inclusive: false }, INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8], inclusive: true } } };
  })();
  function s2() {
    this.yy = {};
  }
  return n(s2, e3(423)), s2.prototype = o2, o2.Parser = s2, new s2();
})();
Y.parser = Y;
var X = Y, Z = [], Q = [], $ = /* @__PURE__ */ new Map(), ue = n(() => {
  Z = [], Q = [], $ = /* @__PURE__ */ new Map(), i();
}, `clear`), de = (K = class {
  constructor(e3, t2, n2 = 0) {
    this.source = e3, this.target = t2, this.value = n2;
  }
}, n(K, m(452)), K), fe = n((e3, t2, n2) => {
  Z.push(new de(e3, t2, n2));
}, `addLink`), pe = (q = class {
  constructor(e3) {
    this.ID = e3;
  }
}, n(q, `SankeyNode`), q), me = { nodesMap: $, getConfig: n(() => o()[m(408)], `getConfig`), getNodes: n(() => Q, `getNodes`), getLinks: n(() => Z, `getLinks`), getGraph: n(() => ({ nodes: Q[m(424)]((e3) => ({ id: e3.ID })), links: Z.map((e3) => ({ source: e3.source.ID, target: e3.target.ID, value: e3.value })) }), m(390)), addLink: fe, findOrCreateNode: n((e3) => {
  e3 = u.sanitizeText(e3, o());
  let t2 = $.get(e3);
  return t2 === void 0 && (t2 = new pe(e3), $.set(e3, t2), Q.push(t2)), t2;
}, `findOrCreateNode`), getAccTitle: c, setAccTitle: s, getAccDescription: r, setAccDescription: f, getDiagramTitle: d, setDiagramTitle: l, clear: ue }, he = (J = class e2 {
  static next(t2) {
    return new e2(t2 + ++e2.count);
  }
  constructor(e3) {
    let t2 = m;
    this.id = e3, this[t2(449)] = `#` + e3;
  }
  toString() {
    return m(400) + this.href + `)`;
  }
}, n(J, `Uid`), J.count = 0, J), ge = { left: C, right: w, center: E, justify: T }, _e = n((e3) => {
  let t2 = 0, n2 = 0;
  for (let r2 of e3) {
    let e4 = r2.value ?? 0;
    e4 > t2 && (t2 = e4, n2 = r2.layer ?? 0);
  }
  return n2;
}, `findCentralNodeLayer`), ve = { draw: n(function(r2, i2, s2, c2) {
  let l2 = m, { securityLevel: u2, sankey: d2 } = o(), f2 = a.sankey, h2;
  u2 === `sandbox` && (h2 = e(`#i` + i2));
  let g2 = e(u2 === l2(416) ? h2[l2(472)]()[0].contentDocument.body : `body`), _2 = u2 === `sandbox` ? g2.select(l2(427) + i2 + `"]`) : e(`[id="` + i2 + `"]`), y2 = (d2 == null ? void 0 : d2.width) ?? f2.width, b2 = (d2 == null ? void 0 : d2.height) ?? f2.width, x2 = (d2 == null ? void 0 : d2[l2(391)]) ?? f2.useMaxWidth, S2 = (d2 == null ? void 0 : d2[l2(464)]) ?? f2.nodeAlignment, C2 = (d2 == null ? void 0 : d2.prefix) ?? f2.prefix, w2 = (d2 == null ? void 0 : d2.suffix) ?? f2.suffix, T2 = (d2 == null ? void 0 : d2.showValues) ?? f2.showValues, E2 = (d2 == null ? void 0 : d2.nodeWidth) ?? f2.nodeWidth ?? 10, D2 = (d2 == null ? void 0 : d2.nodePadding) ?? f2.nodePadding ?? 12, O2 = (d2 == null ? void 0 : d2.labelStyle) ?? f2[l2(432)] ?? `legacy`, k2 = (d2 == null ? void 0 : d2.nodeColors) ?? {}, A2 = c2.db.getGraph(), j2 = ge[S2];
  L()[l2(451)]((e3) => e3.id).nodeWidth(E2).nodePadding(D2 + (T2 ? 15 : 0)).nodeAlign(j2).extent([[0, 0], [y2, b2]])(A2);
  let M2 = _e(A2.nodes), N2 = t(v), P2 = n((e3) => k2[e3] ?? N2(e3), l2(442));
  _2.append(`g`).attr(l2(395), `nodes`).selectAll(`.node`)[l2(444)](A2.nodes).join(`g`).attr(`class`, l2(477)).attr(`id`, (e3) => (e3.uid = he.next(`node-`)).id).attr(`transform`, function(e3) {
    return `translate(` + e3.x0 + `,` + e3.y0 + `)`;
  }).attr(`x`, (e3) => e3.x0).attr(`y`, (e3) => e3.y0)[l2(402)](`rect`).attr(l2(420), (e3) => e3.y1 - e3.y0).attr(`width`, (e3) => e3.x1 - e3.x0)[l2(454)](`fill`, (e3) => P2(e3.id));
  let F2 = n(({ id: e3, value: t2 }) => T2 ? e3 + `
` + C2 + Math.round(t2 * 100) / 100 + w2 : e3, l2(441)), I2 = n((e3) => O2 === `outlined` ? (e3[l2(459)] ?? 0) < M2 ? { x: e3.x0 - 6, anchor: `end` } : { x: e3.x1 + 6, anchor: `start` } : e3.x0 < y2 / 2 ? { x: e3.x1 + 6, anchor: `start` } : { x: e3.x0 - 6, anchor: `end` }, l2(410)), R2 = _2.append(`g`).attr(`class`, `node-labels`).attr(`font-size`, 14), z2 = n((e3) => R2[l2(398)](e3 ? `.` + e3 : `text`).data(A2.nodes).join(`text`).attr(`class`, e3 ?? null)[l2(454)](`x`, (e4) => I2(e4).x)[l2(454)](`y`, (e4) => (e4.y1 + e4.y0) / 2).attr(`dy`, (T2 ? `0` : `0.35`) + `em`).attr(`text-anchor`, (e4) => I2(e4).anchor).text(F2), `appendLabel`);
  O2 === `outlined` ? (z2(`sankey-label-bg`), z2(`sankey-label-fg`)) : z2();
  let B2 = _2.append(`g`).attr(`class`, l2(467)).attr(`fill`, `none`).attr(`stroke-opacity`, 0.5).selectAll(l2(485)).data(A2[l2(467)])[l2(392)](`g`).attr(l2(395), `link`).style(`mix-blend-mode`, `multiply`), V2 = (d2 == null ? void 0 : d2.linkColor) ?? `gradient`;
  if (V2 === `gradient`) {
    let e3 = B2.append(`linearGradient`).attr(`id`, (e4) => (e4.uid = he.next(`linearGradient-`)).id).attr(`gradientUnits`, `userSpaceOnUse`)[l2(454)](`x1`, (e4) => e4.source.x1).attr(`x2`, (e4) => e4.target.x0);
    e3.append(`stop`).attr(`offset`, `0%`).attr(`stop-color`, (e4) => P2(e4.source.id)), e3.append(`stop`).attr(`offset`, `100%`).attr(`stop-color`, (e4) => P2(e4[l2(407)].id));
  }
  let H2;
  switch (V2) {
    case `gradient`:
      H2 = n((e3) => e3.uid, l2(445));
      break;
    case l2(462):
      H2 = n((e3) => P2(e3.source.id), `coloring`);
      break;
    case l2(407):
      H2 = n((e3) => P2(e3.target.id), `coloring`);
      break;
    default:
      H2 = V2;
  }
  B2.append(`path`).attr(`d`, le()).attr(`stroke`, H2).attr(`stroke-width`, (e3) => Math[l2(463)](1, e3.width)), p(void 0, _2, 0, x2);
}, m(461)) }, ye = n((e3) => e3.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g, ``).replaceAll(/([\n\r])+/g, `
`).trim(), `prepareTextForParsing`), be = n((e3) => m(384) + e3.fontFamily + m(394) + e3.fontFamily + `;
  }

  /* Outlined label style - background stroke for better readability */
  .sankey-label-bg {
    stroke: ` + (e3.mainBkg || e3.background || `#fff`) + `;
    stroke-width: 4px;
    stroke-linejoin: round;
    paint-order: stroke;
  }

  /* Foreground label text */
  .sankey-label-fg {
    fill: ` + e3.textColor + m(456), `getStyles`), xe = X.parse.bind(X);
X.parse = (e3) => xe(ye(e3));
var Se = { styles: be, parser: X, db: me, renderer: ve };
export {
  Se as diagram
};
