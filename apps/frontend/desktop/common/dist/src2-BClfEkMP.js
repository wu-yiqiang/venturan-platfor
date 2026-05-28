import { a as e, o as t, r as n, t as r } from "./chunk-DeXYQlWK.js";
var i = $;
(function(e3, t2) {
  for (var n2 = $, r2 = e3(); ; ) try {
    if (-parseInt(n2(659)) / 1 + -parseInt(n2(904)) / 2 * (parseInt(n2(1450)) / 3) + -parseInt(n2(1416)) / 4 * (parseInt(n2(649)) / 5) + -parseInt(n2(406)) / 6 + -parseInt(n2(1297)) / 7 + -parseInt(n2(511)) / 8 + parseInt(n2(966)) / 9 === t2) break;
    r2.push(r2.shift());
  } catch {
    r2.push(r2.shift());
  }
})(Z, 911324);
var a = e((e3, t2) => {
  var n2 = void 0;
  t2.exports = function(e4) {
    return e4 !== n2 && e4 !== null;
  };
}), o = e((e3, t2) => {
  var n2 = $, r2 = a(), i2 = { object: true, function: true, undefined: true };
  t2[n2(952)] = function(e4) {
    return r2(e4) ? hasOwnProperty.call(i2, typeof e4) : false;
  };
}), s = e((e3, t2) => {
  var n2 = o();
  t2.exports = function(e4) {
    var t3 = $;
    if (!n2(e4)) return false;
    try {
      return e4[t3(607)] ? e4.constructor.prototype === e4 : false;
    } catch {
      return false;
    }
  };
}), c = e((e3, t2) => {
  var n2 = s();
  t2.exports = function(e4) {
    var t3 = $;
    if (typeof e4 != `function` || !hasOwnProperty[t3(906)](e4, `length`)) return false;
    try {
      if (typeof e4[t3(587)] != t3(586) || typeof e4.call != `function` || typeof e4.apply != t3(799)) return false;
    } catch {
      return false;
    }
    return !n2(e4);
  };
}), l = e((e3, t2) => {
  var n2 = $, r2 = c(), i2 = /^\s*class[\s{/}]/, a2 = Function.prototype[n2(1200)];
  t2.exports = function(e4) {
    return !(!r2(e4) || i2.test(a2.call(e4)));
  };
}), u = e((e3, t2) => {
  t2.exports = function() {
    var e4 = $, t3 = Object.assign, n2;
    return typeof t3 == `function` ? (n2 = { foo: e4(859) }, t3(n2, { bar: `dwa` }, { trzy: `trzy` }), n2[e4(1040)] + n2.bar + n2.trzy === e4(626)) : false;
  };
}), d = e((e3, t2) => {
  t2.exports = function() {
    try {
      return true;
    } catch {
      return false;
    }
  };
}), f = e((e3, t2) => {
  t2.exports = function() {
  };
}), p = e((e3, t2) => {
  var n2 = f()();
  t2.exports = function(e4) {
    return e4 !== n2 && e4 !== null;
  };
}), m = e((e3, t2) => {
  var n2 = $, r2 = p(), i2 = Object[n2(735)];
  t2.exports = function(e4) {
    return i2(r2(e4) ? Object(e4) : e4);
  };
}), h = e((e3, t2) => {
  var n2 = $;
  t2.exports = d()() ? Object[n2(735)] : m();
}), g = e((e3, t2) => {
  var n2 = p();
  t2.exports = function(e4) {
    if (!n2(e4)) throw TypeError(`Cannot use null or undefined`);
    return e4;
  };
}), _ = e((e3, t2) => {
  var n2 = h(), r2 = g(), i2 = Math.max;
  t2.exports = function(e4, t3) {
    var a2, o2, s2 = i2(arguments.length, 2), c2;
    for (e4 = Object(r2(e4)), c2 = function(n3) {
      try {
        e4[n3] = t3[n3];
      } catch (e5) {
        a2 || (a2 = e5);
      }
    }, o2 = 1; o2 < s2; ++o2) t3 = arguments[o2], n2(t3).forEach(c2);
    if (a2 !== void 0) throw a2;
    return e4;
  };
}), v = e((e3, t2) => {
  var n2 = $;
  t2.exports = u()() ? Object[n2(1164)] : _();
}), y = e((e3, t2) => {
  var n2 = p(), r2 = Array.prototype.forEach, i2 = Object.create, a2 = function(e4, t3) {
    for (var n3 in e4) t3[n3] = e4[n3];
  };
  t2.exports = function(e4) {
    var t3 = $, o2 = i2(null);
    return r2[t3(906)](arguments, function(e5) {
      n2(e5) && a2(Object(e5), o2);
    }), o2;
  };
}), b = e((e3, t2) => {
  var n2 = `razdwatrzy`;
  t2.exports = function() {
    var e4 = $;
    return typeof n2.contains == `function` ? n2.contains(e4(1422)) === true && n2.contains(`foo`) === false : false;
  };
}), x = e((e3, t2) => {
  var n2 = $, r2 = String.prototype[n2(755)];
  t2.exports = function(e4) {
    return r2[n2(906)](this, e4, arguments[1]) > -1;
  };
}), S = e((e3, t2) => {
  t2.exports = b()() ? String.prototype.contains : x();
}), C = e((e3, t2) => {
  var n2 = a(), r2 = l(), i2 = v(), o2 = y(), s2 = S(), c2 = t2.exports = function(e4, t3) {
    var r3 = $, a2, c3, l2, u2, d2;
    return arguments.length < 2 || typeof e4 != r3(784) ? (u2 = t3, t3 = e4, e4 = null) : u2 = arguments[2], n2(e4) ? (a2 = s2.call(e4, `c`), c3 = s2.call(e4, `e`), l2 = s2.call(e4, `w`)) : (a2 = l2 = true, c3 = false), d2 = { value: t3, configurable: a2, enumerable: c3, writable: l2 }, u2 ? i2(o2(u2), d2) : d2;
  };
  c2.gs = function(e4, t3, a2) {
    var c3 = $, l2, u2, d2, f2;
    return typeof e4 == c3(784) ? d2 = arguments[3] : (d2 = a2, a2 = t3, t3 = e4, e4 = null), n2(t3) ? r2(t3) ? n2(a2) ? r2(a2) || (d2 = a2, a2 = void 0) : a2 = void 0 : (d2 = t3, t3 = a2 = void 0) : t3 = void 0, n2(e4) ? (l2 = s2.call(e4, `c`), u2 = s2.call(e4, `e`)) : (l2 = true, u2 = false), f2 = { get: t3, set: a2, configurable: l2, enumerable: u2 }, d2 ? i2(o2(d2), f2) : f2;
  };
}), w = e((e3, t2) => {
  t2.exports = function(e4) {
    if (typeof e4 != `function`) throw TypeError(e4 + ` is not a function`);
    return e4;
  };
}), T = e((e3, t2) => {
  var n2 = $, r2 = C(), i2 = w(), a2 = Function.prototype[n2(1445)], o2 = Function.prototype.call, s2 = Object[n2(896)], c2 = Object.defineProperty, l2 = Object.defineProperties, u2 = Object.prototype.hasOwnProperty, d2 = { configurable: true, enumerable: false, writable: true }, f2 = function(e4, t3) {
    var r3 = n2, a3;
    return i2(t3), u2[r3(906)](this, r3(491)) ? a3 = this.__ee__ : (a3 = d2.value = s2(null), c2(this, `__ee__`, d2), d2.value = null), a3[e4] ? typeof a3[e4] == `object` ? a3[e4].push(t3) : a3[e4] = [a3[e4], t3] : a3[e4] = t3, this;
  }, p2 = function(e4, t3) {
    var n3, r3;
    return i2(t3), r3 = this, f2.call(this, e4, n3 = function() {
      m2.call(r3, e4, n3), a2.call(t3, this, arguments);
    }), n3.__eeOnceListener__ = t3, this;
  }, m2 = function(e4, t3) {
    var r3 = n2, a3, o3, s3, c3;
    if (i2(t3), !u2.call(this, r3(491)) || (a3 = this.__ee__, !a3[e4])) return this;
    if (o3 = a3[e4], typeof o3 == `object`) for (c3 = 0; s3 = o3[c3]; ++c3) (s3 === t3 || s3[r3(825)] === t3) && (o3.length === 2 ? a3[e4] = o3[+!c3] : o3.splice(c3, 1));
    else (o3 === t3 || o3.__eeOnceListener__ === t3) && delete a3[e4];
    return this;
  }, h2 = function(e4) {
    var t3 = n2, r3, i3, s3, c3, l3;
    if (u2[t3(906)](this, `__ee__`) && (c3 = this[t3(491)][e4], c3)) if (typeof c3 == `object`) {
      for (i3 = arguments[t3(587)], l3 = Array(i3 - 1), r3 = 1; r3 < i3; ++r3) l3[r3 - 1] = arguments[r3];
      for (c3 = c3.slice(), r3 = 0; s3 = c3[r3]; ++r3) a2.call(s3, this, l3);
    } else switch (arguments[t3(587)]) {
      case 1:
        o2.call(c3, this);
        break;
      case 2:
        o2.call(c3, this, arguments[1]);
        break;
      case 3:
        o2.call(c3, this, arguments[1], arguments[2]);
        break;
      default:
        for (i3 = arguments.length, l3 = Array(i3 - 1), r3 = 1; r3 < i3; ++r3) l3[r3 - 1] = arguments[r3];
        a2.call(c3, this, l3);
    }
  }, g2 = { on: f2, once: p2, off: m2, emit: h2 }, _2 = { on: r2(f2), once: r2(p2), off: r2(m2), emit: r2(h2) }, v2 = l2({}, _2);
  t2.exports = e3 = function(e4) {
    return e4 == null ? s2(v2) : l2(Object(e4), _2);
  }, e3.methods = g2;
}), E = e((e3) => {
  var t2 = $;
  function n2(e4, t3) {
    return t3 === void 0 && (t3 = Object), t3 && typeof t3.freeze == `function` ? t3.freeze(e4) : e4;
  }
  var r2 = n2({ HTML: `text/html`, isHTML: function(e4) {
    return e4 === r2.HTML;
  }, XML_APPLICATION: t2(508), XML_TEXT: `text/xml`, XML_XHTML_APPLICATION: `application/xhtml+xml`, XML_SVG_IMAGE: `image/svg+xml` }), i2 = n2({ HTML: `http://www.w3.org/1999/xhtml`, isHTML: function(e4) {
    return e4 === i2.HTML;
  }, SVG: `http://www.w3.org/2000/svg`, XML: `http://www.w3.org/XML/1998/namespace`, XMLNS: t2(1069) });
  e3.freeze = n2, e3[t2(1188)] = r2, e3.NAMESPACE = i2;
}), D = e((e3) => {
  var t2 = $, n2 = E().NAMESPACE;
  function r2(e4) {
    return e4 !== ``;
  }
  function i2(e4) {
    var t3 = $;
    return e4 ? e4[t3(1152)](/[\t\n\f\r ]+/)[t3(795)](r2) : [];
  }
  function a2(e4, t3) {
    return e4[$(440)](t3) || (e4[t3] = true), e4;
  }
  function o2(e4) {
    var t3 = $;
    if (!e4) return [];
    var n3 = i2(e4);
    return Object[t3(735)](n3[t3(1300)](a2, {}));
  }
  function s2(e4) {
    return function(t3) {
      return e4 && e4.indexOf(t3) !== -1;
    };
  }
  function c2(e4, t3) {
    for (var n3 in e4) t3[n3] = e4[n3];
  }
  function l2(e4, t3) {
    var n3 = $, r3 = e4[n3(427)];
    if (!(r3 instanceof t3)) {
      let i3 = function() {
      };
      i3[n3(427)] = t3.prototype, i3 = new i3(), c2(r3, i3), e4.prototype = r3 = i3;
    }
    r3.constructor != e4 && (typeof e4 != `function` && console.error(`unknown Class:` + e4), r3.constructor = e4);
  }
  var u2 = {}, d2 = u2.ELEMENT_NODE = 1, f2 = u2[t2(1249)] = 2, p2 = u2.TEXT_NODE = 3, m2 = u2.CDATA_SECTION_NODE = 4, h2 = u2[t2(455)] = 5, g2 = u2.ENTITY_NODE = 6, _2 = u2[t2(1089)] = 7, v2 = u2.COMMENT_NODE = 8, y2 = u2[t2(537)] = 9, b2 = u2.DOCUMENT_TYPE_NODE = 10, x2 = u2.DOCUMENT_FRAGMENT_NODE = 11, S2 = u2.NOTATION_NODE = 12, C2 = {}, w2 = {};
  C2[t2(489)] = (w2[1] = t2(601), 1), C2[t2(845)] = (w2[2] = `DOMString size error`, 2);
  var T2 = C2.HIERARCHY_REQUEST_ERR = (w2[3] = `Hierarchy request error`, 3);
  C2[t2(487)] = (w2[4] = `Wrong document`, 4), C2.INVALID_CHARACTER_ERR = (w2[5] = `Invalid character`, 5), C2[t2(465)] = (w2[6] = `No data allowed`, 6), C2.NO_MODIFICATION_ALLOWED_ERR = (w2[7] = `No modification allowed`, 7);
  var D2 = C2.NOT_FOUND_ERR = (w2[8] = `Not found`, 8);
  C2.NOT_SUPPORTED_ERR = (w2[9] = `Not supported`, 9);
  var O2 = C2.INUSE_ATTRIBUTE_ERR = (w2[10] = `Attribute in use`, 10);
  C2.INVALID_STATE_ERR = (w2[11] = t2(660), 11), C2.SYNTAX_ERR = (w2[12] = `Syntax error`, 12), C2.INVALID_MODIFICATION_ERR = (w2[13] = `Invalid modification`, 13), C2.NAMESPACE_ERR = (w2[14] = `Invalid namespace`, 14), C2.INVALID_ACCESS_ERR = (w2[15] = `Invalid access`, 15);
  function k2(e4, n3) {
    var r3 = t2;
    if (n3 instanceof Error) var i3 = n3;
    else i3 = this, Error[r3(906)](this, w2[e4]), this[r3(690)] = w2[e4], Error.captureStackTrace && Error.captureStackTrace(this, k2);
    return i3[r3(597)] = e4, n3 && (this.message = this.message + `: ` + n3), i3;
  }
  k2.prototype = Error.prototype, c2(C2, k2);
  function A2() {
  }
  A2.prototype = { length: 0, item: function(e4) {
    return this[e4] || null;
  }, toString: function(e4, t3) {
    for (var n3 = [], r3 = 0; r3 < this.length; r3++) q2(this[r3], n3, e4, t3);
    return n3.join(``);
  } };
  function j2(e4, t3) {
    this._node = e4, this._refresh = t3, M2(this);
  }
  function M2(e4) {
    var n3 = t2, r3 = e4._node._inc || e4._node[n3(1247)]._inc;
    if (e4[n3(1464)] != r3) {
      var i3 = e4._refresh(e4._node);
      Y2(e4, `length`, i3.length), c2(i3, e4), e4[n3(1464)] = r3;
    }
  }
  j2[t2(427)].item = function(e4) {
    return M2(this), this[e4];
  }, l2(j2, A2);
  function N2() {
  }
  function ee2(e4, t3) {
    for (var n3 = e4.length; n3--; ) if (e4[n3] === t3) return n3;
  }
  function P2(e4, n3, r3, i3) {
    var a3 = t2;
    if (i3 ? n3[ee2(n3, i3)] = r3 : n3[n3.length++] = r3, e4) {
      r3.ownerElement = e4;
      var o3 = e4[a3(1247)];
      o3 && (i3 && ie2(o3, e4, i3), R2(o3, e4, r3));
    }
  }
  function F2(e4, n3, r3) {
    var i3 = t2, a3 = ee2(n3, r3);
    if (a3 >= 0) {
      for (var o3 = n3.length - 1; a3 < o3; ) n3[a3] = n3[++a3];
      if (n3.length = o3, e4) {
        var s3 = e4[i3(1247)];
        s3 && (ie2(s3, e4, r3), r3.ownerElement = null);
      }
    } else throw k2(D2, Error(e4.tagName + `@` + r3));
  }
  N2.prototype = { length: 0, item: A2.prototype.item, getNamedItem: function(e4) {
    for (var t3 = this.length; t3--; ) {
      var n3 = this[t3];
      if (n3.nodeName == e4) return n3;
    }
  }, setNamedItem: function(e4) {
    var n3 = t2, r3 = e4[n3(1433)];
    if (r3 && r3 != this[n3(1054)]) throw new k2(O2);
    var i3 = this.getNamedItem(e4[n3(826)]);
    return P2(this._ownerElement, this, e4, i3), i3;
  }, setNamedItemNS: function(e4) {
    var n3 = e4[t2(1433)], r3;
    if (n3 && n3 != this._ownerElement) throw new k2(O2);
    return r3 = this.getNamedItemNS(e4.namespaceURI, e4.localName), P2(this._ownerElement, this, e4, r3), r3;
  }, removeNamedItem: function(e4) {
    var t3 = this.getNamedItem(e4);
    return F2(this._ownerElement, this, t3), t3;
  }, removeNamedItemNS: function(e4, n3) {
    var r3 = t2, i3 = this.getNamedItemNS(e4, n3);
    return F2(this[r3(1054)], this, i3), i3;
  }, getNamedItemNS: function(e4, n3) {
    for (var r3 = t2, i3 = this[r3(587)]; i3--; ) {
      var a3 = this[i3];
      if (a3.localName == n3 && a3.namespaceURI == e4) return a3;
    }
    return null;
  } };
  function I2() {
  }
  I2.prototype = { hasFeature: function(e4, t3) {
    return true;
  }, createDocument: function(e4, n3, r3) {
    var i3 = t2, a3 = new re2();
    if (a3.implementation = this, a3[i3(709)] = new A2(), a3.doctype = r3 || null, r3 && a3.appendChild(r3), n3) {
      var o3 = a3.createElementNS(e4, n3);
      a3.appendChild(o3);
    }
    return a3;
  }, createDocumentType: function(e4, t3, n3) {
    var r3 = new pe2();
    return r3.name = e4, r3.nodeName = e4, r3.publicId = t3 || ``, r3.systemId = n3 || ``, r3;
  } };
  function L2() {
  }
  L2.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function(e4, t3) {
    return z2(this, e4, t3);
  }, replaceChild: function(e4, n3) {
    var r3 = t2;
    this.insertBefore(e4, n3), n3 && this[r3(1413)](n3);
  }, removeChild: function(e4) {
    return oe2(this, e4);
  }, appendChild: function(e4) {
    return this.insertBefore(e4, null);
  }, hasChildNodes: function() {
    var e4 = t2;
    return this[e4(663)] != null;
  }, cloneNode: function(e4) {
    return J2(this.ownerDocument || this, this, e4);
  }, normalize: function() {
    for (var e4 = t2, n3 = this.firstChild; n3; ) {
      var r3 = n3.nextSibling;
      r3 && r3.nodeType == p2 && n3[e4(387)] == p2 ? (this.removeChild(r3), n3.appendData(r3.data)) : (n3.normalize(), n3 = r3);
    }
  }, isSupported: function(e4, n3) {
    var r3 = t2;
    return this.ownerDocument.implementation[r3(1305)](e4, n3);
  }, hasAttributes: function() {
    return this.attributes.length > 0;
  }, lookupPrefix: function(e4) {
    for (var n3 = t2, r3 = this; r3; ) {
      var i3 = r3._nsMap;
      if (i3) {
        for (var a3 in i3) if (i3[a3] == e4) return a3;
      }
      r3 = r3[n3(387)] == f2 ? r3.ownerDocument : r3[n3(386)];
    }
    return null;
  }, lookupNamespaceURI: function(e4) {
    for (var n3 = t2, r3 = this; r3; ) {
      var i3 = r3._nsMap;
      if (i3 && e4 in i3) return i3[e4];
      r3 = r3.nodeType == f2 ? r3.ownerDocument : r3[n3(386)];
    }
    return null;
  }, isDefaultNamespace: function(e4) {
    return this.lookupPrefix(e4) == null;
  } };
  function te2(e4) {
    return e4 == `<` && `&lt;` || e4 == `>` && `&gt;` || e4 == `&` && t2(749) || e4 == `"` && `&quot;` || `&#` + e4.charCodeAt() + `;`;
  }
  c2(u2, L2), c2(u2, L2.prototype);
  function ne2(e4, t3) {
    if (t3(e4)) return true;
    if (e4 = e4.firstChild) do
      if (ne2(e4, t3)) return true;
    while (e4 = e4.nextSibling);
  }
  function re2() {
  }
  function R2(e4, r3, i3) {
    var a3 = t2;
    e4 && e4._inc++, i3.namespaceURI === n2[a3(1403)] && (r3._nsMap[i3.prefix ? i3.localName : ``] = i3[a3(1225)]);
  }
  function ie2(e4, t3, r3, i3) {
    e4 && e4._inc++, r3.namespaceURI === n2.XMLNS && delete t3._nsMap[r3.prefix ? r3.localName : ``];
  }
  function ae2(e4, n3, r3) {
    var i3 = t2;
    if (e4 && e4._inc) {
      e4._inc++;
      var a3 = n3[i3(709)];
      if (r3) a3[a3.length++] = r3;
      else {
        for (var o3 = n3.firstChild, s3 = 0; o3; ) a3[s3++] = o3, o3 = o3.nextSibling;
        a3.length = s3;
      }
    }
  }
  function oe2(e4, n3) {
    var r3 = t2, i3 = n3.previousSibling, a3 = n3.nextSibling;
    return i3 ? i3.nextSibling = a3 : e4[r3(663)] = a3, a3 ? a3[r3(757)] = i3 : e4.lastChild = i3, ae2(e4.ownerDocument, e4), n3;
  }
  function z2(e4, n3, r3) {
    var i3 = t2, a3 = n3.parentNode;
    if (a3 && a3.removeChild(n3), n3[i3(387)] === x2) {
      var o3 = n3.firstChild;
      if (o3 == null) return n3;
      var s3 = n3.lastChild;
    } else o3 = s3 = n3;
    var c3 = r3 ? r3.previousSibling : e4.lastChild;
    o3[i3(757)] = c3, s3.nextSibling = r3, c3 ? c3.nextSibling = o3 : e4.firstChild = o3, r3 == null ? e4.lastChild = s3 : r3.previousSibling = s3;
    do
      o3[i3(386)] = e4;
    while (o3 !== s3 && (o3 = o3.nextSibling));
    return ae2(e4.ownerDocument || e4, e4), n3.nodeType == x2 && (n3.firstChild = n3.lastChild = null), n3;
  }
  function se2(e4, n3) {
    var r3 = t2, i3 = n3.parentNode;
    if (i3) {
      var a3 = e4.lastChild;
      i3[r3(1413)](n3);
      var a3 = e4.lastChild;
    }
    var a3 = e4.lastChild;
    return n3[r3(386)] = e4, n3.previousSibling = a3, n3.nextSibling = null, a3 ? a3.nextSibling = n3 : e4.firstChild = n3, e4.lastChild = n3, ae2(e4.ownerDocument, e4, n3), n3;
  }
  re2.prototype = { nodeName: `#document`, nodeType: y2, doctype: null, documentElement: null, _inc: 1, insertBefore: function(e4, n3) {
    var r3 = t2;
    if (e4.nodeType == x2) {
      for (var i3 = e4[r3(663)]; i3; ) {
        var a3 = i3.nextSibling;
        this.insertBefore(i3, n3), i3 = a3;
      }
      return e4;
    }
    return this.documentElement == null && e4.nodeType == d2 && (this[r3(1482)] = e4), z2(this, e4, n3), e4.ownerDocument = this, e4;
  }, removeChild: function(e4) {
    var n3 = t2;
    return this.documentElement == e4 && (this[n3(1482)] = null), oe2(this, e4);
  }, importNode: function(e4, t3) {
    return _e2(this, e4, t3);
  }, getElementById: function(e4) {
    var n3 = t2, r3 = null;
    return ne2(this[n3(1482)], function(t3) {
      var i3 = n3;
      if (t3.nodeType == d2 && t3[i3(763)](`id`) == e4) return r3 = t3, true;
    }), r3;
  }, getElementsByClassName: function(e4) {
    var t3 = o2(e4);
    return new j2(this, function(n3) {
      var r3 = [];
      return t3.length > 0 && ne2(n3.documentElement, function(i3) {
        var a3 = $;
        if (i3 !== n3 && i3.nodeType === d2) {
          var c3 = i3.getAttribute(a3(1462));
          if (c3) {
            var l3 = e4 === c3;
            if (!l3) {
              var u3 = o2(c3);
              l3 = t3.every(s2(u3));
            }
            l3 && r3[a3(1386)](i3);
          }
        }
      }), r3;
    });
  }, createElement: function(e4) {
    var n3 = t2, r3 = new ce2();
    r3.ownerDocument = this, r3.nodeName = e4, r3[n3(832)] = e4, r3.localName = e4, r3[n3(709)] = new A2();
    var i3 = r3.attributes = new N2();
    return i3[n3(1054)] = r3, r3;
  }, createDocumentFragment: function() {
    var e4 = t2, n3 = new he2();
    return n3[e4(1247)] = this, n3.childNodes = new A2(), n3;
  }, createTextNode: function(e4) {
    var n3 = t2, r3 = new de2();
    return r3[n3(1247)] = this, r3[n3(429)](e4), r3;
  }, createComment: function(e4) {
    var n3 = t2, r3 = new B2();
    return r3[n3(1247)] = this, r3.appendData(e4), r3;
  }, createCDATASection: function(e4) {
    var n3 = t2, r3 = new fe2();
    return r3.ownerDocument = this, r3[n3(429)](e4), r3;
  }, createProcessingInstruction: function(e4, n3) {
    var r3 = t2, i3 = new U2();
    return i3.ownerDocument = this, i3.tagName = i3.target = e4, i3[r3(1024)] = i3.data = n3, i3;
  }, createAttribute: function(e4) {
    var t3 = new le2();
    return t3.ownerDocument = this, t3.name = e4, t3.nodeName = e4, t3.localName = e4, t3.specified = true, t3;
  }, createEntityReference: function(e4) {
    var n3 = t2, r3 = new me2();
    return r3.ownerDocument = this, r3[n3(826)] = e4, r3;
  }, createElementNS: function(e4, n3) {
    var r3 = t2, i3 = new ce2(), a3 = n3.split(`:`), o3 = i3.attributes = new N2();
    return i3.childNodes = new A2(), i3.ownerDocument = this, i3[r3(826)] = n3, i3.tagName = n3, i3.namespaceURI = e4, a3.length == 2 ? (i3.prefix = a3[0], i3.localName = a3[1]) : i3.localName = n3, o3._ownerElement = i3, i3;
  }, createAttributeNS: function(e4, n3) {
    var r3 = t2, i3 = new le2(), a3 = n3[r3(1152)](`:`);
    return i3.ownerDocument = this, i3.nodeName = n3, i3.name = n3, i3.namespaceURI = e4, i3[r3(1082)] = true, a3[r3(587)] == 2 ? (i3.prefix = a3[0], i3.localName = a3[1]) : i3.localName = n3, i3;
  } }, l2(re2, L2);
  function ce2() {
    var e4 = t2;
    this[e4(1350)] = {};
  }
  ce2.prototype = { nodeType: d2, hasAttribute: function(e4) {
    return this.getAttributeNode(e4) != null;
  }, getAttribute: function(e4) {
    var t3 = this.getAttributeNode(e4);
    return t3 && t3.value || ``;
  }, getAttributeNode: function(e4) {
    return this.attributes.getNamedItem(e4);
  }, setAttribute: function(e4, n3) {
    var r3 = t2, i3 = this.ownerDocument.createAttribute(e4);
    i3.value = i3.nodeValue = `` + n3, this[r3(1104)](i3);
  }, removeAttribute: function(e4) {
    var t3 = this.getAttributeNode(e4);
    t3 && this.removeAttributeNode(t3);
  }, appendChild: function(e4) {
    return e4.nodeType === x2 ? this.insertBefore(e4, null) : se2(this, e4);
  }, setAttributeNode: function(e4) {
    var n3 = t2;
    return this.attributes[n3(392)](e4);
  }, setAttributeNodeNS: function(e4) {
    return this.attributes.setNamedItemNS(e4);
  }, removeAttributeNode: function(e4) {
    return this.attributes.removeNamedItem(e4.nodeName);
  }, removeAttributeNS: function(e4, t3) {
    var n3 = this.getAttributeNodeNS(e4, t3);
    n3 && this.removeAttributeNode(n3);
  }, hasAttributeNS: function(e4, t3) {
    return this.getAttributeNodeNS(e4, t3) != null;
  }, getAttributeNS: function(e4, t3) {
    var n3 = this.getAttributeNodeNS(e4, t3);
    return n3 && n3.value || ``;
  }, setAttributeNS: function(e4, n3, r3) {
    var i3 = t2, a3 = this.ownerDocument.createAttributeNS(e4, n3);
    a3.value = a3[i3(1024)] = `` + r3, this.setAttributeNode(a3);
  }, getAttributeNodeNS: function(e4, t3) {
    return this.attributes.getNamedItemNS(e4, t3);
  }, getElementsByTagName: function(e4) {
    return new j2(this, function(t3) {
      var n3 = [];
      return ne2(t3, function(r3) {
        r3 !== t3 && r3.nodeType == d2 && (e4 === `*` || r3.tagName == e4) && n3.push(r3);
      }), n3;
    });
  }, getElementsByTagNameNS: function(e4, t3) {
    return new j2(this, function(n3) {
      var r3 = [];
      return ne2(n3, function(i3) {
        var a3 = $;
        i3 !== n3 && i3.nodeType === d2 && (e4 === `*` || i3.namespaceURI === e4) && (t3 === `*` || i3[a3(1371)] == t3) && r3.push(i3);
      }), r3;
    });
  } }, re2[t2(427)].getElementsByTagName = ce2.prototype.getElementsByTagName, re2.prototype.getElementsByTagNameNS = ce2.prototype.getElementsByTagNameNS, l2(ce2, L2);
  function le2() {
  }
  le2.prototype.nodeType = f2, l2(le2, L2);
  function ue2() {
  }
  ue2.prototype = { data: ``, substringData: function(e4, n3) {
    var r3 = t2;
    return this[r3(1014)].substring(e4, e4 + n3);
  }, appendData: function(e4) {
    var n3 = t2;
    e4 = this.data + e4, this.nodeValue = this[n3(1014)] = e4, this.length = e4[n3(587)];
  }, insertData: function(e4, t3) {
    this.replaceData(e4, 0, t3);
  }, appendChild: function(e4) {
    throw Error(w2[T2]);
  }, deleteData: function(e4, t3) {
    this.replaceData(e4, t3, ``);
  }, replaceData: function(e4, t3, n3) {
    var r3 = this.data.substring(0, e4), i3 = this.data.substring(e4 + t3);
    n3 = r3 + n3 + i3, this.nodeValue = this.data = n3, this.length = n3.length;
  } }, l2(ue2, L2);
  function de2() {
  }
  de2.prototype = { nodeName: `#text`, nodeType: p2, splitText: function(e4) {
    var t3 = this.data, n3 = t3.substring(e4);
    t3 = t3.substring(0, e4), this.data = this.nodeValue = t3, this.length = t3.length;
    var r3 = this.ownerDocument.createTextNode(n3);
    return this.parentNode && this.parentNode.insertBefore(r3, this.nextSibling), r3;
  } }, l2(de2, ue2);
  function B2() {
  }
  B2.prototype = { nodeName: `#comment`, nodeType: v2 }, l2(B2, ue2);
  function fe2() {
  }
  fe2.prototype = { nodeName: `#cdata-section`, nodeType: m2 }, l2(fe2, ue2);
  function pe2() {
  }
  pe2.prototype[t2(387)] = b2, l2(pe2, L2);
  function V2() {
  }
  V2.prototype[t2(387)] = S2, l2(V2, L2);
  function H2() {
  }
  H2.prototype.nodeType = g2, l2(H2, L2);
  function me2() {
  }
  me2.prototype[t2(387)] = h2, l2(me2, L2);
  function he2() {
  }
  he2.prototype.nodeName = `#document-fragment`, he2.prototype.nodeType = x2, l2(he2, L2);
  function U2() {
  }
  U2.prototype.nodeType = _2, l2(U2, L2);
  function ge2() {
  }
  ge2.prototype.serializeToString = function(e4, n3, r3) {
    return W2[t2(906)](e4, n3, r3);
  }, L2.prototype.toString = W2;
  function W2(e4, t3) {
    var n3 = [], r3 = this.nodeType == 9 && this.documentElement || this, i3 = r3.prefix, a3 = r3.namespaceURI;
    if (a3 && i3 == null) {
      var i3 = r3.lookupPrefix(a3);
      if (i3 == null) var o3 = [{ namespace: a3, prefix: null }];
    }
    return q2(this, n3, e4, t3, o3), n3.join(``);
  }
  function G2(e4, t3, r3) {
    var i3 = e4.prefix || ``, a3 = e4.namespaceURI;
    if (!a3 || i3 === `xml` && a3 === n2.XML || a3 === n2.XMLNS) return false;
    for (var o3 = r3.length; o3--; ) {
      var s3 = r3[o3];
      if (s3.prefix === i3) return s3.namespace !== a3;
    }
    return true;
  }
  function K2(e4, n3, r3) {
    e4[t2(1386)](` `, n3, `="`, r3.replace(/[<&"]/g, te2), `"`);
  }
  function q2(e4, r3, i3, a3, o3) {
    var s3 = t2;
    if (o3 || (o3 = []), a3) if (e4 = a3(e4), e4) {
      if (typeof e4 == `string`) {
        r3[s3(1386)](e4);
        return;
      }
    } else return;
    switch (e4.nodeType) {
      case d2:
        var c3 = e4.attributes, l3 = c3.length, u3 = e4.firstChild, g3 = e4.tagName;
        i3 = n2.isHTML(e4[s3(534)]) || i3;
        var S3 = g3;
        if (!i3 && !e4.prefix && e4.namespaceURI) {
          for (var C3, w3 = 0; w3 < c3.length; w3++) if (c3.item(w3).name === `xmlns`) {
            C3 = c3.item(w3).value;
            break;
          }
          if (!C3) for (var T3 = o3[s3(587)] - 1; T3 >= 0; T3--) {
            var E2 = o3[T3];
            if (E2.prefix === `` && E2[s3(582)] === e4[s3(534)]) {
              C3 = E2.namespace;
              break;
            }
          }
          if (C3 !== e4.namespaceURI) for (var T3 = o3.length - 1; T3 >= 0; T3--) {
            var E2 = o3[T3];
            if (E2.namespace === e4.namespaceURI) {
              E2.prefix && (S3 = E2.prefix + `:` + g3);
              break;
            }
          }
        }
        r3.push(`<`, S3);
        for (var D3 = 0; D3 < l3; D3++) {
          var O3 = c3.item(D3);
          O3[s3(768)] == s3(1118) ? o3.push({ prefix: O3.localName, namespace: O3.value }) : O3.nodeName == `xmlns` && o3[s3(1386)]({ prefix: ``, namespace: O3.value });
        }
        for (var D3 = 0; D3 < l3; D3++) {
          var O3 = c3.item(D3);
          if (G2(O3, i3, o3)) {
            var k3 = O3.prefix || ``, A3 = O3.namespaceURI;
            K2(r3, k3 ? `xmlns:` + k3 : `xmlns`, A3), o3.push({ prefix: k3, namespace: A3 });
          }
          q2(O3, r3, i3, a3, o3);
        }
        if (g3 === S3 && G2(e4, i3, o3)) {
          var k3 = e4[s3(768)] || ``, A3 = e4[s3(534)];
          K2(r3, k3 ? `xmlns:` + k3 : s3(1118), A3), o3.push({ prefix: k3, namespace: A3 });
        }
        if (u3 || i3 && !/^(?:meta|link|img|br|hr|input)$/i[s3(744)](g3)) {
          if (r3.push(`>`), i3 && /^script$/i.test(g3)) for (; u3; ) u3[s3(1014)] ? r3.push(u3.data) : q2(u3, r3, i3, a3, o3[s3(1006)]()), u3 = u3.nextSibling;
          else for (; u3; ) q2(u3, r3, i3, a3, o3[s3(1006)]()), u3 = u3.nextSibling;
          r3.push(`</`, S3, `>`);
        } else r3.push(`/>`);
        return;
      case y2:
      case x2:
        for (var u3 = e4.firstChild; u3; ) q2(u3, r3, i3, a3, o3.slice()), u3 = u3.nextSibling;
        return;
      case f2:
        return K2(r3, e4.name, e4.value);
      case p2:
        return r3.push(e4.data.replace(/[<&]/g, te2).replace(/]]>/g, `]]&gt;`));
      case m2:
        return r3.push(`<![CDATA[`, e4.data, `]]>`);
      case v2:
        return r3.push(`<!--`, e4.data, `-->`);
      case b2:
        var j3 = e4.publicId, M3 = e4.systemId;
        if (r3.push(`<!DOCTYPE `, e4[s3(701)]), j3) r3[s3(1386)](` PUBLIC `, j3), M3 && M3 != `.` && r3[s3(1386)](` `, M3), r3.push(`>`);
        else if (M3 && M3 != `.`) r3.push(` SYSTEM `, M3, `>`);
        else {
          var N3 = e4.internalSubset;
          N3 && r3.push(` [`, N3, `]`), r3.push(`>`);
        }
        return;
      case _2:
        return r3.push(`<?`, e4.target, ` `, e4.data, `?>`);
      case h2:
        return r3.push(`&`, e4.nodeName, `;`);
      default:
        r3.push(`??`, e4[s3(826)]);
    }
  }
  function _e2(e4, n3, r3) {
    var i3 = t2, a3;
    switch (n3.nodeType) {
      case d2:
        a3 = n3[i3(1475)](false), a3.ownerDocument = e4;
      case x2:
        break;
      case f2:
        r3 = true;
        break;
    }
    if (a3 || (a3 = n3.cloneNode(false)), a3.ownerDocument = e4, a3.parentNode = null, r3) for (var o3 = n3.firstChild; o3; ) a3.appendChild(_e2(e4, o3, r3)), o3 = o3.nextSibling;
    return a3;
  }
  function J2(e4, t3, n3) {
    var r3 = new t3.constructor();
    for (var i3 in t3) {
      var a3 = t3[i3];
      typeof a3 != `object` && a3 != r3[i3] && (r3[i3] = a3);
    }
    switch (t3.childNodes && (r3.childNodes = new A2()), r3.ownerDocument = e4, r3.nodeType) {
      case d2:
        var o3 = t3.attributes, s3 = r3.attributes = new N2(), c3 = o3.length;
        s3._ownerElement = r3;
        for (var l3 = 0; l3 < c3; l3++) r3.setAttributeNode(J2(e4, o3.item(l3), true));
        break;
      case f2:
        n3 = true;
    }
    if (n3) for (var u3 = t3.firstChild; u3; ) r3.appendChild(J2(e4, u3, n3)), u3 = u3.nextSibling;
    return r3;
  }
  function Y2(e4, t3, n3) {
    e4[t3] = n3;
  }
  try {
    if (Object.defineProperty) {
      let e4 = function(n3) {
        var r3 = t2;
        switch (n3[r3(387)]) {
          case d2:
          case x2:
            var i3 = [];
            for (n3 = n3.firstChild; n3; ) n3.nodeType !== 7 && n3.nodeType !== 8 && i3[r3(1386)](e4(n3)), n3 = n3.nextSibling;
            return i3.join(``);
          default:
            return n3.nodeValue;
        }
      };
      Object.defineProperty(j2.prototype, "length", { get: function() {
        var e5 = t2;
        return M2(this), this[e5(1028)];
      } }), Object.defineProperty(L2.prototype, "textContent", { get: function() {
        return e4(this);
      }, set: function(e5) {
        var n3 = t2;
        switch (this[n3(387)]) {
          case d2:
          case x2:
            for (; this[n3(663)]; ) this.removeChild(this.firstChild);
            (e5 || String(e5)) && this.appendChild(this.ownerDocument.createTextNode(e5));
            break;
          default:
            this.data = e5, this.value = e5, this.nodeValue = e5;
        }
      } });
      Y2 = function(e5, t3, n3) {
        e5[`$$` + t3] = n3;
      };
    }
  } catch {
  }
  e3.DocumentType = pe2, e3.DOMException = k2, e3.DOMImplementation = I2, e3.Element = ce2, e3.Node = L2, e3.NodeList = A2, e3.XMLSerializer = ge2;
}), O = e((e3) => {
  var t2 = $, n2 = E()[t2(1143)];
  e3.XML_ENTITIES = n2({ amp: `&`, apos: `'`, gt: `>`, lt: `<`, quot: `"` }), e3[t2(506)] = n2({ lt: `<`, gt: `>`, amp: `&`, quot: `"`, apos: `'`, Agrave: `\xC0`, Aacute: `\xC1`, Acirc: `\xC2`, Atilde: `\xC3`, Auml: `\xC4`, Aring: `\xC5`, AElig: `\xC6`, Ccedil: `\xC7`, Egrave: `\xC8`, Eacute: `\xC9`, Ecirc: `\xCA`, Euml: `\xCB`, Igrave: `\xCC`, Iacute: `\xCD`, Icirc: `\xCE`, Iuml: `\xCF`, ETH: `\xD0`, Ntilde: `\xD1`, Ograve: `\xD2`, Oacute: `\xD3`, Ocirc: `\xD4`, Otilde: `\xD5`, Ouml: `\xD6`, Oslash: `\xD8`, Ugrave: `\xD9`, Uacute: `\xDA`, Ucirc: `\xDB`, Uuml: `\xDC`, Yacute: `\xDD`, THORN: `\xDE`, szlig: `\xDF`, agrave: `\xE0`, aacute: `\xE1`, acirc: `\xE2`, atilde: `\xE3`, auml: `\xE4`, aring: `\xE5`, aelig: `\xE6`, ccedil: `\xE7`, egrave: `\xE8`, eacute: `\xE9`, ecirc: `\xEA`, euml: `\xEB`, igrave: `\xEC`, iacute: `\xED`, icirc: `\xEE`, iuml: `\xEF`, eth: `\xF0`, ntilde: `\xF1`, ograve: `\xF2`, oacute: `\xF3`, ocirc: `\xF4`, otilde: `\xF5`, ouml: `\xF6`, oslash: `\xF8`, ugrave: `\xF9`, uacute: `\xFA`, ucirc: `\xFB`, uuml: `\xFC`, yacute: `\xFD`, thorn: `\xFE`, yuml: `\xFF`, nbsp: `\xA0`, iexcl: `\xA1`, cent: `\xA2`, pound: `\xA3`, curren: `\xA4`, yen: `\xA5`, brvbar: `\xA6`, sect: `\xA7`, uml: `\xA8`, copy: `\xA9`, ordf: `\xAA`, laquo: `\xAB`, not: `\xAC`, shy: `\xAD\xAD`, reg: `\xAE`, macr: `\xAF`, deg: `\xB0`, plusmn: `\xB1`, sup2: `\xB2`, sup3: `\xB3`, acute: `\xB4`, micro: `\xB5`, para: `\xB6`, middot: `\xB7`, cedil: `\xB8`, sup1: `\xB9`, ordm: `\xBA`, raquo: `\xBB`, frac14: `\xBC`, frac12: `\xBD`, frac34: `\xBE`, iquest: `\xBF`, times: `\xD7`, divide: `\xF7`, forall: `\u2200`, part: `\u2202`, exist: `\u2203`, empty: `\u2205`, nabla: `\u2207`, isin: `\u2208`, notin: `\u2209`, ni: `\u220B`, prod: `\u220F`, sum: `\u2211`, minus: `\u2212`, lowast: `\u2217`, radic: `\u221A`, prop: `\u221D`, infin: `\u221E`, ang: `\u2220`, and: `\u2227`, or: `\u2228`, cap: `\u2229`, cup: `\u222A`, int: `\u222B`, there4: `\u2234`, sim: `\u223C`, cong: `\u2245`, asymp: `\u2248`, ne: `\u2260`, equiv: `\u2261`, le: `\u2264`, ge: `\u2265`, sub: `\u2282`, sup: `\u2283`, nsub: `\u2284`, sube: `\u2286`, supe: `\u2287`, oplus: `\u2295`, otimes: `\u2297`, perp: `\u22A5`, sdot: `\u22C5`, Alpha: `\u0391`, Beta: `\u0392`, Gamma: `\u0393`, Delta: `\u0394`, Epsilon: `\u0395`, Zeta: `\u0396`, Eta: `\u0397`, Theta: `\u0398`, Iota: `\u0399`, Kappa: `\u039A`, Lambda: `\u039B`, Mu: `\u039C`, Nu: `\u039D`, Xi: `\u039E`, Omicron: `\u039F`, Pi: `\u03A0`, Rho: `\u03A1`, Sigma: `\u03A3`, Tau: `\u03A4`, Upsilon: `\u03A5`, Phi: `\u03A6`, Chi: `\u03A7`, Psi: `\u03A8`, Omega: `\u03A9`, alpha: `\u03B1`, beta: `\u03B2`, gamma: `\u03B3`, delta: `\u03B4`, epsilon: `\u03B5`, zeta: `\u03B6`, eta: `\u03B7`, theta: `\u03B8`, iota: `\u03B9`, kappa: `\u03BA`, lambda: `\u03BB`, mu: `\u03BC`, nu: `\u03BD`, xi: `\u03BE`, omicron: `\u03BF`, pi: `\u03C0`, rho: `\u03C1`, sigmaf: `\u03C2`, sigma: `\u03C3`, tau: `\u03C4`, upsilon: `\u03C5`, phi: `\u03C6`, chi: `\u03C7`, psi: `\u03C8`, omega: `\u03C9`, thetasym: `\u03D1`, upsih: `\u03D2`, piv: `\u03D6`, OElig: `\u0152`, oelig: `\u0153`, Scaron: `\u0160`, scaron: `\u0161`, Yuml: `\u0178`, fnof: `\u0192`, circ: `\u02C6`, tilde: `\u02DC`, ensp: `\u2002`, emsp: `\u2003`, thinsp: `\u2009`, zwnj: `\u200C`, zwj: `\u200D`, lrm: `\u200E`, rlm: `\u200F`, ndash: `\u2013`, mdash: `\u2014`, lsquo: `\u2018`, rsquo: `\u2019`, sbquo: `\u201A`, ldquo: `\u201C`, rdquo: `\u201D`, bdquo: `\u201E`, dagger: `\u2020`, Dagger: `\u2021`, bull: `\u2022`, hellip: `\u2026`, permil: `\u2030`, prime: `\u2032`, Prime: `\u2033`, lsaquo: `\u2039`, rsaquo: `\u203A`, oline: `\u203E`, euro: `\u20AC`, trade: `\u2122`, larr: `\u2190`, uarr: `\u2191`, rarr: `\u2192`, darr: `\u2193`, harr: `\u2194`, crarr: `\u21B5`, lceil: `\u2308`, rceil: `\u2309`, lfloor: `\u230A`, rfloor: `\u230B`, loz: `\u25CA`, spades: `\u2660`, clubs: `\u2663`, hearts: `\u2665`, diams: `\u2666` }), e3.entityMap = e3.HTML_ENTITIES;
}), k = e((e3) => {
  var t2 = $, n2 = E().NAMESPACE, r2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, i2 = RegExp(`[\\-\\.0-9` + r2[t2(652)].slice(1, -1) + `\\u00B7\\u0300-\\u036F\\u203F-\\u2040]`), a2 = RegExp(`^` + r2.source + i2.source + `*(?::` + r2.source + i2.source + `*)?$`), o2 = 0, s2 = 1, c2 = 2, l2 = 3, u2 = 4, d2 = 5, f2 = 6, p2 = 7;
  function m2(e4, t3) {
    this.message = e4, this.locator = t3, Error.captureStackTrace && Error.captureStackTrace(this, m2);
  }
  m2[t2(427)] = Error(), m2.prototype[t2(701)] = m2.name;
  function h2() {
  }
  h2.prototype = { parse: function(e4, t3, n3) {
    var r3 = this.domBuilder;
    r3.startDocument(), S2(t3, t3 = {}), g2(e4, t3, n3, r3, this.errorHandler), r3.endDocument();
  } };
  function g2(e4, r3, i3, a3, o3) {
    var s3 = t2;
    function c3(e5) {
      if (e5 > 65535) {
        e5 -= 65536;
        var t3 = 55296 + (e5 >> 10), n3 = 56320 + (e5 & 1023);
        return String.fromCharCode(t3, n3);
      } else return String.fromCharCode(e5);
    }
    function l3(e5) {
      var t3 = $, n3 = e5.slice(1, -1);
      return n3 in i3 ? i3[n3] : n3.charAt(0) === `#` ? c3(parseInt(n3.substr(1).replace(`x`, `0x`))) : (o3.error(t3(969) + e5), e5);
    }
    function u3(t3) {
      if (t3 > D3) {
        var n3 = e4.substring(D3, t3).replace(/&#?\w+;/g, l3);
        g3 && d3(D3), a3.characters(n3, 0, t3 - D3), D3 = t3;
      }
    }
    function d3(t3, n3) {
      for (var r4 = $; t3 >= p3 && (n3 = h3.exec(e4)); ) f3 = n3.index, p3 = f3 + n3[0].length, g3[r4(656)]++;
      g3[r4(414)] = t3 - f3 + 1;
    }
    for (var f3 = 0, p3 = 0, h3 = /.*(?:\r\n?|\n)|.*$/g, g3 = a3.locator, S3 = [{ currentNSMap: r3 }], E2 = {}, D3 = 0; ; ) {
      try {
        var O2 = e4[s3(755)](`<`, D3);
        if (O2 < 0) {
          if (!e4.substr(D3)[s3(676)](/^\s*$/)) {
            var k2 = a3.doc, A2 = k2.createTextNode(e4.substr(D3));
            k2.appendChild(A2), a3.currentElement = A2;
          }
          return;
        }
        switch (O2 > D3 && u3(O2), e4.charAt(O2 + 1)) {
          case `/`:
            var j2 = e4.indexOf(`>`, O2 + 3), M2 = e4[s3(522)](O2 + 2, j2).replace(/[ \t\n\r]+$/g, ``), N2 = S3[s3(507)]();
            j2 < 0 ? (M2 = e4.substring(O2 + 2)[s3(930)](/[\s<].*/, ``), o3.error(`end tag name: ` + M2 + s3(945) + N2.tagName), j2 = O2 + 1 + M2.length) : M2.match(/\s</) && (M2 = M2.replace(/[\s<].*/, ``), o3.error(s3(584) + M2 + ` maybe not complete`), j2 = O2 + 1 + M2.length);
            var ee2 = N2.localNSMap, P2 = N2[s3(832)] == M2;
            if (P2 || N2.tagName && N2.tagName.toLowerCase() == M2.toLowerCase()) {
              if (a3.endElement(N2[s3(1126)], N2[s3(1371)], M2), ee2) for (var F2 in ee2) a3.endPrefixMapping(F2);
              P2 || o3[s3(1354)](`end tag name: ` + M2 + ` is not match the current start tagName:` + N2[s3(832)]);
            } else S3.push(N2);
            j2++;
            break;
          case `?`:
            g3 && d3(O2), j2 = w2(e4, O2, a3);
            break;
          case `!`:
            g3 && d3(O2), j2 = C2(e4, O2, a3, o3);
            break;
          default:
            g3 && d3(O2);
            var I2 = new T2(), L2 = S3[S3[s3(587)] - 1].currentNSMap, j2 = v2(e4, O2, I2, L2, l3, o3), te2 = I2.length;
            if (!I2.closed && x2(e4, j2, I2.tagName, E2) && (I2[s3(898)] = true, i3.nbsp || o3[s3(599)](`unclosed xml attribute`)), g3 && te2) {
              for (var ne2 = _2(g3, {}), re2 = 0; re2 < te2; re2++) {
                var R2 = I2[re2];
                d3(R2[s3(381)]), R2.locator = _2(g3, {});
              }
              a3.locator = ne2, y2(I2, a3, L2) && S3.push(I2), a3.locator = g3;
            } else y2(I2, a3, L2) && S3.push(I2);
            n2.isHTML(I2[s3(1126)]) && !I2.closed ? j2 = b2(e4, j2, I2[s3(832)], l3, a3) : j2++;
        }
      } catch (e5) {
        if (e5 instanceof m2) throw e5;
        o3.error(`element parse error: ` + e5), j2 = -1;
      }
      j2 > D3 ? D3 = j2 : u3(Math.max(O2, D3) + 1);
    }
  }
  function _2(e4, n3) {
    var r3 = t2;
    return n3.lineNumber = e4.lineNumber, n3.columnNumber = e4[r3(414)], n3;
  }
  function v2(e4, r3, i3, a3, m3, h3) {
    var g3 = t2;
    function _3(e5, t3, n3) {
      i3[$(555)].hasOwnProperty(e5) && h3.fatalError(`Attribute ` + e5 + ` redefined`), i3.addValue(e5, t3, n3);
    }
    for (var v3, y3, b3 = ++r3, x3 = o2; ; ) {
      var S3 = e4.charAt(b3);
      switch (S3) {
        case `=`:
          if (x3 === s2) v3 = e4.slice(r3, b3), x3 = l2;
          else if (x3 === c2) x3 = l2;
          else throw Error(`attribute equal must after attrName`);
          break;
        case `'`:
        case `"`:
          if (x3 === l2 || x3 === s2) if (x3 === s2 && (h3[g3(599)](g3(986)), v3 = e4.slice(r3, b3)), r3 = b3 + 1, b3 = e4.indexOf(S3, r3), b3 > 0) y3 = e4.slice(r3, b3).replace(/&#?\w+;/g, m3), _3(v3, y3, r3 - 1), x3 = d2;
          else throw Error(`attribute value no end '` + S3 + `' match`);
          else if (x3 == u2) y3 = e4.slice(r3, b3).replace(/&#?\w+;/g, m3), _3(v3, y3, r3), h3.warning(g3(1170) + v3 + `" missed start quot(` + S3 + g3(467)), r3 = b3 + 1, x3 = d2;
          else throw Error(`attribute value must after "="`);
          break;
        case `/`:
          switch (x3) {
            case o2:
              i3.setTagName(e4.slice(r3, b3));
            case d2:
            case f2:
            case p2:
              x3 = p2, i3.closed = true;
            case u2:
            case s2:
            case c2:
              break;
            default:
              throw Error(`attribute invalid close char('/')`);
          }
          break;
        case ``:
          return h3.error(`unexpected end of input`), x3 == o2 && i3.setTagName(e4.slice(r3, b3)), b3;
        case `>`:
          switch (x3) {
            case o2:
              i3.setTagName(e4[g3(1006)](r3, b3));
            case d2:
            case f2:
            case p2:
              break;
            case u2:
            case s2:
              y3 = e4.slice(r3, b3), y3.slice(-1) === `/` && (i3.closed = true, y3 = y3.slice(0, -1));
            case c2:
              x3 === c2 && (y3 = v3), x3 == u2 ? (h3.warning(`attribute "` + y3 + `" missed quot(")!`), _3(v3, y3.replace(/&#?\w+;/g, m3), r3)) : ((!n2.isHTML(a3[``]) || !y3[g3(676)](/^(?:disabled|checked|selected)$/i)) && h3[g3(599)](`attribute "` + y3 + `" missed value!! "` + y3 + `" instead!!`), _3(y3, y3, r3));
              break;
            case l2:
              throw Error(`attribute value missed!!`);
          }
          return b3;
        case `\x80`:
          S3 = ` `;
        default:
          if (S3 <= ` `) switch (x3) {
            case o2:
              i3.setTagName(e4.slice(r3, b3)), x3 = f2;
              break;
            case s2:
              v3 = e4.slice(r3, b3), x3 = c2;
              break;
            case u2:
              var y3 = e4.slice(r3, b3).replace(/&#?\w+;/g, m3);
              h3.warning(`attribute "` + y3 + g3(949)), _3(v3, y3, r3);
            case d2:
              x3 = f2;
              break;
          }
          else switch (x3) {
            case c2:
              i3.tagName, (!n2.isHTML(a3[``]) || !v3[g3(676)](/^(?:disabled|checked|selected)$/i)) && h3.warning(g3(1170) + v3 + g3(461) + v3 + `" instead2!!`), _3(v3, v3, r3), r3 = b3, x3 = s2;
              break;
            case d2:
              h3.warning(`attribute space is required"` + v3 + `"!!`);
            case f2:
              x3 = s2, r3 = b3;
              break;
            case l2:
              x3 = u2, r3 = b3;
              break;
            case p2:
              throw Error(`elements closed character '/' and '>' must be connected to`);
          }
      }
      b3++;
    }
  }
  function y2(e4, r3, i3) {
    for (var a3 = t2, o3 = e4.tagName, s3 = null, c3 = e4[a3(587)]; c3--; ) {
      var l3 = e4[c3], u3 = l3.qName, d3 = l3.value, f3 = u3.indexOf(`:`);
      if (f3 > 0) var p3 = l3[a3(768)] = u3[a3(1006)](0, f3), m3 = u3.slice(f3 + 1), h3 = p3 === `xmlns` && m3;
      else m3 = u3, p3 = null, h3 = u3 === `xmlns` && ``;
      l3[a3(1371)] = m3, h3 !== false && (s3 ?? (s3 = {}, S2(i3, i3 = {})), i3[h3] = s3[h3] = d3, l3.uri = n2.XMLNS, r3.startPrefixMapping(h3, d3));
    }
    for (var c3 = e4.length; c3--; ) {
      l3 = e4[c3];
      var p3 = l3.prefix;
      p3 && (p3 === `xml` && (l3.uri = n2[a3(425)]), p3 !== a3(1118) && (l3.uri = i3[p3 || ``]));
    }
    var f3 = o3.indexOf(`:`);
    f3 > 0 ? (p3 = e4.prefix = o3.slice(0, f3), m3 = e4.localName = o3.slice(f3 + 1)) : (p3 = null, m3 = e4.localName = o3);
    var g3 = e4.uri = i3[p3 || ``];
    if (r3.startElement(g3, m3, o3, e4), e4.closed) {
      if (r3.endElement(g3, m3, o3), s3) for (p3 in s3) r3.endPrefixMapping(p3);
    } else return e4[a3(777)] = i3, e4.localNSMap = s3, true;
  }
  function b2(e4, n3, r3, i3, a3) {
    var o3 = t2;
    if (/^(?:script|textarea)$/i.test(r3)) {
      var s3 = e4[o3(755)](`</` + r3 + `>`, n3), c3 = e4.substring(n3 + 1, s3);
      if (/[&<]/.test(c3)) return /^script$/i.test(r3) ? (a3.characters(c3, 0, c3.length), s3) : (c3 = c3.replace(/&#?\w+;/g, i3), a3.characters(c3, 0, c3.length), s3);
    }
    return n3 + 1;
  }
  function x2(e4, t3, n3, r3) {
    var i3 = r3[n3];
    return i3 ?? (i3 = e4.lastIndexOf(`</` + n3 + `>`), i3 < t3 && (i3 = e4.lastIndexOf(`</` + n3)), r3[n3] = i3), i3 < t3;
  }
  function S2(e4, t3) {
    for (var n3 in e4) t3[n3] = e4[n3];
  }
  function C2(e4, n3, r3, i3) {
    var a3 = t2;
    switch (e4.charAt(n3 + 2)) {
      case `-`:
        if (e4.charAt(n3 + 3) === `-`) {
          var o3 = e4[a3(755)](a3(1327), n3 + 4);
          return o3 > n3 ? (r3[a3(1487)](e4, n3 + 4, o3 - n3 - 4), o3 + 3) : (i3.error(`Unclosed comment`), -1);
        } else return -1;
      default:
        if (e4.substr(n3 + 3, 6) == `CDATA[`) {
          var o3 = e4.indexOf(a3(684), n3 + 9);
          return r3.startCDATA(), r3.characters(e4, n3 + 9, o3 - n3 - 9), r3[a3(1237)](), o3 + 3;
        }
        var s3 = D2(e4, n3), c3 = s3.length;
        if (c3 > 1 && /!doctype/i.test(s3[0][0])) {
          var l3 = s3[1][0], u3 = false, d3 = false;
          c3 > 3 && (/^public$/i.test(s3[2][0]) ? (u3 = s3[3][0], d3 = c3 > 4 && s3[4][0]) : /^system$/i[a3(744)](s3[2][0]) && (d3 = s3[3][0]));
          var f3 = s3[c3 - 1];
          return r3.startDTD(l3, u3, d3), r3.endDTD(), f3.index + f3[0].length;
        }
    }
    return -1;
  }
  function w2(e4, t3, n3) {
    var r3 = e4.indexOf(`?>`, t3);
    if (r3) {
      var i3 = e4.substring(t3, r3).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
      return i3 ? (i3[0].length, n3.processingInstruction(i3[1], i3[2]), r3 + 2) : -1;
    }
    return -1;
  }
  function T2() {
    var e4 = t2;
    this[e4(555)] = {};
  }
  T2.prototype = { setTagName: function(e4) {
    var n3 = t2;
    if (!a2.test(e4)) throw Error(n3(366) + e4);
    this.tagName = e4;
  }, addValue: function(e4, t3, n3) {
    if (!a2.test(e4)) throw Error(`invalid attribute:` + e4);
    this.attributeNames[e4] = this.length, this[this.length++] = { qName: e4, value: t3, offset: n3 };
  }, length: 0, getLocalName: function(e4) {
    return this[e4].localName;
  }, getLocator: function(e4) {
    return this[e4].locator;
  }, getQName: function(e4) {
    return this[e4].qName;
  }, getURI: function(e4) {
    return this[e4].uri;
  }, getValue: function(e4) {
    return this[e4].value;
  } };
  function D2(e4, n3) {
    var r3 = t2, i3, a3 = [], o3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
    for (o3[r3(856)] = n3, o3.exec(e4); i3 = o3.exec(e4); ) if (a3.push(i3), i3[1]) return a3;
  }
  e3.XMLReader = h2, e3.ParseError = m2;
}), A = e((e3) => {
  var t2 = $, n2 = E(), r2 = D(), i2 = O(), a2 = k(), o2 = r2.DOMImplementation, s2 = n2.NAMESPACE, c2 = a2[t2(445)], l2 = a2.XMLReader;
  function u2(e4) {
    this.options = e4 || { locator: {} };
  }
  u2[t2(427)].parseFromString = function(e4, n3) {
    var r3 = t2, a3 = this.options, o3 = new l2(), c3 = a3.domBuilder || new f2(), u3 = a3.errorHandler, p3 = a3[r3(661)], m3 = a3.xmlns || {}, h3 = /\/x?html?$/.test(n3), g3 = h3 ? i2.HTML_ENTITIES : i2[r3(1064)];
    return p3 && c3.setDocumentLocator(p3), o3.errorHandler = d2(u3, c3, p3), o3.domBuilder = a3.domBuilder || c3, h3 && (m3[``] = s2.HTML), m3.xml = m3.xml || s2.XML, e4 && typeof e4 == `string` ? o3[r3(885)](e4, m3, g3) : o3[r3(617)].error(`invalid doc source`), c3.doc;
  };
  function d2(e4, n3, r3) {
    var i3 = t2;
    if (!e4) {
      if (n3 instanceof f2) return n3;
      e4 = n3;
    }
    var a3 = {}, o3 = e4 instanceof Function;
    r3 || (r3 = {});
    function s3(t3) {
      var n4 = e4[t3];
      !n4 && o3 && (n4 = e4.length == 2 ? function(n5) {
        e4(t3, n5);
      } : e4), a3[t3] = n4 && function(e5) {
        n4(`[xmldom ` + t3 + `]	` + e5 + m2(r3));
      } || function() {
      };
    }
    return s3(`warning`), s3(i3(1018)), s3(`fatalError`), a3;
  }
  function f2() {
    this.cdata = false;
  }
  function p2(e4, t3) {
    t3.lineNumber = e4.lineNumber, t3.columnNumber = e4.columnNumber;
  }
  f2.prototype = { startDocument: function() {
    var e4 = t2;
    this.doc = new o2().createDocument(null, null, null), this.locator && (this.doc.documentURI = this[e4(661)].systemId);
  }, startElement: function(e4, n3, r3, i3) {
    var a3 = t2, o3 = this.doc, s3 = o3.createElementNS(e4, r3 || n3), c3 = i3.length;
    g2(this, s3), this[a3(1074)] = s3, this[a3(661)] && p2(this.locator, s3);
    for (var l3 = 0; l3 < c3; l3++) {
      var e4 = i3[a3(1461)](l3), u3 = i3[a3(1347)](l3), r3 = i3[a3(459)](l3), d3 = o3[a3(614)](e4, r3);
      this.locator && p2(i3.getLocator(l3), d3), d3.value = d3.nodeValue = u3, s3.setAttributeNode(d3);
    }
  }, endElement: function(e4, n3, r3) {
    var i3 = t2, a3 = this.currentElement;
    a3[i3(832)], this.currentElement = a3.parentNode;
  }, startPrefixMapping: function(e4, t3) {
  }, endPrefixMapping: function(e4) {
  }, processingInstruction: function(e4, t3) {
    var n3 = this.doc.createProcessingInstruction(e4, t3);
    this.locator && p2(this.locator, n3), g2(this, n3);
  }, ignorableWhitespace: function(e4, t3, n3) {
  }, characters: function(e4, n3, r3) {
    var i3 = t2;
    if (e4 = h2.apply(this, arguments), e4) {
      if (this.cdata) var a3 = this.doc.createCDATASection(e4);
      else var a3 = this.doc.createTextNode(e4);
      this.currentElement ? this.currentElement[i3(1270)](a3) : /^\s*$/.test(e4) && this[i3(466)][i3(1270)](a3), this.locator && p2(this.locator, a3);
    }
  }, skippedEntity: function(e4) {
  }, endDocument: function() {
    var e4 = t2;
    this[e4(466)][e4(1460)]();
  }, setDocumentLocator: function(e4) {
    (this.locator = e4) && (e4.lineNumber = 0);
  }, comment: function(e4, n3, r3) {
    var i3 = t2;
    e4 = h2.apply(this, arguments);
    var a3 = this.doc.createComment(e4);
    this.locator && p2(this[i3(661)], a3), g2(this, a3);
  }, startCDATA: function() {
    var e4 = t2;
    this[e4(1019)] = true;
  }, endCDATA: function() {
    var e4 = t2;
    this[e4(1019)] = false;
  }, startDTD: function(e4, n3, r3) {
    var i3 = t2, a3 = this.doc.implementation;
    if (a3 && a3[i3(470)]) {
      var o3 = a3.createDocumentType(e4, n3, r3);
      this[i3(661)] && p2(this.locator, o3), g2(this, o3), this.doc.doctype = o3;
    }
  }, warning: function(e4) {
    console[t2(1465)](`[xmldom warning]	` + e4, m2(this.locator));
  }, error: function(e4) {
    var n3 = t2;
    console.error(`[xmldom error]	` + e4, m2(this[n3(661)]));
  }, fatalError: function(e4) {
    throw new c2(e4, this.locator);
  } };
  function m2(e4) {
    var n3 = t2;
    if (e4) return `
@` + (e4.systemId || ``) + `#[line:` + e4.lineNumber + n3(804) + e4.columnNumber + `]`;
  }
  function h2(e4, n3, r3) {
    var i3 = t2;
    return typeof e4 == `string` ? e4.substr(n3, r3) : e4.length >= n3 + r3 || n3 ? new java.lang[i3(1127)](e4, n3, r3) + `` : e4;
  }
  `endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl`.replace(/\w+/g, function(e4) {
    f2.prototype[e4] = function() {
      return null;
    };
  });
  function g2(e4, n3) {
    var r3 = t2;
    e4.currentElement ? e4.currentElement[r3(1270)](n3) : e4.doc.appendChild(n3);
  }
  e3.__DOMHandler = f2, e3.DOMParser = u2, e3[t2(1402)] = r2.DOMImplementation, e3.XMLSerializer = r2.XMLSerializer;
}), j = e((e3) => {
  var t2 = $, n2 = D();
  e3.DOMImplementation = n2.DOMImplementation, e3.XMLSerializer = n2[t2(1155)], e3[t2(1137)] = A()[t2(1137)];
}), M = t(T()), N = r({ RangeObject: () => Ee, blob2base64: () => be, borders: () => de, bounds: () => ue, createBase64Url: () => W, createBlob: () => he, createBlobUrl: () => U, defaults: () => oe, defer: () => X, documentHeight: () => ne, extend: () => z, filterChildren: () => we, findChildren: () => Se, getParentByTagName: () => Te, indexOfElementNode: () => H, indexOfNode: () => pe, indexOfSorted: () => le, indexOfTextNode: () => V, insert: () => se, isElement: () => re, isFloat: () => ie, isNumber: () => R, isXml: () => me, locationOf: () => ce, nodeBounds: () => B, parents: () => Ce, parse: () => K, prefixed: () => ae, qs: () => q, qsa: () => _e, qsp: () => J, querySelectorByType: () => xe, requestAnimationFrame: () => P, revokeBlobUrl: () => ge, sprint: () => Y, treeWalker: () => ve, type: () => G, uuid: () => te, walk: () => ye, windowBounds: () => fe }), ee = j(), P = typeof window < `u` ? window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame : false, F = 1, I = 3, L = typeof URL < `u` ? URL : typeof window < `u` ? window.URL || window.webkitURL || window.mozURL : void 0;
function te() {
  var e3 = (/* @__PURE__ */ new Date()).getTime();
  return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function(t2) {
    var n2 = $, r2 = (e3 + Math.random() * 16) % 16 | 0;
    return e3 = Math[n2(974)](e3 / 16), (t2 == `x` ? r2 : r2 & 7 | 8).toString(16);
  });
}
function ne() {
  var e3 = $;
  return Math.max(document[e3(1482)][e3(602)], document[e3(471)].scrollHeight, document[e3(1482)].scrollHeight, document[e3(471)].offsetHeight, document.documentElement[e3(541)]);
}
function re(e3) {
  return !!(e3 && e3.nodeType == 1);
}
function R(e3) {
  return !isNaN(parseFloat(e3)) && isFinite(e3);
}
function ie(e3) {
  var t2 = $;
  let n2 = parseFloat(e3);
  return R(e3) === false ? false : typeof e3 == `string` && e3.indexOf(`.`) > -1 ? true : Math[t2(974)](n2) !== n2;
}
function ae(e3) {
  var t2 = $, n2 = [`Webkit`, `webkit`, `Moz`, `O`, `ms`], r2 = [`-webkit-`, `-webkit-`, `-moz-`, `-o-`, `-ms-`], i2 = e3.toLowerCase(), a2 = n2.length;
  if (typeof document > `u` || document[t2(471)].style[i2] !== void 0) return e3;
  for (var o2 = 0; o2 < a2; o2++) if (document.body.style[r2[o2] + i2] !== void 0) return r2[o2] + i2;
  return e3;
}
function oe(e3) {
  for (var t2 = 1, n2 = arguments.length; t2 < n2; t2++) {
    var r2 = arguments[t2];
    for (var i2 in r2) e3[i2] === void 0 && (e3[i2] = r2[i2]);
  }
  return e3;
}
function z(e3) {
  var t2 = $;
  return [].slice[t2(906)](arguments, 1)[t2(1318)](function(n2) {
    var r2 = t2;
    n2 && Object[r2(1340)](n2).forEach(function(t3) {
      Object.defineProperty(e3, t3, Object[r2(1201)](n2, t3));
    });
  }), e3;
}
function se(e3, t2, n2) {
  var r2 = ce(e3, t2, n2);
  return t2.splice(r2, 0, e3), r2;
}
function ce(e3, t2, n2, r2, i2) {
  var a2 = r2 || 0, o2 = i2 || t2.length, s2 = parseInt(a2 + (o2 - a2) / 2), c2;
  return n2 || (n2 = function(e4, t3) {
    if (e4 > t3) return 1;
    if (e4 < t3) return -1;
    if (e4 == t3) return 0;
  }), o2 - a2 <= 0 ? s2 : (c2 = n2(t2[s2], e3), o2 - a2 === 1 ? c2 >= 0 ? s2 : s2 + 1 : c2 === 0 ? s2 : c2 === -1 ? ce(e3, t2, n2, s2, o2) : ce(e3, t2, n2, a2, s2));
}
function le(e3, t2, n2, r2, i2) {
  var a2 = r2 || 0, o2 = i2 || t2.length, s2 = parseInt(a2 + (o2 - a2) / 2), c2;
  return n2 || (n2 = function(e4, t3) {
    if (e4 > t3) return 1;
    if (e4 < t3) return -1;
    if (e4 == t3) return 0;
  }), o2 - a2 <= 0 ? -1 : (c2 = n2(t2[s2], e3), o2 - a2 === 1 ? c2 === 0 ? s2 : -1 : c2 === 0 ? s2 : c2 === -1 ? le(e3, t2, n2, s2, o2) : le(e3, t2, n2, a2, s2));
}
function ue(e3) {
  var t2 = $, n2 = window.getComputedStyle(e3), r2 = [t2(610), `paddingRight`, `paddingLeft`, `marginRight`, `marginLeft`, `borderRightWidth`, t2(840)], i2 = [`height`, `paddingTop`, `paddingBottom`, t2(889), `marginBottom`, `borderTopWidth`, `borderBottomWidth`], a2 = 0, o2 = 0;
  return r2.forEach(function(e4) {
    a2 += parseFloat(n2[e4]) || 0;
  }), i2.forEach(function(e4) {
    o2 += parseFloat(n2[e4]) || 0;
  }), { height: o2, width: a2 };
}
function de(e3) {
  var t2 = $, n2 = window.getComputedStyle(e3), r2 = [`paddingRight`, `paddingLeft`, `marginRight`, t2(356), t2(350), `borderLeftWidth`], i2 = [`paddingTop`, t2(827), t2(889), `marginBottom`, t2(1368), `borderBottomWidth`], a2 = 0, o2 = 0;
  return r2[t2(1318)](function(e4) {
    a2 += parseFloat(n2[e4]) || 0;
  }), i2.forEach(function(e4) {
    o2 += parseFloat(n2[e4]) || 0;
  }), { height: o2, width: a2 };
}
function B(e3) {
  let t2, n2 = e3.ownerDocument;
  if (e3.nodeType == Node.TEXT_NODE) {
    let r2 = n2.createRange();
    r2.selectNodeContents(e3), t2 = r2.getBoundingClientRect();
  } else t2 = e3.getBoundingClientRect();
  return t2;
}
function fe() {
  var e3 = window.innerWidth, t2 = window.innerHeight;
  return { top: 0, left: 0, right: e3, bottom: t2, width: e3, height: t2 };
}
function pe(e3, t2) {
  for (var n2 = $, r2 = e3.parentNode.childNodes, i2, a2 = -1, o2 = 0; o2 < r2.length && (i2 = r2[o2], i2[n2(387)] === t2 && a2++, i2 != e3); o2++) ;
  return a2;
}
function V(e3) {
  return pe(e3, I);
}
function H(e3) {
  return pe(e3, F);
}
function me(e3) {
  return [`xml`, `opf`, `ncx`].indexOf(e3) > -1;
}
function he(e3, t2) {
  return new Blob([e3], { type: t2 });
}
function U(e3, t2) {
  var n2 = $, r2, i2 = he(e3, t2);
  return r2 = L[n2(995)](i2), r2;
}
function ge(e3) {
  return L.revokeObjectURL(e3);
}
function W(e3, t2) {
  var n2 = $, r2, i2;
  if (typeof e3 == `string`) return r2 = btoa(e3), i2 = `data:` + t2 + n2(770) + r2, i2;
}
function G(e3) {
  return Object.prototype.toString.call(e3).slice(8, -1);
}
function K(e3, t2, n2) {
  var r2, i2 = typeof DOMParser > `u` || n2 ? ee.DOMParser : DOMParser;
  return e3.charCodeAt(0) === 65279 && (e3 = e3.slice(1)), r2 = new i2().parseFromString(e3, t2), r2;
}
function q(e3, t2) {
  var n2;
  if (!e3) throw Error(`No Element Provided`);
  if (e3.querySelector !== void 0) return e3.querySelector(t2);
  if (n2 = e3.getElementsByTagName(t2), n2.length) return n2[0];
}
function _e(e3, t2) {
  return e3[$(528)] === void 0 ? e3.getElementsByTagName(t2) : e3.querySelectorAll(t2);
}
function J(e3, t2, n2) {
  var r2 = $, i2, a2;
  if (e3[r2(528)] !== void 0) {
    for (var o2 in t2 += `[`, n2) t2 += o2 + `~='` + n2[o2] + `'`;
    return t2 += `]`, e3[r2(528)](t2);
  } else if (i2 = e3.getElementsByTagName(t2), a2 = Array.prototype.slice.call(i2, 0).filter(function(e4) {
    var t3 = r2;
    for (var i3 in n2) if (e4[t3(763)](i3) === n2[i3]) return true;
    return false;
  }), a2) return a2[0];
}
function Y(e3, t2) {
  (e3.ownerDocument || e3).createTreeWalker === void 0 ? ye(e3, function(e4) {
    e4 && e4[$(387)] === 3 && t2(e4);
  }, true) : ve(e3, t2, NodeFilter.SHOW_TEXT);
}
function ve(e3, t2, n2) {
  var r2 = document.createTreeWalker(e3, n2, null, false);
  let i2;
  for (; i2 = r2.nextNode(); ) t2(i2);
}
function ye(e3, t2) {
  var n2 = $;
  if (t2(e3)) return true;
  if (e3 = e3[n2(663)], e3) do {
    if (ye(e3, t2)) return true;
    e3 = e3.nextSibling;
  } while (e3);
}
function be(e3) {
  return new Promise(function(t2, n2) {
    var r2 = new FileReader();
    r2.readAsDataURL(e3), r2.onloadend = function() {
      t2(r2.result);
    };
  });
}
function X() {
  this.resolve = null, this.reject = null, this.id = te(), this.promise = new Promise((e3, t2) => {
    this.resolve = e3, this.reject = t2;
  }), Object.freeze(this);
}
function xe(e3, t2, n2) {
  var r2 = $, i2;
  if (e3.querySelector !== void 0 && (i2 = e3.querySelector(t2 + `[*|type="` + n2 + `"]`)), !i2 || i2[r2(587)] === 0) {
    i2 = _e(e3, t2);
    for (var a2 = 0; a2 < i2.length; a2++) if (i2[a2].getAttributeNS(`http://www.idpf.org/2007/ops`, `type`) === n2 || i2[a2][r2(763)](`epub:type`) === n2) return i2[a2];
  } else return i2;
}
function Z() {
  var e3 = [`$$length`, `subarray`, `must be an array`, `AXIS`, `newVersion`, `good_match`, `reportLocation`, `avi`, `l_desc`, `style`, `arraybuffer`, `createDocumentFragment`, `foo`, `touchstart`, `locations`, `both`, `close`, `revokeObjectURL`, `getPropertyText`, `delete`, `MessageChannel`, `winBounds`, `unixPermissions`, `layoutStyle`, `spineByHref`, `heap_len`, `_ownerElement`, `./stream/GenericWorker`, `mode`, `rangeListToCfiList`, `triggerSelectedEvent`, `LAYOUT`, `RENDERED`, `deserialize`, `each`, `underlines`, `XML_ENTITIES`, `distcode`, `lens`, `rendition`, `msg`, `http://www.w3.org/2000/xmlns/`, `createUrl`, `End of data reached (data length = `, `compressedSize`, `percentage`, `currentElement`, `CONTENTS`, `xslt`, `_initReady`, `relativeOffsetEndOfZip64CentralDir`, `./DataReader`, `success`, `20px`, `specified`, `bi_valid`, `rel`, `flex`, `object`, `_wrapLibraryMethodsWithReady`, `setImmediate`, `PROCESSING_INSTRUCTION_NODE`, `items`, `pfm`, `getAttributeNS`, `afterDisplayed`, `page`, `encoding`, `Inflate`, `shown`, `cfiBase`, `_contentWidth`, `insertRule`, `_triggerEvent`, `readAndCheckSignature`, `readBlockZip64EndOfCentral`, `setAttributeNode`, `./crc32`, `_support`, `top`, `font, font-size, font-size-adjust, font-stretch, font-variation-settings, font-weight, width, height`, `ELEMENT_NODE`, `addMark`, `navigation`, `iframe`, `display_options`, `loaded`, `getBase64`, `_onTouchMove`, `pages`, `xmlns`, `createElement`, `No Manifest Found`, `prev`, `RESIZED`, `gzindex`, `flexWrap`, `currentLocation`, `uri`, `String`, `forages`, `page-list`, `checkOffset`, `whave`, `_tickScheduled`, `open-to-spread`, `parseSpine`, `callRejected`, `://`, `DOMParser`, `tick`, `streamInfo`, `generatedError`, `hcrc`, `dirname`, `freeze`, `html`, `requester`, `Z_SYNC_FLUSH`, `_onSelectionChange`, `hold`, `textHeight`, `The database "`, `findStart`, `split`, `none`, `buffer`, `XMLSerializer`, `mng`, `priority`, `pipe`, `box-sizing`, `sheet`, `application/xhtml+xml`, `lockedHeight`, `scrollBy`, `assign`, `_dataBinary`, `segmentString`, ` unknown (inner file : `, ` is not a valid compression method !`, `resume`, `attribute "`, `_resizeCheck`, `running`, `_overrides`, `_stageSize`, `deflate`, `WRITING_MODE`, `shiftKey`, `add`, `unloaded`, `percentageFromCfi`, `_views`, `./NodeBufferReader`, `utf-8`, `getElementById`, `block`, `htm`, `MARK_CLICKED`, `MIME_TYPE`, `prev_length`, `fill`, `ins_h`, `createRange`, `_tickAndRepeat`, `section`, `offline`, `from`, `addEventListeners`, `CFI`, `tiff`, `toString`, `getOwnPropertyDescriptor`, `work`, `lookup`, `Underline`, `invalid block type`, `BINARY`, `position`, `./ConvertWorker`, `endTouchY`, `compression`, `metadata`, `...`, `amd`, `getTypeOf`, `getContents`, `linkClicked`, `true`, `dyn_ltree`, `stat_desc`, `reject`, `gzhead`, `opening`, `[object Int8Array]`, `__esModule`, `value`, `archive`, `_initDriver`, `setCurrent`, `keyPrefix`, `hash_size`, `requestMethod`, `_spread`, `_ready`, `MozBlobBuilder`, `findNode`, `_locationsWords`, `endCDATA`, `removeProperty`, `Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`, `viewSettings`, `w_size`, `transitionDuration`, `depth`, `MAX_VALUE_16BITS`, `elementBounds`, `prevBounds`, `ownerDocument`, `trimTimeout`, `ATTRIBUTE_NODE`, `updateLayout`, `storage`, `processingTimeout`, `onResize`, `_worker`, `Promise`, `filteredPosition`, `uint8array`, `addEventListener`, `OPEN_FAILED`, `utf8encode`, `LOCAL_FILE_HEADER`, `serialize`, `otherCallRejected`, `defineDriver`, `compressionMethod`, `callFulfilled`, `last`, `allocBuffer`, `response`, `appendChild`, `height`, `version`, `margin`, `invalid literal/lengths set`, `onreadystatechange`, `end`, `head`, `div`, `scrollX`, `DataWorker`, `updateFlow`, `scrollTo`, `[object Array]`, `delta`, `platform`, `querySelectorAll`, `loaderror`, `setIndex`, `insertBefore`, `utf8decode`, `onData`, `detail`, `max-width`, `link[rel='canonical']`, `wmv`, `stage`, `7566258jKVmAS`, `inflateInit2`, `displayOptions`, `reduce`, `decodeFileName`, `contains`, `wrapper`, `responseType`, `hasFeature`, `pageWidth`, `contentBuffer`, `No startContainer found for`, `interactive`, `selectNodeContents`, `shift`, `dc.relation.ispartof`, `ununderline`, `put`, `input`, `ready`, `rendered`, `forEach`, `parseNcx`, `removeEventListeners`, `VERSION`, `rect`, `destType`, `next_in`, `currentFile`, `item`, `-->`, `nodestream`, `media`, `props`, `book`, `http://www.idpf.org/2007/ops`, `./support`, `centralDirOffset`, `File not found in storage: `, `ZipFileWorker`, `nav`, `./zipEntries`, `strategy`, `getOwnPropertyNames`, `chunks`, `Nodejs stream input adapter for `, `hash`, `onOrientationChange`, `relativeTo`, `write`, `getValue`, `trigger`, `next_out`, `_nsMap`, `_pako`, `currentSourceOffset`, `async`, `fatalError`, `overrideMimeType`, `havedict`, `1px`, `xflags`, `resize`, `../signature`, `paginated`, `xhtml`, `base64`, `./nodejsUtils`, `defaultDirection`, `ended`, `font`, `borderTopWidth`, `displaying`, `inflate`, `localName`, `addSelectionListeners`, `_outputType`, `have`, `was`, `started`, `windowBits`, `paddingRight`, `SELECT key FROM `, `ogg`, `MSBlobBuilder`, `Package File Not Found`, `link`, `date`, `Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`, `push`, `The stream '`, `online`, `incorrect header check`, `clone`, `nice_match`, `PK`, `./utils`, `generateChapterComponent`, `assertion`, `emit`, `writingMode`, `BASE64`, `total_in`, `readyState`, `rtlScrollType`, `DOMImplementation`, `XMLNS`, `mxu`, `requestHeaders`, `QuotaExceededError`, `lastIndexOfSignature`, `update`, `toc`, `ltr`, `removeMark`, `title`, `removeChild`, `rows`, `src`, `4apYIlT`, `target`, `bitFlag`, `hooks`, `onTouchMove`, `opened`, `dwa`, `strstart`, `relative`, `append`, `newBlob`, `data_length`, `ceil`, `charCodeAt`, `onabort`, `findNcxPath`, `location`, `ownerElement`, `pretty`, `sandbox`, `uic8`, `PK`, `internalStream`, `internalFileAttributes`, `View`, `startOffset`, `axis`, `element`, `URL`, `apply`, `pane`, `incompatible version`, `unpack`, `_removeFromAnnotationBySectionIndex`, `748227HUbzto`, `files`, `parseNav`, `resolver`, `navItem`, `markClicked`, `pending_buf`, `changed`, `zip`, `pageFromPercentage`, `normalize`, `getURI`, `class`, `parseLandmarks`, `_inc`, `warn`, `_dbInfo`, `openContainer`, `../utils`, `packagePath`, `join`, `_config`, `afterResized`, `back`, `zipCommentLength`, `cloneNode`, `invalid stored block lengths`, `scrolled-continuous`, `ungzip`, `setting end offset to start container length failed`, `scrolled`, `Readable`, `documentElement`, `resizeFunc`, `heap`, `cancel`, `pause`, `comment`, `layout`, `expand`, `spreadWidth`, `children`, `match_start`, `block_start`, `borderRightWidth`, `pathTo`, `dir`, `orientation`, `toRange`, `_data`, `marginLeft`, `err`, `h261`, `properties`, `_size`, `_tr_init`, `ncxPath`, `onsuccess`, `[object Uint8ClampedArray]`, `Crc32Probe`, `invalid tagName:`, `overflow-x`, `tocByHref`, `applyLayout`, `key`, `promise`, `avoid`, `joinSteps`, `application/zip`, `ico`, `). Corrupted zip ?`, `metalink`, `setimmediate`, `packaging`, `./compressedObject`, `offset`, `canonical`, ` is not implemented by the current driver`, `dataset`, `raw`, `parentNode`, `nodeType`, `getElementsByTagName`, `asx`, `srcdoc`, `_current`, `setNamedItem`, `_onTouchEnd`, `localStorageWrapper`, `importScripts`, `_dev`, `marks`, `onclick`, `createContainer`, `reframe`, `replacements`, `expanding`, `clear`, `label`, `arraySet`, `2524470IHczjE`, `MutationObserver`, `direction`, `content`, `request`, `heap_max`, `inherits`, `unhighlight`, `columnNumber`, `epubjs-container-`, `check`, `blob`, `wbits`, `cssUrls`, `max_chain_length`, `delay`, `spinePos`, `px!important`, `driver`, `XML`, `reader`, `prototype`, `setProperty`, `appendData`, `sane`, `relocated`, `_onScroll`, `rtl`, `replaceCss`, `findTextEndRange`, `data_type`, `objectStore`, `scalable`, `spread`, `hasOwnProperty`, ` bytes.`, `manifest`, `onupgradeneeded`, `Url`, `ParseError`, `fromCharCode`, `type`, `asBinary`, `writing-mode`, `flush`, `sin`, `filteredStep`, `totalPages`, `onDisplayed`, `ENTITY_REFERENCE_NODE`, `crc32`, `unmark`, `onTouchEnd`, `getQName`, `stylesheet`, `" missed value!! "`, `background-size`, `lockedWidth`, `ignoreClass`, `NO_DATA_ALLOWED_ERR`, `doc`, `)!!`, `pageFromCfi`, `themes`, `createDocumentType`, `body`, `get`, `hash_mask`, `executeSql`, `countWords`, `splitUrls`, `scale`, `orientationLock`, `webkitURL`, `findEnd`, `_defaultConfig`, `bl_count`, `_driverSet`, `nlen`, `_themes`, `nodebuffer`, `WRONG_DOCUMENT_ERR`, `innerWidth`, `INDEX_SIZE_ERR`, `localforage`, `__ee__`, `Path`, `state`, `_width`, `static_len`, `getElementText`, `dosPermissions`, `_currentCfi`, `stack`, `steps`, `cfiFromRange`, `document`, `button`, `scrolling`, `removeItem`, `HTML_ENTITIES`, `pop`, `application/xml`, `checkRequirements`, `padding-right`, `2865520rsHwDA`, `getContainer`, `../utils/common`, `touchend`, `readInt`, `ext`, `startTouchX`, `adler`, `row`, `total_out`, `patchOffset`, `substring`, `unshift`, `txt`, `hidden`, `./defaults`, `SHOWN`, `querySelector`, `top left`, `spineById`, `Can't read the data of '`, `string2buf`, `toStringTag`, `namespaceURI`, `inflateReset`, `Range`, `DOCUMENT_NODE`, `columnWidth`, `avail_in`, `mediaQueryListeners`, `offsetHeight`, `isSignature`, `_annotations`, `catch`, `textContent`, `Pane`, `leading`, `endContainer`, `strm`, `resolve`, `smoothScrollTo`, `leftOver`, `mediaText`, `border-box`, `attributeNames`, `removeEventListener`, `time`, `ndist`, `onTouchStart`, `pageList`, `terminal`, `./compressions`, `createFolders`, `text`, `userAgent`, `path`, `findNavPath`, `extra_len`, `assets`, `lineHeight`, `si32`, `epubcfi`, `scrollIntoView`, `paddingLeft`, `register`, `updated`, `./lib/deflate`, `header crc mismatch`, `sectionRender`, `_onResize`, `Buf16`, `namespace`, `directory`, `end tag name: `, `isLocked`, `number`, `length`, `startTouchY`, `defineProperty`, `round`, `getBlob`, `EXPAND`, `wnext`, `bind`, `SELECTED_RANGE`, `../external`, `code`, `fullsize`, `warning`, `onEnd`, `Index size error`, `clientHeight`, `readData`, `d_desc`, `gap`, `Couldn't convert value into a JSON string: `, `constructor`, `uncompressedSize`, `mozURL`, `width`, `previous`, `setLayout`, `Multi-volumes zip are not supported`, `createAttributeNS`, `afterScrolled`, `coverPath`, `errorHandler`, `translateZ(0)`, `onResized`, `status`, `diskNumber`, `Highlight`, `all`, `visibility`, `onRejected`, `razdwatrzy`, `100%`, `height=`, `_internalType`, `extra_base`, `then`, `distdyn`, `scrollLeft`, `allowScriptedContent`, `replacementUrls`, `find`, `containerPadding`, `getBoundingClientRect`, `[object Uint8Array]`, `extra`, `0px`, `static_tree`, ` WHERE id = ? LIMIT 1`, `text/xml`, `bits`, `race`, `wmx`, `unknown compression method`, `6077765fSAfQq`, `enableScroll`, `walk`, `source`, `_decompressWorker`, `findExtraFieldUnicodePath`, `touches`, `lineNumber`, `auto`, `_layout`, `1800135yIwGAx`, `Invalid state`, `locator`, `clientX`, `firstChild`, `context`, `relatedTarget`, `isFinished`, `_tr_align`, `lenbits`, `propName`, `cover`, `scrollDeltaHorz`, `serializer`, `./zipObject`, `_tr_flush_block`, `resizeOnOrientationChange`, `match`, `createView`, `adp`, `fixedLayout`, `./base64`, `\0\0\0\0`, `last_lit`, `deferredOperations`, `]]>`, `settings`, `defaultView`, `spineItems`, `window`, `checkSignature`, `message`, `Z_FINISH`, `pending_out`, `QUOTA_ERR`, `startContainer`, `start`, `MANAGERS`, `verticalAlign`, `highlights`, `unarchive`, `[native code`, `name`, `unload`, `stream end`, `fixed-layout`, `postMessage`, `retrieve`, `scrollDeltaVert`, `cfi`, `childNodes`, `splitPath`, `_layoutStyle`, `reflowable`, `parent`, `smi`, `mouse-events`, `scrollHeight`, `0.3`, `result`, `LOCATION_CHANGED`, `isArray`, `scrollTimeout`, `_bounds`, `addScrollListeners`, `pending_buf_size`, `node`, `resizeCheck`, `inflateSetDictionary`, `pcf`, `collapse`, `text/html`, `displayed`, `handleResponse`, `mp4v`, `scrollWidth`, `keys`, `BOOK`, `next`, `setStart`, `display`, `columns`, `match_available`, `inflateEnd`, `hash_bits`, `test`, `level`, `snap`, `_locations`, `triggerViewEvent`, `&amp;`, `firstPage`, `[object ArrayBuffer]`, `zipComment`, `handleLinks`, `Expected a function`, `indexOf`, `injectIdentifier`, `previousSibling`, `bottom`, `match_length`, `./ArrayReader`, `invalid distance too far back`, `contents`, `getAttribute`, `abs`, `resources`, `magic`, `override`, `prefix`, `optimizedBinaryString`, `;base64,`, `generate`, `remove`, `_wordCounter`, `hash_shift`, `urlCache`, `max`, `currentNSMap`, `loadNavigation`, `queue`, `dyn_dtree`, `storeName`, `off`, `resizeListeners`, `string`, `reverse`, `ref`, `filename`, `hide`, `flow`, `sunos`, `urls`, `toLowerCase`, `attributes`, `rules`, `filter`, `isCfiString`, `navPoint`, `avail_out`, `function`, `MSApp`, `package`, `mark`, `array`, `,col:`, `lit_bufsize`, `rmi`, `fileCommentStr`, `RELOCATED`, `open`, `utf8border`, `process`, `lookahead`, `pre-paginated`, `keyup`, `touchmove`, `endOffset`, `Contents`, `first`, `oldVersion`, `offsetWidth`, `default`, `decompressed`, `render`, `swf`, `__eeOnceListener__`, `nodeName`, `paddingBottom`, `underline`, `concat`, `./object`, `centralDirRecords`, `tagName`, `FlateWorker/`, `prepareContent`, `didScroll`, `CENTRAL_DIRECTORY_END`, `lencode`, `black`, `preventDefault`, `borderLeftWidth`, `_listeners`, `lendyn`, `store`, `idref`, `DOMSTRING_SIZE_ERR`, `media-overlay`, `pfb`, `charAt`, `deflateInit2`, `determineLayoutProperties`, `loadAsync`, `classList`, `__proto__`, `../crc32`, `overflow`, `lastIndex`, `fileComment`, `splice`, `raz`, `insert`, `dequeue`, `DATA_DESCRIPTOR`, `injectScript`, `DocumentTouch`, `onerror`, `transformTo`, `has_stree`, `mid`, `wrap`, `method`, `maxWait`, `container`, `m3a`, `_read`, `encode`, `updateWritingMode`, `VIEWS`, `overflow-y`, `manager`, `matches`, `destroy`, `selectionchange`, `max_chain`, `_driver`, `parse`, `must be non-object`, `flags`, `flattenChunks`, `marginTop`, `mousemove`, `vertical`, `_initStorage`, `requireManager`, `dispatchEvent`, `nextSibling`, `create`, `link[property='dc.identifier']`, `closed`, `href`, `setEnd`, `file`, `SELECT * FROM `, `url`, `4ttMpSR`, `This method has been removed in JSZip 3.0, please check the upgrade guide.`, `call`, `./utf8`, `bounds`, `window_size`, `options`, `transform`, `important`, `scrollY`, `_annotationsBySectionIndex`, `output`, `./utils/common`, `onmessage`, `ANNOTATION`, `Z_STREAM_END`, `xml`, `binary`, `tocById`, `requestAnimationFrame`, `base`, `enqueue`, `spine`, `skip`, `show`, `css`, `replace`, `processWords`, `_injected`, `_extend`, `./zlib/deflate`, `attached`, `transitionProperty`, `RESIZE`, `readAsBinaryString`, `transaction`, `pct`, `openToSpread`, ` is not supported by this method`, `MAX_VALUE_32BITS`, `UPDATED`, ` is not complete:`, `initial-scale=`, `containerStyles`, `registerRules`, `" missed quot(")!!`, `bytesWritten`, `pending`, `exports`, `_height`, `buf2string`, `supportsSrcdoc`, `centralDirRecordsOnThisDisk`, `mapping`, `getComputedStyle`, `isPaginated`, ` and @id='`, `zip64EndOfCentralSize`, `scrollTop`, `pathname`, `lastIndexOf`, `distbits`, `56570931qeOsLB`, `d_buf`, `externalFileAttributes`, `entity not found:`, `acceptNode`, `w_mask`, `bl_tree`, `readCentralPart`, `floor`, `dc.identifier`, `args`, `protocol`, `m4v`, `meta`, `_afterDisplayed`, `padding-top`, `right`, `deflateSetDictionary`, `http://purl.org/dc/elements/1.1/`, `max_code`, `attribute value must after "="`, `divisor`, `snapper`, `fit`, `fontSize`, `trim`, `lastPage`, `stringifyByChar`, `views`, `createObjectURL`, `root`, `prepend`, `RENDITION`, `wsize`, `zero`, `minimum-scale=`, `DELETE FROM `, `getSelection`, `index`, `left`, `slice`, `addClass`, `withStreamInfo`, `horizontal`, `lie`, `onload`, `bi_buf`, `fileName`, `data`, `loading`, `setAttribute`, `spineNodeIndex`, `error`, `cdata`, `processChunk`, `load`, `map`, `range`, `nodeValue`, `scroll`, `SCROLLED`, `ncxItem`];
  return Z = function() {
    return e3;
  }, Z();
}
function Se(e3) {
  for (var t2 = [], n2 = e3.childNodes, r2 = 0; r2 < n2.length; r2++) {
    let e4 = n2[r2];
    e4.nodeType === 1 && t2.push(e4);
  }
  return t2;
}
function Ce(e3) {
  for (var t2 = $, n2 = [e3]; e3; e3 = e3[t2(386)]) n2.unshift(e3);
  return n2;
}
function we(e3, t2, n2) {
  for (var r2 = $, i2 = [], a2 = e3.childNodes, o2 = 0; o2 < a2.length; o2++) {
    let e4 = a2[o2];
    if (e4.nodeType === 1 && e4.nodeName[r2(792)]() === t2) {
      if (n2) return e4;
      i2.push(e4);
    }
  }
  if (!n2) return i2;
}
function Te(e3, t2) {
  var n2 = $;
  let r2;
  if (!(e3 === null || t2 === ``)) for (r2 = e3[n2(386)]; r2.nodeType === 1; ) {
    if (r2[n2(832)].toLowerCase() === t2) return r2;
    r2 = r2.parentNode;
  }
}
var Ee = class {
  constructor() {
    this.collapsed = false, this.commonAncestorContainer = void 0, this.endContainer = void 0, this.endOffset = void 0, this.startContainer = void 0, this.startOffset = void 0;
  }
  setStart(e3, t2) {
    var n2 = $;
    this.startContainer = e3, this.startOffset = t2, this[n2(548)] ? this.commonAncestorContainer = this._commonAncestorContainer() : this.collapse(true), this._checkCollapsed();
  }
  setEnd(e3, t2) {
    var n2 = $;
    this.endContainer = e3, this[n2(816)] = t2, this.startContainer ? (this.collapsed = false, this.commonAncestorContainer = this._commonAncestorContainer()) : this[n2(729)](false), this._checkCollapsed();
  }
  collapse(e3) {
    this.collapsed = true, e3 ? (this.endContainer = this.startContainer, this.endOffset = this.startOffset, this.commonAncestorContainer = this.startContainer.parentNode) : (this.startContainer = this.endContainer, this.startOffset = this.endOffset, this.commonAncestorContainer = this.endOffset.parentNode);
  }
  selectNode(e3) {
    let t2 = e3[$(386)], n2 = Array.prototype.indexOf.call(t2.childNodes, e3);
    this.setStart(t2, n2), this.setEnd(t2, n2 + 1);
  }
  selectNodeContents(e3) {
    var t2 = $;
    e3.childNodes[e3.childNodes - 1];
    let n2 = e3.nodeType === 3 ? e3.textContent[t2(587)] : parent[t2(709)][t2(587)];
    this.setStart(e3, 0), this[t2(900)](e3, n2);
  }
  _commonAncestorContainer(e3, t2) {
    var n2 = $, r2 = Ce(e3 || this[n2(694)]), i2 = Ce(t2 || this.endContainer);
    if (r2[0] == i2[0]) {
      for (var a2 = 0; a2 < r2.length; a2++) if (r2[a2] != i2[a2]) return r2[a2 - 1];
    }
  }
  _checkCollapsed() {
    var e3 = $;
    this[e3(694)] === this.endContainer && this.startOffset === this.endOffset ? this.collapsed = true : this.collapsed = false;
  }
  toString() {
  }
}, De = t(e((e3, t2) => {
  if (!n2) var n2 = { cwd: function() {
    return `/`;
  } };
  function r2(e4) {
    if (typeof e4 != `string`) throw TypeError(`Path must be a string. Received ` + e4);
  }
  function i2(e4, t3) {
    for (var n3 = $, r3 = ``, i3 = -1, a3 = 0, o3, s2 = 0; s2 <= e4.length; ++s2) {
      if (s2 < e4.length) o3 = e4.charCodeAt(s2);
      else if (o3 === 47) break;
      else o3 = 47;
      if (o3 === 47) {
        if (!(i3 === s2 - 1 || a3 === 1)) if (i3 !== s2 - 1 && a3 === 2) {
          if (r3.length < 2 || r3.charCodeAt(r3.length - 1) !== 46 || r3.charCodeAt(r3.length - 2) !== 46) {
            if (r3.length > 2) {
              for (var c2 = r3.length - 1, l2 = c2; l2 >= 0 && r3.charCodeAt(l2) !== 47; --l2) ;
              if (l2 !== c2) {
                r3 = l2 === -1 ? `` : r3.slice(0, l2), i3 = s2, a3 = 0;
                continue;
              }
            } else if (r3[n3(587)] === 2 || r3.length === 1) {
              r3 = ``, i3 = s2, a3 = 0;
              continue;
            }
          }
          t3 && (r3.length > 0 ? r3 += `/..` : r3 = `..`);
        } else r3.length > 0 ? r3 += `/` + e4.slice(i3 + 1, s2) : r3 = e4[n3(1006)](i3 + 1, s2);
        i3 = s2, a3 = 0;
      } else o3 === 46 && a3 !== -1 ? ++a3 : a3 = -1;
    }
    return r3;
  }
  function a2(e4, t3) {
    var n3 = $, r3 = t3.dir || t3[n3(996)], i3 = t3.base || (t3.name || ``) + (t3.ext || ``);
    return r3 ? r3 === t3.root ? r3 + i3 : r3 + e4 + i3 : i3;
  }
  var o2 = { resolve: function() {
    for (var e4 = ``, t3 = false, a3, o3 = arguments.length - 1; o3 >= -1 && !t3; o3--) {
      var s2;
      o3 >= 0 ? s2 = arguments[o3] : (a3 === void 0 && (a3 = n2.cwd()), s2 = a3), r2(s2), s2.length !== 0 && (e4 = s2 + `/` + e4, t3 = s2.charCodeAt(0) === 47);
    }
    return e4 = i2(e4, !t3), t3 ? e4.length > 0 ? `/` + e4 : `/` : e4.length > 0 ? e4 : `.`;
  }, normalize: function(e4) {
    var t3 = $;
    if (r2(e4), e4.length === 0) return `.`;
    var n3 = e4[t3(1429)](0) === 47, a3 = e4.charCodeAt(e4.length - 1) === 47;
    return e4 = i2(e4, !n3), e4.length === 0 && !n3 && (e4 = `.`), e4.length > 0 && a3 && (e4 += `/`), n3 ? `/` + e4 : e4;
  }, isAbsolute: function(e4) {
    return r2(e4), e4.length > 0 && e4.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return `.`;
    for (var e4, t3 = 0; t3 < arguments.length; ++t3) {
      var n3 = arguments[t3];
      r2(n3), n3.length > 0 && (e4 === void 0 ? e4 = n3 : e4 += `/` + n3);
    }
    return e4 === void 0 ? `.` : o2.normalize(e4);
  }, relative: function(e4, t3) {
    var n3 = $;
    if (r2(e4), r2(t3), e4 === t3 || (e4 = o2.resolve(e4), t3 = o2.resolve(t3), e4 === t3)) return ``;
    for (var i3 = 1; i3 < e4.length && e4.charCodeAt(i3) === 47; ++i3) ;
    for (var a3 = e4.length, s2 = a3 - i3, c2 = 1; c2 < t3.length && t3.charCodeAt(c2) === 47; ++c2) ;
    for (var l2 = t3.length - c2, u2 = s2 < l2 ? s2 : l2, d2 = -1, f2 = 0; f2 <= u2; ++f2) {
      if (f2 === u2) {
        if (l2 > u2) {
          if (t3.charCodeAt(c2 + f2) === 47) return t3.slice(c2 + f2 + 1);
          if (f2 === 0) return t3.slice(c2 + f2);
        } else s2 > u2 && (e4.charCodeAt(i3 + f2) === 47 ? d2 = f2 : f2 === 0 && (d2 = 0));
        break;
      }
      var p2 = e4.charCodeAt(i3 + f2);
      if (p2 !== t3.charCodeAt(c2 + f2)) break;
      p2 === 47 && (d2 = f2);
    }
    var m2 = ``;
    for (f2 = i3 + d2 + 1; f2 <= a3; ++f2) (f2 === a3 || e4[n3(1429)](f2) === 47) && (m2[n3(587)] === 0 ? m2 += `..` : m2 += `/..`);
    return m2.length > 0 ? m2 + t3.slice(c2 + d2) : (c2 += d2, t3.charCodeAt(c2) === 47 && ++c2, t3[n3(1006)](c2));
  }, _makeLong: function(e4) {
    return e4;
  }, dirname: function(e4) {
    if (r2(e4), e4.length === 0) return `.`;
    for (var t3 = e4.charCodeAt(0), n3 = t3 === 47, i3 = -1, a3 = true, o3 = e4.length - 1; o3 >= 1; --o3) if (t3 = e4.charCodeAt(o3), t3 === 47) {
      if (!a3) {
        i3 = o3;
        break;
      }
    } else a3 = false;
    return i3 === -1 ? n3 ? `/` : `.` : n3 && i3 === 1 ? `//` : e4.slice(0, i3);
  }, basename: function(e4, t3) {
    var n3 = $;
    if (t3 !== void 0 && typeof t3 != `string`) throw TypeError(`"ext" argument must be a string`);
    r2(e4);
    var i3 = 0, a3 = -1, o3 = true, s2;
    if (t3 !== void 0 && t3[n3(587)] > 0 && t3.length <= e4.length) {
      if (t3.length === e4.length && t3 === e4) return ``;
      var c2 = t3[n3(587)] - 1, l2 = -1;
      for (s2 = e4.length - 1; s2 >= 0; --s2) {
        var u2 = e4.charCodeAt(s2);
        if (u2 === 47) {
          if (!o3) {
            i3 = s2 + 1;
            break;
          }
        } else l2 === -1 && (o3 = false, l2 = s2 + 1), c2 >= 0 && (u2 === t3.charCodeAt(c2) ? --c2 === -1 && (a3 = s2) : (c2 = -1, a3 = l2));
      }
      return i3 === a3 ? a3 = l2 : a3 === -1 && (a3 = e4.length), e4.slice(i3, a3);
    } else {
      for (s2 = e4[n3(587)] - 1; s2 >= 0; --s2) if (e4[n3(1429)](s2) === 47) {
        if (!o3) {
          i3 = s2 + 1;
          break;
        }
      } else a3 === -1 && (o3 = false, a3 = s2 + 1);
      return a3 === -1 ? `` : e4.slice(i3, a3);
    }
  }, extname: function(e4) {
    r2(e4);
    for (var t3 = -1, n3 = 0, i3 = -1, a3 = true, o3 = 0, s2 = e4.length - 1; s2 >= 0; --s2) {
      var c2 = e4.charCodeAt(s2);
      if (c2 === 47) {
        if (!a3) {
          n3 = s2 + 1;
          break;
        }
        continue;
      }
      i3 === -1 && (a3 = false, i3 = s2 + 1), c2 === 46 ? t3 === -1 ? t3 = s2 : o3 !== 1 && (o3 = 1) : t3 !== -1 && (o3 = -1);
    }
    return t3 === -1 || i3 === -1 || o3 === 0 || o3 === 1 && t3 === i3 - 1 && t3 === n3 + 1 ? `` : e4.slice(t3, i3);
  }, format: function(e4) {
    if (typeof e4 != `object` || !e4) throw TypeError(`Parameter "pathObject" must be an object, not ` + typeof e4);
    return a2(`/`, e4);
  }, parse: function(e4) {
    var t3 = $;
    r2(e4);
    var n3 = { root: ``, dir: ``, base: ``, ext: ``, name: `` };
    if (e4.length === 0) return n3;
    var i3 = e4.charCodeAt(0), a3 = i3 === 47, o3;
    a3 ? (n3.root = `/`, o3 = 1) : o3 = 0;
    for (var s2 = -1, c2 = 0, l2 = -1, u2 = true, d2 = e4.length - 1, f2 = 0; d2 >= o3; --d2) {
      if (i3 = e4.charCodeAt(d2), i3 === 47) {
        if (!u2) {
          c2 = d2 + 1;
          break;
        }
        continue;
      }
      l2 === -1 && (u2 = false, l2 = d2 + 1), i3 === 46 ? s2 === -1 ? s2 = d2 : f2 !== 1 && (f2 = 1) : s2 !== -1 && (f2 = -1);
    }
    return s2 === -1 || l2 === -1 || f2 === 0 || f2 === 1 && s2 === l2 - 1 && s2 === c2 + 1 ? l2 !== -1 && (c2 === 0 && a3 ? n3.base = n3.name = e4.slice(1, l2) : n3.base = n3.name = e4.slice(c2, l2)) : (c2 === 0 && a3 ? (n3.name = e4.slice(1, s2), n3.base = e4.slice(1, l2)) : (n3.name = e4[t3(1006)](c2, s2), n3.base = e4.slice(c2, l2)), n3.ext = e4[t3(1006)](s2, l2)), c2 > 0 ? n3.dir = e4.slice(0, c2 - 1) : a3 && (n3.dir = `/`), n3;
  }, sep: `/`, delimiter: `:`, posix: null };
  t2.exports = o2;
})()), Oe = class {
  constructor(e3) {
    var t2 = $, n2 = e3.indexOf(`://`), r2;
    n2 > -1 && (e3 = new URL(e3)[t2(963)]), r2 = this.parse(e3), this[t2(566)] = e3, this.isDirectory(e3) ? this[t2(583)] = e3 : this.directory = r2.dir + `/`, this.filename = r2[t2(924)], this.extension = r2[t2(516)].slice(1);
  }
  parse(e3) {
    return De.default.parse(e3);
  }
  isAbsolute(e3) {
    var t2 = $;
    return De.default.isAbsolute(e3 || this[t2(566)]);
  }
  isDirectory(e3) {
    return e3.charAt(e3.length - 1) === `/`;
  }
  [i(550)](e3) {
    var t2 = i;
    return De.default.resolve(this[t2(583)], e3);
  }
  relative(e3) {
    return e3 && e3.indexOf(`://`) > -1 ? e3 : De.default.relative(this.directory, e3);
  }
  [i(710)](e3) {
    return this.splitPathRe.exec(e3).slice(1);
  }
  toString() {
    return this.path;
  }
}, ke = class {
  constructor(e3, t2) {
    var n2 = i, r2 = e3.indexOf(n2(1136)) > -1, a2 = e3, o2;
    if (this.Url = void 0, this.href = e3, this[n2(977)] = ``, this.origin = ``, this.hash = ``, this.hash = ``, this.search = ``, this.base = t2, !r2 && t2 !== false && typeof t2 != n2(784) && window && window.location && (this[n2(924)] = window.location.href), r2 || this.base) try {
      this.base ? this.Url = new URL(e3, this.base) : this.Url = new URL(e3), this[n2(899)] = this.Url.href, this.protocol = this[n2(444)].protocol, this.origin = this.Url.origin, this.hash = this.Url.hash, this.search = this.Url.search, a2 = this.Url.pathname + (this.Url.search ? this.Url.search : ``);
    } catch {
      this.Url = void 0, this.base && (o2 = new Oe(this.base), a2 = o2.resolve(a2));
    }
    this.Path = new Oe(a2), this[n2(583)] = this.Path.directory, this[n2(787)] = this.Path[n2(787)], this.extension = this[n2(492)].extension;
  }
  path() {
    return this.Path;
  }
  [i(550)](e3) {
    var t2 = i, n2 = e3[t2(755)](`://`) > -1, r2;
    return n2 ? e3 : (r2 = De.default.resolve(this[t2(583)], e3), this.origin + r2);
  }
  relative(e3) {
    var t2 = i;
    return De[t2(821)].relative(e3, this[t2(583)]);
  }
  toString() {
    return this.href;
  }
}, Ae = 1, je = 3, Me = 9, Ne = class e2 {
  constructor(t2, n2, r2) {
    var a2 = i, o2;
    if (this.str = ``, this.base = {}, this[a2(422)] = 0, this.range = false, this.path = {}, this.start = null, this[a2(1276)] = null, !(this instanceof e2)) return new e2(t2, n2, r2);
    if (typeof n2 == `string` ? this.base = this.parseComponent(n2) : typeof n2 == a2(1086) && n2[a2(500)] && (this.base = n2), o2 = this.checkType(t2), o2 === `string`) return this.str = t2, z(this, this.parse(t2));
    if (o2 === `range`) return z(this, this.fromRange(t2, this[a2(924)], r2));
    if (o2 === `node`) return z(this, this.fromNode(t2, this.base, r2));
    if (o2 === `EpubCFI` && t2.path) return t2;
    if (t2) throw TypeError(`not a valid argument for EpubCFI`);
    return this;
  }
  checkType(t2) {
    var n2 = i;
    return this.isCfiString(t2) ? `string` : t2 && typeof t2 == n2(1086) && (G(t2) === n2(536) || t2.startContainer !== void 0) ? `range` : t2 && typeof t2 == `object` && t2.nodeType !== void 0 ? n2(725) : t2 && typeof t2 == `object` && t2 instanceof e2 ? `EpubCFI` : false;
  }
  parse(e3) {
    var t2 = i, n2 = { spinePos: -1, range: false, base: {}, path: {}, start: null, end: null }, r2, a2, o2;
    return typeof e3 != t2(784) || (e3.indexOf(`epubcfi(`) === 0 && e3[e3.length - 1] === `)` && (e3 = e3.slice(8, e3[t2(587)] - 1)), r2 = this.getChapterComponent(e3), !r2) ? { spinePos: -1 } : (n2.base = this.parseComponent(r2), a2 = this.getPathComponent(e3), n2.path = this.parseComponent(a2), o2 = this.getRange(e3), o2 && (n2[t2(1023)] = true, n2[t2(695)] = this.parseComponent(o2[0]), n2.end = this.parseComponent(o2[1])), n2.spinePos = n2.base.steps[1][t2(1004)], n2);
  }
  parseComponent(e3) {
    var t2 = i, n2 = { steps: [], terminal: { offset: null, assertion: null } }, r2 = e3[t2(1152)](`:`), a2 = r2[0].split(`/`), o2;
    return r2.length > 1 && (o2 = r2[1], n2.terminal = this.parseTerminal(o2)), a2[0] === `` && a2.shift(), n2.steps = a2.map((function(e4) {
      return this.parseStep(e4);
    })[t2(594)](this)), n2;
  }
  parseStep(e3) {
    var t2, n2, r2, i2 = e3.match(/\[(.*)\]/), a2;
    if (i2 && i2[1] && (a2 = i2[1]), n2 = parseInt(e3), !isNaN(n2)) return n2 % 2 == 0 ? (t2 = `element`, r2 = n2 / 2 - 1) : (t2 = `text`, r2 = (n2 - 1) / 2), { type: t2, index: r2, id: a2 || null };
  }
  parseTerminal(e3) {
    var t2, n2, r2 = e3.match(/\[(.*)\]/);
    return r2 && r2[1] ? (t2 = parseInt(e3.split(`[`)[0]), n2 = r2[1]) : t2 = parseInt(e3), R(t2) || (t2 = null), { offset: t2, assertion: n2 };
  }
  getChapterComponent(e3) {
    return e3[i(1152)](`!`)[0];
  }
  getPathComponent(e3) {
    var t2 = e3.split(`!`);
    if (t2[1]) return t2[1].split(`,`)[0];
  }
  getRange(e3) {
    var t2 = e3.split(`,`);
    return t2.length === 3 ? [t2[1], t2[2]] : false;
  }
  getCharecterOffsetComponent(e3) {
    return e3.split(`:`)[1] || ``;
  }
  [i(373)](e3) {
    var t2 = i;
    return e3 ? e3.map(function(e4) {
      var t3 = $, n2 = ``;
      return e4[t3(447)] === `element` && (n2 += (e4.index + 1) * 2), e4.type === t3(564) && (n2 += 1 + 2 * e4.index), e4.id && (n2 += `[` + e4.id + `]`), n2;
    })[t2(1470)](`/`) : ``;
  }
  segmentString(e3) {
    var t2 = i, n2 = `/`;
    return n2 += this.joinSteps(e3.steps), e3[t2(561)] && e3[t2(561)].offset != null && (n2 += `:` + e3[t2(561)].offset), e3.terminal && e3.terminal.assertion != null && (n2 += `[` + e3.terminal[t2(1395)] + `]`), n2;
  }
  toString() {
    var e3 = i, t2 = `epubcfi(`;
    return t2 += this[e3(1166)](this.base), t2 += `!`, t2 += this[e3(1166)](this.path), this.range && this.start && (t2 += `,`, t2 += this.segmentString(this.start)), this.range && this.end && (t2 += `,`, t2 += this.segmentString(this.end)), t2 += `)`, t2;
  }
  compare(t2, n2) {
    var r2 = i, a2, o2, s2, c2;
    if (typeof t2 == `string` && (t2 = new e2(t2)), typeof n2 == `string` && (n2 = new e2(n2)), t2[r2(422)] > n2.spinePos) return 1;
    if (t2.spinePos < n2.spinePos) return -1;
    t2.range ? (a2 = t2.path.steps[r2(829)](t2.start.steps), s2 = t2.start.terminal) : (a2 = t2.path[r2(500)], s2 = t2.path.terminal), n2.range ? (o2 = n2.path.steps.concat(n2.start[r2(500)]), c2 = n2[r2(695)].terminal) : (o2 = n2.path.steps, c2 = n2.path[r2(561)]);
    for (var l2 = 0; l2 < a2.length; l2++) {
      if (!a2[l2]) return -1;
      if (!o2[l2] || a2[l2][r2(1004)] > o2[l2].index) return 1;
      if (a2[l2].index < o2[l2][r2(1004)]) return -1;
    }
    return a2.length < o2.length ? -1 : s2.offset > c2[r2(381)] ? 1 : s2.offset < c2.offset ? -1 : 0;
  }
  step(e3) {
    var t2 = i, n2 = e3[t2(387)] === je ? t2(564) : `element`;
    return { id: e3.id, tagName: e3.tagName, type: n2, index: this.position(e3) };
  }
  filteredStep(e3, t2) {
    var n2 = i, r2 = this.filter(e3, t2), a2;
    if (r2) return a2 = r2.nodeType === je ? `text` : n2(1443), { id: r2.id, tagName: r2.tagName, type: a2, index: this[n2(1256)](r2, t2) };
  }
  [i(351)](e3, t2, n2) {
    for (var r2 = i, a2 = { steps: [], terminal: { offset: null, assertion: null } }, o2 = e3, s2; o2 && o2.parentNode && o2.parentNode.nodeType != Me; ) s2 = n2 ? this[r2(452)](o2, n2) : this.step(o2), s2 && a2.steps[r2(523)](s2), o2 = o2.parentNode;
    return t2 != null && t2 >= 0 && (a2.terminal.offset = t2, a2.steps[a2.steps[r2(587)] - 1].type != r2(564) && a2.steps.push({ type: r2(564), index: 0 })), a2;
  }
  equalStep(e3, t2) {
    return !e3 || !t2 ? false : e3.index === t2.index && e3.id === t2.id && e3.type === t2.type;
  }
  fromRange(e3, t2, n2) {
    var r2 = i, a2 = { range: false, base: {}, path: {}, start: null, end: null }, o2 = e3.startContainer, s2 = e3.endContainer, c2 = e3.startOffset, l2 = e3[r2(816)], u2 = false;
    if (n2 && (u2 = o2.ownerDocument[r2(528)](`.` + n2) != null), typeof t2 == `string` ? (a2.base = this.parseComponent(t2), a2[r2(422)] = a2.base.steps[1].index) : typeof t2 == r2(1086) && (a2.base = t2), e3.collapsed) u2 && (c2 = this[r2(521)](o2, c2, n2)), a2.path = this.pathTo(o2, c2, n2);
    else {
      a2.range = true, u2 && (c2 = this[r2(521)](o2, c2, n2)), a2.start = this.pathTo(o2, c2, n2), u2 && (l2 = this.patchOffset(s2, l2, n2)), a2.end = this.pathTo(s2, l2, n2), a2.path = { steps: [], terminal: null };
      var d2 = a2.start.steps.length, f2;
      for (f2 = 0; f2 < d2 && this.equalStep(a2[r2(695)].steps[f2], a2.end.steps[f2]); f2++) f2 === d2 - 1 ? a2.start.terminal === a2.end.terminal && (a2.path[r2(500)].push(a2.start.steps[f2]), a2.range = false) : a2.path.steps.push(a2.start.steps[f2]);
      a2.start[r2(500)] = a2.start[r2(500)][r2(1006)](a2.path.steps.length), a2.end.steps = a2.end[r2(500)].slice(a2.path.steps.length);
    }
    return a2;
  }
  fromNode(e3, t2, n2) {
    var r2 = i, a2 = { range: false, base: {}, path: {}, start: null, end: null };
    return typeof t2 == `string` ? (a2[r2(924)] = this.parseComponent(t2), a2.spinePos = a2.base.steps[1].index) : typeof t2 == `object` && (a2.base = t2), a2.path = this.pathTo(e3, null, n2), a2;
  }
  filter(e3, t2) {
    var n2 = i, r2, a2, o2, s2, c2, l2 = false;
    return e3[n2(387)] === je ? (l2 = true, o2 = e3.parentNode, r2 = e3.parentNode.classList.contains(t2)) : (l2 = false, r2 = e3.classList.contains(t2)), r2 && l2 ? (s2 = o2.previousSibling, c2 = o2[n2(895)], s2 && s2.nodeType === je ? a2 = s2 : c2 && c2.nodeType === je && (a2 = c2), a2 || e3) : r2 && !l2 ? false : e3;
  }
  [i(521)](e3, t2, n2) {
    var r2 = i;
    if (e3[r2(387)] != je) throw Error(`Anchor must be a text node`);
    var a2 = e3, o2 = t2;
    for (e3.parentNode.classList.contains(n2) && (a2 = e3.parentNode); a2[r2(757)]; ) {
      if (a2.previousSibling[r2(387)] === Ae) if (a2.previousSibling[r2(852)].contains(n2)) o2 += a2.previousSibling.textContent.length;
      else break;
      else o2 += a2.previousSibling[r2(545)].length;
      a2 = a2.previousSibling;
    }
    return o2;
  }
  normalizedMap(e3, t2, n2) {
    var r2 = {}, i2 = -1, a2, o2 = e3.length, s2, c2;
    for (a2 = 0; a2 < o2; a2++) s2 = e3[a2].nodeType, s2 === Ae && e3[a2].classList.contains(n2) && (s2 = je), a2 > 0 && s2 === je && c2 === je ? r2[a2] = i2 : t2 === s2 && (i2 += 1, r2[a2] = i2), c2 = s2;
    return r2;
  }
  position(e3) {
    var t2 = i, n2, r2;
    return e3.nodeType === Ae ? (n2 = e3.parentNode[t2(1491)], n2 || (n2 = Se(e3.parentNode)), r2 = Array.prototype[t2(755)].call(n2, e3)) : (n2 = this.textNodes(e3[t2(386)]), r2 = n2.indexOf(e3)), r2;
  }
  filteredPosition(e3, t2) {
    var n2 = i, r2, a2, o2;
    return e3.nodeType === Ae ? (r2 = e3.parentNode.children, o2 = this.normalizedMap(r2, Ae, t2)) : (r2 = e3.parentNode.childNodes, e3.parentNode.classList[n2(1302)](t2) && (e3 = e3.parentNode, r2 = e3.parentNode.childNodes), o2 = this.normalizedMap(r2, je, t2)), a2 = Array.prototype.indexOf.call(r2, e3), o2[a2];
  }
  stepsToXpath(e3) {
    var t2 = [`.`, `*`];
    return e3.forEach(function(e4) {
      var n2 = $, r2 = e4.index + 1;
      e4.id ? t2.push(`*[position()=` + r2 + n2(960) + e4.id + `']`) : e4.type === `text` ? t2.push(`text()[` + r2 + `]`) : t2[n2(1386)](`*[` + r2 + `]`);
    }), t2.join(`/`);
  }
  stepsToQuerySelector(e3) {
    var t2 = i, n2 = [`html`];
    return e3.forEach(function(e4) {
      var t3 = $, r2 = e4.index + 1;
      e4.id ? n2.push(`#` + e4.id) : e4.type === `text` || n2[t3(1386)](`*:nth-child(` + r2 + `)`);
    }), n2[t2(1470)](`>`);
  }
  textNodes(e3, t2) {
    var n2 = i;
    return Array[n2(427)].slice.call(e3.childNodes).filter(function(e4) {
      return e4[n2(387)] === je ? true : !!(t2 && e4.classList.contains(t2));
    });
  }
  walkToNode(e3, t2, n2) {
    var r2 = i, a2 = t2 || document, o2 = a2.documentElement, s2, c2, l2 = e3.length, u2;
    for (u2 = 0; u2 < l2 && (c2 = e3[u2], c2.type === `element` ? c2.id ? o2 = a2[r2(1184)](c2.id) : (s2 = o2[r2(1491)] || Se(o2), o2 = s2[c2.index]) : c2.type === `text` && (o2 = this.textNodes(o2, n2)[c2.index]), o2); u2++) ;
    return o2;
  }
  [i(1235)](e3, t2, n2) {
    var r2 = t2 || document, i2, a2;
    return !n2 && r2.evaluate !== void 0 ? (a2 = this.stepsToXpath(e3), i2 = r2.evaluate(a2, r2, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) : i2 = n2 ? this.walkToNode(e3, r2, n2) : this.walkToNode(e3, r2), i2;
  }
  fixMiss(e3, t2, n2, r2) {
    var a2 = i, o2 = this.findNode(e3[a2(1006)](0, -1), n2, r2), s2 = o2.childNodes, c2 = this.normalizedMap(s2, je, r2), l2, u2, d2 = e3[e3.length - 1].index;
    for (let e4 in c2) {
      if (!c2.hasOwnProperty(e4)) return;
      if (c2[e4] === d2) if (l2 = s2[e4], u2 = l2.textContent.length, t2 > u2) t2 -= u2;
      else {
        o2 = l2.nodeType === Ae ? l2.childNodes[0] : l2;
        break;
      }
    }
    return { container: o2, offset: t2 };
  }
  toRange(e3, t2) {
    var n2 = i, r2 = e3 || document, a2, o2, s2, c2, l2, u2 = this, d2, f2, p2 = t2 ? r2.querySelector(`.` + t2) != null : false, m2;
    if (a2 = r2.createRange === void 0 ? new Ee() : r2[n2(1192)](), u2.range ? (o2 = u2.start, d2 = u2[n2(566)].steps[n2(829)](o2.steps), c2 = this.findNode(d2, r2, p2 ? t2 : null), s2 = u2[n2(1276)], f2 = u2.path.steps.concat(s2.steps), l2 = this.findNode(f2, r2, p2 ? t2 : null)) : (o2 = u2[n2(566)], d2 = u2.path.steps, c2 = this[n2(1235)](u2.path.steps, r2, p2 ? t2 : null)), c2) try {
      o2[n2(561)][n2(381)] == null ? a2.setStart(c2, 0) : a2.setStart(c2, o2.terminal[n2(381)]);
    } catch {
      m2 = this.fixMiss(d2, o2.terminal.offset, r2, p2 ? t2 : null), a2.setStart(m2[n2(872)], m2.offset);
    }
    else return console.log(n2(1308), this.toString()), null;
    if (l2) try {
      s2.terminal.offset == null ? a2.setEnd(l2, 0) : a2.setEnd(l2, s2.terminal[n2(381)]);
    } catch {
      m2 = this.fixMiss(f2, u2.end.terminal.offset, r2, p2 ? t2 : null), a2.setEnd(m2.container, m2.offset);
    }
    return a2;
  }
  isCfiString(e3) {
    return typeof e3 == `string` && e3.indexOf(`epubcfi(`) === 0 && e3[e3.length - 1] === `)`;
  }
  generateChapterComponent(e3, t2, n2) {
    var r2 = parseInt(t2), i2 = `/` + (e3 + 1) * 2 + `/`;
    return i2 += (r2 + 1) * 2, n2 && (i2 += `[` + n2 + `]`), i2;
  }
  collapse(e3) {
    var t2 = i;
    this.range && (this.range = false, e3 ? (this.path[t2(500)] = this[t2(566)][t2(500)].concat(this.start.steps), this.path.terminal = this.start[t2(561)]) : (this[t2(566)].steps = this[t2(566)].steps.concat(this.end.steps), this.path.terminal = this.end.terminal));
  }
}, Pe = class {
  constructor(e3) {
    this.context = e3 || this, this.hooks = [];
  }
  register() {
    for (var e3 = i, t2 = 0; t2 < arguments[e3(587)]; ++t2) if (typeof arguments[t2] == `function`) this.hooks.push(arguments[t2]);
    else for (var n2 = 0; n2 < arguments[t2].length; ++n2) this[e3(1419)].push(arguments[t2][n2]);
  }
  deregister(e3) {
    var t2 = i;
    let n2;
    for (let r2 = 0; r2 < this.hooks.length; r2++) if (n2 = this.hooks[r2], n2 === e3) {
      this.hooks[t2(858)](r2, 1);
      break;
    }
  }
  [i(1348)]() {
    var e3 = i, t2 = arguments, n2 = this.context, r2 = [];
    return this[e3(1419)].forEach(function(i2) {
      var a2 = e3;
      try {
        var o2 = i2.apply(n2, t2);
      } catch (e4) {
        console.log(e4);
      }
      o2 && typeof o2[a2(631)] == `function` && r2.push(o2);
    }), Promise.all(r2);
  }
  list() {
    return this.hooks;
  }
  clear() {
    return this.hooks = [];
  }
};
function Fe(e3, t2) {
  var n2 = i, r2, a2, o2 = t2.url, s2 = o2.indexOf(`://`) > -1;
  e3 && (a2 = q(e3, n2(1277)), r2 = q(a2, `base`), r2 || (r2 = e3[n2(1119)](`base`), a2[n2(1289)](r2, a2[n2(663)])), !s2 && window && window.location && (o2 = window.location.origin + o2), r2.setAttribute(`href`, o2));
}
function Ie(e3, t2) {
  var n2 = i, r2, a2, o2 = t2[n2(382)];
  e3 && (r2 = q(e3, `head`), a2 = q(r2, `link[rel='canonical']`), a2 ? a2.setAttribute(n2(899), o2) : (a2 = e3[n2(1119)](`link`), a2.setAttribute(`rel`, `canonical`), a2.setAttribute(`href`, o2), r2.appendChild(a2)));
}
function Le(e3, t2) {
  var n2 = i, r2, a2, o2 = t2[n2(844)];
  e3 && (r2 = q(e3, n2(1277)), a2 = q(r2, n2(897)), a2 ? a2.setAttribute(`content`, o2) : (a2 = e3.createElement(`meta`), a2.setAttribute(`name`, n2(975)), a2[n2(1016)](`content`, o2), r2.appendChild(a2)));
}
function Re(e3, t2) {
  var n2 = e3.querySelectorAll(`a[href]`);
  if (n2.length) for (var r2 = q(e3.ownerDocument, `base`), i2 = r2 ? r2.getAttribute(`href`) : void 0, a2 = (function(e4) {
    var n3 = $, r3 = e4.getAttribute(`href`);
    if (r3[n3(755)](`mailto:`) !== 0) if (r3.indexOf(n3(1136)) > -1) e4.setAttribute(`target`, `_blank`);
    else {
      var a3;
      try {
        a3 = new ke(r3, i2);
      } catch {
      }
      e4[n3(398)] = function() {
        var e5 = n3;
        return a3 && a3[e5(1343)] ? t2(a3.Path.path + a3.hash) : t2(a3 ? a3[e5(492)].path : r3), false;
      };
    }
  }).bind(this), o2 = 0; o2 < n2.length; o2++) a2(n2[o2]);
}
function ze(e3, t2, n2) {
  return t2.forEach(function(t3, r2) {
    t3 && n2[r2] && (t3 = t3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`), e3 = e3.replace(new RegExp(t3, `g`), n2[r2]));
  }), e3;
}
function Be(e3, t2, n2, r2) {
  var a2 = i, o2 = typeof window < `u` ? window.URL : false, s2 = o2 ? `blob` : `arraybuffer`, c2 = new X(), l2 = new XMLHttpRequest(), u2 = XMLHttpRequest[a2(427)], d2;
  for (d2 in `overrideMimeType` in u2 || Object[a2(589)](u2, `overrideMimeType`, { value: function() {
  } }), n2 && (l2.withCredentials = true), l2.onreadystatechange = p2, l2.onerror = f2, l2.open(`GET`, e3, true), r2) l2.setRequestHeader(d2, r2[d2]);
  t2 == `json` && l2.setRequestHeader(`Accept`, `application/json`), t2 || (t2 = new Oe(e3).extension), t2 == a2(417) && (l2.responseType = s2), me(t2) && l2[a2(1355)](a2(644)), t2 == `binary` && (l2.responseType = a2(1038)), l2.send();
  function f2(e4) {
    c2.reject(e4);
  }
  function p2() {
    var e4 = a2;
    if (this[e4(1400)] === XMLHttpRequest.DONE) {
      var n3 = false;
      if ((this[e4(1304)] === `` || this.responseType === e4(502)) && (n3 = this.responseXML), this.status === 200 || this.status === 0 || n3) {
        var r3;
        if (!this.response && !n3) return c2.reject({ status: this.status, message: `Empty Response`, stack: Error().stack }), c2.promise;
        if (this[e4(620)] === 403) return c2[e4(1220)]({ status: this.status, response: this[e4(1269)], message: `Forbidden`, stack: Error()[e4(499)] }), c2[e4(371)];
        r3 = n3 ? this.responseXML : me(t2) ? K(this[e4(1269)], `text/xml`) : t2 == `xhtml` ? K(this.response, `application/xhtml+xml`) : t2 == `html` || t2 == `htm` ? K(this.response, e4(730)) : t2 == `json` ? JSON.parse(this.response) : t2 == `blob` ? o2 ? this.response : new Blob([this.response]) : this.response, c2.resolve(r3);
      } else c2.reject({ status: this.status, message: this.response, stack: Error().stack });
    }
  }
  return c2.promise;
}
var Ve = class {
  constructor(e3, t2) {
    var n2 = i;
    this.idref = e3.idref, this.linear = e3.linear === `yes`, this.properties = e3[n2(359)], this.index = e3.index, this.href = e3.href, this.url = e3.url, this.canonical = e3.canonical, this[n2(737)] = e3.next, this.prev = e3.prev, this.cfiBase = e3[n2(1098)], t2 ? this.hooks = t2 : (this.hooks = {}, this.hooks.serialize = new Pe(this), this[n2(1419)].content = new Pe(this)), this.document = void 0, this.contents = void 0, this.output = void 0;
  }
  load(e3) {
    var t2 = i, n2 = e3 || this.request || Be, r2 = new X(), a2 = r2.promise;
    return this[t2(762)] ? r2.resolve(this.contents) : n2(this.url)[t2(631)]((function(e4) {
      var n3 = t2;
      return this.document = e4, this.contents = e4.documentElement, this[n3(1419)].content[n3(1348)](this.document, this);
    })[t2(594)](this)).then((function() {
      r2.resolve(this.contents);
    }).bind(this)).catch(function(e4) {
      r2[t2(1220)](e4);
    }), a2;
  }
  base() {
    return Fe(this.document, this);
  }
  [i(823)](e3) {
    var t2 = i, n2 = new X(), r2 = n2.promise;
    return this.output, this.load(e3)[t2(631)]((function(e4) {
      var n3 = t2, r3 = (typeof navigator < `u` && navigator.userAgent || ``).indexOf(`Trident`) >= 0, i2 = new (typeof XMLSerializer > `u` || r3 ? ee[n3(1137)] : XMLSerializer)();
      return this.output = i2.serializeToString(e4), this.output;
    }).bind(this)).then((function() {
      var e4 = t2;
      return this.hooks.serialize[e4(1348)](this.output, this);
    }).bind(this)).then((function() {
      n2.resolve(this.output);
    }).bind(this)).catch(function(e4) {
      n2.reject(e4);
    }), r2;
  }
  find(e3) {
    var t2 = i, n2 = this, r2 = [], a2 = e3.toLowerCase(), o2 = function(e4) {
      for (var t3 = $, i2 = e4.textContent.toLowerCase(), o3 = n2.document.createRange(), s2, c2, l2 = -1, u2, d2 = 150; c2 != -1; ) c2 = i2[t3(755)](a2, l2 + 1), c2 != -1 && (o3 = n2.document.createRange(), o3.setStart(e4, c2), o3.setEnd(e4, c2 + a2.length), s2 = n2[t3(501)](o3), e4.textContent.length < d2 ? u2 = e4[t3(545)] : (u2 = e4.textContent.substring(c2 - d2 / 2, c2 + d2 / 2), u2 = `...` + u2 + t3(1212)), r2.push({ cfi: s2, excerpt: u2 })), l2 = c2;
    };
    return Y(n2[t2(502)], function(e4) {
      o2(e4);
    }), r2;
  }
  search(e3, t2 = 5) {
    var n2 = i;
    if (document.createTreeWalker === void 0) return this[n2(636)](e3);
    let r2 = [], a2 = this, o2 = e3.toLowerCase(), s2 = function(e4) {
      var t3 = n2;
      let i2 = e4.reduce((e5, n3) => e5 + n3[t3(545)], ``).toLowerCase()[t3(755)](o2);
      if (i2 != -1) {
        let n3 = i2 + o2.length, s3 = 0, c3 = 0;
        if (i2 < e4[0][t3(587)]) {
          let o3;
          for (; s3 < e4.length - 1 && (c3 += e4[s3].length, !(n3 <= c3)); ) s3 += 1;
          let l3 = e4[0], u3 = e4[s3], d2 = a2.document.createRange();
          d2[t3(738)](l3, i2);
          let f2 = e4.slice(0, s3).reduce((e5, t4) => e5 + t4.textContent.length, 0);
          d2.setEnd(u3, f2 > n3 ? n3 : n3 - f2), o3 = a2.cfiFromRange(d2);
          let p2 = e4.slice(0, s3 + 1).reduce((e5, t4) => e5 + t4.textContent, ``);
          p2.length > 150 && (p2 = p2.substring(i2 - 150 / 2, i2 + 150 / 2), p2 = `...` + p2 + t3(1212)), r2.push({ cfi: o3, excerpt: p2 });
        }
      }
    }, c2 = document.createTreeWalker(a2[n2(502)], NodeFilter.SHOW_TEXT, null, false), l2, u2 = [];
    for (; l2 = c2.nextNode(); ) u2.push(l2), u2.length == t2 && (s2(u2[n2(1006)](0, t2)), u2 = u2.slice(1, t2));
    return u2[n2(587)] > 0 && s2(u2), r2;
  }
  reconcileLayoutSettings(e3) {
    var t2 = i, n2 = { layout: e3.layout, spread: e3.spread, orientation: e3.orientation };
    return this.properties[t2(1318)](function(e4) {
      var r2 = t2, i2 = e4[r2(930)](`rendition:`, ``), a2 = i2.indexOf(`-`), o2, s2;
      a2 != -1 && (o2 = i2[r2(1006)](0, a2), s2 = i2.slice(a2 + 1), n2[o2] = s2);
    }), n2;
  }
  cfiFromRange(e3) {
    return new Ne(e3, this.cfiBase).toString();
  }
  cfiFromElement(e3) {
    return new Ne(e3, this.cfiBase).toString();
  }
  unload() {
    var e3 = i;
    this.document = void 0, this[e3(762)] = void 0, this.output = void 0;
  }
  [i(881)]() {
    var e3 = i;
    this[e3(702)](), this.hooks.serialize.clear(), this.hooks[e3(409)].clear(), this.hooks = void 0, this.idref = void 0, this.linear = void 0, this.properties = void 0, this.index = void 0, this.href = void 0, this.url = void 0, this.next = void 0, this.prev = void 0, this.cfiBase = void 0;
  }
}, He = class {
  constructor() {
    var e3 = i;
    this.spineItems = [], this.spineByHref = {}, this.spineById = {}, this.hooks = {}, this.hooks.serialize = new Pe(), this[e3(1419)].content = new Pe(), this[e3(1419)].content.register(Fe), this.hooks.content.register(Ie), this.hooks.content[e3(575)](Le), this.epubcfi = new Ne(), this.loaded = false, this.items = void 0, this[e3(442)] = void 0, this[e3(1017)] = void 0, this.baseUrl = void 0, this.length = void 0;
  }
  unpack(e3, t2, n2) {
    var r2 = i;
    this[r2(1090)] = e3.spine, this.manifest = e3[r2(442)], this.spineNodeIndex = e3.spineNodeIndex, this.baseUrl = e3.baseUrl || e3.basePath || ``, this.length = this.items.length, this.items.forEach((e4, i2) => {
      var a2 = r2, o2 = this.manifest[e4.idref], s2;
      e4.index = i2, e4.cfiBase = this.epubcfi[a2(1394)](this.spineNodeIndex, e4.index, e4.id), e4.href && (e4[a2(903)] = t2(e4.href, true), e4.canonical = n2(e4.href)), o2 && (e4[a2(899)] = o2.href, e4[a2(903)] = t2(e4.href, true), e4.canonical = n2(e4[a2(899)]), o2.properties.length && e4[a2(359)].push.apply(e4.properties, o2.properties)), e4.linear === `yes` ? (e4.prev = (function() {
        var t3 = a2;
        let n3 = e4[t3(1004)];
        for (; n3 > 0; ) {
          let e5 = this[t3(472)](n3 - 1);
          if (e5 && e5.linear) return e5;
          --n3;
        }
      }).bind(this), e4.next = (function() {
        let t3 = e4.index;
        for (; t3 < this.spineItems.length - 1; ) {
          let e5 = this.get(t3 + 1);
          if (e5 && e5.linear) return e5;
          t3 += 1;
        }
      }).bind(this)) : (e4.prev = function() {
      }, e4.next = function() {
      }), s2 = new Ve(e4, this.hooks), this.append(s2);
    }), this.loaded = true;
  }
  get(e3) {
    var t2 = i, n2 = 0;
    if (e3 === void 0) for (; n2 < this.spineItems.length; ) {
      let e4 = this.spineItems[n2];
      if (e4 && e4.linear) break;
      n2 += 1;
    }
    else this.epubcfi.isCfiString(e3) ? n2 = new Ne(e3).spinePos : typeof e3 == `number` || isNaN(e3) === false ? n2 = e3 : typeof e3 == `string` && e3[t2(755)](`#`) === 0 ? n2 = this[t2(530)][e3.substring(1)] : typeof e3 == `string` && (e3 = e3.split(`#`)[0], n2 = this.spineByHref[e3] || this[t2(1052)][encodeURI(e3)]);
    return this.spineItems[n2] || null;
  }
  append(e3) {
    var t2 = i, n2 = this.spineItems.length;
    return e3[t2(1004)] = n2, this[t2(687)][t2(1386)](e3), this.spineByHref[decodeURI(e3.href)] = n2, this.spineByHref[encodeURI(e3.href)] = n2, this.spineByHref[e3.href] = n2, this.spineById[e3.idref] = n2, n2;
  }
  [i(997)](e3) {
    var t2 = i;
    return this.spineByHref[e3[t2(899)]] = 0, this.spineById[e3.idref] = 0, this.spineItems.forEach(function(e4, t3) {
      e4.index = t3;
    }), 0;
  }
  remove(e3) {
    var t2 = i, n2 = this.spineItems.indexOf(e3);
    if (n2 > -1) return delete this.spineByHref[e3[t2(899)]], delete this[t2(530)][e3.idref], this.spineItems.splice(n2, 1);
  }
  each() {
    return this.spineItems.forEach.apply(this.spineItems, arguments);
  }
  first() {
    var e3 = i;
    let t2 = 0;
    do {
      let n2 = this[e3(472)](t2);
      if (n2 && n2.linear) return n2;
      t2 += 1;
    } while (t2 < this.spineItems.length);
  }
  last() {
    let e3 = this.spineItems.length - 1;
    do {
      let t2 = this.get(e3);
      if (t2 && t2.linear) return t2;
      --e3;
    } while (e3 >= 0);
  }
  destroy() {
    var e3 = i;
    this[e3(1062)]((t2) => t2[e3(881)]()), this.spineItems = void 0, this.spineByHref = void 0, this.spineById = void 0, this.hooks.serialize.clear(), this.hooks.content.clear(), this.hooks = void 0, this[e3(572)] = void 0, this.loaded = false, this.items = void 0, this.manifest = void 0, this.spineNodeIndex = void 0, this.baseUrl = void 0, this.length = void 0;
  }
}, Ue = class {
  constructor(e3) {
    var t2 = i;
    this._q = [], this[t2(664)] = e3, this.tick = P, this.running = false, this.paused = false;
  }
  [i(925)]() {
    var e3 = i, t2, n2, r2, a2 = [].shift.call(arguments), o2 = arguments;
    if (!a2) throw Error(`No Task Provided`);
    return typeof a2 == `function` ? (t2 = new X(), n2 = t2.promise, r2 = { task: a2, args: o2, deferred: t2, promise: n2 }) : r2 = { promise: a2 }, this._q.push(r2), this.paused == 0 && !this[e3(1172)] && this.run(), r2.promise;
  }
  dequeue() {
    var e3 = i, t2, n2, r2;
    if (this._q.length && !this.paused) {
      if (t2 = this._q[e3(1311)](), n2 = t2.task, n2) return r2 = n2.apply(this.context, t2[e3(976)]), r2 && typeof r2.then == `function` ? r2.then((function() {
        t2.deferred.resolve.apply(this.context, arguments);
      }).bind(this), (function() {
        var n3 = e3;
        t2.deferred[n3(1220)].apply(this.context, arguments);
      })[e3(594)](this)) : (t2.deferred.resolve[e3(1445)](this.context, r2), t2.promise);
      if (t2.promise) return t2[e3(371)];
    } else return t2 = new X(), t2.deferred.resolve(), t2.promise;
  }
  dump() {
    for (var e3 = i; this._q[e3(587)]; ) this.dequeue();
  }
  run() {
    var e3 = i;
    return this.running || (this.running = true, this.defered = new X()), this[e3(1138)].call(window, () => {
      this._q.length ? this.dequeue().then((function() {
        this.run();
      }).bind(this)) : (this.defered.resolve(), this.running = void 0);
    }), this.paused == 1 && (this.paused = false), this.defered.promise;
  }
  flush() {
    var e3 = i;
    if (this.running) return this.running;
    if (this._q.length) return this[e3(1172)] = this[e3(861)]()[e3(631)]((function() {
      return this.running = void 0, this.flush();
    }).bind(this)), this.running;
  }
  clear() {
    this._q = [];
  }
  [i(587)]() {
    var e3 = i;
    return this._q[e3(587)];
  }
  [i(1486)]() {
    this.paused = true;
  }
  stop() {
    var e3 = i;
    this._q = [], this[e3(1172)] = false, this.paused = true;
  }
}, We = [`keydown`, i(814), `keypressed`, `mouseup`, `mousedown`, i(890), `click`, `touchend`, `touchstart`, `touchmove`], Q = { BOOK: { OPEN_FAILED: `openFailed` }, CONTENTS: { EXPAND: i(1489), RESIZE: `resize`, SELECTED: `selected`, SELECTED_RANGE: `selectedRange`, LINK_CLICKED: i(1216) }, LOCATIONS: { CHANGED: i(1457) }, MANAGERS: { RESIZE: `resize`, RESIZED: `resized`, ORIENTATION_CHANGE: `orientationchange`, ADDED: `added`, SCROLL: `scroll`, SCROLLED: i(1480), REMOVED: `removed` }, VIEWS: { AXIS: `axis`, WRITING_MODE: `writingMode`, LOAD_ERROR: i(1287), RENDERED: `rendered`, RESIZED: `resized`, DISPLAYED: `displayed`, SHOWN: i(1097), HIDDEN: `hidden`, MARK_CLICKED: `markClicked` }, RENDITION: { STARTED: `started`, ATTACHED: i(935), DISPLAYED: `displayed`, DISPLAY_ERROR: `displayerror`, RENDERED: i(1317), REMOVED: `removed`, RESIZED: `resized`, ORIENTATION_CHANGE: `orientationchange`, LOCATION_CHANGED: `locationChanged`, RELOCATED: i(431), MARK_CLICKED: i(1455), SELECTED: `selected`, LAYOUT: `layout` }, LAYOUT: { UPDATED: i(576) }, ANNOTATION: { ATTACH: `attach`, DETACH: `detach` } }, Ge = class {
  constructor(e3, t2, n2) {
    var r2 = i;
    this.spine = e3, this[r2(410)] = t2, this.pause = n2 || 100, this.q = new Ue(this), this.epubcfi = new Ne(), this._locations = [], this._locationsWords = [], this.total = 0, this.break = 150, this[r2(391)] = 0, this._wordCounter = 0, this.currentLocation = ``, this._currentCfi = ``, this.processingTimeout = void 0;
  }
  [i(771)](e3) {
    var t2 = i;
    return e3 && (this.break = e3), this.q.pause(), this[t2(926)].each((function(e4) {
      var n2 = t2;
      e4.linear && this.q.enqueue(this[n2(811)][n2(594)](this), e4);
    }).bind(this)), this.q.run()[t2(631)]((function() {
      var e4 = t2;
      return this.total = this[e4(747)].length - 1, this[e4(498)] && (this.currentLocation = this._currentCfi), this._locations;
    }).bind(this));
  }
  [i(1192)]() {
    return { startContainer: void 0, startOffset: void 0, endContainer: void 0, endOffset: void 0 };
  }
  process(e3) {
    var t2 = i;
    return e3[t2(1021)](this.request)[t2(631)]((function(n2) {
      var r2 = t2, i2 = new X(), a2 = this[r2(885)](n2, e3.cfiBase);
      return this[r2(747)] = this[r2(747)].concat(a2), e3[r2(702)](), this[r2(1252)] = setTimeout(() => i2.resolve(a2), this.pause), i2.promise;
    }).bind(this));
  }
  parse(e3, t2, n2) {
    var r2 = i, a2 = [], o2, s2 = e3.ownerDocument, c2 = q(s2, `body`), l2 = 0, u2, d2 = n2 || this.break;
    if (Y(c2, (function(e4) {
      var n3 = $, r3 = e4.length, i2, s3 = 0;
      if (e4.textContent.trim().length === 0) return false;
      for (l2 == 0 && (o2 = this.createRange(), o2.startContainer = e4, o2.startOffset = 0), i2 = d2 - l2, i2 > r3 && (l2 += r3, s3 = r3); s3 < r3; ) if (i2 = d2 - l2, l2 === 0 && (s3 += 1, o2 = this[n3(1192)](), o2.startContainer = e4, o2.startOffset = s3), s3 + i2 >= r3) l2 += r3 - s3, s3 = r3;
      else {
        s3 += i2, o2.endContainer = e4, o2.endOffset = s3;
        let n4 = new Ne(o2, t2).toString();
        a2.push(n4), l2 = 0;
      }
      u2 = e4;
    }).bind(this)), o2 && o2.startContainer && u2) {
      o2.endContainer = u2, o2.endOffset = u2[r2(587)];
      let e4 = new Ne(o2, t2).toString();
      a2.push(e4), l2 = 0;
    }
    return a2;
  }
  generateFromWords(e3, t2, n2) {
    var r2 = i, a2 = e3 ? new Ne(e3) : void 0;
    return this.q.pause(), this._locationsWords = [], this._wordCounter = 0, this[r2(926)][r2(1062)]((function(e4) {
      var i2 = r2;
      e4.linear && (a2 ? e4.index >= a2[i2(422)] && this.q.enqueue(this.processWords.bind(this), e4, t2, a2, n2) : this.q.enqueue(this[i2(931)].bind(this), e4, t2, a2, n2));
    }).bind(this)), this.q.run().then((function() {
      return this._currentCfi && (this.currentLocation = this._currentCfi), this._locationsWords;
    }).bind(this));
  }
  processWords(e3, t2, n2, r2) {
    var a2 = i;
    return r2 && this._locationsWords[a2(587)] >= r2 ? Promise.resolve() : e3.load(this[a2(410)]).then((function(i2) {
      var o2 = a2, s2 = new X(), c2 = this.parseWords(i2, e3, t2, n2), l2 = r2 - this[o2(1236)].length;
      return this._locationsWords = this._locationsWords[o2(829)](c2.length >= r2 ? c2[o2(1006)](0, l2) : c2), e3[o2(702)](), this.processingTimeout = setTimeout(() => s2.resolve(c2), this[o2(1486)]), s2.promise;
    }).bind(this));
  }
  [i(475)](e3) {
    return e3 = e3.replace(/(^\s*)|(\s*$)/gi, ``), e3 = e3.replace(/[ ]{2,}/gi, ` `), e3 = e3.replace(/\n /, `
`), e3.split(` `).length;
  }
  parseWords(e3, t2, n2, r2) {
    var a2 = i, o2 = t2[a2(1098)], s2 = [], c2 = e3[a2(1247)], l2 = q(c2, `body`), u2 = n2, d2 = r2 ? r2.spinePos !== t2.index : true, f2;
    return r2 && t2[a2(1004)] === r2.spinePos && (f2 = r2.findNode(r2.range ? r2.path.steps[a2(829)](r2.start.steps) : r2.path.steps, e3.ownerDocument)), Y(l2, (function(e4) {
      var t3 = a2;
      if (!d2) if (e4 === f2) d2 = true;
      else return false;
      if (e4[t3(545)].length < 10 && e4.textContent.trim().length === 0) return false;
      var n3 = this[t3(475)](e4.textContent), r3, i2 = 0;
      if (n3 === 0) return false;
      for (r3 = u2 - this._wordCounter, r3 > n3 && (this._wordCounter += n3, i2 = n3); i2 < n3; ) if (r3 = u2 - this._wordCounter, i2 + r3 >= n3) this._wordCounter += n3 - i2, i2 = n3;
      else {
        i2 += r3;
        let n4 = new Ne(e4, o2);
        s2.push({ cfi: n4[t3(1200)](), wordCount: this._wordCounter }), this[t3(773)] = 0;
      }
    }).bind(this)), s2;
  }
  locationFromCfi(e3) {
    var t2 = i;
    let n2;
    return Ne[t2(427)].isCfiString(e3) && (e3 = new Ne(e3)), this._locations.length === 0 ? -1 : (n2 = ce(e3, this._locations, this.epubcfi.compare), n2 > this.total ? this.total : n2);
  }
  [i(1180)](e3) {
    var t2 = i;
    if (this._locations[t2(587)] === 0) return null;
    var n2 = this.locationFromCfi(e3);
    return this.percentageFromLocation(n2);
  }
  percentageFromLocation(e3) {
    return !e3 || !this.total ? 0 : e3 / this.total;
  }
  cfiFromLocation(e3) {
    var t2 = i, n2 = -1;
    return typeof e3 != `number` && (e3 = parseInt(e3)), e3 >= 0 && e3 < this[t2(747)].length && (n2 = this._locations[e3]), n2;
  }
  cfiFromPercentage(e3) {
    var t2 = i;
    let n2;
    if (e3 > 1 && console.warn(`Normalize cfiFromPercentage value to between 0 - 1`), e3 >= 1) {
      let e4 = new Ne(this[t2(747)][this.total]);
      return e4.collapse(), e4.toString();
    }
    return n2 = Math.ceil(this.total * e3), this.cfiFromLocation(n2);
  }
  load(e3) {
    return typeof e3 == i(784) ? this._locations = JSON.parse(e3) : this._locations = e3, this.total = this._locations.length - 1, this._locations;
  }
  save() {
    return JSON.stringify(this._locations);
  }
  getCurrent() {
    return this._current;
  }
  setCurrent(e3) {
    var t2;
    if (typeof e3 == `string`) this._currentCfi = e3;
    else if (typeof e3 == `number`) this._current = e3;
    else return;
    this._locations.length !== 0 && (typeof e3 == `string` ? (t2 = this.locationFromCfi(e3), this._current = t2) : t2 = e3, this.emit(Q.LOCATIONS.CHANGED, { percentage: this.percentageFromLocation(t2) }));
  }
  get currentLocation() {
    return this._current;
  }
  set currentLocation(e3) {
    var t2 = i;
    this[t2(1228)](e3);
  }
  length() {
    return this._locations.length;
  }
  [i(881)]() {
    var e3 = i;
    this.spine = void 0, this.request = void 0, this.pause = void 0, this.q.stop(), this.q = void 0, this.epubcfi = void 0, this[e3(747)] = void 0, this.total = void 0, this.break = void 0, this._current = void 0, this.currentLocation = void 0, this[e3(498)] = void 0, clearTimeout(this[e3(1252)]);
  }
};
(0, M.default)(Ge.prototype);
var Ke = class {
  constructor(e3) {
    this.packagePath = ``, this.directory = ``, this.encoding = ``, e3 && this.parse(e3);
  }
  parse(e3) {
    var t2 = i, n2;
    if (!e3) throw Error(`Container File Not Found`);
    if (n2 = q(e3, `rootfile`), !n2) throw Error(`No RootFile Found`);
    this[t2(1469)] = n2[t2(763)](`full-path`), this.directory = De.default[t2(1142)](this.packagePath), this.encoding = e3.xmlEncoding;
  }
  destroy() {
    var e3 = i;
    this.packagePath = void 0, this.directory = void 0, this[e3(1095)] = void 0;
  }
}, qe = class {
  constructor(e3) {
    this.manifest = {}, this.navPath = ``, this.ncxPath = ``, this.coverPath = ``, this.spineNodeIndex = 0, this.spine = [], this.metadata = {}, e3 && this.parse(e3);
  }
  parse(e3) {
    var t2 = i, n2, r2, a2;
    if (!e3) throw Error(t2(1382));
    if (n2 = q(e3, `metadata`), !n2) throw Error(`No Metadata Found`);
    if (r2 = q(e3, `manifest`), !r2) throw Error(t2(1120));
    if (a2 = q(e3, `spine`), !a2) throw Error(`No Spine Found`);
    return this.manifest = this.parseManifest(r2), this.navPath = this[t2(567)](r2), this.ncxPath = this[t2(1431)](r2, a2), this.coverPath = this.findCoverPath(e3), this.spineNodeIndex = H(a2), this.spine = this[t2(1134)](a2, this.manifest), this.uniqueIdentifier = this.findUniqueIdentifier(e3), this.metadata = this.parseMetadata(n2), this.metadata.direction = a2.getAttribute(`page-progression-direction`), { metadata: this.metadata, spine: this.spine, manifest: this[t2(442)], navPath: this.navPath, ncxPath: this[t2(362)], coverPath: this.coverPath, spineNodeIndex: this[t2(1017)] };
  }
  parseMetadata(e3) {
    var t2 = i, n2 = {};
    return n2.title = this.getElementText(e3, `title`), n2.creator = this.getElementText(e3, `creator`), n2.description = this.getElementText(e3, `description`), n2.pubdate = this.getElementText(e3, t2(1384)), n2.publisher = this.getElementText(e3, `publisher`), n2.identifier = this.getElementText(e3, `identifier`), n2.language = this.getElementText(e3, `language`), n2.rights = this[t2(496)](e3, `rights`), n2.modified_date = this.getPropertyText(e3, `dcterms:modified`), n2.layout = this[t2(1046)](e3, `rendition:layout`), n2.orientation = this.getPropertyText(e3, `rendition:orientation`), n2.flow = this[t2(1046)](e3, `rendition:flow`), n2.viewport = this.getPropertyText(e3, `rendition:viewport`), n2.media_active_class = this.getPropertyText(e3, `media:active-class`), n2.spread = this[t2(1046)](e3, `rendition:spread`), n2;
  }
  parseManifest(e3) {
    var t2 = {}, n2 = _e(e3, `item`);
    return Array.prototype.slice.call(n2).forEach(function(e4) {
      var n3 = $, r2 = e4.getAttribute(`id`), i2 = e4[n3(763)](`href`) || ``, a2 = e4.getAttribute(`media-type`) || ``, o2 = e4.getAttribute(n3(846)) || ``, s2 = e4.getAttribute(n3(359)) || ``;
      t2[r2] = { href: i2, type: a2, overlay: o2, properties: s2[n3(587)] ? s2[n3(1152)](` `) : [] };
    }), t2;
  }
  [i(1134)](e3, t2) {
    var n2 = i, r2 = [], a2 = _e(e3, `itemref`);
    return Array.prototype[n2(1006)].call(a2).forEach(function(e4, t3) {
      var i2 = n2, a3 = e4.getAttribute(`idref`), o2 = e4[i2(763)](i2(359)) || ``, s2 = o2.length ? o2.split(` `) : [], c2 = { id: e4.getAttribute(`id`), idref: a3, linear: e4.getAttribute(`linear`) || `yes`, properties: s2, index: t3 };
      r2.push(c2);
    }), r2;
  }
  findUniqueIdentifier(e3) {
    var t2 = i, n2 = e3.documentElement.getAttribute(`unique-identifier`);
    if (!n2) return ``;
    var r2 = e3.getElementById(n2);
    return r2 && r2.localName === `identifier` && r2.namespaceURI === t2(984) && r2.childNodes.length > 0 ? r2[t2(709)][0].nodeValue[t2(991)]() : ``;
  }
  [i(567)](e3) {
    var t2 = i, n2 = J(e3, `item`, { properties: `nav` });
    return n2 ? n2.getAttribute(t2(899)) : false;
  }
  findNcxPath(e3, t2) {
    var n2 = i, r2 = J(e3, `item`, { "media-type": `application/x-dtbncx+xml` }), a2;
    return r2 || (a2 = t2.getAttribute(`toc`), a2 && (r2 = e3[n2(528)](`#` + a2))), r2 ? r2.getAttribute(`href`) : false;
  }
  findCoverPath(e3) {
    var t2 = i;
    q(e3, `package`)[t2(763)](`version`);
    var n2 = J(e3, t2(1326), { properties: `cover-image` });
    if (n2) return n2.getAttribute(`href`);
    var r2 = J(e3, `meta`, { name: `cover` });
    if (r2) {
      var a2 = r2.getAttribute(`content`), o2 = e3[t2(1184)](a2);
      return o2 ? o2.getAttribute(t2(899)) : ``;
    } else return false;
  }
  [i(496)](e3, t2) {
    var n2 = e3.getElementsByTagNameNS(`http://purl.org/dc/elements/1.1/`, t2), r2;
    return !n2 || n2.length === 0 ? `` : (r2 = n2[0], r2.childNodes.length ? r2.childNodes[0].nodeValue : ``);
  }
  [i(1046)](e3, t2) {
    var n2 = J(e3, `meta`, { property: t2 });
    return n2 && n2.childNodes.length ? n2.childNodes[0].nodeValue : ``;
  }
  load(e3) {
    var t2 = i;
    this.metadata = e3.metadata;
    let n2 = e3.readingOrder || e3.spine;
    return this.spine = n2.map((e4, n3) => (e4[t2(1004)] = n3, e4.linear = e4.linear || `yes`, e4)), e3.resources.forEach((e4, n3) => {
      var r2 = t2;
      this.manifest[n3] = e4, e4[r2(1084)] && e4.rel[0] === `cover` && (this[r2(616)] = e4.href);
    }), this[t2(1017)] = 0, this[t2(1409)] = e3.toc.map((e4, n3) => (e4.label = e4[t2(1412)], e4)), { metadata: this.metadata, spine: this.spine, manifest: this.manifest, navPath: this.navPath, ncxPath: this.ncxPath, coverPath: this[t2(616)], spineNodeIndex: this.spineNodeIndex, toc: this.toc };
  }
  destroy() {
    var e3 = i;
    this[e3(442)] = void 0, this.navPath = void 0, this.ncxPath = void 0, this.coverPath = void 0, this.spineNodeIndex = void 0, this.spine = void 0, this.metadata = void 0;
  }
}, Je = class {
  constructor(e3) {
    var t2 = i;
    this.toc = [], this[t2(368)] = {}, this.tocById = {}, this.landmarks = [], this.landmarksByType = {}, this.length = 0, e3 && this.parse(e3);
  }
  [i(885)](e3) {
    var t2 = i;
    let n2 = e3.nodeType, r2, a2;
    n2 && (r2 = q(e3, `html`), a2 = q(e3, `ncx`)), n2 ? r2 ? (this.toc = this.parseNav(e3), this.landmarks = this[t2(1463)](e3)) : a2 && (this.toc = this[t2(1319)](e3)) : this.toc = this.load(e3), this.length = 0, this.unpack(this.toc);
  }
  [i(1448)](e3) {
    for (var t2 = i, n2, r2 = 0; r2 < e3[t2(587)]; r2++) n2 = e3[r2], n2.href && (this.tocByHref[n2.href] = r2), n2.id && (this.tocById[n2.id] = r2), this[t2(587)]++, n2.subitems.length && this.unpack(n2.subitems);
  }
  [i(472)](e3) {
    var t2 = i, n2;
    return e3 ? (e3.indexOf(`#`) === 0 ? n2 = this[t2(922)][e3[t2(522)](1)] : e3 in this.tocByHref && (n2 = this.tocByHref[e3]), this.getByIndex(e3, n2, this.toc)) : this.toc;
  }
  getByIndex(e3, t2, n2) {
    var r2 = i;
    if (n2.length === 0) return;
    let a2 = n2[t2];
    if (a2 && (e3 === a2.id || e3 === a2.href)) return a2;
    {
      let i2;
      for (let a3 = 0; a3 < n2[r2(587)] && (i2 = this.getByIndex(e3, t2, n2[a3].subitems), !i2); ++a3) ;
      return i2;
    }
  }
  landmark(e3) {
    var t2;
    return e3 ? (t2 = this.landmarksByType[e3], this.landmarks[t2]) : this.landmarks;
  }
  [i(1452)](e3) {
    var t2 = xe(e3, i(1337), `toc`), n2 = [];
    if (!t2) return n2;
    let r2 = we(t2, `ol`, true);
    return r2 && (n2 = this.parseNavList(r2)), n2;
  }
  parseNavList(e3, t2) {
    var n2 = i;
    let r2 = [];
    if (!e3 || !e3.children) return r2;
    for (let i2 = 0; i2 < e3[n2(1491)].length; i2++) {
      let a2 = this[n2(1454)](e3.children[i2], t2);
      a2 && r2.push(a2);
    }
    return r2;
  }
  [i(1454)](e3, t2) {
    var n2 = i;
    let r2 = e3.getAttribute(`id`) || void 0, a2 = we(e3, `a`, true) || we(e3, `span`, true);
    if (!a2) return;
    let o2 = a2.getAttribute(n2(899)) || ``;
    r2 || (r2 = o2);
    let s2 = a2.textContent || ``, c2 = [], l2 = we(e3, `ol`, true);
    return l2 && (c2 = this.parseNavList(l2, r2)), { id: r2, href: o2, label: s2, subitems: c2, parent: t2 };
  }
  parseLandmarks(e3) {
    var t2 = xe(e3, `nav`, `landmarks`), n2 = t2 ? _e(t2, `li`) : [], r2 = n2.length, i2, a2 = [], o2;
    if (!n2 || r2 === 0) return a2;
    for (i2 = 0; i2 < r2; ++i2) o2 = this.landmarkItem(n2[i2]), o2 && (a2.push(o2), this.landmarksByType[o2.type] = i2);
    return a2;
  }
  landmarkItem(e3) {
    var t2 = i;
    let n2 = we(e3, `a`, true);
    if (!n2) return;
    let r2 = n2[t2(1092)](t2(1332), t2(447)) || void 0;
    return { href: n2[t2(763)](t2(899)) || ``, label: n2.textContent || ``, type: r2 };
  }
  [i(1319)](e3) {
    var t2 = i, n2 = _e(e3, t2(797)), r2 = n2.length, a2, o2 = {}, s2 = [], c2, l2;
    if (!n2 || r2 === 0) return s2;
    for (a2 = 0; a2 < r2; ++a2) c2 = this[t2(1027)](n2[a2]), o2[c2.id] = c2, c2.parent ? (l2 = o2[c2[t2(713)]], l2.subitems.push(c2)) : s2.push(c2);
    return s2;
  }
  [i(1027)](e3) {
    var t2 = i, n2 = e3.getAttribute(`id`) || false, r2 = q(e3, `content`).getAttribute(t2(1415)), a2 = q(e3, `navLabel`), o2 = a2.textContent ? a2.textContent : ``, s2 = [], c2 = e3.parentNode, l2;
    return c2 && (c2[t2(826)] === `navPoint` || c2.nodeName.split(`:`).slice(-1)[0] === t2(797)) && (l2 = c2.getAttribute(`id`)), { id: n2, href: r2, label: o2, subitems: s2, parent: l2 };
  }
  load(e3) {
    var t2 = i;
    return e3.map((e4) => (e4[t2(404)] = e4.title, e4.subitems = e4.children ? this.load(e4.children) : [], e4));
  }
  forEach(e3) {
    return this.toc.forEach(e3);
  }
}, Ye = { application: { ecmascript: [`es`, `ecma`], javascript: `js`, ogg: `ogx`, pdf: `pdf`, postscript: [`ps`, `ai`, `eps`, `epsi`, `epsf`, `eps2`, `eps3`], "rdf+xml": `rdf`, smil: [i(714), `smil`], "xhtml+xml": [i(1362), `xht`], xml: [i(920), `xsl`, `xsd`, `opf`, `ncx`], zip: `zip`, "x-httpd-eruby": `rhtml`, "x-latex": `latex`, "x-maker": [`frm`, `maker`, `frame`, `fm`, `fb`, `book`, `fbdoc`], "x-object": `o`, "x-shockwave-flash": [i(824), `swfl`], "x-silverlight": `scr`, "epub+zip": `epub`, "font-tdpfr": `pfr`, "inkml+xml": [`ink`, `inkml`], json: `json`, "jsonml+json": `jsonml`, "mathml+xml": `mathml`, "metalink+xml": i(377), mp4: `mp4s`, "omdoc+xml": `omdoc`, oxps: `oxps`, "vnd.amazon.ebook": `azw`, widget: `wgt`, "x-dtbook+xml": `dtb`, "x-dtbresource+xml": `res`, "x-font-bdf": `bdf`, "x-font-ghostscript": `gsf`, "x-font-linux-psf": `psf`, "x-font-otf": `otf`, "x-font-pcf": i(728), "x-font-snf": `snf`, "x-font-ttf": [`ttf`, `ttc`], "x-font-type1": [`pfa`, i(847), i(1091), `afm`], "x-font-woff": `woff`, "x-mobipocket-ebook": [`prc`, `mobi`], "x-mspublisher": `pub`, "x-nzb": `nzb`, "x-tgif": `obj`, "xaml+xml": `xaml`, "xml-dtd": `dtd`, "xproc+xml": `xpl`, "xslt+xml": i(1076), "internet-property-stream": `acx`, "x-compress": `z`, "x-compressed": `tgz`, "x-gzip": `gz` }, audio: { flac: `flac`, midi: [i(868), `midi`, `kar`, i(806)], mpeg: [`mpga`, `mpega`, `mp2`, `mp3`, `m4a`, `mp2a`, `m2a`, i(873)], mpegurl: `m3u`, ogg: [`oga`, i(1380), `spx`], "x-aiff": [`aif`, `aiff`, `aifc`], "x-ms-wma": `wma`, "x-wav": `wav`, adpcm: i(678), mp4: `mp4a`, webm: `weba`, "x-aac": `aac`, "x-caf": `caf`, "x-matroska": `mka`, "x-pn-realaudio-plugin": `rmp`, xm: `xm`, mid: [`mid`, `rmi`] }, image: { gif: `gif`, ief: `ief`, jpeg: [`jpeg`, `jpg`, `jpe`], pcx: `pcx`, png: `png`, "svg+xml": [`svg`, `svgz`], tiff: [i(1199), `tif`], "x-icon": i(375), bmp: `bmp`, webp: `webp`, "x-pict": [`pic`, i(940)], "x-tga": `tga`, "cis-cod": `cod` }, text: { "cache-manifest": [`manifest`, `appcache`], css: `css`, csv: `csv`, html: [`html`, i(1186), `shtml`, `stm`], mathml: `mml`, plain: [i(524), i(564), `brf`, `conf`, `def`, `list`, `log`, `in`, `bas`], richtext: `rtx`, "tab-separated-values": `tsv`, "x-bibtex": `bib` }, video: { mpeg: [`mpeg`, `mpg`, `mpe`, `m1v`, `m2v`, `mp2`, `mpa`, `mpv2`], mp4: [`mp4`, i(733), `mpg4`], quicktime: [`qt`, `mov`], ogg: `ogv`, "vnd.mpegurl": [i(1404), `m4u`], "x-flv": `flv`, "x-la-asf": [`lsf`, `lsx`], "x-mng": i(1156), "x-ms-asf": [`asf`, i(389), `asr`], "x-ms-wm": `wm`, "x-ms-wmv": i(1295), "x-ms-wmx": i(647), "x-ms-wvx": `wvx`, "x-msvideo": i(1035), "x-sgi-movie": `movie`, "x-matroska": [`mpv`, `mkv`, `mk3d`, `mks`], "3gpp2": `3g2`, h261: i(358), h263: `h263`, h264: `h264`, jpeg: `jpgv`, jpm: [`jpm`, `jpgm`], mj2: [`mj2`, `mjp2`], "vnd.ms-playready.media.pyv": `pyv`, "vnd.uvvu.mp4": [`uvu`, `uvvu`], "vnd.vivo": `viv`, webm: `webm`, "x-f4v": `f4v`, "x-m4v": i(978), "x-ms-vob": `vob`, "x-smv": `smv` } }, Xe = (function() {
  var e3, t2, n2, r2, i2 = {};
  for (e3 in Ye) if (Ye.hasOwnProperty(e3)) {
    for (t2 in Ye[e3]) if (Ye[e3].hasOwnProperty(t2)) if (n2 = Ye[e3][t2], typeof n2 == `string`) i2[n2] = e3 + `/` + t2;
    else for (r2 = 0; r2 < n2.length; r2++) i2[n2[r2]] = e3 + `/` + t2;
  }
  return i2;
})(), Ze = `text/plain`;
function Qe(e3) {
  return e3 && Xe[e3[i(1152)](`.`).pop().toLowerCase()] || Ze;
}
var $e = { lookup: Qe }, et = class {
  constructor(e3, t2) {
    var n2 = i;
    this.settings = { replacements: t2 && t2[n2(401)] || `base64`, archive: t2 && t2.archive, resolver: t2 && t2.resolver, request: t2 && t2.request }, this.process(e3);
  }
  [i(811)](e3) {
    var t2 = i;
    this[t2(442)] = e3, this.resources = Object.keys(e3).map(function(t3) {
      return e3[t3];
    }), this.replacementUrls = [], this.html = [], this[t2(569)] = [], this.css = [], this.urls = [], this[t2(419)] = [], this.split(), this.splitUrls();
  }
  [i(1152)]() {
    var e3 = i;
    this[e3(1144)] = this[e3(765)].filter(function(e4) {
      if (e4.type === `application/xhtml+xml` || e4.type === `text/html`) return true;
    }), this.assets = this.resources[e3(795)](function(e4) {
      if (e4.type !== `application/xhtml+xml` && e4.type !== `text/html`) return true;
    }), this.css = this.resources.filter(function(e4) {
      if (e4.type === `text/css`) return true;
    });
  }
  [i(476)]() {
    var e3 = i;
    this.urls = this.assets.map((function(e4) {
      return e4.href;
    }).bind(this)), this[e3(419)] = this.css.map(function(e4) {
      return e4.href;
    });
  }
  [i(1070)](e3) {
    var t2 = i, n2 = new ke(e3), r2 = $e[t2(1203)](n2.filename);
    return this.settings.archive ? this.settings.archive.createUrl(e3, { base64: this.settings.replacements === t2(1363) }) : this[t2(685)].replacements === `base64` ? this.settings.request(e3, `blob`).then((e4) => be(e4)).then((e4) => W(e4, r2)) : this.settings.request(e3, `blob`).then((e4) => U(e4, r2));
  }
  replacements() {
    var e3 = i;
    if (this.settings[e3(401)] === e3(1153)) return new Promise((function(e4) {
      e4(this.urls);
    })[e3(594)](this));
    var t2 = this.urls.map((t3) => {
      var n2 = e3, r2 = this.settings.resolver(t3);
      return this[n2(1070)](r2).catch((e4) => (console.error(e4), null));
    });
    return Promise.all(t2).then((t3) => (this.replacementUrls = t3.filter((t4) => typeof t4 == e3(784)), t3));
  }
  replaceCss(e3, t2) {
    var n2 = i, r2 = [];
    return e3 || (e3 = this.settings[n2(1226)]), t2 || (t2 = this.settings.resolver), this.cssUrls[n2(1318)]((function(i2) {
      var a2 = n2, o2 = this.createCssFile(i2, e3, t2).then((function(e4) {
        var t3 = this.urls.indexOf(i2);
        t3 > -1 && (this.replacementUrls[t3] = e4);
      })[a2(594)](this));
      r2.push(o2);
    }).bind(this)), Promise[n2(623)](r2);
  }
  createCssFile(e3) {
    var t2 = i, n2;
    if (De[t2(821)].isAbsolute(e3)) return new Promise(function(e4) {
      e4();
    });
    var r2 = this.settings.resolver(e3), a2 = this.settings.archive ? this.settings.archive.getText(r2) : this[t2(685)].request(r2, t2(564)), o2 = this[t2(791)].map((e4) => {
      var t3 = this.settings.resolver(e4);
      return new Oe(r2).relative(t3);
    });
    return a2 ? a2.then((e4) => (e4 = ze(e4, o2, this.replacementUrls), n2 = this.settings[t2(401)] === t2(1363) ? W(e4, `text/css`) : U(e4, `text/css`), n2), (e4) => new Promise(function(e5) {
      e5();
    })) : new Promise(function(e4) {
      e4();
    });
  }
  [i(1345)](e3, t2) {
    var n2 = i;
    return t2 || (t2 = this.settings[n2(1453)]), this[n2(791)].map((function(r2) {
      var i2 = n2, a2 = t2(r2);
      return new Oe(e3)[i2(1424)](a2);
    }).bind(this));
  }
  get(e3) {
    var t2 = i, n2 = this.urls.indexOf(e3);
    if (n2 !== -1) return this.replacementUrls.length ? new Promise((function(e4, t3) {
      e4(this.replacementUrls[n2]);
    })[t2(594)](this)) : this[t2(1070)](e3);
  }
  substitute(e3, t2) {
    return ze(e3, t2 ? this.relativeTo(t2) : this.urls, this.replacementUrls);
  }
  [i(881)]() {
    var e3 = i;
    this.settings = void 0, this.manifest = void 0, this.resources = void 0, this[e3(635)] = void 0, this[e3(1144)] = void 0, this.assets = void 0, this.css = void 0, this.urls = void 0, this.cssUrls = void 0;
  }
}, tt = class {
  constructor(e3) {
    var t2 = i;
    this[t2(1117)] = [], this.locations = [], this.epubcfi = new Ne(), this.firstPage = 0, this.lastPage = 0, this.totalPages = 0, this[t2(1409)] = void 0, this.ncx = void 0, e3 && (this.pageList = this.parse(e3)), this.pageList && this.pageList.length && this.process(this.pageList);
  }
  parse(e3) {
    var t2 = i, n2 = q(e3, t2(1144)), r2 = q(e3, `ncx`);
    if (n2) return this[t2(1452)](e3);
    if (r2) return this.parseNcx(e3);
  }
  parseNav(e3) {
    var t2 = i, n2 = xe(e3, `nav`, t2(1129)), r2 = n2 ? _e(n2, `li`) : [], a2 = r2[t2(587)], o2, s2 = [], c2;
    if (!r2 || a2 === 0) return s2;
    for (o2 = 0; o2 < a2; ++o2) c2 = this.item(r2[o2]), s2.push(c2);
    return s2;
  }
  [i(1319)](e3) {
    var t2 = i, n2 = [], r2 = 0, a2, o2, s2, c2 = 0;
    if (o2 = q(e3, t2(560)), !o2 || (s2 = _e(o2, `pageTarget`), c2 = s2.length, !s2 || s2.length === 0)) return n2;
    for (r2 = 0; r2 < c2; ++r2) a2 = this.ncxItem(s2[r2]), n2.push(a2);
    return n2;
  }
  ncxItem(e3) {
    var t2 = q(q(e3, `navLabel`), `text`).textContent;
    return { href: q(e3, `content`).getAttribute(`src`), page: parseInt(t2, 10) };
  }
  item(e3) {
    var t2 = i, n2 = q(e3, `a`), r2 = n2.getAttribute(`href`) || ``, a2 = n2[t2(545)] || ``, o2 = parseInt(a2), s2 = r2.indexOf(`epubcfi`), c2, l2, u2;
    return s2 == -1 ? { href: r2, page: o2 } : (c2 = r2.split(`#`), l2 = c2[0], u2 = c2.length > 1 ? c2[1] : false, { cfi: u2, href: r2, packageUrl: l2, page: o2 });
  }
  [i(811)](e3) {
    var t2 = i;
    e3.forEach(function(e4) {
      this.pages.push(e4.page), e4.cfi && this.locations.push(e4.cfi);
    }, this), this[t2(750)] = parseInt(this.pages[0]), this[t2(992)] = parseInt(this.pages[this.pages.length - 1]), this.totalPages = this.lastPage - this.firstPage;
  }
  pageFromCfi(e3) {
    var t2 = i, n2 = -1;
    if (this[t2(1042)].length === 0) return -1;
    var r2 = le(e3, this.locations, this.epubcfi.compare);
    return r2 == -1 ? (r2 = ce(e3, this.locations, this.epubcfi.compare), n2 = r2 - 1 >= 0 ? this.pages[r2 - 1] : this.pages[0], n2 !== void 0 || (n2 = -1)) : n2 = this[t2(1117)][r2], n2;
  }
  cfiFromPage(e3) {
    var t2 = i, n2 = -1;
    typeof e3 != `number` && (e3 = parseInt(e3));
    var r2 = this.pages.indexOf(e3);
    return r2 != -1 && (n2 = this[t2(1042)][r2]), n2;
  }
  [i(1459)](e3) {
    return Math.round(this.totalPages * e3);
  }
  percentageFromPage(e3) {
    var t2 = i, n2 = (e3 - this.firstPage) / this[t2(453)];
    return Math.round(n2 * 1e3) / 1e3;
  }
  percentageFromCfi(e3) {
    var t2 = this.pageFromCfi(e3);
    return this.percentageFromPage(t2);
  }
  destroy() {
    this.pages = void 0, this.locations = void 0, this.epubcfi = void 0, this.pageList = void 0, this.toc = void 0, this.ncx = void 0;
  }
}, nt = class {
  constructor(e3) {
    var t2 = i;
    this.settings = e3, this[t2(701)] = e3.layout || `reflowable`, this._spread = e3.spread !== `none`, this._minSpreadWidth = e3.minSpreadWidth || 800, this._evenSpreads = e3.evenSpreads || false, e3.flow === `scrolled` || e3.flow === `scrolled-continuous` || e3.flow === `scrolled-doc` ? this._flow = `scrolled` : this._flow = `paginated`, this.width = 0, this.height = 0, this.spreadWidth = 0, this.delta = 0, this.columnWidth = 0, this.gap = 0, this.divisor = 1, this.props = { name: this.name, spread: this[t2(1232)], flow: this._flow, width: 0, height: 0, spreadWidth: 0, delta: 0, columnWidth: 0, gap: 0, divisor: 1 };
  }
  [i(789)](e3) {
    return e3 !== void 0 && (e3 === `scrolled` || e3 === i(1477) || e3 === `scrolled-doc` ? this._flow = `scrolled` : this._flow = `paginated`, this.update({ flow: this._flow })), this._flow;
  }
  spread(e3, t2) {
    var n2 = i;
    return e3 && (this._spread = e3 !== `none`, this.update({ spread: this[n2(1232)] })), t2 >= 0 && (this._minSpreadWidth = t2), this._spread;
  }
  calculate(e3, t2, n2) {
    var r2 = i, a2 = 1, o2 = n2 || 0, s2 = e3, c2 = t2, l2 = Math.floor(s2 / 12), u2, d2, f2, p2;
    a2 = this._spread && s2 >= this._minSpreadWidth ? 2 : 1, this.name === r2(712) && this._flow === `paginated` && !(n2 >= 0) && (o2 = l2 % 2 == 0 ? l2 : l2 - 1), this.name === `pre-paginated` && (o2 = 0), a2 > 1 ? (u2 = s2 / a2 - o2, f2 = u2 + o2) : (u2 = s2, f2 = s2), this.name === `pre-paginated` && a2 > 1 && (s2 = u2), d2 = u2 * a2 + o2, p2 = s2, this.width = s2, this[r2(1271)] = c2, this[r2(1490)] = d2, this.pageWidth = f2, this.delta = p2, this[r2(538)] = u2, this.gap = o2, this.divisor = a2, this[r2(1408)]({ width: s2, height: c2, spreadWidth: d2, pageWidth: f2, delta: p2, columnWidth: u2, gap: o2, divisor: a2 });
  }
  format(e3, t2, n2) {
    var r2 = i;
    return this.name === r2(813) ? e3.fit(this.columnWidth, this.height, t2) : this._flow === `paginated` ? e3.columns(this.width, this[r2(1271)], this[r2(538)], this.gap, this[r2(685)].direction) : n2 && n2 === r2(1009) ? e3.size(null, this.height) : e3.size(this.width, null);
  }
  count(e3, t2) {
    var n2 = i;
    let r2, a2;
    return this.name === `pre-paginated` ? (r2 = 1, a2 = 1) : this._flow === `paginated` ? (t2 || (t2 = this.delta), r2 = Math.ceil(e3 / t2), a2 = r2 * this.divisor) : (t2 || (t2 = this[n2(1271)]), r2 = Math.ceil(e3 / t2), a2 = r2), { spreads: r2, pages: a2 };
  }
  update(e3) {
    var t2 = i;
    if (Object.keys(e3).forEach((t3) => {
      this.props[t3] === e3[t3] && delete e3[t3];
    }), Object.keys(e3).length > 0) {
      let n2 = z(this.props, e3);
      this.emit(Q.LAYOUT[t2(944)], n2, e3);
    }
  }
};
(0, M.default)(nt.prototype);
var rt = class {
  constructor(e3) {
    var t2 = i;
    this.rendition = e3, this._themes = { default: { rules: {}, url: ``, serialized: `` } }, this._overrides = {}, this._current = `default`, this[t2(932)] = [], this.rendition.hooks.content.register(this.inject.bind(this)), this.rendition.hooks.content.register(this.overrides[t2(594)](this));
  }
  [i(575)]() {
    var e3 = i;
    if (arguments[e3(587)] !== 0) {
      if (arguments.length === 1 && typeof arguments[0] == e3(1086)) return this.registerThemes(arguments[0]);
      if (arguments.length === 1 && typeof arguments[0] == `string`) return this[e3(821)](arguments[0]);
      if (arguments.length === 2 && typeof arguments[1] == `string`) return this.registerUrl(arguments[0], arguments[1]);
      if (arguments.length === 2 && typeof arguments[1] == `object`) return this.registerRules(arguments[0], arguments[1]);
    }
  }
  [i(821)](e3) {
    if (e3) {
      if (typeof e3 == `string`) return this.registerUrl(`default`, e3);
      if (typeof e3 == `object`) return this.registerRules(`default`, e3);
    }
  }
  registerThemes(e3) {
    for (var t2 in e3) e3.hasOwnProperty(t2) && (typeof e3[t2] == `string` ? this.registerUrl(t2, e3[t2]) : this.registerRules(t2, e3[t2]));
  }
  registerCss(e3, t2) {
    var n2 = i;
    this._themes[e3] = { serialized: t2 }, (this._injected[e3] || e3 == n2(821)) && this.update(e3);
  }
  registerUrl(e3, t2) {
    var n2 = i, r2 = new ke(t2);
    this[n2(485)][e3] = { url: r2.toString() }, (this._injected[e3] || e3 == `default`) && this.update(e3);
  }
  [i(948)](e3, t2) {
    this._themes[e3] = { rules: t2 }, (this._injected[e3] || e3 == `default`) && this.update(e3);
  }
  select(e3) {
    var t2 = i, n2 = this._current, r2;
    this._current = e3, this[t2(1408)](e3), r2 = this[t2(1067)].getContents(), r2[t2(1318)]((r3) => {
      var i2 = t2;
      r3.removeClass(n2), r3[i2(1007)](e3);
    });
  }
  update(e3) {
    var t2 = i;
    this.rendition[t2(1215)]().forEach((t3) => {
      this.add(e3, t3);
    });
  }
  inject(e3) {
    var t2 = i, n2 = [], r2 = this._themes, a2;
    for (var o2 in r2) r2.hasOwnProperty(o2) && (o2 === this._current || o2 === `default`) && (a2 = r2[o2], (a2.rules && Object[t2(735)](a2.rules).length > 0 || a2.url && n2.indexOf(a2.url) === -1) && this.add(o2, e3), this._injected.push(o2));
    this[t2(391)] != t2(821) && e3.addClass(this._current);
  }
  add(e3, t2) {
    var n2 = i, r2 = this[n2(485)][e3];
    !r2 || !t2 || (r2.url ? t2.addStylesheet(r2.url) : r2.serialized ? (t2.addStylesheetCss(r2.serialized, e3), r2.injected = true) : r2[n2(794)] && (t2.addStylesheetRules(r2.rules, e3), r2.injected = true));
  }
  override(e3, t2, n2) {
    var r2 = this.rendition.getContents();
    this._overrides[e3] = { value: t2, priority: n2 === true }, r2.forEach((t3) => {
      t3.css(e3, this._overrides[e3].value, this._overrides[e3].priority);
    });
  }
  removeOverride(e3) {
    var t2 = this.rendition.getContents();
    delete this._overrides[e3], t2.forEach((t3) => {
      t3.css(e3);
    });
  }
  overrides(e3) {
    var t2 = i, n2 = this[t2(1173)];
    for (var r2 in n2) n2[t2(440)](r2) && e3.css(r2, n2[r2][t2(1225)], n2[r2][t2(1157)]);
  }
  [i(990)](e3) {
    this.override(`font-size`, e3);
  }
  [i(1367)](e3) {
    var t2 = i;
    this[t2(767)](`font-family`, e3, true);
  }
  [i(881)]() {
    var e3 = i;
    this.rendition = void 0, this._themes = void 0, this._overrides = void 0, this._current = void 0, this[e3(932)] = void 0;
  }
}, it = class {
  constructor(e3, t2, n2, r2 = false) {
    this.layout = e3, this.horizontal = n2 === `horizontal`, this.direction = t2 || `ltr`, this._dev = r2;
  }
  [i(1194)](e3) {
    var t2 = i, n2 = this.findRanges(e3);
    return this.rangeListToCfiList(e3.section[t2(1098)], n2);
  }
  page(e3, t2, n2, r2) {
    var a2 = i, o2 = e3 && e3.document ? e3.document[a2(471)] : false, s2;
    if (o2) {
      if (s2 = this.rangePairToCfiPair(t2, { start: this.findStart(o2, n2, r2), end: this[a2(480)](o2, n2, r2) }), this[a2(396)] === true) {
        let t3 = e3.document, n3 = new Ne(s2.start)[a2(354)](t3), r3 = new Ne(s2.end).toRange(t3), i2 = t3[a2(686)].getSelection(), o3 = t3[a2(1192)]();
        i2.removeAllRanges(), o3.setStart(n3[a2(694)], n3.startOffset), o3.setEnd(r3.endContainer, r3[a2(816)]), i2.addRange(o3);
      }
      return s2;
    }
  }
  walk(e3, t2) {
    var n2 = i;
    if (!(e3 && e3.nodeType === Node.TEXT_NODE)) {
      var r2 = { acceptNode: function(e4) {
        return e4.data.trim().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      } }, a2 = r2[n2(970)];
      a2[n2(970)] = r2.acceptNode;
      for (var o2 = document.createTreeWalker(e3, NodeFilter.SHOW_TEXT, a2, false), s2, c2; (s2 = o2.nextNode()) && (c2 = t2(s2), !c2); ) ;
      return c2;
    }
  }
  findRanges(e3) {
    for (var t2 = i, n2 = [], r2 = e3[t2(762)].scrollWidth(), a2 = Math.ceil(r2 / this.layout.spreadWidth) * this.layout.divisor, o2 = this[t2(1488)].columnWidth, s2 = this.layout.gap, c2, l2, u2 = 0; u2 < a2.pages; u2++) c2 = (o2 + s2) * u2, l2 = o2 * (u2 + 1) + s2 * u2, n2.push({ start: this.findStart(e3.document.body, c2, l2), end: this[t2(480)](e3[t2(502)].body, c2, l2) });
    return n2;
  }
  [i(1151)](e3, t2, n2) {
    for (var r2 = i, a2 = [e3], o2, s2, c2 = e3; a2.length; ) if (o2 = a2.shift(), s2 = this[r2(651)](o2, (e4) => {
      var i2 = r2, o3, s3, l2, u2, d2 = B(e4);
      if (this.horizontal && this[i2(408)] === `ltr`) {
        if (o3 = this[i2(1009)] ? d2[i2(1005)] : d2.top, s3 = this[i2(1009)] ? d2[i2(982)] : d2[i2(758)], o3 >= t2 && o3 <= n2 || s3 > t2) return e4;
        c2 = e4, a2.push(e4);
      } else if (this.horizontal && this[i2(408)] === `rtl`) {
        if (o3 = d2.left, s3 = d2.right, s3 <= n2 && s3 >= t2 || o3 < n2) return e4;
        c2 = e4, a2[i2(1386)](e4);
      } else {
        if (l2 = d2.top, u2 = d2.bottom, l2 >= t2 && l2 <= n2 || u2 > t2) return e4;
        c2 = e4, a2.push(e4);
      }
    }), s2) return this.findTextStartRange(s2, t2, n2);
    return this.findTextStartRange(c2, t2, n2);
  }
  [i(480)](e3, t2, n2) {
    for (var r2 = [e3], i2, a2 = e3, o2; r2.length; ) if (i2 = r2.shift(), o2 = this.walk(i2, (e4) => {
      var i3 = $, o3, s2, c2, l2, u2 = B(e4);
      if (this.horizontal && this.direction === `ltr`) {
        if (o3 = Math[i3(590)](u2.left), s2 = Math.round(u2.right), o3 > n2 && a2) return a2;
        if (s2 > n2) return e4;
        a2 = e4, r2.push(e4);
      } else if (this.horizontal && this.direction === `rtl`) {
        if (o3 = Math.round(this.horizontal ? u2.left : u2.top), s2 = Math.round(this.horizontal ? u2.right : u2.bottom), s2 < t2 && a2) return a2;
        if (o3 < t2) return e4;
        a2 = e4, r2.push(e4);
      } else {
        if (c2 = Math[i3(590)](u2.top), l2 = Math.round(u2.bottom), c2 > n2 && a2) return a2;
        if (l2 > n2) return e4;
        a2 = e4, r2.push(e4);
      }
    }), o2) return this.findTextEndRange(o2, t2, n2);
    return this.findTextEndRange(a2, t2, n2);
  }
  findTextStartRange(e3, t2, n2) {
    for (var r2 = this.splitTextNodeIntoRanges(e3), i2, a2, o2, s2, c2, l2 = 0; l2 < r2.length; l2++) if (i2 = r2[l2], a2 = i2.getBoundingClientRect(), this.horizontal && this.direction === `ltr`) {
      if (o2 = a2.left, o2 >= t2) return i2;
    } else if (this.horizontal && this.direction === `rtl`) {
      if (c2 = a2.right, c2 <= n2) return i2;
    } else if (s2 = a2.top, s2 >= t2) return i2;
    return r2[0];
  }
  [i(435)](e3, t2, n2) {
    for (var r2 = i, a2 = this.splitTextNodeIntoRanges(e3), o2, s2, c2, l2, u2, d2, f2, p2 = 0; p2 < a2.length; p2++) {
      if (s2 = a2[p2], c2 = s2.getBoundingClientRect(), this.horizontal && this.direction === `ltr`) {
        if (l2 = c2.left, u2 = c2.right, l2 > n2 && o2) return o2;
        if (u2 > n2) return s2;
      } else if (this.horizontal && this[r2(408)] === `rtl`) {
        if (l2 = c2.left, u2 = c2.right, u2 < t2 && o2) return o2;
        if (l2 < t2) return s2;
      } else {
        if (d2 = c2.top, f2 = c2[r2(758)], d2 > n2 && o2) return o2;
        if (f2 > n2) return s2;
      }
      o2 = s2;
    }
    return a2[a2[r2(587)] - 1];
  }
  splitTextNodeIntoRanges(e3, t2) {
    var n2 = i, r2 = [], a2 = (e3.textContent || ``)[n2(991)](), o2, s2 = e3.ownerDocument, c2 = t2 || ` `, l2 = a2.indexOf(c2);
    if (l2 === -1 || e3.nodeType != Node.TEXT_NODE) return o2 = s2.createRange(), o2.selectNodeContents(e3), [o2];
    for (o2 = s2.createRange(), o2.setStart(e3, 0), o2.setEnd(e3, l2), r2.push(o2), o2 = false; l2 != -1; ) l2 = a2[n2(755)](c2, l2 + 1), l2 > 0 && (o2 && (o2.setEnd(e3, l2), r2[n2(1386)](o2)), o2 = s2[n2(1192)](), o2.setStart(e3, l2 + 1));
    return o2 && (o2.setEnd(e3, a2.length), r2.push(o2)), r2;
  }
  rangePairToCfiPair(e3, t2) {
    var n2 = i, r2 = t2.start, a2 = t2.end;
    return r2.collapse(true), a2.collapse(false), { start: new Ne(r2, e3)[n2(1200)](), end: new Ne(a2, e3)[n2(1200)]() };
  }
  [i(1057)](e3, t2) {
    for (var n2 = [], r2, i2 = 0; i2 < t2.length; i2++) r2 = this.rangePairToCfiPair(e3, t2[i2]), n2.push(r2);
    return n2;
  }
  axis(e3) {
    return e3 && (this.horizontal = e3 === `horizontal`), this.horizontal;
  }
}, at = typeof navigator < `u`, ot = at && /Chrome/.test(navigator.userAgent), st = at && !ot && /AppleWebKit/.test(navigator[i(565)]), ct = 1, lt = class {
  constructor(e3, t2, n2, r2) {
    var a2 = i;
    this.epubcfi = new Ne(), this.document = e3, this.documentElement = this.document.documentElement, this.content = t2 || this[a2(502)][a2(471)], this.window = this.document.defaultView, this._size = { width: 0, height: 0 }, this.sectionIndex = r2 || 0, this.cfiBase = n2 || ``, this.epubReadingSystem(`epub.js`, `0.3`), this.called = 0, this.active = true, this.listeners();
  }
  static get listenedEvents() {
    return We;
  }
  width(e3) {
    var t2 = i, n2 = this.content;
    return e3 && R(e3) && (e3 += `px`), e3 && (n2.style.width = e3), parseInt(this.window[t2(958)](n2).width);
  }
  height(e3) {
    var t2 = i, n2 = this.content;
    return e3 && R(e3) && (e3 += `px`), e3 && (n2.style.height = e3), parseInt(this.window[t2(958)](n2)[t2(1271)]);
  }
  contentWidth(e3) {
    var t2 = i, n2 = this[t2(409)] || this.document.body;
    return e3 && R(e3) && (e3 += `px`), e3 && (n2.style[t2(610)] = e3), parseInt(this.window.getComputedStyle(n2)[t2(610)]);
  }
  contentHeight(e3) {
    var t2 = i, n2 = this.content || this.document.body;
    return e3 && R(e3) && (e3 += `px`), e3 && (n2[t2(1037)].height = e3), parseInt(this[t2(688)].getComputedStyle(n2)[t2(1271)]);
  }
  textWidth() {
    var e3 = i;
    let t2, n2, r2 = this.document[e3(1192)](), a2 = this.content || this.document.body, o2 = de(a2);
    return r2.selectNodeContents(a2), t2 = r2[e3(638)](), n2 = t2.width, o2 && o2.width && (n2 += o2.width), Math.round(n2);
  }
  textHeight() {
    var e3 = i;
    let t2, n2, r2 = this.document.createRange(), a2 = this.content || this.document.body;
    return r2[e3(1310)](a2), t2 = r2.getBoundingClientRect(), n2 = t2[e3(758)], Math[e3(590)](n2);
  }
  scrollWidth() {
    return this.documentElement.scrollWidth;
  }
  scrollHeight() {
    return this.documentElement.scrollHeight;
  }
  overflow(e3) {
    var t2 = i;
    return e3 && (this.documentElement[t2(1037)].overflow = e3), this.window.getComputedStyle(this.documentElement).overflow;
  }
  overflowX(e3) {
    return e3 && (this.documentElement.style.overflowX = e3), this.window.getComputedStyle(this.documentElement).overflowX;
  }
  overflowY(e3) {
    var t2 = i;
    return e3 && (this.documentElement.style.overflowY = e3), this.window.getComputedStyle(this[t2(1482)]).overflowY;
  }
  css(e3, t2, n2) {
    var r2 = i, a2 = this.content || this.document.body;
    return t2 ? a2.style.setProperty(e3, t2, n2 ? r2(912) : ``) : a2.style[r2(1238)](e3), this.window.getComputedStyle(a2)[e3];
  }
  viewport(e3) {
    var t2 = i, n2 = this.document.querySelector(`meta[name='viewport']`), r2 = { width: void 0, height: void 0, scale: void 0, minimum: void 0, maximum: void 0, scalable: void 0 }, a2 = [], o2 = {};
    if (n2 && n2.hasAttribute(`content`)) {
      let e4 = n2.getAttribute(`content`), i2 = e4.match(/width\s*=\s*([^,]*)/), a3 = e4[t2(676)](/height\s*=\s*([^,]*)/), o3 = e4.match(/initial-scale\s*=\s*([^,]*)/), s2 = e4.match(/minimum-scale\s*=\s*([^,]*)/), c2 = e4.match(/maximum-scale\s*=\s*([^,]*)/), l2 = e4[t2(676)](/user-scalable\s*=\s*([^,]*)/);
      i2 && i2.length && i2[1] !== void 0 && (r2.width = i2[1]), a3 && a3.length && a3[1] !== void 0 && (r2.height = a3[1]), o3 && o3.length && o3[1] !== void 0 && (r2[t2(477)] = o3[1]), s2 && s2[t2(587)] && s2[1] !== void 0 && (r2.minimum = s2[1]), c2 && c2.length && c2[1] !== void 0 && (r2.maximum = c2[1]), l2 && l2.length && l2[1] !== void 0 && (r2[t2(438)] = l2[1]);
    }
    return o2 = oe(e3 || {}, r2), e3 && (o2.width && a2[t2(1386)](`width=` + o2.width), o2[t2(1271)] && a2.push(t2(628) + o2[t2(1271)]), o2.scale && a2.push(t2(946) + o2.scale), o2.scalable === `no` ? (a2.push(t2(1001) + o2.scale), a2.push(`maximum-scale=` + o2.scale), a2[t2(1386)](`user-scalable=` + o2.scalable)) : (o2.scalable && a2.push(`user-scalable=` + o2.scalable), o2.minimum && a2.push(`minimum-scale=` + o2.minimum), o2.maximum && a2[t2(1386)](`minimum-scale=` + o2.maximum)), n2 || (n2 = this[t2(502)].createElement(`meta`), n2[t2(1016)](`name`, `viewport`), this.document[t2(528)](`head`).appendChild(n2)), n2.setAttribute(t2(409), a2.join(`, `)), this.window[t2(1282)](0, 0)), o2;
  }
  expand() {
    var e3 = i;
    this.emit(Q.CONTENTS[e3(592)]);
  }
  listeners() {
    var e3 = i;
    this.imageLoadListeners(), this.mediaQueryListeners(), this.addEventListeners(), this[e3(1372)](), typeof ResizeObserver > `u` ? (this.resizeListeners(), this.visibilityListeners()) : this.resizeObservers(), this.linksHandler();
  }
  removeListeners() {
    var e3 = i;
    this[e3(1320)](), this.removeSelectionListeners(), this.observer && this.observer.disconnect(), clearTimeout(this[e3(402)]);
  }
  resizeCheck() {
    var e3 = i;
    let t2 = this.textWidth(), n2 = this[e3(1149)]();
    (t2 != this[e3(360)].width || n2 != this._size.height) && (this._size = { width: t2, height: n2 }, this[e3(1253)] && this.onResize(this._size), this[e3(1396)](Q.CONTENTS.RESIZE, this._size));
  }
  resizeListeners() {
    var e3 = i;
    clearTimeout(this.expanding), requestAnimationFrame(this.resizeCheck.bind(this)), this.expanding = setTimeout(this[e3(783)].bind(this), 350);
  }
  visibilityListeners() {
    document.addEventListener(`visibilitychange`, () => {
      var e3 = $;
      document.visibilityState === `visible` && this.active === false ? (this.active = true, this[e3(783)]()) : (this.active = false, clearTimeout(this.expanding));
    });
  }
  transitionListeners() {
    var e3 = i;
    let t2 = this[e3(409)];
    t2[e3(1037)][e3(936)] = e3(1108), t2[e3(1037)][e3(1242)] = `0.001ms`, t2.style.transitionTimingFunction = `linear`, t2.style.transitionDelay = `0`, this[e3(1171)] = this[e3(726)].bind(this), this.document.addEventListener(`transitionend`, this._resizeCheck);
  }
  [i(540)]() {
    for (var e3 = i, t2 = this[e3(502)].styleSheets, n2 = (function(t3) {
      var n3 = e3;
      t3.matches && !this._expanding && setTimeout(this[n3(1489)][n3(594)](this), 1);
    }).bind(this), r2 = 0; r2 < t2.length; r2 += 1) {
      var a2;
      try {
        a2 = t2[r2].cssRules;
      } catch {
        return;
      }
      if (!a2) return;
      for (var o2 = 0; o2 < a2.length; o2 += 1) a2[o2].media && this.window.matchMedia(a2[o2][e3(1329)][e3(553)]).addListener(n2);
    }
  }
  resizeObservers() {
    this.observer = new ResizeObserver((e3) => {
      requestAnimationFrame(this.resizeCheck.bind(this));
    }), this.observer.observe(this.document.documentElement);
  }
  mutationObservers() {
    this.observer = new MutationObserver((e3) => {
      this.resizeCheck();
    }), this.observer.observe(this.document, { attributes: true, childList: true, characterData: true, subtree: true });
  }
  imageLoadListeners() {
    for (var e3 = i, t2 = this.document[e3(1286)](`img`), n2, r2 = 0; r2 < t2.length; r2++) n2 = t2[r2], n2.naturalWidth !== void 0 && n2.naturalWidth === 0 && (n2.onload = this.expand.bind(this));
  }
  fontLoadListeners() {
    var e3 = i;
    !this.document || !this.document.fonts || this[e3(502)].fonts.ready.then((function() {
      var t2 = e3;
      this[t2(726)]();
    })[e3(594)](this));
  }
  root() {
    var e3 = i;
    return this[e3(502)] ? this.document.documentElement : null;
  }
  locationOf(e3, t2) {
    var n2 = i, r2, a2 = { left: 0, top: 0 };
    if (!this.document) return a2;
    if (this[n2(572)][n2(796)](e3)) {
      let i2 = new Ne(e3).toRange(this.document, t2);
      if (i2) {
        try {
          if (!i2.endContainer || i2.startContainer == i2.endContainer && i2.startOffset == i2.endOffset) {
            let e4 = i2.startContainer.textContent.indexOf(` `, i2[n2(1441)]);
            e4 == -1 && (e4 = i2.startContainer[n2(545)].length), i2.setEnd(i2.startContainer, e4);
          }
        } catch (e4) {
          console.error(n2(1479), e4);
        }
        if (i2.startContainer.nodeType === Node[n2(1109)]) r2 = i2.startContainer.getBoundingClientRect(), a2.left = r2.left, a2.top = r2.top;
        else if (st) {
          let e4 = i2.startContainer, t3 = new Range();
          try {
            e4[n2(387)] === ct ? r2 = e4.getBoundingClientRect() : i2.startOffset + 2 < e4.length ? (t3.setStart(e4, i2.startOffset), t3.setEnd(e4, i2.startOffset + 2), r2 = t3.getBoundingClientRect()) : i2.startOffset - 2 > 0 ? (t3.setStart(e4, i2[n2(1441)] - 2), t3.setEnd(e4, i2.startOffset), r2 = t3[n2(638)]()) : r2 = e4.parentNode.getBoundingClientRect();
          } catch (e5) {
            console.error(e5, e5[n2(499)]);
          }
        } else r2 = i2.getBoundingClientRect();
      }
    } else if (typeof e3 == `string` && e3.indexOf(`#`) > -1) {
      let t3 = e3.substring(e3.indexOf(`#`) + 1), n3 = this.document.getElementById(t3);
      if (n3) if (st) {
        let e4 = new Range();
        e4.selectNode(n3), r2 = e4.getBoundingClientRect();
      } else r2 = n3.getBoundingClientRect();
    }
    return r2 && (a2[n2(1005)] = r2[n2(1005)], a2.top = r2.top), a2;
  }
  addStylesheet(e3) {
    return new Promise((function(t2, n2) {
      var r2 = $, i2, a2 = false;
      if (!this.document) {
        t2(false);
        return;
      }
      if (i2 = this.document.querySelector(`link[href='` + e3 + `']`), i2) {
        t2(true);
        return;
      }
      i2 = this.document.createElement(r2(1383)), i2.type = `text/css`, i2.rel = `stylesheet`, i2[r2(899)] = e3, i2[r2(1011)] = i2.onreadystatechange = function() {
        !a2 && (!this.readyState || this.readyState == `complete`) && (a2 = true, setTimeout(() => {
          t2(true);
        }, 1));
      }, this[r2(502)].head.appendChild(i2);
    }).bind(this));
  }
  _getStylesheetNode(e3) {
    var t2 = i, n2;
    return e3 = `epubjs-inserted-css-` + (e3 || ``), this.document ? (n2 = this.document.getElementById(e3), n2 || (n2 = this[t2(502)].createElement(t2(1037)), n2.id = e3, this.document.head[t2(1270)](n2)), n2) : false;
  }
  addStylesheetCss(e3, t2) {
    if (!this.document || !e3) return false;
    var n2 = this._getStylesheetNode(t2);
    return n2.innerHTML = e3, true;
  }
  addStylesheetRules(e3, t2) {
    var n2 = i, r2;
    if (!(!this.document || !e3 || e3.length === 0)) if (r2 = this._getStylesheetNode(t2).sheet, Object[n2(427)][n2(1200)][n2(906)](e3) === n2(1283)) for (var a2 = 0, o2 = e3[n2(587)]; a2 < o2; a2++) {
      var s2 = 1, c2 = e3[a2], l2 = e3[a2][0], u2 = ``;
      Object.prototype[n2(1200)].call(c2[1][0]) === `[object Array]` && (c2 = c2[1], s2 = 0);
      for (var d2 = c2[n2(587)]; s2 < d2; s2++) {
        var f2 = c2[s2];
        u2 += f2[0] + `:` + f2[1] + (f2[2] ? ` !important` : ``) + `;
`;
      }
      r2[n2(1100)](l2 + `{` + u2 + `}`, r2.cssRules.length);
    }
    else Object.keys(e3).forEach((t3) => {
      var i2 = n2;
      let a3 = e3[t3];
      if (Array.isArray(a3)) a3.forEach((e4) => {
        let n3 = Object[$(735)](e4).map((t4) => t4 + `:` + e4[t4]).join(`;`);
        r2.insertRule(t3 + `{` + n3 + `}`, r2.cssRules.length);
      });
      else {
        let e4 = Object[i2(735)](a3).map((e5) => e5 + `:` + a3[e5]).join(`;`);
        r2[i2(1100)](t3 + `{` + e4 + `}`, r2.cssRules.length);
      }
    });
  }
  addScript(e3) {
    return new Promise((function(t2, n2) {
      var r2 = $, i2, a2 = false;
      if (!this[r2(502)]) {
        t2(false);
        return;
      }
      i2 = this.document.createElement(`script`), i2[r2(447)] = `text/javascript`, i2[r2(1353)] = true, i2.src = e3, i2.onload = i2.onreadystatechange = function() {
        !a2 && (!this.readyState || this.readyState == `complete`) && (a2 = true, setTimeout(function() {
          t2(true);
        }, 1));
      }, this.document[r2(1277)].appendChild(i2);
    }).bind(this));
  }
  addClass(e3) {
    var t2 = i, n2;
    this.document && (n2 = this[t2(409)] || this.document.body, n2 && n2.classList.add(e3));
  }
  removeClass(e3) {
    var t2 = i, n2;
    this[t2(502)] && (n2 = this[t2(409)] || this.document.body, n2 && n2.classList.remove(e3));
  }
  addEventListeners() {
    this.document && (this._triggerEvent = this.triggerEvent.bind(this), We.forEach(function(e3) {
      var t2 = $;
      this.document.addEventListener(e3, this[t2(1101)], { passive: true });
    }, this));
  }
  [i(1320)]() {
    var e3 = i;
    this.document && (We[e3(1318)](function(t2) {
      var n2 = e3;
      this.document[n2(556)](t2, this[n2(1101)], { passive: true });
    }, this), this._triggerEvent = void 0);
  }
  triggerEvent(e3) {
    this.emit(e3.type, e3);
  }
  [i(1372)]() {
    var e3 = i;
    this[e3(502)] && (this._onSelectionChange = this.onSelectionChange.bind(this), this.document[e3(1258)](e3(882), this[e3(1147)], { passive: true }));
  }
  removeSelectionListeners() {
    var e3 = i;
    this.document && (this.document.removeEventListener(e3(882), this._onSelectionChange, { passive: true }), this[e3(1147)] = void 0);
  }
  onSelectionChange(e3) {
    this.selectionEndTimeout && clearTimeout(this.selectionEndTimeout), this.selectionEndTimeout = setTimeout((function() {
      var e4 = $, t2 = this.window[e4(1003)]();
      this.triggerSelectedEvent(t2);
    }).bind(this), 250);
  }
  [i(1058)](e3) {
    var t2 = i, n2, r2;
    e3 && e3.rangeCount > 0 && (n2 = e3.getRangeAt(0), n2.collapsed || (r2 = new Ne(n2, this.cfiBase)[t2(1200)](), this.emit(Q.CONTENTS.SELECTED, r2), this.emit(Q.CONTENTS[t2(595)], n2)));
  }
  [i(1023)](e3, t2) {
    var n2 = i;
    return new Ne(e3).toRange(this[n2(502)], t2);
  }
  cfiFromRange(e3, t2) {
    return new Ne(e3, this.cfiBase, t2).toString();
  }
  cfiFromNode(e3, t2) {
    var n2 = i;
    return new Ne(e3, this.cfiBase, t2)[n2(1200)]();
  }
  map(e3) {
    return new it(e3).section();
  }
  size(e3, t2) {
    var n2 = i, r2 = { scale: 1, scalable: `no` };
    this.layoutStyle(n2(504)), e3 >= 0 && (this.width(e3), r2.width = e3, this.css(`padding`, `0 ` + e3 / 12 + `px`)), t2 >= 0 && (this.height(t2), r2.height = t2), this.css(n2(1273), `0`), this.css(`box-sizing`, `border-box`), this.viewport(r2);
  }
  [i(740)](e3, t2, n2, r2, a2) {
    var o2 = i;
    let s2 = ae(`column-axis`), c2 = ae(`column-gap`), l2 = ae(`column-width`), u2 = ae(`column-fill`), d2 = this.writingMode()[o2(755)](`vertical`) === 0 ? `vertical` : `horizontal`;
    this[o2(1051)](`paginated`), a2 === `rtl` && d2 === o2(1009) && this[o2(408)](a2), this.width(e3), this[o2(1271)](t2), this.viewport({ width: e3, height: t2, scale: 1, scalable: `no` }), this.css(o2(878), `hidden`), this.css(`margin`, `0`, true), d2 === `vertical` ? (this.css(`padding-top`, r2 / 2 + `px`, true), this.css(`padding-bottom`, r2 / 2 + `px`, true), this.css(`padding-left`, `20px`), this.css(`padding-right`, `20px`), this.css(s2, `vertical`)) : (this.css(`padding-top`, o2(1081)), this.css(`padding-bottom`, o2(1081)), this.css(`padding-left`, r2 / 2 + `px`, true), this[o2(929)](o2(510), r2 / 2 + `px`, true), this.css(s2, `horizontal`)), this.css(o2(1159), `border-box`), this.css(o2(1293), `inherit`), this.css(u2, o2(657)), this.css(c2, r2 + `px`), this.css(l2, n2 + `px`), this.css(`-webkit-line-box-contain`, `block glyphs replaced`);
  }
  scaler(e3, t2, n2) {
    var r2 = i, a2 = `scale(` + e3 + `)`, o2 = ``;
    this[r2(929)](`transform-origin`, r2(529)), (t2 >= 0 || n2 >= 0) && (o2 = ` translate(` + (t2 || 0) + `px, ` + (n2 || 0) + `px )`), this.css(`transform`, a2 + o2);
  }
  [i(989)](e3, t2, n2) {
    var r2 = i, a2 = this.viewport(), o2 = parseInt(a2.width), s2 = parseInt(a2.height), c2 = e3 / o2, l2 = t2 / s2, u2 = c2 < l2 ? c2 : l2;
    if (this.layoutStyle(r2(1361)), this[r2(610)](o2), this.height(s2), this[r2(855)](`hidden`), this.scaler(u2, 0, 0), this[r2(929)](r2(462), o2 * u2 + `px ` + s2 * u2 + `px`), this.css(`background-color`, `transparent`), n2 && n2.properties.includes(`page-spread-left`)) {
      var d2 = e3 - o2 * u2;
      this.css(`margin-left`, d2 + `px`);
    }
  }
  direction(e3) {
    var t2 = i;
    this.documentElement && (this.documentElement.style[t2(408)] = e3);
  }
  mapPage(e3, t2, n2, r2, a2) {
    var o2 = i;
    return new it(t2, a2)[o2(1094)](this, e3, n2, r2);
  }
  linksHandler() {
    Re(this.content, (e3) => {
      var t2 = $;
      this[t2(1396)](Q.CONTENTS.LINK_CLICKED, e3);
    });
  }
  writingMode(e3) {
    var t2 = i;
    let n2 = ae(t2(449));
    return e3 && this[t2(1482)] && (this[t2(1482)].style[n2] = e3), this.window.getComputedStyle(this.documentElement)[n2] || ``;
  }
  layoutStyle(e3) {
    var t2 = i;
    return e3 && (this[t2(711)] = e3, navigator.epubReadingSystem.layoutStyle = this._layoutStyle), this._layoutStyle || `paginated`;
  }
  epubReadingSystem(e3, t2) {
    return navigator.epubReadingSystem = { name: e3, version: t2, layoutStyle: this.layoutStyle(), hasFeature: function(e4) {
      var t3 = $;
      switch (e4) {
        case `dom-manipulation`:
          return true;
        case `layout-changes`:
          return true;
        case `touch-events`:
          return true;
        case t3(715):
          return true;
        case `keyboard-events`:
          return true;
        case `spine-scripting`:
          return false;
        default:
          return false;
      }
    } }, navigator.epubReadingSystem;
  }
  destroy() {
    this.removeListeners();
  }
};
(0, M.default)(lt.prototype);
var ut = class {
  constructor(e3) {
    var t2 = i;
    this.rendition = e3, this.highlights = [], this[t2(1063)] = [], this.marks = [], this[t2(543)] = {}, this._annotationsBySectionIndex = {}, this.rendition.hooks.render.register(this.inject[t2(594)](this)), this.rendition.hooks[t2(1179)].register(this.clear.bind(this));
  }
  add(e3, t2, n2, r2, a2, o2) {
    var s2 = i;
    let c2 = encodeURI(t2 + e3), l2 = new Ne(t2).spinePos, u2 = new dt({ type: e3, cfiRange: t2, data: n2, sectionIndex: l2, cb: r2, className: a2, styles: o2 });
    return this[s2(543)][c2] = u2, l2 in this._annotationsBySectionIndex ? this[s2(914)][l2][s2(1386)](c2) : this[s2(914)][l2] = [c2], this.rendition.views()[s2(1318)]((e4) => {
      u2.sectionIndex === e4.index && u2.attach(e4);
    }), u2;
  }
  remove(e3, t2) {
    var n2 = i;
    let r2 = encodeURI(e3 + t2);
    if (r2 in this._annotations) {
      let e4 = this[n2(543)][r2];
      if (t2 && e4.type !== t2) return;
      this.rendition.views().forEach((t3) => {
        var i2 = n2;
        this[i2(1449)](e4.sectionIndex, r2), e4.sectionIndex === t3.index && e4.detach(t3);
      }), delete this._annotations[r2];
    }
  }
  _removeFromAnnotationBySectionIndex(e3, t2) {
    this._annotationsBySectionIndex[e3] = this._annotationsAt(e3).filter((e4) => e4 !== t2);
  }
  _annotationsAt(e3) {
    var t2 = i;
    return this[t2(914)][e3];
  }
  highlight(e3, t2, n2, r2, i2) {
    return this.add(`highlight`, e3, t2, n2, r2, i2);
  }
  [i(828)](e3, t2, n2, r2, a2) {
    var o2 = i;
    return this[o2(1178)](`underline`, e3, t2, n2, r2, a2);
  }
  mark(e3, t2, n2) {
    return this.add(`mark`, e3, t2, n2);
  }
  each() {
    var e3 = i;
    return this._annotations[e3(1318)].apply(this._annotations, arguments);
  }
  inject(e3) {
    var t2 = i;
    let n2 = e3.index;
    n2 in this[t2(914)] && this[t2(914)][n2].forEach((t3) => {
      this._annotations[t3].attach(e3);
    });
  }
  clear(e3) {
    let t2 = e3.index;
    t2 in this._annotationsBySectionIndex && this._annotationsBySectionIndex[t2].forEach((t3) => {
      this._annotations[t3].detach(e3);
    });
  }
  show() {
  }
  [i(788)]() {
  }
}, dt = class {
  constructor({ type: e3, cfiRange: t2, data: n2, sectionIndex: r2, cb: i2, className: a2, styles: o2 }) {
    this.type = e3, this.cfiRange = t2, this.data = n2, this.sectionIndex = r2, this.mark = void 0, this.cb = i2, this.className = a2, this.styles = o2;
  }
  update(e3) {
    this.data = e3;
  }
  attach(e3) {
    var t2 = i;
    let { cfiRange: n2, data: r2, type: a2, mark: o2, cb: s2, className: c2, styles: l2 } = this, u2;
    return a2 === `highlight` ? u2 = e3.highlight(n2, r2, s2, c2, l2) : a2 === `underline` ? u2 = e3.underline(n2, r2, s2, c2, l2) : a2 === `mark` && (u2 = e3.mark(n2, r2, s2)), this.mark = u2, this.emit(Q[t2(918)].ATTACH, u2), u2;
  }
  detach(e3) {
    var t2 = i;
    let { cfiRange: n2, type: r2 } = this, a2;
    return e3 && (r2 === `highlight` ? a2 = e3[t2(413)](n2) : r2 === t2(828) ? a2 = e3.ununderline(n2) : r2 === t2(802) && (a2 = e3.unmark(n2))), this[t2(802)] = void 0, this.emit(Q[t2(918)].DETACH, a2), a2;
  }
  text() {
  }
};
(0, M.default)(dt.prototype);
var ft = e((e3) => {
  var t2 = i;
  Object.defineProperty(e3, "__esModule", { value: true }), e3.createElement = n2;
  function n2(e4) {
    return document.createElementNS(`http://www.w3.org/2000/svg`, e4);
  }
  e3[t2(821)] = { createElement: n2 };
}), pt = e((e3) => {
  var t2 = i;
  Object[t2(589)](e3, t2(1224), { value: true }), e3.proxyMouse = n2, e3[t2(1390)] = r2, e3[t2(821)] = { proxyMouse: n2 };
  function n2(e4, n3) {
    var i2 = t2;
    function o2(t3) {
      for (var i3 = $, o3 = n3.length - 1; o3 >= 0; o3--) {
        var s3 = n3[o3], c3 = t3[i3(662)], l3 = t3.clientY;
        if (t3.touches && t3.touches.length && (c3 = t3[i3(655)][0].clientX, l3 = t3.touches[0].clientY), a2(s3, e4, c3, l3)) {
          s3.dispatchEvent(r2(t3));
          break;
        }
      }
    }
    if (e4.nodeName === i2(1112) || e4.nodeName === `IFRAME`) try {
      this.target = e4.contentDocument;
    } catch {
      this.target = e4;
    }
    else this.target = e4;
    for (var s2 = [`mouseup`, `mousedown`, `click`, i2(1041)], c2 = 0; c2 < s2.length; c2++) {
      var l2 = s2[c2];
      this.target.addEventListener(l2, function(e5) {
        return o2(e5);
      }, false);
    }
  }
  function r2(e4) {
    var n3 = t2, r3 = Object[n3(1164)]({}, e4, { bubbles: false });
    try {
      return new MouseEvent(e4.type, r3);
    } catch {
      var i2 = document.createEvent(`MouseEvents`);
      return i2.initMouseEvent(e4.type, false, r3.cancelable, r3.view, r3[n3(1292)], r3.screenX, r3.screenY, r3.clientX, r3.clientY, r3.ctrlKey, r3.altKey, r3[n3(1177)], r3.metaKey, r3[n3(503)], r3[n3(665)]), i2;
    }
  }
  function a2(e4, t3, n3, r3) {
    var i2 = t3.getBoundingClientRect();
    function a3(e5, t4, n4) {
      var r4 = $, a4 = e5.top - i2[r4(1107)], o3 = e5.left - i2.left, s3 = a4 + e5.height, c3 = o3 + e5.width;
      return a4 <= n4 && o3 <= t4 && s3 > n4 && c3 > t4;
    }
    if (!a3(e4.getBoundingClientRect(), n3, r3)) return false;
    for (var o2 = e4.getClientRects(), s2 = 0, c2 = o2.length; s2 < c2; s2++) if (a3(o2[s2], n3, r3)) return true;
    return false;
  }
}), mt = e((e3) => {
  var t2 = i;
  Object.defineProperty(e3, "__esModule", { value: true }), e3.Underline = e3[t2(622)] = e3.Mark = e3[t2(546)] = void 0;
  var n2 = function e4(n3, r3, i2) {
    var a3 = t2;
    n3 === null && (n3 = Function.prototype);
    var o3 = Object.getOwnPropertyDescriptor(n3, r3);
    if (o3 === void 0) {
      var s3 = Object.getPrototypeOf(n3);
      return s3 === null ? void 0 : e4(s3, r3, i2);
    } else if (`value` in o3) return o3[a3(1225)];
    else {
      var c3 = o3.get;
      return c3 === void 0 ? void 0 : c3[a3(906)](i2);
    }
  }, r2 = /* @__PURE__ */ (function() {
    function e4(e5, t3) {
      for (var n3 = 0; n3 < t3.length; n3++) {
        var r3 = t3[n3];
        r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e5, r3.key, r3);
      }
    }
    return function(t3, n3, r3) {
      return n3 && e4(t3.prototype, n3), r3 && e4(t3, r3), t3;
    };
  })(), a2 = s2(ft()), o2 = s2(pt());
  function s2(e4) {
    return e4 && e4.__esModule ? e4 : { default: e4 };
  }
  function c2(e4, n3) {
    var r3 = t2;
    if (!e4) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
    return n3 && (typeof n3 == `object` || typeof n3 == r3(799)) ? n3 : e4;
  }
  function l2(e4, n3) {
    var r3 = t2;
    if (typeof n3 != `function` && n3 !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof n3);
    e4.prototype = Object.create(n3 && n3.prototype, { constructor: { value: e4, enumerable: false, writable: true, configurable: true } }), n3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e4, n3) : e4[r3(853)] = n3);
  }
  function u2(e4, t3) {
    if (!(e4 instanceof t3)) throw TypeError(`Cannot call a class as a function`);
  }
  e3[t2(546)] = (function() {
    var e4 = t2;
    function n3(e5) {
      var t3 = $, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document[t3(471)];
      u2(this, n3), this.target = e5, this.element = a2[t3(821)].createElement(`svg`), this.marks = [], this.element.style.position = `absolute`, this[t3(1443)].setAttribute(`pointer-events`, `none`), o2.default.proxyMouse(this[t3(1417)], this.marks), this.container = r3, this.container[t3(1270)](this.element), this.render();
    }
    return r2(n3, [{ key: e4(1110), value: function(t3) {
      var n4 = a2[e4(821)].createElement(`g`);
      return this.element.appendChild(n4), t3.bind(n4, this.container), this.marks.push(t3), t3.render(), t3;
    } }, { key: e4(1411), value: function(t3) {
      var n4 = e4, r3 = this.marks[n4(755)](t3);
      if (r3 !== -1) {
        var i2 = t3.unbind();
        this.element.removeChild(i2), this.marks[n4(858)](r3, 1);
      }
    } }, { key: `render`, value: function() {
      var t3 = e4;
      f2(this.element, d2(this[t3(1417)], this.container));
      var n4 = true, r3 = false, i2 = void 0;
      try {
        for (var a3 = this.marks[Symbol.iterator](), o3; !(n4 = (o3 = a3.next()).done); n4 = true) o3[t3(1225)].render();
      } catch (e5) {
        r3 = true, i2 = e5;
      } finally {
        try {
          !n4 && a3.return && a3.return();
        } finally {
          if (r3) throw i2;
        }
      }
    } }]), n3;
  })(), e3[t2(1204)] = (function(e4) {
    l2(t3, e4);
    function t3(e5, n3, r3, i2) {
      return u2(this, t3), c2(this, (t3.__proto__ || Object.getPrototypeOf(t3)).call(this, e5, n3, r3, i2));
    }
    return r2(t3, [{ key: `render`, value: function() {
      for (var e5 = $; this[e5(1443)].firstChild; ) this.element.removeChild(this.element.firstChild);
      for (var t4 = this.element[e5(1247)][e5(1039)](), n3 = this.filteredRanges(), r3 = this[e5(1443)].getBoundingClientRect(), i2 = this.container[e5(638)](), o3 = 0, s3 = n3[e5(587)]; o3 < s3; o3++) {
        var c3 = n3[o3], l3 = a2[e5(821)].createElement(e5(1322));
        l3[e5(1016)](`x`, c3.left - r3.left + i2.left), l3.setAttribute(`y`, c3.top - r3.top + i2.top), l3.setAttribute(e5(1271), c3.height), l3[e5(1016)](`width`, c3[e5(610)]), l3.setAttribute(`fill`, `none`);
        var u3 = a2.default.createElement(`line`);
        u3.setAttribute(`x1`, c3.left - r3.left + i2.left), u3.setAttribute(`x2`, c3.left - r3[e5(1005)] + i2.left + c3[e5(610)]), u3[e5(1016)](`y1`, c3.top - r3.top + i2.top + c3[e5(1271)] - 1), u3.setAttribute(`y2`, c3.top - r3.top + i2[e5(1107)] + c3.height - 1), u3.setAttribute(`stroke-width`, 1), u3.setAttribute(`stroke`, `black`), u3.setAttribute(`stroke-linecap`, `square`), t4.appendChild(l3), t4[e5(1270)](u3);
      }
      this.element[e5(1270)](t4);
    } }]), t3;
  })(e3.Highlight = (function(e4) {
    var i2 = t2;
    l2(o3, e4);
    function o3(e5, t3, n3, r3) {
      var i3 = $;
      u2(this, o3);
      var a3 = c2(this, (o3.__proto__ || Object.getPrototypeOf(o3)).call(this));
      return a3[i3(1023)] = e5, a3.className = t3, a3[i3(1014)] = n3 || {}, a3.attributes = r3 || {}, a3;
    }
    return r2(o3, [{ key: `bind`, value: function(e5, t3) {
      var r3 = $;
      for (var i3 in n2(o3[r3(427)][r3(853)] || Object.getPrototypeOf(o3.prototype), r3(594), this).call(this, e5, t3), this.data) this.data.hasOwnProperty(i3) && (this.element[r3(384)][i3] = this.data[i3]);
      for (var i3 in this.attributes) this[r3(793)].hasOwnProperty(i3) && this.element.setAttribute(i3, this.attributes[i3]);
      this.className && this.element.classList.add(this.className);
    } }, { key: i2(823), value: function() {
      for (var e5 = i2; this[e5(1443)].firstChild; ) this.element.removeChild(this[e5(1443)].firstChild);
      for (var t3 = this.element.ownerDocument.createDocumentFragment(), n3 = this.filteredRanges(), r3 = this[e5(1443)].getBoundingClientRect(), o4 = this.container.getBoundingClientRect(), s3 = 0, c3 = n3.length; s3 < c3; s3++) {
        var l3 = n3[s3], u3 = a2.default.createElement(e5(1322));
        u3.setAttribute(`x`, l3[e5(1005)] - r3.left + o4.left), u3.setAttribute(`y`, l3.top - r3.top + o4.top), u3[e5(1016)](`height`, l3.height), u3.setAttribute(`width`, l3.width), t3.appendChild(u3);
      }
      this.element.appendChild(t3);
    } }]), o3;
  })(e3.Mark = (function() {
    var e4 = t2;
    function n3() {
      var e5 = $;
      u2(this, n3), this[e5(1443)] = null;
    }
    return r2(n3, [{ key: `bind`, value: function(e5, t3) {
      var n4 = $;
      this[n4(1443)] = e5, this.container = t3;
    } }, { key: `unbind`, value: function() {
      var e5 = this.element;
      return this.element = null, e5;
    } }, { key: `render`, value: function() {
    } }, { key: e4(894), value: function(t3) {
      var n4 = e4;
      this[n4(1443)] && this.element.dispatchEvent(t3);
    } }, { key: `getBoundingClientRect`, value: function() {
      var t3 = e4;
      return this[t3(1443)][t3(638)]();
    } }, { key: `getClientRects`, value: function() {
      for (var t3 = e4, n4 = [], r3 = this.element.firstChild; r3; ) n4[t3(1386)](r3[t3(638)]()), r3 = r3.nextSibling;
      return n4;
    } }, { key: `filteredRanges`, value: function() {
      var t3 = Array[e4(1196)](this.range.getClientRects());
      return t3.filter(function(e5) {
        for (var n4 = 0; n4 < t3.length; n4++) {
          if (t3[n4] === e5) return true;
          if (p2(t3[n4], e5)) return false;
        }
        return true;
      });
    } }]), n3;
  })()));
  function d2(e4, n3) {
    var r3 = t2, i2 = n3.getBoundingClientRect(), a3 = e4.getBoundingClientRect();
    return { top: a3[r3(1107)] - i2.top, left: a3[r3(1005)] - i2.left, height: e4.scrollHeight, width: e4[r3(734)] };
  }
  function f2(e4, n3) {
    var r3 = t2;
    e4.style[r3(428)](`top`, n3[r3(1107)] + `px`, r3(912)), e4.style.setProperty(`left`, n3.left + `px`, `important`), e4.style.setProperty(r3(1271), n3[r3(1271)] + `px`, `important`), e4.style.setProperty(`width`, n3.width + `px`, `important`);
  }
  function p2(e4, n3) {
    var r3 = t2;
    return n3.right <= e4.right && n3[r3(1005)] >= e4.left && n3.top >= e4.top && n3.bottom <= e4.bottom;
  }
})(), ht = class {
  constructor(e3, t2) {
    var n2 = i;
    this[n2(685)] = z({ ignoreClass: ``, axis: void 0, direction: void 0, width: 0, height: 0, layout: void 0, globalLayoutProperties: {}, method: void 0, forceRight: false, allowScriptedContent: false, allowPopups: false }, t2 || {}), this.id = `epubjs-view-` + te(), this.section = e3, this.index = e3.index, this.element = this[n2(872)](this.settings.axis), this.added = false, this.displayed = false, this.rendered = false, this.fixedWidth = 0, this.fixedHeight = 0, this.epubcfi = new Ne(), this.layout = this[n2(685)][n2(1488)], this.pane = void 0, this[n2(698)] = {}, this.underlines = {}, this.marks = {};
  }
  container(e3) {
    var t2 = i, n2 = document.createElement(`div`);
    return n2.classList.add(`epub-view`), n2.style.height = `0px`, n2.style.width = `0px`, n2[t2(1037)][t2(855)] = `hidden`, n2.style.position = t2(1424), n2[t2(1037)][t2(739)] = `block`, e3 && e3 == `horizontal` ? n2.style[t2(1085)] = `none` : n2.style.flex = `initial`, n2;
  }
  create() {
    var e3 = i;
    return this[e3(1112)] ? this.iframe : (this.element || (this[e3(1443)] = this[e3(399)]()), this.iframe = document.createElement(`iframe`), this[e3(1112)].id = this.id, this.iframe.scrolling = `no`, this[e3(1112)][e3(1037)].overflow = `hidden`, this.iframe.seamless = `seamless`, this.iframe.style.border = `none`, this.iframe.sandbox = `allow-same-origin`, this.settings.allowScriptedContent && (this.iframe.sandbox += ` allow-scripts`), this.settings.allowPopups && (this[e3(1112)][e3(1435)] += ` allow-popups`), this.iframe.setAttribute(`enable-annotation`, e3(1217)), this.resizing = true, this.element.style.visibility = `hidden`, this.iframe.style.visibility = `hidden`, this.iframe.style.width = `0`, this.iframe.style.height = `0`, this[e3(494)] = 0, this[e3(953)] = 0, this.element[e3(1016)](e3(786), this[e3(1004)]), this.added = true, this.elementBounds = ue(this.element), `srcdoc` in this.iframe ? this[e3(955)] = true : this.supportsSrcdoc = false, this.settings.method || (this.settings.method = this.supportsSrcdoc ? e3(390) : e3(1346)), this.iframe);
  }
  render(e3, t2) {
    var n2 = i;
    return this.create(), this.size(), this.sectionRender || (this.sectionRender = this.section.render(e3)), this[n2(579)].then((function(e4) {
      return this.load(e4);
    })[n2(594)](this))[n2(631)]((function() {
      var e4 = n2;
      let t3 = this[e4(762)].writingMode(), r2;
      return r2 = this.settings.flow === e4(1480) ? t3.indexOf(`vertical`) === 0 ? e4(1009) : `vertical` : t3.indexOf(`vertical`) === 0 ? `vertical` : `horizontal`, t3.indexOf(`vertical`) === 0 && this.settings.flow === `paginated` && (this[e4(1488)].delta = this.layout.height), this.setAxis(r2), this[e4(1396)](Q.VIEWS.AXIS, r2), this.setWritingMode(t3), this[e4(1396)](Q[e4(877)].WRITING_MODE, t3), this.layout.format(this.contents, this.section, this.axis), this.addListeners(), new Promise((e5, t4) => {
        this.expand(), this.settings.forceRight && (this.element.style.marginLeft = this.width() + `px`), e5();
      });
    }).bind(this), (function(e4) {
      return this.emit(Q.VIEWS.LOAD_ERROR, e4), new Promise((t3, n3) => {
        n3(e4);
      });
    }).bind(this)).then((function() {
      var e4 = n2;
      this[e4(1396)](Q.VIEWS.RENDERED, this.section);
    }).bind(this));
  }
  reset() {
    var e3 = i;
    this.iframe && (this.iframe.style.width = `0`, this[e3(1112)][e3(1037)][e3(1271)] = `0`, this[e3(494)] = 0, this._height = 0, this._textWidth = void 0, this[e3(1099)] = void 0, this._textHeight = void 0, this._contentHeight = void 0), this._needsReframe = true;
  }
  size(e3, t2) {
    var n2 = i, r2 = e3 || this.settings.width, a2 = t2 || this.settings.height;
    this.layout.name === `pre-paginated` ? this.lock(`both`, r2, a2) : this.settings.axis === `horizontal` ? this.lock(n2(1271), r2, a2) : this.lock(`width`, r2, a2), this.settings[n2(610)] = r2, this.settings.height = a2;
  }
  lock(e3, t2, n2) {
    var r2 = i, a2 = de(this.element), o2 = this.iframe ? de(this.iframe) : { width: 0, height: 0 };
    e3 == `width` && R(t2) && (this.lockedWidth = t2 - a2.width - o2.width), e3 == `height` && R(n2) && (this.lockedHeight = n2 - a2.height - o2.height), e3 === r2(1043) && R(t2) && R(n2) && (this[r2(463)] = t2 - a2.width - o2.width, this[r2(1162)] = n2 - a2.height - o2[r2(1271)]), this.displayed && this.iframe && this.expand();
  }
  [i(1489)](e3) {
    var t2 = i, n2 = this.lockedWidth, r2 = this.lockedHeight, a2;
    !this.iframe || this._expanding || (this._expanding = true, this.layout.name === `pre-paginated` ? (n2 = this.layout.columnWidth, r2 = this.layout.height) : this.settings.axis === `horizontal` ? (n2 = this.contents.textWidth(), n2 % this.layout.pageWidth > 0 && (n2 = Math.ceil(n2 / this.layout.pageWidth) * this.layout.pageWidth), this.settings.forceEvenPages && (a2 = n2 / this.layout[t2(1306)], this.layout.divisor > 1 && this.layout.name === `reflowable` && a2 % 2 > 0 && (n2 += this.layout.pageWidth))) : this.settings.axis === `vertical` && (r2 = this.contents.textHeight(), this[t2(685)].flow === `paginated` && r2 % this.layout.height > 0 && (r2 = Math[t2(1428)](r2 / this.layout.height) * this.layout.height)), (this._needsReframe || n2 != this._width || r2 != this._height) && this.reframe(n2, r2), this._expanding = false);
  }
  [i(400)](e3, t2) {
    var n2 = i, r2;
    R(e3) && (this.element.style.width = e3 + `px`, this.iframe.style.width = e3 + `px`, this[n2(494)] = e3), R(t2) && (this.element[n2(1037)].height = t2 + `px`, this.iframe[n2(1037)].height = t2 + `px`, this._height = t2), r2 = { width: e3, height: t2, widthDelta: this.prevBounds ? e3 - this.prevBounds.width : e3, heightDelta: this[n2(1246)] ? t2 - this.prevBounds.height : t2 }, this.pane && this[n2(1446)].render(), requestAnimationFrame(() => {
      var e4 = n2;
      let t3;
      for (let n3 in this.marks) this[e4(397)].hasOwnProperty(n3) && (t3 = this.marks[n3], this.placeMark(t3.element, t3.range));
    }), this[n2(1253)](this, r2), this[n2(1396)](Q[n2(877)].RESIZED, r2), this[n2(1246)] = r2, this.elementBounds = ue(this[n2(1443)]);
  }
  load(e3) {
    var t2 = i, n2 = new X(), r2 = n2[t2(371)];
    if (!this.iframe) return n2[t2(1220)](Error(`No Iframe Available`)), r2;
    if (this[t2(1112)].onload = (function(e4) {
      this.onLoad(e4, n2);
    }).bind(this), this.settings.method === `blobUrl`) this.blobUrl = U(e3, `application/xhtml+xml`), this.iframe.src = this.blobUrl, this.element[t2(1270)](this.iframe);
    else if (this.settings.method === `srcdoc`) this[t2(1112)].srcdoc = e3, this.element.appendChild(this.iframe);
    else {
      if (this.element.appendChild(this.iframe), this[t2(502)] = this.iframe.contentDocument, !this.document) return n2.reject(Error(`No Document Available`)), r2;
      if (this.iframe.contentDocument[t2(809)](), window[t2(800)] && MSApp.execUnsafeLocalFunction) {
        var a2 = this;
        MSApp.execUnsafeLocalFunction(function() {
          a2[t2(1112)].contentDocument.write(e3);
        });
      } else this.iframe.contentDocument.write(e3);
      this.iframe.contentDocument.close();
    }
    return r2;
  }
  onLoad(e3, t2) {
    var n2 = i;
    this.window = this.iframe.contentWindow, this.document = this.iframe.contentDocument, this.contents = new lt(this.document, this[n2(502)][n2(471)], this.section.cfiBase, this.section.index), this.rendering = false;
    var r2 = this.document.querySelector(n2(1294));
    r2 ? r2.setAttribute(`href`, this.section[n2(382)]) : (r2 = this.document.createElement(`link`), r2.setAttribute(n2(1084), `canonical`), r2.setAttribute(`href`, this.section.canonical), this.document.querySelector(n2(1277)).appendChild(r2)), this.contents.on(Q[n2(1075)][n2(592)], () => {
      var e4 = n2;
      this.displayed && this[e4(1112)] && (this.expand(), this.contents && this.layout.format(this.contents));
    }), this.contents.on(Q.CONTENTS.RESIZE, (e4) => {
      var t3 = n2;
      this[t3(731)] && this.iframe && (this[t3(1489)](), this.contents && this[t3(1488)].format(this.contents));
    }), t2.resolve(this.contents);
  }
  setLayout(e3) {
    var t2 = i;
    this.layout = e3, this.contents && (this.layout.format(this[t2(762)]), this[t2(1489)]());
  }
  setAxis(e3) {
    var t2 = i;
    this.settings.axis = e3, e3 == `horizontal` ? this[t2(1443)].style.flex = t2(1153) : this[t2(1443)].style.flex = `initial`, this.size();
  }
  setWritingMode(e3) {
    var t2 = i;
    this[t2(1397)] = e3;
  }
  addListeners() {
  }
  removeListeners(e3) {
  }
  display(e3) {
    var t2 = i, n2 = new X();
    return this.displayed ? n2.resolve(this) : this.render(e3)[t2(631)]((function() {
      this.emit(Q.VIEWS.DISPLAYED, this), this.onDisplayed(this), this.displayed = true, n2.resolve(this);
    }).bind(this), function(e4) {
      n2[t2(1220)](e4, this);
    }), n2.promise;
  }
  [i(928)]() {
    var e3 = i;
    this.element.style[e3(624)] = `visible`, this.iframe && (this[e3(1112)].style.visibility = `visible`, this[e3(1112)].style[e3(911)] = e3(618), this.iframe[e3(820)], this.iframe[e3(1037)][e3(911)] = null), this.emit(Q.VIEWS[e3(527)], this);
  }
  hide() {
    var e3 = i;
    this.element[e3(1037)][e3(624)] = `hidden`, this.iframe.style.visibility = e3(525), this.stopExpanding = true, this[e3(1396)](Q.VIEWS.HIDDEN, this);
  }
  offset() {
    var e3 = i;
    return { top: this[e3(1443)].offsetTop, left: this.element.offsetLeft };
  }
  width() {
    var e3 = i;
    return this[e3(494)];
  }
  height() {
    return this._height;
  }
  position() {
    return this.element.getBoundingClientRect();
  }
  locationOf(e3) {
    this.iframe.getBoundingClientRect();
    var t2 = this.contents.locationOf(e3, this.settings.ignoreClass);
    return { left: t2.left, top: t2.top };
  }
  [i(454)](e3) {
  }
  onResize(e3, t2) {
  }
  bounds(e3) {
    var t2 = i;
    return (e3 || !this.elementBounds) && (this[t2(1245)] = ue(this.element)), this.elementBounds;
  }
  highlight(e3, t2 = {}, n2, r2 = `epubjs-hl`, a2 = {}) {
    var o2 = i;
    if (!this.contents) return;
    let s2 = Object.assign({ fill: `yellow`, "fill-opacity": `0.3`, "mix-blend-mode": `multiply` }, a2), c2 = this.contents[o2(1023)](e3), l2 = () => {
      this.emit(Q.VIEWS.MARK_CLICKED, e3, t2);
    };
    t2.epubcfi = e3, this.pane || (this.pane = new mt.Pane(this.iframe, this.element));
    let u2 = new mt[o2(622)](c2, r2, t2, s2), d2 = this.pane[o2(1110)](u2);
    return this.highlights[e3] = { mark: d2, element: d2.element, listeners: [l2, n2] }, d2[o2(1443)].setAttribute(`ref`, r2), d2[o2(1443)].addEventListener(`click`, l2), d2.element.addEventListener(`touchstart`, l2), n2 && (d2.element.addEventListener(`click`, n2), d2.element.addEventListener(`touchstart`, n2)), d2;
  }
  [i(828)](e3, t2 = {}, n2, r2 = `epubjs-ul`, a2 = {}) {
    var o2 = i;
    if (!this[o2(762)]) return;
    let s2 = Object.assign({ stroke: o2(838), "stroke-opacity": o2(717), "mix-blend-mode": `multiply` }, a2), c2 = this.contents.range(e3), l2 = () => {
      this.emit(Q.VIEWS.MARK_CLICKED, e3, t2);
    };
    t2.epubcfi = e3, this.pane || (this[o2(1446)] = new mt.Pane(this[o2(1112)], this.element));
    let u2 = new mt.Underline(c2, r2, t2, s2), d2 = this.pane.addMark(u2);
    return this.underlines[e3] = { mark: d2, element: d2.element, listeners: [l2, n2] }, d2.element[o2(1016)](`ref`, r2), d2.element.addEventListener(`click`, l2), d2.element.addEventListener(o2(1041), l2), n2 && (d2.element.addEventListener(`click`, n2), d2[o2(1443)].addEventListener(`touchstart`, n2)), d2;
  }
  mark(e3, t2 = {}, n2) {
    var r2 = i;
    if (!this.contents) return;
    if (e3 in this[r2(397)]) return this.marks[e3];
    let a2 = this.contents.range(e3);
    if (!a2) return;
    let o2 = a2.commonAncestorContainer, s2 = o2.nodeType === 1 ? o2 : o2.parentNode, c2 = (n3) => {
      this.emit(Q.VIEWS.MARK_CLICKED, e3, t2);
    };
    a2.collapsed && o2[r2(387)] === 1 ? (a2 = new Range(), a2.selectNodeContents(o2)) : a2.collapsed && (a2 = new Range(), a2.selectNodeContents(s2));
    let l2 = this.document.createElement(`a`);
    return l2.setAttribute(`ref`, `epubjs-mk`), l2.style.position = `absolute`, l2.dataset.epubcfi = e3, t2 && Object.keys(t2).forEach((e4) => {
      l2.dataset[e4] = t2[e4];
    }), n2 && (l2.addEventListener(`click`, n2), l2.addEventListener(`touchstart`, n2)), l2.addEventListener(`click`, c2), l2[r2(1258)](`touchstart`, c2), this.placeMark(l2, a2), this.element[r2(1270)](l2), this.marks[e3] = { element: l2, range: a2, listeners: [c2, n2] }, s2;
  }
  placeMark(e3, t2) {
    var n2 = i;
    let r2, a2, o2;
    if (this.layout.name === `pre-paginated` || this.settings.axis !== `horizontal`) {
      let e4 = t2.getBoundingClientRect();
      r2 = e4.top, a2 = e4.right;
    } else {
      let e4 = t2.getClientRects(), i2;
      for (var s2 = 0; s2 != e4.length; s2++) i2 = e4[s2], (!o2 || i2[n2(1005)] < o2) && (o2 = i2.left, a2 = Math.ceil(o2 / this.layout.props.pageWidth) * this[n2(1488)][n2(1330)].pageWidth - this[n2(1488)][n2(605)] / 2, r2 = i2.top);
    }
    e3.style.top = r2 + `px`, e3.style.left = a2 + `px`;
  }
  unhighlight(e3) {
    let t2;
    e3 in this.highlights && (t2 = this.highlights[e3], this.pane.removeMark(t2.mark), t2.listeners.forEach((e4) => {
      var n2 = $;
      e4 && (t2.element.removeEventListener(`click`, e4), t2.element[n2(556)](n2(1041), e4));
    }), delete this.highlights[e3]);
  }
  [i(1313)](e3) {
    var t2 = i;
    let n2;
    e3 in this.underlines && (n2 = this.underlines[e3], this[t2(1446)][t2(1411)](n2.mark), n2.listeners.forEach((e4) => {
      e4 && (n2.element.removeEventListener(`click`, e4), n2.element.removeEventListener(`touchstart`, e4));
    }), delete this.underlines[e3]);
  }
  [i(457)](e3) {
    let t2;
    e3 in this.marks && (t2 = this.marks[e3], this.element.removeChild(t2.element), t2.listeners.forEach((e4) => {
      e4 && (t2.element.removeEventListener(`click`, e4), t2.element.removeEventListener(`touchstart`, e4));
    }), delete this.marks[e3]);
  }
  [i(881)]() {
    var e3 = i;
    for (let e4 in this.highlights) this.unhighlight(e4);
    for (let t2 in this[e3(1063)]) this.ununderline(t2);
    for (let t2 in this[e3(397)]) this.unmark(t2);
    this.blobUrl && ge(this.blobUrl), this.displayed && (this.displayed = false, this.removeListeners(), this.contents.destroy(), this.stopExpanding = true, this[e3(1443)][e3(1413)](this.iframe), this.pane && (this.pane = (this.pane.element.remove(), void 0)), this.iframe = void 0, this.contents = void 0, this._textWidth = null, this._textHeight = null, this._width = null, this[e3(953)] = null);
  }
};
(0, M.default)(ht.prototype);
function gt() {
  var e3 = i, t2 = e3(785), n2 = _t();
  return document.body.appendChild(n2), n2.scrollLeft > 0 ? t2 = `default` : typeof Element < `u` && Element.prototype[e3(573)] ? (n2.children[0][e3(1491)][1].scrollIntoView(), n2[e3(633)] < 0 && (t2 = `negative`)) : (n2[e3(633)] = 1, n2.scrollLeft === 0 && (t2 = `negative`)), document.body[e3(1413)](n2), t2;
}
function _t() {
  var e3 = i, t2 = document.createElement(`div`);
  t2.dir = `rtl`, t2.style[e3(1207)] = `fixed`, t2[e3(1037)][e3(610)] = `1px`, t2.style.height = `1px`, t2.style.top = e3(641), t2[e3(1037)][e3(1005)] = `0px`, t2.style.overflow = `hidden`;
  var n2 = document[e3(1119)](e3(1278));
  n2.style.width = `2px`;
  var r2 = document.createElement(`span`);
  r2.style.width = `1px`, r2.style.display = `inline-block`;
  var a2 = document.createElement(`span`);
  return a2.style.width = e3(1357), a2.style[e3(739)] = `inline-block`, n2.appendChild(r2), n2.appendChild(a2), t2.appendChild(n2), t2;
}
function $(e3, t2) {
  return e3 -= 349, Z()[e3];
}
var vt = e((e3, t2) => {
  function n2(e4) {
    var t3 = typeof e4;
    return e4 != null && (t3 == `object` || t3 == `function`);
  }
  t2.exports = n2;
}), yt = e((e3, t2) => {
  t2.exports = typeof global == `object` && global && global.Object === Object && global;
}), bt = e((e3, t2) => {
  var n2 = yt(), r2 = typeof self == `object` && self && self.Object === Object && self;
  t2.exports = n2 || r2 || Function(`return this`)();
}), xt = e((e3, t2) => {
  var n2 = bt();
  t2.exports = function() {
    return n2.Date.now();
  };
}), St = e((e3, t2) => {
  var n2 = /\s/;
  function r2(e4) {
    for (var t3 = e4.length; t3-- && n2.test(e4.charAt(t3)); ) ;
    return t3;
  }
  t2.exports = r2;
}), Ct = e((e3, t2) => {
  var n2 = St(), r2 = /^\s+/;
  function i2(e4) {
    return e4 && e4.slice(0, n2(e4) + 1).replace(r2, ``);
  }
  t2.exports = i2;
}), wt = e((e3, t2) => {
  var n2 = i;
  t2[n2(952)] = bt().Symbol;
}), Tt = e((e3, t2) => {
  var n2 = i, r2 = wt(), a2 = Object[n2(427)], o2 = a2.hasOwnProperty, s2 = a2.toString, c2 = r2 ? r2[n2(533)] : void 0;
  function l2(e4) {
    var t3 = o2.call(e4, c2), n3 = e4[c2];
    try {
      e4[c2] = void 0;
      var r3 = true;
    } catch {
    }
    var i2 = s2.call(e4);
    return r3 && (t3 ? e4[c2] = n3 : delete e4[c2]), i2;
  }
  t2.exports = l2;
}), Et = e((e3, t2) => {
  var n2 = i, r2 = Object.prototype.toString;
  function a2(e4) {
    return r2.call(e4);
  }
  t2[n2(952)] = a2;
}), Dt = e((e3, t2) => {
  var n2 = wt(), r2 = Tt(), i2 = Et(), a2 = `[object Null]`, o2 = `[object Undefined]`, s2 = n2 ? n2.toStringTag : void 0;
  function c2(e4) {
    return e4 == null ? e4 === void 0 ? o2 : a2 : s2 && s2 in Object(e4) ? r2(e4) : i2(e4);
  }
  t2.exports = c2;
}), Ot = e((e3, t2) => {
  var n2 = i;
  function r2(e4) {
    return typeof e4 == `object` && !!e4;
  }
  t2[n2(952)] = r2;
}), kt = e((e3, t2) => {
  var n2 = Dt(), r2 = Ot(), i2 = `[object Symbol]`;
  function a2(e4) {
    return typeof e4 == `symbol` || r2(e4) && n2(e4) == i2;
  }
  t2.exports = a2;
}), At = e((e3, t2) => {
  var n2 = Ct(), r2 = vt(), i2 = kt(), a2 = NaN, o2 = /^[-+]0x[0-9a-f]+$/i, s2 = /^0b[01]+$/i, c2 = /^0o[0-7]+$/i, l2 = parseInt;
  function u2(e4) {
    var t3 = $;
    if (typeof e4 == `number`) return e4;
    if (i2(e4)) return a2;
    if (r2(e4)) {
      var u3 = typeof e4.valueOf == t3(799) ? e4.valueOf() : e4;
      e4 = r2(u3) ? u3 + `` : u3;
    }
    if (typeof e4 != `string`) return e4 === 0 ? e4 : +e4;
    e4 = n2(e4);
    var d2 = s2.test(e4);
    return d2 || c2.test(e4) ? l2(e4.slice(2), d2 ? 2 : 8) : o2.test(e4) ? a2 : +e4;
  }
  t2.exports = u2;
}), jt = e((e3, t2) => {
  var n2 = i, r2 = vt(), a2 = xt(), o2 = At(), s2 = n2(754), c2 = Math[n2(776)], l2 = Math.min;
  function u2(e4, t3, i2) {
    var u3 = n2, d2, f2, p2, m2, h2, g2, _2 = 0, v2 = false, y2 = false, b2 = true;
    if (typeof e4 != u3(799)) throw TypeError(s2);
    t3 = o2(t3) || 0, r2(i2) && (v2 = !!i2[u3(547)], y2 = u3(871) in i2, p2 = y2 ? c2(o2(i2.maxWait) || 0, t3) : p2, b2 = `trailing` in i2 ? !!i2.trailing : b2);
    function x2(t4) {
      var n3 = u3, r3 = d2, i3 = f2;
      return d2 = f2 = void 0, _2 = t4, m2 = e4[n3(1445)](i3, r3), m2;
    }
    function S2(e5) {
      return _2 = e5, h2 = setTimeout(T2, t3), v2 ? x2(e5) : m2;
    }
    function C2(e5) {
      var n3 = e5 - g2, r3 = e5 - _2, i3 = t3 - n3;
      return y2 ? l2(i3, p2 - r3) : i3;
    }
    function w2(e5) {
      var n3 = e5 - g2, r3 = e5 - _2;
      return g2 === void 0 || n3 >= t3 || n3 < 0 || y2 && r3 >= p2;
    }
    function T2() {
      var e5 = a2();
      if (w2(e5)) return E2(e5);
      h2 = setTimeout(T2, C2(e5));
    }
    function E2(e5) {
      return h2 = void 0, b2 && d2 ? x2(e5) : (d2 = f2 = void 0, m2);
    }
    function D2() {
      h2 !== void 0 && clearTimeout(h2), _2 = 0, d2 = g2 = f2 = h2 = void 0;
    }
    function O2() {
      return h2 === void 0 ? m2 : E2(a2());
    }
    function k2() {
      var e5 = a2(), n3 = w2(e5);
      if (d2 = arguments, f2 = this, g2 = e5, n3) {
        if (h2 === void 0) return S2(g2);
        if (y2) return clearTimeout(h2), h2 = setTimeout(T2, t3), x2(g2);
      }
      return h2 === void 0 && (h2 = setTimeout(T2, t3)), m2;
    }
    return k2[u3(1485)] = D2, k2.flush = O2, k2;
  }
  t2[n2(952)] = u2;
}), Mt = t(e((e3, t2) => {
  var n2 = jt(), r2 = vt(), i2 = `Expected a function`;
  function a2(e4, t3, a3) {
    var o2 = $, s2 = true, c2 = true;
    if (typeof e4 != `function`) throw TypeError(i2);
    return r2(a3) && (s2 = `leading` in a3 ? !!a3[o2(547)] : s2, c2 = `trailing` in a3 ? !!a3.trailing : c2), n2(e4, t3, { leading: s2, maxWait: t3, trailing: c2 });
  }
  t2.exports = a2;
})()), Nt = class {
  constructor(e3) {
    var t2 = i;
    this.settings = e3 || {}, this.id = t2(415) + te(), this.container = this[t2(896)](this.settings), this.settings.hidden && (this[t2(1303)] = this.wrap(this.container));
  }
  create(e3) {
    var t2 = i;
    let n2 = e3.height, r2 = e3.width, a2 = e3.overflow || false, o2 = e3.axis || `vertical`, s2 = e3.direction;
    z(this.settings, e3), e3.height && R(e3.height) && (n2 = e3[t2(1271)] + `px`), e3.width && R(e3.width) && (r2 = e3.width + `px`);
    let c2 = document.createElement(t2(1278));
    return c2.id = this.id, c2.classList.add(`epub-container`), c2.style.wordSpacing = `0`, c2[t2(1037)][t2(570)] = `0`, c2.style[t2(697)] = `top`, c2.style.position = `relative`, o2 === t2(1009) && (c2.style[t2(739)] = `flex`, c2.style.flexDirection = t2(519), c2.style[t2(1124)] = `nowrap`), r2 && (c2[t2(1037)].width = r2), n2 && (c2.style.height = n2), a2 && (a2 === `scroll` && o2 === `vertical` ? (c2.style[`overflow-y`] = a2, c2.style[`overflow-x`] = t2(525)) : a2 === `scroll` && o2 === `horizontal` ? (c2.style[`overflow-y`] = `hidden`, c2.style[`overflow-x`] = a2) : c2.style.overflow = a2), s2 && (c2[t2(352)] = s2, c2.style.direction = s2), s2 && this.settings.fullsize && (document.body[t2(1037)].direction = s2), c2;
  }
  wrap(e3) {
    var t2 = i, n2 = document.createElement(`div`);
    return n2.style.visibility = t2(525), n2.style.overflow = `hidden`, n2.style.width = `0`, n2.style.height = `0`, n2.appendChild(e3), n2;
  }
  getElement(e3) {
    var t2 = i, n2;
    if (re(e3) ? n2 = e3 : typeof e3 == t2(784) && (n2 = document.getElementById(e3)), !n2) throw Error(`Not an Element`);
    return n2;
  }
  attachTo(e3) {
    var t2 = i, n2 = this.getElement(e3), r2;
    if (n2) return r2 = this.settings[t2(525)] ? this.wrapper : this.container, n2.appendChild(r2), this[t2(1443)] = n2, n2;
  }
  [i(512)]() {
    var e3 = i;
    return this[e3(872)];
  }
  onResize(e3) {
    var t2 = i;
    (!R(this[t2(685)].width) || !R(this.settings.height)) && (this.resizeFunc = (0, Mt.default)(e3, 50), window.addEventListener(`resize`, this.resizeFunc, false));
  }
  onOrientationChange(e3) {
    this.orientationChangeFunc = e3, window.addEventListener(`orientationchange`, this.orientationChangeFunc, false);
  }
  size(e3, t2) {
    var n2 = i, r2;
    let a2 = e3 || this[n2(685)].width, o2 = t2 || this.settings.height;
    e3 === null ? (r2 = this.element.getBoundingClientRect(), r2[n2(610)] && (e3 = Math.floor(r2[n2(610)]), this.container[n2(1037)][n2(610)] = e3 + `px`)) : R(e3) ? this.container.style.width = e3 + `px` : this.container.style.width = e3, t2 === null ? (r2 || (r2 = this[n2(1443)].getBoundingClientRect()), r2.height && (t2 = r2.height, this.container.style.height = t2 + `px`)) : R(t2) ? this.container.style[n2(1271)] = t2 + `px` : this.container.style.height = t2, R(e3) || (e3 = this.container.clientWidth), R(t2) || (t2 = this[n2(872)].clientHeight), this.containerStyles = window.getComputedStyle(this[n2(872)]), this.containerPadding = { left: parseFloat(this[n2(947)][`padding-left`]) || 0, right: parseFloat(this.containerStyles[`padding-right`]) || 0, top: parseFloat(this.containerStyles[`padding-top`]) || 0, bottom: parseFloat(this.containerStyles[`padding-bottom`]) || 0 };
    let s2 = fe(), c2 = window.getComputedStyle(document[n2(471)]), l2 = { left: parseFloat(c2[`padding-left`]) || 0, right: parseFloat(c2[`padding-right`]) || 0, top: parseFloat(c2[n2(981)]) || 0, bottom: parseFloat(c2[`padding-bottom`]) || 0 };
    return a2 || (e3 = s2.width - l2.left - l2.right), (this.settings.fullsize && !o2 || !o2) && (t2 = s2.height - l2.top - l2.bottom), { width: e3 - this.containerPadding[n2(1005)] - this.containerPadding.right, height: t2 - this[n2(637)].top - this.containerPadding.bottom };
  }
  [i(908)]() {
    var e3 = i;
    let t2;
    return this.container[e3(1037)].overflow !== `visible` && (t2 = this[e3(872)] && this.container.getBoundingClientRect()), !t2 || !t2[e3(610)] || !t2[e3(1271)] ? fe() : t2;
  }
  getSheet() {
    var e3 = i, t2 = document.createElement(`style`);
    return t2.appendChild(document.createTextNode(``)), document.head.appendChild(t2), t2[e3(1160)];
  }
  addStyleRules(e3, t2) {
    var n2 = i, r2 = `#` + this.id + ` `, a2 = ``;
    this[n2(1160)] || (this.sheet = this.getSheet()), t2[n2(1318)](function(e4) {
      for (var t3 in e4) e4.hasOwnProperty(t3) && (a2 += t3 + `:` + e4[t3] + `;`);
    }), this.sheet.insertRule(r2 + e3 + ` {` + a2 + `}`, 0);
  }
  axis(e3) {
    var t2 = i;
    e3 === `horizontal` ? (this.container.style[t2(739)] = t2(1085), this.container[t2(1037)].flexDirection = `row`, this.container[t2(1037)].flexWrap = `nowrap`) : this[t2(872)].style.display = t2(1185), this.settings.axis = e3;
  }
  direction(e3) {
    var t2 = i;
    this[t2(872)] && (this[t2(872)].dir = e3, this[t2(872)].style.direction = e3), this.settings.fullsize && (document.body.style.direction = e3), this.settings.dir = e3;
  }
  overflow(e3) {
    var t2 = i;
    this.container && (e3 === `scroll` && this.settings.axis === `vertical` ? (this[t2(872)].style[`overflow-y`] = e3, this.container.style[`overflow-x`] = `hidden`) : e3 === t2(1025) && this.settings[t2(1442)] === `horizontal` ? (this[t2(872)].style[`overflow-y`] = `hidden`, this.container.style[t2(367)] = e3) : this.container[t2(1037)][t2(855)] = e3), this.settings.overflow = e3;
  }
  destroy() {
    var e3 = i;
    this[e3(1443)] && (this.settings[e3(525)] ? this.wrapper : this.container, this.element.contains(this[e3(872)]) && this[e3(1443)].removeChild(this.container), window.removeEventListener(`resize`, this[e3(1483)]), window.removeEventListener(`orientationChange`, this.orientationChangeFunc));
  }
}, Pt = class {
  constructor(e3) {
    this.container = e3, this._views = [], this.length = 0, this.hidden = false;
  }
  all() {
    return this._views;
  }
  first() {
    return this._views[0];
  }
  last() {
    return this._views[this._views.length - 1];
  }
  indexOf(e3) {
    var t2 = i;
    return this[t2(1181)].indexOf(e3);
  }
  [i(1006)]() {
    return this._views.slice.apply(this._views, arguments);
  }
  get(e3) {
    return this._views[e3];
  }
  append(e3) {
    var t2 = i;
    return this._views.push(e3), this.container && this.container.appendChild(e3.element), this[t2(587)]++, e3;
  }
  prepend(e3) {
    var t2 = i;
    return this._views[t2(523)](e3), this.container && this.container[t2(1289)](e3.element, this[t2(872)].firstChild), this[t2(587)]++, e3;
  }
  insert(e3, t2) {
    var n2 = i;
    return this._views.splice(t2, 0, e3), this.container && (t2 < this.container.children.length ? this.container[n2(1289)](e3.element, this.container.children[t2]) : this.container.appendChild(e3.element)), this.length++, e3;
  }
  [i(772)](e3) {
    var t2 = i, n2 = this[t2(1181)].indexOf(e3);
    n2 > -1 && this[t2(1181)][t2(858)](n2, 1), this.destroy(e3), this.length--;
  }
  destroy(e3) {
    var t2 = i;
    e3.displayed && e3[t2(881)](), this.container && this[t2(872)].removeChild(e3.element), e3 = null;
  }
  forEach() {
    return this._views.forEach.apply(this._views, arguments);
  }
  clear() {
    var e3 = i, t2, n2 = this.length;
    if (this.length) {
      for (var r2 = 0; r2 < n2; r2++) t2 = this[e3(1181)][r2], this.destroy(t2);
      this._views = [], this.length = 0;
    }
  }
  find(e3) {
    for (var t2 = i, n2, r2 = this.length, a2 = 0; a2 < r2; a2++) if (n2 = this._views[a2], n2[t2(731)] && n2.section.index == e3.index) return n2;
  }
  displayed() {
    for (var e3 = [], t2, n2 = this.length, r2 = 0; r2 < n2; r2++) t2 = this._views[r2], t2.displayed && e3.push(t2);
    return e3;
  }
  show() {
    for (var e3 = i, t2, n2 = this[e3(587)], r2 = 0; r2 < n2; r2++) t2 = this._views[r2], t2.displayed && t2.show();
    this[e3(525)] = false;
  }
  hide() {
    for (var e3, t2 = this.length, n2 = 0; n2 < t2; n2++) e3 = this._views[n2], e3.displayed && e3.hide();
    this.hidden = true;
  }
}, Ft = class {
  constructor(e3) {
    var t2 = i;
    this.name = t2(821), this.optsSettings = e3.settings, this.View = e3.view, this.request = e3.request, this.renditionQueue = e3[t2(779)], this.q = new Ue(this), this.settings = z(this.settings || {}, { infinite: true, hidden: false, width: void 0, height: void 0, axis: void 0, writingMode: void 0, flow: `scrolled`, ignoreClass: ``, fullsize: void 0, allowScriptedContent: false, allowPopups: false }), z(this.settings, e3.settings || {}), this.viewSettings = { ignoreClass: this.settings[t2(464)], axis: this.settings.axis, flow: this.settings.flow, layout: this.layout, method: this.settings[t2(870)], width: 0, height: 0, forceEvenPages: true, allowScriptedContent: this.settings[t2(634)], allowPopups: this.settings.allowPopups }, this[t2(1317)] = false;
  }
  render(e3, t2) {
    var n2 = i;
    let r2 = e3.tagName;
    this.settings.fullsize === void 0 && r2 && (r2[n2(792)]() == `body` || r2.toLowerCase() == `html`) && (this.settings.fullsize = true), this.settings.fullsize && (this[n2(685)].overflow = `visible`, this.overflow = this.settings.overflow), this.settings.size = t2, this[n2(685)].rtlScrollType = gt(), this.stage = new Nt({ width: t2.width, height: t2.height, overflow: this.overflow, hidden: this.settings.hidden, axis: this.settings.axis, fullsize: this.settings[n2(598)], direction: this.settings.direction }), this.stage.attachTo(e3), this.container = this.stage[n2(512)](), this[n2(994)] = new Pt(this.container), this._bounds = this.bounds(), this._stageSize = this.stage.size(), this.viewSettings.width = this._stageSize[n2(610)], this.viewSettings.height = this[n2(1174)].height, this.stage.onResize(this.onResized[n2(594)](this)), this.stage[n2(1344)](this.onOrientationChange.bind(this)), this.addEventListeners(), this.layout && this.updateLayout(), this[n2(1317)] = true;
  }
  [i(1197)]() {
    var e3 = i, t2;
    window.addEventListener(`unload`, (function(e4) {
      this.destroy();
    })[e3(594)](this)), t2 = this[e3(685)].fullsize ? window : this.container, this._onScroll = this.onScroll.bind(this), t2[e3(1258)](`scroll`, this._onScroll);
  }
  removeEventListeners() {
    var e3 = i;
    (this.settings[e3(598)] ? window : this.container).removeEventListener(`scroll`, this._onScroll), this._onScroll = void 0;
  }
  destroy() {
    clearTimeout(this.orientationTimeout), clearTimeout(this.resizeTimeout), clearTimeout(this.afterScrolled), this.clear(), this.removeEventListeners(), this.stage.destroy(), this.rendered = false;
  }
  [i(1344)](e3) {
    var t2 = i;
    let { orientation: n2 } = window;
    this.optsSettings[t2(675)] && this.resize(), clearTimeout(this.orientationTimeout), this.orientationTimeout = setTimeout((function() {
      this.orientationTimeout = void 0, this.optsSettings.resizeOnOrientationChange && this.resize(), this.emit(Q.MANAGERS.ORIENTATION_CHANGE, n2);
    }).bind(this), 500);
  }
  [i(619)](e3) {
    this.resize();
  }
  [i(1359)](e3, t2, n2) {
    var r2 = i;
    let a2 = this[r2(1296)].size(e3, t2);
    if (this.winBounds = fe(), this.orientationTimeout && this.winBounds.width === this[r2(1049)].height) {
      this._stageSize = void 0;
      return;
    }
    this._stageSize && this._stageSize[r2(610)] === a2.width && this[r2(1174)].height === a2.height || (this._stageSize = a2, this[r2(722)] = this.bounds(), this[r2(403)](), this.viewSettings.width = this[r2(1174)][r2(610)], this.viewSettings.height = this._stageSize.height, this.updateLayout(), this.emit(Q.MANAGERS[r2(1122)], { width: this._stageSize[r2(610)], height: this._stageSize.height }, n2));
  }
  [i(677)](e3, t2) {
    var n2 = i;
    return new this[n2(1440)](e3, z(this.viewSettings, { forceRight: t2 }));
  }
  handleNextPrePaginated(e3, t2, n2) {
    var r2 = i;
    let a2;
    if (this.layout.name === r2(813) && this.layout.divisor > 1) {
      if (e3 || t2.index === 0) return;
      if (a2 = t2[r2(737)](), a2 && !a2.properties.includes(`page-spread-left`)) return n2.call(this, a2);
    }
  }
  display(e3, t2) {
    var n2 = i, r2 = new X(), a2 = r2.promise;
    (t2 === e3[n2(899)] || R(t2)) && (t2 = void 0);
    var o2 = this.views[n2(636)](e3);
    if (o2 && e3 && this[n2(1488)].name !== `pre-paginated`) {
      let e4 = o2.offset();
      if (this.settings.direction === `ltr`) this.scrollTo(e4[n2(1005)], e4.top, true);
      else {
        let t3 = o2.width();
        this.scrollTo(e4.left + t3, e4.top, true);
      }
      if (t2) {
        let e5 = o2.locationOf(t2), n3 = o2.width();
        this.moveTo(e5, n3);
      }
      return r2.resolve(), a2;
    }
    this.clear();
    let s2 = false;
    return this.layout.name === `pre-paginated` && this.layout.divisor === 2 && e3[n2(359)].includes(`page-spread-right`) && (s2 = true), this.add(e3, s2).then((function(e4) {
      var r3 = n2;
      if (t2) {
        let n3 = e4.locationOf(t2), i2 = e4[r3(610)]();
        this.moveTo(n3, i2);
      }
    }).bind(this), (e4) => {
      r2.reject(e4);
    }).then((function() {
      return this.handleNextPrePaginated(s2, e3, this.add);
    }).bind(this)).then((function() {
      var e4 = n2;
      this.views[e4(928)](), r2.resolve();
    }).bind(this)), a2;
  }
  afterDisplayed(e3) {
    var t2 = i;
    this.emit(Q[t2(696)].ADDED, e3);
  }
  [i(1472)](e3) {
    this.emit(Q.MANAGERS.RESIZE, e3.section);
  }
  moveTo(e3, t2) {
    var n2 = i, r2 = 0, a2 = 0;
    this.isPaginated ? (r2 = Math[n2(974)](e3.left / this.layout.delta) * this.layout.delta, r2 + this.layout[n2(1284)] > this.container.scrollWidth && (r2 = this.container.scrollWidth - this[n2(1488)].delta), a2 = Math.floor(e3.top / this.layout.delta) * this.layout.delta, a2 + this.layout.delta > this.container.scrollHeight && (a2 = this.container.scrollHeight - this[n2(1488)][n2(1284)])) : a2 = e3.top, this[n2(685)][n2(408)] === `rtl` && (r2 += this.layout[n2(1284)], r2 -= t2), this.scrollTo(r2, a2, true);
  }
  add(e3, t2) {
    var n2 = i, r2 = this.createView(e3, t2);
    return this.views.append(r2), r2.onDisplayed = this.afterDisplayed.bind(this), r2.onResize = this.afterResized.bind(this), r2.on(Q.VIEWS[n2(1031)], (e4) => {
      this.updateAxis(e4);
    }), r2.on(Q.VIEWS.WRITING_MODE, (e4) => {
      this.updateWritingMode(e4);
    }), r2.display(this[n2(410)]);
  }
  append(e3, t2) {
    var n2 = this.createView(e3, t2);
    return this.views.append(n2), n2.onDisplayed = this.afterDisplayed.bind(this), n2.onResize = this.afterResized.bind(this), n2.on(Q.VIEWS.AXIS, (e4) => {
      this.updateAxis(e4);
    }), n2.on(Q.VIEWS.WRITING_MODE, (e4) => {
      this.updateWritingMode(e4);
    }), n2.display(this.request);
  }
  prepend(e3, t2) {
    var n2 = i, r2 = this.createView(e3, t2);
    return r2.on(Q.VIEWS.RESIZED, (e4) => {
      this.counter(e4);
    }), this[n2(994)].prepend(r2), r2.onDisplayed = this.afterDisplayed.bind(this), r2.onResize = this[n2(1472)].bind(this), r2.on(Q.VIEWS.AXIS, (e4) => {
      this.updateAxis(e4);
    }), r2.on(Q.VIEWS.WRITING_MODE, (e4) => {
      var t3 = n2;
      this[t3(876)](e4);
    }), r2[n2(739)](this[n2(410)]);
  }
  counter(e3) {
    var t2 = i;
    this.settings.axis === `vertical` ? this[t2(1163)](0, e3.heightDelta, true) : this[t2(1163)](e3.widthDelta, 0, true);
  }
  next() {
    var e3 = i, t2, n2;
    let r2 = this.settings.direction;
    if (this.views.length && (this[e3(959)] && this[e3(685)].axis === `horizontal` && (!r2 || r2 === `ltr`) ? (this[e3(633)] = this.container.scrollLeft, n2 = this[e3(872)].scrollLeft + this.container[e3(820)] + this[e3(1488)].delta, n2 <= this.container.scrollWidth ? this.scrollBy(this[e3(1488)][e3(1284)], 0, true) : t2 = this[e3(994)].last()[e3(1194)].next()) : this.isPaginated && this.settings.axis === `horizontal` && r2 === `rtl` ? (this[e3(633)] = this.container.scrollLeft, this.settings.rtlScrollType === `default` ? (n2 = this.container.scrollLeft, n2 > 0 ? this.scrollBy(this.layout.delta, 0, true) : t2 = this.views.last().section[e3(737)]()) : (n2 = this.container.scrollLeft + this.layout.delta * -1, n2 > this.container.scrollWidth * -1 ? this.scrollBy(this.layout[e3(1284)], 0, true) : t2 = this.views.last().section.next())) : this.isPaginated && this.settings.axis === `vertical` ? (this.scrollTop = this.container.scrollTop, this[e3(872)].scrollTop + this[e3(872)].offsetHeight < this.container.scrollHeight ? this[e3(1163)](0, this.layout[e3(1271)], true) : t2 = this[e3(994)][e3(1267)]().section[e3(737)]()) : t2 = this[e3(994)].last()[e3(1194)].next(), t2)) {
      this.clear(), this.updateLayout();
      let n3 = false;
      return this.layout.name === e3(813) && this.layout.divisor === 2 && t2.properties.includes(`page-spread-right`) && (n3 = true), this.append(t2, n3)[e3(631)]((function() {
        return this.handleNextPrePaginated(n3, t2, this.append);
      }).bind(this), (e4) => e4)[e3(631)]((function() {
        var t3 = e3;
        !this.isPaginated && this.settings.axis === `horizontal` && this.settings[t3(408)] === `rtl` && this.settings[t3(1401)] === `default` && this[t3(1282)](this.container.scrollWidth, 0, true), this.views[t3(928)]();
      })[e3(594)](this));
    }
  }
  prev() {
    var e3 = i, t2, n2;
    let r2 = this.settings[e3(408)];
    if (this[e3(994)].length && (this.isPaginated && this.settings.axis === `horizontal` && (!r2 || r2 === e3(1410)) ? (this.scrollLeft = this.container[e3(633)], n2 = this.container[e3(633)], n2 > 0 ? this.scrollBy(-this.layout.delta, 0, true) : t2 = this[e3(994)].first().section.prev()) : this.isPaginated && this[e3(685)].axis === `horizontal` && r2 === e3(433) ? (this.scrollLeft = this.container.scrollLeft, this.settings.rtlScrollType === `default` ? (n2 = this.container[e3(633)] + this.container.offsetWidth, n2 < this.container.scrollWidth ? this.scrollBy(-this.layout.delta, 0, true) : t2 = this.views.first().section.prev()) : (n2 = this.container.scrollLeft, n2 < 0 ? this.scrollBy(-this.layout.delta, 0, true) : t2 = this.views.first().section.prev())) : this.isPaginated && this.settings.axis === `vertical` ? (this.scrollTop = this[e3(872)].scrollTop, this.container.scrollTop > 0 ? this.scrollBy(0, -this.layout.height, true) : t2 = this.views[e3(818)]().section[e3(1121)]()) : t2 = this.views.first()[e3(1194)][e3(1121)](), t2)) {
      this.clear(), this.updateLayout();
      let n3 = false;
      return this.layout.name === `pre-paginated` && this.layout.divisor === 2 && typeof t2.prev() != `object` && (n3 = true), this.prepend(t2, n3)[e3(631)]((function() {
        var n4 = e3, r3;
        if (this.layout.name === `pre-paginated` && this.layout[n4(987)] > 1 && (r3 = t2.prev(), r3)) return this[n4(997)](r3);
      })[e3(594)](this), (e4) => e4).then((function() {
        var t3 = e3;
        this.isPaginated && this[t3(685)].axis === `horizontal` && (this.settings.direction === `rtl` ? this[t3(685)].rtlScrollType === `default` ? this[t3(1282)](0, 0, true) : this.scrollTo(this.container.scrollWidth * -1 + this.layout.delta, 0, true) : this[t3(1282)](this.container.scrollWidth - this.layout.delta, 0, true)), this.views.show();
      }).bind(this));
    }
  }
  current() {
    var e3 = i, t2 = this.visible();
    return t2[e3(587)] ? t2[t2.length - 1] : null;
  }
  clear() {
    var e3 = i;
    this.views && (this.views[e3(788)](), this.scrollTo(0, 0, true), this.views.clear());
  }
  currentLocation() {
    var e3 = i;
    return this.updateLayout(), this.isPaginated && this.settings[e3(1442)] === `horizontal` ? this[e3(1432)] = this.paginatedLocation() : this.location = this.scrolledLocation(), this[e3(1432)];
  }
  scrolledLocation() {
    var e3 = i;
    let t2 = this.visible(), n2 = this.container.getBoundingClientRect(), r2 = n2.height < window.innerHeight ? n2[e3(1271)] : window.innerHeight, a2 = n2.width < window[e3(488)] ? n2.width : window.innerWidth, o2 = this.settings.axis === `vertical`;
    this.settings.direction;
    let s2 = 0;
    return this.settings.fullsize && (s2 = o2 ? window[e3(913)] : window.scrollX), t2[e3(1022)]((t3) => {
      var i2 = e3;
      let { index: c2, href: l2 } = t3.section, u2 = t3.position(), d2 = t3.width(), f2 = t3.height(), p2, m2, h2, g2;
      o2 ? (p2 = s2 + n2.top - u2.top + 0, m2 = p2 + r2 - 0, g2 = this[i2(1488)].count(f2, r2)[i2(1117)], h2 = r2) : (p2 = s2 + n2.left - u2.left + 0, m2 = p2 + a2 - 0, g2 = this.layout.count(d2, a2)[i2(1117)], h2 = a2);
      let _2 = Math.ceil(p2 / h2), v2 = [], y2 = Math.ceil(m2 / h2);
      if (this[i2(685)].direction === `rtl` && !o2) {
        let e4 = _2;
        _2 = g2 - y2, y2 = g2 - e4;
      }
      v2 = [];
      for (var b2 = _2; b2 <= y2; b2++) {
        let e4 = b2 + 1;
        v2[i2(1386)](e4);
      }
      let x2 = this[i2(957)].page(t3.contents, t3.section.cfiBase, p2, m2);
      return { index: c2, href: l2, pages: v2, totalPages: g2, mapping: x2 };
    });
  }
  paginatedLocation() {
    var e3 = i;
    let t2 = this.visible(), n2 = this.container.getBoundingClientRect(), r2 = 0, a2 = 0;
    return this[e3(685)].fullsize && (r2 = window.scrollX), t2.map((t3) => {
      var i2 = e3;
      let { index: o2, href: s2 } = t3.section, c2, l2 = t3[i2(1207)](), u2 = t3.width(), d2, f2, p2;
      this.settings.direction === `rtl` ? (c2 = n2.right - r2, p2 = Math.min(Math[i2(764)](c2 - l2[i2(1005)]), this.layout.width) - a2, f2 = l2.width - (l2[i2(982)] - c2) - a2, d2 = f2 - p2) : (c2 = n2.left + r2, p2 = Math.min(l2.right - c2, this[i2(1488)].width) - a2, d2 = c2 - l2.left + a2, f2 = d2 + p2), a2 += p2;
      let m2 = this.mapping.page(t3.contents, t3.section.cfiBase, d2, f2), h2 = this.layout.count(u2)[i2(1117)], g2 = Math.floor(d2 / this[i2(1488)].pageWidth), _2 = [], v2 = Math.floor(f2 / this.layout.pageWidth);
      if (g2 < 0 && (g2 = 0, v2 += 1), this.settings.direction === `rtl`) {
        let e4 = g2;
        g2 = h2 - v2, v2 = h2 - e4;
      }
      for (var y2 = g2 + 1; y2 <= v2; y2++) {
        let e4 = y2;
        _2.push(e4);
      }
      return { index: o2, href: s2, pages: _2, totalPages: h2, mapping: m2 };
    });
  }
  isVisible(e3, t2, n2, r2) {
    var a2 = i, o2 = e3.position(), s2 = r2 || this[a2(908)]();
    return this.settings.axis === `horizontal` && o2.right > s2.left - t2 && o2.left < s2.right + n2 ? true : this.settings.axis === `vertical` && o2.bottom > s2[a2(1107)] - t2 && o2.top < s2.bottom + n2;
  }
  visible() {
    for (var e3 = this.bounds(), t2 = this.views.displayed(), n2 = t2.length, r2 = [], i2, a2, o2 = 0; o2 < n2; o2++) a2 = t2[o2], i2 = this.isVisible(a2, 0, 0, e3), i2 === true && r2.push(a2);
    return r2;
  }
  scrollBy(e3, t2, n2) {
    var r2 = i;
    let a2 = this.settings.direction === `rtl` ? -1 : 1;
    n2 && (this.ignore = true), this.settings.fullsize ? window.scrollBy(e3 * a2, t2 * a2) : (e3 && (this[r2(872)].scrollLeft += e3 * a2), t2 && (this.container.scrollTop += t2)), this.scrolled = true;
  }
  scrollTo(e3, t2, n2) {
    var r2 = i;
    n2 && (this.ignore = true), this.settings.fullsize ? window[r2(1282)](e3, t2) : (this.container.scrollLeft = e3, this.container.scrollTop = t2), this[r2(1480)] = true;
  }
  onScroll() {
    var e3 = i;
    let t2, n2;
    this.settings[e3(598)] ? (t2 = window.scrollY, n2 = window.scrollX) : (t2 = this.container.scrollTop, n2 = this[e3(872)].scrollLeft), this.scrollTop = t2, this.scrollLeft = n2, this.ignore ? this.ignore = false : (this.emit(Q[e3(696)].SCROLL, { top: t2, left: n2 }), clearTimeout(this.afterScrolled), this.afterScrolled = setTimeout((function() {
      this.emit(Q.MANAGERS.SCROLLED, { top: this.scrollTop, left: this.scrollLeft });
    }).bind(this), 20));
  }
  bounds() {
    var e3 = i;
    return this.stage[e3(908)]();
  }
  applyLayout(e3) {
    var t2 = i;
    this.layout = e3, this.updateLayout(), this.views && this.views[t2(587)] > 0 && this.layout[t2(701)] === t2(813) && this.display(this.views.first().section);
  }
  updateLayout() {
    var e3 = i;
    this.stage && (this._stageSize = this.stage.size(), this.isPaginated ? (this.layout.calculate(this[e3(1174)].width, this[e3(1174)].height, this.settings[e3(605)]), this.settings.offset = this.layout[e3(1284)] / this.layout.divisor) : this.layout.calculate(this._stageSize.width, this._stageSize.height), this.viewSettings.width = this.layout.width, this[e3(1240)].height = this.layout.height, this[e3(612)](this.layout));
  }
  setLayout(e3) {
    var t2 = i;
    this[t2(1240)].layout = e3, this.mapping = new it(e3[t2(1330)], this[t2(685)].direction, this.settings.axis), this.views && this.views.forEach(function(t3) {
      t3 && t3.setLayout(e3);
    });
  }
  [i(876)](e3) {
    this.writingMode = e3;
  }
  updateAxis(e3, t2) {
    var n2 = i;
    !t2 && e3 === this.settings.axis || (this.settings.axis = e3, this[n2(1296)] && this.stage.axis(e3), this[n2(1240)].axis = e3, this.mapping && (this[n2(957)] = new it(this.layout.props, this.settings.direction, this.settings.axis)), this.layout && (e3 === n2(891) ? this.layout.spread(`none`) : this.layout.spread(this.layout.settings.spread)));
  }
  [i(1281)](e3, t2 = `auto`) {
    var n2 = i;
    let r2 = e3 === n2(1361) || e3 === `auto`;
    this.isPaginated = r2, e3 === `scrolled-doc` || e3 === `scrolled-continuous` || e3 === `scrolled` ? this.updateAxis(`vertical`) : this.updateAxis(n2(1009)), this.viewSettings.flow = e3, this.settings.overflow ? this[n2(855)] = this.settings.overflow : this.overflow = r2 ? n2(525) : t2, this.stage && this.stage.overflow(this.overflow), this.updateLayout();
  }
  getContents() {
    var e3 = i, t2 = [];
    return this.views && this.views[e3(1318)](function(e4) {
      let n2 = e4 && e4.contents;
      n2 && t2.push(n2);
    }), t2;
  }
  [i(408)](e3 = `ltr`) {
    var t2 = i;
    this.settings.direction = e3, this.stage && this.stage.direction(e3), this.viewSettings[t2(408)] = e3, this[t2(1250)]();
  }
  isRendered() {
    return this.rendered;
  }
};
(0, M[i(821)])(Ft.prototype);
var It = Math.PI / 2, Lt = { easeOutSine: function(e3) {
  return Math[i(451)](e3 * It);
}, easeInOutSine: function(e3) {
  return -0.5 * (Math.cos(Math.PI * e3) - 1);
}, easeInOutQuint: function(e3) {
  return (e3 /= 0.5) < 1 ? 0.5 * e3 ** 5 : 0.5 * ((e3 - 2) ** 5 + 2);
}, easeInCubic: function(e3) {
  return e3 ** 3;
} }, Rt = class {
  constructor(e3, t2) {
    this.settings = z({ duration: 80, minVelocity: 0.2, minDistance: 10, easing: Lt.easeInCubic }, t2 || {}), this.supportsTouch = this.supportsTouch(), this.supportsTouch && this.setup(e3);
  }
  setup(e3) {
    var t2 = i;
    this.manager = e3, this.layout = this.manager.layout, this.fullsize = this.manager.settings.fullsize, this.fullsize ? (this.element = this.manager.stage.element, this.scroller = window, this.disableScroll()) : (this.element = this.manager.stage.container, this.scroller = this.element, this.element[t2(1037)].WebkitOverflowScrolling = `touch`), this.manager.settings.offset = this.layout.width, this.manager.settings.afterScrolledTimeout = this.settings.duration * 2, this.isVertical = this.manager.settings.axis === `vertical`, !(!this.manager.isPaginated || this.isVertical) && (this.touchCanceler = false, this.resizeCanceler = false, this.snapping = false, this[t2(633)], this.scrollTop, this.startTouchX = void 0, this[t2(588)] = void 0, this.startTime = void 0, this.endTouchX = void 0, this.endTouchY = void 0, this.endTime = void 0, this.addListeners());
  }
  supportsTouch() {
    var e3 = i;
    return !!(`ontouchstart` in window || window[e3(864)] && document instanceof DocumentTouch);
  }
  disableScroll() {
    var e3 = i;
    this[e3(1443)].style.overflow = `hidden`;
  }
  [i(650)]() {
    this.element.style.overflow = ``;
  }
  addListeners() {
    var e3 = i;
    this._onResize = this.onResize[e3(594)](this), window[e3(1258)](`resize`, this[e3(580)]), this[e3(432)] = this.onScroll.bind(this), this.scroller.addEventListener(`scroll`, this[e3(432)]), this._onTouchStart = this[e3(559)][e3(594)](this), this.scroller.addEventListener(`touchstart`, this._onTouchStart, { passive: true }), this.on(e3(1041), this._onTouchStart), this[e3(1116)] = this.onTouchMove.bind(this), this.scroller.addEventListener(`touchmove`, this._onTouchMove, { passive: true }), this.on(`touchmove`, this[e3(1116)]), this._onTouchEnd = this[e3(458)][e3(594)](this), this.scroller.addEventListener(`touchend`, this[e3(393)], { passive: true }), this.on(`touchend`, this._onTouchEnd), this[e3(980)] = this.afterDisplayed.bind(this), this.manager.on(Q.MANAGERS.ADDED, this._afterDisplayed);
  }
  removeListeners() {
    var e3 = i;
    window.removeEventListener(`resize`, this._onResize), this[e3(580)] = void 0, this.scroller.removeEventListener(e3(1025), this._onScroll), this._onScroll = void 0, this.scroller.removeEventListener(`touchstart`, this._onTouchStart, { passive: true }), this.off(`touchstart`, this._onTouchStart), this._onTouchStart = void 0, this.scroller.removeEventListener(e3(815), this._onTouchMove, { passive: true }), this[e3(782)](`touchmove`, this._onTouchMove), this._onTouchMove = void 0, this.scroller[e3(556)](`touchend`, this._onTouchEnd, { passive: true }), this.off(`touchend`, this._onTouchEnd), this._onTouchEnd = void 0, this[e3(879)].off(Q[e3(696)].ADDED, this._afterDisplayed), this._afterDisplayed = void 0;
  }
  [i(1093)](e3) {
    var t2 = i;
    let n2 = e3[t2(762)];
    [`touchstart`, `touchmove`, t2(514)].forEach((e4) => {
      var r2 = t2;
      n2.on(e4, (e5) => this[r2(748)](e5, n2));
    });
  }
  triggerViewEvent(e3, t2) {
    this.emit(e3.type, e3, t2);
  }
  onScroll(e3) {
    var t2 = i;
    this.scrollLeft = this.fullsize ? window.scrollX : this.scroller.scrollLeft, this.scrollTop = this.fullsize ? window.scrollY : this.scroller[t2(962)];
  }
  onResize(e3) {
    this.resizeCanceler = true;
  }
  onTouchStart(e3) {
    let { screenX: t2, screenY: n2 } = e3.touches[0];
    this.fullsize && this.enableScroll(), this.touchCanceler = true, this.startTouchX || (this.startTouchX = t2, this.startTouchY = n2, this.startTime = this.now()), this.endTouchX = t2, this.endTouchY = n2, this.endTime = this.now();
  }
  [i(1420)](e3) {
    var t2 = i;
    let { screenX: n2, screenY: r2 } = e3[t2(655)][0], a2 = Math.abs(r2 - this[t2(1209)]);
    this.touchCanceler = true, !this[t2(598)] && a2 < 10 && (this.element.scrollLeft -= n2 - this.endTouchX), this.endTouchX = n2, this[t2(1209)] = r2, this.endTime = this.now();
  }
  onTouchEnd(e3) {
    var t2 = i;
    this[t2(598)] && this.disableScroll(), this.touchCanceler = false;
    let n2 = this.wasSwiped();
    n2 === 0 ? this.snap() : this[t2(746)](n2), this.startTouchX = void 0, this.startTouchY = void 0, this.startTime = void 0, this.endTouchX = void 0, this[t2(1209)] = void 0, this.endTime = void 0;
  }
  wasSwiped() {
    var e3 = i;
    let t2 = this.layout.pageWidth * this.layout.divisor, n2 = this.endTouchX - this[e3(517)], r2 = Math.abs(n2), a2 = n2 / (this.endTime - this.startTime), o2 = this.settings.minVelocity;
    if (r2 <= this[e3(685)].minDistance || r2 >= t2) return 0;
    if (a2 > o2) return -1;
    if (a2 < -o2) return 1;
  }
  needsSnap() {
    var e3 = i;
    return this[e3(633)] % (this.layout[e3(1306)] * this.layout.divisor) !== 0;
  }
  [i(746)](e3 = 0) {
    var t2 = i;
    let n2 = this[t2(633)], r2 = this.layout.pageWidth * this.layout.divisor, a2 = Math.round(n2 / r2) * r2;
    return e3 && (a2 += e3 * r2), this.smoothScrollTo(a2);
  }
  [i(551)](e3) {
    var t2 = i;
    let n2 = new X(), r2 = this[t2(633)], a2 = this.now(), o2 = this.settings.duration, s2 = this.settings.easing;
    this.snapping = true;
    function c2() {
      var i2 = t2;
      let l2 = this.now(), u2 = Math.min(1, (l2 - a2) / o2);
      if (s2(u2), this.touchCanceler || this.resizeCanceler) {
        this.resizeCanceler = false, this.snapping = false, n2[i2(550)]();
        return;
      }
      u2 < 1 ? (window[i2(923)](c2.bind(this)), this[i2(1282)](r2 + (e3 - r2) * u2, 0)) : (this.scrollTo(e3, 0), this.snapping = false, n2.resolve());
    }
    return c2.call(this), n2.promise;
  }
  scrollTo(e3 = 0, t2 = 0) {
    var n2 = i;
    this[n2(598)] ? window[n2(1025)](e3, t2) : (this.scroller.scrollLeft = e3, this.scroller.scrollTop = t2);
  }
  now() {
    return `now` in window.performance ? performance.now() : (/* @__PURE__ */ new Date()).getTime();
  }
  [i(881)]() {
    this.scroller && (this.scroller = (this.fullsize && this.enableScroll(), this.removeListeners(), void 0));
  }
};
(0, M.default)(Rt.prototype);
var zt = t(jt()), Bt = class extends Ft {
  constructor(e3) {
    var t2 = i;
    super(e3), this[t2(701)] = `continuous`, this[t2(685)] = z(this.settings || {}, { infinite: true, overflow: void 0, axis: void 0, writingMode: void 0, flow: `scrolled`, offset: 500, offsetDelta: 250, width: void 0, height: void 0, snap: false, afterScrolledTimeout: 10, allowScriptedContent: false, allowPopups: false }), z(this.settings, e3[t2(685)] || {}), e3.settings[t2(605)] != `undefined` && e3.settings[t2(605)] === 0 && (this.settings.gap = e3.settings.gap), this.viewSettings = { ignoreClass: this.settings.ignoreClass, axis: this.settings.axis, flow: this.settings.flow, layout: this.layout, width: 0, height: 0, forceEvenPages: false, allowScriptedContent: this.settings[t2(634)], allowPopups: this.settings.allowPopups }, this.scrollTop = 0, this.scrollLeft = 0;
  }
  display(e3, t2) {
    var n2 = i;
    return Ft.prototype[n2(739)][n2(906)](this, e3, t2).then((function() {
      return this.fill();
    }).bind(this));
  }
  [i(1190)](e3) {
    var t2 = i, n2 = e3 || new X();
    return this.q[t2(925)](() => this.check()).then((e4) => {
      e4 ? this.fill(n2) : n2.resolve();
    }), n2.promise;
  }
  moveTo(e3) {
    var t2 = i, n2 = 0, r2 = 0;
    this[t2(959)] ? (n2 = Math[t2(974)](e3.left / this.layout.delta) * this.layout.delta, n2 + this[t2(685)].offsetDelta) : (r2 = e3.top, e3.top + this[t2(685)].offsetDelta), (n2 > 0 || r2 > 0) && this.scrollBy(n2, r2, true);
  }
  [i(1472)](e3) {
    var t2 = i;
    this.emit(Q.MANAGERS[t2(937)], e3.section);
  }
  removeShownListeners(e3) {
    var t2 = i;
    e3[t2(454)] = function() {
    };
  }
  add(e3) {
    var t2 = i, n2 = this.createView(e3);
    return this[t2(994)].append(n2), n2.on(Q.VIEWS.RESIZED, (e4) => {
      n2.expanded = true;
    }), n2.on(Q.VIEWS[t2(1031)], (e4) => {
      this.updateAxis(e4);
    }), n2.on(Q.VIEWS.WRITING_MODE, (e4) => {
      var n3 = t2;
      this[n3(876)](e4);
    }), n2[t2(454)] = this.afterDisplayed.bind(this), n2.onResize = this.afterResized.bind(this), n2.display(this.request);
  }
  [i(1425)](e3) {
    var t2 = i, n2 = this.createView(e3);
    return n2.on(Q[t2(877)][t2(1122)], (e4) => {
      n2.expanded = true;
    }), n2.on(Q[t2(877)].AXIS, (e4) => {
      this.updateAxis(e4);
    }), n2.on(Q.VIEWS.WRITING_MODE, (e4) => {
      this.updateWritingMode(e4);
    }), this.views.append(n2), n2[t2(454)] = this.afterDisplayed.bind(this), n2;
  }
  prepend(e3) {
    var t2 = i, n2 = this[t2(677)](e3);
    return n2.on(Q.VIEWS.RESIZED, (e4) => {
      this.counter(e4), n2.expanded = true;
    }), n2.on(Q[t2(877)].AXIS, (e4) => {
      this.updateAxis(e4);
    }), n2.on(Q.VIEWS[t2(1176)], (e4) => {
      this.updateWritingMode(e4);
    }), this[t2(994)][t2(997)](n2), n2.onDisplayed = this.afterDisplayed.bind(this), n2;
  }
  counter(e3) {
    this.settings.axis === `vertical` ? this.scrollBy(0, e3.heightDelta, true) : this.scrollBy(e3.widthDelta, 0, true);
  }
  [i(1408)](e3) {
    for (var t2 = i, n2 = this.bounds(), r2 = this[t2(994)].all(), a2 = r2.length, o2 = [], s2 = e3 === void 0 ? this.settings.offset || 0 : e3, c2, l2, u2 = new X(), d2 = [], f2 = 0; f2 < a2; f2++) if (l2 = r2[f2], c2 = this.isVisible(l2, s2, s2, n2), c2 === true) {
      if (l2.displayed) l2.show();
      else {
        let e4 = l2.display(this.request).then(function(e5) {
          e5.show();
        }, (e5) => {
          l2.hide();
        });
        d2.push(e4);
      }
      o2.push(l2);
    } else this.q.enqueue(l2.destroy.bind(l2)), clearTimeout(this.trimTimeout), this[t2(1248)] = setTimeout((function() {
      this.q.enqueue(this.trim.bind(this));
    }).bind(this), 250);
    return d2.length ? Promise[t2(623)](d2).catch((e4) => {
      u2.reject(e4);
    }) : (u2[t2(550)](), u2[t2(371)]);
  }
  check(e3, t2) {
    var n2 = i, r2 = new X(), a2 = [], o2 = this.settings[n2(1442)] === `horizontal`, s2 = this.settings.offset || 0;
    e3 && o2 && (s2 = e3), t2 && !o2 && (s2 = t2);
    var c2 = this._bounds;
    let l2 = o2 ? this.scrollLeft : this.scrollTop, u2 = o2 ? Math.floor(c2[n2(610)]) : c2.height, d2 = o2 ? this.container.scrollWidth : this.container[n2(716)], f2 = this.writingMode && this[n2(1397)].indexOf(`vertical`) === 0 ? `vertical` : n2(1009), p2 = this.settings.rtlScrollType, m2 = this.settings.direction === `rtl`;
    this.settings.fullsize ? (o2 && m2 && p2 === `negative` || !o2 && m2 && p2 === n2(821)) && (l2 *= -1) : (m2 && p2 === `default` && f2 === `horizontal` && (l2 = d2 - u2 - l2), m2 && p2 === `negative` && f2 === `horizontal` && (l2 *= -1));
    let h2 = () => {
      var e4 = n2;
      let t3 = this.views.first(), r3 = t3 && t3.section[e4(1121)]();
      r3 && a2[e4(1386)](this[e4(997)](r3));
    }, g2 = () => {
      var e4 = n2;
      let t3 = this[e4(994)][e4(1267)](), r3 = t3 && t3.section[e4(737)]();
      r3 && a2.push(this.append(r3));
    }, _2 = l2 + u2 + s2, v2 = l2 - s2;
    _2 >= d2 && g2(), v2 < 0 && h2();
    let y2 = a2.map((e4) => e4.display(this.request));
    return a2[n2(587)] ? Promise[n2(623)](y2)[n2(631)](() => this.check()).then(() => this[n2(1408)](s2), (e4) => e4) : (this.q.enqueue((function() {
      this.update();
    }).bind(this)), r2.resolve(false), r2.promise);
  }
  trim() {
    for (var e3 = i, t2 = new X(), n2 = this.views.displayed(), r2 = n2[0], a2 = n2[n2.length - 1], o2 = this.views.indexOf(r2), s2 = this[e3(994)][e3(755)](a2), c2 = this.views.slice(0, o2), l2 = this.views.slice(s2 + 1), u2 = 0; u2 < c2[e3(587)] - 1; u2++) this.erase(c2[u2], c2);
    for (var d2 = 1; d2 < l2.length; d2++) this.erase(l2[d2]);
    return t2.resolve(), t2.promise;
  }
  erase(e3, t2) {
    var n2 = i, r2, a2;
    this.settings.fullsize ? (r2 = window.scrollY, a2 = window[n2(1279)]) : (r2 = this.container.scrollTop, a2 = this[n2(872)][n2(633)]);
    var o2 = e3.bounds();
    this.views.remove(e3), t2 && (this[n2(685)].axis === n2(891) ? this.scrollTo(0, r2 - o2.height, true) : this[n2(685)].direction === `rtl` ? this.settings.fullsize ? this.scrollTo(a2 + Math.floor(o2.width), 0, true) : this.scrollTo(a2, 0, true) : this.scrollTo(a2 - Math.floor(o2.width), 0, true));
  }
  addEventListeners(e3) {
    var t2 = i;
    window.addEventListener(`unload`, (function(e4) {
      this.ignore = true, this.destroy();
    }).bind(this)), this[t2(723)](), this.isPaginated && this.settings.snap && (this.snapper = new Rt(this, this.settings[t2(746)] && typeof this[t2(685)].snap == t2(1086) && this.settings.snap));
  }
  addScrollListeners() {
    var e3 = i, t2;
    this.tick = P;
    let n2 = this.settings.direction === `rtl` && this.settings.rtlScrollType === `default` ? -1 : 1;
    this[e3(707)] = 0, this[e3(671)] = 0, this.settings[e3(598)] ? (t2 = window, this.scrollTop = window[e3(913)] * n2, this.scrollLeft = window.scrollX * n2) : (t2 = this.container, this.scrollTop = this.container.scrollTop, this.scrollLeft = this.container[e3(633)]), this._onScroll = this.onScroll.bind(this), t2.addEventListener(e3(1025), this._onScroll), this._scrolled = (0, zt.default)(this[e3(1480)].bind(this), 30), this.didScroll = false;
  }
  removeEventListeners() {
    var e3 = i;
    (this.settings[e3(598)] ? window : this.container).removeEventListener(`scroll`, this._onScroll), this[e3(432)] = void 0;
  }
  onScroll() {
    var e3 = i;
    let t2, n2, r2 = this.settings.direction === `rtl` && this[e3(685)].rtlScrollType === `default` ? -1 : 1;
    this.settings.fullsize ? (t2 = window.scrollY * r2, n2 = window[e3(1279)] * r2) : (t2 = this[e3(872)].scrollTop, n2 = this.container.scrollLeft), this.scrollTop = t2, this.scrollLeft = n2, this.ignore ? this.ignore = false : this._scrolled(), this.scrollDeltaVert += Math.abs(t2 - this.prevScrollTop), this.scrollDeltaHorz += Math[e3(764)](n2 - this.prevScrollLeft), this.prevScrollTop = t2, this.prevScrollLeft = n2, clearTimeout(this.scrollTimeout), this[e3(721)] = setTimeout((function() {
      this.scrollDeltaVert = 0, this.scrollDeltaHorz = 0;
    })[e3(594)](this), 150), clearTimeout(this.afterScrolled), this[e3(835)] = false;
  }
  scrolled() {
    var e3 = i;
    this.q[e3(925)]((function() {
      return this.check();
    }).bind(this)), this.emit(Q[e3(696)].SCROLL, { top: this[e3(962)], left: this.scrollLeft }), clearTimeout(this.afterScrolled), this[e3(615)] = setTimeout((function() {
      var t2 = e3;
      this[t2(988)] && this.snapper.supportsTouch && this.snapper.needsSnap() || this.emit(Q.MANAGERS[t2(1026)], { top: this.scrollTop, left: this.scrollLeft });
    })[e3(594)](this), this.settings.afterScrolledTimeout);
  }
  [i(737)]() {
    var e3 = i;
    let t2 = this.layout.props.name === `pre-paginated` && this.layout[e3(1330)].spread ? this.layout.props.delta * 2 : this.layout[e3(1330)].delta;
    this.views[e3(587)] && (this[e3(959)] && this.settings.axis === `horizontal` ? this.scrollBy(t2, 0, true) : this.scrollBy(0, this.layout.height, true), this.q[e3(925)]((function() {
      return this.check();
    }).bind(this)));
  }
  [i(1121)]() {
    var e3 = i;
    let t2 = this.layout.props.name === `pre-paginated` && this.layout.props.spread ? this.layout.props[e3(1284)] * 2 : this.layout.props[e3(1284)];
    this.views[e3(587)] && (this.isPaginated && this[e3(685)].axis === `horizontal` ? this.scrollBy(-t2, 0, true) : this.scrollBy(0, -this.layout.height, true), this.q.enqueue((function() {
      return this.check();
    }).bind(this)));
  }
  updateFlow(e3) {
    var t2 = i;
    this.rendered && this.snapper && (this.snapper.destroy(), this[t2(988)] = void 0), super[t2(1281)](e3, `scroll`), this.rendered && this[t2(959)] && this[t2(685)].snap && (this.snapper = new Rt(this, this.settings[t2(746)] && typeof this.settings.snap == t2(1086) && this.settings.snap));
  }
  destroy() {
    var e3 = i;
    super.destroy(), this[e3(988)] && this.snapper.destroy();
  }
}, Vt = class {
  constructor(e3, t2) {
    var n2 = i;
    this.settings = z(this.settings || {}, { width: null, height: null, ignoreClass: ``, manager: `default`, view: `iframe`, flow: null, layout: null, spread: null, minSpreadWidth: 800, stylesheet: null, resizeOnOrientationChange: true, script: null, snap: false, defaultDirection: `ltr`, allowScriptedContent: false, allowPopups: false }), z(this.settings, t2), typeof this.settings.manager == `object` && (this[n2(879)] = this.settings.manager), this[n2(1331)] = e3, this.hooks = {}, this.hooks.display = new Pe(this), this.hooks.serialize = new Pe(this), this.hooks[n2(409)] = new Pe(this), this[n2(1419)].unloaded = new Pe(this), this.hooks.layout = new Pe(this), this[n2(1419)].render = new Pe(this), this.hooks[n2(928)] = new Pe(this), this.hooks.content.register(this.handleLinks.bind(this)), this.hooks.content.register(this.passEvents.bind(this)), this[n2(1419)].content.register(this.adjustImages.bind(this)), this.book.spine.hooks.content.register(this[n2(756)].bind(this)), this.settings.stylesheet && this.book.spine.hooks.content.register(this.injectStylesheet.bind(this)), this.settings.script && this.book[n2(926)].hooks.content[n2(575)](this[n2(863)][n2(594)](this)), this[n2(469)] = new rt(this), this.annotations = new ut(this), this.epubcfi = new Ne(), this.q = new Ue(this), this.location = void 0, this.q.enqueue(this.book.opened), this.starting = new X(), this[n2(1376)] = this.starting[n2(371)], this.q.enqueue(this.start);
  }
  setManager(e3) {
    this.manager = e3;
  }
  [i(893)](e3) {
    return typeof e3 == `string` && e3 === `default` ? Ft : typeof e3 == `string` && e3 === `continuous` ? Bt : e3;
  }
  requireView(e3) {
    return typeof e3 == `string` && e3 === i(1112) ? ht : e3;
  }
  start() {
    var e3 = i;
    switch (!this.settings[e3(1488)] && (this[e3(1331)][e3(801)].metadata.layout === `pre-paginated` || this.book[e3(1299)].fixedLayout === `true`) && (this.settings.layout = `pre-paginated`), this[e3(1331)].package.metadata.spread) {
      case `none`:
        this[e3(685)].spread = `none`;
        break;
      case e3(1043):
        this.settings.spread = true;
        break;
    }
    this.manager || (this.ViewManager = this.requireManager(this.settings.manager), this[e3(1440)] = this.requireView(this.settings.view), this[e3(879)] = new this.ViewManager({ view: this.View, queue: this.q, request: this.book[e3(1021)].bind(this.book), settings: this[e3(685)] })), this[e3(408)](this.book.package.metadata.direction || this.settings[e3(1365)]), this.settings.globalLayoutProperties = this[e3(850)](this.book.package[e3(1211)]), this[e3(789)](this[e3(685)].globalLayoutProperties.flow), this.layout(this.settings.globalLayoutProperties), this[e3(879)].on(Q.MANAGERS.ADDED, this.afterDisplayed.bind(this)), this[e3(879)].on(Q[e3(696)].REMOVED, this.afterRemoved.bind(this)), this.manager.on(Q.MANAGERS.RESIZED, this.onResized.bind(this)), this[e3(879)].on(Q.MANAGERS.ORIENTATION_CHANGE, this.onOrientationChange[e3(594)](this)), this.manager.on(Q.MANAGERS.SCROLLED, this[e3(1034)].bind(this)), this.emit(Q.RENDITION.STARTED), this.starting.resolve();
  }
  attachTo(e3) {
    var t2 = i;
    return this.q.enqueue((function() {
      this.manager.render(e3, { width: this.settings.width, height: this.settings.height }), this.emit(Q.RENDITION.ATTACHED);
    })[t2(594)](this));
  }
  display(e3) {
    var t2 = i;
    return this.displaying && this[t2(1369)].resolve(), this.q.enqueue(this._display, e3);
  }
  _display(e3) {
    var t2 = i;
    if (this.book) {
      this.epubcfi[t2(796)](e3);
      var n2 = new X(), r2 = n2.promise, a2;
      return this.displaying = n2, this[t2(1331)].locations.length() && ie(e3) && (e3 = this.book.locations.cfiFromPercentage(parseFloat(e3))), a2 = this.book.spine[t2(472)](e3), a2 ? (this.manager.display(a2, e3)[t2(631)](() => {
        n2[t2(550)](a2), this.displaying = void 0, this.emit(Q.RENDITION.DISPLAYED, a2), this.reportLocation();
      }, (e4) => {
        this.emit(Q.RENDITION.DISPLAY_ERROR, e4);
      }), r2) : (n2[t2(1220)](Error(`No Section Found`)), r2);
    }
  }
  [i(1093)](e3) {
    var t2 = i;
    e3.on(Q.VIEWS[t2(1187)], (n2, r2) => this.triggerMarkEvent(n2, r2, e3[t2(762)])), this.hooks.render.trigger(e3, this).then(() => {
      var n2 = t2;
      e3.contents ? this.hooks.content[n2(1348)](e3.contents, this)[n2(631)](() => {
        this.emit(Q.RENDITION.RENDERED, e3.section, e3);
      }) : this.emit(Q.RENDITION[n2(1060)], e3[n2(1194)], e3);
    });
  }
  afterRemoved(e3) {
    var t2 = i;
    this.hooks[t2(1179)].trigger(e3, this).then(() => {
      this.emit(Q.RENDITION.REMOVED, e3.section, e3);
    });
  }
  onResized(e3, t2) {
    var n2 = i;
    this.emit(Q.RENDITION.RESIZED, { width: e3[n2(610)], height: e3.height }, t2), this.location && this.location.start && this.display(t2 || this.location.start.cfi);
  }
  onOrientationChange(e3) {
    this.emit(Q.RENDITION.ORIENTATION_CHANGE, e3);
  }
  moveTo(e3) {
    this.manager.moveTo(e3);
  }
  resize(e3, t2, n2) {
    var r2 = i;
    e3 && (this.settings.width = e3), t2 && (this.settings[r2(1271)] = t2), this.manager.resize(e3, t2, n2);
  }
  clear() {
    var e3 = i;
    this.manager[e3(403)]();
  }
  [i(737)]() {
    return this.q.enqueue(this.manager.next.bind(this.manager)).then(this.reportLocation.bind(this));
  }
  prev() {
    var e3 = i;
    return this.q.enqueue(this.manager.prev.bind(this.manager)).then(this[e3(1034)].bind(this));
  }
  [i(850)](e3) {
    var t2 = i, n2, r2 = this.settings.layout || e3.layout || t2(712), a2 = this[t2(685)][t2(439)] || e3[t2(439)] || t2(657), o2 = this.settings.orientation || e3[t2(353)] || `auto`, s2 = this.settings.flow || e3.flow || t2(657), c2 = e3.viewport || ``, l2 = this.settings.minSpreadWidth || e3.minSpreadWidth || 800, u2 = this.settings.direction || e3.direction || t2(1410);
    return (this.settings.width === 0 || this[t2(685)].width > 0) && (this.settings[t2(1271)] === 0 || this.settings[t2(1271)]), n2 = { layout: r2, spread: a2, orientation: o2, flow: s2, viewport: c2, minSpreadWidth: l2, direction: u2 }, n2;
  }
  flow(e3) {
    var t2 = i, n2 = e3;
    (e3 === `scrolled` || e3 === `scrolled-doc` || e3 === `scrolled-continuous`) && (n2 = `scrolled`), (e3 === `auto` || e3 === `paginated`) && (n2 = t2(1361)), this[t2(685)].flow = e3, this._layout && this._layout.flow(n2), this.manager && this._layout && this[t2(879)][t2(369)](this[t2(658)]), this[t2(879)] && this.manager.updateFlow(n2), this[t2(879)] && this.manager.isRendered() && this[t2(1432)] && (this[t2(879)].clear(), this.display(this.location[t2(695)].cfi));
  }
  layout(e3) {
    return e3 && (this._layout = new nt(e3), this._layout.spread(e3.spread, this.settings.minSpreadWidth), this._layout.on(Q.LAYOUT.UPDATED, (e4, t2) => {
      var n2 = $;
      this.emit(Q.RENDITION[n2(1059)], e4, t2);
    })), this.manager && this._layout && this.manager.applyLayout(this._layout), this._layout;
  }
  [i(439)](e3, t2) {
    var n2 = i;
    this.settings.spread = e3, t2 && (this.settings.minSpreadWidth = t2), this._layout && this[n2(658)].spread(e3, t2), this.manager && this.manager.isRendered() && this.manager.updateLayout();
  }
  direction(e3) {
    this.settings.direction = e3 || `ltr`, this.manager && this.manager.direction(this.settings.direction), this.manager && this.manager.isRendered() && this.location && (this.manager.clear(), this.display(this.location.start.cfi));
  }
  reportLocation() {
    return this.q.enqueue((function() {
      requestAnimationFrame((function() {
        var e3 = $, t2 = this.manager.currentLocation();
        if (t2 && t2.then && typeof t2.then == `function`) t2[e3(631)]((function(t3) {
          var n2 = e3;
          let r2 = this.located(t3);
          !r2 || !r2.start || !r2.end || (this.location = r2, this.emit(Q.RENDITION[n2(719)], { index: this.location.start[n2(1004)], href: this.location.start.href, start: this[n2(1432)].start[n2(708)], end: this.location.end.cfi, percentage: this[n2(1432)].start.percentage }), this[n2(1396)](Q.RENDITION.RELOCATED, this.location));
        }).bind(this));
        else if (t2) {
          let n2 = this.located(t2);
          if (!n2 || !n2.start || !n2[e3(1276)]) return;
          this.location = n2, this.emit(Q[e3(998)].LOCATION_CHANGED, { index: this.location.start.index, href: this.location.start.href, start: this.location[e3(695)].cfi, end: this.location.end.cfi, percentage: this[e3(1432)].start.percentage }), this.emit(Q.RENDITION[e3(808)], this.location);
        }
      })[$(594)](this));
    }).bind(this));
  }
  [i(1125)]() {
    var e3 = i, t2 = this[e3(879)].currentLocation();
    if (t2 && t2.then && typeof t2.then == `function`) t2.then((function(e4) {
      return this.located(e4);
    }).bind(this));
    else if (t2) return this.located(t2);
  }
  located(e3) {
    var t2 = i;
    if (!e3[t2(587)]) return {};
    let n2 = e3[0], r2 = e3[e3[t2(587)] - 1], a2 = { start: { index: n2.index, href: n2.href, cfi: n2[t2(957)].start, displayed: { page: n2.pages[0] || 1, total: n2.totalPages } }, end: { index: r2[t2(1004)], href: r2.href, cfi: r2.mapping[t2(1276)], displayed: { page: r2.pages[r2.pages.length - 1] || 1, total: r2[t2(453)] } } }, o2 = this[t2(1331)].locations.locationFromCfi(n2.mapping.start), s2 = this.book.locations.locationFromCfi(r2.mapping.end);
    o2 != null && (a2.start.location = o2, a2.start.percentage = this.book.locations.percentageFromLocation(o2)), s2 != null && (a2.end[t2(1432)] = s2, a2[t2(1276)][t2(1073)] = this.book.locations.percentageFromLocation(s2));
    let c2 = this.book.pageList[t2(468)](n2[t2(957)].start), l2 = this.book.pageList[t2(468)](r2[t2(957)].end);
    return c2 != -1 && (a2.start[t2(1094)] = c2), l2 != -1 && (a2[t2(1276)][t2(1094)] = l2), r2.index === this.book.spine[t2(1267)]().index && a2.end.displayed.page >= a2.end.displayed.total && (a2.atEnd = true), n2.index === this.book.spine.first().index && a2.start.displayed.page === 1 && (a2.atStart = true), a2;
  }
  destroy() {
    var e3 = i;
    this[e3(879)] && this.manager.destroy(), this.book = void 0;
  }
  passEvents(e3) {
    We.forEach((t2) => {
      e3.on(t2, (t3) => this.triggerViewEvent(t3, e3));
    }), e3.on(Q.CONTENTS.SELECTED, (t2) => this.triggerSelectedEvent(t2, e3));
  }
  triggerViewEvent(e3, t2) {
    this.emit(e3.type, e3, t2);
  }
  triggerSelectedEvent(e3, t2) {
    this.emit(Q.RENDITION.SELECTED, e3, t2);
  }
  triggerMarkEvent(e3, t2, n2) {
    this.emit(Q.RENDITION.MARK_CLICKED, e3, t2, n2);
  }
  getRange(e3, t2) {
    var n2 = new Ne(e3), r2 = this.manager.visible().filter(function(e4) {
      if (n2[$(422)] === e4.index) return true;
    });
    if (r2.length) return r2[0].contents.range(n2, t2);
  }
  adjustImages(e3) {
    var t2 = i;
    if (this._layout.name === `pre-paginated`) return new Promise(function(e4) {
      e4();
    });
    let n2 = e3.window.getComputedStyle(e3[t2(409)], null), r2 = (e3.content.offsetHeight - (parseFloat(n2.paddingTop) + parseFloat(n2.paddingBottom))) * 0.95, a2 = parseFloat(n2[t2(574)]) + parseFloat(n2[t2(1378)]);
    return e3.addStylesheetRules({ img: { "max-width": (this._layout.columnWidth ? this._layout.columnWidth - a2 + `px` : `100%`) + `!important`, "max-height": r2 + `px!important`, "object-fit": `contain`, "page-break-inside": `avoid`, "break-inside": `avoid`, "box-sizing": t2(554) }, svg: { "max-width": (this._layout.columnWidth ? this[t2(658)].columnWidth - a2 + `px` : t2(627)) + `!important`, "max-height": r2 + t2(423), "page-break-inside": t2(372), "break-inside": `avoid` } }), new Promise(function(e4, t3) {
      setTimeout(function() {
        e4();
      }, 1);
    });
  }
  getContents() {
    return this.manager ? this.manager.getContents() : [];
  }
  views() {
    return (this.manager ? this.manager.views : void 0) || [];
  }
  [i(753)](e3) {
    e3 && e3.on(Q.CONTENTS.LINK_CLICKED, (e4) => {
      let t2 = this.book.path.relative(e4);
      this.display(t2);
    });
  }
  injectStylesheet(e3, t2) {
    var n2 = i;
    let r2 = e3.createElement(`link`);
    r2.setAttribute(n2(447), `text/css`), r2.setAttribute(`rel`, n2(460)), r2.setAttribute(`href`, this.settings[n2(460)]), e3.getElementsByTagName(n2(1277))[0].appendChild(r2);
  }
  injectScript(e3, t2) {
    var n2 = i;
    let r2 = e3.createElement(`script`);
    r2.setAttribute(n2(447), `text/javascript`), r2.setAttribute(`src`, this.settings.script), r2[n2(545)] = ` `, e3.getElementsByTagName(n2(1277))[0].appendChild(r2);
  }
  [i(756)](e3, t2) {
    var n2 = i;
    let r2 = this[n2(1331)].packaging.metadata.identifier, a2 = e3.createElement(n2(979));
    a2[n2(1016)](n2(701), n2(1312)), r2 && a2.setAttribute(`content`, r2), e3[n2(388)](`head`)[0].appendChild(a2);
  }
};
(0, M.default)(Vt.prototype);
var Ht = t(e((e3, t2) => {
  (function(n2) {
    var r2 = $;
    if (typeof e3 == `object` && t2 !== void 0) t2.exports = n2();
    else if (typeof define == `function` && define[r2(1213)]) define([], n2);
    else {
      var i2 = typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : this;
      i2.JSZip = n2();
    }
  })(function() {
    return (function e4(t3, r2, i2) {
      var a2 = $;
      function o2(a3, c3) {
        var l2 = $;
        if (!r2[a3]) {
          if (!t3[a3]) {
            var u2 = typeof n == `function` && n;
            if (!c3 && u2) return u2(a3, true);
            if (s2) return s2(a3, true);
            var d2 = Error(`Cannot find module '` + a3 + `'`);
            throw d2.code = `MODULE_NOT_FOUND`, d2;
          }
          var f2 = r2[a3] = { exports: {} };
          t3[a3][0][l2(906)](f2[l2(952)], function(e5) {
            var n2 = t3[a3][1][e5];
            return o2(n2 || e5);
          }, f2, f2.exports, e4, t3, r2, i2);
        }
        return r2[a3].exports;
      }
      for (var s2 = typeof n == `function` && n, c2 = 0; c2 < i2[a2(587)]; c2++) o2(i2[c2]);
      return o2;
    })({ 1: [function(e4, t3, n2) {
      var r2 = e4(`./utils`), i2 = e4(`./support`), a2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;
      n2.encode = function(e5) {
        for (var t4 = $, n3 = [], i3, o2, s2, c2, l2, u2, d2, f2 = 0, p2 = e5.length, m2 = p2, h2 = r2.getTypeOf(e5) !== t4(784); f2 < e5.length; ) m2 = p2 - f2, h2 ? (i3 = e5[f2++], o2 = f2 < p2 ? e5[f2++] : 0, s2 = f2 < p2 ? e5[f2++] : 0) : (i3 = e5[t4(1429)](f2++), o2 = f2 < p2 ? e5.charCodeAt(f2++) : 0, s2 = f2 < p2 ? e5.charCodeAt(f2++) : 0), c2 = i3 >> 2, l2 = (i3 & 3) << 4 | o2 >> 4, u2 = m2 > 1 ? (o2 & 15) << 2 | s2 >> 6 : 64, d2 = m2 > 2 ? s2 & 63 : 64, n3.push(a2.charAt(c2) + a2.charAt(l2) + a2.charAt(u2) + a2[t4(848)](d2));
        return n3.join(``);
      }, n2.decode = function(e5) {
        var t4 = $, n3, r3, o2, s2, c2, l2, u2, d2 = 0, f2 = 0, p2 = `data:`;
        if (e5.substr(0, p2[t4(587)]) === p2) throw Error(`Invalid base64 input, it looks like a data url.`);
        e5 = e5.replace(/[^A-Za-z0-9+/=]/g, ``);
        var m2 = e5[t4(587)] * 3 / 4;
        if (e5.charAt(e5.length - 1) === a2[t4(848)](64) && m2--, e5.charAt(e5.length - 2) === a2[t4(848)](64) && m2--, m2 % 1 != 0) throw Error(`Invalid base64 input, bad content length.`);
        for (var h2 = i2.uint8array ? new Uint8Array(m2 | 0) : Array(m2 | 0); d2 < e5[t4(587)]; ) s2 = a2[t4(755)](e5.charAt(d2++)), c2 = a2.indexOf(e5.charAt(d2++)), l2 = a2.indexOf(e5[t4(848)](d2++)), u2 = a2.indexOf(e5.charAt(d2++)), n3 = s2 << 2 | c2 >> 4, r3 = (c2 & 15) << 4 | l2 >> 2, o2 = (l2 & 3) << 6 | u2, h2[f2++] = n3, l2 !== 64 && (h2[f2++] = r3), u2 !== 64 && (h2[f2++] = o2);
        return h2;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./external`), a2 = e4(`./stream/DataWorker`), o2 = e4(`./stream/Crc32Probe`), s2 = e4(`./stream/DataLengthProbe`);
      function c2(e5, t4, n3, r3, i3) {
        var a3 = $;
        this.compressedSize = e5, this.uncompressedSize = t4, this.crc32 = n3, this[a3(1210)] = r3, this.compressedContent = i3;
      }
      c2[r2(427)] = { getContentWorker: function() {
        var e5 = r2, t4 = new a2(i2.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker())[e5(1158)](new s2(`data_length`)), n3 = this;
        return t4.on(`end`, function() {
          var t5 = e5;
          if (this.streamInfo[t5(1427)] !== n3.uncompressedSize) throw Error(`Bug : uncompressed data size mismatch`);
        }), t4;
      }, getCompressedWorker: function() {
        var e5 = r2;
        return new a2(i2[e5(1255)][e5(550)](this.compressedContent)).withStreamInfo(`compressedSize`, this[e5(1072)]).withStreamInfo(`uncompressedSize`, this.uncompressedSize).withStreamInfo(`crc32`, this.crc32)[e5(1008)](`compression`, this.compression);
      } }, c2.createWorkerFrom = function(e5, t4, n3) {
        var i3 = r2;
        return e5.pipe(new o2()).pipe(new s2(i3(608))).pipe(t4.compressWorker(n3)).pipe(new s2(`compressedSize`)).withStreamInfo(`compression`, t4);
      }, t3.exports = c2;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e4, t3, n2) {
      var r2 = e4(`./stream/GenericWorker`);
      n2.STORE = { magic: `\0\0`, compressWorker: function() {
        return new r2(`STORE compression`);
      }, uncompressWorker: function() {
        return new r2(`STORE decompression`);
      } }, n2.DEFLATE = e4(`./flate`);
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e4, t3, n2) {
      var r2 = e4(`./utils`);
      function i2() {
        for (var e5, t4 = [], n3 = 0; n3 < 256; n3++) {
          e5 = n3;
          for (var r3 = 0; r3 < 8; r3++) e5 = e5 & 1 ? 3988292384 ^ e5 >>> 1 : e5 >>> 1;
          t4[n3] = e5;
        }
        return t4;
      }
      var a2 = i2();
      function o2(e5, t4, n3, r3) {
        var i3 = a2, o3 = r3 + n3;
        e5 ^= -1;
        for (var s3 = r3; s3 < o3; s3++) e5 = e5 >>> 8 ^ i3[(e5 ^ t4[s3]) & 255];
        return e5 ^ -1;
      }
      function s2(e5, t4, n3, r3) {
        var i3 = a2, o3 = r3 + n3;
        e5 ^= -1;
        for (var s3 = r3; s3 < o3; s3++) e5 = e5 >>> 8 ^ i3[(e5 ^ t4.charCodeAt(s3)) & 255];
        return e5 ^ -1;
      }
      t3.exports = function(e5, t4) {
        var n3 = $;
        return e5 === void 0 || !e5[n3(587)] ? 0 : r2.getTypeOf(e5) === `string` ? s2(t4 | 0, e5, e5.length, 0) : o2(t4 | 0, e5, e5[n3(587)], 0);
      };
    }, { "./utils": 32 }], 5: [function(e4, t3, n2) {
      n2.base64 = false, n2.binary = false, n2.dir = false, n2.createFolders = true, n2.date = null, n2.compression = null, n2.compressionOptions = null, n2.comment = null, n2.unixPermissions = null, n2.dosPermissions = null;
    }, {}], 6: [function(e4, t3, n2) {
      var r2 = $, i2 = null;
      i2 = typeof Promise < `u` ? Promise : e4(r2(1010)), t3.exports = { Promise: i2 };
    }, { lie: 37 }], 7: [function(e4, t3, n2) {
      var r2 = $, i2 = typeof Uint8Array < `u` && typeof Uint16Array < `u` && typeof Uint32Array < `u`, a2 = e4(`pako`), o2 = e4(`./utils`), s2 = e4(`./stream/GenericWorker`), c2 = i2 ? `uint8array` : `array`;
      n2[r2(766)] = `\b\0`;
      function l2(e5, t4) {
        var n3 = r2;
        s2.call(this, n3(833) + e5), this._pako = null, this._pakoAction = e5, this._pakoOptions = t4, this.meta = {};
      }
      o2[r2(412)](l2, s2), l2[r2(427)].processChunk = function(e5) {
        var t4 = r2;
        this[t4(979)] = e5.meta, this._pako === null && this._createPako(), this[t4(1351)][t4(1386)](o2.transformTo(c2, e5[t4(1014)]), false);
      }, l2.prototype[r2(450)] = function() {
        var e5 = r2;
        s2.prototype.flush[e5(906)](this), this._pako === null && this._createPako(), this[e5(1351)][e5(1386)]([], true);
      }, l2[r2(427)].cleanUp = function() {
        s2.prototype.cleanUp.call(this), this._pako = null;
      }, l2[r2(427)]._createPako = function() {
        var e5 = r2;
        this._pako = new a2[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
        var t4 = this;
        this._pako[e5(1291)] = function(e6) {
          t4.push({ data: e6, meta: t4.meta });
        };
      }, n2.compressWorker = function(e5) {
        return new l2(`Deflate`, e5);
      }, n2.uncompressWorker = function() {
        return new l2(`Inflate`, {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(r2(1468)), a2 = e4(`../stream/GenericWorker`), o2 = e4(`../utf8`), s2 = e4(r2(854)), c2 = e4(r2(1360)), l2 = function(e5, t4) {
        var n3 = ``, r3;
        for (r3 = 0; r3 < t4; r3++) n3 += String.fromCharCode(e5 & 255), e5 >>>= 8;
        return n3;
      }, u2 = function(e5, t4) {
        var n3 = e5;
        return e5 || (n3 = t4 ? 16893 : 33204), (n3 & 65535) << 16;
      }, d2 = function(e5) {
        return (e5 || 0) & 63;
      }, f2 = function(e5, t4, n3, a3, f3, p3) {
        var m3 = r2, h3 = e5.file, g2 = e5.compression, _2 = p3 !== o2.utf8encode, v2 = i2.transformTo(`string`, p3(h3.name)), y2 = i2.transformTo(`string`, o2.utf8encode(h3[m3(701)])), b2 = h3[m3(1487)], x2 = i2.transformTo(`string`, p3(b2)), S2 = i2.transformTo(m3(784), o2[m3(1260)](b2)), C2 = y2.length !== h3[m3(701)].length, w2 = S2.length !== b2.length, T2, E2, D2 = ``, O2 = ``, k2 = ``, A2 = h3[m3(352)], j2 = h3.date, M2 = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        (!t4 || n3) && (M2[m3(456)] = e5[m3(456)], M2.compressedSize = e5.compressedSize, M2[m3(608)] = e5.uncompressedSize);
        var N2 = 0;
        t4 && (N2 |= 8), !_2 && (C2 || w2) && (N2 |= 2048);
        var ee2 = 0, P2 = 0;
        A2 && (ee2 |= 16), f3 === `UNIX` ? (P2 = 798, ee2 |= u2(h3[m3(1050)], A2)) : (P2 = 20, ee2 |= d2(h3.dosPermissions, A2)), T2 = j2.getUTCHours(), T2 <<= 6, T2 |= j2.getUTCMinutes(), T2 <<= 5, T2 |= j2.getUTCSeconds() / 2, E2 = j2.getUTCFullYear() - 1980, E2 <<= 4, E2 |= j2.getUTCMonth() + 1, E2 <<= 5, E2 |= j2.getUTCDate(), C2 && (O2 = l2(1, 1) + l2(s2(v2), 4) + y2, D2 += `up` + l2(O2.length, 2) + O2), w2 && (k2 = l2(1, 1) + l2(s2(x2), 4) + S2, D2 += `uc` + l2(k2[m3(587)], 2) + k2);
        var F2 = ``;
        return F2 += `
\0`, F2 += l2(N2, 2), F2 += g2.magic, F2 += l2(T2, 2), F2 += l2(E2, 2), F2 += l2(M2.crc32, 4), F2 += l2(M2.compressedSize, 4), F2 += l2(M2[m3(608)], 4), F2 += l2(v2.length, 2), F2 += l2(D2.length, 2), { fileRecord: c2.LOCAL_FILE_HEADER + F2 + v2 + D2, dirRecord: c2.CENTRAL_FILE_HEADER + l2(P2, 2) + F2 + l2(x2.length, 2) + m3(681) + l2(ee2, 4) + l2(a3, 4) + v2 + D2 + x2 };
      }, p2 = function(e5, t4, n3, r3, a3) {
        var o3 = ``, s3 = i2.transformTo(`string`, a3(r3));
        return o3 = c2.CENTRAL_DIRECTORY_END + `\0\0\0\0` + l2(e5, 2) + l2(e5, 2) + l2(t4, 4) + l2(n3, 4) + l2(s3.length, 2) + s3, o3;
      }, m2 = function(e5) {
        var t4 = r2, n3 = ``;
        return n3 = c2.DATA_DESCRIPTOR + l2(e5[t4(456)], 4) + l2(e5[t4(1072)], 4) + l2(e5.uncompressedSize, 4), n3;
      };
      function h2(e5, t4, n3, i3) {
        var o3 = r2;
        a2.call(this, o3(1336)), this[o3(950)] = 0, this.zipComment = t4, this.zipPlatform = n3, this.encodeFileName = i3, this.streamFiles = e5, this.accumulate = false, this[o3(1307)] = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i2.inherits(h2, a2), h2[r2(427)].push = function(e5) {
        var t4 = r2, n3 = e5.meta.percent || 0, i3 = this.entriesCount, o3 = this._sources.length;
        this.accumulate ? this.contentBuffer.push(e5) : (this.bytesWritten += e5.data.length, a2.prototype[t4(1386)].call(this, { data: e5.data, meta: { currentFile: this[t4(1325)], percent: i3 ? (n3 + 100 * (i3 - o3 - 1)) / i3 : 100 } }));
      }, h2.prototype.openedSource = function(e5) {
        var t4 = r2;
        this[t4(1352)] = this.bytesWritten, this.currentFile = e5.file.name;
        var n3 = this.streamFiles && !e5.file.dir;
        if (n3) {
          var i3 = f2(e5, n3, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: i3.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = true;
      }, h2.prototype.closedSource = function(e5) {
        var t4 = r2;
        this.accumulate = false;
        var n3 = this.streamFiles && !e5.file.dir, i3 = f2(e5, n3, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(i3.dirRecord), n3) this[t4(1386)]({ data: m2(e5), meta: { percent: 100 } });
        else for (this.push({ data: i3.fileRecord, meta: { percent: 0 } }); this[t4(1307)].length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, h2.prototype.flush = function() {
        for (var e5 = r2, t4 = this.bytesWritten, n3 = 0; n3 < this.dirRecords.length; n3++) this.push({ data: this.dirRecords[n3], meta: { percent: 100 } });
        var i3 = this[e5(950)] - t4, a3 = p2(this.dirRecords.length, i3, t4, this.zipComment, this.encodeFileName);
        this.push({ data: a3, meta: { percent: 100 } });
      }, h2.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, h2[r2(427)].registerPrevious = function(e5) {
        this._sources.push(e5);
        var t4 = this;
        return e5.on(`data`, function(e6) {
          t4.processChunk(e6);
        }), e5.on(`end`, function() {
          var e6 = $;
          t4.closedSource(t4.previous.streamInfo), t4._sources.length ? t4.prepareNextSource() : t4[e6(1276)]();
        }), e5.on(`error`, function(e6) {
          t4.error(e6);
        }), this;
      }, h2[r2(427)].resume = function() {
        var e5 = r2;
        if (!a2.prototype[e5(1169)][e5(906)](this)) return false;
        if (!this.previous && this._sources[e5(587)]) return this.prepareNextSource(), true;
        if (!this.previous && !this._sources.length && !this.generatedError) return this.end(), true;
      }, h2.prototype.error = function(e5) {
        var t4 = r2, n3 = this._sources;
        if (!a2.prototype.error[t4(906)](this, e5)) return false;
        for (var i3 = 0; i3 < n3.length; i3++) try {
          n3[i3].error(e5);
        } catch {
        }
        return true;
      }, h2.prototype.lock = function() {
        var e5 = r2;
        a2.prototype.lock.call(this);
        for (var t4 = this._sources, n3 = 0; n3 < t4[e5(587)]; n3++) t4[n3].lock();
      }, t3.exports = h2;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e4, t3, n2) {
      var r2 = e4(`../compressions`), i2 = e4(`./ZipFileWorker`), a2 = function(e5, t4) {
        var n3 = $, i3 = e5 || t4, a3 = r2[i3];
        if (!a3) throw Error(i3 + n3(1168));
        return a3;
      };
      n2.generateWorker = function(e5, t4, n3) {
        var r3 = $, o2 = new i2(t4.streamFiles, n3, t4[r3(1285)], t4.encodeFileName), s2 = 0;
        try {
          e5.forEach(function(e6, n4) {
            s2++;
            var r4 = a2(n4.options.compression, t4.compression), i3 = n4.options.compressionOptions || t4.compressionOptions || {}, c2 = n4.dir, l2 = n4.date;
            n4._compressWorker(r4, i3).withStreamInfo(`file`, { name: e6, dir: c2, date: l2, comment: n4.comment || ``, unixPermissions: n4.unixPermissions, dosPermissions: n4.dosPermissions }).pipe(o2);
          }), o2.entriesCount = s2;
        } catch (e6) {
          o2.error(e6);
        }
        return o2;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e4, t3, n2) {
      var r2 = $;
      function i2() {
        var e5 = $;
        if (!(this instanceof i2)) return new i2();
        if (arguments[e5(587)]) throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);
        this.files = Object[e5(896)](null), this.comment = null, this.root = ``, this.clone = function() {
          var e6 = new i2();
          for (var t4 in this) typeof this[t4] != `function` && (e6[t4] = this[t4]);
          return e6;
        };
      }
      i2.prototype = e4(r2(830)), i2.prototype.loadAsync = e4(`./load`), i2.support = e4(`./support`), i2.defaults = e4(r2(526)), i2.version = `3.10.1`, i2.loadAsync = function(e5, t4) {
        return new i2().loadAsync(e5, t4);
      }, i2.external = e4(`./external`), t3.exports = i2;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./utils`), a2 = e4(`./external`), o2 = e4(r2(907)), s2 = e4(r2(1338)), c2 = e4(`./stream/Crc32Probe`), l2 = e4(r2(1364));
      function u2(e5) {
        var t4 = r2;
        return new a2[t4(1255)](function(n3, r3) {
          var i3 = t4, a3 = e5.decompressed.getContentWorker().pipe(new c2());
          a3.on(`error`, function(e6) {
            r3(e6);
          }).on(i3(1276), function() {
            var t5 = i3;
            a3.streamInfo.crc32 === e5[t5(822)].crc32 ? n3() : r3(Error(`Corrupted zip : CRC32 mismatch`));
          }).resume();
        });
      }
      t3.exports = function(e5, t4) {
        var n3 = r2, c3 = this;
        return t4 = i2.extend(t4 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: o2.utf8decode }), l2.isNode && l2.isStream(e5) ? a2.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)) : i2[n3(834)](`the loaded zip file`, e5, true, t4.optimizedBinaryString, t4[n3(1363)]).then(function(e6) {
          var n4 = new s2(t4);
          return n4.load(e6), n4;
        }).then(function(e6) {
          var r3 = [a2[n3(1255)].resolve(e6)], i3 = e6.files;
          if (t4.checkCRC32) for (var o3 = 0; o3 < i3.length; o3++) r3.push(u2(i3[o3]));
          return a2.Promise.all(r3);
        }).then(function(e6) {
          for (var r3 = n3, a3 = e6.shift(), o3 = a3[r3(1451)], s3 = 0; s3 < o3.length; s3++) {
            var l3 = o3[s3], u3 = l3.fileNameStr, d2 = i2[r3(550)](l3.fileNameStr);
            c3.file(d2, l3.decompressed, { binary: true, optimizedBinaryString: true, date: l3.date, dir: l3.dir, comment: l3.fileCommentStr.length ? l3.fileCommentStr : null, unixPermissions: l3.unixPermissions, dosPermissions: l3.dosPermissions, createFolders: t4[r3(563)] }), l3.dir || (c3[r3(901)](d2).unsafeOriginalName = u3);
          }
          return a3.zipComment.length && (c3.comment = a3.zipComment), c3;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`../utils`), a2 = e4(`../stream/GenericWorker`);
      function o2(e5, t4) {
        var n3 = $;
        a2.call(this, n3(1342) + e5), this._upstreamEnded = false, this._bindStream(t4);
      }
      i2.inherits(o2, a2), o2.prototype._bindStream = function(e5) {
        var t4 = $, n3 = this;
        this._stream = e5, e5.pause(), e5.on(t4(1014), function(e6) {
          n3.push({ data: e6, meta: { percent: 0 } });
        }).on(`error`, function(e6) {
          var r3 = t4;
          n3.isPaused ? this[r3(1140)] = e6 : n3.error(e6);
        }).on(`end`, function() {
          n3.isPaused ? n3._upstreamEnded = true : n3.end();
        });
      }, o2.prototype.pause = function() {
        var e5 = $;
        return a2.prototype.pause.call(this) ? (this._stream[e5(1486)](), true) : false;
      }, o2[r2(427)].resume = function() {
        return a2.prototype.resume.call(this) ? (this._upstreamEnded ? this.end() : this._stream.resume(), true) : false;
      }, t3[r2(952)] = o2;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`readable-stream`)[r2(1481)];
      e4(`../utils`).inherits(a2, i2);
      function a2(e5, t4, n3) {
        var a3 = r2;
        i2[a3(906)](this, t4), this._helper = e5;
        var o2 = this;
        e5.on(a3(1014), function(e6, t5) {
          var r3 = a3;
          o2.push(e6) || o2._helper[r3(1486)](), n3 && n3(t5);
        }).on(`error`, function(e6) {
          var t5 = a3;
          o2.emit(t5(1018), e6);
        }).on(`end`, function() {
          o2.push(null);
        });
      }
      a2.prototype[r2(874)] = function() {
        this._helper.resume();
      }, t3.exports = a2;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e4, t3, n2) {
      var r2 = $;
      t3[r2(952)] = { isNode: typeof Buffer < `u`, newBufferFrom: function(e5, t4) {
        var n3 = r2;
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e5, t4);
        if (typeof e5 == n3(586)) throw Error(`The "data" argument must not be a number`);
        return new Buffer(e5, t4);
      }, allocBuffer: function(e5) {
        if (Buffer.alloc) return Buffer.alloc(e5);
        var t4 = new Buffer(e5);
        return t4.fill(0), t4;
      }, isBuffer: function(e5) {
        return Buffer.isBuffer(e5);
      }, isStream: function(e5) {
        return e5 && typeof e5.on == `function` && typeof e5.pause == `function` && typeof e5.resume == `function`;
      } };
    }, {}], 15: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./utf8`), a2 = e4(`./utils`), o2 = e4(`./stream/GenericWorker`), s2 = e4(`./stream/StreamHelper`), c2 = e4(`./defaults`), l2 = e4(`./compressedObject`), u2 = e4(r2(673)), d2 = e4(`./generate`), f2 = e4(`./nodejsUtils`), p2 = e4(`./nodejs/NodejsStreamInputAdapter`), m2 = function(e5, t4, n3) {
        var i3 = r2, s3 = a2.getTypeOf(t4), d3, m3 = a2.extend(n3 || {}, c2);
        m3.date = m3.date || /* @__PURE__ */ new Date(), m3.compression !== null && (m3.compression = m3[i3(1210)].toUpperCase()), typeof m3.unixPermissions == `string` && (m3.unixPermissions = parseInt(m3.unixPermissions, 8)), m3[i3(1050)] && m3.unixPermissions & 16384 && (m3.dir = true), m3[i3(497)] && m3.dosPermissions & 16 && (m3.dir = true), m3.dir && (e5 = g2(e5)), m3.createFolders && (d3 = h2(e5)) && _2[i3(906)](this, d3, true);
        var v3 = s3 === i3(784) && m3.binary === false && m3.base64 === false;
        (!n3 || n3.binary === void 0) && (m3.binary = !v3), (t4 instanceof l2 && t4[i3(608)] === 0 || m3.dir || !t4 || t4[i3(587)] === 0) && (m3.base64 = false, m3.binary = true, t4 = ``, m3.compression = `STORE`, s3 = `string`);
        var y2 = null;
        y2 = t4 instanceof l2 || t4 instanceof o2 ? t4 : f2.isNode && f2.isStream(t4) ? new p2(e5, t4) : a2.prepareContent(e5, t4, m3.binary, m3[i3(769)], m3.base64);
        var b2 = new u2(e5, y2, m3);
        this[i3(1451)][e5] = b2;
      }, h2 = function(e5) {
        var t4 = r2;
        e5[t4(1006)](-1) === `/` && (e5 = e5.substring(0, e5[t4(587)] - 1));
        var n3 = e5.lastIndexOf(`/`);
        return n3 > 0 ? e5.substring(0, n3) : ``;
      }, g2 = function(e5) {
        return e5.slice(-1) !== `/` && (e5 += `/`), e5;
      }, _2 = function(e5, t4) {
        return t4 = t4 === void 0 ? c2.createFolders : t4, e5 = g2(e5), this.files[e5] || m2.call(this, e5, null, { dir: true, createFolders: t4 }), this.files[e5];
      };
      function v2(e5) {
        return Object.prototype.toString[r2(906)](e5) === `[object RegExp]`;
      }
      t3[r2(952)] = { load: function() {
        throw Error(r2(905));
      }, forEach: function(e5) {
        var t4 = r2, n3, i3, a3;
        for (n3 in this.files) a3 = this.files[n3], i3 = n3[t4(1006)](this.root.length, n3[t4(587)]), i3 && n3.slice(0, this.root.length) === this.root && e5(i3, a3);
      }, filter: function(e5) {
        var t4 = r2, n3 = [];
        return this[t4(1318)](function(r3, i3) {
          var a3 = t4;
          e5(r3, i3) && n3[a3(1386)](i3);
        }), n3;
      }, file: function(e5, t4, n3) {
        var i3 = r2;
        if (arguments.length === 1) if (v2(e5)) {
          var a3 = e5;
          return this.filter(function(e6, t5) {
            return !t5[$(352)] && a3.test(e6);
          });
        } else {
          var o3 = this.files[this[i3(996)] + e5];
          return o3 && !o3.dir ? o3 : null;
        }
        else e5 = this.root + e5, m2.call(this, e5, t4, n3);
        return this;
      }, folder: function(e5) {
        var t4 = r2;
        if (!e5) return this;
        if (v2(e5)) return this.filter(function(t5, n4) {
          return n4.dir && e5.test(t5);
        });
        var n3 = this.root + e5, i3 = _2.call(this, n3), a3 = this.clone();
        return a3[t4(996)] = i3.name, a3;
      }, remove: function(e5) {
        var t4 = r2;
        e5 = this.root + e5;
        var n3 = this[t4(1451)][e5];
        if (n3 || (n3 = (e5[t4(1006)](-1) !== `/` && (e5 += `/`), this[t4(1451)][e5])), n3 && !n3.dir) delete this.files[e5];
        else for (var i3 = this.filter(function(n4, r3) {
          return r3[t4(701)].slice(0, e5.length) === e5;
        }), a3 = 0; a3 < i3.length; a3++) delete this.files[i3[a3].name];
        return this;
      }, generate: function() {
        throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`);
      }, generateInternalStream: function(e5) {
        var t4 = r2, n3, c3 = {};
        try {
          if (c3 = a2.extend(e5 || {}, { streamFiles: false, compression: `STORE`, compressionOptions: null, type: ``, platform: `DOS`, comment: null, mimeType: `application/zip`, encodeFileName: i2.utf8encode }), c3.type = c3.type.toLowerCase(), c3[t4(1210)] = c3.compression.toUpperCase(), c3.type === `binarystring` && (c3.type = t4(784)), !c3.type) throw Error(`No output type specified.`);
          a2.checkSupport(c3[t4(447)]), (c3.platform === `darwin` || c3[t4(1285)] === `freebsd` || c3.platform === `linux` || c3.platform === t4(790)) && (c3[t4(1285)] = `UNIX`), c3.platform === `win32` && (c3.platform = `DOS`);
          var l3 = c3.comment || this[t4(1487)] || ``;
          n3 = d2.generateWorker(this, c3, l3);
        } catch (e6) {
          n3 = new o2(t4(1018)), n3.error(e6);
        }
        return new s2(n3, c3.type || `string`, c3.mimeType);
      }, generateAsync: function(e5, t4) {
        return this.generateInternalStream(e5).accumulate(t4);
      }, generateNodeStream: function(e5, t4) {
        var n3 = r2;
        return e5 || (e5 = {}), e5[n3(447)] || (e5.type = `nodebuffer`), this.generateInternalStream(e5).toNodejsStream(t4);
      } };
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e4, t3, n2) {
      var r2 = $;
      t3[r2(952)] = e4(`stream`);
    }, { stream: void 0 }], 17: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./DataReader`), a2 = e4(`../utils`);
      function o2(e5) {
        var t4 = $;
        i2.call(this, e5);
        for (var n3 = 0; n3 < this[t4(1014)].length; n3++) e5[n3] = e5[n3] & 255;
      }
      a2.inherits(o2, i2), o2[r2(427)].byteAt = function(e5) {
        return this.data[this.zero + e5];
      }, o2[r2(427)].lastIndexOfSignature = function(e5) {
        for (var t4 = r2, n3 = e5.charCodeAt(0), i3 = e5.charCodeAt(1), a3 = e5.charCodeAt(2), o3 = e5.charCodeAt(3), s2 = this[t4(587)] - 4; s2 >= 0; --s2) if (this.data[s2] === n3 && this[t4(1014)][s2 + 1] === i3 && this.data[s2 + 2] === a3 && this.data[s2 + 3] === o3) return s2 - this.zero;
        return -1;
      }, o2.prototype.readAndCheckSignature = function(e5) {
        var t4 = r2, n3 = e5.charCodeAt(0), i3 = e5[t4(1429)](1), a3 = e5.charCodeAt(2), o3 = e5.charCodeAt(3), s2 = this.readData(4);
        return n3 === s2[0] && i3 === s2[1] && a3 === s2[2] && o3 === s2[3];
      }, o2.prototype[r2(603)] = function(e5) {
        var t4 = r2;
        if (this.checkOffset(e5), e5 === 0) return [];
        var n3 = this.data[t4(1006)](this.zero + this.index, this.zero + this.index + e5);
        return this.index += e5, n3;
      }, t3[r2(952)] = o2;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e4, t3, n2) {
      var r2 = e4(`../utils`);
      function i2(e5) {
        this.data = e5, this.length = e5.length, this.index = 0, this.zero = 0;
      }
      i2.prototype = { checkOffset: function(e5) {
        this.checkIndex(this.index + e5);
      }, checkIndex: function(e5) {
        var t4 = $;
        if (this[t4(587)] < this.zero + e5 || e5 < 0) throw Error(t4(1071) + this.length + `, asked index = ` + e5 + t4(376));
      }, setIndex: function(e5) {
        this.checkIndex(e5), this.index = e5;
      }, skip: function(e5) {
        this.setIndex(this.index + e5);
      }, byteAt: function() {
      }, readInt: function(e5) {
        var t4 = $, n3 = 0, r3;
        for (this[t4(1130)](e5), r3 = this.index + e5 - 1; r3 >= this[t4(1004)]; r3--) n3 = (n3 << 8) + this.byteAt(r3);
        return this.index += e5, n3;
      }, readString: function(e5) {
        var t4 = $;
        return r2.transformTo(t4(784), this.readData(e5));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var e5 = this.readInt(4);
        return new Date(Date.UTC((e5 >> 25 & 127) + 1980, (e5 >> 21 & 15) - 1, e5 >> 16 & 31, e5 >> 11 & 31, e5 >> 5 & 63, (e5 & 31) << 1));
      } }, t3.exports = i2;
    }, { "../utils": 32 }], 19: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./Uint8ArrayReader`), a2 = e4(`../utils`);
      function o2(e5) {
        i2.call(this, e5);
      }
      a2[r2(412)](o2, i2), o2[r2(427)][r2(603)] = function(e5) {
        this.checkOffset(e5);
        var t4 = this.data.slice(this.zero + this.index, this.zero + this.index + e5);
        return this.index += e5, t4;
      }, t3.exports = o2;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(r2(1079)), a2 = e4(`../utils`);
      function o2(e5) {
        i2[r2(906)](this, e5);
      }
      a2.inherits(o2, i2), o2.prototype.byteAt = function(e5) {
        var t4 = r2;
        return this.data[t4(1429)](this.zero + e5);
      }, o2.prototype.lastIndexOfSignature = function(e5) {
        var t4 = r2;
        return this[t4(1014)][t4(964)](e5) - this[t4(1e3)];
      }, o2.prototype.readAndCheckSignature = function(e5) {
        return e5 === this.readData(4);
      }, o2.prototype.readData = function(e5) {
        var t4 = r2;
        this.checkOffset(e5);
        var n3 = this.data[t4(1006)](this.zero + this.index, this.zero + this.index + e5);
        return this.index += e5, n3;
      }, t3.exports = o2;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./ArrayReader`), a2 = e4(r2(1468));
      function o2(e5) {
        i2[r2(906)](this, e5);
      }
      a2.inherits(o2, i2), o2.prototype.readData = function(e5) {
        var t4 = r2;
        if (this.checkOffset(e5), e5 === 0) return new Uint8Array();
        var n3 = this.data.subarray(this.zero + this.index, this.zero + this.index + e5);
        return this[t4(1004)] += e5, n3;
      }, t3[r2(952)] = o2;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(r2(1468)), a2 = e4(`../support`), o2 = e4(r2(760)), s2 = e4(`./StringReader`), c2 = e4(r2(1182)), l2 = e4(`./Uint8ArrayReader`);
      t3[r2(952)] = function(e5) {
        var t4 = i2[r2(1214)](e5);
        return i2.checkSupport(t4), t4 === `string` && !a2.uint8array ? new s2(e5) : t4 === `nodebuffer` ? new c2(e5) : a2.uint8array ? new l2(i2.transformTo(`uint8array`, e5)) : new o2(i2.transformTo(`array`, e5));
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e4, t3, n2) {
      var r2 = $;
      n2.LOCAL_FILE_HEADER = `PK`, n2.CENTRAL_FILE_HEADER = r2(1437), n2.CENTRAL_DIRECTORY_END = `PK`, n2.ZIP64_CENTRAL_DIRECTORY_LOCATOR = `PK\x07`, n2.ZIP64_CENTRAL_DIRECTORY_END = r2(1392), n2[r2(862)] = `PK\x07\b`;
    }, {}], 24: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./GenericWorker`), a2 = e4(`../utils`);
      function o2(e5) {
        i2.call(this, `ConvertWorker to ` + e5), this.destType = e5;
      }
      a2.inherits(o2, i2), o2.prototype.processChunk = function(e5) {
        var t4 = $;
        this.push({ data: a2[t4(866)](this[t4(1323)], e5.data), meta: e5.meta });
      }, t3[r2(952)] = o2;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e4, t3, n2) {
      var r2 = e4(`./GenericWorker`), i2 = e4(`../crc32`), a2 = e4(`../utils`);
      function o2() {
        var e5 = $;
        r2.call(this, e5(365)), this.withStreamInfo(`crc32`, 0);
      }
      a2.inherits(o2, r2), o2.prototype.processChunk = function(e5) {
        var t4 = $;
        this[t4(1139)][t4(456)] = i2(e5.data, this[t4(1139)].crc32 || 0), this.push(e5);
      }, t3.exports = o2;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`../utils`), a2 = e4(`./GenericWorker`);
      function o2(e5) {
        a2.call(this, `DataLengthProbe for ` + e5), this.propName = e5, this.withStreamInfo(e5, 0);
      }
      i2.inherits(o2, a2), o2.prototype[r2(1020)] = function(e5) {
        var t4 = r2;
        if (e5) {
          var n3 = this[t4(1139)][this.propName] || 0;
          this.streamInfo[this[t4(669)]] = n3 + e5.data.length;
        }
        a2[t4(427)].processChunk.call(this, e5);
      }, t3[r2(952)] = o2;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`../utils`), a2 = e4(`./GenericWorker`), o2 = 16 * 1024;
      function s2(e5) {
        var t4 = $;
        a2.call(this, t4(1280));
        var n3 = this;
        this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this[t4(447)] = ``, this[t4(1132)] = false, e5[t4(631)](function(e6) {
          var r3 = t4;
          n3.dataIsReady = true, n3.data = e6, n3[r3(776)] = e6 && e6.length || 0, n3.type = i2[r3(1214)](e6), n3.isPaused || n3._tickAndRepeat();
        }, function(e6) {
          n3[t4(1018)](e6);
        });
      }
      i2[r2(412)](s2, a2), s2.prototype.cleanUp = function() {
        a2.prototype.cleanUp.call(this), this.data = null;
      }, s2.prototype.resume = function() {
        return a2.prototype.resume.call(this) ? (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, i2.delay(this._tickAndRepeat, [], this)), true) : false;
      }, s2.prototype[r2(1193)] = function() {
        this._tickScheduled = false, !(this.isPaused || this.isFinished) && (this._tick(), this.isFinished || (i2.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
      }, s2.prototype._tick = function() {
        var e5 = r2;
        if (this.isPaused || this.isFinished) return false;
        var t4 = o2, n3 = null, i3 = Math.min(this.max, this.index + t4);
        if (this[e5(1004)] >= this.max) return this[e5(1276)]();
        switch (this[e5(447)]) {
          case `string`:
            n3 = this.data[e5(522)](this.index, i3);
            break;
          case `uint8array`:
            n3 = this[e5(1014)][e5(1029)](this.index, i3);
            break;
          case e5(803):
          case `nodebuffer`:
            n3 = this.data.slice(this.index, i3);
            break;
        }
        return this.index = i3, this.push({ data: n3, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, t3.exports = s2;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e4, t3, n2) {
      var r2 = $;
      function i2(e5) {
        var t4 = $;
        this.name = e5 || `default`, this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this[t4(585)] = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      i2[r2(427)] = { push: function(e5) {
        this.emit(`data`, e5);
      }, end: function() {
        var e5 = r2;
        if (this.isFinished) return false;
        this[e5(450)]();
        try {
          this[e5(1396)](e5(1276)), this.cleanUp(), this.isFinished = true;
        } catch (e6) {
          this.emit(`error`, e6);
        }
        return true;
      }, error: function(e5) {
        var t4 = r2;
        return this.isFinished ? false : (this.isPaused ? this[t4(1140)] = e5 : (this.isFinished = true, this.emit(`error`, e5), this.previous && this.previous[t4(1018)](e5), this.cleanUp()), true);
      }, on: function(e5, t4) {
        return this._listeners[e5].push(t4), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(e5, t4) {
        var n3 = r2;
        if (this._listeners[e5]) for (var i3 = 0; i3 < this[n3(841)][e5].length; i3++) this[n3(841)][e5][i3].call(this, t4);
      }, pipe: function(e5) {
        return e5.registerPrevious(this);
      }, registerPrevious: function(e5) {
        var t4 = r2;
        if (this.isLocked) throw Error(t4(1387) + this + `' has already been used.`);
        this[t4(1139)] = e5.streamInfo, this.mergeStreamInfo(), this.previous = e5;
        var n3 = this;
        return e5.on(`data`, function(e6) {
          n3.processChunk(e6);
        }), e5.on(`end`, function() {
          n3[t4(1276)]();
        }), e5.on(`error`, function(e6) {
          n3.error(e6);
        }), this;
      }, pause: function() {
        var e5 = r2;
        return this.isPaused || this[e5(666)] ? false : (this.isPaused = true, this.previous && this.previous.pause(), true);
      }, resume: function() {
        var e5 = r2;
        if (!this.isPaused || this.isFinished) return false;
        this.isPaused = false;
        var t4 = false;
        return this[e5(1140)] && (this.error(this.generatedError), t4 = true), this[e5(611)] && this.previous[e5(1169)](), !t4;
      }, flush: function() {
      }, processChunk: function(e5) {
        this.push(e5);
      }, withStreamInfo: function(e5, t4) {
        return this.extraStreamInfo[e5] = t4, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        var e5 = r2;
        for (var t4 in this.extraStreamInfo) Object[e5(427)].hasOwnProperty.call(this.extraStreamInfo, t4) && (this[e5(1139)][t4] = this.extraStreamInfo[t4]);
      }, lock: function() {
        var e5 = r2;
        if (this.isLocked) throw Error(`The stream '` + this + `' has already been used.`);
        this.isLocked = true, this.previous && this[e5(611)].lock();
      }, toString: function() {
        var e5 = `Worker ` + this.name;
        return this.previous ? this.previous + ` -> ` + e5 : e5;
      } }, t3.exports = i2;
    }, {}], 29: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`../utils`), a2 = e4(r2(1208)), o2 = e4(`./GenericWorker`), s2 = e4(`../base64`), c2 = e4(`../support`), l2 = e4(r2(596)), u2 = null;
      if (c2[r2(1328)]) try {
        u2 = e4(`../nodejs/NodejsStreamOutputAdapter`);
      } catch {
      }
      function d2(e5, t4, n3) {
        var a3 = r2;
        switch (e5) {
          case a3(417):
            return i2.newBlob(i2.transformTo(`arraybuffer`, t4), n3);
          case a3(1363):
            return s2[a3(875)](t4);
          default:
            return i2.transformTo(e5, t4);
        }
      }
      function f2(e5, t4) {
        var n3 = r2, i3, a3 = 0, o3 = null, s3 = 0;
        for (i3 = 0; i3 < t4.length; i3++) s3 += t4[i3].length;
        switch (e5) {
          case n3(784):
            return t4.join(``);
          case `array`:
            return Array.prototype.concat.apply([], t4);
          case n3(1257):
            for (o3 = new Uint8Array(s3), i3 = 0; i3 < t4.length; i3++) o3.set(t4[i3], a3), a3 += t4[i3].length;
            return o3;
          case `nodebuffer`:
            return Buffer[n3(829)](t4);
          default:
            throw Error(`concat : unsupported type '` + e5 + `'`);
        }
      }
      function p2(e5, t4) {
        var n3 = r2;
        return new l2[n3(1255)](function(r3, i3) {
          var a3 = n3, o3 = [], s3 = e5[a3(629)], c3 = e5._outputType, l3 = e5._mimeType;
          e5.on(`data`, function(e6, n4) {
            o3[a3(1386)](e6), t4 && t4(n4);
          }).on(a3(1018), function(e6) {
            o3 = [], i3(e6);
          }).on(a3(1276), function() {
            try {
              r3(d2(c3, f2(s3, o3), l3));
            } catch (e6) {
              i3(e6);
            }
            o3 = [];
          }).resume();
        });
      }
      function m2(e5, t4, n3) {
        var s3 = r2, c3 = t4;
        switch (t4) {
          case `blob`:
          case `arraybuffer`:
            c3 = s3(1257);
            break;
          case `base64`:
            c3 = `string`;
            break;
        }
        try {
          this[s3(629)] = c3, this._outputType = t4, this._mimeType = n3, i2.checkSupport(c3), this._worker = e5.pipe(new a2(c3)), e5.lock();
        } catch (e6) {
          this[s3(1254)] = new o2(`error`), this._worker.error(e6);
        }
      }
      m2.prototype = { accumulate: function(e5) {
        return p2(this, e5);
      }, on: function(e5, t4) {
        var n3 = this;
        return e5 === `data` ? this._worker.on(e5, function(e6) {
          t4[$(906)](n3, e6.data, e6.meta);
        }) : this._worker.on(e5, function() {
          i2[$(421)](t4, arguments, n3);
        }), this;
      }, resume: function() {
        return i2.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        var e5 = r2;
        return this[e5(1254)].pause(), this;
      }, toNodejsStream: function(e5) {
        var t4 = r2;
        if (i2.checkSupport(`nodestream`), this._outputType !== t4(486)) throw Error(this[t4(1373)] + t4(942));
        return new u2(this, { objectMode: this._outputType !== `nodebuffer` }, e5);
      } }, t3.exports = m2;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e4, t3, n2) {
      var r2 = $;
      if (n2[r2(1363)] = true, n2.array = true, n2.string = true, n2[r2(1038)] = typeof ArrayBuffer < `u` && typeof Uint8Array < `u`, n2.nodebuffer = typeof Buffer < `u`, n2.uint8array = typeof Uint8Array < `u`, typeof ArrayBuffer > `u`) n2.blob = false;
      else {
        var i2 = new ArrayBuffer(0);
        try {
          n2.blob = new Blob([i2], { type: r2(374) }).size === 0;
        } catch {
          try {
            var a2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self[r2(1381)])();
            a2.append(i2), n2.blob = a2.getBlob(`application/zip`).size === 0;
          } catch {
            n2.blob = false;
          }
        }
      }
      try {
        n2.nodestream = !!e4(`readable-stream`).Readable;
      } catch {
        n2.nodestream = false;
      }
    }, { "readable-stream": 16 }], 31: [function(e4, t3, n2) {
      for (var r2 = $, i2 = e4(r2(1393)), a2 = e4(`./support`), o2 = e4(`./nodejsUtils`), s2 = e4(`./stream/GenericWorker`), c2 = Array(256), l2 = 0; l2 < 256; l2++) c2[l2] = l2 >= 252 ? 6 : l2 >= 248 ? 5 : l2 >= 240 ? 4 : l2 >= 224 ? 3 : l2 >= 192 ? 2 : 1;
      c2[254] = c2[254] = 1;
      var u2 = function(e5) {
        var t4, n3, r3, i3, o3, s3 = e5.length, c3 = 0;
        for (i3 = 0; i3 < s3; i3++) n3 = e5.charCodeAt(i3), (n3 & 64512) == 55296 && i3 + 1 < s3 && (r3 = e5.charCodeAt(i3 + 1), (r3 & 64512) == 56320 && (n3 = 65536 + (n3 - 55296 << 10) + (r3 - 56320), i3++)), c3 += n3 < 128 ? 1 : n3 < 2048 ? 2 : n3 < 65536 ? 3 : 4;
        for (t4 = a2.uint8array ? new Uint8Array(c3) : Array(c3), o3 = 0, i3 = 0; o3 < c3; i3++) n3 = e5.charCodeAt(i3), (n3 & 64512) == 55296 && i3 + 1 < s3 && (r3 = e5.charCodeAt(i3 + 1), (r3 & 64512) == 56320 && (n3 = 65536 + (n3 - 55296 << 10) + (r3 - 56320), i3++)), n3 < 128 ? t4[o3++] = n3 : n3 < 2048 ? (t4[o3++] = 192 | n3 >>> 6, t4[o3++] = 128 | n3 & 63) : n3 < 65536 ? (t4[o3++] = 224 | n3 >>> 12, t4[o3++] = 128 | n3 >>> 6 & 63, t4[o3++] = 128 | n3 & 63) : (t4[o3++] = 240 | n3 >>> 18, t4[o3++] = 128 | n3 >>> 12 & 63, t4[o3++] = 128 | n3 >>> 6 & 63, t4[o3++] = 128 | n3 & 63);
        return t4;
      }, d2 = function(e5, t4) {
        var n3 = r2, i3;
        for (t4 || (t4 = e5.length), t4 > e5.length && (t4 = e5[n3(587)]), i3 = t4 - 1; i3 >= 0 && (e5[i3] & 192) == 128; ) i3--;
        return i3 < 0 || i3 === 0 ? t4 : i3 + c2[e5[i3]] > t4 ? i3 : t4;
      }, f2 = function(e5) {
        var t4 = r2, n3, a3, o3, s3, l3 = e5.length, u3 = Array(l3 * 2);
        for (a3 = 0, n3 = 0; n3 < l3; ) {
          if (o3 = e5[n3++], o3 < 128) {
            u3[a3++] = o3;
            continue;
          }
          if (s3 = c2[o3], s3 > 4) {
            u3[a3++] = 65533, n3 += s3 - 1;
            continue;
          }
          for (o3 &= s3 === 2 ? 31 : s3 === 3 ? 15 : 7; s3 > 1 && n3 < l3; ) o3 = o3 << 6 | e5[n3++] & 63, s3--;
          if (s3 > 1) {
            u3[a3++] = 65533;
            continue;
          }
          o3 < 65536 ? u3[a3++] = o3 : (o3 -= 65536, u3[a3++] = 55296 | o3 >> 10 & 1023, u3[a3++] = 56320 | o3 & 1023);
        }
        return u3[t4(587)] !== a3 && (u3[t4(1029)] ? u3 = u3.subarray(0, a3) : u3.length = a3), i2.applyFromCharCode(u3);
      };
      n2[r2(1260)] = function(e5) {
        var t4 = r2;
        return a2.nodebuffer ? o2.newBufferFrom(e5, t4(1183)) : u2(e5);
      }, n2[r2(1290)] = function(e5) {
        var t4 = r2;
        return a2.nodebuffer ? i2.transformTo(`nodebuffer`, e5).toString(`utf-8`) : (e5 = i2.transformTo(a2[t4(1257)] ? `uint8array` : t4(803), e5), f2(e5));
      };
      function p2() {
        s2.call(this, `utf-8 decode`), this.leftOver = null;
      }
      i2.inherits(p2, s2), p2.prototype.processChunk = function(e5) {
        var t4 = r2, o3 = i2.transformTo(a2.uint8array ? `uint8array` : `array`, e5.data);
        if (this.leftOver && this.leftOver.length) {
          if (a2.uint8array) {
            var s3 = o3;
            o3 = new Uint8Array(s3.length + this.leftOver[t4(587)]), o3.set(this.leftOver, 0), o3.set(s3, this.leftOver[t4(587)]);
          } else o3 = this.leftOver[t4(829)](o3);
          this[t4(552)] = null;
        }
        var c3 = d2(o3), l3 = o3;
        c3 !== o3.length && (a2.uint8array ? (l3 = o3.subarray(0, c3), this[t4(552)] = o3.subarray(c3, o3.length)) : (l3 = o3[t4(1006)](0, c3), this.leftOver = o3[t4(1006)](c3, o3.length))), this.push({ data: n2.utf8decode(l3), meta: e5.meta });
      }, p2.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: n2.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, n2.Utf8DecodeWorker = p2;
      function m2() {
        s2.call(this, `utf-8 encode`);
      }
      i2[r2(412)](m2, s2), m2.prototype.processChunk = function(e5) {
        var t4 = r2;
        this.push({ data: n2.utf8encode(e5[t4(1014)]), meta: e5.meta });
      }, n2.Utf8EncodeWorker = m2;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./support`), a2 = e4(r2(680)), o2 = e4(r2(1364)), s2 = e4(`./external`);
      e4(r2(378));
      function c2(e5) {
        var t4 = r2, n3 = null;
        return n3 = i2[t4(1257)] ? new Uint8Array(e5.length) : Array(e5.length), u2(e5, n3);
      }
      n2[r2(1426)] = function(e5, t4) {
        var i3 = r2;
        n2.checkSupport(`blob`);
        try {
          return new Blob([e5], { type: t4 });
        } catch {
          try {
            var a3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self[i3(1234)] || self.MSBlobBuilder)();
            return a3.append(e5), a3.getBlob(t4);
          } catch {
            throw Error(`Bug : can't construct the Blob.`);
          }
        }
      };
      function l2(e5) {
        return e5;
      }
      function u2(e5, t4) {
        for (var n3 = r2, i3 = 0; i3 < e5.length; ++i3) t4[i3] = e5[n3(1429)](i3) & 255;
        return t4;
      }
      var d2 = { stringifyByChunk: function(e5, t4, n3) {
        var i3 = r2, a3 = [], o3 = 0, s3 = e5.length;
        if (s3 <= n3) return String.fromCharCode.apply(null, e5);
        for (; o3 < s3; ) t4 === `array` || t4 === `nodebuffer` ? a3[i3(1386)](String.fromCharCode[i3(1445)](null, e5.slice(o3, Math.min(o3 + n3, s3)))) : a3.push(String.fromCharCode.apply(null, e5.subarray(o3, Math.min(o3 + n3, s3)))), o3 += n3;
        return a3[i3(1470)](``);
      }, stringifyByChar: function(e5) {
        for (var t4 = ``, n3 = 0; n3 < e5.length; n3++) t4 += String.fromCharCode(e5[n3]);
        return t4;
      }, applyCanBeUsed: { uint8array: (function() {
        var e5 = r2;
        try {
          return i2[e5(1257)] && String.fromCharCode[e5(1445)](null, new Uint8Array(1)).length === 1;
        } catch {
          return false;
        }
      })(), nodebuffer: (function() {
        var e5 = r2;
        try {
          return i2[e5(486)] && String.fromCharCode[e5(1445)](null, o2[e5(1268)](1)).length === 1;
        } catch {
          return false;
        }
      })() } };
      function f2(e5) {
        var t4 = r2, i3 = 65536, a3 = n2.getTypeOf(e5), o3 = true;
        if (a3 === t4(1257) ? o3 = d2.applyCanBeUsed.uint8array : a3 === `nodebuffer` && (o3 = d2.applyCanBeUsed.nodebuffer), o3) for (; i3 > 1; ) try {
          return d2.stringifyByChunk(e5, a3, i3);
        } catch {
          i3 = Math[t4(974)](i3 / 2);
        }
        return d2[t4(993)](e5);
      }
      n2.applyFromCharCode = f2;
      function p2(e5, t4) {
        for (var n3 = 0; n3 < e5.length; n3++) t4[n3] = e5[n3];
        return t4;
      }
      var m2 = {};
      m2.string = { string: l2, array: function(e5) {
        return u2(e5, Array(e5.length));
      }, arraybuffer: function(e5) {
        var t4 = r2;
        return m2.string[t4(1257)](e5).buffer;
      }, uint8array: function(e5) {
        return u2(e5, new Uint8Array(e5.length));
      }, nodebuffer: function(e5) {
        return u2(e5, o2.allocBuffer(e5.length));
      } }, m2[r2(803)] = { string: f2, array: l2, arraybuffer: function(e5) {
        return new Uint8Array(e5).buffer;
      }, uint8array: function(e5) {
        return new Uint8Array(e5);
      }, nodebuffer: function(e5) {
        return o2.newBufferFrom(e5);
      } }, m2.arraybuffer = { string: function(e5) {
        return f2(new Uint8Array(e5));
      }, array: function(e5) {
        return p2(new Uint8Array(e5), Array(e5.byteLength));
      }, arraybuffer: l2, uint8array: function(e5) {
        return new Uint8Array(e5);
      }, nodebuffer: function(e5) {
        return o2.newBufferFrom(new Uint8Array(e5));
      } }, m2.uint8array = { string: f2, array: function(e5) {
        return p2(e5, Array(e5[r2(587)]));
      }, arraybuffer: function(e5) {
        return e5.buffer;
      }, uint8array: l2, nodebuffer: function(e5) {
        return o2.newBufferFrom(e5);
      } }, m2.nodebuffer = { string: f2, array: function(e5) {
        return p2(e5, Array(e5.length));
      }, arraybuffer: function(e5) {
        var t4 = r2;
        return m2.nodebuffer[t4(1257)](e5).buffer;
      }, uint8array: function(e5) {
        return p2(e5, new Uint8Array(e5.length));
      }, nodebuffer: l2 }, n2.transformTo = function(e5, t4) {
        return t4 || (t4 = ``), e5 ? (n2.checkSupport(e5), m2[n2.getTypeOf(t4)][e5](t4)) : t4;
      }, n2.resolve = function(e5) {
        for (var t4 = r2, n3 = e5[t4(1152)](`/`), i3 = [], a3 = 0; a3 < n3.length; a3++) {
          var o3 = n3[a3];
          o3 === `.` || o3 === `` && a3 !== 0 && a3 !== n3.length - 1 || (o3 === `..` ? i3.pop() : i3.push(o3));
        }
        return i3[t4(1470)](`/`);
      }, n2.getTypeOf = function(e5) {
        var t4 = r2;
        if (typeof e5 == `string`) return t4(784);
        if (Object.prototype.toString.call(e5) === `[object Array]`) return t4(803);
        if (i2.nodebuffer && o2.isBuffer(e5)) return `nodebuffer`;
        if (i2[t4(1257)] && e5 instanceof Uint8Array) return t4(1257);
        if (i2.arraybuffer && e5 instanceof ArrayBuffer) return `arraybuffer`;
      }, n2.checkSupport = function(e5) {
        if (!i2[e5.toLowerCase()]) throw Error(e5 + ` is not supported by this platform`);
      }, n2.MAX_VALUE_16BITS = 65535, n2.MAX_VALUE_32BITS = -1, n2.pretty = function(e5) {
        var t4 = r2, n3 = ``, i3, a3;
        for (a3 = 0; a3 < (e5 || ``).length; a3++) i3 = e5.charCodeAt(a3), n3 += `\\x` + (i3 < 16 ? `0` : ``) + i3[t4(1200)](16).toUpperCase();
        return n3;
      }, n2.delay = function(e5, t4, n3) {
        setImmediate(function() {
          e5[$(1445)](n3 || null, t4 || []);
        });
      }, n2.inherits = function(e5, t4) {
        var n3 = function() {
        };
        n3.prototype = t4.prototype, e5.prototype = new n3();
      }, n2.extend = function() {
        var e5 = {}, t4, n3;
        for (t4 = 0; t4 < arguments.length; t4++) for (n3 in arguments[t4]) Object.prototype.hasOwnProperty.call(arguments[t4], n3) && e5[n3] === void 0 && (e5[n3] = arguments[t4][n3]);
        return e5;
      }, n2.prepareContent = function(e5, t4, r3, o3, l3) {
        return s2.Promise.resolve(t4).then(function(e6) {
          var t5 = $;
          return i2.blob && (e6 instanceof Blob || [`[object File]`, `[object Blob]`].indexOf(Object.prototype.toString.call(e6)) !== -1) && typeof FileReader < `u` ? new s2[t5(1255)](function(t6, n3) {
            var r4 = new FileReader();
            r4.onload = function(e7) {
              var n4 = $;
              t6(e7.target[n4(718)]);
            }, r4.onerror = function(e7) {
              n3(e7.target.error);
            }, r4.readAsArrayBuffer(e6);
          }) : e6;
        }).then(function(t5) {
          var i3 = $, u3 = n2[i3(1214)](t5);
          return u3 ? (u3 === `arraybuffer` ? t5 = n2[i3(866)](`uint8array`, t5) : u3 === `string` && (l3 ? t5 = a2.decode(t5) : r3 && o3 !== true && (t5 = c2(t5))), t5) : s2[i3(1255)][i3(1220)](Error(i3(531) + e5 + `'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./reader/readerFor`), a2 = e4(r2(1393)), o2 = e4(`./signature`), s2 = e4(`./zipEntry`), c2 = e4(r2(1333));
      function l2(e5) {
        this.files = [], this.loadOptions = e5;
      }
      l2.prototype = { checkSignature: function(e5) {
        var t4 = r2;
        if (!this.reader[t4(1102)](e5)) {
          this.reader.index -= 4;
          var n3 = this.reader.readString(4);
          throw Error(`Corrupted zip or bug: unexpected signature (` + a2.pretty(n3) + `, expected ` + a2.pretty(e5) + `)`);
        }
      }, isSignature: function(e5, t4) {
        var n3 = r2, i3 = this.reader.index;
        this.reader.setIndex(e5);
        var a3 = this[n3(426)].readString(4) === t4;
        return this.reader.setIndex(i3), a3;
      }, readBlockEndOfCentral: function() {
        var e5 = r2;
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader[e5(515)](2), this[e5(956)] = this[e5(426)][e5(515)](2), this.centralDirRecords = this[e5(426)].readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this[e5(1474)] = this.reader.readInt(2);
        var t4 = this.reader.readData(this[e5(1474)]), n3 = c2[e5(1257)] ? `uint8array` : `array`, i3 = a2.transformTo(n3, t4);
        this[e5(752)] = this.loadOptions[e5(1301)](i3);
      }, readBlockZip64EndOfCentral: function() {
        var e5 = r2;
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader[e5(927)](4), this[e5(621)] = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this[e5(956)] = this.reader.readInt(8), this.centralDirRecords = this[e5(426)].readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var t4 = this[e5(961)] - 44, n3 = 0, i3, a3, o3; n3 < t4; ) i3 = this[e5(426)].readInt(2), a3 = this.reader.readInt(4), o3 = this.reader[e5(603)](a3), this.zip64ExtensibleData[i3] = { id: i3, length: a3, value: o3 };
      }, readBlockZip64EndOfCentralLocator: function() {
        var e5 = r2;
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader[e5(515)](4), this.disksCount > 1) throw Error(e5(613));
      }, readLocalFiles: function() {
        var e5 = r2, t4, n3;
        for (t4 = 0; t4 < this.files[e5(587)]; t4++) n3 = this.files[t4], this.reader.setIndex(n3.localHeaderOffset), this.checkSignature(o2.LOCAL_FILE_HEADER), n3.readLocalPart(this.reader), n3.handleUTF8(), n3.processAttributes();
      }, readCentralDir: function() {
        var e5 = r2, t4;
        for (this.reader.setIndex(this[e5(1334)]); this[e5(426)].readAndCheckSignature(o2.CENTRAL_FILE_HEADER); ) t4 = new s2({ zip64: this.zip64 }, this.loadOptions), t4[e5(973)](this.reader), this.files.push(t4);
        if (this[e5(831)] !== this.files.length && this[e5(831)] !== 0 && this.files[e5(587)] === 0) throw Error(`Corrupted zip or bug: expected ` + this.centralDirRecords + ` records in central dir, got ` + this[e5(1451)].length);
      }, readEndOfCentral: function() {
        var e5 = r2, t4 = this.reader[e5(1407)](o2.CENTRAL_DIRECTORY_END);
        if (t4 < 0) throw this.isSignature(0, o2[e5(1261)]) ? Error(`Corrupted zip: can't find end of central directory`) : Error(e5(1239));
        this.reader.setIndex(t4);
        var n3 = t4;
        if (this.checkSignature(o2[e5(836)]), this.readBlockEndOfCentral(), this[e5(621)] === a2.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a2.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a2[e5(1244)] || this.centralDirRecords === a2.MAX_VALUE_16BITS || this.centralDirSize === a2[e5(943)] || this[e5(1334)] === a2.MAX_VALUE_32BITS) {
          if (this.zip64 = true, t4 = this.reader.lastIndexOfSignature(o2.ZIP64_CENTRAL_DIRECTORY_LOCATOR), t4 < 0) throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);
          if (this.reader.setIndex(t4), this.checkSignature(o2.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this[e5(542)](this.relativeOffsetEndOfZip64CentralDir, o2.ZIP64_CENTRAL_DIRECTORY_END) && (this[e5(1078)] = this.reader.lastIndexOfSignature(o2.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);
          this[e5(426)][e5(1288)](this.relativeOffsetEndOfZip64CentralDir), this[e5(689)](o2.ZIP64_CENTRAL_DIRECTORY_END), this[e5(1103)]();
        }
        var i3 = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (i3 += 20, i3 += 12 + this.zip64EndOfCentralSize);
        var s3 = n3 - i3;
        if (s3 > 0) this[e5(542)](n3, o2.CENTRAL_FILE_HEADER) || (this.reader.zero = s3);
        else if (s3 < 0) throw Error(`Corrupted zip: missing ` + Math.abs(s3) + e5(441));
      }, prepareReader: function(e5) {
        var t4 = r2;
        this[t4(426)] = i2(e5);
      }, load: function(e5) {
        this.prepareReader(e5), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, t3[r2(952)] = l2;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./reader/readerFor`), a2 = e4(`./utils`), o2 = e4(r2(380)), s2 = e4(`./crc32`), c2 = e4(`./utf8`), l2 = e4(r2(562)), u2 = e4(`./support`), d2 = 0, f2 = 3, p2 = function(e5) {
        var t4 = r2;
        for (var n3 in l2) if (Object.prototype.hasOwnProperty[t4(906)](l2, n3) && l2[n3].magic === e5) return l2[n3];
        return null;
      };
      function m2(e5, t4) {
        this.options = e5, this.loadOptions = t4;
      }
      m2.prototype = { isEncrypted: function() {
        return (this.bitFlag & 1) == 1;
      }, useUTF8: function() {
        return (this.bitFlag & 2048) == 2048;
      }, readLocalPart: function(e5) {
        var t4 = r2, n3, i3;
        if (e5[t4(927)](22), this.fileNameLength = e5.readInt(2), i3 = e5.readInt(2), this.fileName = e5.readData(this.fileNameLength), e5[t4(927)](i3), this[t4(1072)] === -1 || this.uncompressedSize === -1) throw Error(t4(1385));
        if (n3 = p2(this.compressionMethod), n3 === null) throw Error(`Corrupted zip : compression ` + a2[t4(1434)](this[t4(1265)]) + t4(1167) + a2.transformTo(`string`, this[t4(1013)]) + `)`);
        this[t4(822)] = new o2(this.compressedSize, this[t4(608)], this[t4(456)], n3, e5.readData(this.compressedSize));
      }, readCentralPart: function(e5) {
        var t4 = r2;
        this.versionMadeBy = e5.readInt(2), e5.skip(2), this[t4(1418)] = e5.readInt(2), this[t4(1265)] = e5.readString(2), this.date = e5.readDate(), this.crc32 = e5[t4(515)](4), this[t4(1072)] = e5.readInt(4), this.uncompressedSize = e5.readInt(4);
        var n3 = e5.readInt(2);
        if (this.extraFieldsLength = e5.readInt(2), this.fileCommentLength = e5.readInt(2), this.diskNumberStart = e5.readInt(2), this[t4(1439)] = e5.readInt(2), this.externalFileAttributes = e5[t4(515)](4), this.localHeaderOffset = e5.readInt(4), this.isEncrypted()) throw Error(`Encrypted zip are not supported`);
        e5[t4(927)](n3), this.readExtraFields(e5), this.parseZIP64ExtraField(e5), this.fileComment = e5.readData(this.fileCommentLength);
      }, processAttributes: function() {
        var e5 = r2;
        this.unixPermissions = null, this[e5(497)] = null;
        var t4 = this.versionMadeBy >> 8;
        this.dir = !!(this.externalFileAttributes & 16), t4 === d2 && (this.dosPermissions = this[e5(968)] & 63), t4 === f2 && (this.unixPermissions = this[e5(968)] >> 16 & 65535), !this.dir && this.fileNameStr[e5(1006)](-1) === `/` && (this.dir = true);
      }, parseZIP64ExtraField: function() {
        var e5 = r2;
        if (this.extraFields[1]) {
          var t4 = i2(this.extraFields[1][e5(1225)]);
          this.uncompressedSize === a2.MAX_VALUE_32BITS && (this.uncompressedSize = t4.readInt(8)), this.compressedSize === a2[e5(943)] && (this.compressedSize = t4.readInt(8)), this.localHeaderOffset === a2.MAX_VALUE_32BITS && (this.localHeaderOffset = t4.readInt(8)), this.diskNumberStart === a2.MAX_VALUE_32BITS && (this.diskNumberStart = t4.readInt(4));
        }
      }, readExtraFields: function(e5) {
        var t4 = r2, n3 = e5.index + this.extraFieldsLength, i3, a3, o3;
        for (this.extraFields || (this.extraFields = {}); e5[t4(1004)] + 4 < n3; ) i3 = e5.readInt(2), a3 = e5.readInt(2), o3 = e5.readData(a3), this.extraFields[i3] = { id: i3, length: a3, value: o3 };
        e5.setIndex(n3);
      }, handleUTF8: function() {
        var e5 = r2, t4 = u2.uint8array ? `uint8array` : `array`;
        if (this.useUTF8()) this.fileNameStr = c2[e5(1290)](this[e5(1013)]), this.fileCommentStr = c2[e5(1290)](this.fileComment);
        else {
          var n3 = this[e5(654)]();
          if (n3 !== null) this.fileNameStr = n3;
          else {
            var i3 = a2.transformTo(t4, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(i3);
          }
          var o3 = this.findExtraFieldUnicodeComment();
          if (o3 !== null) this[e5(807)] = o3;
          else {
            var s3 = a2[e5(866)](t4, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(s3);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var e5 = r2, t4 = this.extraFields[28789];
        if (t4) {
          var n3 = i2(t4[e5(1225)]);
          return n3.readInt(1) !== 1 || s2(this[e5(1013)]) !== n3.readInt(4) ? null : c2.utf8decode(n3.readData(t4.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var e5 = r2, t4 = this.extraFields[25461];
        if (t4) {
          var n3 = i2(t4.value);
          return n3.readInt(1) !== 1 || s2(this[e5(857)]) !== n3.readInt(4) ? null : c2.utf8decode(n3.readData(t4[e5(587)] - 5));
        }
        return null;
      } }, t3.exports = m2;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./stream/StreamHelper`), a2 = e4(`./stream/DataWorker`), o2 = e4(`./utf8`), s2 = e4(r2(380)), c2 = e4(r2(1055)), l2 = function(e5, t4, n3) {
        var i3 = r2;
        this[i3(701)] = e5, this[i3(352)] = n3[i3(352)], this.date = n3.date, this.comment = n3[i3(1487)], this.unixPermissions = n3.unixPermissions, this.dosPermissions = n3.dosPermissions, this._data = t4, this._dataBinary = n3.binary, this.options = { compression: n3.compression, compressionOptions: n3.compressionOptions };
      };
      l2.prototype = { internalStream: function(e5) {
        var t4 = r2, n3 = null, a3 = t4(784);
        try {
          if (!e5) throw Error(`No output type specified.`);
          a3 = e5.toLowerCase();
          var s3 = a3 === `string` || a3 === `text`;
          (a3 === `binarystring` || a3 === `text`) && (a3 = `string`), n3 = this._decompressWorker();
          var l3 = !this._dataBinary;
          l3 && !s3 && (n3 = n3.pipe(new o2.Utf8EncodeWorker())), !l3 && s3 && (n3 = n3.pipe(new o2.Utf8DecodeWorker()));
        } catch (e6) {
          n3 = new c2(`error`), n3.error(e6);
        }
        return new i2(n3, a3, ``);
      }, async: function(e5, t4) {
        return this.internalStream(e5).accumulate(t4);
      }, nodeStream: function(e5, t4) {
        var n3 = r2;
        return this[n3(1438)](e5 || `nodebuffer`).toNodejsStream(t4);
      }, _compressWorker: function(e5, t4) {
        var n3 = r2;
        if (this._data instanceof s2 && this._data.compression.magic === e5.magic) return this._data.getCompressedWorker();
        var i3 = this[n3(653)]();
        return this[n3(1165)] || (i3 = i3.pipe(new o2.Utf8EncodeWorker())), s2.createWorkerFrom(i3, e5, t4);
      }, _decompressWorker: function() {
        var e5 = r2;
        return this[e5(355)] instanceof s2 ? this._data.getContentWorker() : this[e5(355)] instanceof c2 ? this._data : new a2(this._data);
      } };
      for (var u2 = [`asText`, r2(448), `asNodeBuffer`, `asUint8Array`, `asArrayBuffer`], d2 = function() {
        throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`);
      }, f2 = 0; f2 < u2.length; f2++) l2.prototype[u2[f2]] = d2;
      t3.exports = l2;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e4, t3, n2) {
      (function(e5) {
        var n3 = $, r2 = e5[n3(407)] || e5.WebKitMutationObserver, i2;
        if (r2) {
          var a2 = 0, o2 = new r2(d2), s2 = e5.document.createTextNode(``);
          o2.observe(s2, { characterData: true }), i2 = function() {
            var e6 = n3;
            s2[e6(1014)] = a2 = ++a2 % 2;
          };
        } else if (!e5.setImmediate && e5.MessageChannel !== void 0) {
          var c2 = new e5[n3(1048)]();
          c2.port1.onmessage = d2, i2 = function() {
            c2.port2.postMessage(0);
          };
        } else i2 = `document` in e5 && n3(1275) in e5[n3(502)].createElement(`script`) ? function() {
          var t4 = n3, r3 = e5.document.createElement(`script`);
          r3[t4(1275)] = function() {
            var e6 = t4;
            d2(), r3[e6(1275)] = null, r3.parentNode.removeChild(r3), r3 = null;
          }, e5.document[t4(1482)].appendChild(r3);
        } : function() {
          setTimeout(d2, 0);
        };
        var l2, u2 = [];
        function d2() {
          l2 = true;
          for (var e6, t4, n4 = u2.length; n4; ) {
            for (t4 = u2, u2 = [], e6 = -1; ++e6 < n4; ) t4[e6]();
            n4 = u2.length;
          }
          l2 = false;
        }
        t3.exports = f2;
        function f2(e6) {
          u2.push(e6) === 1 && !l2 && i2();
        }
      }).call(this, typeof global < `u` ? global : typeof self < `u` ? self : typeof window < `u` ? window : {});
    }, {}], 37: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`immediate`);
      function a2() {
      }
      var o2 = {}, s2 = [`REJECTED`], c2 = [`FULFILLED`], l2 = [`PENDING`];
      t3[r2(952)] = u2;
      function u2(e5) {
        if (typeof e5 != `function`) throw TypeError(`resolver must be a function`);
        this.state = l2, this.queue = [], this.outcome = void 0, e5 !== a2 && m2(this, e5);
      }
      u2.prototype.finally = function(e5) {
        var t4 = r2;
        if (typeof e5 != `function`) return this;
        var n3 = this.constructor;
        return this[t4(631)](i3, a3);
        function i3(t5) {
          function r3() {
            return t5;
          }
          return n3.resolve(e5()).then(r3);
        }
        function a3(t5) {
          function r3() {
            throw t5;
          }
          return n3.resolve(e5()).then(r3);
        }
      }, u2.prototype.catch = function(e5) {
        return this.then(null, e5);
      }, u2.prototype.then = function(e5, t4) {
        if (typeof e5 != r2(799) && this.state === c2 || typeof t4 != `function` && this.state === s2) return this;
        var n3 = new this.constructor(a2);
        return this.state === l2 ? this.queue.push(new d2(n3, e5, t4)) : f2(n3, this.state === c2 ? e5 : t4, this.outcome), n3;
      };
      function d2(e5, t4, n3) {
        this.promise = e5, typeof t4 == `function` && (this.onFulfilled = t4, this.callFulfilled = this.otherCallFulfilled), typeof n3 == `function` && (this.onRejected = n3, this.callRejected = this.otherCallRejected);
      }
      d2.prototype.callFulfilled = function(e5) {
        o2.resolve(this.promise, e5);
      }, d2[r2(427)].otherCallFulfilled = function(e5) {
        f2(this.promise, this.onFulfilled, e5);
      }, d2.prototype[r2(1135)] = function(e5) {
        o2[r2(1220)](this.promise, e5);
      }, d2.prototype.otherCallRejected = function(e5) {
        var t4 = r2;
        f2(this[t4(371)], this.onRejected, e5);
      };
      function f2(e5, t4, n3) {
        i2(function() {
          var r3;
          try {
            r3 = t4(n3);
          } catch (t5) {
            return o2.reject(e5, t5);
          }
          r3 === e5 ? o2.reject(e5, TypeError(`Cannot resolve promise with itself`)) : o2.resolve(e5, r3);
        });
      }
      o2[r2(550)] = function(e5, t4) {
        var n3 = r2, i3 = h2(p2, t4);
        if (i3.status === n3(1018)) return o2[n3(1220)](e5, i3.value);
        var a3 = i3.value;
        if (a3) m2(e5, a3);
        else {
          e5.state = c2, e5.outcome = t4;
          for (var s3 = -1, l3 = e5[n3(779)].length; ++s3 < l3; ) e5.queue[s3][n3(1266)](t4);
        }
        return e5;
      }, o2.reject = function(e5, t4) {
        e5.state = s2, e5.outcome = t4;
        for (var n3 = -1, r3 = e5.queue.length; ++n3 < r3; ) e5.queue[n3].callRejected(t4);
        return e5;
      };
      function p2(e5) {
        var t4 = r2, n3 = e5 && e5.then;
        if (e5 && (typeof e5 == t4(1086) || typeof e5 == t4(799)) && typeof n3 == `function`) return function() {
          n3[t4(1445)](e5, arguments);
        };
      }
      function m2(e5, t4) {
        var n3 = false;
        function r3(t5) {
          var r4 = $;
          n3 || (n3 = true, o2[r4(1220)](e5, t5));
        }
        function i3(t5) {
          n3 || (n3 = true, o2.resolve(e5, t5));
        }
        function a3() {
          t4(i3, r3);
        }
        var s3 = h2(a3);
        s3.status === `error` && r3(s3.value);
      }
      function h2(e5, t4) {
        var n3 = r2, i3 = {};
        try {
          i3.value = e5(t4), i3.status = `success`;
        } catch (e6) {
          i3.status = `error`, i3[n3(1225)] = e6;
        }
        return i3;
      }
      u2.resolve = g2;
      function g2(e5) {
        return e5 instanceof this ? e5 : o2.resolve(new this(a2), e5);
      }
      u2.reject = _2;
      function _2(e5) {
        var t4 = new this(a2);
        return o2.reject(t4, e5);
      }
      u2.all = v2;
      function v2(e5) {
        var t4 = r2, n3 = this;
        if (Object.prototype.toString.call(e5) !== `[object Array]`) return this[t4(1220)](TypeError(t4(1030)));
        var i3 = e5[t4(587)], s3 = false;
        if (!i3) return this.resolve([]);
        for (var c3 = Array(i3), l3 = 0, u3 = -1, d3 = new this(a2); ++u3 < i3; ) f3(e5[u3], u3);
        return d3;
        function f3(e6, r3) {
          var a3 = t4;
          n3.resolve(e6)[a3(631)](u4, function(e7) {
            var t5 = a3;
            s3 || (s3 = true, o2[t5(1220)](d3, e7));
          });
          function u4(e7) {
            var t5 = a3;
            c3[r3] = e7, ++l3 === i3 && !s3 && (s3 = true, o2[t5(550)](d3, c3));
          }
        }
      }
      u2.race = y2;
      function y2(e5) {
        var t4 = r2, n3 = this;
        if (Object.prototype[t4(1200)].call(e5) !== t4(1283)) return this.reject(TypeError(`must be an array`));
        var i3 = e5[t4(587)], s3 = false;
        if (!i3) return this.resolve([]);
        for (var c3 = -1, l3 = new this(a2); ++c3 < i3; ) u3(e5[c3]);
        return l3;
        function u3(e6) {
          var r3 = t4;
          n3.resolve(e6)[r3(631)](function(e7) {
            s3 || (s3 = true, o2.resolve(l3, e7));
          }, function(e7) {
            s3 || (s3 = true, o2.reject(l3, e7));
          });
        }
      }
    }, { immediate: 36 }], 38: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./lib/utils/common`).assign, a2 = e4(r2(577)), o2 = e4(`./lib/inflate`), s2 = e4(`./lib/zlib/constants`), c2 = {};
      i2(c2, a2, o2, s2), t3[r2(952)] = c2;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(r2(934)), a2 = e4(`./utils/common`), o2 = e4(`./utils/strings`), s2 = e4(`./zlib/messages`), c2 = e4(`./zlib/zstream`), l2 = Object.prototype.toString, u2 = 0, d2 = 4, f2 = 0, p2 = 1, m2 = 2, h2 = -1, g2 = 0, _2 = 8;
      function v2(e5) {
        var t4 = r2;
        if (!(this instanceof v2)) return new v2(e5);
        this.options = a2.assign({ level: h2, method: _2, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: g2, to: `` }, e5 || {});
        var n3 = this.options;
        n3[t4(385)] && n3.windowBits > 0 ? n3.windowBits = -n3.windowBits : n3.gzip && n3.windowBits > 0 && n3[t4(1377)] < 16 && (n3.windowBits += 16), this.err = 0, this.msg = ``, this[t4(1366)] = false, this.chunks = [], this.strm = new c2(), this[t4(549)].avail_out = 0;
        var u3 = i2[t4(849)](this.strm, n3.level, n3.method, n3.windowBits, n3.memLevel, n3.strategy);
        if (u3 !== f2) throw Error(s2[u3]);
        if (n3.header && i2.deflateSetHeader(this.strm, n3.header), n3.dictionary) {
          var d3 = typeof n3.dictionary == `string` ? o2.string2buf(n3.dictionary) : l2.call(n3.dictionary) === `[object ArrayBuffer]` ? new Uint8Array(n3.dictionary) : n3.dictionary;
          if (u3 = i2[t4(983)](this[t4(549)], d3), u3 !== f2) throw Error(s2[u3]);
          this._dict_set = true;
        }
      }
      v2.prototype.push = function(e5, t4) {
        var n3 = r2, s3 = this[n3(549)], c3 = this.options.chunkSize, h3, g3;
        if (this.ended) return false;
        g3 = t4 === ~~t4 ? t4 : t4 === true ? d2 : u2, typeof e5 == `string` ? s3.input = o2[n3(532)](e5) : l2.call(e5) === `[object ArrayBuffer]` ? s3.input = new Uint8Array(e5) : s3[n3(1315)] = e5, s3.next_in = 0, s3.avail_in = s3[n3(1315)][n3(587)];
        do {
          if (s3.avail_out === 0 && (s3[n3(915)] = new a2.Buf8(c3), s3.next_out = 0, s3[n3(798)] = c3), h3 = i2.deflate(s3, g3), h3 !== p2 && h3 !== f2) return this.onEnd(h3), this.ended = true, false;
          (s3[n3(798)] === 0 || s3.avail_in === 0 && (g3 === d2 || g3 === m2)) && (this[n3(910)].to === n3(784) ? this.onData(o2.buf2binstring(a2.shrinkBuf(s3.output, s3[n3(1349)]))) : this.onData(a2.shrinkBuf(s3.output, s3[n3(1349)])));
        } while ((s3[n3(539)] > 0 || s3.avail_out === 0) && h3 !== p2);
        return g3 === d2 ? (h3 = i2.deflateEnd(this.strm), this.onEnd(h3), this.ended = true, h3 === f2) : g3 === m2 ? (this.onEnd(f2), s3.avail_out = 0, true) : true;
      }, v2.prototype.onData = function(e5) {
        this.chunks.push(e5);
      }, v2.prototype.onEnd = function(e5) {
        var t4 = r2;
        e5 === f2 && (this.options.to === t4(784) ? this.result = this.chunks[t4(1470)](``) : this.result = a2.flattenChunks(this[t4(1341)])), this[t4(1341)] = [], this[t4(357)] = e5, this.msg = this[t4(549)].msg;
      };
      function y2(e5, t4) {
        var n3 = r2, i3 = new v2(t4);
        if (i3.push(e5, true), i3.err) throw i3.msg || s2[i3[n3(357)]];
        return i3.result;
      }
      function b2(e5, t4) {
        return t4 || (t4 = {}), t4.raw = true, y2(e5, t4);
      }
      function x2(e5, t4) {
        return t4 || (t4 = {}), t4.gzip = true, y2(e5, t4);
      }
      n2.Deflate = v2, n2.deflate = y2, n2.deflateRaw = b2, n2.gzip = x2;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`./zlib/inflate`), a2 = e4(r2(916)), o2 = e4(`./utils/strings`), s2 = e4(`./zlib/constants`), c2 = e4(`./zlib/messages`), l2 = e4(`./zlib/zstream`), u2 = e4(`./zlib/gzheader`), d2 = Object[r2(427)].toString;
      function f2(e5) {
        var t4 = r2;
        if (!(this instanceof f2)) return new f2(e5);
        this.options = a2.assign({ chunkSize: 16384, windowBits: 0, to: `` }, e5 || {});
        var n3 = this.options;
        n3.raw && n3.windowBits >= 0 && n3[t4(1377)] < 16 && (n3.windowBits = -n3.windowBits, n3.windowBits === 0 && (n3.windowBits = -15)), n3.windowBits >= 0 && n3.windowBits < 16 && !(e5 && e5.windowBits) && (n3[t4(1377)] += 32), n3.windowBits > 15 && n3.windowBits < 48 && (n3.windowBits & 15 || (n3[t4(1377)] |= 15)), this.err = 0, this.msg = ``, this[t4(1366)] = false, this[t4(1341)] = [], this.strm = new l2(), this.strm.avail_out = 0;
        var o3 = i2.inflateInit2(this[t4(549)], n3.windowBits);
        if (o3 !== s2.Z_OK) throw Error(c2[o3]);
        this.header = new u2(), i2.inflateGetHeader(this.strm, this.header);
      }
      f2.prototype.push = function(e5, t4) {
        var n3 = r2, c3 = this.strm, l3 = this.options.chunkSize, u3 = this.options.dictionary, f3, p3, m3, h2, g2, _2, v2 = false;
        if (this.ended) return false;
        p3 = t4 === ~~t4 ? t4 : t4 === true ? s2[n3(691)] : s2.Z_NO_FLUSH, typeof e5 == n3(784) ? c3.input = o2.binstring2buf(e5) : d2.call(e5) === `[object ArrayBuffer]` ? c3.input = new Uint8Array(e5) : c3.input = e5, c3.next_in = 0, c3.avail_in = c3.input.length;
        do {
          if (c3.avail_out === 0 && (c3.output = new a2.Buf8(l3), c3[n3(1349)] = 0, c3[n3(798)] = l3), f3 = i2[n3(1370)](c3, s2.Z_NO_FLUSH), f3 === s2.Z_NEED_DICT && u3 && (_2 = typeof u3 == `string` ? o2.string2buf(u3) : d2.call(u3) === `[object ArrayBuffer]` ? new Uint8Array(u3) : u3, f3 = i2.inflateSetDictionary(this[n3(549)], _2)), f3 === s2.Z_BUF_ERROR && v2 === true && (f3 = s2.Z_OK, v2 = false), f3 !== s2.Z_STREAM_END && f3 !== s2.Z_OK) return this[n3(600)](f3), this[n3(1366)] = true, false;
          c3.next_out && (c3.avail_out === 0 || f3 === s2.Z_STREAM_END || c3[n3(539)] === 0 && (p3 === s2.Z_FINISH || p3 === s2.Z_SYNC_FLUSH)) && (this.options.to === `string` ? (m3 = o2[n3(810)](c3.output, c3.next_out), h2 = c3[n3(1349)] - m3, g2 = o2[n3(954)](c3[n3(915)], m3), c3[n3(1349)] = h2, c3.avail_out = l3 - h2, h2 && a2.arraySet(c3.output, c3.output, m3, h2, 0), this.onData(g2)) : this.onData(a2.shrinkBuf(c3.output, c3.next_out))), c3.avail_in === 0 && c3.avail_out === 0 && (v2 = true);
        } while ((c3.avail_in > 0 || c3.avail_out === 0) && f3 !== s2[n3(919)]);
        return f3 === s2.Z_STREAM_END && (p3 = s2.Z_FINISH), p3 === s2.Z_FINISH ? (f3 = i2.inflateEnd(this.strm), this.onEnd(f3), this.ended = true, f3 === s2.Z_OK) : p3 === s2[n3(1146)] ? (this.onEnd(s2.Z_OK), c3.avail_out = 0, true) : true;
      }, f2.prototype[r2(1291)] = function(e5) {
        this.chunks.push(e5);
      }, f2.prototype.onEnd = function(e5) {
        var t4 = r2;
        e5 === s2.Z_OK && (this.options.to === `string` ? this.result = this.chunks.join(``) : this[t4(718)] = a2[t4(888)](this.chunks)), this.chunks = [], this.err = e5, this.msg = this.strm.msg;
      };
      function p2(e5, t4) {
        var n3 = r2, i3 = new f2(t4);
        if (i3.push(e5, true), i3.err) throw i3[n3(1068)] || c2[i3.err];
        return i3[n3(718)];
      }
      function m2(e5, t4) {
        var n3 = r2;
        return t4 || (t4 = {}), t4[n3(385)] = true, p2(e5, t4);
      }
      n2[r2(1096)] = f2, n2.inflate = p2, n2.inflateRaw = m2, n2[r2(1478)] = p2;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e4, t3, n2) {
      var r2 = $, i2 = typeof Uint8Array < `u` && typeof Uint16Array < `u` && typeof Int32Array < `u`;
      n2[r2(1164)] = function(e5) {
        for (var t4 = r2, n3 = Array[t4(427)].slice[t4(906)](arguments, 1); n3[t4(587)]; ) {
          var i3 = n3.shift();
          if (i3) {
            if (typeof i3 != `object`) throw TypeError(i3 + t4(886));
            for (var a3 in i3) i3.hasOwnProperty(a3) && (e5[a3] = i3[a3]);
          }
        }
        return e5;
      }, n2.shrinkBuf = function(e5, t4) {
        return e5.length === t4 ? e5 : e5.subarray ? e5.subarray(0, t4) : (e5.length = t4, e5);
      };
      var a2 = { arraySet: function(e5, t4, n3, i3, a3) {
        var o3 = r2;
        if (t4[o3(1029)] && e5[o3(1029)]) {
          e5.set(t4.subarray(n3, n3 + i3), a3);
          return;
        }
        for (var s2 = 0; s2 < i3; s2++) e5[a3 + s2] = t4[n3 + s2];
      }, flattenChunks: function(e5) {
        var t4 = r2, n3, i3, a3 = 0, o3, s2, c2;
        for (n3 = 0, i3 = e5[t4(587)]; n3 < i3; n3++) a3 += e5[n3][t4(587)];
        for (c2 = new Uint8Array(a3), o3 = 0, n3 = 0, i3 = e5[t4(587)]; n3 < i3; n3++) s2 = e5[n3], c2.set(s2, o3), o3 += s2.length;
        return c2;
      } }, o2 = { arraySet: function(e5, t4, n3, r3, i3) {
        for (var a3 = 0; a3 < r3; a3++) e5[i3 + a3] = t4[n3 + a3];
      }, flattenChunks: function(e5) {
        return [].concat.apply([], e5);
      } };
      n2.setTyped = function(e5) {
        var t4 = r2;
        e5 ? (n2.Buf8 = Uint8Array, n2[t4(581)] = Uint16Array, n2.Buf32 = Int32Array, n2.assign(n2, a2)) : (n2.Buf8 = Array, n2.Buf16 = Array, n2.Buf32 = Array, n2.assign(n2, o2));
      }, n2.setTyped(i2);
    }, {}], 42: [function(e4, t3, n2) {
      var r2 = e4(`./common`), i2 = true, a2 = true;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        i2 = false;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        a2 = false;
      }
      for (var o2 = new r2.Buf8(256), s2 = 0; s2 < 256; s2++) o2[s2] = s2 >= 252 ? 6 : s2 >= 248 ? 5 : s2 >= 240 ? 4 : s2 >= 224 ? 3 : s2 >= 192 ? 2 : 1;
      o2[254] = o2[254] = 1, n2.string2buf = function(e5) {
        var t4 = $, n3, i3, a3, o3, s3, c3 = e5.length, l2 = 0;
        for (o3 = 0; o3 < c3; o3++) i3 = e5.charCodeAt(o3), (i3 & 64512) == 55296 && o3 + 1 < c3 && (a3 = e5.charCodeAt(o3 + 1), (a3 & 64512) == 56320 && (i3 = 65536 + (i3 - 55296 << 10) + (a3 - 56320), o3++)), l2 += i3 < 128 ? 1 : i3 < 2048 ? 2 : i3 < 65536 ? 3 : 4;
        for (n3 = new r2.Buf8(l2), s3 = 0, o3 = 0; s3 < l2; o3++) i3 = e5[t4(1429)](o3), (i3 & 64512) == 55296 && o3 + 1 < c3 && (a3 = e5.charCodeAt(o3 + 1), (a3 & 64512) == 56320 && (i3 = 65536 + (i3 - 55296 << 10) + (a3 - 56320), o3++)), i3 < 128 ? n3[s3++] = i3 : i3 < 2048 ? (n3[s3++] = 192 | i3 >>> 6, n3[s3++] = 128 | i3 & 63) : i3 < 65536 ? (n3[s3++] = 224 | i3 >>> 12, n3[s3++] = 128 | i3 >>> 6 & 63, n3[s3++] = 128 | i3 & 63) : (n3[s3++] = 240 | i3 >>> 18, n3[s3++] = 128 | i3 >>> 12 & 63, n3[s3++] = 128 | i3 >>> 6 & 63, n3[s3++] = 128 | i3 & 63);
        return n3;
      };
      function c2(e5, t4) {
        var n3 = $;
        if (t4 < 65537 && (e5.subarray && a2 || !e5[n3(1029)] && i2)) return String.fromCharCode.apply(null, r2.shrinkBuf(e5, t4));
        for (var o3 = ``, s3 = 0; s3 < t4; s3++) o3 += String.fromCharCode(e5[s3]);
        return o3;
      }
      n2.buf2binstring = function(e5) {
        return c2(e5, e5.length);
      }, n2.binstring2buf = function(e5) {
        for (var t4 = $, n3 = new r2.Buf8(e5.length), i3 = 0, a3 = n3[t4(587)]; i3 < a3; i3++) n3[i3] = e5.charCodeAt(i3);
        return n3;
      }, n2.buf2string = function(e5, t4) {
        var n3, r3, i3, a3, s3 = t4 || e5.length, l2 = Array(s3 * 2);
        for (r3 = 0, n3 = 0; n3 < s3; ) {
          if (i3 = e5[n3++], i3 < 128) {
            l2[r3++] = i3;
            continue;
          }
          if (a3 = o2[i3], a3 > 4) {
            l2[r3++] = 65533, n3 += a3 - 1;
            continue;
          }
          for (i3 &= a3 === 2 ? 31 : a3 === 3 ? 15 : 7; a3 > 1 && n3 < s3; ) i3 = i3 << 6 | e5[n3++] & 63, a3--;
          if (a3 > 1) {
            l2[r3++] = 65533;
            continue;
          }
          i3 < 65536 ? l2[r3++] = i3 : (i3 -= 65536, l2[r3++] = 55296 | i3 >> 10 & 1023, l2[r3++] = 56320 | i3 & 1023);
        }
        return c2(l2, r3);
      }, n2.utf8border = function(e5, t4) {
        var n3 = $, r3;
        for (t4 || (t4 = e5[n3(587)]), t4 > e5.length && (t4 = e5.length), r3 = t4 - 1; r3 >= 0 && (e5[r3] & 192) == 128; ) r3--;
        return r3 < 0 || r3 === 0 ? t4 : r3 + o2[e5[r3]] > t4 ? r3 : t4;
      };
    }, { "./common": 41 }], 43: [function(e4, t3, n2) {
      function r2(e5, t4, n3, r3) {
        for (var i2 = e5 & 65535 | 0, a2 = e5 >>> 16 & 65535 | 0, o2 = 0; n3 !== 0; ) {
          o2 = n3 > 2e3 ? 2e3 : n3, n3 -= o2;
          do
            i2 = i2 + t4[r3++] | 0, a2 = a2 + i2 | 0;
          while (--o2);
          i2 %= 65521, a2 %= 65521;
        }
        return i2 | a2 << 16 | 0;
      }
      t3.exports = r2;
    }, {}], 44: [function(e4, t3, n2) {
      t3.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e4, t3, n2) {
      var r2 = $;
      function i2() {
        for (var e5, t4 = [], n3 = 0; n3 < 256; n3++) {
          e5 = n3;
          for (var r3 = 0; r3 < 8; r3++) e5 = e5 & 1 ? 3988292384 ^ e5 >>> 1 : e5 >>> 1;
          t4[n3] = e5;
        }
        return t4;
      }
      var a2 = i2();
      function o2(e5, t4, n3, r3) {
        var i3 = a2, o3 = r3 + n3;
        e5 ^= -1;
        for (var s2 = r3; s2 < o3; s2++) e5 = e5 >>> 8 ^ i3[(e5 ^ t4[s2]) & 255];
        return e5 ^ -1;
      }
      t3[r2(952)] = o2;
    }, {}], 46: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(`../utils/common`), a2 = e4(`./trees`), o2 = e4(`./adler32`), s2 = e4(`./crc32`), c2 = e4(`./messages`), l2 = 0, u2 = 1, d2 = 3, f2 = 4, p2 = 5, m2 = 0, h2 = 1, g2 = -2, _2 = -3, v2 = -5, y2 = -1, b2 = 1, x2 = 2, S2 = 3, C2 = 4, w2 = 0, T2 = 2, E2 = 8, D2 = 9, O2 = 15, k2 = 8, A2 = 286, j2 = 30, M2 = 19, N2 = 2 * A2 + 1, ee2 = 15, P2 = 3, F2 = 258, I2 = F2 + P2 + 1, L2 = 32, te2 = 42, ne2 = 69, re2 = 73, R2 = 91, ie2 = 103, ae2 = 113, oe2 = 666, z2 = 1, se2 = 2, ce2 = 3, le2 = 4, ue2 = 3;
      function de2(e5, t4) {
        return e5.msg = c2[t4], t4;
      }
      function B2(e5) {
        return (e5 << 1) - (e5 > 4 ? 9 : 0);
      }
      function fe2(e5) {
        for (var t4 = e5[$(587)]; --t4 >= 0; ) e5[t4] = 0;
      }
      function pe2(e5) {
        var t4 = $, n3 = e5.state, r3 = n3[t4(951)];
        r3 > e5[t4(798)] && (r3 = e5[t4(798)]), r3 !== 0 && (i2[t4(405)](e5.output, n3[t4(1456)], n3.pending_out, r3, e5.next_out), e5[t4(1349)] += r3, n3.pending_out += r3, e5.total_out += r3, e5[t4(798)] -= r3, n3[t4(951)] -= r3, n3.pending === 0 && (n3[t4(692)] = 0));
      }
      function V2(e5, t4) {
        var n3 = $;
        a2[n3(674)](e5, e5.block_start >= 0 ? e5.block_start : -1, e5.strstart - e5.block_start, t4), e5.block_start = e5[n3(1423)], pe2(e5.strm);
      }
      function H2(e5, t4) {
        e5.pending_buf[e5.pending++] = t4;
      }
      function me2(e5, t4) {
        e5.pending_buf[e5.pending++] = t4 >>> 8 & 255, e5.pending_buf[e5.pending++] = t4 & 255;
      }
      function he2(e5, t4, n3, r3) {
        var a3 = $, c3 = e5[a3(539)];
        return c3 > r3 && (c3 = r3), c3 === 0 ? 0 : (e5.avail_in -= c3, i2.arraySet(t4, e5.input, e5[a3(1324)], c3, n3), e5.state.wrap === 1 ? e5.adler = o2(e5.adler, t4, c3, n3) : e5.state.wrap === 2 && (e5.adler = s2(e5[a3(518)], t4, c3, n3)), e5.next_in += c3, e5.total_in += c3, c3);
      }
      function U2(e5, t4) {
        var n3 = $, r3 = e5.max_chain_length, i3 = e5.strstart, a3, o3, s3 = e5.prev_length, c3 = e5.nice_match, l3 = e5.strstart > e5[n3(1241)] - I2 ? e5.strstart - (e5.w_size - I2) : 0, u3 = e5.window, d3 = e5.w_mask, f3 = e5.prev, p3 = e5.strstart + F2, m3 = u3[i3 + s3 - 1], h3 = u3[i3 + s3];
        e5[n3(1189)] >= e5.good_match && (r3 >>= 2), c3 > e5[n3(812)] && (c3 = e5.lookahead);
        do {
          if (a3 = t4, u3[a3 + s3] !== h3 || u3[a3 + s3 - 1] !== m3 || u3[a3] !== u3[i3] || u3[++a3] !== u3[i3 + 1]) continue;
          i3 += 2, a3++;
          do
            ;
          while (u3[++i3] === u3[++a3] && u3[++i3] === u3[++a3] && u3[++i3] === u3[++a3] && u3[++i3] === u3[++a3] && u3[++i3] === u3[++a3] && u3[++i3] === u3[++a3] && u3[++i3] === u3[++a3] && u3[++i3] === u3[++a3] && i3 < p3);
          if (o3 = F2 - (p3 - i3), i3 = p3 - F2, o3 > s3) {
            if (e5.match_start = t4, s3 = o3, o3 >= c3) break;
            m3 = u3[i3 + s3 - 1], h3 = u3[i3 + s3];
          }
        } while ((t4 = f3[t4 & d3]) > l3 && --r3 !== 0);
        return s3 <= e5.lookahead ? s3 : e5.lookahead;
      }
      function ge2(e5) {
        var t4 = $, n3 = e5[t4(1241)], r3, a3, o3, s3, c3;
        do {
          if (s3 = e5[t4(909)] - e5.lookahead - e5.strstart, e5.strstart >= n3 + (n3 - I2)) {
            i2.arraySet(e5.window, e5.window, n3, n3, 0), e5[t4(1492)] -= n3, e5.strstart -= n3, e5.block_start -= n3, a3 = e5.hash_size, r3 = a3;
            do
              o3 = e5.head[--r3], e5.head[r3] = o3 >= n3 ? o3 - n3 : 0;
            while (--a3);
            a3 = n3, r3 = a3;
            do
              o3 = e5.prev[--r3], e5.prev[r3] = o3 >= n3 ? o3 - n3 : 0;
            while (--a3);
            s3 += n3;
          }
          if (e5.strm.avail_in === 0) break;
          if (a3 = he2(e5[t4(549)], e5.window, e5.strstart + e5.lookahead, s3), e5.lookahead += a3, e5.lookahead + e5.insert >= P2) for (c3 = e5.strstart - e5.insert, e5.ins_h = e5.window[c3], e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[c3 + 1]) & e5.hash_mask; e5.insert && (e5[t4(1191)] = (e5.ins_h << e5[t4(774)] ^ e5.window[c3 + P2 - 1]) & e5.hash_mask, e5[t4(1121)][c3 & e5.w_mask] = e5[t4(1277)][e5[t4(1191)]], e5.head[e5.ins_h] = c3, c3++, e5[t4(860)]--, !(e5.lookahead + e5.insert < P2)); ) ;
        } while (e5.lookahead < I2 && e5.strm.avail_in !== 0);
      }
      function W2(e5, t4) {
        var n3 = $, r3 = 65535;
        for (r3 > e5.pending_buf_size - 5 && (r3 = e5.pending_buf_size - 5); ; ) {
          if (e5[n3(812)] <= 1) {
            if (ge2(e5), e5.lookahead === 0 && t4 === l2) return z2;
            if (e5[n3(812)] === 0) break;
          }
          e5[n3(1423)] += e5.lookahead, e5.lookahead = 0;
          var i3 = e5.block_start + r3;
          if ((e5[n3(1423)] === 0 || e5.strstart >= i3) && (e5.lookahead = e5[n3(1423)] - i3, e5.strstart = i3, V2(e5, false), e5[n3(549)].avail_out === 0) || e5[n3(1423)] - e5.block_start >= e5.w_size - I2 && (V2(e5, false), e5.strm.avail_out === 0)) return z2;
        }
        return e5.insert = 0, t4 === f2 ? (V2(e5, true), e5.strm.avail_out === 0 ? ce2 : le2) : (e5.strstart > e5.block_start && (V2(e5, false), e5.strm[n3(798)]), z2);
      }
      function G2(e5, t4) {
        for (var n3 = $, r3, i3; ; ) {
          if (e5.lookahead < I2) {
            if (ge2(e5), e5[n3(812)] < I2 && t4 === l2) return z2;
            if (e5[n3(812)] === 0) break;
          }
          if (r3 = 0, e5.lookahead >= P2 && (e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + P2 - 1]) & e5.hash_mask, r3 = e5[n3(1121)][e5.strstart & e5.w_mask] = e5.head[e5.ins_h], e5.head[e5[n3(1191)]] = e5.strstart), r3 !== 0 && e5[n3(1423)] - r3 <= e5.w_size - I2 && (e5.match_length = U2(e5, r3)), e5.match_length >= P2) if (i3 = a2._tr_tally(e5, e5.strstart - e5.match_start, e5.match_length - P2), e5[n3(812)] -= e5.match_length, e5[n3(759)] <= e5.max_lazy_match && e5[n3(812)] >= P2) {
            e5.match_length--;
            do
              e5[n3(1423)]++, e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + P2 - 1]) & e5[n3(473)], r3 = e5.prev[e5.strstart & e5.w_mask] = e5[n3(1277)][e5.ins_h], e5[n3(1277)][e5.ins_h] = e5[n3(1423)];
            while (--e5.match_length !== 0);
            e5.strstart++;
          } else e5[n3(1423)] += e5.match_length, e5.match_length = 0, e5.ins_h = e5.window[e5.strstart], e5.ins_h = (e5[n3(1191)] << e5.hash_shift ^ e5.window[e5.strstart + 1]) & e5.hash_mask;
          else i3 = a2._tr_tally(e5, 0, e5[n3(688)][e5[n3(1423)]]), e5.lookahead--, e5.strstart++;
          if (i3 && (V2(e5, false), e5[n3(549)].avail_out === 0)) return z2;
        }
        return e5.insert = e5.strstart < P2 - 1 ? e5[n3(1423)] : P2 - 1, t4 === f2 ? (V2(e5, true), e5.strm[n3(798)] === 0 ? ce2 : le2) : e5.last_lit && (V2(e5, false), e5.strm.avail_out === 0) ? z2 : se2;
      }
      function K2(e5, t4) {
        for (var n3 = $, r3, i3, o3; ; ) {
          if (e5.lookahead < I2) {
            if (ge2(e5), e5.lookahead < I2 && t4 === l2) return z2;
            if (e5.lookahead === 0) break;
          }
          if (r3 = 0, e5.lookahead >= P2 && (e5.ins_h = (e5.ins_h << e5.hash_shift ^ e5.window[e5.strstart + P2 - 1]) & e5[n3(473)], r3 = e5.prev[e5.strstart & e5[n3(971)]] = e5.head[e5.ins_h], e5.head[e5[n3(1191)]] = e5.strstart), e5.prev_length = e5[n3(759)], e5.prev_match = e5.match_start, e5.match_length = P2 - 1, r3 !== 0 && e5.prev_length < e5.max_lazy_match && e5.strstart - r3 <= e5.w_size - I2 && (e5.match_length = U2(e5, r3), e5.match_length <= 5 && (e5[n3(1339)] === b2 || e5.match_length === P2 && e5.strstart - e5.match_start > 4096) && (e5[n3(759)] = P2 - 1)), e5.prev_length >= P2 && e5.match_length <= e5.prev_length) {
            o3 = e5.strstart + e5[n3(812)] - P2, i3 = a2._tr_tally(e5, e5.strstart - 1 - e5.prev_match, e5.prev_length - P2), e5.lookahead -= e5.prev_length - 1, e5.prev_length -= 2;
            do
              ++e5[n3(1423)] <= o3 && (e5.ins_h = (e5.ins_h << e5[n3(774)] ^ e5[n3(688)][e5.strstart + P2 - 1]) & e5.hash_mask, r3 = e5.prev[e5[n3(1423)] & e5.w_mask] = e5.head[e5.ins_h], e5.head[e5.ins_h] = e5.strstart);
            while (--e5[n3(1189)] !== 0);
            if (e5.match_available = 0, e5.match_length = P2 - 1, e5[n3(1423)]++, i3 && (V2(e5, false), e5.strm.avail_out === 0)) return z2;
          } else if (e5.match_available) {
            if (i3 = a2._tr_tally(e5, 0, e5.window[e5[n3(1423)] - 1]), i3 && V2(e5, false), e5[n3(1423)]++, e5.lookahead--, e5.strm.avail_out === 0) return z2;
          } else e5[n3(741)] = 1, e5.strstart++, e5.lookahead--;
        }
        return e5.match_available && (e5.match_available = (i3 = a2._tr_tally(e5, 0, e5[n3(688)][e5.strstart - 1]), 0)), e5.insert = e5.strstart < P2 - 1 ? e5.strstart : P2 - 1, t4 === f2 ? (V2(e5, true), e5[n3(549)].avail_out === 0 ? ce2 : le2) : e5.last_lit && (V2(e5, false), e5.strm.avail_out === 0) ? z2 : se2;
      }
      function q2(e5, t4) {
        for (var n3 = $, r3, i3, o3, s3, c3 = e5.window; ; ) {
          if (e5.lookahead <= F2) {
            if (ge2(e5), e5.lookahead <= F2 && t4 === l2) return z2;
            if (e5[n3(812)] === 0) break;
          }
          if (e5[n3(759)] = 0, e5.lookahead >= P2 && e5.strstart > 0 && (o3 = e5.strstart - 1, i3 = c3[o3], i3 === c3[++o3] && i3 === c3[++o3] && i3 === c3[++o3])) {
            s3 = e5[n3(1423)] + F2;
            do
              ;
            while (i3 === c3[++o3] && i3 === c3[++o3] && i3 === c3[++o3] && i3 === c3[++o3] && i3 === c3[++o3] && i3 === c3[++o3] && i3 === c3[++o3] && i3 === c3[++o3] && o3 < s3);
            e5.match_length = F2 - (s3 - o3), e5[n3(759)] > e5.lookahead && (e5.match_length = e5.lookahead);
          }
          if (e5.match_length >= P2 ? (r3 = a2._tr_tally(e5, 1, e5.match_length - P2), e5[n3(812)] -= e5.match_length, e5.strstart += e5.match_length, e5.match_length = 0) : (r3 = a2._tr_tally(e5, 0, e5.window[e5.strstart]), e5[n3(812)]--, e5.strstart++), r3 && (V2(e5, false), e5.strm.avail_out === 0)) return z2;
        }
        return e5.insert = 0, t4 === f2 ? (V2(e5, true), e5.strm.avail_out === 0 ? ce2 : le2) : e5[n3(682)] && (V2(e5, false), e5.strm.avail_out === 0) ? z2 : se2;
      }
      function _e2(e5, t4) {
        for (var n3 = $, r3; ; ) {
          if (e5.lookahead === 0 && (ge2(e5), e5.lookahead === 0)) {
            if (t4 === l2) return z2;
            break;
          }
          if (e5[n3(759)] = 0, r3 = a2._tr_tally(e5, 0, e5[n3(688)][e5.strstart]), e5.lookahead--, e5.strstart++, r3 && (V2(e5, false), e5.strm.avail_out === 0)) return z2;
        }
        return e5[n3(860)] = 0, t4 === f2 ? (V2(e5, true), e5.strm.avail_out === 0 ? ce2 : le2) : e5[n3(682)] && (V2(e5, false), e5.strm.avail_out === 0) ? z2 : se2;
      }
      function J2(e5, t4, n3, r3, i3) {
        var a3 = $;
        this.good_length = e5, this.max_lazy = t4, this.nice_length = n3, this[a3(883)] = r3, this.func = i3;
      }
      var Y2 = [new J2(0, 0, 0, 0, W2), new J2(4, 4, 8, 4, G2), new J2(4, 5, 16, 8, G2), new J2(4, 6, 32, 32, G2), new J2(4, 4, 16, 16, K2), new J2(8, 16, 32, 32, K2), new J2(8, 16, 128, 128, K2), new J2(8, 32, 128, 256, K2), new J2(32, 128, 258, 1024, K2), new J2(32, 258, 258, 4096, K2)];
      function ve2(e5) {
        var t4 = $;
        e5.window_size = 2 * e5[t4(1241)], fe2(e5.head), e5.max_lazy_match = Y2[e5.level].max_lazy, e5.good_match = Y2[e5.level].good_length, e5.nice_match = Y2[e5[t4(745)]].nice_length, e5[t4(420)] = Y2[e5.level].max_chain, e5.strstart = 0, e5.block_start = 0, e5.lookahead = 0, e5.insert = 0, e5.match_length = e5.prev_length = P2 - 1, e5.match_available = 0, e5.ins_h = 0;
      }
      function ye2() {
        var e5 = $;
        this.strm = null, this[e5(620)] = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = E2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this[e5(909)] = 0, this.prev = null, this.head = null, this[e5(1191)] = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this[e5(774)] = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this[e5(745)] = 0, this[e5(1339)] = 0, this[e5(1033)] = 0, this[e5(1391)] = 0, this[e5(1218)] = new i2.Buf16(N2 * 2), this.dyn_dtree = new i2.Buf16((2 * j2 + 1) * 2), this[e5(972)] = new i2.Buf16((2 * M2 + 1) * 2), fe2(this.dyn_ltree), fe2(this[e5(780)]), fe2(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i2.Buf16(ee2 + 1), this.heap = new i2.Buf16(2 * A2 + 1), fe2(this.heap), this.heap_len = 0, this[e5(411)] = 0, this.depth = new i2[e5(581)](2 * A2 + 1), fe2(this[e5(1243)]), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this[e5(967)] = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this[e5(860)] = 0, this.bi_buf = 0, this[e5(1083)] = 0;
      }
      function be2(e5) {
        var t4 = $, n3;
        return !e5 || !e5.state ? de2(e5, g2) : (e5.total_in = e5[t4(520)] = 0, e5.data_type = T2, n3 = e5.state, n3[t4(951)] = 0, n3[t4(692)] = 0, n3.wrap < 0 && (n3.wrap = -n3.wrap), n3.status = n3.wrap ? te2 : ae2, e5[t4(518)] = n3.wrap === 2 ? 0 : 1, n3.last_flush = l2, a2[t4(361)](n3), m2);
      }
      function X2(e5) {
        var t4 = be2(e5);
        return t4 === m2 && ve2(e5.state), t4;
      }
      function xe2(e5, t4) {
        var n3 = $;
        return !e5 || !e5.state || e5.state.wrap !== 2 ? g2 : (e5.state[n3(1221)] = t4, m2);
      }
      function Z2(e5, t4, n3, r3, a3, o3) {
        var s3 = $;
        if (!e5) return g2;
        var c3 = 1;
        if (t4 === y2 && (t4 = 6), r3 < 0 ? (c3 = 0, r3 = -r3) : r3 > 15 && (c3 = 2, r3 -= 16), a3 < 1 || a3 > D2 || n3 !== E2 || r3 < 8 || r3 > 15 || t4 < 0 || t4 > 9 || o3 < 0 || o3 > C2) return de2(e5, g2);
        r3 === 8 && (r3 = 9);
        var l3 = new ye2();
        return e5.state = l3, l3.strm = e5, l3.wrap = c3, l3.gzhead = null, l3.w_bits = r3, l3.w_size = 1 << l3.w_bits, l3.w_mask = l3[s3(1241)] - 1, l3.hash_bits = a3 + 7, l3.hash_size = 1 << l3[s3(743)], l3[s3(473)] = l3[s3(1230)] - 1, l3.hash_shift = ~~((l3.hash_bits + P2 - 1) / P2), l3.window = new i2.Buf8(l3.w_size * 2), l3[s3(1277)] = new i2.Buf16(l3.hash_size), l3.prev = new i2.Buf16(l3.w_size), l3.lit_bufsize = 1 << a3 + 6, l3.pending_buf_size = l3[s3(805)] * 4, l3.pending_buf = new i2.Buf8(l3.pending_buf_size), l3.d_buf = 1 * l3.lit_bufsize, l3.l_buf = 3 * l3.lit_bufsize, l3.level = t4, l3.strategy = o3, l3.method = n3, X2(e5);
      }
      function Se2(e5, t4) {
        return Z2(e5, t4, E2, O2, k2, w2);
      }
      function Ce2(e5, t4) {
        var n3 = $, r3, i3, o3, c3;
        if (!e5 || !e5.state || t4 > p2 || t4 < 0) return e5 ? de2(e5, g2) : g2;
        if (i3 = e5[n3(493)], !e5.output || !e5[n3(1315)] && e5.avail_in !== 0 || i3.status === oe2 && t4 !== f2) return de2(e5, e5.avail_out === 0 ? v2 : g2);
        if (i3.strm = e5, r3 = i3.last_flush, i3.last_flush = t4, i3.status === te2) if (i3.wrap === 2) e5.adler = 0, H2(i3, 31), H2(i3, 139), H2(i3, 8), i3.gzhead ? (H2(i3, +!!i3[n3(1221)].text + (i3.gzhead.hcrc ? 2 : 0) + (i3.gzhead[n3(640)] ? 4 : 0) + (i3.gzhead.name ? 8 : 0) + (i3.gzhead[n3(1487)] ? 16 : 0)), H2(i3, i3.gzhead.time & 255), H2(i3, i3.gzhead.time >> 8 & 255), H2(i3, i3.gzhead[n3(557)] >> 16 & 255), H2(i3, i3.gzhead.time >> 24 & 255), H2(i3, i3.level === 9 ? 2 : i3.strategy >= x2 || i3.level < 2 ? 4 : 0), H2(i3, i3.gzhead.os & 255), i3.gzhead.extra && i3.gzhead.extra.length && (H2(i3, i3.gzhead.extra.length & 255), H2(i3, i3.gzhead[n3(640)].length >> 8 & 255)), i3.gzhead[n3(1141)] && (e5.adler = s2(e5.adler, i3.pending_buf, i3.pending, 0)), i3.gzindex = 0, i3.status = ne2) : (H2(i3, 0), H2(i3, 0), H2(i3, 0), H2(i3, 0), H2(i3, 0), H2(i3, i3.level === 9 ? 2 : i3.strategy >= x2 || i3.level < 2 ? 4 : 0), H2(i3, ue2), i3.status = ae2);
        else {
          var _3 = E2 + (i3.w_bits - 8 << 4) << 8, y3 = -1;
          y3 = i3[n3(1339)] >= x2 || i3.level < 2 ? 0 : i3.level < 6 ? 1 : i3.level === 6 ? 2 : 3, _3 |= y3 << 6, i3.strstart !== 0 && (_3 |= L2), _3 += 31 - _3 % 31, i3[n3(620)] = ae2, me2(i3, _3), i3.strstart !== 0 && (me2(i3, e5[n3(518)] >>> 16), me2(i3, e5.adler & 65535)), e5.adler = 1;
        }
        if (i3.status === ne2) if (i3[n3(1221)].extra) {
          for (o3 = i3[n3(951)]; i3.gzindex < (i3.gzhead.extra.length & 65535) && !(i3.pending === i3.pending_buf_size && (i3.gzhead.hcrc && i3.pending > o3 && (e5.adler = s2(e5.adler, i3.pending_buf, i3[n3(951)] - o3, o3)), pe2(e5), o3 = i3.pending, i3.pending === i3.pending_buf_size)); ) H2(i3, i3.gzhead.extra[i3.gzindex] & 255), i3.gzindex++;
          i3.gzhead[n3(1141)] && i3[n3(951)] > o3 && (e5.adler = s2(e5.adler, i3.pending_buf, i3[n3(951)] - o3, o3)), i3.gzindex === i3.gzhead.extra.length && (i3[n3(1123)] = 0, i3.status = re2);
        } else i3.status = re2;
        if (i3.status === re2) if (i3.gzhead[n3(701)]) {
          o3 = i3.pending;
          do {
            if (i3.pending === i3[n3(724)] && (i3[n3(1221)].hcrc && i3[n3(951)] > o3 && (e5.adler = s2(e5[n3(518)], i3.pending_buf, i3.pending - o3, o3)), pe2(e5), o3 = i3[n3(951)], i3.pending === i3.pending_buf_size)) {
              c3 = 1;
              break;
            }
            c3 = i3.gzindex < i3.gzhead[n3(701)].length ? i3.gzhead[n3(701)].charCodeAt(i3[n3(1123)]++) & 255 : 0, H2(i3, c3);
          } while (c3 !== 0);
          i3.gzhead.hcrc && i3.pending > o3 && (e5.adler = s2(e5.adler, i3[n3(1456)], i3.pending - o3, o3)), c3 === 0 && (i3.gzindex = 0, i3[n3(620)] = R2);
        } else i3.status = R2;
        if (i3.status === R2) if (i3.gzhead.comment) {
          o3 = i3.pending;
          do {
            if (i3.pending === i3[n3(724)] && (i3.gzhead.hcrc && i3.pending > o3 && (e5.adler = s2(e5.adler, i3[n3(1456)], i3.pending - o3, o3)), pe2(e5), o3 = i3.pending, i3[n3(951)] === i3[n3(724)])) {
              c3 = 1;
              break;
            }
            c3 = i3.gzindex < i3[n3(1221)].comment[n3(587)] ? i3.gzhead.comment.charCodeAt(i3.gzindex++) & 255 : 0, H2(i3, c3);
          } while (c3 !== 0);
          i3.gzhead.hcrc && i3.pending > o3 && (e5.adler = s2(e5.adler, i3.pending_buf, i3.pending - o3, o3)), c3 === 0 && (i3.status = ie2);
        } else i3.status = ie2;
        if (i3.status === ie2 && (i3[n3(1221)].hcrc ? (i3.pending + 2 > i3.pending_buf_size && pe2(e5), i3.pending + 2 <= i3.pending_buf_size && (H2(i3, e5[n3(518)] & 255), H2(i3, e5.adler >> 8 & 255), e5.adler = 0, i3.status = ae2)) : i3[n3(620)] = ae2), i3[n3(951)] !== 0) {
          if (pe2(e5), e5.avail_out === 0) return i3.last_flush = -1, m2;
        } else if (e5.avail_in === 0 && B2(t4) <= B2(r3) && t4 !== f2) return de2(e5, v2);
        if (i3.status === oe2 && e5.avail_in !== 0) return de2(e5, v2);
        if (e5.avail_in !== 0 || i3.lookahead !== 0 || t4 !== l2 && i3.status !== oe2) {
          var b3 = i3.strategy === x2 ? _e2(i3, t4) : i3.strategy === S2 ? q2(i3, t4) : Y2[i3.level].func(i3, t4);
          if ((b3 === ce2 || b3 === le2) && (i3.status = oe2), b3 === z2 || b3 === ce2) return e5.avail_out === 0 && (i3.last_flush = -1), m2;
          if (b3 === se2 && (t4 === u2 ? a2._tr_align(i3) : t4 !== p2 && (a2._tr_stored_block(i3, 0, 0, false), t4 === d2 && (fe2(i3.head), i3.lookahead === 0 && (i3.strstart = 0, i3[n3(349)] = 0, i3.insert = 0))), pe2(e5), e5.avail_out === 0)) return i3.last_flush = -1, m2;
        }
        return t4 === f2 ? i3[n3(869)] <= 0 ? h2 : (i3.wrap === 2 ? (H2(i3, e5[n3(518)] & 255), H2(i3, e5.adler >> 8 & 255), H2(i3, e5.adler >> 16 & 255), H2(i3, e5[n3(518)] >> 24 & 255), H2(i3, e5[n3(1399)] & 255), H2(i3, e5.total_in >> 8 & 255), H2(i3, e5.total_in >> 16 & 255), H2(i3, e5.total_in >> 24 & 255)) : (me2(i3, e5.adler >>> 16), me2(i3, e5.adler & 65535)), pe2(e5), i3[n3(869)] > 0 && (i3[n3(869)] = -i3.wrap), i3.pending === 0 ? h2 : m2) : m2;
      }
      function we2(e5) {
        var t4;
        return !e5 || !e5.state ? g2 : (t4 = e5.state.status, t4 !== te2 && t4 !== ne2 && t4 !== re2 && t4 !== R2 && t4 !== ie2 && t4 !== ae2 && t4 !== oe2 ? de2(e5, g2) : (e5.state = null, t4 === ae2 ? de2(e5, _2) : m2));
      }
      function Te2(e5, t4) {
        var n3 = $, r3 = t4.length, a3, s3, c3, l3, u3, d3, f3, p3;
        if (!e5 || !e5.state || (a3 = e5[n3(493)], l3 = a3.wrap, l3 === 2 || l3 === 1 && a3.status !== te2 || a3.lookahead)) return g2;
        for (l3 === 1 && (e5.adler = o2(e5.adler, t4, r3, 0)), a3.wrap = 0, r3 >= a3.w_size && (l3 === 0 && (fe2(a3.head), a3.strstart = 0, a3.block_start = 0, a3.insert = 0), p3 = new i2.Buf8(a3.w_size), i2.arraySet(p3, t4, r3 - a3.w_size, a3.w_size, 0), t4 = p3, r3 = a3.w_size), u3 = e5.avail_in, d3 = e5.next_in, f3 = e5.input, e5.avail_in = r3, e5.next_in = 0, e5.input = t4, ge2(a3); a3.lookahead >= P2; ) {
          s3 = a3.strstart, c3 = a3.lookahead - (P2 - 1);
          do
            a3.ins_h = (a3.ins_h << a3.hash_shift ^ a3.window[s3 + P2 - 1]) & a3[n3(473)], a3[n3(1121)][s3 & a3.w_mask] = a3.head[a3[n3(1191)]], a3.head[a3.ins_h] = s3, s3++;
          while (--c3);
          a3.strstart = s3, a3.lookahead = P2 - 1, ge2(a3);
        }
        return a3.strstart += a3.lookahead, a3.block_start = a3.strstart, a3.insert = a3[n3(812)], a3.lookahead = 0, a3.match_length = a3.prev_length = P2 - 1, a3.match_available = 0, e5[n3(1324)] = d3, e5.input = f3, e5.avail_in = u3, a3.wrap = l3, m2;
      }
      n2.deflateInit = Se2, n2.deflateInit2 = Z2, n2.deflateReset = X2, n2.deflateResetKeep = be2, n2.deflateSetHeader = xe2, n2[r2(1175)] = Ce2, n2.deflateEnd = we2, n2.deflateSetDictionary = Te2, n2.deflateInfo = `pako deflate (from Nodeca project)`;
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e4, t3, n2) {
      var r2 = $;
      function i2() {
        var e5 = $;
        this.text = 0, this.time = 0, this[e5(1358)] = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = ``, this[e5(1487)] = ``, this.hcrc = 0, this.done = false;
      }
      t3[r2(952)] = i2;
    }, {}], 48: [function(e4, t3, n2) {
      var r2 = 30, i2 = 12;
      t3.exports = function(e5, t4) {
        var n3 = $, a2 = e5[n3(493)], o2 = e5.next_in, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2, O2 = e5.input, k2;
        s2 = o2 + (e5.avail_in - 5), c2 = e5.next_out, k2 = e5.output, l2 = c2 - (t4 - e5[n3(798)]), u2 = c2 + (e5.avail_out - 257), d2 = a2.dmax, f2 = a2.wsize, p2 = a2.whave, m2 = a2.wnext, h2 = a2.window, g2 = a2.hold, _2 = a2.bits, v2 = a2.lencode, y2 = a2.distcode, b2 = (1 << a2.lenbits) - 1, x2 = (1 << a2.distbits) - 1;
        aH: do {
          _2 < 15 && (g2 += O2[o2++] << _2, _2 += 8, g2 += O2[o2++] << _2, _2 += 8), S2 = v2[g2 & b2];
          aI: for (; ; ) {
            if (C2 = S2 >>> 24, g2 >>>= C2, _2 -= C2, C2 = S2 >>> 16 & 255, C2 === 0) k2[c2++] = S2 & 65535;
            else if (C2 & 16) {
              w2 = S2 & 65535, C2 &= 15, C2 && (_2 < C2 && (g2 += O2[o2++] << _2, _2 += 8), w2 += g2 & (1 << C2) - 1, g2 >>>= C2, _2 -= C2), _2 < 15 && (g2 += O2[o2++] << _2, _2 += 8, g2 += O2[o2++] << _2, _2 += 8), S2 = y2[g2 & x2];
              aJ: for (; ; ) {
                if (C2 = S2 >>> 24, g2 >>>= C2, _2 -= C2, C2 = S2 >>> 16 & 255, C2 & 16) {
                  if (T2 = S2 & 65535, C2 &= 15, _2 < C2 && (g2 += O2[o2++] << _2, _2 += 8, _2 < C2 && (g2 += O2[o2++] << _2, _2 += 8)), T2 += g2 & (1 << C2) - 1, T2 > d2) {
                    e5.msg = n3(761), a2[n3(1056)] = r2;
                    break aH;
                  }
                  if (g2 >>>= C2, _2 -= C2, C2 = c2 - l2, T2 > C2) {
                    if (C2 = T2 - C2, C2 > p2 && a2.sane) {
                      e5.msg = `invalid distance too far back`, a2.mode = r2;
                      break aH;
                    }
                    if (E2 = 0, D2 = h2, m2 === 0) {
                      if (E2 += f2 - C2, C2 < w2) {
                        w2 -= C2;
                        do
                          k2[c2++] = h2[E2++];
                        while (--C2);
                        E2 = c2 - T2, D2 = k2;
                      }
                    } else if (m2 < C2) {
                      if (E2 += f2 + m2 - C2, C2 -= m2, C2 < w2) {
                        w2 -= C2;
                        do
                          k2[c2++] = h2[E2++];
                        while (--C2);
                        if (E2 = 0, m2 < w2) {
                          C2 = m2, w2 -= C2;
                          do
                            k2[c2++] = h2[E2++];
                          while (--C2);
                          E2 = c2 - T2, D2 = k2;
                        }
                      }
                    } else if (E2 += m2 - C2, C2 < w2) {
                      w2 -= C2;
                      do
                        k2[c2++] = h2[E2++];
                      while (--C2);
                      E2 = c2 - T2, D2 = k2;
                    }
                    for (; w2 > 2; ) k2[c2++] = D2[E2++], k2[c2++] = D2[E2++], k2[c2++] = D2[E2++], w2 -= 3;
                    w2 && (k2[c2++] = D2[E2++], w2 > 1 && (k2[c2++] = D2[E2++]));
                  } else {
                    E2 = c2 - T2;
                    do
                      k2[c2++] = k2[E2++], k2[c2++] = k2[E2++], k2[c2++] = k2[E2++], w2 -= 3;
                    while (w2 > 2);
                    w2 && (k2[c2++] = k2[E2++], w2 > 1 && (k2[c2++] = k2[E2++]));
                  }
                } else if (C2 & 64) {
                  e5.msg = `invalid distance code`, a2.mode = r2;
                  break aH;
                } else {
                  S2 = y2[(S2 & 65535) + (g2 & (1 << C2) - 1)];
                  continue aJ;
                }
                break;
              }
            } else if (!(C2 & 64)) {
              S2 = v2[(S2 & 65535) + (g2 & (1 << C2) - 1)];
              continue aI;
            } else if (C2 & 32) {
              a2[n3(1056)] = i2;
              break aH;
            } else {
              e5.msg = `invalid literal/length code`, a2.mode = r2;
              break aH;
            }
            break;
          }
        } while (o2 < s2 && c2 < u2);
        w2 = _2 >> 3, o2 -= w2, _2 -= w2 << 3, g2 &= (1 << _2) - 1, e5.next_in = o2, e5[n3(1349)] = c2, e5.avail_in = o2 < s2 ? 5 + (s2 - o2) : 5 - (o2 - s2), e5.avail_out = c2 < u2 ? 257 + (u2 - c2) : 257 - (c2 - u2), a2.hold = g2, a2.bits = _2;
      };
    }, {}], 49: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(r2(513)), a2 = e4(`./adler32`), o2 = e4(r2(1105)), s2 = e4(`./inffast`), c2 = e4(`./inftrees`), l2 = 0, u2 = 1, d2 = 2, f2 = 4, p2 = 5, m2 = 6, h2 = 0, g2 = 1, _2 = 2, v2 = -2, y2 = -3, b2 = -4, x2 = -5, S2 = 8, C2 = 1, w2 = 2, T2 = 3, E2 = 4, D2 = 5, O2 = 6, k2 = 7, A2 = 8, j2 = 9, M2 = 10, N2 = 11, ee2 = 12, P2 = 13, F2 = 14, I2 = 15, L2 = 16, te2 = 17, ne2 = 18, re2 = 19, R2 = 20, ie2 = 21, ae2 = 22, oe2 = 23, z2 = 24, se2 = 25, ce2 = 26, le2 = 27, ue2 = 28, de2 = 29, B2 = 30, fe2 = 31, pe2 = 32, V2 = 852, H2 = 592, me2 = 15;
      function he2(e5) {
        return (e5 >>> 24 & 255) + (e5 >>> 8 & 65280) + ((e5 & 65280) << 8) + ((e5 & 255) << 24);
      }
      function U2() {
        var e5 = r2;
        this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this[e5(887)] = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this[e5(418)] = 0, this.wsize = 0, this[e5(1131)] = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this[e5(837)] = null, this.distcode = null, this[e5(668)] = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this[e5(558)] = 0, this.have = 0, this.next = null, this.lens = new i2[e5(581)](320), this.work = new i2.Buf16(288), this.lendyn = null, this.distdyn = null, this[e5(430)] = 0, this[e5(1473)] = 0, this[e5(1375)] = 0;
      }
      function ge2(e5) {
        var t4 = r2, n3;
        return !e5 || !e5.state ? v2 : (n3 = e5.state, e5.total_in = e5.total_out = n3.total = 0, e5.msg = ``, n3[t4(869)] && (e5.adler = n3.wrap & 1), n3.mode = C2, n3.last = 0, n3[t4(1356)] = 0, n3.dmax = 32768, n3[t4(1277)] = null, n3.hold = 0, n3.bits = 0, n3[t4(837)] = n3[t4(842)] = new i2.Buf32(V2), n3.distcode = n3[t4(632)] = new i2.Buf32(H2), n3.sane = 1, n3.back = -1, h2);
      }
      function W2(e5) {
        var t4 = r2, n3;
        return !e5 || !e5[t4(493)] ? v2 : (n3 = e5.state, n3.wsize = 0, n3.whave = 0, n3[t4(593)] = 0, ge2(e5));
      }
      function G2(e5, t4) {
        var n3 = r2, i3, a3;
        return !e5 || !e5[n3(493)] || (a3 = e5[n3(493)], t4 < 0 ? (i3 = 0, t4 = -t4) : (i3 = (t4 >> 4) + 1, t4 < 48 && (t4 &= 15)), t4 && (t4 < 8 || t4 > 15)) ? v2 : (a3.window !== null && a3.wbits !== t4 && (a3.window = null), a3.wrap = i3, a3.wbits = t4, W2(e5));
      }
      function K2(e5, t4) {
        var n3, r3;
        return e5 ? (r3 = new U2(), e5.state = r3, r3.window = null, n3 = G2(e5, t4), n3 !== h2 && (e5.state = null), n3) : v2;
      }
      function q2(e5) {
        return K2(e5, me2);
      }
      var _e2 = true, J2, Y2;
      function ve2(e5) {
        var t4 = r2;
        if (_e2) {
          var n3;
          for (J2 = new i2.Buf32(512), Y2 = new i2.Buf32(32), n3 = 0; n3 < 144; ) e5.lens[n3++] = 8;
          for (; n3 < 256; ) e5[t4(1066)][n3++] = 9;
          for (; n3 < 280; ) e5.lens[n3++] = 7;
          for (; n3 < 288; ) e5[t4(1066)][n3++] = 8;
          for (c2(u2, e5.lens, 0, 288, J2, 0, e5.work, { bits: 9 }), n3 = 0; n3 < 32; ) e5.lens[n3++] = 5;
          c2(d2, e5.lens, 0, 32, Y2, 0, e5[t4(1202)], { bits: 5 }), _e2 = false;
        }
        e5.lencode = J2, e5.lenbits = 9, e5.distcode = Y2, e5[t4(965)] = 5;
      }
      function ye2(e5, t4, n3, a3) {
        var o3 = r2, s3, c3 = e5.state;
        return c3.window === null && (c3.wsize = 1 << c3[o3(418)], c3[o3(593)] = 0, c3.whave = 0, c3.window = new i2.Buf8(c3.wsize)), a3 >= c3.wsize ? (i2.arraySet(c3.window, t4, n3 - c3.wsize, c3.wsize, 0), c3.wnext = 0, c3[o3(1131)] = c3.wsize) : (s3 = c3.wsize - c3.wnext, s3 > a3 && (s3 = a3), i2.arraySet(c3.window, t4, n3 - a3, s3, c3.wnext), a3 -= s3, a3 ? (i2.arraySet(c3.window, t4, n3 - a3, a3, 0), c3[o3(593)] = a3, c3.whave = c3.wsize) : (c3.wnext += s3, c3.wnext === c3.wsize && (c3.wnext = 0), c3[o3(1131)] < c3[o3(999)] && (c3.whave += s3))), 0;
      }
      function be2(e5, t4) {
        var n3 = r2, V3, H3, me3, U3, ge3, W3, G3, K3, q3, _e3, J3, Y3, be3, X3, xe3 = 0, Z3, Se2, Ce2, we2, Te2, Ee2, De2, Oe2, ke2 = new i2.Buf8(4), Ae2, je2, Me2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e5 || !e5.state || !e5.output || !e5.input && e5.avail_in !== 0) return v2;
        V3 = e5.state, V3.mode === ee2 && (V3[n3(1056)] = P2), ge3 = e5[n3(1349)], me3 = e5.output, G3 = e5.avail_out, U3 = e5.next_in, H3 = e5.input, W3 = e5.avail_in, K3 = V3.hold, q3 = V3.bits, _e3 = W3, J3 = G3, Oe2 = h2;
        bR: for (; ; ) switch (V3[n3(1056)]) {
          case C2:
            if (V3[n3(869)] === 0) {
              V3[n3(1056)] = P2;
              break;
            }
            for (; q3 < 16; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            if (V3.wrap & 2 && K3 === 35615) {
              V3.check = 0, ke2[0] = K3 & 255, ke2[1] = K3 >>> 8 & 255, V3.check = o2(V3.check, ke2, 2, 0), K3 = 0, q3 = 0, V3.mode = w2;
              break;
            }
            if (V3.flags = 0, V3.head && (V3.head.done = false), !(V3.wrap & 1) || (((K3 & 255) << 8) + (K3 >> 8)) % 31) {
              e5.msg = n3(1389), V3[n3(1056)] = B2;
              break;
            }
            if ((K3 & 15) !== S2) {
              e5.msg = n3(648), V3.mode = B2;
              break;
            }
            if (K3 >>>= 4, q3 -= 4, De2 = (K3 & 15) + 8, V3[n3(418)] === 0) V3.wbits = De2;
            else if (De2 > V3[n3(418)]) {
              e5[n3(1068)] = `invalid window size`, V3[n3(1056)] = B2;
              break;
            }
            V3.dmax = 1 << De2, e5.adler = V3.check = 1, V3.mode = K3 & 512 ? M2 : ee2, K3 = 0, q3 = 0;
            break;
          case w2:
            for (; q3 < 16; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            if (V3[n3(887)] = K3, (V3.flags & 255) !== S2) {
              e5[n3(1068)] = n3(648), V3.mode = B2;
              break;
            }
            if (V3[n3(887)] & 57344) {
              e5.msg = `unknown header flags set`, V3.mode = B2;
              break;
            }
            V3[n3(1277)] && (V3.head[n3(564)] = K3 >> 8 & 1), V3.flags & 512 && (ke2[0] = K3 & 255, ke2[1] = K3 >>> 8 & 255, V3.check = o2(V3[n3(416)], ke2, 2, 0)), K3 = 0, q3 = 0, V3[n3(1056)] = T2;
          case T2:
            for (; q3 < 32; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            V3.head && (V3[n3(1277)].time = K3), V3.flags & 512 && (ke2[0] = K3 & 255, ke2[1] = K3 >>> 8 & 255, ke2[2] = K3 >>> 16 & 255, ke2[3] = K3 >>> 24 & 255, V3.check = o2(V3.check, ke2, 4, 0)), K3 = 0, q3 = 0, V3[n3(1056)] = E2;
          case E2:
            for (; q3 < 16; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            V3.head && (V3.head.xflags = K3 & 255, V3.head.os = K3 >> 8), V3.flags & 512 && (ke2[0] = K3 & 255, ke2[1] = K3 >>> 8 & 255, V3.check = o2(V3.check, ke2, 2, 0)), K3 = 0, q3 = 0, V3.mode = D2;
          case D2:
            if (V3.flags & 1024) {
              for (; q3 < 16; ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              V3.length = K3, V3[n3(1277)] && (V3.head.extra_len = K3), V3.flags & 512 && (ke2[0] = K3 & 255, ke2[1] = K3 >>> 8 & 255, V3[n3(416)] = o2(V3.check, ke2, 2, 0)), K3 = 0, q3 = 0;
            } else V3[n3(1277)] && (V3.head.extra = null);
            V3.mode = O2;
          case O2:
            if (V3.flags & 1024 && (Y3 = V3[n3(587)], Y3 > W3 && (Y3 = W3), Y3 && (V3.head && (De2 = V3.head.extra_len - V3.length, V3.head.extra || (V3.head.extra = Array(V3.head[n3(568)])), i2[n3(405)](V3.head.extra, H3, U3, Y3, De2)), V3.flags & 512 && (V3[n3(416)] = o2(V3.check, H3, Y3, U3)), W3 -= Y3, U3 += Y3, V3.length -= Y3), V3.length)) break bR;
            V3[n3(587)] = 0, V3[n3(1056)] = k2;
          case k2:
            if (V3[n3(887)] & 2048) {
              if (W3 === 0) break bR;
              Y3 = 0;
              do
                De2 = H3[U3 + Y3++], V3[n3(1277)] && De2 && V3.length < 65536 && (V3.head.name += String.fromCharCode(De2));
              while (De2 && Y3 < W3);
              if (V3.flags & 512 && (V3.check = o2(V3.check, H3, Y3, U3)), W3 -= Y3, U3 += Y3, De2) break bR;
            } else V3.head && (V3.head.name = null);
            V3.length = 0, V3.mode = A2;
          case A2:
            if (V3.flags & 4096) {
              if (W3 === 0) break bR;
              Y3 = 0;
              do
                De2 = H3[U3 + Y3++], V3.head && De2 && V3.length < 65536 && (V3.head.comment += String[n3(446)](De2));
              while (De2 && Y3 < W3);
              if (V3.flags & 512 && (V3[n3(416)] = o2(V3.check, H3, Y3, U3)), W3 -= Y3, U3 += Y3, De2) break bR;
            } else V3.head && (V3[n3(1277)].comment = null);
            V3.mode = j2;
          case j2:
            if (V3.flags & 512) {
              for (; q3 < 16; ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              if (K3 !== (V3.check & 65535)) {
                e5[n3(1068)] = n3(578), V3.mode = B2;
                break;
              }
              K3 = 0, q3 = 0;
            }
            V3[n3(1277)] && (V3[n3(1277)].hcrc = V3.flags >> 9 & 1, V3.head.done = true), e5.adler = V3.check = 0, V3.mode = ee2;
            break;
          case M2:
            for (; q3 < 32; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            e5.adler = V3[n3(416)] = he2(K3), K3 = 0, q3 = 0, V3.mode = N2;
          case N2:
            if (V3[n3(1356)] === 0) return e5.next_out = ge3, e5.avail_out = G3, e5.next_in = U3, e5.avail_in = W3, V3.hold = K3, V3.bits = q3, _2;
            e5.adler = V3.check = 1, V3.mode = ee2;
          case ee2:
            if (t4 === p2 || t4 === m2) break bR;
          case P2:
            if (V3.last) {
              K3 >>>= q3 & 7, q3 -= q3 & 7, V3[n3(1056)] = le2;
              break;
            }
            for (; q3 < 3; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            switch (V3.last = K3 & 1, K3 >>>= 1, --q3, K3 & 3) {
              case 0:
                V3.mode = F2;
                break;
              case 1:
                if (ve2(V3), V3[n3(1056)] = R2, t4 === m2) {
                  K3 >>>= 2, q3 -= 2;
                  break bR;
                }
                break;
              case 2:
                V3.mode = te2;
                break;
              case 3:
                e5.msg = n3(1205), V3[n3(1056)] = B2;
            }
            K3 >>>= 2, q3 -= 2;
            break;
          case F2:
            for (K3 >>>= q3 & 7, q3 -= q3 & 7; q3 < 32; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            if ((K3 & 65535) != (K3 >>> 16 ^ 65535)) {
              e5[n3(1068)] = n3(1476), V3.mode = B2;
              break;
            }
            if (V3.length = K3 & 65535, K3 = 0, q3 = 0, V3.mode = I2, t4 === m2) break bR;
          case I2:
            V3.mode = L2;
          case L2:
            if (Y3 = V3[n3(587)], Y3) {
              if (Y3 > W3 && (Y3 = W3), Y3 > G3 && (Y3 = G3), Y3 === 0) break bR;
              i2.arraySet(me3, H3, U3, Y3, ge3), W3 -= Y3, U3 += Y3, G3 -= Y3, ge3 += Y3, V3[n3(587)] -= Y3;
              break;
            }
            V3.mode = ee2;
            break;
          case te2:
            for (; q3 < 14; ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            if (V3.nlen = (K3 & 31) + 257, K3 >>>= 5, q3 -= 5, V3[n3(558)] = (K3 & 31) + 1, K3 >>>= 5, q3 -= 5, V3.ncode = (K3 & 15) + 4, K3 >>>= 4, q3 -= 4, V3[n3(484)] > 286 || V3.ndist > 30) {
              e5.msg = `too many length or distance symbols`, V3.mode = B2;
              break;
            }
            V3.have = 0, V3[n3(1056)] = ne2;
          case ne2:
            for (; V3.have < V3.ncode; ) {
              for (; q3 < 3; ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              V3.lens[Me2[V3.have++]] = K3 & 7, K3 >>>= 3, q3 -= 3;
            }
            for (; V3.have < 19; ) V3[n3(1066)][Me2[V3.have++]] = 0;
            if (V3.lencode = V3[n3(842)], V3.lenbits = 7, Ae2 = { bits: V3.lenbits }, Oe2 = c2(l2, V3[n3(1066)], 0, 19, V3[n3(837)], 0, V3.work, Ae2), V3[n3(668)] = Ae2.bits, Oe2) {
              e5.msg = `invalid code lengths set`, V3[n3(1056)] = B2;
              break;
            }
            V3.have = 0, V3.mode = re2;
          case re2:
            for (; V3.have < V3.nlen + V3.ndist; ) {
              for (; xe3 = V3.lencode[K3 & (1 << V3.lenbits) - 1], Z3 = xe3 >>> 24, Se2 = xe3 >>> 16 & 255, Ce2 = xe3 & 65535, !(Z3 <= q3); ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              if (Ce2 < 16) K3 >>>= Z3, q3 -= Z3, V3.lens[V3[n3(1374)]++] = Ce2;
              else {
                if (Ce2 === 16) {
                  for (je2 = Z3 + 2; q3 < je2; ) {
                    if (W3 === 0) break bR;
                    W3--, K3 += H3[U3++] << q3, q3 += 8;
                  }
                  if (K3 >>>= Z3, q3 -= Z3, V3.have === 0) {
                    e5.msg = `invalid bit length repeat`, V3.mode = B2;
                    break;
                  }
                  De2 = V3[n3(1066)][V3.have - 1], Y3 = 3 + (K3 & 3), K3 >>>= 2, q3 -= 2;
                } else if (Ce2 === 17) {
                  for (je2 = Z3 + 3; q3 < je2; ) {
                    if (W3 === 0) break bR;
                    W3--, K3 += H3[U3++] << q3, q3 += 8;
                  }
                  K3 >>>= Z3, q3 -= Z3, De2 = 0, Y3 = 3 + (K3 & 7), K3 >>>= 3, q3 -= 3;
                } else {
                  for (je2 = Z3 + 7; q3 < je2; ) {
                    if (W3 === 0) break bR;
                    W3--, K3 += H3[U3++] << q3, q3 += 8;
                  }
                  K3 >>>= Z3, q3 -= Z3, De2 = 0, Y3 = 11 + (K3 & 127), K3 >>>= 7, q3 -= 7;
                }
                if (V3.have + Y3 > V3[n3(484)] + V3.ndist) {
                  e5.msg = `invalid bit length repeat`, V3[n3(1056)] = B2;
                  break;
                }
                for (; Y3--; ) V3.lens[V3.have++] = De2;
              }
            }
            if (V3.mode === B2) break;
            if (V3.lens[256] === 0) {
              e5.msg = `invalid code -- missing end-of-block`, V3.mode = B2;
              break;
            }
            if (V3.lenbits = 9, Ae2 = { bits: V3.lenbits }, Oe2 = c2(u2, V3[n3(1066)], 0, V3[n3(484)], V3.lencode, 0, V3.work, Ae2), V3.lenbits = Ae2[n3(645)], Oe2) {
              e5.msg = n3(1274), V3.mode = B2;
              break;
            }
            if (V3.distbits = 6, V3.distcode = V3[n3(632)], Ae2 = { bits: V3.distbits }, Oe2 = c2(d2, V3.lens, V3.nlen, V3[n3(558)], V3.distcode, 0, V3.work, Ae2), V3.distbits = Ae2.bits, Oe2) {
              e5.msg = `invalid distances set`, V3[n3(1056)] = B2;
              break;
            }
            if (V3.mode = R2, t4 === m2) break bR;
          case R2:
            V3[n3(1056)] = ie2;
          case ie2:
            if (W3 >= 6 && G3 >= 258) {
              e5[n3(1349)] = ge3, e5.avail_out = G3, e5.next_in = U3, e5[n3(539)] = W3, V3.hold = K3, V3.bits = q3, s2(e5, J3), ge3 = e5.next_out, me3 = e5.output, G3 = e5.avail_out, U3 = e5.next_in, H3 = e5.input, W3 = e5.avail_in, K3 = V3.hold, q3 = V3.bits, V3[n3(1056)] === ee2 && (V3.back = -1);
              break;
            }
            for (V3[n3(1473)] = 0; xe3 = V3.lencode[K3 & (1 << V3.lenbits) - 1], Z3 = xe3 >>> 24, Se2 = xe3 >>> 16 & 255, Ce2 = xe3 & 65535, !(Z3 <= q3); ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            if (Se2 && !(Se2 & 240)) {
              for (we2 = Z3, Te2 = Se2, Ee2 = Ce2; xe3 = V3[n3(837)][Ee2 + ((K3 & (1 << we2 + Te2) - 1) >> we2)], Z3 = xe3 >>> 24, Se2 = xe3 >>> 16 & 255, Ce2 = xe3 & 65535, !(we2 + Z3 <= q3); ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              K3 >>>= we2, q3 -= we2, V3[n3(1473)] += we2;
            }
            if (K3 >>>= Z3, q3 -= Z3, V3.back += Z3, V3.length = Ce2, Se2 === 0) {
              V3.mode = ce2;
              break;
            }
            if (Se2 & 32) {
              V3.back = -1, V3.mode = ee2;
              break;
            }
            if (Se2 & 64) {
              e5.msg = `invalid literal/length code`, V3.mode = B2;
              break;
            }
            V3[n3(640)] = Se2 & 15, V3[n3(1056)] = ae2;
          case ae2:
            if (V3.extra) {
              for (je2 = V3.extra; q3 < je2; ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              V3.length += K3 & (1 << V3.extra) - 1, K3 >>>= V3.extra, q3 -= V3[n3(640)], V3.back += V3.extra;
            }
            V3.was = V3.length, V3.mode = oe2;
          case oe2:
            for (; xe3 = V3[n3(1065)][K3 & (1 << V3.distbits) - 1], Z3 = xe3 >>> 24, Se2 = xe3 >>> 16 & 255, Ce2 = xe3 & 65535, !(Z3 <= q3); ) {
              if (W3 === 0) break bR;
              W3--, K3 += H3[U3++] << q3, q3 += 8;
            }
            if (!(Se2 & 240)) {
              for (we2 = Z3, Te2 = Se2, Ee2 = Ce2; xe3 = V3.distcode[Ee2 + ((K3 & (1 << we2 + Te2) - 1) >> we2)], Z3 = xe3 >>> 24, Se2 = xe3 >>> 16 & 255, Ce2 = xe3 & 65535, !(we2 + Z3 <= q3); ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              K3 >>>= we2, q3 -= we2, V3.back += we2;
            }
            if (K3 >>>= Z3, q3 -= Z3, V3.back += Z3, Se2 & 64) {
              e5.msg = `invalid distance code`, V3.mode = B2;
              break;
            }
            V3[n3(381)] = Ce2, V3.extra = Se2 & 15, V3.mode = z2;
          case z2:
            if (V3.extra) {
              for (je2 = V3.extra; q3 < je2; ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              V3.offset += K3 & (1 << V3.extra) - 1, K3 >>>= V3.extra, q3 -= V3[n3(640)], V3[n3(1473)] += V3[n3(640)];
            }
            if (V3[n3(381)] > V3.dmax) {
              e5.msg = `invalid distance too far back`, V3.mode = B2;
              break;
            }
            V3[n3(1056)] = se2;
          case se2:
            if (G3 === 0) break bR;
            if (Y3 = J3 - G3, V3.offset > Y3) {
              if (Y3 = V3.offset - Y3, Y3 > V3.whave && V3.sane) {
                e5.msg = `invalid distance too far back`, V3.mode = B2;
                break;
              }
              Y3 > V3[n3(593)] ? (Y3 -= V3.wnext, be3 = V3.wsize - Y3) : be3 = V3.wnext - Y3, Y3 > V3.length && (Y3 = V3.length), X3 = V3.window;
            } else X3 = me3, be3 = ge3 - V3.offset, Y3 = V3[n3(587)];
            Y3 > G3 && (Y3 = G3), G3 -= Y3, V3.length -= Y3;
            do
              me3[ge3++] = X3[be3++];
            while (--Y3);
            V3[n3(587)] === 0 && (V3.mode = ie2);
            break;
          case ce2:
            if (G3 === 0) break bR;
            me3[ge3++] = V3.length, G3--, V3[n3(1056)] = ie2;
            break;
          case le2:
            if (V3.wrap) {
              for (; q3 < 32; ) {
                if (W3 === 0) break bR;
                W3--, K3 |= H3[U3++] << q3, q3 += 8;
              }
              if (J3 -= G3, e5.total_out += J3, V3.total += J3, J3 && (e5.adler = V3.check = V3.flags ? o2(V3.check, me3, J3, ge3 - J3) : a2(V3.check, me3, J3, ge3 - J3)), J3 = G3, (V3.flags ? K3 : he2(K3)) !== V3.check) {
                e5.msg = `incorrect data check`, V3.mode = B2;
                break;
              }
              K3 = 0, q3 = 0;
            }
            V3.mode = ue2;
          case ue2:
            if (V3.wrap && V3.flags) {
              for (; q3 < 32; ) {
                if (W3 === 0) break bR;
                W3--, K3 += H3[U3++] << q3, q3 += 8;
              }
              if (K3 !== (V3.total & 4294967295)) {
                e5[n3(1068)] = `incorrect length check`, V3[n3(1056)] = B2;
                break;
              }
              K3 = 0, q3 = 0;
            }
            V3.mode = de2;
          case de2:
            Oe2 = g2;
            break bR;
          case B2:
            Oe2 = y2;
            break bR;
          case fe2:
            return b2;
          case pe2:
          default:
            return v2;
        }
        return e5[n3(1349)] = ge3, e5.avail_out = G3, e5[n3(1324)] = U3, e5.avail_in = W3, V3[n3(1148)] = K3, V3.bits = q3, (V3.wsize || J3 !== e5.avail_out && V3[n3(1056)] < B2 && (V3.mode < le2 || t4 !== f2)) && ye2(e5, e5.output, e5.next_out, J3 - e5.avail_out) ? (V3.mode = fe2, b2) : (_e3 -= e5[n3(539)], J3 -= e5[n3(798)], e5[n3(1399)] += _e3, e5[n3(520)] += J3, V3.total += J3, V3.wrap && J3 && (e5.adler = V3.check = V3[n3(887)] ? o2(V3.check, me3, J3, e5.next_out - J3) : a2(V3.check, me3, J3, e5[n3(1349)] - J3)), e5.data_type = V3.bits + (V3.last ? 64 : 0) + (V3.mode === ee2 ? 128 : 0) + (V3[n3(1056)] === R2 || V3.mode === I2 ? 256 : 0), (_e3 === 0 && J3 === 0 || t4 === f2) && Oe2 === h2 && (Oe2 = x2), Oe2);
      }
      function X2(e5) {
        var t4 = r2;
        if (!e5 || !e5[t4(493)]) return v2;
        var n3 = e5[t4(493)];
        return n3[t4(688)] && (n3.window = null), e5.state = null, h2;
      }
      function xe2(e5, t4) {
        var n3 = r2, i3;
        return !e5 || !e5.state || (i3 = e5.state, !(i3.wrap & 2)) ? v2 : (i3[n3(1277)] = t4, t4.done = false, h2);
      }
      function Z2(e5, t4) {
        var n3 = r2, i3 = t4.length, o3, s3, c3;
        return !e5 || !e5.state || (o3 = e5.state, o3.wrap !== 0 && o3.mode !== N2) ? v2 : o3[n3(1056)] === N2 && (s3 = 1, s3 = a2(s3, t4, i3, 0), s3 !== o3.check) ? y2 : (c3 = ye2(e5, t4, i3, i3), c3 ? (o3.mode = fe2, b2) : (o3.havedict = 1, h2));
      }
      n2[r2(535)] = W2, n2.inflateReset2 = G2, n2.inflateResetKeep = ge2, n2.inflateInit = q2, n2[r2(1298)] = K2, n2.inflate = be2, n2[r2(742)] = X2, n2.inflateGetHeader = xe2, n2[r2(727)] = Z2, n2.inflateInfo = `pako inflate (from Nodeca project)`;
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e4, t3, n2) {
      var r2 = e4($(513)), i2 = 15, a2 = 852, o2 = 592, s2 = 0, c2 = 1, l2 = 2, u2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], d2 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], f2 = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p2 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      t3.exports = function(e5, t4, n3, m2, h2, g2, _2, v2) {
        var y2 = v2.bits, b2 = 0, x2 = 0, S2 = 0, C2 = 0, w2 = 0, T2 = 0, E2 = 0, D2 = 0, O2 = 0, k2 = 0, A2, j2, M2, N2, ee2, P2 = null, F2 = 0, I2, L2 = new r2.Buf16(i2 + 1), te2 = new r2.Buf16(i2 + 1), ne2 = null, re2 = 0, R2, ie2, ae2;
        for (b2 = 0; b2 <= i2; b2++) L2[b2] = 0;
        for (x2 = 0; x2 < m2; x2++) L2[t4[n3 + x2]]++;
        for (w2 = y2, C2 = i2; C2 >= 1 && L2[C2] === 0; C2--) ;
        if (w2 > C2 && (w2 = C2), C2 === 0) return h2[g2++] = 20971520, h2[g2++] = 20971520, v2.bits = 1, 0;
        for (S2 = 1; S2 < C2 && L2[S2] === 0; S2++) ;
        for (w2 < S2 && (w2 = S2), D2 = 1, b2 = 1; b2 <= i2; b2++) if (D2 <<= 1, D2 -= L2[b2], D2 < 0) return -1;
        if (D2 > 0 && (e5 === s2 || C2 !== 1)) return -1;
        for (te2[1] = 0, b2 = 1; b2 < i2; b2++) te2[b2 + 1] = te2[b2] + L2[b2];
        for (x2 = 0; x2 < m2; x2++) t4[n3 + x2] !== 0 && (_2[te2[t4[n3 + x2]]++] = x2);
        if (e5 === s2 ? (P2 = ne2 = _2, I2 = 19) : e5 === c2 ? (P2 = u2, F2 -= 257, ne2 = d2, re2 -= 257, I2 = 256) : (P2 = f2, ne2 = p2, I2 = -1), k2 = 0, x2 = 0, b2 = S2, ee2 = g2, T2 = w2, E2 = 0, M2 = -1, O2 = 1 << w2, N2 = O2 - 1, e5 === c2 && O2 > a2 || e5 === l2 && O2 > o2) return 1;
        for (; ; ) {
          R2 = b2 - E2, _2[x2] < I2 ? (ie2 = 0, ae2 = _2[x2]) : _2[x2] > I2 ? (ie2 = ne2[re2 + _2[x2]], ae2 = P2[F2 + _2[x2]]) : (ie2 = 96, ae2 = 0), A2 = 1 << b2 - E2, j2 = 1 << T2, S2 = j2;
          do
            j2 -= A2, h2[ee2 + (k2 >> E2) + j2] = R2 << 24 | ie2 << 16 | ae2 | 0;
          while (j2 !== 0);
          for (A2 = 1 << b2 - 1; k2 & A2; ) A2 >>= 1;
          if (A2 === 0 ? k2 = 0 : (k2 &= A2 - 1, k2 += A2), x2++, --L2[b2] === 0) {
            if (b2 === C2) break;
            b2 = t4[n3 + _2[x2]];
          }
          if (b2 > w2 && (k2 & N2) !== M2) {
            for (E2 === 0 && (E2 = w2), ee2 += S2, T2 = b2 - E2, D2 = 1 << T2; T2 + E2 < C2 && (D2 -= L2[T2 + E2], !(D2 <= 0)); ) T2++, D2 <<= 1;
            if (O2 += 1 << T2, e5 === c2 && O2 > a2 || e5 === l2 && O2 > o2) return 1;
            M2 = k2 & N2, h2[M2] = w2 << 24 | T2 << 16 | ee2 - g2 | 0;
          }
        }
        return k2 !== 0 && (h2[ee2 + k2] = b2 - E2 << 24 | 4194304), v2.bits = w2, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e4, t3, n2) {
      var r2 = $;
      t3[r2(952)] = { 2: `need dictionary`, 1: r2(703), 0: ``, "-1": `file error`, "-2": `stream error`, "-3": `data error`, "-4": `insufficient memory`, "-5": `buffer error`, "-6": r2(1447) };
    }, {}], 52: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(r2(513)), a2 = 4, o2 = 0, s2 = 1, c2 = 2;
      function l2(e5) {
        for (var t4 = e5.length; --t4 >= 0; ) e5[t4] = 0;
      }
      var u2 = 0, d2 = 1, f2 = 2, p2 = 3, m2 = 258, h2 = 29, g2 = 256, _2 = g2 + 1 + h2, v2 = 30, y2 = 19, b2 = 2 * _2 + 1, x2 = 15, S2 = 16, C2 = 7, w2 = 256, T2 = 16, E2 = 17, D2 = 18, O2 = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k2 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], A2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], j2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], M2 = 512, N2 = Array((_2 + 2) * 2);
      l2(N2);
      var ee2 = Array(v2 * 2);
      l2(ee2);
      var P2 = Array(M2);
      l2(P2);
      var F2 = Array(m2 - p2 + 1);
      l2(F2);
      var I2 = Array(h2);
      l2(I2);
      var L2 = Array(v2);
      l2(L2);
      function te2(e5, t4, n3, i3, a3) {
        var o3 = r2;
        this.static_tree = e5, this.extra_bits = t4, this.extra_base = n3, this.elems = i3, this.max_length = a3, this.has_stree = e5 && e5[o3(587)];
      }
      var ne2, re2, R2;
      function ie2(e5, t4) {
        this.dyn_tree = e5, this.max_code = 0, this.stat_desc = t4;
      }
      function ae2(e5) {
        return e5 < 256 ? P2[e5] : P2[256 + (e5 >>> 7)];
      }
      function oe2(e5, t4) {
        e5.pending_buf[e5.pending++] = t4 & 255, e5.pending_buf[e5.pending++] = t4 >>> 8 & 255;
      }
      function z2(e5, t4, n3) {
        var i3 = r2;
        e5[i3(1083)] > S2 - n3 ? (e5.bi_buf |= t4 << e5.bi_valid & 65535, oe2(e5, e5.bi_buf), e5[i3(1012)] = t4 >> S2 - e5[i3(1083)], e5.bi_valid += n3 - S2) : (e5.bi_buf |= t4 << e5[i3(1083)] & 65535, e5.bi_valid += n3);
      }
      function se2(e5, t4, n3) {
        z2(e5, n3[t4 * 2], n3[t4 * 2 + 1]);
      }
      function ce2(e5, t4) {
        var n3 = 0;
        do
          n3 |= e5 & 1, e5 >>>= 1, n3 <<= 1;
        while (--t4 > 0);
        return n3 >>> 1;
      }
      function le2(e5) {
        var t4 = r2;
        e5.bi_valid === 16 ? (oe2(e5, e5[t4(1012)]), e5.bi_buf = 0, e5[t4(1083)] = 0) : e5[t4(1083)] >= 8 && (e5.pending_buf[e5.pending++] = e5.bi_buf & 255, e5.bi_buf >>= 8, e5[t4(1083)] -= 8);
      }
      function ue2(e5, t4) {
        var n3 = r2, i3 = t4.dyn_tree, a3 = t4[n3(985)], o3 = t4[n3(1219)].static_tree, s3 = t4[n3(1219)][n3(867)], c3 = t4.stat_desc.extra_bits, l3 = t4.stat_desc[n3(630)], u3 = t4.stat_desc.max_length, d3, f3, p3, m3, h3, g3, _3 = 0;
        for (m3 = 0; m3 <= x2; m3++) e5.bl_count[m3] = 0;
        for (i3[e5[n3(1484)][e5[n3(411)]] * 2 + 1] = 0, d3 = e5.heap_max + 1; d3 < b2; d3++) f3 = e5.heap[d3], m3 = i3[i3[f3 * 2 + 1] * 2 + 1] + 1, m3 > u3 && (m3 = u3, _3++), i3[f3 * 2 + 1] = m3, !(f3 > a3) && (e5.bl_count[m3]++, h3 = 0, f3 >= l3 && (h3 = c3[f3 - l3]), g3 = i3[f3 * 2], e5.opt_len += g3 * (m3 + h3), s3 && (e5[n3(495)] += g3 * (o3[f3 * 2 + 1] + h3)));
        if (_3 !== 0) {
          do {
            for (m3 = u3 - 1; e5.bl_count[m3] === 0; ) m3--;
            e5[n3(482)][m3]--, e5.bl_count[m3 + 1] += 2, e5.bl_count[u3]--, _3 -= 2;
          } while (_3 > 0);
          for (m3 = u3; m3 !== 0; m3--) for (f3 = e5.bl_count[m3]; f3 !== 0; ) p3 = e5.heap[--d3], !(p3 > a3) && (i3[p3 * 2 + 1] !== m3 && (e5.opt_len += (m3 - i3[p3 * 2 + 1]) * i3[p3 * 2], i3[p3 * 2 + 1] = m3), f3--);
        }
      }
      function de2(e5, t4, n3) {
        var r3 = Array(x2 + 1), i3 = 0, a3, o3;
        for (a3 = 1; a3 <= x2; a3++) r3[a3] = i3 = i3 + n3[a3 - 1] << 1;
        for (o3 = 0; o3 <= t4; o3++) {
          var s3 = e5[o3 * 2 + 1];
          s3 !== 0 && (e5[o3 * 2] = ce2(r3[s3]++, s3));
        }
      }
      function B2() {
        var e5, t4, n3, r3, i3, a3 = Array(x2 + 1);
        for (n3 = 0, r3 = 0; r3 < h2 - 1; r3++) for (I2[r3] = n3, e5 = 0; e5 < 1 << O2[r3]; e5++) F2[n3++] = r3;
        for (F2[n3 - 1] = r3, i3 = 0, r3 = 0; r3 < 16; r3++) for (L2[r3] = i3, e5 = 0; e5 < 1 << k2[r3]; e5++) P2[i3++] = r3;
        for (i3 >>= 7; r3 < v2; r3++) for (L2[r3] = i3 << 7, e5 = 0; e5 < 1 << k2[r3] - 7; e5++) P2[256 + i3++] = r3;
        for (t4 = 0; t4 <= x2; t4++) a3[t4] = 0;
        for (e5 = 0; e5 <= 143; ) N2[e5 * 2 + 1] = 8, e5++, a3[8]++;
        for (; e5 <= 255; ) N2[e5 * 2 + 1] = 9, e5++, a3[9]++;
        for (; e5 <= 279; ) N2[e5 * 2 + 1] = 7, e5++, a3[7]++;
        for (; e5 <= 287; ) N2[e5 * 2 + 1] = 8, e5++, a3[8]++;
        for (de2(N2, _2 + 1, a3), e5 = 0; e5 < v2; e5++) ee2[e5 * 2 + 1] = 5, ee2[e5 * 2] = ce2(e5, 5);
        ne2 = new te2(N2, O2, g2 + 1, _2, x2), re2 = new te2(ee2, k2, 0, v2, x2), R2 = new te2([], A2, 0, y2, C2);
      }
      function fe2(e5) {
        var t4 = r2, n3;
        for (n3 = 0; n3 < _2; n3++) e5.dyn_ltree[n3 * 2] = 0;
        for (n3 = 0; n3 < v2; n3++) e5.dyn_dtree[n3 * 2] = 0;
        for (n3 = 0; n3 < y2; n3++) e5.bl_tree[n3 * 2] = 0;
        e5.dyn_ltree[w2 * 2] = 1, e5.opt_len = e5.static_len = 0, e5[t4(682)] = e5[t4(880)] = 0;
      }
      function pe2(e5) {
        var t4 = r2;
        e5.bi_valid > 8 ? oe2(e5, e5[t4(1012)]) : e5[t4(1083)] > 0 && (e5[t4(1456)][e5.pending++] = e5[t4(1012)]), e5.bi_buf = 0, e5.bi_valid = 0;
      }
      function V2(e5, t4, n3, a3) {
        var o3 = r2;
        pe2(e5), a3 && (oe2(e5, n3), oe2(e5, ~n3)), i2[o3(405)](e5.pending_buf, e5[o3(688)], t4, n3, e5.pending), e5[o3(951)] += n3;
      }
      function H2(e5, t4, n3, r3) {
        var i3 = t4 * 2, a3 = n3 * 2;
        return e5[i3] < e5[a3] || e5[i3] === e5[a3] && r3[t4] <= r3[n3];
      }
      function me2(e5, t4, n3) {
        for (var i3 = r2, a3 = e5.heap[n3], o3 = n3 << 1; o3 <= e5.heap_len && (o3 < e5.heap_len && H2(t4, e5.heap[o3 + 1], e5.heap[o3], e5.depth) && o3++, !H2(t4, a3, e5.heap[o3], e5.depth)); ) e5.heap[n3] = e5[i3(1484)][o3], n3 = o3, o3 <<= 1;
        e5.heap[n3] = a3;
      }
      function he2(e5, t4, n3) {
        var i3 = r2, a3, o3, s3 = 0, c3, l3;
        if (e5.last_lit !== 0) do
          a3 = e5[i3(1456)][e5.d_buf + s3 * 2] << 8 | e5.pending_buf[e5.d_buf + s3 * 2 + 1], o3 = e5.pending_buf[e5.l_buf + s3], s3++, a3 === 0 ? se2(e5, o3, t4) : (c3 = F2[o3], se2(e5, c3 + g2 + 1, t4), l3 = O2[c3], l3 !== 0 && (o3 -= I2[c3], z2(e5, o3, l3)), a3--, c3 = ae2(a3), se2(e5, c3, n3), l3 = k2[c3], l3 !== 0 && (a3 -= L2[c3], z2(e5, a3, l3)));
        while (s3 < e5.last_lit);
        se2(e5, w2, t4);
      }
      function U2(e5, t4) {
        var n3 = r2, i3 = t4.dyn_tree, a3 = t4.stat_desc[n3(642)], o3 = t4.stat_desc.has_stree, s3 = t4.stat_desc.elems, c3, l3, u3 = -1, d3;
        for (e5[n3(1053)] = 0, e5.heap_max = b2, c3 = 0; c3 < s3; c3++) i3[c3 * 2] === 0 ? i3[c3 * 2 + 1] = 0 : (e5.heap[++e5.heap_len] = u3 = c3, e5.depth[c3] = 0);
        for (; e5.heap_len < 2; ) d3 = e5.heap[++e5.heap_len] = u3 < 2 ? ++u3 : 0, i3[d3 * 2] = 1, e5[n3(1243)][d3] = 0, e5.opt_len--, o3 && (e5.static_len -= a3[d3 * 2 + 1]);
        for (t4.max_code = u3, c3 = e5.heap_len >> 1; c3 >= 1; c3--) me2(e5, i3, c3);
        d3 = s3;
        do
          c3 = e5.heap[1], e5.heap[1] = e5.heap[e5.heap_len--], me2(e5, i3, 1), l3 = e5.heap[1], e5[n3(1484)][--e5.heap_max] = c3, e5[n3(1484)][--e5.heap_max] = l3, i3[d3 * 2] = i3[c3 * 2] + i3[l3 * 2], e5.depth[d3] = (e5.depth[c3] >= e5.depth[l3] ? e5.depth[c3] : e5.depth[l3]) + 1, i3[c3 * 2 + 1] = i3[l3 * 2 + 1] = d3, e5.heap[1] = d3++, me2(e5, i3, 1);
        while (e5.heap_len >= 2);
        e5[n3(1484)][--e5.heap_max] = e5.heap[1], ue2(e5, t4), de2(i3, u3, e5[n3(482)]);
      }
      function ge2(e5, t4, n3) {
        var i3 = r2, a3, o3 = -1, s3, c3 = t4[1], l3 = 0, u3 = 7, d3 = 4;
        for (c3 === 0 && (u3 = 138, d3 = 3), t4[(n3 + 1) * 2 + 1] = 65535, a3 = 0; a3 <= n3; a3++) s3 = c3, c3 = t4[(a3 + 1) * 2 + 1], !(++l3 < u3 && s3 === c3) && (l3 < d3 ? e5.bl_tree[s3 * 2] += l3 : s3 === 0 ? l3 <= 10 ? e5.bl_tree[E2 * 2]++ : e5.bl_tree[D2 * 2]++ : (s3 !== o3 && e5[i3(972)][s3 * 2]++, e5.bl_tree[T2 * 2]++), l3 = 0, o3 = s3, c3 === 0 ? (u3 = 138, d3 = 3) : s3 === c3 ? (u3 = 6, d3 = 3) : (u3 = 7, d3 = 4));
      }
      function W2(e5, t4, n3) {
        var i3 = r2, a3, o3 = -1, s3, c3 = t4[1], l3 = 0, u3 = 7, d3 = 4;
        for (c3 === 0 && (u3 = 138, d3 = 3), a3 = 0; a3 <= n3; a3++) if (s3 = c3, c3 = t4[(a3 + 1) * 2 + 1], !(++l3 < u3 && s3 === c3)) {
          if (l3 < d3) do
            se2(e5, s3, e5[i3(972)]);
          while (--l3 !== 0);
          else s3 === 0 ? l3 <= 10 ? (se2(e5, E2, e5[i3(972)]), z2(e5, l3 - 3, 3)) : (se2(e5, D2, e5.bl_tree), z2(e5, l3 - 11, 7)) : (s3 !== o3 && (se2(e5, s3, e5.bl_tree), l3--), se2(e5, T2, e5.bl_tree), z2(e5, l3 - 3, 2));
          l3 = 0, o3 = s3, c3 === 0 ? (u3 = 138, d3 = 3) : s3 === c3 ? (u3 = 6, d3 = 3) : (u3 = 7, d3 = 4);
        }
      }
      function G2(e5) {
        var t4;
        for (ge2(e5, e5.dyn_ltree, e5.l_desc.max_code), ge2(e5, e5.dyn_dtree, e5.d_desc.max_code), U2(e5, e5.bl_desc), t4 = y2 - 1; t4 >= 3 && e5.bl_tree[j2[t4] * 2 + 1] === 0; t4--) ;
        return e5.opt_len += 3 * (t4 + 1) + 5 + 5 + 4, t4;
      }
      function K2(e5, t4, n3, r3) {
        var i3;
        for (z2(e5, t4 - 257, 5), z2(e5, n3 - 1, 5), z2(e5, r3 - 4, 4), i3 = 0; i3 < r3; i3++) z2(e5, e5.bl_tree[j2[i3] * 2 + 1], 3);
        W2(e5, e5.dyn_ltree, t4 - 1), W2(e5, e5.dyn_dtree, n3 - 1);
      }
      function q2(e5) {
        var t4 = r2, n3 = 4093624447, i3;
        for (i3 = 0; i3 <= 31; i3++, n3 >>>= 1) if (n3 & 1 && e5[t4(1218)][i3 * 2] !== 0) return o2;
        if (e5.dyn_ltree[18] !== 0 || e5[t4(1218)][20] !== 0 || e5.dyn_ltree[26] !== 0) return s2;
        for (i3 = 32; i3 < g2; i3++) if (e5.dyn_ltree[i3 * 2] !== 0) return s2;
        return o2;
      }
      var _e2 = false;
      function J2(e5) {
        _e2 || (_e2 = (B2(), true)), e5.l_desc = new ie2(e5.dyn_ltree, ne2), e5.d_desc = new ie2(e5.dyn_dtree, re2), e5.bl_desc = new ie2(e5.bl_tree, R2), e5.bi_buf = 0, e5.bi_valid = 0, fe2(e5);
      }
      function Y2(e5, t4, n3, r3) {
        z2(e5, (u2 << 1) + +!!r3, 3), V2(e5, t4, n3, true);
      }
      function ve2(e5) {
        z2(e5, d2 << 1, 3), se2(e5, w2, N2), le2(e5);
      }
      function ye2(e5, t4, n3, i3) {
        var o3 = r2, s3, l3, u3 = 0;
        e5.level > 0 ? (e5.strm[o3(436)] === c2 && (e5.strm.data_type = q2(e5)), U2(e5, e5[o3(1036)]), U2(e5, e5.d_desc), u3 = G2(e5), s3 = e5.opt_len + 3 + 7 >>> 3, l3 = e5.static_len + 3 + 7 >>> 3, l3 <= s3 && (s3 = l3)) : s3 = l3 = n3 + 5, n3 + 4 <= s3 && t4 !== -1 ? Y2(e5, t4, n3, i3) : e5.strategy === a2 || l3 === s3 ? (z2(e5, (d2 << 1) + +!!i3, 3), he2(e5, N2, ee2)) : (z2(e5, (f2 << 1) + +!!i3, 3), K2(e5, e5[o3(1036)].max_code + 1, e5[o3(604)].max_code + 1, u3 + 1), he2(e5, e5.dyn_ltree, e5.dyn_dtree)), fe2(e5), i3 && pe2(e5);
      }
      function be2(e5, t4, n3) {
        var i3 = r2;
        return e5.pending_buf[e5[i3(967)] + e5[i3(682)] * 2] = t4 >>> 8 & 255, e5[i3(1456)][e5.d_buf + e5.last_lit * 2 + 1] = t4 & 255, e5.pending_buf[e5.l_buf + e5.last_lit] = n3 & 255, e5.last_lit++, t4 === 0 ? e5.dyn_ltree[n3 * 2]++ : (e5[i3(880)]++, t4--, e5.dyn_ltree[(F2[n3] + g2 + 1) * 2]++, e5.dyn_dtree[ae2(t4) * 2]++), e5[i3(682)] === e5.lit_bufsize - 1;
      }
      n2._tr_init = J2, n2._tr_stored_block = Y2, n2._tr_flush_block = ye2, n2._tr_tally = be2, n2[r2(667)] = ve2;
    }, { "../utils/common": 41 }], 53: [function(e4, t3, n2) {
      function r2() {
        var e5 = $;
        this.input = null, this.next_in = 0, this[e5(539)] = 0, this.total_in = 0, this.output = null, this[e5(1349)] = 0, this.avail_out = 0, this.total_out = 0, this.msg = ``, this.state = null, this.data_type = 2, this[e5(518)] = 0;
      }
      t3.exports = r2;
    }, {}], 54: [function(e4, t3, n2) {
      (function(e5) {
        (function(e6, t4) {
          var n3 = $;
          if (e6.setImmediate) return;
          var r2 = 1, i2 = {}, a2 = false, o2 = e6[n3(502)], s2;
          function c2(e7) {
            typeof e7 != `function` && (e7 = Function(`` + e7));
            for (var t5 = Array(arguments.length - 1), n4 = 0; n4 < t5.length; n4++) t5[n4] = arguments[n4 + 1];
            return i2[r2] = { callback: e7, args: t5 }, s2(r2), r2++;
          }
          function l2(e7) {
            delete i2[e7];
          }
          function u2(e7) {
            var n4 = e7.callback, r3 = e7.args;
            switch (r3.length) {
              case 0:
                n4();
                break;
              case 1:
                n4(r3[0]);
                break;
              case 2:
                n4(r3[0], r3[1]);
                break;
              case 3:
                n4(r3[0], r3[1], r3[2]);
                break;
              default:
                n4.apply(t4, r3);
                break;
            }
          }
          function d2(e7) {
            if (a2) setTimeout(d2, 0, e7);
            else {
              var t5 = i2[e7];
              if (t5) {
                a2 = true;
                try {
                  u2(t5);
                } finally {
                  l2(e7), a2 = false;
                }
              }
            }
          }
          function f2() {
            s2 = function(e7) {
              process.nextTick(function() {
                d2(e7);
              });
            };
          }
          function p2() {
            var t5 = n3;
            if (e6[t5(705)] && !e6[t5(395)]) {
              var r3 = true, i3 = e6[t5(917)];
              return e6[t5(917)] = function() {
                r3 = false;
              }, e6.postMessage(``, `*`), e6[t5(917)] = i3, r3;
            }
          }
          function m2() {
            var t5 = `setImmediate$` + Math.random() + `$`, n4 = function(n5) {
              var r3 = $;
              n5.source === e6 && typeof n5.data == r3(784) && n5.data[r3(755)](t5) === 0 && d2(+n5.data.slice(t5.length));
            };
            e6.addEventListener ? e6.addEventListener(`message`, n4, false) : e6.attachEvent(`onmessage`, n4), s2 = function(n5) {
              e6.postMessage(t5 + n5, `*`);
            };
          }
          function h2() {
            var e7 = new MessageChannel();
            e7.port1.onmessage = function(e8) {
              var t5 = e8.data;
              d2(t5);
            }, s2 = function(t5) {
              e7.port2.postMessage(t5);
            };
          }
          function g2() {
            var e7 = o2.documentElement;
            s2 = function(t5) {
              var n4 = o2[$(1119)](`script`);
              n4.onreadystatechange = function() {
                d2(t5), n4.onreadystatechange = null, e7.removeChild(n4), n4 = null;
              }, e7.appendChild(n4);
            };
          }
          function _2() {
            s2 = function(e7) {
              setTimeout(d2, 0, e7);
            };
          }
          var v2 = Object.getPrototypeOf && Object.getPrototypeOf(e6);
          v2 = v2 && v2.setTimeout ? v2 : e6, {}.toString.call(e6.process) === `[object process]` ? f2() : p2() ? m2() : e6.MessageChannel ? h2() : o2 && n3(1275) in o2[n3(1119)](`script`) ? g2() : _2(), v2[n3(1088)] = c2, v2.clearImmediate = l2;
        })(typeof self > `u` ? e5 === void 0 ? this : e5 : self);
      }).call(this, typeof global < `u` ? global : typeof self < `u` ? self : typeof window < `u` ? window : {});
    }, {}] }, {}, [10])(10);
  });
})()), Ut = class {
  constructor() {
    var e3 = i;
    this.zip = void 0, this[e3(775)] = {}, this.checkRequirements();
  }
  checkRequirements() {
    try {
      this.zip = new Ht.default();
    } catch {
      throw Error(`JSZip lib not loaded`);
    }
  }
  open(e3, t2) {
    return this.zip.loadAsync(e3, { base64: t2 });
  }
  openUrl(e3, t2) {
    var n2 = i;
    return Be(e3, n2(921))[n2(631)]((function(e4) {
      var r2 = n2;
      return this[r2(1458)][r2(851)](e4, { base64: t2 });
    })[n2(594)](this));
  }
  request(e3, t2) {
    var n2 = i, r2 = new X(), a2, o2 = new Oe(e3);
    return t2 || (t2 = o2.extension), a2 = t2 == `blob` ? this.getBlob(e3) : this.getText(e3), a2 ? a2.then((function(e4) {
      let n3 = this.handleResponse(e4, t2);
      r2.resolve(n3);
    })[n2(594)](this)) : r2.reject({ message: `File not found in the epub: ` + e3, stack: Error()[n2(499)] }), r2.promise;
  }
  [i(732)](e3, t2) {
    return t2 == `json` ? JSON.parse(e3) : me(t2) ? K(e3, `text/xml`) : t2 == `xhtml` ? K(e3, `application/xhtml+xml`) : t2 == `html` || t2 == `htm` ? K(e3, `text/html`) : e3;
  }
  [i(591)](e3, t2) {
    var n2 = i, r2 = window.decodeURIComponent(e3.substr(1)), a2 = this.zip[n2(901)](r2);
    if (a2) return t2 || (t2 = $e.lookup(a2.name)), a2[n2(1353)](`uint8array`).then(function(e4) {
      return new Blob([e4], { type: t2 });
    });
  }
  getText(e3, t2) {
    var n2 = i, r2 = window.decodeURIComponent(e3.substr(1)), a2 = this.zip[n2(901)](r2);
    if (a2) return a2.async(n2(784))[n2(631)](function(e4) {
      return e4;
    });
  }
  getBase64(e3, t2) {
    var n2 = i, r2 = window.decodeURIComponent(e3.substr(1)), a2 = this.zip.file(r2);
    if (a2) return t2 || (t2 = $e.lookup(a2.name)), a2.async(n2(1363)).then(function(e4) {
      return `data:` + t2 + `;base64,` + e4;
    });
  }
  createUrl(e3, t2) {
    var n2 = i, r2 = new X(), a2 = window.URL || window.webkitURL || window.mozURL, o2, s2, c2 = t2 && t2.base64;
    return e3 in this.urlCache ? (r2.resolve(this.urlCache[e3]), r2.promise) : (c2 ? (s2 = this[n2(1115)](e3), s2 && s2.then((function(t3) {
      this.urlCache[e3] = t3, r2.resolve(t3);
    }).bind(this))) : (s2 = this[n2(591)](e3), s2 && s2.then((function(t3) {
      o2 = a2[n2(995)](t3), this.urlCache[e3] = o2, r2.resolve(o2);
    }).bind(this))), s2 || r2.reject({ message: `File not found in the epub: ` + e3, stack: Error().stack }), r2[n2(371)]);
  }
  revokeUrl(e3) {
    var t2 = window.URL || window.webkitURL || window.mozURL, n2 = this.urlCache[e3];
    n2 && t2.revokeObjectURL(n2);
  }
  destroy() {
    var e3 = i, t2 = window[e3(1444)] || window.webkitURL || window[e3(609)];
    for (let n2 in this.urlCache) t2[e3(1045)](n2);
    this.zip = void 0, this.urlCache = {};
  }
}, Wt = t(e((e3, t2) => {
  (function(n2) {
    var r2 = $;
    if (typeof e3 == `object` && t2 !== void 0) t2[r2(952)] = n2();
    else if (typeof define == `function` && define.amd) define([], n2);
    else {
      var i2 = typeof window < `u` ? window : typeof global < `u` ? global : typeof self < `u` ? self : this;
      i2[r2(490)] = n2();
    }
  })(function() {
    return (function e4(t3, r2, i2) {
      function a2(s3, c2) {
        var l2 = $;
        if (!r2[s3]) {
          if (!t3[s3]) {
            var u2 = typeof n == l2(799) && n;
            if (!c2 && u2) return u2(s3, true);
            if (o2) return o2(s3, true);
            var d2 = Error(`Cannot find module '` + s3 + `'`);
            throw d2.code = `MODULE_NOT_FOUND`, d2;
          }
          var f2 = r2[s3] = { exports: {} };
          t3[s3][0].call(f2.exports, function(e5) {
            var n2 = t3[s3][1][e5];
            return a2(n2 || e5);
          }, f2, f2.exports, e4, t3, r2, i2);
        }
        return r2[s3][l2(952)];
      }
      for (var o2 = typeof n == `function` && n, s2 = 0; s2 < i2.length; s2++) a2(i2[s2]);
      return a2;
    })({ 1: [function(e4, t3, n2) {
      (function(e5) {
        var n3 = $, r2 = e5.MutationObserver || e5.WebKitMutationObserver, i2;
        if (r2) {
          var a2 = 0, o2 = new r2(d2), s2 = e5.document.createTextNode(``);
          o2.observe(s2, { characterData: true }), i2 = function() {
            s2.data = a2 = ++a2 % 2;
          };
        } else if (!e5.setImmediate && e5[n3(1048)] !== void 0) {
          var c2 = new e5.MessageChannel();
          c2.port1[n3(917)] = d2, i2 = function() {
            c2.port2.postMessage(0);
          };
        } else i2 = `document` in e5 && n3(1275) in e5.document.createElement(`script`) ? function() {
          var t4 = e5[n3(502)].createElement(`script`);
          t4.onreadystatechange = function() {
            d2(), t4.onreadystatechange = null, t4.parentNode.removeChild(t4), t4 = null;
          }, e5.document.documentElement.appendChild(t4);
        } : function() {
          setTimeout(d2, 0);
        };
        var l2, u2 = [];
        function d2() {
          var e6 = n3;
          l2 = true;
          for (var t4, r3, i3 = u2.length; i3; ) {
            for (r3 = u2, u2 = [], t4 = -1; ++t4 < i3; ) r3[t4]();
            i3 = u2[e6(587)];
          }
          l2 = false;
        }
        t3.exports = f2;
        function f2(e6) {
          u2[n3(1386)](e6) === 1 && !l2 && i2();
        }
      }).call(this, typeof global < `u` ? global : typeof self < `u` ? self : typeof window < `u` ? window : {});
    }, {}], 2: [function(e4, t3, n2) {
      var r2 = $, i2 = e4(1);
      function a2() {
      }
      var o2 = {}, s2 = [`REJECTED`], c2 = [`FULFILLED`], l2 = [`PENDING`];
      t3.exports = u2;
      function u2(e5) {
        var t4 = $;
        if (typeof e5 != `function`) throw TypeError(`resolver must be a function`);
        this.state = l2, this[t4(779)] = [], this.outcome = void 0, e5 !== a2 && m2(this, e5);
      }
      u2.prototype.catch = function(e5) {
        return this.then(null, e5);
      }, u2.prototype.then = function(e5, t4) {
        var n3 = $;
        if (typeof e5 != `function` && this[n3(493)] === c2 || typeof t4 != `function` && this.state === s2) return this;
        var r3 = new this.constructor(a2);
        return this.state === l2 ? this[n3(779)][n3(1386)](new d2(r3, e5, t4)) : f2(r3, this.state === c2 ? e5 : t4, this.outcome), r3;
      };
      function d2(e5, t4, n3) {
        var r3 = $;
        this.promise = e5, typeof t4 == `function` && (this.onFulfilled = t4, this.callFulfilled = this.otherCallFulfilled), typeof n3 == `function` && (this.onRejected = n3, this[r3(1135)] = this[r3(1263)]);
      }
      d2.prototype.callFulfilled = function(e5) {
        o2.resolve(this.promise, e5);
      }, d2.prototype.otherCallFulfilled = function(e5) {
        var t4 = $;
        f2(this[t4(371)], this.onFulfilled, e5);
      }, d2.prototype.callRejected = function(e5) {
        o2.reject(this.promise, e5);
      }, d2[r2(427)].otherCallRejected = function(e5) {
        var t4 = r2;
        f2(this.promise, this[t4(625)], e5);
      };
      function f2(e5, t4, n3) {
        i2(function() {
          var r3 = $, i3;
          try {
            i3 = t4(n3);
          } catch (t5) {
            return o2.reject(e5, t5);
          }
          i3 === e5 ? o2.reject(e5, TypeError(`Cannot resolve promise with itself`)) : o2[r3(550)](e5, i3);
        });
      }
      o2.resolve = function(e5, t4) {
        var n3 = r2, i3 = h2(p2, t4);
        if (i3.status === `error`) return o2.reject(e5, i3.value);
        var a3 = i3.value;
        if (a3) m2(e5, a3);
        else {
          e5.state = c2, e5.outcome = t4;
          for (var s3 = -1, l3 = e5.queue[n3(587)]; ++s3 < l3; ) e5.queue[s3][n3(1266)](t4);
        }
        return e5;
      }, o2.reject = function(e5, t4) {
        var n3 = r2;
        e5.state = s2, e5.outcome = t4;
        for (var i3 = -1, a3 = e5.queue[n3(587)]; ++i3 < a3; ) e5.queue[i3][n3(1135)](t4);
        return e5;
      };
      function p2(e5) {
        var t4 = r2, n3 = e5 && e5.then;
        if (e5 && (typeof e5 == `object` || typeof e5 == `function`) && typeof n3 == t4(799)) return function() {
          n3[t4(1445)](e5, arguments);
        };
      }
      function m2(e5, t4) {
        var n3 = false;
        function r3(t5) {
          var r4 = $;
          n3 || (n3 = true, o2[r4(1220)](e5, t5));
        }
        function i3(t5) {
          n3 || (n3 = true, o2.resolve(e5, t5));
        }
        function a3() {
          t4(i3, r3);
        }
        var s3 = h2(a3);
        s3.status === `error` && r3(s3.value);
      }
      function h2(e5, t4) {
        var n3 = r2, i3 = {};
        try {
          i3.value = e5(t4), i3.status = n3(1080);
        } catch (e6) {
          i3.status = `error`, i3.value = e6;
        }
        return i3;
      }
      u2.resolve = g2;
      function g2(e5) {
        return e5 instanceof this ? e5 : o2.resolve(new this(a2), e5);
      }
      u2.reject = _2;
      function _2(e5) {
        var t4 = r2, n3 = new this(a2);
        return o2[t4(1220)](n3, e5);
      }
      u2.all = v2;
      function v2(e5) {
        var t4 = this;
        if (Object.prototype.toString.call(e5) !== `[object Array]`) return this.reject(TypeError(`must be an array`));
        var n3 = e5.length, r3 = false;
        if (!n3) return this.resolve([]);
        for (var i3 = Array(n3), s3 = 0, c3 = -1, l3 = new this(a2); ++c3 < n3; ) u3(e5[c3], c3);
        return l3;
        function u3(e6, a3) {
          t4.resolve(e6).then(c4, function(e7) {
            r3 || (r3 = true, o2.reject(l3, e7));
          });
          function c4(e7) {
            i3[a3] = e7, ++s3 === n3 && !r3 && (r3 = true, o2.resolve(l3, i3));
          }
        }
      }
      u2[r2(646)] = y2;
      function y2(e5) {
        var t4 = this;
        if (Object.prototype.toString.call(e5) !== `[object Array]`) return this.reject(TypeError(`must be an array`));
        var n3 = e5.length, r3 = false;
        if (!n3) return this.resolve([]);
        for (var i3 = -1, s3 = new this(a2); ++i3 < n3; ) c3(e5[i3]);
        return s3;
        function c3(e6) {
          t4.resolve(e6).then(function(e7) {
            var t5 = $;
            r3 || (r3 = true, o2[t5(550)](s3, e7));
          }, function(e7) {
            var t5 = $;
            r3 || (r3 = true, o2[t5(1220)](s3, e7));
          });
        }
      }
    }, { 1: 1 }], 3: [function(e4, t3, n2) {
      (function(t4) {
        typeof t4.Promise != `function` && (t4.Promise = e4(2));
      }).call(this, typeof global < `u` ? global : typeof self < `u` ? self : typeof window < `u` ? window : {});
    }, { 2: 2 }], 4: [function(e4, t3, n2) {
      var r2 = $, i2 = typeof Symbol == r2(799) && typeof Symbol.iterator == `symbol` ? function(e5) {
        return typeof e5;
      } : function(e5) {
        return e5 && typeof Symbol == `function` && e5[r2(607)] === Symbol && e5 !== Symbol.prototype ? `symbol` : typeof e5;
      };
      function a2(e5, t4) {
        if (!(e5 instanceof t4)) throw TypeError(`Cannot call a class as a function`);
      }
      function o2() {
        try {
          if (typeof indexedDB < `u`) return indexedDB;
          if (typeof webkitIndexedDB < `u`) return webkitIndexedDB;
          if (typeof mozIndexedDB < `u`) return mozIndexedDB;
          if (typeof OIndexedDB < `u`) return OIndexedDB;
          if (typeof msIndexedDB < `u`) return msIndexedDB;
        } catch {
          return;
        }
      }
      var s2 = o2();
      function c2() {
        var e5 = r2;
        try {
          if (!s2 || !s2.open) return false;
          var t4 = typeof openDatabase < `u` && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), n3 = typeof fetch == e5(799) && fetch.toString().indexOf(e5(700)) !== -1;
          return (!t4 || n3) && typeof indexedDB < `u` && typeof IDBKeyRange < `u`;
        } catch {
          return false;
        }
      }
      function l2(e5, t4) {
        var n3 = r2;
        e5 || (e5 = []), t4 || (t4 = {});
        try {
          return new Blob(e5, t4);
        } catch (r3) {
          if (r3.name !== `TypeError`) throw r3;
          for (var i3 = new (typeof BlobBuilder < `u` ? BlobBuilder : typeof MSBlobBuilder < `u` ? MSBlobBuilder : typeof MozBlobBuilder < `u` ? MozBlobBuilder : WebKitBlobBuilder)(), a3 = 0; a3 < e5[n3(587)]; a3 += 1) i3.append(e5[a3]);
          return i3.getBlob(t4.type);
        }
      }
      typeof Promise > `u` && e4(3);
      var u2 = Promise;
      function d2(e5, t4) {
        t4 && e5.then(function(e6) {
          t4(null, e6);
        }, function(e6) {
          t4(e6);
        });
      }
      function f2(e5, t4, n3) {
        typeof t4 == r2(799) && e5.then(t4), typeof n3 == `function` && e5.catch(n3);
      }
      function p2(e5) {
        return typeof e5 != `string` && (console.warn(e5 + ` used as a key, but it is not a string.`), e5 = String(e5)), e5;
      }
      function m2() {
        var e5 = r2;
        if (arguments.length && typeof arguments[arguments.length - 1] == `function`) return arguments[arguments[e5(587)] - 1];
      }
      var h2 = `local-forage-detect-blob-support`, g2 = void 0, _2 = {}, v2 = Object.prototype.toString, y2 = `readonly`, b2 = `readwrite`;
      function x2(e5) {
        for (var t4 = e5.length, n3 = new ArrayBuffer(t4), r3 = new Uint8Array(n3), i3 = 0; i3 < t4; i3++) r3[i3] = e5.charCodeAt(i3);
        return n3;
      }
      function S2(e5) {
        var t4 = r2;
        return new u2(function(t5) {
          var n3 = e5.transaction(h2, b2), r3 = l2([``]);
          n3.objectStore(h2).put(r3, `key`), n3.onabort = function(e6) {
            e6.preventDefault(), e6.stopPropagation(), t5(false);
          }, n3.oncomplete = function() {
            var e6 = $, n4 = navigator.userAgent.match(/Chrome\/(\d+)/);
            t5(navigator[e6(565)].match(/Edge\//) || !n4 || parseInt(n4[1], 10) >= 43);
          };
        })[t4(544)](function() {
          return false;
        });
      }
      function C2(e5) {
        return typeof g2 == `boolean` ? u2.resolve(g2) : S2(e5).then(function(e6) {
          return g2 = e6, g2;
        });
      }
      function w2(e5) {
        var t4 = _2[e5.name], n3 = {};
        n3.promise = new u2(function(e6, t5) {
          var r3 = $;
          n3.resolve = e6, n3[r3(1220)] = t5;
        }), t4.deferredOperations.push(n3), t4.dbReady ? t4.dbReady = t4.dbReady.then(function() {
          return n3.promise;
        }) : t4.dbReady = n3.promise;
      }
      function T2(e5) {
        var t4 = _2[e5[r2(701)]].deferredOperations.pop();
        if (t4) return t4.resolve(), t4.promise;
      }
      function E2(e5, t4) {
        var n3 = r2, i3 = _2[e5.name][n3(683)].pop();
        if (i3) return i3[n3(1220)](t4), i3[n3(371)];
      }
      function D2(e5, t4) {
        return new u2(function(n3, r3) {
          var i3 = $;
          if (_2[e5.name] = _2[e5.name] || I2(), e5.db) if (t4) w2(e5), e5.db.close();
          else return n3(e5.db);
          var a3 = [e5.name];
          t4 && a3.push(e5.version);
          var o3 = s2.open.apply(s2, a3);
          t4 && (o3[i3(443)] = function(t5) {
            var n4 = i3, r4 = o3.result;
            try {
              r4.createObjectStore(e5.storeName), t5[n4(819)] <= 1 && r4.createObjectStore(h2);
            } catch (r5) {
              if (r5.name === `ConstraintError`) console.warn(`The database "` + e5.name + `" has been upgraded from version ` + t5.oldVersion + ` to version ` + t5[n4(1032)] + `, but the storage "` + e5.storeName + `" already exists.`);
              else throw r5;
            }
          }), o3.onerror = function(e6) {
            e6[i3(839)](), r3(o3.error);
          }, o3.onsuccess = function() {
            var t5 = o3.result;
            t5.onversionchange = function(e6) {
              e6[$(1417)].close();
            }, n3(t5), T2(e5);
          };
        });
      }
      function O2(e5) {
        return D2(e5, false);
      }
      function k2(e5) {
        return D2(e5, true);
      }
      function A2(e5, t4) {
        var n3 = r2;
        if (!e5.db) return true;
        var i3 = !e5.db.objectStoreNames.contains(e5[n3(781)]), a3 = e5.version < e5.db.version, o3 = e5[n3(1272)] > e5.db[n3(1272)];
        if (a3 && (e5.version !== t4 && console[n3(1465)](n3(1150) + e5.name + `" can't be downgraded from version ` + e5.db[n3(1272)] + ` to version ` + e5.version + `.`), e5.version = e5.db.version), o3 || i3) {
          if (i3) {
            var s3 = e5.db.version + 1;
            s3 > e5[n3(1272)] && (e5.version = s3);
          }
          return true;
        }
        return false;
      }
      function j2(e5) {
        return new u2(function(t4, n3) {
          var r3 = $, i3 = new FileReader();
          i3.onerror = n3, i3.onloadend = function(n4) {
            var r4 = $;
            t4({ __local_forage_encoded_blob: true, data: btoa(n4[r4(1417)].result || ``), type: e5[r4(447)] });
          }, i3[r3(938)](e5);
        });
      }
      function M2(e5) {
        return l2([x2(atob(e5.data))], { type: e5.type });
      }
      function N2(e5) {
        return e5 && e5.__local_forage_encoded_blob;
      }
      function ee2(e5) {
        var t4 = r2, n3 = this, i3 = n3[t4(1077)]()[t4(631)](function() {
          var e6 = _2[n3[t4(1466)].name];
          if (e6 && e6.dbReady) return e6.dbReady;
        });
        return f2(i3, e5, e5), i3;
      }
      function P2(e5) {
        w2(e5);
        for (var t4 = _2[e5.name], n3 = t4.forages, r3 = 0; r3 < n3.length; r3++) {
          var i3 = n3[r3];
          i3._dbInfo.db && (i3._dbInfo.db.close(), i3._dbInfo.db = null);
        }
        return e5.db = null, O2(e5).then(function(t5) {
          return e5.db = t5, A2(e5) ? k2(e5) : t5;
        }).then(function(r4) {
          e5.db = t4.db = r4;
          for (var i4 = 0; i4 < n3.length; i4++) n3[i4]._dbInfo.db = r4;
        }).catch(function(t5) {
          throw E2(e5, t5), t5;
        });
      }
      function F2(e5, t4, n3, r3) {
        r3 === void 0 && (r3 = 1);
        try {
          n3(null, e5.db.transaction(e5.storeName, t4));
        } catch (i3) {
          if (r3 > 0 && (!e5.db || i3.name === `InvalidStateError` || i3.name === `NotFoundError`)) return u2.resolve().then(function() {
            if (!e5.db || i3.name === `NotFoundError` && !e5.db.objectStoreNames.contains(e5.storeName) && e5.version <= e5.db.version) return e5.db && (e5.version = e5.db.version + 1), k2(e5);
          }).then(function() {
            return P2(e5).then(function() {
              F2(e5, t4, n3, r3 - 1);
            });
          }).catch(n3);
          n3(i3);
        }
      }
      function I2() {
        return { forages: [], db: null, dbReady: null, deferredOperations: [] };
      }
      function L2(e5) {
        var t4 = r2, n3 = this, i3 = { db: null };
        if (e5) for (var a3 in e5) i3[a3] = e5[a3];
        var o3 = _2[i3.name];
        o3 || (o3 = I2(), _2[i3.name] = o3), o3.forages.push(n3), n3._initReady || (n3._initReady = n3.ready, n3.ready = ee2);
        var s3 = [];
        function c3() {
          return u2.resolve();
        }
        for (var l3 = 0; l3 < o3.forages.length; l3++) {
          var d3 = o3.forages[l3];
          d3 !== n3 && s3.push(d3._initReady().catch(c3));
        }
        var f3 = o3.forages.slice(0);
        return u2.all(s3).then(function() {
          return i3.db = o3.db, O2(i3);
        })[t4(631)](function(e6) {
          var r3 = t4;
          return i3.db = e6, A2(i3, n3._defaultConfig[r3(1272)]) ? k2(i3) : e6;
        }).then(function(e6) {
          var r3 = t4;
          i3.db = o3.db = e6, n3[r3(1466)] = i3;
          for (var a4 = 0; a4 < f3.length; a4++) {
            var s4 = f3[a4];
            s4 !== n3 && (s4._dbInfo.db = i3.db, s4._dbInfo.version = i3.version);
          }
        });
      }
      function te2(e5, t4) {
        var n3 = this;
        e5 = p2(e5);
        var r3 = new u2(function(t5, r4) {
          n3[$(1316)]().then(function() {
            F2(n3._dbInfo, y2, function(i3, a3) {
              var o3 = $;
              if (i3) return r4(i3);
              try {
                var s3 = a3.objectStore(n3._dbInfo[o3(781)]).get(e5);
                s3.onsuccess = function() {
                  var e6 = s3.result;
                  e6 === void 0 && (e6 = null), N2(e6) && (e6 = M2(e6)), t5(e6);
                }, s3[o3(865)] = function() {
                  r4(s3.error);
                };
              } catch (e6) {
                r4(e6);
              }
            });
          }).catch(r4);
        });
        return d2(r3, t4), r3;
      }
      function ne2(e5, t4) {
        var n3 = this, r3 = new u2(function(t5, r4) {
          n3.ready().then(function() {
            F2(n3._dbInfo, y2, function(i3, a3) {
              if (i3) return r4(i3);
              try {
                var o3 = a3.objectStore(n3._dbInfo.storeName).openCursor(), s3 = 1;
                o3.onsuccess = function() {
                  var n4 = $, r5 = o3[n4(718)];
                  if (r5) {
                    var i4 = r5.value;
                    N2(i4) && (i4 = M2(i4));
                    var a4 = e5(i4, r5[n4(370)], s3++);
                    a4 === void 0 ? r5.continue() : t5(a4);
                  } else t5();
                }, o3.onerror = function() {
                  r4(o3.error);
                };
              } catch (e6) {
                r4(e6);
              }
            });
          }).catch(r4);
        });
        return d2(r3, t4), r3;
      }
      function re2(e5, t4, n3) {
        var r3 = this;
        e5 = p2(e5);
        var i3 = new u2(function(n4, i4) {
          var a3 = $, o3;
          r3.ready().then(function() {
            return o3 = r3._dbInfo, v2.call(t4) === `[object Blob]` ? C2(o3.db).then(function(e6) {
              return e6 ? t4 : j2(t4);
            }) : t4;
          })[a3(631)](function(t5) {
            F2(r3._dbInfo, b2, function(a4, o4) {
              var s3 = $;
              if (a4) return i4(a4);
              try {
                var c3 = o4[s3(437)](r3._dbInfo.storeName);
                t5 === null && (t5 = void 0);
                var l3 = c3.put(t5, e5);
                o4.oncomplete = function() {
                  t5 === void 0 && (t5 = null), n4(t5);
                }, o4.onabort = o4.onerror = function() {
                  i4(l3.error ? l3.error : l3.transaction.error);
                };
              } catch (e6) {
                i4(e6);
              }
            });
          }).catch(i4);
        });
        return d2(i3, n3), i3;
      }
      function R2(e5, t4) {
        var n3 = this;
        e5 = p2(e5);
        var r3 = new u2(function(t5, r4) {
          n3.ready().then(function() {
            F2(n3._dbInfo, b2, function(i3, a3) {
              var o3 = $;
              if (i3) return r4(i3);
              try {
                var s3 = a3.objectStore(n3._dbInfo.storeName)[o3(1047)](e5);
                a3.oncomplete = function() {
                  t5();
                }, a3.onerror = function() {
                  r4(s3[o3(1018)]);
                }, a3.onabort = function() {
                  var e6 = o3;
                  r4(s3.error ? s3[e6(1018)] : s3.transaction.error);
                };
              } catch (e6) {
                r4(e6);
              }
            });
          }).catch(r4);
        });
        return d2(r3, t4), r3;
      }
      function ie2(e5) {
        var t4 = this, n3 = new u2(function(e6, n4) {
          var r3 = $;
          t4[r3(1316)]().then(function() {
            var i3 = r3;
            F2(t4[i3(1466)], b2, function(r4, a3) {
              var o3 = i3;
              if (r4) return n4(r4);
              try {
                var s3 = a3.objectStore(t4._dbInfo.storeName)[o3(403)]();
                a3.oncomplete = function() {
                  e6();
                }, a3[o3(1430)] = a3.onerror = function() {
                  n4(s3[o3(1018)] ? s3.error : s3.transaction.error);
                };
              } catch (e7) {
                n4(e7);
              }
            });
          }).catch(n4);
        });
        return d2(n3, e5), n3;
      }
      function ae2(e5) {
        var t4 = this, n3 = new u2(function(e6, n4) {
          var r3 = $;
          t4.ready()[r3(631)](function() {
            var i3 = r3;
            F2(t4[i3(1466)], y2, function(r4, a3) {
              var o3 = i3;
              if (r4) return n4(r4);
              try {
                var s3 = a3.objectStore(t4._dbInfo.storeName).count();
                s3[o3(363)] = function() {
                  e6(s3[o3(718)]);
                }, s3[o3(865)] = function() {
                  n4(s3.error);
                };
              } catch (e7) {
                n4(e7);
              }
            });
          }).catch(n4);
        });
        return d2(n3, e5), n3;
      }
      function oe2(e5, t4) {
        var n3 = this, r3 = new u2(function(t5, r4) {
          var i3 = $;
          if (e5 < 0) {
            t5(null);
            return;
          }
          n3[i3(1316)]().then(function() {
            F2(n3._dbInfo, y2, function(i4, a3) {
              var o3 = $;
              if (i4) return r4(i4);
              try {
                var s3 = a3.objectStore(n3._dbInfo.storeName), c3 = false, l3 = s3.openKeyCursor();
                l3[o3(363)] = function() {
                  var n4 = l3.result;
                  if (!n4) {
                    t5(null);
                    return;
                  }
                  e5 === 0 || c3 ? t5(n4.key) : (c3 = true, n4.advance(e5));
                }, l3.onerror = function() {
                  r4(l3[o3(1018)]);
                };
              } catch (e6) {
                r4(e6);
              }
            });
          }).catch(r4);
        });
        return d2(r3, t4), r3;
      }
      function z2(e5) {
        var t4 = this, n3 = new u2(function(e6, n4) {
          var r3 = $;
          t4[r3(1316)]()[r3(631)](function() {
            F2(t4._dbInfo, y2, function(r4, i3) {
              var a3 = $;
              if (r4) return n4(r4);
              try {
                var o3 = i3.objectStore(t4._dbInfo.storeName).openKeyCursor(), s3 = [];
                o3.onsuccess = function() {
                  var t5 = $, n5 = o3.result;
                  if (!n5) {
                    e6(s3);
                    return;
                  }
                  s3.push(n5[t5(370)]), n5.continue();
                }, o3[a3(865)] = function() {
                  n4(o3.error);
                };
              } catch (e7) {
                n4(e7);
              }
            });
          }).catch(n4);
        });
        return d2(n3, e5), n3;
      }
      function se2(e5, t4) {
        var n3 = r2;
        t4 = m2.apply(this, arguments);
        var i3 = this.config();
        e5 = typeof e5 != n3(799) && e5 || {}, e5[n3(701)] || (e5.name = e5.name || i3.name, e5.storeName = e5.storeName || i3.storeName);
        var a3 = this, o3;
        if (!e5.name) o3 = u2.reject(`Invalid arguments`);
        else {
          var c3 = e5.name === i3[n3(701)] && a3._dbInfo.db ? u2.resolve(a3[n3(1466)].db) : O2(e5).then(function(t5) {
            var n4 = _2[e5.name], r3 = n4.forages;
            n4.db = t5;
            for (var i4 = 0; i4 < r3.length; i4++) r3[i4]._dbInfo.db = t5;
            return t5;
          });
          o3 = e5.storeName ? c3.then(function(t5) {
            var r3 = n3;
            if (t5.objectStoreNames.contains(e5.storeName)) {
              var i4 = t5.version + 1;
              w2(e5);
              var a4 = _2[e5[r3(701)]], o4 = a4[r3(1128)];
              t5[r3(1044)]();
              for (var c4 = 0; c4 < o4.length; c4++) {
                var l3 = o4[c4];
                l3._dbInfo.db = null, l3._dbInfo.version = i4;
              }
              return new u2(function(t6, n4) {
                var a5 = r3, o5 = s2.open(e5.name, i4);
                o5.onerror = function(e6) {
                  o5.result.close(), n4(e6);
                }, o5[a5(443)] = function() {
                  var t7 = a5;
                  o5.result.deleteObjectStore(e5[t7(781)]);
                }, o5.onsuccess = function() {
                  var e6 = o5.result;
                  e6.close(), t6(e6);
                };
              }).then(function(e6) {
                a4.db = e6;
                for (var t6 = 0; t6 < o4.length; t6++) {
                  var n4 = o4[t6];
                  n4._dbInfo.db = e6, T2(n4._dbInfo);
                }
              }).catch(function(t6) {
                throw (E2(e5, t6) || u2.resolve()).catch(function() {
                }), t6;
              });
            }
          }) : c3.then(function(t5) {
            var r3 = n3;
            w2(e5);
            var i4 = _2[e5[r3(701)]], a4 = i4.forages;
            t5[r3(1044)]();
            for (var o4 = 0; o4 < a4.length; o4++) {
              var c4 = a4[o4];
              c4._dbInfo.db = null;
            }
            return new u2(function(t6, n4) {
              var r4 = s2.deleteDatabase(e5.name);
              r4.onerror = function() {
                var e6 = $, t7 = r4.result;
                t7 && t7[e6(1044)](), n4(r4.error);
              }, r4.onblocked = function() {
                console.warn(`dropInstance blocked for database "` + e5[$(701)] + `" until all open connections are closed`);
              }, r4.onsuccess = function() {
                var e6 = r4[$(718)];
                e6 && e6.close(), t6(e6);
              };
            }).then(function(e6) {
              i4.db = e6;
              for (var t6 = 0; t6 < a4.length; t6++) {
                var n4 = a4[t6];
                T2(n4._dbInfo);
              }
            }).catch(function(t6) {
              var n4 = r3;
              throw (E2(e5, t6) || u2[n4(550)]()).catch(function() {
              }), t6;
            });
          });
        }
        return d2(o3, t4), o3;
      }
      var ce2 = { _driver: `asyncStorage`, _initStorage: L2, _support: c2(), iterate: ne2, getItem: te2, setItem: re2, removeItem: R2, clear: ie2, length: ae2, key: oe2, keys: z2, dropInstance: se2 };
      function le2() {
        return typeof openDatabase == `function`;
      }
      var ue2 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`, de2 = `~~local_forage_type~`, B2 = /^~~local_forage_type~([^~]+)~/, fe2 = `__lfsc__:`, pe2 = fe2.length, V2 = `arbf`, H2 = `blob`, me2 = `si08`, he2 = `ui08`, U2 = r2(1436), ge2 = `si16`, W2 = r2(571), G2 = `ur16`, K2 = `ui32`, q2 = `fl32`, _e2 = `fl64`, J2 = pe2 + V2.length, Y2 = Object[r2(427)].toString;
      function ve2(e5) {
        var t4 = r2, n3 = e5.length * 0.75, i3 = e5.length, a3, o3 = 0, s3, c3, l3, u3;
        e5[e5.length - 1] === `=` && (n3--, e5[e5.length - 2] === `=` && n3--);
        var d3 = new ArrayBuffer(n3), f3 = new Uint8Array(d3);
        for (a3 = 0; a3 < i3; a3 += 4) s3 = ue2.indexOf(e5[a3]), c3 = ue2.indexOf(e5[a3 + 1]), l3 = ue2.indexOf(e5[a3 + 2]), u3 = ue2[t4(755)](e5[a3 + 3]), f3[o3++] = s3 << 2 | c3 >> 4, f3[o3++] = (c3 & 15) << 4 | l3 >> 2, f3[o3++] = (l3 & 3) << 6 | u3 & 63;
        return d3;
      }
      function ye2(e5) {
        var t4 = r2, n3 = new Uint8Array(e5), i3 = ``, a3;
        for (a3 = 0; a3 < n3.length; a3 += 3) i3 += ue2[n3[a3] >> 2], i3 += ue2[(n3[a3] & 3) << 4 | n3[a3 + 1] >> 4], i3 += ue2[(n3[a3 + 1] & 15) << 2 | n3[a3 + 2] >> 6], i3 += ue2[n3[a3 + 2] & 63];
        return n3.length % 3 == 2 ? i3 = i3[t4(522)](0, i3.length - 1) + `=` : n3.length % 3 == 1 && (i3 = i3.substring(0, i3.length - 2) + `==`), i3;
      }
      function be2(e5, t4) {
        var n3 = r2, i3 = ``;
        if (e5 && (i3 = Y2.call(e5)), e5 && (i3 === `[object ArrayBuffer]` || e5.buffer && Y2.call(e5.buffer) === n3(751))) {
          var a3, o3 = fe2;
          e5 instanceof ArrayBuffer ? (a3 = e5, o3 += V2) : (a3 = e5[n3(1154)], i3 === n3(1223) ? o3 += me2 : i3 === n3(639) ? o3 += he2 : i3 === n3(364) ? o3 += U2 : i3 === `[object Int16Array]` ? o3 += ge2 : i3 === `[object Uint16Array]` ? o3 += G2 : i3 === `[object Int32Array]` ? o3 += W2 : i3 === `[object Uint32Array]` ? o3 += K2 : i3 === `[object Float32Array]` ? o3 += q2 : i3 === `[object Float64Array]` ? o3 += _e2 : t4(Error(`Failed to get type for BinaryArray`))), t4(o3 + ye2(a3));
        } else if (i3 === `[object Blob]`) {
          var s3 = new FileReader();
          s3[n3(1011)] = function() {
            var n4 = de2 + e5.type + `~` + ye2(this.result);
            t4(fe2 + H2 + n4);
          }, s3.readAsArrayBuffer(e5);
        } else try {
          t4(JSON.stringify(e5));
        } catch (r3) {
          console.error(n3(606), e5), t4(null, r3);
        }
      }
      function X2(e5) {
        var t4 = r2;
        if (e5[t4(522)](0, pe2) !== fe2) return JSON[t4(885)](e5);
        var n3 = e5.substring(J2), i3 = e5[t4(522)](pe2, J2), a3;
        if (i3 === H2 && B2.test(n3)) {
          var o3 = n3.match(B2);
          a3 = o3[1], n3 = n3.substring(o3[0].length);
        }
        var s3 = ve2(n3);
        switch (i3) {
          case V2:
            return s3;
          case H2:
            return l2([s3], { type: a3 });
          case me2:
            return new Int8Array(s3);
          case he2:
            return new Uint8Array(s3);
          case U2:
            return new Uint8ClampedArray(s3);
          case ge2:
            return new Int16Array(s3);
          case G2:
            return new Uint16Array(s3);
          case W2:
            return new Int32Array(s3);
          case K2:
            return new Uint32Array(s3);
          case q2:
            return new Float32Array(s3);
          case _e2:
            return new Float64Array(s3);
          default:
            throw Error(`Unkown type: ` + i3);
        }
      }
      var xe2 = { serialize: be2, deserialize: X2, stringToBuffer: ve2, bufferToString: ye2 };
      function Z2(e5, t4, n3, i3) {
        e5[r2(474)](`CREATE TABLE IF NOT EXISTS ` + t4.storeName + ` (id INTEGER PRIMARY KEY, key unique, value)`, [], n3, i3);
      }
      function Se2(e5) {
        var t4 = this, n3 = { db: null };
        if (e5) for (var r3 in e5) n3[r3] = typeof e5[r3] == `string` ? e5[r3] : e5[r3].toString();
        var i3 = new u2(function(e6, r4) {
          try {
            n3.db = openDatabase(n3.name, String(n3.version), n3.description, n3.size);
          } catch (e7) {
            return r4(e7);
          }
          n3.db.transaction(function(i4) {
            Z2(i4, n3, function() {
              t4._dbInfo = n3, e6();
            }, function(e7, t5) {
              r4(t5);
            });
          }, r4);
        });
        return n3.serializer = xe2, i3;
      }
      function Ce2(e5, t4, n3, r3, i3, a3) {
        e5.executeSql(n3, r3, i3, function(e6, o3) {
          var s3 = $;
          o3[s3(597)] === o3.SYNTAX_ERR ? e6.executeSql(`SELECT name FROM sqlite_master WHERE type='table' AND name = ?`, [t4.storeName], function(e7, c3) {
            var l3 = s3;
            c3.rows[l3(587)] ? a3(e7, o3) : Z2(e7, t4, function() {
              e7.executeSql(n3, r3, i3, a3);
            }, a3);
          }, a3) : a3(e6, o3);
        }, a3);
      }
      function we2(e5, t4) {
        var n3 = this;
        e5 = p2(e5);
        var r3 = new u2(function(t5, r4) {
          n3.ready().then(function() {
            var i3 = n3._dbInfo;
            i3.db.transaction(function(n4) {
              Ce2(n4, i3, `SELECT * FROM ` + i3.storeName + ` WHERE key = ? LIMIT 1`, [e5], function(e6, n5) {
                var r5 = $, a3 = n5.rows.length ? n5.rows.item(0).value : null;
                a3 && (a3 = i3[r5(672)].deserialize(a3)), t5(a3);
              }, function(e6, t6) {
                r4(t6);
              });
            });
          }).catch(r4);
        });
        return d2(r3, t4), r3;
      }
      function Te2(e5, t4) {
        var n3 = this, r3 = new u2(function(t5, r4) {
          n3.ready().then(function() {
            var i3 = $, a3 = n3._dbInfo;
            a3.db[i3(939)](function(n4) {
              var o3 = i3;
              Ce2(n4, a3, o3(902) + a3.storeName, [], function(n5, r5) {
                for (var i4 = o3, s3 = r5[i4(1414)], c3 = s3.length, l3 = 0; l3 < c3; l3++) {
                  var u3 = s3.item(l3), d3 = u3[i4(1225)];
                  if (d3 && (d3 = a3.serializer.deserialize(d3)), d3 = e5(d3, u3.key, l3 + 1), d3 !== void 0) {
                    t5(d3);
                    return;
                  }
                }
                t5();
              }, function(e6, t6) {
                r4(t6);
              });
            });
          }).catch(r4);
        });
        return d2(r3, t4), r3;
      }
      function Ee2(e5, t4, n3, r3) {
        var i3 = this;
        e5 = p2(e5);
        var a3 = new u2(function(a4, o3) {
          var s3 = $;
          i3[s3(1316)]().then(function() {
            var c3 = s3;
            t4 === void 0 && (t4 = null);
            var l3 = t4, u3 = i3._dbInfo;
            u3.serializer[c3(1262)](t4, function(t5, s4) {
              var d3 = c3;
              s4 ? o3(s4) : u3.db[d3(939)](function(n4) {
                Ce2(n4, u3, `INSERT OR REPLACE INTO ` + u3[d3(781)] + ` (key, value) VALUES (?, ?)`, [e5, t5], function() {
                  a4(l3);
                }, function(e6, t6) {
                  o3(t6);
                });
              }, function(t6) {
                var s5 = d3;
                if (t6.code === t6[s5(693)]) {
                  if (r3 > 0) {
                    a4(Ee2.apply(i3, [e5, l3, n3, r3 - 1]));
                    return;
                  }
                  o3(t6);
                }
              });
            });
          }).catch(o3);
        });
        return d2(a3, n3), a3;
      }
      function De2(e5, t4, n3) {
        return Ee2[r2(1445)](this, [e5, t4, n3, 1]);
      }
      function Oe2(e5, t4) {
        var n3 = this;
        e5 = p2(e5);
        var r3 = new u2(function(t5, r4) {
          var i3 = $;
          n3.ready().then(function() {
            var i4 = n3._dbInfo;
            i4.db.transaction(function(n4) {
              Ce2(n4, i4, $(1002) + i4.storeName + ` WHERE key = ?`, [e5], function() {
                t5();
              }, function(e6, t6) {
                r4(t6);
              });
            });
          })[i3(544)](r4);
        });
        return d2(r3, t4), r3;
      }
      function ke2(e5) {
        var t4 = this, n3 = new u2(function(e6, n4) {
          var r3 = $;
          t4.ready().then(function() {
            var r4 = $, i3 = t4._dbInfo;
            i3.db[r4(939)](function(t5) {
              Ce2(t5, i3, `DELETE FROM ` + i3.storeName, [], function() {
                e6();
              }, function(e7, t6) {
                n4(t6);
              });
            });
          })[r3(544)](n4);
        });
        return d2(n3, e5), n3;
      }
      function Ae2(e5) {
        var t4 = this, n3 = new u2(function(e6, n4) {
          t4.ready().then(function() {
            var r3 = t4._dbInfo;
            r3.db.transaction(function(t5) {
              Ce2(t5, r3, `SELECT COUNT(key) as c FROM ` + r3.storeName, [], function(t6, n5) {
                var r4 = n5.rows.item(0).c;
                e6(r4);
              }, function(e7, t6) {
                n4(t6);
              });
            });
          }).catch(n4);
        });
        return d2(n3, e5), n3;
      }
      function je2(e5, t4) {
        var n3 = this, r3 = new u2(function(t5, r4) {
          n3.ready().then(function() {
            var i3 = n3._dbInfo;
            i3.db.transaction(function(n4) {
              var a3 = $;
              Ce2(n4, i3, a3(1379) + i3.storeName + a3(643), [e5 + 1], function(e6, n5) {
                var r5 = a3;
                t5(n5.rows[r5(587)] ? n5.rows.item(0).key : null);
              }, function(e6, t6) {
                r4(t6);
              });
            });
          }).catch(r4);
        });
        return d2(r3, t4), r3;
      }
      function Me2(e5) {
        var t4 = this, n3 = new u2(function(e6, n4) {
          var r3 = $;
          t4.ready().then(function() {
            var r4 = t4._dbInfo;
            r4.db.transaction(function(t5) {
              Ce2(t5, r4, `SELECT key FROM ` + r4.storeName, [], function(t6, n5) {
                for (var r5 = $, i3 = [], a3 = 0; a3 < n5.rows.length; a3++) i3.push(n5.rows[r5(1326)](a3).key);
                e6(i3);
              }, function(e7, t6) {
                n4(t6);
              });
            });
          })[r3(544)](n4);
        });
        return d2(n3, e5), n3;
      }
      function Ne2(e5) {
        return new u2(function(t4, n3) {
          e5.transaction(function(r3) {
            r3.executeSql(`SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'`, [], function(n4, r4) {
              for (var i3 = [], a3 = 0; a3 < r4.rows.length; a3++) i3.push(r4.rows.item(a3).name);
              t4({ db: e5, storeNames: i3 });
            }, function(e6, t5) {
              n3(t5);
            });
          }, function(e6) {
            n3(e6);
          });
        });
      }
      function Pe2(e5, t4) {
        t4 = m2.apply(this, arguments);
        var n3 = this.config();
        e5 = typeof e5 != `function` && e5 || {}, e5.name || (e5.name = e5.name || n3.name, e5.storeName = e5.storeName || n3.storeName);
        var r3 = this, i3 = e5.name ? new u2(function(t5) {
          var i4 = $, a3 = e5.name === n3.name ? r3[i4(1466)].db : openDatabase(e5.name, ``, ``, 0);
          e5.storeName ? t5({ db: a3, storeNames: [e5.storeName] }) : t5(Ne2(a3));
        }).then(function(e6) {
          return new u2(function(t5, n4) {
            e6.db.transaction(function(r4) {
              var i4 = $;
              function a3(e7) {
                return new u2(function(t6, n5) {
                  r4[$(474)](`DROP TABLE IF EXISTS ` + e7, [], function() {
                    t6();
                  }, function(e8, t7) {
                    n5(t7);
                  });
                });
              }
              for (var o3 = [], s3 = 0, c3 = e6.storeNames.length; s3 < c3; s3++) o3.push(a3(e6.storeNames[s3]));
              u2.all(o3).then(function() {
                t5();
              })[i4(544)](function(e7) {
                n4(e7);
              });
            }, function(e7) {
              n4(e7);
            });
          });
        }) : u2.reject(`Invalid arguments`);
        return d2(i3, t4), i3;
      }
      var Fe2 = { _driver: `webSQLStorage`, _initStorage: Se2, _support: le2(), iterate: Te2, getItem: we2, setItem: De2, removeItem: Oe2, clear: ke2, length: Ae2, key: je2, keys: Me2, dropInstance: Pe2 };
      function Ie2() {
        try {
          return typeof localStorage < `u` && `setItem` in localStorage && !!localStorage.setItem;
        } catch {
          return false;
        }
      }
      function Le2(e5, t4) {
        var n3 = e5.name + `/`;
        return e5.storeName !== t4.storeName && (n3 += e5.storeName + `/`), n3;
      }
      function Re2() {
        var e5 = `_localforage_support_test`;
        try {
          return localStorage.setItem(e5, true), localStorage.removeItem(e5), false;
        } catch {
          return true;
        }
      }
      function ze2() {
        var e5 = r2;
        return !Re2() || localStorage[e5(587)] > 0;
      }
      function Be2(e5) {
        var t4 = r2, n3 = this, i3 = {};
        if (e5) for (var a3 in e5) i3[a3] = e5[a3];
        return i3.keyPrefix = Le2(e5, n3[t4(481)]), ze2() ? (n3._dbInfo = i3, i3.serializer = xe2, u2.resolve()) : u2.reject();
      }
      function Ve2(e5) {
        var t4 = r2, n3 = this, i3 = n3.ready()[t4(631)](function() {
          for (var e6 = t4, r3 = n3[e6(1466)].keyPrefix, i4 = localStorage.length - 1; i4 >= 0; i4--) {
            var a3 = localStorage.key(i4);
            a3[e6(755)](r3) === 0 && localStorage[e6(505)](a3);
          }
        });
        return d2(i3, e5), i3;
      }
      function He2(e5, t4) {
        var n3 = r2, i3 = this;
        e5 = p2(e5);
        var a3 = i3[n3(1316)]().then(function() {
          var t5 = n3, r3 = i3._dbInfo, a4 = localStorage.getItem(r3.keyPrefix + e5);
          return a4 && (a4 = r3.serializer[t5(1061)](a4)), a4;
        });
        return d2(a3, t4), a3;
      }
      function Ue2(e5, t4) {
        var n3 = r2, i3 = this, a3 = i3.ready()[n3(631)](function() {
          for (var t5 = n3, r3 = i3._dbInfo, a4 = r3.keyPrefix, o3 = a4.length, s3 = localStorage.length, c3 = 1, l3 = 0; l3 < s3; l3++) {
            var u3 = localStorage.key(l3);
            if (u3.indexOf(a4) === 0) {
              var d3 = localStorage.getItem(u3);
              if (d3 && (d3 = r3[t5(672)].deserialize(d3)), d3 = e5(d3, u3.substring(o3), c3++), d3 !== void 0) return d3;
            }
          }
        });
        return d2(a3, t4), a3;
      }
      function We2(e5, t4) {
        var n3 = this, r3 = n3.ready().then(function() {
          var t5 = n3._dbInfo, r4;
          try {
            r4 = localStorage.key(e5);
          } catch {
            r4 = null;
          }
          return r4 && (r4 = r4.substring(t5.keyPrefix.length)), r4;
        });
        return d2(r3, t4), r3;
      }
      function Q2(e5) {
        var t4 = this, n3 = t4.ready().then(function() {
          for (var e6 = $, n4 = t4._dbInfo, r3 = localStorage.length, i3 = [], a3 = 0; a3 < r3; a3++) {
            var o3 = localStorage[e6(370)](a3);
            o3.indexOf(n4.keyPrefix) === 0 && i3.push(o3.substring(n4[e6(1229)].length));
          }
          return i3;
        });
        return d2(n3, e5), n3;
      }
      function Ge2(e5) {
        var t4 = this.keys().then(function(e6) {
          return e6.length;
        });
        return d2(t4, e5), t4;
      }
      function Ke2(e5, t4) {
        var n3 = r2, i3 = this;
        e5 = p2(e5);
        var a3 = i3[n3(1316)]().then(function() {
          var t5 = i3._dbInfo;
          localStorage.removeItem(t5.keyPrefix + e5);
        });
        return d2(a3, t4), a3;
      }
      function qe2(e5, t4, n3) {
        var r3 = this;
        e5 = p2(e5);
        var i3 = r3.ready().then(function() {
          t4 === void 0 && (t4 = null);
          var n4 = t4;
          return new u2(function(i4, a3) {
            var o3 = r3._dbInfo;
            o3.serializer.serialize(t4, function(t5, r4) {
              var s3 = $;
              if (r4) a3(r4);
              else try {
                localStorage.setItem(o3.keyPrefix + e5, t5), i4(n4);
              } catch (e6) {
                (e6.name === s3(1406) || e6[s3(701)] === `NS_ERROR_DOM_QUOTA_REACHED`) && a3(e6), a3(e6);
              }
            });
          });
        });
        return d2(i3, n3), i3;
      }
      function Je2(e5, t4) {
        var n3 = r2;
        if (t4 = m2.apply(this, arguments), e5 = typeof e5 != n3(799) && e5 || {}, !e5[n3(701)]) {
          var i3 = this.config();
          e5.name = e5.name || i3.name, e5.storeName = e5.storeName || i3.storeName;
        }
        var a3 = this, o3 = e5.name ? new u2(function(t5) {
          e5.storeName ? t5(Le2(e5, a3._defaultConfig)) : t5(e5.name + `/`);
        })[n3(631)](function(e6) {
          for (var t5 = localStorage.length - 1; t5 >= 0; t5--) {
            var n4 = localStorage.key(t5);
            n4.indexOf(e6) === 0 && localStorage.removeItem(n4);
          }
        }) : u2.reject(`Invalid arguments`);
        return d2(o3, t4), o3;
      }
      var Ye2 = { _driver: r2(394), _initStorage: Be2, _support: Ie2(), iterate: Ue2, getItem: He2, setItem: qe2, removeItem: Ke2, clear: Ve2, length: Ge2, key: We2, keys: Q2, dropInstance: Je2 }, Xe2 = function(e5, t4) {
        return e5 === t4 || typeof e5 == `number` && typeof t4 == r2(586) && isNaN(e5) && isNaN(t4);
      }, Ze2 = function(e5, t4) {
        for (var n3 = e5.length, r3 = 0; r3 < n3; ) {
          if (Xe2(e5[r3], t4)) return true;
          r3++;
        }
        return false;
      }, Qe2 = Array[r2(720)] || function(e5) {
        return Object.prototype[r2(1200)].call(e5) === `[object Array]`;
      }, $e2 = {}, et2 = {}, tt2 = { INDEXEDDB: ce2, WEBSQL: Fe2, LOCALSTORAGE: Ye2 }, nt2 = [tt2.INDEXEDDB[r2(884)], tt2.WEBSQL._driver, tt2.LOCALSTORAGE._driver], rt2 = [`dropInstance`], it2 = [r2(403), `getItem`, `iterate`, `key`, `keys`, `length`, `removeItem`, `setItem`].concat(rt2), at2 = { description: ``, driver: nt2[r2(1006)](), name: r2(490), size: 4980736, storeName: `keyvaluepairs`, version: 1 };
      function ot2(e5, t4) {
        e5[t4] = function() {
          var n3 = $, r3 = arguments;
          return e5[n3(1316)]().then(function() {
            return e5[t4].apply(e5, r3);
          });
        };
      }
      function st2() {
        for (var e5 = r2, t4 = 1; t4 < arguments.length; t4++) {
          var n3 = arguments[t4];
          if (n3) for (var i3 in n3) n3.hasOwnProperty(i3) && (Qe2(n3[i3]) ? arguments[0][i3] = n3[i3][e5(1006)]() : arguments[0][i3] = n3[i3]);
        }
        return arguments[0];
      }
      t3.exports = new ((function() {
        var e5 = r2;
        function t4(e6) {
          var n3 = $;
          for (var r3 in a2(this, t4), tt2) if (tt2.hasOwnProperty(r3)) {
            var i3 = tt2[r3], o3 = i3[n3(884)];
            this[r3] = o3, $e2[o3] || this.defineDriver(i3);
          }
          this._defaultConfig = st2({}, at2), this._config = st2({}, this[n3(481)], e6), this._driverSet = null, this[n3(1227)] = null, this[n3(1233)] = false, this._dbInfo = null, this[n3(1087)](), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return t4.prototype.config = function(e6) {
          var t5 = $;
          if ((e6 === void 0 ? `undefined` : i2(e6)) === `object`) {
            if (this[t5(1233)]) return Error(`Can't call config() after localforage has been used.`);
            for (var n3 in e6) {
              if (n3 === `storeName` && (e6[n3] = e6[n3].replace(/\W/g, `_`)), n3 === `version` && typeof e6[n3] != `number`) return Error(`Database version must be a number.`);
              this._config[n3] = e6[n3];
            }
            return `driver` in e6 && e6.driver ? this.setDriver(this._config[t5(424)]) : true;
          } else if (typeof e6 == `string`) return this._config[e6];
          else return this._config;
        }, t4.prototype[e5(1264)] = function(e6, t5, n3) {
          var r3 = new u2(function(t6, n4) {
            var r4 = $;
            try {
              var i3 = e6._driver, a3 = Error(`Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver`);
              if (!e6._driver) {
                n4(a3);
                return;
              }
              for (var o3 = it2.concat(`_initStorage`), s3 = 0, c3 = o3.length; s3 < c3; s3++) {
                var l3 = o3[s3];
                if ((!Ze2(rt2, l3) || e6[l3]) && typeof e6[l3] != `function`) {
                  n4(a3);
                  return;
                }
              }
              (function() {
                for (var t7 = function(e7) {
                  return function() {
                    var t8 = $, n6 = Error(`Method ` + e7 + t8(383)), r6 = u2.reject(n6);
                    return d2(r6, arguments[arguments.length - 1]), r6;
                  };
                }, n5 = 0, r5 = rt2.length; n5 < r5; n5++) {
                  var i4 = rt2[n5];
                  e6[i4] || (e6[i4] = t7(i4));
                }
              })();
              var f3 = function(n5) {
                $e2[i3] && console.info(`Redefining LocalForage driver: ` + i3), $e2[i3] = e6, et2[i3] = n5, t6();
              };
              r4(1106) in e6 ? e6._support && typeof e6._support == r4(799) ? e6[r4(1106)]()[r4(631)](f3, n4) : f3(!!e6._support) : f3(true);
            } catch (e7) {
              n4(e7);
            }
          });
          return f2(r3, t5, n3), r3;
        }, t4.prototype[e5(424)] = function() {
          return this._driver || null;
        }, t4.prototype.getDriver = function(e6, t5, n3) {
          var r3 = $e2[e6] ? u2.resolve($e2[e6]) : u2.reject(Error(`Driver not found.`));
          return f2(r3, t5, n3), r3;
        }, t4.prototype.getSerializer = function(e6) {
          var t5 = u2.resolve(xe2);
          return f2(t5, e6), t5;
        }, t4[e5(427)].ready = function(e6) {
          var t5 = this, n3 = t5._driverSet.then(function() {
            var e7 = $;
            return t5._ready === null && (t5[e7(1233)] = t5[e7(1227)]()), t5._ready;
          });
          return f2(n3, e6, e6), n3;
        }, t4.prototype.setDriver = function(t5, n3, r3) {
          var i3 = e5, a3 = this;
          Qe2(t5) || (t5 = [t5]);
          var o3 = this._getSupportedDrivers(t5);
          function s3() {
            var e6 = $;
            a3[e6(1471)].driver = a3.driver();
          }
          function c3(e6) {
            var t6 = $;
            return a3[t6(933)](e6), s3(), a3._ready = a3[t6(892)](a3._config), a3._ready;
          }
          function l3(e6) {
            return function() {
              var t6 = 0;
              function n4() {
                for (; t6 < e6.length; ) {
                  var r4 = e6[t6];
                  return t6++, a3._dbInfo = null, a3._ready = null, a3.getDriver(r4).then(c3).catch(n4);
                }
                s3();
                var i4 = Error(`No available storage method found.`);
                return a3._driverSet = u2.reject(i4), a3._driverSet;
              }
              return n4();
            };
          }
          var d3 = this._driverSet === null ? u2.resolve() : this._driverSet.catch(function() {
            return u2.resolve();
          });
          return this._driverSet = d3.then(function() {
            var e6 = o3[0];
            return a3._dbInfo = null, a3._ready = null, a3.getDriver(e6).then(function(e7) {
              a3._driver = e7[$(884)], s3(), a3._wrapLibraryMethodsWithReady(), a3._initDriver = l3(o3);
            });
          }).catch(function() {
            s3();
            var e6 = Error(`No available storage method found.`);
            return a3._driverSet = u2.reject(e6), a3._driverSet;
          }), f2(this._driverSet, n3, r3), this[i3(483)];
        }, t4.prototype.supports = function(e6) {
          return !!et2[e6];
        }, t4.prototype._extend = function(e6) {
          st2(this, e6);
        }, t4.prototype._getSupportedDrivers = function(t5) {
          for (var n3 = e5, r3 = [], i3 = 0, a3 = t5[n3(587)]; i3 < a3; i3++) {
            var o3 = t5[i3];
            this.supports(o3) && r3.push(o3);
          }
          return r3;
        }, t4.prototype._wrapLibraryMethodsWithReady = function() {
          for (var t5 = e5, n3 = 0, r3 = it2[t5(587)]; n3 < r3; n3++) ot2(this, it2[n3]);
        }, t4.prototype.createInstance = function(e6) {
          return new t4(e6);
        }, t4;
      })())();
    }, { 3: 3 }] }, {}, [4])(4);
  });
})()), Gt = class {
  constructor(e3, t2, n2) {
    var r2 = i;
    this[r2(775)] = {}, this.storage = void 0, this[r2(701)] = e3, this[r2(1145)] = t2 || Be, this.resolver = n2, this[r2(1388)] = true, this.checkRequirements(), this.addListeners();
  }
  [i(509)]() {
    var e3 = i;
    try {
      let t2;
      Wt.default === void 0 && (t2 = Wt[e3(821)]), this.storage = t2.createInstance({ name: this.name });
    } catch {
      throw Error(`localForage lib not loaded`);
    }
  }
  addListeners() {
    var e3 = i;
    this._status = this.status.bind(this), window[e3(1258)](`online`, this._status), window.addEventListener(`offline`, this._status);
  }
  removeListeners() {
    var e3 = i;
    window[e3(556)](`online`, this._status), window.removeEventListener(e3(1195), this._status), this._status = void 0;
  }
  [i(620)](e3) {
    let t2 = navigator.onLine;
    this.online = t2, t2 ? this.emit(`online`, this) : this.emit(`offline`, this);
  }
  add(e3, t2) {
    var n2 = i;
    let r2 = e3.resources.map((e4) => {
      let { href: n3 } = e4, r3 = this.resolver(n3), i2 = window.encodeURIComponent(r3);
      return this.storage.getItem(i2).then((e5) => !e5 || t2 ? this.requester(r3, `binary`).then((e6) => this.storage.setItem(i2, e6)) : e5);
    });
    return Promise[n2(623)](r2);
  }
  put(e3, t2, n2) {
    var r2 = i;
    let a2 = window.encodeURIComponent(e3);
    return this.storage.getItem(a2)[r2(631)]((i2) => i2 || this.requester(e3, `binary`, t2, n2)[r2(631)]((e4) => this.storage.setItem(a2, e4)));
  }
  request(e3, t2, n2, r2) {
    var a2 = i;
    return this.online ? this.requester(e3, t2, n2, r2).then((t3) => (this[a2(1314)](e3), t3)) : this[a2(706)](e3, t2);
  }
  [i(706)](e3, t2) {
    var n2 = i;
    new X();
    var r2, a2 = new Oe(e3);
    return t2 || (t2 = a2.extension), r2 = t2 == `blob` ? this[n2(591)](e3) : this.getText(e3), r2.then((r3) => {
      var i2 = n2, a3 = new X(), o2;
      return r3 ? (o2 = this.handleResponse(r3, t2), a3.resolve(o2)) : a3.reject({ message: `File not found in storage: ` + e3, stack: Error().stack }), a3[i2(371)];
    });
  }
  handleResponse(e3, t2) {
    var n2 = i;
    return t2 == `json` ? JSON.parse(e3) : me(t2) ? K(e3, `text/xml`) : t2 == `xhtml` ? K(e3, n2(1161)) : t2 == n2(1144) || t2 == `htm` ? K(e3, `text/html`) : e3;
  }
  getBlob(e3, t2) {
    var n2 = i;
    let r2 = window.encodeURIComponent(e3);
    return this[n2(1251)].getItem(r2).then(function(n3) {
      if (n3) return t2 || (t2 = $e.lookup(e3)), new Blob([n3], { type: t2 });
    });
  }
  getText(e3, t2) {
    var n2 = i;
    let r2 = window.encodeURIComponent(e3);
    return t2 || (t2 = $e[n2(1203)](e3)), this.storage.getItem(r2)[n2(631)](function(e4) {
      var n3 = new X(), r3 = new FileReader(), i2;
      if (e4) return i2 = new Blob([e4], { type: t2 }), r3.addEventListener(`loadend`, () => {
        n3.resolve(r3.result);
      }), r3.readAsText(i2, t2), n3.promise;
    });
  }
  getBase64(e3, t2) {
    var n2 = i;
    let r2 = window.encodeURIComponent(e3);
    return t2 || (t2 = $e.lookup(e3)), this.storage.getItem(r2)[n2(631)]((e4) => {
      var n3 = new X(), r3 = new FileReader(), i2;
      if (e4) return i2 = new Blob([e4], { type: t2 }), r3.addEventListener(`loadend`, () => {
        n3[$(550)](r3.result);
      }), r3.readAsDataURL(i2, t2), n3.promise;
    });
  }
  createUrl(e3, t2) {
    var n2 = i, r2 = new X(), a2 = window.URL || window[n2(479)] || window.mozURL, o2, s2, c2 = t2 && t2.base64;
    return e3 in this.urlCache ? (r2.resolve(this.urlCache[e3]), r2.promise) : (c2 ? (s2 = this.getBase64(e3), s2 && s2.then((function(t3) {
      var i2 = n2;
      this[i2(775)][e3] = t3, r2.resolve(t3);
    }).bind(this))) : (s2 = this.getBlob(e3), s2 && s2[n2(631)]((function(t3) {
      var i2 = n2;
      o2 = a2.createObjectURL(t3), this[i2(775)][e3] = o2, r2.resolve(o2);
    })[n2(594)](this))), s2 || r2.reject({ message: n2(1335) + e3, stack: Error().stack }), r2.promise);
  }
  revokeUrl(e3) {
    var t2 = window[i(1444)] || window.webkitURL || window.mozURL, n2 = this.urlCache[e3];
    n2 && t2.revokeObjectURL(n2);
  }
  [i(881)]() {
    var e3 = i, t2 = window.URL || window.webkitURL || window.mozURL;
    for (let n2 in this.urlCache) t2[e3(1045)](n2);
    this[e3(775)] = {}, this.removeListeners();
  }
};
(0, M.default)(Gt.prototype);
var Kt = class {
  constructor(e3) {
    var t2 = i;
    this.interactive = ``, this[t2(679)] = ``, this.openToSpread = ``, this[t2(478)] = ``, e3 && this.parse(e3);
  }
  parse(e3) {
    var t2 = i;
    if (!e3) return this;
    let n2 = q(e3, t2(1113));
    return n2 && _e(n2, `option`)[t2(1318)]((e4) => {
      var n3 = t2;
      let r2 = ``;
      switch (e4.childNodes[n3(587)] && (r2 = e4.childNodes[0].nodeValue), e4.attributes.name.value) {
        case `interactive`:
          this[n3(1309)] = r2;
          break;
        case n3(704):
          this.fixedLayout = r2;
          break;
        case n3(1133):
          this.openToSpread = r2;
          break;
        case `orientation-lock`:
          this.orientationLock = r2;
          break;
      }
    }), this;
  }
  [i(881)]() {
    var e3 = i;
    this.interactive = void 0, this[e3(679)] = void 0, this[e3(941)] = void 0, this.orientationLock = void 0;
  }
}, qt = `META-INF/container.xml`, Jt = `META-INF/com.apple.ibooks.display-options.xml`, Yt = { BINARY: i(921), BASE64: `base64`, EPUB: `epub`, OPF: `opf`, MANIFEST: `json`, DIRECTORY: i(583) }, Xt = class {
  constructor(e3, t2) {
    var n2 = i;
    t2 === void 0 && typeof e3 != n2(784) && !(e3 instanceof Blob) && !(e3 instanceof ArrayBuffer) && (t2 = e3, e3 = void 0), this.settings = z(this.settings || {}, { requestMethod: void 0, requestCredentials: void 0, requestHeaders: void 0, encoding: void 0, replacements: void 0, canonical: void 0, openAs: void 0, store: void 0 }), z(this.settings, t2), this[n2(1222)] = new X(), this.opened = this.opening.promise, this.isOpen = false, this.loading = { manifest: new X(), spine: new X(), metadata: new X(), cover: new X(), navigation: new X(), pageList: new X(), resources: new X(), displayOptions: new X() }, this.loaded = { manifest: this.loading.manifest[n2(371)], spine: this.loading.spine.promise, metadata: this[n2(1015)].metadata.promise, cover: this.loading.cover.promise, navigation: this.loading.navigation.promise, pageList: this.loading.pageList.promise, resources: this.loading.resources[n2(371)], displayOptions: this[n2(1015)][n2(1299)][n2(371)] }, this.ready = Promise.all([this.loaded.manifest, this.loaded.spine, this.loaded.metadata, this.loaded[n2(670)], this[n2(1114)].navigation, this.loaded.resources, this.loaded.displayOptions]), this.isRendered = false, this.request = this.settings[n2(1231)] || Be, this.spine = new He(), this.locations = new Ge(this.spine, this.load.bind(this)), this[n2(1111)] = void 0, this[n2(560)] = void 0, this.url = void 0, this.path = void 0, this.archived = false, this.archive = void 0, this.storage = void 0, this.resources = void 0, this.rendition = void 0, this.container = void 0, this.packaging = void 0, this.displayOptions = void 0, this[n2(685)].store && this.store(this[n2(685)].store), e3 && this.open(e3, this[n2(685)].openAs).catch((t3) => {
      var r2 = n2, i2 = Error(`Cannot load book at ` + e3);
      this[r2(1396)](Q[r2(736)][r2(1259)], i2);
    });
  }
  open(e3, t2) {
    var n2 = i, r2, a2 = t2 || this.determineType(e3);
    return a2 === Yt.BINARY ? (this.archived = true, this.url = new ke(`/`, ``), r2 = this.openEpub(e3)) : a2 === Yt.BASE64 ? (this.archived = true, this.url = new ke(`/`, ``), r2 = this.openEpub(e3, a2)) : a2 === Yt.EPUB ? (this.archived = true, this.url = new ke(`/`, ``), r2 = this.request(e3, `binary`, this.settings.requestCredentials, this.settings[n2(1405)])[n2(631)](this.openEpub.bind(this))) : a2 == Yt.OPF ? (this.url = new ke(e3), r2 = this.openPackaging(this.url.Path.toString())) : a2 == Yt.MANIFEST ? (this[n2(903)] = new ke(e3), r2 = this.openManifest(this[n2(903)].Path.toString())) : (this[n2(903)] = new ke(e3), r2 = this[n2(1467)](qt).then(this.openPackaging.bind(this))), r2;
  }
  openEpub(e3, t2) {
    var n2 = i;
    return this[n2(699)](e3, t2 || this.settings.encoding).then(() => this.openContainer(qt))[n2(631)]((e4) => this.openPackaging(e4));
  }
  openContainer(e3) {
    var t2 = i;
    return this.load(e3).then((e4) => (this.container = new Ke(e4), this[t2(550)](this.container.packagePath)));
  }
  openPackaging(e3) {
    var t2 = i;
    return this.path = new Oe(e3), this.load(e3).then((e4) => (this.packaging = new qe(e4), this.unpack(this[t2(379)])));
  }
  openManifest(e3) {
    var t2 = i;
    return this.path = new Oe(e3), this.load(e3)[t2(631)]((e4) => (this[t2(379)] = new qe(), this.packaging.load(e4), this.unpack(this.packaging)));
  }
  load(e3) {
    var t2 = i, n2 = this.resolve(e3);
    return this.archived ? this.archive.request(n2) : this.request(n2, null, this[t2(685)].requestCredentials, this[t2(685)].requestHeaders);
  }
  resolve(e3, t2) {
    var n2 = i;
    if (e3) {
      var r2 = e3;
      return e3.indexOf(n2(1136)) > -1 ? e3 : (this.path && (r2 = this.path.resolve(e3)), t2 != 0 && this.url && (r2 = this.url.resolve(r2)), r2);
    }
  }
  canonical(e3) {
    var t2 = i, n2 = e3;
    return e3 ? (n2 = this.settings.canonical ? this.settings[t2(382)](e3) : this.resolve(e3, true), n2) : ``;
  }
  determineType(e3) {
    var t2 = i, n2, r2, a2;
    if (this.settings[t2(1095)] === `base64`) return Yt[t2(1398)];
    if (typeof e3 != `string`) return Yt[t2(1206)];
    if (n2 = new ke(e3), r2 = n2.path(), a2 = r2.extension, a2 && (a2 = a2.replace(/\?.*$/, ``)), !a2) return Yt.DIRECTORY;
    if (a2 === `epub`) return Yt.EPUB;
    if (a2 === `opf`) return Yt.OPF;
    if (a2 === `json`) return Yt.MANIFEST;
  }
  unpack(e3) {
    var t2 = i;
    this.package = e3, this.packaging.metadata.layout === `` ? this[t2(1021)](this.url[t2(550)](Jt)).then((e4) => {
      var n2 = t2;
      this.displayOptions = new Kt(e4), this.loading[n2(1299)].resolve(this.displayOptions);
    }).catch((e4) => {
      var n2 = t2;
      this.displayOptions = new Kt(), this[n2(1015)].displayOptions.resolve(this.displayOptions);
    }) : (this[t2(1299)] = new Kt(), this.loading.displayOptions[t2(550)](this.displayOptions)), this.spine.unpack(this.packaging, this[t2(550)].bind(this), this.canonical.bind(this)), this[t2(765)] = new et(this.packaging.manifest, { archive: this[t2(1226)], resolver: this.resolve.bind(this), request: this.request.bind(this), replacements: this.settings.replacements || (this.archived ? `blobUrl` : `base64`) }), this[t2(778)](this.packaging).then(() => {
      this.loading.navigation.resolve(this.navigation);
    }), this.packaging.coverPath && (this.cover = this.resolve(this.packaging[t2(616)])), this.loading.manifest.resolve(this.packaging.manifest), this.loading[t2(1211)].resolve(this.packaging.metadata), this.loading.spine.resolve(this.spine), this.loading.cover.resolve(this[t2(670)]), this.loading.resources.resolve(this[t2(765)]), this.loading.pageList.resolve(this.pageList), this.isOpen = true, this.archived || this.settings.replacements && this.settings[t2(401)] != `none` ? this.replacements().then(() => {
      var e4 = t2;
      this.loaded[e4(1299)].then(() => {
        var t3 = e4;
        this.opening[t3(550)](this);
      });
    }).catch((e4) => {
      console.error(e4);
    }) : this.loaded.displayOptions.then(() => {
      this.opening.resolve(this);
    });
  }
  loadNavigation(e3) {
    var t2 = i;
    let n2 = e3.navPath || e3.ncxPath, r2 = e3[t2(1409)];
    return r2 ? new Promise((n3, i2) => {
      var a2 = t2;
      this.navigation = new Je(r2), e3[a2(560)] && (this.pageList = new tt(e3.pageList)), n3(this[a2(1111)]);
    }) : n2 ? this[t2(1021)](n2, `xml`).then((e4) => (this.navigation = new Je(e4), this.pageList = new tt(e4), this.navigation)) : new Promise((e4, t3) => {
      this.navigation = new Je(), this.pageList = new tt(), e4(this.navigation);
    });
  }
  section(e3) {
    var t2 = i;
    return this.spine[t2(472)](e3);
  }
  renderTo(e3, t2) {
    var n2 = i;
    return this.rendition = new Vt(this, t2), this[n2(1067)].attachTo(e3), this.rendition;
  }
  setRequestCredentials(e3) {
    this.settings.requestCredentials = e3;
  }
  setRequestHeaders(e3) {
    this.settings.requestHeaders = e3;
  }
  unarchive(e3, t2) {
    var n2 = i;
    return this[n2(1226)] = new Ut(), this.archive.open(e3, t2);
  }
  [i(843)](e3) {
    var t2 = i;
    let n2 = this.settings.replacements && this.settings.replacements !== t2(1153), r2 = this.url, a2 = this.settings.requestMethod || Be[t2(594)](this);
    return this.storage = new Gt(e3, a2, this.resolve.bind(this)), this.request = this[t2(1251)][t2(410)][t2(594)](this[t2(1251)]), this[t2(1421)][t2(631)](() => {
      var e4 = t2;
      this.archived && (this.storage[e4(1145)] = this.archive.request[e4(594)](this.archive));
      let i2 = (e5, t3) => {
        t3.output = this.resources.substitute(e5, t3.url);
      };
      this[e4(765)].settings.replacements = n2 || `blobUrl`, this.resources.replacements().then(() => this.resources[e4(434)]()), this.storage.on(`offline`, () => {
        this.url = new ke(`/`, ``), this.spine.hooks.serialize.register(i2);
      }), this[e4(1251)].on(e4(1388), () => {
        this.url = r2, this.spine.hooks.serialize.deregister(i2);
      });
    }), this.storage;
  }
  coverUrl() {
    var e3 = i;
    return this.loaded.cover.then(() => this[e3(670)] ? this.archived ? this[e3(1226)].createUrl(this.cover) : this.cover : null);
  }
  replacements() {
    var e3 = i;
    return this.spine.hooks.serialize.register((e4, t2) => {
      t2.output = this.resources.substitute(e4, t2.url);
    }), this[e3(765)].replacements().then(() => this.resources.replaceCss());
  }
  getRange(e3) {
    var t2 = i, n2 = new Ne(e3), r2 = this.spine[t2(472)](n2.spinePos), a2 = this.load.bind(this);
    return r2 ? r2.load(a2).then(function(e4) {
      return n2[t2(354)](r2.document);
    }) : new Promise((e4, t3) => {
      t3(`CFI could not be found`);
    });
  }
  key(e3) {
    return `epubjs:0.3:` + (e3 || this.packaging.metadata.identifier || this.url.filename);
  }
  destroy() {
    var e3 = i;
    this.opened = void 0, this.loading = void 0, this[e3(1114)] = void 0, this.ready = void 0, this.isOpen = false, this.isRendered = false, this.spine && this.spine.destroy(), this.locations && this.locations[e3(881)](), this.pageList && this.pageList.destroy(), this.archive && this.archive[e3(881)](), this[e3(765)] && this.resources.destroy(), this.container && this.container.destroy(), this.packaging && this.packaging[e3(881)](), this.rendition && this.rendition.destroy(), this[e3(1299)] && this.displayOptions.destroy(), this.spine = void 0, this.locations = void 0, this.pageList = void 0, this.archive = void 0, this.resources = void 0, this.container = void 0, this.packaging = void 0, this.rendition = void 0, this.navigation = void 0, this.url = void 0, this.path = void 0, this.archived = false;
  }
};
(0, M.default)(Xt.prototype);
function Zt(e3, t2) {
  return new Xt(e3, t2);
}
Zt[i(1321)] = `0.3`, typeof global < `u` && (global.EPUBJS_VERSION = i(717)), Zt.Book = Xt, Zt.Rendition = Vt, Zt[i(817)] = lt, Zt[i(1198)] = Ne, Zt.utils = N;
var Qt = Zt;
export {
  Xt as Book,
  lt as Contents,
  Ne as EpubCFI,
  nt as Layout,
  Vt as Rendition,
  Qt as default
};
