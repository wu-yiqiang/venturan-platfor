import { g as e, h as t } from "./index-D-g3WoLo.js";
import { m as n } from "./src-B18GHWxx.js";
import { t as r } from "./chunk-AGHRB4JF-CBHSUHQe.js";
import { B as i, E as a, W as o, X as s, Z as c, f as l, i as u, j as d, k as f, nt as p, q as m, r as h, s as g, z as _ } from "./chunk-CSCIHK7Q-pN0du8p0.js";
import { h as v } from "./chunk-5ZQYHXKU-BklVe06k.js";
import { t as y } from "./chunk-WU5MYG2G-BnIisATw.js";
import { n as b } from "./rough.esm-Ct7jHvNv.js";
var x = V;
(function(e2, t2) {
  let n2 = V, r2 = e2();
  for (; ; ) try {
    if (-parseInt(n2(200)) / 1 * (parseInt(n2(166)) / 2) + parseInt(n2(245)) / 3 + -parseInt(n2(142)) / 4 * (-parseInt(n2(105)) / 5) + parseInt(n2(188)) / 6 * (parseInt(n2(137)) / 7) + parseInt(n2(232)) / 8 + parseInt(n2(155)) / 9 * (parseInt(n2(237)) / 10) + -parseInt(n2(246)) / 11 * (parseInt(n2(128)) / 12) === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(S, 273795);
function S() {
  let e2 = `stroke-width)622559RyqIyp)large)label)matched)transition)711248cptEjd)conditionStack)showPosition)duration)logRatio)minErrorDelta)match)first_column)stroke)text)lexer)test_match)append)99JlcjdR)call)Parser)min)circles)assign)flex)psi)lex). Unrecognized text.
)INITIAL)38644KIqoAR)yylloc)pushState)parseFloat)100%)range)getDiagramTitle)attrTween)remove)setAttribute)selectAll)log)attr)random)sort)symmetricalTextCentre)fill)validateUnionIdentifiers)height)less)size)concat)18XvrCxI)Parse error on line )datum)fxprime)normalizeText)middle)hash)translate(0, )getStyleData)begin)
  .venn-title {
    font-size: 32px;
    fill: )yRange)17vFbYTk)radius)last_line)node)upcomingInput)bol)normalize)push)circle)#ff7f0e)style)get)forEach)matches)cos)history)venn-area venn-)backtrack_lexer)atan2)consumeIndentText)colorScheme)data)anonymous).venn-area path)venn-title)input)last_column)function)_input)font-size)class)...)1259096vzPnzq)has)_backtrack)xRange).venn-intersection text)474170CgBVur)pop)done)performAction)#7f7f7f);
  }
)styles)Lexical error on line )1637919gBaDzI)275mFelxt)yyleng)stableSetsKey)length)trim)parseError)sets)hasOwnProperty)ownerDocument)getSubsetData)colour)BRACKET_LABEL)options)substr)EOF)parser)data-venn-sets)setIndentMode)end)sqrt)fill-opacity)weight)15NgtoYQ)svg)lossFunction)abs)text requires set)getCurrentSets)add)select)width)setid)maxIterations)arcs)yylineno)slice)color)map)0px)addStyleData)vennTitleTextColor)useDebugLayout)addTextData)chi)none)683004JXpDcD)yytext)bounds)max)setDiagramTitle)keys)filter)normal`.split(`)`);
  return S = function() {
    return e2;
  }, S();
}
var C = (e2, t2) => p(e2, `a`, -t2);
t();
var w = 1e-10;
function T(e2, t2) {
  let n2 = V, r2 = D(e2), i2 = r2.filter((t3) => E(t3, e2)), a2 = 0, o2 = 0, s2 = [];
  if (i2.length > 1) {
    let t3 = M(i2);
    for (let e3 = 0; e3 < i2[n2(249)]; ++e3) {
      let r4 = i2[e3];
      r4.angle = Math[n2(218)](r4.x - t3.x, r4.y - t3.y);
    }
    i2.sort((e3, t4) => t4.angle - e3.angle);
    let r3 = i2[i2.length - 1];
    for (let t4 = 0; t4 < i2.length; ++t4) {
      let c2 = i2[t4];
      o2 += (r3.x + c2.x) * (c2.y - r3.y);
      let l2 = { x: (c2.x + r3.x) / 2, y: (c2.y + r3.y) / 2 }, u2 = null;
      for (let t5 = 0; t5 < c2.parentIndex.length; ++t5) if (r3.parentIndex.includes(c2.parentIndex[t5])) {
        let i3 = e2[c2.parentIndex[t5]], a3 = Math[n2(218)](c2.x - i3.x, c2.y - i3.y), o3 = Math.atan2(r3.x - i3.x, r3.y - i3.y), s3 = o3 - a3;
        s3 < 0 && (s3 += 2 * Math.PI);
        let d2 = o3 - s3 / 2, f2 = k(l2, { x: i3.x + i3.radius * Math.sin(d2), y: i3.y + i3[n2(201)] * Math.cos(d2) });
        f2 > i3.radius * 2 && (f2 = i3.radius * 2), (u2 == null || u2[n2(113)] > f2) && (u2 = { circle: i3, width: f2, p1: c2, p2: r3, large: f2 > i3.radius, sweep: true });
      }
      u2 != null && (s2.push(u2), a2 += O(u2.circle.radius, u2.width), r3 = c2);
    }
  } else {
    let t3 = e2[0];
    for (let n3 = 1; n3 < e2.length; ++n3) e2[n3].radius < t3.radius && (t3 = e2[n3]);
    let r3 = false;
    for (let i3 = 0; i3 < e2[n2(249)]; ++i3) if (k(e2[i3], t3) > Math[n2(108)](t3.radius - e2[i3][n2(201)])) {
      r3 = true;
      break;
    }
    r3 ? a2 = o2 = 0 : (a2 = t3.radius * t3.radius * Math.PI, s2.push({ circle: t3, p1: { x: t3.x, y: t3.y + t3.radius }, p2: { x: t3.x - w, y: t3.y + t3.radius }, width: t3.radius * 2, large: true, sweep: true }));
  }
  return o2 /= 2, t2 && (t2.area = a2 + o2, t2.arcArea = a2, t2.polygonArea = o2, t2.arcs = s2, t2.innerPoints = i2, t2.intersectionPoints = r2), a2 + o2;
}
function E(e2, t2) {
  return t2.every((t3) => k(e2, t3) < t3.radius + w);
}
function D(e2) {
  let t2 = V, n2 = [];
  for (let r2 = 0; r2 < e2[t2(249)]; ++r2) for (let t3 = r2 + 1; t3 < e2.length; ++t3) {
    let i2 = j(e2[r2], e2[t3]);
    for (let e3 of i2) e3.parentIndex = [r2, t3], n2.push(e3);
  }
  return n2;
}
function O(e2, t2) {
  let n2 = V;
  return e2 * e2 * Math.acos(1 - t2 / e2) - (e2 - t2) * Math[n2(265)](t2 * (2 * e2 - t2));
}
function k(e2, t2) {
  return Math.sqrt((e2.x - t2.x) * (e2.x - t2.x) + (e2.y - t2.y) * (e2.y - t2.y));
}
function A(e2, t2, n2) {
  if (n2 >= e2 + t2) return 0;
  if (n2 <= Math.abs(e2 - t2)) return Math.PI * Math.min(e2, t2) * Math.min(e2, t2);
  let r2 = e2 - (n2 * n2 - t2 * t2 + e2 * e2) / (2 * n2), i2 = t2 - (n2 * n2 - e2 * e2 + t2 * t2) / (2 * n2);
  return O(e2, r2) + O(t2, i2);
}
function j(e2, t2) {
  let n2 = V, r2 = k(e2, t2), i2 = e2.radius, a2 = t2[n2(201)];
  if (r2 >= i2 + a2 || r2 <= Math.abs(i2 - a2)) return [];
  let o2 = (i2 * i2 - a2 * a2 + r2 * r2) / (2 * r2), s2 = Math.sqrt(i2 * i2 - o2 * o2), c2 = e2.x + o2 * (t2.x - e2.x) / r2, l2 = e2.y + o2 * (t2.y - e2.y) / r2, u2 = -(t2.y - e2.y) * (s2 / r2), d2 = -(t2.x - e2.x) * (s2 / r2);
  return [{ x: c2 + u2, y: l2 - d2 }, { x: c2 - u2, y: l2 + d2 }];
}
function M(e2) {
  let t2 = V, n2 = { x: 0, y: 0 };
  for (let t3 of e2) n2.x += t3.x, n2.y += t3.y;
  return n2.x /= e2[t2(249)], n2.y /= e2.length, n2;
}
function N(e2, t2, n2, r2) {
  r2 || (r2 = {});
  let i2 = r2.maxIterations || 100, a2 = r2.tolerance || 1e-10, o2 = e2(t2), s2 = e2(n2), c2 = n2 - t2;
  if (o2 * s2 > 0) throw `Initial bisect points must have opposite signs`;
  if (o2 === 0) return t2;
  if (s2 === 0) return n2;
  for (let n3 = 0; n3 < i2; ++n3) {
    c2 /= 2;
    let n4 = t2 + c2, r3 = e2(n4);
    if (r3 * o2 >= 0 && (t2 = n4), Math.abs(c2) < a2 || r3 === 0) return n4;
  }
  return t2 + c2;
}
function P(e2) {
  let t2 = Array(e2);
  for (let n2 = 0; n2 < e2; ++n2) t2[n2] = 0;
  return t2;
}
function F(e2, t2) {
  let n2 = V;
  return P(e2)[n2(120)](() => P(t2));
}
function I(e2, t2) {
  let n2 = 0;
  for (let r2 = 0; r2 < e2.length; ++r2) n2 += e2[r2] * t2[r2];
  return n2;
}
function L(e2) {
  return Math.sqrt(I(e2, e2));
}
function R(e2, t2, n2) {
  for (let r2 = 0; r2 < t2.length; ++r2) e2[r2] = t2[r2] * n2;
}
function z(e2, t2, n2, r2, i2) {
  let a2 = V;
  for (let o2 = 0; o2 < e2[a2(249)]; ++o2) e2[o2] = t2 * n2[o2] + r2 * i2[o2];
}
function B(e2, t2, n2) {
  let r2 = V;
  n2 || (n2 = {});
  let i2 = n2[r2(115)] || t2.length * 200, a2 = n2.nonZeroDelta || 1.05, o2 = n2.zeroDelta || 1e-3, s2 = n2[r2(147)] || 1e-6, c2 = n2[r2(147)] || 1e-5, l2 = n2.rho === void 0 ? 1 : n2.rho, u2 = n2[r2(126)] === void 0 ? 2 : n2[r2(126)], d2 = n2.psi === void 0 ? -0.5 : n2[r2(162)], f2 = n2.sigma === void 0 ? 0.5 : n2.sigma, p2, m2 = t2.length, h2 = Array(m2 + 1);
  h2[0] = t2, h2[0].fx = e2(t2), h2[0].id = 0;
  for (let n3 = 0; n3 < m2; ++n3) {
    let r3 = t2.slice();
    r3[n3] = r3[n3] ? r3[n3] * a2 : o2, h2[n3 + 1] = r3, h2[n3 + 1].fx = e2(r3), h2[n3 + 1].id = n3 + 1;
  }
  function g2(e3) {
    for (let t3 = 0; t3 < e3.length; t3++) h2[m2][t3] = e3[t3];
    h2[m2].fx = e3.fx;
  }
  let _2 = (e3, t3) => e3.fx - t3.fx, v2 = t2.slice(), y2 = t2[r2(118)](), b2 = t2.slice(), x2 = t2.slice();
  for (let t3 = 0; t3 < i2; ++t3) {
    if (h2.sort(_2), n2.history) {
      let e3 = h2.map((e4) => {
        let t5 = e4[r2(118)]();
        return t5.fx = e4.fx, t5.id = e4.id, t5;
      });
      e3[r2(180)]((e4, t5) => e4.id - t5.id), n2.history[r2(207)]({ x: h2[0].slice(), fx: h2[0].fx, simplex: e3 });
    }
    p2 = 0;
    for (let e3 = 0; e3 < m2; ++e3) p2 = Math.max(p2, Math[r2(108)](h2[0][e3] - h2[1][e3]));
    if (Math.abs(h2[0].fx - h2[m2].fx) < s2 && p2 < c2) break;
    for (let e3 = 0; e3 < m2; ++e3) {
      v2[e3] = 0;
      for (let t5 = 0; t5 < m2; ++t5) v2[e3] += h2[t5][e3];
      v2[e3] /= m2;
    }
    let t4 = h2[m2];
    if (z(y2, 1 + l2, v2, -l2, t4), y2.fx = e2(y2), y2.fx < h2[0].fx) z(x2, 1 + u2, v2, -u2, t4), x2.fx = e2(x2), x2.fx < y2.fx ? g2(x2) : g2(y2);
    else if (y2.fx >= h2[m2 - 1].fx) {
      let n3 = false;
      if (y2.fx > t4.fx ? (z(b2, 1 + d2, v2, -d2, t4), b2.fx = e2(b2), b2.fx < t4.fx ? g2(b2) : n3 = true) : (z(b2, 1 - d2 * l2, v2, d2 * l2, t4), b2.fx = e2(b2), b2.fx < y2.fx ? g2(b2) : n3 = true), n3) {
        if (f2 >= 1) break;
        for (let t5 = 1; t5 < h2.length; ++t5) z(h2[t5], 1 - f2, h2[0], f2, h2[t5]), h2[t5].fx = e2(h2[t5]);
      }
    } else g2(y2);
  }
  return h2.sort(_2), { fx: h2[0].fx, x: h2[0] };
}
function ee(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = n2.fx, c2 = I(n2.fxprime, t2), l2 = s2, u2 = s2, d2 = c2, f2 = 0;
  i2 || (i2 = 1), a2 || (a2 = 1e-6), o2 || (o2 = 0.1);
  function p2(u3, f3, p3) {
    let m2 = V;
    for (let h2 = 0; h2 < 16; ++h2) if (i2 = (u3 + f3) / 2, z(r2.x, 1, n2.x, i2, t2), l2 = r2.fx = e2(r2.x, r2.fxprime), d2 = I(r2[m2(191)], t2), l2 > s2 + a2 * i2 * c2 || l2 >= p3) f3 = i2;
    else {
      if (Math.abs(d2) <= -o2 * c2) return i2;
      d2 * (f3 - u3) >= 0 && (f3 = u3), u3 = i2, p3 = l2;
    }
    return 0;
  }
  for (let m2 = 0; m2 < 10; ++m2) {
    if (z(r2.x, 1, n2.x, i2, t2), l2 = r2.fx = e2(r2.x, r2.fxprime), d2 = I(r2.fxprime, t2), l2 > s2 + a2 * i2 * c2 || m2 && l2 >= u2) return p2(f2, i2, u2);
    if (Math.abs(d2) <= -o2 * c2) return i2;
    if (d2 >= 0) return p2(i2, f2, l2);
    u2 = l2, f2 = i2, i2 *= 2;
  }
  return i2;
}
function te(e2, t2, n2) {
  let r2 = V, i2 = { x: t2.slice(), fx: 0, fxprime: t2.slice() }, a2 = { x: t2.slice(), fx: 0, fxprime: t2.slice() }, o2 = t2.slice(), s2, c2, l2 = 1, u2;
  n2 || (n2 = {}), u2 = n2.maxIterations || t2.length * 20, i2.fx = e2(i2.x, i2.fxprime), s2 = i2[r2(191)].slice(), R(s2, i2.fxprime, -1);
  for (let t3 = 0; t3 < u2; ++t3) {
    if (l2 = ee(e2, s2, i2, a2, l2), n2[r2(215)] && n2.history[r2(207)]({ x: i2.x[r2(118)](), fx: i2.fx, fxprime: i2.fxprime.slice(), alpha: l2 }), !l2) R(s2, i2.fxprime, -1);
    else {
      z(o2, 1, a2.fxprime, -1, i2.fxprime);
      let e3 = I(i2[r2(191)], i2.fxprime), t4 = Math.max(0, I(o2, a2[r2(191)]) / e3);
      z(s2, t4, s2, -1, a2[r2(191)]), c2 = i2, i2 = a2, a2 = c2;
    }
    if (L(i2.fxprime) <= 1e-5) break;
  }
  return n2.history && n2.history.push({ x: i2.x.slice(), fx: i2.fx, fxprime: i2.fxprime.slice(), alpha: l2 }), i2;
}
function ne(e2, t2 = {}) {
  let n2 = V;
  t2.maxIterations = t2.maxIterations || 500;
  let r2 = t2.initialLayout || se, i2 = t2.lossFunction || U, a2 = ie(e2, t2), o2 = r2(a2, t2), s2 = Object[n2(133)](o2), c2 = [];
  for (let e3 of s2) c2[n2(207)](o2[e3].x), c2.push(o2[e3].y);
  let l2 = B((e3) => {
    let t3 = n2, r3 = {};
    for (let n3 = 0; n3 < s2.length; ++n3) {
      let i3 = s2[n3];
      r3[i3] = { x: e3[2 * n3], y: e3[2 * n3 + 1], radius: o2[i3][t3(201)] };
    }
    return i2(r3, a2);
  }, c2, t2).x;
  for (let e3 = 0; e3 < s2.length; ++e3) {
    let t3 = s2[e3];
    o2[t3].x = l2[2 * e3], o2[t3].y = l2[2 * e3 + 1];
  }
  return o2;
}
function V(e2, t2) {
  return e2 -= 103, S()[e2];
}
var re = 1e-10;
function H(e2, t2, n2) {
  return Math.min(e2, t2) * Math.min(e2, t2) * Math.PI <= n2 + re ? Math.abs(e2 - t2) : N((r2) => A(e2, t2, r2) - n2, 0, e2 + t2);
}
function ie(e2, t2 = {}) {
  let n2 = V, r2 = t2.distinct, i2 = e2.map((e3) => Object[n2(160)]({}, e3));
  function a2(e3) {
    return e3.join(`;`);
  }
  if (r2) {
    let e3 = /* @__PURE__ */ new Map();
    for (let t3 of i2) for (let r3 = 0; r3 < t3.sets.length; r3++) {
      let i3 = String(t3.sets[r3]);
      e3.set(i3, t3[n2(186)] + (e3.get(i3) || 0));
      for (let a3 = r3 + 1; a3 < t3.sets[n2(249)]; a3++) {
        let n3 = String(t3.sets[a3]), r4 = i3 + `;` + n3, o3 = n3 + `;` + i3;
        e3.set(r4, t3.size + (e3.get(r4) || 0)), e3.set(o3, t3.size + (e3.get(o3) || 0));
      }
    }
    for (let t3 of i2) t3[n2(252)].length < 3 && (t3.size = e3.get(a2(t3[n2(252)])));
  }
  let o2 = [], s2 = /* @__PURE__ */ new Set();
  for (let e3 of i2) if (e3.sets[n2(249)] === 1) o2.push(e3.sets[0]);
  else if (e3.sets[n2(249)] === 2) {
    let t3 = e3.sets[0], r3 = e3.sets[1];
    s2[n2(111)](a2(e3.sets)), s2[n2(111)](a2([r3, t3]));
  }
  o2.sort((e3, t3) => e3 === t3 ? 0 : e3 < t3 ? -1 : 1);
  for (let e3 = 0; e3 < o2[n2(249)]; ++e3) {
    let t3 = o2[e3];
    for (let n3 = e3 + 1; n3 < o2.length; ++n3) {
      let e4 = o2[n3];
      s2.has(a2([t3, e4])) || i2.push({ sets: [t3, e4], size: 0 });
    }
  }
  return i2;
}
function ae(e2, t2, n2) {
  let r2 = V, i2 = F(t2.length, t2.length), a2 = F(t2.length, t2.length);
  return e2.filter((e3) => e3.sets.length === 2)[r2(212)]((e3) => {
    let o2 = r2, s2 = n2[e3.sets[0]], c2 = n2[e3.sets[1]], l2 = H(Math.sqrt(t2[s2].size / Math.PI), Math[o2(265)](t2[c2].size / Math.PI), e3.size);
    i2[s2][c2] = i2[c2][s2] = l2;
    let u2 = 0;
    e3.size + 1e-10 >= Math.min(t2[s2].size, t2[c2].size) ? u2 = 1 : e3.size <= 1e-10 && (u2 = -1), a2[s2][c2] = a2[c2][s2] = u2;
  }), { distances: i2, constraints: a2 };
}
function oe(e2, t2, n2, r2) {
  let i2 = V;
  for (let e3 = 0; e3 < t2[i2(249)]; ++e3) t2[e3] = 0;
  let a2 = 0;
  for (let i3 = 0; i3 < n2.length; ++i3) {
    let o2 = e2[2 * i3], s2 = e2[2 * i3 + 1];
    for (let c2 = i3 + 1; c2 < n2.length; ++c2) {
      let l2 = e2[2 * c2], u2 = e2[2 * c2 + 1], d2 = n2[i3][c2], f2 = r2[i3][c2], p2 = (l2 - o2) * (l2 - o2) + (u2 - s2) * (u2 - s2), m2 = Math.sqrt(p2), h2 = p2 - d2 * d2;
      f2 > 0 && m2 <= d2 || f2 < 0 && m2 >= d2 || (a2 += 2 * h2 * h2, t2[2 * i3] += 4 * h2 * (o2 - l2), t2[2 * i3 + 1] += 4 * h2 * (s2 - u2), t2[2 * c2] += 4 * h2 * (l2 - o2), t2[2 * c2 + 1] += 4 * h2 * (u2 - s2));
    }
  }
  return a2;
}
function se(e2, t2 = {}) {
  let n2 = le(e2, t2), r2 = t2.lossFunction || U;
  if (e2.length >= 8) {
    let i2 = ce(e2, t2), a2 = r2(i2, e2), o2 = r2(n2, e2);
    a2 + 1e-8 < o2 && (n2 = i2);
  }
  return n2;
}
function ce(e2, t2 = {}) {
  let n2 = V, r2 = t2.restarts || 10, i2 = [], a2 = {};
  for (let t3 of e2) t3.sets.length === 1 && (a2[t3.sets[0]] = i2.length, i2.push(t3));
  let { distances: o2, constraints: s2 } = ae(e2, i2, a2), c2 = L(o2[n2(120)](L)) / o2.length;
  o2 = o2.map((e3) => e3.map((e4) => e4 / c2));
  let l2 = (e3, t3) => oe(e3, t3, o2, s2), u2 = null;
  for (let e3 = 0; e3 < r2; ++e3) {
    let e4 = te(l2, P(o2.length * 2).map(Math[n2(179)]), t2);
    (!u2 || e4.fx < u2.fx) && (u2 = e4);
  }
  let d2 = u2.x, f2 = {};
  for (let e3 = 0; e3 < i2.length; ++e3) {
    let t3 = i2[e3];
    f2[t3.sets[0]] = { x: d2[2 * e3] * c2, y: d2[2 * e3 + 1] * c2, radius: Math.sqrt(t3.size / Math.PI) };
  }
  if (t2[n2(215)]) for (let e3 of t2.history) R(e3.x, c2);
  return f2;
}
function le(e2, t2) {
  let n2 = V, r2 = t2 && t2[n2(107)] ? t2.lossFunction : U, i2 = {}, a2 = {};
  for (let t3 of e2) if (t3[n2(252)].length === 1) {
    let e3 = t3[n2(252)][0];
    i2[e3] = { x: 1e10, y: 1e10, rowid: i2.length, size: t3.size, radius: Math.sqrt(t3.size / Math.PI) }, a2[e3] = [];
  }
  e2 = e2.filter((e3) => e3[n2(252)].length === 2);
  for (let t3 of e2) {
    let e3 = t3.weight == null ? 1 : t3.weight, r3 = t3.sets[0], o3 = t3.sets[1];
    t3.size + re >= Math.min(i2[r3].size, i2[o3][n2(186)]) && (e3 = 0), a2[r3].push({ set: o3, size: t3.size, weight: e3 }), a2[o3].push({ set: r3, size: t3[n2(186)], weight: e3 });
  }
  let o2 = [];
  Object[n2(133)](a2).forEach((e3) => {
    let t3 = 0;
    for (let n3 = 0; n3 < a2[e3].length; ++n3) t3 += a2[e3][n3].size * a2[e3][n3].weight;
    o2.push({ set: e3, size: t3 });
  });
  function s2(e3, t3) {
    return t3.size - e3.size;
  }
  o2.sort(s2);
  let c2 = {};
  function l2(e3) {
    return e3.set in c2;
  }
  function u2(e3, t3) {
    i2[t3].x = e3.x, i2[t3].y = e3.y, c2[t3] = true;
  }
  u2({ x: 0, y: 0 }, o2[0].set);
  for (let t3 = 1; t3 < o2.length; ++t3) {
    let c3 = o2[t3].set, f2 = a2[c3].filter(l2), p2 = i2[c3];
    if (f2.sort(s2), f2.length === 0) throw `ERROR: missing pairwise overlap information`;
    let m2 = [];
    for (var d2 = 0; d2 < f2.length; ++d2) {
      let e3 = i2[f2[d2].set], t4 = H(p2.radius, e3.radius, f2[d2].size);
      m2.push({ x: e3.x + t4, y: e3.y }), m2[n2(207)]({ x: e3.x - t4, y: e3.y }), m2.push({ y: e3.y + t4, x: e3.x }), m2[n2(207)]({ y: e3.y - t4, x: e3.x });
      for (let n3 = d2 + 1; n3 < f2.length; ++n3) {
        let r3 = i2[f2[n3].set], a3 = H(p2.radius, r3.radius, f2[n3].size), o3 = j({ x: e3.x, y: e3.y, radius: t4 }, { x: r3.x, y: r3.y, radius: a3 });
        m2.push(...o3);
      }
    }
    let h2 = 1e50, g2 = m2[0];
    for (let t4 of m2) {
      i2[c3].x = t4.x, i2[c3].y = t4.y;
      let n3 = r2(i2, e2);
      n3 < h2 && (h2 = n3, g2 = t4);
    }
    u2(g2, c3);
  }
  return i2;
}
function U(e2, t2) {
  let n2 = V, r2 = 0;
  for (let i2 of t2) {
    if (i2.sets[n2(249)] === 1) continue;
    let t3;
    if (i2.sets.length === 2) {
      let n3 = e2[i2.sets[0]], r3 = e2[i2.sets[1]];
      t3 = A(n3.radius, r3.radius, k(n3, r3));
    } else t3 = T(i2[n2(252)].map((t4) => e2[t4]));
    let a2 = i2.weight == null ? 1 : i2.weight;
    r2 += a2 * (t3 - i2.size) * (t3 - i2.size);
  }
  return r2;
}
function ue(e2, t2) {
  let n2 = V, r2 = 0;
  for (let i2 of t2) {
    if (i2.sets[n2(249)] === 1) continue;
    let t3;
    if (i2.sets.length === 2) {
      let r3 = e2[i2.sets[0]], a3 = e2[i2[n2(252)][1]];
      t3 = A(r3.radius, a3.radius, k(r3, a3));
    } else t3 = T(i2.sets.map((t4) => e2[t4]));
    let a2 = i2[n2(104)] == null ? 1 : i2.weight, o2 = Math.log((t3 + 1) / (i2.size + 1));
    r2 += a2 * o2 * o2;
  }
  return r2;
}
function de(e2, t2, n2) {
  let r2 = V;
  if (n2 == null ? e2.sort((e3, t3) => t3.radius - e3[r2(201)]) : e2.sort(n2), e2.length > 0) {
    let t3 = e2[0].x, n3 = e2[0].y;
    for (let r3 of e2) r3.x -= t3, r3.y -= n3;
  }
  if (e2[r2(249)] === 2 && k(e2[0], e2[1]) < Math.abs(e2[1][r2(201)] - e2[0].radius) && (e2[1].x = e2[0].x + e2[0].radius - e2[1].radius - 1e-10, e2[1].y = e2[0].y), e2.length > 1) {
    let n3 = Math[r2(218)](e2[1].x, e2[1].y) - t2, i3 = Math[r2(214)](n3), a2 = Math.sin(n3);
    for (let t3 of e2) {
      let e3 = t3.x, n4 = t3.y;
      t3.x = i3 * e3 - a2 * n4, t3.y = a2 * e3 + i3 * n4;
    }
  }
  if (e2.length > 2) {
    let n3 = Math[r2(218)](e2[2].x, e2[2].y) - t2;
    for (; n3 < 0; ) n3 += 2 * Math.PI;
    for (; n3 > 2 * Math.PI; ) n3 -= 2 * Math.PI;
    if (n3 > Math.PI) {
      let t3 = e2[1].y / (1e-10 + e2[1].x);
      for (let n4 of e2) {
        var i2 = (n4.x + t3 * n4.y) / (1 + t3 * t3);
        n4.x = 2 * i2 - n4.x, n4.y = 2 * i2 * t3 - n4.y;
      }
    }
  }
}
function fe(e2) {
  let t2 = V;
  e2[t2(212)]((e3) => {
    e3.parent = e3;
  });
  function n2(e3) {
    return e3.parent !== e3 && (e3.parent = n2(e3.parent)), e3.parent;
  }
  function r2(e3, t3) {
    let r3 = n2(e3);
    r3.parent = n2(t3);
  }
  for (let n3 = 0; n3 < e2.length; ++n3) for (let i3 = n3 + 1; i3 < e2.length; ++i3) {
    let a2 = e2[n3][t2(201)] + e2[i3].radius;
    k(e2[n3], e2[i3]) + 1e-10 < a2 && r2(e2[i3], e2[n3]);
  }
  let i2 = /* @__PURE__ */ new Map();
  for (let r3 = 0; r3 < e2.length; ++r3) {
    let a2 = n2(e2[r3]).parent[t2(114)];
    i2.has(a2) || i2.set(a2, []), i2[t2(211)](a2).push(e2[r3]);
  }
  return e2.forEach((e3) => {
    delete e3.parent;
  }), Array.from(i2.values());
}
function W(e2) {
  let t2 = (t3) => ({ max: e2.reduce((e3, n2) => Math.max(e3, n2[t3] + n2.radius), -1 / 0), min: e2.reduce((e3, n2) => Math.min(e3, n2[t3] - n2.radius), 1 / 0) });
  return { xRange: t2(`x`), yRange: t2(`y`) };
}
function pe(e2, t2, n2) {
  let r2 = V;
  t2 ?? (t2 = Math.PI / 2);
  let i2 = ge(e2).map((e3) => Object.assign({}, e3)), a2 = fe(i2);
  for (let e3 of a2) {
    de(e3, t2, n2);
    let i3 = W(e3);
    e3.size = (i3.xRange.max - i3.xRange.min) * (i3.yRange[r2(131)] - i3.yRange.min), e3.bounds = i3;
  }
  a2.sort((e3, t3) => t3.size - e3.size), i2 = a2[0];
  let o2 = i2[r2(130)], s2 = (o2.xRange.max - o2.xRange.min) / 50;
  function c2(e3, t3, n3) {
    let a3 = r2;
    if (!e3) return;
    let c3 = e3.bounds, l3, u2;
    if (t3) l3 = o2.xRange.max - c3.xRange.min + s2;
    else {
      l3 = o2.xRange.max - c3.xRange.max;
      let e4 = (c3.xRange.max - c3.xRange.min) / 2 - (o2[a3(235)].max - o2.xRange.min) / 2;
      e4 < 0 && (l3 += e4);
    }
    if (n3) u2 = o2.yRange.max - c3.yRange.min + s2;
    else {
      u2 = o2[a3(199)].max - c3.yRange.max;
      let e4 = (c3.yRange.max - c3[a3(199)].min) / 2 - (o2.yRange[a3(131)] - o2.yRange.min) / 2;
      e4 < 0 && (u2 += e4);
    }
    for (let t4 of e3) t4.x += l3, t4.y += u2, i2.push(t4);
  }
  let l2 = 1;
  for (; l2 < a2.length; ) c2(a2[l2], true, false), c2(a2[l2 + 1], false, true), c2(a2[l2 + 2], true, true), l2 += 3, o2 = W(i2);
  return he(i2);
}
function me(e2, t2, n2, r2, i2) {
  let a2 = V, o2 = ge(e2);
  t2 -= 2 * r2, n2 -= 2 * r2;
  let { xRange: s2, yRange: c2 } = W(o2);
  if (s2[a2(131)] === s2.min || c2[a2(131)] === c2[a2(158)]) return console[a2(177)](`not scaling solution: zero size detected`), e2;
  let l2, u2;
  if (i2) {
    let e3 = Math[a2(265)](i2 / Math.PI) * 2;
    l2 = t2 / e3, u2 = n2 / e3;
  } else l2 = t2 / (s2.max - s2.min), u2 = n2 / (c2.max - c2.min);
  let d2 = Math.min(u2, l2), f2 = (t2 - (s2.max - s2.min) * d2) / 2, p2 = (n2 - (c2.max - c2.min) * d2) / 2;
  return he(o2.map((e3) => ({ radius: d2 * e3.radius, x: r2 + f2 + (e3.x - s2.min) * d2, y: r2 + p2 + (e3.y - c2[a2(158)]) * d2, setid: e3.setid })));
}
function he(e2) {
  let t2 = {};
  for (let n2 of e2) t2[n2.setid] = n2;
  return t2;
}
function ge(e2) {
  return Object.keys(e2).map((t2) => Object.assign(e2[t2], { setid: t2 }));
}
function _e(e2 = {}) {
  let t2 = V, n2 = false, r2 = 600, i2 = 350, a2 = 15, o2 = 1e3, s2 = Math.PI / 2, c2 = true, l2 = null, u2 = true, d2 = true, f2 = null, p2 = null, m2 = false, h2 = null, g2 = e2 && e2[t2(181)] ? e2.symmetricalTextCentre : false, _2 = {}, v2 = e2 && e2.colourScheme ? e2.colourScheme : e2 && e2[t2(220)] ? e2.colorScheme : [`#1f77b4`, t2(209), `#2ca02c`, `#d62728`, `#9467bd`, `#8c564b`, `#e377c2`, t2(241), `#bcbd22`, `#17becf`], y2 = 0, b2 = function(e3) {
    let n3 = t2;
    if (e3 in _2) return _2[e3];
    var r3 = _2[e3] = v2[y2];
    return y2 += 1, y2 >= v2[n3(249)] && (y2 = 0), r3;
  }, x2 = ne, S2 = U;
  function C2(_3) {
    let v3 = t2, y3 = _3.datum(), C3 = /* @__PURE__ */ new Set();
    y3.forEach((e3) => {
      let t3 = V;
      e3.size == 0 && e3.sets.length == 1 && C3[t3(111)](e3.sets[0]);
    }), y3 = y3.filter((e3) => !e3.sets.some((e4) => C3.has(e4)));
    let w2 = {}, T2 = {};
    if (y3[v3(249)] > 0) {
      let e3 = x2(y3, { lossFunction: S2, distinct: m2 });
      c2 && (e3 = pe(e3, s2, p2)), w2 = me(e3, r2, i2, a2, l2), T2 = be(w2, y3, g2);
    }
    let E2 = {};
    y3.forEach((e3) => {
      let t3 = v3;
      e3.label && (E2[e3[t3(252)]] = e3.label);
    });
    function D2(e3) {
      let t3 = v3;
      if (e3.sets in E2) return E2[e3.sets];
      if (e3[t3(252)].length == 1) return `` + e3.sets[0];
    }
    _3.selectAll(`svg`).data([w2]).enter().append(`svg`);
    let O2 = _3[v3(112)](`svg`);
    n2 ? O2.attr(`viewBox`, `0 0 ` + r2 + ` ` + i2) : O2.attr(`width`, r2).attr(v3(184), i2);
    let k2 = {}, A2 = false;
    O2.selectAll(v3(223)).each(function(e3) {
      let t3 = this.getAttribute(`d`);
      e3.sets.length == 1 && t3 && !m2 && (A2 = true, k2[e3.sets[0]] = Se(t3));
    });
    function j2(e3) {
      let t3 = v3;
      return (n3) => Te(e3[t3(252)].map((e4) => {
        let t4 = k2[e4], a3 = w2[e4];
        return t4 || (t4 = { x: r2 / 2, y: i2 / 2, radius: 1 }), a3 || (a3 = { x: r2 / 2, y: i2 / 2, radius: 1 }), { x: t4.x * (1 - n3) + a3.x * n3, y: t4.y * (1 - n3) + a3.y * n3, radius: t4.radius * (1 - n3) + a3.radius * n3 };
      }), h2);
    }
    let M2 = O2.selectAll(`.venn-area`).data(y3, (e3) => e3[v3(252)]), N2 = M2.enter()[v3(154)](`g`).attr(`class`, (e3) => v3(216) + (e3.sets.length == 1 ? `circle` : `intersection`) + (e3.colour || e3.color ? ` venn-coloured` : ``)).attr(v3(262), (e3) => e3.sets.join(`_`)), P2 = N2.append(`path`), F2 = N2[v3(154)](`text`).attr(`class`, v3(139)).text((e3) => D2(e3)).attr(`text-anchor`, `middle`).attr(`dy`, `.35em`).attr(`x`, r2 / 2).attr(`y`, i2 / 2);
    d2 && (P2.style(v3(103), `0`).filter((e3) => e3.sets.length == 1)[v3(210)](`fill`, (e3) => e3[v3(256)] ? e3.colour : e3[v3(119)] ? e3.color : b2(e3.sets)).style(`fill-opacity`, `.25`), F2.style(`fill`, (t3) => t3.colour || t3.color ? `#FFF` : e2.textFill ? e2.textFill : t3.sets.length == 1 ? b2(t3.sets) : `#444`));
    function I2(e3) {
      let t3 = v3;
      return typeof e3[t3(141)] == `function` ? e3.transition(`venn`)[t3(145)](o2) : e3;
    }
    let L2 = _3;
    A2 && typeof L2.transition == `function` ? (L2 = I2(_3), L2.selectAll(`path`)[v3(173)](`d`, j2)) : L2.selectAll(`path`).attr(`d`, (e3) => Te(e3.sets.map((e4) => w2[e4])), h2);
    let R2 = L2.selectAll(`text`).filter((e3) => e3.sets in T2).text((e3) => D2(e3)).attr(`x`, (e3) => Math.floor(T2[e3.sets].x)).attr(`y`, (e3) => Math.floor(T2[e3.sets].y));
    u2 && (A2 ? `on` in R2 ? R2.on(`end`, G(w2, D2)) : R2.each(v3(264), G(w2, D2)) : R2.each(G(w2, D2)));
    let z2 = I2(M2.exit()).remove();
    typeof M2.transition == v3(227) && z2.selectAll(`path`).attrTween(`d`, j2);
    let B2 = z2[v3(176)](v3(151)).attr(`x`, r2 / 2).attr(`y`, i2 / 2);
    return f2 !== null && (F2.style(`font-size`, `0px`), R2.style(v3(229), f2), B2.style(`font-size`, v3(121))), { circles: w2, textCentres: T2, nodes: M2, enter: N2, update: L2, exit: z2 };
  }
  return C2.wrap = function(e3) {
    let n3 = t2;
    return arguments[n3(249)] ? (u2 = e3, C2) : u2;
  }, C2.useViewBox = function() {
    return n2 = true, C2;
  }, C2[t2(113)] = function(e3) {
    return arguments.length ? (r2 = e3, C2) : r2;
  }, C2.height = function(e3) {
    return arguments.length ? (i2 = e3, C2) : i2;
  }, C2.padding = function(e3) {
    return arguments.length ? (a2 = e3, C2) : a2;
  }, C2.distinct = function(e3) {
    return arguments.length ? (m2 = e3, C2) : m2;
  }, C2.colours = function(e3) {
    return arguments.length ? (b2 = e3, C2) : b2;
  }, C2.colors = function(e3) {
    let n3 = t2;
    return arguments[n3(249)] ? (b2 = e3, C2) : b2;
  }, C2.fontSize = function(e3) {
    return arguments.length ? (f2 = e3, C2) : f2;
  }, C2.round = function(e3) {
    return arguments.length ? (h2 = e3, C2) : h2;
  }, C2.duration = function(e3) {
    return arguments.length ? (o2 = e3, C2) : o2;
  }, C2.layoutFunction = function(e3) {
    let n3 = t2;
    return arguments[n3(249)] ? (x2 = e3, C2) : x2;
  }, C2[t2(206)] = function(e3) {
    return arguments.length ? (c2 = e3, C2) : c2;
  }, C2.scaleToFit = function(e3) {
    return arguments.length ? (l2 = e3, C2) : l2;
  }, C2.styled = function(e3) {
    return arguments.length ? (d2 = e3, C2) : d2;
  }, C2.orientation = function(e3) {
    return arguments.length ? (s2 = e3, C2) : s2;
  }, C2.orientationOrder = function(e3) {
    let n3 = t2;
    return arguments[n3(249)] ? (p2 = e3, C2) : p2;
  }, C2.lossFunction = function(e3) {
    return arguments.length ? (S2 = e3 === `default` ? U : e3 === `logRatio` ? ue : e3, C2) : S2;
  }, C2;
}
function G(e2, t2) {
  return function(n2) {
    let r2 = V, i2 = this, a2 = e2[n2.sets[0]].radius || 50, o2 = t2(n2) || ``, s2 = o2.split(/\s+/).reverse(), c2 = (o2[r2(249)] + s2[r2(249)]) / 3, l2 = s2[r2(238)](), u2 = [l2], d2 = 0, f2 = 1.1;
    i2.textContent = null;
    let p2 = [];
    function m2(e3) {
      let t3 = i2[r2(254)].createElementNS(i2.namespaceURI, `tspan`);
      return t3.textContent = e3, p2.push(t3), i2.append(t3), t3;
    }
    let h2 = m2(l2);
    for (; l2 = s2.pop(), l2; ) {
      u2.push(l2);
      let e3 = u2.join(` `);
      h2.textContent = e3, e3.length > c2 && h2.getComputedTextLength() > a2 && (u2[r2(238)](), h2.textContent = u2.join(` `), u2 = [l2], h2 = m2(l2), d2++);
    }
    let g2 = 0.35 - d2 * f2 / 2, _2 = i2.getAttribute(`x`), v2 = i2.getAttribute(`y`);
    p2.forEach((e3, t3) => {
      let n3 = r2;
      e3.setAttribute(`x`, _2), e3[n3(175)](`y`, v2), e3[n3(175)](`dy`, g2 + t3 * f2 + `em`);
    });
  };
}
function K(e2, t2, n2) {
  let r2 = V, i2 = t2[0].radius - k(t2[0], e2);
  for (let n3 = 1; n3 < t2[r2(249)]; ++n3) {
    let r3 = t2[n3].radius - k(t2[n3], e2);
    r3 <= i2 && (i2 = r3);
  }
  for (let t3 = 0; t3 < n2.length; ++t3) {
    let r3 = k(n2[t3], e2) - n2[t3].radius;
    r3 <= i2 && (i2 = r3);
  }
  return i2;
}
function ve(e2, t2, n2) {
  let r2 = V, i2 = [];
  for (let t3 of e2) i2.push({ x: t3.x, y: t3.y }), i2[r2(207)]({ x: t3.x + t3[r2(201)] / 2, y: t3.y }), i2.push({ x: t3.x - t3.radius / 2, y: t3.y }), i2.push({ x: t3.x, y: t3.y + t3.radius / 2 }), i2.push({ x: t3.x, y: t3.y - t3.radius / 2 });
  let a2 = i2[0], o2 = K(i2[0], e2, t2);
  for (let n3 = 1; n3 < i2.length; ++n3) {
    let r3 = K(i2[n3], e2, t2);
    r3 >= o2 && (a2 = i2[n3], o2 = r3);
  }
  let s2 = B((n3) => -1 * K({ x: n3[0], y: n3[1] }, e2, t2), [a2.x, a2.y], { maxIterations: 500, minErrorDelta: 1e-10 }).x, c2 = { x: n2 ? 0 : s2[0], y: s2[1] }, l2 = true;
  for (let t3 of e2) if (k(c2, t3) > t3.radius) {
    l2 = false;
    break;
  }
  for (let e3 of t2) if (k(c2, e3) < e3[r2(201)]) {
    l2 = false;
    break;
  }
  if (l2) return c2;
  if (e2.length == 1) return { x: e2[0].x, y: e2[0].y };
  let u2 = {};
  return T(e2, u2), u2.arcs.length === 0 ? { x: 0, y: -1e3, disjoint: true } : u2.arcs.length == 1 ? { x: u2.arcs[0].circle.x, y: u2.arcs[0].circle.y } : t2.length ? ve(e2, []) : M(u2.arcs.map((e3) => e3.p1));
}
function ye(e2) {
  let t2 = V, n2 = {}, r2 = Object.keys(e2);
  for (let e3 of r2) n2[e3] = [];
  for (let i2 = 0; i2 < r2.length; i2++) {
    let a2 = r2[i2], o2 = e2[a2];
    for (let s2 = i2 + 1; s2 < r2.length; ++s2) {
      let i3 = r2[s2], c2 = e2[i3], l2 = k(o2, c2);
      l2 + c2.radius <= o2.radius + 1e-10 ? n2[i3].push(a2) : l2 + o2.radius <= c2[t2(201)] + 1e-10 && n2[a2].push(i3);
    }
  }
  return n2;
}
function be(e2, t2, n2) {
  let r2 = V, i2 = {}, a2 = ye(e2);
  for (let o2 = 0; o2 < t2.length; ++o2) {
    let s2 = t2[o2][r2(252)], c2 = {}, l2 = {};
    for (let e3 = 0; e3 < s2.length; ++e3) {
      c2[s2[e3]] = true;
      let t3 = a2[s2[e3]];
      for (let e4 = 0; e4 < t3.length; ++e4) l2[t3[e4]] = true;
    }
    let u2 = [], d2 = [];
    for (let t3 in e2) t3 in c2 ? u2[r2(207)](e2[t3]) : t3 in l2 || d2[r2(207)](e2[t3]);
    let f2 = ve(u2, d2, n2);
    i2[s2] = f2, f2.disjoint && t2[o2].size > 0 && console[r2(177)](`WARNING: area ` + s2 + ` not represented on screen`);
  }
  return i2;
}
function xe(e2, t2, n2) {
  let r2 = V, i2 = [];
  return i2.push(`
M`, e2, t2), i2[r2(207)](`
m`, -n2, 0), i2.push(`
a`, n2, n2, 0, 1, 0, n2 * 2, 0), i2[r2(207)](`
a`, n2, n2, 0, 1, 0, -n2 * 2, 0), i2.join(` `);
}
function Se(e2) {
  let t2 = V, n2 = e2.split(` `);
  return { x: Number.parseFloat(n2[1]), y: Number[t2(169)](n2[2]), radius: -Number[t2(169)](n2[4]) };
}
function Ce(e2) {
  let t2 = V;
  if (e2.length === 0) return [];
  let n2 = {};
  return T(e2, n2), n2[t2(116)];
}
function we(e2, t2) {
  let n2 = V;
  if (e2.length === 0) return `M 0 0`;
  let r2 = 10 ** (t2 || 0), i2 = t2 == null ? (e3) => e3 : (e3) => Math.round(e3 * r2) / r2;
  if (e2.length == 1) {
    let t3 = e2[0][n2(208)];
    return xe(i2(t3.x), i2(t3.y), i2(t3.radius));
  }
  let a2 = [`
M`, i2(e2[0].p2.x), i2(e2[0].p2.y)];
  for (let t3 of e2) {
    let e3 = i2(t3[n2(208)].radius);
    a2.push(`
A`, e3, e3, 0, +!!t3[n2(138)], +!!t3.sweep, i2(t3.p1.x), i2(t3.p1.y));
  }
  return a2.join(` `);
}
function Te(e2, t2) {
  return we(Ce(e2), t2);
}
function Ee(e2, t2 = {}) {
  let n2 = V, { lossFunction: r2, layoutFunction: i2 = ne, normalize: a2 = true, orientation: o2 = Math.PI / 2, orientationOrder: s2, width: c2 = 600, height: l2 = 350, padding: u2 = 15, scaleToFit: d2 = false, symmetricalTextCentre: f2 = false, distinct: p2, round: m2 = 2 } = t2, h2 = i2(e2, { lossFunction: r2 === `default` || !r2 ? U : r2 === n2(146) ? ue : r2, distinct: p2 });
  a2 && (h2 = pe(h2, o2, s2));
  let g2 = me(h2, c2, l2, u2, d2), _2 = be(g2, e2, f2), v2 = new Map(Object.keys(g2).map((e3) => [e3, { set: e3, x: g2[e3].x, y: g2[e3].y, radius: g2[e3].radius }])), y2 = e2.map((e3) => {
    let t3 = e3.sets.map((e4) => v2.get(e4)), n3 = Ce(t3);
    return { circles: t3, arcs: n3, path: we(n3, m2), area: e3, has: new Set(e3.sets) };
  });
  function b2(e3) {
    let t3 = ``;
    for (let n3 of y2) n3.has.size > e3.length && e3.every((e4) => n3.has.has(e4)) && (t3 += ` ` + n3.path);
    return t3;
  }
  return y2.map(({ circles: e3, arcs: t3, path: r3, area: i3 }) => ({ data: i3, text: _2[i3[n2(252)]], circles: e3, arcs: t3, path: r3, distinctPath: r3 + b2(i3.sets) }));
}
var q = (function() {
  let e2 = V;
  var t2 = r(function(e3, t3, n3, r2) {
    let i3 = V;
    for (n3 || (n3 = {}), r2 = e3[i3(249)]; r2--; n3[e3[r2]] = t3) ;
    return n3;
  }, `o`), n2 = [5, 8], i2 = [7, 8, 11, 12, 17, 19, 22, 24], a2 = [1, 17], o2 = [1, 18], s2 = [7, 8, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24, 27], c2 = [1, 31], l2 = [1, 39], u2 = [7, 8, 11, 12, 17, 19, 22, 24, 27], d2 = [1, 57], f2 = [1, 56], p2 = [1, 58], m2 = [1, 59], h2 = [1, 60], g2 = [7, 8, 11, 12, 16, 17, 19, 20, 22, 24, 27, 31, 32, 33], _2 = { trace: r(function() {
  }, `trace`), yy: {}, symbols_: { error: 2, start: 3, optNewlines: 4, VENN: 5, document: 6, EOF: 7, NEWLINE: 8, line: 9, statement: 10, TITLE: 11, SET: 12, identifier: 13, BRACKET_LABEL: 14, COLON: 15, NUMERIC: 16, UNION: 17, identifierList: 18, TEXT: 19, IDENTIFIER: 20, STRING: 21, INDENT_TEXT: 22, indentedTextTail: 23, STYLE: 24, stylesOpt: 25, styleField: 26, COMMA: 27, styleValue: 28, valueTokens: 29, valueToken: 30, HEXCOLOR: 31, RGBCOLOR: 32, RGBACOLOR: 33, $accept: 0, $end: 1 }, terminals_: { 2: `error`, 5: `VENN`, 7: `EOF`, 8: `NEWLINE`, 11: `TITLE`, 12: `SET`, 14: e2(257), 15: `COLON`, 16: `NUMERIC`, 17: `UNION`, 19: `TEXT`, 20: `IDENTIFIER`, 21: `STRING`, 22: `INDENT_TEXT`, 24: `STYLE`, 27: `COMMA`, 31: `HEXCOLOR`, 32: `RGBCOLOR`, 33: `RGBACOLOR` }, productions_: [0, [3, 4], [4, 0], [4, 2], [6, 0], [6, 2], [9, 1], [9, 1], [10, 1], [10, 2], [10, 3], [10, 4], [10, 5], [10, 2], [10, 3], [10, 4], [10, 5], [10, 3], [10, 3], [10, 3], [10, 4], [10, 4], [10, 2], [10, 3], [23, 1], [23, 1], [23, 1], [23, 2], [23, 2], [25, 1], [25, 3], [26, 3], [28, 1], [28, 1], [29, 1], [29, 2], [30, 1], [30, 1], [30, 1], [30, 1], [30, 1], [18, 1], [18, 3], [13, 1], [13, 1]], performAction: r(function(t3, n3, r2, i3, a3, o3, s3) {
    let c3 = e2;
    var l3 = o3.length - 1;
    switch (a3) {
      case 1:
        return o3[l3 - 1];
      case 2:
      case 3:
      case 4:
        this.$ = [];
        break;
      case 5:
        o3[l3 - 1].push(o3[l3]), this.$ = o3[l3 - 1];
        break;
      case 6:
        this.$ = [];
        break;
      case 7:
      case 22:
      case 32:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
        this.$ = o3[l3];
        break;
      case 8:
        i3[c3(132)](o3[l3].substr(6)), this.$ = o3[l3].substr(6);
        break;
      case 9:
        i3.addSubsetData([o3[l3]], void 0, void 0), i3.setIndentMode && i3.setIndentMode(true);
        break;
      case 10:
        i3.addSubsetData([o3[l3 - 1]], o3[l3], void 0), i3.setIndentMode && i3.setIndentMode(true);
        break;
      case 11:
        i3.addSubsetData([o3[l3 - 2]], void 0, parseFloat(o3[l3])), i3.setIndentMode && i3.setIndentMode(true);
        break;
      case 12:
        i3.addSubsetData([o3[l3 - 3]], o3[l3 - 2], parseFloat(o3[l3])), i3.setIndentMode && i3.setIndentMode(true);
        break;
      case 13:
        if (o3[l3].length < 2) throw Error(`union requires multiple identifiers`);
        i3.validateUnionIdentifiers && i3.validateUnionIdentifiers(o3[l3]), i3.addSubsetData(o3[l3], void 0, void 0), i3[c3(263)] && i3.setIndentMode(true);
        break;
      case 14:
        if (o3[l3 - 1][c3(249)] < 2) throw Error(`union requires multiple identifiers`);
        i3.validateUnionIdentifiers && i3.validateUnionIdentifiers(o3[l3 - 1]), i3.addSubsetData(o3[l3 - 1], o3[l3], void 0), i3.setIndentMode && i3[c3(263)](true);
        break;
      case 15:
        if (o3[l3 - 2].length < 2) throw Error(`union requires multiple identifiers`);
        i3.validateUnionIdentifiers && i3[c3(183)](o3[l3 - 2]), i3.addSubsetData(o3[l3 - 2], void 0, parseFloat(o3[l3])), i3.setIndentMode && i3.setIndentMode(true);
        break;
      case 16:
        if (o3[l3 - 3].length < 2) throw Error(`union requires multiple identifiers`);
        i3.validateUnionIdentifiers && i3.validateUnionIdentifiers(o3[l3 - 3]), i3.addSubsetData(o3[l3 - 3], o3[l3 - 2], parseFloat(o3[l3])), i3.setIndentMode && i3.setIndentMode(true);
        break;
      case 17:
      case 18:
      case 19:
        i3.addTextData(o3[l3 - 1], o3[l3], void 0);
        break;
      case 20:
      case 21:
        i3.addTextData(o3[l3 - 2], o3[l3 - 1], o3[l3]);
        break;
      case 23:
        i3[c3(122)](o3[l3 - 1], o3[l3]);
        break;
      case 24:
      case 25:
      case 26:
        var u3 = i3[c3(110)]();
        if (!u3) throw Error(c3(109));
        i3.addTextData(u3, o3[l3], void 0);
        break;
      case 27:
      case 28:
        var u3 = i3.getCurrentSets();
        if (!u3) throw Error(c3(109));
        i3[c3(125)](u3, o3[l3 - 1], o3[l3]);
        break;
      case 29:
      case 41:
        this.$ = [o3[l3]];
        break;
      case 30:
      case 42:
        this.$ = [...o3[l3 - 2], o3[l3]];
        break;
      case 31:
        this.$ = [o3[l3 - 2], o3[l3]];
        break;
      case 33:
        this.$ = o3[l3].join(` `);
        break;
      case 34:
        this.$ = [o3[l3]];
        break;
      case 35:
        o3[l3 - 1].push(o3[l3]), this.$ = o3[l3 - 1];
        break;
      case 43:
      case 44:
        this.$ = o3[l3];
        break;
    }
  }, `anonymous`), table: [t2(n2, [2, 2], { 3: 1, 4: 2 }), { 1: [3] }, { 5: [1, 3], 8: [1, 4] }, t2(i2, [2, 4], { 6: 5 }), t2(n2, [2, 3]), { 7: [1, 6], 8: [1, 8], 9: 7, 10: 9, 11: [1, 10], 12: [1, 11], 17: [1, 12], 19: [1, 13], 22: [1, 14], 24: [1, 15] }, { 1: [2, 1] }, t2(i2, [2, 5]), t2(i2, [2, 6]), t2(i2, [2, 7]), t2(i2, [2, 8]), { 13: 16, 20: a2, 21: o2 }, { 13: 20, 18: 19, 20: a2, 21: o2 }, { 13: 20, 18: 21, 20: a2, 21: o2 }, { 16: [1, 25], 20: [1, 23], 21: [1, 24], 23: 22 }, { 13: 20, 18: 26, 20: a2, 21: o2 }, t2(i2, [2, 9], { 14: [1, 27], 15: [1, 28] }), t2(s2, [2, 43]), t2(s2, [2, 44]), t2(i2, [2, 13], { 14: [1, 29], 15: [1, 30], 27: c2 }), t2(s2, [2, 41]), { 16: [1, 34], 20: [1, 32], 21: [1, 33], 27: c2 }, t2(i2, [2, 22]), t2(i2, [2, 24], { 14: [1, 35] }), t2(i2, [2, 25], { 14: [1, 36] }), t2(i2, [2, 26]), { 20: l2, 25: 37, 26: 38, 27: c2 }, t2(i2, [2, 10], { 15: [1, 40] }), { 16: [1, 41] }, t2(i2, [2, 14], { 15: [1, 42] }), { 16: [1, 43] }, { 13: 44, 20: a2, 21: o2 }, t2(i2, [2, 17], { 14: [1, 45] }), t2(i2, [2, 18], { 14: [1, 46] }), t2(i2, [2, 19]), t2(i2, [2, 27]), t2(i2, [2, 28]), t2(i2, [2, 23], { 27: [1, 47] }), t2(u2, [2, 29]), { 15: [1, 48] }, { 16: [1, 49] }, t2(i2, [2, 11]), { 16: [1, 50] }, t2(i2, [2, 15]), t2(s2, [2, 42]), t2(i2, [2, 20]), t2(i2, [2, 21]), { 20: l2, 26: 51 }, { 16: d2, 20: f2, 21: [1, 53], 28: 52, 29: 54, 30: 55, 31: p2, 32: m2, 33: h2 }, t2(i2, [2, 12]), t2(i2, [2, 16]), t2(u2, [2, 30]), t2(u2, [2, 31]), t2(u2, [2, 32]), t2(u2, [2, 33], { 30: 61, 16: d2, 20: f2, 31: p2, 32: m2, 33: h2 }), t2(g2, [2, 34]), t2(g2, [2, 36]), t2(g2, [2, 37]), t2(g2, [2, 38]), t2(g2, [2, 39]), t2(g2, [2, 40]), t2(g2, [2, 35])], defaultActions: { 6: [2, 1] }, parseError: r(function(t3, n3) {
    let r2 = e2;
    if (n3.recoverable) this.trace(t3);
    else {
      var i3 = Error(t3);
      throw i3[r2(194)] = n3, i3;
    }
  }, `parseError`), parse: r(function(t3) {
    let n3 = e2;
    var i3 = this, a3 = [0], o3 = [], s3 = [null], c3 = [], l3 = this.table, u3 = ``, d3 = 0, f3 = 0, p3 = 0, m3 = 2, h3 = 1, g3 = c3[n3(118)].call(arguments, 1), _3 = Object.create(this.lexer), v3 = { yy: {} };
    for (var y2 in this.yy) Object.prototype[n3(253)].call(this.yy, y2) && (v3.yy[y2] = this.yy[y2]);
    _3.setInput(t3, v3.yy), v3.yy.lexer = _3, v3.yy.parser = this, _3.yylloc === void 0 && (_3.yylloc = {});
    var b2 = _3[n3(167)];
    c3.push(b2);
    var x2 = _3.options && _3.options.ranges;
    typeof v3.yy.parseError == `function` ? this.parseError = v3.yy[n3(251)] : this[n3(251)] = Object.getPrototypeOf(this).parseError;
    function S2(e3) {
      let t4 = n3;
      a3[t4(249)] -= 2 * e3, s3.length -= e3, c3.length -= e3;
    }
    r(S2, `popStack`);
    function C2() {
      let e3 = n3;
      var t4 = o3.pop() || _3[e3(163)]() || h3;
      return typeof t4 != `number` && (t4 instanceof Array && (o3 = t4, t4 = o3.pop()), t4 = i3.symbols_[t4] || t4), t4;
    }
    r(C2, `lex`);
    for (var w2, T2, E2, D2, O2, k2 = {}, A2, j2, M2, N2; ; ) {
      if (E2 = a3[a3.length - 1], this.defaultActions[E2] ? D2 = this.defaultActions[E2] : (w2 ?? (w2 = C2()), D2 = l3[E2] && l3[E2][w2]), D2 === void 0 || !D2.length || !D2[0]) {
        var P2 = ``;
        for (A2 in N2 = [], l3[E2]) this.terminals_[A2] && A2 > m3 && N2.push(`'` + this.terminals_[A2] + `'`);
        P2 = _3[n3(144)] ? `Parse error on line ` + (d3 + 1) + `:
` + _3.showPosition() + `
Expecting ` + N2.join(`, `) + `, got '` + (this.terminals_[w2] || w2) + `'` : n3(189) + (d3 + 1) + `: Unexpected ` + (w2 == h3 ? `end of input` : `'` + (this.terminals_[w2] || w2) + `'`), this.parseError(P2, { text: _3.match, token: this.terminals_[w2] || w2, line: _3.yylineno, loc: b2, expected: N2 });
      }
      if (D2[0] instanceof Array && D2.length > 1) throw Error(`Parse Error: multiple actions possible at state: ` + E2 + `, token: ` + w2);
      switch (D2[0]) {
        case 1:
          a3.push(w2), s3.push(_3[n3(129)]), c3.push(_3[n3(167)]), a3.push(D2[1]), w2 = null, T2 ? (w2 = T2, T2 = null) : (f3 = _3[n3(247)], u3 = _3[n3(129)], d3 = _3.yylineno, b2 = _3.yylloc, p3 > 0 && p3--);
          break;
        case 2:
          if (j2 = this.productions_[D2[1]][1], k2.$ = s3[s3.length - j2], k2._$ = { first_line: c3[c3.length - (j2 || 1)].first_line, last_line: c3[c3[n3(249)] - 1].last_line, first_column: c3[c3[n3(249)] - (j2 || 1)].first_column, last_column: c3[c3.length - 1].last_column }, x2 && (k2._$.range = [c3[c3[n3(249)] - (j2 || 1)].range[0], c3[c3[n3(249)] - 1].range[1]]), O2 = this[n3(240)].apply(k2, [u3, f3, d3, v3.yy, D2[1], s3, c3][n3(187)](g3)), O2 !== void 0) return O2;
          j2 && (a3 = a3.slice(0, -1 * j2 * 2), s3 = s3.slice(0, -1 * j2), c3 = c3[n3(118)](0, -1 * j2)), a3.push(this.productions_[D2[1]][0]), s3[n3(207)](k2.$), c3[n3(207)](k2._$), M2 = l3[a3[a3.length - 2]][a3[a3[n3(249)] - 1]], a3.push(M2);
          break;
        case 3:
          return true;
      }
    }
    return true;
  }, `parse`) };
  _2[e2(152)] = (function() {
    let t3 = e2;
    return { EOF: 1, parseError: r(function(e3, t4) {
      let n3 = V;
      if (this.yy[n3(261)]) this.yy.parser.parseError(e3, t4);
      else throw Error(e3);
    }, `parseError`), setInput: r(function(e3, t4) {
      let n3 = V;
      return this.yy = t4 || this.yy || {}, this._input = e3, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = ``, this[n3(143)] = [`INITIAL`], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc[n3(171)] = [0, 0]), this.offset = 0, this;
    }, `setInput`), input: r(function() {
      let e3 = V;
      var t4 = this._input[0];
      return this.yytext += t4, this[e3(247)]++, this.offset++, this.match += t4, this.matched += t4, t4.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input[e3(118)](1), t4;
    }, t3(225)), unput: r(function(e3) {
      let n3 = t3;
      var r2 = e3[n3(249)], i3 = e3.split(/(?:\r\n?|\n)/g);
      this._input = e3 + this._input, this[n3(129)] = this.yytext[n3(259)](0, this[n3(129)].length - r2), this.offset -= r2;
      var a3 = this.match.split(/(?:\r\n?|\n)/g);
      this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i3.length - 1 && (this.yylineno -= i3.length - 1);
      var o3 = this.yylloc.range;
      return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: i3 ? (i3.length === a3[n3(249)] ? this.yylloc[n3(149)] : 0) + a3[a3.length - i3.length].length - i3[0][n3(249)] : this.yylloc.first_column - r2 }, this.options.ranges && (this.yylloc.range = [o3[0], o3[0] + this[n3(247)] - r2]), this.yyleng = this.yytext.length, this;
    }, `unput`), more: r(function() {
      return this._more = true, this;
    }, `more`), reject: r(function() {
      let e3 = t3;
      if (this.options.backtrack_lexer) this._backtrack = true;
      else return this.parseError(e3(244) + (this[e3(117)] + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), { text: ``, token: null, line: this[e3(117)] });
      return this;
    }, `reject`), less: r(function(e3) {
      let n3 = t3;
      this.unput(this.match[n3(118)](e3));
    }, t3(185)), pastInput: r(function() {
      let e3 = t3;
      var n3 = this.matched.substr(0, this.matched.length - this.match[e3(249)]);
      return (n3.length > 20 ? e3(231) : ``) + n3[e3(259)](-20).replace(/\n/g, ``);
    }, `pastInput`), upcomingInput: r(function() {
      let e3 = t3;
      var n3 = this[e3(148)];
      return n3.length < 20 && (n3 += this._input.substr(0, 20 - n3.length)), (n3.substr(0, 20) + (n3.length > 20 ? e3(231) : ``)).replace(/\n/g, ``);
    }, `upcomingInput`), showPosition: r(function() {
      let e3 = t3;
      var n3 = this.pastInput(), r2 = Array(n3[e3(249)] + 1).join(`-`);
      return n3 + this[e3(204)]() + `
` + r2 + `^`;
    }, `showPosition`), test_match: r(function(e3, n3) {
      let r2 = t3;
      var i3, a3, o3;
      if (this.options[r2(217)] && (o3 = { yylineno: this.yylineno, yylloc: { first_line: this.yylloc.first_line, last_line: this.last_line, first_column: this.yylloc[r2(149)], last_column: this.yylloc.last_column }, yytext: this.yytext, match: this[r2(148)], matches: this.matches, matched: this.matched, yyleng: this[r2(247)], offset: this.offset, _more: this._more, _input: this[r2(228)], yy: this.yy, conditionStack: this.conditionStack.slice(0), done: this[r2(239)] }, this.options.ranges && (o3.yylloc.range = this.yylloc.range.slice(0))), a3 = e3[0].match(/(?:\r\n?|\n).*/g), a3 && (this.yylineno += a3.length), this.yylloc = { first_line: this.yylloc[r2(202)], last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: a3 ? a3[a3[r2(249)] - 1][r2(249)] - a3[a3.length - 1].match(/\r?\n?/)[0].length : this.yylloc[r2(226)] + e3[0].length }, this[r2(129)] += e3[0], this[r2(148)] += e3[0], this[r2(213)] = e3, this[r2(247)] = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this[r2(234)] = false, this._input = this._input.slice(e3[0].length), this[r2(140)] += e3[0], i3 = this.performAction[r2(156)](this, this.yy, this, n3, this.conditionStack[this.conditionStack[r2(249)] - 1]), this.done && this[r2(228)] && (this.done = false), i3) return i3;
      if (this._backtrack) {
        for (var s3 in o3) this[s3] = o3[s3];
        return false;
      }
      return false;
    }, `test_match`), next: r(function() {
      let e3 = t3;
      if (this.done) return this[e3(260)];
      this._input || (this.done = true);
      var n3, r2, i3, a3;
      this._more || (this.yytext = ``, this.match = ``);
      for (var o3 = this._currentRules(), s3 = 0; s3 < o3.length; s3++) if (i3 = this[e3(228)].match(this.rules[o3[s3]]), i3 && (!r2 || i3[0].length > r2[0].length)) {
        if (r2 = i3, a3 = s3, this.options[e3(217)]) {
          if (n3 = this[e3(153)](i3, o3[s3]), n3 !== false) return n3;
          if (this._backtrack) {
            r2 = false;
            continue;
          } else return false;
        } else if (!this[e3(258)][e3(161)]) break;
      }
      return r2 ? (n3 = this[e3(153)](r2, o3[a3]), n3 === false ? false : n3) : this._input === `` ? this[e3(260)] : this[e3(251)](`Lexical error on line ` + (this.yylineno + 1) + e3(164) + this.showPosition(), { text: ``, token: null, line: this.yylineno });
    }, `next`), lex: r(function() {
      return this.next() || this.lex();
    }, `lex`), begin: r(function(e3) {
      let n3 = t3;
      this[n3(143)].push(e3);
    }, `begin`), popState: r(function() {
      let e3 = t3;
      return this.conditionStack.length - 1 > 0 ? this.conditionStack[e3(238)]() : this.conditionStack[0];
    }, `popState`), _currentRules: r(function() {
      let e3 = t3;
      return this.conditionStack.length && this.conditionStack[this[e3(143)][e3(249)] - 1] ? this.conditions[this[e3(143)][this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
    }, `_currentRules`), topState: r(function(e3) {
      let n3 = t3;
      return e3 = this.conditionStack.length - 1 - Math.abs(e3 || 0), e3 >= 0 ? this[n3(143)][e3] : n3(165);
    }, `topState`), pushState: r(function(e3) {
      let n3 = t3;
      this[n3(197)](e3);
    }, t3(168)), stateStackSize: r(function() {
      let e3 = t3;
      return this.conditionStack[e3(249)];
    }, `stateStackSize`), options: { "case-insensitive": true }, performAction: r(function(e3, n3, r2, i3) {
      let a3 = t3;
      switch (r2) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          if (e3.getIndentMode && e3.getIndentMode()) return e3[a3(219)] = true, this.begin(`INITIAL`), 22;
          break;
        case 4:
          break;
        case 5:
          e3.setIndentMode && e3.setIndentMode(false), this.begin(`INITIAL`), this.unput(n3.yytext);
          break;
        case 6:
          return this.begin(a3(205)), 8;
        case 7:
          break;
        case 8:
          break;
        case 9:
          return 7;
        case 10:
          return 11;
        case 11:
          return 5;
        case 12:
          return 12;
        case 13:
          return 17;
        case 14:
          if (e3.consumeIndentText) e3.consumeIndentText = false;
          else return 19;
          break;
        case 15:
          return 24;
        case 16:
          return n3.yytext = n3[a3(129)][a3(118)](2, -2), 14;
        case 17:
          return n3.yytext = n3.yytext.slice(1, -1).trim(), 14;
        case 18:
          return 16;
        case 19:
          return 31;
        case 20:
          return 33;
        case 21:
          return 32;
        case 22:
          return 20;
        case 23:
          return 21;
        case 24:
          return 27;
        case 25:
          return 15;
      }
    }, t3(222)), rules: [/^(?:%%(?!\{)[^\n]*)/i, /^(?:[^\}]%%[^\n]*)/i, /^(?:[ \t]+(?=[\n\r]))/i, /^(?:[ \t]+(?=text\b))/i, /^(?:[ \t]+)/i, /^(?:[^ \t\n\r])/i, /^(?:[\n\r]+)/i, /^(?:%%[^\n]*)/i, /^(?:[ \t]+)/i, /^(?:$)/i, /^(?:title\s[^#\n;]+)/i, /^(?:venn-beta\b)/i, /^(?:set\b)/i, /^(?:union\b)/i, /^(?:text\b)/i, /^(?:style\b)/i, /^(?:\["[^\"]*"\])/i, /^(?:\[[^\]\"]+\])/i, /^(?:[+-]?(\d+(\.\d+)?|\.\d+))/i, /^(?:#[0-9a-fA-F]{3,8})/i, /^(?:rgba\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i, /^(?:rgb\(\s*[0-9.]+\s*[,]\s*[0-9.]+\s*[,]\s*[0-9.]+\s*\))/i, /^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i, /^(?:"[^\"]*")/i, /^(?:,)/i, /^(?::)/i], conditions: { bol: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], inclusive: true }, INITIAL: { rules: [0, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], inclusive: true } } };
  })();
  function v2() {
    this.yy = {};
  }
  return r(v2, `Parser`), v2.prototype = _2, _2[e2(157)] = v2, new v2();
})();
q.parser = q;
var De = q, J = [], Y = [], X = [], Oe = /* @__PURE__ */ new Set(), ke, Ae = false, je = r((e2, t2, n2) => {
  let r2 = V, i2 = Q(e2)[r2(180)](), a2 = n2 ?? 10 / e2.length ** 2;
  ke = i2, i2.length === 1 && Oe.add(i2[0]), J.push({ sets: i2, size: a2, label: t2 ? Z(t2) : void 0 });
}, `addSubsetData`), Me = r(() => J, x(255)), Z = r((e2) => {
  let t2 = e2[x(250)]();
  return t2.length >= 2 && t2.startsWith(`"`) && t2.endsWith(`"`) ? t2.slice(1, -1) : t2;
}, x(192)), Ne = r((e2) => e2 && Z(e2), `normalizeStyleValue`), Pe = r((e2, t2, n2) => {
  let r2 = x, i2 = Z(t2);
  Y[r2(207)]({ sets: Q(e2).sort(), id: i2, label: n2 ? Z(n2) : void 0 });
}, `addTextData`), Fe = r((e2, t2) => {
  let n2 = Q(e2).sort(), r2 = {};
  for (let [e3, n3] of t2) r2[e3] = Ne(n3) ?? n3;
  X.push({ targets: n2, styles: r2 });
}, `addStyleData`), Ie = r(() => X, `getStyleData`), Q = r((e2) => e2.map((e3) => Z(e3)), `normalizeIdentifierList`), Le = r((e2) => {
  let t2 = x, n2 = Q(e2)[t2(134)]((e3) => !Oe[t2(233)](e3));
  if (n2.length > 0) throw Error(`unknown set identifier: ` + n2.join(`, `));
}, x(183)), Re = r(() => Y, `getTextData`), ze = r(() => ke, `getCurrentSets`), Be = r(() => Ae, `getIndentMode`), Ve = r((e2) => {
  Ae = e2;
}, `setIndentMode`), He = g.venn;
function Ue() {
  return v(He, _().venn);
}
r(Ue, `getConfig`);
var We = { getConfig: Ue, clear: r(() => {
  let e2 = x;
  a(), J.length = 0, Y[e2(249)] = 0, X.length = 0, Oe.clear(), ke = void 0, Ae = false;
}, `customClear`), setAccTitle: o, getAccTitle: s, setDiagramTitle: c, getDiagramTitle: d, getAccDescription: i, setAccDescription: f, addSubsetData: je, getSubsetData: Me, addTextData: Pe, addStyleData: Fe, validateUnionIdentifiers: Le, getTextData: Re, getStyleData: Ie, getCurrentSets: ze, getIndentMode: Be, setIndentMode: Ve }, Ge = r((e2) => x(198) + e2[x(123)] + `;
    font-family: ` + e2.fontFamily + `;
  }

  .venn-circle text {
    font-size: 48px;
    font-family: ` + e2.fontFamily + `;
  }

  .venn-intersection text {
    font-size: 48px;
    fill: ` + e2.vennSetTextColor + `;
    font-family: ` + e2.fontFamily + `;
  }

  .venn-text-node {
    font-family: ` + e2.fontFamily + `;
    color: ` + e2.vennSetTextColor + x(242), `getStyles`);
function Ke(t2) {
  let n2 = x, r2 = /* @__PURE__ */ new Map();
  for (let i2 of t2) {
    let t3 = i2.targets.join(`|`), a2 = r2.get(t3);
    a2 ? Object.assign(a2, i2[n2(243)]) : r2.set(t3, e({}, i2.styles));
  }
  return r2;
}
r(Ke, `buildStyleByKey`);
var qe = r((e2, t2, r2, i2) => {
  var _a, _b;
  let a2 = x, o2 = i2.db, s2 = (_a = o2.getConfig) == null ? void 0 : _a.call(o2), { themeVariables: c2, look: d2, handDrawnSeed: f2 } = _(), p2 = d2 === `handDrawn`, g2 = [c2.venn1, c2.venn2, c2.venn3, c2.venn4, c2.venn5, c2.venn6, c2.venn7, c2.venn8].filter(Boolean), v2 = (_b = o2[a2(172)]) == null ? void 0 : _b.call(o2), S2 = o2.getSubsetData(), w2 = o2.getTextData(), T2 = Ke(o2[a2(196)]()), E2 = (s2 == null ? void 0 : s2.width) ?? 800, D2 = (s2 == null ? void 0 : s2.height) ?? 450, O2 = E2 / 1600, k2 = v2 ? 48 * O2 : 0, A2 = c2.primaryTextColor ?? c2.textColor, j2 = y(t2);
  j2.attr(`viewBox`, `0 0 ` + E2 + ` ` + D2), v2 && j2[a2(154)](`text`).text(v2).attr(a2(230), a2(224)).attr(a2(229), 32 * O2 + `px`).attr(`text-anchor`, a2(193))[a2(178)](`dominant-baseline`, `middle`)[a2(178)](`x`, `50%`).attr(`y`, 32 * O2).style(`fill`, c2.vennTitleTextColor || c2.titleColor);
  let M2 = n(document.createElement(`div`)), N2 = _e().width(E2).height(D2 - k2);
  M2[a2(190)](S2).call(N2);
  let P2 = p2 ? b[a2(106)](M2.select(`svg`).node()) : void 0, F2 = Ee(S2, { width: E2, height: D2 - k2, padding: (s2 == null ? void 0 : s2.padding) ?? 15 }), I2 = /* @__PURE__ */ new Map();
  for (let e3 of F2) {
    let t3 = $([...e3[a2(221)].sets].sort());
    I2.set(t3, e3);
  }
  w2.length > 0 && Je(s2, I2, M2, w2, O2, T2);
  let L2 = h(c2.background || `#f4f4f4`);
  M2[a2(176)](`.venn-circle`).each(function(e3, t3) {
    let r3 = a2, i3 = n(this), o3 = $([...e3.sets][r3(180)]()), s3 = T2.get(o3), d3 = (s3 == null ? void 0 : s3.fill) || g2[t3 % g2.length] || c2.primaryColor;
    i3.classed(`venn-set-` + t3 % 8, true);
    let m2 = (s3 == null ? void 0 : s3[`fill-opacity`]) ?? 0.1, h2 = (s3 == null ? void 0 : s3.stroke) || d3, _2 = (s3 == null ? void 0 : s3[r3(136)]) || `` + 5 * O2;
    if (p2 && P2) {
      let e4 = I2.get(o3);
      if (e4 && e4.circles.length > 0) {
        var v3;
        let n2 = e4[r3(159)][0], a3 = P2.circle(n2.x, n2.y, n2.radius * 2, { roughness: 0.7, seed: f2, fill: C(d3, 0.7), fillStyle: `hachure`, fillWeight: 2, hachureGap: 8, hachureAngle: -41 + t3 * 60, stroke: h2, strokeWidth: parseFloat(String(_2)) });
        i3.select(`path`)[r3(174)](), (v3 = i3[r3(203)]()) == null || v3.insertBefore(a3, i3[r3(112)](`text`).node());
      }
    } else i3.select(`path`).style(`fill`, d3)[r3(210)](`fill-opacity`, m2).style(`stroke`, h2).style(`stroke-width`, _2).style(`stroke-opacity`, 0.95);
    let y2 = (s3 == null ? void 0 : s3.color) || (L2 ? l(d3, 30) : u(d3, 30));
    i3.select(`text`).style(`font-size`, 48 * O2 + `px`).style(r3(182), y2);
  }), p2 && P2 ? M2.selectAll(`.venn-intersection`).each(function(e3) {
    let t3 = a2, r3 = n(this), i3 = $([...e3.sets].sort()), o3 = T2.get(i3), s3 = o3 == null ? void 0 : o3.fill;
    if (s3) {
      let e4 = r3[t3(112)](`path`), n2 = e4.attr(`d`);
      if (n2) {
        var l2;
        let r4 = P2.path(n2, { roughness: 0.7, seed: f2, fill: C(s3, 0.3), fillStyle: `cross-hatch`, fillWeight: 2, hachureGap: 6, hachureAngle: 60, stroke: t3(127) }), i4 = e4.node();
        i4 == null || (l2 = i4.parentNode) == null || l2.insertBefore(r4, i4), e4[t3(174)]();
      }
    } else r3.select(`path`).style(t3(103), 0);
    r3.select(t3(151))[t3(210)](`font-size`, 48 * O2 + `px`).style(`fill`, (o3 == null ? void 0 : o3.color) ?? c2.vennSetTextColor ?? A2);
  }) : (M2.selectAll(a2(236))[a2(210)](`font-size`, 48 * O2 + `px`)[a2(210)](a2(182), (e3) => {
    var _a2;
    let t3 = a2, n2 = $([...e3.sets].sort());
    return ((_a2 = T2[t3(211)](n2)) == null ? void 0 : _a2.color) ?? c2.vennSetTextColor ?? A2;
  }), M2[a2(176)](`.venn-intersection path`).style(`fill-opacity`, (e3) => {
    var t3;
    let n2 = $([...e3.sets].sort());
    return (t3 = T2.get(n2)) != null && t3.fill ? 1 : 0;
  })[a2(210)](`fill`, (e3) => {
    var _a2;
    let t3 = $([...e3.sets].sort());
    return ((_a2 = T2.get(t3)) == null ? void 0 : _a2.fill) ?? `transparent`;
  }));
  let R2 = j2[a2(154)](`g`).attr(`transform`, a2(195) + k2 + `)`), z2 = M2.select(`svg`).node();
  if (z2 && `childNodes` in z2) for (let e3 of [...z2.childNodes]) {
    var B2;
    (B2 = R2[a2(203)]()) == null || B2.appendChild(e3);
  }
  m(j2, D2, E2, (s2 == null ? void 0 : s2.useMaxWidth) ?? true);
}, `draw`);
function $(e2) {
  return e2.join(`|`);
}
r($, x(248));
function Je(e2, t2, n2, r2, i2, a2) {
  var _a;
  let o2 = x, s2 = (e2 == null ? void 0 : e2[o2(124)]) ?? false, c2 = n2.select(`svg`).append(`g`).attr(`class`, `venn-text-nodes`), l2 = /* @__PURE__ */ new Map();
  for (let e3 of r2) {
    let t3 = $(e3.sets), n3 = l2.get(t3);
    n3 ? n3.push(e3) : l2.set(t3, [e3]);
  }
  for (let [e3, n3] of l2.entries()) {
    let r3 = t2.get(e3);
    if (!(r3 != null && r3.text)) continue;
    let l3 = r3.text.x, u2 = r3.text.y, d2 = Math.min(...r3.circles.map((e4) => e4.radius)), f2 = Math.min(...r3.circles[o2(120)]((e4) => e4.radius - Math.hypot(l3 - e4.x, u2 - e4.y))), p2 = Number.isFinite(f2) ? Math.max(0, f2) : 0;
    p2 === 0 && Number.isFinite(d2) && (p2 = d2 * 0.6);
    let m2 = c2.append(`g`).attr(`class`, `venn-text-area`).attr(`font-size`, 40 * i2 + `px`);
    s2 && m2.append(`circle`).attr(`class`, `venn-text-debug-circle`)[o2(178)](`cx`, l3)[o2(178)](`cy`, u2).attr(`r`, p2).attr(`fill`, o2(127)).attr(o2(150), `purple`).attr(o2(136), 1.5 * i2).attr(`stroke-dasharray`, 6 * i2 + ` ` + 4 * i2);
    let h2 = Math.max(80 * i2, p2 * 2 * 0.95), g2 = Math.max(60 * i2, p2 * 2 * 0.95), _2 = (r3.data.label && r3.data.label.length > 0 ? Math.min(32 * i2, p2 * 0.25) : 0) + (n3[o2(249)] <= 2 ? 30 * i2 : 0), v2 = l3 - h2 / 2, y2 = u2 - g2 / 2 + _2, b2 = Math[o2(131)](1, Math.ceil(Math.sqrt(n3.length))), x2 = Math.max(1, Math.ceil(n3.length / b2)), S2 = h2 / b2, C2 = g2 / x2;
    for (let [e4, t3] of n3.entries()) {
      let n4 = e4 % b2, r4 = Math.floor(e4 / b2), c3 = v2 + S2 * (n4 + 0.5), l4 = y2 + C2 * (r4 + 0.5);
      s2 && m2.append(`rect`).attr(`class`, `venn-text-debug-cell`).attr(`x`, v2 + S2 * n4)[o2(178)](`y`, y2 + C2 * r4).attr(`width`, S2).attr(`height`, C2).attr(`fill`, o2(127)).attr(`stroke`, `teal`)[o2(178)](`stroke-width`, 1 * i2).attr(`stroke-dasharray`, 4 * i2 + ` ` + 3 * i2);
      let u3 = S2 * 0.9, d3 = C2 * 0.9, f3 = m2.append(`foreignObject`).attr(`class`, `venn-text-node-fo`).attr(`width`, u3).attr(`height`, d3)[o2(178)](`x`, c3 - u3 / 2).attr(`y`, l4 - d3 / 2).attr(`overflow`, `visible`), p3 = (_a = a2.get(t3.id)) == null ? void 0 : _a.color, h3 = f3.append(`xhtml:span`).attr(`class`, `venn-text-node`).style(`display`, `flex`).style(`width`, `100%`).style(o2(184), o2(170)).style(`white-space`, o2(135)).style(`align-items`, `center`).style(`justify-content`, `center`).style(`text-align`, `center`).style(`overflow-wrap`, o2(135)).style(`word-break`, `normal`)[o2(151)](t3.label ?? t3.id);
      p3 && h3.style(`color`, p3);
    }
  }
}
r(Je, `renderTextNodes`);
var Ye = { parser: De, db: We, renderer: { draw: qe }, styles: Ge };
export {
  Ye as diagram
};
