var e = S;
(function(e6, t6) {
  for (var n2 = S, r2 = e6(); ; ) try {
    if (parseInt(n2(624)) / 1 + -parseInt(n2(554)) / 2 * (-parseInt(n2(502)) / 3) + -parseInt(n2(489)) / 4 * (parseInt(n2(525)) / 5) + -parseInt(n2(488)) / 6 * (parseInt(n2(634)) / 7) + -parseInt(n2(512)) / 8 * (-parseInt(n2(600)) / 9) + -parseInt(n2(645)) / 10 * (-parseInt(n2(615)) / 11) + -parseInt(n2(606)) / 12 * (-parseInt(n2(555)) / 13) === t6) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Jn, 931951);
var t = { value: () => {
} };
function n() {
  for (var e6 = S, t6 = 0, n2 = arguments[e6(546)], i2 = {}, a2; t6 < n2; ++t6) {
    if (!(a2 = arguments[t6] + ``) || a2 in i2 || /[\s.]/.test(a2)) throw Error(e6(543) + a2);
    i2[a2] = [];
  }
  return new r(i2);
}
function r(e6) {
  this._ = e6;
}
function i(e6, t6) {
  return e6.trim().split(/^|\s+/).map(function(e7) {
    var n2 = S, r2 = ``, i2 = e7.indexOf(`.`);
    if (i2 >= 0 && (r2 = e7[n2(556)](i2 + 1), e7 = e7.slice(0, i2)), e7 && !t6.hasOwnProperty(e7)) throw Error(n2(532) + e7);
    return { type: e7, name: r2 };
  });
}
r.prototype = n.prototype = { constructor: r, on: function(e6, t6) {
  var n2 = S, r2 = this._, s2 = i(e6 + ``, r2), c2, l2 = -1, u2 = s2.length;
  if (arguments[n2(546)] < 2) {
    for (; ++l2 < u2; ) if ((c2 = (e6 = s2[l2]).type) && (c2 = a(r2[c2], e6.name))) return c2;
    return;
  }
  if (t6 != null && typeof t6 != n2(575)) throw Error(`invalid callback: ` + t6);
  for (; ++l2 < u2; ) if (c2 = (e6 = s2[l2]).type) r2[c2] = o(r2[c2], e6.name, t6);
  else if (t6 == null) for (c2 in r2) r2[c2] = o(r2[c2], e6.name, null);
  return this;
}, copy: function() {
  var e6 = {}, t6 = this._;
  for (var n2 in t6) e6[n2] = t6[n2].slice();
  return new r(e6);
}, call: function(e6, t6) {
  var n2 = S;
  if ((a2 = arguments.length - 2) > 0) for (var r2 = Array(a2), i2 = 0, a2, o2; i2 < a2; ++i2) r2[i2] = arguments[i2 + 2];
  if (!this._.hasOwnProperty(e6)) throw Error(`unknown type: ` + e6);
  for (o2 = this._[e6], i2 = 0, a2 = o2.length; i2 < a2; ++i2) o2[i2][n2(569)][n2(595)](t6, r2);
}, apply: function(e6, t6, n2) {
  if (!this._.hasOwnProperty(e6)) throw Error(`unknown type: ` + e6);
  for (var r2 = this._[e6], i2 = 0, a2 = r2.length; i2 < a2; ++i2) r2[i2].value.apply(t6, n2);
} };
function a(e6, t6) {
  for (var n2 = S, r2 = 0, i2 = e6.length, a2; r2 < i2; ++r2) if ((a2 = e6[r2])[n2(559)] === t6) return a2.value;
}
function o(e6, n2, r2) {
  for (var i2 = S, a2 = 0, o2 = e6.length; a2 < o2; ++a2) if (e6[a2].name === n2) {
    e6[a2] = t, e6 = e6[i2(556)](0, a2).concat(e6.slice(a2 + 1));
    break;
  }
  return r2 != null && e6.push({ name: n2, value: r2 }), e6;
}
var s = { svg: `http://www.w3.org/2000/svg`, xhtml: `http://www.w3.org/1999/xhtml`, xlink: `http://www.w3.org/1999/xlink`, xml: `http://www.w3.org/XML/1998/namespace`, xmlns: `http://www.w3.org/2000/xmlns/` };
function c(e6) {
  var t6 = S, n2 = e6 += ``, r2 = n2[t6(504)](`:`);
  return r2 >= 0 && (n2 = e6.slice(0, r2)) !== t6(636) && (e6 = e6.slice(r2 + 1)), s.hasOwnProperty(n2) ? { space: s[n2], local: e6 } : e6;
}
function l(e6) {
  return function() {
    var t6 = S, n2 = this.ownerDocument, r2 = this.namespaceURI;
    return r2 === `http://www.w3.org/1999/xhtml` && n2.documentElement.namespaceURI === `http://www.w3.org/1999/xhtml` ? n2[t6(539)](e6) : n2[t6(567)](r2, e6);
  };
}
function u(e6) {
  return function() {
    var t6 = S;
    return this.ownerDocument.createElementNS(e6.space, e6[t6(508)]);
  };
}
function d(e6) {
  var t6 = c(e6);
  return (t6.local ? u : l)(t6);
}
function f() {
}
function p(e6) {
  return e6 == null ? f : function() {
    return this.querySelector(e6);
  };
}
function m(e6) {
  var t6 = S;
  typeof e6 != `function` && (e6 = p(e6));
  for (var n2 = this._groups, r2 = n2.length, i2 = Array(r2), a2 = 0; a2 < r2; ++a2) for (var o2 = n2[a2], s2 = o2.length, c2 = i2[a2] = Array(s2), l2, u2, d2 = 0; d2 < s2; ++d2) (l2 = o2[d2]) && (u2 = e6.call(l2, l2[t6(599)], d2, o2)) && (`__data__` in l2 && (u2[t6(599)] = l2[t6(599)]), c2[d2] = u2);
  return new w(i2, this._parents);
}
function h(e6) {
  return e6 == null ? [] : Array.isArray(e6) ? e6 : Array.from(e6);
}
function g() {
  return [];
}
function _(e6) {
  return e6 == null ? g : function() {
    var t6 = S;
    return this[t6(628)](e6);
  };
}
function v(e6) {
  return function() {
    return h(e6.apply(this, arguments));
  };
}
function y(e6) {
  var t6 = S;
  e6 = typeof e6 == `function` ? v(e6) : _(e6);
  for (var n2 = this[t6(582)], r2 = n2[t6(546)], i2 = [], a2 = [], o2 = 0; o2 < r2; ++o2) for (var s2 = n2[o2], c2 = s2[t6(546)], l2, u2 = 0; u2 < c2; ++u2) (l2 = s2[u2]) && (i2.push(e6.call(l2, l2.__data__, u2, s2)), a2.push(l2));
  return new w(i2, a2);
}
function b(e6) {
  return function() {
    return this.matches(e6);
  };
}
function x(e6) {
  return function(t6) {
    return t6.matches(e6);
  };
}
var ee = Array.prototype.find;
function te(e6) {
  return function() {
    return ee.call(this.children, e6);
  };
}
function ne() {
  var e6 = S;
  return this[e6(550)];
}
function re(e6) {
  return this.select(e6 == null ? ne : te(typeof e6 == `function` ? e6 : x(e6)));
}
var ie = Array[e(485)][e(649)];
function ae() {
  return Array.from(this.children);
}
function oe(e6) {
  return function() {
    return ie.call(this.children, e6);
  };
}
function se(t6) {
  var n2 = e;
  return this[n2(601)](t6 == null ? ae : oe(typeof t6 == `function` ? t6 : x(t6)));
}
function ce(t6) {
  var n2 = e;
  typeof t6 != `function` && (t6 = b(t6));
  for (var r2 = this._groups, i2 = r2[n2(546)], a2 = Array(i2), o2 = 0; o2 < i2; ++o2) for (var s2 = r2[o2], c2 = s2.length, l2 = a2[o2] = [], u2, d2 = 0; d2 < c2; ++d2) (u2 = s2[d2]) && t6.call(u2, u2.__data__, d2, s2) && l2.push(u2);
  return new w(a2, this._parents);
}
function le(e6) {
  return Array(e6.length);
}
function S(e6, t6) {
  return e6 -= 485, Jn()[e6];
}
function ue() {
  var t6 = e;
  return new w(this._enter || this[t6(582)].map(le), this._parents);
}
function de(t6, n2) {
  var r2 = e;
  this.ownerDocument = t6.ownerDocument, this.namespaceURI = t6[r2(530)], this[r2(528)] = null, this._parent = t6, this.__data__ = n2;
}
de.prototype = { constructor: de, appendChild: function(e6) {
  return this._parent.insertBefore(e6, this._next);
}, insertBefore: function(e6, t6) {
  return this._parent.insertBefore(e6, t6);
}, querySelector: function(e6) {
  return this._parent.querySelector(e6);
}, querySelectorAll: function(t6) {
  var n2 = e;
  return this._parent[n2(628)](t6);
} };
function fe(e6) {
  return function() {
    return e6;
  };
}
function pe(t6, n2, r2, i2, a2, o2) {
  for (var s2 = e, c2 = 0, l2, u2 = n2.length, d2 = o2.length; c2 < d2; ++c2) (l2 = n2[c2]) ? (l2[s2(599)] = o2[c2], i2[c2] = l2) : r2[c2] = new de(t6, o2[c2]);
  for (; c2 < u2; ++c2) (l2 = n2[c2]) && (a2[c2] = l2);
}
function me(t6, n2, r2, i2, a2, o2, s2) {
  var c2 = e, l2, u2, d2 = /* @__PURE__ */ new Map(), f2 = n2[c2(546)], p2 = o2[c2(546)], m2 = Array(f2), h2;
  for (l2 = 0; l2 < f2; ++l2) (u2 = n2[l2]) && (m2[l2] = h2 = s2[c2(629)](u2, u2[c2(599)], l2, n2) + ``, d2.has(h2) ? a2[l2] = u2 : d2[c2(641)](h2, u2));
  for (l2 = 0; l2 < p2; ++l2) h2 = s2.call(t6, o2[l2], l2, o2) + ``, (u2 = d2.get(h2)) ? (i2[l2] = u2, u2.__data__ = o2[l2], d2[c2(514)](h2)) : r2[l2] = new de(t6, o2[l2]);
  for (l2 = 0; l2 < f2; ++l2) (u2 = n2[l2]) && d2.get(m2[l2]) === u2 && (a2[l2] = u2);
}
function he(e6) {
  return e6.__data__;
}
function ge(t6, n2) {
  var r2 = e;
  if (!arguments[r2(546)]) return Array[r2(520)](this, he);
  var i2 = n2 ? me : pe, a2 = this[r2(538)], o2 = this._groups;
  typeof t6 != r2(575) && (t6 = fe(t6));
  for (var s2 = o2.length, c2 = Array(s2), l2 = Array(s2), u2 = Array(s2), d2 = 0; d2 < s2; ++d2) {
    var f2 = a2[d2], p2 = o2[d2], m2 = p2.length, h2 = _e(t6.call(f2, f2 && f2.__data__, d2, a2)), g2 = h2[r2(546)], _2 = l2[d2] = Array(g2), v2 = c2[d2] = Array(g2);
    i2(f2, p2, _2, v2, u2[d2] = Array(m2), h2, n2);
    for (var y2 = 0, b2 = 0, x2, ee2; y2 < g2; ++y2) if (x2 = _2[y2]) {
      for (y2 >= b2 && (b2 = y2 + 1); !(ee2 = v2[b2]) && ++b2 < g2; ) ;
      x2._next = ee2 || null;
    }
  }
  return c2 = new w(c2, a2), c2[r2(551)] = l2, c2._exit = u2, c2;
}
function _e(e6) {
  return typeof e6 == `object` && `length` in e6 ? e6 : Array.from(e6);
}
function ve() {
  return new w(this._exit || this._groups.map(le), this._parents);
}
function ye(t6, n2, r2) {
  var i2 = e, a2 = this.enter(), o2 = this, s2 = this[i2(620)]();
  return typeof t6 == `function` ? (a2 = t6(a2), a2 && (a2 = a2.selection())) : a2 = a2[i2(487)](t6 + ``), n2 != null && (o2 = n2(o2), o2 && (o2 = o2[i2(598)]())), r2 == null ? s2.remove() : r2(s2), a2 && o2 ? a2[i2(577)](o2)[i2(552)]() : o2;
}
function be(e6) {
  for (var t6 = e6.selection ? e6.selection() : e6, n2 = this._groups, r2 = t6._groups, i2 = n2.length, a2 = r2.length, o2 = Math.min(i2, a2), s2 = Array(i2), c2 = 0; c2 < o2; ++c2) for (var l2 = n2[c2], u2 = r2[c2], d2 = l2.length, f2 = s2[c2] = Array(d2), p2, m2 = 0; m2 < d2; ++m2) (p2 = l2[m2] || u2[m2]) && (f2[m2] = p2);
  for (; c2 < i2; ++c2) s2[c2] = n2[c2];
  return new w(s2, this._parents);
}
function xe() {
  for (var t6 = e, n2 = this._groups, r2 = -1, i2 = n2.length; ++r2 < i2; ) for (var a2 = n2[r2], o2 = a2[t6(546)] - 1, s2 = a2[o2], c2; --o2 >= 0; ) (c2 = a2[o2]) && (s2 && c2.compareDocumentPosition(s2) ^ 4 && s2.parentNode[t6(644)](c2, s2), s2 = c2);
  return this;
}
function Se(t6) {
  var n2 = e;
  t6 || (t6 = Ce);
  function r2(e6, n3) {
    return e6 && n3 ? t6(e6.__data__, n3.__data__) : !e6 - !n3;
  }
  for (var i2 = this._groups, a2 = i2.length, o2 = Array(a2), s2 = 0; s2 < a2; ++s2) {
    for (var c2 = i2[s2], l2 = c2.length, u2 = o2[s2] = Array(l2), d2, f2 = 0; f2 < l2; ++f2) (d2 = c2[f2]) && (u2[f2] = d2);
    u2.sort(r2);
  }
  return new w(o2, this[n2(538)]).order();
}
function Ce(e6, t6) {
  return e6 < t6 ? -1 : e6 > t6 ? 1 : e6 >= t6 ? 0 : NaN;
}
function we() {
  var e6 = arguments[0];
  return arguments[0] = this, e6.apply(null, arguments), this;
}
function Te() {
  return Array.from(this);
}
function Ee() {
  for (var e6 = this._groups, t6 = 0, n2 = e6.length; t6 < n2; ++t6) for (var r2 = e6[t6], i2 = 0, a2 = r2.length; i2 < a2; ++i2) {
    var o2 = r2[i2];
    if (o2) return o2;
  }
  return null;
}
function De() {
  let e6 = 0;
  for (let t6 of this) ++e6;
  return e6;
}
function Oe() {
  var t6 = e;
  return !this[t6(510)]();
}
function ke(t6) {
  for (var n2 = e, r2 = this._groups, i2 = 0, a2 = r2.length; i2 < a2; ++i2) for (var o2 = r2[i2], s2 = 0, c2 = o2[n2(546)], l2; s2 < c2; ++s2) (l2 = o2[s2]) && t6.call(l2, l2.__data__, s2, o2);
  return this;
}
function Ae(e6) {
  return function() {
    this.removeAttribute(e6);
  };
}
function je(e6) {
  return function() {
    var t6 = S;
    this[t6(570)](e6.space, e6.local);
  };
}
function Me(e6, t6) {
  return function() {
    this.setAttribute(e6, t6);
  };
}
function Ne(e6, t6) {
  return function() {
    var n2 = S;
    this[n2(544)](e6[n2(633)], e6.local, t6);
  };
}
function Pe(e6, t6) {
  return function() {
    var n2 = t6.apply(this, arguments);
    n2 == null ? this.removeAttribute(e6) : this.setAttribute(e6, n2);
  };
}
function Fe(e6, t6) {
  return function() {
    var n2 = S, r2 = t6.apply(this, arguments);
    r2 == null ? this.removeAttributeNS(e6.space, e6[n2(508)]) : this[n2(544)](e6.space, e6[n2(508)], r2);
  };
}
function Ie(t6, n2) {
  var r2 = e, i2 = c(t6);
  if (arguments.length < 2) {
    var a2 = this.node();
    return i2.local ? a2[r2(625)](i2[r2(633)], i2.local) : a2.getAttribute(i2);
  }
  return this.each((n2 == null ? i2.local ? je : Ae : typeof n2 == `function` ? i2.local ? Fe : Pe : i2.local ? Ne : Me)(i2, n2));
}
function Le(t6) {
  var n2 = e;
  return t6.ownerDocument && t6.ownerDocument[n2(534)] || t6.document && t6 || t6.defaultView;
}
function Re(e6) {
  return function() {
    this.style.removeProperty(e6);
  };
}
function ze(e6, t6, n2) {
  return function() {
    this.style.setProperty(e6, t6, n2);
  };
}
function Be(e6, t6, n2) {
  return function() {
    var r2 = S, i2 = t6.apply(this, arguments);
    i2 == null ? this.style[r2(604)](e6) : this.style.setProperty(e6, i2, n2);
  };
}
function Ve(e6, t6, n2) {
  return arguments.length > 1 ? this.each((t6 == null ? Re : typeof t6 == `function` ? Be : ze)(e6, t6, n2 ?? ``)) : C(this.node(), e6);
}
function C(t6, n2) {
  var r2 = e;
  return t6[r2(572)].getPropertyValue(n2) || Le(t6).getComputedStyle(t6, null)[r2(517)](n2);
}
function He(e6) {
  return function() {
    delete this[e6];
  };
}
function Ue(e6, t6) {
  return function() {
    this[e6] = t6;
  };
}
function We(e6, t6) {
  return function() {
    var n2 = t6[S(595)](this, arguments);
    n2 == null ? delete this[e6] : this[e6] = n2;
  };
}
function Ge(e6, t6) {
  return arguments.length > 1 ? this.each((t6 == null ? He : typeof t6 == `function` ? We : Ue)(e6, t6)) : this.node()[e6];
}
function Ke(t6) {
  var n2 = e;
  return t6.trim()[n2(588)](/^|\s+/);
}
function qe(e6) {
  return e6.classList || new Je(e6);
}
function Je(t6) {
  var n2 = e;
  this._node = t6, this._names = Ke(t6[n2(493)](`class`) || ``);
}
Je.prototype = { add: function(t6) {
  var n2 = e;
  this._names.indexOf(t6) < 0 && (this._names.push(t6), this._node[n2(607)](`class`, this._names.join(` `)));
}, remove: function(t6) {
  var n2 = e, r2 = this[n2(650)].indexOf(t6);
  r2 >= 0 && (this._names.splice(r2, 1), this._node.setAttribute(`class`, this._names.join(` `)));
}, contains: function(e6) {
  return this._names.indexOf(e6) >= 0;
} };
function Ye(e6, t6) {
  for (var n2 = qe(e6), r2 = -1, i2 = t6.length; ++r2 < i2; ) n2.add(t6[r2]);
}
function Xe(e6, t6) {
  for (var n2 = qe(e6), r2 = -1, i2 = t6.length; ++r2 < i2; ) n2.remove(t6[r2]);
}
function Ze(e6) {
  return function() {
    Ye(this, e6);
  };
}
function Qe(e6) {
  return function() {
    Xe(this, e6);
  };
}
function $e(e6, t6) {
  return function() {
    (t6[S(595)](this, arguments) ? Ye : Xe)(this, e6);
  };
}
function et(t6, n2) {
  var r2 = e, i2 = Ke(t6 + ``);
  if (arguments.length < 2) {
    for (var a2 = qe(this[r2(510)]()), o2 = -1, s2 = i2[r2(546)]; ++o2 < s2; ) if (!a2.contains(i2[o2])) return false;
    return true;
  }
  return this.each((typeof n2 == r2(575) ? $e : n2 ? Ze : Qe)(i2, n2));
}
function tt() {
  this.textContent = ``;
}
function nt(e6) {
  return function() {
    var t6 = S;
    this[t6(565)] = e6;
  };
}
function rt(e6) {
  return function() {
    var t6 = e6.apply(this, arguments);
    this.textContent = t6 ?? ``;
  };
}
function it(t6) {
  var n2 = e;
  return arguments.length ? this[n2(640)](t6 == null ? tt : (typeof t6 == `function` ? rt : nt)(t6)) : this[n2(510)]().textContent;
}
function at() {
  this.innerHTML = ``;
}
function ot(e6) {
  return function() {
    this.innerHTML = e6;
  };
}
function st(e6) {
  return function() {
    var t6 = e6[S(595)](this, arguments);
    this.innerHTML = t6 ?? ``;
  };
}
function ct(t6) {
  var n2 = e;
  return arguments[n2(546)] ? this.each(t6 == null ? at : (typeof t6 == `function` ? st : ot)(t6)) : this.node().innerHTML;
}
function lt() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ut() {
  return this.each(lt);
}
function dt() {
  var t6 = e;
  this.previousSibling && this[t6(541)].insertBefore(this, this.parentNode.firstChild);
}
function ft() {
  return this.each(dt);
}
function pt(t6) {
  var n2 = typeof t6 == e(575) ? t6 : d(t6);
  return this.select(function() {
    return this.appendChild(n2.apply(this, arguments));
  });
}
function mt() {
  return null;
}
function ht(t6, n2) {
  var r2 = e, i2 = typeof t6 == r2(575) ? t6 : d(t6), a2 = n2 == null ? mt : typeof n2 == `function` ? n2 : p(n2);
  return this[r2(540)](function() {
    return this.insertBefore(i2.apply(this, arguments), a2.apply(this, arguments) || null);
  });
}
function gt() {
  var e6 = this.parentNode;
  e6 && e6.removeChild(this);
}
function _t() {
  return this.each(gt);
}
function vt() {
  var t6 = e, n2 = this.cloneNode(false), r2 = this.parentNode;
  return r2 ? r2[t6(644)](n2, this.nextSibling) : n2;
}
function yt() {
  var t6 = e, n2 = this.cloneNode(true), r2 = this[t6(541)];
  return r2 ? r2.insertBefore(n2, this.nextSibling) : n2;
}
function bt(e6) {
  return this.select(e6 ? yt : vt);
}
function xt(t6) {
  var n2 = e;
  return arguments.length ? this.property(`__data__`, t6) : this.node()[n2(599)];
}
function St(e6) {
  return function(t6) {
    e6[S(629)](this, t6, this.__data__);
  };
}
function Ct(e6) {
  return e6.trim().split(/^|\s+/).map(function(e7) {
    var t6 = S, n2 = ``, r2 = e7.indexOf(`.`);
    return r2 >= 0 && (n2 = e7[t6(556)](r2 + 1), e7 = e7.slice(0, r2)), { type: e7, name: n2 };
  });
}
function wt(e6) {
  return function() {
    var t6 = S, n2 = this.__on;
    if (n2) {
      for (var r2 = 0, i2 = -1, a2 = n2.length, o2; r2 < a2; ++r2) o2 = n2[r2], (!e6.type || o2.type === e6.type) && o2.name === e6.name ? this.removeEventListener(o2.type, o2[t6(639)], o2.options) : n2[++i2] = o2;
      ++i2 ? n2.length = i2 : delete this.__on;
    }
  };
}
function Tt(e6, t6, n2) {
  return function() {
    var r2 = S, i2 = this.__on, a2, o2 = St(t6);
    if (i2) {
      for (var s2 = 0, c2 = i2.length; s2 < c2; ++s2) if ((a2 = i2[s2]).type === e6.type && a2.name === e6[r2(559)]) {
        this.removeEventListener(a2.type, a2.listener, a2.options), this.addEventListener(a2.type, a2[r2(639)] = o2, a2.options = n2), a2.value = t6;
        return;
      }
    }
    this.addEventListener(e6[r2(509)], o2, n2), a2 = { type: e6.type, name: e6.name, value: t6, listener: o2, options: n2 }, i2 ? i2.push(a2) : this.__on = [a2];
  };
}
function Et(t6, n2, r2) {
  var i2 = e, a2 = Ct(t6 + ``), o2, s2 = a2.length, c2;
  if (arguments.length < 2) {
    var l2 = this.node().__on;
    if (l2) {
      for (var u2 = 0, d2 = l2.length, f2; u2 < d2; ++u2) for (o2 = 0, f2 = l2[u2]; o2 < s2; ++o2) if ((c2 = a2[o2])[i2(509)] === f2[i2(509)] && c2[i2(559)] === f2.name) return f2.value;
    }
    return;
  }
  for (l2 = n2 ? Tt : wt, o2 = 0; o2 < s2; ++o2) this.each(l2(a2[o2], n2, r2));
  return this;
}
function Dt(t6, n2, r2) {
  var i2 = e, a2 = Le(t6), o2 = a2.CustomEvent;
  typeof o2 == i2(575) ? o2 = new o2(n2, r2) : (o2 = a2.document[i2(612)](i2(609)), r2 ? (o2.initEvent(n2, r2[i2(507)], r2.cancelable), o2.detail = r2[i2(602)]) : o2[i2(626)](n2, false, false)), t6.dispatchEvent(o2);
}
function Ot(e6, t6) {
  return function() {
    return Dt(this, e6, t6);
  };
}
function kt(e6, t6) {
  return function() {
    var n2 = S;
    return Dt(this, e6, t6[n2(595)](this, arguments));
  };
}
function At(e6, t6) {
  return this.each((typeof t6 == `function` ? kt : Ot)(e6, t6));
}
function* jt() {
  for (var e6 = this._groups, t6 = 0, n2 = e6.length; t6 < n2; ++t6) for (var r2 = e6[t6], i2 = 0, a2 = r2.length, o2; i2 < a2; ++i2) (o2 = r2[i2]) && (yield o2);
}
var Mt = [null];
function w(e6, t6) {
  this._groups = e6, this._parents = t6;
}
function T() {
  return new w([[document.documentElement]], Mt);
}
function Nt() {
  return this;
}
w.prototype = T.prototype = { constructor: w, select: m, selectAll: y, selectChild: re, selectChildren: se, filter: ce, data: ge, enter: ue, exit: ve, join: ye, merge: be, selection: Nt, order: xe, sort: Se, call: we, nodes: Te, node: Ee, size: De, empty: Oe, each: ke, attr: Ie, style: Ve, property: Ge, classed: et, text: it, html: ct, raise: ut, lower: ft, append: pt, insert: ht, remove: _t, clone: bt, datum: xt, on: Et, dispatch: At, [Symbol[e(548)]]: jt };
function Pt(t6) {
  var n2 = e;
  return typeof t6 == `string` ? new w([[document.querySelector(t6)]], [document[n2(490)]]) : new w([[t6]], Mt);
}
function E(e6, t6, n2) {
  e6.prototype = t6.prototype = n2, n2.constructor = e6;
}
function Ft(e6, t6) {
  var n2 = Object.create(e6.prototype);
  for (var r2 in t6) n2[r2] = t6[r2];
  return n2;
}
function D() {
}
var O = 0.7, It = 1 / O, k = `\\s*([+-]?\\d+)\\s*`, A = e(501), j = e(608), Lt = /^#([0-9a-f]{3,8})$/, Rt = RegExp(`^rgb\\(` + k + `,` + k + `,` + k + `\\)$`), zt = RegExp(`^rgb\\(` + j + `,` + j + `,` + j + `\\)$`), Bt = RegExp(`^rgba\\(` + k + `,` + k + `,` + k + `,` + A + `\\)$`), Vt = RegExp(`^rgba\\(` + j + `,` + j + `,` + j + `,` + A + `\\)$`), Ht = RegExp(`^hsl\\(` + A + `,` + j + `,` + j + `\\)$`), Ut = RegExp(`^hsla\\(` + A + `,` + j + `,` + j + `,` + A + e(497)), Wt = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
E(D, M, { copy(e6) {
  return Object.assign(new this.constructor(), this, e6);
}, displayable() {
  var t6 = e;
  return this[t6(592)]().displayable();
}, hex: Gt, formatHex: Gt, formatHex8: Kt, formatHsl: qt, formatRgb: Jt, toString: Jt });
function Gt() {
  var t6 = e;
  return this.rgb()[t6(610)]();
}
function Kt() {
  return this.rgb().formatHex8();
}
function qt() {
  return an(this).formatHsl();
}
function Jt() {
  return this.rgb().formatRgb();
}
function M(t6) {
  var n2 = e, r2, i2;
  return t6 = (t6 + ``).trim()[n2(591)](), (r2 = Lt[n2(614)](t6)) ? (i2 = r2[1].length, r2 = parseInt(r2[1], 16), i2 === 6 ? Yt(r2) : i2 === 3 ? new N(r2 >> 8 & 15 | r2 >> 4 & 240, r2 >> 4 & 15 | r2 & 240, (r2 & 15) << 4 | r2 & 15, 1) : i2 === 8 ? Xt(r2 >> 24 & 255, r2 >> 16 & 255, r2 >> 8 & 255, (r2 & 255) / 255) : i2 === 4 ? Xt(r2 >> 12 & 15 | r2 >> 8 & 240, r2 >> 8 & 15 | r2 >> 4 & 240, r2 >> 4 & 15 | r2 & 240, ((r2 & 15) << 4 | r2 & 15) / 255) : null) : (r2 = Rt.exec(t6)) ? new N(r2[1], r2[2], r2[3], 1) : (r2 = zt.exec(t6)) ? new N(r2[1] * 255 / 100, r2[2] * 255 / 100, r2[3] * 255 / 100, 1) : (r2 = Bt.exec(t6)) ? Xt(r2[1], r2[2], r2[3], r2[4]) : (r2 = Vt.exec(t6)) ? Xt(r2[1] * 255 / 100, r2[2] * 255 / 100, r2[3] * 255 / 100, r2[4]) : (r2 = Ht.exec(t6)) ? rn(r2[1], r2[2] / 100, r2[3] / 100, 1) : (r2 = Ut.exec(t6)) ? rn(r2[1], r2[2] / 100, r2[3] / 100, r2[4]) : Wt.hasOwnProperty(t6) ? Yt(Wt[t6]) : t6 === `transparent` ? new N(NaN, NaN, NaN, 0) : null;
}
function Yt(e6) {
  return new N(e6 >> 16 & 255, e6 >> 8 & 255, e6 & 255, 1);
}
function Xt(e6, t6, n2, r2) {
  return r2 <= 0 && (e6 = t6 = n2 = NaN), new N(e6, t6, n2, r2);
}
function Zt(e6) {
  return e6 instanceof D || (e6 = M(e6)), e6 ? (e6 = e6.rgb(), new N(e6.r, e6.g, e6.b, e6.opacity)) : new N();
}
function Qt(e6, t6, n2, r2) {
  return arguments.length === 1 ? Zt(e6) : new N(e6, t6, n2, r2 ?? 1);
}
function N(e6, t6, n2, r2) {
  this.r = +e6, this.g = +t6, this.b = +n2, this.opacity = +r2;
}
E(N, Qt, Ft(D, { brighter(t6) {
  var n2 = e;
  return t6 = t6 == null ? It : It ** +t6, new N(this.r * t6, this.g * t6, this.b * t6, this[n2(630)]);
}, darker(e6) {
  return e6 = e6 == null ? O : O ** +e6, new N(this.r * e6, this.g * e6, this.b * e6, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  var t6 = e;
  return new N(P(this.r), P(this.g), P(this.b), nn(this[t6(630)]));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: $t, formatHex: $t, formatHex8: en, formatRgb: tn, toString: tn }));
function $t() {
  return `#` + F(this.r) + F(this.g) + F(this.b);
}
function en() {
  var t6 = e;
  return `#` + F(this.r) + F(this.g) + F(this.b) + F((isNaN(this.opacity) ? 1 : this[t6(630)]) * 255);
}
function tn() {
  var t6 = e;
  let n2 = nn(this.opacity);
  return `` + (n2 === 1 ? t6(495) : `rgba(`) + P(this.r) + `, ` + P(this.g) + `, ` + P(this.b) + (n2 === 1 ? `)` : `, ` + n2 + `)`);
}
function nn(e6) {
  return isNaN(e6) ? 1 : Math.max(0, Math.min(1, e6));
}
function P(e6) {
  return Math.max(0, Math.min(255, Math.round(e6) || 0));
}
function F(e6) {
  return e6 = P(e6), (e6 < 16 ? `0` : ``) + e6.toString(16);
}
function rn(e6, t6, n2, r2) {
  return r2 <= 0 ? e6 = t6 = n2 = NaN : n2 <= 0 || n2 >= 1 ? e6 = t6 = NaN : t6 <= 0 && (e6 = NaN), new I(e6, t6, n2, r2);
}
function an(e6) {
  if (e6 instanceof I) return new I(e6.h, e6.s, e6.l, e6.opacity);
  if (e6 instanceof D || (e6 = M(e6)), !e6) return new I();
  if (e6 instanceof I) return e6;
  e6 = e6.rgb();
  var t6 = e6.r / 255, n2 = e6.g / 255, r2 = e6.b / 255, i2 = Math.min(t6, n2, r2), a2 = Math.max(t6, n2, r2), o2 = NaN, s2 = a2 - i2, c2 = (a2 + i2) / 2;
  return s2 ? (o2 = t6 === a2 ? (n2 - r2) / s2 + (n2 < r2) * 6 : n2 === a2 ? (r2 - t6) / s2 + 2 : (t6 - n2) / s2 + 4, s2 /= c2 < 0.5 ? a2 + i2 : 2 - a2 - i2, o2 *= 60) : s2 = c2 > 0 && c2 < 1 ? 0 : o2, new I(o2, s2, c2, e6.opacity);
}
function on(e6, t6, n2, r2) {
  return arguments.length === 1 ? an(e6) : new I(e6, t6, n2, r2 ?? 1);
}
function I(e6, t6, n2, r2) {
  this.h = +e6, this.s = +t6, this.l = +n2, this.opacity = +r2;
}
E(I, on, Ft(D, { brighter(e6) {
  return e6 = e6 == null ? It : It ** +e6, new I(this.h, this.s, this.l * e6, this.opacity);
}, darker(t6) {
  var n2 = e;
  return t6 = t6 == null ? O : O ** +t6, new I(this.h, this.s, this.l * t6, this[n2(630)]);
}, rgb() {
  var e6 = this.h % 360 + (this.h < 0) * 360, t6 = isNaN(e6) || isNaN(this.s) ? 0 : this.s, n2 = this.l, r2 = n2 + (n2 < 0.5 ? n2 : 1 - n2) * t6, i2 = 2 * n2 - r2;
  return new N(ln(e6 >= 240 ? e6 - 240 : e6 + 120, i2, r2), ln(e6, i2, r2), ln(e6 < 120 ? e6 + 240 : e6 - 120, i2, r2), this.opacity);
}, clamp() {
  return new I(sn(this.h), cn(this.s), cn(this.l), nn(this.opacity));
}, displayable() {
  var t6 = e;
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this[t6(630)] <= 1;
}, formatHsl() {
  var t6 = e;
  let n2 = nn(this[t6(630)]);
  return (n2 === 1 ? `hsl(` : `hsla(`) + sn(this.h) + `, ` + cn(this.s) * 100 + `%, ` + cn(this.l) * 100 + `%` + (n2 === 1 ? `)` : `, ` + n2 + `)`);
} }));
function sn(e6) {
  return e6 = (e6 || 0) % 360, e6 < 0 ? e6 + 360 : e6;
}
function cn(e6) {
  return Math.max(0, Math.min(1, e6 || 0));
}
function ln(e6, t6, n2) {
  return (e6 < 60 ? t6 + (n2 - t6) * e6 / 60 : e6 < 180 ? n2 : e6 < 240 ? t6 + (n2 - t6) * (240 - e6) / 60 : t6) * 255;
}
var un = (e6) => () => e6;
function dn(e6, t6) {
  return function(n2) {
    return e6 + n2 * t6;
  };
}
function fn(e6, t6, n2) {
  return e6 **= +n2, t6 = t6 ** +n2 - e6, n2 = 1 / n2, function(r2) {
    return (e6 + r2 * t6) ** +n2;
  };
}
function pn(e6, t6) {
  var n2 = t6 - e6;
  return n2 ? dn(e6, n2 > 180 || n2 < -180 ? n2 - 360 * Math.round(n2 / 360) : n2) : un(isNaN(e6) ? t6 : e6);
}
function mn(e6) {
  return (e6 = +e6) == 1 ? hn : function(t6, n2) {
    return n2 - t6 ? fn(t6, n2, e6) : un(isNaN(t6) ? n2 : t6);
  };
}
function hn(e6, t6) {
  var n2 = t6 - e6;
  return n2 ? dn(e6, n2) : un(isNaN(e6) ? t6 : e6);
}
var gn = (function e2(t6) {
  var n2 = mn(t6);
  function r2(e6, t7) {
    var r3 = n2((e6 = Qt(e6)).r, (t7 = Qt(t7)).r), i2 = n2(e6.g, t7.g), a2 = n2(e6.b, t7.b), o2 = hn(e6.opacity, t7.opacity);
    return function(t8) {
      return e6.r = r3(t8), e6.g = i2(t8), e6.b = a2(t8), e6.opacity = o2(t8), e6 + ``;
    };
  }
  return r2.gamma = e2, r2;
})(1);
function L(e6, t6) {
  return e6 = +e6, t6 = +t6, function(n2) {
    return e6 * (1 - n2) + t6 * n2;
  };
}
var _n = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, vn = new RegExp(_n.source, `g`);
function yn(e6) {
  return function() {
    return e6;
  };
}
function bn(e6) {
  return function(t6) {
    return e6(t6) + ``;
  };
}
function xn(t6, n2) {
  var r2 = e, i2 = _n.lastIndex = vn.lastIndex = 0, a2, o2, s2, c2 = -1, l2 = [], u2 = [];
  for (t6 += ``, n2 += ``; (a2 = _n.exec(t6)) && (o2 = vn[r2(614)](n2)); ) (s2 = o2.index) > i2 && (s2 = n2[r2(556)](i2, s2), l2[c2] ? l2[c2] += s2 : l2[++c2] = s2), (a2 = a2[0]) === (o2 = o2[0]) ? l2[c2] ? l2[c2] += o2 : l2[++c2] = o2 : (l2[++c2] = null, u2.push({ i: c2, x: L(a2, o2) })), i2 = vn.lastIndex;
  return i2 < n2.length && (s2 = n2.slice(i2), l2[c2] ? l2[c2] += s2 : l2[++c2] = s2), l2.length < 2 ? u2[0] ? bn(u2[0].x) : yn(n2) : (n2 = u2.length, function(e6) {
    for (var t7 = 0, r3; t7 < n2; ++t7) l2[(r3 = u2[t7]).i] = r3.x(e6);
    return l2.join(``);
  });
}
var Sn = 180 / Math.PI, Cn = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function wn(e6, t6, n2, r2, i2, a2) {
  var o2, s2, c2;
  return (o2 = Math.sqrt(e6 * e6 + t6 * t6)) && (e6 /= o2, t6 /= o2), (c2 = e6 * n2 + t6 * r2) && (n2 -= e6 * c2, r2 -= t6 * c2), (s2 = Math.sqrt(n2 * n2 + r2 * r2)) && (n2 /= s2, r2 /= s2, c2 /= s2), e6 * r2 < t6 * n2 && (e6 = -e6, t6 = -t6, c2 = -c2, o2 = -o2), { translateX: i2, translateY: a2, rotate: Math.atan2(t6, e6) * Sn, skewX: Math.atan(c2) * Sn, scaleX: o2, scaleY: s2 };
}
var Tn;
function En(t6) {
  var n2 = e;
  let r2 = new (typeof DOMMatrix == `function` ? DOMMatrix : WebKitCSSMatrix)(t6 + ``);
  return r2[n2(558)] ? Cn : wn(r2.a, r2.b, r2.c, r2.d, r2.e, r2.f);
}
function Dn(t6) {
  var n2 = e;
  return t6 == null || (Tn || (Tn = document[n2(567)](`http://www.w3.org/2000/svg`, `g`)), Tn.setAttribute(`transform`, t6), !(t6 = Tn.transform[n2(621)].consolidate())) ? Cn : (t6 = t6.matrix, wn(t6.a, t6.b, t6.c, t6.d, t6.e, t6.f));
}
function On(e6, t6, n2, r2) {
  function i2(e7) {
    return e7.length ? e7.pop() + ` ` : ``;
  }
  function a2(e7, r3, i3, a3, o3, s3) {
    if (e7 !== i3 || r3 !== a3) {
      var c3 = o3.push(`translate(`, null, t6, null, n2);
      s3.push({ i: c3 - 4, x: L(e7, i3) }, { i: c3 - 2, x: L(r3, a3) });
    } else (i3 || a3) && o3.push(`translate(` + i3 + t6 + a3 + n2);
  }
  function o2(e7, t7, n3, a3) {
    var o3 = S;
    e7 === t7 ? t7 && n3.push(i2(n3) + o3(506) + t7 + r2) : (e7 - t7 > 180 ? t7 += 360 : t7 - e7 > 180 && (e7 += 360), a3.push({ i: n3[o3(492)](i2(n3) + `rotate(`, null, r2) - 2, x: L(e7, t7) }));
  }
  function s2(e7, t7, n3, a3) {
    e7 === t7 ? t7 && n3.push(i2(n3) + `skewX(` + t7 + r2) : a3.push({ i: n3.push(i2(n3) + `skewX(`, null, r2) - 2, x: L(e7, t7) });
  }
  function c2(e7, t7, n3, r3, a3, o3) {
    var s3 = S;
    if (e7 !== n3 || t7 !== r3) {
      var c3 = a3.push(i2(a3) + `scale(`, null, `,`, null, `)`);
      o3.push({ i: c3 - 4, x: L(e7, n3) }, { i: c3 - 2, x: L(t7, r3) });
    } else (n3 !== 1 || r3 !== 1) && a3[s3(492)](i2(a3) + `scale(` + n3 + `,` + r3 + `)`);
  }
  return function(t7, n3) {
    var r3 = S, i3 = [], l2 = [];
    return t7 = e6(t7), n3 = e6(n3), a2(t7.translateX, t7[r3(542)], n3[r3(603)], n3.translateY, i3, l2), o2(t7.rotate, n3.rotate, i3, l2), s2(t7.skewX, n3[r3(611)], i3, l2), c2(t7[r3(498)], t7.scaleY, n3[r3(498)], n3[r3(593)], i3, l2), t7 = n3 = null, function(e7) {
      for (var t8 = r3, n4 = -1, a3 = l2.length, o3; ++n4 < a3; ) i3[(o3 = l2[n4]).i] = o3.x(e7);
      return i3[t8(622)](``);
    };
  };
}
var kn = On(En, `px, `, `px)`, `deg)`), An = On(Dn, `, `, `)`, `)`), R = 0, z = 0, jn = 0, Mn = 1e3, B, V, Nn = 0, H = 0, Pn = 0, U = typeof performance == `object` && performance.now ? performance : Date, Fn = typeof window == `object` && window.requestAnimationFrame ? window[e(589)].bind(window) : function(e6) {
  setTimeout(e6, 17);
};
function In() {
  return H || (H = (Fn(Ln), U.now() + Pn));
}
function Ln() {
  H = 0;
}
function Rn() {
  this._call = this._time = this._next = null;
}
Rn[e(485)] = zn.prototype = { constructor: Rn, restart: function(t6, n2, r2) {
  var i2 = e;
  if (typeof t6 != `function`) throw TypeError(`callback is not a function`);
  r2 = (r2 == null ? In() : +r2) + (n2 == null ? 0 : +n2), !this._next && V !== this && (V ? V._next = this : B = this, V = this), this._call = t6, this[i2(500)] = r2, Wn();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, Wn());
} };
function zn(e6, t6, n2) {
  var r2 = new Rn();
  return r2.restart(e6, t6, n2), r2;
}
function Bn() {
  In(), ++R;
  for (var e6 = B, t6; e6; ) (t6 = H - e6._time) >= 0 && e6._call.call(void 0, t6), e6 = e6._next;
  --R;
}
function Vn() {
  H = (Nn = U.now()) + Pn, R = z = 0;
  try {
    Bn();
  } finally {
    R = 0, Un(), H = 0;
  }
}
function Hn() {
  var e6 = U.now(), t6 = e6 - Nn;
  t6 > Mn && (Pn -= t6, Nn = e6);
}
function Un() {
  for (var t6 = e, n2, r2 = B, i2, a2 = 1 / 0; r2; ) r2._call ? (a2 > r2._time && (a2 = r2[t6(500)]), n2 = r2, r2 = r2._next) : (i2 = r2._next, r2[t6(528)] = null, r2 = n2 ? n2._next = i2 : B = i2);
  V = n2, Wn(a2);
}
function Wn(t6) {
  var n2 = e;
  R || (z && (z = clearTimeout(z)), t6 - H > 24 ? (t6 < 1 / 0 && (z = setTimeout(Vn, t6 - U[n2(597)]() - Pn)), jn && (jn = clearInterval(jn))) : (jn || (jn = (Nn = U.now(), setInterval(Hn, Mn))), R = 1, Fn(Vn)));
}
function Gn(e6, t6, n2) {
  var r2 = new Rn();
  return t6 = t6 == null ? 0 : +t6, r2.restart((n3) => {
    r2.stop(), e6(n3 + t6);
  }, t6, n2), r2;
}
var Kn = n(`start`, `end`, `cancel`, e(635)), qn = [];
function Jn() {
  var e6 = `append,332298FXbHih,8pYWyzG,documentElement,timer,push,getAttribute,size,rgb(,_alpha,\\)$,scaleX,bezierCurveTo,_time,\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*,605103FdtaNa,closePath,indexOf,_context,rotate(,bubbles,local,type,node,too late; already scheduled,2144YVfOhn,_basis,delete,object,_x4,getPropertyValue,curve,translate(,from,_point,_y2,_append,point,3385935dcQqgm,_line,tension,_next,context,namespaceURI,_x3,unknown type: ,arcTo,defaultView,min,attrTween,restart,_parents,createElement,select,parentNode,translateY,illegal type: ,setAttributeNS,alpha,length,stop,iterator,invert,firstElementChild,_enter,order,_l23_2a,2mbScQM,703651CQPdyd,slice,_t0,isIdentity,name,attr.,toString,abs,splice,_l01_a,textContent,_l01_2a,createElementNS,moveTo,value,removeAttributeNS,_l23_a,style,create,trim,function,sqrt,merge,ease,removeAttribute,_y3,dim,_groups,tween,map,_name,_l12_2a,_id,split,requestAnimationFrame,_x2,toLowerCase,rgb,scaleY,beta,apply,__transition,now,selection,__data__,13149lFHLgC,selectAll,detail,translateX,removeProperty,invertY,156hgpVaW,setAttribute,\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*,Event,formatHex,skewX,createEvent,transform,exec,11NvtvdX,state,_y5,time,_y0,exit,baseVal,join,delay,578059WHTeTq,getAttributeNS,initEvent,_y1,querySelectorAll,call,opacity,group,_l12_a,space,161RORAUr,interrupt,xmlns,copy,lineTo,listener,each,set,cancel,transition,insertBefore,16851750lmDsFl,_x0,max,duration,filter,_names,_value,prototype,_x1`.split(`,`);
  return Jn = function() {
    return e6;
  }, Jn();
}
function Yn(t6, n2, r2, i2, a2, o2) {
  var s2 = e, c2 = t6.__transition;
  if (!c2) t6.__transition = {};
  else if (r2 in c2) return;
  Zn(t6, r2, { name: n2, index: i2, group: a2, on: Kn, tween: qn, time: o2.time, delay: o2.delay, duration: o2[s2(648)], ease: o2.ease, timer: null, state: 0 });
}
function Xn(t6, n2) {
  var r2 = e, i2 = G(t6, n2);
  if (i2.state > 0) throw Error(r2(511));
  return i2;
}
function W(e6, t6) {
  var n2 = G(e6, t6);
  if (n2.state > 3) throw Error(`too late; already running`);
  return n2;
}
function G(e6, t6) {
  var n2 = e6.__transition;
  if (!n2 || !(n2 = n2[t6])) throw Error(`transition not found`);
  return n2;
}
function Zn(e6, t6, n2) {
  var r2 = e6.__transition, i2;
  r2[t6] = n2, n2.timer = zn(a2, 0, n2.time);
  function a2(e7) {
    var t7 = S;
    n2.state = 1, n2.timer.restart(o2, n2.delay, n2[t7(618)]), n2.delay <= e7 && o2(e7 - n2.delay);
  }
  function o2(a3) {
    var l2 = S, u2, d2, f2, p2;
    if (n2.state !== 1) return c2();
    for (u2 in r2) if (p2 = r2[u2], p2[l2(559)] === n2.name) {
      if (p2.state === 3) return Gn(o2);
      p2.state === 4 ? (p2[l2(616)] = 6, p2.timer[l2(547)](), p2.on.call(`interrupt`, e6, e6.__data__, p2.index, p2.group), delete r2[u2]) : +u2 < t6 && (p2.state = 6, p2[l2(491)].stop(), p2.on[l2(629)](`cancel`, e6, e6.__data__, p2.index, p2[l2(631)]), delete r2[u2]);
    }
    if (Gn(function() {
      var e7 = l2;
      n2[e7(616)] === 3 && (n2.state = 4, n2.timer[e7(537)](s2, n2.delay, n2.time), s2(a3));
    }), n2[l2(616)] = 2, n2.on.call(`start`, e6, e6.__data__, n2.index, n2.group), n2.state === 2) {
      for (n2.state = 3, i2 = Array(f2 = n2.tween.length), u2 = 0, d2 = -1; u2 < f2; ++u2) (p2 = n2[l2(583)][u2][l2(569)].call(e6, e6.__data__, n2.index, n2.group)) && (i2[++d2] = p2);
      i2.length = d2 + 1;
    }
  }
  function s2(t7) {
    for (var r3 = S, a3 = t7 < n2.duration ? n2.ease.call(null, t7 / n2.duration) : (n2.timer.restart(c2), n2.state = 5, 1), o3 = -1, s3 = i2[r3(546)]; ++o3 < s3; ) i2[o3].call(e6, a3);
    n2.state === 5 && (n2.on[r3(629)](`end`, e6, e6[r3(599)], n2.index, n2.group), c2());
  }
  function c2() {
    for (var i3 in n2.state = 6, n2.timer.stop(), delete r2[t6], r2) return;
    delete e6.__transition;
  }
}
function Qn(t6, n2) {
  var r2 = e, i2 = t6.__transition, a2, o2, s2 = true, c2;
  if (i2) {
    for (c2 in n2 = n2 == null ? null : n2 + ``, i2) {
      if ((a2 = i2[c2]).name !== n2) {
        s2 = false;
        continue;
      }
      o2 = a2.state > 2 && a2.state < 5, a2[r2(616)] = 6, a2.timer.stop(), a2.on.call(o2 ? `interrupt` : `cancel`, t6, t6.__data__, a2.index, a2.group), delete i2[c2];
    }
    s2 && delete t6[r2(596)];
  }
}
function $n(e6) {
  return this.each(function() {
    Qn(this, e6);
  });
}
function er(e6, t6) {
  var n2, r2;
  return function() {
    var i2 = S, a2 = W(this, e6), o2 = a2.tween;
    if (o2 !== n2) {
      r2 = n2 = o2;
      for (var s2 = 0, c2 = r2.length; s2 < c2; ++s2) if (r2[s2][i2(559)] === t6) {
        r2 = r2[i2(556)](), r2[i2(563)](s2, 1);
        break;
      }
    }
    a2.tween = r2;
  };
}
function tr(e6, t6, n2) {
  var r2, i2;
  if (typeof n2 != `function`) throw Error();
  return function() {
    var a2 = W(this, e6), o2 = a2.tween;
    if (o2 !== r2) {
      i2 = (r2 = o2).slice();
      for (var s2 = { name: t6, value: n2 }, c2 = 0, l2 = i2.length; c2 < l2; ++c2) if (i2[c2].name === t6) {
        i2[c2] = s2;
        break;
      }
      c2 === l2 && i2.push(s2);
    }
    a2.tween = i2;
  };
}
function nr(t6, n2) {
  var r2 = e, i2 = this._id;
  if (t6 += ``, arguments.length < 2) {
    for (var a2 = G(this.node(), i2).tween, o2 = 0, s2 = a2.length, c2; o2 < s2; ++o2) if ((c2 = a2[o2]).name === t6) return c2[r2(569)];
    return null;
  }
  return this[r2(640)]((n2 == null ? er : tr)(i2, t6, n2));
}
function rr(t6, n2, r2) {
  var i2 = e, a2 = t6[i2(587)];
  return t6.each(function() {
    var e6 = i2, t7 = W(this, a2);
    (t7[e6(569)] || (t7.value = {}))[n2] = r2.apply(this, arguments);
  }), function(e6) {
    var t7 = i2;
    return G(e6, a2)[t7(569)][n2];
  };
}
function ir(e6, t6) {
  var n2;
  return (typeof t6 == `number` ? L : t6 instanceof M ? gn : (n2 = M(t6)) ? (t6 = n2, gn) : xn)(e6, t6);
}
function ar(e6) {
  return function() {
    this.removeAttribute(e6);
  };
}
function or(e6) {
  return function() {
    var t6 = S;
    this[t6(570)](e6.space, e6.local);
  };
}
function sr(e6, t6, n2) {
  var r2, i2 = n2 + ``, a2;
  return function() {
    var o2 = this.getAttribute(e6);
    return o2 === i2 ? null : o2 === r2 ? a2 : a2 = t6(r2 = o2, n2);
  };
}
function cr(e6, t6, n2) {
  var r2, i2 = n2 + ``, a2;
  return function() {
    var o2 = S, s2 = this.getAttributeNS(e6.space, e6[o2(508)]);
    return s2 === i2 ? null : s2 === r2 ? a2 : a2 = t6(r2 = s2, n2);
  };
}
function lr(e6, t6, n2) {
  var r2, i2, a2;
  return function() {
    var o2 = S, s2, c2 = n2(this), l2;
    return c2 == null ? void this[o2(579)](e6) : (s2 = this.getAttribute(e6), l2 = c2 + ``, s2 === l2 ? null : s2 === r2 && l2 === i2 ? a2 : (i2 = l2, a2 = t6(r2 = s2, c2)));
  };
}
function ur(e6, t6, n2) {
  var r2, i2, a2;
  return function() {
    var o2, s2 = n2(this), c2;
    return s2 == null ? void this.removeAttributeNS(e6.space, e6.local) : (o2 = this.getAttributeNS(e6.space, e6.local), c2 = s2 + ``, o2 === c2 ? null : o2 === r2 && c2 === i2 ? a2 : (i2 = c2, a2 = t6(r2 = o2, s2)));
  };
}
function dr(t6, n2) {
  var r2 = e, i2 = c(t6), a2 = i2 === r2(613) ? An : ir;
  return this[r2(536)](t6, typeof n2 == `function` ? (i2.local ? ur : lr)(i2, a2, rr(this, r2(560) + t6, n2)) : n2 == null ? (i2.local ? or : ar)(i2) : (i2.local ? cr : sr)(i2, a2, n2));
}
function fr(e6, t6) {
  return function(n2) {
    this.setAttribute(e6, t6.call(this, n2));
  };
}
function pr(e6, t6) {
  return function(n2) {
    this.setAttributeNS(e6.space, e6.local, t6.call(this, n2));
  };
}
function mr(e6, t6) {
  var n2, r2;
  function i2() {
    var i3 = t6.apply(this, arguments);
    return i3 !== r2 && (n2 = (r2 = i3) && pr(e6, i3)), n2;
  }
  return i2._value = t6, i2;
}
function hr(t6, n2) {
  var r2 = e, i2, a2;
  function o2() {
    var e6 = n2.apply(this, arguments);
    return e6 !== a2 && (i2 = (a2 = e6) && fr(t6, e6)), i2;
  }
  return o2[r2(651)] = n2, o2;
}
function gr(e6, t6) {
  var n2 = `attr.` + e6;
  if (arguments.length < 2) return (n2 = this.tween(n2)) && n2._value;
  if (t6 == null) return this.tween(n2, null);
  if (typeof t6 != `function`) throw Error();
  var r2 = c(e6);
  return this.tween(n2, (r2.local ? mr : hr)(r2, t6));
}
function _r(e6, t6) {
  return function() {
    var n2 = S;
    Xn(this, e6)[n2(623)] = +t6.apply(this, arguments);
  };
}
function vr(e6, t6) {
  return t6 = +t6, function() {
    Xn(this, e6).delay = t6;
  };
}
function yr(t6) {
  var n2 = e, r2 = this._id;
  return arguments.length ? this.each((typeof t6 == n2(575) ? _r : vr)(r2, t6)) : G(this.node(), r2).delay;
}
function br(e6, t6) {
  return function() {
    W(this, e6).duration = +t6.apply(this, arguments);
  };
}
function xr(e6, t6) {
  return t6 = +t6, function() {
    W(this, e6).duration = t6;
  };
}
function Sr(t6) {
  var n2 = e, r2 = this._id;
  return arguments.length ? this.each((typeof t6 == `function` ? br : xr)(r2, t6)) : G(this.node(), r2)[n2(648)];
}
function Cr(e6, t6) {
  if (typeof t6 != `function`) throw Error();
  return function() {
    W(this, e6).ease = t6;
  };
}
function wr(t6) {
  var n2 = e, r2 = this._id;
  return arguments.length ? this[n2(640)](Cr(r2, t6)) : G(this.node(), r2).ease;
}
function Tr(e6, t6) {
  return function() {
    var n2 = t6.apply(this, arguments);
    if (typeof n2 != `function`) throw Error();
    W(this, e6).ease = n2;
  };
}
function Er(e6) {
  if (typeof e6 != `function`) throw Error();
  return this.each(Tr(this._id, e6));
}
function Dr(t6) {
  var n2 = e;
  typeof t6 != `function` && (t6 = b(t6));
  for (var r2 = this._groups, i2 = r2.length, a2 = Array(i2), o2 = 0; o2 < i2; ++o2) for (var s2 = r2[o2], c2 = s2[n2(546)], l2 = a2[o2] = [], u2, d2 = 0; d2 < c2; ++d2) (u2 = s2[d2]) && t6.call(u2, u2.__data__, d2, s2) && l2.push(u2);
  return new K(a2, this._parents, this[n2(585)], this._id);
}
function Or(t6) {
  var n2 = e;
  if (t6[n2(587)] !== this._id) throw Error();
  for (var r2 = this[n2(582)], i2 = t6._groups, a2 = r2.length, o2 = i2.length, s2 = Math.min(a2, o2), c2 = Array(a2), l2 = 0; l2 < s2; ++l2) for (var u2 = r2[l2], d2 = i2[l2], f2 = u2.length, p2 = c2[l2] = Array(f2), m2, h2 = 0; h2 < f2; ++h2) (m2 = u2[h2] || d2[h2]) && (p2[h2] = m2);
  for (; l2 < a2; ++l2) c2[l2] = r2[l2];
  return new K(c2, this._parents, this._name, this._id);
}
function kr(t6) {
  var n2 = e;
  return (t6 + ``)[n2(574)]().split(/^|\s+/).every(function(e6) {
    var t7 = n2, r2 = e6.indexOf(`.`);
    return r2 >= 0 && (e6 = e6[t7(556)](0, r2)), !e6 || e6 === `start`;
  });
}
function Ar(e6, t6, n2) {
  var r2, i2, a2 = kr(t6) ? Xn : W;
  return function() {
    var o2 = S, s2 = a2(this, e6), c2 = s2.on;
    c2 !== r2 && (i2 = (r2 = c2)[o2(637)]()).on(t6, n2), s2.on = i2;
  };
}
function jr(t6, n2) {
  var r2 = e, i2 = this[r2(587)];
  return arguments[r2(546)] < 2 ? G(this[r2(510)](), i2).on.on(t6) : this[r2(640)](Ar(i2, t6, n2));
}
function Mr(e6) {
  return function() {
    var t6 = this.parentNode;
    for (var n2 in this.__transition) if (+n2 !== e6) return;
    t6 && t6.removeChild(this);
  };
}
function Nr() {
  return this.on(`end.remove`, Mr(this._id));
}
function Pr(t6) {
  var n2 = e, r2 = this._name, i2 = this[n2(587)];
  typeof t6 != `function` && (t6 = p(t6));
  for (var a2 = this[n2(582)], o2 = a2.length, s2 = Array(o2), c2 = 0; c2 < o2; ++c2) for (var l2 = a2[c2], u2 = l2.length, d2 = s2[c2] = Array(u2), f2, m2, h2 = 0; h2 < u2; ++h2) (f2 = l2[h2]) && (m2 = t6[n2(629)](f2, f2.__data__, h2, l2)) && (`__data__` in f2 && (m2.__data__ = f2.__data__), d2[h2] = m2, Yn(d2[h2], r2, i2, h2, d2, G(f2, i2)));
  return new K(s2, this[n2(538)], r2, i2);
}
function Fr(t6) {
  var n2 = e, r2 = this._name, i2 = this[n2(587)];
  typeof t6 != n2(575) && (t6 = _(t6));
  for (var a2 = this._groups, o2 = a2.length, s2 = [], c2 = [], l2 = 0; l2 < o2; ++l2) for (var u2 = a2[l2], d2 = u2.length, f2, p2 = 0; p2 < d2; ++p2) if (f2 = u2[p2]) {
    for (var m2 = t6.call(f2, f2.__data__, p2, u2), h2, g2 = G(f2, i2), v2 = 0, y2 = m2.length; v2 < y2; ++v2) (h2 = m2[v2]) && Yn(h2, r2, i2, v2, m2, g2);
    s2.push(m2), c2.push(f2);
  }
  return new K(s2, c2, r2, i2);
}
var Ir = T[e(485)].constructor;
function Lr() {
  var t6 = e;
  return new Ir(this[t6(582)], this._parents);
}
function Rr(e6, t6) {
  var n2, r2, i2;
  return function() {
    var a2 = S, o2 = C(this, e6), s2 = (this.style[a2(604)](e6), C(this, e6));
    return o2 === s2 ? null : o2 === n2 && s2 === r2 ? i2 : i2 = t6(n2 = o2, r2 = s2);
  };
}
function zr(e6) {
  return function() {
    var t6 = S;
    this[t6(572)].removeProperty(e6);
  };
}
function Br(e6, t6, n2) {
  var r2, i2 = n2 + ``, a2;
  return function() {
    var o2 = C(this, e6);
    return o2 === i2 ? null : o2 === r2 ? a2 : a2 = t6(r2 = o2, n2);
  };
}
function Vr(e6, t6, n2) {
  var r2, i2, a2;
  return function() {
    var o2 = C(this, e6), s2 = n2(this), c2 = s2 + ``;
    return s2 ?? (c2 = s2 = (this.style.removeProperty(e6), C(this, e6))), o2 === c2 ? null : o2 === r2 && c2 === i2 ? a2 : (i2 = c2, a2 = t6(r2 = o2, s2));
  };
}
function Hr(e6, t6) {
  var n2, r2, i2, a2 = `style.` + t6, o2 = `end.` + a2, s2;
  return function() {
    var c2 = S, l2 = W(this, e6), u2 = l2.on, d2 = l2.value[a2] == null ? s2 || (s2 = zr(t6)) : void 0;
    (u2 !== n2 || i2 !== d2) && (r2 = (n2 = u2)[c2(637)]()).on(o2, i2 = d2), l2.on = r2;
  };
}
function Ur(t6, n2, r2) {
  var i2 = e, a2 = (t6 += ``) == `transform` ? kn : ir;
  return n2 == null ? this.styleTween(t6, Rr(t6, a2)).on(`end.style.` + t6, zr(t6)) : typeof n2 == i2(575) ? this.styleTween(t6, Vr(t6, a2, rr(this, `style.` + t6, n2))).each(Hr(this[i2(587)], t6)) : this.styleTween(t6, Br(t6, a2, n2), r2).on(`end.style.` + t6, null);
}
function Wr(e6, t6, n2) {
  return function(r2) {
    this.style.setProperty(e6, t6.call(this, r2), n2);
  };
}
function Gr(e6, t6, n2) {
  var r2, i2;
  function a2() {
    var a3 = t6.apply(this, arguments);
    return a3 !== i2 && (r2 = (i2 = a3) && Wr(e6, a3, n2)), r2;
  }
  return a2._value = t6, a2;
}
function Kr(t6, n2, r2) {
  var i2 = e, a2 = `style.` + (t6 += ``);
  if (arguments.length < 2) return (a2 = this[i2(583)](a2)) && a2._value;
  if (n2 == null) return this.tween(a2, null);
  if (typeof n2 != `function`) throw Error();
  return this.tween(a2, Gr(t6, n2, r2 ?? ``));
}
function qr(e6) {
  return function() {
    this.textContent = e6;
  };
}
function Jr(e6) {
  return function() {
    var t6 = e6(this);
    this.textContent = t6 ?? ``;
  };
}
function Yr(t6) {
  var n2 = e;
  return this[n2(583)](`text`, typeof t6 == n2(575) ? Jr(rr(this, `text`, t6)) : qr(t6 == null ? `` : t6 + ``));
}
function Xr(e6) {
  return function(t6) {
    var n2 = S;
    this[n2(565)] = e6.call(this, t6);
  };
}
function Zr(e6) {
  var t6, n2;
  function r2() {
    var r3 = e6[S(595)](this, arguments);
    return r3 !== n2 && (t6 = (n2 = r3) && Xr(r3)), t6;
  }
  return r2._value = e6, r2;
}
function Qr(e6) {
  var t6 = `text`;
  if (arguments.length < 1) return (t6 = this.tween(t6)) && t6._value;
  if (e6 == null) return this.tween(t6, null);
  if (typeof e6 != `function`) throw Error();
  return this.tween(t6, Zr(e6));
}
function $r() {
  for (var t6 = e, n2 = this._name, r2 = this._id, i2 = ri(), a2 = this._groups, o2 = a2.length, s2 = 0; s2 < o2; ++s2) for (var c2 = a2[s2], l2 = c2.length, u2, d2 = 0; d2 < l2; ++d2) if (u2 = c2[d2]) {
    var f2 = G(u2, r2);
    Yn(u2, n2, i2, d2, c2, { time: f2.time + f2.delay + f2[t6(648)], delay: 0, duration: f2.duration, ease: f2[t6(578)] });
  }
  return new K(a2, this._parents, n2, i2);
}
function ei() {
  var t6 = e, n2, r2, i2 = this, a2 = i2._id, o2 = i2[t6(494)]();
  return new Promise(function(e6, t7) {
    var s2 = { value: t7 }, c2 = { value: function() {
      --o2 === 0 && e6();
    } };
    i2.each(function() {
      var e7 = S, t8 = W(this, a2), i3 = t8.on;
      i3 !== n2 && (r2 = (n2 = i3).copy(), r2._[e7(642)].push(s2), r2._.interrupt[e7(492)](s2), r2._.end[e7(492)](c2)), t8.on = r2;
    }), o2 === 0 && e6();
  });
}
var ti = 0;
function K(e6, t6, n2, r2) {
  this._groups = e6, this._parents = t6, this._name = n2, this._id = r2;
}
function ni(t6) {
  var n2 = e;
  return T()[n2(643)](t6);
}
function ri() {
  return ++ti;
}
var q = T.prototype;
K[e(485)] = ni[e(485)] = { constructor: K, select: Pr, selectAll: Fr, selectChild: q.selectChild, selectChildren: q.selectChildren, filter: Dr, merge: Or, selection: Lr, transition: $r, call: q.call, nodes: q.nodes, node: q.node, size: q[e(494)], empty: q.empty, each: q.each, on: jr, attr: dr, attrTween: gr, style: Ur, styleTween: Kr, text: Yr, textTween: Qr, remove: Nr, tween: nr, delay: yr, duration: Sr, ease: wr, easeVarying: Er, end: ei, [Symbol.iterator]: q[Symbol.iterator] };
function ii(e6) {
  return ((e6 *= 2) <= 1 ? e6 * e6 * e6 : (e6 -= 2) * e6 * e6 + 2) / 2;
}
var ai = { time: null, delay: 0, duration: 250, ease: ii };
function oi(t6, n2) {
  for (var r2 = e, i2; !(i2 = t6.__transition) || !(i2 = i2[n2]); ) if (!(t6 = t6[r2(541)])) throw Error(`transition ` + n2 + ` not found`);
  return i2;
}
function si(t6) {
  var n2 = e, r2, i2;
  t6 instanceof K ? (r2 = t6._id, t6 = t6._name) : (r2 = ri(), (i2 = ai).time = In(), t6 = t6 == null ? null : t6 + ``);
  for (var a2 = this._groups, o2 = a2.length, s2 = 0; s2 < o2; ++s2) for (var c2 = a2[s2], l2 = c2[n2(546)], u2, d2 = 0; d2 < l2; ++d2) (u2 = c2[d2]) && Yn(u2, t6, r2, d2, c2, i2 || oi(u2, r2));
  return new K(a2, this._parents, t6, r2);
}
T.prototype.interrupt = $n, T.prototype.transition = si;
var { abs: ci, max: li, min: ui } = Math;
[`w`, `e`].map(di), [`n`, `s`].map(di), [`n`, `w`, `e`, `s`, `nw`, `ne`, `sw`, `se`].map(di);
function di(e6) {
  return { type: e6 };
}
function fi(t6) {
  var n2 = e, r2 = t6.__brush;
  return r2 ? r2[n2(581)].output(r2.selection) : null;
}
var pi = Math.PI, mi = 2 * pi, J = 1e-6, hi = mi - J;
function gi(e6) {
  this._ += e6[0];
  for (let t6 = 1, n2 = e6.length; t6 < n2; ++t6) this._ += arguments[t6] + e6[t6];
}
function _i(e6) {
  let t6 = Math.floor(e6);
  if (!(t6 >= 0)) throw Error(`invalid digits: ` + e6);
  if (t6 > 15) return gi;
  let n2 = 10 ** t6;
  return function(e7) {
    this._ += e7[0];
    for (let t7 = 1, r2 = e7.length; t7 < r2; ++t7) this._ += Math.round(arguments[t7] * n2) / n2 + e7[t7];
  };
}
var vi = class {
  constructor(t6) {
    var n2 = e;
    this._x0 = this._y0 = this[n2(486)] = this._y1 = null, this._ = ``, this._append = t6 == null ? gi : _i(t6);
  }
  moveTo(t6, n2) {
    var r2 = e;
    this[r2(523)]`M${this._x0 = this._x1 = +t6},${this[r2(619)] = this._y1 = +n2}`;
  }
  [e(503)]() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e6, t6) {
    this._append`L${this._x1 = +e6},${this._y1 = +t6}`;
  }
  quadraticCurveTo(t6, n2, r2, i2) {
    var a2 = e;
    this._append`Q${+t6},${+n2},${this[a2(486)] = +r2},${this[a2(627)] = +i2}`;
  }
  bezierCurveTo(e6, t6, n2, r2, i2, a2) {
    this._append`C${+e6},${+t6},${+n2},${+r2},${this._x1 = +i2},${this._y1 = +a2}`;
  }
  [e(533)](t6, n2, r2, i2, a2) {
    var o2 = e;
    if (t6 = +t6, n2 = +n2, r2 = +r2, i2 = +i2, a2 = +a2, a2 < 0) throw Error(`negative radius: ` + a2);
    let s2 = this[o2(486)], c2 = this[o2(627)], l2 = r2 - t6, u2 = i2 - n2, d2 = s2 - t6, f2 = c2 - n2, p2 = d2 * d2 + f2 * f2;
    if (this._x1 === null) this._append`M${this._x1 = t6},${this[o2(627)] = n2}`;
    else if (p2 > J) if (!(Math[o2(562)](f2 * l2 - u2 * d2) > J) || !a2) this._append`L${this._x1 = t6},${this._y1 = n2}`;
    else {
      let e6 = r2 - s2, m2 = i2 - c2, h2 = l2 * l2 + u2 * u2, g2 = e6 * e6 + m2 * m2, _2 = Math[o2(576)](h2), v2 = Math[o2(576)](p2), y2 = a2 * Math.tan((pi - Math.acos((h2 + p2 - g2) / (2 * _2 * v2))) / 2), b2 = y2 / v2, x2 = y2 / _2;
      Math[o2(562)](b2 - 1) > J && this._append`L${t6 + b2 * d2},${n2 + b2 * f2}`, this[o2(523)]`A${a2},${a2},0,0,${+(f2 * e6 > d2 * m2)},${this._x1 = t6 + x2 * l2},${this._y1 = n2 + x2 * u2}`;
    }
  }
  arc(t6, n2, r2, i2, a2, o2) {
    var s2 = e;
    if (t6 = +t6, n2 = +n2, r2 = +r2, o2 = !!o2, r2 < 0) throw Error(`negative radius: ` + r2);
    let c2 = r2 * Math.cos(i2), l2 = r2 * Math.sin(i2), u2 = t6 + c2, d2 = n2 + l2, f2 = 1 ^ o2, p2 = o2 ? i2 - a2 : a2 - i2;
    this._x1 === null ? this._append`M${u2},${d2}` : (Math[s2(562)](this._x1 - u2) > J || Math.abs(this[s2(627)] - d2) > J) && this[s2(523)]`L${u2},${d2}`, r2 && (p2 < 0 && (p2 = p2 % mi + mi), p2 > hi ? this[s2(523)]`A${r2},${r2},0,1,${f2},${t6 - c2},${n2 - l2}A${r2},${r2},0,1,${f2},${this._x1 = u2},${this._y1 = d2}` : p2 > J && this._append`A${r2},${r2},0,${+(p2 >= pi)},${f2},${this._x1 = t6 + r2 * Math.cos(a2)},${this[s2(627)] = n2 + r2 * Math.sin(a2)}`);
  }
  rect(e6, t6, n2, r2) {
    this._append`M${this._x0 = this._x1 = +e6},${this._y0 = this._y1 = +t6}h${n2 = +n2}v${+r2}h${-n2}Z`;
  }
  [e(561)]() {
    return this._;
  }
};
function yi() {
  return new vi();
}
yi.prototype = vi.prototype;
function Y(e6) {
  return function() {
    return e6;
  };
}
var bi = Math[e(562)], xi = Math.atan2, Si = Math.cos, Ci = Math[e(647)], wi = Math.min, Ti = Math.sin, Ei = Math[e(576)], Di = Math.PI, Oi = Di / 2, ki = 2 * Di;
function Ai(e6) {
  return e6 > 1 ? 0 : e6 < -1 ? Di : Math.acos(e6);
}
function ji(e6) {
  return e6 >= 1 ? Oi : e6 <= -1 ? -Oi : Math.asin(e6);
}
function Mi(e6) {
  let t6 = 3;
  return e6.digits = function(n2) {
    if (!arguments.length) return t6;
    if (n2 == null) t6 = null;
    else {
      let e7 = Math.floor(n2);
      if (!(e7 >= 0)) throw RangeError(`invalid digits: ` + n2);
      t6 = e7;
    }
    return e6;
  }, () => new vi(t6);
}
Array[e(485)].slice;
function Ni(t6) {
  return typeof t6 == e(515) && `length` in t6 ? t6 : Array.from(t6);
}
function Pi(e6) {
  this._context = e6;
}
Pi.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  (this._line || this[t6(526)] !== 0 && this._point === 1) && this._context[t6(503)](), this._line = 1 - this._line;
}, point: function(t6, n2) {
  var r2 = e;
  switch (t6 = +t6, n2 = +n2, this[r2(521)]) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t6, n2) : this._context.moveTo(t6, n2);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(t6, n2);
      break;
  }
} };
function Fi(e6) {
  return new Pi(e6);
}
function Ii(e6) {
  return e6[0];
}
function Li(e6) {
  return e6[1];
}
function Ri(t6, n2) {
  var r2 = e, i2 = Y(true), a2 = null, o2 = Fi, s2 = null, c2 = Mi(l2);
  t6 = typeof t6 == `function` ? t6 : t6 === void 0 ? Ii : Y(t6), n2 = typeof n2 == `function` ? n2 : n2 === void 0 ? Li : Y(n2);
  function l2(e6) {
    var r3, l3 = (e6 = Ni(e6)).length, u2, d2 = false, f2;
    for (a2 ?? (s2 = o2(f2 = c2())), r3 = 0; r3 <= l3; ++r3) !(r3 < l3 && i2(u2 = e6[r3], r3, e6)) === d2 && ((d2 = !d2) ? s2.lineStart() : s2.lineEnd()), d2 && s2.point(+t6(u2, r3, e6), +n2(u2, r3, e6));
    if (f2) return s2 = null, f2 + `` || null;
  }
  return l2.x = function(e6) {
    return arguments.length ? (t6 = typeof e6 == `function` ? e6 : Y(+e6), l2) : t6;
  }, l2.y = function(e6) {
    var t7 = S;
    return arguments[t7(546)] ? (n2 = typeof e6 == t7(575) ? e6 : Y(+e6), l2) : n2;
  }, l2.defined = function(e6) {
    var t7 = S;
    return arguments[t7(546)] ? (i2 = typeof e6 == `function` ? e6 : Y(!!e6), l2) : i2;
  }, l2[r2(518)] = function(e6) {
    var t7 = r2;
    return arguments[t7(546)] ? (o2 = e6, a2 != null && (s2 = o2(a2)), l2) : o2;
  }, l2[r2(529)] = function(e6) {
    return arguments.length ? (e6 == null ? a2 = s2 = null : s2 = o2(a2 = e6), l2) : a2;
  }, l2;
}
function X() {
}
function zi(t6, n2, r2) {
  var i2 = e;
  t6._context.bezierCurveTo((2 * t6._x0 + t6._x1) / 3, (2 * t6._y0 + t6._y1) / 3, (t6._x0 + 2 * t6._x1) / 3, (t6._y0 + 2 * t6[i2(627)]) / 3, (t6._x0 + 4 * t6._x1 + n2) / 6, (t6._y0 + 4 * t6._y1 + r2) / 6);
}
function Z(e6) {
  this._context = e6;
}
Z.prototype = { areaStart: function() {
  var t6 = e;
  this[t6(526)] = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  var t6 = e;
  this._x0 = this[t6(486)] = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  switch (this._point) {
    case 3:
      zi(this, this[t6(486)], this._y1);
    case 2:
      this[t6(505)].lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this[t6(521)] === 1) && this[t6(505)].closePath(), this._line = 1 - this._line;
}, point: function(t6, n2) {
  var r2 = e;
  switch (t6 = +t6, n2 = +n2, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(t6, n2) : this[r2(505)].moveTo(t6, n2);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context[r2(638)]((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this[r2(627)]) / 6);
    default:
      zi(this, t6, n2);
      break;
  }
  this._x0 = this[r2(486)], this[r2(486)] = t6, this._y0 = this._y1, this._y1 = n2;
} };
function Bi(e6) {
  return new Z(e6);
}
function Vi(t6) {
  var n2 = e;
  this[n2(505)] = t6;
}
Vi.prototype = { areaStart: X, areaEnd: X, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  switch (this._point) {
    case 1:
      this._context.moveTo(this._x2, this._y2), this._context[t6(503)]();
      break;
    case 2:
      this._context.moveTo((this[t6(590)] + 2 * this[t6(531)]) / 3, (this._y2 + 2 * this._y3) / 3), this[t6(505)].lineTo((this[t6(531)] + 2 * this[t6(590)]) / 3, (this[t6(580)] + 2 * this._y2) / 3), this[t6(505)].closePath();
      break;
    case 3:
      this.point(this._x2, this._y2), this[t6(524)](this[t6(531)], this._y3), this.point(this._x4, this._y4);
      break;
  }
}, point: function(t6, n2) {
  var r2 = e;
  switch (t6 = +t6, n2 = +n2, this[r2(521)]) {
    case 0:
      this._point = 1, this._x2 = t6, this._y2 = n2;
      break;
    case 1:
      this._point = 2, this._x3 = t6, this._y3 = n2;
      break;
    case 2:
      this[r2(521)] = 3, this._x4 = t6, this._y4 = n2, this._context.moveTo((this._x0 + 4 * this[r2(486)] + t6) / 6, (this._y0 + 4 * this._y1 + n2) / 6);
      break;
    default:
      zi(this, t6, n2);
      break;
  }
  this[r2(646)] = this._x1, this._x1 = t6, this._y0 = this[r2(627)], this._y1 = n2;
} };
function Hi(e6) {
  return new Vi(e6);
}
function Ui(e6) {
  this._context = e6;
}
Ui.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  var t6 = e;
  this[t6(646)] = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  (this[t6(526)] || this[t6(526)] !== 0 && this._point === 3) && this._context.closePath(), this[t6(526)] = 1 - this._line;
}, point: function(t6, n2) {
  var r2 = e;
  switch (t6 = +t6, n2 = +n2, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var i2 = (this._x0 + 4 * this._x1 + t6) / 6, a2 = (this._y0 + 4 * this[r2(627)] + n2) / 6;
      this._line ? this._context.lineTo(i2, a2) : this._context.moveTo(i2, a2);
      break;
    case 3:
      this._point = 4;
    default:
      zi(this, t6, n2);
      break;
  }
  this._x0 = this._x1, this._x1 = t6, this._y0 = this._y1, this._y1 = n2;
} };
function Wi(e6) {
  return new Ui(e6);
}
function Gi(e6, t6) {
  this._basis = new Z(e6), this._beta = t6;
}
Gi.prototype = { lineStart: function() {
  this._x = [], this._y = [], this._basis.lineStart();
}, lineEnd: function() {
  var t6 = e, n2 = this._x, r2 = this._y, i2 = n2.length - 1;
  if (i2 > 0) for (var a2 = n2[0], o2 = r2[0], s2 = n2[i2] - a2, c2 = r2[i2] - o2, l2 = -1, u2; ++l2 <= i2; ) u2 = l2 / i2, this._basis.point(this._beta * n2[l2] + (1 - this._beta) * (a2 + u2 * s2), this._beta * r2[l2] + (1 - this._beta) * (o2 + u2 * c2));
  this._x = this._y = null, this[t6(513)].lineEnd();
}, point: function(e6, t6) {
  this._x.push(+e6), this._y.push(+t6);
} };
var Ki = (function t2(n2) {
  var r2 = e;
  function i2(e6) {
    return n2 === 1 ? new Z(e6) : new Gi(e6, n2);
  }
  return i2[r2(594)] = function(e6) {
    return t2(+e6);
  }, i2;
})(0.85);
function qi(t6, n2, r2) {
  var i2 = e;
  t6._context.bezierCurveTo(t6[i2(486)] + t6._k * (t6[i2(590)] - t6[i2(646)]), t6._y1 + t6._k * (t6._y2 - t6[i2(619)]), t6._x2 + t6._k * (t6[i2(486)] - n2), t6._y2 + t6._k * (t6._y1 - r2), t6._x2, t6._y2);
}
function Ji(e6, t6) {
  this._context = e6, this._k = (1 - t6) / 6;
}
Ji[e(485)] = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  var t6 = e;
  this._x0 = this._x1 = this[t6(590)] = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      qi(this, this._x1, this._y1);
      break;
  }
  (this[t6(526)] || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t6, n2) {
  var r2 = e;
  switch (t6 = +t6, n2 = +n2, this[r2(521)]) {
    case 0:
      this[r2(521)] = 1, this._line ? this._context.lineTo(t6, n2) : this._context.moveTo(t6, n2);
      break;
    case 1:
      this._point = 2, this._x1 = t6, this[r2(627)] = n2;
      break;
    case 2:
      this[r2(521)] = 3;
    default:
      qi(this, t6, n2);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this[r2(590)] = t6, this._y0 = this[r2(627)], this._y1 = this._y2, this._y2 = n2;
} };
var Yi = (function t3(n2) {
  var r2 = e;
  function i2(e6) {
    return new Ji(e6, n2);
  }
  return i2[r2(527)] = function(e6) {
    return t3(+e6);
  }, i2;
})(0);
function Xi(t6, n2) {
  var r2 = e;
  this[r2(505)] = t6, this._k = (1 - n2) / 6;
}
Xi.prototype = { areaStart: X, areaEnd: X, lineStart: function() {
  var t6 = e;
  this[t6(646)] = this._x1 = this[t6(590)] = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  switch (this._point) {
    case 1:
      this._context.moveTo(this._x3, this._y3), this._context[t6(503)]();
      break;
    case 2:
      this._context.lineTo(this._x3, this._y3), this._context.closePath();
      break;
    case 3:
      this.point(this[t6(531)], this._y3), this[t6(524)](this._x4, this._y4), this[t6(524)](this._x5, this._y5);
      break;
  }
}, point: function(e6, t6) {
  switch (e6 = +e6, t6 = +t6, this._point) {
    case 0:
      this._point = 1, this._x3 = e6, this._y3 = t6;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = e6, this._y4 = t6);
      break;
    case 2:
      this._point = 3, this._x5 = e6, this._y5 = t6;
      break;
    default:
      qi(this, e6, t6);
      break;
  }
  this._x0 = this._x1, this._x1 = this._x2, this._x2 = e6, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t6;
} };
var Zi = (function t4(n2) {
  var r2 = e;
  function i2(e6) {
    return new Xi(e6, n2);
  }
  return i2[r2(527)] = function(e6) {
    return t4(+e6);
  }, i2;
})(0);
function Qi(t6, n2) {
  var r2 = e;
  this[r2(505)] = t6, this._k = (1 - n2) / 6;
}
Qi.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  (this._line || this[t6(526)] !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(t6, n2) {
  var r2 = e;
  switch (t6 = +t6, n2 = +n2, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._line ? this._context[r2(638)](this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
      break;
    case 3:
      this._point = 4;
    default:
      qi(this, t6, n2);
      break;
  }
  this._x0 = this._x1, this._x1 = this[r2(590)], this._x2 = t6, this._y0 = this._y1, this[r2(627)] = this[r2(522)], this._y2 = n2;
} };
var $i = (function e3(t6) {
  function n2(e6) {
    return new Qi(e6, t6);
  }
  return n2.tension = function(t7) {
    return e3(+t7);
  }, n2;
})(0);
function ea(t6, n2, r2) {
  var i2 = e, a2 = t6._x1, o2 = t6._y1, s2 = t6._x2, c2 = t6._y2;
  if (t6._l01_a > 1e-12) {
    var l2 = 2 * t6._l01_2a + 3 * t6._l01_a * t6._l12_a + t6[i2(586)], u2 = 3 * t6._l01_a * (t6._l01_a + t6._l12_a);
    a2 = (a2 * l2 - t6._x0 * t6._l12_2a + t6._x2 * t6._l01_2a) / u2, o2 = (o2 * l2 - t6._y0 * t6._l12_2a + t6._y2 * t6[i2(566)]) / u2;
  }
  if (t6._l23_a > 1e-12) {
    var d2 = 2 * t6[i2(553)] + 3 * t6[i2(571)] * t6._l12_a + t6._l12_2a, f2 = 3 * t6._l23_a * (t6._l23_a + t6._l12_a);
    s2 = (s2 * d2 + t6._x1 * t6._l23_2a - n2 * t6._l12_2a) / f2, c2 = (c2 * d2 + t6._y1 * t6._l23_2a - r2 * t6._l12_2a) / f2;
  }
  t6._context.bezierCurveTo(a2, o2, s2, c2, t6._x2, t6._y2);
}
function ta(e6, t6) {
  this._context = e6, this._alpha = t6;
}
ta.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  var t6 = e;
  this._x0 = this._x1 = this._x2 = this._y0 = this[t6(627)] = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this[t6(553)] = this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x2, this._y2);
      break;
    case 3:
      this.point(this._x2, this._y2);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context[t6(503)](), this[t6(526)] = 1 - this._line;
}, point: function(t6, n2) {
  var r2 = e;
  if (t6 = +t6, n2 = +n2, this._point) {
    var i2 = this._x2 - t6, a2 = this._y2 - n2;
    this._l23_a = Math.sqrt(this[r2(553)] = (i2 * i2 + a2 * a2) ** +this._alpha);
  }
  switch (this[r2(521)]) {
    case 0:
      this._point = 1, this._line ? this[r2(505)][r2(638)](t6, n2) : this._context.moveTo(t6, n2);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
    default:
      ea(this, t6, n2);
      break;
  }
  this._l01_a = this._l12_a, this._l12_a = this._l23_a, this[r2(566)] = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this[r2(590)] = t6, this[r2(619)] = this[r2(627)], this._y1 = this._y2, this._y2 = n2;
} };
var na = (function e4(t6) {
  function n2(e6) {
    return t6 ? new ta(e6, t6) : new Ji(e6, 0);
  }
  return n2.alpha = function(t7) {
    return e4(+t7);
  }, n2;
})(0.5);
function ra(t6, n2) {
  var r2 = e;
  this._context = t6, this[r2(496)] = n2;
}
ra.prototype = { areaStart: X, areaEnd: X, lineStart: function() {
  var t6 = e;
  this[t6(646)] = this[t6(486)] = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this[t6(564)] = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this[t6(521)] = 0;
}, lineEnd: function() {
  var t6 = e;
  switch (this._point) {
    case 1:
      this[t6(505)].moveTo(this._x3, this[t6(580)]), this[t6(505)].closePath();
      break;
    case 2:
      this._context.lineTo(this._x3, this._y3), this._context[t6(503)]();
      break;
    case 3:
      this.point(this._x3, this._y3), this.point(this[t6(516)], this._y4), this.point(this._x5, this._y5);
      break;
  }
}, point: function(t6, n2) {
  var r2 = e;
  if (t6 = +t6, n2 = +n2, this._point) {
    var i2 = this._x2 - t6, a2 = this._y2 - n2;
    this._l23_a = Math.sqrt(this._l23_2a = (i2 * i2 + a2 * a2) ** +this._alpha);
  }
  switch (this[r2(521)]) {
    case 0:
      this._point = 1, this._x3 = t6, this._y3 = n2;
      break;
    case 1:
      this._point = 2, this._context.moveTo(this._x4 = t6, this._y4 = n2);
      break;
    case 2:
      this._point = 3, this._x5 = t6, this[r2(617)] = n2;
      break;
    default:
      ea(this, t6, n2);
      break;
  }
  this[r2(564)] = this[r2(632)], this._l12_a = this._l23_a, this._l01_2a = this[r2(586)], this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this[r2(590)], this._x2 = t6, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n2;
} };
var ia = (function t5(n2) {
  var r2 = e;
  function i2(e6) {
    return n2 ? new ra(e6, n2) : new Xi(e6, 0);
  }
  return i2[r2(545)] = function(e6) {
    return t5(+e6);
  }, i2;
})(0.5);
function aa(e6, t6) {
  this._context = e6, this._alpha = t6;
}
aa.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  var t6 = e;
  this._x0 = this._x1 = this._x2 = this[t6(619)] = this[t6(627)] = this._y2 = NaN, this[t6(564)] = this[t6(632)] = this[t6(571)] = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  (this[t6(526)] || this._line !== 0 && this._point === 3) && this._context.closePath(), this[t6(526)] = 1 - this[t6(526)];
}, point: function(t6, n2) {
  var r2 = e;
  if (t6 = +t6, n2 = +n2, this[r2(521)]) {
    var i2 = this._x2 - t6, a2 = this._y2 - n2;
    this[r2(571)] = Math[r2(576)](this._l23_2a = (i2 * i2 + a2 * a2) ** +this._alpha);
  }
  switch (this._point) {
    case 0:
      this[r2(521)] = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this[r2(526)] ? this[r2(505)][r2(638)](this._x2, this._y2) : this[r2(505)].moveTo(this._x2, this._y2);
      break;
    case 3:
      this[r2(521)] = 4;
    default:
      ea(this, t6, n2);
      break;
  }
  this[r2(564)] = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this[r2(486)], this[r2(486)] = this._x2, this[r2(590)] = t6, this[r2(619)] = this[r2(627)], this._y1 = this._y2, this._y2 = n2;
} };
var oa = (function e5(t6) {
  function n2(e6) {
    return t6 ? new aa(e6, t6) : new Qi(e6, 0);
  }
  return n2.alpha = function(t7) {
    return e5(+t7);
  }, n2;
})(0.5);
function sa(t6) {
  var n2 = e;
  this[n2(505)] = t6;
}
sa.prototype = { areaStart: X, areaEnd: X, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(t6, n2) {
  var r2 = e;
  t6 = +t6, n2 = +n2, this._point ? this._context.lineTo(t6, n2) : (this._point = 1, this[r2(505)].moveTo(t6, n2));
} };
function ca(e6) {
  return new sa(e6);
}
function la(e6) {
  return e6 < 0 ? -1 : 1;
}
function ua(t6, n2, r2) {
  var i2 = e, a2 = t6._x1 - t6._x0, o2 = n2 - t6._x1, s2 = (t6[i2(627)] - t6[i2(619)]) / (a2 || o2 < 0 && -0), c2 = (r2 - t6._y1) / (o2 || a2 < 0 && -0), l2 = (s2 * o2 + c2 * a2) / (a2 + o2);
  return (la(s2) + la(c2)) * Math[i2(535)](Math[i2(562)](s2), Math.abs(c2), 0.5 * Math.abs(l2)) || 0;
}
function da(t6, n2) {
  var r2 = e, i2 = t6[r2(486)] - t6._x0;
  return i2 ? (3 * (t6[r2(627)] - t6._y0) / i2 - n2) / 2 : n2;
}
function fa(t6, n2, r2) {
  var i2 = e, a2 = t6._x0, o2 = t6[i2(619)], s2 = t6._x1, c2 = t6._y1, l2 = (s2 - a2) / 3;
  t6._context.bezierCurveTo(a2 + l2, o2 + l2 * n2, s2 - l2, c2 - l2 * r2, s2, c2);
}
function pa(t6) {
  var n2 = e;
  this[n2(505)] = t6;
}
pa.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  var t6 = e;
  this[t6(646)] = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  switch (this._point) {
    case 2:
      this._context.lineTo(this[t6(486)], this._y1);
      break;
    case 3:
      fa(this, this._t0, da(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this[t6(505)].closePath(), this._line = 1 - this._line;
}, point: function(t6, n2) {
  var r2 = e, i2 = NaN;
  if (t6 = +t6, n2 = +n2, !(t6 === this._x1 && n2 === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this[r2(526)] ? this._context.lineTo(t6, n2) : this._context.moveTo(t6, n2);
        break;
      case 1:
        this[r2(521)] = 2;
        break;
      case 2:
        this._point = 3, fa(this, da(this, i2 = ua(this, t6, n2)), i2);
        break;
      default:
        fa(this, this[r2(557)], i2 = ua(this, t6, n2));
        break;
    }
    this[r2(646)] = this._x1, this._x1 = t6, this._y0 = this._y1, this._y1 = n2, this._t0 = i2;
  }
} };
function ma(e6) {
  this._context = new ha(e6);
}
(ma.prototype = Object[e(573)](pa.prototype)).point = function(e6, t6) {
  pa.prototype.point.call(this, t6, e6);
};
function ha(e6) {
  this._context = e6;
}
ha.prototype = { moveTo: function(t6, n2) {
  var r2 = e;
  this._context[r2(568)](n2, t6);
}, closePath: function() {
  var t6 = e;
  this._context[t6(503)]();
}, lineTo: function(e6, t6) {
  this._context.lineTo(t6, e6);
}, bezierCurveTo: function(t6, n2, r2, i2, a2, o2) {
  var s2 = e;
  this._context[s2(499)](n2, t6, i2, r2, o2, a2);
} };
function ga(e6) {
  return new pa(e6);
}
function _a(e6) {
  return new ma(e6);
}
function va(e6) {
  this._context = e6;
}
va.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var t6 = e, n2 = this._x, r2 = this._y, i2 = n2[t6(546)];
  if (i2) if (this._line ? this._context.lineTo(n2[0], r2[0]) : this._context.moveTo(n2[0], r2[0]), i2 === 2) this._context.lineTo(n2[1], r2[1]);
  else for (var a2 = ya(n2), o2 = ya(r2), s2 = 0, c2 = 1; c2 < i2; ++s2, ++c2) this._context.bezierCurveTo(a2[0][s2], o2[0][s2], a2[1][s2], o2[1][s2], n2[c2], r2[c2]);
  (this._line || this[t6(526)] !== 0 && i2 === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e6, t6) {
  this._x.push(+e6), this._y.push(+t6);
} };
function ya(e6) {
  var t6, n2 = e6.length - 1, r2, i2 = Array(n2), a2 = Array(n2), o2 = Array(n2);
  for (i2[0] = 0, a2[0] = 2, o2[0] = e6[0] + 2 * e6[1], t6 = 1; t6 < n2 - 1; ++t6) i2[t6] = 1, a2[t6] = 4, o2[t6] = 4 * e6[t6] + 2 * e6[t6 + 1];
  for (i2[n2 - 1] = 2, a2[n2 - 1] = 7, o2[n2 - 1] = 8 * e6[n2 - 1] + e6[n2], t6 = 1; t6 < n2; ++t6) r2 = i2[t6] / a2[t6 - 1], a2[t6] -= r2, o2[t6] -= r2 * o2[t6 - 1];
  for (i2[n2 - 1] = o2[n2 - 1] / a2[n2 - 1], t6 = n2 - 2; t6 >= 0; --t6) i2[t6] = (o2[t6] - i2[t6 + 1]) / a2[t6];
  for (a2[n2 - 1] = (e6[n2] + i2[n2 - 1]) / 2, t6 = 0; t6 < n2 - 1; ++t6) a2[t6] = 2 * e6[t6 + 1] - i2[t6 + 1];
  return [i2, a2];
}
function ba(e6) {
  return new va(e6);
}
function Q(e6, t6) {
  this._context = e6, this._t = t6;
}
Q.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  var t6 = e;
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this[t6(526)] !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(t6, n2) {
  var r2 = e;
  switch (t6 = +t6, n2 = +n2, this._point) {
    case 0:
      this._point = 1, this[r2(526)] ? this._context.lineTo(t6, n2) : this._context[r2(568)](t6, n2);
      break;
    case 1:
      this[r2(521)] = 2;
    default:
      if (this._t <= 0) this[r2(505)].lineTo(this._x, n2), this._context.lineTo(t6, n2);
      else {
        var i2 = this._x * (1 - this._t) + t6 * this._t;
        this[r2(505)].lineTo(i2, this._y), this._context[r2(638)](i2, n2);
      }
      break;
  }
  this._x = t6, this._y = n2;
} };
function xa(e6) {
  return new Q(e6, 0.5);
}
function Sa(e6) {
  return new Q(e6, 0);
}
function Ca(e6) {
  return new Q(e6, 1);
}
function $(e6, t6, n2) {
  this.k = e6, this.x = t6, this.y = n2;
}
$.prototype = { constructor: $, scale: function(e6) {
  return e6 === 1 ? this : new $(this.k * e6, this.x, this.y);
}, translate: function(e6, t6) {
  return e6 === 0 & t6 === 0 ? this : new $(this.k, this.x + this.k * e6, this.y + this.k * t6);
}, apply: function(e6) {
  return [e6[0] * this.k + this.x, e6[1] * this.k + this.y];
}, applyX: function(e6) {
  return e6 * this.k + this.x;
}, applyY: function(e6) {
  return e6 * this.k + this.y;
}, invert: function(e6) {
  return [(e6[0] - this.x) / this.k, (e6[1] - this.y) / this.k];
}, invertX: function(e6) {
  return (e6 - this.x) / this.k;
}, invertY: function(e6) {
  return (e6 - this.y) / this.k;
}, rescaleX: function(t6) {
  var n2 = e;
  return t6.copy().domain(t6.range()[n2(584)](this.invertX, this).map(t6[n2(549)], t6));
}, rescaleY: function(t6) {
  var n2 = e;
  return t6.copy().domain(t6.range().map(this[n2(605)], this).map(t6[n2(549)], t6));
}, toString: function() {
  return e(519) + this.x + `,` + this.y + `) scale(` + this.k + `)`;
} };
var wa = new $(1, 0, 0);
Ta.prototype = $.prototype;
function Ta(e6) {
  for (; !e6.__zoom; ) if (!(e6 = e6.parentNode)) return wa;
  return e6.__zoom;
}
export {
  Ei as $,
  Sa as A,
  _a as B,
  $i as C,
  ba as D,
  Zt as E,
  N as F,
  fi as G,
  ga as H,
  Fi as I,
  pn as J,
  n as K,
  Mt as L,
  hn as M,
  xi as N,
  Si as O,
  bi as P,
  Ca as Q,
  Ni as R,
  Wi as S,
  ni as T,
  gn as U,
  s as V,
  oa as W,
  xn as X,
  Ci as Y,
  Oi as Z,
  E as _,
  ji as a,
  ki as b,
  Zi as c,
  Bi as d,
  xa as et,
  Ii as f,
  Ri as g,
  Mi as h,
  Di as i,
  Ti as j,
  ca as k,
  Yi as l,
  Pt as m,
  M as n,
  Hi as nt,
  Ai as o,
  Li as p,
  ia as q,
  w as r,
  Ft as s,
  na as t,
  wi as tt,
  un as u,
  L as v,
  Y as w,
  Ki as x,
  D as y,
  h as z
};
